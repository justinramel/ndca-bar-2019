(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{395:function(t,e,n){"use strict";n.r(e);n(31);var r=n(10),l=n(221),o=n(54),m=n(220),c=(n(359),{name:"ClubTable",components:{TeamBarTable:n(360).a},filters:l.a,props:{teams:{type:Array,default:function(){return[]}},teamCount:{type:Number,default:0},riderCount:{type:Number,default:0},isMobile:Boolean}}),f=n(19),d=Object(f.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("TeamBarTable",{attrs:{results:this.teams,"is-mobile":this.isMobile,"club-view":"true"}})},[],!1,null,null,null).exports,h={name:"ClubsName",components:{Page:m.a,ClubTable:d},filters:l.a,computed:Object(r.a)({},Object(o.b)({results:"team-bar/results",isMobile:"is-mobile/isMobile"}),{teamCount:function(){return this.teams.length},riderCount:function(){return this.teams.reduce(function(t,e){return t+e.markers.length},0)},title:function(){return"".concat(this.teamCount," Teams (").concat(this.riderCount," Riders)")}}),asyncData:function(t){var e=t.params,n=t.store.getters["team-bar/team"](e.name);return{club:n[0].club,teams:n}},methods:Object(r.a)({},Object(o.b)({team:"team-bar/team"}))},C=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{attrs:{title:t.club}},[n("p",{staticClass:"title small-margin-top small-margin-left small-margin-bottom"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("ClubTable",{attrs:{teams:t.teams,"team-count":t.teamCount,"rider-count":t.riderCount,"is-mobile":t.isMobile}})],1)},[],!1,null,null,null);e.default=C.exports}}]);