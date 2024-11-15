"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[8591],{28591:(we,$,a)=>{a.r($),a.d($,{default:()=>Ze});var L=a(88239),oe=a(88902),re=a.n(oe),se=a(85105),W=a.n(se),H=a(99663),G=a(22600),Y=a(49135),J=a(93196),e=a(67294),A=a(64712),ce=a(60022),K=a(6100),B=a(3540),F=a(33867),R=a(86735),de=a(25273),pe=a(57853),Q=a(20845),X=a(54208),q=a(97553),U=a(12424),ee=a(70801),ne=a(93002),me=a(49365),V=a(5017),fe=a(30381),ue=a.n(fe),ge=a(96486),x=a.n(ge),he=(0,R.Z)([`
  .searchWrap {
    height: 36px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    .icon {
      position: absolute;
      left: 18px;
      top: 11px;
      font-size: 16px;
      color: #757575;
    }
    input {
      flex: 1;
      border: 1px solid #f5f5f5;
      padding: 0 18px 0 42px;
      box-sizing: border-box;
      background: #f5f5f5;
      border-radius: 20px;
      margin-top: 2px;
      &:hover {
        border-color: #f0f0f0;
        background: #f0f0f0;
      }
      &:focus {
        background: #ffffff;
        border-color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .row {
    height: 64px;
    border-bottom: 1px solid #e0e0e0;
    &.header {
      height: unset !important;
    }
  }
  .appIcon {
    width: 38px;
    height: 38px;
    border-radius: 4px;
    margin-right: 8px;
    text-align: center;
  }
  .createTime,
  .owner {
    width: 150px;
  }
`],[`
  .searchWrap {
    height: 36px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    .icon {
      position: absolute;
      left: 18px;
      top: 11px;
      font-size: 16px;
      color: #757575;
    }
    input {
      flex: 1;
      border: 1px solid #f5f5f5;
      padding: 0 18px 0 42px;
      box-sizing: border-box;
      background: #f5f5f5;
      border-radius: 20px;
      margin-top: 2px;
      &:hover {
        border-color: #f0f0f0;
        background: #f0f0f0;
      }
      &:focus {
        background: #ffffff;
        border-color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .row {
    height: 64px;
    border-bottom: 1px solid #e0e0e0;
    &.header {
      height: unset !important;
    }
  }
  .appIcon {
    width: 38px;
    height: 38px;
    border-radius: 4px;
    margin-right: 8px;
    text-align: center;
  }
  .createTime,
  .owner {
    width: 150px;
  }
`]),ve=(0,V.ZP)(ee.Z)(he),te=50;function xe(v){var g=v.projectId,E=v.visible,n=v.onCancel,l=n===void 0?function(){}:n,t=v.onOk,i=t===void 0?function(){}:t,s=(0,ne.Z)({appList:[],pageIndex:1,loading:!0,isMore:N,keyword:"",checkedAll:!1,checkedList:[]}),o=(0,U.Z)(s,2),r=o[0],p=o[1],f=r.appList,c=r.pageIndex,y=r.loading,N=r.isMore,m=r.keyword,C=r.checkedAll,b=r.checkedList,u=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};c>1&&(y&&N||!N)||(p({loading:!0}),me.Z.getAppsForProject((0,L.default)({projectId:g,status:"",order:3,pageSize:te,pageIndex:c,keyword:m},d)).then(function(S){var I=S.apps,M=c>1?f.concat(I):I;p({appList:M,loading:!1,pageIndex:x().get(d,"pageIndex")?d.pageIndex:c+1,isMore:I.length===te,checkedAll:b.length&&M.length===b.length})}))},k=x().debounce(function(h){u({keyword:h,pageIndex:1})},500),z=function(d){p({checkedAll:!d,checkedList:d?[]:f})},P=function(d,S){var I=x().clone(b);d?I=I.filter(function(M){return M.appId!==S.appId}):I=I.concat(S),p({checkedList:I,checkedAll:I.length===f.length})};(0,e.useEffect)(u,[]);var w=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;return e.createElement(ve,{width:700,visible:E,title:_l("\u6DFB\u52A0\u5E94\u7528"),onCancel:l,footer:e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"flex TxtLeft Font4 Gray_9e"},!y&&b.length?_l("\u5DF2\u9009\u62E9%0\u4E2A\u5E94\u7528",b.length):""),e.createElement(q.ZP,{type:"link",onClick:l},_l("\u53D6\u6D88")),e.createElement(q.ZP,{type:"primary",onClick:function(){return i(b.map(function(d){var S=d.appName,I=d.appId,M=d.iconColor,T=d.iconUrl,j=d.size,D=j===void 0?1:j;return{name:S,color:M,iconUrl:T,entityId:I,entityType:0,size:D}}))}},_l("\u786E\u8BA4")))},e.createElement("div",{className:"flexColumn",style:{height:w-236+"px"}},e.createElement("div",{className:"searchWrap"},e.createElement(F.Z,{icon:"search"}),e.createElement(B.Z,{className:"flex1",placeholder:_l("\u641C\u7D22\u5E94\u7528"),value:m,onChange:function(d){p({keyword:d,pageIndex:1}),k(d)}})),c===1&&y?e.createElement(X.Z,{className:"mTop10"}):f.length?e.createElement(e.Fragment,null,e.createElement("div",{className:"row header flexRow alignItemsCenter pLeft10 pBottom12 Gray_75 Font14 bold"},e.createElement(Q.Z,{checked:C,onClick:z}),e.createElement("div",{className:"appName mLeft10 flex"},_l("\u5E94\u7528\u540D\u79F0")),e.createElement("div",{className:"createTime"},_l("\u521B\u5EFA\u65F6\u95F4")),e.createElement("div",{className:"owner"},_l("\u62E5\u6709\u8005"))),e.createElement("div",{className:"flex"},e.createElement(de.Z,{onScrollEnd:x().throttle(function(){return u()},500)},f.map(function(h){var d=h.appName,S=h.appId,I=h.iconColor,M=h.iconUrl,T=h.ctime,j=h.caid,D=h.createAccountInfo,ie=D===void 0?{}:D;return e.createElement("div",{key:S,className:"row flexRow alignItemsCenter pLeft10"},e.createElement(Q.Z,{checked:x().includes(b.map(function(le){return le.appId}),S),onClick:function(Oe){return P(Oe,h)}}),e.createElement("div",{className:"appName mLeft10 flex flexRow alignItemsCenter"},e.createElement("div",{className:"appIcon",style:{background:I}},e.createElement(K.Z,{url:M,fill:"#fff",size:26,className:"mTop6"})),e.createElement("span",{className:"flex ellipsis mRight10",title:d},d)),e.createElement("div",{className:"createTime"},ue()(T).format("YYYY-MM-DD")),e.createElement("div",{className:"owner flexRow alignItemsCenter"},e.createElement(pe.Z,{size:28,projectId:g,user:{userHead:ie.avatar,accountId:j}}),e.createElement("div",{className:"mLeft12 ellipsis flex mRight20"},ie.fullName)))})),c>1&&y&&e.createElement(X.Z,{className:"mTop10"}))):e.createElement("div",{className:"mTop10 pLeft30 Gray_9e"},m?_l("\u6682\u65E0\u641C\u7D22\u7ED3\u679C"):_l("\u6682\u65E0\u5E94\u7528"))))}var ae=a(49779),ye=a(93967),Z=a.n(ye),Ie=(0,R.Z)([`
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
  .content {
    overflow-y: auto;
  }
  .limitWrap {
    height: 40px;
    line-height: 40px;
    background: #f6fafe;
    border-radius: 3px;
    padding-left: 12px;
    margin-bottom: 24px;
  }
  input {
    width: 120px;
    &.overLimit {
      border: 1px solid #f44336;
    }
  }
  .appName {
    width: 262px;
  }
  .appIcon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-right: 8px;
    text-align: center;
  }
  .size {
    margin-right: 70px;
  }

  .footer {
    height: 66px;
    padding: 15px 0;
    background-color: #fff;
  }
  .saveBtn,
  .delBtn {
    height: 36px;
    line-height: 36px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
  }

  .saveBtn {
    margin-right: 20px;
    background: #1e88e5;
    color: #fff;
    &:hover {
      background: #1565c0;
    }
    &.disabled {
      color: #fff;
      background: #b2dbff;
      cursor: not-allowed;
      &:hover {
        background: #b2dbff;
      }
    }
  }
  .delBtn {
    border: 1px solid #eaeaea;
    &:hover {
      border: 1px solid #ccc;
    }
    &.disabled {
      color: #eaeaea;
      cursor: not-allowed;
      &:hover {
        border: 1px solid #eaeaea;
      }
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
  .content {
    overflow-y: auto;
  }
  .limitWrap {
    height: 40px;
    line-height: 40px;
    background: #f6fafe;
    border-radius: 3px;
    padding-left: 12px;
    margin-bottom: 24px;
  }
  input {
    width: 120px;
    &.overLimit {
      border: 1px solid #f44336;
    }
  }
  .appName {
    width: 262px;
  }
  .appIcon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-right: 8px;
    text-align: center;
  }
  .size {
    margin-right: 70px;
  }

  .footer {
    height: 66px;
    padding: 15px 0;
    background-color: #fff;
  }
  .saveBtn,
  .delBtn {
    height: 36px;
    line-height: 36px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
  }

  .saveBtn {
    margin-right: 20px;
    background: #1e88e5;
    color: #fff;
    &:hover {
      background: #1565c0;
    }
    &.disabled {
      color: #fff;
      background: #b2dbff;
      cursor: not-allowed;
      &:hover {
        background: #b2dbff;
      }
    }
  }
  .delBtn {
    border: 1px solid #eaeaea;
    &:hover {
      border: 1px solid #ccc;
    }
    &.disabled {
      color: #eaeaea;
      cursor: not-allowed;
      &:hover {
        border: 1px solid #eaeaea;
      }
    }
  }
`]),Ee=V.ZP.div(Ie),be=function(v){(0,J.default)(g,v);function g(E){(0,H.default)(this,g);var n=(0,Y.default)(this,(g.__proto__||W()(g)).call(this,E));return n.getLimits=function(){var l=n.props.projectId;n.setState({loading:!0}),ae.Z.getLimits({projectId:l}).then(function(t){var i=t.size,s=t.limits,o=s===void 0?[]:s;n.setState({size:i===0?void 0:i,limits:o,initialLimits:o,initialSize:i===0?void 0:i,loading:!1})}).catch(function(t){n.setState({size:0,limits:[],loading:!1})})},n.handleAddAppList=function(l){var t=n.state,i=t.limits,s=t.size,o=l.filter(function(r){return!x().includes(i.map(function(p){return p.entityId}),r.entityId)}).map(function(r){return(0,L.default)({},r,{size:s})});n.setState({limits:i.concat(o),showAddAppList:!1})},n.changeItemSize=function(l,t){var i=x().clone(n.state.limits),s=x().findIndex(i,function(o){return o.entityId===t.entityId});i[s]=(0,L.default)({},i[s],{size:l}),n.setState({limits:i})},n.remove=function(l){var t=n.state.limits;n.setState({limits:t.filter(function(i){return i.entityId!==l})})},n.onSave=function(){var l=n.props.projectId,t=n.state,i=t.limits,s=t.size,o=t.initialLimits,r=t.initialSize,p=t.loading,f=md.global.SysSettings.fileUploadLimitSize||4*1024;if(!(p||!i||x().isEqual(o,i)&&x().isEqual(s,r))){if(s>f||x().findIndex(i,function(c){return c.size>f})>-1)return n.setState({clickSubmit:!0}),alert(_l("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8D85\u51FA\u4E0A\u9650"),2);n.setState({clickSubmit:!1}),n.setState({loading:!0}),ae.Z.editLimits({projectId:l,limits:i.map(function(c){return(0,L.default)({},c,{size:c.size||0})}),size:s||0}).then(function(c){c?(alert(_l("\u4FDD\u5B58\u6210\u529F")),n.setState({initialLimits:i,initialSize:s})):alert(_l("\u4FDD\u5B58\u5931\u8D25"),2),n.setState({loading:!1})}).catch(function(c){alert(_l("\u4FDD\u5B58\u5931\u8D25"),2),n.setState({loading:!1})})}},n.onBlur=function(l,t){var i=l.target.value;if(i==="0")return t(1);i=i.replace(/^[0]+/,""),t(i)},n.state={initialLimits:[],limits:[],size:void 0,loading:!0},n}return(0,G.default)(g,[{key:"componentDidMount",value:function(){this.getLimits()}},{key:"render",value:function(){var n=this,l=this.props,t=l.projectId,i=l.onClose,s=i===void 0?function(){}:i,o=this.state,r=o.size,p=o.limits,f=o.initialLimits,c=o.initialSize,y=o.showAddAppList,N=o.loading,m=o.clickSubmit,C=md.global.SysSettings.fileUploadLimitSize||4*1024,b=!p||x().isEqual(f,p)&&x().isEqual(r,c);return e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(F.Z,{icon:"backspace",className:"Font22 ThemeHoverColor3 pointer",onClick:s}),e.createElement("div",{className:"Font17 bold flex mLeft10"},_l("\u5355\u9644\u4EF6\u4E0A\u4F20\u5927\u5C0F")))),e.createElement(Ee,{className:"orgManagementContent"},e.createElement("div",{className:"content flex"},e.createElement("div",{className:"limitWrap"},_l("\u7CFB\u7EDF\u652F\u6301\u7684\u9644\u4EF6\u5927\u5C0F\u4E0A\u9650\u4E3A %0\uFF0C\u53EF\u8BBE\u7F6E\u7EC4\u7EC7\u4E0B\u5141\u8BB8\u7684\u9644\u4EF6\u5927\u5C0F\u4E0A\u9650",md.global.Config.IsLocal?C+"M":"4G")),e.createElement("div",{className:"Font15 bold mBottom12"},_l("\u5168\u5C40\u914D\u7F6E")),e.createElement("div",{className:"flexRow alignItemsCenter mBottom24"},e.createElement("div",null,_l("\u5355\u4E2A\u9644\u4EF6\u5927\u5C0F")),e.createElement(B.Z,{className:Z()("mLeft10 mRight10",{overLimit:m&&r>C}),value:r,onChange:function(k){return n.setState({size:k.replace(/\D/g,"")})},onBlur:function(k){return n.onBlur(k,function(z){return n.setState({size:z})})}}),e.createElement("div",null,"M")),e.createElement("div",{className:"Font15 bold mBottom12"},_l("\u989D\u5916\u914D\u7F6E")),e.createElement("span",{className:"ThemeColor Hand bold mBottom16 InlineBlock",onClick:function(){return n.setState({showAddAppList:!0})}},e.createElement(F.Z,{icon:"plus"}),e.createElement("span",null,_l("\u6DFB\u52A0\u5E94\u7528"))),x().isEmpty(p)?"":e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow Gray_9e Font12 mBottom16"},e.createElement("div",{className:"appName"},_l("\u5E94\u7528\u540D\u79F0")),e.createElement("div",{className:"size"},_l("\u5355\u4E2A\u9644\u4EF6\u5927\u5C0F"))),p.map(function(u){var k=u.name,z=u.color,P=u.iconUrl,w=u.entityId;return e.createElement("div",{key:w,className:"flexRow alignItemsCenter mBottom16"},e.createElement("div",{className:"appName flexRow alignItemsCenter"},e.createElement("div",{className:"appIcon",style:{background:z}},e.createElement(K.Z,{url:P,fill:"#fff",size:18,className:"mTop3"})),e.createElement("span",{className:"flex ellipsis mRight10",title:k},k)),e.createElement("div",{className:"size flexRow alignItemsCenter"},e.createElement(B.Z,{className:Z()("mRight10",{overLimit:m&&u.size>C}),value:u.size,onChange:function(d){return n.changeItemSize(d.replace(/\D/g,""),u)},onBlur:function(d){return n.onBlur(d,function(S){return n.changeItemSize(S,u)})}}),e.createElement("div",null,"M")),e.createElement("div",{className:"Gray_bd Hand Hover_21",onClick:function(){return n.remove(w)}},_l("\u79FB\u9664")))}))),e.createElement("div",{className:"footer flexRow"},e.createElement("div",{className:Z()("saveBtn",{disabled:N||b}),onClick:this.onSave},_l("\u4FDD\u5B58")),e.createElement("div",{className:Z()("delBtn",{disabled:N||b}),onClick:function(){return n.setState({limits:f,size:c})}},_l("\u53D6\u6D88"))),y&&e.createElement(xe,{visible:y,projectId:t,onOk:this.handleAddAppList,onCancel:function(){return n.setState({showAddAppList:!1})}})))}}]),g}(e.Component),O=a(99924),Ce=a(1952),Se=a(66215),Ne=a(88106),Le=(0,R.Z)([`
  .des {
    color: #a7a7a7;
    margin-bottom: 30px;
  }
`],[`
  .des {
    color: #a7a7a7;
    margin-bottom: 30px;
  }
`]),ke=(0,V.ZP)(ee.Z)(Le),Me=[{text:_l("\u521B\u5EFA\u5E94\u7528"),value:"onlyManagerCreateApp"},{text:_l("\u521B\u5EFA API \u8FDE\u63A5"),value:"apiIntgOnlyManager"},{text:_l("\u5F00\u53D1\u63D2\u4EF6"),value:"pluginsOnlyManager"}];function ze(v){var g=v.projectId,E=v.updateData,n=E===void 0?function(){}:E,l=v.onCancel,t=l===void 0?function(){}:l,i=(0,ne.Z)(v.data),s=(0,U.Z)(i,2),o=s[0],r=s[1],p=(0,e.useState)(!1),f=(0,U.Z)(p,2),c=f[0],y=f[1],N=function(){y(!0),O.Z.setOnlyManager((0,L.default)({projectId:g},o)).then(function(C){C&&(r((0,L.default)({},o)),n((0,L.default)({},o))),y(!1)}).catch(function(C){y(!1)}),t()};return e.createElement(ke,{visible:!0,title:_l("\u529F\u80FD\u9650\u5236"),okDisabled:c,onCancel:t,onOk:N},e.createElement("div",{className:"des"},_l("\u5173\u95ED\u5168\u5458\u529F\u80FD\uFF0C\u53EA\u5141\u8BB8\u6388\u6743\u7684\u7BA1\u7406\u5458\u4F7F\u7528")),Me.map(function(m,C){return e.createElement("div",{key:C,className:"mBottom30 flexRow alignItemsCenter"},e.createElement(Se.Z,{size:"small",checked:!o[m.value],onClick:function(u){r((0,Ne.default)({},m.value,u))}}),e.createElement("span",{className:"TxtMiddle mLeft12"},m.text))}))}const Ae=function(v){return(0,Ce.Z)(ze,v)};var Ze=function(v){(0,J.default)(g,v);function g(E){(0,H.default)(this,g);var n=(0,Y.default)(this,(g.__proto__||W()(g)).call(this,E));return n.getEnabledNoneVerification=function(){O.Z.getEnabledNoneVerification({projectId:A.Z.projectId}).then(function(l){var t=l.noneVerificationEnabled;n.setState({noneVerificationEnabled:t})})},n.setEnabledNoneVerification=function(){var l=n.state.noneVerificationEnabled;O.Z.setEnabledNoneVerification({projectId:A.Z.projectId,enabledNoneVerification:!l}).then(function(t){t&&n.setState({noneVerificationEnabled:!l})})},n.state={noneVerificationEnabled:!1,showLimitAttachmentUpload:!1,onlyManagerCreateApp:!1},n}return(0,G.default)(g,[{key:"componentDidMount",value:function(){this.getEnabledNoneVerification(),this.getOnlyManagerSettings()}},{key:"getOnlyManagerSettings",value:function(){var n=this;O.Z.getOnlyManagerSettings({projectId:A.Z.projectId}).then(function(l){var t=l.apiIntgOnlyManager,i=t===void 0?!1:t,s=l.dataPipeOnlyManager,o=s===void 0?!1:s,r=l.onlyManagerCreateApp,p=r===void 0?!1:r,f=l.pluginsOnlyManager,c=f===void 0?!1:f;n.setState({apiIntgOnlyManager:i,dataPipeOnlyManager:o,onlyManagerCreateApp:p,pluginsOnlyManager:c})})}},{key:"render",value:function(){var n=this,l=A.Z.projectId,t=this.state,i=t.noneVerificationEnabled,s=t.showLimitAttachmentUpload,o=t.onlyManagerCreateApp,r=t.apiIntgOnlyManager,p=t.dataPipeOnlyManager,f=t.pluginsOnlyManager;if(s)return e.createElement(be,{projectId:l,onClose:function(){return n.setState({showLimitAttachmentUpload:!1})}});var c={onlyManagerCreateApp:_l("\u521B\u5EFA\u5E94\u7528"),apiIntgOnlyManager:_l("\u521B\u5EFA API \u8FDE\u63A5"),pluginsOnlyManager:_l("\u5F00\u53D1\u63D2\u4EF6")},y=re()(c).filter(function(m){return n.state[m]}),N=y.map(function(m){return c[m]}).join("\u3001");return e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader Font17"},_l("\u5176\u4ED6")),e.createElement(ce.Z,{projectId:l,configs:[{key:"limitSystemFeature",title:_l("\u529F\u80FD\u9650\u5236"),description:_l("\u5173\u95ED\u5168\u5458\u529F\u80FD\uFF0C\u53EA\u5141\u8BB8\u6388\u6743\u7684\u7BA1\u7406\u5458\u4F7F\u7528"),showSlideIcon:!0,customContent:_.isEmpty(y)?void 0:_l(_l("\u5DF2\u5173\u95ED:%0",N)),onClick:function(){return Ae({projectId:l,data:{onlyManagerCreateApp:o,apiIntgOnlyManager:r,dataPipeOnlyManager:p,pluginsOnlyManager:f},updateData:function(b){return n.setState((0,L.default)({},b))}})}},{key:"limitFileDownload",title:_l("\u5355\u9644\u4EF6\u4E0A\u4F20\u5927\u5C0F"),description:_l("\u5168\u5C40\u9650\u5236\u5E94\u7528\u4E2D\u5DE5\u4F5C\u8868\u3001\u8BA8\u8BBA\u9644\u4EF6\u4E2D\u4E0A\u4F20\u7684\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u3002\u53EF\u8BBE\u7F6E\u767D\u540D\u5355"),showSlideIcon:!0,onClick:function(){return n.setState({showLimitAttachmentUpload:!0})}},{key:"passwordFreeVerification",title:_l("\u64CD\u4F5C\u514D\u9A8C\u8BC1"),description:_l("\u5173\u95ED\u540E\uFF0C\u5168\u7EC4\u7EC7\u4E0B\u7684\u81EA\u5B9A\u4E49\u6309\u94AE\u3001\u5BA1\u6279\u914D\u7F6E\u4E86\u767B\u5F55\u5BC6\u7801\u9A8C\u8BC1\u7684\u5730\u65B9\u5FC5\u987B\u6BCF\u6B21\u9A8C\u8BC1\u5BC6\u7801\u540E\u65B9\u53EF\u7EE7\u7EED\u64CD\u4F5C"),showSlideIcon:!1,showSwitch:!0,switchChecked:i,clickSwitch:this.setEnabledNoneVerification}].filter(function(m){return md.global.Config.IsLocal?!0:m.key!=="limitFileDownload"})}))}}]),g}(e.Component)}}]);
