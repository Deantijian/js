"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[9918,9664],{88271:(xe,z,e)=>{e.d(z,{Z:()=>s});var h=e(52945),I=e.n(h);const s={getListKnowledgeBase:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetListKnowledgeBase",a,n)},getKnowledgeBase:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetKnowledgeBase",a,n)},upsertKnowledgeBase:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","UpsertKnowledgeBase",a,n)},deleteKnowledgeBase:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","DeleteKnowledgeBase",a,n)},getListAllowUploadFile:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetListAllowUploadFile",a,n)},uploadFile:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","UploadFile",a,n)},getKnowledgeFileTotalSize:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.ajaxOptions=I()({},n.ajaxOptions,{type:"GET"}),mdyAPI("Assistant","GetKnowledgeFileTotalSize",a,n)},getListKnowledgeFile:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetListKnowledgeFile",a,n)},deleteKnowledgeFile:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","DeleteKnowledgeFile",a,n)},getAIAssistantLimitNumber:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.ajaxOptions=I()({},n.ajaxOptions,{type:"GET"}),mdyAPI("Assistant","GetAIAssistantLimitNumber",a,n)},getList:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetList",a,n)},get:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","Get",a,n)},upsert:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","Upsert",a,n)},setStatus:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","SetStatus",a,n)},delete:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","Delete",a,n)},getThread:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetThread",a,n)},dialogueSetupAssistant:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","DialogueSetupAssistant",a,n)},generateAssistantPreamble:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GenerateAssistantPreamble",a,n)},getSimpleInfo:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","GetSimpleInfo",a,n)},resetThread:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","ResetThread",a,n)},chat:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","Chat",a,n)},stopReply:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Assistant","StopReply",a,n)},getListAssistantMessage:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.ajaxOptions=I()({},n.ajaxOptions,{type:"GET"}),mdyAPI("Assistant","GetListAssistantMessage",a,n)}}},25967:(xe,z,e)=>{e.d(z,{Z:()=>s});var h=e(52945),I=e.n(h);const s={getShareNode:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Share","GetShareNode",a,n)},getShareFolder:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Share","GetShareFolder",a,n)},getShareLocalAttachment:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Share","GetShareLocalAttachment",a,n)},shareCheckLogin:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.ajaxOptions=I()({},n.ajaxOptions,{type:"GET"}),mdyAPI("Share","ShareCheckLogin",a,n)}}},46456:(xe,z,e)=>{e.d(z,{Z:()=>M});var h=e(6100),I=e(88239),s=e(33867),r=e(12424),a=e(1952),n=e(20148),f=e.n(n),C=e(60385),Y=e.n(C),y=e(86735),P=e(67294),L=e(30752),Z=e(71893),t=e(88271),N=(0,y.Z)([`
  .am-modal-content {
    border-radius: 12px;
  }
`],[`
  .am-modal-content {
    border-radius: 12px;
  }
`]),d=(0,y.Z)([`
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
`],[`
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
`]),j=(0,Z.ZP)(Y())(N),o=Z.ZP.div(d),c=function(m){return(0,a.Z)(function(k){var T=(0,P.useState)(!0),F=(0,r.Z)(T,2),b=F[0],A=F[1];return P.createElement(j,{popup:!0,transitionName:"noTransition",style:{height:"100%",padding:"12px"},onClose:function(){return A(!1)},visible:b},P.createElement(s.Z,{icon:"closeelement-bg-circle",className:"Absolute Gray_9e Font22",style:{top:10,right:10,zIndex:1},onClick:function(){return A(!1)}}),P.createElement("div",{className:"h100 TxtLeft",style:{padding:"36px 15px 0 15px"}},P.createElement(L.Z,{assistantId:k.assistantId,fullContent:!0})))},(0,I.default)({},m))};function l(ae){var m=ae.widget,k=m.config,T=k===void 0?{}:k,F=T.showType==="suspension",b=(0,P.useState)(null),A=(0,r.Z)(b,2),J=A[0],S=A[1];if((0,P.useEffect)(function(){F&&m.value&&t.Z.getSimpleInfo({assistantId:m.value}).then(function(v){S(v)})},[]),F){var g=J||{},B=g.iconUrl,H=g.iconColor;return J||_.isEmpty(m.value)?m.value?P.createElement(o,{className:"flexRow alignItemsCenter justifyContentCenter card",style:{backgroundColor:H||"#2196f3"},onClick:function(){c({assistantId:J.id,name:J.name})}},P.createElement(h.Z,{size:36,url:B,fill:"#fff"})):P.createElement(o,{className:"flexRow alignItemsCenter justifyContentCenter card",style:{backgroundColor:"#2196f3"},onClick:function(){alert(_l("\u52A9\u624B\u5DF2\u5173\u95ED\u6216\u5220\u9664"),3)}},P.createElement(s.Z,{icon:"workflow_failure",className:"White Font20 mBottom5"})):null}else return m.value?P.createElement(L.Z,{assistantId:m.value,fullContent:!0}):P.createElement("div",{className:"flexColumn valignWrapper w100 h100",style:{justifyContent:"center"}},P.createElement(s.Z,{icon:"workflow_failure",className:"Font64 Gray_c mBottom10"}),P.createElement("div",{className:"Gray_9e Font20 mBottom2"},_l("\u52A9\u624B\u5DF2\u5173\u95ED\u6216\u5220\u9664")))}const M=l},64940:(xe,z,e)=>{e.d(z,{Z:()=>ae});var h=e(88106),I=e(33867),s=e(88902),r=e.n(s),a=e(63239),n=e.n(a),f=e(88239),C=e(12424),Y=e(86735),y=e(67294),P=e(71893),L=e(50533),Z=e(22010),t=e(34498),N=e(27850),d=e(44253),j=e(96486),o=e.n(j),c=(0,Y.Z)([`
  .header {
    padding: 0 15px 10px;
    justify-content: flex-end;
  }
  .close {
    font-weight: bold;
    padding: 5px;
    border-radius: 50%;
    background-color: #e6e6e6;
  }
  .body {
    padding: 0 15px;
    overflow: auto;
    .controlWrapper {
      margin-bottom: 20px;
    }
    .selected {
      color: #2196f3;
      max-width: 100px;
      padding-left: 10px;
      font-weight: 500;
    }
  }
  .footer {
    border-top: 1px solid #eaeaea;
    .flex {
      padding: 10px;
    }
    .query {
      color: #fff;
      background-color: #2196f3;
    }
  }
`],[`
  .header {
    padding: 0 15px 10px;
    justify-content: flex-end;
  }
  .close {
    font-weight: bold;
    padding: 5px;
    border-radius: 50%;
    background-color: #e6e6e6;
  }
  .body {
    padding: 0 15px;
    overflow: auto;
    .controlWrapper {
      margin-bottom: 20px;
    }
    .selected {
      color: #2196f3;
      max-width: 100px;
      padding-left: 10px;
      font-weight: 500;
    }
  }
  .footer {
    border-top: 1px solid #eaeaea;
    .flex {
      padding: 10px;
    }
    .query {
      color: #fff;
      background-color: #2196f3;
    }
  }
`]),l=P.ZP.div(c);function M(m){var k=m.enableBtn,T=m.filters,F=m.controls,b=m.updateQuickFilter,A=m.onCloseDrawer,J=(0,y.useRef)({}),S=(0,y.useState)({}),g=(0,C.Z)(S,2),B=g[0],H=g[1],v=(0,y.useRef)(o().debounce(b,500)),X=(0,y.useMemo)(function(){return T.map(function(D){var se=o().cloneDeep((0,t.hk)(D.control));return(0,f.default)({},D,{control:se,dataType:se?se.type:D.dataType,filterType:se&&se.encryId?2:D.filterType})}).filter(function(D){return D.control&&!(window.shareState.shareId&&o().includes([26,27,48],D.control.type))})},[n()(T)]),ee=function(se){var re=se||B,ce=X.map(function(me,Le){return(0,f.default)({},me,{filterType:me.filterType||(me.dataType===29?24:2),spliceType:me.spliceType||1},re[Le])}).filter(t.Gu).map(t.We);if(ce.length){var le=ce.map(function(me){return B[0]==="isEmpty"&&(me.filterType=7),me.filterType===d.W5.DATE_BETWEEN&&me.dateRange!==18&&(me.filterType=d.W5.DATEENUM),(0,f.default)({},me)});o().includes(t.P4,J.current.activeType)?v.current((0,t.pT)(le)):b((0,t.pT)(le))}else b([])},q=function(){ee(),A()},G=function(){H({}),b([]),A()},U=r()(B).map(function(D){return{controlId:"fastFilter_"+o().get(T[D],"control.controlId"),filterValue:(0,f.default)({},B[D],{values:(0,N.M)(o().get(T[D],"control.type"),o().get(B[D],"values"))})}}).concat(T.filter(function(D){return D.dataType===2}).map(function(D){return{controlId:"fastFilter_"+D.controlId,filterValue:{values:D.values}}}));return(0,y.useEffect)(function(){ee()},[X]),y.createElement(l,{className:"flexColumn h100 overflowHidden"},y.createElement("div",{className:"header flexRow valignWrapper"},y.createElement(I.Z,{className:"Gray_9e close",icon:"close",onClick:A})),y.createElement("div",{className:"flex body"},T.map(function(D,se){return y.createElement(t.ZP,(0,f.default)({key:D.controlId},D,B[se],{filtersData:U,projectId:m.projectId,appId:m.appId,onChange:function(){var ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};J.current.activeType=D.control.type;var le=(0,f.default)({},B,(0,h.default)({},se,(0,f.default)({},B[se],ce)));H(le),!k&&!o().isEmpty(le)&&ee(le)},onRemove:function(){delete B[se];var ce=(0,f.default)({},B);H(ce),k||ee(ce)}}))})),k&&y.createElement("div",{className:"footer flexRow valignWrapper"},y.createElement("div",{className:"flex Font16 centerAlign",onClick:G},_l("\u91CD\u7F6E")),y.createElement("div",{className:"flex Font16 centerAlign query",onClick:q},_l("\u67E5\u8BE2"))))}const ae=M},7673:(xe,z,e)=>{e.d(z,{Z:()=>G});var h=e(33867),I=e(66814),s=e.n(I),r=e(91880),a=e.n(r),n=e(48388),f=e.n(n),C=e(29914),Y=e.n(C),y=e(88239),P=e(12424),L=e(48659),Z=e.n(L),t=e(1825),N=e(86735),d=e(67294),j=e(71893),o=e(93967),c=e.n(o),l=e(45231),M=e(64940),ae=e(50533),m=e(82986),k=e(22010),T=e(93582),F=e(82134),b=e(27850),A=e(22013),J=e(96486),S=e.n(J),g=(0,N.Z)([`
  &.disableFiltersGroup {
    pointer-events: none;
  }
`],[`
  &.disableFiltersGroup {
    pointer-events: none;
  }
`]),B=(0,N.Z)([`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  padding: 0 7px 0 10px;
  height: 100%;
  &.big {
    width: 100%;
  }
  &.highlight {
    color: #2196f3;
    .icon {
      color: #2196f3 !important;
    }
  }
`],[`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  padding: 0 7px 0 10px;
  height: 100%;
  &.big {
    width: 100%;
  }
  &.highlight {
    color: #2196f3;
    .icon {
      color: #2196f3 !important;
    }
  }
`]),H=(0,N.Z)([`
  z-index: 100 !important;
  .ant-drawer-body {
    padding: 10px 0 0 0;
  }
`],[`
  z-index: 100 !important;
  .ant-drawer-body {
    padding: 10px 0 0 0;
  }
`]),v=j.ZP.div(g),X=j.ZP.div(B),ee=(0,j.ZP)(t.Z)(H);function q(U){var D=U.ids,se=D===void 0?{}:D,re=U.apk,ce=re===void 0?{}:re,le=U.widget,me=U.className,Le=me===void 0?"":me,i=le.value,x=(0,d.useState)(!0),w=(0,P.Z)(x,2),K=w[0],R=w[1],O=(0,d.useState)({}),p=(0,P.Z)(O,2),u=p[0],W=p[1],E=(0,d.useState)(!1),V=(0,P.Z)(E,2),te=V[0],ne=V[1],oe=(0,d.useState)([]),_e=(0,P.Z)(oe,2),ue=_e[0],De=_e[1],de=Le.includes("disableFiltersGroup"),he=(0,T.U)(u.filters||[]).filter(function(pe){return!pe.className.includes("disable")});return(0,d.useEffect)(function(){return function(){U.updateLoadFilterComponentCount(0)}},[]),(0,d.useEffect)(function(){if(i)l.Z.getFiltersGroupByIds({appId:se.appId,filtersGroupIds:[i]}).then(function(We){R(!1);var Ie=We[0],be=(0,y.default)({},Ie,{filters:Ie.filters.map(function(nn){return(0,y.default)({},nn,{values:(0,b.W)(nn.dataType,nn.values)})})});W(le.filter?le.filter:be);var ln=A.Z.getState().mobile,Ke=ln.filterComponents,ke=ln.loadFilterComponentCount;if(U.updateFilterComponents(Ke.map(function(nn){if(nn.value===i){var an=Ie.advancedSetting,Pe=Ie.filters;return{value:i,advancedSetting:an,filters:S().flatten(Pe.map(function(rn){return rn.objectControls}))}}else return nn})),de){var Ye=A.Z.getState().customPage.loadFilterComponentCount;A.Z.dispatch((0,F.updatePageInfo)({loadFilterComponentCount:Ye+1}))}else U.updateLoadFilterComponentCount(ke+1)});else{var pe=A.Z.getState().customPage.loadFilterComponentCount;A.Z.dispatch((0,F.updatePageInfo)({loadFilterComponentCount:pe+1})),R(!1)}},[i]),(0,d.useEffect)(function(){de?A.Z.dispatch((0,F.updateFiltersGroup)({value:i,filters:ue})):U.updateFiltersGroup(i,ue)},[ue]),K?d.createElement(a(),{justify:"center",align:"center",className:"h100"},d.createElement(Y(),{size:"large"})):d.createElement(v,{className:c()("flexRow valignWrapper w100",Le),style:{height:40}},d.createElement(X,{className:c()("flexRow valignWrapper big",{highlight:ue.length}),onClick:function(){ne(!0)}},d.createElement(h.Z,{className:"Font20 Gray_9e",icon:"filter"}),d.createElement("div",{className:"flexRow valignWrapper w100"},d.createElement("span",{className:"Font15 flex mLeft5"},_l("\u7B5B\u9009")),!!ue.length&&d.createElement("span",{className:"mLeft5 mRight6"},_l("\u5DF2\u7B5B%0\u9879",ue.length)),d.createElement(h.Z,{className:"Font18 Gray_9e",icon:"arrow-right-border"}))),d.createElement(ee,{forceRender:!0,placement:"right",visible:te,closable:!1,width:"90%",onClose:function(){ne(!1)}},d.createElement(M.Z,{appId:se.appId,projectId:ce.projectId,enableBtn:u.enableBtn,filters:he.filter(function(pe){return pe.control&&!(window.shareState.shareId&&S().includes([26,27,48],pe.control.type))}),updateQuickFilter:function(We){De(We)},onCloseDrawer:function(){ne(!1)}})))}const G=(0,ae.$j)(function(U){return{filtersGroup:U.mobile.filtersGroup}},function(U){return(0,k.DE)(S().pick(m,["updateFiltersGroup","updateFilterComponents","updateLoadFilterComponentCount"]),U)})(q)},97163:(xe,z,e)=>{e.d(z,{Z:()=>o});var h=e(55055),I=e.n(h),s=e(62443),r=e(33867),a=e(88239),n=e(86735),f=e(67294),C=e(22010),Y=e(82986),y=e(50533),P=e(71893),L=e(729),Z=(0,n.Z)([`
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
`],[`
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
`]),t=(0,n.Z)([`
  width: 300px;
  padding: 5px 0;
  .linkageFilterWrap {
    max-height: 300px;
    overflow-y: auto;
  }
  .linkageFilter {
    padding: 5px 8px;
    border-radius: 4px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`],[`
  width: 300px;
  padding: 5px 0;
  .linkageFilterWrap {
    max-height: 300px;
    overflow-y: auto;
  }
  .linkageFilter {
    padding: 5px 8px;
    border-radius: 4px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`]),N=P.ZP.div(Z),d=P.ZP.div(t),j=function(l){var M=l.isSuspensionAi,ae=l.linkageFiltersGroup,m=ae===void 0?{}:ae,k=l.deleteLinkageFiltersGroup,T=l.deleteAllLinkageFiltersGroup;if(_.isEmpty(m))return null;var F=function(){var A=function(){var g=[];for(var B in m){var H=m[B];g.push((0,a.default)({key:B},H))}return g},J=A();return f.createElement(d,null,f.createElement("div",{className:"valignWrapper",style:{padding:"0 4px 0 9px"}},f.createElement("div",{className:"Font17 bold Gray flex"},_l("\u8054\u52A8\u7B5B\u9009")),f.createElement(r.Z,{className:"Font24 Gray_9e pointer",icon:"close",onClick:function(){return document.querySelector(".autoLinkageTrigger").click()}})),J.length?f.createElement(f.Fragment,null,f.createElement("div",{className:"linkageFilterWrap"},J.map(function(S){return f.createElement("div",{className:"linkageFilter mTop10",key:S.reportId},f.createElement("div",{className:"flexRow alignItemsCenter mBottom2"},f.createElement(r.Z,{className:"Font16 mRight5 ThemeColor",icon:_.find(L.og,{type:S.reportType}).icon}),f.createElement("div",{className:"flex ellipsis bold"},S.reportName),f.createElement(r.Z,{className:"Font17 Gray_9e pointer",icon:"delete2",onClick:function(){return k(S.key)}})),f.createElement("div",{className:"flexColumn mLeft20"},S.filters.map(function(g){return f.createElement("div",{key:g.controlId,dangerouslySetInnerHTML:{__html:_l("%0\u662F%1",'<span class="bold mRight2">'+g.controlName+"</span>",'<span class="bold mLeft2">'+(g.controlValue||"--")+"</span>")}})})))})),f.createElement("div",{className:"pointer ThemeColor mTop10 TxtRight",onClick:function(){T(),document.querySelector(".autoLinkageTrigger").click()}},_l("\u6E05\u7A7A\u5E76\u5173\u95ED"))):f.createElement("div",{className:"flexColumn alignItemsCenter justifyContentCenter mTop20 mBottom20"},f.createElement(r.Z,{className:"Font64 Gray_df",icon:"linkage_filter"}),f.createElement("div",{className:"Gray_9e mTop5 Font14"},_l("\u672A\u53D1\u8D77\u8054\u52A8\u7B5B\u9009"))))};return f.createElement(s.Z,{visible:void 0,trigger:"click",placement:"topRight",arrowPointAtCenter:!0,content:F()},f.createElement(N,{className:"flexRow alignItemsCenter justifyContentCenter card autoLinkageTrigger",style:{bottom:M?140:void 0}},f.createElement(r.Z,{icon:"linkage_filter",className:"Font22 ThemeColor"})))};const o=(0,y.$j)(function(c){return{linkageFiltersGroup:c.mobile.linkageFiltersGroup}},function(c){return(0,C.DE)(_.pick(Y,["deleteLinkageFiltersGroup","deleteAllLinkageFiltersGroup"]),c)})(j)},7446:(xe,z,e)=>{e.d(z,{Z:()=>S});var h=e(63627),I=e.n(h),s=e(81982),r=e.n(s),a=e(66814),n=e.n(a),f=e(91880),C=e.n(f),Y=e(48388),y=e.n(Y),P=e(29914),L=e.n(P),Z=e(12424),t=e(33867),N=e(86735),d=e(67294),j=e(71893),o=e(66637),c=e(93967),l=e.n(c),M=e(25967),ae=e(15577),m=(0,N.Z)([`
  height: 100%;
  display: flex;
  flex-direction: column;
  .iconWrap {
    background: #ffffffe6;
    padding: 8px;
    font-size: 24px;
    flex-direction: row-reverse;
    .icon-task-later {
      transform: rotate(0deg);
      transform-origin: center;
      &.turn {
        transition: transform 1s;
        transform: rotate(360deg);
      }
    }
    &.displayNone {
      display: none;
    }
  }
  .fileWrapper {
    justify-content: center;
    .name {
      margin: 17px 0 20px 0;
    }
  }
  .fileIcon {
    width: 70px;
    height: 80px;
  }
`],[`
  height: 100%;
  display: flex;
  flex-direction: column;
  .iconWrap {
    background: #ffffffe6;
    padding: 8px;
    font-size: 24px;
    flex-direction: row-reverse;
    .icon-task-later {
      transform: rotate(0deg);
      transform-origin: center;
      &.turn {
        transition: transform 1s;
        transform: rotate(360deg);
      }
    }
    &.displayNone {
      display: none;
    }
  }
  .fileWrapper {
    justify-content: center;
    .name {
      margin: 17px 0 20px 0;
    }
  }
  .fileIcon {
    width: 70px;
    height: 80px;
  }
`]),k=j.ZP.div(m);function T(g){return d.createElement("div",{className:"flexColumn valignWrapper fileWrapper h100"},d.createElement(t.Z,{className:"Font56 Gray_df mBottom20",icon:g.icon}),d.createElement("span",{className:"Font14 Gray_9d"},g.text))}function F(g){var B=g.value,H=(0,d.useState)(!1),v=(0,Z.Z)(H,2),X=v[0],ee=v[1],q=(0,d.useState)(null),G=(0,Z.Z)(q,2),U=G[0],D=G[1],se=null;try{se=B.match(/\/apps\/kcshareFolder\/(\w+)/)[1]}catch(re){}return se&&(0,d.useEffect)(function(){ee(!0),M.Z.getShareFolder({shareId:se}).then(function(re){var ce=re.node;D(ce)}).finally(function(){return ee(!1)})},[se]),d.createElement(k,null,X?d.createElement(C(),{justify:"center",align:"center",className:"h100"},d.createElement(L(),{size:"large"})):U?d.createElement("div",{className:"flexColumn valignWrapper fileWrapper h100"},d.createElement("span",{className:"fileIcon fileIcon-folder"}),d.createElement("span",{className:"name"},U.name),d.createElement(r(),{type:"primary",inline:!0,size:"small",onClick:function(){window.open(B)}},_l("\u6253\u5F00\u94FE\u63A5"))):d.createElement(T,{icon:"shared_folder",text:_l("\u77E5\u8BC6\u4E2D\u5FC3\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u60A8\u6CA1\u6709\u67E5\u770B\u6743\u9650")}))}function b(g){var B=g.value,H=(0,d.useState)(!1),v=(0,Z.Z)(H,2),X=v[0],ee=v[1],q=(0,d.useState)(null),G=(0,Z.Z)(q,2),U=G[0],D=G[1],se=U&&U.ext==="url",re=null;try{re=B.match(/\/apps\/kcshare\/(\w+)/)[1]}catch(ce){}return re&&(0,d.useEffect)(function(){ee(!0),M.Z.getShareNode({shareId:re}).then(function(ce){var le=ce.node;D(le)}).finally(function(){return ee(!1)})},[re]),d.createElement(k,null,X?d.createElement(C(),{justify:"center",align:"center",className:"h100"},d.createElement(L(),{size:"large"})):U?d.createElement("div",{className:"flexColumn valignWrapper fileWrapper h100"},d.createElement("span",{className:l()("fileIcon","fileIcon-"+(0,ae.Jw)(U.ext))}),d.createElement("span",{className:"name"},U.name+"."+U.ext),d.createElement(r(),{type:"primary",inline:!0,size:"small",onClick:function(){window.open(se?U.originLinkUrl:B)}},se?_l("\u6253\u5F00\u94FE\u63A5"):_l("\u6253\u5F00\u6587\u4EF6"))):d.createElement(T,{icon:"shared_folder",text:_l("\u77E5\u8BC6\u4E2D\u5FC3\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u60A8\u6CA1\u6709\u67E5\u770B\u6743\u9650")}))}function A(g,B){var H=genUrl(g,B);return/^https?:\/\//.test(H)?H:"https://"+H}function J(g){var B=g.value,H=g.param,v=g.config,X=v===void 0?{}:v,ee=X.reload,q=ee===void 0?!1:ee,G=X.newTab,U=G===void 0?!1:G;return B.includes("kcshareFolder/")?d.createElement(F,{value:B}):B.includes("kcshare/")?d.createElement(b,{value:B}):d.createElement(o.Z,{reload:q,newTab:U,value:B,param:H})}const S=J},73396:(xe,z,e)=>{e.d(z,{Z:()=>c});var h=e(88239),I=e(66814),s=e.n(I),r=e(91880),a=e.n(r),n=e(48388),f=e.n(n),C=e(29914),Y=e.n(C),y=e(12424),P=e(67294),L=e(50533),Z=e(37495),t=e(93582),N=e(96486),d=e.n(N),j=[];function o(l){var M=l.setting,ae=l.filterComponents,m=l.loadFilterComponentCount,k=d().get(M,"config.objectId"),T=(0,t.X)(k,l.filtersGroup),F=(0,P.useState)(!1),b=(0,y.Z)(F,2),A=b[0],J=b[1];if((0,P.useEffect)(function(){var g=document.querySelector("#componentsWrap");if(!g){J(!0);return}var B=g.querySelector(".widgetContent .view-"+M.id),H=function(){if(!A){var X=g.getBoundingClientRect(),ee=B.getBoundingClientRect(),q=ee.top<=X.bottom;q&&J(q)}};return g.addEventListener("scroll",H,!1),H(),function(){g.removeEventListener("scroll",H,!1)}},[]),!d().get(window,"shareState.shareId")&&ae.length&&m<ae.length)return P.createElement(a(),{justify:"center",align:"center",className:"h100 w100"},P.createElement(Y(),{size:"large"}));var S=!!ae.map(function(g){var B=g.filters,H=g.advancedSetting,v=d().find(B,{objectId:k});return v&&H.clicksearch==="1"}).filter(function(g){return g}).length;return S&&!T.length?P.createElement(a(),{justify:"center",align:"center",className:"h100 w100"},P.createElement("span",{className:"Font15 bold Gray_9e"},_l("\u6267\u884C\u67E5\u8BE2\u540E\u663E\u793A\u7ED3\u679C"))):A?P.createElement(Z.G,(0,h.default)({},l,{filtersGroup:T.length?T:j})):P.createElement(a(),{justify:"center",align:"center",className:"h100 w100"},P.createElement(Y(),{size:"large"}))}const c=(0,L.$j)(function(l){return{filtersGroup:l.mobile.filtersGroup,filterComponents:l.mobile.filterComponents,loadFilterComponentCount:l.mobile.loadFilterComponentCount}})(o)},97204:(xe,z,e)=>{e.d(z,{Z:()=>j});var h=e(88239),I=e(63355),s=e(86735),r=e(67294),a=e(71893),n=e(22904),f=e(7446),C=e(71352),Y=e(11555),y=e(73396),P=e(7673),L=e(46456),Z=(0,s.Z)([`
  flex: 1;
  box-sizing: border-box;
  padding: 8px 15px;
  background-color: #fff;
  height: 100%;
  &.button {
    display: flex;
  }
  &.mobileEmbedUrl, &.mobileView, &.mobileFilter, &.mobileCarousel {
    padding: 0 !important;
  }
  &.mobileFilter {
    display: flex;
    justify-content: center;
    background-color: transparent;
  }
  &.mobileButton {
    padding: 8px 6px !important;
  }
  img {
    max-width: 100%;
  }
  .mdEditorContent {
    overflow: initial !important;
  }
`],[`
  flex: 1;
  box-sizing: border-box;
  padding: 8px 15px;
  background-color: #fff;
  height: 100%;
  &.button {
    display: flex;
  }
  &.mobileEmbedUrl, &.mobileView, &.mobileFilter, &.mobileCarousel {
    padding: 0 !important;
  }
  &.mobileFilter {
    display: flex;
    justify-content: center;
    background-color: transparent;
  }
  &.mobileButton {
    padding: 8px 6px !important;
  }
  img {
    max-width: 100%;
  }
  .mdEditorContent {
    overflow: initial !important;
  }
`]),t=a.ZP.div(Z),N=function(c){return c.charAt(0).toUpperCase()+c.slice(1)};function d(o){var c=o.ids,l=o.widget,M=o.apk,ae=o.pageComponents,m=o.pageConfig,k=o.themeColor,T=o.componentType,F=l.type,b=l.value,A=l.name,J=l.button,S=l.param,g=S===void 0?[]:S,B=l.config,H=B===void 0?{}:B,v=function(){if(T==="embedUrl")return r.createElement(f.Z,{value:b,param:g,config:H});if(T==="richText")return r.createElement(I.Z,{data:b||"",className:"mdEditorContent",disabled:!0,backGroundColor:"#fff"});if(T==="button")return r.createElement(n.u,{editable:!1,button:J,info:(0,h.default)({},c,{projectId:M.projectId,itemId:c.worksheetId}),layoutType:"mobile",addRecord:function(U){}});if(T==="analysis")return r.createElement(Y.StateChartContent,{widget:l,reportId:b,name:A,pageComponents:ae.filter(function(G){return G.type===1}),pageConfig:m,themeColor:M.iconColor,projectId:M.projectId});if(T==="view")return r.createElement(y.Z,{appId:c.appId,setting:l});if(T==="filter")return r.createElement(P.Z,{ids:c,apk:M,widget:l});if(T==="carousel"){var ee=l.config,q=l.componentConfig;return r.createElement(C.Z,{config:ee,componentConfig:q})}if(T==="ai")return r.createElement(L.Z,{widget:l})};return r.createElement(t,{className:"mobile"+N(T)+" "+T+"-"+l.id+" flexColumn "},v())}const j=d},3482:(xe,z,e)=>{e.r(z),e.d(z,{default:()=>w});var h=e(93567),I=e(66814),s=e.n(I),r=e(91880),a=e.n(r),n=e(48388),f=e.n(n),C=e(29914),Y=e.n(C),y=e(63239),P=e.n(y),L=e(85105),Z=e.n(L),t=e(99663),N=e(22600),d=e(49135),j=e(93196),o=e(86735),c=e(88239),l=e(67294),M=e(93967),ae=e.n(M),m=e(75915),k=e(71893),T=e(84731),F=e(91088),b=e(49611),A=e.n(b),J=e(69968),S=e.n(J),g=e(18484),B=e(24607),H=e(97204),v=e(28968),X=e(90009),ee=e(87600),q=e(22013),G=e(82986),U=e(46456),D=e(97163),se=e(96486),re=e.n(se),ce,le=(0,o.Z)([`
  .widgetContent {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    overflow: auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
    &.haveTitle {
      height: calc(100% - 40px);
    }
    &.filter {
      overflow: inherit;
      box-shadow: none;
      background-color: transparent;
    }
  }
  .componentTitle {
    height: 32px;
    line-height: 32px;
    margin-bottom: 4px;
    font-size: 16px;
  }
`],[`
  .widgetContent {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    overflow: auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
    &.haveTitle {
      height: calc(100% - 40px);
    }
    &.filter {
      overflow: inherit;
      box-shadow: none;
      background-color: transparent;
    }
  }
  .componentTitle {
    height: 32px;
    line-height: 32px;
    margin-bottom: 4px;
    font-size: 16px;
  }
`]),me=(0,o.Z)([`
  .iconWrap {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: #e6e6e6;
    text-align: center;
    padding-top: 35px;
    i {
      font-size: 60px;
      color: #bdbdbd;
    }
  }
`],[`
  .iconWrap {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: #e6e6e6;
    text-align: center;
    padding-top: 35px;
    i {
      font-size: 60px;
      color: #bdbdbd;
    }
  }
`]),Le=function(R){return R.map(function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments[1],u=O.id,W=O.mobile,E=W.layout,V=W.titleVisible,te="mobile";return E?(0,c.default)({},E,{i:""+(u||p)}):(0,c.default)({},(0,g.uy)({components:R,index:p,layoutType:te,titleVisible:V}),{i:""+(u||p)})})},i=k.ZP.div(le),x=k.ZP.div(me),w=(0,v.Z)(ce=function(K){(0,j.default)(R,K);function R(O){(0,t.default)(this,R);var p=(0,d.default)(this,(R.__proto__||Z()(R)).call(this,O));return p.state={loading:!1,apk:{},pageComponents:[],pageConfig:{},pageName:"",urlTemplate:""},p}return(0,N.default)(R,[{key:"componentDidMount",value:function(){this.getPage(this.props),this.getPageInfo(this.props),window.isMingDaoApp||(0,X.Z)(),(0,B.v0)()}},{key:"componentWillReceiveProps",value:function(p){var u=p.match.params,W=this.props.match.params;u.worksheetId!==W.worksheetId&&this.getPage(p)}},{key:"componentWillUnmount",value:function(){$(window).off("orientationchange"),window.IM&&(IM.socket.off("workflow_push"),IM.socket.off("workflow"))}},{key:"getPage",value:function(p){var u=this,W=p.match.params,E=p.appNaviStyle,V=p.appSection,te=V===void 0?[]:V,ne=localStorage.getItem("currentNavWorksheetId"),oe=ne&&localStorage.getItem("currentNavWorksheetInfo-"+ne)&&JSON.parse(localStorage.getItem("currentNavWorksheetInfo-"+ne));if(E===2&&oe){var _e=(oe||{}).components||[],ue=(0,g.CP)(_e),De=(ue||_e).filter(function(de){return de.mobile.visible});this.setState({pageComponents:De,loading:!1,pageName:oe.name}),q.Z.dispatch((0,G.updateFilterComponents)(De.filter(function(de){return de.value&&de.type===6})))}else this.setState({loading:!0}),T.Z.getPage({appId:W.worksheetId}).then(function(de){if(E===2){var he=re().flatten(te.map(function(be){return be.workSheetInfo.forEach(function(ln){ln.appSectionId=be.appSectionId}),be.workSheetInfo})).filter(function(be){return[1,3].includes(be.status)&&!be.navigateHide}).slice(0,4);he.forEach(function(be){be.workSheetId===W.worksheetId&&safeLocalStorageSetItem("currentNavWorksheetInfo-"+W.worksheetId,P()(de))})}var pe=de.components,We=(0,g.CP)(pe),Ie=(We||pe).filter(function(be){return be.mobile.visible});u.setState({apk:de.apk||{},pageComponents:Ie,loading:!1,pageName:de.name,pageConfig:(0,g.Te)(de.config,re().get(de.apk,"iconColor"))}),q.Z.dispatch((0,G.updateFilterComponents)(Ie.filter(function(be){return be.value&&be.type===6})))});$(window).bind("orientationchange",function(){location.reload()})}},{key:"getPageInfo",value:function(p){var u=this,W=p.match.params;F.Z.getPageInfo({appId:W.appId,groupId:W.groupId,id:W.worksheetId}).then(function(E){u.setState({pageName:E.name,urlTemplate:E.urlTemplate})})}},{key:"renderLoading",value:function(){return l.createElement(a(),{justify:"center",align:"center",className:"h100"},l.createElement(Y(),{size:"large"}))}},{key:"renderWithoutData",value:function(){return l.createElement(a(),{justify:"center",align:"center",className:"h100"},l.createElement(x,null,l.createElement("div",{className:"iconWrap"},l.createElement("i",{className:"icon-custom_widgets"})),l.createElement("p",{className:"Gray_75 TxtCenter mTop16"},_l("\u6CA1\u6709\u5185\u5BB9"))))}},{key:"renderContent",value:function(){var p=this.state,u=p.apk,W=p.pageConfig,E=(0,g.k0)(this.state.pageComponents),V=this.props.match.params,te=Le(E);return l.createElement(S(),{width:document.documentElement.clientWidth,className:"layout mBottom30",cols:2,rowHeight:40,margin:[10,10],isDraggable:!1,isResizable:!1,draggableCancel:".componentTitle",layout:te},E.map(function(ne,oe){var _e=ne.id,ue=ne.type,De=ne.mobile,de=De.title,he=De.titleVisible,pe=(0,g.V3)(ue);return l.createElement(i,{key:""+(_e||oe),className:"resizableWrap"},he&&l.createElement("div",{className:"componentTitle overflow_ellipsis Gray bold"},de),l.createElement("div",{className:ae()("widgetContent",pe,{haveTitle:he})},l.createElement(H.Z,{pageComponents:E,pageConfig:W,componentType:pe,widget:ne,apk:u,ids:{appId:V.appId,groupId:V.groupId,worksheetId:V.worksheetId}})))}))}},{key:"renderUrlTemplate",value:function(){var p=this.props.match.params,u=this.state.urlTemplate,W=(0,ee.Pz)(u),E=[];return W.map(function(V){V.staticValue?E.push(V.staticValue):E.push((0,B.fS)({appId:p.appId,groupId:p.groupId,worksheetId:p.worksheetId},V.cid))}),l.createElement("div",{className:"h100 w100"},l.createElement("iframe",{className:"w100 h100",style:{border:"none"},src:E.join("")}))}},{key:"render",value:function(){var p=this,u=this.props,W=u.pageTitle,E=u.appNaviStyle,V=this.state,te=V.pageComponents,ne=V.loading,oe=V.pageName,_e=V.apk,ue=V.urlTemplate,De=(0,g.gq)(te);return l.createElement(h.Z,{projectId:_e.projectId},l.createElement("div",{id:"componentsWrap",className:"h100 w100 GrayBG",style:{overflowY:"auto"}},l.createElement(A(),{title:W||oe||_l("\u81EA\u5B9A\u4E49\u9875\u9762")}),ue?this.renderUrlTemplate():ne?this.renderLoading():te.length?this.renderContent():this.renderWithoutData(),De&&l.createElement(U.Z,{widget:De}),!window.isMingDaoApp&&!(E===2&&location.href.includes("mobile/app")&&md.global.Account.isPortal)&&!re().get(window,"shareState.shareId")&&l.createElement(m.Z,{style:{bottom:E===2?"70px":"20px"},className:"low",icon:E===2&&location.href.includes("mobile/app")?"home":"back",onClick:function(){var he=p.props.match.params;window.mobileNavigateTo("/mobile/app/"+he.appId)}}),l.createElement(D.Z,{isSuspensionAi:De})))}}]),R}(l.Component))||ce},3903:(xe,z,e)=>{e.d(z,{Z:()=>H});var h=e(88239),I=e(42185),s=e(33867),r=e(12424),a=e(86735),n=e(67294),f=e(22010),C=e(50533),Y=e(53242),y=e(49611),P=e.n(y),L=e(83848),Z=e(15308),t=e(71893),N=e(46891),d=e(25019),j=e(31742),o=e(76345),c=e(68705),l=e(15577),M=e(91088),ae=e(96486),m=e.n(ae),k=(0,a.Z)([`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`]),T=(0,a.Z)([`
  flex: 1;
  min-height: 0;
  border: 1px solid #e0e0e0 !important;
`],[`
  flex: 1;
  min-height: 0;
  border: 1px solid #e0e0e0 !important;
`]),F=(0,a.Z)([`
  height: 44px;
  padding: 0px 24px;
  background-color: rgb(255, 255, 255);
`],[`
  height: 44px;
  padding: 0px 24px;
  background-color: rgb(255, 255, 255);
`]),b=(0,a.Z)([`
  position: fixed;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 1;
  button {
    height: 44px;
    display: flex !important;
    align-items: center;
    border-radius: 24px !important;
    padding: 0px 15px !important;
    margin: 0 auto;
    box-shadow: 0 1px 4px #00000029;
  }
`],[`
  position: fixed;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 1;
  button {
    height: 44px;
    display: flex !important;
    align-items: center;
    border-radius: 24px !important;
    padding: 0px 15px !important;
    margin: 0 auto;
    box-shadow: 0 1px 4px #00000029;
  }
`]),A=t.ZP.div(k),J=t.ZP.div(T),S=t.ZP.div(F),g=t.ZP.div(b);function B(v){var X=v.showHeader,ee=v.headerLeft,q=v.headerRight,G=v.base,U=v.workSheetLoading,D=v.worksheetInfo,se=v.sheetSwitchPermit,re=v.filtersGroup,ce=re===void 0?[]:re,le=v.showPageTitle,me=v.loadWorksheet,Le=v.updateFilters,i=v.updateFiltersGroup,x=D.views,w=x===void 0?[]:x,K=D.allowAdd,R=G.viewId,O=G.appId,p=G.worksheetId,u=m().find(w,{viewId:R})||!R&&w[0]||{},W=(0,n.useState)(""),E=(0,r.Z)(W,2),V=E[0],te=E[1];(0,n.useEffect)(function(){O&&p&&me(!0)},[O,p]),(0,n.useEffect)(function(){ne()},[O]),(0,Y.Z)(function(){if(!U&&R){if(m().get(u,"navGroup.length")){Le({filtersGroup:ce},u),i(ce);return}[0,6].includes(u.viewType)?i(ce):Le({filtersGroup:ce},u)}},[ce,U,R]);var ne=function(){!O||m().get(window,"shareState.shareId")||M.Z.getApp({appId:O}).then(function(ue){te(ue.iconColor)})},oe=function(){var ue=D.appId,De=D.worksheetId,de=function(pe){u.viewType?v.addNewRecord(pe,u):v.unshiftSheetRow(pe)};window.isMingDaoApp?(0,l.Sk)({type:"native",settings:{appId:ue,worksheetId:De,viewId:u.viewId,action:"addRow"}}).then(function(he){var pe=he.value;if(pe){var We=JSON.parse(pe);We.forEach(function(Ie){de(Ie)})}}):(0,c.openAddRecord)({className:"full",worksheetInfo:D,appId:ue,worksheetId:De,viewId:u.viewId,addType:2,entityName:D.entityName,onAdd:de,showDraftsEntry:!0,sheetSwitchPermit:se})};return!U&&n.createElement(A,{className:"SingleViewWrap"},le&&D.name&&n.createElement(P(),{title:""+D.name+(u.name?" - "+u.name:"")}),X&&n.createElement(S,{className:"SingleViewHeader mobile flexRow valignWrapper"},ee,n.createElement("div",{className:"flex"}),q),n.createElement(J,{className:"flexRow SingleViewBody"},n.createElement(d.Z,{view:u})),(0,j.v)(o.RX.createButtonSwitch,se)&&K&&(u.viewType===6&&u.childType!==1||u.viewType!==6)&&n.createElement(g,null,n.createElement(I.ZP,{className:"valignWrapper flexRow addRecord",style:{backgroundColor:V},onClick:oe},n.createElement(s.Z,{icon:"add",className:"Font22 mRight5"}),D.entityName)))}const H=(0,C.$j)(function(v){return(0,h.default)({},m().pick(v.mobile,"base","workSheetLoading","worksheetInfo","sheetSwitchPermit","appColor"))},function(v){return(0,f.DE)({loadWorksheet:L.loadWorksheet,unshiftSheetRow:L.unshiftSheetRow,updateFiltersGroup:L.updateFiltersGroup,addNewRecord:Z.addNewRecord,updateFilters:Z.updateFilters},v)})((0,N.Z)(B))},54051:(xe,z,e)=>{e.d(z,{Z:()=>f});var h=e(67294),I=e(50533),s=e(22013),r=e(83848),a=e(3903);function n(C,Y){var y=C.appId,P=C.viewId,L=C.worksheetId,Z=C.maxCount,t=C.showHeader,N=C.headerLeft,d=C.headerRight,j=C.filtersGroup,o=C.showPageTitle,c=(0,h.useMemo)(s.x,[]);return(0,h.useEffect)(function(){c.dispatch((0,r.updateBase)({appId:y,viewId:P,worksheetId:L,maxCount:Z}))},[]),(0,h.useImperativeHandle)(Y,function(){return{dispatch:c.dispatch,getState:c.getState}}),h.createElement(I.zt,{store:c},h.createElement(a.Z,{showHeader:t,headerLeft:N,headerRight:d,filtersGroup:j,showPageTitle:o}))}const f=(0,h.forwardRef)(n)},60876:(xe,z,e)=>{e.d(z,{$B:()=>N,s3:()=>P,tg:()=>t});var h=e(349),I=e.n(h),s=e(85105),r=e.n(s),a=e(72444),n=e(88239),f=e(88902),C=e.n(f),Y=e(96486),y=e.n(Y),P=function(o){return y().get(o,["match","params"])},L=function(o){return _.flatten(_Object$keys(o).map(function(c){var l=o[c];return _.includes(["validProject"],c)?l.map(function(M){return _extends({type:c},M)}):_.includes(["aloneApps"],c)?{type:c,projectApps:l}:l.length?{type:c,projectApps:l}:null})).filter(function(c){return!!c})},Z=function(o){if((typeof o>"u"?"undefined":(0,a.default)(o))!=="object"||o===null)return!1;for(var c=o;r()(c)!==null;)c=r()(c);return r()(o)===c},t=function j(){for(var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:C()(o),M=0;M<l.length;M++){var ae=l[M],m=o[ae],k=c[ae];if(Z(m)&&Z(k))return j(m,k,C()(m));if(!I()(m,k))return!0}return!1},N=function(o){var c=o.isGoodsStatus,l=o.isNew,M=o.fixed,ae=o.isUpgrade;return c?ae?_l("\u5347\u7EA7\u4E2D"):M?_l("\u7EF4\u62A4\u4E2D%01018"):l?_l("\u65B0 !"):null:_l("\u8FC7\u671F")},d=function(o,c){switch(c){case APP_ROLE_TYPE.POSSESS_ROLE:break;case APP_ROLE_TYPE.ADMIN_ROLE:o=_.filter(o,function(l){return!_.includes(["del"],l.type)});break;case APP_ROLE_TYPE.RUNNER_ROLE:o=_.filter(o,function(l){return _.includes(["modify","editIntro","appAnalytics","appLogs","modifyAppLockPassword"],l.type)});break;case APP_ROLE_TYPE.DEVELOPERS_ROLE:o=_.filter(o,function(l){return!_.includes(["copy","export","appAnalytics","appLogs","del"],l.type)});break;case APP_ROLE_TYPE.RUNNER_DEVELOPERS_ROLE:o=_.filter(o,function(l){return!_.includes(["copy","export","del"],l.type)});break;default:break}return o}},84731:(xe,z,e)=>{e.d(z,{Z:()=>a});var h=e(63239),I=e.n(h),s=e(15845),r={getPage:function(f,C){return s.Z.ajaxOptions.url=s.Z.server()+"/custom/getPage",s.Z.ajaxOptions.type="GET",mdyAPI(s.V,"customgetPage",f,$.extend(s.Z,C))},getReportsByWorksheetId:function(f,C){return s.Z.ajaxOptions.url=s.Z.server()+"/custom/getReportsByWorksheetId",s.Z.ajaxOptions.type="GET",mdyAPI(s.V,"customgetReportsByWorksheetId",f,$.extend(s.Z,C))},savePage:function(f,C){return s.Z.ajaxOptions.url=s.Z.server()+"/custom/savePage",s.Z.ajaxOptions.type="POST",mdyAPI(s.V,"customsavePage",I()(f),$.extend(s.Z,C))},updatePage:function(f,C){return s.Z.ajaxOptions.url=s.Z.server()+"/custom/updatePage",s.Z.ajaxOptions.type="POST",mdyAPI(s.V,"customupdatePage",I()(f),$.extend(s.Z,C))}};const a=r},22904:(xe,z,e)=>{e.d(z,{u:()=>R});var h=e(20148),I=e.n(h),s=e(60385),r=e.n(s),a=e(3540),n=e(69288),f=e(39216),C=e.n(f),Y=e(48272),y=e.n(Y),P=e(94942),L=e.n(P),Z=e(88239),t=e(63239),N=e.n(t),d=e(36803),j=e(12424),o=e(46593),c=e.n(o),l=e(86735),M=e(67294),ae=e(71893),m=e(12246),k=e(69945),T=e(90571),F=e(98389),b=e(20640),A=e.n(b),J=e(91877),S=e(91088),g=e(3735),B=e(45231),H=e(42638),v=e(86674),X=e(66637),ee=e(70039),q=e(82011),G=e(18484),U=e(50533),D=e(15577),se=e(3767),re=e(45309),ce=e(36021),le=e(96486),me=e.n(le),Le=e(30381),i=e.n(Le),x=(0,l.Z)([`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 0 auto;
`],[`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 0 auto;
`]),w=ae.ZP.div(x),K=function(u,W){return new(c())(function(E,V){g.Z.getDepartmentsByAccountId({projectId:u,accountIds:[W]}).then(function(te){var ne=te.maps,oe=me().find(ne,{accountId:W})||{},_e=oe.departments;E(_e||[])})})};function R(p){var u=function(){var fe=(0,d.Z)(L().mark(function ge(Q,Oe){var Me,Ee,Te,ye,Ce,Ge,Re,on,Ve,_n,Ne,ze;return L().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:if(Me=Q.id,Ee=Q.processId,Te=Q.name,ye=Q.config,Ce=ye.inputs,Ge=Ce===void 0?[]:Ce,Re=md.global.Account.accountId,on=ue.appId||me().get(ue,"apk.appId"),Ve=(0,D.A_)(),_n=Ve.pushUniqueId,Ne=[],ze=me().find(Ge,{value:[{cid:"triggerDepartment"}]}),!ze){$e.next=11;break}return $e.next=10,K(Se,Re);case 10:Ne=$e.sent;case 11:H.Z.startProcessByPBC({pushUniqueId:window.isMingDaoApp&&_n||md.global.Config.pushUniqueId,appId:on,triggerId:Me,title:Te,processId:Ee,controls:Ge.filter(function(Fe){return Fe.value.length}).map(function(Fe){var dn=Fe.value.map(function(Je){return Je.cid==="triggerUser"?Fe.type===v.DN.USER_PICKER?N()([Re]):md.global.Account.fullname:Je.cid==="triggerDepartment"?Fe.type===v.DN.DEPARTMENT?N()(Ne.map(function(je){return je.id})):N()(Ne.map(function(je){return je.name})):Je.cid==="triggerTime"?i()().format("YYYY-MM-DD HH:mm:ss"):Je.cid==="codeResult"?Oe:Je.staticValue});return(0,Z.default)({},Fe,{value:dn.join("")})})}).then(function(Fe){});case 12:case"end":return $e.stop()}},ge,this)}));return function(Q,Oe){return fe.apply(this,arguments)}}(),W=function(){var fe=(0,d.Z)(L().mark(function ge(Q){var Oe,Me,Ee,Te,ye,Ce,Ge,Re,on,Ve,_n,Ne,ze,gn,$e,Fe,dn,Je,je,qe,tn,En,fn,Dn,Ue,vn,en,Cn,xn,we,ve;return L().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:if(!ne){ie.next=2;break}return ie.abrupt("return");case 2:if(Oe=Q.param,Me=Q.action,Ee=Q.value,Te=Q.viewId,ye=Q.openMode,Ce=ye===void 0?1:ye,Ge=Q.name,!(Mn&&Me!==4)){ie.next=6;break}return alert(_l("\u65E0\u6743\u64CD\u4F5C"),3),ie.abrupt("return");case 6:if(!(Me===1&&Ee)){ie.next=33;break}return Re=Q.btnId,Pe&&y().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),ie.next=11,S.Z.getAppSimpleInfo({workSheetId:Ee});case 11:return on=ie.sent,Ve=on.appId,ie.next=15,B.Z.getSwitchPermit({appId:Ve,worksheetId:Ee});case 15:if(_n=ie.sent,Pe&&y().hide(),Ne={visible:!0,value:Ee,viewId:Te,appId:Ve,name:Ge,sheetSwitchPermit:_n},!window.isMingDaoApp){ie.next=22;break}return ze="/mobile/addRecord/"+Ve+"/"+Ee+"/"+Te,window.location.href=Re?ze+"?btnId="+Re:ze,ie.abrupt("return");case 22:if(!Re){ie.next=32;break}return Pe&&y().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),ie.next=26,B.Z.getWorksheetBtnByID({appId:Ve,worksheetId:Ee,btnId:Re});case 26:gn=ie.sent,$e=gn.writeControls,Pe&&y().hide(),pe((0,Z.default)({},Ne,{writeControls:$e})),ie.next=33;break;case 32:pe(Ne);case 33:if(!(me().includes([2,3],Me)&&Ee)){ie.next=45;break}return Pe&&y().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),ie.next=37,S.Z.getAppSimpleInfo({workSheetId:Ee});case 37:Fe=ie.sent,dn=Fe.appId,Je=Fe.appSectionId,Pe&&y().hide(),je=function(){var Qe="/app";Pe&&(Qe=Te?"/mobile/recordList":"/mobile/customPage");var Tn=""+(window.subPath||"")+Qe+"/"+dn+"/"+Je+"/"+Ee;return Te&&(Tn+="/"+Te),Tn},qe=je(),window.isMingDaoApp?window.location.href=qe:Ce===2?window.open(qe):(0,ce.T8)(qe),Te||(0,D.Ye)("customPage",Ee);case 45:if(!(Me===4&&Ee)){ie.next=54;break}if(tn=(0,G.do)(Ee,Oe,ue),Ce!==1){ie.next=50;break}return location.href=tn,ie.abrupt("return");case 50:if(Ce!==2){ie.next=53;break}return window.open(tn),ie.abrupt("return");case 53:window.open(tn,"_blank","width=800px,height=600px,left=200px,top=200px");case 54:if(Me===5&&(window.isMingDaoApp?(0,D.Sk)({type:"scan"}).then(function(He){var Qe=He.value;Qe&&E(Qe,Q)}):Pe?(mn(Q),rn.current.handleScanCode()):(En=Q.config||{},fn=En.placeholder,Dn=function(){var Qe=me().get(rn,"current.state.value");Qe?(E(Qe,Q),Ue()):alert(_l("\u8BF7\u8F93\u5165\u5185\u5BB9"),3)},Ue=n.Z.confirm({width:480,title:M.createElement("span",{className:"bold"},Ge),description:M.createElement(a.Z,{autoFocus:!0,defaultValue:"",className:"w100 confirmInput",placeholder:fn,ref:rn,onKeyDown:function(Qe){Qe.keyCode===13&&Dn()}}),footer:M.createElement("div",{className:"Dialog-footer-btns"},M.createElement(F.Z,{onClose:me().noop,action:function(){Dn()},type:"primary"},_l("\u786E\u5B9A")))}))),Me!==6){ie.next=65;break}if(vn=Q.processId,en=Q.config,Cn=en.clickType,xn=en.confirmMsg,we=en.sureName,ve=en.cancelName,!(Cn===1&&vn)){ie.next=61;break}return u(Q),ie.abrupt("return");case 61:if(!(Cn===2&&vn)){ie.next=64;break}return Pe?r().alert(xn,"",[{text:ve,onPress:function(){},style:"default"},{text:we,onPress:function(){return u(Q)}}]):n.Z.confirm({title:M.createElement("div",{className:"mTop10"},xn),onOk:function(){u(Q)},okText:we,cancelText:ve}),ie.abrupt("return");case 64:return ie.abrupt("return");case 65:case"end":return ie.stop()}},ge,this)}));return function(Q){return fe.apply(this,arguments)}}(),E=function(){var fe=(0,d.Z)(L().mark(function ge(Q,Oe){var Me,Ee,Te,ye,Ce,Ge,Re,on,Ve,_n,Ne,ze,gn,$e,Fe,dn,Je,je,qe,tn,En,fn;return L().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:if(Me=Oe||pn,Ee=Me.config,Te=Ee===void 0?{}:Ee,ye=Me.value,Ce=Me.viewId,!X.L.test(Q)){Ue.next=24;break}if(!Te.recordLink){Ue.next=21;break}if(Ge=function(){var en=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};en.rowId?window.isMingDaoApp?window.location.href="/mobile/record/"+en.appId+"/"+en.worksheetId+"/"+en.viewId+"/"+en.rowId:cn(en):window.open(Q)},!(Q.includes("worksheetshare")||Q.includes("public/record"))){Ue.next=16;break}return Re=(Q.match(/\/worksheetshare\/(.*)/)||Q.match(/\/public\/record\/(.*)/))[1],y().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),Ue.next=10,B.Z.getShareInfoByShareId({shareId:Re});case 10:on=Ue.sent,Ve=on.data,y().hide(),Ge(Ve),Ue.next=20;break;case 16:_n=Q.split("?")[0],Ne=_n.match(/app\/(.*)\/(.*)\/(.*)\/row\/(.*)/)||[],ze=(0,j.Z)(Ne,5),gn=ze[0],$e=ze[1],Fe=ze[2],dn=ze[3],Je=ze[4],$e&&Fe&&dn&&Je?Ge({appId:$e,worksheetId:Fe,viewId:dn,rowId:Je}):Ge();case 20:return Ue.abrupt("return");case 21:if(!Te.otherLink){Ue.next=24;break}return window.isMingDaoApp?window.location.href=Q:window.open(Q),Ue.abrupt("return");case 24:if(Te.text===0&&(Pe?r().alert(M.createElement("div",{className:"WordBreak"},Q),"",[{text:_l("\u590D\u5236"),onPress:function(){A()(Q),alert(_l("\u590D\u5236\u6210\u529F"),1)}}]):n.Z.confirm({title:M.createElement("div",{className:"mTop10"},Q),onOk:function(){A()(Q),alert(_l("\u590D\u5236\u6210\u529F"),1)},okText:_l("\u590D\u5236")})),!(Te.text===1&&ye&&Ce)){Ue.next=36;break}return je=Te.isFilter,Pe&&y().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),Ue.next=30,S.Z.getAppSimpleInfo({workSheetId:ye});case 30:qe=Ue.sent,tn=qe.appId,Pe&&y().hide(),En=je&&Me.filterId?Me.filterId:"",fn=Me.searchId?Me.searchId:"",Pe?window.mobileNavigateTo("/mobile/searchRecord/"+tn+"/"+ye+"/"+Ce+"?keyWords="+encodeURIComponent(Q)+"&filterId="+En+"&searchId="+fn):(0,re.c)({appId:tn,worksheetId:ye,viewId:Ce,filterId:En,searchId:fn,keyWords:Q});case 36:Te.text===2&&u(Me,Q);case 37:case"end":return Ue.stop()}},ge,this)}));return function(Q,Oe){return fe.apply(this,arguments)}}(),V=p.button,te=V===void 0?{}:V,ne=p.editable,oe=p.layoutType,_e=p.addRecord,ue=p.info,De=(0,M.useState)({visible:!1,value:"",viewId:"",appId:"",name:"",writeControls:[],sheetSwitchPermit:[]}),de=(0,j.Z)(De,2),he=de[0],pe=de[1],We=he.visible,Ie=he.value,be=he.viewId,ln=he.appId,Ke=he.name,ke=he.writeControls,Ye=ke===void 0?[]:ke,nn=he.sheetSwitchPermit,an=nn===void 0?[]:nn,Pe=(0,D.Q9)(),rn=(0,M.useRef)(),sn=(0,M.useState)(),hn=(0,j.Z)(sn,2),pn=hn[0],mn=hn[1],On=(0,M.useState)({}),In=(0,j.Z)(On,2),Ze=In[0],cn=In[1],Mn=location.href.includes("public/page"),Pn=me().find(te.buttonList,{action:5}),Se=ue.projectId||me().get(ue,"apk.projectId");(0,M.useEffect)(function(){Pe&&(0,se.Z)()});var Be=Pe?k.Z:m.default;return M.createElement(w,null,M.createElement(T.Z,(0,Z.default)({displayMode:"display",layoutType:oe,onClick:W},te)),Pn&&Pe&&M.createElement(J.Z,{ref:rn,projectId:Se,onScanQRCodeResult:E}),We&&M.createElement(Be,{visible:!0,showFillNext:!0,needCache:!0,onAdd:function(ge){alert(_l("\u6DFB\u52A0\u6210\u529F")),_e(ge)},title:Pe?Ke:null,appId:ln,worksheetId:Ie,viewId:be,writeControls:Ye,sheetSwitchPermit:an,showDraftsEntry:!!Pe,openRecord:Pe?function(fe,ge){cn({appId:ln,worksheetId:Ie,viewId:ge,rowId:fe})}:void 0,hideNewRecord:function(){return pe({visible:!1})}}),Pe?M.createElement(ee.RecordInfoModal,{className:"full",visible:!!Ze.rowId,appId:Ze.appId,worksheetId:Ze.worksheetId,viewId:Ze.viewId,rowId:Ze.rowId,onClose:function(){cn({})}}):!!Ze.rowId&&M.createElement(q.Z,{visible:!0,projectId:Se,recordId:Ze.rowId,worksheetId:Ze.worksheetId,appId:Ze.appId,viewId:Ze.viewId,hideRecordInfo:function(){cn({})}}))}var O=(0,U.$j)(function(p){var u=p.sheet,W=p.appPkg,E=p.customPage;return{info:(0,Z.default)({},u.base,{projectId:W.projectId,itemId:E.pageId,apk:E.apk})}})(R)},90571:(xe,z,e)=>{e.d(z,{Z:()=>j});var h=e(42185),I=e(6100),s=e(88239),r=e(86735),a=e(67294),n=e(71893),f=e(93967),C=e.n(f),Y=e(13714),y=e(4288),P=e(96486),L=e.n(P),Z=(0,r.Z)([`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #fff;
  .explain {
    text-align: center;
    margin-bottom: 12px;
  }
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #fff;
  .explain {
    text-align: center;
    margin-bottom: 12px;
  }
`]),t=(0,r.Z)([`
  margin: 4px 0;
  padding: 0 8px;
  cursor: pointer;
  transition: border 0.25s;
  border: 1px solid transparent;
  box-sizing: border-box;
  &.noMargin {
    margin: 0;
  }
  &.isFullWidth {
    flex-grow: 1;
  }
  .Button {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
    }
    .injected-svg {
      margin-right: 5px;
    }
  }
  button.ming {
    padding: 0 14px;
    background-color: `,`;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    &:hover {
      background-color: `,`;
    }
    .icon {
      font-size: 20px;
      margin-right: 6px;
    }
  }
  &.edit {
    &:hover {
      border: 1px dashed #ddd;
    }
    &.active {
      border: 1px solid `,`;
    }
  }
  &.adjustText {
    button {
      background-color: #f8f8f8;
      color: `,`;
      box-shadow: none;
      &:hover {
        background-color: `,`;
      }
    }
    .iconWrap {
      color: `,`;
      background-color: #f8f8f8;
    }
  }
`],[`
  margin: 4px 0;
  padding: 0 8px;
  cursor: pointer;
  transition: border 0.25s;
  border: 1px solid transparent;
  box-sizing: border-box;
  &.noMargin {
    margin: 0;
  }
  &.isFullWidth {
    flex-grow: 1;
  }
  .Button {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
    }
    .injected-svg {
      margin-right: 5px;
    }
  }
  button.ming {
    padding: 0 14px;
    background-color: `,`;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    &:hover {
      background-color: `,`;
    }
    .icon {
      font-size: 20px;
      margin-right: 6px;
    }
  }
  &.edit {
    &:hover {
      border: 1px dashed #ddd;
    }
    &.active {
      border: 1px solid `,`;
    }
  }
  &.adjustText {
    button {
      background-color: #f8f8f8;
      color: `,`;
      box-shadow: none;
      &:hover {
        background-color: `,`;
      }
    }
    .iconWrap {
      color: `,`;
      background-color: #f8f8f8;
    }
  }
