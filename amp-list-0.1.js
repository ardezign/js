(self.AMP=self.AMP||[]).push({n:"amp-list",v:"1496670637476",f:(function(AMP){var f;function g(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};var h=Object.prototype.toString;Date.now();self.log=self.log||{user:null,dev:null};var k=self.log;function l(){if(k.user)return k.user;throw Error("failed to call initLogConstructor");};var m,n;
function p(a){if("string"==typeof a){m||(m=self.document.createElement("a"),n=self.UrlCache||(self.UrlCache=Object.create(null)));var b=n[a];if(b)a=b;else{b=m;b.href=a;b.protocol||(b.href=b.href);var c={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=c.hostname;c.origin=
b.origin&&"null"!=b.origin?b.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;a=n[a]=c}}(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b}
function q(a,b){var c;c=void 0===c?"source":c;l().assert(null!=a,"%s %s must be available",b,c);var d=a;l().assert(p(d)||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d);return d};function r(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&t(b,"url-replace")?u(b,"url-replace"):null)return b}b=v(a);b=v(b);b=b.isSingleDoc()?b.win:b;return u(b,"url-replace")}function w(a,b){a=a.__AMP_TOP||a;return u(a,b)}function v(a){return a.nodeType?w((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function u(a,b){t(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function t(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};function x(a){for(;a.firstChild;)a.removeChild(a.firstChild)};function y(a,b,c){var d=q(b.getAttribute("src"),b);return r(a).expandAsync(d).then(function(c){var e={};b.hasAttribute("credentials")?e.credentials=b.getAttribute("credentials"):e.requireAmpResponseSourceOrigin=!1;return w(a.win,"batched-xhr").fetchJson(c,e)}).then(function(a){if(null==a)throw Error("Response is undefined.");var b;b=c||".";if("."!=b){b=b.split(".");for(var d=0;d<b.length;d++){var e=b[d];if(!e){a=void 0;break}if("[object Object]"!==h.call(a)||void 0===a[e]||null==a||"object"!=typeof a||
!Object.prototype.hasOwnProperty.call(a,e)){a=void 0;break}a=a[e]}}b=a;return b})};function z(a){AMP.BaseElement.apply(this,arguments)}g(z,AMP.BaseElement);f=z.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};f.buildCallback=function(){this.a=this.win.document.createElement("div");this.applyFillContent(this.a,!0);this.element.appendChild(this.a);this.a.hasAttribute("role")||this.a.setAttribute("role","list");this.element.hasAttribute("aria-live")||this.element.setAttribute("aria-live","polite")};
f.reconstructWhenReparented=function(){return!1};f.layoutCallback=function(){return A(this)};f.mutatedAttributesCallback=function(a){void 0!=a.src&&A(this)};f.getDynamicElementContainers=function(){return[this.a]};
function A(a){var b=a.element.getAttribute("items")||"items";return y(a.getAmpDoc(),a.element,b).then(function(c){l().assert(Array.isArray(c),'Response must contain an array at "%s". %s',b,a.element);return w(a.win,"templates").findAndRenderTemplateArray(a.element,c).then(a.b.bind(a))},function(a){throw l().createError("Error fetching amp-list",a);})}
f.b=function(a){var b=this;x(this.a);a.forEach(function(a){a.hasAttribute("role")||a.setAttribute("role","listitem");b.a.appendChild(a)});this.getVsync().measure(function(){var a=b.a.scrollHeight;a>b.element.offsetHeight&&b.attemptChangeHeight(a).catch(function(){})})};AMP.registerElement("amp-list",z);
})});
//# sourceMappingURL=amp-list-0.1.js.map