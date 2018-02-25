﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.MicroService.Data;
using IdentityServer4.MicroService.Services;
using IdentityServer4.MicroService.Tenant;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.QQ;
using Microsoft.AspNetCore.Authentication.Weixin;
using Microsoft.AspNetCore.Authentication.Weibo;
using Microsoft.AspNetCore.Authentication.GitHub;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Twitter;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using static IdentityServer4.MicroService.MicroserviceConfig;

namespace IdentityServer4.MicroService
{
    public class AppDefaultData
    {
        /// <summary>
        /// 初始管理员
        /// </summary>
        public class Admin
        {
            public const string Email = "1@1.com";
            public const string PasswordHash = "123456aA!";
        }

        /// <summary>
        /// 初始租户
        /// </summary>
        public class Tenant
        {
            public static string IdentityServerIssuerUri = "localhost:44309";
            public static string AppHostName = "localhost:44309";
            public static string Name = "微服务";
            public static string WebSite = "http://localhost:44309";

            public static Dictionary<string, string> TenantProperties =
                    new Dictionary<string, string>()
                {
                //auth login
            { $"{WeixinDefaults.AuthenticationScheme}:ClientId","1" },
            { $"{WeixinDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{WeiboDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{WeiboDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{GitHubDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{GitHubDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{QQDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{QQDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{FacebookDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{FacebookDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{MicrosoftAccountDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{MicrosoftAccountDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{GoogleDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{GoogleDefaults.AuthenticationScheme}:ClientSecret", "1"},
            { $"{TwitterDefaults.AuthenticationScheme}:ClientId", "1"},
            { $"{TwitterDefaults.AuthenticationScheme}:ClientSecret", "1"},

            //AzureApiManagement
            { "Azure:ApiManagement:Host", ""},
            { "Azure:ApiManagement:ApiId", ""},
            { "Azure:ApiManagement:ApiKey", ""},
            { "Azure:ApiManagement:AuthorizationServerId", ""},
            { "Azure:ApiManagement:ProductId", ""},
            { "Azure:ApiManagement:PortalUris", ""},
                    };
        }

        /// <summary>
        /// 初始Client(可以用来测试)
        /// </summary>
        public class TestClient
        {
            public const string ClientId = "test";
            public const string ClientName = "测试专用";
            public const string ClientSecret = "1";
            public static List<string> RedirectUris = new List<string>()
            {
                "https://{0}/swagger/o2c.html"
            };
        }

        public static IEnumerable<AppUser> GetUsers()
        {
            return new List<AppUser>
                {
                     new AppUser()
                     {
                        Email=Admin.Email,
                        UserName=Admin.Email,
                        PasswordHash=Admin.PasswordHash,
                        EmailConfirmed=true,
                        ParentUserID=AppConstant.seedUserId
                     }
                };
        }

        public static IEnumerable<AppRole> GetRoles()
        {
            var result = new List<AppRole>();

            var roles = typeof(Roles).GetFields();

            foreach (var role in roles)
            {
                var roleName = role.GetRawConstantValue().ToString();

                var roleDisplayName = role.GetCustomAttribute<DisplayNameAttribute>().DisplayName;

                result.Add(new AppRole
                {
                    Name = roleName,
                    NormalizedName = roleDisplayName,
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                });
            }

            return result;
        }

        public static IEnumerable<Client> GetClients()
        {
            // client credentials client
            return new List<Client>
                {
                    #region Default Test Client
		            new Client
                    {
                        ClientId = TestClient.ClientId,
                        ClientName = TestClient.ClientName,
                        AllowedGrantTypes = GrantTypes.CodeAndClientCredentials,
                        ClientSecrets =
                        {
                            new Secret(TestClient.ClientSecret.Sha256())
                        },
                        BackChannelLogoutSessionRequired=false,
                        BackChannelLogoutUri="",
                        ConsentLifetime=969000,
                        // 需要设置为true，否则token无法附加tenant相关信息
                        AlwaysSendClientClaims = true,
                        FrontChannelLogoutSessionRequired=false,
                        FrontChannelLogoutUri="",

                        RedirectUris = TestClient.RedirectUris,

                        AllowedScopes =
                        {
                            IdentityServerConstants.StandardScopes.OpenId,
                            IdentityServerConstants.StandardScopes.Profile,
                            MicroServiceName + ".all"
                        },
                        AllowOfflineAccess = true
                    }
	                #endregion
                };
        }

        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
                {
                    new IdentityResources.OpenId(){  UserClaims={ "role", ClaimTypes.UserPermission } },
                    new IdentityResources.Profile(),
                    new IdentityResources.Address(),
                    new IdentityResources.Email(),
                    new IdentityResources.Phone(),
                };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            var scopes = typeof(ClientScopes).GetFields().Select(x =>
            {
                var permissionValues =
                x.GetCustomAttribute<PolicyClaimValuesAttribute>().ClaimsValues;

                var description =
                x.GetCustomAttribute<DescriptionAttribute>().Description;

                return new Scope(permissionValues[0], description);

            }).ToList();

