"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5739],{35919:()=>{},5739:(ae,S,i)=>{i.r(S),i.d(S,{default:()=>g});var I=i(88239),M=i(66215),X=i(12424),j=i(46593),k=i.n(j),H=i(33867),A=i(69288),Q=i(42185),O=i(54208),L=i(70264),o=i(85105),R=i.n(o),U=i(99663),w=i(22600),Z=i(49135),V=i(93196),e=i(67294),F=i(59911),P=i(24516),K=i(71346),B=i(79264),z=i(8736),J=i(9122),Y=i(93967),N=i.n(Y),q=i(35919),ee=[{key:"mobilePhone",title:_l("\u7B2C\u4E8C\u4E2A\u9A8C\u8BC1\u6B65\u9AA4"),label:_l("\u624B\u673A\u77ED\u4FE1\u9A8C\u8BC1\u7801"),errorMsg:_l("\u624B\u673A")},{key:"email",title:_l("\u5907\u7528\u9A8C\u8BC1\u65B9\u5F0F"),label:_l("\u90AE\u7BB1\u9A8C\u8BC1\u7801"),errorMsg:_l("\u90AE\u7BB1"),needVerify:!0}],$=function(d){(0,V.default)(c,d);function c(p){(0,U.default)(this,c);var a=(0,Z.default)(this,(c.__proto__||R()(c)).call(this,p));return a.state={},a}return(0,w.default)(c,[{key:"render",value:function(){var a=this,n=this.props,l=n.mobilePhone,v=n.email,m=n.isVerify,E=n.visible,C=l&&v&&m;return e.createElement(A.Z,{title:_l("\u5F00\u542F\u4E24\u6B65\u9A8C\u8BC1\uFF1F"),visible:E,onCancel:this.props.onCancel,showCancel:!1,okText:_l("\u5F00\u542F"),footer:null},e.createElement("div",{className:"initPassowrdDialog"},e.createElement("div",{dangerouslySetInnerHTML:{__html:_l("\u5F00\u542F\u540E\uFF0C\u8F93\u5165\u8D26\u6237\u548C\u5BC6\u7801\u540E\uFF0C\u4ECD\u9700\u8F93\u5165\u9A8C\u8BC1\u7801\uFF1B\u5F00\u542F %0\u3002",'<span class="Gray Bold">\u8BF7\u786E\u4FDD\u624B\u673A\u548C\u90AE\u7BB1\u5747\u4E3A\u53EF\u7528\u72B6\u6001</span>')}}),ee.map(function(u){var r=!(u.needVerify?v&&m:l);return e.createElement("div",{className:"mTop24"},e.createElement("div",{className:"Gray_75"},u.title),e.createElement("div",{className:N()({Red:r})},r?_l("%0\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5148\u7ED1\u5B9A\u6216\u9A8C\u8BC1",u.errorMsg):u.label+"\u30FB"+a.props[u.key]))}),e.createElement("div",{className:"clearfix"},e.createElement("button",{type:"button",disabled:!C,className:N()("submitBtn ming Button Right Button--primary",{disable:!C}),onClick:function(){J.Z.confirm({onOk:a.props.onOk})}},_l("\u5F00\u542F")))))}}]),c}(e.Component),G=i(89499),te=i(86515),x=i(30381),h=i.n(x),W=i(96486),t=i.n(W),s={mobilePhone:_l("\u7ED1\u5B9A\u624B\u673A\u53F7\u4F5C\u4E3A\u4F60\u7684\u767B\u5F55\u8D26\u53F7\u3002\u540C\u65F6\u4E5F\u662F\u7BA1\u7406\u4E2A\u4EBA\u8D26\u6237\u548C\u4F7F\u7528\u7CFB\u7EDF\u670D\u52A1\u7684\u91CD\u8981\u4F9D\u636E\u3002\u4E3A\u4FBF\u4E8E\u60A8\u4EE5\u540E\u7684\u64CD\u4F5C\u53CA\u8D26\u6237\u5B89\u5168\uFF0C\u8BF7\u60A8\u5C3D\u5FEB\u7ED1\u5B9A\u3002"),isTwoauthentication:_l("\u4E24\u6B65\u9A8C\u8BC1\u662F\u5728\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u540E\uFF0C\u989D\u5916\u589E\u52A0\u4E00\u9053\u5B89\u5168\u5C4F\u969C\uFF08\u624B\u673A\u77ED\u4FE1\u6216\u90AE\u7BB1\u9A8C\u8BC1\u7801\uFF09\uFF0C\u4FDD\u969C\u60A8\u7684\u5E10\u53F7\u5B89\u5168"),openWeixinLogin:_l("\u5F00\u542F\u540E\uFF0C\u767B\u5F55\u7CFB\u7EDF\u4F1A\u6536\u5230\u5FAE\u4FE1\u901A\u77E5")},g=function(d){(0,V.default)(c,d);function c(p){(0,U.default)(this,c);var a=(0,Z.default)(this,(c.__proto__||R()(c)).call(this,p));return a.renderTips=function(n){return e.createElement(L.Z,{popupPlacement:"top",text:e.createElement("span",null,s[n])},e.createElement("span",{className:"icon-novice-circle Gray_bd Hand mLeft5 Font15"}))},a.openVerify=function(n){if(n){(0,z.H)({title:_l("\u5173\u95ED\u4E24\u6B65\u9A8C\u8BC1"),callback:function(){return a.sureSettings("isTwoauthentication",0,function(){a.setState({isTwoauthentication:!1})})}});return}a.setState({visible:!0})},a.openopenWeixinLogin=function(n){a.state.isHasWeixin?a.sureSettings("openWeixinLogin",n?0:1,function(){a.setState({openWeixinLogin:!n})}):B.Z.getWeiXinServiceNumberQRCode().then(function(l){a.setState({openWXRemindDialog:!0,wxQRCode:l,wxQRCodeLoading:!1})}).catch(function(l){a.setState({openWXRemindDialog:!0})})},a.checkIsBindWX=function(){B.Z.checkWeiXinServiceNumberBind().then(function(n){n?alert(_l("\u60A8\u7684\u5E10\u53F7\u5DF2\u7ED1\u5B9A\u5FAE\u4FE1\uFF0C\u8D76\u5FEB\u53BB\u5F00\u542F\u5FAE\u4FE1\u767B\u5F55\u63D0\u9192\u5427")):alert(_l("\u60A8\u7684\u5E10\u53F7\u8FD8\u672A\u7ED1\u5B9A\u5FAE\u4FE1\uFF0C\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801"),3)})},a.openWeixinLoginDialog=function(){var n=a.state,l=n.wxQRCode,v=n.openWXRemindDialog,m=n.wxQRCodeLoading;return e.createElement(A.Z,{className:"loginMessageDialog",title:_l("\u767B\u5F55\u901A\u77E5"),visible:v,footer:null,onCancel:function(){return a.setState({openWXRemindDialog:!1})}},e.createElement("div",{className:"weixinImg"},m?e.createElement(O.Z,{className:"mTop40"}):e.createElement("img",{className:"w100 h100",src:l})),e.createElement("div",{className:"mTop8 mBottom24 Font17"},_l("\u4F7F\u7528\u5FAE\u4FE1\u626B\u7801\u7ED1\u5B9A\u8D26\u53F7\uFF0C\u5F00\u542F\u767B\u5F55\u5FAE\u4FE1\u63D0\u9192")),e.createElement(Q.ZP,{type:"primary",onClick:a.checkIsBindWX},_l("\u6211\u5DF2\u7ECF\u7ED1\u5B9A\u4E86\u5FAE\u4FE1\u8D26\u53F7")))},a.changeAllowMultipleDevicesUse=function(n){a.sureSettings("allowMultipleDevicesUse",n?0:1,function(){a.setState({allowMultipleDevicesUse:!n})})},a.renderEquipmentItem=function(n){var l=n.current,v=n.systemInfo,m=n.browserName,E=n.date,C=n.ip,u=n.geoCity,r=n.sessionId,b=n.platform,y=a.state,D=y.serviceListApp,T=D===void 0?[]:D,f=y.serviceListWeb,le=f===void 0?[]:f,ie=h()().diff(E,"m"),oe=(0,G.UM)({value:ie,unit:"1",hideUnitStr:!1})===_l("0\u5206\u949F")?_l("1\u5206\u949F"):(0,G.UM)({value:ie,unit:"1",hideUnitStr:!1});return e.createElement("div",{className:"equipmentItem Gray_9e"},e.createElement("div",{className:"flex4"},e.createElement("div",{className:"Bold Gray"},v,l&&e.createElement("span",{className:"current mLeft10"},_l("\u5F53\u524D"))),e.createElement("div",null,m)),e.createElement("div",{class:"flex2"},l?_l("\u73B0\u5728"):""+_l("%0\u524D\u4F7F\u7528",oe)),e.createElement("div",{class:"flex3 pLeft24"},C,!!u&&"\uFF08"+u+"\uFF09"),l?e.createElement("div",{className:"iconWrap bgWhite"}):e.createElement(L.Z,{popupPlacement:"right",text:e.createElement("span",null,_l("\u9000\u51FA\u8D26\u53F7")," ")},e.createElement("div",{class:"iconWrap Hand",onClick:function(){l||F.Z.exitAccount({platform:b,sessionId:r}).then(function(se){if(se){alert(_l("\u9000\u51FA\u6210\u529F")),b==="app"?a.setState({serviceListApp:T.filter(function(ne){return ne.sessionId!==r})}):a.setState({serviceListWeb:le.filter(function(ne){return ne.sessionId!==r})});return}alert(_l("\u9000\u51FA\u5931\u8D25"),2)})}},e.createElement(H.Z,{icon:"closeelement-bg-circle",className:"Font15"}))))},a.state={isTwoauthentication:!1,openWXRemindDialog:!1,allowMultipleDevicesUse:!1,openWeixinLogin:!1,serviceListApp:[],serviceListWeb:[],loading:!1},a}return(0,w.default)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var a=this;this.setState({loading:!0}),k().all([F.Z.getAccountInfo({}),K.Z.getAccountSettings({}),P.Z.getAccountDevices({})]).then(function(n){var l=(0,X.Z)(n,3),v=l[0],m=l[1],E=l[2],C=t().get(E,"data"),u=C.app,r=u===void 0?[]:u,b=C.web,y=b===void 0?[]:b,D=r.filter(function(f){return!f.current}),T=y.filter(function(f){return!f.current});!t().isEmpty(r.find(function(f){return f.current}))&&D.unshift(r.find(function(f){return f.current})),!t().isEmpty(y.find(function(f){return f.current}))&&T.unshift(y.find(function(f){return f.current})),a.setState({mobilePhone:v.mobilePhone,email:v.email,isVerify:v.isVerify,openWeixinLogin:m.openWeixinLogin,isTwoauthentication:m.isTwoauthentication,allowMultipleDevicesUse:m.allowMultipleDevicesUse,isHasWeixin:m.isHasWeixin,serviceListApp:D,serviceListWeb:T,loading:!1})})}},{key:"sureSettings",value:function(a,n,l){K.Z.editAccountSetting({settingType:te.Z.settingOptions[a],settingValue:n}).then(function(v){v?(alert(_l("\u8BBE\u7F6E\u6210\u529F")),t().isFunction(l)&&l()):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)}).catch()}},{key:"render",value:function(){var a=this,n=this.state,l=n.isTwoauthentication,v=n.openWeixinLogin,m=n.visible,E=n.mobilePhone,C=n.email,u=n.isVerify,r=n.openWXRemindDialog,b=n.allowMultipleDevicesUse,y=n.serviceListApp,D=n.serviceListWeb,T=n.loading;return T?e.createElement(O.Z,null):e.createElement("div",{className:"securitySettingContainer"},!md.global.Config.IsLocal&&e.createElement(e.Fragment,null,e.createElement("div",{className:"Font17 mBottom30 Bold"},_l("\u5B89\u5168")),e.createElement("div",null,!md.global.Config.IsLocal&&e.createElement("div",{className:"setRowItem"},e.createElement("div",{className:"label Gray_75"},_l("\u4E24\u6B65\u9A8C\u8BC1"),this.renderTips("isTwoauthentication")),e.createElement(M.Z,{checked:l,onClick:this.openVerify})),!md.global.Config.IsLocal&&e.createElement("div",{className:"setRowItem"},e.createElement("div",{className:"label Gray_75"},_l("\u5FAE\u4FE1\u901A\u77E5"),this.renderTips("openWeixinLogin")),e.createElement(M.Z,{checked:v,onClick:this.openopenWeixinLogin})))),e.createElement("div",{className:"Font17 mTop30 Bold"},_l("\u8BBE\u5907\u7BA1\u7406")),!md.global.Config.IsLocal&&e.createElement("div",{className:"setRowItem loginSameTime"},e.createElement("div",{className:"label Gray_75"},_l("\u5141\u8BB8\u540C\u65F6\u767B\u5F55")),e.createElement("div",{className:"flexColumn"},e.createElement("div",{className:"Gray mBottom14"},_l("\u5173\u95ED\u540E\u4E0D\u5141\u8BB8\u5728\u540C\u7C7B\u578B\u8BBE\u5907\uFF08\u7F51\u9875\u7AEF\u3001\u79FB\u52A8\u5BA2\u6237\u7AEF\uFF09\u4E0A\u540C\u65F6\u767B\u5F55")),e.createElement(M.Z,{checked:b,onClick:this.changeAllowMultipleDevicesUse,style:{width:44}}))),e.createElement("div",{className:"equipmentInfo"},e.createElement("div",{className:"label Gray_75"},_l("\u767B\u5F55\u8BBE\u5907\u5217\u8868")),e.createElement("div",{className:"flexColumn flex"},e.createElement("div",{className:"Gray"},_l("\u60A8\u5F53\u524D\u5DF2\u5728\u4EE5\u4E0B\u8BBE\u5907\u4E0A\u767B\u5F55")),!t().isEmpty(D)&&e.createElement("div",{className:"Font14 mTop30 mBottom8 Bold"},_l("\u7F51\u9875\u7AEF")),!t().isEmpty(D)&&e.createElement("div",{className:"Gray_9e mBottom15"},_l("\u5305\u62EC\u684C\u9762\u7AEF\u548C\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\uFF08\u4F01\u4E1A\u5FAE\u4FE1\u3001\u9489\u9489\u3001\u98DE\u4E66)\uFF0C\u684C\u9762\u5BA2\u6237\u7AEF")),D.map(function(f){return a.renderEquipmentItem((0,I.default)({},f,{platform:"web"}))}),!t().isEmpty(y)&&e.createElement("div",{className:"Font14 mTop30 mBottom15 Bold"},_l("\u79FB\u52A8\u5BA2\u6237\u7AEF")),y.map(function(f){return a.renderEquipmentItem((0,I.default)({},f,{platform:"app"}))}))),m&&e.createElement($,{mobilePhone:E,email:C,isVerify:u,visible:m,onOk:function(){a.sureSettings("isTwoauthentication",1,function(){a.setState({isTwoauthentication:!0,visible:!1})})},onCancel:function(){return a.setState({visible:!1})}}),r&&this.openWeixinLoginDialog())}}]),c}(e.Component)},8736:(ae,S,i)=>{i.d(S,{H:()=>te});var I=i(69288),M=i(72557),X=i(88106),j=i(85105),k=i.n(j),H=i(99663),A=i(22600),Q=i(49135),O=i(93196),L=i(86735),o=i(67294),R=i(14260),U=i.n(R),w=i(60300),Z=i.n(w),V=i(1952),e=i(59911),F=i(86559),P=i(66344),K=i(15577),B=i(71893),z=(0,L.Z)([`
  width: 100%;
  line-height: 38px;
  height: 38px;
  background-color: #f5f5f5;
  border-radius: 3px;
  padding-left: 10px;
  border: 0px;
  padding-right: 40px;
  box-sizing: border-box;
