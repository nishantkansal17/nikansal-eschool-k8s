webpackJsonp([1],{"+Gxq":function(t,e,a){"use strict";var l=a("fnDg").a;var n=a("VU/8")(l,null,!1,function(t){a("9YXS")},null,null);e.a=n.exports},"9M+g":function(t,e){},"9YXS":function(t,e){},"HUt/":function(t,e,a){"use strict";var l=a("qRo1").a;var n=a("VU/8")(l,null,!1,function(t){a("dIGf")},null,null);e.a=n.exports},JCpY:function(t,e,a){"use strict";var l=a("rKsW").a;var n=a("VU/8")(l,null,!1,function(t){a("hj9i")},null,null);e.a=n.exports},JDVb:function(t,e,a){"use strict";var l=a("9NuQ").a;var n=a("VU/8")(l,null,!1,function(t){a("itwp")},null,null);e.a=n.exports},JL9e:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(t){a("TTzQ")},null,null).exports,s=a("/ocq"),o=a("mtWM"),i=a.n(o).a.create({baseURL:"/api"}),u={mounted:function(){console.log("hellooooo ready!!")},data:function(){return{student:{firstName:"",middleName:"",lastName:"",mobile:"",address:"",country:"",state:"",email:""},hostname:"",error:"",year:(new Date).getFullYear(),response:[],errors:[]}},methods:{submit:function(){var t=this;console.log("submit() called.."),i.post("/eschool/student/registration/create",this.student).then(function(e){t.response=e.data,console.log(e.data)}).catch(function(e){t.errors.push(e),console.log(t.errors)})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"5em"}},[a("b-card",{staticClass:"align-center",attrs:{"header-tag":"header"}},[a("b-form",{attrs:{id:"stuRegistrationForm"},on:{submit:function(e){e.preventDefault(),t.submit()}}},[a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"First Name","label-for":"firstName"}},[a("b-form-input",{attrs:{id:"firstName",placeholder:"First name",autofocus:""},model:{value:t.student.firstName,callback:function(e){t.$set(t.student,"firstName",e)},expression:"student.firstName"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Middle Name","label-for":"middleName"}},[a("b-form-input",{attrs:{id:"middleName",type:"text",placeholder:"Middle name"},model:{value:t.student.middleName,callback:function(e){t.$set(t.student,"middleName",e)},expression:"student.middleName"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Last Name","label-for":"lastName"}},[a("b-form-input",{attrs:{id:"lastName",type:"text",placeholder:"Last name"},model:{value:t.student.lastName,callback:function(e){t.$set(t.student,"lastName",e)},expression:"student.lastName"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Mobile","label-for":"mobile"}},[a("b-form-input",{attrs:{id:"mobile",type:"text",placeholder:"Mobile no."},model:{value:t.student.mobile,callback:function(e){t.$set(t.student,"mobile",e)},expression:"student.mobile"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Address","label-for":"address"}},[a("b-form-input",{attrs:{id:"address",type:"text",placeholder:"Address"},model:{value:t.student.address,callback:function(e){t.$set(t.student,"address",e)},expression:"student.address"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Country","label-for":"country"}},[a("b-form-input",{attrs:{id:"country",type:"text",placeholder:"Country"},model:{value:t.student.country,callback:function(e){t.$set(t.student,"country",e)},expression:"student.country"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"State","label-for":"state"}},[a("b-form-input",{attrs:{id:"state",type:"text",placeholder:"State"},model:{value:t.student.state,callback:function(e){t.$set(t.student,"state",e)},expression:"student.state"}})],1),t._v(" "),a("b-form-group",{staticClass:"form-vertical-align",attrs:{vertical:"",label:"Email","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Email id"},model:{value:t.student.email,callback:function(e){t.$set(t.student,"email",e)},expression:"student.email"}})],1),t._v(" "),a("b-button",{attrs:{id:"loginBtn",variant:"primary",size:"lg",type:"submit"}},[t._v("Go")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(u,c,!1,function(t){a("jan8")},"data-v-7e30f472",null).exports;l.a.use(s.a);var m=new s.a({routes:[{path:"/",name:"Login",component:d}]}),f=a("e6fC");a("Jmt5"),a("9M+g");l.a.config.productionTip=!1,l.a.use(f.a),new l.a({el:"#app",router:m,components:{App:r},template:"<App/>"})},TTzQ:function(t,e){},dIGf:function(t,e){},hj9i:function(t,e){},itwp:function(t,e){},jan8:function(t,e){},r15W:function(t,e,a){"use strict";var l=a("E9Zr").a;var n=a("VU/8")(l,null,!1,function(t){a("JL9e")},null,null);e.a=n.exports}},["NHnr"]);
//# sourceMappingURL=app.780215b606ef9c353371.js.map