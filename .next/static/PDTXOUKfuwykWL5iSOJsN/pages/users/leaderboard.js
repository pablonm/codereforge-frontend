(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7D8P":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/leaderboard",function(){var e=t("VUHn");return{page:e.default||e}}])},VUHn:function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),a=t.n(r),o=t("O40h"),s=t("q1tI"),c=t.n(s),i=t("1no/"),u=t("uOj5"),l=(t("W93S"),t("pWf2")),d=t.n(l),p=t("YFqc"),m=t.n(p),f=t("IP2g"),h=t("vOnD"),b=h.b.div.withConfig({displayName:"LeaderboardStyles__LeaderboardItem",componentId:"bsujkz-0"})(["background-color:#1c1c1c;padding:10px 20px;margin-bottom:10px;border:1px solid #2e2e2e;display:flex;justify-content:space-between;cursor:pointer;h1{font-size:18px;margin-bottom:0;display:inline-block;margin-left:20px;}"]),w=h.b.div.withConfig({displayName:"LeaderboardStyles__Score",componentId:"bsujkz-1"})(["line-height:29px;span{color:white;}svg{"," margin-left:10px;}"],function(e){switch(e.position){case 1:return"color: #FACC2E;";case 2:return"color: #BDBDBD;";case 3:return"color: #DF7401;";default:return null}}),g=function(e){var n=e.users;return c.a.createElement("div",null,n.map(function(e,n){return c.a.createElement(m.a,{key:e._id,href:"/users/".concat(e._id)},c.a.createElement("a",null,c.a.createElement(b,null,c.a.createElement("div",null,c.a.createElement(d.a,{shape:"square",icon:"user",src:e.picture}),c.a.createElement("h1",null,e.name)),c.a.createElement(w,{position:n+1},c.a.createElement("span",null,e.score),c.a.createElement(f.a,{icon:"award"})))))}))},E=function(e){var n=e.users;return c.a.createElement(u.a,{title:"Users leaderboard",description:"These are the users with the highest score in the platform",render:function(){return c.a.createElement(g,{users:n})}})};E.getInitialProps=Object(o.default)(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)().get("/users");case 2:return n=e.sent,e.abrupt("return",{users:n.data});case 4:case"end":return e.stop()}},e)}));n.default=E}},[["7D8P",1,0,2]]]);