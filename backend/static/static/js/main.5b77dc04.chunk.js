(this["webpackJsonpgo-watch"]=this["webpackJsonpgo-watch"]||[]).push([[0],{49:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(8),o=n.n(s),r=(n(49),n(31)),i=n.n(r),l=n(37),j=n(16),d=n(81),h=n(90),u=n(83),b=n(28),p=n(84),O=n(87),m=n(85),x=n(88),f=n(39),g=n.n(f),v=n(40),N=n.n(v),y=n(3),S=Object(d.a)({root:{minWidth:275,backgroundColor:"gainsboro"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"green"},title:{fontSize:14},pos:{marginBottom:12},nested:{paddingLeft:40}});var w=function(e){var t=e.machine,n=S(),c=a.a.useState(!1),s=Object(j.a)(c,2),o=s[0],r=s[1],i=Object(y.jsx)("span",{className:n.bullet,children:"\u2022"});return console.log(e),Object(y.jsx)(h.a,{className:n.root,children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(b.a,{className:n.title,color:"textSecondary",gutterBottom:!0,children:t.Network}),Object(y.jsxs)(b.a,{variant:"h5",component:"h2",children:[i," ",t.Name]}),Object(y.jsxs)(b.a,{className:n.pos,color:"textSecondary",children:[t.IP," -- ",t.OS]}),Object(y.jsx)(b.a,{variant:"body2",component:"p",children:Object(y.jsxs)(p.a,{component:"nav","aria-labelledby":"nested-list-subheader",children:[Object(y.jsxs)(O.a,{button:!0,onClick:function(){r(!o)},children:[Object(y.jsx)(m.a,{primary:"Services"}),o?Object(y.jsx)(g.a,{}):Object(y.jsx)(N.a,{})]}),Object(y.jsx)(x.a,{in:o,timeout:"auto",unmountOnExit:!0,children:t.Services.map((function(e){return Object(y.jsx)(p.a,{component:"div",disablePadding:!0,children:Object(y.jsx)(O.a,{button:!0,className:n.nested,children:Object(y.jsx)(m.a,{primary:e})})})}))})]})})]})})},k=n(86),E=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}));var A=function(e){var t=e.machines,n=a.a.useState(2),c=Object(j.a)(n,2),s=c[0],o=(c[1],E());return Object(y.jsx)(k.a,{container:!0,className:o.root,spacing:2,children:Object(y.jsx)(k.a,{item:!0,xs:12,children:Object(y.jsx)(k.a,{container:!0,justify:"center",spacing:s,children:t.map((function(e){return Object(y.jsx)(k.a,{item:!0,children:Object(y.jsx)(w,{machine:e})})}))})})})};n(57);var I=function(){var e=a.a.setState({}),t=Object(j.a)(e,2),n=(t[0],t[1],new WebSocket("ws://localhost:8080/ws"));return n.addEventListener("open",(function(e){console.log("WS connected!"),n.send(JSON.stringify({type:"ping",data:{nested:"object"}}))})),n.addEventListener("message",(function(e){switch(console.log("Received: ".concat(e.data)),JSON.parse(e.data).OP){case"PING":n.send(JSON.stringify({type:"PONG"}))}})),n.addEventListener("close",(function(){alert("Websocket connection closed, refreshing page.")})),function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://a-weeb.site/api/proxy_cors?url=https://jsonrequest.anthonyhallak.repl.co/").then((function(e){200===e.status?e.json().then((function(e){console.log(e)})):console.log("CANNOT GET MACHINE INFO!"+e.status)})).catch((function(e){console.log("Fetch Error :::",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)("h1",{children:"LAN-1"}),Object(y.jsx)(A,{machines:this.state.machines})]})})};o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(I,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.5b77dc04.chunk.js.map