"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[864],{368:function(n,r,t){var e,a,c,o=t(168),u=(t(791),t(689)),i=t(87),s=t(924),f=t(184);r.Z=function(n){var r=n.movies,t=(0,u.TH)();return(0,f.jsx)(d,{children:r.map((function(n){return(0,f.jsx)(l,{children:(0,f.jsx)(p,{state:{from:t},to:"/movies/".concat(n.id),children:n.title})},n.id)}))})};var d=s.ZP.ul(e||(e=(0,o.Z)(["\n  background-color: #2c2c2c;\n  padding: 0;\n  list-style-type: none;\n"]))),l=s.ZP.li(a||(a=(0,o.Z)(["\n  padding: 0.5rem 0;\n  padding-left: 1rem;\n  border-bottom: 1px solid #444;\n  color: white;\n"]))),p=(0,s.ZP)(i.OL)(c||(c=(0,o.Z)(["\n  color: white; /* White text color for movie titles */\n  text-decoration: none;\n  display: block;\n  /* padding: 0.5rem; */\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: #3d3d3d; /* Slightly lighter for hover/focus */\n    color: #06bcee;\n  }\n"])))},302:function(n,r,t){t.d(r,{i:function(){return c}});var e=t(439),a=t(791),c=function(n,r){var t=(0,a.useState)(null),c=(0,e.Z)(t,2),o=c[0],u=c[1],i=(0,a.useState)(null),s=(0,e.Z)(i,2),f=s[0],d=s[1],l=(0,a.useState)(!1),p=(0,e.Z)(l,2),v=p[0],h=p[1];return(0,a.useEffect)((function(){h(!0),n(r).then((function(n){return u(n)})).catch((function(n){return d(n.message)})).finally(h(!1))}),[n,r]),{data:o,setData:u,error:f,loading:v}}},864:function(n,r,t){t.r(r),t.d(r,{default:function(){return l}});var e,a=t(168),c=t(579),o=t(94),u=t(368),i=t(302),s=(t(791),t(735)),f=t(924),d=t(184),l=function(){var n=(0,i.i)(s.ds),r=n.data,t=n.error;return t?(o.Am.error("Sorry, problem connection to server! ".concat(t)),(0,d.jsx)(o.Ix,{})):r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{children:"Trending Today"}),(0,d.jsx)(u.Z,{movies:r})]}):(0,d.jsx)(c.Z,{})},p=f.ZP.h2(e||(e=(0,a.Z)(["\n  color: white;\n  padding-left: 0.5rem;\n"])))},735:function(n,r,t){t.d(r,{IR:function(){return i},YJ:function(){return s},ds:function(){return u},tx:function(){return d},zv:function(){return f}});var e=t(861),a=t(757),c=t.n(a),o=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ab3e5468cf143132c670ce55117e8d32",language:"en-US"}}),u=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day");case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie?query=".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(r,"/credits"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(r,"/reviews"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=864.e35afc2d.chunk.js.map