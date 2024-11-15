"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[2086],{32086:(ae,S,r)=>{r.r(S),r.d(S,{default:()=>te});var w=r(26581),I=r(33867),z=r(85105),k=r.n(z),L=r(99663),W=r(22600),A=r(49135),T=r(93196),t=r(67294),H=r(36070),$=r(98109),j=r(88239),R=r(6100),D=r(86735),re=r(34279),Z=r(64749),P=r(49365),B=r(63025),F=r(95544),p=r(54429),E=r(15577),b=r(44897),O=r(93967),y=r.n(O),M=r(5017),G=r(96486),Y=r.n(G),X=(0,D.Z)([`
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  .byAppHeader {
    display: flex;
    justify-content: space-between;
    .tabsWrap {
      width: 190px;
      height: 36px;
      line-height: 36px;
      margin-left: 24px;
      background-color: #f5f5f5;
      border-radius: 3px;
      .tabItem {
        width: 92px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        margin: 2px;
        font-size: 14px;
        border-radius: 3px;
      }
      .currentTab {
        color: #2196f3;
        background-color: #fff;
      }
    }
    .searchWrap {
      padding-right: 24px;
      .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        height: 36px;
        border-radius: 3px;
        .ant-select-selection-item {
          line-height: 34px;
        }
      }
      .ant-select-arrow {
        margin-top: -9px;
        top: 50%;
        width: 18px;
        height: 18px;
      }
    }
  }
  .summary,
  .useage {
    padding: 6px 24px 0;
    .width120 {
      width: 120px;
    }
    .width130 {
      width: 130px;
    }
    .width50 {
      width: 50px;
    }
    .iconWrap {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      margin-right: 10px;
      text-align: center;
      padding-top: 3px;
    }
    .isOpen {
      color: #47b14b !important;
    }
    .chartIcon {
      display: none;
    }
    .row {
      &:hover {
        background: #f5f5f5;
        .nameBox {
          color: #2196f3;
        }
        .chartIcon {
          display: inline-block;
          color: #9e9e9e;
          cursor: pointer;
        }
        .chartIcon:hover {
          color: #2196f3;
        }
      }
    }
  }
`],[`
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  .byAppHeader {
    display: flex;
    justify-content: space-between;
    .tabsWrap {
      width: 190px;
      height: 36px;
      line-height: 36px;
      margin-left: 24px;
      background-color: #f5f5f5;
      border-radius: 3px;
      .tabItem {
        width: 92px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        margin: 2px;
        font-size: 14px;
        border-radius: 3px;
      }
      .currentTab {
        color: #2196f3;
        background-color: #fff;
      }
    }
    .searchWrap {
      padding-right: 24px;
      .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        height: 36px;
        border-radius: 3px;
        .ant-select-selection-item {
          line-height: 34px;
        }
      }
      .ant-select-arrow {
        margin-top: -9px;
        top: 50%;
        width: 18px;
        height: 18px;
      }
    }
  }
  .summary,
  .useage {
    padding: 6px 24px 0;
    .width120 {
      width: 120px;
    }
    .width130 {
      width: 130px;
    }
    .width50 {
      width: 50px;
    }
    .iconWrap {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      margin-right: 10px;
      text-align: center;
      padding-top: 3px;
    }
    .isOpen {
      color: #47b14b !important;
    }
    .chartIcon {
      display: none;
    }
    .row {
      &:hover {
        background: #f5f5f5;
        .nameBox {
          color: #2196f3;
        }
        .chartIcon {
          display: inline-block;
          color: #9e9e9e;
          cursor: pointer;
        }
        .chartIcon:hover {
          color: #2196f3;
        }
      }
    }
  }
