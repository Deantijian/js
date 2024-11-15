"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7855],{7855:(vt,re,d)=>{d.r(re),d.d(re,{default:()=>ht});var xe=d(66946),ye=d(85105),D=d.n(ye),Z=d(99663),T=d(22600),P=d(49135),j=d(93196),e=d(67294),Ee=d(60022),F=d(64712),$=d(77863),le=d(25273),be=d(86853),Q=d(56171),oe=d(57853),Y=d(66215),q=d(26581),ee=d(54208),B=d(3540),ie=d(97553),N=d(33867),R=d(88106),A=d(88239),xt=d(34279),C=d(64749),we=d(67707),te=d(70801),se=d(36164),k=d(86735),M=d(33374),U=d(15577),Ie=d(96486),y=d.n(Ie),S=d(5017),yt=d(30381),Ne=(0,k.Z)([`
  margin-bottom: 30px;
  &.flex3 {
    flex: 3;
  }
  &.flex2 {
    flex: 2;
    padding-left: 40px;
  }
  &.lastFormItem {
    margin-bottom: 0;
  }
  .w72 {
    width: 72px;
  }
  .required {
    position: absolute;
    left: -8px;
    top: 3px;
    color: #f44336;
  }
  .ming.Input {
    height: 34px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
  .ming.Textarea {
    padding: 16px 15px;
    &.keyTextarea {
      min-height: 120px !important;
    }
    &.ivTextarea {
      min-height: 60px !important;
    }
    &.remarkTextarea {
      min-height: 85px !important;
      padding: 8px 12px !important;
    }
  }
  .ming.Textarea:hover:not(:disabled),
  .ming.Textarea:focus,
  .ming.Textarea,
  .ming.Input:hover,
  .ming.Input:focus {
    border: 1px solid #eaeaea;
  }
`],[`
  margin-bottom: 30px;
  &.flex3 {
    flex: 3;
  }
  &.flex2 {
    flex: 2;
    padding-left: 40px;
  }
  &.lastFormItem {
    margin-bottom: 0;
  }
  .w72 {
    width: 72px;
  }
  .required {
    position: absolute;
    left: -8px;
    top: 3px;
    color: #f44336;
  }
  .ming.Input {
    height: 34px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
  .ming.Textarea {
    padding: 16px 15px;
    &.keyTextarea {
      min-height: 120px !important;
    }
    &.ivTextarea {
      min-height: 60px !important;
    }
    &.remarkTextarea {
      min-height: 85px !important;
      padding: 8px 12px !important;
    }
  }
  .ming.Textarea:hover:not(:disabled),
  .ming.Textarea:focus,
  .ming.Textarea,
  .ming.Input:hover,
  .ming.Input:focus {
    border: 1px solid #eaeaea;
  }
`]),L=S.ZP.div(Ne),Ce={0:_l("\u65B0\u5EFA\u5931\u8D25"),3:_l("\u540D\u79F0\u91CD\u590D"),21:_l("Key\u65E0\u6548"),22:_l("IV\u65E0\u6548 ")},G=C.default.Option,ke=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.changeForm=function(n,r){if(n==="encryptWay"){var a,o=r===2?24:y().includes([3,50],r)?32:16;t.setState((a={},(0,R.default)(a,n,r),(0,R.default)(a,"key",t.state.key?t.state.key.slice(0,o):t.state.key),(0,R.default)(a,"padding",r===50?2:void 0),(0,R.default)(a,"encodeMode",n==="encryptWay"&&r===50?20:void 0),a),t.handleDefaultRuleName)}else t.setState((0,R.default)({},n,r))},t.onOk=function(){var n=t.props.projectId,r=t.state,a=r.encryptWay,o=r.status,s=r.ruleName,l=r.key,u=r.iv,p=r.remark,m=r.cipherMode,f=r.padding,v=r.encodeMode;if(!y().trim(s))return alert(_l("\u89C4\u5219\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),2);if(!y().trim(l))return alert(_l("Key\u4E0D\u80FD\u4E3A\u7A7A"),2);if(!y().trim(u)&&(a!==50||a===50&&m===1))return alert(_l("IV\u4E0D\u80FD\u4E3A\u7A7A"),2);var w=a===2?24:y().includes([3,50],a)?32:16,b=a===50?32:16;if(y().trim(l).length!==w)return alert(_l("\u8BF7\u8F93\u5165%0\u4F4D\u5B57\u7B26\u7684\u5BC6\u94A5(Key)",w),2);if(y().trim(u).length!==b&&(a!==50||a===50&&m===1))return alert(_l("\u8BF7\u8F93\u5165%0\u4F4D\u5B57\u7B26\u7684\u5411\u91CF(IV)",b),2);var x={name:y().trim(s),type:a,remark:y().trim(p),key:y().trim(l),iv:a!==50||a===50&&m===1?y().trim(u):void 0,state:o};a===50&&(x.cipherMode=m,x.encodeMode=v,m===1&&(x.padding=f)),M.Z.addEncryptRule({projectId:n,addEncryptRule:x}).then(function(I){I.code===1?(alert(_l("\u65B0\u5EFA\u6210\u529F")),t.props.getDataList(),t.props.onCancel()):alert(Ce[I.code]||_l("\u65B0\u5EFA\u5931\u8D25"),2)})},t.handleDefaultRuleName=function(){var n=t.props,r=n.encryptList,a=r===void 0?[]:r,o=n.ruleList,s=t.state.encryptWay,l=y().get(y().find(a,function(p){return p.value===s})||{},"label")+"_",u=(0,U.by)(o,l+_l("\u89C4\u5219\u540D\u79F01"),"name");t.setState({ruleName:u})},t.state={encryptWay:1,status:1,errors:{},ruleName:"",cipherMode:1},t}return(0,T.default)(c,[{key:"componentDidMount",value:function(){this.handleDefaultRuleName()}},{key:"render",value:function(){var t=this,n=this.props,r=n.visible,a=n.onCancel,o=n.encryptList,s=o===void 0?[]:o,l=this.state,u=l.status,p=l.encryptWay,m=l.ruleName,f=l.iv,v=l.key,w=l.remark,b=l.cipherMode,x=l.padding,I=l.encodeMode;return e.createElement(te.Z,{width:560,className:"addEditRuleDialog",visible:r,title:_l("\u65B0\u5EFA\u52A0\u5BC6\u89C4\u5219"),onCancel:a,okText:_l("\u65B0\u5EFA"),onOk:this.onOk},e.createElement("div",{className:"flexRow"},e.createElement(L,{className:"flex3"},e.createElement("div",{className:"bold mBottom10"},_l("\u52A0\u5BC6\u65B9\u5F0F")),e.createElement(C.default,{className:"w100 mdAntSelect",value:p,onChange:function(h){return t.changeForm("encryptWay",h)}},s.filter(function(i){return i.value}).map(function(i){return e.createElement(G,{key:i.value,value:i.value},i.label)}))),e.createElement(L,{className:"flex2"},e.createElement("div",{className:"bold mBottom10"},_l("\u72B6\u6001")),e.createElement(Y.Z,{className:"w72",checked:u===1,text:u?_l("\u542F\u7528"):_l("\u505C\u7528"),onClick:function(h){return t.changeForm("status",h?2:1)}}))),e.createElement(L,null,e.createElement("div",{className:"bold mBottom10"},_l("\u89C4\u5219\u540D\u79F0")),e.createElement(B.Z,{className:"w100",maxLength:50,value:m,placeholder:_l("\u8BF7\u8F93\u5165"),onChange:function(h){return t.changeForm("ruleName",h)}})),p===50&&e.createElement("div",{className:"flexRow"},e.createElement(L,{className:"flex mRight10"},e.createElement("div",{className:"bold mBottom10"},_l("\u5DE5\u4F5C\u6A21\u5F0F")),e.createElement(C.default,{className:"w100 mdAntSelect",value:b,onChange:function(h){return t.changeForm("cipherMode",h)},placeholder:_l("\u8BF7\u9009\u62E9")},[{value:1,label:"CBC"},{value:2,label:"ECB"}].map(function(i){return e.createElement(G,{key:i.value,value:i.value},i.label)}))),b===1&&e.createElement(L,{className:"flex mLeft10"},e.createElement("div",{className:"bold mBottom10"},_l("\u586B\u5145\u6A21\u5F0F")),e.createElement(C.default,{className:"w100 mdAntSelect",value:x,onChange:function(h){return t.changeForm("padding",h)},placeholder:_l("\u8BF7\u9009\u62E9"),disabled:!0},[{value:1,label:"NoPadding"},{value:2,label:"PKCS7/PKCS5"}].map(function(i){return e.createElement(G,{key:i.value,value:i.value},i.label)})))),e.createElement(L,null,e.createElement("div",{className:"bold mBottom10 Relative"},e.createElement("spam",{className:"required"},"*"),_l("\u5BC6\u94A5"),"(Key)"),e.createElement(B.Z,{className:"keyTextarea w100",placeholder:_l("\u8BF7\u8F93\u5165%0\u4F4D\u5B57\u7B26",p===2?24:y().includes([3,50],p)?32:16),maxLength:p===2?24:y().includes([3,50],p)?32:16,value:v,onChange:function(h){h=h.replace(/[\u4e00-\u9fa5]/gi,""),t.changeForm("key",h)}})),(p===50?b===1:!0)&&e.createElement(L,null,e.createElement("div",{className:"bold mBottom10 Relative"},e.createElement("spam",{className:"required"},"*"),_l("\u5411\u91CF"),"(IV)"),e.createElement(B.Z,{className:"ivTextarea w100",placeholder:_l("\u8BF7\u8F93\u5165%0\u4F4D\u5B57\u7B26",p===50?32:16),maxLength:p===50?32:16,value:f,onChange:function(h){h=h.replace(/[\u4e00-\u9fa5]/gi,""),t.changeForm("iv",h)}})),p===50&&e.createElement(L,null,e.createElement("div",{className:"bold mBottom10"},_l("\u8F93\u51FA\u683C\u5F0F")),e.createElement(C.default,{defaultValue:20,className:"w100 mdAntSelect",value:I,onChange:function(h){return t.changeForm("encodeMode",h)},placeholder:_l("\u8BF7\u9009\u62E9")},[{value:10,label:"Hex"},{value:20,label:"Base64"}].map(function(i){return e.createElement(G,{key:i.value,value:i.value},i.label)}))),e.createElement(L,{className:"lastFormItem"},e.createElement("div",{className:"bold mBottom10"},_l("\u5907\u6CE8")),e.createElement(se.Z,{className:"remarkTextarea",placeholder:_l("\u8BF7\u8F93\u5165"),value:w,maxLength:200,onChange:function(h){return t.changeForm("remark",h)}})))}}]),c}(e.Component),Se=d(1952),ce=d(12424),Re=(0,k.Z)([`
  .ming.Input {
    height: 34px;
    border: 1px solid #eaeaea;
    background: #fff;
    border-radius: 4px;
  }
  .ming.Textarea {
    border: 1px solid #eaeaea;
  }
  .ming.Input:hover,
  .ming.Input:focus,
  .ming.Textarea:hover:not(:disabled),
  .ming.Textarea:focus {
    border-color: #eaeaea;
  }
`],[`
  .ming.Input {
    height: 34px;
    border: 1px solid #eaeaea;
    background: #fff;
    border-radius: 4px;
  }
  .ming.Textarea {
    border: 1px solid #eaeaea;
  }
  .ming.Input:hover,
  .ming.Input:focus,
  .ming.Textarea:hover:not(:disabled),
  .ming.Textarea:focus {
    border-color: #eaeaea;
  }
`]),Le=(0,k.Z)([`
  width: 100%;
  color: #757575;
  font-size: 13px;
  padding: 20px 20px 0;
  .keyInfo {
    white-space: pre-wrap;
    word-break: break-word;
    -webkit-line-clamp: 2;
  }
`],[`
  width: 100%;
  color: #757575;
  font-size: 13px;
  padding: 20px 20px 0;
  .keyInfo {
    white-space: pre-wrap;
    word-break: break-word;
    -webkit-line-clamp: 2;
  }
`]),De=(0,S.ZP)(te.Z)(Re),Ze=S.ZP.div(Le),Te={0:_l("\u4FDD\u5B58\u5931\u8D25"),3:_l("\u540D\u79F0\u91CD\u590D"),21:_l("Key\u65E0\u6548"),22:_l("IV\u65E0\u6548 ")},de=function(c,g){if(c){if(!g)return c;var t=c.split(""),n=t.map(function(r,a){return a<4||a>t.length-5?r:"*"});return n.join("")}};function Pe(E){var c=E.visible,g=E.onCancel,t=E.ruleDetail,n=t===void 0?{}:t,r=E.projectId,a=E.getDetail,o=a===void 0?function(){}:a,s=E.updateCurrentRow,l=s===void 0?function(){}:s,u=(0,e.useState)(n.name),p=(0,ce.Z)(u,2),m=p[0],f=p[1],v=(0,e.useState)(n.remark),w=(0,ce.Z)(v,2),b=w[0],x=w[1],I=(0,e.createRef)();return(0,e.useEffect)(function(){I&&I.current&&I.current.focus(),f(n.name)},[n.name]),(0,e.useEffect)(function(){x(n.remark)},[n.remark]),e.createElement(De,{title:_l("\u4FEE\u6539\u4FE1\u606F"),visible:c,onCancel:g,okText:_l("\u4FDD\u5B58"),onOk:function(){M.Z.editEncryptRule({projectId:r,encryptRuleId:n.encryptRuleId,editeEncryptRule:{name:m,remark:b||""}}).then(function(h){h.code===1?(alert(_l("\u4FDD\u5B58\u6210\u529F")),l({name:m,remark:b||""}),o(),g()):alert(Te[h.code]||_l("\u4FDD\u5B58\u5931\u8D25"),2)})}},e.createElement("div",{className:"bold mBottom10"},_l("\u89C4\u5219\u540D\u79F0")),e.createElement(B.Z,{manualRef:I,className:"mBottom30 w100",maxLength:50,value:m,placeholder:_l("\u8BF7\u8F93\u5165"),onChange:function(h){return f(h)},disabled:n.isDefault}),e.createElement("div",{className:"bold mBottom10"},_l("\u5907\u6CE8")),e.createElement(se.Z,{className:"remarkTextarea",placeholder:_l("\u8BF7\u8F93\u5165"),maxLength:200,value:b,onChange:function(h){return x(h)}}))}var je=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.getDetail=function(){M.Z.getEncryptRule({projectId:t.props.projectId,encryptRuleId:t.props.encryptRuleId}).then(function(n){t.setState({ruleDetail:n.encryptRule})})},t.state={maskKey:!0,maskIv:!0},t}return(0,T.default)(c,[{key:"componentDidMount",value:function(){this.props.ruleDetail?this.setState({ruleDetail:this.props.ruleDetail}):this.getDetail()}},{key:"render",value:function(){var t=this,n=this.state,r=n.showEditBaseInfo,a=n.ruleDetail,o=a===void 0?{}:a,s=n.maskIv,l=n.maskKey,u=this.props.projectId;return e.createElement(Ze,null,e.createElement("div",{className:"encryptWay"},e.createElement("span",{className:"Font17 bold mRight6 Gray"},o.name),!o.isSystem&&e.createElement(N.Z,{icon:"edit",className:"Gray_bd Hand",onClick:function(){return t.setState({showEditBaseInfo:!0})}})),e.createElement("div",{className:"mBottom30 ellipsis",title:o.remark},o.remark),e.createElement("div",null,_l("\u52A0\u5BC6\u65B9\u5F0F")),e.createElement("div",{className:"Gray mBottom30"},_.get(_.find(K,function(p){return p.value===o.type})||{},"label")),e.createElement("div",null,"Key"),e.createElement("div",{className:"Gray mBottom30 keyInfo"},de(o.key,l),e.createElement(q.Z,{text:l?_l("\u89E3\u7801"):_l("\u63A9\u7801")},e.createElement("i",{className:"icon Font14 Gray_bd mLeft10 "+(l?"icon-eye_off":"icon-eye"),onClick:function(){return t.setState({maskKey:!l})}}))),e.createElement("div",null,"IV"),e.createElement("div",{className:"Gray mBottom30"},de(o.iv,s),e.createElement(q.Z,{text:s?_l("\u89E3\u7801"):_l("\u63A9\u7801")},e.createElement("i",{className:"icon Font14 Gray_bd mLeft10 "+(s?"icon-eye_off":"icon-eye"),onClick:function(){return t.setState({maskIv:!s})}}))),e.createElement(Pe,{visible:r,projectId:u,ruleDetail:o,updateCurrentRow:this.props.updateCurrentRow,getDetail:this.getDetail,onCancel:function(){return t.setState({showEditBaseInfo:!1})}}))}}]),c}(e.Component),pe=d(6100),me=d(49365),ue=d(71411),Ae=d(62232),Fe=(0,k.Z)([`
  padding: 12px 20px;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  .width160 {
    width: 160px;
  }
  .w20 {
    width: 20%;
  }
  .w30 {
    width: 30%;
  }
  .w50 {
    width: 50%;
  }
  .listHeader {
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    color: #9999;
    font-weight: 500;
    div {
      padding-left: 10px;
    }
  }
  .listContent {
    flex: 1;
    min-height: 0;
    .listItem {
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #eaeaea;
      .controlName,
      .appName,
      .worksheetName {
        padding-left: 10px;
      }
      .iconWrap {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        text-align: center;
        margin-right: 5px;
      }
    }
  }
  .ant-select-clear {
    right: 14px !important;
  }
`],[`
  padding: 12px 20px;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  .width160 {
    width: 160px;
  }
  .w20 {
    width: 20%;
  }
  .w30 {
    width: 30%;
  }
  .w50 {
    width: 50%;
  }
  .listHeader {
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    color: #9999;
    font-weight: 500;
    div {
      padding-left: 10px;
    }
  }
  .listContent {
    flex: 1;
    min-height: 0;
    .listItem {
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #eaeaea;
      .controlName,
      .appName,
      .worksheetName {
        padding-left: 10px;
      }
      .iconWrap {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        text-align: center;
        margin-right: 5px;
      }
    }
  }
  .ant-select-clear {
    right: 14px !important;
  }
`]),Me=S.ZP.div(Fe),We=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.getAppList=function(){var n=t.props.projectId,r=t.state,a=r.appPageIndex,o=r.isMoreApp,s=r.loadingApp,l=r.keyword,u=l===void 0?"":l;a>1&&(s&&o||!o)||(t.setState({loadingApp:!0}),t.appPromise&&t.appPromise.abort(),t.appPromise=me.Z.getAppsByProject({projectId:n,status:"",order:3,pageIndex:a,pageSize:50,keyword:u}),t.appPromise.then(function(p){var m=p.apps,f=m.map(function(v){return{label:v.appName,value:v.appId}});t.setState({appList:a===1?[{label:_l("\u5168\u90E8\u5E94\u7528"),value:""}].concat(f):t.state.appList.concat(f),isMoreApp:f.length>=50,loadingApp:!1,appPageIndex:a+1})}).catch(function(p){t.setState({loadingApp:!1})}))},t.getWorksheetList=function(n){if(!n){t.setState({worksheetList:[]});return}var r=t.props.projectId;me.Z.getWorksheetsUnderTheApp({projectId:r,appIds:[n],isFilterCustomPage:!0}).then(function(a){var o=(a[n]||[]).map(function(s){return{label:s.worksheetName,value:s.worksheetId}});t.setState({worksheetList:[{label:_l("\u5168\u90E8\u5DE5\u4F5C\u8868"),value:""}].concat(o)})})},t.getList=function(){var n=t.props,r=n.projectId,a=n.encryptRuleId,o=t.state,s=o.searchParams,l=o.pageIndex;t.setState({loading:!0}),t.promise&&t.promise.abort(),t.promise=M.Z.pagedEncryptFields({projectId:r,encryptRuleId:a,appId:s.appId,worksheetId:s.worksheetId,keywords:s.keywords,pageIndex:l,pageSize:1e3}),t.promise.then(function(u){t.setState({dataList:u.encryptControls,loading:!1})}).catch(function(u){t.setState({loading:!1})})},t.changeConditions=function(n,r){var a,o=t.state.searchParams;t.setState({searchParams:(0,A.default)({},o,(a={},(0,R.default)(a,n,r),(0,R.default)(a,"worksheetId",n==="worksheetId"?r:n==="appId"&&!r?void 0:o.worksheetId),a)),pageIndex:1},t.getList)},t.state={appList:[{label:_l("\u5168\u90E8"),value:""}],worksheetList:[{label:_l("\u5168\u90E8"),value:""}],searchParams:{appId:"",worksheetId:"",keywords:""},dataList:[],pageIndex:1,loading:!1,appPageIndex:1},t.promise=null,t.appPromise=null,t}return(0,T.default)(c,[{key:"componentDidMount",value:function(){this.getAppList(),this.getList()}},{key:"render",value:function(){var t=this,n=this.props.projectId,r=this.state,a=r.appList,o=r.worksheetList,s=r.searchParams,l=r.dataList,u=r.loading,p=r.isMoreApp;return e.createElement(Me,null,e.createElement("div",{className:"searchWrap flexRow mBottom20"},e.createElement(C.default,{className:"width160 mRight12 mdAntSelect",showSearch:!0,allowClear:!0,placeholder:_l("\u5168\u90E8"),options:a,value:s.appId,onSearch:_.debounce(function(m){t.setState({keyword:m,appPageIndex:1},t.getAppList)},500),suffixIcon:e.createElement(N.Z,{icon:"arrow-down-border",className:"Font18"}),notFoundContent:e.createElement("span",{className:"Gray_9e"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")),filterOption:function(f,v){return a.find(function(w){return w.value===v.value}).label.toLowerCase().indexOf(f.toLowerCase())>-1},onChange:function(f){t.changeConditions("appId",f),t.getWorksheetList(f)},onClear:function(){t.setState({appPageIndex:1,keyword:""},t.getAppList)},onPopupScroll:function(f){f.persist();var v=f.target,w=v.scrollTop,b=v.offsetHeight,x=v.scrollHeight;w+b===x&&p&&t.getAppList()}},a.map(function(m){return e.createElement(C.default.Option,{key:m.value,value:m.value},m.label)})),e.createElement(C.default,{className:"width160 mRight12 mdAntSelect",showSearch:!0,allowClear:!0,placeholder:_l("\u5168\u90E8"),options:o,disabled:!s.appId,value:s.worksheetId,onFocus:function(){return o.length===1&&t.getWorksheetList(n)},filterOption:function(f,v){return o.find(function(w){return w.value===v.value}).label.toLowerCase().indexOf(f.toLowerCase())>-1},suffixIcon:e.createElement(N.Z,{icon:"arrow-down-border",className:"Font18"}),notFoundContent:e.createElement("span",{className:"Gray_9e"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")),onChange:function(f){return t.changeConditions("worksheetId",f)}}),e.createElement(B.Z,{placeholder:_l("\u641C\u7D22\u5B57\u6BB5"),value:s.keywords,onChange:function(f){return t.changeConditions("keywords",f)}})),e.createElement("div",{className:"listHeader flexRow"},e.createElement("div",{className:"controlName w50"},_l("\u52A0\u5BC6\u5B57\u6BB5")),e.createElement("div",{className:"appName w20"},_l("\u6240\u5C5E\u5E94\u7528")),e.createElement("div",{className:"worksheetName w30"},_l("\u6240\u5C5E\u5DE5\u4F5C\u8868"))),e.createElement("div",{className:"listContent"},e.createElement(le.Z,null,u?e.createElement(ee.Z,{className:"mTop40"}):_.isEmpty(l)?e.createElement(ue.Z,{className:"w100 h100",detail:{icon:"icon-verify",desc:_l("\u65E0\u6570\u636E")}}):l.map(function(m,f){var v=m.controlName,w=m.type,b=m.appName,x=m.iconColor,I=m.appIconUrl,i=m.worksheetName,h=m.iconUrl;return e.createElement("div",{className:"listItem flexRow",key:f},e.createElement("div",{className:"controlName w50 ellipsis"},e.createElement("i",{className:"Gray_bd mRight5 Font16 TxtMiddle icon-"+(0,Ae.hB)(w)}),v),e.createElement("div",{className:"appName w20 flexRow alignItemsCenter"},b?e.createElement(e.Fragment,null,e.createElement("div",{className:"iconWrap pTop2",style:{backgroundColor:x}},e.createElement(pe.Z,{url:I,fill:"#fff",size:12})),e.createElement("div",{className:"flex ellipsis"},b)):"-"),e.createElement("div",{className:"worksheetName w30 flexRow alignItemsCenter"},e.createElement("div",{className:"iconWrap"},e.createElement(pe.Z,{url:h,fill:"#757575",size:16})),e.createElement("div",{className:"flex ellipsis"},i)))}))))}}]),c}(e.Component),Be=d(93967),z=d.n(Be),ze=(0,k.Z)([`
  height: unset !important;
  .mui-dialog-header {
    padding: 22px 20px 20px !important;
    .mui-dialog-default-title {
      font-weight: 600;
    }
  }
  .mui-dialog-body {
    padding: 0 !important;
    overflow: hidden !important;
  }
`],[`
  height: unset !important;
  .mui-dialog-header {
    padding: 22px 20px 20px !important;
    .mui-dialog-default-title {
      font-weight: 600;
    }
  }
  .mui-dialog-body {
    padding: 0 !important;
    overflow: hidden !important;
  }
`]),Ve=(0,k.Z)([`
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  .tabItem {
    height: 100%;
    font-size: 13px;
    color: #333;
    margin-right: 26px;
    padding-bottom: 12px;
  }
  .active {
    color: #2196f3;
    font-weight: 600;
    border-bottom: 2px solid #2196f3;
  }
`],[`
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  .tabItem {
    height: 100%;
    font-size: 13px;
    color: #333;
    margin-right: 26px;
    padding-bottom: 12px;
  }
  .active {
    color: #2196f3;
    font-weight: 600;
    border-bottom: 2px solid #2196f3;
  }
`]),He=(0,S.ZP)(te.Z)(ze),Oe=S.ZP.div(Ve),$e=[{tab:1,title:_l("\u57FA\u672C\u4FE1\u606F")},{tab:2,title:_l("\u5DF2\u52A0\u5BC6\u5B57\u6BB5")}],Ue=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.state={currentTab:1},t}return(0,T.default)(c,[{key:"render",value:function(){var t=this,n=this.props,r=n.onCancel,a=n.projectId,o=n.encryptRuleId,s=n.ruleDetail,l=this.state.currentTab,u=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;return e.createElement(He,{width:780,title:_l("\u52A0\u5BC6\u89C4\u5219\u8BE6\u60C5"),visible:!0,onCancel:r,showFooter:!1,showCancel:!1,maxHeight:u-70},e.createElement("div",{className:"flexColumn",style:{height:u-200+"px"}},e.createElement(Oe,null,$e.map(function(p){return e.createElement("div",{key:p.tab,className:z()("tabItem Hand",{active:l===p.tab}),onClick:function(){return t.setState({currentTab:p.tab})}},p.title)})),l===1&&e.createElement(je,{projectId:a,encryptRuleId:o,ruleDetail:s,updateCurrentRow:this.props.updateCurrentRow}),l===2&&e.createElement(We,{projectId:a,encryptRuleId:o})))}}]),c}(e.Component),Ge=function(c){return(0,Se.Z)(Ue,(0,A.default)({},c))},Ke=d(10929),Xe=d(31261),he=C.default.Option,K=[{value:"",label:_l("\u5168\u90E8\u65B9\u5F0F")},{value:1,label:"AES128"},{value:2,label:"AES192"},{value:3,label:"AES256"},{value:50,label:"SM4"}],Je=[{value:"",label:_l("\u5168\u90E8\u72B6\u6001")},{value:1,label:_l("\u542F\u7528")},{value:2,label:_l("\u505C\u7528")}],Qe=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.getDataList=function(){var n=t.props.projectId,r=t.state,a=r.searchValues,o=r.pageIndex,s=r.pageSize;t.setState({loading:!0}),t.promise&&t.promise.abort(),t.promise=M.Z.pagedEncryptRules((0,A.default)({projectId:n,pageIndex:o,pageSize:s},a,{isReturnTotal:o===1})),t.promise.then(function(l){t.setState({dataSource:l.encryptRules,loading:!1,totalCount:o===1?l.totalCount:t.state.totalCount})}).catch(function(l){t.setState({loading:!1})})},t.changeSearchParams=function(n,r){var a=t.state.searchValues;t.setState({searchValues:(0,A.default)({},a,(0,R.default)({},n,r)),pageIndex:1},y().debounce(t.getDataList,500))},t.handleDefaultAndDeleteRule=function(n){var r=n.encryptRuleId,a=n.requestFuncName,o=n.successTxt,s=o===void 0?_l("\u8BBE\u7F6E\u6210\u529F"):o,l=n.failTxt,u=l===void 0?_l("\u8BBE\u7F6E\u5931\u8D25"):l;t.setState({showMoreRuleId:null}),M.Z[a]({projectId:t.props.projectId,encryptRuleId:r}).then(function(p){p.success===!0?(alert(s),a==="setDefaultEncryptRule"?t.setState({dataSource:t.state.dataSource.map(function(m){return m.encryptRuleId===r?(0,A.default)({},m,{isDefault:!0}):(0,A.default)({},m,{isDefault:!1})})}):t.setState({dataSource:t.state.dataSource.filter(function(m){return m.encryptRuleId!==r})})):p.code===101?alert(_l("\u5220\u9664\u5931\u8D25\uFF0C\u5F15\u7528\u7684\u89C4\u5219\u4E0D\u80FD\u5220\u9664"),2):alert(u,2)})},t.state={loading:!1,pageIndex:1,pageSize:50,searchValues:{type:"",state:"",name:""},dataSource:[]},t.promise=null,t}return(0,T.default)(c,[{key:"componentDidMount",value:function(){this.getDataList()}},{key:"render",value:function(){var t=this,n=this.props,r=n.onClose,a=n.projectId,o=this.state,s=o.searchValues,l=o.dataSource,u=l===void 0?[]:l,p=o.showAddEditDialog,m=o.loading,f=o.pageIndex,v=o.totalCount,w=s.type,b=s.state,x=s.name,I=(0,U.XH)(a,$.UU.dataEnctypt);return e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(N.Z,{icon:"backspace",className:"Font22 ThemeHoverColor3 pointer",onClick:r}),e.createElement("div",{className:"Font17 bold flex mLeft10"},_l("\u52A0\u5BC6\u89C4\u5219"))),e.createElement(ie.ZP,{radius:!0,type:"primary",onClick:function(){if(I==="2"){(0,U.j0)(a,$.UU.dataEnctypt);return}t.setState({showAddEditDialog:!0})}},e.createElement(N.Z,{icon:"add",className:"Font18 mRight2"}),_l("\u65B0\u5EFA\u89C4\u5219"))),e.createElement("div",{className:"orgManagementContent flex flexColumn pTop16"},e.createElement("div",{className:"searchWrap flexRow"},e.createElement(C.default,{className:"mRight16 mdAntSelect",value:w,onChange:function(h){return t.changeSearchParams("type",h)},style:{width:160}},K.map(function(i){return e.createElement(he,{key:i.value,value:i.value},i.label)})),e.createElement(C.default,{value:b,className:"mRight16 mdAntSelect",onChange:function(h){return t.changeSearchParams("state",h)},style:{width:160}},Je.map(function(i){return e.createElement(he,{key:i.value,value:i.value},i.label)})),e.createElement(B.Z,{value:x,placeholder:_l("\u641C\u7D22\u89C4\u5219\u540D\u79F0"),style:{width:200},onChange:function(h){return t.changeSearchParams("name",h)}})),e.createElement("div",{className:"flexRow listHead"},e.createElement("div",{className:"flex"},_l("\u89C4\u5219\u540D\u79F0")),e.createElement("div",{className:"w150"},_l("\u72B6\u6001")),e.createElement("div",{className:"w150"},_l("\u52A0\u5BC6\u65B9\u5F0F")),e.createElement("div",{className:"w150"},_l("\u521B\u5EFA\u65F6\u95F4")),e.createElement("div",{className:"w150"},_l("\u521B\u5EFA\u4EBA")),e.createElement("div",{className:"w80"},_l(""))),e.createElement("div",{className:"flex flexColumn mTop16 mBottom16 listContent"},e.createElement(le.Z,{className:"flex"},m?e.createElement(ee.Z,{className:"mTop40"}):y().isEmpty(u)?e.createElement(ue.Z,{className:"w100 h100",detail:{icon:"icon-verify",desc:_l("\u65E0\u6570\u636E")}}):u.map(function(i){return e.createElement("div",{className:"flexRow listItem"},e.createElement("div",{className:"flex ellipsis"},i.name,!!i.remark&&e.createElement(q.Z,{text:i.remark},e.createElement(N.Z,{icon:"info_outline",className:"Gray_bd mLeft5"})),i.isDefault&&e.createElement("span",{className:"defaultRule bold"},_l("\u9ED8\u8BA4"))),e.createElement("div",{className:"w150"},e.createElement(Y.Z,{className:"mTop18",checked:i.state===1,text:i.state===1?_l("\u542F\u7528"):_l("\u505C\u7528"),onClick:function(W){M.Z.setEncryptRuleState({projectId:a,encryptRuleId:i.encryptRuleId,state:W?2:1}).then(function(ne){if(ne.success){var J=u.map(function(O){return O.encryptRuleId===i.encryptRuleId?(0,A.default)({},O,{state:W?0:1}):O});t.setState({dataSource:J})}else alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})}})),e.createElement("div",{className:"w150"},y().get(y().find(K,function(h){return h.value===i.type})||{},"label")),e.createElement("div",{className:"w150"},i.createTime),e.createElement("div",{className:"w150 flexRow"},e.createElement(oe.Z,{className:"circle mRight6",user:{userHead:i.createAccountAvatar,accountId:i.createAccountId},size:24,projectId:a}),i.createAccountName),e.createElement("div",{className:"w80 TxtCenter"},e.createElement(Xe.Z,{action:["click"],popupVisible:t.state.showMoreRuleId===i.encryptRuleId,onPopupVisibleChange:function(W){return t.setState({showMoreRuleId:W?i.encryptRuleId:null})},popup:function(){return e.createElement(be.Z,null,e.createElement(Q.Z,{onClick:function(){t.setState({showMoreRuleId:null}),Ge({projectId:t.props.projectId,encryptRuleId:i.encryptRuleId,ruleDetail:i,updateCurrentRow:function(J){var O=J.name,ft=J.remark,gt=u.map(function(ae){return ae.encryptRuleId===i.encryptRuleId?(0,A.default)({},ae,{name:O,remark:ft}):ae});t.setState({dataSource:gt})}})}},_l("\u8BE6\u60C5")),!i.isDefault&&i.state&&e.createElement(Q.Z,{onClick:function(){return t.handleDefaultAndDeleteRule({encryptRuleId:i.encryptRuleId,requestFuncName:"setDefaultEncryptRule"})}},_l("\u8BBE\u7F6E\u9ED8\u8BA4\u89C4\u5219")),!i.isSystem&&e.createElement(Q.Z,{onClick:function(){t.setState({showMoreRuleId:null}),(0,we.Z)({title:_l("\u5220\u9664 %0 \u52A0\u5BC6\u89C4\u5219",i.name),description:e.createElement("span",{className:"Gray"},_l("\u82E5\u6B64\u89C4\u5219\u6709\u88AB\u5B57\u6BB5\u4F7F\u7528\uFF0C\u5219\u8BE5\u89C4\u5219\u4E0D\u80FD\u5220\u9664")),okText:_l("\u5220\u9664"),buttonType:"danger",onOk:function(){t.handleDefaultAndDeleteRule({encryptRuleId:i.encryptRuleId,requestFuncName:"removeEncryptRule",successTxt:_l("\u5220\u9664\u6210\u529F"),failTxt:_l("\u5220\u9664\u5931\u8D25")})}})}},_l("\u5220\u9664")))},popupAlign:{offset:[-180,0],points:["tr","br"]}},e.createElement(N.Z,{icon:"moreop",className:"Gray_9e Hand Font18 Hover_21"}))))})),e.createElement(Ke.Z,{total:v,pageIndex:f,pageSize:50,onChange:function(h){return t.setState({pageIndex:h},t.getDataList)}}))),p&&e.createElement(ke,{projectId:a,visible:p,encryptList:K,ruleList:u,onCancel:function(){return t.setState({showAddEditDialog:!1})},getDataList:function(){return t.setState({pageIndex:1},t.getDataList)}}))}}]),c}(e.Component),Et=d(67272),X=d(51024),bt=d(10524),fe=d(31059),V=d(99924),Ye=(0,k.Z)([`
  .formModuleTitle {
    color: #333333;
    font-size: 15px;
    font-weight: 600;
    margin: 25px 0 32px 30px;
  }
  .formItem {
    display: flex;
    color: #333333;
    font-size: 13px;
    margin-bottom: 10px;
    .formLabel {
      width: 140px;
      text-align: right;
      margin-right: 8px;
      margin-top: 8px;
      &.width135 {
        width: 135px;
        margin-right: 20px;
      }
    }
    .formRight {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      .formInput {
        display: flex;
        align-items: center;
        & > input,
        & > .ant-select {
          width: 40%;
          height: 36px;
          .ant-select-selector {
            width: 100%;
            height: 100%;
          }
        }
      }
      &.directionRow {
        flex-direction: row;
      }
    }
    .errorMsg {
      padding-top: 4px;
      height: 25px;
      color: #fb0038;
    }
  }
  .mLeft150 {
    margin-left: 150px;
  }
`],[`
  .formModuleTitle {
    color: #333333;
    font-size: 15px;
    font-weight: 600;
    margin: 25px 0 32px 30px;
  }
  .formItem {
    display: flex;
    color: #333333;
    font-size: 13px;
    margin-bottom: 10px;
    .formLabel {
      width: 140px;
      text-align: right;
      margin-right: 8px;
      margin-top: 8px;
      &.width135 {
        width: 135px;
        margin-right: 20px;
      }
    }
    .formRight {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      .formInput {
        display: flex;
        align-items: center;
        & > input,
        & > .ant-select {
          width: 40%;
          height: 36px;
          .ant-select-selector {
            width: 100%;
            height: 100%;
          }
        }
      }
      &.directionRow {
        flex-direction: row;
      }
    }
    .errorMsg {
      padding-top: 4px;
      height: 25px;
      color: #fb0038;
    }
  }
  .mLeft150 {
    margin-left: 150px;
  }
`]),ge=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/,ve=new RegExp(/^([1-9](\d{0,3}))$|^([1-5]\d{4})$|^(6[0-4]\d{3})$|^(65[0-4]\d{2})$|^(655[0-2]\d)$|^(6553[0-5])$/),_e=S.ZP.div(Ye),qe=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.handleSaveWebProxy=function(){var n=t.state,r=n.http,a=n.https,o=n.ip,s=n.portNumber,l=n.openIdentityValidate,u=n.userName,p=n.webProxyPassword;t.setState({isSaveWebProxy:!0}),!(!r&&!a||!o||!ge.test(o)||!ve.test(s)||!s||l&&(!u||!p))&&(t.setState({saveDisabled:!0}),V.Z.editApiProxySettings({type:r&&a?0:r?1:a?2:"",ip:o,port:s,openIdentityValidate:l,username:l?u:null,password:l?(0,U.HI)(p):null,projectId:t.props.projectId}).then(function(m){t.setState({isSaveWebProxy:!1,saveDisabled:!1}),m?alert(_l("\u4FDD\u5B58\u6210\u529F")):alert(_l("\u4FDD\u5B58\u5931\u8D25"),2)}).catch(function(m){t.setState({saveDisabled:!1})}))},t.changeValue=function(n,r,a){var o=void 0;switch(a){case"checkbox":o=n.target.checked;break;case"switch":o=!n;break;case"input":o=n.target.value;break;default:}t.setState((0,R.default)({},r,o))},t.state={loading:!0},t}return(0,T.default)(c,[{key:"componentDidMount",value:function(){var t=this;V.Z.getApiProxySettings({projectId:this.props.projectId}).then(function(n){n&&t.setState({http:n.type===0||n.type===1,https:n.type===0||n.type===2,ip:n.ip,portNumber:n.port,openIdentityValidate:n.openIdentityValidate,userName:n.userName,webProxyPassword:n.password}),t.setState({loading:!1})}).catch(function(n){t.setState({loading:!1})})}},{key:"render",value:function(){var t=this,n=this.props.onClose,r=n===void 0?function(){}:n,a=this.state,o=a.http,s=a.https,l=a.ip,u=a.portNumber,p=a.openIdentityValidate,m=a.userName,f=a.webProxyPassword,v=a.isSaveWebProxy,w=a.loading;return e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(N.Z,{icon:"backspace",className:"Font22 ThemeHoverColor3 pointer",onClick:r}),e.createElement("div",{className:"Font17 bold flex mLeft10"},_l("API\u7F51\u7EDC\u4EE3\u7406")))),w?e.createElement("div",{className:"flex"},e.createElement(ee.Z,null)):e.createElement(_e,{className:"formBox"},e.createElement("div",{className:"formModuleTitle"},_l("\u4EE3\u7406\u670D\u52A1\u5668\u8BBE\u7F6E")),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"formLabel width135"},e.createElement("span",{className:"TxtMiddle Red"},"*"),_l("\u63A5\u53E3\u7C7B\u578B")),e.createElement("div",{className:"formRight flexRow"},e.createElement("div",{className:"formInput directionRow pTop8"},e.createElement(fe.default,{checked:o,onChange:function(x){t.changeValue(x,"http","checkbox")}},"HTTP"),e.createElement(fe.default,{checked:s,onChange:function(x){t.changeValue(x,"https","checkbox")}},"HTTPS")),e.createElement("div",{className:"errorMsg"},v&&!o&&!s?_l("\u8BF7\u9009\u62E9\u63A5\u53E3\u7C7B\u578B"):""))),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"formLabel width135"},e.createElement("span",{className:"TxtMiddle Red"},"*"),_l("\u670D\u52A1\u5668\u5730\u5740")),e.createElement("div",{className:"formRight"},e.createElement("div",{className:"formInput flexRow directionRow"},e.createElement(X.default,{style:{width:180},placeholder:_l("IP\u3001\u57DF\u540D"),value:l,onChange:function(x){t.changeValue(x,"ip","input")}}),e.createElement("span",{className:"mLeft10 mRight10 LineHeight32"},":"),e.createElement(X.default,{style:{width:100},placeholder:_l("\u7AEF\u53E3\u53F7"),value:u,onChange:function(x){t.changeValue(x,"portNumber","input")}})),e.createElement("div",{className:"errorMsg"},v&&(!l||!u?_l("\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740"):ge.test(l)?ve.test(u)?"":_l("\u65E0\u6548\u7684\u7AEF\u53E3\u53F7"):_l("\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E"))))),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"formLabel width135"},_l("\u8EAB\u4EFD\u9A8C\u8BC1")),e.createElement("div",{className:"formRight pTop8"},e.createElement("div",{className:"formInput"},e.createElement(Y.Z,{size:"small",checked:p,onClick:function(x){t.changeValue(x,"openIdentityValidate","switch")}})),e.createElement("div",{className:"errorMsg"}))),p&&e.createElement("div",{className:"formItem"},e.createElement("div",{className:"formLabel width135"},e.createElement("span",{className:"TxtMiddle Red"},"*"),_l("\u7528\u6237\u540D")),e.createElement("div",{className:"formRight"},e.createElement("div",{className:"formInput"},e.createElement(X.default,{placeholder:_l("\u7528\u6237\u540D"),style:{width:302},value:m,onChange:function(x){t.changeValue(x,"userName","input")}})),e.createElement("div",{className:"errorMsg"},v&&p&&!m?_l("\u8BF7\u8F93\u5165\u7528\u6237\u540D"):""))),p&&e.createElement("div",{className:"formItem"},e.createElement("div",{className:"formLabel width135"},e.createElement("span",{className:"TxtMiddle Red"},"*"),_l("\u5BC6\u7801")),e.createElement("div",{className:"formRight"},e.createElement("div",{className:"formInput"},e.createElement(X.default.Password,{placeholder:_l("\u5BC6\u7801"),style:{width:302},value:f,autocomplete:"new-password",onChange:function(x){t.changeValue(x,"webProxyPassword","input")}})),e.createElement("div",{className:"errorMsg"},v&&p&&!f?_l("\u8BF7\u8F93\u5165\u5BC6\u7801"):""))),e.createElement(ie.ZP,{className:"mLeft150",radius:!0,type:"primary",onClick:this.handleSaveWebProxy,disabled:this.state.saveDisabled},this.state.saveDisabled?_l("\u4FDD\u5B58\u4E2D"):_l("\u4FDD\u5B58"))))}}]),c}(e.Component),et=d(47426),tt=d(46593),nt=d.n(tt),at=d(85997),rt=d(75809),lt=d(60510),ot=d(27749),H=d(49779),it=(0,k.Z)([`
  box-sizing: border-box;
  margin: 16px 0 0;
  border: 1px solid #d9d9d9;
  padding: 24px 8px;
  position: relative;

  .userItem {
    position: relative;
    height: 40px;
    line-height: 40px;
    border-radius: 11px;
    display: inline-block;
    margin-right: 8px;
    padding: 0 15px;

    .delete {
      display: none;
      font-size: 24px;
    }

    &.active,
    &:hover {
      .delete {
        display: block;
        position: absolute;
        right: -5px;
        top: -5px;
      }
    }

    .avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      background: #eaeaea;
    }

    .name {
      color: #333333;
      font-size: 13px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
    }

    .depIcon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      background: #eaeaea;
      color: #2196f3;
      font-size: 12px;
      line-height: 24px;
      text-align: center;
      &.orgRoleIcon {
        background-color: #ffad00;
        color: #fff;
      }
    }
  }

  .moreActionDia {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 1;
    line-height: 30px;
    text-align: left;
    width: 180px;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
    border-radius: 3px;
    padding: 10px 0;
    box-sizing: border-box;

    li {
      padding: 0 24px;

      &:hover {
        background: #eaeaea;
      }
    }
  }
