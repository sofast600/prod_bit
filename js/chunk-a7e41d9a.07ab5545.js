(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7e41d9a"],{"2dec":function(e,a,t){},a378:function(e,a,t){"use strict";t.r(a);var l=t("7a23");const n={class:"Fc w100"},o={class:"Fc",style:{width:"100%",margin:"2rem 0"}};function c(e,a,t,c,d,s){const r=Object(l["resolveComponent"])("van-field"),b=Object(l["resolveComponent"])("van-cell-group"),u=Object(l["resolveComponent"])("van-button"),i=Object(l["resolveComponent"])("van-form");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",n,[Object(l["createVNode"])(i,{onSubmit:s.onSubmit,class:"Fc w100"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(b,{class:"mt20 w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.userInfo.name,"onUpdate:modelValue":a[0]||(a[0]=e=>c.userInfo.name=e),type:"number",name:"phone",label:"",disabled:"true",class:"mt20"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.bank_real,"onUpdate:modelValue":a[1]||(a[1]=e=>c.bank_real=e),name:"bank_real",label:"",required:"",disabled:!!c.userInfo.bank_real,placeholder:e.$t("p_person.real_name"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.bank_name,"onUpdate:modelValue":a[2]||(a[2]=e=>c.bank_name=e),name:"bank_name",label:"",required:"",disabled:!!c.userInfo.bank_name,placeholder:e.$t("p_person.name"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.bank_account,"onUpdate:modelValue":a[3]||(a[3]=e=>c.bank_account=e),name:"bank_account",label:"",required:"",disabled:!!c.userInfo.bank_account,placeholder:e.$t("p_person.number"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.bank_phone,"onUpdate:modelValue":a[4]||(a[4]=e=>c.bank_phone=e),name:"bank_phone",label:"",required:"",disabled:!!c.userInfo.bank_phone,placeholder:e.$t("p_withdrawaddress.number"),class:"field mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.bank_ifsc,"onUpdate:modelValue":a[5]||(a[5]=e=>c.bank_ifsc=e),name:"bank_ifsc",label:"",required:"",disabled:!!c.userInfo.bank_ifsc,placeholder:e.$t("p_withdrawaddress.ifsc"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.age,"onUpdate:modelValue":a[6]||(a[6]=e=>c.age=e),name:"age",label:"",required:"",disabled:!!c.userInfo.age,placeholder:e.$t("p_withdrawaddress.age"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createVNode"])(b,{class:"w85"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:c.work,"onUpdate:modelValue":a[7]||(a[7]=e=>c.work=e),name:"work",label:"",required:"",disabled:!!c.userInfo.work,placeholder:e.$t("p_withdrawaddress.work"),class:"mt20"},null,8,["modelValue","disabled","placeholder"])]),_:1}),Object(l["createElementVNode"])("div",o,[Object(l["createVNode"])(u,{block:"",type:"primary","native-type":"submit"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$t("p_register.submit")),1)]),_:1})])]),_:1},8,["onSubmit"])])}t("27f1");var d=t("1c96"),s=(t("3b21"),t("4b9e")),r=(t("22fa"),t("2e1b")),b=(t("21a7"),t("f23a")),u=t("5502"),i=t("9fb0"),m=t("c24f"),f=t("df85"),p={name:"person",setup(){const e=Object(u["c"])(),a=Object(l["computed"])(()=>e.getters.userInfo),t=Object(l["ref"])(""),n=Object(l["ref"])(""),o=Object(l["ref"])(""),c=Object(l["ref"])(""),d=Object(l["ref"])(""),s=Object(l["ref"])(""),r=Object(l["ref"])(""),{cookies:b}=Object(f["a"])();return{bank_real:t,bank_name:n,bank_account:d,bank_ifsc:o,bank_phone:c,age:s,work:r,store:e,userInfo:a,cookies:b}},components:{vanField:b["a"],vanButton:r["b"],vanForm:s["a"]},data(){return{}},mounted(){this.bank_name=this.userInfo.bank_name,this.bank_real=this.userInfo.bank_real,this.bank_account=this.userInfo.bank_account,this.bank_phone=this.userInfo.bank_phone,this.bank_ifsc=this.userInfo.bank_ifsc,this.age=this.userInfo.age,this.work=this.userInfo.work},methods:{onSubmit:function(e){d["a"].loading({message:"",forbidClick:!0}),e.token=this.cookies.get(i["a"]);const a={...e};a.bank_name&&a.bank_real&&a.bank_account&&a.bank_phone&&a.bank_ifsc&&a.age&&a.work?Object(m["y"])(a).then(e=>{1==e.code?(d["a"].success(e.info),this.$router.go(-1)):d["a"].fail(e.info)}).catch(e=>{console.log(e)}):d["a"].fail()}}},_=(t("c996"),t("6b0d")),k=t.n(_);const h=k()(p,[["render",c],["__scopeId","data-v-843baa8e"]]);a["default"]=h},c996:function(e,a,t){"use strict";t("2dec")}}]);