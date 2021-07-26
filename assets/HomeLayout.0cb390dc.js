var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{_ as r}from"./Footer.42b65dcc.js";import{W as a,P as s,s as c,h as i,U as d,V as p,r as b,o as f,c as g,a as h,t as m,q as u,F as x,z as w,X as v,Z as y}from"./app.93fa4a4f.js";const k={components:{Footer:r},setup(e){const r=a({author:"",title:"",icon:"",description:"",color:"",cards:[],clickHandler:()=>{},ctrlShiftClickHandler:()=>{}});s((()=>{r.clickHandler=e=>{const t=`postslist/${e.toLowerCase()}`;window.open(t)},r.ctrlShiftClickHandler=e=>{const t=`folderslist/${e.toLowerCase()}`;window.open(t)}})),r.title="CODE",r.icon="home_icon.png",r.description="这是我的<a href='https://benbinbin.github.io/tech-blog/' target='_blank' class='hover:text-blue-600 underline font-bold transition-colors'>技术部落格</a>之一，主要内容是与编程相关的笔记。",r.color="#9CA3AF",r.cards=c().value.cards||[];return((e,r)=>{for(var a in r||(r={}))n.call(r,a)&&o(e,a,r[a]);if(t)for(var a of t(r))l.call(r,a)&&o(e,a,r[a]);return e})({},i(r))}},C=v();d("data-v-001ec74c");const j={class:"bg-gray-100"},H={class:"p-8 text-center text-5xl md:text-8xl font-bold"},O={key:0,class:"container w-full p-8 md:p-10 flex justify-center items-center"},$=h("div",{class:"before flex-grow h-0.5 bg-white"},null,-1),F=h("div",{class:"after flex-grow h-0.5 bg-white"},null,-1),_={class:"px-8 py-16"},L={class:"\n          container\n          mx-auto\n          grid grid-cols-1\n          sm:grid-cols-2\n          lg:grid-cols-3\n          xl:grid-cols-4\n          gap-6\n        "},P={class:"card-body my-40 relative z-10"},S={class:"text-5xl text-left font-bold"};p();const I=C(((e,t,n,l,o,r)=>{const a=b("Footer");return f(),g("div",j,[h("header",{class:"\n        h-screen\n        flex flex-col\n        justify-center\n        items-center\n        text-white\n      ",style:{"background-color":e.color}},[h("h1",H,m(e.title),1),e.icon?(f(),g("div",O,[$,h("img",{class:"flex-shrink-0 px-4 w-20 sm:w-24",src:e.$withBase(`/images/home/${e.icon}`),alt:"tech blog logo"},null,8,["src"]),F])):u("",!0),h("p",{class:"p-8 text-center text-lg font-bold",innerHTML:e.description},null,8,["innerHTML"])],4),h("main",_,[h("div",L,[(f(!0),g(x,null,w(e.cards,(t=>(f(),g("button",{key:t.name,class:"\n            card\n            rounded-2xl\n            pl-6\n            relative\n            bg-cover bg-center bg-no-repeat\n            hover:shadow-lg\n            hover:text-blue-400\n            text-white\n            transition-all\n          ",style:{backgroundImage:"url("+e.$withBase(`/images/home/${t.image}`)+")"},onClick:[y((n=>e.clickHandler(t.name)),["exact"]),y((n=>e.ctrlShiftClickHandler(t.name)),["ctrl","shift","exact"])]},[h("div",P,[h("h3",S,m(t.name),1)])],12,["onClick"])))),128))])]),h(a)])}));k.render=I,k.__scopeId="data-v-001ec74c";export default k;