`]),N=n.ZP.div(Z),d=n.ZP.div(t,function(o){return o.color},function(o){return(0,Y.default)(o.color).darken(20).toString()},function(o){return(0,Y.default)(o.color).darken(20).toString()},function(o){return o.color},(0,Y.default)("#f8f8f8").darken(3).toString(),function(o){return o.color});function j(o){var c=o.buttonList,l=c===void 0?[]:c,M=o.layoutType,ae=M===void 0?"web":M,m=o.displayMode,k=m===void 0?"edit":m,T=o.explain,F=o.activeIndex,b=o.count,A=o.mobileCount,J=A===void 0?1:A,S=o.width,g=o.style,B=o.config,H=o.onClick,v=B||{},X=v.btnType,ee=v.direction,q=ee===void 0?1:ee,G=X===2?!0:S===1,U=ae==="mobile",D=L().chunk(l,ae==="web"?b:J),se=function(){return G||U?{width:100/(U?J:b)+"%"}:{}};return a.createElement(N,null,T&&a.createElement("div",{className:"explain"},T),a.createElement(y.j,null,D.map(function(re,ce){return a.createElement("div",{className:C()("chunkListWrap",{center:U?!1:!G}),key:ce},re.map(function(le,me){var Le=le.color,i=le.name,x=le.config,w=X===2?"custom_actions":null,K=L().get(x,"icon")||w,R=K?md.global.FileStoreConfig.pubHost+"/customIcon/"+K+".svg":L().get(x,"iconUrl");return a.createElement(d,{key:me,style:(0,s.default)({},se()),color:Le,className:C()(k,{active:F===ce,adjustText:g===3,noMargin:X===2,flexRow:q===2}),onClick:function(){typeof H=="function"&&H((0,s.default)({},le,{index:ce}))}},X===2?a.createElement(y.B,{className:C()("valignWrapper",q===1?"column":"row",{small:U&&(q===1&&[3,4].includes(J)||q===2&&[2].includes(J))}),color:Le,radius:g===1?q===1?"16px":"12px":"50%"},R&&a.createElement("div",{className:"iconWrap flexRow valignWrapper"},a.createElement(I.Z,{url:R,fill:g===3?Le:"#fff",size:q===2||U&&q===1&&[3,4].includes(J)?28:36})),a.createElement("div",{className:"nameWrap valignWrapper"},a.createElement("div",{className:"name"},i))):a.createElement(h.ZP,{fullWidth:G||U,radius:g===2,icon:R?null:le.icon},R&&a.createElement(I.Z,{url:R,fill:g===3?Le:"#fff",size:20}),a.createElement("span",{className:"overflow_ellipsis"},i)))}))})))}},4288:(xe,z,e)=>{e.d(z,{B:()=>f,j:()=>n});var h=e(86735),I=e(71893),s=e(13714),r=(0,h.Z)([`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;

  .chunkListWrap {
    display: flex;
    &.center {
      justify-content: center;
      align-items: center;
    }
  }
