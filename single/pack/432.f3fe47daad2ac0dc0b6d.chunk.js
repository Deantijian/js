(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[432],{20531:()=>{"use strict"},6953:(Q,z,r)=>{"use strict";r.d(z,{Z:()=>j});const j={getJobs:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","GetJobs",g,d)},addJob:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","AddJob",g,d)},editJobName:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","EditJobName",g,d)},deleteJobs:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","DeleteJobs",g,d)},importJobList:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","ImportJobList",g,d)},pagedJobAccounts:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","PagedJobAccounts",g,d)},addJobUser:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","AddJobUser",g,d)},deleteJobUser:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","DeleteJobUser",g,d)},deleteJobUsers:function(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Job","DeleteJobUsers",g,d)}}},80432:(Q,z,r)=>{"use strict";r.r(z),r.d(z,{default:()=>$e});var j=r(48388),f=r(29914),g=r.n(f),d=r(77040),C=r(94301),U=r.n(C),ae=r(88239),he=r(66814),oe=r(91880),G=r.n(oe),be=r(63627),le=r(81982),Y=r.n(le),ie=r(20148),de=r(60385),N=r.n(de),T=r(33867),ye=r(22382),te=r(28661),M=r.n(te),ce=r(85105),ne=r.n(ce),W=r(99663),me=r(22600),pe=r(49135),ue=r(93196),n=r(67294),Ee=r(50533),Ae=r(12424),Ce=r(46593),Te=r.n(Ce),k=r(49365),Se=r(91088),Oe=r(96486),D=r.n(Oe),w=function(l,I){return function(e,t){e({type:"MOBILE_LIST_FETCH_START"}),Te().all([Se.Z.getApp({appId:l}).then(),k.Z.getRolesWithUsers({appId:l}).then()]).then(function(s){var a=(0,Ae.Z)(s,2),p=a[0],o=a[1];e({type:"UPDATE_MEMBER_LIST",data:{detail:p,list:D().cloneDeep(o)}}),e({type:"MOBILE_LIST_FETCH_SUCCESS"})})}},Re=function(l){var I=l.projectId,e=l.appId,t=l.roleId,s=l.userIds,a=l.departmentIds,p=l.departmentTreeIds,o=l.projectOrganizeIds,c=l.jobIds;return function(u){u({type:"MOBILE_UPDATELIST_FETCH_START"}),k.Z.removeRoleMembers({projectId:I,appId:e,roleId:t,userIds:s,departmentIds:a,departmentTreeIds:p,projectOrganizeIds:o,jobIds:c}).then(function(i){u({type:"MOBILE_UPDATELIST_FETCH_OVER"}),i.result?u(w(e)):N().alert(_l("\u79FB\u9664\u5931\u8D25"),"",[{text:_l("\u786E\u5B9A"),onPress:function(){}}])})}},Le=function(l){var I=l.roleId,e=l.appId,t=l.callback;return function(s){s({type:"MOBILE_UPDATELIST_FETCH_START"}),k.Z.quitAppForRole({appId:e,roleId:I}).then(function(a){s({type:"MOBILE_UPDATELIST_FETCH_OVER"}),a.isRoleForUser?a.isRoleDepartment?t():N().alert(_l("\u65E0\u6CD5\u9000\u51FA\u975E\u201C\u4EBA\u5458\u201D\u7C7B\u578B\u6210\u5458\u52A0\u5165\u7684\u89D2\u8272"),_l("\u975E\u201C\u4EBA\u5458\u201D\u7C7B\u578B\u7684\u6210\u5458\uFF0C\u53EA\u80FD\u7531\u7BA1\u7406\u5458\u6216\u8FD0\u8425\u8005\u64CD\u4F5C"),[{text:_l("\u786E\u5B9A"),onPress:function(){}}]):N().alert(_l("\u9000\u51FA\u5931\u8D25"),"",[{text:_l("\u786E\u5B9A"),onPress:function(){}}])})}},je=function(l){var I=l.projectId,e=l.appId,t=l.roleId,s=l.users,a=l.departmentIds,p=a===void 0?[]:a,o=l.departmentTreeIds,c=o===void 0?[]:o,u=l.jobIds,i=u===void 0?[]:u,h=l.projectOrganizeIds,x=h===void 0?[]:h;return function(O){O({type:"MOBILE_UPDATELIST_FETCH_START"}),k.Z.addRoleMembers({projectId:I,appId:e,roleId:t,userIds:D().map(s,function(R){var y=R.accountId;return y}),departmentIds:p,departmentTreeIds:c,jobIds:i,projectOrganizeIds:x}).then(function(R){O({type:"MOBILE_UPDATELIST_FETCH_OVER"}),R?O(w(e)):N().alert(_l("\u6DFB\u52A0\u5931\u8D25"),"",[{text:_l("\u786E\u5B9A"),onPress:function(){}}])})}},Ue=function(l){var I=l.appId,e=l.memberId;return function(t){t({type:"MOBILE_UPDATELIST_FETCH_START"}),k.Z.updateAppOwner({appId:I,memberId:e}).then(function(s){t({type:"MOBILE_UPDATELIST_FETCH_OVER"}),s?t(w(I)):N().alert(_l("\u6258\u4ED8\u5931\u8D25"),"",[{text:_l("\u786E\u5B9A"),onPress:function(){}}])})}},Ne=r(93967),X=r.n(Ne),Pe=r(65712),se=r(15742),Je=r(50380),Me=r(54498),xe=r.n(Me),De=r(75915),fe=r(18667),Qe=r(80426),ke=r(59012),Ie=r.n(ke),ge=r(25273),Be=r(85315),Ye=r(56118),Fe=r(80181),ze=r.n(Fe),we=r(6953),Ve=ze().CheckboxItem,Ze=function(S){(0,ue.default)(l,S);function l(I){(0,W.default)(this,l);var e=(0,pe.default)(this,(l.__proto__||ne()(l)).call(this,I));return e.getData=function(){var t=e.props.projectId,s=e.state,a=s.keywords,p=s.pageIndex,o=p===void 0?1:p,c=s.jobList,u=c===void 0?[]:c;we.Z.getJobs({projectId:t,keywords:a,pageIndex:o,pageSize:20}).then(function(i){e.setState({jobList:o===1?i.list:u.concat(i.list),pageIndex:o+1,isMore:i.list.length>=20,isLoading:!1})})},e.handleSearch=function(){e.setState({pageIndex:1},function(){e.getData()})},e.handleSave=function(){var t=e.state.selectJobs;e.props.onSave(t),e.props.onClose()},e.onScrollEnd=function(){var t=e.state,s=t.isMore,a=t.isLoading;!s||a||e.getData()},e.checkJobs=function(t){var s=e.props.unique,a=e.state.selectJobs,p=a===void 0?[]:a,o=p.map(function(i){return i.jobId}),c=D().includes(o,t.jobId),u=[].concat((0,Be.Z)(p));c?e.setState({selectJobs:p.filter(function(i){return i.jobId!==t.jobId})}):(!s&&u.push(t),e.setState({selectJobs:s?[t]:u}))},e.renderList=function(){var t=e.props.unique,s=e.state,a=s.jobList,p=a===void 0?[]:a,o=s.selectJobs,c=o===void 0?[]:o,u=c.map(function(i){return i.jobId});return n.createElement(ge.Z,{className:"flex jobList",onScrollEnd:e.onScrollEnd},p.map(function(i){return n.createElement("div",{className:"flexRow jobItem",onClick:function(){return e.checkJobs(i)}},n.createElement(Ve,{checked:D().includes(u,i.jobId),onChange:function(){return e.checkJobs(i)}}),n.createElement("div",{className:"flex jobName ellipsis Gray"},i.jobName))}))},e.renderContent=function(){return n.createElement("div",{className:"flex flexColumn"},e.renderSearch(),e.renderSelected(),e.renderList())},e.state={jobList:[],isLoading:!1,isMore:!1},e}return(0,me.default)(l,[{key:"componentDidMount",value:function(){this.getData()}},{key:"renderSearch",value:function(){var e=this,t=this.state.keywords;return n.createElement("div",{className:"searchWrapper"},n.createElement(T.Z,{icon:"h5_search"}),n.createElement("form",{action:"#",className:"flex",onSubmit:function(a){a.preventDefault()}},n.createElement("input",{type:"text",placeholder:_l("\u641C\u7D22\u804C\u4F4D"),className:"Font14",value:t,onChange:function(a){e.setState({keywords:a.target.value})},onKeyDown:function(a){a.which===13&&e.handleSearch()}})),t?n.createElement(T.Z,{icon:"workflow_cancel",onClick:function(){e.setState({keywords:""},e.handleSearch)}}):null)}},{key:"renderSelected",value:function(){var e=this,t=this.state.selectJobs,s=t===void 0?[]:t;return n.createElement("div",{className:X()("selectedWrapper",{hide:D().isEmpty(s)})},n.createElement(ge.Z,{style:{maxHeight:92,minHeight:46}},s.map(function(a){return n.createElement("span",{className:"selectedItem",key:a.jobId},n.createElement("span",null,a.jobName),n.createElement(T.Z,{icon:"close",className:"Gray_9e Font15",onClick:function(){var o=e.state.selectJobs;e.setState({selectJobs:o.filter(function(c){return c.jobId!==a.jobId})})}}))})))}},{key:"render",value:function(){var e=this.props,t=e.visible,s=e.onClose;return n.createElement(N(),{popup:!0,visible:t,onClose:s,animationType:"slide-up",className:"h100"},n.createElement("div",{className:"selectUserModal flexColumn h100"},this.renderContent(),n.createElement("div",{className:"btnsWrapper flexRow"},n.createElement(Ie(),{className:"flex",size:"sm"},n.createElement(Y(),{className:"Gray_75 bold Font14",onClick:s},_l("\u53D6\u6D88"))),n.createElement(Ie(),{className:"flex",size:"sm"},n.createElement(Y(),{className:"bold Font14",onClick:this.handleSave,type:"primary"},_l("\u786E\u5B9A"))))))}}]),l}(n.Component),Ge=r(21313),_=r(70973),Xe=r(20531),We=new RegExp("\\biPhone\\b|\\biPod\\b","i").test(window.navigator.userAgent),q=void 0;We&&(q={onTouchStart:function(l){return l.preventDefault()}});var V=null,He=function(S){(0,ue.default)(l,S);function l(I){(0,W.default)(this,l);var e=(0,pe.default)(this,(l.__proto__||ne()(l)).call(this,I));return e.showActionSheet=function(t,s,a,p){var o=e.props.memberList.detail,c={name:_l("\u6DFB\u52A0\u4EBA\u5458"),icon:"hr_person_add",iconClass:"Font20"},u=o.projectId?[c,{name:_l("\u6DFB\u52A0\u90E8\u95E8"),icon:"department",iconClass:"Font22"},{name:_l("\u6DFB\u52A0\u804C\u4F4D"),icon:"limit-principal",iconClass:"Font20"},{name:_l("\u6DFB\u52A0\u7EC4\u7EC7\u89D2\u8272"),icon:"group",iconClass:"Font22"}]:[c];M().showActionSheetWithOptions({options:u.map(function(i){return n.createElement(n.Fragment,null,n.createElement(T.Z,{className:X()("mRight15 Gray_9e",i.iconClass),icon:i.icon}),n.createElement("span",{className:"Bold"},i.name))}),maskClosable:!0,"data-seed":"logId",message:n.createElement("div",{className:"flexRow header"},n.createElement("span",{className:"Font13"},_l("\u4EBA\u5458\u7BA1\u7406")),n.createElement("div",{className:"closeIcon",onClick:function(){M().close()}},n.createElement(T.Z,{icon:"close"}))),wrapProps:q},function(i){i!==-1&&(i===0&&e.setState({type:"user",selectUserVisible:!0}),i===1&&o.projectId&&e.showActionDepartment(),i===2&&o.projectId&&e.setState({selectJobVisible:!0,type:"job"}),i===3&&o.projectId&&e.setState({selectOrgnizedRoleVisible:!0,type:"orgnizeRole"}))})},e.showActionDepartment=function(t,s,a,p){var o=[{name:_l("\u4EC5\u9009\u62E9\u5F53\u524D\u90E8\u95E8"),selectValue:"current"},{name:_l("\u9009\u62E9\u5F53\u524D\u90E8\u95E8\u4E0B\u6240\u6709\u5B50\u90E8\u95E8"),selectValue:"all"}];M().showActionSheetWithOptions({options:o.map(function(c){return n.createElement(n.Fragment,null,n.createElement("span",{className:"Bold"},c.name))}),maskClosable:!0,"data-seed":"logId",message:n.createElement("div",{className:"flexRow header"},n.createElement("span",{className:"Font13"},n.createElement(T.Z,{icon:"arrow_back",className:"mRight10",onClick:function(){M().close(),e.showActionSheet()}}),_l("\u6DFB\u52A0\u90E8\u95E8")),n.createElement("div",{className:"closeIcon",onClick:function(){M().close(),e.showActionSheet()}},n.createElement(T.Z,{icon:"close"}))),wrapProps:q},function(c){c!==-1&&e.setState({type:"department",selectUserVisible:!0,selectDepartmentType:c===0?"current":"all"})})},e.handleSave=function(t){var s=e.props.memberList.detail,a=e.props.match.params,p=e.state,o=p.type,c=p.selectDepartmentType,u=D().map(t,function(i){var h=i.departmentId;return h});e.props.dispatch(je({projectId:s.projectId,appId:a.appId,roleId:a.roleId,users:o==="user"?t:[],departmentTreeIds:o==="department"&&c==="all"?u:[],departmentIds:o==="department"&&c==="current"?u:[],jobIds:o==="job"?t.map(function(i){return i.jobId}):[],projectOrganizeIds:o==="orgnizeRole"?(t||[]).map(function(i){return i.organizeId}):[]}))},e.showActionUserSheet=function(t){var s=t.accountId,a=s===void 0?void 0:s,p=t.departmentId,o=p===void 0?void 0:p,c=t.departmentTreeId,u=c===void 0?void 0:c,i=t.projectOrganizeId,h=i===void 0?void 0:i,x=t.jobId,O=x===void 0?void 0:x,R=t.isRoleCharger,y=t.roleType,Z=t.roleId,H=t.memberCategory,P=t.isOwner,v=t.memberId,m=e.props.debugRoles,L=e.props.memberList.detail,E=e.props.match.params,b=Pe.Mu.includes(y),J=a===md.global.Account.accountId,re=L.permissionType===se.lt.ADMIN_ROLE,B=[R?{name:_l("\u53D6\u6D88\u89D2\u8272\u8D1F\u8D23\u4EBA"),icon:"people_5",iconClass:"Gray_9e Font18"}:{name:_l("\u8BBE\u4E3A\u89D2\u8272\u8D1F\u8D23\u4EBA"),icon:"people_5",iconClass:"Gray_9e Font18"},{name:_l("\u79FB\u5230\u5176\u4ED6\u89D2\u8272"),icon:"sync",iconClass:"Gray_9e Font18"},b&&re&&J&&!((L.debugRole||{}).canDebug&&!D().isEmpty(m))?{name:_l("\u9000\u51FA"),icon:"exit_to_app2",iconClass:"Font20"}:{name:_l("\u79FB\u9664"),icon:"task-new-delete",iconClass:"Font18"}],Ke=[{name:_l("\u5C06\u5E94\u7528\u6258\u4ED8\u7ED9\u4ED6\u4EBA"),icon:"forward2",iconClass:"Gray_9e"}],K=o&&o.includes("org");b&&!(P&&J)||K||!b&&!a?B=B.filter(function(A,ee){return ee!==0}):b&&P&&J&&(B=Ke),M().showActionSheetWithOptions({options:B.map(function(A){return n.createElement(n.Fragment,null,n.createElement(T.Z,{className:X()("mRight10",A.iconClass),icon:A.icon}),n.createElement("span",{className:"Bold"},A.name))}),destructiveButtonIndex:b&&P&&J?null:B.length-1,maskClosable:!0,"data-seed":"logId",message:n.createElement("div",{className:"flexRow header"},n.createElement("span",{className:"Font13"},_l("\u4EBA\u5458\u7BA1\u7406")),n.createElement("div",{className:"closeIcon",onClick:function(){M().close()}},n.createElement(T.Z,{icon:"close"}))),wrapProps:q},function(A){if(A!==-1){if(!b&&A===0&&!K&&a){var ee={appId:E.appId,memberCategory:H,memberId:v,roleId:Z};R?k.Z.cancelRoleCharger(ee).then(function(F){F?(e.props.dispatch(w(E.appId,E.roleId)),alert(_l("\u8BBE\u7F6E\u6210\u529F"))):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)}):V=N().alert(n.createElement("span",{className:"Font16 Gray bold"},_l("\u786E\u8BA4\u8BBE\u7F6E\u4E3A\u89D2\u8272\u8D1F\u8D23\u4EBA\uFF1F")),n.createElement("div",{className:"Font13 Gray pLeft15 pRight15"},_l("\u89D2\u8272\u8D1F\u8D23\u4EBA\u53EF\u6DFB\u52A0\u3001\u79FB\u51FA\u5F53\u524D\u89D2\u8272\u4E0B\u7684\u6210\u5458")),[{text:_l("\u53D6\u6D88"),onPress:function(){},style:"default"},{text:_l("\u786E\u8BA4"),onPress:function(){k.Z.setRoleCharger(ee).then(function(ve){ve?(e.props.dispatch(w(E.appId,E.roleId)),alert(_l("\u8BBE\u7F6E\u6210\u529F"))):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)})}}])}else if(b&&P&&J&&A===0)e.setState({transferAppVisible:!0});else if(!b&&A===1&&!K&&a||(b&&!(P&&J)||K||!b&&!a)&&A===0)e.props.history.push("/mobile/changeRole/"+(L.projectId?L.projectId:"individual")+"/"+E.appId+"/"+E.roleId+"/"+a+"/"+o+"/"+u+"/"+h+"/"+O);else if(!b&&A===2||(b&&!(P&&J)||K||!b&&!a)&&A===1){if(b&&re&&J&&!((L.debugRole||{}).canDebug&&!D().isEmpty(m))){V=N().alert(_l("\u786E\u8BA4\u9000\u51FA\u6B64\u89D2\u8272\u5417 ?"),"",[{text:_l("\u53D6\u6D88"),style:{color:"#2196F3"},onPress:function(){}},{text:_l("\u9000\u51FA"),style:{color:"red"},onPress:function(){e.props.dispatch(Le({roleId:E.roleId,appId:E.appId,callback:function(){e.props.history.push("/mobile/dashboard")}}))}}]);return}V=N().alert(_l("\u662F\u5426\u79FB\u9664\u8BE5\u6210\u5458\uFF1F"),"",[{text:_l("\u53D6\u6D88"),style:{color:"#2196F3"},onPress:function(){}},{text:_l("\u79FB\u9664"),style:{color:"red"},onPress:function(){e.props.dispatch(Re({projectId:L.projectId,appId:E.appId,roleId:E.roleId,userIds:a?[a]:[],departmentIds:o?[o]:[],departmentTreeIds:u?[u]:[],projectOrganizeIds:h?[h]:[],jobIds:O?[O]:[]}))}}])}}})},e.renderUserTag=function(t,s){if(s)return n.createElement("span",{className:"memberTag"},n.createElement("span",{className:"ownerTag"},_l("\u62E5\u6709\u8005")))},e.renderBase=function(){var t=e.props.memberList,s=t.detail,a=t.list,p=a===void 0?[]:a,o=e.state,c=o.selectJobVisible,u=o.selectOrgnizedRoleVisible,i=e.props.match.params,h=p.filter(function(y){return y.roleId===i.roleId})[0],x=(0,_.Rg)(s.permissionType),O=x.isAdmin,R=(h.canSetMembers||O)&&!(s.permissionType===se.lt.RUNNER_ROLE&&["all","apply","outsourcing"].includes(h.roleId));return n.createElement(n.Fragment,null,n.createElement(De.Z,{className:X()({bottom55:R}),onClick:function(){e.props.history.push("/mobile/members/"+s.id)}}),e.state.selectUserVisible&&n.createElement(fe.Z,{projectId:s.projectId,visible:e.state.selectUserVisible,type:e.state.type,selectDepartmentType:e.state.selectDepartmentType,onClose:function(){e.setState({selectUserVisible:!1})},onSave:e.handleSave}),e.state.transferAppVisible&&n.createElement(fe.Z,{projectId:s.projectId,visible:e.state.transferAppVisible,type:"user",onlyOne:!0,onClose:function(){e.setState({transferAppVisible:!1})},onSave:function(Z){var H=e.props.match.params;e.props.dispatch(Ue({appId:H.appId,memberId:Z[0].accountId}))}}),c&&n.createElement(Ze,{projectId:s.projectId,visible:c,onClose:function(){e.setState({selectJobVisible:!1})},onSave:e.handleSave}),u&&n.createElement(Ge.Z,{projectId:s.projectId,visible:u,onClose:function(){e.setState({selectOrgnizedRoleVisible:!1})},onSave:e.handleSave}))},e.renderNull=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=e.props.memberList.detail,a=(0,_.Rg)(s.permissionType),p=a.isOwner,o=a.isAdmin;o=o||p;var c=t.canSetMembers||o;return n.createElement("div",{className:"memberListWrapper h100"},e.renderBase(),n.createElement(G(),{align:"center",justify:"between",className:"TxtMiddle TxtCenter h100"},n.createElement(G().Item,{className:"flexColumn valignWrapper"},n.createElement("img",{src:xe(),alt:_l("\u6682\u65E0\u6210\u5458"),width:"110"}),n.createElement("br",null),n.createElement("p",{className:"mTop0 Gray_bd Font17"},_l("\u6682\u65E0\u6210\u5458")),c&&!window.isPublicApp&&n.createElement(Y(),{className:"addUserButton",type:"primary",onClick:function(){e.showActionSheet(t.roleId,t.userIds,t.roleType,t)}},_l("\u6DFB\u52A0\u6210\u5458")))))},e.renderItem=function(t){var s=e.props.memberList.detail,a=(0,_.Rg)(s.permissionType),p=a.isOwner,o=a.isAdmin;o=o||p;var c=t.users,u=c===void 0?[]:c,i=t.departmentTreesInfos,h=i===void 0?[]:i,x=t.departmentsInfos,O=x===void 0?[]:x,R=t.projectOrganizeInfos,y=R===void 0?[]:R,Z=t.jobInfos,H=Z===void 0?[]:Z,P=t.canSetMembers||o,v=[];return v=v.concat(u.filter(function(m){return m.isOwner})),v=v.concat(H),v=v.concat(y),v=v.concat(O),v=v.concat(h),v=v.concat(u.filter(function(m){return!m.isOwner})),v=v.sort(function(m,L){return L.isRoleCharger-m.isRoleCharger}),v.map(function(m){var L=m.accountId||m.departmentId||m.departmentTreeId||m.projectOrganizeId||m.jobId,E=m.fullName||m.departmentTreeName||m.departmentName||m.projectOrganizeName||m.jobName,b=m.departmentTreeId?_l("\u90E8\u95E8"):m.departmentId?_l("\u4EC5\u5F53\u524D\u90E8\u95E8"):m.projectOrganizeId?_l("\u7EC4\u7EC7\u89D2\u8272"):m.jobId?_l("\u804C\u4F4D"):"",J=m.accountId?5:m.departmentTreeId?1:m.departmentId?2:m.projectOrganizeId?3:m.jobId?4:5;return n.createElement(U().Item,{key:L,className:"listCon",arrow:P&&(!m.isOwner||m.accountId===md.global.Account.accountId)?"horizontal":"empty",onClick:function(){P&&(!m.isOwner||m.accountId===md.global.Account.accountId)&&e.showActionUserSheet((0,ae.default)({},m,t,{canEditUser:P,memberCategory:(Je.wP.find(function(B){return B.value===J})||{}).key,memberId:L}))}},n.createElement("span",{className:"Font16 Gray bold"},E),!m.accountId&&n.createElement("span",{className:"tag Font14"},b),m.isRoleCharger&&n.createElement(T.Z,{icon:"people_5",className:"Font14 mLeft10",style:{color:"#FBBB44"}}),m.accountId&&e.renderUserTag(t.roleType,m.isOwner))})},e.renderList=function(t){var s=e.props.memberList.detail,a=t.description||(t.permissionWay===80?_l("\u53EF\u4EE5\u914D\u7F6E\u5E94\u7528\uFF0C\u7BA1\u7406\u5E94\u7528\u4E0B\u6240\u6709\u6570\u636E\u548C\u4EBA\u5458"):_l("\u81EA\u5B9A\u4E49\u6743\u9650")),p=(0,_.Rg)(s.permissionType),o=p.isOwner,c=p.isAdmin;return c=c||o,n.createElement("div",{className:"memberListWrapper h100 pBottom44"},e.renderBase(),n.createElement(U(),{className:"ListSection"},e.renderItem(t)),(t.canSetMembers||c)&&!(s.permissionType===se.lt.RUNNER_ROLE&&["all","apply","outsourcing"].includes(t.roleId))&&n.createElement("div",{className:"TxtCenter addUser bold",onClick:function(){return e.showActionSheet(t.roleId,t.userIds,t.roleType,t)}},_l("\u6DFB\u52A0\u4EBA\u5458")))},e.state={selectUserVisible:!1,transferAppVisible:!1,type:"user",selectDepartmentType:"",selectJobVisible:!1,selectOrgnizedRoleVisible:!1},e}return(0,me.default)(l,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.props.dispatch(w(e.appId,e.roleId)),$("html").addClass("memberListCon")}},{key:"componentWillUnmount",value:function(){$("html").removeClass("memberListCon"),V?V.close():V=null,M().close()}},{key:"render",value:function(){var e=this.props.isListLoading;if(e)return n.createElement(G(),{justify:"center",align:"center",className:"h100"},n.createElement(g(),{size:"large"}));var t=this.props.match.params,s=this.props.memberList.list.filter(function(a){return a.roleId===t.roleId})[0];return!s||!s.users&&!s.departmentsInfos||s.users.length+s.departmentsInfos.length+s.departmentTreesInfos.length<=0?this.renderNull(s):this.renderList(s)}}]),l}(n.Component);const $e=(0,Ee.$j)(function(S){var l=S.mobile,I=l.memberList,e=l.isListLoading,t=l.isUpdateListLoading,s=l.debugRoles;return{memberList:I,isListLoading:e,isUpdateListLoading:t,debugRoles:s}})(He)},65712:(Q,z,r)=>{"use strict";r.d(z,{Mu:()=>te,mj:()=>ie});var j=r(88106),f=r(67294),g=r(45697),d=r.n(g),C,U={CUSTOM:0,OnlyViewAllRecord:20,OnlyManageSelfRecord:30,OnlyManageSelfAndSubRecord:40,ViewAllAndManageSelfRecord:50,ViewAllAndManageSelfAndSubRecord:60,ManageAllRecord:80},ae=(C={},(0,j.default)(C,U.CUSTOM,_l("\u81EA\u5B9A\u4E49\u6743\u9650")),(0,j.default)(C,U.OnlyViewAllRecord,_l("\u5BF9\u6240\u6709\u8BB0\u5F55\u53EA\u6709\u67E5\u770B\u6743\u9650")),(0,j.default)(C,U.OnlyManageSelfRecord,_l("\u53EF\u67E5\u770B\u52A0\u5165\u7684\uFF0C\u53EA\u80FD\u7F16\u8F91\u3001\u5220\u9664\u81EA\u5DF1\u62E5\u6709\u7684\u8BB0\u5F55")),(0,j.default)(C,U.OnlyManageSelfAndSubRecord,_l("\u53EF\u67E5\u770B\u52A0\u5165\u7684\uFF0C\u53EA\u80FD\u7F16\u8F91\u3001\u5220\u9664\u81EA\u5DF1\u62E5\u6709\u7684\u8BB0\u5F55")),(0,j.default)(C,U.ViewAllAndManageSelfRecord,_l("\u53EF\u67E5\u770B\u6240\u6709\u8BB0\u5F55\uFF0C\u4F46\u53EA\u80FD\u7F16\u8F91\u3001\u5220\u9664\u81EA\u5DF1\u62E5\u6709\u7684\u8BB0\u5F55")),(0,j.default)(C,U.ViewAllAndManageSelfAndSubRecord,_l("\u53EF\u67E5\u770B\u6240\u6709\u8BB0\u5F55\uFF0C\u4F46\u53EA\u80FD\u7F16\u8F91\u3001\u5220\u9664\u81EA\u5DF1\u62E5\u6709\u7684\u8BB0\u5F55")),(0,j.default)(C,U.ManageAllRecord,_l("\u53EF\u67E5\u770B\u3001\u7F16\u8F91\u3001\u5220\u9664\u6240\u6709\u8BB0\u5F55")),C),he=[{key:"weChat",txt:_l("\u5FAE\u4FE1\u626B\u7801")},{key:"phone",txt:_l("\u9A8C\u8BC1\u7801")},{key:"password",txt:_l("\u5BC6\u7801")}],oe=[{key:"phone",txt:_l("\u624B\u673A")},{key:"email",txt:_l("\u90AE\u7BB1")}],G=d().shape({fullName:d().string,accountId:d().string}),be=d().shape({name:d().string.isRequired,users:d().arrayOf(G)}),le=d().shape({appId:d().string,description:d().string,name:d().string,permissionWay:d().number,projectId:d().string,roleType:d().number,userIds:d().arrayOf(d().string)}),Y=d().shape({fieldId:d().string,fieldName:d().string,notAdd:d().boolean,notEdit:d().boolean,notRead:d().boolean}),ie={REFUSE:"2",PERMISSION:"1"},de=[{key:"generalAdd",txt:_l("\u65B0\u589E")},{key:"gneralShare",txt:_l("\u5206\u4EAB"),tips:_l("\u5305\u542B\u8BB0\u5F55\u5206\u4EAB\u3001\u89C6\u56FE\u5206\u4EAB")},{key:"generalImport",txt:_l("\u5BFC\u5165")},{key:"generalExport",txt:_l("\u5BFC\u51FA")},{key:"generalDiscussion",txt:_l("\u8BA8\u8BBA"),tips:_l("\u5305\u542B\u5DE5\u4F5C\u8868\u8BA8\u8BBA\u3001\u8BB0\u5F55\u8BA8\u8BBA")},{key:"generalSystemPrinting",txt:_l("\u7CFB\u7EDF\u6253\u5370")},{key:"generalAttachmentDownload",txt:_l("\u9644\u4EF6\u4E0B\u8F7D")},{key:"generalLogging",txt:_l("\u65E5\u5FD7"),tips:_l("\u5305\u542B\u5DE5\u4F5C\u8868\u65E5\u5FD7\u3001\u8BB0\u5F55\u65E5\u5FD7")}],N=[{key:"worksheetShareView",txt:_l("\u5206\u4EAB")},{key:"worksheetImport",txt:_l("\u5BFC\u5165")},{key:"worksheetExport",txt:_l("\u5BFC\u51FA")},{key:"worksheetDiscuss",txt:_l("\u8BA8\u8BBA")},{key:"worksheetLogging",txt:_l("\u65E5\u5FD7")},{key:"worksheetBatchOperation",txt:_l("\u6279\u91CF\u64CD\u4F5C"),tips:_l("\u6279\u91CF\u64CD\u4F5C\u662F\u6307\u5DE5\u4F5C\u8868\u7684\u6279\u91CF\u52FE\u9009\u8BB0\u5F55\u529F\u80FD\uFF0C\u5F00\u542F\u540E\u7528\u6237\u53EF\u4EE5\u6279\u91CF\u6267\u884C\u62E5\u6709\u6743\u9650\u7684\u64CD\u4F5C\u3002")}],T=[{key:"recordShare",txt:_l("\u5206\u4EAB")},{key:"recordDiscussion",txt:_l("\u8BA8\u8BBA")},{key:"recordSystemPrinting",txt:_l("\u7CFB\u7EDF\u6253\u5370")},{key:"recordAttachmentDownload",txt:_l("\u9644\u4EF6\u4E0B\u8F7D")},{key:"recordLogging",txt:_l("\u65E5\u5FD7")}],ye=27,te=[100,1,2],M=null,ce=[{roleType:100,name:_l("\u7BA1\u7406\u5458"),des:_l("\u7BA1\u7406\u5458\u53EF\u4EE5\u914D\u7F6E\u5E94\u7528\uFF0C\u7BA1\u7406\u5E94\u7528\u4E0B\u6240\u6709\u6570\u636E\u548C\u4EBA\u5458"),info:function(){return f.createElement("div",null,_l("\u62E5\u6709\u6240\u6709\u6743\u9650"))}},{roleType:2,name:_l("\u8FD0\u8425\u8005"),des:_l("\u7BA1\u7406\u6240\u6709\u6570\u636E\u548C\u666E\u901A\u89D2\u8272\u4E0B\u7684\u6210\u5458\uFF0C\u4E0D\u53EF\u914D\u7F6E\u5E94\u7528"),info:function(){return f.createElement("div",null,f.createElement("div",null,_l("\u8FD0\u8425\u8005\u80FD\u7BA1\u7406\u666E\u901A\u89D2\u8272\u4E0B\u7684\u6210\u5458\uFF0C\u4E3B\u8981\u5305\u542B\uFF1A")),f.createElement("div",null,"1\u3001",_l("\u7BA1\u7406\u666E\u901A\u89D2\u8272\u4E0B\u7684\u89D2\u8272\u8D1F\u8D23\u4EBA")),f.createElement("div",null,"2\u3001",_l("\u7BA1\u7406\u6240\u6709\u666E\u901A\u89D2\u8272\u4E0B\u7684\u6210\u5458")),f.createElement("div",null,"3\u3001",_l("\u53EF\u67E5\u770B\u3001\u7F16\u8F91\u3001\u5220\u9664\u6240\u6709\u8BB0\u5F55")),f.createElement("div",null,_l("\u6CE8\uFF1A\u8FD0\u8425\u8005\u4E0D\u53EF\u590D\u5236\u3001\u5220\u9664\u3001\u5BFC\u51FA\u5E94\u7528")))}},{roleType:1,name:_l("\u5F00\u53D1\u8005"),des:_l("\u5F00\u53D1\u8005\u53EA\u80FD\u914D\u7F6E\u5E94\u7528"),info:function(){return f.createElement("div",null,f.createElement("div",null,_l("\u5F00\u53D1\u8005\u80FD\u914D\u7F6E\u5E94\u7528\uFF0C\u4E3B\u8981\u5305\u542B\uFF1A")),f.createElement("div",null,"1\u3001",_l("\u53EF\u914D\u7F6E\u5E94\u7528\u5BFC\u822A/\u5206\u7EC4\u3001\u5DE5\u4F5C\u6D41\u3001\u5DE5\u4F5C\u8868\u3001\u81EA\u5B9A\u4E49\u9875\u9762\u3001\u7528\u6237\u89D2\u8272\u65B0\u589E/\u7F16\u8F91/\u5220\u9664\uFF08\u5305\u542B\u5916\u90E8\u95E8\u6237\u89D2\u8272\uFF09\u3001\u5916\u90E8\u95E8\u6237\u8BBE\u7F6E\uFF08 \u5305\u542B\u5916\u90E8\u95E8\u6237\u57DF\u540D\u914D\u7F6E\uFF09")),f.createElement("div",null,"2\u3001",_l("\u5DE5\u4F5C\u8868\u8DE8\u5E94\u7528\u5173\u8054\uFF0C\u88AB\u5173\u8054\u7684\u5DE5\u4F5C\u8868\u6240\u5C5E\u5E94\u7528\u5FC5\u987B\u662F\u5E94\u7528\u201C\u5F00\u53D1\u8005\u201D\u6216\u201C\u7BA1\u7406\u5458\u201D")),f.createElement("div",null,"3\u3001",_l("\u53EF\u67E5\u770B\u52A0\u5165\u7684\uFF0C\u53EA\u80FD\u7F16\u8F91\u3001\u5220\u9664\u81EA\u5DF1\u62E5\u6709\u7684\u8BB0\u5F55 \u6CE8\uFF1A\u5F00\u53D1\u8005\u4E0D\u53EF\u590D\u5236\u3001\u5220\u9664\u3001\u5BFC\u51FA\u5E94\u7528")))}}],ne={100:"manage_accounts",2:"account_box",1:"construction"}},54498:Q=>{Q.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADkBAMAAAB6eZW+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTODg4ODg4ODg4OPj4+Hh4eDg4ODg4ODg4GmeMAwAAAAIdFJOUwDBQIIgZeWhdQUdIgAABEpJREFUeNrtm8tP20AQh2PHD46h9OFjiITw0VUL9ZGqKuSYIkR9pAVUHwN9+UgeOPtnt03sxI/1OuudCVI6v1ti8Of1zszuzE5aLRKJRCKRSCQSiUQikUgkEunJ9PHd7u+j7gaB+i8215ejkw0RjYilivfON0I9ZTm9wIcaYR7JRgNspMaKGmEbUsDKTOR3G5aRbIbK1BlPXzGR+1wkwzMhw1kQ7nu9z04WOUFD+gvAeP7h4G4Dw0wd5Cqd2DfLoT4iIVOAt/rqMLVgHOdsp0PK+oSZMG9QkP3UDXkPMkJ9rzfcON9FjALxCfdROnj2GnvFC/b8+ykC0p3fudeteOMY0SCq9L9TLPvJRYGczPklLOsZVD8NfMybG0kscB8PHGmVo0A+3HdwDHYsuPaAY7BX/Gs7gsdR3fQMBVEC3DENUSBtozimLvI9HcUx2wKDTRzzBMMtJ8J1DToWaEKjjNCQU+HWz8MIPlNhpoKCfBAih1uCnBJywxaL4iTaEyHHQuQWBDz7iZCPQmQX48U+bnTxCuqRwImQweqRI4SprEECT+YOqzcf4FiwSC7FixdwihCIh3HK4FMEX7inTArDCEiv6UKzLcgd+Bdbt9PowyPdGidwBdlnQ9WNIoD3y7o8OYLf4mk1dd4QfvWqyZMNhLC+KGB9r8hazZcYabTopCA5WIAuFjiCkwINp6SfnHU9VK9s4BVZSzCS5BAVOg0SVe05BwsgCivva/IOFuC2IrzVxGIMPsL+kx5W3djlHyxAzGZYEWcj/sECWGifVVjPEIOYbJ8rrGeAgqwo6FuCojuMn3S41oN1TOtzw1qEdfy03I1MuNbTQUJqvFkzUc+iuXfXkE6fBO/QxYmvOUsZ138HbT8zzkbrCg2pldcvG7lhwyyH0z5m7FnGn2lpGzZBRPrFzYjOMGPPqjDiFYsEHiKyzQouEeJstMqbrkF+kJhT2dKdHCPpkJtdoAGN1yzfamOnn78hQQ9X3WnDrDWhdR3qx5m+qU4mDqB1HZq59rDyKP+GoLewxA/cJrhCt+MPSOL7QktjLvasdA9HPCvc+qaQdS71DIkYv+C4TWq4CMR47zzvqwd56nNoYvyT4376J2AbyjZuXldUdtKOa5gUbH89g8xEJlX/zBBHF2sEfHVfyRCva4Ko4YP4SiYC3Nb/9TGA3Z5JEVutS2W7NSWJWWbcaF0xHFliltmoszyQJy5bk5ulKXYTYvbVyNdInGbd2npUXOHWlrWuP1b7Z6fhIG/lp+Sy2TA1lR74y0bDjJR+0BA1KJfqat3oSVVT6t8txVBpy5dofdU6ciBrCYbybxl02XJ7W/3cw5XMdS31MocpOZkuwHmSZAEzAKg59OXmxgeolttyJgvR/dUmJCEJuRXI+56SDhsgIUTI/xEZQCHXX6JdKOT6SaYNhZTYWTgwRJkdm363C6BX3RaJRCKRSCQSiUQikUgkEomEqD9lcVyDBB9i/AAAAABJRU5ErkJggg=="}}]);