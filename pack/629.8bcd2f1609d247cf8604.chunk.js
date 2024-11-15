"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[629],{50629:($,u,t)=>{t.r(u),t.d(u,{default:()=>H});var v=t(97553),C=t(85105),E=t.n(C),S=t(99663),w=t(22600),N=t(49135),L=t(93196),p=t(86735),e=t(67294),A=t(12855),I=t(93967),O=t.n(I),f=t(5017),y=t(45231),W=t(12246);const Z=W.default;var z=t(89380),M=t.n(z),T=t(36021),g,k=(0,p.Z)([`
  position: absolute;
  z-index: 2;
  right: 4px;
  top: 24px;
  cursor: pointer;
  font-size: 20px;
  line-height: 40px;
  width: 40px;
  text-align: center;
  color: #9e9e9e;
  > span {
    line-height: 1.4em;
  }
  &:hover {
    color: #2196f3;
  }
`],[`
  position: absolute;
  z-index: 2;
  right: 4px;
  top: 24px;
  cursor: pointer;
  font-size: 20px;
  line-height: 40px;
  width: 40px;
  text-align: center;
  color: #9e9e9e;
  > span {
    line-height: 1.4em;
  }
  &:hover {
    color: #2196f3;
  }
`]),P=(0,p.Z)([`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px;
  }
  .status {
    font-size: 17px;
    color: #757575;
    margin: 24px 0 32px;
  }
`],[`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px;
  }
  .status {
    font-size: 17px;
    color: #757575;
    margin: 24px 0 32px;
  }
`]),U=f.ZP.div(k),D=f.ZP.div(P),n={NORMAL:1,SUCCESS:2,ERROR:3},H=(0,A.Z)(g=function(j){(0,L.default)(s,j);function s(c){(0,S.default)(this,s);var a=(0,N.default)(this,(s.__proto__||E()(s)).call(this,c));return a.state={isLarge:localStorage.getItem("NEW_RECORD_IS_LARGE")==="true",status:n.NORMAL},a}return(0,w.default)(s,[{key:"handleAddWorksheetRow",value:function(a,o){y.Z.addWorksheetRow(a).then(function(l){l&&l.data?(alert(_l("\u6DFB\u52A0\u6210\u529F")),o&&o(l.data)):alert(_l("\u6DFB\u52A0\u5931\u8D25,\u8BF7\u7A0D\u540E\u91CD\u8BD5"),2)})}},{key:"render",value:function(){var a=this,o=this.props.match,l=o===void 0?{}:o,h=l.params||{},G=h.appId,x=h.worksheetId,m=h.viewId,R=this.state,r=R.isLarge,i=R.status;return e.createElement("div",{className:O()("newRecordLand"),style:r?{width:"calc(100% - 64px)",maxWidth:"1200px"}:{}},i===n.NORMAL&&e.createElement(U,{onClick:function(){safeLocalStorageSetItem("NEW_RECORD_IS_LARGE",!r),a.setState({isLarge:!r})}},e.createElement("span",{"data-tip":r?_l("\u7F29\u5C0F"):_l("\u653E\u5927")},e.createElement("i",{className:"icon icon-"+(r?"worksheet_narrow":"worksheet_enlarge")}))),i!==n.NORMAL&&e.createElement("div",{className:"errorCon shadow",style:{height:window.innerHeight-130+"px"}},i===n.ERROR&&_l("\u60A8\u6CA1\u6709\u65B0\u5EFA\u8BB0\u5F55\u6743\u9650\uFF0C\u8BF7\u8054\u7CFB\u8BE5\u5E94\u7528\u7BA1\u7406\u5458"),i===n.SUCCESS&&e.createElement(D,null,e.createElement("img",{src:M(),alt:""}),e.createElement("span",{className:"status"},_l("\u521B\u5EFA\u6210\u529F")),e.createElement("div",null,e.createElement(v.ZP,{onClick:function(){return a.setState({status:n.NORMAL})}},_l("\u7EE7\u7EED\u521B\u5EFA")),e.createElement(v.ZP,{type:"ghost",className:"mLeft10",onClick:function(){return(0,T.T8)("/worksheet/"+x+(m?"/view/"+m:""))}},_l("\u67E5\u770B\u6211\u7684\u6570\u636E"))))),i===n.NORMAL&&e.createElement("div",{className:"newRecordCon",style:{minHeight:window.innerHeight-130+"px"}},e.createElement(Z,{showFillNext:!0,notDialog:!0,className:"flexColumn",appId:G,viewId:m,worksheetId:x,addType:1,visible:!0,changeWorksheetStatusCode:function(){return a.setState({status:n.ERROR})},onAdd:function(J,B){var F=B.continueAdd;F||a.setState({status:n.SUCCESS})}})))}}]),s}(e.Component))||g}}]);
