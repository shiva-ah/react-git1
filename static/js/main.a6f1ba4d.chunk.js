(this["webpackJsonpreact-git1"]=this["webpackJsonpreact-git1"]||[]).push([[0],{32:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(11),r=c.n(a),s=(c(32),c(9)),j=c(2),i=c(1);var o=function(){return Object(i.jsxs)("div",{children:["pag1",Object(i.jsx)("img",{src:"./SSR.png"})]})};var b=function(){return Object(i.jsxs)("div",{children:["Home",Object(i.jsx)("img",{src:"./logo512.png"}),Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{})]})},u=c(16),p=c(26),d=c.n(p),O=Object(j.e)((function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1],j=Object(n.useState)([]),o=Object(u.a)(j,2),b=o[0],p=o[1],O=e.location.search,g=new URLSearchParams(O).get("page")||"1";return Object(n.useEffect)((function(){d.a.get("https://gorest.co.in/public/v1/users?page=".concat(g)).then((function(e){r(e.data.data);for(var t=[],c=1;c<=e.data.meta.pagination.pages;c++)t.push(c);p(t)}))}),[g]),Object(i.jsx)("div",{children:a?Object(i.jsxs)(i.Fragment,{children:[a.map((function(e){return Object(i.jsxs)("div",{children:[e.id,e.name,e.email]})})),b.map((function(e){return Object(i.jsx)(s.b,{to:"./users?page=".concat(e),children:e})}))]}):Object(i.jsx)("div",{children:"Loading..."})})}));function g(){return Object(i.jsxs)(s.a,{basename:"/",children:[Object(i.jsx)(j.a,{exact:!0,path:"/page1",component:o}),Object(i.jsx)(j.a,{exact:!0,path:"/users",component:O}),Object(i.jsx)(j.a,{exact:!0,path:"/",component:b})]})}r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"));var x=g;r.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.a6f1ba4d.chunk.js.map