`],[`
  width: 100%;
  line-height: 38px;
  height: 38px;
  background-color: #f5f5f5;
  border-radius: 3px;
  padding-left: 10px;
  border: 0px;
  padding-right: 40px;
  box-sizing: border-box;
`]),J=(0,L.Z)([`
  margin-bottom: 20px;
  .iti {
    width: 100%;
  }
`],[`
  margin-bottom: 20px;
  .iti {
    width: 100%;
  }
`]),Y=(0,L.Z)([`
  .stepName {
    justify-content: space-between;
  }
  .stepline {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: `,`;
    position: relative;
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      position: absolute;
      top: -4px;
      border: `,`;
      background-color: `,`;
    }
    &:first-child {
      margin-left: 8px;
      background-color: #1e88e5;
      .dot {
        left: 15px;
        border: 2px solid #1e88e5;
        background-color: #1e88e5;
      }
    }
    &:nth-child(2) {
      margin-right: 8px;
      .dot {
        right: 15px;
      }
    }
  }
`],[`
  .stepName {
    justify-content: space-between;
  }
  .stepline {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: `,`;
    position: relative;
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      position: absolute;
      top: -4px;
      border: `,`;
      background-color: `,`;
    }
    &:first-child {
      margin-left: 8px;
      background-color: #1e88e5;
      .dot {
        left: 15px;
        border: 2px solid #1e88e5;
        background-color: #1e88e5;
      }
    }
    &:nth-child(2) {
      margin-right: 8px;
      .dot {
        right: 15px;
      }
    }
  }
