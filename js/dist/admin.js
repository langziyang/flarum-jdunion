(()=>{var n={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},d:(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},e={};(()=>{"use strict";n.r(e);const t=flarum.core.compat["admin/app"];var i=n.n(t);i().initializers.add("jinber-jdunion",(function(){i().extensionData.for("jinber-jdunion").registerSetting({setting:"jinber-jdunion.jdunion_appkey",label:i().translator.trans("jinber-jdunion.admin.setting.appkey"),type:"string",help:i().translator.trans("jinber-jdunion.admin.setting.appkey_help",{a:m("a",{href:"https://union.jd.com/openplatform/console/appmng"})})}).registerSetting({setting:"jinber-jdunion.jdunion_appsecretkey",label:i().translator.trans("jinber-jdunion.admin.setting.appsecretkey"),type:"string"}).registerSetting({setting:"jinber-jdunion.jdunion_pid",label:i().translator.trans("jinber-jdunion.admin.setting.pid"),type:"string",help:i().translator.trans("jinber-jdunion.admin.setting.pid_help",{a:m("a",{href:"https://union.jd.com/manager/promotionSite"})})}).registerSetting({setting:"jinber-jdunion.jdunion_eid",label:i().translator.trans("jinber-jdunion.admin.setting.eid"),type:"string",help:i().translator.trans("jinber-jdunion.admin.setting.eid_help",{a:m("a",{href:"https://union.jd.com/manager/promotionSite"})})}).registerSetting({setting:"jinber-jdunion.count_page",label:i().translator.trans("jinber-jdunion.admin.setting.count"),type:"number",help:i().translator.trans("jinber-jdunion.admin.setting.count_help")})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map