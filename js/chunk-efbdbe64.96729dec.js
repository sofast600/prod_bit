(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efbdbe64"],{a378:function(e,a,t){"use strict";t.r(a);var n=t("7a23");const c={class:"Fc w100"},o={class:"Fc",style:{width:"100%",margin:"2rem 0"}};function l(e,a,t,l,b,s){const r=Object(n["resolveComponent"])("van-field"),d=Object(n["resolveComponent"])("van-cell-group"),u=Object(n["resolveComponent"])("van-button"),m=Object(n["resolveComponent"])("van-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(m,{onSubmit:s.onSubmit,class:"Fc w100"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{class:"mt20 w85"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{modelValue:l.userInfo.name,"onUpdate:modelValue":a[0]||(a[0]=e=>l.userInfo.name=e),type:"number",name:"phone",label:"",disabled:"true",class:"mt20"},null,8,["modelValue"])]),_:1}),Object(n["createVNode"])(d,{class:"w85"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{modelValue:l.bank_real,"onUpdate:modelValue":a[1]||(a[1]=e=>l.bank_real=e),name:"bank_real",label:"",placeholder:e.$t("p_person.real_name"),class:"mt20"},null,8,["modelValue","placeholder"])]),_:1}),Object(n["createVNode"])(d,{class:"w85"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{modelValue:l.bank_name,"onUpdate:modelValue":a[2]||(a[2]=e=>l.bank_name=e),name:"bank_name",label:"",placeholder:e.$t("p_person.name"),class:"mt20"},null,8,["modelValue","placeholder"])]),_:1}),Object(n["createVNode"])(d,{class:"w85"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{modelValue:l.bank_account,"onUpdate:modelValue":a[3]||(a[3]=e=>l.bank_account=e),name:"bank_account",label:"",placeholder:e.$t("p_person.number"),class:"mt20"},null,8,["modelValue","placeholder"])]),_:1}),Object(n["createVNode"])(d,{class:"w85"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{modelValue:l.bank_phone,"onUpdate:modelValue":a[4]||(a[4]=e=>l.bank_phone=e),name:"bank_phone",type:"number",label:"",placeholder:e.$t("p_withdrawaddress.number"),class:"field mt20"},null,8,["modelValue","placeholder"])]),_:1}),Object(n["createVNode"])(d,{class:"w85"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{modelValue:l.bank_ifsc,"onUpdate:modelValue":a[5]||(a[5]=e=>l.bank_ifsc=e),name:"bank_ifsc",type:"number",label:"",placeholder:e.$t("p_withdrawaddress.ifsc"),class:"mt20"},null,8,["modelValue","placeholder"])]),_:1}),Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(u,{block:"",type:"primary","native-type":"submit"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("p_register.submit")),1)]),_:1})])]),_:1},8,["onSubmit"])])}t("27f1");var b=t("1c96"),s=(t("3b21"),t("4b9e")),r=(t("22fa"),t("2e1b")),d=(t("21a7"),t("f23a")),u=t("5502"),m=t("9fb0"),i=t("c24f"),p=t("df85"),f={name:"person",setup(){const e=Object(u["c"])(),a=Object(n["computed"])(()=>e.getters.userInfo),t=Object(n["ref"])(""),c=Object(n["ref"])(""),o=Object(n["ref"])(""),l=Object(n["ref"])(""),b=Object(n["ref"])(""),{cookies:s}=Object(p["a"])();return{bank_real:t,bank_name:c,bank_account:b,bank_ifsc:o,bank_phone:l,store:e,userInfo:a,cookies:s}},components:{vanField:d["a"],vanButton:r["b"],vanForm:s["a"]},data(){return{}},mounted(){this.bank_name=this.userInfo.bank_name,this.bank_real=this.userInfo.bank_real,this.bank_account=this.userInfo.bank_account,this.bank_phone=this.userInfo.bank_phone,this.bank_ifsc=this.userInfo.bank_ifsc},methods:{onSubmit:function(e){b["a"].loading({message:"",forbidClick:!0}),e.token=this.cookies.get(m["a"]);const a={...e};Object(i["A"])(a).then(e=>{1==e.code?(b["a"].success(e.info),this.$router.go(-1)):b["a"].fail(e.info)}).catch(e=>{console.log(e)})}}},_=(t("bd08"),t("6b0d")),h=t.n(_);const k=h()(f,[["render",l],["__scopeId","data-v-adeebafc"]]);a["default"]=k},bbdf:function(e,a,t){},bd08:function(e,a,t){"use strict";t("bbdf")}}]);