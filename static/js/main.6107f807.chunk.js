(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),r=n(6),o=n(8),i=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="letter",h="length",d=function(){var t=Object(i.useState)(null),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),d=a[0],g=a[1],f=[].concat(b);return n&&(f=function(t,e){var n=Object(o.a)(t);switch(e){case j:n.sort((function(t,e){return t.localeCompare(e)}));break;case h:n.sort((function(t,e){return t.length-e.length}));break;default:return 0}return n}(f,n)),d&&f.reverse(),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!0!==d}),onClick:function(){return g(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(null),g(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:f.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6107f807.chunk.js.map