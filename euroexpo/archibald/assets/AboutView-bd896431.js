import{_ as d,o as u,c as p,p as m,a as h,b as t,d as g,e as r,w as y,T as x,F as w}from"./index-5207a2d7.js";const q="/euroexpo/archibald/assets/img-team-2d4dc67e.jpg";const V={},b=e=>(m("data-v-dbada53a"),e=e(),h(),e),I={class:"wrapper-team frameworkX frameworkY middle"},$=b(()=>t("h2",null,"Notre équipe",-1)),A=b(()=>t("div",{class:"wrapper-content-team middle"},[t("div",{class:"img-team"},[t("img",{src:q,alt:""})]),t("div",{class:"text-team"},[t("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eligendi explicabo iste mollitia qui impedit, possimus eaque repellendus architecto tempora illum. Veritatis facilis nihil perferendis reiciendis amet qui. Molestias, eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea dolore velit, perspiciatis in beatae eligendi consequuntur dolorum expedita. Laborum odio rerum officiis harum porro quia dicta qui et eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo quasi necessitatibus molestiae qui amet assumenda nesciunt nisi, est harum, non ipsa facere adipisci accusantium a ipsum, officiis maiores ullam?"),t("br"),t("q",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem et tenetur soluta voluptatibus molestiae quod officiis, obcaecati tempora totam?")])],-1)),k=[$,A];function P(e,i){return u(),p("section",I,k)}const S=d(V,[["render",P],["__scopeId","data-v-dbada53a"]]),T="/euroexpo/archibald/assets/slide1-df9e1977.webp",_="/euroexpo/archibald/assets/slide2-f4a60050.webp",n="/euroexpo/archibald/assets/slide3-6083990f.webp";const B={data(){return{p:0,lastIndex:0,itemVisible:0,bar:0}},mounted(){const{container:e}=this.$refs,i=document.querySelectorAll(".picture"),a=document.querySelector(".bar-full");this.numberItem(),this.lastIndex=i.length-this.itemVisible;let o=i.length/this.itemVisible;e.style.width=o*100+"%";for(let s=0;s<i.length;s++)i[s].style.width=100/this.itemVisible/o+"%";this.bar=i.length;const l=document.createElement("div");l.className="bar";let c=this.bar-this.itemVisible;for(let s=0;s<c;s++)a.appendChild(l.cloneNode(!0));this.buttonsDisplay()},methods:{next(){this.p<this.lastIndex?(this.p++,this.goToPicture(this.p)):this.goToPicture(this.lastIndex),this.enableTransition(),this.buttonsDisplay()},previous(){this.p>0?(this.p--,this.goToPicture(this.p)):this.goToPicture(0),this.enableTransition(),this.buttonsDisplay()},goToPicture(e){const i=document.querySelectorAll(".picture");let a=e*-100/i.length;this.translatePicture(a)},translatePicture(e){const{carousel:i}=this.$refs;i.style.transform="translate3d("+e+"%, 0, 0)"},disableTransition(){const{container:e}=this.$refs;e.style.transition="none"},enableTransition(){const{carousel:e}=this.$refs;e.style.transition="all 0.25s"},numberItem(){const e=window.matchMedia("(max-width: 1080px)"),i=window.matchMedia("(max-width: 1920px)");return e.matches?this.itemVisible=1:i.matches?this.itemVisible=2:this.itemVisible=3},buttonsDisplay(){const{buttonRight:e,buttonLeft:i}=this.$refs,a=document.querySelectorAll(".bar");this.p===this.lastIndex?this.styleButtonHidden(e):this.styleButtonVisisble(e),this.p===0?this.styleButtonHidden(i):this.styleButtonVisisble(i),a.forEach((o,l)=>{this.p===l?o.style.backgroundColor="var(--gray)":o.style.backgroundColor=""})},styleButtonHidden(e){e.style.opacity="0",e.style.visibility="hidden"},styleButtonVisisble(e){e.style.opacity="1",e.style.visibility="visible"}}},v=e=>(m("data-v-cc6c390e"),e=e(),h(),e),L={class:"wrapper-picture-slide frameworkY"},C=v(()=>t("h3",{class:"title-slide"},"ARCHIBALD en images..",-1)),D={class:"wrapper-slide",ref:"container"},H={class:"carousel",ref:"carousel"},N=g('<div class="picture" data-v-cc6c390e><img src="'+T+'" alt="Photo de l&#39;agence 1" data-v-cc6c390e></div><div class="picture" data-v-cc6c390e><img src="'+_+'" alt="Photo de l&#39;agence 2" data-v-cc6c390e></div><div class="picture" data-v-cc6c390e><img src="'+n+'" alt="Photo de l&#39;agence 3" data-v-cc6c390e></div><div class="picture" data-v-cc6c390e><img src="'+n+'" alt="Photo de l&#39;agence 4" data-v-cc6c390e></div><div class="picture" data-v-cc6c390e><img src="'+n+'" alt="Photo de l&#39;agence 5" data-v-cc6c390e></div><div class="picture" data-v-cc6c390e><img src="'+_+'" alt="Photo de l&#39;agence 6" data-v-cc6c390e></div>',6),R=[N],E=v(()=>t("div",{class:"bar-full"},[t("div",{class:"bar"})],-1));function F(e,i,a,o,l,c){return u(),p("div",L,[C,t("div",{ref:"buttonRight",class:"slide-button-right",onClick:i[0]||(i[0]=(...s)=>c.next&&c.next(...s))},null,512),t("div",{ref:"buttonLeft",class:"slide-button-left",onClick:i[1]||(i[1]=(...s)=>c.previous&&c.previous(...s))},null,512),t("div",D,[t("div",H,R,512)],512),E])}const M=d(B,[["render",F],["__scopeId","data-v-cc6c390e"]]);const f=e=>(m("data-v-5098d54c"),e=e(),h(),e),Q=f(()=>t("section",{class:"wrapper-about-view frameworkY middle"},[t("div",{class:"about-content frameworkX"},[t("h1",{class:"title-about space-header"},"Qui sommes-nous ?"),t("div",{class:"about-description middle"},[t("h3",null,"ARCHIBALD en quelques mots.."),t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita at necessitatibus soluta laboriosam sequi repellendus modi consequatur voluptatem nemo, esse, deleniti explicabo ratione facilis recusandae fugit officiis eum excepturi odit porro obcaecati. Fugit, quo veniam? Rem suscipit reiciendis tenetur. Earum aspernatur nam molestiae optio hic recusandae nesciunt soluta odio."),t("br"),t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita at necessitatibus soluta laboriosam sequi repellendus modi consequatur voluptatem nemo, esse, deleniti explicabo ratione facilis recusandae fugit officiis eum excepturi odit porro obcaecati. Fugit, quo veniam? Rem suscipit aspernatur odio.")])]),t("div",{class:"about-background"})],-1)),X=f(()=>t("hr",{class:"line frameworkX"},null,-1)),Y={__name:"AboutView",setup(e){return(i,a)=>(u(),p(w,null,[r(x,{name:"transition-page",appear:""},{default:y(()=>[Q]),_:1}),X,r(M),r(S)],64))}},j=d(Y,[["__scopeId","data-v-5098d54c"]]);export{j as default};
