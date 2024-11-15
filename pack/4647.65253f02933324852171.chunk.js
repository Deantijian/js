"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4647],{44647:(Z,s,n)=>{n.r(s),n.d(s,{default:()=>W});var I=n(26581),x=n(6100),h=n(12424),D=n(86735),e=n(67294),c=n(36021),O=n(5017),P=n(49611),M=n.n(P),A=n(91088),T=n(97777),C=n(49365),L=n(15577),b=(0,D.Z)([`
  height: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 15;
  background-color: #fff;
  padding: 0 24px 0 16px;
  .applicationIcon {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    margin-left: -3px;
  }
  .Gray_bd {
    &:hover {
      color: #9e9e9e !important;
      .applicationIcon {
        box-shadow: 0 0 20px 20px rgb(0 0 0 / 10%) inset;
      }
    }
  }
`],[`
  height: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 15;
  background-color: #fff;
  padding: 0 24px 0 16px;
  .applicationIcon {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    margin-left: -3px;
  }
  .Gray_bd {
    &:hover {
      color: #9e9e9e !important;
      .applicationIcon {
        box-shadow: 0 0 20px 20px rgb(0 0 0 / 10%) inset;
      }
    }
  }
`]),R=O.ZP.div(b);function W(d){var g=_.get(d,"match.params")||"",t=g.appId,B=g.navTab,U=(0,e.useState)({}),m=(0,h.Z)(U,2),l=m[0],f=m[1],E=_.find(["logs","analytics","settings"],function(i){return d.path.indexOf(i)>-1}),y={logs:_l("\u65E5\u5FD7"),analytics:_l("\u4F7F\u7528\u5206\u6790"),settings:_l("\u5E94\u7528\u7BA1\u7406")},u=y[E]||"",K=(_.find(T.it,function(i){return i.type===B})||{text:_l("\u9009\u9879\u96C6")}).text,S=function(){A.Z.getApp({appId:t,getLang:!0}).then(function(a){var o=a.langInfo;o&&o.appLangId&&o.version!==window["langVersion-"+t]?C.Z.getAppLangDetail({projectId:a.projectId,appId:t,appLangId:o.appLangId}).then(function(p){window["langData-"+t]=p.items,window["langVersion-"+t]=o.version,f(a)}):f(a)})};(0,e.useEffect)(function(){S()},[]);var r=(0,L.T3)(t,t).name||l.name;return e.createElement(R,{className:"flexRow alignItemsCenter"},e.createElement(M(),{title:(r?r+" - ":"")+u+(E==="settings"?" - "+K:"")}),e.createElement(I.Z,{popupPlacement:"bottomLeft",text:e.createElement("span",null,_l("\u5E94\u7528\uFF1A%0",r))},e.createElement("div",{className:"flexRow pointer Gray_bd alignItemsCenter",onClick:function(){window.disabledSideButton=!0;var a=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+t))||{};if(a){var o=a.lastGroupId,p=a.lastWorksheetId,w=a.lastViewId;(0,c.T8)("/app/"+t+"/"+[o,p,w].filter(function(v){return v&&!_.includes(["undefined","null"],v)}).join("/")+"?from=insite")}else(0,c.T8)("/app/"+t)}},e.createElement("i",{className:"icon-navigate_before Font20"}),e.createElement("div",{className:"applicationIcon",style:{backgroundColor:l.iconColor}},e.createElement(x.Z,{url:l.iconUrl,fill:"#fff",size:18})))),e.createElement("div",{className:"flex nativeTitle Font17 bold mLeft16"},u))}}}]);
