"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[2149],{82149:(oe,u,t)=>{t.r(u),t.d(u,{default:()=>k});var re=t(80176),R=t(2307),le=t(67272),b=t(51024),se=t(52262),N=t(65400),f=t(33867),U=t(70801),l=t(12424),W=t(57853),O=t(86735),e=t(67294),T=t(5017);const i={getPlatformAdmins:function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivatePlatformAdmin","GetPlatformAdmins",r,a)},addPlatformAdmins:function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivatePlatformAdmin","AddPlatformAdmins",r,a)},removePlatformAdmins:function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("PrivatePlatformAdmin","RemovePlatformAdmins",r,a)}};var L=t(13739),z=t(75809),H=t(96486),j=t.n(H),D=(0,O.Z)([`
  .ant-table-thead th {
    color: #757575;
    background: #fff;
  }
  .headerOperate {
    justify-content: space-between;
    .icon-search {
      right: 10px;
    }
    .ant-input {
      padding-right: 30px;
    }
  }
  .tableWrapper {
    min-height: 0;
  }
`],[`
  .ant-table-thead th {
    color: #757575;
    background: #fff;
  }
  .headerOperate {
    justify-content: space-between;
    .icon-search {
      right: 10px;
    }
    .ant-input {
      padding-right: 30px;
    }
  }
  .tableWrapper {
    min-height: 0;
  }
`]),F=T.ZP.div(D),G=[{title:_l("\u59D3\u540D"),dataIndex:"fullname",key:"fullname",render:function(r,a){return e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(W.Z,{key:a.accountId,size:32,user:{accountId:a.accountId,userHead:a.avatar}}),e.createElement("div",{className:"mLeft10"},a.fullname))}},{title:_l("\u624B\u673A"),dataIndex:"mobilePhone",key:"mobilePhone"},{title:_l("\u90AE\u7BB1"),dataIndex:"email",key:"email"},{title:_l("\u64CD\u4F5C"),dataIndex:"operate",key:"operate",render:function(){return e.createElement("a",{className:"removeUser"},_l("\u79FB\u9664"))}}],K=function(r){var a=(0,e.useState)(!0),v=(0,l.Z)(a,2),w=v[0],g=v[1],B=(0,e.useState)([]),h=(0,l.Z)(B,2),p=h[0],M=h[1],V=(0,e.useState)(1),A=(0,l.Z)(V,2),P=A[0],y=A[1],J=(0,e.useState)(0),I=(0,l.Z)(J,2),Q=I[0],X=I[1],Y=(0,e.useState)(""),S=(0,l.Z)(Y,2),x=S[0],$=S[1],q=(0,L.Hd)(),E=(0,l.Z)(q,2),_=E[0],ee=E[1],C=10,Z=j().get(_,"height"),te=function(){(0,z.Z)({fromType:0,sourceId:md.global.Account.accountId,showMoreInvite:!1,SelectUserSettings:{filterAccountIds:p.map(function(n){return n.accountId}),callback:function(d){i.addPlatformAdmins({accountIds:d.map(function(o){return o.accountId})}).then(function(o){o&&c()})}}})},ne=function(n){U.Z.confirm({title:_l("\u786E\u5B9A\u79FB\u9664%0 ?",n.fullname),onOk:function(){i.removePlatformAdmins({accountIds:[n.accountId]}).then(function(o){o&&c()})}})},c=function(){g(!0),i.getPlatformAdmins({pageIndex:P,pageSize:C,keywords:x}).then(function(n){var d=n.count,o=n.list;g(!1),M(o),X(d)})};return(0,e.useEffect)(function(){c()},[P,x]),e.createElement(F,{className:"privateCardWrap big h100 flexColumn"},e.createElement("div",{className:"Font17 bold mBottom8"},_l("\u7BA1\u7406\u5458")),e.createElement("div",{className:"Gray_9e mBottom18"},_l("\u5E73\u53F0\u7BA1\u7406\u5458\u8D26\u53F7\u7BA1\u7406\uFF0C\u53EF\u4ECE\u7BA1\u7406\u5458\u6240\u5C5E\u7EC4\u7EC7\u4E2D\u76F4\u63A5\u6DFB\u52A0\u7BA1\u7406\u5458\u6210\u5458\uFF0C\u4E5F\u53EF\u79FB\u9664\u6210\u5458")),e.createElement("div",{className:"flexRow valignWrapper headerOperate"},e.createElement(N.default,{type:"primary",onClick:te},e.createElement(f.Z,{icon:"add"}),_l("\u7BA1\u7406\u5458")),e.createElement("div",{className:"flexRow valignWrapper searchWrapper Relative"},e.createElement(b.default,{placeholder:_l("\u8BF7\u8F93\u5165\u59D3\u540D"),defaultValue:"",onKeyDown:function(n){n.which===13&&($(n.target.value.trim()),y(1))}}),e.createElement(f.Z,{className:"Absolute Gray_9e Font17",icon:"search"}))),e.createElement("div",{className:"flexColumn flex mTop20 tableWrapper",ref:ee},e.createElement(R.Z,{loading:w,columns:G,dataSource:p,locale:{emptyText:_l("\u6682\u65E0\u6570\u636E")},pagination:{position:["none","bottomCenter"],pageSize:C,total:Q,onChange:function(n){y(n)}},scroll:{scrollToFirstRowOnChange:!1,y:(Z>500?Z-130:500)+"px"},onRow:function(n){return{onClick:function(o){var ae=o.target;ae.classList.contains("removeUser")&&ne(n)}}}})))};const k=K}}]);
