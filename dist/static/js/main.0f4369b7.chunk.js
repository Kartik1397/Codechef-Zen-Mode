(this["webpackJsonpcodechef-problem-page-prettifier"]=this["webpackJsonpcodechef-problem-page-prettifier"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(4),a=n.n(i),l=(n(9),n(2)),o=n(0),s={space1:{marginBottom:"10px"},radioTitle:{marginBottom:"20px",fontSize:"15px"},space3:{marginBottom:"30px"},gridCol2:{display:"grid",gridTemplateColumns:"1fr 1fr"},radioLabel:{paddingLeft:"10px",fontSize:"15px"},flexCenter:{display:"flex",alignItems:"center"},mp0:{margin:"0",padding:"0"}};function d(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),c=Object(l.a)(n,2),i=c[0],a=c[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]}var j=function(){var e=d("zen",!0),t=Object(l.a)(e,2),n=t[0],c=t[1],i=d("dark",!1),a=Object(l.a)(i,2),j=a[0],f=a[1];Object(r.useEffect)((function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{type:"zen",value:n})}))}),[n]),Object(r.useEffect)((function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{type:"dark",value:j})}))}),[j]);var b=function(e){var t=e.target.value;c("ON"===t)},u=function(e){var t=e.target.value;f("ON"===t)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{style:s.space3,children:[Object(o.jsx)("div",{style:s.radioTitle,children:"Default Mode"}),Object(o.jsxs)("div",{style:s.gridCol2,children:[Object(o.jsxs)("div",{style:s.flexCenter,children:[Object(o.jsx)("input",{style:s.mp0,type:"radio",id:"zen",name:"toggle_default",value:"ON",onChange:b,checked:n}),Object(o.jsx)("label",{for:"zen",style:s.radioLabel,children:"Zen"})]}),Object(o.jsxs)("div",{style:s.flexCenter,children:[Object(o.jsx)("input",{style:s.mp0,type:"radio",id:"normal",name:"toggle_default",value:"OFF",onChange:b,checked:!n}),Object(o.jsx)("label",{for:"normal",style:s.radioLabel,children:"Normal"})]})]})]}),Object(o.jsxs)("div",{style:s.space3,children:[Object(o.jsx)("div",{style:s.radioTitle,children:"Dark Mode"}),Object(o.jsxs)("div",{style:s.gridCol2,children:[Object(o.jsxs)("div",{style:s.flexCenter,children:[Object(o.jsx)("input",{style:s.mp0,type:"radio",id:"on",name:"toggle_dark_mode",value:"ON",onChange:u,checked:j}),Object(o.jsx)("label",{for:"on",style:s.radioLabel,children:"On"})]}),Object(o.jsxs)("div",{style:s.flexCenter,children:[Object(o.jsx)("input",{style:s.mp0,type:"radio",id:"off",name:"toggle_dark_mode",value:"OFF",onChange:u,checked:!j}),Object(o.jsx)("label",{for:"off",style:s.radioLabel,children:"Off"})]})]})]})]}),Object(o.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.5)"},children:"Press CTRL/CMD + I to toggle between zen mode"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[11,1,2]]]);