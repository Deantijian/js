"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[98],{71411:(Ne,te,e)=>{e.d(te,{Z:()=>B});var Q=e(85105),k=e.n(Q),_=e(99663),j=e(22600),X=e(49135),N=e(93196),T=e(67294),H=e(45697),U=e.n(H),t=e(93967),g=e.n(t),n,s,B=(s=n=function(V){(0,N.default)(Z,V);function Z(){return(0,_.default)(this,Z),(0,X.default)(this,(Z.__proto__||k()(Z)).apply(this,arguments))}return(0,j.default)(Z,[{key:"render",value:function(){var oe=this.props.detail,fe=oe.icon,Ee=oe.desc,he=this.props.className;return T.createElement("div",{className:"tableEmptyBox "+he},T.createElement("div",{className:"emptyIcon"},T.createElement("span",{className:g()("Font40",fe)})),T.createElement("span",{className:"Bold Font15 mTop20 desc"},Ee))}}]),Z}(T.Component),n.propTypes={detail:U().object},s)},17915:(Ne,te,e)=>{e.d(te,{Z:()=>t});var Q=e(46593),k=e.n(Q),_=e(15577),j=e(64712),X=e(30539),N=e(96486),T=e.n(N),H={},U=j.Z.AUTHORITY_DICT;H.init=function(){return j.Z.getParams(),j.Z.project={},j.Z.project=(0,_.vo)(j.Z.projectId),j.Z.project.projectId?H.getProjectPermissionsByUser().then(function(){for(var g=arguments.length,n=Array(g),s=0;s<g;s++)n[s]=arguments[s];return T().flatten(T().filter(n,function(B){return B}))}):new(k())(function(g,n){n([U.NOT_MEMBER])})},H.getProjectPermissionsByUser=function(){return X.Z.getProjectPermissionsByUser({projectId:j.Z.projectId}).then(function(g){var n=[];return g.IsNotProjectUser&&n.push(U.NOT_MEMBER),(g.isProjectAdmin||g.isProjectAppManager||g.isSuperAdmin)&&n.push(U.HAS_PERMISSIONS),g.isProjectAdmin&&n.push(U.PROJECT_ADMIN),g.isProjectAppManager&&n.push(U.APK_ADMIN),g.hasRole&&n.push(U.SHOW_MANAGER),n})},H.freeUpdateDialog=function(){(0,_.Yg)({projectId:j.Z.project.projectId,explainText:_l("\u8BF7\u5347\u7EA7\u81F3\u4ED8\u8D39\u7248\u89E3\u9501\u5F00\u542F"),isFree:!0})};const t=H},60098:(Ne,te,e)=>{e.r(te),e.d(te,{default:()=>p});var Q=e(54208),k=e(93567),_=e(85315),j=e(85105),X=e.n(j),N=e(99663),T=e(22600),H=e(49135),U=e(93196),t=e(67294),g=e(64712),n=e(17915),s=e(98523),B=e(15028),V=e(26581),Z=e(88106),pe=e(51197),oe=e(21),fe=e(70132),Ee=e(31261),he=e(14779),le=e.n(he),de=e(36021),ne=e(15577),me=e(77863),F=e(93967),b=e.n(F),xe=e(96486),I=e.n(xe),ae,ce=(0,oe.Z)(ae=function(o){(0,U.default)(h,o);function h(x){(0,N.default)(this,h);var a=(0,H.default)(this,(h.__proto__||X()(h)).call(this,x));return a.renderLinkItem=function(l,M){var C=l.icon,R=l.name,O=l.menuPath,D=l.routes,w=l.featureId,Y=l.key,ge=l.hasBeta,Se=ge===void 0?!1:ge,je=l.featureIds,Re=a.state,Me=Re.subListVisible,Le=Re.isExtend,G=a.props,ye=G.location.pathname,J=G.match.params.projectId;if(!(Y==="billinfo"&&!md.global.Config.IsPlatformLocal)&&!(Y==="weixin"&&md.global.SysSettings.hideWeixin)&&!(Y==="platformintegration"&&md.global.SysSettings.hideWorkWeixin&&md.global.SysSettings.hideDingding&&md.global.SysSettings.hideFeishu&&md.global.SysSettings.hideWelink)){var Ae=function(){return I().some(D,function(De){return le()(De.path).test(ye)})},Ie=void 0,q=(0,ne.XH)(J,w);je&&je.forEach(function(Ce,De){var Ue=(0,ne.XH)(J,Ce);Ue&&(Ie===void 0&&(Ie=De),q=q?Math.min(Ue,q).toString():Ue)});var ee=D[Ie||0]||{},re=le().compile(O||ee.path),ue=ee.path&&ee.path.indexOf(":projectId")===-1?re({0:J}):re({projectId:J}),Te=Y==="home";if(!(I().includes(["analytics","applog","computing","tableAggregation"],Y)&&!q)){var Ze=I().every([me.UU.workwxIntergration,me.UU.dingIntergration,me.UU.feishuIntergration,me.UU.WelinkIntergration],function(Ce){return(0,ne.XH)(J,Ce)==="2"}),Oe=(md.global.Account.projects.find(function(Ce){return Ce.projectId===J})||{}).licenseType,He=Oe===0&&I().includes(["groups","orgothers"],Y);return t.createElement("li",{className:b()("item",{active:Ae()&&Me})},t.createElement(fe.Z,{to:ue,className:Te?"pLeft12":"pLeft40",activeClassName:b()("activeItem bold",{activeExtend:Le}),isActive:Ae,onClick:function(){return a.setState({subListVisible:!1,menuGroupKey:null})}},C&&t.createElement("i",{className:b()("Font20 Gray mRight10 homeIcon",C)}),!Le&&Y==="home"?"":t.createElement("div",{className:"subName"},R,Se&&t.createElement("i",{className:"icon-beta1 betaIcon"}),(q==="2"||Y==="platformintegration"&&Ze||He)&&t.createElement(pe.Z,null))))}}},a.state={currentCompanyName:"",isExtend:a.props.isExtend},a}return(0,T.default)(h,[{key:"componentDidMount",value:function(){var a=this,l=this.props,M=l.match.params.projectId,C=l.location.pathname,R=l.menuList;md.global.Account.projects&&md.global.Account.projects.map(function(D){D.projectId===M&&a.setState({currentCompanyName:D.companyName})});var O=I().find(R,function(D){return I().some(D.subMenuList,function(w){return I().some(w.routes,function(Y){var ge=Y.path;return le()(ge).test(C)})})});C.indexOf("home")>-1&&this.setState({userExpand:!0}),C.indexOf("home")===-1&&!I().isEmpty(O)&&this.setState((0,Z.default)({},O.key+"Expand",!0))}},{key:"componentWillReceiveProps",value:function(a){var l=a.location.pathname,M=a.menuList,C=I().find(M,function(R){return I().some(R.subMenuList,function(O){return I().some(O.routes,function(D){var w=D.path;return le()(w).test(l)})})});l.indexOf("home")===-1&&!I().isEmpty(C)&&this.setState((0,Z.default)({},C.key+"Expand",!0))}},{key:"handleTransition",value:function(){var a=this;this.setState({isExtend:!this.state.isExtend},function(){safeLocalStorageSetItem("adminList_isUp",a.state.isExtend)})}},{key:"render",value:function(){var a=this,l=this.state,M=l.currentCompanyName,C=l.isExtend,R=l.subListVisible,O=l.menuGroupKey,D=this.props,w=D.menuList,Y=w===void 0?[]:w,ge=D.match,Se=D.location,je=ge.params,Re=Se.pathname,Me=md.global.Account.projects.find(function(G){return G.projectId===je.projectId})||{},Le=Me.isSuperAdmin;return t.createElement("div",{id:"menuList",className:b()(C?"extendList":"closeList")},t.createElement("div",{className:"ThemeBGColor9 h100 Relative menuContainer"},t.createElement("div",{className:"title"},t.createElement("div",{className:"companyName Hand",onClick:function(){(0,de.T8)("/admin/home/"+je.projectId)}},M),t.createElement(V.Z,{popupPlacement:"right",offset:[10,0],text:t.createElement("span",null,C?_l("\u9690\u85CF\u4FA7\u8FB9\u680F"):_l("\u5C55\u5F00\u4FA7\u8FB9\u680F"))},t.createElement("span",{className:b()("Hand Font12 ThemeColor9 titleIconBox Block",C?"icon-back-02":"icon-next-02"),onClick:this.handleTransition.bind(this)}))),t.createElement("div",{className:"listContainer pTop8 pBottom30"},C?Y.filter(function(G){return Le?!0:!I().includes(["logs"],G.key)}).map(function(G,ye){var J=G.key,Ae=G.title,Ie=G.icon,q=G.subMenuList,ee=q===void 0?[]:q;return ee=I().filter(ee,function(re){var ue=re.featureId;return!ue||ue&&(0,ne.XH)(je.projectId,ue)}),t.createElement("div",{key:ye,className:b()({Hidden:!ee.length})},Ae?t.createElement("div",{className:"subTitle flexRow alignItemsCenter Hand",onClick:function(){a.setState((0,Z.default)({},J+"Expand",!a.state[J+"Expand"]))}},t.createElement("i",{className:b()("Font20 Gray mRight10",Ie)}),t.createElement("span",{className:"flex"},Ae),t.createElement("i",{className:b()("expandIcon Font16 Gray_75 mRight12",{"icon-arrow-up-border":!a.state[J+"Expand"],"icon-arrow-down-border":a.state[J+"Expand"]})})):I().map(ee,a.renderLinkItem),J==="home"?"":t.createElement("ul",{className:"manageItems overflowHidden",style:{height:a.state[J+"Expand"]?J==="organization"&&!md.global.Config.IsPlatformLocal?(ee.length-1)*48:ee.length*48:0}},I().map(ee,a.renderLinkItem)))}):Y.filter(function(G){return Le?!0:!I().includes(["logs"],G.key)}).map(function(G){var ye=G.key,J=G.title,Ae=G.icon,Ie=G.subMenuList,q=Ie===void 0?[]:Ie,ee=I().reduce(q,function(re,ue){var Te=ue.routes,Ze=Te===void 0?[]:Te,Oe=Ze.map(function(He){return He.path});return re.concat(Oe)},[]);return t.createElement("div",{key:ye,className:b()({Hidden:!q.length})},ye==="home"?I().map(q,a.renderLinkItem):t.createElement(Ee.Z,{action:["click"],popupVisible:R&&O===ye,onPopupVisibleChange:function(ue){return a.setState({subListVisible:ue})},popup:t.createElement("div",{className:"hoverMenuWrap"},t.createElement("div",{className:"Gray_9e Font12 pLeft20 mBottom10"},J),t.createElement("ul",{className:"manageItems overflowHidden",style:{height:q.length*48}},I().map(q,a.renderLinkItem))),popupAlign:{points:["tr","br"],offset:[-40,-40],overflow:{adjustX:!0,adjustY:!0}}},t.createElement("div",{className:b()("shrinkNav flexRow alignItemsCenter Hand",{activeSubTitle:I().some(ee,function(re){return le()(re).test(Re)})}),onMouseEnter:function(){return a.setState({subListVisible:!0,menuGroupKey:ye})}},t.createElement("i",{className:b()("Font20 Gray mRight10",Ae)}))))}))))}}]),h}(t.Component))||ae,ve=e(86735),se=e(22626),Pe=e(99924),ie=e(81670),z=e.n(ie),K=e(5017),P=(0,ve.Z)([`
  border-radius: 4px;
  flex: 1;
  min-height: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .roleAuthHeader {
    height: 56px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    .detailTitle {
      display: flex;
      align-items: center;
    }
    .menuTab {
      display: flex;
      height: 100%;
      li {
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        margin-right: 4px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
        a {
          font-weight: 600;
          color: #333 !important;
          font-size: 17px;
        }
        &.menuTab-active {
          border-bottom-color: #2196f3;
          a {
            color: #2196f3 !important;
          }
        }
      }
    }
  }
  .roleAuthContent {
    flex: 1;
    min-height: 0;
  }
  .noPermission {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }
  }
