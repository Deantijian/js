"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5715],{85715:(hn,v,e)=>{e.r(v),e.d(v,{default:()=>cn});var N=e(85105),H=e.n(N),w=e(99663),A=e(22600),b=e(49135),M=e(93196),i=e(86735),n=e(67294),T=e(45697),E=e(37727),V=e(83947),O=e(73549),R=e(86853),P=e(12424),z=e(56171),L=e(25273),l=e(5017),C=e(31261),k=e(93967),F=e.n(k),I=e(15577),U=e(42541),W=e(96486),y=e.n(W),B=(0,i.Z)([`
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 4px;
  .companyName {
    display: inline-block;
    max-width: 500px;
    line-height: 1.4em;
    font-size: 16px;
  }
  .switchIcon {
    margin-left: 4px;
    display: inline-block;
    font-size: 18px;
    color: #9d9d9d;
  }
  &:hover {
    background: #f2f2f2;
  }
`],[`
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 4px;
  .companyName {
    display: inline-block;
    max-width: 500px;
    line-height: 1.4em;
    font-size: 16px;
  }
  .switchIcon {
    margin-left: 4px;
    display: inline-block;
    font-size: 18px;
    color: #9d9d9d;
  }
  &:hover {
    background: #f2f2f2;
  }
`]),G=(0,i.Z)([`
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
`]),J=(0,i.Z)([`
  padding-top: 5px;
  width: 300px;
`],[`
  padding-top: 5px;
  width: 300px;
`]),K=(0,i.Z)([`
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
`]),X=(0,i.Z)([`
  height: `,`px !important;
`],[`
  height: `,`px !important;
`]),Y=(0,i.Z)([`
  height: 0px;
  border-top: 1px solid #eaeaea;
  margin: 5px 0;
`],[`
  height: 0px;
  border-top: 1px solid #eaeaea;
  margin: 5px 0;
`]),$=(0,i.Z)([`
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
`]),D=(0,l.ZP)(U.EK)(B),Q=l.ZP.div(G),q=l.ZP.div(J),nn=l.ZP.div(K),en=(0,l.ZP)(L.Z)(X,function(u){var a=u.height;return a}),tn=l.ZP.div(Y),j=(0,l.ZP)(z.Z)($);function an(u){var a=y().get(u,"match.params.projectId"),o=md.global.Account.projects,c=(0,n.useRef)(),t=(0,n.useState)({}),m=(0,P.Z)(t,2),d=m[0],p=m[1];(0,n.useEffect)(function(){var r=(0,I.vo)(a||localStorage.getItem("currentProjectId"));y().isEmpty(r)?o[0]&&o[0].projectId?(p(o[0]),safeLocalStorageSetItem("currentProjectId",o[0].projectId)):p({companyName:_l("\u5916\u90E8\u534F\u4F5C"),projectId:"external"}):p(r)},[]);var s=(0,n.useState)(),h=(0,P.Z)(s,2),f=h[0],Z=h[1],x=n.createElement(q,null,o.map(function(r,mn){return n.createElement(nn,{key:mn,className:F()("ellipsis",{active:d&&d.projectId===r.projectId}),onClick:function(){Z(!1),p(r),safeLocalStorageSetItem("currentProjectId",r.projectId),I.uY.emit("CHANGE_CURRENT_PROJECT",r)}},r.companyName)}));return o.length>Math.ceil((window.innerHeight-160)/40)&&(x=n.createElement(en,{height:Math.ceil((window.innerHeight-160)/40)*40},x)),d?n.createElement(C.Z,{popupVisible:f,action:["click"],popupAlign:{points:["tl","bl"],offset:[0,4]},popup:n.createElement(Q,null,x,n.createElement(tn,null),n.createElement(C.Z,{action:["hover"],popupAlign:{points:["bl","br"],offset:[2,5]},popup:n.createElement(R.Z,{className:"Relative"},n.createElement(j,{onClick:function(){return window.open("/enterpriseRegister?type=add")}},_l("\u52A0\u5165\u7EC4\u7EC7"))),getPopupContainer:function(){return c.current},destroyPopupOnHide:!0},n.createElement("div",{ref:c},n.createElement(j,{className:"ThemeColor3"},n.createElement("i",{className:"icon icon-add ThemeColor3 Font16 mRight6"}),n.createElement("span",{className:"Font15"},_l("\u52A0\u5165\u7EC4\u7EC7")))))),onPopupVisibleChange:Z},n.createElement(D,{className:"Font17 Hand"},n.createElement("div",{className:"companyName ellipsis"},d.companyName),n.createElement("i",{className:"switchIcon icon icon-arrow-down-border"}))):""}const on=an;var un=e(17777),rn=e(36021),g,S,ln=(0,i.Z)([`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid #eaeaea;
  margin: 0 12px 0 16px;
  color: #9e9e9e;
  text-align: center;
  line-height: 29px;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
    color: #2196f3;
  }
