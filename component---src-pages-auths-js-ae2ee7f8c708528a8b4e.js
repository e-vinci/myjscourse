(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[941],{840:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/2391d/logo_vinci.png","srcSet":"/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/47ee7/logo_vinci.png 6w,\\n/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/29278/logo_vinci.png 12w,\\n/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/2391d/logo_vinci.png 24w,\\n/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/fcdb9/logo_vinci.png 48w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/eee53/logo_vinci.webp 6w,\\n/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/30aa9/logo_vinci.webp 12w,\\n/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/4e704/logo_vinci.webp 24w,\\n/myjscourse/static/309e0fb8b4416829acfed4f7a501206b/e78b1/logo_vinci.webp 48w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":"24","height":24}')},3588:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(7294),a=n(9694),c=n(8510),o=n(2137),s=n(7757),u=n.n(s),i=n(7123),l=n(5444),p=n(9285),f=function(){var e=(0,r.useState)(!1),t=e[0],a=e[1];(0,r.useEffect)((function(){t||c()}));var c=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.zB)();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?((0,l.navigate)("/auths/project-page"),null):r.createElement("div",null,r.createElement("p",null,"Vous pouvez vous logger en cliquant",r.createElement(l.Link,{to:"/auths/login"},r.createElement(p.S,{src:"../../../images/logo_vinci.png",alt:"",width:"24",height:"24",__imageData:n(840)}),"ici"),"ou dans le menu."))};function h(e,t,n,r){return g.apply(this,arguments)}function g(){return(g=(0,o.Z)(u().mark((function e(t,n,r,a){var c,o,s,i,l,p,f;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n="get"),c=new Headers,(o={}).method=n,r&&(s="Bearer "+r,c.append("Authorization",s)),a&&(o.body=JSON.stringify(a)),"post"!==n.toLowerCase()&&"patch"!==n.toLowerCase()&&"put"!==n.toLowerCase()||c.append("Content-Type","application/json"),o.headers=c,i="https://myjscourse-api.herokuapp.com/api/"+t,e.prev=9,e.next=12,fetch(i,o);case 12:if((l=e.sent).ok){e.next=25;break}return p=" Error code : "+l.status+" : "+l.statusText+"/nMessage : ",e.next=17,l.text();case 17:if(f=e.sent,p+=f,console.error("fetch() error",p),!(p.search("expired")>-1)){e.next=24;break}return e.next=23,m();case 23:return e.abrupt("return",e.sent);case 24:throw new Error(p);case 25:return e.next=27,l.json();case 27:return e.abrupt("return",e.sent);case 30:throw e.prev=30,e.t0=e.catch(9),e.t0;case 33:case"end":return e.stop()}}),e,null,[[9,30]])})))).apply(this,arguments)}var m=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Yf)();case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.useState)(void 0),t=e[0],n=e[1];(0,r.useEffect)((function(){a()}),[]);var a=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("projectgroups/default/public","get");case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("getData:error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.createElement("div",null,r.createElement("h3",null,"Project Page"),r.createElement("p",null,"Current project : ",JSON.stringify(t)))},b=function(){return r.createElement("div",null,r.createElement("p",null,"Vous pouvez vous logger en cliquant",r.createElement(l.Link,{href:"#",to:"/auths/login"},r.createElement(p.S,{src:"../../../images/logo_vinci.png",alt:"",width:"24",height:"24",__imageData:n(840)}),"ici"),"ou dans le menu."))},d=function(){return(0,i.w7)(),(0,l.navigate)("/"),r.createElement("h3",null,"Logout")},w=n(9756),y=function(e){var t=e.component,n=e.location,a=(0,w.Z)(e,["component","location"]);return"undefined"==typeof window?null:(0,i.vW)()||"/auths/login"===n.pathname?r.createElement(t,a):((0,l.navigate)("/auths/login"),null)},E=function(){return r.createElement(c.Z,null,r.createElement(a.Router,null,r.createElement(f,{path:"/auths/login"}),r.createElement(b,{path:"auths/logintemp"}),r.createElement(y,{path:"auths/logout",component:d}),r.createElement(y,{path:"auths/project-page",component:v})))}}}]);
//# sourceMappingURL=component---src-pages-auths-js-ae2ee7f8c708528a8b4e.js.map