`],[`
  border-radius: 4px;
  flex: 1;
  min-height: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .roleAuthHeader {
    height: 56px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    .detailTitle {
      display: flex;
      align-items: center;
    }
    .menuTab {
      display: flex;
      height: 100%;
      li {
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        margin-right: 4px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
        a {
          font-weight: 600;
          color: #333 !important;
          font-size: 17px;
        }
        &.menuTab-active {
          border-bottom-color: #2196f3;
          a {
            color: #2196f3 !important;
          }
        }
      }
    }
  }
  .roleAuthContent {
    flex: 1;
    min-height: 0;
  }
  .noPermission {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }
  }
`]),A=K.ZP.div(P),y=function(o){(0,U.default)(h,o);function h(x){(0,N.default)(this,h);var a=(0,H.default)(this,(h.__proto__||X()(h)).call(this,x));return a.applyRole=function(){Pe.Z.getAllowApplyManageRole({projectId:g.Z.projectId}).then(function(l){l||a.setState({canApply:!1,loading:!1}),a.setState({loading:!1})}).catch(function(l){a.setState({loading:!1,canApply:!1})})},a.state={canApply:!0,loading:!0},a}return(0,T.default)(h,[{key:"componentDidMount",value:function(){this.applyRole()}},{key:"render",value:function(){return t.createElement(A,null,this.state.loading?t.createElement(Q.Z,null):this.state.canApply?t.createElement(t.Fragment,null,t.createElement("div",{className:"roleAuthHeader"},t.createElement("div",{className:"detailTitle"},t.createElement("span",{className:"Font17 Bold"},_l("\u7533\u8BF7\u89D2\u8272\u6743\u9650")))),t.createElement("div",{className:"roleAuthContent pLeft24 pRight24"},t.createElement(se.Z,{entry:"apply",projectId:g.Z.projectId}))):t.createElement("div",{className:"noPermission"},t.createElement("img",{className:"img",src:z()}),t.createElement("div",{className:"Gray_75 Font17 mTop30"},_l("\u65E0\u6743\u9650\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"))))}}]),h}(t.Component),c=(0,ve.Z)([`
  border-radius: 4px;
  flex: 1;
  min-height: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .roleAuthHeader {
    height: 56px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    .detailTitle {
      display: flex;
      align-items: center;
    }
    .menuTab {
      display: flex;
      height: 100%;
      li {
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        margin-right: 4px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
        a {
          font-weight: 600;
          color: #333 !important;
          font-size: 17px;
        }
        &.menuTab-active {
          border-bottom-color: #2196f3;
          a {
            color: #2196f3 !important;
          }
        }
      }
    }
  }
  .roleAuthContent {
    flex: 1;
    min-height: 0;
  }
  .noPermission {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }
  }