`]),N=B.ZP.input(z),q=B.ZP.div(J),ee=B.ZP.div(Y,function(x){var h=x.step;return h===1?" #ececec":"#1e88e5"},function(x){var h=x.step;return h===1?"2px solid #ececec":"2px solid #1e88e5"},function(x){var h=x.step;return h===1?" #ececec":"#1e88e5"}),$=null,G=function(x){(0,O.default)(h,x);function h(W){(0,H.default)(this,h);var t=(0,Q.default)(this,(h.__proto__||k()(h)).call(this,W));return t.changeValue=function(s,g){var d=s.target.value;t.setState((0,X.default)({},g,d.trim()))},t.clickNext=function(){t.setState({nextBtnDisabled:!0});var s=t.props,g=s.showStep,d=s.callback,c=d===void 0?function(){}:d,p=s.onCancel,a=p===void 0?function(){}:p,n=t.state.password;(0,K.Gv)({checkNeedAuth:!1,ignoreAlert:!1,customActionName:"checkAccount",password:n,success:function(){t.setState({nextBtnDisabled:!1}),g?t.setState({step:2},function(){setTimeout(function(){t.initTel()},200)}):(c({password:n}),a())},fail:function(){t.setState({nextBtnDisabled:!1})}})},t.initTel=function(){t.mobile&&(t.iti&&t.iti.destroy(),t.iti=U()(t.mobile,{loadUtils:"",initialCountry:_.get(md,"global.Config.DefaultConfig.initialCountry")||"cn",preferredCountries:_.get(md,"global.Config.DefaultConfig.preferredCountries")||["cn"],utilsScript:Z(),separateDialCode:!0,showSelectedDialCode:!0}))},t.validate=function(){var s=t.state.email,g=t.props.type;if(g==="email"){if(!s){alert(_l("\u8BF7\u8F93\u5165\u90AE\u7BB1"),3),t.email.focus();return}if(!P.Z.isEmail(s)){alert(_l("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1"),3),t.email.focus();return}}else{var d=t.iti.isValidNumber();if(!d){alert(_l("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"),3),t.mobile.focus();return}}return!0},t.sendChangeAccountVerifyCode=function(){if(t.validate()){var s=t.props.type,g=t.state.email,d=t,c=function(a){a.ret===0&&(d.setState({sendCodeLoading:!0,sendCodeTxt:_l("\u53D1\u9001\u4E2D...")}),e.Z.sendVerifyCode({account:s==="email"?g:d.iti.getNumber(),ticket:a.ticket,randStr:a.randstr,captchaType:md.global.getCaptchaType()}).then(function(n){if(n===1)alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u6210\u529F"),1),d.countdown();else{var l=s==="email"?_l("\u90AE\u7BB1"):_l("\u624B\u673A\u53F7");n===2?alert(_l("\u53D1\u9001\u5931\u8D25\uFF0C\u65B0%0\u4E0E\u73B0\u6709%1\u4E00\u81F4",l,l),2):n===8?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):alert(n===9?_l("\u6B64%0\u5DF2\u88AB\u5176\u5B83\u5E10\u53F7\u7ED1\u5B9A",l):_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25"),2),d.setState({sendCodeLoading:!1,sendCodeTxt:_l("\u83B7\u53D6\u9A8C\u8BC1\u7801")})}}))};md.global.getCaptchaType()===1?new F.Z(c):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),c).show()}},t.countdown=function(){var s=30;$=setInterval(function(){s<=0?(t.setState({sendCodeLoading:!1,sendCodeTxt:_l("\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u7801")}),clearInterval($)):(t.setState({sendCodeTxt:_l("%0\u79D2\u540E\u91CD\u65B0\u53D1\u9001",s)}),s--)},1e3)},t.updateAccount=function(){if(t.validate()){var s=t.props,g=s.type,d=s.callback,c=d===void 0?function(){}:d,p=t.state,a=p.verifyCode,n=p.email;if(!a){alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3),t.verifyCode.focus();return}t.setState({submitLoading:!0}),e.Z.editAccount({account:g==="email"?n:t.iti.getNumber(),verifyCode:a}).then(function(l){if(l===1){var v=g==="email"?_l("\u90AE\u7BB1"):_l("\u624B\u673A\u53F7");alert(_l("%0\u4FEE\u6539\u7ED1\u5B9A\u6210\u529F",v),1),window.localStorage.removeItem("LoginCheckList");var m=window.localStorage.getItem("LoginName");m&&(P.Z.isEmail(m)&&g==="email"||!P.Z.isEmail(m)&&g!=="email")&&safeLocalStorageSetItem("LoginName",g==="email"?n:t.iti.getNumber()),setTimeout(function(){c()},2e3)}else l===8?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),2):l===2?alert(_l("\u4FEE\u6539\u7684\u8D26\u53F7\u4E0E\u539F\u6765\u76F8\u540C"),3):alert(_l("%0\u4FEE\u6539\u5931\u8D25",accountTypeDesc),2)})}},t.state={password:"",email:"",verifyCode:"",nextBtnDisabled:"",sendCodeLoading:"",sendCodeTxt:_l("\u53D1\u9001\u9A8C\u8BC1\u7801"),step:1,submitLoading:!1},t.iti=null,t}return(0,A.default)(h,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,s=this.props,g=s.title,d=s.des,c=s.showStep,p=s.type,a=s.onCancel,n=a===void 0?function(){}:a,l=this.state,v=l.nextBtnDisabled,m=l.sendCodeLoading,E=l.step,C=l.sendCodeTxt;return o.createElement(I.Z,{title:g,visible:!0,onCancel:n,showFooter:!1},d&&o.createElement("div",{className:"Gray_9 Font13 mBottom5"},d),c&&o.createElement(ee,{step:E},o.createElement("div",{className:"stepName flexRow mBottom15"},o.createElement("div",null,_l("\u9A8C\u8BC1\u8EAB\u4EFD")),o.createElement("div",null,p==="email"?_l("\u9A8C\u8BC1\u90AE\u7BB1\u5730\u5740"):_l("\u9A8C\u8BC1\u65B0\u624B\u673A\u53F7\u7801"))),o.createElement("div",{className:"flexRow mBottom20"},o.createElement("div",{className:"flex stepline"},o.createElement("div",{className:"dot"})),o.createElement("div",{className:"flex stepline"},o.createElement("div",{className:"dot"})))),E===2?o.createElement(o.Fragment,null,p=="email"?o.createElement(q,null,o.createElement(N,{type:"text",ref:function(r){return t.email=r},placeholder:_l("\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740"),className:"inputBox txtEmail w100",maxlength:64,onChange:function(r){return t.changeValue(r,"email")}})):o.createElement(q,null,o.createElement(N,{type:"text",ref:function(r){return t.mobile=r},placeholder:_l("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),className:"inputBox txtMobilePhone w100 box-sizing",maxlength:64})),o.createElement("div",{className:"flexRow mBottom20"},o.createElement(N,{type:"text",ref:function(r){return t.verifyCode=r},placeholder:_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),className:"mRight15 inputBox txtVerifyCode flex",maxlength:6,onChange:function(r){return t.changeValue(r,"verifyCode")},onKeyUp:function(r){r.keyCode===13&&t.sendChangeAccountVerifyCode()}}),o.createElement("button",{disabled:m,className:"Button ming Button--primary Button--medium pLeft0 pRight0",style:{minWidth:120},onClick:this.sendChangeAccountVerifyCode},C)),o.createElement("button",{className:"Button ming Button--primary Button--medium btnUpdateAccount w100",onClick:this.updateAccount},_l("\u786E\u8BA4"))):o.createElement(o.Fragment,null,o.createElement(M.Z,{showAccountEmail:p==="email",className:"mBottom10",showSubTitle:!1,onChange:function(r){var b=r.password;return t.setState({password:b})}}),o.createElement("button",{type:"button",className:"btnUnBind ming Button Button--primary Button--medium w100 Font14 mBottom20",disabled:v,onClick:this.clickNext},_l("\u4E0B\u4E00\u6B65"))))}}]),h}(o.Component),te=function(h){return(0,V.Z)(G,h)}}}]);
