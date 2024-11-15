"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[2709],{92709:(_e,J,l)=>{l.r(J),l.d(J,{default:()=>qe});var fe=l(93567),V=l(54208),he=l(86853),P=l(56171),q=l(57853),ee=l(25273),R=l(43727),te=l(12424),ne=l(66946),re=l(97553),ve=l(51197),b=l(33867),H=l(26581),ae=l(6100),ge=l(85105),j=l.n(ge),M=l(99663),B=l(22600),A=l(49135),z=l(93196),L=l(86735),e=l(67294),et=l(15256),xe=l(46891),S=l(81912),ye=l(17563),Y=l(53825),Z=l(36021),Ee=l(93967),N=l.n(Ee),le=l(63025),U=l(5618),Ce=l(90305),Ne=l(67707),D=l(42638),we=function(C){(0,z.default)(v,C);function v(){var f,t,n,r;(0,M.default)(this,v);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=(t=(n=(0,A.default)(this,(f=v.__proto__||j()(v)).call.apply(f,[this].concat(a))),n),n.delFlow=function(){var p=n.props,o=p.item,h=p.callback;(0,Ne.Z)({title:_l("\u5220\u9664\u5DE5\u4F5C\u6D41\u201C%0\u201D",o.name),description:_l("\u5DE5\u4F5C\u6D41\u5C06\u88AB\u5220\u9664\uFF0C\u8BF7\u786E\u8BA4\u6267\u884C\u6B64\u64CD\u4F5C"),okText:_l("\u5220\u9664"),buttonType:"danger",onOk:function(){D.Z.deleteProcess({processId:o.id}).then(function(E){E&&h(o.id)})}})},t),(0,A.default)(n,r)}return(0,B.default)(v,[{key:"render",value:function(){return e.createElement("div",{onClick:this.delFlow,style:{color:"#f44336"}},e.createElement("span",{className:"icon-delete2 Font16 pLeft12 mRight10"}),_l("\u5220\u9664"))}}]),v}(e.Component),oe=l(70801),ie=function(C){(0,z.default)(v,C);function v(){var f,t,n,r;(0,M.default)(this,v);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=(t=(n=(0,A.default)(this,(f=v.__proto__||j()(v)).call.apply(f,[this].concat(a))),n),n.copyFlow=function(){var p=n.props,o=p.isConvert,h=p.item,g=p.updateList;oe.Z.confirm({title:o?_l("\u5C06\u201C%0\u201D\u8F6C\u4E3A\u5B50\u6D41\u7A0B",h.name):_l("\u590D\u5236\u5DE5\u4F5C\u6D41\u201C%0\u201D",h.name),description:o?_l("\u5982\u679C\u60A8\u9700\u8981\u590D\u7528\u672C\u6D41\u7A0B\uFF0C\u901A\u8FC7\u6B64\u64CD\u4F5C\u5C06\u4E3A\u672C\u6D41\u7A0B\u521B\u5EFA\u4E00\u4E2A\u526F\u672C\uFF0C\u89E6\u53D1\u5668\u7C7B\u578B\u4E3A\u5B50\u6D41\u7A0B"):_l("\u5C06\u590D\u5236\u76EE\u6807\u5DE5\u4F5C\u6D41\u7684\u6240\u6709\u8282\u70B9\u548C\u914D\u7F6E"),okText:o?_l("\u786E\u5B9A"):_l("\u590D\u5236"),onOk:function(){D.Z.copyProcess({processId:h.id,name:o?_l("-\u5B50\u6D41\u7A0B"):_l("-\u590D\u5236"),subProcess:!!o}).then(function(w){w&&g()})}})},t),(0,A.default)(n,r)}return(0,B.default)(v,[{key:"render",value:function(){var t=this.props.isConvert;return e.createElement("div",{onClick:this.copyFlow},e.createElement("span",{className:N()("Gray_9e Font16 pLeft12 mRight10",t?"icon-swap_horiz":"icon-content-copy")}),t?_l("\u8F6C\u4E3A\u5B50\u6D41\u7A0B"):_l("\u590D\u5236"))}}]),v}(e.Component),O=l(15577);const Ie=function(C){var v=C.item,f=C.type;return e.createElement(Y.Z,{to:"/workflowedit/"+v.id+"?"+(0,O.tQ)()+"#type="+f,target:window.isWxWork?"_self":"_blank",className:N()("flexColumn nameBox ThemeColor3",{unable:!v.enabled})},e.createElement("div",{className:"ellipsis Font14"},v.name),e.createElement("div",{className:"ellipsis Font12 Gray_bd"},v.explain))};var u=l(83534),$=l(45697),Te=l(98843),se=l(49365);const ke=function(C){var v=C.icon,f=C.bgColor,t=C.size,n=t===void 0?36:t,r=C.iconSize,i=r===void 0?20:r;return e.createElement("div",{className:"iconWithBg",style:{width:n,height:n,backgroundColor:f}},e.createElement(b.Z,{icon:v,style:{color:"#fff",fontSize:i}}))};var Q,ce,be=[{text:_l("\u5DE5\u4F5C\u8868"),subClass:[{title:_l("\u5DE5\u4F5C\u8868\u4E8B\u4EF6\u89E6\u53D1%03011"),explain:_l("\u5F53\u5DE5\u4F5C\u8868\u4E2D\u65B0\u589E\u8BB0\u5F55\u6216\u5DF2\u6709\u8BB0\u5F55\u53D1\u751F\u53D8\u66F4\u65F6\u89E6\u53D1"),startEventAppType:1}]},{text:_l("\u65F6\u95F4"),subClass:[{title:_l("\u5B9A\u65F6\u89E6\u53D1%03012"),explain:_l("\u6309\u7167\u8BBE\u5B9A\u7684\u65F6\u95F4\u5468\u671F\u5FAA\u73AF\u89E6\u53D1\u6D41\u7A0B"),startEventAppType:5},{title:_l("\u6309\u65E5\u671F\u5B57\u6BB5\u89E6\u53D1%03013"),explain:_l("\u6307\u5B9A\u4E00\u4E2A\u65E5\u671F\u5B57\u6BB5\uFF0C\u5C06\u5B57\u6BB5\u7684\u65E5\u671F\u4F5C\u4E3A\u65F6\u95F4\u8868\u6765\u89E6\u53D1\u6D41\u7A0B\u3002\u5982\uFF1A\u6307\u5B9A\u5DE5\u4F5C\u8868\u4E2D\u7684\u5458\u5DE5\u751F\u65E5\u6216\u5BA2\u6237\u6CE8\u518C\u65E5\u671F\u6765\u53D1\u9001\u77ED\u4FE1\u901A\u77E5"),startEventAppType:6}]},{text:_l("\u4EBA\u5458"),subClass:[{title:_l("\u7EC4\u7EC7\u4EBA\u5458\u4E8B\u4EF6\u89E6\u53D1%03014"),explain:_l("\u5F53\u7EC4\u7EC7\u4E2D\u6709\u4EBA\u5458\u5165\u804C/\u79BB\u804C\u65F6\u89E6\u53D1"),startEventAppType:20},{title:_l("\u5916\u90E8\u7528\u6237\u4E8B\u4EF6\u89E6\u53D1%03015"),explain:_l("\u5F53\u5916\u90E8\u7528\u6237\u6CE8\u518C\u3001\u767B\u5F55\u6216\u88AB\u5220\u9664\u65F6\u89E6\u53D1"),startEventAppType:23}]},{text:_l("\u5176\u4ED6"),subClass:[{title:_l("Webhook\u89E6\u53D1%03016"),explain:_l("\u5728\u6307\u5B9A\u7684URL\uFF0C\u63A5\u6536\u5230Webhook\u65F6\u89E6\u53D1"),startEventAppType:7}]}],Le=(ce=Q=function(C){(0,z.default)(v,C);function v(f){(0,M.default)(this,v);var t=(0,A.default)(this,(v.__proto__||j()(v)).call(this,f));return t.inputRef=(0,e.createRef)(),t.requestPending=!1,t.createFlow=function(n){var r=t.props.appId,i=t.state.flowName;t.requestPending=!0,D.Z.addProcess({companyId:"",relationId:r,relationType:2,startEventAppType:n,name:i||t.props.flowName,explain:""}).then(function(a){se.Z.addWorkflow({projectId:a.companyId}),(0,Z.T8)("/workflowedit/"+a.id)}).finally(function(){t.requestPending=!1})},t.handleInputFocus=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,r=t.inputRef.current;n?r.classList.add("ThemeBorderColor3"):r.classList.remove("ThemeBorderColor3")},t.state={flowName:f.flowName},t}return(0,B.default)(v,[{key:"render",value:function(){var t=this,n=this.state.flowName;return e.createElement(Te.Z,null,e.createElement("header",{className:"createWorkflowHeader flexRow"},e.createElement("div",{className:"backEdit flexRow"},e.createElement("div",{className:"backToWorkflowIndex mRight12",onClick:this.props.onBack},e.createElement(b.Z,{icon:"backspace",className:"Font24 Gray_9e ThemeHoverColor3 pointer"})),e.createElement("input",{ref:this.inputRef,type:"text",value:n,placeholder:_l("\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0"),onFocus:this.handleInputFocus,onChange:function(i){return t.setState({flowName:i.target.value})},onBlur:function(){return t.handleInputFocus(!1)},className:"editWorkflowName"})),e.createElement("div",null,e.createElement(ne.Z,{type:2,text:_l("\u4F7F\u7528\u5E2E\u52A9"),href:"https://help.mingdao.com/workflow/introduction"}))),e.createElement("div",{className:"createWorkflowBox"},e.createElement("h2",{className:"Font22"},_l("\u5982\u4F55\u5F00\u59CB\u4F60\u7684\u6D41\u7A0B%03010")),be.map(function(r,i){var a=r.text,c=r.subClass;return e.createElement("div",{key:i,className:"triggerWorkflowMode"},e.createElement("div",{className:"modeName bold Gray_75"},a),c.map(function(p){return e.createElement("div",{key:p.startEventAppType,className:"triggerModeDetail flexRow pointer",onClick:function(){return!t.requestPending&&t.createFlow(p.startEventAppType)}},e.createElement(ke,{size:56,iconSize:28,icon:u.EV[p.startEventAppType].iconName,bgColor:u.EV[p.startEventAppType].iconColor}),e.createElement("div",{className:"detailExplain flexColumn"},e.createElement("div",{className:"Font15 mTop4"},p.title),e.createElement("div",{className:"Gray_75 mTop10",style:{maxWidth:520}},p.explain)))}))})))}}]),v}(e.Component),Q.propTypes={appId:$.string.isRequired,onBack:$.func,flowName:$.string},Q.defaultProps={onBack:function(){}},ce),F=l(5017),Fe=l(49611),Ae=l.n(Fe),Se=l(91088),Pe=l(96486),I=l.n(Pe),Re=l(41053),pe=l(77863),Ze=l(45371),De=l(93002),Oe=(0,L.Z)([`
  height: 53px;
  padding: 0 68px 0 26px;
  .trashSearch {
    .icon {
      top: 8px;
    }
    input {
      width: 184px;
      height: 30px;
      background: #f5f5f5;
      border-radius: 16px 16px 16px 16px;
    }
  }
