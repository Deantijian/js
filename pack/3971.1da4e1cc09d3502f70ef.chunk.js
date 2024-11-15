"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3971],{23971:(q,E,a)=>{a.r(E),a.d(E,{default:()=>F});var T=a(70801),M=a(34279),ee=a.n(M),v=a(64749),I=a(14338),A=a(66215),r=a(12424),s=a(86735),e=a(67294),i=a(46016),c=a(5017),N=a(96486),g=a.n(N),B=(0,s.Z)([`
  border-bottom: 1px solid #eaeaea;
  margin: 20px 0;
`],[`
  border-bottom: 1px solid #eaeaea;
  margin: 20px 0;
`]),R=(0,s.Z)([`
  width: 70px;
  height: 28px;
  text-align: center;
  line-height: 26px;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid #2196f3;
  margin-top: 20px;
  cursor: pointer;
  color: #2196f3;
`],[`
  width: 70px;
  height: 28px;
  text-align: center;
  line-height: 26px;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid #2196f3;
  margin-top: 20px;
  cursor: pointer;
  color: #2196f3;
`]),Z=(0,s.Z)([`
  .ant-select-selection-item {
    .companyName {
      flex: 0 !important;
    }
  }
`],[`
  .ant-select-selection-item {
    .companyName {
      flex: 0 !important;
    }
  }
`]),W=c.ZP.div(B),K=c.ZP.div(R),U=c.ZP.div(Z);function F(te){var k=(0,e.useState)(md.global.SysSettings.templateLibraryTypes),f=(0,r.Z)(k,2),o=f[0],G=f[1],w=(0,e.useState)(md.global.SysSettings.hideTemplateLibrary),y=(0,r.Z)(w,2),S=y[0],z=y[1],H=(0,e.useState)(!1),P=(0,r.Z)(H,2),V=P[0],m=P[1],J=(0,e.useState)([]),h=(0,r.Z)(J,2),x=h[0],Q=h[1],X=(0,e.useState)({}),b=(0,r.Z)(X,2),L=b[0],O=b[1],Y=(0,e.useState)({}),C=(0,r.Z)(Y,2),d=C[0],D=C[1];(0,e.useEffect)(function(){o==="2"&&u()},[]);var p=function(n,l){i.Z.editSysSettings({settings:n}).then(function(_){_&&(alert(_l("\u4FEE\u6539\u6210\u529F"),1),l&&l())})},j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";i.Z.getProjects({keywords:n,pageSize:20}).then(function(l){Q(l)})},u=function(){md.global.SysSettings.templateLibraryAuditProjectId&&i.Z.getProject({projectId:md.global.SysSettings.templateLibraryAuditProjectId}).then(function(n){O(n),D(n)})},$=function(n){var l=g().find(x,function(_){return _.projectId===n})||{};D(l)};return e.createElement("div",{className:"privateCardWrap flexColumn"},e.createElement("div",{className:"Font17 bold mBottom8"},_l("\u5E94\u7528\u5E93")),e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex flexColumn"},e.createElement("div",{className:"Font14 bold mBottom8"},_l("\u542F\u7528\u5E94\u7528\u5E93"))),e.createElement(A.Z,{checked:!S,onClick:function(n){p({hideTemplateLibrary:n},function(){u(),md.global.SysSettings.hideTemplateLibrary=n,z(n)})}})),!S&&e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow"},[{text:_l("\u81EA\u5EFA\u5E94\u7528\u5E93"),value:"2"},{text:_l("\u4F7F\u7528\u5B98\u65B9\u5E94\u7528\u5E93"),value:"1"}].map(function(t,n){return e.createElement("div",{className:"mRight30"},e.createElement(I.Z,{key:n,text:t.text,checked:o===t.value,onClick:function(){t.value!==o&&(t.value==="2"&&u(),p({templateLibraryTypes:t.value},function(){md.global.SysSettings.templateLibraryTypes=t.value,G(t.value)}))}}))})),o==="2"&&e.createElement(e.Fragment,null,e.createElement(W,null),e.createElement("div",{className:"Font14 bold mBottom20"},_l("\u5E94\u7528\u53D1\u5E03\u5BA1\u6279\u7EC4\u7EC7")),e.createElement("div",null,e.createElement("span",{className:"Gray_75 mRight40"},_l("\u5BA1\u6279\u7EC4\u7EC7")),e.createElement("span",null,L.companyName),e.createElement("span",{className:"Gray_9e mLeft10"},L.projectCode)),e.createElement(K,{onClick:function(){j(),m(!0)}},_l("\u8BBE\u7F6E")))),e.createElement(T.Z,{className:"setAprrovalOrg",dialogBoxID:"setAprrovalOrg",title:_l("\u8BBE\u7F6E\u5BA1\u6279\u7EC4\u7EC7"),visible:V,okText:_l("\u4FDD\u5B58"),onCancel:function(){return m(!1)},onOk:function(){p({templateLibraryAuditProjectId:d.projectId},function(){md.global.SysSettings.templateLibraryAuditProjectId=d.projectId,m(!1),O(d)})}},e.createElement(U,null,e.createElement("div",{className:"Font14 mBottom10"},_l("\u9009\u62E9\u7EC4\u7EC7")),e.createElement(v.default,{style:{width:"100%"},showSearch:!0,placeholder:"\u8BF7\u9009\u62E9",filterOption:!1,allowClear:!0,onChange:$,onSearch:g().throttle(function(t){j(t)},200)},x.map(function(t){return e.createElement(v.default.Option,{key:t.projectId,value:t.projectId,label:t.companyName},e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex companyName mRight5"},t.companyName),e.createElement("div",{className:"Gray_9e"},t.projectCode)))})))))}}}]);
