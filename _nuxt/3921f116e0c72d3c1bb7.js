(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{219:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6cacf2a2",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";var r=n(10),l=n(54),c={name:"MenuMobile",computed:Object(r.a)({},Object(l.b)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"})),methods:Object(r.a)({},Object(l.c)({toggleMenu:"menu/toggle"}))},o=n(19),d=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger burger has-text-white has-background-primary",class:{"is-active":this.menuIsActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])},[],!1,null,null,null).exports,v={name:"MenuDesktop",computed:Object(r.a)({},Object(l.b)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))},m=Object(o.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[n("div",{staticClass:"navbar-start"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("BAR")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wbar"}}},[t._v("Women's BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wvbar"}}},[t._v("Women's Vets BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-vbar"}}},[t._v("Vets Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-wbar"}}},[t._v("Women's Team BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"rbar"}}},[t._v("Roadbike BAR")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"wrbar"}}},[t._v("Women's Roadbike BAR")])],1)],1),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"navbar-end"})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"http://justinramel.com/ndca-bar/"}},[this._v("Years")]),this._v(" "),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2019/"}},[this._v("2019")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2018/"}},[this._v("2018")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2017/"}},[this._v("2017")])])])}],!1,null,null,null).exports,h={name:"NavBar",components:{MenuMobile:d,MenuDesktop:m},computed:Object(r.a)({},Object(l.b)({title:"title/getTitle"}))},_=Object(o.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),this._v(" "),e("MenuMobile")],1),this._v(" "),e("MenuDesktop")],1)])},[],!1,null,null,null).exports,f={name:"NavBarMobile",components:{MenuDesktop:m,MenuMobile:d},computed:Object(r.a)({},Object(l.b)({title:"title/getTitle"}))},C=Object(o.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[this._v("\n      "+this._s(this.title)+"\n    ")]),this._v(" "),e("MenuMobile")],1),this._v(" "),e("MenuDesktop")],1)},[],!1,null,null,null).exports,R={name:"PageHeader",props:{title:{type:String,default:""},subtitle:{type:String,default:""}}},k=(n(222),{name:"layout",props:["title","subtitle"],components:{NavBar:_,NavBarMobile:C,PageHeader:Object(o.a)(R,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},[],!1,null,"5bd48454",null).exports},methods:Object(r.a)({},Object(l.c)({setTitle:"title/setTitle"})),computed:Object(r.a)({},Object(l.b)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}),j=Object(o.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isMobile?t._e():n("NavBar"),t._v(" "),t.isMobile?n("NavBarMobile"):t._e(),t._v(" "),t.isMobile?t._e():t._t("page-header",[n("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t._t("default")],2)]),t._v(" "),t._m(0)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}],!1,null,null,null);e.a=j.exports},222:function(t,e,n){"use strict";var r=n(219);n.n(r).a},223:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".tight[data-v-5bd48454]{padding:1rem}",""])},364:function(t,e,n){"use strict";n(31);var r={name:"RiderFinder",props:{rider:{type:Object,default:function(){return{}}},riderList:{type:Array,default:function(){return[]}}},data:function(){var t=this.rider?this.rider.name:"";return{listRider:{data:this.riderList,name:t,selected:this.rider}}},computed:{filteredRider:function(){var t=this;if(this.listRider&&this.listRider.name)return this.listRider.data.filter(function(option){return option.name.toLowerCase().indexOf(t.listRider.name.toLowerCase())>=0})}},methods:{selectRider:function(option){option&&(this.listRider.selected=option,this.redirect())},redirect:function(){this.listRider.selected&&this.$router.push({name:"riders-id",params:{id:this.listRider.selected.id}})}}},l=n(19),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("b-field",{attrs:{label:"Find Rider"}},[n("b-autocomplete",{attrs:{placeholder:"Name","keep-first":!0,data:t.filteredRider,field:"name",size:"is-medium",icon:"search","icon-pack":"fa"},on:{select:t.selectRider},model:{value:t.listRider.name,callback:function(e){t.$set(t.listRider,"name",e)},expression:"listRider.name"}})],1)],1)},[],!1,null,null,null);e.a=component.exports},401:function(t,e,n){"use strict";n.r(e);var r=n(10),l=n(54),c=n(220),o=n(364),d={name:"Riders",components:{Page:c.a,RiderFinder:o.a},computed:Object(r.a)({},Object(l.b)({riders:"riders/riders"}))},v=n(19),component=Object(v.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:"Riders"}},[e("RiderFinder",{attrs:{"rider-list":this.riders}})],1)},[],!1,null,null,null);e.default=component.exports}}]);