`],[`
  height: 53px;
  padding: 0 68px 0 26px;
  .trashSearch {
    .icon {
      top: 8px;
    }
    input {
      width: 184px;
      height: 30px;
      background: #f5f5f5;
      border-radius: 16px 16px 16px 16px;
    }
  }
`]),We=(0,L.Z)([`
  .table {
    height: 600px;
    min-height: 600px;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    .nameWrapTr {
      min-width: 260px;
      max-width: 260px;
    }
    .iconWrap {
      width: 36px;
      min-width: 36px;
      height: 36px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 24px;
        color: #fff;
      }
    }
    .optionWrapTr {
      max-width: 100px;
      text-align: right;
      padding-right: 10px;
    }
    .nullData {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100% - 60px) !important;
      .emptyIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        border-radius: 130px;
        background: #f5f5f5;
        .icon {
          color: #bdbdbd;
          font-size: 66px;
        }
      }
    }
    font-weight: 400;
    .trashHeader {
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }
    .trashLi {
      padding: 15px 10px;
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
      .icon-reply1,
      .icon-delete1 {
        color: #9d9d9d;
        cursor: pointer;
        opacity: 0;
        font-size: 20px;
      }
      &:hover {
        background: #f5f5f5;
        .icon-reply1,
        .icon-delete1 {
          opacity: 1;
        }
        .icon-reply1 {
          &:hover {
            color: #2196f3;
          }
        }
        .icon-delete1 {
          &:hover {
            color: #f32121;
          }
        }
      }
    }
  }