`],[`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;

  .chunkListWrap {
    display: flex;
    &.center {
      justify-content: center;
      align-items: center;
    }
  }
`]),a=(0,h.Z)([`
  justify-content: center;
  padding: 10px 0;
  &.column {
    flex-direction: column;
    &.small {
      .iconWrap {
        width: 56px !important;
        height: 56px !important;
      }
    }
    .iconWrap {
      width: 72px;
      height: 72px;
      margin-bottom: 10px;
    }
    .nameWrap {
      font-size: 15px;
    }
  }
  &.row {
    display: inline-flex;
    flex-direction: row;
    &.small {
      .iconWrap {
        width: 38px !important;
        height: 38px !important;
        svg {
          transform: scale(0.85);
        }
      }
    }
    .iconWrap {
      width: 48px;
      height: 48px;
      margin-right: 10px;
    }
    .nameWrap {
      text-align: left;
      flex: 1;
      width: 90px;
    }
  }
  .name {
    display: -webkit-box;
    vertical-align: middle;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }
  .iconWrap {
    color: #fff;
    font-size: 28px;
    border-radius: `,`;
    justify-content: center;
    background-color: `,`;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0.2s;
    &:hover {
      background-color: `,`;
    }
    div {
      display: flex;
    }
  }
`],[`
  justify-content: center;
  padding: 10px 0;
  &.column {
    flex-direction: column;
    &.small {
      .iconWrap {
        width: 56px !important;
        height: 56px !important;
      }
    }
    .iconWrap {
      width: 72px;
      height: 72px;
      margin-bottom: 10px;
    }
    .nameWrap {
      font-size: 15px;
    }
  }
  &.row {
    display: inline-flex;
    flex-direction: row;
    &.small {
      .iconWrap {
        width: 38px !important;
        height: 38px !important;
        svg {
          transform: scale(0.85);
        }
      }
    }
    .iconWrap {
      width: 48px;
      height: 48px;
      margin-right: 10px;
    }
    .nameWrap {
      text-align: left;
      flex: 1;
      width: 90px;
    }
  }
  .name {
    display: -webkit-box;
    vertical-align: middle;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }
  .iconWrap {
    color: #fff;
    font-size: 28px;
    border-radius: `,`;
    justify-content: center;
    background-color: `,`;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0.2s;
    &:hover {
      background-color: `,`;
    }
    div {
      display: flex;
    }
  }
