(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{225:function(e,t,l){"use strict";var r=l(19),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"section no-padding-top no-padding-bottom"},[l("article",{staticClass:"message is-warning small-padding-top"},[l("div",{staticClass:"message-header"},[l("p",[e._v("Info")]),e._v(" "),l("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),e._v(" "),l("div",{staticClass:"message-body"},[l("p",[e._v("The results table will appear here after the first race of the season.")]),e._v(" "),l("p",[e._v("\n        Looking for last years results? You can find them under the menu\n        "),l("a",{attrs:{href:"http://justinramel.com/ndca-bar-2018"}},[e._v("Years > 2018")]),e._v(".\n      ")])])])])}],!1,null,null,null);t.a=component.exports},403:function(e,t,l){"use strict";l.r(t);var r=l(10),n=l(54),o=l(220),c=l(355),h=l(225),d={name:"Bar",components:{Page:o.a,BarTable:c.a,NoData:h.a},computed:Object(r.a)({},Object(n.b)({results:"rbar/results",isMobile:"is-mobile/isMobile"}))},m=l(19),component=Object(m.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("Page",{attrs:{title:"Roadbike BAR",subtitle:"Best All Rounder"}},[t("BarTable",{directives:[{name:"show",rawName:"v-show",value:this.results.length,expression:"results.length"}],attrs:{results:this.results,"is-mobile":this.isMobile,category:"rbar"}}),this._v(" "),t("NoData",{directives:[{name:"show",rawName:"v-show",value:!this.results.length,expression:"!results.length"}]})],1)},[],!1,null,null,null);t.default=component.exports}}]);