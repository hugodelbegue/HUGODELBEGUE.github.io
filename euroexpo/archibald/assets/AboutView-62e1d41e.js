import{_ as d,o as u,c as p,a as b,b as t,p as h,d as f,e as l,w as v,T as g,F as y}from"./index-ffa36769.js";const x="/euroexpo/archibald/assets/img-team-2d4dc67e.jpg";const q={},w={class:"wrapper-team frameworkX frameworkY middle"},V=b('<h2 class="title-team" data-v-5f15bc28>Notre équipe</h2><p class="description-team" data-v-5f15bc28>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quasi ratione sapiente quaerat nemo provident.</p><div class="wrapper-content-team middle" data-v-5f15bc28><div class="img-team" data-v-5f15bc28><img src="'+x+'" alt="" data-v-5f15bc28></div><div class="text-team" data-v-5f15bc28><p data-v-5f15bc28>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eligendi explicabo iste mollitia qui impedit, possimus eaque repellendus architecto tempora illum. Veritatis facilis nihil perferendis reiciendis amet qui. Molestias, eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea dolore velit, perspiciatis in beatae eligendi consequuntur dolorum expedita. Laborum odio rerum officiis harum porro quia dicta qui et eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo quasi necessitatibus molestiae qui amet assumenda nesciunt nisi, est harum, non ipsa facere adipisci accusantium a ipsum, officiis maiores ullam?</p><br data-v-5f15bc28><q data-v-5f15bc28>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem et tenetur soluta voluptatibus molestiae quod officiis, obcaecati tempora totam?</q></div></div>',3),I=[V];function $(e,i){return u(),p("section",w,I)}const A=d(q,[["render",$],["__scopeId","data-v-5f15bc28"]]),L="/euroexpo/archibald/assets/slide1-df9e1977.webp",m="/euroexpo/archibald/assets/slide2-f4a60050.webp",n="/euroexpo/archibald/assets/slide3-6083990f.webp";const P={data(){return{p:0,lastIndex:0,itemVisible:0,bar:0}},mounted(){const{container:e}=this.$refs,i=document.querySelectorAll(".picture"),a=document.querySelector(".bar-full");this.numberItem(),this.lastIndex=i.length-this.itemVisible;let o=i.length/this.itemVisible;e.style.width=o*100+"%";for(let s=0;s<i.length;s++)i[s].style.width=100/this.itemVisible/o+"%";this.bar=i.length;const r=document.createElement("div");r.className="bar";let c=this.bar-this.itemVisible;for(let s=0;s<c;s++)a.appendChild(r.cloneNode(!0));this.buttonsDisplay()},methods:{next(){this.p<this.lastIndex?(this.p++,this.goToPicture(this.p)):this.goToPicture(this.lastIndex),this.enableTransition(),this.buttonsDisplay()},previous(){this.p>0?(this.p--,this.goToPicture(this.p)):this.goToPicture(0),this.enableTransition(),this.buttonsDisplay()},goToPicture(e){const i=document.querySelectorAll(".picture");let a=e*-100/i.length;this.translatePicture(a)},translatePicture(e){const{carousel:i}=this.$refs;i.style.transform="translate3d("+e+"%, 0, 0)"},disableTransition(){const{container:e}=this.$refs;e.style.transition="none"},enableTransition(){const{carousel:e}=this.$refs;e.style.transition="all 0.25s"},numberItem(){const e=window.matchMedia("(max-width: 1080px)"),i=window.matchMedia("(max-width: 1920px)");return e.matches?this.itemVisible=1:i.matches?this.itemVisible=2:this.itemVisible=3},buttonsDisplay(){const{buttonRight:e,buttonLeft:i}=this.$refs,a=document.querySelectorAll(".bar");this.p===this.lastIndex?this.styleButtonHidden(e):this.styleButtonVisisble(e),this.p===0?this.styleButtonHidden(i):this.styleButtonVisisble(i),a.forEach((o,r)=>{this.p===r?o.style.backgroundColor="var(--gray)":o.style.backgroundColor=""})},styleButtonHidden(e){e.style.opacity="0",e.style.visibility="hidden"},styleButtonVisisble(e){e.style.opacity="1",e.style.visibility="visible"}}},_=e=>(h("data-v-0b46bfe8"),e=e(),f(),e),T={class:"wrapper-picture-slide frameworkY"},k=_(()=>t("h3",{class:"title-slide"},"ARCHIBALD en images..",-1)),S={class:"wrapper-slide",ref:"container"},B={class:"carousel",ref:"carousel"},C=b('<div class="picture" data-v-0b46bfe8><img src="'+L+'" alt="Photo de l&#39;agence 1" data-v-0b46bfe8></div><div class="picture" data-v-0b46bfe8><img src="'+m+'" alt="Photo de l&#39;agence 2" data-v-0b46bfe8></div><div class="picture" data-v-0b46bfe8><img src="'+n+'" alt="Photo de l&#39;agence 3" data-v-0b46bfe8></div><div class="picture" data-v-0b46bfe8><img src="'+n+'" alt="Photo de l&#39;agence 4" data-v-0b46bfe8></div><div class="picture" data-v-0b46bfe8><img src="'+n+'" alt="Photo de l&#39;agence 5" data-v-0b46bfe8></div><div class="picture" data-v-0b46bfe8><img src="'+m+'" alt="Photo de l&#39;agence 6" data-v-0b46bfe8></div>',6),N=[C],D=_(()=>t("div",{class:"bar-full"},[t("div",{class:"bar"})],-1));function R(e,i,a,o,r,c){return u(),p("div",T,[k,t("div",{ref:"buttonRight",class:"slide-button-right",onClick:i[0]||(i[0]=(...s)=>c.next&&c.next(...s))},null,512),t("div",{ref:"buttonLeft",class:"slide-button-left",onClick:i[1]||(i[1]=(...s)=>c.previous&&c.previous(...s))},null,512),t("div",S,[t("div",B,N,512)],512),D])}const F=d(P,[["render",R],["__scopeId","data-v-0b46bfe8"]]);const H=e=>(h("data-v-66db1525"),e=e(),f(),e),E=H(()=>t("section",{class:"wrapper-about-view frameworkY middle"},[t("div",{class:"about-content frameworkX"},[t("div",{class:"about-description middle"},[t("h1",{class:"title-about"},"Qui sommes-nous ?"),t("h3",{class:"subtitle-about"},"Archibald en quelques mots.."),t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita at necessitatibus soluta laboriosam sequi repellendus modi consequatur voluptatem nemo, esse, deleniti explicabo ratione facilis recusandae fugit officiis eum excepturi odit porro obcaecati. Fugit, quo veniam? Rem suscipit reiciendis tenetur. Earum aspernatur nam molestiae optio hic recusandae nesciunt soluta odio."),t("br"),t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita at necessitatibus soluta laboriosam sequi repellendus modi consequatur voluptatem nemo, esse, deleniti explicabo ratione facilis recusandae fugit officiis eum excepturi odit porro obcaecati. Fugit, quo veniam? Rem suscipit aspernatur odio."),t("br"),t("br"),t("h3",{class:"subtitle-about"},"Notre style"),t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita at necessitatibus soluta laboriosam sequi repellendus modi consequatur voluptatem nemo, esse, deleniti explicabo ratione facilis recusandae fugit officiis eum excepturi odit porro obcaecati. Fugit, quo veniam? Rem suscipit aspernatur odio."),t("br"),t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita at necessitatibus soluta laboriosam sequi repellendus modi consequatur voluptatem nemo, esse, deleniti explicabo ratione.")])]),t("div",{class:"about-background"})],-1)),O={__name:"AboutView",setup(e){return(i,a)=>(u(),p(y,null,[l(g,{name:"transition-page",appear:""},{default:v(()=>[E]),_:1}),l(F),l(A)],64))}},Q=d(O,[["__scopeId","data-v-66db1525"]]);export{Q as default};