`]),n=I.ZP.div(r),f=I.ZP.div(a,function(C){return C.radius},function(C){return C.color},function(C){return(0,s.default)(C.color).darken(20).toString()})},71352:(xe,z,e)=>{e.d(z,{Z:()=>H});var h=e(98658),I=e(68625),s=e(54208),r=e(33867),a=e(94942),n=e.n(a),f=e(36803),C=e(88239),Y=e(12424),y=e(29073),P=e.n(y),L=e(60713),Z=e(86735),t=e(67294),N=e(91088),d=e(93967),j=e.n(d),o=e(71893),c=e(95283),l=e(70518),M=e(82011),ae=e(85879),m=e(70039),k=e(15577),T=e(24607),F=e(24194),b=e(96486),A=e.n(b),J=(0,Z.Z)([`
  &.slick-slider .slick-dots li {
    width: 10px;
    height: 10px;
    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      background-color: transparent;
      opacity: 1;
      &:hover {
        opacity: 1;
        background-color: #fff;
      }
    }
    &.slick-active {
      width: 10px;
      button {
        background-color: #fff !important;
      }
    }
  }
  .slick-dots {
    margin: 0 !important;
  }
  .slick-dots li button {
    box-shadow: 0 2px 6px 0px rgb(0 0 0 / 15%);
  }
  .image {
    width: 100%;
    height: 100%;
    &.fill {
      background-size: cover;
    }
    &.full {
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
  }
  &:hover {
    .mask {
      display: block;
    }
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    display: none;
    pointer-events: none;
  }
  .explain {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 80%);
    .content {
      overflow: auto;
      padding: 0 30px;
      margin: 80px 0 35px;
      max-height: calc(100% - 30px);
    }
    .title,
    .subTitle {
      cursor: initial;
      max-width: 720px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
  .hideMore {
    cursor: pointer !important;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  &.slick-slider:hover {
    .slick-prev,
    .slick-next {
      display: flex !important;
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-next {
    width: 24px;
    height: 48px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-top: -24px;
    background-color: rgb(51 51 51 / 40%);
    display: none !important;
    &:hover {
      background-color: rgb(51 51 51 / 60%);
      .icon {
        opacity: 0.7;
      }
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-prev:hover {
    left: 0;
    z-index: 2;
    color: white;
    border-radius: 0px 6px 6px 0px;
  }

  &.slick-slider .slick-next,
  &.slick-slider .slick-next:hover {
    right: 0;
    z-index: 2;
    color: white;
    border-radius: 6px 0px 0px 6px;
  }
`],[`
  &.slick-slider .slick-dots li {
    width: 10px;
    height: 10px;
    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      background-color: transparent;
      opacity: 1;
      &:hover {
        opacity: 1;
        background-color: #fff;
      }
    }
    &.slick-active {
      width: 10px;
      button {
        background-color: #fff !important;
      }
    }
  }
  .slick-dots {
    margin: 0 !important;
  }
  .slick-dots li button {
    box-shadow: 0 2px 6px 0px rgb(0 0 0 / 15%);
  }
  .image {
    width: 100%;
    height: 100%;
    &.fill {
      background-size: cover;
    }
    &.full {
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
  }
  &:hover {
    .mask {
      display: block;
    }
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    display: none;
    pointer-events: none;
  }
  .explain {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 80%);
    .content {
      overflow: auto;
      padding: 0 30px;
      margin: 80px 0 35px;
      max-height: calc(100% - 30px);
    }
    .title,
    .subTitle {
      cursor: initial;
      max-width: 720px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
  .hideMore {
    cursor: pointer !important;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  &.slick-slider:hover {
    .slick-prev,
    .slick-next {
      display: flex !important;
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-next {
    width: 24px;
    height: 48px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-top: -24px;
    background-color: rgb(51 51 51 / 40%);
    display: none !important;
    &:hover {
      background-color: rgb(51 51 51 / 60%);
      .icon {
        opacity: 0.7;
      }
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-prev:hover {
    left: 0;
    z-index: 2;
    color: white;
    border-radius: 0px 6px 6px 0px;
  }

  &.slick-slider .slick-next,
  &.slick-slider .slick-next:hover {
    right: 0;
    z-index: 2;
    color: white;
    border-radius: 6px 0px 0px 6px;
  }
`]),S=(0,o.ZP)(L.Z)(J),g={"7%":1,"15%":0,"25%":3,"30%":2};function B(v){var X=v.title,ee=v.subTitle,q=v.onClick,G=(0,t.useState)(!1),U=(0,Y.Z)(G,2),D=U[0],se=U[1];return t.createElement("div",{className:"explain White",onClick:function(ce){var le=ce.target;(le.classList.contains("explain")||le.classList.contains("content"))&&q()}},t.createElement("div",{className:"content"},t.createElement("div",{className:"Font20 mBottom5 ellipsis title bold"},X),t.createElement("div",{className:j()("Font14 pointer subTitle",{hideMore:!D}),onClick:function(){return se(!D)}},ee)))}function H(v){var X=function(){var Se=(0,f.Z)(n().mark(function Be(fe){var ge,Q,Oe,Me,Ee,Te,ye,Ce;return n().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:if(ge=fe.rowid,Q=q.action,Oe=q.openMode,!D){Re.next=4;break}return Re.abrupt("return");case 4:if(!(Q===1&&!A().get(window,"shareState.shareId"))){Re.next=16;break}return Re.next=7,N.Z.getAppSimpleInfo({workSheetId:Ke});case 7:if(Me=Re.sent,Ee=Me.appId,(0,k.Ye)("worksheetRecord",Ke,{rowId:ge}),!window.isMingDaoApp){Re.next=13;break}return location.href="/app/"+Ee+"/"+Ke+"/"+ke+"/row/"+ge,Re.abrupt("return");case 13:Oe===1&&oe({appId:Ee,rowId:ge}),Oe===2&&(location.href="/app/"+Ee+"/"+Ke+"/"+ke+"/row/"+ge),Oe===3&&window.open("/app/"+Ee+"/"+Ke+"/"+ke+"/row/"+ge);case 16:Q===2&&(Te=fe[rn],ye=(0,F.m)(Te)[0],ye&&Oe===1&&window.open(ye),ye&&Oe===2&&(location.href=ye)),Q===3&&(sn.type===14&&(0,c.Z)({index:De,attachments:i,callFrom:"player",showThumbnail:!0,hideFunctions:["editFileName","saveToKnowlege","share"]}),sn.type===47&&(Ce=be.current.querySelector(".slick-list .slick-active img"),(0,l.x)(Ce.src,{disableDownload:!0,ext:"png",name:"code.png",theme:"light"})));case 18:case"end":return Re.stop()}},Be,this)}));return function(fe){return Se.apply(this,arguments)}}(),ee=v.componentConfig,q=ee===void 0?{}:ee,G=v.config,U=G===void 0?{}:G,D=v.editable,se=(0,t.useState)(!0),re=(0,Y.Z)(se,2),ce=re[0],le=re[1],me=(0,t.useState)([]),Le=(0,Y.Z)(me,2),i=Le[0],x=Le[1],w=(0,t.useState)([]),K=(0,Y.Z)(w,2),R=K[0],O=K[1],p=(0,t.useState)([]),u=(0,Y.Z)(p,2),W=u[0],E=u[1],V=(0,t.useState)({}),te=(0,Y.Z)(V,2),ne=te[0],oe=te[1],_e=(0,t.useState)(0),ue=(0,Y.Z)(_e,2),De=ue[0],de=ue[1],he=(0,t.useState)(0),pe=(0,Y.Z)(he,2),We=pe[0],Ie=pe[1],be=(0,t.useRef)(),ln=(0,k.Q9)(),Ke=q.worksheetId,ke=q.viewId,Ye=q.image,nn=q.count,an=q.title,Pe=q.subTitle,rn=q.url,sn=A().find(W,{controlId:Ye})||{};(0,t.useEffect)(function(){Ke&&ke&&Ye?N.Z.getAttachementImages({workSheetId:Ke,viewId:ke,attachementControlId:Ye,imageLimitCount:nn,filedIds:[an,Pe,rn].filter(function(Se){return Se}),displayMode:U.displayMode}).then(function(Se){var Be=Se.appId,fe=Se.code,ge=Se.imageData,Q=ge===void 0?[]:ge,Oe=Se.rowData,Me=Oe===void 0?[]:Oe,Ee=Se.controls,Te=Ee===void 0?[]:Ee,ye=A().find(Te,{controlId:Ye})||{};ye.type===14&&x(Q.map(function(Ce){return(0,C.default)({},JSON.parse(Ce.image),{rowId:Ce.rowId})})),ye.type===47&&x(Q.map(function(Ce){return{image:(0,T.hC)({data:[(0,C.default)({},ye,{value:Ce.image})],control:{enumDefault:ye.enumDefault,enumDefault2:ye.enumDefault2,dataSource:Ye},codeInfo:{recordId:Ce.rowId,appId:Be,worksheetId:Ke,viewId:ke}}),rowId:Ce.rowId}}).filter(function(Ce){return Ce.image})),O(Me.map(function(Ce){return JSON.parse(Ce)})),E(Te),Ie(fe),le(!1)}):(x([]),O([]),le(!1))},[Ke,ke,Ye,an,Pe,rn,U.displayMode]);var hn=A().get(be.current,"clientWidth"),pn=A().get(be.current,"clientHeight"),mn={position:"relative",height:pn,backgroundColor:sn.type===14?U.fillColor:"#fff"},On=function(){if(We===0)return t.createElement("div",{className:"flexColumn valignWrapper w100 h100",style:{justifyContent:"center"}},t.createElement(r.Z,{icon:"picture",className:"Font64 Gray_c mBottom10"}),t.createElement("div",{className:"Gray_9e Font13"},_l("\u6682\u65E0\u8F6E\u64AD\u56FE\u7247")));if(We===1)return t.createElement("div",{className:"flexColumn valignWrapper w100 h100",style:{justifyContent:"center"}},t.createElement(r.Z,{icon:"workflow_failure",className:"Font64 Gray_c mBottom10"}),t.createElement("div",{className:"Gray_9e Font20 mBottom2"},_l("\u65E0\u6CD5\u5F62\u6210\u8F6E\u64AD\u56FE")),t.createElement("div",{className:"Gray_9e Font16"},_l("\u6784\u6210\u8981\u7D20\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664")))},In=function(){return t.createElement("div",{className:"flexRow valignWrapper w100 h100"},t.createElement(s.Z,null))},Ze=function(Be,fe){return t.createElement("div",{onClick:function(){return X(Be)},className:j()("image pointer",{fill:U.fill===1,full:U.fill===2}),style:{backgroundImage:"url("+fe.viewUrl+"&|imageView2/0/q/100)"}})},cn=function(Be,fe){var ge=sn.advancedSetting;ge=ge===void 0?{}:ge;var Q=ge.width,Oe=ge.faultrate,Me=sn.enumDefault,Ee=parseFloat(Q);return t.createElement("div",{onClick:function(){return X(Be)},className:"image pointer flexRow alignItemsCenter justifyContentCenter"},Me===1?t.createElement(I.Z,{value:fe.image,renderer:"img",renderWidth:hn}):t.createElement(h.Z,{gap:6,content:fe.image,width:pn,height:pn,correctLevel:g[Oe]}))},Mn=function(Be){var fe=A().find(R,{rowid:Be.rowId})||{},ge=A().find(W,{controlId:an})||{},Q=A().find(W,{controlId:Pe})||{};return t.createElement("div",{key:Be.fileID},t.createElement("div",{style:mn},sn.type===14&&Ze(fe,Be),sn.type===47&&cn(fe,Be),t.createElement("div",{className:"mask"}),(fe[an]||fe[Pe])&&t.createElement(B,{title:(0,ae.G)({value:fe[an],advancedSetting:ge.advancedSetting}),subTitle:(0,ae.G)({value:fe[Pe],advancedSetting:Q.advancedSetting}),onClick:function(){return X(fe)}})))},Pn=function(){return t.createElement(t.Fragment,null,t.createElement(S,{autoplay:ne.rowId?!1:U.autoplaySpeed!==!1,arrows:!0,prevArrow:t.createElement("div",null,t.createElement(r.Z,{className:"Font30",icon:"navigate_before"})),nextArrow:t.createElement("div",null,t.createElement(r.Z,{className:"Font30",icon:"navigate_next"})),effect:U.effect,autoplaySpeed:U.autoplaySpeed*1e3,afterChange:function(fe){de(fe)}},i.map(function(Be){return Mn(Be)})),ne.rowId&&(ln?t.createElement(m.RecordInfoModal,{className:"full",visible:!!ne.rowId,appId:ne.appId,worksheetId:Ke,viewId:ke,rowId:ne.rowId,onClose:function(){oe({})}}):t.createElement(M.Z,{from:3,visible:!!ne.rowId,appId:ne.appId,worksheetId:Ke,viewId:ke,recordId:ne.rowId,hideRecordInfo:function(){oe({})}})))};return t.createElement("div",{className:"w100 h100",ref:be},ce?In():i.length?Pn():On())}},24194:(xe,z,e)=>{e.d(z,{m:()=>I});var h=e(66344);function I(s){for(var r=s.replace(/\n/," ").split(" "),a=[],n=0;n<r.length;n++){var f=r[n];h.Z.isURL(f)&&a.push(f)}return a}},37495:(xe,z,e)=>{e.d(z,{G:()=>M});var h=e(86735),I=e(67294),s=e(71893),r=e(93967),a=e.n(r),n=e(90099),f=e(54051),C=e(15577),Y=e(36021),y=e(91088),P=e(96486),L=e.n(P),Z=(0,h.Z)([`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #eaeaea;
  padding: 24px;
  min-width: 0;

  .SingleViewWrap {
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #fff;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #eaeaea;
  padding: 24px;
  min-width: 0;

  .SingleViewWrap {
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #fff;
  }
`]),t=(0,h.Z)([`
  width: 100%;
  height: 100%;
  justify-content: center;
`],[`
  width: 100%;
  height: 100%;
  justify-content: center;
`]),N=(0,h.Z)([`
  width: 100%;
  height: 100%;
  .SingleViewHeader {
    font-size: 17px;
    height: 50px;
    padding: 10px 16px;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    &.mobile {
      font-size: 14px;
      height: 44px;
      background-color: #F8F8F8;
    }
  }
  .SingleViewName +div {
    display: none;
  }
  .SingleViewBody {
    border: none !important;
  }
  &.hideAddRecord .addRecord,
  &.hideAddRecord .addBoardRecord,
  &.hideAddRecord .addRecordItemWrapper,
  &.hideSearchRecord .icon-search,
  &.hideSearchRecord .searchWrapper {
    display: none !important;
  }
  &.disableSingleView {
    .SingleViewHeader,
    .SingleViewBody .searchWrapper,
    .worksheetSheet .quickFilterWrap,
    .worksheetSheet .groupFilterWrap,
    .worksheetSheet .mdTableContent,
    .gunterView .gunterRecord,
    .gunterView .recordBlock,
    .gunterView .milepostRecordBlock,
    .structureViewWrap .nodeWrap,
    .structureViewWrap .hierarchyViewLeftBoundary,
    .worksheetBoardViewWrap .boardDataRecordItemWrap,
    .worksheetBoardViewWrap .addBoardRecord,
    .galleryViewContentWrap .galleryItem,
    .calendarCon .scheduleBtn,
    .calendarCon .worksheetFullCalendar,
    .SingleViewWrap .addRecord {
      pointer-events: none;
    }
  }
  .mobileBoxCalendar {
    .fc-header-toolbar .fc-toolbar-chunk:nth-child(2) > div .fc-button-primary:first-child {
      padding: 0 !important;
    }
  }
`],[`
  width: 100%;
  height: 100%;
  .SingleViewHeader {
    font-size: 17px;
    height: 50px;
    padding: 10px 16px;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    &.mobile {
      font-size: 14px;
      height: 44px;
      background-color: #F8F8F8;
    }
  }
  .SingleViewName +div {
    display: none;
  }
  .SingleViewBody {
    border: none !important;
  }
  &.hideAddRecord .addRecord,
  &.hideAddRecord .addBoardRecord,
  &.hideAddRecord .addRecordItemWrapper,
  &.hideSearchRecord .icon-search,
  &.hideSearchRecord .searchWrapper {
    display: none !important;
  }
  &.disableSingleView {
    .SingleViewHeader,
    .SingleViewBody .searchWrapper,
    .worksheetSheet .quickFilterWrap,
    .worksheetSheet .groupFilterWrap,
    .worksheetSheet .mdTableContent,
    .gunterView .gunterRecord,
    .gunterView .recordBlock,
    .gunterView .milepostRecordBlock,
    .structureViewWrap .nodeWrap,
    .structureViewWrap .hierarchyViewLeftBoundary,
    .worksheetBoardViewWrap .boardDataRecordItemWrap,
    .worksheetBoardViewWrap .addBoardRecord,
    .galleryViewContentWrap .galleryItem,
    .calendarCon .scheduleBtn,
    .calendarCon .worksheetFullCalendar,
    .SingleViewWrap .addRecord {
      pointer-events: none;
    }
  }
  .mobileBoxCalendar {
    .fc-header-toolbar .fc-toolbar-chunk:nth-child(2) > div .fc-button-primary:first-child {
      padding: 0 !important;
    }
  }
`]),d=s.ZP.div(Z),j=s.ZP.div(t),o=s.ZP.div(N),c=(0,C.Q9)(),l=function(k,T){y.Z.getAppSimpleInfo({workSheetId:k}).then(function(F){var b=F.appId,A=F.appSectionId;window.isMingDaoApp?window.location.href="/mobile/recordList/"+b+"/"+A+"/"+k+"/"+T:c?window.mobileNavigateTo("/mobile/recordList/"+b+"/"+A+"/"+k+"/"+T):(0,Y.T8)("/app/"+b+"/"+A+"/"+k+"/"+T)})};function M(m){var k=m.appId,T=m.setting,F=m.className,b=m.layoutType,A=m.filtersGroup,J=A===void 0?[]:A,S=T.apkId,g=T.value,B=T.viewId,H=T.config,v=H===void 0?{}:H,X=(0,I.useRef)(),ee=c||b==="mobile";if(L().isEmpty(B))return I.createElement(j,{className:"SingleViewWrap valignWrapper emptyView"},I.createElement("div",{className:"Font15 Gray_9e"},_l("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u89C6\u56FE")));var q=ee?f.Z:n.Z;return I.createElement(o,{className:a()(F,{hideAddRecord:!v.isAddRecord,hideSearchRecord:!v.searchRecord})},I.createElement(q,{showHeader:!0,ref:X,appId:S||k,worksheetId:g,viewId:B,maxCount:v.maxCount,filtersGroup:J,headerLeft:I.createElement("div",{className:"SingleViewName flex ellipsis"},I.createElement("span",{className:a()("Font15 bold Gray",{pointer:v.openView}),onClick:function(){v.openView&&l(g,B)}},v.name))}))}function ae(m){var k=m.loading,T=m.ids,F=T===void 0?{}:T,b=m.setting,A=F.appId;return React.createElement(d,null,k?React.createElement(j,{className:"SingleViewWrap valignWrapper emptyView"},React.createElement(_LoadDiv,null)):React.createElement(M,{className:"disableSingleView",appId:A,setting:b}))}},66637:(xe,z,e)=>{e.d(z,{L:()=>c,Z:()=>T});var h=e(88239),I=e(70264),s=e(33867),r=e(12424),a=e(86735),n=e(67294),f=e(50533),C=e(71893),Y=e(18484),y=e(15577),P=e(93967),L=e.n(P),Z=e(96486),t=e.n(Z),N=(0,a.Z)([`
  height: 100%;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  .picBg {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  video {
    width: 100%;
    max-height: 100%;
  }
`],[`
  height: 100%;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  .picBg {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  video {
    width: 100%;
    max-height: 100%;
  }
`]),d=(0,a.Z)([`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .iconWrap {
    text-align: right;
    padding: 8px;
    background-color: #fff;
    .icon-task-later {
      transform: rotate(0deg);
      transform-origin: center;
      &.turn {
        transition: transform 1s;
        transform: rotate(360deg);
      }
    }
    .actionIcon:hover {
      color: #2196f3 !important;
    }
  }
  .displayNone {
    display: none;
  }
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .iconWrap {
    text-align: right;
    padding: 8px;
    background-color: #fff;
    .icon-task-later {
      transform: rotate(0deg);
      transform-origin: center;
      &.turn {
        transition: transform 1s;
        transform: rotate(360deg);
      }
    }
    .actionIcon:hover {
      color: #2196f3 !important;
    }
  }
  .displayNone {
    display: none;
  }
`]),j=C.ZP.div(N),o=C.ZP.div(d),c=/^https?:\/\/.+$/,l=/^https?:\/\/.*?\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i,M=/^https?:\/\/.*?\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif|tiff)$/i,ae=/<iframe.*>\s*<\/iframe>/;function m(F){var b=F.value,A=F.param,J=F.info,S=(0,n.useRef)(null);if((0,n.useEffect)(function(){var H=S.current;if(H&&t().includes(b,"worksheetshare")){var v=H.contentDocument;if(!v)return;var X=v.querySelector(".WorksheetShareHeaderBox"),ee=v.querySelector(".shareConBox");X&&X.parentElement.removeChild(X),ee&&(ee.style.marginTop=0)}},[S.current]),ae.test(b))return n.createElement("div",{className:"iframeWrap"},n.createElement("div",{dangerouslySetInnerHTML:{__html:b}}));if(!c.test(b))return _l("\u5D4C\u5165\u94FE\u63A5\u65E0\u6CD5\u89E3\u6790");function g(H){var v=(0,Y.do)(H,A,J);return/^https?:\/\//.test(v)?v:"https://"+v}var B=function(){if(M.test(b))return n.createElement("div",{className:"picBg",style:{backgroundImage:"url("+b+")"}});if(l.test(b))return n.createElement("video",{src:b,controls:!0});if(c.test(b))return n.createElement("iframe",{ref:S,src:g(b)})};return n.createElement(j,null,(0,n.useMemo)(B,[g(b)]))}function k(F){var b=F.value,A=F.reload,J=F.newTab,S=F.param,g=S===void 0?[]:S,B=(0,n.useState)(0),H=(0,r.Z)(B,2),v=H[0],X=H[1],ee={key:"now",value:{type:"static",data:v}},q={key:"source",value:{type:"static",data:"embedUrl"}},G=function(){X(Date.now()),setTimeout(function(){X(0)},1e3)},U=function(){window.open((0,Y.Vz)(b,g))};return n.createElement(o,null,n.createElement("div",{className:L()("iconWrap",{displayNone:!A&&!J})},A?(0,y.Q9)()?n.createElement(s.Z,{icon:"task-later",className:L()("Gray_bd InlineBlock Font20 Hand actionIcon",{turn:v}),onClick:G}):n.createElement(I.Z,{text:n.createElement("span",null,_l("\u5237\u65B0")),popupPlacement:"bottom"},n.createElement(s.Z,{icon:"task-later",className:L()("Gray_bd InlineBlock Font20 Hand actionIcon",{turn:v}),onClick:G})):"",J?(0,y.Q9)()?n.createElement(s.Z,{icon:"launch",className:"Gray_bd mLeft10 Font20 Hand actionIcon",onClick:U}):n.createElement(I.Z,{text:n.createElement("span",null,_l("\u6253\u5F00")),popupPlacement:"bottom"},n.createElement(s.Z,{icon:"launch",className:"Gray_bd mLeft10 Font20 Hand actionIcon",onClick:U})):""),n.createElement("div",{className:"flex overflowHidden"},n.createElement(m,(0,h.default)({},t().pick(F,["value","info"]),{param:g.concat(ee).concat(q)}))))}const T=(0,f.$j)(function(F){var b=F.sheet,A=F.appPkg,J=F.customPage;return{info:(0,h.default)({},b.base,{projectId:A.projectId,itemId:J.pageId})}})(k)},44263:(xe,z,e)=>{e.d(z,{ju:()=>s});var h=30,I=40,s=[{title:_l("\u5F53\u524D\u7528\u6237\u4FE1\u606F"),type:"user",fields:[{text:_l("\u7528\u6237ID"),value:"userId"},{text:_l("\u624B\u673A\u53F7"),value:"phone"},{text:_l("\u90AE\u7BB1"),value:"email"}]},{title:_l("\u7CFB\u7EDF\u4FE1\u606F"),type:"sys",fields:[{text:_l("\u7EC4\u7EC7\u95E8\u724C\u53F7"),value:"projectId"},{text:_l("\u5E94\u7528ID"),value:"appId"},{text:_l("\u5206\u7EC4ID"),value:"groupId"},{text:_l("\u5E94\u7528\u9879ID"),value:"itemId"},{text:_l("UserAgent"),value:"ua"},{text:_l("\u65F6\u95F4\u6233"),value:"timestamp"}]}]},82134:(xe,z,e)=>{e.d(z,{updateEditPageVisible:()=>Y,updateFiltersGroup:()=>d,updatePageInfo:()=>s});var h=e(79778),I=function(l){return function(M){return{type:l,payload:M}}},s=I(h.sl),r=I(h.hr),a=I(h.C$),n=I(h.jL),f=I(h._P),C=I(h.hc),Y=I(h.S8),y=I(h.Rm),P=I(h.CM),L=I(h.Yz),Z=I(h.pb),t=I(h.$z),N=I(h.nj),d=I(h.S0),j=I(h.Rl),o=I(h.qb)},42631:(xe,z,e)=>{e.d(z,{Z:()=>j});var h=e(33867),I=e(6100),s=e(88106),r=e(86735),a=e(67294),n=e(71893),f=e(93967),C=e.n(f),Y=e(49863),y=e(30752),P=(0,r.Z)([`
  margin: 24px;
  display: flex;
  .msgStatus {
    width: fit-content;
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 10px;
    margin-bottom: 8px;
    background: rgba(103, 173, 91, 0.2);
    .chatPoint {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: rgba(103, 173, 91, 1);
      margin-right: 6px;
      animation: colorChange infinite 1s linear;
      @keyframes colorChange {
        from {
          opacity: 0.5;
        }

        to {
          opacity: 1;
        }
      }
    }
  }
  .messageBox {
    padding: 8px 12px;
    border-radius: 10px;
    max-width: 100%;
    display: inline-block;
    min-height: 36px;
    text-align: left;
    p {
      margin-bottom: 0;
    }
    .markdown-body {
      padding: 0 !important;
      font-size: 14px;
      h1 {
        font-size: 16px !important;
        padding-bottom: 0 !important;
        border: none !important;
        line-height: normal !important;
        font-weight: normal !important;
      }
      .token.operator,
      .token.entity,
      .token.url,
      .language-css .token.string,
      .style .token.string {
        background: transparent;
      }
      span {
        white-space: pre-wrap !important;
        word-break: break-all !important;
      }
      > pre {
        border-radius: 8px !important;
      }
      img {
        width: 100%;
      }
    }
  }
  .mLeft44 {
    margin-left: 44px;
  }
`],[`
  margin: 24px;
  display: flex;
  .msgStatus {
    width: fit-content;
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 10px;
    margin-bottom: 8px;
    background: rgba(103, 173, 91, 0.2);
    .chatPoint {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: rgba(103, 173, 91, 1);
      margin-right: 6px;
      animation: colorChange infinite 1s linear;
      @keyframes colorChange {
        from {
          opacity: 0.5;
        }

        to {
          opacity: 1;
        }
      }
    }
  }
  .messageBox {
    padding: 8px 12px;
    border-radius: 10px;
    max-width: 100%;
    display: inline-block;
    min-height: 36px;
    text-align: left;
    p {
      margin-bottom: 0;
    }
    .markdown-body {
      padding: 0 !important;
      font-size: 14px;
      h1 {
        font-size: 16px !important;
        padding-bottom: 0 !important;
        border: none !important;
        line-height: normal !important;
        font-weight: normal !important;
      }
      .token.operator,
      .token.entity,
      .token.url,
      .language-css .token.string,
      .style .token.string {
        background: transparent;
      }
      span {
        white-space: pre-wrap !important;
        word-break: break-all !important;
      }
      > pre {
        border-radius: 8px !important;
      }
      img {
        width: 100%;
      }
    }
  }
  .mLeft44 {
    margin-left: 44px;
  }
`]),L=(0,r.Z)([`
  min-width: 36px;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &.hasBorder {
    border: 1px solid #e0e0e0;
  }
`],[`
  min-width: 36px;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &.hasBorder {
    border: 1px solid #e0e0e0;
  }
`]),Z=(0,r.Z)([`
  display: inline-block;
  width: 10px;
  height: 16px;
  background: #333;
  animation: fadeIn 0.6s ease-in-out infinite;
  margin-top: 3px;
  vertical-align: top;
`],[`
  display: inline-block;
  width: 10px;
  height: 16px;
  background: #333;
  animation: fadeIn 0.6s ease-in-out infinite;
  margin-top: 3px;
  vertical-align: top;
`]),t=n.ZP.div(P),N=n.ZP.div(L),d=n.ZP.span(Z);function j(o){var c,l=o.messageList,M=l===void 0?[]:l,ae=o.config,m=ae===void 0?{}:ae,k=o.isDialogueCreate,T=o.controller,F=o.chatStatus,b=m.iconUrl,A=m.iconColor,J=(c={},(0,s.default)(c,y.M.create,_l("\u521B\u5EFA\u6D88\u606F")),(0,s.default)(c,y.M.running,_l("\u8FD0\u884C\u4E2D")),(0,s.default)(c,y.M.search,_l("\u68C0\u7D22\u77E5\u8BC6\u5E93")),(0,s.default)(c,y.M.reply,_l("AI\u5BF9\u8BDD")),c);return M.map(function(S,g){return a.createElement(t,{"data-id":S.msgId,key:S.msgId||g,className:C()("messageItem",{TxtRight:S.role==="user"})},S.role==="assistant"&&a.createElement(N,{className:C()({hasBorder:!b}),style:{backgroundColor:b?A||"#2196f3":""}},b?a.createElement(I.Z,{url:b,fill:"#fff",size:24}):a.createElement(h.Z,{icon:"ai1",className:"Gray_bd Font20"})),a.createElement("div",{className:"flex"},!k&&S.role==="assistant"&&F&&g===M.length-1&&a.createElement("div",{className:"msgStatus"},a.createElement("div",{className:"chatPoint"}),a.createElement("div",null,J[F])),a.createElement("div",{className:C()("messageBox "+(S.role==="user"?"ThemeBGColor3 White Font14 mLeft44":"w100 "+(k?"WhiteBG createChatElement":"ThemeBG assistantChatElement")))},S.role==="user"?S.content:a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:(0,Y.S5)(S.content)}}),!S.content&&g===M.length-1&&T&&a.createElement(d,null)))))})}},30752:(xe,z,e)=>{e.d(z,{M:()=>X,Z:()=>q});var h=e(62745),I=e(25273),s=e(54208),r=e(6100),a=e(33867),n=e(94942),f=e.n(n),C=e(63239),Y=e.n(C),y=e(36803),P=e(88239),L=e(12424),Z=e(86735),t=e(67294),N=e(71893),d=e(93967),j=e.n(d),o=e(42631),c=e(88271),l=e(35433),M=e.n(l),ae=e(39980),m=e.n(ae),k=e(68679),T=e(70714),F=e(49863),b=e(49611),A=e.n(b),J=(0,Z.Z)([`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 848px;
  margin: 0 auto;

  .closeIconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    background: #f5f5f5;
    border-radius: 50%;
  }
  &.fullContent {
    max-width: 800px;
    .footerWrapper {
      padding: 12px 0 24px;
    }
    .messageItem {
      margin: 24px 0;
    }
  }
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 848px;
  margin: 0 auto;

  .closeIconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    background: #f5f5f5;
    border-radius: 50%;
  }
  &.fullContent {
    max-width: 800px;
    .footerWrapper {
      padding: 12px 0 24px;
    }
    .messageItem {
      margin: 24px 0;
    }
  }
`]),S=(0,Z.Z)([`
  padding: 0 24px;
  &.fullContent {
    padding: 0;
  }
  .avatarWrapper {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    &.hasBorder {
      border: 1px solid #e0e0e0;
    }
    &.smallSize {
      min-width: 36px;
      width: 36px;
      height: 36px;
    }
  }
  .nameText {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 14px;
  }
  .promptMsg {
    width: fit-content;
    max-width: 100%;
    min-height: 36px;
    padding: 8px 12px;
    border-radius: 10px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
  }
  .questionList {
    width: 100%;
    padding-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .questionItem {
      width: calc(50% - 4px);
      min-height: 36px;
      line-height: 34px;
      padding: 0 12px;
      border-radius: 10px;
      border: 1px solid #e0e0e0;
      &.canSend {
        cursor: pointer;
        &:hover {
          border-color: #2196f3;
        }
      }
    }
    &.singleQuestionRow {
      .questionItem {
        width: 100%;
      }
    }
  }
`],[`
  padding: 0 24px;
  &.fullContent {
    padding: 0;
  }
  .avatarWrapper {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    &.hasBorder {
      border: 1px solid #e0e0e0;
    }
    &.smallSize {
      min-width: 36px;
      width: 36px;
      height: 36px;
    }
  }
  .nameText {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 14px;
  }
  .promptMsg {
    width: fit-content;
    max-width: 100%;
    min-height: 36px;
    padding: 8px 12px;
    border-radius: 10px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
  }
  .questionList {
    width: 100%;
    padding-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .questionItem {
      width: calc(50% - 4px);
      min-height: 36px;
      line-height: 34px;
      padding: 0 12px;
      border-radius: 10px;
      border: 1px solid #e0e0e0;
      &.canSend {
        cursor: pointer;
        &:hover {
          border-color: #2196f3;
        }
      }
    }
    &.singleQuestionRow {
      .questionItem {
        width: 100%;
      }
    }
  }
`]),g=(0,Z.Z)([`
  padding: 12px 24px 24px 24px;
  width: 100%;
  .footStatusWrapper {
    display: flex;
    align-items: center;
    height: 36px;
    width: fit-content;
    padding: 0 12px;
    border: 1px solid #eaeaea;
    border-radius: 36px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 16px;
    color: #9e9e9e;

    &.stopBtn {
      height: 32px;
      padding: 0 16px;
      border-radius: 18px;
      &.canStop {
        cursor: pointer;
        &:hover {
          border-color: #2196f3;
          color: #2196f3;
        }
      }
    }
  }
  .footer {
    display: flex;
    position: relative;
    textarea {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
      border-radius: 24px !important;
      border-width: 0 48px 0 8px !important;
      border-color: transparent !important;
      line-height: 1.15;
    }
    .clearBtn {
      width: 48px;
      height: 48px;
      margin-right: 8px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2196f3;
      font-size: 26px;
      color: #fff;
    }
    .sendBtn {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      .icon-airplane {
        color: #ddd;
      }
      &.enabled {
        cursor: pointer;
        &:hover {
          background: #f5f5f5;
          .icon-airplane {
            color: #2196f3;
          }
        }
      }
    }
  }
`],[`
  padding: 12px 24px 24px 24px;
  width: 100%;
  .footStatusWrapper {
    display: flex;
    align-items: center;
    height: 36px;
    width: fit-content;
    padding: 0 12px;
    border: 1px solid #eaeaea;
    border-radius: 36px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 16px;
    color: #9e9e9e;

    &.stopBtn {
      height: 32px;
      padding: 0 16px;
      border-radius: 18px;
      &.canStop {
        cursor: pointer;
        &:hover {
          border-color: #2196f3;
          color: #2196f3;
        }
      }
    }
  }
  .footer {
    display: flex;
    position: relative;
    textarea {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
      border-radius: 24px !important;
      border-width: 0 48px 0 8px !important;
      border-color: transparent !important;
      line-height: 1.15;
    }
    .clearBtn {
      width: 48px;
      height: 48px;
      margin-right: 8px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2196f3;
      font-size: 26px;
      color: #fff;
    }
    .sendBtn {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      .icon-airplane {
        color: #ddd;
      }
      &.enabled {
        cursor: pointer;
        &:hover {
          background: #f5f5f5;
          .icon-airplane {
            color: #2196f3;
          }
        }
      }
    }
  }
`]),B=N.ZP.div(J),H=N.ZP.div(S),v=N.ZP.div(g),X={create:"create",running:"running",search:"search",reply:"reply"},ee=void 0;function q(G){var U=this,D=G.assistantId,se=G.className,re=G.fullContent,ce=G.singleQuestionRow,le=ce===void 0?!0:ce,me=G.notAllowRestart,Le=G.showTitle,i=G.isDialogueCreate,x=G.projectId,w=G.assistantConfig,K=G.onChangeConfig,R=G.createMsgList,O=R===void 0?[]:R,p=G.setCreateMsgList,u=(0,t.useState)(i?O:[]),W=(0,L.Z)(u,2),E=W[0],V=W[1],te=(0,t.useState)(i&&!E[0].content?new AbortController:null),ne=(0,L.Z)(te,2),oe=ne[0],_e=ne[1],ue=(0,t.useState)(""),De=(0,L.Z)(ue,2),de=De[0],he=De[1],pe=(0,t.useState)(w||{}),We=(0,L.Z)(pe,2),Ie=We[0],be=We[1],ln=(0,t.useState)(!0),Ke=(0,L.Z)(ln,2),ke=Ke[0],Ye=Ke[1],nn=(0,t.useState)(!1),an=(0,L.Z)(nn,2),Pe=an[0],rn=an[1],sn=(0,t.useState)(!0),hn=(0,L.Z)(sn,2),pn=hn[0],mn=hn[1],On=(0,t.useState)(""),In=(0,L.Z)(On,2),Ze=In[0],cn=In[1],Mn=(0,t.useState)(""),Pn=(0,L.Z)(Mn,2),Se=Pn[0],Be=Pn[1],fe=(0,t.useState)(null),ge=(0,L.Z)(fe,2),Q=ge[0],Oe=ge[1],Me=(0,t.useState)(!1),Ee=(0,L.Z)(Me,2),Te=Ee[0],ye=Ee[1],Ce=(0,t.useState)(!1),Ge=(0,L.Z)(Ce,2),Re=Ge[0],on=Ge[1],Ve=Ie.iconUrl,_n=Ie.iconColor,Ne=Ie.name,ze=Ie.description,gn=Ie.exampleQuestions,$e=gn===void 0?[]:gn,Fe=Ie.id,dn=Ie.preamble,Je=Ie.status,je=Fe||D,qe=!i&&(!je||!Ze),tn=[X.create,X.running].includes(Q);(0,t.useEffect)(function(){D?En():je?c.Z.getThread({projectId:x,assistantId:je}).then(function(we){we&&cn(we),mn(!1)}).catch(function(we){return mn(!1)}):mn(!1)},[je]),(0,t.useEffect)(function(){w&&be(w)},[w]),(0,t.useEffect)(function(){Cn()},[oe]);var En=function(){c.Z.getSimpleInfo({assistantId:je}).then(function(ve){ve&&(be(ve),cn(ve.threadId),mn(!1),ve.threadId&&ve.status===2?fn(ve.threadId):Ye(!1))}).catch(function(ve){return mn(!1)})},fn=function(ve){Ye(!0),c.Z.getListAssistantMessage({threadId:ve,limit:10,after:E.length?E[0].msgId:void 0}).then(function(Ae){if(Ae){Ye(!1),rn(Ae.length<10);var ie=Ae.map(function(Qe){return(0,P.default)({},Qe,{content:Qe.content.replace(/【\d+†source】/gi,"")})}),He=_.reverse(ie).concat(E);V(He),E.length?$(".assistantChatListScroll").nanoScroller({scrollTo:$(".messageItem[data-id="+(Ae[0]||{}).msgId+"]")}):$(".assistantChatListScroll .nano-content").scrollTop(1e7)}}).catch(function(Ae){return Ye(!1)})},Dn=function(ve,Ae){var ie=Ae.position,He=Ae.direction;if(Pe||ke)return!1;He==="up"&&ie===0&&fn(Ze)},Ue=function(ve){!i&&Oe(X.create),_e(new AbortController),V(E.concat([{role:"user",content:ve.trim()},{role:"assistant",content:""}])),setTimeout(function(){he(""),$(".assistantChatListScroll .nano-content").scrollTop(1e7)},0)},vn=function(){ee||(ee=c.Z.stopReply({assistantId:je,threadId:Ze,runId:Se}),ee.then(function(ve){ve&&(oe.abort(),_e(null),Oe(null),ee=null)}))},en=function(){Re||(on(!0),c.Z.resetThread({assistantId:je,threadId:Ze}).then(function(ve){ve&&(on(!1),V([]),cn(ve))}).catch(function(ve){alert(_l("\u91CD\u7F6E\u5931\u8D25"),2),on(!1)}))},Cn=function(){var we=(0,y.Z)(f().mark(function ve(){var Ae,ie,He,Qe,Tn,bn,Rn,Sn,Bn;return f().wrap(function(Xe){for(;;)switch(Xe.prev=Xe.next){case 0:if(!(!E.length||!oe)){Xe.next=2;break}return Xe.abrupt("return");case 2:return Ae="",ie=!0,He=(0,k.j)(function(yn){if(yn.type==="event"){if(yn.data==="[DONE]"){var Wn=[].concat(E);Wn[E.length-1].content=Ae.replace(/【\d+†source】/gi,""),V(Wn),_e(null),i?p(Wn):Oe(null);return}var un=safeParse(yn.data);if(i){if(un.choices&&un.choices.length){if(un.choices[0].finish_reason==="tool_calls"){console.log("test unstable bug",Ae);var An=safeParse(Ae);K&&K({name:An.Assistant_name,description:An.Assistant_description,instructions:An.Prompt,preamble:An.welcome_message,exampleQuestions:An.Example_Questions}),Ae=_l("\u52A9\u624B\u521B\u5EFA\u6210\u529F\uFF01"),ye(!1);return}var Ln=un.choices[0].delta.tool_calls;!Te&&Ln&&ye(!0),Ae+=Ln?_.get(Ln,["0","function","arguments"])||"":un.choices[0].delta.content||"",!Ln&&$(".createChatElement:last .markdown-body").html((0,F.S5)(Ae)),$(".assistantChatListScroll .nano-content").scrollTop(1e7)}}else{switch(un.object){case"thread.run":Be(un.id),ie&&Oe(X.running);break;case"thread.run.step":ie&&Oe(X.search);break;case"thread.message":ie&&Oe(X.search);break;case"thread.message.delta":Oe(X.reply),ie=!1;break;default:break}un.object==="thread.message.delta"&&un.delta&&(Ae+=un.delta.content[0].text.value||"",$(".assistantChatElement:last .markdown-body").html((0,F.S5)(Ae.replace(/【\d+†source】/gi,""))),$(".assistantChatListScroll .nano-content").scrollTop(1e7))}}}),Qe=i?{projectId:x,isFirst:E.length===1,messageList:E.filter(function(yn){return yn.content})}:{assistantId:je,threadId:Ze,content:E[E.length-2].content},Xe.next=8,fetch(md.global.Config.AjaxApiUrl+"Assistant/"+(i?"DialogueSetupAssistant":"Chat")+" ",{signal:oe.signal,method:"POST",headers:{Authorization:(0,T.qz)()?"md_pss_id "+(0,T.qz)():"","Content-Type":"application/json"},body:Y()(Qe)});case 8:Tn=Xe.sent,bn=Tn.body.getReader(),Xe.prev=10;case 11:return Xe.next=14,bn.read();case 14:if(Rn=Xe.sent,Sn=Rn.done,Bn=Rn.value,!Sn){Xe.next=19;break}return Xe.abrupt("break",22);case 19:He.feed(new TextDecoder().decode(Bn)),Xe.next=11;break;case 22:return Xe.prev=22,_e(null),bn.releaseLock(),Xe.finish(22);case 26:case"end":return Xe.stop()}},ve,U,[[10,,22,26]])}));return function(){return we.apply(this,arguments)}}();if(!pn&&D&&Je!==2)return t.createElement(B,{className:"justifyContentCenter"},Le&&Ne&&t.createElement(A(),{title:Ne}),t.createElement("div",{className:"closeIconWrapper"},t.createElement(a.Z,{icon:"contact_support",className:"Font50 Gray_bd"})),t.createElement("div",{className:"mTop20 Gray_9e Font17"},_l("\u52A9\u624B\u5DF2\u5173\u95ED\u6216\u5220\u9664")));var xn=function(){var ve=function(ie){return t.createElement("div",{className:j()("avatarWrapper",{hasBorder:!Ve,smallSize:ie==="small"}),style:{backgroundColor:Ve?_n||"#2196f3":""}},Ve?t.createElement(r.Z,{url:Ve,fill:"#fff",size:ie==="small"?24:32}):t.createElement(a.Z,{icon:"ai1",className:"Gray_bd "+(ie==="small"?"Font20":"Font24")}))};return t.createElement(H,{className:j()("flex w100 flexColumn alignItemsCenter justifyContentCenter",{fullContent:re})},!i&&(pn||D&&ke)?t.createElement(s.Z,{className:"mTop10"}):t.createElement(t.Fragment,null,ve(),Ne&&t.createElement("div",{className:"nameText"},Ne),ze&&t.createElement("div",{className:"Gray_9e mTop4"},ze),dn&&t.createElement("div",{className:"flexRow mTop24 w100"},ve("small"),t.createElement("div",{className:"flex mLeft8"},t.createElement("div",{className:"promptMsg"},dn))),!!$e.length&&t.createElement("div",{className:j()("questionList",{singleQuestionRow:le})},$e.filter(function(Ae){return!!Ae}).map(function(Ae,ie){return t.createElement("div",{key:ie,className:j()("questionItem overflow_ellipsis w100",{canSend:!qe}),title:Ae,onClick:function(){return!qe&&Ue(Ae)}},Ae)}))))};return t.createElement(B,{className:j()(se,{fullContent:re})},Le&&Ne&&t.createElement(A(),{title:Ne}),!E.length&&xn(),!!E.length&&t.createElement(I.Z,{className:"flex assistantChatListScroll",updateEvent:Dn},D&&ke&&t.createElement("div",{className:"ThemeColor3 TxtCenter"},_l("\u52A0\u8F7D\u4E2D...")),t.createElement(o.Z,{messageList:E,config:Ie,isDialogueCreate:i,controller:oe,chatStatus:Q})),t.createElement(v,{className:"footerWrapper"},Te&&i&&t.createElement("div",{className:"footStatusWrapper"},t.createElement(s.Z,{size:"small"}),t.createElement("div",{className:"Gray_9e mLeft8"},_l("\u6B63\u5728\u66F4\u65B0\u52A9\u624B\u914D\u7F6E"))),(oe||Q)&&!i&&t.createElement("div",{className:j()("footStatusWrapper stopBtn",{canStop:!tn}),onClick:function(){return!tn&&Se&&vn()}},!tn&&t.createElement("i",{className:"icon-wc-stop mRight5"}),t.createElement("span",null,tn?_l("\u53D1\u9001\u4E2D..."):_l("\u505C\u6B62"))),t.createElement("div",{className:"footer"},!!E.length&&!me&&t.createElement("div",{className:"clearBtn tip-top","data-tip":_l("\u91CD\u65B0\u5F00\u59CB"),onClick:en},t.createElement("i",{className:"icon-cleaning_services"})),t.createElement(h.Z,{className:"flex",style:{paddingTop:16,paddingBottom:16},minHeight:0,maxHeight:240,disabled:qe,placeholder:qe&&!pn?_l("\u8BF7\u5148\u4FDD\u5B58\uFF0C\u518D\u6D4B\u8BD5"):_l("\u8BF7\u8F93\u5165\u2026"),value:de,onChange:he,onKeyDown:function(ve){!ve.shiftKey&&ve.keyCode===13&&!oe&&ve.target.value.trim().replace(/\r\n/,"")&&Ue(de)}}),t.createElement("div",{className:j()("sendBtn",{enabled:!qe}),onClick:function(){!de.trim()||oe||qe||Ue(de)}},t.createElement("i",{className:"icon-airplane"})))))}},49863:(xe,z,e)=>{e.d(z,{S5:()=>Y});var h=e(31226),I=e.n(h),s=e(28325),r=e.n(s),a=e(47478),n=e(96486),f=e.n(n),C={ASC:"ASC",DESC:"DESC"},Y=function(L){var Z=new(I())({highlight:function(N,d){return(0,s.highlight)(N,s.languages.js)}});return Z.renderer.rules.link_open=function(t,N){var d=t[N].title?' title="'+(0,a.escapeHtml)((0,a.replaceEntities)(t[N].title))+'"':"";return'<a target="_blank" href="'+(0,a.escapeHtml)(t[N].href)+'"'+d+">"},Z.render(L)},y=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Z="";switch(L.type){case 1:Z=_l("\u63D0\u4EA4\u4E8E");break;case 2:Z=_l("\u53D1\u5E03\u4E8E");break;case 3:Z=_l("\u5BFC\u5165\u4E8E");break;default:break}return[_.get(L,"account.fullname"),Z,createTimeSpan(L.time)].join(" ")}},45309:(xe,z,e)=>{e.d(z,{c:()=>ae});var h=e(42057),I=e(54208),s=e(12424),r=e(86735),a=e(67294),n=e(1952),f=e(94550),C=e(71893),Y=e(29037),y=e(1502),P=e(96486),L=e.n(P),Z=e(86674),t=e(24607),N=e(62232),d=(0,r.Z)([`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 70px;
  padding: 0 26px;
`],[`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 70px;
  padding: 0 26px;
`]),j=(0,r.Z)([`
  max-height: 500px;
  padding: 0 16px;
  overflow-y: auto;
`],[`
  max-height: 500px;
  padding: 0 16px;
  overflow-y: auto;
`]),o=C.ZP.div(d),c=C.ZP.div(j);function l(m,k){return m&&k?[{spliceType:1,isGroup:!0,groupFilters:[{controlId:m,dataType:2,spliceType:1,filterType:2,dynamicSource:[],values:[k]}]}]:[]}function M(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=m.appId,T=m.worksheetId,F=m.viewId,b=m.filterId,A=m.searchId,J=m.keyWords,S=m.onClose,g=S===void 0?function(){}:S,B=(0,a.useState)(!1),H=(0,s.Z)(B,2),v=H[0],X=H[1],ee=(0,Y.I)({appId:k,worksheetId:T,viewId:F,isGetWorksheet:!0,filterId:b,keyWords:A?void 0:J,filterControls:l(A,J),onError:function(){X(!0)}}),q=ee.loading,G=ee.records,U=ee.controls;return(0,a.useEffect)(function(){G.length===1&&((0,y.L)({appId:k,worksheetId:T,recordId:G[0].rowid,viewId:F}),g())},[G]),a.createElement(h.Z,{visible:!0,verticalAlign:"bottom",width:window.innerWidth-20>960?960:window.innerWidth-20,closeSize:50,onCancel:function(){g()},bodyStyle:{padding:"0 0 26px",position:"relative"}},a.createElement(o,null,_l("\u626B\u7801\u7ED3\u679C")),a.createElement(c,null,q&&a.createElement("div",{className:"pAll35"},a.createElement(I.Z,null)),!q&&!G.length&&a.createElement("div",{className:"pAll35 TxtCenter"},a.createElement("div",{className:"Gray_9e Font12"},v?_l("\u5DF2\u5220\u9664\u6216\u65E0\u6743\u9650"):_l("\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u8BB0\u5F55"))),!q&&!!G.length&&G.map(function(D,se){return a.createElement(f.Z,{key:se,data:D,appId:k,controls:U,showControls:(0,N.Ve)(U).filter(function(re){return!(0,P.includes)([Z.DN.BAR_CODE],re.type)&&(0,t.kM)(re).visible}).slice(0,5).map(function(re){return re.controlId}),disabled:!0,onClick:function(){return(0,y.L)({appId:k,worksheetId:T,recordId:D.rowid,viewId:F})}})})))}function ae(m){(0,n.Z)(M,m)}},29037:(xe,z,e)=>{e.d(z,{I:()=>Y});var h=e(94942),I=e.n(h),s=e(36803),r=e(12424),a=e(42723),n=e(67294),f=e(45231),C=e(26358);function Y(){var y=this,P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},L=P.appId,Z=P.worksheetId,t=P.viewId,N=P.filterId,d=P.keyWords,j=P.isGetWorksheet,o=P.onError,c=o===void 0?function(){}:o,l=(0,a.Z)(P,["appId","worksheetId","viewId","filterId","keyWords","isGetWorksheet","onError"]),M=(0,n.useRef)({}),ae=(0,n.useState)(!0),m=(0,r.Z)(ae,2),k=m[0],T=m[1],F=(0,n.useState)([]),b=(0,r.Z)(F,2),A=b[0],J=b[1],S=(0,n.useState)([]),g=(0,r.Z)(S,2),B=g[0],H=g[1],v=(0,n.useState)(l.filterControls),X=(0,r.Z)(v,2),ee=X[0],q=X[1],G=(0,n.useCallback)((0,s.Z)(I().mark(function U(){var D,se,re;return I().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(T(!0),D=[],!N){le.next=12;break}if(!M.current[N]){le.next=7;break}D=M.current[N],le.next=12;break;case 7:return le.next=9,f.Z.getWorksheetFilterById({filterId:N});case 9:se=le.sent,M.current[N]=(0,C.Gt)(se.items||[]),D=M.current[N];case 12:return le.next=14,f.Z.getFilterRows({appId:L,worksheetId:Z,viewId:t,keyWords:d,filterControls:D.concat(ee),isGetWorksheet:j});case 14:if(re=le.sent,re.resultCode===1){le.next=19;break}return T(!1),c(re),le.abrupt("return");case 19:j&&H(re.template.controls),J(re.data),T(!1);case 22:case"end":return le.stop()}},U,y)})),[L,t,Z,d,N,l.filterControls]);return(0,n.useEffect)(function(){G()},[d,ee]),{loading:k,records:A,controls:B,setFilterControls:q}}},42602:(xe,z,e)=>{e.r(z),e.d(z,{addAppSection:()=>re,addFirstAppSection:()=>g,addWorkSheet:()=>se,clearSheetList:()=>B,copyCustomPage:()=>me,copySheet:()=>ee,createAppItem:()=>le,deleteSheet:()=>G,formatLeftSectionDetail:()=>m,getAllAppSectionDetail:()=>b,getSheetList:()=>T,moveSheet:()=>q,refreshSheetList:()=>F,sortSheetList:()=>U,updateALLSheetList:()=>S,updateAppItemInfo:()=>X,updateGuidanceVisible:()=>D,updateSheetIconColor:()=>H,updateSheetList:()=>J,updateSheetListAppItem:()=>A,updateSheetListIsUnfold:()=>v,updateSheetListLoading:()=>Le});var h=e(52945),I=e.n(h),s=e(88239),r=e(22013),a=e(45231),n=e(91088),f=e(49365),C=e(75599),Y=e(7145),y=e.n(Y),P=e(96486),L=e.n(P),Z=e(36021),t=e(70973),N=e(15308),d=e(73820),j=e(82134),o=e(40979),c=e(89499),l=e(97592),M=e(30381),ae=e.n(M),m=function(x){return x.workSheetInfo.map(function(w){var K=(0,s.default)({},w);if(w.type===2){var R=_.find(x.childSections,{appSectionId:w.workSheetId})||{},O=R.workSheetInfo,p=O===void 0?[]:O,u=R.appSectionId;K.items=p.map(function(W){return W.parentGroupId=u,W})}return K})},k=void 0;function T(i){return function(x,w){if(x({type:"SHEET_LIST_UPDATE_LOADING",loading:!0}),x({type:"SHEET_LIST",data:[]}),k)try{k.abort()}catch(K){}k=n.Z.getAppSectionDetail(i),k.then(function(K){if(_.isEmpty(K)){x({type:"WORKSHEET_APP_SECTION_FAILURE"});return}var R=(0,t.le)(K.appRoleType,K.isLock),O=m(K);K.workSheetInfo.length&&x({type:"SHEET_LIST",data:O});var p=w().sheet.base.worksheetId,u=r.Z.getState().appPkg.currentPcNaviStyle,W=_.find(K.workSheetInfo,{workSheetId:p})||{},E=ae()(md.global.Account.createTime).add(7,"days").format("YYYY-MM-DD"),V=ae()().isBefore(E);if(R&&V&&W.type===0&&u===0&&x(D()),[1,3].includes(u)){var te=r.Z.getState().sheetList.appSectionDetail,ne=K.appSectionId,oe=te.map(function(_e){return _e.workSheetId===ne?(0,s.default)({},_e,{items:O}):_e});r.Z.dispatch(S(oe))}x({type:"SHEET_LIST_UPDATE_LOADING",loading:!1})})}}function F(){return function(i,x){var w=x().sheet.base,K=w.appId,R=w.groupId;n.Z.getAppSectionDetail({appId:K,appSectionId:R}).then(function(O){O.workSheetInfo.length&&i({type:"SHEET_LIST",data:m(O)})})}}function b(i,x){return function(w,K){n.Z.getApp({appId:i,getSection:!0}).then(function(R){var O=R.permissionType,p=R.isLock,u=R.sections,W=u===void 0?[]:u,E=(0,t.le)(O,p),V=E?W:W.map(function(te){return(0,s.default)({},te,{workSheetInfo:te.workSheetInfo.filter(function(ne){return[1,4].includes(ne.status)&&!ne.navigateHide})})}).filter(function(te){return te.workSheetInfo&&te.workSheetInfo.length>0});w((0,N.updateIsCharge)(E)),w((0,d.mB)(V)),w((0,N.updateAppPkgData)({appRoleType:O,isLock:p})),w(S(V.map(function(te){return(0,s.default)({},te,{workSheetId:te.appSectionId,workSheetName:te.name,type:2,layerIndex:0,items:m(te)})}))),w(Le(!1)),x&&x()})}}function A(i,x){return function(w,K){var R=K().sheetList.data,O=function u(W){return W.map(function(E){return E.workSheetId===i?(0,s.default)({},E,x):(0,s.default)({},E,{items:u(E.items||[])})})},p=O(R);w({type:"SHEET_LIST",data:p})}}function J(i){return{type:"SHEET_LIST",data:i}}function S(i){return{type:"SHEET_ALL_LIST",data:i}}function g(){return function(i,x){var w=x(),K=w.appPkg,R=w.sheetList,O=R.appSectionDetail.map(function(u){return(0,s.default)({},u,{items:(0,l.MR)(u.workSheetId)})}),p=_l("\u672A\u547D\u540D\u5206\u7EC4");if(O.length===1&&_.isEmpty(O[0].name)){i(S(O.map(function(u){return I()(u,{edit:!0,name:p})})));return}n.Z.addAppSection({appId:K.id,name:p}).then(function(u){if(u.data){var W=O.concat({name:p,workSheetId:u.data,edit:!0,items:[]});i(S(W))}})}}function B(){return{type:"SHEET_LIST",data:[]}}function H(i){return function(x,w){var K=w().sheetList.data,R=K.map(function(O){return O.iconColor=i,O});x({type:"SHEET_LIST",data:R})}}function v(i){return function(x,w){x(i?{type:"SHEET_LIST_UPDATE_IS_UNFOLD",isUnfold:!0}:{type:"SHEET_LIST_UPDATE_IS_UNFOLD",isUnfold:!1})}}function X(i,x,w){return function(K,R){K(x?(0,j.updatePageInfo)({pageName:w}):(0,N.updateWorksheetInfo)({name:w}))}}function ee(i,x){return function(w,K){var R=r.Z.getState().appPkg.projectId,O=(0,s.default)({},i,{chargeId:md.global.Account.accountId,projectId:R,isCopyBtnName:!0,isCopyDesc:!0,isCopyMember:!0,isCopyAdmin:!0,type:0}),p=x.parentGroupId;p&&(O.appSectionId=p,delete x.parentGroupId),a.Z.copyWorksheet(O).then(function(u){if(u){alert(_l("\u590D\u5236\u6210\u529F"));var W=(0,s.default)({workSheetId:u,workSheetName:O.name,type:0,status:1},x),E=K().sheetList.data;p?(W.parentGroupId=p,w({type:"ADD_LEFT_SUB_ITEM",data:{id:p,data:W}})):w({type:"SHEET_LIST",data:y()(E,{$push:[W]})})}else alert(_l("\u590D\u5236\u5931\u8D25"),2)})}}function q(i){return function(x,w){var K=w().sheetList.data,R=i.sourceAppId,O=i.sourceAppSectionId,p=i.ResultAppSectionId,u=i.workSheetsInfo[0],W=u.workSheetId,E=u.parentGroupId,V=null,te=[];E?(i.sourceAppSectionId=E,V=K.map(function(ne){return ne.workSheetId===E&&(ne.items=ne.items.filter(function(oe){return oe.workSheetId!==W})),ne})):(te=_.get(_.find(K,{workSheetId:W}),"items")||[],V=K.filter(function(ne){return ne.workSheetId!==W})),f.Z.removeWorkSheetAscription(i).then(function(ne){if(ne){var oe=r.Z.getState(),_e=oe.sheet,ue=oe.appPkg,De=_e.base,de=De.appId,he=De.worksheetId,pe=De.groupId,We=_.find(V,{workSheetId:p});if(We&&(u.parentGroupId=We.workSheetId,We.items=We.items.concat(u)),pe===p&&(u.parentGroupId=void 0,V.push(u)),x({type:"SHEET_LIST",data:V}),W===he||_.find(te,{workSheetId:he}))if(V.length){var Ie=(0,c.h2)(V);(0,Z.T8)("/app/"+R+"/"+O+"/"+(Ie||""))}else(0,Z.T8)("/app/"+R+"/"+O);(!p||[1,3].includes(ue.currentPcNaviStyle))&&window.updateAppGroups(),(0,c.oS)(de,O),alert(_l("\u79FB\u52A8\u6210\u529F"))}else alert(_l("\u79FB\u52A8\u5931\u8D25"),2)})}}function G(i){var x=i.appId,w=i.groupId,K=i.worksheetId,R=i.projectId,O=i.type,p=i.parentGroupId;return function(u,W){var E=W().sheetList.data,V=function(ne){if(ne){var oe=null;if(p)oe=E.map(function(de){return de.workSheetId===p&&(de.items=de.items.filter(function(he){return he.workSheetId!==K})),de});else{var _e=O===2?_.find(E,{workSheetId:K}).items||[]:[];oe=E.filter(function(de){return de.workSheetId!==K}),oe=oe.concat(_e.map(function(de){return(0,s.default)({},de,{parentGroupId:void 0})}))}u({type:"SHEET_LIST",data:oe});var ue=r.Z.getState().sheet.base.worksheetId;if(K===ue)if(oe.length){var De=(0,c.h2)(oe);(0,Z.T8)("/app/"+x+"/"+w+"/"+(De||""))}else(0,Z.T8)("/app/"+x+"/"+w);alert(_l("\u5220\u9664\u6210\u529F"))}else alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"),2)};O===2?n.Z.deleteAppSection({appId:x,appSectionId:K}).then(function(te){te.code===1&&V(te)}):f.Z.removeWorkSheetForApp({appId:x,projectId:R,type:O,isPermanentlyDelete:!1,appSectionId:p||w,workSheetId:K}).then(function(te){te&&((0,c.oS)(x,w),V(te))})}}function U(i,x,w){return function(K,R){K({type:"SHEET_LIST",data:w}),n.Z.updateSectionChildSort({appId:i,appSectionId:x,workSheetIds:w.filter(_.identity).map(function(O){return O.workSheetId})}).then(function(O){})}}function D(i){return function(x,w){var K=md.global.Account.accountId+"-guidanceHide";_.isBoolean(i)?(C.Z.add({key:K,value:"true"},{silent:!0}).then(function(R){}),x({type:"GUIDANCE_VISIBLE",value:i})):C.Z.get({key:K}).then(function(R){R||x({type:"GUIDANCE_VISIBLE",value:!0})})}}function se(i,x){return function(w,K){var R=i.appId,O=i.appSectionId,p=i.firstGroupId,u=i.name,W=i.projectId,E=i.type;f.Z.addWorkSheet((0,s.default)({},i,{icon:E===0?"table":"dashboard"})).then(function(V){var te=V.pageId,ne=V.workSheetId,oe=V.templateId;if(E===1&&te){x(V);var _e=(0,s.default)({workSheetName:i.name,workSheetId:te,navigateHide:!1,status:1},(0,P.pick)(i,["icon","iconColor","iconUrl","type","configuration","urlTemplate","createType"]));p?(_e.parentGroupId=i.appSectionId,w({type:"ADD_LEFT_SUB_ITEM",data:{id:O,data:_e}})):w({type:"ADD_LEFT_ITEM",data:_e});return}ne?(0,o.zF)({sourceName:u,templateId:oe,sourceId:ne,projectId:W,appconfig:{appId:R,appSectionId:p||O}}):(alert(_l("\u521B\u5EFA\u5DE5\u4F5C\u8868\u5931\u8D25"),2),x&&x(V))}).catch(function(V){x&&x()})}}function re(i,x){return function(w,K){var R=i.appId,O=i.groupId,p=_l("\u672A\u547D\u540D\u5206\u7EC4"),u="8_4_folder",W=md.global.FileStoreConfig.pubHost+"customIcon/"+u+".svg";n.Z.addAppSection({appId:R,name:p,icon:u,parentId:O,rootId:O}).then(function(E){E.data&&w({type:"ADD_LEFT_ITEM",data:{workSheetName:p,workSheetId:E.data,navigateHide:!1,status:1,type:2,icon:u,iconUrl:W,items:[],edit:!0}})})}}var ce=!1;function le(i){return function(x,w){var K=i.appId,R=i.firstGroupId,O=i.groupId,p=i.type,u=i.name,W=i.configuration,E=i.urlTemplate;md.global.Account.isPortal&&(K=md.global.Account.appId);var V=r.Z.getState().appPkg,te=V.iconColor,ne=V.projectId,oe=p==="worksheet"?0:1,_e=p==="customPage"?"dashboard":"table",ue=md.global.FileStoreConfig.pubHost+"customIcon/"+_e+".svg",De={appId:K,appSectionId:O,firstGroupId:R,name:u,iconColor:te,projectId:ne,icon:_e,iconUrl:ue,type:oe,configuration:W,urlTemplate:E,createType:oe===1?E?1:0:void 0},de=function(pe){ce=!1;var We=pe||{},Ie=We.pageId;p==="customPage"&&Ie&&((0,Z.T8)("/app/"+K+"/"+(R||O)+"/"+Ie),r.Z.dispatch((0,j.updatePageInfo)({pageName:u,pageId:Ie})),E||r.Z.dispatch((0,j.updateEditPageVisible)(!0)))};ce=!0,x(se(De,de))}}function me(i,x){return function(w,K){var R=K(),O=R.sheetList,p=i.parentGroupId;p&&(i.appSectionId=p,delete i.parentGroupId),f.Z.copyCustomPage(i).then(function(u){if(u){alert(_l("\u590D\u5236\u6210\u529F"));var W=(0,s.default)({workSheetId:u,workSheetName:i.name,type:1,status:1,icon:i.icon||"1_0_home",iconColor:i.iconColor||"#616161",iconUrl:i.iconUrl},x);p?(W.parentGroupId=p,w({type:"ADD_LEFT_SUB_ITEM",data:{id:p,data:W}})):w({type:"ADD_LEFT_ITEM",data:W})}else alert(_l("\u590D\u5236\u5931\u8D25"),2)})}}var Le=function(x){return{type:"SHEET_LIST_UPDATE_LOADING",loading:x}}}}]);
