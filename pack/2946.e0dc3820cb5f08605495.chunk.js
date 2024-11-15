"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[2946],{32946:(Fe,H,l)=>{l.r(H),l.d(H,{default:()=>Ue});var N=l(88106),_=l(85105),k=l.n(_),P=l(99663),R=l(22600),M=l(49135),U=l(93196),e=l(67294),D=l(64712),W=l(17915),q=l(70801),Le=l(10524),ee=l(31059),K=l(86735),te=l(71385),Q=l(31261),ae=l(30381),g=l.n(ae),ne=l(15577),X=l(5017),le=(0,K.Z)([`
  color: #333333;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
    .ant-checkbox-group-item {
      margin-top: 8px;
    }
    .ant-checkbox {
      input {
        display: none;
      }
    }
  }
  .exportLine {
    width: 100%;
    height: 1px;
    background-color: #eaeaea;
    margin: 20px 0;
  }
  .exportData {
    width: 203px;
    height: 36px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    box-sizing: border-box;
    color: #757575;
    font-size: 12px;
    margin-top: 10px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`],[`
  color: #333333;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
    .ant-checkbox-group-item {
      margin-top: 8px;
    }
    .ant-checkbox {
      input {
        display: none;
      }
    }
  }
  .exportLine {
    width: 100%;
    height: 1px;
    background-color: #eaeaea;
    margin: 20px 0;
  }
  .exportData {
    width: 203px;
    height: 36px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    box-sizing: border-box;
    color: #757575;
    font-size: 12px;
    margin-top: 10px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`]),re=X.ZP.div(le),oe=[{label:_l("\u7528\u6237\u5217\u8868"),value:"userList"},{label:_l("\u7FA4\u7EC4\u5217\u8868"),value:"groupList"},{label:_l("\u4EFB\u52A1\u5217\u8868"),value:"task"}],se=function(T){(0,U.default)(s,T);function s(c){(0,P.default)(this,s);var t=(0,M.default)(this,(s.__proto__||k()(s)).call(this,c));return t.state={datePickerVisible:!1,startDate:g()(new Date).format("YYYY-MM-DD"),endDate:g()(new Date).format("YYYY-MM-DD"),typeList:[]},t}return(0,R.default)(s,[{key:"onChange",value:function(t){this.setState({typeList:t})}},{key:"exportList",value:function(){var t=this.state,a=t.typeList,n=t.startDate;a.length?n?($("#__VIEWSTATE").remove(),window.isMDClient||$("#outPutFormBox").attr("target","_blank"),$("#outPutFormBox").submit()):alert(_l("\u8BF7\u9009\u62E9\u65F6\u95F4\u6BB5"),3):alert(_l("\u8BF7\u9009\u62E9\u8981\u5BFC\u51FA\u7684\u5217\u8868"),3)}},{key:"render",value:function(){var t=this,a=this.state,n=a.datePickerVisible,i=a.startDate,o=a.endDate,d=a.typeList,r="";return d.forEach(function(m){r+=m+"|"}),e.createElement(q.Z,{visible:this.props.visible,title:e.createElement("span",{className:"Bold"},_l("\u5BFC\u51FA\u6570\u636E")),cancelText:_l("\u53D6\u6D88"),okText:_l("\u5BFC\u51FA"),width:"480",overlayClosable:!1,onCancel:function(){t.props.handleChangeVisible("exportVisible",!1)},onOk:function(){return t.exportList()}},e.createElement(re,null,e.createElement("div",{className:"bold mTop8 mBottom8"},_l("\u5BFC\u51FA\u7684\u7C7B\u522B")),e.createElement(ee.default.Group,{options:oe,onChange:function(u){return t.onChange(u)}}),e.createElement("div",{className:"exportLine"}),e.createElement("div",{className:"bold"},_l("\u5BFC\u51FA\u7684\u65F6\u95F4\u8303\u56F4")),e.createElement(Q.Z,{popupVisible:n,onPopupVisibleChange:function(u){return t.setState({datePickerVisible:u})},action:["click"],popupAlign:{points:["tl","bl"]},popup:e.createElement(te.Z,{updateData:function(u){t.setState({datePickerVisible:!1,startDate:u.startDate,endDate:u.endDate})}})},e.createElement("div",{className:"exportData mBottom8"},i&&o?_l("%0 \u81F3 %1",i,o):"")),e.createElement("form",{id:"outPutFormBox",method:"get",action:(0,ne.Z6)(md.global.Config.AjaxApiUrl+"download/exportProjectEntityToExcel")},e.createElement("input",{type:"hidden",name:"list",value:r}),e.createElement("input",{type:"hidden",name:"startDate",value:i}),e.createElement("input",{type:"hidden",name:"endDate",value:o}),e.createElement("input",{type:"hidden",name:"projectId",value:this.props.projectId}))))}}]),s}(e.Component),A=l(20845),ie=l(63239),ce=l.n(ie),je=l(67272),de=l(51024),me=l(93967),w=l.n(me),ue=l(341),pe=l(75809),we=l(16461),he=(0,K.Z)([`
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
  .toolItem {
    width: 100%;
    padding: 23px 0;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    &:nth-child(3) {
      border-bottom: none;
    }
    .toolItemLabel {
      width: 155px;
      font-size: 13px;
      color: #333333;
    }
    .toolItemRight {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      #txtNotice {
        width: 50%;
      }
      .mesDescribe {
        display: flex;
        align-items: center;
        font-size: 13px;
        .color_g {
          color: #757575;
        }
      }
      .ming.Checkbox {
        margin-top: 10px;
        display: flex;
        align-items: center;
        color: #333333;
        font-size: 13px;
      }
    }
  }
  .saveBtn {
    padding-left: 155px;
    button {
      width: 90px;
      height: 36px;
      border-radius: 18px;
    }
  }
