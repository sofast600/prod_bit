(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de048f7e"],{"514c":function(e,t,n){},c735:function(e,t,n){"use strict";n("514c")},effb:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const a=["innerHTML"];function o(e,t,n,o,l,s){const r=Object(c["resolveComponent"])("van-nav-bar");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(r,{title:o.news_data.title,"left-arrow":"",onClickLeft:o.onClickLeft},null,8,["title","onClickLeft"]),Object(c["createElementVNode"])("div",{class:"w-all notice-content",style:{"text-align":"left"},innerHTML:o.news_data.content},null,8,a)],64)}n("02ab");var l=n("dc94"),s=(n("14d9"),n("c24f")),r=n("6605"),u={name:"activity",setup(){const e=Object(r["c"])(),t=()=>e.push({name:"home"});let n=Object(c["ref"])([]),a=e.currentRoute.value.params;return Object(s["y"])(a).then(e=>{const t=e.data;0==e.status?(n.value=t,console.log(n.value)):console.log(e)}).catch(e=>{console.log(e)}),{onClickLeft:t,news_data:n}},components:{vanNavBar:l["a"]},data(){return{}},methods:{}},i=(n("c735"),n("6b0d")),d=n.n(i);const f=d()(u,[["render",o],["__scopeId","data-v-6cd74f90"]]);t["default"]=f}}]);