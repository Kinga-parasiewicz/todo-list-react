(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,d,l,u,s,b,h,f,j,g,x,m,p,O,k,w=t(0),v=t.n(w),y=t(12),D=t.n(y),z=(t(21),t(3)),T=t(2),C=Object(T.b)(o||(o=Object(z.a)(["\nhtml {\n  box-sizing: border-box;\n\n}\n\n*, ::before, ::after {\n  box-sizing: inherit;\n}\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n    background-color:#eee\n}\n\n"]))),S=t(4),F=T.d.h1(r||(r=Object(z.a)(["\n  color:",";\n  margin-top: 2px;\n  margin-bottom: 2px;\n  padding: 20px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.black}),(function(n){return n.theme.color.white})),N=t(1),I=function(n){var e=n.title;return Object(N.jsx)(F,{children:e})},A=T.d.form(i||(i=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n  background: ",";\n  padding: 15px 15px;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.horizontal})),H=T.d.input(c||(c=Object(z.a)(["\n  flex-grow: 0.8;\n  padding: 10px;\n  height: 40px;\n  margin-right: 10px;\n  border: 1px solid ",";\n  padding: 0px 10px;\n"])),(function(n){return n.theme.color.gray})),J=T.d.button(a||(a=Object(z.a)(["\n  color: ",";\n  border: 1px solid ",";\n  background: ",";\n  font-size: 18px;\n  flex-grow: 0.2;\n  transition: 2s, transform 1s;\n\n  &:hover {\n    background-color: ",";\n    transform: scale(1.1);\n  }\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    margin: 20px 0;\n    padding: 10px;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.lightTeal}),(function(n){return n.theme.breakpoint.horizontal})),L=function(n){var e=n.addNewTask,t=Object(w.useState)(""),o=Object(S.a)(t,2),r=o[0],i=o[1],c=Object(w.useRef)(null);return Object(N.jsxs)(A,{onSubmit:function(n){n.preventDefault(),""!==r.trim()&&(e(r.trim()),i(""),c.current.focus())},children:[Object(N.jsx)(H,{value:r,onChange:function(n){var e=n.target;return i(e.value)},placeholder:"Co jest do zrobienia",ref:c}),Object(N.jsx)(J,{children:"Dodaj zadanie"})]})},P=T.d.section(d||(d=Object(z.a)(["\n  margin-bottom: 10px;\n"]))),B=T.d.div(l||(l=Object(z.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  padding-right: 10px;\n  margin: 0 0 1px 0;\n\n  @media (max-width:  ","px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.horizontal})),E=T.d.h2(u||(u=Object(z.a)(["\n  padding: 15px 17px;\n  font-size: 25px;\n  margin: 0px;\n"]))),G=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(N.jsxs)(P,{children:[Object(N.jsxs)(B,{children:[Object(N.jsx)(E,{children:e}),o]}),t]})},M=T.d.main(s||(s=Object(z.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px;\n"]))),U=T.d.div(b||(b=Object(z.a)(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.breakpoint.horizontal})),R=T.d.button(h||(h=Object(z.a)(["\n  color: teal;\n  font-size: 18px;\n  background-color: ",";\n  border: none;\n  transition: 0.5s;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n  &:disabled {\n    color: ",";\n  }\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    margin: 10px 0;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.lightTeal}),(function(n){return n.theme.color.darkTeal}),(function(n){return n.theme.color.gallery}),(function(n){return n.theme.breakpoint.horizontal})),q=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone;return Object(N.jsx)(U,{children:e.length>0&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(R,{onClick:o,children:[t?"Pokaz":"Ukryj"," uko\u0144czone"]}),Object(N.jsx)(R,{onClick:r,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},K=T.d.ul(f||(f=Object(z.a)(["\n  background-color: ",";\n  padding: 15px;\n  list-style-type: none;\n  width: 100%;\n  margin: 0 auto;\n"])),(function(n){return n.theme.color.white})),Q=T.d.li(j||(j=Object(z.a)(["\n  margin: 12px;\n  padding-bottom: 10px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  ","\n"])),(function(n){return n.theme.color.lightGray}),(function(n){return n.hidden&&Object(T.c)(g||(g=Object(z.a)(["\n      display: none;\n    "])))})),V=T.d.button(x||(x=Object(z.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  color: ",";\n  border: none;\n  padding: 5px;\n  width: 28px;\n  height: 28px;\n  transition: 0.5s;\n\n  ","\n  ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.remove&&Object(T.c)(m||(m=Object(z.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.color.red}))}),(function(n){return n.toggleDone&&Object(T.c)(p||(p=Object(z.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.color.green}))})),W=T.d.p(O||(O=Object(z.a)(["\n  margin: 0;\n  flex-basis: 100%;\n  padding: 0 15px;\n  word-break: break-word;\n\n  ","\n"])),(function(n){return n.done&&Object(T.c)(k||(k=Object(z.a)(["\n      text-decoration: line-through;\n    "])))})),X=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleTaskDone,r=n.removeTask;return Object(N.jsx)(K,{children:e.map((function(n){return Object(N.jsxs)(Q,{hidden:n.done&&t,children:[Object(N.jsx)(V,{toggleDone:!0,onClick:function(){return o(n.id)},children:n.done?"\u2714\ufe0f":""}),Object(N.jsx)(W,{done:n.done,children:n.content}),Object(N.jsx)(V,{remove:!0,onClick:function(){return r(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},Y=t(16),Z=t(6),$=function(){var n=function(n,e){var t=Object(w.useState)((function(){return null===localStorage.getItem(n)?e:JSON.parse(localStorage.getItem(n))})),o=Object(S.a)(t,2),r=o[0],i=o[1];return Object(w.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,i]}("tasks",[]),e=Object(S.a)(n,2),t=e[0],o=e[1];return{tasks:t,removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(Z.a)(Object(Z.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){o((function(n){return n.map((function(n){return Object(Z.a)(Object(Z.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){o((function(e){return[].concat(Object(Y.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}};var _=function(){var n=Object(w.useState)(!1),e=Object(S.a)(n,2),t=e[0],o=e[1],r=$(),i=r.tasks,c=r.removeTask,a=r.toggleTaskDone,d=r.setAllDone,l=r.addNewTask;return Object(N.jsxs)(M,{children:[Object(N.jsx)(I,{title:"Lista zada\u0144"}),Object(N.jsx)(G,{title:"Dodaj nowe zadanie",body:Object(N.jsx)(L,{addNewTask:l})}),Object(N.jsx)(G,{title:"Lista zada\u0144",extraHeaderContent:Object(N.jsx)(q,{tasks:i,hideDone:t,toggleHideDone:function(){o((function(n){return!n}))},setAllDone:d}),body:Object(N.jsx)(X,{tasks:i,hideDone:t,removeTask:c,toggleTaskDone:a})})]})},nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};D.a.render(Object(N.jsx)(v.a.StrictMode,{children:Object(N.jsxs)(T.a,{theme:{color:{gallery:"#ccc",lightGray:"#ddd",lightTeal:"hsl(180, 100%, 40%)",darkTeal:"hsl(180, 100%, 15%)",teal:"#008080",white:"#fff",gray:"#808080",black:"#000",red:"#FF0000",green:"#0D9658"},breakpoint:{mobile:767,horizontal:768}},children:[Object(N.jsx)(C,{}),Object(N.jsx)(_,{})]})}),document.getElementById("root")),nn()}},[[25,1,2]]]);
//# sourceMappingURL=main.7643963f.chunk.js.map