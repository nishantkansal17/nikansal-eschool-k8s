webpackJsonp([1],{"+Gxq":function(e,t,r){"use strict";var a=r("fnDg").a;var n=r("VU/8")(a,null,!1,function(e){r("9YXS")},null,null);t.a=n.exports},"38fF":function(e,t){},"9M+g":function(e,t){},"9YXS":function(e,t){},"HUt/":function(e,t,r){"use strict";var a=r("qRo1").a;var n=r("VU/8")(a,null,!1,function(e){r("dIGf")},null,null);t.a=n.exports},JCpY:function(e,t,r){"use strict";var a=r("rKsW").a;var n=r("VU/8")(a,null,!1,function(e){r("hj9i")},null,null);t.a=n.exports},JDVb:function(e,t,r){"use strict";var a=r("9NuQ").a;var n=r("VU/8")(a,null,!1,function(e){r("itwp")},null,null);t.a=n.exports},JL9e:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},n,!1,function(e){r("TTzQ")},null,null).exports,o=r("/ocq"),l=r("mtWM"),i=r.n(l).a.create({baseURL:"/api"}),u={mounted:function(){console.log("hellooooo ready!!")},data:function(){return{credentials:{username:"",password:""},hostname:"",error:"",year:(new Date).getFullYear(),response:[],errors:[]}},methods:{submit:function(){var e=this;console.log("submit() called.."),i.get("/user/"+this.credentials.username).then(function(t){e.response=t.data,console.log(t.data),localStorage.setItem("userName",e.response.firstName),localStorage.setItem("userPassword",e.response.lastName),e.$router.push("/welcome")}).catch(function(t){e.errors.push(t),console.log(e.errors)})}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"padding-top":"5em"}},[r("b-card",{staticClass:"align-center",attrs:{"header-tag":"header"}},[e.error?r("div",{staticClass:"alert alert-danger error-box"},[r("a",{staticClass:"close",attrs:{"aria-label":"close"},on:{click:function(t){e.error=!1}}},[e._v("×")]),e._v(" "),r("p",{attrs:{id:"errorBox"}},[e._v(e._s(e.error))])]):e._e(),e._v(" "),r("b-form",{attrs:{id:"loginForm"},on:{submit:function(t){t.preventDefault(),e.submit()}}},[r("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Username","label-for":"User"}},[r("b-form-input",{attrs:{id:"User",required:"",placeholder:"Username",autofocus:""},model:{value:e.credentials.username,callback:function(t){e.$set(e.credentials,"username",t)},expression:"credentials.username"}})],1),e._v(" "),r("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Password","label-for":"Password"}},[r("b-form-input",{attrs:{id:"Password",type:"password",required:"",placeholder:"Password",autofocus:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}})],1),e._v(" "),r("b-button",{attrs:{id:"loginBtn",variant:"primary",size:"lg",type:"submit"}},[e._v("Sign in")])],1),e._v(" "),r("div",{staticClass:"align-center",staticStyle:{"padding-top":"1em","font-size":"smaller"}},[e._v("© Cisco Systems "+e._s(e.year))])],1)],1)},staticRenderFns:[]};var d=r("VU/8")(u,c,!1,function(e){r("38fF")},"data-v-7980c470",null).exports;a.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"Login",component:d}]}),f=r("e6fC");r("Jmt5"),r("9M+g");a.a.config.productionTip=!1,a.a.use(f.a),new a.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},TTzQ:function(e,t){},dIGf:function(e,t){},hj9i:function(e,t){},itwp:function(e,t){},r15W:function(e,t,r){"use strict";var a=r("E9Zr").a;var n=r("VU/8")(a,null,!1,function(e){r("JL9e")},null,null);t.a=n.exports}},["NHnr"]);
//# sourceMappingURL=app.7e78c8a211609e02fa4b.js.map