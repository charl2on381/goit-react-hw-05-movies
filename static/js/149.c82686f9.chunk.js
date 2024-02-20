"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{368:function(n,r,e){var t,o,a,u=e(168),c=(e(791),e(689)),i=e(87),s=e(924),d=e(184);r.Z=function(n){var r=n.movies,e=(0,c.TH)();return(0,d.jsx)(l,{children:r.map((function(n){return(0,d.jsx)(f,{children:(0,d.jsx)(p,{state:{from:e},to:"/movies/".concat(n.id),children:n.title})},n.id)}))})};var l=s.ZP.ul(t||(t=(0,u.Z)(["\n  background-color: #2c2c2c;\n  padding: 0;\n  list-style-type: none;\n"]))),f=s.ZP.li(o||(o=(0,u.Z)(["\n  padding: 0.5rem 0;\n  padding-left: 1rem;\n  border-bottom: 1px solid #444;\n  color: white;\n"]))),p=(0,s.ZP)(i.OL)(a||(a=(0,u.Z)(["\n  color: white; /* White text color for movie titles */\n  text-decoration: none;\n  display: block;\n  /* padding: 0.5rem; */\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: #3d3d3d; /* Slightly lighter for hover/focus */\n    color: #06bcee;\n  }\n"])))},302:function(n,r,e){e.d(r,{i:function(){return a}});var t=e(439),o=e(791),a=function(n,r){var e=(0,o.useState)(null),a=(0,t.Z)(e,2),u=a[0],c=a[1],i=(0,o.useState)(null),s=(0,t.Z)(i,2),d=s[0],l=s[1],f=(0,o.useState)(!1),p=(0,t.Z)(f,2),h=p[0],m=p[1];return(0,o.useEffect)((function(){m(!0),n(r).then((function(n){return c(n)})).catch((function(n){return l(n.message)})).finally(m(!1))}),[n,r]),{data:u,setData:c,error:d,loading:h}}},149:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var t,o,a,u=e(439),c=e(368),i=e(791),s=e(87),d=e(735),l=e(168),f=e(924),p=e(184),h=function(n){var r=n.handleSetQuery,e=(0,i.useState)(""),t=(0,u.Z)(e,2),o=t[0],a=t[1];return(0,p.jsxs)(m,{onSubmit:function(n){n.preventDefault(),r(o),a("")},children:[(0,p.jsx)("label",{children:(0,p.jsx)(v,{type:"text",value:o,name:"query",onChange:function(n){var r=n.target.value;a(r)},required:!0})}),(0,p.jsx)(g,{children:"Search"})]})},m=f.ZP.form(t||(t=(0,l.Z)(["\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  padding-left: 1rem;\n"]))),v=f.ZP.input(o||(o=(0,l.Z)(["\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n  border: none;\n  border-radius: 4px;\n"]))),g=f.ZP.button(a||(a=(0,l.Z)(["\n  padding: 0.5rem 1rem;\n  background-color: #06bcee; /* Highlight color for the button */\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: #05a0cc;\n  }\n"]))),b=e(302),x=e(579),Z=e(94),y=function(){var n=(0,s.lr)(),r=(0,u.Z)(n,2),e=r[0],t=r[1],o=e.get("query")||"",a=(0,b.i)(d.IR,o),i=a.data,l=a.error,f=a.loading;return l?(Z.Am.error("Sorry, problem connection to server! ".concat(l)),(0,p.jsx)(Z.Ix,{})):f?(0,p.jsx)(x.Z,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{handleSetQuery:function(n){t(n?{query:n}:{})}}),i&&(0,p.jsx)(c.Z,{movies:i})]})}},735:function(n,r,e){e.d(r,{IR:function(){return i},YJ:function(){return s},ds:function(){return c},tx:function(){return l},zv:function(){return d}});var t=e(861),o=e(757),a=e.n(o),u=e(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ab3e5468cf143132c670ce55117e8d32",language:"en-US"}}),c=function(){var n=(0,t.Z)(a().mark((function n(){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/movie/day");case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie?query=".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(r,"/credits"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(r,"/reviews"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=149.c82686f9.chunk.js.map