"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4183],{9137:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>m,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"models/mlmodel/community/modularity","title":"Module","description":"\ub124\ud2b8\uc6cc\ud06c \uc774\ub860\uc5d0\uc11c \ub2e4\ub8e8\ub294,","source":"@site/docs/models/mlmodel/community/modularity.md","sourceDirName":"models/mlmodel/community","slug":"/models/mlmodel/community/modularity","permalink":"/docs/models/mlmodel/community/modularity","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/models/mlmodel/community/modularity.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"modularity","sidebar_position":1},"sidebar":"MLModelSidebar","previous":{"title":"Community Detection","permalink":"/docs/models/mlmodel/community/intro"},"next":{"title":"Louvain Community Detection","permalink":"/docs/models/mlmodel/community/louvain"}}');var n=a(4848),i=a(8453);const m={id:"modularity",sidebar_position:1},t="Module",c={},r=[{value:"Modularity \uad6c\ud558\uae30",id:"modularity-\uad6c\ud558\uae30",level:2}];function h(s){const e={a:"a",admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",munder:"munder",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"module",children:"Module"})}),"\n",(0,n.jsx)(e.p,{children:"\ub124\ud2b8\uc6cc\ud06c \uc774\ub860\uc5d0\uc11c \ub2e4\ub8e8\ub294,"}),"\n",(0,n.jsx)(e.p,{children:"\uc804\uccb4 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc774\ub8e8\ub294 node\ub4e4 \uc911 \uc77c\ubd80 node \ub4e4\ub85c \uc774\ub8e8\uc5b4\uc9c4 sub-group, cluster \ub610\ub294 \uc9d1\ud569\uc744 module \uc774\ub77c\uace0 \ubd80\ub978\ub2e4."}),"\n",(0,n.jsx)(e.h1,{id:"modularity",children:"Modularity"}),"\n",(0,n.jsx)(e.p,{children:"Modularity \ub294 \ub124\ud2b8\uc6cc\ud06c \uc774\ub860\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \uad6c\uc9d1 \uad6c\uc870\ub97c \uce21\uc815\ud558\ub294 \uc9c0\ud45c\uc774\ub2e4. \uad70\uc9d1 \uad6c\uc870\ub97c \ud3c9\uac00\ud558\uae30 \uc704\ud574\uc11c,"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\ub79c\ub364\ud55c \uc5f0\uacb0 \uc0c1\ud0dc\uc640 \ube44\uad50\ud558\uc5ec"}),"\n",(0,n.jsx)(e.li,{children:"\ud604\uc7ac module \uc758 \uad70\uc9d1 \uac04\uc758 \uc5f0\uacb0(inter-module connetcion) \uc774 \uc5bc\ub9c8\ub098 \uc57d\ud55c\uc9c0,"}),"\n",(0,n.jsx)(e.li,{children:"\uadf8\ub9ac\uace0 \uad70\uc9d1 \ub0b4\ubd80\uc758 \uc5f0\uacb0(intra-module connection) \uc774 \uc5bc\ub9c8\ub098 \uac15\ud55c\uc9c0 \ud3c9\uac00\ud55c\ub2e4."}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\uc774 \ub54c \ub79c\ub364 \ub124\ud2b8\uc6cc\ud06c\ub294 \uac01 \ub178\ub4dc\ub4e4\uc758 \ucc28\uc218\ub294 \uace0\uc815\ud558\uace0, edge \ub4e4\ub9cc \ub79c\ub364\ud558\uac8c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(e.admonition,{type:"tip",children:[(0,n.jsx)(e.p,{children:"\ub79c\ub364 \ub124\ud2b8\uc6cc\ud06c\uc640 \ube44\uad50\ud558\uc9c0 \uc54a\uace0 \ud604\uc7ac \ub124\ud2b8\uc6cc\ud06c\uc758 \uc5f0\uacb0\ub85c\ub9cc inter-module connection, intra-module connection \uc744 \ube44\uad50\ud558\uba74,"}),(0,n.jsx)(e.p,{children:"\ud604\uc7ac\uc758 \uad70\uc9d1\uc774 \uc6b0\uc5f0\uc758 \uacb0\uacfc\uac00 \uc544\ub2cc \uc758\ubbf8 \uc788\ub294 \ud328\ud134\uc73c\ub85c \ub370\uc774\ud130\ub97c \ub098\ub204\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,n.jsx)(e.p,{children:"\uc608\ub97c \ub4e4\uc5b4\uc11c, \uac01 \ub178\ub4dc\uc758 \ucc28\uc218\uac00 \ub9e4\uc6b0 \ub192\uc740 \ub178\ub4dc\ub07c\ub9ac \uc5f0\uacb0\ud55c\ub2e4\uba74 \ub2f9\uc5f0\ud788 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d0\uc11c \uc774 \uad70\uc9d1\uc758 inter-module connection \uc774 \uac15\ud560\uac83\uc785\ub2c8\ub2e4."}),(0,n.jsx)(e.p,{children:"\uadf8\ub807\ub2e4\uace0 \uc774 module \uc774 \uc720\uc758\ubbf8\ud55c \ud328\ud134\uc744 \ucc3e\uc558\ub2e4\uace0 \ud655\uc2e0\ud558\uae30\ub294 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."}),(0,n.jsx)(e.p,{children:"\uc608\ub97c \ub4e4\uc5b4\uc11c, SNS \uc11c\ube44\uc2a4\uc5d0\uc11c \uc140\ub7fd\ub9cc\uc73c\ub85c \ub124\ud2b8\uc6cc\ud06c\ub97c \uad6c\ucd95\ud558\ub294 \uac83\uc740 \uc140\ub7fd\uacfc \uac1c\uc778\uc801\uc778 \uce5c\ubd84\uc774 \uc788\ub294 \uc77c\ubc18\uc778\ub4e4\uc744 \ud3ec\ud568\ud55c \uc720\uc758\ubbf8\ud55c \ud328\ud134\uc744 \uc804\ud600 \ud3ec\ucc29\ud558\uc9c0 \ubabb\ud560 \uac83\uc785\ub2c8\ub2e4."})]}),"\n",(0,n.jsx)(e.p,{children:"\uc77c\ubc18\uc801\uc778 network \uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 unweighted, undirected \uadf8\ub798\ud504\uc5d0\uc11c modularity \uc758 \uac12\uc740 [-1/2, 1] \uc758 \ubc94\uc704\ub97c \uac00\uc9c0\ub294\ub370,"}),"\n",(0,n.jsx)(e.p,{children:"1\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ub124\ud2b8\uc6cc\ud06c\uac00 \uc798 \uad70\uc9d1\ud654\ub418\uc5b4 \uc788\uc74c\uc744 - \uae30\ub300\uac12\ubcf4\ub2e4 \ub354 \ub9ce\uc740 edge \ub97c \uadf8\ub8f9 \ub0b4\ubd80\uc5d0 \uac00\uc9c0\uace0 \uc788\uc74c\uc744 - \uc758\ubbf8\ud558\uba70, \uc74c\uc218\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ub124\ud2b8\uc6cc\ud06c\uac00 \uc798 \uad70\uc9d1\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc74c\uc744 \uc758\ubbf8\ud55c\ub2e4."}),"\n",(0,n.jsx)(e.h2,{id:"modularity-\uad6c\ud558\uae30",children:"Modularity \uad6c\ud558\uae30"}),"\n",(0,n.jsx)(e.p,{children:"Modularity \uc758 \uce21\uc815\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc591\ud55c\ub370, \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc740 \uc704\uc5d0\uc11c \uc124\uba85\ud55c \uac83\uacfc \uac19\uc774 \ub79c\ub364 \ub124\ud2b8\uc6cc\ud06c\uc640 \ube44\uad50\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"\uc0c1\uc220\ud588\ub4ef\uc774 \uac01 \ub178\ub4dc\uc758 \ucc28\uc218, \uc804\uccb4 edge\uc758 \uc218\ub97c \uace0\uc815\ud55c \uc0c1\ud0dc\uc5d0\uc11c edge\ub97c \ub79c\ub364\ud558\uac8c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"\ub610\ud55c, \ud604\uc7ac \ub178\ub4dc\uac01 \uc18d\ud55c group \uc5ed\uc2dc \uace0\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"\uc774 \uc0c1\ud0dc\uc5d0\uc11c, \ud604\uc7ac \ub124\ud2b8\uc6cc\ud06c \uad6c\uc870\uc5d0\uc11c \uad70\uc9d1 \uac04, \uad70\uc9d1 \ub0b4 \uc5f0\uacb0\uc744 \ub79c\ub364 \ub124\ud2b8\uc6cc\ud06c\uc758 \uad70\uc9d1 \uac04, \uad70\uc9d1 \ub0b4 \uc5f0\uacb0\uacfc \ube44\uad50\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"Q"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"m"})]})]}),(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"j"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"["}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"A"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"j"})]})]}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"j"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"m"})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:"]"})]}),(0,n.jsx)(e.mi,{children:"\u03b4"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"j"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Q = \\frac{1}{2m} \\sum_{i,j} \\left[ A_{ij} - \\frac{k_i k_j}{2m} \\right] \\delta(c_i, c_j)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.8638em",verticalAlign:"-1.4138em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.4138em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"["})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"ij"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"]"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03785em"},children:"\u03b4"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"A"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"j"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"A_{ij}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"ij"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," : \ub178\ub4dc  ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"i"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," \uc640  ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"j"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"  \uac04\uc758 \uc2e4\uc81c \uc5f0\uacb0 \uc5ec\ubd80 (\uc778\uc811 \ud589\ub82c \uac12)."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," : \ub178\ub4dc  i \uc758 \ucc28\uc218 (degree), \uc989 \uc5f0\uacb0\ub41c \uc5e3\uc9c0\uc758 \uac1c\uc218."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"m"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," : \ub124\ud2b8\uc6cc\ud06c \uc804\uccb4\uc758 \uc5e3\uc9c0 \uc218."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"j"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"m"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{k_i k_j}{2m}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.3384em",verticalAlign:"-0.345em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.9934em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.5073em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3281em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0315em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3281em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0315em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2819em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})})]})," :  ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"i"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," \uc640  ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"j"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"  \uac04\uc758 \uc5f0\uacb0\uc774 \ubb34\uc791\uc704\uc77c \ub54c\uc758 \uae30\ub300\uac12."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c_i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," : \ub178\ub4dc  i \uac00 \uc18d\ud55c \uad70\uc9d1."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"\u03b4"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"j"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\delta(c_i, c_j)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03785em"},children:"\u03b4"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," :  ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"j"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c_i = c_j"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})," \uc77c \ub54c 1, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 0 (\uac19\uc740 \uad70\uc9d1\uc5d0 \uc18d\ud574 \uc788\ub294\uc9c0 \ud655\uc778)."]}),"\n"]}),"\n",(0,n.jsx)(e.h1,{id:"ref",children:"Ref"}),"\n",(0,n.jsxs)(e.p,{children:["[1] ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Modularity_(networks)",children:"https://en.wikipedia.org/wiki/Modularity_(networks)"})]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>t});var l=a(6540);const n={},i=l.createContext(n);function m(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:m(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);