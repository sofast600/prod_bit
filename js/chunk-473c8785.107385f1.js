(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-473c8785"],{"0bef":function(e,t,a){},"268f":function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var c=a("7a23"),o=a("1fba"),n=a("e5f6"),i=a("5aa0"),l=a("8db7"),r=a("450f"),s=a("d7d5"),d=a("efd9"),u=a("ee0b");const[b,m]=Object(o["a"])("swipe"),v={loop:n["g"],width:n["f"],height:n["f"],vertical:Boolean,autoplay:Object(n["c"])(0),duration:Object(n["c"])(500),touchable:n["g"],lazyRender:Boolean,initialSwipe:Object(n["c"])(0),indicatorColor:String,showIndicators:n["g"],stopPropagation:n["g"]},p=Symbol(b);var h=Object(c["defineComponent"])({name:b,props:v,emits:["change"],setup(e,{emit:t,slots:a}){const o=Object(c["ref"])(),n=Object(c["ref"])(),b=Object(c["reactive"])({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),v=Object(s["a"])(),{children:h,linkChildren:O}=Object(r["useChildren"])(p),f=Object(c["computed"])(()=>h.length),j=Object(c["computed"])(()=>b[e.vertical?"height":"width"]),g=Object(c["computed"])(()=>e.vertical?v.deltaY.value:v.deltaX.value),w=Object(c["computed"])(()=>{if(b.rect){const t=e.vertical?b.rect.height:b.rect.width;return t-j.value*f.value}return 0}),y=Object(c["computed"])(()=>Math.ceil(Math.abs(w.value)/j.value)),N=Object(c["computed"])(()=>f.value*j.value),V=Object(c["computed"])(()=>(b.active+f.value)%f.value),E=Object(c["computed"])(()=>{const t=e.vertical?"vertical":"horizontal";return v.direction.value===t}),x=Object(c["computed"])(()=>{const t={transitionDuration:(b.swiping?0:e.duration)+"ms",transform:`translate${e.vertical?"Y":"X"}(${b.offset}px)`};if(j.value){const a=e.vertical?"height":"width",c=e.vertical?"width":"height";t[a]=N.value+"px",t[c]=e[c]?e[c]+"px":""}return t}),k=t=>{const{active:a}=b;return t?e.loop?Object(i["c"])(a+t,-1,f.value):Object(i["c"])(a+t,0,y.value):a},D=(t,a=0)=>{let c=t*j.value;e.loop||(c=Math.min(c,-w.value));let o=a-c;return e.loop||(o=Object(i["c"])(o,w.value,0)),o},M=({pace:a=0,offset:c=0,emitChange:o})=>{if(f.value<=1)return;const{active:n}=b,i=k(a),l=D(i,c);if(e.loop){if(h[0]&&l!==w.value){const e=l<w.value;h[0].setOffset(e?N.value:0)}if(h[f.value-1]&&0!==l){const e=l>0;h[f.value-1].setOffset(e?-N.value:0)}}b.active=i,b.offset=l,o&&i!==n&&t("change",V.value)},S=()=>{b.swiping=!0,b.active<=-1?M({pace:f.value}):b.active>=f.value&&M({pace:-f.value})},_=()=>{S(),v.reset(),Object(r["doubleRaf"])(()=>{b.swiping=!1,M({pace:-1,emitChange:!0})})},C=()=>{S(),v.reset(),Object(r["doubleRaf"])(()=>{b.swiping=!1,M({pace:1,emitChange:!0})})};let B;const F=()=>clearTimeout(B),I=()=>{F(),e.autoplay>0&&f.value>1&&(B=setTimeout(()=>{C(),I()},+e.autoplay))},$=(t=+e.initialSwipe)=>{if(!o.value)return;const a=()=>{var a,c;if(!Object(l["d"])(o)){const t={width:o.value.offsetWidth,height:o.value.offsetHeight};b.rect=t,b.width=+(null!=(a=e.width)?a:t.width),b.height=+(null!=(c=e.height)?c:t.height)}f.value&&(t=Math.min(f.value-1,t)),b.active=t,b.swiping=!0,b.offset=D(t),h.forEach(e=>{e.setOffset(0)}),I()};Object(l["d"])(o)?Object(c["nextTick"])().then(a):a()},L=()=>$(b.active);let z;const A=t=>{e.touchable&&(v.start(t),z=Date.now(),F(),S())},T=t=>{if(e.touchable&&b.swiping&&(v.move(t),E.value)){const a=!e.loop&&(0===b.active&&g.value>0||b.active===f.value-1&&g.value<0);a||(Object(l["e"])(t,e.stopPropagation),M({offset:g.value}))}},R=()=>{if(!e.touchable||!b.swiping)return;const t=Date.now()-z,a=g.value/t,c=Math.abs(a)>.25||Math.abs(g.value)>j.value/2;if(c&&E.value){const t=e.vertical?v.offsetY.value:v.offsetX.value;let a=0;a=e.loop?t>0?g.value>0?-1:1:0:-Math[g.value>0?"ceil":"floor"](g.value/j.value),M({pace:a,emitChange:!0})}else g.value&&M({pace:0});b.swiping=!1,I()},Y=(t,a={})=>{S(),v.reset(),Object(r["doubleRaf"])(()=>{let c;c=e.loop&&t===f.value?0===b.active?0:t:t%f.value,a.immediate?Object(r["doubleRaf"])(()=>{b.swiping=!1}):b.swiping=!1,M({pace:c-b.active,emitChange:!0})})},P=(t,a)=>{const o=a===V.value,n=o?{backgroundColor:e.indicatorColor}:void 0;return Object(c["createVNode"])("i",{style:n,class:m("indicator",{active:o})},null)},H=()=>a.indicator?a.indicator({active:V.value,total:f.value}):e.showIndicators&&f.value>1?Object(c["createVNode"])("div",{class:m("indicators",{vertical:e.vertical})},[Array(f.value).fill("").map(P)]):void 0;return Object(d["a"])({prev:_,next:C,state:b,resize:L,swipeTo:Y}),O({size:j,props:e,count:f,activeIndicator:V}),Object(c["watch"])(()=>e.initialSwipe,e=>$(+e)),Object(c["watch"])(f,()=>$(b.active)),Object(c["watch"])(()=>e.autoplay,I),Object(c["watch"])([l["j"],l["i"]],L),Object(c["watch"])(Object(r["usePageVisibility"])(),e=>{"visible"===e?I():F()}),Object(c["onMounted"])($),Object(c["onActivated"])(()=>$(b.active)),Object(u["b"])(()=>$(b.active)),Object(c["onDeactivated"])(F),Object(c["onBeforeUnmount"])(F),Object(r["useEventListener"])("touchmove",T,{target:n}),()=>{var t;return Object(c["createVNode"])("div",{ref:o,class:m()},[Object(c["createVNode"])("div",{ref:n,style:x.value,class:m("track",{vertical:e.vertical}),onTouchstartPassive:A,onTouchend:R,onTouchcancel:R},[null==(t=a.default)?void 0:t.call(a)]),H()])}}})},"309c":function(e,t,a){e.exports=a.p+"img/1.2f357549.svg"},4875:function(e,t,a){e.exports=a.p+"img/2.83fccc11.svg"},6321:function(e,t,a){"use strict";a("0bef")},"6b8f":function(e,t,a){e.exports=a.p+"img/se5.2ddef35b.svg"},"70a6":function(e,t,a){e.exports=a.p+"img/se2.16604fdc.svg"},7510:function(e,t,a){e.exports=a.p+"img/6.7092785a.svg"},"786d":function(e,t,a){},8270:function(e,t,a){},8284:function(e,t,a){e.exports=a.p+"img/se1.67540aed.svg"},"82db":function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var c=a("23f9"),o=a("7a23"),n=a("1fba"),i=a("268f"),l=a("450f"),r=a("efd9");const[s,d]=Object(n["a"])("swipe-item");var u=Object(o["defineComponent"])({name:s,setup(e,{slots:t}){let a;const c=Object(o["reactive"])({offset:0,inited:!1,mounted:!1}),{parent:n,index:s}=Object(l["useParent"])(i["a"]);if(!n)return void 0;const u=Object(o["computed"])(()=>{const e={},{vertical:t}=n.props;return n.size.value&&(e[t?"height":"width"]=n.size.value+"px"),c.offset&&(e.transform=`translate${t?"Y":"X"}(${c.offset}px)`),e}),b=Object(o["computed"])(()=>{const{loop:e,lazyRender:t}=n.props;if(!t||a)return!0;if(!c.mounted)return!1;const o=n.activeIndicator.value,i=n.count.value-1,l=0===o&&e?i:o-1,r=o===i&&e?0:o+1;return a=s.value===o||s.value===l||s.value===r,a}),m=e=>{c.offset=e};return Object(o["onMounted"])(()=>{Object(o["nextTick"])(()=>{c.mounted=!0})}),Object(r["a"])({setOffset:m}),()=>{var e;return Object(o["createVNode"])("div",{class:d(),style:u.value},[b.value?null==(e=t.default)?void 0:e.call(t):null])}}});const b=Object(c["a"])(u);var m=b},"9ac2":function(e,t,a){e.exports=a.p+"img/3.41caf393.svg"},"9f55":function(e,t,a){e.exports=a.p+"img/se3.fb8650d3.svg"},a411:function(e,t,a){"use strict";a.r(t);a("14d9");var c=a("7a23"),o=a("8284"),n=a.n(o),i=a("70a6"),l=a.n(i),r=a("9f55"),s=a.n(r),d=a("6b8f"),u=a.n(d);const b=e=>(Object(c["pushScopeId"])("data-v-1948cdf8"),e=e(),Object(c["popScopeId"])(),e),m={class:"Fc",style:{"padding-bottom":"60px",background:"#ffffff"}},v={class:"notice2 mt10"},p=["src"],h={class:"topIconNav"},O=b(()=>Object(c["createElementVNode"])("img",{src:n.a},null,-1)),f={class:"value"},j=b(()=>Object(c["createElementVNode"])("img",{src:l.a},null,-1)),g={class:"value"},w=b(()=>Object(c["createElementVNode"])("img",{src:s.a},null,-1)),y={class:"value"},N=b(()=>Object(c["createElementVNode"])("img",{src:u.a},null,-1)),V=b(()=>Object(c["createElementVNode"])("div",{class:"value"},"amazon",-1)),E=[N,V],x={class:"cooperation mt20 mb10"},k={class:"Account Fc"},D={class:"balance"},M={class:"mt10 balance_money"},S=b(()=>Object(c["createElementVNode"])("div",{class:"line"},null,-1)),_={class:"Fr mt20",style:{width:"90%"}},C={class:"Fc",style:{flex:"1"}},B={style:{width:"80%","text-align":"center"}},F={class:"Fc",style:{flex:"1"}},I={style:{width:"80%","text-align":"center"}},$={class:"Fc",style:{flex:"1"}},L={style:{width:"80%","text-align":"center"}},z={class:"cooperation mt20 mb10"},A={class:"notice Fc"},T={class:"Frl swipe-item"},R={class:"time",style:{width:"30%"}},Y={class:"time",style:{"text-align":"left"}},P={class:"time",style:{"text-align":"left"}},H={class:"Frl swipe-item"},X={class:"time",style:{width:"30%"}},W={class:"time",style:{"text-align":"left"}},J={class:"time",style:{"text-align":"left"}},q={class:"Frl swipe-item"},G={class:"time",style:{width:"30%"}},U={class:"time",style:{"text-align":"left"}},K={class:"time",style:{"text-align":"left"}},Q={class:"Fc",style:{width:"100%"}},Z={class:"cooperation mt20 mb10"},ee={class:"coor"},te=["onClick","src"];function ae(e,t,a,o,n,i){const l=Object(c["resolveComponent"])("van-swipe-item"),r=Object(c["resolveComponent"])("van-swipe");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",m,[Object(c["createElementVNode"])("div",v,[Object(c["createVNode"])(r,{class:"banner-swiper",autoplay:4e3},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.carouselList,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:t},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("img",{src:e.img},null,8,p)]),_:2},1024))),128))]),_:1})]),Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",{class:"item",onClick:t[0]||(t[0]=t=>e.$router.push({name:"recharge"}))},[O,Object(c["createElementVNode"])("div",f,Object(c["toDisplayString"])(e.$t("p_userarea.recharge")),1)]),Object(c["createElementVNode"])("div",{class:"item",onClick:t[1]||(t[1]=t=>e.$router.push({name:"withdraw"}))},[j,Object(c["createElementVNode"])("div",g,Object(c["toDisplayString"])(e.$t("p_userarea.withdraw")),1)]),Object(c["createElementVNode"])("div",{class:"item",onClick:t[2]||(t[2]=t=>e.$router.push({name:"about"}))},[w,Object(c["createElementVNode"])("div",y,Object(c["toDisplayString"])(e.$t("t_page.t_about")),1)]),Object(c["createElementVNode"])("div",{class:"item",onClick:t[3]||(t[3]=e=>i.nav(n.amazon))},E)]),Object(c["createElementVNode"])("div",x,Object(c["toDisplayString"])(e.$t("p_home.display")),1),Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("div",D,Object(c["toDisplayString"])(e.$t("p_home.balance")),1),Object(c["createElementVNode"])("div",M,Object(c["toDisplayString"])((parseFloat(o.userInfo.amount)+parseFloat(o.userInfo.amount_frozen)).toFixed(2)),1),S,Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(o.userInfo.amount_today),1),Object(c["createElementVNode"])("div",B,Object(c["toDisplayString"])(e.$t("p_home.todays")),1)]),Object(c["createElementVNode"])("div",F,[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(o.userInfo.amount),1),Object(c["createElementVNode"])("div",I,Object(c["toDisplayString"])(e.$t("p_grab.available")),1)]),Object(c["createElementVNode"])("div",$,[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(o.userInfo.amount_frozen),1),Object(c["createElementVNode"])("div",L,Object(c["toDisplayString"])(e.$t("p_grab.unavailable")),1)])])]),Object(c["createElementVNode"])("div",z,Object(c["toDisplayString"])(e.$t("p_home.withdrawal_information")),1),Object(c["createElementVNode"])("div",A,[Object(c["createVNode"])(r,{vertical:"",class:"notice-swipe",autoplay:3e3,touchable:!1,"show-indicators":!1},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.withdrawList,t=>(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:t},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("div",R,Object(c["toDisplayString"])(t.title),1),Object(c["createElementVNode"])("div",Y,Object(c["toDisplayString"])(e.$t("p_home.user_withdrawal")),1),Object(c["createElementVNode"])("div",P,Object(c["toDisplayString"])(t.money),1)])]),_:2},1024))),128))]),_:1}),Object(c["createVNode"])(r,{vertical:"",class:"notice-swipe",autoplay:3e3,touchable:!1,"show-indicators":!1,style:{"margin-top":"5px"}},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.withdrawList2,t=>(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:t},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",H,[Object(c["createElementVNode"])("div",X,Object(c["toDisplayString"])(t.title),1),Object(c["createElementVNode"])("div",W,Object(c["toDisplayString"])(e.$t("p_home.user_withdrawal")),1),Object(c["createElementVNode"])("div",J,Object(c["toDisplayString"])(t.money),1)])]),_:2},1024))),128))]),_:1}),Object(c["createVNode"])(r,{vertical:"",class:"notice-swipe",autoplay:3e3,touchable:!1,"show-indicators":!1,style:{"margin-top":"5px"}},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.withdrawList3,t=>(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:t},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",q,[Object(c["createElementVNode"])("div",G,Object(c["toDisplayString"])(t.title),1),Object(c["createElementVNode"])("div",U,Object(c["toDisplayString"])(e.$t("p_home.user_withdrawal")),1),Object(c["createElementVNode"])("div",K,Object(c["toDisplayString"])(t.money),1)])]),_:2},1024))),128))]),_:1})]),Object(c["createElementVNode"])("div",Q,[Object(c["createElementVNode"])("div",Z,Object(c["toDisplayString"])(e.$t("p_home.partner")),1),Object(c["createElementVNode"])("div",ee,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.list,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t},[Object(c["createElementVNode"])("img",{style:{margin:"5px 2%"},onClick:t=>i.nav(e.url),src:e.icon},null,8,te)]))),128))])])])}a("27f1");var ce=a("1c96"),oe=(a("68ef"),a("8270"),a("786d"),a("82db")),ne=a("c21d"),ie=a("5502"),le=a("df85"),re=a("fa7d"),se=a("c24f"),de={name:"Home",components:{vanSwipe:ne["b"],vanSwipeItem:oe["b"]},data(){return{amazon:"https://www.amazon.in",noticeList:[],contactList:[],pageNotice:{},token:{},order:{},withdrawList:[],withdrawList2:[],withdrawList3:[],list:[{icon:a("309c"),url:"https://www.snapdeal.com"},{icon:a("4875"),url:"https://www.indiamart.com"},{icon:a("9ac2"),url:"https://www.amazon.in"},{icon:a("e549"),url:"https://www.etsy.com"},{icon:a("ca41"),url:"https://www.myntra.com"},{icon:a("7510"),url:"https://www.koovs.com/"}]}},setup(){const{cookies:e}=Object(le["a"])(),t=Object(ie["c"])(),a=Object(c["ref"])(!1),o=Object(c["ref"])(!1),n=Object(c["ref"])(!1),i=Object(c["ref"])(!1);let{proxy:l}=Object(c["getCurrentInstance"])();const r=Object(c["ref"])([]),s=Object(c["ref"])({width:"100%",height:"120px",color:"#409eff",title:"",src:"https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!1,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0,controlBtns:["audioTrack","quality","speedRate","volume","setting","pip","pageFullScreen","fullScreen"]}),d=e=>{let t={name:e};console.log(t),Object(se["e"])(t).then(e=>{1==e.code&&(r.value=e.data)})};return{userInfo:Object(c["computed"])(()=>t.getters.userInfo),proxy:l,nshow:a,cookies:e,showOrder:o,showCommodity:n,showRec:i,carou:d,options:s,carouselList:r}},mounted(){const e=Object(ie["c"])(),t=()=>e.dispatch("GetInfo");t().then(()=>{this.userInfo=e.getters.userInfo}).catch(e=>{Object(ce["a"])(e.message)}),this.getWithdrawData(),this.carou("banner1")},watch:{},methods:{formatDate:re["b"],nav(e){location.href=e},getWithdrawData(){let e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),a="1234567890",c=[];for(let i=0;i<100;i++){let e=a.charAt(10*Math.random()),o=a.charAt(10*Math.random()),n=a.charAt(10*Math.random()),i=a.charAt(10*Math.random()),l=e+i+"****"+o+n,r=Math.floor(1e6*Math.random())+200,s=" "+r,d={title:l,money:s,time:t};c.push(d)}this.withdrawList=c;let o=[];for(let i=0;i<100;i++){let e=a.charAt(10*Math.random()),c=a.charAt(10*Math.random()),n=a.charAt(10*Math.random()),i=a.charAt(10*Math.random()),l=e+i+"****"+c+n,r=[100,1e3,1e4,1e4,1e5,1e6],s=Math.floor(Math.random()*r.length),d=Math.floor(Math.random()*r[s])+200,u=" "+d,b={title:l,money:u,time:t};o.push(b)}this.withdrawList2=o;let n=[];for(let i=0;i<100;i++){let e=a.charAt(10*Math.random()),c=a.charAt(10*Math.random()),o=a.charAt(10*Math.random()),i=a.charAt(10*Math.random()),l=e+i+"****"+c+o,r=[100,1e3,1e4,1e4,1e5,1e6],s=Math.floor(Math.random()*r.length),d=Math.floor(Math.random()*r[s])+200,u=" "+d,b={title:l,money:u,time:t};n.push(b)}this.withdrawList3=n}}},ue=(a("6321"),a("6b0d")),be=a.n(ue);const me=be()(de,[["render",ae],["__scopeId","data-v-1948cdf8"]]);t["default"]=me},c21d:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var c=a("23f9"),o=a("268f");const n=Object(c["a"])(o["b"]);var i=n},ca41:function(e,t,a){e.exports=a.p+"img/5.30e767dd.svg"},e549:function(e,t,a){e.exports=a.p+"img/4.78ecac3d.svg"},fa7d:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c}));const c=e=>{const t=5.5,a=(new Date).getTimezoneOffset();e*=1e3,e+=60*t*60*1e3+60*a*1e3;var c=new Date(e),o=c.getFullYear(),n=c.getMonth()+1,i=c.getDate(),l=c.getHours(),r=c.getMinutes(),s=c.getSeconds();n<10&&(n="0"+n),i<10&&(i="0"+i),l<10&&(l="0"+l),r<10&&(r="0"+r),s<10&&(s="0"+s);var d=o+"-"+n+"-"+i+" "+l+":"+r;return d},o=e=>{const t=5.5,a=(new Date).getTimezoneOffset();e*=1e3,e+=60*t*60*1e3+60*a*1e3;var c=new Date(e),o=c.getFullYear(),n=c.getMonth()+1,i=c.getDate(),l=c.getHours(),r=c.getMinutes(),s=c.getSeconds();n<10&&(n="0"+n),i<10&&(i="0"+i),l<10&&(l="0"+l),r<10&&(r="0"+r),s<10&&(s="0"+s);var d=o+"-"+n+"-"+i;return d}}}]);