`],[`
  .table {
    height: 600px;
    min-height: 600px;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    .nameWrapTr {
      min-width: 260px;
      max-width: 260px;
    }
    .iconWrap {
      width: 36px;
      min-width: 36px;
      height: 36px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 24px;
        color: #fff;
      }
    }
    .optionWrapTr {
      max-width: 100px;
      text-align: right;
      padding-right: 10px;
    }
    .nullData {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100% - 60px) !important;
      .emptyIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        border-radius: 130px;
        background: #f5f5f5;
        .icon {
          color: #bdbdbd;
          font-size: 66px;
        }
      }
    }
    font-weight: 400;
    .trashHeader {
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }
    .trashLi {
      padding: 15px 10px;
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
      .icon-reply1,
      .icon-delete1 {
        color: #9d9d9d;
        cursor: pointer;
        opacity: 0;
        font-size: 20px;
      }
      &:hover {
        background: #f5f5f5;
        .icon-reply1,
        .icon-delete1 {
          opacity: 1;
        }
        .icon-reply1 {
          &:hover {
            color: #2196f3;
          }
        }
        .icon-delete1 {
          &:hover {
            color: #f32121;
          }
        }
      }
    }
  }
`]),He=F.ZP.div(Oe),je=F.ZP.div(We);function Me(C){var v=(0,De.Z)({loading:!0,pageSize:30,list:[]}),f=(0,te.Z)(v,2),t=f[0],n=t.loading,r=t.pageSize,i=t.list,a=f[1],c=(0,e.useRef)({pgIndex:1});(0,e.useEffect)(function(){p()},[]);var p=function(){c.current.pgIndex=1,c.current.keyWords="",c.current.isMore=!0,o()},o=function(){c.current.pgIndex>1&&(n&&c.current.isMore||!c.current.isMore)||!c.current.isMore||(a({loading:!0}),S.Z.list({processListType:100,keyWords:c.current.keyWords,pageIndex:c.current.pgIndex,pageSize:r,relationId:C.appId}).then(function(d){var s=(d[0]||{}).processList||[];a({list:c.current.pgIndex>1?i.concat(s):s,data:d[0],loading:!1}),c.current.isMore=(s||[]).length>=r}))},h=function(d,s){S.Z.restoreProcess({processId:d}).then(function(y){y?(alert(_l("\u6062\u590D\u6210\u529F")),p(),C.onChange(s)):alert(_l("\u6062\u590D\u5931\u8D25"),2)})},g=function(d){S.Z.removeProcess({processId:d}).then(function(s){s?(alert(_l("\u5F7B\u5E95\u5220\u9664\u6210\u529F")),p()):alert(_l("\u5F7B\u5E95\u5220\u9664\u5931\u8D25"),2)})},E=[{id:"name",className:"nameWrapTr",name:_l("\u6D41\u7A0B\u540D\u79F0"),render:function(d,s){return e.createElement("div",{className:"flexRow flex alignItemsCenter overflowHidden"},e.createElement("div",{className:N()("iconWrap"),style:{backgroundColor:(u.EV[d.child?"subprocess":d.startAppType]||{}).iconColor}},e.createElement(b.Z,{icon:(u.EV[d.child?"subprocess":d.startAppType]||{}).iconName})),e.createElement("div",{className:"flex name mLeft10 mRight24 overflowHidden"},e.createElement("div",{className:"ellipsis Font14",title:d.name},d.name)))}},{id:"type",name:_l("\u7C7B\u578B"),sorter:!0,render:function(d,s){return e.createElement("div",{className:"ellipsis Font14"},(u.vK.find(function(y){return y.value===String(d.processListType)})||{}).text)}},{id:"dataFrom",name:_l("\u6570\u636E\u6E90"),render:function(d,s){return d.appName}},{id:"ownerAccount",name:_l("\u5220\u9664\u8005"),render:function(d,s){return e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(q.Z,{projectId:C.projectId,size:28,user:{userHead:_.get(d,"ownerAccount.avatar"),accountId:_.get(d,"ownerAccount.accountId")}}),e.createElement("div",{className:"mLeft12 ellipsis flex mRight20"},_.get(d,"ownerAccount.fullName")))}},{id:"operateTime",name:_l("\u5220\u9664\u65F6\u95F4"),sorter:!0,render:function(d,s){return d.lastModifiedDate}},{id:"option",className:"optionWrapTr",name:"",render:function(d,s){return e.createElement("div",{className:"flex"},e.createElement(H.Z,{text:e.createElement("span",null,_l("\u6062\u590D")),popupPlacement:"bottom"},e.createElement("i",{className:"icon icon-reply1",onClick:function(){h(d.id,d.processListType)}})),e.createElement(H.Z,{text:e.createElement("span",null,_l("\u5F7B\u5E95\u5220\u9664")),popupPlacement:"bottom"},e.createElement("i",{className:"icon icon-delete1 mLeft25",onClick:function(){(0,Ze.Z)({title:_l("\u5C06\u5F7B\u5E95\u5220\u9664\u5DE5\u4F5C\u6D41\u201C%0\u201D",d.name),description:_l("\u5F7B\u5E95\u5220\u9664\u8BE5\u6570\u636E\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002"),data:[{text:_l("\u6211\u786E\u5B9A\u6267\u884C\u6B64\u64CD\u4F5C"),value:!0}],okText:_l("\u5F7B\u5E95\u5220\u9664"),buttonType:"danger",onOk:function(){g(d.id)}})}})))}}],w=function(d){return e.createElement("div",{className:"flexRow trashLi alignItemsCenter"},E.map(function(s){return e.createElement("div",{className:N()("flex",s.className)},s.render(d))}))},x=function(){return e.createElement("div",{className:"flexRow trashHeader alignItemsCenter"},E.map(function(d){return e.createElement("div",{className:N()("flex",d.className)},d.id!=="option"?d.name:"")}))},m=function(){return e.createElement(e.Fragment,null,x(),e.createElement(ee.Z,{className:"flex",onScrollEnd:function(){n||(c.current.pgIndex=c.current.pgIndex+1,o())}},i.map(function(d){return w(d)}),n&&c.current.pgIndex>1&&e.createElement(V.Z,null)))},K=function(d){c.current.pgIndex=1,c.current.keyWords=d,c.current.isMore=!0,o()},G=_.debounce(function(T){return K(T)},500);return e.createElement(oe.Z,{className:"workflowTrashDialog",width:"1000",headerClass:"pAll0",visible:!0,title:null,footer:null,onCancel:C.onCancel},e.createElement(je,{className:"flexColumn"},e.createElement(He,{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"Font17 flex"},_l("\u56DE\u6536\u7AD9"),"\uFF08 ",_l("\u5DE5\u4F5C\u6D41"),"\uFF09",e.createElement("span",{className:"Gray_9e Font13 mLeft10"},_l("\u53EF\u6062\u590D60\u5929\u5185\u5220\u9664\u7684\u5DE5\u4F5C\u6D41"))),e.createElement(le.Z,{className:"trashSearch",placeholder:_l("\u5DE5\u4F5C\u6D41\u540D\u79F0"),value:c.current.keyWords,handleChange:G})),e.createElement("div",{className:"table flex flexColumn pLeft20 pRight20 pTop10 pBottom10"},n&&c.current.pgIndex<=1?e.createElement(V.Z,null):i.length<=0?e.createElement("div",{className:"nullData TxtCenter flex"},e.createElement("div",{className:"emptyIcon"},e.createElement("i",{className:"icon icon-custom_-page_delete"})),e.createElement("p",{className:"TxtCenter Gray_9e Font17 mTop10"},c.current.keyWords?_l("\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u7ED3\u679C"):_l("\u56DE\u6536\u7AD9\u6682\u65E0\u5185\u5BB9"))):m())))}var Be=l(19575),ze=l(30381),k=l.n(ze),Ue=l(94796),de,Xe=(0,L.Z)([`
  height: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 15;
  background-color: #fff;
  padding: 0 24px 0 16px;
  .applicationIcon {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    margin-left: -3px;
  }
  .Gray_bd {
    &:hover {
      color: #9e9e9e !important;
      .applicationIcon {
        box-shadow: 0 0 20px 20px rgb(0 0 0 / 10%) inset;
      }
    }
  }
  .trash {
    color: #757575;
    .trashIcon {
      color: #9e9e9e;
    }
    &:hover {
      color: #2196f3;
      .trashIcon {
        color: #2196f3;
      }
    }
  }
