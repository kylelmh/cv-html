import{o as t,c as s,a as n,t as o,_,F as a,r as d,b as m,d as $,e as k,n as b,f as h}from"./index.8cc885b3.js";var v=(e,r)=>{const i=e.__vccOpts||e;for(const[c,u]of r)i[c]=u;return i};function j(e){switch(e){case"../json/en/basic_info.json":return _(()=>import("./basic_info.969c1850.js"),[]);case"../json/ja/basic_info.json":return _(()=>import("./basic_info.61637ce7.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const y={data(){return{basic_info:{}}},beforeCreate(){j(`../json/${this.$i18n.locale}/basic_info.json`).then(e=>{this.basic_info=e.default})}},w={class:"flexbox"},E=n("i",{class:"bi-envelope -inline"},null,-1),g=["href"],D=n("i",{class:"bi-github"},null,-1),I=["href"],P=n("i",{class:"bi-link-45deg"},null,-1),T=["href"];function R(e,r,i,c,u,f){return t(),s("div",null,[n("h1",null,o(u.basic_info.name),1),n("div",w,[n("div",null,[E,n("a",{class:"u-ml5 -inline",href:"mailto:"+u.basic_info.email},o(u.basic_info.email),9,g)]),n("div",null,[D,n("a",{class:"u-ml5",href:"https://www.github.com/"+u.basic_info.github},"github.com/"+o(u.basic_info.github),9,I)]),n("div",null,[P,n("a",{class:"u-ml5",href:"https://"+u.basic_info.githubio+".github.io/cv-html"},o(u.basic_info.githubio)+".github.io/cv-html",9,T)])])])}var V=v(y,[["render",R]]);function L(e){switch(e){case"../json/en/employment.json":return _(()=>import("./employment.a31e5a37.js"),[]);case"../json/ja/employment.json":return _(()=>import("./employment.ccd8529c.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function O(e){switch(e){case"../json/en/employment.json":return _(()=>import("./employment.a31e5a37.js"),[]);case"../json/ja/employment.json":return _(()=>import("./employment.ccd8529c.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const q={data(){return{employment:{}}},beforeCreate(){O(`../json/${this.$i18n.locale}/employment.json`).then(e=>{this.employment=e.default})},beforeUpdate(){L(`../json/${this.$i18n.locale}/employment.json`).then(e=>{this.employment=e.default})}},A={class:"p__section"},M={class:"p__job"},U={class:"p__descriptor u-mb10"},C={class:"p__basic_info"},x={class:"p__cell-center"},B={class:"p__skill_tag"};function N(e,r,i,c,u,f){return t(),s("div",A,[n("h3",null,o(e.$t("employment")),1),(t(!0),s(a,null,d(u.employment.data,l=>(t(),s("div",M,[n("h4",null,o(l.name),1),n("div",null,o(l.position)+" - "+o(l.status),1),n("div",U,o(l.start)+" - "+o(l.end),1),n("div",C,[n("div",null,o(e.$t("work_description"))+": ",1),n("ul",null,[(t(!0),s(a,null,d(l.description,p=>(t(),s("li",null,o(p),1))),256))]),l.examples?(t(),s(a,{key:0},[n("div",null,o(e.$t("examples"))+": ",1),n("ul",null,[(t(!0),s(a,null,d(l.examples,p=>(t(),s("li",null,o(p),1))),256))])],64)):m("",!0),l.skills?(t(),s(a,{key:1},[n("div",x,o(e.$t("skills"))+": ",1),n("ul",null,[(t(!0),s(a,null,d(l.skills,p=>(t(),s("li",B,o(p),1))),256))])],64)):m("",!0)])]))),256))])}var S=v(q,[["render",N]]);function F(e){switch(e){case"../json/en/education.json":return _(()=>import("./education.a3bdc9ab.js"),[]);case"../json/ja/education.json":return _(()=>import("./education.acc87abe.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function z(e){switch(e){case"../json/en/education.json":return _(()=>import("./education.a3bdc9ab.js"),[]);case"../json/ja/education.json":return _(()=>import("./education.acc87abe.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const G={data(){return{education:{}}},beforeCreate(){z(`../json/${this.$i18n.locale}/education.json`).then(e=>{this.education=e.default})},updated(){F(`../json/${this.$i18n.locale}/education.json`).then(e=>{this.education=e.default})}},H={class:"p__section"},J={class:"p__job"},K={key:0},Q={key:0},W={class:"p__descriptor u-mb10"},X={class:"p__basic_info"},Y={class:"p__literal"},Z={class:"p__literal"},ee={class:"p__literal"};function ne(e,r,i,c,u,f){return t(),s("div",H,[n("h3",null,o(e.$t("education")),1),(t(!0),s(a,null,d(u.education.data,l=>(t(),s("div",J,[n("h4",null,o(l.name),1),l.faculty?(t(),s("div",K,[$(o(l.faculty)+" ",1),l.department?(t(),s("span",Q," - "+o(l.department),1)):m("",!0)])):m("",!0),n("div",W,o(l.start)+" - "+o(l.end),1),n("div",X,[l.awards?(t(),s(a,{key:0},[n("div",Y,o(e.$t("awards"))+": ",1),n("div",null,[(t(!0),s(a,null,d(l.awards,p=>(t(),s("p",null,o(p),1))),256))])],64)):m("",!0),l.research?(t(),s(a,{key:1},[n("div",Z,o(e.$t("research"))+": ",1),n("div",null,o(l.research),1)],64)):m("",!0),l.publications?(t(),s(a,{key:2},[n("div",ee,o(e.$t("publications"))+": ",1),n("div",null,[(t(!0),s(a,null,d(l.publications,p=>(t(),s("p",null,o(p),1))),256))])],64)):m("",!0)])]))),256))])}var te=v(G,[["render",ne]]);const se={props:{lang:Object}},oe={class:"p__skill_card"},ie={class:"p__skill_levels flexbox"},le={viewBox:"15 0 6 6",xmlns:"http://www.w3.org/2000/svg"},re=["cx"],ae=["cx"],ue={class:"p__skill_tag"};function _e(e,r,i,c,u,f){return t(),s("div",oe,[n("div",ie,[n("h4",null,o(i.lang.name),1),(t(),s("svg",le,[(t(!0),s(a,null,d(i.lang.level,l=>(t(),s("circle",{cx:3+l*5,cy:"3",r:"1.5",stroke:"black"},null,8,re))),256)),(t(!0),s(a,null,d(5-i.lang.level,l=>(t(),s("circle",{cx:3+l*5+i.lang.level*5,cy:"3",r:"1.5",fill:"none",stroke:"black"},null,8,ae))),256))]))]),(t(!0),s(a,null,d(i.lang.frameworks,l=>(t(),s("div",ue,o(l),1))),256))])}var ce=v(se,[["render",_e]]);function de(e){switch(e){case"../json/en/levels.json":return _(()=>import("./levels.c3249c32.js"),[]);case"../json/ja/levels.json":return _(()=>import("./levels.cfc272d1.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function me(e){switch(e){case"../json/en/skills.json":return _(()=>import("./skills.93e6f3c7.js"),[]);case"../json/ja/skills.json":return _(()=>import("./skills.612b022a.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function pe(e){switch(e){case"../json/en/levels.json":return _(()=>import("./levels.c3249c32.js"),[]);case"../json/ja/levels.json":return _(()=>import("./levels.cfc272d1.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function fe(e){switch(e){case"../json/en/skills.json":return _(()=>import("./skills.93e6f3c7.js"),[]);case"../json/ja/skills.json":return _(()=>import("./skills.612b022a.js"),[]);default:return new Promise(function(r,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const he={class:"p__section"},ve={key:0,class:"p__section u-mb10"},be={class:"u-mb10"},$e={class:"p__skills"},ke={class:"p__skill_tag"},je={key:0},ye={class:"u-mb10"},we={class:"p__skills u-mb10"},Ee={class:"p__skill_levels flexbox u-ml10"},ge={class:"p__cell-center"},De={viewBox:"15 0 6 6",xmlns:"http://www.w3.org/2000/svg"},Ie=["cx"],Pe=["cx"],Te={data(){return{skills:{},levels:{}}},beforeCreate(){fe(`../json/${this.$i18n.locale}/skills.json`).then(e=>{this.skills=e.default}),pe(`../json/${this.$i18n.locale}/levels.json`).then(e=>{this.levels=e.default})},beforeUpdate(){me(`../json/${this.$i18n.locale}/skills.json`).then(e=>{this.skills=e.default}),de(`../json/${this.$i18n.locale}/levels.json`).then(e=>{this.levels=e.default})}},Re=Object.assign(Te,{__name:"SkillSet",setup(e){return(r,i)=>(t(),s("div",he,[n("h2",null,o(r.$t("skills")),1),r.skills.languages?(t(),s("div",ve,[n("h4",be,o(r.$t("languages")),1),n("div",$e,[(t(!0),s(a,null,d(r.skills.languages,c=>(t(),s("div",ke,[n("div",null,o(c.name)+": ",1),n("div",null,o(c.description),1),c.cert?(t(),s("div",je,o(c.cert),1)):m("",!0)]))),256))])])):m("",!0),r.skills.programming?(t(),s(a,{key:1},[n("h4",ye,o(r.$t("planguages")),1),n("div",we,[(t(!0),s(a,null,d(r.skills.programming,c=>(t(),k(ce,{lang:c},null,8,["lang"]))),256))]),(t(!0),s(a,null,d(r.levels,(c,u)=>(t(),s("div",Ee,[n("div",ge,[(t(),s("svg",De,[(t(!0),s(a,null,d(u*1,f=>(t(),s("circle",{cx:3+f*5,cy:"3",r:"1.5",stroke:"black"},null,8,Ie))),256)),(t(!0),s(a,null,d(5-u,f=>(t(),s("circle",{cx:3+f*5+u*5,cy:"3",r:"1.5",fill:"none",stroke:"black"},null,8,Pe))),256))]))]),n("p",null,o(c),1)]))),256))],64)):m("",!0)]))}}),Ve={class:"no-print"},Le={class:"p__locale_selector"},Oe={class:"document"},qe={class:"page"},Ae={class:"page"},Me={computed:{locale(){return this.$i18n.locale}},methods:{setLocale(e){this.$i18n.locale=e}}},Ce=Object.assign(Me,{__name:"CV",setup(e){return(r,i)=>(t(),s("div",null,[n("div",Ve,[n("div",Le,[n("input",{type:"radio",id:"en",name:"locale",value:"en",onChange:i[0]||(i[0]=c=>r.setLocale("en"))},null,32),n("label",{for:"en",class:b(["p__flag",{active:r.locale=="en"}])}," en ",2),n("input",{type:"radio",id:"ja",name:"locale",value:"ja",onChange:i[1]||(i[1]=c=>r.setLocale("ja"))},null,32),n("label",{for:"ja",class:b(["p__flag",{active:r.locale=="ja"}])}," ja ",2)])]),n("div",Oe,[n("div",qe,[h(V),n("h2",null,o(r.$t("record")),1),h(S)]),n("div",Ae,[h(te),h(Re)])])]))}});export{Ce as default};