`]),J=Z.default.Option,K=M.ZP.div(X),Q=[{tab:1,name:_l("\u6C47\u603B\u6982\u89C8")},{tab:2,name:_l("\u4F7F\u7528\u60C5\u51B5")}],V=function(C){(0,T.default)(d,C);function d(g){(0,L.default)(this,d);var n=(0,A.default)(this,(d.__proto__||k()(d)).call(this,g));return n.updateState=function(a){var e=n.state,l=e.pageIndex,s=e.useagePageIndex,o=e.currentTab;n.setState({keyword:a,pageIndex:o===1?1:l,useagePageIndex:o===2?1:s},function(){o===1?n.getList():n.getUseageList()})},n.getList=function(){var a=n.props.projectId,e=n.state,l=e.pageIndex,s=e.sorterInfo,o=s===void 0?{}:s,h=e.keyword,u=o.sortFiled,c=o.order;n.setState({loading:!0}),n.ajaxRequst&&n.ajaxRequst.abort(),n.ajaxRequst=P.Z.appUsageOverviewStatistics({projectId:a,keyWord:h,appId:"",pageIndex:l,pageSize:50,sortFiled:u,sorted:u?c==="asc":void 0}),n.ajaxRequst.then(function(f){var m=f.list,x=f.allCount;n.setState({list:m,total:x,loading:!1})}).catch(function(f){n.setState({pageIndex:1,loading:!1})})},n.getUseageList=function(){var a=n.props.projectId,e=n.state,l=e.useagePageIndex,s=e.sorterInfo,o=s===void 0?{}:s,h=e.keyword,u=e.selectedDate,c=o.sortFiled,f=o.order;n.setState({useageLoading:!0}),n.useageRequest&&n.useageRequest.abort(),n.useageRequest=P.Z.usageStatisticsForDimension({projectId:a,appId:"",userId:"",keyword:h,dayRange:u,pageIndex:l,pageSize:50,dimension:1,sortFiled:c||"",sorted:f==="asc"}),n.useageRequest.then(function(m){var x=m.list,N=m.allCount;n.setState({useageList:l===1?x:n.state.useageList.concat(x),useagePageIndex:l+1,total:N,useageLoading:!1})}).catch(function(m){n.setState({useageLoading:!1})})},n.dealSorter=function(a){var e=n.state.currentTab;e===1?n.setState({sorterInfo:a,pageIndex:1},function(){n.getList()}):n.setState({sorterInfo:a,useagePageIndex:1},function(){n.getUseageList()})},n.changeTab=function(a){var e=n.state,l=e.pageIndex,s=e.useagePageIndex;n.setState({currentTab:a.tab,pageIndex:a.tab===1?1:l,useagePageIndex:a.tab===2?1:s,sorterInfo:a.tab===2?{sortFiled:"appAccessNumber",order:"desc"}:{sortFiled:"",order:""}},function(){a.tab===1?n.getList():a.tab===2&&n.getUseageList()})},n.state={currentTab:1,selectedDate:1,list:[],loading:!1,pageIndex:1,sorterInfo:{sortFiled:"",order:""},useageList:[],useageLoading:!1,useagePageIndex:1,currentAppInfo:{}},n.columns=[{dataIndex:"appName",title:_l("\u5E94\u7528\u540D\u79F0"),className:"flex overflowHidden pRight16 minWidth120 pLeft10",render:function(e){return e.appId?t.createElement("div",{className:"flexRow overflowHidden"},t.createElement("div",{className:"iconWrap",style:{backgroundColor:e.iconColor}},t.createElement(R.Z,{url:e.icon,fill:"#fff",size:16})),t.createElement("div",{className:y()("flex nameBox ellipsis Font14 Hand",{unable:!e.status}),onClick:function(){return(0,b.Z)({appId:e.appId,appName:e.name})}},e.name)):t.createElement("div",{className:"flexRow overflowHidden alignItemsCenter"},t.createElement("div",{className:"iconWrap",style:{backgroundColor:"#ddd"}}),t.createElement("div",{className:"Gray_bd"},_l("\u5E94\u7528\u5DF2\u5220\u9664")))}},{dataIndex:"status",title:_l("\u72B6\u6001"),className:"width120",sorter:!0,render:function(e){var l=e.status===1;return t.createElement("span",{className:y()("Gray_9e",{isOpen:l})},l?_l("\u5F00\u542F"):_l("\u5173\u95ED"))}},{dataIndex:"workSheetCount",title:_l("\u5DE5\u4F5C\u8868\u603B\u6570"),className:"width120",sorter:!0,render:function(e){return(0,p.zW)(e.workSheetCount)}},{dataIndex:"workFlowCount",title:_l("\u5DE5\u4F5C\u6D41\u603B\u6570"),className:"width120",render:function(e){return(0,p.zW)(e.workFlowCount)}},{dataIndex:"rowCount",title:_l("\u884C\u8BB0\u5F55\u603B\u6570"),className:"width120",render:function(e){return(0,p.zW)(e.rowCount)}},{dataIndex:"action",title:"",className:"width50",render:function(e){if(e.appId)return t.createElement(w.Z,{text:t.createElement("span",null,_l("\u4F7F\u7528\u5206\u6790"))},t.createElement(I.Z,{icon:"poll",className:"chartIcon Font20",onClick:function(){n.setState({currentAppInfo:(0,j.default)({},e,{iconUrl:e.icon})},function(){(0,b.Z)({appId:e.appId,appName:e.name,callback:function(){window.open("/app/"+e.appId+"/analytics/"+g.projectId,"__blank")}})})}}))}}],n.useageColumns=[{dataIndex:"appName",title:_l("\u5E94\u7528\u540D\u79F0"),className:"flex overflowHidden pRight16 minWidth120 pLeft10",render:function(e){var l=e.app,s=l===void 0?{}:l;return s.name?t.createElement("div",{className:"flexRow overflowHidden"},t.createElement("div",{className:"iconWrap",style:{backgroundColor:s.iconColor}},t.createElement(R.Z,{url:s.iconUrl,fill:"#fff",size:16})),t.createElement("div",{className:"flex nameBox ellipsis Font14",onClick:function(){return(0,b.Z)({appId:e.id,appName:s.name})}},s.name)):t.createElement("div",{className:"flexRow overflowHidden alignItemsCenter"},t.createElement("div",{className:"iconWrap",style:{backgroundColor:"#ddd"}}),t.createElement("div",{className:"Gray_bd"},_l("\u5E94\u7528\u5DF2\u5220\u9664")))}},{dataIndex:"addRow",title:_l("\u8BB0\u5F55\u521B\u5EFA\u6B21\u6570"),explain:t.createElement("span",null,_l("\u8BB0\u5F55\u521B\u5EFA\u6B21\u6570\u8BA1\u6570\u8BF4\u660E\uFF1A"),t.createElement("br",null),_l("\u901A\u8FC7\u5DE5\u4F5C\u8868\u8868\u5355\u9875\u9762\u521B\u5EFA\u7684\u8BB0\u5F55\u3001\u4E0D\u5305\u542BExcel\u5BFC\u5165\u3001\u5DE5\u4F5C\u6D41\u521B\u5EFA\u3001API\u8C03\u7528\u7684\u65B9\u5F0F")),className:"width130",sorter:!0,render:function(e){return(0,p.zW)(e.addRow)}},{dataIndex:"addRowNumber",title:_l("\u8BB0\u5F55\u521B\u5EFA\u4EBA\u6570"),className:"width120",sorter:!0,render:function(e){return(0,p.zW)(e.addRowNumber)}},{dataIndex:"appAccess",title:_l("\u8BBF\u95EE\u6B21\u6570"),explain:t.createElement("span",null,_l("\u5E94\u7528\u8BBF\u95EE\u6B21\u6570\u8BA1\u6570\u8BF4\u660E\uFF1A"),t.createElement("br",null),_l("\xB7 \u901A\u8FC7\u5E94\u7528\u56FE\u6807\u70B9\u51FB\u8FDB\u5165\u5E94\u7528"),t.createElement("br",null),_l("\xB7 \u901A\u8FC7\u7CFB\u7EDF\u6D88\u606F\u6253\u5F00\u4E86\u5E94\u7528")),className:"width120",sorter:!0,render:function(e){return(0,p.zW)(e.appAccess)}},{dataIndex:"appAccessNumber",title:_l("\u8BBF\u95EE\u4EBA\u6570"),className:"width120",sorter:!0,render:function(e){return(0,p.zW)(e.appAccessNumber)}},{dataIndex:"addWorkFlow",title:_l("\u5DE5\u4F5C\u6D41\u6267\u884C\u6570"),className:"width120",sorter:!0,render:function(e){return(0,p.zW)(e.addWorkFlow)}},{dataIndex:"attachmentUpload",title:_l("\u9644\u4EF6\u4E0A\u4F20\u91CF"),className:"width120",sorter:!0,render:function(e){return(0,E.sS)(e.attachmentUpload,2)}},{dataIndex:"action",title:"",className:"width50",render:function(e){var l=e.app;if(l.name)return t.createElement(w.Z,{text:t.createElement("span",null,_l("\u4F7F\u7528\u5206\u6790"))},t.createElement(I.Z,{icon:"poll",className:"chartIcon Font20",onClick:function(){n.setState({currentAppInfo:(0,j.default)({},l,{appId:e.id})},function(){(0,b.Z)({appId:e.id,appName:l.name,callback:function(){window.open("/app/"+e.id+"/analytics/"+g.projectId,"__blank")}})})}}))}}],n.ajaxRequst=null,n.useageRequest=null,n}return(0,W.default)(d,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var n=this,a=this.state,e=a.currentTab,l=a.list,s=l===void 0?[]:l,o=a.loading,h=a.pageIndex,u=a.useageList,c=u===void 0?[]:u,f=a.useageLoading,m=a.useagePageIndex,x=a.selectedDate,N=a.total;return t.createElement(K,null,t.createElement("div",{className:"byAppHeader"},t.createElement("div",{className:"tabsWrap flexRow"},Q.map(function(i){return t.createElement("div",{key:i.tab,className:y()("tabItem fontWeight600 Hand",{currentTab:e===i.tab}),onClick:function(){n.changeTab(i)}},i.name)})),t.createElement("div",{className:"searchWrap flexRow"},e===2&&t.createElement(Z.default,{className:"mRight10 mdAntSelect",style:{width:"200px"},placeholder:_l("\u6700\u8FD130\u5929"),suffixIcon:t.createElement(I.Z,{icon:"arrow-down-border",className:"Font18"}),value:x,onChange:function(v){n.setState({selectedDate:v,useagePageIndex:1},function(){return n.getUseageList()})}},p.oA.map(function(i){return t.createElement(J,{key:i.value,value:i.value},i.label)})),t.createElement(B.Z,{className:"appSearch",placeholder:_l("\u5E94\u7528\u540D\u79F0"),handleChange:Y().debounce(function(i){return n.updateState(i.trim())},500)}))),e===1&&t.createElement("div",{className:"summary flex flexColumn"},t.createElement(F.Z,{dataSource:s,columns:this.columns,loading:o,dealSorter:this.dealSorter,total:N,pageIndex:h,changePage:function(v){return n.setState({pageIndex:v},n.getList)}})),e===2&&t.createElement("div",{className:"useage flex flexColumn"},t.createElement(F.Z,{dataSource:c,columns:this.useageColumns,loading:f&&m===1,defaultSorter:{sortFiled:"appAccessNumber",order:"desc"},dealSorter:this.dealSorter,total:N,pageIndex:m,changePage:function(v){return n.setState({useagePageIndex:v},n.getList)}})))}}]),d}(t.Component),q=r(18728),U=r(77863),_=r(30381),ee=r.n(_),ne=[{key:"overview",label:_l("\u603B\u89C8")},{key:"byApp",label:_l("\u6309\u5E94\u7528")},{key:"byUser",label:_l("\u6309\u6210\u5458")}],te=function(C){(0,T.default)(d,C);function d(g){(0,L.default)(this,d);var n=(0,A.default)(this,(d.__proto__||k()(d)).call(this,g));return n.changeTab=function(a){n.setState({currentTab:a.key})},n.state={currentTab:"overview"},n}return(0,W.default)(d,[{key:"render",value:function(){var n=this,a=this.props.match,e=a===void 0?{}:a,l=e.params,s=l===void 0?{}:l,o=this.state.currentTab,h=(0,E.XH)(s.projectId,U.UU.analysis);if(h==="2")return t.createElement("div",{className:"orgManagementWrap"},(0,E.j0)(s.projectId,U.UU.analysis,{dialogType:"content"}));var u=ee()().subtract(1,"days").format(_l("YYYY\u5E74MM\u6708DD\u65E5"));return t.createElement("div",{className:"useAnalyticsContainer orgManagementWrap"},t.createElement(H.Z,{prefix:_l("\u4F7F\u7528\u5206\u6790")}),t.createElement("div",{className:"orgManagementHeader"},t.createElement("div",{className:"tabBox"},ne.map(function(c){return t.createElement("span",{key:c.key,className:y()("tabItem Hand",{active:o===c.key}),onClick:function(){return n.changeTab(c)}},c.label)})),t.createElement("div",{className:"extraInfo"},_l("\u622A\u6B62\u5230%0\u7684\u6700\u65B0\u6570\u636E",u),t.createElement(w.Z,{tooltipClass:"analyticsTooltip",popupPlacement:"bottom",text:t.createElement("span",{className:"tooltipCon"},_l("\u4FDD\u7559\u6700\u8FD1\u4E00\u5E74\u7684\u4F7F\u7528\u5206\u6790\u6570\u636E\uFF0C\u4F7F\u7528\u5206\u6790\u4E0A\u7EBF\u540E\u9694\u5929\u5BF9\u4F7F\u7528\u6570\u636E\u8FDB\u884C\u5206\u6790\uFF0C\u4E14\u53EA\u6709\u5F00\u901A\u76F8\u5E94\u7684\u7248\u672C\u65B9\u53EF\u4F7F\u7528\u6B64\u529F\u80FD"))},t.createElement(I.Z,{icon:"info",className:"Font16 Gray_9e hover_f3 mLeft5"})))),t.createElement("div",{className:"flex useAnalyticsContent"},o==="overview"&&t.createElement($.Z,{projectId:s.projectId}),o==="byApp"&&t.createElement(V,{projectId:s.projectId}),o==="byUser"&&t.createElement(q.Z,{projectId:s.projectId})))}}]),d}(t.Component)}}]);