            scopes.Add(new Scope(MicroServiceName + ".all", "所有权限"));

            return new List<ApiResource>
                {
                    new ApiResource()
                    {
                        Enabled =true,
                        ApiSecrets = {},
                        Name = MicroServiceName,
                        DisplayName = MicroServiceName,
                        Description = MicroServiceName,
                        Scopes = scopes,
                        //需要使用的用户claims
                        UserClaims= {
                            ClaimTypes.UserPermission,
                            "role"
                        }
                    }
                };
        }

        /// <summary>
        /// 数据库初始化
        /// </summary>
        public static void InitializeDatabase(IApplicationBuilder app, IConfigurationRoot config)
        {
            Tenant.AppHostName = config["IdentityServer"];

            Tenant.IdentityServerIssuerUri = Tenant.AppHostName;

            TestClient.RedirectUris[0] = string.Format(TestClient.RedirectUris[0], Tenant.AppHostName);

            using (var scope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                #region identityserver
                scope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();
                var context = scope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();
                context.Database.Migrate();
                if (!context.Clients.Any())
                {
                    foreach (var client in GetClients())
                    {
                        context.Clients.Add(client.ToEntity());
                    }
                    context.SaveChanges();
                }
                if (!context.IdentityResources.Any())
                {
                    foreach (var resource in GetIdentityResources())
                    {
                        context.IdentityResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }
                if (!context.ApiResources.Any())
                {
                    foreach (var resource in GetApiResources())
                    {
                        context.ApiResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }
                #endregion

                #region tenant
                var tenantDbContext = scope.ServiceProvider.GetRequiredService<TenantDbContext>();
                tenantDbContext.Database.Migrate();
                if (!tenantDbContext.Tenants.Any())
                {
                    #region Create Default Tenant
                    var tenant = new AppTenant()
                    {
                        CacheDuration = 600,
                        CreateDate = DateTime.UtcNow,
                        IdentityServerIssuerUri = Tenant.IdentityServerIssuerUri,
                        LastUpdateTime = DateTime.UtcNow,
                        Name = Tenant.Name,
                        WebSite = Tenant.WebSite,
                        OwnerUserId = AppConstant.seedUserId, //默认设置为1
                        Status = TenantStatus.Enable,
                        Theme = "default"
                    };
                    tenant.Hosts.Add(new AppTenantHost() { HostName = Tenant.AppHostName });
                    tenant.Properties.AddRange(Tenant.TenantProperties.Select(x => new AppTenantProperty() { Key = x.Key, Value = x.Value }));
                    tenantDbContext.Tenants.Add(tenant);
                    tenantDbContext.SaveChanges();
                    #endregion
                } 
                #endregion

                var userContext = scope.ServiceProvider.GetRequiredService<IdentityDbContext>();
                userContext.Database.Migrate();

                if (!userContext.Roles.Any())
                {
                    foreach (var role in GetRoles())
                    {
                        userContext.Roles.Add(role);
                    }
                    userContext.SaveChanges();
                }

                if (!userContext.Users.Any())
                {
                    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();

                    var roleIds = userContext.Roles.Select(x => x.Id).ToList();

                    var permissions = typeof(UserPermissions).GetFields().Select(x => x.GetCustomAttribute<PolicyClaimValuesAttribute>().ClaimsValues[0]).ToList();
                    permissions.Add(MicroServiceName + ".all");

                    var tenantIds = tenantDbContext.Tenants.Select(x => x.Id).ToList();

                    foreach (var _user in GetUsers())
                    {
                        var r = AccountService.CreateUser(AppConstant.seedTenantId,
                             userManager,
                             userContext,
                             _user,
                             roleIds,
                            string.Join(",", permissions),
                            tenantIds).Result;

                        #region User Clients
                        var clientIds = context.Clients.Select(x => x.Id).ToList();
                        foreach (var cid in clientIds)
                        {
                            _user.Clients.Add(new AspNetUserClient()
                            {
                                ClientId = cid
                            });
                        }
                        #endregion

                        #region User ApiResources
                        var apiIds = context.ApiResources.Select(x => x.Id).ToList();
                        foreach (var apiId in apiIds)
                        {
                            _user.ApiResources.Add(new AspNetUserApiResource()
                            {
                                ApiResourceId = apiId,
                            });
                        }
                        #endregion

                        userContext.SaveChanges();
                    }
                }
            }
        }
    }
}