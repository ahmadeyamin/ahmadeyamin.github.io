(function(e){function t(t){for(var s,a,l=t[0],o=t[1],r=t[2],h=0,b=[];h<l.length;h++)a=l[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);g&&g(t);while(b.length)b.shift()();return n.push.apply(n,r||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],s=!0,a=1;a<c.length;a++){var l=c[a];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=c[0]))}return e}var s={},a={app:0},i={app:0},n=[];function l(e){return o.p+"js/"+({blog:"blog"}[e]||e)+"."+{blog:"c9c9dcc9"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var c=s[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.e=function(e){var t=[],c={blog:1};a[e]?t.push(a[e]):0!==a[e]&&c[e]&&t.push(a[e]=new Promise((function(t,c){for(var s="css/"+({blog:"blog"}[e]||e)+"."+{blog:"6543776e"}[e]+".css",i=o.p+s,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var r=n[l],h=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(h===s||h===i))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){r=b[l],h=r.getAttribute("data-href");if(h===s||h===i)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var s=t&&t.target&&t.target.src||i,n=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete a[e],g.parentNode.removeChild(g),c(n)},g.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(g)})).then((function(){a[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,c){s=i[e]=[t,c]}));t.push(s[2]=n);var r,h=document.createElement("script");h.charset="utf-8",h.timeout=120,o.nc&&h.setAttribute("nonce",o.nc),h.src=l(e);var b=new Error;r=function(t){h.onerror=h.onload=null,clearTimeout(g);var c=i[e];if(0!==c){if(c){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",b.name="ChunkLoadError",b.type=s,b.request=a,c[1](b)}i[e]=void 0}};var g=setTimeout((function(){r({type:"timeout",target:h})}),12e4);h.onerror=h.onload=r,document.head.appendChild(h)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(c,s,function(t){return e[t]}.bind(null,s));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],h=r.push.bind(r);r.push=t,r=r.slice();for(var b=0;b<r.length;b++)t(r[b]);var g=h;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0489":function(e,t,c){e.exports=c.p+"img/php.87ef8a75.svg"},1306:function(e,t,c){e.exports=c.p+"img/PgSQL.9474528e.svg"},1538:function(e,t,c){e.exports=c.p+"img/twitter.ee772aeb.svg"},"22ee":function(e,t,c){e.exports=c.p+"img/search.2da959c5.svg"},"29a1":function(e,t,c){e.exports=c.p+"img/webpack.07b563f1.svg"},3871:function(e,t,c){e.exports=c.p+"img/dribbble.7b4d9384.svg"},"3aa5":function(e,t,c){e.exports=c.p+"img/telephone.0a97f4f7.svg"},"401b":function(e,t,c){e.exports=c.p+"img/vscode.73f294d7.svg"},"44c3":function(e,t,c){e.exports=c.p+"img/Businessman-Transparent.11164ec2.png"},"4fc3":function(e,t,c){e.exports=c.p+"img/vue.72e92b7f.svg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var s=c("7a23"),a=c("bc3a"),i=c.n(a),n={"data-collapse":"medium",role:"banner",class:"navbar w-nav"},l={class:"container nav w-container"},o={class:"logo-text"},r={key:0,role:"navigation",class:"navmenu w-nav-menu"},h={class:"nav-group"},b=Object(s["h"])("a",{href:"#portfolio",class:"nav-link transition w-nav-link"},"Portfolio",-1),g=Object(s["h"])("a",{href:"#",class:"nav-link transition w-nav-link"},"About",-1),d=Object(s["h"])("a",{href:"#",class:"nav-link transition w-nav-link"},"Contact",-1),j=Object(s["h"])("div",{class:"link-group"},[Object(s["h"])("a",{href:"#",class:"nav-link extra transition w-nav-link"},"Let's Talk"),Object(s["h"])("a",{href:"https://github.com/ahmadeyamin",target:"_blank",class:"nav-link btns icon transition w-nav-link"}),Object(s["h"])("a",{href:"https://facebook.com/ahmadeyamin",target:"_blank",class:"nav-link btns icon transition fb w-nav-link"})],-1),m=Object(s["h"])("div",{class:"w-icon-nav-menu"},null,-1),O=Object(s["h"])("footer",{id:"footer",class:"footer"},[Object(s["h"])("div",{class:"footer_main container w-container"},[Object(s["h"])("div",{class:"footer_flex_boxes"},[Object(s["h"])("div",null,[Object(s["h"])("h2",{class:"footer_hading"},[Object(s["g"])(" Lat's make something amazing "),Object(s["h"])("br"),Object(s["g"])("together. "),Object(s["h"])("br"),Object(s["h"])("br"),Object(s["g"])("Start By "),Object(s["h"])("a",{href:"https://wa.me/+8801999050360",target:"_blank",class:"say_hello"},"Saying Hi")])]),Object(s["h"])("div",null,[Object(s["h"])("h2",{class:"footer_hading"},"Links"),Object(s["h"])("ul",{role:"list",class:"w-list-unstyled"},[Object(s["h"])("li",null,[Object(s["h"])("a",{href:"#",class:"footer_link"},"Blog")]),Object(s["h"])("li",null,[Object(s["h"])("a",{href:"#",class:"footer_link"},"Contact Us")]),Object(s["h"])("li",null,[Object(s["h"])("a",{href:"#",class:"footer_link"},"Team Info")])])])]),Object(s["h"])("div",{class:"footer_c_text"},"Copyright © 2020. All rights reserved.")])],-1);function p(e,t,c,a,i,p){var f=Object(s["v"])("router-link"),u=Object(s["v"])("router-view");return Object(s["q"])(),Object(s["e"])(s["a"],null,[Object(s["h"])("header",n,[Object(s["h"])("div",l,[Object(s["h"])(f,{to:"/","aria-current":"page",class:"logo w-nav-brand w--current"},{default:Object(s["B"])((function(){return[Object(s["h"])("div",o,"Eyamin "+Object(s["x"])(e.size.width),1)]})),_:1}),Object(s["h"])(s["b"],{name:"slide"},{default:Object(s["B"])((function(){return[e.NavOpen?(Object(s["q"])(),Object(s["e"])("nav",r,[Object(s["h"])("a",{href:"#",onClick:t[1]||(t[1]=Object(s["C"])((function(){return p.toggleMenu.apply(p,arguments)}),["prevent"])),class:["crossBtn",{active:p.toggleMenu}]},"X",2),Object(s["h"])("div",h,[b,Object(s["h"])(f,{to:"/blog",class:"nav-link transition w-nav-link"},{default:Object(s["B"])((function(){return[Object(s["h"])("span",{onClick:t[2]||(t[2]=function(){return p.toggleMenu.apply(p,arguments)})},"Blog")]})),_:1}),g,d]),j])):Object(s["f"])("",!0)]})),_:1}),Object(s["h"])("div",{class:"menu-button w-nav-button",onClick:t[3]||(t[3]=Object(s["C"])((function(){return p.toggleMenu.apply(p,arguments)}),["prevent"]))},[m])])]),Object(s["h"])(u),O],64)}var f={data:function(){return{NavOpen:!1,size:{width:null}}},mounted:function(){this.resizeNav(),this.toggleMenu(),window.addEventListener("resize",this.resizeNav)},methods:{toggleMenu:function(){this.size.width<992&&(this.NavOpen=!this.NavOpen)},resizeNav:function(){this.size.width=window.innerWidth,this.size.width>992&&(this.NavOpen=!0)}}};f.render=p;var u=f,v=(c("d3b7"),c("6c02")),_=c("aeeb"),A=c.n(_),w=c("4fc3"),y=c.n(w),x=c("68b1"),k=c.n(x),E=c("87a0"),B=c.n(E),S=c("b392"),M=c.n(S),z=c("917e"),C=c.n(z),I=c("82db"),P=c.n(I),L=c("1538"),Q=c.n(L),D=c("44c3"),U=c.n(D),q=c("3aa5"),F=c.n(q),N=c("3871"),W=c.n(N),R=c("e8a9"),G=c.n(R),H=c("e69d"),K=c.n(H),T=c("8e27"),Y=c.n(T),V=c("d132"),J=c.n(V),X=c("a6aa"),Z=c.n(X),$=c("e08e"),ee=c.n($),te=c("92b0"),ce=c.n(te),se=c("5a4c"),ae=c.n(se),ie=c("5fcb"),ne=c.n(ie),le=c("e7f4"),oe=c.n(le),re=c("bac3"),he=c.n(re),be=c("5cfe"),ge=c.n(be),de=Object(s["h"])("div",{class:"hero-section"},[Object(s["h"])("div",{class:"effects"},[Object(s["h"])("div",{class:"effact one"},[Object(s["h"])("img",{src:A.a,loading:"lazy",alt:"",class:"effect-img"})]),Object(s["h"])("div",{class:"effact tow"},[Object(s["h"])("img",{src:y.a,loading:"lazy",alt:"",class:"effect-img"})]),Object(s["h"])("div",{class:"effact three"},[Object(s["h"])("img",{src:k.a,loading:"lazy",alt:"",class:"effect-img"})]),Object(s["h"])("div",{class:"effact four"},[Object(s["h"])("img",{src:B.a,loading:"lazy",alt:"",class:"effect-img"})]),Object(s["h"])("div",{class:"effact five"},[Object(s["h"])("img",{src:M.a,loading:"lazy",alt:"",class:"effect-img"})])]),Object(s["h"])("div",{class:"container hero w-container"},[Object(s["h"])("div",{class:"hero-section--inner"},[Object(s["h"])("h3",{class:"hero--heading"},[Object(s["g"])(" Hello I'm Ahmad "),Object(s["h"])("span",{class:"text-span"},"Eyamin")]),Object(s["h"])("h1",{class:"hero--title"},"Young Web Programmer 👌"),Object(s["h"])("h3",{class:"hero--base"},[Object(s["g"])(" Freelance "),Object(s["h"])("span",{class:"text-span-2"},"Web Designer/Developer"),Object(s["g"])(" & Love to make Friends ✨ ")]),Object(s["h"])("div",{class:"hero--links"},[Object(s["h"])("a",{href:"http://github.com/ahmadeyamin",target:"_blank",class:"hero--link w-inline-block"},[Object(s["h"])("img",{src:C.a,loading:"lazy",alt:"",class:"hero--link-image"})]),Object(s["h"])("a",{href:"http://fb.me/ahmadeyamin",target:"_blank",class:"hero--link w-inline-block"},[Object(s["h"])("img",{src:P.a,loading:"lazy",width:"40",sizes:"45px",alt:"",class:"hero--link-image"})]),Object(s["h"])("a",{href:"http://twitter.com/ahmadeyamin",target:"_blank",class:"hero--link w-inline-block"},[Object(s["h"])("img",{src:Q.a,loading:"lazy",alt:"",class:"hero--link-image"})])])]),Object(s["h"])("div",{class:"hero--my-image"},[Object(s["h"])("div",{class:"hero_image-src"},[Object(s["h"])("img",{src:U.a,loading:"lazy",alt:"Ahmad Eyamin",class:"hero-image"})]),Object(s["h"])("div",{class:"hero--hireme-section"},[Object(s["h"])("div",{class:"hero--hireme-content"},[Object(s["h"])("a",{href:"https://fiverr.com/itechut",target:"_blank",class:"hireme--link-item text w-inline-block"},[Object(s["h"])("div",{class:"hireme--link-text"},"Hire Me")]),Object(s["h"])("a",{href:"tel:+8801999050360",class:"hireme--link-item transition w-inline-block"},[Object(s["h"])("img",{src:F.a,loading:"lazy",alt:"",class:"image"})]),Object(s["h"])("a",{href:"https://dribbble.com/ahmadeyamin",target:"_blank",class:"hireme--link-item transition w-inline-block"},[Object(s["h"])("img",{src:W.a,loading:"lazy",alt:"",class:"image"})]),Object(s["h"])("a",{href:"https://wa.me/+8801999050360",target:"_blank",class:"hireme--link-item transition w-inline-block"},[Object(s["h"])("img",{src:G.a,loading:"lazy",alt:"",class:"image"})])])]),Object(s["h"])("div",{class:"hero-exp"},[Object(s["h"])("div",{class:"hero-exp--inner"},[Object(s["h"])("h1",{class:"hero-exp-y"},"4"),Object(s["h"])("p",{class:"heros-exp--text"},"Years of experience")])])])])],-1),je=Object(s["h"])("div",{class:"section-2"},[Object(s["h"])("div",{class:"sec-2--inner container w-container"},[Object(s["h"])("div",{class:"sec-2--content"},[Object(s["h"])("div",{class:"sec_2--c-item"},[Object(s["h"])("div",{class:"sec_2--left"},[Object(s["h"])("div",{class:"sec_2-left-item transition"},[Object(s["h"])("div",{class:"sec_2-ll-inner-left"},[Object(s["h"])("h2",{class:"sec_2--left-title"},"Design"),Object(s["h"])("p",{class:"sec_2--left-text"},"Design website with unique idea and grow user engagements"),Object(s["h"])("a",{href:"#",class:"sec_2--left-link"},"20+ Projects")]),Object(s["h"])("div",{class:"sec_2-ll-inner-right"},[Object(s["h"])("img",{src:K.a,loading:"lazy",alt:"",class:"sec_2-left-icon"})])]),Object(s["h"])("div",{class:"sec_2-left-item transition"},[Object(s["h"])("div",{class:"sec_2-ll-inner-left"},[Object(s["h"])("h2",{class:"sec_2--left-title"},"Front-End 😍"),Object(s["h"])("p",{class:"sec_2--left-text"},"I develop front-end with coding supper smooth"),Object(s["h"])("a",{href:"#",class:"sec_2--left-link"},"40+ Projects")]),Object(s["h"])("div",{class:"sec_2-ll-inner-right"},[Object(s["h"])("img",{src:Y.a,loading:"lazy",alt:"",class:"sec_2-left-icon"})])]),Object(s["h"])("div",{class:"sec_2-left-item transition"},[Object(s["h"])("div",{class:"sec_2-ll-inner-left"},[Object(s["h"])("h2",{class:"sec_2--left-title"},"Development"),Object(s["h"])("p",{class:"sec_2--left-text"},"Make front end alive with programming"),Object(s["h"])("a",{href:"#",class:"sec_2--left-link"},"15+ Projects")]),Object(s["h"])("div",{class:"sec_2-ll-inner-right"},[Object(s["h"])("img",{src:J.a,loading:"lazy",alt:"",class:"sec_2-left-icon"})])]),Object(s["h"])("div",{class:"sec_2-left-item transition"},[Object(s["h"])("div",{class:"sec_2-ll-inner-left"},[Object(s["h"])("h2",{class:"sec_2--left-title"},"SEO"),Object(s["h"])("p",{class:"sec_2--left-text"},"Boost product with online SEO Marketing and optimization"),Object(s["h"])("a",{href:"#",class:"sec_2--left-link"},"5+ Projects")]),Object(s["h"])("div",{class:"sec_2-ll-inner-right"},[Object(s["h"])("img",{src:Z.a,loading:"lazy",alt:"",class:"sec_2-left-icon"})])])])]),Object(s["h"])("div",{class:"sec_2--c-item"},[Object(s["h"])("div",{class:"sec_2--c-right-inner"},[Object(s["h"])("h4",{class:"sec_2--right-heading"},"Introduce"),Object(s["h"])("h2",{class:"sec_2-right-title"},"I'm Ahmad Eyamin 🙌"),Object(s["h"])("h3",{class:"sec_2-right-sub"},"Every Great idea comes with a Better story."),Object(s["h"])("p",{class:"sec_2-right-p"},[Object(s["g"])(" Since beginning my journey as a freelance designer/developer over 3 years. I have done some remote work for Business, Startup, Company and lot's of local client in my smell journey. "),Object(s["h"])("br"),Object(s["g"])("‍ "),Object(s["h"])("br"),Object(s["g"])("I'm quality confident, naturally curious, and working on improving my Skill for design/development. "),Object(s["h"])("br"),Object(s["h"])("br"),Object(s["h"])("br"),Object(s["g"])("Experience in: "),Object(s["h"])("br"),Object(s["h"])("strong"),Object(s["h"])("span",{class:"exp-item-p"}," - Web Design "),Object(s["h"])("br"),Object(s["h"])("span",{class:"exp-item-p"},"- Web Development"),Object(s["h"])("br"),Object(s["h"])("span",{class:"exp-item-p"}," - WordPress "),Object(s["h"])("br"),Object(s["h"])("span",{class:"exp-item-p"},"- SEO"),Object(s["h"])("br"),Object(s["h"])("span",{class:"exp-item-p"}," - Social Media Marketing (Basic) "),Object(s["h"])("br")])])])])])],-1),me={class:"section-3"},Oe={class:"sec-3--inner container w-container"},pe=Object(s["h"])("h1",{class:"sec-2_title"},"Tool I Use ❤",-1),fe=Object(s["h"])("div",{id:"portfolio",class:"section-4"},[Object(s["h"])("div",{class:"sec-4 container w-container"},[Object(s["h"])("div",{class:"sec-4-inner"},[Object(s["h"])("div",{class:"sec_4--item"},[Object(s["h"])("div",{class:"sec_4--item-inner"},[Object(s["h"])("h1",{class:"sec-4__title"},"Portfolio")])]),Object(s["h"])("div",{class:"sec_4--item"},[Object(s["h"])("div",{class:"sec_4--item-inner"},[Object(s["h"])("img",{src:"images\\photo-of-designer-creating-a-website.jpeg",loading:"lazy",alt:"",class:"portfolio-img transition"}),Object(s["h"])("div",{class:"portfolio-box-content"},[Object(s["h"])("h1",{class:"portfolio-box-title"},"Heading"),Object(s["h"])("p",{class:"portfolio-box-text"},"Web For All"),Object(s["h"])("a",{href:"#",class:"see-more-btn"},"View Work")])])]),Object(s["h"])("div",{class:"sec_4--item"},[Object(s["h"])("div",{class:"sec_4--item-inner"},[Object(s["h"])("img",{src:ee.a,loading:"lazy",alt:"",class:"portfolio-img transition"}),Object(s["h"])("div",{class:"portfolio-box-content"},[Object(s["h"])("h1",{class:"portfolio-box-title"},"Maria Work"),Object(s["h"])("p",{class:"portfolio-box-text"},"Web For All"),Object(s["h"])("a",{href:"#",class:"see-more-btn"},"View Work")])])]),Object(s["h"])("div",{class:"sec_4--item"},[Object(s["h"])("div",{class:"sec_4--item-inner"},[Object(s["h"])("img",{src:ce.a,loading:"lazy",alt:"",class:"portfolio-img transition"}),Object(s["h"])("div",{class:"portfolio-box-content"},[Object(s["h"])("h1",{class:"portfolio-box-title"},"Art Work"),Object(s["h"])("p",{class:"portfolio-box-text"},"Web For All"),Object(s["h"])("a",{href:"#",class:"see-more-btn"},"View Work")])])]),Object(s["h"])("div",{class:"sec_4--item"},[Object(s["h"])("div",{class:"sec_4--item-inner"},[Object(s["h"])("img",{src:ae.a,loading:"lazy",alt:"",class:"portfolio-img transition"}),Object(s["h"])("div",{class:"portfolio-box-content"},[Object(s["h"])("h1",{class:"portfolio-box-title"},"Personal Pro"),Object(s["h"])("p",{class:"portfolio-box-text"},"Web For All"),Object(s["h"])("a",{href:"#",class:"see-more-btn"},"View Work")])])]),Object(s["h"])("div",{class:"sec_4--item"},[Object(s["h"])("a",{href:"#",class:"sec_4--item-inner w-inline-block"},[Object(s["h"])("h1",{class:"sec-4__title bottom"},"See More Work ...")])])])])],-1),ue=Object(s["h"])("div",{class:"section-5"},[Object(s["h"])("div",{class:"sec-5 container w-container"},[Object(s["h"])("div",{class:"sec-5_inner"},[Object(s["h"])("h1",{class:"sec-5__title"},"Testimonial"),Object(s["h"])("div",{class:"sec-5__testi_box"},[Object(s["h"])("div",{class:"sec-5__testi_box--inner"},[Object(s["h"])("div",{class:"testi_item"},[Object(s["h"])("p",{class:"testi_text"}," He did a really good job and worked quickly it was the best developer I've worked with on the site. Fantastic to work with, accommodating for changes as we worked, fast worker and a good communicator. Very happy! Great stuff. "),Object(s["h"])("p",{class:"testi_buyer_name"},[Object(s["g"])(" sanslr28 "),Object(s["h"])("span",{class:"testi_buyer-s"},"- Fiverr")])])]),Object(s["h"])("div",{class:"sec-5__testi-btns"},[Object(s["h"])("a",{href:"#",class:"testi_slide_btn"}),Object(s["h"])("a",{href:"#",class:"testi_slide_btn right"})])])])])],-1),ve=Object(s["h"])("div",{class:"section-6"},[Object(s["h"])("div",{class:"sec-6 container w-container"},[Object(s["h"])("div",{class:"sec_6--inner"},[Object(s["h"])("div",{class:"sec_6-box"},[Object(s["h"])("h1",{class:"sec_6-title"},[Object(s["g"])(" Let's Talk "),Object(s["h"])("br")]),Object(s["h"])("div",{class:"sec-6_contact_box"},[Object(s["h"])("div",{class:"sec-6_in_left"},[Object(s["h"])("div",{class:"main_cont_box"},[Object(s["h"])("h1",{class:"sec_6-box-title"},[Object(s["g"])(" Get in touch "),Object(s["h"])("br"),Object(s["g"])("‍ ")]),Object(s["h"])("div",{class:"contact_form w-form"},[Object(s["h"])("form",{id:"email-form",name:"email-form","data-name":"Email Form",class:"con_form_inner"},[Object(s["h"])("div",{class:"cont_name-sec"},[Object(s["h"])("input",{type:"text",class:"contact_box_input transition w-input",maxlength:"256",name:"f-name","data-name":"f-name",placeholder:"First Name",id:"f-name",required:""}),Object(s["h"])("input",{type:"text",class:"contact_box_input transition l-name w-input",maxlength:"256",name:"L-Name","data-name":"L Name",placeholder:"Last Name",id:"L-Name",required:""})]),Object(s["h"])("input",{type:"email",class:"contact_box_input transition w-input",maxlength:"256",name:"email","data-name":"email",placeholder:"Your Email",id:"email",required:""}),Object(s["h"])("input",{type:"text",class:"contact_box_input transition w-input",maxlength:"256",name:"subjet","data-name":"subjet",placeholder:"Subject",id:"subjet",required:""}),Object(s["h"])("textarea",{placeholder:"Your Messages",maxlength:"5000",id:"msg",name:"msg",required:"","data-name":"msg",class:"contact_box_input transition w-input"}),Object(s["h"])("input",{type:"submit",value:"Submit","data-wait":"Please wait...",class:"cont_submit w-button"})]),Object(s["h"])("div",{class:"w-form-done"},[Object(s["h"])("div",null,"Thank you! Your submission has been received!")]),Object(s["h"])("div",{class:"w-form-fail"},[Object(s["h"])("div",null,"Oops! Something went wrong while submitting the form.")])])])]),Object(s["h"])("div",{class:"sec-6_in_right"},[Object(s["h"])("div",{class:"contact_right_p"},[Object(s["h"])("a",{href:"https://goo.gl/maps/uuEcT6FA9o8soNBs8",target:"_blank",class:"contact_right_item w-inline-block"},[Object(s["h"])("h1",{class:"cont_right_title"},"Policeline, Bhola Sadar, BD"),Object(s["h"])("div",{class:"cont_right_deg"},[Object(s["h"])("img",{src:ne.a,loading:"lazy",alt:"",class:"cont_right_deg_icon"}),Object(s["h"])("p",{class:"cont_right_deg_p"},"Home Address")])]),Object(s["h"])("a",{href:"mailto:ahmadeyamin@gmail.com",class:"contact_right_item w-inline-block"},[Object(s["h"])("h1",{class:"cont_right_title"},"ahmadeyamin@gmail.com"),Object(s["h"])("div",{class:"cont_right_deg"},[Object(s["h"])("img",{src:oe.a,loading:"lazy",alt:"",class:"cont_right_deg_icon"}),Object(s["h"])("p",{class:"cont_right_deg_p"},"Email Address")])]),Object(s["h"])("a",{href:"tel:+8801999050360",class:"contact_right_item w-inline-block"},[Object(s["h"])("h1",{class:"cont_right_title"},"+8801999050360"),Object(s["h"])("div",{class:"cont_right_deg"},[Object(s["h"])("img",{src:he.a,loading:"lazy",alt:"",class:"cont_right_deg_icon"}),Object(s["h"])("p",{class:"cont_right_deg_p"},"official Phone")])])])])])])])])],-1),_e=Object(s["h"])("div",{class:"section-7"},[Object(s["h"])("div",{class:"sec-7 container w-container"},[Object(s["h"])("div",{class:"sec-7_inner"},[Object(s["h"])("h1",{class:"sec_6-title"},[Object(s["g"])(" Latest Blogs "),Object(s["h"])("br")]),Object(s["h"])("div",{class:"sec_7-box"},[Object(s["h"])("div",{class:"sec_7--item"},[Object(s["h"])("a",{href:"#",class:"sec_7--item_in w-inline-block"},[Object(s["h"])("img",{src:ce.a,loading:"lazy",alt:"",class:"sec_7--item-img"}),Object(s["h"])("div",{class:"sec_7--item_cont"},[Object(s["h"])("p",{class:"sec_7--item_date"},[Object(s["h"])("span",{class:"author_box"},"By Ahmad Eyamin"),Object(s["g"])(" • Nov 17 2020 ")]),Object(s["h"])("h1",{class:"sec_7-text"},"Let's make website cool and smart"),Object(s["h"])("p",{class:"sec_7-readmore"},"Read More ...")])])]),Object(s["h"])("div",{class:"sec_7--item"},[Object(s["h"])("a",{href:"#",class:"sec_7--item_in w-inline-block"},[Object(s["h"])("img",{src:ae.a,loading:"lazy",alt:"",class:"sec_7--item-img"}),Object(s["h"])("div",{class:"sec_7--item_cont"},[Object(s["h"])("p",{class:"sec_7--item_date"},[Object(s["h"])("span",{class:"author_box"},"By Ahmad Eyamin"),Object(s["g"])(" • Nov 17 2020 ")]),Object(s["h"])("h1",{class:"sec_7-text"},[Object(s["g"])(" value of the character Devanagari Sign High Spacing "),Object(s["h"])("strong",null,[Object(s["h"])("em",null,"Dot")]),Object(s["g"])(". Char ")]),Object(s["h"])("p",{class:"sec_7-readmore"},"Read More ...")])])]),Object(s["h"])("div",{class:"sec_7--item"},[Object(s["h"])("a",{href:"#",class:"sec_7--item_in w-inline-block"},[Object(s["h"])("img",{src:ge.a,loading:"lazy",alt:"",class:"sec_7--item-img"}),Object(s["h"])("div",{class:"sec_7--item_cont"},[Object(s["h"])("p",{class:"sec_7--item_date"},[Object(s["h"])("span",{class:"author_box"},"By Ahmad Eyamin"),Object(s["g"])(" • Nov 17 2020 ")]),Object(s["h"])("h1",{class:"sec_7-text"},[Object(s["h"])("strong",null,[Object(s["h"])("em",null,"Unicode")]),Object(s["g"])(" character name, "),Object(s["h"])("strong",null,[Object(s["h"])("em",null,"Unicode")]),Object(s["g"])(" 1.0 character name (deprecated) ")]),Object(s["h"])("p",{class:"sec_7-readmore"},"Read More ...")])])])])])])],-1);function Ae(e,t,c,a,i,n){var l=Object(s["v"])("SkillesIcons");return Object(s["q"])(),Object(s["e"])(s["a"],null,[de,je,Object(s["h"])("div",me,[Object(s["h"])("div",Oe,[pe,Object(s["h"])(l)])]),fe,ue,ve,_e],64)}var we={class:"sec-3--img_boxs"},ye={class:"brand-text"};function xe(e,t,c,a,i,n){return Object(s["q"])(),Object(s["e"])("div",we,[(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["u"])(i.icons,(function(e,t){return Object(s["q"])(),Object(s["e"])("div",{class:"sec-3-img",key:t},[Object(s["h"])("img",{src:e.src,loading:"lazy",alt:"",class:"brand-icon transition"},null,8,["src"]),Object(s["h"])("p",ye,Object(s["x"])(e.title),1)])})),128))])}var ke={data:function(){return{icons:[{title:"Google",src:c("22ee")},{title:"HTML",src:c("968c")},{title:"CSS",src:c("8e27")},{title:"JS",src:c("a35b")},{title:"VueJs",src:c("4fc3")},{title:"PHP",src:c("0489")},{title:"Laravel",src:c("aeeb")},{title:"WordPress",src:c("87a0")},{title:"VS Code",src:c("401b")},{title:"Github",src:c("917e")},{title:"Git",src:c("824b")},{title:"Linux",src:c("b392")},{title:"Tailwind",src:c("a8ed")},{title:"Bootstrap",src:c("9496")},{title:"PgSQL",src:c("1306")},{title:"Mysql",src:c("8d8b")},{title:"PgSQL",src:c("1306")},{title:"Python",src:c("68b1")},{title:"SvelteJS",src:c("c3de")},{title:"firebase",src:c("91b4")},{title:"Webpack",src:c("29a1")}]}}};c("b4a9");ke.render=xe;var Ee=ke,Be={name:"Home",components:{SkillesIcons:Ee}};Be.render=Ae;var Se=Be,Me=[{path:"/",name:"Home",component:Se},{path:"/blog",name:"Blog",component:function(){return c.e("blog").then(c.bind(null,"fd3f"))}}],ze=Object(v["a"])({history:Object(v["b"])(),routes:Me}),Ce=ze;c("99fc"),c("6672");window.axios=i.a;var Ie=Object(s["d"])(u).use(Ce);Ie.mount("#app")},"5a4c":function(e,t,c){e.exports=c.p+"img/kate-moross-website.a87a9a6d.jpeg"},"5cfe":function(e,t,c){e.exports=c.p+"img/shanti-sparrow-website.78c6912d.jpeg"},"5fcb":function(e,t,c){e.exports=c.p+"img/earth-globe.cd7d7889.svg"},6672:function(e,t,c){},"68b1":function(e,t,c){e.exports=c.p+"img/python.27a9405a.svg"},"824b":function(e,t,c){e.exports=c.p+"img/git.adcab6a5.svg"},"82db":function(e,t){e.exports="data:image/png;base64,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"},"87a0":function(e,t,c){e.exports=c.p+"img/wordpress-plain.012709ad.svg"},"8d8b":function(e,t,c){e.exports=c.p+"img/mysql.c02ade79.svg"},"8e27":function(e,t,c){e.exports=c.p+"img/css.ea657d95.svg"},"917e":function(e,t,c){e.exports=c.p+"img/github.3f5de6f6.svg"},"91b4":function(e,t,c){e.exports=c.p+"img/firebase.10b07193.svg"},"92b0":function(e,t,c){e.exports=c.p+"img/Juliette-van-Rhyn-website.911622c6.jpeg"},9496:function(e,t,c){e.exports=c.p+"img/boostrap.7321a5c4.png"},"968c":function(e,t,c){e.exports=c.p+"img/html.3db31354.svg"},"99fc":function(e,t,c){},a35b:function(e,t,c){e.exports=c.p+"img/js.de79c8f1.svg"},a6aa:function(e,t,c){e.exports=c.p+"img/graph-bar.6051e6f7.svg"},a8ed:function(e,t,c){e.exports=c.p+"img/tall.760a3ee4.svg"},aeeb:function(e,t,c){e.exports=c.p+"img/laravel.efb5ca0b.svg"},b392:function(e,t,c){e.exports=c.p+"img/linux.2bf747f0.svg"},b4a9:function(e,t,c){"use strict";c("d265")},bac3:function(e,t,c){e.exports=c.p+"img/telephone_2.1c954963.svg"},c3de:function(e,t,c){e.exports=c.p+"img/svelte.0f13c44e.svg"},d132:function(e,t,c){e.exports=c.p+"img/idea.f3cc7f29.svg"},d265:function(e,t,c){},e08e:function(e,t,c){e.exports=c.p+"img/Maria-Vazquez-website.cada2bc7.jpeg"},e69d:function(e,t,c){e.exports=c.p+"img/web-design.2d9944aa.svg"},e7f4:function(e,t,c){e.exports=c.p+"img/email-marketing.275aeee6.svg"},e8a9:function(e,t,c){e.exports=c.p+"img/whatsapp.ab73dabb.svg"}});
//# sourceMappingURL=app.091a7c2c.js.map