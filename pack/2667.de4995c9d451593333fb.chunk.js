"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[2667],{52667:(N,d,e)=>{e.r(d),e.d(d,{default:()=>c});var g=e(54208),a=e(12424),f=e(86735),n=e(67294),p=e(5017),I=e(45231),D=e(76753),P=e(47868),M=e(15577),O=e(93967),w=e.n(O),C=e(96486),t=e.n(C),L=(0,f.Z)([`
  height: 100%;
  background: #fff;
  .SingleViewHeader {
    padding-right: 10px;
    .svgWrap {
      width: 26px;
      height: 26px;
      border-radius: 4px;
    }
  }
  .queryInput .inputCon > i {
    font-size: 20px !important;
    margin-top: 2px;
  }
`],[`
  height: 100%;
  background: #fff;
  .SingleViewHeader {
    padding-right: 10px;
    .svgWrap {
      width: 26px;
      height: 26px;
      border-radius: 4px;
    }
  }
  .queryInput .inputCon > i {
    font-size: 20px !important;
    margin-top: 2px;
  }
`]),T=p.ZP.div(L);function c(S){$("body").addClass("fixedScreen");var i=t().get(S,"match.params")||{},W=i.appId,l=i.worksheetId,_=i.viewId,R=(0,n.useState)(!1),E=(0,a.Z)(R,2),A=E[0],h=E[1],x=(0,n.useState)(!0),u=(0,a.Z)(x,2),B=u[0],K=u[1],U=(0,n.useState)(),m=(0,a.Z)(U,2),s=m[0],Z=m[1],r=(0,M.Q9)(),y=r?P.Z:D.Z;return(0,n.useEffect)(function(){return h(!0),window.hideColumnHeadFilter=!0,I.Z.getWorksheetInfo({worksheetId:l,getViews:!0}).then(function(v){var o=t().find(v.views,function(V){return V.viewId===_})||{},H=t().get(o,"viewType")===6&&String(t().get(o,"childType"))==="1";K(r?!0:!H),Z({worksheetName:v.name,viewName:o.name||""}),h(!1)}),function(){window.hideColumnHeadFilter=!1}},[]),A?n.createElement(g.Z,null):n.createElement(T,null,n.createElement(y,{showPageTitle:!0,showHeader:B,headerLeft:!!s&&n.createElement("div",{className:w()("Font16 bold flexRow alignItemsCenter",{mLeft24:!r})},s.worksheetName+"-"+s.viewName),appId:W,worksheetId:l,viewId:_}))}}}]);
