"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3852],{23852:(at,w,p)=>{p.r(w),p.d(w,{default:()=>rt});var O={};p.r(O),p.d(O,{getRoleList:()=>je,getUserList:()=>_,updateCurrentRole:()=>B,updateIsImportRole:()=>ke,updateIsRequestList:()=>Te,updateProjectId:()=>Ue,updateRoleList:()=>X,updateRolePageInfo:()=>J,updateSearchValue:()=>Pe,updateSelectUserIds:()=>be,updateUserLoading:()=>Ge,updateUserPageIndex:()=>Q});var re=p(25273),$=p(26581),ot=p(60954),M=p(12386),S=p(33867),V=p(54208),F=p(70801),ae=p(63239),oe=p.n(ae),le=p(46593),H=p.n(le),y=p(88239),se=p(85105),U=p.n(se),j=p(99663),P=p(22600),G=p(49135),b=p(93196),lt=p(21133),ie=p(60171),T=p(86735),n=p(67294),z=p(5017),de=p(93967),N=p.n(de),ce=p(96486),R=p.n(ce),ue=p(30381),pe=p.n(ue),W=p(74127),K=p(96841),fe=p(31261),me=p(36070),ge=function(I){(0,b.default)(s,I);function s(c){(0,j.default)(this,s);var e=(0,G.default)(this,(s.__proto__||U()(s)).call(this,c));return e.handleFocus=function(){},e.handleBlur=function(){},e.handChange=R().debounce(function(t){e.props.updateSearchValue(t),t?(e.props.updateIsRequestList(!0),e.props.handleSearch(t)):e.handleClear()},500),e.handleClear=function(){e.setState({searchValue:""}),e.props.updateSearchValue(""),e.props.updateIsRequestList(!0),e.props.handleClear()},e.state={searchValue:"",isSearching:!1},e.ajaxObj=null,e}return(0,P.default)(s,[{key:"render",value:function(){var e=this,t=this.state.searchValue;return n.createElement("div",{className:"searchContainer Relative"},n.createElement(S.Z,{icon:"search",className:" btnSearch Gray_75 Font18"}),n.createElement("input",{defaultValue:t,ref:function(a){return e.input=a},onChange:function(a){e.props.updateIsRequestList(!1),e.setState({searchValue:a.target.value.trim()}),e.ajaxObj&&e.ajaxObj.abort&&(e.ajaxObj.abort(),e.ajaxObj=null),e.handChange(a.target.value.trim())},onFocus:this.handleFocus,onBlur:this.handleBlur,type:"text",className:"searchInput ThemeColor10 w100",placeholder:_l("\u641C\u7D22"),value:t}),t!==""?n.createElement("span",{className:"Font14 icon-closeelement-bg-circle Gray_c Hand Absolute",style:{top:"8px",right:"8px"},onClick:this.handleClear}):null)}}]),s}(n.Component),he=p(12424),L=p(19207),Ie=(0,T.Z)([`
  .roleFolderName {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0 5px;
    height: 36px;
    line-height: 36px;
  }
`],[`
  .roleFolderName {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0 5px;
    height: 36px;
    line-height: 36px;
  }
