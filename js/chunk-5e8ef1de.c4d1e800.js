(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e8ef1de"],{"1a04":function(e,t,n){},"3d6b":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n("7a23"),c=n("1fba"),r=n("e5f6"),l=n("fa7c"),i=n("b75f"),a=n("4e5e"),s=n("9a1c");const[u,b]=Object(c["a"])("cell"),p={icon:String,size:String,title:r["f"],value:r["f"],label:r["f"],center:Boolean,isLink:Boolean,border:r["g"],required:Boolean,iconPrefix:String,valueClass:r["h"],labelClass:r["h"],titleClass:r["h"],titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},d=Object(l["a"])({},p,a["b"]);var y=Object(o["defineComponent"])({name:u,props:d,setup(e,{slots:t}){const n=Object(a["c"])(),c=()=>{const n=t.label||Object(i["b"])(e.label);if(n)return Object(o["createVNode"])("div",{class:[b("label"),e.labelClass]},[t.label?t.label():e.label])},r=()=>{if(t.title||Object(i["b"])(e.title))return Object(o["createVNode"])("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():Object(o["createVNode"])("span",null,[e.title]),c()])},l=()=>{const n=t.value||t.default,c=n||Object(i["b"])(e.value);if(c){const c=t.title||Object(i["b"])(e.title);return Object(o["createVNode"])("div",{class:[b("value",{alone:!c}),e.valueClass]},[n?n():Object(o["createVNode"])("span",null,[e.value])])}},u=()=>t.icon?t.icon():e.icon?Object(o["createVNode"])(s["a"],{name:e.icon,class:b("left-icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection?"arrow-"+e.arrowDirection:"arrow";return Object(o["createVNode"])(s["a"],{name:t,class:b("right-icon")},null)}};return()=>{var c,i;const{size:a,center:s,border:d,isLink:y,required:f}=e,m=null!=(c=e.clickable)?c:y,h={center:s,required:f,clickable:m,borderless:!d};return a&&(h[a]=!!a),Object(o["createVNode"])("div",{class:b(h),role:m?"button":void 0,tabindex:m?0:void 0,onClick:n},[u(),r(),l(),p(),null==(i=t.extra)?void 0:i.call(t)])}}})},"6c44":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var o=n("23f9"),c=n("3d6b");const r=Object(o["a"])(c["b"]);var l=r},aa5a:function(e,t,n){"use strict";n("68ef"),n("cb51"),n("3743"),n("1a04")},de7f:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=["src"];function r(e,t,n,r,l,i){const a=Object(o["resolveComponent"])("van-cell");return Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.moneys,e=>(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:e.code,title:e.country+" - "+e.name,class:"Fr",style:{height:"1rem"},onClick:t=>i.goto(e.url),"is-link":""},{icon:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{alt:"rec",src:e.icon,class:"b-img",style:{height:"0.4rem",margin:"0 0.2rem"}},null,8,c)]),_:2},1032,["title","onClick"]))),128)}n("aa5a");var l=n("6c44"),i={name:"recList",setup(){let{proxy:e}=Object(o["getCurrentInstance"])(),t=Object(o["ref"])([]);return{moneys:t,proxy:e}},components:{vanCell:l["b"]},data(){return{}},mounted(){this.moneys=[{country:this.proxy.$t("p_country.tr"),name:this.proxy.$t("p_money.try"),code:"TRY",icon:"/flag/tr.png",url:"https://t.me/+t0OUzOz5OH4zZGNh"},{country:this.proxy.$t("p_country.kz"),name:this.proxy.$t("p_money.kzt"),code:"kzt",icon:"/flag/kz.png",url:"https://t.me/+kALa4rS2BscxOTE5"},{country:this.proxy.$t("p_country.ge"),name:this.proxy.$t("p_money.gel"),code:"gel",icon:"/flag/ge.png",url:"https://t.me/+k_BCWv6yDYc1YzMx"},{country:this.proxy.$t("p_country.uz"),name:this.proxy.$t("p_money.uzs"),code:"uzs",icon:"/flag/uz.png",url:"https://t.me/+sgpPgG3wL1ZjNzJh"},{country:this.proxy.$t("p_country.ro"),name:this.proxy.$t("p_money.ly"),code:"RON",icon:"/flag/ro.png",url:"https://t.me/+3s-8umUSPvo5NDhh"},{country:this.proxy.$t("p_country.aze"),name:this.proxy.$t("p_money.azn"),code:"AZN",icon:"/flag/aze.png",url:"https://t.me/+z9lhrlE2JsQ3NjJh"}]},methods:{goto:function(e){window.open(e)}}},a=n("6b0d"),s=n.n(a);const u=s()(i,[["render",r]]);t["default"]=u}}]);