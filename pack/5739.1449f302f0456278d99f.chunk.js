"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5739],{5739:(le,N,i)=>{i.r(N),i.d(N,{default:()=>te});var W=i(88239),y=i(66215),w=i(12424),G=i(46593),U=i.n(G),X=i(33867),S=i(70801),$=i(97553),x=i(54208),D=i(26581),H=i(85105),b=i.n(H),I=i(99663),T=i(22600),B=i(49135),R=i(93196),e=i(67294),Z=i(59911),Q=i(24516),A=i(71346),F=i(79264),O=i(8736),j=i(9122),k=i(93967),M=i.n(k),se=i(35919),z=[{key:"mobilePhone",title:_l("\u7B2C\u4E8C\u4E2A\u9A8C\u8BC1\u6B65\u9AA4"),label:_l("\u624B\u673A\u77ED\u4FE1\u9A8C\u8BC1\u7801"),errorMsg:_l("\u624B\u673A")},{key:"email",title:_l("\u5907\u7528\u9A8C\u8BC1\u65B9\u5F0F"),label:_l("\u90AE\u7BB1\u9A8C\u8BC1\u7801"),errorMsg:_l("\u90AE\u7BB1"),needVerify:!0}],J=function(L){(0,R.default)(c,L);function c(v){(0,I.default)(this,c);var n=(0,B.default)(this,(c.__proto__||b()(c)).call(this,v));return n.state={},n}return(0,T.default)(c,[{key:"render",value:function(){var n=this,t=this.props,a=t.mobilePhone,s=t.email,o=t.isVerify,p=t.visible,u=a&&s&&o;return e.createElement(S.Z,{title:_l("\u5F00\u542F\u4E24\u6B65\u9A8C\u8BC1\uFF1F"),visible:p,onCancel:this.props.onCancel,showCancel:!1,okText:_l("\u5F00\u542F"),footer:null},e.createElement("div",{className:"initPassowrdDialog"},e.createElement("div",{dangerouslySetInnerHTML:{__html:_l("\u5F00\u542F\u540E\uFF0C\u8F93\u5165\u8D26\u6237\u548C\u5BC6\u7801\u540E\uFF0C\u4ECD\u9700\u8F93\u5165\u9A8C\u8BC1\u7801\uFF1B\u5F00\u542F %0\u3002",'<span class="Gray Bold">\u8BF7\u786E\u4FDD\u624B\u673A\u548C\u90AE\u7BB1\u5747\u4E3A\u53EF\u7528\u72B6\u6001</span>')}}),z.map(function(r){var m=!(r.needVerify?s&&o:a);return e.createElement("div",{className:"mTop24"},e.createElement("div",{className:"Gray_75"},r.title),e.createElement("div",{className:M()({Red:m})},m?_l("%0\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5148\u7ED1\u5B9A\u6216\u9A8C\u8BC1",r.errorMsg):r.label+"\u30FB"+n.props[r.key]))}),e.createElement("div",{className:"clearfix"},e.createElement("button",{type:"button",disabled:!u,className:M()("submitBtn ming Button Right Button--primary",{disable:!u}),onClick:function(){j.Z.confirm({onOk:n.props.onOk})}},_l("\u5F00\u542F")))))}}]),c}(e.Component),V=i(89499),K=i(86515),Y=i(30381),q=i.n(Y),_=i(96486),g=i.n(_),ee={mobilePhone:_l("\u7ED1\u5B9A\u624B\u673A\u53F7\u4F5C\u4E3A\u4F60\u7684\u767B\u5F55\u8D26\u53F7\u3002\u540C\u65F6\u4E5F\u662F\u7BA1\u7406\u4E2A\u4EBA\u8D26\u6237\u548C\u4F7F\u7528\u7CFB\u7EDF\u670D\u52A1\u7684\u91CD\u8981\u4F9D\u636E\u3002\u4E3A\u4FBF\u4E8E\u60A8\u4EE5\u540E\u7684\u64CD\u4F5C\u53CA\u8D26\u6237\u5B89\u5168\uFF0C\u8BF7\u60A8\u5C3D\u5FEB\u7ED1\u5B9A\u3002"),isTwoauthentication:_l("\u4E24\u6B65\u9A8C\u8BC1\u662F\u5728\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u540E\uFF0C\u989D\u5916\u589E\u52A0\u4E00\u9053\u5B89\u5168\u5C4F\u969C\uFF08\u624B\u673A\u77ED\u4FE1\u6216\u90AE\u7BB1\u9A8C\u8BC1\u7801\uFF09\uFF0C\u4FDD\u969C\u60A8\u7684\u5E10\u53F7\u5B89\u5168"),openWeixinLogin:_l("\u5F00\u542F\u540E\uFF0C\u767B\u5F55\u7CFB\u7EDF\u4F1A\u6536\u5230\u5FAE\u4FE1\u901A\u77E5")},te=function(L){(0,R.default)(c,L);function c(v){(0,I.default)(this,c);var n=(0,B.default)(this,(c.__proto__||b()(c)).call(this,v));return n.renderTips=function(t){return e.createElement(D.Z,{popupPlacement:"top",text:e.createElement("span",null,ee[t])},e.createElement("span",{className:"icon-novice-circle Gray_bd Hand mLeft5 Font15"}))},n.openVerify=function(t){if(t){(0,O.H)({title:_l("\u5173\u95ED\u4E24\u6B65\u9A8C\u8BC1"),callback:function(){return n.sureSettings("isTwoauthentication",0,function(){n.setState({isTwoauthentication:!1})})}});return}n.setState({visible:!0})},n.openopenWeixinLogin=function(t){n.state.isHasWeixin?n.sureSettings("openWeixinLogin",t?0:1,function(){n.setState({openWeixinLogin:!t})}):F.Z.getWeiXinServiceNumberQRCode().then(function(a){n.setState({openWXRemindDialog:!0,wxQRCode:a,wxQRCodeLoading:!1})}).catch(function(a){n.setState({openWXRemindDialog:!0})})},n.checkIsBindWX=function(){F.Z.checkWeiXinServiceNumberBind().then(function(t){t?alert(_l("\u60A8\u7684\u5E10\u53F7\u5DF2\u7ED1\u5B9A\u5FAE\u4FE1\uFF0C\u8D76\u5FEB\u53BB\u5F00\u542F\u5FAE\u4FE1\u767B\u5F55\u63D0\u9192\u5427")):alert(_l("\u60A8\u7684\u5E10\u53F7\u8FD8\u672A\u7ED1\u5B9A\u5FAE\u4FE1\uFF0C\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801"),3)})},n.openWeixinLoginDialog=function(){var t=n.state,a=t.wxQRCode,s=t.openWXRemindDialog,o=t.wxQRCodeLoading;return e.createElement(S.Z,{className:"loginMessageDialog",title:_l("\u767B\u5F55\u901A\u77E5"),visible:s,footer:null,onCancel:function(){return n.setState({openWXRemindDialog:!1})}},e.createElement("div",{className:"weixinImg"},o?e.createElement(x.Z,{className:"mTop40"}):e.createElement("img",{className:"w100 h100",src:a})),e.createElement("div",{className:"mTop8 mBottom24 Font17"},_l("\u4F7F\u7528\u5FAE\u4FE1\u626B\u7801\u7ED1\u5B9A\u8D26\u53F7\uFF0C\u5F00\u542F\u767B\u5F55\u5FAE\u4FE1\u63D0\u9192")),e.createElement($.ZP,{type:"primary",onClick:n.checkIsBindWX},_l("\u6211\u5DF2\u7ECF\u7ED1\u5B9A\u4E86\u5FAE\u4FE1\u8D26\u53F7")))},n.changeAllowMultipleDevicesUse=function(t){n.sureSettings("allowMultipleDevicesUse",t?0:1,function(){n.setState({allowMultipleDevicesUse:!t})})},n.renderEquipmentItem=function(t){var a=t.current,s=t.systemInfo,o=t.browserName,p=t.date,u=t.ip,r=t.geoCity,m=t.sessionId,h=t.platform,d=n.state,f=d.serviceListApp,E=f===void 0?[]:f,l=d.serviceListWeb,ne=l===void 0?[]:l,P=q()().diff(p,"m"),ie=(0,V.UM)({value:P,unit:"1",hideUnitStr:!1})===_l("0\u5206\u949F")?_l("1\u5206\u949F"):(0,V.UM)({value:P,unit:"1",hideUnitStr:!1});return e.createElement("div",{className:"equipmentItem Gray_9e"},e.createElement("div",{className:"flex4"},e.createElement("div",{className:"Bold Gray"},s,a&&e.createElement("span",{className:"current mLeft10"},_l("\u5F53\u524D"))),e.createElement("div",null,o)),e.createElement("div",{class:"flex2"},a?_l("\u73B0\u5728"):""+_l("%0\u524D\u4F7F\u7528",ie)),e.createElement("div",{class:"flex3 pLeft24"},u,!!r&&"\uFF08"+r+"\uFF09"),a?e.createElement("div",{className:"iconWrap bgWhite"}):e.createElement(D.Z,{popupPlacement:"right",text:e.createElement("span",null,_l("\u9000\u51FA\u8D26\u53F7")," ")},e.createElement("div",{class:"iconWrap Hand",onClick:function(){a||Z.Z.exitAccount({platform:h,sessionId:m}).then(function(ae){if(ae){alert(_l("\u9000\u51FA\u6210\u529F")),h==="app"?n.setState({serviceListApp:E.filter(function(C){return C.sessionId!==m})}):n.setState({serviceListWeb:ne.filter(function(C){return C.sessionId!==m})});return}alert(_l("\u9000\u51FA\u5931\u8D25"),2)})}},e.createElement(X.Z,{icon:"closeelement-bg-circle",className:"Font15"}))))},n.state={isTwoauthentication:!1,openWXRemindDialog:!1,allowMultipleDevicesUse:!1,openWeixinLogin:!1,serviceListApp:[],serviceListWeb:[],loading:!1},n}return(0,T.default)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var n=this;this.setState({loading:!0}),U().all([Z.Z.getAccountInfo({}),A.Z.getAccountSettings({}),Q.Z.getAccountDevices({})]).then(function(t){var a=(0,w.Z)(t,3),s=a[0],o=a[1],p=a[2],u=g().get(p,"data"),r=u.app,m=r===void 0?[]:r,h=u.web,d=h===void 0?[]:h,f=m.filter(function(l){return!l.current}),E=d.filter(function(l){return!l.current});!g().isEmpty(m.find(function(l){return l.current}))&&f.unshift(m.find(function(l){return l.current})),!g().isEmpty(d.find(function(l){return l.current}))&&E.unshift(d.find(function(l){return l.current})),n.setState({mobilePhone:s.mobilePhone,email:s.email,isVerify:s.isVerify,openWeixinLogin:o.openWeixinLogin,isTwoauthentication:o.isTwoauthentication,allowMultipleDevicesUse:o.allowMultipleDevicesUse,isHasWeixin:o.isHasWeixin,serviceListApp:f,serviceListWeb:E,loading:!1})})}},{key:"sureSettings",value:function(n,t,a){A.Z.editAccountSetting({settingType:K.Z.settingOptions[n],settingValue:t}).then(function(s){s?(alert(_l("\u8BBE\u7F6E\u6210\u529F")),g().isFunction(a)&&a()):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)}).catch()}},{key:"render",value:function(){var n=this,t=this.state,a=t.isTwoauthentication,s=t.openWeixinLogin,o=t.visible,p=t.mobilePhone,u=t.email,r=t.isVerify,m=t.openWXRemindDialog,h=t.allowMultipleDevicesUse,d=t.serviceListApp,f=t.serviceListWeb,E=t.loading;return E?e.createElement(x.Z,null):e.createElement("div",{className:"securitySettingContainer"},!md.global.Config.IsLocal&&e.createElement(e.Fragment,null,e.createElement("div",{className:"Font17 mBottom30 Bold"},_l("\u5B89\u5168")),e.createElement("div",null,!md.global.Config.IsLocal&&e.createElement("div",{className:"setRowItem"},e.createElement("div",{className:"label Gray_75"},_l("\u4E24\u6B65\u9A8C\u8BC1"),this.renderTips("isTwoauthentication")),e.createElement(y.Z,{checked:a,onClick:this.openVerify})),!md.global.Config.IsLocal&&e.createElement("div",{className:"setRowItem"},e.createElement("div",{className:"label Gray_75"},_l("\u5FAE\u4FE1\u901A\u77E5"),this.renderTips("openWeixinLogin")),e.createElement(y.Z,{checked:s,onClick:this.openopenWeixinLogin})))),e.createElement("div",{className:"Font17 mTop30 Bold"},_l("\u8BBE\u5907\u7BA1\u7406")),!md.global.Config.IsLocal&&e.createElement("div",{className:"setRowItem loginSameTime"},e.createElement("div",{className:"label Gray_75"},_l("\u5141\u8BB8\u540C\u65F6\u767B\u5F55")),e.createElement("div",{className:"flexColumn"},e.createElement("div",{className:"Gray mBottom14"},_l("\u5173\u95ED\u540E\u4E0D\u5141\u8BB8\u5728\u540C\u7C7B\u578B\u8BBE\u5907\uFF08\u7F51\u9875\u7AEF\u3001\u79FB\u52A8\u5BA2\u6237\u7AEF\uFF09\u4E0A\u540C\u65F6\u767B\u5F55")),e.createElement(y.Z,{checked:h,onClick:this.changeAllowMultipleDevicesUse,style:{width:44}}))),e.createElement("div",{className:"equipmentInfo"},e.createElement("div",{className:"label Gray_75"},_l("\u767B\u5F55\u8BBE\u5907\u5217\u8868")),e.createElement("div",{className:"flexColumn flex"},e.createElement("div",{className:"Gray"},_l("\u60A8\u5F53\u524D\u5DF2\u5728\u4EE5\u4E0B\u8BBE\u5907\u4E0A\u767B\u5F55")),!g().isEmpty(f)&&e.createElement("div",{className:"Font14 mTop30 mBottom8 Bold"},_l("\u7F51\u9875\u7AEF")),!g().isEmpty(f)&&e.createElement("div",{className:"Gray_9e mBottom15"},_l("\u5305\u62EC\u684C\u9762\u7AEF\u548C\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\uFF08\u4F01\u4E1A\u5FAE\u4FE1\u3001\u9489\u9489\u3001\u98DE\u4E66)\uFF0C\u684C\u9762\u5BA2\u6237\u7AEF")),f.map(function(l){return n.renderEquipmentItem((0,W.default)({},l,{platform:"web"}))}),!g().isEmpty(d)&&e.createElement("div",{className:"Font14 mTop30 mBottom15 Bold"},_l("\u79FB\u52A8\u5BA2\u6237\u7AEF")),d.map(function(l){return n.renderEquipmentItem((0,W.default)({},l,{platform:"app"}))}))),o&&e.createElement(J,{mobilePhone:p,email:u,isVerify:r,visible:o,onOk:function(){n.sureSettings("isTwoauthentication",1,function(){n.setState({isTwoauthentication:!0,visible:!1})})},onCancel:function(){return n.setState({visible:!1})}}),m&&this.openWeixinLoginDialog())}}]),c}(e.Component)}}]);