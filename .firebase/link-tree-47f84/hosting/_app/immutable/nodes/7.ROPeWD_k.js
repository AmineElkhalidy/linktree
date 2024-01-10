import{k as Pe,q as Le,l as je,m as De,n as Re,e as Se,a as ee,b as me,s as he}from"../chunks/firebase.d7i5Tn_k.js";import{H as Te}from"../chunks/control.pJ1mnnAb.js";import{s as Ue,v as Ce,p as qe,I as Oe,g,c as O,l as z,q as Ne,h as v,d as N,i as T,m as G,A as _e,k as b,E as pe,J as Ae}from"../chunks/scheduler.1VmQr9R1.js";import{S as Ie,i as Be,d as se,q as ge,v as He,e as w,g as d,n as l,a as ve,p as Me,s as be,b as J,c as Ve,t as te,j as ze,k as Ge,m as Je,l as Ye,h as Fe}from"../chunks/index.PIup2QdQ.js";import{U as Ee,g as Ke,a as Qe}from"../chunks/UserLink.r1ZpGgw1.js";import{g as we}from"../chunks/navigation.NnD2CsdX.js";function ke(t,e){throw isNaN(t)||t<400||t>599?new Error(`HTTP error status codes must be between 400 and 599 — ${t} is invalid`):new Te(t,e)}new TextEncoder;const We=async({params:t})=>{const e=Pe(Se,"users"),c=Le(e,De("username","==",t.username),je(1)),u=await Re(c),h=u.docs[0]?.exists(),a=u.docs[0]?.data();if(!h)throw ke(404,"That user does not exist in our database!");if(!a.published)throw ke(403,`The profile of @${a.username} is not public!`);return{username:a.username,photoURL:a.photoURL,bio:a.bio,links:a.links??[]}},st=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"})),k="C:/Users/amine/Desktop/Learning/svelte/linke-tree/src/routes/[username]/+page.svelte";function xe(t,e,c){const u=t.slice();return u[4]=e[c],u}function ne(t){let e,c;const u=[t[4]];let h={};for(let i=0;i<u.length;i+=1)h=Oe(h,u[i]);e=new Ee({props:h,$$inline:!0});const a={c:function(){ze(e.$$.fragment)},l:function(f){Ge(e.$$.fragment,f)},m:function(f,_){Je(e,f,_),c=!0},p:function(f,_){const j=_&1?Ke(u,[Qe(f[4])]):{};e.$set(j)},i:function(f){c||(J(e.$$.fragment,f),c=!0)},o:function(f){te(e.$$.fragment,f),c=!1},d:function(f){Ye(e,f)}};return se("SvelteRegisterBlock",{block:a,id:ne.name,type:"each",source:"(43:6) {#each data.links as item}",ctx:t}),a}function ae(t){let e,c,u,h,a,i,f,_=t[0].username+"",j,m,U,x,B,Y,C,I=(t[0].bio??"No bio yet...")+"",H,F,D,R,oe="Your social links:",K,S,Q,y,P,W,X,L,re="Sign Out",E,Z,le;document.title=u="@"+t[0].username+" Links";let q=ge(t[0].links),s=[];for(let p=0;p<q.length;p+=1)s[p]=ne(xe(t,q,p));const ye=p=>te(s[p],1,1,()=>{s[p]=null}),ie={c:function(){e=g("meta"),h=O(),a=g("main"),i=g("h1"),f=z("@"),j=z(_),m=O(),U=g("div"),x=g("img"),Y=O(),C=g("p"),H=z(I),F=O(),D=g("div"),R=g("p"),R.textContent=oe,K=O(),S=g("ul");for(let o=0;o<s.length;o+=1)s[o].c();Q=O(),y=g("div"),P=g("a"),W=z("Add a Link"),X=O(),L=g("button"),L.textContent=re,this.h()},l:function(o){const r=Ne("svelte-kxq3ok",document.head);e=v(r,"META",{name:!0,content:!0}),r.forEach(w),h=N(o),a=v(o,"MAIN",{class:!0});var n=T(a);i=v(n,"H1",{class:!0});var A=T(i);f=G(A,"@"),j=G(A,_),A.forEach(w),m=N(n),U=v(n,"DIV",{class:!0});var ce=T(U);x=v(ce,"IMG",{src:!0,alt:!0,width:!0,class:!0}),ce.forEach(w),Y=N(n),C=v(n,"P",{class:!0});var ue=T(C);H=G(ue,I),ue.forEach(w),F=N(n),D=v(n,"DIV",{});var M=T(D);R=v(M,"P",{class:!0,"data-svelte-h":!0}),_e(R)!=="svelte-1w37t3"&&(R.textContent=oe),K=N(M),S=v(M,"UL",{class:!0});var de=T(S);for(let $=0;$<s.length;$+=1)s[$].l(de);de.forEach(w),M.forEach(w),Q=N(n),y=v(n,"DIV",{class:!0});var V=T(y);P=v(V,"A",{href:!0,class:!0});var fe=T(P);W=G(fe,"Add a Link"),fe.forEach(w),X=N(V),L=v(V,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(L)!=="svelte-1gfjwpt"&&(L.textContent=re),V.forEach(w),n.forEach(w),this.h()},h:function(){d(e,"name","description"),d(e,"content",c=t[0].bio),b(e,k,22,2,441),d(i,"class","text-3xl sm:text-5xl md:text-6xl text-green-500"),b(i,k,27,2,598),pe(x.src,B=t[0].photoURL??"/profile.webp")||d(x,"src",B),d(x,"alt","Pic URL"),d(x,"width","256"),d(x,"class","mx-auto rounded-full border border-green-500"),b(x,k,32,4,719),d(U,"class","my-6"),b(U,k,31,2,695),d(C,"class","text-lg sm:text-xl my-8 text-white"),b(C,k,40,2,893),d(R,"class","text-lg mb-2"),b(R,k,45,4,999),d(S,"class","list-none mb-6 flex flex-col justify-center items-center gap-4"),b(S,k,46,4,1051),b(D,k,44,2,988),d(P,"href",t[1]),d(P,"class","btn btn-outline btn-info mx-auto my-4 px-10"),b(P,k,54,4,1307),d(L,"class","btn btn-error px-10 text-white font-semibold sm:text-lg"),b(L,k,58,4,1405),d(y,"class","flex flex-col justify-center items-center mb-8 gap-16"),b(y,k,53,2,1234),d(a,"class","prose text-center mx-auto mt-16"),b(a,k,26,0,548)},m:function(o,r){l(document.head,e),ve(o,h,r),ve(o,a,r),l(a,i),l(i,f),l(i,j),l(a,m),l(a,U),l(U,x),l(a,Y),l(a,C),l(C,H),l(a,F),l(a,D),l(D,R),l(D,K),l(D,S);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(S,null);l(a,Q),l(a,y),l(y,P),l(P,W),l(y,X),l(y,L),E=!0,Z||(le=Me(L,"click",t[2],!1,!1,!1,!1),Z=!0)},p:function(o,[r]){if((!E||r&1&&c!==(c=o[0].bio))&&d(e,"content",c),(!E||r&1)&&u!==(u="@"+o[0].username+" Links")&&(document.title=u),(!E||r&1)&&_!==(_=o[0].username+"")&&be(j,_),(!E||r&1&&!pe(x.src,B=o[0].photoURL??"/profile.webp"))&&d(x,"src",B),(!E||r&1)&&I!==(I=(o[0].bio??"No bio yet...")+"")&&be(H,I),r&1){q=ge(o[0].links);let n;for(n=0;n<q.length;n+=1){const A=xe(o,q,n);s[n]?(s[n].p(A,r),J(s[n],1)):(s[n]=ne(A),s[n].c(),J(s[n],1),s[n].m(S,null))}for(Fe(),n=q.length;n<s.length;n+=1)ye(n);Ve()}(!E||r&2)&&d(P,"href",o[1])},i:function(o){if(!E){for(let r=0;r<q.length;r+=1)J(s[r]);E=!0}},o:function(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)te(s[r]);E=!1},d:function(o){o&&(w(h),w(a)),w(e),Ae(s,o),Z=!1,le()}};return se("SvelteRegisterBlock",{block:ie,id:ae.name,type:"component",source:"",ctx:t}),ie}function Xe(t,e,c){let u,h;Ce(ee,"userData"),qe(t,ee,m=>c(3,h=m));let{$$slots:a={},$$scope:i}=e;He("Page",a,[]);const f=async()=>{await fetch("/api/signin",{method:"DELETE"}),await he(me),we("/login")};let{data:_}=e;t.$$.on_mount.push(function(){_===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const j=["data"];return Object.keys(e).forEach(m=>{!~j.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<Page> was created with unknown prop '${m}'`)}),t.$$set=m=>{"data"in m&&c(0,_=m.data)},t.$capture_state=()=>({UserLink:Ee,userData:ee,auth:me,signOut:he,goto:we,signOutSSR:f,data:_,href:u,$userData:h}),t.$inject_state=m=>{"data"in m&&c(0,_=m.data),"href"in m&&c(1,u=m.href)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&8&&c(1,u=`/${h?.username}/edit`)},[_,u,f,h]}class ot extends Ie{constructor(e){super(e),Be(this,e,Xe,ae,Ue,{data:0}),se("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ae.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ot as component,st as universal};