webpackJsonp([1],{183:function(t,a,e){"use strict";var n=e(26),s=e(309),r=e(301),o=e(308),i=e.n(o);n.a.use(i.a),n.a.use(s.a),a.a=new s.a({routes:[{path:"/",name:"Start",component:r.a},{path:"/:package",component:r.a}]})},185:function(t,a,e){"use strict";function n(t){e(284)}var s=e(33),r=e(302),o=e(6),i=n,c=e.i(o.a)(s.a,r.a,r.b,!1,i,null,null);a.a=c.exports},205:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(26),s=e(185),r=e(183),o=e(184),i=e.n(o);n.a.use(i.a,{id:"UA-92766713-2",router:r.a}),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},206:function(t,a,e){"use strict";var n=e(0),s=e.n(n);e.d(a,"c",function(){return r}),e.d(a,"d",function(){return o}),e.d(a,"e",function(){return i}),e.d(a,"a",function(){return c}),e.d(a,"b",function(){return l});var r=function(t){return s()(t).format("YYYY")},o=function(t){return s()(t).format("MMM YYYY")},i=function(t){return s()(t).format("GGGG-[W]WW")},c=function(t){return s()(t).format("YYYY-MM-DD")},l=function(t){return s()(t).format("Do MMMM YYYY")}},207:function(t,a,e){"use strict";function n(t,a){return t.indexOf(a)<0&&t.push(a),t}a.a=n,e.d(a,"b",function(){return s});var s=function(t,a){return t.reduce(function(t,e){return t.indexOf(a(e.day))<0&&t.push(a(e.day)),t},[]).map(function(e){return{date:e,downloads:t.filter(function(t){return a(t.day)===e}).map(function(t){return t.downloads}).reduce(function(t,a){return t+a})}}).map(function(t){return t.downloads})}},283:function(t,a){},284:function(t,a){},285:function(t,a){},286:function(t,a){},287:function(t,a){},288:function(t,a){},289:function(t,a,e){function n(t){return e(s(t))}function s(t){var a=r[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var r={"./af":58,"./af.js":58,"./ar":65,"./ar-dz":59,"./ar-dz.js":59,"./ar-kw":60,"./ar-kw.js":60,"./ar-ly":61,"./ar-ly.js":61,"./ar-ma":62,"./ar-ma.js":62,"./ar-sa":63,"./ar-sa.js":63,"./ar-tn":64,"./ar-tn.js":64,"./ar.js":65,"./az":66,"./az.js":66,"./be":67,"./be.js":67,"./bg":68,"./bg.js":68,"./bm":69,"./bm.js":69,"./bn":70,"./bn.js":70,"./bo":71,"./bo.js":71,"./br":72,"./br.js":72,"./bs":73,"./bs.js":73,"./ca":74,"./ca.js":74,"./cs":75,"./cs.js":75,"./cv":76,"./cv.js":76,"./cy":77,"./cy.js":77,"./da":78,"./da.js":78,"./de":81,"./de-at":79,"./de-at.js":79,"./de-ch":80,"./de-ch.js":80,"./de.js":81,"./dv":82,"./dv.js":82,"./el":83,"./el.js":83,"./en-au":84,"./en-au.js":84,"./en-ca":85,"./en-ca.js":85,"./en-gb":86,"./en-gb.js":86,"./en-ie":87,"./en-ie.js":87,"./en-il":88,"./en-il.js":88,"./en-nz":89,"./en-nz.js":89,"./eo":90,"./eo.js":90,"./es":93,"./es-do":91,"./es-do.js":91,"./es-us":92,"./es-us.js":92,"./es.js":93,"./et":94,"./et.js":94,"./eu":95,"./eu.js":95,"./fa":96,"./fa.js":96,"./fi":97,"./fi.js":97,"./fo":98,"./fo.js":98,"./fr":101,"./fr-ca":99,"./fr-ca.js":99,"./fr-ch":100,"./fr-ch.js":100,"./fr.js":101,"./fy":102,"./fy.js":102,"./gd":103,"./gd.js":103,"./gl":104,"./gl.js":104,"./gom-latn":105,"./gom-latn.js":105,"./gu":106,"./gu.js":106,"./he":107,"./he.js":107,"./hi":108,"./hi.js":108,"./hr":109,"./hr.js":109,"./hu":110,"./hu.js":110,"./hy-am":111,"./hy-am.js":111,"./id":112,"./id.js":112,"./is":113,"./is.js":113,"./it":114,"./it.js":114,"./ja":115,"./ja.js":115,"./jv":116,"./jv.js":116,"./ka":117,"./ka.js":117,"./kk":118,"./kk.js":118,"./km":119,"./km.js":119,"./kn":120,"./kn.js":120,"./ko":121,"./ko.js":121,"./ky":122,"./ky.js":122,"./lb":123,"./lb.js":123,"./lo":124,"./lo.js":124,"./lt":125,"./lt.js":125,"./lv":126,"./lv.js":126,"./me":127,"./me.js":127,"./mi":128,"./mi.js":128,"./mk":129,"./mk.js":129,"./ml":130,"./ml.js":130,"./mr":131,"./mr.js":131,"./ms":133,"./ms-my":132,"./ms-my.js":132,"./ms.js":133,"./mt":134,"./mt.js":134,"./my":135,"./my.js":135,"./nb":136,"./nb.js":136,"./ne":137,"./ne.js":137,"./nl":139,"./nl-be":138,"./nl-be.js":138,"./nl.js":139,"./nn":140,"./nn.js":140,"./pa-in":141,"./pa-in.js":141,"./pl":142,"./pl.js":142,"./pt":144,"./pt-br":143,"./pt-br.js":143,"./pt.js":144,"./ro":145,"./ro.js":145,"./ru":146,"./ru.js":146,"./sd":147,"./sd.js":147,"./se":148,"./se.js":148,"./si":149,"./si.js":149,"./sk":150,"./sk.js":150,"./sl":151,"./sl.js":151,"./sq":152,"./sq.js":152,"./sr":154,"./sr-cyrl":153,"./sr-cyrl.js":153,"./sr.js":154,"./ss":155,"./ss.js":155,"./sv":156,"./sv.js":156,"./sw":157,"./sw.js":157,"./ta":158,"./ta.js":158,"./te":159,"./te.js":159,"./tet":160,"./tet.js":160,"./tg":161,"./tg.js":161,"./th":162,"./th.js":162,"./tl-ph":163,"./tl-ph.js":163,"./tlh":164,"./tlh.js":164,"./tr":165,"./tr.js":165,"./tzl":166,"./tzl.js":166,"./tzm":168,"./tzm-latn":167,"./tzm-latn.js":167,"./tzm.js":168,"./ug-cn":169,"./ug-cn.js":169,"./uk":170,"./uk.js":170,"./ur":171,"./ur.js":171,"./uz":173,"./uz-latn":172,"./uz-latn.js":172,"./uz.js":173,"./vi":174,"./vi.js":174,"./x-pseudo":175,"./x-pseudo.js":175,"./yo":176,"./yo.js":176,"./zh-cn":177,"./zh-cn.js":177,"./zh-hk":178,"./zh-hk.js":178,"./zh-tw":179,"./zh-tw.js":179};n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=289},295:function(t,a,e){"use strict";var n=e(34),s=e(6),r=e.i(s.a)(n.a,void 0,void 0,!1,null,null,null);a.a=r.exports},296:function(t,a,e){"use strict";function n(t){e(283)}var s=e(35),r=e(305),o=e(6),i=n,c=e.i(o.a)(s.a,r.a,r.b,!1,i,"data-v-4cc47534",null);a.a=c.exports},297:function(t,a,e){"use strict";function n(t){e(285)}var s=e(36),r=e(303),o=e(6),i=n,c=e.i(o.a)(s.a,r.a,r.b,!1,i,null,null);a.a=c.exports},298:function(t,a,e){"use strict";function n(t){e(286)}var s=e(37),r=e(306),o=e(6),i=n,c=e.i(o.a)(s.a,r.a,r.b,!1,i,null,null);a.a=c.exports},299:function(t,a,e){"use strict";var n=e(38),s=e(6),r=e.i(s.a)(n.a,void 0,void 0,!1,null,null,null);a.a=r.exports},300:function(t,a,e){"use strict";function n(t){e(287)}var s=e(39),r=e(307),o=e(6),i=n,c=e.i(o.a)(s.a,r.a,r.b,!1,i,null,null);a.a=c.exports},301:function(t,a,e){"use strict";function n(t){e(288)}var s=e(40),r=e(304),o=e(6),i=n,c=e.i(o.a)(s.a,r.a,r.b,!1,i,null,null);a.a=c.exports},302:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("j-header"),t._v(" "),e("router-view"),t._v(" "),e("j-footer"),t._v(" "),e("cookie-law",{attrs:{theme:"dark-lime"}})],1)},s=[]},303:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("span",[t._v(" Build with "),e("a",{attrs:{href:"https://vuejs.org/",target:"_new"}},[t._v("Vue.js")]),t._v(" and "),e("a",{attrs:{href:"http://vue-chartjs.org/#/",target:"_new"}},[t._v("vue-chartjs")])]),t._v(" "),e("span",[t._v("💪 Made by "),e("a",{attrs:{href:"https://twitter.com/apertureless",target:"_new"}},[t._v("apertureless")])]),t._v(" "),e("span",[t._v("For issues or feature requests visit "),e("a",{attrs:{href:"https://github.com/apertureless/npm-stats",target:"_new"}},[t._v("Github")])])])}]},304:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"Search__container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.package,expression:"package"}],staticClass:"Search__input",attrs:{placeholder:"npm package name",type:"search",name:"search"},domProps:{value:t.package},on:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.requestData(a):null},input:function(a){a.target.composing||(t.package=a.target.value)}}}),t._v(" "),e("button",{staticClass:"Search__button",on:{click:t.requestData}},[t._v("Find")]),t._v(" "),e("span",{staticClass:"Search__icon",on:{click:function(a){a.preventDefault(),t.toggleSettings()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 54 54","enable-background":"new 0 0 54 54"}},[e("path",{attrs:{d:"M51.22 21h-5.052c-.812 0-1.481-.447-1.792-1.197s-.153-1.54.42-2.114l3.572-3.571c.525-.525.814-1.224.814-1.966 0-.743-.289-1.441-.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933 0l-3.571 3.571c-.574.573-1.366.733-2.114.421-.75-.311-1.197-.98-1.197-1.792v-5.052c0-1.533-1.247-2.78-2.78-2.78h-6.44c-1.533 0-2.78 1.247-2.78 2.78v5.052c0 .812-.447 1.481-1.197 1.792-.748.313-1.54.152-2.114-.421l-3.571-3.571c-1.052-1.052-2.883-1.05-3.933 0l-4.553 4.553c-.525.525-.814 1.224-.814 1.967 0 .742.289 1.44.814 1.966l3.572 3.571c.573.574.73 1.364.42 2.114s-.98 1.197-1.792 1.197h-5.052c-1.533 0-2.78 1.247-2.78 2.78v6.439c0 1.534 1.247 2.781 2.78 2.781h5.052c.812 0 1.481.447 1.792 1.197s.153 1.54-.42 2.114l-3.572 3.571c-.525.525-.814 1.224-.814 1.966 0 .743.289 1.441.814 1.967l4.553 4.553c1.051 1.051 2.881 1.053 3.933 0l3.571-3.572c.574-.573 1.363-.731 2.114-.42.75.311 1.197.98 1.197 1.792v5.052c0 1.533 1.247 2.78 2.78 2.78h6.439c1.533 0 2.78-1.247 2.78-2.78v-5.052c0-.812.447-1.481 1.197-1.792.751-.312 1.54-.153 2.114.42l3.571 3.572c1.052 1.052 2.883 1.05 3.933 0l4.553-4.553c.525-.525.814-1.224.814-1.967 0-.742-.289-1.44-.814-1.966l-3.572-3.571c-.573-.574-.73-1.364-.42-2.114s.981-1.197 1.793-1.197h5.052c1.533 0 2.78-1.247 2.78-2.78v-6.44c0-1.533-1.247-2.78-2.78-2.78zm.78 9.22c0 .43-.35.78-.78.78h-5.052c-1.624 0-3.019.932-3.64 2.432-.622 1.5-.295 3.146.854 4.294l3.572 3.571c.305.305.305.8 0 1.104l-4.553 4.553c-.304.304-.799.306-1.104 0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-.854-1.5.621-2.432 2.016-2.432 3.64v5.052c0 .43-.35.78-.78.78h-6.44c-.43 0-.78-.35-.78-.78v-5.052c0-1.624-.932-3.019-2.432-3.64-.503-.209-1.021-.311-1.533-.311-1.014 0-1.997.4-2.761 1.164l-3.571 3.572c-.306.306-.801.304-1.104 0l-4.553-4.553c-.305-.305-.305-.8 0-1.104l3.572-3.571c1.148-1.148 1.476-2.794.854-4.294-.621-1.499-2.016-2.431-3.64-2.431h-5.052c-.43 0-.78-.35-.78-.78v-6.44c0-.43.35-.78.78-.78h5.052c1.624 0 3.019-.932 3.64-2.432.622-1.5.295-3.146-.854-4.294l-3.572-3.571c-.305-.305-.305-.8 0-1.104l4.553-4.553c.304-.305.799-.305 1.104 0l3.571 3.571c1.147 1.147 2.792 1.476 4.294.854 1.5-.62 2.432-2.015 2.432-3.639v-5.052c0-.43.35-.78.78-.78h6.439c.431 0 .781.35.781.78v5.052c0 1.624.932 3.019 2.432 3.64 1.502.622 3.146.294 4.294-.854l3.571-3.571c.306-.305.801-.305 1.104 0l4.553 4.553c.305.305.305.8 0 1.104l-3.572 3.571c-1.148 1.148-1.476 2.794-.854 4.294.621 1.5 2.016 2.432 3.64 2.432h5.052c.43-.001.78.349.78.779v6.44zM27 18c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z"}})])])]),t._v(" "),t.showSettings?e("div",{staticClass:"Search__settings"},[e("datepicker",{attrs:{"input-class":"Search__input",placeholder:"Start Date",name:"start-date"},on:{selected:function(a){t.validateDataRequest()}},model:{value:t.periodStart,callback:function(a){t.periodStart=a},expression:"periodStart"}}),t._v(" "),e("datepicker",{attrs:{"input-class":"Search__input",placeholder:"End Date",name:"end-date"},on:{selected:function(a){t.validateDataRequest()}},model:{value:t.periodEnd,callback:function(a){t.periodEnd=a},expression:"periodEnd"}})],1):t._e(),t._v(" "),t.showError?e("div",{staticClass:"error-message"},[t._v("\n     "+t._s(t.errorMessage)+"\n    ")]):t._e(),t._v(" "),e("hr"),t._v(" "),t.loading?e("div",{staticClass:"loading"},[t._v("\n      🔧  Building Charts ...\n      "),t._m(0)]):t._e(),t._v(" "),t.loaded?e("package-info",{attrs:{"package-name":t.packageName,"total-downloads":t.totalDownloads,period:t.formattedPeriod}}):t._e(),t._v(" "),t.loaded?e("div",{staticClass:"Chart__container"},[e("div",{staticClass:"Chart__title"},[e("h2",[t._v("Downloads per Day "),e("span",[t._v(t._s(t.formattedPeriod))])]),t._v(" "),e("DownloadButton",{attrs:{name:t.packageName+"-daily",link:t.dailyPng}})],1),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"Chart__content"},[t.loaded?e("line-chart",{attrs:{"chart-id":"line-daily","chart-data":t.downloads,"chart-labels":t.labels},on:{generate:t.setDailyPng}}):t._e()],1)]):t._e(),t._v(" "),t.loaded?e("div",{staticClass:"Chart__container"},[e("div",{staticClass:"Chart__title"},[e("h2",[t._v("Downloads per Week "),e("span",[t._v(t._s(t.formattedPeriod))])]),t._v(" "),e("DownloadButton",{attrs:{name:t.packageName+"-weekly",link:t.weeklyPng}})],1),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"Chart__content"},[t.loaded?e("line-chart",{attrs:{"chart-id":"line-weekly","chart-data":t.downloadsWeek,"chart-labels":t.labelsWeek},on:{generate:t.setWeeklyPng}}):t._e()],1)]):t._e(),t._v(" "),t.loaded?e("div",{staticClass:"Chart__container"},[e("div",{staticClass:"Chart__title"},[e("h2",[t._v("Downloads per Month "),e("span",[t._v(t._s(t.formattedPeriod))])]),t._v(" "),e("DownloadButton",{attrs:{name:t.packageName+"-monthly",link:t.monthlyPng}})],1),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"Chart__content"},[t.loaded?e("line-chart",{attrs:{"chart-id":"line-monthly","chart-data":t.downloadsMonth,"chart-labels":t.labelsMonth},on:{generate:t.setMonthlyPng}}):t._e()],1)]):t._e(),t._v(" "),t.loaded?e("div",{staticClass:"Chart__container"},[e("div",{staticClass:"Chart__title"},[e("h2",[t._v("Downloads per Year "),e("span",[t._v(t._s(t.formattedPeriod))])]),t._v(" "),e("DownloadButton",{attrs:{name:t.packageName+"-yearly",link:t.yearlyPng}})],1),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"Chart__content"},[t.loaded?e("bar-chart",{attrs:{"chart-id":"bar-yearly","chart-data":t.downloadsYear,"chart-labels":t.labelsYear},on:{generate:t.setYearlyPng}}):t._e()],1)]):t._e()],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sk-cube-grid"},[e("div",{staticClass:"sk-cube sk-cube1"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube2"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube3"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube4"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube5"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube6"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube7"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube8"}),t._v(" "),e("div",{staticClass:"sk-cube sk-cube9"})])}]},305:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var n=function(){var t=this,a=t.$createElement;return(t._self._c||a)("a",{staticClass:"Chart__download",attrs:{href:t.link,download:t.name+".png",title:"Download as PNG"}},[t._v("\n  🖨\n")])},s=[]},306:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Header"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"Header__logo"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"236",height:"47",viewBox:"0 0 236 47"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("polygon",{attrs:{fill:"#00C4C9",points:"23.475 0 46.95 47 0 47"}}),t._v(" "),e("polygon",{attrs:{fill:"#4F5566",points:"49.525 47 26.05 0 73 0"}}),t._v(" "),e("path",{attrs:{fill:"#4F5566",d:"M88.482,17.306 L91.712,17.306 L91.984,19.55 L92.12,19.55 C92.8680037,18.824663 93.678329,18.2013359 94.551,17.68 C95.423671,17.1586641 96.4379942,16.898 97.594,16.898 C99.3846756,16.898 100.687996,17.4703276 101.504,18.615 C102.320004,19.7596724 102.728,21.3973227 102.728,23.528 L102.728,34 L98.818,34 L98.818,24.038 C98.818,22.6553264 98.614002,21.6806695 98.206,21.114 C97.797998,20.5473305 97.129338,20.264 96.2,20.264 C95.474663,20.264 94.8343361,20.4396649 94.279,20.791 C93.7236639,21.1423351 93.0946702,21.6579966 92.392,22.338 L92.392,34 L88.482,34 L88.482,17.306 Z M111.632,35.36 L111.632,40.596 L107.722,40.596 L107.722,17.306 L110.952,17.306 L111.224,19.074 L111.36,19.074 C112.06267,18.4846637 112.844662,17.9746688 113.706,17.544 C114.567338,17.1133312 115.462662,16.898 116.392,16.898 C117.434672,16.898 118.358329,17.0963313 119.163,17.493 C119.967671,17.8896686 120.653331,18.4619963 121.22,19.21 C121.78667,19.9580037 122.217332,20.8533281 122.512,21.896 C122.806668,22.9386719 122.954,24.1059935 122.954,25.398 C122.954,26.8260071 122.755669,28.1009944 122.359,29.223 C121.962331,30.3450056 121.435337,31.2856629 120.778,32.045 C120.120663,32.8043371 119.361338,33.387998 118.5,33.796 C117.638662,34.204002 116.743338,34.408 115.814,34.408 C115.088663,34.408 114.363337,34.2493349 113.638,33.932 C112.912663,33.6146651 112.210003,33.1613363 111.53,32.572 L111.632,35.36 Z M111.632,29.784 C112.244003,30.3053359 112.833331,30.667999 113.4,30.872 C113.96667,31.076001 114.499331,31.178 114.998,31.178 C116.108672,31.178 117.037996,30.6963382 117.786,29.733 C118.534004,28.7696619 118.908,27.3360095 118.908,25.432 C118.908,23.7546583 118.62467,22.451338 118.058,21.522 C117.491331,20.592662 116.57334,20.128 115.304,20.128 C114.125328,20.128 112.90134,20.7513271 111.632,21.998 L111.632,29.784 Z M127.098,17.306 L130.328,17.306 L130.6,19.584 L130.736,19.584 C131.43867,18.8359963 132.203663,18.2013359 133.031,17.68 C133.858338,17.1586641 134.793328,16.898 135.836,16.898 C137.060006,16.898 138.04033,17.1586641 138.777,17.68 C139.51367,18.2013359 140.074665,18.9379952 140.46,19.89 C141.253337,19.0286624 142.080662,18.3146695 142.942,17.748 C143.803338,17.1813305 144.766661,16.898 145.832,16.898 C147.600009,16.898 148.903329,17.4703276 149.742,18.615 C150.580671,19.7596724 151,21.3973227 151,23.528 L151,34 L147.056,34 L147.056,24.038 C147.056,22.6553264 146.846336,21.6806695 146.427,21.114 C146.007665,20.5473305 145.367338,20.264 144.506,20.264 C143.463328,20.264 142.296007,20.9553264 141.004,22.338 L141.004,34 L137.094,34 L137.094,24.038 C137.094,22.6553264 136.884336,21.6806695 136.465,21.114 C136.045665,20.5473305 135.394005,20.264 134.51,20.264 C133.467328,20.264 132.300007,20.9553264 131.008,22.338 L131.008,34 L127.098,34 L127.098,17.306 Z M154.906,24.004 L162.998,24.004 L162.998,26.86 L154.906,26.86 L154.906,24.004 Z M167.278,29.58 C168.026004,30.1693363 168.76833,30.6283317 169.505,30.957 C170.241671,31.2856683 171.040663,31.45 171.902,31.45 C172.808671,31.45 173.477331,31.2630019 173.908,30.889 C174.338669,30.5149981 174.554,30.0333363 174.554,29.444 C174.554,29.1039983 174.452001,28.803668 174.248,28.543 C174.043999,28.282332 173.772002,28.050001 173.432,27.846 C173.091999,27.641999 172.706669,27.4550008 172.276,27.285 C171.845331,27.1149991 171.414669,26.9393342 170.984,26.758 C170.439998,26.553999 169.88467,26.3160014 169.318,26.044 C168.751331,25.7719986 168.247002,25.4433353 167.805,25.058 C167.362998,24.6726647 167.000335,24.2250025 166.717,23.715 C166.433666,23.2049975 166.292,22.5986702 166.292,21.896 C166.292,20.4226593 166.835995,19.221338 167.924,18.292 C169.012006,17.362662 170.496658,16.898 172.378,16.898 C173.534006,16.898 174.576662,17.101998 175.506,17.51 C176.435338,17.918002 177.239997,18.3826641 177.92,18.904 L176.118,21.284 C175.528664,20.8533312 174.93367,20.507668 174.333,20.247 C173.732331,19.986332 173.103337,19.856 172.446,19.856 C171.607329,19.856 170.989669,20.0316649 170.593,20.383 C170.196332,20.7343351 169.998,21.1706641 169.998,21.692 C169.998,22.0320017 170.094333,22.3209988 170.287,22.559 C170.479668,22.7970012 170.734665,23.0066658 171.052,23.188 C171.369335,23.3693342 171.737665,23.5393325 172.157,23.698 C172.576336,23.8566675 173.012665,24.0153325 173.466,24.174 C174.03267,24.378001 174.599331,24.610332 175.166,24.871 C175.73267,25.131668 176.248331,25.4546647 176.713,25.84 C177.177669,26.2253353 177.551666,26.6956639 177.835,27.251 C178.118335,27.8063361 178.26,28.4693295 178.26,29.24 C178.26,29.965337 178.118335,30.6396636 177.835,31.263 C177.551666,31.8863365 177.138003,32.430331 176.594,32.895 C176.049998,33.359669 175.370004,33.7279986 174.554,34 C173.737996,34.2720014 172.808672,34.408 171.766,34.408 C170.609994,34.408 169.471006,34.1870022 168.349,33.745 C167.226995,33.3029978 166.258004,32.7533366 165.442,32.096 L167.278,29.58 Z M182.54,20.4 L180.16,20.4 L180.16,17.476 L182.744,17.306 L183.22,12.75 L186.484,12.75 L186.484,17.306 L190.734,17.306 L190.734,20.4 L186.484,20.4 L186.484,28.356 C186.484,30.3053431 187.265992,31.28 188.83,31.28 C189.124668,31.28 189.424999,31.2460003 189.731,31.178 C190.037002,31.1099997 190.314666,31.0193339 190.564,30.906 L191.244,33.796 C190.790665,33.9546675 190.275003,34.0963327 189.697,34.221 C189.118997,34.3456673 188.501337,34.408 187.844,34.408 C186.869329,34.408 186.04767,34.2606681 185.379,33.966 C184.71033,33.6713319 184.166336,33.2576693 183.747,32.725 C183.327665,32.1923307 183.021668,31.5576704 182.829,30.821 C182.636333,30.0843297 182.54,29.2626712 182.54,28.356 L182.54,20.4 Z M193.212,29.512 C193.212,27.7213244 193.993993,26.3386715 195.558,25.364 C197.122008,24.3893285 199.615317,23.7093353 203.038,23.324 C203.038,22.8933312 202.981334,22.4796686 202.868,22.083 C202.754666,21.6863313 202.579002,21.3350015 202.341,21.029 C202.102999,20.7229985 201.797002,20.4850008 201.423,20.315 C201.048999,20.1449991 200.57867,20.06 200.012,20.06 C199.17333,20.06 198.363004,20.2186651 197.581,20.536 C196.798996,20.8533349 196.045337,21.2386644 195.32,21.692 L193.892,19.074 C194.821338,18.4846637 195.858328,17.9746688 197.003,17.544 C198.147673,17.1133312 199.38866,16.898 200.726,16.898 C202.834011,16.898 204.397995,17.5156605 205.418,18.751 C206.438005,19.9863395 206.948,21.7713217 206.948,24.106 L206.948,34 L203.752,34 L203.446,32.164 L203.344,32.164 C202.595997,32.7986698 201.797005,33.3313312 200.947,33.762 C200.096996,34.1926688 199.173339,34.408 198.176,34.408 C196.70266,34.408 195.507005,33.9603378 194.589,33.065 C193.670996,32.1696622 193.212,30.9853407 193.212,29.512 Z M197.02,29.206 C197.02,29.9540037 197.240998,30.4979983 197.683,30.838 C198.125003,31.1780017 198.69733,31.348 199.4,31.348 C200.080004,31.348 200.703331,31.1893349 201.27,30.872 C201.83667,30.5546651 202.425997,30.1013363 203.038,29.512 L203.038,25.772 C201.904661,25.9080007 200.952671,26.0893322 200.182,26.316 C199.41133,26.5426678 198.793669,26.7976653 198.329,27.081 C197.864331,27.3643347 197.530001,27.6873315 197.326,28.05 C197.121999,28.4126685 197.02,28.797998 197.02,29.206 Z M212.486,20.4 L210.106,20.4 L210.106,17.476 L212.69,17.306 L213.166,12.75 L216.43,12.75 L216.43,17.306 L220.68,17.306 L220.68,20.4 L216.43,20.4 L216.43,28.356 C216.43,30.3053431 217.211993,31.28 218.776,31.28 C219.070669,31.28 219.370999,31.2460003 219.677,31.178 C219.983002,31.1099997 220.260666,31.0193339 220.51,30.906 L221.19,33.796 C220.736665,33.9546675 220.221003,34.0963327 219.643,34.221 C219.064998,34.3456673 218.447337,34.408 217.79,34.408 C216.815329,34.408 215.99367,34.2606681 215.325,33.966 C214.65633,33.6713319 214.112336,33.2576693 213.693,32.725 C213.273665,32.1923307 212.967668,31.5576704 212.775,30.821 C212.582333,30.0843297 212.486,29.2626712 212.486,28.356 L212.486,20.4 Z M224.552001,29.58 C225.300004,30.1693363 226.04233,30.6283317 226.779001,30.957 C227.515671,31.2856683 228.314663,31.45 229.176001,31.45 C230.082672,31.45 230.751332,31.2630019 231.182001,30.889 C231.612669,30.5149981 231.828001,30.0333363 231.828001,29.444 C231.828001,29.1039983 231.726002,28.803668 231.522001,28.543 C231.317999,28.282332 231.046002,28.050001 230.706001,27.846 C230.365999,27.641999 229.980669,27.4550008 229.550001,27.285 C229.119332,27.1149991 228.688669,26.9393342 228.258001,26.758 C227.713998,26.553999 227.15867,26.3160014 226.592001,26.044 C226.025331,25.7719986 225.521003,25.4433353 225.079001,25.058 C224.636998,24.6726647 224.274335,24.2250025 223.991001,23.715 C223.707666,23.2049975 223.566001,22.5986702 223.566001,21.896 C223.566001,20.4226593 224.109995,19.221338 225.198001,18.292 C226.286006,17.362662 227.770658,16.898 229.652001,16.898 C230.808006,16.898 231.850663,17.101998 232.780001,17.51 C233.709338,17.918002 234.513997,18.3826641 235.194001,18.904 L233.392001,21.284 C232.802664,20.8533312 232.20767,20.507668 231.607001,20.247 C231.006331,19.986332 230.377337,19.856 229.720001,19.856 C228.88133,19.856 228.263669,20.0316649 227.867001,20.383 C227.470332,20.7343351 227.272001,21.1706641 227.272001,21.692 C227.272001,22.0320017 227.368333,22.3209988 227.561001,22.559 C227.753668,22.7970012 228.008666,23.0066658 228.326001,23.188 C228.643335,23.3693342 229.011665,23.5393325 229.431001,23.698 C229.850336,23.8566675 230.286665,24.0153325 230.740001,24.174 C231.30667,24.378001 231.873331,24.610332 232.440001,24.871 C233.00667,25.131668 233.522332,25.4546647 233.987001,25.84 C234.451669,26.2253353 234.825666,26.6956639 235.109001,27.251 C235.392335,27.8063361 235.534001,28.4693295 235.534001,29.24 C235.534001,29.965337 235.392335,30.6396636 235.109001,31.263 C234.825666,31.8863365 234.412003,32.430331 233.868001,32.895 C233.323998,33.359669 232.644005,33.7279986 231.828001,34 C231.011996,34.2720014 230.082672,34.408 229.040001,34.408 C227.883995,34.408 226.745006,34.1870022 225.623001,33.745 C224.500995,33.3029978 223.532005,32.7533366 222.716001,32.096 L224.552001,29.58 Z"}})])])])])],1)},s=[]},307:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Package"},[e("h1",{staticClass:"Package__title"},[t._v(t._s(t.packageName))]),t._v(" "),e("div",{staticClass:"Package__info"},[e("div",{staticClass:"Package__info-item"},[e("span",[t._v(t._s(t.totalDownloads.toLocaleString()))]),e("span",{staticClass:"info-label"},[t._v("Total Downloads")])]),t._v(" "),e("div",{staticClass:"Package__info-item"},[e("span",[t._v(t._s(t.period))]),e("span",{staticClass:"info-label"},[t._v("Period")])]),t._v(" "),e("div",{staticClass:"Package__info-item"},[e("span",[e("a",{attrs:{href:t.packageLink}},[t._v(t._s(t.packageName)+" on npm")])]),e("span",{staticClass:"info-label"},[t._v("Link")])])])])},s=[]},32:function(t,a,e){"use strict";a.a={methods:{download:function(){var t=this.$refs.canvas.toDataURL("image/png");this.$emit("generate",t)}}}},33:function(t,a,e){"use strict";var n=e(298),s=e(297),r=e(294),o=e.n(r);a.a={components:{JHeader:n.a,JFooter:s.a,CookieLaw:o.a},name:"app",metaInfo:{meta:[{charset:"utf-8"},{name:"theme-color",content:"#ffffff"}]}}},34:function(t,a,e){"use strict";var n=e(19),s=e.n(n),r=e(41),o=e.n(r),i=e(181),c=e(32);a.a={extends:i.a,mixins:[c.a],props:{chartData:{type:Array|Object,required:!1},chartLabels:{type:Array,required:!0}},data:function(){var t=this;return{gradient:null,options:{showScale:!0,scales:{yAxes:[{ticks:{beginAtZero:!1},gridLines:{display:!0,color:"#EEF0F4",borderDash:[5,15]},categoryPercentage:1,barPercentage:.4}],xAxes:[{ticks:{callback:function(a,e,n){return t.formatNumber(a)}},gridLines:{display:!0,color:"#EEF0F4",borderDash:[5,15]}}]},tooltips:{backgroundColor:"#4F5565",titleFontStyle:"normal",titleFontSize:18,bodyFontFamily:"'Proxima Nova', sans-serif",cornerRadius:3,bodyFontColor:"#20C4C8",bodyFontSize:14,xPadding:14,yPadding:14,displayColors:!1,mode:"index",intersect:!1,callbacks:{title:function(t){return"🗓 "+t[0].yLabel},label:function(t,a){return"📦 "+a.datasets[t.datasetIndex].data[t.index].toLocaleString()}}},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){var t=this;this.gradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient.addColorStop(0,"rgba(52, 217, 221, 0.6)"),this.gradient.addColorStop(.5,"rgba(52, 217, 221, 0.25)"),this.gradient.addColorStop(1,"rgba(52, 217, 221, 0)"),this.renderChart({labels:this.chartLabels,datasets:[{label:"downloads",borderColor:"#249EBF",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",pointHoverBorderColor:"#249EBF",pointHoverBackgroundColor:"#fff",pointHoverRadius:4,pointHitRadius:10,pointHoverBorderWidth:1,borderWidth:1,backgroundColor:this.gradient,hoverBackgroundColor:this.gradient,data:this.chartData}]},this.options),setTimeout(function(){t.download()},500)},methods:{formatNumber:function(t){var a=Math.round(t).toString(),e=[[6,"m"],[3,"k"]],n=!0,r=!1,i=void 0;try{for(var c,l=s()(e);!(n=(c=l.next()).done);n=!0){var d=c.value,u=o()(d,2),h=u[0],p=u[1];if(a.length>h){var f="";"0"!==a[a.length-h]&&(f="."+a[a.length-h]),a=a.substr(0,a.length-h)+f+p;break}}}catch(t){r=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}return a}}}},35:function(t,a,e){"use strict";a.a={name:"DownloadButton",props:{name:{type:String,default:"chart"},link:{type:String,default:""}}}},36:function(t,a,e){"use strict";a.a={}},37:function(t,a,e){"use strict";a.a={}},38:function(t,a,e){"use strict";var n=e(19),s=e.n(n),r=e(41),o=e.n(r),i=e(181),c=e(32);a.a={extends:i.b,mixins:[c.a],props:{chartData:{type:Array|Object,required:!1},chartLabels:{type:Array,required:!0}},data:function(){var t=this;return{gradient:null,options:{showScale:!0,scales:{yAxes:[{ticks:{beginAtZero:!1,callback:function(a,e,n){return t.formatNumber(a)}},gridLines:{display:!0,color:"#EEF0F4",borderDash:[5,15]}}],xAxes:[{gridLines:{display:!0,color:"#EEF0F4",borderDash:[5,15]}}]},tooltips:{backgroundColor:"#4F5565",titleFontStyle:"normal",titleFontSize:18,bodyFontFamily:"'Proxima Nova', sans-serif",cornerRadius:3,bodyFontColor:"#20C4C8",bodyFontSize:14,xPadding:14,yPadding:14,displayColors:!1,mode:"index",intersect:!1,callbacks:{title:function(t){return"🗓 "+t[0].xLabel},label:function(t,a){return"📦 "+a.datasets[t.datasetIndex].data[t.index].toLocaleString()}}},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){var t=this;this.gradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient.addColorStop(0,"rgba(52, 217, 221, 0.6)"),this.gradient.addColorStop(.5,"rgba(52, 217, 221, 0.25)"),this.gradient.addColorStop(1,"rgba(52, 217, 221, 0)"),this.renderChart({labels:this.chartLabels,datasets:[{label:"downloads",borderColor:"#249EBF",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",pointHoverBorderColor:"#249EBF",pointHoverBackgroundColor:"#fff",pointHoverRadius:4,pointHitRadius:10,pointHoverBorderWidth:1,borderWidth:1,backgroundColor:this.gradient,data:this.chartData}]},this.options),setTimeout(function(){t.download()},500)},methods:{formatNumber:function(t){var a=Math.round(t).toString(),e=[[6,"m"],[3,"k"]],n=!0,r=!1,i=void 0;try{for(var c,l=s()(e);!(n=(c=l.next()).done);n=!0){var d=c.value,u=o()(d,2),h=u[0],p=u[1];if(a.length>h){var f="";"0"!==a[a.length-h]&&(f="."+a[a.length-h]),a=a.substr(0,a.length-h)+f+p;break}}}catch(t){r=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}return a}}}},39:function(t,a,e){"use strict";a.a={props:{packageName:{type:String},totalDownloads:{type:Number},period:{type:String}},computed:{packageLink:function(){return"https://www.npmjs.com/package/"+this.packageName}}}},40:function(t,a,e){"use strict";var n=e(186),s=e.n(n),r=e(311),o=e.n(r),i=e(299),c=e(295),l=e(300),d=e(296),u=e(206),h=e(207);a.a={components:{LineChart:i.a,BarChart:c.a,PackageInfo:l.a,Datepicker:o.a,DownloadButton:d.a},metaInfo:function(){return{title:this.packageName?this.packageName+" | 📈 npm-stats":"📈 npm-stats | Download statistics for your npm packages",meta:[{vmid:"description",name:"description",content:"View your npm package download statistics with beautiful charts"}]}},data:function(){return{package:"",packageName:"",loaded:!1,loading:!1,downloads:[],downloadsYear:[],downloadsMonth:[],downloadsWeek:[],labels:[],labelsYear:[],labelsMonth:[],labelsWeek:[],showError:!1,showSettings:!1,errorMessage:"Please enter a package name",periodStart:"",periodEnd:new Date,rawData:"",totalDownloads:"",dailyPng:null,weeklyPng:null,monthlyPng:null,yearlyPng:null}},mounted:function(){this.$route.params.package&&(this.package=this.$route.params.package,this.requestData())},computed:{metaHeadTitle:function(){return this.packageName?"📈 npm-stats for "+this.packageName:"📈 npm-stats"},_endDate:function(){return e.i(u.a)(this.periodEnd)},_startDate:function(){return e.i(u.a)(this.periodStart)},period:function(){return this.periodStart?this._startDate+":"+this._endDate:"last-month"},formattedPeriod:function(){return this.periodStart?e.i(u.b)(this._startDate)+" - "+e.i(u.b)(this._endDate):"last-month"}},methods:{resetState:function(){this.loaded=!1,this.showError=!1},requestData:function(){var t=this;if(null===this.package||""===this.package||"undefined"===this.package)return this.showError=!0,void(this.loading=!1);this.resetState(),this.loading=!0,s.a.get("https://api.npmjs.org/downloads/range/"+this.period+"/"+this.package).then(function(a){t.rawData=a.data.downloads,t.downloads=a.data.downloads.map(function(t){return t.downloads}),t.labels=a.data.downloads.map(function(t){return t.day}),t.packageName=a.data.package,t.totalDownloads=t.downloads.reduce(function(t,a){return t+a}),t.setURL(),t.groupDataByDate(),t.loaded=!0,t.loading=!1}).catch(function(a){t.errorMessage=a.response.data.error,t.showError=!0,t.loading=!1})},validateDataRequest:function(){console.log("ValidateData"),""!==this.packageName&&""!==this.periodStart&&this.requestData()},groupDataByDate:function(){this.formatYear(),this.formatMonth(),this.formatWeek()},formatYear:function(){this.labelsYear=this.rawData.map(function(t){return e.i(u.c)(t.day)}).reduce(h.a,[]),this.downloadsYear=e.i(h.b)(this.rawData,u.c)},formatMonth:function(){this.labelsMonth=this.rawData.map(function(t){return e.i(u.d)(t.day)}).reduce(h.a,[]),this.downloadsMonth=e.i(h.b)(this.rawData,u.d)},formatWeek:function(){this.labelsWeek=this.rawData.map(function(t){return e.i(u.e)(t.day)}).reduce(h.a,[]),this.downloadsWeek=e.i(h.b)(this.rawData,u.e)},setURL:function(){history.pushState({info:"npm-stats "+this.package},this.package,"/#/"+this.package),this.$ga.page({page:"/#/"+this.package,title:this.package,location:window.location.href})},toggleSettings:function(){this.showSettings=!this.showSettings,this.$ga.event({eventCategory:"Settings",eventAction:"toggle"})},setDailyPng:function(t){this.dailyPng=t},setWeeklyPng:function(t){this.weeklyPng=t,console.log("weekly",t)},setMonthlyPng:function(t){this.monthlyPng=t},setYearlyPng:function(t){this.yearlyPng=t}}}}},[205]);
//# sourceMappingURL=app.45aa6ccc046d99a71060.js.map