(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b311281c"],{"9b7b":function(e,t,c){"use strict";c("aee5")},"9cc0":function(e,t,c){"use strict";c.r(t);c("14d9");var a=c("7a23");const o={class:"Fc wrap",style:{"padding-bottom":"60px"}},n={class:"m-txt",style:{width:"90%"}},r={class:"withdrawal"},s={class:"walletType"},i={class:"withdrawal"},l={class:"Fc",style:{width:"100%",margin:"0.5rem 0"}};function d(e,t,c,d,u,b){const p=Object(a["resolveComponent"])("van-field"),m=Object(a["resolveComponent"])("van-button"),h=Object(a["resolveComponent"])("van-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(h,{onSubmit:b.onSubmit,class:"Fc w100",autocomplete:"off"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.$t("p_recharge.payment_Channel")),1),Object(a["createElementVNode"])("div",s,Object(a["toDisplayString"])(e.$t("p_common.bank")),1),Object(a["createElementVNode"])("div",i,Object(a["toDisplayString"])(e.$t("p_recharge.wallet_amount")),1),Object(a["createVNode"])(p,{modelValue:d.amout,"onUpdate:modelValue":t[0]||(t[0]=e=>d.amout=e),type:"number",name:"amout",label:"",placeholder:e.$t("p_register.rechargetip"),class:"mt20"},null,8,["modelValue","placeholder"])]),Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(m,{round:"",block:"",type:"primary","native-type":"submit"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("p_withdraw.ok")),1)]),_:1}),Object(a["createVNode"])(m,{round:"",block:"",type:"primary",onClick:t[1]||(t[1]=e=>this.$router.push({name:"walletrecord"})),style:{"margin-top":"25px"}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("p_userarea.rechargerecord")),1)]),_:1})])]),_:1},8,["onSubmit"])])}c("27f1");var u=c("1c96"),b=(c("3b21"),c("4b9e")),p=(c("22fa"),c("2e1b")),m=(c("21a7"),c("f23a")),h=c("6605"),g=c("c24f"),j=c("9fb0"),O=c("df85"),f={name:"Home",components:{vanField:m["a"],vanButton:p["b"],vanForm:b["a"]},setup(){const e=Object(h["c"])();let t=Object(a["ref"])(""),c=Object(a["ref"])("");const o=e.currentRoute.value.query.money;let{proxy:n}=Object(a["getCurrentInstance"])(),r=Object(a["ref"])("");const{cookies:s}=Object(O["a"])();return{money:o,rechargeCode:r,proxy:n,amout:t,paypwd:c,cookies:s}},data(){return{image:""}},computed:{active_trc(){return"trc"==this.coin_type?"active":""},active_btc(){return"btc"==this.coin_type?"active":""},active_doge(){return"doge"==this.coin_type?"active":""}},mounted(){},methods:{rechargePost(){Object(g["A"])().then(e=>{console.log(e),0==e.status?(u["a"].success(this.$t("p_recharge.rechargesuccess")),this.$router.push({name:"walletrecord"})):u["a"].fail(e.msg)}).catch(e=>{console.log(e)})},afterRead(e){console.log(e);let t=new FormData;t.append("file",e.file),u["a"].loading({duration:0,message:this.$t("uploading..."),forbidClick:!0,loadingType:"spinner"}),Object(g["k"])(t).then(e=>{const t=e.data;u["a"].clear(),0==e.status&&(u["a"].success(this.$t("p_recharge.uploadsuccess")),this.image=t.url)})},onSubmit:function(e){e.token=this.cookies.get(j["a"]),e.image=this.image,console.log(e);const t={...e};u["a"].loading({message:"",duration:1e3,forbidClick:!0}),Object(g["A"])(t).then(e=>{console.log(e),1==e.code?(u["a"].success(this.$t("p_recharge.rechargesuccess")),location.href=e.data):u["a"].fail(e.info)}).catch(e=>{console.log(e)})}}},y=(c("9b7b"),c("6b0d")),v=c.n(y);const w=v()(f,[["render",d],["__scopeId","data-v-256fc218"]]);t["default"]=w},aee5:function(e,t,c){}}]);