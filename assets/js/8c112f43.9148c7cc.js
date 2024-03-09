"use strict";(self.webpackChunklogicbaron=self.webpackChunklogicbaron||[]).push([[9],{7527:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>o,frontMatter:()=>m,metadata:()=>t,toc:()=>c});var n=a(4848),l=a(8453);const m={id:"mutual_information",sidebar_position:4,tags:["information"]},i="Mutual Information",t={id:"concepts/math/information/mutual_information",title:"Mutual Information",description:"Information \uacfc \uad00\ub828\ud574\uc11c \ub9c8\uc9c0\ub9c9 \uae00\uc774 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Mutual Information \uc740 \uc0c1\ud638 \uc815\ubcf4\ub7c9 \uc73c\ub85c\uc368 \uc870\uae08 \uc0dd\uc18c\ud569\ub2c8\ub2e4.",source:"@site/docs/concepts/math/information/mutual_information.md",sourceDirName:"concepts/math/information",slug:"/concepts/math/information/mutual_information",permalink:"/docs/concepts/math/information/mutual_information",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/math/information/mutual_information.md",tags:[{label:"information",permalink:"/docs/tags/information"}],version:"current",sidebarPosition:4,frontMatter:{id:"mutual_information",sidebar_position:4,tags:["information"]},sidebar:"MathSidebar",previous:{title:"KL Divergence",permalink:"/docs/concepts/math/information/kl_divergence"},next:{title:"Calculus",permalink:"/docs/concepts/math/calculus/"}},r={},c=[{value:"Example of Mutual Information",id:"example-of-mutual-information",level:2},{value:"Definition of Mutual Information",id:"definition-of-mutual-information",level:2},{value:"Properties of Mutual Information",id:"properties-of-mutual-information",level:2},{value:"Mutual Information is Symmetric.",id:"mutual-information-is-symmetric",level:3},{value:"Mutual Information is Positive.",id:"mutual-information-is-positive",level:3},{value:"Interpretation of Mutual Information",id:"interpretation-of-mutual-information",level:3},{value:"Difference between Joint Entropy.",id:"difference-between-joint-entropy",level:3}];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",munder:"munder",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"mutual-information",children:"Mutual Information"}),"\n",(0,n.jsxs)(e.p,{children:["Information \uacfc \uad00\ub828\ud574\uc11c \ub9c8\uc9c0\ub9c9 \uae00\uc774 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Mutual Information \uc740 ",(0,n.jsx)(e.strong,{children:"\uc0c1\ud638 \uc815\ubcf4\ub7c9"})," \uc73c\ub85c\uc368 \uc870\uae08 \uc0dd\uc18c\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.p,{children:["mutual informatoin \uc740 ",(0,n.jsx)(e.strong,{children:"\ud558\ub098\uc758 \uc0ac\uac74\uc744 \uad00\uce21\ud568\uc73c\ub85c\uc368 \ub610 \ub2e4\ub978 \uc0ac\uac74\uc5d0 \ub300\ud574 \uc5bb\uc744 \uc218 \uc788\ub294 \uc815\ubcf4\uc758 \uc591"})," \uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774 \uc758\ubbf8\uc5d0 \ub300\ud574\uc11c \uc544\ub798 \ubb38\ub2e8\uc5d0\uc11c \uc870\uae08 \ub354 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.h2,{id:"example-of-mutual-information",children:"Example of Mutual Information"}),"\n",(0,n.jsx)(e.p,{children:"Mutual Information \uc758 \uac1c\ub150\uc5d0 \ub300\ud574\uc11c \uba3c\uc800 \uc9c1\uad00\uc801\uc73c\ub85c \uc774\ud574\ud574\ubd05\uc2dc\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"\ube68\uac04 \uad6c\uc2ac 1\uac1c, \ud30c\ub780 \uad6c\uc2ac 1\uac1c\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc0c1\ud669\uc744 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. \uad6c\uc2ac\uc744 \ud558\ub098\uc529 \ub450 \uac1c\uc758 \uc8fc\uba38\ub2c8\uc5d0 \ub123\uc740 \ub4a4 \uccab \ubc88\uc9f8 \uc8fc\uba38\ub2c8\ub9cc \ud655\uc778\ud560 \uc218 \uc788\ub2e4\uace0 \ud569\uc2dc\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"\uccab \ubc88\uc9f8 \uc8fc\uba38\ub2c8\uc5d0\uc11c \ube68\uac04 \uad6c\uc2ac\uc774 \ub098\uc654\ub2e4\uba74 \ub450 \ubc88\uc9f8 \uc8fc\uba38\ub2c8\uc5d0\ub294 \ud30c\ub780 \uad6c\uc2ac\uc774 \ub4e4\uc5b4\uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc6b0\ub9ac\ub294 \uc5b4\ub835\uc9c0 \uc54a\uac8c \uc9d0\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc18\ub300\uc758 \uacbd\uc6b0\uc5d0\ub3c4 \ub9c8\ucc2c\uac00\uc9c0 \uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(e.p,{children:["\uc774 \uc608\uc2dc\uc5d0\uc11c \uc6b0\ub9ac\ub294 \ub450 \ubc88\uc9f8 \uc8fc\uba38\ub2c8\uc5d0 \ub300\ud574 \uc5b4\ub5a4 \uad00\uce21\ub3c4 \ud558\uc9c0 \uc54a\uc558\uc9c0\ub9cc \uccab \ubc88\uc9f8 \uc8fc\uba38\ub2c8\uc5d0 \ub300\ud55c \uad00\uce21\ub9cc\uc73c\ub85c\ub3c4 \ub450 \ubc88\uc9f8 \uc8fc\uba38\ub2c8\uc5d0 \ub300\ud55c ",(0,n.jsx)(e.strong,{children:"\uc815\ubcf4"})," \ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\uc2ac\uc758 \uac1c\uc218\uac00 \ud558\ub098\uac00 \uc544\ub2c8\ub77c\ub3c4 \uc0c1\uad00\uc5c6\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uad6c\uc2ac\uc5d0 \ub300\ud55c \uad00\uce21\uc740 \ub450 \ubc88\uc9f8 \uc8fc\uba38\ub2c8\uc5d0 \ub300\ud55c ",(0,n.jsx)(e.strong,{children:"\uc815\ubcf4"})," \ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.p,{children:["\uc774\ub807\uac8c ",(0,n.jsx)(e.strong,{children:"\ud558\ub098\uc758 \uc0ac\uac74\uc744 \uad00\uce21\ud568\uc73c\ub85c\uc368 \ub610 \ub2e4\ub978 \uc0ac\uac74\uc5d0 \ub300\ud574 \uc5bb\uc744 \uc218 \uc788\ub294 \uc815\ubcf4\uc758 \uc591"})," \uc744 ",(0,n.jsx)(e.strong,{children:"Mutual Information"})," \uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Mutual Information"})," \uc774\ub780, \ud55c \uc0ac\uac74\uc744 \uad00\uce21\ud568\uc73c\ub85c\uc368 \ub610 \ub2e4\ub978 \uc0ac\uac74\uc5d0 \ub300\ud574 \uc5bb\uc744 \uc218 \uc788\ub294 \uc815\ubcf4\ub7c9\uc744 \uc758\ubbf8\ud55c\ub2e4."]})}),"\n",(0,n.jsx)(e.h2,{id:"definition-of-mutual-information",children:"Definition of Mutual Information"}),"\n",(0,n.jsxs)(e.p,{children:["\ub450 \ub79c\ub364\ubcc0\uc218 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"X"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," \uc640 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"Y"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Y"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"})]})})]})," \uc0ac\uc774\uc758 \uc0c1\ud638 \uc815\ubcf4\ub294 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"I(X, Y)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \ub77c\uace0 \ud45c\uae30\ud558\uba70 \uc544\ub798\uc640 \uac19\uc774 \uc815\uc758\ub429\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:":"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"\u2208"}),(0,n.jsx)(e.mi,{children:"X"})]})]}),(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"\u2208"}),(0,n.jsx)(e.mi,{children:"Y"})]})]}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"I(X; Y) := \\sum_{x \\in X} \\sum_{y \\in Y} P(x,y) log \\left(  \\frac{P(x,y)}{P(x)P(y)} \\right)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:":="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.8804em",verticalAlign:"-1.4304em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8557em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"\u2208"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"X"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.3217em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8557em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"\u2208"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.22222em"},children:"Y"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.4304em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.427em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.936em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:")"})})]})]})]})]})}),"\n",(0,n.jsx)(e.h2,{id:"properties-of-mutual-information",children:"Properties of Mutual Information"}),"\n",(0,n.jsx)(e.p,{children:"Mutual Information \uc758 \uc758\ubbf8\uc640 \ud568\uaed8 \uba87 \uac00\uc9c0 \ud2b9\uc9d5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc5ed\uc2dc \uc99d\uba85\ubcf4\ub2e4\ub294 \uc9c1\uad00\uc801\uc778 \ud574\uc11d \uc704\uc8fc\ub85c \uc11c\uc220\ud558\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.h3,{id:"mutual-information-is-symmetric",children:"Mutual Information is Symmetric."}),"\n",(0,n.jsxs)(e.p,{children:["Mutual Information \uc740 \ub300\uce6d\uc785\ub2c8\ub2e4. ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"I(X;Y) = I(Y;X)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["\uc774\ub294 \ub2f9\uc5f0\ud55c \ub9d0\uc785\ub2c8\ub2e4. \uc0ac\uac74 X\uc5d0 \ub300\ud574 \uc54c\uac8c \ub418\uba74 \uc0ac\uac74 Y \uc5d0 \ub300\ud574\uc11c \uc54c\uac8c \ub418\ub294 \uc815\ubcf4\ub294, \ubc18\ub300\ub85c ",(0,n.jsx)(e.strong,{children:"Y\uc5d0 \ub300\ud55c \ud574\ub2f9 \uc815\ubcf4\ub97c \uc54c\uace0\uc788\uc73c\uba74 X \uc5d0 \ub300\ud574 \uadf8\ub9cc\ud07c \uc54c \uc218 \uc788\ub2e4"})," \uc640 \uac19\uc740 \uc758\ubbf8\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.h3,{id:"mutual-information-is-positive",children:"Mutual Information is Positive."}),"\n",(0,n.jsx)(e.p,{children:"Mutual Information \uc740 \ud56d\uc0c1 \uc591\uc218\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.h3,{id:"interpretation-of-mutual-information",children:"Interpretation of Mutual Information"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mi,{children:"L"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"Y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"I(X;Y) = D_{KL} \\left( P(X,Y) || P(X)P(Y)  \\right)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"L"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]})]})]})]})}),"\n",(0,n.jsx)(e.h3,{id:"difference-between-joint-entropy",children:"Difference between Joint Entropy."}),"\n",(0,n.jsx)(e.p,{children:"\uc81c\uac00 \uacf5\ubd80\ud560 \ub54c Mutual Information \uacfc Joint Entropy \uc758 \ucc28\uc774\ub97c \uc815\ud655\ud788 \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"Mutual Information \uc740 \ud55c \uc0ac\uac74 X \ub97c \uad00\uce21\ud588\uc744 \ub584, \uc0ac\uac74 Y \uc5d0 \ub300\ud55c \uad00\uce21 \uc5c6\uc774 Y \uc5d0 \ub300\ud574 \uc54c \uc218 \uc788\ub294 \uc815\ubcf4\ub7c9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"Joint Entropy \ub294 \uc0ac\uac74 X\uc640 \uc0ac\uac74 Y\ub97c \ud568\uaed8 \uad00\uce21\ud558\ub294 \uacbd\uc6b0 \uc54c \uc218 \uc788\ub294 \uc815\ubcf4\ub7c9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."})]})}function o(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>t});var n=a(6540);const l={},m=n.createContext(l);function i(s){const e=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(m.Provider,{value:e},s.children)}}}]);