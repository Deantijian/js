"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[9370],{99370:(Le,M,l)=>{l.r(M),l.d(M,{default:()=>_e});var Ge=l(80176),X=l(2307),Ye=l(97373),Q=l(94055),L=l(88239),G=l(70801),T=l(54208),I=l(33867),f=l(12424),Y=l(86735),e=l(67294),W=l(5017),q=l(20640),V=l.n(q),ee=l(93967),h=l.n(ee),U=l(36164),Z=l(72698),A=l(13739),te=l(30381),E=l.n(te),ae=l(96486),B=l.n(ae),ne=(0,Y.Z)([`
  .item {
    width: 25%;
    margin-bottom: 20px;
  }
`],[`
  .item {
    width: 25%;
    margin-bottom: 20px;
  }
`]),le=W.ZP.div(ne);const z=function(v){var n=v.codeInfo,r=v.visible,t=v.onCancel,o=v.onSave,m=(0,e.useState)(""),p=(0,f.Z)(m,2),a=p[0],i=p[1],N=(0,e.useState)(""),g=(0,f.Z)(N,2),u=g[0],s=g[1],D=(0,e.useState)(""),b=(0,f.Z)(D,2),P=b[0],F=b[1],j=(0,e.useState)(!1),x=(0,f.Z)(j,2),d=x[0],c=x[1],S=function(){if(B().isEmpty(a)){F(_l("\u8BF7\u8F93\u5165\u5BC6\u94A5")),s("");return}d||(c(!0),s(""),F(""),Z.Z.bindLicenseCode({licenseCode:a}).then(function(C){s(C),c(!1),C&&(alert(_l("\u6DFB\u52A0\u6210\u529F")),o(),t(),i(""),s(""))}).catch(function(C){c(!1),F(C.errorMessage)}))};return e.createElement(G.Z,{visible:r,anim:!1,title:n?_l("\u5F53\u524D\u5BC6\u94A5"):_l("\u66F4\u65B0\u5BC6\u94A5"),width:n?680:560,onOk:function(){n?t():S()},onCancel:t,showCancel:!n,okText:n?_l("\u5173\u95ED"):_l("\u786E\u5B9A")},n?e.createElement(le,{className:"overflowHidden"},e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u7248\u672C")),e.createElement("div",null,n.isPlatform?_l("\u5E73\u53F0\u7248"):A.jf[n.licenseVersion])),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5BC6\u94A5\u5230\u671F\u65F6\u95F4")),e.createElement("div",null,E()(n.expirationDate).format("YYYY-MM-DD"))),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5347\u7EA7\u670D\u52A1\u5230\u671F\u65F6\u95F4")),e.createElement("div",null,n.upgradeExpirationDate?E()(n.upgradeExpirationDate).format("YYYY-MM-DD"):"-")),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5185\u90E8\u7528\u6237\u914D\u989D")),e.createElement("div",null,n.internalUserNum.toLocaleString())),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5916\u90E8\u7528\u6237\u914D\u989D")),e.createElement("div",null,n.externalUserNum.toLocaleString())),!n.isPlatform&&e.createElement(e.Fragment,null,e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u7EC4\u7EC7\u6570")),e.createElement("div",null,n.projectNum)),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5E94\u7528\u603B\u6570\u4E0A\u9650")),e.createElement("div",null,n.applicationNum===2147483647?_l("\u4E0D\u9650"):n.applicationNum)),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5DE5\u4F5C\u8868\u603B\u6570\u4E0A\u9650")),e.createElement("div",null,n.worktableNum===2147483647?_l("\u4E0D\u9650"):n.worktableNum)),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u884C\u8BB0\u5F55\u603B\u6570\u4E0A\u9650/\u5355\u8868")),e.createElement("div",null,n.worktableRowNum===2147483647?_l("\u4E0D\u9650"):n.worktableRowNum)),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5DE5\u4F5C\u6D41\u603B\u6570\u4E0A\u9650/\u5355\u6708")),e.createElement("div",null,n.workflowNum>=1e6?_l("\u4E0D\u9650"):n.workflowNum*1e3))),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u6570\u636E\u96C6\u6210")),e.createElement("div",{className:"valignWrapper"},e.createElement(I.Z,{className:h()("Font20",n.dp?"ThemeColor":"Gray_bd"),icon:"a-Data_integration1"}),e.createElement("div",null,n.dp?_l("\u5DF2\u6388\u6743"):_l("\u672A\u6388\u6743")))),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u8D85\u7EA7\u641C\u7D22")),e.createElement("div",{className:"valignWrapper"},e.createElement(I.Z,{className:h()("Font20",n.sse?"ThemeColor":"Gray_bd"),icon:"search"}),n.sse?_l("\u5DF2\u6388\u6743"):_l("\u672A\u6388\u6743"))),e.createElement("div",{className:"item left"},e.createElement("div",{className:"Gray_9e"},_l("\u5BC6\u94A5")),e.createElement("div",{className:"valignWrapper",title:n.originCode},e.createElement("div",{className:"ellipsis"},n.originCode),e.createElement(I.Z,{icon:"copy",className:"Gray_9e Font17 pointer",onClick:function(){V()(n.originCode),alert(_l("\u590D\u5236\u6210\u529F"))}})))):e.createElement(e.Fragment,null,e.createElement("div",{className:"mBottom10"},e.createElement("span",{className:"Gray_75 Font13"},_l("\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u94A5")),!md.global.Config.IsPlatformLocal&&e.createElement("span",{className:"Red Font14"},_l("\uFF08\u591A\u7EC4\u7EC7\u4E0B\u8BF7\u6CE8\u610F\u624B\u52A8\u7ED1\u5B9A\u7EC4\u7EC7\uFF09"))),e.createElement(U.Z,{value:a,onChange:function(C){i(C)}}),d?e.createElement("div",{className:"flexRow verifyInfo Gray_75 mBottom10"},e.createElement(T.Z,{className:"mAll0 mRight5",size:"small"}),_l("\u6B63\u5728\u9A8C\u8BC1\u60A8\u7684\u4EA7\u54C1\u5BC6\u94A5")):B().isBoolean(u)&&!u&&e.createElement("div",{className:"mBottom10 Red"},_l("\u5BC6\u94A5\u9A8C\u8BC1\u5931\u8D25, \u8BF7\u91CD\u65B0\u586B\u5199")),P?e.createElement("div",{className:"mBottom10 Red"},P):null))},re=function(v){var n=v.visible,r=v.extendFunType,t=v.onCancel,o=v.onSave,m=(0,e.useState)(""),p=(0,f.Z)(m,2),a=p[0],i=p[1],N=(0,e.useState)(""),g=(0,f.Z)(N,2),u=g[0],s=g[1],D=(0,e.useState)(""),b=(0,f.Z)(D,2),P=b[0],F=b[1],j=(0,e.useState)(!1),x=(0,f.Z)(j,2),d=x[0],c=x[1],S=function(){if(B().isEmpty(a)){F(_l("\u8BF7\u8F93\u5165\u5BC6\u94A5")),s("");return}d||(c(!0),s(""),F(""),Z.Z.bindTrialLicenseCode({extendFunType:r,licenseCode:a}).then(function(C){s(C),c(!1),C&&(alert(_l("\u6DFB\u52A0\u6210\u529F")),o(C),t(),i(""),s(""))}).catch(function(C){c(!1),F(C.errorMessage)}))};return e.createElement(G.Z,{visible:n,anim:!1,title:_l("\u6DFB\u52A0\u5BC6\u94A5"),width:560,onOk:S,onCancel:t},e.createElement("div",{className:"mBottom10"},e.createElement("span",{className:"Gray_75 Font13"},_l("\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u94A5"))),e.createElement(U.Z,{value:a,onChange:function(C){i(C)}}),d?e.createElement("div",{className:"flexRow verifyInfo Gray_75 mBottom10"},e.createElement(T.Z,{className:"mAll0 mRight5",size:"small"}),_l("\u6B63\u5728\u9A8C\u8BC1\u60A8\u7684\u5BC6\u94A5")):B().isBoolean(u)&&!u&&e.createElement("div",{className:"mBottom10 Red"},_l("\u5BC6\u94A5\u9A8C\u8BC1\u5931\u8D25, \u8BF7\u91CD\u65B0\u586B\u5199")),P?e.createElement("div",{className:"mBottom10 Red"},P):null)};var O=l(97553),oe=l(20845),ie=l(85105),se=l.n(ie),ce=l(99663),me=l(22600),de=l(49135),pe=l(93196),ue=l(31261),ve=(0,Y.Z)([`
  width: 300px;
  padding: 24px;
  .projectItme {
    padding: 10px 0;
    cursor: pointer;
  }
  .projectItmeActive {
    color: #2196F3;
  }
  .projectWrapper {
    overflow-y: auto;
    min-height: 30px;
    max-height: 400px;
  }
  .btnWrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
  .Button--link:hover {
    color: #2196F3;
  }
  .Button--primary {
    margin-left: 10px;
    background-color: #2196F3;
  }
