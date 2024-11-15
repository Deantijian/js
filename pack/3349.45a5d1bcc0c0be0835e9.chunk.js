"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3349],{23349:(te,y,t)=>{t.r(y),t.d(y,{default:()=>J});var M=t(25273),I=t(54208),u=t(33867),ne=t(31277),R=t(31929),ae=t(52262),g=t(65400),re=t(67272),x=t(51024),N=t(12424),k=t(85105),H=t.n(k),Y=t(99663),S=t(22600),W=t(49135),Z=t(93196),E=t(86735),oe=t(6538),j=t(14321),e=t(67294),C=t(5017),B=t(52945),F=t.n(B);const G={getLogs:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivateHkLog","GetLogs",s,a)},downloadLogs:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return a.ajaxOptions=F()({},a.ajaxOptions,{type:"GET"}),mdyAPI("PrivateHkLog","DownloadLogs",s,a)}};var w=t(15577),P=t(30381),v=t.n(P),A=t(9958),b=t(96486),Q=t.n(b),K=(0,E.Z)([`
  padding-bottom: 30px;
  .serverName, .logName, .filterTime {
    width: 15%;
    margin-right: 20px;
  }
  .filterTime {
    width: 380px;
  }
  .ant-btn {
    padding: 4px 25px;
  }
  .input {
    &.ant-input-affix-wrapper:hover, &:hover {
      border-color: #2196F3 !important;
    }
    &.ant-input-affix-wrapper, &.ant-input-affix-wrapper-focused, & {
      border-radius: 2px !important;
      box-shadow: none !important;
    }
  }
`],[`
  padding-bottom: 30px;
  .serverName, .logName, .filterTime {
    width: 15%;
    margin-right: 20px;
  }
  .filterTime {
    width: 380px;
  }
  .ant-btn {
    padding: 4px 25px;
  }
  .input {
    &.ant-input-affix-wrapper:hover, &:hover {
      border-color: #2196F3 !important;
    }
    &.ant-input-affix-wrapper, &.ant-input-affix-wrapper-focused, & {
      border-radius: 2px !important;
      box-shadow: none !important;
    }
  }
`]),O=(0,E.Z)([`
  .header {
    border-bottom: 1px solid #e3e3e3;
  }
  .rightWrapper {
    right: 5px;
    top: -5px;
  }
  .logItem {
    &:hover {
      background-color: #eee;
    }
  }
  .serverName {
    padding-left: 10px;
  }
  .serverName, .time {
    flex: 1;
  }
  .logContent {
    width: 75%;
    word-break: break-word;
  }
  .justifyContentCenter {
    justify-content: center
  }
  .highlig {
    background-color: #F7A943;
  }
`],[`
  .header {
    border-bottom: 1px solid #e3e3e3;
  }
  .rightWrapper {
    right: 5px;
    top: -5px;
  }
  .logItem {
    &:hover {
      background-color: #eee;
    }
  }
  .serverName {
    padding-left: 10px;
  }
  .serverName, .time {
    flex: 1;
  }
  .logContent {
    width: 75%;
    word-break: break-word;
  }
  .justifyContentCenter {
    justify-content: center
  }
  .highlig {
    background-color: #F7A943;
  }
`]),z=j.default.RangePicker,U=C.ZP.div(K),V=C.ZP.div(O),$=function(s,a){var n=a;a=(0,w.Qu)(a);var r=new RegExp(Q().escapeRegExp(s),"gi"),i=r.exec(a),d=i?i[0]:"";return a=(0,w.u1)(a.replace(new RegExp(d,"g"),"*#span1#*"+d+"*#span2#*")),a=a.replace(/\*#span1#\*/g,'<span class="highlig">').replace(/\*#span2#\*/g,"</span>"),a},J=function(c){(0,Z.default)(s,c);function s(a){(0,Y.default)(this,s);var n=(0,W.default)(this,(s.__proto__||H()(s)).call(this,a));return n.handleQuery=function(){n.setState({pageIndex:1,isMore:!0,logList:[]},n.getLogs)},n.handleReset=function(){n.setState({pageIndex:1,isMore:!0,logList:[],serverName:"",keywords:"",date:[]},n.getLogs)},n.handleDownload=function(){var r=n.state,i=r.serverName,d=r.keywords,m=r.date,l=(0,N.Z)(m,2),o=l[0],p=l[1],h=o?v()(o).format("YYYY-MM-DD HH:mm:ss"):"",f=p?v()(p).format("YYYY-MM-DD HH:mm:ss"):"";window.open(md.global.Config.AjaxApiUrl+"PrivateHkLog/DownloadLogs?serviceName="+i+"&keywords="+d+"&startTime="+h+"&endTime="+f)},n.handleScrollEnd=function(){n.getLogs()},n.state={serverName:"",keywords:"",date:[],loading:!1,pageIndex:1,isMore:!0,logList:[]},n}return(0,S.default)(s,[{key:"componentDidMount",value:function(){this.getLogs()}},{key:"getLogs",value:function(){var n=this,r=this.state,i=r.serverName,d=r.keywords,m=r.date,l=r.loading,o=r.pageIndex,p=r.isMore;if(!(l||!p)){this.setState({loading:!0});var h=50,f=(0,N.Z)(m,2),L=f[0],T=f[1],X=L?v()(L).format("YYYY-MM-DD HH:mm:ss"):void 0,q=T?v()(T).format("YYYY-MM-DD HH:mm:ss"):void 0;G.getLogs({pageIndex:o,pageSize:h,serviceName:i,keywords:d,startTime:X,endTime:q}).then(function(D){var _=n.state.logList,ee=_.concat(D.list);n.setState({loading:!1,logList:ee,pageIndex:o+1,isMore:D.list.length>=h})})}}},{key:"renderFilter",value:function(){var n=this,r=this.state,i=r.date,d=r.serverName,m=r.keywords;return e.createElement(U,{className:"valignWrapper mTop20"},e.createElement("div",{className:"valignWrapper serverName"},e.createElement("div",{className:"Gray_75 Bold nowrap mRight5"},_l("\u670D\u52A1\u540D")),e.createElement(x.default,{className:"input",placeholder:_l("\u8F93\u5165\u5B8C\u6574\u7684\u670D\u52A1\u540D"),value:d,onChange:function(o){n.setState({serverName:o.target.value})},onKeyDown:function(o){o.which===13&&n.handleQuery()}})),e.createElement("div",{className:"valignWrapper logName"},e.createElement("div",{className:"Gray_75 Bold nowrap mRight5"},_l("\u65E5\u5FD7\u5185\u5BB9")),e.createElement(x.default,{className:"input",placeholder:_l("\u8F93\u5165\u65E5\u5FD7\u5185\u5BB9"),value:m,onChange:function(o){n.setState({keywords:o.target.value})},onKeyDown:function(o){o.which===13&&n.handleQuery()}})),e.createElement("div",{className:"valignWrapper filterTime"},e.createElement("div",{className:"Gray_75 Bold nowrap mRight5"},_l("\u65F6\u95F4")),e.createElement(z,{className:"input",locale:A.Z,value:i,showTime:{format:"HH:mm:ss"},onChange:function(o){n.setState({date:o||[]})}})),e.createElement("div",{className:"valignWrapper"},e.createElement(R.default,{autoInsertSpaceInButton:!1},e.createElement(g.default,{className:"mRight10",type:"primary",onClick:this.handleQuery},_l("\u67E5\u8BE2")),e.createElement(g.default,{onClick:this.handleReset},_l("\u91CD\u7F6E")))))}},{key:"renderContent",value:function(){var n=this.state,r=n.keywords,i=n.logList,d=n.loading,m=n.pageIndex;return e.createElement(V,{className:"flexColumn flex"},e.createElement("div",{className:"flexRow header mBottom10 pBottom10 Relative"},e.createElement("div",{className:"Gray_75 Bold time"},_l("\u65F6\u95F4")),e.createElement("div",{className:"Gray_75 Bold serverName"},_l("\u670D\u52A1\u540D")),e.createElement("div",{className:"Gray_75 Bold logContent"},_l("\u65E5\u5FD7\u5185\u5BB9")),e.createElement("div",{className:"valignWrapper Absolute rightWrapper"},e.createElement(g.default,{type:"link",icon:e.createElement(u.Z,{className:"mRight5",icon:"file_download"}),onClick:this.handleDownload},_l("\u5BFC\u51FA\u524D500\u6761\u65E5\u5FD7")),e.createElement(g.default,{type:"link",icon:e.createElement(u.Z,{className:"mRight5",icon:"workflow_cycle"}),onClick:this.handleQuery},_l("\u5237\u65B0")))),e.createElement(M.Z,{className:"flex",onScrollEnd:this.handleScrollEnd},i.map(function(l,o){return e.createElement("div",{className:"flexRow logItem Font14",key:o},e.createElement("div",{className:"time"},l.time),e.createElement("div",{className:"serverName"},l.serviceName),e.createElement("div",{className:"logContent",dangerouslySetInnerHTML:{__html:$(r,l.message)}}))}),!d&&!i.length&&e.createElement("div",{className:"valignWrapper h100 justifyContentCenter Gray_75"},e.createElement(u.Z,{className:"Font18 mRight5 mBottom2",icon:"info"}),_l("\u672A\u67E5\u8BE2\u5230\u76F8\u5173\u5185\u5BB9")),d&&e.createElement("div",{className:"valignWrapper"},e.createElement(I.Z,null))))}},{key:"render",value:function(){return e.createElement("div",{className:"privateCardWrap big h100 flexColumn flex"},e.createElement("div",{className:"Font17 bold mBottom8"},_l("\u65E5\u5FD7")),this.renderFilter(),this.renderContent())}}]),s}(e.Component)}}]);
