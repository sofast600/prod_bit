(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5bd2148"],{"5c56":function(e,t,s){},ab97:function(e,t,s){"use strict";s.r(t);var a=s("7a23");const o={class:"contain"},l={class:"wrapper Fc m-txt mt30",style:{width:"90%"}},r={class:"Fc",style:{width:"100%",margin:"2rem 0"}};function n(e,t,s,n,c,i){const d=Object(a["resolveComponent"])("van-field"),p=Object(a["resolveComponent"])("van-cell-group"),u=Object(a["resolveComponent"])("van-button"),m=Object(a["resolveComponent"])("van-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(m,{ref:"reg_form",onSubmit:n.onSubmit,class:"Fc w100"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{modelValue:n.username,"onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),name:"username",label:e.$t("p_login.phone"),placeholder:e.$t("p_login.phone_tip"),class:"mt10",rules:[{validator:n.usernamePattern,message:e.$t("p_login.usernametip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{modelValue:n.password,"onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),type:"password",name:"password",label:e.$t("p_login.password"),placeholder:e.$t("p_login.passwordtip"),class:"mt10",rules:[{validator:n.passPattern,message:e.$t("p_login.passwordtip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{modelValue:n.repassword,"onUpdate:modelValue":t[2]||(t[2]=e=>n.repassword=e),type:"password",name:"repassword",label:e.$t("p_register.confirmpass"),placeholder:e.$t("p_register.repasstip"),class:"mt10",rules:[{required:!0,message:e.$t("p_register.repasstip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{modelValue:n.trade_password,"onUpdate:modelValue":t[3]||(t[3]=e=>n.trade_password=e),type:"password",name:"trade_password",label:e.$t("p_register.pass2"),placeholder:e.$t("p_register.pass2tip"),class:"mt10",rules:[{validator:n.passPattern,message:e.$t("p_register.pass2tip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{modelValue:n.trade_repassword,"onUpdate:modelValue":t[4]||(t[4]=e=>n.trade_repassword=e),type:"password",name:"trade_repassword",label:e.$t("p_register.comfirmpass2"),placeholder:e.$t("p_register.comfirmpass2tip"),class:"mt10",rules:[{required:!0,message:e.$t("p_register.comfirmpass2tip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{modelValue:n.invite_code,"onUpdate:modelValue":t[5]||(t[5]=e=>n.invite_code=e),name:"invite_code",label:e.$t("p_register.invitecode"),placeholder:e.$t("p_register.invitecodetip"),class:"mt10",rules:[{required:!1,message:e.$t("p_register.invitecodetip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(u,{block:"",type:"primary","native-type":"submit"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("p_register.submit")),1)]),_:1})])])]),_:1},8,["onSubmit"])])}s("68ef"),s("5c56");var c=s("23f9"),i=s("1fba"),d=s("e5f6"),p=s("d243");const[u,m]=Object(i["a"])("cell-group"),b={title:String,inset:Boolean,border:d["g"]};var f=Object(a["defineComponent"])({name:u,inheritAttrs:!1,props:b,setup(e,{slots:t,attrs:s}){const o=()=>{var o;return Object(a["createVNode"])("div",Object(a["mergeProps"])({class:[m({inset:e.inset}),{[p["e"]]:e.border&&!e.inset}]},s),[null==(o=t.default)?void 0:o.call(t)])},l=()=>Object(a["createVNode"])("div",{class:m("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?Object(a["createVNode"])(a["Fragment"],null,[l(),o()]):o()}});const _=Object(c["a"])(f);var g=_,h=(s("22fa"),s("2e1b")),j=(s("21a7"),s("f23a")),O=(s("3b21"),s("4b9e")),w=(s("27f1"),s("1c96")),v=(s("14d9"),s("6605")),V=s("df85"),$=s("c24f"),N=s("4d7f"),y={name:"register",setup(){const e=Object(v["c"])(),t=()=>e.push({name:"login"}),s=Object(a["ref"])(""),o=Object(a["ref"])(""),l=Object(a["ref"])(""),r=Object(a["ref"])(""),n=Object(a["ref"])("");let c=Object(a["ref"])("");const i=Object(a["ref"])(""),d=Object(a["ref"])("whatsapp"),p=Object(a["ref"])("");let u=Object(a["ref"])(""),m=Object(a["ref"])(0);const b=Object(a["ref"])(""),f=Object(a["ref"])(null);let{proxy:_}=Object(a["getCurrentInstance"])();const g=e=>/^[0-9a-zA-Z]{6,20}$/.test(e.trim()),h=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.trim()),j=e=>/\w{6}/.test(e),O=Object(a["ref"])(null),V=t=>{console.log("submit",t);const s=w["a"].loading({duration:0,forbidClick:!0,loadingType:"spinner",message:_.$t("p_mytask.loading")});console.log(s);const a={...t};Object($["F"])(a).then(t=>{w["a"].clear(),1==t.code?(w["a"].success(_.$t("p_register.regsuccess")),e.push({name:"login"})):w["a"].fail(t.info)}).catch(e=>{console.log(e),w["a"].clear()})};return{onClickLeft:t,username:s,password:o,trade_password:l,repassword:r,trade_repassword:n,invite_code:c,email:i,onSubmit:V,usernamePattern:g,emailPattern:h,invalidCode:u,passPattern:j,sns_type:d,sns:p,emailFlag:m,verify:b,el_verify:f,lanDict:N["a"],proxy:_,reg_form:O}},components:{vanForm:O["a"],vanField:j["a"],vanButton:h["b"],vanCellGroup:g},data(){return{send_lock:!1,totalTime:60,sendcode:this.$t("p_forgetpass.sendcode"),fbSignInParams:{scope:"email,user_likes",return_scopes:!0}}},mounted(){const{cookies:e}=Object(V["a"])();this.invite_code=void 0!==e.get("pid")?e.get("pid"):"";let t=e.get("code_time");t&&(this.totalTime=t),60!=this.totalTime&&this.code_countdown()},methods:{sendinvitecode:function(){""!=this.$refs.emailInput.formValue._value&&void 0!=this.$refs.emailInput.formValue._value?this.send_lock||(this.code_countdown(),console.log("sendinvitecode",this.$refs.emailInput),w["a"].loading({message:"",forbidClick:!0}),Object($["r"])({email:this.$refs.emailInput.formValue._value}).then(e=>{1==e.status?w["a"].success(this.proxy.$t("p_forgetpass.sendemailtip")):w["a"].fail(e.message)}).catch(e=>{console.log(e)})):w["a"].fail(this.proxy.$t("p_register.emailtip2"))},code_countdown:function(){const{cookies:e}=Object(V["a"])();this.send_lock=!0;let t=window.setInterval(()=>{this.totalTime--,e.set("code_time",this.totalTime),this.sendcode=this.totalTime,console.log(this.totalTime),this.totalTime<0&&(window.clearInterval(t),this.sendcode=this.$t("p_forgetpass.sendcode"),this.totalTime=60,e.set("code_time",this.totalTime),this.send_lock=!1)},1e3)},onSignInSuccess(e){console.log(e)},onSignInError(e){console.log(e)}}},C=(s("eb21"),s("6b0d")),k=s.n(C);const x=k()(y,[["render",n],["__scopeId","data-v-d1428828"]]);t["default"]=x},eb21:function(e,t,s){"use strict";s("eeaf")},eeaf:function(e,t,s){}}]);