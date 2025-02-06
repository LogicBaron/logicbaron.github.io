"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8328],{5702:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"practice/efficienttrain/zero_infinity","title":"ZERO INFINITY","description":"ZERO \uac00 \ucee4\ub2e4\ub780 \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uae30 \uc704\ud574 model state \uadf8\ub9ac\uace0 residual state partitioning \uc5d0 \uc9d1\uc911\ud588\ub2e4\uba74,","source":"@site/docs/practice/efficienttrain/zero_inf.md","sourceDirName":"practice/efficienttrain","slug":"/practice/efficienttrain/zero_infinity","permalink":"/docs/practice/efficienttrain/zero_infinity","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/practice/efficienttrain/zero_inf.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"zero_infinity","sidebar_position":2},"sidebar":"EfficienttrainSidebar","previous":{"title":"ZERO","permalink":"/docs/practice/efficienttrain/1"},"next":{"title":"Sparsely-Gated MOE Layer","permalink":"/docs/practice/efficienttrain/MOE/moe1"}}');var r=n(4848),l=n(8453);const s=n.p+"assets/images/zeroinf_background-194781d794a1ec2a76310c59724322a4.png",c=n.p+"assets/images/zeroinf-fa7c90098826e410e64c5cb1090af1e0.png",a=n.p+"assets/images/zeroinf_rst1-476b1d20aa053a5a75e47fac7f43aec0.png",d=n.p+"assets/images/zeroinf_rst2-b8907ab65ff93fe0690dbbb0a1983978.png",o={id:"zero_infinity",sidebar_position:2},h="ZERO INFINITY",f={},p=[{value:"Background",id:"background",level:2},{value:"ZERO-infinity",id:"zero-infinity-1",level:2},{value:"Infinite offload engine",id:"infinite-offload-engine",level:3},{value:"Memory-Centric tilling",id:"memory-centric-tilling",level:3},{value:"Bandwidth-Centric partitioning",id:"bandwidth-centric-partitioning",level:3},{value:"Overlap-Centric Design",id:"overlap-centric-design",level:3},{value:"Conclusion",id:"conclusion",level:2}];function x(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...i.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"zero-infinity",children:"ZERO INFINITY"})}),"\n",(0,r.jsx)(e.p,{children:"ZERO \uac00 \ucee4\ub2e4\ub780 \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\uae30 \uc704\ud574 model state \uadf8\ub9ac\uace0 residual state partitioning \uc5d0 \uc9d1\uc911\ud588\ub2e4\uba74,"}),"\n",(0,r.jsxs)(e.p,{children:["ZERO-Infinity \ub294 ",(0,r.jsx)(e.strong,{children:"model state, residual state \uc758 \ud6a8\uc728\uc801\uc778 offload"})," \uc5d0 \uc9d1\uc911\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\ud559\uc2b5\ud558\ub294 \uacfc\uc815\uc5d0\uc11c parameter \uc640 state \ub4f1\uc744 \uc5b4\ub5bb\uac8c NVME, CPU \ub85c \uc801\uc808\ud558\uac8c \uc774\ub3d9\uc2dc\ud0a4\uba74\uc11c bottleneck \uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uc744\uc218\uc788\uc744\uae4c?"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\uc5d0 \uc9d1\uc911\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(e.p,{children:"ZERO-infinity \ubc1c\ud45c \uc774\uc804 deepspeed \uc5d0\uc11c \ubc1c\ud45c\ud55c \ub450 \uac1c\uc758 \uc8fc\uc694 \ub17c\ubb38\uc744 \uc0b4\ud3b4\ubcf4\uba74,"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:s,style:{width:600}})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"3d-parallelism"})," ",(0,r.jsx)(e.code,{children:"2020"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"MP+PP+DP \ub85c\uc368 multi-GPU \uc5d0\uc11c \ud070 \uc0ac\uc774\uc988\uc758 \ubaa8\ub378\uc744 parallel process \ub97c \ud1b5\ud574 \ud559\uc2b5\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ZERO-offload"})," ",(0,r.jsx)(e.code,{children:"2021"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"offload \ubc29\uc2dd\uc744 \ud1b5\ud574 single-GPU \uc5d0\uc11c big model \uc744 \ud559\uc2b5\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"deepspeed \uc5d0\uc11c ZERO \uc640 \uad00\ub828\ub41c \ub17c\ubb38\uc740 \uafb8\uc900\ud788s big model state, big residual state \ub97c \ud6a8\uc728\uc801\uc73c\ub85c multi-node GPU, CPU, NVME \uba54\ubaa8\ub9ac\uc5d0 \ubd84\ubc30\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uc5f0\uad6c\ud588\uace0,"}),"\n",(0,r.jsxs)(e.p,{children:["ZERO-infinity \uc5d0 \uc640\uc11c\ub294 GPU, CPU \uadf8\ub9ac\uace0 NVME \uac04\uc758 ",(0,r.jsx)(e.strong,{children:"communication \ud6a8\uc728\uc131\uc744 \uac1c\uc120"}),"\ud558\ub294\ub370 \uc9d1\uc911\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.h2,{id:"zero-infinity-1",children:"ZERO-infinity"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:c,style:{width:500}})}),"\n",(0,r.jsx)(e.p,{children:"ZERO , \uadf8\ub9ac\uace0 3d-parallelism \uc5d0\uc11c \ubaa8\ub378\uc744 \ubd84\uc0b0\uc2dc\ucf1c\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \ud6a8\uc6a9\uc740 \uac70\uc758 \uc5bb\uc5c8\ub2e4\ub294 \uacb0\ub860\uc744 \uc5bb\uc5c8\ub294\uc9c0 \ub17c\ubb38\uc758 \ub0b4\uc6a9\uc774 \uc870\uae08 \ub09c\ud574\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\ud06c\uac8c \uc5f0\uc0b0 \ubc29\uc2dd \uac1c\uc120, partitioning \uac1c\uc120, offload \ubc29\uc2dd \uac1c\uc120 \uadf8\ub9ac\uace0 communication engine \uac1c\uc120\uc73c\ub85c \ub098\ub258\uc5b4\uc9d1\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h3,{id:"infinite-offload-engine",children:"Infinite offload engine"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"model state partitioning \uc744 GPU \ubfd0\ub9cc \uc544\ub2c8\ub77c CPU \uc640 NVME \uc5d0\ub3c4 \uac00\ub2a5\ud558\ub3c4\ub85d \uc9c0\uc6d0"}),"\n",(0,r.jsx)(e.li,{children:"activation partitioning \uc5ed\uc2dc \ub9c8\ucc2c\uac00\uc9c0\ub85c CPU, NVME \uc5d0\ub3c4 \uac00\ub2a5\ud558\ub3c4\ub85d \uc9c0\uc6d0"}),"\n",(0,r.jsx)(e.li,{children:"\ud6c4\uc220\ud560 overlap-centric design, badnwidth-centric partitioning \uacfc \ud568\uaed8 \uc0ac\uc6a9\ub418\uc5b4\uc11c NVME-CPU bottleneck\uc774 \ud574\uacb0\ub418\uc5b4 \uae30\uc874 \ubc29\uc2dd\uc5d0 \ube44\ud574 \uace0\uc131\ub2a5\uc73c\ub85c CPU, NVME port \ud65c\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"memory-centric-tilling",children:"Memory-Centric tilling"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"large operation \uc744 sequence of smaller operation \uc73c\ub85c \ub098\ub204\uc5b4\uc11c \ucc98\ub9ac"}),"\n",(0,r.jsx)(e.li,{children:"memory alloc/free \uacfc\uc815\uc774 small operation(tile) \ub2e8\uc704\ub85c \uc774\ub8e8\uc5b4\uc838\uc11c working memory \ubd80\ub2f4 \ud06c\uac8c \uc904\uc5b4\ub4ec."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"bandwidth-centric-partitioning",children:"Bandwidth-Centric partitioning"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uae30\uc874 ZERO-family \uc758 parameter partitioning \ubc29\uc2dd\uc740 broadcast \ubc29\uc2dd\uc744 \uc0ac\uc6a9."}),"\n",(0,r.jsx)(e.li,{children:"all-gather \ubc29\uc2dd\uc744 \uc81c\uc548."}),"\n",(0,r.jsx)(e.li,{children:"GPU \ub9cc \uc0ac\uc6a9\ud558\uba74 broadcast \ubc29\uc2dd\uacfc all-gather \ubc29\uc2dd\uc758 \uc131\ub2a5\uc774 \ub611\uac19\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"CPU/NVME \ub97c \uc0ac\uc6a9\ud558\uba74 bandwidth \uc131\ub2a5\ucc28\uc774\uac00 \ubc1c\uc0dd."}),"\n",(0,r.jsx)(e.li,{children:"broadcast \ubc29\uc2dd\uc740 \ud604\uc7ac \ub370\uc774\ud130\ub97c \ubfcc\ub824\uc8fc\ub294 GPU \uac00 CPU \uc640 \ud1b5\uc2e0 \ud6c4 \ubfcc\ub824\uc8fc\ub294 \ubc29\uc2dd\uc73c\ub85c \ub2e4\ub978 GPU-CPU \uc5f0\uacb0\uc740 idle."}),"\n",(0,r.jsx)(e.li,{children:"all-gather \ubc29\uc2dd\uc740 \ubaa8\ub4e0 GPU-CPU \uc5f0\uacb0\uc774 \ud65c\uc131\ud654\ub41c \ud6c4, \ud55c GPU \uac00 \ub2e4\ub978 GPU \ub85c \ubd80\ud130 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc634."}),"\n",(0,r.jsx)(e.li,{children:"\uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c bandwidth \uc99d\uac00."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"overlap-centric-design",children:"Overlap-Centric Design"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"ZERO-infinity\uac00 multi-node \ud658\uacbd\uc5d0\uc11c\ub294 \uc88b\uc740 \ud6a8\uc6a9\uc744 \ubcf4\uc5ec\uc8fc\uc9c0\ub9cc bandwidth \ub294 single GPU, single machine \uc5d0\uc11c \uc5ec\uc804\ud788 \ubb38\uc81c\uc784."}),"\n",(0,r.jsx)(e.li,{children:"\ub610 all-gather \uc5f0\uc0b0\uc740 small batch size per GPU \uc5d0\uc11c \ube44\ud6a8\uc728\uc801\uc774\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\uadf8\ub798\uc11c batch size per GPU \ub97c \ud0a4\uc6cc\uc57c\ud558\ub294\ub370 \uadf8\ub7fc effective batch size \uac00 \ub108\ubb34 \ucee4\uc9c0\ub294 \ubb38\uc81c\uac00 \ubc18\ub300\ub85c \uc0dd\uae40."}),"\n",(0,r.jsx)(e.li,{children:"\ub610\ud55c, NVME-CPU bandwidth \ub85c \uc778\ud55c bottleneck \ub3c4 \ubb38\uc81c\uac00\ub428."}),"\n",(0,r.jsx)(e.li,{children:"GPU-GPU +  GPU computation + GPU-CPU + CPU-NVME overlap \uac00\ub2a5\ud558\ub3c4\ub85d."}),"\n",(0,r.jsx)(e.li,{children:"small GPU \uc5d0\uc11c\ub294 \uc791\uc740 batch size, large GPU \uc5d0\uc11c\ub294 \ud070 batch size \uac00 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:a,style:{width:400}})}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:d,style:{width:800}})}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\ub9cc, ZERO-infinity \ub294 CPU-offload \ub97c \ud65c\uc6a9\ud560 \uc815\ub3c4\ub85c large model \uc774 \uc544\ub2c8\ub77c\uba74 \uad73\uc774 \uc801\uc6a9\ud560 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4."})]})}function g(i={}){const{wrapper:e}={...(0,l.R)(),...i.components};return e?(0,r.jsx)(e,{...i,children:(0,r.jsx)(x,{...i})}):x(i)}},8453:(i,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var t=n(6540);const r={},l=t.createContext(r);function s(i){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function c(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(r):i.components||r:s(i.components),t.createElement(l.Provider,{value:e},i.children)}}}]);