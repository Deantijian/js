"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[1033],{1033:(T,i,t)=>{t.r(i),t.d(i,{default:()=>F});var h=t(85105),f=t.n(h),N=t(99663),p=t(22600),u=t(49135),E=t(93196),e=t(67294),I=t(55171),g=t.n(I),C=t(54208),y=t(25273),D=t(44036),S=t(62023),F=function(H){(0,E.default)(n,H);function n(r){(0,N.default)(this,n);var l=(0,u.default)(this,(n.__proto__||f()(n)).call(this,r));l.goIndex=function(){location.href="/"};var a=r.match.params,s=a.selectNodeId,o=a.processId;return l.state={apiData:{data:{},formatData:[]},loading:!0,errorState:!s||!o},l}return(0,p.default)(n,[{key:"componentDidMount",value:function(){var l=this,a=this.props.match.params,s=a.processId,o=a.currentNodeId,m=a.selectNodeId;s&&m&&S.Z.getWebHookData({selectNodeId:m,nodeId:o,processId:s}).then(function(c){l.setState({apiData:c,loading:!1})})}},{key:"render",value:function(){var l=this.state,a=l.apiData,s=l.loading,o=l.errorState,m=a.app,c=a.process,W=a.data,x=a.formatData;return o?e.createElement(D.Z,{text:_l("\u53C2\u6570\u9519\u8BEF")}):s?e.createElement(C.Z,null):e.createElement("div",{className:"c-workflowWebHookCheatSheet"},e.createElement("header",{onClick:this.goIndex}),e.createElement("div",{className:"detail"},e.createElement("div",{className:"header"},e.createElement("div",{className:"title Font22"},_l("\u89E6\u53D1Webhook")),e.createElement("div",{className:"source"},e.createElement("div",{className:"flow Font15 Gray_75"},_l("\u6D41\u7A0B: %0",c.name)),e.createElement("div",{className:"sheet Font15 Gray_75"},_l("\u5DE5\u4F5C\u8868: %0",m.name)))),e.createElement(y.Z,{style:{height:750}},e.createElement("div",{className:"content"},e.createElement("div",{className:"title Font17"},_l("\u5B57\u6BB5\u5BF9\u7167\u8868")),e.createElement("div",{className:"explain"},_l("\u5C06\u5411\u5BF9\u5E94\u7684HTTP\u5730\u5740\uFF0C\u4EE5POST\u65B9\u5F0F\u53D1\u9001JSON\u683C\u5F0F\u6570\u636E")),e.createElement("ul",null,e.createElement("li",{className:"header Font14"},e.createElement("div",{className:"item"},_l("\u5B57\u6BB5\u540D\u79F0")),e.createElement("div",{className:"item"},_l("\u6570\u636E\u7C7B\u578B")),e.createElement("div",{className:"item"},_l("API Code"))),x.map(function(d,P){var Z=d.name,v=d.type,$=d.code;return e.createElement("li",{key:P,className:v},e.createElement("div",{className:"item"},Z),e.createElement("div",{className:"item"},v),e.createElement("div",{className:"item"},$))}))),e.createElement("div",{className:"jsonExample"},e.createElement(g(),{src:W,theme:"apathy:inverted",name:null})))))}}]),n}(e.Component)}}]);