(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{219:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6cacf2a2",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";var l=n(10),r=n(54),o={name:"MenuMobile",computed:Object(l.a)({},Object(r.b)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"})),methods:Object(l.a)({},Object(r.c)({toggleMenu:"menu/toggle"}))},c=n(19),v=Object(c.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger burger has-text-white has-background-primary",class:{"is-active":this.menuIsActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])},[],!1,null,null,null).exports,m={name:"MenuDesktop",computed:Object(l.a)({},Object(r.b)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))},d=Object(c.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[n("div",{staticClass:"navbar-start"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("BAR")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wbar"}}},[t._v("Women's BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wvbar"}}},[t._v("Women's Vets BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-vbar"}}},[t._v("Vets Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-wbar"}}},[t._v("Women's Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"rbar"}}},[t._v("Roadbike BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wrbar"}}},[t._v("Women's Roadbike BAR")])],1)],1),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"navbar-end"})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"http://justinramel.com/ndca-bar/"}},[this._v("Years")]),this._v(" "),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2019/"}},[this._v("2019")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2018/"}},[this._v("2018")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2017/"}},[this._v("2017")])])])}],!1,null,null,null).exports,h={name:"NavBar",components:{MenuMobile:v,MenuDesktop:d},computed:Object(l.a)({},Object(r.b)({title:"title/getTitle"}))},_=Object(c.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),this._v(" "),e("MenuMobile")],1),this._v(" "),e("MenuDesktop")],1)])},[],!1,null,null,null).exports,C={name:"NavBarMobile",components:{MenuDesktop:d,MenuMobile:v},computed:Object(l.a)({},Object(r.b)({title:"title/getTitle"}))},f=Object(c.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[this._v("\n      "+this._s(this.title)+"\n    ")]),this._v(" "),e("MenuMobile")],1),this._v(" "),e("MenuDesktop")],1)},[],!1,null,null,null).exports,k={name:"PageHeader",props:{title:{type:String,default:""},subtitle:{type:String,default:""}}},M=(n(222),{name:"layout",props:["title","subtitle"],components:{NavBar:_,NavBarMobile:f,PageHeader:Object(c.a)(k,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},[],!1,null,"5bd48454",null).exports},methods:Object(l.a)({},Object(r.c)({setTitle:"title/setTitle"})),computed:Object(l.a)({},Object(r.b)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}),j=Object(c.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isMobile?t._e():n("NavBar"),t._v(" "),t.isMobile?n("NavBarMobile"):t._e(),t._v(" "),t.isMobile?t._e():t._t("page-header",[n("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t._t("default")],2)]),t._v(" "),t._m(0)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}],!1,null,null,null);e.a=j.exports},222:function(t,e,n){"use strict";var l=n(219);n.n(l).a},223:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".tight[data-v-5bd48454]{padding:1rem}",""])},413:function(t,e,n){"use strict";n.r(e);var l={name:"Welcome",components:{Page:n(220).a}},r=n(19),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:"Home"}},[e("section",{staticClass:"section small-padding-top small-padding-bottom"},[e("div",{staticClass:"content"},[e("h1",[this._v("N&DCA BAR 2019")]),this._v(" "),e("p",[this._v("\n        See the\n        "),e("a",{attrs:{href:"https://www.nanddca.co.uk/",target:"_blank"}},[this._v("The Northumberland and Durham Cycling Association")]),this._v("\n        (N&DCA) website for full details of the Best All Rounder (BAR)\n        competition.\n      ")])])])])},[],!1,null,null,null);e.default=component.exports}}]);