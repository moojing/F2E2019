(window["webpackJsonpweek4-payment"]=window["webpackJsonpweek4-payment"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/card-light.c4ed4c04.png"},18:function(e,a,t){e.exports=t.p+"static/media/shop-light.56e31c57.png"},19:function(e,a,t){e.exports=t.p+"static/media/ATM-light.b6736345.png"},22:function(e,a,t){e.exports=t(33)},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),m=t(10),s=t(8),i=t(6),o=Object(n.createContext)({}),p=t(17),u=t.n(p),f=t(18),E=t.n(f),b=t(19),d=t.n(b),h=[{name:"credit",texts:["\u4fe1\u7528\u5361","\u5237\u5361"],img:u.a,schema:{email:"",creditNumber:["","","",""],expireMonth:"",expireYear:"",cvv:""}},{name:"shop",texts:["\u8d85\u5546\u4ee3\u78bc","\u7e73\u8cbb"],img:E.a,schema:{email:"",shopName:"family"}},{name:"atm",texts:["ATM","\u8f49\u5e33"],img:d.a,schema:{email:"",bankName:"esun"}}],g=t(5);function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(t,!0).forEach(function(a){Object(g.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var y=function(e){var a=e.method,t=Object(n.useContext)(o),l=t.paymentData,c=t.paymentDispatcher,m=Object(n.useCallback)(function(e){var t=e(l.formData);c({method:a,formData:t})},[a,l,c]),s=function(e){var a=e.target.value,t=e.target.name;m(function(e){var n=t.split("-")[0],r=t.split("-")[1];if(Array.isArray(e[n])&&r){if(parseInt(r)+1<=3&&4===a.length)document.querySelector('input[name="'.concat(n+"-"+(parseInt(r)+1),'"]')).focus();var l=e[n];return l[r]=a,v({},e,{creditNumber:l})}return v({},e,Object(g.a)({},n,a))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u4ed8\u6b3e\u4eba\u4fe1\u7bb1"),r.a.createElement("input",{type:"email",name:"email",onChange:s})),r.a.createElement("div",{className:"form-credit form-group"},r.a.createElement("label",null," \u4fe1\u7528\u5361\u5361\u865f\uff1a"),r.a.createElement("input",{type:"text",name:"creditNumber-0",autoComplete:"off",maxLength:"4",onChange:s}),r.a.createElement("span",{className:"separater"}," - "),r.a.createElement("input",{type:"text",name:"creditNumber-1",autoComplete:"off",maxLength:"4",onChange:s}),r.a.createElement("span",{className:"separater"}," - "),r.a.createElement("input",{type:"text",name:"creditNumber-2",autoComplete:"off",maxLength:"4",onChange:s}),r.a.createElement("span",{className:"separater"}," - "),r.a.createElement("input",{type:"text",name:"creditNumber-3",autoComplete:"off",maxLength:"4",onChange:s}),r.a.createElement("span",{className:"visa"},"VISA")),r.a.createElement("div",{className:"form-expire form-group"},r.a.createElement("label",null," \u6709\u6548\u5e74\u6708\uff1a"),r.a.createElement("input",{type:"text",name:"expireMonth",placeholder:"MM",onChange:s,maxLength:"2"}),r.a.createElement("span",{className:"separater-expire"},"\u6708",r.a.createElement("span",null,"/  ")),r.a.createElement("input",{type:"text",placeholder:"YYYY",name:"expireYear",onChange:s,maxLength:"4"}),r.a.createElement("span",{className:"separater-expire"}," \u5e74 ")),r.a.createElement("div",{className:"form-expire form-group form-cvv"},r.a.createElement("label",null," \u80cc\u5f8c\u672b\u4e09\u78bc "),r.a.createElement("input",{type:"text",name:"cvv",onChange:s,placeholder:"CVV",maxLength:"3"})))};function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var O=function(e){var a=e.method,t=Object(n.useContext)(o),l=t.paymentData,c=t.paymentDispatcher,m=function(e){var t=e.target.name,n=e.target.value;!function(e){var t=e(l.formData);c({method:a,formData:t})}(function(e){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(t,!0).forEach(function(a){Object(g.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,Object(g.a)({},t,n))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u4ed8\u6b3e\u4eba\u4fe1\u7bb1 "),r.a.createElement("input",{type:"text",name:"email",onChange:m,placeholder:"Email"})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u9078\u64c7\u9280\u884c "),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"shopName",id:"shop-family",onChange:m,value:"family"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"shop-family"},"\u5168\u5bb6")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"shopName",id:"shop-7-11",onChange:m,value:"7-11"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"shop-7-11"},"7-11")))),r.a.createElement("ul",{className:"info-list"},r.a.createElement("li",null," 1.\u8acb\u53c3\u8003\u7e73\u8cbb\u6d41\u7a0b\uff1a\u5168\u5bb6\u30017-11\u3002"),r.a.createElement("li",null," 2.\u970024\u5c0f\u6642\u5167\u5b8c\u6210\u7e73\u8cbb\u624d\u7b97\u4ea4\u6613\u6210\u529f\u3002"),r.a.createElement("li",null," 3.\u7d50\u5e33\u91d1\u984d\u5df2\u542b\u8d85\u5546\u4ed8\u8cbb\u7684 18 \u5143\u624b\u7e8c\u8cbb\u3002")))};function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var j=function(e){var a=e.method,t=Object(n.useContext)(o),l=t.paymentData,c=t.paymentDispatcher,m=function(e){var t=e.target.name,n=e.target.value;!function(e){var t=e(l.formData);c({method:a,formData:t})}(function(e){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach(function(a){Object(g.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,Object(g.a)({},t,n))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u4ed8\u6b3e\u4eba\u4fe1\u7bb1 "),r.a.createElement("input",{type:"text",name:"email",onChange:m,placeholder:"Email"})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null," \u9078\u64c7\u9280\u884c "),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",onChange:m,type:"radio",name:"bankName",id:"bank-esun",value:"esun"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"bank-esun"},"\u7389\u5c71\u9280\u884c")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",onChange:m,type:"radio",name:"bankName",id:"bank-twbank",value:"twbank"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"bank-twbank"},"\u53f0\u7063\u9280\u884c")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",onChange:m,type:"radio",name:"bankName",id:"bank-twnew",value:"twnew"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"bank-twnew"},"\u53f0\u65b0\u9280\u884c")))),r.a.createElement("ul",{className:"info-list"},r.a.createElement("li",null," 1.\u5982\u679c\u60a8\u6301\u6709\u4ee5\u4e0a\u91d1\u878d\u6a5f\u69cb\u767c\u884c\u4e4b\u91d1\u878d\u5361\uff0c\u53ef\u9078\u64c7\u8a72\u91d1\u878d\u6a5f\u69cb\u8f49\u5e33\u5e33\u865f\uff0c\u53ef\u9078\u64c7\u8a72\u91d1\u878d\u6a5f\u69cb\u8f49\u5e33\u5e33\u865f\uff0c\u53ef\u4eab\u7701\u4e0b\u9280\u884c\u8f49\u5e33\u624b\u7e8c\u8cbb\u3002"),r.a.createElement("li",null," 2.\u970024\u5c0f\u6642\u5167\u5b8c\u6210\u7e73\u8cbb\u624d\u7b97\u4ea4\u6613\u6210\u529f\u3002")))},k=function(e){var a=e.payment;return r.a.createElement(r.a.Fragment,null,function(){switch(a){case"credit":return r.a.createElement(y,{method:a});case"shop":return r.a.createElement(O,{method:a});case"atm":return r.a.createElement(j,{method:a});default:return r.a.createElement("h1",null," No Method Has Been Selected.")}}())};var D=Object(i.e)(function(e){e.history;var a=Object(n.useState)(h[0]),t=Object(m.a)(a,2),l=t[0],c=t[1],i=Object(n.useContext)(o),p=(i.paymentData,i.paymentDispatcher);return Object(n.useEffect)(function(){p({method:l.name,formData:l.schema})},[l]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row m-5"},r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"wrapper wrapper-payment "},r.a.createElement("div",{className:"wrapper-title"},"\u8acb\u9078\u64c7\u4ed8\u6b3e\u65b9\u5f0f"),r.a.createElement("div",{className:"wrapper-body"},r.a.createElement("ul",{className:"tab tab-method"},h.map(function(e,a){return r.a.createElement("li",{className:"card card-method ".concat(l.name===e.name?"active":""),onClick:function(){!function(e){var a=h.filter(function(a){return a.name===e})[0];c(a)}(e.name)},key:a},r.a.createElement("div",{className:"card-img"},r.a.createElement("img",{src:"".concat(e.img),alt:""})),r.a.createElement("div",{className:"card-title"},e.texts.map(function(e,a){return r.a.createElement("h6",{key:a},e)})),r.a.createElement("div",{className:"frame frame-left-top"}," "),r.a.createElement("div",{className:"frame frame-right-top"}," "),r.a.createElement("div",{className:"frame frame-right-bottom"}," "),r.a.createElement("div",{className:"frame frame-left-bottom"}," "))})),r.a.createElement("div",{className:"tab tab-method-page"},r.a.createElement(k,{payment:l.name})),r.a.createElement(s.b,{to:"/finish",className:"btn btn-teal btn-block py-3 mt-4"},"\u78ba\u5b9a\u4ed8\u6b3e ($1500)")))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"wrapper wrapper-order p-3"},r.a.createElement("div",{className:"wrapper-title"},"\u6211\u7684\u8a02\u55ae"),r.a.createElement("ul",{className:"wrapper-body flex-column"},r.a.createElement("li",null,"\b \u6d41\u6d6a\u91d1\u5c6c\u53f2\u840a\u59c6\u93a7\u7532 x 1",r.a.createElement("span",{className:"price price-single text-teal-light"},"1150")),r.a.createElement("li",null,"\u6297\u9b54\u6212\u6307 x 1",r.a.createElement("span",{className:"price price-single text-teal-light"},"100")),r.a.createElement("li",null,"\u842c\u80fd\u85e5 x 3",r.a.createElement("span",{className:"price price-single text-teal-light"},"270")),r.a.createElement("li",null,"\u8ce2\u8005\u85e5\u6c34 x 1",r.a.createElement("span",{className:"price price-single text-teal-light"},"130"))),r.a.createElement("div",{className:"order-total"},r.a.createElement("span",{className:"text-teal pl-2"}," TWD "),r.a.createElement("span",{className:"pr-2 price price-total "},"1500 "))))))}),C=Object(i.e)(function(e){var a=e.history,t=Object(n.useContext)(o);t.paymentData,t.paymentDispatcher;Object(n.useEffect)(function(){var e=setTimeout(function(){l.current.style.opacity="0",l.current.style.display="none"},2e3);return function(){clearTimeout(e)}});var l=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"my-5 row justify-content-center"},r.a.createElement("div",{className:"msg-successful",ref:l},"SUCCESS!"),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"wrapper wrapper-finish"},r.a.createElement("div",{className:"wrapper-title text-teal-light mt-3"}," [ \u8cfc\u8cb7\u6210\u529f\uff01] "),r.a.createElement("div",{className:"wrapper-subtitle  text-teal-light"}," \u611f\u8b1d\u60a8\u7684\u8cfc\u8cb7 "),r.a.createElement("div",{className:"wrapper-body"},r.a.createElement("li",null,r.a.createElement("span",{className:"price-title"}," \u8a02\u55ae\u7de8\u865f\uff1a"),r.a.createElement("span",{className:"price price-single"},"1150")),r.a.createElement("li",null,r.a.createElement("span",{className:"price-title"}," \u8a02\u8cfc\u4eba\uff1a"),r.a.createElement("span",{className:"price price-single"},"100")),r.a.createElement("li",null,r.a.createElement("span",{className:"price-title"}," \u8a02\u8cfc\u4ebaEmail\uff1a"),r.a.createElement("span",{className:"price price-single"},"270")),r.a.createElement("li",null,r.a.createElement("span",{className:"price-title"}," \u4ed8\u6b3e\u72c0\u614b\uff1a"),r.a.createElement("span",{className:"price price-single"},"\u5df2\u4ed8\u6e05")),r.a.createElement("li",null,r.a.createElement("span",{className:"price-title"}," \u4ed8\u6b3e\u65b9\u5f0f\uff1a"),r.a.createElement("span",{className:"price price-single"},"\u672b\u56db\u78bc 1234 Visa\u4fe1\u7528\u5361")),r.a.createElement("div",{className:"devider bg-teal"}," "),r.a.createElement("li",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"price-title"}," \b \u6d41\u6d6a\u91d1\u5c6c\u53f2\u840a\u59c6\u93a7\u7532 x 1 "),r.a.createElement("span",{className:"price price-single text-teal-light "},"1150")),r.a.createElement("li",{className:"d-flex  justify-content-between"},r.a.createElement("span",{className:"price-title"}," \u6297\u9b54\u6212\u6307 x 1"),r.a.createElement("span",{className:"price price-single text-teal-light"},"100")),r.a.createElement("li",{className:"d-flex  justify-content-between"},r.a.createElement("span",{className:"price-title"}," \b \u842c\u80fd\u85e5 x 3 "),r.a.createElement("span",{className:"price price-single text-right text-teal-light"},"270")),r.a.createElement("li",{className:"d-flex justify-content-between "},r.a.createElement("span",{className:"price-title"}," \b  \u8ce2\u8005\u85e5\u6c34 x 1  "),r.a.createElement("span",{className:"price price-single text-teal-light"},"130")),r.a.createElement("div",{className:"devider bg-teal"}),r.a.createElement("li",{className:"d-flex justify-content-between "},r.a.createElement("span",{className:"pl-2 price-title text-teal-light"}," \b TWD  "),r.a.createElement("span",{className:"pr-2 price price-total text-teal-light"},"130"))),r.a.createElement("div",{className:"wrapper-footer"},r.a.createElement("div",{className:"btn-order-group"},r.a.createElement("div",{className:"btn btn-order",onClick:function(){a.goBack()}}," \u56de\u9996\u9801 "),r.a.createElement("div",{className:"btn btn-order"}," \u5217\u5370\u6b64\u9801\u9762 ")))))))});function P(e,a){return console.log("action: ",a),{method:a.method,formData:a.formData}}t(32);var S=function(e,a){var t;return function(){var n=this,r=arguments,l=function(){return e.apply(n,r)};clearTimeout(t),t=setTimeout(l,a)}},F={method:h[0].name,formData:h[0].schema};var T=function(){var e=Object(n.useReducer)(P,F),a=Object(m.a)(e,2),t=a[0],l=a[1];return l=S(l,800),console.log("App"),r.a.createElement(s.a,null,r.a.createElement(o.Provider,{value:{paymentDispatcher:l,paymentData:t}},r.a.createElement(i.a,{path:"/",exact:!0,component:D}),r.a.createElement(i.a,{path:"/finish",component:C})))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.80218310.chunk.js.map