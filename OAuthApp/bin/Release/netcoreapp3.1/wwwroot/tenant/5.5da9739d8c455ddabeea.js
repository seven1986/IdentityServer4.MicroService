(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0ylO":function(t,e,i){"use strict";i.r(e),i.d(e,"HttpLoaderFactory",function(){return j}),i.d(e,"AuthModule",function(){return R});var n=i("ofXK"),c=i("3Pt+"),r=i("tyNb"),s=i("fXoL"),o=i("8lDW"),a=i("JqCM"),b=i("sYmb"),l=i("QJFE");const d=function(t,e,i){return{icon:"question",title:t,confirmButtonText:e,cancelButtonText:i,showCancelButton:!0,animation:!1,showCloseButton:!0}};function u(t,e){if(1&t){const t=s.Pb();s.Ob(0,"li",13),s.Ob(1,"a",14),s.Wb("click",function(){s.nc(t);const i=e.$implicit;return s.ac(2).doAuthorize(i)}),s.vc(2),s.Nb(),s.Ob(3,"span",15),s.Ob(4,"button",16),s.Wb("confirm",function(){s.nc(t);const i=e.$implicit;return s.ac(2).delAccount(i)}),s.bc(5,"translate"),s.bc(6,"translate"),s.bc(7,"translate"),s.Zb(),s.Ob(8,"svg",17),s.Jb(9,"path",18),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=e.$implicit;s.xb(2),s.wc(t),s.xb(2),s.fc("swal",s.kc(8,d,s.cc(5,2,"\u662f\u5426\u786e\u8ba4\u5220\u9664\uff1f"),s.cc(6,4,"\u786e\u8ba4"),s.cc(7,6,"\u53d6\u6d88")))}}function h(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div"),s.Ob(1,"h4",5),s.Sb(2,6),s.Nb(),s.Ob(3,"div",7),s.tc(4,u,10,12,"li",8),s.Nb(),s.Ob(5,"button",9),s.Wb("click",function(){return s.nc(t),s.ac().doAuthorize()}),s.Sb(6,10),s.Nb(),s.Ob(7,"a",11),s.Sb(8,12),s.Nb(),s.Nb()}if(2&t){const t=s.ac();s.xb(4),s.fc("ngForOf",t.accounts)}}let f=(()=>{class t{constructor(t,e,i){this.authService=t,this.router=e,this.spinner=i,this.loginModel={username:"",password:""},this.accounts=[],this.showAccountPanel=!1,this.spinner.show(),this.accounts=this.authService.loggedAccounts(),this.accounts.length<1?location.href=this.authService.getAuthorizeUrl(this.authService.redirectUrl):(this.spinner.hide(),this.showAccountPanel=!0)}doAuthorize(t=""){this.spinner.show(),location.href=this.authService.getAuthorizeUrl(this.authService.redirectUrl,t)}delAccount(t){this.authService.delAccount(t),this.accounts=this.authService.loggedAccounts()}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(o.a),s.Ib(r.f),s.Ib(a.c))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-login"]],decls:5,vars:1,consts:function(){let t,e,i;return t=$localize`:@@选择账户␟a32c605573883f2ecc05f4670ac2819d80827b86␟3534256569610633327:选择账户`,e=$localize`:@@使用其他账户␟7ce53d53cbead1cc198c7a6509071b565c6e5690␟5605937061539126007:使用其他账户`,i=$localize`:@@返回␟e81bc577e08b01e7ebe9351760c0c845b3bb2fb4␟1768692559946731828:返回`,[[1,"container"],[1,"row"],[1,"col-md-6","col-sm-12","bg-white","border-left","border-right","pt-4","px-4",2,"margin","auto","min-height","100vh"],[4,"ngIf"],["size","default","color","#fff","type","ball-beat"],["translate",""],t,[1,"list-group","list-group-flush"],["class","list-group-item d-flex justify-content-between align-items-center pr-0",4,"ngFor","ngForOf"],["type","button","translate","",1,"btn","btn-primary","mt-3","btn-block",3,"click"],e,["routerLink","/","translate","",1,"btn","btn-light","btn-block","border","mt-3"],i,[1,"list-group-item","d-flex","justify-content-between","align-items-center","pr-0"],["href","javascript:void(0)",3,"click"],[1,"badge-pill"],["type","button",1,"btn","btn-link","text-dark","btn-sm",3,"swal","confirm"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"]]},template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"div",2),s.tc(3,h,9,1,"div",3),s.Nb(),s.Nb(),s.Nb(),s.Jb(4,"ngx-spinner",4)),2&t&&(s.xb(3),s.fc("ngIf",e.showAccountPanel))},directives:[n.l,a.a,b.a,n.k,r.h,l.a],pipes:[b.d],styles:[""]}),t})(),g=(()=>{class t{constructor(t,e,i,n){this.router=t,this.route=e,this.authService=i,this.spinner=n,this.queryParams={},this.spinner.show(),location.hash.substr(1).split("&").forEach(t=>{var e=t.split("=");this.queryParams[e[0]]=e[1]}),this.queryParams.access_token?(this.queryParams.state&&(this.authService.redirectUrl=this.queryParams.state),this.route.navigateByUrl("/auth2/signin?access_token="+this.queryParams.access_token)):(this.spinner.hide(),this.route.navigateByUrl("/"))}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(r.a),s.Ib(r.f),s.Ib(o.a),s.Ib(a.c))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-authcallback"]],decls:1,vars:0,consts:[["size","default","color","#fff","type","ball-beat"]],template:function(t,e){1&t&&s.Jb(0,"ngx-spinner",0)},directives:[a.a],styles:[""]}),t})();var p=i("xfLO"),m=i("5eHb");function v(t,e){if(1&t&&(s.Ob(0,"li",27),s.Ob(1,"div",28),s.Jb(2,"input",29),s.Ob(3,"label",30),s.vc(4),s.Nb(),s.Nb(),s.Ob(5,"div",31),s.Ob(6,"small"),s.vc(7),s.Nb(),s.Nb(),s.Nb()),2&t){const t=e.$implicit;s.xb(2),s.hc("id","scopes_",t.value,""),s.gc("value",t.value),s.fc("disabled",t.required),s.xb(1),s.hc("for","scopes_",t.value,""),s.xb(1),s.wc(t.displayName),s.xb(3),s.wc(t.description)}}function w(t,e){if(1&t&&(s.Ob(0,"li",27),s.Ob(1,"div",28),s.Jb(2,"input",29),s.Ob(3,"label",30),s.vc(4),s.Nb(),s.Nb(),s.Ob(5,"div",31),s.Ob(6,"small"),s.vc(7),s.Nb(),s.Nb(),s.Nb()),2&t){const t=e.$implicit;s.xb(2),s.hc("id","scopes_",t.value,""),s.gc("value",t.value),s.fc("disabled",t.required),s.xb(1),s.hc("for","scopes_",t.value,""),s.xb(1),s.wc(t.displayName),s.xb(3),s.wc(t.description)}}function O(t,e){if(1&t&&(s.Ob(0,"div",17),s.Ob(1,"h6",15),s.Sb(2,32),s.Nb(),s.Ob(3,"ul",19),s.tc(4,w,8,6,"li",20),s.Nb(),s.Nb()),2&t){const t=s.ac(2);s.xb(4),s.fc("ngForOf",t.data.apiScopes)}}function N(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div",2),s.Ob(1,"div",3),s.Ob(2,"div",4),s.Ob(3,"div",5),s.Ob(4,"div",6),s.Ob(5,"div",7),s.Jb(6,"img",8),s.Nb(),s.Ob(7,"h6",9),s.vc(8),s.Nb(),s.Ob(9,"div",10),s.Ob(10,"small"),s.vc(11),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"div",11),s.Ob(13,"h2",12),s.Zb(),s.Ob(14,"svg",13),s.Jb(15,"path",14),s.Nb(),s.Nb(),s.Yb(),s.Ob(16,"small",15),s.Sb(17,16),s.Nb(),s.Nb(),s.Ob(18,"div",6),s.Ob(19,"div",7),s.Jb(20,"img",8),s.Nb(),s.Ob(21,"h6",9),s.vc(22),s.Nb(),s.Nb(),s.Nb(),s.Ob(23,"div",17),s.Ob(24,"h6",15),s.Sb(25,18),s.Nb(),s.Ob(26,"ul",19),s.tc(27,v,8,6,"li",20),s.Nb(),s.Nb(),s.tc(28,O,5,1,"div",21),s.Ob(29,"div",22),s.Ob(30,"button",23),s.Wb("click",function(){return s.nc(t),s.ac().Consent()}),s.Sb(31,24),s.Nb(),s.Ob(32,"a",25),s.Sb(33,26),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=s.ac();s.xb(6),s.fc("src",t.data.clientLogoUrl,s.pc),s.xb(2),s.xc(" ",t.data.clientName," "),s.xb(3),s.wc(t.data.clientUrl),s.xb(9),s.fc("src",null==t.data.tenant?null:t.data.tenant.logoUri,s.pc),s.xb(2),s.wc(null==t.data.tenant?null:t.data.tenant.name),s.xb(5),s.fc("ngForOf",t.data.identityScopes),s.xb(1),s.fc("ngIf",t.data.apiScopes&&t.data.apiScopes.length>0)}}let x=(()=>{class t{constructor(t,e,i,n){this.route=t,this.oauthapp=e,this.spinner=i,this.toastr=n,this.data={},this.returnUrl="",this.onLoading=!1,this.spinner.show(),this.onLoading=!0,this.route.queryParams.subscribe(t=>{this.returnUrl=t.returnUrl,this.oauthapp.preConsent(this.returnUrl).subscribe(t=>{this.spinner.hide(),this.onLoading=!1,200==t.code?this.data=t.data:this.toastr.error(t.codeName,t.message,{timeOut:800,progressBar:!1})})})}Consent(){var t=this.data.identityScopes.filter(t=>t.checked).map(t=>t.value),e=this.data.apiScopes.filter(t=>t.checked).map(t=>t.value),i=t.concat(e);this.spinner.show(),this.oauthapp.Consent(this.returnUrl,i).subscribe(t=>{if(200!=t.code)return this.toastr.error(t.message,t.codeName,{timeOut:800,progressBar:!1}),void this.spinner.hide();location.href=this.returnUrl})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(r.a),s.Ib(p.a),s.Ib(a.c),s.Ib(m.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-consent"]],decls:2,vars:1,consts:function(){let t,e,i,n,c;return t=$localize`:@@请求你的授权␟3b6e1c8fc1e260107368c2420355af41628ec227␟7286779043618136175:请求你的授权`,e=$localize`:@@个人信息␟4c15e6c284fb785bdceb42cb945f0e0514312044␟5719361884666547562:个人信息`,i=$localize`:@@确认授权␟cc8f81e6a11a8483c90dd6b3c84402b6b3ef9444␟6504831158278945565:确认授权`,n=$localize`:@@取消␟f6f3be110e7043e3cfe71a7bd75b8b3be79bff5d␟5601254587589034652:取消`,c=$localize`:@@服务␟b67f660c4292e2cce9872e83ff8058856a0b06d4␟1412751617776916838:服务`,[["size","default","color","#fff","type","ball-beat"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-4","col-sm-12","offset-md-4","border-left","border-right","bg-white",2,"min-height","100vh"],[1,"d-flex","flex-row","my-4"],[1,"flex-fill","w-100","text-center"],[1,"client-logo"],["width","64px",1,"border","bg-white","p-1","rounded-circle",3,"src"],[1,"mt-2"],[1,"text-muted"],[1,"flex-fill","w-100","text-center","text-muted","align-content-center"],[1,"mt-3"],["width","1em","height","1em","viewBox","0 0 16 16","fill","currentColor","xmlns","http://www.w3.org/2000/svg",1,"bi","bi-arrow-left-right"],["fill-rule","evenodd","d","M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"],["translate",""],t,[1,"form-group"],e,[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],["class","form-group",4,"ngIf"],[1,"form-group","mt-5"],["type","button","translate","",1,"btn","btn-primary","btn-block","my-3",3,"click"],i,["routerLink","/","translate","",1,"btn","btn-light","btn-block","border"],n,[1,"list-group-item"],[1,"form-check"],["type","checkbox","name","ScopesConsented","checked","checked",1,"form-check-input",3,"id","value","disabled"],[1,"form-check-label",3,"for"],[1,"consent-description"],c]},template:function(t,e){1&t&&(s.Jb(0,"ngx-spinner",0),s.tc(1,N,34,7,"div",1)),2&t&&(s.xb(1),s.fc("ngIf",!e.onLoading))},directives:[a.a,n.l,b.a,n.k,r.h],styles:[""]}),t})();var y=i("AytR");const k=function(t,e,i){return{icon:"question",title:t,confirmButtonText:e,cancelButtonText:i,showCancelButton:!0,animation:!1,showCloseButton:!0}};function I(t,e){if(1&t){const t=s.Pb();s.Ob(0,"li",11),s.Ob(1,"a",12),s.Wb("click",function(){s.nc(t);const i=e.$implicit;return s.ac(2).setLoginHint(i)}),s.vc(2),s.Nb(),s.Ob(3,"span",13),s.Ob(4,"button",14),s.Wb("confirm",function(){s.nc(t);const i=e.$implicit;return s.ac(2).delAccount(i)}),s.bc(5,"translate"),s.bc(6,"translate"),s.bc(7,"translate"),s.Zb(),s.Ob(8,"svg",15),s.Jb(9,"path",16),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=e.$implicit;s.xb(2),s.wc(t),s.xb(2),s.fc("swal",s.kc(8,k,s.cc(5,2,"\u662f\u5426\u786e\u8ba4\u5220\u9664\uff1f"),s.cc(6,4,"\u786e\u8ba4"),s.cc(7,6,"\u53d6\u6d88")))}}function S(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div",2),s.Ob(1,"div",3),s.Ob(2,"div",4),s.Ob(3,"div"),s.Ob(4,"h4",5),s.Sb(5,6),s.Nb(),s.Ob(6,"div",7),s.tc(7,I,10,12,"li",8),s.Nb(),s.Ob(8,"button",9),s.Wb("click",function(){return s.nc(t),s.ac().signInWithNewAccount()}),s.Sb(9,10),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=s.ac();s.xb(7),s.fc("ngForOf",t.accounts)}}function U(t,e){if(1&t){const t=s.Pb();s.Ob(0,"button",37),s.Wb("click",function(){return s.nc(t),s.ac(2).signInAccounts()}),s.Zb(),s.Ob(1,"svg",38),s.Jb(2,"path",39),s.Nb(),s.Nb()}}const z=function(t,e){return{"is-valid":t,"is-invalid":e}};function A(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div",22),s.Ob(1,"label",40),s.Sb(2,41),s.Nb(),s.Ob(3,"input",42,43),s.Wb("ngModelChange",function(e){return s.nc(t),s.ac(2).loginModel.username=e}),s.Nb(),s.Ob(5,"small",44),s.Sb(6,45),s.Nb(),s.Ob(7,"div",27),s.Sb(8,46),s.Nb(),s.Nb()}if(2&t){const t=s.mc(4),e=s.ac(2);s.xb(3),s.fc("ngClass",s.jc(3,z,t.valid,t.invalid&&t.dirty))("ngModel",e.loginModel.username),s.xb(4),s.fc("hidden",t.valid)}}function L(t,e){if(1&t&&(s.Ob(0,"div",47),s.Jb(1,"img",48),s.Nb(),s.Ob(2,"div",49),s.Ob(3,"h4"),s.vc(4),s.Nb(),s.Nb()),2&t){const t=s.ac(2);s.xb(4),s.wc(t.loginModel.username)}}function M(t,e){if(1&t){const t=s.Pb();s.Ob(0,"a",54),s.Wb("click",function(){s.nc(t);const i=e.$implicit;return s.ac(3).doExternalLogin(i)}),s.vc(1),s.Nb()}if(2&t){const t=e.$implicit;s.xb(1),s.wc(t)}}function P(t,e){if(1&t&&(s.Ob(0,"div",50),s.Ob(1,"small",51),s.Ob(2,"font",5),s.Sb(3,52),s.Nb(),s.vc(4," - "),s.Nb(),s.tc(5,M,2,1,"a",53),s.Nb()),2&t){const t=s.ac(2);s.xb(5),s.fc("ngForOf",t.logins)}}function $(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div",2),s.Ob(1,"div",3),s.Ob(2,"div",4),s.Ob(3,"h4"),s.Ob(4,"span",5),s.Sb(5,17),s.Nb(),s.tc(6,U,3,0,"button",18),s.Nb(),s.Ob(7,"form",null,19),s.tc(9,A,9,6,"div",20),s.tc(10,L,5,1,"ng-template",null,21,s.uc),s.Ob(12,"div",22),s.Ob(13,"label",23),s.Sb(14,24),s.Nb(),s.Ob(15,"input",25,26),s.Wb("ngModelChange",function(e){return s.nc(t),s.ac().loginModel.password=e})("keyup",function(e){return s.nc(t),s.ac().keyUp(e)}),s.Nb(),s.Ob(17,"div",27),s.Sb(18,28),s.Nb(),s.Nb(),s.Ob(19,"section",29),s.Ob(20,"div",30),s.Ob(21,"div",31),s.Ob(22,"button",32),s.Wb("click",function(){return s.nc(t),s.ac().login()}),s.Sb(23,33),s.Nb(),s.Ob(24,"a",34),s.Sb(25,35),s.Nb(),s.tc(26,P,6,1,"div",36),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=s.mc(8),e=s.mc(11),i=s.mc(16),n=s.ac();s.xb(6),s.fc("ngIf",n.accounts.length>0),s.xb(3),s.fc("ngIf",!n.loginHintFlag)("ngIfElse",e),s.xb(6),s.fc("ngClass",s.jc(9,z,i.valid,i.invalid&&i.dirty))("ngModel",n.loginModel.password),s.xb(2),s.fc("hidden",i.valid),s.xb(5),s.fc("disabled",!t.form.valid),s.xb(2),s.fc("href",n.backUrl,s.pc),s.xb(2),s.fc("ngIf",!n.loginHintFlag)}}let C=(()=>{class t{constructor(t,e,i,n,c){this.route=t,this.router=e,this.authService=i,this.toastr=n,this.spinner=c,this.accounts=[],this.showAccountPanel=!1,this.showSignInPanel=!0,this.backUrl="",this.loginModel={username:"",password:""},this.returnUrl="",this.logins=[],this.loginHintFlag=!1,this.externalLoginUrl=y.a.identity.server+"/Authing/ExternalLogin",this.externalLoginReturnUrl="",this.getExternalLogins(),this.route.queryParams.subscribe(t=>{if(t.ReturnUrl){this.returnUrl=t.ReturnUrl,this.externalLoginReturnUrl=encodeURIComponent(t.ReturnUrl);try{var e=this.returnUrl.split("&").filter(t=>"loginHint"==t.split("=")[0])[0].split("=")[1];this.loginModel.username=e,this.loginModel.username&&(this.loginHintFlag=!0)}catch(i){}try{this.backUrl=decodeURIComponent(this.returnUrl.split("&").filter(t=>"redirect_uri"==t.split("=")[0])[0].split("=")[1])}catch(i){this.backUrl="/auth2/login"}}else t.access_token?this.signInByAccessToken(t.access_token):this.toastr.error("ReturnUrl is null!");this.accounts=this.authService.loggedAccounts()})}setLoginHint(t){this.loginModel.username=t,this.loginHintFlag=!0,this.showSignInPanel=!0,this.showAccountPanel=!1}signInWithNewAccount(){this.loginModel.username="",this.loginHintFlag=!1,this.showSignInPanel=!0,this.showAccountPanel=!1}signInAccounts(){this.showSignInPanel=!1,this.showAccountPanel=!0}delAccount(t){this.authService.delAccount(t),this.accounts=this.authService.loggedAccounts(),this.accounts.length<1&&(this.loginHintFlag=!1,this.loginModel.username="",this.loginModel.password="",this.showSignInPanel=!0,this.showAccountPanel=!1)}getExternalLogins(){this.authService.externalLogins().subscribe(t=>{this.logins=t.data})}doExternalLogin(t){this.spinner.show(),location.href=`${this.externalLoginUrl}?provider=${t}&returnUrl=${this.externalLoginReturnUrl}`}signInByAccessToken(t){this.spinner.show(),this.authService.loginByAccesstoken(t).add(()=>{if(this.authService.isLoggedIn){let t=this.authService.redirectUrl?this.router.parseUrl(this.authService.redirectUrl):"/";this.router.navigateByUrl(t,{queryParamsHandling:"preserve",preserveFragment:!0}),this.spinner.hide()}}).unsubscribe()}keyUp(t){if(13==t.keyCode){if(!this.loginModel.username||!this.loginModel.password)return;this.login()}}login(){this.spinner.show(),this.authService.signIn(this.loginModel.username,this.loginModel.password,this.returnUrl).subscribe(t=>{200==t.code&&1==t.data.succeeded?(this.authService.addAccount(this.loginModel.username),setTimeout(()=>{location.href=this.returnUrl},200)):(this.spinner.hide(),this.toastr.error("\u767b\u9646\u5931\u8d25\uff0c\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef","error"))})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(r.a),s.Ib(r.f),s.Ib(o.a),s.Ib(m.b),s.Ib(a.c))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-signin"]],decls:3,vars:2,consts:function(){let t,e,i,n,c,r,s,o,a,b,l;return t=$localize`:@@选择账户␟a32c605573883f2ecc05f4670ac2819d80827b86␟3534256569610633327:选择账户`,e=$localize`:@@使用其他账户␟7ce53d53cbead1cc198c7a6509071b565c6e5690␟5605937061539126007:使用其他账户`,i=$localize`:@@登录␟ae5dccdf399fb229fb9f0153a7ec5c28a4579ca1␟1496302481389750951:登录`,n=$localize`:@@密码␟125849fb67b2f0af5ab31d4577126fcd52c4dcb6␟6971624281171557374:密码`,c=$localize`:@@必须填写密码␟61e29657e17d5662b4e7401e8d6a1e64d0e2819d␟4862243123336400326:必须填写密码`,r=$localize`:@@登录␟ae5dccdf399fb229fb9f0153a7ec5c28a4579ca1␟1496302481389750951:登录`,s=$localize`:@@返回␟e81bc577e08b01e7ebe9351760c0c845b3bb2fb4␟1768692559946731828:返回`,o=$localize`:@@账号␟0115e0ed1b079ec138ed51b29c8e203921fb272b␟6363998355026114303:账号`,a=$localize`:@@请输入您的邮箱账号/手机号␟ee82ca7d2108fb5cb3913a37a26714b36018a2ca␟4180909983048484744:请输入您的邮箱账号/手机号`,b=$localize`:@@请输入您的邮箱账号/手机号␟ee82ca7d2108fb5cb3913a37a26714b36018a2ca␟4180909983048484744:请输入您的邮箱账号/手机号`,l=$localize`:@@其他登录␟4f2d15f4f96f79ab6217ddd9b05b311884ea01b3␟907007710172511226:其他登录`,[["class","container",4,"ngIf"],["size","default","color","#fff","type","ball-beat"],[1,"container"],[1,"row"],[1,"col-md-6","col-sm-12","bg-white","border-left","border-right","pt-4","px-4",2,"margin","auto","min-height","100vh"],["translate",""],t,[1,"list-group","list-group-flush"],["class","list-group-item d-flex justify-content-between align-items-center pr-0",4,"ngFor","ngForOf"],["type","button","translate","",1,"btn","btn-primary","mt-3","btn-block",3,"click"],e,[1,"list-group-item","d-flex","justify-content-between","align-items-center","pr-0"],["href","javascript:void(0)",3,"click"],[1,"badge-pill"],["type","button",1,"btn","btn-link","text-dark","btn-sm",3,"swal","confirm"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],i,["class","btn btn-sm border float-right",3,"click",4,"ngIf"],["loginForm","ngForm"],["class","form-group",4,"ngIf","ngIfElse"],["templateName",""],[1,"form-group"],["for","password","translate",""],n,["id","password","type","password","name","password","required","",1,"form-control",3,"ngClass","ngModel","ngModelChange","keyup"],["password","ngModel"],["translate","",1,"invalid-feedback",3,"hidden"],c,[1,"d-flex"],[1,"flex-fill"],[2,"position","relative"],["type","button","translate","",1,"btn","btn-primary","btn-block","mt-3",3,"disabled","click"],r,["translate","",1,"btn","btn-light","border","btn-block","mt-3",3,"href"],s,["class","pt-3",4,"ngIf"],[1,"btn","btn-sm","border","float-right",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-ui-radios-grid"],["d","M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"],["for","username","translate",""],o,["id","username","type","text","name","username","required","",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["username","ngModel"],["translate","",1,"form-text","text-muted"],a,b,[1,"text-center"],["src","assets/user.png","width","64px",1,"border","p-1","rounded-circle","shadow","my-3"],[1,"form-group","text-center","pt-3","text-muted"],[1,"pt-3"],[1,"text-muted",2,"margin-top",".8rem"],l,["href","javascript:void(0)","class","btn btn-light border btn-sm m-2",3,"click",4,"ngFor","ngForOf"],["href","javascript:void(0)",1,"btn","btn-light","border","btn-sm","m-2",3,"click"]]},template:function(t,e){1&t&&(s.tc(0,S,10,1,"div",0),s.tc(1,$,27,12,"div",0),s.Jb(2,"ngx-spinner",1)),2&t&&(s.fc("ngIf",e.showAccountPanel),s.xb(1),s.fc("ngIf",e.showSignInPanel))},directives:[n.l,a.a,b.a,n.k,l.a,c.j,c.d,c.e,c.a,c.h,n.j,c.c,c.f],pipes:[b.d],styles:[""]}),t})();var F=i("tk/3");const q=[{path:"",redirectTo:"signin"},{path:"login",component:f},{path:"signin",component:C},{path:"signin-callback",component:g},{path:"error",component:(()=>{class t{constructor(t,e){this.route=t,this.http=e,this.errorId="",this.data={},t.queryParams.subscribe(t=>{this.errorId=t.errorId,this.getErrorReport()})}getErrorReport(){this.http.get(`${y.a.identity.sso_server}/api/authing/ErrorReport?errorId=${this.errorId}`).subscribe(t=>{this.data=t.data})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(r.a),s.Ib(F.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-error"]],decls:20,vars:7,consts:function(){let t;return t=$localize`:@@返回首页␟7c180ca29987c30365d00e24d798ff9004bc26a4␟7581476335968291359:返回首页`,[[1,"container"],[1,"row"],[1,"col"],[1,"card","my-3"],[1,"card-header"],[1,"card-body"],[1,"card-footer"],[1,"text-muted","float-right"],["routerLink","/","translate","",1,"btn","btn-primary","btn-block"],t]},template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"div",2),s.Ob(3,"div",3),s.Ob(4,"div",4),s.vc(5),s.Nb(),s.Ob(6,"div",5),s.Ob(7,"h6"),s.vc(8),s.Nb(),s.Ob(9,"p"),s.vc(10),s.Nb(),s.Jb(11,"hr"),s.Ob(12,"pre"),s.vc(13),s.bc(14,"json"),s.Nb(),s.Nb(),s.Ob(15,"div",6),s.Ob(16,"small",7),s.vc(17),s.Nb(),s.Nb(),s.Nb(),s.Ob(18,"a",8),s.Sb(19,9),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.xb(5),s.xc(" ",e.data.clientId," "),s.xb(3),s.wc(e.data.error),s.xb(2),s.wc(e.data.errorDescription),s.xb(3),s.wc(s.cc(14,5,e.data)),s.xb(4),s.xc("requestId:",e.data.requestId,""))},directives:[r.h,b.a],pipes:[n.f],styles:[""]}),t})()},{path:"consent",component:x}];let B=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(q)],r.i]}),t})();var J=i("mqiu"),H=i("d2mR");function j(t){return new J.a(t,y.a.identity.i18n_asset_prefix)}let R=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[H.a,n.c,c.b,B,a.b,l.b.forRoot(),b.c.forChild({loader:{provide:b.b,useFactory:j,deps:[F.b]},isolate:!1,extend:!0})]]}),t})()}}]);