`],[`
  width: 300px;
  padding: 24px;
  .projectItme {
    padding: 10px 0;
    cursor: pointer;
  }
  .projectItmeActive {
    color: #2196F3;
  }
  .projectWrapper {
    overflow-y: auto;
    min-height: 30px;
    max-height: 400px;
  }
  .btnWrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
  .Button--link:hover {
    color: #2196F3;
  }
  .Button--primary {
    margin-left: 10px;
    background-color: #2196F3;
  }
`]),fe=W.ZP.div(ve),Ee=function(v){(0,pe.default)(n,v);function n(r){(0,ce.default)(this,n);var t=(0,de.default)(this,(n.__proto__||se()(n)).call(this,r));return t.changeBind=function(o){var m=t.state.projects,p=m.map(function(a){return a.projectId===o.projectId&&(a.isBind=!o.isBind),a});t.setState({newProjects:m})},t.handleSave=function(){var o=t.props.onSave,m=o===void 0?_.noop:o,p=t.state,a=p.projects,i=p.bindProjectIds,N=a.filter(function(u){return u.isBind}).map(function(u){return u.projectId}),g=N.filter(function(u){return i.indexOf(u)==-1});if(!g.length){t.setState({visible:!1});return}t.setState({confirmVisible:!0}),G.Z.confirm({title:_l("\u60A8\u786E\u8BA4\u8981\u5173\u8054\u65B0\u7EC4\u7EC7\u5417 \uFF1F"),description:_l("\u5173\u8054\u540E\u4F1A\u5360\u7528\u79DF\u6237\u540D\u989D\uFF0C\u4E14\u4E0D\u53EF\u53D6\u6D88"),onOk:function(){Z.Z.bindProject({projectIds:N}).then(function(s){s?(alert(_l("\u5173\u8054\u6210\u529F"),1),t.setState({visible:!1}),m()):alert(_l("\u5173\u8054\u5931\u8D25"),2)})},onCancel:function(){t.setState({confirmVisible:!1})}})},t.handlePopupVisibleChange=function(o){var m=t.props.usable;!m||t.state.confirmVisible||(t.setState({visible:o}),o&&t.getProjects())},t.renderProjectPopup=function(){var o=t.state,m=o.projects,p=o.loading;return e.createElement(fe,{className:"card z-depth-2 flexColumn"},e.createElement("div",{className:"Font20 Gray bold"},_l("\u7ED1\u5B9A\u7EC4\u7EC7")),e.createElement("div",{className:"Gray_75 mTop5 mBottom5"},_l("\u7ED1\u5B9A\u540E\u4F1A\u5360\u7EC4\u7EC7\u989D\u5EA6\uFF0C\u4E14\u4E0D\u53EF\u53D6\u6D88")),e.createElement("div",{className:"flex projectWrapper"},p?e.createElement("div",{className:"mTop5"},e.createElement(T.Z,{size:"small"})):m.map(function(a){return e.createElement("div",{key:a.projectId,className:"projectItme projectItmeActive flexRow valignWrapper",onClick:function(){a.disabled||t.changeBind(a)}},e.createElement(oe.Z,{checked:a.isBind,value:a.projectId}),e.createElement("span",{className:"flex overflow_ellipsis"},a.companyName))})),e.createElement("div",{className:"btnWrapper"},e.createElement(O.ZP,{type:"link",onClick:function(){t.setState({visible:!1})}},_l("\u53D6\u6D88")),e.createElement(O.ZP,{type:"primary",onClick:t.handleSave},_l("\u786E\u8BA4"))))},t.state={visible:!1,confirmVisible:!1,bindProjectIds:[],projects:[],loading:!0},t}return(0,me.default)(n,[{key:"getProjects",value:function(){var t=this;this.setState({loading:!0}),Z.Z.getProjects().then(function(o){var m=[],p=[];o.map(function(a){a.isBind&&(a.disabled=!0,p.push(a.projectId)),m.push(a)}),t.setState({loading:!1,projects:m,bindProjectIds:p})})}},{key:"render",value:function(){var t=this.props.usable,o=this.state.visible;return e.createElement(ue.Z,{zIndex:100,popupVisible:o,onPopupVisibleChange:this.handlePopupVisibleChange,action:["click"],popup:this.renderProjectPopup(),popupAlign:{offset:[0,7],points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement("div",{className:h()({pointer:t})},e.createElement("span",{className:h()({associated:t})},_l("\u7ED1\u5B9A"))))}}]),n}(e.Component),ge=(0,Y.Z)([`
  padding: 20px 25px;
  .authorizationInfo {
    .versionsType {
      color: #20CA86;
      border: 1px solid #20CA86;
      border-radius: 4px;
      padding: 2px 4px;
    }
    .updatePrivateKey {
      color: #333;
      border-radius: 4px;
      padding: 2px 4px;
      border: 1px solid #EAEAEA;
    }
  }
  .appreciationServer {
    flex: 3;
    .dpWrap, .diciWrap, .sseWrap {
      height: 100%;
      padding: 10px 20px;
      border-radius: 7px;
      justify-content: center;
      &:hover {
        background-color: #FAFAFA;
      }
    }
    .iconWrap {
      padding: 8px;
      border-radius: 50%;
      background-color: rgba(33, 33, 33, 0.03);
      &.active {
        background-color: rgba(33, 150, 243, 0.04);
      }
    }
  }
  .card {
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.16);
  }
  .versionsInfo, .appreciationServer {
    height: 174px;
    min-width: 0;
  }
  .versionsInfo {
    flex: 1;
    .label {
      margin-right: 10px;
      white-space: nowrap;
    }
  }
  .ant-table-thead th {
    color: #757575;
    background: #fff;
  }