`]),ve=z.ZP.div(Ie);function Re(I){var s=I.visible,c=I.info,e=I.projectId,t=I.refresh,r=I.onClose,a=(0,n.useState)(c.name||void 0),o=(0,he.Z)(a,2),l=o[0],d=o[1],f=function(){if(!l||!l.trim()){alert(_l("\u8BF7\u8F93\u5165\u540D\u79F0"),3);return}L.Z.upsertOrgRoleGroup({projectId:e,orgRoleGroupId:c.id,orgRoleGroupName:l}).then(function(i){switch(i){case 0:alert(_l("\u6DFB\u52A0\u5931\u8D25"),2);break;case 1:alert(_l("\u6DFB\u52A0\u6210\u529F"));break;case 2:alert(_l("\u540D\u79F0\u5DF2\u5B58\u5728"),3);break;case 3:alert(_l("\u6700\u591A\u53EF\u6DFB\u52A050\u4E2A\u5206\u7EC4"),2);break}i!==2&&r(),i===1&&t()})};return n.createElement(F.Z,{visible:s,title:c.id?_l("\u7F16\u8F91\u89D2\u8272\u7EC4"):_l("\u6DFB\u52A0\u89D2\u8272\u7EC4"),okText:c.id?_l("\u4FDD\u5B58"):_l("\u6DFB\u52A0"),onCancel:r,onOk:f},n.createElement(ve,null,n.createElement("div",{className:"Font14 mBottom13 mTop20"},_l("\u540D\u79F0")),n.createElement("input",{type:"text",value:l,maxlength:"64",className:"roleFolderName TxtBottom w100",onChange:function(i){return d(i.target.value||"")}})))}const Ee=Re;var st=p(34279),xe=p(64749),Le=p(94942),Y=p.n(Le),Ce=p(36803),ye=p(29208),Se=function(I){(0,b.default)(s,I);function s(c){var e=this;(0,j.default)(this,s);var t=(0,G.default)(this,(s.__proto__||U()(s)).call(this,c));return t.handleSubmit=(0,Ce.Z)(Y().mark(function r(){var a,o,l,d,f,g,i,u,h,m;return Y().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return a=t.props,o=a.filed,l=a.projectId,d=a.currentRole,f=a.searchValue,g=a.treeData,i=t.state.orgRoleGroupId,u=t.state.roleName.trim(),h=t.state.remark.trim(),x.next=6,ye.Z.checkSensitive({content:u});case 6:if(m=x.sent,!m){x.next=10;break}return t.setState({submitLoading:!1}),x.abrupt("return",alert(_l("\u8F93\u5165\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u8BF7\u91CD\u65B0\u586B\u5199"),3));case 10:o==="edit"?L.Z.editOrganizeName({organizeName:u,projectId:l,remark:h,organizeId:d.organizeId,orgRoleGroupId:i}).then(function(E){E?E===1?(alert(_l("\u4FEE\u6539\u6210\u529F")),t.props.updateChildren(g,d.orgRoleGroupId===i?[i]:[d.orgRoleGroupId,i]),t.props.updateCurrentRole({organizeName:u,organizeId:d.organizeId,remark:h,orgRoleGroupId:i})):E===2&&alert(_l("\u8BE5\u89D2\u8272\u540D\u79F0\u5DF2\u5B58\u5728"),3):alert(_l("\u4FEE\u6539\u5931\u8D25"),2),t.props.onCancel(),t.setState({submitLoading:!1})}).catch(function(E){t.setState({submitLoading:!1})}):L.Z.addOrganize({organizeName:u,projectId:l,remark:h,orgRoleGroupId:i}).then(function(E){E?E===1?(alert(_l("\u521B\u5EFA\u6210\u529F")),t.props.updateIsRequestList(!1),t.props.updateChildren(g,[i],"add"),t.props.onCancel()):E===2&&(alert(_l("\u8BE5\u89D2\u8272\u540D\u79F0\u5DF2\u5B58\u5728"),3),t.setState({exsistCurrentName:!0})):(alert(_l("\u521B\u5EFA\u5931\u8D25"),2),t.props.onCancel()),t.setState({submitLoading:!1})}).catch(function(E){t.setState({submitLoading:!1})});case 11:case"end":return x.stop()}},r,e)})),t.footer=function(){var r=t.props,a=r.filed,o=r.roleList,l=t.state,d=l.exsistCurrentName,f=l.submitLoading,g=t.state.roleName.trim();return n.createElement("div",{className:"createPositionDialogFooter"},n.createElement("span",{class:"noText ThemeHoverColor3 Hand",onClick:function(){return t.props.onCancel()}},_l("\u53D6\u6D88")),n.createElement("span",{class:N()("nyesText ",{ThemeBGColor3:!d,boderRadAll_3:!d,disabledComfrim:d||f}),onClick:function(){if(g){if(d||f)return;if(o.find(function(u){return u.roleName===g})){alert(_l("\u8BE5\u89D2\u8272\u540D\u79F0\u5DF2\u5B58\u5728"),3),t.setState({exsistCurrentName:!0});return}}else{alert(_l("\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"),3);return}t.setState({submitLoading:!0},t.handleSubmit)}},a==="edit"?_l("\u4FDD\u5B58"):_l("\u6DFB\u52A0")))},t.state={roleName:c.filed==="edit"?c.currentRole.organizeName:"",remark:c.filed==="edit"?c.currentRole.remark:"",orgRoleGroupId:c.currentRole.orgRoleGroupId||"",submitLoading:!1},t}return(0,P.default)(s,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,r=t.filed,a=t.showRoleDialog,o=t.treeData,l=this.state,d=l.roleName,f=l.remark,g=l.orgRoleGroupId,i=o.map(function(u){return(0,y.default)({},u,{label:u.title,value:u.orgRoleGroupId})});return n.createElement(F.Z,{title:r==="create"?_l("\u6DFB\u52A0\u89D2\u8272"):_l("\u7F16\u8F91\u89D2\u8272"),footer:this.footer(),className:"createPositionDialog",onCancel:function(){return e.props.onCancel()},visible:a},n.createElement("div",null,n.createElement("div",{className:"mTop5 mBottom12 Font14 require"},_l("\u540D\u79F0")),n.createElement("input",{class:"inputBox mBottom32",maxLength:32,value:d,placeholder:_l("\u8BF7\u586B\u5199\u89D2\u8272\u540D\u79F0"),ref:function(h){return e.input=h},onChange:function(h){e.setState({roleName:h.target.value,exsistCurrentName:!1})}}),n.createElement("div",{className:"mBottom12 Font14 require"},_l("\u89D2\u8272\u7EC4")),n.createElement(xe.default,{value:g,className:"selectWrapper w100 mBottom32",options:i,suffixIcon:n.createElement(S.Z,{icon:"arrow-down-border Font14"}),onChange:function(h){return e.setState({orgRoleGroupId:h})}}),n.createElement("div",{className:"Font14 mBottom12"},_l("\u5907\u6CE8")),n.createElement("textarea",{value:f,className:"remark",onChange:function(h){e.setState({remark:h.target.value})},maxLength:200})))}}]),s}(n.Component);const Ne=Se;var De=p(10929),A=50,Z=null,Ue=function(s){return function(c){c({type:"CHANGE_PROJECT_ID",projectId:s})}},je=function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return function(e,t){var r=t().orgManagePage.roleManage,a=r.rolePageInfo,o=a===void 0?{}:a,l=r.projectId,d=r.roleList,f=d===void 0?[]:d,g=r.searchValue,i=r.isRequestUserList,u=r.currentRole,h=o.pageIndex;Z&&Z.abort&&Z.abort(),Z=L.Z.getOrganizes({pageIndex:h||1,pageSize:A,projectId:l,keywords:g,orgRoleGroupId:c}),Z.then(function(m){var v=R().find(m.list||[],function(C){return C.organizeId===u.organizeId||C.organizeName===u.organizeName})||m.list&&!R().isEmpty(m.list)&&m.list[0]||{},x=(0,y.default)({},o),E=h>1?f.concat(m.list):m.list;x.isMore=m.list&&m.list.length>=A,e(J((0,y.default)({},o,{isMore:m.list&&m.list.length>=A}))),e(X(E||[])),e({type:"UPDATE_IS_LOADING",isLoading:!1}),s&&h!==1?(v=m.list&&!R().isEmpty(m.list)&&m.list[m.list.length-1],e(B(v))):h===1&&(e(B(v)),(i||s)&&!R().isEmpty(v)&&e(_({roleId:v.organizeId})))})}},X=function(s){return function(c){c({type:"UPDATE_ROLE_LIST_DATA",roleList:s})}},J=function(s){return function(c){c({type:"UPDATE_ROLE_PAGE_INFO",data:s})}},B=function(s){return function(c){s.organizeId||(Q(1),c({type:"UPDATE_USER_LIST",userList:[]}),c({type:"UPDATE_USER_COUNT",allUserCount:0})),c({type:"UPDATE_CURRENT_ROLE",currentRole:s})}},Pe=function(s){return function(c){c({type:"UPDATE_SEARCH_VALUE",searchValue:s}),c({type:"UPDATE_ROLE_PAGE_INFO",data:{pageIndex:1,isMore:!1}})}},Q=function(s){return function(c){c({type:"UPDATE_USER_PAGE_INDEX",userPageIndex:s})}},_=function(s){return function(c,e){var t=s||{},r=t.roleId,a=e().orgManagePage.roleManage,o=a.projectId,l=a.userPageIndex,d=a.currentRole;c({type:"UPDATE_USER_LOADING",userLoading:!0}),L.Z.pagedOrganizeAccounts({organizeId:r||"",pageIndex:l||1,pageSize:A,keywords:"",projectId:o}).then(function(f){var g=f.list,i=g===void 0?[]:g,u=f.allCount;c({type:"UPDATE_USER_LIST",userList:i}),c({type:"UPDATE_USER_LOADING",userLoading:!1}),c({type:"UPDATE_USER_COUNT",allUserCount:u})})}},Ge=function(s){return function(c){c({type:"UPDATE_USER_LOADING",userLoading:s})}},be=function(s){return function(c){c({type:"UPDATE_SELECT_USER_IDS",selectUserIds:s})}},ke=function(s){return function(c){c({type:"UPDATE_IS_IMPORT_ROLE",data:s})}},Te=function(s){return function(c){c({type:"UPDATE_IS_REQUEST_LIST",data:s})}},ze=p(57853),Ze=p(85315),q=p(20845),Oe=(0,T.Z)([`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .iconWrap {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f5f5f5;
    margin-bottom: 32px;
    position: relative;
    .icon {
      font-size: 50px;
      color: #c2c3c3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  .tipTxt {
    max-width: 312px;
    margin: 0 auto;
    text-align: center;
    line-height: 20px;
  }
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .iconWrap {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f5f5f5;
    margin-bottom: 32px;
    position: relative;
    .icon {
      font-size: 50px;
      color: #c2c3c3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  .tipTxt {
    max-width: 312px;
    margin: 0 auto;
    text-align: center;
    line-height: 20px;
  }
`]),Ae=z.ZP.div(Oe),ee=function(I){(0,b.default)(s,I);function s(c){return(0,j.default)(this,s),(0,G.default)(this,(s.__proto__||U()(s)).call(this,c))}return(0,P.default)(s,[{key:"render",value:function(){var e=this.props,t=e.icon,r=e.tipTxt;return n.createElement(Ae,null,n.createElement("div",{className:"iconWrap"},n.createElement(S.Z,{icon:t})),n.createElement("div",{className:"tipTxt Gray_75 Font14"},r||_l("\u6570\u636E\u7A7A")))}}]),s}(n.Component),$e=p(60510),Me=p(3735),Ve=(0,T.Z)([`
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  align-items: center;
  max-width: 300px;
  .departmentValue {
    max-width: 300px;
    display: inline-block;
  }
`],[`
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  align-items: center;
  max-width: 300px;
  .departmentValue {
    max-width: 300px;
    display: inline-block;
  }
`]),Fe=z.ZP.div(Ve),Be=function(I){(0,b.default)(s,I);function s(c){(0,j.default)(this,s);var e=(0,G.default)(this,(s.__proto__||U()(s)).call(this,c));return e.setDeptRange=function(t){var r=e.props,a=r.projectId,o=r.roleId;(0,$e.Z)({projectId:a,className:"roleSetDeptRangeDialog",title:_l("\u8BBE\u7F6E\u5206\u7BA1\u90E8\u95E8"),unique:!1,fromAdmin:!0,showCreateBtn:!1,checkIncludeChilren:!0,selectedDepartment:(t.orgRoleChargeDepartments||[]).map(function(l){return(0,y.default)({},l,{checkIncludeChilren:!0})})||[],selectFn:function(d,f){var g=f.map(function(i){return{departmentId:i.departmentId,isIncludeSub:!0}});L.Z.setOrgRoleChargeDepartment({projectId:a,orgRoleId:o,accountId:t.accountId,departmentIds:g}).then(function(i){i&&e.props.updateUerList()})}})},e.getDeptPath=function(t){var r=t.orgRoleChargeDepartments,a=t.accountId,o=e.state.departmentsPath,l=e.props.projectId;o.find(function(d){return d.accountId===t.accountId})||!r||r.length===0||Me.Z.getDepartmentFullNameByIds({projectId:l,departmentIds:r.map(function(d){return d.departmentId})}).then(function(d){e.setState({departmentsPath:o.concat({accountId:a,departments:d})})})},e.renderDepartments=function(t){var r=e.state.departmentsPath,a=t.orgRoleChargeDepartments,o=a===void 0?[]:a;return n.createElement(Fe,null,n.createElement("div",{onMouseEnter:function(){return e.getDeptPath(t)},key:"roleUserDepartmentRange-"+t.accountId,className:"Hand"},n.createElement($.Z,{text:n.createElement("div",null,(r.find(function(l){return l.accountId===t.accountId})||{departments:[]}).departments.map(function(l){return n.createElement("div",null,l.name)})),popupPlacement:"top",mouseEnterDelay:.5,disable:!o||o.length===0},n.createElement("span",{className:"departmentValue overflow_ellipsis"},o.map(function(l){return l.departmentName}).join("\u3001")||"-"))))},e.renderThead=function(){var t=e.props,r=t.selectUserIds,a=r===void 0?[]:r,o=t.userList,l=o===void 0?[]:o,d=e.state,f=d.fixedLeft,g=d.fixedRight,i=l.filter(function(h){return a.some(function(m){return m===h.accountId})})||[],u=!R().isEmpty(a)&&i.length===l.length;return n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"checkBoxCol"},n.createElement(q.Z,{clearselected:!R().isEmpty(i)&&!u,checked:u||!R().isEmpty(i),onClick:function(m){var v=[];m?v=[]:v=l.map(function(x){return x.accountId}),e.props.updateSelectUserIds(v)}})),n.createElement("th",{className:N()("nameCol",{fixedLeft:f})},_l("\u59D3\u540D")),n.createElement("th",{className:"numberCol"},_l("\u5DE5\u53F7")),n.createElement("th",{className:"departmentCol"},_l("\u90E8\u95E8")),n.createElement("th",{className:"positionCol"},_l("\u804C\u4F4D")),n.createElement("th",{className:"departmentRangeCol"},_l("\u5206\u7BA1\u90E8\u95E8"),n.createElement($.Z,{popupPlacement:"bottom",text:n.createElement("span",null,_l("\u4E3A\u89D2\u8272\u4EBA\u5458\u6307\u5B9A\u5206\u7BA1\u8303\u56F4\uFF0C\u5728\u5BA1\u6279\u6D41\u7A0B\u4E2D\u53EF\u4EE5\u52A8\u6001\u83B7\u53D6\u5F53\u524D\u89D2\u8272\u4E2D\u5BF9\u5E94\u7684\u5206\u7BA1\u8D1F\u8D23\u4EBA\u8FDB\u884C\u5BA1\u6279\u3002"))},n.createElement(S.Z,{icon:"info",className:"mLeft6 Font14 Gray_9e"}))),n.createElement("th",{className:N()("actionCol",{fixedRight:g})})))},e.renderCon=function(){var t=e.props,r=t.userList,a=r===void 0?[]:r,o=t.selectUserIds,l=o===void 0?[]:o,d=e.state,f=d.fixedLeft,g=d.fixedRight;return a.map(function(i){return n.createElement("tr",{key:i.accountId},n.createElement("td",{className:"checkBoxCol"},n.createElement(q.Z,{checked:R().includes(l,i.accountId),onClick:function(h){var m=[].concat((0,Ze.Z)(l));h?m=m.filter(function(v){return i.accountId!==v}):m.push(i.accountId),e.props.updateSelectUserIds(m)}})),n.createElement("td",{className:N()("nameCol",{fixedLeft:f})},n.createElement("div",{className:"flexRow"},n.createElement(ze.Z,{className:"circle",user:{userHead:i.avatar,accountId:i.accountId},size:32,projectId:e.props.projectId}),n.createElement("a",{href:"/user_"+i.accountId,className:"Gray overflow_ellipsis mLeft10 LineHeight32 name",title:i.fullname},i.fullname))),n.createElement("td",{className:"numberCol"},i.jobNumber),n.createElement("td",{className:"departmentCol",title:i.departments.map(function(u,h){return i.departments.length-1>h?u.name+";":""+u.name})},i.departments.map(function(u,h){return i.departments.length-1>h?u.name+";":""+u.name})),n.createElement("td",{className:"positionCol",title:(i.jobs||[]).map(function(u,h){return i.jobs.length-1>h?u.name+";":""+u.name})},(i.jobs||[]).map(function(u,h){return i.jobs.length-1>h?u.name+";":""+u.name})),n.createElement("td",{className:"departmentRangeCol"},e.renderDepartments(i)),n.createElement("td",{className:N()("actionCol",{fixedRight:g})},n.createElement("span",{className:"settingButton Hand",onClick:function(){return e.setDeptRange(i)}},_l("\u8BBE\u7F6E"))))})},e.handleScroll=function(t){var r=t===0?e.scrollNullHeadRef:e.scrollRef;if(r.current){var a=e.state,o=a.fixedLeft,l=a.fixedRight,d=r.current.scrollLeft;d>0!==o&&e.setState({fixedLeft:d>0});var f=r.current.scrollWidth-r.current.scrollLeft===e.scrollRef.current.clientWidth;f===l&&e.setState({fixedRight:!f})}},e.state={fixedLeft:!1,fixedRight:!1,departmentsPath:[]},e.scrollRef=n.createRef(),e.scrollNullHeadRef=n.createRef(),e}return(0,P.default)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.userList,r=t===void 0?[]:t;return n.createElement(n.Fragment,null,R().isEmpty(r)&&n.createElement("div",{className:"useTableHeader",ref:this.scrollNullHeadRef,onScroll:function(){return e.handleScroll(0)}},n.createElement("table",{className:"fixedTable usersTable",cellSpacing:"0"},this.renderThead(this.props))),n.createElement("div",{className:"userTableBody",ref:this.scrollRef,onScroll:function(){return e.handleScroll(1)}},R().isEmpty(r)?n.createElement(ee,{tipTxt:_l("\u5F53\u524D\u7EC4\u7EC7\u89D2\u8272\u65E0\u6210\u5458"),icon:"Empty_data"}):n.createElement("table",{className:"usersTable overflowTable",cellSpacing:"0"},this.renderThead(),n.createElement("tbody",null,this.renderCon()))))}}]),s}(n.Component);const we=Be;var He=p(76795),We=p(75809),te=50,Ke=function(I){(0,b.default)(s,I);function s(c){(0,j.default)(this,s);var e=(0,G.default)(this,(s.__proto__||U()(s)).call(this,c));return e.addUser=function(){var t=e.props,r=t.projectId,a=t.currentRole,o=a===void 0?{}:a,l=t.selectUserIds,d=l===void 0?[]:l,f={unique:!1,projectId:r,filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,dataRange:2,callback:function(i){L.Z.addOrganizeUsers({projectId:r,organizeId:o.organizeId,accountIds:R().map(i,function(u){return u.accountId})}).then(function(u){u?(e.props.getUserList({roleId:o.organizeId}),alert(_l("\u6DFB\u52A0\u6210\u529F"))):alert(_l("\u6DFB\u52A0\u5931\u8D25"),2)})}};(0,We.Z)({showMoreInvite:!1,fromAdmin:!0,SelectUserSettings:f})},e.removeUsers=function(){var t=e.props,r=t.selectUserIds,a=r===void 0?[]:r,o=t.currentRole,l=o===void 0?{}:o,d=t.projectId;R().isEmpty(a)||L.Z.deleteOrganizeUsers({projectId:d,accountIds:a,organizeId:l.organizeId}).then(function(f){f?(e.props.getUserList({roleId:l.organizeId}),e.props.updateSelectUserIds([]),alert(_l("\u79FB\u51FA\u6210\u529F"))):alert(_l("\u79FB\u9664\u5931\u8D25"),2)})},e.handleExportUser=function(){var t=e.props,r=t.projectId,a=t.selectUserIds,o=a===void 0?[]:a;R().isEmpty(o)||(0,He.C)({projectId:r,accountIds:o,updateSelectUserIds:function(){e.props.updateSelectUserIds([])}})},e.changPage=function(t){var r=e.props.currentRole;e.props.updateUserPageIndex(t),e.props.getUserList({pageIndex:t,roleId:r.organizeId})},e.state={},e}return(0,P.default)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,r=t.currentRole,a=t.allUserCount,o=t.userPageIndex,l=t.userLoading,d=t.selectUserIds,f=t.userList,g=t.projectId;return n.createElement(n.Fragment,null,n.createElement("div",{className:"roleContentHeader Font17"},n.createElement("span",{className:"Bold"},r.organizeName),a?n.createElement("span",{className:"Gray_9e mLeft10"},a):""),n.createElement("div",{className:"actUserBox"},n.createElement("div",{className:"actBtn addUser Hand",onClick:this.addUser},_l("\u6DFB\u52A0\u6210\u5458")),n.createElement("div",{className:N()("actBtn",{disabledBtn:R().isEmpty(d)}),onClick:this.removeUsers},_l("\u79FB\u51FA")),n.createElement("div",{className:N()("actBtn",{disabledBtn:R().isEmpty(d)}),onClick:this.handleExportUser},_l("\u5BFC\u51FA"))),n.createElement("div",{className:"userList"},l?n.createElement(V.Z,{className:"mTop30"}):n.createElement(we,{projectId:g,roleId:r.organizeId,userList:f,selectUserIds:d,updateSelectUserIds:this.props.updateSelectUserIds,updateUerList:function(){return e.props.getUserList({pageIndex:o,roleId:r.organizeId})}})),!l&&a>te&&n.createElement(De.Z,{total:a,pageSize:te,pageIndex:o,onChange:this.changPage}))}}]),s}(n.Component);const Ye=(0,K.$j)(function(I){var s=I.orgManagePage.roleManage,c=s.currentRole,e=s.userList,t=s.allUserCount,r=s.userPageIndex,a=s.userLoading,o=s.selectUserIds,l=s.projectId;return{currentRole:c,userList:e,allUserCount:t,userPageIndex:r,userLoading:a,selectUserIds:o,projectId:l}},function(I){return(0,W.DE)((0,y.default)({},R().pick(O,["getUserList","updateUserPageIndex","updateSelectUserIds"])),I)})(Ke);var Xe=p(23553),Je=p(70714),Qe=p(15577),_e=(0,T.Z)([`
  .ant-tree-node-content-wrapper {
    width: 185px;
    display: flex;
    align-items: center;
  }
  .ant-tree-node-content-wrapper:hover,
  .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: transparent !important;
  }
  .ant-tree-switcher-noop {
    display: none !important;
  }
  .ant-tree-title {
    flex: 1;
  }
  .nodeName {
    color: #333 !important;
  }
  .ant-tree-treenode {
    width: 233px;
    padding: 6px 0 !important;
    border-radius: 3px;
    position: relative;
    &:hover {
      background-color: #f5f5f5;
      .dragIcon {
        opacity: 1;
      }
      .moreActionButton {
        opacity: 1;
      }
    }
    &-selected {
      background-color: rgba(33, 150, 243, 0.11) !important;
      &::before {
        content: '';
        width: 2px;
        height: 13px;
        position: absolute;
        left: 0;
        top: 12px;
      }
      .moreActionButton {
        opacity: 1;
      }
      .nodeName {
        font-weight: 600 !important;
        color: #2196f3 !important;
      }
    }
  }
  .dragIcon {
    opacity: 0;
    color: #9e9e9e !important;
  }
  .moreActionButton {
    display: inline-block;
    opacity: 0;
  }
  .ant-tree-draggable-icon {
    width: auto !important;
  }
`],[`
  .ant-tree-node-content-wrapper {
    width: 185px;
    display: flex;
    align-items: center;
  }
  .ant-tree-node-content-wrapper:hover,
  .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: transparent !important;
  }
  .ant-tree-switcher-noop {
    display: none !important;
  }
  .ant-tree-title {
    flex: 1;
  }
  .nodeName {
    color: #333 !important;
  }
  .ant-tree-treenode {
    width: 233px;
    padding: 6px 0 !important;
    border-radius: 3px;
    position: relative;
    &:hover {
      background-color: #f5f5f5;
      .dragIcon {
        opacity: 1;
      }
      .moreActionButton {
        opacity: 1;
      }
    }
    &-selected {
      background-color: rgba(33, 150, 243, 0.11) !important;
      &::before {
        content: '';
        width: 2px;
        height: 13px;
        position: absolute;
        left: 0;
        top: 12px;
      }
      .moreActionButton {
        opacity: 1;
      }
      .nodeName {
        font-weight: 600 !important;
        color: #2196f3 !important;
      }
    }
  }
  .dragIcon {
    opacity: 0;
    color: #9e9e9e !important;
  }
  .moreActionButton {
    display: inline-block;
    opacity: 0;
  }
  .ant-tree-draggable-icon {
    width: auto !important;
  }
