"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5068],{9439:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(9496),a=l(5924),r=l(2553),o=l(7769),c=l(7212),s=l(3394);const u={backToTopButton:"backToTopButton_cQzX",backToTopButtonShow:"backToTopButtonShow_VDm0"};function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[l,a]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:o,cancelScroll:u}=(0,c.Ct)();return(0,c.RF)(((e,l)=>{let{scrollY:n}=e;const o=l?.scrollY;o&&(r.current?r.current=!1:n>=o?(u(),a(!1)):n<t?a(!1):n+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,s.S)((e=>{e.location.hash&&(r.current=!0,a(!1))})),{shown:l,scrollToTop:()=>o(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",o.k.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}},6875:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(9496),a=l(5924),r=l(8233),o=l(9439);const c={main:"main_XrPc",main__left:"main__left_NDYf",main__right:"main__right_PprE",sidebar:"sidebar_yvSt",sidebar__item:"sidebar__item_u3IP"};function s(e){let{children:t,Left:l,Right:s,...u}=e;return n.createElement(r.Z,{title:u.title},n.createElement(o.Z,null),n.createElement("main",null,n.createElement("div",{className:(0,a.Z)("row",c.main)},l&&n.createElement("div",{className:(0,a.Z)("col",s?"col--9":"col--12",c.main__left)},n.createElement(l,null)),l&&s&&n.createElement("div",{className:(0,a.Z)("col col--3",c.main__left)},n.createElement(s,null)),!(l&&s)&&n.createElement("div",{className:(0,a.Z)("col col--12")},t))))}},3932:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var n=l(9496);l(2553);var a=l(5924),r=l(8350);const o={tag:"tag_oXlm",tagRegular:"tagRegular_Wbmv",tagWithCount:"tagWithCount_pBqs"};function c(e){let{permalink:t,label:l,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,a.Z)(o.tag,c?o.tagWithCount:o.tagRegular)},l,c&&n.createElement("span",null,c))}const s={tag:"tag_suha"};function u(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:s.tag},n.createElement(c,e))))),n.createElement("hr",null))}function m(e){let{tags:t}=e;const l=function(e){const t={};return Object.values(e).forEach((e=>{const l=function(e){return e[0].toUpperCase()}(e.label);t[l]??=[],t[l].push(e)})),Object.entries(t).sort(((e,t)=>{let[l]=e,[n]=t;return l.localeCompare(n)})).map((e=>{let[t,l]=e;return{letter:t,tags:l.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return n.createElement("section",{className:"margin-vert--lg"},l.map((e=>n.createElement(u,{key:e.letter,letterEntry:e}))))}var i=l(6875);function b(e){const{tags:t}=e;return n.createElement(i.Z,null,n.createElement(m,{tags:t}))}}}]);