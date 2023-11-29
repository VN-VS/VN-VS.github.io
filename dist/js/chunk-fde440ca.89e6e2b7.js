(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fde440ca"],{1277:function(e,r,t){},1683:function(e,r,t){},"1abb":function(e,r,t){"use strict";t("f22f")},"2e72":function(e,r,t){"use strict";t("1277")},b01d:function(e,r,t){"use strict";t("1683")},dc3f:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e._self._c;return r("div",{staticClass:"login"},[r("div",{staticClass:"login-con"},[r("div",{staticClass:"login-con-form"},[e._m(0),"signIn"===e.loginType?r("login-form",{on:{"switch-type":function(r){return e.switchType(r)}}}):e._e(),"register"===e.loginType?r("addmembers",{on:{"switch-type":function(r){return e.switchType(r)}}}):e._e()],1)])])},s=[function(){var e=this,r=e._self._c;return r("div",{staticClass:"login-con-form-title"},[r("img",{attrs:{src:"",alt:""}})])}],o=function(){var e=this,r=e._self._c;return r("div",[r("h2"),r("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules},nativeOn:{keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[r("FormItem",{attrs:{prop:"userName"}},[r("Input",{attrs:{placeholder:"请输入用户名/邮箱"},model:{value:e.form.userName,callback:function(r){e.$set(e.form,"userName",r)},expression:"form.userName"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("FormItem",[r("div",{staticClass:"signIn"},[e.errorNews?r("span",[e._v(e._s(e.errorNews))]):e._e(),r("p",[e._v("\n          还没有账户?\n          "),r("a",{on:{click:function(r){return e.switchType()}}},[e._v("立即注册")])])]),r("Button",{staticClass:"land",attrs:{type:"primary",long:""},on:{click:e.handleSubmit}},[e._v("\n        登录\n      ")])],1)],1)],1)},n=[],i=t("31ca"),l=t("a78e"),u=t.n(l),d={name:"LoginForm",props:{userNameRules:{type:Array,default:function(){return[{required:!0,message:"用户名/邮箱不能为空",trigger:"blur"}]}},passwordRules:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},data:function(){return{form:{userName:"",password:""},errorNews:""}},computed:{rules:function(){return{userName:this.userNameRules,password:this.passwordRules}}},methods:{handleSubmit:function(){var e=this;this.$refs.loginForm.validate((function(r){if(r){var t=e.form;Object(i["a"])({urlKey:"/api/login",methods:"POST",data:{name:t.userName,pass:t.password}}).then((function(r){if(1===r.status){var t=JSON.parse(r.data.Authorization);u.a.set("token",t.token,{expires:365,path:""}),u.a.set("user_info",t,{expires:365,path:""}),e.$router.push("/home")}else e.$Message.error(r.message)}))}}))},switchType:function(){this.$emit("switch-type","register")}}},m=d,c=(t("1abb"),t("2877")),p=Object(c["a"])(m,o,n,!1,null,"70ed457a",null),f=p.exports,w=(t("7f7f"),function(){var e=this,r=e._self._c;return r("div",{staticClass:"register"},[r("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate}},[r("FormItem",{attrs:{prop:"name"}},[r("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.formValidate.name,callback:function(r){e.$set(e.formValidate,"name",r)},expression:"formValidate.name"}})],1),r("FormItem",{attrs:{prop:"email"}},[r("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.formValidate.email,callback:function(r){e.$set(e.formValidate,"email",r)},expression:"formValidate.email"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formValidate.password,callback:function(r){e.$set(e.formValidate,"password",r)},expression:"formValidate.password"}})],1),r("FormItem",{attrs:{prop:"rePassword"}},[r("Input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.formValidate.rePassword,callback:function(r){e.$set(e.formValidate,"rePassword",r)},expression:"formValidate.rePassword"}})],1),r("FormItem",[r("div",{staticClass:"error"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.errorNews,expression:"errorNews"}]},[e._v("\n          "+e._s(e.errorNews)+"\n        ")]),r("p",[e._v("\n          已经有账户?\n          "),r("a",{on:{click:function(r){return e.switchType("signIn")}}},[e._v("登录")])])]),r("Button",{staticClass:"land",attrs:{type:"primary",long:""},on:{click:function(r){return e.handleSubmit("formValidate")}}},[e._v("\n        注册\n      ")])],1)],1)],1)}),h=[],g={props:{isAddUserModalShow:{default:!1,type:Boolean}},data:function(){var e=this,r=function(r,t,a){""===t?a(new Error("请输入密码!")):(""!==e.formValidate.rePassword&&e.$refs.formValidate.validateField("rePassword"),a())},t=function(r,t,a){""===t?a(new Error("请重新输入密码!")):t!==e.formValidate.password?a(new Error("两个密码不一致!")):a()};return{formValidate:{name:"",email:"",password:"",rePassword:""},ruleValidate:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],email:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],password:[{required:!0,validator:r,trigger:"blur"}],rePassword:[{required:!0,validator:t,trigger:"blur"}]},errorNews:""}},watch:{},mounted:function(){},methods:{handleSubmit:function(e){var r=this;this.$refs[e].validate((function(e){if(e){var t=r.formValidate;Object(i["a"])({urlKey:"/api/user/register",methods:"POST",data:{name:t.name,email:t.email,pass:t.password,rePass:t.rePassword}}).then((function(e){1===e.status?r.switchType():r.$Message.error(e.message)}))}}))},switchType:function(){this.$emit("switch-type","signIn")}}},v=g,y=(t("b01d"),Object(c["a"])(v,w,h,!1,null,null,null)),b=y.exports,_={components:{LoginForm:f,addmembers:b},data:function(){return{loginType:"signIn"}},methods:{switchType:function(e){this.loginType=e}}},V=_,k=(t("2e72"),Object(c["a"])(V,a,s,!1,null,"715f4ca5",null));r["default"]=k.exports},f22f:function(e,r,t){}}]);
//# sourceMappingURL=chunk-fde440ca.89e6e2b7.js.map