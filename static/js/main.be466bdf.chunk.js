(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(81),l=a.n(o),c=(a(98),a(14)),m=a(5),s=a(83),u=a(84),i=a.n(u),d=a(210),p=a(21),f=a(29),b="ADD_ITEM";var E={marks:[],count:3,delete:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(f.a)(e.marks).find(function(e){return e.title.toLowerCase()===t.marks.title.toLowerCase()})?Object(p.a)({},e,{marks:[].concat(Object(f.a)(e.marks),[t.marks]),delete:!0}):Object(p.a)({},e,{marks:[].concat(Object(f.a)(e.marks),[t.marks]),delete:!1});case"REMOVE_ITEM":var a=Object(f.a)(e.marks);return a.splice(t.payload,1),Object(p.a)({},e,{marks:a,delete:!1});case"RESET_ITEM":return Object(p.a)({},e,{delete:!1});case"TIMER":return e.count>0?e.count--:0===e.count&&(e.count=3),Object(p.a)({},e,{count:e.count});default:return e}};var v=Object(m.c)({marks:k,form:d.a.plugin({marks:function(e,t){switch(t.type){case b:return;default:return e}}})}),g=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),h=Object(m.d)(v,g,Object(m.a)(s.a,i.a));h.subscribe(function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(h.getState())});var y,O,N=h,j=a(86),I=a(87),w=a(90),M=a(88),_=a(91),C=a(209),T=a(208),S=function(e){return!e&&"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},R=(y=3,O=75,function(e){return e&&(e.length>O||e.length<y)&&"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c ".concat(O," \u0438 \u043d\u0435 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 ").concat(y)}),x=a(89),D=a.n(x),J=(a(165),a(166),function(e){var t=e.input,a=e.type,n=e.name,o=e.placeholder,l=e.className,c=e.meta,m=c.touched,s=c.error;return r.a.createElement("div",{className:"form-row-input"},r.a.createElement("input",Object.assign({},t,{className:"".concat(m&&s?"form-control is-invalid":l),placeholder:o,type:a,name:n})),m&&s&&r.a.createElement("span",{className:"error"},s))}),z=function(e){var t=e.input,a=e.placeholder,n=e.name,o=e.className;return r.a.createElement("div",{className:"form-row-input"},r.a.createElement(D.a,Object.assign({mask:[/\d/,/\d/,".",/\d/,/\d/],name:n},t,{keepCharPositions:!0,placeholder:a,className:o})))},L=Object(T.a)({form:"marks"})(function(e){var t=e.addItem,a=(e.changeData,e.handleSubmit),n=(e.time,e.deleteMark),o=e.removeItem,l=e.marks,c=e.count,m=e.timer,s=e.resetItem,u=l.length-1;return console.log(u),console.log("deleteMark-",n),console.log("reset-",s),r.a.createElement("form",{className:"form",onSubmit:a(t)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),r.a.createElement(C.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",className:"form-control",component:J,validate:[S,R],name:"title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0428\u0438\u0440\u043e\u0442\u0430"),r.a.createElement(C.a,{type:"text",className:"form-control",placeholder:"__ . __",name:"latitude",validate:S,component:z})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0414\u043e\u043b\u0433\u043e\u0442\u0430"),r.a.createElement(C.a,{type:"text",className:"form-control",placeholder:"__ . __",name:"longitude",validate:S,component:z})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-5"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0430\u0440\u043a\u0435\u0440"),r.a.createElement("button",{type:"button",onClick:function(){return setInterval(m(),1e3)},className:"btn btn-primary mb-5"},"\u0422\u0430\u0439\u043c\u0435\u0440"),r.a.createElement("div",null,c),n&&r.a.createElement("div",null,r.a.createElement("div",null," \u041c\u0430\u0440\u043a\u0435\u0440 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0435\u0433\u043e ? "),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary mb-5 mr-3",onClick:function(){return setTimeout(o,3e3,u)}},"\u0414\u0430"),r.a.createElement("button",{type:"button",className:"btn btn-primary mb-5",onClick:function(){return s()}},"\u041d\u0435\u0442"))))}),P=a(41),V=(a(204),function(e){var t=e.marks[e.marks.length-1];return console.log(t&&[t.latitude,t.longitude]),r.a.createElement(P.YMaps,null,r.a.createElement(P.Map,{state:{center:[55.75,37.57],zoom:9,controls:["zoomControl","fullscreenControl"]},width:500,height:500,modules:["control.ZoomControl","control.FullscreenControl"]},e.marks.map(function(e,t){return r.a.createElement(P.Placemark,{key:t,geometry:[e.latitude,e.longitude],options:{preset:"islands#nightDotIcon"},properties:{iconCaption:e.title}})})))}),A=(a(205),function(e){function t(){return Object(j.a)(this,t),Object(w.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper d-flex"},r.a.createElement("div",{className:"col"},r.a.createElement(L,this.props)),r.a.createElement("div",{className:"col"},r.a.createElement(V,this.props)))}}]),t}(n.Component)),B=Object(c.b)(function(e){return{marks:e.marks.marks,time:e.marks.count,deleteMark:e.marks.delete,count:e.marks.count}},function(e){return{addItem:function(){return e(function(e,t){var a=t().form.marks,n=t();console.log(n);var r={id:+t().marks.marks.length+1,title:a.values.title,latitude:+a.values.latitude,longitude:+a.values.longitude};e({type:b,marks:r})})},removeItem:function(t){return e({type:"REMOVE_ITEM",payload:t})},resetItem:function(){return e({type:"RESET_ITEM"})},timer:function(){return e({type:"TIMER"})}}})(A),F=(a(206),document.getElementById("root"));l.a.render(r.a.createElement(c.a,{store:N},r.a.createElement(B,null)),F)},93:function(e,t,a){e.exports=a(207)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.be466bdf.chunk.js.map