(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1841)}])},1841:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return S}});var e,o=r(5893),a=r(7294),i=r(4184),c=r.n(i),u=r(2730),l=r(9008),s=r.n(l),f=r(7160),m=r.n(f);!function(t){t[t.None=0]="None",t[t.Exist=1]="Exist",t[t.Exact=2]="Exact"}(e||(e={}));var y=function(t){var n=t+1;return n>e.Exact?e.None:n},d=function(){return{status:e.None,char:""}},v=function(t){var n={blacklist:new Set,byPosition:Array(5).fill(0).map((function(){return{exact:"",differentFrom:new Set}}))},r=!0,o=!1,a=void 0;try{for(var i,c=Array(6).keys()[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var u=i.value,l=!0,s=!1,f=void 0;try{for(var m,y=Array(5).keys()[Symbol.iterator]();!(l=(m=y.next()).done);l=!0){var d=m.value,v=t[u][d];if(v.char)switch(v.status){case e.None:n.blacklist.add(v.char);break;case e.Exist:n.byPosition[d].differentFrom.add(v.char);break;case e.Exact:n.byPosition[d].exact=v.char}}}catch(h){s=!0,f=h}finally{try{l||null==y.return||y.return()}finally{if(s)throw f}}}}catch(h){o=!0,a=h}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n},h=function(t){var n="[^".concat(Array.from(t.blacklist).join(""),"]"),r="(?=".concat(n.repeat(5),")"),e=t.byPosition.reduce((function(t,n){var r=!0,e=!1,o=void 0;try{for(var a,i=n.differentFrom[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var c=a.value;t.add(c)}}catch(u){e=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(e)throw o}}return t}),new Set),o=Array.from(e).map((function(t){return"(?=.*".concat(t,")")})).join(""),a=t.byPosition.map((function(t){return t.exact?t.exact:t.differentFrom.size?"[^".concat(Array.from(t.differentFrom).join(""),"]"):"."})),i="(?=".concat(a.join(""),")"),c="^".concat(r).concat(o).concat(i,".{").concat(5,"}$");return new RegExp(c,"gm")};function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function x(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function p(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){x(t,n,r[n])}))}return t}function _(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(e=r.next()).done)&&(a.push(e.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,n)||w(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||w(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,n){if(t){if("string"===typeof t)return b(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,n):void 0}}var E=function(t){var n,r=t.setter,a=t.i,i=t.j,u=t.data,l=c()(m().cell,(x(n={},m().exact,u.status===e.Exact),x(n,m().exist,u.status===e.Exist),n));return(0,o.jsx)("input",{value:u.char,onChange:function(t){r((function(n){var r;return n[i][a]=p({},u,{char:null===(r=t.target)||void 0===r?void 0:r.value}),j(n)}))},className:l,maxLength:1,onContextMenu:function(t){t.preventDefault(),r((function(t){return t[i][a]=p({},u,{status:y(u.status)}),j(t)}))}})},N=(0,a.memo)((function(){return(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"Create Next App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})})),S=function(){var t=(0,u.ib)("/5char.es.txt",{},[]).data,n=void 0===t?"":t,r=_((0,a.useState)((function(){var t=function(t){return function(){return Array(t).fill(0)}};return t(6)().map(t(5)).map((function(t){return t.map(d)}))})),2),e=r[0],i=r[1],c=(0,a.useState)(null),l=c[0],s=c[1],f=function(t){return function(n,r){return(0,o.jsx)(E,{setter:i,i:r,j:t,data:n},r)}},y=e.map((function(t,n){return(0,o.jsx)("div",{className:"row",children:t.map(f(n))},n)}));return(0,o.jsxs)("div",{className:m().container,children:[(0,o.jsx)(N,{}),(0,o.jsxs)("main",{className:m().main,children:[(0,o.jsxs)("span",{className:m().version,children:["v","1.1.0"]}),(0,o.jsx)("h1",{className:m().title,children:"Welcome to Reverse Wordle!"}),y,(0,o.jsx)("button",{onClick:function(){var t=v(e),r=h(t),o=n.match(r);s(o)},children:"Solve"}),l?(0,o.jsx)("p",{className:m().solutions,children:l.join(", ")}):"no results"]})]})}},7160:function(t){t.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",version:"Home_version__O08E_",title:"Home_title__T09hD",cell:"Home_cell__tYDA1",exact:"Home_exact__mOMLR",exist:"Home_exist__JtfNu",solutions:"Home_solutions__UHZ_3"}}},function(t){t.O(0,[312,774,888,179],(function(){return n=8312,t(t.s=n);var n}));var n=t.O();_N_E=n}]);