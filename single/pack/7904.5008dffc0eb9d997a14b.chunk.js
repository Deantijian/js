"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7904],{77904:(x,f,e)=>{e.r(f),e.d(f,{default:()=>H});var h=e(66814),c=e.n(h),v=e(91880),i=e.n(v),S=e(48388),$=e.n(S),L=e(29914),D=e.n(L),B=e(33867),P=e(95679),N=e(85105),C=e.n(N),I=e(99663),O=e(22600),j=e(49135),M=e(93196),U=e(86735),t=e(67294),b=e(93967),Q=e.n(b),W=e(75915),y=e(59911),m=e(86515),R=e(15577),A=e(71893),K=e(96486),u=e.n(K),F=e(30381),G=e.n(F),Z=(0,U.Z)([`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 32px 0 24px;
  margin: 10px 15px 20px;
  border-radius: 8px;
  font-weight: 600;
  .joinNetwork,
  .createNetwork {
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
  .createNetwork {
    border-width: 1px;
    border-style: solid;
    &:not(:hover) {
      background: #fff !important;
    }
    &:hover {
      color: #fff !important;
    }
  }
  .ThemeColor3 {
    color: #2196f3;
  }
  .ThemeBGColor3 {
    background-color: #2196f3;
  }
`],[`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 32px 0 24px;
  margin: 10px 15px 20px;
  border-radius: 8px;
  font-weight: 600;
  .joinNetwork,
  .createNetwork {
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
  .createNetwork {
    border-width: 1px;
    border-style: solid;
    &:not(:hover) {
      background: #fff !important;
    }
    &:hover {
      color: #fff !important;
    }
  }
  .ThemeColor3 {
    color: #2196f3;
  }
  .ThemeBGColor3 {
    background-color: #2196f3;
  }
`]),k=(0,U.Z)([`
  height: 30px;
`],[`
  height: 30px;
`]),Y=A.ZP.div(Z),z=A.ZP.div(k),J=function(g){(0,M.default)(r,g);function r(s){(0,I.default)(this,r);var n=(0,j.default)(this,(r.__proto__||C()(r)).call(this,s));return n.handleChangeVisible=function(){var a=!n.state.visible;n.setState({visible:a}),a&&u().isEmpty(n.state.userInfo)&&n.getUserCard()},n.state={loading:!1,visible:!1,userInfo:null},n}return(0,O.default)(r,[{key:"getUserCard",value:function(){var n=this,a=this.props.item;this.setState({loading:!0}),y.Z.getUserCard({projectId:a.projectId}).then(function(o){o&&n.setState({userInfo:o.user,loading:!1})})}},{key:"getItems",value:function(n,a){var o=n.map(function(l){return l[a]});return o.join(" ; ")}},{key:"renderStatus",value:function(n){var a=n.userStatus,o=n.projectStatus,l=n.isProjectAdmin,d=n.isCreateUser;return a===m.Z.USER_STATUS.UNAUDITED?_l("\u5F85\u5BA1\u6838"):o===m.Z.PROJECT_STATUS_TYPES.FREE?null:l?d?_l("\u7BA1\u7406\u5458")+_l("(\u521B\u5EFA\u4EBA)"):_l("\u7BA1\u7406\u5458"):_l("\u666E\u901A\u6210\u5458")}},{key:"renderUserCard",value:function(){var n=this.state.userInfo;return t.createElement("div",{className:"mTop20 pTop20",style:{borderTop:"1px solid #EAEAEA"}},t.createElement("div",{className:"flexRow Font13 mBottom10"},t.createElement("div",{className:"Gray_75 mRight15"},_l("\u59D3\u540D")),t.createElement("div",{className:"Gray flex"},n.fullname)),t.createElement("div",{className:"flexRow Font13 mBottom10"},t.createElement("div",{className:"Gray_75 mRight15"},_l("\u7EC4\u7EC7")),t.createElement("div",{className:"Gray flex"},n.companyName)),t.createElement("div",{className:"flexRow Font13 mBottom10"},t.createElement("div",{className:"Gray_75 mRight15"},_l("\u90E8\u95E8")),t.createElement("div",{className:"Gray flex"},n.departmentInfos.length>0?this.getItems(n.departmentInfos,"departmentName"):_l("\u672A\u586B\u5199"))),t.createElement("div",{className:"flexRow Font13"},t.createElement("div",{className:"Gray_75 mRight15"},_l("\u804C\u4F4D")),t.createElement("div",{className:"Gray flex"},n.jobInfos.length>0?this.getItems(n.jobInfos,"jobName"):_l("\u672A\u586B\u5199"))))}},{key:"render",value:function(){var n=this,a=this.props,o=a.item,l=a.index,d=a.checkedProjectId,E=this.state,p=E.visible,T=E.loading;return t.createElement("div",{className:"projectWrapper WhiteBG pTop15 pBottom20 pLeft16 pRight16 mBottom10"},t.createElement("div",{className:"flexRow"},t.createElement("div",{className:"flex",onClick:function(){return o.userStatus===m.Z.USER_STATUS.UNAUDITED?function(){}:n.props.checkCurrentProject(o)}},t.createElement("div",{className:"Font18"},t.createElement(P.Z,{checked:d===o.projectId,disabled:o.userStatus===m.Z.USER_STATUS.UNAUDITED},o.companyName)),t.createElement("div",{className:"Font12 Gray_75 mTop15 mBottom16"},_l("\u7EC4\u7EC7\u95E8\u724C\u53F7 %0",o.projectCode)," ",_l("(\u53EF\u7528\u4E8E\u9080\u8BF7\u5176\u4ED6\u4EBA\u52A0\u5165\u8BE5\u7F51\u7EDC)")),o.userStatus!==m.Z.USER_STATUS.UNAUDITED&&t.createElement("div",null,t.createElement("span",{className:"Gray_9e"},m.Z.PROJECT_STATUS_TYPES_LABLE[o.projectStatus]),o.projectStatus===m.Z.PROJECT_STATUS_TYPES.PAID&&t.createElement("span",{className:"mLeft10",style:{color:"#47B14B"}},_l("%0 \u5230\u671F",G()(o.currentLicense.endDate).format("YYYY-MM-DD"))))),t.createElement("div",{className:"flexRow valignWrapper Gray_75 mLeft10",onClick:this.handleChangeVisible},t.createElement("div",null,this.renderStatus(o)),t.createElement(B.Z,{className:"Font20",icon:p?"expand_more":"navigate_next"}))),p&&(T?t.createElement(i(),{className:"mTop10",justify:"center",align:"center"},t.createElement(D(),{size:"small"})):this.renderUserCard()))}}]),r}(t.Component),V=function(g){(0,M.default)(r,g);function r(s){(0,I.default)(this,r);var n=(0,j.default)(this,(r.__proto__||C()(r)).call(this,s));n.checkCurrentProject=function(l){safeLocalStorageSetItem("currentProjectId",l.projectId),n.setState({checkedProjectId:l.projectId})},n.renderNoProject=function(){var l=n.state.checkedProjectId;return t.createElement(t.Fragment,null,t.createElement(Y,null,t.createElement("div",{className:"Gray Font17"},_l("\u60A8\u672A\u62E5\u6709\u4EFB\u4F55\u7EC4\u7EC7\uFF0C\u7533\u8BF7\u52A0\u5165\u7EC4\u7EC7")),t.createElement("div",{className:"flexRow mTop28"},t.createElement("button",{type:"button",className:"joinNetwork ThemeBGColor3 ThemeHoverBGColor2 mRight20",onClick:function(){return window.open("/enterpriseRegister?type=add","__blank")}},_l("\u52A0\u5165\u7EC4\u7EC7")))),t.createElement("div",{className:"externalEntry WhiteBG pTop20 pBottom20 pLeft16 pRight16 mBottom20 Font18",onClick:function(){return n.checkCurrentProject({projectId:"external"})}},t.createElement(P.Z,{checked:l==="external"},_l("\u5916\u90E8\u534F\u4F5C"))))};var a=(0,R.vo)(localStorage.getItem("currentProjectId")||(md.global.Account.projects[0]||{}).projectId),o=u().isEmpty(a)?{projectId:"external",companyName:_l("\u5916\u90E8\u534F\u4F5C")}:a;return n.state={loading:!0,projectList:[],checkedProjectId:o.projectId},n}return(0,O.default)(r,[{key:"componentDidMount",value:function(){var n=this;y.Z.getProjectList({pageIndex:1,pageSize:500}).then(function(a){n.setState({projectList:a.list,loading:!1})})}},{key:"render",value:function(){var n=this,a=this.state,o=a.loading,l=a.projectList,d=l===void 0?[]:l,E=a.checkedProjectId,p=(0,R.vo)(localStorage.getItem("currentProjectId")||(md.global.Account.projects[0]||{}).projectId),T=u().isEmpty(p)?{projectId:"external",companyName:_l("\u5916\u90E8\u534F\u4F5C")}:p;return t.createElement("div",{className:"h100",style:{background:"#f5f5f5",paddingTop:10,overflowY:"auto"}},o?t.createElement(i(),{justify:"center",align:"center",className:"h100"},t.createElement(D(),{size:"large"})):T&&!u().isEmpty(d)?t.createElement(t.Fragment,null,d.map(function(_,X){return t.createElement(J,{key:_.projectId,item:_,index:X,checkedProjectId:E,checkCurrentProject:n.checkCurrentProject})}),t.createElement("div",{className:"externalEntry WhiteBG pTop20 pBottom20 pLeft16 pRight16 mBottom20 Font18",onClick:function(){return n.checkCurrentProject({projectId:"external"})}},t.createElement(P.Z,{checked:E==="external"},_l("\u5916\u90E8\u534F\u4F5C"))),t.createElement(z,null)):this.renderNoProject(),!o&&t.createElement(W.Z,{className:"low",onClick:function(){history.back()}}))}}]),r}(t.Component);const H=V},86515:(x,f,e)=>{e.d(f,{Z:()=>v});var h=e(17563),c={};c.url=function(i){return location.pathname+"?"+h.stringify(i)},c.MENULEFT=[{title:_l("\u4E2A\u4EBA\u4FE1\u606F"),icon:"icon-portrait",typetag:["information"],component:function(){return Promise.all([e.e(6761),e.e(3740)]).then(e.bind(e,13740))}},{title:_l("\u6211\u7684\u7EC4\u7EC7"),icon:"icon-business",typetag:["enterprise","reportRelation"],component:function(){return e.e(2901).then(e.bind(e,42901))}},{title:_l("\u8D26\u6237\u4E0E\u9690\u79C1"),icon:"icon-person",typetag:["account","management"],component:function(){return e.e(5668).then(e.bind(e,95668))}},{title:_l("\u5B89\u5168\u8BBE\u7F6E"),icon:"icon-gpp_good",typetag:["securitySetting"],component:function(){return e.e(5739).then(e.bind(e,5739))}},{title:_l("\u504F\u597D\u8BBE\u7F6E"),icon:"icon-settings",typetag:["system"],component:function(){return e.e(35).then(e.bind(e,30035))}},{title:_l("\u4EA7\u54C1\u5BC6\u94A5"),icon:"icon-key1",typetag:["privatekey"],component:function(){return e.e(5123).then(e.bind(e,5123))}}],c.PROJECT_STATUS_TYPES_LABLE={0:_l("\u5F85\u5F00\u901A"),1:_l("\u8BD5\u7528\u4E2D"),2:_l("\u5F85\u5F00\u901A"),3:_l("\u4F7F\u7528\u4E2D"),4:_l("\u5F85\u7EED\u8D39")},c.PROJECT_STATUS_TYPES={FREE:0,TRIAL:1,TOPAID:2,PAID:3,REPAID:4},c.USER_STATUS={DEFAULT:0,NORMAL:1,REFUSED:2,UNAUDITED:3,REMOVED:4},c.guideType={accountMobilePhone:4,accountEmail:5,mdDaShi:6,createCompany:7,postFeed:8,postTopic:9,taskManagement:10,taskFolder:11,calendarOthers:12,calendarToApp:13,calendarRepeat:14,kcUpload:15,kcSharedFolder:16,showGuide:19,showGuideCourseList:20},c.settingOptions={openDeskNotice:2,openWeixinLogin:3,joinFriendMode:5,lang:6,isPrivateMobile:9,isPrivateEmail:10,isTwoauthentication:12,isOpenMessageSound:14,isOpenMessageTwinkle:15,allowMultipleDevicesUse:16,backHomepageWay:17,timeZone:18};const v=c}}]);
