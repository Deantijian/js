(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4796],{33771:()=>{"use strict"},50263:(me,ge,e)=>{"use strict";e.d(ge,{E3:()=>w,I6:()=>ae,Xl:()=>Ce});var he=e(70801),re=e(46593),k=e.n(re),A=e(42723),C=e(63239),t=e.n(C),E=e(99663),oe=e(22600),N=e(85315),c=e(88239),W=e(67294),u=e(91088),P=e(49365),n=e(96486),a=e.n(n),w={groupsLoading:!0,appsLoading:!0,keywords:"",groups:[],apps:[],externalApps:[],aloneApps:[],markedApps:[],markedGroup:[],recentApps:[],dashboardLoading:!0,platformSettingLoading:!0,recentAppItems:[]};function F(p,l){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(f){return f};return["apps","markedApps","externalApps","aloneApps","activeGroupApps","recentApps"].forEach(function(f){p[f]&&(p[f]=p[f].map(function(g){return g.id===l?i(g):g}))}),p}function le(p,l){return["apps","markedApps","externalApps","aloneApps","activeGroupApps","recentApps","recentAppItems"].forEach(function(i){p[i]&&(p[i]=p[i].filter(function(f){return f.id!==l}))}),["groups","markedGroup"].forEach(function(i){p[i]&&p[i].forEach(function(f){var g=a().includes(f.appIds,l);g&&(f.appIds=f.appIds.filter(function(b){return b!==l}),f.count=f.appIds.length)})}),p}function ie(p,l){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(f){return f};return["groups","markedGroup"].forEach(function(f){p[f]&&(p[f]=p[f].map(function(g){return g.id===l?i(g):g}))}),p}function ae(p){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(0,c.default)({},p),f=void 0;switch(l.type){case"UPDATE_SETTING":return(0,c.default)({},p,{origin:(0,c.default)({},p.origin,{homeSetting:l.value})});case"UPDATE_GROUPS_LOADING":return(0,c.default)({},p,{groupsLoading:l.value,appsLoading:l.value===!1?!1:p.appsLoading});case"UPDATE_APPS_LOADING":return(0,c.default)({},p,{appsLoading:l.value});case"UPDATE_DASHBOARD_LOADING":return(0,c.default)({},p,{dashboardLoading:l.value});case"UPDATE_KEYWORDS":return(0,c.default)({},p,{keywords:l.value});case"UPDATE_GROUP_APPS":return(0,c.default)({},p,{activeGroup:l.activeGroup,activeGroupApps:l.apps,apps:p.apps.length?p.apps.map(function(D){return(0,c.default)({},D,a().find(l.apps,{id:D.id})||{})}):l.apps});case"UPDATE_MARK_APPS":var g=l.addedData.map(function(D){return(0,c.default)({},a().find(p.apps,{id:D.appId})||{},{isMarked:D.isMark},a().pick(D,["type","itemId","itemName","itemUrl"]))}),b=p.markedApps.filter(function(D){return!a().find(l.delData,function(xe){return(xe.type||xe.appId===D.id)&&xe.itemId===D.itemId})}).concat(g),I=b.filter(function(D){return!D.type}).map(function(D){return D.id}),U=b.filter(function(D){return!!D.type}).map(function(D){return D.itemId});return(0,c.default)({},p,{markedApps:b,apps:p.apps.map(function(D){return(0,c.default)({},D,{isMarked:a().includes(I,D.id)})}),recentApps:p.recentApps.map(function(D){return(0,c.default)({},D,{isMarked:a().includes(I,D.id)})}),recentAppItems:p.recentAppItems.map(function(D){return(0,c.default)({},D,{isMarked:a().includes(U,D.itemId)})})});case"UPDATE_APP":return F((0,c.default)({},p),l.appId,function(D){return(0,c.default)({},D,l.value)});case"DELETE_APP":return le((0,c.default)({},p),l.appId);case"MARK_APP":var ce=function(){switch(l.groupType){case"external":return p.externalApps;case"personal":return p.aloneApps;default:return p.apps}},fe=l.isMark?p.markedApps.concat((0,c.default)({},a().find(ce(),{id:l.appId}),l.itemData,{isMarked:!0})):p.markedApps.filter(function(D){return l.itemData.type?D.itemId!==l.itemData.itemId:!!D.type||D.id!==l.appId}),He=fe.filter(function(D){return!D.type}).map(function(D){return D.id}),Ye=fe.filter(function(D){return!!D.type}).map(function(D){return D.itemId}),Xe=function(xe){return xe.map(function(te){return(0,c.default)({},te,{isMarked:a().includes(He,te.id)})})};return(0,c.default)({},p,{markedApps:fe,apps:Xe(p.apps),recentApps:Xe(p.recentApps),recentAppItems:p.recentAppItems.map(function(D){return(0,c.default)({},D,{isMarked:a().includes(Ye,D.itemId)})}),activeGroupApps:Xe(p.activeGroupApps||[]),externalApps:Xe(p.externalApps||[]),aloneApps:Xe(p.aloneApps||[])});case"COPY_APP":return f=a().find(p.apps,{id:l.appId}),f?(f=(0,c.default)({},f,{id:l.newAppId,name:_l("%0-\u590D\u5236",f.name),isNew:!0,isMarked:!1}),F((0,c.default)({},p,p.activeGroup&&l.groupId===p.activeGroup.id?{activeGroupApps:p.activeGroupApps.concat(f)}:{},{apps:p.apps.concat(f)}))):p;case"ADD_APP":return F((0,c.default)({},p,p.activeGroup&&l.groupId===p.activeGroup.id?{activeGroupApps:p.activeGroupApps.concat(l.app)}:{},{apps:p.apps.concat(l.app)}));case"UPDATE_GROUP_OF_APP":return i=F(i,l.appId,function(D){return(0,c.default)({},D,{groupIds:l.isRemove?a().uniq((D.groupIds||[]).filter(function(xe){return xe!==l.groupId})):a().uniq((D.groupIds||[]).concat(l.groupId))})}),i=ie(i,l.groupId,function(D){return(0,c.default)({},D,{appIds:l.isRemove?a().uniq((D.appIds||[]).filter(function(xe){return xe!==l.appId})):a().uniq((D.appIds||[]).concat(l.appId)),count:(D.count||0)+(l.isRemove?-1:1)})}),i;case"ADD_GROUP":return(0,c.default)({},p,{groups:p.groups.concat(l.value)});case"UPDATE_GROUP":return i=ie((0,c.default)({},p,p.activeGroup&&l.groupId===p.activeGroup.id?{activeGroup:(0,c.default)({},p.activeGroup,l.value)}:{}),l.groupId,function(D){return(0,c.default)({},D,l.value)}),i;case"MARK_GROUP":return ie((0,c.default)({},p,{markedGroup:a().uniqBy(l.isMarked?p.markedGroup.concat(a().find(p.groups,{id:l.groupId})).filter(a().identity):p.markedGroup.filter(function(D){return D.id!==l.groupId}),"id")}),l.groupId,function(D){return(0,c.default)({},D,{isMarked:l.isMarked})});case"DELETE_GROUP":return ie((0,c.default)({},p,{markedGroup:p.markedGroup.filter(function(D){return D.id!==l.groupId}),groups:p.groups.filter(function(D){return D.id!==l.groupId})}));case"UPDATE_VALUES":return(0,c.default)({},p,l.values);case"RESET_STATE":return l.value;default:return console.error("no action type!"),(0,c.default)({},p)}}function je(p,l,i){if(a().every(["markedApps","externalApps","aloneApps","markedGroupIds","apps","personalGroups","projectGroups","recentAppIds","recentAppItems","markedAppItems"].map(function(I){return a().isEmpty((l||{})[I])}))){p({type:"UPDATE_DASHBOARD_LOADING",value:!1}),p({type:"UPDATE_VALUES",values:{origin:l,keywords:"",apps:[],externalApps:[],aloneApps:[],markedApps:[],markedGroup:[],activeGroup:void 0,activeGroupApps:[],groups:[],noApps:!0,recentApps:[],recentAppItems:[],markedAppItems:[]}}),i||(p({type:"UPDATE_APPS_LOADING",value:!1}),p({type:"UPDATE_GROUPS_LOADING",value:!1}));return}var f=[].concat((0,N.Z)(l.projectGroups||[]),(0,N.Z)(l.personalGroups||[])),g=(l.markedGroupIds||[]).map(function(I){return a().find(f,{id:I})}).filter(a().identity);f=f.map(function(I){return(0,c.default)({},I,{isMarked:!!a().find(g,{id:I.id})})});var b=(l.recentAppIds||[]).map(function(I){return(l.apps||[]).filter(function(U){return U.id===I})[0]}).filter(function(I){return!!I});p({type:"UPDATE_VALUES",values:(0,c.default)({origin:l,apps:l.apps||[],externalApps:l.externalApps||[],aloneApps:l.aloneApps||[],markedGroup:g,groups:f,noApps:!1,recentApps:b},i?{markedApps:l.markedAppItems||[],recentAppItems:l.recentAppItems||[]}:{markedApps:l.markedApps||[],activeGroup:void 0,activeGroupApps:[]})}),p({type:"UPDATE_DASHBOARD_LOADING",value:!1})}var Ce=function(){function p(l){(0,E.default)(this,p),this.dispatch=l.dispatch,this.state=l.state,this.updateAppBelongGroups=this.updateAppBelongGroups.bind(this)}return(0,oe.default)(p,[{key:"updateKeywords",value:function(i){this.dispatch({type:"UPDATE_KEYWORDS",value:i})}},{key:"loadDashboardInfo",value:function(i){var f=this,g=i.projectId;this.dispatch({type:"UPDATE_DASHBOARD_LOADING",value:!0}),window.dashboardAjax&&window.dashboardAjax.abort(),window.dashboardAjax=u.Z.myPlatform({projectId:g,containsLinks:!0}),window.dashboardAjax.then(function(b){delete window.dashboardAjax,je(f.dispatch,b,!0)})}},{key:"loadAppAndGroups",value:function(i){var f=this,g=i.projectId,b=i.activeGroupType,I=i.activeGroupId,U=i.noGroupsLoading;I||localStorage.removeItem("latest_group_"+md.global.Account.accountId),U||this.dispatch({type:"UPDATE_GROUPS_LOADING",value:!0}),this.dispatch({type:"UPDATE_APPS_LOADING",value:!0}),this.dispatch({type:"UPDATE_DASHBOARD_LOADING",value:!0}),g==="external"&&(g=void 0),window.homeGetMyAppAjax&&window.homeGetMyAppAjax.abort(),window.homeGetMyAppAjax=u.Z.getMyApp({projectId:g,containsLinks:!0}),window.homeGetMyAppAjax.then(function(ce){delete window.homeGetMyAppAjax,je(f.dispatch,ce),f.dispatch({type:"UPDATE_GROUPS_LOADING",value:!1}),I?f.loadGroup({activeGroupId:I,activeGroupType:b,projectId:g}):(f.dispatch({type:"UPDATE_GROUP_APPS",apps:[],activeGroup:void 0}),f.dispatch({type:"UPDATE_APPS_LOADING",value:!1}))})}},{key:"loadGroup",value:function(i){var f=this,g=i.activeGroupId,b=i.activeGroupType,I=i.projectId;safeLocalStorageSetItem("latest_group_"+md.global.Account.accountId,t()({groupId:g,groupType:b,projectId:I})),this.dispatch({type:"UPDATE_APPS_LOADING",value:!0}),this.dispatch({type:"UPDATE_GROUP_APPS",apps:[],activeGroup:{}}),u.Z.getGroup({id:g,groupType:b,projectId:I}).then(function(U){f.dispatch({type:"UPDATE_GROUP_APPS",apps:U.apps,activeGroup:U}),f.dispatch({type:"UPDATE_APPS_LOADING",value:!1})})}},{key:"addGroup",value:function(i){var f=this,g=i.projectId,b=i.name,I=i.icon,U=i.groupType,ce=i.cb,fe=ce===void 0?function(){}:ce;u.Z.addGroup({projectId:g,name:b,icon:I,groupType:U}).then(function(He){var Ye=He.id,Xe=He.status;Xe===1?(fe(),f.dispatch({type:"ADD_GROUP",value:{id:Ye,projectId:g,name:b,icon:I,groupType:U}})):fe(Xe)}).catch(fe)}},{key:"editGroup",value:function(i){var f=this,g=i.id,b=i.projectId,I=i.name,U=i.icon,ce=i.groupType,fe=i.cb,He=fe===void 0?function(){}:fe;u.Z.editGroup({id:g,projectId:b,name:I,icon:U,groupType:ce}).then(function(Ye){He(Ye),Ye===1&&f.dispatch({type:"UPDATE_GROUP",groupId:g,value:{name:I,icon:U,iconUrl:md.global.FileStoreConfig.pubHost.replace(/\/$/,"")+"/customIcon/"+U+".svg",groupType:ce}})}).catch(He)}},{key:"deleteGroup",value:function(i){var f=this,g=i.id,b=i.projectId,I=i.groupType,U=i.cb,ce=U===void 0?function(){}:U;u.Z.deleteGroup({id:g,projectId:b,groupType:I}).then(function(){ce(),f.dispatch({type:"DELETE_GROUP",groupId:g})}).catch(ce)}},{key:"markGroup",value:function(i){var f=this,g=i.id,b=i.isMarked,I=i.groupType,U=i.projectId,ce=i.cb,fe=ce===void 0?function(){}:ce;u.Z.markedGroup({id:g,isMarked:b,groupType:I,projectId:U}).then(function(){fe(),f.dispatch({type:"MARK_GROUP",groupId:g,isMarked:b})}).catch(fe)}},{key:"updateAppBelongGroups",value:function(i){var f=this,g=i.appId,b=i.editingGroup,I=i.isRemove,U={appId:g};b.groupType===0?U.personalGroups=[b.id]:U.projectGroups=[b.id],(I?u.Z.removeToGroup:u.Z.addToGroup)(U).then(function(){f.dispatch({type:"UPDATE_GROUP_OF_APP",isRemove:I,appId:g,groupId:b.id})}).catch(function(){alert(_l("\u66F4\u65B0\u5206\u7EC4\u5931\u8D25"),2)})}},{key:"updateApp",value:function(i){var f=i.appId,g=(0,A.Z)(i,["appId"]);this.dispatch({type:"UPDATE_APP",appId:f,value:g})}},{key:"saveApp",value:function(i,f){var g=this;u.Z.editAppInfo(i).then(function(b){f&&(b.data&&g.updateApp(a().omit(i,"projectId")),b.data?alert(_l("\u8BBE\u7F6E\u94FE\u63A5\u6210\u529F")):alert(_l("\u8BBE\u7F6E\u94FE\u63A5\u5931\u8D25!"),2))}).catch(function(){alert(f?_l("\u8BBE\u7F6E\u94FE\u63A5\u5931\u8D25\uFF01"):_l("\u66F4\u65B0\u5E94\u7528\u5931\u8D25\uFF01"),2)})}},{key:"deleteApp",value:function(i){var f=this,g=a().cloneDeep(this.state);this.dispatch({type:"DELETE_APP",appId:i.appId}),u.Z.deleteApp((0,c.default)({},i,{isHomePage:!0})).then(function(b){if(!b.data)return k().reject()}).catch(function(){f.dispatch({type:"RESET_STATE",value:g}),alert(_l("\u5220\u9664\u5E94\u7528\u5931\u8D25\uFF01"),2)})}},{key:"quitApp",value:function(i){var f=this;P.Z.quitRole(i).then(function(g){g.isRoleForUser?g.isRoleDepartment?f.dispatch({type:"DELETE_APP",appId:i.appId}):he.Z.confirm({title:W.createElement("span",{style:{color:"#f44336"}},_l("\u65E0\u6CD5\u9000\u51FA\u901A\u8FC7\u90E8\u95E8\u52A0\u5165\u7684\u5E94\u7528")),description:_l("\u60A8\u6240\u5728\u7684\u90E8\u95E8\u88AB\u52A0\u5165\u4E86\u6B64\u5E94\u7528\uFF0C\u53EA\u80FD\u7531\u5E94\u7528\u7BA1\u7406\u5458\u8FDB\u884C\u64CD\u4F5C"),closable:!1,removeCancelBtn:!0,okText:_l("\u5173\u95ED")}):alert(_l("\u9000\u51FA\u5931\u8D25"),2)})}},{key:"markApp",value:function(i){var f=this;u.Z.markApp(a().omit(i,["itemName","itemUrl","groupType"])).then(function(){f.dispatch({type:"MARK_APP",appId:i.appId,isMark:i.isMark,groupType:i.groupType,itemData:(0,c.default)({},a().pick(i,["type","itemId","itemName","itemUrl"]))}),alert(i.isMark?_l("\u6536\u85CF\u6210\u529F"):_l("\u5DF2\u53D6\u6D88\u6536\u85CF"))}).catch(function(){alert(i.isMark?_l("\u6536\u85CF\u5931\u8D25\uFF01"):_l("\u53D6\u6D88\u6536\u85CF\u5931\u8D25\uFF01"),2)})}},{key:"markApps",value:function(i){var f=this;u.Z.markApps({projectId:i.projectId,items:i.items.map(function(g){return a().omit(g,"itemName","itemUrl")})}).then(function(){f.dispatch({type:"UPDATE_MARK_APPS",addedData:i.items.filter(function(g){return g.isMark}),delData:i.items.filter(function(g){return!g.isMark})}),alert(_l("\u8BBE\u7F6E\u6210\u529F"))}).catch(function(){alert(_l("\u8BBE\u7F6E\u5931\u8D25\uFF01"),2)})}},{key:"copyApp",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=i.id,g=i.groupId,b=arguments[1];this.dispatch({type:"COPY_APP",appId:f,newAppId:b,groupId:g})}},{key:"createAppFromEmpty",value:function(i){var f=this,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a().noop;u.Z.createApp(i).then(function(b){switch(b.state){case 1:var I=b.data||{};f.dispatch({type:"ADD_APP",app:I,groupId:i.groupId}),f.dispatch({type:"UPDATE_GROUP_OF_APP",appId:I.id,groupId:i.groupId}),g(I.id);break;case 3:alert(_l("\u76EE\u6807\u5206\u7EC4\u4E0D\u5B58\u5728\uFF01"),2);break;case 4:alert(_l("\u6CA1\u6709\u521B\u5EFA\u6743\u9650\uFF01"),2);break;default:alert(_l("\u65B0\u5EFA\u5E94\u7528\u5931\u8D25\uFF01"),2);break}}).catch(function(b){!md.global.Config.IsLocal&&alert(_l("\u65B0\u5EFA\u5E94\u7528\u5931\u8D25\uFF01"),2)})}},{key:"updateAppSort",value:function(i){var f=this,g=i.sortType,b=i.appIds,I=i.projectId,U=i.groupId,ce=a().get(this.state,"origin.homeSetting.markedAppDisplay");!a().isUndefined(ce)&&g===1&&(ce===1?I=void 0:ce===0&&(g=7)),u.Z.updateAppSort({sortType:g,appIds:b,projectId:I,groupId:U}).then(function(fe){if(fe.data){if(g===6){var He=f.state.groups.map(function(Ye){return Ye.id===U?(0,c.default)({},Ye,{appIds:b}):Ye});f.dispatch({type:"UPDATE_GROUPS",value:He})}}else return k().reject()}).catch(function(){alert(_l("\u66F4\u65B0\u5E94\u7528\u6392\u5E8F\u5931\u8D25\uFF01"),2)})}},{key:"editHomeSetting",value:function(i){var f=this,g=i.projectId,b=i.setting,I=b===void 0?{}:b,U=i.editingKey,ce=a().get(this.state,"origin.homeSetting");this.dispatch({type:"UPDATE_SETTING",value:I}),u.Z.editHomeSetting((0,c.default)({projectId:g},I)).then(function(fe){if(fe)U==="markedAppDisplay"&&f.loadDashboardInfo({projectId:g});else return k().reject()}).catch(function(){f.dispatch({type:"UPDATE_SETTING",value:ce}),alert(_l("\u66F4\u65B0\u9996\u9875\u914D\u7F6E\u5931\u8D25\uFF01"),2)})}},{key:"updateGroupSorts",value:function(i,f){this.dispatch({type:"UPDATE_VALUES",values:f==="star"?{markedGroup:i}:{groups:this.state.groups.filter(function(g){return g.groupType===0}).concat(i)}})}}]),p}();window.time=new Date().getTime()},7472:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>se});var he=e(63239),re=e.n(he),k=e(85315),A=e(42723),C=e(88106),t=e(12424),E=e(88239),oe=e(97373),N=e(94055),c=e(6100),W=e(33867),u=e(25273),P=e(86735),n=e(67294),a=e(45697),w=e(5017),F=e(93967),le=e.n(F),ie=e(31261),ae=e(42541),je=e(86853),Ce=e(56171),p=e(94942),l=e.n(p),i=e(36803),f=e(70801),g=e(85105),b=e.n(g),I=e(99663),U=e(22600),ce=e(49135),fe=e(93196),He=e(26819),Ye=e(45743),Xe=e(36021),D=e(92138),xe=e(15577),te=e(77863),M=e(96486),o=e.n(M),B=e(20845),Qe=e(26581),Fe=e(3540),Te=e(12692),Cn=e(93002),sn=[{title:_l("\u5F53\u524D\u7528\u6237\u4FE1\u606F"),type:"user",fields:[{text:_l("\u7528\u6237ID"),value:"userId"},{text:_l("\u624B\u673A\u53F7"),value:"phone"},{text:_l("\u90AE\u7BB1"),value:"email"}]},{title:_l("\u7CFB\u7EDF\u4FE1\u606F"),type:"sys",fields:[{text:_l("\u7EC4\u7EC7\u95E8\u724C\u53F7"),value:"projectId"},{text:_l("\u5E94\u7528ID"),value:"appId"},{text:_l("UserAgent"),value:"ua"},{text:_l("\u65F6\u95F4\u6233"),value:"timestamp"}]}],un=[{key:"pcDisplay",text:_l("PC\u7AEF")},{key:"webMobileDisplay",text:_l("Web\u79FB\u52A8\u7AEF")},{key:"appDisplay",text:_l("APP")}],mn=e(30604),Mn=(0,P.Z)([`
  margin-top: 8px;
  .publishTip {
    margin-left: 68px;
    color: #9e9e9e;
  }
`],[`
  margin-top: 8px;
  .publishTip {
    margin-left: 68px;
    color: #9e9e9e;
  }
`]),En=(0,P.Z)([`
  display: flex;
  position: relative;
  .labelText {
    width: 52px;
    line-height: 36px;
    margin-right: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ming.Input {
    font-size: 13px;
  }
  .requiredStar {
    position: absolute;
    left: -8px;
    top: 10px;
    color: #f00;
    font-weight: bold;
  }
`],[`
  display: flex;
  position: relative;
  .labelText {
    width: 52px;
    line-height: 36px;
    margin-right: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ming.Input {
    font-size: 13px;
  }
  .requiredStar {
    position: absolute;
    left: -8px;
    top: 10px;
    color: #f00;
    font-weight: bold;
  }
`]),ke=(0,P.Z)([`
  &.tagInputarea {
    .tagInputareaIuput {
      border-radius: 3px 0 0 3px;
      height: 120px;
      .CodeMirror {
        .CodeMirror-lines {
          padding: 3px 0;
        }
        .CodeMirror-sizer {
          min-height: auto !important;
        }
        .CodeMirror-placeholder {
          color: #bdbdbd !important;
          margin-left: 8px !important;
          line-height: 27px !important;
        }
        .CodeMirror-code {
          line-height: 28px;
        }
        .CodeMirror-scroll {
          min-height: 118px;
        }
      }
    }
  }
`],[`
  &.tagInputarea {
    .tagInputareaIuput {
      border-radius: 3px 0 0 3px;
      height: 120px;
      .CodeMirror {
        .CodeMirror-lines {
          padding: 3px 0;
        }
        .CodeMirror-sizer {
          min-height: auto !important;
        }
        .CodeMirror-placeholder {
          color: #bdbdbd !important;
          margin-left: 8px !important;
          line-height: 27px !important;
        }
        .CodeMirror-code {
          line-height: 28px;
        }
        .CodeMirror-scroll {
          min-height: 118px;
        }
      }
    }
  }
`]),Je=(0,P.Z)([`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  i {
    font-size: 22px;
    color: #9e9e9e;
  }
  &:hover {
    i {
      color: #2196f3;
    }
  }
`],[`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  i {
    font-size: 22px;
    color: #9e9e9e;
  }
  &:hover {
    i {
      color: #2196f3;
    }
  }
`]),an=(0,P.Z)([`
  width: 320px;
  padding: 6px 0;
  background: #fff;
  overflow: auto;
  border-radius: 3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  font-size: 14px;
  div {
    line-height: 36px;
    padding: 0 16px;
  }
  .title {
    font-weight: bold;
  }
  .itemText {
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #2196f3;
    }
  }
  .divider {
    border-top: 1px solid #ddd;
    margin: 6px 0;
  }
`],[`
  width: 320px;
  padding: 6px 0;
  background: #fff;
  overflow: auto;
  border-radius: 3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  font-size: 14px;
  div {
    line-height: 36px;
    padding: 0 16px;
  }
  .title {
    font-weight: bold;
  }
  .itemText {
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #2196f3;
    }
  }
  .divider {
    border-top: 1px solid #ddd;
    margin: 6px 0;
  }
`]),ye=(0,P.Z)([`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #d8eeff;
  color: #174c76;
  border: 1px solid #bbd6ea;
  padding: 0 12px;
  font-size: 12px;
  box-sizing: border-box;
  height: 24px;
  max-width: 100%;
`],[`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #d8eeff;
  color: #174c76;
  border: 1px solid #bbd6ea;
  padding: 0 12px;
  font-size: 12px;
  box-sizing: border-box;
  height: 24px;
  max-width: 100%;
`]),Ue=w.ZP.div(Mn),Me=w.ZP.div(En),Re=(0,w.ZP)(Te.Z)(ke),Ae=w.ZP.div(Je),ze=w.ZP.div(an),De=w.ZP.div(ye);function Be(r){var d=r.isEdit,y=r.onCancel,s=r.projectId,m=r.createAppFromEmpty,h=r.record,q=r.onAppChange,H=(0,n.useState)(!1),j=(0,t.Z)(H,2),z=j[0],R=j[1],S=(0,Cn.Z)(d?_.omit(h,["id"]):{pcDisplay:!1,webMobileDisplay:!0,appDisplay:!0}),G=(0,t.Z)(S,2),v=G[0],Y=G[1],ee=(0,n.useRef)(),ne=(0,n.useRef)();(0,n.useEffect)(function(){h&&h.urlTemplate&&ee.current.setValue(h.urlTemplate),ne&&ne.current&&ne.current.focus()},[]);var Pe=function(){if(!v.name){alert(_l("\u9875\u9762\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),3);return}if(!v.urlTemplate){alert(_l("\u94FE\u63A5\u4E0D\u80FD\u4E3A\u7A7A"),3);return}if(d)q((0,E.default)({projectId:s,appId:h.id},v),!0);else{var V=(0,xe.LK)(s),Ne=V[_.random(0,V.length-1)],Ke=(0,D.generate)(Ne)[0];m((0,E.default)({projectId:s,icon:"0_lego",iconColor:Ne,navColor:Ne,lightColor:Ke,createType:1},v))}y()};return n.createElement(f.Z,{visible:!0,title:d?_l("\u8BBE\u7F6E\u5916\u90E8\u94FE\u63A5"):_l("\u6DFB\u52A0\u5916\u90E8\u94FE\u63A5"),okText:_l("\u4FDD\u5B58"),width:640,onOk:Pe,onCancel:y},n.createElement(Ue,null,n.createElement(Me,{className:"mBottom24"},n.createElement("span",{className:"requiredStar"},"*"),n.createElement("span",{className:"labelText"},_l("\u5E94\u7528\u540D\u79F0")),n.createElement(Fe.Z,{manualRef:ne,className:"flex",placeholder:_l("\u8BF7\u8F93\u5165"),value:v.name,onChange:function(V){return Y({name:V})}})),n.createElement(Me,{className:"mBottom24"},n.createElement("span",{className:"requiredStar"},"*"),n.createElement("span",{className:"labelText"},_l("\u94FE\u63A5")),n.createElement(Re,{className:"flex",placeholder:_l("\u8F93\u5165\u5B8C\u6574\u94FE\u63A5\uFF0C\u4EE5http://\u6216https://\u5F00\u5934"),renderTag:function(V){var Ne=_.get(_.find(mn.sm.concat(mn.ei),function(Ke){return Ke.id===V}),"text");return n.createElement(De,{className:"overflow_ellipsis"},Ne)},ref:ee,onChange:function(V,Ne){return Y({urlTemplate:Ne.trim()})}}),n.createElement(ie.Z,{action:["click"],popupVisible:z,onPopupVisibleChange:function(V){return R(V)},popupAlign:{points:["tr","br"],offset:[0,5],overflow:{adjustX:!0,adjustY:!0}},popup:n.createElement(ze,null,sn.map(function(X,V){var Ne=X.type,Ke=X.title,pn=X.fields;return n.createElement(n.Fragment,{key:Ne},n.createElement("div",{className:"title"},Ke),pn.map(function(xn){var bn=xn.text,Bn=xn.value;return n.createElement("div",{key:Bn,className:"itemText",onClick:function(){return ee&&ee.current.insertColumnTag(Bn)}},bn)}),V===0&&n.createElement("div",{className:"divider"}))}))},n.createElement(Qe.Z,{text:_l("\u4F7F\u7528\u52A8\u6001\u53C2\u6570"),popupPlacement:"bottom"},n.createElement(Ae,null,n.createElement(W.Z,{icon:"workflow_other"}))))),n.createElement(Me,null,n.createElement("span",{className:"labelText"},_l("\u53D1\u5E03\u5230")),n.createElement("div",{className:"flexRow alignItemsCenter"},un.map(function(X,V){return n.createElement(B.Z,{key:V,className:"pRight24",checked:!v[X.key],onClick:function(){return Y((0,C.default)({},X.key,!v[X.key]))},text:X.text})}))),n.createElement("div",{className:"publishTip"},_l("\u8BBE\u7F6E\u7528\u6237\u5728\u54EA\u4E9B\u8BBE\u5907\u73AF\u5883\u4E0B\u53EF\u89C1\u6B64\u5E94\u7528\uFF0C\u7BA1\u7406\u5458\u5728PC\u7AEF\u59CB\u7EC8\u53EF\u89C1"))))}var Oe=e(91088),yn=e(31628),Ve,ue,J=[{id:"createFromEmpty",icon:"plus",text:_l("\u4ECE\u7A7A\u767D\u521B\u5EFA%01003"),href:"/app/lib"},{id:"installFromLib",icon:"sidebar_application_library",text:_l("\u4ECE\u5E94\u7528\u5E93\u4E2D\u5B89\u88C5%01004"),href:"/app/lib"},{id:"importExcelCreateApp",icon:"new_excel",text:_l("\u4ECEExcel\u521B\u5EFA%01005"),href:"#"},{id:"installLoacal",icon:"file_upload",text:_l("\u5BFC\u5165%01006"),featureId:te.UU.appImportExport,href:"#"}],Z=(ue=Ve=function(r){(0,fe.default)(d,r);function d(){var y,s=this,m,h,q;(0,I.default)(this,d);for(var H=arguments.length,j=Array(H),z=0;z<H;z++)j[z]=arguments[z];return q=(m=(h=(0,ce.default)(this,(y=d.__proto__||b()(d)).call.apply(y,[this].concat(j))),h),h.state={addTypeVisible:!1,externalLinkDialogVisible:!1},h.handleClick=function(R){var S=R.id,G=R.href,v=R.dbInstanceId,Y=h.props,ee=Y.projectId,ne=Y.type,Pe=h.props.groupId;switch(S){case"installFromLib":Pe?(0,Xe.T8)(G+"?projectId="+ee+"&groupId="+Pe):(0,Xe.T8)(G+"?projectId="+ee);break;case"createFromEmpty":var X=(0,xe.LK)(ee),V=X[o().random(0,X.length-1)];h.setState({addTypeVisible:!1});var Ne=(0,D.generate)(V)[0];h.props.createAppFromEmpty({projectId:ee,name:_l("\u672A\u547D\u540D\u5E94\u7528"),icon:"0_lego",iconColor:V,navColor:V,lightColor:Ne,permissionType:200,dbInstanceId:v});break;case"buildService":window.open(G);break;case"installLoacal":h.setState({importAppDialog:!0});default:break}},h.renderImportApp=function(){var R=h.props,S=R.projectId,G=R.groupId,v=R.groupType,Y=h.state.importAppDialog;return n.createElement(f.Z,{title:_l("\u5BFC\u5165\u5E94\u7528"),visible:Y,footer:null,width:640,overlayClosable:!1,onCancel:function(){return h.setState({importAppDialog:!1})}},n.createElement(Ye.Z,{closeDialog:function(ne){h.setState({importAppDialog:!1,importAppParams:ne});var Pe=(0,xe.vo)(S),X=(0,xe.XH)(S,te.UU.dataBase)==="1"&&!md.global.Config.IsPlatformLocal;if(X&&(Pe.isSuperAdmin||Pe.isProjectAppManager))return h.getMyDbInstances({},"importApp")},projectId:S,groupId:G,groupType:v}))},h.handleSelectedDB=function(R){var S=h.state,G=S.openDBInstanceFrom,v=S.importAppParams,Y=J[0],ee=Y.id,ne=Y.href;h.setState({DBInstancesDialog:!1,openDBInstanceFrom:void 0}),G==="createFromEmpty"?h.handleClick({id:ee,href:ne,dbInstanceId:R}):G==="importApp"&&$.ajax({type:"POST",url:md.global.Config.AppFileServer+"AppFile/Import",data:re()((0,E.default)({},v,{dbInstanceId:R})),dataType:"JSON",contentType:"application/json"})},h.renderDBInstances=function(){var R=h.state,S=R.DBInstancesDialog,G=R.DBInstances,v=G===void 0?[]:G,Y=[{value:"",label:_l("\u7CFB\u7EDF\u9ED8\u8BA4\u6570\u636E\u5E93")}].concat(v.map(function(ee){return{value:ee.id,label:ee.name}}));return n.createElement(yn.Z,{visible:S,options:Y,onOk:h.handleSelectedDB,onCancel:function(){return h.setState({DBInstancesDialog:!1,openDBInstanceFrom:void 0})}})},h.handleAddAppItemClick=function(R){R.stopPropagation(),h.setState({addTypeVisible:!0})},h.getMyDbInstances=function(){var R=(0,i.Z)(l().mark(function S(G,v){var Y=G.id,ee=G.href,ne;return l().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,Oe.Z.getMyDbInstances({projectId:h.props.projectId});case 2:if(ne=X.sent,!(ne&&ne.length)){X.next=9;break}if(h.setState({DBInstances:ne,DBInstancesDialog:!0,openDBInstanceFrom:v}),v!=="importApp"){X.next=7;break}return X.abrupt("return",!0);case 7:X.next=10;break;case 9:v==="createFromEmpty"&&h.handleClick({id:Y,href:ee});case 10:case"end":return X.stop()}},S,s)}));return function(S,G){return R.apply(this,arguments)}}(),m),(0,ce.default)(h,q)}return(0,U.default)(d,[{key:"render",value:function(){var s=this,m=this.props,h=m.groupId,q=m.projectId,H=m.groupType,j=m.children,z=m.className,R=z===void 0?"":z,S=m.createAppFromEmpty,G=this.state,v=G.addTypeVisible,Y=G.dialogImportExcel,ee=G.externalLinkDialogVisible;return n.createElement("div",{className:"addAppItemWrap "+R},j?n.createElement("div",{onClick:this.handleAddAppItemClick},j):n.createElement(n.Fragment,null,n.createElement("div",{className:"addAppItem",onClick:this.handleAddAppItemClick}),n.createElement("div",{className:"info"},_l("\u65B0\u5EFA\u5E94\u7528"))),v&&n.createElement(je.Z,{className:"addAppItemMenu",onClickAwayExceptions:[".addAppItem"],onClickAway:function(){s.setState({addTypeVisible:!1})}},J.filter(function(ne){return!(ne.id==="installFromLib"&&md.global.SysSettings.hideTemplateLibrary)}).map(function(ne){var Pe=ne.id,X=ne.icon,V=ne.text,Ne=ne.href,Ke=ne.featureId,pn=(0,xe.XH)(q,te.UU.appImportExport);if(!(Ke&&!pn))return n.createElement(Ce.Z,{key:Pe,icon:n.createElement(W.Z,{icon:X,className:"addItemIcon Font18"}),onClick:function(){if(pn===2){(0,xe.j0)(q,te.UU.appImportExport);return}if(Pe==="createFromEmpty"){var bn=(0,xe.vo)(q),Bn=(0,xe.XH)(q,te.UU.dataBase)==="1"&&!md.global.Config.IsPlatformLocal;if(Bn&&(bn.isSuperAdmin||bn.isProjectAppManager)){s.getMyDbInstances({id:Pe,href:Ne},"createFromEmpty");return}}Pe==="importExcelCreateApp"&&s.setState({dialogImportExcel:!0}),s.handleClick({id:Pe,href:Ne})}},V)}),n.createElement("hr",{className:"divider"}),n.createElement(Ce.Z,{key:"externalLink",icon:n.createElement(W.Z,{icon:"add_link",className:"addItemIcon Font18"}),onClick:function(){return s.setState({externalLinkDialogVisible:!0})}},_l("\u6DFB\u52A0\u5916\u90E8\u94FE\u63A5"))),Y&&n.createElement(He.Z,{projectId:q,appGroupType:H,appGroupId:h,onCancel:function(){return s.setState({dialogImportExcel:!1})},createType:"app"}),this.renderImportApp(),this.renderDBInstances(),ee&&n.createElement(Be,{projectId:q,createAppFromEmpty:S,onCancel:function(){return s.setState({externalLinkDialogVisible:!1})}}))}}]),d}(n.Component),Ve.propTypes={createAppFromEmpty:a.func,projectId:a.string,type:a.string,DBInstances:[]},Ve.defaultProps={createAppFromEmpty:o().noop},ue),Ze=e(94158),qe=e(12935),Dn=e(24043),Gn=e.n(Dn),Yn=(0,P.Z)([`
  flex: 1;
  padding: 18px 80px;
  &.isIndexPage {
    padding: 14px 80px;
  }
  .title {
    width: 220px;
    height: 32px;
    border-radius: 16px;
  }
  .app {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
  }
  .appList {
    margin: 0 -30px;
    display: flex;
    flex-wrap: wrap;
  }
  .wrap {
    max-width: 900px;
  }

  .appSkeletonWrap {
    width: 150px;
    flex-shrink: 0;
    margin-top: 40px;
  }
  .name {
    width: 96px;
    margin: 0 auto;
    margin-top: 12px;
    height: 16px;
    border-radius: 8px;
    &.subName {
      width: 56px;
      margin-top: 6px;
    }
  }

  .skeletonItem {
    background-color: #f7f7f7;
  }
`],[`
  flex: 1;
  padding: 18px 80px;
  &.isIndexPage {
    padding: 14px 80px;
  }
  .title {
    width: 220px;
    height: 32px;
    border-radius: 16px;
  }
  .app {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
  }
  .appList {
    margin: 0 -30px;
    display: flex;
    flex-wrap: wrap;
  }
  .wrap {
    max-width: 900px;
  }

  .appSkeletonWrap {
    width: 150px;
    flex-shrink: 0;
    margin-top: 40px;
  }
  .name {
    width: 96px;
    margin: 0 auto;
    margin-top: 12px;
    height: 16px;
    border-radius: 8px;
    &.subName {
      width: 56px;
      margin-top: 6px;
    }
  }

  .skeletonItem {
    background-color: #f7f7f7;
  }
`]),_n=w.ZP.div(Yn);function Nn(r){var d=r.isIndexPage;return n.createElement(_n,{className:le()({isIndexPage:d})},n.createElement("div",{className:"wrap"},n.createElement("div",{className:"appList"},Gn()({length:8}).map(function(y,s){return n.createElement("div",{key:s,className:"appSkeletonWrap"},n.createElement("div",{className:"app skeletonItem"}),n.createElement("div",{className:"name skeletonItem"}),n.createElement("div",{className:"name subName skeletonItem"}))}))))}var Ln=e(95742),at=e(56002),qn=e(15405),rt=(0,P.Z)([`
  .Item-content {
    overflow: visible !important;
  }
`],[`
  .Item-content {
    overflow: visible !important;
  }
`]),ot=(0,P.Z)([`
  width: 240px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
  padding-top: 2px;
  .title {
    font-weight: bold;
    margin: 14px 0 4px 20px;
  }
  .groups {
    overflow-y: auto;
    max-height: 400px;
    padding-bottom: 10px;
  }
`],[`
  width: 240px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
  padding-top: 2px;
  .title {
    font-weight: bold;
    margin: 14px 0 4px 20px;
  }
  .groups {
    overflow-y: auto;
    max-height: 400px;
    padding-bottom: 10px;
  }
`]),$n=(0,P.Z)([`
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid #eaeaea;
  input {
    border: none;
    margin-left: 6px;
    flex: 1;
  }
`],[`
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid #eaeaea;
  input {
    border: none;
    margin-left: 6px;
    flex: 1;
  }
`]),In=(0,P.Z)([`
  cursor: pointer;
  padding: 0 20px;
  height: 36px;
  &:hover {
    background: #fafafa;
  }
`],[`
  cursor: pointer;
  padding: 0 20px;
  height: 36px;
  &:hover {
    background: #fafafa;
  }
`]),Le=(0,P.Z)([`
  flex-direction: column;
  height: 140px;
  margin-bottom: -10px;
`],[`
  flex-direction: column;
  height: 140px;
  margin-bottom: -10px;
`]),dn=(0,w.ZP)(Ce.Z)(rt),rn=w.ZP.div(ot),Wn=(0,w.ZP)(ae.EK)($n),Vn=(0,w.ZP)(ae.EK)(In),Hn=(0,w.ZP)(ae.Lb)(Le);function ct(r){var d=r.isEmpty,y=r.isAdmin,s=r.personalGroups,m=s===void 0?[]:s,h=r.projectGroups,q=h===void 0?[]:h,H=r.selectedGroupIds,j=H===void 0?[]:H,z=r.onUpdateAppBelongGroups,R=r.isDashboard,S=(0,n.useState)(j),G=(0,t.Z)(S,2),v=G[0],Y=G[1],ee=(0,n.useState)(),ne=(0,t.Z)(ee,2),Pe=ne[0],X=ne[1],V=m.filter(function(pn){return!Pe||new RegExp(Pe.toLowerCase()).test((pn.name||"").toLowerCase())}),Ne=q.filter(function(pn){return!Pe||new RegExp(Pe.toLowerCase()).test((pn.name||"").toLowerCase())});function Ke(pn,xn){var bn=o().includes(v,pn.id);return n.createElement(Vn,{key:xn,onClick:function(){z({editingGroup:pn,isRemove:bn}),Y(function(Tn){return bn?Tn.filter(function(Zn){return Zn!==pn.id}):o().uniq([].concat((0,k.Z)(Tn),[pn.id]))})}},n.createElement(B.Z,{checked:bn}),n.createElement("span",{className:"mLeft2 ellipsis flex",title:pn.name},pn.name))}return d?n.createElement(rn,null,n.createElement(Hn,null,n.createElement("i",{className:"icon icon-folder_off Font26 Gray_9e"}),n.createElement("div",{className:"Font13 Gray_9e mTop12"},R?_l("\u65E0\u5206\u7EC4"):_l("\u65E0\u5206\u7EC4\uFF0C\u53EF\u4ECE\u5DE6\u4FA7\u5217\u8868\u521B\u5EFA")))):n.createElement(rn,null,n.createElement(Wn,{className:"search"},n.createElement("i",{className:"icon icon-search Font18 Gray_9d"}),n.createElement("input",{type:"text",placeholder:"\u641C\u7D22\u5206\u7EC4",value:Pe,onChange:function(xn){return X(xn.target.value)}})),n.createElement("div",{className:"groups"},!!V.length&&n.createElement(n.Fragment,null,n.createElement("div",{className:"title"},_l("\u4E2A\u4EBA")),V.map(Ke)),y&&!!Ne.length&&n.createElement(n.Fragment,null,n.createElement("div",{className:"title"},_l("\u7EC4\u7EC7")),Ne.map(Ke)),!V.length&&!Ne.length&&n.createElement("div",{className:"Font13 Gray_bd TxtCenter mTop20 mBottom10"},_l("\u6CA1\u6709\u641C\u7D22\u7ED3\u679C"))))}function ut(r){var d=r.isAdmin,y=r.groups,s=y===void 0?[]:y,m=(0,n.useRef)(),h=s.filter(function(j){return j.groupType===0}),q=s.filter(function(j){return j.groupType===1}),H=!h.length&&(!q.length||!d);return n.createElement(ie.Z,{action:["hover"],popupAlign:{points:["tl","tr"],offset:[2,H?0:-78],overflow:{adjustX:!0,adjustY:!0}},popup:n.createElement(ct,(0,E.default)({},r,{isEmpty:H,personalGroups:h,projectGroups:q})),getPopupContainer:function(){return m.current},destroyPopupOnHide:!0},n.createElement("div",{ref:m},n.createElement(dn,{icon:n.createElement(W.Z,{className:"operationIcon",icon:"addto-folder"})},_l("\u8BBE\u7F6E\u5206\u7EC4%01010"),n.createElement("i",{className:"icon icon-arrow-right-tip Right mTop11"}))))}var it=e(7145),mt=e.n(it),lt=e(15742),pt=(0,P.Z)([`
  border-top: 1px solid #ddd;
  margin: 5px 0;
`],[`
  border-top: 1px solid #ddd;
  margin: 5px 0;
`]),st={0:[{type:"setGroup"}],1:[{type:"edit",icon:"edit",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%01007")},{type:"setGroup"}],2:[{type:"edit",icon:"edit",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%01007")},{type:"setGroup"}],3:[{type:"edit",icon:"edit",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%01007")},{type:"setGroup"}],200:[{type:"edit",icon:"edit",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%01007")},{type:"copy",icon:"content-copy",text:_l("\u590D\u5236\u5E94\u7528%01008")},{type:"setGroup"},{type:"del",icon:"delete2",text:_l("\u5220\u9664\u5E94\u7528%01009"),className:"delApp"}],100:[{type:"edit",icon:"edit",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%01007")},{type:"copy",icon:"content-copy",text:_l("\u590D\u5236\u5E94\u7528%01008")},{type:"setGroup"}],300:[{type:"edit",icon:"edit",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%01007")},{type:"copy",icon:"content-copy",text:_l("\u590D\u5236\u5E94\u7528%01008")},{type:"setGroup"}]},Pt=[{type:"setGroup"}],ft=[{type:"setExternalLink",icon:"settings",text:_l("\u8BBE\u7F6E\u5916\u90E8\u94FE\u63A5")},{type:"manageUser",icon:"group",text:_l("\u7BA1\u7406\u7528\u6237")},{type:"del",icon:"delete2",text:_l("\u5220\u9664"),className:"delApp"}],Tt=w.ZP.div(pt);const gt=function(r){var d=r.groupType,y=r.projectId,s=r.disabledCopy,m=r.onClick,h=r.role,q=r.onClickAway,H=r.onUpdateAppBelongGroups,j=r.isLock,z=r.createType,R=r.isDashboard,S=(0,A.Z)(r,["groupType","projectId","disabledCopy","onClick","role","onClickAway","onUpdateAppBelongGroups","isLock","createType","isDashboard"]),G=[].concat((0,k.Z)(st[h]||Pt));return G.length?(s&&(G=mt()(G,{$splice:[[1,1]]})),(o().find(md.global.Account.projects,function(v){return v.projectId===y})||{}).cannotCreateApp&&o().remove(G,function(v){return v.type==="copy"}),o().includes(["external","star","personal"],d)&&o().remove(G,function(v){return v.type==="setGroup"}),(j||z===1)&&(G=o().filter(G,function(v){return o().includes(["setGroup","edit"],v.type)})),R&&(G=o().filter(G,function(v){return v.type!=="setGroup"})),n.createElement(je.Z,{className:"Relative",onClickAway:q},G.map(function(v){var Y=v.type,ee=v.icon,ne=v.text,Pe=(0,A.Z)(v,["type","icon","text"]);return Y==="setGroup"?n.createElement(ut,(0,E.default)({},S,{onUpdateAppBelongGroups:H,icon:"___"})):n.createElement(Ce.Z,(0,E.default)({key:Y,icon:n.createElement(W.Z,{className:"operationIcon",icon:ee}),onClick:function(V){V.stopPropagation(),m(Y)}},Pe),ne)}),z===1&&h>=lt.lt.ADMIN_ROLE&&n.createElement(n.Fragment,null,n.createElement(Tt,null),ft.filter(function(v){return h<lt.lt.POSSESS_ROLE?v.type!=="del":!0}).map(function(v){var Y=v.type,ee=v.icon,ne=v.text,Pe=v.className;return n.createElement(Ce.Z,{key:Y,className:Pe,icon:n.createElement(W.Z,{className:"operationIcon",icon:ee}),onClick:function(V){V.stopPropagation(),m(Y)}},ne)})))):null};var dt=e(35710),kt=e(13561),St=e(1393),zn=e(60876),At=function(r){(0,fe.default)(d,r);function d(y){(0,I.default)(this,d);var s=(0,ce.default)(this,(d.__proto__||b()(d)).call(this,y));return s.$textBox=(0,n.createRef)(),s.$textContent=(0,n.createRef)(),s}return(0,U.default)(d,[{key:"componentDidMount",value:function(){var s=this;setTimeout(function(){s.renderLineClampText()},0)}},{key:"shouldComponentUpdate",value:function(s){return(0,zn.tg)(s,this.props,["text"])}},{key:"componentWillUpdate",value:function(){var s=this;setTimeout(function(){s.renderLineClampText()},0)}},{key:"renderLineClampText",value:function(){var s=$(this.$textBox.current),m=$(this.$textContent.current);if(!(!s.length||!m.length)&&!("webkitLineClamp"in m.prop("style")))for(;m.height()>s.height();)m.text(m.text().replace(/(\s)*(\S|\W)(\.\.\.)?$/,"..."))}},{key:"render",value:function(){var s=this.props,m=s.className,h=s.style,q=s.text,H=s.line,j=H===void 0?2:H,z=(0,A.Z)(s,["className","style","text","line"]);return n.createElement("div",(0,E.default)({ref:this.$textBox,style:(0,E.default)({},h,{WebkitLineClamp:j}),className:le()("lineClampTextBox",m)},z),n.createElement("div",{ref:this.$textContent,className:"contentText",style:{WebkitBoxOrient:"vertical"}},q))}}]),d}(n.Component),ht=e(67187),Jn=e(70973),Ee=e(54644),tn=e(54208),wn=e(33965),et=e(96841),Mt=e(74127),ra=e(8716),wt=e(49365),oa=e(80273),ia=e(75809),la=(0,P.Z)([`
  min-height: 640px; //\u6700\u5C0F\u9AD8\u5EA6
  height: 100%;
  overflow: hidden;
  .iconBG {
    width: 32px;
    height: 32px;
    background: #2196f3;
    border-radius: 20px;
  }
  .wrapTr:not(.checkBoxTr):not(.optionWrapTr) {
    width: calc(calc(calc(100% - 30px - 38px) / 100) * 15);
  }
  .ming.Dropdown .Dropdown--input,
  .dropdownTrigger .Dropdown--input {
    padding: 0;
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
`],[`
  min-height: 640px; //\u6700\u5C0F\u9AD8\u5EA6
  height: 100%;
  overflow: hidden;
  .iconBG {
    width: 32px;
    height: 32px;
    background: #2196f3;
    border-radius: 20px;
  }
  .wrapTr:not(.checkBoxTr):not(.optionWrapTr) {
    width: calc(calc(calc(100% - 30px - 38px) / 100) * 15);
  }
  .ming.Dropdown .Dropdown--input,
  .dropdownTrigger .Dropdown--input {
    padding: 0;
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
`]),pa=w.ZP.div(la);function sa(r){var d=r.onCancel,y=r.appId,s=r.getRoleSummary,m=r.getUserList,h=r.appRole,q=r.setAppRoleSummary,H=r.setUserList,j=r.SetAppRolePagingModel,z=r.setLoading,R=(0,Cn.Z)({loading:!0,appDetail:{},notify:!1}),S=(0,t.Z)(R,2),G=S[0],v=G.loading,Y=G.appDetail,ee=G.notify,ne=S[1];(0,n.useEffect)(function(){return z(!0),Oe.Z.getApp({appId:y}).then(function(bn){ne({appDetail:bn}),s(y),m({appId:y},!0)}),wt.Z.getAppRoleSetting({appId:y}).then(function(bn){ne({notify:bn.notify})}),function(){H([]),q([]),j(null)}},[]),(0,n.useEffect)(function(){ne({loading:h.pageLoading})},[h]);var Pe=function(){var Bn=r.projectId,Tn=r.appId,Zn=r.onCancel;(0,ia.Z)({showMoreInvite:!1,SelectUserSettings:{projectId:Bn,filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,unique:!0,callback:function(Un){wt.Z.updateAppOwner({appId:Tn,memberId:Un[0].accountId}).then(function(bt){bt?Zn():alert(_l("\u6258\u4ED8\u5931\u8D25"),2)})}}})},X=(0,Jn.Rg)(Y.permissionType),V=X.isOwner,Ne=X.isAdmin;Ne=V||Ne;var Ke=(0,Jn.le)(Y.permissionType,Y.isLock),pn=(0,Jn.g9)(Y.permissionType),xn=function(){var Bn=r.appId;wt.Z.updateAppRoleNotify({appId:Bn,notify:!ee}).then(function(Tn){Tn&&ne({notify:!ee})})};return n.createElement(f.Z,{visible:!0,title:null,width:1e3,footer:null,onCancel:function(){d()},bodyClass:"pAll0 manageUserDialogBody flexColumn",headerClass:"pAll0"},n.createElement(pa,{className:"flex flexColumn"},v?n.createElement(tn.Z,null):n.createElement(wn.Z,(0,E.default)({},r,{notify:ee,updateAppRoleNotify:xn,appDetail:Y,isAdmin:Ne,isOwner:V,canEditUser:pn,canEditApp:Ke,isExternal:!0,roleList:_.get(r,"appRole.roleInfos")||[],freshNum:function(){return m({appId:y},!0)},transferApp:function(){return Pe()}}))))}var Kt=function(d){return{appRole:d.appRole}},da=function(d){return(0,Mt.DE)(ra,d)};const ca=(0,et.$j)(Kt,da)(sa);var Ft,Ot,Et,ua=(0,qn.Z)(Ft=(Et=Ot=function(r){(0,fe.default)(d,r);function d(){var y,s,m,h;(0,I.default)(this,d);for(var q=arguments.length,H=Array(q),j=0;j<q;j++)H[j]=arguments[j];return h=(s=(m=(0,ce.default)(this,(y=d.__proto__||b()(d)).call.apply(y,[this].concat(H))),m),m.state={editAppVisible:!1,selectIconVisible:!1,delAppConfirmVisible:!1,copyAppVisible:!1,externalLinkVisible:!1,showRoleDialog:!1},m.$myAppItem=n.createRef(),m.clickTimer=null,m.dataCache=o().pick(m.props,["icon","iconColor","name"]),m.handleAppChange=function(z){var R=o().pick(m.props,["projectId","icon","iconColor","navColor","lightColor","name","description"]);m.props.onAppChange((0,E.default)({},R,z,{appId:m.props.id}))},m.handleModify=function(z){var R=m.props,S=R.id,G=R.projectId,v=R.type;z.name===""&&(z.name=m.dataCache.name),m.props.handleModify((0,E.default)({},z,{appId:S,projectId:G}))},m.switchVisible=function(z,R){m.setState(z,R)},m.handleMoreClick=function(z){switch(z){case"edit":m.switchVisible({selectIconVisible:!0,editAppVisible:!1});break;case"del":m.switchVisible({delAppConfirmVisible:!0});break;case"copy":m.switchVisible({copyAppVisible:!0});break;case"setExternalLink":m.switchVisible({externalLinkVisible:!0});break;case"manageUser":m.switchVisible({showRoleDialog:!0});break;default:break}},m.handleApp=function(z){var R=m.props,S=R.id,G=R.projectId;m.props.handleApp({appId:S,projectId:G,mode:z})},s),(0,ce.default)(m,h)}return(0,U.default)(d,[{key:"shouldComponentUpdate",value:function(s,m){var h=this.props.id;return(0,zn.tg)(s,this.props,["id","type","isMarked","permissionType","name","iconColor","navColor","lightColor","icon","groupIds","urlTemplate","pcDisplay","webMobileDisplay","appDisplay","isNew"])||(0,zn.tg)(m,this.state)||h===this.props.newAppItemId||h===s.newAppItemId}},{key:"componentWillUnmount",value:function(){clearTimeout(this.clickTimer)}},{key:"render",value:function(){var s=this,m=this.state,h=m.editAppVisible,q=m.selectIconVisible,H=m.delAppConfirmVisible,j=m.copyAppVisible,z=m.externalLinkVisible,R=m.showRoleDialog,S=this.props,G=S.groupId,v=S.groupType,Y=S.isAdmin,ee=S.type,ne=S.lightColor,Pe=S.iconUrl,X=S.name,V=S.permissionType,Ne=S.isExternalApp,Ke=S.isMarked,pn=S.handleApp,xn=S.id,bn=S.groupIds,Bn=S.isLock,Tn=S.projectId,Zn=S.projectName,vt=S.groups,Un=S.newAppItemId,bt=S.clearNewAppItemId,wa=S.onCopy,qt=S.onUpdateAppBelongGroups,nt=S.pcNaviStyle,Oa=S.selectAppItmeType,$t=S.createType,jt=S.urlTemplate,jn=S.pcDisplay,Rt=S.webMobileDisplay,Na=S.appDisplay,Zt=S.isDashboard,ea=q||Un===xn,Ct=o().get(this,"$myAppItem.current.offsetLeft"),La=!o().isUndefined(Ct)&&Ct<414&&0,yt=this.props.iconColor||"#2196f3",Ut=this.props.navColor||yt,Ba=Ut==="#1b2025",Kn=[ne,"#ffffff","#f5f6f7"].includes(Ut);return n.createElement("div",{ref:this.$myAppItem,className:le()("sortableMyAppItemWrap",{active:h,isSelectingIcon:ea})},n.createElement("div",{className:le()("myAppItemWrap")},n.createElement(at.Z,{className:"myAppItem stopPropagation",to:(0,Ee.$r)(xn,nt,Oa),onClick:function(Fn){(0,xe.Ye)("app",xn),$t===1&&(Fn.stopPropagation(),Fn.preventDefault(),s.props.isNew&&s.handleModify({isNew:!1}),window.open((0,Ee.Rx)(jt,Tn,xn)))}},n.createElement("div",{className:"myAppItemDetail",style:{backgroundColor:Kn?ne:Ut||yt}},n.createElement(c.Z,{url:Pe,fill:Ba||Kn?yt:"#fff",size:48}),n.createElement(ht.Z,o().pick(this.props,["isGoodsStatus","isNew","fixed"]))),ee==="external"?n.createElement("div",{className:"externalAppInfo"},n.createElement("div",{className:"appName overflow_ellipsis",title:X},X),Zn&&n.createElement("div",{className:"projectName overflow_ellipsis",title:Zn},Zn)):n.createElement(At,{className:"appExplain",text:X,title:X})),n.createElement("div",{className:"star appItemIcon","data-tip":Ke?_l("\u53D6\u6D88\u6536\u85CF"):_l("\u6536\u85CF"),onClick:function(){return pn({mode:"mark",appId:xn,projectId:Tn,isMark:!Ke,groupType:ee})}},n.createElement(W.Z,{className:"Font16",icon:Ke?"task-star":"star-hollow"})),((0,Jn.le)(V,Bn)||(0,Jn.g9)(V)||!o().includes(["external","star","personal"],ee)&&!Zt)&&n.createElement(ie.Z,{popupVisible:h,popupClassName:"myAppItemOperatorTriggerWrap",popup:n.createElement(gt,{isAdmin:Y,groupType:ee,projectId:Tn,disabledCopy:ee==="external"||Ne,groups:vt,selectedGroupIds:bn,role:V,isLock:Bn,createType:$t,onUpdateAppBelongGroups:function(Fn){return qt((0,E.default)({},Fn,{appId:xn}))},onClick:function(Fn){return s.switchVisible({editAppVisible:!1},function(){return s.handleMoreClick(Fn)})},onClickAway:function(){return s.switchVisible({editAppVisible:!1})},isDashboard:Zt}),popupAlign:{points:["tl","bl"],offset:[0,0],overflow:{adjustX:!0}},getPopupContainer:function(){return s.$myAppItem.current},destroyPopupOnHide:!0},n.createElement("div",{className:"myAppItemMore appItemIcon",onClick:function(){return s.switchVisible({editAppVisible:!0})}},n.createElement(W.Z,{className:le()("moreOperation Font18",{active:h}),icon:"task-point-more"}))),H&&n.createElement(kt.Z,{para:{appId:xn,projectId:Tn,name:X},mode:"del",onOk:function(Fn){return s.switchVisible({delAppConfirmVisible:!1},s.props.handleApp((0,E.default)({},Fn,{mode:"del"})))},onCancel:function(){return s.switchVisible({delAppConfirmVisible:!1})}}),j&&n.createElement(St.Z,{title:X,projectId:Tn,para:{appId:xn,groupId:G,groupType:v},onCopy:function(Fn){return wa((0,E.default)({type:ee,id:xn,projectId:Tn},Fn))},onCancel:function(){return s.switchVisible({copyAppVisible:!1})}}),ea&&n.createElement("div",{style:{height:400}},n.createElement(dt.Z,(0,E.default)({projectId:Tn,className:"myAppItemSelectIconWrap",style:{left:La}},o().pick(this.props,["icon","name","iconColor","navColor","lightColor"]),{onModify:this.handleModify,onChange:this.handleAppChange,onClose:function(){return s.switchVisible({selectIconVisible:!1})},onClickAway:function(){return s.switchVisible({selectIconVisible:!1},bt)},onClickAwayExceptions:[".mui-dialog-container"]}))),z&&n.createElement(Be,{projectId:Tn,isEdit:!0,record:{id:xn,name:X,urlTemplate:jt,pcDisplay:jn,webMobileDisplay:Rt,appDisplay:Na},onCancel:function(){return s.switchVisible({externalLinkVisible:!1})},onAppChange:this.props.onAppChange}),R&&n.createElement(ca,{appId:xn,projectId:Tn,onCancel:function(){s.switchVisible({showRoleDialog:!1})}})))}}]),d}(n.Component),Ot.propTypes={id:a.string,projectId:a.string,icon:a.string,iconColor:a.string,iconUrl:a.string,name:a.string,type:(0,a.oneOf)(["star","project","personal","external","expire","group"]),onAppChange:a.func,handleApp:a.func,permissionType:(0,a.oneOf)([0,10,50,100,200,300]),isMarked:a.bool,newAppItemId:a.string,clearNewAppItemId:a.func},Ot.defaultProps={onAppChange:o().noop,onAppIconUpdate:o().noop,handleApp:o().noop,clearNewAppItemId:o().noop,newAppItemId:""},Et))||Ft,Nt,Lt,ma={star:1,project:2,personal:3,external:4,expire:4,group:6},fa=(0,Ln.W8)(function(r){return n.createElement(ua,r)}),ga=(0,Ln.JN)(function(r){var d=r.items,y=r.type,s=r.projectId,m=r.createAppFromEmpty,h=r.allowCreate,q=(0,A.Z)(r,["items","type","projectId","createAppFromEmpty","allowCreate"]),H=function(){var z=h&&!(0,M.get)((0,M.find)(md.global.Account.projects,function(R){return R.projectId===s}),"cannotCreateApp");return z?n.createElement(Z,{groupId:q.groupId,groupType:q.groupType,type:y,projectId:s,createAppFromEmpty:m}):(0,M.isEmpty)(d)?n.createElement("span",null):null};return n.createElement("div",{className:"sortableAppItemList myAppGroupDetail"},d.filter(function(j){return!j.pcDisplay||(0,Jn.le)(j.permissionType)}).map(function(j,z){return n.createElement(fa,(0,E.default)({key:j.id||z,index:z,type:y},j,q))}),H())}),ha=(Lt=Nt=function(r){(0,fe.default)(d,r);function d(y){(0,I.default)(this,d);var s=(0,ce.default)(this,(d.__proto__||b()(d)).call(this,y));return s.onSortEnd=function(m){var h=m.oldIndex,q=m.newIndex,H=s.props,j=H.type,z=H.projectId,R=H.groupId,S=H.items,G=s.state.sortedIds,v=(0,Ln.Rp)(G,h,q);s.setState({sortedIds:v});var Y=S.map(function(ee){var ne=ee.id;return ne});String(Y)!==String(v)&&s.props.onAppSorted({appIds:v,projectId:z,sortType:ma[j],groupId:R})},s.state={sortedIds:y.items.map(function(m){return m.id})},s}return(0,U.default)(d,[{key:"componentDidUpdate",value:function(s){s.items.length!==this.props.items.length&&this.setState({sortedIds:this.props.items.map(function(m){return m.id})})}},{key:"render",value:function(){var s=this.props.items,m=this.state.sortedIds;return n.createElement(ga,(0,E.default)({},o().omit(this.props,"items"),{axis:"xy",hideSortableGhost:!0,transitionDuration:0,helperClass:"sortableItemHelperClass",distance:3,items:m.map(function(h){return o().find(s,{id:h})}).concat(s.filter(function(h){return!o().includes(m,h.id)})).filter(o().identity),onSortEnd:this.onSortEnd}))}}]),d}(n.Component),Nt.propTypes={items:(0,a.arrayOf)((0,a.shape)({icon:a.string,iconColor:a.string,name:a.string,projectId:a.string})),onAppSorted:a.func,type:a.string,projectId:a.string},Nt.defaultProps={onAppSorted:o().noop},Lt),Qt=(0,P.Z)([`
  display: flex;
  padding-bottom: 24px;
  margin: 0 -30px;
`],[`
  display: flex;
  padding-bottom: 24px;
  margin: 0 -30px;
`]),xa=w.ZP.div(Qt);function xt(r){var d=r.projectId,y=r.groupType,s=r.groupId,m=r.apps,h=m===void 0?[]:m,q=r.actions,H=q===void 0?{}:q,j=(0,n.useState)(),z=(0,t.Z)(j,2),R=z[0],S=z[1];return n.createElement(xa,{className:"myAppGroupDetail"},n.createElement(ha,(0,E.default)({},r,{disabled:d==="external",newAppItemId:R,projectId:d,items:h,clearNewAppItemId:function(){return S(void 0)},onUpdateAppBelongGroups:H.updateAppBelongGroups,handleModify:function(v){H.updateApp(v)},onAppChange:function(v,Y){H.saveApp(v,Y)},onCopy:function(v){var Y=v.id,ee=v.appId;H.copyApp({id:Y,groupId:s},ee)},createAppFromEmpty:function(v){H.createAppFromEmpty((0,E.default)({},v,{groupId:s,groupType:y}),S)},handleApp:function(v){var Y=v.mode,ee=(0,A.Z)(v,["mode"]);Y==="del"?H.deleteApp(ee):Y==="quit"?H.quitApp(ee):Y==="mark"&&H.markApp(ee)},onAppSorted:function(v){H.updateAppSort(v)}})))}var zt=e(66215),va=e(14338),Za=e(48659),Aa=e(1825),Ea=(0,P.Z)([`
  margin-left: 12px;
  display: inline-flex;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  &:hover {
    background: #f5f5f5;
  }
`],[`
  margin-left: 12px;
  display: inline-flex;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  &:hover {
    background: #f5f5f5;
  }
`]),Ia=(0,P.Z)([`
  border-top: 1px solid #eaeaea;
`],[`
  border-top: 1px solid #eaeaea;
`]),ba=(0,P.Z)([`
  padding: 24px 0;
  .switchItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .radioItem {
    height: 36px;
    line-height: 36px;
    margin-left: -4px;
    padding-left: 4px;
    cursor: pointer;
    &:hover {
      background: #fafafa;
    }
  }
`],[`
  padding: 24px 0;
  .switchItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .radioItem {
    height: 36px;
    line-height: 36px;
    margin-left: -4px;
    padding-left: 4px;
    cursor: pointer;
    &:hover {
      background: #fafafa;
    }
  }
`]),Vt=(0,P.Z)([`
  .ant-drawer-header {
    border-bottom: 1px solid #ededed;
    padding: 12px 24px;
  }
  .ant-drawer-header-title {
    flex-direction: row-reverse;
    .ant-drawer-close {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 0;
      &:hover {
        background: #f5f5f5;
        color: #333;
      }
    }
  }
  .ant-drawer-content-wrapper {
    box-shadow: -8px 8px 24px rgba(0, 0, 0, 0.16) !important;
    .ant-drawer-body {
      padding: 0 24px;
    }
  }
`],[`
  .ant-drawer-header {
    border-bottom: 1px solid #ededed;
    padding: 12px 24px;
  }
  .ant-drawer-header-title {
    flex-direction: row-reverse;
    .ant-drawer-close {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 0;
      &:hover {
        background: #f5f5f5;
        color: #333;
      }
    }
  }
  .ant-drawer-content-wrapper {
    box-shadow: -8px 8px 24px rgba(0, 0, 0, 0.16) !important;
    .ant-drawer-body {
      padding: 0 24px;
    }
  }
`]),Ht=(0,w.ZP)(ae.Lb)(Ea),Jt=w.ZP.div(Ia),Bt=w.ZP.div(ba),Ca=(0,w.ZP)(Aa.Z)(Vt),ya={starApp:[{value:0,text:_l("\u4EC5\u770B\u5F53\u524D\u7EC4\u7EC7")},{value:1,text:_l("\u663E\u793A\u6240\u6709\u7EC4\u7EC7")}],starAppGroup:[{value:0,text:_l("\u5E73\u94FA\u663E\u793A")},{value:1,text:_l("\u9009\u9879\u5361\u663E\u793A")}]};function Yt(r){var d=r.setting,y=d===void 0?{}:d,s=r.onUpdate,m=s===void 0?o().noop:s,h=(0,n.useState)(!1),q=(0,t.Z)(h,2),H=q[0],j=q[1];function z(R,S){m((0,E.default)({},y,(0,C.default)({},R,S)))}return n.createElement(n.Fragment,null,n.createElement(Ht,{"data-tip":_l("\u81EA\u5B9A\u4E49"),onClick:function(){return j(!H)}},n.createElement("i",{className:"icon-tune Font20 Gray_75"})),n.createElement(Ca,{maskStyle:{backgroundColor:"transparent"},width:360,title:_l("\u81EA\u5B9A\u4E49"),placement:"right",visible:H,closeIcon:n.createElement("i",{className:"icon-close Font20"}),onClose:function(){return j(!1)}},n.createElement(Bt,null,n.createElement("div",{className:"bold mBottom6"},_l("\u661F\u6807\u5206\u7EC4")),ya.starAppGroup.map(function(R,S){return n.createElement("div",{className:"radioItem",onClick:function(){return z("displayType",R.value)}},n.createElement(va.Z,(0,E.default)({},R,{size:"small",checked:y.displayType===R.value})))})),n.createElement(Jt,null),n.createElement(Bt,null,n.createElement("div",{className:"switchItem"},n.createElement("div",null,n.createElement("div",{className:"bold"},_l("\u663E\u793A\u7EC4\u7EC7\u5206\u7EC4")),n.createElement("div",{className:"Gray_75 Font12 mTop5"},_l('\u5728"\u6211\u7684\u5E94\u7528"\u5206\u7C7B\u4E2D\u4EE5\u9009\u9879\u5361\u663E\u793A\u6240\u6709\u7EC4\u7EC7\u5206\u7EC4'))),n.createElement(zt.Z,{size:"small",checked:y.isAllAndProject,onClick:function(){return z("isAllAndProject",!y.isAllAndProject)}}))),n.createElement(Jt,null),n.createElement(Bt,null,n.createElement("div",{className:"switchItem"},n.createElement("div",null,n.createElement("div",{className:"bold"},_l("\u663E\u793A\u5916\u90E8\u534F\u4F5C")),n.createElement("div",{className:"Gray_75 Font12 mTop5"},_l("\u6211\u4EE5\u5916\u534F\u8EAB\u4EFD\u52A0\u5165\u7684\u5176\u4ED6\u7EC4\u7EC7\u7684\u5E94\u7528"))),n.createElement(zt.Z,{size:"small",checked:y.exDisplay,onClick:function(){return z("exDisplay",!y.exDisplay)}})))))}Yt.propTypes={setting:(0,a.shape)({}),onUpdate:a.func};var _a=e(33126),Da=e(62232),Pa=(0,P.Z)([`
  flex: 1;
  display: flex;
  flex-direction: column;
`],[`
  flex: 1;
  display: flex;
  flex-direction: column;
`]),Ta=(0,P.Z)([`
  flex: 1;
`],[`
  flex: 1;
`]),ka=(0,P.Z)([`
  padding: 0px 40px 160px 80px;
  &.isDashboard {
    padding: 0 44px;
    margin-top: 12px;
    .noExternal {
      margin: -30px 0 20px -16px;
    }
  }
`],[`
  padding: 0px 40px 160px 80px;
  &.isDashboard {
    padding: 0 44px;
    margin-top: 12px;
    .noExternal {
      margin: -30px 0 20px -16px;
    }
  }
`]),Xt=(0,P.Z)([""],[""]),Xn=(0,P.Z)([`
  height: 32px;
  width: fit-content;
  .groupStarIcon {
    display: none;
    margin-left: 10px;
    cursor: pointer;
    i {
      color: #f9ce1d;
      font-size: 18px;
    }
  }
  &:hover {
    .groupStarIcon {
      display: block;
    }
  }
`],[`
  height: 32px;
  width: fit-content;
  .groupStarIcon {
    display: none;
    margin-left: 10px;
    cursor: pointer;
    i {
      color: #f9ce1d;
      font-size: 18px;
    }
  }
  &:hover {
    .groupStarIcon {
      display: block;
    }
  }
`]),It=(0,P.Z)([`
  display: inline-flex;
  height: 28px;
  padding: 0 8px;
  margin-left: -26px;
  max-width: 300px;
  font-size: 17px;
  font-weight: bolder;
  border-radius: 4px;
  .mRight4 {
    margin-right: 4px;
  }
  .icon-arrow-down {
    visibility: hidden;
  }
  &:not(.disabled) {
    cursor: pointer;
    &:hover {
      background: #f2f2f2;
      .icon-arrow-down {
        visibility: visible;
      }
    }
  }
  &.isDashboard {
    margin-left: -40px;
  }
`],[`
  display: inline-flex;
  height: 28px;
  padding: 0 8px;
  margin-left: -26px;
  max-width: 300px;
  font-size: 17px;
  font-weight: bolder;
  border-radius: 4px;
  .mRight4 {
    margin-right: 4px;
  }
  .icon-arrow-down {
    visibility: hidden;
  }
  &:not(.disabled) {
    cursor: pointer;
    &:hover {
      background: #f2f2f2;
      .icon-arrow-down {
        visibility: visible;
      }
    }
  }
  &.isDashboard {
    margin-left: -40px;
  }
`]),Sa=(0,P.Z)([`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
`],[`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
`]),Ma=(0,P.Z)([`
  cursor: pointer;
  padding: 5px 16px;
  color: #757575;
  background-color: #f5f5f5;
  margin-right: 8px;
  border-radius: 36px;
  font-weight: bolder;
  max-width: 200px;
  margin-bottom: 8px;
  &.active,
  &:hover {
    color: `,`;
    background-color: `,`;
  }
`],[`
  cursor: pointer;
  padding: 5px 16px;
  color: #757575;
  background-color: #f5f5f5;
  margin-right: 8px;
  border-radius: 36px;
  font-weight: bolder;
  max-width: 200px;
  margin-bottom: 8px;
  &.active,
  &:hover {
    color: `,`;
    background-color: `,`;
  }
`]),x=(0,P.Z)([`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 200px;
  height: 46px;
  padding: 0 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
  &:hover {
    color: #2196f3;
    i {
      color: #2196f3 !important;
    }
  }
`],[`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 200px;
  height: 46px;
  padding: 0 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
  &:hover {
    color: #2196f3;
    i {
      color: #2196f3 !important;
    }
  }
`]),T=(0,P.Z)([`
  display: flex;
  padding: 24px 70px 16px 76px;
  .dashboardTitle {
    font-size: 17px;
    font-weight: bold;
    line-height: 48px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
  }
  &.isDashboard {
    height: 48px;
    padding: 0 10px 0px 20px;
    align-items: flex-end;
  }
`],[`
  display: flex;
  padding: 24px 70px 16px 76px;
  .dashboardTitle {
    font-size: 17px;
    font-weight: bold;
    line-height: 48px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
  }
  &.isDashboard {
    height: 48px;
    padding: 0 10px 0px 20px;
    align-items: flex-end;
  }
`]),Ie=(0,P.Z)([`
  margin: -12px 0 20px;
`],[`
  margin: -12px 0 20px;
`]),K=(0,P.Z)([`
  margin-top: -12px;
`],[`
  margin-top: -12px;
`]),L=(0,P.Z)([`
  width: auto !important;
  height: auto !important;
  margin: 0 0 0 10px !important;
  padding: 0 !important;
  .newAppBtn {
    font-size: 13px;
    display: inline-block;
    color: #fff;
    line-height: 36px;
    font-weight: 700;
    border-radius: 36px;
    height: 36px;
    padding: 0 18px 0 16px;
    cursor: pointer;
    background: `,`;
    &:hover {
      background: `,`;
    }
  }
  &.addAppItemWrap .addAppItemMenu {
    top: 40px !important;
    right: 0px;
    left: auto !important;
  }
`],[`
  width: auto !important;
  height: auto !important;
  margin: 0 0 0 10px !important;
  padding: 0 !important;
  .newAppBtn {
    font-size: 13px;
    display: inline-block;
    color: #fff;
    line-height: 36px;
    font-weight: 700;
    border-radius: 36px;
    height: 36px;
    padding: 0 18px 0 16px;
    cursor: pointer;
    background: `,`;
    &:hover {
      background: `,`;
    }
  }
  &.addAppItemWrap .addAppItemMenu {
    top: 40px !important;
    right: 0px;
    left: auto !important;
  }
`]),_e=(0,P.Z)([`
  display: flex;
  align-items: center;
  padding: 15px 0 0 8px;

  ul {
    overflow: hidden;
    height: 27px;
    font-size: 0;
    li {
      display: inline-block;
      box-sizing: border-box;
      font-size: 15px;
      cursor: pointer;
      &:first-child {
        .liContent {
          margin-right: 24px;
        }
      }
      &:hover {
        .liContent {
          .itemText {
            border-bottom: 2px solid #ddd;
          }
          .starIcon {
            display: inline-block;
            &:hover {
              color: #f9ce1d;
            }
          }
        }
      }
      &.isActive {
        .liContent {
          .itemText {
            color: `,`;
            border-color: `,`;
            font-weight: bold;
          }
        }
      }

      .liContent {
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 32px;
        .itemText {
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          padding-bottom: 2px;
          max-width: 200px;
          color: #757575;
          font-weight: bold;

          &::before {
            display: block;
            content: attr(title);
            font-weight: bold;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
        }
        .divideLine {
          height: 12px;
          border-right: 1px solid #ddd;
          margin-left: 24px;
        }
        .starIcon {
          position: absolute;
          top: 1px;
          right: -20px;
          display: none;
          color: #bdbdbd;
          font-size: 13px;
          &.isMarked {
            color: #f9ce1d;
          }
        }
      }
    }
  }
  .moreTab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    width: 145px;
    min-width: 145px;
    height: 27px;

    span {
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      color: #757575;
      &.isActive {
        color: `,`;
        border-color: `,`;
      }
    }
    &:hover {
      span,
      i {
        color: `,`;
      }
    }
  }
`],[`
  display: flex;
  align-items: center;
  padding: 15px 0 0 8px;

  ul {
    overflow: hidden;
    height: 27px;
    font-size: 0;
    li {
      display: inline-block;
      box-sizing: border-box;
      font-size: 15px;
      cursor: pointer;
      &:first-child {
        .liContent {
          margin-right: 24px;
        }
      }
      &:hover {
        .liContent {
          .itemText {
            border-bottom: 2px solid #ddd;
          }
          .starIcon {
            display: inline-block;
            &:hover {
              color: #f9ce1d;
            }
          }
        }
      }
      &.isActive {
        .liContent {
          .itemText {
            color: `,`;
            border-color: `,`;
            font-weight: bold;
          }
        }
      }

      .liContent {
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 32px;
        .itemText {
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          padding-bottom: 2px;
          max-width: 200px;
          color: #757575;
          font-weight: bold;

          &::before {
            display: block;
            content: attr(title);
            font-weight: bold;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
        }
        .divideLine {
          height: 12px;
          border-right: 1px solid #ddd;
          margin-left: 24px;
        }
        .starIcon {
          position: absolute;
          top: 1px;
          right: -20px;
          display: none;
          color: #bdbdbd;
          font-size: 13px;
          &.isMarked {
            color: #f9ce1d;
          }
        }
      }
    }
  }
  .moreTab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    width: 145px;
    min-width: 145px;
    height: 27px;

    span {
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      color: #757575;
      &.isActive {
        color: `,`;
        border-color: `,`;
      }
    }
    &:hover {
      span,
      i {
        color: `,`;
      }
    }
  }
`]),pe=(0,P.Z)([`
  width: 220px;
  background: #fff;
  border-radius: 3px;
  padding: 6px 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  .groupItem {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    &:hover {
      background: #f8f8f8;
      .listStarIcon {
        display: block;
      }
    }
    &.isActive {
      background: `,`;
      color: `,`;
    }

    .listStarIcon {
      display: none;
      color: #bdbdbd;
      margin-left: 8px;
      &:hover {
        color: #f9ce1d;
      }
      &.isMarked {
        color: #f9ce1d;
      }
    }
  }
`],[`
  width: 220px;
  background: #fff;
  border-radius: 3px;
  padding: 6px 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  .groupItem {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    &:hover {
      background: #f8f8f8;
      .listStarIcon {
        display: block;
      }
    }
    &.isActive {
      background: `,`;
      color: `,`;
    }

    .listStarIcon {
      display: none;
      color: #bdbdbd;
      margin-left: 8px;
      &:hover {
        color: #f9ce1d;
      }
      &.isMarked {
        color: #f9ce1d;
      }
    }
  }
`]),we=(0,_a.Z)(qn.Z),be=w.ZP.div(Pa),O=(0,w.ZP)(u.Z)(Ta),Q=w.ZP.div(ka),ve=w.ZP.div(Xt),Ge=w.ZP.div(Xt),on=(0,w.ZP)(ae.EK)(Xn),cn=(0,w.ZP)(ae.EK)(It),$e=w.ZP.div(Sa),hn=w.ZP.div(Ma,function(r){var d=r.themeColor;return d},function(r){var d=r.activeColor;return d}),en=w.ZP.div(x),vn=w.ZP.div(T),ln=w.ZP.div(Ie),Pn=w.ZP.div(K),fn=(0,w.ZP)(Z)(L,function(r){var d=r.themeColor;return d},function(r){var d=r.themeColor;return(0,Da.YT)(d,"0.8")}),An=w.ZP.div(_e,function(r){var d=r.themeColor;return d},function(r){var d=r.themeColor;return d},function(r){var d=r.themeColor;return d},function(r){var d=r.themeColor;return d},function(r){var d=r.themeColor;return d+" !important"}),gn=w.ZP.div(pe,function(r){var d=r.activeColor;return d},function(r){var d=r.themeColor;return d});function Sn(r){var d=r.disabled,y=r.title,s=r.group,m=r.isFolded,h=r.count,q=r.onClick,H=q===void 0?o().noop:q,j=r.actions,z=r.projectId,R=r.iconName,S=r.svgIcon,G=r.isDashboard;return n.createElement(on,{className:le()({mBottom8:m})},n.createElement(cn,{className:le()({disabled:d,isDashboard:G}),onClick:d?o().noop:H},d?n.createElement("span",{className:"mRight18"}):n.createElement(W.Z,{icon:m?"arrow-right-tip":"arrow-down",className:"mRight4 Font12 Gray_9d"}),R&&n.createElement(W.Z,{icon:R,className:"mRight4 Font20 Gray_75"}),S&&n.createElement(c.Z,{className:"mRight4 mTop5",size:20,url:S.iconUrl||md.global.FileStoreConfig.pubHost.replace(/\/$/,"")+"/customIcon/"+S.icon+".svg",fill:"#757575"}),n.createElement("div",{className:"ellipsis"},y),o().isNumber(h)&&h!==0&&n.createElement("span",{className:"Gray_bd mLeft6 Bold Font15"},h)),!!s&&n.createElement(N.default,{title:_l("\u53D6\u6D88\u6807\u661F"),placement:"bottom"},n.createElement("div",{className:"groupStarIcon",onClick:function(){j.markGroup({id:s.id,isMarked:!s.isMarked,groupType:s.groupType,projectId:z})}},n.createElement(W.Z,{icon:"task-star"}))))}function kn(r){var d=r.projectId,y=r.markedGroup,s=r.actions,m=r.keywords,h=r.foldedMap,q=r.toggleFolded,H=r.isDashboard;return n.createElement("div",null,n.createElement(ve,null,y.map(function(j,z){return j.apps.length||!m?n.createElement(Ge,null,n.createElement(Sn,{actions:s,projectId:d,title:j.name,count:j.apps.length,group:j,isFolded:h[j.id],svgIcon:{icon:j.icon,iconUrl:j.iconUrl},onClick:function(){return q(j.id)},isDashboard:H}),!h[j.id]&&n.createElement(xt,(0,E.default)({},r,{type:"group",groupId:j.id,groupType:j.groupType,projectId:d,apps:j.apps}))):null})))}kn.propTypes={projectId:a.string,markedGroup:(0,a.arrayOf)((0,a.shape)({}))};function We(r){var d=r.projectId,y=r.markedGroup,s=r.actions,m=r.keywords,h=r.dashboardColor,q=r.foldedMap,H=r.toggleFolded,j=r.isDashboard,z=(0,n.useState)(localStorage.getItem("home_active_star_group_"+d+"_"+md.global.Account.accountId)||o().get(y,"0.id")),R=(0,t.Z)(z,2),S=R[0],G=R[1],v=(0,n.useState)({}),Y=(0,t.Z)(v,2),ee=Y[0],ne=Y[1],Pe=S,X=o().find(y,{id:Pe})||y[0];return S!==X.id&&(Pe=X.id),!m&&n.createElement("div",null,n.createElement(Sn,{title:_l("\u661F\u6807\u5206\u7EC4"),isFolded:q.starGroup,iconName:"folder_special_black_24dp",onClick:function(){return H("starGroup")},isDashboard:j}),!q.starGroup&&n.createElement(n.Fragment,null,n.createElement($e,null,y.map(function(V,Ne){return n.createElement(ie.Z,{getPopupContainer:function(){return document.body},popupVisible:ee[V.id],popupAlign:{points:["tl","bl"],offset:[0,8],overflow:{adjustX:!0,adjustY:!0}},popup:n.createElement(en,{className:"groupTabClickPopup",onClick:function(){s.markGroup({id:V.id,isMarked:!V.isMarked,groupType:V.groupType,projectId:d})}},n.createElement(W.Z,{icon:"task-star",className:"Gray_9d Font20"}),n.createElement("span",{className:"mLeft10 mTop2"},_l("\u53D6\u6D88\u6807\u661F")))},n.createElement(we,{onClickAway:function(){return ne((0,C.default)({},V.id,!1))},onClickAwayExceptions:[".groupTabClickPopup"]},n.createElement(hn,{themeColor:h.themeColor,activeColor:h.activeColor,key:Ne,className:le()("ellipsis",{active:Pe===V.id}),onClick:function(){G(V.id),safeLocalStorageSetItem("home_active_star_group_"+d+"_"+md.global.Account.accountId,V.id)},onContextMenu:function(pn){pn.preventDefault(),ne((0,C.default)({},V.id,!0))}},V.name)))})),X&&n.createElement(xt,(0,E.default)({},r,{type:"group",groupId:X.id,groupType:X.groupType,projectId:d,apps:X.apps}))))}We.propTypes={projectId:a.string,markedGroup:(0,a.arrayOf)((0,a.shape)({}))};function se(r){var d=r.setting,y=d===void 0?{}:d,s=r.keywords,m=r.activeGroup,h=r.projectId,q=r.loading,H=r.myApps,j=H===void 0?[]:H,z=r.markedApps,R=z===void 0?[]:z,S=r.externalApps,G=S===void 0?[]:S,v=r.aloneApps,Y=v===void 0?[]:v,ee=r.activeGroupApps,ne=ee===void 0?[]:ee,Pe=r.recentApps,X=Pe===void 0?[]:Pe,V=r.groups,Ne=V===void 0?[]:V,Ke=r.isDashboard,pn=r.dashboardColor,xn=r.hideExternalTitle,bn=r.isAdmin,Bn=r.currentTheme,Tn=(0,A.Z)(r,["setting","keywords","activeGroup","projectId","loading","myApps","markedApps","externalApps","aloneApps","activeGroupApps","recentApps","groups","isDashboard","dashboardColor","hideExternalTitle","isAdmin","currentTheme"]),Zn=Tn.actions,vt=y.displayType===0?"tile":"tab",Un=h==="external",bt=y.exDisplay||Un,wa=(0,n.useState)(safeParse(localStorage.getItem((Ke?"dashboard":"home")+"_fold_"+md.global.Account.accountId)||"{}")),qt=(0,t.Z)(wa,2),nt=qt[0],Oa=qt[1],$t=(0,n.useState)(localStorage.getItem("home_active_group_tab_"+h+"_"+md.global.Account.accountId)||"all"),jt=(0,t.Z)($t,2),jn=jt[0],Rt=jt[1],Na=(0,n.useState)(!1),Zt=(0,t.Z)(Na,2),ea=Zt[0],Ct=Zt[1],La=(0,n.useState)([]),yt=(0,t.Z)(La,2),Ut=yt[0],Ba=yt[1],Kn=(0,n.useRef)(),On=(0,n.useState)(""),Fn=(0,t.Z)(On,2),Ua=Fn[0],na=Fn[1],_t=Ne.filter(function(nn){return nn.groupType===1}),za=(0,n.useState)(!1),Ga=(0,t.Z)(za,2),ja=Ga[0],Va=Ga[1],Gt=(0,n.useRef)(),Wa=!md.global.Account.projects.length,Wt=!s&&!Wa,ta=(r.markedGroup||[]).map(function(nn){return(0,E.default)({},nn,{apps:(nn.appIds||[]).map(function(de){return o().find([].concat((0,k.Z)(j),(0,k.Z)(R)),{id:de})}).filter(o().identity)})}),Ka=Ke&&!bt&&!R.length;function aa(nn){Oa(function(de){return(0,E.default)({},de,(0,C.default)({},nn,!de[nn]))})}var Ha=function(){var de=[].concat((0,k.Z)(Kn.current.children)).map(function(Qn){return Qn.offsetWidth}),Se=0,Rn=0;return de.forEach(function(Qn){Se+=Qn,Se<=Kn.current.offsetWidth&&Rn++}),Rn},Ja=function nn(){Kn.current&&(Gt.current&&(Gt.current.style.display="none"),Va(Kn.current.offsetHeight<Kn.current.scrollHeight),Gt.current&&(Gt.current.style.display="flex"));var de=$(".myAppGroupDetail");if(window.ResizeObserver&&de.length&&!de.data("bind")){var Se=new ResizeObserver(nn);Se.observe(de[0]),de.data("bind",!0)}};(0,n.useLayoutEffect)(Ja,[Ne,Kn.current]),(0,n.useLayoutEffect)(function(){ja&&($(Kn.current).find("li").eq(0).offset()||{}).top!==($(Kn.current).find(".isActive").offset()||{}).top&&na($(Kn.current).find(".isActive").text())},[ja]),(0,n.useEffect)(function(){if(Ne.length){var nn=localStorage.getItem("home_active_group_tab_"+h+"_"+md.global.Account.accountId),de=_t.filter(function(Se){return Se.id===nn})[0];de||(Rt("all"),na(""))}},[Ne]);var Fa=function(de,Se){de.stopPropagation(),Zn.markGroup({id:Se.id,isMarked:!Se.isMarked,groupType:Se.groupType,projectId:h})};function Ya(){var nn=[{id:"all",name:_l("\u5168\u90E8")}].concat(_t);return!!_t.length&&n.createElement(An,{themeColor:pn.themeColor},n.createElement("ul",{ref:Kn},nn.map(function(de,Se){return n.createElement("li",{key:Se,className:le()({isActive:de.id===jn}),onClick:function(){jn!==de.id&&(Rt(de.id),na(""))}},n.createElement("div",{className:"liContent"},n.createElement("span",{title:de.name,className:"overflow_ellipsis itemText"},de.name),de.id==="all"?n.createElement("div",{className:"divideLine"}):n.createElement(N.default,{title:de.isMarked?_l("\u53D6\u6D88\u6807\u661F"):_l("\u6807\u661F"),placement:"bottom",mouseEnterDelay:.2},n.createElement("div",{className:le()("starIcon",{isMarked:de.isMarked}),onClick:function(Qn){return Fa(Qn,de)}},n.createElement(W.Z,{icon:de.isMarked?"task-star":"star-hollow"})))))})),ja&&n.createElement(ie.Z,{action:["click"],getPopupContainer:function(){return document.body},popupVisible:ea,onPopupVisibleChange:function(Se){return Ct(Se)},popupAlign:{points:["tr","br"],offset:[0,10],overflow:{adjustX:!0,adjustY:!0}},popup:n.createElement(gn,{activeColor:pn.activeColor,themeColor:pn.themeColor},Ut.map(function(de){var Se=de.id===jn;return n.createElement("div",{className:le()("groupItem",{isActive:Se}),onClick:function(){Rt(de.id),na(de.name),Ct(!1)}},n.createElement("span",{className:"overflow_ellipsis",title:de.name},de.name),n.createElement(N.default,{title:de.isMarked?_l("\u53D6\u6D88\u6807\u661F"):_l("\u6807\u661F"),placement:"bottom"},n.createElement("div",{className:le()("listStarIcon",{isMarked:de.isMarked}),onClick:function(Qn){Fa(Qn,de),Ct(!1)}},n.createElement(W.Z,{icon:de.isMarked?"task-star":"star-hollow"}))))}))},n.createElement("div",{className:"moreTab",ref:Gt,onClick:function(){var Se=Ha(),Rn=_t.filter(function(Qn,tt){return tt>=Se-1});Ba(Rn)}},n.createElement("div",{className:"flexRow alignItemsCenter"},n.createElement("span",{className:le()("overflow_ellipsis bold",{isActive:!!Ua})},Ua||_l("\u66F4\u591A")),n.createElement(W.Z,{icon:"arrow-down-border",className:"mLeft10 Gray_9d pBottom2"})))))}function Ra(){var nn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},de=nn.title,Se=nn.type,Rn=nn.allowCreate,Qn=nn.apps,tt=Qn===void 0?[]:Qn,Xa=nn.iconName,qa=!(xn&&Se==="external")&&!(Ka&&Se==="project");return(!!tt.length||Se==="project"&&!Wa||Se==="external"&&Un)&&n.createElement(n.Fragment,null,qa&&n.createElement(Sn,{disabled:Se==="external"&&Un&&!tt.length,title:de,count:tt.length,isFolded:nt[Se],iconName:Xa,onClick:function(){return aa(Se)},isDashboard:Ke}),!nt[Se]&&n.createElement(n.Fragment,null,y.isAllAndProject&&Se==="project"&&!s&&Ya(),n.createElement(xt,(0,E.default)({},r,{type:Se==="project"&&jn!=="all"?"group":Se,projectId:h,allowCreate:Rn,groupId:Se==="project"&&jn!=="all"&&Ne.length?jn:void 0,groupType:Se==="project"&&jn!=="all"&&Ne.length?(_t.filter(function(Dt){return Dt.id===jn})[0]||{}).groupType:void 0,apps:Se==="project"&&jn!=="all"&&y.isAllAndProject&&Ne.length&&!s?((_t.filter(function(Dt){return Dt.id===jn})[0]||{}).appIds||[]).map(function(Dt){return tt.filter(function($a){return $a.id===Dt})[0]||{}}):tt}))),Se==="project"&&!tt.length&&s&&n.createElement(Pn,{className:"Font14 Gray_9e"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")),Se==="external"&&Un&&!tt.length&&n.createElement(ln,{className:"Font14 Gray75 noExternal"},_l("\u6682\u65E0\u5916\u90E8\u534F\u4F5C\u8005\u7684\u5E94\u7528")))}if((0,n.useEffect)(function(){safeLocalStorageSetItem((Ke?"dashboard":"home")+"_fold_"+md.global.Account.accountId,re()(nt))},[nt]),(0,n.useEffect)(function(){safeLocalStorageSetItem("home_show_type_"+md.global.Account.accountId,vt)},[vt]),(0,n.useEffect)(function(){safeLocalStorageSetItem("home_active_group_tab_"+h+"_"+md.global.Account.accountId,jn!=="all"?jn:"")},[jn]),m)return n.createElement(be,null,n.createElement(vn,null,n.createElement(qe.Z,{placeholder:_l("\u641C\u7D22\u5E94\u7528"),value:s,onChange:function(de){return Zn.updateKeywords(de)}})),q?n.createElement(Nn,null):n.createElement(O,null,n.createElement(Q,null,n.createElement(Sn,{disabled:!0,title:m.name,count:ne.length,isFolded:nt[m.id],onClick:function(){return aa(m.id)}}),s&&!ne.length&&n.createElement("div",{className:"Font14 Gray_9e mTop24"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")),n.createElement(xt,(0,E.default)({},r,{allowCreate:Wt&&!!m.id&&(m.groupType!==1||bn),type:"group",groupId:m.id,groupType:m.groupType,projectId:h,apps:ne})))));var Qa=function(){return n.createElement(Q,{className:le()({isDashboard:Ke})},!Un&&vt==="tab"&&!!ta.length&&n.createElement(We,(0,E.default)({},r,{allowCreate:Wt,projectId:h,markedGroup:ta,foldedMap:nt,toggleFolded:aa})),!Un&&vt==="tile"&&!!ta.length&&n.createElement(kn,(0,E.default)({},r,{allowCreate:Wt,projectId:h,markedGroup:ta,foldedMap:nt,toggleFolded:aa})),!Un&&Ra({title:_l("\u6211\u7684\u5E94\u7528"),type:"project",allowCreate:Wt,apps:j,iconName:"grid_view"}),(bt||!h)&&Ra({title:_l("\u5916\u90E8\u534F\u4F5C"),type:"external",apps:G,iconName:"external_collaboration"}),(Un||!h)&&Ra({title:_l("\u4E2A\u4EBA\u5E94\u7528"),type:"personal",apps:Y}))};return n.createElement(be,null,!q&&!h&&n.createElement(Ze.Z,{hasExternalApps:!0}),n.createElement(vn,{className:le()({isDashboard:Ke})},Ke&&n.createElement(n.Fragment,null,n.createElement("div",{className:"dashboardTitle"},Bn.appIcon&&n.createElement("img",{src:Bn.appIcon}),_l("\u5E94\u7528"),Ka&&!!j.length&&n.createElement("span",{className:"Gray_bd mLeft6 Bold Font15"},j.length)),n.createElement("div",{className:"flex"})),n.createElement(qe.Z,{placeholder:_l("\u641C\u7D22\u5E94\u7528"),value:s,onChange:function(de){return Zn.updateKeywords(de)}}),!Un&&h&&!Ke&&n.createElement(Yt,{setting:y,onUpdate:function(de,Se){return Zn.editHomeSetting({projectId:h,setting:de,editingKey:Se})}}),!Ke&&n.createElement("div",{className:"flex"}),(Wt&&!Un&&!o().get(o().find(md.global.Account.projects,function(nn){return nn.projectId===h}),"cannotCreateApp")||s)&&n.createElement(fn,{themeColor:pn.themeColor,projectId:h,createAppFromEmpty:function(){for(var de=arguments.length,Se=Array(de),Rn=0;Rn<de;Rn++)Se[Rn]=arguments[Rn];Zn.createAppFromEmpty.apply(Zn,Se.concat([function(Qn){Se[0].createType!==1?(0,Xe.T8)("/app/"+Qn):alert(_l("\u6DFB\u52A0\u5916\u90E8\u94FE\u63A5\u6210\u529F"))}]))}},n.createElement("span",{className:"newAppBtn"},n.createElement("i",{className:"Icon icon icon-plus Font13 mRight5 White"}),_l("\u65B0\u5EFA\u5E94\u7528")))),q?n.createElement(Nn,{isIndexPage:!0}):Ke?Qa():n.createElement(O,null,Qa()))}se.propTypes={isAdmin:a.bool,setting:(0,a.shape)({}),activeGroup:(0,a.shape)({}),projectId:a.string,currentProject:(0,a.shape)({}),loading:a.bool,markedGroup:(0,a.arrayOf)((0,a.shape)({})),myApps:(0,a.arrayOf)((0,a.shape)({})),markedApps:(0,a.arrayOf)((0,a.shape)({})),externalApps:(0,a.arrayOf)((0,a.shape)({})),aloneApps:(0,a.arrayOf)((0,a.shape)({})),activeGroupApps:(0,a.arrayOf)((0,a.shape)({})),recentApps:(0,a.arrayOf)((0,a.shape)({}))}},67187:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>le});var he=e(85105),re=e.n(he),k=e(99663),A=e(22600),C=e(49135),t=e(93196),E=e(86735),oe=e(67294),N=e(5017),c=e(93967),W=e.n(c),u=e(60876),P=e(15577),n,a,w=(0,E.Z)([`
  position: absolute;
  left: 50%;
  bottom: 0;
  border: 2px solid #fff;
  background-color: #333;
  border-radius: 13px;
  color: #fff;
  line-height: 20px;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0 10px;
  font-size: 12px;
  &.isOverdue {
    background: #bdbdbd;
  }
  &.fixed {
    background: #fd7558;
  }
  &.isUpgrade {
    background: #4caf50;
  }
  &.isNew {
    background: #333;
  }
  &.mobilePadding {
    padding: 0 8px;
  }
  &.isRecent {
    left: unset;
    bottom: -10px;
    padding: 0 6px;
  }
`],[`
  position: absolute;
  left: 50%;
  bottom: 0;
  border: 2px solid #fff;
  background-color: #333;
  border-radius: 13px;
  color: #fff;
  line-height: 20px;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0 10px;
  font-size: 12px;
  &.isOverdue {
    background: #bdbdbd;
  }
  &.fixed {
    background: #fd7558;
  }
  &.isUpgrade {
    background: #4caf50;
  }
  &.isNew {
    background: #333;
  }
  &.mobilePadding {
    padding: 0 8px;
  }
  &.isRecent {
    left: unset;
    bottom: -10px;
    padding: 0 6px;
  }
`]),F=N.ZP.div(w),le=(a=n=function(ie){(0,t.default)(ae,ie);function ae(){var je,Ce,p,l;(0,k.default)(this,ae);for(var i=arguments.length,f=Array(i),g=0;g<i;g++)f[g]=arguments[g];return l=(Ce=(p=(0,C.default)(this,(je=ae.__proto__||re()(ae)).call.apply(je,[this].concat(f))),p),p.state={},Ce),(0,C.default)(p,l)}return(0,A.default)(ae,[{key:"render",value:function(){var Ce=this.props,p=Ce.isGoodsStatus,l=Ce.isNew,i=Ce.fixed,f=Ce.isRecent,g=Ce.isUpgrade,b=Ce.className,I=(0,P.Q9)(),U=(0,u.$B)({isGoodsStatus:p,isNew:l,fixed:i,isUpgrade:g});return U?oe.createElement(F,{className:W()(""+b,{isOverdue:!p,fixed:i,isUpgrade:g,mobilePadding:i&&I,isRecent:f})},U):null}}]),ae}(oe.Component),n.propTypes={},n.defaultProps={},a)},94158:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>W});var he=e(86735),re=e(67294),k=e(5017),A=e(42541),C=e(4654),t=e.n(C),E=(0,he.Z)([`
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 100px;
    margin-right: 24px;
  }
`],[`
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 100px;
    margin-right: 24px;
  }
`]),oe=(0,he.Z)([`
  .joinOrCreateProject {
    width: 460px;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 14px;
    padding: 0 30px;
    line-height: 44px;
    background: rgba(33, 150, 243, 0.08);
    border-radius: 22px;
    color: #757575;
    span {
      color: #2196f3;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`],[`
  .joinOrCreateProject {
    width: 460px;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 14px;
    padding: 0 30px;
    line-height: 44px;
    background: rgba(33, 150, 243, 0.08);
    border-radius: 22px;
    color: #757575;
    span {
      color: #2196f3;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`]),N=(0,k.ZP)(A.Lb)(E),c=k.ZP.div(oe);function W(u){var P=u.hasExternalApps;return P?re.createElement(c,null,re.createElement("div",{className:"joinOrCreateProject"},_l("\u60A8\u8FD8\u672A\u62E5\u6709\u4EFB\u4F55\u7EC4\u7EC7\uFF01"),re.createElement("span",{onClick:function(){return window.open("/enterpriseRegister?type=add","__blank")}},_l("\u52A0\u5165")),_l("\u7EC4\u7EC7\uFF0C\u5F00\u59CB\u521B\u5EFA\u60A8\u7684\u5E94\u7528"))):re.createElement(N,null,re.createElement("img",{src:t(),alt:""}),re.createElement("div",{className:"Font14 bold"},re.createElement("span",{className:"ThemeColor pointer mLeft5 mRight5",onClick:function(){return window.open("/enterpriseRegister?type=add","__blank")}},_l("\u7533\u8BF7\u52A0\u5165")),re.createElement("span",null,_l("\u7EC4\u7EC7\uFF0C\u521B\u5EFA\u81EA\u5DF1\u7684\u5E94\u7528"))))}},34796:(me,ge,e)=>{"use strict";e.r(ge),e.d(ge,{default:()=>Ma});var he=e(93567),re=e(54208),k=e(88239),A=e(12424),C=e(86735),t=e(67294),E=e(5017),oe=e(21),N=e(15577),c=e(45697),W=e(36021),u=e(91088),P=e(26819),n=e(47402),a=e.n(n),w=e(96486),F=e.n(w),le=(0,C.Z)([`
  flex: 1;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  .welcomeImg {
    height: 100px;
  }
  h2 {
    font-size: 32px;
  }
  & > p {
    color: #333;
  }
  .introWrap {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .introItem {
    width: 250px;
    height: 266px;
    padding: 40px 32px 56px 32px;
    background-color: #fff;
    border: 1px solid #eceef1;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12);
    }
    &:nth-child(2) {
      margin: 0 32px;
    }
    .iconWrap {
      font-size: 40px;
    }
    .title {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .desc {
      margin-top: 8px;
      color: #757575;
    }
  }
`],[`
  flex: 1;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  .welcomeImg {
    height: 100px;
  }
  h2 {
    font-size: 32px;
  }
  & > p {
    color: #333;
  }
  .introWrap {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .introItem {
    width: 250px;
    height: 266px;
    padding: 40px 32px 56px 32px;
    background-color: #fff;
    border: 1px solid #eceef1;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12);
    }
    &:nth-child(2) {
      margin: 0 32px;
    }
    .iconWrap {
      font-size: 40px;
    }
    .title {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .desc {
      margin-top: 8px;
      color: #757575;
    }
  }
`]),ie=E.ZP.div(le);function ae(x){var T=x.projectId,Ie=F().find(md.global.Account.projects,{projectId:T}),K=!F().get(Ie,"cannotCreateApp"),L=[{type:"create",icon:"addapplication2",iconColor:"#2196f3",title:_l("\u521B\u5EFA\u7A7A\u767D\u5E94\u7528"),desc:_l("\u4ECE\u5934\u5F00\u59CB\u521B\u9020\u60A8\u81EA\u5DF1\u7684\u5E94\u7528"),key:"addAppIcon"},{icon:"custom_store",iconColor:"#FAAF55",title:_l("\u4ECE\u5E94\u7528\u5E93\u5B89\u88C5"),desc:_l("\u5B89\u88C5\u5E94\u7528\u5E93\u4E2D\u73B0\u6210\u7684\u5F00\u7BB1\u6A21\u677F\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u6309\u9700\u4FEE\u6539"),href:"/app/lib?projectId="+T,key:"installFromLib"},{type:"excel_create",icon:"new_excel",iconColor:"#78B84C",title:_l("\u4ECEExcel\u521B\u5EFA\u5E94\u7528"),desc:_l("\u4E0A\u4F20Excel\u6587\u4EF6\u521B\u5EFA\u60A8\u7684\u5E94\u7528")}].filter(function(O){return O.key==="installFromLib"?!md.global.SysSettings.hideTemplateLibrary:!0}),_e=(0,t.useState)(!1),pe=(0,A.Z)(_e,2),we=pe[0],be=pe[1];return t.createElement(ie,null,t.createElement("div",{className:"welcomeImg"},t.createElement("img",{src:a()})),t.createElement("h2",null,_l("\u6B22\u8FCE\u4F7F\u7528")),K&&t.createElement(t.Fragment,null,t.createElement("p",{className:"Font17"},_l("\u73B0\u5728\uFF0C\u4ECE\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u5F00\u59CB\u5427")),t.createElement("div",{className:"introWrap"},L.map(function(O){var Q=O.type,ve=O.icon,Ge=O.iconColor,on=O.title,cn=O.desc,$e=O.href;return t.createElement("div",{className:"introItem",onClick:function(){if(Q==="excel_create"){be(!0);return}if(Q==="create"){var en=(0,N.LK)(T);u.Z.createApp({projectId:T,name:_l("\u672A\u547D\u540D\u5E94\u7528"),icon:"0_lego",iconColor:en[F().random(0,en.length-1)],permissionType:200}).then(function(vn){switch(vn.state){case 1:var ln=vn.data||{};(0,W.T8)("/app/"+ln.id);break;case 3:alert(_l("\u76EE\u6807\u5206\u7EC4\u4E0D\u5B58\u5728\uFF01"),2);break;case 4:alert(_l("\u6CA1\u6709\u521B\u5EFA\u6743\u9650\uFF01"),2);break;default:alert(_l("\u65B0\u5EFA\u5E94\u7528\u5931\u8D25\uFF01"),2);break}});return}if(Q==="solution"){(0,W.T8)($e,"__blank");return}(0,W.T8)($e)}},t.createElement("div",{className:"iconWrap"},t.createElement("i",{className:"icon-"+ve,style:{color:Ge}})),t.createElement("div",{className:"title"},on,Q==="solution"&&t.createElement("i",{className:"icon-launch Font12",style:{verticalAlign:"super"}})),t.createElement("div",{className:"desc"},cn))}))),we&&t.createElement(P.Z,{projectId:T,onCancel:function(){return be(!1)},createType:"app"}))}var je=e(25273),Ce=e(88106),p=e(51197),l=e(52945),i=e.n(l),f=e(70801),g=e(95742),b=e(93967),I=e.n(b),U=e(42541),ce=e(77863),fe=e(68437),He=e(85315),Ye=(0,C.Z)([""],[""]),Xe=(0,C.Z)([`
  display: flex;
  margin-bottom: 26px;
`],[`
  display: flex;
  margin-bottom: 26px;
`]),D=(0,C.Z)([`
  `,`
  height: 17px;
  border-radius: 17px;
  background-color: #f5f5f5;
`],[`
  `,`
  height: 17px;
  border-radius: 17px;
  background-color: #f5f5f5;
`]),xe=E.ZP.div(Ye),te=E.ZP.div(Xe),M=E.ZP.div(D,function(x){var T=x.width;return T?"width: "+T+"px;":"width: 100%;"});function o(x){var T=x.repeat,Ie=T===void 0?3:T;return[].concat((0,He.Z)(new Array(Ie))).map(function(K,L){return t.createElement(xe,null,t.createElement(te,null,t.createElement(M,{width:64}),t.createElement("div",{className:"flex"}),t.createElement(M,{width:17})),t.createElement(te,null,t.createElement(M,null)),t.createElement(te,null,t.createElement(M,null)))})}var B=e(88555),Qe=e(6100),Fe=e(47426),Te=e(31261),Cn=e(35710),sn=(0,C.Z)([`
  .ming.Radio {
    flex: 1;
  }
`],[`
  .ming.Radio {
    flex: 1;
  }
`]),un=(0,C.Z)([`
  display: flex;
  padding: 8px 0 8px 12px;
  height: 36px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  &.focus {
    border-color: #2196f3;
  }
  input {
    flex: 1;
    border: none;
  }
  .changeIconBtn {
    cursor: pointer;
    padding: 0 10px;
    border-left: 1px solid #ddd;
    font-size: 0px;
  }
`],[`
  display: flex;
  padding: 8px 0 8px 12px;
  height: 36px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  &.focus {
    border-color: #2196f3;
  }
  input {
    flex: 1;
    border: none;
  }
  .changeIconBtn {
    cursor: pointer;
    padding: 0 10px;
    border-left: 1px solid #ddd;
    font-size: 0px;
  }
`]),mn=(0,E.ZP)(Fe.ZP)(sn),Mn=E.ZP.div(un);function En(x){var T=x.projectId,Ie=x.icon,K=x.name,L=x.setIcon,_e=x.setName,pe=(0,t.useRef)(),we=(0,t.useState)(),be=(0,A.Z)(we,2),O=be[0],Q=be[1];return(0,t.useEffect)(function(){pe.current&&pe.current.focus()},[]),t.createElement(Mn,null,t.createElement("input",{ref:pe,type:"text",value:K,placeholder:_l("\u4F8B\uFF1A\u4EA7\u54C1\u7BA1\u7406"),onChange:function(Ge){return _e(Ge.target.value.slice(0,32))}}),t.createElement(Te.Z,{action:["click"],popupVisible:O,popupAlign:{points:["tr","br"],offset:[0,10]},popup:t.createElement(Cn.Z,{className:"Relative",hideColor:!0,hideInput:!0,projectId:T,icon:Ie,name:Ie,iconColor:"#757575",onModify:function(Ge){L(Ge.icon),Ge.closeTrigger!==!1&&Q(!1)}}),onPopupVisibleChange:Q},t.createElement("span",null,t.createElement(Qe.Z,{className:"changeIconBtn",size:18,url:md.global.FileStoreConfig.pubHost.replace(/\/$/,"")+"/customIcon/"+Ie+".svg",fill:"#757575"}))))}En.propTypes={projectId:c.string,name:c.string,icon:c.string,setName:c.func,setIcon:c.func};function ke(x){var T=x.isAdmin,Ie=x.type,K=Ie===void 0?"add":Ie,L=x.projectId,_e=x.onChange,pe=_e===void 0?function(){}:_e,we=x.onCancel,be=we===void 0?function(){}:we,O=(0,t.useState)(x.groupType||0),Q=(0,A.Z)(O,2),ve=Q[0],Ge=Q[1],on=(0,t.useState)(x.name),cn=(0,A.Z)(on,2),$e=cn[0],hn=cn[1],en=(0,t.useState)(x.icon||"8_4_folder"),vn=(0,A.Z)(en,2),ln=vn[0],Pn=vn[1];return t.createElement(B.Z,{visible:!0,width:480,bodyStyle:{padding:"16px 24px"},onOk:function(){if(!($e||"").trim()){alert(_l("\u8BF7\u586B\u5199\u540D\u79F0"),3);return}pe({name:$e,groupType:ve,icon:ln})},onCancel:be},t.createElement("div",{className:"Font17 Bold"},K==="add"?_l("\u6DFB\u52A0\u5206\u7EC4"):_l("\u7F16\u8F91\u5206\u7EC4")),t.createElement("div",{className:"Font14 mTop20 mBottom8"},_l("\u540D\u79F0")),t.createElement(En,{projectId:L,icon:ln,setIcon:Pn,name:$e,setName:hn}),t.createElement("div",{className:"Font14 mTop24 mBottom8"},_l("\u4F7F\u7528\u8303\u56F4")),t.createElement(mn,{className:"mBottom20",data:[{text:_l("\u4E2A\u4EBA"),value:0},{text:_l("\u7EC4\u7EC7"),value:1,disabled:!T}],checkedValue:Number(ve),onChange:Ge,size:"small"}))}ke.propTypes={isAdmin:c.bool,projectId:c.string,type:c.string,name:c.string,groupType:c.number,icon:c.string,onChange:c.func,onCancel:c.func};var Je=e(26581),an=e(33867),ye=e(56171),Ue=e(86853),Me=e(56002),Re=(0,C.Z)([`
  display: block;
  &.draggingItem > div {
    background: #f1f1f1;
  }
  &.isDragging:not(.draggingItem) {
    transition: ease 0.3s;
  }
`],[`
  display: block;
  &.draggingItem > div {
    background: #f1f1f1;
  }
  &.isDragging:not(.draggingItem) {
    transition: ease 0.3s;
  }
`]),Ae=(0,C.Z)([`
  display: block;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  height: 36px;
  padding: 0 14px;
  margin: 0 -14px;
  border-radius: 6px;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  .name {
    margin-right: 4px;
  }
  .operate {
    display: none;
  }
  .num {
    min-width: 18px;
    text-align: center;
  }
  .star {
    &.isMarked,
    &:hover {
      color: #ffc400 !important;
    }
  }
  .visibleStar {
    color: #ffc400;
  }
  &.hover:not(.isDragging),
  &:hover:not(.isDragging) {
    .name {
      max-width: 88px;
    }
    .operate {
      display: flex;
    }
    .num {
      display: none;
    }
    .visibleStar {
      display: none;
    }
  }
  &.hover:not(.isDragging):not(.active),
  &:hover:not(.isDragging):not(.active) {
    background-color: #f5f5f5;
  }
  &.active {
    color: `,`;
    background-color: `,`;
    .fontIcon {
      color: `,`;
    }
    svg {
      fill: `,`;
    }
    .name {
      font-weight: 500;
    }
  }
  > div {
    height: 100%;
  }
`],[`
  display: block;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  height: 36px;
  padding: 0 14px;
  margin: 0 -14px;
  border-radius: 6px;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  .name {
    margin-right: 4px;
  }
  .operate {
    display: none;
  }
  .num {
    min-width: 18px;
    text-align: center;
  }
  .star {
    &.isMarked,
    &:hover {
      color: #ffc400 !important;
    }
  }
  .visibleStar {
    color: #ffc400;
  }
  &.hover:not(.isDragging),
  &:hover:not(.isDragging) {
    .name {
      max-width: 88px;
    }
    .operate {
      display: flex;
    }
    .num {
      display: none;
    }
    .visibleStar {
      display: none;
    }
  }
  &.hover:not(.isDragging):not(.active),
  &:hover:not(.isDragging):not(.active) {
    background-color: #f5f5f5;
  }
  &.active {
    color: `,`;
    background-color: `,`;
    .fontIcon {
      color: `,`;
    }
    svg {
      fill: `,`;
    }
    .name {
      font-weight: 500;
    }
  }
  > div {
    height: 100%;
  }
`]),ze=(0,C.Z)([`
  position: relative !important;
  overflow: auto;
  padding: 6px 0 !important;
  width: 200px !important;
  .ming.MenuItem.red .Item-content {
    color: #f44336 !important;
    .Icon {
      color: #f44336 !important;
    }
    &:not(.disabled):hover {
      background: #f51744 !important;
      color: #fff !important;
      .Icon {
        color: #fff !important;
      }
    }
  }
`],[`
  position: relative !important;
  overflow: auto;
  padding: 6px 0 !important;
  width: 200px !important;
  .ming.MenuItem.red .Item-content {
    color: #f44336 !important;
    .Icon {
      color: #f44336 !important;
    }
    &:not(.disabled):hover {
      background: #f51744 !important;
      color: #fff !important;
      .Icon {
        color: #fff !important;
      }
    }
  }
`]),De=(0,C.Z)([`
  .Item-content {
    padding-left: 47px !important;
  }
`],[`
  .Item-content {
    padding-left: 47px !important;
  }
`]),Be=(0,C.Z)([`
  display: inline-flex;
  border-radius: 24px;
  justify-content: center;
  width: 24px;
  height: 24px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`],[`
  display: inline-flex;
  border-radius: 24px;
  justify-content: center;
  width: 24px;
  height: 24px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`]),Oe=(0,C.Z)([`
  font-size: 0px;
  margin-right: 8px;
`],[`
  font-size: 0px;
  margin-right: 8px;
`]),yn=(0,E.ZP)(Me.Z)(Re),Ve=E.ZP.div(Ae,function(x){var T=x.themeColor;return T},function(x){var T=x.activeColor;return T},function(x){var T=x.themeColor;return T+" !important"},function(x){var T=x.themeColor;return T}),ue=(0,E.ZP)(Ue.Z)(ze),J=(0,E.ZP)(ye.Z)(De),Z=(0,E.ZP)(U.EK)(Be),Ze=(0,E.ZP)(Qe.Z)(Oe);function qe(x){var T=x.isAdmin,Ie=x.isDragging,K=x.activeGroupId,L=x.projectId,_e=x.className,pe=x.active,we=x.itemType,be=x.id,O=x.to,Q=x.groupType,ve=x.fontIcon,Ge=x.icon,on=x.iconUrl,cn=x.name,$e=x.count,hn=x.isMarked,en=x.onClick,vn=en===void 0?function(){}:en,ln=x.onEdit,Pn=ln===void 0?function(){}:ln,fn=x.onDelete,An=fn===void 0?function(){}:fn,gn=x.onMark,Sn=gn===void 0?function(){}:gn,kn=x.dashboardColor,We=(0,t.useState)(),se=(0,A.Z)(We,2),r=se[0],d=se[1],y=t.createElement(Ve,{themeColor:kn.themeColor,activeColor:kn.activeColor,className:I()(_e,{hover:r,isDragging:Ie,active:pe||K&&K===be&&(location.hash.startsWith("#star")?we==="star":we!=="star")}),onClick:vn},t.createElement(U.EK,null,ve?t.createElement("i",{className:"fontIcon icon icon-"+ve+" Font16 Gray_75 mRight8"}):t.createElement(Ze,{size:18,url:on||md.global.FileStoreConfig.pubHost.replace(/\/$/,"")+"/customIcon/"+Ge+".svg",fill:"#757575"}),t.createElement("span",{className:"name ellipsis"},cn),!F().includes(["static"],we)&&t.createElement(t.Fragment,null,t.createElement(U.Xp,null),t.createElement(U.EK,{className:"operate stopPropagation",onClick:function(m){m.stopPropagation(),m.preventDefault()}},(Q===0||Q===1&&T)&&we!=="star"&&t.createElement(Te.Z,{popupVisible:r,onPopupVisibleChange:d,action:["click"],popupAlign:{points:["tl","bl"],overflow:{adjustY:!0}},popup:t.createElement(ue,null,t.createElement(J,{onClick:function(){d(!1),Pn(be)},icon:t.createElement(an.Z,{icon:"edit",className:"Font18 mLeft5"})},_l("\u7F16\u8F91")),t.createElement(J,{className:"red",icon:t.createElement(an.Z,{icon:"trash",className:"Font18 mLeft5"}),onClick:function(){d(!1),An(be,Q)}},_l("\u5220\u9664")))},t.createElement(Z,null,t.createElement("i",{className:"icon icon-more_horiz Font18 Gray_9e Hand"}))),t.createElement(Je.Z,{disableAnimation:!0,popupPlacement:"right",text:t.createElement("span",null,hn?_l("\u53D6\u6D88\u6807\u661F"):_l("\u6807\u661F"))},t.createElement("i",{className:I()("star icon icon-"+(hn?"task-star":"star_outline")+" Font18 Gray_9e mLeft5 stopPropagation",{isMarked:hn}),onClick:function(){return Sn(be)}}))),we!=="star"&&$e!==0&&t.createElement("span",{className:"num Gray_9e"},$e),we!=="star"&&hn&&t.createElement("i",{className:I()("visibleStar icon-task-star Font18  mLeft8")}))));return be||O?t.createElement(yn,{className:I()({isDragging:Ie}),to:O||"/app/my/group/"+L+"/"+Q+"/"+be+(we==="star"?"#star":"")},y):y}qe.propTypes={isAdmin:c.bool,className:c.string,itemType:c.string,id:c.string,groupType:c.number,icon:c.string,fontIcon:c.string,iconUrl:c.string,name:c.string,count:c.number,isMarked:c.bool,onClick:c.func,onEdit:c.func,onDelete:c.func,onMark:c.func};var Dn=(0,C.Z)([`
  width: 238px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  transition: width 0.2s;
  .header {
    justify-content: space-between;
    font-weight: 500;
    margin-right: -12px;
  }
  .title {
    font-size: 20px;
  }
  .upgradeIcon {
    color: #fcb400;
    font-size: 16px;
    margin-left: 6px;
  }
  &:not(.isFolded) {
    overflow: hidden;
  }
  &.isFolded {
    width: 0px;
  }
`],[`
  width: 238px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  transition: width 0.2s;
  .header {
    justify-content: space-between;
    font-weight: 500;
    margin-right: -12px;
  }
  .title {
    font-size: 20px;
  }
  .upgradeIcon {
    color: #fcb400;
    font-size: 16px;
    margin-left: 6px;
  }
  &:not(.isFolded) {
    overflow: hidden;
  }
  &.isFolded {
    width: 0px;
  }
`]),Gn=(0,C.Z)([`
  width: 238px;
  padding: 0px 38px;
`],[`
  width: 238px;
  padding: 0px 38px;
`]),Yn=(0,C.Z)([`
  flex: 1;
`],[`
  flex: 1;
`]),_n=(0,C.Z)([`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  z-index: 2;
  &:hover {
    background: #f5f5f5;
  }
`],[`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  z-index: 2;
  &:hover {
    background: #f5f5f5;
  }
`]),Nn=E.ZP.div(Dn),Ln=E.ZP.div(Gn),at=E.ZP.div(Yn),qn=(0,E.ZP)(U.Lb)(_n);function rt(x){return{star:1,project:2,personal:3}[x]}var ot=(0,g.W8)(function(x){return t.createElement(qe,x)}),$n=(0,g.JN)(function(x){var T=x.isAdmin,Ie=x.projectId,K=x.activeGroupId,L=x.groups,_e=x.item,pe=x.isDragging,we=x.setIsEditingGroupId,be=x.actions,O=x.dashboardColor;return t.createElement("div",null,!!_e.groups.length&&_e.groups.map(function(Q,ve){return t.createElement(ot,(0,k.default)({isAdmin:T,key:Q.id,index:ve,itemType:_e.type},{dashboardColor:O,isDragging:pe,projectId:Ie,activeGroupId:K,id:Q.id,groupType:Q.groupType,icon:Q.icon,iconUrl:Q.iconUrl,name:Q.name,count:Q.count,isMarked:Q.isMarked,onEdit:we,onDelete:function(on,cn){f.Z.confirm({title:_l('\u5220\u9664\u5206\u7EC4"%0"',Q.name),description:_l("\u4EC5\u5220\u9664\u5206\u7EC4\uFF0C\u5206\u7EC4\u4E0B\u7684\u5E94\u7528\u4E0D\u4F1A\u88AB\u5220\u9664"),buttonType:"danger",onOk:function(){be.deleteGroup({id:on,groupType:cn,projectId:Ie,cb:function(en){en?alert(_l("\u5220\u9664\u5206\u7EC4\u5931\u8D25"),3):(K===on&&((0,W.T8)("/app/my",!1,!0),be.loadAppAndGroups({projectId:Ie,noGroupsLoading:!0})),alert(_l("\u5220\u9664\u5206\u7EC4\u6210\u529F")))}})}})},onMark:function(on){be.markGroup({id:on,isMarked:!Q.isMarked,groupType:Q.groupType,projectId:Ie})}}))}))});function In(x){var T=x.isAdmin,Ie=x.loading,K=x.activeGroupId,L=x.projectId,_e=x.currentProject,pe=x.markedGroup,we=x.activeGroup,be=x.groups,O=be===void 0?[]:be,Q=x.actions,ve=x.dashboardColor,Ge=(0,t.useState)(),on=(0,A.Z)(Ge,2),cn=on[0],$e=on[1],hn=(0,t.useState)({}),en=(0,A.Z)(hn,2),vn=en[0],ln=en[1],Pn=(0,t.useState)(localStorage.getItem("homeGroupsIsFolded")==="1"),fn=(0,A.Z)(Pn,2),An=fn[0],gn=fn[1],Sn=(0,t.useState)(),kn=(0,A.Z)(Sn,2),We=kn[0],se=kn[1],r=(0,t.useState)(),d=(0,A.Z)(r,2),y=d[0],s=d[1],m=(0,t.useState)(),h=(0,A.Z)(m,2),q=h[0],H=h[1],j=_e.licenseType===0,z=F().find(O,{id:We}),R=[{name:_l("\u661F\u6807"),type:"star",groups:pe},{name:_l("\u4E2A\u4EBA"),type:"personal",groups:O.filter(function(v){return v.groupType===0})},{name:_l("\u7EC4\u7EC7"),type:"project",groups:O.filter(function(v){return v.groupType===1})}].map(function(v){return(0,k.default)({},v,{groups:F().sortBy(v.groups,function(Y){return(vn[v.type]||[]).indexOf(Y.id)})})}),S=(0,N.XH)(L,ce.UU.recycle),G=t.createElement(qn,{className:An?"mLeft24":"",onClick:function(){gn(!An),safeLocalStorageSetItem("homeGroupsIsFolded",An?"":"1")}},t.createElement("i",{className:"expandIcon Right Hand Font20 Gray_75 icon "+(An?"icon-menu":"icon-menu_left")}));return Ie&&!An?t.createElement(Nn,null,t.createElement(Ln,null,t.createElement(o,null))):t.createElement(Nn,{className:I()({isFolded:An})},q&&t.createElement(fe.Z,{isHomePage:!0,projectId:L,onCancel:function(){return H(!1)},onRestore:function(){Q.loadAppAndGroups(i()({projectId:L,noGroupsLoading:!0},we?{activeGroupType:we.groupType,activeGroupId:we.id}:{}))}}),An&&G,!An&&t.createElement(t.Fragment,null,t.createElement(Ln,null,t.createElement(U.EK,{className:"header"},t.createElement("span",{className:"title"},_l("\u5E94\u7528")),G),t.createElement(qe,{dashboardColor:ve,itemType:"static",className:"mTop10",fontIcon:"grid_view",to:"/app/my",active:!K,name:_l("\u6211\u7684\u5E94\u7528"),onClick:function(){Q.loadAppAndGroups({projectId:L,noGroupsLoading:!0}),(0,W.T8)("/app/my")}}),S&&t.createElement(qe,{dashboardColor:ve,itemType:"static",fontIcon:"knowledge-recycle",name:t.createElement("span",null,_l("\u56DE\u6536\u7AD9"),j&&t.createElement(p.Z,null)),onClick:function(){S==="2"?(0,N.j0)(L,ce.UU.recycle):H(!0)}}),t.createElement(U.EK,{className:"header mTop20"},t.createElement("span",{className:"Font15"},_l("\u5206\u7EC4")),t.createElement(qn,{className:"mRight5",onClick:function(){return s(!0)}},t.createElement("i",{className:"Font24 Gray_9d Hand icon icon-add"})))),t.createElement(at,null,t.createElement(je.Z,null,t.createElement(Ln,{className:"pBottom25"},R.filter(function(v){return v.groups&&v.groups.length}).map(function(v,Y){return t.createElement("div",{key:Y,className:"mTop20"},t.createElement("div",{className:"title Gray_9e Font12 mBottom6"},v.name),v.groups&&!!v.groups.length&&t.createElement($n,(0,k.default)({isAdmin:T,actions:Q,projectId:L,activeGroupId:K,groups:O,item:v,isDragging:cn,setIsEditingGroupId:se,dashboardColor:ve},{axis:"y",hideSortableGhost:!0,helperClass:"draggingItem",transitionDuration:0,distance:3,onSortStart:function(){return $e(!0)},onSortEnd:function(ne){var Pe=ne.oldIndex,X=ne.newIndex;$e(!1);var V=(0,g.Rp)(v.groups,Pe,X);ln(function(Ne){return(0,k.default)({},Ne,(0,Ce.default)({},v.type,V.map(function(Ke){return Ke.id})))}),u.Z.editGroupSort({projectId:L,ids:V.map(function(Ne){return Ne.id}),sortType:rt(v.type)}),v.type!=="personal"&&Q.updateGroupSorts(V,v.type)}})))}))))),(We||y)&&t.createElement(ke,(0,k.default)({isAdmin:T,projectId:L},z?{name:z.name,icon:z.icon,groupType:z.groupType}:{},{type:y?"add":"edit",onChange:function(Y){var ee=Y.name,ne=Y.icon,Pe=Y.groupType;y?Q.addGroup({projectId:L,name:ee,icon:ne,groupType:Pe,cb:function(V){V?alert({2:_l("\u65B0\u5EFA\u5206\u7EC4\u5931\u8D25\uFF0C\u5206\u7EC4\u540D\u91CD\u590D"),3:_l("\u65B0\u5EFA\u5206\u7EC4\u5931\u8D25\uFF0C\u5206\u7EC4\u8D85\u4E0A\u9650"),4:_l("\u65B0\u5EFA\u5206\u7EC4\u5931\u8D25\uFF0C\u65E0\u6743\u9650\u64CD\u4F5C")}[String(V)]||_l("\u65B0\u5EFA\u5206\u7EC4\u5931\u8D25"),3):(s(!1),alert(_l("\u65B0\u5EFA\u5206\u7EC4\u6210\u529F")))}}):Q.editGroup({id:We,projectId:L,name:ee,icon:ne,groupType:Pe,cb:function(V){V===1?(se(void 0),alert(_l("\u66F4\u65B0\u6210\u529F")),K&&Pe!==z.groupType&&(0,W.T8)("/app/my/group/"+L+"/"+Pe+"/"+We)):alert({2:_l("\u66F4\u65B0\u5206\u7EC4\u5931\u8D25\uFF0C\u5206\u7EC4\u540D\u91CD\u590D"),3:_l("\u66F4\u65B0\u5206\u7EC4\u5931\u8D25\uFF0C\u5206\u7EC4\u8D85\u4E0A\u9650"),4:_l("\u66F4\u65B0\u5206\u7EC4\u5931\u8D25\uFF0C\u65E0\u6743\u9650\u64CD\u4F5C")}[String(V)]||_l("\u66F4\u65B0\u5206\u7EC4\u5931\u8D25"),3)}})},onCancel:function(){s(!1),se(void 0)}})))}In.propTypes={isAdmin:c.bool,loading:c.bool,activeGroupId:c.string,projectId:c.string,currentProject:(0,c.shape)({}),activeGroup:(0,c.shape)({}),groups:(0,c.arrayOf)((0,c.shape)({}))};var Le=e(7472),dn=e(50263),rn=e(54644),Wn=(0,C.Z)([`
  display: flex;
  flex: 1;
  background: #fff;
`],[`
  display: flex;
  flex: 1;
  background: #fff;
`]),Vn=E.ZP.div(Wn);function Hn(x){var T=F().get(x,"match.params.groupId"),Ie=F().get(x,"match.params.groupType"),K=x.currentProject,L=x.projectId,_e=x.dashboardColor,pe=(0,t.useRef)({}),we=(0,t.useReducer)(dn.I6,dn.E3),be=(0,A.Z)(we,2),O=be[0],Q=be[1],ve=(0,t.useMemo)(function(){return new dn.Xl({dispatch:Q,state:O})},[O]),Ge=O.origin,on=Ge===void 0?{}:Ge,cn=O.noApps,$e=O.groupsLoading,hn=O.appsLoading,en=O.keywords,vn=O.groups,ln=O.markedGroup,Pn=ln===void 0?[]:ln,fn=O.apps,An=fn===void 0?[]:fn,gn=O.markedApps,Sn=gn===void 0?[]:gn,kn=O.externalApps,We=kn===void 0?[]:kn,se=O.aloneApps,r=se===void 0?[]:se,d=O.activeGroupApps,y=d===void 0?[]:d,s=O.recentApps,m=s===void 0?[]:s,h=O.activeGroup,q=K&&(K.isSuperAdmin||K.isProjectAppManager);function H(j){pe.current.projectLoaded=!0,ve.updateKeywords(""),ve.loadAppAndGroups((0,k.default)({projectId:j},location.pathname!=="/app/my"?{activeGroupId:T,activeGroupType:Ie}:{}))}return(0,t.useEffect)(function(){pe.current.projectLoaded&&T&&(ve.updateKeywords(""),ve.loadGroup({activeGroupId:T,activeGroupType:Ie,projectId:L}))},[T]),(0,t.useEffect)(function(){pe.current.projectLoaded&&location.pathname!=="/app/my"&&(0,W.T8)("/app/my",!1,!0),H(L)},[L]),!($e||hn)&&cn&&L&&L!=="external"?t.createElement(ae,{projectId:L}):t.createElement(Vn,null,L&&L!=="external"&&t.createElement(In,{isAdmin:q,loading:$e,activeGroupId:T,activeGroup:T&&h,projectId:L,currentProject:K,markedGroup:Pn,groups:vn,actions:ve,dashboardColor:_e}),t.createElement(Le.Z,{setting:on.homeSetting,isAdmin:q,loading:$e||hn,keywords:en,activeGroup:T&&h,actions:ve,projectId:L,currentProject:K,markedGroup:Pn,markedApps:(0,rn.xo)(Sn,en),myApps:(0,rn.xo)(An,en),externalApps:(0,rn.xo)(We,en),aloneApps:(0,rn.xo)(r,en),activeGroupApps:(0,rn.xo)(y,en),recentApps:(0,rn.xo)(m,en),groups:vn,dashboardColor:_e}))}Hn.propTypes={projectId:c.string,currentProject:(0,c.shape)({})};const ct=(0,oe.Z)(Hn);var ut=e(85105),it=e.n(ut),mt=e(99663),lt=e(22600),pt=e(49135),st=e(93196),Pt=e(42723),ft=e(24107),Tt=e.n(ft),gt,dt,kt={account:_l("\u4E2A\u4EBA\u5E94\u7528"),top:_l("\u7F6E\u9876\u5E94\u7528")},St=function(T){var Ie=T.onSetTopClick,K=T.appId,L=T.projectId,_e=T.appName,pe=T.avatar,we=T.isTop,be=T.settingUrl,O=T.oauthUrl;return t.createElement("div",{className:"thirdAppItem",onClick:function(){return window.open(O)}},t.createElement("div",{className:"logo"},t.createElement("img",{src:pe||Tt(),alt:_e})),t.createElement("div",{className:"name"},_e),t.createElement("div",{className:"operatorIconWrap"},t.createElement("span",{"data-tip":we?_l("\u53D6\u6D88\u7F6E\u9876"):_l("\u7F6E\u9876")},t.createElement(an.Z,{icon:"set_top",onClick:function(ve){ve.stopPropagation(),Ie(!we,{appId:K,projectId:L})},className:I()({active:we})})),t.createElement("span",{"data-tip":_l("\u8BBE\u7F6E")},t.createElement(an.Z,{icon:"settings",onClick:function(ve){ve.stopPropagation(),window.open(be)}}))))},zn=(dt=gt=function(x){(0,st.default)(T,x);function T(){return(0,mt.default)(this,T),(0,pt.default)(this,(T.__proto__||it()(T)).apply(this,arguments))}return(0,lt.default)(T,[{key:"render",value:function(){var K=this.props,L=K.data,_e=L.apps,pe=_e===void 0?[]:_e,we=L.companyName,be=L.type,O=be===void 0?"":be,Q=(0,Pt.Z)(K,["data"]);return t.createElement("div",{className:"thirdAppGroupWrap"},t.createElement("div",{className:"title"},we||kt[O]),t.createElement("div",{className:"thirdAppItemWrap"},pe.map(function(ve,Ge){return t.createElement(St,(0,k.default)({key:ve.appId+"-"+Ge},Q,ve))})))}}]),T}(t.Component),gt.propTypes={data:(0,c.shape)({apps:c.array,companyName:c.string,type:c.string})},dt),At=e(27884),ht,Jn,Ee=(Jn=ht=function(x){(0,st.default)(T,x);function T(){var Ie,K,L,_e;(0,mt.default)(this,T);for(var pe=arguments.length,we=Array(pe),be=0;be<pe;be++)we[be]=arguments[be];return _e=(K=(L=(0,pt.default)(this,(Ie=T.__proto__||it()(T)).call.apply(Ie,[this].concat(we))),L),L.state={data:{},isLoading:!0},L.getData=function(){At.Z.getAccountApps().then(function(O){var Q=O.data;L.setState({data:Q,isLoading:!1})})},L.handleSetTopClick=function(O,Q){At.Z.updateAccountAppTop({isTop:O,apps:[Q]}).then(function(ve){ve&&L.getData()})},L.getAppsAmount=function(){var O=L.state.data,Q=O.top,ve=O.account,Ge=O.projects},L.renderApps=function(){var O=L.state.data,Q=O.top,ve=O.account,Ge=O.projects,on=Q.length+ve.apps.length+Ge.length;return on?t.createElement(t.Fragment,null,Q.length>0&&t.createElement(zn,{onSetTopClick:L.handleSetTopClick,data:{type:"top",apps:Q}}),ve.length>0&&t.createElement(zn,{onSetTopClick:L.handleSetTopClick,data:{type:"account",apps:ve}}),Ge&&Ge.map(function(cn){return t.createElement(zn,{key:cn.projectId,onSetTopClick:L.handleSetTopClick,data:cn})})):t.createElement("div",{className:"emptyWrap"},t.createElement("div",{className:"emptyIconWrap"},t.createElement(an.Z,{icon:"sidebar_application_library"})),t.createElement("div",{className:"explain"},_l("\u6682\u65E0\u7B2C\u4E09\u65B9\u5E94\u7528")))},K),(0,pt.default)(L,_e)}return(0,lt.default)(T,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var K=this.props.onCancel,L=this.state.isLoading;return t.createElement(f.Z,{visible:!0,className:"thirdAppDialog",title:t.createElement("div",{className:"thirdAppDialogHeader"},t.createElement("div",{className:"dialogTitle"},_l("\u7B2C\u4E09\u65B9\u5E94\u7528"))),footer:null,onCancel:K},L?t.createElement(re.Z,{className:"mTop10"}):t.createElement("div",{className:"thirdAppWrap"},this.renderApps()))}}]),T}(t.Component),ht.propTypes={onCancel:c.func},ht.defaultProps={onCancel:F().noop},Jn),tn=(0,C.Z)([`
  width: 220px;
  padding: 8px 0;
  background: #ffffff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
`],[`
  width: 220px;
  padding: 8px 0;
  background: #ffffff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
`]),wn=(0,C.Z)([`
  padding: 0 26px;
  margin: 5px 0;
  color: #9e9e9e;
`],[`
  padding: 0 26px;
  margin: 5px 0;
  color: #9e9e9e;
`]),et=(0,C.Z)([`
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 26px;
  color: #757575 !important;
  .icon {
    font-size: 20px;
    margin-right: 13px;
  }
  &:hover {
    background: #efefef;
  }
`],[`
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 26px;
  color: #757575 !important;
  .icon {
    font-size: 20px;
    margin-right: 13px;
  }
  &:hover {
    background: #efefef;
  }
`]),Mt=E.ZP.div(tn),ra=E.ZP.div(wn),wt=E.ZP.a(et);function oa(x){var T=x.openInNew,Ie=x.items;return t.createElement(Mt,null,Ie.map(function(K,L){return K.type==="title"?t.createElement(ra,null,K.title):t.createElement(wt,(0,k.default)({key:L,href:K.href||"",onClick:K.onClick?function(_e){_e.preventDefault(),K.onClick()}:F().noop},T||K.openInNew?{target:"_blank"}:{}),K.icon&&t.createElement("i",{className:"icon icon-"+K.icon,style:{color:K.color}}),t.createElement("span",{className:"ellipsis"},K.name||K.text))}))}oa.propTypes={openInNew:c.bool,items:(0,c.arrayOf)((0,c.shape)({}))};var ia=e(61465),la=(0,C.Z)([`
  overflow: hidden;
  background-color: `,`;
  transition: width 0.2s;
  width: 68px;
  &.isExpanded {
    width: 180px;
    .moduleEntry,
    .resourceEntry {
      flex-direction: row;
      justify-content: start;
      padding: 0 12px;
      height: 40px;
      .name {
        display: none;
      }
      .fullName {
        display: flex;
        align-items: center;
      }
    }
    .resourceEntry {
      width: 156px;
    }
    .expandBtn {
      justify-content: end;
    }
  }
`],[`
  overflow: hidden;
  background-color: `,`;
  transition: width 0.2s;
  width: 68px;
  &.isExpanded {
    width: 180px;
    .moduleEntry,
    .resourceEntry {
      flex-direction: row;
      justify-content: start;
      padding: 0 12px;
      height: 40px;
      .name {
        display: none;
      }
      .fullName {
        display: flex;
        align-items: center;
      }
    }
    .resourceEntry {
      width: 156px;
    }
    .expandBtn {
      justify-content: end;
    }
  }
`]),pa=(0,C.Z)([`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
`],[`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
`]),sa=(0,C.Z)([`
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  .fullName {
    display: none;
    margin-left: 8px;
    font-size: 14px;
  }
  &:hover {
    color: inherit;
    background: #fff;
  }
`],[`
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  .fullName {
    display: none;
    margin-left: 8px;
    font-size: 14px;
  }
  &:hover {
    color: inherit;
    background: #fff;
  }
`]),Kt=(0,C.Z)([""],[""]),da=(0,C.Z)([`
  margin: 8px 0;
  height: 48px;
  position: relative;
  .entryIcon {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.65);
  }
  .name {
    font-size: 12px;
  }
  .fullName {
    font-size: 14px;
  }
  .name {
    color: rgba(0, 0, 0, 0.4);
  }
  &.isExpanded {
    width: 164px;
  }
  &.active {
    .entryIcon,
    .fullName,
    .name {
      color: `,`;
    }
    background: `,`;
  }
`],[`
  margin: 8px 0;
  height: 48px;
  position: relative;
  .entryIcon {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.65);
  }
  .name {
    font-size: 12px;
  }
  .fullName {
    font-size: 14px;
  }
  .name {
    color: rgba(0, 0, 0, 0.4);
  }
  &.isExpanded {
    width: 164px;
  }
  &.active {
    .entryIcon,
    .fullName,
    .name {
      color: `,`;
    }
    background: `,`;
  }
`]),ca=(0,C.Z)([`
  flex: 1;
`],[`
  flex: 1;
`]),Ft=(0,C.Z)([`
  margin: 6px auto 0;
  width: 40px;
  height: 40px;
  .entryIcon {
    font-size: 20px;
  }
`],[`
  margin: 6px auto 0;
  width: 40px;
  height: 40px;
  .entryIcon {
    font-size: 20px;
  }
`]),Ot=(0,C.Z)([`
  position: relative;
  .count {
    cursor: pointer;
    color: #fff;
    position: absolute;
    right: 0px;
    top: -2px;
    border-radius: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    background-color: #ff0000;
    z-index: 1;
    &.isExpanded {
      right: 12px;
      top: 10px;
    }
    &.outed {
      width: auto;
      padding: 0 4px;
    }
  }
`],[`
  position: relative;
  .count {
    cursor: pointer;
    color: #fff;
    position: absolute;
    right: 0px;
    top: -2px;
    border-radius: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    background-color: #ff0000;
    z-index: 1;
    &.isExpanded {
      right: 12px;
      top: 10px;
    }
    &.outed {
      width: auto;
      padding: 0 4px;
    }
  }
`]),Et=[{id:"feed",icon:"dynamic-empty",text:_l("\u52A8\u6001"),color:"#2196f3",href:"/feed",key:1},{id:"task",icon:"task_basic_application",text:_l("\u4EFB\u52A1"),color:"#3cca8f",href:"/apps/task",key:2},{id:"calendar",icon:"sidebar_calendar",text:_l("\u65E5\u7A0B"),color:"#ff6d6c",href:"/apps/calendar/home",key:3},{id:"knowledge",icon:"sidebar_knowledge",text:_l("\u6587\u4EF6"),color:"#F89803",href:"/apps/kc/my",key:4},{id:"hr",icon:"hr_home",text:_l("\u4EBA\u4E8B"),color:"#607D8B",href:"/hr",key:5,openInNew:!0}],ua=E.ZP.div(la,function(x){var T=x.themeBgColor;return T}),Nt=E.ZP.div(pa),Lt=E.ZP.a(sa),ma=E.ZP.div(Kt),fa=(0,E.ZP)(Lt)(da,function(x){var T=x.themeColor;return T},function(x){var T=x.activeColor;return T}),ga=E.ZP.div(ca),ha=E.ZP.div(Kt),Qt=(0,E.ZP)(Lt)(Ft),xa=E.ZP.div(Ot),xt=[{type:"dashboard",icon:"home1",name:_l("\u5DE5\u4F5C\u53F0"),href:"/dashboard"},{type:"app",icon:"widgets",name:_l("\u5E94\u7528"),href:"/app/my"},{type:"favorite",icon:"star",name:_l("\u6536\u85CF"),fullName:_l("\u6536\u85CF"),href:"/favorite"},{type:"lib",icon:"custom_store",name:_l("\u5E94\u7528\u5E93%01000"),fullName:_l("\u5E94\u7528\u5E93%01012"),href:"/app/lib"},{type:"cooperation",icon:"cooperation",name:_l("\u534F\u4F5C%01001"),fullName:_l("\u534F\u4F5C%01013")},{type:"integration",icon:"hub",name:_l("\u96C6\u6210%01002"),fullName:_l("\u96C6\u6210\u4E2D\u5FC3%01014")},{type:"plugin",icon:"extension_black1",name:_l("\u63D2\u4EF6"),fullName:_l("\u63D2\u4EF6\u4E2D\u5FC3")}];function zt(x){var T=x.active,Ie=x.currentProject,K=Ie===void 0?{}:Ie,L=x.countData,_e=x.dashboardColor,pe=x.hasBgImg,we=(0,t.useState)(localStorage.getItem("homeNavIsExpanded")==="1"),be=(0,A.Z)(we,2),O=be[0],Q=be[1],ve=(0,t.useState)(),Ge=(0,A.Z)(ve,2),on=Ge[0],cn=Ge[1],$e=(0,t.useState)([]),hn=(0,A.Z)($e,2),en=hn[0],vn=hn[1],ln=K.projectId,Pn=Et.filter(function(We){return md.global.SysSettings.forbidSuites.indexOf(We.key)===-1&&(We.id!=="hr"||F().get(K,"isHrVisible"))}),fn=L?L.myProcessCount>99?"99+":L.myProcessCount:0,An=F().isEmpty((0,N.vo)(ln)),gn=F().get(F().find(md.global.Account.projects,function(We){return We.projectId===ln}),"allowPlugin");(0,t.useEffect)(function(){ia.Z.getSources({status:1}).then(function(We){var se=We.map(function(r){return{color:r.color,iconUrl:r.iconUrl,name:r.name,id:r.eventParams?"thirdPartyApp":r.id,href:r.linkParams?r.linkParams.url:null}});vn(se)})},[]);var Sn=function(se,r){if(An&&se.type==="favorite"||!gn&&se.type==="plugin")return"";var d=t.createElement(fa,{key:r,themeColor:_e.themeColor,activeColor:_e.activeColor,className:I()("moduleEntry",{active:T===se.type,libraryEntry:se.type==="lib",isExpanded:O}),href:se.type==="lib"?se.href+"?projectId="+ln:se.href,onClick:se.href?F().noop:function(y){if(se.type==="integration"){var s=localStorage.getItem("integrationUrl");(0,W.T8)("/integration/"+(s||""))}else if(se.type==="plugin"){var m=localStorage.getItem("pluginUrl");(0,W.T8)("/plugin/"+(m||""))}}},t.createElement("i",{className:"entryIcon icon icon-"+se.icon}),t.createElement("span",{className:"name"},se.name),t.createElement("span",{className:"fullName ellipsis"},se.fullName||se.name));switch(se.type){case"dashboard":return t.createElement(xa,{isExpanded:O},d,!!fn&&t.createElement("span",{className:I()("count",{isExpanded:O,outed:String(fn)==="99+"})},fn));case"cooperation":return t.createElement(Te.Z,{action:["hover"],popupAlign:{points:["tl","tr"],offset:[12,-4]},popup:t.createElement(oa,{items:Et.filter(function(y){return md.global.SysSettings.forbidSuites.indexOf(y.key)===-1&&(y.id!=="hr"||F().get(K,"isHrVisible"))})})},d);default:return d}},kn=function(se,r){var d=t.createElement(Qt,(0,k.default)({},se.href?{target:"_blank"}:{},{className:"resourceEntry",key:r,href:se.href,onClick:function(){se.href||se.id==="thirdPartyApp"&&cn(!0)}}),se.icon&&t.createElement("i",{className:"entryIcon icon icon-"+se.icon,style:{color:se.color}}),se.iconUrl&&t.createElement(Qe.Z,{size:"18",fill:se.color,url:se.iconUrl}),t.createElement("span",{className:"fullName ellipsis"},se.name));switch(!0){case(!O&&F().includes(["thirdPartyApp","integration"],se.id)):return t.createElement(Je.Z,{popupPlacement:"right",text:t.createElement("span",null,se.name)},d);default:return d}};return t.createElement(ua,{className:I()({isExpanded:O}),themeBgColor:pe?"unset":_e.bgColor},t.createElement(je.Z,null,t.createElement(Nt,null,on&&t.createElement(Ee,{onCancel:function(){return cn(!1)}}),t.createElement(ma,null,(Pn.length?xt:xt.filter(function(We){return We.type!=="cooperation"})).filter(function(We){return!(We.type==="cooperation"&&!Et.length)&&!(We.type==="lib"&&md.global.SysSettings.hideTemplateLibrary)&&!(We.type==="integration"&&md.global.SysSettings.hideIntegration)}).map(function(We,se){return Sn(We,se)})),t.createElement(ga,null),t.createElement(ha,null,en.map(function(We,se){return kn(We,se)}),t.createElement(Qt,{className:"resourceEntry expandBtn",onClick:function(){Q(!O),safeLocalStorageSetItem("homeNavIsExpanded",O?"":"1")}},t.createElement("span",{className:"fullName Font12 Gray_9e flex",style:{marginLeft:"25px"}},"v"+md.global.Config.Version),t.createElement("i",{className:"entryIcon icon "+(O?"icon-menu_left":"icon-menu_right")+" Gray_75"}))))))}var va=e(49090),Za=e.n(va),Aa=e(96841),Ea=e(25265),Ia=e(30381),ba=e.n(Ia),Vt,Ht,Jt=(Vt=(0,Aa.$j)(function(x){return{}}),Vt(Ht=function(x){(0,st.default)(T,x);function T(Ie){(0,mt.default)(this,T);var K=(0,pt.default)(this,(T.__proto__||it()(T)).call(this,Ie));K.reload=function(){var _e=localStorage.getItem("currentProjectId");_e!==K.state.projectId&&(location.href="/app/lib?projectId="+_e)};var L="https://alifile.mingdaocloud.com/open/js/applibrary.js?"+ba()().format("YYYYMMDD");return K.state={str:L,projectId:localStorage.getItem("currentProjectId")},K}return(0,lt.default)(T,[{key:"componentDidMount",value:function(){var K=this;$(".loadBoxForWarehouse").hide();var L=window,_e=L.md,pe=_e===void 0?{}:_e,we=pe.global,be=we===void 0?{}:we,O=be.Config,Q=O===void 0?{}:O,ve=be.Account,Ge=ve===void 0?{}:ve,on=Q.AppFileServer,cn=on===void 0?"":on,$e=Q.IsLocal,hn=Ge.accountId,en=hn===void 0?"":hn,vn=Ge.projects,ln=vn===void 0?[]:vn,Pn=Ge.avatar;N.uY.addListener("CHANGE_CURRENT_PROJECT",this.reload);var fn={upgradeVersionDialog:function(gn){var Sn=F().get(F().find(ln,function(kn){return kn.projectId===gn.projectId})||{},"licenseType");return(0,N.Yg)((0,k.default)({},gn,{isFree:Sn===0}))},MDAppLibraryId:"containerAppLib",getUrl:pe&&pe.global&&pe.global.SysSettings&&pe.global.SysSettings.templateLibraryTypes==="2"?__api_server__.main:"https://pd.mingdao.com/api/",installUrl:cn,accountId:en,projects:ln,isPrivate:$e,avatar:Pn,contactUser:function(gn){K.props.dispatch(Ea.Wu(gn))}};F().get(window,"md.global.SysSettings.templateLibraryTypes")==="2"?e.e(7392).then(e.bind(e,57392)).then(function(){window.MDLibrary&&window.MDLibrary(fn)}):Za()(this.state.str,function(An){!An&&window.MDLibrary&&window.MDLibrary(fn)})}},{key:"componentWillUnmount",value:function(){var K=$('script[src="'+this.state.str+'"]');K.length>0&&K.remove(),$("html").removeClass("appListPage"),N.uY.removeListener("CHANGE_CURRENT_PROJECT",this.reload)}},{key:"render",value:function(){return t.createElement("div",{id:"containerAppLib"},t.createElement(re.Z,{style:{paddingTop:document.documentElement.clientHeight/2,paddingBottom:document.documentElement.clientHeight/2}}))}}]),T}(t.Component))||Ht);const Bt=Jt;var Ca=e(62509),ya=e(34632),Yt=e(63353),_a=e(1714),Da=(0,C.Z)([`
  display: flex;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  background-blend-mode: normal;
`],[`
  display: flex;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  background-blend-mode: normal;
`]),Pa=(0,C.Z)([`
  flex: 1;
  overflow: hidden;
`],[`
  flex: 1;
  overflow: hidden;
`]),Ta=E.ZP.div(Da),ka=E.ZP.div(Pa),Xt=[{str:"/app/lib",key:"lib"},{str:"/dashboard",key:"dashboard"},{str:"/favorite",key:"favorite"}],Xn={},It={};function Sa(x){var T=F().get(x,"match.params.projectId"),Ie=F().get(md,"global.Account.projects"),K=(0,N.vo)(T||localStorage.getItem("currentProjectId")),L=(0,t.useState)(F().isEmpty(K)?Ie[0]||{companyName:_l("\u5916\u90E8\u534F\u4F5C"),projectId:"external"}:K),_e=(0,A.Z)(L,2),pe=_e[0],we=_e[1],be=(0,t.useState)(It),O=(0,A.Z)(be,2),Q=O[0],ve=O[1],Ge=(0,t.useState)(Xn[pe.projectId]||{}),on=(0,A.Z)(Ge,2),cn=on[0],$e=on[1],hn=(0,t.useState)(!0),en=(0,A.Z)(hn,2),vn=en[0],ln=en[1],Pn=(0,_a.Qi)((cn||{}).color),fn=(cn||{}).advancedSetting||{},An=function(){var d="app";return Xt.map(function(y){location.pathname.startsWith(y.str)&&(d=y.key)}),d},gn=An();function Sn(r){gn==="app"&&(0,W.T8)("/app/my",!1,!0),we(r),Xn[r.projectId]?$e(Xn[r.projectId]):kn(r.projectId)}var kn=function(d){if(d==="external"){$e({}),ln(!1);return}ln(!0),u.Z.getHomePlatformSetting({projectId:d}).then(function(y){y&&($e(y),ln(!1),Xn[d]=y)}).catch(function(){return ln(!1)})},We=function(d,y){var s=Xn[pe.projectId],m=(0,k.default)({},s,d);$e(m),d.editingKey!=="logo"?u.Z.editPlatformSetting(m).then(function(h){h&&(Xn[pe.projectId]=m,y&&y())}).catch(function(){alert(_l("\u66F4\u65B0\u5DE5\u4F5C\u53F0\u914D\u7F6E\u5931\u8D25\uFF01"),2),$e(s)}):Xn[pe.projectId]=m};(0,t.useEffect)(function(){return Xn[pe.projectId]?ln(!1):kn(pe.projectId),F().isEmpty(It)&&(0,Ca.C)().then(function(r){ve(r),It=r}),N.uY.addListener("CHANGE_CURRENT_PROJECT",Sn),function(){N.uY.removeListener("CHANGE_CURRENT_PROJECT",Sn)}},[]);var se=function(){switch(gn){case"lib":return t.createElement(ka,null,t.createElement(Bt,null));case"favorite":return t.createElement(Yt.Z,{currentProject:pe,projectId:pe.projectId});case"dashboard":return t.createElement(ya.Z,{currentProject:pe,projectId:pe.projectId,countData:Q,updateCountData:function(y){ve(y),It=y},platformSetting:cn,updatePlatformSetting:We,dashboardColor:Pn,hasBgImg:gn==="dashboard"&&fn.bgImg});default:return t.createElement(ct,{currentProject:pe,projectId:pe.projectId,dashboardColor:Pn})}};return vn?t.createElement(re.Z,{className:"mTop10"}):t.createElement(he.Z,{projectId:pe.projectId},t.createElement(Ta,{style:{backgroundImage:gn==="dashboard"&&fn.bgImg?"url("+fn.bgImg+")":"unset",backgroundColor:gn==="dashboard"&&fn.bgImg?Pn.bgColor:"unset"}},t.createElement(zt,{active:gn,currentProject:pe,countData:Q,dashboardColor:Pn,hasBgImg:gn==="dashboard"&&fn.bgImg}),se()))}const Ma=(0,oe.Z)(Sa)},4037:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>F});var he=e(29073),re=e.n(he),k=e(60713),A=e(86735),C=e(67294),t=e(5017),E=e(96486),oe=e.n(E),N=e(1714),c=e(15577),W=e(93967),u=e.n(W),P=(0,A.Z)([`
  &.slick-slider .slick-dots {
    left: unset !important;
    right: 12px !important;
    bottom: 16px !important;
    margin: 0 !important;
    li {
      width: 10px;
      height: 10px;
      button {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
        background-color: transparent;
        box-shadow: 0 2px 6px 0px rgb(0 0 0 / 15%);
        opacity: 1;
        &:hover {
          opacity: 1;
          background-color: #fff;
        }
      }
      &.slick-active {
        width: 10px;
        button {
          background-color: #fff !important;
        }
      }
    }
  }
  .image {
    background-color: #454545;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  .explain {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    padding: `,`;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(9, 5, 5, 0.03) 16%, rgba(0, 0, 0, 0.28) 100%);
    .titleText {
      color: #fff;
      font-size: `,`;
      font-weight: bold;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
`],[`
  &.slick-slider .slick-dots {
    left: unset !important;
    right: 12px !important;
    bottom: 16px !important;
    margin: 0 !important;
    li {
      width: 10px;
      height: 10px;
      button {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
        background-color: transparent;
        box-shadow: 0 2px 6px 0px rgb(0 0 0 / 15%);
        opacity: 1;
        &:hover {
          opacity: 1;
          background-color: #fff;
        }
      }
      &.slick-active {
        width: 10px;
        button {
          background-color: #fff !important;
        }
      }
    }
  }
  .image {
    background-color: #454545;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  .explain {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    padding: `,`;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(9, 5, 5, 0.03) 16%, rgba(0, 0, 0, 0.28) 100%);
    .titleText {
      color: #fff;
      font-size: `,`;
      font-weight: bold;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
`]),n=(0,A.Z)([`
  flex: 1;
  padding: 24px;
  .skeletonBlock {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    border-radius: 11px;
  }
`],[`
  flex: 1;
  padding: 24px;
  .skeletonBlock {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    border-radius: 11px;
  }
`]),a=(0,t.ZP)(k.Z)(P,function(le){var ie=le.isMobile;return ie?"10px 70px 10px 16px":"24px 180px 16px 16px"},function(le){var ie=le.isMobile;return ie?"15px":"17px"}),w=t.ZP.div(n);function F(le){var ie=le.loading,ae=le.platformSetting,je=ae===void 0?{}:ae,Ce=le.height,p=je.bulletinBoards,l=p===void 0?[]:p;return ie?C.createElement(w,null,C.createElement("div",{className:"skeletonBlock",style:{height:Ce-48}})):C.createElement(a,{autoplay:!0,isMobile:(0,c.Q9)()},l.concat(l.length?[]:[{url:md.global.FileStoreConfig.pictureHost+N.C3[0]}]).map(function(i){return C.createElement("div",{className:"Relative",style:{height:Ce+"px"},onClick:i.link?function(){return window.open(i.link)}:oe().noop},C.createElement("div",{className:u()("image",{pointer:i.link}),style:{backgroundImage:"url("+i.url+")",height:Ce+"px",backgroundSize:"auto "+Ce+"px"}}),i.title&&C.createElement("div",{className:u()("explain",{pointer:i.link})},C.createElement("div",{className:"titleText"},i.title)))}))}},37996:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>g});var he=e(33867),re=e(12424),k=e(86735),A=e(67294),C=e(5017),t=e(85631),E=e(1952),oe=e(70801),N=e(6100),c=e(20845),W=e(88106),u=e(88239),P=e(93002),n=e(96486),a=e.n(n),w=e(1714),F=e(54644),le=e(91088),ie=(0,k.Z)([`
  height: 100%;
  display: flex;
  flex-direction: column;
  .appSearchInput {
    display: flex;
    position: relative;
    height: 36px;
    margin-top: 8px;

    input {
      flex: 1;
      border: none;
      border-radius: 26px;
      background-color: #f5f5f5;
      padding: 0 18px 0 40px;
      &:hover {
        background-color: #f0f0f0;
      }
      &:focus {
        background-color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
      }
    }
    .searchIcon {
      position: absolute;
      top: 10px;
      left: 18px;
    }
    .searchClear {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 3px;
      top: 3px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
      }
    }
  }
  .emptyText {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #757575;
    font-size: 15px;
  }
  .appList {
    flex: 1;
    margin-top: 16px;
    overflow: auto;
  }
`],[`
  height: 100%;
  display: flex;
  flex-direction: column;
  .appSearchInput {
    display: flex;
    position: relative;
    height: 36px;
    margin-top: 8px;

    input {
      flex: 1;
      border: none;
      border-radius: 26px;
      background-color: #f5f5f5;
      padding: 0 18px 0 40px;
      &:hover {
        background-color: #f0f0f0;
      }
      &:focus {
        background-color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
      }
    }
    .searchIcon {
      position: absolute;
      top: 10px;
      left: 18px;
    }
    .searchClear {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 3px;
      top: 3px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
      }
    }
  }
  .emptyText {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #757575;
    font-size: 15px;
  }
  .appList {
    flex: 1;
    margin-top: 16px;
    overflow: auto;
  }
`]),ae=(0,k.Z)([`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  .expandIcon {
    font-size: 10px;
    margin-right: 8px;
    color: #9d9d9d;
    cursor: pointer;
    &:hover {
      color: #2196f3;
    }
  }
  .ming.Checkbox {
    min-width: 18px;
    .Checkbox-box {
      margin: 0 !important;
    }
  }

  .appIcon {
    width: 24px;
    height: 24px;
    line-height: 16px;
    min-width: 24px;
    border-radius: 50%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  &.isItem {
    padding-left: 48px;
    line-height: 16px;
  }
  &:hover {
    background: #f8f8f8;
  }
`],[`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  .expandIcon {
    font-size: 10px;
    margin-right: 8px;
    color: #9d9d9d;
    cursor: pointer;
    &:hover {
      color: #2196f3;
    }
  }
  .ming.Checkbox {
    min-width: 18px;
    .Checkbox-box {
      margin: 0 !important;
    }
  }

  .appIcon {
    width: 24px;
    height: 24px;
    line-height: 16px;
    min-width: 24px;
    border-radius: 50%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  &.isItem {
    padding-left: 48px;
    line-height: 16px;
  }
  &:hover {
    background: #f8f8f8;
  }
`]),je=C.ZP.div(ie),Ce=C.ZP.div(ae);function p(b){var I=b.onClose,U=b.apps,ce=U===void 0?[]:U,fe=b.markedApps,He=fe===void 0?[]:fe,Ye=b.onMarkApps,Xe=b.projectId,D=(0,A.useRef)(),xe=(0,A.useState)(""),te=(0,re.Z)(xe,2),M=te[0],o=te[1],B=(0,A.useState)([]),Qe=(0,re.Z)(B,2),Fe=Qe[0],Te=Qe[1],Cn=(0,P.Z)({}),sn=(0,re.Z)(Cn,2),un=sn[0],mn=sn[1],Mn=(0,A.useState)([]),En=(0,re.Z)(Mn,2),ke=En[0],Je=En[1];(0,A.useEffect)(function(){Je(He.map(function(Me){return(0,u.default)({appId:Me.id,isMark:!0},a().pick(Me,["type","itemId","itemName","itemUrl"]))}))},[]);var an=function(Re){le.Z.getAppItems({appId:Re}).then(function(Ae){if(Ae){var ze=Ae.filter(function(De){return De.isMarked});mn((0,W.default)({},Re,Ae)),Je(ke.concat(ze.map(function(De){return{appId:Re,isMark:!0,type:De.type===0?2:De.type,itemId:De.workSheetId,itemName:De.workSheetName,itemUrl:De.iconUrl}})))}})},ye=function(){var Re=a().differenceWith(ke,He,function(ze,De){return(ze.type||ze.appId===De.id)&&ze.itemId===De.itemId}),Ae=a().differenceWith(He,ke,function(ze,De){return(ze.type||De.appId===ze.id)&&De.itemId===ze.itemId}).map(function(ze){return{appId:ze.id,itemId:ze.itemId,type:ze.type,isMark:!1}});!Re.length&&!Ae.length||Ye({items:Re.concat(Ae),projectId:Xe})},Ue=function(){var Re=(0,F.xo)(ce,M);return Re.length?A.createElement("div",{className:"appList"},Re.map(function(Ae,ze){var De=a().includes(Fe,Ae.id),Be=!!a().find(ke,function(Oe){return Oe.appId===Ae.id&&!Oe.type});return A.createElement(A.Fragment,null,A.createElement(Ce,{key:ze,onClick:function(){var yn=Be?ke.filter(function(Ve){return!!Ve.type||Ve.appId!==Ae.id}):ke.concat({appId:Ae.id,type:0,isMark:!0});Je(yn)}},A.createElement(he.Z,{icon:De?"arrow-down":"arrow-right-tip",className:"expandIcon",onClick:function(yn){yn.stopPropagation();var Ve=De?Fe.filter(function(ue){return ue!==Ae.id}):Fe.concat(Ae.id);Te(Ve),!un[Ae.id]&&an(Ae.id)}}),A.createElement(c.Z,{checked:Be}),A.createElement("div",{className:"appIcon",style:{backgroundColor:(0,w.ZW)(Ae).bg}},A.createElement(N.Z,{url:Ae.iconUrl,fill:(0,w.ZW)(Ae).iconColor,size:20})),A.createElement("div",{className:"overflow_ellipsis"},Ae.name)),De&&(un[Ae.id]||[]).map(function(Oe){var yn=!!a().find(ke,function(ue){return ue.itemId===Oe.workSheetId}),Ve=Oe.type===0?2:Oe.type;return A.createElement(Ce,{className:"isItem",onClick:function(){var J=yn?ke.filter(function(Z){return Z.itemId!==Oe.workSheetId}):ke.concat({appId:Ae.id,isMark:!0,type:Ve,itemId:Oe.workSheetId,itemName:Oe.workSheetName,itemUrl:Oe.iconUrl});Je(J)}},A.createElement(c.Z,{className:"mRight10",checked:yn}),A.createElement(N.Z,{url:Oe.iconUrl,fill:(0,w.ZW)(Ae).bg,size:16}),A.createElement("div",{className:"overflow_ellipsis mLeft6"},Oe.workSheetName))}))})):M?A.createElement("div",{className:"emptyText"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")):A.createElement("div",{className:"emptyText"},_l("\u6CA1\u6709\u53EF\u9009\u62E9\u7684\u5E94\u7528"))};return A.createElement(oe.Z,{visible:!0,type:"fixed",width:480,title:_l("\u6DFB\u52A0"),okText:_l("\u786E\u8BA4"),onOk:function(){ye(),I()},onCancel:I},A.createElement(je,null,A.createElement("div",{className:"appSearchInput"},A.createElement(he.Z,{icon:"search",className:"searchIcon Font16 Gray_75"}),A.createElement("input",{type:"text",autoFocus:!0,value:M,onChange:function(Re){return o(Re.target.value.trim())},ref:D,placeholder:_l("\u641C\u7D22\u5E94\u7528\u540D\u79F0")}),M&&A.createElement("div",{className:"searchClear",onClick:function(){D.current.value="",o("")}},A.createElement(he.Z,{type:"cancel",className:"Gray_9e Font16"}))),Ue()))}const l=function(b){return(0,E.Z)(p,(0,u.default)({},b))};var i=(0,k.Z)([`
  flex: 1;
  display: flex;
  flex-direction: column;
  .titleBtn {
    display: inline-block;
    font-size: 13px;
    padding: 8px 10px;
    color: #868686;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
`],[`
  flex: 1;
  display: flex;
  flex-direction: column;
  .titleBtn {
    display: inline-block;
    font-size: 13px;
    padding: 8px 10px;
    color: #868686;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
`]),f=C.ZP.div(i);function g(b){var I=b.projectId,U=b.markedApps,ce=b.onMarkApp,fe=b.apps,He=b.onMarkApps,Ye=b.loading,Xe=b.onAppSorted,D=b.currentTheme,xe=(0,A.useState)(localStorage.getItem("collectAppExpand_"+I)==="true"),te=(0,re.Z)(xe,2),M=te[0],o=te[1],B=(0,A.useState)(!1),Qe=(0,re.Z)(B,2),Fe=Qe[0],Te=Qe[1];return(0,A.useEffect)(function(){o(localStorage.getItem("collectAppExpand_"+I)==="true")},[I]),A.createElement(f,null,A.createElement("div",{className:"cardTitle alignItemsCenter"},A.createElement("div",{className:"titleText"},D.appCollectIcon&&A.createElement("img",{src:D.appCollectIcon}),_l("\u5E94\u7528\u6536\u85CF")),A.createElement("div",{className:"titleBtn mLeft12",onClick:function(){l({apps:fe,markedApps:U,onMarkApps:He,projectId:I})}},A.createElement(he.Z,{icon:"add",className:"mRight4"}),_l("\u6DFB\u52A0")),A.createElement("div",{className:"flex"}),Fe&&A.createElement("div",{className:"titleBtn",onClick:function(){o(!M),localStorage.setItem("collectAppExpand_"+I,!M)}},M?_l("\u6298\u53E0"):_l("\u663E\u793A\u5168\u90E8"),A.createElement(he.Z,{icon:M?"unfold_less":"unfold_more",className:"mLeft4 Font16"}))),A.createElement(t.Z,{projectId:I,apps:U,onMarkApp:ce,isFold:!M,isCollect:!0,loading:Ye,setIsOverflow:Te,draggable:!0,onAppSorted:Xe}))}},32563:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>le});var he=e(54208),re=e(12424),k=e(33867),A=e(86735),C=e(67294),t=e(5017),E=e(10358),oe=e(46959),N=e(95742),c=e(34632),W=e(33771),u=e(36876),P=e.n(u),n=(0,A.Z)([`
  min-height: 300px;
  padding: 0 20px 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .chartItem {
    z-index: 10;
    position: relative;
    width: calc(50% - 10px);
    height: 300px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 10px 20px 20px 20px;
    background: #fff;
    .dragWrap {
      display: none;
      position: absolute;
      left: 8px;
      top: 16px;
      color: #9e9e9e;
      cursor: pointer;
      &:hover {
        color: #2196f3;
      }
    }
    &:hover {
      .dragWrap {
        display: block;
      }
    }
    .reportName {
      margin-left: 5px;
    }
  }
`],[`
  min-height: 300px;
  padding: 0 20px 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .chartItem {
    z-index: 10;
    position: relative;
    width: calc(50% - 10px);
    height: 300px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 10px 20px 20px 20px;
    background: #fff;
    .dragWrap {
      display: none;
      position: absolute;
      left: 8px;
      top: 16px;
      color: #9e9e9e;
      cursor: pointer;
      &:hover {
        color: #2196f3;
      }
    }
    &:hover {
      .dragWrap {
        display: block;
      }
    }
    .reportName {
      margin-left: 5px;
    }
  }
`]),a=t.ZP.div(n),w=(0,N.W8)(function(ie){var ae=ie.chart,je=ie.projectId,Ce=ie.reportAutoRefreshTimer,p=ie.onCancelFavorite;return C.createElement("div",{className:"chartItem"},C.createElement("span",{"data-tip":_l("\u62D6\u62FD"),className:"dragWrap"},C.createElement(k.Z,{icon:"drag",className:"Font14"})),C.createElement(oe.default,{report:{id:ae.reportId},pageId:ae.rowId,projectId:je,appId:ae.appId,viewId:ae.viewId,sourceType:3,customPageConfig:{refresh:Ce},onCancelFavorite:function(){return p(ae.favoriteId)}}))}),F=(0,N.JN)(function(ie){var ae=ie.chartList,je=ie.projectId,Ce=ie.reportAutoRefreshTimer,p=ie.onCancelFavorite;return C.createElement(a,null,ae.map(function(l,i){return C.createElement(w,{key:"item_"+l.reportId,index:i,chart:l,projectId:je,reportAutoRefreshTimer:Ce,onCancelFavorite:p})}))});function le(ie){var ae=ie.projectId,je=ie.reportAutoRefreshTimer,Ce=ie.flag,p=ie.currentTheme,l=(0,C.useState)([]),i=(0,re.Z)(l,2),f=i[0],g=i[1],b=(0,C.useState)([]),I=(0,re.Z)(b,2),U=I[0],ce=I[1],fe=(0,C.useState)(!0),He=(0,re.Z)(fe,2),Ye=He[0],Xe=He[1];(0,C.useEffect)(function(){Xe(!0),E.Z.getAllFavorites({projectId:ae,type:2,isRefresh:1}).then(function(xe){xe&&(g(xe),ce(xe.map(function(te){return te.favoriteId})),Xe(!1))})},[ae,Ce]);var D=function(te){var M=te.oldIndex,o=te.newIndex;if(M!==o){var B=(0,N.Rp)(U,M,o);ce(B),E.Z.updateReportSort({projectId:ae,reportIds:B})}};return C.createElement(c.S,{className:"sortItem overflowHidden"},C.createElement("div",{className:"cardTitle"},C.createElement("div",{className:"titleText"},p.chartCollectIcon&&C.createElement("img",{src:p.chartCollectIcon}),_l("\u56FE\u8868\u6536\u85CF"))),Ye?C.createElement(he.Z,{className:"mTop10"}):f.length?C.createElement(F,{distance:3,helperClass:"chartSortItemHelper",shouldCancelStart:function(te){var M=te.target;return!M.classList.contains("icon-drag")},projectId:ae,reportAutoRefreshTimer:je,chartList:U.map(function(xe){return _.find(f,function(te){return te.favoriteId===xe})}).filter(function(xe){return!_.isUndefined(xe)}),axis:"xy",onSortEnd:D,onCancelFavorite:function(te){return g(f.filter(function(M){return M.favoriteId!==te}))}}):C.createElement("div",{className:"emptyWrapper"},C.createElement("img",{src:P()}),C.createElement("span",null,_l("\u6CA1\u6709\u56FE\u8868"))))}},25506:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>an});var he=e(70801),re=e(14338),k=e(88239),A=e(97553),C=e(46417),t=e(66215),E=e(12424),oe=e(33867),N=e(84141),c=e(67272),W=e(51024),u=e(48659),P=e(1825),n=e(86735),a=e(67294),w=e(5017),F=e(96486),le=e.n(F),ie=e(93967),ae=e.n(ie),je=e(62232),Ce=e(3540),p=e(54208),l=e(95742),i=e(66344),f=e(1714),g=(0,n.Z)([`
  .mui-dialog-header {
    display: none;
  }
  .mui-dialog-body {
    display: flex;
    padding: 0 !important;
  }
  .leftWrapper {
    width: 320px;
    border-right: 1px solid #eaeaea;
    display: flex;
    flex-direction: column;
    .title {
      padding: 16px 24px;
      line-height: 26px;
    }
    .listContent {
      flex: 1;
      overflow: auto;
      padding-bottom: 32px;
      .addBtn {
        margin-top: 32px;
        margin-left: 36px;
        &.disabled {
          background: #f8f8f8 !important;
          color: #9e9e9e !important;
          border-color: #eaeaea !important;
        }
      }
    }
  }
  .rightWrapper {
    flex: 1;
    padding: 24px;
    .image {
      width: 100%;
      height: 140px;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      background-size: cover !important;

      .customBtnWrapper {
        position: absolute;
        top: 4px;
        right: 4px;

        .uploadBtn {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 6px 8px;
          border-radius: 4px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
    .picList {
      display: flex;
      flex-wrap: nowrap;
      gap: 8px;
      padding: 14px 0;
      .picItem {
        flex: 1;
        height: 40px;
        border-radius: 3px;
        background-size: cover !important;
        position: relative;
        cursor: pointer;
        &.isActive {
          box-shadow: rgba(33, 150, 243) 0px 0px 0px 2px;
        }
        .activeMaskWrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          .icon-done {
            color: #fff;
            font-size: 40px;
            text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    .linkInput {
      width: 100%;
      margin: 8px 0 20px;
      &:hover {
        border-color: #1e88e5 !important;
      }
    }
    .saveBtn {
      &.disabled {
        background: #a6d5fb !important;
        color: #fff;
      }
    }
  }
`],[`
  .mui-dialog-header {
    display: none;
  }
  .mui-dialog-body {
    display: flex;
    padding: 0 !important;
  }
  .leftWrapper {
    width: 320px;
    border-right: 1px solid #eaeaea;
    display: flex;
    flex-direction: column;
    .title {
      padding: 16px 24px;
      line-height: 26px;
    }
    .listContent {
      flex: 1;
      overflow: auto;
      padding-bottom: 32px;
      .addBtn {
        margin-top: 32px;
        margin-left: 36px;
        &.disabled {
          background: #f8f8f8 !important;
          color: #9e9e9e !important;
          border-color: #eaeaea !important;
        }
      }
    }
  }
  .rightWrapper {
    flex: 1;
    padding: 24px;
    .image {
      width: 100%;
      height: 140px;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      background-size: cover !important;

      .customBtnWrapper {
        position: absolute;
        top: 4px;
        right: 4px;

        .uploadBtn {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 6px 8px;
          border-radius: 4px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
    .picList {
      display: flex;
      flex-wrap: nowrap;
      gap: 8px;
      padding: 14px 0;
      .picItem {
        flex: 1;
        height: 40px;
        border-radius: 3px;
        background-size: cover !important;
        position: relative;
        cursor: pointer;
        &.isActive {
          box-shadow: rgba(33, 150, 243) 0px 0px 0px 2px;
        }
        .activeMaskWrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          .icon-done {
            color: #fff;
            font-size: 40px;
            text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    .linkInput {
      width: 100%;
      margin: 8px 0 20px;
      &:hover {
        border-color: #1e88e5 !important;
      }
    }
    .saveBtn {
      &.disabled {
        background: #a6d5fb !important;
        color: #fff;
      }
    }
  }
`]),b=(0,n.Z)([`
  z-index: 10000;
  .bulletinItem {
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 36px;
    border: 2px solid transparent;
    cursor: pointer;

    .icon-drag {
      margin-left: -26px;
    }
    .picWrapper {
      width: 90px;
      min-width: 90px;
      height: 56px;
      border-radius: 5px;
      background-size: cover !important;
    }
    .delIcon {
      display: none;
      cursor: pointer;
      color: #bdbdbd;
      font-size: 16px;
      &:hover {
        color: #f44336;
      }
    }

    &:hover {
      border-color: #eaeaea;
      .delIcon {
        display: block;
      }
    }
    &.isActive {
      border-color: #2196f3;
      .delIcon {
        display: block;
      }
    }
  }
`],[`
  z-index: 10000;
  .bulletinItem {
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 36px;
    border: 2px solid transparent;
    cursor: pointer;

    .icon-drag {
      margin-left: -26px;
    }
    .picWrapper {
      width: 90px;
      min-width: 90px;
      height: 56px;
      border-radius: 5px;
      background-size: cover !important;
    }
    .delIcon {
      display: none;
      cursor: pointer;
      color: #bdbdbd;
      font-size: 16px;
      &:hover {
        color: #f44336;
      }
    }

    &:hover {
      border-color: #eaeaea;
      .delIcon {
        display: block;
      }
    }
    &.isActive {
      border-color: #2196f3;
      .delIcon {
        display: block;
      }
    }
  }
`]),I=(0,n.Z)([`
  &.ant-input-affix-wrapper {
    transition: none !important;
    border-color: #ccc !important;
    border-radius: 3px !important;
    padding: 6px 12px !important;
    &:hover {
      border-color: #1e88e5 !important;
    }
  }
  &.ant-input-affix-wrapper-focused {
    box-shadow: none !important;
    border-color: #1e88e5 !important;
  }
`],[`
  &.ant-input-affix-wrapper {
    transition: none !important;
    border-color: #ccc !important;
    border-radius: 3px !important;
    padding: 6px 12px !important;
    &:hover {
      border-color: #1e88e5 !important;
    }
  }
  &.ant-input-affix-wrapper-focused {
    box-shadow: none !important;
    border-color: #1e88e5 !important;
  }
`]),U=(0,w.ZP)(he.Z)(g),ce=w.ZP.div(b),fe=(0,w.ZP)(W.default)(I),He=(0,l.W6)(function(){return a.createElement(oe.Z,{className:"mRight10 Font16 Hand Gray_9e",icon:"drag"})}),Ye=(0,l.W8)(function(ye){var Ue=ye.title,Me=ye.url,Re=ye.currentIndex,Ae=ye.activeIndex,ze=ye.onSwitchItem,De=ye.bulletins,Be=ye.onDelete;return a.createElement(ce,null,a.createElement("div",{className:ae()("bulletinItem",{isActive:Re===Ae}),onClick:function(){return ze(Re)}},a.createElement(He,null),a.createElement("div",{className:"picWrapper",style:{background:"url("+Me+") no-repeat center"}}),Ue&&a.createElement("div",{className:"mLeft16 Font14 overflow_ellipsis",title:Ue},Ue),a.createElement("div",{className:"flex"}),De.length>1&&a.createElement(oe.Z,{icon:"delete1",className:"delIcon",onClick:function(yn){yn.stopPropagation(),Be(Re)}})))}),Xe=(0,l.JN)(function(ye){var Ue=ye.bulletins;return a.createElement("div",{className:"flexColumn"},Ue.map(function(Me,Re){return a.createElement(Ye,(0,k.default)({},Me,ye,{key:"item_"+Re,index:Re,currentIndex:Re}))}))});function D(ye){var Ue=ye.bulletinBoards,Me=Ue===void 0?[]:Ue,Re=ye.onClose,Ae=ye.updatePlatformSetting,ze=(0,a.useState)(Me.length?Me:[{url:md.global.FileStoreConfig.pictureHost+f.C3[0],key:f.C3[0],link:"",title:"",bucket:4}]),De=(0,E.Z)(ze,2),Be=De[0],Oe=De[1],yn=(0,a.useState)(0),Ve=(0,E.Z)(yn,2),ue=Ve[0],J=Ve[1],Z=(0,a.useState)(!1),Ze=(0,E.Z)(Z,2),qe=Ze[0],Dn=Ze[1],Gn=(0,a.useState)({editing:!1,saved:!1}),Yn=(0,E.Z)(Gn,2),_n=Yn[0],Nn=Yn[1],Ln=function(Le){J(function(dn){return Oe(function(rn){var Wn=rn.map(function(Vn,Hn){return Hn===dn?(0,k.default)({},Vn,Le):Vn});return Nn({editing:!0,saved:!1}),Wn}),dn})},at=function(Le){if(Le!==ue){if(_n.editing){alert(_l("\u8BF7\u5148\u4FDD\u5B58\u6B63\u5728\u7F16\u8F91\u7684\u5185\u5BB9"),3);return}J(Le),Nn({editing:!1,saved:!1})}},qn=function(Le){var dn=Be.length>Me.length&&Le===Be.length-1,rn=function(Vn){var Hn=Be.filter(function(ct,ut){return ut!==Le});J(0),Oe(Hn),Nn({editing:!1,saved:!1}),Vn&&Ae({bulletinBoards:Hn},function(){alert("\u5220\u9664\u6210\u529F")})};if(dn)rn();else{if(_n.editing){alert(_l("\u8BF7\u5148\u4FDD\u5B58\u6B63\u5728\u7F16\u8F91\u7684\u5185\u5BB9"),3);return}he.Z.confirm({title:_l("\u5220\u9664\u6B64\u9879"),buttonType:"danger",description:_l("\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D"),onOk:function(){return rn(!0)}})}},rt=function(Le){var dn=Le.oldIndex,rn=Le.newIndex;if(dn!==rn){if(_n.editing){alert(_l("\u8BF7\u5148\u4FDD\u5B58\u6B63\u5728\u7F16\u8F91\u7684\u5185\u5BB9"),3);return}var Wn=(0,l.Rp)(Be,dn,rn);Oe(Wn),J(rn),Ae({bulletinBoards:Wn})}},ot=function(){var Le=f.C3[le().random(0,7)],dn=Be.concat({key:Le,url:md.global.FileStoreConfig.pictureHost+Le,title:"",link:"",bucket:4});Oe(dn),J(dn.length-1),Nn({editing:!0,saved:!1})},$n=function(){if(Be.filter(function(Le){return Le.link.trim()&&!i.Z.isURL(Le.link.trim())}).length){alert(_l("\u94FE\u63A5\u683C\u5F0F\u4E0D\u6B63\u786E"),3);return}Ae({bulletinBoards:Be.map(function(Le){return(0,k.default)({},Le,{link:Le.link.trim(),title:Le.title.trim()})})},function(){alert("\u4FDD\u5B58\u6210\u529F"),Nn({editing:!1,saved:!0})})};return a.createElement(U,{visible:!0,width:1e3,type:"fixed",showFooter:!1,onCancel:Re},a.createElement("div",{className:"leftWrapper"},a.createElement("div",{className:"title"},a.createElement("span",{className:"Font17 bold"},_l("\u5BA3\u4F20\u680F")),a.createElement("span",{className:"Font12 bold Gray_9e mLeft10"},Be.length+" / 10")),a.createElement("div",{className:"listContent"},a.createElement(Xe,{distance:3,bulletins:Be,activeIndex:ue,onSwitchItem:at,onDelete:qn,onSortEnd:rt}),Be.length<10&&a.createElement(A.ZP,{type:"ghost",className:ae()("addBtn",{disabled:_n.editing}),disabled:_n.editing,onClick:ot},_l("\u6DFB\u52A0")))),a.createElement("div",{className:"rightWrapper"},a.createElement("div",{className:"bold mBottom8"},_l("\u56FE\u7247")),a.createElement("div",{className:"Gray_9e mBottom15"},_l("\u652F\u6301 jpg\u3001jpeg\u3001png\u3001gif\u683C\u5F0F\uFF0C2MB\u4EE5\u5185")),a.createElement("div",{className:"image",style:{background:qe?"#f5f5f5":"url("+Be[ue].url+") no-repeat center"}},a.createElement("div",{className:"customBtnWrapper"},a.createElement(C.Z,{options:{multi_selection:!1,filters:{mime_types:[{title:"image",extensions:"jpg,jpeg,png,gif"}]},type:4,max_file_size:"2m"},onUploaded:function(Le,dn,rn){Le.disableBrowse(!1),Ln({key:dn.key,url:dn.serverName+dn.key}),Dn(!1)},onAdd:function(Le,dn){Dn(!0),Le.disableBrowse()},onError:function(Le,dn,rn){alert(rn,2)}},a.createElement("div",{className:"uploadBtn"},_l("\u81EA\u5B9A\u4E49")))),qe&&a.createElement(a.Fragment,null,a.createElement(p.Z,null),a.createElement("span",{className:"mTop12 Gray_9e"},_l("\u6B63\u5728\u4E0A\u4F20")))),a.createElement("div",{className:"picList"},f.C3.map(function(In,Le){var dn=In===Be[ue].key,rn=md.global.FileStoreConfig.pictureHost+In;return a.createElement("div",{key:Le,className:ae()("picItem",{isActive:dn}),style:{background:"url("+rn+") no-repeat center"},onClick:function(){return Ln({url:rn,key:In})}},dn&&a.createElement("div",{className:"activeMaskWrapper"},a.createElement(oe.Z,{icon:"done"})))})),a.createElement("div",{className:"bold mTop4"},_l("\u94FE\u63A5")),a.createElement(Ce.Z,{className:"linkInput",placeholder:_l("\u4F8B\u5982\uFF1A")+location.origin,value:Be[ue].link,onChange:function(Le){return Ln({link:Le})}}),a.createElement("div",{className:"bold"},_l("\u6807\u9898")),a.createElement("div",{className:"mTop8 mBottom20"},a.createElement(fe,{showCount:!0,maxLength:30,value:Be[ue].title,onChange:function(Le){return Ln({title:Le.target.value})}})),(_n.editing||_n.saved)&&a.createElement(A.ZP,{type:"primary",className:ae()("saveBtn",{disabled:_n.saved}),disabled:_n.saved,onClick:$n},_n.saved?_l("\u5DF2\u4FDD\u5B58"):_l("\u4FDD\u5B58"))))}var xe=e(99924),te=e(15577),M=(0,n.Z)([`
  .ant-drawer-header {
    border-bottom: none;
    padding: 24px;
  }
  .ant-drawer-header-title {
    flex-direction: row-reverse;
    .ant-drawer-title {
      font-size: 18px !important;
      font-weight: bold !important;
    }
    .ant-drawer-close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 44px;
      height: 44px;
      border-radius: 3px;
      color: #757575;
      &:hover {
        background: #f8f8f8;
      }
    }
  }
  .ant-drawer-content-wrapper {
    .ant-drawer-body {
      padding: 0 24px 24px;
    }
  }

  .sectionTitle {
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
`],[`
  .ant-drawer-header {
    border-bottom: none;
    padding: 24px;
  }
  .ant-drawer-header-title {
    flex-direction: row-reverse;
    .ant-drawer-title {
      font-size: 18px !important;
      font-weight: bold !important;
    }
    .ant-drawer-close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 44px;
      height: 44px;
      border-radius: 3px;
      color: #757575;
      &:hover {
        background: #f8f8f8;
      }
    }
  }
  .ant-drawer-content-wrapper {
    .ant-drawer-body {
      padding: 0 24px 24px;
    }
  }

  .sectionTitle {
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
`]),o=(0,n.Z)([`
  padding: 18px 0;
  border-bottom: 1px solid #eaeaea;

  .settingHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titleText {
      font-size: 14px;
      font-weight: bold;
      color: #555;
    }
    .descriptionText {
      margin-top: 4px;
      font-size: 12px;
      color: #a7a7a7;
    }
  }
  .settingRadioGroup {
    display: flex;
    margin-top: 16px;
    .ming.Radio {
      width: 200px;
    }
  }
  .logoBoxBorder {
    height: 40px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &:hover {
      .logoIconBox {
        display: block;
      }
    }
    .logoIconBox {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      text-align: center;
      line-height: 40px;
      z-index: 2;
    }
    img {
      height: 100%;
    }
  }
  .logoHeightSet {
    display: flex;
    align-items: center;
    margin-top: 16px;
    height: 36px;
    .contentText {
      font-size: 14px;
      color: #555;
    }
  }
  .themeColorWrapper {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    .colorItem {
      display: flex;
      align-items: center;
      width: 28px;
      height: 28px;
      border-radius: 3px;
      cursor: pointer;
      .insideBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8px;
        height: 20px;
        border-radius: 3px;
        margin-left: 4px;
        transition: width 0.2s ease;
        .icon-done {
          color: #fff;
          font-size: 18px;
        }
      }
      &:hover {
        .insideBlock {
          width: 20px;
        }
      }
      &.isActive {
        .insideBlock {
          width: 20px;
        }
      }
    }
  }
`],[`
  padding: 18px 0;
  border-bottom: 1px solid #eaeaea;

  .settingHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titleText {
      font-size: 14px;
      font-weight: bold;
      color: #555;
    }
    .descriptionText {
      margin-top: 4px;
      font-size: 12px;
      color: #a7a7a7;
    }
  }
  .settingRadioGroup {
    display: flex;
    margin-top: 16px;
    .ming.Radio {
      width: 200px;
    }
  }
  .logoBoxBorder {
    height: 40px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &:hover {
      .logoIconBox {
        display: block;
      }
    }
    .logoIconBox {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      text-align: center;
      line-height: 40px;
      z-index: 2;
    }
    img {
      height: 100%;
    }
  }
  .logoHeightSet {
    display: flex;
    align-items: center;
    margin-top: 16px;
    height: 36px;
    .contentText {
      font-size: 14px;
      color: #555;
    }
  }
  .themeColorWrapper {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    .colorItem {
      display: flex;
      align-items: center;
      width: 28px;
      height: 28px;
      border-radius: 3px;
      cursor: pointer;
      .insideBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8px;
        height: 20px;
        border-radius: 3px;
        margin-left: 4px;
        transition: width 0.2s ease;
        .icon-done {
          color: #fff;
          font-size: 18px;
        }
      }
      &:hover {
        .insideBlock {
          width: 20px;
        }
      }
      &.isActive {
        .insideBlock {
          width: 20px;
        }
      }
    }
  }
`]),B=(0,n.Z)([`
  &.ant-input-affix-wrapper {
    transition: none !important;
    padding: 6px 12px !important;
    &:hover {
      border-color: #1e88e5 !important;
    }
  }
  &.ant-input-affix-wrapper-focused {
    box-shadow: none !important;
    border-color: #1e88e5 !important;
  }
`],[`
  &.ant-input-affix-wrapper {
    transition: none !important;
    padding: 6px 12px !important;
    &:hover {
      border-color: #1e88e5 !important;
    }
  }
  &.ant-input-affix-wrapper-focused {
    box-shadow: none !important;
    border-color: #1e88e5 !important;
  }
`]),Qe=(0,n.Z)([`
  padding: 0;
  input {
    width: 50px;
    margin-left: 2px;
  }
`],[`
  padding: 0;
  input {
    width: 50px;
    margin-left: 2px;
  }
`]),Fe=(0,n.Z)([`
  z-index: 1000;
  background: #fff;
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 12px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    border-color: #2196f3;
  }
`],[`
  z-index: 1000;
  background: #fff;
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 12px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    border-color: #2196f3;
  }
`]),Te=(0,n.Z)([`
  position: relative;
  cursor: pointer;
  img {
    width: 28px;
    height: 28px;
  }
  .themeMask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: #fff;
      font-size: 18px;
    }
  }
`],[`
  position: relative;
  cursor: pointer;
  img {
    width: 28px;
    height: 28px;
  }
  .themeMask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: #fff;
      font-size: 18px;
    }
  }
`]),Cn=(0,w.ZP)(P.Z)(M),sn=w.ZP.div(o),un=(0,w.ZP)(W.default)(B),mn=(0,w.ZP)(N.Z)(Qe),Mn=w.ZP.div(Fe),En=w.ZP.div(Te),ke=(0,l.W8)(function(ye){var Ue=ye.moduleType,Me={0:_l("\u5E94\u7528\u6536\u85CF"),1:_l("\u6700\u8FD1\u4F7F\u7528"),2:_l("\u8BB0\u5F55\u6536\u85CF"),3:_l("\u56FE\u8868\u6536\u85CF")};return a.createElement(Mn,null,a.createElement(oe.Z,{className:"mRight8 Font14 Gray_9e",icon:"drag"}),a.createElement("span",null,Me[Ue]))}),Je=(0,l.JN)(function(ye){var Ue=ye.sortIds;return a.createElement("div",{className:"flexColumn mTop16"},Ue.map(function(Me,Re){return a.createElement(ke,{moduleType:Me,key:"item_"+Me,index:Re})}))});function an(ye){var Ue=ye.currentProject,Me=Ue===void 0?{}:Ue,Re=ye.platformSetting,Ae=Re===void 0?{}:Re,ze=ye.homeSetting,De=ze===void 0?{}:ze,Be=ye.updatePlatformSetting,Oe=ye.updateHomeSetting,yn=ye.onClose,Ve=ye.onSetAdvancedTheme,ue=ye.currentTheme,J=ye.advancedThemes,Z=Ae.slogan,Ze=Ae.bulletinBoards,qe=Ae.color,Dn=Ae.boardSwitch,Gn=Ae.logoSwitch,Yn=Ae.logo,_n=Ae.logoHeight,Nn=De.markedAppDisplay,Ln=De.displayCommonApp,at=De.rowCollect,qn=De.todoDisplay,rt=De.displayApp,ot=De.displayChart,$n=De.sortItems,In=(0,a.useState)(!1),Le=(0,E.Z)(In,2),dn=Le[0],rn=Le[1],Wn=(0,a.useState)(!1),Vn=(0,E.Z)(Wn,2),Hn=Vn[0],ct=Vn[1],ut=(0,a.useState)(!1),it=(0,E.Z)(ut,2),mt=it[0],lt=it[1],pt=(0,a.useState)(!1),st=(0,E.Z)(pt,2),Pt=st[0],ft=st[1],Tt=(0,a.useState)($n&&$n.length?$n.map(function(Ee){return Ee.moduleType}):[0,1,2,3]),gt=(0,E.Z)(Tt,2),dt=gt[0],kt=gt[1],St=Me.isSuperAdmin||Me.isProjectAdmin,zn=le().isEmpty(ue)?!qe||!le().includes(f.lB,qe)?"#2196F3":qe:ue.themeKey,At=[{value:0,text:_l("\u663E\u793A\u5F53\u524D\u7EC4\u7EC7")},{value:1,text:_l("\u663E\u793A\u6240\u6709\u7EC4\u7EC7")}],ht=[{value:0,text:_l("\u8BA1\u6570")},{value:1,text:_l("\u5217\u8868")}],Jn=function(tn){xe.Z.setLogo({logoName:tn,projectId:Me.projectId}).then(function(wn){wn&&Be({logo:tn,editingKey:"logo"})})};return a.createElement(a.Fragment,null,a.createElement(Cn,{visible:!0,maskStyle:{backgroundColor:"transparent"},width:480,title:_l("\u81EA\u5B9A\u4E49\u5DE5\u4F5C\u53F0"),placement:"right",afterVisibleChange:function(tn){return lt(tn)},closeIcon:a.createElement("i",{className:"icon-close Font24"}),onClose:yn},St&&a.createElement("div",{className:"mBottom32"},a.createElement("div",{className:"sectionTitle"},_l("\u7EC4\u7EC7\u8BBE\u7F6E")),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},"Logo"),a.createElement(t.Z,{size:"small",checked:Gn,onClick:function(){return Be({logoSwitch:!Gn})}})),a.createElement("div",{className:"mTop8"},a.createElement("div",{className:"logoBoxBorder"},a.createElement("img",{src:md.global.FileStoreConfig.pictureHost+"ProjectLogo/"+(Yn||"emptylogo.png")+"?imageView2/2/h/200/q/90",alt:"logo"}),a.createElement("div",{className:"logoIconBox",onClick:function(){Me.licenseType===0&&(0,te.Yg)({projectId:Me.projectId,explainText:_l("\u8BF7\u5347\u7EA7\u81F3\u4ED8\u8D39\u7248\u89E3\u9501\u5F00\u542F"),isFree:!0})}},Me.licenseType===0?a.createElement("span",{className:"Font15 icon-upload_pictures"}):a.createElement(C.Z,{className:"w100",options:{multi_selection:!1,filters:{mime_types:[{title:"image",extensions:"jpg,jpeg,png,gif"}]},type:4,max_file_size:"0.5m"},onUploaded:function(tn,wn,et){tn.disableBrowse(!1),rn(!1),Jn(wn.fileName)},onAdd:function(tn,wn){rn(!0),tn.disableBrowse()},onError:function(tn,wn,et){alert(et,2)}},a.createElement("span",{className:"Font15 icon-upload_pictures"})))),a.createElement("div",{className:"Gray_9e Font13 mTop10"},_l("\u5EFA\u8BAE\u5C3A\u5BF8 400*180 px\uFF0C512 KB\u4EE5\u5185"))),Gn&&a.createElement("div",{className:"logoHeightSet"},a.createElement("div",{className:"contentText mRight16"},_l("\u9AD8\u5EA6")),a.createElement("div",{className:"flex"},a.createElement(mn,{min:20,max:80,step:1,disabled:!mt,value:_n||40,liveUpdate:!1,onChange:function(tn){Be({logoHeight:Number(tn)})}})),a.createElement("div",{className:"contentText mLeft8"},"px")),a.createElement("div",{className:"mTop16"},a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText Normal"},_l("\u6807\u8BED"))),a.createElement("div",{className:"mTop8"},a.createElement(un,{showCount:!0,maxLength:20,defaultValue:Z,onBlur:function(tn){return Be({slogan:tn.target.value.trim()})}})))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",null,a.createElement("div",{className:"titleText"},_l("\u5BA3\u4F20\u680F")),a.createElement("div",{className:"descriptionText"},_l("\u53EF\u4EE5\u5728\u5BA3\u4F20\u680F\u4E2D\u6DFB\u52A0\u56FE\u7247\u94FE\u63A5\uFF0C\u5C55\u793A\u7EC4\u7EC7\u91CD\u8981\u4FE1\u606F"))),a.createElement(t.Z,{size:"small",checked:Dn,onClick:function(){return Be({boardSwitch:!Dn})}})),a.createElement(A.ZP,{type:"ghost",className:"mTop16",onClick:function(){return ct(!0)}},_l("\u8BBE\u7F6E"))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u4E3B\u9898\u8272"))),a.createElement("div",{className:"themeColorWrapper"},f.lB.map(function(Ee){return a.createElement("div",{className:ae()("colorItem",{isActive:zn===Ee}),style:{backgroundColor:(0,je.YT)(Ee,"0.12")},onClick:function(){Be({color:Ee,advancedSetting:{}})}},a.createElement("div",{className:"insideBlock",style:{backgroundColor:Ee}},zn===Ee&&a.createElement(oe.Z,{icon:"done"})))}),!md.global.Config.IsLocal&&J.map(function(Ee){return a.createElement(En,{onClick:function(){return zn!==Ee.themeKey&&Ve(Ee)}},a.createElement("img",{src:Ee.themeIcon}),zn===Ee.themeKey&&a.createElement("div",{className:"themeMask"},a.createElement(oe.Z,{icon:"done"})))})))),a.createElement("div",{className:"flexRow alignItemsCenter"},a.createElement("div",{className:"sectionTitle flex"},_l("\u4E2A\u4EBA\u8BBE\u7F6E")),a.createElement(A.ZP,{type:"ghost",onClick:function(){return ft(!0)}},_l("\u6392\u5E8F"))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u6D41\u7A0B\u5F85\u529E"))),a.createElement("div",{className:"settingRadioGroup"},ht.map(function(Ee,tn){return a.createElement(re.Z,(0,k.default)({key:tn},Ee,{size:"small",checked:qn===Ee.value,onClick:function(){return Oe({todoDisplay:Ee.value})}}))}))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u5E94\u7528\u6536\u85CF"))),a.createElement("div",{className:"settingRadioGroup"},At.map(function(Ee,tn){return a.createElement(re.Z,(0,k.default)({key:tn},Ee,{size:"small",checked:Nn===Ee.value,onClick:function(){return Oe({markedAppDisplay:Ee.value},"markedAppDisplay")}}))}))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u6700\u8FD1\u4F7F\u7528")),a.createElement(t.Z,{size:"small",checked:Ln,onClick:function(){return Oe({displayCommonApp:!Ln})}}))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u8BB0\u5F55\u6536\u85CF")),a.createElement(t.Z,{size:"small",checked:at,onClick:function(){return Oe({rowCollect:!at})}}))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u56FE\u8868\u6536\u85CF")),a.createElement(t.Z,{size:"small",checked:ot,onClick:function(){return Oe({displayChart:!ot})}}))),a.createElement(sn,null,a.createElement("div",{className:"settingHeader"},a.createElement("div",{className:"titleText"},_l("\u5E94\u7528")),a.createElement(t.Z,{size:"small",checked:rt,onClick:function(){return Oe({displayApp:!rt})}})))),Hn&&a.createElement(D,{bulletinBoards:Ze,updatePlatformSetting:Be,onClose:function(){return ct(!1)}}),Pt&&a.createElement(he.Z,{visible:!0,width:480,title:_l("\u6392\u5E8F"),onCancel:function(){return ft(!1)},onOk:function(){var tn=dt.map(function(wn){return{moduleType:wn}});Oe({sortItems:tn}),ft(!1)}},a.createElement(Je,{sortIds:dt,onSortEnd:function(tn){var wn=tn.oldIndex,et=tn.newIndex;if(wn!==et){var Mt=(0,l.Rp)(dt,wn,et);kt(Mt)}}})))}},65827:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>f});var he=e(54208),re=e(33867),k=e(88239),A=e(12424),C=e(86735),t=e(67294),E=e(5017),oe=e(86249),N=e(93967),c=e.n(N),W=e(58064),u=e(96486),P=e.n(u),n=e(55857),a=e(71372),w=e.n(a),F=e(62509),le=(0,C.Z)([`
  height: 100%;
  display: flex;
  flex-direction: column;
  .finishedCon {
    padding: 8px 10px;
    border-radius: 3px;
    color: #9e9e9e;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #f8f8f8;
    }
  }
  .processItem {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;

    .countText {
      font-size: 28px;
      font-weight: bold;
      font-family: Arial;
    }

    &:hover {
      background: #f8f8f8;
    }
  }
  .divider {
    margin: 20px;
    width: 1px;
    background: #d5d5d5;
  }
`],[`
  height: 100%;
  display: flex;
  flex-direction: column;
  .finishedCon {
    padding: 8px 10px;
    border-radius: 3px;
    color: #9e9e9e;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #f8f8f8;
    }
  }
  .processItem {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;

    .countText {
      font-size: 28px;
      font-weight: bold;
      font-family: Arial;
    }

    &:hover {
      background: #f8f8f8;
    }
  }
  .divider {
    margin: 20px;
    width: 1px;
    background: #d5d5d5;
  }
`]),ie=(0,C.Z)([`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 8px 0px 20px;
  .tabItem {
    display: flex;
    align-items: center;
    position: relative;
    padding: 8px 12px;
    border-radius: 4px;

    .itemText {
      font-size: 14px;
      font-weight: bold;
    }
    .itemCount {
      width: auto;
      margin-left: 4px;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      border-radius: 10px;
      background: rgba(244, 67, 54, 0.16);
      color: #f44336;
      font-size: 12px;
      font-weight: bold;
    }

    &::after {
      content: '';
      position: absolute;
      height: 3px;
      left: 8px;
      right: 8px;
      bottom: 0px;
      display: inline-block;
    }
    &.isCur {
      font-weight: bold;
      color: `,`;
      &::after {
        background-color: `,`;
      }
      &:hover {
        background: #fff !important;
      }
    }
    &:hover {
      background: #f5f5f5;
    }
  }

  .viewAll {
    display: flex;
    align-items: center;
    padding: 6px 4px 6px 10px;
    border-radius: 4px;
    color: #9e9e9e;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
`],[`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 8px 0px 20px;
  .tabItem {
    display: flex;
    align-items: center;
    position: relative;
    padding: 8px 12px;
    border-radius: 4px;

    .itemText {
      font-size: 14px;
      font-weight: bold;
    }
    .itemCount {
      width: auto;
      margin-left: 4px;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      border-radius: 10px;
      background: rgba(244, 67, 54, 0.16);
      color: #f44336;
      font-size: 12px;
      font-weight: bold;
    }

    &::after {
      content: '';
      position: absolute;
      height: 3px;
      left: 8px;
      right: 8px;
      bottom: 0px;
      display: inline-block;
    }
    &.isCur {
      font-weight: bold;
      color: `,`;
      &::after {
        background-color: `,`;
      }
      &:hover {
        background: #fff !important;
      }
    }
    &:hover {
      background: #f5f5f5;
    }
  }

  .viewAll {
    display: flex;
    align-items: center;
    padding: 6px 4px 6px 10px;
    border-radius: 4px;
    color: #9e9e9e;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
`]),ae=(0,C.Z)([`
  padding: 0 20px;
  overflow: auto;
  height: 180px;
  &.displayComplete {
    min-height: 36px;
    max-height: 180px;
    height: auto;
  }
  .listItem {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    padding: 0 6px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
      .rightText {
        display: none;
      }
      .dateText {
        display: block;
        min-width: 135px;
        text-align: right;
      }
    }
    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .rightText {
      color: #9f9f9f;
      max-width: 180px;
      text-align: right;
    }
    .dateText {
      display: none;
      span {
        color: #9f9f9f;
      }
      .openIcon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin-left: 12px;
        cursor: pointer;
        &:hover {
          background: #fff;
        }
      }
    }
  }
  .allBtn {
    width: fit-content;
    height: 32px;
    line-height: 32px;
    padding: 0 20px;
    border-radius: 3px;
    margin-top: 16px;
    cursor: pointer;
    color: `,`;
    background: `,`;
    &:hover {
      background: `,`;
    }
  }
`],[`
  padding: 0 20px;
  overflow: auto;
  height: 180px;
  &.displayComplete {
    min-height: 36px;
    max-height: 180px;
    height: auto;
  }
  .listItem {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    padding: 0 6px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
      .rightText {
        display: none;
      }
      .dateText {
        display: block;
        min-width: 135px;
        text-align: right;
      }
    }
    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .rightText {
      color: #9f9f9f;
      max-width: 180px;
      text-align: right;
    }
    .dateText {
      display: none;
      span {
        color: #9f9f9f;
      }
      .openIcon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin-left: 12px;
        cursor: pointer;
        &:hover {
          background: #fff;
        }
      }
    }
  }
  .allBtn {
    width: fit-content;
    height: 32px;
    line-height: 32px;
    padding: 0 20px;
    border-radius: 3px;
    margin-top: 16px;
    cursor: pointer;
    color: `,`;
    background: `,`;
    &:hover {
      background: `,`;
    }
  }
`]),je=(0,C.Z)([`
  flex: 1;
  padding: 24px 24px 12px 24px;
  .skeletonBlock {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    border-radius: 11px;
  }
`],[`
  flex: 1;
  padding: 24px 24px 12px 24px;
  .skeletonBlock {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    border-radius: 11px;
  }
`]),Ce=E.ZP.div(le),p=E.ZP.div(ie,function(g){var b=g.themeColor;return b},function(g){var b=g.themeColor;return b}),l=E.ZP.div(ae,function(g){var b=g.themeColor;return b},function(g){var b=g.btnColor;return b},function(g){var b=g.hoverColor;return b}),i=E.ZP.div(je);function f(g){var b=g.displayComplete,I=g.countData,U=g.updateCountData,ce=g.dashboardColor,fe=g.todoDisplay,He=g.loading,Ye=g.flag,Xe=g.setFlag,D=g.currentTheme,xe=(0,t.useState)({visible:!1}),te=(0,A.Z)(xe,2),M=te[0],o=te[1],B=(0,t.useState)(0),Qe=(0,A.Z)(B,2),Fe=Qe[0],Te=Qe[1],Cn=(0,t.useState)(!0),sn=(0,A.Z)(Cn,2),un=sn[0],mn=sn[1],Mn=(0,t.useState)([]),En=(0,A.Z)(Mn,2),ke=En[0],Je=En[1],an=(0,t.useState)(null),ye=(0,A.Z)(an,2),Ue=ye[0],Me=ye[1],Re=(0,t.useState)(!1),Ae=(0,A.Z)(Re,2),ze=Ae[0],De=Ae[1],Be=[{key:"waitingApproval",icon:"stamp",shallowIcon:"stamp_shallow",text:_l("\u5BA1\u6279"),tab:oe.TABS.WAITING_APPROVE},{key:"waitingWrite",icon:"fill",shallowIcon:"fill_shallow",text:_l("\u586B\u5199"),tab:oe.TABS.WAITING_FILL},{key:"waitingExamine",icon:"sending",shallowIcon:"sending_shallow",text:_l("\u6284\u9001"),tab:oe.TABS.WAITING_EXAMINE},{key:"mySponsor",icon:"adds",shallowIcon:"adds_shallow",text:_l("\u53D1\u8D77"),tab:oe.TABS.MY_SPONSOR},{key:"finished",icon:"Finish",text:_l("\u5DF2\u5B8C\u6210"),tab:oe.TABS.COMPLETE}];(0,t.useEffect)(function(){fe===1&&Oe(),Ye&&(0,F.C)().then(function(J){return U(J)})},[fe,Ye]);var Oe=function(){mn(!0);var Z=(0,k.default)({pageIndex:1,pageSize:30},(0,oe.getStateParam)(Fe));W.Z.getTodoList(Z).then(function(Ze){Ze&&(Je(Ze),mn(!1),De(Ze.length>=20))})},yn=function(Z){var Ze=I.waitingExamine,qe=I.myProcessCount,Dn=ke.filter(function(Gn){return Gn.workId!==Z.workId});Je(Dn),U((0,k.default)({},I,{waitingExamine:Ze-1,myProcessCount:qe-1}))},Ve=function(Z){var Ze=I.waitingWrite,qe=I.waitingApproval,Dn=I.waitingDispose,Gn=I.myProcessCount,Yn=ke.filter(function(Nn){return Nn.workId!==Z.workId});Je(Yn);var _n=null;Z.flowNodeType===3&&(_n={waitingWrite:Ze-1}),Z.flowNodeType===4&&(_n={waitingApproval:qe-1}),U((0,k.default)({},I,_n,{waitingDispose:Dn-1,myProcessCount:Gn-1}))},ue=function(){return t.createElement(t.Fragment,null,t.createElement(p,{themeColor:ce.themeColor},Be.filter(function(Z){return Z.key!=="finished"}).map(function(Z,Ze){return t.createElement("div",{className:"flexRow alignItemsCenter pointer",onClick:function(){Te(Z.tab),Xe(+new Date)}},t.createElement("div",{key:Ze,className:c()("tabItem",{isCur:Fe===Z.tab})},t.createElement("span",{className:"itemText"},Z.text),!!I[Z.key]&&t.createElement("div",{className:Z.key!=="mySponsor"?"itemCount":"mLeft4 bold Gray_9e"},I[Z.key]>99?"99+":I[Z.key])))}),t.createElement("div",{className:"flex"}),t.createElement("div",{className:"viewAll",onClick:function(){return o({visible:!0,activeTab:Fe})}},t.createElement("span",null,_l("\u5168\u90E8")),t.createElement(re.Z,{icon:"arrow-right-border",className:"mLeft5 Font16"}))),un&&t.createElement(he.Z,{className:"mTop10"}),!un&&!ke.length&&t.createElement("div",{className:"flex flexColumn alignItemsCenter justifyContentCenter mTop32 mBottom32"},t.createElement("img",{src:w(),width:80}),t.createElement("div",{className:"Font14"},t.createElement("span",{className:"Gray_75"},Fe===oe.TABS.MY_SPONSOR?_l("\u6682\u65E0\u6D41\u7A0B"):_l("\u6CA1\u6709\u5F85\u529E")))),!un&&!!ke.length&&t.createElement(l,{themeColor:ce.themeColor,btnColor:ce.activeColor,hoverColor:ce.hoverColor,className:c()({displayComplete:b})},ke.map(function(Z,Ze){return t.createElement("div",{key:Ze,className:"listItem",onClick:function(){return Me(Z)}},t.createElement("img",{src:P().get(Z,"createAccount.avatar")}),t.createElement("div",{className:"bold mLeft8 overflow_ellipsis",title:Z.title||_l("\u672A\u547D\u540D")},Z.title||_l("\u672A\u547D\u540D")),t.createElement("div",{className:"flex"}),t.createElement("div",{className:"rightText overflow_ellipsis",title:P().get(Z,"app.name")+" \xB7 "+P().get(Z,"process.name")},P().get(Z,"app.name")+" \xB7 "+P().get(Z,"process.name")),t.createElement("div",{className:"dateText"},t.createElement("span",null,createTimeSpan(Z.createDate))))}),ze&&t.createElement("div",{className:"allBtn",onClick:function(){return o({visible:!0,activeTab:Fe})}},_l("\u67E5\u770B\u5168\u90E8"))),Ue?t.createElement(n.Z,{id:Ue.id,workId:Ue.workId,onClose:function(){return Me(null)},onRead:function(){Fe===oe.TABS.WAITING_EXAMINE&&yn(Ue)},onSave:function(){[oe.TABS.WAITING_APPROVE,oe.TABS.WAITING_FILL].includes(Fe)&&Ve(Ue)},onError:function(){if([oe.TABS.WAITING_APPROVE,oe.TABS.WAITING_FILL].includes(Fe)&&Ve(Ue),Fe===oe.TABS.MY_SPONSOR||Fe===oe.TABS.COMPLETE){var Ze=ke.filter(function(Dn){return Dn.workId!==Ue.workId});if(Je(Ze),Fe===oe.TABS.MY_SPONSOR){var qe=I.mySponsor;U((0,k.default)({},I,{mySponsor:qe-1}))}}Me(null)}}):null)};return He?t.createElement(i,null,t.createElement("div",{className:"skeletonBlock",style:{height:fe===1?192:152}})):t.createElement(Ce,null,fe===1&&ue(),fe!==1&&t.createElement(t.Fragment,null,t.createElement("div",{className:"cardTitle"},t.createElement("div",{className:"titleText"},D.processIcon&&t.createElement("img",{src:D.processIcon}),_l("\u6D41\u7A0B\u5F85\u529E")),t.createElement("div",{className:"flex"}),!b&&t.createElement("div",{className:"finishedCon",onClick:function(Z){Z.stopPropagation(),o({visible:!0,activeTab:oe.TABS.COMPLETE})}},_l("\u5DF2\u5B8C\u6210"))),t.createElement("div",{className:"flex flexRow pLeft20 pRight20"},Be.filter(function(J){return b||J.key!=="finished"}).map(function(J){return t.createElement(t.Fragment,null,J.key==="finished"&&t.createElement("div",{className:"divider"}),t.createElement("div",{className:"processItem",onClick:function(){return o({visible:!0,activeTab:J.tab})}},t.createElement("div",{className:"countText"},I[J.key]||0),t.createElement("div",{className:"Font15 mBottom16"},J.text)))}))),M.visible&&t.createElement(oe.default,{countData:I,activeTab:M.activeTab,onCancel:function(){o({visible:!1}),fe===1&&Oe()},updateCountData:U}))}},9822:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>c});var he=e(12424),re=e(86735),k=e(67294),A=e(5017),C=e(85631),t=e(93967),E=e.n(t),oe=(0,re.Z)([`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  .tabList {
    display: flex;
    padding: 0 20px;
    .tabItem {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        height: 3px;
        left: 8px;
        right: 8px;
        bottom: 0px;
        display: inline-block;
      }
      &.isCur {
        font-weight: bold;
        color: `,`;
        &::after {
          background-color: `,`;
        }
        &:hover {
          background: #fff !important;
        }
      }
      &:hover {
        background: #f5f5f5;
      }
    }
  }
  .overflowAuto {
    overflow: auto;
  }
`],[`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  .tabList {
    display: flex;
    padding: 0 20px;
    .tabItem {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        height: 3px;
        left: 8px;
        right: 8px;
        bottom: 0px;
        display: inline-block;
      }
      &.isCur {
        font-weight: bold;
        color: `,`;
        &::after {
          background-color: `,`;
        }
        &:hover {
          background: #fff !important;
        }
      }
      &:hover {
        background: #f5f5f5;
      }
    }
  }
  .overflowAuto {
    overflow: auto;
  }
`]),N=A.ZP.div(oe,function(W){var u=W.themeColor;return u},function(W){var u=W.themeColor;return u});function c(W){var u=W.projectId,P=W.onMarkApp,n=W.recentApps,a=W.recentAppItems,w=W.dashboardColor,F=W.loading,le=W.currentTheme,ie=(0,k.useState)("app"),ae=(0,he.Z)(ie,2),je=ae[0],Ce=ae[1],p=[{key:"app",text:_l("\u5E94\u7528")},{key:"item",text:_l("\u5E94\u7528\u9879")}];return k.createElement(N,{themeColor:w.themeColor},k.createElement("div",{className:"cardTitle"},k.createElement("div",{className:"titleText"},le.recentIcon&&k.createElement("img",{src:le.recentIcon}),_l("\u6700\u8FD1\u4F7F\u7528")),k.createElement("div",{className:"tabList"},p.map(function(l){return k.createElement("div",{key:l.key,className:E()("tabItem",{isCur:l.key===je}),onClick:function(){return Ce(l.key)}},l.text)}))),k.createElement("div",{className:"flex overflowAuto"},k.createElement(C.Z,{projectId:u,apps:je==="app"?n:a,onMarkApp:P,loading:F})))}},85631:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>xe});var he=e(24043),re=e.n(he),k=e(12424),A=e(26581),C=e(33867),t=e(88239),E=e(6100),oe=e(86735),N=e(67294),c=e(5017),W=e(93967),u=e.n(W),P=e(40240),n=e(67187),a=e(54644),w=e(15577),F=e(1714),le=e(43230),ie=e.n(le),ae=e(35663),je=e.n(ae),Ce=e(96486),p=e.n(Ce),l=e(36021),i=e(77632),f=e(95742),g=e(33771),b=(0,oe.Z)([`
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0 20px;

  .listWrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &.isFold {
      max-height: 116px;
    }
  }
`],[`
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0 20px;

  .listWrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &.isFold {
      max-height: 116px;
    }
  }
`]),I=(0,oe.Z)([`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;
  height: 50px;
  padding: 8px;
  border-radius: 8px;
  margin: 4px 0;
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
    .markStarIcon {
      display: block;
    }
  }

  .appIcon {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .textContent {
    margin-left: 10px;
    min-width: 0;
    .titleName {
      font-size: 14px;
      color: #333;
    }
    .appName {
      font-size: 12px;
      color: #999;
    }
  }
  .markStarIcon {
    display: none;
    text-align: center;
    width: 32px;
    height: 32px;
    min-width: 32px;
    line-height: 32px;
    margin-right: -4px;
    border-radius: 8px;
    &:hover {
      background: #fff;
    }

    .icon-task-star {
      color: #f9ce1d;
    }
    .icon-star-hollow {
      color: #9e9e9e;
      &:hover {
        color: #1e88e5;
      }
    }
  }
`],[`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;
  height: 50px;
  padding: 8px;
  border-radius: 8px;
  margin: 4px 0;
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
    .markStarIcon {
      display: block;
    }
  }

  .appIcon {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .textContent {
    margin-left: 10px;
    min-width: 0;
    .titleName {
      font-size: 14px;
      color: #333;
    }
    .appName {
      font-size: 12px;
      color: #999;
    }
  }
  .markStarIcon {
    display: none;
    text-align: center;
    width: 32px;
    height: 32px;
    min-width: 32px;
    line-height: 32px;
    margin-right: -4px;
    border-radius: 8px;
    &:hover {
      background: #fff;
    }

    .icon-task-star {
      color: #f9ce1d;
    }
    .icon-star-hollow {
      color: #9e9e9e;
      &:hover {
        color: #1e88e5;
      }
    }
  }
`]),U=(0,oe.Z)([`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 48px;
  margin-bottom: 20px;
  .iconSkeleton {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    background: #f6f6f6;
  }
  .textSkeleton {
    width: 60px;
    height: 20px;
    border-radius: 11px;
    background: #f6f6f6;
    margin-left: 6px;
  }
`],[`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 48px;
  margin-bottom: 20px;
  .iconSkeleton {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    background: #f6f6f6;
  }
  .textSkeleton {
    width: 60px;
    height: 20px;
    border-radius: 11px;
    background: #f6f6f6;
    margin-left: 6px;
  }
`]),ce=c.ZP.div(b),fe=c.ZP.div(I),He=c.ZP.div(U),Ye=(0,f.W8)(function(te){var M=te.item,o=te.projectId,B=te.onMarkApp,Qe=function(Te){switch(Te.type){case 0:(0,w.Ye)("app",Te.id);break;case 1:(0,w.Ye)("customPage",Te.itemId);break;case 2:(0,w.Ye)("worksheet",Te.itemId);break;default:(0,w.Ye)("app",Te.id);break}};return N.createElement(fe,{onClick:function(Te){Te.stopPropagation(),Te.preventDefault(),Qe(M),M.createType===1?window.open((0,a.Rx)(M.urlTemplate,o,M.id)):M.type?(0,i.te)(M.itemId):(0,l.T8)((0,a.$r)(M.id,M.pcNaviStyle,M.selectAppItmeType))}},N.createElement("div",{className:"flexRow alignItemsCenter"},N.createElement("div",{className:"appIcon",style:{backgroundColor:M.type?(0,F.ZW)(M,!0).bg:(0,F.ZW)(M).bg}},N.createElement(E.Z,{url:M.type?M.itemUrl:M.iconUrl,fill:M.type?(0,F.ZW)(M,!0).iconColor:(0,F.ZW)(M).iconColor,size:20}),N.createElement(n.Z,(0,t.default)({},p().pick(M,["isGoodsStatus","isNew","fixed"]),{isRecent:!0}))),N.createElement("div",{className:"textContent"},N.createElement("div",{className:"titleName overflow_ellipsis",title:M.type?M.itemName:M.name},M.type?M.itemName:M.name),!!M.type&&N.createElement("div",{className:"appName overflow_ellipsis",title:M.name},M.name))),N.createElement(A.Z,{text:M.isMarked?_l("\u53D6\u6D88\u6536\u85CF"):_l("\u6536\u85CF"),popupPlacement:"bottom"},N.createElement("div",{className:"markStarIcon stopPropagation",onClick:function(Te){Te.stopPropagation(),Te.preventDefault(),B((0,t.default)({projectId:o,isMark:!M.isMarked,appId:M.id},p().pick(M,["type","itemId","itemName","itemUrl"])))}},N.createElement(C.Z,{className:"Font16",icon:M.isMarked?"task-star":"star-hollow"}))))}),Xe=(0,f.JN)(function(te){var M=te.apps,o=te.draggable,B=te.isFold,Qe=te.setIsOverflow,Fe=te.width,Te=(0,N.useRef)(),Cn=180;(0,N.useEffect)(function(){Qe&&Qe(Te.current&&Te.current.scrollHeight>116)},[M,Te.current]);var sn=function(){var mn=Math.floor((Fe-40)/Cn),Mn=M.length%mn,En=[];if(!Mn)return null;for(var ke=0;ke<mn-Mn;ke++)En.push(N.createElement(fe,{className:"Visibility"}));return En};return N.createElement("div",{ref:Te,className:u()("listWrapper",{isFold:B})},M.map(function(un,mn){return N.createElement(Ye,(0,t.default)({item:un},te,{key:"item_"+(un.type?un.itemId:un.id),index:mn,disabled:!o}))}),sn())});function D(te){var M=te.apps,o=M===void 0?[]:M,B=te.loading,Qe=te.isCollect,Fe=te.onAppSorted,Te=te.projectId,Cn=(0,N.useState)([]),sn=(0,k.Z)(Cn,2),un=sn[0],mn=sn[1];(0,N.useEffect)(function(){mn(o.map(function(ke){return ke.type?ke.itemId:ke.id}))},[o]);var Mn=function(){return re()({length:6}).map(function(Je,an){return N.createElement(He,{key:an},N.createElement("div",{className:"iconSkeleton"}),N.createElement("div",{className:"textSkeleton"}))})},En=function(){return N.createElement("div",{className:"emptyWrapper"},N.createElement("img",{src:Qe?ie():je()}),Qe?N.createElement("span",null,_l("\u6CA1\u6709\u6536\u85CF")):N.createElement("span",null,_l("\u6CA1\u6709\u6700\u8FD1\u4F7F\u7528")))};return N.createElement(ce,null,B&&Mn(),!B&&(o.length?N.createElement(Xe,(0,t.default)({},p().omit(te,"apps"),{axis:"xy",distance:3,helperClass:"collectAppDragItem",apps:un.map(function(ke){return p().find(o,function(Je){return Je.type?Je.itemId===ke:Je.id===ke})}).filter(function(ke){return!p().isUndefined(ke)}),onSortEnd:function(Je){var an=Je.oldIndex,ye=Je.newIndex;if(an!==ye){var Ue=(0,f.Rp)(un,an,ye);mn(Ue),Fe({appIds:Ue,projectId:Te,sortType:1})}}})):En()))}const xe=(0,P.Z)(D)},34632:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>CardItem,Z:()=>Dashboard});var ming_ui_components_ScrollView__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(25273),babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(88239),antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(97373),antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_1__),antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(94055),ming_ui_components_Icon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(33867),babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12424),babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(86735),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67294),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5017),_Process__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(65827),router_navigateTo__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(36021),_AppCenter_appHomeReducer__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(50263),_AppCenter_components_NoProjectsStatus__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(94158),_AppCenter_components_AppGrid__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(7472),_CollectionApps__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(37996),_BulletinBoard__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(4037),_utils__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1714),_AppCenter_utils__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(54644),_DashboardSetting__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(25506),src_pages_AppHomepage_RecordFav__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(63353),_RecentApps__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(9822),_CollectionCharts__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(32563),classnames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(93967),classnames__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__),lodash__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(96486),lodash__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__),src_util__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(15577),js_base64__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19575),js_base64__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_7__),axios__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(51120),_templateObject=(0,babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.Z)([`
  flex: 1;

  .dashboardContent {
    padding: 0 36px;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: content-box;
    .dashboardHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 24px 0 16px;
      white-space: nowrap;
      .logoWrapper {
        display: flex;
        align-items: center;
        img {
          height: `,`;
        }
      }

      .headerIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        cursor: pointer;
        i {
          color: #676767;
        }
        &:hover {
          background: #fff;
        }
      }
    }

    .Height300 {
      height: 300px;
    }

    .sortableCardsWrap {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 20px;

      .sortItem {
        width: 100%;
        margin-bottom: 0;
        &.halfWidth {
          width: calc(50% - 10px);
        }
      }
    }
  }
`],[`
  flex: 1;

  .dashboardContent {
    padding: 0 36px;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: content-box;
    .dashboardHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 24px 0 16px;
      white-space: nowrap;
      .logoWrapper {
        display: flex;
        align-items: center;
        img {
          height: `,`;
        }
      }

      .headerIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        cursor: pointer;
        i {
          color: #676767;
        }
        &:hover {
          background: #fff;
        }
      }
    }

    .Height300 {
      height: 300px;
    }

    .sortableCardsWrap {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 20px;

      .sortItem {
        width: 100%;
        margin-bottom: 0;
        &.halfWidth {
          width: calc(50% - 10px);
        }
      }
    }
  }
`]),_templateObject2=(0,babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.Z)([`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #fff;
  padding-bottom: 12px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 20px;

  &.bulletinBoard {
    padding: 0;
  }
  &.appCollectCard {
    min-height: 118px;
    .autosize {
      height: auto !important;
    }
  }
  &.recentCard,
  &.rowCollectCard {
    max-height: 300px;
    &.halfWidth {
      height: 300px;
    }
  }
  &.recentCard {
    min-height: 118px;
  }
  &.rowCollectCard {
    min-height: 100px;
  }
  .cardTitle {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 8px 0px 20px;
    position: relative;
    .titleText {
      display: flex;
      align-items: center;
      font-size: 17px;
      font-weight: bold;
      img {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }
    .viewAll {
      display: flex;
      align-items: center;
      padding: 6px 4px 6px 10px;
      margin-top: -4px;
      border-radius: 4px;
      color: #9e9e9e;
      cursor: pointer;
      &:hover {
        background-color: #f8f8f8;
      }
    }
  }
  .emptyWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #868686;
    font-size: 14px;
    margin-top: 36px;
    margin-bottom: 36px;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 8px;
    }
    .boldText {
      font-weight: bold;
      margin-left: 4px;
      margin-right: 4px;
      color: #333;
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #fff;
  padding-bottom: 12px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 20px;

  &.bulletinBoard {
    padding: 0;
  }
  &.appCollectCard {
    min-height: 118px;
    .autosize {
      height: auto !important;
    }
  }
  &.recentCard,
  &.rowCollectCard {
    max-height: 300px;
    &.halfWidth {
      height: 300px;
    }
  }
  &.recentCard {
    min-height: 118px;
  }
  &.rowCollectCard {
    min-height: 100px;
  }
  .cardTitle {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 8px 0px 20px;
    position: relative;
    .titleText {
      display: flex;
      align-items: center;
      font-size: 17px;
      font-weight: bold;
      img {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }
    .viewAll {
      display: flex;
      align-items: center;
      padding: 6px 4px 6px 10px;
      margin-top: -4px;
      border-radius: 4px;
      color: #9e9e9e;
      cursor: pointer;
      &:hover {
        background-color: #f8f8f8;
      }
    }
  }
  .emptyWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #868686;
    font-size: 14px;
    margin-top: 36px;
    margin-bottom: 36px;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 8px;
    }
    .boldText {
      font-weight: bold;
      margin-left: 4px;
      margin-right: 4px;
      color: #333;
    }
  }
`]),_templateObject3=(0,babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.Z)([`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 16px;
  cursor: pointer;

  .newThemeIcon {
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 16px;
  cursor: pointer;

  .newThemeIcon {
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`]),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(_templateObject,function(me){var ge=me.logoHeight;return ge+"px"}),CardItem=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(_templateObject2),NewThemeSet=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(_templateObject3);function Dashboard(props){var projectId=props.projectId,currentProject=props.currentProject,countData=props.countData,updateCountData=props.updateCountData,_props$platformSettin=props.platformSetting,platformSetting=_props$platformSettin===void 0?{}:_props$platformSettin,updatePlatformSetting=props.updatePlatformSetting,dashboardColor=props.dashboardColor,hasBgImg=props.hasBgImg,projects=lodash__WEBPACK_IMPORTED_MODULE_6___default().get(md,"global.Account.projects"),isExternal=projectId==="external",isAdmin=currentProject.isSuperAdmin||currentProject.isProjectAppManager,_useReducer=(0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_AppCenter_appHomeReducer__WEBPACK_IMPORTED_MODULE_9__.I6,_AppCenter_appHomeReducer__WEBPACK_IMPORTED_MODULE_9__.E3),_useReducer2=(0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.Z)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1],actions=(0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function(){return new _AppCenter_appHomeReducer__WEBPACK_IMPORTED_MODULE_9__.Xl({dispatch,state})},[state]),_useState=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),_useState2=(0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState,2),flag=_useState2[0],setFlag=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),_useState4=(0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState3,2),settingVisible=_useState4[0],setSettingVisible=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState6=(0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState5,2),advancedThemes=_useState6[0],setAdvancedThemes=_useState6[1],_state$origin=state.origin,origin=_state$origin===void 0?{}:_state$origin,dashboardLoading=state.dashboardLoading,keywords=state.keywords,groups=state.groups,_state$markedGroup=state.markedGroup,markedGroup=_state$markedGroup===void 0?[]:_state$markedGroup,_state$apps=state.apps,apps=_state$apps===void 0?[]:_state$apps,_state$externalApps=state.externalApps,externalApps=_state$externalApps===void 0?[]:_state$externalApps,_state$aloneApps=state.aloneApps,aloneApps=_state$aloneApps===void 0?[]:_state$aloneApps,_state$recentApps=state.recentApps,recentApps=_state$recentApps===void 0?[]:_state$recentApps,_state$markedApps=state.markedApps,markedApps=_state$markedApps===void 0?[]:_state$markedApps,_state$recentAppItems=state.recentAppItems,recentAppItems=_state$recentAppItems===void 0?[]:_state$recentAppItems,logo=platformSetting.logo,logoSwitch=platformSetting.logoSwitch,slogan=platformSetting.slogan,boardSwitch=platformSetting.boardSwitch,_platformSetting$colo=platformSetting.color,color=_platformSetting$colo===void 0?"":_platformSetting$colo,logoHeight=platformSetting.logoHeight,_platformSetting$bull=platformSetting.bulletinBoards,bulletinBoards=_platformSetting$bull===void 0?[]:_platformSetting$bull,_platformSetting$adva=platformSetting.advancedSetting,advancedSetting=_platformSetting$adva===void 0?{}:_platformSetting$adva,_ref2=origin.homeSetting||{},displayCommonApp=_ref2.displayCommonApp,rowCollect=_ref2.rowCollect,todoDisplay=_ref2.todoDisplay,displayApp=_ref2.displayApp,displayChart=_ref2.displayChart,sortItems=_ref2.sortItems,hasNewTheme=(currentProject.isSuperAdmin||currentProject.isProjectAdmin)&&!md.global.Config.IsLocal&&!!advancedThemes.filter(function(me){return me.isNewTheme}).length,newTheme=advancedThemes.filter(function(me){return me.isNewTheme})[0]||{},fetchData=function(){isExternal?actions.loadAppAndGroups({projectId}):actions.loadDashboardInfo({projectId})};(0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function(){fetch("https://filepub.mingdao.com/dashboard/themes.js").then(function(me){return me.text()}).then(function(res){return setAdvancedThemes(eval(res))})},[]),(0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(fetchData,[projectId]),(0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function(){return color&&$(".appCenterHeader").css("background",color==="#2196F3"||!lodash__WEBPACK_IMPORTED_MODULE_6___default().includes(_utils__WEBPACK_IMPORTED_MODULE_10__.lB,color)&&!color.startsWith("#")?"#fff":dashboardColor.bgColor),function(){$(".appCenterHeader").css("background","#fff")}},[color]);var onSetAdvancedTheme=function me(ge){var e=!!bulletinBoards.filter(function(he){return he.themeKey===ge.themeKey}).length;e?updatePlatformSetting({color:ge.themeColor,boardSwitch:!0,advancedSetting:ge}):(0,src_util__WEBPACK_IMPORTED_MODULE_11__.LP)([{bucket:4,ext:".jpg"}]).then(function(he){if(he.error)alert(he.error);else{var re=md.global.FileStoreConfig.uploadHost+"putb64/-1/key/"+js_base64__WEBPACK_IMPORTED_MODULE_7__.Base64.encode(he[0].key);axios__WEBPACK_IMPORTED_MODULE_12__.Z.post(re,ge.bulletinPic.replace("data:image/jpeg;base64,",""),{headers:{"Content-Type":"application/octet-stream",Authorization:"UpToken "+he[0].uptoken}}).then(function(k){var A=k.data,C=A||{},t=C.key,E=t===void 0?"":t;updatePlatformSetting({color:ge.themeColor,boardSwitch:!0,bulletinBoards:[{url:md.global.FileStoreConfig.pictureHost+E,key:E,bucket:4,link:ge.bulletinLink,title:ge.bulletinTitle,themeKey:ge.themeKey}].concat(bulletinBoards),advancedSetting:ge})})}})},renderSortableModules=function me(){var ge=sortItems&&sortItems.length?sortItems.map(function(he){return he.moduleType}):[0,1,2,3],e=Math.abs(lodash__WEBPACK_IMPORTED_MODULE_6___default().indexOf(ge,_utils__WEBPACK_IMPORTED_MODULE_10__.OB.RECENT)-lodash__WEBPACK_IMPORTED_MODULE_6___default().indexOf(ge,_utils__WEBPACK_IMPORTED_MODULE_10__.OB.ROW_COLLECTION))===1&&displayCommonApp&&rowCollect;return react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"sortableCardsWrap"},ge.map(function(he){switch(he){case _utils__WEBPACK_IMPORTED_MODULE_10__.OB.APP_COLLECTION:return markedApps.length?react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,{className:"sortItem appCollectCard"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollectionApps__WEBPACK_IMPORTED_MODULE_13__.Z,{loading:dashboardLoading,projectId,apps,markedApps,onMarkApp:function(k){return actions.markApp(k)},onMarkApps:function(k){return actions.markApps(k)},onAppSorted:function(k){actions.updateAppSort(k)},currentTheme:advancedSetting})):null;case _utils__WEBPACK_IMPORTED_MODULE_10__.OB.RECENT:return displayCommonApp?react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()("sortItem recentCard",{halfWidth:e})},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_RecentApps__WEBPACK_IMPORTED_MODULE_14__.Z,{loading:dashboardLoading,projectId,recentApps,recentAppItems,onMarkApp:function(k){return actions.markApp(k)},dashboardColor,currentTheme:advancedSetting})):null;case _utils__WEBPACK_IMPORTED_MODULE_10__.OB.ROW_COLLECTION:return rowCollect?react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()("sortItem rowCollectCard",{halfWidth:e})},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"cardTitle pointer"},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"titleText"},advancedSetting.recordFavIcon&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("img",{src:advancedSetting.recordFavIcon}),_l("\u8BB0\u5F55\u6536\u85CF")),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"flex"}),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"viewAll",onClick:function(){(0,router_navigateTo__WEBPACK_IMPORTED_MODULE_15__.T8)("/favorite")}},react__WEBPACK_IMPORTED_MODULE_4__.createElement("span",null,_l("\u5168\u90E8")),react__WEBPACK_IMPORTED_MODULE_4__.createElement(ming_ui_components_Icon__WEBPACK_IMPORTED_MODULE_16__.Z,{icon:"arrow-right-border",className:"mLeft5 Font16"}))),react__WEBPACK_IMPORTED_MODULE_4__.createElement(src_pages_AppHomepage_RecordFav__WEBPACK_IMPORTED_MODULE_17__.Z,{className:"overflowHidden pLeft5 pRight5",projectId,forCard:!0,loading:dashboardLoading})):null;default:return displayChart?react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollectionCharts__WEBPACK_IMPORTED_MODULE_18__.Z,{projectId,flag,currentTheme:advancedSetting}):null}}))};return react__WEBPACK_IMPORTED_MODULE_4__.createElement(Wrapper,{style:{backgroundColor:hasBgImg?"unset":dashboardColor.bgColor},logoHeight:logoHeight||40},react__WEBPACK_IMPORTED_MODULE_4__.createElement(ming_ui_components_ScrollView__WEBPACK_IMPORTED_MODULE_19__.Z,{className:"flex"},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"dashboardContent"},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"dashboardHeader"},logoSwitch&&(logo||slogan)?react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"logoWrapper"},logo&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("img",{src:md.global.FileStoreConfig.pictureHost+"ProjectLogo/"+logo+"?imageView2/2/h/200/q/90",alt:"logo"}),slogan&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("span",{className:logo?"Font17 mLeft16":"Font17"},slogan)):react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"Font26"},react__WEBPACK_IMPORTED_MODULE_4__.createElement("span",null,(0,_utils__WEBPACK_IMPORTED_MODULE_10__.Qq)(),","),react__WEBPACK_IMPORTED_MODULE_4__.createElement("span",{className:"bold mLeft8"},md.global.Account.fullname)),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"flexRow"},hasNewTheme&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default,{title:advancedSetting.themeKey===newTheme.themeKey?_l("\u4FEE\u6539\u4E3B\u9898"):_l("\u4F7F\u7528%0\u4E3B\u9898",newTheme.themeName),placement:"bottom"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(NewThemeSet,{onClick:function me(){advancedSetting.themeKey===newTheme.themeKey?setSettingVisible(!0):onSetAdvancedTheme(newTheme)}},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"newThemeIcon",style:{backgroundImage:"url("+newTheme.themeIcon+")"}}))),react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default,{title:_l("\u5237\u65B0"),placement:"bottom"},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"headerIcon",onClick:function me(){fetchData(),setFlag(+new Date)}},react__WEBPACK_IMPORTED_MODULE_4__.createElement(ming_ui_components_Icon__WEBPACK_IMPORTED_MODULE_16__.Z,{icon:"refresh1",className:"Font20"}))),!isExternal&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default,{title:_l("\u81EA\u5B9A\u4E49\u5DE5\u4F5C\u53F0"),placement:"bottom"},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"headerIcon mLeft12",onClick:function me(){return setSettingVisible(!0)}},react__WEBPACK_IMPORTED_MODULE_4__.createElement(ming_ui_components_Icon__WEBPACK_IMPORTED_MODULE_16__.Z,{icon:"home_set",className:"Font20"}))),settingVisible&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(_DashboardSetting__WEBPACK_IMPORTED_MODULE_21__.Z,{currentProject,platformSetting,homeSetting:origin.homeSetting,updatePlatformSetting,updateHomeSetting:function me(ge,e){actions.editHomeSetting({projectId,setting:(0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},origin.homeSetting,ge),editingKey:e})},onClose:function me(){return setSettingVisible(!1)},currentTheme:advancedSetting,onSetAdvancedTheme,advancedThemes}))),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{className:"flexRow"},boardSwitch&&!isExternal&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,{className:"flex mRight20 bulletinBoard overflowHidden"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_BulletinBoard__WEBPACK_IMPORTED_MODULE_22__.Z,{loading:dashboardLoading,platformSetting,height:todoDisplay===1?240:200})),react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,{className:"flex"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Process__WEBPACK_IMPORTED_MODULE_23__.Z,{loading:dashboardLoading,displayComplete:!boardSwitch||isExternal,countData,updateCountData,dashboardColor,todoDisplay,flag,setFlag,currentTheme:advancedSetting}))),!projects.length&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_AppCenter_components_NoProjectsStatus__WEBPACK_IMPORTED_MODULE_24__.Z,null)),!isExternal&&renderSortableModules(),(displayApp||isExternal)&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(CardItem,{className:"flex"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_AppCenter_components_AppGrid__WEBPACK_IMPORTED_MODULE_25__.Z,{dashboardColor,isDashboard:!0,setting:origin.homeSetting,isAdmin,loading:dashboardLoading,keywords,actions,projectId,currentProject,markedGroup,markedApps:(0,_AppCenter_utils__WEBPACK_IMPORTED_MODULE_26__.xo)(markedApps.filter(function(me){return me.type===0}),keywords),myApps:(0,_AppCenter_utils__WEBPACK_IMPORTED_MODULE_26__.xo)(apps,keywords),externalApps:(0,_AppCenter_utils__WEBPACK_IMPORTED_MODULE_26__.xo)(externalApps,keywords),aloneApps:(0,_AppCenter_utils__WEBPACK_IMPORTED_MODULE_26__.xo)(aloneApps,keywords),groups,hideExternalTitle:isExternal,currentTheme:advancedSetting})))))}},1714:(me,ge,e)=>{"use strict";e.d(ge,{C3:()=>N,OB:()=>W,Qi:()=>oe,Qq:()=>C,ZW:()=>t,lB:()=>E});var he=e(96486),re=e.n(he),k=e(62232),A=e(92138),C=function(){var P=new Date().getHours();switch(!0){case P<6:return _l("\u51CC\u6668\u597D");case P<12:return _l("\u4E0A\u5348\u597D");case P<18:return _l("\u4E0B\u5348\u597D");default:return _l("\u665A\u4E0A\u597D")}},t=function(P,n){var a=P.iconColor||"#2196f3",w=P.navColor||a,F=w==="#1b2025",le=[P.lightColor,"#ffffff","#f5f6f7"].includes(w),ie=le?P.lightColor:w||a,ae=F||le?a:"#fff",je=F||le?a:ie;return{bg:n?(0,k.YT)(je,"0.08"):ie,iconColor:n?je:ae}},E=["#2196F3","#2F54EB","#732ED1","#1EBCD5","#4CAF50","#FF0000","#EB2F96","#FD982E","#FADB14"],oe=function(P){return!P||!re().includes(E,P)&&!P.startsWith("#")?{bgColor:"#f7f8fc",themeColor:"#2196f3",activeColor:(0,k.YT)("#2196f3","0.1"),hoverColor:(0,k.YT)("#2196f3","0.16")}:{bgColor:P!=="#2196F3"?(0,A.generate)(P)[0]:"#f7f8fc",themeColor:P,activeColor:(0,k.YT)(P,"0.1"),hoverColor:(0,k.YT)(P,"0.16")}},N=["ProjectLogo/bulletin_1.jpg","ProjectLogo/bulletin_2.jpg","ProjectLogo/bulletin_3.jpg","ProjectLogo/bulletin_4.jpg","ProjectLogo/bulletin_5.jpg","ProjectLogo/bulletin_6.jpg","ProjectLogo/bulletin_7.jpg","ProjectLogo/bulletin_8.jpg"],c=[{text:_l("\u5173\u95ED"),value:0},{text:_l("30\u79D2"),value:30},{text:_l("1\u5206\u949F"),value:60},{text:_l("2\u5206\u949F"),value:120},{text:_l("3\u5206\u949F"),value:180},{text:_l("4\u5206\u949F"),value:240},{text:_l("5\u5206\u949F"),value:300}],W={APP_COLLECTION:0,RECENT:1,ROW_COLLECTION:2,CHART_COLLECTION:3}},63353:(me,ge,e)=>{"use strict";e.d(ge,{Z:()=>M});var he=e(25273),re=e(85315),k=e(33867),A=e(6100),C=e(24043),t=e.n(C),E=e(47518),oe=e.n(E),N=e(88239),c=e(12424),W=e(86735),u=e(67294),P=e(5017),n=e(93002),a=e(96486),w=e(93967),F=e.n(w),le=e(12935),ie=e(26581),ae=e(15577),je=(0,W.Z)([`
  margin-top: `,`;
  border-radius: 3px;
  `,`;
  `,`
  &:hover {
    `,`
    // `,`
    .collectTime {
      display: none;
    }
    .rightIcons {
      display: flex;
    }
  }

  .leftContent {
    flex: 8;
    flex-shrink: 0;
    min-width: 0;
    padding: `,`;
    .itemIcon {
      width: 24px;
      min-width: 24px;
      height: 24px;
      border-radius: 4px;
      svg {
        margin-top: 3px;
      }
    }
    .itemName {
      flex-shrink: 0;
      font-weight: `,`;
    }
  }
  .timeCon {
    font-weight: 400;
  }
  .rightCon {
    flex-shrink: 0;
    flex: 2;
    padding: 5px;
    justify-content: flex-end;
    `,`;
    .delFav,
    .toDes {
      width: `,`;
      height: `,`;
      text-align: center;
      line-height: `,`;
      border-radius: 4px;
      &:hover {
        background: `,`;
      }
      i {
        color: #ffc402;
        vertical-align: middle;
      }
    }
  }
  .appName {
    font-weight: 400;
    opacity: 1;
  }
  .options {
    opacity: 0;
    display: none;
  }
  &:hover {
    .options {
      opacity: 1;
      display: flex;
    }
    .appName {
      opacity: 0;
      display: none;
    }
  }
`],[`
  margin-top: `,`;
  border-radius: 3px;
  `,`;
  `,`
  &:hover {
    `,`
    // `,`
    .collectTime {
      display: none;
    }
    .rightIcons {
      display: flex;
    }
  }

  .leftContent {
    flex: 8;
    flex-shrink: 0;
    min-width: 0;
    padding: `,`;
    .itemIcon {
      width: 24px;
      min-width: 24px;
      height: 24px;
      border-radius: 4px;
      svg {
        margin-top: 3px;
      }
    }
    .itemName {
      flex-shrink: 0;
      font-weight: `,`;
    }
  }
  .timeCon {
    font-weight: 400;
  }
  .rightCon {
    flex-shrink: 0;
    flex: 2;
    padding: 5px;
    justify-content: flex-end;
    `,`;
    .delFav,
    .toDes {
      width: `,`;
      height: `,`;
      text-align: center;
      line-height: `,`;
      border-radius: 4px;
      &:hover {
        background: `,`;
      }
      i {
        color: #ffc402;
        vertical-align: middle;
      }
    }
  }
  .appName {
    font-weight: 400;
    opacity: 1;
  }
  .options {
    opacity: 0;
    display: none;
  }
  &:hover {
    .options {
      opacity: 1;
      display: flex;
    }
    .appName {
      opacity: 0;
      display: none;
    }
  }
`]),Ce=P.ZP.div(je,function(o){var B=o.forCard;return B?"0":"12px"},function(o){var B=o.forCard;return B&&"height: 40px;"},function(o){var B=o.forCard;return!B&&"border: 1px solid #e2e2e2;"},function(o){var B=o.forCard;return B?"background: #F8F8F8;":"box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.04);"},function(o){var B=o.forCard;return!B&&"border: 1px solid transparent;"},function(o){var B=o.forCard;return B?"8px 16px":"16px"},function(o){var B=o.forCard;return B?"normal":"bold"},function(o){var B=o.forCard;return!B&&" min-width: 240px;"},function(o){var B=o.forCard;return B?"30px":"40px"},function(o){var B=o.forCard;return B?"30px":"40px"},function(o){var B=o.forCard;return B?"30px":"40px"},function(o){var B=o.forCard;return B?"#fff":"#f5f5f5"});function p(o){return u.createElement(Ce,{key:o.favoriteId,className:"flexRow alignItemsCenter Hand",onClick:o.onShowRecord,forCard:o.forCard},u.createElement("div",{className:"leftContent flexRow alignItemsCenter overflow_ellipsis"},u.createElement("div",{className:"itemIcon flexRow alignItemsCenter justifyContentCenter",style:{backgroundColor:o.appColor}},u.createElement(A.Z,{url:o.appIconUrl,fill:"#fff",size:15})),u.createElement("div",{className:"itemName overflow_ellipsis mLeft12 flex"},o.title)),u.createElement("div",{className:"rightCon flexRow"},!o.forCard&&u.createElement("div",{className:"appName mLeft10 overflow_ellipsis TxtRight Gray_9e mRight20 flex"},o.appName,".",o.workSheetName),u.createElement("div",{className:"options flexRow alignItemsCenter"},!o.forCard&&u.createElement("span",{className:"timeCon flex Gray_9e TxtRight mRight3"},createTimeSpan(o.createTime)),u.createElement(ie.Z,{text:_l("\u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00"),popupPlacement:"bottom"},u.createElement("div",{className:"toDes",onClick:function(Qe){(0,ae.Ye)("worksheetRecord",o.worksheetId,{rowId:o.rowId}),window.open((window.subPath||"")+"/app/"+o.appId+"/"+o.worksheetId+(o.viewId?"/"+o.viewId:"")+"/row/"+o.rowId),Qe.stopPropagation(),Qe.preventDefault()}},u.createElement(k.Z,{className:"Font20 Gray_9e",icon:"launch"}))),u.createElement(ie.Z,{text:_l("\u53D6\u6D88\u6536\u85CF"),popupPlacement:"bottom"},u.createElement("div",{className:"delFav mRight13",onClick:function(Qe){o.remove(),Qe.stopPropagation(),Qe.preventDefault()}},u.createElement(k.Z,{className:"Font20",icon:"task-star"}))))))}var l=e(10358),i=e(1502),f=e(22560),g=e.n(f),b=(0,W.Z)([`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  z-index: 2;
  &:hover {
    background: #f5f5f5;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  z-index: 2;
  &:hover {
    background: #f5f5f5;
  }
`]),I=(0,W.Z)([`
  flex: 1;
  display: flex;
  min-width: 0;
  box-sizing: border-box;
  `,`
  width: 100%;
  height: 100%;
  background: #ffffff;
  .openNavIcon {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 32px;
    height: 32px;
    transition: width 0.3s;
    &.hide {
      width: 0;
    }
  }
  .content {
    overflow: auto;
    min-width: 0;
    .con {
      .scrollList {
        overflow: auto;
      }
      .scrollListCon,
      .hed {
        min-width: 300px;
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
      }
      .hed {
        `,`
      }
      .scrollListCon {
        .nano-content {
          `,`
        }
        min-height: 100%;
      }
    }
    .nullCon {
      font-weight: 400;
      color: #757575;
      line-height: 20px;
      &.empty {
        text-align: center;
        padding-top: 100px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
`],[`
  flex: 1;
  display: flex;
  min-width: 0;
  box-sizing: border-box;
  `,`
  width: 100%;
  height: 100%;
  background: #ffffff;
  .openNavIcon {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 32px;
    height: 32px;
    transition: width 0.3s;
    &.hide {
      width: 0;
    }
  }
  .content {
    overflow: auto;
    min-width: 0;
    .con {
      .scrollList {
        overflow: auto;
      }
      .scrollListCon,
      .hed {
        min-width: 300px;
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
      }
      .hed {
        `,`
      }
      .scrollListCon {
        .nano-content {
          `,`
        }
        min-height: 100%;
      }
    }
    .nullCon {
      font-weight: 400;
      color: #757575;
      line-height: 20px;
      &.empty {
        text-align: center;
        padding-top: 100px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
`]),U=(0,W.Z)([`
  width: 214px;
  transition: width 0.2s;
  margin-left: 24px;
  &.closeCon {
    width: 0;
    margin-left: 0;
  }
  max-height: 100%;
  overflow: hidden;
  .headC {
    width: 190px;
  }
  .navSkeleton {
    width: 162px;
    margin: 0 auto;
  }
  .navListLi {
    width: 190px;
    height: 36px;
    padding: 0 14px;
    &.isCur,
    &:hover {
      background: #eaf4fe;
      border-radius: 5px 5px 5px 5px;
    }
    .itemIcon {
      width: 24px;
      height: 24px;
      border-radius: 5px 5px 5px 5px;
      svg {
        display: block;
      }
    }
  }
  .navList {
    min-width: 0;
  }
`],[`
  width: 214px;
  transition: width 0.2s;
  margin-left: 24px;
  &.closeCon {
    width: 0;
    margin-left: 0;
  }
  max-height: 100%;
  overflow: hidden;
  .headC {
    width: 190px;
  }
  .navSkeleton {
    width: 162px;
    margin: 0 auto;
  }
  .navListLi {
    width: 190px;
    height: 36px;
    padding: 0 14px;
    &.isCur,
    &:hover {
      background: #eaf4fe;
      border-radius: 5px 5px 5px 5px;
    }
    .itemIcon {
      width: 24px;
      height: 24px;
      border-radius: 5px 5px 5px 5px;
      svg {
        display: block;
      }
    }
  }
  .navList {
    min-width: 0;
  }
`]),ce=(0,W.Z)([`
  `,`
  height:   `,`;
  border-radius: `,`;
  background-color: #f5f5f5;
  margin: `,`;
`],[`
  `,`
  height:   `,`;
  border-radius: `,`;
  background-color: #f5f5f5;
  margin: `,`;
`]),fe=P.ZP.div(b),He=P.ZP.div(I,function(o){var B=o.forCard;return!B&&"padding: 24px 0;"},function(o){var B=o.forCard;return!B&&"padding: 0 76px;"},function(o){var B=o.forCard;return!B&&"padding: 0 80px;"}),Ye=P.ZP.div(U),Xe=P.ZP.div(ce,function(o){var B=o.width;return B?"width: "+B+"px;":"width: 100%;"},function(o){var B=o.height;return B?B+"px;":"17px"},function(o){var B=o.height;return B?"3px":"17px;"},function(o){var B=o.forCard;return B?"16px 0":"25px 0 0 0"}),D=void 0,xe=void 0;function te(o){var B=o.projectId,Qe=(0,n.Z)({loading:o.loading||!0,navloading:!0,openNav:localStorage.getItem("recordFavIsFolded")==="1",keywords:"",recordListAll:[],recordList:[],favApps:[],appId:"all",record:{}}),Fe=(0,c.Z)(Qe,2),Te=Fe[0],Cn=Te.loading,sn=Te.navloading,un=Te.openNav,mn=Te.keywords,Mn=Te.recordListAll,En=Te.recordList,ke=Te.favApps,Je=Te.appId,an=Fe[1];(0,u.useEffect)(function(){Ue()},[]),(0,u.useEffect)(function(){(o.loading!==Cn&&o.loading||xe!==o.projectId)&&De()},[o.loading,o.projectId]),(0,u.useEffect)(function(){var Ve=ye();an({recordList:Ve})},[mn,Je]);var ye=function(ue){return(ue||Mn).filter(function(J){return(J.title||"").toLowerCase().indexOf((mn||"").toLowerCase())>=0&&(Je==="all"?!0:J.appId===Je)}).map(function(J){return(0,N.default)({},J,{rowid:J.rowId})})},Ue=function(){D&&D.abort(),xe=o.projectId,D=l.Z.getAllFavorites({projectId:B,isRefresh:1}),D.then(function(ue){var J=ue.reduce(function(Ze,qe){var Dn=qe.appId;return Ze[Dn]||(Ze[Dn]=[]),Ze[Dn].push(qe),Ze},{}),Z=ye(ue.map(function(Ze){return(0,N.default)({},Ze,{rowid:Ze.rowId})}));an({recordListAll:ue,recordList:Z,favApps:oe()(J),navloading:!1,loading:!1})})},Me=function(ue){an({keywords:ue})},Re=function(ue){return u.createElement("div",{className:F()({"pLeft16 pRight16":o.forCard})},t()({length:3}).map(function(J,Z){return u.createElement(Xe,{key:Z,height:ue,forCard:o.forCard})}))},Ae=function(){var ue=function(Z){return u.createElement("div",{className:F()("flexRow navListLi alignItemsCenter Hand",{isCur:Z.appId===Je}),onClick:function(){an({appId:Z.appId})}},u.createElement("div",{className:F()("itemIcon flexRow alignItemsCenter justifyContentCenter",{isA:Z.appId===Je}),style:{backgroundColor:Z.appId==="all"?"#333":Z.appColor}},u.createElement(A.Z,{url:Z.appId==="all"?"https://fp1.mingdaoyun.cn/customIcon/sys_10_5_star.svg":Z.appIconUrl,fill:"#fff",size:15})),u.createElement("div",{className:"appName overflow_ellipsis mLeft10 flex"},Z.appId==="all"?_l("\u5168\u90E8"):Z.appName))};return u.createElement(u.Fragment,null,u.createElement("div",{className:F()("openNavIcon",{hide:un})},u.createElement(fe,{onClick:function(){safeLocalStorageSetItem("recordFavIsFolded","1"),an({openNav:!0})}},u.createElement(k.Z,{className:"Font20 Gray_75 Hand ",icon:"menu"}))),u.createElement(Ye,{className:F()("navCon",{closeCon:!un})},un&&u.createElement(u.Fragment,null,sn?u.createElement("div",{className:"navSkeleton"},Re()):u.createElement("div",{className:"flexColumn h100"},u.createElement("div",{className:"headC flexRow"},u.createElement("span",{className:"flex Font20 Bold mLeft15"},_l("\u6536\u85CF")),u.createElement(fe,{onClick:function(){safeLocalStorageSetItem("recordFavIsFolded",""),an({openNav:!1})}},u.createElement(k.Z,{className:"Font20 Gray_75 Hand",icon:"menu_left"}))),u.createElement("div",{className:"mTop20"},ue({appId:"all"})),ke.length>0&&u.createElement(u.Fragment,null,u.createElement("div",{className:"Font15 Bold mLeft15 mTop30"},_l("\u6309\u5E94\u7528")),u.createElement(he.Z,{className:"navList flex mTop15 pRight24 Block"},[].concat((0,re.Z)(ke.map(function(J){return J[0]}))).map(function(J){return u.createElement("div",{className:"mBottom10"},ue(J))})))))))},ze=function(){return mn?u.createElement("div",{className:"nullCon mTop40"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")):u.createElement("div",{className:o.forCard?"emptyWrapper":"nullCon empty"},u.createElement("img",{src:g()}),u.createElement("span",{className:o.forCard?"":"mTop30 Gary Font15 Block"},_l("\u6CA1\u6709\u6536\u85CF")))},De=function(ue){ue&&an({recordListAll:[],recordList:[],favApps:[],keywords:""}),an({navloading:!0,loading:!0}),Ue()},Be=function(ue){var J=ue.worksheetId,Z=ue.rowId,Ze=ue.viewId;l.Z.removeFavorite({projectId:B,rowId:Z,worksheetId:J,viewId:Ze}).then(function(qe){qe?De():alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u7A0D\u540E\u518D\u8BD5"),3)})},Oe=function(ue){var J=ue.rowId,Z=ue.viewId,Ze=ue.worksheetId,qe=ue.appId;(0,ae.Ye)("worksheetRecord",Ze,{rowId:J}),(0,i.L)({appId:qe,worksheetId:Ze,recordId:J,viewId:Z,currentSheetRows:En,showPrevNext:!0,currentIndex:J,projectId:B})},yn=function(){var ue=u.createElement(u.Fragment,null,En.length<=0?ze():u.createElement(u.Fragment,null,En.map(function(J){return u.createElement(p,(0,N.default)({},J,{forCard:o.forCard,remove:function(){return Be(J)},onShowRecord:function(){Oe(J)}}))})));return u.createElement("div",{className:F()("content flex",{overflowHidden:!o.forCard})},u.createElement("div",{className:"con flexColumn h100"},!o.forCard&&u.createElement(u.Fragment,null,u.createElement("div",{className:"flexRow alignItemsCenter hed"},u.createElement(le.Z,{className:"searchCon mRight10",placeholder:_l("\u641C\u7D22"),value:mn,onChange:Me}),u.createElement(fe,{onClick:function(){De()}},u.createElement(k.Z,{className:"Font20 Gray_9e Hand",icon:"refresh1"}))),u.createElement("div",{className:"scrollList flex"},u.createElement(he.Z,{className:"scrollListCon"},Cn?Re(50):ue))),o.forCard&&(Cn?Re(24):ue)))};return u.createElement(He,{className:F()("flexRow Relative",o.className),forCard:o.forCard},!o.forCard&&Ae(),yn())}const M=te},4654:me=>{me.exports="data:image/png;base64,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"},24107:me=>{me.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAehJREFUWAntmM2ugjAQhQdBiaAL48b3fy/3bhQlRo2K3hySMaVMW5AgvQlNTOnf9OvpdNoYbLfbN3mcJh6zlWgRA242G/70It/tdiWH9wqOgF39ZVRwVLCrAl3Hjz44Kvh8Pgm/odLnLtYBHo8HZVlGr9erbIqiiNI0pfl8rnfttSweEih2OBw+cCBA3el0ojzPewXSjYuA5/OZ3m/5mXi5XKgoCt1Ob2UR8H6/WyfE9rdJUB8L+yYZfdBmLAgCW3OlTXeXJEkq7a6CqOBsNrOOm06n1nZuhNKqL8N/2yopAi6XSzKphJM8mYjDmKvM9SjAjYC8Xq9cdObiTGEY0nq9pjiOKwYWiwUB3pWwrWqI0vsjGjSFNPog4t5qtSpPMyZE2aSqCsDbaooC3BeQSK64agRkQ4Bq63MuOLbdBFLcYjag51DSFAMRmnAgmsKxbdd2NwYEGAAk3wIc6tvCqZC3242LlbwRIOD2+3159XFcY5iucExzPB4rVyvXOwEBxHA8CHVQ7NttZTt6zotW662ArBa/aNSBDKfW9fFtBLTB9QFisikC+gIH6Bog/EC9P00r+1V9DRD+Jvncr4D0eWqAeoehy94D1u5iPKXwahkiSc+4GiAeB0MBSqL8ny3m/4SlVQxZ572Cf5mEK5oSNSHOAAAAAElFTkSuQmCC"},47402:me=>{me.exports="data:image/png;base64,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"},36876:me=>{me.exports="data:image/png;base64,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"},43230:me=>{me.exports="data:image/png;base64,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"},22560:me=>{me.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA51BMVEUAAADv7+/w8PD9/f34+Pj////9/f3w8PD////////w8PDw8PD////w8PDy8vL////w8PDw8PDw8PDw8PDx8fHz8/P09PTw8PD////w8PD////w8PDx8fHy8vLw8PDw8PDw8PDw8PD////////w8PD////x8fH09PT////w8PD////////w8PD////x8fH////////////w8PD///8zMzP09PT39/fx8fH+/v78/Pz5+fnNzc37+/uZmZlAQEBmZmbz8/NNTU1ZWVmzs7OAgIDm5ubZ2dmNjY2mpqbAwMBzc3O/v79ycnL/cD3cAAAAMnRSTlMAQNAPMPAgwGA/6aCAdzbPyrinjVApF9XAsZ9mYDz789+E0L9xb1sfCtqwr5RPR+DfkA3j2yMAAAY9SURBVHja7Npre5MwFAfwKLN23n28z/tl08d5zQkJhUKBlrabfv/PIwQ3sIdE0sFK+/B74Yv4Qv9Pcs4h2Uiv1+v1ertpsC8NyPayhsd3oeTuwVeLbJ29wzQE9v5wu7ZmcABKB9uzLVY5RuJJCZy7dmtLoty6Brn5ImYl8XJ+FmVIus86BsmbBQyJFglIB6TrBnmNJzOmMAvzqu/48dqTxyqcMbXAl1Hu7pEOG+a1ETCteC4LpcNJ8v2Ysv8JPJmksyPFkjkWrIapPF0drRNL1vmM1eJD6ph0khyDPkM0e/KTNODjtxe3H9y8f+/Na9oIjupDK5AVv08u5uXtZzdow0aqfhVPgsokYTZOyAUcXact4JCKqnIAeKzKBFJf167I2zdoG4SjKhAPACasygkA/FgzxltUEA1uSBgwLILUCWOqvxqSNTx6Q9ui7FhTOD9zyHTNLTmirbEBIKksaQGZpXpLzOf7c9oervrPzkASgbJKDomhFxRptveesgoJpJQDfwEAn4mZO69oe8Ks1BUtNjdXny2LmHh8g7aIKzrTxIMzs8p6nxuPkpsUaTjIonyj9T3PA2TueUv/NytZAsAto8ZLWzXOh17RqXR8VvBNg9ynSHtBYtDyWOE0q/bubIhsWlG5q+pMVprB085USD7X0TivFk7Y+kEsirQbhPnKHDH7B6S6MdOLIGiiY/jCAqnOlDoKkolDwE4CVhGkOycLBcnECayaVt264B2p6yFtmwMAAVsRKHKsX+wPaHvwHFGPE++iQa5S5DKCLGAVQ4wm+yfaOrf4UNeNxfhiQe7Q1vGqCsDFvqh8mTjsxI1KfdONADmp7AeDhmpd2O7Y5WJllbvjMRdGbStWjMRkCn8JdBE26r7PqI7tQMbhtCQcoUU9Fz+iLEEK0+XYg1yEnlFM3n+f6A/FGV7K4eBFPY5vs/P8NEXFD9xwQxAAsEfqeq1/IDzjiNJBOSdoLQJQA4ZUcr4UyA3ycc+61swHCocCR7uUcg0mSbJ6tPyAFWIPwgi9eRncD/f0/35hhNLJxXoEPjlRsDrqg4oNsUhd3/RXu8IILWZMyj0JmIEIbYjekXEQDgXH6Dl+yrTwMPxukdo+1K0RV7FYE0eHS29q+hb/Vn+0CwK1spRN6xIj1Ll0ZoA/fPW+UB1eNUds0w0ppo+IWS0TSL2zGnxj5EUOnMQ1/OKqneRUmP/uwzOqJ9yRM3LFyiLPFkNqhsskijrBV5V9Qjr0yIh6MIBfq85hSMxcpy3DB/VXpC2PeZHDxD16mbgDmWnAFKJ8O4r66NCNHfWulPAjTQx4NyDGntDLJcaQm/vxyplaJpD7bJHuB6GUj0q/Yur7i8lk4S89T8BfT/cJ2YogslKUvg8J2Zog2RyCSu/PY3S92EtZ3JV9cVxb3CFbFyQT2jbnfDxO/7BtQVMvtzMIdqXNIHZjNhlEcAca4/CNBREjaNR4U0HG0DC+mSA2NE5sJIgLjeMbCTLug3QsCN+VIDtT7Fm170T7bXwgupv71mryE2XEd+OjMazx0dh/xvdBpD5IH6QPotcH6YP0QfT6IH2QPsif9u5wRUEgigLwKSPBMMxMiFYrCCqI/XF/7/s/1+4SLYSrOKMzXe18b3CQcbznx1XY/bL7Zfdba0R1ELtfBmH3+yaHnd0vu99BfDSy+2WQ1hiEQRikGYMwCIM0YxAGYRBh9/ve3W8Ba4nU89/9Lp0EcVMHuQoSSj3/3e/MUZAvBrEMsoG1ldTz3/3OYW2r6rDnsJZKPf/dbwBrC6nnv/uFvZs08d39wt5RmnntfiPYi0WRK/6oWrxsLEGFop2ABlawNxFFUjxTtOrXzBpVipYCtndCB5HokQHjqFFm6GAregSoUrTK9MHwYle1wt9MiP8oWgHa1g1VijZit7fD3ZAWirR8aSn6HYGBPTCO075CN2dRIsaPMdztc/wa/pA4RVdzUSFGleY9dHXKHHdDH3cX6MFVXq96G+r6F5fhuD74N3B5xsOwP4GP6MlJzKmZRJ6k8kKHAM8GOrsfcgAjeCbXHP2KS3mF9IK+FVPxLtrBhSwRrw47uDJLS/ElzOBS8HkM9+Jass5yeLD5WIeRuDFdnAp4dTkvJz0rNjmIiIiIiIiIiJT6Bj8ThyvMemPVAAAAAElFTkSuQmCC"},35663:me=>{me.exports="data:image/png;base64,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"},71372:me=>{me.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA21BMVEUAAADx8fHw8PDx8fHw8PDw8PDw8PD09PTv7+/v7+/w8PDw8PDx8fH////v7+/w8PDv7+/x8fHw8PDw8PDv7+/v7+/w8PDy8vL09PTy8vLy8vLw8PDv7+/w8PDw8PD///8zMzP09PT7+/vt7e3z8/P9/f319fU3Nzd2dnb39/e/v785OTlsbGzv7+/5+fm6urpxcXFzc3PW1tbExMRAQED4+PjS0tJERESWlpZubm5aWlrf39/Ozs7Ly8vHx8c9PT07OzulpaWNjY1gYGBNTU17e3vp6em4uLiEhIQBpjGSAAAAHnRSTlMAjbpG6c5vF+PUxJ9YCPXxQDWrqJGCaEwsJRPcs51YMg8hAAADVklEQVR42u3diVbaQBTGcVoVcam7dWn7MciqqAgiIO5Ll/d/olZPqU2ASSbJOfcmfr8n4H8mJHDPnEyOiIiIiIiIiIiIiIikzec/LsxC0kphbmkmbsbuR+gwu/0pRsb+txOoUViO3LFegCpLERclX4YyC3tROmYUXVYjixHWZHcVCm24h2i5Xfk434fXoNOca8gilNpxfJ5DqyW3kM/QquAWsgG11p1C5qDWslPILNTKO4UofKqPbDmFQK8PDFGGIdowRBuGaMMQbRiiDUO0YYg2DPGp1C4Opjq9KCEc8ZBatWhXrSAE8ZDTYrAaAomH1IojsdZEPqRaDOMAAcRDSsVwYCcfchgypAQrhiQWUgsZUoGVfEglK98RHITqOEQA+ZBKVfzum0wIatXgjgoS0BqcNQa3GEk8JPBHSvUQCeg8mVeNKyBmiEWlNB0S8bNp/uq/lKT2/0irbv55gleaQl463jzAI0Uh3g4zhEd6Qnwd5hkeqQlpGZOJkFbd+FzCIyUh4x1mAI90hByNd9xdwSMVIaMO291XQ0jnJqCjacZ8h494yNXlvTFmeBSzQzzkvD/67rpcV40yvMRDevW3D3cSq0N29lseGmMpcemQnP36H9ftkxgdsrPfR2MpceuQnf0++T9k8P2qgclkZ7/HxljW5NxlPWRnv4/GUnLedOmQHZl26uMlZXuHzhA8mjGX5akdZ5YO4dnvj74Z057W0YaF9Oy305+4Ju7rIT77nVhyNKkDVvKz317fhNGGnYLZb6dr/NyvK2iY/fa6CXSomP32ujE75P+PWEocO3SE4Lobt0NJiK3kOFSHlhBfiXuHmhBc38Xq0BOCm7s4HYpCPCXOHZpCcHMfvUNVCG7vI3foCnkrce5QFoLbZsQObSHoDM2r+sCtQ10I8HD83Bz+6sEN9/16cd+vj3gI9/16iYdw368XQ/7gvt//cN/vGPkQ7vv1kQ9JbN+vfEhi+37lQ9wwhCEMsWMIQxhixxCGMMSOIQxhiB1DGJLNkMy8JjczLy7+CrXWnELy0Go1K69b38zGiQTATkaOJFh4t4dE5PZUHtux+Y4PUtF4vsKX+VwkyytQZXE/F9G6ql8qW7kYZrTcvGa353lEGhERERERERERERERJeI3z8X6IF8irVkAAAAASUVORK5CYII="}}]);
