(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38465b60"],{"0d3a":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),l=a("7ee1"),o=a.n(l),r=a("a55b"),c=a.n(r);const n=e=>(Object(s["pushScopeId"])("data-v-78ca23c2"),e=e(),Object(s["popScopeId"])(),e),d={class:"FrsbLog"},p={class:"Fc"},i=n(()=>Object(s["createElementVNode"])("img",{style:{"margin-top":"20px"},src:o.a},null,-1)),m={style:{"margin-top":"10px"}},u={style:{"margin-right":"20px","margin-top":"20px"}},b={class:"wrapper Fc m-txt",style:{width:"90%"}},f=n(()=>Object(s["createElementVNode"])("div",{style:{height:"0.5rem"}},null,-1)),g=n(()=>Object(s["createElementVNode"])("div",{style:{height:"0.5rem"}},null,-1)),h=n(()=>Object(s["createElementVNode"])("div",{style:{height:"0.5rem"}},null,-1)),j=n(()=>Object(s["createElementVNode"])("div",{style:{height:"0.5rem"}},null,-1)),O=n(()=>Object(s["createElementVNode"])("div",{style:{height:"0.5rem"}},null,-1)),v={class:"Fc",style:{width:"100%",margin:"0.5rem 0"}};function V(e,t,a,l,o,r){const n=Object(s["resolveComponent"])("van-field"),V=Object(s["resolveComponent"])("van-button"),w=Object(s["resolveComponent"])("van-form");return Object(s["openBlock"])(),Object(s["createElementBlock"])(s["Fragment"],null,[Object(s["createElementVNode"])("div",d,[Object(s["createElementVNode"])("div",p,[i,Object(s["createElementVNode"])("div",m,Object(s["toDisplayString"])(e.$t("p_forgetpass.findbackpass")),1)]),Object(s["createElementVNode"])("div",u,[Object(s["createElementVNode"])("img",{onClick:t[0]||(t[0]=(...e)=>l.onClickLeft&&l.onClickLeft(...e)),src:c.a})])]),Object(s["createVNode"])(w,{onSubmit:l.onSubmit,class:"Fc w100 mt30"},{default:Object(s["withCtx"])(()=>[Object(s["createElementVNode"])("div",b,[Object(s["createVNode"])(n,{modelValue:l.email,"onUpdate:modelValue":t[1]||(t[1]=e=>l.email=e),name:"email",ref:"emailInput",label:"",placeholder:e.$t("p_forgetpass.emailaddress"),class:"field",rules:[{validator:l.emailPattern,message:e.$t("p_forgetpass.emailerr")}]},null,8,["modelValue","placeholder","rules"]),f,Object(s["createVNode"])(n,{modelValue:l.invalidCode,"onUpdate:modelValue":t[3]||(t[3]=e=>l.invalidCode=e),name:"code",label:"",placeholder:e.$t("p_forgetpass.codetip"),class:"field",rules:[{required:!0,message:e.$t("p_forgetpass.codetip")}]},{"right-icon":Object(s["withCtx"])(()=>[Object(s["createElementVNode"])("div",{class:"c-blue",onClick:t[2]||(t[2]=(...e)=>r.sendinvitecode&&r.sendinvitecode(...e)),type:"primary"},Object(s["toDisplayString"])(e.$t("p_forgetpass.sendcode")),1)]),_:1},8,["modelValue","placeholder","rules"]),g,Object(s["createVNode"])(n,{modelValue:l.password,"onUpdate:modelValue":t[4]||(t[4]=e=>l.password=e),type:"password",name:"password",label:"",placeholder:e.$t("p_changepass.newpasstip"),class:"field",rules:[{validator:e.passPattern,message:e.$t("p_changepass.newpasstip")}]},null,8,["modelValue","placeholder","rules"]),h,Object(s["createVNode"])(n,{modelValue:l.repassword,"onUpdate:modelValue":t[5]||(t[5]=e=>l.repassword=e),type:"password",name:"repassword",label:"",placeholder:e.$t("p_register.repasstip"),class:"field",rules:[{required:!0,message:e.$t("p_register.repasstip")}]},null,8,["modelValue","placeholder","rules"]),j,Object(s["createVNode"])(n,{modelValue:l.password2,"onUpdate:modelValue":t[6]||(t[6]=e=>l.password2=e),type:"password",name:"password2",label:"",placeholder:e.$t("p_changetranpass.newtranpasstip2"),class:"field",rules:[{validator:e.passPattern,message:e.$t("p_changetranpass.newtranpasstip2")}]},null,8,["modelValue","placeholder","rules"]),O,Object(s["createVNode"])(n,{modelValue:l.repassword2,"onUpdate:modelValue":t[7]||(t[7]=e=>l.repassword2=e),type:"password",name:"repassword2",label:"",placeholder:e.$t("p_changepass.comfirmpasstip"),class:"field",rules:[{required:!0,message:e.$t("p_changepass.comfirmpasstip")}]},null,8,["modelValue","placeholder","rules"]),Object(s["createElementVNode"])("div",v,[Object(s["createVNode"])(V,{block:"",type:"primary","native-type":"submit"},{default:Object(s["withCtx"])(()=>[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.$t("p_register.submit")),1)]),_:1})])])]),_:1},8,["onSubmit"])],64)}a("22fa");var w=a("2e1b"),y=(a("21a7"),a("f23a")),_=(a("3b21"),a("4b9e")),N=(a("27f1"),a("1c96")),$=a("6605"),k=a("c24f"),C=a("5502");const x=Object(s["createApp"])();x.use(N["a"]);var E={name:"register",setup(){const e=()=>history.back(),t=Object(s["ref"])(""),a=Object(s["ref"])(""),l=Object(s["ref"])(""),o=Object(s["ref"])(""),r=Object(s["ref"])(""),c=Object(s["ref"])(""),n=Object(C["c"])();let{proxy:d}=Object(s["getCurrentInstance"])();const p=Object($["c"])(),i=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e);setTimeout((function(){n.getters.userInfo&&(c.value=n.getters.userInfo.user.email)}),2e3);const m=e=>{const t={...e};Object(k["k"])(t).then(e=>{0==e.status?(N["a"].success(d.$t("p_changepass.changepasssuccess")),p.go(-1)):N["a"].fail(e.message)}).catch(e=>{console.log(e)})};return{onClickLeft:e,invalidCode:t,onSubmit:m,emailPattern:i,proxy:d,userInfo:Object(s["computed"])(()=>n.getters.userInfo),email:c,password:a,repassword:l,password2:o,repassword2:r}},components:{vanForm:_["a"],vanField:y["a"],vanButton:w["b"]},data(){return{}},methods:{sendinvitecode:function(){console.log("sendinvitecode",this.$refs.emailInput),""!=this.$refs.emailInput.formValue._value&&void 0!=this.$refs.emailInput.formValue._value?(N["a"].loading({message:"",forbidClick:!0}),Object(k["o"])({email:this.$refs.emailInput.formValue._value}).then(e=>{0==e.status?N["a"].success(this.proxy.$t("p_forgetpass.sendemailtip")):N["a"].fail(e.message)}).catch(e=>{console.log(e)})):N["a"].fail(this.proxy.$t("p_register.emailtip2"))}}},I=(a("df55"),a("6b0d")),S=a.n(I);const F=S()(E,[["render",V],["__scopeId","data-v-78ca23c2"]]);t["default"]=F},"7ee1":function(e,t,a){e.exports=a.p+"img/logoclick.645ce84f.svg"},a55b:function(e,t,a){e.exports=a.p+"img/close.9031a3fd.svg"},df55:function(e,t,a){"use strict";a("f09c")},f09c:function(e,t,a){}}]);