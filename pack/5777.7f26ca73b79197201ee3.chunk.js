"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5777],{25777:(oe,N,t)=>{t.r(N),t.d(N,{default:()=>_});var ie=t(44336),I=t(74253),Z=t(66215),L=t(88239),ce=t(52262),W=t(65400),S=t(20845),P=t(88106),R=t(12424),e=t(67294);const T={getDeclare:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivateDeclare","GetDeclare",l,i)},editDeclare:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivateDeclare","EditDeclare",l,i)},getDeclareByAcountId:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivateDeclare","GetDeclareByAcountId",l,i)},addDeclareAgreeLog:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivateDeclare","AddDeclareAgreeLog",l,i)}};var G=t(93002),se=t(85175),k=t(20838),B=t(56493),M=t(33867),j=t(85105),z=t.n(j),O=t(99663),w=t(22600),H=t(49135),V=t(93196),F=t(70801),K=t(86735),J=t(5017),Q=t(96486),b=t.n(Q),U=(0,K.Z)([`
  .mui-dialog-body {
    overflow: hidden;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: flex;
    flex-direction: column;
  }
  .ant-tabs {
    flex: 1;
  }
  .ant-tabs-nav-wrap, .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
  .ant-tabs-ink-bar {
    width: 100px !important;
    margin-left: 170px;
  }
  .autosize {
    height: 100% !important;
  }
  .ant-tabs-content-holder,
  .ant-tabs-content,
  .enableDeclareRichText,
  .ck-editor,
  .ck-rounded-corners,
  .ck-editor__main,
  .ck-content {
    height: 100% !important;
  }
  .enableDeclareRichText.showTool .ck-editor__main {
    height: calc(100% - 70px) !important;
  }
  .ck-editor__main {
    box-sizing: border-box;
    overflow: auto;
  }
  .ck .ck-content {
    background-color: #fff !important;
  }
  .ck .ck-content, .ck .ck-content.ck-focused, .editorNull {
    border: none !important;
  }
  .edit{
    &:hover, &:hover .icon {
      color: #2196f3 !important;
    }
  }
  .editFooter {
    display: flex;
    justify-content: flex-end;
  }
`],[`
  .mui-dialog-body {
    overflow: hidden;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: flex;
    flex-direction: column;
  }
  .ant-tabs {
    flex: 1;
  }
  .ant-tabs-nav-wrap, .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
  .ant-tabs-ink-bar {
    width: 100px !important;
    margin-left: 170px;
  }
  .autosize {
    height: 100% !important;
  }
  .ant-tabs-content-holder,
  .ant-tabs-content,
  .enableDeclareRichText,
  .ck-editor,
  .ck-rounded-corners,
  .ck-editor__main,
  .ck-content {
    height: 100% !important;
  }
  .enableDeclareRichText.showTool .ck-editor__main {
    height: calc(100% - 70px) !important;
  }
  .ck-editor__main {
    box-sizing: border-box;
    overflow: auto;
  }
  .ck .ck-content {
    background-color: #fff !important;
  }
  .ck .ck-content, .ck .ck-content.ck-focused, .editorNull {
    border: none !important;
  }
  .edit{
    &:hover, &:hover .icon {
      color: #2196f3 !important;
    }
  }
  .editFooter {
    display: flex;
    justify-content: flex-end;
  }
