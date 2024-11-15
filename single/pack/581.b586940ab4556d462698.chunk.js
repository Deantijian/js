(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[581],{349:(f,d,t)=>{f.exports={default:t(48652),__esModule:!0}},48652:(f,d,t)=>{t(21615),f.exports=t(34579).Object.is},65170:f=>{f.exports=Object.is||function(t,c){return t===c?t!==0||1/t===1/c:t!=t&&c!=c}},21615:(f,d,t)=>{var c=t(83856);c(c.S,"Object",{is:t(65170)})},67187:(f,d,t)=>{"use strict";t.d(d,{Z:()=>n});var c=t(85105),M=t.n(c),R=t(99663),P=t(22600),C=t(49135),Z=t(93196),x=t(86735),O=t(67294),h=t(71893),B=t(93967),T=t.n(B),j=t(60876),I=t(15577),A,D,S=(0,x.Z)([`
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
`]),u=h.ZP.div(S),n=(D=A=function(e){(0,Z.default)(o,e);function o(){var i,r,l,p;(0,R.default)(this,o);for(var g=arguments.length,b=Array(g),m=0;m<g;m++)b[m]=arguments[m];return p=(r=(l=(0,C.default)(this,(i=o.__proto__||M()(o)).call.apply(i,[this].concat(b))),l),l.state={},r),(0,C.default)(l,p)}return(0,P.default)(o,[{key:"render",value:function(){var r=this.props,l=r.isGoodsStatus,p=r.isNew,g=r.fixed,b=r.isRecent,m=r.isUpgrade,F=r.className,y=(0,I.Q9)(),W=(0,j.$B)({isGoodsStatus:l,isNew:p,fixed:g,isUpgrade:m});return W?O.createElement(u,{className:T()(""+F,{isOverdue:!l,fixed:g,isUpgrade:m,mobilePadding:g&&y,isRecent:b})},W):null}}]),o}(O.Component),A.propTypes={},A.defaultProps={},D)},20581:(f,d,t)=>{"use strict";t.r(d),t.d(d,{default:()=>Y});var c=t(66814),M=t(91880),R=t.n(M),P=t(54208),C=t(6100),Z=t(20148),x=t(60385),O=t.n(x),h=t(33867),B=t(22382),T=t(28661),j=t.n(T),I=t(85105),A=t.n(I),D=t(99663),S=t(22600),u=t(49135),n=t(93196),e=t(67294),o=t(67187),i=t(91088),r=t(15577),l=t(75915),p=t(49611),g=t.n(p),b=t(93967),m=t.n(b),F=t(96486),y=t.n(F),W=function(H){(0,n.default)(L,H);function L(K){(0,D.default)(this,L);var a=(0,u.default)(this,(L.__proto__||A()(L)).call(this,K));return a.getAppListInfo=function(){var v=a.props.match.params,s=v===void 0?{}:v,N=s.groupId,U=s.groupType,G=(0,r.vo)(localStorage.getItem("currentProjectId")||(md.global.Account.projects[0]||{}).projectId),$=y().isEmpty(G)?{projectId:"external",companyName:_l("\u5916\u90E8\u534F\u4F5C")}:G,z=$.projectId;i.Z.getGroup({projectId:z,id:N,groupType:U}).then(function(E){a.setState({currentGroupList:E.apps||[],loading:!1,groupInfo:E})})},a.showActionSheet=function(){var v=[{name:_l("\u4ECE\u6A21\u677F\u5E93\u6DFB\u52A0"),icon:"application_library",iconClass:"Font18"},{name:_l("\u81EA\u5B9A\u4E49\u521B\u5EFA"),icon:"add1",iconClass:"Font18"}];j().showActionSheetWithOptions({options:v.map(function(s){return e.createElement(e.Fragment,null,e.createElement(h.Z,{className:m()("mRight10 Gray_9e",s.iconClass),icon:s.icon}),e.createElement("span",{className:"Bold"},s.name))}),message:e.createElement("div",{className:"flexRow header"},e.createElement("span",{className:"Font13"},_l("\u6DFB\u52A0\u5E94\u7528")),e.createElement("div",{className:"closeIcon",onClick:function(){j().close()}},e.createElement(h.Z,{icon:"close"})))},function(s){if(s!==-1&&(s===0&&window.mobileNavigateTo("/mobile/appBox"),s===1)){var N=window.isWxWork?_l("\u521B\u5EFA\u81EA\u5B9A\u4E49\u5E94\u7528\u8BF7\u524D\u5F80\u4F01\u4E1A\u5FAE\u4FE1PC\u684C\u9762\u7AEF"):_l("\u521B\u5EFA\u81EA\u5B9A\u4E49\u5E94\u7528\u8BF7\u524D\u5F80PC\u7AEF");O().alert(N,null,[{text:_l("\u6211\u77E5\u9053\u4E86"),onPress:function(){}}])}})},a.state={currentGroupList:[],groupInfo:{},loading:!0},a}return(0,S.default)(L,[{key:"componentDidMount",value:function(){this.getAppListInfo()}},{key:"renderItem",value:function(a){return e.createElement("div",{className:"myAppItemWrap InlineBlock",key:a.id+"-"+(0,r.ne)(10)},e.createElement("div",{className:"myAppItem mTop24",onClick:function(s){localStorage.removeItem("currentNavWorksheetId"),a.onClick?a.onClick():window.mobileNavigateTo("/mobile/app/"+a.id)}},e.createElement("div",{className:"myAppItemDetail TxtCenter Relative",style:{backgroundColor:a.iconColor}},a.iconUrl?e.createElement(C.Z,{url:a.iconUrl,fill:"#fff",size:32,addClassName:"mTop12"}):e.createElement(h.Z,{icon:a.icon,className:"Font30"}),a.id==="add"||!a.fixed?null:e.createElement(o.Z,{isGoodsStatus:a.isGoodsStatus,isNew:a.isNew,fixed:a.fixed})),e.createElement("span",{className:"breakAll LineHeight16 Font13 mTop10 contentText",style:{WebkitBoxOrient:"vertical"}},a.name)))}},{key:"render",value:function(){var a=this,v=this.state,s=v.currentGroupList,N=v.loading,U=v.groupInfo,G=U===void 0?{}:U;s=s.filter(function(E){return!E.webMobileDisplay});var $=(0,r.vo)(localStorage.getItem("currentProjectId")||(md.global.Account.projects[0]||{}).projectId),z=$.projectId;return N?e.createElement(P.Z,{className:"h100 flexColumn justifyCenter"}):e.createElement("div",{className:"appList"},e.createElement(g(),{title:G.name}),e.createElement(R(),{align:"center",wrap:"wrap",className:"appCon"},y().map(s||[],function(E,Q){return a.renderItem(E)}),!(y().find(md.global.Account.projects,function(E){return E.projectId===z})||{}).cannotCreateApp&&this.renderItem({id:"add",iconColor:"#F5F5F5",icon:"plus",name:_l("\u6DFB\u52A0\u5E94\u7528"),onClick:this.showActionSheet})),e.createElement(l.Z,{onClick:function(){window.mobileNavigateTo("/mobile/appGroupList")}}))}}]),L}(e.Component);const Y=W},60876:(f,d,t)=>{"use strict";t.d(d,{$B:()=>D,s3:()=>T,tg:()=>A});var c=t(349),M=t.n(c),R=t(85105),P=t.n(R),C=t(72444),Z=t(88239),x=t(88902),O=t.n(x),h=t(96486),B=t.n(h),T=function(n){return B().get(n,["match","params"])},j=function(n){return _.flatten(_Object$keys(n).map(function(e){var o=n[e];return _.includes(["validProject"],e)?o.map(function(i){return _extends({type:e},i)}):_.includes(["aloneApps"],e)?{type:e,projectApps:o}:o.length?{type:e,projectApps:o}:null})).filter(function(e){return!!e})},I=function(n){if((typeof n>"u"?"undefined":(0,C.default)(n))!=="object"||n===null)return!1;for(var e=n;P()(e)!==null;)e=P()(e);return P()(n)===e},A=function u(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:O()(n),i=0;i<o.length;i++){var r=o[i],l=n[r],p=e[r];if(I(l)&&I(p))return u(l,p,O()(l));if(!M()(l,p))return!0}return!1},D=function(n){var e=n.isGoodsStatus,o=n.isNew,i=n.fixed,r=n.isUpgrade;return e?r?_l("\u5347\u7EA7\u4E2D"):i?_l("\u7EF4\u62A4\u4E2D%01018"):o?_l("\u65B0 !"):null:_l("\u8FC7\u671F")},S=function(n,e){switch(e){case APP_ROLE_TYPE.POSSESS_ROLE:break;case APP_ROLE_TYPE.ADMIN_ROLE:n=_.filter(n,function(o){return!_.includes(["del"],o.type)});break;case APP_ROLE_TYPE.RUNNER_ROLE:n=_.filter(n,function(o){return _.includes(["modify","editIntro","appAnalytics","appLogs","modifyAppLockPassword"],o.type)});break;case APP_ROLE_TYPE.DEVELOPERS_ROLE:n=_.filter(n,function(o){return!_.includes(["copy","export","appAnalytics","appLogs","del"],o.type)});break;case APP_ROLE_TYPE.RUNNER_DEVELOPERS_ROLE:n=_.filter(n,function(o){return!_.includes(["copy","export","del"],o.type)});break;default:break}return n}}}]);
