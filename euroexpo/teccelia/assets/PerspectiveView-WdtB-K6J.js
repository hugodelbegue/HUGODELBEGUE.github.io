import{p as d,b as p,a as g,c as v}from"./images-g0DWXeZB.js";import{_ as u,c as r,b as l,F as m,r as c,u as n,n as h,o as a,p as y,a as f}from"./index-Sxoc5kOs.js";const I=i=>(y("data-v-9740f2f0"),i=i(),f(),i),z={class:"wrapper-perspective exterior global-padding"},P=["src"],w={class:"wrapper-axonometry global-padding"},L=["src"],x={class:"wrapper-perspective global-padding"},E=["src"],S=I(()=>l("div",{id:"overlay"},null,-1)),b={data(){return{zoomSwitch:!1,dataLoaded:!1,dataPerspectiveExterior:!1,dataAxonometry:!1,dataPerspectiveInterior:!1}},methods:{loadingPerspectiveExterior(){this.dataPerspectiveExterior=!0,this.loading()},loadingAxonometry(){this.dataAxonometry=!0,this.loading()},loadingPerspectiveInterior(){this.dataPerspectiveInterior=!0,this.loading()},loading(){this.dataPerspectiveExterior&&this.dataAxonometry&&this.dataPerspectiveInterior&&(this.dataLoaded=!0)},zoom(i){const e=document.querySelectorAll(".img"),o=i.currentTarget.src;for(let s=0;s<e.length;s++){const t=e[s].src;o==t&&this.zoomSwitch?e[s].classList.add("zoom-in","fix"):e[s].classList.remove("zoom-in","fix")}},zoomImg(i){const e=document.getElementById("overlay-container"),o=document.getElementById("overlay");this.zoomSwitch=!this.zoomSwitch,this.zoomSwitch?(this.zoom(i),e.classList.add("overlay-height"),o.classList.add("overlay-img"),document.body.style.overflow="hidden"):(this.zoom(i),e.classList.remove("overlay-height"),o.classList.remove("overlay-img"),document.body.style.overflow="")}}},A=Object.assign(b,{__name:"PerspectiveView",setup(i){return(e,o)=>(a(),r("section",{id:"overlay-container",class:h(["animation-opacity",{"animation-loading":e.dataLoaded}])},[l("div",z,[(a(!0),r(m,null,c(n(p),s=>(a(),r("img",{class:"img img-perspective",src:n(d)("perspectives-exterieurs",s),onClick:o[0]||(o[0]=(...t)=>e.zoomImg&&e.zoomImg(...t)),onLoad:o[1]||(o[1]=(...t)=>e.loadingPerspectiveExterior&&e.loadingPerspectiveExterior(...t))},null,40,P))),256))]),l("div",w,[(a(!0),r(m,null,c(n(g),s=>(a(),r("img",{class:"img img-axonometry",src:n(d)("axonometries",s),onClick:o[2]||(o[2]=(...t)=>e.zoomImg&&e.zoomImg(...t)),onLoad:o[3]||(o[3]=(...t)=>e.loadingAxonometry&&e.loadingAxonometry(...t))},null,40,L))),256))]),l("div",x,[(a(!0),r(m,null,c(n(v),s=>(a(),r("img",{class:"img img-perspective",src:n(d)("perspectives-interieurs",s),onClick:o[4]||(o[4]=(...t)=>e.zoomImg&&e.zoomImg(...t)),onLoad:o[5]||(o[5]=(...t)=>e.loadingPerspectiveInterior&&e.loadingPerspectiveInterior(...t))},null,40,E))),256))]),S],2))}}),B=u(A,[["__scopeId","data-v-9740f2f0"]]);export{B as default};
