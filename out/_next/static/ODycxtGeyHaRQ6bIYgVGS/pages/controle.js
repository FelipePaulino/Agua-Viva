(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2SLI":function(e,t,n){"use strict";n.r(t);var a=n("8Kt/"),o=n.n(a),r=n("q1tI"),l=n.n(r),c=n("vDqi"),i=n.n(c),u=n("gzFH");var s=l.a.createElement;t.default=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],a=Object(r.useState)(),c=a[0],m=a[1],g=Object(r.useState)(),d=g[0],f=g[1],v=Object(r.useState)("todos"),h=v[0],p=v[1],b=Object(r.useState)(),j=b[0],O=b[1];function w(e,t){return e[1].nome<t[1].nome?-1:e[1].nome>t[1].nome?1:0}return Object(r.useEffect)((function(){if(c){var e=Object.entries(c);e.sort(w),f(e)}}),[c]),Object(r.useEffect)((function(){setTimeout((function(){n(!0),i.a.get("https://aguaviva-rp.firebaseio.com/teste.json").then((function(e){m(e.data),n(!1)}))}),600)}),[j]),s(l.a.Fragment,null,s(o.a,null,s("title",null,"Igreja Batista \xc1gua Viva - Ribeir\xe3o Pires")),s("div",{className:"container"},s("div",{className:"header"},s("img",{src:"/images/logo.jpg"}),s("h1",null,"Listagem de controle de presen\xe7a no culto")),c&&s(l.a.Fragment,null,s("div",{className:"select"},s("label",null,"Selecione a listagem do culto que deseja ver"),s("select",{onChange:function(e){p(e.target.value)}},s("option",{value:"todos"},"Todos"),s("option",{value:"manha"},"Domingo - 9hs"),s("option",{value:"noite"},"Domingo - 18hs"))),"manha"==h&&s(u.a,{titulo:"Domingo - 9hs",culto:"manha",orderListagem:d,chegada:!0,setControle:O,controle:j}),"noite"==h&&s(u.a,{titulo:"Domingo - 18hs",culto:"noite",orderListagem:d,chegada:!0,setControle:O,controle:j}),"todos"==h&&s(l.a.Fragment,null,s(u.a,{titulo:"Domingo - 9hs",culto:"manha",orderListagem:d,chegada:!0,setControle:O,controle:j}),s(u.a,{titulo:"Domingo - 18hs",culto:"noite",orderListagem:d,chegada:!0,setControle:O,controle:j})),s("div",{className:"box-voltar"},s("a",{href:"/",className:"button"},"Voltar"))),t&&s("p",{className:"carregando"},s("img",{src:"/images/loading.gif"}),s("span",null,"Carregando..."))))}},"7Rab":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controle",function(){return n("2SLI")}])},gzFH:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return g}));var o=n("rePB"),r=n("q1tI"),l=n.n(r),c=n("vDqi"),i=n.n(c),u=l.a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=e.titulo,n=e.culto,o=e.orderListagem,c=e.remocao,s=e.chegada,g=e.setControle,d=e.controle,f=Object(r.useState)(),v=f[0],h=f[1],p=function(e,t){i.a.delete(e).then((function(){alert("voc\xea removeu ".concat(t.nome," da listagem")),window.location="/remocao.html"}))},b=function(e,t){i.a.put(e,t).then((function(){}))},j=null===o||void 0===o?void 0:o.filter((function(e){return!0===e[1].chegada&&e[1].culto==n})),O=null===o||void 0===o?void 0:o.filter((function(e){return e[1].culto==n}));return Object(r.useEffect)((function(){if(O){var e,t=a(O).map((function(e){return parseInt(e[1].criancas)}));e=t.length>=1?t.reduce((function(e,t){return e+t})):0,h(e)}}),[O]),u(l.a.Fragment,null,u("div",{className:"list-header"},u("h1",null,t),(null===j||void 0===j?void 0:j.length)>0&&s&&u("span",null,u("small",{className:"contagem"},null===j||void 0===j?void 0:j.length),1==(null===j||void 0===j?void 0:j.length)&&u(l.a.Fragment,null," pessoa chegou "),1!=(null===j||void 0===j?void 0:j.length)&&u(l.a.Fragment,null," pessoas chegaram "),"no culto")),0!=v&&!s&&!c&&u("div",{className:"list-criancas"},u("span",null,u("img",{src:"images/bebe.svg",width:"25"}),u("small",null," ",u("b",null,v)," ",1==v?"crian\xe7a estar\xe1 presente":"crian\xe7as estar\xe3o presentes"," ","para o cultinho"))),u("table",null,u("thead",null,u("tr",null,u("th",null,"Nome"),u("th",null,"Rede"),!s&&!c&&u("th",null,"Crian\xe7as"),s&&u("th",null,"Controle Servos"),c&&u("th",null,"Status"))),u("tbody",null,o&&u(l.a.Fragment,null,o.map((function(e){return u(l.a.Fragment,null,e.map((function(t){if(t.culto==n)return u("tr",{key:t},u("td",null,t.nome," ",t.sobrenome),u("td",null,"Pr ",t.rede),!s&&!c&&u("td",null,t.criancas?t.criancas:"0"),s&&u("td",{onClick:function(n){return a=e[0],o=t,g(!d),void(o.chegada?b("https://aguaviva-rp.firebaseio.com/teste/".concat(a,".json"),m({},o,{chegada:!1})):b("https://aguaviva-rp.firebaseio.com/teste/".concat(a,".json"),m({},o,{chegada:!0})));var a,o}},t.chegada?u("img",{src:"images/carraca.svg",className:"certo"}):u("img",{src:"images/carraca.svg",className:"nao_certo"})),c&&u("td",null,u("button",{className:"remove",onClick:function(n){return a=e[0],o=t,void p("https://aguaviva-rp.firebaseio.com/teste/".concat(a,".json"),o);var a,o}},"Remover")))})))}))))))}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["7Rab",0,1,2]]]);