import{_ as g,c as r,b as l,F as n,r as m,g as p,o as a,u as c,p as u,a as v,d}from"./index-akOvEY_-.js";const h=t=>(u("data-v-f6d23859"),t=t(),v(),t),y={id:"overlay-container"},_={class:"wrapper-perspective exterior global-padding"},z=["src"],f={class:"wrapper-axonometry global-padding"},I=["src"],w={class:"wrapper-perspective global-padding"},b=["src"],S=h(()=>l("div",{id:"overlay"},null,-1)),L={mixins:[p],data(){return{zoomSwitch:!1}},methods:{zoom(t){const e=document.querySelectorAll(".img"),o=t.currentTarget.src;for(let s=0;s<e.length;s++){const i=e[s].src;o==i&&this.zoomSwitch?e[s].classList.add("zoom-in","fix"):e[s].classList.remove("zoom-in","fix")}},zoomImg(t){const e=document.getElementById("overlay-container"),o=document.getElementById("overlay");this.zoomSwitch=!this.zoomSwitch,this.zoomSwitch?(this.zoom(t),e.classList.add("overlay-height"),o.classList.add("overlay-img"),document.body.style.overflow="hidden"):(this.zoom(t),e.classList.remove("overlay-height"),o.classList.remove("overlay-img"),document.body.style.overflow="")}}},k=Object.assign(L,{__name:"PerspectiveView",setup(t){return(e,o)=>(a(),r("section",y,[l("div",_,[(a(!0),r(n,null,m(e.perspectiveExterior,s=>(a(),r("img",{class:"img img-perspective",src:c(d)("img",s),onClick:o[0]||(o[0]=(...i)=>e.zoomImg&&e.zoomImg(...i))},null,8,z))),256))]),l("div",f,[(a(!0),r(n,null,m(e.axonometry,s=>(a(),r("img",{class:"img img-axonometry",src:c(d)("img",s),onClick:o[1]||(o[1]=(...i)=>e.zoomImg&&e.zoomImg(...i))},null,8,I))),256))]),l("div",w,[(a(!0),r(n,null,m(e.perspectiveInterior,s=>(a(),r("img",{class:"img img-perspective",src:c(d)("img",s),onClick:o[2]||(o[2]=(...i)=>e.zoomImg&&e.zoomImg(...i))},null,8,b))),256))]),S]))}}),E=g(k,[["__scopeId","data-v-f6d23859"]]);export{E as default};
