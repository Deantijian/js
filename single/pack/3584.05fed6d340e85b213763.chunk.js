"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3584],{73584:(oe,S,n)=>{n.r(S),n.d(S,{default:()=>ae});var w=n(33867),L=n(6100),Z=n(54208),k=n(85105),W=n.n(k),j=n(99663),F=n(22600),T=n(49135),V=n(93196),u=n(86735),e=n(67294),g=n(71893),A=(0,u.Z)([`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #bdbdbd;
  .Font50 {
    font-size: 50px;
    margin-bottom: 27px;
  }
`],[`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #bdbdbd;
  .Font50 {
    font-size: 50px;
    margin-bottom: 27px;
  }
`]),D=g.ZP.div(A);function O(){return e.createElement(D,{className:"flexColumn"},e.createElement("i",{className:"icon icon-h5_search Font50"}),e.createElement("div",{className:"Gray_bd Font17 Bold"},_l("\u6CA1\u6709\u641C\u7D22\u7ED3\u679C")))}var y=n(12424),ce=n(48860),z=n(81233),P=n.n(z),B=n(93967),G=n.n(B),M=(0,u.Z)([`
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 10px 10px 10px 12px;
  .searchWrap {
    height: 32px;
    background-color: rgb(255, 255, 255);
    border-radius: 24px;
    padding: 8px 14px;
  }
  .filterWrap {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 50%;
    margin-left: 10px;
  }
`],[`
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 10px 10px 10px 12px;
  .searchWrap {
    height: 32px;
    background-color: rgb(255, 255, 255);
    border-radius: 24px;
    padding: 8px 14px;
  }
  .filterWrap {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 50%;
    margin-left: 10px;
  }
`]),U=(0,u.Z)([`
  &.filterStepListWrapper {
    z-index: 100;
    position: fixed;
  }
`],[`
  &.filterStepListWrapper {
    z-index: 100;
    position: fixed;
  }
`]),K=(0,u.Z)([`
  width: 335px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 18px 0 10px 16px;
  border-radius: 14px 0px 0px 14px;
  .closeIcon {
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    background: #e6e6e6;
    border-radius: 50%;
  }
  .appList {
    flex: 1;
    overflow-y: auto;
  }
  .appItem {
    display: flex;
    align-items: center;
    height: 40px;
  }
`],[`
  width: 335px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 18px 0 10px 16px;
  border-radius: 14px 0px 0px 14px;
  .closeIcon {
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    background: #e6e6e6;
    border-radius: 50%;
  }
  .appList {
    flex: 1;
    overflow-y: auto;
  }
  .appItem {
    display: flex;
    align-items: center;
    height: 40px;
  }
`]),$=g.ZP.div(M),Y=(0,g.ZP)(P())(U),H=g.ZP.div(K);function J(I){var f=I.apps,x=f===void 0?[]:f,t=I.handleSearchList,i=t===void 0?function(){}:t,s=(0,e.useState)(!1),a=(0,y.Z)(s,2),d=a[0],r=a[1],o=(0,e.useState)(),p=(0,y.Z)(o,2),h=p[0],b=p[1],R=(0,e.useState)("all"),v=(0,y.Z)(R,2),l=v[0],E=v[1];return e.createElement($,null,e.createElement("div",{className:"searchWrap flexRow alignItemsCenter flex"},e.createElement("i",{className:"icon icon-h5_search Gray_9e Font16 mRight10"}),e.createElement("input",{type:"search",className:"pAll0 Border0 w100",placeholder:_l("\u641C\u7D22"),value:h,onChange:function(m){var C=m.target.value;b(C),i({searchValue:C})},onKeyDown:function(m){m.which===13&&i({searchValue:h})}})),e.createElement("div",{className:"filterWrap",onClick:function(){r(!0)}},e.createElement("i",{className:G()("icon icon-filter Font20",{Gray_9e:l==="all",ThemeColor:l!=="all"})})),d?e.createElement(Y,{className:"filterStepListWrapper",position:"right",sidebar:e.createElement(H,null,e.createElement("div",{className:"header flexRow alignItemsCenter mBottom10 pRight16"},e.createElement("div",{className:"Font17 bold flex"},_l("\u6309\u5E94\u7528")),e.createElement("div",{className:"closeIcon",onClick:function(){return r(!1)}},e.createElement("i",{className:"icon icon-close Gray_9e"}))),e.createElement("div",{className:"appList pRight16"},[{appId:"all",appName:_l("\u5168\u90E8")}].concat(x).map(function(c){return e.createElement("div",{key:c.appId,className:"Font14 appItem",onClick:function(){E(c.appId),i({appId:c.appId}),r(!1)}},e.createElement("div",{className:"flex ellipsis"},c.appName),l===c.appId&&e.createElement("i",{className:"icon icon-done ThemeColor Font18"}))}))),open:d,onOpenChange:function(){return r(!d)}},e.createElement(e.Fragment,null)):"")}var Q=n(75915),X=n(70039),q=n(10358),ee=n(15577),ne=(0,u.Z)([`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  .recordList {
    overflow-y: auto;
    background: #fff;
    .recordItem {
      height: 48px;
      align-items: center;
      padding: 0 15px;
      &:last-child {
        .recordTitle {
          border: none !important;
        }
      }
    }
    .recordIconWrap {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      text-align: center;
    }
    .recordTitle {
      min-width: 0;
      height: 100%;
      line-height: 48px;
      border-bottom: 1px solid #eaeaea;
    }
  }
