(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67d4a0dc"],{5340:function(e,t,a){},"9cc0":function(e,t,a){"use strict";a.r(t);a("14d9");var c=a("7a23");const o={class:"Fc wrap",style:{"padding-bottom":"60px"}},n={class:"m-txt",style:{width:"90%"}},r={class:"withdrawal"},l={class:"Frl"},s={class:"withdrawal"},i={class:"Fc",style:{width:"100%",margin:"0.5rem 0"}};function d(e,t,a,d,b,p){const u=Object(c["resolveComponent"])("van-field"),m=Object(c["resolveComponent"])("van-button"),h=Object(c["resolveComponent"])("van-form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createVNode"])(h,{onSubmit:p.onSubmit,class:"Fc w100",autocomplete:"off"},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",r,Object(c["toDisplayString"])(e.$t("p_recharge.payment_Channel")),1),Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(1==b.tab?"walletType":"walletType2"),onClick:t[0]||(t[0]=e=>p.selectTab(1))},Object(c["toDisplayString"])(e.$t("p_common.bank"))+"1",3),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(2==b.tab?"walletType":"walletType2"),onClick:t[1]||(t[1]=e=>p.selectTab(2))},Object(c["toDisplayString"])(e.$t("p_common.bank"))+"2",3)]),Object(c["createElementVNode"])("div",s,Object(c["toDisplayString"])(e.$t("p_recharge.wallet_amount")),1),Object(c["createVNode"])(u,{modelValue:d.amout,"onUpdate:modelValue":t[2]||(t[2]=e=>d.amout=e),type:"number",name:"amout",label:"",placeholder:e.$t("p_register.rechargetip"),class:"mt20"},null,8,["modelValue","placeholder"])]),Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(m,{round:"",block:"",type:"primary","native-type":"submit"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("p_withdraw.ok")),1)]),_:1}),Object(c["createVNode"])(m,{round:"",block:"",type:"primary",onClick:t[3]||(t[3]=e=>this.$router.push({name:"walletrecord"})),style:{"margin-top":"25px"}},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("p_userarea.rechargerecord")),1)]),_:1})])]),_:1},8,["onSubmit"])])}a("27f1");var b=a("1c96"),p=(a("3b21"),a("4b9e")),u=(a("22fa"),a("2e1b")),m=(a("21a7"),a("f23a")),h=a("6605"),g=a("c24f"),j=a("9fb0"),O=a("df85"),f={name:"Home",components:{vanField:m["a"],vanButton:u["b"],vanForm:p["a"]},setup(){const e=Object(h["c"])();let t=Object(c["ref"])(""),a=Object(c["ref"])("");const o=e.currentRoute.value.query.money;let{proxy:n}=Object(c["getCurrentInstance"])(),r=Object(c["ref"])("");const{cookies:l}=Object(O["a"])();return{money:o,rechargeCode:r,proxy:n,amout:t,paypwd:a,cookies:l}},data(){return{image:"",tab:1}},computed:{active_trc(){return"trc"==this.coin_type?"active":""},active_btc(){return"btc"==this.coin_type?"active":""},active_doge(){return"doge"==this.coin_type?"active":""}},mounted(){},methods:{selectTab(e){this.tab=e},rechargePost(){Object(g["B"])().then(e=>{console.log(e),1==e.code?(b["a"].success(this.$t("p_recharge.rechargesuccess")),this.$router.push({name:"walletrecord"})):b["a"].fail(e.info)}).catch(e=>{console.log(e)})},afterRead(e){console.log(e);let t=new FormData;t.append("file",e.file),b["a"].loading({duration:0,message:this.$t("uploading..."),forbidClick:!0,loadingType:"spinner"}),Object(g["k"])(t).then(e=>{const t=e.data;b["a"].clear(),0==e.status&&(b["a"].success(this.$t("p_recharge.uploadsuccess")),this.image=t.url)})},onSubmit:function(e){e.token=this.cookies.get(j["a"]),e.image=this.image,console.log(e);const t={...e};t.payment_channel=this.tab,b["a"].loading({message:"",duration:1e3,forbidClick:!0}),Object(g["B"])(t).then(e=>{console.log(e),1==e.code?(b["a"].success(this.$t("p_recharge.rechargesuccess")),location.href=e.data):b["a"].fail(e.info)}).catch(e=>{console.log(e)})}}},y=(a("ac91"),a("6b0d")),v=a.n(y);const w=v()(f,[["render",d],["__scopeId","data-v-0efbf0f8"]]);t["default"]=w},ac91:function(e,t,a){"use strict";a("5340")}}]);