`],[`
  box-sizing: border-box;
  margin: 16px 0 0;
  border: 1px solid #d9d9d9;
  padding: 24px 8px;
  position: relative;

  .userItem {
    position: relative;
    height: 40px;
    line-height: 40px;
    border-radius: 11px;
    display: inline-block;
    margin-right: 8px;
    padding: 0 15px;

    .delete {
      display: none;
      font-size: 24px;
    }

    &.active,
    &:hover {
      .delete {
        display: block;
        position: absolute;
        right: -5px;
        top: -5px;
      }
    }

    .avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      background: #eaeaea;
    }

    .name {
      color: #333333;
      font-size: 13px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
    }

    .depIcon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      background: #eaeaea;
      color: #2196f3;
      font-size: 12px;
      line-height: 24px;
      text-align: center;
      &.orgRoleIcon {
        background-color: #ffad00;
        color: #fff;
      }
    }
  }

  .moreActionDia {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 1;
    line-height: 30px;
    text-align: left;
    width: 180px;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
    border-radius: 3px;
    padding: 10px 0;
    box-sizing: border-box;

    li {
      padding: 0 24px;

      &:hover {
        background: #eaeaea;
      }
    }
  }
`]),st=(0,k.Z)([`
  flex: 1;
  overflow-y: auto;
