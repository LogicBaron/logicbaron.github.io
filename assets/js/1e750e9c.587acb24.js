"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3140],{1474:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var n=a(4848),l=a(8453);const i={id:"center",sidebar_position:5},t="Center Loss",m={id:"concepts/deeplearning/loss/center",title:"Center Loss",description:"Face Recognition \uc5f0\uad6c \ucd08\uae30\uc5d0\ub294 Metric Learning\ubcf4\ub2e4 Cross Entropy Loss\ub97c \ud65c\uc6a9\ud55c Classification \ud559\uc2b5\uc774 \ub300\uc138\uc600\uc2b5\ub2c8\ub2e4. \uadfc\ubcf8\uc774 \uc788\uace0 \ub9e4\uc6b0 \uac15\ub825\ud55c Cross Entropy Loss\uc774\uc9c0\ub9cc Face Recognition \uacfc\uc81c\uc5d0\uc11c\ub294 \ud55c\uac00\uc9c0 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. embedding space\uc5d0\uc11c class\uac00 \ub2e4\ub978 feature\ub4e4\uc774 \ucda9\ubd84\ud788 \ub5a8\uc5b4\uc838 \uc788\uc9c0 \uc54a\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4.",source:"@site/docs/concepts/deeplearning/loss/center.md",sourceDirName:"concepts/deeplearning/loss",slug:"/concepts/deeplearning/loss/center",permalink:"/docs/concepts/deeplearning/loss/center",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/deeplearning/loss/center.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"center",sidebar_position:5},sidebar:"DeepLearningSidebar",previous:{title:"N-pair Loss",permalink:"/docs/concepts/deeplearning/loss/npair"},next:{title:"Angular Loss",permalink:"/docs/concepts/deeplearning/loss/Angular"}},c={},r=[];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",img:"img",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",mtext:"mtext",munderover:"munderover",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"center-loss",children:"Center Loss"}),"\n",(0,n.jsx)(e.p,{children:"Face Recognition \uc5f0\uad6c \ucd08\uae30\uc5d0\ub294 Metric Learning\ubcf4\ub2e4 Cross Entropy Loss\ub97c \ud65c\uc6a9\ud55c Classification \ud559\uc2b5\uc774 \ub300\uc138\uc600\uc2b5\ub2c8\ub2e4. \uadfc\ubcf8\uc774 \uc788\uace0 \ub9e4\uc6b0 \uac15\ub825\ud55c Cross Entropy Loss\uc774\uc9c0\ub9cc Face Recognition \uacfc\uc81c\uc5d0\uc11c\ub294 \ud55c\uac00\uc9c0 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. embedding space\uc5d0\uc11c class\uac00 \ub2e4\ub978 feature\ub4e4\uc774 \ucda9\ubd84\ud788 \ub5a8\uc5b4\uc838 \uc788\uc9c0 \uc54a\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Alt text",src:a(6703).A+"",width:"950",height:"404"})}),"\n",(0,n.jsxs)(e.p,{children:["\uc704 \uadf8\ub9bc\uc740 Cross-entropy\ub97c \ud1b5\ud574 \ud559\uc2b5\ud55c \ubaa8\ub378\uc758 output \ubd84\ud3ec\uc785\ub2c8\ub2e4. \uc11c\ub85c \ub2e4\ub978 class\uc758 ",(0,n.jsx)(e.strong,{children:"data point\ub4e4\uc774 \uc798 \ub098\ub204\uc5b4\uc838 \uc788\uc9c0\ub9cc data cloud\ub294 \uc798 \ub098\ub204\uc5b4\uc838 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),". \uc608\ub97c \ub4e4\uc5b4\uc11c, \uc67c\ucabd \uadf8\ub9bc\uc758 A point\uc640 B point\ub294 \uac19\uc740 class\uc774\uc9c0\ub9cc \ub2e4\ub978 class\uc778 B point\uc640 C point\uac00 \ub354 \uac00\uae5d\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.p,{children:["Cross-Entropy loss\ub294 \uc77c\ub2e8 ",(0,n.jsx)(e.strong,{children:"data point\uac00 \uc815\ud655\ud55c class\ub85c \uad6c\ubcc4\ub418\uae30\ub9cc \ud558\uba74 loss\uac00 0\uc774\ubbc0\ub85c \ub354 \uc774\uc0c1 \ud559\uc2b5"}),"\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \uc601\uc810\uc5d0 \uac00\uae4c\uc6b4 \ub370\uc774\ud130\ub4e4\uc5d0 \ub300\ud574\uc11c \ubaa8\ub378\uc740 \ub0ae\uc740 \ubd84\ubcc4\ub825\uc744 \ubcf4\uc5ec\uc8fc\uac8c \ub429\ub2c8\ub2e4. \uc624\ub978\ucabd\uc758 test data point \ubd84\ud3ec\ub97c \ubcf4\uba74, class\uac04 \uad6c\ubcc4\uc774 \uac70\uc758 \ub418\uc9c0 \uc54a\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"Cross-Etnropy loss\ub294 \ub370\uc774\ud130\uac00 \ub098\ub204\uc5b4\uc9c0\uae30\ub9cc \ud558\uba74, \uac70\ub9ac\uac00 \uc544\ubb34\ub9ac \uac00\uae4c\uc6cc\ub3c4 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Center Loss"}),"\ub294 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uac19\uc740 class\uc5d0 \uc18d\ud558\ub294 \ub370\uc774\ud130\ub07c\ub9ac\ub294 \ub354 \uac00\uae5d\uac8c \ubb49\uce58\ub3c4\ub85d \ud558\ub294 Regularization Term(",(0,n.jsx)(e.strong,{children:"intra-class loss"}),") \uc744 Cross-Entropy loss\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"i"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c_{y_i}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3281em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0359em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," \ub294 class ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y_i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),"\uc758 center \uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{mathvariant:"script",children:"L"}),(0,n.jsx)(e.mtext,{children:"center"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{mathvariant:"script",children:"L"}),(0,n.jsx)(e.mtext,{children:"softmax"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mi,{children:"\u03bb"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsxs)(e.munderover,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"\u2225"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"\u03b8"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"i"})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:"\u2225"})]}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{L}_{\\text{center}} = \\mathcal{L}_{\\text{softmax}} + \\frac{\\lambda}{2} \\sum_{i=1}^{N} \\left\\lVert f_\\theta (x_i) - c_{y_i} \\right\\rVert_2^2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathcal",children:"L"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2806em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"center"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathcal",children:"L"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"softmax"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3.106em",verticalAlign:"-1.2777em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"2"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03bb"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.8283em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,n.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"\u2225"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1076em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"\u03b8"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3281em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0359em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:"\u2225"})]}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.954em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3642em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.2029em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3358em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["Center Loss\uc758 Regularization Term\uc5d0 \ub300\ud55c \uc9c1\uad00\uc801\uc778 \uc774\ud574\ub294: \uc911\uc2ec\uc5d0\uc11c \ubc97\uc5b4\ub098\uc788\ub358 datapoint\ub4e4\uc774 \uc911\uc2ec\uc810\uc73c\ub85c \ubb49\uce58\uac8c \ub418\uace0 \ub354 \uc798 \ub098\ub204\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4. \uc774 \uad00\uc810\uc5d0\uc11c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"\u03bb"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\lambda"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03bb"})]})})]})," \uac12\uc774 \ud074\uc218\ub85d \ubaa8\ub378\uc740 \ud074\ub798\uc2a4 \uac04 \ub370\uc774\ud130\ub97c \ub098\ub204\ub294 \uac83\ubcf4\ub2e4, \ud074\ub798\uc2a4 \ub0b4\uc758 \ub370\uc774\ud130\uac00 \ubb49\uce58\uac8c \ud558\ub294 \uac83\uc5d0 \uc9d1\uc911\ud558\uac8c \ub429\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \ub098\ub204\uc5b4\uc9c4 \ub370\uc774\ud130\ub97c \uc0b4\ud3b4\ubcf4\uba74, Center Loss\uc758 \ud6a8\uacfc\ub97c \ub354 \ud655\uc2e4\ud788 \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Alt text",src:a(3497).A+"",width:"735",height:"298"})}),"\n",(0,n.jsx)(e.p,{children:"center loss\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 class center\ub294 Moving average\uc785\ub2c8\ub2e4. \uc5b4\ub5a4 \ub370\uc774\ud130\uac00 \uc5b4\ub5a4 \ud074\ub798\uc2a4\uc5d0 \uc18d\ud55c\ub2e4\uace0 \ud310\ub2e8\ud560\ub584\ub9c8\ub2e4 class center\ub294 \ubcc0\ud558\uac8c \ub429\ub2c8\ub2e4."})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},6703:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/image-2-11ede41058b1e9baff004139aee38b37.png"},3497:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/image-4-c0e973262882822fd81cfd576d05d347.png"},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var n=a(6540);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);