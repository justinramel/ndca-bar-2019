(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{219:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6cacf2a2",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";var r=n(10),o=n(54),l={name:"MenuMobile",computed:Object(r.a)({},Object(o.b)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"})),methods:Object(r.a)({},Object(o.c)({toggleMenu:"menu/toggle"}))},c=n(19),v=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger burger has-text-white has-background-primary",class:{"is-active":this.menuIsActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])},[],!1,null,null,null).exports,d={name:"MenuDesktop",computed:Object(r.a)({},Object(o.b)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))},_=Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[n("div",{staticClass:"navbar-start"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("BAR")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wbar"}}},[t._v("Women's BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wvbar"}}},[t._v("Women's Vets BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-vbar"}}},[t._v("Vets Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-wbar"}}},[t._v("Women's Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"rbar"}}},[t._v("Roadbike BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wrbar"}}},[t._v("Women's Roadbike BAR")])],1)],1),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"navbar-end"})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"http://justinramel.com/ndca-bar/"}},[this._v("Years")]),this._v(" "),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2019/"}},[this._v("2019")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2018/"}},[this._v("2018")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2017/"}},[this._v("2017")])])])}],!1,null,null,null).exports,m={name:"NavBar",components:{MenuMobile:v,MenuDesktop:_},computed:Object(r.a)({},Object(o.b)({title:"title/getTitle"}))},f=Object(c.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),this._v(" "),e("MenuMobile")],1),this._v(" "),e("MenuDesktop")],1)])},[],!1,null,null,null).exports,h={name:"NavBarMobile",components:{MenuDesktop:_,MenuMobile:v},computed:Object(r.a)({},Object(o.b)({title:"title/getTitle"}))},j=Object(c.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[this._v("\n      "+this._s(this.title)+"\n    ")]),this._v(" "),e("MenuMobile")],1),this._v(" "),e("MenuDesktop")],1)},[],!1,null,null,null).exports,R={name:"PageHeader",props:{title:{type:String,default:""},subtitle:{type:String,default:""}}},w=(n(222),{name:"layout",props:["title","subtitle"],components:{NavBar:f,NavBarMobile:j,PageHeader:Object(c.a)(R,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},[],!1,null,"5bd48454",null).exports},methods:Object(r.a)({},Object(o.c)({setTitle:"title/setTitle"})),computed:Object(r.a)({},Object(o.b)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}),P=Object(c.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isMobile?t._e():n("NavBar"),t._v(" "),t.isMobile?n("NavBarMobile"):t._e(),t._v(" "),t.isMobile?t._e():t._t("page-header",[n("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t._t("default")],2)]),t._v(" "),t._m(0)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}],!1,null,null,null);e.a=P.exports},221:function(t,e,n){"use strict";n(37),n(73);var r=n(218),o=n.n(r),l=n(224),c={currency:function(t){return"£".concat(t.toFixed(2))},decimal:function(t){return t.toFixed(2)},integer:function(t){return parseInt(t)},date:function(t){return"".concat(t.split(" ")[0]," ").concat(t.split(" ")[1].substring(0,3))},fullDate:function(t){return o()("".concat(t," 23:59"),"DD MMMM YYYY HH:mm",!0).format("dddd DD MMMM YYYY")},time:function(t){return t||"N/A"},closingDate:function(t){return o()("".concat(t," 23:59"),"DD MMMM YYYY HH:mm",!0).fromNow(!0)},directionIcon:function(t){return t<0?"fa fa-caret-up":t>0?"fa fa-caret-down":"fa fa-ellipsis-h"},directionClass:function(t){return t<0?"icon has-text-success is-small":t>0?"icon has-text-danger is-small":"icon is-small"},direction:function(t){return 0===t?"":Math.abs(t)},ordinal:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return t;if(!t)return"";var s=["th","st","nd","rd"],e=t%100;return t+(s[(e-20)%10]||s[e]||s[0])},ordinalOnly:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t||0===t)return"";if(t>120)return"";var s=["th","st","nd","rd"],e=t%100;return s[(e-20)%10]||s[e]||s[0]},removeZeroPoints:function(t){return 0===t?"":t},distance:function(t){return"".concat(t.substring(0,1).toUpperCase()).concat(t.substring(1))},barPosition:function(t){return t>l.a.barPositions?"":t},barPoints:function(t){return 0===t?"":t},positive:function(t){return Math.abs(t)},firstLetter:function(text){return text?text.substring(0,1):""},camel:function(text){return text.toLowerCase().replace(/^\w|\s\w/g,function(t){return t.toUpperCase()})}};e.a=c},222:function(t,e,n){"use strict";var r=n(219);n.n(r).a},223:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".tight[data-v-5bd48454]{padding:1rem}",""])},224:function(t,e,n){"use strict";e.a={maxRaces:6,maxShort:3,maxMedium:2,maxLong:1,maxPoints:720,maxPointsShort:360,maxPointsMedium:240,maxPointsLong:120,barPositions:120,minimumQualifyingRaces:1,short:"short",medium:"medium",long:"long"}},354:function(t,e,n){"use strict";var r=n(78),o=n.n(r);e.a=o.a.create({baseURL:"http://justinramel.com/ndca-bar-2019/"})},357:function(t,e,n){var map={"./af":226,"./af.js":226,"./ar":227,"./ar-dz":228,"./ar-dz.js":228,"./ar-kw":229,"./ar-kw.js":229,"./ar-ly":230,"./ar-ly.js":230,"./ar-ma":231,"./ar-ma.js":231,"./ar-sa":232,"./ar-sa.js":232,"./ar-tn":233,"./ar-tn.js":233,"./ar.js":227,"./az":234,"./az.js":234,"./be":235,"./be.js":235,"./bg":236,"./bg.js":236,"./bm":237,"./bm.js":237,"./bn":238,"./bn.js":238,"./bo":239,"./bo.js":239,"./br":240,"./br.js":240,"./bs":241,"./bs.js":241,"./ca":242,"./ca.js":242,"./cs":243,"./cs.js":243,"./cv":244,"./cv.js":244,"./cy":245,"./cy.js":245,"./da":246,"./da.js":246,"./de":247,"./de-at":248,"./de-at.js":248,"./de-ch":249,"./de-ch.js":249,"./de.js":247,"./dv":250,"./dv.js":250,"./el":251,"./el.js":251,"./en-SG":252,"./en-SG.js":252,"./en-au":253,"./en-au.js":253,"./en-ca":254,"./en-ca.js":254,"./en-gb":255,"./en-gb.js":255,"./en-ie":256,"./en-ie.js":256,"./en-il":257,"./en-il.js":257,"./en-nz":258,"./en-nz.js":258,"./eo":259,"./eo.js":259,"./es":260,"./es-do":261,"./es-do.js":261,"./es-us":262,"./es-us.js":262,"./es.js":260,"./et":263,"./et.js":263,"./eu":264,"./eu.js":264,"./fa":265,"./fa.js":265,"./fi":266,"./fi.js":266,"./fo":267,"./fo.js":267,"./fr":268,"./fr-ca":269,"./fr-ca.js":269,"./fr-ch":270,"./fr-ch.js":270,"./fr.js":268,"./fy":271,"./fy.js":271,"./ga":272,"./ga.js":272,"./gd":273,"./gd.js":273,"./gl":274,"./gl.js":274,"./gom-latn":275,"./gom-latn.js":275,"./gu":276,"./gu.js":276,"./he":277,"./he.js":277,"./hi":278,"./hi.js":278,"./hr":279,"./hr.js":279,"./hu":280,"./hu.js":280,"./hy-am":281,"./hy-am.js":281,"./id":282,"./id.js":282,"./is":283,"./is.js":283,"./it":284,"./it-ch":285,"./it-ch.js":285,"./it.js":284,"./ja":286,"./ja.js":286,"./jv":287,"./jv.js":287,"./ka":288,"./ka.js":288,"./kk":289,"./kk.js":289,"./km":290,"./km.js":290,"./kn":291,"./kn.js":291,"./ko":292,"./ko.js":292,"./ku":293,"./ku.js":293,"./ky":294,"./ky.js":294,"./lb":295,"./lb.js":295,"./lo":296,"./lo.js":296,"./lt":297,"./lt.js":297,"./lv":298,"./lv.js":298,"./me":299,"./me.js":299,"./mi":300,"./mi.js":300,"./mk":301,"./mk.js":301,"./ml":302,"./ml.js":302,"./mn":303,"./mn.js":303,"./mr":304,"./mr.js":304,"./ms":305,"./ms-my":306,"./ms-my.js":306,"./ms.js":305,"./mt":307,"./mt.js":307,"./my":308,"./my.js":308,"./nb":309,"./nb.js":309,"./ne":310,"./ne.js":310,"./nl":311,"./nl-be":312,"./nl-be.js":312,"./nl.js":311,"./nn":313,"./nn.js":313,"./pa-in":314,"./pa-in.js":314,"./pl":315,"./pl.js":315,"./pt":316,"./pt-br":317,"./pt-br.js":317,"./pt.js":316,"./ro":318,"./ro.js":318,"./ru":319,"./ru.js":319,"./sd":320,"./sd.js":320,"./se":321,"./se.js":321,"./si":322,"./si.js":322,"./sk":323,"./sk.js":323,"./sl":324,"./sl.js":324,"./sq":325,"./sq.js":325,"./sr":326,"./sr-cyrl":327,"./sr-cyrl.js":327,"./sr.js":326,"./ss":328,"./ss.js":328,"./sv":329,"./sv.js":329,"./sw":330,"./sw.js":330,"./ta":331,"./ta.js":331,"./te":332,"./te.js":332,"./tet":333,"./tet.js":333,"./tg":334,"./tg.js":334,"./th":335,"./th.js":335,"./tl-ph":336,"./tl-ph.js":336,"./tlh":337,"./tlh.js":337,"./tr":338,"./tr.js":338,"./tzl":339,"./tzl.js":339,"./tzm":340,"./tzm-latn":341,"./tzm-latn.js":341,"./tzm.js":340,"./ug-cn":342,"./ug-cn.js":342,"./uk":343,"./uk.js":343,"./ur":344,"./ur.js":344,"./uz":345,"./uz-latn":346,"./uz-latn.js":346,"./uz.js":345,"./vi":347,"./vi.js":347,"./x-pseudo":348,"./x-pseudo.js":348,"./yo":349,"./yo.js":349,"./zh-cn":350,"./zh-cn.js":350,"./zh-hk":351,"./zh-hk.js":351,"./zh-tw":352,"./zh-tw.js":352};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=357},394:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(354),l=n(54),c=n(220),v=n(221),d={name:"ResultsHeader",filters:v.a,props:{event:{type:Object,default:function(){return{}}},isMobile:{type:Boolean}},data:function(){return{isOpen:!this.isMobile}}},_=n(19),m=Object(_.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-collapse",{staticClass:"card",attrs:{open:t.isOpen},on:{"update:open":function(e){t.isOpen=e}}},[n("div",{staticClass:"card-header",attrs:{slot:"trigger"},slot:"trigger"},[n("p",{staticClass:"card-header-title small-margin-top no-padding-top no-padding-bottom"},[t._v("\n        "+t._s(t.event.course)+" - "+t._s(t._f("distance")(t.event.length))+"\n      ")]),t._v(" "),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.isOpen?"caret-up":"caret-down"}})],1)]),t._v(" "),n("div",{staticClass:"card-content has-text-centered"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-4 small-margin-bottom"},[t._v(t._s(t.event.name))]),t._v(" "),n("a",{attrs:{target:"_blank",href:"https://www.cyclingtimetrials.org.uk/race-results/"+t.event.id}},[t._v("CTT Results")]),t._v(" "),n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column"},[n("p",{staticClass:"heading no-margin-bottom"},[t._v("Date")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.event.date))])]),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"heading no-margin-bottom"},[t._v("Distance")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.event.distance)+" Miles")])])])])])])],1)},[],!1,null,null,null).exports,f=n(224),h={name:"ResultsTableDetail",filters:v.a,props:{row:{type:Object,default:function(){return{}}}},computed:{inVBAR:function(){return this.row.vbarPosition<=f.a.barPositions},inWBAR:function(){return this.row.wbarPosition<=f.a.barPositions},inWVBAR:function(){return this.row.wvbarPosition<=f.a.barPositions},inRBAR:function(){return this.row.rbarPosition<=f.a.barPositions},inWRBAR:function(){return this.row.wrbarPosition<=f.a.barPositions}}},j=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table is-bordered"},[n("tbody",[n("tr",[n("td",[t._v("Position")]),t._v(" "),n("td",[t._v(t._s(t.row.position))])]),t._v(" "),n("tr",[n("td",[t._v("BAR Position")]),t._v(" "),n("td",[t._v(t._s(t._f("barPosition")(t.row.barPosition)))])]),t._v(" "),n("tr",[n("td",[t._v("BAR Points")]),t._v(" "),n("td",[t._v(t._s(t._f("barPoints")(t.row.bar)))])]),t._v(" "),t.inVBAR?n("tr",[n("td",[t._v("VBAR Position")]),t._v(" "),n("td",[t._v(t._s(t._f("barPosition")(t.row.vbarPosition)))])]):t._e(),t._v(" "),t.inVBAR?n("tr",[n("td",[t._v("VBAR Points")]),t._v(" "),n("td",[t._v(t._s(t._f("barPoints")(t.row.vbar)))])]):t._e(),t._v(" "),t.inWBAR?n("tr",[n("td",[t._v("WBAR Position")]),t._v(" "),n("td",[t._v(t._s(t._f("barPosition")(t.row.wbarPosition)))])]):t._e(),t._v(" "),t.inWBAR?n("tr",[n("td",[t._v("WBAR Points")]),t._v(" "),n("td",[t._v(t._s(t._f("barPoints")(t.row.wbar)))])]):t._e(),t._v(" "),t.inWVBAR?n("tr",[n("td",[t._v("WVBAR Points")]),t._v(" "),n("td",[t._v(t._s(t._f("barPoints")(t.row.wvbar)))])]):t._e(),t._v(" "),t.inWVBAR?n("tr",[n("td",[t._v("WVBAR Position")]),t._v(" "),n("td",[t._v(t._s(t._f("barPosition")(t.row.wvbarPosition)))])]):t._e(),t._v(" "),t.inRBAR?n("tr",[n("td",[t._v("RBAR Position")]),t._v(" "),n("td",[t._v(t._s(t._f("barPosition")(t.row.rbarPosition)))])]):t._e(),t._v(" "),t.inRBAR?n("tr",[n("td",[t._v("RBAR Points")]),t._v(" "),n("td",[t._v(t._s(t._f("barPoints")(t.row.rbar)))])]):t._e(),t._v(" "),t.inWRBAR?n("tr",[n("td",[t._v("WRBAR Position")]),t._v(" "),n("td",[t._v(t._s(t._f("barPosition")(t.row.wrbarPosition)))])]):t._e(),t._v(" "),t.inWRBAR?n("tr",[n("td",[t._v("WRBAR Points")]),t._v(" "),n("td",[t._v(t._s(t._f("barPoints")(t.row.wrbar)))])]):t._e(),t._v(" "),n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",{staticClass:"is-capitalized"},[n("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:t.row.id}}}},[t._v(t._s(t.row.name))])],1)]),t._v(" "),n("tr",[n("td",[t._v("Gender")]),t._v(" "),n("td",[t._v(t._s(t.row.gender))])]),t._v(" "),n("tr",[n("td",[t._v("Category")]),t._v(" "),n("td",[t._v(t._s(t.row.category))])]),t._v(" "),n("tr",[n("td",[t._v("Club")]),t._v(" "),n("td",[t._v(t._s(t.row.club))])]),t._v(" "),n("tr",[n("td",[t._v("Time")]),t._v(" "),n("td",[t._v(t._s(t.row.time))])]),t._v(" "),n("tr",[n("td",[t._v("Average Speed")]),t._v(" "),n("td",[t._v(t._s(t.row.speed))])]),t._v(" "),t.inVBAR||t.inWVBAR?n("tr",[n("td",[t._v("Standard")]),t._v(" "),n("td",[t._v(t._s(t.row.standard))])]):t._e(),t._v(" "),t.inVBAR||t.inWVBAR?n("tr",[n("td",[t._v("On Standard")]),t._v(" "),n("td",[t._v(t._s(t.row.onStandard))])]):t._e()])])])},[],!1,null,null,null).exports,R={name:"ResultsTable",filters:v.a,components:{ResultsTableDetail:j},props:{event:{type:Object,default:function(){return{}}},results:{type:Array,default:function(){return[]}}},data:function(){return{filter:""}},computed:Object(r.a)({filteredResults:function(){switch(this.filter){case"BAR":return this.results.filter(function(t){return t.barPosition<=120&&t.bar>0}).sort(function(t,e){return e.bar-t.bar});case"VBAR":return this.results.filter(function(t){return t.barPosition<=120&&t.vbar>0}).sort(function(t,e){return e.vbar-t.vbar});case"WBAR":return this.results.filter(function(t){return t.barPosition<=120&&t.wbar>0}).sort(function(t,e){return e.wbar-t.wbar});case"WVBAR":return this.results.filter(function(t){return t.barPosition<=120&&t.wvbar>0}).sort(function(t,e){return e.wvbar-t.wvbar});case"RBAR":return this.results.filter(function(t){return t.barPosition<=120&&t.rbar>0}).sort(function(t,e){return e.rbar-t.rbar});case"WRBAR":return this.results.filter(function(t){return t.barPosition<=120&&t.wrbar>0}).sort(function(t,e){return e.wrbar-t.wrbar});default:return this.results}},resultsCount:function(){return this.filteredResults.length},showPosition:function(){return""===this.filter},showBAR:function(){return"BAR"===this.filter},showVBAR:function(){return"VBAR"===this.filter||"WVBAR"===this.filter},showWBAR:function(){return"WBAR"===this.filter},showWVBAR:function(){return"WVBAR"===this.filter},showRBAR:function(){return"RBAR"===this.filter},showWRBAR:function(){return"WRBAR"===this.filter}},Object(l.b)({isMobile:"is-mobile/isMobile"}))},w=Object(_.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section no-padding-top no-padding-bottom"},[n("p",{staticClass:"title small-margin-top no-margin-bottom"},[t._v(t._s(t.resultsCount)+" "+t._s(t.filter)+" Riders")]),t._v(" "),n("section",{staticClass:"small-margin-top"},[n("b-field",[n("b-radio-button",{attrs:{"native-value":"",type:"has-background-success has-text-white"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("All")])]),t._v(" "),n("b-radio-button",{attrs:{"native-value":"BAR"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("BAR")])]),t._v(" "),n("b-radio-button",{attrs:{"native-value":"VBAR"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("VBAR")])]),t._v(" "),n("b-radio-button",{attrs:{"native-value":"WBAR"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("WBAR")])]),t._v(" "),n("b-radio-button",{attrs:{"native-value":"WVBAR"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("WVBAR")])]),t._v(" "),n("b-radio-button",{attrs:{"native-value":"RBAR"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("RBAR")])]),t._v(" "),n("b-radio-button",{attrs:{"native-value":"WRBAR"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("span",[t._v("WRBAR")])])],1)],1)]),t._v(" "),n("b-table",{staticClass:"small-margin-top",attrs:{data:t.filteredResults,striped:!0,narrowed:!0,"mobile-cards":!1,detailed:""},scopedSlots:t._u([{key:"page-header",fn:function(e){return[n("b-tooltip",{attrs:{active:!!e.column.meta,label:""+e.column.meta,position:"is-bottom",dashed:""}},[t._v(t._s(e.column.label))])]}},{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"position",label:"Pos",meta:"Position",visible:t.showPosition,sortable:"",numeric:""}},[t._v(t._s(e.row.position))]),t._v(" "),n("b-table-column",{attrs:{field:"barPosition","custom-key":"BAR Pos",label:"Pos",meta:"BAR Position",visible:t.showBAR,sortable:"",numeric:""}},[t._v(t._s(t._f("barPosition")(e.row.barPosition)))]),t._v(" "),n("b-table-column",{attrs:{field:"bar","custom-key":"BAR Points",label:"Pts",meta:"BAR Points",visible:t.showPosition||t.showBAR,sortable:"",numeric:""}},[n("strong",[t._v(t._s(t._f("barPoints")(e.row.bar)))])]),t._v(" "),n("b-table-column",{attrs:{field:"vbarPosition","custom-key":"VBAR Pos",label:"Pos",meta:"VBAR Position",visible:t.showVBAR,sortable:"",numeric:""}},[t._v(t._s(t._f("barPosition")(e.row.vbarPosition)))]),t._v(" "),n("b-table-column",{attrs:{field:"vbar","custom-key":"VBAR Points",label:"Pts",meta:"VBAR Points",visible:t.showVBAR,sortable:"",numeric:""}},[n("strong",[t._v(t._s(t._f("barPoints")(e.row.vbar)))])]),t._v(" "),n("b-table-column",{attrs:{field:"wbarPosition","custom-key":"WBAR Pos",label:"Pos",meta:"WBAR Position",visible:t.showWBAR,sortable:"",numeric:""}},[t._v(t._s(t._f("barPosition")(e.row.wbarPosition)))]),t._v(" "),n("b-table-column",{attrs:{field:"wbar","custom-key":"WBAR Points",label:"Pts",meta:"WBAR Points",visible:t.showWBAR,sortable:"",numeric:""}},[n("strong",[t._v(t._s(t._f("barPoints")(e.row.wbar)))])]),t._v(" "),n("b-table-column",{attrs:{field:"wvbarPosition","custom-key":"WVBAR Pos",label:"Pos",meta:"WVBAR Position",visible:t.showWVBAR,sortable:"",numeric:""}},[t._v(t._s(t._f("barPosition")(e.row.wvbarPosition)))]),t._v(" "),n("b-table-column",{attrs:{field:"wvbar","custom-key":"WVBAR Points",label:"Pts",meta:"WVBAR Points",visible:t.showWVBAR,sortable:"",numeric:""}},[n("strong",[t._v(t._s(t._f("barPoints")(e.row.wvbar)))])]),t._v(" "),n("b-table-column",{attrs:{field:"rbarPosition","custom-key":"RBAR Pos",label:"Pos",meta:"RBAR Position",visible:t.showRBAR,sortable:"",numeric:""}},[t._v(t._s(t._f("barPosition")(e.row.rbarPosition)))]),t._v(" "),n("b-table-column",{attrs:{field:"rbar","custom-key":"RBAR Points",label:"Pts",meta:"RBAR Points",visible:t.showRBAR,sortable:"",numeric:""}},[n("strong",[t._v(t._s(t._f("barPoints")(e.row.rbar)))])]),t._v(" "),n("b-table-column",{attrs:{field:"wrbarPosition","custom-key":"WRBAR Pos",label:"Pos",meta:"WRBAR Position",visible:t.showWRBAR,sortable:"",numeric:""}},[t._v(t._s(t._f("barPosition")(e.row.wrbarPosition)))]),t._v(" "),n("b-table-column",{attrs:{field:"wrbar","custom-key":"WRBAR Points",label:"Pts",meta:"WRBAR Points",visible:t.showWRBAR,sortable:"",numeric:""}},[n("strong",[t._v(t._s(t._f("barPoints")(e.row.wrbar)))])]),t._v(" "),n("b-table-column",{staticClass:"is-capitalized",attrs:{field:"name",label:"Name",sortable:"",width:"300"}},[n("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:e.row.id}}}},[t._v(t._s(e.row.name))])],1),t._v(" "),n("b-table-column",{attrs:{field:"gender",label:"Gender",visible:!t.isMobile,sortable:""}},[t._v(t._s(e.row.gender))]),t._v(" "),n("b-table-column",{attrs:{field:"category",label:"Category",visible:!t.isMobile,sortable:""}},[t._v(t._s(e.row.category))]),t._v(" "),n("b-table-column",{attrs:{field:"club",label:"Club",visible:!t.isMobile,sortable:""}},[n("nuxt-link",{attrs:{to:{name:"clubs-name",params:{name:e.row.club}}}},[t._v(t._s(e.row.club))])],1),t._v(" "),n("b-table-column",{attrs:{field:"time",label:"Time"}},[t._v("\n        "+t._s(e.row.time)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"speed",label:"Avg Speed",meta:"Average Speed",visible:!t.isMobile}},[t._v(t._s(e.row.speed))]),t._v(" "),n("b-table-column",{attrs:{field:"standard",label:"Standard",visible:!t.isMobile&&t.showVBAR}},[t._v(t._s(e.row.standard))]),t._v(" "),n("b-table-column",{attrs:{field:"onStandard",label:"On Standard",visible:!t.isMobile&&t.showVBAR}},[t._v(t._s(e.row.onStandard))])]}},{key:"detail",fn:function(t){return[n("ResultsTableDetail",{attrs:{row:t.row}})]}}])})],1)},[],!1,null,null,null).exports,P={name:"ResultsId",components:{Page:c.a,ResultsHeader:m,ResultsTable:w},props:{id:{type:String,default:""}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},computed:Object(r.a)({},Object(l.b)({isMobile:"is-mobile/isMobile"})),asyncData:function(t){var e=t.params,n=t.error,r=t.store;return o.a.get("data/results/".concat(e.id,".json")).then(function(t){return{event:r.getters["events/getEvent"](e.id),eventResults:t.data}}).catch(function(t){n({statusCode:404,message:"Results not found"})})}},A=Object(_.a)(P,function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:"Results"}},[e("ResultsHeader",{attrs:{event:this.event,"is-mobile":this.isMobile}}),this._v(" "),e("ResultsTable",{attrs:{event:this.event,results:this.eventResults}})],1)},[],!1,null,null,null);e.default=A.exports}}]);