`],[`
  flex: 1;
  overflow-y: auto;
`]),ct=(0,k.Z)([`
  height: 66px;
  padding: 15px 0;
  background-color: #fff;
  .saveBtn,
  .delBtn {
    height: 36px;
    line-height: 36px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
  }

  .saveBtn {
    margin-right: 20px;
    background: #1e88e5;
    color: #fff;
    &:hover {
      background: #1565c0;
    }
    &.disabled {
      color: #fff;
      background: #b2dbff;
      cursor: not-allowed;
      &:hover {
        background: #b2dbff;
      }
    }
  }
  .delBtn {
    border: 1px solid #eaeaea;
    &:hover {
      border: 1px solid #ccc;
    }
    &.disabled {
      color: #eaeaea;
      cursor: not-allowed;
      &:hover {
        border: 1px solid #eaeaea;
      }
    }
  }
`],[`
  height: 66px;
  padding: 15px 0;
  background-color: #fff;
  .saveBtn,
  .delBtn {
    height: 36px;
    line-height: 36px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0;
  }

  .saveBtn {
    margin-right: 20px;
    background: #1e88e5;
    color: #fff;
    &:hover {
      background: #1565c0;
    }
    &.disabled {
      color: #fff;
      background: #b2dbff;
      cursor: not-allowed;
      &:hover {
        background: #b2dbff;
      }
    }
  }
  .delBtn {
    border: 1px solid #eaeaea;
    &:hover {
      border: 1px solid #ccc;
    }
    &.disabled {
      color: #eaeaea;
      cursor: not-allowed;
      &:hover {
        border: 1px solid #eaeaea;
      }
    }
  }
