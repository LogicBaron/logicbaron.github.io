"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4255],{8230:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"concepts/mlconcept/regularization/weight_decay","title":"Weight Decay","description":"Weight Decay \uae30\ubc95\uc740 Overfitting\uc744 \uc644\ud654\ud558\uae30 \uc704\ud55c Regularization\uc758 \ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4.","source":"@site/docs/concepts/mlconcept/regularization/weight_deacy.md","sourceDirName":"concepts/mlconcept/regularization","slug":"/concepts/mlconcept/regularization/weight_decay","permalink":"/docs/concepts/mlconcept/regularization/weight_decay","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/mlconcept/regularization/weight_deacy.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"weight_decay","sidebar_position":1},"sidebar":"MLConceptSidebar","previous":{"title":"Introduction","permalink":"/docs/concepts/mlconcept/regularization/introduction"},"next":{"title":"Catastrophic Forgetting","permalink":"/docs/concepts/mlconcept/catastrophic_forgetting"}}');var i=a(4848),l=a(8453);const t={id:"weight_decay",sidebar_position:1},m="Weight Decay",c={},r=[{value:"\ucd94\uac00\uc801\uc778 \ud574\uc11d",id:"\ucd94\uac00\uc801\uc778-\ud574\uc11d",level:3},{value:"Weight Decay",id:"weight-decay-1",level:2}];function h(s){const e={annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",msup:"msup",munder:"munder",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"weight-decay",children:"Weight Decay"})}),"\n",(0,i.jsx)(e.p,{children:"Weight Decay \uae30\ubc95\uc740 Overfitting\uc744 \uc644\ud654\ud558\uae30 \uc704\ud55c Regularization\uc758 \ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\uace0\uc804\uc801\uc778 machine learning \ud559\uc2b5\uc5d0\uc11c\ub3c4 Overfitting \uc740 \uace0\uc9c8\uc801\uc778 \ubb38\uc81c\uc600\uc2b5\ub2c8\ub2e4. \uace0\uc804 \uba38\uc2e0\ub7ec\ub2dd\uc5d0\uc11c Overfitting \uc740 \uc8fc\ub85c \ubb38\uc81c\uc758 \ub09c\uc774\ub3c4\uc5d0 \ube44\ud574 \ub108\ubb34 \ubcf5\uc7a1\ud55c \ubaa8\ub378\uc744 \uc120\ud0dd\ud588\uc744 \ub54c \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\ubaa8\ub378\uc774 \ubb38\uc81c\uc5d0 \ube44\ud574 \ub108\ubb34 \ubcf5\uc7a1\ud560 \uacbd\uc6b0, \uace0\ub824\ud560 \ud544\uc694\uac00 \uc5c6\ub294 detail \uae4c\uc9c0 \ubaa8\ub378\uc774 \uc804\ubd80 \uace0\ub824\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:["\uc608\ub97c \ub4e4\uc5b4\uc11c, \uace0\uc591\uc774\uc778\uc9c0 \uac15\uc544\uc9c0\uc778\uc9c0 \ud310\ub2e8\ud558\ub294 \ud138\uc758 \uc0c9\uae54\uc744 \ubaa8\ub378\uc774 \uace0\ub824\ud558\ub294 \uc2dd\uc785\ub2c8\ub2e4. \uc0ac\ub78c\uc740 \ub2e4\uc591\ud55c \ud559\uc2b5 \ub370\uc774\ud130\ub97c \ubcf4\uace0 \ud138\uc758 \uc0c9\uae54\uc740 \uace0\uc591\uc774\uc640 \uac1c\ub97c \uad6c\ubd84\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4, \ub77c\ub294 \uacb0\ub860\uc744 \ub0b4\ub9ac\uc9c0\ub9cc \ubaa8\ub378\uc740 \uadf8\ub7ec\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \ud2b9\ud788 Weight Deacy \uac00 \ub4f1\uc7a5\ud55c \ub525 \ub7ec\ub2dd \uc5f0\uad6c \ucd08\ucc3d\uae30\uc5d0\ub294 \ucef4\ud4e8\ud305 \ub9ac\uc18c\uc2a4\uc758 \ud55c\uacc4\ub85c mini-batch \uc758 \ud06c\uae30\uac00 \uadf8\ub807\uac8c \ud06c\uc9c0 \uc54a\uc558\uace0 \ubaa8\ub378\uc774 \ud55c \ubc88\uc5d0 \ucda9\ubd84\ud55c \uc218\uc758 \ub370\uc774\ud130\ub97c \ud559\uc2b5\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \ubaa8\ub378\uc740 \ud138\uc758 \uc0c9\uae54\uc774 \uc885\uc758 \uad6c\ubd84\uc5d0 \ub3c4\uc6c0\uc774 \uc548\ub41c\ub2e4\ub294 \ub370\uc774\ud130\uac00 \uc544\ub2c8\ub77c, \ud138\uc758 \uc0c9\uae54\uc740 \uc885\uc5d0 \ub530\ub77c \uc544\uc8fc \uc608\ubbfc\ud558\ub2e4\uace0 \ud559\uc2b5\ud558\uac8c \ub429\ub2c8\ub2e4. ",(0,i.jsx)(e.strong,{children:'"\uc9c4\ud55c \uac08\uc0c9\uc740 \uace0\uc591\uc774, \uc57d\uac04 \uc9c4\ud55c \uac08\uc0c9\uc740 \uac1c"'})," \uc640 \uac19\uc740 \uc2dd\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"\uadf8\ub9ac\uace0 \ubbfc\uac10\ud574\uc9c4 \ubaa8\ub378\uc774 \uc5f0\uc18d\ub41c \ub450 \uac12\uc744 \uc804\ud600 \ub2e4\ub978 \uac12\uc73c\ub85c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \ubaa8\ub378\uc740 \uace0\ucc28\ud56d\uc758 \uacc4\uc218\uac00 \ub9e4\uc6b0 \ud070 \ud568\uc218\ub97c \ubcf5\uc7a1\ud55c \ud568\uc218\ub97c \ubaa8\ub378\ub9c1\ud558\uac8c \ub429\ub2c8\ub2e4. \ub2e4\uc2dc \ud55c \ubc88 \ub9d0\ud558\uc9c0\ub9cc \ubaa8\ub378\uc774 \ubb38\uc81c\uc5d0 \ube44\ud574 \ubcf5\uc7a1\ud574 \ubbfc\uac10\ud55c \ud568\uc218\ub97c \ubaa8\ub378\ub9c1\ud560 \uc218 \uc788\uc744 \ub584 \ubc1c\uc0dd\ud558\ub294 \ud604\uc0c1\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:["weight decay \ub294 \ubcf4\ub2e4 \ub2e8\uc21c\ud55c \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\ub3c4\ub85d \ud558\uae30 \uc704\ud574, \ubaa8\ub378\uc758 \ubcf5\uc7a1\ud568\uc5d0 \ub530\ub978 \uc81c\uc57d\uc744 loss \ud568\uc218\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uac04\ub2e8\ud55c \ubaa8\ub378 \uc911 \ud558\ub098\uc778 \uc120\ud615 \ud568\uc218 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"W"}),(0,i.jsx)(e.mi,{children:"T"})]}),(0,i.jsx)(e.mi,{children:"x"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x) = W^T x"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8413em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]})," \uc758 \ubcf5\uc7a1\ud568\uc744 \uce21\uc815\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mi,{children:"W"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"||W||^2"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u2223\u2223"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,i.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})})]})," \uc744 \uce21\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. weight decay \ub294 \ubaa8\ub4e0 parameter \uc758 \uc81c\uacf1\ub188 \ud569\uc744 \uc774\uc6a9\ud574\uc11c \uc804\uccb4 \ubaa8\ub378\uc758 \ubcf5\uc7a1\ud568\uc744 \uce21\uc815\ud558\uace0, \uc774\ub97c loss \ud568\uc218\uc5d0 \uc81c\uc57d\uc73c\ub85c \ucd94\uac00\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.h3,{id:"\ucd94\uac00\uc801\uc778-\ud574\uc11d",children:"\ucd94\uac00\uc801\uc778 \ud574\uc11d"}),"\n",(0,i.jsx)(e.p,{children:"Weight Decay \uc5d0\uc11c Weight \ud06c\uae30\ub9cc\ud07c\uc758 penalty \ub97c \uc8fc\ub294 \uac83\uc5d0 \ub300\ud55c \uc774\ub7f0 \ud574\uc11d\ub3c4 \uac00\ub2a5\ud568."}),"\n",(0,i.jsx)(e.p,{children:"\uac00\uc7a5 \ub2e8\uc21c\ud55c \ud568\uc218\uc758 \ud615\ud0dc\ub294 trivial function \uc785\ub2c8\ub2e4. f(x) = 0 \uc73c\ub85c\uc368, \ubaa8\ub4e0 \ucc28\ud56d\uc758 \uacc4\uc218\uac00 0\uc778 \ud615\ud0dc\uc785\ub2c8\ub2e4. parameter \uc5d0 penalty \ub97c \uc8fc\ub294 \uac83\uc740 \ub525\ub7ec\ub2dd \ubaa8\ub378\uc774 \ubaa8\ub378\ub9c1\ud558\uace0 \uc788\ub294 \ud568\uc218\ub97c trivial \uc5d0 \uac00\uae5d\uac8c \ud558\ub294 \uc791\uc6a9\uc774\ub77c\uace0 \ud574\uc11d\ud574\ub3c4 \ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h2,{id:"weight-decay-1",children:"Weight Decay"}),"\n",(0,i.jsxs)(e.p,{children:["\ubaa8\ub378\uc758 \ubcf5\uc7a1\ud568\uc5d0 \ub300\ud55c \uce21\uc815\uac12\uc778 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mi,{children:"W"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"||W||^2"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u2223\u2223"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,i.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})})]})," \uc758 \ud2b9\uc815 \ube44\uc728\uc744 \uc6d0\ub798 loss \uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. \uc774 \ube44\uc728\uc744 \uc758\ubbf8\ud558\ub294 \uc0c1\uc218 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"\u03bb"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\lambda"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"\u03bb"})]})})]}),"\ub294 weight decay hyper parameter, \ub610\ub294 \uc904\uc5ec\uc11c weight decay \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"L"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"})]})]}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"L"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"l"})]})]}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"\u03bb"}),(0,i.jsxs)(e.munder,{children:[(0,i.jsx)(e.mo,{children:"\u2211"}),(0,i.jsx)(e.mi,{children:"i"})]}),(0,i.jsxs)(e.msubsup,{children:[(0,i.jsx)(e.mi,{children:"W"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"L_{total} = L_{origianl} + \\lambda \\sum_{i} {W_i^2}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"or"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"ian"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"2.3277em",verticalAlign:"-1.2777em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"\u03bb"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mop op-limits",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,i.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{children:(0,i.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"0.8641em"},children:[(0,i.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,i.jsx)(e.span,{})})})]})})]})})]})]})]})}),"\n",(0,i.jsx)(e.p,{children:"\uc774\ub807\uac8c L2 Norm \uc744 \ud65c\uc6a9\ud574\uc11c Weight Decay \ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 L2 Regularization \uc774\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4."})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var n=a(6540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);