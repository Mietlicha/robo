(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),i=n(7),c=n.n(i),a=(n(13),n(2)),s=n(3),l=n(5),h=n(4),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(o.jsx)("div",{children:t.map((function(e,n){return Object(o.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){e.searchfield;var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("hi",{children:" Oooooops, That is not goog"}):this.props.children}}]),n}(r.Component),v=(n(14),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:" Hello Robo friends"}),Object(o.jsx)(b,{searchChange:this.onSearchChange}),Object(o.jsx)(f,{children:Object(o.jsx)(j,{children:Object(o.jsx)(u,{robots:t})})})]}):Object(o.jsx)("h1",{children:"loading"})}}]),n}(r.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(15);c.a.render(Object(o.jsx)(v,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robo","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.b9cd345c.chunk.js.map