`],[`
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
  .toolItem {
    width: 100%;
    padding: 23px 0;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    &:nth-child(3) {
      border-bottom: none;
    }
    .toolItemLabel {
      width: 155px;
      font-size: 13px;
      color: #333333;
    }
    .toolItemRight {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      #txtNotice {
        width: 50%;
      }
      .mesDescribe {
        display: flex;
        align-items: center;
        font-size: 13px;
        .color_g {
          color: #757575;
        }
      }
      .ming.Checkbox {
        margin-top: 10px;
        display: flex;
        align-items: center;
        color: #333333;
        font-size: 13px;
      }
    }
  }
  .saveBtn {
    padding-left: 155px;
    button {
      width: 90px;
      height: 36px;
      border-radius: 18px;
    }
  }
`]),fe=de.default.TextArea,ge=X.ZP.div(he),ve=function(T){(0,U.default)(s,T);function s(c){(0,P.default)(this,s);var t=(0,M.default)(this,(s.__proto__||k()(s)).call(this,c));return t.getAnnounce=function(){D.Z.AdminController.announcement({projectId:D.Z.projectId}).then(function(a){t.setState({projectBalance:a.projectBalance,projectEffectUserCount:a.projectEffectUserCount,projectAdminUserCount:a.projectAdminUserCount,projectDepartmentChargeUserCount:a.projectDepartmentChargeUserCount})})},t.uploadFiled=function(){var a=t;a.uploadAttachmentObj=$("#hidUploadAttachment").uploadAttachment({checkDocVersionUrl:"",pluploadID:"#uploadAttachment",folder:"Accessories",showDownload:!1,checkProjectLimitFileSizeUrl:"",bucketType:1,callback:function(i,o){a.setState({attachments:i})}})},t.handleTextChange=function(a){t.setState({content:a.target.value})},t.handleRemove=function(a,n,i){t.setState((0,N.default)({},a,t.state[a].filter(function(o){return o[n]!==i})))},t.selectUser=function(){var a=t;(0,pe.Z)({fromAdmin:!0,SelectUserSettings:{projectId:D.Z.projectId,filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,dataRange:2,callback:function(i){a.setState({users:i})}}})},t.handleCheck=function(a,n){t.setState((0,N.default)({},n,!a))},t.handleSubmit=function(){var a=t.state,n=a.content,i=a.sendEmail,o=a.sendMessage,d=a.sendMobileMessage,r=a.allProject,m=a.allAdmin,u=a.allDepartmentChargeUser,C=a.attachments,E=a.groups,x=a.users;if(!n)return alert(_l("\u8BF7\u8F93\u5165\u5185\u5BB9"),3),!1;if(n.length>500)return alert(_l("\u60A8\u8F93\u5165\u7684\u901A\u544A\u5185\u5BB9\u8FC7\u957F\uFF0C\u4E0D\u80FD\u8D85\u8FC7500\u5B57"),3),!1;if(!i&&!o&&!d)return alert(_l("\u8BF7\u9009\u62E9\u53D1\u9001\u65B9\u5F0F"),3),!1;if(d&&n.length>60)return alert(_l("\u77ED\u4FE1\u5185\u5BB9\u7684\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC760\u4E2A\u5B57\u7B26"),3),!1;if(!r&&!m&&!u&&!E.length&&!x.length)return alert(_l("\u8BF7\u9009\u62E9\u8981\u53D1\u9001\u7684\u4EBA"),3),!1;var I=[];E.length&&(I=E.map(function(h){return h.groupId}));var y=[];x.length&&(y=x.map(function(h){return h.accountId}));var p="";C.length>0&&(p=ce()(C)),alert(_l("\u6B63\u5728\u53D1\u9001...")),ue.Z.sendNotice({projectId:D.Z.projectId,content:n,attachments:p,groupIds:I,accountIds:y,allAdmin:m,allProject:r,allDepartmentChargeUser:u,sendEmail:i,sendMessage:o,sendMobileMessage:d}).then(function(h){if(h.actionResult==1){var G=h.failCount;if(G===0)alert(_l("\u53D1\u5E03\u6210\u529F"));else if(G){var Ae='<div className="Font12 Gray_c">'+_l("%0\u4EBA\u53D1\u9001\u5931\u8D25",G)+"</div>";alert(Ae,3)}t.setState({content:"",attachments:[],sendEmail:!1,sendMessage:!1,sendMobileMessage:!1,allAdmin:!1,allProject:!1,allDepartmentChargeUser:!1,groups:[],users:[]}),t.uploadAttachmentObj.clearAttachment()}else h.actionResult==2?alert(_l("\u4F60\u53D1\u9001\u7684\u4FE1\u606F\u8FC7\u957F"),3):h.actionResult==3?alert(_l("\u4F59\u989D\u4E0D\u8DB3,\u8BF7\u524D\u53BB\u5145\u503C"),3):alert(_l("\u53D1\u9001\u5931\u8D25"),2)})},t.state={announceVisible:!1,content:"",projectBalance:0,projectEffectUserCount:0,projectAdminUserCount:0,projectDepartmentChargeUserCount:0,sendEmail:!1,sendMessage:!1,sendMobileMessage:!1,allProject:!1,allAdmin:!1,allDepartmentChargeUser:!1,users:[],groups:[],attachments:[]},t}return(0,R.default)(s,[{key:"componentDidMount",value:function(){this.getAnnounce(),this.uploadFiled()}},{key:"render",value:function(){var t=this,a=this.state,n=a.content,i=a.sendEmail,o=a.sendMessage,d=a.allAdmin,r=a.allProject,m=a.allDepartmentChargeUser,u=a.groups,C=u===void 0?[]:u,E=a.users,x=a.projectEffectUserCount,I=a.projectAdminUserCount,y=a.projectDepartmentChargeUserCount;return e.createElement(e.Fragment,null,e.createElement("div",{className:"orgManagementHeader"},e.createElement("i",{className:"icon-backspace Hand mRight10 TxtMiddle Font22 ThemeHoverColor3",onClick:this.props.onClose}),_l("\u7FA4\u53D1\u901A\u544A"),e.createElement("div",{className:"flex"})),e.createElement(ge,{className:"orgManagementContent"},e.createElement("div",{className:"toolItem"},e.createElement("div",{className:"toolItemLabel"},_l("\u901A\u544A\u5185\u5BB9")),e.createElement("div",{className:"toolItemRight"},e.createElement(fe,{id:"txtNotice",value:n,onChange:this.handleTextChange,autoSize:{minRows:5}}),e.createElement("div",{className:"ThemeHoverColor3 pointer mTop5 mBottom10 Font13 Gray_75"},e.createElement("span",{className:"InlineBlock ThemeColor3 Hand adminHoverColor",id:"uploadAttachment"},e.createElement("i",{className:"icon-attachment"}),_l("\u6DFB\u52A0\u9644\u4EF6")),e.createElement("input",{type:"hidden",id:"hidUploadAttachment"})))),e.createElement("div",{className:"toolItem"},e.createElement("div",{className:"toolItemLabel"},_l("\u7FA4\u53D1\u65B9\u5F0F")),e.createElement("div",{className:"toolItemRight"},e.createElement(A.Z,{checked:i,onClick:function(h){return t.handleCheck(h,"sendEmail")}},"Email"),e.createElement(A.Z,{checked:o,onClick:function(h){return t.handleCheck(h,"sendMessage")}},_l("\u79C1\u4FE1")))),e.createElement("div",{className:"toolItem"},e.createElement("div",{className:"toolItemLabel"},_l("\u53D1\u9001\u8303\u56F4")),e.createElement("div",{className:"toolItemRight"},e.createElement(A.Z,{checked:r,onClick:function(h){return t.handleCheck(h,"allProject")}},_l("\u5168\u7EC4\u7EC7\u7528\u6237 %0 \u4EBA",x)),e.createElement(A.Z,{checked:d,onClick:function(h){return t.handleCheck(h,"allAdmin")}},_l("\u6240\u6709\u7BA1\u7406\u5458 %0 \u4EBA",I)),e.createElement(A.Z,{checked:m,onClick:function(h){return t.handleCheck(h,"allDepartmentChargeUser")}},_l("\u6240\u6709\u90E8\u95E8\u8D1F\u8D23\u4EBA %0 \u4EBA",y)),e.createElement("div",{className:w()("FlexRow mLeft20",{hidden:!C.length})},C.map(function(p){return e.createElement("span",{className:"announceLabel",key:p.groupId},p.avatar&&e.createElement("img",{src:p.avatar,className:"circle avatar"}),e.createElement("span",{className:"announceLabelName"},p.name),e.createElement("span",{className:"mLeft5 icon-closeelement-bg-circle Font14 removeBtn",onClick:function(){return t.handleRemove("groups","groupId",p.groupId)}}))})),e.createElement("div",{className:"mLeft20 mTop10"},e.createElement("button",{type:"button",className:"ming Button Button--link ThemeColor3 adminHoverColor",onClick:this.selectUser},_l("\u9009\u62E9\u5177\u4F53\u6210\u5458"))),e.createElement("div",{className:w()("FlexRow mLeft20",{hidden:!E.length})},E.map(function(p){return e.createElement("span",{className:"announceLabel",key:p.accountId},p.avatar&&e.createElement("img",{src:p.avatar,className:"circle avatar"}),e.createElement("span",{className:"announceLabelName"},p.fullname),e.createElement("span",{className:"mLeft5 icon-closeelement-bg-circle Font14 removeBtn",onClick:function(){return t.handleRemove("users","accountId",p.accountId)}}))})))),e.createElement("div",{className:"mTop32 saveBtn"},e.createElement("button",{className:"ming Button Button--primary",onClick:this.handleSubmit},_l("\u53D1\u9001")))))}}]),s}(e.Component),V=l(88239),Ee=l(54208),F=l(22507),Ce=l(33867),Te=l(46593),xe=l.n(Te),Ne=l(45697),L=l.n(Ne);const Y={getUserReport:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Statistic","GetUserReport",s,c)},getPostReportByType:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Statistic","GetPostReportByType",s,c)},getGroupReport:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Statistic","GetGroupReport",s,c)}};var De=l(10929),ye=l(96486),j=l.n(ye),b,Z,J,B={NORMAL:20,ALL:100},v={POST:1,DOC:2,QA:3,IMAGE:4,USER:5,GROUP:6},f={CREATETIME:0,POSTCOUNT:1,COMMENTCOUNT:2,DOCCOUNT:3,QACOUNT:4,VIEWCOUNT:5,USERCOUNT:6,PICCOUNT:7,LINKCOUNT:8,GROUPCOUNT:9,LOGINTIME:10,TASKSCOUNT:11,ACTIVEINDEX:12,SMSCOUNT:13,TRIALCOUNT:14,SCORECOUNT:15,VOTECOUNT:16,CREATETASKCOUNT:17,COMPLETETASKCOUNT:18},z=(b={},(0,N.default)(b,v.USER,[{text:_l("\u59D3\u540D")},{text:_l("\u90E8\u95E8"),width:"10%"},{sortField:f.POSTCOUNT,title:_l("\u6309\u53D1\u8868\u52A8\u6001\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u5E03\u52A8\u6001\u6570"),width:"10%"},{sortField:f.DOCCOUNT,title:_l("\u6309\u53D1\u8868\u6587\u6863\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u5E03\u6587\u6863\u6570"),width:"10%"},{sortField:f.QACOUNT,title:_l("\u6309\u53D1\u8868\u95EE\u7B54\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u8868\u95EE\u7B54\u6570"),width:"10%"},{sortField:f.VOTECOUNT,title:_l("\u6309\u53D1\u8D77\u6295\u7968\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u8D77\u6295\u7968\u6570"),width:"10%"},{sortField:f.COMMENTCOUNT,title:_l("\u6309\u8BC4\u8BBA\u56DE\u590D\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u8BC4\u8BBA\u56DE\u590D\u6570"),width:"10%"},{sortField:f.COMPLETETASKCOUNT,title:_l("\u6309\u5B8C\u6210\u4EFB\u52A1\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u5B8C\u6210\u4EFB\u52A1"),width:"10%"},{sortField:f.CREATETASKCOUNT,title:_l("\u6309\u521B\u5EFA\u4EFB\u52A1\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u521B\u5EFA\u4EFB\u52A1"),width:"10%"}]),(0,N.default)(b,v.POST,[{text:_l("\u53D1\u8868\u4EBA"),width:"15%"},{text:_l("\u90E8\u95E8"),width:"20%"},{text:_l("\u5185\u5BB9"),width:"20%"},{sortField:f.COMMENTCOUNT,title:_l("\u6309\u8BC4\u8BBA\u56DE\u590D\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u8BC4\u8BBA\u56DE\u590D\u6B21\u6570"),width:"20%"}]),(0,N.default)(b,v.DOC,[{text:_l("\u53D1\u8868\u4EBA"),width:"15%"},{text:_l("\u90E8\u95E8"),width:"20%"},{text:_l("\u6587\u6863\u6807\u9898")},{sortField:f.VIEWCOUNT,title:_l("\u6309\u67E5\u770B\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u67E5\u770B\u6B21\u6570"),width:"10%"},{sortField:f.COMMENTCOUNT,title:_l("\u6309\u56DE\u590D\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u56DE\u590D\u6B21\u6570"),width:"10%"}]),(0,N.default)(b,v.QA,[{text:_l("\u53D1\u8868\u4EBA"),width:"15%"},{text:_l("\u90E8\u95E8"),width:"20%"},{text:_l("\u95EE\u7B54\u6807\u9898")},{sortField:f.VIEWCOUNT,title:_l("\u6309\u67E5\u770B\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u67E5\u770B\u6B21\u6570"),width:"10%"},{sortField:f.COMMENTCOUNT,title:_l("\u6309\u56DE\u590D\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u56DE\u590D\u6B21\u6570"),width:"10%"}]),(0,N.default)(b,v.IMAGE,[{text:_l("\u53D1\u8868\u4EBA"),width:"15%"},{text:_l("\u90E8\u95E8"),width:"20%"},{text:_l("\u56FE\u7247\u6807\u9898")},{sortField:f.VIEWCOUNT,title:_l("\u6309\u67E5\u770B\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u67E5\u770B\u6B21\u6570"),width:"10%"},{sortField:f.COMMENTCOUNT,title:_l("\u6309\u56DE\u590D\u6B21\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u56DE\u590D\u6B21\u6570"),width:"10%"}]),(0,N.default)(b,v.GROUP,[{text:_l("\u7FA4\u7EC4\u540D\u79F0")},{text:_l("\u521B\u5EFA\u4EBA"),width:"15%"},{sortField:f.USERCOUNT,title:_l("\u6309\u7D2F\u8BA1\u6210\u5458\u6570\u964D\u5E8F\u6392\u5217"),text:_l("\u7D2F\u8BA1\u6210\u5458\u6570"),width:"15%"},{sortField:f.POSTCOUNT,title:_l("\u6309\u53D1\u8868\u52A8\u6001\u66F4\u65B0\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u5E03\u52A8\u6001\u66F4\u65B0\u6570\u91CF"),width:"15%"},{sortField:f.DOCCOUNT,title:_l("\u6309\u53D1\u8868\u6587\u6863\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u8868\u6587\u6863\u6570\u91CF"),width:"15%"},{sortField:f.QACOUNT,title:_l("\u6309\u53D1\u8868\u95EE\u7B54\u6570\u91CF\u964D\u5E8F\u6392\u5217"),text:_l("\u53D1\u8868\u95EE\u7B54\u6570\u91CF"),width:"15%"}]),b),O={ASC:1,DESC:0},S=(J=Z=function(T){(0,U.default)(s,T);function s(){(0,P.default)(this,s);var c=(0,M.default)(this,(s.__proto__||k()(s)).call(this));return c.state={sortField:f.CREATETIME,sortType:O.DESC,pageIndex:1,pageSize:B.NORMAL,isLoading:!1,allCount:null,list:null},c}return(0,R.default)(s,[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"componentWillReceiveProps",value:function(t){(this.props.reportType!==t.reportType||this.props.startDate!==t.startDate||this.props.endDate!==t.endDate)&&(this.abortRequest(),this.setState({isLoading:!0,pageIndex:1,pageSize:B.NORMAL,sortField:f.CREATETIME,sortType:O.DESC},this.fetchData.bind(this)))}},{key:"componentWillUpdate",value:function(t,a){var n=this.state,i=n.sortField,o=n.sortType,d=n.pageIndex,r=n.pageSize;(i!==a.sortField||o!==a.sortType||d!==a.pageIndex||r!==a.pageSize)&&(this.abortRequest(),this.fetchData(a))}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"fetchData",value:function(t){var a=this,n=this.props,i=n.startDate,o=n.endDate,d=n.projectId,r=n.reportType,m=t||this.state,u=m.pageIndex,C=m.pageSize,E=m.sortField,x=m.sortType,I={startDate:i,endDate:o,pageIndex:u,pageSize:C,sortField:E,sortType:x,projectId:d};this.setState({isLoading:!0});var y=void 0;switch(r){case v.USER:y=Y.getUserReport;break;case v.GROUP:y=Y.getGroupReport;break;case v.QA:case v.POST:case v.DOC:case v.IMAGE:y=Y.getPostReportByType,I.postReportType=r;break}this.promise=y(I),this.promise.then(function(p){if(p)a.setState({list:p.list,allCount:p.allCount,isLoading:!1});else return xe().reject()}).catch(function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=p.errorCode;h!==1&&(alert(_l("\u83B7\u53D6\u5217\u8868\u5931\u8D25"),2),a.setState({isLoading:!1}))})}},{key:"renderCol",value:function(){var t=this.props.reportType,a=z[t];return e.createElement("colgroup",null,e.createElement("col",{width:"5%"}),j().map(a,function(n,i){return e.createElement("col",{width:n.width,key:i})}))}},{key:"renderThead",value:function(){var t=this,a=this.props.reportType,n=this.state,i=n.sortType,o=n.sortField,d=z[a];return e.createElement("tr",null,e.createElement("th",{width:"5%"}),j().map(d,function(r,m){var u=r.width?{width:r.width}:{},C=r.sortField===o&&i===O.DESC?"arrow-up":"arrow-down";if(r.sortField){var E=function(I){r.sortField===o?t.setState({sortType:i===O.DESC?O.ASC:O.DESC}):t.setState({sortType:O.DESC}),t.setState({sortField:r.sortField})};return e.createElement("th",{className:"TxtCenter",key:m},e.createElement("span",{title:r.title,className:"Hand",onClick:E},r.text,e.createElement(Ce.Z,{icon:C,className:"mLeft5 sortIcon"})))}else return e.createElement("th",(0,V.default)({},u,{key:m}),r.text)}))}},{key:"renderTds",value:function(t,a){var n=this.props.reportType,i=t.user;i=i===void 0?{}:i;var o=i.accountId,d=i.fullname,r=i.department,m=i.userId;if(n===v.USER)return e.createElement(e.Fragment,null,e.createElement("td",{className:"pLeft10"},a+1),e.createElement("td",{className:"overflow_ellipsis wMax100"},e.createElement(F.Z,{user:{accountId:o,userName:d}})),e.createElement("td",null,e.createElement("div",null,r)),e.createElement("td",{className:"TxtCenter"},t.postCount),e.createElement("td",{className:"TxtCenter"},t.docCount),e.createElement("td",{className:"TxtCenter"},t.qaCount),e.createElement("td",{className:"TxtCenter"},t.voteCount),e.createElement("td",{className:"TxtCenter"},t.commentCount),e.createElement("td",{className:"TxtCenter"},t.completeTaskCount),e.createElement("td",{className:"TxtCenter"},t.createTaskCount));if(n===v.POST)return e.createElement(e.Fragment,null,e.createElement("td",{className:"pLeft10"},a+1),e.createElement("td",{className:"overflow_ellipsis wMax100"},e.createElement(F.Z,{user:{accountId:o,userName:d}})),e.createElement("td",null,r),e.createElement("td",{className:"overflow_ellipsis wMax100"},e.createElement("a",{href:"/feeddetail?itemID="+t.postId,target:"_blank",className:"TxtMiddle"},t.message)),e.createElement("td",{className:"TxtCenter"},t.numComment));if(n===v.GROUP){var u=t.createUser||{};return e.createElement(e.Fragment,null,e.createElement("td",{className:"pLeft10"},a+1),e.createElement("td",{className:"overflow_ellipsis wMax100"},e.createElement("a",{href:"/group/groupValidate?gID="+t.groupId,target:"_blank"},t.groupName)),e.createElement("td",{className:"overflow_ellipsis wMax100"},e.createElement(F.Z,{user:{accountId:u.accountId,userName:u.fullname}})),e.createElement("td",{className:"TxtCenter"},t.numFollower),e.createElement("td",{className:"TxtCenter"},t.postCount),e.createElement("td",{className:"TxtCenter"},t.docCount),e.createElement("td",{className:"TxtCenter"},t.qaCount))}else return e.createElement(e.Fragment,null,e.createElement("td",{className:"pLeft10"},a+1),e.createElement("td",null,m?e.createElement(F.Z,{user:{accountId:o,userName:d}}):d),e.createElement("td",null,r),e.createElement("td",null,e.createElement("a",{href:"/feeddetail?itemID="+t.postId,target:"_blank",className:"overflow_ellipsis TxtMiddle wMax100"},t.message)),e.createElement("td",{className:"TxtCenter"},t.numView),e.createElement("td",{className:"TxtCenter"},t.numComment))}},{key:"render",value:function(){var t=this,a=this.state,n=a.isLoading,i=a.list,o=a.allCount,d=a.pageSize,r=a.pageIndex,m=this.props.reportType,u=z[m];return e.createElement("div",{className:"statTable"},e.createElement("table",{className:"ThemeBorderColor4 w100",cellSpacing:"0"},this.renderCol(),e.createElement("thead",null,this.renderThead())),e.createElement("div",{className:"statTableBody"},n?e.createElement(Ee.Z,{className:"mTop10 mBottom10"}):e.createElement("table",null,this.renderCol(),e.createElement("tbody",null,o>0?j().map(i,function(C,E){return e.createElement("tr",{className:"LineHeight25",key:E},t.renderTds(C,E))}):e.createElement("tr",{className:"TxtCenter"},e.createElement("td",{colSpan:u.length+1,className:"pTop30"},e.createElement("span",null,_l("\u6682\u65E0\u6570\u636E"))))))),!n&&o>B.NORMAL?e.createElement(De.Z,{total:o,pageSize:d,pageIndex:r,onChange:function(E){return t.setState({pageIndex:E},t.fetchData)}}):null)}}]),s}(e.Component),Z.REPOREPORT_TYPES=v,Z.propTypes={reportType:L().oneOf(j().values(v)),startDate:L().string,endDate:L().string,projectId:L().string.isRequired},J),be=l(81274),Ie=l(12424),Oe=l(31715),Se=[{id:"today",text:_l("\u4ECA\u5929")},{id:"currentWeek",text:_l("\u6700\u8FD1\u4E03\u5929")},{id:"currentMonth",text:_l("\u672C\u6708")},{id:"prevMonth",text:_l("\u4E0A\u6708")},{id:"currentYear",text:_l("\u4ECA\u5E74")},{id:"custom",text:_l("\u81EA\u5B9A\u4E49\u65E5\u671F")}];function ke(T){var s=T.updateData,c=(0,e.useRef)(null),t=function(d){return d.format("YYYY-MM-DD")},a=t(g()()),n=function(d){var r=t(g()()),m=g()().startOf("M");switch(d){case"today":return{startDate:r,endDate:r};case"currentWeek":return{startDate:t(g()().subtract(7,"d")),endDate:r};case"currentMonth":return{startDate:t(m),endDate:r};case"prevMonth":return{startDate:t(g()(m).subtract(1,"M")),endDate:t(g()(m).subtract(1,"day"))};case"currentYear":return{startDate:t(g()().startOf("year")),endDate:r}}},i=function(d){var r=n(d);s(r)};return e.createElement(Oe.aX,{ref:c},Se.map(function(o){var d=o.id,r=o.text;return d==="custom"?e.createElement(be.Z.RangePicker,{offset:{left:-533,top:-220},popupParentNode:function(){return c.current},max:g()(a),min:g()(a).subtract(1,"year"),onOk:function(u){var C=(0,Ie.Z)(u,2),E=C[0],x=C[1];s({startDate:t(E),endDate:t(x)})},onClear:function(){var u=n("currentMonth");s(u)},onSelect:function(u){u&&u[1]&&(a=t(g()(u[1])))}},e.createElement("li",null,r)):e.createElement("li",{key:d,onClick:function(){return i(d)}},r)}))}var Pe=[{routeType:"userstat",tabName:_l("\u7528\u6237\u6392\u884C"),pageTitle:_l("\u7528\u6237\u6392\u884C")},{routeType:"feedstat",tabName:_l("\u52A8\u6001\u66F4\u65B0\u7EDF\u8BA1"),pageTitle:_l("\u52A8\u6001\u66F4\u65B0\u7EDF\u8BA1")},{routeType:"docstat",tabName:_l("\u6587\u6863\u7EDF\u8BA1"),pageTitle:_l("\u6587\u6863\u7EDF\u8BA1")},{routeType:"picstat",tabName:_l("\u56FE\u7247\u7EDF\u8BA1"),pageTitle:_l("\u56FE\u7247\u7EDF\u8BA1")},{routeType:"groupstat",tabName:_l("\u7FA4\u7EC4\u7EDF\u8BA1"),pageTitle:_l("\u7FA4\u7EC4\u7EDF\u8BA1")}],Re=function(T){(0,U.default)(s,T);function s(){(0,P.default)(this,s);var c=(0,M.default)(this,(s.__proto__||k()(s)).call(this));return c.state=(0,V.default)({},c.formatDate(),{datePickerVisible:!1,activeTab:"userstat"}),c}return(0,R.default)(s,[{key:"formatDate",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g()().startOf("month"),a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g()();return{startDate:g()(t).format("YYYY-MM-DD"),endDate:g()(a.endOf("d")).format("YYYY-MM-DD")}}},{key:"renderTimePicker",value:function(){var t=this,a=this.state,n=a.datePickerVisible,i=a.startDate,o=a.endDate;return e.createElement(Q.Z,{popupVisible:n,onPopupVisibleChange:function(r){return t.setState({datePickerVisible:r})},action:["click"],popupAlign:{points:["tl","bl"]},popup:e.createElement(ke,{updateData:function(r){t.setState({datePickerVisible:!1,startDate:r.startDate,endDate:r.endDate})}})},e.createElement("div",{className:"selectDateInput"},i&&o?_l("%0 \u81F3 %1",i,o):""))}},{key:"renderContent",value:function(){var t=this.state,a=t.startDate,n=t.endDate,i=t.activeTab,o={startDate:g()(a).format("YYYY-MM-DD"),endDate:g()(n).format("YYYY-MM-DD HH:mm:ss")},d=function(){switch(i){case"userstat":return S.REPOREPORT_TYPES.USER;case"feedstat":return S.REPOREPORT_TYPES.POST;case"picstat":return S.REPOREPORT_TYPES.IMAGE;case"groupstat":return S.REPOREPORT_TYPES.GROUP;case"docstat":return S.REPOREPORT_TYPES.DOC}}(),r=D.Z.projectId;return e.createElement("div",{className:"statTableContent"},e.createElement(S,(0,V.default)({},o,{reportType:d,projectId:r})))}},{key:"handleChangeTab",value:function(t){this.setState({activeTab:t.routeType})}},{key:"render",value:function(){var t=this,a=this.state.activeTab;return e.createElement(e.Fragment,null,e.createElement("div",{className:"orgManagementHeader"},e.createElement("i",{className:"icon-backspace Hand mRight10 TxtMiddle Font22 ThemeHoverColor3",onClick:this.props.onClose}),_l("\u4F7F\u7528\u7EDF\u8BA1"),e.createElement("div",{className:"flex"})),e.createElement("div",{className:"orgManagementContent statContent"},e.createElement("div",{className:"statHeader"},e.createElement("ul",{className:"flexRow"},Pe.map(function(n){return e.createElement("li",{key:n.routeType,className:w()("statHeaderItem",a===n.routeType?"active":""),onClick:t.handleChangeTab.bind(t,n)},n.tabName)})),this.renderTimePicker()),this.renderContent()))}}]),s}(e.Component),Me=[{label:_l("\u7FA4\u53D1\u901A\u544A"),clickValue:_l("\u53D1\u901A\u544A"),key:"announce",click:"toggleComp",desc:_l("\u53EF\u4EE5\u5728\u7EC4\u7EC7\u5185\u7FA4\u53D1\u901A\u544A\uFF0C\u652F\u6301\u9644\u4EF6\u3001\u79C1\u4FE1\u3001Email")},{label:_l("\u4F7F\u7528\u7EDF\u8BA1"),clickValue:_l("\u67E5\u770B"),key:"stat",click:"toggleComp",desc:_l("\u7528\u6237\u6392\u884C\u3001\u52A8\u6001\u66F4\u65B0\u3001\u6587\u6863\u3001\u56FE\u7247\u7B49\u7EDF\u8BA1\u4FE1\u606F")},{label:_l("\u6570\u636E\u5BFC\u51FA"),clickValue:_l("\u5BFC\u51FA"),key:"exportVisible",click:"handleChangeVisible",desc:_l("\u53EF\u4EE5\u5BFC\u51FA\u7528\u6237\u3001\u7FA4\u7EC4\u3001\u4EFB\u52A1\u5217\u8868")}],Ue=function(T){(0,U.default)(s,T);function s(c){(0,P.default)(this,s);var t=(0,M.default)(this,(s.__proto__||k()(s)).call(this,c));return t.toggleComp=function(a){if(D.Z.project.licenseType===0){W.Z.freeUpdateDialog();return}t.setState({level:a})},t.handleChangeVisible=function(a,n){if(D.Z.project.licenseType===0){W.Z.freeUpdateDialog();return}t.setState((0,N.default)({},a,n))},D.Z.setPageTitle(_l("\u5176\u4ED6")),t.state={level:"index",exportVisible:!1},t}return(0,R.default)(s,[{key:"render",value:function(){var t=this,a=this.state,n=a.level,i=a.exportVisible;return e.createElement("div",{className:"orgManagementWrap adminToolsBox"},n==="announce"?e.createElement(ve,{onClose:function(){return t.setState({level:"index"})}}):n==="stat"?e.createElement(Re,{onClose:function(){return t.setState({level:"index"})}}):e.createElement(e.Fragment,null,e.createElement("div",{className:"orgManagementHeader"},_l("\u5176\u4ED6")),e.createElement("div",{className:"orgManagementContent pTop0"},Me.map(function(o){return e.createElement("div",{className:"toolItem"},e.createElement("div",{className:"toolItemLabel"},o.label),e.createElement("div",{className:"toolItemRight"},e.createElement("div",null,e.createElement("button",{type:"button",className:"ming Button Button--link ThemeColor3 adminHoverColor",onClick:function(){return t[o.click](o.key,!0)}},o.clickValue)),e.createElement("div",{className:"toolItemDescribe mLeft5"},o.desc)))}))),i&&e.createElement(se,{projectId:D.Z.projectId,visible:i,handleChangeVisible:this.handleChangeVisible}))}}]),s}(e.Component)}}]);
