"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[1013],{11013:(H,f,e)=>{e.r(f),e.d(f,{default:()=>X});var C=e(85105),g=e.n(C),v=e(99663),p=e(22600),u=e(49135),y=e(93196),s=e(67294),N=e(86735),w=e(1084),D=e(5017),h=e(88239),x=e(46593),m=e.n(x),I=e(51474),E=e(52945),K=e.n(E);const L={getShareNode:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Share","GetShareNode",n,a)},getShareFolder:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Share","GetShareFolder",n,a)},getShareLocalAttachment:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Share","GetShareLocalAttachment",n,a)},shareCheckLogin:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return a.ajaxOptions=K()({},a.ajaxOptions,{type:"GET"}),mdyAPI("Share","ShareCheckLogin",n,a)}};var T=e(31742),j=e(76345),M=e(45231),P=e(17563),Z=e(96486),U=e.n(Z);function S(){window.nativeAlert(_l("\u8BF7\u5148\u767B\u5F55")),location.href=md.global.Config.WebUrl+"login?ReturnUrl="+encodeURIComponent(window.location.href.replace("checked=login",""))}function F(){var o=P.parse(location.search.slice(1,location.search.length));return/\/apps\/kcshare\/(\w+)/.test(location.pathname)?{type:"kc_share",id:location.pathname.match(/.*\/apps\/kcshare\/(\w+)/)[1]}:/.*\/recordfile\/(\w+)\/(\d+)/.test(location.pathname.replace(/^\/portal/,""))?{type:"record_share",id:location.pathname.match(/.*\/recordfile\/(\w+)\/(\d+)/)[1],getType:location.pathname.match(/.*\/recordfile\/(\w+)\/(\d+)/)[2]}:/\/recordfile\/\w+/.test(location.pathname.replace(/^\/portal/,""))?{type:"record_share",id:location.pathname.match(/.*\/recordfile\/(\w+)/)[1]}:o.id?{type:"kc",id:o.id}:{}}function R(){var o=F(),n=o.type,a=o.id,r=o.getType;if(!a)return m().reject();switch(n){case"kc_share":return L.getShareNode({shareId:a}).then(function(t){return t.actionResult===2?(S(),m().reject()):(0,h.default)({},t,{node:(0,h.default)({},t.node,{isKc:!0})})});case"kc":return I.Z.getNodeById(a).then(function(t){return{node:(0,h.default)({},t,{isKc:!0})}});case"record_share":if(!U().get(md,"global.Account.accountId")){S();return}return M.Z.getAttachmentDetail({attachmentShareId:a,getType:r?Number(r):void 0}).then(function(t){if(t.resultCode===1){var l=(0,T.v)(j.RX.recordAttachmentSwitch,t.switchPermits,t.attachmentShareModel.viewId);return{node:t.attachmentDetail,allowDownload:l}}else return}).catch(function(t){console.log(t),alert(_l("\u83B7\u53D6\u9644\u4EF6\u8BE6\u60C5\u5931\u8D25"),2)});default:return m().reject()}}var z=e(54208),W=e(44388),A=e(6073),G=(0,N.Z)([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #333;
  font-size: 17px;
  > i {
    font-size: 66px;
    color: #f78c00;
  }
`],[`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #333;
  font-size: 17px;
  > i {
    font-size: 66px;
    color: #f78c00;
  }
`]),O=D.ZP.div(G),B=function(o){(0,y.default)(n,o);function n(){var a,r,t,l;(0,v.default)(this,n);for(var i=arguments.length,d=Array(i),c=0;c<i;c++)d[c]=arguments[c];return l=(r=(t=(0,u.default)(this,(a=n.__proto__||g()(n)).call.apply(a,[this].concat(d))),t),t.state={node:null,currentAccountId:null,loading:!0},t._isMounted=!1,r),(0,u.default)(t,l)}return(0,p.default)(n,[{key:"componentDidMount",value:function(){var r=this;this._isMounted=!0,R().then(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=t.node,i=t.allowDownload,d=i===void 0?!0:i;if(!l){r.setState({loading:!1});return}l.type===W.QZ.FOLDER&&(l=null),r._isMounted&&r.setState({node:l,allowDownload:d,loading:!1})}).catch(function(t){r.setState({loading:!1})})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var r=this.state,t=r.loading,l=r.allowDownload;return!A.Z||t?s.createElement(z.Z,{size:"big"}):this.state.node?s.createElement(A.Z,{showTitle:!0,options:{attachments:[this.state.node],callFrom:this.state.node.isKc?"kc":"player",fromType:6,index:0,hideFunctions:l?[]:["download","share","saveToKnowlege"]}}):s.createElement(O,null,s.createElement("i",{className:"icon-task-folder-message"}),s.createElement("div",{className:"mTop20"},_l("\u5F53\u524D\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u60A8\u6CA1\u6709\u6743\u9650\u67E5\u770B\u6B64\u6587\u4EF6")))}}]),n}(s.Component);const Q=(0,w.Z)(B,{allowNotLogin:!0});var V=e(15041),X=function(o){(0,y.default)(n,o);function n(){return(0,v.default)(this,n),(0,u.default)(this,(n.__proto__||g()(n)).apply(this,arguments))}return(0,p.default)(n,[{key:"componentDidMount",value:function(){$("html").addClass("AppKc AppKcShare")}},{key:"componentWillUnmount",value:function(){$("html").removeClass("AppKc AppKcShare")}},{key:"render",value:function(){return s.createElement(Q,null)}}]),n}(s.Component)}}]);