`],[`
  border-radius: 4px;
  flex: 1;
  min-height: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .roleAuthHeader {
    height: 56px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    .detailTitle {
      display: flex;
      align-items: center;
    }
    .menuTab {
      display: flex;
      height: 100%;
      li {
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        margin-right: 4px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
        a {
          font-weight: 600;
          color: #333 !important;
          font-size: 17px;
        }
        &.menuTab-active {
          border-bottom-color: #2196f3;
          a {
            color: #2196f3 !important;
          }
        }
      }
    }
  }
  .roleAuthContent {
    flex: 1;
    min-height: 0;
  }
  .noPermission {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }
  }
`]),d=K.ZP.div(c),i=function(o){(0,U.default)(h,o);function h(x){(0,N.default)(this,h);var a=(0,H.default)(this,(h.__proto__||X()(h)).call(this,x));return a.state={canApply:!0,loading:!0},a}return(0,T.default)(h,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return t.createElement(d,null,t.createElement("div",{className:"roleAuthHeader"},t.createElement("div",{className:"detailTitle"},t.createElement("span",{className:"Font17 Bold"},_l("\u6211\u7684\u89D2\u8272")))),t.createElement("div",{className:"roleAuthContent pLeft24 pRight24"},t.createElement(se.Z,{entry:"myRole",projectId:g.Z.projectId})))}}]),h}(t.Component),m=e(71411),r={PROJECT_ADMIN:["home","upgradeservice","waitingpay","expansionservice","structure","roles","reportrelation","groups","portal","resignlist","sysinfo","billinfo","valueaddservice","sysroles","integrationothers","weixin","loginlog","security","orgothers","orglog","platformintegration","thirdapp","account","data","securityOthers"],SHOW_MANAGER:["sysroles"],APK_ADMIN:["app","workflows","analytics","computing","variables","applog","database","settings","tableAggregation"]},u=[{title:"",key:"home",subMenuList:[{name:_l("\u9996\u9875"),icon:"icon-home1",key:"home",routes:[{path:"/admin/home/:projectId",component:function(){return Promise.all([e.e(1321),e.e(8592),e.e(4911)]).then(e.bind(e,4911))}},{path:"/admin/upgradeservice/:projectId/:vertionType?",component:function(){return Promise.all([e.e(8592),e.e(4739)]).then(e.bind(e,54739))}},{path:"/admin/waitingpay/(.*)/(.*)",component:function(){return Promise.all([e.e(8592),e.e(7206)]).then(e.bind(e,37206))}},{path:"/admin/expansionservice/(.*)/(user|storage|workflow|storage|dataSync|app)+",component:function(){return Promise.all([e.e(8592),e.e(4926)]).then(e.bind(e,24926))}}]}]},{title:_l("\u7528\u6237"),key:"user",icon:"icon-group",subMenuList:[{name:_l("\u6210\u5458\u4E0E\u90E8\u95E8"),key:"structure",routes:[{path:"/admin/structure/(.*)/(create|uncursor|importusers)?",component:function(){return Promise.all([e.e(8592),e.e(7807)]).then(e.bind(e,27807))}},{path:"/admin/expansionserviceResign/(.*)",component:function(){return Promise.all([e.e(8592),e.e(4926)]).then(e.bind(e,24926))}}]},{name:_l("\u89D2\u8272"),key:"roles",routes:[{path:"/admin/roles/:projectId",component:function(){return Promise.all([e.e(8592),e.e(3852)]).then(e.bind(e,23852))}}]},{name:_l("\u6C47\u62A5\u5173\u7CFB"),key:"reportrelation",routes:[{path:"/admin/reportrelation/(.*)",component:function(){return e.e(8592).then(e.bind(e,37195))}}]},{name:_l("\u7FA4\u7EC4"),key:"groups",routes:[{path:"/admin/groups/(.*)",component:function(){return e.e(1045).then(e.bind(e,91045))}}]},{name:_l("\u5916\u90E8\u7528\u6237"),key:"portal",menuPath:"/admin/portal/:projectId",routes:[{path:"/admin/portal/:projectId",exact:!0,component:function(){return Promise.all([e.e(8592),e.e(3792)]).then(e.bind(e,3792))}},{path:"/admin/expansionservice/(.*)/(portaluser|portalupgrade)+",component:function(){return Promise.all([e.e(8592),e.e(4926)]).then(e.bind(e,24926))}}]}]},{title:_l("\u7EC4\u7EC7"),key:"organization",icon:"icon-business",subMenuList:[{name:_l("\u57FA\u7840\u4FE1\u606F"),key:"sysinfo",routes:[{path:"/admin/sysinfo/(.*)",component:function(){return Promise.all([e.e(8592),e.e(4558)]).then(e.bind(e,4558))}}]},{name:_l("\u8D26\u52A1"),key:"billinfo",routes:[{path:"/admin/billinfo/(.*)",component:function(){return Promise.all([e.e(8592),e.e(2500)]).then(e.bind(e,62500))}},{path:"/admin/valueaddservice/(.*)",component:function(){return Promise.all([e.e(8592),e.e(3544)]).then(e.bind(e,53544))}}]},{name:_l("\u7BA1\u7406\u5458"),key:"sysroles",menuPath:"/admin/sysroles/:projectId",routes:[{path:"/admin/(sysroles)/:projectId/:roleId?",component:function(){return e.e(1926).then(e.bind(e,11926))}}]},{name:_l("\u5176\u4ED6"),key:"orgothers",routes:[{path:"/admin/orgothers/:projectId",component:function(){return e.e(2946).then(e.bind(e,32946))}}]}]},{title:_l("\u5E94\u7528"),key:"apps",icon:"icon-now_widgets",subMenuList:[{name:_l("\u5E94\u7528\u7BA1\u7406"),key:"app",menuPath:"/admin/app/:projectId",routes:[{path:"/admin/app/:projectId",exact:!0,component:function(){return Promise.resolve().then(e.bind(e,40374))}}]},{name:_l("\u5DE5\u4F5C\u6D41"),key:"workflows",routes:[{path:"/admin/workflows/:projectId",component:function(){return Promise.all([e.e(1321),e.e(8592),e.e(2334)]).then(e.bind(e,92334))}},{path:"/admin/expansionserviceWorkflow/(.*)",component:function(){return Promise.all([e.e(8592),e.e(4926)]).then(e.bind(e,24926))}}]},{name:_l("\u805A\u5408\u8868"),key:"tableAggregation",featureId:me.UU.aggregation,routes:[{path:"/admin/aggregationtable/:projectId",component:function(){return Promise.all([e.e(1321),e.e(7190)]).then(e.bind(e,17190))}},{path:"/admin/exaggregationtable/(.*)",component:function(){return Promise.all([e.e(8592),e.e(4926)]).then(e.bind(e,24926))}}]},{name:_l("\u5168\u5C40\u53D8\u91CF"),key:"variables",featureId:me.UU.globalVariable,routes:[{path:"/admin/variables/:projectId",exact:!0,component:function(){return Promise.all([e.e(8592),e.e(4506)]).then(e.bind(e,44506))}}]},{name:_l("\u4E13\u5C5E\u8D44\u6E90"),featureIds:[30,36],key:"computing",hasBeta:!1,routes:[{path:"/admin/computing/:projectId/:explanId?",component:function(){return Promise.all([e.e(1321),e.e(8592),e.e(2406)]).then(e.bind(e,92406))}},{path:"/admin/database/:projectId/:explanId?",component:function(){return Promise.all([e.e(1321),e.e(8592),e.e(2406)]).then(e.bind(e,92406))}},{path:"/admin/expansionserviceComputing/(.*)",component:function(){return Promise.all([e.e(8592),e.e(4926)]).then(e.bind(e,24926))}}]},{name:_l("\u4F7F\u7528\u5206\u6790%15003"),featureId:17,key:"analytics",routes:[{path:"/admin/analytics/:projectId",component:function(){return Promise.all([e.e(1321),e.e(8592),e.e(2086)]).then(e.bind(e,32086))}}]},{name:_l("\u901A\u7528\u8BBE\u7F6E"),key:"settings",routes:[{path:"/admin/settings/:projectId",component:function(){return e.e(4274).then(e.bind(e,64274))}}]}]},{title:_l("\u5B89\u5168"),key:"security",icon:"icon-security",subMenuList:[{name:_l("\u5E10\u53F7"),key:"account",routes:[{path:"/admin/account/:projectId",component:function(){return Promise.all([e.e(8592),e.e(3905)]).then(e.bind(e,43905))}}]},{name:_l("\u6570\u636E"),key:"data",routes:[{path:"/admin/data/:projectId",exact:!0,component:function(){return Promise.all([e.e(8592),e.e(7855)]).then(e.bind(e,7855))}}]},{name:_l("\u5176\u4ED6"),key:"securityOthers",routes:[{path:"/admin/securityothers/:projectId",exact:!0,component:function(){return Promise.all([e.e(8592),e.e(8591)]).then(e.bind(e,28591))}}]}]},{title:_l("\u65E5\u5FD7"),key:"wysiwyg",icon:"icon-wysiwyg",subMenuList:[{name:_l("\u5E94\u7528"),featureId:31,key:"applog",menuPath:"/admin/applog/:projectId",routes:[{path:"/admin/applog/:projectId",exact:!0,component:function(){return e.e(8592).then(e.bind(e,6411))}}]},{name:_l("\u767B\u5F55"),key:"loginlog",menuPath:"/admin/loginlog/:projectId",routes:[{path:"/admin/loginlog/:projectId",exact:!0,component:function(){return Promise.all([e.e(8592),e.e(9995)]).then(e.bind(e,59995))}}]},{name:_l("\u7EC4\u7EC7\u7BA1\u7406"),key:"orglog",menuPath:"/admin/orglog/:projectId",routes:[{path:"/admin/orglog/:projectId",exact:!0,component:function(){return e.e(2225).then(e.bind(e,22225))}}]}]},{title:_l("\u96C6\u6210"),key:"integration",icon:"icon-device_hub",subMenuList:[{name:_l("\u7B2C\u4E09\u65B9\u5E73\u53F0\u96C6\u6210"),key:"platformintegration",menuPath:"/admin/platformintegration/:projectId(.*)",routes:[{path:"/admin/platformintegration/:projectId",component:function(){return Promise.all([e.e(2122),e.e(8592),e.e(5513)]).then(e.bind(e,25513))}}]},{name:_l("\u5FAE\u4FE1\u516C\u4F17\u53F7"),key:"weixin",menuPath:"/admin/weixin/:projectId(.*)",routes:[{path:"/admin/weixin/:projectId",component:function(){return Promise.all([e.e(9704),e.e(2122),e.e(4285)]).then(e.bind(e,74285))}}]},{name:_l("\u7B2C\u4E09\u65B9\u5E94\u7528"),key:"thirdapp",routes:[{path:"/admin/thirdapp/:projectId",component:function(){return Promise.all([e.e(8592),e.e(7819)]).then(e.bind(e,37819))}}]},{name:_l("\u5176\u4ED6"),key:"integrationothers",routes:[{path:"/admin/integrationothers/:projectId",component:function(){return e.e(5626).then(e.bind(e,55626))}}]}]}],f=e(68356),v=e.n(f),S=function(h){return v()({loader:h,loading:function(){return null}})},L=g.Z.AUTHORITY_DICT,E={icon:"icon-task_custom_ic_task_internet",desc:_l("\u60A8\u7684\u8D26\u53F7\u4E0D\u662F\u8BE5\u7EC4\u7EC7\u6210\u5458")},W=t.createElement("div",{className:"commonIndexEmpty"},t.createElement(m.Z,{detail:E})),p=function(o){(0,U.default)(h,o);function h(){var x,a,l,M;(0,N.default)(this,h);for(var C=arguments.length,R=Array(C),O=0;O<C;O++)R[O]=arguments[O];return M=(a=(l=(0,H.default)(this,(x=h.__proto__||X()(h)).call.apply(x,[this].concat(R))),l),l.state={isLoading:!0,authority:[],routeKeys:[]},a),(0,H.default)(l,M)}return(0,T.default)(h,[{key:"componentWillMount",value:function(){I().isNull(localStorage.getItem("adminList_isUp"))&&safeLocalStorageSetItem("adminList_isUp",!0)}},{key:"componentDidMount",value:function(){$("html").addClass("AppAdmin"),this.init()}},{key:"componentWillReceiveProps",value:function(a){var l=a.match.params.projectId;l!==g.Z.projectId?(this.setState({isLoading:!0}),this.init()):g.Z.getParams()}},{key:"componentWillUnmount",value:function(){$("html").removeClass("AppAdmin")}},{key:"init",value:function(){var a=this;n.Z.init().then(function(l){a.setState({isLoading:!1,authority:l,routeKeys:a.getRouterKeys(l)})},function(l){a.setState({isLoading:!1,authority:I().isArray(l)?l:[]})})}},{key:"getRouterKeys",value:function(a){if(I().isArray(a)){var l=[];return a.map(function(M){l=l.concat(r[M]||[])}),l}}},{key:"renderHomeContent",value:function(a){var l=I().reduce(a,function(R,O){var D=O.subMenuList,w=D===void 0?[]:D;return R.concat.apply(R,(0,_.Z)(w.map(function(Y){return Y.routes})))},[]),M=JSON.parse(localStorage.getItem("adminList_isUp")),C=I().get(this.props,"match.params.projectId");return t.createElement(k.Z,{projectId:C},t.createElement("div",{className:"adminMainContent w100"},t.createElement("div",{className:"flexRow w100 mainContainerWrapper"},t.createElement(ce,{isExtend:M,menuList:a}),t.createElement("div",{id:"mainContainer",className:"Relative"},t.createElement(s.Z,null,l.map(function(R){var O=R.path,D=R.exact,w=R.component;return t.createElement(B.Z,{key:O,exact:D,path:O,component:S(w)})}))))))}},{key:"renderRoutes",value:function(){var a=this.state.routeKeys,l=I().reduce(u,function(M,C){var R=C.title,O=C.subMenuList,D=O===void 0?[]:O,w=C.key,Y=C.icon,ge={title:R,subMenuList:D.filter(function(Se){return a.includes(Se.key)}),key:w,icon:Y};return M.concat([ge])},[]);return t.createElement(s.Z,null,t.createElement(B.Z,{path:"/admin/mycharacter/:projectId",component:i}),t.createElement(B.Z,{path:"/admin/apply/:projectId/:roleId?",component:y}),t.createElement(B.Z,{path:"/admin/:routeType/:projectId"},this.renderHomeContent(l)))}},{key:"getCurrentAuth",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=a.filter(function(M){return location.href.toLocaleLowerCase().includes(M.toLocaleLowerCase())})||[];return!l.length}},{key:"render",value:function(){var a=this.state,l=a.authority,M=l===void 0?[]:l,C=a.isLoading,R=a.routeKeys,O=(0,ne.vo)(g.Z.projectId,!0),D=O.isSuperAdmin;if(C)return t.createElement(Q.Z,{className:"mTop10"});if(M.indexOf(L.NOT_MEMBER)>-1)return W;if(M.indexOf(L.HAS_PERMISSIONS)===-1&&M.indexOf(L.SHOW_MANAGER)>-1){if(location.href.indexOf("admin/mycharacter")===-1)(0,de.T8)("/admin/mycharacter/"+g.Z.projectId);else return this.renderRoutes();return null}if(M.indexOf(L.HAS_PERMISSIONS)===-1&&location.href.indexOf("admin/apply")===-1)(0,de.T8)("/admin/apply/"+g.Z.projectId);else if(location.href.indexOf("admin/index")>-1||D&&location.href.indexOf("admin/apply")>-1)(0,de.T8)("/admin/home/"+g.Z.projectId);else if(this.getCurrentAuth(R)&&!location.href.includes("admin/apply"))(0,de.T8)("/admin/"+R[0]+"/"+g.Z.projectId);else return this.renderRoutes();return null}}]),h}(t.PureComponent)},6121:(Ne,te,e)=>{e.d(te,{Z:()=>X});var Q=e(96486),k=e.n(Q),_=e(30539),j={};j.checkIsSuperAdmin=function(N){return _.Z.isSuperAdmin({projectId:N}).then(function(T){return j.isSuperAdmin=T,T})},j.getUnauditedCount=function(N){return _.Z.getUnauditedUserCount({projectId:N}).then(function(T){return T||0})},j.formatRoleAuth=function(N){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,H=N.permissionTypes,U=N.roleId&&N.roleId.toUpperCase()==="D552154A-BF26-403F-9783-DC4A5B268865",t=void 0,g=function(pe){return pe.typeId===1};T?t=k().remove(H,g)[0]:t=k().find(H,g);var n=void 0,s=void 0,B=void 0,V=void 0;t?k().each(t.subPermissions,function(Z){Z.permissionId===101&&(n=!0),Z.permissionId===102&&(s=!0),Z.permissionId===103&&(B=!0)}):j.isSuperAdmin||(V=!0),N.noAuth=V,N.addAuth=n,N.editAuth=s,N.deleteAuth=B,U?(N.isSuperAdmin=!0,N.auth={add:n||j.isSuperAdmin,edit:!1,delete:!1}):N.auth={add:n||j.isSuperAdmin,edit:j.isSuperAdmin,delete:j.isSuperAdmin}};const X=j},27494:(Ne,te,e)=>{e.d(te,{Z:()=>Pe});var Q=e(88239),k=e(88106),_=e(12424),j=e(46593),X=e.n(j),N=e(85105),T=e.n(N),H=e(99663),U=e(22600),t=e(49135),g=e(93196),n=e(67294),s=e(45697),B=e.n(s),V=e(70801),Z=e(3540),pe=e(54208),oe=e(30539),fe=e(6121),Ee=e(42723),he=e(93967),le=e.n(he),de=e(20845),ne=e(66215),me=e(96486),F=e.n(me),b,xe,I=(xe=b=function(ie){(0,g.default)(z,ie);function z(){return(0,H.default)(this,z),(0,t.default)(this,(z.__proto__||T()(z)).apply(this,arguments))}return(0,U.default)(z,[{key:"renderSubPermissions",value:function(P){var A=P.length,y=this.props,c=y.selectedPermissions,d=y.updateSelectedAuth,i=function(r){var u=r.isChild,f=r.noBorder,v=(0,Ee.Z)(r,["isChild","noBorder"]),S=v.permissionName,L=v.description,E=v.permissionId,W=v.typeId,p=!!c[W*100],o=!!c[E],h=function(a){if(a===!1){var l=v.parentId,M=F().find(P,function(R){return R.permissionId===l})||{};M.isTypeAdmin===!1&&d(!0,M)}else{var C=F().find(c,function(R){return R.parentId===E});if(C)return alert(_l("\u5B58\u5728\u5B50\u6743\u9650\u4F9D\u8D56\u8BE5\u6743\u9650"),3),!1}d(!a,v)};return n.createElement("tr",{className:le()({childPermission:u,permission:!u,noBorder:f}),key:E},n.createElement("td",{className:le()("Font13 pLeft25",{pLeft45:u})},_l(S)),n.createElement("td",{className:"Gray_9e"},_l(L)),n.createElement("td",null,n.createElement(de.Z,{className:"InlineBlock TxtMiddle",checked:o,disabled:p,onClick:h})))};return F().map(P,function(m,r){return m.isTypeAdmin?null:i((0,Q.default)({},m,{isChild:r>0,noBorder:A>1&&r!==A-1}))})}},{key:"renderPermissions",value:function(){var P=this,A=this.props,y=A.permissions.permissionTypes,c=A.selectedPermissions,d=A.updateSelectedAuth;return n.createElement(n.Fragment,null,F().map(y,function(i,m){if(i.typeId===1)return null;var r=F().groupBy(i.subPermissions,function(f){var v=f.permissionId;return String(v).slice(0,3)}),u=F().find(i.subPermissions,function(f){var v=f.isTypeAdmin;return v});return n.createElement(n.Fragment,{key:i.typeId},n.createElement("tr",null,n.createElement("td",{className:"pLeft25"},n.createElement("span",{className:"Font15"},_l(i.typeName))),n.createElement("td",u?{}:{colSpan:2},n.createElement("span",{className:"Gray_9e Font13"},i.typeId===9?_l("\u4EBA\u4E8B\u7BA1\u7406\u9700\u8981\u7528\u5230\u8D26\u6237\u7BA1\u7406\u5458\u7684\u90E8\u5206\u6743\u9650\uFF0C\u5C06\u9ED8\u8BA4\u52FE\u9009\u8D26\u6237\u7BA1\u7406\u5458\u6743\u9650"):_l(i.typeDescription))),u?n.createElement("td",{className:"TxtRight Gray_9e Font13"},n.createElement("span",{"data-tip":_l("\u62E5\u6709%0\u7684\u6240\u6709\u6743\u9650",i.typeName),className:"tip-top TxtMiddle Gray_9e mRight5"},n.createElement("span",{className:"icon-task-setting_promet Font16"})),n.createElement("span",{className:"Gray_9e Font13 TxtMiddle"},_l("\u6388\u6743\u4E3A%0\u7BA1\u7406\u5458",i.typeName)),n.createElement(ne.Z,{className:"mLeft20 TxtMiddle",checked:!!c[u.permissionId],onClick:function(v){d(!v,u),u.permissionId===900&&!v&&d(!0,F().find(y,function(S){return S.typeId===2}).subPermissions[0])}})):null),F().map(F().keys(r),function(f){return P.renderSubPermissions(r[f])}),m!==y.length-1?n.createElement("tr",null,n.createElement("td",{className:"placeholder",colSpan:"3"})):null)}))}},{key:"render",value:function(){var P=this.props.permissions.permissionTypes,A=this.props,y=A.updateSelectedAuth,c=A.grantPermission,d=A.selectedPermissions;return n.createElement(n.Fragment,null,n.createElement("div",{className:"clearfix mBottom15 mTop25"},n.createElement("span",{className:"Font15"},_l("\u5206\u914D\u6743\u9650")),n.createElement("div",{className:"Right Gray_9"},n.createElement("span",{"data-tip":_l("\u5F00\u542F\u540E\u8BE5\u89D2\u8272\u6210\u5458\u80FD\u5728\u4F01\u4E1A\u8D26\u6237\u89D2\u8272\u6743\u9650\u914D\u7F6E\u83DC\u5355\u6DFB\u52A0\u4ED6\u4EBA\u62E5\u6709\u76F8\u540C\u6743\u9650"),className:"tip-top TxtMiddle Gray_9e mRight5"},n.createElement("span",{className:"icon-task-setting_promet Font16"})),n.createElement("span",{className:"TxtMiddle"},_l("\u5141\u8BB8\u89D2\u8272\u6210\u5458\u6388\u4E88\u4ED6\u4EBA\u62E5\u6709\u76F8\u540C\u6743\u9650")),n.createElement(ne.Z,{checked:!!d[c.permissionId],className:"InlineBlock TxtMiddle mLeft20",onClick:function(m){y(!m,c)}}))),n.createElement("table",{className:"permissionList"},n.createElement("thead",{className:"Gray_9e"},n.createElement("tr",null,n.createElement("th",null,_l("\u6743\u9650")),n.createElement("th",null,_l("\u63CF\u8FF0")),n.createElement("th",{className:"pRight12"},_l("\u662F\u5426\u5F00\u542F\u6743\u9650")))),n.createElement("tbody",null,P&&P.length?this.renderPermissions():null)),P&&P.length===0?n.createElement("div",{className:"mTop20 mBottom20"},_l("\u6682\u65E0\u6743\u9650\u8BE6\u60C5")):null)}}]),z}(n.Component),b.propTypes={permissions:B().shape({permissionTypes:B().arrayOf(B().object)}),updateSelectedAuth:B().func},b.defaultProps={updateSelectedAuth:function(){},selectedPermissions:{}},xe);const ae=I;var ce,ve,se={EDIT:"EDIT",CREATE:"CREATE"},Pe=(ve=ce=function(ie){(0,g.default)(z,ie);function z(){(0,H.default)(this,z);var K=(0,t.default)(this,(z.__proto__||T()(z)).call(this));return K.state={isLoading:!0,roleName:"",permissions:null,rolePermissions:{},grantPermission:null},K.submit=K.submit.bind(K),K}return(0,U.default)(z,[{key:"componentWillMount",value:function(){this.fetchAuth()}},{key:"getGrantPermission",value:function(P){var A=F().find(P,function(c){return c.typeId===1}),y=F().find(A.subPermissions,function(c){return c.permissionId===101});this.setState({grantPermission:y})}},{key:"fetchAuth",value:function(){var P=this,A=this.props,y=A.type,c=A.projectId,d=A.roleId;return y===se.EDIT?X().all([oe.Z.getUserPermissions({projectId:c,roleId:d}),oe.Z.getRolePermisson({projectId:c,roleId:d})]).then(function(i){var m=(0,_.Z)(i,2),r=m[0],u=m[1];fe.Z.formatRoleAuth(u,!1),P.getGrantPermission(r);var f={};F().each(u.permissionTypes,function(v){F().each(v.subPermissions,function(S){f[S.permissionId]=S})}),P.setState({isLoading:!1,roleName:u.roleName,rolePermissions:f,permissions:{permissionTypes:r}})}):oe.Z.getUserPermissions({projectId:c,roleId:d}).then(function(i){var m={permissionTypes:i};P.getGrantPermission(i),fe.Z.formatRoleAuth(m,!1),P.setState(function(r){return{isLoading:!1,rolePermissions:(0,k.default)({},r.grantPermission.permissionId,r.grantPermission),permissions:m}})})}},{key:"submit",value:function(){var P=this.state,A=P.rolePermissions,y=P.roleName,c=this.props,d=c.projectId,i=c.roleId,m=c.type,r=c.onOk,u=F().keys(A);if($.trim(y)==="")return alert(_l("\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"),3),!1;if($.trim(y).length>30)return alert(_l("\u89D2\u8272\u540D\u79F0\u957F\u5EA6\u6700\u5927\u4E3A30"),3),!1;if(!u.length)return alert(_l("\u89D2\u8272\u6743\u9650\u4E0D\u80FD\u4E3A\u7A7A"),3),!1;oe.Z.editRole({projectId:d,roleId:m===se.CRETAE?void 0:i,roleName:$.trim(y),permissionIds:u}).then(function(f){r(f)})}},{key:"render",value:function(){var P=this,A=this.props,y=A.visible,c=A.type,d=A.onClose,i=this.state,m=i.isLoading,r=i.rolePermissions,u=i.permissions,f=i.grantPermission,v=i.roleName,S={className:se.CREATE?"createRoleDialog":"editRoleDialog",width:950,title:c===se.CREATE?_l("\u521B\u5EFA\u89D2\u8272\u6743\u9650"):_l("\u7F16\u8F91\u89D2\u8272\u6743\u9650"),visible:y,onOk:this.submit,onCancel:d};return n.createElement(V.Z,S,m?n.createElement(pe.Z,null):n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement(Z.Z,{placeholder:_l("\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"),className:"roleNameInput",value:v,onChange:function(E){P.setState({roleName:E})}})),n.createElement(ae,{selectedPermissions:r,permissions:u,grantPermission:f,updateSelectedAuth:function(E,W){E?P.setState(function(p){return{rolePermissions:(0,Q.default)({},p.rolePermissions,(0,k.default)({},W.permissionId,W))}}):P.setState(function(p){return{rolePermissions:F().omit(p.rolePermissions,W.permissionId)}})}})))}}]),z}(n.Component),ce.TYPES=se,ce.propTypes={type:B().oneOf(F().values(se)),roleId:B().string,projectId:B().string},ce.defaultProps={type:"create",onClose:function(){},onOk:function(){}},ve)},22626:(Ne,te,e)=>{e.d(te,{Z:()=>P});var Q=e(33867),k=e(46593),_=e.n(k),j=e(94942),X=e.n(j),N=e(36803),T=e(85105),H=e.n(T),U=e(99663),t=e(22600),g=e(49135),n=e(93196),s=e(67294),B=e(45697),V=e.n(B),Z=e(30539),pe=e(99924),oe=e(10929),fe=e(54208),Ee=e(86853),he=e(56171),le=e(70801),de=e(93967),ne=e.n(de),me=e(75809),F=e(36021),b=e(31261),xe=e(27494),I=e(96486),ae=e.n(I),ce=function(A){(0,n.default)(y,A);function y(){(0,U.default)(this,y);var c=(0,g.default)(this,(y.__proto__||H()(y)).call(this));return c.clickHandler=function(d,i){d.stopPropagation();var m=c.props,r=m.role,u=m.projectId,f=m.callback;if(r.noAuth)return function(){};var v=c,S=function(E){E?(alert(_l("\u64CD\u4F5C\u6210\u529F")),f()):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)};i==="addmember"?(0,me.Z)({sourceId:0,fromType:0,fromAdmin:!0,SelectUserSettings:{filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,projectId:u,inProject:!0,callback:function(E){var W=ae().map(E,function(p){return p.accountId});Z.Z.addUserToRole({projectId:u,roleId:r.roleId,accountIds:W}).then(S)}}}):i==="delete"?(c.setState({popupVisibleId:void 0}),le.Z.confirm({title:_l("\u60A8\u786E\u5B9A\u5220\u9664\u8BE5\u89D2\u8272\uFF1F"),onOk:function(){Z.Z.removeRole({projectId:u,roleId:r.roleId}).then(function(E){var W=E.message,p=E.deleteSuccess;p?alert(_l("\u64CD\u4F5C\u6210\u529F")):alert(W||_l("\u64CD\u4F5C\u5931\u8D25"),2)})}})):i==="applyrole"&&!c.state.hasClick&&Z.Z.applyRole({projectId:u,roleId:r.roleId}).then(function(L){L===1?(v.setState({hasClick:!0}),alert(_l("\u7533\u8BF7\u6210\u529F"))):L===-1?alert(_l("\u4E0D\u5141\u8BB8\u7533\u8BF7\u7BA1\u7406\u5458"),3):L===0&&alert(_l("\u7533\u8BF7\u5931\u8D25"),2)})},c.state={showEdit:!1,hasClick:!1},c}return(0,t.default)(y,[{key:"render",value:function(){var d=this,i=this.props,m=i.isHrVisible,r=i.role,u=i.projectId,f=i.isApply,v=i.entry,S=i.callback,L=this.state.popupVisibleId,E=r.auth||{},W=v==="myRole";return s.createElement("tr",{className:ne()("roleItem",{disabled:f}),onClick:function(){!f&&!W&&(0,F.T8)("/admin/sysroles/"+u+"/"+r.roleId)}},s.createElement("td",{className:"roleName"},r.roleName),s.createElement("td",{className:"roleCount"},r.userCount),s.createElement("td",{className:"roleAuth"},r.permissionTypes.length?ae().map(r.permissionTypes,function(p){var o=p.isAdmin,h=p.typeName,x=p.typeId;return s.createElement("span",{className:"mRight30",key:x},_l(h),s.createElement("span",{className:"Gray_9e mLeft5"},"(",o?_l("\u6240\u6709\u6743\u9650"):_l("\u90E8\u5206\u6743\u9650"),")"))}):s.createElement("span",{className:"Gray_9"},_l("\u6682\u65E0\u6743\u9650"))),f?s.createElement("td",{className:"roleOperation"},r.isJoined||r.noAuth?null:s.createElement("span",{onClick:function(o){return d.clickHandler(o,"applyrole")},className:ne()(this.state.hasClick?"Gray_bd":"ThemeColor3 adminHoverColor Hand")},_l("\u7533\u8BF7"))):s.createElement("td",{className:ne()("roleOperation",{ThemeColor3:!r.noAuth})},s.createElement("span",{className:"adminHoverColor",onClick:function(o){return d.clickHandler(o,"addmember")}},r.noAuth?"":_l("\u6DFB\u52A0\u6210\u5458")),m&&(E.edit||E.delete&&r.userCount===0)&&s.createElement(b.Z,{popupVisible:r.entityId===L,onPopupVisibleChange:function(o){return d.setState({popupVisibleId:o?r.entityId:void 0})},action:["click"],popupAlign:{offset:[-100,15],points:["tr","tl"],overflow:{adjustX:!0,adjustY:!0}},popup:s.createElement(Ee.Z,{style:{width:120}},s.createElement(he.Z,{onClick:function(o){o.stopPropagation(),d.setState({showEdit:!0,popupVisibleId:void 0})}},_l("\u7F16\u8F91\u89D2\u8272\u6743\u9650")),s.createElement(he.Z,{onClick:function(o){return d.clickHandler(o,"delete")}},_l("\u5220\u9664")))},s.createElement(Q.Z,{icon:"moreop",className:"Gray_9e Hand Font18 Hover_49 TxtMiddle",onClick:function(o){return o.stopPropagation()}})),this.state.showEdit?s.createElement(xe.Z,{type:xe.Z.TYPES.EDIT,visible:!0,roleId:r.roleId,projectId:u,onOk:function(o){o?(alert(_l("\u4FEE\u6539\u6210\u529F")),S(),d.setState({showEdit:!1})):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)},onClose:function(){d.setState({showEdit:!1})}}):null))}}]),y}(s.Component);ce.propTypes={role:V().shape({isHrVisible:V().bool,roleId:V().string,roleName:V().string,permissionTypes:V().arrayOf(V().object),userCount:V().number})};const ve=ce;var se=e(6121),Pe=e(15577),ie,z,K=(z=ie=function(A){(0,n.default)(y,A);function y(c){var d=this;(0,U.default)(this,y);var i=(0,g.default)(this,(y.__proto__||H()(y)).call(this));return i.getCanApplyRoles=(0,N.Z)(X().mark(function m(){var r,u,f,v,S,L,E;return X().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(r=i.props.projectId,u=i.state.pageSize,f=(0,Pe.vo)(r),v=f.isSuperAdmin,!v){p.next=5;break}return p.abrupt("return");case 5:return p.next=7,pe.Z.getAllowApplyManageRole({projectId:r});case 7:if(S=p.sent,S){p.next=10;break}return p.abrupt("return");case 10:return p.next=12,Z.Z.getSummaryRole({projectId:r,isJoined:!1,pageIndex:1,pageSize:u});case 12:L=p.sent,E=L.listSumaryRole,i.setState({applyList:E.filter(function(o){return!o.isJoined})});case 15:case"end":return p.stop()}},m,d)})),i.renderApplyList=function(){var m=i.state.applyList,r=i.props,u=r.projectId,f=r.entry,v=(0,Pe.vo)(u,!0),S=v.isHrVisible;return ae().map(m,function(L){return s.createElement(ve,{isHrVisible:S,isApply:!0,role:L,projectId:u,key:L.roleId,entry:f})})},i.state={isLoading:!1,pageIndex:1,pageSize:500,totalCount:null,list:null,applyList:[]},i.fetchRoles=i.fetchRoles.bind(i),i}return(0,t.default)(y,[{key:"componentDidMount",value:function(){var d=this.props.manualRef;d&&d(this)}},{key:"componentWillMount",value:function(){this.fetchRoles(),this.getCanApplyRoles()}},{key:"fetchRoles",value:function(d){var i=this,m=this.props,r=m.projectId,u=m.entry,f=this.state,v=f.isLoading,S=f.pageIndex,L=f.pageSize;if(v)return!1;u!=="apply"&&(this.setState({isLoading:!0}),this.promise=Z.Z.getSummaryRole({projectId:r,isJoined:!0,pageIndex:d?1:S,pageSize:L}),this.promise.then(function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},W=E.listSumaryRole,p=E.allCount;if(W)i.setState(function(o){return{pageIndex:d?1:S,isLoading:!1,totalCount:p,list:ae().map(W,function(h){return se.Z.formatRoleAuth(h),h})}});else return _().reject()}).catch(function(E){i.setState({isLoading:!1}),alert(E.errorMessage||_l("\u83B7\u53D6\u5217\u8868\u5931\u8D25"),2)}))}},{key:"renderList",value:function(){var d=this,i=this.state.list,m=this.props,r=m.projectId,u=m.entry,f=(0,Pe.vo)(r,!0),v=f.isHrVisible;return ae().map(i,function(S){return s.createElement(ve,{isHrVisible:v,role:S,projectId:r,callback:d.fetchRoles,key:S.roleId,entry:u})})}},{key:"render",value:function(){var d=this,i=this.props.entry,m=this.state,r=m.isLoading,u=m.list,f=m.totalCount,v=m.pageSize,S=m.pageIndex,L=m.applyList,E=m.showApplyRole;return s.createElement("div",{className:"roleAuthTable"},s.createElement("table",{className:"w100 verticalTop"},s.createElement("thead",null,s.createElement("tr",{className:"roleListTitle"},s.createElement("th",{className:"roleName"},_l("\u89D2\u8272\u540D\u79F0")),s.createElement("th",{className:"roleCount"},_l("\u4EBA\u6570")),s.createElement("th",{className:"roleAuth"},_l("\u6743\u9650")),s.createElement("th",{className:"roleOperation"},_l("\u64CD\u4F5C"))))),s.createElement("div",{className:"roleList"},s.createElement("table",{className:"w100"},s.createElement("tbody",null,r?s.createElement("tr",null,s.createElement("td",{colSpan:"4"},s.createElement(fe.Z,null))):s.createElement(s.Fragment,null,this.renderList(),ae().isEmpty(L)?"":i==="apply"?this.renderApplyList():s.createElement(s.Fragment,null,s.createElement("div",{className:"ThemeColor mTop16 InlineBlock Hand",onClick:function(){return d.setState({showApplyRole:!E})}},_l("\u7533\u8BF7\u89D2\u8272\u6743\u9650"),s.createElement(Q.Z,{className:"mLeft6 Font16",icon:E?"arrow-up":"arrow-down"})),E&&this.renderApplyList()))))),u&&f>v?s.createElement(oe.Z,{total:f,pageIndex:S,pageSize:v,onChange:function(p){return d.setState({pageIndex:p},d.fetchRoles)}}):null)}}]),y}(s.Component),ie.propTypes={projectId:V().string.isRequired,manualRef:V().func},z);const P=K}}]);
