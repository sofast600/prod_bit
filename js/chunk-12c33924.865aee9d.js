(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12c33924"],{"0ba6":function(e,t,n){"use strict";n.r(t);n("14d9");var o=n("7a23"),a=n("9d64"),c=n.n(a),l=n("88c9"),s=n.n(l);const i=e=>(Object(o["pushScopeId"])("data-v-7ae4022e"),e=e(),Object(o["popScopeId"])(),e),r={class:"contain"},p={class:"Fc"},d=i(()=>Object(o["createElementVNode"])("img",{style:{"margin-top":"100px",width:"200px",height:"200px"},src:c.a},null,-1)),m={class:"now_on"},b={class:"wrapper Fc"},u={class:"mt50"},h={class:"Fc mt20 clink"},g={class:"Frl mt20"},O={class:"Fcl w100 mt30 blink"},j=i(()=>Object(o["createElementVNode"])("img",{src:s.a},null,-1)),v={class:"blink"},k={class:"van-picker langPopup",style:{background:"#4c96ff"}},f={class:"van-picker__toolbar"},_={class:"van-picker__title van-ellipsis"},y={class:"van-picker__columns",style:{height:"220px"}},V=["tabindex","onClick"],w={class:"van-ellipsis Frsa"},x=["src"],C=i(()=>Object(o["createElementVNode"])("div",{class:"van-picker__mask",style:{"background-size":"100% 110px"}},null,-1)),E=i(()=>Object(o["createElementVNode"])("div",{class:"van-hairline-unset--top-bottom van-picker__frame",style:{height:"44px"}},null,-1));function N(e,t,n,a,c,l){const s=Object(o["resolveComponent"])("van-field"),i=Object(o["resolveComponent"])("van-button"),N=Object(o["resolveComponent"])("van-form"),$=(Object(o["resolveComponent"])("van-picker"),Object(o["resolveComponent"])("van-popup")),F=Object(o["resolveComponent"])("van-config-provider");return Object(o["openBlock"])(),Object(o["createBlock"])(F,{"theme-vars":a.themeVars},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",p,[d,Object(o["createElementVNode"])("div",m,Object(o["toDisplayString"])(e.$t("p_login.now_on")),1)]),Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(N,{style:{width:"90%"},onSubmit:a.onSubmit},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{modelValue:a.loginForm.username,"onUpdate:modelValue":t[0]||(t[0]=e=>a.loginForm.username=e),name:"username",style:{"margin-top":"0.5rem"},label:"",placeholder:e.$t("p_login.username"),class:"field",rules:[{required:!0,message:e.$t("p_login.usernametip")}]},null,8,["modelValue","placeholder","rules"]),Object(o["createVNode"])(s,{modelValue:a.loginForm.password,"onUpdate:modelValue":t[1]||(t[1]=e=>a.loginForm.password=e),type:"password",name:"password",style:{"margin-top":"0.5rem"},label:"",placeholder:e.$t("p_login.password"),class:"field",rules:[{validator:e.passPattern,message:e.$t("p_login.passwordtip")}]},null,8,["modelValue","placeholder","rules"]),Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(i,{block:"",type:"primary","native-type":"submit"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("p_login.login")),1)]),_:1})]),Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("span",{onClick:t[2]||(t[2]=e=>this.$router.push({name:"register"})),style:{color:"#12151f"}},Object(o["toDisplayString"])(e.$t("p_login.no_account")),1)])]),Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",{class:"Fw",onClick:t[3]||(t[3]=e=>this.$router.push({name:"about"}))},[j,Object(o["createElementVNode"])("div",v,Object(o["toDisplayString"])(e.$t("p_login.aboutus")),1)])])]),_:1},8,["onSubmit"])]),Object(o["createVNode"])($,{show:a.show,"onUpdate:show":t[8]||(t[8]=e=>a.show=e),position:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("button",{type:"button",style:{color:"#fff"},class:"van-picker__cancel van-haptics-feedback",onClick:t[4]||(t[4]=e=>a.show=!1)},Object(o["toDisplayString"])(e.$t("p_common.cancel")),1),Object(o["createElementVNode"])("div",_,Object(o["toDisplayString"])(e.$t("t_page.t_language")),1),Object(o["createElementVNode"])("button",{type:"button",style:{color:"#fff"},class:"van-picker__confirm van-haptics-feedback",onClick:t[5]||(t[5]=(...e)=>l.changeLanguage&&l.changeLanguage(...e))},Object(o["toDisplayString"])(e.$t("p_common.ok")),1)]),Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("div",{class:"van-picker-column",ref:"picker",onScroll:t[6]||(t[6]=(...e)=>l.change_picker_scroll&&l.change_picker_scroll(...e)),style:{height:"220px","overflow-y":"auto"}},[Object(o["createElementVNode"])("ul",{class:"van-picker-column__wrapper",style:Object(o["normalizeStyle"])([{transform:`translate3d(0px, ${c.x}px, 0px)`},{"transition-duration":"0ms","transition-property":"none","line-height":"44px"}])},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.lanDict,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{role:"button",tabindex:t,class:Object(o["normalizeClass"])(["van-picker-column__item",{"van-picker-column__item__selected":c.picker_active==t}]),style:{height:"44px"},onClick:n=>l.change_picker(e,t),key:t},[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("span",null,[Object(o["createElementVNode"])("img",{src:e.icon},null,8,x)]),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.name),1)])],10,V))),128))],4)],544),C,E])]),Object(o["createCommentVNode"])("",!0)]),_:1},8,["show"])])]),_:1},8,["theme-vars"])}n("27f1");var $=n("1c96"),F=(n("ffb2"),n("3aa7")),S=(n("fc63"),n("dda5")),D=(n("ac6b"),n("5f24")),L=(n("22fa"),n("2e1b")),B=(n("21a7"),n("f23a")),P=(n("3b21"),n("4b9e")),I=n("5502"),T=n("6605"),z=n("df85"),K=n("4d7f"),U={name:"LoginPanel",components:{vanForm:P["a"],vanField:B["a"],vanButton:L["b"],vanPopup:D["b"],vanPicker:S["b"],vanConfigProvider:F["a"]},setup(){const e=()=>history.back(),t=Object(o["reactive"])({username:"",password:""}),n=Object(I["c"])(),a=Object(T["c"])();let{proxy:c}=Object(o["getCurrentInstance"])();const{cookies:l}=Object(z["a"])();let s=[],i=[];K["a"].forEach(e=>{s.push(e.name),i.push(e.code)});let r=Object(o["computed"])(()=>{let e=0;return K["a"].forEach((t,n)=>{t.code==c.$i18n.locale&&(e=n)}),e}),p=Object(o["ref"])(""),d=Object(o["ref"])(!1);const m={pickerMaskColor:"#272935",pickerBackgroundColor:"#272935",pickerOptionTextColor:"#fffff",pickerConfirmActionColor:"#7c7c7c",fieldIconSize:"24px"},b=e=>{const t=$["a"].loading({duration:0,forbidClick:!0,loadingType:"spinner",message:c.$t("p_mytask.loading")});console.log(t);const o={...e},a=e=>n.dispatch("Login",e);a(o).then(e=>h(e)).catch(e=>g(e))},u=(e,t)=>{let n=i[t];c.$i18n.locale=n,l.set("lan",n),l.set("think_language",n),c.lan=e,d.value=!1},h=async e=>{$["a"].clear(),Object($["a"])(e.info),a.push({name:"home"},()=>{console.log("onComplete",new Date+e.info)})},g=async e=>{if($["a"].clear(),void 0!=e.info)Object($["a"])(e.info);else{const e=l.get("errorResponse");console.log(e),Object($["a"])(e)}};return{onClickLeft:e,loginForm:t,onSubmit:b,lan:p,lanColumns:s,lanKeys:i,defaultLang:r,show:d,proxy:c,cookies:l,lanDict:K["a"],themeVars:m,onLangConfirm:u,langFlag:Object(o["ref"])(null),agree:Object(o["ref"])(0)}},data(){return{picker_active:2,x:0}},computed:{title(){return void 0!=this.$t("t_page.t_"+this.$route.name)?this.$t("t_page.t_"+this.$route.name):this.$route.meta.title}},mounted(){if(!this.cookies.get("lan")){let e="en";console.log(navigator.language),this.cookies.set("lan",e),this.cookies.set("think_language",e),this.proxy.$i18n.locale=e}this.lan=this.cookies.get("lan")?this.lanColumns[this.lanKeys.indexOf(this.cookies.get("lan"))]:"English"},watch:{lan:function(e){this.lanDict.forEach(t=>{t.name==e&&(this.langFlag=t.icon)})}},methods:{changeLanguage(){let e=this.lanKeys[this.picker_active];this.proxy.$i18n.locale=e,this.cookies.set("lan",e),this.cookies.set("think_language",e),this.lan=this.lanColumns[this.lanKeys.indexOf(e)],this.show=!1},change_picker_scroll(e){this.x=0;let t=e.srcElement.scrollTop;this.picker_active=Math.round(t/44)+2},change_picker(e,t){this.picker_active=t,this.$refs.picker.scrollTop=44*(t-2),t<2?this.x=44*(2-t):t>=this.lanColumns.length-2?this.x=44*(this.lanColumns.length-t-3):this.x=0}}},J=(n("b7da"),n("6b0d")),M=n.n(J);const q=M()(U,[["render",N],["__scopeId","data-v-7ae4022e"]]);t["default"]=q},"6dd7":function(e,t,n){},"88c9":function(e,t,n){e.exports=n.p+"img/about.fcba2aaa.svg"},"9d64":function(e,t,n){e.exports=n.p+"img/logo.bf9e0d8c.png"},b7da:function(e,t,n){"use strict";n("6dd7")}}]);