`],[`
  padding: 20px 25px;
  .authorizationInfo {
    .versionsType {
      color: #20CA86;
      border: 1px solid #20CA86;
      border-radius: 4px;
      padding: 2px 4px;
    }
    .updatePrivateKey {
      color: #333;
      border-radius: 4px;
      padding: 2px 4px;
      border: 1px solid #EAEAEA;
    }
  }
  .appreciationServer {
    flex: 3;
    .dpWrap, .diciWrap, .sseWrap {
      height: 100%;
      padding: 10px 20px;
      border-radius: 7px;
      justify-content: center;
      &:hover {
        background-color: #FAFAFA;
      }
    }
    .iconWrap {
      padding: 8px;
      border-radius: 50%;
      background-color: rgba(33, 33, 33, 0.03);
      &.active {
        background-color: rgba(33, 150, 243, 0.04);
      }
    }
  }
  .card {
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.16);
  }
  .versionsInfo, .appreciationServer {
    height: 174px;
    min-width: 0;
  }
  .versionsInfo {
    flex: 1;
    .label {
      margin-right: 10px;
      white-space: nowrap;
    }
  }
  .ant-table-thead th {
    color: #757575;
    background: #fff;
  }
`]),Ne=(0,Y.Z)([`
  color: #fff;
  padding: 5px;
  border-radius: 13px;
  background-color: #FF9A2E;