`],[`
  height: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 15;
  background-color: #fff;
  padding: 0 24px 0 16px;
  .applicationIcon {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    margin-left: -3px;
  }
  .Gray_bd {
    &:hover {
      color: #9e9e9e !important;
      .applicationIcon {
        box-shadow: 0 0 20px 20px rgb(0 0 0 / 10%) inset;
      }
    }
  }
  .trash {
    color: #757575;
    .trashIcon {
      color: #9e9e9e;
    }
    &:hover {
      color: #2196f3;
      .trashIcon {
        color: #2196f3;
      }
    }
  }
`]),Ge=(0,L.Z)([`
  .workflowAdd {
    line-height: 32px !important;
    border-radius: 32px !important;
    padding: 0 16px !important;
    opacity: 0.87;
    font-weight: bold;
    &:hover {
      opacity: 1;
    }
    .icon {
      margin-right: 2px;
    }
  }
`],[`
  .workflowAdd {
    line-height: 32px !important;
    border-radius: 32px !important;
    padding: 0 16px !important;
    opacity: 0.87;
    font-weight: bold;
    &:hover {
      opacity: 1;
    }
    .icon {
      margin-right: 2px;
    }
  }
`]),Ve=(0,L.Z)([`
  &.active {
    .Dropdown--border {
      border-color: #2196f3 !important;
      background: #e3f2fd;
      .value {
        color: #2196f3;
      }
    }
    &:hover {
      .icon-arrow-down-border {
        visibility: hidden;
      }
      .icon-closeelement-bg-circle {
        display: block;
      }
    }
  }
  .icon-closeelement-bg-circle {
    position: absolute;
    display: none;
    top: 10px;
    right: 6px;
    color: #9e9e9e;
    &:hover {
      color: #2196f3;
    }
  }
`],[`
  &.active {
    .Dropdown--border {
      border-color: #2196f3 !important;
      background: #e3f2fd;
      .value {
        color: #2196f3;
      }
    }
    &:hover {
      .icon-arrow-down-border {
        visibility: hidden;
      }
      .icon-closeelement-bg-circle {
        display: block;
      }
    }
  }
  .icon-closeelement-bg-circle {
    position: absolute;
    display: none;
    top: 10px;
    right: 6px;
    color: #9e9e9e;
    &:hover {
      color: #2196f3;
    }
  }
