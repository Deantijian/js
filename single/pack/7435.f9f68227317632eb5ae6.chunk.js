(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7435],{349:(P,E,e)=>{P.exports={default:e(48652),__esModule:!0}},48652:(P,E,e)=>{e(21615),P.exports=e(34579).Object.is},65170:P=>{P.exports=Object.is||function(e,f){return e===f?e!==0||1/e===1/f:e!=e&&f!=f}},21615:(P,E,e)=>{var f=e(83856);f(f.S,"Object",{is:e(65170)})},67187:(P,E,e)=>{"use strict";e.d(E,{Z:()=>t});var f=e(85105),D=e.n(f),A=e(99663),b=e(22600),C=e(49135),U=e(93196),d=e(86735),O=e(67294),g=e(71893),M=e(93967),I=e.n(M),N=e(60876),L=e(15577),h,R,W=(0,d.Z)([`
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
`]),v=g.ZP.div(W),t=(R=h=function(o){(0,U.default)(a,o);function a(){var u,n,r,s;(0,A.default)(this,a);for(var p=arguments.length,l=Array(p),c=0;c<p;c++)l[c]=arguments[c];return s=(n=(r=(0,C.default)(this,(u=a.__proto__||D()(a)).call.apply(u,[this].concat(l))),r),r.state={},n),(0,C.default)(r,s)}return(0,b.default)(a,[{key:"render",value:function(){var n=this.props,r=n.isGoodsStatus,s=n.isNew,p=n.fixed,l=n.isRecent,c=n.isUpgrade,i=n.className,m=(0,L.Q9)(),T=(0,N.$B)({isGoodsStatus:r,isNew:s,fixed:p,isUpgrade:c});return T?O.createElement(v,{className:I()(""+i,{isOverdue:!r,fixed:p,isUpgrade:c,mobilePadding:p&&m,isRecent:l})},T):null}}]),a}(O.Component),h.propTypes={},h.defaultProps={},R)},31650:(P,E,e)=>{"use strict";e.r(E),e.d(E,{default:()=>W});var f=e(54208),D=e(85105),A=e.n(D),b=e(99663),C=e(22600),U=e(49135),d=e(93196),O=e(86735),g=e(67294),M=e(12175),I=e(91088),N=e(75915),L=e(71893),h=(0,O.Z)([`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 10px;
  .loadingWrap {
    width: 100%;
    height: 100vh;
  }
`],[`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 10px;
  .loadingWrap {
    width: 100%;
    height: 100vh;
  }
`]),R=L.ZP.div(h),W=function(v){(0,d.default)(t,v);function t(o){(0,b.default)(this,t);var a=(0,U.default)(this,(t.__proto__||A()(t)).call(this,o));return a.getData=function(){var u=_.get(a.props,"match.params")||{},n=u.projectId;n&&(a.setState({loading:!0}),I.Z.myPlatform({projectId:n,containsLinks:!0}).then(function(r){var s=r.markedAppItems,p=s===void 0?[]:s;a.setState({markedAppItems:p.filter(function(l){return l&&!l.webMobileDisplay}),loading:!1})}).catch(function(r){a.setState({markedAppItems:[],loading:!1})}))},a.state={loading:!1,markedAppItems:[]},a}return(0,C.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var a=this.state,u=a.markedAppItems,n=a.loading;return g.createElement(R,null,n?g.createElement("div",{className:"loadingWrap flexRow alignItemsCenter justifyContentCenter"},g.createElement(f.Z,null)):u.map(function(r,s){return g.createElement(M.Z,{direction:"horizontal",index:s,radius:40,iconSize:30,data:r})}),g.createElement(N.Z,{icon:"home",onClick:function(){window.mobileNavigateTo("/mobile/dashboard")}}))}}]),t}(g.Component)},12175:(P,E,e)=>{"use strict";e.d(E,{Z:()=>u});var f=e(33867),D=e(6100),A=e(63239),b=e.n(A),C=e(42723),U=e(86735),d=e(67294),O=e(67187),g=e(15577),M=e(62232),I=e(87600),N=e(24607);function L(n,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:2,p=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+n));if(p&&s===2){var l=p.lastGroupId,c=p.lastWorksheetId,i=p.lastViewId;return r===2?l?"/app/"+n+"/"+l+"?from=insite":"/app/"+n:l&&c&&i?"/app/"+n+"/"+[l,c,i].join("/")+"?from=insite":l&&c?"/app/"+n+"/"+[l,c].join("/")+"?from=insite":l?"/app/"+n+"/"+l+"?from=insite":"/app/"+n}else return"/app/"+n}var h=function(r,s,p){var l="",c=(0,I.Pz)(r);return c.forEach(function(i){var m=i.cid,T=i.staticValue;m?l+=(0,N.fS)({projectId:s,appId:p},m):l+=T}),l},R=function(r,s){return s.trim()?r.filter(function(p){return[p.enName,p.name].filter(_.identity).join("").toLowerCase().indexOf(s.trim().toLowerCase())>-1}):r},W=e(71893),v=e(93967),t=e.n(v),o=(0,U.Z)([`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 8px;
  width: calc(50% - 5px);
  height: 56px;
  margin-bottom: 10px;
  padding-left: 12px;
  position: relative;
  .iconWrap {
    width: `,`;
    height: `,`;
    border-radius: 50%;
    color: #fff;
    font-size: 32px;
    text-align: center;
    margin-right: 10px;
  }
  .appName {
    min-width: 0;
    padding-right: 10px;
    .name {
      font-size: 14px;
      &.app {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 18px;
      }
    }
  }
  .appStatusWrap {
    right: -8px;
    top: -10px;
    bottom: unset;
    left: unset;
  }
`],[`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 8px;
  width: calc(50% - 5px);
  height: 56px;
  margin-bottom: 10px;
  padding-left: 12px;
  position: relative;
  .iconWrap {
    width: `,`;
    height: `,`;
    border-radius: 50%;
    color: #fff;
    font-size: 32px;
    text-align: center;
    margin-right: 10px;
  }
  .appName {
    min-width: 0;
    padding-right: 10px;
    .name {
      font-size: 14px;
      &.app {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 18px;
      }
    }
  }
  .appStatusWrap {
    right: -8px;
    top: -10px;
    bottom: unset;
    left: unset;
  }
`]),a=W.ZP.div(o,function(n){var r=n.radius;return r+"px"},function(n){var r=n.radius;return r+"px"});function u(n){var r=n.data,s=r===void 0?{}:r,p=n.direction,l=p===void 0?"vertical":p,c=(0,C.Z)(n,["data","direction"]),i=s||{},m=i.id,T=i.createType,z=i.urlTemplate,Y=i.projectId,$=i.icon,j=i.iconUrl,F=i.iconColor,y=F===void 0?"#2196f3":F,S=i.navColor,q=i.lightColor,ee=i.appStatus,K=i.fixed,G=i.isGoodsStatus,k=i.isNew,w=i.name,x=i.type,te=i.itemName,H=i.itemId,ne=i.itemUrl,ae=i.sectionId,J=i.onClick,Q=S==="#1b2025",V=[q,"#ffffff","#f5f6f7"].includes(S),Z=ee===4,re=c.className,ie=c.index,oe=c.iconSize,X=c.radius,se=X===void 0?40:X;return l==="horizontal"?d.createElement(a,{radius:se,className:t()("appItem "+re,{mRight10:ie%2===0}),key:m,onClick:function(B){if(x){(0,g.Ye)(x===2?"worksheet":"customPage",H),window.mobileNavigateTo("/mobile/recordList/"+m+"/"+ae+"/"+H);return}if((0,g.Ye)("app",m),T===1){B.stopPropagation(),B.preventDefault(),window.open(h(z,Y,m));return}localStorage.removeItem("currentNavWorksheetId"),safeLocalStorageSetItem("currentGroupInfo",b()({})),window.mobileNavigateTo("/mobile/app/"+m)}},d.createElement("div",{className:"iconWrap",style:{backgroundColor:x?(0,M.YT)(S||y,.08):S||y}},j?d.createElement(D.Z,{url:x?ne:j,fill:x?S||y:Q||V?y:"#fff",size:oe||30,addClassName:"mTop7"}):d.createElement(f.Z,{icon:$,className:"Font30"})),d.createElement("div",{className:"appName flex"},d.createElement("div",{className:t()("name",{app:!x,ellipsis:!!x})},x?te:w),!!x&&d.createElement("div",{className:"des ellipsis Font12 Gray_9"},w)),m==="add"||!K&&!Z&&!k?null:d.createElement(O.Z,{className:"appStatusWrap",isGoodsStatus:G,isNew:k,fixed:K,isUpgrade:Z})):d.createElement("div",{className:"myAppItemWrap InlineBlock",key:s.id+"-"+(0,g.ne)(10)},d.createElement("div",{className:"myAppItem mTop24",onClick:function(B){if(m!=="add"&&(0,g.Ye)("app",m),T===1){B.stopPropagation(),B.preventDefault(),window.open(h(z,Y,m));return}localStorage.removeItem("currentNavWorksheetId"),safeLocalStorageSetItem("currentGroupInfo",b()({})),J?J():window.mobileNavigateTo("/mobile/app/"+m)}},d.createElement("div",{className:"myAppItemDetail TxtCenter Relative",style:{backgroundColor:S||y}},j?d.createElement(D.Z,{url:j,fill:Q||V?y:"#fff",size:32,addClassName:"mTop12"}):d.createElement(f.Z,{icon:$,className:"Font30"}),m==="add"||!K&&!Z&&!k?null:d.createElement(O.Z,{isGoodsStatus:G,isNew:k,fixed:K,isUpgrade:Z})),d.createElement("span",{className:"breakAll LineHeight16 Font13 mTop10 contentText",style:{WebkitBoxOrient:"vertical"}},w)))}},60876:(P,E,e)=>{"use strict";e.d(E,{$B:()=>R,s3:()=>I,tg:()=>h});var f=e(349),D=e.n(f),A=e(85105),b=e.n(A),C=e(72444),U=e(88239),d=e(88902),O=e.n(d),g=e(96486),M=e.n(g),I=function(t){return M().get(t,["match","params"])},N=function(t){return _.flatten(_Object$keys(t).map(function(o){var a=t[o];return _.includes(["validProject"],o)?a.map(function(u){return _extends({type:o},u)}):_.includes(["aloneApps"],o)?{type:o,projectApps:a}:a.length?{type:o,projectApps:a}:null})).filter(function(o){return!!o})},L=function(t){if((typeof t>"u"?"undefined":(0,C.default)(t))!=="object"||t===null)return!1;for(var o=t;b()(o)!==null;)o=b()(o);return b()(t)===o},h=function v(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:O()(t),u=0;u<a.length;u++){var n=a[u],r=t[n],s=o[n];if(L(r)&&L(s))return v(r,s,O()(r));if(!D()(r,s))return!0}return!1},R=function(t){var o=t.isGoodsStatus,a=t.isNew,u=t.fixed,n=t.isUpgrade;return o?n?_l("\u5347\u7EA7\u4E2D"):u?_l("\u7EF4\u62A4\u4E2D%01018"):a?_l("\u65B0 !"):null:_l("\u8FC7\u671F")},W=function(t,o){switch(o){case APP_ROLE_TYPE.POSSESS_ROLE:break;case APP_ROLE_TYPE.ADMIN_ROLE:t=_.filter(t,function(a){return!_.includes(["del"],a.type)});break;case APP_ROLE_TYPE.RUNNER_ROLE:t=_.filter(t,function(a){return _.includes(["modify","editIntro","appAnalytics","appLogs","modifyAppLockPassword"],a.type)});break;case APP_ROLE_TYPE.DEVELOPERS_ROLE:t=_.filter(t,function(a){return!_.includes(["copy","export","appAnalytics","appLogs","del"],a.type)});break;case APP_ROLE_TYPE.RUNNER_DEVELOPERS_ROLE:t=_.filter(t,function(a){return!_.includes(["copy","export","del"],a.type)});break;default:break}return t}}}]);
