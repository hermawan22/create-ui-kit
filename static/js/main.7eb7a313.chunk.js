(window["webpackJsonpcreate-ui-kit"]=window["webpackJsonpcreate-ui-kit"]||[]).push([[0],{156:function(e,n,t){e.exports=t(524)},523:function(e,n,t){},524:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(60),c=t.n(r),u=t(17),l=t(8),m=t(531),i=t(31),s=t(28),d=t(529),f=t(528),b=t(35),p=t(143),E=function(e){var n=e.input.onChange;return o.a.createElement(p.CompactPicker,{onChange:function(e){return n(e)}})},g=function(){var e=Object(u.c)((function(e){return e.form})),n=Object(b.get)(e,"button.values.color",!1);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"color"},"Color"),o.a.createElement(d.a,{name:"color",component:"input",type:"checkbox"}),n&&o.a.createElement(d.a,{name:"background",component:E}),n&&o.a.createElement(d.a,{name:"color",component:E})))},h=g=Object(f.a)({form:"button"})(g),v=t(152),k=t(530),x=t(527),O=t(145),w=t(146);function j(){var e=Object(O.a)(["\n    background: ",";\n    color: ",";\n    font-size: 1.5em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border: 2px solid black;\n    border-radius: 3px;\n  "]);return j=function(){return e},e}var _=function(){var e=Object(u.c)((function(e){return e.form})),n=Object(b.get)(e,"button.values.background.hex","white"),t=Object(b.get)(e,"button.values.color.hex","black"),a=w.a.button(j(),(function(e){return e.background}),(function(e){return e.color}));return o.a.createElement("div",null,o.a.createElement(a,{background:n,color:t},"Button"))},y=function(e){return console.log(e,"ini value"),'\n  import React from "react";\n  import { useSelector } from "react-redux";\n  import styled from \'styled-components\';\n  import { get } from "lodash";\n\n  const Button = () => {\n    const form = useSelector(state => state.form);\n    const background = get(form, "button.values.background.hex", "white");\n    const color = get(form, "button.values.color.hex", "black");\n\n    const Button = styled.button`\n      background: '.concat((function(e){return e.background}),";\n      color: ").concat((function(e){return e.color}),";\n      font-size: 1.5em;\n      margin: 1em;\n      padding: 0.25em 1em;\n      border: 2px solid black;\n      border-radius: 3px;\n    `;\n\n    return (\n      <div>\n        <Button background={background} color={color}>Button</Button>\n      </div>\n    );\n  };\n\n  export default Button;\n  ")},B=function(e){var n=Object(a.useState)(),t=Object(v.a)(n,2),r=t[0],c=t[1],l=Object(u.c)((function(e){return e.form}));return Object(a.useEffect)((function(){var e=y(l);c(e)}),[l]),o.a.createElement("div",null,o.a.createElement(k.a,{language:"javascript",style:x.a,startingLineNumber:!0},r),o.a.createElement(_,null))},N=[{path:"/",exact:!0,name:"Home",options:function(){return o.a.createElement("div",null,"home!")},main:function(){return o.a.createElement("h2",null,"Home")}},{path:"/button",name:"Button",options:function(){return o.a.createElement(h,null)},main:function(){return o.a.createElement(B,null)}}],S=function(){return o.a.createElement("div",null,N.map((function(e,n){return o.a.createElement("div",{key:n},o.a.createElement(i.b,{to:e.path},e.name),o.a.createElement(s.a,{path:e.path,exact:e.exact,component:e.options}))})))},C=function(){return o.a.createElement("div",null,N.map((function(e,n){return o.a.createElement(s.a,{key:n,path:e.path,exact:e.exact,component:e.main})})))},D=(t(523),function(){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"flex-grid"},o.a.createElement("aside",{className:"col sidebar"},o.a.createElement("h2",null,"Components"),o.a.createElement(S,null)),o.a.createElement("section",{className:"col main"},o.a.createElement("h2",null,N.map((function(e,n){return o.a.createElement(s.a,{key:n,path:e.path,exact:e.exact,component:function(){return e.name}})}))),o.a.createElement(C,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(l.b)({form:m.a}),X=Object(l.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(u.a,{store:X},o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[156,1,2]]]);
//# sourceMappingURL=main.7eb7a313.chunk.js.map