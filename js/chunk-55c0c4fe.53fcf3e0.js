(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55c0c4fe"],{"318d":function(e,t,s){},"4d86":function(e,t,s){"use strict";s("68ef"),s("5c56")},"5c56":function(e,t,s){},7342:function(e,t,s){"use strict";s("318d")},a136:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var o=s("23f9"),a=s("7a23"),l=s("1fba"),r=s("e5f6"),c=s("d243");const[n,i]=Object(l["a"])("cell-group"),d={title:String,inset:Boolean,border:r["g"]};var p=Object(a["defineComponent"])({name:n,inheritAttrs:!1,props:d,setup(e,{slots:t,attrs:s}){const o=()=>{var o;return Object(a["createVNode"])("div",Object(a["mergeProps"])({class:[i({inset:e.inset}),{[c["e"]]:e.border&&!e.inset}]},s),[null==(o=t.default)?void 0:o.call(t)])},l=()=>Object(a["createVNode"])("div",{class:i("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?Object(a["createVNode"])(a["Fragment"],null,[l(),o()]):o()}});const m=Object(o["a"])(p);var u=m},a2e9:function(e,t,s){"use strict";s.r(t);var o=s("7a23");const a={class:"contain"},l={class:"wrapper Fc m-txt mt30",style:{width:"90%"}},r={key:1,class:"Fr",style:{color:"#009fd4"}},c={class:"Fc",style:{width:"100%",margin:"2rem 0"}};function n(e,t,s,n,i,d){const p=Object(o["resolveComponent"])("van-field"),m=Object(o["resolveComponent"])("van-cell-group"),u=Object(o["resolveComponent"])("van-button"),b=Object(o["resolveComponent"])("van-form");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(b,{ref:"reg_form",onSubmit:n.onSubmit,class:"Fc w100"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.username,"onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),name:"username",type:"digit",label:e.$t("p_login.phone")+" +91",placeholder:e.$t("p_login.phone_tip"),class:"mt10",minlength:"10",maxlength:"10",rules:[{validator:n.usernamePattern,message:e.$t("p_login.usernametip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),n.smsSwitch>0?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0,inset:"",style:{"margin-top":"10px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.code,"onUpdate:modelValue":t[2]||(t[2]=e=>n.code=e),name:"code",type:"number",label:e.$t("p_forgetpass.sendcode"),border:!1,class:"mt10",placeholder:e.$t("p_forgetpass.codetip")},{"right-icon":Object(o["withCtx"])(()=>[n.show?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"Fr",style:{color:"#009fd4"},onClick:t[1]||(t[1]=(...e)=>d.sendsms&&d.sendsms(...e))},Object(o["toDisplayString"])(e.$t("p_forgetpass.send")),1)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,Object(o["toDisplayString"])(i.count)+" s",1))]),_:1},8,["modelValue","label","placeholder"])]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.password,"onUpdate:modelValue":t[3]||(t[3]=e=>n.password=e),type:"password",name:"password",label:e.$t("p_login.password"),placeholder:e.$t("p_login.passwordtip"),class:"mt10",rules:[{validator:n.passPattern,message:e.$t("p_login.passwordtip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.repassword,"onUpdate:modelValue":t[4]||(t[4]=e=>n.repassword=e),type:"password",name:"repassword",label:e.$t("p_register.confirmpass"),placeholder:e.$t("p_register.repasstip"),class:"mt10",rules:[{required:!0,message:e.$t("p_register.repasstip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.trade_password,"onUpdate:modelValue":t[5]||(t[5]=e=>n.trade_password=e),type:"password",name:"trade_password",label:e.$t("p_register.pass2"),placeholder:e.$t("p_register.pass2tip"),class:"mt10",rules:[{validator:n.passPattern,message:e.$t("p_register.pass2tip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.trade_repassword,"onUpdate:modelValue":t[6]||(t[6]=e=>n.trade_repassword=e),type:"password",name:"trade_repassword",label:e.$t("p_register.comfirmpass2"),placeholder:e.$t("p_register.comfirmpass2tip"),class:"mt10",rules:[{required:!0,message:e.$t("p_register.comfirmpass2tip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:n.invite_code,"onUpdate:modelValue":t[7]||(t[7]=e=>n.invite_code=e),name:"invite_code",label:e.$t("p_register.invitecode"),placeholder:e.$t("p_register.invitecodetip"),class:"mt10",rules:[{required:!1,message:e.$t("p_register.invitecodetip")}]},null,8,["modelValue","label","placeholder","rules"])]),_:1}),Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(u,{block:"",type:"primary","native-type":"submit"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("p_register.submit")),1)]),_:1})])])]),_:1},8,["onSubmit"])])}s("4d86");var i=s("a136"),d=(s("22fa"),s("2e1b")),p=(s("21a7"),s("f23a")),m=(s("3b21"),s("4b9e")),u=(s("27f1"),s("1c96")),b=(s("14d9"),s("6605")),h=s("df85"),f=s("c24f"),g=s("4d7f"),j={name:"register",setup(){const e=Object(b["c"])(),t=()=>e.push({name:"login"}),s=Object(o["ref"])(""),a=Object(o["ref"])(""),l=Object(o["ref"])(""),r=Object(o["ref"])(""),c=Object(o["ref"])("");let n=Object(o["ref"])(""),i=Object(o["ref"])("");const d=Object(o["ref"])(""),p=Object(o["ref"])("whatsapp"),m=Object(o["ref"])("");let h=Object(o["ref"])(""),j=Object(o["ref"])(0);const O=Object(o["ref"])(0),_=Object(o["ref"])(""),w=Object(o["ref"])(null);let{proxy:v}=Object(o["getCurrentInstance"])(),V=Object(o["ref"])(!0);const $=e=>/^[0-9]{10}$/.test(e.trim()),y=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.trim()),k=e=>/\w{6}/.test(e),C=Object(o["ref"])(null),N=()=>{Object(f["p"])().then(e=>{1==e.code&&e.data.sms_switch_status>0&&(O.value=1)})},x=t=>{console.log("submit",t);const s=u["a"].loading({duration:0,forbidClick:!0,loadingType:"spinner",message:v.$t("p_mytask.loading")});console.log(s);const o={...t};Object(f["F"])(o).then(t=>{u["a"].clear(),1==t.code?(u["a"].success(v.$t("p_register.regsuccess")),e.push({name:"login"})):u["a"].fail(t.info)}).catch(e=>{console.log(e),u["a"].clear()})};return{onClickLeft:t,username:s,password:a,trade_password:l,repassword:r,trade_repassword:c,invite_code:n,code:i,show:V,email:d,onSubmit:x,usernamePattern:$,emailPattern:y,invalidCode:h,passPattern:k,catchSettting:N,sns_type:p,sns:m,emailFlag:j,smsSwitch:O,verify:_,el_verify:w,lanDict:g["a"],proxy:v,reg_form:C}},components:{vanForm:m["a"],vanField:p["a"],vanButton:d["b"],vanCellGroup:i["a"]},data(){return{send_lock:!1,totalTime:60,count:"",timer:null,sendcode:this.$t("p_forgetpass.sendcode"),fbSignInParams:{scope:"email,user_likes",return_scopes:!0}}},mounted(){this.catchSettting();const{cookies:e}=Object(h["a"])();this.invite_code=void 0!==e.get("pid")?e.get("pid"):"";let t=e.get("code_time");t&&(this.totalTime=t),60!=this.totalTime&&this.code_countdown()},methods:{sendsms(){if(!this.username)return void u["a"].fail(this.$t("p_login.phone_tip"));this.show=!1;let e={phone:this.username};Object(f["I"])(e).then(e=>{1==e.code?this.getCode():(u["a"].fail(e.info),this.show=!0)}).catch(e=>{u["a"].fail(e.msg)})},getCode(){const e=60;this.timer||(this.count=e,this.show=!1,this.timer=setInterval(()=>{this.count>0&&this.count<=e?this.count-=1:(this.show=!0,clearInterval(this.timer),this.timer=null)},1e3))},code_countdown:function(){const{cookies:e}=Object(h["a"])();this.send_lock=!0;let t=window.setInterval(()=>{this.totalTime--,e.set("code_time",this.totalTime),this.sendcode=this.totalTime,console.log(this.totalTime),this.totalTime<0&&(window.clearInterval(t),this.sendcode=this.$t("p_forgetpass.sendcode"),this.totalTime=60,e.set("code_time",this.totalTime),this.send_lock=!1)},1e3)},onSignInSuccess(e){console.log(e)},onSignInError(e){console.log(e)}}},O=(s("7342"),s("6b0d")),_=s.n(O);const w=_()(j,[["render",n],["__scopeId","data-v-d4ba44ba"]]);t["default"]=w}}]);