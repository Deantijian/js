(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[1796],{21796:(it,He,c)=>{"use strict";c.r(He),c.d(He,{default:()=>po});var ve=c(42723),jt=c(85105),ge=c.n(jt),Ie=c(99663),ye=c(22600),pe=c(49135),be=c(93196),e=c(67294),q=c(91088),Ue=c(86853),De=c(6100),$e=c(56171),zt=c(51197),Qt=c(88902),Xt=c.n(Qt),ke=c(88106),Yt=c(94942),lt=c.n(Yt),Kt=c(36803),bo=c(48659),Jt=c(1825),Co=c(11378),_t=c(56697),W=c(33867),qt=c(79221),M=c(88239),en=c(63239),rt=c.n(en),te=c(45697),Re=c(37727),tn=c(92138),nn=c(93967),E=c.n(nn),an=c(49611),on=c.n(an),Ae=c(96841),de=c(36021),je=c(35710),ln=c(1393),Ze=c(73820),st=c(42602),rn=c(96800),sn=c(73549),ct=c(83947),Ne=c(70801),xo=c(43755),cn=c(87506),pn=c.n(cn),Le=c(15405),pt=c(33126),U=c(12424),ie=c(86735),oe=c(5017),dn=c(25796),un=(0,ie.Z)([`
  display: flex;
  width: 100%;
  .customFieldsContainer {
    width: 100%;
    padding-top: 26px;
    flex: 1;
  }
  .customFormErrorMessage {
  }
`],[`
  display: flex;
  width: 100%;
  .customFieldsContainer {
    width: 100%;
    padding-top: 26px;
    flex: 1;
  }
  .customFormErrorMessage {
  }
`]),fn=oe.ZP.div(un);function mn(d){var n=d.setShow,o=d.show,t=d.onChange,a=d.title,i=d.currentId,l=d.classNames,r=d.exAccountId,f=(0,e.useRef)(null),s=(0,e.useState)(d.currentData||[]),p=(0,U.Z)(s,2),I=p[0],D=p[1],w=(0,e.useState)([]),h=(0,U.Z)(w,2),b=h[0],V=h[1];return e.createElement(Ne.Z,{title:a||_l("\u4FEE\u6539\u7528\u6237\u4FE1\u606F"),okText:_l("\u4FDD\u5B58"),cancelText:_l("\u53D6\u6D88"),className:E()("userInfoDialog",l),headerClass:"userInfoDialogTitle",bodyClass:"userInfoDialogCon",width:800,onCancel:function(){n(!1)},onOk:function(){var g=f.current.getSubmitData(),m=g.data,v=g.hasError;v||(d.onOk(m,b),n(!1))},visible:o,updateTrigger:"fasle"},e.createElement(fn,null,e.createElement(dn.Z,{disableRules:!0,ref:f,data:I.map(function(L){return(0,M.default)({},L,{size:12})}).filter(function(L){return!["avatar","roleid","status"].includes(L.alias)}),onChange:function(g,m){V(m)}})))}var ce=c(35989),B=c(15577),hn=c(24607),vn=c(23098),dt=c(70714),gn=c(69711),In=c(12423),So=c(28283),yn=c(59911),Pe=c(97553),bn=c(14260),Cn=c.n(bn),xn=c(60300),Sn=c.n(xn),ze=c(54895),wo="https://help.mingdao.com/faq/sms-emali-service-failure",Eo={register:-1,friend:0,group:1,task:2,kc:3,project:4,calendar:5,tFolder:6},ut={message:0,voice:1},ko={oldAccount:"old",newAccount:"new",createProject:"create"},Ao={login:1,createProject:2,userCardInfo:3},ne={accountIsNoExist:-1,failed:0,success:1,fieldRequired:2,failInvalidVerifyCode:3,userInvalid:4,userInfoNotFound:5,userAccountExists:6,inviteLinkExpirate:7,sendMobileMessageFrequent:8,failPasswordValidate:9,projectUserExists:10,freeProjectForbid:11,emailNotNull:12,userFromError:14,accountFrequentLoginError:15,noEfficacyVerifyCode:16,mobileNotNull:17,firstLoginResetPassword:18,passwordOverdue:19,samePassword:20,isLock:21,balanceIsInsufficient:22,accoutRegisterClosed:23},No=[_l("20\u4EBA\u4EE5\u4E0B"),_l("21-99\u4EBA"),_l("100-499\u4EBA"),_l("500-999\u4EBA"),_l("1000-9999\u4EBA"),_l("10000\u4EBA\u4EE5\u4E0A")],Po=[_l("\u603B\u7ECF\u529E"),_l("\u6280\u672F/IT/\u7814\u53D1"),_l("\u4EA7\u54C1/\u8BBE\u8BA1"),_l("\u9500\u552E/\u5E02\u573A/\u8FD0\u8425"),_l("\u4EBA\u4E8B/\u8D22\u52A1/\u884C\u653F"),_l("\u8D44\u6E90/\u4ED3\u50A8/\u91C7\u8D2D"),_l("\u5176\u4ED6")],To=[_l("\u603B\u88C1/\u603B\u7ECF\u7406/CEO"),_l("\u526F\u603B\u88C1/\u526F\u603B\u7ECF\u7406/VP"),_l("\u603B\u76D1/\u4E3B\u7BA1/\u7ECF\u7406"),_l("\u5458\u5DE5/\u4E13\u5458/\u6267\u884C"),_l("\u5176\u4ED6")],Do=[{text:_l("\u6211\u662F\u7528\u6237"),value:0},{text:e.createElement("div",{className:"itemText",style:{height:"auto","overflow-x":"auto","text-overflow":"initial"},dangerouslySetInnerHTML:{__html:_l("\u6211\u662F\u7528\u6237\uFF0C\u5E76\u5BF9HAP %0\u4F19\u4F34\u653F\u7B56%1 \u611F\u5174\u8DA3",`<a class='Bold pLeft5 pRight5 Hand' target="_blank" href="https://www.mingdao.com/partners" >`,"</a>")}}),value:1}],wn=(0,ie.Z)([`
  .iti {
    width: 100%;
    height: 36px;
    .telInput {
      width: 100%;
      padding-left: 52px !important;
    }
  }
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .hidInput {
    .iti,
    .telInput {
      display: none;
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`],[`
  .iti {
    width: 100%;
    height: 36px;
    .telInput {
      width: 100%;
      padding-left: 52px !important;
    }
  }
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .hidInput {
    .iti,
    .telInput {
      display: none;
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`]),En=oe.ZP.div(wn),Te=null,kn=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));return t.itiFn=function(){t.mobile&&(t.iti&&t.iti.destroy(),t.iti=Cn()(t.mobile,{i18n:{searchPlaceholder:_l("\u641C\u7D22")},customPlaceholder:function(){return emailOrTel},autoPlaceholder:"off",loadUtils:"",initialCountry:_.get(md,"global.Config.DefaultConfig.initialCountry")||"cn",preferredCountries:_.get(md,"global.Config.DefaultConfig.preferredCountries")||["cn"],utilsScript:Sn(),separateDialCode:!1}),$(t.mobile).on("onBlur",function(a){return t.onChangeAccount(a)}))},t.isValidEmail=function(a){var i=/^[\u4e00-\u9fa5\w-]+(\.[\u4e00-\u9fa5\w-]+)*@[\u4e00-\u9fa5\w-]+(\.[\u4e00-\u9fa5\w-]+)*\.[\u4e00-\u9fa5\w-]+$/i;return i.test(a)},t.isValid=function(){var a=t.props,i=a.account,l=a.newAccount;if(i)return!0;var r=!0;return t.props.inputType==="phone"?(t.iti.getNumber().replace(/\s*/g,"")?t.iti.isValidNumber()||(r=!1,alert(_l("\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"),2)):(r=!1,alert(_l("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),2)),r):(l.replace(/\s*/g,"")?t.isValidEmail(l)||(r=!1,alert(_l("\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"),2)):(r=!1,alert(_l("\u8BF7\u8F93\u5165\u90AE\u7BB1"),2)),r)},t.handleSendVerifyCode=function(){if(t.isValid()){var a=function(l){if(l.ret!==0){t.setState({verifyCodeLoading:!1});return}else t.setState({verifyCodeLoading:!0});var r={appId:t.props.appId,ticket:l.ticket,randStr:l.randstr,captchaType:md.global.getCaptchaType(),codeType:t.props.type,account:t.props.type===3?t.props.inputType==="phone"?t.iti.getNumber().replace(/\s*/g,""):t.props.newAccount:t.props.account},f=function(p){if(p.actionResult===1)t.countDown();else{t.setState({verifyCodeLoading:!1}),p.actionResult==ne.sendMobileMessageFrequent?alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):p.actionResult==ne.userInfoNotFound?alert(_l("\u8D26\u53F7\u4E0D\u6B63\u786E"),3):p.actionResult==ne.failInvalidVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):p.actionResult==ne.balanceIsInsufficient?alert(_l("\u5F53\u524D\u4F01\u4E1A\u8D26\u6237\u4F59\u989D\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u53D1\u9001\u77ED\u4FE1/\u90AE\u4EF6"),2):p.actionResult==ne.userAccountExists?alert(_l("\u53D1\u9001\u5931\u8D25\uFF0C\u65B0\u624B\u673A\u53F7\u4E0E\u73B0\u6709\u624B\u673A\u53F7\u4E00\u81F4"),2):alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25"),3);return}};ce.Z.sendAccountVerifyCode(r).then(function(s){f(s)})};md.global.getCaptchaType()===1?new ze.Z(a):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),a).show()}},t.countDown=function(){var a=30;$(t.code).focus(),Te=setInterval(function(){a<=0?(t.setState({verifyCodeText:"",verifyCodeLoading:!1}),clearInterval(Te),Te=null):(t.setState({verifyCodeText:_l("%0\u79D2\u540E\u91CD\u53D1",a)}),a--)},1e3)},t.onChangeAccount=function(a){var i=t.props,l=i.setNewAccount,r=i.setIsValidNumber,f=i.inputType,s=i.setCountry,p=f==="phone";(p?a.target.value.replace(/[^\d]/g,""):a.target.value.trim()).length<a.target.value.length?(l(p?a.target.value.replace(/[^\d]/g,""):a.target.value.trim()),p&&t.iti.setNumber(""+a.target.value.replace(/[^\d]/g,""))):l(p?t.iti.getNumber():a.target.value.trim()),s(p?"+"+t.iti.getSelectedCountryData().dialCode:""),r(p?t.iti.isValidNumber():t.isValidEmail(a.target.value.trim()))},t.iti=null,t.state={loading:!1,verifyCodeText:"",verifyCodeLoading:!1,focusDiv:""},t}return(0,ye.default)(n,[{key:"componentDidMount",value:function(){this.props.inputType==="phone"&&this.itiFn()}},{key:"componentWillReceiveProps",value:function(t){var a=this;t.type!==this.props.type&&(Te&&clearInterval(Te),Te=null,this.setState({verifyCodeLoading:!1,verifyCodeText:""}),t.type===3&&setTimeout(function(){a.mobile.focus()},500))}},{key:"componentWillUnmount",value:function(){this.iti&&this.iti.destroy()}},{key:"render",value:function(){var t=this,a=this.props,i=a.account,l=a.setCode,r=a.setNewAccount,f=a.setIsValidNumber,s=a.inputType,p=this.state,I=p.verifyCodeLoading,D=p.verifyCodeText;return e.createElement(En,null,e.createElement("div",{className:E()("mesDiv",{hidInput:!!i,isMobile:(0,B.Q9)()})},e.createElement("span",{className:"title"},i?this.isValidEmail(i)?_l("\u90AE\u7BB1"):_l("\u624B\u673A\u53F7"):s==="phone"?_l("\u65B0\u624B\u673A\u53F7"):_l("\u65B0\u90AE\u7BB1")),e.createElement("span",{className:E()("telBox",{hid:!i})},i),e.createElement("input",{type:"text",className:E()("telInput"),ref:function(h){return t.mobile=h},onBlur:this.onChangeAccount})),e.createElement("div",{className:E()("mesDiv",{isMobile:(0,B.Q9)(),mTop16:!(0,B.Q9)(),mTop6:(0,B.Q9)()})},e.createElement("span",{className:"title"},_l("\u9A8C\u8BC1\u7801")),e.createElement("div",{className:"code"},e.createElement("input",{type:"text",maxLength:"4",className:"loginInput txtLoginCode",value:this.props.code,ref:function(h){return t.code=h},onChange:function(h){l(h.target.value.replace(/[^\d]/g,""))}}),e.createElement("input",{disabled:I,type:"button",className:E()("btn btnSendVerifyCode mLeft16",{btnDisabled:I,btnEnabled:!I}),id:"btnSendVerifyCode",value:D||(I?_l("\u53D1\u9001\u4E2D..."):_l("\u83B7\u53D6\u9A8C\u8BC1\u7801")),onClick:function(h){t.handleSendVerifyCode(ut.message)}}))))}}]),n}(e.Component);const ft=kn;var An=(0,ie.Z)([""],[""]),Nn=oe.ZP.div(An);function Pn(d){var n=d.setShow,o=d.show,t=d.classNames,a=d.appId,i=d.onOk,l=d.type,r=d.baseInfo,f=d.isBind,s=(0,e.useState)(!1),p=(0,U.Z)(s,2),I=p[0],D=p[1],w=(0,e.useState)(""),h=(0,U.Z)(w,2),b=h[0],V=h[1],L=(0,e.useState)(""),g=(0,U.Z)(L,2),m=g[0],v=g[1],C=(0,e.useState)(!1),Z=(0,U.Z)(C,2),F=Z[0],k=Z[1],A=(0,e.useState)(""),H=(0,U.Z)(A,2),y=H[0],N=H[1],G=function(){m?ce.Z.checkExAccountVerifyCode({handleType:2,appId:a,verifyCode:m,account:d.account}).then(function(T){if(T.actionResult===1)D(!0),v("");else{T.actionResult==ne.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):T.actionResult==ne.accountFrequentLoginError?alert(_l("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3);return}}):alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)},O=function(){if(!b)return alert(l==="phone"?_l("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"):_l("\u8BF7\u8F93\u5165\u90AE\u7BB1"),3);if(!F)return alert(l==="phone"?_l("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"):_l("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1"),3);if(m){var T=null;f?T=ce.Z.bindExAccount({appId:a,verifyCode:m,account:y+b}):T=ce.Z.editExAccount({appId:a,verifyCode:m,account:y+b}),T.then(function(R){if(R.actionResult===1)i(b);else{R.actionResult==ne.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):R.actionResult==ne.failInvalidVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):alert(_l("\u7ED1\u5B9A\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3);return}})}else return alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)};return e.createElement(Ne.Z,{title:e.createElement("span",{className:"Bold"},d.isBind?l==="phone"?_l("\u7ED1\u5B9A\u624B\u673A\u53F7"):_l("\u7ED1\u5B9A\u90AE\u7BB1"):l==="phone"?_l("\u4FEE\u6539\u624B\u673A\u53F7"):_l("\u4FEE\u6539\u90AE\u7BB1")),className:E()("userInfoDialog",t),headerClass:"userInfoDialogTitle",bodyClass:"telDialogCon",width:560,footer:e.createElement("div",{className:"footer"},e.createElement(Pe.ZP,{type:I?"primary":"link",onClick:function(){v(""),I?(D(!1),v("")):n(!1)}},I?_l("\u4E0A\u4E00\u6B65"):_l("\u53D6\u6D88")),e.createElement(Pe.ZP,{type:"primary",onClick:function(){I?O():G()}},I?_l("\u7ED1\u5B9A"):_l("\u4E0B\u4E00\u6B65"))),onCancel:function(){n(!1)},visible:o},e.createElement(Nn,null,e.createElement(ft,{isBind:f,inputType:l,code:m,newAccount:b,setCode:function(T){return v(T)},setNewAccount:function(T){return V(T)},account:I?"":d.account,appId:a,type:I?3:2,setIsValidNumber:k,setCountry:N})))}var Tn=(0,ie.Z)([""],[""]),Dn=oe.ZP.div(Tn);function Zn(d){var n=d.setShow,o=d.show,t=d.appId,a=d.classNames,i=d.account,l=d.type,r=(0,e.useState)(""),f=(0,U.Z)(r,2),s=f[0],p=f[1],I=function(){s?ce.Z.checkExAccountVerifyCode({handleType:1,appId:t,verifyCode:s,account:i}).then(function(w){if(w.actionResult===1)Ne.Z.confirm({title:e.createElement("span",{className:"Font17 Bold"},_l("\u60A8\u662F\u5426\u786E\u8BA4\u6CE8\u9500\u8D26\u53F7\uFF1F")),description:_l("\u8D26\u53F7\u4E00\u65E6\u6CE8\u9500\u5C06\u65E0\u6CD5\u767B\u5F55\u5E73\u53F0\uFF0C\u4E14\u4F1A\u89E3\u9664\u4E0E\u7B2C\u4E09\u65B9\u8D26\u53F7\u7684\u7ED1\u5B9A\u5173\u7CFB\u3001\u8EAB\u4EFD\u3001\u8D26\u53F7\u4FE1\u606F\u7B49\u5C06\u88AB\u6E05\u7A7A\u4E14\u65E0\u6CD5\u627E\u56DE"),okText:_l("\u6CE8\u9500"),buttonType:"danger",className:E()("userInfoDialog",a),onOk:function(){ce.Z.editExAccountCancel({appId:t}).then(function(b){if(b.actionResult===1){window.currentLeave=!0,(0,dt.Gs)(),window.localStorage.removeItem("PortalLoginInfo-"+t),window.localStorage.removeItem("LoginCheckList");var V=""+location.origin+(window.subPath||"")+"/app/"+t;location.href=d.url||V}else b.actionResult==ne.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):b.actionResult==ne.accountFrequentLoginError?alert(_l("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):alert(_l("\u6CE8\u9500\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})}});else{w.actionResult==ne.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):w.actionResult==ne.accountFrequentLoginError?alert(_l("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3);return}}):alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)};return e.createElement(Ne.Z,{title:_l("\u6CE8\u9500\u8D26\u6237"),okText:_l("\u4E0B\u4E00\u6B65"),cancelText:_l("\u53D6\u6D88"),className:E()("userInfoDialog",a),headerClass:"userInfoDialogTitle",bodyClass:"delDialogCon",width:560,onCancel:function(){n(!1)},onOk:function(){s?I():alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)},visible:o},e.createElement(Dn,null,e.createElement(ft,{inputType:l,setCode:function(w){return p(w)},code:s,account:d.account,type:1,appId:t})))}var Ln=c(52945),Qe=c.n(Ln),Rn=c(93002),ue=c(15029),Vn=c(66344),Fn=(0,ie.Z)([`
  margin-top: 20px;
  margin-bottom: -2px;
  margin-left: -2px;
  margin-right: -2px;
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telPwd,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      width: 100%;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`],[`
  margin-top: 20px;
  margin-bottom: -2px;
  margin-left: -2px;
  margin-right: -2px;
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telPwd,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      width: 100%;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`]),Gn=(0,ie.Z)([""],[""]),Mn=oe.ZP.div(Fn),Wn=oe.ZP.div(Gn),Xe=null;function Bn(d){var n=d.setShow,o=d.show,t=d.classNames,a=d.appId,i=d.account,l=d.onOk,r=(0,e.useState)(""),f=(0,U.Z)(r,2),s=f[0],p=f[1],I=(0,Rn.Z)({verifyCodeText:"",verifyCodeLoading:!1,sending:!1,psd:""}),D=(0,U.Z)(I,2),w=D[0],h=w.verifyCodeText,b=w.verifyCodeLoading,V=w.sending,L=w.psd,g=D[1],m=window,v=m.md,C=v===void 0?{}:v,Z=C.global,F=Z===void 0?{}:Z,k=F.SysSettings,A=k===void 0?{}:k,H=A.passwordRegex,y=A.passwordRegexTip,N=(0,e.useRef)(),G=function(P){return Vn.Z.isPasswordValid(P,H)},O=function(P){var x=P.accountResult;switch(x){case 1:alert(_l("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F\uFF01"),"1",3e3,function(){l()}),g({sending:!1}),n(!1);break;case-1:alert(_l("\u8BE5\u7528\u6237\u4E0D\u5B58\u5728\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u5BC6\u7801"),3),g({sending:!1});break;case-3:alert(y||_l("\u8BF7\u8F93\u51658-20\u4F4D\uFF0C\u9700\u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57"),3),g({sending:!1});break;case-5:alert(_l("\u524D\u540E\u5BC6\u7801\u4E00\u81F4!"),3),g({sending:!1});break;case 20:alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF!"),3),g({sending:!1});break;case 21:case 22:J();break;case 24:var j=P.state?Math.ceil(P.state/60):20;alert(_l("\u5BC6\u7801\u4FEE\u6539\u6B21\u6570\u8FC7\u591A\u88AB\u9501\u5B9A\uFF0C\u8BF7 %0 \u5206\u949F\u540E\u518D\u8BD5\uFF0C\u6216 \u91CD\u7F6E\u5BC6\u7801",j),3),g({sending:!1});break;case 23:alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001!"),3),g({sending:!1});break;default:alert(_l("\u4FEE\u6539\u5BC6\u7801\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5!"),3),g({sending:!1});break}},u=function(){var P=30;$(N).focus(),Xe=setInterval(function(){P<=0?(g({verifyCodeText:"",verifyCodeLoading:!1}),clearInterval(Xe),Xe=null):(g({verifyCodeText:_l("%0\u79D2\u540E\u91CD\u53D1",P)}),P--)},1e3)},T=function(){var P=function(j){if(j.ret!==0){g({verifyCodeLoading:!1});return}else g({verifyCodeLoading:!0});var le={appId:d.appId,ticket:j.ticket,randStr:j.randstr,captchaType:C.global.getCaptchaType(),account:d.account,codeType:4},fe=function(Y){if(Y.actionResult===1)u();else{g({verifyCodeLoading:!1}),Y.actionResult==ne.sendMobileMessageFrequent?alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):Y.actionResult==ne.userInfoNotFound?alert(_l("\u8D26\u53F7\u4E0D\u6B63\u786E"),3):Y.actionResult==ne.failInvalidVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):Y.actionResult==ne.balanceIsInsufficient?alert(_l("\u5F53\u524D\u4F01\u4E1A\u8D26\u53F7\u4F59\u989D\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u53D1\u9001\u77ED\u4FE1"),2):Y.actionResult==ne.userAccountExists?alert(_l("\u53D1\u9001\u5931\u8D25\uFF0C\u65B0\u624B\u673A\u53F7\u4E0E\u73B0\u6709\u624B\u673A\u53F7\u4E00\u81F4"),2):alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25"),3);return}};ce.Z.sendAccountVerifyCode(le).then(function(K){fe(K)})};C.global.getCaptchaType()===1?new ze.Z(P):new TencentCaptcha(C.global.Config.CaptchaAppId.toString(),P).show()},R=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!s)return alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"),3);if(!L)return alert(_l("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF01"),3);if(!G(L))return alert(y||_l("\u8BF7\u8F93\u51658-20\u4F4D\uFF0C\u9700\u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57"),3);if(!V){var x=P.ticket,j=P.randstr;ce.Z.findPwd({account:(0,B.HI)(i),password:(0,B.HI)(L),appId:a,verifyCode:s,captchaType:C.global.getCaptchaType(),ticket:x,randStr:j}).then(function(le){(0,ue.gx)((0,M.default)({},le,{appId:a})),O(le)})}},J=function(){var P=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};j.ret===0&&doFindPwd(Qe()({},j,{captchaType:C.global.getCaptchaType()}))};C.global.getCaptchaType()===1?new ze.Z(P):new TencentCaptcha(C.global.Config.CaptchaAppId.toString(),P).show()};return e.createElement(Ne.Z,{title:e.createElement("span",{className:"Bold"},_l("\u8BBE\u7F6E\u5BC6\u7801")),className:E()("userInfoDialog",t),headerClass:"userInfoDialogTitle",bodyClass:"telDialogCon",width:560,footer:e.createElement("div",{className:"footer"},e.createElement(Pe.ZP,{type:"link",onClick:function(){n(!1)}},_l("\u53D6\u6D88")),e.createElement(Pe.ZP,{type:"primary",onClick:function(){R()}},_l("\u786E\u5B9A"))),onCancel:function(){n(!1)},visible:o},e.createElement(Wn,null,e.createElement(Mn,null,e.createElement("div",{className:E()("mesDiv",{isMobile:(0,B.Q9)()})},e.createElement("span",{className:"title"},_l("\u8D26\u53F7")),e.createElement("span",{className:E()("telBox")},d.account)),e.createElement("div",{className:E()("mesDiv ",{isMobile:(0,B.Q9)(),mTop16:!(0,B.Q9)(),mTop6:(0,B.Q9)()})},e.createElement("span",{className:"title"},_l("\u9A8C\u8BC1\u7801")),e.createElement("div",{className:"code"},e.createElement("input",{type:"text",maxLength:"4",className:"loginInput txtLoginCode",value:s,ref:N,onChange:function(P){p(P.target.value.replace(/[^\d]/g,""))}}),e.createElement("input",{disabled:b,type:"button",className:E()("btn btnSendVerifyCode mLeft16",{btnDisabled:b,btnEnabled:!b}),id:"btnSendVerifyCode",value:h||(b?_l("\u53D1\u9001\u4E2D..."):_l("\u83B7\u53D6\u9A8C\u8BC1\u7801")),onClick:function(P){T(ut.message)}}))),e.createElement("div",{className:E()("mesDiv",{isMobile:(0,B.Q9)(),mTop16:!(0,B.Q9)(),mTop6:(0,B.Q9)()})},e.createElement("span",{className:"title"},_l("\u65B0\u5BC6\u7801")),e.createElement("input",{type:"password",className:E()("telPwd"),value:L,onChange:function(P){g({psd:P.target.value.trim()})}})))))}var mt=c(25265),On=c(54424),Hn=c(96486),S=c.n(Hn),Zo=c(83821),ht=c(69277),Un=c(99912),vt,gt,$n=(0,ie.Z)([`
  .back {
    height: 50px;
    line-height: 50px;
  }
  .ChatPanel-inbox-portalCon.isM {
    height: calc(100% - 50px);
  }
`],[`
  .back {
    height: 50px;
    line-height: 50px;
  }
  .ChatPanel-inbox-portalCon.isM {
    height: calc(100% - 50px);
  }
`]),jn=oe.ZP.div($n),zn=(0,pt.Z)(Le.Z),Qn=(vt=(0,Ae.$j)(function(d){var n=d.chat,o=n.currentSession,t=n.currentSessionList,a=n.visible;return{currentSession:o,currentSessionList:t,visible:a}}),vt(gt=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));return t.handleClosePanel=function(){var a=t.props.currentSession;a.value&&(t.props.dispatch(mt.ZE({})),ht.r8.recordAction({id:""}),ht.r8.clearAllUnread())},t.handleClickAway=function(a){t.handleClosePanel(),a.stopPropagation&&a.stopPropagation()},t.state={loading:!1,isError:!1},t}return(0,ye.default)(n,[{key:"render",value:function(){var t=this,a=this.props.currentSession,i=[".dialogScroll",".ant-modal",".mdModal",".ChatPanel-Trigger",".attachmentsPreview",".Tooltip",".mui-dialog-container",".mdAlertDialog",".confirm",".PositionContainer-wrapper",".groupSettingAvatarSelect",".ui-timepicker-list",".selectUserBox",".warpDatePicker",".dropdownTrigger",".rc-trigger-popup",".workflowStepListWrap",".ant-select-dropdown",".ant-cascader-menus",".InboxFilterWrapper",".ant-picker-dropdown"];return e.createElement(zn,{component:"div",onClickAwayExceptions:i,onClickAway:this.handleClickAway.bind(this),className:E()("ChatPanel-wrapper ChatPanel-position tipBoxShadow portalChatPanel",{"ChatPanel-close":S().isEmpty(a),"ChatPanel-small":window.innerHeight<700,"ChatPanel-big":window.innerHeight>2e3,isMobile:(0,B.Q9)()})},a.iconType?e.createElement(jn,{className:E()("ChatPanel ChatPanel-inbox",{flexColumn:md.global.Account.isPortal&&(0,B.Q9)()})},md.global.Account.isPortal&&(0,B.Q9)()?e.createElement(e.Fragment,null,e.createElement("span",{className:"Font17 Hand InlineBlock back pLeft16",onClick:function(r){t.handleClickAway(r)}},e.createElement(W.Z,{icon:"backspace mRight8 Gray_9e"}),_l("\u6D88\u606F"))):e.createElement("i",{onClick:function(r){t.handleClickAway(r)},className:"ChatPanel-inbox-close icon-close ThemeColor3"}),e.createElement("div",{className:E()("ChatPanel-inbox-portalCon",{isM:(0,B.Q9)()})},e.createElement(Un.Z,{inboxType:a.iconType,count:a.count}))):"")}}]),n}(e.Component))||gt),Xn=c(48645),Yn=(0,ie.Z)([`
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  margin-right: 15px;
  .unread {
    position: absolute;
    border-radius: 8px;
    text-align: center;
    line-height: 12px;
    background-color: #fff;
    z-index: 1;
    left: 22px;
    top: 50%;
    padding: 1px 5px;
    transform: translate(0px, -100%);
    font-size: 12px;
    &.isMobile {
      background-color: red;
    }
  }
  .isMobile {
    color: #9e9e9e;
  }
`],[`
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  margin-right: 15px;
  .unread {
    position: absolute;
    border-radius: 8px;
    text-align: center;
    line-height: 12px;
    background-color: #fff;
    z-index: 1;
    left: 22px;
    top: 50%;
    padding: 1px 5px;
    transform: translate(0px, -100%);
    font-size: 12px;
    &.isMobile {
      background-color: red;
    }
  }
  .isMobile {
    color: #9e9e9e;
  }
`]),Kn=oe.ZP.div(Yn),Jn=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));return t.getChatCount=function(){Xn.$n({pageIndex:1,pageSize:100}).then(function(a){var i=(a.find(function(l){return l&&l.value==="worksheet"})||{}).count;i>0&&t.setState({count:i})})},t.state={count:0},t}return(0,ye.default)(n,[{key:"componentDidMount",value:function(){On.U6.call(this),this.getChatCount()}},{key:"componentWillReceiveProps",value:function(t){var a=t.sessionList,i=a===void 0?[]:a,l=(i.find(function(f){return f.value==="worksheet"})||{}).count,r=((this.props.sessionList||[]).find(function(f){return f.value==="worksheet"})||{}).count;l>0&&r!==l&&this.setState({count:l})}},{key:"render",value:function(){var t=this,a=(0,B.FL)(),i=a.rp,l=this.props,r=l.isMobile,f=l.color,s=l.sessionList,p=s===void 0?[]:s,I=l.visible,D=this.state.count,w=D===void 0?0:D;return e.createElement(e.Fragment,null,e.createElement(Kn,{onClick:function(){t.setState({count:0},function(){t.props.dispatch(mt.ZE({id:"worksheet",value:"worksheet",iconType:"worksheet"}))})}},w>0&&e.createElement("div",{className:E()("unread Hand",{isMobile:r}),style:{color:r?"#fff":f}},w>99?"99+":w),e.createElement("i",{className:E()("icon icon-hr_message_reminder Font20 Hand",{Gray_9e:r}),onClick:function(){}})),e.createElement("div",{id:"chatPanel"},i&&e.createElement(Qn,null)))}}]),n}(e.Component);const _n=(0,Ae.$j)(function(d){var n=d.chat,o=n.currentSession,t=n.visible,a=n.sessionList;return{currentSession:o,visible:t,sessionList:a}})(Jn);var Lo=c(20148),qn=c(60385),ea=c.n(qn),ta=(0,ie.Z)([`
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  .headerCenter {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .appNameHeaderBoxPortal {
    top: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    position: relative;
    &.isMobile {
      height: 70px;
      background: #fff;
      .avatarM {
        line-height: 70px;
      }
    }
    .appName {
      height: 100%;
      width: 100%;
      max-width: 188px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.isFixed {
        width: auto;
      }
      &.appNameM {
        max-width: 280px;
        font-weight: bold;
        font-size: 24px !important;
        padding-left: 16px;
        line-height: 70px;
      }
    }
    .appItemsOuterWrap {
      &.Hidden {
        display: none;
      }
      display: flex;
      height: 100%;
      align-items: center;
      flex: 1 1 0%;
      position: relative;
      overflow: hidden;
      .appItemsInnerWrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        .appItemsWrap {
          display: flex;
          position: absolute;
          left: 0;
          width: 100%;
          height: 50px;
          li {
            display: flex;
            height: 100%;
            align-items: center;
            position: relative;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            flex-shrink: 0;
            font-weight: bold;
            padding: 0 20px;
            &.active {
              background-color: rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
  }
  .appFixed {
    border-radius: 13px;
    color: #fff;
    height: 22px;
    line-height: 22px;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: bold;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 5px;
    background: #fd7558;
  }
`],[`
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  .headerCenter {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .appNameHeaderBoxPortal {
    top: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    position: relative;
    &.isMobile {
      height: 70px;
      background: #fff;
      .avatarM {
        line-height: 70px;
      }
    }
    .appName {
      height: 100%;
      width: 100%;
      max-width: 188px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.isFixed {
        width: auto;
      }
      &.appNameM {
        max-width: 280px;
        font-weight: bold;
        font-size: 24px !important;
        padding-left: 16px;
        line-height: 70px;
      }
    }
    .appItemsOuterWrap {
      &.Hidden {
        display: none;
      }
      display: flex;
      height: 100%;
      align-items: center;
      flex: 1 1 0%;
      position: relative;
      overflow: hidden;
      .appItemsInnerWrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        .appItemsWrap {
          display: flex;
          position: absolute;
          left: 0;
          width: 100%;
          height: 50px;
          li {
            display: flex;
            height: 100%;
            align-items: center;
            position: relative;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            flex-shrink: 0;
            font-weight: bold;
            padding: 0 20px;
            &.active {
              background-color: rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
  }
  .appFixed {
    border-radius: 13px;
    color: #fff;
    height: 22px;
    line-height: 22px;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: bold;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 5px;
    background: #fd7558;
  }
`]),na=(0,ie.Z)([`
  position: absolute;
  right: 0;
  height: calc(100% - 50px);
  top: 51px;
  width: 480px;
  max-width: 80%;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 24%);
  z-index: 1000;
  &.leftNaviStyle {
    height: 100%;
    top: 0;
    position: fixed;
  }
  .infoConBox {
    height: calc(100% - 70px);
    overflow: auto;
    padding: 24px;
  }
  .infoBox {
    overflow: auto;
    .cellOptions {
      max-width: 100%;
      .cellOption {
        max-width: 100%;
      }
    }
  }
  &.isMobile {
    top: 0;
    height: 100%;
    min-width: 100% !important;
    .back {
      height: 70px;
      line-height: 70px;
    }
    .infoConBox {
      height: calc(100% - 140px);
      padding: 6px 24px 24px;
    }
  }
  .closeBtnN {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  img.userAvatar {
  }
  .userName {
    line-height: 56px;
    word-wrap: break-word;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
  .title {
    width: 60px;
    padding-right: 5px;
  }
  .rInfo {
    width: calc(100% - 56px);
    &.isOption {
      .editableCellCon {
        padding-left: 0px !important;
      }
    }
  }
  .logoutBox {
    display: flex;
  }
  .opt {
    height: 36px;
    width: 36px;
    margin: 16px 16px 16px 10px;
    background: #f5f5f5;
    border-radius: 3px;
    .icon {
      margin: 0 auto;
      color: #9d9d9d;
      line-height: 36px;
    }
    &:hover {
      .icon {
        color: #2196f3;
      }
    }
  }
  .logout {
    flex: 1;
    height: 36px;
    background: rgba(33, 150, 243, 0.1);
    color: #2196f3;
    border-radius: 3px;
    line-height: 36px;
    text-align: center;
    margin: 16px 0px 16px 16px;
    .icon:before {
      vertical-align: middle;
    }
    &:hover {
      background: #ebf6fe;
    }
  }
  .userImage {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .hoverAvatar {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
      line-height: 60px;
      color: #ffffff;
      z-index: 2;
    }
    &:hover {
      .hoverAvatar {
        display: block;
      }
    }
  }
  .languagueSetting {
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
    .languagueItem {
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid #e0e0e0;
      background: #fff;
      color: #bdbdbd;
      &:last-child {
        border-right: none;
      }
      &.active {
        background: #2196f3;
        color: #fff;
      }
    }
  }
`],[`
  position: absolute;
  right: 0;
  height: calc(100% - 50px);
  top: 51px;
  width: 480px;
  max-width: 80%;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 24%);
  z-index: 1000;
  &.leftNaviStyle {
    height: 100%;
    top: 0;
    position: fixed;
  }
  .infoConBox {
    height: calc(100% - 70px);
    overflow: auto;
    padding: 24px;
  }
  .infoBox {
    overflow: auto;
    .cellOptions {
      max-width: 100%;
      .cellOption {
        max-width: 100%;
      }
    }
  }
  &.isMobile {
    top: 0;
    height: 100%;
    min-width: 100% !important;
    .back {
      height: 70px;
      line-height: 70px;
    }
    .infoConBox {
      height: calc(100% - 140px);
      padding: 6px 24px 24px;
    }
  }
  .closeBtnN {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  img.userAvatar {
  }
  .userName {
    line-height: 56px;
    word-wrap: break-word;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
  .title {
    width: 60px;
    padding-right: 5px;
  }
  .rInfo {
    width: calc(100% - 56px);
    &.isOption {
      .editableCellCon {
        padding-left: 0px !important;
      }
    }
  }
  .logoutBox {
    display: flex;
  }
  .opt {
    height: 36px;
    width: 36px;
    margin: 16px 16px 16px 10px;
    background: #f5f5f5;
    border-radius: 3px;
    .icon {
      margin: 0 auto;
      color: #9d9d9d;
      line-height: 36px;
    }
    &:hover {
      .icon {
        color: #2196f3;
      }
    }
  }
  .logout {
    flex: 1;
    height: 36px;
    background: rgba(33, 150, 243, 0.1);
    color: #2196f3;
    border-radius: 3px;
    line-height: 36px;
    text-align: center;
    margin: 16px 0px 16px 16px;
    .icon:before {
      vertical-align: middle;
    }
    &:hover {
      background: #ebf6fe;
    }
  }
  .userImage {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .hoverAvatar {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
      line-height: 60px;
      color: #ffffff;
      z-index: 2;
    }
    &:hover {
      .hoverAvatar {
        display: block;
      }
    }
  }
  .languagueSetting {
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
    .languagueItem {
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid #e0e0e0;
      background: #fff;
      color: #bdbdbd;
      &:last-child {
        border-right: none;
      }
      &.active {
        background: #2196f3;
        color: #fff;
      }
    }
  }
`]),aa=(0,ie.Z)([`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.appMoreActionWrap {
    .header {
      line-height: 24px;
      margin-bottom: 20px;
      text-align: left;
      padding: 20px 15px 0;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .actionContent {
      padding-left: 20px;
      color: #000;
      line-height: 50px;
      text-align: left;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .RedMenuItem {
      color: #f44336 !important;
    }
  }
`],[`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.appMoreActionWrap {
    .header {
      line-height: 24px;
      margin-bottom: 20px;
      text-align: left;
      padding: 20px 15px 0;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .actionContent {
      padding-left: 20px;
      color: #000;
      line-height: 50px;
      text-align: left;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .RedMenuItem {
      color: #f44336 !important;
    }
  }
`]),oa=(0,ie.Z)([`
  &.RedMenuItem {
    .Item-content {
      color: #f44336 !important;
      .Icon {
        color: #f44336 !important;
      }
      &:not(.disabled):hover {
        background-color: #f44336 !important;
      }
    }
  }
`],[`
  &.RedMenuItem {
    .Item-content {
      color: #f44336 !important;
      .Icon {
        color: #f44336 !important;
      }
      &:not(.disabled):hover {
        background-color: #f44336 !important;
      }
    }
  }
`]),ia=oe.ZP.div(ta),la=oe.ZP.div(na),ra=(0,oe.ZP)(ea())(aa),sa=(0,oe.ZP)($e.Z)(oa),Ve=c(31261),ca=c(41436),pa=c(71346),da=(0,pt.Z)(Le.Z),ua=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));return t.getInfo=function(){var a=t.props.appId||(0,ue.rh)(t.props.match.params);a&&(ce.Z.getLoginUrl({appId:a}).then(function(i){t.setState({url:i})}),t.getPortalDetail(a),ce.Z.getPortalSetByAppId({appId:a}).then(function(i){t.setState({baseInfo:i})}))},t.getPortalDetail=function(a){ce.Z.getDetail({exAccountId:md.global.Account.accountId,appId:a}).then(function(i){var l=i.receiveControls.find(function(r){return r.controlId==="portal_avatar"})||{};t.setState({currentData:i.receiveControls,avatar:l.value||md.global.Account.avatar,hasPassword:i.hasPassword},function(){md.global.Account.avatar=l.value||md.global.Account.avatar})})},t.logout=function(){window.currentLeave=!0,vn.Z.loginOut().then(function(a){if(a){(0,dt.Gs)();var i=t.props.appId||(0,ue.rh)(t.props.match.params);window.localStorage.removeItem("PortalLoginInfo-"+i),window.localStorage.removeItem("LoginCheckList"),location.href=(window.subPath||"")+"/login?ReturnUrl="+encodeURIComponent(t.state.url)}})},t.handleUploadImg=function(){var a=t.state,i=a.currentData,l=a.avatar,r=l===void 0?"":l;Ne.Z.confirm({dialogClasses:"uploadAvatorDialogId",width:(0,B.Q9)()?"335px":"460px",title:_l("\u4E0A\u4F20\u5934\u50CF"),noFooter:!0,children:e.createElement(In.Z,{editAvatar:function(s){ce.Z.saveUserDetail({appId:t.props.appId||(0,ue.rh)(t.props.match.params),exAccountId:md.global.Account.accountId,newCell:i.filter(function(p){return["avatar"].includes(p.alias)}).map(function(p){return(0,M.default)({},p,{value:s.fileName})})}).then(function(p){t.setState({avatar:p.data.portal_avatar},function(){md.global.Account.avatar=p.data.portal_avatar,$(".uploadAvatorDialogId").parent().remove()})})},avatar:r.split("imageView2")[0],closeDialog:function(){$(".uploadAvatorDialogId").parent().remove()}})})},t.state={appId:"",data:null,icon:"",name:"",iconColor:"",showUserInfo:!1,showUserInfoDialog:!1,currentData:[],avatar:md.global.Account.avatar,appSectionId:"",isAppItemOverflow:!1,disabledPointer:"left",showTelDialog:!1,showDelDialog:!1,allowExAccountDiscuss:!1,exAccountDiscussEnum:0,approved:!1,url:"",baseInfo:{},type:"",showChangePwd:!1,hasPassword:!1,showMenu:!1,showModel:!1},t}return(0,ye.default)(n,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"getUserInfo",value:function(){return yn.Z.getAccountListInfo({})}},{key:"render",value:function(){var t=this,a=this.state,i=a.name,l=a.iconColor,r=l===void 0?"#2196f3":l,f=a.showUserInfo,s=a.showUserInfoDialog,p=a.currentData,I=a.data,D=a.showTelDialog,w=a.showDelDialog,h=a.baseInfo,b=a.type,V=a.showChangePwd,L=a.showMenu,g=a.showModel,m=this.props,v=m.isMobile,C=m.match,Z=C===void 0?{}:C,F=m.appStatus,k=m.noAvatar,A=m.currentPcNaviStyle,H=p.filter(function(u){return!["name","mobilephone","avatar","firstLoginTime","roleid","status","openid","portal_email"].includes(u.alias)}),y=Z.params,N=y===void 0?{}:y,G=this.props.iconColor||r,O=(p.find(function(u){return[b!=="email"?"portal_mobile":"portal_email"].includes(u.controlId)})||{}).value||(p.find(function(u){return["portal_mobile"].includes(u.controlId)})||{}).value||(p.find(function(u){return["portal_email"].includes(u.controlId)})||{}).value;return e.createElement(ia,null,e.createElement("div",{className:E()("appNameHeaderBoxPortal appNameHeaderBox flexRow noBorder",{isMobile:v})},e.createElement(e.Fragment,null,e.createElement("div",{className:"headerCenter"},e.createElement("div",{className:E()("appName Font16 Hand",{appNameM:v}),style:{color:v?"#333":"#fff"}},this.props.name||i)),e.createElement(_n,{color:G,isMobile:v}),!k&&e.createElement("div",{className:E()("InlineBlock mRight16 Hand",{avatarM:v}),ref:function(T){t.avatar=T},onClick:function(){return t.setState({showUserInfo:!0})}},e.createElement("img",{src:(this.state.avatar||"").split("imageView2")[0],style:{width:v?32:30,height:v?32:30,borderRadius:"50%"}})))),f&&e.createElement("div",{className:"cover"}),f&&e.createElement(da,{className:"",onClickAway:function(){return t.setState({showUserInfo:!1})},onClickAwayExceptions:[".uploadAvatorDialogId,.mui-dialog-container,.rc-trigger-popup,#uploadAvatorDialogId_mask,.am-modal-mask,.am-modal-wrap"]},e.createElement(pn(),{component:"div",transitionName:"userInfoSide",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},e.createElement(la,{className:E()({isMobile:v,leftNaviStyle:[1,3].includes(A)})},v&&e.createElement(e.Fragment,null,e.createElement("span",{className:"Font17 Hand InlineBlock back pLeft16",onClick:function(){t.setState({showUserInfo:!1})}},e.createElement(W.Z,{icon:"backspace mRight8 Gray_9e"}),_l("\u6211\u7684\u8D26\u6237"))),e.createElement("div",{className:"infoConBox"},e.createElement("div",{className:"account flexRow"},e.createElement("div",{className:"userImage",onClick:this.handleUploadImg},e.createElement("img",{className:"avatarImg",src:(this.state.avatar||"").split("imageView2")[0],style:{width:56,height:56,borderRadius:"50%"}}),e.createElement("div",{className:"hoverAvatar"},e.createElement("span",{className:"Font20 icon-upload_pictures"}))),e.createElement("span",{className:"userName flex mLeft20 Font17"},(p.find(function(u){return u.alias==="name"})||{}).value)),e.createElement("div",{className:E()("email flexRow mTop32")},e.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u624B\u673A\u53F7")),e.createElement("span",{className:"telNumber flex"},(p.find(function(u){return u.alias==="mobilephone"})||{}).value,e.createElement("span",{className:E()("edit ThemeColor3 Hand InlineBlock",{mLeft10:(p.find(function(u){return u.alias==="mobilephone"})||{}).value}),onClick:function(){t.setState({showTelDialog:!0,type:"phone"})}},(p.find(function(u){return u.alias==="mobilephone"})||{}).value?_l("\u4FEE\u6539"):_l("\u7ED1\u5B9A")))),e.createElement("div",{className:E()("tel flexRow mTop24")},e.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u90AE\u7BB1")),e.createElement("span",{className:"telNumber flex"},(p.find(function(u){return u.controlId==="portal_email"})||{}).value,e.createElement("span",{className:E()("edit ThemeColor3 Hand InlineBlock",{mLeft10:(p.find(function(u){return u.controlId==="portal_email"})||{}).value}),onClick:function(){t.setState({showTelDialog:!0,type:"email"})}},(p.find(function(u){return u.controlId==="portal_email"})||{}).value?_l("\u4FEE\u6539"):_l("\u7ED1\u5B9A")))),e.createElement("div",{className:E()("tel flexRow mTop24")},e.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u5BC6\u7801")),e.createElement("span",{className:E()("telNumber flex",{Gray_bd:!this.state.hasPassword})},this.state.hasPassword?_l("\u5DF2\u8BBE\u7F6E"):_l("\u672A\u8BBE\u7F6E"),e.createElement("span",{className:"edit ThemeColor3 Hand mLeft10 InlineBlock",onClick:function(){t.setState({showChangePwd:!0})}},_l("\u4FEE\u6539")))),e.createElement("div",{className:E()("tel flexRow alignItemsCenter mTop24")},e.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u8BED\u8A00\u8BBE\u7F6E")),e.createElement("div",{className:"languagueSetting flexRow flex"},ca.Z.map(function(u){return e.createElement("div",{className:E()("languagueItem flex Hand",{active:(getCookie("i18n_langtag")||md.global.Config.DefaultLang)===u.key}),onClick:function(){pa.Z.editAccountSetting({settingType:"6",settingValue:getCurrentLangCode(u.key).toString()}).then(function(R){R?(setCookie("i18n_langtag",u.key),window.location.reload()):alert(_l("\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)})}},u.value)}))),e.createElement("h6",{className:E()("Font16",{mTop32:!v,mTop24:v})},_l("\u6211\u7684\u4FE1\u606F")),e.createElement("div",{className:"infoBox"},H.filter(function(u){return u.fieldPermission[2]!=="1"}).sort(function(u,T){return u.row-T.row}).map(function(u){return e.createElement("div",{className:"tel flexRow mTop10"},e.createElement("span",{className:"title InlineBlock Gray_9e WordBreak"},u.controlName),e.createElement("span",{className:E()("flex mLeft24 rInfo",{isOption:[9,10,11].includes(u.type)})},(0,gn.IY)((0,M.default)({},u))))}),e.createElement("span",{className:"edit ThemeColor3 Hand mTop12 InlineBlock",onClick:function(){t.setState({showUserInfoDialog:!0})}},_l("\u4FEE\u6539")))),e.createElement("div",{className:"logoutBox"},e.createElement("div",{className:"logout Hand Font14 Bold",onClick:function(){t.logout()}},e.createElement(W.Z,{icon:"exit_to_app",className:"mRight5 Font18"}),_l("\u9000\u51FA\u767B\u5F55")),(0,B.Q9)()?e.createElement("div",{className:"opt Hand TxtCenter",onClick:function(){t.setState({showModel:!0})}},e.createElement(W.Z,{icon:"more_horiz",className:"Font18"})):e.createElement(Ve.Z,{action:["click"],popupVisible:L,onPopupVisibleChange:function(T){t.setState({showMenu:T})},popup:e.createElement(Ue.Z,null,e.createElement(sa,{className:"RedMenuItem",onClick:function(){t.setState({showDelDialog:!0,showMenu:!1})}},e.createElement("span",null,_l("\u6CE8\u9500\u6B64\u8D26\u6237")))),popupClassName:E()("dropdownTrigger"),popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement("div",{className:"opt Hand TxtCenter",onClick:function(){t.setState({showMenu:!0})}},e.createElement(W.Z,{icon:"more_horiz",className:"Font18"}))))))),g&&e.createElement(ra,{popup:!0,animationType:"slide-up",visible:g,className:"appMoreActionWrap",onClose:function(){t.setState({showModel:!1})}},e.createElement("div",{className:"flexRow header"},e.createElement("div",{className:"Font13 Gray_9e flex"},_l("\u66F4\u591A")),e.createElement("div",{className:"closeIcon",onClick:function(){t.setState({showModel:!1})}},e.createElement(W.Z,{icon:"close",className:"Font17 Gray_9e bold"}))),e.createElement("div",{className:"actionContent"},e.createElement("div",{className:"RedMenuItem",onClick:function(){t.setState({showModel:!1,showDelDialog:!0})}},e.createElement("span",null,_l("\u6CE8\u9500\u6B64\u8D26\u6237"))))),s&&e.createElement(mn,{appId:this.props.appId||(0,ue.rh)(this.props.match.params),classNames:(0,B.Q9)()?"forMobilePortal":"",show:s,currentData:p.filter(function(u){return!["avatar","firstLoginTime","roleid","status"].includes(u.alias)&&u.fieldPermission[2]!=="1"}).map(function(u){return["portal_mobile","portal_email"].includes(u.controlId)?(0,M.default)({},u,{disabled:!0}):u}),exAccountId:md.global.Account.accountId,setShow:function(){return t.setState({showUserInfoDialog:!1})},onOk:function(T,R){ce.Z.saveUserDetail({appId:t.props.appId||(0,ue.rh)(t.props.match.params),exAccountId:md.global.Account.accountId,newCell:T.filter(function(J){return R.includes(J.controlId)}).map(hn.jz)}).then(function(J){t.setState({showUserInfoDialog:!1,currentData:T}),R.includes("portal_name")&&location.reload()})}}),D&&e.createElement(Pn,{type:b,baseInfo:h,isBind:!(p.find(function(u){return u.controlId==="portal_email"})||{}).value&&b==="email"||!(p.find(function(u){return u.controlId==="portal_mobile"})||{}).value&&b==="phone",appId:this.props.appId||(0,ue.rh)(this.props.match.params),classNames:(0,B.Q9)()?"forMobilePortal":"",show:D,account:O,exAccountId:md.global.Account.accountId,setShow:function(){return t.setState({showTelDialog:!1,type:""})},onOk:function(){!(p.find(function(T){return T.controlId==="portal_email"})||{}).value&&b==="email"||!(p.find(function(T){return T.controlId==="portal_mobile"})||{}).value&&b==="phone"?t.setState({showTelDialog:!1,type:""},function(){t.getPortalDetail(t.props.appId||(0,ue.rh)(t.props.match.params))}):t.logout()}}),V&&e.createElement(Bn,{type:b,baseInfo:h,appId:this.props.appId||(0,ue.rh)(this.props.match.params),classNames:(0,B.Q9)()?"forMobilePortal":"",show:V,account:O,exAccountId:md.global.Account.accountId,setShow:function(){return t.setState({showChangePwd:!1})},onOk:function(){t.logout()}}),w&&e.createElement(Zn,{url:this.state.url,type:(p.find(function(u){return["portal_mobile"].includes(u.controlId)})||{}).value?"phone":"email",appId:this.props.appId||(0,ue.rh)(this.props.match.params),classNames:(0,B.Q9)()?"forMobilePortal":"",show:w,account:O,exAccountId:md.global.Account.accountId,setShow:function(){return t.setState({showDelDialog:!1})},onOk:function(){t.logout()}}))}}]),n}(e.Component),It=c(51422),we=c(80441),Q=c(60876),fa=c(82248),ma=c(70450),Ye=c(95742),ae=c(70973),yt=c(26581),Fe=c(56002),xe=c(49365),ha=c(41191),va=oe.ZP.div(function(d){var n=d.navColor,o=d.borderColor;return`
    width: 160px;
    height: 32px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      border: 1px solid `+o+` !important;
    }
    a {
      line-height: 1;
    }
    .roledebugSelectWrap-iconWrap {
      padding: 0 9px;
      border-radius: 34px;
      background: `+n+`;
      display: flex;
      height: 24px;
      align-items: center;
      position: relative;
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 34px;
      }
    }
`});const ga=function(d){var n=d.appId,o=d.permissionType,t=d.isLock,a=d.navColor,i=d.iconColor,l=d.showRoleDebug,r=d.debugRole,f=r===void 0?{canDebug:!1}:r,s=d.roleSelectValue,p=s===void 0?[]:s,I=d.otherAllShow,D=I===void 0?!0:I,w=(0,e.useState)(!0),h=(0,U.Z)(w,2),b=h[0],V=h[1],L=(0,e.useState)(!1),g=(0,U.Z)(L,2),m=g[0],v=g[1],C=(f||{}).canDebug||!1;(0,e.useEffect)(function(){!(0,ae.g9)(o)&&!(0,ae.le)(o,t)&&(v(!0),xe.Z.getAppRoleSetting({appId:n,NotOnSettingPage:!0}).then(function(k){var A=k.appSettingsEnum;V(A===1),v(!1)}))},[]);var Z=function(){return i?(0,ha.default)(i).setAlpha(.3).toRgbString():"rgba(255, 255, 255, 0.3)"},F=function(){return C?e.createElement(va,{className:"roledebugSelectWrap mRight12",navColor:a,borderColor:Z()},b&&e.createElement(Fe.Z,{to:"/app/"+n+"/role"},e.createElement(yt.Z,{placement:"bottom",text:_l("\u7528\u6237")},e.createElement("div",{className:"mLeft4 roledebugSelectWrap-iconWrap mRight10"},e.createElement(W.Z,{icon:"group",className:"Font20"})))),e.createElement("div",{className:E()("flex valignWrapper overflowHidden",{pLeft15:!b}),onClick:function(){return l()}},e.createElement("span",{className:"overflow_ellipsis bold flex text valignWrapper"},p.length===0?_l("\u9009\u62E9\u89D2\u8272"):p.length===1?p[0].name:_l("%0\u4E2A\u89D2\u8272",p.length)),e.createElement(yt.Z,{disable:!p.length,placement:"bottom",text:_l("\u6E05\u7A7A\u8C03\u8BD5")},e.createElement(W.Z,{icon:p.length?"cancel":"expand_more",className:"Font16 mRight12 iconHover",onClick:function(H){p.length&&H.stopPropagation(),p.length&&xe.Z.setDebugRoles({appId:n,roleIds:[]}).then(function(y){y&&window.location.reload()})}})))):e.createElement(Fe.Z,{to:"/app/"+n+"/role"},e.createElement("div",{className:"flexRow appExtensionItem","data-tip":_l("\u7528\u6237")},e.createElement(W.Z,{className:"Font20",icon:"group"})))};return m?null:e.createElement("div",{className:"appExtensionWrap"},D&&!window.isPublicApp&&(0,ae.le)(o,t)&&e.createElement(Fe.Z,{to:"/app/"+n+"/workflow"},e.createElement("div",{className:"flexRow appExtensionItem","data-tip":_l("\u5DE5\u4F5C\u6D41")},e.createElement(W.Z,{className:"Font20",icon:"workflow"}))),(b||C)&&F())};var bt=c(74127),Ia=c(91650),Ct=c(91516),xt,Ge,Ke,St,ya=(0,ie.Z)([`
  &.active {
    background-color: `,` !important;
    .sortableItem {
      color: `,` !important;
    }
  }
  .sortableItem::before {
    background-color: `,` !important;
  }
`],[`
  &.active {
    background-color: `,` !important;
    .sortableItem {
      color: `,` !important;
    }
  }
  .sortableItem::before {
    background-color: `,` !important;
  }
`]),ba=oe.ZP.li(ya,function(d){return d.lightIconColor},function(d){return d.textColor},function(d){return d.iconColor}),Ca=(xt=(0,Ae.$j)(function(d){return d},function(d){return(0,bt.DE)({changeBoardViewData:Ia.changeBoardViewData},d)}),xt(Ge=(0,Ye.W8)(Ge=(St=Ke=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));return t.switchVisible=function(a,i){t.setState(a,i)},t.handleFocus=function(){setTimeout(function(){t.$nameRef&&t.$nameRef.current&&t.$nameRef.current.select()},0)},t.handleNameBlur=function(a,i){var l=i.target.value;l=l.trim();var r=t.props.renameAppGroup,f=a.appSectionId,s=a.type,p=l!==we.Hl&&!!l||s===we.sk;r(f,{name:l},p),t.state.dbClickedAppGroupId&&t.setState({dbClickedAppGroupId:""})},t.handleDbClick=function(a){var i=t.props,l=i.ensurePointerVisible,r=i.permissionType;(0,ae.le)(r)&&(clearTimeout(t.clickTimer),t.setState({dbClickedAppGroupId:a},l))},t.getFirstAppItemId=function(){var a=t.props,i=a.permissionType,l=a.value,r=a.appPkg,f=r.viewHideNavi,s=l.workSheetInfo,p=s===void 0?[]:s,I=l.childSections,D=I===void 0?[]:I,w=(f?p:p.filter(function(g){return[1,4].includes(g.status)&&!g.navigateHide}))[0]||{};if(w.type===2){var h=S().find(D,{appSectionId:w.workSheetId}),b=h.workSheetInfo,V=b===void 0?[]:b,L=(f?V:V.filter(function(g){return[1,4].includes(g.status)&&!g.navigateHide}))[0]||{};return L.workSheetId}else return w.workSheetId},t.getNavigateUrl=function(a,i){var l=t.props.appPkg,r=(0,Q.s3)(t.props),f=r.appId;md.global.Account.isPortal&&(f=md.global.Account.appId);var s=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+f))||{},p=S().filter(s.worksheets||[],function(b){return b.groupId===a}),I=p.length?p[p.length-1]:{},D=I.worksheetId,w=I.viewId;if(l.pcNaviStyle===2)return"/app/"+f+"/"+a+"?from=insite";if(l.selectAppItmeType===1){var h=t.getFirstAppItemId();return"/app/"+f+"/"+a+"/"+(h||"")+"?from=insite"}return"/app/"+f+"/"+a+"/"+S().filter([D,w],function(b){return!!b}).join("/")+"?from=insite"},t.handleKeyDown=function(a){var i=a.key,l=a.keyCode;return(i==="Enter"||l===13)&&t.$nameRef.current.blur(),!1},t.ids=(0,Q.s3)(o),t.state={visible:!1,dbClickedAppGroupId:""},t.$nameRef=(0,e.createRef)(),t}return(0,ye.default)(n,[{key:"componentWillReceiveProps",value:function(t){this.ids=(0,Q.s3)(t)}},{key:"shouldComponentUpdate",value:function(t,a){var i=this.props.value.appSectionId,l=(0,Q.s3)(this.props),r=l.groupId;return(0,Q.tg)(this.props.match.params,t.match.params,["appId","groupId"])||(0,Q.tg)(this.props,t,["value"])||(0,Q.tg)(this.props.appPkg,t.appPkg,["displayIcon"])||(0,Q.tg)(this.state,a)||i===r}},{key:"componentWillUnmount",value:function(){clearTimeout(this.clickTimer)}},{key:"render",value:function(){var t=this,a=this.props,i=a.value,l=i===void 0?{}:i,r=a.focusGroupId,f=a.permissionType,s=a.onAppItemConfigClick,p=a.changeBoardViewData,I=a.appPkg,D=a.isLock,w=a.isUpgrade,h=this.state,b=h.visible,V=h.dbClickedAppGroupId,L=l.name,g=l.appSectionId,m=this.ids,v=m.appId,C=m.groupId,Z=g===r||g===V,F=g===C&&!Z&&(0,ae.le)(f),k=this.getNavigateUrl(g),A=(0,B.T3)(v,g).name||L,H=(S().get(I,"displayIcon")||"").split("")[0]==="1";return e.createElement(ba,{className:E()({active:Z||C===g,isCanConfigAppGroup:F}),textColor:["light"].includes(I.themeType)?I.iconColor:"",iconColor:["light","black"].includes(I.themeType)?I.iconColor:"",lightIconColor:["light"].includes(I.themeType)?(0,Ct.i)(I.iconColor):""},Z?e.createElement("div",{className:"sortableItem"},e.createElement("input",{defaultValue:L,ref:this.$nameRef,autoFocus:!0,onFocus:this.handleFocus,onBlur:function(N){return t.handleNameBlur(l,N)},onKeyDown:this.handleKeyDown})):e.createElement(Fe.Z,{className:"sortableItem",to:k,onClick:function(N){if(t.ids.groupId!==g&&p([]),I.pcNaviStyle===2){var G="mdAppCache_"+md.global.Account.accountId+"_"+I.id,O=JSON.parse(localStorage.getItem(G));O.lastGroupId=g,safeLocalStorageSetItem(G,rt()(O))}}},H&&e.createElement(De.Z,{size:20,url:l.iconUrl,fill:["light"].includes(I.themeType)?I.iconColor:"#fff",className:"mRight5"}),e.createElement("span",{title:A,onDoubleClick:function(){return t.handleDbClick(g)}},A)),(0,ae.le)(f)&&!w&&e.createElement(Ve.Z,{action:["click"],popupVisible:b,onPopupVisibleChange:function(N){return t.switchVisible({visible:N})},popupAlign:{points:["tl","bl"],offset:[-63,13]},popup:e.createElement(Ue.Z,{className:"appGroupConfigWrap",onClickAway:function(){return t.switchVisible({visible:!1})}},we.nP.map(function(y){var N=y.type,G=y.icon,O=y.text,u=(0,ve.Z)(y,["type","icon","text"]);return D&&N!=="rename"?"":e.createElement($e.Z,(0,M.default)({key:N,icon:e.createElement(W.Z,{icon:G}),onClick:function(){return t.switchVisible({visible:!1},function(){return s({id:N,appSectionId:g})})}},u),e.createElement("span",null,O))}))},e.createElement("div",{className:"topTri",style:{display:F?"block":"none"},onClick:function(){return t.switchVisible({visible:!0})}})))}}]),n}(e.Component),Ke.propTypes={value:(0,te.shape)({name:te.string,appSectionId:te.string}),focusGroupId:te.string,permissionType:te.number,onAppItemConfigClick:te.func,renameAppGroup:te.func,ensurePointerVisible:te.func},Ke.defaultProps={onAppItemConfigClick:S().noop,renameAppGroup:S().noop,ensurePointerVisible:S().noop,focusGroupId:null,permissionType:0},St))||Ge)||Ge);const xa=(0,Le.Z)((0,Ye.hv)(function(d){var n=d.items,o=d.onScroll,t=d.permissionType,a=(0,ve.Z)(d,["items","onScroll","permissionType"]);return e.createElement("ul",{className:"appItemsWrap",onScroll:S().throttle(o)},n.map(function(i,l){return e.createElement(Ca,(0,M.default)({key:"item-"+l,index:l,disabled:!(0,ae.le)(t),value:i,permissionType:t},a))}))}));var Sa=c(57512),wa=c(16493),Ea=c.n(wa),Me,Je,wt,ka=(0,Le.Z)(Me=(0,Sa.Z)(Me=(wt=Je=function(d){(0,be.default)(n,d);function n(){var o,t,a,i;(0,Ie.default)(this,n);for(var l=arguments.length,r=Array(l),f=0;f<l;f++)r[f]=arguments[f];return i=(t=(a=(0,pe.default)(this,(o=n.__proto__||ge()(n)).call.apply(o,[this].concat(r))),a),a.state={},a.handleCloseClick=function(s){s.stopPropagation(),a.props.onClose()},t),(0,pe.default)(a,i)}return(0,ye.default)(n,[{key:"shouldComponentUpdate",value:function(t){return this.props.className!==t.className}},{key:"render",value:function(){var t=this.props,a=t.addAppGroup,i=t.className;return e.createElement("div",{className:E()("appGroupIntro",i)},e.createElement("div",{className:"title"},_l("\u521B\u5EFA\u5206\u7EC4\u6765\u7BA1\u7406\u5DE5\u4F5C\u8868")),e.createElement("div",{className:"explain"},_l("\u5F53\u4F60\u7684\u5DE5\u4F5C\u8868\u6570\u91CF\u53D8\u591A\u65F6\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA\u5206\u7EC4\u6765\u5206\u7C7B\u7BA1\u7406\u5DE5\u4F5C\u8868\u3002\u5206\u7EC4\u5C06\u6392\u5217\u5728\u9876\u90E8\u5BFC\u822A\u4E2D\uFF0C\u65B9\u4FBF\u4F60\u5728\u4E0D\u540C\u7C7B\u578B\u7684\u5DE5\u4F5C\u8868\u95F4\u5FEB\u901F\u5207\u6362")),e.createElement("div",{className:"introPic"},e.createElement("img",{src:Ea(),alt:_l("\u5E94\u7528\u5206\u7EC4\u4ECB\u7ECD")})),e.createElement("div",{className:"btnWrap"},e.createElement(Pe.ZP,{size:"small",style:{height:36,padding:"0 24px"},onClick:function(r){r.stopPropagation(),a()}},e.createElement(W.Z,{className:"Font16",icon:"add"}),e.createElement("span",{className:"bold"},_l("\u6DFB\u52A0\u5206\u7EC4")))))}}]),n}(e.Component),Je.propTypes={className:te.string,addAppGroup:te.func,onClose:te.func},Je.defaultProps={addAppGroup:S().noop,onClose:S().noop},wt))||Me)||Me,Aa=c(56552),Et=c(15308),kt,At,_e,Nt,Pt,Na=function(){return{}},Pa=function(n){return{updateAppGroup:function(t){return n((0,Ze.mB)(t))},updateIsCharge:function(t){return n((0,Et.updateIsCharge)(t))},updateAppPkgData:function(t){return n((0,Et.updateAppPkgData)(t))}}},Ta=(kt=(0,Ae.$j)(Na,Pa),kt(At=(Nt=_e=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));return Pt.call(t),t.ids=(0,Q.s3)(o),t.state={appRoleType:null,data:[],delAppItemVisible:!1,appItemIntroVisible:!1,disabledPointer:"left",isAppItemOverflow:!1,activeAppItemId:null,focusGroupId:""},t}return(0,ye.default)(n,[{key:"componentDidMount",value:function(){this.getData(this.props),this.removeEventBind=this.bindEvent()}},{key:"componentWillReceiveProps",value:function(t){this.ids=(0,Q.s3)(t),((0,Q.tg)(t.appPkg,this.props.appPkg,["id"])||(0,Q.tg)(t.appPkg,this.props.appPkg,["needUpdate"]))&&this.getData(t)}},{key:"componentWillUnmount",value:function(){this.removeEventBind&&this.removeEventBind()}},{key:"render",value:function(){var t=this,a=this.props,i=a.permissionType,l=a.appStatus,r=a.isLock,f=a.appPkg,s=a.showRoleDebug,p=s===void 0?function(){}:s,I=a.roleSelectValue,D=I===void 0?[]:I,w=a.otherAllShow,h=w===void 0?!0:w,b=this.state,V=b.delAppItemVisible,L=b.appItemIntroVisible,g=b.focusGroupId,m=b.isAppItemOverflow,v=b.activeAppItemId,C=b.disabledPointer,Z=b.appRoleType,F=b.data,k=F===void 0?[]:F;if(!k.length&&typeof Z!="number")return null;var A=this.ids.appId,H=this.throttleFunc(this.ensurePointerStatus),y=k.length===1&&!k[0].name,N=k.length===1?k.filter(function(R){var J=R.name;return!!J}):k.map(function(R){return R.name?R:(0,M.default)({},R,{name:_l("\u672A\u547D\u540D\u5206\u7EC4")})}),G=function(J,X){return e.createElement(ma.Z,{"data-tip":_l("\u6D41\u7A0B\u5F85\u529E"),onClick:X,className:"appExtensionItem",icon:"task_alt",iconSize:20,textSize:14,iconStyle:{margin:0},text:!!J&&e.createElement("div",{className:"flexRow alignItemsCenter mLeft6"},e.createElement("div",{className:"count"},J))})},O=(0,B.FL)(),u=O.tb,T=O.tr;return e.createElement(e.Fragment,null,h?e.createElement(e.Fragment,null,y&&u?e.createElement("div",{className:"emptyAppItemWrap"},(0,ae.le)(i,r)&&e.createElement(e.Fragment,null,e.createElement("div",{className:E()("emptyAppItem active"),style:["light"].includes(f.themeType)?{backgroundColor:(0,Ct.i)(f.iconColor)}:null,onClick:function(J){t.switchVisible({appItemIntroVisible:!0})}},e.createElement(W.Z,{className:"emptyGroupIcon",icon:"group_inactive"})),e.createElement(ka,{className:E()({appItemIntroVisible:L}),addAppGroup:this.handleAddAppGroupFromEmpty,onClickAway:function(){return t.switchVisible({appItemIntroVisible:!1})},onClose:function(){return t.switchVisible({appItemIntroVisible:!1})}}))):u?e.createElement("div",{className:"appItemsOuterWrap"},S().includes([1,5],l)&&e.createElement("div",{className:"appItemsInnerWrap",onScroll:H},e.createElement(xa,(0,M.default)({items:N,onSortEnd:this.onSortEnd,axis:"x",lockAxis:"x",distance:5,transitionDuration:0,helperClass:"appGroupSortHelperClass",focusGroupId:g,isAppItemOverflow:m,onScroll:H,activeAppItemId:v,onClickAway:function(){v!==""&&t.setState({activeAppItemId:""})},ensurePointerVisible:this.ensurePointerVisible,onAppItemConfigClick:this.handleAppItemConfigClick,renameAppGroup:this.handleRenameAppGroup,handleAddAppGroup:this.handleAddAppGroup},this.props)))):e.createElement("div",{className:"appItemsOuterWrap"})):e.createElement("span",{className:"flex"}),T&&e.createElement(e.Fragment,null,e.createElement("div",{className:E()("appItemPointerWrap pointer",{visible:m}),onClick:this.handlePointerClick},e.createElement("div",{className:E()("leftPointer appItemPointer",{disable:C==="left"})}),e.createElement("div",{className:E()("rightPointer appItemPointer",{disable:C==="right"})})),h&&!md.global.Account.isPortal&&!window.isPublicApp&&f.appStatus!==4&&e.createElement("div",{className:"appExtensionWrap"},e.createElement(It.Z,{type:"appPkg",renderContent:G})),S().includes([1,5],l)&&!md.global.Account.isPortal&&e.createElement(ga,{appId:A,permissionType:i,isLock:r,navColor:f.navColor,iconColor:f.iconColor,showRoleDebug:p,debugRole:f.debugRole,roleSelectValue:D,otherAllShow:h}),h&&V&&e.createElement(Aa.Z,{data:k.filter(function(R){return R.appSectionId!==t.handledAppItemId}),onOk:function(J){return t.handleDelAppSection(J)},onCancel:function(){return t.switchVisible({delAppItemVisible:!1})}})))}}]),n}(e.Component),_e.propTypes={permissionType:(0,te.oneOf)([0,1,2,3,100,200,300]),appStatus:(0,te.oneOf)([0,1,2,3,4,5]),updateAppGroup:te.func},_e.defaultProps={updateAppGroup:S().noop},Pt=function(){var n=this;this.handledAppItemId="",this.getData=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:n.props,t=n.ids.appId;if(md.global.Account.isPortal&&(t=md.global.Account.appId),!!t){var a=o.appPkg,i=a.sections,l=a.permissionType,r=a.isLock,f=(0,ae.le)(l,r);n.props.updateIsCharge(f),n.props.updateAppPkgData({appRoleType:l,isLock:r});var s=f?i:(i||[]).map(function(p){return(0,M.default)({},p,{workSheetInfo:p.workSheetInfo.filter(function(I){return[1,4].includes(I.status)&&!I.navigateHide})})}).filter(function(p){return p.workSheetInfo&&p.workSheetInfo.length>0});n.props.updateAppGroup(s),window["app_"+t+"_is_charge"]=f,n.setState({appRoleType:l,data:s},function(){setTimeout(function(){n.ensurePointerVisible()},500)})}},this.throttleFunc=function(o){return S().throttle(o)},this.bindEvent=function(){var o=n.throttleFunc(n.ensurePointerVisible);return window.addEventListener("resize",o),document.addEventListener("readystatechange",n.ensurePointerVisibleWhenLoaded),function(){window.removeEventListener("resize",o),document.removeEventListener("readystatechange",n.ensurePointerVisibleWhenLoaded)}},this.ensurePointerVisibleWhenLoaded=function(){document.readyState==="complete"&&n.ensurePointerVisible()},this.switchVisible=function(o,t){n.setState(o,t)},this.onSortEnd=function(o){var t=o.oldIndex,a=o.newIndex,i=n.state.data;t!==a&&n.setState({data:(0,Ye.Rp)(i,t,a)},function(){n.props.updateAppGroup(n.state.data),n.updateAppGroupSort()})},this.updateAppGroupSort=function(){var o=n.ids.appId,t=n.state.data,a=t.map(function(i){var l=i.appSectionId;return l});q.Z.updateAppSectionSort({appId:o,appSectionIds:a})},this.ensurePointerStatus=function(){var o=document.querySelector(".appItemsInnerWrap");if(o){var t=n.state.disabledPointer,a=o.offsetWidth,i=o.scrollLeft,l=o.scrollWidth,r=i+a;if(!i&&t!=="left"){n.setState({disabledPointer:"left"});return}if(r===l&&t!=="right"){n.setState({disabledPointer:"right"});return}i&&r<l&&t!==null&&n.setState({disabledPointer:null})}},this.ensurePointerVisible=function(){var o=document.querySelector(".appItemsInnerWrap");if(!o){n.setState({isAppItemOverflow:!1});return}var t=o.offsetWidth,a=o.scrollWidth;n.setState({isAppItemOverflow:t<a})},this.scrollEle=function(o,t){o&&(o.scrollLeft=t)},this.handlePointerClick=function(o){var t=o.target,a=document.querySelector(".appItemsInnerWrap"),i=a||{},l=i.offsetWidth,r=i.scrollLeft,f=t.classList.contains("leftPointer"),s=t.classList.contains("rightPointer"),p=Math.floor(l/2);f&&n.scrollEle(a,Math.max(0,r-p)),s&&n.scrollEle(a,r+p),n.ensurePointerStatus()},this.handleAppItemConfigClick=function(o){var t=o.id,a=o.type,i=o.appSectionId,l=n.state.data,r=n.ids.appId;switch(n.handledAppItemId=i,t){case"rename":n.setState({focusGroupId:i});return;case"addAfter":n.handleAddAppGroup({type:a,appSectionId:i});return;case"del":l.length<=1?n.delLastAppGroup():q.Z.getAppSectionDetail({appSectionId:i,appId:r}).then(function(f){var s=f.workSheetInfo,p=s===void 0?[]:s;p.length<1?n.handleDelAppSection():n.setState({delAppItemVisible:!0})});return}},this.delLastAppGroup=function(){var o=n.state.data,t=o[0].appSectionId;n.handleRenameAppGroup(t,{name:""})},this.handleDelAppSection=function(o){var t=n.ids.appId;q.Z.deleteAppSection({appId:t,appSectionId:n.handledAppItemId,sourceAppSectionId:o}).then(function(a){if(a.data){var i=S().clone(n.state.data),l=S().findIndex(i,function(r){var f=r.appSectionId;return f===n.handledAppItemId});i.splice(l,1),n.setState({data:i}),n.props.updateAppGroup(i),(0,de.T8)("/app/"+t+"/"+(o||""))}}),n.setState({delAppItemVisible:!1})},this.handleAddAppGroupFromEmpty=function(){n.switchVisible({appItemIntroVisible:!1});var o=n.state.data,t=o[0]||{},a=t.appSectionId,i=S().cloneDeep(o);i[0]=(0,M.default)({},i[0],{name:_l("\u672A\u547D\u540D\u5206\u7EC4"),type:we.sk}),n.setState({focusGroupId:a,data:i}),n.props.updateAppGroup(i)},this.handleAddAppGroup=function(o){var t=o?o.appSectionId:"",a=n.state.data,i=n.ids.appId,l={name:_l("\u672A\u547D\u540D\u5206\u7EC4")};q.Z.addAppSection((0,M.default)({appId:i,sourceAppSectionId:t},l)).then(function(r){var f=r.data,s=(0,M.default)({appSectionId:f},l);if(t){var p=S().cloneDeep(a),I=p.findIndex(function(D){return D.appSectionId===t});p.splice(I+1,0,s),n.props.updateAppGroup(p),n.setState({data:p,focusGroupId:f})}else n.props.updateAppGroup(a.concat(s)),n.setState({data:a.concat(s),focusGroupId:f});(0,de.T8)("/app/"+i+"/"+f,!0),n.ensurePointerVisible()}).catch(function(){n.setState({focusGroupId:null})})},this.handleRenameAppGroup=function(o,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=n.ids.appId;a&&q.Z.updateAppSectionName((0,M.default)({appSectionId:o,appId:i},t)).then(function(l){var r=l.data;r&&n.updateSingleAppGroup(o,t)}),n.ensurePointerVisible(),n.setState({focusGroupId:null,activeAppItemId:""})},this.updateSingleAppGroup=function(o,t){for(var a=n.state.data,i=S().cloneDeep(a),l=0;l<i.length;l++){var r=i[l];if(r.appSectionId===o){i[l]=(0,M.default)({},r,t);break}}n.setState({data:i}),n.props.updateAppGroup(i)},this.formatDataToDropdownItems=function(o){return o.filter(function(t){var a=t.appSectionId,i=t.name;return!!i&&a!==n.handledAppItemId}).map(function(t){var a=t.appSectionId,i=t.name;return{value:a,text:i}})}},Nt))||At),Da=c(53328),Ro=c(85175),qe=c(20838),Vo=c(97373),Se=c(94055),et=c(47426),Fo=c(10524),We=c(31059),Za=c(54208),La=c(338),Ra=c(8796),Va=c(11105),Fa=c(10509),Tt="navigationGroup",Ga=function d(n,o,t){return n.map(function(a){return a.id===o?(0,M.default)({},a,t):(0,M.default)({},a,{items:d(a.items||[],o,t)})})},Ma=function d(n,o){return n.filter(function(t){var a=t.items,i=a===void 0?[]:a;return t.id===o.id?!1:(t.items=d(i,o),!0)})},Wa=function d(n,o,t){var a=S().findIndex(n,{id:o.id});return a==-1?n.map(function(i){var l=i.items,r=l===void 0?[]:l;return(0,M.default)({},i,{items:d(r,o,t)})}):(o.parentId||(t.parentId=void 0),n.splice(t.first?a:a+1,0,t),n)},Ba=function d(n,o,t){return n.map(function(a){var i=a.items,l=i===void 0?[]:i;return a.id===o.id?(0,M.default)({},a,{items:l.concat(t)}):(0,M.default)({},a,{items:d(a.items||[],o,t)})})},Oa=function d(n){var o=n.isFirstGroup,t=n.parentId,a=n.hideAppSection,i=n.data,l=(0,ve.Z)(n,["isFirstGroup","parentId","hideAppSection","data"]),r=l.app,f=i.id,s=i.layerIndex,p=i.items,I=p===void 0?[]:p,D=i.name||_l("\u672A\u547D\u540D\u5206\u7EC4"),w=l.onUpdateAppItem,h=l.onDeleteGroup,b=l.onAddGroup,V=l.onMoveGroup,L=(0,e.useRef)(null),g=(0,e.useState)(!1),m=(0,U.Z)(g,2),v=m[0],C=m[1],Z=(0,e.useState)(!1),F=(0,U.Z)(Z,2),k=F[0],A=F[1],H=(0,e.useState)(!1),y=(0,U.Z)(H,2),N=y[0],G=y[1],O=(0,e.useState)(!0),u=(0,U.Z)(O,2),T=u[0],R=u[1],J=(0,e.useState)(i.edit),X=(0,U.Z)(J,2),P=X[0],x=X[1],j=!!I.length;(0,e.useEffect)(function(){x(i.edit)},[i.edit]);var le=(0,La.L)({accept:Tt,drop:function(z,se){var re=z.data,he=i;re.id!==he.id&&(v||k)&&(re.first=N,V(z.data,i,k))},hover:function(z,se){if(L.current){var re=z.data,he=i;if(re.id!==he.id)if(K.isOver){var Ut=function(){var Io=se.getClientOffset(),ot=L.current.getBoundingClientRect(),yo=(ot.bottom-ot.top)/2,$t=Io.y-ot.top;return $t<=yo&&$t>=10};if(he.index===0){var mo=se.getClientOffset(),at=L.current.getBoundingClientRect(),Mo=(at.bottom-at.top)/2,ho=mo.y-at.top;G(ho<=10)}else G(!1);if(re.layerIndex===0&&he.layerIndex===0&&C(!0),re.layerIndex&&!re.isAppItem){if(!he.isAppItem&&[0].includes(he.layerIndex)){var vo=Ut();A(vo)}[0,1].includes(he.layerIndex)&&C(!0)}if(re.layerIndex&&re.isAppItem){if(!he.isAppItem){var go=Ut();A(go)}he.layerIndex&&C(!0)}}else C(!1),A(!1),G(!1)}},collect:function(z){return{handlerId:z.getHandlerId(),isOver:z.isOver({shallow:!0})}}}),fe=(0,U.Z)(le,2),K=fe[0],Y=fe[1],me=(0,Ra.c)({item:{type:Tt,data:i},collect:function(z){return{isDragging:z.isDragging()}}}),Ee=(0,U.Z)(me,3),Oe=Ee[0].isDragging,Ot=Ee[1],uo=Ee[2];uo(Y(L));var fo=function(z,se){return z.layerIndex=s+1,z.isAppItem=z.type!==2,z.parentId=f,z.parentStatus=i.status,z.index=se,e.createElement(d,(0,M.default)({key:z.id,parentId:f,index:se,data:z},l))},Ht=function(){return j&&T&&e.createElement("div",{className:"childrenGroup"},I.map(fo))},nt=i.status===2||i.parentStatus===2;return e.createElement("div",{ref:L,"data-handler-id":K.handlerId,className:E()((0,ke.default)({firstGroup:o},N?"activeFirst":"active",K.isOver&&v&&!k)),style:{opacity:Oe?0:1,transform:"translate(0px, 0px)"}},o?e.createElement(e.Fragment,null,e.createElement("div",{className:E()("flexRow alignItemsCenter groupHeader",{activeGroup:K.isOver&&k,open:j&&T,hover:j&&T,hide:a})},e.createElement("div",{ref:Ot,onMouseDown:function(){return R(!1)}},e.createElement(W.Z,{icon:"drag",className:"Gray_9e pointer operateIcon mRight5"})),e.createElement(W.Z,{icon:T?"arrow-down":"arrow-right-tip",className:"Gray_9e pointer mRight5",onClick:function(){return R(!T)}}),e.createElement(De.Z,{url:md.global.FileStoreConfig.pubHost+"/customIcon/"+(i.icon||"8_4_folder")+".svg",fill:"#9e9e9e",className:"mRight5"}),e.createElement("span",{className:"flex name ellipsis",onClick:function(){return R(!T)}},(0,B.T3)(r.id,f).name||D),e.createElement(Ve.Z,{action:["click"],popupVisible:P,onPopupVisibleChange:function(z){x(z),P&&w(i,{edit:!1})},destroyPopupOnHide:!0,popupAlign:{points:["tr","br"],offset:[0,5],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(je.Z,{projectId:r.projectId,name:i.name,icon:i.icon,hideColor:!0,className:"Relative",onChange:function(z){var se=z.name,re=z.icon;(se&&se!==i.name||re)&&w(i,{name:se,icon:re||i.icon,edit:!1})}})},e.createElement(Se.default,{title:_l("\u4FEE\u6539"),placement:"bottom"},e.createElement(W.Z,{className:"Gray_9e pointer Font17 operateIcon",icon:"sp_edit_white",onClick:function(){return x(!0)}}))),e.createElement(Se.default,{title:_l("\u5220\u9664"),placement:"bottom"},e.createElement(W.Z,{className:"Gray_9e pointer Font17 operateIcon",icon:"delete2",onClick:function(){return h(i)}})),e.createElement(Se.default,{title:_l("\u65B0\u5EFA\u5B50\u5206\u7EC4"),placement:"bottom"},e.createElement(W.Z,{className:"Gray_9e pointer Font20 operateIcon",icon:"add",onClick:function(){R(!0),b(i)}})),!j&&e.createElement("span",{className:"Gray_75 withoutChildrenHint"},_l("\u6CA1\u6709\u5E94\u7528\u9879"))),Ht()):e.createElement(e.Fragment,null,e.createElement("div",{className:E()("flexRow alignItemsCenter groupWrap",{hover:P,activeGroup:K.isOver&&k})},e.createElement("div",{ref:Ot,onMouseDown:function(){return R(!1)}},e.createElement(W.Z,{icon:"drag",className:"Gray_9e pointer operateIcon mRight5"})),e.createElement("div",{className:"flexRow alignItemsCenter w100",style:{paddingLeft:i.isAppItem?20*s:0}},i.isAppItem?e.createElement(De.Z,{url:md.global.FileStoreConfig.pubHost+"/customIcon/"+i.icon+".svg",fill:"#9e9e9e"}):e.createElement(e.Fragment,null,e.createElement(W.Z,{icon:T?"arrow-down":"arrow-right-tip",className:"Gray_9e pointer mRight5",onClick:function(){return R(!T)}}),e.createElement(De.Z,{url:md.global.FileStoreConfig.pubHost+"/customIcon/"+(i.icon||"8_4_folder")+".svg",fill:"#9e9e9e"})),e.createElement("span",{className:"flex name mLeft10 ellipsis",onClick:function(){return!i.isAppItem&&R(!T)}},(0,B.T3)(r.id,f).name||D),e.createElement(Ve.Z,{action:["click"],popupVisible:P,onPopupVisibleChange:function(z){x(z),P&&w(i,{edit:!1})},destroyPopupOnHide:!0,popupAlign:{points:["tr","br"],offset:[0,5],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(je.Z,{projectId:r.projectId,name:i.name,icon:i.icon,hideColor:!0,className:"Relative",onChange:function(z){var se=z.name,re=z.icon;(se&&se!==i.name||re)&&w(i,{name:se,icon:re||i.icon,edit:!1})}})},e.createElement(Se.default,{title:_l("\u4FEE\u6539"),placement:"bottom"},e.createElement(W.Z,{className:"Gray_9e pointer Font17 operateIcon",icon:"sp_edit_white",onClick:function(){return x(!0)}}))),!i.isAppItem&&e.createElement(Se.default,{title:_l("\u5220\u9664"),placement:"bottom"},e.createElement(W.Z,{className:"Gray_9e pointer Font17 operateIcon",icon:"delete2",onClick:function(){return h(i,t)}})),e.createElement(Se.default,{title:nt?_l("\u53D6\u6D88\u9690\u85CF"):_l("\u9690\u85CF"),placement:"bottom"},e.createElement(W.Z,{icon:"visibility_off",style:{color:nt?"#ee6f09":"#9e9e9e"},className:E()("pointer Font17",nt?"mRight16":"operateIcon"),onClick:function(){i.parentStatus!==2&&w(i,{status:i.status===1?2:1})}})))),Ht()))},Ha=function(n){var o=n.app,t=(0,e.useState)(!0),a=(0,U.Z)(t,2),i=a[0],l=a[1],r=(0,e.useState)([]),f=(0,U.Z)(r,2),s=f[0],p=f[1],I=function(m){p(m)};(0,e.useEffect)(function(){q.Z.getApp({appId:o.id,getSection:!0}).then(function(g){var m=g.sections;l(!1),p(m.map(function(v){return v.items=v.workSheetInfo.map(function(C){if(C.type===2){var Z=S().find(v.childSections,{appSectionId:C.workSheetId})||{},F=Z.workSheetInfo,k=F===void 0?[]:F;C.items=k.map(function(A){return A.id=A.workSheetId,A.name=A.workSheetName,A})}return C.id=C.workSheetId,C.name=C.workSheetName,C}),v.id=v.appSectionId,v}))})},[]);var D=function(m,v){var C=m.id,Z=Ga(s,C,v);I(Z),v.name&&(m.isAppItem?xe.Z.editWorkSheetInfoForApp({appId:o.id,appSectionId:m.parentId,workSheetId:C,icon:v.icon||m.icon,workSheetName:v.name}).then(function(F){F||alert(_l("\u7F16\u8F91\u5931\u8D25"),2)}):q.Z.updateAppSection({appId:o.id,appSectionId:C,appSectionName:v.name,icon:v.icon}).then(function(F){F.code!==1&&alert(_l("\u7F16\u8F91\u5931\u8D25"),2)})),v.status&&q.Z.setWorksheetStatus({appId:o.id,status:v.status,worksheetId:C}).then(function(F){F.code!==1&&alert(_l("\u7F16\u8F91\u5931\u8D25"),2)})},w=function(m,v,C){var Z=Ma(S().cloneDeep(s),m);if(C)xe.Z.removeWorkSheetAscription({sourceAppId:o.id,resultAppId:o.id,sourceAppSectionId:m.parentId,ResultAppSectionId:v.id,workSheetsInfo:[{workSheetId:m.id,type:m.type,icon:m.icon,iconColor:o.iconColor,iconUrl:m.iconUrl,workSheetName:m.name,createType:m.createType}]}).then(function(u){u||alert(_l(_l("\u79FB\u52A8\u5931\u8D25")),2)}),I(Ba(Z,v,m));else{var F=m.parentId,k=v.parentId,A=Wa(Z,v,m);if(I(A),F!==k){xe.Z.removeWorkSheetAscription({sourceAppId:o.id,resultAppId:o.id,sourceAppSectionId:F,ResultAppSectionId:k,workSheetsInfo:[{workSheetId:m.id,type:m.type,icon:m.icon||"8_4_folder",iconColor:o.iconColor,iconUrl:m.iconUrl,workSheetName:m.name,createType:m.createType}]}).then(function(u){if(u){if(v.layerIndex===0&&q.Z.updateAppSectionSort({appId:o.id,appSectionIds:A.map(function(x){return x.id})}).then(function(x){}),v.layerIndex===1){var T=S().find(A,{id:k}).items.map(function(x){return x.id});q.Z.updateSectionChildSort({appId:o.id,appSectionId:k,workSheetIds:T}).then(function(x){})}if(v.layerIndex===2){var R=A.filter(function(x){return S().find(x.items,{id:k})})[0]||{},J=R.items,X=J===void 0?[]:J,P=S().find(X,{id:k}).items.map(function(x){return x.id});q.Z.updateSectionChildSort({appId:o.id,appSectionId:k,workSheetIds:P}).then(function(x){})}}else alert(_l(_l("\u79FB\u52A8\u5931\u8D25")),2)});return}if(m.layerIndex===0&&m.parentId===v.parentId&&q.Z.updateAppSectionSort({appId:o.id,appSectionIds:A.map(function(u){return u.id})}).then(function(u){u.code!==1&&alert(_l("\u6392\u5E8F\u5931\u8D25"),2)}),m.layerIndex===1&&m.parentId===v.parentId){var H=S().find(A,{id:m.parentId}).items.map(function(u){return u.id});q.Z.updateSectionChildSort({appId:o.id,appSectionId:m.parentId,workSheetIds:H}).then(function(u){u.code!==1&&alert(_l("\u6392\u5E8F\u5931\u8D25"),2)})}if(m.layerIndex===2&&m.parentId===v.parentId){var y=A.filter(function(u){return S().find(u.items,{id:m.parentId})})[0]||{},N=y.items,G=N===void 0?[]:N,O=S().find(G,{id:m.parentId}).items.map(function(u){return u.id});q.Z.updateSectionChildSort({appId:o.id,appSectionId:m.parentId,workSheetIds:O}).then(function(u){u.code!==1&&alert(_l("\u6392\u5E8F\u5931\u8D25"),2)})}}},h=function(m){var v=_l("\u672A\u547D\u540D\u5206\u7EC4"),C=m?"8_4_folder":void 0;if(!m&&s.length===1&&S().isEmpty(s[0].name)){I(s.map(function(Z){return Qe()(Z,{edit:!0,name:v})}));return}q.Z.addAppSection({appId:o.id,name:v.slice(0,100),icon:C,parentId:m?m.id:void 0,rootId:m?m.id:void 0}).then(function(Z){if(Z.code===1)if(m){var F=s.map(function(k){if(k.id===m.id){var A=k.items,H=A===void 0?[]:A;return(0,M.default)({},k,{items:H.concat({id:Z.data,name:v,icon:C,edit:!0,type:2,items:[]})})}else return k});I(F)}else I(s.concat({id:Z.data,name:v,edit:!0,type:2,items:[]}))})},b=function(m,v){var C=m.id,Z=m.layerIndex,F=m.type,k=m.items,A=k===void 0?[]:k;Z===0&&(s.length===1||A.length)?s.length===1?(I(s.map(function(H){return Qe()(H,{name:""})})),q.Z.updateAppSection({appId:o.id,appSectionId:C,appSectionName:"",icon:m.icon}).then(function(H){})):A.length&&alert(_l("\u975E\u7A7A\u5BFC\u822A\u7EC4\u4E0D\u80FD\u5220\u9664"),3):q.Z.deleteAppSection({appId:o.id,appSectionId:C}).then(function(H){H.code===1&&I(v?s.map(function(y){if(y.id===v){var N=y.items,G=N===void 0?[]:N,O=(S().find(G,{id:C})||{}).items;return(0,M.default)({},y,{items:G.filter(function(u){return u.id!==C}).concat(O.map(function(u){return(0,M.default)({},u,{parentGroupId:void 0})}))})}else return y}):s.filter(function(y){return y.id!==C}))})};if(i)return e.createElement(Za.Z,null);var V=s.length===1&&S().isEmpty(s[0].name)&&!s[0].edit,L=function(m,v){return m.layerIndex=0,m.index=v,e.createElement(Oa,{isFirstGroup:!0,key:m.id,index:v,hideAppSection:V,data:m,app:o,onUpdateAppItem:D,onMoveGroup:w,onAddGroup:h,onDeleteGroup:b})};return e.createElement(Va.W,{key:"navigation",context:window,backend:Fa.PD},e.createElement("div",null,s.map(function(g,m){return L(g,m)})),e.createElement("div",{className:"flexRow alignItemsCenter ThemeColor bold mBottom12"},e.createElement("div",{className:"pointer",onClick:function(){return h()}},e.createElement(W.Z,{icon:"add"}),e.createElement("span",null,_l("\u5206\u7EC4")))))};const Ua=Ha;var $a=[{name:_l("\u5217\u8868"),value:0,style:"list",activeStyle:"list_active"},{name:_l("\u5BAB\u683C"),value:1,style:"sudoku",activeStyle:"sudoku_active"},{name:_l("\u5E95\u90E8\u5BFC\u822A"),value:2,style:"nav",activeStyle:"nav_active"}],Dt=[{name:_l("\u7ECF\u5178"),value:0,style:"classic",activeStyle:"classic_active",defaultDisplayIcon:"011"},{name:_l("\u5206\u7EC4\u5217\u8868"),value:1,style:"left_group",activeStyle:"left_group_active",defaultDisplayIcon:"011"},{name:_l("\u6811\u5F62\u5217\u8868"),value:3,style:"left_tree",activeStyle:"left_tree_active",defaultDisplayIcon:"100"},{name:_l("\u5361\u7247"),value:2,style:"card",activeStyle:"card_active",defaultDisplayIcon:"011"}];function ja(d){var n=d.type,o=d.data,t=d.onChangeApp,a=o.projectId,i=o.id,l=n==="pcNaviStyle"?Dt:$a,r=o[n],f=function(p){var I=(0,ke.default)({},n,p.value);p.defaultDisplayIcon&&(I.displayIcon=p.defaultDisplayIcon),t(I)};return e.createElement("div",{className:"AppNavStyleWrap"},e.createElement("div",{className:"flexRow valignWrapper"},l.map(function(s){return e.createElement("div",{key:s.value,className:"flexColumn valignWrapper Relative pointer iconWrap",onClick:function(){f(s)}},r===s.value&&e.createElement("div",{className:"flexRow valignWrapper activeIcon"},e.createElement(W.Z,{icon:"done"})),e.createElement("div",{className:E()("navImg",n,r===s.value?s.activeStyle:s.style)}),e.createElement("span",{className:E()({ThemeColor:r===s.value})},s.name))})))}function za(d){var n=d.projectId,o=d.appId,t=d.visible,a=d.onClose,i=d.app,l=d.onChangeApp,r=(0,e.useState)(!1),f=(0,U.Z)(r,2),s=f[0],p=f[1],I=(0,e.useState)(i.gridDisplayMode||0),D=(0,U.Z)(I,2),w=D[0],h=D[1],b=(0,e.useState)(i.appNaviDisplayType||0),V=(0,U.Z)(b,2),L=V[0],g=V[1],m=(0,e.useState)(i.expandType||0),v=(0,U.Z)(m,2),C=v[0],Z=v[1],F=(0,e.useState)(i.displayIcon||"011"),k=(0,U.Z)(F,2),A=k[0],H=k[1],y=(0,e.useState)(i.hideFirstSection||!1),N=(0,U.Z)(y,2),G=N[0],O=N[1];(0,e.useEffect)(function(){t&&p(!0)},[t]);var u=function(P){return e.createElement(e.Fragment,null,e.createElement("div",{className:"content mBottom24"},e.createElement("div",{className:"title Font13 mBottom12 pAll0 bold"},_l("\u5BFC\u822A\u65B9\u5F0F")),e.createElement(ja,{type:P,data:i,onChangeApp:function(j){l(j)}})))},T=function(P){return e.createElement(e.Fragment,null,P.map(function(x,j){return e.createElement(We.default,{className:E()("mLeft0 mRight10",{hide:!x.show}),checked:A.split("")[j]==="1",onChange:function(fe){var K=fe.target.checked?"1":"0",Y=A.split("").map(function(me,Ee){return Ee===j?K:me}).join("");H(Y),l({displayIcon:Y})}},e.createElement("span",{className:"Normal"},x.name))}))},R=function(){return e.createElement(e.Fragment,null,u("pcNaviStyle"),e.createElement("div",{className:"content mBottom24"},e.createElement("div",{className:"title Font13 mBottom15 pAll0 bold"},_l("\u8BBE\u7F6E")),i.currentPcNaviStyle===3&&e.createElement("div",{className:"flexRow alignItemsCenter mBottom15"},e.createElement("div",{style:{width:100}},_l("\u5C55\u5F00\u65B9\u5F0F")),e.createElement(et.ZP,{size:"middle",data:[{text:_l("\u5E38\u89C4"),value:0},{text:_l("\u624B\u98CE\u7434"),value:1}],checkedValue:C,onChange:function(x){Z(x),l({expandType:x})}})),e.createElement("div",{className:"flexRow alignItemsCenter mBottom15"},e.createElement("div",{style:{width:100}},_l("\u663E\u793A\u56FE\u6807")),i.currentPcNaviStyle===0&&T([{name:_l("\u7B2C1\u7EA7"),show:!0},{name:_l("\u7B2C2\u7EA7"),show:!0},{name:_l("\u7B2C3\u7EA7"),show:!0}]),i.currentPcNaviStyle===1&&T([{name:_l("\u7B2C1\u7EA7"),show:!1},{name:_l("\u7B2C2\u7EA7"),show:!1},{name:_l("\u7B2C3\u7EA7"),show:!0}]),i.currentPcNaviStyle===2&&T([{name:_l("\u7B2C1\u7EA7"),show:!0},{name:_l("\u7B2C2\u7EA7"),show:!0},{name:_l("\u7B2C3\u7EA7"),show:!1}]),i.currentPcNaviStyle===3&&T([{name:_l("\u7B2C1\u7EA7"),show:!1},{name:_l("\u7B2C2\u7EA7"),show:!0},{name:_l("\u7B2C3\u7EA7"),show:!0}])),e.createElement("div",{className:"flexRow"},e.createElement("div",{style:{width:100}},_l("\u5176\u4ED6")),e.createElement("div",{className:"flex"},e.createElement(We.default,{checked:i.selectAppItmeType===2,onChange:function(x){l({selectAppItmeType:i.selectAppItmeType===2?1:2})}},e.createElement("span",{className:"Normal"},_l("\u8BB0\u4F4F\u4E0A\u6B21\u8BBF\u95EE\u7684\u5E94\u7528\u9879"))),i.currentPcNaviStyle===3&&e.createElement("div",{className:"flexRow alignItemsCenter mTop3"},e.createElement(We.default,{checked:G,onChange:function(x){O(x.target.checked),l({hideFirstSection:x.target.checked})}},e.createElement("span",{className:"Normal"},_l("\u9690\u85CF\u9996\u4E2A\u5206\u7EC4\u6807\u9898"))),e.createElement(Se.default,{title:_l("\u5728\u6811\u5F62\u5217\u8868\u4E2D\uFF0C\u9690\u85CF\u7B2C 1 \u7EA7\u5206\u7EC4\u6807\u9898\uFF0C\u76F4\u63A5\u663E\u793A\u5206\u7EC4\u5185\u5E94\u7528\u9879\u3002\u901A\u5E38\u7528\u4E8E\u9996\u4E2A\u5206\u7EC4\u4E2D\u7684\u5E94\u7528\u9879\u4F5C\u4E3A\u5E94\u7528\u9996\u9875\u7684\u573A\u666F"),arrowPointAtCenter:!0,placement:"bottom"},e.createElement(W.Z,{className:"Font16 Gray_9e pointer",icon:"info_outline"})))))),e.createElement("div",{className:"flexRow alignItemsCenter mBottom12 title"},e.createElement("div",{className:"flex Font13 bold"},_l("\u5BFC\u822A\u7BA1\u7406")),e.createElement(We.default,{checked:i.viewHideNavi,onChange:function(x){l({viewHideNavi:x.target.checked})}},e.createElement("span",{className:"Normal"},_l("\u67E5\u770B\u9690\u85CF\u9879"))),e.createElement(Se.default,{title:_l("\u52FE\u9009\u65F6\uFF0C\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u5E94\u7528\u4E2D\u67E5\u770B\u9690\u85CF\u7684\u5E94\u7528\u9879\u3002\u53D6\u6D88\u52FE\u9009\u65F6\uFF0C\u5BF9\u7BA1\u7406\u5458\u4E5F\u540C\u65F6\u9690\u85CF"),arrowPointAtCenter:!0,placement:"topRight"},e.createElement(W.Z,{className:"Font16 Gray_9e pointer",icon:"info_outline"}))),e.createElement("div",{className:"content"},e.createElement(Ua,d)))},J=function(){return e.createElement("div",{className:"pLeft24"},i.appNaviStyle===1&&e.createElement(e.Fragment,null,e.createElement("div",{className:"bold mTop30 mBottom14 Font13"},_l("\u663E\u793A\u6A21\u5F0F")),e.createElement(et.ZP,{size:"middle",className:"mBottom30 mobileNavRadio",data:[{text:_l("\u4E5D\u5BAB\u683C"),value:0},{text:_l("\u5341\u516D\u5BAB\u683C"),value:1}],checkedValue:w,onChange:function(x){h(x),l({gridDisplayMode:x})}})),e.createElement("div",{className:E()("bold mBottom12 Font13",{mTop20:i.appNaviStyle===0})},_l("\u5206\u7EC4\u5C55\u5F00\u65B9\u5F0F")),e.createElement(et.ZP,{size:"middle",className:"mBottom20 mobileNavRadio",data:[{text:_l("\u9ED8\u8BA4\u5168\u5C55\u5F00"),value:0},{text:_l("\u9ED8\u8BA4\u5168\u6536\u8D77"),value:1},{text:_l("\u6BCF\u6B21\u5C55\u5F00\u5355\u4E2A\u4E00\u7EA7\u5206\u7EC4\uFF08\u5176\u4ED6\u81EA\u52A8\u6536\u8D77\uFF09"),value:2}],checkedValue:L,onChange:function(x){g(x),l({appNaviDisplayType:x})}}))};return e.createElement("div",{className:"navigationConfig"},e.createElement("div",{className:"flexRow alignItemsCenter title"},e.createElement("div",{className:"flex Font17 bold"},_l("\u5BFC\u822A\u8BBE\u7F6E")),e.createElement(W.Z,{icon:"close",className:"Font20 Gray_9e pointer",onClick:a})),e.createElement(qe.Z,{defaultActiveKey:"pc"},e.createElement(qe.Z.TabPane,{tab:_l("PC\u7AEF"),key:"pc"},R()),e.createElement(qe.Z.TabPane,{tab:_l("\u79FB\u52A8\u7AEF"),key:"mobile"},u("appNaviStyle"),i.appNaviStyle!==2&&J())))}var Go=c(28789),Qa=c(89499),Xa=c(50610),Ya=c(98452),Ce=c(15742),Ka=c(20845),Ja=c(12935),_a=(0,ie.Z)([`
  width: 105px;
`],[`
  width: 105px;
`]),qa=(0,ie.Z)([`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  width: 400px;
  padding-bottom: 120px;
  background-color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  z-index: 20;
  padding: 16px 0;
  .roleSelectHeader {
    padding: 0 24px;
    .changeTypeCon:hover {
      color: #0e65bc !important;
    }
  }
  .roleSelectSearch {
    padding: 0 15px 0 24px;
    .roleSearch {
      width: 100%;
      background: #fff !important;
      border-radius: 0;
      border-bottom: 1px solid #eaeaea;
    }
  }
  .roleSelectList {
    padding: 0 12px;
    overflow: scroll;
    .item {
      padding: 14px 12px;
      border-radius: 3px;
      height: 42px;
      .icon {
        color: #9e9e9e;
      }
      &:hover {
        background: #f7f7f7;
      }
      &.active {
        background: #e4f3fd;
        font-weight: 600;
        color: #2196f3;
        .icon {
          color: #2196f3;
        }
      }
    }
  }
  .roleMultipleValues {
    padding: 16px 24px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .clearAll:hover {
      color: #2196f3 !important;
    }
    .top {
      justify-content: space-between;
    }
    .values {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      li {
        padding: 6px;
        background: #eaeaea;
        border-radius: 3px;
        max-width: 100px;
        .icon:hover {
          color: #757575 !important;
        }
      }
    }
  }
`],[`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  width: 400px;
  padding-bottom: 120px;
  background-color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  z-index: 20;
  padding: 16px 0;
  .roleSelectHeader {
    padding: 0 24px;
    .changeTypeCon:hover {
      color: #0e65bc !important;
    }
  }
  .roleSelectSearch {
    padding: 0 15px 0 24px;
    .roleSearch {
      width: 100%;
      background: #fff !important;
      border-radius: 0;
      border-bottom: 1px solid #eaeaea;
    }
  }
  .roleSelectList {
    padding: 0 12px;
    overflow: scroll;
    .item {
      padding: 14px 12px;
      border-radius: 3px;
      height: 42px;
      .icon {
        color: #9e9e9e;
      }
      &:hover {
        background: #f7f7f7;
      }
      &.active {
        background: #e4f3fd;
        font-weight: 600;
        color: #2196f3;
        .icon {
          color: #2196f3;
        }
      }
    }
  }
  .roleMultipleValues {
    padding: 16px 24px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .clearAll:hover {
      color: #2196f3 !important;
    }
    .top {
      justify-content: space-between;
    }
    .values {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      li {
        padding: 6px;
        background: #eaeaea;
        border-radius: 3px;
        max-width: 100px;
        .icon:hover {
          color: #757575 !important;
        }
      }
    }
  }
`]),eo=oe.ZP.div(_a),to=oe.ZP.div(qa);function no(d){var n=d.id,o=d.posX,t=d.handleClose,a=d.data,i=a===void 0?[]:a,l=d.visible,r=d.appId,f=(0,e.useState)(i),s=(0,U.Z)(f,2),p=s[0],I=s[1],D=(0,e.useState)(void 0),w=(0,U.Z)(D,2),h=w[0],b=w[1],V=(0,e.useState)([]),L=(0,U.Z)(V,2),g=L[0],m=L[1],v=(0,e.useState)(0),C=(0,U.Z)(v,2),Z=C[0],F=C[1];(0,e.useEffect)(function(){var y=i.filter(function(G){return G.seleted}).map(function(G){return G.roleId});m(y);var N=localStorage.getItem("mingRoleDebugType");F(N?Number(N):y.length>1?1:0)},[i]),(0,e.useEffect)(function(){l&&xe.Z.getDebugRoles({appId:r}).then(function(y){var N=y.roles;I(N)})},[l]);var k=function(N){xe.Z.setDebugRoles({appId:n,roleIds:N||g}).then(function(G){G&&(m(N||g),window.location.reload())})},A=function(N,G){if(Z===0)k([N]);else{if(G&&g.includes(N))return;m(G?g.concat(N):g.filter(function(O){return O!==N}))}},H=function(){Z===1&&m([]),F(Z===0?1:0),safeLocalStorageSetItem("mingRoleDebugType",Z===0?1:0)};return e.createElement(to,{className:"flexColumn",style:{transform:"translate3d("+o+"px,0,0)"}},e.createElement("div",{className:"roleSelectHeader valignWrapper mBottom12"},e.createElement("span",{className:"flex overflow_ellipsis Font17 Bold"},_l("\u9009\u62E9\u89D2\u8272")),e.createElement("span",{className:"ThemeColor Font12 Hand changeTypeCon",onClick:H},Z===0?_l("\u591A\u9009\u6A21\u5F0F"):_l("\u9000\u51FA\u591A\u9009")),e.createElement(W.Z,{className:"mLeft20 Font16 Gray_9d pointer",icon:"clear_bold",onClick:function(){return t()}})),Z===1&&e.createElement("div",{className:"roleMultipleValues"},e.createElement("div",{className:"valignWrapper top"},e.createElement("span",{className:"Bold"},_l("\u5DF2\u9009\u62E9"),g.length?"\uFF08"+g.length+"\uFF09":""),e.createElement("span",{className:"Gray_bd Hand clearAll",onClick:function(){return m([])}},_l("\u6E05\u7A7A"))),!!g.length&&e.createElement("ul",{className:"values mTop11"},g.map(function(y){return e.createElement("li",{className:"Font12 overflow_ellipsis"},(p.find(function(N){return N.roleId===y})||{}).name,e.createElement(W.Z,{icon:"clear",className:"mLeft6 Gray_9d Hand icon",onClick:function(){return A(y,!1)}}))}))),e.createElement("div",{className:"roleSelectSearch mTop4 mBottom16"},e.createElement(Ja.Z,{className:"roleSearch",placeholder:_l("\u641C\u7D22"),value:h,onChange:function(N){return b(N.trim())}})),e.createElement("ul",{className:"roleSelectList flex"},p.filter(function(y){return!h||y.name.toLowerCase().includes(h.toLowerCase())}).map(function(y,N){return e.createElement(e.Fragment,null,[0,3].includes(N)&&e.createElement("p",{className:"Font12 pLeft12 mBottom4 mTop10 Gray_9e"},N===0?_l("\u7CFB\u7EDF"):_l("\u81EA\u5B9A\u4E49")),e.createElement("li",{className:E()("item Hand valignWrapper",{active:Z===0&&g.includes(y.roleId)}),key:y.roleId,onClick:function(){A(y.roleId,!g.includes(y.roleId))}},Z===1&&e.createElement(Ka.Z,{checked:g.includes(y.roleId),onClick:function(O){return A(y.roleId,!O)}}),e.createElement("span",{className:"flex overflow_ellipsis valignWrapper"},we.UE[y.roleType]&&e.createElement(W.Z,{icon:we.UE[y.roleType],className:"icon mRight8 Font20"}),y.name)))})),Z===1&&e.createElement(eo,{className:"pLeft24"},e.createElement(Pe.ZP,{size:"medium",onClick:function(){return k()}},_l("\u786E\u5B9A"))))}const ao=(0,Le.Z)(no);var Zt,Lt,tt,Rt,Vt,oo=function(n){var o=n.sheet,t=n.sheetList,a=n.appPkg.appStatus;return{sheet:o,sheetList:t,appStatus:a}},io=function(n){return{syncAppDetail:function(t){return n((0,Ze.E6)(t))},updateColor:function(t){return n((0,Ze.uA)(t))},updateNavColor:function(t){return n((0,Ze.DP)(t))},setAppStatus:function(t){return n((0,Ze.Wf)(t))},refreshSheetList:function(){return n((0,st.refreshSheetList)())}}},lo=/\/app\/(.*)\/(.*)(\/(.*))?\/row\/(.*)|\/app\/(.*)\/newrecord\/(.*)\/(.*)/,ro=/\/app\/(.*)\/workflowdetail\/record\/(.*)\/(.*)/,Be=function(n){return lo.test(n)||ro.test(n)},Ft={x:139,y:23},so=(Zt=(0,Ae.$j)(oo,io),Zt(Lt=(Rt=tt=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));Vt.call(t);var a=(0,Q.s3)(o),i=a.appId,l=safeParse(localStorage.getItem("openedApps"),"array");return t.state={indexSideVisible:!1,appConfigVisible:!1,modifyAppIconAndNameVisible:!1,editAppIntroVisible:!1,isEditing:!1,isShowAppIntroFirst:!S().includes(l,i),navigationConfigVisible:!1,copyAppVisible:!1,data:{},hasChange:!1,noUseBackupRestore:!1,appAnalyticsVisible:!1,modifyAppLockPasswordVisible:!1,lockAppVisisble:!1,roleDebugVisible:!1,roleList:[]},t}return(0,ye.default)(n,[{key:"componentDidMount",value:function(){this.ids=(0,Q.s3)(this.props),this.getData(),window.updateAppGroups=this.getData;var t=safeParse(localStorage.getItem("openedApps"),"array"),a=this.ids.appId;S().includes(t,a)||safeLocalStorageSetItem("openedApps",rt()(t.concat(a)))}},{key:"componentWillReceiveProps",value:function(t){if(this.ids=(0,Q.s3)(t),(0,Q.tg)(t.match.params,this.props.match.params,["appId"])&&this.getData(t),this.ids.appId===(0,Q.s3)(this.props).appId&&Be(t.location.pathname)||Be(this.props.location.pathname)){var a=this.state.data,i=Be(t.location.pathname),l=i?0:a.pcNaviStyle,r=i?0:t.appStatus;this.setState({data:(0,M.default)({},a,{currentPcNaviStyle:l})}),this.props.syncAppDetail({currentPcNaviStyle:l}),this.props.setAppStatus(r),this.checkNavigationStyle(l)}if(this.ids.appId===(0,Q.s3)(this.props).appId&&(0,Q.tg)(t.match.params,this.props.match.params,["worksheetId"])){var f=this.state.data.currentPcNaviStyle;f===2&&this.checkIsFull(t.match.params.worksheetId)}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.clickTimer),$('[rel="icon"]').attr("href","/favicon.png"),document.querySelector("body").classList.remove("leftNavigationStyleWrap"),delete window.updateAppGroups}},{key:"render",value:function(){var t=this,a=this.props,i=a.appStatus,l=(0,ve.Z)(a,["appStatus"]),r=this.state,f=r.indexSideVisible,s=r.editAppIntroVisible,p=r.isEditing,I=r.navigationConfigVisible,D=r.isShowAppIntroFirst,w=r.copyAppVisible,h=r.data,b=r.isAutofucus,V=r.appAnalyticsVisible,L=r.roleDebugVisible,g=r.roleList,m=h.id,v=h.iconColor,C=v===void 0?"#616161":v,Z=h.navColor,F=Z===void 0?"#616161":Z,k=h.iconUrl,A=h.description,H=h.permissionType,y=h.isLock,N=h.projectId,G=h.fixed,O=h.pcDisplay,u=h.currentPcNaviStyle,T=h.themeType,R=h.debugRole,J=i===10,X=S().includes([1,5],i),P=(0,ae.le)(H,y),x=(0,ae.le)(H)||(0,ae.g9)(H),j=[1,3].includes(u)?Da.ZP:Ta,le=(0,B.T3)(m,m).name||h.name,fe=(R||{}).canDebug||!1;return S().isEmpty(h)?null:e.createElement("div",{className:E()("appPkgHeaderWrap",T),style:{backgroundColor:F,width:[1,3].includes(u)?240:void 0}},e.createElement(on(),{title:le}),this.renderAppInfoWrap(le),[1,3].includes(u)&&((O||G)&&!P||J)&&e.createElement("div",{className:"LeftAppGroupWrap w100 h100"},e.createElement(qt.Z,{active:!1})),(!(G&&!x)&&!(O&&!x)||fe)&&e.createElement(j,(0,M.default)({appStatus:i,projectId:N,appPkg:h,roleSelectValue:(R||{}).selectedRoles||[],roleDebugVisible:L},l,S().pick(h,["permissionType","isLock"]),{showRoleDebug:function(){t.setState({roleDebugVisible:!L})},otherAllShow:!(G&&!x)&&!(O&&!x)})),[1,3].includes(u)&&e.createElement(e.Fragment,null,e.createElement("div",{className:"topRadius",style:{color:F}}),e.createElement("div",{className:"bottomRadius",style:{color:F}}),T==="light"&&e.createElement(e.Fragment,null,e.createElement("svg",{className:"topBorderRadius",width:"14px",height:"22px",viewBox:"0 0 14 22",version:"1.1"},e.createElement("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},e.createElement("path",{d:"M0.5,22 L0.5,13.9851088 C0.503434088,13.8199063 0.5,13.6531791 0.5,13.4856816 C0.5,6.59003004 6.32029825,1 13.5,1",stroke:"#0000001a"}))),e.createElement("div",{className:"borderLine"}),e.createElement("svg",{className:"bottomBorderRadius",width:"14px",height:"22px",viewBox:"0 0 14 22",version:"1.1"},e.createElement("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},e.createElement("path",{d:"M0.5,21 L0.5,12.9851088 C0.503434088,12.8199063 0.5,12.6531791 0.5,12.4856816 C0.5,5.59003004 6.32029825,0 13.5,0",stroke:"#0000001a",transform:"translate(7.000000, 10.500000) scale(1, -1) translate(-7.000000, -10.500000) "}))))),e.createElement(_t.Z,{zIndex:1e3,className:"appIntroDialog",wrapClassName:E()("appIntroDialogWrapCenter",{preview:!p}),visible:s||!window.isPublicApp&&D&&A&&X,onCancel:function(){return t.switchVisible({editAppIntroVisible:!1,isShowAppIntroFirst:!1})},animation:"zoom",width:800,footer:null,centered:!0,maskStyle:{backgroundColor:"rgba(0, 0, 0, 0.7)"},bodyStyle:{padding:0},maskAnimation:"fade",mousePosition:Ft,closeIcon:e.createElement(W.Z,{icon:"close"})},e.createElement(fa.Z,{cacheKey:"appIntroDescription",data:h,description:p?A:(0,B.T3)(m,m).description||A,permissionType:H,isLock:y,isEditing:p,changeEditState:function(Y){t.setState({isEditing:Y})},changeSetting:function(){t.setState({hasChange:!0})},onSave:function(Y){t.handleEditApp("",{description:Y||(t.state.hasChange?Y:A)}),t.setState({hasChange:!1}),t.switchVisible({isShowAppIntroFirst:!1,hasChange:!1})},onCancel:function(){return t.switchVisible({editAppIntroVisible:!1,isShowAppIntroFirst:!1,hasChange:!1})}})),w&&e.createElement(ln.Z,{title:le,para:{appId:m},onCancel:function(){return t.switchVisible({copyAppVisible:!1})}}),e.createElement(Jt.Z,{bodyStyle:{display:"flex",flexDirection:"column",padding:"0"},width:900,title:null,visible:I,destroyOnClose:!0,closeIcon:null,onClose:this.closeNavigationConfigVisible,placement:"right"},e.createElement(za,{app:h,onChangeApp:function(Y){var me=(0,M.default)({},h,Y);t.setState({data:me}),t.updateAppDetail(Y),t.props.syncAppDetail(me)},visible:I,onClose:this.closeNavigationConfigVisible})),e.createElement(Re.y_,{style:{x:(0,Re.ST)(f?0:-352)}},function(K){var Y=K.x;return e.createElement(sn.Z,{posX:Y,visible:f,onClose:function(){return t.setState({indexSideVisible:!1})},onClickAway:function(){return f&&t.setState({indexSideVisible:!1})}})}),md.global.Account.isPortal?e.createElement(ua,{appId:md.global.Account.appId,name:le,iconColor:h.iconColor,currentPcNaviStyle:u}):[1,3].includes(u)?e.createElement(ct.i,(0,M.default)({type:"appPkg",isAuthorityApp:P,data:h},l)):e.createElement(ct.Z,(0,M.default)({type:"appPkg"},l)),V&&e.createElement(Xa.default,{currentAppInfo:{appId:m,name:le,iconColor:C,iconUrl:k},projectId:N,onCancel:function(){t.setState({appAnalyticsVisible:!1})}}),e.createElement(Re.y_,{style:{x:(0,Re.ST)(L?0:400)}},function(K){var Y=K.x;return e.createElement(ao,(0,M.default)({},S().pick(h,["permissionType","id"]),{visible:L,data:g,posX:Y,appId:m,handleClose:function(){return t.setState({roleDebugVisible:!1})},onClickAway:function(Ee){if(L){var Oe=document.querySelector(".roleSelectCon");Oe&&Oe.contains(Ee)||t.setState({roleDebugVisible:!1})}}}))}))}}]),n}(e.Component),tt.propTypes={appStatus:(0,te.oneOf)([0,1,2,3,4,5]),updateColor:te.func,updateNavColor:te.func,syncAppDetail:te.func},tt.defaultProps={appStatus:0,updateColor:S().noop,updateNavColor:S().noop,syncAppDetail:S().noop},Vt=function(){var n=this;this.checkIsFull=function(o){o?document.querySelector("#wrapper").classList.add("fullWrapper"):document.querySelector("#wrapper").classList.remove("fullWrapper")},this.checkNavigationStyle=function(o){[1,3].includes(o)?document.querySelector("body").classList.add("leftNavigationStyleWrap"):document.querySelector("body").classList.remove("leftNavigationStyleWrap")},this.getThemeType=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#616161",t=arguments[1],a=(0,tn.generate)(o)[0];return[a,"#ffffff","#f5f6f7"].includes(t)?"light":t==="#1b2025"?"black":"theme"},this.getData=function(){var o=(0,Kt.Z)(lt().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:n.props,i,l,r,f,s,p,I,D;return lt().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(i=a.syncAppDetail,l=n.ids,r=l.appId,f=l.worksheetId,!(!r||r==="id")){h.next=4;break}return h.abrupt("return");case 4:return r=md.global.Account.isPortal?md.global.Account.appId:r,h.next=7,q.Z.getApp({appId:r,getSection:!0,getManager:!window.isPublicApp,getLang:!0},{silent:!0});case 7:if(s=h.sent,p=s.langInfo,!(p&&p.appLangId&&p.version!==window["langVersion-"+r])){h.next=15;break}return h.next=12,xe.Z.getAppLangDetail({projectId:s.projectId,appId:r,appLangId:p.appLangId});case 12:I=h.sent,window["langData-"+r]=I.items,window["langVersion-"+r]=p.version;case 15:S().isEmpty(p)&&(window["langData-"+r]=void 0,window["langVersion-"+r]=void 0),s.currentPcNaviStyle=Be(location.pathname)||!S().find(Dt,{value:s.pcNaviStyle})?0:s.pcNaviStyle,s.themeType=n.getThemeType(s.iconColor,s.navColor),s.needUpdate=Date.now(),n.setState({data:s}),D=S().pick(s,["navColor","iconColor","lightColor","iconUrl","projectId","name","id","fixed","fixRemark","fixAccount","isLock","permissionType","appDisplay","webMobileDisplay","pcDisplay","pcNaviStyle","currentPcNaviStyle","themeType","viewHideNavi","managers","selectAppItmeType","debugRole","displayIcon"]),i(D),n.checkNavigationStyle(s.currentPcNaviStyle),s.currentPcNaviStyle===2?n.checkIsFull(f):document.querySelector("#wrapper").classList.remove("fullWrapper"),window.appInfo=s,n.dataCache=S().pick(s,["icon","iconColor","name"]),(0,B.tl)(s.iconUrl,s.iconColor);case 27:case"end":return h.stop()}},t,n)}));return function(){return o.apply(this,arguments)}}(),this.switchVisible=function(o,t){n.setState(o,t)},this.updateData=function(o){var t=n.state.data,a=(0,M.default)({},t,o);n.setState({data:a})},this.handleAppConfigClick=function(o){var t;n.setState((t={appConfigVisible:!1},(0,ke.default)(t,o,!0),(0,ke.default)(t,"isEditing",!0),t))},this.handleAppIconAndNameChange=function(o){var t=n.dataCache&&Xt()(o).every(function(a){return o[a]===n.dataCache[a]});t||n.updateAppDetail(o)},this.updateAppDetail=function(o){var t=n.ids,a=t.appId,i=t.groupId,l=S().pick(n.state.data,["projectId","iconColor","navColor","icon","description","name"]);o.name||(o=S().omit(o,"name"));var r=(0,M.default)({},l,o);q.Z.editAppInfo((0,M.default)({appId:a},r)).then(function(f){var s=f.data;n.dataCache=S().pick(r,["icon","iconColor","navColor","name"]),s&&n.updateData(o),"pcNaviStyle"in o&&o.pcNaviStyle!==n.state.data.currentPcNaviStyle&&(o.pcNaviStyle===2?location.href="/app/"+a+"/"+(i||""):window.location.reload())})},this.handleEditApp=function(o,t){var a;n.switchVisible((a={},(0,ke.default)(a,o,!1),(0,ke.default)(a,"isShowAppIntroFirst",!1),a)),n.updateAppDetail(t)},this.handleModify=function(o){var t=n.state.data;o.name===""&&(o=(0,M.default)({},o,{name:n.dataCache.name})),o.iconColor&&n.props.updateColor(o.iconColor),o.navColor&&(n.props.updateNavColor(o.navColor),o.themeType=n.getThemeType(o.iconColor,o.navColor)),n.props.syncAppDetail(o),n.updateData(o)},this.handleAppNameClick=function(o){o.stopPropagation();var t=n.state.data.currentPcNaviStyle,a=n.props,i=a.location,l=a.sheet,r=a.sheetList;if(/row|role|workflow|newrecord/.test(i.pathname)){var f=(0,Q.s3)(n.props),s=f.appId;(0,de.T8)("/app/"+s);return}var p=l.base,I=l.views,D=l.isCharge,w=r.data,h=r.appSectionDetail,b=p.worksheetId,V=p.viewId,L=p.appId,g=p.groupId,m=g===void 0?"":g,v=t===2?"":(0,Qa.h2)([1,3].includes(t)?h:w,D)||"";if(L&&b!==v){(0,de.T8)("/app/"+L+"/"+m+"/"+v);return}var C=S().head(I)||{},Z=C.viewId;L&&b===v&&V!==Z&&(0,de.T8)("/app/"+L+"/"+m+"/"+v+"/"+Z)},this.renderMenu=function(o){var t=o.type,a=o.icon,i=o.text,l=o.action,r=(0,ve.Z)(o,["type","icon","text","action"]),f=n.state.data,s=f.projectId,p=f.isLock,I=f.isPassword,D=f.permissionType,w=S().includes([Ce.lt.ADMIN_ROLE,Ce.lt.DEVELOPERS_ROLE,Ce.lt.RUNNER_DEVELOPERS_ROLE,Ce.lt.POSSESS_ROLE],D);if(!(t==="unlockApp"&&!(w&&I))){if(r.featureId){var h=(0,B.XH)(s,r.featureId);if(!h)return}return S().includes(["appAnalytics","copy","worksheetapi","modifyAppLockPassword"],t)?e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"100%",margin:"6px 0",borderTop:"1px solid #EAEAEA"}}),n.renderMenuHtml((0,M.default)({type:t,icon:a,text:i,action:l},r))):n.renderMenuHtml((0,M.default)({type:t,icon:a,text:i,action:l},r))}},this.toSetEnterpirse=function(){var o=n.state.data.projectId;(0,de.T8)("/admin/workwxapp/"+o),n.setState({noIntegratedWechat:!1})},this.submitApply=function(){var o=n.state.data,t=o.projectId,a=o.appId;editWorkWXAlternativeAppStatus({projectId:t,appId:a}).then(function(i){i?alert(_l("\u63D0\u4EA4\u7533\u8BF7\u6210\u529F")):alert(_l("\u63D0\u4EA4\u7533\u8BF7\u5931\u8D25"),2)}),n.setState({integratedWechat:!1})},this.renderMenuHtml=function(o){var t=o.type,a=o.icon,i=o.text,l=o.action,r=(0,ve.Z)(o,["type","icon","text","action"]),f=n.ids.appId,s=n.state.data,p=s.projectId,I=s.sourceType,D=s.permissionType,w=s.isPassword,h=s.isLock,b=(0,B.XH)(p,r.featureId),V=D===Ce.lt.POSSESS_ROLE;return e.createElement($e.Z,(0,M.default)({key:t,className:E()("appConfigItem",t),icon:e.createElement(W.Z,{className:"appConfigItemIcon Font18",icon:a}),onClick:function(g){if(g.stopPropagation(),n.setState({appConfigVisible:!1}),S().includes(["appAnalytics","appLogs"],t)&&(0,B.XH)(p,r.featureId)==="2"){(0,B.j0)(p,r.featureId);return}if(t==="appAnalytics"){window.open("/app/"+f+"/analytics/"+p,"__blank");return}if(t==="appLogs"){window.open("/app/"+f+"/logs/"+p,"__blank");return}if(t==="modifyAppLockPassword"){(0,Ya.gC)({appId:f,sourceType:I,isPassword:w,isOwner:V,isLock:h,refreshPage:function(){location.reload()}});return}if(t==="worksheetapi"){window.open("/worksheetapi/"+f);return}if(t==="appManageMenu"){var m=localStorage.getItem("appManageMenu");(0,de.T8)("/app/"+f+"/settings/"+(m||"options"));return}n.handleAppConfigClick(l)}},r),e.createElement("span",null,i),S().includes(["appAnalytics","appLogs"],t)&&b==="2"&&e.createElement(zt.Z,null),t==="worksheetapi"&&e.createElement(W.Z,{icon:"external_collaboration",className:"mLeft10 worksheetapiIcon"}))},this.changeIndexVisible=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;n.timer=setTimeout(function(){window.disabledSideButton||n.setState({indexSideVisible:o})},100)},this.closeNavigationConfigVisible=function(){var o=n.state.data;n.switchVisible({navigationConfigVisible:!1}),window.updateAppGroups&&window.updateAppGroups(),n.props.refreshSheetList()},this.renderAppInfoWrap=function(o){var t=n.props,a=t.appStatus,i=(0,ve.Z)(t,["appStatus"]),l=n.state,r=l.appConfigVisible,f=l.modifyAppIconAndNameVisible,s=l.data,p=s.id,I=s.iconUrl,D=s.navColor,w=s.iconColor,h=s.description,b=s.permissionType,V=s.isLock,L=s.isPassword,g=s.projectId,m=s.fixed,v=s.pcDisplay,C=s.currentPcNaviStyle,Z=s.themeType,F=s.sourceType,k=S().includes([10,11],a),A=S().includes([1,5],a),H=(0,B.FL)(),y=H.s,N=H.tb,G=H.tr,O=(0,Q.hq)(we.s2,b)||[],u=(0,ae.le)(b,V),T=S().includes([Ce.lt.ADMIN_ROLE,Ce.lt.DEVELOPERS_ROLE,Ce.lt.RUNNER_DEVELOPERS_ROLE,Ce.lt.POSSESS_ROLE],b);(S().find(md.global.Account.projects,function(P){return P.projectId===g})||{}).cannotCreateApp&&S().remove(O,function(P){return P.type==="copy"}),V&&L&&T?O=S().filter(O,function(P){return S().includes(["modify","editIntro","appAnalytics","appLogs","modifyAppLockPassword"],P.type)}):O=S().filter(O,function(P){return!S().includes(["modifyAppLockPassword"],P.type)});var R=function(){return window.backHomepageWay===1?e.createElement("div",{className:"homepageIconWrap",onClick:function(){(0,de.T8)("/dashboard")}},e.createElement("div",{className:"homepageIcon alignItemsCenter justifyContentCenter",style:{flexWrap:"nowrap"}},e.createElement(W.Z,{className:"Font20",icon:"home_page"}))):e.createElement("div",{className:"homepageIconWrap",onClick:function(){window.disabledSideButton=!1,n.changeIndexVisible()},onMouseEnter:n.changeIndexVisible,onMouseLeave:function(){window.disabledSideButton=!1,clearTimeout(n.timer)}},e.createElement(rn.Z,null))},J=function(){return e.createElement(e.Fragment,null,N&&e.createElement("div",{className:E()("appDetailWrap pointer overflowHidden"),onDoubleClick:function(j){j.stopPropagation(),(0,ae.le)(b,V)&&A&&n.setState({modifyAppIconAndNameVisible:!0})}},e.createElement("div",{className:"appIconAndName pointer overflow_ellipsis",onClick:n.handleAppNameClick},e.createElement("div",{className:"appIconWrap"},e.createElement(De.Z,{url:I,fill:["black","light"].includes(Z)?w:"#FFF",size:[1,3].includes(C)?28:24})),e.createElement("span",{className:"appName overflow_ellipsis"},o))),!(v&&!u)&&(m||k)&&e.createElement("div",{className:E()({appFixed:m,appUpgrade:k})},k?a===11?_l("\u8FD8\u539F\u4E2D"):_l("\u5347\u7EA7\u4E2D"):_l("\u7EF4\u62A4\u4E2D")),(A&&((0,ae.le)(b,V)||(0,ae.g9)(b))&&N||V&&T)&&!k&&e.createElement("div",{className:"appConfigIcon pointer",onClick:function(){n.setState({appConfigVisible:!0})}},e.createElement(W.Z,{icon:"expand_more",className:"Font18",style:{lineHeight:"inherit"}}),r&&e.createElement(Ue.Z,{style:{top:"45px",width:"220px",padding:"6px 0"},onClickAway:function(){return n.setState({appConfigVisible:!1})}},O.map(function(x){var j=x.type,le=x.icon,fe=x.text,K=x.action,Y=(0,ve.Z)(x,["type","icon","text","action"]);return n.renderMenu((0,M.default)({type:j,icon:le,text:fe,action:K},Y))}))),((0,ae.U9)(b,V)?h:!0)&&A&&e.createElement("div",{className:"appIntroWrap pointer","data-tip":_l("\u5E94\u7528\u8BF4\u660E"),onClick:function(j){Ft={x:j.pageX,y:j.pageY},n.setState({editAppIntroVisible:!0,isEditing:!1})}},e.createElement(W.Z,{className:"appIntroIcon Font16",icon:"info"})),f&&e.createElement(je.Z,(0,M.default)({projectId:g},S().pick(s,["icon","iconColor","name","navColor"]),{className:"modifyAppInfo",onNameInput:n.handleNameInput,onModify:n.handleModify,onChange:n.handleAppIconAndNameChange,onClose:function(){return n.switchVisible({selectIconVisible:!1})},onClickAway:function(){return n.switchVisible({modifyAppIconAndNameVisible:!1})},onClickAwayExceptions:[".mui-dialog-container"],onShowNavigationConfig:(0,ae.le)(b,V)?function(){n.setState({navigationConfigVisible:!0})}:null})))};if([1,3].includes(C)){var X=function(x,j){return e.createElement("div",{className:"flexRow alignItemsCenter pointer White backlogWrap",onClick:j},e.createElement(W.Z,{icon:"task_alt",className:"Font18"}),e.createElement("div",{className:"mLeft5 mRight5 bold"},_l("\u5F85\u529E")),!!x&&e.createElement("div",{className:"count"},x))};return e.createElement("div",{className:"appInfoWrap flexColumn pLeft10 pRight10 mBottom8"},e.createElement("div",{className:"flexRow alignItemsCenter pTop10"},e.createElement("div",{className:"flex"},!(window.isPublicApp||!y||md.global.Account.isPortal)&&R()),!(md.global.Account.isPortal||window.isPublicApp)&&G&&e.createElement(It.Z,{type:"appPkg",renderContent:X})),e.createElement("div",{className:"flexRow alignItemsCenter pTop10 Relative"},J()))}else return e.createElement("div",{className:"appInfoWrap flexRow alignItemsCenter"},window.isPublicApp||!y||md.global.Account.isPortal?e.createElement("div",{className:"mLeft16"}):R(),J())}},Rt))||Lt),Gt,Mt,co,Wt,Bt,po=(Gt=(0,Ae.$j)(void 0,function(d){return{updateSheetListLoading:(0,bt.DE)(st.updateSheetListLoading,d)}}),Gt(Mt=(Wt=co=function(d){(0,be.default)(n,d);function n(o){(0,Ie.default)(this,n);var t=(0,pe.default)(this,(n.__proto__||ge()(n)).call(this,o));Bt.call(t),t.isRequest=!1,(o.path==="/worksheet/:worksheetId?"||o.path==="/worksheet/:worksheetId/view/:viewId")&&location.href.indexOf("/row/")<0&&t.compatibleWorksheetRoute();var a=(0,Q.s3)(o),i=a.appId,l=a.groupId,r=a.worksheetId;return i&&!r&&!l&&t.completePara({appId:i,groupId:l}),t}return(0,ye.default)(n,[{key:"componentWillReceiveProps",value:function(t){var a=(0,Q.s3)(t),i=a.appId,l=a.groupId,r=a.worksheetId;i===_.get(window,"appInfo.id")&&_.get(window,"appInfo.currentPcNaviStyle")===2||((i!==(0,Q.s3)(this.props).appId||l!==(0,Q.s3)(this.props).groupId)&&(this.isRequest=!1),i&&!r&&!l&&this.completePara({appId:i,groupId:l}))}},{key:"render",value:function(){var t=(0,ve.Z)(this.props,[]),a=(0,B.FL)(),i=a.s,l=a.tb,r=a.tr;return!i&&!l&&!r?null:e.createElement(so,t)}}]),n}(e.Component),Bt=function(){var n=this;this.compatibleWorksheetRoute=function(){var o=(0,Q.s3)(n.props),t=o.worksheetId,a=o.viewId;q.Z.getAppSimpleInfo({workSheetId:t}).then(function(i){var l=i.appId,r=i.appSectionId,f=i.workSheetId;l&&r&&((0,B.Q9)()?location.href="/mobile/recordList/"+l+"/"+r+"/"+f+(a?"/"+a:"")+(location.search||""):(0,de.T8)("/app/"+l+"/"+r+"/"+f+(a?"/"+a:"")+(location.search||""),!0))})},this.completePara=function(o){if(!n.isRequest){n.isRequest=!0;var t=md.global.Account.isPortal?md.global.Account.appId:o.appId;q.Z.getAppFirstInfo({appId:t,appSectionId:o.groupId}).then(function(a){var i=a.appSectionId,l=a.workSheetId;i?(0,de.T8)("/app/"+t+"/"+i+"/"+(l||"")+"?flag="+Date.now(),!0):n.props.updateSheetListLoading(!1)})}}},Wt))||Mt)},16493:(it,He,c)=>{it.exports=c.p+"static/appGroupIntro.7d35375f0251fc219be90e39e5e024b7.gif"}}]);
