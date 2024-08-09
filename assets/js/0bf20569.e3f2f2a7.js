"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[391],{7373:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=i(4848),a=i(8453);const t=i.p+"assets/images/blip_model-517609c46915ec05ff88680efbeeb639.png",r=i.p+"assets/images/blip_framework-f86f4e97e8e09963b3b888595682b7ee.png",d=i.p+"assets/images/blip_capfilt-0943708bce1fb01978042f08d93b58df.png",l={id:"blip",sidebar_position:2},o="BLIP",c={id:"models/aimodel/CLIP/blip",title:"BLIP",description:"Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation, 2022",source:"@site/docs/models/aimodel/CLIP/blip.md",sourceDirName:"models/aimodel/CLIP",slug:"/models/aimodel/CLIP/blip",permalink:"/docs/models/aimodel/CLIP/blip",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/models/aimodel/CLIP/blip.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"blip",sidebar_position:2},sidebar:"AIModelSidebar",previous:{title:"ALBEF",permalink:"/docs/models/aimodel/CLIP/albef"},next:{title:"BLIP-2",permalink:"/docs/models/aimodel/CLIP/blip2"}},m={},p=[{value:"Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation, 2022",id:"bootstrapping-language-image-pre-training-for-unified-vision-language-understanding-and-generation-2022",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Model Perspective",id:"model-perspective",level:3},{value:"Data Perspective",id:"data-perspective",level:3},{value:"Data",id:"data",level:2},{value:"Model",id:"model",level:2},{value:"Unimodal Encoder",id:"unimodal-encoder",level:3},{value:"Image-Grounded Text Encoder",id:"image-grounded-text-encoder",level:3},{value:"Image-Grounded Text Decoder",id:"image-grounded-text-decoder",level:3},{value:"Loss",id:"loss",level:3},{value:"CapFilt",id:"capfilt",level:3},{value:"Nucleous Sampling",id:"nucleous-sampling",level:4},{value:"Parameter Decoupling",id:"parameter-decoupling",level:4},{value:"Result",id:"result",level:2}];function g(e){const n={a:"a",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",math:"math",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"blip",children:"BLIP"}),"\n",(0,s.jsx)(n.h2,{id:"bootstrapping-language-image-pre-training-for-unified-vision-language-understanding-and-generation-2022",children:"Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation, 2022"}),"\n",(0,s.jsx)(n.p,{children:"prerequiste : CLIP, ALIGN, ALBEF, SimVLM"}),"\n",(0,s.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"Multimodal representation \ud559\uc2b5\uc5d0 \ub300\ud55c \uc5f0\uad6c\uac00 \uafb8\uc900\ud788 \uc9c4\ud589\ub418\uc5b4 \uc654\uc2b5\ub2c8\ub2e4. BLIP \uc800\uc790\ub4e4\uc740 \uae30\uc874 multimodal representation \uc5d0 \ub300\ud574 model \uce21\uba74 \uadf8\ub9ac\uace0 data \uce21\uba74\uc5d0\uc11c \ubb38\uc81c\uc810\uc744 \uc9c0\uc801\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"model-perspective",children:"Model Perspective"}),"\n",(0,s.jsx)(n.p,{children:"BLIP\uc774\uc804 Multimodal reprsentation \ud559\uc2b5\uc740 \ud06c\uac8c \ub450 \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \ub098\ub258\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["SimVLM\uacfc \uac19\uc774 generation task\ub85c \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\ub294 ",(0,s.jsx)(n.strong,{children:"Encoder-Decoder based model"})," \uc785\ub2c8\ub2e4. \ub2e4\ub9cc Encoder-Decoder based model \ub4e4\uc740 \uc774\ubbf8\uc9c0-\ud14d\uc2a4\ud2b8 embedding\uac04 \uc720\uc0ac\ub3c4\uac00 \uc911\uc694\ud55c image-retrieval task\uc5d0\uc11c \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 CLIP, ALBEF\uc640 \uac19\uc740 ",(0,s.jsx)(n.strong,{children:"encoder-based model"})," \uc785\ub2c8\ub2e4. encoder-based models\ub294 captioning\uacfc \uac19\uc740 generation tasks\ub97c \uc218\ud589\ud558\uae30\uc5d0 \uc9c1\uad00\uc801\uc774\uc9c0 \uc54a\uace0 - decoder\ub97c \ud559\uc2b5\ud574\uc57c\ud568; \uc131\ub2a5 \uc5ed\uc2dc encoder-decoder based model\uc5d0 \ube44\ud574 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub798\uc11c BLIP \ubaa8\ub378\uc740 \ubaa8\ub4e0 \ud559\uc2b5\uc744 \ub2e4 \uc9c4\ud589\ud569\ub2c8\ub2e4. unimodal encoder, image-grounded text encoder(multimodal encoder) \uadf8\ub9ac\uace0 image-grounded text decoder(multimodal decoder) \ub97c \ud559\uc2b5\uc2dc\ud0b5\ub2c8\ub2e4. \ud55c \ub9c8\ub514\ub85c BLIP\uc740 \ud558\ub098\uc758 \ubc31\ubcf8 \ubaa8\ub378\uc744 \ud559\uc2b5 \uc2dc\ucf1c\uc11c unimodal encoder, multimodal encoder \uadf8\ub9ac\uace0 multimodal decoder \uae4c\uc9c0 \uc804\ubd80 downstream task\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"data-perspective",children:"Data Perspective"}),"\n",(0,s.jsx)(n.p,{children:"BLIP \uc774\uc804 multimodal representation \ud559\uc2b5\uc740 \ub370\uc774\ud130\uc758 \uc9c8\ubcf4\ub2e4 \uc591\uc5d0 \uc9d1\uc911\ud574\uc11c noisy web data\ub97c \uc5c4\uccad\ub098\uac8c \ub9ce\uc774 \uc218\uc9d1\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ubc1c\uc804\ud574\uc654\uc2b5\ub2c8\ub2e4. ALBEF \uc774\ud6c4 \ub17c\ubb38\ubd80\ud130\ub294 \ub370\uc774\ud130\uc758 noise \uac00 \ud559\uc2b5\uc5d0 \uc548 \uc88b\uc740 \uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4\ub294 \uc810\uc744 \uc778\uc9c0\ud558\uace0 \uc774\ub97c \uac1c\uc120\ud558\uae30 \uc704\ud55c \ubc29\ubc95\ub860\ub4e4\uc774 \uc5f0\uad6c\ub418\uc5b4\uc838\uc654\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"BLIP \uc5ed\uc2dc \uac19\uc740 \uad00\uc810\uc744 \uc2dc\uc0ac\ud569\ub2c8\ub2e4. \ub370\uc774\ud130\uc758 noise\ub85c \uc778\ud574 \ubaa8\ub378\uc774 \uc644\uc804\ud55c \ucd5c\uc801\uc810\uc73c\ub85c \ud559\uc2b5\ub418\uc9c0 \ubabb\ud55c\ub2e4\uace0 \ud569\ub2c8\ub2e4. (sub-optimal)"}),"\n",(0,s.jsx)(n.p,{children:"\uc774\uc5d0 \ub300\ud55c BLIP\uc740 \ub370\uc774\ud130\ub97c captioner \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ucf1c\uc11c \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud55c \ucea1\uc158\uc744 \uc0dd\uc131\ud558\uace0, \ud559\uc2b5\uc744 \uc9c4\ud589\ud558\uba74\uc11c noisy caption\uc744 \uc81c\uac70\ud558\ub294 bootstrapping \ubc29\uc2dd\uc744 \uc801\uc6a9\ud574 \ub370\uc774\ud130\uc758 \ud004\ub9ac\ud2f0\ub97c \ub192\uc774\ub294 \ubc29\uc2dd\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.p,{children:["BLIP\uc758 baseline model\uc740 ",(0,s.jsx)(n.a,{href:"/docs/models/aimodel/CLIP/albef",children:"ALBEF"}),"\uc5d0\uc11c \uc0ac\uc6a9\ud55c 14M \ub370\uc774\ud130\uc151\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ub610, 115M \uac1c\uc758 web data\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 LAION data\ub97c \ud3ec\ud568\ud55c 129M dataset\uc744 \uc0ac\uc6a9\ud574\uc11c \ud559\uc2b5\ud55c BLIP-129M \ubaa8\ub378\ub3c4 \ud568\uaed8 \uc2e4\ud5d8\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"Evaluation \uacfc\uc815\uc5d0\uc11c\ub294 COCO \uc640 Flickr \ub370\uc774\ud130\uc151\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"model",children:"Model"}),"\n",(0,s.jsx)(n.p,{children:"BLIP\uc740 unimodal encoder, multimodal encoder \uadf8\ub9ac\uace0 multimodal decoder\ub97c \uc804\ubd80 \ud559\uc2b5\ud558\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ub378\uc758 \uad6c\uc870\uac00 \uc57d\uac04 \ub354 \ubcf5\uc7a1\ud569\ub2c8\ub2e4. \uba3c\uc800 \ubaa8\ub378\uc758 \uad6c\uc870\ub97c \uc0b4\ud3b4\ubcf8 \ub4a4 train framework \ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)("div",{style:{textAlign:"Center"},children:(0,s.jsx)("img",{src:t,style:{border:"solid"}})}),"\n",(0,s.jsx)(n.h3,{id:"unimodal-encoder",children:"Unimodal Encoder"}),"\n",(0,s.jsxs)(n.p,{children:["Text Encoder, Image Encoder \uc785\ub2c8\ub2e4. BLIP\uc740 Text Encoder \ub85c BERT",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsxs)(n.msub,{children:[(0,s.jsx)(n.mrow,{}),(0,s.jsx)(n.mtext,{children:"base"})]})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"_{\\text{base}}"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4861em",verticalAlign:"-0.15em"}}),(0,s.jsxs)(n.span,{className:"mord",children:[(0,s.jsx)(n.span,{}),(0,s.jsx)(n.span,{className:"msupsub",children:(0,s.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,s.jsxs)(n.span,{className:"vlist-r",children:[(0,s.jsx)(n.span,{className:"vlist",style:{height:"0.3361em"},children:(0,s.jsxs)(n.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,s.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,s.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:(0,s.jsx)(n.span,{className:"mord text mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:"base"})})})})]})}),(0,s.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,s.jsx)(n.span,{className:"vlist-r",children:(0,s.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,s.jsx)(n.span,{})})})]})})]})]})})]})," \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. Image Encoder\ub85c\ub294 ViT-B/16 \ubaa8\ub378\uacfc ViT-L/16 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud14d\uc2a4\ud2b8 \uc778\ucf54\ub354\uc758 \uacbd\uc6b0 prefix token\uc73c\ub85c [CLS] \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"image-grounded-text-encoder",children:"Image-Grounded Text Encoder"}),"\n",(0,s.jsx)(n.p,{children:"[Encode] prefix token\uc744 \uc0ac\uc6a9\ud558\ub294 \ud14d\uc2a4\ud2b8\ub97c input\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 transformer \uad6c\uc870\uc5d0 self-attention layer\uc704\uc5d0 image encoder output\uc744 query\ub85c \uc0ac\uc6a9\ud558\ub294 cross-attention layer\ub97c \ucd94\uac00\ud55c \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud574\uc11c multimodal representation\uc744 \ud559\uc2b5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"image-grounded-text-decoder",children:"Image-Grounded Text Decoder"}),"\n",(0,s.jsx)(n.p,{children:"[Decode] prefix token\uc744 \uc0ac\uc6a9\ud558\ub294 \ud14d\uc2a4\ud2b8\ub97c input\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 Causual Self-attention \uc744 \uc0ac\uc6a9\ud558\ub294 autoregressive transformer decoder \uad6c\uc870\uc5d0 \ub9c8\ucc2c\uac00\uc9c0\ub85c cross-attention layer\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"BLIP \ubaa8\ub378\uc740 text encoder\uc640 text decoder\uc758 CA, FFN layer\uc758 weight\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. SA layer\uac00 \uc778\ucf54\ub529\uacfc \ub514\ucf54\ub529 \uacfc\uc81c\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ucc28\uc774\uc810\uc744 \uac00\uc7a5 \uc798 \ud3ec\ucc29\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud559\uc2b5 \ud6a8\uc728\uc0c1 \ub2e4\ub978 layer\uc758 weight\ub294 \uacf5\uc720\ud558\ub294 \uac8c \ub354 \ubaa8\ub378 \ud559\uc2b5 \ud6a8\uc728 \uce21\uba74\uc5d0\uc11c, \uadf8\ub9ac\uace0 \uc2ec\uc9c0\uc5b4 \ubaa8\ub378 \uc131\ub2a5 \uce21\uba74\uc5d0\uc11c\ub3c4 \ub354 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("div",{style:{textAlign:"Center"},children:(0,s.jsx)("img",{src:r,style:{border:"solid"}})}),"\n",(0,s.jsxs)(n.p,{children:["\ubaa8\ub378 \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ud558\ub294 Framework \uc640 loss \ub97c \ub2e4\uc74c\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. BLIP\ubaa8\ub378\uc740 Noisy Data\ub97c \ub2e4\ub8e8\uae30 \uc704\ud574\uc11c \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud55c \ucea1\uc158\uc744 \uc0dd\uc131\ud558\uace0 \uc804\uccb4 \ub370\uc774\ud130 \uc911 \ud004\ub9ac\ud2f0\uac00 \ub5a8\uc5b4\uc9c0\ub294 \uc0c1\ud488\uc744 \uac78\ub7ec\ub0b4\ub294 bootstrapping \uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4. BLIP \ud559\uc2b5 framework\ub294 \uac04\ub2e8\ud558\uac8c \uc694\uc57d\ud558\uc790\uba74 ",(0,s.jsx)(n.strong,{children:"\uc77c\ubc18\uc801\uc778 \uac01 \ubaa8\ub378 \ud559\uc2b5\uc744 \uc704\ud55c pretraining loss\ub97c \ud1b5\ud574 \ud559\uc2b5\ud558\uace0 \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \ud1b5\ud574 \ucea1\uc158\uc744 \uc0dd\uc131\ud558\uace0 \uc804\uccb4 \ub370\uc774\ud130\uc5d0 \ub300\ud574 bootstrapping\uc744 \uc9c4\ud589\ud558\ub294"})," \uacfc\uc815\uc744 \uac01 epoch\uc5d0\uc11c \ubc18\ubcf5\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"loss",children:"Loss"}),"\n",(0,s.jsxs)(n.p,{children:["\uba3c\uc800 pretraining loss\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. ALBEF \ub17c\ubb38\uc5d0\uc11c \uc0ac\uc6a9\ud55c loss\uc640 \uac70\uc758 \uc720\uc0ac\ud55c \ub450 \uac00\uc9c0\uc758 loss\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. **Image-Text Contrastive Loss(ITC)**\uc640 ",(0,s.jsx)(n.strong,{children:"Image-Text Matching Loss(ITM)"})," \uc785\ub2c8\ub2e4. \uac01\uac01\uc758 loss \ub294 unimodal encoder, \uadf8\ub9ac\uace0 image-grounded text encoder\uc758 \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ub9c8\uc9c0\ub9c9\uc73c\ub85c BLIP\uc740 image-grounded text decoder \ud559\uc2b5\uc744 \uc704\ud574 ",(0,s.jsx)(n.strong,{children:"Language Modeling Loss(LM)"})," \uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. autoregressive decoder \ud559\uc2b5 \uc2dc \uc815\ub2f5\uc758 likelihood\ub97c \ucd5c\ub300\ud654\ud558\ub3c4\ub85d cross entropy loss \uad6c\uc870\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"capfilt",children:"CapFilt"}),"\n",(0,s.jsxs)(n.p,{children:["BLIP \ubaa8\ub378\uc758 \uac00\uc7a5 \uc911\uc694\ud55c \ubd80\ubd84\uc778 ",(0,s.jsx)(n.strong,{children:"Captioning and Filtering(CapFilt)"})," \uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub984\uc5d0\uc11c\ub3c4 \uc54c \uc218 \uc788\ub4ef\uc774 CapFilt\ub294 Caption \uc0dd\uc131 \uacfc\uc815, \uadf8\ub9ac\uace0 \ub370\uc774\ud130 Filtering \uacfc\uc815\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. Captioner \uacfc Filter\ub294 \uac01\uac01 epoch\uc5d0\uc11c pretrained BLIP\uc758 image-grounded text decoder \uc640 Image-grounded text encoder\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uac01 \ubaa8\ub4c8\uc740 noisy dataset\uc5d0 \ub300\ud574\uc11c \ud559\uc2b5\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 Captioner\uc640 Filter\ub294 \uac01\uac01 \uc0c1\ub300\uc801\uc73c\ub85c \uae68\ub057\ud55c COCO \ub370\uc774\ud130\uc151\uc744 \uc0ac\uc6a9\ud574 finetuning\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"CapFilt\ub294 Captioner\uac00 \uc6b0\uc120 \uac01 \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud574\uc11c Caption\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc0dd\uc131\ub41c Caption\uacfc web caption\uc5d0 \ub300\ud574\uc11c Image-Grounded Text Encoder\uc758 Image-Text Match score\ub97c \uacc4\uc0b0\ud558\uc5ec unmatched image\ub97c \ucc3e\uc544\ub0c5\ub2c8\ub2e4. \ucd5c\uc885\uc801\uc73c\ub85c bootstrapped dataset \uc740 human-annotated data, filtered web data and filtered generated data\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h4,{id:"nucleous-sampling",children:"Nucleous Sampling"}),"\n",(0,s.jsxs)(n.p,{children:["Captioner\ub294 p=0.9\ub85c \uc124\uc815\ud55c Nucleous Sampling \ubc29\uc2dd\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. beam search\uc5d0 \ube44\ud574\uc11c \uc774 \ubc29\uc2dd\uc740 \ub3d9\uc5b4 \ubc18\ubcf5\uc744 \ud53c\ud558\uba74\uc11c \ub354\uc6b1 \ub2e4\uc591\ud55c Caption\uc744 \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4. \ubc18\uba74 beam search\uc5d0 \ube44\ud574\uc11c \uc0dd\uc131\ub41c \ubb38\uc7a5\uc774 \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uac00 \ub9ce\uc744 \uc218 \uc788\ub294\ub370 \uc774\ub294 Filter\uac00 \uac78\ub7ec\uc8fc\uac8c \ub429\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc2e4\ud5d8 \uacb0\uacfc \uc0c1\uc73c\ub85c Beam Search output\uc740 Filter\uc5d0\uc11c 19%\uac00 \uac78\ub7ec\uc9c4 \ubc18\uba74 Nucleous Sampling \ubc29\uc2dd\uc740 25% \uc758 \ud14d\uc2a4\ud2b8\uac00 \uac78\ub7ec\uc9c0\uac8c \ub429\ub2c8\ub2e4. \ucd5c\uc885\uc801\uc73c\ub85c Nucleous Sampling\uc744 \ud1b5\ud574 ",(0,s.jsx)(n.strong,{children:"\uc801\uc808\ud558\uba74\uc11c\ub3c4, \ubaa8\ub378\uc5d0 \ub3c4\uc6c0\ub418\ub294 Surprising text"}),"\ub97c \ub9ce\uc774 \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \uc2e4\uc81c\ub85c Nucleous Sampling\uc744 \uc120\ud0dd\ud55c \ubaa8\ub378\uc774 downstream task\uc5d0\uc11c 1~2% \ub0b4\uc678\uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h4,{id:"parameter-decoupling",children:"Parameter Decoupling"}),"\n",(0,s.jsx)(n.p,{children:"pretrain \uacfc\uc815\uc5d0\uc11c \ubaa8\ub378\uc758 \uc131\ub2a5\uc740 parameter sharing\uc774 \ub354 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\ub294\ub370, CapFilt \uacfc\uc815\uc5d0\uc11c\ub294 \uac01\uac01\uc758 \ubaa8\ub378\uc774 end-to-end\ub85c finetuning\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub807\uac8c \uc0c8\ub86d\uac8c \uc815\uc81c\ub41c \ub370\uc774\ud130\uc151\uc744 \uc774\uc6a9\ud574 \ub2e4\uc74c \uc5d0\ud3ed\uc758 \ud559\uc2b5\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)("div",{style:{textAlign:"Center"},children:(0,s.jsx)("img",{src:d,style:{border:"solid"}})}),"\n",(0,s.jsx)(n.p,{children:"CaptionFilter\uc5d0 \ub300\ud574 ablation study \uacb0\uacfc\ub294 \uc704\uc640 \uac19\uc2b5\ub2c8\ub2e4. 14M \ub370\uc774\ud130\uc151\uc5d0 \ub300\ud574\uc11c\ub3c4 CapFilt \uc801\uc6a9\uc740 \ub208\uc5d0 \ub744\ub294 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc5ec\uc92c\uc2b5\ub2c8\ub2e4. 129M\uc5d0 \ub300\ud574\uc11c\ub294 \ub354\uc6b1 \ud070 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,s.jsxs)(n.p,{children:["BLIP \ubaa8\ub378\uc740 1) ",(0,s.jsx)(n.strong,{children:"Image-Text Retrieval"}),", 2) ",(0,s.jsx)(n.strong,{children:"Image captioning"}),", 3) ",(0,s.jsx)(n.strong,{children:"Visual Question Answering"}),", 4) ",(0,s.jsx)(n.strong,{children:"Natural Language Visual Reasoning"}),", 5) ",(0,s.jsx)(n.strong,{children:"Visual Dialog"})," \uadf8\ub9ac\uace0 6) ",(0,s.jsx)(n.strong,{children:"Zero-shot Transfer to Video-Language Tasks"})," \uc5d0 \ub300\ud574\uc11c \uc131\ub2a5 \ud3c9\uac00\ub97c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4. BLIP \ubaa8\ub378\uc774 \ubaa8\ub4e0 task\uc5d0\uc11c \uae30\uc874 SOTA \ubaa8\ub378\uc5d0 \ube44\ud574 \uc88b\uc740 \uc131\ub2a5\uc744 \ub2ec\uc131\ud588\uc2b5\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(6540);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);