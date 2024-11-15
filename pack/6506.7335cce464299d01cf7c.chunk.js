"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[6506],{66506:(k,m,n)=>{n.r(m),n.d(m,{default:()=>w});var D=n(85315),h=n(88239),v=n(12424),u=n(86735),t=n(67294),O=n(93002),p=n(5017),C=n(88146),I=n(69711),M=n(24607),f=n(35989),A=n(91088),x=n(54208),T=n(70973),b=n(93967),R=n.n(b),B=n(70801),W=n(33867),L=(0,u.Z)([`
  width: 100%;
  height: 100%;
  background: #fff;
  .hasPendC {
    position: relative;
    top: 40%;
  }
  .hasPendCon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f8f8f8;
    margin: 0 auto;
    text-align: center;
    i {
      line-height: 100px;
      font-size: 60px;
    }
  }
`],[`
  width: 100%;
  height: 100%;
  background: #fff;
  .hasPendC {
    position: relative;
    top: 40%;
  }
  .hasPendCon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f8f8f8;
    margin: 0 auto;
    text-align: center;
    i {
      line-height: 100px;
      font-size: 60px;
    }
  }
`]),U=(0,u.Z)([`
  .saveBtn {
    width: 45%;
    border-radius: 22px !important;
    float: right;
    margin-right: 12px;
  }
`],[`
  .saveBtn {
    width: 45%;
    border-radius: 22px !important;
    float: right;
    margin-right: 12px;
  }
`]),K=(0,u.Z)([`
  width: 45%;
  background: #ffffff;
  border-radius: 22px !important;
  opacity: 1;
  border: 1px solid #dddddd;
  color: red;
  &:hover {
    color: red;
  }
  &.disable {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
`],[`
  width: 45%;
  background: #ffffff;
  border-radius: 22px !important;
  opacity: 1;
  border: 1px solid #dddddd;
  color: red;
  &:hover {
    color: red;
  }
  &.disable {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
`]),Z=p.ZP.div(L),y=p.ZP.div(U),S=p.ZP.div(K);function w(j){var g=j.match.params,o=g.appId,i=g.id,N=(0,O.Z)({disable:!1,currentData:[],loading:!0,hasPending:!1}),P=(0,v.Z)(N,2),d=P[0],E=d.disable,F=d.currentData,z=d.loading,H=d.hasPending,c=P[1];(0,t.useEffect)(function(){A.Z.getApp({appId:o},{silent:!0}).then(function(e){(0,T.g9)(e.permissionType)?f.Z.getFilterRows({pageSize:1,pageIndex:1,keyWords:"",filterControls:[],fastFilters:[],appId:o,PotralStatus:3,sortControls:[],rowId:i}).then(function(a){if(_.get(a,"data").length<=0){c({hasPending:!0,loading:!1});return}var l=_.get(a,"template.controls").map(function(s){return(0,h.default)({},s,{value:(_.get(a,"data").find(function(r){return r.rowid===i})||{})[s.controlId]})});c({currentData:l,loading:!1})}):alert(_l("\u6682\u65E0\u6743\u9650\u64CD\u4F5C"),3)})},[]);var $=function(a){f.Z.refusePassExAccount({appId:o,rowIds:a}).then(function(l){alert(_l("\u5DF2\u62D2\u7EDD\u8BE5\u7528\u6237\u7533\u8BF7")),c({disable:!0})})},G=function(a){return B.Z.confirm({title:t.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u62D2\u7EDD\u5417\uFF1F")),buttonType:"danger",description:_l("\u62D2\u7EDD\u540E\u4F1A\u4ECE\u5217\u8868\u4E2D\u5220\u9664\u6B64\u7528\u6237"),onOk:function(){$(a)},style:{width:"90%"}})};return z?t.createElement(x.Z,null):H?t.createElement(Z,null,t.createElement("div",{className:"flexColumn alignItemsCenter hasPendC"},t.createElement("div",{className:"hasPendCon"},t.createElement(W.Z,{className:"Font60 Hand Gray_bd",icon:"how_to_reg"})),t.createElement("div",{className:"TxtCenter mTop16 Font17 Bold"},_l("\u7528\u6237\u5DF2\u5BA1\u6838")))):t.createElement(y,null,t.createElement(C.Z,{show:!0,isPage:!0,disable:E,appId:o,currentData:(0,I.ql)(F.map(function(e){return e.controlId==="portal_status"?(0,h.default)({},e,{value:'["1"]'}):e})),setShow:function(){},onOk:function(a,l){var s=a.filter(function(r){return[].concat((0,D.Z)(l),["portal_role","portal_status"]).includes(r.controlId)}).map(M.jz);f.Z.auditPassExAccountToNewRole({appId:o,roleId:(s.find(function(r){return r.controlId==="portal_role"})||{}).value,rowIds:[i],newCell:s}).then(function(r){r.success?(alert(_l("\u5DF2\u901A\u8FC7\u8BE5\u7528\u6237\u7533\u8BF7")),c({disable:!0})):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})},width:"100%",okText:_l("\u540C\u610F"),title:_l("\u7528\u6237\u4FE1\u606F"),renderCancel:function(){return t.createElement(S,{className:R()("btn rejectBtn Hand",{disable:E}),onClick:function(){E||G([i])}},_l("\u62D2\u7EDD"))}}))}}}]);
