import{r as n,j as e,R as o}from"../../vendor.3b56b7e5.js";function x(){const[t,s]=n.exports.useState(0);return e.exports.jsxs("button",{type:"button",onClick:()=>s(r=>r+1),children:["Counter ",t]})}function i(){return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx("h1",{children:"Demo: SPA"}),e.exports.jsxs("ul",{children:[e.exports.jsxs("li",{children:["Is the page's text renderered to HTML? ",e.exports.jsx("b",{children:"No"}),', see "View page source".']}),e.exports.jsxs("li",{children:["Is the page interactive? ",e.exports.jsx("b",{children:"Yes"}),", counter is working: ",e.exports.jsx(x,{}),"."]})]})]})}c();async function c(){o.render(e.exports.jsx(i,{}),document.getElementById("page-view"))}
