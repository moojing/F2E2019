(window.webpackJsonpweek4=window.webpackJsonpweek4||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/card-light.c4ed4c04.png"},17:function(e,a,t){e.exports=t.p+"static/media/shop-light.56e31c57.png"},18:function(e,a,t){e.exports=t.p+"static/media/ATM-light.b6736345.png"},22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),m=(t(27),t(19)),o=t(5),i=t(6),s=t(9),p={credit:{email:"",creditNumber:["","","",""],expireMonth:"",expireYear:"",cvv:""},shop:{email:"",name:"family"},atm:{email:"",bank:"esun"}};function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(t,!0).forEach(function(a){Object(s.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function E(e,a){if(e.method===a.method)return f({},e,{data:a.data});switch(a.method){case"credit":return f({},e,{data:p.credit});case"shop":return f({},e,{data:p.shop});case"atm":return f({},e,{data:p.atm});default:throw new Error("No action is provided.")}}var d=Object(n.createContext)({}),h=t(16),b=t.n(h),g=t(17),v=t.n(g),y=t(18),N=t.n(y),x=[{name:"credit",texts:["\u4fe1\u7528\u5361","\u5237\u5361"],img:b.a},{name:"shop",texts:["\u8d85\u5546\u4ee3\u78bc","\u7e73\u8cbb"],img:v.a},{name:"atm",texts:["ATM","\u8f49\u5e33"],img:N.a}];function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function w(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(t,!0).forEach(function(a){Object(s.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var j=function(){var e=Object(n.useContext)(d),a=e.paymentData,t=(e.paymentDispatcher,Object(n.useState)(a.data)),c=Object(i.a)(t,2),l=(c[0],c[1]),m=function(e){var a=e.target.value,t=e.target.name;l(function(e){var n=t.split("-")[0],r=t.split("-")[1];if(Array.isArray(e[n])&&r){if(parseInt(r)+1<=3&&4===a.length)document.querySelector('input[name="'.concat(n+"-"+(parseInt(r)+1),'"]')).focus();var c=e[n];return c[r]=a,w({},e,{creditNumber:c})}return w({},e,Object(s.a)({},n,a))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u4ed8\u6b3e\u4eba\u4fe1\u7bb1"),r.a.createElement("input",{type:"email",name:"email",onChange:m})),r.a.createElement("div",{className:"form-credit form-group"},r.a.createElement("label",null," \u4fe1\u7528\u5361\u5361\u865f\uff1a"),r.a.createElement("input",{type:"text",name:"creditNumber-0",autoComplete:"off",maxLength:"4",onChange:m}),r.a.createElement("span",{className:"separater"}," - "),r.a.createElement("input",{type:"text",name:"creditNumber-1",autoComplete:"off",maxLength:"4",onChange:m}),r.a.createElement("span",{className:"separater"}," - "),r.a.createElement("input",{type:"text",name:"creditNumber-2",autoComplete:"off",maxLength:"4",onChange:m}),r.a.createElement("span",{className:"separater"}," - "),r.a.createElement("input",{type:"text",name:"creditNumber-3",autoComplete:"off",maxLength:"4",onChange:m}),r.a.createElement("span",{className:"visa"},"VISA")),r.a.createElement("div",{className:"form-expire form-group"},r.a.createElement("label",null," \u6709\u6548\u5e74\u6708\uff1a"),r.a.createElement("input",{type:"text",name:"expireMonth",placeholder:"MM",onChange:m,maxLength:"2"}),r.a.createElement("span",{className:"separater-expire"},"\u6708",r.a.createElement("span",null,"/  ")),r.a.createElement("input",{type:"text",placeholder:"YYYY",name:"expireYear",onChange:m,maxLength:"4"}),r.a.createElement("span",{className:"separater-expire"}," \u5e74 ")),r.a.createElement("div",{className:"form-expire form-group form-cvv"},r.a.createElement("label",null," \u80cc\u5f8c\u672b\u4e09\u78bc "),r.a.createElement("input",{type:"text",name:"cvv",onChange:m,placeholder:"CVV",maxLength:"3"})))},k=function(){var e=Object(n.useContext)(d),a=e.paymentData,t=(e.paymentDispatcher,Object(n.useState)(a.data)),c=Object(i.a)(t,2),l=c[0];c[1];Object(n.useEffect)(function(){console.log("useEffect",l)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u4ed8\u6b3e\u4eba\u4fe1\u7bb1 "),r.a.createElement("input",{type:"text",name:"email",onChange:function(){},placeholder:"Email"})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u9078\u64c7\u9280\u884c "),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"shop-family",value:"option1"}),r.a.createElement("label",{className:"form-check-label",for:"shop-family"},"\u5168\u5bb6")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"shop-7-11",value:"option2"}),r.a.createElement("label",{class:"form-check-label",for:"shop-7-11"},"7-11")))),r.a.createElement("ul",{className:"info-list"},r.a.createElement("li",null," 1.\u8acb\u53c3\u8003\u7e73\u8cbb\u6d41\u7a0b\uff1a\u5168\u5bb6\u30017-11\u3002"),r.a.createElement("li",null," 2.\u970024\u5c0f\u6642\u5167\u5b8c\u6210\u7e73\u8cbb\u624d\u7b97\u4ea4\u6613\u6210\u529f\u3002"),r.a.createElement("li",null," 3.\u7d50\u5e33\u91d1\u984d\u5df2\u542b\u8d85\u5546\u4ed8\u8cbb\u7684 18 \u5143\u624b\u7e8c\u8cbb\u3002")))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u4ed8\u6b3e\u4eba\u4fe1\u7bb1 "),r.a.createElement("input",{type:"text",name:"email",onChange:function(){},placeholder:"Email"})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u9078\u64c7\u9280\u884c "),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"shop-family",value:"option1"}),r.a.createElement("label",{class:"form-check-label",for:"shop-family"},"\u5168\u5bb6")),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"shop-7-11",value:"option2"}),r.a.createElement("label",{class:"form-check-label",for:"shop-7-11"},"7-11")))),r.a.createElement("ul",{className:"info-list"},r.a.createElement("li",null," 1.\u5982\u679c\u60a8\u6301\u6709\u4ee5\u4e0a\u91d1\u878d\u6a5f\u69cb\u767c\u884c\u4e4b\u91d1\u878d\u5361\uff0c\u53ef\u9078\u64c7\u8a72\u91d1\u878d\u6a5f\u69cb\u8f49\u5e33\u5e33\u865f\uff0c\u53ef\u9078\u64c7\u8a72\u91d1\u878d\u6a5f\u69cb\u8f49\u5e33\u5e33\u865f\uff0c\u53ef\u4eab\u7701\u4e0b\u9280\u884c\u8f49\u5e33\u624b\u7e8c\u8cbb\u3002"),r.a.createElement("li",null," 2.\u970024\u5c0f\u6642\u5167\u5b8c\u6210\u7e73\u8cbb\u624d\u7b97\u4ea4\u6613\u6210\u529f\u3002")))},P=function(e){var a=e.payment;return r.a.createElement(r.a.Fragment,null,function(){switch(a){case"credit":return r.a.createElement(j,null);case"shop":return r.a.createElement(k,null);case"atm":return r.a.createElement(C,null)}}())},D={method:"",data:p[x[0].name]};var S=function(){var e=Object(n.useState)(x[0].name),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useReducer)(E,D),m=Object(i.a)(l,2),o=m[0],s=m[1];return Object(n.useEffect)(function(){s({method:t})},[t]),r.a.createElement(d.Provider,{value:{paymentDispatcher:s,paymentData:o}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row m-5"},r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"wrapper wrapper-payment "},r.a.createElement("div",{className:"wrapper-title"},"\u8acb\u9078\u64c7\u4ed8\u6b3e\u65b9\u5f0f"),r.a.createElement("div",{className:"wrapper-body"},r.a.createElement("ul",{className:"tab tab-method"},x.map(function(e,a){return r.a.createElement("li",{className:"card card-method ".concat(t===e.name?"active":""),onClick:function(){!function(e){c(e)}(e.name)},key:a},r.a.createElement("div",{className:"card-img"},r.a.createElement("img",{src:"".concat(e.img),alt:""})),r.a.createElement("div",{className:"card-title"},e.texts.map(function(e,a){return r.a.createElement("h6",{key:a},e)})))})),r.a.createElement("div",{className:"tab tab-method-page"},r.a.createElement(P,{payment:t})),r.a.createElement("div",{className:"btn btn-teal btn-block py-3 mt-4"},"\u78ba\u5b9a\u4ed8\u6b3e ($1500)")))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"wrapper wrapper-order p-3"},r.a.createElement("div",{className:"wrapper-title"},"\u6211\u7684\u8a02\u55ae"),r.a.createElement("ul",{className:"wrapper-body flex-column"},r.a.createElement("li",null,"\b \u6d41\u6d6a\u91d1\u5c6c\u53f2\u840a\u59c6\u93a7\u7532 x 1",r.a.createElement("span",{className:"price price-single"},"1150")),r.a.createElement("li",null,"\u6297\u9b54\u6212\u6307 x 1",r.a.createElement("span",{className:"price price-single"},"100")),r.a.createElement("li",null,"\u842c\u80fd\u85e5 x 3",r.a.createElement("span",{className:"price price-single"},"270")),r.a.createElement("li",null,"\u8ce2\u8005\u85e5\u6c34 x 1",r.a.createElement("span",{className:"price price-single"},"130"))),r.a.createElement("div",{className:"order-total"},r.a.createElement("span",{className:"text-teal pl-2"}," TWD "),r.a.createElement("span",{className:"pr-2 price price-total "},"1500 ")))))))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"PaymentFinish"))};t(28);var F=function(){return r.a.createElement(m.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:S}),r.a.createElement(o.a,{path:"/finish",exact:!0,component:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.fa27a6b3.chunk.js.map