(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b3b930"],{"9dc4":function(e,a,t){"use strict";t("cac3")},a378:function(e,a,t){"use strict";t.r(a);var o=t("7a23");const n={class:"Fc w100"},c={class:"Fc",style:{width:"100%",margin:"2rem 0"}};function l(e,a,t,l,r,s){const d=Object(o["resolveComponent"])("van-field"),b=Object(o["resolveComponent"])("van-cell-group"),u=Object(o["resolveComponent"])("van-button"),i=Object(o["resolveComponent"])("van-form"),m=Object(o["resolveComponent"])("van-picker"),p=Object(o["resolveComponent"])("van-popup");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createVNode"])(i,{onSubmit:s.onSubmit,class:"Fc w100"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{class:"mt20 w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.userInfo.name,"onUpdate:modelValue":a[0]||(a[0]=e=>l.userInfo.name=e),type:"number",name:"phone",label:"",disabled:"true",class:"mt20"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.bank_real,"onUpdate:modelValue":a[1]||(a[1]=e=>l.bank_real=e),name:"bank_real",label:"",required:"",disabled:!!l.userInfo.bank_real,placeholder:e.$t("p_person.real_name"),rules:[{validator:l.passPattern,message:e.$t("p_person.real_name")}],class:"mt20"},null,8,["modelValue","disabled","placeholder","rules"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.bank_name,"onUpdate:modelValue":a[2]||(a[2]=e=>l.bank_name=e),name:"bank_name",label:"",required:"",onClick:a[3]||(a[3]=e=>l.showCurrency=!0),"right-icon":"arrow-down",class:"mt20",disabled:"",placeholder:e.$t("p_person.name")},null,8,["modelValue","placeholder"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.bank_account,"onUpdate:modelValue":a[4]||(a[4]=e=>l.bank_account=e),name:"bank_account",label:"",required:"",disabled:!!l.userInfo.bank_account,placeholder:e.$t("p_person.number"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.bank_phone,"onUpdate:modelValue":a[5]||(a[5]=e=>l.bank_phone=e),name:"bank_phone",label:"",required:"",disabled:!!l.userInfo.bank_phone,placeholder:e.$t("p_withdrawaddress.number"),class:"field mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.bank_ifsc,"onUpdate:modelValue":a[6]||(a[6]=e=>l.bank_ifsc=e),name:"bank_ifsc",label:"",required:"",disabled:!!l.userInfo.bank_ifsc,placeholder:e.$t("p_withdrawaddress.ifsc"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.age,"onUpdate:modelValue":a[7]||(a[7]=e=>l.age=e),name:"age",label:"",required:"",disabled:!!l.userInfo.age,placeholder:e.$t("p_withdrawaddress.age"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(o["createVNode"])(b,{class:"w85"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:l.work,"onUpdate:modelValue":a[8]||(a[8]=e=>l.work=e),name:"work",label:"",required:"",disabled:!!l.userInfo.work,placeholder:e.$t("p_withdrawaddress.work"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(u,{block:"",type:"primary","native-type":"submit"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("p_register.submit")),1)]),_:1})])]),_:1},8,["onSubmit"]),Object(o["createVNode"])(p,{show:l.showCurrency,"onUpdate:show":a[10]||(a[10]=e=>l.showCurrency=e),position:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{class:"langPopup",title:e.$t("t_page.t_language"),"confirm-button-text":e.$t("p_common.ok"),"cancel-button-text":e.$t("p_common.cancel"),columns:l.selectColumns,onConfirm:l.onSelectConfirm,onCancel:a[9]||(a[9]=e=>l.showCurrency=!1)},null,8,["title","confirm-button-text","cancel-button-text","columns","onConfirm"])]),_:1},8,["show"])])}t("fc63");var r=t("dda5"),s=(t("ac6b"),t("5f24")),d=(t("3b21"),t("4b9e")),b=(t("22fa"),t("2e1b")),u=(t("21a7"),t("f23a")),i=(t("27f1"),t("1c96")),m=t("5502"),p=t("9fb0"),f=t("c24f"),h=t("df85"),_={name:"person",setup(){const e=Object(m["c"])(),a=Object(o["computed"])(()=>e.getters.userInfo),t=Object(o["ref"])(""),n=Object(o["ref"])(""),c=Object(o["ref"])(""),l=Object(o["ref"])(""),r=Object(o["ref"])(""),s=Object(o["ref"])(""),d=Object(o["ref"])(""),b=Object(o["ref"])([]),{cookies:u}=Object(h["a"])();let p=Object(o["ref"])(!1);const _=e=>/[^0-9]/.test(e.trim()),k=e=>{n.value=e,p.value=!1},j=()=>{i["a"].loading(),Object(f["m"])().then(e=>{1==e.code&&(b.value=e.data),i["a"].clear()})};return{bank_real:t,bank_name:n,bank_account:r,bank_ifsc:c,bank_phone:l,age:s,work:d,store:e,userInfo:a,cookies:u,showCurrency:p,selectColumns:b,onSelectConfirm:k,passPattern:_,catchBank:j}},components:{vanField:u["a"],vanButton:b["b"],vanForm:d["a"],vanPopup:s["b"],vanPicker:r["b"]},data(){return{}},mounted(){this.catchBank(),this.bank_name=this.userInfo.bank_name,this.bank_real=this.userInfo.bank_real,this.bank_account=this.userInfo.bank_account,this.bank_phone=this.userInfo.bank_phone,this.bank_ifsc=this.userInfo.bank_ifsc,this.age=this.userInfo.age,this.work=this.userInfo.work},methods:{onSubmit:function(e){i["a"].loading({message:"",forbidClick:!0}),e.token=this.cookies.get(p["a"]);const a={...e};a.bank_name&&a.bank_real&&a.bank_account&&a.bank_phone&&a.bank_ifsc&&a.age&&a.work?Object(f["A"])(a).then(e=>{1==e.code?(i["a"].success(e.info),this.$router.go(-1)):i["a"].fail(e.info)}).catch(e=>{console.log(e)}):i["a"].fail()}}},k=(t("9dc4"),t("6b0d")),j=t.n(k);const O=j()(_,[["render",l],["__scopeId","data-v-f82957ba"]]);a["default"]=O},cac3:function(e,a,t){}}]);