`],[`
  color: #fff;
  padding: 5px;
  border-radius: 13px;
  background-color: #FF9A2E;
`]),xe=W.ZP.div(ge),Ce=W.ZP.div(Ne),ye=[{title:_l("\u66F4\u65B0\u5BC6\u94A5\u65F6\u95F4"),dataIndex:"logTime",key:"logTime",width:170},{title:_l("\u5BC6\u94A5\u751F\u6548\u65F6\u95F4"),dataIndex:"startDate",key:"startDate",render:function(n,r){return E()(r.startDate).format("YYYY-MM-DD")}},{title:_l("\u5BC6\u94A5\u5230\u671F\u65F6\u95F4"),dataIndex:"expirationDate",key:"expirationDate",render:function(n,r){return E()(r.expirationDate).format("YYYY-MM-DD")}},{title:_l("\u5347\u7EA7\u670D\u52A1\u5230\u671F\u65F6\u95F4"),dataIndex:"upgradeExpirationDate",key:"upgradeExpirationDate",render:function(n,r){return r.upgradeExpirationDate?E()(r.upgradeExpirationDate).format("YYYY-MM-DD"):"-"},width:150},{title:_l("\u5185\u90E8\u7528\u6237\u914D\u989D"),dataIndex:"internalUserNum",key:"internalUserNum",render:function(n,r){return r.internalUserNum.toLocaleString()}},{title:_l("\u5916\u90E8\u7528\u6237\u914D\u989D"),dataIndex:"externalUserNum",key:"externalUserNum",render:function(n,r){return r.externalUserNum.toLocaleString()}},{title:_l("\u64CD\u4F5C\u4EBA"),dataIndex:"fullname",key:"fullname",render:function(n,r){return r.operater?r.operater.fullname:"-"}},{title:_l("\u64CD\u4F5C"),dataIndex:"operate",key:"operate",render:function(){return e.createElement("a",{className:"viewOriginCode"},_l("\u67E5\u770B"))}}],he=function(n){var r=n.loading,t=n.platformLicenseInfo,o=n.onUpdatePage,m=(0,e.useState)(!1),p=(0,f.Z)(m,2),a=p[0],i=p[1],N=function(u){var s=E()().format("YYYY-MM-DD"),D=E()(u).format("YYYY"),b=E()(u).diff(E()(s),"d")+1;return D==9999?e.createElement("span",{style:{color:"#4CAF50"}},_l("\u6C38\u4E45\u6709\u6548")):b<=0?e.createElement("span",{style:{color:"#F44336"}},_l("\u5DF2\u5230\u671F")):_l("\u5269\u4F59%0\u5929",b)};return e.createElement("div",{className:"authorizationInfo card flex"},e.createElement("div",{className:"valignWrapper mBottom25"},e.createElement("div",{className:"valignWrapper flex"},e.createElement("div",{className:"Font15 bold"},_l("\u6388\u6743\u4FE1\u606F")),!r&&e.createElement("div",{className:"versionsType Font12 mLeft10"},t.isPlatform?_l("\u5E73\u53F0\u7248"):A.jf[t.licenseVersion])),e.createElement("div",{className:"updatePrivateKey pointer",onClick:function(){return i(!0)}},e.createElement(I.Z,{className:"Gray_bd mRight2",icon:"key1"}),_l("\u66F4\u65B0\u5BC6\u94A5"))),r?e.createElement(T.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5BC6\u94A5\u5230\u671F\u65F6\u95F4")),e.createElement("div",{className:"Font17 mBottom5 bold"},N(t.expirationDate)),e.createElement("div",{className:"Font13 Gray_bd"},_l("%0\u5230\u671F",E()(t.expirationDate).format("YYYY\u5E74MM\u6708DD\u65E5")))),e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5347\u7EA7\u670D\u52A1\u5230\u671F\u65F6\u95F4")),e.createElement("div",{className:"Font17 mBottom5 bold"},t.upgradeExpirationDate?N(t.upgradeExpirationDate):"-"),e.createElement("div",{className:"Font13 Gray_bd"},t.upgradeExpirationDate?_l("%0\u5230\u671F",E()(t.upgradeExpirationDate).format("YYYY\u5E74MM\u6708DD\u65E5")):"-")),e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5185\u90E8\u7528\u6237\u914D\u989D")),e.createElement("div",{className:"Font17 mBottom5 bold"},_l("%0 \u4EBA",(t.internalUserNum||0).toLocaleString())),e.createElement("div",{className:"Font13 Gray_bd"},_l("\u5DF2\u4F7F\u7528 %0 \u4EBA",(t.internalUsedUserNum||0).toLocaleString()))),e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5916\u90E8\u7528\u6237\u914D\u989D")),e.createElement("div",{className:"Font17 mBottom5 bold"},_l("%0 \u4EBA",(t.externalUserNum||0).toLocaleString())),e.createElement("div",{className:"Font13 Gray_bd"},_l("\u5DF2\u4F7F\u7528 %0 \u4EBA",(t.externalUsedUserNum||0).toLocaleString()))),!t.isPlatform&&e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u7EC4\u7EC7\u6570")),e.createElement("div",{className:"Font17 mBottom5 bold"},B().get(t,"projectIds.length")+"/"+t.projectNum),e.createElement("div",{className:"Font13 ThemeColor pointer"},e.createElement(Ee,{usable:!0,onSave:o})))),!t.isPlatform&&e.createElement(e.Fragment,null,e.createElement("div",{className:"mBottom20 mTop20",style:{height:1,backgroundColor:"#EAEAEA"}}),e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5E94\u7528\u603B\u6570\u4E0A\u9650")),e.createElement("div",{className:"Font17 mBottom5 bold"},t.applicationNum===2147483647?_l("\u4E0D\u9650"):t.applicationNum)),e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5DE5\u4F5C\u8868\u603B\u6570\u4E0A\u9650")),e.createElement("div",{className:"Font17 mBottom5 bold"},t.worktableNum===2147483647?_l("\u4E0D\u9650"):t.worktableNum)),e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u884C\u8BB0\u5F55\u603B\u6570\u4E0A\u9650/\u5355\u8868")),e.createElement("div",{className:"Font17 mBottom5 bold"},t.worktableRowNum===2147483647?_l("\u4E0D\u9650"):t.worktableRowNum)),e.createElement("div",{className:"flexColumn valignWrapper flex"},e.createElement("div",{className:"Font14 Gray_9e mBottom5 pBottom2"},_l("\u5DE5\u4F5C\u6D41\u603B\u6570\u4E0A\u9650/\u5355\u6708")),e.createElement("div",{className:"Font17 mBottom5 bold"},t.workflowNum>=1e6?_l("\u4E0D\u9650"):t.workflowNum*1e3)),e.createElement("div",{className:"flex"})))),e.createElement(z,{codeInfo:null,visible:a,onCancel:function(){i(!1)},onSave:o}))},be=function(n){var r=n.loading,t=n.platformLicenseInfo,o=n.setPlatformLicenseInfo,m=(0,e.useState)(null),p=(0,f.Z)(m,2),a=p[0],i=p[1],N=(0,e.useState)(null),g=(0,f.Z)(N,2),u=g[0],s=g[1],D=function(){if(t.dp&&t.dp.isTrial){var d=E()().format("YYYY-MM-DD"),c=E()(t.dp.expirationDate).diff(E()(d),"d")+1;return c>=1?e.createElement("div",{style:{color:"#FF9D2E"}},_l("\u8BD5\u7528\u8FD8\u5269 %0 \u5929",c)):e.createElement("div",{className:"ThemeColor pointer",onClick:function(y){y.stopPropagation(),s(2)}},_l("\u66F4\u65B0\u8BD5\u7528\u5BC6\u94A5"))}if(!t.dp)return e.createElement("div",{className:"ThemeColor pointer",onClick:function(y){y.stopPropagation(),s(2)}},_l("\u8BD5\u7528"))},b=function(){return t.dici?null:e.createElement("div",{className:"ThemeColor pointer",onClick:function(c){c.stopPropagation(),s(3)}},_l("\u7ED1\u5B9A\u5BC6\u94A5"))},P=function(){return t.didb?null:e.createElement("div",{className:"ThemeColor pointer",onClick:function(c){c.stopPropagation(),s(4)}},_l("\u7ED1\u5B9A\u5BC6\u94A5"))},F=function(){if(t.sse&&t.sse.isTrial){var d=E()().format("YYYY-MM-DD"),c=E()(t.sse.expirationDate).diff(E()(d),"d")+1;return c>=1?e.createElement("div",{style:{color:"#FF9D2E"}},_l("\u8BD5\u7528\u8FD8\u5269 %0 \u5929",c)):e.createElement("div",{className:"ThemeColor pointer",onClick:function(y){y.stopPropagation(),s(1)}},_l("\u66F4\u65B0\u8BD5\u7528\u5BC6\u94A5"))}if(!t.sse)return e.createElement("div",{className:"ThemeColor pointer",onClick:function(y){y.stopPropagation(),s(1)}},_l("\u8BD5\u7528"))},j=function(){var d=E()().format("YYYY-MM-DD"),c=E()(a.expirationDate).diff(E()(d),"d")+1;return e.createElement(G.Z,{visible:!0,anim:!1,width:560,footer:null,title:e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"valignWrapper flex"},e.createElement(I.Z,{className:"Font30 ThemeColor",icon:a.icon}),e.createElement("div",{className:"Font17 Gray bold mLeft5"},a.title),a.isTrial&&e.createElement(Ce,{className:"Font12 mLeft10"},_l("\u8BD5\u7528\u4E2D"))),(a.isTrial||a.type==="dici"||a.type==="didb")&&e.createElement("div",{className:"Font12 ThemeColor pointer mTop20",onClick:function(){return s(a.extendFunType)}},_l("\u66F4\u65B0\u5BC6\u94A5"))),onCancel:function(){i(null)}},e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flexColumn flex"},e.createElement("div",{className:"Gray_9e mBottom2"},_l("\u5230\u671F\u65F6\u95F4")),e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"Gray"},E()(a.expirationDate).format("YYYY-MM-DD")),c>=1?e.createElement("div",{className:"flexRow mLeft10"},_l("\u5269\u4F59"),e.createElement("span",{className:"mLeft2 mRight2",style:{color:"#FF9A2E"}},c),_l("\u5929")):e.createElement("div",{className:"flexRow mLeft10 Red"},_l("\u5DF2\u8FC7\u671F")))),a.type==="dp"&&e.createElement("div",{className:"flexColumn flex"},e.createElement("div",{className:"Gray_9e mBottom2"},_l("\u6570\u636E\u540C\u6B65\u4EFB\u52A1\u6570")),e.createElement("div",{className:"Gray"},a.dataPipelineJobNum.toLocaleString()))),a.type==="dp"&&e.createElement("div",{className:"flexColumn flex mTop20"},e.createElement("div",{className:"Gray_9e mBottom2"},_l("\u6570\u636E\u540C\u6B65\u7B97\u529B\u6570")),e.createElement("div",{className:"Gray"},a.dataPipelineRowNum.toLocaleString())),["dici","didb"].includes(a.type)&&e.createElement("div",{className:"flexColumn flex mTop20"},e.createElement("div",{className:"Gray_9e mBottom2"},_l("\u670D\u52A1\u5B9E\u4F8B\u6570")),e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"mRight5 Gray"},_l("\u5269\u4F59%0\u4E2A",a.instanceNum-a.usedInstanceNum)),e.createElement("div",{className:"Gray_9e"},_l("\u5171%0\u4E2A",a.instanceNum)))))};return e.createElement("div",{className:"appreciationServer flexColumn card flex mRight20"},e.createElement("div",{className:"Font15 bold"},_l("\u589E\u503C\u4EA7\u54C1")),r?e.createElement(T.Z,{className:"mTop20"}):e.createElement("div",{className:"flexRow valignWrapper"},e.createElement("div",{className:"dpWrap flex flexColumn alignItemsCenter pointer",onClick:function(){t.dp&&i((0,L.default)({},t.dp,{title:_l("\u6570\u636E\u96C6\u6210"),icon:"a-Data_integration1",type:"dp",extendFunType:2}))}},e.createElement("div",{className:h()("iconWrap valignWrapper justifyContentCenter",{active:t.dp})},e.createElement(I.Z,{className:h()("Font40",t.dp?"ThemeColor":"Gray_bd"),icon:"a-Data_integration1"})),e.createElement("div",{className:"Font14 mTop2"},_l("\u6570\u636E\u96C6\u6210")),D()),e.createElement("div",{className:"diciWrap flex flexColumn alignItemsCenter pointer",onClick:function(){t.dici&&i((0,L.default)({},t.dici,{title:_l("\u4E13\u5C5E\u7B97\u529B"),icon:"dns1",type:"dici",extendFunType:3}))}},e.createElement("div",{className:h()("iconWrap valignWrapper justifyContentCenter",{active:t.dici})},e.createElement(I.Z,{className:h()("Font40",t.dici?"ThemeColor":"Gray_bd"),icon:"dns1"})),e.createElement("div",{className:"Font14 mTop2"},_l("\u4E13\u5C5E\u7B97\u529B")),b()),!md.global.Config.IsPlatformLocal&&e.createElement("div",{className:"diciWrap flex flexColumn alignItemsCenter pointer",onClick:function(){t.didb&&i((0,L.default)({},t.didb,{title:_l("\u4E13\u5C5E\u6570\u636E\u5E93"),icon:"database",type:"didb",extendFunType:4}))}},e.createElement("div",{className:h()("iconWrap valignWrapper justifyContentCenter",{active:t.didb})},e.createElement(I.Z,{className:h()("Font40",t.didb?"ThemeColor":"Gray_bd"),icon:"database"})),e.createElement("div",{className:"Font14 mTop2"},_l("\u4E13\u5C5E\u6570\u636E\u5E93")),P()),e.createElement("div",{className:"sseWrap flex flexColumn alignItemsCenter pointer",onClick:function(){t.sse&&i((0,L.default)({},t.sse,{title:_l("\u8D85\u7EA7\u641C\u7D22"),icon:"search",type:"sse",extendFunType:1}))}},e.createElement("div",{className:h()("iconWrap valignWrapper justifyContentCenter",{active:t.sse})},e.createElement(I.Z,{className:h()("Font40",t.sse?"ThemeColor":"Gray_bd"),icon:"search"})),e.createElement("div",{className:"Font14 mTop2"},_l("\u8D85\u7EA7\u641C\u7D22")),F())),!!a&&j(),u&&e.createElement(re,{visible:!0,extendFunType:u,onCancel:function(){return s(null)},onSave:function(d){var c={isTrial:!0,startDate:d.startDate,expirationDate:d.expirationDate};d.extendFunType===1&&(t.sse=c),d.extendFunType===2&&(t.dp=c,t.dp.dataPipelineJobNum=d.trialInfo.dptq,t.dp.dataPipelineRowNum=d.trialInfo.dpsd),d.extendFunType===3&&(t.dici=c,t.dici.usedInstanceNum=0,t.dici.instanceNum=d.trialInfo.dici),d.extendFunType===4&&(t.didb=c,t.didb.usedInstanceNum=0,t.didb.instanceNum=d.trialInfo.didb),a&&i((0,L.default)({},a,c)),o(t)}}))},Se=function(n){var r=(0,e.useState)(!0),t=(0,f.Z)(r,2),o=t[0],m=t[1],p=(0,e.useState)({}),a=(0,f.Z)(p,2),i=a[0],N=a[1];return(0,e.useEffect)(function(){Z.Z.getServerInfo().then(function(g){m(!1),N(g)})},[]),e.createElement("div",{className:"versionsInfo flexColumn card"},e.createElement("div",{className:"Font15 bold mBottom20"},_l("\u7248\u672C\u4FE1\u606F")),o?e.createElement(T.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u5E73\u53F0\u7248\u672C")),e.createElement("div",null,i.systemVersion)),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u5BC6\u94A5\u7248\u672C")),e.createElement("div",null,i.licenseTemplateVersion)),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u670D\u52A1\u5668ID")),e.createElement(Q.default,{title:i.serverId,placement:"bottom"},e.createElement("div",{className:"ellipsis"},i.serverId)),e.createElement(I.Z,{icon:"copy",className:"Gray_9e Font17 pointer mLeft5",onClick:function(){V()(i.serverId),alert(_l("\u590D\u5236\u6210\u529F"))}}))))},Fe=function(n){var r=(0,e.useState)(!0),t=(0,f.Z)(r,2),o=t[0],m=t[1],p=(0,e.useState)([]),a=(0,f.Z)(p,2),i=a[0],N=a[1],g=(0,e.useState)(1),u=(0,f.Z)(g,2),s=u[0],D=u[1],b=(0,e.useState)(0),P=(0,f.Z)(b,2),F=P[0],j=P[1],x=(0,e.useState)(!1),d=(0,f.Z)(x,2),c=d[0],S=d[1],y=(0,e.useState)(null),C=(0,f.Z)(y,2),De=C[0],K=C[1],Pe=(0,A.Hd)(),$=(0,f.Z)(Pe,2),Ze=$[0],je=$[1],Te=10,H=B().get(Ze,"height"),Be=function(){m(!0),Z.Z.getPlatformLicenseLogs({pageIndex:s,pageSize:Te}).then(function(k){var J=k.allCount,R=k.list;m(!1),N(R),j(J)})};return(0,e.useEffect)(function(){Be()},[s]),e.createElement("div",{className:"flex card flexColumn mTop20 tableWrapper",ref:je},e.createElement("div",{className:"flexRow valignWrapper"},e.createElement("div",{className:"Font15 bold flex"},_l("\u6388\u6743\u65E5\u5FD7"))),e.createElement(z,{codeInfo:De,visible:c,onCancel:function(){K(null),S(!1)},onSave:function(){D(1)}}),e.createElement(X.Z,{loading:o,columns:ye,dataSource:i,locale:{emptyText:_l("\u6682\u65E0\u6570\u636E")},pagination:{position:["none","bottomCenter"],pageSize:10,total:F,onChange:function(k){D(k)}},scroll:{scrollToFirstRowOnChange:!1,y:(H>500?H-130:500)+"px"},onRow:function(k){return{onClick:function(R){var ke=R.target;ke.classList.contains("viewOriginCode")&&(S(!0),K(k))}}}}))},Ie=function(n){var r=md.global.SysSettings,t=(0,e.useState)(!0),o=(0,f.Z)(t,2),m=o[0],p=o[1],a=(0,e.useState)({}),i=(0,f.Z)(a,2),N=i[0],g=i[1],u=function(){document.querySelector(".privateDeploymentSidebar .menuItem.active").click()};return(0,e.useEffect)(function(){Z.Z.getPlatformLicenseInfo().then(function(s){p(!1),g(s)})},[]),e.createElement(xe,{className:"flexColumn h100"},e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(he,{loading:m,platformLicenseInfo:N,onUpdatePage:u})),e.createElement("div",{className:"flexRow valignWrapper mTop20"},e.createElement(be,{loading:m,platformLicenseInfo:N,setPlatformLicenseInfo:g}),e.createElement(Se,null)),e.createElement(Fe,null))};const _e=Ie}}]);