`],[`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid #eaeaea;
  margin: 0 12px 0 16px;
  color: #9e9e9e;
  text-align: center;
  line-height: 29px;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
    color: #2196f3;
  }
`]),dn=(0,i.Z)([`
  .commonUserHandleWrap {
    float: right;
  }
  .nativeModuleLogo {
    width: auto !important;
    font-weight: 600;
    padding-right: 8px;
    padding-left: 0px !important;
  }
  .iconNav {
    width: 28px;
    height: 28px;
    background: #9d27b0;
    border-radius: 5px 5px 5px 5px;
    border-radius: 6px;
    color: #fff;
    line-height: 30px;
  }
`],[`
  .commonUserHandleWrap {
    float: right;
  }
  .nativeModuleLogo {
    width: auto !important;
    font-weight: 600;
    padding-right: 8px;
    padding-left: 0px !important;
  }
  .iconNav {
    width: 28px;
    height: 28px;
    background: #9d27b0;
    border-radius: 5px 5px 5px 5px;
    border-radius: 6px;
    color: #fff;
    line-height: 30px;
  }
`]),pn=l.ZP.div(ln),sn=l.ZP.div(dn),cn=(S=g=function(u){(0,M.default)(a,u);function a(){var o,c,t,m;(0,w.default)(this,a);for(var d=arguments.length,p=Array(d),s=0;s<d;s++)p[s]=arguments[s];return m=(c=(t=(0,b.default)(this,(o=a.__proto__||H()(a)).call.apply(o,[this].concat(p))),t),t.state={indexSideVisible:!1},t.changeIndexVisible=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;t.timer=setTimeout(function(){t.setState({indexSideVisible:h})},100)},c),(0,b.default)(t,m)}return(0,A.default)(a,[{key:"render",value:function(){var c=this,t=this.state.indexSideVisible,m=this.props.path,d=m===void 0?"":m,p=_.includes("/plugin",d);return n.createElement(sn,{className:"nativeHeaderWrap flexRow"},n.createElement("div",{className:"flex flexRow alignItemsCenter"},n.createElement("div",{className:"nativeModuleLogo"},n.createElement(pn,{"data-tip":_l("\u9996\u9875"),onClick:function(){return(0,rn.T8)("/dashboard")}},n.createElement("i",{className:"icon-home_page Font18"})),n.createElement("div",{className:"nativeTitle"},p?_l("\u63D2\u4EF6\u4E2D\u5FC3"):_l("\u96C6\u6210\u4E2D\u5FC3"))),n.createElement(on,null),n.createElement(E.y_,{style:{x:(0,E.ST)(t?0:-352)}},function(s){var h=s.x;return n.createElement(O.Z,{posX:h,visible:t,onClose:function(){return c.setState({indexSideVisible:!1})},onClickAway:function(){return t&&c.setState({indexSideVisible:!1})}})})),n.createElement(V.Z,{type:"integration"}))}}]),a}(n.Component),g.propTypes={path:T.string},g.defaultProps={path:"integration"},S)}}]);