`]),Ye=(0,L.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`]),$e=(0,L.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`]),Qe=F.ZP.div(Xe),Ke=F.ZP.div(Ge),X=F.ZP.div(Ve),ue=F.ZP.span(Ye),me=F.ZP.span($e),Je=(0,xe.Z)(de=function(C){(0,z.default)(v,C);function v(f){(0,M.default)(this,v);var t=(0,A.default)(this,(v.__proto__||j()(v)).call(this,f));return t.ajaxRequest=null,t.requestPending=!1,t.createFlow=function(n){t.requestPending=!0,D.Z.addProcess({companyId:"",relationId:n,relationType:2,startEventAppType:17,name:_l("\u672A\u547D\u540D\u4E1A\u52A1\u6D41\u7A0B")}).then(function(r){se.Z.addWorkflow({projectId:r.companyId}),(0,Z.T8)("/workflowedit/"+r.id)}).finally(function(){t.requestPending=!1})},t.state={loading:!0,list:[],count:{},type:t.getQueryStringType(),groupFilter:"",userFilter:"",statusFilter:"",dateFilter:"",keywords:"",isCreate:!1,appDetail:{},selectFlowId:"",selectItem:"",showTrash:!1,isAsc:!0,displayType:"lastModifiedDate",sortType:"",rangeDate:[],showDateRangePicker:!1},t}return(0,B.default)(v,[{key:"componentDidMount",value:function(){this.getAppDetail(),this.checkIsAppAdmin()}},{key:"componentWillReceiveProps",value:function(t,n){var r=this.getQueryStringType();r!==this.state.type&&(this.setState({loading:!0,type:r,groupFilter:"",userFilter:"",statusFilter:"",dateFilter:"",keywords:"",isAsc:!0,displayType:"lastModifiedDate",sortType:""}),this.getList(r))}},{key:"getQueryStringType",value:function(){var t=location.search&&location.search.slice(1),n=ye.parse(t),r=n.type,i=r===void 0?u.qX.APP:r;return i}},{key:"getAppDetail",value:function(){var t=this,n=this.props.match.params.appId;Se.Z.getApp({appId:n}).then(function(r){t.setState({appDetail:r}),(0,O.tl)(r.iconUrl,r.iconColor)})}},{key:"checkIsAppAdmin",value:function(){var t=this,n=this.props.match.params.appId;S.Z.getProcessRole({relationType:2,relationId:n}).then(function(r){r?(t.getList(t.state.type),t.getCount()):(0,Z.T8)("/app/"+n)})}},{key:"getList",value:function(t){var n=this;this.ajaxRequest&&this.ajaxRequest.abort(),this.ajaxRequest=S.Z.list({relationId:this.props.match.params.appId,processListType:t}),this.ajaxRequest.then(function(r){n.ajaxRequest=null,r.forEach(function(i){i.groupName=(0,O.T3)(n.props.match.params.appId,i.groupId).name||i.groupName}),t===u.qX.OTHER&&r.forEach(function(i){i.processList.forEach(function(a){a.hookUrl=Be.Base64.toBase64(a.id)})}),n.setState({loading:!1,list:r})})}},{key:"getCount",value:function(){var t=this;S.Z.count({relationId:this.props.match.params.appId,relationType:2}).then(function(n){t.setState({count:n})})}},{key:"renderHeader",value:function(){var t=this,n=this.props.match.params.appId,r=this.state,i=r.type,a=r.appDetail,c=r.isCreate,p=I().get(I().find(md.global.Account.projects,function(h){return h.projectId===a.projectId}),"licenseType")===0,o=(0,O.XH)(a.projectId,pe.UU.recycle);return e.createElement(Qe,{className:"flexRow alignItemsCenter"},e.createElement(Ae(),{title:(a.name?a.name+" - ":"")+_l("\u5DE5\u4F5C\u6D41")}),e.createElement(H.Z,{popupPlacement:"bottomLeft",text:e.createElement("span",null,_l("\u5E94\u7528\uFF1A%0",a.name))},e.createElement("div",{className:"flexRow pointer Gray_bd alignItemsCenter",onClick:function(){window.disabledSideButton=!0;var g=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+n))||{};if(g){var E=g.lastGroupId,w=g.lastWorksheetId,x=g.lastViewId;(0,Z.T8)("/app/"+n+"/"+[E,w,x].filter(function(m){return m&&!I().includes(["undefined","null"],m)}).join("/")+"?from=insite")}else(0,Z.T8)("/app/"+n)}},e.createElement("i",{className:"icon-navigate_before Font20"}),e.createElement("div",{className:"applicationIcon",style:{backgroundColor:a.iconColor}},e.createElement(ae.Z,{url:a.iconUrl,fill:"#fff",size:18})))),e.createElement("div",{className:"flex nativeTitle Font17 bold mLeft16"},_l("\u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41")),o&&e.createElement("div",{className:"trash mRight20 ThemeHoverColor3 flexRow",onClick:function(){if(p){(0,O.j0)(a.projectId,pe.UU.recycle);return}t.setState({showTrash:!0})}},e.createElement(b.Z,{icon:"knowledge-recycle",className:"trashIcon Hand Font18"}),e.createElement("div",{className:"recycle InlineBlock Hand mLeft5"},_l("\u56DE\u6536\u7AD9")),p&&e.createElement(ve.Z,null)),e.createElement(Ke,null,i!==u.qX.PBC?e.createElement(re.ZP,{size:"small",icon:"add",className:"workflowAdd",style:{backgroundColor:a.iconColor},onClick:function(){return t.setState({isCreate:!0})}},_l("\u65B0\u5EFA\u5DE5\u4F5C\u6D41")):e.createElement(re.ZP,{size:"small",icon:"add",className:"workflowAdd",onClick:function(){return!t.requestPending&&t.createFlow(n)}},_l("\u65B0\u5EFA\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B"))),c&&e.createElement(Le,{appId:n,flowName:_l("\u672A\u547D\u540D\u5DE5\u4F5C\u6D41"),onBack:function(){return t.setState({isCreate:!1})}}))}},{key:"renderNavigation",value:function(){var t=this.props.match.url,n=this.state,r=n.type,i=n.count;return e.createElement("ul",{className:"workflowHeader flexColumn"},u.vK.filter(function(a){return a.value!==u.qX.EVENT_PUSH||i[a.value]}).map(function(a){return e.createElement(e.Fragment,null,a.value===u.qX.PBC&&e.createElement("div",{className:"workflowHeaderLine"}),e.createElement(Y.Z,{className:"NoUnderline",to:t+"?type="+a.value,key:a.value},e.createElement("li",{className:N()({"active ThemeColor3":r===a.value})},r===a.value&&e.createElement("span",{className:"activeLine"}),e.createElement("i",{className:N()("Font18",a.icon,r===a.value?"ThemeColor3":"Gray_9e")}),e.createElement("span",{className:"flex ellipsis mLeft10"},a.text),a.value===u.qX.PBC&&e.createElement(ne.Z,{className:"pointer Gray_9e mLeft2",href:"https://help.mingdao.com/workflow/pbp",type:1,text:_l("\u5E2E\u52A9")}),e.createElement("span",{className:"Gray_9e mLeft10 Font13"},i[a.value]||""))))}))}},{key:"renderContent",value:function(){var t=this,n=this.state,r=n.type,i=n.groupFilter,a=n.userFilter,c=n.statusFilter,p=n.dateFilter,o=n.keywords,h=n.sortType,g=n.isAsc,E=n.displayType,w=n.rangeDate,x=I().cloneDeep(this.state),m=x.list;if(i!==""&&(m=m.filter(function(s){return s.groupId===i})),a!==""&&(m=m.map(function(s){return s.processList=s.processList.filter(function(y){return y.ownerAccount.accountId===a}),s})),c!==""&&(m=m.map(function(s){return s.processList=s.processList.filter(function(y){return y.enabled===c}),s})),p!==""){var K=p===8?w:u.uu.find(function(s){return s.value===p}).format(),G=(0,te.Z)(K,2),T=G[0],d=G[1];m=m.map(function(s){return s.processList=s.processList.filter(function(y){return!T||!d?!0:k()(y[E])>=k()(T)&&k()(y[E])<k()(d)}),s})}return o&&(m=m.map(function(s){return s.processList=s.processList.filter(function(y){return I().includes(y.name.toLocaleLowerCase(),o.toLocaleLowerCase())||(y.hookUrl||"").toLocaleLowerCase()===o.toLocaleLowerCase()}),s})),I().remove(m,function(s){return!s.processList.length}),h!==""&&(m=m.map(function(s){return s.processList=s.processList.sort(function(y,W){return g?h==="name"?y[h].charCodeAt(0)-W[h].charCodeAt(0):k()(y[h])-k()(W[h]):h==="name"?W[h].charCodeAt(0)-y[h].charCodeAt(0):k()(W[h])-k()(y[h])}),s})),e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow manageList manageListHeader bold"},e.createElement("div",{className:"flex mLeft10 mRight20 flexRow",style:{minWidth:120}},e.createElement("div",{className:"flex"},_l("\u6D41\u7A0B\u540D\u79F0")),e.createElement("div",{className:"flexColumn"},e.createElement(ue,{className:N()({active:h==="name"&&g}),onClick:function(){return t.setState({sortType:"name",isAsc:!0})}}),e.createElement(me,{className:N()({active:h==="name"&&!g}),onClick:function(){return t.setState({sortType:"name",isAsc:!1})}}))),e.createElement("div",{className:"w180"},r===u.qX.OTHER_APP?_l("\u4FEE\u6539\u5DE5\u4F5C\u8868"):r===u.qX.CUSTOM_ACTION?_l("\u6570\u636E\u6E90"):r===u.qX.APPROVAL?_l("\u89E6\u53D1\u6D41\u7A0B"):_l("\u7C7B\u578B")),e.createElement("div",{className:"w270 pRight20 flexRow"},r===u.qX.OTHER_APP?e.createElement("div",{className:"flex"},_l("\u6267\u884C\u52A8\u4F5C")):e.createElement(e.Fragment,null,e.createElement("div",{className:"flex"},e.createElement(R.Z,{className:"Normal",data:[{text:_l("\u521B\u5EFA\u65F6\u95F4"),value:"createdDate"},{text:_l("\u66F4\u65B0\u65F6\u95F4"),value:"lastModifiedDate"}],value:E,renderTitle:function(){return e.createElement("span",{className:"Gray_75 bold"},E==="createdDate"?_l("\u72B6\u6001 / \u521B\u5EFA\u65F6\u95F4"):_l("\u72B6\u6001 / \u66F4\u65B0\u65F6\u95F4"))},onChange:function(y){return t.setState({displayType:y,sortType:y,isAsc:!0})}})),e.createElement("div",{className:"flexColumn"},e.createElement(ue,{className:N()({active:I().includes(["createdDate","lastModifiedDate"],h)&&g}),onClick:function(){return t.setState({sortType:E,isAsc:!0})}}),e.createElement(me,{className:N()({active:I().includes(["createdDate","lastModifiedDate"],h)&&!g}),onClick:function(){return t.setState({sortType:E,isAsc:!1})}})))),e.createElement("div",{className:"w120"},_l("\u521B\u5EFA\u4EBA")),e.createElement("div",{className:"w20 mRight20"})),e.createElement(ee.Z,{className:"flex"},!m.length&&e.createElement("div",{className:"flowEmptyWrap flexColumn"},e.createElement("div",{className:"flowEmptyPic flowEmptyPic-search"}),e.createElement("div",{className:"Gray_9e Font14 mTop20"},_l("\u6CA1\u6709\u641C\u7D22\u5230\u6D41\u7A0B"))),m.map(function(s){return t.renderListItem(s)})))}},{key:"renderListItem",value:function(t){var n=this,r=this.state,i=r.type,a=r.selectFlowId,c=r.appDetail,p={timer:"icon-hr_surplus",User:"icon-hr_structure",ExternalUser:"icon-language"};return e.createElement(e.Fragment,{key:t.groupId},!I().includes([u.qX.OTHER],i)&&e.createElement("div",{className:"manageListName flexRow"},i!==u.qX.OTHER_APP&&t.groupId!=="otherSubProcess"&&e.createElement(e.Fragment,null,t.iconUrl?e.createElement(ae.Z,{url:t.iconUrl,fill:"#9e9e9e",size:20,addClassName:"mTop2 mRight5"}):e.createElement("i",{className:N()("Gray_9e Font20 mRight5",p[t.groupId]||"icon-worksheet")})),t.groupId==="timer"?_l("\u5B9A\u65F6\u89E6\u53D1"):t.groupId==="User"?_l("\u7EC4\u7EC7\u4EBA\u5458\u4E8B\u4EF6\u89E6\u53D1"):t.groupId==="ExternalUser"?_l("\u5916\u90E8\u7528\u6237\u4E8B\u4EF6\u89E6\u53D1"):t.groupName),t.processList.map(function(o){return e.createElement("div",{key:o.id,className:N()("flexRow manageList",{active:a===o.id})},e.createElement("div",{className:N()("iconWrap mLeft10",{unable:!o.enabled}),style:{backgroundColor:(u.EV[o.child?"subprocess":o.startAppType]||{}).iconColor}},e.createElement(b.Z,{icon:(u.EV[o.child?"subprocess":o.startAppType]||{}).iconName})),e.createElement("div",{className:"flex name mLeft10 mRight20"},e.createElement(Ie,{item:o,type:n.state.type})),e.createElement("div",{className:"w180 pRight20"},(0,u.Ui)(n.state.type,o)),e.createElement("div",{className:"w270 pRight20"},n.column3Content(o)),e.createElement("div",{className:"w120 Gray_75 flexRow"},e.createElement(q.Z,{projectId:c.projectId,size:28,user:{userHead:o.ownerAccount.avatar,accountId:o.ownerAccount.accountId}}),e.createElement("div",{className:"mLeft12 ellipsis flex mRight20"},o.ownerAccount.fullName)),e.createElement("div",{className:"w20 mRight20 TxtCenter relative"},e.createElement(b.Z,{type:"more_horiz",className:"Gray_9e ThemeHoverColor3 pointer Font16 listBtn",onClick:function(){return n.setState({selectFlowId:o.id})}}),a===o.id&&n.renderMoreOptions(o)))}))}},{key:"column3Content",value:function(t){var n=this,r=this.state,i=r.type,a=r.list,c=r.displayType,p=void 0;return i!==u.qX.OTHER_APP?e.createElement(Ce.Z,{disabled:i===u.qX.APPROVAL,list:a,item:t,showTime:!0,showCreateTime:c==="createdDate",updateSource:function(h){return n.setState({list:h})}}):e.createElement("div",{className:"twoRowsContent"},t.flowNodeActionDtos.map(function(o){if(o.typeId===3)p=_l("\u586B\u5199\u8282\u70B9");else switch(o.actionId){case"1":p=_l("\u65B0\u589E\u8BB0\u5F55");break;case"2":p=_l("\u66F4\u65B0\u8BB0\u5F55");break;case"3":p=_l("\u5220\u9664\u8BB0\u5F55");break;case"21":p=_l("\u6279\u91CF\u65B0\u589E\u8BB0\u5F55");break}return p+(o.count>1?"("+o.count+")":"")}).join("\uFF0C"))}},{key:"renderMoreOptions",value:function(t){var n=this,r=this.state.type;return e.createElement(he.Z,{className:"mTop10 TxtLeft workflowListMenu",style:{left:"inherit",right:0},onClickAway:function(){return n.setState({selectFlowId:""})}},e.createElement(P.Z,null,e.createElement(Y.Z,{to:"/workflowedit/"+t.id+"/2"},e.createElement("span",{className:"icon-restore2 Gray_9e Font16 pLeft12 mRight10"}),_l("\u5386\u53F2"))),!I().includes([u.qX.OTHER_APP,u.qX.APPROVAL,u.qX.CUSTOM_ACTION,u.qX.EVENT_PUSH],r)&&e.createElement(P.Z,null,e.createElement(ie,{item:t,updateList:function(){n.getList(r),n.getCount()}})),I().includes([u.qX.APP,u.qX.CUSTOM_ACTION],r)&&e.createElement(P.Z,null,e.createElement(ie,{isConvert:!0,item:t,updateList:function(){n.getList(r),n.getCount()}})),I().includes([U.IF.LOOP,U.IF.WEBHOOK,U.IF.PBC,U.IF.USER],t.startAppType)&&r!==u.qX.SUB_PROCESS&&e.createElement(P.Z,{onClick:function(){return n.setState({selectItem:t})}},e.createElement("span",{className:"icon-swap_horiz Gray_9e Font16 pLeft12 mRight10"}),_l("\u79FB\u81F3\u5176\u4ED6\u5E94\u7528")),r===u.qX.OTHER_APP||r===u.qX.APPROVAL&&t.triggerId||r===u.qX.CUSTOM_ACTION?null:e.createElement(P.Z,null,e.createElement(we,{item:t,callback:function(a){n.deleteOrMoveProcessHandle(a)}})))}},{key:"deleteOrMoveProcessHandle",value:function(t){var n=this.state,r=n.type,i=n.list,a=I().cloneDeep(this.state.count),c=[].concat(i).map(function(p){return I().remove(p.processList,function(o){return o.id===t}),p});a[r]=a[r]-1,this.setState({count:a,list:c})}},{key:"replyProcessHandle",value:function(t){var n=I().cloneDeep(this.state.count);n[t]=n[t]+1,this.setState({count:n})}},{key:"renderFilter",value:function(){var t=this,n=this.state,r=n.type,i=n.list,a=n.groupFilter,c=n.userFilter,p=n.statusFilter,o=n.dateFilter,h=n.displayType,g=n.rangeDate,E=n.showDateRangePicker,w=[];return i.forEach(function(x){w=w.concat(x.processList.map(function(m){return{text:m.ownerAccount.fullName,value:m.ownerAccount.accountId}}))}),w=I().uniqBy(w,"value"),w.find(function(x){return x.value===md.global.Account.accountId})&&(I().remove(w,function(x){return x.value===md.global.Account.accountId}),w=[[{text:_l("\u6211\u81EA\u5DF1"),value:md.global.Account.accountId}]].concat([w])),e.createElement("div",{className:"manageListSearch flexRow"},!I().includes([u.qX.OTHER,u.qX.PBC],r)&&e.createElement(X,{className:N()("w180 relative mRight10",{active:a!==""})},e.createElement(R.Z,{className:"w100",data:(i||[]).map(function(x){return{text:x.groupName,value:x.groupId}}),value:a,placeholder:r===u.qX.OTHER_APP?_l("\u5168\u90E8\u5E94\u7528"):_l("\u5168\u90E8"),openSearch:!0,border:!0,onChange:function(m){return t.setState({groupFilter:m})}}),e.createElement(b.Z,{icon:"closeelement-bg-circle",className:"Font16 pointer",onClick:function(){return t.setState({groupFilter:""})}})),e.createElement(X,{className:N()("w180 relative mRight10",{active:p!==""})},e.createElement(R.Z,{className:"w100",data:[{text:_l("\u5F00\u542F"),value:!0},{text:_l("\u5173\u95ED"),value:!1}],value:p,placeholder:_l("\u72B6\u6001"),border:!0,onChange:function(m){return t.setState({statusFilter:m})}}),e.createElement(b.Z,{icon:"closeelement-bg-circle",className:"Font16 pointer",onClick:function(){return t.setState({statusFilter:""})}})),e.createElement(X,{className:N()("w180 relative",{active:c!==""},E?"mRight9":"mRight10")},e.createElement(R.Z,{className:"w100",data:w,value:c,placeholder:_l("\u521B\u5EFA\u4EBA"),openSearch:!0,border:!0,onChange:function(m){return t.setState({userFilter:m})}}),e.createElement(b.Z,{icon:"closeelement-bg-circle",className:"Font16 pointer",onClick:function(){return t.setState({userFilter:""})}})),E&&e.createElement(Ue.Z,{mode:"date",defaultVisible:!0,timePicker:!0,selectedValue:g.length?g:[k()(k()().format("YYYY-MM-DD 00:00")),k()(k()().format("YYYY-MM-DD 23:59"))],allowClear:!1,children:e.createElement("div",{className:"filterTimeRange"}),onOk:function(m){return t.setState({dateFilter:8,rangeDate:m,showDateRangePicker:!1})},onVisibleChange:function(m){m||(!g.length&&t.setState({dateFilter:""}),t.setState({showDateRangePicker:!1}))}}),e.createElement(X,{className:N()("w180 relative mRight10",{active:o!==""})},e.createElement(R.Z,{className:"w100",data:u.uu,value:o===8?-1:o,placeholder:h==="createdDate"?_l("\u521B\u5EFA\u65F6\u95F4"):_l("\u66F4\u65B0\u65F6\u95F4"),border:!0,renderTitle:o===8?function(){return e.createElement(H.Z,{popupPlacement:"bottomLeft",text:g.length?e.createElement("span",null,_l("%0 \u81F3 %1",g[0].format("YYYY-MM-DD HH:mm"),g[1].format("YYYY-MM-DD HH:mm"))):""},e.createElement("span",null,_l("\u81EA\u5B9A\u4E49\u65E5\u671F")))}:null,onChange:function(m){return t.setState({dateFilter:m,rangeDate:m===8?g:[],showDateRangePicker:m===8})}}),e.createElement(b.Z,{icon:"closeelement-bg-circle",className:"Font16 pointer",onClick:function(){return t.setState({dateFilter:"",rangeDate:[]})}})),e.createElement("div",{className:"flex"}),e.createElement(le.Z,{placeholder:_l("\u641C\u7D22\u6D41\u7A0B\u540D\u79F0"),handleChange:function(m){return t.setState({keywords:m.trim()})}}))}},{key:"render",value:function(){var t=this,n=this.props.match.params.appId,r=this.state,i=r.type,a=r.loading,c=r.list,p=r.selectItem,o=r.appDetail,h=r.showTrash;return e.createElement(fe.Z,{projectId:o.projectId},e.createElement("div",{className:"flexColumn h100"},this.renderHeader(),e.createElement("div",{className:"workflowList flexRow workflowListShadow flex"},this.renderNavigation(),e.createElement("div",{className:"manageListContainer flex"},e.createElement("div",{className:"manageListBox"},e.createElement("div",{className:"manageListBoxContent flexColumn"},a?e.createElement(V.Z,{className:"mTop10"}):c.length?e.createElement(e.Fragment,null,this.renderFilter(),this.renderContent()):e.createElement("div",{className:"flowEmptyWrap flexColumn"},e.createElement("div",{className:N()("flowEmptyPic","flowEmptyPic-"+(u.lU[i]||{}).icon)}),e.createElement("div",{className:"Gray_9e Font14 mTop20"},u.lU[i].text))))))),p&&e.createElement(Re.Z,{projectId:o.projectId,visible:!0,onlyApp:!0,title:_l("\u79FB\u52A8\u5DE5\u4F5C\u6D41\u201C%0\u201D\u81F3\u5176\u4ED6\u5E94\u7528",p.name),onOk:function(E){var w=E===n;w?alert(_l("\u8BF7\u9009\u62E9\u4E00\u4E2A\u5176\u4ED6\u5E94\u7528",3)):D.Z.move({relationId:E,processId:p.id}).then(function(x){x&&t.deleteOrMoveProcessHandle(p.id)})},onHide:function(){return t.setState({selectItem:""})}}),h&&e.createElement(Me,{projectId:o.projectId,appId:n,onCancel:function(){t.setState({showTrash:!1})},onChange:function(E){t.getList(i),t.replyProcessHandle(E)}}))}}]),v}(e.Component))||de;const qe=Je}}]);
