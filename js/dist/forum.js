(()=>{var t={n:a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return t.d(e,{a:e}),e},d:(a,e)=>{for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a);const e=flarum.core.compat["common/app"];t.n(e)().initializers.add("jinber/flarum-jdunion",(function(){console.log("[jinber/flarum-jdunion] Hello, forum and admin!")}));const n=flarum.core.compat["forum/app"];var r=t.n(n);const o=flarum.core.compat["forum/components/DiscussionListItem"];var s=t.n(o);const i=flarum.core.compat["common/extend"],d=flarum.core.compat["forum/components/CommentPost"];var c=t.n(d);r().initializers.add("jinber_flarum-jdunion",(function(){(0,i.extend)(s().prototype,"oncreate",(function(t){if("index"===app.current.data.routeName&&app.forum.data.attributes.products){var a=app.forum.data.attributes.products,e=a[Math.floor(Math.random()*a.length)];e&&this.attrs.discussion.data.id%5==0&&this.element.parentElement.insertAdjacentHTML("afterend","<div class='product_area'>\n      <a href='"+e.link+"' target='_blank'>\n        <span class=\"product_ad\">Ad</span>\n        <span class='product_discount'>券后:&yen;"+e.finallyPrice+"</span>\n        "+e.name+"\n      </a>\n    </div>")}})),(0,i.extend)(c().prototype,"oncreate",(function(t){if("discussion"===app.current.data.routeName&&app.forum.data.attributes.products){var a=app.forum.data.attributes.products;if(a.length>0){this.attrs.post.data.id;var e=this.attrs.post.data.attributes.number;if(1===e||e%5==0){console.log(this.element);var n=a[Math.floor(Math.random()*a.length)];this.element.insertAdjacentHTML("afterend","<div class='product_area'>\n      <a href='"+n.link+"' target='_blank'>\n        <span class=\"product_ad\">Ad</span>\n        <span class='product_discount'>券后:&yen;"+n.finallyPrice+"</span>\n        "+n.name+"\n      </a>\n    </div>")}}}}))}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map