`],[`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  .recordList {
    overflow-y: auto;
    background: #fff;
    .recordItem {
      height: 48px;
      align-items: center;
      padding: 0 15px;
      &:last-child {
        .recordTitle {
          border: none !important;
        }
      }
    }
    .recordIconWrap {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      text-align: center;
    }
    .recordTitle {
      min-width: 0;
      height: 100%;
      line-height: 48px;
      border-bottom: 1px solid #eaeaea;
    }
  }
`]),te=g.ZP.div(ne),ae=function(I){(0,V.default)(f,I);function f(x){(0,j.default)(this,f);var t=(0,T.default)(this,(f.__proto__||W()(f)).call(this,x));return t.getData=function(){var i=_.get(t.props,"match.params")||{},s=i.projectId;s&&(t.setState({loading:!0}),q.Z.getAllFavorites({projectId:s,isRefresh:1}).then(function(a){var d=a.reduce(function(r,o){return r.some(function(p){return p.appId===o.appId})||r.push(o),r},[]);t.setState({collectRecords:a,loading:!1,apps:d})}).catch(function(a){t.setState({collectRecords:[],loading:!1})}))},t.handleSearchList=function(i){var s=i.appId,a=i.searchValue,d=t.state.collectRecords;t.setState({loading:!0});var r=_.clone(d),o=(a||"").trim();s&&(r=_.filter(d,function(p){return p.appId===s})),o&&(r=r.filter(function(p){return new RegExp(o.toUpperCase()).test(p.title)})),t.setState({selectAppId:s,searchValue:o,searchRecords:r,loading:!1})},t.state={loading:!1,collectRecords:[],searchRecords:[],collectRecord:{},apps:[]},t}return(0,F.default)(f,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this,i=_.get(this.props,"match.params")||{},s=i.projectId,a=this.state,d=a.collectRecords,r=a.loading,o=a.selectAppId,p=a.searchRecords,h=a.collectRecord,b=a.searchValue,R=a.apps,v=o&&o!=="all"||b?p:d;return e.createElement(te,null,e.createElement(J,{projectId:s,apps:R,selectAppId:o,handleSearchList:this.handleSearchList}),e.createElement("div",{className:"recordList flex"},r?e.createElement(Z.Z,null):(o||b)&&_.isEmpty(v)?e.createElement(O,null):v.map(function(l){var E=l.favoriteId,c=l.title,m=l.appIcon,C=l.appColor,N=l.appIconUrl,re=l.worksheetId,le=l.rowId,ie=l.createTime;return e.createElement("div",{key:E,className:"recordItem flexRow pRight0",onClick:function(){(0,ee.Ye)("worksheetRecord",re,{rowId:le}),t.setState({collectRecord:l})}},e.createElement("div",{className:"recordIconWrap mRight15",style:{backgroundColor:C}},N?e.createElement(L.Z,{url:N,fill:"#fff",size:18,addClassName:"mTop4"}):e.createElement(w.Z,{icon:m,className:"Font18"})),e.createElement("div",{className:"recordTitle flex pRight12 Font15 ellipsis"},c))})),e.createElement(X.RecordInfoModal,{className:"full",visible:!!h.rowId,appId:h.appId,worksheetId:h.worksheetId,viewId:h.viewId,rowId:h.rowId,onClose:function(){return t.setState({collectRecord:{}})},refreshCollectRecordList:this.getData}),e.createElement(Q.Z,{icon:"home",onClick:function(){window.mobileNavigateTo("/mobile/dashboard")}}))}}]),f}(e.Component)}}]);
