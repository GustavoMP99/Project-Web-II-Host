"use strict";(self.webpackChunkFakeShop=self.webpackChunkFakeShop||[]).push([[186],{7186:(P,u,i)=>{i.r(u),i.d(u,{AuthModule:()=>O});var v=i(9808),y=i(9525),b=i(4999),x=i(5226),l=i.n(x),e=i(4893),p=i(520);let I=(()=>{class t{constructor(a){this._http=a,this.baseUrl="https://fakeshop-backend.herokuapp.com",this.endpoint="/login",this.login=r=>this._http.post(this.baseUrl+this.endpoint,r)}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275inject(p.eN))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=i(6360),f=i(508);const S=["*",[["mat-card-footer"]]],D=["*","mat-card-footer"];let M=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),h=(()=>{class t{constructor(a){this._animationMode=a}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(w.Qb,8))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(a,r){2&a&&e.\u0275\u0275classProp("_mat-animation-noopable","NoopAnimations"===r._animationMode)},exportAs:["matCard"],ngContentSelectors:D,decls:2,vars:0,template:function(a,r){1&a&&(e.\u0275\u0275projectionDef(S),e.\u0275\u0275projection(0),e.\u0275\u0275projection(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),A=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[f.BQ],f.BQ]}),t})();var d=i(2382),s=i(7322),m=i(7531),g=i(7423);let F=(()=>{class t{constructor(a){this._loginService=a,this.username="",this.password="",this.dataSource=new b.by,this.tryLogin=()=>{this._loginService.login({email:this.username,password:this.password}).subscribe({next:o=>{console.log(o);var c={email:o.data.email,username:o.data.username,token:o.token,role:o.data.role};(c.role="admin")?(sessionStorage.setItem("actualUser",JSON.stringify(c)),l().fire("Done","Loged!","success").then(()=>{location.href="/shop"})):l().fire("Done","Loged!","success").then(()=>{location.href="/"})},error:o=>{console.log(o),l().fire("Error","Cant login!","error").then(()=>{location.reload()})}})}}ngOnInit(){this.username="",this.password=""}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(I))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-login"]],decls:14,vars:2,consts:[[1,"general-login-container"],["type","email","matInput","","placeholder","Email","required","","name","username",3,"ngModel","ngModelChange"],[1,"p-password"],["type","password","matInput","","placeholder","Password","required","","name","password",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","","color","primary",3,"click"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"mat-card")(2,"mat-card-title"),e.\u0275\u0275text(3,"Login"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-card-content")(5,"form")(6,"p")(7,"mat-form-field")(8,"input",1),e.\u0275\u0275listener("ngModelChange",function(c){return r.username=c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(9,"p",2)(10,"mat-form-field")(11,"input",3),e.\u0275\u0275listener("ngModelChange",function(c){return r.password=c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(12,"button",4),e.\u0275\u0275listener("click",function(){return r.tryLogin()}),e.\u0275\u0275text(13,"Login"),e.\u0275\u0275elementEnd()()()()()),2&a&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("ngModel",r.username),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",r.password))},directives:[h,C,M,d._Y,d.JL,d.F,s.KE,m.Nt,d.Fj,d.Q7,d.JJ,d.On,g.lW],styles:[".general-login-container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}mat-card-title[_ngcontent-%COMP%]{margin-bottom:7%}mat-card[_ngcontent-%COMP%]{height:40%;width:50%;display:flex;align-items:center;justify-content:center;flex-direction:column}mat-card-content[_ngcontent-%COMP%]{width:50%}mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}p[_ngcontent-%COMP%]{width:100%}.p-password[_ngcontent-%COMP%]{margin-bottom:10%}"]}),t})(),_=(()=>{class t{constructor(a){this._http=a,this.baseUrl="https://fakeshop-backend.herokuapp.com",this.endpoint="/users",this.create=r=>this._http.post(this.baseUrl+this.endpoint,r)}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275inject(p.eN))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const j=[{path:"",children:[{path:"login",component:F},{path:"register",component:(()=>{class t{constructor(a){this._userService=a,this.username="",this.password="",this.email="",this.postCustomer=()=>{this._userService.create({username:this.username,password:this.password,email:this.email}).subscribe({error:o=>{201!=o.status?(l().fire("Error","User not created!","error").then(()=>{location.reload()}),console.log(o)):l().fire("Done","User Created!","success").then(()=>{location.href="/"})}})}}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(_))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-register"]],decls:17,vars:3,consts:[[1,"general-register-container"],["type","email","matInput","","placeholder","Email","required","","name","email",3,"ngModel","ngModelChange"],["type","text","matInput","","placeholder","Username","required","","name","username",3,"ngModel","ngModelChange"],["id","password","type","password","matInput","","placeholder","Password","required","","name","password",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","","color","primary",3,"click"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"mat-card")(2,"mat-card-title"),e.\u0275\u0275text(3,"Register"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-card-content")(5,"form")(6,"p")(7,"mat-form-field")(8,"input",1),e.\u0275\u0275listener("ngModelChange",function(c){return r.email=c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(9,"p")(10,"mat-form-field")(11,"input",2),e.\u0275\u0275listener("ngModelChange",function(c){return r.username=c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(12,"p")(13,"mat-form-field")(14,"input",3),e.\u0275\u0275listener("ngModelChange",function(c){return r.password=c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(15,"button",4),e.\u0275\u0275listener("click",function(){return r.postCustomer()}),e.\u0275\u0275text(16,"Login"),e.\u0275\u0275elementEnd()()()()()),2&a&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("ngModel",r.email),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",r.username),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",r.password))},directives:[h,C,M,d._Y,d.JL,d.F,s.KE,m.Nt,d.Fj,d.Q7,d.JJ,d.On,g.lW],styles:[".general-register-container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}mat-card-title[_ngcontent-%COMP%]{margin-bottom:7%}mat-card[_ngcontent-%COMP%]{height:50%;width:50%;display:flex;align-items:center;justify-content:center;flex-direction:column}mat-card-content[_ngcontent-%COMP%]{width:50%}mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}p[_ngcontent-%COMP%]{width:100%}.p-password[_ngcontent-%COMP%]{margin-bottom:10%}"]}),t})()},{path:"forgot",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-forgot"]],decls:2,vars:0,template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"forgot works!"),e.\u0275\u0275elementEnd())},styles:[""]}),t})()},{path:"**",redirectTo:"login"}]}];let T=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[y.Bz.forChild(j)]]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.c,s.lN,A,g.ot]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[v.ez,T,L,d.u5]]}),t})()}}]);