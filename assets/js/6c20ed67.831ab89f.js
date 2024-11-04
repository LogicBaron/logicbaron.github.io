"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9206],{5854:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>x,default:()=>g,frontMatter:()=>d,metadata:()=>n,toc:()=>j});const n=JSON.parse('{"id":"concepts/mlconcept/metrics/rank_metric","title":"Ranking & Recommendation Metrics","description":"Ranking & Recommendation \uacfc\uc81c\ub294 \uc720\uc800 \ucffc\ub9ac\uc5d0 \ub530\ub77c datas (documents)\ub97c \uc801\uc808\ud55c \uc21c\uc11c\ub85c \uc815\ub82c\ud558\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4. \ud2b9\ud788, \uc720\uc800 \ucffc\ub9ac\uc640 \uc5f0\uad00\ub3c4\uac00 \ub192\uc740 document \uc77c\uc218\ub85d \uc0c1\uc704\uad8c\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d \uc815\ub82c\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.","source":"@site/docs/concepts/mlconcept/metrics/rank_metrics.md","sourceDirName":"concepts/mlconcept/metrics","slug":"/concepts/mlconcept/metrics/rank_metric","permalink":"/docs/concepts/mlconcept/metrics/rank_metric","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/mlconcept/metrics/rank_metrics.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"rank_metric","sidebar_position":1},"sidebar":"MLConceptSidebar","previous":{"title":"Metric Learning","permalink":"/docs/concepts/mlconcept/taxonomy/metriclearning"},"next":{"title":"Introduction","permalink":"/docs/concepts/mlconcept/regularization/introduction"}}');var i=a(4848),l=a(8453);const t=a.p+"assets/images/rank_metrics_unranked-c956e6161cf07426836f780e759f3dac.png",r=a.p+"assets/images/rank_metrics_kendall-ad1477961b465176d7baaa39914e617f.png",c=a.p+"assets/images/rank_metrics_precision-a5dceb94f8cccce710e277c4c30899a5.png",m=a.p+"assets/images/rank_metrics_ap-57d879423ed388584e192cd04088f07c.png",h=a.p+"assets/images/rank_metrics_mrr-f62598ecbfc95548a664ae6a45ed0c51.png",d={id:"rank_metric",sidebar_position:1},x="Ranking & Recommendation Metrics",p={},j=[{value:"Why use Rank Metrics?",id:"why-use-rank-metrics",level:2},{value:"Kendall tau distance",id:"kendall-tau-distance",level:2},{value:"Mean Average Precision@k",id:"mean-average-precisionk",level:2},{value:"Precision@k",id:"precisionk",level:3},{value:"Average Precision@k",id:"average-precisionk",level:3},{value:"Mean Average Precision@k",id:"mean-average-precisionk-1",level:3},{value:"Mean Reciprocal Rank",id:"mean-reciprocal-rank",level:2},{value:"Reciprocal Rank",id:"reciprocal-rank",level:3},{value:"User-oriented metrics",id:"user-oriented-metrics",level:2}];function o(s){const e={a:"a",admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",munder:"munder",munderover:"munderover",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"ranking--recommendation-metrics",children:"Ranking & Recommendation Metrics"})}),"\n",(0,i.jsxs)(e.p,{children:["Ranking & Recommendation \uacfc\uc81c\ub294 ",(0,i.jsx)(e.strong,{children:"\uc720\uc800 \ucffc\ub9ac\uc5d0 \ub530\ub77c datas (documents)\ub97c \uc801\uc808\ud55c \uc21c\uc11c\ub85c \uc815\ub82c"}),"\ud558\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4. \ud2b9\ud788, \uc720\uc800 \ucffc\ub9ac\uc640 \uc5f0\uad00\ub3c4\uac00 \ub192\uc740 document \uc77c\uc218\ub85d \uc0c1\uc704\uad8c\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d \uc815\ub82c\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"Ranking \uc744 \ud3c9\uac00\ud558\ub294 \uac83\uc740 \uaf64 \uae4c\ub2e4\ub85c\uc6b4 \ubb38\uc81c\uc785\ub2c8\ub2e4. \uc9c1\uad00\uc801\uc73c\ub85c \uc0dd\uac01\ud574\ub3c4 \uc815\ub2f5 rank\uac00 [1, 2, 3] \uc77c \ub54c [1, 3, 2] \uc640 [2, 1, 3] \uc911 \ubb34\uc5c7\uc774 \ub354 \uc88b\uc740 rank\uc778\uc9c0 \ud55c \ub208\uc5d0 \ud310\ub2e8\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\ub610\ud55c, \uc77c\ubc18\uc801\uc778 machine learning \uc5d0\uc11c \uc0ac\uc6a9\ud558\ub358 precision, recall \ub4f1\uc758 metrics \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uba3c\uc800 \uc65c \uc77c\ubc18\uc801\uc778 metrics \ub4e4\uc744 \ub7ad\ud0b9 \ud3c9\uac00\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294\uc9c0 \uc54c\uc544\ubcf4\uace0"}),"\n",(0,i.jsx)(e.li,{children:"ranking \uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 metrics\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\uc774 \uae00\uc740 ",(0,i.jsx)(e.a,{href:"https://towardsdatascience.com/comprehensive-guide-to-ranking-evaluation-metrics-7d10382c1025",children:"\ub9c1\ud06c"}),"\ub97c \ucc38\uc870\ud558\uc5ec \uc791\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,i.jsx)(e.h2,{id:"why-use-rank-metrics",children:"Why use Rank Metrics?"}),"\n",(0,i.jsxs)(e.p,{children:["\uc720\uc800 \ucffc\ub9ac\uc5d0 \ub300\ud574\uc11c, ",(0,i.jsx)(e.strong,{children:"\ud074\ub9ad\ub960 \uc21c\uc11c\ub300\ub85c ranking"}),"\uc744 \ub9e4\uae30\uace0 \uc774 \uc911\uc5d0\uc11c \ud074\ub9ad\ub960\uc774 50% \uac00 \ub118\uc5b4\uac00\ub294 document \ub97c \uad00\ub828\ub3c4\uac00 \ub192\uc740 target document \ub77c\uace0 \uc815\uc758\ud569\uc2dc\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"\uac01 document \uc5d0 \ub300\ud574 target document \uc77c \ud655\ub960\uc744 \uc608\uce21\ud558\ub294 \ubaa8\ub378\uc744 \ud559\uc2b5\ud588\ub2e4\uace0 \uac00\uc815\ud569\uc2dc\ub2e4. \uadf8\ub9ac\uace0 \ub450 \uac00\uc9c0 \ubaa8\ub378\uc758 \uc608\uce21 \uacb0\uacfc\uc5d0 \ub300\ud574 MSE metrics \uc744 \uc0ac\uc6a9\ud574\uc11c \ud3c9\uac00\ud574\ubd24\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:t,style:{width:700}})}),"\n",(0,i.jsx)(e.p,{children:"\uccab \ubc88\uc9f8 \uacbd\uc6b0\uac00 target document \ub97c 1\uc704\ub85c \uc608\uce21\ud588\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 MSE loss \uac00 \ub450 \ubc88\uc9f8 \uacbd\uc6b0\ubcf4\ub2e4 \ub354 \ub0ae\uac8c \ub098\uc654\uc2b5\ub2c8\ub2e4. \uc65c \uc774\ub7f0 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud588\uc744\uae4c\uc694?"}),"\n",(0,i.jsx)(e.p,{children:"Unranked Metrics\ub294 \ubaa8\ub4e0 document \ub97c \ub611\uac19\uc774 \ucde8\uae09\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc2e4\uc81c\ub85c Ranking \ubb38\uc81c\uc5d0\uc11c\ub294 \uc0c1\uc704\uad8c\uc5d0 \uc704\uce58\ud55c document \uc758 \uc911\uc694\ub3c4\uac00 \ud6e8\uc52c \ud07d\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["Ranking Metrics\ub294 ",(0,i.jsx)(e.strong,{children:"Rank \uac00 \ub192\uc740 \ub370\uc774\ud130\uc758 weight\ub97c \ub192\uac8c, Rank\uac00 \ub0ae\uc740 \ub370\uc774\ud130\uc758 weight\ub97c \ub0ae\ub3c4\ub85d"})," \ud558\ub294 \uc778\uc0ac\uc774\ud2b8\uac00 \ud544\uc694\ud558\ub2e4."]})}),"\n",(0,i.jsx)(e.h2,{id:"kendall-tau-distance",children:"Kendall tau distance"}),"\n",(0,i.jsx)(e.p,{children:"Kendall tau distance \ub294 \uc2e4\uc81c \ub370\uc774\ud130\uc758 \uc815\ub82c \uc21c\uc11c\ub97c \uace0\ub824\ud558\ub294 Ranking Metrics \uc785\ub2c8\ub2e4. \ub4a4\uc5d0\uc11c \uc18c\uac1c\ud560 Ranking Metrics \ub4e4\uc740 \uc2e4\uc81c rank \uac00 \uc544\ub2c8\ub77c target document \ud310\uc815 \uc5ec\ubd80\ub97c \ud1b5\ud574 \ubaa8\ub378\uc744 \ud3c9\uac00\ud558\ub294\ub370, \uadf8\ub7f0 \uc810\uc5d0\uc11c Kendall tau \ub294 Rank Metrics \uc758 \uc758\ubbf8\ub97c \uac00\uc7a5 \uc798 \ud45c\ud604\ud558\uace0 \uc788\ub294 \uc9c0\ud45c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:["Kendall tau distance \ub97c \ud55c \ub9c8\ub514\ub85c \uc18c\uac1c\ud558\uba74, ",(0,i.jsx)(e.strong,{children:"\uc2e4\uc81c \uc815\ub82c \uc21c\uc11c\uc640 \ub2e4\ub974\uac8c \uc815\ub82c\ub41c document \uc30d\uc758 \ube44\uc728"}),"\uc785\ub2c8\ub2e4. Rank Metrics \uac00 \uc544\ub2c8\ub77c \ub370\uc774\ud130 \ubd84\uc11d\uc5d0\uc11c\ub3c4 \ub370\uc774\ud130 \uac04 \uc0c1\uad00 \uacc4\uc218\ub85c\uc368 \uc0ac\uc6a9\ub418\ub294 \uc9c0\ud45c\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:r,style:{width:700}})}),"\n",(0,i.jsxs)(e.p,{children:["\uc608\ub97c \ub4e4\uc5b4, \uc720\uc800 \ucffc\ub9ac\uc5d0 \ub300\ud574 rank\uac00 [1, 3]\uc778 document A, B\uc5d0 \ub300\ud574\uc11c \ubaa8\ub378\uc758 \uc608\uce21 rank\uac00 [1, 4]\ub77c\uace0 \ud569\uc2dc\ub2e4. \uc608\uce21 \uacb0\uacfc\uac00 \uc815\ud655\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc document A \uac00 document B \ubcf4\ub2e4 \uad00\ub828\ub3c4\uac00 \ub192\ub2e4\ub294 \uad00\uacc4\ub294 \ub9de\ucd94\uc5c8\uae30\uc5d0 \uc774\ub97c ",(0,i.jsx)(e.strong,{children:"concordant pair"}),"(",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"C"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]}),") \ub77c\uace0 \ud569\ub2c8\ub2e4. \ubc18\uba74 \ubaa8\ub378\uc774 rank \ub97c [2, 1]\uc774\ub77c\uace0 \uc608\uce21\ud588\ub2e4\uba74 \ub450 document \uc758 rank \ub300\uc18c \uad00\uacc4\ub97c \ud2c0\ub9ac\uac8c \uc608\uce21\ud588\uc73c\ubbc0\ub85c ",(0,i.jsx)(e.strong,{children:"disconcordant pair"}),"(",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"D"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]}),") \ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:["kendall tau distance \ub294 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"C"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mi,{children:"D"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,i.jsx)(e.mi,{children:"C"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"D"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"C-D/C+D"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,i.jsx)(e.span,{className:"mord",children:"/"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})]})]})," \ub85c \uc815\uc758\ud558\uba70, ",(0,i.jsx)(e.strong,{children:"-1\uc5d0\uc11c 1\uc758 \ubc94\uc704"}),"\ub97c \uac00\uc9d1\ub2c8\ub2e4. kendall tau distance \uac00 -1 \uc774\ub77c\uba74 \ubaa8\ub378\uc740 ",(0,i.jsx)(e.strong,{children:"\uc644\ubcbd\ud558\uac8c \uc5ed\uc21c"}),"\uc73c\ub85c document \uc21c\uc11c\ub97c \uc608\uce21\ud55c \uac83\uc774\uace0, 1\uc774\ub77c\uba74 \ubaa8\ub378\uc740 ",(0,i.jsx)(e.strong,{children:"\uc644\ubcbd\ud558\uac8c \uc815\uc21c"}),"\uc73c\ub85c document \uc21c\uc11c\ub97c \uc608\uce21\ud55c \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:["\uc57d\uac04\uc758 \uad6c\ud604 \ubc29\ubc95\uc5d0 \ucc28\uc774\uac00 \uc788\uc9c0\ub9cc, sklearn \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 ",(0,i.jsx)(e.a,{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.kendalltau.html",children:"kendall tau distance"})," \ub97c \uad6c\ud604\ud574\ub480\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.h2,{id:"mean-average-precisionk",children:"Mean Average Precision@k"}),"\n",(0,i.jsx)(e.h3,{id:"precisionk",children:"Precision@k"}),"\n",(0,i.jsx)(e.p,{children:"\ubaa8\ub378\uc758 \uc608\uce21 \uacb0\uacfc top-k \uac1c\uc5d0 target document \uac00 \uc5bc\ub9c8\ub098 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uc9c0\uc758 \uc9c0\ud45c\uc774\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:c,style:{width:700}})}),"\n",(0,i.jsx)(e.h3,{id:"average-precisionk",children:"Average Precision@k"}),"\n",(0,i.jsxs)(e.p,{children:["precision@k \uc758 \ub2e8\uc810\uc740, ",(0,i.jsx)(e.strong,{children:"target document\uac00 top-k\uc5d0 \ud3ec\ud568\ub418\uae30\ub9cc \ud55c\ub2e4\uba74 \uc5bc\ub9c8\ub098 \uc0c1\uc704\uad8c\uc778\uc9c0\ub294 \ud3c9\uac00\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc810"}),"\uc785\ub2c8\ub2e4. precision@10\uc740 target document \uac00 1\uc704, 2\uc704\uc5d0 \uc815\ub82c\ub418\uc5b4 \uc788\uc73c\ub098 9\uc704, 10\uc704\uc5d0 \uc815\ub82c\ub418\uc5b4 \uc788\uc73c\ub098 \ub611\uac19\uc774 \ud3c9\uac00\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"average precision \uc740 target document \uac00 \ubaa8\ub378\uc758 \uc608\uce21 \uacb0\uacfc\uc5d0\uc11c \uc5bc\ub9c8\ub098 \uc0c1\uc704\uad8c\uc5d0 \uc704\uce58\ud558\ub294\uc9c0\ub97c \uace0\ub824\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"A"}),(0,i.jsx)(e.mi,{children:"P"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"@"}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.mfrac,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mi,{children:"r"})]}),(0,i.jsxs)(e.munderover,{children:[(0,i.jsx)(e.mo,{children:"\u2211"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.mi,{children:"k"})]}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"@"}),(0,i.jsx)(e.mi,{children:"i"})]}),(0,i.jsx)(e.mo,{children:"\u22c5"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mi,{children:"i"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"AP@k = \\frac{1}{r} \\sum_{i=1}^{k} {precision@i} \\cdot R_i"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(e.span,{className:"mord",children:"@"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"3.1138em",verticalAlign:"-1.2777em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(e.span,{className:"mfrac",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,i.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mop op-limits",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.8361em"},children:[(0,i.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{children:(0,i.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,i.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"rec"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord",children:"@"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mtext,{children:"number\xa0of\xa0target\xa0documents"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"r=\\text{number of target documents}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord text",children:(0,i.jsx)(e.span,{className:"mord",children:"number\xa0of\xa0target\xa0documents"})})]})]})]})}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mi,{children:"i"})]}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mtext,{children:"1\xa0if\xa0document\xa0"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mtext,{children:"\xa0is\xa0relevant\xa0or\xa00"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"R_i = \\text{1 if document }i\\text{ is relevant or 0}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord text",children:(0,i.jsx)(e.span,{className:"mord",children:"1\xa0if\xa0document\xa0"})}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord text",children:(0,i.jsx)(e.span,{className:"mord",children:"\xa0is\xa0relevant\xa0or\xa00"})})]})]})]})}),"\n",(0,i.jsx)(e.p,{children:"AP \ub97c \uc218\uc2dd\ub9cc\uc73c\ub85c \ubc14\ub85c \uc774\ud574\ud558\uae30\uac00 \uc27d\uc9c0 \uc54a\uc544 \uc608\uc2dc\ub97c \uc544\ub798\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:m,style:{width:700}})}),"\n",(0,i.jsx)(e.h3,{id:"mean-average-precisionk-1",children:"Mean Average Precision@k"}),"\n",(0,i.jsx)(e.p,{children:"Mean Average Precision \uc740 \uc5ec\ub7ec \uac1c\uc758 \uc720\uc800 \ucffc\ub9ac\uc5d0 \ub300\ud574\uc11c Average precision \uc744 \ud3c9\uade0 \ub0b8 \uac12\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h2,{id:"mean-reciprocal-rank",children:"Mean Reciprocal Rank"}),"\n",(0,i.jsx)(e.h3,{id:"reciprocal-rank",children:"Reciprocal Rank"}),"\n",(0,i.jsxs)(e.p,{children:["Reciprocal Rank \ub294 ",(0,i.jsx)(e.strong,{children:"target document \uac00 \ubaa8\ub378\uc758 \uc608\uce21 \uacb0\uacfc \uc0c1\uc5d0\uc11c \uc5bc\ub9c8\ub098 \uc55e\uc5d0 \uc815\ub82c\ub418\uc5b4 \uc788\ub294\uc9c0"}),"\ub97c \uc911\uc694\ud558\uac8c \ubcf4\ub294 \uc9c0\ud45c\uc785\ub2c8\ub2e4. MRR \uc740 \ub9c8\ucc2c\uac00\uc9c0\ub85c, \uc720\uc800 \ucffc\ub9ac\ub4e4\uc5d0 \ub300\ud574\uc11c RR\uc744 \ud3c9\uade0\ub0b8 \uac12\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.mfrac,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mtext,{children:"rank\xa0of\xa0the\xa0first\xa0target\xa0document"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"RR = \\frac{1}{\\text{rank of the first target document}}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"RR"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"2.2019em",verticalAlign:"-0.8804em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(e.span,{className:"mfrac",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,i.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord text",children:(0,i.jsx)(e.span,{className:"mord",children:"rank\xa0of\xa0the\xa0first\xa0target\xa0document"})})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"M"}),(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.mfrac,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mi,{children:"Q"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"})]})]}),(0,i.jsxs)(e.munder,{children:[(0,i.jsx)(e.mo,{children:"\u2211"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"q"}),(0,i.jsx)(e.mo,{children:"\u2208"}),(0,i.jsx)(e.mi,{children:"Q"})]})]}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"R"}),(0,i.jsx)(e.mi,{children:"q"})]})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"MRR = \\frac{1}{|Q|} \\sum_{q \\in Q} {RR_q}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"MRR"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"2.7519em",verticalAlign:"-1.4304em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(e.span,{className:"mfrac",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,i.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"Q"}),(0,i.jsx)(e.span,{className:"mord",children:"\u2223"})]})]}),(0,i.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.936em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mop op-limits",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,i.jsxs)(e.span,{style:{top:"-1.8557em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(e.span,{className:"mrel mtight",children:"\u2208"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"Q"})]})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{children:(0,i.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.4304em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"q"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]})]})]})}),"\n",(0,i.jsx)(e.p,{children:"\uc544\ub798\ub294 MRR \uc758 \uc608\uc2dc\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:h,style:{width:700}})}),"\n",(0,i.jsx)(e.h2,{id:"user-oriented-metrics",children:"User-oriented metrics"}),"\n",(0,i.jsx)(e.p,{children:"\uc704\uc5d0\uc11c \uc18c\uac1c\ud55c Metrics \ub4e4\uc758 \ubb38\uc81c\uc810\uc740 \ub7ad\ud0b9\uc5d0 \ub300\ud55c \ud3c9\uac00\uc784\uc5d0\ub3c4 \uc720\uc800 behavior \ub97c \uace0\ub824\ud558\uc9c0 \uc54a\uc558\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\uc0ac\uc2e4 Ranking \uc790\uccb4\uc5d0 \uc720\uc800 behavior \uac00 \uace0\ub824\ub418\uc5b4 \uc124\uacc4\ub418\ub294 \uac8c \uc62c\ubc14\ub978 \ubc29\ud5a5\uc774\uc9c0\ub9cc \uc720\uc800 \ud589\ub3d9\uc740 \uc5b8\uc81c\ub098 \ubc14\ub00c\uace0 \uc788\uace0 \ub610 \uc774\ub97c \uc815\ud655\ud788 \ubc18\uc601\ud574\uc11c rank \uc744 \uc9d1\uacc4\ud55c\ub2e4\ub294 \uc810\uc774 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc720\uc800 behavior \uc790\uccb4\ub97c \uace0\ub824\ud574\uc11c metrics \ub97c \uc124\uacc4\ud558\ub294 \ubc29\uc2dd\ub3c4 \uc874\uc7ac\ud558\ub294\ub370 \uc774 \ubd80\ubd84\uc740 \uc774 \uae00\uc5d0\uc11c\ub294 \ub2e4\ub8e8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\ud558\uc9c0\ub9cc \uc6d0\ubb38 \ub9c1\ud06c\ub97c \ud0c0\uace0 \uac00 \ubcf4\uc2dc\uba74 \ud574\ub2f9 \ubd80\ubd84\uc5d0 \ub300\ud55c \uc18c\uac1c\ub3c4 \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc5b8\uc820\uac00 \uc2dc\uac04\uc774 \ub41c\ub2e4\uba74 \ub530\ub85c \uae00\uc744 \ud558\ub098 \uc791\uc131\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."})]})}function g(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(o,{...s})}):o(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(6540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);