`]),X=(0,J.ZP)(F.Z)(U),Y=function(v){(0,V.default)(l,v);function l(i){(0,O.default)(this,l);var n=(0,H.default)(this,(l.__proto__||z()(l)).call(this,i));return n.handleSaveDeclare=function(){var r=n.state,o=r.declareId,m=r.agreement,s=r.privacy;if(b().isEmpty(m)){alert(_l("\u8BF7\u8F93\u5165\u670D\u52A1\u534F\u8BAE"),3);return}if(b().isEmpty(s)){alert(_l("\u8BF7\u8F93\u5165\u9690\u79C1\u653F\u7B56"),3);return}T.editDeclare({declareId:o,agreement:m,privacy:s}).then(function(u){u&&(alert(_l("\u4FDD\u5B58\u6210\u529F")),n.props.onChangeDeclareData({declareId:o,agreement:m,privacy:s}))}),n.setState({enableDeclareEdit:!1}),n.props.onCancel()},n.state={enableDeclareEdit:!1,declareId:"",agreement:"",privacy:"",defaultData:null},n}return(0,w.default)(l,[{key:"componentWillReceiveProps",value:function(n){if(!b().isEqual(n.declareData,this.props.declareData)){var r=n.declareData,o=r.declareId,m=r.agreement,s=r.privacy;this.setState({declareId:o,agreement:m,privacy:s})}}},{key:"render",value:function(){var n=this,r=this.state,o=r.enableDeclareEdit,m=r.agreement,s=r.privacy,u=this.props,y=u.visible,p=u.onCancel;return e.createElement(X,{visible:y,className:"enableDeclareDialog",title:_l("\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"),description:_l("\u8BF7\u6839\u636E\u81EA\u5DF1\u6240\u5728\u7EC4\u7EC7\u7684\u60C5\u51B5\u586B\u5199\u4E0B\u65B9\u7684\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"),width:900,type:"fixed",footer:o?void 0:e.createElement("div",{className:"editFooter"},e.createElement("div",{className:"flexRow valignWrapper pointer edit",onClick:function(){n.setState({enableDeclareEdit:!0})}},e.createElement(M.Z,{className:"Gray_75 Font13",icon:"edit"}),e.createElement("div",{className:"mLeft5"},_l("\u7F16\u8F91")))),okText:_l("\u4FDD\u5B58"),onOk:this.handleSaveDeclare,onCancel:function(){var d=n.props.declareData,D=n.state,g=D.agreement,x=D.privacy;b().isEqual({agreement:d.agreement,privacy:d.privacy},{agreement:g,privacy:x})?(p(),n.setState({enableDeclareEdit:!1})):F.Z.confirm({title:_l("\u786E\u5B9A\u9000\u51FA\u7F16\u8F91 ?"),description:_l("\u9000\u51FA\u540E\uFF0C\u5DF2\u7F16\u8F91\u7684\u5185\u5BB9\u4E0D\u4F1A\u4FDD\u5B58"),onOk:function(){n.setState({agreement:d.agreement,privacy:d.privacy}),p(),n.setState({enableDeclareEdit:!1})}})}},e.createElement(k.Z,{defaultActiveKey:"serverAgreement",onChange:function(){}},e.createElement(k.Z.TabPane,{tab:_l("\u670D\u52A1\u534F\u8BAE"),key:"serverAgreement"},e.createElement(B.Z,{data:m,maxWidth:900,className:"enableDeclareRichText",showTool:o,disabled:!o,onActualSave:function(d){n.setState({agreement:d})}})),e.createElement(k.Z.TabPane,{tab:_l("\u9690\u79C1\u653F\u7B56"),key:"privacyPolicy"},e.createElement(B.Z,{data:s,maxWidth:900,className:"enableDeclareRichText",showTool:o,disabled:!o,onActualSave:function(d){n.setState({privacy:d})}}))))}}]),l}(e.Component),$=t(13739),q=function(l){var i=md.global.Config.IsPlatformLocal,n=md.global.SysSettings,r=(0,e.useState)(!1),o=(0,R.Z)(r,2),m=o[0],s=o[1],u=(0,e.useState)({}),y=(0,R.Z)(u,2),p=y[0],f=y[1],d=(0,G.Z)({hideRegister:n.hideRegister,enableMobilePhoneRegister:n.enableMobilePhoneRegister,enableEmailRegister:n.enableEmailRegister,enableEditAccountInfo:n.enableEditAccountInfo,enableDeclareConfirm:n.enableDeclareConfirm}),D=(0,R.Z)(d,2),g=D[0],x=g.hideRegister,C=g.enableMobilePhoneRegister,A=g.enableEmailRegister,ee=g.enableEditAccountInfo,te=g.enableDeclareConfirm,ne=D[1];(0,e.useEffect)(function(){T.getDeclare().then(function(h){h&&f(h)})},[]);var E=function(c,a){if(b().includes(["enableMobilePhoneRegister","enableEmailRegister"],c)&&a&&(C&&!A||!C&&A)){alert(_l("\u624B\u673A\u53F7\u548C\u90AE\u7BB1\u81F3\u5C11\u9009\u4E00\u9879"),2);return}(0,$.xR)((0,P.default)({},c,!a),function(){ne((0,P.default)({},c,!a)),md.global.SysSettings[c]=!a})},ae=function(){return e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex flexColumn"},e.createElement("div",{className:"Font14 bold mBottom7"},_l("\u534F\u8BAE / \u9690\u79C1\u6761\u6B3E")),e.createElement("div",{className:"Gray_9e mBottom15"},_l("\u7528\u6237\u5728\u6CE8\u518C\u3001\u767B\u5F55\u8D26\u53F7\u65F6\uFF0C\u9700\u8981\u540C\u610F\u300A\u670D\u52A1\u534F\u8BAE\u300B\u548C\u300A\u9690\u79C1\u653F\u7B56\u300B")),e.createElement(S.Z,{checked:te,text:_l("\u5355\u70B9\u767B\u5F55\u65F6\uFF08Web\u79FB\u52A8\u7AEF\uFF09\uFF0C\u4E5F\u5FC5\u987B\u5148\u540C\u610F"),onClick:function(a){return E("enableDeclareConfirm",a)}})),e.createElement(W.default,{ghost:!0,type:"primary",onClick:function(){return s(!0)}},_l("\u8BBE\u7F6E")),e.createElement(Y,{visible:m,declareData:p,onChangeDeclareData:function(a){f((0,L.default)({},p,a))},onCancel:function(){s(!1)}}))},le=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex flexColumn"},e.createElement("div",{className:"Font14 bold mBottom7"},_l("\u5141\u8BB8\u81EA\u6CE8\u518C\u8D26\u53F7")),e.createElement("div",{className:"Gray_9e"},_l("\u5F00\u542F\u540E\uFF0C\u5728\u767B\u5F55\u9875\u663E\u793A\u6CE8\u518C\u8D26\u53F7\u5165\u53E3"))),e.createElement(Z.Z,{checked:!x,onClick:function(a){return E("hideRegister",!a)}})),!x&&e.createElement("div",{className:"flexRow alignItemsCenter mTop10"},e.createElement("span",{className:"mRight16"},_l("\u6CE8\u518C\u65B9\u5F0F")),e.createElement(S.Z,{className:"mRight30",checked:C,text:_l("\u624B\u673A\u53F7"),onClick:function(a){return E("enableMobilePhoneRegister",a)}}),e.createElement(S.Z,{checked:A,text:_l("\u90AE\u7BB1"),onClick:function(a){return E("enableEmailRegister",a)}})))},re=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex flexColumn"},e.createElement("div",{className:"Font14 bold mBottom7"},_l("\u5141\u8BB8\u7528\u6237\u4FEE\u6539\u8D26\u53F7\u4FE1\u606F")),e.createElement("div",{className:"Gray_9e"},_l("\u5F00\u542F\u540E\uFF0C\u5141\u8BB8\u7528\u6237\u7F16\u8F91\u4E2A\u4EBA\u8D26\u6237\u4E2D\u7684\u59D3\u540D\u3001\u90AE\u7BB1\u3001\u624B\u673A\u53F7"))),e.createElement(Z.Z,{checked:ee,onClick:function(a){return E("enableEditAccountInfo",a)}})))};return e.createElement("div",{className:"privateCardWrap flexColumn"},e.createElement("div",{className:"Font17 bold mBottom25"},_l("\u8D26\u53F7\u4E0E\u6CE8\u518C")),le(),e.createElement(I.Z,{className:"mTop20 mBottom20"}),re(),e.createElement(I.Z,{className:"mTop20 mBottom20"}),ae())};const _=q}}]);
