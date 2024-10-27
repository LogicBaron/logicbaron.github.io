"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2651],{8681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var i=t(4848),s=t(8453);const r=t.p+"assets/images/textisallyouneed_figure-3d21cc87aef1545a8c1a072f573cd9bc.png",l=t.p+"assets/images/recformer_train-5f31f0359db41d5c4fa4cf17c54dc5cc.png",a=t.p+"assets/images/recformer_result-c619a4f4a40eba50065e18dd1471039a.png",d={id:"textisallyouneed",sidebar_position:1},o="Recformer",c={id:"tasks/recommendation/Contents-based/textisallyouneed",title:"Recformer",description:"Text is All you Need: Learning Language Representations for Sequential Recommendation",source:"@site/docs/tasks/recommendation/Contents-based/recformer.md",sourceDirName:"tasks/recommendation/Contents-based",slug:"/tasks/recommendation/Contents-based/textisallyouneed",permalink:"/docs/tasks/recommendation/Contents-based/textisallyouneed",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/tasks/recommendation/Contents-based/recformer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"textisallyouneed",sidebar_position:1},sidebar:"RecommendationSidebar",previous:{title:"Recommendation",permalink:"/docs/tasks/recommendation/hello"}},u={},h=[{value:"Text is All you Need: Learning Language Representations for Sequential Recommendation",id:"text-is-all-you-need-learning-language-representations-for-sequential-recommendation",level:2},{value:"\ub17c\ubb38 \uc815\ub9ac",id:"\ub17c\ubb38-\uc815\ub9ac",level:2},{value:"\ubaa8\ub378 \ud559\uc2b5",id:"\ubaa8\ub378-\ud559\uc2b5",level:2},{value:"Step1. \uc0c1\ud488 \ub370\uc774\ud130 \ub9cc\ub4e4\uae30",id:"step1-\uc0c1\ud488-\ub370\uc774\ud130-\ub9cc\ub4e4\uae30",level:3},{value:"Step2. \ubaa8\ub378 pretraining (feat. metric learning)",id:"step2-\ubaa8\ub378-pretraining-feat-metric-learning",level:3},{value:"Step3. \ubaa8\ub378 fine-tuning",id:"step3-\ubaa8\ub378-fine-tuning",level:3},{value:"Result",id:"result",level:3}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"recformer",children:"Recformer"})}),"\n",(0,i.jsx)(n.h2,{id:"text-is-all-you-need-learning-language-representations-for-sequential-recommendation",children:"Text is All you Need: Learning Language Representations for Sequential Recommendation"}),"\n",(0,i.jsx)(n.p,{children:"\ud574\ub2f9 \ub17c\ubb38\uc740 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \ub17c\ubb38\uc778\ub370, \uc18d\uc131 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud574 \uc0c1\ud488 representation \uc744 \ud559\uc2b5\ud574\uc11c \ucd94\ucc9c \uc2dc\uc2a4\ud15c \uc131\ub2a5\uc744 \uac1c\uc120\ud569\ub2c8\ub2e4. \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \uc778\uc0ac\uc774\ud2b8\uac00 \uc788\uc744 \uac83 \uac19\uc544 \uacf5\uc720\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ub17c\ubb38-\uc815\ub9ac",children:"\ub17c\ubb38 \uc815\ub9ac"}),"\n",(0,i.jsx)(n.p,{children:"\ub17c\ubb38\uc5d0\uc11c \uc81c\uc548\ud558\ub294 \uae30\uc874 sequential recommendation system \uc758 \ubb38\uc81c\uc810\uc744 \uc598\uae30\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uae30\uc874 \ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc740 \uc8fc\ub85c \uc0c1\ud488 id \ub610\ub294 \uc0c1\ud488 textual information(category, \uc0c1\ud488\uba85) \uc815\ubcf4\ub97c \ud65c\uc6a9\ud55c \uc784\ubca0\ub529\uc744 \ud65c\uc6a9\ud55c\ub2e4."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uc0c1\ud488 id \uc704\uc8fc \ucd94\ucc9c \uc2dc\uc2a4\ud15c \ubc29\uc2dd","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uc7a5\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud559\uc2b5\ud55c \ub3c4\uba54\uc778\uc5d0 \ub300\ud574 \uc131\ub2a5\uc774 \ubcf4\uc7a5\ub428."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\ub2e8\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cold-start \uc640 cross-domain transfer knowledge \uc5d0 \ucde8\uc57d\ud558\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uc0c1\ud488 id + pre-trained textual embedding \ud65c\uc6a9\ud55c \ubc29\uc2dd\uc758 \uc7a5\ub2e8\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uc7a5\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"knowledge transfer \uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\ub2e8\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pre-training corpus \uac00 commerce domain corpus \uc640 \ucc28\uc774\uac00 \uc788\uc5b4 \ubaa8\ub378\uc774 optimal \ud558\uc9c0 \uc54a\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"model pre-training \uacfc downstream task fine-tuning \uacfc\uc815\uc774 \uc11c\ub85c \uc5f0\uad00\uc774 \uc5c6\uc5b4 \ubaa8\ub378\uc744 \ucda9\ubd84\ud788 \ud65c\uc6a9\ud558\uc9c0 \ubabb\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"fine-tuning \uacfc\uc815\uc5d0\uc11c \ubaa8\ub378\uc774 \uc0c1\ud488\uc758 \uc0c1\uc138 \uc18d\uc131 \uc815\ubcf4\uc5d0 \ub300\ud574\uc11c \ubc30\uc6b0\uc9c0 \ubabb\ud55c\ub2e4. (\ud6c4\uc220)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\uadf8\ub798\uc11c \ud574\ub2f9 \ub17c\ubb38\uc740 ",(0,i.jsx)(n.strong,{children:"1) \uc0c1\ud488\uc758 \uc0c1\uc138 \uc815\ubcf4\uae4c\uc9c0 \ubaa8\ub378\uc774 \uc774\ud574"}),"\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c\ud558\uba70, ",(0,i.jsx)(n.strong,{children:"2) text model pretraining \ubd80\ud130 \uc1fc\ud551 \ub370\uc774\ud130\uc5d0\uc11c \ucd94\ucc9c\uc744 \ud559\uc2b5\ud558\ub3c4\ub85d"}),"\ud574\uc57c \ud55c\ub2e4\uace0 \uc8fc\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uadf8\ub798\uc11c \ub17c\ubb38\uc5d0\uc11c\ub294 \uc0c1\ud488\uc758 \uc0c1\uc138\uc815\ubcf4\ub97c \uc774\ud574\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc73c\ub85c \uc0c1\ud488\uba85 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc0c1\uc138 \uc815\ubcf4\uae4c\uc9c0 \ud65c\uc6a9\ud574\uc11c text model \uc744 \ud559\uc2b5\ud569\ub2c8\ub2e4. text model \uc740 ",(0,i.jsx)(n.code,{children:"[CLS]{attr_key1}{attr_val1}{attr_key2}{attr_val2}..."})," \ud615\ud0dc\uc758 \ud14d\uc2a4\ud2b8\ub97c input \uc73c\ub85c \ubc1b\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["E.g.) ",(0,i.jsx)(n.code,{children:'"[CLS] \uc0c1\ud488\uba85 \uc560\ud50c \ub9e5\ubd81 2020 M1 \ube0c\ub79c\ub4dc \uc560\ud50c \uc0c9\uc0c1 \uace8\ub4dc"'})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\uadf8 \ud6c4 ",(0,i.jsx)(n.strong,{children:"MLM loss"})," \uc640 ",(0,i.jsx)(n.strong,{children:"\uc720\uc800 history \uae30\ubc18 contrastive loss"})," \uae30\ubc18\uc73c\ub85c \ubaa8\ub378\uc744 pre-training \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"\ubaa8\ub378-\ud559\uc2b5",children:"\ubaa8\ub378 \ud559\uc2b5"}),"\n",(0,i.jsx)(n.h3,{id:"step1-\uc0c1\ud488-\ub370\uc774\ud130-\ub9cc\ub4e4\uae30",children:"Step1. \uc0c1\ud488 \ub370\uc774\ud130 \ub9cc\ub4e4\uae30"}),"\n",(0,i.jsx)(n.p,{children:"\ucc98\uc74c \ub17c\ubb38\uc744 \ubcf4\uba74\uc11c \uc0c1\ud488\uba85\uc5d0\uc11c \uc54c \uc218 \uc788\ub294 \uc18d\uc131\ub4e4\uc740 \ubaa8\ub378\uc774 \ud559\uc2b5\ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c, \ub77c\uace0 \uc0dd\uac01\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc608\uc2dc\uc640 \uac19\uc774 \uc0c1\ud488\uba85\uc774 \uc18d\uc131 \uc815\ubcf4\uac00 \ub9ce\uc774 \uc81c\uc678\ub41c \uc0c1\ud488 \ubaa8\ub378\uba85\uc5d0 \uac00\uae4c\uc6b4 \uac83 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:r,style:{width:800}})}),"\n",(0,i.jsx)(n.h3,{id:"step2-\ubaa8\ub378-pretraining-feat-metric-learning",children:"Step2. \ubaa8\ub378 pretraining (feat. metric learning)"}),"\n",(0,i.jsx)(n.p,{children:"\ubaa8\ub378 \ud559\uc2b5\uc740 \ub450 \uac00\uc9c0 task \ub97c \uc218\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uae30\uc874 BERT preatrining \uacfc \uac19\uc740 masked language modeling \uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"user history \uc5d0\uc11c next item \uc744 positive sample \ub85c \uc0ac\uc6a9\ud558\uace0, in-batch next items \ub97c negative sample \ub85c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:l,style:{width:800}})}),"\n",(0,i.jsx)(n.h3,{id:"step3-\ubaa8\ub378-fine-tuning",children:"Step3. \ubaa8\ub378 fine-tuning"}),"\n",(0,i.jsx)(n.p,{children:"pretraining \ub9cc\uc73c\ub85c \ubaa8\ub378 \uc131\ub2a5\uc774 \ub098\uc624\ub294\ub370, fine-tuning \ub3c4 \uc9c4\ud589\ud574\uc11c \uc131\ub2a5 \ud655\uc778."}),"\n",(0,i.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:a,style:{width:800}})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);