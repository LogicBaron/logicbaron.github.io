"use strict";(self.webpackChunklogicbaron=self.webpackChunklogicbaron||[]).push([[4787],{876:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});a(6540);var s=a(53),r=a(9024),l=a(7559),n=a(1312);const c=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(6133),o=a(1107);const g={tag:"tag_Nnez"};var u=a(4848);function h(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(i.A,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function d(t){let{tags:e}=t;const a=function(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,u.jsx)(h,{letterEntry:t},t.letter)))})}var j=a(1463);function m(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:e}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function x(t){let{tags:e,title:a}=t;return(0,u.jsx)(r.e3,{className:(0,s.A)(l.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:a}),(0,u.jsx)(d,{tags:e})]})})})})}function p(t){const e=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...t,title:e}),(0,u.jsx)(x,{...t,title:e})]})}},6133:(t,e,a)=>{a.d(e,{A:()=>c});a(6540);var s=a(53),r=a(5489);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(4848);function c(t){let{permalink:e,label:a,count:c}=t;return(0,n.jsxs)(r.A,{href:e,className:(0,s.A)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}}}]);