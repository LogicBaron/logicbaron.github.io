"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5279],{8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var n=i(6540);const t={},a=n.createContext(t);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:s},e.children)}},9584:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"practice/efficienttrain/MOE/moe3","title":"Efficient MOE","description":"Large Model \uc5d0\uc11c MOE \uc758 \uc801\uc6a9\uc5d0 \ub530\ub978 pros / cons \ub97c \uc798 \ubd84\uc11d\ud55c \ub17c\ubb38. \uc8fc\uc694 \ub17c\uc810\ub9cc \ud30c\uc545\ud558\uba74 \ub418\ub294 \ub17c\ubb38\uc774\ub77c\uace0 \uc0dd\uac01\ud574\uc11c \uac04\ub2e8\ud558\uac8c \uc694\uc57d\ud558\ub824 \ud568.","source":"@site/docs/practice/efficienttrain/MOE/moe3.md","sourceDirName":"practice/efficienttrain/MOE","slug":"/practice/efficienttrain/MOE/moe3","permalink":"/docs/practice/efficienttrain/MOE/moe3","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/practice/efficienttrain/MOE/moe3.md","tags":[{"inline":true,"label":"MOE","permalink":"/docs/tags/moe"},{"inline":true,"label":"Transformer","permalink":"/docs/tags/transformer"}],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Efficient MOE","sidebar_position":4,"tags":["MOE","Transformer"]},"sidebar":"EfficienttrainSidebar","previous":{"title":"Switch Transformers","permalink":"/docs/practice/efficienttrain/MOE/switchformer"},"next":{"title":"Mistral MOE","permalink":"/docs/practice/efficienttrain/MOE/mistralmoe"}}');var t=i(4848),a=i(8453);const r={title:"Efficient MOE",sidebar_position:4,tags:["MOE","Transformer"]},l="Efficient Large Scale Language Modeling with Mixtures of Experts",c={},m=[{value:"\uc2e4\ud5d8 \uc124\uacc4",id:"\uc2e4\ud5d8-\uc124\uacc4",level:2},{value:"\ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130.",id:"\ud559\uc2b5-\ubc0f-\ud3c9\uac00-\ub370\uc774\ud130",level:2},{value:"\uc8fc\uc694 \uacb0\uacfc",id:"\uc8fc\uc694-\uacb0\uacfc",level:2}];function h(e){const s={a:"a",annotation:"annotation",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mrow:"mrow",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"efficient-large-scale-language-modeling-with-mixtures-of-experts",children:"Efficient Large Scale Language Modeling with Mixtures of Experts"})}),"\n",(0,t.jsx)(s.p,{children:"Large Model \uc5d0\uc11c MOE \uc758 \uc801\uc6a9\uc5d0 \ub530\ub978 pros / cons \ub97c \uc798 \ubd84\uc11d\ud55c \ub17c\ubb38. \uc8fc\uc694 \ub17c\uc810\ub9cc \ud30c\uc545\ud558\uba74 \ub418\ub294 \ub17c\ubb38\uc774\ub77c\uace0 \uc0dd\uac01\ud574\uc11c \uac04\ub2e8\ud558\uac8c \uc694\uc57d\ud558\ub824 \ud568."}),"\n",(0,t.jsx)(s.h2,{id:"\uc2e4\ud5d8-\uc124\uacc4",children:"\uc2e4\ud5d8 \uc124\uacc4"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"GPT-3"}),"\n",(0,t.jsx)(s.li,{children:"top-2 expert / 512 experts"}),"\n",(0,t.jsx)(s.li,{children:"capacity factor \ub97c \uc774\uc6a9\ud55c gating regularization.."}),"\n",(0,t.jsxs)(s.li,{children:["expert model \uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 lr \uc744 ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsxs)(s.mfrac,{children:[(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"q"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"E"})]})]})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\frac{1}{/sqrt{E}}"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.3651em",verticalAlign:"-0.52em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,t.jsx)(s.span,{className:"mfrac",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,t.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mtight",children:"/"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"q"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"E"})})]})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,t.jsxs)(s.span,{style:{top:"-3.394em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"1"})})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.52em"},children:(0,t.jsx)(s.span,{})})})]})}),(0,t.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})," \ub9cc\ud07c \uc904\uc784.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/practice/efficienttrain/MOE/switchformer",children:"SwitchFormer"})," \uc5d0\uc11c\ub294 \ud559\uc2b5 \ubd88\uc548\uc815\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 expert weight \ub97c \uc7ac\uc124\uc815\ud588\uc73c\ub098, \ud544\uc694\uc5c6\ub2e4\uace0 \uc8fc\uc7a5."]}),"\n",(0,t.jsxs)(s.li,{children:["expert \uac00 \ucc98\ub9ac\ud558\ub294 \ubc30\uce58 \uc0ac\uc774\uc988\uac00 ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"E"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"E"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]})})]}),"-times \uc791\uae30 \ub54c\ubb38\uc5d0, lr \ub3c4 \uac19\uc774 \uc904\uc5ec\uc8fc\ub2c8\uae4c \ud574\uacb0\ub418\uc5c8\ub2e4\uace0 \ud568."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"300B \ud1a0\ud070 \ud559\uc2b5. \ucee8\ud14d\uc2a4\ud2b8 \ud06c\uae30\ub294 20248 tokens."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\ud559\uc2b5-\ubc0f-\ud3c9\uac00-\ub370\uc774\ud130",children:"\ud559\uc2b5 \ubc0f \ud3c9\uac00 \ub370\uc774\ud130."}),"\n",(0,t.jsx)(s.h2,{id:"\uc8fc\uc694-\uacb0\uacfc",children:"\uc8fc\uc694 \uacb0\uacfc"})]})}function o(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);