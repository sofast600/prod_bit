(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05abd8f2"],{"345f":function(e,t,c){},"48c1":function(e,t,c){"use strict";c("345f")},"9cc0":function(e,t,c){"use strict";c.r(t);c("14d9");var a=c("7a23");const o={class:"Fc wrap",style:{"padding-bottom":"60px"}},n={class:"m-txt",style:{width:"90%"}},r={class:"withdrawal"},l={class:"Frl"},s={class:"withdrawal"},i={class:"Fc",style:{width:"100%",margin:"0.5rem 0"}};function d(e,t,c,d,b,p){const u=Object(a["resolveComponent"])("van-field"),m=Object(a["resolveComponent"])("van-button"),h=Object(a["resolveComponent"])("van-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(h,{onSubmit:p.onSubmit,class:"Fc w100",autocomplete:"off"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.$t("p_recharge.payment_Channel")),1),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(1==b.tab?"walletType":"walletType2"),onClick:t[0]||(t[0]=e=>p.selectTab(1))},Object(a["toDisplayString"])(e.$t("p_common.bank"))+"1",3),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(2==b.tab?"walletType":"walletType2"),onClick:t[1]||(t[1]=e=>p.selectTab(2))},Object(a["toDisplayString"])(e.$t("p_common.bank"))+"2",3)]),Object(a["createElementVNode"])("div",s,Object(a["toDisplayString"])(e.$t("p_recharge.wallet_amount")),1),Object(a["createVNode"])(u,{modelValue:d.amout,"onUpdate:modelValue":t[2]||(t[2]=e=>d.amout=e),type:"number",name:"amout",label:"",placeholder:e.$t("p_register.rechargetip"),class:"mt20"},null,8,["modelValue","placeholder"])]),Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(m,{round:"",block:"",type:"primary","native-type":"submit"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("p_withdraw.ok")),1)]),_:1}),Object(a["createVNode"])(m,{round:"",block:"",type:"primary",onClick:t[3]||(t[3]=e=>this.$router.push({name:"walletrecord"})),style:{"margin-top":"25px"}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("p_userarea.rechargerecord")),1)]),_:1})])]),_:1},8,["onSubmit"])])}c("27f1");var b=c("1c96"),p=(c("3b21"),c("4b9e")),u=(c("22fa"),c("2e1b")),m=(c("21a7"),c("f23a")),h=c("6605"),g=c("c24f"),j=c("9fb0"),O=c("df85"),f={name:"Home",components:{vanField:m["a"],vanButton:u["b"],vanForm:p["a"]},setup(){const e=Object(h["c"])();let t=Object(a["ref"])(""),c=Object(a["ref"])("");const o=e.currentRoute.value.query.money;let{proxy:n}=Object(a["getCurrentInstance"])(),r=Object(a["ref"])("");const{cookies:l}=Object(O["a"])();return{money:o,rechargeCode:r,proxy:n,amout:t,paypwd:c,cookies:l}},data(){return{image:"",tab:1}},computed:{active_trc(){return"trc"==this.coin_type?"active":""},active_btc(){return"btc"==this.coin_type?"active":""},active_doge(){return"doge"==this.coin_type?"active":""}},mounted(){},methods:{selectTab(e){this.tab=e},rechargePost(){Object(g["B"])().then(e=>{console.log(e),1==e.code?(b["a"].success(this.$t("p_recharge.rechargesuccess")),this.$router.push({name:"walletrecord"})):b["a"].fail(e.info)}).catch(e=>{console.log(e)})},afterRead(e){console.log(e);let t=new FormData;t.append("file",e.file),b["a"].loading({duration:0,message:this.$t("uploading..."),forbidClick:!0,loadingType:"spinner"}),Object(g["k"])(t).then(e=>{const t=e.data;b["a"].clear(),0==e.status&&(b["a"].success(this.$t("p_recharge.uploadsuccess")),this.image=t.url)})},onSubmit:function(e){e.token=this.cookies.get(j["a"]),e.image=this.image,console.log(e);const t={...e};b["a"].loading({message:"",duration:1e3,forbidClick:!0}),Object(g["B"])(t).then(e=>{console.log(e),1==e.code?(b["a"].success(this.$t("p_recharge.rechargesuccess")),location.href=e.data):b["a"].fail(e.info)}).catch(e=>{console.log(e)})}}},y=(c("48c1"),c("6b0d")),v=c.n(y);const w=v()(f,[["render",d],["__scopeId","data-v-0c1e8db0"]]);t["default"]=w}}]);