`]),dt=S.ZP.div(it),pt=S.ZP.div(st),mt=S.ZP.div(ct),ut=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.addUser=function(){var n=t.props.projectId,r={unique:!1,projectId:n,filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,dataRange:2,callback:function(o){return t.addDataFn(o,1)}};(0,rt.Z)({fromAdmin:!0,showMoreInvite:!1,SelectUserSettings:r})},t.addDept=function(){var n=t.props.projectId;(0,lt.Z)({projectId:n,unique:!1,fromAdmin:!0,selectedDepartment:[],showCreateBtn:!1,selectFn:function(a){return t.addDataFn(a,2)}})},t.addOrgRoles=function(){var n=t.props.projectId;(0,ot.Z)({projectId:n,onSave:function(a){return t.addDataFn(a,3)}})},t.addDataFn=function(n,r){var a=t.state.whiteList,o=a.filter(function(l){return l.sourceType===r}).map(function(l){return l.id}),s=n.filter(function(l){return!y().includes(o,r===1?l.accountId:r===2?l.departmentId:l.organizeId)}).map(function(l){return{id:r===1?l.accountId:r===2?l.departmentId:l.organizeId,name:r===1?l.fullname:r===2?l.departmentName:l.organizeName,sourceType:r,avatar:r===1?l.avatar:void 0}});t.setState({whiteList:a.concat(s)})},t.handleSave=function(){var n=t.props.projectId,r=t.state,a=r.whiteList,o=r.initialWhiteList,s=r.limitType,l=r.initialLimitType;if(!(y().isEqual(s,l)&&y().isEqual(a,o))){var u=!y().isEqual(s,l)&&!y().isEqual(a,o)?[H.Z.editAttachmentWhiteList({projectId:n,whiteList:a}),H.Z.editAttachmentSetting({projectId:n,status:1,limitType:s})]:y().isEqual(a,o)?[H.Z.editAttachmentSetting({projectId:n,status:1,limitType:s})]:[H.Z.editAttachmentWhiteList({projectId:n,whiteList:a})];nt().all(u).then(function(p){p.every(function(m){return m===!0})&&(alert(_l("\u4FDD\u5B58\u6210\u529F")),t.setState({initialLimitType:s,initialWhiteList:a}),t.props.updateSettingData(s,a))})}},t.renderContent=function(){var n=t.state,r=n.showMoreActionSelf,a=n.whiteList,o=a===void 0?[]:a;return e.createElement(dt,{className:"listCon"},e.createElement("div",{className:z()({mBottom15:o.length})},o.map(function(s){var l=s.id,u=s.name,p=s.sourceType,m=s.avatar;return e.createElement("div",{key:l,className:z()("userItem")},e.createElement(N.Z,{className:"Font24 Red delete Hand",icon:"cancel",onClick:function(){return t.setState({whiteList:o.filter(function(v){return s.id!==v.id})})}}),y().includes([2,3],p)?e.createElement("span",{className:z()("depIcon",{orgRoleIcon:p===3})},e.createElement(N.Z,{className:"department Hand",icon:p===2?"department":"user"})):e.createElement(oe.Z,{className:"InlineBlock",accountId:l,user:{userHead:m,accountId:l},size:24}),e.createElement("span",{className:"name"},u))})),e.createElement("span",{className:"ThemeColor Font13 Hand mLeft15 Relative",onClick:function(l){return t.setState({showMoreActionSelf:!0})}},e.createElement(N.Z,{className:"Font16 mRight5",icon:"add"}),_l("\u6DFB\u52A0"),e.createElement(at.Z,{onClickAway:function(){return t.setState({showMoreActionSelf:!1})},showMoreAction:r,addUser:t.addUser,addDept:t.addDept,addOrgRoles:t.addOrgRoles})))},t.state={limitType:g.limitType,whiteList:g.whiteList||[],initialLimitType:g.limitType,initialWhiteList:g.whiteList||[],showMoreActionSelf:!1},t}return(0,T.default)(c,[{key:"render",value:function(){var t=this,n=this.props.onClose,r=n===void 0?function(){}:n,a=this.state,o=a.limitType,s=a.initialLimitType,l=a.whiteList,u=a.initialWhiteList,p=y().isEqual(o,s)&&y().isEqual(l,u);return e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(N.Z,{icon:"backspace",className:"Font22 ThemeHoverColor3 pointer",onClick:r}),e.createElement("div",{className:"Font17 bold flex mLeft10"},_l("\u9644\u4EF6\u4E0B\u8F7D")))),e.createElement("div",{className:"orgManagementContent flexColumn"},e.createElement(pt,null,e.createElement("div",{className:"Font15 bold mBottom20"},_l("\u9650\u5236\u65B9\u5F0F")),e.createElement(et.ZP,{size:"middle",checkedValue:o,data:[{text:_l("\u7981\u6B62\u6240\u6709\u8BBE\u5907\u4E0B\u8F7D"),value:0},{text:_l("\u7981\u6B62\u6240\u6709Web\u79FB\u52A8\u7AEF\u4E0B\u8F7D"),value:1}],onChange:function(f){return t.setState({limitType:f})}}),e.createElement("div",{className:"Font15 bold mTop40"},_l("\u767D\u540D\u5355")),e.createElement("div",{className:"Gray_9e Font12 mBottom20"},_l("\u5141\u8BB8\u4EE5\u4E0B\u6210\u5458\u4E0B\u8F7D\uFF0C\u4E0D\u53D7\u300C\u9650\u5236\u65B9\u5F0F\u300D\u7684\u7BA1\u63A7")),this.renderContent()),e.createElement(mt,{className:"flexRow"},e.createElement("div",{className:z()("saveBtn",{disabled:p}),onClick:this.handleSave},_l("\u4FDD\u5B58")),e.createElement("div",{className:z()("delBtn",{disabled:p}),onClick:function(){return t.setState({limitType:s,whiteList:u})}},_l("\u53D6\u6D88")))))}}]),c}(e.Component),ht=function(E){(0,j.default)(c,E);function c(g){(0,Z.default)(this,c);var t=(0,P.default)(this,(c.__proto__||D()(c)).call(this,g));return t.getEnabledWatermark=function(){V.Z.getEnabledWatermark({projectId:F.Z.projectId}).then(function(n){t.setState({watermark:n.enabledWatermark})})},t.getApiProxyState=function(){V.Z.getApiProxyState({projectId:F.Z.projectId}).then(function(n){t.setState({webProxy:n})})},t.getAttachmentSetting=function(){H.Z.getAttachmentSetting({projectId:F.Z.projectId}).then(function(n){t.setState({limitFileDownload:n.status,limitType:n.limitType,whiteList:n.whiteList})})},t.setEnabledWatermark=function(){var n=t.state.watermark;V.Z.setEnabledWatermark({projectId:F.Z.projectId,enabledWatermark:!n}).then(function(r){r&&(t.setState({watermark:!n}),setTimeout(function(){location.reload()},500))})},t.updateWebProxyState=function(){var n=t.state.webProxy;V.Z.setApiProxyState({projectId:F.Z.projectId,state:!n}).then(function(r){r?t.setState({webProxy:!n}):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})},t.setLimitDownloadStatus=function(){var n=t.state,r=n.limitFileDownload,a=n.limitType;H.Z.editAttachmentSetting({projectId:F.Z.projectId,status:r?0:1,limitType:a}).then(function(o){o&&t.setState({limitFileDownload:!r})})},t.updateSettingData=function(n,r){t.setState({limitType:n,whiteList:r})},t.state={watermark:!1,showWebProxySetting:!1,showLimitDownload:!1},t}return(0,T.default)(c,[{key:"componentDidMount",value:function(){this.getEnabledWatermark(),this.getApiProxyState(),this.getAttachmentSetting(),location.pathname.includes("isShowEncryptRules")&&this.setEncryptRules()}},{key:"render",value:function(){var t=this,n=this.state,r=n.showEncryptRules,a=n.watermark,o=n.showWebProxySetting,s=n.webProxy,l=n.limitFileDownload,u=n.showLimitDownload,p=n.limitType,m=n.whiteList,f=F.Z.projectId;return r?e.createElement(Qe,{onClose:function(){return t.setState({showEncryptRules:!1})},projectId:f}):o?e.createElement(qe,{onClose:function(){return t.setState({showWebProxySetting:!1})},projectId:f}):u?e.createElement(ut,{projectId:f,limitType:p,whiteList:m,onClose:function(){return t.setState({showLimitDownload:!1})},updateSettingData:this.updateSettingData}):e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader Font17"},_l("\u6570\u636E")),e.createElement(Ee.Z,{projectId:f,configs:[{key:"watermark",title:_l("\u5C4F\u5E55\u6C34\u5370"),description:_l("\u542F\u7528\u6C34\u5370\u914D\u7F6E\u540E\uFF0C\u5C06\u5728\u7EC4\u7EC7\u6240\u6709\u5E94\u7528\u5185\u663E\u793A\u5F53\u524D\u4F7F\u7528\u8005\u7684\u59D3\u540D"),showSlideIcon:!1,showSwitch:!0,switchChecked:a,clickSwitch:this.setEnabledWatermark},{key:"limitFileDownload",title:_l("\u9644\u4EF6\u4E0B\u8F7D"),description:_l("\u7981\u6B62\u6210\u5458\u4E0B\u8F7D\u5E94\u7528\u3001\u8BA8\u8BBA\u9644\u4EF6\uFF0C\u4FDD\u62A4\u7EC4\u7EC7\u6587\u4EF6\u5B89\u5168"),showSlideIcon:!1,showSwitch:!0,showSetting:!!l,switchChecked:!!l,customContent:l?p===0?_l("\u5DF2\u8BBE\u7F6E\uFF1A\u7981\u6B62\u6240\u6709\u8BBE\u5907\u4E0B\u8F7D"):_l("\u5DF2\u8BBE\u7F6E\uFF1A\u7981\u6B62\u6240\u6709Web\u79FB\u52A8\u7AEF\u4E0B\u8F7D"):void 0,clickSwitch:this.setLimitDownloadStatus,clickSetting:function(){return t.setState({showLimitDownload:!0})}},{key:"addressVisibleRange",title:_l("\u52A0\u5BC6\u89C4\u5219"),description:_l("\u914D\u7F6E\u5DE5\u4F5C\u8868\u5B57\u6BB5\u52A0\u5BC6\u5B58\u50A8\u65F6\u53EF\u4EE5\u9009\u62E9\u7684\u52A0\u5BC6\u65B9\u5F0F"),showSlideIcon:!0,featureId:$.UU.dataEnctypt,onClick:function(){return t.setState({showEncryptRules:!0})}},{key:"webProxy",title:_l("API\u7F51\u7EDC\u4EE3\u7406"),description:e.createElement("span",null,_l("\u5728\u53D1\u9001API\u8BF7\u6C42\u65F6\u53EF\u9009\u62E9\u901A\u8FC7\u8BBE\u7F6E\u7684\u4EE3\u7406\u670D\u52A1\u5668\u53D1\u9001"),e.createElement(xe.Z,{text:_l("\u5E2E\u52A9"),type:3,href:"https://help.mingdao.com/org/security#apiproxy"})),showSlideIcon:!1,showSetting:s,showSwitch:!0,switchChecked:s,featureId:$.UU.apiRequestProxy,clickSwitch:this.updateWebProxyState,clickSetting:function(){return t.setState({showWebProxySetting:!0})}}]}))}}]),c}(e.Component)}}]);