`]),qe=(0,T.Z)([`
  color: #f51744;
`],[`
  color: #f51744;
`]),ne=50,et=(0,z.ZP)(ie.default)(_e),tt=z.ZP.div(qe),D={title:_l("\u9ED8\u8BA4"),key:"defaultGroup",isLeaf:!1,orgRoleGroupId:"",selectable:!1,children:[]},nt=function(I){(0,b.default)(s,I);function s(c){(0,j.default)(this,s);var e=(0,G.default)(this,(s.__proto__||U()(s)).call(this,c));return e.init=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.state.treeData,o=e.props.match,l=o.params,d=l===void 0?{}:l,f=null;e.setState({loading:!0}),L.Z.getOrgRoleGroupsByProjectId({projectId:d.projectId}).then(function(g){f=[(0,y.default)({},D,{children:t&&a[0]&&a[0].key===D.key?a[0].children:[]})].concat(g.map(function(i,u){var h=a.find(function(m){return m.orgRoleGroupId===i.orgRoleGroupId});return(0,y.default)({},i,{title:i.orgRoleGroupName,key:i.orgRoleGroupId,isLeaf:!1,selectable:!1,children:t&&h?h.children:[]})})),t?e.setState({treeData:f,loading:!1}):e.updateChildren(f,[f[0].orgRoleGroupId],!0,r)})},e.updateChildren=function(t,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,l=e.props,d=l.match,f=l.searchValue,g=d.params,i=g===void 0?{}:g;if(!t.length){e.setState({treeData:[],loading:!1}),e.props.updateUserLoading(!1);return}var u=r.map(function(h){return L.Z.getOrganizes({pageIndex:1,pageSize:ne,projectId:i.projectId,keywords:f,orgRoleGroupId:h})});H().all(u).then(function(h){if(h.forEach(function(v,x){var E=R().findIndex(t,function(C){return C.orgRoleGroupId===r[x]});t[E].children=v.list.map(function(C){return(0,y.default)({},C,{title:C.organizeName,key:C.organizeId,isLeaf:!0})})}),t[0].key===D.key&&!t[0].children.length&&(t=R().slice(t,1)),a&&t[0]){var m=t[0].children[0];a==="add"&&(m=R().last(t.find(function(v){return v.orgRoleGroupId===r[0]}).children)),m?e.handleClick(m,!0):(e.props.updateUserLoading(!1),e.props.updateCurrentRole({}))}e.setState({treeData:R().cloneDeep(t),loading:!1,expandedKeys:o?t[0]?[t[0].key]:[]:e.state.expandedKeys})})},e.loadData=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.state.treeData,a=e.props,o=a.match,l=a.searchValue,d=o.params,f=d===void 0?{}:d;return new(H())(function(g){if(t.children&&t.children.length!==0){g();return}L.Z.getOrganizes({pageIndex:1,projectId:f.projectId,keywords:l,orgRoleGroupId:t.orgRoleGroupId}).then(function(i){var u=r.map(function(h){var m=h.children;return h.orgRoleGroupId===t.orgRoleGroupId&&(m=i.list.map(function(v){return(0,y.default)({},v,{title:v.organizeName,key:v.organizeId,isLeaf:!0})})),(0,y.default)({},h,{children:m})});e.setState({treeData:u}),g()})})},e.exportJobList=function(){var t=e.props.projectId,r=(0,Qe.vo)(t,!0).companyName||"";fetch(md.global.Config.AjaxApiUrl+"download/exportProjectJobList",{method:"POST",headers:{"content-type":"application/json",Authorization:"md_pss_id "+(0,Je.qz)()},body:oe()({userStatus:"1",projectId:t})}).then(function(a){return a.blob()}).then(function(a){var o=pe()().format("YYYYMMDDHHmmss"),l=r+"_"+_l("\u804C\u4F4D")+"_"+o+".xlsx",d=document.createElement("a");d.href=window.URL.createObjectURL(a),d.download=l,d.click(),window.URL.revokeObjectURL(d.href)})},e.onScrollEnd=function(){var t=e.props.searchValue,r=e.state,a=r.searchRes,o=r.loading;!t||!a.isMore||o||e.setState({searchLoading:!0},function(){return e.getSearchList(t)})},e.createAndEdit=function(t){e.setState({showRoleDialog:!0,filed:t})},e.renderImportInfo=function(){return n.createElement("div",{className:"roleManageContainer"},n.createElement(Xe.Z,{importType:"role",txt:_l("\u89D2\u8272"),clickBackList:function(){e.props.updateIsImportRole(!1)},downLoadUrl:"/staticfiles/template/positionImport.xlsx",updateList:function(){e.init()}}))},e.closeRoleFolderDialog=function(){return e.setState({roleFolderDialog:{visible:!1,id:void 0}})},e.handleDelete=function(t){var r=e.state,a=r.treeData,o=r.expandedKeys,l=e.props.projectId;t.isLeaf?L.Z.deleteOrganizes({organizeIds:[t.organizeId],projectId:l}).then(function(d){e.setState({popupVisible:!1,showDeleteId:""}),d===1?(alert(_l("\u5220\u9664\u6210\u529F")),e.updateChildren(a,[t.orgRoleGroupId],!0),e.props.updateIsRequestList(!0)):d===24004?alert(_l("\u89D2\u8272\u5B58\u5728\u6210\u5458\uFF0C\u65E0\u6CD5\u5220\u9664"),3):alert(_l("\u5220\u9664\u5931\u8D25"),2)}):L.Z.removeOrgRoleGroup({projectId:l,orgRoleGroupId:t.orgRoleGroupId}).then(function(d){d===1?(alert("\u5220\u9664\u6210\u529F"),e.setState({expandedKeys:o.filter(function(f){return f!==t.orgRoleGroupId})}),e.init()):d===24004?alert(_l("\u89D2\u8272\u7EC4\u5B58\u5728\u7EC4\u7EC7\u89D2\u8272\uFF0C\u65E0\u6CD5\u5220\u9664"),3):alert(_l("\u5220\u9664\u5931\u8D25"),2)})},e.showDeleteDialog=function(t){e.setState({actionPopupVisible:!1}),F.Z.confirm({title:t.isLeaf?_l("\u786E\u5B9A\u5220\u9664\u6B64\u89D2\u8272\uFF1F"):_l("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89D2\u8272\u7EC4\uFF1F"),children:n.createElement(tt,{className:"Font13"},_l("\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D")),onOk:function(){return e.handleDelete(t)}})},e.handleClick=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.props.currentRole;t.isLeaf&&(t.organizeId!==a.organizeId||r)&&(e.props.updateUserPageIndex(1),e.props.updateCurrentRole(t),e.props.updateSelectUserIds([]),e.props.getUserList({roleId:t.organizeId}))},e.onDrop=function(t){var r=e.props.projectId,a=e.state.treeData,o=t.dragNode,l=t.node,d=t.dropPosition,f=o.isLeaf?a.find(function(m){return m.orgRoleGroupId===o.orgRoleGroupId}).children||[]:{},g=o.isLeaf?R().findIndex(f,function(m){return m.organizeId===o.organizeId}):void 0,i=!1;if(o.isLeaf!==l.isLeaf&&(i=!0),o.isLeaf&&!l.isLeaf&&l.expanded&&(i=!1),o.isLeaf&&!l.isLeaf&&d===-1&&(i=!0),!i){var u={projectId:r};if(o.isLeaf?(u.organizeId=o.organizeId,u.previousOrgRoleId=d===-1||!l.isLeaf?void 0:l.organizeId,u.moveOrgRoleGroupId=l.orgRoleGroupId):(u.orgRoleGroupId=o.orgRoleGroupId,u.previousOrgRoleGroupId=d===-1?void 0:l.orgRoleGroupId),!(o.isLeaf&&(g&&f[g-1]&&u.previousOrgRoleId===f[g-1].organizeId||!u.previousOrgRoleId&&u.moveOrgRoleGroupId===o.orgRoleGroupId))){var h=o.isLeaf?L.Z.setSortOrgRole(u):L.Z.setSortOrgRoleGroup(u);h.then(function(m){m&&(alert(_l("\u8C03\u6574\u6210\u529F")),o.isLeaf?e.updateChildren(a,R().uniq([l.orgRoleGroupId,o.orgRoleGroupId])):L.Z.getOrgRoleGroupsByProjectId({projectId:r}).then(function(v){var x=a.filter(function(E){return E.orgRoleGroupId!==D.orgRoleGroupId}).map(function(E){var C=v.find(function(k){return k.orgRoleGroupId===E.orgRoleGroupId});return(0,y.default)({},E,{sortIndex:C.sortIndex})});e.setState({treeData:a[0].orgRoleGroupId===D.orgRoleGroupId?[a[0]].concat(R().sortBy(x,"sortIndex")):R().sortBy(x,"sortIndex")})}))})}}},e.handleSearch=function(t){var r=e.state.searchRes;if(!t){treeData[0]&&treeData[0].children[0]&&e.handleClick(treeData[0].children[0]);return}e.setState({searchRes:(0,y.default)({},r,{pageIndex:0,isMore:!1}),searchLoading:!0},function(){return e.getSearchList(t)})},e.handleClear=function(){var t=e.state.treeData;e.setState({searchRes:{pageIndex:0,isMore:!1,data:[]}}),t[0]&&t[0].children[0]&&e.handleClick(t[0].children[0])},e.getSearchList=function(t){var r=e.props.projectId,a=e.state.searchRes,o=a.pageIndex,l=a.data;L.Z.getOrganizes({pageIndex:o+1,pageSize:ne,projectId:r,keywords:t}).then(function(d){var f=d.list.map(function(g){return(0,y.default)({},g,{title:g.organizeName,key:g.organizeId,isLeaf:!0})});o===0&&(f[0]?e.handleClick(f[0]):(e.props.updateUserLoading(!1),e.props.updateCurrentRole({}))),e.setState({searchRes:{data:o===0?f:l.concat(f),pageIndex:o+1,isMore:d.allCount>f.length},searchLoading:!1})})},e.renderSearchList=function(){var t=e.state,r=t.searchRes,a=t.searchLoading;return!r.data.length&&!a?n.createElement("div",{className:"searchList"},n.createElement("div",{className:"Gray_9e Font13 mLeft24"},_l("\u6682\u65E0\u641C\u7D22\u7ED3\u679C"))):n.createElement("div",{className:"searchList"},r.data.map(function(o){return e.titleRender(o)}),a&&n.createElement(V.Z,null))},e.titleRender=function(t){var r=e.props,a=r.searchValue,o=r.currentRole,l=e.state,d=l.showDeleteId,f=d===void 0?"":d,g=l.actionPopupVisible,i=l.treeData,u={};a&&(u=i.find(function(m){return m.orgRoleGroupId===t.orgRoleGroupId}));var h=!t.isLeaf&&t.orgRoleGroupId==="";return n.createElement("div",{className:N()("valignWrapper",{roleItem:!!a,current:a&&o.key===t.key}),key:"treeNodeTitleRender-"+t.orgRoleGroupId+"-"+t.key,onClick:function(){return e.handleClick(t)}},a&&n.createElement(S.Z,{icon:"person_new",className:"Gray_9e Font18"}),n.createElement("span",{className:N()("flex ellipsis Font13 nodeName",{mLeft4:t.isLeaf})},u.title?u.title+"-"+t.title:t.title),!h&&n.createElement("span",{className:"moreActionButton Hand"},n.createElement(fe.Z,{popupVisible:t.key===g,popupClassName:"actRoleDrop",action:["click"],popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}},getPopupContainer:function(){return document.body},onPopupVisibleChange:function(v){e.setState({actionPopupVisible:v?t.key:!1})},popup:n.createElement(M.default,null,n.createElement(M.default.Item,{key:"0",onClick:function(v){t.isLeaf&&e.createAndEdit("edit"),e.setState(t.isLeaf?{actionPopupVisible:!1}:{actionPopupVisible:!1,roleFolderDialog:{visible:!0,id:t.orgRoleGroupId,name:t.orgRoleGroupName}})}},_l("\u7F16\u8F91")),n.createElement(M.default.Item,{key:"1",className:"delRole",onClick:function(v){return e.showDeleteDialog(t)}},_l("\u5220\u9664")))},n.createElement(S.Z,{icon:"more_vert",className:"Gray_9e Font18 TxtMiddle editIcon Hover_21",onClick:function(v){return v.stopPropagation()}}))),t.isLeaf&&t.remark&&t.organizeId!==f&&n.createElement($.Z,{popupPlacement:"rightTop",offset:[0,-15],text:n.createElement("span",null,t.remark)},n.createElement(S.Z,{icon:"info_outline",className:"remarkTooptip Gray_9e Font16 TxtMiddle mLeft2"})))},e.onExpand=function(t){e.setState({expandedKeys:t})},e.state={showRoleDialog:!1,roleFolderDialog:{visible:!1,id:void 0},actionPopupVisible:!1,treeData:[],requestParamOrgRoleGroupId:"",expandedKeys:[],loading:!0,searchLoading:!1,searchRes:{data:[],isMore:!1,pageIndex:0}},e}return(0,P.default)(s,[{key:"componentDidMount",value:function(){var e=this.props.match,t=e.params,r=t===void 0?{}:t;this.props.updateIsRequestList(!0),this.props.updateProjectId(r.projectId),this.props.updateSearchValue(""),this.props.updateCurrentRole({}),this.init(!1,!0)}},{key:"componentWillUnmount",value:function(){this.props.updateUserLoading(!0)}},{key:"render",value:function(){var e=this,t=this.props,r=t.roleList,a=r===void 0?[]:r,o=t.currentRole,l=o===void 0?{}:o,d=t.projectId,f=t.isImportRole,g=t.searchValue,i=this.state,u=i.showRoleDialog,h=i.filed,m=i.roleFolderDialog,v=i.treeData,x=i.loading,E=i.expandedKeys;return f?this.renderImportInfo():n.createElement("div",{className:"roleManageContainer"},n.createElement(me.Z,{prefix:_l("\u89D2\u8272")}),n.createElement("div",{className:"roleManageLeft"},n.createElement("div",{className:"Bold Font17 mBottom20 pLeft24 mTop24"},_l("\u89D2\u8272")),n.createElement(ge,{projectId:d,updateSearchValue:this.props.updateSearchValue,handleSearch:this.handleSearch,handleClear:this.handleClear,updateIsRequestList:this.props.updateIsRequestList}),n.createElement("input",{type:"text",style:{width:0,height:0,border:0}}),n.createElement("div",{className:"actBox flexRow"},n.createElement("span",{className:"creatRole Hand mRight12",onClick:function(){return e.createAndEdit("create")}},n.createElement(S.Z,{icon:"add",className:"Font18 Bold TxtMiddle"}),_l("\u89D2\u8272")),n.createElement("span",{className:"creatRole Hand",onClick:function(){return e.setState({roleFolderDialog:{visible:!0,id:void 0}})}},n.createElement(S.Z,{icon:"add",className:"Font18 Bold TxtMiddle"}),_l("\u89D2\u8272\u7EC4"))),n.createElement("div",{className:"roleList"},n.createElement(re.Z,{onScrollEnd:this.onScrollEnd},x?n.createElement(V.Z,null):g?this.renderSearchList():n.createElement(et,{treeData:v,expandedKeys:E,selectedKeys:l.organizeId?[l.organizeId]:[],draggable:function(k){return!k.isLeaf&&k.key==="defaultGroup"?!1:{icon:n.createElement(S.Z,{icon:"indicator",className:"dragIcon Gray_9e"})}},showIcon:!0,switcherIcon:null,icon:function(k){return k.isLeaf?n.createElement(S.Z,{icon:"person_new",className:"Gray_9e Font18 LineHeight24"}):null},titleRender:this.titleRender,loadData:this.loadData,onDrop:this.onDrop,onExpand:this.onExpand}),!x&&!g&&!v.length&&n.createElement("div",{className:"searchList"},n.createElement("div",{className:"Gray_9e Font13 mLeft24"},_l("\u6682\u65E0\u7ED3\u679C")))))),n.createElement("div",{className:"roleManageRight flexColumn"},R().isEmpty(l)&&!g?n.createElement(ee,{tipTxt:_l("\u53EF\u4EE5\u6839\u636E\u6210\u5458\u5C5E\u6027\u53BB\u521B\u5EFA\u89D2\u8272\uFF0C\u5982\uFF0C\u6280\u672F\u3001\u751F\u4EA7\u3001\u9500\u552E\u8BBE\u7F6E\u540E\u5E94\u7528\u53EF\u4EE5\u76F4\u63A5\u9009\u62E9\u89D2\u8272"),icon:"Empty_Noposition"}):n.createElement(Ye,null)),u&&n.createElement(Ne,{showRoleDialog:u,filed:h,roleList:a,treeData:v[0]&&v[0].key===D.key?v:[D].concat(v),projectId:d,currentRole:l,searchValue:g,updateChildren:this.updateChildren,updateCurrentRole:this.props.updateCurrentRole,updateIsRequestList:this.props.updateIsRequestList,onCancel:function(){e.setState({showRoleDialog:!1})}}),m.visible&&n.createElement(Ee,{projectId:d,info:m,visible:m.visible,onClose:this.closeRoleFolderDialog,refresh:function(){return e.init(!0)}}))}}]),s}(n.Component);const rt=(0,K.$j)(function(I){var s=I.orgManagePage.roleManage,c=s.roleList,e=s.isLoading,t=s.currentRole,r=s.projectId,a=s.isImportRole,o=s.rolePageInfo,l=s.searchValue;return{roleList:c,isLoading:e,currentRole:t,projectId:r,isImportRole:a,rolePageInfo:o,searchValue:l}},function(I){return(0,W.DE)((0,y.default)({},R().pick(O,["updateProjectId","updateCurrentRole","getUserList","updateUserPageIndex","updateSelectUserIds","updateSearchValue","updateIsImportRole","updateIsRequestList","updateUserLoading"])),I)})(nt)}}]);
