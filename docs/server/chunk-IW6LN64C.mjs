import './polyfills.server.mjs';
import{A as k,C as w,D as S,E,H as z,L as T,O as I,a as m,b as x,c as M,d as f,e as r,f as P,g as p,h as v,i as h,j as u,k as _,l as n,m as i,n as a,o as b,p as y,q as O,r as s,s as g,t as C}from"./chunk-GLKPHSZJ.mjs";var F=(()=>{let e=class e{constructor(){this.title="obelisk-next"}};e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[C],decls:2,vars:0,consts:[[1,"content"]],template:function(c,l){c&1&&(n(0,"div",0),a(1,"router-outlet"),i())},dependencies:[T],styles:[".content[_ngcontent-%COMP%]{width:100%;height:100vh}"]});let t=e;return t})();var j=(t,e)=>e.title,R=(t,e)=>e.name;function U(t,e){if(t&1&&(n(0,"div",9)(1,"div",5),s(2),i(),n(3,"div",13),a(4,"img",14),i(),n(5,"div",15),s(6),i()()),t&2){let o=e.$implicit;r(2),g(o.title),r(2),p("src","/assets/img/"+o.logo,f),r(2),g(o.description)}}function q(t,e){if(t&1&&(n(0,"div",9)(1,"div",5),s(2),i(),n(3,"div",13),a(4,"img",14),i(),n(5,"div",15),s(6),i()()),t&2){let o=e.$implicit;r(2),g(o.title),r(2),p("src","/assets/img/"+o.logo,f),r(2),g(o.description)}}function N(t,e){if(t&1&&(n(0,"div",18),s(1),i()),t&2){let o=O().$implicit;r(),g(o.name)}}function V(t,e){if(t&1){let o=b();n(0,"div",16),y("click",function(){let c=x(o).$implicit,l=O();return M(l.linkTo(c.link))}),n(1,"div",13),a(2,"img",17),i(),P(3,N,2,1,"div",18),i()}if(t&2){let o=e.$implicit;r(),v("padded",o.padded),r(),p("src","/assets/img/"+o.icon,f),r(),h(3,o.name?3:-1)}}var $=(()=>{let e=class e{constructor(){this.features=[{title:"Scalable",logo:"axes.svg",description:"Scalable data backend built using industry-proven technologies"},{title:"Powerful APIs",logo:"laptop-dev-mode.svg",description:"Ingest, query, stream and export large amounts of data using the efficient Obelisk HTTP-based APIs "},{title:"Security-aware",logo:"shield-check.svg",description:"Data Isolation is a first-class citizen. Authentication and authorization are implemented using open standards "},{title:"Ease of use",logo:"people-tag.svg",description:"Obelisk Ra allows users to quickly discover metadata of datasets, metrics and more"}],this.features2=[{title:"Open source",logo:"code-brackets.svg",description:"Obelisk Core is a fully open source project"},{title:"Cloud Native",logo:"cloud-check.svg",description:"Obelisk is developed as a cloud native application, easily deployable to the cloud using Helm"},{title:"Extensible",logo:"plus-square-dashed.svg",description:"Obelisk Core can be extended with 1st and 3rd party Obelisk Services"}],this.references=[{name:"GitHub",icon:"github-circle.svg",padded:!0,link:"https://github.com/idlab-discover/obelisk"},{name:null,icon:"logo_ugent_sm.png",padded:!1,link:"https://ugent.be"},{name:null,icon:"logo_idlab_sm.png",padded:!0,link:"https://idlab.technology"},{name:null,icon:"logo_imec_sm.png",padded:!0,link:"https://imec.be"}]}linkTo(d){typeof window<"u"&&window.open(d,"_blank")}};e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=m({type:e,selectors:[["app-landing"]],standalone:!0,features:[C],decls:23,vars:1,consts:[[1,"bg"],[1,"logo"],[1,"img-cont"],["width","512","height","512",3,"ngSrc"],[1,"main"],[1,"title"],[1,"subtitle"],[1,"sections"],[1,"s1"],[1,"feature"],[1,"s2"],[1,"footer"],[1,"reference"],[1,"icon"],["width","64","height","64",3,"src"],[1,"description"],[1,"reference",3,"click"],[3,"src"],[1,"name"]],template:function(c,l){c&1&&(a(0,"div",0),n(1,"div",1)(2,"div",2),a(3,"img",3),i()(),n(4,"div",4)(5,"div",5),s(6,"Obelisk"),i(),n(7,"div",6),s(8," The high performance "),a(9,"br"),s(10,"data-in/data-out"),a(11,"br"),s(12," platform "),i()(),n(13,"div",7)(14,"div",8),u(15,U,7,3,"div",9,j),i(),n(17,"div",10),u(18,q,7,3,"div",9,j),i(),n(20,"div",11),u(21,V,4,4,"div",12,R),i()()),c&2&&(r(3),p("ngSrc","/assets/img/logo_white.svg"),r(12),_(l.features),r(3),_(l.features2),r(3),_(l.references))},dependencies:[w],styles:['[_nghost-%COMP%]{color:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.bg[_ngcontent-%COMP%]{position:fixed;background-image:url(/assets/img/bg.jpg);background-size:cover;width:100%;height:100vh}.logo[_ngcontent-%COMP%]{position:fixed;height:600px;width:100%;mix-blend-mode:overlay}.logo[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:100px auto;max-width:1280px;z-index:100}@media screen and (max-width: 1380px){.logo[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]{padding:0 50px}}.logo[_ngcontent-%COMP%]   .img-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.6}.main[_ngcontent-%COMP%]{position:relative;color:#fff;padding-top:120px;z-index:150}@media screen and (max-width: 1380px){.main[_ngcontent-%COMP%]{padding:100px 50px}}.main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0 auto;max-width:1280px;font-size:96px}.main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:0 auto;max-width:1280px;font-size:60px}.sections[_ngcontent-%COMP%]{position:absolute;top:700px;width:100%;overflow-x:hidden}.sections[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:#fff;padding:25px}.sections[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]{background-color:#fff;height:300px;background-color:#6464ff33;position:relative;padding-top:50px;padding-bottom:50px;display:grid;grid-auto-flow:column;grid-auto-columns:minmax(200px,1fr);justify-items:center;align-content:center;column-gap:20px}.sections[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]{background-color:transparent;height:300px;position:relative;padding-top:50px;padding-bottom:50px;display:grid;grid-auto-flow:column;grid-auto-columns:minmax(200px,1fr);justify-items:center;align-content:center;column-gap:20px}.sections[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%], .sections[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 96px 1fr;grid-template-columns:1fr;height:100%;justify-items:center;align-items:flex-start;width:200px;row-gap:20px}.sections[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .sections[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.sections[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .sections[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;width:96px;height:96px;display:grid;place-items:center}.sections[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .sections[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:15px;text-align:center}.sections[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%]{background-color:transparent;height:400px;background-color:#ffffff1a}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{background-color:#0006;height:160px;padding:20px 50px;display:flex;justify-content:center}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:1fr auto;grid-template-rows:96px;justify-content:center;align-content:center;align-items:center;cursor:pointer;opacity:.7}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:96px}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]   .icon.padded[_ngcontent-%COMP%]{padding:30px}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]   .icon.padded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:56px}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]:not(:first-child):before{content:"";border-left:1px solid white;height:40px;position:absolute;vertical-align:mid}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]:hover{opacity:1}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700;grid-column:2;align-self:center;margin:0 30px 0 12px}.sections[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%]   .padded[_ngcontent-%COMP%] + .name[_ngcontent-%COMP%]{margin-left:-18px}']});let t=e;return t})();var A=[{path:"",component:$}];var L={providers:[I(A),E()]};var B={providers:[z()]},D=k(L,B);var G=()=>S(F,D),le=G;export{le as a};