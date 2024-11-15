(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[6705],{85902:(Ce,Vn,w)=>{"use strict";w.r(Vn),w.d(Vn,{default:()=>_d});var He={};w.r(He),w.d(He,{changePageIndex:()=>vt,getControls:()=>ba,getCount:()=>Ia,getList:()=>Un,getPortalRoleList:()=>ka,handleChangeSort:()=>Za,setBaseInfo:()=>Jn,setControls:()=>ht,setControlsSetting:()=>Aa,setCount:()=>Xn,setDefaultFastFilters:()=>La,setDefaultRole:()=>Na,setFastFilters:()=>Ra,setFastFiltersData:()=>xt,setFilter:()=>Ba,setHideIds:()=>Ta,setKeyWords:()=>Da,setList:()=>Bn,setPortalRoleList:()=>ya,setQuickTag:()=>Oa,setRoleId:()=>Ct,setSortControls:()=>Kn,setTelFilters:()=>Pa,updateListByRoleid:()=>Sa,updateListByStatus:()=>wa});var ca=w(93567),v=w(88239),V=w(33867),wn=w(66946),Ie=w(26581),kn=w(6100),qe=w(54208),he=w(70801),pa=w(85105),Se=w.n(pa),we=w(99663),ke=w(22600),ge=w(49135),ye=w(93196),yn=w(66215),Q=w(86735),e=w(67294),Oe=w(96841),Me=w(74127),ua=w(49611),fa=w.n(ua),ma=w(93967),M=w.n(ma),Nn=w(31261),W=w(5017),Tn=w(91088),gt=w(60876),We=w(36021),ga=w(9527),ha=w.n(ga),va=w(24043),xa=w.n(va),Ea=w(63239),Yn=w.n(Ea),ue=w(35989),Ca=100,ba=function(a,d){return function(n,t){n(Jn({appId:a,projectId:d})),ue.Z.getUserTemple({appId:a}).then(function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];n(ht(r))})}},Ia=function(a){return function(d,n){ue.Z.getExAccountCategoryCount({appId:a}).then(function(t){var r=t.commonCount,l=r===void 0?0:r,s=t.unApproveCount,c=s===void 0?0:s,p=t.roleMemberStatistics;d({type:"UPDATE_COMMONCOUNT",data:l}),d({type:"UPDATE_UNAPPROVECOUNT",data:c}),d({type:"UPDATE_PORTAL_USER_COUNT",data:p})})}},Jn=function(a){return function(d,n){var t=n(),r=t.portal,l=r===void 0?{}:r,s=l.baseInfo,c=s===void 0?{}:s;d({type:"UPDATE_BASE",data:(0,v.default)({},c,a)})}},ht=function(a){return function(d,n){d({type:"UPDATE_CONTROLS",data:a})}},Aa=function(a){return function(d,n){d({type:"UPDATE_CONTROLS_SETTING",data:a})}},Bn=function(a){return function(d,n){d({type:"UPDATE_LIST",data:a})}},Xn=function(a){return function(d,n){d({type:"UPDATE_LIST_COUNT",data:a})}},Sa=function(a,d){var n=a.roleId,t=n===void 0?"":n,r=a.rowIds,l=r===void 0?[]:r;return function(s,c){var p=c(),i=p.portal,u=i===void 0?{}:i,f=u.filters,x=f===void 0?[]:f,E=u.keyWords,m=u.pageIndex,b=u.fastFilters,A=b===void 0?[]:b,k=u.baseInfo,S=k===void 0?{}:k,h=u.list,g=S.appId,I=g===void 0?"":g;ue.Z.editExAccountsRole({appId:I,newRoleId:t,rowIds:l}).then(function(C){C?(s(Bn(h.map(function(N){return l.includes(N.rowid)?(0,v.default)({},N,{portal_role:Yn()([t])}):N}))),d&&d()):alert(_l("\u4FEE\u6539\u5931\u8D25\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)})}},wa=function(a){var d=a.newState,n=a.rowIds,t=a.cb;return function(r,l){var s=l(),c=s.portal,p=c===void 0?{}:c,i=p.filters,u=i===void 0?[]:i,f=p.keyWords,x=p.pageIndex,E=p.fastFilters,m=E===void 0?[]:E,b=p.baseInfo,A=b===void 0?{}:b,k=p.list,S=A.appId,h=S===void 0?"":S;ue.Z.editExAccountState({appId:h,newState:d,rowIds:n}).then(function(g){g?(r(Bn(k.map(function(I){return n.includes(I.rowid)?(0,v.default)({},I,{portal_status:Yn()([""+d])}):I}))),t&&t()):alert(_l("\u4FEE\u6539\u5931\u8D25\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)})}},vt=function(a){return function(d,n){d({type:"UPDATE_INDEX",data:a}),a===1&&(d(Bn([])),d(Xn(0)))}},ka=function(a){return function(d,n){d({type:"UPDATE_LOADING",data:!0}),ue.Z.getExRoles({appId:a}).then(function(t){d({type:"UPDATE_ROLELIST",data:t}),d({type:"UPDATE_LOADING",data:!1})})}},ya=function(a){return function(d,n){d({type:"UPDATE_ROLELIST",data:a})}},Na=function(a){return function(d,n){d({type:"UPDATE_DEFAULTROLE",data:a})}},Ta=function(a){return function(d,n){d({type:"UPDATE_HIDEIDS",data:a})}},Ba=function(a){return function(d,n){d({type:"UPDATE_FILTERS",data:a})}},Ra=function(a){return function(d,n){d(xt(a)),d(vt(1)),d(Un())}},xt=function(a){return function(d,n){if(!a)d({type:"UPDATE_FASTFILTERS",data:[]});else{var t=n(),r=t.portal,l=r===void 0?{}:r,s=l.fastFilters,c=s===void 0?[]:s,p=c.slice(),i=a.value||(a.values||[])[0];i?c.find(function(u){return u.controlId===a.controlId})?p=c.map(function(u){return u.controlId!==a.controlId?u:(0,v.default)({},a,{controlId:a.controlId})}):p.push((0,v.default)({},a,{controlId:a.controlId})):p=p.filter(function(u){return u.controlId!==a.controlId}),d({type:"UPDATE_FASTFILTERS",data:p})}}},La=function(){return function(a,d){a({type:"UPDATE_FASTFILTERS",data:[]})}},Kn=function(a,d){return function(n,t){n({type:"UPDATE_SORTCONTROLS",data:a}),d&&d()}},Da=function(a){return function(d,n){d({type:"UPDATE_KEYWORDS",data:a})}},Pa=function(a){return function(d,n){d({type:"UPDATE_TELFILTERS",data:a})}},Za=function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(n,t){var r=a.field,l=a.column,s=a.order;n(s?Kn([{controlId:r,datatype:l.type,isAsc:s==="ascend"}],function(){n(Un(d))}):Kn([],function(){n(Un(d))}))}},Fa=function(a){if(!a)return"";var d=a.split(/[(\r\n)\r\n]+/);return d.forEach(function(n,t){n||d.splice(t,1)}),xa()(new(ha())(d))},Et=null,Un=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,d=arguments[1];return function(n,t){n({type:"UPDATE_LOADING",data:!0});var r=t(),l=r.portal,s=l===void 0?{}:l,c=s.filters,p=c===void 0?[]:c,i=s.keyWords,u=s.pageIndex,f=s.fastFilters,x=f===void 0?[]:f,E=s.baseInfo,m=E===void 0?{}:E,b=s.sortControls,A=b===void 0?[]:b,k=s.telFilters,S=k===void 0?"":k,h=s.list,g=h===void 0?[]:h,I=m.appId,C=I===void 0?"":I;Et=ue.Z.getFilterRows({pageSize:Ca,pageIndex:u,keyWords:i,filterControls:p,fastFilters:a===3?[]:S?x.concat({controlId:"portal_mobile",dataType:3,dynamicSource:[],filterType:1,spliceType:1,values:Fa(S)}):x,appId:C,PotralStatus:a,sortControls:A}),Et.then(function(N){n(Jn((0,v.default)({},m,N.worksheet))),n(Bn(u>1?g.concat(N.data):N.data)),n(Xn(N.count)),n({type:"UPDATE_LOADING",data:!1}),d&&d()})}},Oa=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(d,n){d({type:"UPDATE_QUICKTAG",data:a}),d(Ct(a.roleId||"all"))}},Ct=function(a){return function(d,n){d({type:"UPDATE_DEFAULT_ROLEID",data:a})}},Rn=w(70973),Ma=w(60866),ze=w(25471),Ua=w(87506),bt=w.n(Ua),$d=w(6538),It=w(14321),mn=w(14338),me=w(20845),ec=w(34279),ln=w(64749),be=w(88106),B=w(12424),qn=w(93002),Be=w(49365),Ha=w(56493),Wa=(0,Q.Z)([`
    .showTool {
    }
  `],[`
    .showTool {
    }
  `]);function Qa(o){var a=o.onChange,d=o.setShow,n=W.ZP.div(Wa);return e.createElement(he.Z,{title:o.type===0?_l("\u7528\u6237\u534F\u8BAE"):_l("\u9690\u79C1\u653F\u7B56"),bodyClass:"EditAgreementOrPrivacy",width:800,onCancel:d,footer:"",visible:o.show},e.createElement(Ha.Z,{minHeight:600,showTool:!0,className:"mdEditorContent",data:o.data||"",onActualSave:function(r){return a(r)}}))}var Ga=w(92518),j=w(65712),_a=w(96486),D=w.n(_a),At=w(9958),za=w(30381),Cn=w.n(za),ja=(0,Q.Z)([`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  .setCheckbox {
    width: 130px;
  }
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
  }
  .LineHeight18 {
    line-height: 18px;
  }
  .pageTitle {
    width: 592px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    padding: 0 14px;
    &:hover {
      border: 1px solid #bdbdbd;
    }
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .urlH,
  .urlEnd {
    padding: 0 20px;
    height: 36px;
    background: #f5f5f5;
    border-radius: 3px 0px 0px 3px;
    line-height: 36px;
    box-sizing: border-box;
    vertical-align: middle;
    &.url {
      border-radius: 3px;
    }
  }
  .urlEnd {
    border-radius: 0px 3px 3px 0px;
  }
  input.domainName {
    width: 200px;
    height: 36px;
    padding: 0 12px;
    line-height: 36px;
    background: #ffffff;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    vertical-align: middle;
    border-left: 0;
    border-right: 0;
  }
  .noWX,
  .WX {
    min-width: 299px;
    padding: 10px 16px;
    background: #f8f8f8;
    border-radius: 6px;
    a {
      color: #2196f3;
    }
    &.WX {
      a {
        color: green;
      }
    }
  }
  .exAccountSendCon {
    width: 100%;
    height: 36px;
    background: #f5f5f5;
    border-radius: 3px;
    border: 1px solid #dddddd;
    padding: 0 16px;
    line-height: 36px;
    .editFlow {
      color: #2196f3;
    }
  }
  .rangePicker {
    width: 420px;
    margin-left: 44px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .cardSelect {
    font-size: 12px !important;
    .ant-select-selection-item-remove:hover {
      color: #2196f3 !important;
    }
  }
`],[`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  .setCheckbox {
    width: 130px;
  }
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
  }
  .LineHeight18 {
    line-height: 18px;
  }
  .pageTitle {
    width: 592px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    padding: 0 14px;
    &:hover {
      border: 1px solid #bdbdbd;
    }
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .urlH,
  .urlEnd {
    padding: 0 20px;
    height: 36px;
    background: #f5f5f5;
    border-radius: 3px 0px 0px 3px;
    line-height: 36px;
    box-sizing: border-box;
    vertical-align: middle;
    &.url {
      border-radius: 3px;
    }
  }
  .urlEnd {
    border-radius: 0px 3px 3px 0px;
  }
  input.domainName {
    width: 200px;
    height: 36px;
    padding: 0 12px;
    line-height: 36px;
    background: #ffffff;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    vertical-align: middle;
    border-left: 0;
    border-right: 0;
  }
  .noWX,
  .WX {
    min-width: 299px;
    padding: 10px 16px;
    background: #f8f8f8;
    border-radius: 6px;
    a {
      color: #2196f3;
    }
    &.WX {
      a {
        color: green;
      }
    }
  }
  .exAccountSendCon {
    width: 100%;
    height: 36px;
    background: #f5f5f5;
    border-radius: 3px;
    border: 1px solid #dddddd;
    padding: 0 16px;
    line-height: 36px;
    .editFlow {
      color: #2196f3;
    }
  }
  .rangePicker {
    width: 420px;
    margin-left: 44px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .cardSelect {
    font-size: 12px !important;
    .ant-select-selection-item-remove:hover {
      color: #2196f3 !important;
    }
  }
`]),Va=(0,Q.Z)([`
  display: inline-block;
  .switchText {
    line-height: 24px;
  }
  .icon {
    vertical-align: middle;
    &-ic_toggle_on {
      color: #00c345;
    }
    &-ic_toggle_off {
      color: #bdbdbd;
    }
  }
`],[`
  display: inline-block;
  .switchText {
    line-height: 24px;
  }
  .icon {
    vertical-align: middle;
    &-ic_toggle_on {
      color: #00c345;
    }
    &-ic_toggle_off {
      color: #bdbdbd;
    }
  }
`]),Ya=W.ZP.div(ja),an=W.ZP.div(Va),Ja=[_l("\u53EF\u89C1\u5168\u90E8\u8BA8\u8BBA"),_l("\u4E0D\u53EF\u89C1\u5185\u90E8\u8BA8\u8BBA")],Xa=[_l("\u4EFB\u4F55\u4EBA"),_l("\u901A\u8FC7\u5BA1\u6838\u7684\u7528\u6237"),_l("\u4EC5\u5B9A\u5411\u9080\u8BF7\u7684\u7528\u6237")],Hn=null;function Ka(o){var a=o.portalSet,d=a===void 0?{}:a,n=o.onChangePortalSet,t=o.projectId,r=o.appId,l=o.portal,s=l===void 0?{}:l,c=(0,e.useState)({}),p=(0,B.Z)(c,2),i=p[0],u=p[1],f=i.noticeScope,x=f===void 0?{}:f,E=i.isFrontDomain,m=(0,e.useState)(d.epDiscussWorkFlow||{}),b=(0,B.Z)(m,2),A=b[0],k=b[1],S=(0,e.useState)(d.isWXExist),h=(0,B.Z)(S,2),g=h[0],I=h[1],C=(0,e.useState)(i.allowUserType||3),N=(0,B.Z)(C,2),T=N[0],R=N[1],y=(0,e.useState)(x.admin||!1),Z=(0,B.Z)(y,2),O=Z[0],U=Z[1],G=(0,e.useState)(x.exAccountSmsNotice||!1),H=(0,B.Z)(G,2),Y=H[0],J=H[1],le=(0,e.useState)(d.authorizerInfo||{}),q=(0,B.Z)(le,2),F=q[0],oe=q[1],xe=(0,e.useState)(i.customizeName),Xe=(0,B.Z)(xe,2),Ne=Xe[0],te=Xe[1],ee=(0,qn.Z)({loading:!0,type:null,show:!1,showWorkflowDialog:!1}),ce=(0,B.Z)(ee,2),fe=ce[0],Ue=fe.type,Fe=fe.show,$e=fe.showWorkflowDialog,rn=fe.loading,Ge=ce[1],en=(0,e.useState)([]),sn=(0,B.Z)(en,2),Ae=sn[0],pe=sn[1],Re=(0,e.useState)([]),Ke=(0,B.Z)(Re,2),xn=Ke[0],pn=Ke[1],dn=(0,e.useState)([]),un=(0,B.Z)(dn,2),ve=un[0],de=un[1];(0,e.useEffect)(function(){var L=o.portalSet,P=L===void 0?{}:L,X=P.portalSetModel,K=X===void 0?{}:X,ne=P.epDiscussWorkFlow,ae=ne===void 0?{}:ne;u(K),k(ae)},[o]),(0,e.useEffect)(function(){var L=d.portalSetModel,P=L===void 0?{}:L,X=P.noticeScope,K=X===void 0?{}:X;R(P.allowUserType||3),U(K.admin||!1),J(K.exAccountSmsNotice||!1),te(P.customizeName);var ne=(s.controls||[]).filter(function(ae){return!ae.controlId.includes("_")||["portal_mobile","portal_email","portal_role"].includes(ae.controlId)}).map(function(ae){return{label:ae.controlName,value:ae.controlId}});pe(ne),pn((P.externalControls||[]).filter(function(ae){return ne.find(function(Ee){return Ee.value===ae})})),de((P.internalControls||[]).filter(function(ae){return ne.find(function(Ee){return Ee.value===ae})}))},[D().get(o,["portalSet","portalSetModel"])]),(0,e.useEffect)(function(){D().get(o,["portalSet","portalSetModel","loginMode","weChat"])&&!g&&!F.appId?Be.Z.getWeiXinBindingInfo({appId:o.appId}).then(function(L){I(L&&L.length>0),oe(L&&L.length>0?L[0]:{}),Ge({loading:!1}),n({authorizerInfo:(0,v.default)({},F,L&&L.length>0?L[0]:{})},!1)}):Ge({loading:!1})},[D().get(o,["portalSet","portalSetModel","loginMode","weChat"])]);var De=function(P){Hn&&Hn.abort(),Hn=ue.Z.createEPDiscussWorkFlow({appId:r}),Hn.then(function(X){var K=o.portalSet,ne=K===void 0?{}:K,ae=ne.portalSetModel,Ee=ae===void 0?{}:ae,nn=Ee.noticeScope,tn=nn===void 0?{}:nn;n({portalSetModel:(0,v.default)({},Ee,{noticeScope:(0,v.default)({},tn,{discussionNotice:!0})}),epDiscussWorkFlow:X}),P&&P(X)})},Pe=function(P,X,K,ne,ae){var Ee=o.portalSet,nn=Ee===void 0?{}:Ee,tn=nn.portalSetModel,cn=tn===void 0?{}:tn,on=0;ne.map(function(En){En.key===X?(cn[K]||{})[En.key]&&(on=on+1):(cn[K]||{})[En.key]||(on=on+1)}),n({portalSetModel:(0,v.default)({},cn,(0,be.default)({},K,(0,v.default)({},cn[K]||{},(0,be.default)({},X,on>=ne.length?!P:P))))}),on>=ne.length&&ae()},ie=function(){return e.createElement(e.Fragment,null,Ae.filter(function(P){return P.value.includes("_")}).map(function(P){return e.createElement(ln.default.Option,{value:P.value,label:P.label},P.label)}),Ae.filter(function(P){return!P.value.includes("_")}).map(function(P,X){return e.createElement(ln.default.Option,{value:P.value,label:P.label,className:M()({BorderTopGrayC:X===0})},P.label)}))};return e.createElement(Ya,null,e.createElement("div",{className:"content"},e.createElement("h6",{className:"Font16 Gray Bold mBottom0"},_l("\u95E8\u6237\u540D\u79F0")),e.createElement("input",{type:"text",className:"pageTitle mTop6",placeholder:_l("\u8BF7\u8F93\u5165"),value:Ne,onFocus:function(){},onBlur:function(P){var X=o.portalSet,K=X===void 0?{}:X,ne=K.portalSetModel,ae=ne===void 0?{}:ne;if(n({portalSetModel:(0,v.default)({},ae,{customizeName:P.target.value})}),!P.target.value)return alert(_l("\u8BF7\u8F93\u5165\u95E8\u6237\u540D\u79F0"),3)},onChange:function(P){te(P.target.value)}}),e.createElement("h6",{className:M()("Font16 Gray Bold mBottom0 mTop24",{mTop24:E})},_l("\u6CE8\u518C\u65B9\u5F0F")),e.createElement("div",{className:""},j.uw.map(function(L){var P=o.portalSet,X=P===void 0?{}:P,K=X.portalSetModel,ne=K===void 0?{}:K,ae=ne.registerMode,Ee=ae===void 0?{}:ae;return e.createElement(me.Z,{className:"mTop16 InlineBlock mRight60 setCheckbox",text:L.txt,checked:Ee[L.key],onClick:function(tn){Ee[L.key]&&alert(_l("\u53D6\u6D88\u624B\u673A\u53F7/\u90AE\u7BB1\u6CE8\u518C\u540E\uFF0C\u5916\u90E8\u7528\u6237\u5C06\u4E0D\u80FD\u4F7F\u7528\u539F\u8D26\u53F7\u767B\u5F55\uFF0C\u8BF7\u60A8\u8C28\u614E\u914D\u7F6E"),3),Pe(!Ee[L.key],L.key,"registerMode",j.uw,function(){alert(_l("\u81F3\u5C11\u9009\u62E9\u4E00\u79CD\u6CE8\u518C\u65B9\u5F0F"),3)})}})})),e.createElement("h6",{className:M()("Font16 Gray Bold mBottom0 mTop24",{mTop24:E})},_l("\u767B\u5F55\u65B9\u5F0F")),e.createElement("div",{className:""},j.EK.map(function(L,P){var X=o.portalSet,K=X===void 0?{}:X,ne=K.portalSetModel,ae=ne===void 0?{}:ne,Ee=ae.loginMode,nn=Ee===void 0?{}:Ee;if(!(L.key==="weChat"&&md.global.SysSettings.hideWeixin))return e.createElement(me.Z,{className:"mTop16 InlineBlock mRight60 setCheckbox",text:L.txt,checked:nn[L.key],onClick:function(cn){Pe(!nn[L.key],L.key,"loginMode",j.EK,function(){alert(_l("\u81F3\u5C11\u9009\u62E9\u4E00\u79CD\u767B\u5F55\u65B9\u5F0F"),3)})}})}),e.createElement("br",null),D().get(o,["portalSet","portalSetModel","loginMode","weChat"])&&!rn&&e.createElement("div",{className:M()(" Gray_9e mTop4 InlineBlock",{noWX:!g,WX:!!g})},g?e.createElement(e.Fragment,null,_l("\u5B98\u65B9\u8BA4\u8BC1\u670D\u52A1\u53F7"),e.createElement("a",{className:"mLeft5"},F.nickName)):e.createElement(e.Fragment,null,_l("\u6682\u672A\u7ED1\u5B9A\u516C\u4F17\u53F7\uFF0C\u8BF7\u524D\u5F80"),e.createElement("a",{className:"Hand mLeft5 mRight5 InlineBlock",href:"/admin/weixin/"+t,target:"_blank"},_l("\u7EC4\u7EC7\u7BA1\u7406")),_l("\u6DFB\u52A0\u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7"))),e.createElement("p",{className:"Font12 Gray_9e mTop4 LineHeight18"},!D().get(o,["portalSet","portalSetModel","loginMode","weChat"])&&!md.global.SysSettings.hideWeixin&&e.createElement("span",null,_l("\u53EA\u52FE\u9009\u5FAE\u4FE1\u767B\u5F55\u540E\u9996\u6B21\u626B\u7801\u540E\u9700\u8981\u8F93\u5165\u624B\u673A\u53F7\u4E0E\u5FAE\u4FE1\u7ED1\u5B9A\uFF0C\u540E\u7EED\u53EF\u5355\u72EC\u5FAE\u4FE1\u626B\u7801\u5FEB\u901F\u767B\u5F55\u3002"),e.createElement("br",null)),md.global.Config.IsPlatformLocal?_l("\u9A8C\u8BC1\u7801\u6BCF\u67610.05\u5143\uFF0C\u81EA\u52A8\u4ECE\u4F01\u4E1A\u8D26\u6237\u4F59\u989D\u6263\u8D39\u3002\u4E3A\u4FDD\u8BC1\u4E1A\u52A1\u4E0D\u53D7\u5F71\u54CD\uFF0C\u8BF7\u4FDD\u6301\u4F01\u4E1A\u8D26\u6237\u4F59\u989D\u5145\u8DB3\u3002"):"")),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u5141\u8BB8\u8BBF\u95EE\u7684\u7528\u6237")),e.createElement("div",{className:"mTop16"},Xa.map(function(L,P){return e.createElement(mn.Z,{className:"",text:L,checked:T===(P+1)*3,onClick:function(){var K=o.portalSet,ne=K===void 0?{}:K,ae=ne.portalSetModel,Ee=ae===void 0?{}:ae;n({portalSetModel:(0,v.default)({},Ee,{allowUserType:(P+1)*3})})}})})),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u767B\u5F55\u8BBE\u7F6E")),e.createElement("div",{className:"mTop12"},e.createElement(an,null,e.createElement(V.Z,{icon:i.termsAndAgreementEnable?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand TxtBottom",onClick:function(){n({portalSetModel:(0,v.default)({},i,{termsAndAgreementEnable:!i.termsAndAgreementEnable})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u767B\u5F55\u65F6\u9700\u540C\u610F\u7528\u6237\u534F\u8BAE\u548C\u9690\u79C1\u6761\u6B3E"))),e.createElement("div",{style:{"margin-left":"44px"}},!!i.termsAndAgreementEnable&&e.createElement(e.Fragment,null,e.createElement("p",{className:"Gray_9e LineHeight18 mBottom8"},_l("\u5E73\u53F0\u5DF2\u9884\u7F6E\u4E86\u901A\u7528\u534F\u8BAE\u5185\u5BB9\uFF08\u65E0\u516C\u53F8\u4E3B\u4F53\uFF09\uFF0C\u56E0\u5404\u95E8\u6237\u7684\u5177\u4F53\u4E1A\u52A1\u4E0D\u540C\u6536\u96C6\u7684\u7528\u6237\u4FE1\u606F\u4E0D\u540C\uFF0C\u8BF7\u60A8\u52A1\u5FC5\u6839\u636E\u516C\u53F8\u5B9E\u9645\u4E1A\u52A1\u91CD\u65B0\u4E0A\u4F20\u7B26\u5408\u89C4\u5B9A\u7684\u534F\u8BAE\u5185\u5BB9")),e.createElement("div",{className:"bold mTop6 LineHeight24"},_l("\u8BBE\u7F6E"),e.createElement("span",{className:"ThemeColor3 Hand mRight10 mLeft10",onClick:function(){Ge({type:0,show:!0})}},_l("\u7528\u6237\u534F\u8BAE")),_l("\u548C"),e.createElement("span",{className:"ThemeColor3 Hand mLeft10",onClick:function(){Ge({type:1,show:!0})}},_l("\u9690\u79C1\u653F\u7B56")))))),!md.global.SysSettings.hideWeixin&&e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:i.subscribeWXOfficial?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){var P={subscribeWXOfficial:!i.subscribeWXOfficial};n({portalSetModel:(0,v.default)({},i,P)})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u901A\u8FC7\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u65F6\uFF0C\u9700\u5148\u5173\u6CE8\u516C\u4F17\u53F7")))),e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:D().get(i,"registerInfo.enable")?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){var P=(0,v.default)({},D().get(i,"registerInfo"),{enable:!D().get(i,"registerInfo.enable")});n({portalSetModel:(0,v.default)({},i,{registerInfo:P})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u5916\u90E8\u7528\u6237\u6CE8\u518C\u5F00\u59CB/\u505C\u6B62\u65F6\u95F4"))),D().get(i,"registerInfo.enable")&&e.createElement("div",{className:"rangePicker flexRow alignItemsCenter"},e.createElement(It.default,{showTime:!0,className:"flex Hand",locale:At.Z,bordered:!1,placeholder:_l("\u5F00\u59CB\u65F6\u95F4"),value:!D().get(i,"registerInfo.startTime")||D().get(i,"registerInfo.startTime").substr(0,4)==="0001"?null:Cn()(D().get(i,"registerInfo.startTime")),onChange:function(P){if(D().get(i,"registerInfo.endTime")&&Cn()(D().get(i,"registerInfo.endTime")).isBefore(P))return alert(_l("\u7ED3\u675F\u65F6\u95F4\u4E0D\u80FD\u65E9\u4E8E\u5F00\u59CB\u65F6\u95F4"),3);var X=(0,v.default)({},D().get(i,"registerInfo"),{startTime:P?Cn()(P).format("YYYY-MM-DD HH:mm:ss"):""});n({portalSetModel:(0,v.default)({},i,{registerInfo:X})})}}),e.createElement("span",{className:"pLeft5 pRight5 Gray_d"},"\u2014"),e.createElement(It.default,{showTime:!0,locale:At.Z,className:"flex Hand",bordered:!1,placeholder:_l("\u7ED3\u675F\u65F6\u95F4"),value:!D().get(i,"registerInfo.endTime")||D().get(i,"registerInfo.endTime").substr(0,4)==="0001"?null:Cn()(D().get(i,"registerInfo.endTime")),onChange:function(P){if(D().get(i,"registerInfo.startTime")&&Cn()(P).isBefore(D().get(i,"registerInfo.startTime")))return alert(_l("\u7ED3\u675F\u65F6\u95F4\u4E0D\u80FD\u65E9\u4E8E\u5F00\u59CB\u65F6\u95F4"),3);var X=(0,v.default)({},D().get(i,"registerInfo"),{endTime:P?Cn()(P).format("YYYY-MM-DD HH:mm:ss"):""});n({portalSetModel:(0,v.default)({},i,{registerInfo:X})})}}))),e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:i.twoAuthenticationEnabled?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){var P={twoAuthenticationEnabled:!i.twoAuthenticationEnabled};n({portalSetModel:(0,v.default)({},i,P)})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u4E24\u6B65\u9A8C\u8BC1"))),i.twoAuthenticationEnabled&&e.createElement("div",{style:{"margin-left":"44px"},className:"Gray_9e"},_l("\u5916\u90E8\u7528\u6237\u901A\u8FC7\u8D26\u53F7\u5BC6\u7801\u6216\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\uFF0C\u9700\u8981\u989D\u5916\u8FDB\u884C\u9A8C\u8BC1\u7801\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u624D\u80FD\u6210\u529F\u767B\u5F55"))),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u529F\u80FD\u8BBE\u7F6E")),e.createElement("div",{className:"mTop12"},e.createElement(an,null,e.createElement(V.Z,{icon:i.allowExAccountDiscuss?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){var P=o.portalSet,X=P===void 0?{}:P,K=X.portalSetModel,ne=K===void 0?{}:K,ae={allowExAccountDiscuss:!ne.allowExAccountDiscuss};ne.allowExAccountDiscuss&&(ae=(0,v.default)({},ae,{noticeScope:(0,v.default)({},x,{discussionNotice:!1})})),n({portalSetModel:(0,v.default)({},ne,ae)})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u5141\u8BB8\u53C2\u4E0E\u8BB0\u5F55\u8BA8\u8BBA"))),e.createElement("div",{style:{"margin-left":"36px"}},i.allowExAccountDiscuss&&e.createElement(e.Fragment,null,e.createElement("div",{className:"mTop8 mLeft8"},Ja.map(function(L,P){return e.createElement("div",{className:""},e.createElement(mn.Z,{className:"",text:L,checked:i.exAccountDiscussEnum===P,onClick:function(){var K=o.portalSet,ne=K===void 0?{}:K,ae=ne.portalSetModel,Ee=ae===void 0?{}:ae;Ee.exAccountDiscussEnum!==P&&he.Z.confirm({title:Ee.exAccountDiscussEnum===0?_l("\u786E\u5B9A\u5207\u6362\u4E3A\u4E0D\u53EF\u89C1\u5185\u90E8\u8BA8\u8BBA\uFF1F"):_l("\u786E\u5B9A\u5207\u6362\u4E3A\u53EF\u89C1\u5168\u90E8\u8BA8\u8BBA\uFF1F"),width:480,description:Ee.exAccountDiscussEnum===0?e.createElement("div",{className:"Font13"},e.createElement("div",null,"1\u3001",_l("\u5207\u6362\u540E\uFF0C\u5DF2\u6709\u7684\u5916\u90E8\u8BA8\u8BBA\u5185\u5BB9\u5168\u90E8\u5F52\u4E3A\u5185\u90E8\u8BA8\u8BBA\uFF0C\u5916\u90E8\u7528\u6237\u5BF9\u5176\u4E0D\u53EF\u67E5\u770B\u4E14\u4E0D\u80FD\u56DE\u590D\uFF1B")),e.createElement("div",null,"2\u3001",_l("\u5207\u6362\u540E\uFF0C\u5E94\u7528\u6210\u5458\u56DE\u590D\u5DF2\u6709\u8BA8\u8BBA\uFF0C\u56DE\u590D\u5185\u5BB9\u5F52\u5C5E\u4E8E\u5185\u90E8\u8BA8\u8BBA\uFF0C\u5916\u90E8\u7528\u6237\u4E0D\u53EF\u67E5\u770B\u4E14\u4E0D\u80FD\u56DE\u590D")),e.createElement("div",null,"3\u3001",_l("\u5207\u6362\u540E\uFF0C\u8BA8\u8BBA\u5206\u4E3A\u4E24\u4E2A\u8BA8\u8BBA\u533A\u57DF\uFF0C\u5916\u90E8\u7528\u6237\u53EA\u80FD\u53C2\u4E0E\u5916\u90E8\u8BA8\u8BBA"))):e.createElement("div",{className:"Font13"},e.createElement("div",null,_l("\u5207\u6362\u540E\uFF0C\u5916\u90E8\u548C\u5185\u90E8\u4E24\u4E2A\u8BA8\u8BBA\u5171\u7528\u4E00\u4E2A\u8BA8\u8BBA\u533A\uFF0C\u5DF2\u6709\u7684\u5916\u90E8\u548C\u5185\u90E8\u8BA8\u8BBA\u5185\u5BB9\u5F52\u5728\u4E00\u8D77"))),onOk:function(){var tn=o.portalSet,cn=tn===void 0?{}:tn,on=cn.portalSetModel,En=on===void 0?{}:on;n({portalSetModel:(0,v.default)({},En,{exAccountDiscussEnum:P})})}})}}),e.createElement("p",{className:"Gray_9e mTop6 mLeft30"},P===0?_l("\u5916\u90E8\u7528\u6237\u4E0E\u6210\u5458\u5171\u7528\u4E00\u4E2A\u8BA8\u8BBA\u533A\u57DF\uFF0C\u53EF\u89C1\u5168\u90E8\u8BA8\u8BBA\u5185\u5BB9"):_l("\u5206\u4E3A\u5185\u90E8\u548C\u5916\u90E8\u4E24\u4E2A\u8BA8\u8BBA\u533A\uFF0C\u5916\u90E8\u7528\u6237\u4E0D\u53EF\u89C1\u5185\u90E8\u8BA8\u8BBA\u533A")))}))))),e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:i.approved?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){n({portalSetModel:(0,v.default)({},i,{approved:!i.approved})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u5141\u8BB8\u67E5\u770B\u5BA1\u6279\u6D41\u8F6C\u8BE6\u60C5")))),e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:i.watermark&&i.watermark!==0?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){n({portalSetModel:(0,v.default)({},i,{watermark:i.watermark===1?0:1})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u6C34\u5370\u8BBE\u7F6E"))),i.watermark===1&&e.createElement("div",{style:{"margin-left":"44px"},className:"Gray_9e"},_l("\u542F\u7528\u6C34\u5370\u914D\u7F6E\u540E\uFF0C\u5C06\u5728\u5916\u90E8\u95E8\u6237\u5185\u663E\u793A\u5F53\u524D\u4F7F\u7528\u8005\u7684\u59D3\u540D+\u624B\u673A\u53F7\u540E4\u4F4D\u6216\u90AE\u7BB1\u524D\u7F00"))),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u901A\u77E5\u8BBE\u7F6E")),e.createElement("div",{className:"mTop12"},e.createElement(an,null,e.createElement(V.Z,{icon:O?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){n({portalSetModel:(0,v.default)({},i,{noticeScope:(0,v.default)({},x,{admin:!O})})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u65B0\u7528\u6237\u6CE8\u518C\u3001\u6FC0\u6D3B\u65F6\u901A\u77E5\u7BA1\u7406\u5458")))),e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:Y?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){n({portalSetModel:(0,v.default)({},i,{noticeScope:(0,v.default)({},x,{exAccountSmsNotice:!Y})})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u5BA1\u6838\u7ED3\u679C\u77ED\u4FE1\u901A\u77E5\u5916\u90E8\u7528\u6237")))),e.createElement("div",{className:"mTop5"},e.createElement(an,null,e.createElement(V.Z,{icon:x.discussionNotice?"ic_toggle_on":"ic_toggle_off",className:"Font32 Hand",onClick:function(){!x.discussionNotice&&!A.workFlowId?De():n({portalSetModel:(0,v.default)({},i,{noticeScope:(0,v.default)({},x,{discussionNotice:!x.discussionNotice})})})}}),e.createElement("div",{className:"switchText LineHeight32 InlineBlock Normal Gray mLeft12"},_l("\u6709\u8BA8\u8BBA\u6D88\u606F\u65F6\uFF08\u88AB\u63D0\u5230\u3001\u88AB\u56DE\u590D\uFF09\u901A\u77E5\u5916\u90E8\u7528\u6237")))),x.discussionNotice&&e.createElement("div",{className:"exAccountSendCon flexRow"},A.workFlowName&&e.createElement("span",{className:"flex"},A.workFlowName,!A.isEnable&&e.createElement("span",{className:"Font13 mLeft5 Red"},_l("\u672A\u542F\u7528"))),e.createElement("span",{className:"ThemHoverColor3 editFlow Hand",onClick:function(){A.workFlowId?Ge({showWorkflowDialog:!0}):De(function(){Ge({showWorkflowDialog:!0})})}},_l("\u7F16\u8F91\u5DE5\u4F5C\u6D41"))),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u540D\u7247\u914D\u7F6E")),e.createElement("p",{className:"Font12 Gray_9e mTop4 LineHeight18"},_l("\u8BBE\u7F6E\u5916\u90E8\u7528\u6237\u7684\u540D\u7247\u5C42\u4E2D\u53EF\u4EE5\u88AB\u5176\u4ED6\u4EBA\u67E5\u770B\u5230\u7684\u4FE1\u606F")),e.createElement("div",{className:"mTop12 mBottom6"},_l("\u7EC4\u7EC7\u6210\u5458\u67E5\u770B")),e.createElement(ln.default,{mode:"multiple",className:"cardSelect",allowClear:!0,style:{width:"100%"},placeholder:_l("\u8BF7\u9009\u62E9"),value:ve,optionLabelProp:"label",onChange:function(P){if(P.length>6){alert("\u6700\u591A\u652F\u6301\u663E\u793A6\u4E2A\u5B57\u6BB5");return}n({portalSetModel:(0,v.default)({},i,{internalControls:P})})}},ie()),e.createElement("div",{className:"mTop12 mBottom6"},_l("\u5916\u90E8\u7528\u6237\u67E5\u770B")),e.createElement(ln.default,{mode:"multiple",className:"cardSelect",allowClear:!0,style:{width:"100%"},placeholder:_l("\u8BF7\u9009\u62E9"),value:xn,optionLabelProp:"label",onChange:function(P){if(P.length>6){alert("\u6700\u591A\u652F\u6301\u663E\u793A6\u4E2A\u5B57\u6BB5");return}n({portalSetModel:(0,v.default)({},i,{externalControls:P})})}},ie())),$e&&e.createElement(Ga.Z,{flowId:A.workFlowId,onBack:function(P){Ge({showWorkflowDialog:!1}),n({epDiscussWorkFlow:(0,v.default)({},A,{isEnable:P})})}}),Fe&&e.createElement(Qa,{show:Fe,type:Ue,data:Ue===1?i.privacyTerms:i.userAgreement,setShow:function(){Ge({type:null,show:!1})},onChange:function(P){var X=Ue===1?{privacyTerms:P}:{userAgreement:P};n({portalSetModel:(0,v.default)({},i,X)})}}))}var Qe=w(85315),gn=w(43727),Wn=w(86674),St=w(72045),Ln=w(62232),bn=w(95742),qa=w(52945),$a=w.n(qa),eo=[2,3,4,15,16,17,18],no=[6],to=[9,10,11],ao=[19,23,24],oo=[3,4],lo=[2,3,4,5,7,9,10,11,15,16,17,18,19,23,24,36],ro=[2,3,4,5,6,7,15,16,17,18],io=w(56337),so=w(58573),co=w(2500),po=w(24445),nc=w(67112),uo=w(92340),fo=w(15104),$n=w(57467),mo=(0,Q.Z)([`
  & > div:first-child {
    margin-top: 0 !important;
  }
`],[`
  & > div:first-child {
    margin-top: 0 !important;
  }
`]),go=W.ZP.div(mo),ho=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.onChange=function(t){n.setState({data:$a()({},n.state.data,t)})},n.state={data:d.data},n}return(0,ke.default)(a,[{key:"render",value:function(){var n=this.props,t=n.onClose,r=n.onOk,l=n.globalSheetInfo,s=n.from,c=this.state.data,p=c===void 0?{}:c,i=p.type,u=Ln.GV[i],f={data:p,onChange:this.onChange,globalSheetInfo:l,from:s},x=io.Z[u],E=(0,Ln.E0)(i),m=E.icon,b=E.widgetName;return e.createElement(he.Z,{title:e.createElement("div",{className:"flexCenter"},e.createElement("i",{className:M()("icon Font20 mRight10 Gray_75","icon-"+m)}),e.createElement("span",null,b)),className:"portalSettingsDialog",visible:!0,width:360,onCancel:t,okText:_l("\u4FDD\u5B58"),onOk:function(){return r(p)}},e.createElement(go,null,eo.includes(i)&&e.createElement(x,(0,v.default)({className:"mTop0"},f)),to.includes(i)&&e.createElement(x,(0,v.default)({className:"mTop0"},f,{fromPortal:!0})),no.includes(i)&&e.createElement(x,(0,v.default)({},f,{fromPortal:!0})),ao.includes(i)&&e.createElement(x,f),i===36&&e.createElement("div",{className:"checkWrap"},e.createElement(uo.default,f),e.createElement(fo.Z,(0,v.default)({},f,{allControls:[]}))),lo.includes(i)&&e.createElement(co.Z,(0,v.default)({},f,{fromPortal:!0})),oo.includes(i)&&e.createElement($n.d4,null,e.createElement("div",{className:"settingItemTitle"},_l("\u8BBE\u7F6E")),e.createElement(so.Z,f)),ro.includes(i)&&e.createElement(po.default,f)))}}]),a}(e.Component),vo=(0,Q.Z)([`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  z-index: 1;
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
  }
  .addControl {
    margin-left: 22px;
    width: 99px;
    height: 36px;
    background: #f8f8f8;
    border-radius: 3px;
    color: #2196f3;
    line-height: 34px;
    text-align: center;
    &:hover {
      background: #f5f5f5;
    }
  }
`],[`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  z-index: 1;
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
  }
  .addControl {
    margin-left: 22px;
    width: 99px;
    height: 36px;
    background: #f8f8f8;
    border-radius: 3px;
    color: #2196f3;
    line-height: 34px;
    text-align: center;
    &:hover {
      background: #f5f5f5;
    }
  }
`]),xo=(0,Q.Z)([`
  &.firstWrapSorh {
    margin-left: -11px;
  }
  &.title {
    margin-left: 0px;
    border-radius: 3px;
    overflow: hidden;
    background: #f8f8f8;
    padding-left: 16px;
  }
  label {
    width: 65px;
    &.required {
      margin-left: 10px;
    }
  }
  .controlName,
  .controlN {
    &.title {
      background: none;
      border: 0;
      margin-left: 5px;
    }
  }
`],[`
  &.firstWrapSorh {
    margin-left: -11px;
  }
  &.title {
    margin-left: 0px;
    border-radius: 3px;
    overflow: hidden;
    background: #f8f8f8;
    padding-left: 16px;
  }
  label {
    width: 65px;
    &.required {
      margin-left: 10px;
    }
  }
  .controlName,
  .controlN {
    &.title {
      background: none;
      border: 0;
      margin-left: 5px;
    }
  }
`]),wt=["mobilephone","avatar","roleid","status","firstLoginTime","openid","portal_email"],Eo=W.ZP.div(vo),et=W.ZP.div(xo),kt=md.global.SysSettings.hideWorksheetControl,Co=kt===void 0?"":kt,bo=["TEXT","MOBILE_PHONE","EMAIL","NUMBER","CRED","MULTI_SELECT","DROP_DOWN","DATE","AREA_COUNTY","SWITCH"].filter(function(o){return!Co.includes(o)}),Qn={2:"TEXT",3:"MOBILE_PHONE",4:"TELEPHONE",5:"EMAIL",6:"NUMBER",7:"CRED",9:"FLAT_MENU",10:"MULTI_SELECT",11:"DROP_DOWN",15:"DATE",16:"DATE_TIME",19:"AREA_PROVINCE",23:"AREA_CITY",24:"AREA_COUNTY",36:"SWITCH"},Io=function(a,d,n){return(0,v.default)({},Wn.gE[a],{size:12,type:d||Ln.GV[a],controlId:n||(0,St.Z)(),fieldPermission:"110"})},Ao=(0,bn.W6)(function(){return e.createElement(V.Z,{className:"mRight12 Font16 Hand Gray_9e",icon:"drag"})}),So=(0,bn.W8)(function(o){var a=o.type,d=o.showEditDialog,n=o.deleteBtn,t=o.onChange,r=o.isRequired,l=o.fieldPermission,s=l===void 0?"111":l,c=o.controlName,p=o.controlId;return e.createElement(et,{className:"mBottom10 porTalSort flexRow"},e.createElement(Ao,null),a?e.createElement("span",{className:"InlineBlock controlN"},Wn.g5[Qn[a]||"TEXT"].widgetName):e.createElement(gn.Z,{isAppendToBody:!0,data:bo.map(function(i){return{text:Wn.g5[i].widgetName,value:i}}),className:"InlineBlock controlN",onChange:function(u){t(Io(u,null,p))},placeholder:_l("\u7C7B\u578B")}),e.createElement("input",{className:M()("controlName InlineBlock mLeft10 mRight25",{noName:!c}),value:c,placeholder:_l("\u5B57\u6BB5\u6807\u9898"),onChange:function(u){var f=u.target.value.trim();t({controlName:f,controlId:p})}}),e.createElement(me.Z,{className:"TxtLeft InlineBlock Hand cellect",text:"",checked:s==="110",onClick:function(u){t({fieldPermission:s==="110"?"111":"110",controlId:p})}}),e.createElement(me.Z,{className:"TxtLeft InlineBlock Hand required",text:"",checked:r,onClick:function(){t({required:!r,controlId:p})}}),e.createElement(V.Z,{className:"Font18 Hand mRight10 set",icon:"settings",onClick:function(){if(!a){alert(_l("\u8BF7\u9009\u62E9\u5B57\u6BB5\u7C7B\u578B"),3);return}d(p,a)}}),e.createElement(V.Z,{className:"Font18 Hand del",icon:"trash",onClick:function(){n(p)}}))}),wo=(0,bn.JN)(function(o){var a=o.items,d=o.showEditDialog,n=o.deleteBtn,t=o.onChange;return e.createElement("div",{className:""},D().map(a,function(r,l){return e.createElement(So,(0,v.default)({},r,{controlName:r.controlName,type:r.type,index:l+1,isRequired:r.required,fieldPermission:r.fieldPermission,key:"item_"+l,showEditDialog:d.bind(r),deleteBtn:n.bind(r),onChange:t.bind(r)}))}))});function ko(o){var a=o.portal,d=a===void 0?{}:a,n=o.appId,t=o.portalSet,r=t===void 0?{}:t,l=o.onChangePortalSet,s=r.controlTemplate,c=s===void 0?{}:s,p=d.baseInfo||{},i=p.groupId,u=p.name,f=p.projectId,x=p.worksheetId,E=(0,e.useState)(!1),m=(0,B.Z)(E,2),b=m[0],A=m[1],k=(0,e.useState)([]),S=(0,B.Z)(k,2),h=S[0],g=S[1],I=(0,e.useState)([]),C=(0,B.Z)(I,2),N=C[0],T=C[1],R=(0,e.useState)({}),y=(0,B.Z)(R,2),Z=y[0],O=y[1],U=(0,e.useState)([]),G=(0,B.Z)(U,2),H=G[0],Y=G[1],J=(0,e.useState)(!1),le=(0,B.Z)(J,2),q=le[0],F=le[1];(0,e.useEffect)(function(){var Ne=r.controlTemplate,te=Ne===void 0?{}:Ne,ee=te.controls,ce=ee===void 0?[]:ee;F(!1),g((ce.length>0?ce.filter(function(fe){return!wt.includes(fe.alias)}):[]).sort(function(fe,Ue){return fe.row-Ue.row})),T(ce.length>0?ce.filter(function(fe){return wt.includes(fe.alias)}):[]),Y(ce||[])},[]),(0,e.useEffect)(function(){var Ne,te;if(!(h.length<=0)){var ee=h.slice(),ce=ee.shift(),fe=(Ne=(te=[ce]).concat.apply(te,(0,Qe.Z)(N))).concat.apply(Ne,(0,Qe.Z)(ee));Y(fe),l({controlTemplate:(0,v.default)({},c,{controls:fe})},q)}},[h]);var oe=function(te){F(!0),g(te.map(function(ee,ce){return ee.alias?(0,v.default)({},ee,{row:0}):(0,v.default)({},ee,{row:N.length+ce+1})}))},xe=function(te){var ee=te.oldIndex,ce=te.newIndex;if(ee!==ce){var fe=h.slice(),Ue=fe.splice(ee,1)[0];fe.splice(ce,0,Ue),oe(fe)}},Xe=function(){return e.createElement(e.Fragment,null,e.createElement(et,{className:"mBottom10 porTalSort mTop10 title flexRow"},e.createElement("span",{className:M()("InlineBlock controlN disable title")},_l("\u7C7B\u578B")),e.createElement("span",{className:M()("controlName InlineBlock mLeft10 disable title")},_l("\u540D\u79F0")),e.createElement(me.Z,{className:"TxtLeft InlineBlock Hand",text:_l("\u6536\u96C6"),checked:h.filter(function(te){return te.fieldPermission==="110"}).length>=h.length,clearselected:!!(h.length&&h.filter(function(te){return te.fieldPermission==="110"}).length&&h.filter(function(te){return te.fieldPermission==="110"}).length!==h.length),onClick:function(){F(!0),g(h.map(function(ee,ce){return(0,v.default)({},ee,{fieldPermission:h.filter(function(fe){return fe.fieldPermission==="110"}).length>=h.length?"111":"110"})}))}}),e.createElement(me.Z,{className:"TxtLeft InlineBlock Hand required",text:_l("\u5FC5\u586B"),checked:h.filter(function(te){return te.required}).length>=h.length,clearselected:!!(h.length&&h.filter(function(te){return te.required}).length&&h.filter(function(te){return te.required}).length!==h.length),onClick:function(){F(!0),g(h.map(function(ee,ce){return ce===0?ee:(0,v.default)({},ee,{required:!(h.filter(function(fe){return fe.required}).length>=h.length)})}))}}),e.createElement("div",{style:{width:46}})),e.createElement(et,{className:"mBottom10 porTalSort firstWrapSorh flexRow"},e.createElement("span",{className:"sortBox InlineBlock mRight18"}),e.createElement("span",{className:M()("InlineBlock controlN disable")},(Wn.g5[Qn[h[0].type]]||{}).widgetName),e.createElement("span",{className:M()("controlName InlineBlock mLeft10 disable mRight25",{noName:!h[0].controlName})},h[0].controlName),e.createElement(me.Z,{className:"TxtLeft InlineBlock Hand cellect",text:"",checked:h[0].fieldPermission==="110",onClick:function(){F(!0),g(h.map(function(ee,ce){return ce===0?(0,v.default)({},ee,{fieldPermission:h[0].fieldPermission==="110"?"111":"110",controlId:h[0].controlId}):ee}))}}),e.createElement(me.Z,{className:"TxtLeft InlineBlock Hand required",text:"",disabled:!0,checked:h[0].required}),e.createElement("div",{style:{width:46}})),e.createElement(wo,{items:h.filter(function(te,ee){return ee!==0}),useDragHandle:!0,onSortEnd:xe,helperClass:"portalList",onChange:function(ee){F(!0),g(h.map(function(ce){return ce.controlId===ee.controlId?(0,v.default)({},ce,ee):ce}))},showEditDialog:function(ee,ce){O(h.find(function(fe){return fe.controlId===ee})),A(!0)},deleteBtn:function(ee){F(!0),g(h.filter(function(ce){return ce.controlId!==ee}))}}))};return e.createElement(Eo,null,e.createElement("div",{className:"content"},e.createElement("h6",{className:"Font16 Gray Bold mBottom0"},_l("\u7528\u6237\u5217\u8868\u4FE1\u606F\u8BBE\u7F6E")),e.createElement("div",{className:"Font12 Gray_9e mTop8 mBottom8"},_l("\u5916\u90E8\u7528\u6237\u5217\u8868\u5728\u7CFB\u7EDF\u5B57\u6BB5\u7684\u57FA\u7840\u4E0A\uFF0C\u8FD8\u53EF\u589E\u52A0\u81EA\u5B9A\u4E49\u5B57\u6BB5\u7684\u914D\u7F6E\uFF1B\u5982\u679C\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9700\u8981\u7528\u6237\u6CE8\u518C/\u767B\u5F55\u65F6\u586B\u5199\u6536\u96C6\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u7684\u6536\u96C6\u52FE\u9009\u6846\uFF0C\u9700\u8981\u7528\u6237\u5FC5\u586B\u53EF\u70B9\u51FB\u53F3\u4FA7\u7684\u5FC5\u586B\u52FE\u9009\u6846")),h.length>0&&Xe(),e.createElement("div",{className:"addControl InlineBlock Hand",onClick:function(){F(!0),g(h.concat({controlId:(0,St.Z)(),fieldPermission:"110",required:!1,row:H.length+1}))}},e.createElement("i",{className:"icon icon-add Font18 mRight5 TxtMiddle InlineBlock"}),e.createElement("span",{className:"Bold TxtMiddle InlineBlock"},_l("\u6DFB\u52A0\u5B57\u6BB5")))),b&&e.createElement(ho,{onClose:function(){A(!1),O({})},onOk:function(te){A(!1),F(!0),g(h.map(function(ee){return ee.controlId!==te.controlId?ee:te}))},globalSheetInfo:{appId:n,groupId:i,name:u,projectId:f,worksheetId:x},data:Z,from:"portal"}))}var tc=w(16461),Ye=w(69711),yo=w(62611),No=w.n(yo),To=w(13802),Bo=w.n(To),Ro=w(84952),Lo=w.n(Ro),Do=w(93748),Po=w.n(Do),Zo=(0,Q.Z)([`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
  }
  .pageTitle {
    width: 592px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    padding: 0 14px;
    &:hover {
      border: 1px solid #bdbdbd;
    }
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .uploadLogo {
    width: 240px;
    height: 80px;
    background: #ffffff;
    border: 2px dashed #e0e0e0;
    border-radius: 4px;
    line-height: 80px;
    position: relative;
    color: #2196f3;
    padding: 6px;
    .upload_logo {
      height: 100%;
      width: 100%;
      font-weight: 500;
      i {
        vertical-align: top;
        display: inline-block;
        line-height: 62px;
      }
      span {
        font-size: 16px;
        vertical-align: top;
        display: inline-block;
        line-height: 64px;
      }
    }
    .delete {
      position: absolute;
      right: -9px;
      top: -9px;
      color: #9e9e9e;
      display: none;
      background: #fff;
      border-radius: 50%;
      &:hover {
        color: #2196f3;
      }
    }
    &:hover {
      background: rgba(33, 150, 243, 0.1);
      border: 2px dashed #2196f3;
      .delete {
        display: block;
      }
    }
    img {
      height: 64px;
      vertical-align: top;
      max-width: 100%;
      object-fit: contain;
    }
  }
  .pageMode {
    li {
      .iconBox {
        width: 80px;
        height: 58px;
        background: #f7f7f7;
        border-radius: 6px;
        position: relative;
        background: url(`,`) no-repeat;
        background-size: contain;
        i {
          padding: 1px;
          position: absolute;
          right: -9px;
          top: -9px;
          background: #fff;
          border-radius: 50%;
        }
      }
      &.rightIconBox {
        .iconBox {
          background: url(`,`) no-repeat;
          background-size: contain;
        }
      }
      &.current,
      &:hover {
        .iconBox {
          background: url(`,`) no-repeat;
          background-size: contain;
        }
        &.rightIconBox {
          .iconBox {
            background: url(`,`) no-repeat;
            background-size: contain;
          }
        }
      }
      &.current {
        .iconBox {
          box-shadow: none;
        }
      }
      &:hover {
        .iconBox {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
  .bgTypeUl {
    .bgTypeUlLi {
      height: 36px;
      padding: 0 20px;
      background: #ffffff;
      border: 1px solid #f5f5f5;
      border-radius: 0px 3px 3px 0px;
      line-height: 34px;
      text-align: center;
      margin-right: -1px;
      &:nth-child(1) {
        border-radius: 3px 0px 0px 3px;
      }
      &.current {
        background: #2196f3;
        color: #fff;
        position: relative;
        z-index: 1;
      }
    }
  }
  .colorLi {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 14px;
    text-align: center;
    line-height: 28px;
    vertical-align: top;
    transition: all 0.4s ease;
    margin-top: 14px;
    &:hover,
    &.current {
      transform: scale(1.22);
    }

    .check {
      color: #fff;
      vertical-align: middle;
      font-size: 18px;
    }
  }
  .upload_imageBg {
    padding: 0 16px;
    background: #f3faff;
    border-radius: 6px;
    color: #2196f3;
    display: inline-block;
    height: 44px;
    line-height: 44px;
    min-width: 240px;
    font-weight: 500;
    &:hover {
      background: #ebf6fe;
    }
  }
  .hideUploadBgTxt {
    color: #9e9e9e;
    a {
      color: #2196f3;
    }
  }
  .loginDemo {
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 0;
    right: 640px;
  }
`],[`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
  }
  .pageTitle {
    width: 592px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    padding: 0 14px;
    &:hover {
      border: 1px solid #bdbdbd;
    }
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .uploadLogo {
    width: 240px;
    height: 80px;
    background: #ffffff;
    border: 2px dashed #e0e0e0;
    border-radius: 4px;
    line-height: 80px;
    position: relative;
    color: #2196f3;
    padding: 6px;
    .upload_logo {
      height: 100%;
      width: 100%;
      font-weight: 500;
      i {
        vertical-align: top;
        display: inline-block;
        line-height: 62px;
      }
      span {
        font-size: 16px;
        vertical-align: top;
        display: inline-block;
        line-height: 64px;
      }
    }
    .delete {
      position: absolute;
      right: -9px;
      top: -9px;
      color: #9e9e9e;
      display: none;
      background: #fff;
      border-radius: 50%;
      &:hover {
        color: #2196f3;
      }
    }
    &:hover {
      background: rgba(33, 150, 243, 0.1);
      border: 2px dashed #2196f3;
      .delete {
        display: block;
      }
    }
    img {
      height: 64px;
      vertical-align: top;
      max-width: 100%;
      object-fit: contain;
    }
  }
  .pageMode {
    li {
      .iconBox {
        width: 80px;
        height: 58px;
        background: #f7f7f7;
        border-radius: 6px;
        position: relative;
        background: url(`,`) no-repeat;
        background-size: contain;
        i {
          padding: 1px;
          position: absolute;
          right: -9px;
          top: -9px;
          background: #fff;
          border-radius: 50%;
        }
      }
      &.rightIconBox {
        .iconBox {
          background: url(`,`) no-repeat;
          background-size: contain;
        }
      }
      &.current,
      &:hover {
        .iconBox {
          background: url(`,`) no-repeat;
          background-size: contain;
        }
        &.rightIconBox {
          .iconBox {
            background: url(`,`) no-repeat;
            background-size: contain;
          }
        }
      }
      &.current {
        .iconBox {
          box-shadow: none;
        }
      }
      &:hover {
        .iconBox {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
  .bgTypeUl {
    .bgTypeUlLi {
      height: 36px;
      padding: 0 20px;
      background: #ffffff;
      border: 1px solid #f5f5f5;
      border-radius: 0px 3px 3px 0px;
      line-height: 34px;
      text-align: center;
      margin-right: -1px;
      &:nth-child(1) {
        border-radius: 3px 0px 0px 3px;
      }
      &.current {
        background: #2196f3;
        color: #fff;
        position: relative;
        z-index: 1;
      }
    }
  }
  .colorLi {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 14px;
    text-align: center;
    line-height: 28px;
    vertical-align: top;
    transition: all 0.4s ease;
    margin-top: 14px;
    &:hover,
    &.current {
      transform: scale(1.22);
    }

    .check {
      color: #fff;
      vertical-align: middle;
      font-size: 18px;
    }
  }
  .upload_imageBg {
    padding: 0 16px;
    background: #f3faff;
    border-radius: 6px;
    color: #2196f3;
    display: inline-block;
    height: 44px;
    line-height: 44px;
    min-width: 240px;
    font-weight: 500;
    &:hover {
      background: #ebf6fe;
    }
  }
  .hideUploadBgTxt {
    color: #9e9e9e;
    a {
      color: #2196f3;
    }
  }
  .loginDemo {
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 0;
    right: 640px;
  }
`]),Fo=(0,Q.Z)([`
  @media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  background-color: rgb(245, 245, 245);
  width: calc(100% - 64px);
  height: 80%
  border-radius:8px;
  position: relative;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  .backImageUrl {
    flex: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`],[`
  @media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  background-color: rgb(245, 245, 245);
  width: calc(100% - 64px);
  height: 80%
  border-radius:8px;
  position: relative;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  .backImageUrl {
    flex: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`]),Oo=(0,Q.Z)([`
  background: #ffffff;
  width: 50%;
  padding: 50px;
  p {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  .logoImageUrlIcon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    div {
      height: 28px;
    }
  }
  &.isCenterCon {
    padding: 32px 32px 40px;
    width: 320px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pageTitleDeme {
    font-size: 16px;
    font-weight: 600;
  }

  .txtMobilePhone {
    max-width: 360px;
    height: 32px;
    background: #f8f8f8;
    border-radius: 3px;
    max-width: 100%;
  }
  .loginBtn {
    max-width: 360px;
    width: 100%;
    height: 32px;
    background: #d3ebff;
    opacity: 1;
    border-radius: 3px;
  }
  &.isR {
    .btnCon {
      max-width: 360px;
      margin: 0 auto;
      padding-top: 90px;
    }
  }
`],[`
  background: #ffffff;
  width: 50%;
  padding: 50px;
  p {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  .logoImageUrlIcon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    div {
      height: 28px;
    }
  }
  &.isCenterCon {
    padding: 32px 32px 40px;
    width: 320px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pageTitleDeme {
    font-size: 16px;
    font-weight: 600;
  }

  .txtMobilePhone {
    max-width: 360px;
    height: 32px;
    background: #f8f8f8;
    border-radius: 3px;
    max-width: 100%;
  }
  .loginBtn {
    max-width: 360px;
    width: 100%;
    height: 32px;
    background: #d3ebff;
    opacity: 1;
    border-radius: 3px;
  }
  &.isR {
    .btnCon {
      max-width: 360px;
      margin: 0 auto;
      padding-top: 90px;
    }
  }
`]),Mo=W.ZP.div(Zo,No(),Lo(),Bo(),Po()),Uo=W.ZP.div(Fo),Ho=W.ZP.div(Oo);function Wo(o){var a=o.appId,d=o.appPkg,n=o.onChangePortalSet,t=(0,e.useState)({}),r=(0,B.Z)(t,2),l=r[0],s=r[1],c=d.iconColor,p=c===void 0?"#00bcd4":c,i=d.iconUrl,u=i===void 0?md.global.FileStoreConfig.pubHost.replace(/\/$/,"")+"/customIcon/0_lego.svg":i,f=(0,e.useState)(!1),x=(0,B.Z)(f,2),E=x[0],m=x[1],b=(0,e.useState)(!1),A=(0,B.Z)(b,2),k=A[0],S=A[1];(0,e.useEffect)(function(){var C=o.portalSet,N=C===void 0?{}:C,T=N.portalSetModel,R=T===void 0?{}:T;s(R)},[o.portalSet]),(0,e.useEffect)(function(){g()},[l]);var h=function(N){o.onChangeImg(N)},g=function(){E||($("#hideUploadImage").uploadAttachment({filterExtensions:"gif,png,jpg,jpeg,bmp",pluploadID:"#upload_image",multiSelection:!1,maxTotalSize:4,folder:"ProjectLogo",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:0,checkProjectLimitFileSizeUrl:"",filesAdded:function(){m(!0)},callback:function(T){if(T.length>0){var R=T[0];m(!1),h({logoImageUrl:R.url,logoImagePath:R.key})}}}),$("#hideUploadBg").uploadAttachment({filterExtensions:"gif,png,jpg,jpeg,bmp",pluploadID:"#upload_imageBg",multiSelection:!1,maxTotalSize:4,folder:"bgImage",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:0,checkProjectLimitFileSizeUrl:"",uploadProgress:function(){S(!0)},callback:function(T){if(S(!1),T.length>0){var R=T[0];h({backImageUrl:R.url,backImagePath:R.key})}}}))},I=function(){return e.createElement(e.Fragment,null,e.createElement("span",{className:"Hand TxtMiddle InlineBlock mTop16 upload_imageBg",onClick:function(){$("#upload_imageBg").click()}},e.createElement(V.Z,{className:"Font18 TxtMiddle mRight10",type:"picture"})," ",_l("\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247"),k?e.createElement(qe.Z,{className:"mBottom10 mLeft60 mTop10 InlineBlock",size:"small"}):l.backImageUrl&&e.createElement(V.Z,{className:"Font18 TxtMiddle mLeft60",type:"done"})),e.createElement("div",{className:"hideUploadBgTxt mTop8"},_l("\u5EFA\u8BAE\u4E0A\u4F20\u4E0D\u5C0F\u4E8E1920*1080px\u7684\u5C01\u9762\u56FE\u7247\uFF0C\u66F4\u5229\u4E8E\u9996\u9875\u5C55\u793A\uFF0C\u63A8\u8350\u514D\u8D39\u56FE\u5E93")," ",e.createElement("a",{href:"https://unsplash.com",target:"_blank",rel:"noopener noreferrer"},"https://unsplash.com")))};return e.createElement(Mo,null,e.createElement("input",{id:"hideUploadBg",type:"file",className:"Hidden"}),e.createElement("input",{id:"upload_imageBg",className:"Hidden"}),e.createElement("input",{id:"hideUploadImage",type:"file",className:"Hidden"}),e.createElement("div",{className:"content"},e.createElement("h6",{className:"Font16 Gray Bold mBottom0"},_l("\u767B\u5F55\u9875\u540D\u79F0")),e.createElement("input",{type:"text",className:"pageTitle mTop6",placeholder:_l("\u8BF7\u8F93\u5165"),value:l.pageTitle,onFocus:function(){},onBlur:function(N){if(!N.target.value)return alert(_l("\u8BF7\u8F93\u5165\u767B\u5F55\u9875\u540D\u79F0"),3);n({portalSetModel:(0,v.default)({},l,{pageTitle:N.target.value})})},onChange:function(N){s((0,v.default)({},l,{pageTitle:N.target.value}))}}),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u767B\u5F55\u9875Logo")),e.createElement("div",{className:"uploadLogo TxtCenter TxtMiddle mTop16"},l.logoImageUrl&&e.createElement(V.Z,{className:"delete Font18 Hand",type:"delete_out",onClick:function(){n({portalSetModel:(0,v.default)({},l,{logoImageUrl:"",logoImagePath:""})})}}),l.logoImageUrl?e.createElement("img",{src:l.logoImageUrl}):e.createElement("span",{className:"Hand upload_logo InlineBlock",id:"upload_image"},e.createElement(V.Z,{className:"Font18",type:"add1"}),e.createElement("span",null,_l("\u70B9\u51FB\u4E0A\u4F20")))),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u767B\u5F55\u9875\u9762\u7ED3\u6784")),e.createElement("ul",{className:"pageMode mTop16"},[0,1].map(function(C){return e.createElement("li",{className:M()("InlineBlock center",{rightIconBox:C===1,current:l.pageMode/3-1===C,mRight60:C===0})},e.createElement("span",{className:M()("iconBox Block Hand"),onClick:function(){n(C!==0?{portalSetModel:(0,v.default)({},l,{pageMode:(C+1)*3,backGroundType:6})}:{portalSetModel:(0,v.default)({},l,{pageMode:(C+1)*3})})}},l.pageMode/3-1===C&&e.createElement(V.Z,{className:"Font18 Hand ThemeColor3",type:"plus-interest"})),e.createElement("span",{className:"txt Block TxtCenter mTop13"},C===0?_l("\u5C45\u4E2D"):_l("\u5DE6\u53F3")))})),l.pageMode!==6?e.createElement(e.Fragment,null,e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u80CC\u666F\u8BBE\u7F6E")),e.createElement("ul",{className:"bgTypeUl mTop16"},Ye.g5.map(function(C,N){return e.createElement("li",{className:M()("InlineBlock bgTypeUlLi Hand",{current:l.backGroundType/3-1===N}),onClick:function(){n({portalSetModel:(0,v.default)({},l,{backGroundType:(N+1)*3})})}},C)})),l.backGroundType/3-1===0?e.createElement(e.Fragment,null,e.createElement("ul",{className:"mTop6",style:{"max-width":400}},Ye.DM.map(function(C,N){return e.createElement("li",{className:M()("colorLi InlineBlock Hand",{current:l.backColor===C}),style:{backgroundColor:C},onClick:function(){n({portalSetModel:(0,v.default)({},l,{backColor:C})})}},l.backColor===C&&e.createElement(V.Z,{icon:"ok",className:M()("check",{Gray_75:N<Ye.DM.length/2})}))}))):I()):I()),e.createElement("div",{className:"loginDemo"},e.createElement(Uo,{style:l.backGroundType===3?{"background-color":l.backColor}:l.pageMode===3?{"background-image":"url("+l.backImageUrl+")"}:{},className:M()("Relative",{isCenter:l.pageMode===3})},l.pageMode!==3&&e.createElement("div",{className:"backImageUrl",style:{"background-image":"url("+l.backImageUrl+")"}}),e.createElement(Ho,{className:M()({isCenterCon:l.pageMode===3,isR:l.pageMode!==3})},l.logoImageUrl?e.createElement("img",{src:l.logoImageUrl,height:32}):u&&p?e.createElement("span",{className:M()("logoImageUrlIcon"),style:{backgroundColor:p}},e.createElement(kn.Z,{url:u,fill:"#fff",size:28})):"",l.pageTitle&&e.createElement("p",{className:"Font24 Gray mAll0 mTop20 Bold pageTitleDeme ellipsis"},l.pageTitle),e.createElement("div",{className:"btnCon"},e.createElement("div",{className:"txtMobilePhone mTop28"}),e.createElement("div",{className:"txtMobilePhone mTop8"}),e.createElement("div",{className:"loginBtn mTop20"}))))))}var Gn=w(64250),je=w(15577),ac=w(67272),Dn=w(51024),Qo=(0,Q.Z)([`
  .line {
    border: 1px solid #000000;
    opacity: 0.08;
  }
`],[`
  .line {
    border: 1px solid #000000;
    opacity: 0.08;
  }
`]),nt=Dn.default.TextArea,Go=W.ZP.div(Qo);function _o(o){var a=o.onCancel,d=o.onChangePortalSet,n=o.portalSet.portalSetModel,t=n===void 0?{}:n,r=t.defaultApprovedEmail,l=t.defaultRefusedEmail,s=t.defaultInviteEmail,c=(0,e.useState)({}),p=(0,B.Z)(c,2),i=p[0],u=p[1],f=(0,e.useState)({}),x=(0,B.Z)(f,2),E=x[0],m=x[1],b=(0,e.useState)({}),A=(0,B.Z)(b,2),k=A[0],S=A[1],h=(0,e.useState)({}),g=(0,B.Z)(h,2),I=g[0],C=g[1];return(0,e.useEffect)(function(){var N=o.portalSet,T=N===void 0?{}:N,R=T.portalSetModel,y=R===void 0?{}:R;u(y.approvedEmail),m(y.refusedEmail),S(y.inviteEmail),C(T)},[o]),e.createElement(he.Z,{title:_l("\u90AE\u4EF6\u901A\u77E5\u5185\u5BB9\u8BBE\u7F6E"),className:M()(""),width:640,headerClass:"",bodyClass:"",okText:_l("\u4FDD\u5B58"),cancelText:_l("\u53D6\u6D88"),onCancel:a,onOk:function(){var T=I.portalSetModel,R=T===void 0?{}:T;d({portalSetModel:(0,v.default)({},R,{refusedEmail:{content:E.content||l.content,title:E.title||l.title},approvedEmail:{content:i.content||r.content,title:i.title||r.title},inviteEmail:{content:k.content||s.content,title:k.title||s.title}})}),a()},visible:!0,updateTrigger:"false"},e.createElement(Go,null,e.createElement("p",{className:"Font16 Bold mBottom0 mTop16"},e.createElement("span",{className:"Green"},_l("\u5BA1\u6838\u901A\u8FC7"))),e.createElement("p",{className:"Bold mBottom0 mTop16"},_l("\u6807\u9898")),e.createElement(Dn.default,{value:i.title,className:"mTop10",onChange:function(T){u((0,v.default)({},i,{title:T.target.value}))},onBlur:function(T){T.target.value.trim()||u((0,v.default)({},i,{title:r.title}))}}),e.createElement("p",{className:"Bold mBottom0 mTop16"},_l("\u5185\u5BB9")),e.createElement(nt,{id:"1",autoSize:{minRows:3},value:i.content,onChange:function(T){u((0,v.default)({},i,{content:T.target.value}))},onBlur:function(T){T.target.value.trim()||u((0,v.default)({},i,{content:r.content}))},className:"Block mTop10"}),e.createElement("p",{className:"Font16 Bold mBottom0 mTop32"},e.createElement("span",{className:"Red"},_l("\u5BA1\u6838\u62D2\u7EDD"))),e.createElement("p",{className:"Bold mBottom0 mTop16"},_l("\u6807\u9898")),e.createElement(Dn.default,{value:E.title,className:"mTop10",onChange:function(T){m((0,v.default)({},E,{title:T.target.value}))},onBlur:function(T){T.target.value.trim()||m((0,v.default)({},E,{title:l.title}))}}),e.createElement("p",{className:"Bold mBottom0 mTop16"},_l("\u5185\u5BB9")),e.createElement(nt,{id:"2",autoSize:{minRows:3},value:E.content,onChange:function(T){m((0,v.default)({},E,{content:T.target.value}))},onBlur:function(T){T.target.value.trim()||m((0,v.default)({},E,{content:l.content}))},className:"Block mTop10"}),e.createElement("p",{className:"Font16 Bold mBottom0 mTop32"},e.createElement("span",{className:""},_l("\u9080\u8BF7\u7528\u6237\u6CE8\u518C"))),e.createElement("p",{className:"Bold mBottom0 mTop16"},_l("\u6807\u9898")),e.createElement(Dn.default,{value:k.title,className:"mTop10",onChange:function(T){S((0,v.default)({},k,{title:T.target.value}))},onBlur:function(T){T.target.value.trim()||S((0,v.default)({},k,{title:s.title}))}}),e.createElement("p",{className:"Bold mBottom0 mTop16"},_l("\u5185\u5BB9")),e.createElement(nt,{id:"3",autoSize:{minRows:3},value:k.content,onChange:function(T){S((0,v.default)({},k,{content:T.target.value}))},onBlur:function(T){T.target.value.trim()||S((0,v.default)({},k,{content:s.content}))},className:"Block mTop10"})))}var zo=(0,Q.Z)([""],[""]),tt=Dn.default.TextArea,jo=W.ZP.div(zo);function Vo(o){var a=o.onCancel,d=o.onChangePortalSet,n=o.sign,t=o.portalSet.portalSetModel,r=t===void 0?{}:t,l=r.defaultApprovedSms,s=r.defaultRefusedSms,c=r.defaultInviteSms,p=(0,e.useState)(""),i=(0,B.Z)(p,2),u=i[0],f=i[1],x=(0,e.useState)(""),E=(0,B.Z)(x,2),m=E[0],b=E[1],A=(0,e.useState)(""),k=(0,B.Z)(A,2),S=k[0],h=k[1],g=(0,e.useState)(""),I=(0,B.Z)(g,2),C=I[0],N=I[1];(0,e.useEffect)(function(){var R=o.portalSet,y=R===void 0?{}:R,Z=y.portalSetModel,O=Z===void 0?{}:Z;b(O.approvedSms),h(O.refusedSms),N(O.inviteSms)},[o]);var T=function(y){return y>70?Math.ceil(y/67):1};return e.createElement(he.Z,{title:_l("\u77ED\u4FE1\u901A\u77E5\u5185\u5BB9\u8BBE\u7F6E"),className:M()(""),width:640,headerClass:"",bodyClass:"",okText:_l("\u4FDD\u5B58"),cancelText:_l("\u53D6\u6D88"),onCancel:a,onOk:function(){var y=o.portalSet,Z=y===void 0?{}:y,O=Z.portalSetModel,U=O===void 0?{}:O,G=U.defaultApprovedSms,H=U.defaultRefusedSms,Y=U.defaultInviteSms;d({portalSetModel:(0,v.default)({},U,{refusedSms:S||H,approvedSms:m||G,inviteSms:C||Y})}),a()},visible:!0,updateTrigger:"false"},e.createElement(jo,null,e.createElement("p",{className:" Bold mBottom0 mTop24"},_l("\u901A\u77E5\uFF1A"),e.createElement("span",{className:"Green"},_l("\u5BA1\u6838\u901A\u8FC7"))),e.createElement(tt,{id:"1",autoSize:!0,minHeight:36,value:u!==1?"["+n+"]"+(m||""):m||"",onChange:function(y){b(y.target.value)},onBlur:function(y){f(0),y.target.value.trim()||b(l)},onFocus:function(){f(1)},className:"Block mTop10"}),e.createElement("p",{className:"Gray_9e mTop10"},_l("\u5DF2\u8F93\u5165 %0  \u4E2A\u5B57\uFF08\u542B\u7B7E\u540D\uFF09\uFF0C\u77ED\u4FE1\u6309 %1 \u6761\u8BA1\u8D39",("["+n+"]"+(m||"")).length,T(("["+n+"]"+(m||"")).length))),e.createElement("p",{className:" Bold mBottom0 mTop24"},_l("\u901A\u77E5\uFF1A"),e.createElement("span",{className:"Red"},_l("\u5BA1\u6838\u62D2\u7EDD"))),e.createElement(tt,{id:"2",autoSize:!0,minHeight:36,value:u!==2?"["+n+"]"+(S||""):S||"",onChange:function(y){h(y.target.value)},onBlur:function(y){f(0),y.target.value.trim()||h(s)},onFocus:function(){f(2)},className:"Block mTop10"}),e.createElement("p",{className:"Gray_9e mTop10"},_l("\u5DF2\u8F93\u5165 %0  \u4E2A\u5B57\uFF08\u542B\u7B7E\u540D\uFF09\uFF0C\u77ED\u4FE1\u6309 %1 \u6761\u8BA1\u8D39",("["+n+"]"+(S||"")).length,T(("["+n+"]"+(S||"")).length))),e.createElement("p",{className:" Bold mBottom0 mTop24"},_l("\u9080\u8BF7\u7528\u6237\u6CE8\u518C")),e.createElement(tt,{autoSize:!0,id:"3",minHeight:36,value:u!==3?"["+n+"]"+(C||""):C||"",onChange:function(y){N(y.target.value)},onBlur:function(y){f(0),y.target.value.trim()||N(c)},onFocus:function(){f(3)},className:"Block mTop10"}),e.createElement("p",{className:"Gray_9e mTop10"},_l("\u5DF2\u8F93\u5165 %0  \u4E2A\u5B57\uFF08\u542B\u7B7E\u540D\uFF09\uFF0C\u77ED\u4FE1\u6309 %1 \u6761\u8BA1\u8D39",("["+n+"]"+(C||"")).length,T(("["+n+"]"+(C||"")).length)))))}var Yo=(0,Q.Z)([`
  .warnTxt {
    background: #fdf9dc;
    border-radius: 3px;
    padding: 12px;
    margin-bottom: 24px;
  }
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
    .sign {
      width: 200px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      padding: 0 14px;
      &:hover {
        border: 1px solid #bdbdbd;
      }
      &:focus {
        border: 1px solid #2196f3;
      }
    }
  }
  textarea {
    margin-top: 10px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 12px;
    border-radius: 3px;
    height: 90px;
    resize: none;
  }
  .ant-input:focus,
  .ant-input-focused {
    box-shadow: none;
    border: 1px solid #2196f3;
  }
  .sysBtn {
    line-height: 34px;
    background: #f5f5f5;
    border-radius: 4px;
    color: #2196f3;
    padding: 0 12px;
    display: inline-block;
    cursor: pointer;
    margin-top: 14px;
    font-weight: 500;
    i {
      display: inline-block;
      vertical-align: middle;
    }
    &:hover {
      color: #2182f3 !important;
    }
  }
  .line {
    height: 0px;
    border: 1px solid #000000;
    opacity: 0.08;
  }
`],[`
  .warnTxt {
    background: #fdf9dc;
    border-radius: 3px;
    padding: 12px;
    margin-bottom: 24px;
  }
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  .content {
    padding: 24px;
    height: calc(100% - 68px);
    overflow: auto;
    .sign {
      width: 200px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      padding: 0 14px;
      &:hover {
        border: 1px solid #bdbdbd;
      }
      &:focus {
        border: 1px solid #2196f3;
      }
    }
  }
  textarea {
    margin-top: 10px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 12px;
    border-radius: 3px;
    height: 90px;
    resize: none;
  }
  .ant-input:focus,
  .ant-input-focused {
    box-shadow: none;
    border: 1px solid #2196f3;
  }
  .sysBtn {
    line-height: 34px;
    background: #f5f5f5;
    border-radius: 4px;
    color: #2196f3;
    padding: 0 12px;
    display: inline-block;
    cursor: pointer;
    margin-top: 14px;
    font-weight: 500;
    i {
      display: inline-block;
      vertical-align: middle;
    }
    &:hover {
      color: #2182f3 !important;
    }
  }
  .line {
    height: 0px;
    border: 1px solid #000000;
    opacity: 0.08;
  }
`]),Jo=W.ZP.div(Yo),In="";function Xo(o){var a=o.projectId,d=o.onChangePortalSet,n=(0,je.vo)(a).licenseType!==1,t=(0,e.useState)(""),r=(0,B.Z)(t,2),l=r[0],s=r[1],c=(0,e.useState)(""),p=(0,B.Z)(c,2),i=p[0],u=p[1],f=(0,e.useState)({}),x=(0,B.Z)(f,2),E=x[0],m=x[1],b=(0,qn.Z)({showEmailDialog:!1,showTelDialog:!1}),A=(0,B.Z)(b,2),k=A[0],S=k.showEmailDialog,h=k.showTelDialog,g=A[1];return(0,e.useEffect)(function(){var I=o.portalSet,C=I===void 0?{}:I,N=C.portalSetModel,T=N===void 0?{}:N;m(T),s(T.smsSignature),u(T.emailSignature)},[o]),e.createElement(Jo,null,e.createElement("div",{className:"content"},!md.global.Config.IsLocal&&n&&e.createElement("div",{className:"warnTxt"},_l("\u56E0\u4E3A\u5E73\u53F0\u5B89\u5168\u63AA\u65BD\u9700\u8981\uFF0C\u81EA\u5B9A\u4E49\u7684\u77ED\u4FE1\u7B7E\u540D\u548C\u901A\u77E5\u5185\u5BB9\u6682\u65F6\u53EA\u5BF9\u4ED8\u8D39\u7EC4\u7EC7\u751F\u6548\u3002\u514D\u8D39\u548C\u8BD5\u7528\u7EC4\u7EC7\u53EA\u80FD\u6309\u9ED8\u8BA4\u5185\u5BB9\u53D1\u9001")),e.createElement("h6",{className:"Font16 Gray Bold mBottom0"},_l("\u77ED\u4FE1\u901A\u77E5")),e.createElement("div",{className:"mTop6 Gray_9e"},md.global.Config.IsPlatformLocal?_l("\u6CE8\u518C\u5F00\u542F\u5BA1\u6838\u540E\uFF0C\u5BA1\u6838\u7ED3\u679C(\u901A\u8FC7\u3001\u62D2\u7EDD)\u4F1A\u77ED\u4FE1\u544A\u77E5\u6CE8\u518C\u7528\u6237\uFF1B\u5916\u90E8\u95E8\u6237\u7C7B\u578B\u8BBE\u4E3A\u79C1\u6709\u540E\u518D\u6DFB\u52A0\u7528\u6237\u540E\u4E5F\u4F1A\u53D1\u9001\u9080\u8BF7\u901A\u77E5\uFF0C\u652F\u6301\u5BF9\u77ED\u4FE1\u5185\u5BB9\u81EA\u5B9A\u4E49\uFF1B\u9488\u5BF9\u76F8\u5E94\u7684\u77ED\u4FE1\u4F1A\u8FDB\u884C\u6536\u8D39\u6536\u8D39\u6807\u51C6\uFF1A\u77ED\u4FE10.05\u5143/\u6761\uFF0C\u81EA\u52A8\u4ECE\u4F01\u4E1A\u8D26\u52A1\u4E2D\u5FC3\u6263\u8D39\u300270\u5B57\u8BA1\u4E00\u6761\u77ED\u4FE1\uFF0C\u8D85\u8FC770\u5B57\u4EE567\u5B57\u6BCF\u6761\u8BA1\u8D39\u3002\u6BCF\u4E2A\u6807\u70B9\u3001\u7A7A\u683C\u3001\u82F1\u6587\u5B57\u6BCD\u90FD\u7B97\u4E00\u4E2A\u5B57\u3002\u77ED\u4FE1\u5B9E\u9645\u53D1\u9001\u53EF\u80FD\u670910-20\u5206\u949F\u7684\u5EF6\u65F6\u3002"):_l("\u6CE8\u518C\u5F00\u542F\u5BA1\u6838\u540E\uFF0C\u5BA1\u6838\u7ED3\u679C(\u901A\u8FC7\u3001\u62D2\u7EDD)\u4F1A\u77ED\u4FE1\u544A\u77E5\u6CE8\u518C\u7528\u6237\uFF1B\u5916\u90E8\u95E8\u6237\u7C7B\u578B\u8BBE\u4E3A\u79C1\u6709\u540E\u518D\u6DFB\u52A0\u7528\u6237\u540E\u4E5F\u4F1A\u53D1\u9001\u9080\u8BF7\u901A\u77E5\uFF0C\u652F\u6301\u5BF9\u77ED\u4FE1\u5185\u5BB9\u81EA\u5B9A\u4E49\u3002")),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u7B7E\u540D")),e.createElement("div",{className:"mTop6 Gray_9e"},_l("\u8BF7\u8C28\u614E\u586B\u5199\u60A8\u7684\u7EC4\u7EC7\u7B80\u79F0\u3001\u7F51\u7AD9\u540D\u3001\u54C1\u724C\u540D\uFF0C2-8\u4E2A\u6C49\u5B57\u3002\u5982\u7B7E\u540D\u4E0D\u7B26\u5408\u89C4\u8303\uFF0C\u5C06\u4F1A\u88AB\u8FD0\u8425\u5546\u62E6\u622A\u3002\u6B64\u7B7E\u540D\u9002\u7528\u4E8E\u5916\u90E8\u95E8\u6237\u7684\u77ED\u4FE1\u573A\u666F:\u5916\u90E8\u95E8\u6237\u7528\u6237\u6CE8\u518C\u767B\u5F55\u3001\u9080\u8BF7\u5916\u90E8\u7528\u6237\u6CE8\u518C\u3001\u5916\u90E8\u7528\u6237\u5BA1\u6838(\u901A\u8FC7/\u62D2\u7EDD)")),e.createElement("input",{type:"text",className:"sign mTop6",placeholder:_l("\u8BF7\u8F93\u5165\u7B7E\u540D"),value:l,onFocus:function(){In=l},onBlur:function(C){if(!C.target.value.trim())return s(In),d({portalSetModel:(0,v.default)({},E,{smsSignature:In})}),alert(_l("\u8BF7\u8F93\u5165\u7B7E\u540D"),3);if(!/^[\u4E00-\u9FA5A-Za-z]+$/.test(C.target.value))return alert(_l("\u53EA\u652F\u6301\u4E2D\u82F1\u6587"),3);if((0,je.wz)(C.target.value)>16)return s((0,Gn.s)(C.target.value)),d({portalSetModel:(0,v.default)({},E,{smsSignature:(0,Gn.s)(C.target.value)})}),alert(_l("\u6700\u591A\u53EA\u80FD16\u4E2A\u5B57\u8282"),3)},onChange:function(C){s(C.target.value.trim()),d({portalSetModel:(0,v.default)({},E,{smsSignature:(0,Gn.s)(C.target.value.trim())})})}}),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u5185\u5BB9")),e.createElement("div",{className:"sysBtn flexRow alignItemsCenter",onClick:function(){g({showTelDialog:!0})}},e.createElement(V.Z,{icon:"textsms1",className:"Font18 mRight6"})," ",_l("\u77ED\u4FE1\u8BBE\u7F6E")),e.createElement("div",{className:"line mTop24"}),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u90AE\u4EF6\u901A\u77E5")),e.createElement("div",{className:"mTop6 Gray_9e"},md.global.Config.IsPlatformLocal?_l("\u6CE8\u518C\u5F00\u542F\u5BA1\u6838\u540E\uFF0C\u5BA1\u6838\u7ED3\u679C(\u901A\u8FC7\u3001\u62D2\u7EDD)\u4F1A\u90AE\u4EF6\u544A\u77E5\u6CE8\u518C\u7528\u6237\uFF1B\u5916\u90E8\u95E8\u6237\u7C7B\u578B\u8BBE\u4E3A\u79C1\u6709\u540E\u518D\u6DFB\u52A0\u7528\u6237\u540E\u4E5F\u4F1A\u53D1\u9001\u9080\u8BF7\u901A\u77E5\uFF0C\u652F\u6301\u5BF9\u90AE\u4EF6\u5185\u5BB9\u81EA\u5B9A\u4E49\uFF1B\u9488\u5BF9\u76F8\u5E94\u7684\u90AE\u4EF6\u4F1A\u8FDB\u884C\u6536\u8D39\u6536\u8D39\u6807\u51C6\uFF1A\u90AE\u4EF60.03\u5143/\u5C01\uFF0C\u81EA\u52A8\u4ECE\u4F01\u4E1A\u8D26\u52A1\u4E2D\u5FC3\u6263\u8D39\u3002"):_l("\u6CE8\u518C\u5F00\u542F\u5BA1\u6838\u540E\uFF0C\u5BA1\u6838\u7ED3\u679C(\u901A\u8FC7\u3001\u62D2\u7EDD)\u4F1A\u90AE\u4EF6\u544A\u77E5\u6CE8\u518C\u7528\u6237\uFF1B\u5916\u90E8\u95E8\u6237\u7C7B\u578B\u8BBE\u4E3A\u79C1\u6709\u540E\u518D\u6DFB\u52A0\u7528\u6237\u540E\u4E5F\u4F1A\u53D1\u9001\u9080\u8BF7\u901A\u77E5\uFF0C\u652F\u6301\u5BF9\u90AE\u4EF6\u5185\u5BB9\u81EA\u5B9A\u4E49\u3002")),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u53D1\u4EF6\u4EBA\u540D\u79F0")),e.createElement("input",{type:"text",className:"sign mTop6",placeholder:_l("\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u540D\u79F0"),value:i,onFocus:function(){In=i},maxLength:"32",onBlur:function(C){if(!C.target.value.trim())return u(In),d({portalSetModel:(0,v.default)({},E,{emailSignature:In})}),alert(_l("\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u540D\u79F0"),3);d({portalSetModel:(0,v.default)({},E,{emailSignature:C.target.value.trim()})})},onChange:function(C){u(C.target.value),d({portalSetModel:(0,v.default)({},E,{emailSignature:C.target.value})})}}),e.createElement("h6",{className:"Font16 Gray Bold mBottom0 mTop24"},_l("\u5185\u5BB9")),e.createElement("div",{className:"sysBtn flexRow alignItemsCenter",onClick:function(){g({showEmailDialog:!0})}},e.createElement(V.Z,{icon:"email",className:"Font18 mRight6",style:{marginTop:-3}})," ",_l("\u90AE\u4EF6\u8BBE\u7F6E"))),h&&e.createElement(Vo,(0,v.default)({},o,{sign:l,onCancel:function(){g({showTelDialog:!1})}})),S&&e.createElement(_o,(0,v.default)({},o,{onCancel:function(){g({showEmailDialog:!1})}})))}var Ko=(0,Q.Z)([`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-flow: column nowrap;
  width: 640px;
  background: #fff;
  .cover {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 640px;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }
  .header {
    padding: 24px 24px 16px;
    display: flex;
    & > span {
      flex: 1;
      font-size: 17px;
      font-weight: 500;
    }
  }
  .conTab {
    border-bottom: 1px solid #eaeaea;
    padding-left: 8px;
    li {
      display: inline-block;
      margin: 0 16px;
      position: relative;
      padding-bottom: 13px;
      font-size: 14px;
      font-weight: 500;
      color: #757575;
      &:hover {
        color: #2196f3;
      }
      &.current {
        color: #2196f3;
        &::before {
          content: ' ';
          width: 100%;
          height: 3px;
          background: #2196f3;
          border-radius: 2px;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
`],[`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-flow: column nowrap;
  width: 640px;
  background: #fff;
  .cover {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 640px;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }
  .header {
    padding: 24px 24px 16px;
    display: flex;
    & > span {
      flex: 1;
      font-size: 17px;
      font-weight: 500;
    }
  }
  .conTab {
    border-bottom: 1px solid #eaeaea;
    padding-left: 8px;
    li {
      display: inline-block;
      margin: 0 16px;
      position: relative;
      padding-bottom: 13px;
      font-size: 14px;
      font-weight: 500;
      color: #757575;
      &:hover {
        color: #2196f3;
      }
      &.current {
        color: #2196f3;
        &::before {
          content: ' ';
          width: 100%;
          height: 3px;
          background: #2196f3;
          border-radius: 2px;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
`]),qo=(0,Q.Z)([`
  background: #fff;
  position: absolute;
  bottom: 0;
  padding: 16px 24px;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  .saveBtn {
    display: inline-block;
    height: 36px;
    padding: 0 24px;
    border-radius: 3px;
    box-sizing: border-box;
    line-height: 36px;
    cursor: pointer;
    background: #2196f3;
    color: #fff;
    &:hover {
      background-color: #1565c0;
    }
    &.disable {
      opacity: 0.5;
    }
  }
  .cancelBtn {
    display: inline-block;
    height: 36px;
    border-radius: 3px;
    box-sizing: border-box;
    line-height: 36px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #2196f3;
    color: #2196f3;
    margin-left: 16px;
    padding: 0 32px;
    width: auto;
  }
  .closePortal {
    line-height: 36px;
    color: #9e9e9e;
    &:hover {
      color: #f44336;
    }
  }
`],[`
  background: #fff;
  position: absolute;
  bottom: 0;
  padding: 16px 24px;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  .saveBtn {
    display: inline-block;
    height: 36px;
    padding: 0 24px;
    border-radius: 3px;
    box-sizing: border-box;
    line-height: 36px;
    cursor: pointer;
    background: #2196f3;
    color: #fff;
    &:hover {
      background-color: #1565c0;
    }
    &.disable {
      opacity: 0.5;
    }
  }
  .cancelBtn {
    display: inline-block;
    height: 36px;
    border-radius: 3px;
    box-sizing: border-box;
    line-height: 36px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #2196f3;
    color: #2196f3;
    margin-left: 16px;
    padding: 0 32px;
    width: auto;
  }
  .closePortal {
    line-height: 36px;
    color: #9e9e9e;
    &:hover {
      color: #f44336;
    }
  }
`]),$o=W.ZP.div(Ko),el=W.ZP.div(qo),nl=[_l("\u57FA\u7840\u8BBE\u7F6E"),_l("\u4FE1\u606F\u6536\u96C6"),_l("\u81EA\u5B9A\u4E49\u767B\u5F55\u754C\u9762"),_l("\u6D88\u606F\u8BBE\u7F6E")],tl=[Ka,ko,Wo,Xo],al=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.closeSetFn=function(t){if(n.state.hasChange)return he.Z.confirm({title:_l("\u60A8\u662F\u5426\u4FDD\u5B58\u5F53\u524D\u9875\u7684\u66F4\u6539"),okText:_l("\u4FDD\u5B58"),width:440,description:_l("\u5F53\u524D\u6709\u5C1A\u672A\u4FDD\u5B58\u7684\u66F4\u6539\uFF0C\u60A8\u5728\u79BB\u5F00\u5F53\u524D\u9875\u9762\u524D\u662F\u5426\u9700\u8981\u4FDD\u5B58\u8FD9\u4E9B\u66F4\u6539\u3002"),onOk:function(){n.saveRef&&$(n.saveRef).click()},onCancel:function(){n.setState({hasChange:!1},function(){t&&t()})}});t&&t()},n.closePortal=function(){return he.Z.confirm({title:_l("\u5173\u95ED\u540E\u6240\u6709\u4EBA\u5C06\u4E0D\u80FD\u518D\u8BBF\u95EE\u95E8\u6237"),okText:_l("\u5173\u95ED\u95E8\u6237"),width:480,onOk:function(){n.props.closePortal()},buttonType:"danger"})},n.editPortal=function(t){var r=n.state.portalSet,l=r===void 0?{}:r,s=n.props,c=s.projectId,p=s.closeSet,i=l.portalSetModel,u=i===void 0?{}:i,f=l.controlTemplate,x=f===void 0?{}:f,E=l.authorizerInfo,m=E===void 0?{}:E,b=l.epDiscussWorkFlow,A=b===void 0?{}:b,k=(0,Gn.s)(((D().get(md,["global","Account","projects"])||[]).find(function(Y){return Y.projectId===c})||{}).companyName),S=u.pageTitle,h=S===void 0?"":S,g=u.smsSignature,I=g===void 0?k:g,C=u.allowUserType,N=u.noticeScope,T=N===void 0?{}:N,R=u.pageMode,y=u.backGroundType,Z=u.backColor,O=u.logoImagePath,U=u.backImagePath,G=u.appId,H=u.customizeName;if(I=I.replace(/\s*/g,""),!H)return alert(_l("\u8BF7\u8F93\u5165\u5916\u90E8\u95E8\u6237\u540D\u79F0"),3);if(!h)return alert(_l("\u8BF7\u8F93\u5165\u767B\u5F55\u9875\u540D\u79F0"),3);if(!I)return alert(_l("\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D"),3);if(!/^[\u4E00-\u9FA5A-Za-z]+$/.test(I))return alert(_l("\u77ED\u4FE1\u7B7E\u540D\u53EA\u652F\u6301\u4E2D\u82F1\u6587"),3);if((0,je.wz)(I)>16)return alert(_l("\u77ED\u4FE1\u7B7E\u540D\u6700\u591A\u53EA\u80FD16\u4E2A\u5B57\u8282"),3);if(D().get(u,"registerInfo.enable")&&!D().get(u,"registerInfo.startTime")&&!D().get(u,"registerInfo.endTime"))return alert(_l("\u5DF2\u5F00\u542F\u5916\u90E8\u7528\u6237\u6CE8\u518C\u5F00\u59CB/\u505C\u6B62\u65F6\u95F4\uFF0C\u4F46\u672A\u9009\u62E9\u5F00\u59CB/\u505C\u6B62\u65F6\u95F4"),3);if(x.controls.filter(function(Y){return!Y.controlName}).length!==0)return alert(_l("\u7528\u6237\u5217\u8868\u4FE1\u606F\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),3);t||n.setState({saveLoading:!0}),ue.Z.editPortalSet({appId:G,portalSet:(0,v.default)({},D().pick(u,["inviteSms","refusedSms","approvedSms","termsAndAgreementEnable","userAgreement","privacyTerms","customizeName","exAccountDiscussEnum","allowExAccountDiscuss","approved","loginMode","registerMode","subscribeWXOfficial","emailSignature","approvedEmail","refusedEmail","inviteEmail","twoAuthenticationEnabled","registerInfo","watermark","internalControls","externalControls"]),{epDiscussWorkFlow:A,appId:G,allowUserType:C,noticeScope:T,wxAppId:m.appId,pageTitle:h,logoImageBucket:4,logoImagePath:O,pageMode:R,backGroundType:y,backColor:Z,backImageBucket:4,backImagePath:U,smsSignature:I}),worksheetControls:(0,v.default)({},x,{controls:x.controls.filter(function(Y){return!!Y.type}),appId:G})}).then(function(Y){Y.success?(n.props.onChangePortal(Y.portalSetModelDTO),n.setState({hasChange:!1,saveLoading:!1}),t||(alert(_l("\u4FDD\u5B58\u6210\u529F")),p())):alert(_l("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)},function(){n.setState({saveLoading:!1})})},n.state={type:0,saveLoading:!1,hasChange:!1,portalSet:{}},n.saveRef=null,n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props.portalSet,t=n===void 0?{}:n;this.setState({portalSet:t})}},{key:"componentWillReceiveProps",value:function(n,t){D().isEqual(this.props.portalSet,n.portalSet)||this.setState({portalSet:n.portalSet})}},{key:"render",value:function(){var n=this,t=this.props,r=t.show,l=t.closeSet,s=t.getControls,c=t.appId,p=this.state,i=p.type,u=p.portalSet,f=u===void 0?{}:u,x=tl[i];return e.createElement(bt(),{component:"div",transitionName:"roleSettingSlide",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},r?e.createElement($o,{className:""},e.createElement("div",{className:"header"},e.createElement("span",{className:""},_l("\u95E8\u6237\u8BBE\u7F6E")),e.createElement(V.Z,{icon:"close",className:"Right LineHeight25 Gray_9 Hand Font22 ThemeHoverColor3",onClick:function(){n.closeSetFn(function(){l()})}})),e.createElement("ul",{className:"conTab"},nl.map(function(E,m){return e.createElement("li",{className:M()("Hand",{current:m===i}),onClick:function(){n.setState({type:m})}},E)})),e.createElement(x,(0,v.default)({},this.props,{portalSet:f||{},onChangePortalSet:function(m){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;n.setState({hasChange:b,portalSet:(0,v.default)({},f,m)})},onSave:function(){n.editPortal(!0)},onChangeImg:function(m){n.setState({hasChange:!0,portalSet:(0,v.default)({},n.state.portalSet,{portalSetModel:(0,v.default)({},n.state.portalSet.portalSetModel,m)})})}})),e.createElement(el,{className:"Con"},e.createElement("span",{ref:function(m){n.saveRef=m},className:M()("saveBtn Hand",{disable:this.state.name===""||this.state.saveLoading}),onClick:function(){n.state.name===""||n.state.saveLoading||n.editPortal()}},_l("\u4FDD\u5B58\u8BBE\u7F6E")),e.createElement("span",{className:"cancelBtn Hand",onClick:function(){n.closeSetFn(function(){return l()})}},_l("\u53D6\u6D88")),e.createElement("span",{className:"closePortal Hand Right Bold",onClick:this.closePortal},_l("\u5173\u95ED\u95E8\u6237"))),e.createElement("div",{className:"cover"})):null)}}]),a}(e.Component),ol=function(a){return{portal:a.portal,visible:a.chat.visible,appPkg:a.appPkg}},ll=function(a){return(0,Me.DE)(He,a)};const rl=(0,Oe.$j)(ol,ll)(al);var yt=w(97553),il=(0,Q.Z)([`
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 100%;
  animation: circle infinite 0.75s linear;
  display: inline-block;
  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`],[`
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 100%;
  animation: circle infinite 0.75s linear;
  display: inline-block;
  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`]),sl=(0,Q.Z)([`
  .urlPre {
    background: #dddddd;
    border: 1px solid #ddd;
    line-height: 34px;
    padding: 0 10px;
    border-radius: 3px 0 0 3px;
    // width: 197px;
  }
  input {
    border-radius: 0 3px 3px 0;
    border: 1px solid #ddd;
    line-height: 34px;
    padding: 0 5px;
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .errTxt {
    // margin-left: 197px;
  }
`],[`
  .urlPre {
    background: #dddddd;
    border: 1px solid #ddd;
    line-height: 34px;
    padding: 0 10px;
    border-radius: 3px 0 0 3px;
    // width: 197px;
  }
  input {
    border-radius: 0 3px 3px 0;
    border: 1px solid #ddd;
    line-height: 34px;
    padding: 0 5px;
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .errTxt {
    // margin-left: 197px;
  }
`]),dl=W.ZP.div(il),cl=W.ZP.div(sl);function pl(o){var a=o.onOk,d=o.onCancel,n=o.urlPre,t=o.appId,r=(0,e.useRef)(null),l=(0,qn.Z)({urlSuffix:o.urlSuffix,loading:!1,errStr:""}),s=(0,B.Z)(l,2),c=s[0],p=c.urlSuffix,i=c.loading,u=c.errStr,f=s[1],x=function(b){!b.match(/[\d|\w]/g)||b.match(/[\d|\w]/g).length<4?f({errStr:_l("\u81F3\u5C11\u5305\u542B4\u4F4D\u5B57\u6BCD\u6216\u6570\u5B57")}):/^[a-zA-Z0-9-]+$/g.test(b)?/^[^-].+[^-]$/.test(b)?f({errStr:""}):f({errStr:_l("\u4E0D\u80FD\u4EE5\u4E2D\u5212\u7EBF\u5F00\u5934\u6216\u7ED3\u675F")}):f({errStr:_l("\u53EA\u80FD\u8F93\u5165\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u4E2D\u5212\u7EBF")})},E=D().debounce(function(m){ue.Z.editCustomAddressSuffix({appId:t,customAddressSuffix:p}).then(function(b){switch(f({loading:!1}),b.resultEnum){case 1:m&&m(b.portalUrl);break;case 2:f({errStr:_l("\u6B64\u540D\u79F0\u5DF2\u88AB\u5360\u7528")});break;case 3:f({errStr:_l("\u6B64\u540D\u79F0\u548C\u7CFB\u7EDF\u5730\u5740\u51B2\u7A81\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165")});break;default:alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3);break}})},500);return e.createElement(he.Z,{title:_l("\u81EA\u5B9A\u4E49\u57DF\u540D"),className:M()(""),headerClass:"",bodyClass:"",onCancel:d,visible:o.show,width:640,footer:e.createElement(e.Fragment,null,e.createElement(yt.ZP,{type:"link",onClick:d},_l("\u53D6\u6D88")),e.createElement(yt.ZP,{className:M()({Alpha5:!!u||i}),onClick:function(){if(o.urlSuffix===p)return d();if(!u)f({loading:!0}),E(function(b){a(p,b)});else{alert(_l("\u8BF7\u6B63\u786E\u8F93\u5165\u540E\u7F00"),2);return}}},i?e.createElement(dl,{class:"loading"}):_l("\u786E\u8BA4")))},e.createElement(cl,null,e.createElement("p",{className:"Gray_75"},_l("\u53EF\u5B9A\u4E49\u57DF\u540D\u540E\u7F00\uFF0C\u652F\u6301\u8F93\u5165\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E2D\u5212\u7EBF")),e.createElement("div",{className:"urlInput flexRow"},e.createElement("span",{className:"urlPre"},n),e.createElement("input",{className:"flex",value:p,maxLength:"60",ref:r,onChange:function(b){f({urlSuffix:b.target.value.trim(),errStr:""})},onBlur:function(b){b.target.value.trim()&&x(p)},onKeyUp:function(b){f({urlSuffix:b.target.value.replace(/[^\w-]|_/gi,"")})}})),!!u&&e.createElement("span",{className:"Red errTxt mTop5 InlineBlock"},u)))}var ul=w(40516),oc=w(42586),fl=w(69843),lc=w(31277),ml=w(31929),rc=w(80176),gl=w(2307),hl=(0,Q.Z)([`
  .userImgBox {
    img {
      height: 22px;
    }
    .name {
      word-wrap: break-word;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
    }
  }
  .ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after,
  .ant-table-ping-right .ant-table-cell-fix-right-first::after,
  .ant-table-ping-right .ant-table-cell-fix-right-last::after,
  .ant-table-ping-left .ant-table-cell-fix-left-first::after,
  .ant-table-ping-left .ant-table-cell-fix-left-last::after {
    box-shadow: none;
  }
  .ant-table-sticky-scroll {
    display: none;
  }
  .linelimit,
  .linelimitcomp:not(.singleLine) {
    display: block;
  }
  .ant-pagination {
    margin: 20px 20px 0;
    text-align: center;
  }
  .ant-table-expanded-row-fixed {
    height: 360px;
  }
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr {
    .tableCellPortal {
      text-overflow: ellipsis;
      word-wrap: break-word;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 100%;
    }
    th,
    td {
      height: 40px;
      .editableCellCon {
        padding: 0 !important;
      }
      .ming.Dropdown.disabled,
      .dropdownTrigger.disabled {
        background-color: transparent;
      }
      .ming.Dropdown,
      .dropdownTrigger {
        display: flex;
        .Dropdown--input {
          padding: 0;
          display: flex;
          width: 100%;
          .Dropdown--placeholder,
          .value {
            flex: 1;
          }
          .icon {
            line-height: 20px;
          }
        }
      }
    }
  }

  .ant-table-tbody,
  .ant-table-header {
    & > tr.ant-table-row-selected {
      &:hover > td {
        background: #fafafa;
      }
    }
    input[type='radio'],
    input[type='checkbox'],
    .ant-table-cell-scrollbar {
      display: none !important;
      width: 0 !important;
    }
    .cellOptions {
      max-width: 100%;
      .cellOption {
        max-width: 100%;
        margin-bottom: 0px;
      }
    }
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: #fff;
  }
`],[`
  .userImgBox {
    img {
      height: 22px;
    }
    .name {
      word-wrap: break-word;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
    }
  }
  .ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after,
  .ant-table-ping-right .ant-table-cell-fix-right-first::after,
  .ant-table-ping-right .ant-table-cell-fix-right-last::after,
  .ant-table-ping-left .ant-table-cell-fix-left-first::after,
  .ant-table-ping-left .ant-table-cell-fix-left-last::after {
    box-shadow: none;
  }
  .ant-table-sticky-scroll {
    display: none;
  }
  .linelimit,
  .linelimitcomp:not(.singleLine) {
    display: block;
  }
  .ant-pagination {
    margin: 20px 20px 0;
    text-align: center;
  }
  .ant-table-expanded-row-fixed {
    height: 360px;
  }
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr {
    .tableCellPortal {
      text-overflow: ellipsis;
      word-wrap: break-word;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 100%;
    }
    th,
    td {
      height: 40px;
      .editableCellCon {
        padding: 0 !important;
      }
      .ming.Dropdown.disabled,
      .dropdownTrigger.disabled {
        background-color: transparent;
      }
      .ming.Dropdown,
      .dropdownTrigger {
        display: flex;
        .Dropdown--input {
          padding: 0;
          display: flex;
          width: 100%;
          .Dropdown--placeholder,
          .value {
            flex: 1;
          }
          .icon {
            line-height: 20px;
          }
        }
      }
    }
  }

  .ant-table-tbody,
  .ant-table-header {
    & > tr.ant-table-row-selected {
      &:hover > td {
        background: #fafafa;
      }
    }
    input[type='radio'],
    input[type='checkbox'],
    .ant-table-cell-scrollbar {
      display: none !important;
      width: 0 !important;
    }
    .cellOptions {
      max-width: 100%;
      .cellOption {
        max-width: 100%;
        margin-bottom: 0px;
      }
    }
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: #fff;
  }
`]),vl=W.ZP.div(hl);function xl(o){var a=(0,e.useState)(o.pageSize||10),d=(0,B.Z)(a,2),n=d[0],t=d[1],r=o.onOk,l=o.type,s=o.clickRow,c=o.portal,p=o.noShowCheck,i=o.scrolly,u=(0,e.useState)([]),f=(0,B.Z)(u,2),x=f[0],E=f[1],m=(0,e.useState)([]),b=(0,B.Z)(m,2),A=b[0],k=b[1];(0,e.useEffect)(function(){E(o.list||[]),k(o.columns||[])},[o.list,o.columns]);var S=function(){return e.createElement("div",{className:"emptyCon"},e.createElement("div",{className:"TxtCenter"},e.createElement("i",{class:"iconBox mBottom12"}),e.createElement("span",{class:"Gray_9e Block mBottom20 TxtCenter Font17 Gray_9e"},_l("\u6682\u65E0\u6570\u636E"))))};return e.createElement(vl,null,e.createElement(ml.default,{renderEmpty:S},e.createElement(gl.Z,{rowSelection:p?null:{selectedRowKeys:o.selectedIds,onChange:function(g){o.setSelectedIds(g)},fixed:!0},columns:A.map(function(h,g){return(0,v.default)({width:120},h,{key:g,dataIndex:h.id,title:h.name,wordWrap:"break-word",wordBreak:"break-word"})}),sticky:!0,loading:c.loading,dataSource:x,bordered:!0,size:"small",locale:_l("\u6682\u65E0\u6570\u636E"),rowKey:function(g){return g.rowid},pagination:!1,scroll:{x:o.width-1},showSorterTooltip:!1,onChange:function(g,I,C){o.handleChangeSortHeader(C)},onRow:function(g){return{onClick:function(C){C.target.className.indexOf("checkbox")>=0||s&&s(A.map(function(N){return(0,v.default)({},N,{value:g[N.controlId]})}),g.rowid)}}}})),l!==2&&o.portal.count>n&&e.createElement(fl.default,{showSizeChanger:!1,pageSize:n,total:o.portal.count,current:o.pageIndex,onChange:function(g){o.changePage(g)}}))}var El=function(a){return{portal:a.portal}},Cl=function(a){return(0,Me.DE)(He,a)};const bl=(0,Oe.$j)(El,Cl)(xl);var Il=w(40240),Al=(0,Q.Z)([`
  .con {
    min-height: 400px;
    padding-bottom: 20px;
    overflow: auto;
  }
  .topAct {
    padding-bottom: 16px;
    .searchWrapper {
      width: 230px;
      height: 32px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      vertical-align: middle;
      .cursorText {
        height: 30px;
        border: none;
      }

      display: flex;
      padding: 0 5px;
      input {
        flex: 1;
        width: 178px;
        border: none;
        line-height: 32px;
        box-sizing: border-box;
        vertical-align: top;
      }
      i::before {
        line-height: 32px;
      }
      .none {
        display: none;
      }
    }
    .ant-picker {
      width: 410px;
      .ant-picker-input {
        height: 32px;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        padding: 0 15px;
      }
    }
  }
`],[`
  .con {
    min-height: 400px;
    padding-bottom: 20px;
    overflow: auto;
  }
  .topAct {
    padding-bottom: 16px;
    .searchWrapper {
      width: 230px;
      height: 32px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      vertical-align: middle;
      .cursorText {
        height: 30px;
        border: none;
      }

      display: flex;
      padding: 0 5px;
      input {
        flex: 1;
        width: 178px;
        border: none;
        line-height: 32px;
        box-sizing: border-box;
        vertical-align: top;
      }
      i::before {
        line-height: 32px;
      }
      .none {
        display: none;
      }
    }
    .ant-picker {
      width: 410px;
      .ant-picker-input {
        height: 32px;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        padding: 0 15px;
      }
    }
  }
`]),Sl=(0,Il.Z)(bl),wl=W.ZP.div(Al),_n=null;function kl(o){var a=o.appId,d=(0,e.useState)(1),n=(0,B.Z)(d,2),t=n[0],r=n[1],l=(0,e.useState)(!1),s=(0,B.Z)(l,2),c=s[0],p=s[1],i=(0,e.useState)(""),u=(0,B.Z)(i,2),f=u[0],x=u[1],E=(0,e.useState)(""),m=(0,B.Z)(E,2),b=m[0],A=m[1],k=(0,e.useState)(""),S=(0,B.Z)(k,2),h=S[0],g=S[1],I=(0,e.useState)([]),C=(0,B.Z)(I,2),N=C[0],T=C[1],R=(0,e.useState)(0),y=(0,B.Z)(R,2),Z=y[0],O=y[1],U=(0,e.useState)([{id:"accountId",width:150,name:_l("\u7528\u6237"),render:function(q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.createElement("div",{className:"userImgBox"},e.createElement("span",{className:"name mLeft5"},F.log.fullname))}},{id:"mobilePhone",width:150,name:_l("\u624B\u673A\u53F7"),render:function(q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return F.log.mobilePhone}},{id:"email",width:150,name:_l("\u90AE\u7BB1"),render:function(q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return F.log.email}},{id:"userAgent",width:170,name:_l("\u7EC8\u7AEF\u5E73\u53F0"),render:function(q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return F.log.userAgent}},{id:"ip",width:150,name:_l("IP\u5730\u5740"),render:function(q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return F.log.ip}},{id:"date",name:_l("\u767B\u5F55\u65F6\u95F4"),width:170,render:function(q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return F.date}}]),G=(0,B.Z)(U,2),H=G[0],Y=G[1],J=function(){c||(p(!0),_n&&_n.abort(),_n=ue.Z.getUserActionLogs({appId:a,fullnameOrMobilePhone:f,startDate:b,endDate:h,pageIndex:t,pageSize:Ye.sk}),D().debounce(function(){_n.then(function(q){p(!1);var F=q.data,oe=F===void 0?{}:F;T(oe.list||[]),O(oe.totalCount||0)})},500)())};return(0,e.useEffect)(function(){J()},[f,b,h,t]),e.createElement(wl,null,e.createElement("div",{className:"topAct"},e.createElement("span",{className:"title InlineBlock Gray_75"},_l("\u7528\u6237")),e.createElement("div",{className:"searchWrapper InlineBlock mLeft16"},e.createElement(V.Z,{icon:"search",className:"Font18 Gray_9e"}),e.createElement("input",{type:"text",className:"cursorText",placeholder:_l("\u641C\u7D22\u7528\u6237\u540D\u79F0\u3001\u624B\u673A\u53F7\u3001\u90AE\u7BB1"),onChange:function(q){var F=D().trim(q.target.value);x(F||"")},value:f}),f&&e.createElement(V.Z,{icon:"cancel",className:"Font18 Hand Gray_9e",onClick:function(){x("")}})),e.createElement("span",{className:"Gray_75 mLeft50 InlineBlock"},_l("\u767B\u5F55\u65F6\u95F4")),e.createElement(ul.Z,{defaultValue:[],showTime:{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",onChange:function(q,F){A(!q||!q[0]?"":q[0].format("YYYY-MM-DD HH:mm")),g(!q||!q[1]?"":q[1].format("YYYY-MM-DD HH:mm"))},onOk:function(q){A(!q||!q[0]?"":q[0].format("YYYY-MM-DD HH:mm"))}})),e.createElement("div",{className:"con"},e.createElement(Sl,{columns:H,noShowCheck:!0,list:N,pageSize:Ye.sk,pageIndex:t,total:Z,changePage:function(q){r(q)}})))}var yl=function(a){return{portal:a.portal}},Nl=function(a){return(0,Me.DE)(He,a)};const Tl=(0,Oe.$j)(yl,Nl)(kl);var Bl=(0,Q.Z)([`
  padding: 16px 32px 40px;
  .timeTypeDrop {
    width: 180px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    .ming.Menu.List {
      top: 36px !important;
    }
    .Dropdown--input {
      display: flex;
      line-height: 36px;
      padding: 0 10px !important;
      .value {
        flex: 1;
      }
      i {
        &::before {
          line-height: 36px;
        }
      }
    }
  }
  .loginConsole {
    height: 32px;
    background: #2196f3;
    border-radius: 3px;
    line-height: 32px;
    color: #fff;
    font-size: 13px;
    float: right;
    padding: 0 15px;
    &:hover {
      background: #1e88e5;
    }
  }
  .registerLine,
  .loginLine {
    height: 300px;
    margin-top: 24px;
  }
`],[`
  padding: 16px 32px 40px;
  .timeTypeDrop {
    width: 180px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    .ming.Menu.List {
      top: 36px !important;
    }
    .Dropdown--input {
      display: flex;
      line-height: 36px;
      padding: 0 10px !important;
      .value {
        flex: 1;
      }
      i {
        &::before {
          line-height: 36px;
        }
      }
    }
  }
  .loginConsole {
    height: 32px;
    background: #2196f3;
    border-radius: 3px;
    line-height: 32px;
    color: #fff;
    font-size: 13px;
    float: right;
    padding: 0 15px;
    &:hover {
      background: #1e88e5;
    }
  }
  .registerLine,
  .loginLine {
    height: 300px;
    margin-top: 24px;
  }
`]),Rl=W.ZP.div(Bl),An=null,Ll=[{value:0,text:_l("\u6700\u8FD1 7 \u5929")},{value:1,text:_l("\u6700\u8FD1\u4E00\u4E2A\u6708")},{value:2,text:_l("\u6700\u8FD1\u4E00\u5B63\u5EA6")},{value:3,text:_l("\u6700\u8FD1\u534A\u5E74")},{value:4,text:_l("\u6700\u8FD1\u4E00\u5E74")}],Pn=null,Zn=null;function Dl(o){var a=o.appId,d=(0,e.useState)(!1),n=(0,B.Z)(d,2),t=n[0],r=n[1],l=(0,e.useState)(o.timeType||0),s=(0,B.Z)(l,2),c=s[0],p=s[1],i=(0,e.useState)([]),u=(0,B.Z)(i,2),f=u[0],x=u[1],E=(0,e.useState)([]),m=(0,B.Z)(E,2),b=m[0],A=m[1],k=(0,e.useRef)(null),S=(0,e.useRef)(null),h={xField:"date",yField:"value",label:{offsetY:5,position:"top"},tooltip:{fields:["date","value"],formatter:function(I){return{name:I.date,value:I.value}},showTitle:!0,title:function(I){return Cn()().format("MM\u6708DD\u65E5")+"   "+I},showContent:!0,domStyles:{"g2-tooltip-list-item":{textAlign:"left",color:"#333"},"g2-tooltip-title":{color:"#757575"}}},interactions:[{type:"marker-active"}]};return(0,e.useEffect)(function(){Promise.all([w.e(9704),w.e(2122),w.e(1119)]).then(w.bind(w,1119)).then(function(g){An=g})},[]),(0,e.useEffect)(function(){ue.Z.dateHistogram({appId:a,type:c}).then(function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=g.visitsData,C=I===void 0?{}:I,N=g.registerData,T=N===void 0?{}:N,R=[];for(var y in C)R.push({date:y,value:C[y]});R=R.sort(function(O,U){return O.date>U.date?1:-1}),x(R);var Z=[];for(var y in T)Z.push({date:y,value:T[y]});Z=Z.sort(function(O,U){return O.date>U.date?1:-1}),A(Z)})},[c]),(0,e.useEffect)(function(){var g=S.current;if(g&&(Zn&&Zn.destroy(),Zn=null,!!An)){var I=An,C=I.Line;return Zn=new C(S.current,(0,v.default)({},h,{data:f})),Zn.render()}},[c,f]),(0,e.useEffect)(function(){var g=k.current;if(g&&(Pn&&Pn.destroy(),Pn=null,!!An)){var I=An,C=I.Line;return Pn=new C(k.current,(0,v.default)({},h,{data:b})),Pn.render()}},[c,b]),e.createElement(Rl,null,e.createElement("div",null,e.createElement("span",{className:"Gray_75 LineHeight36"},_l("\u5468\u671F")),e.createElement(gn.Z,{data:Ll,value:c,className:M()("flex InlineBlock timeTypeDrop mLeft16"),onChange:function(I){p(I)}})),e.createElement("h6",{className:"mTop28 Font17"},_l("\u7528\u6237\u6CE8\u518C\u91CF")),e.createElement("div",{className:"flex registerLine",ref:k}),e.createElement("h6",{className:"mTop80 Font17"},_l("\u7528\u6237\u8BBF\u95EE\u91CF"),e.createElement("span",{className:"loginConsole Hand Bold",onClick:function(){r(!0)}},_l("\u767B\u5F55\u65E5\u5FD7"))),e.createElement("div",{className:"flex loginLine",ref:S}),t&&e.createElement(he.Z,{className:"loginInfo",width:"1000",visible:t,title:_l("\u767B\u5F55\u65E5\u5FD7"),footer:null,onCancel:function(){r(!1)}},e.createElement(Tl,{show:t,appId:a})))}var Pl=function(a){return{portal:a.portal}},Zl=function(a){return(0,Me.DE)(He,a)};const Fl=(0,Oe.$j)(Pl,Zl)(Dl);var at=w(56171),Nt=w(52698),ic=w(45142),Ol=w(40987),Ml=w(15405),Ul=w(33126),Tt=w(45100),sc=w(37974),Hl=(0,Q.Z)([`
  background: #fff;
  width: 300px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
  .addFilterCondition {
    padding: 5px 20px 20px;
  }
  .conditionItem {
    padding: 15px 20px 0;
  }
`],[`
  background: #fff;
  width: 300px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
  .addFilterCondition {
    padding: 5px 20px 20px;
  }
  .conditionItem {
    padding: 15px 20px 0;
  }
`]),Wl=(0,Ul.Z)(Ml.Z),Ql=W.ZP.div(Hl);function Gl(o){var a=o.portal,d=o.setFilter,n=a.controls,t=n===void 0?[]:n,r=a.filters,l=r===void 0?[]:r,s=(0,e.useState)(!1),c=(0,B.Z)(s,2),p=c[0],i=c[1];return e.createElement(Wl,{className:"InlineBlock filterBox TxtTop",onClickAwayExceptions:[".selectUserBox",".workSheetFilter",".addFilterPopup",".dropdownTrigger",".filterControlOptionsList",".mui-dialog-container",".mui-datetimepicker",".mui-datetimerangepicker",".worksheetFilterOperateList",".ant-picker-dropdown",".CityPicker",".CityPicker-wrapper"],onClick:function(){return i(!0)},onClickAway:function(){return i(!1)}},e.createElement(Nn.Z,{action:["click"],popupVisible:p,popup:e.createElement(Ql,{className:"workSheetFilter"},e.createElement("div",{className:"filterHeader"},_l("\u7B5B\u9009")),e.createElement(Tt.Z,{canEdit:!0,columns:t.filter(function(u){return!["avatar","firstLoginTime","roleid","status"].includes(u.alias)}),filters:l,onConditionsChange:function(f){d(f)}})),getPopupContainer:function(){return document.body},popupClassName:"filterTrigger",popupAlign:{points:["tr","br"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement(Ie.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u7B5B\u9009"))},e.createElement(V.Z,{className:"mRight12 Font16 Hand actIcon InlineBlock TxtMiddle",icon:"worksheet_filter"}))))}var zl=(0,Q.Z)([`
  textarea {
    padding: 12px 30px 12px 12px;
    resize: none;
    width: 432px;
    height: 360px;
    background: #ffffff;
    border: 1px solid #2196f3;
    border-radius: 5px;
  }
`],[`
  textarea {
    padding: 12px 30px 12px 12px;
    resize: none;
    width: 432px;
    height: 360px;
    background: #ffffff;
    border: 1px solid #2196f3;
    border-radius: 5px;
  }
`]),jl=W.ZP.div(zl);function Vl(o){var a=o.portal,d=a===void 0?{}:a,n=o.show,t=o.setShow,r=o.setTelFilters,l=o.getList,s=(0,e.useState)(d.telFilters||""),c=(0,B.Z)(s,2),p=c[0],i=c[1],u=function(x){i(x)};return e.createElement(he.Z,{className:"",width:"480",visible:n,title:e.createElement("span",{className:"Font17 Bold"},_l("\u6279\u91CF\u641C\u7D22\u624B\u673A\u53F7")),okText:_l("\u786E\u5B9A"),onCancel:function(){t(!1)},onOk:function(){r(p),l(),t(!1)}},e.createElement(jl,null,e.createElement("p",{className:"Gray_9e pAll0 mBottom10"},_l("\u901A\u8FC7\u624B\u673A\u53F7\u6279\u91CF\u641C\u7D22\u7528\u6237\uFF0C\u6BCF\u4E2A\u624B\u673A\u53F7\u5360\u4E00\u884C")),e.createElement("textarea",{onChange:function(x){return u(x.target.value)},value:p})))}var Yl=function(a){return{portal:a.portal}},Jl=function(a){return(0,Me.DE)(He,a)};const Xl=(0,Oe.$j)(Yl,Jl)(Vl);var Kl=(0,Q.Z)([`
  .mRight14 {
    margin-right: 14px;
  }
  flex: 1;
  text-align: right;
  height: 36px;
  .actIcon {
    color: #9e9e9e;
    &:hover {
      color: #2196f3;
    }
  }
  .searchTels {
    cursor: pointer;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0 4px 4px 0;
    font-size: 20px;
    color: #9e9e9e;
    line-height: 30px;
    padding: 0 6px;
  }
  i::before {
    line-height: 36px;
  }
  i {
    vertical-align: top;
  }
  .searchInputPortal {
    height: 36px;
    overflow: hidden;
    display: inline-block;
    border-radius: 3px;
    background-color: #fff;
    .inputCon {
      display: flex;
      .inputConLeft {
        line-height: 32px;
        border: 1px solid #ddd !important;
        border-radius: 4px 0 0 4px;
        flex: 1;
        padding-right: 10px;
        position: relative;
        &:hover {
          border: 1px solid #2196f3 !important;
        }
        input {
          flex: 1;
          border: none;
          line-height: 34px;
          box-sizing: border-box;
          vertical-align: top;
          padding: 0 12px;
          border-radius: 3px;
          &:-ms-input-placeholder {
            color: #ccc !important;
          }
          &::-ms-input-placeholder {
            color: #ccc;
          }
          &::placeholder {
            color: #ccc;
          }
        }
      }
      i::before {
        line-height: 34px;
      }
      .none {
        display: none;
      }
    }
  }
`],[`
  .mRight14 {
    margin-right: 14px;
  }
  flex: 1;
  text-align: right;
  height: 36px;
  .actIcon {
    color: #9e9e9e;
    &:hover {
      color: #2196f3;
    }
  }
  .searchTels {
    cursor: pointer;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0 4px 4px 0;
    font-size: 20px;
    color: #9e9e9e;
    line-height: 30px;
    padding: 0 6px;
  }
  i::before {
    line-height: 36px;
  }
  i {
    vertical-align: top;
  }
  .searchInputPortal {
    height: 36px;
    overflow: hidden;
    display: inline-block;
    border-radius: 3px;
    background-color: #fff;
    .inputCon {
      display: flex;
      .inputConLeft {
        line-height: 32px;
        border: 1px solid #ddd !important;
        border-radius: 4px 0 0 4px;
        flex: 1;
        padding-right: 10px;
        position: relative;
        &:hover {
          border: 1px solid #2196f3 !important;
        }
        input {
          flex: 1;
          border: none;
          line-height: 34px;
          box-sizing: border-box;
          vertical-align: top;
          padding: 0 12px;
          border-radius: 3px;
          &:-ms-input-placeholder {
            color: #ccc !important;
          }
          &::-ms-input-placeholder {
            color: #ccc;
          }
          &::placeholder {
            color: #ccc;
          }
        }
      }
      i::before {
        line-height: 34px;
      }
      .none {
        display: none;
      }
    }
  }
`]),ql=(0,Q.Z)([`
  background: #fff;
  width: 240px;
  padding: 5px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
  .searchWrapper {
    border-bottom: 1px solid #e0e0e0;
    margin: 8px 16px 0;
    display: flex;
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    .cursorText {
      border: none;
      flex: 1;
      margin: 0;
      padding: 0;
      max-width: 79%;
    }
    .icon {
      width: 20px;
      line-height: 38px;
      color: #bdbdbd;
    }
  }
  .listBox {
    overflow: auto;
    max-height: 844px;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .widgetList {
      padding: 8px 16px;
      &:hover {
        background: #f5f5f5;
        border-radius: 4px;
      }
      .ant-switch-small {
        min-width: 18px;
        height: 9px;
        line-height: 9px;
        vertical-align: middle;
        margin-right: 18px;
        .ant-switch-handle {
          width: 5px;
          height: 5px;
        }
        .ant-switch-inner {
          margin: 0;
        }
        &.ant-switch-checked {
          .ant-switch-handle {
            left: calc(100% - 5px - 2px);
          }
          .ant-switch-inner {
            margin: 0;
          }
        }
      }
    }
  }
`],[`
  background: #fff;
  width: 240px;
  padding: 5px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
  .searchWrapper {
    border-bottom: 1px solid #e0e0e0;
    margin: 8px 16px 0;
    display: flex;
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    .cursorText {
      border: none;
      flex: 1;
      margin: 0;
      padding: 0;
      max-width: 79%;
    }
    .icon {
      width: 20px;
      line-height: 38px;
      color: #bdbdbd;
    }
  }
  .listBox {
    overflow: auto;
    max-height: 844px;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .widgetList {
      padding: 8px 16px;
      &:hover {
        background: #f5f5f5;
        border-radius: 4px;
      }
      .ant-switch-small {
        min-width: 18px;
        height: 9px;
        line-height: 9px;
        vertical-align: middle;
        margin-right: 18px;
        .ant-switch-handle {
          width: 5px;
          height: 5px;
        }
        .ant-switch-inner {
          margin: 0;
        }
        &.ant-switch-checked {
          .ant-switch-handle {
            left: calc(100% - 5px - 2px);
          }
          .ant-switch-inner {
            margin: 0;
          }
        }
      }
    }
  }
`]),$l=(0,Q.Z)([`
  position: absolute;
  right: 0;
  font-size: 16px;
  color: #9e9e9e;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    color: #777;
  }
`],[`
  position: absolute;
  right: 0;
  font-size: 16px;
  color: #9e9e9e;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    color: #777;
  }
`]),er=W.ZP.div(Kl),nr=W.ZP.div(ql),tr=W.ZP.i($l);function ar(o){var a=o.portal,d=o.setHideIds,n=o.setKeyWords,t=o.keys,r=o.appId,l=a.showPortalControlIds,s=l===void 0?[]:l,c=a.controls,p=c===void 0?[]:c,i=a.filters,u=i===void 0?[]:i,f=a.keyWords,x=(0,e.useState)(!1),E=(0,B.Z)(x,2),m=E[0],b=E[1],A=(0,e.useState)(""),k=(0,B.Z)(A,2),S=k[0],h=k[1],g=function(){return p.filter(function(Z){return!["avatar"].includes(Z.alias)})},I=(0,e.useState)([]),C=(0,B.Z)(I,2),N=C[0],T=C[1];(0,e.useEffect)(function(){T(g()||[])},[p]);var R=function(Z){ue.Z.editViewShowControls({appId:r,controlIds:Z}).then(function(O){d(Z)})};return e.createElement(er,{className:"InlineBlock"},t.includes("search")&&e.createElement(e.Fragment,null,e.createElement("div",{className:M()("searchInputPortal InlineBlock mRight14")},e.createElement("div",{className:"inputCon"},e.createElement("div",{className:"inputConLeft"},e.createElement("input",{placeholder:_l("\u641C\u7D22"),type:"text",className:"mRight5",value:f,onKeyUp:function(Z){Z.keyCode===13&&n(Z.target.value)},onChange:function(Z){n(Z.target.value)}}),f&&e.createElement(tr,{className:"icon-cancel",onClick:function(){n("")}})),e.createElement("i",{className:M()("icon icon-lookup Font20 Hand InlineBlock actIcon searchTels ThemeHoverColor3",{}),onClick:function(){b(!0)}})))),t.includes("refresh")&&e.createElement(Ie.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u5237\u65B0"))},e.createElement(V.Z,{className:"mRight14 Font18 Hand InlineBlock actIcon",icon:"task-later",onClick:function(){o.refresh()}})),t.includes("columns")&&e.createElement(e.Fragment,null,e.createElement(Nn.Z,{action:["click"],popup:e.createElement(nr,null,e.createElement("div",{className:"searchWrapper"},e.createElement(V.Z,{icon:"search",className:"Font18"}),e.createElement("input",{type:"text",className:"cursorText",placeholder:_l("\u641C\u7D22"),onChange:function(Z){var O=D().trim(Z.target.value);O?(h(O),T(g().filter(function(U){return U.controlName.indexOf(O)>=0}))):(h(""),T(g()))},value:S||""}),S&&e.createElement(V.Z,{icon:"cancel",className:"Font18 Hand",onClick:function(){h(""),T(g())}})),e.createElement("div",{className:"listBox mTop10"},N.length>0?N.map(function(y,Z){var O=s.includes(y.controlId);return e.createElement("div",{className:"widgetList overflow_ellipsis WordBreak Hand",keyWords:"widgetList-"+Z,onClick:function(){R(O?s.filter(function(G){return G!==y.controlId}):s.concat(y.controlId))}},e.createElement(Ol.Z,{checked:O,size:"small"}),e.createElement("span",{className:"Gray_75"},e.createElement("span",{className:"Font13 Gray"},y.controlName)))}):e.createElement("div",{className:"Gray_75 TxtCenter pTop20 Font14 pBottom20"},_l("\u65E0\u76F8\u5173\u5B57\u6BB5")))),getPopupContainer:function(){return document.body},popupClassName:"filterTrigger",popupAlign:{points:["tr","br"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement(Ie.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u5217\u663E\u793A"))},e.createElement(V.Z,{className:"mRight14 Font18 InlineBlock Hand actIcon",icon:"tune"})))),t.includes("filter")&&e.createElement(Gl,o),t.includes("down")&&e.createElement(Ie.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u5BFC\u51FA\u7528\u6237"))},e.createElement(V.Z,{className:"mRight14 Font18 Hand InlineBlock actIcon",icon:"file_download",onClick:function(){o.down(!0)}})),m&&e.createElement(Xl,{setShow:function(Z){b(Z)},show:m}),o.comp&&o.comp())}var or=function(a){return{portal:a.portal}},lr=function(a){return(0,Me.DE)(He,a)};const Bt=(0,Oe.$j)(or,lr)(ar);var rr=(0,Q.Z)([`
  display: flex;
  & > span {
    line-height: 36px;
    margin-right: 16px;
  }
  .Dropdown--input {
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    display: flex;
    line-height: 36px;
    padding: 0 10px !important;
    .value {
      flex: 1;
      max-width: 100% !important;
    }
    .Dropdown--placeholder {
      flex: 1;
    }
    i {
      &::before {
        line-height: 36px;
      }
    }
  }
`],[`
  display: flex;
  & > span {
    line-height: 36px;
    margin-right: 16px;
  }
  .Dropdown--input {
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    display: flex;
    line-height: 36px;
    padding: 0 10px !important;
    .value {
      flex: 1;
      max-width: 100% !important;
    }
    .Dropdown--placeholder {
      flex: 1;
    }
    i {
      &::before {
        line-height: 36px;
      }
    }
  }
`]),ir=W.ZP.div(rr);function Rt(o){var a=o.setChangeRoleDialog,d=o.changeRoleDialog,n=o.roleList,t=n===void 0?[]:n,r=o.title,l=(0,e.useState)(""),s=(0,B.Z)(l,2),c=s[0],p=s[1];return(0,e.useEffect)(function(){p((t.find(function(i){return i.isDefault})||{}).roleId)},[t]),e.createElement(he.Z,{title:r||_l("\u9009\u62E9\u89D2\u8272"),okText:_l("\u786E\u8BA4"),cancelText:_l("\u53D6\u6D88"),className:"changeRoleDialog",headerClass:"changeRoleDialogTitle",bodyClass:"changeRoleDialogCon",onCancel:function(){a(!1)},onOk:function(){if(!c){alert(_l("\u8BF7\u9009\u62E9\u89D2\u8272"),3);return}o.onOk(c),a(!1)},visible:d,updateTrigger:"fasle"},e.createElement(ir,null,e.createElement("span",{className:""},_l("\u89D2\u8272")),e.createElement(gn.Z,{isAppendToBody:!0,placeholder:_l("\u8BF7\u9009\u62E9\u89D2\u8272"),data:t.map(function(i){return(0,v.default)({},i,{value:i.roleId,text:i.name})}),value:c,className:M()("flex InlineBlock topActDrop mLeft16"),onChange:function(u){p(u)}})))}var sr=w(70714),dr=(0,Q.Z)([`
  .listCon {
    background: #f8f8f8;
    border-radius: 6px;
    padding: 13px 16px;
    display: flex;
  }
  .down,
  .uploadUser {
    color: #2196f3;
    &:hover {
      color: #1e88e5 !important;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
`],[`
  .listCon {
    background: #f8f8f8;
    border-radius: 6px;
    padding: 13px 16px;
    display: flex;
  }
  .down,
  .uploadUser {
    color: #2196f3;
    &:hover {
      color: #1e88e5 !important;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
`]),cr=W.ZP.div(dr);function pr(o){var a=o.appId,d=o.show,n=o.setAddUserDialog,t=o.getUserList,r=o.changeIsSendMsgs,l=(0,e.useState)(o.isSendMsgs),s=(0,B.Z)(l,2),c=s[0],p=s[1],i=(0,e.useState)(""),u=(0,B.Z)(i,2),f=u[0],x=u[1],E=(0,e.useState)(""),m=(0,B.Z)(E,2),b=m[0],A=m[1],k=(0,e.useState)(!1),S=(0,B.Z)(k,2),h=S[0],g=S[1],I=function(){$("#hideUploadUser").uploadAttachment({filterExtensions:"xlsx,xls,xlsm",pluploadID:"#uploadUser",multiSelection:!1,maxTotalSize:4,folder:"addUser",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:0,checkProjectLimitFileSizeUrl:"",filesAdded:function(){g(!0)},callback:function(y){if(y.length>0){var Z=y[0];x(Z.serverName+Z.key),A(Z.originalFileName+Z.fileExt),g(!1)}}})};(0,e.useEffect)(function(){I()},[]);var C=function(){g(!0),ue.Z.editIsSendMsgs({appId:a,isSendMsgs:c}).then(function(R){r(c),ue.Z.importExAccounts({fileUrl:f,appId:a}).then(function(y){var Z=y.existedData,O=Z===void 0?[]:Z,U=y.success;if(n(!1),U&&t(),O.length>0)return alert(_l("\u6709%0\u4E2A\u7528\u6237\u4E0D\u80FD\u91CD\u590D\u9080\u8BF7",O.length),3);if(U)return alert(_l("\u9080\u8BF7\u6210\u529F"));if(!U)return alert(_l("\u9080\u8BF7\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3);g(!1)},function(){g(!1)})})},N=function(R){var y=new XMLHttpRequest;y.open("GET",R,!0),y.setRequestHeader("Authorization","md_pss_id "+(0,sr.qz)()),y.setRequestHeader("AccountId",""+md.global.Account.accountId),y.responseType="blob",y.onload=function(Z){if(y.status==200)try{var O=y.response,U="\u5916\u90E8\u7528\u6237\u5BFC\u5165\u6A21\u677F.xlsx",G=document.createElement("a"),H=URL.createObjectURL(O);G.href=H,G.download=U,G.click(),window.URL.revokeObjectURL(H)}catch(Y){}},y.send()};return e.createElement(he.Z,{className:"",width:"580",visible:d,title:e.createElement("span",{className:"Font17 Bold"},_l("\u9080\u8BF7\u7528\u6237")),okText:h?_l("\u786E\u8BA4\u9080\u8BF7..."):_l("\u786E\u8BA4\u9080\u8BF7"),onCancel:function(){n(!1)},onOk:function(){if(!h){if(!f)return alert(_l("\u8BF7\u4E0A\u4F20\u6587\u4EF6"),3);C()}}},e.createElement(cr,null,e.createElement("input",{id:"hideUploadUser",type:"file",className:"Hidden"}),e.createElement("span",{id:"uploadUser",className:"Hidden"}),e.createElement("p",{className:"Gray_9e pAll0 mBottom10"},_l("\u4E0A\u4F20\u6210\u529F\u540E\u4F1A\u53D1\u9001\u77ED\u4FE1/\u90AE\u7BB1\u9080\u8BF7\u7528\u6237\u6CE8\u518C\u5916\u90E8\u95E8\u6237"),e.createElement("br",null),_l("Excel\u8868\u683C\u7B2C\u4E00\u884C\u5FC5\u987B\u662F\u5B57\u6BB5\u540D\u79F0\uFF0C\u4E3A\u4FDD\u8BC1\u77ED\u4FE1\u53D1\u9001\u6210\u529F\u8BF7\u52A1\u5FC5\u4FDD\u8BC1\u624B\u673A\u53F7\u771F\u5B9E\u6709\u6548\uFF0C"),e.createElement("span",{className:"Hand down",onClick:function(){var R=md.global.Config.AjaxApiUrl+"Download/GetExAccountImportTemplate?appId="+a;N(R)}},_l("\u4E0B\u8F7D\u6A21\u7248")),e.createElement("br",null)),f?e.createElement(e.Fragment,null,e.createElement("div",{className:"listCon"},e.createElement("span",{className:"txt flex flexRow"},e.createElement(V.Z,{className:"Font18 TxtMiddle",type:"new_excel",style:{color:"#4CAF50"}}),e.createElement("span",{className:"mLeft8 mRight8 flex overflow_ellipsis Font13 WordBreak"}," ",b))),e.createElement(me.Z,{className:"TxtCenter InlineBlock Hand mTop10 Gray_75",text:md.global.Config.IsPlatformLocal?_l("\u9080\u8BF7\u7528\u6237\u5E76\u53D1\u9001\u77ED\u4FE1/\u90AE\u7BB1\uFF08\u77ED\u4FE10.05\u5143/\u6761\u3001\u90AE\u7BB10.03/\u5C01\uFF0C\u81EA\u52A8\u4ECE\u4F01\u4E1A\u8D26\u6237\u6263\u8D39\uFF09"):_l("\u9080\u8BF7\u7528\u6237\u5E76\u53D1\u9001\u77ED\u4FE1/\u90AE\u7BB1"),checked:c,onClick:function(R){p(!c)}})):e.createElement(e.Fragment,null,h?e.createElement(qe.Z,{size:"small",className:"TxtLeft InlineBlock"}):e.createElement(e.Fragment,null,e.createElement("div",{className:"Hand InlineBlock mTop6 uploadUser",onClick:function(){$("#uploadUser").click()}},e.createElement(V.Z,{className:"Font18 TxtMiddle mRight6",type:"cloud_upload"}),e.createElement("span",{className:""}," ",_l("\u4ECEExcel\u5BFC\u5165\u6570\u636E")))))))}var ur=function(a){return{portal:a.portal}},fr=function(a){return(0,Me.DE)(He,a)};const mr=(0,Oe.$j)(ur,fr)(pr);var gr=w(66419),hr=w(84357),dc=w(60871),vr=(0,Q.Z)([`
  .ming.Radio .Radio-box {
    margin-right: 8px;
  }
  .ming.Radio {
    margin-right: 40px;
  }
  .sendMes {
    position: absolute;
    bottom: 28px;
    left: 24px;
  }
  .add {
    width: 77px;
    height: 36px;
    line-height: 36px;
    background: #f8f8f8;
    border-radius: 3px;
    color: #2196f3;
    i {
      color: #2196f3;
      line-height: 36px;
    }
    &:hover {
      background: #f5f5f5;
    }
  }
  .row {
    margin-top: 10px;
    display: flex;
    .rowTel {
      width: 200px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      &.err {
        border: 1px solid red;
      }
    }
    .name {
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      flex: 1;
      margin-left: 16px;
      padding: 0 12px;
    }
    .role {
      width: 90px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      .Dropdown--input {
        display: flex;
        .value {
          flex: 1;
        }
        span.value,
        i {
          line-height: 26px;
        }
      }
    }
    .del {
      opacity: 0;
      margin-left: 16px;
      line-height: 36px;
      &.op0 {
        opacity: 0 !important;
      }
    }
    &:hover {
      .del {
        opacity: 1;
      }
    }
  }
`],[`
  .ming.Radio .Radio-box {
    margin-right: 8px;
  }
  .ming.Radio {
    margin-right: 40px;
  }
  .sendMes {
    position: absolute;
    bottom: 28px;
    left: 24px;
  }
  .add {
    width: 77px;
    height: 36px;
    line-height: 36px;
    background: #f8f8f8;
    border-radius: 3px;
    color: #2196f3;
    i {
      color: #2196f3;
      line-height: 36px;
    }
    &:hover {
      background: #f5f5f5;
    }
  }
  .row {
    margin-top: 10px;
    display: flex;
    .rowTel {
      width: 200px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      &.err {
        border: 1px solid red;
      }
    }
    .name {
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      flex: 1;
      margin-left: 16px;
      padding: 0 12px;
    }
    .role {
      width: 90px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      .Dropdown--input {
        display: flex;
        .value {
          flex: 1;
        }
        span.value,
        i {
          line-height: 26px;
        }
      }
    }
    .del {
      opacity: 0;
      margin-left: 16px;
      line-height: 36px;
      &.op0 {
        opacity: 0 !important;
      }
    }
    &:hover {
      .del {
        opacity: 1;
      }
    }
  }
`]),xr=W.ZP.div(vr),Er=[_l("\u624B\u673A\u9080\u8BF7"),_l("\u90AE\u7BB1\u9080\u8BF7")];function Cr(o){var a=o.appId,d=o.show,n=o.setAddUserByTelDialog,t=o.getUserList,r=o.roleList,l=o.registerMode,s=l===void 0?{}:l,c=o.roleId||r.find(function(y){return y.isDefault}).roleId,p=(0,e.useState)(!1),i=(0,B.Z)(p,2),u=i[0],f=i[1],x=(0,e.useState)([{phone:"",name:"",roleId:c}]),E=(0,B.Z)(x,2),m=E[0],b=E[1],A=(0,e.useState)(!0),k=(0,B.Z)(A,2),S=k[0],h=k[1],g=(0,e.useState)(s.phone?0:1),I=(0,B.Z)(g,2),C=I[0],N=I[1],T=function(){if(!u){f(!0);var Z=m.filter(function(O){return!!O.phone&&!!O.name&&!O.isErr}).map(function(O){return(0,v.default)({},D().pick(O,["phone","name","roleId"]))});if(Z.length<=0||m.filter(function(O){return O.isErr||!!O.phone&&!O.name}).length>0)return f(!1),alert(C===0?_l("\u8BF7\u586B\u5199\u6B63\u786E\u7684\u624B\u673A\u53F7\u6216\u59D3\u540D"):_l("\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u7BB1\u6216\u59D3\u540D"),3);ue.Z.addExAccounts({isSendMsgs:S,appId:a,addExAccountInfos:Z}).then(function(O){var U=O.existedData,G=U===void 0?[]:U,H=O.success;if(n(!1),H&&t(),G.length>0)return alert(_l("\u6709%0\u4E2A\u7528\u6237\u4E0D\u80FD\u91CD\u590D\u9080\u8BF7",G.length),3);if(H)return alert(_l("\u9080\u8BF7\u6210\u529F"));if(!H)return alert(_l("\u9080\u8BF7\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3);f(!1)},function(){f(!1)})}},R=function(){b(m.concat({phone:"",name:"",roleId:m[m.length-1].roleId||c}))};return e.createElement(he.Z,{className:"addUserByTelDialog",width:"580",visible:d,title:e.createElement("span",{className:"Font17 Bold"},_l("\u9080\u8BF7\u7528\u6237")),okText:u?_l("\u786E\u8BA4\u9080\u8BF7..."):_l("\u786E\u8BA4\u9080\u8BF7"),onCancel:function(){n(!1)},onOk:function(){T()}},e.createElement(xr,null,Er.map(function(y,Z){return!s.phone||!s.email?"":e.createElement(mn.Z,{className:"",text:y,checked:C===Z,onClick:function(){N(Z)}})}),md.global.Config.IsPlatformLocal&&e.createElement("p",{className:"mTop16"},_l("\u77ED\u4FE10.05\u5143/\u6761\u3001\u90AE\u4EF60.03/\u5C01\uFF0C\u81EA\u52A8\u4ECE\u4F01\u4E1A\u8D26\u6237\u6263\u8D39\uFF0C\u8BF7\u4FDD\u6301\u4F01\u4E1A\u8D26\u6237\u4F59\u989D\u5145\u8DB3\uFF0C\u76EE\u524D\u77ED\u4FE1\u9080\u8BF7\u5916\u90E8\u7528\u6237\u4EC5\u652F\u6301\u5927\u9646\u624B\u673A\u53F7")),e.createElement("div",{className:"list"},m.map(function(y,Z){return e.createElement("div",{className:"row"},C===0?e.createElement(gr.Z,{data:y,inputClassName:"rowTel",onChange:function(U){b(m.map(function(G,H){return H===Z?(0,v.default)({},G,{phone:U.value,isErr:!!U.isErr}):G}))},clickCallback:function(U){Z===m.length-1&&m.filter(function(G){return!G.phone}).length<3&&R()}}):e.createElement(hr.Z,{data:y,inputClassName:"rowTel pLeft8",onChange:function(U){b(m.map(function(G,H){return H===Z?(0,v.default)({},G,{phone:U.value,isErr:!!U.isErr}):G}))},clickCallback:function(U){Z===m.length-1&&m.filter(function(G){return!G.phone}).length<3&&R()}}),e.createElement("input",{className:M()("name InlineBlock mLeft10 mRight10",{noName:!y.name}),value:y.name,placeholder:_l("\u59D3\u540D"),onChange:function(U){var G=U.target.value.trim();b(m.map(function(H,Y){return Y===Z?(0,v.default)({},H,{name:G}):H}))}}),e.createElement(gn.Z,{isAppendToBody:!0,data:r.map(function(O){return(0,v.default)({},O,{value:O.roleId,text:O.name})}),value:y.roleId||c,className:M()("flex role"),onChange:function(U){b(m.map(function(G,H){return H===Z?(0,v.default)({},G,{roleId:U}):G}))}}),e.createElement(V.Z,{className:M()("Font16  del Red",{op0:Z===0,Hand:Z!==0}),icon:"trash",onClick:function(){Z!==0&&b(m.filter(function(U,G){return G!==Z}))}}))})),e.createElement("span",{className:"add mTop10 InlineBlock Hand TxtCenter Bold",onClick:function(){R()}},e.createElement(V.Z,{icon:"add Bold"}),_l("\u6DFB\u52A0")),e.createElement(me.Z,{className:"TxtCenter InlineBlock Hand Gray_75 sendMes",text:C===0?_l("\u53D1\u9001\u77ED\u4FE1\u901A\u77E5"):_l("\u53D1\u9001\u90AE\u4EF6\u901A\u77E5"),checked:S,onClick:function(Z){h(!S)}})))}var br=function(a){return{portal:a.portal}},Ir=function(a){return(0,Me.DE)(He,a)};const Ar=(0,Oe.$j)(br,Ir)(Cr);var Lt=w(88146),Fn=w(5909),Dt=w(24607),Sr=(0,Q.Z)([`
  &.uploadUser {
    padding: 6px 0;
    background: #ffffff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    opacity: 1;
    border-radius: 3px;
    .Item {
      .Item-content {
        padding-left: 32px;
      }
    }

    .icon {
      color: #9e9e9e;
    }
    span {
      line-height: 36px;
      display: inline-block;
      vertical-align: top;
    }
  }
`],[`
  &.uploadUser {
    padding: 6px 0;
    background: #ffffff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    opacity: 1;
    border-radius: 3px;
    .Item {
      .Item-content {
        padding-left: 32px;
      }
    }

    .icon {
      color: #9e9e9e;
    }
    span {
      line-height: 36px;
      display: inline-block;
      vertical-align: top;
    }
  }
`]),wr=W.ZP.div(function(o){var a=o.len;return`
  .toRole {
    color: #5a5a5a;
    &:hover {
      color: #2196f3;
    }
  }
  padding: 16px 10px 0 10px;
  .wrapTr .Dropdown--input {
    padding: 0 !important;
  }
  .wrapTr:not(.checkBoxTr):not(.optionWrapTr) {
    width: calc(calc(100% - 70px - 38px) / `+(a-1)+`);
  }
  .wrapTr.nameWrapTr {
    width: calc(calc(100% - 70px - 38px) / `+(a-1)+`); !important;
    overflow: hidden;
  }
  .moreop {
    color: #9e9e9e;
  }
  .topAct {
    padding-right:44px;
    min-height: 54px;
    padding-bottom: 16px;
    display: flex;
    justify-content: right;
    .act {
      .topActDrop {
        width: 180px;
        height: 36px;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        .Dropdown--input {
          display: flex;
          line-height: 36px;
          padding: 0 10px !important;
          .value {
            flex: 1;
          }
          i {
            &::before {
              line-height: 36px;
            }
          }
        }
      }
    }
    .toRole {
      border-radius: 3px 3px 3px 3px;
      padding: 0 12px;
      border: 1px solid #dddddd;
      line-height: 32px;
      display: inline-block;
      &:hover {
        border: 1px solid #2196f3;
        color: #2196f3;
      }
    }
    .addUser {
      height: 32px;
      overflow: hidden;
      vertical-align: top;
      line-height: 32px;
      border-radius: 3px;
      color: #fff;
      background: #2196f3;
      i::before {
        line-height: 32px;
        color: #fff;
      }
      .lAdd {
        padding-left: 12px;
        padding-right: 10px;
        border-radius: 3px 0 0 3px;
      }
      .rAdd {
        border-radius: 0 3px 3px 0;
        padding-right: 6px;
      }
      .rAdd,
      .lAdd {
        cursor: pointer;
        height: 32px;
        display: inline-block;
        background: #2196f3;
        &:hover {
          background: #1e88e5;
        }
      }
    }
    .changeRole,
    .del,
    .download {
      padding: 0 16px;
      height: 32px;
      border-radius: 3px;
      line-height: 32px;
      text-align: center;
      background: #f3faff;
      color: #2196f3;
      &:hover {
        background: #ebf6fe;
      }
    }
    .del {
      background: rgba(244, 67, 54, 0.1);
      color: rgba(244, 67, 54, 1);
      &:hover {
        background: #fee6e5;
      }
    }
  }
  .isCurmemberType {
    color: #2196f3;
  }
  .topActDrop .Dropdown--input {
    display: flex;
    align-items: center;
    & > span.value {
      display: inline-block;
      flex: 1;
    }
    .icon {
      display: block;
    }
  }
`}),kr=W.ZP.div(Sr),ot=[{value:"1",text:_l("\u6B63\u5E38")},{value:"4",text:_l("\u505C\u7528")},{value:"5",text:_l("\u672A\u6FC0\u6D3B")}];function yr(o){var a=o.portal,d=a===void 0?{}:a,n=o.setList,t=o.setControls,r=o.updateListByStatus,l=o.setCount,s=o.appId,c=o.changePageIndex,p=o.getList,i=o.getCount,u=o.setKeyWords,f=o.setFilter,x=o.updateListByRoleid,E=o.setHideIds,m=o.setFastFilters,b=o.setBaseInfo,A=o.setSortControls,k=o.handleChangeSort,S=o.setTelFilters,h=o.commonCount,g=o.portalSetModel,I=o.setQuickTag,C=o.canEditApp,N=o.roleId,T=d.roleList,R=T===void 0?[]:T,y=d.controls,Z=y===void 0?[]:y,O=d.showPortalControlIds,U=d.list,G=d.pageIndex,H=d.keyWords,Y=d.baseInfo,J=Y===void 0?{}:Y,le=d.fastFilters,q=le===void 0?[]:le,F=d.filters,oe=d.telFilters,xe=J.isSendMsgs,Xe=(0,e.useState)(!1),Ne=(0,B.Z)(Xe,2),te=Ne[0],ee=Ne[1],ce=(0,e.useState)(!1),fe=(0,B.Z)(ce,2),Ue=fe[0],Fe=fe[1],$e=(0,e.useState)(!0),rn=(0,B.Z)($e,2),Ge=rn[0],en=rn[1],sn=(0,e.useState)(!1),Ae=(0,B.Z)(sn,2),pe=Ae[0],Re=Ae[1],Ke=(0,e.useState)(!1),xn=(0,B.Z)(Ke,2),pn=xn[0],dn=xn[1],un=(0,e.useState)(!1),ve=(0,B.Z)(un,2),de=ve[0],De=ve[1],Pe=(0,e.useState)([]),ie=(0,B.Z)(Pe,2),L=ie[0],P=ie[1],X=(0,e.useState)([]),K=(0,B.Z)(X,2),ne=K[0],ae=K[1],Ee=(0,e.useState)(""),nn=(0,B.Z)(Ee,2),tn=nn[0],cn=nn[1],on=(0,e.useState)(""),En=(0,B.Z)(on,2),zd=En[0],aa=En[1],ut=(0,e.useRef)(),ft=(0,e.useRef)();(0,e.useEffect)(function(){ut.current="",ft.current={}},[]),(0,e.useEffect)(function(){aa((o.portal.fastFilters.find(function(se){return se.controlId==="portal_status"})||{}).value||""),ut.current=(o.portal.fastFilters.find(function(se){return se.controlId==="portal_status"})||{}).value||"",P([])},[o.portal.fastFilters]);var jd=(0,e.useState)([]),oa=(0,B.Z)(jd,2),la=oa[0],Vd=oa[1];(0,e.useEffect)(function(){f([]),u(""),A([]),S("")},[]),(0,e.useEffect)(function(){o.version&&Yd()},[o.version]),(0,e.useEffect)(function(){D().isEqual(ft.current,{keyWords:H,filters:F,telFilters:oe})||(c(1),Sn(),ft.current={keyWords:H,filters:F,telFilters:oe})},[H,F,oe]);var Yd=function(){ue.Z.getViewShowControls({appId:s}).then(function(z){var re=z.controls,Te=z.showControlIds,Ze=Te===void 0?[]:Te;E(Ze),t(re)})},Sn=function(){en(!0),i(s),p(0,function(){en(!1)})};(0,e.useEffect)(function(){var se=[];Z.map(function(z){return z.controlId==="portal_email"?(0,v.default)({},z,{row:1}):z}).sort(function(z,re){return z.row-re.row}).filter(function(z){return!["portal_avatar","partal_id"].includes(z.controlId)}).map(function(z){if(z.controlId==="portal_name")se.push((0,v.default)({},z,{id:z.controlId,className:"nameWrapTr",name:_l("\u7528\u6237"),minW:240,render:function(Ze,Le,Ve){return e.createElement("div",{className:"userImgBox Hand flex overflowHidden"},e.createElement("span",{className:"name overflow_ellipsis Block TxtLeft breakAll"},Le.portal_name))}}));else if(z.controlId==="portal_mobile")se.push((0,v.default)({},z,{id:z.controlId,name:_l("\u624B\u673A\u53F7")}));else if(z.controlId==="portal_email")se.push((0,v.default)({},z,{id:z.controlId,name:_l("\u90AE\u7BB1"),render:function(Ze,Le,Ve){return e.createElement("div",{className:"flex overflowHidden"},e.createElement("div",{className:"overflow_ellipsis Block breakAll",title:Le.portal_email},Le.portal_email))}}));else if(z.controlId==="portal_role")se.push((0,v.default)({},z,{id:z.controlId,name:_l("\u89D2\u8272"),render:function(Ze,Le,Ve){var _e="";try{var fn=safeParseArray(Le.portal_role);_e=fn[0]||""}catch(da){_e=""}return(R.find(function(da){return da.roleId===_e})||{}).name}}));else if(z.controlId==="portal_status")se.push((0,v.default)({},z,{id:z.controlId,name:_l("\u72B6\u6001"),renderHeader:function(){return e.createElement(e.Fragment,null,e.createElement(gn.Z,{isAppendToBody:!0,data:[{value:"",text:"\u6240\u6709\u72B6\u6001"}].concat(ot),value:zd,renderValue:_l("\u72B6\u6001"),menuClass:"Width120",className:M()("InlineBlock topActDrop",{isCurmemberType:!!ut.current}),onChange:function(Le){aa(Le),m({controlId:"portal_status",value:Le,DataType:6,SpliceType:1,FilterType:2,DateRange:0,DateRangeType:1})}}))},render:function(Ze,Le,Ve){var _e=safeParseArray(Le.portal_status)[0];return _e==="5"?e.createElement("span",{className:"Gray_9e"},_l("\u672A\u6FC0\u6D3B")):(ot.filter(function(fn){return fn.value+""!="5"}).find(function(fn){return fn.value===_e})||{}).text}}));else{var re=[15,16].includes(z.type)?{minW:130}:{};se.push((0,v.default)({},z,re,{id:z.controlId,name:z.controlName,className:[15,16].includes(z.type)?"timeTr":"",sorter:[15,16].includes(z.type),render:function(Ze,Le,Ve){return e.createElement("div",{className:"ellipsis TxtMiddle"},(0,Ye.IY)((0,v.default)({},z,{value:Le[z.controlId]})))}}))}}),Vd(se)},[Z,O,R]);var Jd=(0,e.useState)([]),ra=(0,B.Z)(Jd,2),mt=ra[0],Xd=ra[1];(0,e.useEffect)(function(){Xd(la.filter(function(se){return O.includes(se.id)}).concat({id:"option",className:"optionWrapTr",name:"",render:function(z,re,Te){var Ze=[],Le=safeParseArray(re.portal_status)[0];return Le==="5"?Ze=[{value:"6",text:_l("\u91CD\u65B0\u9080\u8BF7")},{value:"7",text:_l("\u53D6\u6D88\u9080\u8BF7\u5E76\u79FB\u9664")}]:Ze=[{value:"8",text:_l("\u4FEE\u6539\u89D2\u8272")}].concat(ot,[{value:"9",text:e.createElement("span",{className:"Red"},_l("\u6CE8\u9500"))}]).filter(function(Ve){return Ve.value+""!="5"}).map(function(Ve){return Ve.value==="1"?(0,v.default)({},Ve,{text:_l("\u542F\u7528%15005")}):Ve}).filter(function(Ve){return Ve.value+""!==Le}),e.createElement(Fn.Z,{dataList:Ze,onAction:function(_e){Le==="5"?_e.value==="7"?ue.Z.removeUsers({appId:s,rowIds:[re.rowid]}).then(function(fn){P([]),p()}):ue.Z.reinviteExAccount({appId:s,rowIds:[re.rowid]}).then(function(fn){fn?alert(_l("\u91CD\u65B0\u9080\u8BF7\u6210\u529F")):alert(_l("\u91CD\u65B0\u9080\u8BF7\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)}):_e.value==="8"?(P([re.rowid]),Fe(!0)):_e.value==="9"?ia(re.rowid):r({newState:_e.value,rowIds:[re.rowid],cb:function(){P([])}})},popupAlign:{points:["tr","br"],offset:[-180,0]}})}}))},[la,O]);var ia=function(z){he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u6CE8\u9500%0\u4E2A\u6210\u5458",1)),buttonType:"danger",okText:_l("\u6CE8\u9500"),description:_l("\u88AB\u6CE8\u9500\u7684\u6210\u5458\u4E0D\u80FD\u901A\u8FC7\u5916\u90E8\u95E8\u6237\u7684\u94FE\u63A5\u767B\u5F55\u5230\u6B64\u5E94\u7528\u5185\u3002"),onOk:function(){ue.Z.removeUsers({appId:s,rowIds:[z]}).then(function(Te){P([]),i(s),p(),Re(!1)})}})},sa=function(z){var re=J.worksheetId,Te=J.appId,Ze=J.projectId;Be.Z.getToken({worksheetId:re,viewId:""}).then(function(Le){var Ve={token:Le,accountId:md.global.Account.accountId,worksheetId:re,appId:Te,projectId:Ze,exportControlsId:mt.map(function(_e){return _e.controlId}).filter(function(_e){return!!_e}),filterControls:F,keywords:H,rowIds:z?[]:L,fastFilters:q,pageIndex:G,pageSize:Ye.sk,excludeRowIds:[]};fetch(md.global.Config.WorksheetDownUrl+"/ExportExcel/ExprotExPortal",{method:"POST",headers:{"content-type":"application/json"},body:Yn()(Ve)}).then(function(_e){P([])})})},Kd=function(){ue.Z.removeUsers({appId:s,rowIds:L}).then(function(z){P([]),i(s),p()})},qd=function(){return he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u6CE8\u9500%0\u4E2A\u6210\u5458",L.length||1)),buttonType:"danger",okText:_l("\u6CE8\u9500"),description:_l("\u88AB\u6CE8\u9500\u7684\u6210\u5458\u4E0D\u80FD\u901A\u8FC7\u5916\u90E8\u95E8\u6237\u7684\u94FE\u63A5\u767B\u5F55\u5230\u6B64\u5E94\u7528\u5185\u3002"),onOk:function(){Kd()}})};return e.createElement(wr,{className:"flex flexColumn overflowHidden",len:mt.length},e.createElement("div",{className:"topAct"},e.createElement("div",{className:M()("title flexRow alignItemsCenter",{flex:L.length>0})},e.createElement("span",{className:M()("Font17 Bold pLeft20 mLeft20")},o.title)),L.length>0&&e.createElement("div",null,e.createElement("span",{className:"changeRole InlineBlock Hand",onClick:function(){Fe(!0)}},_l("\u66F4\u6539\u89D2\u8272")),e.createElement("span",{className:M()("download InlineBlock Hand mLeft10"),onClick:function(){sa()}},_l("\u5BFC\u51FA")),e.createElement("span",{className:M()("download InlineBlock Hand mLeft10"),onClick:function(){var z=U.filter(function(re){return safeParseArray(re.portal_status)[0]==="5"}).map(function(re){return re.rowid});if(D().intersection(z,L).length>0)return alert(_l("\u672A\u6FC0\u6D3B\u7684\u7528\u6237\u4E0D\u80FD\u542F\u7528"),2);he.Z.confirm({title:e.createElement("span",{className:""},_l("\u542F\u7528%0\u4E2A\u7528\u6237",L.length||1)),buttonType:"",okText:_l("\u542F\u7528%15005"),description:_l("\u542F\u7528\u53EA\u5BF9\u201C\u505C\u7528\u201D\u72B6\u6001\u7684\u7528\u6237\u751F\u6548\uFF1B\u7528\u6237\u88AB\u542F\u7528\u540E\u53EF\u4EE5\u901A\u8FC7\u5916\u90E8\u95E8\u6237\u94FE\u63A5\u767B\u5F55\u6B64\u5E94\u7528"),onOk:function(){r({newState:1,rowIds:L,cb:function(){P([])}})}})}},_l("\u542F\u7528%15005")),e.createElement("span",{className:M()("del InlineBlock Hand mLeft10"),onClick:function(){var z=U.filter(function(re){return safeParseArray(re.portal_status)[0]==="5"}).map(function(re){return re.rowid});if(D().intersection(z,L).length>0)return alert(_l("\u672A\u6FC0\u6D3B\u7684\u7528\u6237\u4E0D\u80FD\u505C\u7528"),2);he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u505C\u7528%0\u4E2A\u7528\u6237",L.length||1)),buttonType:"danger",okText:_l("\u505C\u7528"),description:_l("\u505C\u7528\u53EA\u5BF9\u201C\u6B63\u5E38\u201D\u72B6\u6001\u7684\u7528\u6237\u751F\u6548\uFF1B\u7528\u6237\u88AB\u505C\u7528\u540E\u5C06\u4E0D\u80FD\u901A\u8FC7\u5916\u90E8\u95E8\u6237\u94FE\u63A5\u767B\u5F55\u6B64\u5E94\u7528"),onOk:function(){r({newState:4,rowIds:L,cb:function(){P([])}})}})}},_l("\u505C\u7528")),e.createElement("span",{className:M()("del InlineBlock Hand mLeft10"),onClick:qd},_l("\u6CE8\u9500"))),L.length<=0&&e.createElement(Bt,{keys:["search","refresh","columns","filter","down"],onChange:function(z){},down:sa,appId:s,comp:function(){return e.createElement(e.Fragment,null,N!=="all"&&C&&e.createElement("div",{className:"toRole Hand mRight14 TxtTop Bold",onClick:function(){I({roleId:N,tab:"roleSet"})}},_l("\u7F16\u8F91\u89D2\u8272")),e.createElement("div",{className:"addUser InlineBlock Hand Bold"},e.createElement("span",{className:"lAdd",onClick:function(){De(!0)}},_l("\u9080\u8BF7\u7528\u6237")),"|",e.createElement(Nn.Z,{popupVisible:te,action:["click"],onPopupVisibleChange:function(re){ee(re)},popup:e.createElement(kr,{className:"Hand InlineBlock mTop6 uploadUser"},e.createElement(at.Z,{className:"",onClick:function(re){dn(!0),ee(!1)}},e.createElement(V.Z,{className:"Font18 TxtMiddle mRight6",type:"new_excel"}),e.createElement("span",{className:""}," ",_l("\u4ECEExcel\u5BFC\u5165\u6570\u636E")))),popupAlign:{points:["tr","br"],offset:[8,0]}},e.createElement("span",{className:"rAdd hand",onClick:function(){ee(!te)}},e.createElement(V.Z,{className:"TxtMiddle mLeft6 ",type:"arrow-down"})))))},refresh:function(){Sn()}})),e.createElement(Nt.Z,{pageSize:Ye.sk,columns:mt,controls:Z,selectedIds:L,setSelectedIds:function(z){P(z)},showCheck:!0,list:U.map(function(se){return(0,v.default)({},se,{id:se.rowid})}),pageIndex:G,total:h,onScrollEnd:function(){U.length>=h||U.length<G*Ye.sk||o.portal.loading||(c(G+1),p())},handleChangeSortHeader:function(z){k(z)},loading:o.portal.loading,clickRow:function(z,re){cn(re);var Te=Z.map(function(Ze){return(0,v.default)({},Ze,{value:(U.find(function(Le){return Le.rowid===re})||{})[Ze.controlId]})});ae(Te),Re(!0)}}),Ue&&e.createElement(Rt,{title:_l("\u9009\u62E9\u89D2\u8272"),setChangeRoleDialog:Fe,changeRoleDialog:Ue,roleList:R,onOk:function(z){x({roleId:z,rowIds:L},function(){P([]),c(1),Sn()})}}),pn&&e.createElement(mr,{setAddUserDialog:dn,show:pn,getUserList:Sn,appId:s,isSendMsgs:xe,changeIsSendMsgs:function(z){var re=d.baseInfo,Te=re===void 0?{}:re;b((0,v.default)({},Te,{isSendMsgs:z}))}}),de&&e.createElement(Ar,{setAddUserByTelDialog:De,show:de,getUserList:Sn,appId:s,registerMode:D().get(g,["registerMode"]),roleList:R,roleId:!q||q.length<=0?"":q[0].values[0],isSendMsgs:xe,changeIsSendMsgs:function(z){var re=d.baseInfo,Te=re===void 0?{}:re;b((0,v.default)({},Te,{isSendMsgs:z}))}}),pe&&e.createElement(Lt.Z,{show:pe,showClose:!0,appId:s,width:"640px",currentData:(0,Ye.ql)(ne),setShow:Re,onOk:function(z,re){var Te=z.filter(function(Ze){return re.includes(Ze.controlId)}).map(Dt.jz);ue.Z.saveUserDetailForBackgroud({appId:s,rowId:tn,newCell:Te}).then(function(Ze){Sn(),i(s),ae([]),cn(""),alert(_l("\u66F4\u65B0\u6210\u529F"))})},onDel:function(){ia(tn)}}))}var Nr=function(a){return{portal:a.portal}},Tr=function(a){return(0,Me.DE)(He,a)};const Br=(0,Oe.$j)(Nr,Tr)(yr),zn={get:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("NoVerify","Get",a,d)},getPreview:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("NoVerify","GetPreview",a,d)},update:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("NoVerify","Update",a,d)},delete:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("NoVerify","Delete",a,d)},verify:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("NoVerify","Verify",a,d)}};var Rr=w(86853),hn=w(45231),Pt=w(10897),Lr=w(19506),Dr=w(89499),cc=D().keys(Qn);function Pr(o){var a=o.appId,d=o.projectId,n=o.onChange,t=o.query,r=o.canChooseOtherApp,l=(0,e.useState)(!1),s=(0,B.Z)(l,2),c=s[0],p=s[1],i=(0,e.useState)(!1),u=(0,B.Z)(i,2),f=u[0],x=u[1],E=(0,e.useState)([]),m=(0,B.Z)(E,2),b=m[0],A=m[1],k=(0,e.useState)(""),S=(0,B.Z)(k,2),h=S[0],g=S[1],I=(0,e.useState)([]),C=(0,B.Z)(I,2),N=C[0],T=C[1],R=(0,e.useState)([]),y=(0,B.Z)(R,2),Z=y[0],O=y[1],U=(0,e.useState)(""),G=(0,B.Z)(U,2),H=G[0],Y=G[1],J=(0,e.useState)(""),le=(0,B.Z)(J,2),q=le[0],F=le[1],oe=(0,e.useState)(!1),xe=(0,B.Z)(oe,2),Xe=xe[0],Ne=xe[1],te=(0,e.useState)([]),ee=(0,B.Z)(te,2),ce=ee[0],fe=ee[1],Ue=(0,e.useState)([]),Fe=(0,B.Z)(Ue,2),$e=Fe[0],rn=Fe[1],Ge=(0,e.useState)(!1),en=(0,B.Z)(Ge,2),sn=en[0],Ae=en[1],pe=(0,e.useState)(!0),Re=(0,B.Z)(pe,2),Ke=Re[0],xn=Re[1];(0,e.useEffect)(function(){Tn.Z.getWorksheetsByAppId({appId:a,type:0}).then(function(ve){ve.forEach(function(de){de.workSheetName=(0,je.T3)(a,de.workSheetId).name||de.workSheetName}),A(ve),rn(ve),xn(!1)})},[]),(0,e.useEffect)(function(){var ve=t||{},de=ve.sourceId,De=de===void 0?"":de,Pe=ve.sourceName,ie=Pe===void 0?"":Pe,L=ve.templates,P=L===void 0?{}:L,X=ve.items,K=X===void 0?[]:X,ne=ve.appName;g(De),Y(ie);var ae=P.controls,Ee=ae===void 0?[]:ae;O(Ee),Ne(!De),T(Ee),fe(K),F(ne)},[t]),(0,e.useEffect)(function(){dn({workSheetId:h,workSheetName:H})},[h]);var pn=D().throttle(function(ve){A(ve?$e.filter(function(de){return(de.workSheetName||"").indexOf(ve)>-1}):$e)},300),dn=function(de){de.workSheetId&&hn.Z.getWorksheetInfo({worksheetId:de.workSheetId,getTemplate:!0,appId:a}).then(function(De){De.template.controls=(0,Dr.zj)(a,De.template.controls);var Pe={sourceId:de.workSheetId,sourceName:De.name,templates:De.template,appName:q};Pe=sn?(0,v.default)({},Pe,{configs:[],items:[]}):Pe,n((0,v.default)({},t,Pe)),Ae(!1)})},un=function(){return e.createElement(e.Fragment,null,e.createElement("i",{className:"icon icon-add"}),_l("\u7B5B\u9009\u6761\u4EF6"))};return Ke?e.createElement(qe.Z,{className:"mTop10"}):e.createElement(e.Fragment,null,e.createElement(Pt.FC,null,e.createElement($n.d4,{className:"mTop8"},e.createElement("div",{className:"settingItemTitle"},_l("\u5DE5\u4F5C\u8868")),e.createElement(Nn.Z,{action:["click"],popupVisible:c,onPopupVisibleChange:function(de){p(de)},popupStyle:{width:530},popup:function(){return e.createElement(Pt.AA,null,e.createElement(Rr.Z,{fixedHeader:e.createElement("div",{className:"flexRow",style:{padding:"0 16px 0 14px",height:36,alignItems:"center",borderBottom:"1px solid #e0e0e0",marginBottom:5}},e.createElement("i",{className:"icon-search Gray_75 Font14"}),e.createElement("input",{type:"text",autoFocus:!0,className:"mLeft5 flex Border0 placeholderColor w100",placeholder:_l("\u641C\u7D22"),onChange:function(De){return pn(De.target.value.trim())}}))},b.length>0?b.map(function(de){return e.createElement(at.Z,{onClick:function(){Ae(!0),g(de.workSheetId),Y(de.workSheetName),fe([]),p(!1),F("")}},de.workSheetName)}):e.createElement(at.Z,{className:"Gray_9"},_l("\u6682\u65E0\u641C\u7D22\u7ED3\u679C"))),r&&e.createElement("div",{className:"otherWorksheet",onClick:function(){p(!1),x(!0)}},_l("\u5176\u4ED6\u5E94\u7528\u4E0B\u7684\u5DE5\u4F5C\u8868")))},popupAlign:{points:["tl","bl"],offset:[0,3],overflow:{adjustX:!0,adjustY:!0}}},e.createElement("div",{className:M()("settingWorksheetInput")},e.createElement("div",{className:"overflow_ellipsis"},H?e.createElement("span",{className:M()(Xe?"Red":"Gray")},Xe?_l("\u5DE5\u4F5C\u8868\u5DF2\u5220\u9664"):H,q&&e.createElement("span",null,"\uFF08",q,"\uFF09")):e.createElement("span",{className:"Gray_bd"},_l("\u9009\u62E9\u5DE5\u4F5C\u8868"))),e.createElement("div",{className:"edit"},e.createElement("i",{className:"icon-arrow-down-border"}))))),e.createElement($n.d4,null,e.createElement("div",{className:"settingItemTitle"},_l("\u67E5\u8BE2\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u7684\u8BB0\u5F55")),h?e.createElement(Tt.Z,{canEdit:!0,feOnly:!0,id:h,projectId:d,appId:a,showSystemControls:!0,columns:N,conditions:ce,from:"portal",conditionItemForDynamicStyle:!0,globalSheetControls:Z,onConditionsChange:function(de){var De=de.map(function(Pe){return Pe.isDynamicsource?(0,v.default)({},Pe,{values:[],value:""}):Pe});n((0,v.default)({},t,{items:De}))},comp:un}):e.createElement("div",{className:"addFilterCondition pointer"},e.createElement("span",{onClick:function(de){if(!h){alert(_l("\u8BF7\u9009\u62E9\u5DE5\u4F5C\u8868"),3);return}}},un())))),f&&e.createElement(Lr.Z,{visible:f,appId:a,sheetId:h,globalSheetInfo:{projectId:d,appId:a},onClose:function(){x(!1)},onOk:function(de){g(de.sheetId),F(de.appName),dn({workSheetId:de.sheetId})}}))}var Zr=(0,Q.Z)([`
  .List {
    h6 {
    }
    .listLiHeader {
      color: #9e9e9e;
      font-size: 12px;
    }
    .listLi {
      display: flex;
    }
    .columnTxt {
      flex: 1;
      height: 36px;
      background: #f8f8f8;
      border-radius: 3px;
    }
    .iconBox {
      padding: 0;
      width: 10%;
      text-align: center;
    }
    .Dropdown {
      flex: 1;
      max-width: 45%;
    }
    .Dropdown--input {
      display: flex;
      line-height: 36px;
      padding: 0 10px !important;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      .value,
      .Dropdown--placeholder {
        flex: 1;
      }
      i {
        &::before {
          line-height: 36px;
        }
      }
    }
  }
`],[`
  .List {
    h6 {
    }
    .listLiHeader {
      color: #9e9e9e;
      font-size: 12px;
    }
    .listLi {
      display: flex;
    }
    .columnTxt {
      flex: 1;
      height: 36px;
      background: #f8f8f8;
      border-radius: 3px;
    }
    .iconBox {
      padding: 0;
      width: 10%;
      text-align: center;
    }
    .Dropdown {
      flex: 1;
      max-width: 45%;
    }
    .Dropdown--input {
      display: flex;
      line-height: 36px;
      padding: 0 10px !important;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      .value,
      .Dropdown--placeholder {
        flex: 1;
      }
      i {
        &::before {
          line-height: 36px;
        }
      }
    }
  }
`]),Fr=D().keys(Qn),Or=W.ZP.div(Zr);function Mr(o){var a=o.onChange,d=(0,e.useState)([]),n=(0,B.Z)(d,2),t=n[0],r=n[1],l=(0,e.useState)([]),s=(0,B.Z)(l,2),c=s[0],p=s[1],i=(0,e.useState)([]),u=(0,B.Z)(i,2),f=u[0],x=u[1],E=(0,e.useState)({}),m=(0,B.Z)(E,2),b=m[0],A=m[1];(0,e.useEffect)(function(){A(o.query||{}),k()},[]),(0,e.useEffect)(function(){k(),A(o.query||{})},[o.type,o.cell,o.query,o.controls,D().get(o,["query","configs"])]);var k=function(){if(o.type===1){var h=o.query||{},g=h.templates,I=g===void 0?{}:g,C=I.controls,N=C===void 0?[]:C;p(N.filter(function(y){return!["rowid","wfname"].includes(y.controlId)&&Fr.includes(y.type+"")}))}else{var T=o.cell,R=T===void 0?{}:T;p(R.cells),r(R.cellConfigs||[])}x(o.controls)};return c.length<=0?"":e.createElement(Or,null,e.createElement("div",{className:"List mTop32"},e.createElement("h6",{className:"Font13"},_l("\u914D\u7F6E\u514D\u5BA1\u6620\u5C04\u5B57\u6BB5")),e.createElement("div",{className:"listLiHeader mTop12"}),f.map(function(S,h){return e.createElement("div",{className:"listLi mBottom6",key:h},e.createElement("span",{className:"columnTxt InlineBlock LineHeight36"},e.createElement(V.Z,{className:"Font18 TxtMiddle Gray_9e mLeft15 mRight8",icon:(0,Ln.hB)(S.type,!1)}),S.controlName),e.createElement("span",{className:"iconBox InlineBlock TxtBottom LineHeight36"},e.createElement(V.Z,{className:"Font18 ThemeColor3",type:"arrow_forward"})),e.createElement(gn.Z,{key:S.controlId+"_Dropdown_"+o.type,isAppendToBody:!0,data:o.type===1?c.filter(function(g){if([9,10,11].includes(g.type)&&[9,10,11].includes(S.type)||[15,16].includes(g.type)&&[15,16].includes(S.type)||g.type===S.type)return g}).map(function(g){return(0,v.default)({},g,{value:g.controlId,text:g.controlName,disabled:!!(D().get(b,["configs"])||[]).find(function(I){return I.subCid===g.controlId&&f.map(function(C){return C.controlId}).includes(I.cid)})})}):c.map(function(g){return(0,v.default)({},g,{value:g.columnNum,text:g.columnName,disabled:t.map(function(I){return I.columnNum}).includes(g.columnNum)})}),placeholder:_l("\u8BF7\u9009\u62E9"),value:o.type===1?((D().get(b,["configs"])||[]).find(function(g){return S.controlId===g.cid})||{}).subCid:(t.find(function(g){return g.controlId===S.controlId})||{}).columnNum,className:M()("flex InlineBlock"),onChange:function(I){if(o.type===1){var C=!!(D().get(b,["configs"])||[]).find(function(H){return H.subCid===I&&f.map(function(Y){return Y.controlId}).includes(H.cid)}),N=f.map(function(H){return H.controlId}),T=(D().get(b,["configs"])||[]).map(function(H){return H.cid});if(C){alert(_l("\u8BE5\u5217\u5DF2\u5339\u914D\u8FC7"),3),a({configs:D().get(b,["configs"])}),A((0,v.default)({},b,{configs:D().get(b,["configs"])}));return}if(T.includes(S.controlId)){var R={configs:D().get(b,["configs"]).map(function(H){return H.cid===S.controlId?{cid:S.controlId,subCid:I}:H}).filter(function(H){return N.includes(H.cid)})};a(R),A((0,v.default)({},b,R))}else{var y={cid:S.controlId,subCid:I},Z=D().get(b,["configs"])||[];Z.push(y),a({configs:Z.filter(function(H){return N.includes(H.cid)})}),A((0,v.default)({},b,{configs:Z}))}}else{if(t.map(function(H){return H.columnNum}).includes(I)){alert(_l("\u8BE5\u5217\u5DF2\u5339\u914D\u8FC7"),3);return}var O=t.map(function(H){return H.controlId}),U=c.filter(function(H){return!t.map(function(Y){return Y.columnNum}).includes(H.columnNum)}).find(function(H){return H.columnNum===I}),G={controlId:S.controlId,columnName:U.columnName,columnNum:I,controlName:S.controlName};O.includes(S.controlId)?a(t.map(function(H){return H.controlId===S.controlId?G:H})):a([].concat((0,Qe.Z)(t),[G]))}}}))})))}var Ur=(0,Q.Z)([`
  .switchTextP {
    line-height: 40px !important;
  }
  .conditionItemHeader {
    display: flex;
    align-items: center;
    padding-right: 0 !important;
    .relation {
      display: inline-block;
      &:hover {
        background-color: #fff !important;
      }
    }
  }
  .worksheetFilterDateCondition {
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      .dateValue,
      .dateType,
      .customDate {
        flex: 1;
      }
      .dateValue,
      .customDate {
        margin-left: 10px;
        margin-top: 0 !important;
      }
      .dateValue {
        display: flex;
        align-items: center;
      }
      .dateInputCon .ming.Dropdown {
        height: 34px;
        background: none;
      }
    }
  }
  .conditionValue {
    flex: 1;
    min-width: 0;
  }
  .up {
    color: #2196f3;
    &:hover {
      color: #1e88e5 !important;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .listCon {
    background: #f8f8f8;
    border-radius: 6px;
    padding: 13px 16px;
    display: flex;
    .act {
      width: 70px;
      display: inline-block;
      float: right;
    }
  }
  .List {
    h6 {
    }
    .listLiHeader {
      color: #9e9e9e;
      font-size: 12px;
    }
    .listLi {
      display: flex;
    }
    .columnTxt {
      flex: 1;
      height: 36px;
      background: #f8f8f8;
      border-radius: 3px;
    }
    .iconBox {
      padding: 0;
      width: 10%;
      text-align: center;
    }
    .Dropdown {
      flex: 1;
      max-width: 45%;
    }
    .Dropdown--input {
      display: flex;
      line-height: 36px;
      padding: 0 10px !important;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      .value,
      .Dropdown--placeholder {
        flex: 1;
      }
      i {
        &::before {
          line-height: 36px;
        }
      }
    }
  }
`],[`
  .switchTextP {
    line-height: 40px !important;
  }
  .conditionItemHeader {
    display: flex;
    align-items: center;
    padding-right: 0 !important;
    .relation {
      display: inline-block;
      &:hover {
        background-color: #fff !important;
      }
    }
  }
  .worksheetFilterDateCondition {
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      .dateValue,
      .dateType,
      .customDate {
        flex: 1;
      }
      .dateValue,
      .customDate {
        margin-left: 10px;
        margin-top: 0 !important;
      }
      .dateValue {
        display: flex;
        align-items: center;
      }
      .dateInputCon .ming.Dropdown {
        height: 34px;
        background: none;
      }
    }
  }
  .conditionValue {
    flex: 1;
    min-width: 0;
  }
  .up {
    color: #2196f3;
    &:hover {
      color: #1e88e5 !important;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .listCon {
    background: #f8f8f8;
    border-radius: 6px;
    padding: 13px 16px;
    display: flex;
    .act {
      width: 70px;
      display: inline-block;
      float: right;
    }
  }
  .List {
    h6 {
    }
    .listLiHeader {
      color: #9e9e9e;
      font-size: 12px;
    }
    .listLi {
      display: flex;
    }
    .columnTxt {
      flex: 1;
      height: 36px;
      background: #f8f8f8;
      border-radius: 3px;
    }
    .iconBox {
      padding: 0;
      width: 10%;
      text-align: center;
    }
    .Dropdown {
      flex: 1;
      max-width: 45%;
    }
    .Dropdown--input {
      display: flex;
      line-height: 36px;
      padding: 0 10px !important;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      .value,
      .Dropdown--placeholder {
        flex: 1;
      }
      i {
        &::before {
          line-height: 36px;
        }
      }
    }
  }
`]),Hr=W.ZP.div(Ur),Wr=["\u5BFC\u5165Excel\u6570\u636E","\u4ECE\u5DE5\u4F5C\u8868\u83B7\u53D6\u6570\u636E"];function Qr(o){var a=o.appId,d=o.projectId,n=o.onCancel,t=o.show,r=o.data,l=o.onChangePortalVersion,s=o.canChooseOtherApp,c=(0,e.useState)([]),p=(0,B.Z)(c,2),i=p[0],u=p[1],f=(0,e.useState)([]),x=(0,B.Z)(f,2),E=x[0],m=x[1],b=(0,e.useState)([]),A=(0,B.Z)(b,2),k=A[0],S=A[1],h=(0,e.useState)(""),g=(0,B.Z)(h,2),I=g[0],C=g[1],N=(0,e.useState)(),T=(0,B.Z)(N,2),R=T[0],y=T[1],Z=(0,e.useState)(0),O=(0,B.Z)(Z,2),U=O[0],G=O[1],H=(0,e.useState)(!1),Y=(0,B.Z)(H,2),J=Y[0],le=Y[1],q=(0,e.useState)(""),F=(0,B.Z)(q,2),oe=F[0],xe=F[1],Xe=(0,e.useState)(!1),Ne=(0,B.Z)(Xe,2),te=Ne[0],ee=Ne[1],ce=(0,e.useState)(!1),fe=(0,B.Z)(ce,2),Ue=fe[0],Fe=fe[1],$e=function(){te||$("#hideUpload").uploadAttachment({filterExtensions:"xlsx,xls,xlsm",pluploadID:"#upload",multiSelection:!1,maxTotalSize:4,folder:"reviewFree",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:0,checkProjectLimitFileSizeUrl:"",filesAdded:function(){ee(!0)},callback:function(Re){if(Re.length>0){var Ke=Re[0];C(Ke.serverName+Ke.key),xe(Ke.originalFileName+Ke.fileExt),u([]),Fe(!1)}}})},rn=function(){ue.Z.getUserCollect({appId:a,getSystem:!0}).then(function(pe){m(pe)})},Ge=function(){var pe=r;xe(pe.fileName),u(pe.cellConfigs||[]),C(pe.fileUrl||""),Fe(!!pe.fileUrl),G(pe.type),le(pe.status),y(pe.query)},en=function(){I&&zn.getPreview({fileUrl:I}).then(function(pe){S(pe[0].cells||[])})};(0,e.useEffect)(function(){$e(),Ge(),en(),rn()},[]),(0,e.useEffect)(function(){en()},[I]);var sn=function(){if(i.length<=0&&J===0&&U===0||J===0&&U===1&&(D().get(R,["configs"])||[]).length<=0)return alert(_l("\u8FD8\u672A\u8BBE\u7F6E\u514D\u5BA1"),3);var pe=J===1?{appId:a,status:J}:{appId:a,fileUrl:I,fileName:oe,cellConfigs:i,type:U,status:J,query:(0,v.default)({},D().pick(R,["id","sourceId","items","configs","templates","sourceType"]))};zn.update(pe).then(function(Re){Re.success?(o.setData((0,v.default)({},r,{query:R,fileUrl:I,fileName:oe,cellConfigs:i,type:U,status:J})),l(Re.version),Fe(!!Re.fileUrl),n(),o.getInfo()):alert(_l("\u914D\u7F6E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})};return e.createElement(he.Z,{className:"showReviewFree Hand",width:"580",visible:t,title:e.createElement("span",{className:"Font17 Bold"},_l("\u914D\u7F6E\u514D\u5BA1\u540D\u5355")),onCancel:n,onOk:function(){sn()}},e.createElement(Hr,null,e.createElement("p",{className:"Gray_9e pAll0 mBottom2 mTop2 Font14 Gray_75"},_l("\u7528\u6237\u6CE8\u518C\u65F6\u586B\u5199\u7684\u5185\u5BB9\u5982\u548C\u514D\u5BA1\u4E2D\u6307\u5B9A\u5B57\u6BB5\u5185\u5BB9\u4E00\u81F4\uFF0C\u5219\u65E0\u9700\u5BA1\u6838\u76F4\u63A5\u8BBF\u95EE\u5E94\u7528\u3002")),e.createElement(an,{className:"Hand InlineBlock",onClick:function(){le(J===0?1:0)}},e.createElement(V.Z,{icon:J===0?"ic_toggle_on":"ic_toggle_off",className:"Font40"}),e.createElement("div",{className:"switchText switchTextP mLeft8 InlineBlock Gray Hand"},J===0?_l("\u5F00\u542F"):_l("\u5173\u95ED"))),e.createElement("input",{id:"hideUpload",type:"file",className:"Hidden"}),e.createElement("div",{className:"Hidden",id:"upload"}),J===0&&e.createElement(e.Fragment,null,e.createElement("p",{className:"pAll0 mTop20 Bold"},_l("\u6570\u636E\u6E90")),e.createElement("div",{className:"mBottom18"},Wr.map(function(Ae,pe){return e.createElement(mn.Z,{className:"mRight60 pRight10",text:Ae,checked:pe===U,onClick:function(){G(pe)}})})),U===1?e.createElement(Pr,{query:R,appId:a,canChooseOtherApp:s,projectId:d,onChange:function(pe){y(pe)}}):I?e.createElement(e.Fragment,null,e.createElement("div",{className:"listCon"},e.createElement("span",{className:"txt flex flexRow"},e.createElement(V.Z,{className:"Font18 TxtMiddle",type:"new_excel",style:{color:"#4CAF50"}}),e.createElement("span",{className:"mLeft8 mRight8 flex overflow_ellipsis Font13 WordBreak"}," ",oe)),Ue&&e.createElement("span",{className:"act ThemeColor3 Hand",onClick:function(){var pe=md.global.Config.AjaxApiUrl+"Download/Verify/"+a,Re="<form action="+pe+` method="noVerifyAjax.get" id="forms">
                                  <input type="submit" value="\u63D0\u4EA4"/>
                              </form>`;$("body").append(Re),$("#forms").submit().remove()}},e.createElement(V.Z,{className:"Font18 TxtMiddle",type:"cloud_download"})," ",_l("\u4E0B\u8F7D")),e.createElement("span",{className:"act ThemeColor3 Hand",onClick:function(){$("#upload").click()}},e.createElement(V.Z,{className:"Font18 TxtMiddle",type:"refresh"})," ",_l("\u66F4\u65B0")),e.createElement("span",{className:"act Red",onClick:function(){r.fileUrl?zn.delete({appId:a}).then(function(pe){u([]),S([]),C(""),xe(""),Fe(!1)}):(u([]),S([]),C(""),xe(""),Fe(!1))}},e.createElement(V.Z,{className:"Font18 TxtMiddle Hand",type:"trash"})," ",_l("\u5220\u9664")))):e.createElement("div",{className:"listCon"},e.createElement("div",{className:"up Hand InlineBlock",onClick:function(){$("#upload").click()}},e.createElement(V.Z,{className:"Font18 TxtMiddle mRight6",type:"cloud_upload"}),e.createElement("span",null,_l("\u4E0A\u4F20\u514D\u5BA1\u914D\u7F6E")))),e.createElement(Mr,{type:U,query:R,controls:E||[],cell:{cells:k,cellConfigs:i},onChange:function(pe){U===1?y((0,v.default)({},R,pe)):u(pe)}}))))}var Gr=w(83298),_r=(0,Q.Z)([`
  .wrapTr:not(.checkBoxTr):not(.optionWrapTr) {
    width: calc(calc(100%  - 38px) / 6);
  }
  .wrapTr.nameWrapTr {
    width: calc(calc(100%  - 38px) / 6); !important;
    overflow: hidden;
  }
  padding: 16px 10px 0 10px;
  .topAct {
    padding-right:44px;
    min-height: 54px;
    padding-bottom: 16px;
    display: flex;
    justify-content: right;
    .pass,
    .reject {
      width: 61px;
      height: 32px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      color: #bdbdbd;
      line-height: 32px;
      text-align: center;
    }
    .pass {
      &.isAct {
        background: #f3faff;
        color: #2196f3;
        &:hover {
          background: #ebf6fe;
        }
      }
    }
    .reject {
      &.isAct {
        background: rgba(244, 67, 54, 0.1);
        color: rgba(244, 67, 54, 1);
        &:hover {
          background: #fee6e5;
        }
      }
    }
    .setList {
      height: 32px;
      color: #2196f3;
      vertical-align: middle;
      line-height: 32px;
      padding: 0 12px;
      background: #f5f5f5;
      border-radius: 3px;
      &:hover {
        color: #1e88e5;
      }
      &.isOpen {
        background: #ffffff;
        border: 1px solid #2196f3;
      }
    }
  }
`],[`
  .wrapTr:not(.checkBoxTr):not(.optionWrapTr) {
    width: calc(calc(100%  - 38px) / 6);
  }
  .wrapTr.nameWrapTr {
    width: calc(calc(100%  - 38px) / 6); !important;
    overflow: hidden;
  }
  padding: 16px 10px 0 10px;
  .topAct {
    padding-right:44px;
    min-height: 54px;
    padding-bottom: 16px;
    display: flex;
    justify-content: right;
    .pass,
    .reject {
      width: 61px;
      height: 32px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      color: #bdbdbd;
      line-height: 32px;
      text-align: center;
    }
    .pass {
      &.isAct {
        background: #f3faff;
        color: #2196f3;
        &:hover {
          background: #ebf6fe;
        }
      }
    }
    .reject {
      &.isAct {
        background: rgba(244, 67, 54, 0.1);
        color: rgba(244, 67, 54, 1);
        &:hover {
          background: #fee6e5;
        }
      }
    }
    .setList {
      height: 32px;
      color: #2196f3;
      vertical-align: middle;
      line-height: 32px;
      padding: 0 12px;
      background: #f5f5f5;
      border-radius: 3px;
      &:hover {
        color: #1e88e5;
      }
      &.isOpen {
        background: #ffffff;
        border: 1px solid #2196f3;
      }
    }
  }
`]),zr=(0,Q.Z)([`
  color: red;
  &:hover {
    color: red;
  }
`],[`
  color: red;
  &:hover {
    color: red;
  }
`]),jr=W.ZP.div(_r),Vr=W.ZP.div(zr);function Yr(o){var a=o.portal,d=a===void 0?{}:a,n=o.getList,t=o.appId,r=o.getCount,l=o.changePageIndex,s=o.setFilter,c=o.setKeyWords,p=o.projectId,i=o.onChangePortalVersion,u=o.setSortControls,f=o.handleChangeSort,x=o.setTelFilters,E=o.appDetail,m=d.roleList,b=m===void 0?[]:m,A=d.controls,k=A===void 0?[]:A,S=d.unApproveCount,h=d.pageIndex,g=d.keyWords,I=d.filters,C=I===void 0?[]:I,N=d.telFilters,T=(0,e.useState)(!1),R=(0,B.Z)(T,2),y=R[0],Z=R[1],O=(0,e.useState)(!1),U=(0,B.Z)(O,2),G=U[0],H=U[1],Y=(0,e.useState)([]),J=(0,B.Z)(Y,2),le=J[0],q=J[1],F=(0,e.useState)(!1),oe=(0,B.Z)(F,2),xe=oe[0],Xe=oe[1],Ne=(0,e.useState)({}),te=(0,B.Z)(Ne,2),ee=te[0],ce=te[1],fe=(0,e.useState)(!1),Ue=(0,B.Z)(fe,2),Fe=Ue[0],$e=Ue[1],rn=(0,e.useState)([]),Ge=(0,B.Z)(rn,2),en=Ge[0],sn=Ge[1],Ae=(0,e.useState)(""),pe=(0,B.Z)(Ae,2),Re=pe[0],Ke=pe[1],xn=(0,e.useState)([]),pn=(0,B.Z)(xn,2),dn=pn[0],un=pn[1],ve=function(){zn.get({appId:t}).then(function(L){Xe(L.status===0),ce(L)})};(0,e.useEffect)(function(){ve(),s([]),c(""),u([]),x("")},[]),(0,e.useEffect)(function(){de()},[g,C,N]);var de=function(){l(1),n(3),q([])};(0,e.useEffect)(function(){var ie=[];k.filter(function(L){return!["portal_avatar","partal_regtime","portal_regtime","portal_role","portal_status","portal_openid","partal_id"].includes(L.controlId)}).map(function(L){if(L.controlId==="portal_name")ie.push((0,v.default)({},L,{id:L.controlId,className:"nameWrapTr",name:_l("\u7528\u6237"),minW:240,render:function(K,ne){return e.createElement("div",{className:"userImgBox overflowHidden"},e.createElement("span",{className:"name overflow_ellipsis Block TxtLeft breakAll",title:ne.portal_name},ne.portal_name))}}));else if(L.controlId==="portal_mobile")ie.push((0,v.default)({},L,{id:L.controlId,name:_l("\u624B\u673A\u53F7")}));else if(L.controlId==="portal_email")ie.push((0,v.default)({},L,{id:L.controlId,name:_l("\u90AE\u7BB1"),render:function(K,ne,ae){return e.createElement("div",{className:"flex overflowHidden"},e.createElement("div",{className:"overflow_ellipsis Block breakAll",title:ne.portal_email},ne.portal_email))}}));else{var P=[15,16].includes(L.type)?{minW:130}:{};ie.push((0,v.default)({},L,P,{id:L.controlId,name:L.controlName,sorter:[15,16].includes(L.type),render:function(K,ne){return e.createElement("div",{className:"ellipsis TxtMiddle",title:(0,Gr.Z)((0,v.default)({},L,{value:ne[L.controlId]}))},(0,Ye.IY)((0,v.default)({},L,{value:ne[L.controlId]})))}}))}}),ie.push({id:"action",name:_l("\u64CD\u4F5C"),fixed:"right",render:function(P,X,K){return e.createElement(e.Fragment,null,e.createElement("div",{className:"addUser InlineBlock Hand ThemeColor3 Bold",onClick:function(ae){q([X.rowid]),H(!0),ae.stopPropagation()}},_l("\u540C\u610F")),e.createElement("div",{className:"reject InlineBlock Hand Red mLeft25",onClick:function(ae){Pe([X.rowid]),ae.stopPropagation()}},_l("\u62D2\u7EDD")))}}),un(ie)},[k]);var De=function(L){ue.Z.refusePassExAccount({appId:t,rowIds:L}).then(function(P){r(t),de()})},Pe=function(L){if(!(le.length<=0&&(L||[]).length<=0))return he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u62D2\u7EDD\u5417\uFF1F")),buttonType:"danger",description:_l("\u62D2\u7EDD\u540E\u4F1A\u4ECE\u5217\u8868\u4E2D\u5220\u9664\u6B64\u7528\u6237"),onOk:function(){De(L||le),$e(!1)}})};return e.createElement(jr,{className:"flex flexColumn overflowHidden"},e.createElement("div",{className:"topAct"},e.createElement("div",{className:M()("title flexRow alignItemsCenter",{flex:le.length>0})},e.createElement("span",{className:M()("Font17 Bold pLeft20 mLeft20")},o.title)),le.length>0&&e.createElement(e.Fragment,null,e.createElement("span",{className:M()("pass InlineBlock Hand",{isAct:le.length>0}),onClick:function(){le.length>0&&H(!0)}},_l("\u540C\u610F")),e.createElement("span",{className:M()("reject InlineBlock Hand mLeft10",{isAct:le.length>0}),onClick:function(){Pe()}},_l("\u62D2\u7EDD"))),le.length<=0&&e.createElement(Bt,{keys:["search","refresh","filter"],columns:dn,onChange:function(L){},appId:t,comp:function(){return e.createElement("div",{className:M()("setList InlineBlock TxtTop Hand",{isOpen:xe}),onClick:function(){Z(!0)}},xe?_l("\u5DF2\u8BBE\u7F6E\u514D\u5BA1"):_l("\u514D\u5BA1\u8BBE\u7F6E"))},refresh:function(){n(3),r(t)}})),e.createElement(Nt.Z,{showCheck:!0,showTips:!0,pageSize:Ye.sk,columns:dn,controls:k,selectedIds:le,setSelectedIds:function(L){q(L)},list:h<=1&&o.portal.loading?[]:o.portal.list.map(function(ie){return(0,v.default)({},ie,{id:ie.rowid})}),pageIndex:h,total:S,onScrollEnd:function(){o.portal.list.length>=S||o.portal.list.length<h*Ye.sk||o.portal.loading||(l(h+1),n(3))},loading:o.portal.loading,handleChangeSortHeader:function(L){f(L,3)},clickRow:function(L,P){var X=k.map(function(K){return(0,v.default)({},K,{value:(o.portal.list.find(function(ne){return ne.rowid===P})||{})[K.controlId]})});Ke(P),sn(X),$e(!0)}}),G&&e.createElement(Rt,{title:_l("\u9009\u62E9\u89D2\u8272"),roleList:b,setChangeRoleDialog:H,changeRoleDialog:G,onOk:function(L){ue.Z.auditPassExAccountToNewRole({appId:t,roleId:L,rowIds:le}).then(function(P){P.success?(de(),r(t)):alert(_l("\u64CD\u4F5C\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})}}),y&&e.createElement(Qr,{onChangePortalVersion:i,data:ee,show:y,canChooseOtherApp:!0,setData:ce,getInfo:function(){ve()},projectId:p,appId:t,controls:k,onCancel:function(){Z(!1)}}),Fe&&e.createElement(Lt.Z,{show:Fe,showClose:!0,appId:t,width:"640px",currentData:(0,Ye.ql)(en.map(function(ie){return ie.controlId==="portal_status"?(0,v.default)({},ie,{value:'["1"]'}):ie})),setShow:$e,onOk:function(L,P){var X=L.filter(function(K){return[].concat((0,Qe.Z)(P),["portal_role","portal_status"]).includes(K.controlId)}).map(Dt.jz);ue.Z.auditPassExAccountToNewRole({appId:t,roleId:(X.find(function(K){return K.controlId==="portal_role"})||{}).value,rowIds:[Re],newCell:X}).then(function(K){K.success?(r(t),de()):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})},okText:_l("\u540C\u610F"),title:_l("\u7528\u6237\u4FE1\u606F"),renderCancel:function(){return e.createElement(Vr,{className:"btn rejectBtn Hand mLeft10",onClick:function(){Pe([Re])}},_l("\u62D2\u7EDD"))}}))}var Jr=function(a){return{portal:a.portal}},Xr=function(a){return(0,Me.DE)(He,a)};const Kr=(0,Oe.$j)(Jr,Xr)(Yr);var lt=w(12935),qr=(0,Q.Z)([`
  height: 100%;
  .navConList {
    overflow: auto !important;
    padding: 6px 8px 10px;
  }
  .optionNs {
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 3px 3px 3px 3px;
    .moreop,
    .num {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 20px;
      text-align: center;
    }
    .num {
      opacity: 1;
    }
    .moreop {
      opacity: 0;
    }
  }
  .navRoleLi {
    &:hover {
      .hasOption {
        .num {
          opacity: 0;
          z-index: 0;
        }
        .moreop {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }
`],[`
  height: 100%;
  .navConList {
    overflow: auto !important;
    padding: 6px 8px 10px;
  }
  .optionNs {
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 3px 3px 3px 3px;
    .moreop,
    .num {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 20px;
      text-align: center;
    }
    .num {
      opacity: 1;
    }
    .moreop {
      opacity: 0;
    }
  }
  .navRoleLi {
    &:hover {
      .hasOption {
        .num {
          opacity: 0;
          z-index: 0;
        }
        .moreop {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }
`]),$r=(0,Q.Z)([`
  .roleSearch {
    background: #fff;
    border-radius: 0;
    width: 100%;
    padding-left: 0;
  }
`],[`
  .roleSearch {
    background: #fff;
    border-radius: 0;
    width: 100%;
    padding-left: 0;
  }
`]),ei=W.ZP.div(qr),ni=W.ZP.div($r),Zt=[{name:_l("\u5168\u90E8"),roleId:"all"},{name:_l("\u5F85\u5BA1\u6838"),roleId:"pendingReview"}],ti=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.renderCon=function(){var t=n.state.roleId,r=n.props.portal,l=r===void 0?{}:r,s=l.commonCount,c=s===void 0?0:s,p=l.count,i=p===void 0?0:p;switch(t){case"pendingReview":return e.createElement(Kr,(0,v.default)({},n.props,{roleId:t,title:_l("\u5F85\u5BA1\u6838")}));default:return e.createElement(Br,(0,v.default)({},n.props,{roleId:t,title:t==="all"?_l("\u5168\u90E8"):(n.props.portal.roleList.find(function(u){return u.roleId===t})||{}).name,commonCount:t==="all"?c:i}))}},n.delDialog=function(t){var r=n.props,l=r.portal,s=l===void 0?{}:l,c=r.appId,p=r.setPortalRoleList,i=r.setFastFilters,u=s.roleList,f=u===void 0?[]:u;return he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")),buttonType:"danger",description:"",onOk:function(){ue.Z.removeExRole({appId:c,roleId:t.roleId}).then(function(E){if(E){i();var m=f.filter(function(b){return b.roleId!==t.roleId});n.setState({navList:m,roleId:"all"}),p(m),alert(_l("\u5220\u9664\u6210\u529F"))}else alert(_l("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"),2)})}})},n.renderNav=function(){var t=n.state,r=t.navList,l=r===void 0?[]:r,s=t.roleId,c=t.keywords,p=c===void 0?"":c,i=n.props,u=i.portal,f=u===void 0?{}:u,x=i.appId,E=i.canEditApp,m=f.commonCount,b=m===void 0?0:m,A=f.unApproveCount,k=A===void 0?0:A,S=f.roleCountList,h=S===void 0?[]:S,g=f.roleList,I=g===void 0?[]:g;return e.createElement(e.Fragment,null,e.createElement(ni,{className:""},e.createElement("div",{className:"navCon bTBorder"},e.createElement("ul",null,Zt.map(function(C){return e.createElement("li",{className:M()("flexRow alignItemsCenter",{cur:s===C.roleId}),onClick:function(){n.setState({roleId:C.roleId},function(){C.roleId==="all"&&n.props.setFastFilters();var T=D().get(n.props,["match","params","listType"]);T==="pending"&&(0,We.T8)("/app/"+x+"/role/external")})}},e.createElement("span",{className:"flex Font14"},C.name),e.createElement("span",{className:"num"},C.roleId==="all"?b:k))}))),e.createElement("div",{className:"search mTop16"},e.createElement(lt.Z,{className:"roleSearch",placeholder:_l("\u641C\u7D22\u89D2\u8272"),value:p,onChange:function(N){n.setState({keywords:N,navList:I.filter(function(T){return T.name.toLocaleLowerCase().indexOf(N.toLocaleLowerCase())>=0})})}}))),e.createElement("div",{className:"navCon navConList"},e.createElement("ul",null,l.length<=0?e.createElement("div",{className:"TxtCenter Gray_bd mTop20"},_l("\u65E0\u76F8\u5173\u89D2\u8272")):l.map(function(C){var N=[];N=[].concat((0,Qe.Z)(N),[{value:1,text:_l("\u7F16\u8F91\u89D2\u8272")},{value:2,type:"err",text:_l("\u5220\u9664")}]).filter(function(R){return E}),C.isDefault&&(N=N.filter(function(R){return R.value!==2}));var T=(h.find(function(R){return R.roleId===C.roleId})||{}).count;return e.createElement("li",{className:M()("flexRow alignItemsCenter navRoleLi",{cur:s===C.roleId}),onClick:function(){n.props.setQuickTag({roleId:C.roleId,tab:"user"}),n.setState({roleId:C.roleId},function(){var y=D().get(n.props,["match","params","listType"]);y==="pending"&&(0,We.T8)("/app/"+x+"/role/external"),n.props.setFastFilters({controlId:"portal_role",values:[C.roleId],dataType:44,spliceType:1,filterType:2,DateRange:0,DateRangeType:1})})}},e.createElement("span",{className:"flex Font14 overflow_ellipsis breakAll InlineBlock",title:C.name},C.name),e.createElement("div",{className:M()("optionNs Relative",{hasOption:N.length>0})},N.length>0&&e.createElement(Fn.Z,{dataList:N,onAction:function(y){y.value===1?n.props.setQuickTag({roleId:C.roleId,tab:"roleSet"}):y.value===2&&n.delDialog(C)}}),T>0&&e.createElement("span",{className:"num"},T)),!!C.description&&e.createElement(Ie.Z,{text:e.createElement("span",null,C.description),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft7"})))}),E&&l.length>0&&e.createElement(ze.Z9,{className:"Hand",onClick:function(){n.props.setQuickTag({roleId:"new",tab:"roleSet"}),setTimeout(function(){n.props.setQuickTag({roleId:"",tab:"roleSet"})},0)}},e.createElement("i",{class:"ming Icon icon-add icon icon-undefined"}),_l("\u521B\u5EFA\u89D2\u8272")))))},n.state={roleId:"all",navList:Zt,keywords:""},n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props.portal,t=n===void 0?{}:n,r=t.roleList,l=r===void 0?[]:r,s=t.quickTag,c=D().get(this.props,["match","params","listType"]);this.setState({navList:l,roleId:c==="pending"?"pendingReview":s.roleId?s.roleId:t.roleId?t.roleId:"all"})}},{key:"componentWillReceiveProps",value:function(n){var t=this.props.portal,r=t===void 0?{}:t,l=r.roleList,s=l===void 0?[]:l;D().isEqual(n.portal.roleList,s)||this.setState({navList:n.portal.roleList});var c=D().get(n,["match","params","listType"]);c==="pending"&&!D().isEqual(c,D().get(this.props,["match","params","listType"]))&&this.setState({roleId:"pendingReview"})}},{key:"render",value:function(){return e.createElement(ei,{className:"flexRow"},e.createElement(ze.WC,{className:"flexColumn"},this.renderNav()),e.createElement(ze.pe,{className:"flex overflowHidden flexColumn Relative"},this.renderCon()))}}]),a}(e.Component),ai=function(a){return{portal:a.portal}},oi=function(a){return(0,Me.DE)(He,a)};const li=(0,Oe.$j)(ai,oi)(ti);var ri=w(42723),ii=w(45697),Je=w.n(ii),si=w(25273),Ft=w(3540),di=w(61749),ci=w.n(di),Ot,Mt,pi=(Mt=Ot=function(o){(0,ye.default)(a,o);function a(){return(0,we.default)(this,a),(0,ge.default)(this,(a.__proto__||Se()(a)).apply(this,arguments))}return(0,ke.default)(a,[{key:"componentWillEnter",value:function(n){var t=this.props.hasViews;this.list&&t&&$(this.list).stop().slideDown(300,n)}},{key:"componentWillLeave",value:function(n){var t=this.props.hasViews;this.list&&t&&$(this.list).stop().slideUp(300,n)}},{key:"render",value:function(){var n=this,t=this.props.className;return e.createElement("div",{ref:function(l){n.list=l},className:M()("Hidden",t)},this.props.children)}}]),a}(e.PureComponent),Ot.propTypes={hasViews:Je().bool,className:Je().string,children:Je().any},Mt),ui=w(47426),fi=w(40639),mi=w.n(fi),gi=w(85897),hi=w.n(gi),vi=w(55294),xi=w.n(vi),Ei=(0,Q.Z)([`
  .title {
    font-weight: 400;
  }
  .radioCon {
    &:before {
      content: ' ';
      width: 2px;
      min-height: 100%;
      background: #dddddd;
      border-radius: 1px;
      display: block;
      margin-left: 8px;
    }
    .conRadioGroup {
      padding: 15px 30px;
      .Radio-text {
        font-weight: 600;
      }
    }
  }
  .ming.Radio {
    margin-right: 60px;
  }
`],[`
  .title {
    font-weight: 400;
  }
  .radioCon {
    &:before {
      content: ' ';
      width: 2px;
      min-height: 100%;
      background: #dddddd;
      border-radius: 1px;
      display: block;
      margin-left: 8px;
    }
    .conRadioGroup {
      padding: 15px 30px;
      .Radio-text {
        font-weight: 600;
      }
    }
  }
  .ming.Radio {
    margin-right: 60px;
  }
`]),Ci=(0,Q.Z)([`
  margin-top: 18px;
  background: #fafafa;
  border-radius: 3px 3px 3px 3px;
  padding: 18px;
  border: 1px solid #e3e3e3;
  position: relative;
  .tipConArrow {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #fafafa;
    border-left: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    transform: rotate(45deg);
    left: 118px;
    top: -7px;
  }
`],[`
  margin-top: 18px;
  background: #fafafa;
  border-radius: 3px 3px 3px 3px;
  padding: 18px;
  border: 1px solid #e3e3e3;
  position: relative;
  .tipConArrow {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #fafafa;
    border-left: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    transform: rotate(45deg);
    left: 118px;
    top: -7px;
  }
`]),bi=W.ZP.div(Ei),Ii=W.ZP.div(Ci);function Ai(o){var a=o.sheet,d=o.type,n=d===void 0?"operation":d,t=o.onChange,r=o.isForPortal,l=o.extendAttrList,s=o.extendAttrValue,c=o.onChangeExtendAttr,p=a.sheetName,i=a.userFileds;return![20,30].includes(o.value)||o.disable?"":e.createElement(e.Fragment,null,e.createElement(Ii,{className:"tipCon"},e.createElement("div",{className:"tipConArrow"}),e.createElement("div",{className:"tipContent"},_l("%0\u8868\u4E2D",p),e.createElement("span",{className:"Bold mLeft3 mRight3 Inline"},i.filter(function(u){return n==="look"?!0:u.userPermission===2}).map(function(u){return u.name}).join(", ")),_l("\u5B57\u6BB5\u5305\u542B\u5F53\u524D\u7528\u6237\u7684\u8BB0\u5F55"),n!=="look"&&e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u6210\u5458\u3001\u90E8\u95E8\u3001\u7EC4\u7EC7\u89D2\u8272\u7C7B\u578B\u7684\u5B57\u6BB5\uFF0C\u4F5C\u4E3A\u201C\u62E5\u6709\u8005\u201D\u7684\u8BB0\u5F55\uFF0C\u5305\u542B\u591A\u4E2A\u6743\u9650\u4E3A\u201C\u62E5\u6709\u8005\u201D\u5B57\u6BB5\u65F6\uFF0C\u6743\u9650\u4E3A\u201C\u6216\u201D\u5173\u7CFB")),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 mLeft6 Gray_bd TxtMiddle"})))),!r&&e.createElement(e.Fragment,null,e.createElement("p",{className:"mBottom0 mTop24 Gray_75"},_l("\u989D\u5916\u5305\u542B")),e.createElement("div",{className:"tipItem flexRow alignItemsCenter mTop20"},e.createElement(yn.Z,{size:"small",className:"InlineBlock ",checked:o.value===30,onClick:function(){t(o.value===30?20:30)}}),e.createElement("span",{className:"mLeft10"},n==="look"?_l("\u4E0B\u5C5E\u52A0\u5165\u7684\u8BB0\u5F55"):_l("\u4E0B\u5C5E\u62E5\u6709\u7684\u8BB0\u5F55")),n!=="look"&&e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u5728\u7EC4\u7EC7\u7BA1\u7406\u3010\u6C47\u62A5\u5173\u7CFB\u3011\u4E2D\u7BA1\u7406\u7528\u6237\u7684\u4E0B\u5C5E")),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 mLeft6 Gray_bd"}))),l.length!==0&&e.createElement("div",{className:"tipExtendAttr flexRow mTop18"},e.createElement("div",{className:"left"},e.createElement("span",{className:"flexRow alignItemsCenter"},e.createElement(yn.Z,{size:"small",className:"InlineBlock",checked:l.filter(function(u){return s.includes(u.id)}).length>0,onClick:function(f){c(f?[]:l.map(function(x){return x.id}))}}),e.createElement("span",{className:"mLeft10"},_l("\u5339\u914D\u7528\u6237\u6743\u9650\u6807\u7B7E\u7684\u8BB0\u5F55")),e.createElement(Ie.Z,{text:_l("\u5728\u672C\u5E94\u7528\u3010\u7528\u6237-\u6269\u5C55\u3011\u4E2D\u7BA1\u7406\u7528\u6237\u7684\u6743\u9650\u6807\u7B7E")},e.createElement(V.Z,{icon:"info_outline",className:"Gray_bd Font16 mLeft6"})))),e.createElement("div",{className:"flex mLeft40",style:{display:"flex",gap:"10px 46px",flexWrap:"wrap"}},l.map(function(u){var f=s.indexOf(u.id)>-1;return e.createElement("span",{className:"flexRow alignItemsCenter Hand",onClick:function(){c(f?s.filter(function(E){return E!==u.id}):s.concat(u.id))}},e.createElement(me.Z,{className:"InlineBlock",checked:f}),e.createElement("span",{className:M()("Font13",f?"Gray":"Gray_9e")},u.name))})))))}function Si(o){var a=(0,e.useState)([]),d=(0,B.Z)(a,2),n=d[0],t=d[1],r=o.onChange;(0,e.useEffect)(function(){var s=o.sheet,c=s===void 0?{}:s,p=c.readLevel,i=c.editLevel,u=c.removeLevel,f=c.canEditExtendAttrs,x=c.canReadExtendAttrs,E=c.canRemoveExtendAttrs,m=o.formatViews(c.views),b=m.showRead,A=m.showEdit,k=m.showRemove;t([{title:_l("\u53EF\u67E5\u770B\u54EA\u4E9B\u8BB0\u5F55\uFF1F"),img:mi(),k:"readLevel",type:"look",disable:![20,30,100].includes(p)||!b,disabled:!b,value:p,extendAttrValue:x,ek:"canReadExtendAttrs"},{title:_l("\u53EF\u4FEE\u6539\u54EA\u4E9B\u8BB0\u5F55\uFF1F"),img:hi(),k:"editLevel",type:"edit",disable:![20,30,100].includes(i)||!b||!A,disabled:!b||!A,value:i,extendAttrValue:f,ek:"canEditExtendAttrs"},{title:_l("\u53EF\u5220\u9664\u54EA\u4E9B\u8BB0\u5F55\uFF1F"),img:xi(),k:"removeLevel",type:void 0,disable:![20,30,100].includes(u)||!b||!k,disabled:!b||!k,value:u,extendAttrValue:E,ek:"canRemoveExtendAttrs"}])},[o]);var l=function(c){var p=c.value,i=c.type,u=i===void 0?"operation":i,f=c.disable;return[{text:_l("\u5168\u90E8"),value:100,checked:p===100&&!f},{text:u==="look"?_l("\u7528\u6237\u52A0\u5165\u7684"):_l("\u7528\u6237\u62E5\u6709\u7684"),value:20,checked:[20,30].includes(p)&&!f}]};return e.createElement(bi,{className:"TxtLeft"},e.createElement("div",{className:"Font13"},n.map(function(s,c){var p=l(s);return e.createElement(e.Fragment,{key:"i-"+c},e.createElement("div",{className:"mTop30 Font16 title LineHeight26"},e.createElement("img",{src:s.img,className:"mRight5 TxtMiddle",height:26}),s.title),e.createElement("div",{className:"mTop10 radioCon flexRow"},e.createElement("div",{className:"flex conRadioGroup"},e.createElement(ui.ZP,{data:p,disabled:s.disabled&&c>0,key:"radioItem-"+c,radioItemClassName:"radioItem",onChange:function(u){r((0,be.default)({},s.k,u))}}),e.createElement(Ai,(0,v.default)({},o,{type:s.type,key:"TipsRender-"+c,value:s.value,disable:s.disable,onChange:function(u){return r((0,be.default)({},s.k,u))},extendAttrValue:s.extendAttrValue,onChangeExtendAttr:function(u){return r((0,be.default)({},s.ek,u))}})))))})))}var wi=w(91825),ki=w.n(wi),yi=(0,Q.Z)([`
  text-align: left;
  .title {
    font-weight: 400;
  }
  .subCheckbox {
    width: 190px;
  }
  .line {
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    margin: 30px 0;
  }
  .OptionInfo .ming.Checkbox {
    width: 100%;
  }
  .optionTxt {
    font-size: 12px;
    color: #919191;
  }
`],[`
  text-align: left;
  .title {
    font-weight: 400;
  }
  .subCheckbox {
    width: 190px;
  }
  .line {
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    margin: 30px 0;
  }
  .OptionInfo .ming.Checkbox {
    width: 100%;
  }
  .optionTxt {
    font-size: 12px;
    color: #919191;
  }
`]),Ni=W.ZP.div(yi);function Ti(o){var a=o.changeSheetOptionInfo,d=(0,e.useState)(o.sheet),n=(0,B.Z)(d,2),t=n[0],r=n[1],l=(0,e.useState)(!0),s=(0,B.Z)(l,2),c=s[0],p=s[1],i=(0,e.useState)({}),u=(0,B.Z)(i,2),f=u[0],x=u[1];(0,e.useEffect)(function(){r(o.sheet),E(o.sheet)},[o]);var E=function(k){hn.Z.getFormComponent({worksheetId:k.sheetId}).then(function(S){p(!1),x(S)})},m=function(k,S){var h=S.filter(function(g){return!(t[g.key]||{}).enable}).length>0;return e.createElement(e.Fragment,null,e.createElement("div",{className:""},e.createElement("span",{className:"Bold"},k),e.createElement("span",{className:"mLeft5 Hand ThemeHoverColor3 optionTxt",onClick:function(){var I={};S.map(function(C){I[C.key]={enable:h}}),a(I)}},h?_l("\u5168\u9009"):_l("\u53D6\u6D88\u5168\u9009"))),e.createElement("div",{className:""},S.length>0&&S.map(function(g,I){return e.createElement("div",{className:"subCheckbox mTop20 InlineBlock flexRow alignItemsCenter"},e.createElement(me.Z,{className:"InlineBlock TxtMiddle",checked:(t[g.key]||{}).enable,size:"small",onClick:function(N){a((0,be.default)({},g.key,{enable:!(t[g.key]||{}).enable}))}},g.txt),g.tips&&e.createElement(Ie.Z,{text:e.createElement("span",null,g.tips," "),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft3 TxtMiddle"})))})),e.createElement("div",{className:"line"}))},b=function(k){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],g=arguments[3],I=arguments[4],C=h.length<=0,N=g==="unableCustomButtons"?"buttonId":"templateId",T=h.map(function(R){return R[N]});return e.createElement(e.Fragment,null,e.createElement("div",{className:""},e.createElement("span",{className:"Bold"},k),e.createElement("span",{className:"mLeft5 Hand ThemeHoverColor3 optionTxt",onClick:function(){a((0,be.default)({},g,C?S.map(function(y){return(0,be.default)({},N,y.id)}):[]))}},C?_l("\u53D6\u6D88\u5168\u9009"):_l("\u5168\u9009"))),e.createElement("div",{className:"OptionInfo"},S.length>0&&S.map(function(R,y){return e.createElement("div",{className:"subCheckbox InlineBlock flexRow alignItemsCenter"},e.createElement(me.Z,{className:"mTop20 InlineBlock TxtMiddle",checked:!T.includes(R.id),size:"small",onClick:function(O){a((0,be.default)({},g,(T.includes(R.id)?T.filter(function(U){return R.id!==U}):[].concat((0,Qe.Z)(T),[R.id])).map(function(U){return(0,be.default)({},N,U)})))}},R.description?e.createElement(Ie.Z,{text:e.createElement("span",null,R.description),popupPlacement:"top"},e.createElement("span",null,R.name)):R.name),R.tips&&e.createElement(Ie.Z,{text:e.createElement("span",null,R.tips," "),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft3"})))})),!I&&e.createElement("div",{className:"line"}))};return c?e.createElement(qe.Z,{className:"mTop80"}):e.createElement(Ni,{className:"TxtLeft"},e.createElement("div",{className:"mTop30 Font16 title LineHeight26"},e.createElement("img",{src:ki(),className:"mRight5 TxtMiddle",height:26}),_l("\u53EF\u6267\u884C\u54EA\u4E9B\u64CD\u4F5C\uFF1F")),e.createElement("div",{className:"mTop30 pLeft15 pRight15"},m(_l("\u5DE5\u4F5C\u8868"),j.g4.filter(function(A){return o.isForPortal?!["worksheetShareView","worksheetLogging","worksheetDiscuss"].includes(A.key):!0})),m(_l("\u8BB0\u5F55"),j.Qm.filter(function(A){return o.isForPortal?!["recordShare","recordLogging"].includes(A.key):!0})),(f.customeButtons||[]).length>0&&b(_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"),f.customeButtons,t.unableCustomButtons,"unableCustomButtons"),(f.printTempletes||[]).length>0&&b(_l("\u6253\u5370\u6A21\u7248"),f.printTempletes,t.unablePrintTemplates,"unablePrintTemplates",!0)))}var Bi=w(3031),Ri=w.n(Bi),rt=function(a){return function(d){var n=_.every(d,function(r){var l=r[a];return!l}),t=!n&&_.some(d,function(r){var l=r[a];return!l});return{isAll:n,isPart:t}}},Li=function(a){var d=a.filter(function(r){return r.dataMask==="1"}),n=_.every(d,function(r){return r.isDecrypt}),t=!n&&_.some(d,function(r){return r.isDecrypt});return{isAll:n,isPart:t}},Di=function(a,d,n,t){var r=function(p){if(n==="notEdit"&&!a){var i;return(0,v.default)({},p,(i={},(0,be.default)(i,n,a),(0,be.default)(i,"notRead",a),i))}return n==="notRead"&&a?(0,v.default)({},p,{notRead:!0,notEdit:!0,isDecrypt:!1}):n==="isDecrypt"&&a&&p.dataMask==="1"?(0,v.default)({},p,{isDecrypt:!0,notRead:!1}):(0,v.default)({},p,(0,be.default)({},n,a))},l=_.map(t,function(c){return d===void 0||c.fieldId===d?r(c):c}),s=function(p){var i=Ut(p),u=p.find(function(E){return E.fieldId===d});if(!d||!i.includes(d)&&!u.sectionId)return p;if(u.type===52)return p.map(function(E){if(E.fieldId===d||E.sectionId===d){var m;return(0,v.default)({},E,(m={},(0,be.default)(m,n,a),(0,be.default)(m,"notEdit",a&&n==="notRead"?!0:E.notEdit),(0,be.default)(m,"isDecrypt",a&&n==="notRead"?!1:E.isDecrypt),m))}else return E});if(u.sectionId){var f=p.filter(function(E){return E.sectionId===u.sectionId}),x=f.filter(function(E){return E[n]===a});if(f.length<=x.length||!a)return p.map(function(E){if(u.sectionId===E.fieldId){var m,b={};return n==="notEdit"&&!a&&(b={notRead:!1}),(0,v.default)({},E,b,(m={},(0,be.default)(m,n,a),(0,be.default)(m,"notEdit",a&&n==="notRead"?!0:E.notEdit),(0,be.default)(m,"isDecrypt",a&&n==="notRead"?!1:E.isDecrypt),m))}else return E})}return p};return s(l)},Ut=function(a){return _.uniq(a.map(function(d){return d.sectionId}).filter(function(d){return!!d}))},Pi=(0,Q.Z)([`
  text-align: left;
  .title {
    font-weight: 400;
  }
  .fieldsHeader {
    position: sticky;
    top: 0;
    padding: 13px;
    background: #fff;
    z-index: 1;
    border-bottom: 1px solid #eaeaea;
  }
  .filedName {
    width: 260px;
    padding-left: 2px;
    .isParent {
      margin-left: -18px;
    }
  }
  .fieldItem {
    border-bottom: 1px solid #eaeaea;
    padding: 13px;
    .isDecrypt {
      padding: 3px 5px;
      background: #ffe49b;
      border-radius: 3px 3px 3px 3px;
    }
    &.isChild {
      margin-left: 24px;
      .filedName {
        width: 236px;
      }
    }
  }
`],[`
  text-align: left;
  .title {
    font-weight: 400;
  }
  .fieldsHeader {
    position: sticky;
    top: 0;
    padding: 13px;
    background: #fff;
    z-index: 1;
    border-bottom: 1px solid #eaeaea;
  }
  .filedName {
    width: 260px;
    padding-left: 2px;
    .isParent {
      margin-left: -18px;
    }
  }
  .fieldItem {
    border-bottom: 1px solid #eaeaea;
    padding: 13px;
    .isDecrypt {
      padding: 3px 5px;
      background: #ffe49b;
      border-radius: 3px 3px 3px 3px;
    }
    &.isChild {
      margin-left: 24px;
      .filedName {
        width: 236px;
      }
    }
  }
`]),Zi=W.ZP.div(Pi),Fi=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.changeFields=function(t,r,l){var s=n.props.onChange,c=Di(t,r,l,n.state.fields);n.setState({fields:c},function(){s({fields:c})})},n.changeFieldReadAuth=function(t,r){n.changeFields(t,r,"notRead")},n.changeFieldEditAuth=function(t,r){n.changeFields(t,r,"notEdit")},n.changeFieldAddAuth=function(t,r){n.changeFields(t,r,"notAdd")},n.changeFieldDecryptAuth=function(t,r){n.changeFields(!t,r,"isDecrypt")},n.renderLiCon=function(t){var r=t.fieldName,l=t.fieldId,s=t.type,c=t.notAdd,p=t.notEdit,i=t.notRead,u=t.isDecrypt,f=t.hideWhenAdded,x=t.dataMask,E=t.sectionId,m=n.state,b=m.fields,A=m.closeList,k=n.props,S=k.formatViews,h=k.sheet,g=S(h.views),I=g.showEdit,C=h.canAdd,N=b.filter(function(y){return y.dataMask==="1"}).length>0,T=x==="1",R=Ut(b);return A.includes(E)?"":e.createElement("div",{className:M()("fieldItem flexRow alignItemsCenter",{isChild:E}),key:l},e.createElement("div",{className:M()("filedName flexRow alignItemsCenter",{Hand:R.includes(l)}),onClick:function(){n.setState({closeList:A.includes(l)?A.filter(function(Z){return Z!==l}):A.concat(l)})}},R.includes(l)&&e.createElement("i",{className:M()("icon mRight6 Font14 isParent",A.includes(l)?"icon-arrow-right-tip":"icon-arrow-down")}),e.createElement("i",{className:M()("icon Gray_9e mRight6 Font16","icon-"+(0,Ln.hB)(s))}),e.createElement("span",{className:"flex"},r||(s===22?_l("\u5206\u6BB5"):_l("\u5907\u6CE8")),T&&e.createElement("span",{className:"isDecrypt mLeft3"},_l("\u8131\u654F")))),e.createElement("div",{className:"filedSetting flex"},!f&&e.createElement(me.Z,{checked:C?!c:!1,disabled:!C,value:l,onClick:n.changeFieldAddAuth})),e.createElement("div",{className:"filedSetting flex"},e.createElement(me.Z,{checked:!i,value:l,onClick:n.changeFieldReadAuth})),e.createElement("div",{className:"filedSetting flex"},![52].includes(s)&&e.createElement(me.Z,{checked:I?!p:!1,disabled:!I,value:l,onClick:n.changeFieldEditAuth})),N&&e.createElement("div",{className:"filedSetting flex"},T&&e.createElement(me.Z,{checked:u,value:l,onClick:n.changeFieldDecryptAuth})))},n.renderList=function(){var t=n.state.fields;return e.createElement("div",{className:""},D().map(t,function(r){return n.renderLiCon(r)}))},n.state={fields:n.props.fields,closeList:[]},n}return(0,ke.default)(a,[{key:"componentWillReceiveProps",value:function(n){D().isEqual(n.fields,this.props.fields)&&this.setState({fields:n.fields})}},{key:"renderContent",value:function(){var n=this.props,t=n.formatViews,r=n.sheet,l=t(r.views),s=l.showEdit,c=r.canAdd,p=this.state.fields,i=rt("notAdd")(p.filter(function(m){return!m.hideWhenAdded})),u=rt("notRead")(p),f=rt("notEdit")(p),x=Li(p),E=p.filter(function(m){return m.dataMask==="1"}).length>0;return e.createElement(Zi,null,e.createElement("div",{className:"mTop30 Font16 title LineHeight26"},e.createElement("img",{src:Ri(),height:26,className:"mRight5 TxtMiddle"}),_l("\u53EF\u65B0\u589E\u3001\u67E5\u770B\u3001\u7F16\u8F91\u54EA\u4E9B\u5B57\u6BB5\uFF1F")),e.createElement("div",{className:"fieldsHeader Gray flexRow alignItemsCenter mTop20"},e.createElement("div",{className:"filedName bold"},_l("\u540D\u79F0")),e.createElement("div",{className:"filedSetting flex Bold flexRow alignItemsCenter"},e.createElement(me.Z,{checked:c?i.isAll:!1,disabled:!c,clearselected:c?i.isPart:!1,onClick:this.changeFieldAddAuth},_l("\u65B0\u589E")),e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u6307\u201C\u65B0\u589E\u8BB0\u5F55\u201D\u65F6\uFF0C\u53EF\u67E5\u770B\u7684\u5B57\u6BB5")," "),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft3 TxtMiddle"}))),e.createElement("div",{className:"filedSetting flex Bold"},e.createElement(me.Z,{checked:u.isAll,clearselected:u.isPart,onClick:this.changeFieldReadAuth},_l("\u67E5\u770B"))),e.createElement("div",{className:"filedSetting flex Bold"},e.createElement(me.Z,{checked:s?f.isAll:!1,disabled:!s,clearselected:s?f.isPart:!1,onClick:this.changeFieldEditAuth},_l("\u7F16\u8F91"))),E&&e.createElement("div",{className:"filedSetting flex Bold"},e.createElement(me.Z,{checked:x.isAll,clearselected:x.isPart,onClick:this.changeFieldDecryptAuth},_l("\u89E3\u7801")))),this.renderList())}},{key:"render",value:function(){return e.createElement("div",null,this.renderContent())}}]),a}(e.PureComponent),Oi=w(40979),Mi=(0,Q.Z)([`
  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
`],[`
  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
`]),Ui=(0,Q.Z)([`
  padding: 24px 40px;
  width: 880px;
  background: #ffffff;
  box-shadow: 0px 12px 24px 1px rgba(0, 0, 0, 0.16);
  right: 0;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  z-index: 1000;
  .headerCon {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 12px;
  }
  .tabCon {
    border-bottom: 1px solid #dddddd;
    li {
      display: inline-block;
      padding: 13px;
      border-bottom: 3px solid transparent;
      font-weight: 600;
      &.cur {
        color: #2196f3;
        border-bottom: 3px solid #2196f3;
      }
    }
  }
  .setCon {
    overflow: auto;
  }
  .pointer {
    color: #bdbdbd;
    &:hover {
      color: #2196f3;
    }
  }
`],[`
  padding: 24px 40px;
  width: 880px;
  background: #ffffff;
  box-shadow: 0px 12px 24px 1px rgba(0, 0, 0, 0.16);
  right: 0;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  z-index: 1000;
  .headerCon {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 12px;
  }
  .tabCon {
    border-bottom: 1px solid #dddddd;
    li {
      display: inline-block;
      padding: 13px;
      border-bottom: 3px solid transparent;
      font-weight: 600;
      &.cur {
        color: #2196f3;
        border-bottom: 3px solid #2196f3;
      }
    }
  }
  .setCon {
    overflow: auto;
  }
  .pointer {
    color: #bdbdbd;
    &:hover {
      color: #2196f3;
    }
  }
`]),Hi=W.ZP.div(Mi),Wi=W.ZP.div(Ui),Qi=[_l("\u8BB0\u5F55\u8303\u56F4"),_l("\u64CD\u4F5C"),_l("\u5B57\u6BB5")],Gi=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.renderContent=function(){switch(n.state.tab){case 0:return e.createElement(Si,(0,v.default)({},n.props,{extendAttrList:n.state.extendAttrList}));case 1:return e.createElement(Ti,n.props);case 2:return e.createElement(Fi,n.props)}},n.state={showFieldSettingDialog:!1,tab:0,extendAttrList:[]},n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this,t=this.props.sheet;hn.Z.getExtendAttrOptionalControl({worksheetId:t.sheetId}).then(function(r){n.setState({extendAttrList:r})})}},{key:"render",value:function(){var n=this,t=this.props,r=t.showRoleSet,l=t.onClose,s=t.sheet,c=t.projectId,p=t.appId,i=s.iconUrl,u=s.sheetName,f=s.sheetId,x=this.state.tab,E=x===void 0?0:x;return e.createElement(bt(),{component:"div",transitionName:"roleSettingSlide",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},r?e.createElement(Hi,null,e.createElement("div",{className:"cover",onClick:function(){l()}}),e.createElement(Wi,{className:"roleSettingWrap flexColumn"},e.createElement("div",{className:""},e.createElement("div",{className:"headerCon flexRow"},e.createElement("div",{className:"flex flexRow alignItemsCenter"},i&&e.createElement(kn.Z,{url:s.iconUrl,fill:"#757575",size:24}),e.createElement("span",{className:"overflow_ellipsis TxtLeft mLeft5"},u)," ",e.createElement(V.Z,{className:"Font16 pointer mLeft8 Hand",icon:"launch",onClick:function(){(0,Oi.zF)({sourceName:u,templateId:"",sourceId:f,projectId:c,appconfig:{appId:p,appSectionId:""}})}})),e.createElement(V.Z,{icon:"close",className:"Right LineHeight25 Gray_9 Hand Font22 ThemeHoverColor3",onClick:l})),e.createElement("ul",{className:"tabCon TxtLeft"},Qi.map(function(m,b){return e.createElement("li",{className:M()("Hand Font15 mRight24",{cur:b===E}),onClick:function(){n.setState({tab:b})}},m)}))),e.createElement("div",{className:"setCon flex"},this.renderContent()))):null)}}]),a}(e.PureComponent),On=w(15742),_i=(0,Q.Z)([`
  flex: 52;
`],[`
  flex: 52;
`]),Ht=W.ZP.div(_i),Wt=function(a,d,n){var t={READ:"canRead",EDIT:"canEdit",REMOVE:"canRemove",ADD:"canAdd"},r=t[d];return t[d]==="canAdd"?(0,v.default)({},a,{canAdd:n,views:D().map(a.views,function(l){return(0,v.default)({},l,{canRead:n&&jn(a.views,"canRead")<=0?!0:l.canRead})})}):(0,v.default)({},a,{canAdd:t[d]==="canRead"&&!n?!1:a.canAdd,views:D().map(a.views,function(l){if(r!=="canRead"){var s;return(0,v.default)({},l,(s={},(0,be.default)(s,r,n),(0,be.default)(s,"canRead",n?!0:l.canRead),(0,be.default)(s,"navigateHide",n?l.navigateHide:!1),s))}else{var c;return(0,v.default)({},l,(c={},(0,be.default)(c,r,n),(0,be.default)(c,"canEdit",!1),(0,be.default)(c,"canRemove",!1),c))}})})},zi=function(a,d,n){return(0,v.default)({},a,{views:D().map(a.views,function(t){return t.viewId===d?(0,v.default)({},t,n):t})})},it=function(a,d){return D().some(a,function(n){return n[d]})},jn=function(a,d){return D().filter(a,function(n){return n[d]}).length},ji=function(o){(0,ye.default)(a,o);function a(){var d,n,t,r;(0,we.default)(this,a);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=(n=(t=(0,ge.default)(this,(d=a.__proto__||Se()(a)).call.apply(d,[this].concat(s))),t),t.state={show:!1,showRoleSet:!1},t.formatViews=function(p){var i=jn(p,"canRead"),u=jn(p,"canEdit"),f=jn(p,"canRemove"),x=it(p,"canRead"),E=it(p,"canEdit"),m=it(p,"canRemove");return{readSize:i,editSize:u,removeSize:f,showRead:x,showEdit:E,showRemove:m}},t.toggleViewAuth=function(p,i){var u=t.props,f=u.sheet,x=u.onChange;x(Wt(f,p,i))},t.toggleViewLevel=function(p,i,u){var f=t.props,x=f.sheet,E=f.onChange;E(zi((0,v.default)({},x,{canAdd:u?!1:x.canAdd}),p,i))},t.changeSheetLevel=function(p){var i=t.props,u=i.sheet,f=i.onChange;f((0,v.default)({},u,p))},t.changeSheetOptionInfo=function(p){var i=t.props,u=i.sheet,f=i.onChange;f((0,v.default)({},u,p))},t.setShowRole=function(){t.setState({showRoleSet:!0})},n),(0,ge.default)(t,r)}return(0,ke.default)(a,[{key:"render",value:function(){var n=this,t=this.state.showRoleSet,r=this.props,l=r.sheet,s=r.updateLookPages,c=r.updateNavigateHide,p=r.projectId,i=r.appId,u=this.formatViews(l.views),f=u.readSize,x=u.editSize,E=u.removeSize,m=u.showRead,b=u.showEdit,A=u.showRemove,k=m||b||A,S=[{size:f,key:"READ"},{size:x,key:"EDIT"},{size:E,key:"REMOVE"},{key:"ADD"}];return e.createElement("div",{className:"tableRow"},e.createElement("div",{className:"viewsGroup"},e.createElement("div",{className:M()("Hand viewSetting"),onClick:function(){n.setState({show:!n.state.show})}},e.createElement("div",{className:M()("boxSizing TxtLeft Hand  flexRow viewSettingItemMax"),title:l.sheetName},e.createElement("span",{className:M()(l.sheetId&&l.views&&l.views.length?"pLeft5":"pLeft25")}),!!(l.sheetId&&l.views&&l.views.length)&&e.createElement(V.Z,{icon:"arrow-right-tip",className:M()("Gray_75 arrowIcon",{rotated:this.state.show})}),e.createElement("span",{className:"mRight6 InlineBlock"},e.createElement(kn.Z,{url:l.iconUrl,fill:"#757575",size:18})),e.createElement("span",{className:"flex overflow_ellipsis ThemeHoverColor3 InlineBlock"},l.sheetName||l.name),e.createElement(Ie.Z,{popupPlacement:"top",disable:!(l.checked||f>0),text:e.createElement("span",null,_l("\u5728\u5BFC\u822A\u4E2D\u9690\u85CF"))},e.createElement("span",{className:M()("mLeft7 arrowIconShow",{show:l.navigateHide,canShow:l.checked||f>0}),onClick:function(g){(l.checked||f>0)&&(c(!!l.sheetId,l.pageId||l.sheetId,!l.navigateHide),g.stopPropagation())}},e.createElement(V.Z,{icon:"public-folder-hidden"})))),e.createElement(Ht,{className:"con flexRow"},l.sheetId?S.map(function(h,g){return e.createElement("div",{key:g,className:"viewSettingItem",style:{height:45}},e.createElement(me.Z,{className:"InlineBlock",checked:h.key==="ADD"?f<=0?!1:l.canAdd:h.size===l.views.length,clearselected:h.key!=="ADD"&&h.size>0&&h.size!==l.views.length,onClick:function(C,N,T){n.toggleViewAuth(h.key,!C),T.stopPropagation()}}),!!h.size&&e.createElement("div",null,h.size===l.views.length?_l("\u5168\u90E8"):_l("%0\u4E2A",h.size)))}):e.createElement("div",{className:"viewSettingItem",style:{height:45}},e.createElement(me.Z,{className:"InlineBlock",checked:l.checked,onClick:function(g){return s(l.pageId,!l.checked)}})))),l.sheetId&&e.createElement(ci(),{component:"div"},this.state.show?e.createElement(pi,{className:"viewGroup",hasViews:!!(l.views&&l.views.length)},D().map(l.views,function(h){return e.createElement("div",{className:"viewSetting",key:h.viewId},e.createElement("div",{className:"boxSizing TxtLeft overflow_ellipsis viewSettingItemMax"},e.createElement("div",{className:"mLeft52"},e.createElement(V.Z,{className:"Gray_bd mRight8 Font14",icon:D().find(On.D,{id:On.B[h.type]}).icon}),h.viewName)),e.createElement(Ht,{className:"con flexRow"},e.createElement("div",{className:"viewSettingItem",style:{height:45}},e.createElement(me.Z,{checked:h.canRead,className:"InlineBlock",onClick:function(I){var C=I?{canEdit:!1,canRead:!1,canRemove:!1}:{canRead:!0};n.toggleViewLevel(h.viewId,C,(I?f-1:f+1)<=0)}})),e.createElement("div",{className:"viewSettingItem",style:{height:45}},e.createElement(me.Z,{checked:h.canEdit,className:"InlineBlock",onClick:function(I){var C=I?{canEdit:!1,canRead:!0}:{canEdit:!0,canRead:!0};n.toggleViewLevel(h.viewId,C)}})),e.createElement("div",{className:"viewSettingItem",style:{height:45}},e.createElement(me.Z,{checked:h.canRemove,className:"InlineBlock",onClick:function(I){var C=I?{canRemove:!1,canRead:!0}:{canRemove:!0,canRead:!0};n.toggleViewLevel(h.viewId,C)}})),e.createElement("div",{className:"viewSettingItem",style:{height:45}})))})):null)),e.createElement("div",{className:M()("settingGroup",{showSet:k})},k?e.createElement("span",{className:"ThemeColor3 ThemeHoverColor2 Hand",onClick:this.setShowRole},_l("\u8BBE\u7F6E")):e.createElement("span",{className:"Gray_9"},"-")),t&&e.createElement(Gi,{showRoleSet:t,onClose:function(){n.setState({showRoleSet:!1})},projectId:p,appId:i,key:l.sheetId,formatViews:this.formatViews,canAdd:l.canAdd,fields:l.fields,sheet:l,onChange:this.changeSheetLevel,changeSheetOptionInfo:this.changeSheetOptionInfo,isForPortal:this.props.isForPortal}))}}]),a}(e.PureComponent),Qt,Gt,Vi=(0,Q.Z)([`
  .optionTxt {
    font-size: 12px;
    color: #919191;
  }
  .toUser {
    color: #5a5a5a;
    &:hover {
      color: #2196f3;
    }
  }
  .ming.Input {
    border: 1px solid #ddd;
  }
  .ming.Dropdown .Dropdown--border,
  .dropdownTrigger .Dropdown--border {
    border-color: #ddd;
  }
`],[`
  .optionTxt {
    font-size: 12px;
    color: #919191;
  }
  .toUser {
    color: #5a5a5a;
    &:hover {
      color: #2196f3;
    }
  }
  .ming.Input {
    border: 1px solid #ddd;
  }
  .ming.Dropdown .Dropdown--border,
  .dropdownTrigger .Dropdown--border {
    border-color: #ddd;
  }
`]),Yi=(0,Q.Z)([`
  width: 52%;
`],[`
  width: 52%;
`]),Ji=W.ZP.div(Vi),Xi=W.ZP.div(Yi),Ki=[j.Wv.OnlyManageSelfRecord,j.Wv.OnlyManageSelfAndSubRecord,j.Wv.ViewAllAndManageSelfRecord,j.Wv.ViewAllAndManageSelfAndSubRecord],st=[j.Wv.OnlyManageSelfAndSubRecord,j.Wv.ViewAllAndManageSelfAndSubRecord],_t=[j.Wv.OnlyManageSelfRecord,j.Wv.ViewAllAndManageSelfRecord],qi=(Gt=Qt=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.updateSheetAuth=function(t){var r=n.props,l=r.onChange,s=r.roleDetail;l((0,v.default)({},s,{sheets:D().map(s.sheets,function(c){return c.sheetId===t.sheetId?t:c})}))},n.changePermissionWay=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=n.props,s=l.onChange,c=l.roleDetail;c=c===void 0?{}:c;var p=c.description,i=c.permissionWay;if(i!==t){var u={permissionWay:t,description:p===j.oS[i]?j.oS[t]:p};j.Wv.OnlyViewAllRecord===t?u=(0,v.default)({},u,{generalAdd:{enable:!1}}):[j.Wv.ManageAllRecord,j.Wv.ViewAllAndManageSelfRecord,j.Wv.OnlyManageSelfRecord].includes(t)&&(n.state.actionList.map(function(f){u[f.key]={enable:!0}}),u=(0,v.default)({},u)),r&&(u.extendAttrs=[]),s(u)}},n.updateNavigateHide=function(t,r,l){var s=n.props,c=s.roleDetail,p=s.onChange;p(t?{sheets:D().cloneDeep(c.sheets).map(function(i){return r===i.sheetId?(0,v.default)({},i,{navigateHide:l}):i})}:{pages:D().cloneDeep(c.pages).map(function(i){return r===i.pageId?(0,v.default)({},i,{navigateHide:l}):i})})},n.updateLookPages=function(t,r){var l=n.props,s=l.roleDetail,c=l.onChange,p=D().cloneDeep(s.pages).map(function(i){return t===i.pageId?(0,v.default)({},i,{checked:r,navigateHide:r?i.navigateHide:!1}):i});c({pages:p})},n.state={actionList:j.VW.filter(function(t){return d.isForPortal?!["gneralShare","generalLogging"].includes(t.key):!0})},n}return(0,ke.default)(a,[{key:"componentDidUpdate",value:function(n){n.loading&&!this.props.loading&&!n.roleDetail.roleId&&this.input&&this.input.select()}},{key:"renderAuth",value:function(){var n=this,t=this.props,r=t.roleDetail;r=r===void 0?{}:r;var l=r.permissionWay,s=r.optionalControls,c=r.extendAttrs,p=t.isForPortal,i=t.onChange,u=t.roleDetail,f=[j.Wv.ManageAllRecord,j.Wv.ViewAllAndManageSelfRecord,j.Wv.OnlyManageSelfRecord,j.Wv.OnlyViewAllRecord].map(function(A){return{text:j.oS[A],value:A}}),x=j.Wv.CUSTOM===l,E=Ki.indexOf(l)!==-1,m=E&&st.indexOf(l)!==-1,b=this.state.actionList;return j.Wv.OnlyViewAllRecord===l&&(b=b.filter(function(A){return A.key!=="generalAdd"})),e.createElement(e.Fragment,null,e.createElement("div",{className:"Font14 mTop25 bold"},_l("\u5206\u53D1\u54EA\u4E9B\u5E94\u7528\u9879\uFF1F")),e.createElement("div",{className:"mTop15 Font14"},e.createElement(mn.Z,{text:_l("\u5206\u53D1\u6240\u6709\u5E94\u7528\u9879\uFF08\u7B80\u5355\uFF09"),checked:!x,value:j.Wv.ViewAllAndManageSelfRecord,onClick:this.changePermissionWay}),e.createElement(mn.Z,{text:_l("\u5206\u53D1\u6709\u9009\u62E9\u7684\u5E94\u7528\u9879\uFF08\u9AD8\u7EA7\uFF09"),className:"mLeft40",checked:x,value:j.Wv.CUSTOM,onClick:function(k){return n.changePermissionWay(k,!0)}})),x?this.renderAuthTable():e.createElement("div",null,e.createElement("div",{className:"Font14 mTop25 bold"},_l("\u6743\u9650")),e.createElement("div",{className:"mTop8"},e.createElement(gn.Z,{className:"w100 Font14",data:f,value:l,border:!0,renderTitle:function(){return j.oS[l]},menuStyle:{width:"100%"},onChange:function(k){return n.changePermissionWay(k,!0)}})),E&&!p?e.createElement("div",{className:"mTop15 flexRow alignItemsCenter"},e.createElement(yn.Z,{size:"small",className:"InlineBlock",checked:m,onClick:function(k){if(k){var S=st.indexOf(l);n.changePermissionWay(_t[S])}else{var h=_t.indexOf(l);n.changePermissionWay(st[h])}}}),e.createElement("span",{className:"mLeft10"}," ",_l("\u4E0B\u5C5E\u52A0\u5165/\u62E5\u6709\u7684\u8BB0\u5F55")),e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u5728\u7EC4\u7EC7\u7BA1\u7406\u3010\u6C47\u62A5\u5173\u7CFB\u3011\u4E2D\u7BA1\u7406\u7528\u6237\u7684\u4E0B\u5C5E")," "),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft3 TxtMiddle"}))):null,E&&s.length>0&&!p?e.createElement("div",{className:"mTop15 flexRow"},e.createElement("div",{className:"left"},e.createElement("span",{className:"flexRow alignItemsCenter"},e.createElement(yn.Z,{className:"InlineBlock",checked:s.filter(function(A){return c.includes(A.id)}).length>0,size:"small",onClick:function(k){i(k?{extendAttrs:[]}:{extendAttrs:s.map(function(S){return S.id})})}}),e.createElement("span",{className:"mLeft10"},_l("\u5339\u914D\u7528\u6237\u6743\u9650\u6807\u7B7E\u7684\u8BB0\u5F55")),e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u5728\u672C\u5E94\u7528\u3010\u7528\u6237-\u6269\u5C55\u3011\u4E2D\u7BA1\u7406\u7528\u6237\u7684\u6743\u9650\u6807\u7B7E")," "),popupPlacement:"top"},e.createElement(V.Z,{icon:"workflow_error",className:"Font16 Gray_9e mLeft3 TxtMiddle"})))),e.createElement("div",{className:"right mLeft40",style:{display:"flex",gap:"10px 46px",flexWrap:"wrap"}},s.map(function(A){return e.createElement("span",{className:"flexRow alignItemsCenter"},e.createElement(me.Z,{className:"InlineBlock",checked:c.indexOf(A.id)>-1,text:A.name,onClick:function(S){i(S?{extendAttrs:c.filter(function(h){return h!==A.id})}:{extendAttrs:c.concat(A.id)})}}))}))):null,!x&&e.createElement(e.Fragment,null,e.createElement("div",{className:"mTop30"},e.createElement("span",{className:"Bold"},_l("\u64CD\u4F5C\u6743\u9650")),e.createElement("span",{className:"mLeft5 Hand ThemeHoverColor3 optionTxt",onClick:function(){var k={};b.map(function(S){k[S.key]={enable:b.filter(function(h){return!u[h.key].enable}).length>0}}),i(k)}},b.filter(function(A){return!u[A.key].enable}).length>0?_l("\u5168\u9009"):_l("\u53D6\u6D88\u5168\u9009"))),e.createElement("div",{className:"actionListCon"},this.state.actionList.map(function(A){return e.createElement("div",{className:"Width120 mTop20 InlineBlock flexRow alignItemsCenter"},e.createElement(me.Z,{className:"subCheckbox InlineBlock TxtMiddle",disabled:A.key==="generalAdd"&&j.Wv.OnlyViewAllRecord===l,checked:A.key==="generalAdd"&&j.Wv.OnlyViewAllRecord===l?!1:u[A.key].enable,size:"small",onClick:function(S){i((0,be.default)({},A.key,{enable:!u[A.key].enable}))}},A.txt),A.tips&&e.createElement(Ie.Z,{text:e.createElement("span",null,n.props.isForPortal&&A.key==="generalDiscussion"?_l("\u5305\u542B\u8BB0\u5F55\u8BA8\u8BBA"):A.tips," "),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft3 TxtMiddle"})))})))))}},{key:"renderAuthTable",value:function(){var n=this,t=this.props,r=t.roleDetail;r=r===void 0?{}:r;var l=r.sheets,s=l===void 0?[]:l,c=r.pages,p=c===void 0?[]:c,i=t.showRoleSet,u=t.projectId,f=t.appId,x=[{text:_l("\u67E5\u770B"),operatorKey:"READ",key:"canRead"},{text:_l("\u7F16\u8F91"),operatorKey:"EDIT",key:"canEdit"},{text:_l("\u5220\u9664"),operatorKey:"REMOVE",key:"canRemove"},{text:_l("\u65B0\u589E"),operatorKey:"ADD",key:"canAdd"}],E=s.concat(p).sort(function(m,b){return m.sortIndex-b.sortIndex});return e.createElement(e.Fragment,null,e.createElement("div",{className:"Font14 mTop32 Gray_75"},_l("\u53EF\u4EE5\u8BBF\u95EE\u7684\u89C6\u56FE\u548C\u6570\u636E\u64CD\u4F5C\u6743\u9650")),e.createElement("div",{className:M()("authTable mTop12")},e.createElement("div",{className:"tableHeader flexRow"},e.createElement("div",{className:"TxtLeft pLeft24 boxSizing tableHeaderItemMax flex"},_l("\u5E94\u7528\u9879")),e.createElement(Xi,{className:"con flexRow"},x.map(function(m,b){var A=void 0,k=void 0;if(m.operatorKey==="READ")k=!s.filter(function(g){return g.views.filter(function(I){return!I[m.key]}).length}).length&&!p.filter(function(g){return!g.checked}).length,A=!k&&(!!s.filter(function(g){return g.views.filter(function(I){return I[m.key]}).length}).length||!!p.filter(function(g){return g.checked}).length);else if(m.operatorKey==="ADD")k=s.filter(function(g){return g.canAdd}).length===s.length&&s.length>0,A=!k&&s.filter(function(g){return g.canAdd}).length!==s.length&&s.filter(function(g){return g.canAdd}).length>0;else{var S=[],h=[];s.map(function(g){S.push.apply(S,(0,Qe.Z)(g.views.filter(function(I){return I[m.key]}))),h.push.apply(h,(0,Qe.Z)(g.views))}),k=S.length===h.length&&h.length>0,A=!k&&S.length!==h.length&&S.length>0}return e.createElement("div",{key:b,className:"tableHeaderItem tableHeaderOther"},e.createElement(me.Z,{className:"InlineBlock",checked:k,clearselected:A,onClick:function(I){return n.toggleAllViewAuth(m.operatorKey,!I)}}),m.text)})),e.createElement("div",{className:"tableHeaderItem tableHeaderOption TxtCenter"},_l("\u6570\u636E\u64CD\u4F5C\u6743\u9650"))),E.length?D().map(E,function(m){return e.createElement(ji,{projectId:u,appId:f,showRoleSet:i,isForPortal:n.props.isForPortal,sheet:m,key:m.sheetId||m.pageId,onChange:n.updateSheetAuth,updateLookPages:n.updateLookPages,updateNavigateHide:n.updateNavigateHide,getContainer:function(){return n.container||document.body}})}):e.createElement("div",{className:"emptyContent"},_l("\u8FD8\u6CA1\u6709\u521B\u5EFA\u5DE5\u4F5C\u8868\u6216\u81EA\u5B9A\u4E49\u9875\u9762"))))}},{key:"toggleAllViewAuth",value:function(n,t){var r=this.props,l=r.roleDetail,s=r.onChange,c=(l.sheets||[]).map(function(i){return Wt(i,n,t)});if(n==="READ"){var p=D().cloneDeep(l.pages).map(function(i){return(0,v.default)({},i,{checked:t,navigateHide:t?i.navigateHide:!1})});s((0,v.default)({},l,{sheets:c,pages:p}))}else s((0,v.default)({},l,{sheets:c}))}},{key:"render",value:function(){var n=this,t=this.props,r=t.roleDetail;r=r===void 0?{}:r;var l=r.name,s=r.description,c=r.roleId,p=r.hideAppForMembers,i=t.loading,u=t.onChange,f=t.onSave,x=t.onDel,E=t.saveLoading,m=t.roleDetailCache,b=t.isForPortal,A=t.setQuickTag,k=t.canEditUser;return c=c==="new"?"":c,i?e.createElement(qe.Z,{className:"mTop10"}):e.createElement(e.Fragment,null,e.createElement(Ji,{className:"setBody"},e.createElement(si.Z,null,e.createElement("div",{className:"settingForm",ref:function(h){n.container=h}},e.createElement("div",{className:"roleTitle Bold Font17"},c?_l("\u7F16\u8F91\u89D2\u8272"):_l("\u521B\u5EFA\u89D2\u8272")),e.createElement("div",{className:"flexRow alignItemsCenter mTop30"},e.createElement("div",{className:"Font14 bold flex"},_l("\u89D2\u8272\u540D\u79F0"))),e.createElement("div",{className:"mTop8 flexRow"},e.createElement(Ft.Z,{type:"text",value:l,className:"nameInput",manualRef:function(h){n.input=h},maxLength:20,onChange:function(h){u({name:h})}}),!!c&&!b&&e.createElement("span",{className:"Font14 toUser Hand flexRow alignItemsCenter mLeft30"},e.createElement(me.Z,{className:"Gray",size:"small",checked:p,onClick:function(){u({hideAppForMembers:!p})},text:_l("\u9690\u85CF\u5E94\u7528")}),e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u5BF9\u5F53\u524D\u89D2\u8272\u4E0B\u7684\u7528\u6237\u4EC5\u6388\u4E88\u6743\u9650\uFF0C\u4F46\u4E0D\u663E\u793A\u5E94\u7528\u5165\u53E3\u3002\u901A\u5E38\u7528\u4E8E\u8DE8\u5E94\u7528\u5173\u8054\u6570\u636E\u6216\u5F15\u7528\u89C6\u56FE\u65F6\uFF0C\u53EA\u9700\u8981\u7528\u6237\u4ECE\u53E6\u4E00\u4E2A\u5E94\u7528\u4E2D\u8FDB\u884C\u64CD\u4F5C\u7684\u573A\u666F\u3002")),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_bd mLeft7"})))),e.createElement("div",{className:"Font14 mTop25 bold"},_l("\u63CF\u8FF0")),e.createElement("div",{className:"mTop8"},e.createElement(Ft.Z,{type:"text",className:"w100",value:s||"",maxLength:300,onChange:function(h){u({description:h})}})),this.renderAuth()))),e.createElement(ze.A,{className:"footer flexRow alignItemsCenter"},e.createElement("div",{className:M()("saveBtn Hand flexRow alignItemsCenter",{disabled:E||D().isEqual(this.props.roleDetail,m)&&!!c}),onClick:function(){E||D().isEqual(n.props.roleDetail,m)&&c||f()}},E?c?_l("\u4FDD\u5B58\u4E2D"):_l("\u521B\u5EFA\u4E2D"):c?_l("\u4FDD\u5B58"):_l("\u521B\u5EFA")),e.createElement("div",{onClick:function(){D().isEqual(n.props.roleDetail,m)&&c||x()},className:M()("delBtn Hand",{disabled:D().isEqual(this.props.roleDetail,m)&&!!c})},c?_l("\u53D6\u6D88"):_l("\u5220\u9664")),!!c&&k&&e.createElement(e.Fragment,null,e.createElement("div",{className:"line"}),e.createElement("div",{className:"toUser Hand Bold",onClick:function(){n.props.handleChangePage(function(){A({roleId:c,tab:"user"})})}},_l("\u7BA1\u7406\u7528\u6237")))))}}]),a}(e.PureComponent),Qt.propTypes={loading:Je().bool,roleDetail:j.ng,onChange:Je().func,onSave:Je().func},Gt),dt,zt,$i=(0,Q.Z)([`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
  .header {
    padding: 14px 32px;
    border-bottom: 1px solid #ddd;
  }
  .footer {
    padding: 15px 48px 28px;
    background-color: #fff;
  }
  .setBody {
    flex: 1 1 0;
    .settingForm {
      padding: 25px 48px 30px;
      max-width: 1250px;
    }

    .nameInput {
      width: 300px;
    }

    .subCheckbox :global(.Checkbox-box) {
      margin-right: 10px !important;
    }

    .authTable {
      .tableHeader {
        background-color: #f5f5f5;
        display: flex;
        flex-flow: row nowrap;
        height: 40px;
        line-height: 40px;
        position: sticky;
        top: 0;
        z-index: 1;
        .tableHeaderItemMax {
          width: 35%;
          text-align: center;
          font-weight: bold;
        }
        .tableHeaderOption {
          width: 13%;
          justify-content: center !important;
        }
        .tableHeaderOther {
          width: 25%;
        }
        .tableHeaderItem {
          font-weight: bold;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: left;
        }
      }
      .emptyContent {
        border-bottom: 1px solid #eaeaea;
        color: #bdbdbd;
        line-height: 45px;
        padding-left: 24px;
      }
      .tableRow {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        text-align: center;

        .viewsGroup {
          border-right: 1px solid #eaeaea;
          width: 87%; //13*4+35
        }

        .viewSetting {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          line-height: normal;
          line-height: 32px;
          svg {
            vertical-align: middle !important;
          }
          .arrowIconShow {
            border-radius: 50%;
            display: inline-block;
            margin-right: 20px;
            opacity: 0;
            transition: all 0.4s ease;
            width: 32px;
            text-align: center;
            i {
              color: #bdbdbd;
              line-height: 1;
            }
            &.canShow:hover {
              background-color: #f7f7f7;
              opacity: 1;
              i {
                color: #2196f3;
              }
            }
            &.show {
              opacity: 1;
              i {
                color: #ff8a00 !important;
              }
            }
          }
          &:hover {
            .arrowIconShow.canShow {
              opacity: 1;
            }
          }
          .viewSettingItemMax {
            width: 100%;
            flex: 35;
            .mLeft52 {
              margin-left: 52px;
            }
          }
          .viewSettingItem {
            flex: 13;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: left;
          }
        }

        .settingGroup {
          width: 13%;
          padding: 0 10px;
          &.showSet {
            span {
              padding: 5px 10px;
              &:hover {
                background-color: #f7f7f7;
                border-radius: 5px;
              }
            }
          }
        }

        .arrowIcon {
          width: 20px;
          line-height: 32px;
          transition: transform 0.2s ease;
          transform: rotate(0deg);
          transform-origin: 6px center;
          &.rotated {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  .list {
    margin-top: 15px;
    li {
      width: 25%;
      float: left;
      margin-bottom: 15px;
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
`],[`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
  .header {
    padding: 14px 32px;
    border-bottom: 1px solid #ddd;
  }
  .footer {
    padding: 15px 48px 28px;
    background-color: #fff;
  }
  .setBody {
    flex: 1 1 0;
    .settingForm {
      padding: 25px 48px 30px;
      max-width: 1250px;
    }

    .nameInput {
      width: 300px;
    }

    .subCheckbox :global(.Checkbox-box) {
      margin-right: 10px !important;
    }

    .authTable {
      .tableHeader {
        background-color: #f5f5f5;
        display: flex;
        flex-flow: row nowrap;
        height: 40px;
        line-height: 40px;
        position: sticky;
        top: 0;
        z-index: 1;
        .tableHeaderItemMax {
          width: 35%;
          text-align: center;
          font-weight: bold;
        }
        .tableHeaderOption {
          width: 13%;
          justify-content: center !important;
        }
        .tableHeaderOther {
          width: 25%;
        }
        .tableHeaderItem {
          font-weight: bold;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: left;
        }
      }
      .emptyContent {
        border-bottom: 1px solid #eaeaea;
        color: #bdbdbd;
        line-height: 45px;
        padding-left: 24px;
      }
      .tableRow {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        text-align: center;

        .viewsGroup {
          border-right: 1px solid #eaeaea;
          width: 87%; //13*4+35
        }

        .viewSetting {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          line-height: normal;
          line-height: 32px;
          svg {
            vertical-align: middle !important;
          }
          .arrowIconShow {
            border-radius: 50%;
            display: inline-block;
            margin-right: 20px;
            opacity: 0;
            transition: all 0.4s ease;
            width: 32px;
            text-align: center;
            i {
              color: #bdbdbd;
              line-height: 1;
            }
            &.canShow:hover {
              background-color: #f7f7f7;
              opacity: 1;
              i {
                color: #2196f3;
              }
            }
            &.show {
              opacity: 1;
              i {
                color: #ff8a00 !important;
              }
            }
          }
          &:hover {
            .arrowIconShow.canShow {
              opacity: 1;
            }
          }
          .viewSettingItemMax {
            width: 100%;
            flex: 35;
            .mLeft52 {
              margin-left: 52px;
            }
          }
          .viewSettingItem {
            flex: 13;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: left;
          }
        }

        .settingGroup {
          width: 13%;
          padding: 0 10px;
          &.showSet {
            span {
              padding: 5px 10px;
              &:hover {
                background-color: #f7f7f7;
                border-radius: 5px;
              }
            }
          }
        }

        .arrowIcon {
          width: 20px;
          line-height: 32px;
          transition: transform 0.2s ease;
          transform: rotate(0deg);
          transform-origin: 6px center;
          &.rotated {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  .list {
    margin-top: 15px;
    li {
      width: 25%;
      float: left;
      margin-bottom: 15px;
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
`]),es=function(a,d){(d.sheets||[]).forEach(function(n){n.sheetName=(0,je.T3)(a,n.sheetId).name||n.sheetName,(n.views||[]).forEach(function(t){t.viewName=(0,je.T3)(a,t.viewId).name||t.viewName}),(n.fields||[]).forEach(function(t){t.fieldName=(0,je.T3)(a,t.fieldId).name||t.fieldName})}),(d.pages||[]).forEach(function(n){n.name=(0,je.T3)(a,n.pageId).name||n.name})},ns=W.ZP.div($i),ts=(zt=dt=function(o){(0,ye.default)(a,o);function a(){var d,n,t,r;(0,we.default)(this,a);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=(n=(t=(0,ge.default)(this,(d=a.__proto__||Se()(a)).call.apply(d,[this].concat(s))),t),t.state={loading:!1,roleDetail:void 0,hasChange:!1,saveLoading:!1,roleDetailCache:void 0},t.updateRoleDetail=function(p){var i=t.props.roleId,u=(0,v.default)({},t.state.roleDetail,p);t.setState({roleDetail:u,hasChange:i?!D().isEqual(u,t.state.roleDetailCache):!0})},t.onFormat=function(){t.props.onFormat()},t.onSave=function(p){var i=t.props,u=i.appId,f=i.roleId,x=i.editCallback,E=i.isForPortal,m=i.projectId;if(f=f==="new"?"":f,f){var g=t.state.roleDetail,I=g===void 0?{}:g;t.setState({saveLoading:!0});var C=null,N={projectId:I.projectId,appId:u,roleId:f,appRoleModel:(0,v.default)({},I,{name:(I.name||"").trim()||t.defaultRoleName,sheets:I.permissionWay===j.Wv.CUSTOM?I.sheets:void 0})};return E?C=ue.Z.editAppExRole(N):C=Be.Z.editAppRole(N),C.then(function(T){T===1?(t.setState({hasChange:!1,saveLoading:!1,roleDetailCache:I}),x(f,p),alert(_l("\u4FDD\u5B58\u6210\u529F"))):T===2?(alert(_l("\u89D2\u8272\u540D\u79F0\u91CD\u590D\uFF0C\u8BF7\u91CD\u65B0\u547D\u540D"),3),t.setState({saveLoading:!1})):(alert(_l("\u7F16\u8F91\u5931\u8D25"),2),t.setState({saveLoading:!1}))})}else{var b=t.state.roleDetail,A=b.roleId,k=(0,ri.Z)(b,["roleId"]),S=(0,v.default)({appId:u},k,{name:k.name.trim()||t.defaultRoleName,sheets:k.permissionWay===j.Wv.CUSTOM?k.sheets:void 0}),h=null;t.setState({saveLoading:!0}),E?h=ue.Z.addExRole((0,v.default)({},S,{projectId:m})):h=Be.Z.addRole(S),h.then(function(T){T.resultCode===1?(t.setState({hasChange:!1,saveLoading:!1}),x(T.roleId,p),alert(_l("\u521B\u5EFA\u6210\u529F"))):T.resultCode===2?(alert(_l("\u89D2\u8272\u540D\u79F0\u91CD\u590D\uFF0C\u8BF7\u91CD\u65B0\u547D\u540D"),3),t.setState({saveLoading:!1})):(alert(_l("\u521B\u5EFA\u5931\u8D25"),2),t.setState({saveLoading:!1}))})}},n),(0,ge.default)(t,r)}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){this.props.onRef(this),this.fetchRoleDetail()}},{key:"componentWillReceiveProps",value:function(n){n.roleId!==this.props.roleId&&this.fetchRoleDetail(n)}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"fetchRoleDetail",value:function(){var n=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props,r=t.roleId,l=t.appId,s=t.roleList;r=r==="new"?"":r;var c=s.find(function(i){return i.roleId===r})||{};if(!j.Mu.includes(c.roleType)){this.abortRequest(),this.setState({loading:!0});var p=void 0;r?(this.promise=Be.Z.getRoleDetail({roleId:r,appId:l}),p=this.promise):(this.promise=Be.Z.getAddRoleTemplate({appId:l}),p=this.promise.then(function(i){return i.permissionWay=j.Wv.ViewAllAndManageSelfRecord,(0,v.default)({},i,{description:"",name:_l("\u65B0\u89D2\u8272")})})),p.then(function(i){es(l,i),n.setState({roleDetail:i,roleDetailCache:i,hasChange:!r}),n.defaultRoleName=i.name},function(){}).finally(function(){n.setState({loading:!1})})}}},{key:"render",value:function(){var n=this,t=this.props,r=t.roleId,l=t.isForPortal,s=t.showRoleSet,c=t.projectId,p=t.appId,i=t.setQuickTag,u=t.onDelRole,f=t.handleChangePage,x=t.canEditUser;r=r==="new"?"":r;var E=this.state,m=E.roleDetail,b=E.loading,A=E.saveLoading,k=E.roleDetailCache,S={canEditUser:x,setQuickTag:i,showRoleSet:s,isForPortal:l,roleDetail:m,loading:b||m===void 0,saveLoading:A,onChange:this.updateRoleDetail,onSave:this.onSave,projectId:c,appId:p,roleDetailCache:k,onDel:function(){n.setState({hasChange:!1},function(){r?n.setState({roleDetail:k}):u(r)})},handleChangePage:f};return e.createElement(ns,null,e.createElement(qi,S))}}]),a}(e.PureComponent),dt.propTypes={appId:Je().string,roleId:Je().string,show:Je().bool.isRequired,editCallback:Je().func.isRequired},dt.defaultRoleName="",zt),as=(0,Q.Z)([`
   {
    padding: 25px 48px 30px;
    max-width: 1250px;
    .nameInput {
      width: 300px;
      line-height: 36px;
      background: #f8f8f8;
      border-radius: 3px 3px 3px 3px;
      padding: 0 13px;
      font-weight: 400;
    }
    .desC {
      line-height: 36px;
      background: #f8f8f8;
      border-radius: 3px 3px 3px 3px;
      padding: 0 13px;
      font-weight: 400;
    }
    .desRole {
      line-height: 25px;
      background: #fef9e4;
      border-radius: 3px 3px 3px 3px;
      padding: 6px 13px;
      font-weight: 400;
    }
    .toUser {
      color: #5a5a5a;
      &:hover {
        color: #2196f3;
      }
    }
  }
`],[`
   {
    padding: 25px 48px 30px;
    max-width: 1250px;
    .nameInput {
      width: 300px;
      line-height: 36px;
      background: #f8f8f8;
      border-radius: 3px 3px 3px 3px;
      padding: 0 13px;
      font-weight: 400;
    }
    .desC {
      line-height: 36px;
      background: #f8f8f8;
      border-radius: 3px 3px 3px 3px;
      padding: 0 13px;
      font-weight: 400;
    }
    .desRole {
      line-height: 25px;
      background: #fef9e4;
      border-radius: 3px 3px 3px 3px;
      padding: 6px 13px;
      font-weight: 400;
    }
    .toUser {
      color: #5a5a5a;
      &:hover {
        color: #2196f3;
      }
    }
  }
`]),os=W.ZP.div(as),ls=function(o){(0,ye.default)(a,o);function a(){return(0,we.default)(this,a),(0,ge.default)(this,(a.__proto__||Se()(a)).apply(this,arguments))}return(0,ke.default)(a,[{key:"render",value:function(){var n=this,t=this.props,r=t.appId,l=t.editCallback,s=t.isForPortal,c=t.showRoleSet,p=t.projectId,i=t.setQuickTag,u=t.roleId,f=t.roleList,x=t.loading,E=t.canEditUser,m=f.find(function(A){return A.roleId===u})||{},b=j.ME.find(function(A){return A.roleType===m.roleType})||{};return e.createElement(ze.pe,{className:"flex overflowHidden flexColumn Relative"},j.Mu.includes(m.roleType)&&!s?e.createElement(os,{className:"settingForm flex flexColumn"},e.createElement("div",{className:"flex"},e.createElement("div",{className:"roleTitle Bold Font17"},_l("\u7CFB\u7EDF\u89D2\u8272")),e.createElement("div",{className:"flexRow alignItemsCenter mTop30"},e.createElement("div",{className:"Font14 bold flex"},_l("\u89D2\u8272\u540D\u79F0"))),e.createElement("div",{className:"mTop8"},e.createElement("div",{className:"nameInput"},b.name)),e.createElement("div",{className:"Font14 mTop25 bold"},_l("\u63CF\u8FF0")),e.createElement("div",{className:"mTop8"},e.createElement("div",{className:"w100 desC"},b.des)),e.createElement("div",{className:"Font14 mTop25 bold"},_l("\u6743\u9650")),e.createElement("div",{className:"mTop8"},e.createElement("div",{className:"desRole"},b.info()))),E&&e.createElement(ze.A,{className:"footer flexRow alignItemsCenter"},e.createElement("div",{className:"toUser Hand Bold",onClick:function(){i({roleId:u||f[0].roleId,tab:"user"})}},_l("\u7BA1\u7406\u7528\u6237")))):x?e.createElement(qe.Z,null):e.createElement(ts,(0,v.default)({},this.props,{setQuickTag:i,projectId:p,roleId:u,appId:r,isForPortal:s,onFormat:function(){n.props.onChange({roleList:f.filter(function(k){return!!k.roleId})})},editCallback:function(k,S){var h=f.map(function(g){return g.roleId?g:(0,v.default)({},g,{roleId:k})});l(),S?n.props.onChange({roleList:h}):n.props.onChange({roleList:h,roleId:k})},onDelRole:function(){var k=f.filter(function(S){return!!S.roleId});n.props.onChange({roleList:k,roleId:(k[0]||{}).roleId})},showRoleSet:c})))}}]),a}(e.Component),pc=w(80273),rs=(0,bn.W6)(function(){return e.createElement(V.Z,{className:"Font12 mLeft3 Hand",icon:"drag_indicator"})}),jt=function(o){(0,ye.default)(a,o);function a(){return(0,we.default)(this,a),(0,ge.default)(this,(a.__proto__||Se()(a)).apply(this,arguments))}return(0,ke.default)(a,[{key:"render",value:function(){var n=this.props,t=n.item,r=n.dataList,l=n.onAction,s=n.roleId,c=n.onChoose,p=n.isForPortal;return e.createElement("li",{className:M()("flexRow alignItemsCenter navLiRole",{cur:s===t.roleId}),onClick:function(){return c(t.roleId)}},!j.Mu.includes(t.roleType)||!t.roleId?e.createElement(rs,null):e.createElement("span",{className:"InlineBlock mLeft5",style:{width:10}}),e.createElement("span",{className:"flex mLeft5 Font14 flexRow alignItemsCenter"},e.createElement("span",{className:"InlineBlock overflow_ellipsis breakAll",title:t.name},j.UE[t.roleType]&&e.createElement(V.Z,{icon:j.UE[t.roleType],className:"Font16 mRight6 roleIcon"}),t.name),t.hideAppForMembers&&!p&&e.createElement(Ie.Z,{popupPlacement:"top",text:e.createElement("span",null,_l("\u9690\u85CF\u5E94\u7528"))},e.createElement("span",{className:M()("mLeft7 arrowIconShow",{})},e.createElement(V.Z,{icon:"public-folder-hidden"}))),t.isDefault&&e.createElement("span",{className:"tag mLeft3 InlineBlock"},_l("\u9ED8\u8BA4"))),t.roleId!==""&&e.createElement(Fn.Z,{key:t.roleId+"-li",dataList:r.filter(function(i){return j.Mu.includes(t.roleType)?i.key===10:!0}),onAction:function(u){return l(u,t)}}))}}]),a}(e.Component),is=(0,Q.Z)([`
  font-size: 12px;
  font-weight: bold;
  color: #9e9e9e;
  padding-left: 18px;
  margin: 10px 0 4px 0;
`],[`
  font-size: 12px;
  font-weight: bold;
  color: #9e9e9e;
  padding-left: 18px;
  margin: 10px 0 4px 0;
`]),Vt=W.ZP.p(is),ss=(0,bn.W8)(function(o){return e.createElement(jt,o)}),ds=(0,bn.JN)(function(o){return e.createElement("div",null,D().map(o.items,function(a,d){return e.createElement(ss,(0,v.default)({},o,{item:a,index:d}))}))}),cs=function(o){(0,ye.default)(a,o);function a(){var d,n,t,r;(0,we.default)(this,a);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=(n=(t=(0,ge.default)(this,(d=a.__proto__||Se()(a)).call.apply(d,[this].concat(s))),t),t.handleSortEnd=function(p){var i=p.oldIndex,u=p.newIndex,f=t.props,x=f.handleMoveApp,E=f.roleList,m=f.isForPortal,b=E.filter(function(g){return j.Mu.includes(g.roleType)}),A=E.filter(function(g){return!j.Mu.includes(g.roleType)});if(i!==u){var k=A.slice(),S=k.splice(i,1)[0];k.splice(u,0,S);var h=m?k:[].concat((0,Qe.Z)(b),(0,Qe.Z)(k));t.props.onChange({roleList:h}),x&&x(h)}},n),(0,ge.default)(t,r)}return(0,ke.default)(a,[{key:"render",value:function(){var n=this,t=this.props,r=t.dataList,l=t.roleId,s=t.isForPortal,c=t.roleList,p=c.filter(function(u){return j.Mu.includes(u.roleType)}),i=c.filter(function(u){return!j.Mu.includes(u.roleType)});return e.createElement("ul",null,!s&&p.length>0&&e.createElement(Vt,null,_l("\u7CFB\u7EDF")),!s&&p.map(function(u){return e.createElement(jt,{item:u,onChoose:function(x){n.props.onSelect(x),n.props.handleChangePage(function(){n.props.onChange({roleId:x})})},isForPortal:s,roleId:l,dataList:r,onAction:function(x,E){n.props.onAction(x,E)}})}),p.length>0&&e.createElement("div",{style:{paddingTop:6}}),!s&&i.length>0&&e.createElement(Vt,null,_l("\u81EA\u5B9A\u4E49")),i&&e.createElement(ds,{items:i,isForPortal:s,roleId:l,useDragHandle:!0,onSortEnd:this.handleSortEnd,helperClass:"",onChoose:function(f){n.props.onSelect(f),n.props.handleChangePage(function(){n.props.onChange({roleId:f})})},dataList:r,onAction:function(f,x){n.props.onAction(f,x)}}))}}]),a}(e.Component),ps=function(o){(0,ye.default)(a,o);function a(){return(0,we.default)(this,a),(0,ge.default)(this,(a.__proto__||Se()(a)).apply(this,arguments))}return(0,ke.default)(a,[{key:"render",value:function(){var n=this,t=this.props,r=t.roleList,l=r===void 0?[]:r,s=t.keywords;return e.createElement(ze.WC,{className:"flexColumn"},e.createElement(e.Fragment,null,e.createElement("div",{className:"navCon"},e.createElement("span",{className:"addRole Hand Block TxtCenter",onClick:function(){if(l.find(function(p){return!p.roleId})){alert(_l("\u8BF7\u4FDD\u5B58\u5F53\u524D\u65B0\u589E\u89D2\u8272"),3);return}n.props.handleChangePage(function(){n.props.onChange({roleId:"",roleList:l.concat({roleId:"",name:_l("\u65B0\u89D2\u8272")})})})}},e.createElement(V.Z,{type:"add"}),_l("\u521B\u5EFA\u89D2\u8272"))),e.createElement("div",{className:"search"},e.createElement(lt.Z,{className:"roleSearch",placeholder:_l("\u641C\u7D22\u89D2\u8272"),value:s,onChange:function(p){n.props.onChange({keywords:p,roleList:n.props.roleListClone.filter(function(i){return i.name.toLocaleLowerCase().indexOf(p.toLocaleLowerCase())>=0})})}})),e.createElement("div",{className:"navCon roleSet flex"},l.length<=0&&e.createElement("p",{className:"mTop20 Gray_75 TxtCenter"},_l("\u6682\u65E0\u76F8\u5173\u6570\u636E")),l.length>0&&e.createElement(cs,this.props))))}}]),a}(e.Component),us=(0,Q.Z)([`
  height: 100%;
  .roleSearch {
    background: #fff;
    border-radius: 0;
    width: 100%;
    padding-left: 0px;
  }
  .rg {
    .Font100 {
      font-size: 100px;
    }
    .icon {
      color: #e0e0e0;
    }
  }
  .Font120 {
    font-size: 120px;
  }
`],[`
  height: 100%;
  .roleSearch {
    background: #fff;
    border-radius: 0;
    width: 100%;
    padding-left: 0px;
  }
  .rg {
    .Font100 {
      font-size: 100px;
    }
    .icon {
      color: #e0e0e0;
    }
  }
  .Font120 {
    font-size: 120px;
  }
`]),fs=W.ZP.div(us),Yt=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.state={roleId:"",roleList:[],keywords:"",loading:!0,roleListClone:[]},n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props,t=n.roleList,r=t===void 0?[]:t,l=n.dataList,s=l===void 0?[]:l,c=n.roleId;this.setState({roleId:c||(r.length>0?r[0].roleId:""),roleListClone:r,roleList:r,dataList:s,loading:!1})}},{key:"componentWillReceiveProps",value:function(n){var t=this.props,r=t.roleList,l=r===void 0?[]:r,s=t.roleId;(!D().isEqual(n.roleList,l)||n.roleId!==s)&&(this.setState({roleList:n.roleList,dataList:n.dataList,roleListClone:n.roleList}),n.roleList.length<l.length&&this.setState({roleId:n.roleId}))}},{key:"render",value:function(){var n=this,t=this.state,r=t.roleId,l=t.roleList,s=t.loading,c=t.keywords,p=t.dataList,i=t.roleListClone;return e.createElement(fs,{className:"flexRow"},e.createElement(ps,(0,v.default)({},this.props,{roleList:l,dataList:p,roleListClone:i,roleId:r,onChange:function(f){n.setState((0,v.default)({},f))},keywords:c})),e.createElement(ls,(0,v.default)({},this.props,{roleId:r,roleList:i,loading:s,onChange:function(f){n.setState((0,v.default)({},f))}})))}}]),a}(e.Component),ms=(0,Q.Z)([`
  .title {
    line-height: 36px;
  }
  input {
    height: 36px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    padding: 6px;
  }
`],[`
  .title {
    line-height: 36px;
  }
  input {
    height: 36px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    padding: 6px;
  }
`]),gs=W.ZP.div(ms);function Jt(o){var a=o.copyData,d=o.setCopyData,n=o.updataRoleData,t=o.appId,r=o.editType,l=a||{},s=l.name,c=l.roleId,p=(0,e.useState)(s+_l("-\u590D\u5236")),i=(0,B.Z)(p,2),u=i[0],f=i[1],x=(0,e.useRef)(null);return(0,e.useEffect)(function(){x&&x.current&&$(x.current).select().focus()},[]),e.createElement(he.Z,{title:_l("\u590D\u5236\u89D2\u8272\u201C%0\u201D",s),className:M()(""),headerClass:"",bodyClass:"",onCancel:function(){d(null)},onOk:function(){if(!u.trim())return alert(_l("\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0\uFF01"),3);Be.Z.copyRole({appId:t,roleId:c,roleName:u.trim(),copyPortalRole:r===1}).then(function(m){m.resultCode===1?n(m.roleId):m.resultCode===2?alert(_l("\u89D2\u8272\u540D\u79F0\u91CD\u590D\uFF0C\u8BF7\u91CD\u65B0\u547D\u540D"),3):alert(_l("\u590D\u5236\u5931\u8D25"),2)}),d(null)},visible:!!a,updateTrigger:"fasle"},e.createElement(gs,null,e.createElement("p",{className:"Gray_75"},_l("\u5C06\u590D\u5236\u76EE\u6807\u89D2\u8272\u7684\u6743\u9650\u8BBE\u7F6E\u548C\u63CF\u8FF0\u3002\u89D2\u8272\u4E0B\u7684\u6210\u5458\u4E0D\u4F1A\u88AB\u590D\u5236")),e.createElement("div",{className:"roleInput flexRow"},e.createElement("span",{className:"title Gray_75"},_l("\u89D2\u8272")),e.createElement("input",{className:"flex mLeft16",value:u,ref:x,onChange:function(m){f(m.target.value)}}))))}var hs=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.delDialog=function(t){var r=n.state.roleList,l=r===void 0?[]:r;return he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")),buttonType:"danger",description:"",onOk:function(){ue.Z.removeExRole({appId:n.props.appId,roleId:t.roleId}).then(function(c){if(c){var p=l.filter(function(i){return i.roleId!==t.roleId});n.setState({roleList:p,roleId:(p[0]||{}).roleId}),n.props.setPortalRoleList(p),alert(_l("\u5220\u9664\u6210\u529F"))}else alert(_l("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"),2)})}})},n.copyRoleToInternal=function(t){var r=t.roleId,l=t.roleName,s=n.props.appId;Be.Z.copyExternalRolesToInternal({roleId:r,roleName:l,appId:s}).then(function(c){c.resultCode===1?alert(_l("\u590D\u5236\u6210\u529F")):c.resultCode===2?alert(_l("\u89D2\u8272\u540D\u79F0\u91CD\u590D\uFF0C\u8BF7\u91CD\u65B0\u547D\u540D"),3):alert(_l("\u590D\u5236\u5931\u8D25"),2)})},n.quickTag=function(t){var r=n.props,l=r.setQuickTag,s=r.setFastFilters,c=r.setFastFiltersData;l(t),t.roleId&&(t.tab!=="user"?c({controlId:"portal_role",values:[t.roleId],dataType:44,spliceType:1,filterType:2,DateRange:0,DateRangeType:1}):s({controlId:"portal_role",values:[t.roleId],dataType:44,spliceType:1,filterType:2,DateRange:0,DateRangeType:1}),n.setState({roleId:t.roleId}))},n.state={roleId:"",roleList:[],defaultRoleId:"",copyData:null},n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props,t=n.portal,r=t===void 0?{}:t,l=n.canEditUser,s=r.roleList,c=s===void 0?[]:s;this.setState({roleId:r.roleId?["all","pendingReview","apply","outsourcing"].includes(r.roleId)?(c[0]||{}).roleId:r.roleId:(c[0]||{}).roleId,roleList:c,defaultRoleId:(c.find(function(p){return p.isDefault})||{}).roleId,dataList:[{text:_l("\u7BA1\u7406\u89D2\u8272"),key:10},{text:_l("\u590D\u5236"),key:0},{text:_l("\u590D\u5236\u5230\u5E38\u89C4"),key:1},{text:_l("\u8BBE\u4E3A\u9ED8\u8BA4"),key:2},{text:_l("\u5220\u9664"),type:"err",key:3}].filter(function(p){return l?!0:p.key!==10})})}},{key:"componentWillReceiveProps",value:function(n){var t=this.props.portal,r=t===void 0?{}:t,l=r.roleList,s=l===void 0?[]:l;D().isEqual(n.portal.roleList,s)||this.setState({roleList:n.portal.roleList,defaultRoleId:(n.portal.roleList.find(function(c){return c.isDefault})||{}).roleId})}},{key:"render",value:function(){var n=this,t=this.props,r=t.getPortalRoleList,l=t.setPortalRoleList,s=t.portal,c=t.showRoleSet,p=t.appId,i=t.projectId,u=t.editType,f=s.loading,x=this.state,E=x.roleList,m=E===void 0?[]:E,b=x.dataList,A=b===void 0?[]:b,k=x.roleId,S=x.copyData;return f?e.createElement(qe.Z,null):e.createElement(e.Fragment,null,!!S&&e.createElement(Jt,{editType:u,appId:p,copyData:S,setCopyData:function(g){return n.setState({copyData:g})},updataRoleData:function(g){n.setState({roleList:[].concat((0,Qe.Z)(m),[(0,v.default)({},S,{roleId:g})]),roleId:g}),r(p)}}),e.createElement(Yt,(0,v.default)({},this.props,{setQuickTag:function(g){n.quickTag(g)},projectId:i,showRoleSet:c,key:this.state.roleId,roleId:this.state.roleId,roleList:m,isForPortal:!0,dataList:A,appId:p,editCallback:function(g){r(p,g)},onDelRole:function(g){var I=m.find(function(C){return g===C.roleId});n.delDialog(I)},handleMoveApp:function(g){Be.Z.sortRoles({appId:p,roleIds:g.map(function(I){return I.roleId})}).then(function(){r(p),n.setState({roleId:k})})},onSelect:function(g){n.quickTag({roleId:g,tab:"roleSet"})},onAction:function(g,I){switch(g.key){case 10:n.quickTag({roleId:I.roleId,tab:"user"});break;case 0:n.setState({copyData:I});break;case 1:n.copyRoleToInternal({roleId:I.roleId,roleName:I.name});break;case 2:ue.Z.editDefaultExRole({appId:p,defaultRoleId:I.roleId}).then(function(C){var N=n.state.roleList.map(function(T){return T.roleId===I.roleId?(0,v.default)({},T,{isDefault:!0}):(0,v.default)({},T,{isDefault:!1})});l(N),n.setState({roleId:I.roleId})});break;case 3:n.delDialog(I);break}}})))}}]),a}(e.Component),vs=function(a){return{portal:a.portal}},xs=function(a){return(0,Me.DE)(He,a)};const Es=(0,Oe.$j)(vs,xs)(hs);var Cs,Xt,Kt,bs=(0,Q.Z)([`
  width: 60%;
  padding-right: 32px;
  display: flex;
  .urlSet {
    width: 100%;
  }
  .mainShareUrl {
    flex: 1;
    .shareInput,
    .copy,
    .qrCode,
    .openIcon {
      height: 32px;
      line-height: 32px;
    }
    .icon-new_mail {
      line-height: 32px !important;
    }
    .copy {
      line-height: 30px !important;
    }
    .qrCode,
    .openIcon {
      width: 32px;
    }
    .icon-qr_code {
      line-height: 32px !important;
    }
  }
  .setBtn {
    margin-left: 14px;
    height: 32px;
    line-height: 30px;
    padding: 0 20px;
    background: #ffffff;
    border: 1px solid #2196f3;
    border-radius: 3px;
    text-align: center;
    color: #2196f3;
    overflow: hidden;
    &:hover {
      color: #ffffff;
      background: #2196f3;
    }
  }
`],[`
  width: 60%;
  padding-right: 32px;
  display: flex;
  .urlSet {
    width: 100%;
  }
  .mainShareUrl {
    flex: 1;
    .shareInput,
    .copy,
    .qrCode,
    .openIcon {
      height: 32px;
      line-height: 32px;
    }
    .icon-new_mail {
      line-height: 32px !important;
    }
    .copy {
      line-height: 30px !important;
    }
    .qrCode,
    .openIcon {
      width: 32px;
    }
    .icon-qr_code {
      line-height: 32px !important;
    }
  }
  .setBtn {
    margin-left: 14px;
    height: 32px;
    line-height: 30px;
    padding: 0 20px;
    background: #ffffff;
    border: 1px solid #2196f3;
    border-radius: 3px;
    text-align: center;
    color: #2196f3;
    overflow: hidden;
    &:hover {
      color: #ffffff;
      background: #2196f3;
    }
  }
`]),Is=W.ZP.div(bs),As=[{url:"/user",key:"user",txt:_l("\u7528\u6237")},{url:"/roleSet",key:"roleSet",txt:_l("\u89D2\u8272")},{url:"/statistics",key:"statistics",txt:_l("\u7EDF\u8BA1")}],Ss=(Xt=Cs=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));Kt.call(n);var t=d.canEditApp,r=d.canEditUser,l=r?"user":t?"roleSet":"";n.state={tab:l,showEditUrl:!1,portalSet:{},baseSetResult:{},version:0,showPortalSetting:!1};var s=d.setQuickTag,c=d.setDefaultFastFilters;return s(),c(),n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props,t=n.getControls,r=n.appId,l=n.projectId;this.props.getControls(r,l),this.props.getPortalRoleList(r),this.fetchPorBaseInfo()}},{key:"componentWillReceiveProps",value:function(n,t){var r=n.canEditApp,l=n.canEditUser,s=l?"user":r?"roleSet":"";!D().isEqual(this.props.portal.quickTag,n.portal.quickTag)&&n.portal.quickTag.tab&&this.setState({tab:n.portal.quickTag.tab||s});var c=D().get(n,["match","params","listType"]);c==="pending"&&!D().isEqual(c,D().get(this.props,["match","params","listType"]))&&this.setState({tab:s})}},{key:"render",value:function(){var n=this,t=this.props,r=t.appDetail,l=t.appId,s=t.closePortal,c=t.isAdmin,p=t.canEditApp,i=t.canEditUser,u=t.portal,f=t.setQuickTag,x=this.state,E=x.baseSetResult,m=E===void 0?{}:E,b=x.showEditUrl,A=x.portalSet,k=x.showPortalSetting,S=x.tab,h=As;return p||(h=h.filter(function(g){return!["roleSet"].includes(g.key)})),i||(h=h.filter(function(g){return!["user","statistics"].includes(g.key)})),e.createElement(ze.EI,{className:"flexColumn overflowHidden"},e.createElement(ze.Ln,{className:""},e.createElement("div",{className:"tabCon flex InlineBlock pLeft26"},h.map(function(g){return e.createElement("span",{className:M()("tab Hand Font14 Bold",{cur:n.state.tab===g.key}),id:"tab_"+g.key,onClick:function(){var C=D().get(n.props,["match","params","listType"]);C==="pending"&&(0,We.T8)("/app/"+l+"/role/external"),n.props.handleChangePage(function(){f((0,v.default)({},u.quickTag,{tab:g.key})),n.setState({tab:g.key})})}},g.txt)})),e.createElement(Is,{className:"urlWrap"},e.createElement("div",{className:"urlSet flexRow alignItemsCenter"},e.createElement(Ma.Z,{className:"mainShareUrl",copyShowText:!0,theme:"light",url:D().get(A,["portalSetModel","portalUrl"]),editUrl:p?function(){n.setState({showEditUrl:!0})}:null,editTip:_l("\u81EA\u5B9A\u4E49\u57DF\u540D"),copyTip:md.global.SysSettings.hideWeixin?void 0:_l("\u53EF\u4EE5\u5C06\u94FE\u63A5\u653E\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7\u7684\u81EA\u5B9A\u4E49\u83DC\u5355\u4E0E\u81EA\u52A8\u56DE\u590D\u5185\uFF0C\u65B9\u4FBF\u5FAE\u4FE1\u7528\u6237\u5173\u6CE8\u516C\u4F17\u53F7\u540E\u968F\u65F6\u6253\u5F00\u6B64\u94FE\u63A5")}),p&&e.createElement("span",{className:"setBtn Hand",onClick:function(){return n.setState({showPortalSetting:!0})}},_l("\u95E8\u6237\u8BBE\u7F6E"))))),e.createElement(ze.h4,{className:M()("flex",{overflowAuto:S==="statistics"})},this.renderCon()),b&&e.createElement(pl,{show:b,appId:l,urlPre:m.domainName,urlSuffix:m.customeAddressSuffix,onOk:function(I,C){I!==m.customeAddressSuffix&&n.setState({portalSet:(0,v.default)({},A,{portalSetModel:(0,v.default)({},A.portalSetModel,{portalUrl:C})}),showEditUrl:!1,baseSetResult:(0,v.default)({},m,{customeAddressSuffix:I})})},onCancel:function(){n.setState({showEditUrl:!1})}}),k&&e.createElement(rl,{portalSet:A,projectId:r.projectId,show:k,appId:l,closeSet:function(){return n.setState({showPortalSetting:!1})},callback:function(){n.fetchPorBaseInfo()},closePortal:s,onChangePortal:function(I){n.setState({portalSet:I,baseSetResult:I.portalSetModel,version:I.controlTemplate.version})}}))}}]),a}(e.Component),Kt=function(){var a=this;this.fetchPorBaseInfo=function(){var d=a.props,n=d.portal,t=n===void 0?{}:n,r=d.appId,l=d.setBaseInfo;ue.Z.getPortalSet({appId:r}).then(function(s){var c=t.baseInfo,p=c===void 0?{}:c,i=s.portalSetModel,u=i===void 0?{}:i,f=s.controlTemplate,x=f===void 0?{}:f,E=a.state.baseSetResult,m=E===void 0?{}:E,b=m.isSendMsgs;a.setState({portalSet:s,baseSetResult:u,version:x.version}),l((0,v.default)({},p,{appId:r,isSendMsgs:b}))})},this.renderCon=function(){var d=a.state,n=d.tab,t=d.baseSetResult,r=d.version;switch(n){case"roleSet":return e.createElement(Es,a.props);case"statistics":return e.createElement(Fl,a.props);default:return e.createElement(li,(0,v.default)({},a.props,{version:r,portalSetModel:t,onChangePortalVersion:function(s){a.setState({version:s})}}))}}},Xt),ws=function(a){return{portal:a.portal}},ks=function(a){return(0,Me.DE)(He,a)};const ys=(0,Oe.$j)(ws,ks)(Ss);var Ns=w(4593),Ts=w.n(Ns),ct=w(8716),qt=function(o){(0,ye.default)(a,o);function a(){return(0,we.default)(this,a),(0,ge.default)(this,(a.__proto__||Se()(a)).apply(this,arguments))}return(0,ke.default)(a,[{key:"render",value:function(){var n=this,t=this.props,r=t.setRoleId,l=t.SetAppRolePagingModel,s=t.setSelectedIds,c=t.isOwner,p=t.appId,i=t.appDetail,u=t.canEditApp,f=t.selectDebugRole,x=f===void 0?[]:f,E=this.props,m=E.data,b=E.roleId,A=[];return m.isMyRole&&!(c&&m.roleType===On.lt.ADMIN_ROLE)&&!x.length&&(A=[].concat((0,Qe.Z)(A),[{value:0,text:_l("\u79BB\u5F00")}])),u&&(j.Mu.includes(m.roleType)?A=[].concat((0,Qe.Z)(A),[{value:1,text:_l("\u67E5\u770B\u89D2\u8272")}]):A=[].concat((0,Qe.Z)(A),[{value:1,text:_l("\u7F16\u8F91\u89D2\u8272"),showLine:m.isMyRole},{value:2,type:"err",text:_l("\u5220\u9664")}])),e.createElement("li",{className:M()("flexRow alignItemsCenter navRoleLi",{cur:b===m.roleId,Relative:b!==m.roleId}),onClick:function(){n.props.setQuickTag({roleId:m.roleId,tab:"user"}),n.props.onChange({roleId:m.roleId}),(0,We.T8)("/app/"+p+"/role"),r(m.roleId),l(null),s([])}},e.createElement("span",{className:"flex flexRow alignItemsCenter TxtMiddle Font14 overflow_ellipsis breakAll InlineBlock",title:m.name},b!==m.roleId&&m.isMyRole&&e.createElement("span",{className:"isMyRole mRight3 InlineBlock TxtMiddle"}),j.UE[m.roleType]&&e.createElement(V.Z,{icon:j.UE[m.roleType],className:"Font16 mRight6"}),m.name),A.length>0?e.createElement("div",{className:"optionNs Relative"},e.createElement(Fn.Z,{dataList:A,showHeader:function(){return!m.isMyRole||j.Mu.includes(m.roleType)?null:e.createElement("div",{className:"Gray_75 Font12",style:{padding:"6px 16px"}},_l("\u6211\u6240\u5728\u7684\u89D2\u8272"))},onAction:function(S){S.value===0?he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u79BB\u5F00\u6B64\u89D2\u8272\u5417\uFF1F")),buttonType:"danger",description:_l("\u79BB\u5F00\u6240\u6709\u89D2\u8272\u540E\u4F60\u5C06\u4E0D\u80FD\u8BBF\u95EE\u6B64\u5E94\u7528"),onOk:function(){n.props.exitRole(m.roleId)}}):S.value===1?n.props.setQuickTag({roleId:m.roleId,tab:"roleSet"}):S.value===2&&n.props.delDialog(n.props.roleList.find(function(h){return h.roleId===m.roleId}))}}),m.totalCount>0&&e.createElement("span",{className:"num"},m.totalCount)):m.totalCount>0&&e.createElement("span",{className:"num"},m.totalCount),!!m.description&&e.createElement(Ie.Z,{text:e.createElement("span",null,m.description),popupPlacement:"top"},e.createElement("i",{className:"icon-info_outline Font16 Gray_9e mLeft7"})))}}]),a}(e.Component),Bs=(0,Q.Z)([`
  .roleSearch {
    background: #fff;
    border-radius: 0;
    width: 100%;
    padding-left: 0;
  }
`],[`
  .roleSearch {
    background: #fff;
    border-radius: 0;
    width: 100%;
    padding-left: 0;
  }
`]),Rs=(0,Q.Z)([`
  font-size: 12px;
  font-weight: bold;
  color: #9e9e9e;
  padding-left: 18px;
  margin: 10px 0 4px 0;
`],[`
  font-size: 12px;
  font-weight: bold;
  color: #9e9e9e;
  padding-left: 18px;
  margin: 10px 0 4px 0;
`]),Ls=W.ZP.div(Bs),$t=W.ZP.p(Rs),Ds=[{name:_l("\u5168\u90E8"),roleId:"all"},{name:_l("\u7533\u8BF7\u52A0\u5165"),roleId:"apply"},{name:_l("\u5916\u534F\u7528\u6237"),roleId:"outsourcing"}],Ps=function(o){(0,ye.default)(a,o);function a(){var d,n,t,r;(0,we.default)(this,a);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=(n=(t=(0,ge.default)(this,(d=a.__proto__||Se()(a)).call.apply(d,[this].concat(s))),t),t.renderNav=function(){var p=t.props,i=p.setRoleId,u=p.appRole,f=u===void 0?{}:u,x=p.canEditUser,E=p.SetAppRolePagingModel,m=p.setSelectedIds,b=p.appId,A=p.canEditApp,k=p.selectDebugRole,S=f.roleInfos,h=S===void 0?[]:S,g=f.apply,I=g===void 0?[]:g,C=f.outsourcing,N=C===void 0?{}:C,T=f.total,R=t.props,y=R.roleId,Z=R.roleList,O=Z===void 0?[]:Z,U=R.keywords,G=O.filter(function(Y){return j.Mu.includes(Y.roleType)}),H=O.filter(function(Y){return!j.Mu.includes(Y.roleType)});return e.createElement(e.Fragment,null,e.createElement(Ls,{className:""},x&&e.createElement("div",{className:"navCon bTBorder"},e.createElement("ul",null,Ds.map(function(Y){return e.createElement("li",{className:M()("flexRow alignItemsCenter",{cur:y===Y.roleId}),onClick:function(){t.props.onChange({roleId:Y.roleId}),(0,We.T8)("/app/"+b+"/role"),i(Y.roleId),E(null),m([])}},e.createElement("span",{className:"flex Font14"},Y.name,Y.roleId==="apply"&&I.length>0&&e.createElement("span",{className:"hs mLeft2 InlineBlock"})),e.createElement("span",{className:"num"},Y.roleId==="all"?T||0:Y.roleId==="apply"?I.length:N.totalCount||0))}))),e.createElement("div",{className:"search mTop16"},e.createElement(lt.Z,{className:"roleSearch",placeholder:_l("\u641C\u7D22\u89D2\u8272"),value:U,onChange:function(J){t.props.onChange({keywords:J,roleList:h.filter(function(le){return le.name.toLocaleLowerCase().indexOf(J.toLocaleLowerCase())>=0})})}}))),e.createElement("div",{className:"navCon flex navConList"},O.length<=0?e.createElement("div",{className:"TxtCenter Gray_bd mTop20"},_l("\u65E0\u76F8\u5173\u89D2\u8272")):e.createElement("ul",null,G.length>0&&e.createElement($t,null,_l("\u7CFB\u7EDF")),G.map(function(Y){return e.createElement(qt,(0,v.default)({},t.props,{data:Y,selectDebugRole:k}))}),G.length>0&&e.createElement("div",{style:{paddingTop:6}}),H.length>0&&e.createElement(e.Fragment,null,e.createElement($t,null,_l("\u81EA\u5B9A\u4E49")),H.map(function(Y){return e.createElement(qt,(0,v.default)({},t.props,{data:Y}))})),A&&e.createElement(ze.Z9,{className:"Hand",onClick:function(){t.props.setQuickTag({roleId:"new",tab:"roleSet"}),setTimeout(function(){t.props.setQuickTag({roleId:"",tab:"roleSet"})},0)}},e.createElement("i",{class:"ming Icon icon-add icon icon-undefined"}),_l("\u521B\u5EFA\u89D2\u8272")))))},n),(0,ge.default)(t,r)}return(0,ke.default)(a,[{key:"render",value:function(){return e.createElement(ze.WC,{className:"flexColumn"},this.renderNav())}}]),a}(e.Component),pt,ea,Zs=(0,Q.Z)([`
  .roleSelect {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 16px;

    :global(.Dropdown--input) {
      padding-left: 15px;
    }
  }

  .roleDialogDangerTitle {
    color: @dangerColor;
  }
`],[`
  .roleSelect {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 16px;

    :global(.Dropdown--input) {
      padding-left: 15px;
    }
  }

  .roleDialogDangerTitle {
    color: @dangerColor;
  }
`]),Fs=W.ZP.div(Zs),vn={DELETE:1,MOVE:2},na=(ea=pt=function(o){(0,ye.default)(a,o);function a(){var d,n,t,r;(0,we.default)(this,a);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=(n=(t=(0,ge.default)(this,(d=a.__proto__||Se()(a)).call.apply(d,[this].concat(s))),t),t.state={selectedRole:null,deleteType:vn.MOVE},t.handleMoveUser=function(){var p=t.state,i=p.selectedRole,u=p.deleteType,f=t.props,x=f.roleList,E=f.onOk;if(u===vn.MOVE&&!i){alert("\u8BF7\u9009\u62E9\u8981\u79FB\u52A8\u5230\u7684\u89D2\u8272");return}var m=x&&x.length&&x[0].roleId||"";return E(u===vn.MOVE?i||m:"")},n),(0,ge.default)(t,r)}return(0,ke.default)(a,[{key:"renderMove",value:function(n){return e.createElement("div",{className:"roleSelect"},e.createElement("span",{className:M()("mRight15 Gray_75 mLeft30"),style:{whiteSpace:"nowrap"}},_l("\u79FB\u52A8\u5230")),e.createElement(gn.Z,n))}},{key:"renderContent",value:function(){var n=this,t=this.props.roleList,r=this.state,l=r.selectedRole,s=r.deleteType,c={className:"w100",border:!0,isAppendToBody:!0,placeholder:_l("\u8BF7\u9009\u62E9\u89D2\u8272"),menuClass:"roleDialogDropdownMenu",data:D().map(t,function(p){var i=p.roleId,u=p.name;return{value:i,text:u}}),value:l,noData:_l("\u6682\u65E0\u53EF\u9009\u7684\u89D2\u8272"),onChange:function(i){n.setState({selectedRole:i})}};return e.createElement(Fs,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"mBottom16 Gray_75"},_l("\u5982\u4F55\u5B89\u6392\u6B64\u89D2\u8272\u4E0B\u7684\u7528\u6237")),e.createElement(mn.Z,{className:"Bold Block mBottom16",text:_l("\u540C\u65F6\u5C06\u6B64\u89D2\u8272\u4E0B\u7684\u6240\u6709\u7528\u6237\u79FB\u52A8\u5230\u5176\u4ED6\u89D2\u8272"),checked:s===vn.MOVE,onClick:function(){return n.setState({deleteType:vn.MOVE})}}),s===vn.MOVE&&this.renderMove(c),e.createElement(mn.Z,{className:"Bold Block",text:_l("\u540C\u65F6\u5220\u9664\u6B64\u89D2\u8272\u4E0B\u7684\u6240\u6709\u7528\u6237"),checked:s===vn.DELETE,onClick:function(){return n.setState({deleteType:vn.DELETE})}})))}},{key:"render",value:function(){var n=this.props.onCancel,t={okText:_l("\u5220\u9664"),buttonType:"danger",title:e.createElement("div",{className:"roleDialogDangerTitle"},_l("\u4F60\u786E\u8BA4\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")),visible:!0,dialogClasses:"roleDialogClassName",onCancel:n,onOk:this.handleMoveUser};return e.createElement(he.Z,t,this.renderContent())}}]),a}(e.PureComponent),pt.propTypes={onOk:Je().func.isRequired,onCancel:Je().func.isRequired,roleList:Je().arrayOf(j.yn)},pt.defaultProps={},ea),Os=w(33965),Ms=(0,Q.Z)([`
  height: 100%;
  .navConList {
    overflow: auto !important;
    padding: 6px 8px 10px;
  }
  .overflowHidden {
    overflow: hidden !important;
  }
  .hs {
    width: 6px;
    height: 6px;
    background: #f44336;
    border-radius: 50%;
    position: relative;
    top: -1px;
  }
  .isMyRole {
    width: 4px;
    height: 4px;
    background: #2196f3;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .optionNs {
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 3px 3px 3px 3px;
    .moreop,
    .num {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 20px;
      text-align: center;
    }
    .num {
      opacity: 1;
    }
    .moreop {
      opacity: 0;
    }
  }
  .navRoleLi {
    &:hover {
      .optionNs {
        .num {
          opacity: 0;
          z-index: 0;
        }
        .moreop {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }
  .iconBG {
    width: 32px;
    height: 32px;
    background: #2196f3;
    border-radius: 20px;
  }
  .memberInfo {
    .memberName {
      font-weight: 400;
    }
    .memberTag {
      font-size: 12px;
      color: #2196f3;
      padding: 2px 6px;
      border-radius: 12px;
      background: #f3faff;
      display: inline-block;
      flex-shrink: 0;
    }
    .ownerTag {
      color: #fff;
      background: #2196f3;
      font-weight: bold;
      padding: 2px 6px;
      font-size: 12px;
      border-radius: 12px;
      display: inline-block;
      flex-shrink: 0;
    }
  }
`],[`
  height: 100%;
  .navConList {
    overflow: auto !important;
    padding: 6px 8px 10px;
  }
  .overflowHidden {
    overflow: hidden !important;
  }
  .hs {
    width: 6px;
    height: 6px;
    background: #f44336;
    border-radius: 50%;
    position: relative;
    top: -1px;
  }
  .isMyRole {
    width: 4px;
    height: 4px;
    background: #2196f3;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .optionNs {
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 3px 3px 3px 3px;
    .moreop,
    .num {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 20px;
      text-align: center;
    }
    .num {
      opacity: 1;
    }
    .moreop {
      opacity: 0;
    }
  }
  .navRoleLi {
    &:hover {
      .optionNs {
        .num {
          opacity: 0;
          z-index: 0;
        }
        .moreop {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }
  .iconBG {
    width: 32px;
    height: 32px;
    background: #2196f3;
    border-radius: 20px;
  }
  .memberInfo {
    .memberName {
      font-weight: 400;
    }
    .memberTag {
      font-size: 12px;
      color: #2196f3;
      padding: 2px 6px;
      border-radius: 12px;
      background: #f3faff;
      display: inline-block;
      flex-shrink: 0;
    }
    .ownerTag {
      color: #fff;
      background: #2196f3;
      font-weight: bold;
      padding: 2px 6px;
      font-size: 12px;
      border-radius: 12px;
      display: inline-block;
      flex-shrink: 0;
    }
  }
`]),Us=W.ZP.div(Ms),Hs=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));n.delDialog=function(r){if(r.totalCount>0){if([On.lt.DEVELOPERS_ROLE].includes(D().get(n.props,"appDetail.permissionType")))return alert(_l("\u5F53\u524D\u89D2\u8272\u5DF2\u6709\u6210\u5458\uFF0C\u8BF7\u79FB\u51FA\u6240\u6709\u6210\u5458\u540E\u518D\u5220\u9664"),3);n.setState({showDeleRoleByMoveUser:!0,delId:r.roleId})}else return he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")),buttonType:"danger",description:"",onOk:function(){n.onRemoveRole(r)}})},n.onRemoveRole=function(r){var l=n.props,s=l.appId,c=l.projectId,p=l.getRoleSummary,i=l.setRoleId,u=r.resultRoleId,f=u===void 0?"":u;Be.Z.removeRole({appId:s,roleId:r.roleId,resultRoleId:f,projectId:c}).then(function(x){if(x){var E=n.state.roleList.filter(function(m){return m.roleId!==r.roleId});i("all"),n.setState({showDeleRoleByMoveUser:!1,roleId:"all",roleList:E}),p(s),alert(_l("\u5220\u9664\u6210\u529F"))}else alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"),2)})},n.exitRole=function(r){var l=n.props,s=l.appId,c=s===void 0?"":s,p=l.SetAppRolePagingModel;return Be.Z.quitAppForRole({appId:c,roleId:r}).then(function(i){i.isRoleForUser?i.isRoleDepartment?(n.state.roleList.filter(function(u){return u.isMyRole}).length<=1&&(0,We.T8)("/app/"+c),location.reload()):(he.Z.confirm({title:e.createElement("span",{style:{color:"#f44336"}},_l("\u65E0\u6CD5\u9000\u51FA\u975E\u201C\u4EBA\u5458\u201D\u7C7B\u578B\u6210\u5458\u52A0\u5165\u7684\u89D2\u8272")),description:_l("\u975E\u201C\u4EBA\u5458\u201D\u7C7B\u578B\u7684\u6210\u5458\uFF0C\u53EA\u80FD\u7531\u7BA1\u7406\u5458\u6216\u8FD0\u8425\u8005\u64CD\u4F5C"),closable:!1,removeCancelBtn:!0,okText:_l("\u5173\u95ED")}),p(null),n.freshNum()):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"),2)})},n.freshNum=function(){var r=n.props,l=r.appId,s=l===void 0?"":l,c=r.getUserList,p=r.getUserAllCount,i=r.fetchAllNavCount,u=r.isAdmin,f=r.canEditUser;i({appId:s,canEditUser:f}),c({appId:s},!0),["all"].includes(n.state.roleId)||f&&p({appId:s})};var t=d.match.params.editType;return n.state={roleId:t||"all",keywords:"",roleList:[],showDeleRoleByMoveUser:!1,loading:!0,delId:"",selectDebugRole:[]},n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props,t=n.setRoleId,r=n.isAdmin,l=n.appRole,s=l===void 0?{}:l,c=n.match.params.editType,p=n.getUserList,i=n.appId,u=n.appDetail,f=u===void 0?{}:u,x=s.roleInfos,E=x===void 0?[]:x,m=s.quickTag;m.roleId?this.setState({roleId:c||m.roleId}):t(c||(s.roleId?s.roleId:"all")),c&&c!=="all"&&p({appId:i},!0),(f.debugRole||{}).canDebug&&this.setState({selectDebugRole:f.debugRole.selectedRoles}),this.setState({roleList:E,loading:!1})}},{key:"componentWillReceiveProps",value:function(n){(n.appRole.pageLoading!==this.props.appRole.pageLoading||n.appRole.roleId!==this.props.appRole.roleId)&&this.setState({roleId:n.appRole.roleId},function(){n.setRoleId(n.appRole.roleId)});var t=D().get(n,["match","params","editType"]);t&&!D().isEqual(t,D().get(this.props,["match","params","editType"]))&&this.setState({roleId:t}),n.appRole.roleInfos!==this.props.appRole.roleInfos&&this.setState({roleList:n.appRole.roleInfos})}},{key:"render",value:function(){var n=this,t=this.state,r=t.roleList,l=t.showDeleRoleByMoveUser,s=t.delId,c=t.selectDebugRole,p=this.props.appRole,i=p===void 0?{}:p,u=i.pageLoading;return u?e.createElement(qe.Z,null):e.createElement(Us,{className:"flexRow"},e.createElement(Ps,(0,v.default)({},this.props,this.state,{selectDebugRole:c,onChange:function(x){n.setState((0,v.default)({},x))},exitRole:this.exitRole,delDialog:this.delDialog})),e.createElement(Os.Z,(0,v.default)({},this.props,this.state,{freshNum:this.freshNum,onChange:function(x){n.setState((0,v.default)({},x))}})),l&&e.createElement(na,{roleList:r.filter(function(f){return!j.Mu.includes(f.roleType)&&f.roleId!==s}),onOk:function(x){n.onRemoveRole((0,v.default)({},r.find(function(E){return E.roleId===s}),{resultRoleId:x}))},onCancel:function(){n.setState({showDeleRoleByMoveUser:!1,delId:""})}}))}}]),a}(e.Component),Ws=function(a){return{appRole:a.appRole}},Qs=function(a){return(0,Me.DE)(ct,a)};const Gs=(0,Oe.$j)(Ws,Qs)(Hs);var _s=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));return n.copyRoleToPortal=function(t){var r=t.roleId,l=t.roleName,s=n.props.appId;Be.Z.copyRoleToExternalPortal({roleId:r,roleName:l,appId:s}).then(function(c){c.resultCode===1?alert(_l("\u590D\u5236\u6210\u529F")):c.resultCode===2?alert(_l("\u89D2\u8272\u540D\u79F0\u91CD\u590D\uFF0C\u8BF7\u91CD\u65B0\u547D\u540D"),3):alert(_l("\u590D\u5236\u5931\u8D25"),2)})},n.delDialog=function(t){if(t.totalCount>0){if([On.lt.DEVELOPERS_ROLE].includes(D().get(n.props,"appDetail.permissionType")))return alert(_l("\u5F53\u524D\u89D2\u8272\u5DF2\u6709\u6210\u5458\uFF0C\u8BF7\u79FB\u51FA\u6240\u6709\u6210\u5458\u540E\u518D\u5220\u9664"),3);n.setState({showDeleRoleByMoveUser:!0,roleId:t.roleId})}else return he.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u4F60\u786E\u8BA4\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")),buttonType:"danger",description:"",onOk:function(){n.onRemoveRole(t)}})},n.onRemoveRole=function(t){var r=n.props,l=r.appId,s=r.projectId,c=r.getRoleSummary,p=t.resultRoleId,i=p===void 0?"":p;Be.Z.removeRole({appId:l,roleId:t.roleId,resultRoleId:i,projectId:s}).then(function(u){if(u){var f=n.state.roleList.filter(function(x){return x.roleId!==t.roleId});n.setState({showDeleRoleByMoveUser:!1,roleId:(f[0]||{}).roleId,roleList:f}),c(l),alert(_l("\u5220\u9664\u6210\u529F"))}else alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"),2)})},n.quickTag=function(t){n.props.setQuickTag(t)},n.state={roleId:"",roleList:[],copyData:null,loading:!0,showDeleRoleByMoveUser:!1},n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props,t=n.appRole,r=t===void 0?{}:t,l=n.canEditUser,s=r.roleInfos,c=s===void 0?[]:s,p=r.quickTag,i=p===void 0?{}:p;this.setState({roleId:r.roleId?["all","pendingReview","apply","outsourcing"].includes(r.roleId)?(c[0]||{}).roleId:r.roleId:(c[0]||{}).roleId,roleList:c,dataList:[{text:_l("\u7BA1\u7406\u89D2\u8272"),key:10},{text:_l("\u590D\u5236"),key:0},{text:_l("\u590D\u5236\u5230\u5916\u90E8\u95E8\u6237"),key:1},{text:_l("\u5220\u9664"),type:"err",key:3}].filter(function(u){return l?!0:u.key!==10}),loading:!1})}},{key:"componentWillReceiveProps",value:function(n){var t=n.appRole,r=t===void 0?{}:t,l=r.roleInfos,s=l===void 0?[]:l;D().isEqual(this.props.appRole.roleInfos,s)||this.setState({roleList:s,loading:!1})}},{key:"render",value:function(){var n=this,t=this.props,r=t.showRoleSet,l=t.getRoleSummary,s=t.isOpenPortal,c=t.appId,p=t.projectId,i=t.setQuickTag,u=t.setRoleId,f=t.editType,x=this.state,E=x.dataList,m=E===void 0?[]:E,b=x.copyData,A=x.roleList,k=A===void 0?[]:A,S=x.loading,h=x.roleId,g=x.showDeleRoleByMoveUser;return S?e.createElement(qe.Z,null):e.createElement(e.Fragment,null,!!b&&e.createElement(Jt,{editType:f,appId:c,copyData:b,setCopyData:function(C){return n.setState({copyData:C})},updataRoleData:function(C){l(c),n.setState({roleList:[].concat((0,Qe.Z)(k),[(0,v.default)({},b,{roleId:C})]),roleId:C})}}),e.createElement(Yt,(0,v.default)({},this.props,{setQuickTag:function(C){n.quickTag(C)},projectId:p,key:this.state.roleId,roleId:this.state.roleId,showRoleSet:r,roleList:k,isForPortal:!1,dataList:m.filter(function(I){return s?!0:I.key!==1}),appId:c,editCallback:function(C){l(c)},onDelRole:function(C){var N=k.find(function(T){return C===T.roleId});n.delDialog(N)},onSelect:function(C){n.quickTag({roleId:C,tab:"roleSet"})},handleMoveApp:function(C){Be.Z.sortRoles({appId:c,roleIds:C.map(function(N){return N.roleId})}).then(function(){l(c),n.setState({roleId:h})})},onAction:function(C,N){switch(C.key){case 10:n.quickTag({roleId:N.roleId,tab:"user"});break;case 0:n.setState({copyData:N});break;case 1:n.copyRoleToPortal({roleId:N.roleId,roleName:N.name});break;case 3:n.delDialog(N);break}}})),g&&e.createElement(na,{roleList:k.filter(function(I){return!j.Mu.includes(I.roleType)&&I.roleId!==h}),onOk:function(C){n.onRemoveRole((0,v.default)({},k.find(function(N){return N.roleId===h}),{resultRoleId:C}))},onCancel:function(){n.setState({showDeleRoleByMoveUser:!1})}}))}}]),a}(e.Component),zs=function(a){return{appRole:a.appRole}},js=function(a){return(0,Me.DE)(ct,a)};const Vs=(0,Oe.$j)(zs,js)(_s);var Ys=w(88902),Js=w.n(Ys),Xs=w(40893),Ks=w.n(Xs),Mn=w(77863),qs=w(88555),$s=(0,Q.Z)([`
  padding: 0 40px;
  overflow: auto;
  height: 100%;
  .selectWorksheet,
  .selectControl {
    width: 100%;
    height: 36px;
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: unset;
  }
  .saveBtn {
    border: none;
    height: 36px;
    padding: 0 30px;
    color: #fff;
    line-height: 36px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    -webkit-transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
    background: #1e88e5;
    cursor: pointer;
  }
  .saveBtn:hover {
    background: #1565c0;
  }
  .clearBtn {
    background: #fff;
    color: #333;
    font-weight: 400;
    border: 1px solid #eaeaea;
  }
  .clearBtn:hover {
    border: 1px solid #ccc;
    background: #fff !important;
  }
  .cancelBtn {
    float: right;
    cursor: pointer;
    color: #f44336;
    background: #fff;
    border: 1px solid #f44336;
  }
  .cancelBtn:hover {
    background: rgba(244, 67, 54, 0.05);
  }
`],[`
  padding: 0 40px;
  overflow: auto;
  height: 100%;
  .selectWorksheet,
  .selectControl {
    width: 100%;
    height: 36px;
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: unset;
  }
  .saveBtn {
    border: none;
    height: 36px;
    padding: 0 30px;
    color: #fff;
    line-height: 36px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    -webkit-transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
    background: #1e88e5;
    cursor: pointer;
  }
  .saveBtn:hover {
    background: #1565c0;
  }
  .clearBtn {
    background: #fff;
    color: #333;
    font-weight: 400;
    border: 1px solid #eaeaea;
  }
  .clearBtn:hover {
    border: 1px solid #ccc;
    background: #fff !important;
  }
  .cancelBtn {
    float: right;
    cursor: pointer;
    color: #f44336;
    background: #fff;
    border: 1px solid #f44336;
  }
  .cancelBtn:hover {
    background: rgba(244, 67, 54, 0.05);
  }
`]),ed=W.ZP.div($s);function nd(o){var a=o.step,d=o.appId,n=o.onChangeStep,t=o.value,r=o.onChangeData,l=o.result,s=o.appProjectId,c=(0,e.useState)(!1),p=(0,B.Z)(c,2),i=p[0],u=p[1],f=(0,e.useState)([]),x=(0,B.Z)(f,2),E=x[0],m=x[1],b=(0,e.useState)(!1),A=(0,B.Z)(b,2),k=A[0],S=A[1],h=(0,e.useState)([]),g=(0,B.Z)(h,2),I=g[0],C=g[1],N=(0,e.useState)([]),T=(0,B.Z)(N,2),R=T[0],y=T[1],Z=(0,e.useState)(""),O=(0,B.Z)(Z,2),U=O[0],G=O[1],H=(0,e.useState)({worksheetId:t.worksheetId||void 0,controlId:t.controlId||void 0,appId:t.appId||d||void 0,status:t.status||1}),Y=(0,B.Z)(H,2),J=Y[0],le=Y[1];(0,e.useEffect)(function(){S(!0),d&&Tn.Z.getApiInfo({appId:d}).then(function(F){return G(F.apiResponse.name)}),Be.Z.getAppForManager({projectId:s||localStorage.getItem("currentProjectId")||md.global.Account.projects[0].projectId}).then(function(F){return m(F)})},[]),(0,e.useEffect)(function(){J.appId&&Tn.Z.getWorksheetsByAppId({type:0,appId:J.appId}).then(function(F){C(F),S(!1)}).catch(function(F){return S(!1)})},[J.appId]),(0,e.useEffect)(function(){J.worksheetId&&(S(!0),hn.Z.getWorksheetInfo({worksheetId:J.worksheetId,getTemplate:!0,getViews:!1,getRules:!0}).then(function(F){S(!1),y(F.template.controls.filter(function(oe){return oe.controlId.length>20&&oe.type===26&&D().get(oe,"advancedSetting.usertype")!=="2"}))}).catch(function(F){return S(!1)}))},[J.worksheetId]);var q=function(oe){if(oe===9&&!J.controlId)return alert(_l("\u65E0\u6269\u5C55\u4FE1\u606F\u8868"),3);if(!J.appId)return alert(_l("\u8BF7\u9009\u62E9\u5E94\u7528"),3);if(!J.worksheetId)return alert(_l("\u8BF7\u9009\u62E9\u5DE5\u4F5C\u8868"),3);if(!J.controlId)return alert(_l("\u8BF7\u9009\u62E9\u7528\u6237\u6620\u5C04"),3);hn.Z.saveAppExtendAttr({appId:d,worksheetId:J.worksheetId,userControlId:J.controlId,extendAttrs:[],status:oe||1}).then(function(xe){xe?(r(),n(oe===9?0:3),alert(oe===9?_l("\u5DF2\u505C\u7528"):_l("\u4FDD\u5B58\u6210\u529F"))):alert(_l("\u4FDD\u5B58\u5931\u8D25"),2)}).catch(function(xe){return alert(xe)})};return e.createElement(ed,null,e.createElement("h2",{className:"mTop35 Font17 mBottom0"},_l("%0\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868",a===1?"\u5EFA\u7ACB":"\u7F16\u8F91")),e.createElement("div",{className:"userExtendInfo-desc Gray_9e mTop13"},_l("\u901A\u8FC7\u5DE5\u4F5C\u8868\u7BA1\u7406\u5E94\u7528\u6210\u5458\u989D\u5916\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5\uFF0C\u5728\u89D2\u8272\u6743\u9650\u3001\u7B5B\u9009\u5668\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7528\u6237\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5\u6765\u4F5C\u4E3A\u52A8\u6001\u7B5B\u9009\u6761\u4EF6"),e.createElement(wn.Z,{className:"help",type:3,href:"https://help.mingdao.com/role/extended-info",text:_l("\u5E2E\u52A9")})),e.createElement("div",{className:"selectTitle Bold valignWrapper mTop30"},_l("\u9009\u62E9\u5E94\u7528")),e.createElement(ln.default,{showSearch:!0,className:"selectWorksheet mTop8",loading:k,placeholder:_l("\u9009\u62E9\u5E94\u7528"),optionFilterProp:"workSheetName",filterOption:function(oe,xe){return(xe.children||"").toLowerCase().includes(oe.toLowerCase())},value:E.find(function(F){return F.appId===J.appId})?J.appId:l?l.appNameOfWorksheet:E.length===0?void 0:U||d,onSelect:function(oe){return le((0,v.default)({},J,{appId:oe,worksheetId:"",controlId:""}))},notFoundContent:e.createElement("span",null,_l("\u65E0\u5E94\u7528"))},E.map(function(F){return e.createElement(ln.default.Option,{key:F.appId,value:F.appId},F.appName?""+F.appName+(d===F.appId?_l("\uFF08\u672C\u5E94\u7528\uFF09"):""):"")})),e.createElement("div",{className:"selectTitle Bold valignWrapper mTop20"},_l("\u9009\u62E9\u5DE5\u4F5C\u8868"),e.createElement(Ie.Z,{text:_l("\u9009\u62E9\u6216\u65B0\u5EFA\u7684\u5DE5\u4F5C\u8868\u5B57\u6BB5\u4E2D\uFF0C\u5FC5\u987B\u5305\u542B\u201C\u6210\u5458\u201D\u5B57\u6BB5")},e.createElement(V.Z,{icon:"info_outline",className:"mLeft6 Gray_bd Font17"}))),e.createElement(ln.default,{showSearch:!0,className:"selectWorksheet mTop8",loading:k,placeholder:_l("\u9009\u62E9\u5DE5\u4F5C\u8868"),optionFilterProp:"workSheetName",filterOption:function(oe,xe){return(xe.children||"").toLowerCase().includes(oe.toLowerCase())},value:I.find(function(F){return F.workSheetId===J.worksheetId})?J.worksheetId:J.worksheetId&&l?l.worksheetName:void 0,onSelect:function(oe){return le((0,v.default)({},J,{worksheetId:oe,controlId:""}))},notFoundContent:e.createElement("span",null,_l("\u8BE5\u5E94\u7528\u65E0\u5DE5\u4F5C\u8868"))},I.map(function(F){return e.createElement(ln.default.Option,{key:F.workSheetId,value:F.workSheetId},F.workSheetName||"")})),e.createElement("div",{className:"selectTitle Bold valignWrapper mTop20"},_l("\u7528\u6237\u6620\u5C04"),e.createElement(Ie.Z,{text:_l("\u9009\u62E9\u4E00\u4E2A\u201C\u6210\u5458\u201D\u5B57\u6BB5\uFF0C\u7528\u4E8E\u6807\u8BC6\u5339\u914D\u7CFB\u7EDF\u767B\u9646\u7684\u7528\u6237\uFF0C\u8FDB\u800C\u8BFB\u53D6\u7528\u6237\u5173\u8054\u7684\u6269\u5C55\u5C5E\u6027")},e.createElement(V.Z,{icon:"info_outline",className:"mLeft6 Gray_bd Font17"}))),e.createElement(ln.default,{showSearch:!0,className:"selectControl mTop8",loading:k,placeholder:_l("\u9009\u62E9\u7528\u6237\u6620\u5C04"),optionFilterProp:"controlName",filterOption:function(oe,xe){return(xe.children||"").toLowerCase().includes(oe.toLowerCase())},value:R.find(function(F){return F.controlId===J.controlId})?J.controlId:void 0,onSelect:function(oe){return le((0,v.default)({},J,{controlId:oe}))},notFoundContent:e.createElement("span",null,J.worksheetId?_l('\u8BE5\u5DE5\u4F5C\u8868\u65E0"\u6210\u5458"\u5B57\u6BB5'):_l("\u8BF7\u5148\u9009\u62E9\u5DE5\u4F5C\u8868"))},R.map(function(F){return e.createElement(ln.default.Option,{key:F.controlId,value:F.controlId},F.controlName)})),e.createElement("div",{className:"mTop30 buttons"},e.createElement("button",{className:"saveBtn mRight20",onClick:function(){return q(1)}},_l("\u4FDD\u5B58")),e.createElement("button",{className:"clearBtn saveBtn",onClick:function(){var oe=D().get(l,["appExtendAttr","status"]);n(oe?oe===9?0:3:0)}},_l("\u53D6\u6D88")),a!==1&&e.createElement("span",{className:"cancelBtn saveBtn",onClick:function(){return u(!0)}},_l("\u505C\u7528"))),i&&e.createElement(qs.Z,{className:"cancelUserExtendInfo",width:494,title:e.createElement("span",{style:{color:"#f44336",fontWeight:600}},_l("\u505C\u7528\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868")),visible:i,okText:_l("\u505C\u7528"),cancelText:_l("\u53D6\u6D88"),onCancel:function(){u(!1)},onOk:function(){q(9)}},e.createElement("p",{className:"modalText"},_l("\u5220\u9664\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868\u540E\uFF0C\u7528\u6237\u89D2\u8272\u6743\u9650\u4E2D\u7684\u6743\u9650\u6807\u7B7E\u90FD\u5C06\u5931\u6548 \u662F\u5426\u786E\u8BA4\u53D6\u6D88\uFF1F"))))}var td=(0,Q.Z)([`
  padding: 0 40px;
  overflow: auto;
  height: 100%;
  .worksheetInfoBox {
    height: 71px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 26px;
  }
  .editBtn {
    width: 66px;
    height: 31px;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #dddddd;
    text-align: center;
    line-height: 31px;
    margin-left: auto;
    cusor: pointer;
  }
  .checkbox-userinfo {
    width: fit-content;
    margin-bottom: 16px;
  }
`],[`
  padding: 0 40px;
  overflow: auto;
  height: 100%;
  .worksheetInfoBox {
    height: 71px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 26px;
  }
  .editBtn {
    width: 66px;
    height: 31px;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #dddddd;
    text-align: center;
    line-height: 31px;
    margin-left: auto;
    cusor: pointer;
  }
  .checkbox-userinfo {
    width: fit-content;
    margin-bottom: 16px;
  }
`]),ad=W.ZP.div(td);function od(o){var a=o.data,d=o.onChangeStep,n=o.appId,t=a.appExtendAttr,r=t.worksheetId,l=t.extendAttrs,s=t.userControlId,c=t.status,p=(0,e.useState)(l||[]),i=(0,B.Z)(p,2),u=i[0],f=i[1],x=function(){Tn.Z.getAppSimpleInfo({workSheetId:r}).then(function(A){var k=A.appId,S=A.appSectionId;window.open("/app/"+k+"/"+S+"/"+r)})},E=function(A){hn.Z.saveAppExtendAttr({appId:n,worksheetId:r,userControlId:s,extendAttrs:A,status:c}).then(function(k){}).catch(function(k){return alert(k)})},m=function(A,k){var S=[];A?S=u.filter(function(h){return h!==k}):S=u.concat(k),f(S),E(S)};return e.createElement(ad,null,e.createElement("h3",{className:"mTop35 Font17 Bold"},_l("\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868")),e.createElement("div",{className:"userExtendInfo-desc Gray_9e mTop13"},_l("\u901A\u8FC7\u5DE5\u4F5C\u8868\u7BA1\u7406\u5E94\u7528\u6210\u5458\u989D\u5916\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5\uFF0C\u5728\u89D2\u8272\u6743\u9650\u3001\u7B5B\u9009\u5668\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7528\u6237\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5\u6765\u4F5C\u4E3A\u52A8\u6001\u7B5B\u9009\u6761\u4EF6"),e.createElement(wn.Z,{className:"help",type:3,href:"https://help.mingdao.com/role/extended-info",text:_l("\u5E2E\u52A9")})),e.createElement("div",{className:"worksheetInfoBox mTop16"},e.createElement(kn.Z,{url:a.iconUrl,fill:"#757575",className:"mRight8",size:24}),a.worksheetName||"",e.createElement(V.Z,{icon:"task-new-detail",className:"mLeft8 Gray_75 pointer ThemeHoverColor3",onClick:x}),e.createElement("span",{className:"editBtn pointer ThemeHoverColor3 ThemeHoverBorderColor3",onClick:function(){return d(2)}},_l("\u7F16\u8F91"))),e.createElement("div",{className:"mTop30 Font14 Bold"},_l("\u4F5C\u4E3A\u6743\u9650\u6807\u7B7E\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5")),e.createElement("div",{className:"desc Gray_75 mBottom25 mTop16"},_l("\u4EC5\u652F\u6301\u5173\u8054\u8BB0\u5F55\u7C7B\u578B\u5B57\u6BB5\uFF08\u5305\u62EC\u672C\u8868\u8BB0\u5F55\uFF09\uFF0C\u6700\u591A\u53EF\u8BBE\u7F6E3\u4E2A\u5B57\u6BB5\u3002\u5F53\u5176\u4ED6\u5DE5\u4F5C\u8868\u7684\u8BB0\u5F55\u4E5F\u5173\u8054\u4E86\u76F8\u540C\u4FE1\u606F\u65F6\uFF0C\u53EF\u4EE5\u5728\u89D2\u8272\u4E2D\u8BBE\u7F6E\u4E3A\u7528\u6237\u62E5\u6709\u8BB0\u5F55\u6743\u9650")),e.createElement("div",null,[a.optionalControls.find(function(b){return b.id==="currentworkshet"})].concat((0,Qe.Z)(a.optionalControls.filter(function(b){return b.id!=="currentworkshet"}))).filter(function(b,A){return A<1e3}).map(function(b){return e.createElement(me.Z,{className:"checkbox-userinfo",checked:u.indexOf(b.id)>-1,onClick:m,value:b.id,text:b.id==="currentworkshet"?e.createElement("span",null,a.worksheetName+" ("+_l("\u672C\u8868")+")"):b.name,disabled:u.indexOf(b.id)<0&&u.length===3})})))}var ld=w(69812),rd=w.n(ld),id=w(71163),sd=w.n(id),dd=(0,Q.Z)([`
  margin: 0 auto;
  height: 100%;
  position: relative;
  .userExtendInfo-desc .help {
    vertical-align: unset !important;
  }
`],[`
  margin: 0 auto;
  height: 100%;
  position: relative;
  .userExtendInfo-desc .help {
    vertical-align: unset !important;
  }
`]),cd=(0,Q.Z)([`
  min-width: 640px;
  width: 45%;
  .imgDes {
    max-width: 640px;
    margin: 30px auto;
  }
  padding: 30px 40px;
  background: #f7f7f7;
  min-height: 100%;
  overflow: auto;
  .title {
    font-weight: 600;
  }
  .con {
    font-weight: 400;
  }
  .desCard {
    width: 140px;
    height: 56px;
    text-align: center;
    line-height: 56px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #dddddd;
    background: #fff;
    &.c {
      background: #2196f3;
      border: 0;
      color: #fff;
    }
  }
`],[`
  min-width: 640px;
  width: 45%;
  .imgDes {
    max-width: 640px;
    margin: 30px auto;
  }
  padding: 30px 40px;
  background: #f7f7f7;
  min-height: 100%;
  overflow: auto;
  .title {
    font-weight: 600;
  }
  .con {
    font-weight: 400;
  }
  .desCard {
    width: 140px;
    height: 56px;
    text-align: center;
    line-height: 56px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #dddddd;
    background: #fff;
    &.c {
      background: #2196f3;
      border: 0;
      color: #fff;
    }
  }
`]),pd=(0,Q.Z)([`
  text-align: center;
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  top: 50%;
  .explain-img-con {
    text-align: center;
  }
  .explain-img-con img {
    height: 115px;
    width: auto;
  }
  .explain-desc {
    width: 445px;
    color: #757575;
    margin: 23px auto;
    text-align: left;
  }
  .explain-button {
    padding: 15px 22px;
    background: #2196f3;
    border: none;
    color: #ffffff;
    font-size: 14px;
    border-radius: 3px;
    font-weight: 600;
  }
  .explain-button:hover {
    background: #1565c0;
  }
`],[`
  text-align: center;
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  top: 50%;
  .explain-img-con {
    text-align: center;
  }
  .explain-img-con img {
    height: 115px;
    width: auto;
  }
  .explain-desc {
    width: 445px;
    color: #757575;
    margin: 23px auto;
    text-align: left;
  }
  .explain-button {
    padding: 15px 22px;
    background: #2196f3;
    border: none;
    color: #ffffff;
    font-size: 14px;
    border-radius: 3px;
    font-weight: 600;
  }
  .explain-button:hover {
    background: #1565c0;
  }
`]),ud=W.ZP.div(dd),fd=W.ZP.div(cd),gd=W.ZP.div(pd);function hd(o){var a=o.appId,d=o.projectId,n=(0,e.useState)(0),t=(0,B.Z)(n,2),r=t[0],l=t[1],s=(0,e.useState)(void 0),c=(0,B.Z)(s,2),p=c[0],i=c[1],u=(0,e.useState)(!0),f=(0,B.Z)(u,2),x=f[0],E=f[1],m=d||localStorage.getItem("currentProjectId")||md.global.Account.projects[0].projectId,b=(0,je.XH)(m,Mn.UU.userExtensionInformation);(0,e.useEffect)(function(){b!=="2"&&hn.Z.getAppExtendAttr({appId:a}).then(function(I){E(!1),I.appExtendAttr&&I.appExtendAttr.status===1&&(i(I),l(3))}).catch(function(I){return E(!1)})},[]);var A=function(C){l(C)},k=function(){hn.Z.getAppExtendAttr({appId:a}).then(function(C){E(!1),Js()(C).length!==0&&i(C)}).catch(function(C){return E(!1)})},S=function(){return e.createElement(gd,null,e.createElement("div",{className:"explain-img-con"},e.createElement("img",{src:Ks()})),e.createElement("div",{className:"explain-title mTop50 center"},e.createElement("h5",{className:"mBottom0 Font16 Normal LineHeight30"},_l("\u901A\u8FC7\u5DE5\u4F5C\u8868\u7BA1\u7406\u5E94\u7528\u6210\u5458\u989D\u5916\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5")),e.createElement("h5",{className:"mBottom0 Font16 Normal LineHeight30"},_l("\u5728\u89D2\u8272\u6743\u9650\u3001\u7B5B\u9009\u5668\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7528\u6237\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5\u6765\u4F5C\u4E3A\u52A8\u6001\u7B5B\u9009\u6761\u4EF6"))),e.createElement("div",{className:"explain-desc"},_l("\u5982\u5728\u9500\u552E\u7BA1\u7406\u5E94\u7528\u4E2D"),"\uFF1A ",e.createElement("br",null),"- ",_l("\u53EF\u4EE5\u901A\u8FC7\u5EFA\u7ACB\u6210\u5458\u8868\u6765\u7BA1\u7406\u9500\u552E\u4EBA\u5458\u7684\u56E2\u961F\u3001\u5730\u533A\u3001\u5173\u8054\u8BA2\u5355\u7B49\u6269\u5C55\u4FE1\u606F"),e.createElement("br",null),"- ",_l("\u53EF\u4EE5\u6839\u636E\u8BA2\u5355\u6240\u5173\u8054\u7684\u56E2\u961F\uFF0C\u6765\u7B5B\u9009\u51FA\u5F53\u524D\u9500\u552E\u4EBA\u5458\u6240\u5728\u56E2\u961F\u7684\u8BA2\u5355")),e.createElement("div",{className:"mTop30 center"},e.createElement("button",{className:"explain-button",type:"button",onClick:function(){l(1)}},_l("\u5EFA\u7ACB\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868"))),e.createElement("div",{className:"center mTop30"},e.createElement(wn.Z,{type:3,href:"https://help.mingdao.com/role/extended-info",text:_l("\u5E2E\u52A9")})))},h=function(){return e.createElement(fd,{className:""},e.createElement("div",{className:"title Gray_75"},_l("\u4EC0\u4E48\u662F\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868\uFF1F")),e.createElement("div",{className:"con mTop12 Gray_75"},_l("\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868\u975E\u5E38\u7C7B\u4F3C\u4E8E\u7EC4\u7EC7\u4E2D\u7684\u7528\u6237\u7BA1\u7406\u8868\u3002\u5728\u7EC4\u7EC7\u4E2D\uFF0C\u53EF\u4EE5\u5168\u5C40\u7BA1\u7406\u6210\u5458\u57FA\u7840\u4FE1\u606F\uFF0C\u5982\uFF1A\u90E8\u95E8\u3001\u804C\u4F4D\u3001\u7EC4\u7EC7\u89D2\u8272\u7B49\u3002\u5176\u4E2D\u90E8\u95E8\u3001\u7EC4\u7EC7\u89D2\u8272\u53EF\u7528\u4E8E\u6570\u636E\u6743\u9650\u8303\u56F4\uFF0C\u5728\u5DE5\u4F5C\u8868\u6DFB\u52A0\u90E8\u95E8\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6237\u5BF9\u81EA\u5DF1\u6240\u5728\u90E8\u95E8\u7684\u8BB0\u5F55\u90FD\u62E5\u6709\u6743\u9650\u3002\u540C\u6837\u5728\u5177\u4F53\u5E94\u7528\u4E2D\uFF0C\u5F80\u5F80\u4E5F\u9700\u8981\u989D\u5916\u7BA1\u7406\u7528\u6237\u5728\u672C\u5E94\u7528\u4E2D\u7684\u6269\u5C55\u4FE1\u606F\u3002\u5982\uFF1A\u9500\u552E\u7BA1\u7406\u5E94\u7528\u4E2D\uFF0C\u9700\u8981\u7BA1\u7406\u9500\u552E\u4EBA\u5458\u6240\u5728\u7684\u56E2\u961F\u3001\u533A\u57DF\u3001\u804C\u80FD\u7B49\uFF0C\u540C\u65F6\u4E5F\u5E0C\u671B\u8FD9\u4E9B\u4FE1\u606F\u53EF\u4EE5\u7C7B\u4F3C\u90E8\u95E8\u4E00\u6837\u7528\u4E8E\u6570\u636E\u6743\u9650\u8303\u56F4\u3002\u6B64\u65F6\u5C31\u53EF\u4EE5\u5EFA\u7ACB\u4E00\u5F20\u9500\u552E\u4EBA\u5458\u8868\u3002")),e.createElement("div",{className:"title mTop24 Gray_75"},_l("\u4EC0\u4E48\u662F\u6743\u9650\u6807\u7B7E\uFF1F")),e.createElement("div",{className:"con mTop12 Gray_75"},_l("\u6743\u9650\u6807\u7B7E\u6307\u7528\u4E8E\u63A7\u5236\u6570\u636E\u6743\u9650\u8303\u56F4\u7684\u6269\u5C55\u4FE1\u606F\u5B57\u6BB5\uFF08\u4EC5\u652F\u6301\u5173\u8054\u7C7B\u578B\u5B57\u6BB5\uFF09\u3002\u5F53\u7528\u6237\u8BBF\u95EE\u5E94\u7528\u65F6\uFF0C\u7CFB\u7EDF\u53EF\u4EE5\u4ECE\u6269\u5C55\u4FE1\u606F\u8868\u4E2D\u8BFB\u53D6\u5F53\u524D\u7528\u6237\u7684\u6743\u9650\u6807\u7B7E\uFF0C\u4ECE\u800C\u4F7F\u7528\u6237\u5BF9\u5176\u4ED6\u5DE5\u4F5C\u8868\u4E2D\u5173\u8054\u4E86\u76F8\u540C\u6807\u7B7E\u7684\u8BB0\u5F55\u62E5\u6709\u6743\u9650\u3002")),e.createElement("div",{className:"title mTop24 Gray_75"},_l("\u6743\u9650\u6807\u7B7E\u5982\u4F55\u7528\u4E8E\u6570\u636E\u6743\u9650\u8303\u56F4\uFF1F")),e.createElement("div",{className:"con mTop12 Gray_75"},_l("\u6743\u9650\u6807\u7B7E\u7528\u4E8E\u6570\u636E\u6743\u9650\u8303\u56F4\u65F6\u548C\u90E8\u95E8\u5B57\u6BB5\u7C7B\u4F3C\uFF0C\u53EA\u662F\u6CA1\u6709\u4E13\u95E8\u7684\u7CFB\u7EDF\u5B57\u6BB5\uFF0C\u9700\u8981\u901A\u8FC7\u5173\u8054\u8BB0\u5F55\u5B57\u6BB5\u6765\u7075\u6D3B\u5B9E\u73B0\u3002")),e.createElement("div",{className:"con mTop10 Gray_75"},_l("\u5982\uFF1A\u8FD8\u662F\u5728\u9500\u552E\u7BA1\u7406\u5E94\u7528\u4E2D\uFF0C\u7528\u6237\u6269\u5C55\u4FE1\u606F\u8868\u4E2D\u5DF2\u8BBE\u7F6E\u4E86\u56E2\u961F\u4F5C\u4E3A\u7528\u6237\u6743\u9650\u6807\u7B7E\uFF08\u5173\u8054\u56E2\u961F\u8868\uFF09\uFF0C\u5E76\u4E14\u8BA2\u5355\u8868\u4E5F\u5173\u8054\u4E86\u6240\u5C5E\u56E2\u961F\u65F6\u3002\u90A3\u4E48\u5F53\u7528\u6237\u8BBF\u95EE\u5E94\u7528\u65F6\uFF0C\u7CFB\u7EDF\u5C31\u53EF\u4EE5\u6839\u636E\u8BFB\u53D6\u5230\u7684\u7528\u6237\u6240\u5728\u56E2\u961F\uFF0C\u5E76\u4ECE\u8BA2\u5355\u8868\u4E2D\u8FC7\u6EE4\u51FA\u5173\u8054\u4E86\u76F8\u540C\u56E2\u961F\u7684\u8BA2\u5355\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7528\u6237\u5BF9\u5C5E\u4E8E\u81EA\u5DF1\u56E2\u961F\u7684\u8BA2\u5355\u62E5\u6709\u67E5\u770B\u3001\u7F16\u8F91\u6216\u5220\u9664\u6743\u9650\uFF08\u53EF\u4EE5\u5728\u89D2\u8272\u6743\u9650\u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF09\u3002")),e.createElement("div",{className:"con mTop10 Gray_75"},_l("\u6B64\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A\u4E86\u89E3\u66F4\u591A\u524D\u5F80"),e.createElement(wn.Z,{type:3,href:"https://help.mingdao.com/role/extended-info",text:_l("\u5E2E\u52A9\u4E2D\u5FC3")})),e.createElement("div",{className:"imgDes flexRow alignItemsCenter"},e.createElement("div",{className:"left"},e.createElement("div",{className:"desCard"},_l("\u9500\u552E\u4EBA\u5458"))),e.createElement("div",{className:"center flex flexRow alignItemsCenter justifyContentCenter"},e.createElement("div",{className:"flex"}),e.createElement("img",{src:rd(),width:56}),e.createElement("div",{className:"flex"}),e.createElement("div",{className:"desCard c"},_l("\u56E2\u961F")),e.createElement("div",{className:"flex"}),e.createElement("img",{src:sd(),width:56}),e.createElement("div",{className:"flex"})),e.createElement("div",{className:"right flexColumn"},e.createElement("div",{className:"desCard"},_l("\u8BA2\u5355")),e.createElement("div",{className:"desCard mTop10"},_l("\u8BA2\u5355")),e.createElement("div",{className:"desCard mTop10"},_l("\u8BA2\u5355")))))},g=function(){if(b==="2")return(0,je.j0)(m,Mn.UU.userExtensionInformation,{dialogType:"content"});if(x)return e.createElement(qe.Z,null);var C={appId:a,result:p,appProjectId:d};switch(r){case 0:return S();case 1:case 2:return e.createElement(nd,(0,v.default)({},C,{value:p&&p.appExtendAttr.status===1?{worksheetId:p.appExtendAttr.worksheetId,controlId:p.appExtendAttr.userControlId,appId:p.appIdOfWorksheet}:{},step:r,onChangeStep:A,onChangeData:k}));case 3:return p?e.createElement(od,(0,v.default)({},C,{data:p,onChangeStep:A})):null}};return e.createElement(ud,{className:"flexRow"},e.createElement("div",{className:"flex"},g()),r!==0&&h())}const vd=hd;var xd=w(75809),ta=[{url:"/",key:"user",txt:_l("\u7528\u6237")},{url:"/roleSet",key:"roleSet",txt:_l("\u89D2\u8272")}],Ed=function(){var a=localStorage.getItem("currentProjectId")||((D().get(md,"global.Account.projects")||[])[0]||{}).projectId,d=(0,je.XH)(a,Mn.UU.userExtensionInformation);return d?ta.concat({url:"/others",key:"others",txt:_l("\u6269\u5C55")}):ta},Cd=function(o){(0,ye.default)(a,o);function a(d){(0,we.default)(this,a);var n=(0,ge.default)(this,(a.__proto__||Se()(a)).call(this,d));n.getSet=function(){var r=n.props.match.params.appId;Be.Z.getAppRoleSetting({appId:r}).then(function(l){n.setState({rolesVisibleConfig:String(l.appSettingsEnum),notify:l.notify})})},n.handleSwitchRolesDisplay=function(){var r=n.props.match.params.appId,l=n.state.rolesVisibleConfig,s=l===j.mj.REFUSE?j.mj.PERMISSION:j.mj.REFUSE;Be.Z.updateMemberStatus({appId:r,status:s}).then(function(c){c&&n.setState({rolesVisibleConfig:s})})},n.updateAppRoleNotify=function(){var r=n.props.match.params.appId,l=n.state.notify;Be.Z.updateAppRoleNotify({appId:r,notify:!l}).then(function(s){s&&n.setState({notify:!l})})},n.renderCon=function(){var r=n.state.tab;switch(r){case"roleSet":return e.createElement(Vs,(0,v.default)({},n.props,{tab:r}));case"others":return e.createElement(vd,(0,v.default)({},n.props,{tab:r}));default:return e.createElement(Gs,(0,v.default)({},n.props,{tab:r,transferApp:function(){return n.transferApp()}}))}},n.transferApp=function(){var r=n.props,l=r.projectId,s=r.match.params.appId;(0,xd.Z)({showMoreInvite:!1,SelectUserSettings:{projectId:l,filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,unique:!0,callback:function(p){Be.Z.updateAppOwner({appId:s,memberId:p[0].accountId}).then(function(i){i?location.reload():alert(_l("\u6258\u4ED8\u5931\u8D25"),2)})}}})},n.state={tab:"user",rolesVisibleConfig:null,notify:!1};var t=d.setQuickTag;return t(),n}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){var n=this.props.match.params.appId,t=this.props,r=t.isAdmin,l=t.fetchAllNavCount,s=t.setSelectedIds,c=t.canEditUser,p=t.canEditApp;s([]),(c||p)&&this.getSet(),l({canEditUser:c,appId:n}),r||this.setState({tab:"user"})}},{key:"componentWillReceiveProps",value:function(n,t){!D().isEqual(this.props.appRole.quickTag,n.appRole.quickTag)&&n.appRole.quickTag.tab&&this.setState({tab:n.appRole.quickTag.tab||"user"})}},{key:"componentWillUnmount",value:function(){var n=this.props,t=n.setAppRoleSummary,r=n.setUserList,l=n.SetAppRolePagingModel;r([]),t([]),l(null)}},{key:"render",value:function(){var n=this,t=this.props,r=t.canEditApp,l=t.canEditUser,s=t.appRole,c=s===void 0?{}:s,p=t.isOwner,i=t.match.params.appId,u=t.setQuickTag,f=t.SetAppRolePagingModel,x=this.state,E=x.notify,m=x.rolesVisibleConfig,b=c.pageLoading,A=c.appRolePagingModel;return b?e.createElement(qe.Z,null):e.createElement(ze.EI,{className:"flexColumn overflowHidden"},(r||l)&&e.createElement(ze.Ln,null,e.createElement("div",{className:"tabCon InlineBlock pLeft26"},Ed().filter(function(k){return r?!0:k.key==="user"}).map(function(k){return e.createElement("span",{className:M()("tab Hand Font14 Bold",{cur:n.state.tab===k.key}),id:"tab_"+k.key,onClick:function(){n.props.handleChangePage(function(){f((0,v.default)({},A,{pageIndex:1,keywords:""})),u((0,v.default)({},c.quickTag,{tab:k.key})),(0,We.T8)("/app/"+i+"/role"),n.setState({tab:k.key})})}},k.txt)})),e.createElement("div",{className:"flexRow alignItemsCenter",style:{"justify-content":"flex-end"}},(r||l)&&e.createElement("div",{className:"flexRow pRight20 actCheckCon"},e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u5F00\u542F\u65F6\uFF0C\u5F53\u7528\u6237\u88AB\u6DFB\u52A0\u3001\u79FB\u9664\u3001\u53D8\u66F4\u89D2\u8272\u65F6\u4F1A\u6536\u5230\u7CFB\u7EDF\u901A\u77E5\uFF0C\u5173\u95ED\u65F6\uFF0C\u4EE5\u4E0A\u64CD\u4F5C\u4E0D\u901A\u77E5\u7528\u6237\u3002")),popupPlacement:"top"},e.createElement("span",null,e.createElement(me.Z,{className:"",size:"small",checked:E,onClick:this.updateAppRoleNotify,text:_l("\u53D1\u9001\u901A\u77E5")}))),e.createElement(Ie.Z,{text:e.createElement("span",null,_l("\u52FE\u9009\u65F6\uFF0C\u666E\u901A\u89D2\u8272\u53EF\u4EE5\u67E5\u770B\u5E94\u7528\u4E0B\u6240\u6709\u89D2\u8272\u548C\u4EBA\u5458\u3002\u672A\u52FE\u9009\u65F6\uFF0C\u5BF9\u666E\u901A\u89D2\u8272\u76F4\u63A5\u9690\u85CF\u7528\u6237\u5165\u53E3")),popupPlacement:"top"},e.createElement("span",null,e.createElement(me.Z,{className:"mLeft25",size:"small",checked:m!==j.mj.REFUSE,onClick:this.handleSwitchRolesDisplay,text:_l("\u5141\u8BB8\u67E5\u770B")})))),p&&e.createElement("div",{className:"pRight20"},e.createElement(Fn.Z,{dataList:[{value:0,text:_l("\u8F6C\u4EA4\u5E94\u7528")}],onAction:function(S){n.transferApp()},popupAlign:{points:["tr","br"],offset:[-180,0]}})))),e.createElement(ze.h4,{className:M()("flex")},this.renderCon()))}}]),a}(e.Component),bd=function(a){return{appRole:a.appRole}},Id=function(a){return(0,Me.DE)(ct,a)};const Ad=(0,Oe.$j)(bd,Id)(Cd);var Sd=(0,Q.Z)([`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`],[`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`]),wd=(0,Q.Z)([`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  margin-left: -3px;
  &:hover {
    box-shadow: inset 0 0 20px 20px rgba(0, 0, 0, 0.1);
  }
`],[`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  margin-left: -3px;
  &:hover {
    box-shadow: inset 0 0 20px 20px rgba(0, 0, 0, 0.1);
  }
`]),kd=(0,Q.Z)([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-right: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  z-index: 1;
  .Gray_bd {
    &:hover {
      color: #9e9e9e !important;
    }
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-right: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  z-index: 1;
  .Gray_bd {
    &:hover {
      color: #9e9e9e !important;
    }
  }
`]),yd=(0,Q.Z)([`
  flex: 1;
  display: block;
  text-align: center;
  & > span {
    padding: 0 12px;
    margin: 0 10px;
    line-height: 48px;
    display: inline-block;
    box-sizing: border-box;
    line-height: 44px;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    &.current {
      position: relative;
      color: #2196f3;
      border-bottom: 3px solid #2196f3;
    }
  }
`],[`
  flex: 1;
  display: block;
  text-align: center;
  & > span {
    padding: 0 12px;
    margin: 0 10px;
    line-height: 48px;
    display: inline-block;
    box-sizing: border-box;
    line-height: 44px;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    &.current {
      position: relative;
      color: #2196f3;
      border-bottom: 3px solid #2196f3;
    }
  }
`]),Nd=(0,Q.Z)([`
  padding: 0 14px 0 8px;
  line-height: 34px;
  height: 34px;
  background: #f3faff;
  border-radius: 18px;
  color: #2196f3;
  font-weight: 500;
  &:hover {
    background: #ebf6fe;
  }
  .set {
    margin-top: -4px;
    display: inline-block;
    vertical-align: middle;
  }
`],[`
  padding: 0 14px 0 8px;
  line-height: 34px;
  height: 34px;
  background: #f3faff;
  border-radius: 18px;
  color: #2196f3;
  font-weight: 500;
  &:hover {
    background: #ebf6fe;
  }
  .set {
    margin-top: -4px;
    display: inline-block;
    vertical-align: middle;
  }
`]),Td=(0,Q.Z)([`
  width: 640px;
  background: #ffffff;
  box-shadow: 0px 5px 24px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
  .con {
    padding: 24px;
    line-height: 26px;
    h6 {
      font-size: 15px;
      font-weight: 600;
      color: #333333;
    }
    li {
      color: #757575;
      line-height: 24px;
      font-weight: 400;
      &::before {
        content: ' ';
        width: 5px;
        height: 5px;
        display: inline-block;
        background: #757575;
        border-radius: 50%;
        line-height: 32px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .btn {
      margin-top: 16px;
      line-height: 36px;
      background: #2196f3;
      border-radius: 3px;
      padding: 0 24px;
      color: #fff;
      font-weight: 600;
      &:hover {
        background: #1e88e5;
      }
    }
    .helpPortal {
      line-height: 36px;
      float: right;
      margin-top: 16px;
      font-weight: 500;
    }
  }
`],[`
  width: 640px;
  background: #ffffff;
  box-shadow: 0px 5px 24px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
  .con {
    padding: 24px;
    line-height: 26px;
    h6 {
      font-size: 15px;
      font-weight: 600;
      color: #333333;
    }
    li {
      color: #757575;
      line-height: 24px;
      font-weight: 400;
      &::before {
        content: ' ';
        width: 5px;
        height: 5px;
        display: inline-block;
        background: #757575;
        border-radius: 50%;
        line-height: 32px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .btn {
      margin-top: 16px;
      line-height: 36px;
      background: #2196f3;
      border-radius: 3px;
      padding: 0 24px;
      color: #fff;
      font-weight: 600;
      &:hover {
        background: #1e88e5;
      }
    }
    .helpPortal {
      line-height: 36px;
      float: right;
      margin-top: 16px;
      font-weight: 500;
    }
  }
`]),Bd=(0,Q.Z)([`
  width: 23px !important;
  height: 14px !important;
  border-radius: 7px !important;
  &.ming.Switch.small .dot {
    width: 10px;
    height: 10px;
  }
  &.ming.Switch--off .dot {
    left: 2px;
  }
  &.ming.Switch--on.small .dot {
    left: 11px;
  }
`],[`
  width: 23px !important;
  height: 14px !important;
  border-radius: 7px !important;
  &.ming.Switch.small .dot {
    width: 10px;
    height: 10px;
  }
  &.ming.Switch--off .dot {
    left: 2px;
  }
  &.ming.Switch--on.small .dot {
    left: 11px;
  }
`]),Rd=(0,Q.Z)([`
  width: 1px;
  height: 25px;
  opacity: 1;
  border: none;
  background: #eaeaea;
`],[`
  width: 1px;
  height: 25px;
  opacity: 1;
  border: none;
  background: #eaeaea;
`]),Ld=[_l("\u5E38\u89C4"),_l("\u5916\u90E8\u95E8\u6237")],Dd=W.ZP.div(Sd),Pd=W.ZP.div(wd),Zd=W.ZP.div(kd),Fd=W.ZP.div(yd),Od=W.ZP.div(Nd),Md=W.ZP.div(Td),Ud=(0,W.ZP)(yn.Z)(Bd),Hd=W.ZP.div(Rd),Wd=function(o){(0,ye.default)(a,o);function a(){var d,n,t,r;(0,we.default)(this,a);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=(n=(t=(0,ge.default)(this,(d=a.__proto__||Se()(a)).call.apply(d,[this].concat(s))),t),t.state={applyList:void 0,appDetail:void 0,roles:null,loading:!0,openLoading:!1,showApplyDialog:!1,activeRoleId:null,rolesVisibleConfig:null,quitAppConfirmVisible:!1,isOpenPortal:!1,editType:0,showPortalSetting:!1,showPortalRoleSetting:!1,portalBaseSet:{},hasGetIsOpen:!1,roleDebug:!1},t.fetchPortalInfo=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.props,i=p.match.params,u=i.appId,f=i.editType;ue.Z.getPortalEnableState({appId:u}).then(function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.setState({isOpenPortal:x.isEnable,hasGetIsOpen:!0,editType:f==="external"?1:0,loading:!0},function(){t.fetch(p),!x.isEnable&&f==="external"&&((0,We.T8)("/app/"+u+"/role"),t.setState({editType:0}))})})},t.getSetting=function(){var p=t.props.match.params.appId;Be.Z.getAppRoleSetting({appId:p}).then(function(i){t.setState({roleDebug:i.isDebug})})},t.handleChangePage=function(p){if(t.child&&t.child.state.hasChange){var i=!t.child.props.roleId||t.child.props.roleId==="new";return he.Z.confirm({title:i?_l("\u521B\u5EFA\u5F53\u524D\u65B0\u589E\u7684\u89D2\u8272\uFF1F"):_l("\u4FDD\u5B58\u5F53\u524D\u89D2\u8272\u6743\u9650\u914D\u7F6E \uFF1F"),okText:i?_l("\u521B\u5EFA"):_l("\u4FDD\u5B58"),cancelText:i?_l("\u4E0D\u521B\u5EFA"):_l("\u4E0D\u4FDD\u5B58"),width:440,onOk:function(){t.child.state.hasChange=!1,t.child.setState({hasChange:!1}),t.child.onSave(!0)},onCancel:function(){t.child.state.hasChange=!1,t.child.setState({hasChange:!1}),t.child.onFormat(),p&&p()}})}else p&&p()},n),(0,ge.default)(t,r)}return(0,ke.default)(a,[{key:"componentDidMount",value:function(){this.ids=(0,gt.s3)(this.props),this.fetchPortalInfo(),this.getSetting(),$("html").addClass("roleBody")}},{key:"componentWillReceiveProps",value:function(n){this.ids=(0,gt.s3)(this.props);var t=this.props.match.params.appId,r=n.match.params,l=r.appId,s=r.editType,c=this.state,p=c.hasGetIsOpen,i=c.isOpenPortal;t!==l||!p?(this.setState({loading:!0}),this.fetchPortalInfo(n)):(s==="external"&&!i&&(0,We.T8)("/app/"+l+"/role"),this.setState({editType:s==="external"&&i?1:0}))}},{key:"componentWillUnmount",value:function(){$("html").removeClass("roleBody")}},{key:"fetch",value:function(){var n=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,l=t.match.params.appId;Tn.Z.getApp({appId:l}).then(function(s){(0,je.tl)(s.iconUrl,s.iconColor),n.setState({appDetail:s,loading:!1});var c=n.props.match.params,p=c.appId,i=c.editType;i==="external"&&!(((0,Rn.le)(s.permissionType,s.isLock)||(0,Rn.g9)(s.permissionType))&&n.state.isOpenPortal)&&(0,We.T8)("/app/"+p+"/role")})}},{key:"render",value:function(){var n=this,t=this.state,r=t.appDetail,l=r===void 0?{}:r,s=t.loading,c=t.openLoading,p=t.editType,i=t.showPortalRoleSetting,u=t.isOpenPortal,f=t.roleDebug,x=l.projectId,E=x===void 0?"":x,m=this.props.match.params.appId,b=(0,Rn.Rg)(l.permissionType),A=b.isOwner,k=b.isAdmin;k=A||k;var S=(0,Rn.le)(l.permissionType,l.isLock),h=(0,Rn.g9)(l.permissionType),g=S||h,I=l.iconColor,C=l.name,N=l.iconUrl;if(s)return e.createElement(qe.Z,null);var T=g?(0,je.XH)(E,Mn.UU.externalPortal):!1;return e.createElement(ca.Z,{projectId:E},e.createElement(Dd,null,e.createElement(fa(),{title:(l.name||"")+" - "+_l("\u7528\u6237")}),e.createElement(Zd,{className:M()("",{mBottom0:p===1})},e.createElement("div",{className:"flexRow pointer Gray_bd mLeft16",onClick:function(){window.disabledSideButton=!0;var y=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+m))||{};if(y){var Z=y.lastGroupId,O=y.lastWorksheetId,U=y.lastViewId;(0,We.T8)("/app/"+m+"/"+[Z,O,U].filter(function(G){return G&&!D().includes(["undefined","null"],G)}).join("/")+"?from=insite")}else(0,We.T8)("/app/"+m)}},e.createElement(Ie.Z,{popupPlacement:"bottomLeft",text:e.createElement("span",null,_l("\u5E94\u7528\uFF1A%0",C))},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("i",{className:"icon-navigate_before Font20"}),e.createElement(Pd,{style:{backgroundColor:I}},e.createElement(kn.Z,{url:N,fill:"#fff",size:18}))))),e.createElement("div",{className:M()("nativeTitle Font17 bold mLeft16 overflow_ellipsis",{flex:!g||g&&!u&&T}),style:{maxWidth:!g||g&&!u&&T?"100%":200}},_l("\u7528\u6237")),g&&u&&e.createElement(Fd,{className:"editTypeTab"},[0,1].filter(function(R){return g?!0:R!==1}).map(function(R){if(!(R===1&&!T))return e.createElement("span",{className:M()("editTypeTabLi Hand Bold Font14",{current:p===R}),onClick:function(){R!==p&&n.handleChangePage(function(){if(R===1){if(T==="2"){(0,je.j0)(E,Mn.UU.externalPortal);return}(0,We.T8)("/app/"+m+"/role/external")}else(0,We.T8)("/app/"+m+"/role");n.setState({editType:R})})}},Ld[R])})),S&&!u&&T&&e.createElement(Nn.Z,{action:["click"],popup:e.createElement(Md,{className:"openPortalWrap"},e.createElement("img",{src:Ts(),className:"Block"}),e.createElement("div",{className:"con"},e.createElement("h6",null,_l("\u5C06\u5E94\u7528\u53D1\u5E03\u7ED9\u7EC4\u7EC7\u5916\u7528\u6237\u4F7F\u7528")),e.createElement("ul",null,e.createElement("li",null,_l("\u7528\u4E8E\u63D0\u4F9B\u4F1A\u5458\u670D\u52A1\uFF0C\u5982\uFF1A\u4F5C\u4E3A\u8D44\u6599\u5E93\u3001\u5185\u5BB9\u96C6\u3001\u8BA8\u8BBA\u7EC4\u7B49\u3002")),e.createElement("li",null,_l("\u7528\u4E8E\u548C\u4F60\u7684\u4E1A\u52A1\u5BA2\u6237\u5EFA\u7ACB\u5173\u7CFB\uFF0C\u5982\uFF1A\u670D\u52A1\u5916\u90E8\u5BA2\u6237\u7684\u4E0B\u5355\uFF0C\u67E5\u5355\u7B49\u573A\u666F\u3002")),e.createElement("li",null,_l("\u652F\u6301\u5FAE\u4FE1\u3001\u624B\u673A/\u90AE\u7BB1\u9A8C\u8BC1\u7801\u53CA\u5BC6\u7801\u767B\u5F55"))),e.createElement("div",{className:M()("btn InlineBlock",{disable:c}),onClick:function(){if(T==="2"){(0,je.j0)(E,11);return}c||(n.setState({openLoading:!0}),ue.Z.editExPortalEnable({appId:m,isEnable:!n.state.isEnable}).then(function(y){y?n.setState({isOpenPortal:!0,editType:1,openLoading:!1},function(){(0,We.T8)("/app/"+m+"/role/external")}):(n.setState({openLoading:!1}),alert(_l("\u5F00\u542F\u5931\u8D25"),2))}))}},c?_l("\u5F00\u542F\u4E2D..."):_l("\u542F\u7528\u5916\u90E8\u95E8\u6237")),e.createElement(wn.Z,{href:"https://help.mingdao.com/portal/introduction",type:3,className:"helpPortal",text:_l("\u4E86\u89E3\u66F4\u591A")}))),popupAlign:{points:["tr","tr"],offset:[17,0]}},e.createElement(Od,{className:M()("openPortalBtn Hand InlineBlock",{disable:c})},e.createElement(V.Z,{className:"Font20 Hand mLeft10 mRight6 set ",icon:"external_users_01"}),c?_l("\u5F00\u542F\u4E2D..."):_l("\u542F\u7528\u5916\u90E8\u95E8\u6237"))),j.Mu.concat(200).includes(l.permissionType)&&p!==1&&e.createElement(e.Fragment,null,S&&!u&&T&&e.createElement(Hd,{className:"mLeft24"}),e.createElement(Ie.Z,{popupPlacement:"bottomLeft",text:e.createElement("span",null,_l("\u5F00\u542F\u540E\uFF0C\u5E94\u7528\u7684\u7BA1\u7406\u5458\u3001\u8FD0\u8425\u8005\u3001\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u89D2\u8272\u8EAB\u4EFD\u8BBF\u95EE\u5E94\u7528\u3002\u8BF7\u6CE8\u610F\uFF0C\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u6539\u53D8\u5F00\u53D1\u8005\u89D2\u8272\u7684\u6570\u636E\u6743\u9650\uFF0C\u5F00\u53D1\u8005\u59CB\u7EC8\u65E0\u6CD5\u770B\u5230\u4E1A\u52A1\u6570\u636E\u3002"))},e.createElement("div",{className:"mLeft24 valignWrapper"},e.createElement(Ud,{checked:f,size:"small",onClick:function(y){Be.Z.updateAppDebugModel({appId:m,isDebug:!y}).then(function(Z){Z&&n.setState({roleDebug:!y})})}}),e.createElement("span",{className:"mLeft8"},_l("\u89D2\u8272\u8C03\u8BD5")))))),p===0?e.createElement(Ad,(0,v.default)({},this.props,{appId:m,isAdmin:k,isOwner:A,canEditApp:S,canEditUser:h,projectId:E,isOpenPortal:u,onRef:function(y){n.child=y},appDetail:l,handleChangePage:this.handleChangePage,editType:p})):e.createElement(ys,(0,v.default)({},this.props,{onRef:function(y){n.child=y},isOwner:A,handleChangePage:this.handleChangePage,isAdmin:k,canEditApp:S,canEditUser:h,appDetail:l,projectId:E,appId:m,editType:p,closePortal:function(){ue.Z.editExPortalEnable({appId:m,isEnable:!1}).then(function(y){y?((0,We.T8)("/app/"+m+"/role"),n.setState({isOpenPortal:!1,editType:0})):alert(_l("\u5173\u95ED\u5931\u8D25\uFF01"),2)})},showPortalRoleSetting:i}))))}}]),a}(e.Component),Qd=function(a){return{portal:a.portal}},Gd=function(a){return(0,Me.DE)(He,a)};const _d=(0,Oe.$j)(Qd,Gd)(Wd)},69812:Ce=>{Ce.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAVCAYAAADSH6UfAAAABHNCSVQICAgIfAhkiAAAAZ5JREFUaEPtm71qhFAQhSPqW/gGPoWFiIWtz5GXkyAKS5qQIgQCSZmQKqSSpNkispq5xS6bxQ25+DPj5CzYiHrPOfNxuTtenQv8/n0CZVk+UwhV3/eV67p1HMefUkJxpAiBDr4ECNB+PzpBunMc584Aa44gCG7DMPziUgdAuZIXNO4xoKeyCNgtAXu9BzZJksclpQPQJdMWOtZvgA5IfqNzNUFb+b5fR1H0PqctADpnuit5tiWgP1zRDPtkgDUzbNu2myzLtlPaBqBTprnSZ40B9NgywWrWqjcGVs/zqqZp7vM8342JBYCOSU/JvVMBOhDHB53bGGC7rrtK0/TVNjIAapuYwutnBPQ0rRcDq007C4AqBM7W0oKAHqT9tZ3lFEVx6IHZGsP1OhKg9SK7kXPtLADKXhp+ARIAHUjhgdatlwCUnw92BRIAPTuDsqcDAewJiF6DsqcDAewJLAgo/sWzV3uFAmYEFH3QFfIgTvJUgOJNkrjS6hA0BlC8i9fBgGgXloBiN5PoaioUh/2gCouqyRJ21GuqpkIvkr9J+gYOXu17pYJCtQAAAABJRU5ErkJggg=="},71163:Ce=>{Ce.exports="data:image/png;base64,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"},62611:Ce=>{Ce.exports="data:image/png;base64,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"},13802:Ce=>{Ce.exports="data:image/png;base64,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"},84952:Ce=>{Ce.exports="data:image/png;base64,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"},93748:Ce=>{Ce.exports="data:image/png;base64,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"},55294:Ce=>{Ce.exports="data:image/png;base64,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"},91825:Ce=>{Ce.exports="data:image/png;base64,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"},85897:Ce=>{Ce.exports="data:image/png;base64,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"},40639:Ce=>{Ce.exports="data:image/png;base64,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"},3031:Ce=>{Ce.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA0CAYAAAD8H6qwAAAAAXNSR0IArs4c6QAACFhJREFUaEPtmH9Q0/cZx99JkB8RxYC/kFAKVkkPgeKyYiBk/LB6tdNJN1Sc7bgDDSobGqoSfyxJxbDBGTYBBdp5Zzd69jbd1bU7QX6EISIaEUqrFgw/RoZgmCgggpBk92TCEUQNHv3Du3yPO3L5fD7P8/q+n+fzeZ5PGHhFHsYrwgkb6HRHyqaoTdHpVmC67dly1KbodCsw3fZsOWpTdKIC+/fvd3dxcfEyGo3DDg4ONyQSyaOpqCSTyezs7e15Dg4Ocx49enTn0KFD2qmsnzj3qRyVyWRcLy+vE1wudw2Hw2GOjIygs7PzgU6ny+zu7k5XKBTGFzlUqVQbPD09jy5cuJDr5OSE3t5edHR01La3tydIpdLrL1o/2bgFaFpamiePx/tXYGDg6wsWLICDgwNMJhP6+/vR3NyM69evnxSLxQkATM9ylp2dnRwQEJDF4/EYs2fPBpPJBL1sd3c3Ghoa+hobG9+TSCSVU4UdA922bduM8PDwSoFAEOzh4QE7OzswGP8fNhqNGBgYwM2bN1FdXZ2SnJysmsxRZmZm+PLly0uCgoJYBMliscamEaxer8fly5fv1tfXByoUis6pwI6B5uTk/CY0NPSPvr6+oHBNfAj2/v37uHTpUq9Go/FTKBS68XNkMpm9n59frVAo9Js/f74F5Oi84eFhtLa2oqKi4rOtW7f+asqg5CQgIEArEom4bm5uY0pONESqaLVacpQlFosl48ezsrJiw8LCPvfz84Ojo+OkDJRGfX19qKmpGa6pqXlzKhvMrKhKpYoOCws76+/vb87LZz3kqKenB2q1Wt/Q0PC6XC4fGJ1bWFhYGh4eHkm5PT7kE22RqpTvarU6LTEx8ZC1qppBT548WRgVFbWZcvN5Tmju0NAQamtrSdV3pFJpCX1HR5lIJGoPDQ1lOTs7P9c3vSzlanl5eeOmTZt8pwR65swZbUREhA+Hw3nhOoPBgJaWFpSVlWWIxeJ9tCAzM3NtZGTkOYrIjBkzXmjj4cOHqKqqGqmoqOAqlcquFy4AwJDL5fNDQkL+4+Mx167kzwXQ626Cs+A1BIhWQ7g2FgwG08IObaquri4UFxcXx8XFrabBvLy8jJUrV+5pq69CXenXGOjrgrv3Mqz+YDu4b/g9xUFRqauro/CvS01N/YdVoGlpacKApV6Vzeq/IHLDDuQeSMDAfT2MBiAw8n18lPNXC1gK3b1791BaWlq/cePGt8jJqVOnCo0d32z256/Avc425B3+CLMcAZMB2KH6O4JXrbdgoajcunULRUVFKSkpKZMedRPhGenp6RvvX/n6dNy+34IX/A42RIXgu7pqeM4B5rGBjXty8NMPd1qso2NKrVbfiY6OXkQDx48e+XLgtmZdyvGzuFFfi59H8GHHNMHfHWA7sKEq+Tdmz3Ebs0GgtKGKi4vzk5KSEq1StOBE7tbK7J0Fg648zPNcivLz52ACAwajCSFLAHdvPpRfXLE4sqgkqtXq/9bW1s6nkvrraEHR3ebvVv1onRhl/zyL9lYq6wywmCas9ANWJfwBq3+ZPMZD6UPnaUlJySmxWBxnFWieKn2bOl+a/40eMFFhZDDM/w0mE/hvAB5zZ+J3Xz2wOA0ePHhAoHfXr1+/gJwkRPlXNDU1iLp6ASaTEBnmGjtsMCH2J8CyCAlidh21UJQ2ZFFR0adJSUlbrQItyFFFXyyQnNXoACP9wmOiPxOGR4D3w4GF7ksgyfveQlHK0bKyslsxMTFvkpOd7771ZZu2bl2TngHmk1pnBh02QRYPLHr7CKJi91uANjY2Euj+3bt3p1sFmpGRsbinKq+psaWZUd8KsJiAwQjMcwN+vwfodZLivTilRdjoHCwpKVFv2bIlggZU8r252uKMHdXNQP8gwZrweBhYGwVERwC+0d9j4WtLx2w8fvyYGhRcuHBhk1Qq/cIqUJlMxnRnP9IZv81w7zMCbfeARe7Az1YBTbpleHdHDRyd2BZqtLW1kZNPEhMTt9FAVlbWByPNpZ8593+F1h5g0AC8vRwIWQ502R1G8JqDFizU4FRXV5sqKyuXKhSK21aBPjleznu7GVbf1ajAtvsWTCcXsD0/BH/NETjNnGVhZ1SNsrKyX+zdu/cMDR4+fHiJQLCisa/pAh5qPwGH0wNH12DM80+Gf2isxfrRMlxeXn6noaGBa01/SwbMGZWdnR0vEok+5fF4YDIZYDJZ5j5ysoc20sWLFwc0Go23XC6/+2QO4/Tp03UREREB1NQQDJXi0TZxvB06migiarU6Lz4+frs1ao6BymQyVz6f3yoUCme5uLg8s3uihkKn01Gd/lt8fHzMeCe5ubmpIpEondrE55VRCrtGo6Gwiw4ePHhxSqA0OT8/XyUSiXYvXrx4UkejLZpGozFcuXJFIJVKr453kpqaylmxYkWjUCic6+rqOunLUpvY0dFBL1oZFxcnshZyTFH6oFQq3Xx9fesFAoHHxMaXIAcHB829aFVV1Z8SExPpOvLUc+zYse3BwcHHqSdls9kWsBRySpurV68+vnbtmuDAgQO1LwVqPmZUqjAej3c+MDCQTblGIRyFbG9vJyf1Wq1WpFAoep/hhFFQUFDI5/NjfXx8zLCUq6OQN27coHtX8q5du45NBdJC0dGFdO/x8vL63Nvbm67L5vtSZ2cnbt++fUGn022Wy+Xdz3NCd6+goCCVj4/PTi6Xy7C3twe1dS0tLQMtLS0pEokkb6qQk4LSlzKZzNnZ2Tlh5syZPzaZTN39/f3n9u3bV/a82+dE5x9//HEgh8OJYbFY3kNDQ1q9Xn9CqVTeeRnIZ4K+rLEfcp3tR7LpVtemqE3R6VZguu3ZctSm6HQrMN32Xpkc/R9e45diIWMM6AAAAABJRU5ErkJggg=="},4593:(Ce,Vn,w)=>{Ce.exports=w.p+"static/open.d888b1f02aaec5daf8f589d9aa17109e.gif"},40893:Ce=>{Ce.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWEAAADpCAYAAAD1a4bWAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQmcFNW1/3+nu2dl30FANgEVQUVRE4xionlxScQlxMSnCDOEMI0EZgYTzTPBvH8UnjNgkBmCTiMQkzxJUBMTfTEJ4i5GAXcQQWSXfWeG6e7z/1w2AWe6blXX2n3q8+FjPplzz7n3e4qvZU1VXYLGwcyXAxgK4DwA3Y/+0RgpIUJACJggsAvAMgBrACwC8GciUv+fHBlMgFKtjZmHA5gk0s3gM0CW5ncCcwBMsCLjqQ8/1j8ZSl5LQD6DD0SI/jy+pGiF3xecbfNrUMLMrK54Hzt65ZttTGS9QsBvBNTVsBKxErLWUVlVMwVEd50azMDPykuK7tdKIkGuEPiShJl5CICnALR0ZQZSRAgIAV0Cc4hohFFwZXVsGoDxjcYxhpdFi+YZ5ZGfu0PgJAkfFfAL7pSWKkJACFggkFLEhgI+XJAPHEJBl7tLbt1pob4MsZnAcQkfvQWhBCxXwDZDlnRCwGYC6tbEQ6fm1BPwkVFJ5u9MjBY/Y/O8JJ0FAidKeKncA7ZAUIYIAW8IXEFE6gmKw0dFVc1UIpqgOxVmjpZHi6t14yXOOQKHJczMdxz9RZxzlSSzEBACdhJYRERXqIRmroCPTyCZvLZs7Khn7ZyQ5LJG4JiEP9V5DG3ztl34fPsu7Ntfi3giYa2ijBICQqBBAi2bN0F+bi56nd4BkXBYh9INldWxy8xcAR++6ALvzk/m9Bo7dvh2nSIS4ywB0vllnBLuB5+sw649+52djWQXAkLgsID79jgNbVs1T0njmb8v/HDl6jVnm0VGjOLSaFHM7DiJd4aAkrC6wf/jVOnfWbFGBOwMf8kqBBolcEG/XmhamN/gz1945Q0sfe9D0/SYMbk8WnS36YEywDECSsLq5r56LbnBQ92CWPHpBscmIImFgBBomIASsBLxqYcIOLPOGCXhlPeD5So4sxouqwkWgYsH9EF+Xs7xSYuAg9U/ndkqCXOqwFeXLJdfwumQlBgh4ACBfmd0PX5vWATsAGAfpDSU8Iv//sAH05QpCIHsJNDttHbo3rk9RMCZ23+RcOb2VlaWAQSUhD/9dLWlX8IBeKispEj7BY4MwBXIJYiEA9k2mXS2ENi1YwtWrVa/tjF9iIBNI/NmgEjYG+5SVQgYEli39jNs2bLZMK6BABGwFWoejREJewReygqBVAREwNlzfoiEs6fXstKAEBABB6RRNk1TJGwTSEkjBOwgIAK2g2KwcoiEg9UvmW0GE7AsYObPAfoNwPuYsIuIdiZBOyMJ7IpzYmc8XLhLPuDu3xNHJOzf3sjMsoiAZQFrMmLmOBGtZWA11B/mVUBodZixui6nftVPR4/erZlKwmwmIBK2GaikEwJmCWzd+jnWfqZ2uffy4LXM9CoBL4QJL8muzO71wnYJh8MhhEMh91YQ0ErxeEJtMRPQ2cu07SKQSCbw3jtLkfDd97l5BzMtpBC9TIn4v0rH/lBenbWr6afksV3CrZo3RV7uFx8ccWjegU+7a88+1B6qD/w6ZAHpEdi5YztWr/4kvSRujGb+iAkLkhxecFd0xDI3SmZLDZGwR50WCXsE3mdlN2/eiA3r1/lsVqmnc+TLi/QkgZ4si458LVCT9+FkRcIeNUUk7BF4n5Xdvm0b1qxZ5bNZmZgO88cApuYkDswZN25cnYmREnqUgEjYo1NBJOwReJ+Vra+vx7vvLPHZrKxMh3cw8Ot6FDwsj8OZ4ycSNsfLtmiRsG0oA59oy+ebsW7dZ4Ffx+EFMA6CeE4IoYoJJSPV43ByGBAQCXt0ioiEPQLv07JOPyfs9rKZOUmgx8ORyL3jRw9f63b9INUTCXvULZGwR+B9XNa6iHkTGL8FUAhQAYgL+Oj/JqAZg/sQqK1XS2fm6kSSfvWTO4s2ejUHP9cVCXvUHZGwR+B9XjYNEVeUlRRPbGx5U2KxZqGDOCdE6A1wHwb1BeFsAs52EclDecnI/xs7dvh2F2v6vpRI2KMWiYQ9Ah+AslZFzIzK8mhRuZklTp06vyCRu/c8CuFCYj6PgYFEdJ6ZHGZimbGfCfdNLCl60My4TI4VCXvUXZGwR+ADUtaqiO3Y0mjWrFmFe+M514D4JgDXqlsadmNj5mUcwm0TxxS/b3fuoOUTCXvUMZGwR+ADVNZLER/DNH369Ly6cOE3Q6CbmfjbBGplH0KuB+N/9rZr/stJw4Ydsi9vsDKJhD3ql0jYI/ABK+unPeYmzZ+f23T7nu9RksaBcKFdKBlYyUm6beLYkYvtyhmkPCJhj7olEvYIfMDKprPbMjMml0eL7nZiyZXVj17CHBpHxDcDlPbHYtQjbUz002y8V2y7hJs1KUBuTsSJvmdUzr37D+JQfTyj1iSLsZ+AknD3zu2x6NXFWPKu+Q+ZOSlitdoHZ85rT1z/YwB32nLvmDGvLFo03H6S/s1ou4T9u1SZmRAIHoFjElYzf+GVN7D0vQ9NL8JpEasJTZv2WMtkbnI8E48nUAvTkzx5wGuUy98uLS7ekWaeQAwXCQeiTTLJbCVwooT9LmKbZbwuDFyVDR+XFwln699uWXcgCJwqYTVpq7cmAH6grKT4HjcWfvTK+D4Qxlmtx8BeJho6cczIhVZzBGGcSDgIXZI5Zi2BhiQchCviYw2rqH70AuLQYyD0t9RE5roQha6bUDLyn5bGB2CQSDgATZIpZi+BxiScjojBGF4WLZrnFtX58+eH127dU0agSSAUmK/L9Ujy0LKxo541P9b/I0TC/u+RzDCLCaSSsMLy5F+ff2PNuvWXmEPEBw6hoIvb3/2tmFHTjUL4HUCDzc33SDQzfbc8OvJPVsb6eYxI2M/dkbllPQEjCQO4b+rM2epphPFmYCWZvzMxWvyMmTF2xE6a9EKkafvVUwm400K+BDh5a1l01BMWxvp2iEjYt62RiQkBQEfCRDSpoqpmKhFN0GXGzNHyaHG1brzdcRVVsVuJ8LilvISby8YULbA01oeDRMI+bIpMSQgcI6ArYRVfWR2bpn1FnExe6/U91gerHx1ATH8joi6mOs5cB+IhZSWj3jA1zqfBImGfNkamJQQUATMSVvE6V8QM3p2fzOnlh+/6zpgxt00txZ8jwiBzHecdxLi4NFr8iblx/osWCfuvJzIjIXCcgFkJ64iYGMWl0aKYXzA/OG9ek9De+mdAuMLMnJj5U0QSF5WPHr3NzDi/xYqE/dYRmY8QOIGAFQkfvTUxnoEHCMg/no6xR/1/5dGiyX6EXFFVs4CIbjQ1N8ZbVNfsstLSYQdNjfNRsEjYR82QqQiBUwlYlbDKM2X6o10ikfAQcLIjEHqtLDryNb8TrqiOzSZghJl5MnhueUnxHWbG+ClWJOynbshchMApBNKRcFBhVlbF1Bt2pqTK4BvKS4qfDuKaRcJB7JrMOWsIZKOE1bPEzdqvVq8pX67baAbvRDjRJ4j3h0XCul2WOCHgAYFslPDhWymxWLNwHd4mqN2h9Q4G/l5eUvQtvWj/RImE/dMLmYkQ+BKBbJWwAqFec0YIS83sa+e3Jz90TmnbJdyiaSHyctPe7URn7o7E5ETCCIfDjuQ+llTtqJFMJh2tIcn9QyCeSGDH7n2WJpTNElbAplY/9jVG8iVteMz74gk+6yfjRq3XHuNxoO0SbtW8abAlnBNGOBRytC318QQSCZGwo5B9lDyRSGDrzj2WZpTtElbQKqtr7gbofn2A/MeykuJh+vHeRoqET+GfIxL29ozMwOoi4fSbWlkdexXAV7UzEQ8sG1O8VDvew0CRsEjYw9MvO0qLhNPvc2XV7K4M/ogITTSzvVZWUmTpk5ma+W0LEwmLhG07mSRRwwREwvacGRXVNcMJNEc3W1C+PywSFgnrntMSZ5GASNgiuAaGVVbH1DeQr9PMuLqspKiXZqxnYSJhkbBnJ1+2FBYJ29fpadWzeybBq3Qzev3dZJ15ioRFwjrnicSkQUAknAa8hq+GKwGUamVl/qQsWqz9wodWTpuDRMIiYZtPKUl3KgGRsL3nhHqbLlLHawBqrZM5SckrJo4ZtUgn1osYkbBI2IvzLqtqioTtb3dFVc2Pieghvcz8RFlJ8S16se5H2S7hpoX5yM2JuL8SmyrmRCKIRJx9Y66+Pg71FpUc2UFAvZize98BS4uVlzUax1ZRVbOGiLrpgE1SToeJY27fohPrdoztEnZ7AVJPCGQyAZFwKgnHyohQodd/vqespPgBvVh3o0TC7vKWakLAFAGRcOO4Js+a1SInHtkEQoERVLUVUnm0uKdRnBc/Fwl7QV1qCgFNAiLh1KAqqmOzCPihDk4KYVDpj4re0ol1M0Yk7CZtqSUETBIQCacGNq3q0bOSFPpQByuDf1leUvwLnVg3Y0TCbtL2sFZ+Xi7atmx2+JeO6itxTZt8sf+jh9OS0gYE8nNzoHqX4lgDQP3J2uPxP/35vC1bt7c0AtCqZYu9I75/09tGcWn8/NhjcKofLxKRVl9EwmkQ9/vQSDiMLh3boEOblsjPC+43nv3OWebnLYF3PliOf72kt4fpmDt+gIIC1y5AlgF4iIjmpiIkEvb2/HGsettWzdGra0eRr2OEJbFfCOzbfwCPzPtfrelcdflg9D+7r1asjUFKxhOIqMEXRkTCNpL2S6q+PTqjY1vD/zrzy3RlHkIgbQK/X/AMNm/ZapinV/fTcf3VVxrGORQwgujLX4ETCTtE26u0/c7oCnUVLIcQyCYCby55F68sNn7wIT8vDyUjb/USzRwiGnHiBETCXrbD5tpyBWwzUEkXGAI7du3GnD8s0Jrv6OHfR5NCw0eLtXJZDDrpilgkbJGi34Z1bNsKfXuc5rdpyXyEgGsEqmc/jtq6Q4b1bv72t3B6F8//rlxx7B6xSNiwZf4PUE9BXHxub6h/yiEEspXAH//yHNZt2GS4/CGDL8bAAf0M4xwOWEREV6gajkhYPYtakPrZRofX53569eGfcIgcL3x4p+bkyTs1d2rXCuqP0bHvELBkPfDxNmDJBqNo+bkQCBaBNnveQKsDxu9t7C7oi60t7N1+rlke0Lst0KctcJn+y9GHb0s4IuEcJeH8vGB1MM3Z5uaEEQqF0sxiPDweTyCeOFnCA/p0QzicuvbSDcBdzwJ764xrSIQQCCKBHrQCg0JqU+bUxzZuj4VJ3R2SjLJ9+edKxPdeeUTKBod6oWOISNgIk+bPvZJwsyYFOOP0jiln+dLqIwKWQwhkMoHWtBVXhtQWdKmPQ8jB04nbjMLS/vlvb9EScSuRcNqojyTwSsLqeeBUtyLULYgb5soVsE1tljQ+JhChOG4MzdOa4Z8Sw5GEs79DUVfE84w/JX+DSFirZcZBXkn49E5t0aZls0YnWPMmoP7IIQSygcDQ8G+Ri3rDpT6TuAUHUWgYl27AzBuA8zunzHKfSDhdykfHeyXh3t06Qe1m0tjx3/8C/vaRTYuUNELA5wSuDv0RzWiv4Sz/nhiK3dDaos4wV6qA4osA9SfFIRJOi/AJg/0q4ZKn5EkIu3osefxP4Ouhv6ItGe9i9ELyamzlTo4vSCTsOOIvCoiEXYQtpYRAIwQGh/6JzrTWkM9rya9jPXc3jEs3QCScLkET40XCJmBJqBBwiMAgehk9QisNs7+VHIzV7PzX1ETChq2wL0AkbB9LySQErBI4h97G2aF3DIcvS16Ej/kcw7h0AzyTsHpxIMjb3lsBn5uTgxA5/8ZcPKFe1kgcn+KZPbugeZPGP0Yi94StdFPGBJVAT1qBCzVe2HgjOQRrWf/VNqs8PJOw1QnLOPMEzj2zO1o2a9LoQJGweaYyIrgEmtB+XBt6IuUCEgjjr4lbUAfn3+oVCQf3XNKeuUhYG5UEZgmBs0LvoD81vpXcm8mvYQ33doWGSNgVzN4WEQl7y1+q+5PAufQm+obeP2ly9ZyDD/k8rOD+rk1aJOwaau8KiYS9Yy+V/U0gB4fQM7QCEY7jEPKwks92fcIiYdeRu19QJOw+c6koBHQJiIR1SQU4TiQc4ObJ1DOegEg441sMiISzoMmyxMASEAkHtnX6ExcJ67OSSCHgNgGRsNvEPagnEnYf+mnNgVxnP0V7fFEt84EmDj/OuvMAcMD464/ug/a44ua9QG08vUmIhNPjF4jRImH321R+OdCx8U842zqhTs2AVg7vzr5xD7Cr1tZpZ0SymsXA8q3pLUUknB6/QIwWCbvfJpGw+8y9qCgS9oJ6AGuKhN1vmkjYfeZeVAy8hAvz85CXm+MFu6yq2bNrh5Q7a8i3I+w/HUTC9jP1Y8bgS7ggD/kiYcfPrZ5dOqBJiu2NRML2t0AkbD9TP2YUCfuxKz6ck0jY/aaIhN1n7kVFkbAX1ANYUyTsftNEwu4z96KiSNgL6gGsKRJ2v2kiYfeZe1FRJOwF9QDWFAm73zSRsPvMvagoEvaCegBrioTdb5pI2H3mXlQUCXtBPYA1RcLuN61fB6Aw15267Zs6/8bcpj3Anjp31hOkKiu2pM/F0zfmCuURNVfON5GwK5iliBCwREAkbAlbsAaJhIPVL5ltdhHwVMJ5uRHkRCLZRdyD1fbpfhqayZb3HpCXkkLAmICnEjaenkTYQUC+HWEHRckhBJwhIBJ2hquvsoqEfdUOmYwQOImASDgLTgiRcBY0WZYYWAIi4cC2Tn/iImF9VhIpBNwmIBJ2m7gH9UTCHkCXkkJAk4BIWBNUkMMyScJtCoELuwA9WwMtC4AWBUBhDrBlH7B+N7BqO/DmOqAuzX2/gtxvmXuwCIiEg9UvS7PNBAlffSZw+0CgR2tjBAcOAQ+9AvzlQ+NYiRACXhMQCXvdARfqB1nCatfi//oGMLCzeVDTXgaeeMf8OBkhBNwkIBJ2k7ZHtYIq4b7tgOnXAy3yrYN78EXgpdXA1v3Wc1gdWZADNHHp+xGp5qhu24TI6ir0x+2pBeJJ/XivIg/F0//eg51zFwnbSdOnuYIo4QGdgIevB/JseqFy237grx8Bv3nDvSb1aQuc3cG9eo1VOqcjEAk5P4+PtwIH6p2vk26FjXuO/N7AL4dI2C+dcHAeQZOwuvJ9/PtAuyb2Q1m6ARjzlP15G8ooEnaHs9kqImGzxCQ+bQJBk/Dkq4EhvdJedqMJ1NXwnLecy38ss0jYecZWKoiET6AWDocQIhduVlnpVAaN6df7dLRoWtjoivy023LXlsAf/9NZ+LVx4Po5wO5aZ+uIhJ3lazW7SPhECYdCCLnxGwOr3cqQcUGS8L3fAK49y3nw6krY6fvDImHn+2ilgkhYJGzlvElrTJAk/PeiIy9gOH2ov4g3znO2ikjYWb5Ws4uERcJWzx3L44IiYfVM8JO3W16m6YHqlsTn+0wP0x4gEtZG5WqgSFgk7OoJp4oFRcLfOAP41bfcw/PjvwCL1zpXTyTsHNt0MouERcLpnD+WxgZFwkP7AT+9wtISLQ2asgh46n1LQ7UGiYS1MLkeJBIWCbt+0gVFwreeD9w52D08M18H5r7tXD2RsHNs08ksEhYJp3P+WBobFAnfNhCIftXSEi0NemQxMPvfloZqDWqa684vGY0mo156Cbvwxtz2/UB9AF5bPngI2HHQiJp7P/f0jbmwPKLmSqeDIuFrzwTuvdIVJIeLTH4BePoD9+pJJSHQEAGRcBacF0GRsPpexCM3udcQP72k4t6qpZLfCHgq4VAoBHlhzvlTon/vbmjRLBhvzC38IVDo0pfHLpsJHEo4z18qCIFUBDyVsLTGHQJB+nbEz68ErjnTeS4LPwHu+T/n60gFIWBEQCRsRCgDfh4kCY+4EBh9ifPQa94E1B85hIDXBETCXnfAhfpBkXDrQuDZkS4AOVrimtnAjgPu1ZNKQqAhAoGTcDKRwLZtWxGPxxGJRNC2XXuoe8tyNE4gKBL+jz7Afd90r5O/eB74+8fu1ZNKQiDwEl6//jNs+XwLmL94GFF9ha1jp87o1MnCJmRZck4ERcKDuwOV17nXlJ8+Byxa5V49qSQEAi3hTZs2YOOG9Y12sVv3nmjbtp10uQECQZGw2rp+4Wj3WvjNR/2115h7K5dKfiIQiNsRdXW1eP+91Nvmqo/D9z/vAkTCYT/x9cVcgiJhBet/rgEu6+k8tlfWAOV/db6OVBACRgQCIeHPP9+E9euMP3fV64zeaNmytdGas+7nQZJwh6bAL66ytsW9bmPVPnOT/uHsZyx15yJxQiAQEt64YR02bdpo2K0uXbqiQ8fTDOOyLSBIEj7Wm6qhwAVd7O/Uu5uAHy6wP29jGdV3G/Jz7K+n8rqxg7KVmSc58/8Fl0wCG/ZYofPlMYGQ8OZNG7Fhg/Ee1R06dkKXLqfbQyaDsgRRwk59Ua36dWCeg19OO/W0ubov0LmF/SdTvw5AXsT+vHZkTCSBdzbZkcm/OdSblnadR4GQ8NYtn2Pt2jWGHVGPq3Xr1sMwLtsCgihhJ54Zrosf2dJou4vPBouEM/Nvm+8kvPjdlaitO+QY7Z07tmP16k8M87du3Ro9evY2jMu2gCBKWPXo9guAkq/Y163prwK/X2pfPp1MImEdSsGL8ULCywCc2xiqDz5Zh207bbpB0kCR3bt34ZOVKww71bx5C/Tu48KHBwxn4q+AoEpYUXxsGHBW+/R5un0v+NiMRcLp986PGbyQ8CIAlzcGQwlYidipY9++vVix/EPD9E2aNMWZZ/UzjMu2gCBLWN1Pnfs9QH0g3eqx6yAw/AlvflkkErbaNX+P80LCkwD8IhUWJ6+Gaw8ewAcfvGfYldzcXPQfcL5hXLYFBFnCqlc9WgMPXw+0bWK+c2orm+jTwCbn/kMt5aREwuZ7FoQRXkj4PAAp76bFEwms+HSjI7clEvE4li3T+5X2wIGDQPItiZPO46BLWC1m5CDghxeb/+up9pBTe8l5dYiEvSLvbF3XJayWw8zq8YRuRktTtya279qL2rp67Nq73yhc++fLlr6NRCJuGN/3zH5o2rSpYVw2BYiEveu2SNg79k5W9krCQwE85eTCUuWe/+dnsX7jZsPy3xxyKc45q49hnAR8QSAI2/zIlfDJZ6w8J+zt32BPJHz0ajjlL+icxLLw5dex7P2PDEuc3/9sXHGpC18FN5xJcAJEws71Sq6EnWPrZWYvJdwSgHpczfC2hN2A3vlgOf710muGaU/v3Ak3f+dqwzgJCNaV8LjBwA8s/M51wXvAgy961+32TYECB15bVnlzfPoZ7QQDm/d6x9yNyurV7HW77Kmk9cbciaWYWf2STl0RO/AyZuOL2rDpczzx9N8MV62+ohYt+k+E5WtqhqyOBfj9SrhZHvDk7YD6p9njwCHghnnA7lqzIyVeCLhDwLSEj96WUCJ+2s0r4oO1tZj52O+1qNxwzVXo0a2rVqwEAX6WsBLvr78DnN3Beqc+2gKM+zOwt856DhkpBJwiYEnCR0Wsbk0oETf6Eofdk57zhwXYsWu3Ydr+Z/XFVUMGG8ZJwBECfpRwq4Ijuy4PvwBonp9+p/bUAnPeBp5bDuw8mH4+ySAE7CJgWcLHJsDMQwColzkcl/FLr/8bby0zfmkjPy8PY0b8AERkF6eMzuMnCZ/fGfjeAGBIL+eQ/+sT4A/LgPeNH7ZxbhKSWQgcJZC2hE+QcXcA6jE2JWV1laz+NPq9CSsdUI+oqUfVdI5bbrgOp3W04aMDOsUCHuOlhDs1By7uClzUFbj4dKBJGq8nm22Duk/81nrg5U+Bf69z9+tqZucq8ZlLwDYJu4Wosiq2E3RY8CkPBh4uLykaZxSXDT9n5pSPFrotYfVB8hvOAa7qDXQ17KR7HVq9A/i/FcBfPgTU9ybkEAJuEAichCuqYr8nwveN4fABqm3etrR0WNb/dfKLhNW93VEXATeeA4R9+niVOq/Ud4fVJy/VK8+1xi9pGp+KEiEEUhAInISnVtf8gEG/0+kqMd9ZGi2eoRObyTFeS1jdmR96DjDmEnt+yeZWr7bsA6a+DCxa5VZFqZONBAIn4cmzZrXISUS0HpNmYGV5SVHWv8PspYTVFjxTrgEuCfCuU+qFj4oXAc5GQ8iaHScQOAkrIhXVsdkEjNChw6HkN8t/NOofOrGZGuOlhGfdCJybAXuvqvvE9y/M1DNE1uUlgUBKeOrMmouYabEOOAaeKy8pukYnNlNjvJLwHRcCP8qgz3hM/NuRJynkEAJ2EgikhBWAyqqa90GktY1GkpJXTBwzSj0hkJWHFxJumQ88MwLICWcOcnWP+Po55m5LqA/RO/HtiMyh6t+V7Ktz58WeAEs4NgqER3RayMD7ZWNGDiCirLyt54WEo18Fbhuo051gxfz8eeD5j/XnfEUvQD0LLUfwCKzcCvx7vfPzDqyEp06dX8D5e7YBVKiFiTGiLFo0Rys2w4K8kPBzRYB69TjTjtc/AyY8o78qkbA+K79FioQ1OlJZHZsGYLxGKJixcV9hqNekESOy7ntabku4VxvgdxpPcuv0zW8x6hnir88C1OcadQ6RsA4lf8aIhDX6Mn367Hb1keQaE1fD/10WLfq5RuqMCnFbwtedBfzXNzIK4UmLuWM+sHyL3vpEwnqc/BglEtbsSmV1zd0A3a8TzszJMIcGTRg7colOfKbEuC3hYQOA0ssyhd6X13H3c8ALmi9wiISDex6IhDV7N3369Lz6SBP1V6KzzhAGr8qNH+g3bty4rPm6rNsSVp+fHPMVnW4EM+bXrxz5CpvOIRLWoeTPGJGwib5UzKy5jZjm6Q5h4JHykqLRuvFBj3Nbwh2bAadl8BMBauuejXv0zgqRsB4nP0aJhE12paI69h4B5+gOI8Z/lEaLnteND3Kc2xIOMiu75y4Stpuoe/lEwiZZV1Y/egkQel13GDO2g/mC8rHFn+mOCWqcSNi7zomEvWOfbmWRsAWClVU1U0B0l/ZQ5o/i+XTxT4qKMnpvWJGw9hlhe6BI2HakriUUCVtAPWvWrJy98ci7RDjTxPAX925Z9/VJkyYlTYwJVKhI2Lt2tS4A8hzY8t7r1sbIAAAJvklEQVS7FWVP5f2HALU3odNHYN+YawzM1Icf658MJZYQUUQXHgOPlZcUjdSND1qcSDhoHZP5ZhOBjJOwal5ldc1PAJpsppHMXFoeLVZv4GXcIRLOuJbKgjKIQEZKWPWnoir2GhHMPq1aVlZSNNXP/T1ypZ+8lkBhBq8JR+ILJ4wevSnVnEXCfu6ozC3bCWSshI+80sxvAlC7QGsfzJhcHi26W3uAi4EVVbEHiPDTk0oy9hBQWhotijU2FZGwi02SUkLAJIGMlfDh2xIzHukDCi/W2Z35RG4MrikvKR5lkqWj4ZXVsSiAFPvl8QNlJcX3NDQJkbCjrZHkQiAtAhkt4cMirpr9VRC/ap4SP1FWUnyL+XH2j5gSizUL1/FnBGqV8rYDcH95SdHPTo0RCdvfE8koBOwikPESVqAqqh69kSi0wCw0Br+d5PB1d0VHbDY71s74yuqa7wI0XydnQ7dTRMI65CRGCHhDICskfETENXcR0RSzmBnYEkLo5tKSES+bHWtXfEV17B4CfqWbj0+5IhYJ65KTOCHgPoGskfAREcfKiFBhFjMzxykUKisbM3K62bF2xFdWxW4HYa6ZXCdeEYuEzZCTWCHgLoGskrBCW1kdK1X/sIaZnziEgjF3l9y609p4a6OmzpzbmTluYberI7+sEwlb4y6jhIAbBLJOwkdFbPCkQePo1e0JMI0vj478gxsNOlajojp2JwGmr8TVFXFZyUj1vPTljc235ClgyQY3VyO1hIAQOEYgKyV8+NZEdU0xgdRuzWTpdGA8H45ERo0fPXytpfEWBpnZU+/E9P3P7rv2qssHny4StgA9zSFqs9M87RfoUxcryAGa5qU5IYPhW/c5mz9TsifV1ZhNrLJWwkdFPJxAlndgZqCWmO8tixabvs9s9WS0KuKLBp6LSy++oMGyciVstRvG4y7oDLRpYhynE9GuKdCpmU6k9Zh3U757aT1vpo2sT+hvcWW09qyW8GERz6i5DCE8bfQMrgHIdSB6YG+bprFJw4YdMoKe7s8rq2uqARpjNs+g8/vja5cM+tIwkbBZkvrxImF9VkGKFAnb3K2KGTXdiPBPEJ2RTmpmVr88e2Bfu+Y1TsvYThGLhNPpeuqxImHn2HqZWSTsAP3p0x9vXh+ufRJEaW/WzoyNRHgwnoeYkx+Mr6yOqdeY1S8ZTR0XDRyASy++8PgYkbApfKaCRcKmcAUmWCTsUKsmTZoUatq+aw0BI+wowYDasWNOMhR6+K4fjVhpR85Tc9hxRSwSdqIzR3KKhJ1j62VmkbDD9NVrzkCoiggdbSrFDDxPyeT00mjxc0TENuU9nCZdEYuE7ezGyblEws6x9TKzSNgF+pNnzWqRE49UglBkc7kNDDwZAi3Ys2Xty3Ztq5SOiP+waZA8J2xzk4+lEwk7BNbjtCJhFxtQURW7lI68MtzT7rLqUUNiforDvOD01i0WDhs2LJFODasi3tmkP/6x58tPTaQzFxkrtyMy+RwQCXvQXdM7OZudI+MgCEuZeVkItISYlk4YO3KJ2TSVVTW/AdFos+M+TJ6L97nh54jN5pL4LwjIlXBmng0iYY/6evRRtp+DyLVNQdXnNMG0HMTLiXklQvQxHWy+vLR02MHGMFgV8UfJAXiPv3hqwiPMGVVWJJxR7Ty+GJGwx319qDrWN874JRGGeTiVDcy8ioADDBwA6CCIDx7+J1ALxkgitDE7PxGxWWKp45vmAjlhe3LmR4D8HHtyNZZlV6P/ane2btCyq9+076q1Z9ZZ/8ZcOhjVppscSkwG0TXp5PHb2I+S/fEeyz1iv/VF5pOZBETCNvS1cmbN+cx0FwHfBWDTdY8NE0sjxeLkZfiM03qBMI3qMlQIZA8BkbCNvZ4y/dEukUioDIzRIBTYmNr1VHGE8Uzi+6hHruu1paAQyCYCImEHuq2eMY7EI2OIeBxAnRwo4UrKlxNXYhMa/QKmK3OQIkIg0wmIhB3u8LTq2VcmwDcR4yYQ2jlcztb0bye/glV8lq05JZkQEAInExAJu3RGMDNVVs8eTISbgMN/urpU2nKZlxNXYZP/p2l5fTJQCPiBgEjYoy5UVD02iChxJRiXMmEwgVp4NJUGyx5CDp5LDEMdHN7KwU+LlrkIAQ8IiIQ9gN5QyWkzZg9MhnEpJ/lrRPx1gFp7ObW3kpdiNffxcgpSWwhkBQGRsE/bPH367HZ1IfQkQk8CejJxL/VP9Q0LZu5MRCGnpi7PCTtFVvIKgS8TEAkH9KyYMWNumwM53DLCiVaUpJYJRksCt0oSWoYYTZg4SqC2Zpcnb8yZJSbxQiA9AiLh9Pj5crTVr6nJFbAv2ymTynACIuEMa7AIOMMaKsvJeAIi4QxqsVUBy/eEM+gkkKUEjoBIOHAta3jCVgU86Pz+kJ01MuQkkGUEkoBIOJBtO3nS6Qj4a5cMguwxlwEngSwhsAREwoFt3ZGJpytglUMkHPCTQKYfaAIi4QC3zw4Bi4QDfALI1DOCgEg4oG20S8Bq+Q+9AvzvsoCCkGkLgYATuPdK4NozUy7iPgr4GjNu+nYKWMF5cTXwk2czDpMsSAgEgsBTtwOdmqec6gSRsI9aabeAjy1NSVjJWA4hIATcI6BxK0JN5nyRsHs9SVmpsjo2DcB4s9MpLCyc+aPht4xJNW5vHRB9Cvh4m9nsEi8EhIAVApf3BKYY7075GRF1FwlbIWzzmMrqWBTADLNpGbi/vKToZ8y8CMDlRuNr3gT+thzYtMcoUn4uBISAFQLq1sP3BgC3nKc1ei4R3SES1mLlXNCUWKxZpI7XmP28JTMml0eL7lYzY+YhAF7QnaW6Ml4pV8W6uCROCGgRGNhZK+zEoB5EtEYkbJqbvQMqq2u+C9B8M1lPFPCxcbpXw2bqSKwQEAKOEbiPiCap7CJhxxjrJa6ojt1DwK/0ooFjtyBOjWfm7gDUw2i+2sVDd10SJwSyiMA7AIYQ0S6RsA+6XlkVux2EuTpTaegK+MRxzKzuRC3VySUxQkAIeEJgN4Dz1G2IY9XlStiTPnxRdOrMuZ2Z4+uNp8EPlJUU32MUx8xDAcyRK2IjUvJzIeA6gc8ADCWik16fEgm73ocvF6yojt1JwPTGpmJ0BdzArQl1Rfw0gG4+WJ5MQQgIAeCkWxAnAhEJ++T0qKyK/RLEZQAVHp8SYw8DD5RHiyabnSYztzz63LF69ljuE5sFKPFCwB4C6up3EhGp/zpt8BAJ2wPatixTq2dfnuTkQEJocVl05GvpJj4qY3WLQv25Pt18Ml4ICAFDAuq+r/ov0UWp5Hssi0jYkGfmBRz9BZ66UpZDCAgB+wjsOvV+r07q/w8hwrnRP8IOcQAAAABJRU5ErkJggg=="}}]);
