import{T as g}from"./data-b41fee68.js";import{_ as h,r as d,o as n,c,a as o,F as b,b as y,u as v,n as r,t as _,d as p,p as f,e as j,f as k}from"./index-3f50a9a4.js";const w="/space-tourism-website-main/assets/background-technology-desktop-457659c3.jpg",S="/space-tourism-website-main/assets/background-technology-mobile-b1fdb61f.jpg",L="/space-tourism-website-main/assets/background-technology-tablet-cbc2b315.jpg",T="/space-tourism-website-main/assets/image-launch-vehicle-landscape-8d65dd76.jpg",C="/space-tourism-website-main/assets/image-launch-vehicle-portrait-7165cee7.jpg",$="/space-tourism-website-main/assets/image-space-capsule-landscape-2e8d59ba.jpg",I="/space-tourism-website-main/assets/image-space-capsule-portrait-c67ebf87.jpg",N="/space-tourism-website-main/assets/image-spaceport-landscape-fecb4811.jpg",U="/space-tourism-website-main/assets/image-spaceport-portrait-6467d1ec.jpg";const u=a=>(f("data-v-ed748e7c"),a=a(),j(),a),B={class:"technology"},O={class:"technologie_layout"},V=u(()=>o("h5",null,[o("span",null,"03"),k("Space launch 101")],-1)),Y={class:"content"},F={key:0,class:"technology_container"},z={class:"description_container"},D={class:"number_choice"},E={key:0,class:"description offsetYbottom"},R=u(()=>o("h5",null,"The terminology...",-1)),q=["src","alt"],A=["src","alt"],G={data(){return{name:"Launch vehicle",imgUrl(a){return new URL(Object.assign({"../assets/img/technology/background-technology-desktop.jpg":w,"../assets/img/technology/background-technology-mobile.jpg":S,"../assets/img/technology/background-technology-tablet.jpg":L,"../assets/img/technology/image-launch-vehicle-landscape.jpg":T,"../assets/img/technology/image-launch-vehicle-portrait.jpg":C,"../assets/img/technology/image-space-capsule-landscape.jpg":$,"../assets/img/technology/image-space-capsule-portrait.jpg":I,"../assets/img/technology/image-spaceport-landscape.jpg":N,"../assets/img/technology/image-spaceport-portrait.jpg":U})[`../assets/img/technology/${a}`],self.location).href}}},methods:{underline(a){const i=g.technology,s=i.map(e=>e.name).indexOf(a);if(s>=0){const e=i[s].name;return this.name=e,e}return null}},computed:{vehicle(){return{focus:this.name=="Launch vehicle"}},spaceport(){return{focus:this.name=="Spaceport"}},capsule(){return{focus:this.name=="Space capsule"}}}},H=Object.assign(G,{__name:"Technology",setup(a){const i=d("Launch vehicle");function l(s){for(const e of g.technology)if(s===e.name){i.value=e.name;break}}return(s,e)=>(n(),c("div",B,[o("div",O,[V,(n(!0),c(b,null,y(v(g).technology,t=>(n(),c("div",Y,[t.name==i.value?(n(),c("div",F,[o("div",z,[o("div",D,[o("span",{onClick:e[0]||(e[0]=m=>(l("Launch vehicle"),s.underline("Launch vehicle"))),class:r(s.vehicle)},"1",2),o("span",{onClick:e[1]||(e[1]=m=>(l("Spaceport"),s.underline("Spaceport"))),class:r(s.spaceport)},"2",2),o("span",{onClick:e[2]||(e[2]=m=>(l("Space capsule"),s.underline("Space capsule"))),class:r(s.capsule)},"3",2)]),t.name&&t.description?(n(),c("div",E,[R,o("h3",null,_(t.name),1),o("p",null,_(t.description),1)])):p("",!0)]),t.images.portrait?(n(),c("img",{key:0,class:"offsetYtop portrait",src:s.imgUrl(t.images.portrait),alt:t.name+" technology image"},null,8,q)):p("",!0),t.images.landscape?(n(),c("img",{key:1,class:"offsetYtop landscape",src:s.imgUrl(t.images.landscape),alt:t.name+" technology image"},null,8,A)):p("",!0)])):p("",!0)]))),256))])]))}}),M=h(H,[["__scopeId","data-v-ed748e7c"]]);export{M as default};
