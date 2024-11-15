"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[945],{30945:(q,m,e)=>{e.r(m),e.d(m,{default:()=>X});var v=e(86853),b=e(85315),g=e(12424),I=e(56171),O=e(25273),a=e(86735),n=e(67294),M=e(21),o=e(5017),_=e(31261),C=e(93967),D=e.n(C),p=e(15577),j=e(42541),Z=e(83947),A=e(96486),E=e.n(A),R=(0,a.Z)([`
  display: flex;
  align-items: center;
  background: #fff;
  height: 50px;
  padding-left: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
`],[`
  display: flex;
  align-items: center;
  background: #fff;
  height: 50px;
  padding-left: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
`]),T=(0,a.Z)([`
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 4px;
  .companyName {
    display: inline-block;
    max-width: 500px;
    line-height: 1.4em;
  }
  .switchIcon {
    margin-left: 4px;
    display: inline-block;
    font-size: 18px;
    color: #9d9d9d;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`],[`
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 4px;
  .companyName {
    display: inline-block;
    max-width: 500px;
    line-height: 1.4em;
  }
  .switchIcon {
    margin-left: 4px;
    display: inline-block;
    font-size: 18px;
    color: #9d9d9d;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`]),L=(0,a.Z)([`
  flex: 1;
`],[`
  flex: 1;
`]),y=(0,a.Z)([`
  width: 300px;
  background: #fff;
  border-radius: 3px;
  padding-bottom: 5px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 13%), 0 2px 6px rgb(0 0 0 / 10%);
  .nano-pane {
    z-index: 20;
  }
`],[`
  width: 300px;
  background: #fff;
  border-radius: 3px;
  padding-bottom: 5px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 13%), 0 2px 6px rgb(0 0 0 / 10%);
  .nano-pane {
    z-index: 20;
  }
`]),U=(0,a.Z)([`
  padding-top: 5px;
  width: 300px;
`],[`
  padding-top: 5px;
  width: 300px;
`]),B=(0,a.Z)([`
  cursor: pointer;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  &.active {
    color: #2196f3;
    background: rgb(33, 150, 243, 0.08);
  }
  &:not(.active):hover {
    background: #f7f7f7;
  }
`],[`
  cursor: pointer;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  &.active {
    color: #2196f3;
    background: rgb(33, 150, 243, 0.08);
  }
  &:not(.active):hover {
    background: #f7f7f7;
  }
`]),K=(0,a.Z)([`
  height: `,`px !important;
`],[`
  height: `,`px !important;
`]),N=(0,a.Z)([`
  height: 0px;
  border-top: 1px solid #eaeaea;
  margin: 5px 0;
`],[`
  height: 0px;
  border-top: 1px solid #eaeaea;
  margin: 5px 0;
`]),W=(0,a.Z)([`
  &.ming.Item.MenuItem .Item-content {
    &:not(.disabled):hover {
      color: inherit !important;
      background-color: #f7f7f7 !important;
    }
  }
`],[`
  &.ming.Item.MenuItem .Item-content {
    &:not(.disabled):hover {
      color: inherit !important;
      background-color: #f7f7f7 !important;
    }
  }
`]),S=o.ZP.div(R),w=(0,o.ZP)(j.EK)(T),H=o.ZP.div(L),k=o.ZP.div(y),z=o.ZP.div(U),F=o.ZP.div(B),V=(0,o.ZP)(O.Z)(K,function(c){var l=c.height;return l}),G=o.ZP.div(N),h=(0,o.ZP)(I.Z)(W);function J(c){var l=E().get(c,"match.params.projectId"),r=md.global.Account.projects,u=(0,n.useRef)(),Y=(0,n.useState)((0,p.vo)(l||localStorage.getItem("currentProjectId"))),x=(0,g.Z)(Y,2),i=x[0],d=x[1];(0,n.useEffect)(function(){var t=(0,p.vo)(l||localStorage.getItem("currentProjectId"));E().isEmpty(t)&&(r[0]&&r[0].projectId?(d(r[0]),safeLocalStorageSetItem("currentProjectId",r[0].projectId)):d({companyName:_l("\u5916\u90E8\u534F\u4F5C"),projectId:"external"}))},[]);var Q=(0,n.useState)(),f=(0,g.Z)(Q,2),$=f[0],P=f[1],s=n.createElement(z,null,[].concat((0,b.Z)(r),[{companyName:_l("\u5916\u90E8\u534F\u4F5C"),projectId:"external"}]).map(function(t,nn){return n.createElement(F,{className:D()("ellipsis",{active:i&&i.projectId===t.projectId}),onClick:function(){P(!1),d(t),t.projectId!=="external"&&safeLocalStorageSetItem("currentProjectId",t.projectId),p.uY.emit("CHANGE_CURRENT_PROJECT",t)}},t.companyName)}));return r.length>Math.ceil((window.innerHeight-160)/40)&&(s=n.createElement(V,{height:Math.ceil((window.innerHeight-160)/40)*40},s)),n.createElement(S,{className:"appCenterHeader"},i&&n.createElement(_.Z,{popupVisible:$,action:["click"],popupAlign:{points:["tl","bl"],offset:[0,4]},popup:n.createElement(k,null,s,n.createElement(G,null),n.createElement(_.Z,{action:["hover"],popupAlign:{points:["bl","br"],offset:[2,5]},popup:n.createElement(v.Z,{className:"Relative"},n.createElement(h,{onClick:function(){return window.open("/enterpriseRegister?type=add")}},_l("\u52A0\u5165\u7EC4\u7EC7"))),getPopupContainer:function(){return u.current},destroyPopupOnHide:!0},n.createElement("div",{ref:u},n.createElement(h,{className:"ThemeColor3"},n.createElement("i",{className:"icon icon-add ThemeColor3 Font16 mRight6"}),n.createElement("span",{className:"Font15"},_l("\u52A0\u5165\u7EC4\u7EC7")))))),onPopupVisibleChange:P},n.createElement(w,{className:"Font17 bold Hand"},n.createElement("div",{className:"companyName ellipsis"},i.companyName),n.createElement("i",{className:"switchIcon icon icon-arrow-down-border"}))),n.createElement(H,null),n.createElement(Z.Z,{type:"dashboard",currentProject:i}))}const X=(0,M.Z)(J)}}]);
