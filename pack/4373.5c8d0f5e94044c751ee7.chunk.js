(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4373],{24373:(Be,dn,d)=>{"use strict";d.r(dn),d.d(dn,{default:()=>po});var Y=d(88239),Un=d(85105),pn=d.n(Un),un=d(99663),mn=d(22600),fn=d(49135),gn=d(93196),e=d(67294),zn=d(49611),Kn=d.n(zn),P=d(86735),Wn=d(93967),X=d.n(Wn),D=d(5017),ze=d(53825),Pe=d(32415),Gn=(0,P.Z)([`
  width: 241px;
  height: 100%;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  border-right: 1px solid #ededed;
  .pLeft18 {
    padding-left: 18px;
  }
  .pTop28 {
    padding-top: 28px;
  }
  li {
    width: 230px;
    height: 44px;
    border-radius: 0px 22px 22px 0px;
    a {
      display: inline-flex;
      align-items: center;
      width: 100%;
      line-height: 44px;
      color: #333;
      i {
        color: #757575;
      }
    }
    &.cur {
      background: #e3f2fe;
      a {
        color: #2196f3;
        i {
          color: #2196f3;
        }
      }
      &:hover {
        background: #e3f2fe;
      }
    }
    &:hover {
      background: #f5f5f5;
    }
  }
`],[`
  width: 241px;
  height: 100%;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  border-right: 1px solid #ededed;
  .pLeft18 {
    padding-left: 18px;
  }
  .pTop28 {
    padding-top: 28px;
  }
  li {
    width: 230px;
    height: 44px;
    border-radius: 0px 22px 22px 0px;
    a {
      display: inline-flex;
      align-items: center;
      width: 100%;
      line-height: 44px;
      color: #333;
      i {
        color: #757575;
      }
    }
    &.cur {
      background: #e3f2fe;
      a {
        color: #2196f3;
        i {
          color: #2196f3;
        }
      }
      &:hover {
        background: #e3f2fe;
      }
    }
    &:hover {
      background: #f5f5f5;
    }
  }
`]),Jn=D.ZP.div(Gn),Hn=function(t){(0,gn.default)(o,t);function o(){return(0,un.default)(this,o),(0,fn.default)(this,(o.__proto__||pn()(o)).apply(this,arguments))}return(0,mn.default)(o,[{key:"componentWillReceiveProps",value:function(l){var a=l.match.params,f=a===void 0?{}:a;f.type?safeLocalStorageSetItem("integrationUrl",f.type):localStorage.removeItem("integrationUrl")}},{key:"render",value:function(){var l=this.props,a=l.match,f=a===void 0?{params:{}}:a,T=l.isSuperAdmin,C=f.params.type,n=C===void 0?"":C;return e.createElement(Jn,null,e.createElement("div",{className:"Gray_75 pTop28 pLeft18"},_l("API \u96C6\u6210")),e.createElement("ul",{className:"mTop12"},Pe.pb.map(function(I,F){return e.createElement("li",{key:F,className:X()("Bold Font14",{cur:I.type===n||!n&&I.type==="connect"})},e.createElement(ze.Z,{className:"pLeft18 overflow_ellipsis pRight10",to:"/integration/"+I.type},e.createElement("i",{className:"icon-"+I.icon+" mRight8 Font24 TxtMiddle"})," ",I.txt))})),T&&e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray_75 pTop28 pLeft18"},e.createElement("span",null,_l("\u6570\u636E\u96C6\u6210"))),e.createElement("ul",{className:"mTop12"},Pe.Ez.map(function(I,F){return e.createElement("li",{key:F,className:X()("Bold",{cur:I.type===n||!n&&I.type==="connect"})},e.createElement(ze.Z,{className:"pLeft18 overflow_ellipsis pRight10",to:"/integration/"+I.type},e.createElement("i",{className:"icon-"+I.icon+" mRight8 Font24 TxtMiddle"})," ",I.txt))}))))}}]),o}(e.Component);const Vn=Hn;var hn=d(15028),Yn=d(98523),Re=d(25273),He=d(66946),k=d(12424),en=d(40240),Xn=d(3603),xn=d.n(Xn),pe=d(15577),Me=d(77863),qn=d(96486),r=d.n(qn),_n=d(49090),$n=d.n(_n),ve=d(54208),B=d(33867),le=d(93002),et=d(52076),Se=d(70801),ge=d(14118),nt=d(55552),tt=(0,P.Z)([`
  padding: 0 32px;
  height: 36px;
  border-radius: 18px;
  background: #2196f3;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #1764c0;
  }
`],[`
  padding: 0 32px;
  height: 36px;
  border-radius: 18px;
  background: #2196f3;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #1764c0;
  }
`]),at=(0,P.Z)([`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgb(239, 239, 239);
  text-align: center;
  i {
    line-height: 56px;
  }
`],[`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgb(239, 239, 239);
  text-align: center;
  i {
    line-height: 56px;
  }
`]),rt=(0,P.Z)([`
  padding: 13px 0;
  border-bottom: 1px solid #e0e0e0;
  &:not(.noBG):hover {
    background: #f5f5f5;
  }
`],[`
  padding: 13px 0;
  border-bottom: 1px solid #e0e0e0;
  &:not(.noBG):hover {
    background: #f5f5f5;
  }
`]),ot=D.ZP.div(tt),it=D.ZP.div(at),An=D.ZP.div(rt);function lt(t){var o=t.companyId,u=t.apiDetail,l=u===void 0?{}:u,a=t.onClose,f=a===void 0?function(){}:a,T=t.onApplySuccess,C=(0,e.useState)(!0),n=(0,k.Z)(C,2),I=n[0],F=n[1],Z=(0,e.useState)([]),w=(0,k.Z)(Z,2),p=w[0],j=w[1];(0,e.useEffect)(function(){ge.Z.getApiList({companyId:o,pageIndex:1,pageSize:1e5,relationId:l.id},{isIntegration:!0}).then(function(i){i&&(j(i),F(!1))})},[]);var L=function(S){ge.Z.authorizeApkIds({companyId:o,id:l.id,type:1,apkIds:S.map(function(y){return y.appId})},{isIntegration:!0}).then(function(y){y&&(alert(_l("\u7533\u8BF7\u6210\u529F")),T(),f())})};return e.createElement(Se.Z,{className:"dialogAddFriendsBox",width:680,visible:!0,title:null,footer:null,onCancel:f},e.createElement("div",{className:"flexRow alignItemsCenter"},l.iconName?e.createElement("img",{src:l.iconName,alt:"",width:"60",height:"60"}):e.createElement(it,null,e.createElement(B.Z,{icon:"connect",className:"Font32 Gray_9e"})),e.createElement("div",{className:"flex flexColumn mLeft12 mRight60 minWidth0"},e.createElement("div",{className:"Font20 bold ellipsis"},l.name),e.createElement("div",{className:"Gray_75 ellipsis"},l.explain)),e.createElement(ot,{className:"flexRow alignItemsCenter",onClick:function(){return(0,nt.Z)({title:_l("\u9009\u62E9\u6388\u6743\u5E94\u7528"),projectId:o,isGetManagerApps:!0,onOk:L})}},_l("\u7533\u8BF7\u4F7F\u7528"))),e.createElement("div",{className:"Font14 bold mTop40"},_l("API \u5217\u8868\uFF08%0\uFF09",p.length)),e.createElement(An,{className:"flexRow alignItemsCenter Gray_75 noBG"},e.createElement("div",{className:"Width110 ellipsis"},_l("API \u540D\u79F0")),e.createElement("div",{className:"flex mLeft10"},_l("\u63CF\u8FF0"))),I?e.createElement(ve.Z,{className:"mTop10"}):p.map(function(i){return e.createElement(An,{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"Width110 ellipsis",title:i.name},i.name),e.createElement("div",{className:"flex mLeft10 ellipsis",title:i.explain},i.explain))}),e.createElement("div",{className:"mTop50 Gray_75"},_l("API \u7531\u4F01\u4E1A\u7EC4\u7EC7\u5E94\u7528\u7BA1\u7406\u5458\u5F00\u653E\u63D0\u4F9B\uFF0C\u7533\u8BF7\u4F7F\u7528\u540E\u9700\u9009\u62E9\u6388\u6743\u4F7F\u7528\u7684\u5E94\u7528\uFF0C\u7BA1\u7406\u5458\u5BA1\u6838\u901A\u8FC7\u540E\u88AB\u6388\u6743\u7684\u5E94\u7528\u5C06\u53EF\u4EE5\u4F7F\u7528 API")))}var mo=d(48659),st=d(1825),ct=(0,P.Z)([`
  color: #333;
  .ant-drawer-mask {
    background-color: transparent;
  }
  .ant-drawer-content-wrapper {
    box-shadow: 0px 3px 24px 1px rgba(0, 0, 0, 0.16);
  }
  .ant-drawer-header {
    border-bottom: 0;
    padding: 24px;
    .ant-drawer-header-title {
      flex-direction: row-reverse;
      .ant-drawer-title {
        font-size: 17px;
        font-weight: 600;
      }
      .ant-drawer-close {
        padding: 0;
        margin-right: 0;
        margin-top: -20px;
      }
    }
  }
  .ant-drawer-body {
    padding: 0px;
    display: flex;
    flex-direction: column;

    .empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconCon {
        width: 130px;
        height: 130px;
        text-align: center;
        background: #f5f5f5;
        border-radius: 50%;
        color: #c2c3c3;
        i {
          line-height: 130px;
        }
      }
    }
  }
`],[`
  color: #333;
  .ant-drawer-mask {
    background-color: transparent;
  }
  .ant-drawer-content-wrapper {
    box-shadow: 0px 3px 24px 1px rgba(0, 0, 0, 0.16);
  }
  .ant-drawer-header {
    border-bottom: 0;
    padding: 24px;
    .ant-drawer-header-title {
      flex-direction: row-reverse;
      .ant-drawer-title {
        font-size: 17px;
        font-weight: 600;
      }
      .ant-drawer-close {
        padding: 0;
        margin-right: 0;
        margin-top: -20px;
      }
    }
  }
  .ant-drawer-body {
    padding: 0px;
    display: flex;
    flex-direction: column;

    .empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconCon {
        width: 130px;
        height: 130px;
        text-align: center;
        background: #f5f5f5;
        border-radius: 50%;
        color: #c2c3c3;
        i {
          line-height: 130px;
        }
      }
    }
  }
`]),dt=(0,P.Z)([`
  display: flex;
  align-items: center;
  padding: 24px 12px;
  margin: 0 24px;
  border-bottom: 1px solid #e0e0e0;
  &.titleItem {
    padding: 12px;
    color: #757575;
  }
  &:not(.titleItem):hover {
    background: #f5f5f5;
  }
  .applyUser,
  .name,
  .apps {
    flex: 3;
    width: 0;
  }
  .createdDate {
    flex: 4;
  }
  .status,
  .operate {
    flex: 2;
  }

  .reject {
    color: #f44336;
  }
  .agree {
    color: #4caf50;
  }
  .reviewing {
    color: #2196f3;
  }
`],[`
  display: flex;
  align-items: center;
  padding: 24px 12px;
  margin: 0 24px;
  border-bottom: 1px solid #e0e0e0;
  &.titleItem {
    padding: 12px;
    color: #757575;
  }
  &:not(.titleItem):hover {
    background: #f5f5f5;
  }
  .applyUser,
  .name,
  .apps {
    flex: 3;
    width: 0;
  }
  .createdDate {
    flex: 4;
  }
  .status,
  .operate {
    flex: 2;
  }

  .reject {
    color: #f44336;
  }
  .agree {
    color: #4caf50;
  }
  .reviewing {
    color: #2196f3;
  }
`]),pt=(0,D.ZP)(st.Z)(ct),bn=D.ZP.div(dt);function ut(t){var o=t.isAdmin,u=t.companyId,l=t.onClose,a=t.onApproveSuccess,f=(0,le.Z)({loading:!0,pageIndex:1,noMore:!1}),T=(0,k.Z)(f,2),C=T[0],n=T[1],I=(0,e.useState)([]),F=(0,k.Z)(I,2),Z=F[0],w=F[1],p={0:{color:"reject",text:_l("\u5DF2\u62D2\u7EDD")},1:{color:"reviewing",text:_l("\u5F85\u5BA1\u6838")},3:{color:"agree",text:_l("\u5DF2\u540C\u610F")}};(0,e.useEffect)(function(){j()},[C.loading,C.pageIndex]);var j=function(){C.loading&&ge.Z.getAuthorizationList({companyId:u,isOwner:!o,pageIndex:C.pageIndex,pageSize:50,status:[0,1,3]},{isIntegration:!0}).then(function(h){h&&(w(C.pageIndex>1?Z.concat(h):h),n({loading:!1,noMore:h.length<50}))})},L=function(h,m){ge.Z.updateAuthorizeStatus({id:h,status:m},{isIntegration:!0}).then(function(x){if(x){alert(m===3?_l("\u540C\u610F\u4F7F\u7528"):_l("\u62D2\u7EDD\u4F7F\u7528"));var H=Z.map(function(Q){return Q.id===h?(0,Y.default)({},Q,{status:m}):Q});w(H),a()}})},i=function(){!C.loading&&!C.noMore&&n({loading:!0,pageIndex:C.pageIndex+1})},S=[{dataIndex:"applyUser",title:_l("\u7533\u8BF7\u4EBA"),render:function(h){return e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("img",{src:(h.ownerAccount||{}).avatar,width:24,height:24,className:"circle"}),e.createElement("span",{className:"mLeft10 ellipsis",title:(h.ownerAccount||{}).fullName},(h.ownerAccount||{}).fullName))}},{dataIndex:"name",title:_l("\u540D\u79F0"),render:function(h){return e.createElement("div",{className:"ellipsis",title:h.name},h.name)}},{dataIndex:"apps",title:_l("\u6388\u6743\u5E94\u7528"),render:function(h){return e.createElement("div",{className:"ellipsis",title:(h.apks||[]).map(function(m){return m.name}).join(", ")},(h.apks||[]).map(function(m){return m.name}).join(", "))}},{dataIndex:"createdDate",title:_l("\u7533\u8BF7\u65F6\u95F4")},{dataIndex:"status",title:_l("\u72B6\u6001"),render:function(h){return e.createElement("span",{className:(p[h.status]||{}).color},(p[h.status]||{}).text)}},{dataIndex:"operate",title:_l("\u64CD\u4F5C"),render:function(h){return h.status===1?e.createElement("div",null,e.createElement("span",{className:"agree pointer",onClick:function(){return L(h.id,3)}},_l("\u540C\u610F")),e.createElement("span",{className:"mLeft16 reject pointer",onClick:function(){return L(h.id,0)}},_l("\u62D2\u7EDD"))):null}}];return e.createElement(pt,{visible:!0,title:_l("API \u7533\u8BF7\u4F7F\u7528\u5BA1\u6838"),width:840,placement:"right",closeIcon:e.createElement("i",{className:"icon-close Font18"}),onClose:l},e.createElement(bn,{className:"titleItem"},S.filter(function(y){return o||!_.includes(["applyUser","operate"],y.dataIndex)}).map(function(y,h){return e.createElement("div",{key:h,className:y.dataIndex},y.title)})),C.loading&&C.pageIndex===1?e.createElement(ve.Z,{className:"mTop10"}):Z.length?e.createElement(Re.Z,{className:"flex",onScrollEnd:i},Z.map(function(y,h){return e.createElement(bn,null,S.filter(function(m){return o||!_.includes(["applyUser","operate"],m.dataIndex)}).map(function(m,x){return e.createElement("div",{key:h+"-"+x,className:m.dataIndex},m.render?m.render(y):y[m.dataIndex])}))})):e.createElement("div",{className:"empty"},e.createElement("div",{className:"iconCon"},e.createElement(B.Z,{icon:"connect",className:"Font64"})),e.createElement("div",{className:"mTop24 Font16 Gray_9e"},_l("\u6682\u65E0\u4F7F\u7528\u7533\u8BF7"))))}var mt=(0,P.Z)([`
  height: 36px;
  padding: 0 10px;
  border-radius: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
  .applyNumber {
    width: 20px;
    height: 20px;
    background: #f8d4d3;
    color: #f44336;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`],[`
  height: 36px;
  padding: 0 10px;
  border-radius: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
  .applyNumber {
    width: 20px;
    height: 20px;
    background: #f8d4d3;
    color: #f44336;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`]),ft=(0,P.Z)([`
  width: 220px;
  height: 36px;
  border-radius: 36px;
  background-color: rgb(245, 245, 245);
  padding-left: 10px;
  overflow: hidden;
  &:hover {
    background-color: rgb(234, 234, 234);
  }
  input {
    flex: 1;
    border: none;
    margin-left: 2px;
    background-color: inherit;
  }
  .searchClear {
    cursor: pointer;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    margin-right: 2px;
    &:hover {
      background: rgb(245, 245, 245);
    }
  }
`],[`
  width: 220px;
  height: 36px;
  border-radius: 36px;
  background-color: rgb(245, 245, 245);
  padding-left: 10px;
  overflow: hidden;
  &:hover {
    background-color: rgb(234, 234, 234);
  }
  input {
    flex: 1;
    border: none;
    margin-left: 2px;
    background-color: inherit;
  }
  .searchClear {
    cursor: pointer;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    margin-right: 2px;
    &:hover {
      background: rgb(245, 245, 245);
    }
  }
`]),gt=(0,P.Z)([`
  margin-left: -12px;
  margin-right: -12px;
  flex-wrap: wrap;
  .listItem {
    flex: 1;
    min-width: 325px;
    height: 220px;
    margin: 12px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 24px 24px 0;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px;
    }
    &.null {
      color: #e0e0e0;
      font-size: 60px;
    }
    .listItemHeader {
      height: 32px;
      align-items: center;
      justify-content: space-between;
      img,
      .icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
        background-color: #eaeaea;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9e9e9e;
      }
    }
    .listApplyBtn {
      min-width: 66px;
      height: 30px;
      padding: 0px 12px;
      background: rgba(33, 150, 243, 0.08);
      border-radius: 15px;
      color: rgb(33, 150, 243);
      line-height: 30px;
      cursor: pointer;
    }
    .listItemDesc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      height: 40px;
      overflow: hidden;
    }
    .listItemRemove {
      color: #f44336;
      cursor: pointer;
    }
  }

  .empty {
    margin-top: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconCon {
      width: 130px;
      height: 130px;
      text-align: center;
      background: #f5f5f5;
      border-radius: 50%;
      color: #c2c3c3;
      i {
        line-height: 130px;
      }
    }
  }
`],[`
  margin-left: -12px;
  margin-right: -12px;
  flex-wrap: wrap;
  .listItem {
    flex: 1;
    min-width: 325px;
    height: 220px;
    margin: 12px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 24px 24px 0;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px;
    }
    &.null {
      color: #e0e0e0;
      font-size: 60px;
    }
    .listItemHeader {
      height: 32px;
      align-items: center;
      justify-content: space-between;
      img,
      .icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
        background-color: #eaeaea;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9e9e9e;
      }
    }
    .listApplyBtn {
      min-width: 66px;
      height: 30px;
      padding: 0px 12px;
      background: rgba(33, 150, 243, 0.08);
      border-radius: 15px;
      color: rgb(33, 150, 243);
      line-height: 30px;
      cursor: pointer;
    }
    .listItemDesc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      height: 40px;
      overflow: hidden;
    }
    .listItemRemove {
      color: #f44336;
      cursor: pointer;
    }
  }

  .empty {
    margin-top: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconCon {
      width: 130px;
      height: 130px;
      text-align: center;
      background: #f5f5f5;
      border-radius: 50%;
      color: #c2c3c3;
      i {
        line-height: 130px;
      }
    }
  }
`]),ht=325,xt=D.ZP.div(mt),At=D.ZP.div(ft),bt=D.ZP.div(gt),vt=function(o){var u=o.columnSize,l=o.number,a=[];if(!l)return null;for(var f=0;f<u-l;f++)a.push(e.createElement("div",{className:"listItem Visibility"}));return a},Ve=null;function Et(t){var o=t.width,u=t.currentProjectId,l=t.loadMore,a=t.setHasMore,f=(0,e.useRef)(null),T=(0,e.useState)(!1),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=(0,le.Z)({visible:!1}),Z=(0,k.Z)(F,2),w=Z[0],p=Z[1],j=(0,e.useState)(!1),L=(0,k.Z)(j,2),i=L[0],S=L[1],y=(0,e.useState)(0),h=(0,k.Z)(y,2),m=h[0],x=h[1],H=(0,e.useState)([]),Q=(0,k.Z)(H,2),W=Q[0],re=Q[1],ue=(0,e.useState)(1),G=(0,k.Z)(ue,2),s=G[0],c=G[1],A=(0,e.useState)(""),v=(0,k.Z)(A,2),U=v[0],de=v[1],Ne=(0,e.useState)(!0),Ie=(0,k.Z)(Ne,2),Ee=Ie[0],R=Ie[1],b=Math.floor((o-76)/ht),N=(0,pe.vo)(u),ee=N.isProjectAppManager,V=N.isSuperAdmin,q=ee||V;(0,e.useEffect)(function(){ge.Z.getAuthorizationList({companyId:u,isOwner:!q,pageIndex:1,pageSize:1e3,status:[1]},{isIntegration:!0}).then(function(ne){ne&&x(ne.length)})},[]),(0,e.useEffect)(function(){Ze()},[s,U]),(0,e.useEffect)(function(){!Ee&&!Ve&&c(s+1)},[l]);var Ze=function(ke){R(!0),Ve=ge.Z.getList({companyId:u,types:[1,2],authorization:!0,pageIndex:ke||s,pageSize:30,keyword:U},{isIntegration:!0}),Ve.then(function(Ce){Ve="",re(s>1?W.concat(Ce):Ce),R(!1),a(Ce.length>=30)})},ae=function(ke){var Ce=ke.id,_e=ke.authorization,Ue=_e===void 0?!0:_e,sn=!!W.filter(function(J){return J.id===Ce}).length;if(sn&&Ue){alert(_l("API\u5DF2\u5B58\u5728"),3);return}ge.Z.updateAuthorization({authorization:Ue,id:Ce},{isIntegration:!0}).then(function(J){J&&(alert(Ue?_l("\u6DFB\u52A0\u6210\u529F"):_l("\u79FB\u9664\u6210\u529F")),Ue?Ze(1):re(W.filter(function(E){return E.id!==Ce})))})},ln=_.debounce(function(ne){c(1),de(ne)},500);return e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"Bold Font17 flex"},_l("\u7EC4\u7EC7"),"(",W.length,")"),e.createElement(xt,{onClick:function(){return S(!0)}},e.createElement("span",{className:"Font14 Gray_75"},_l("\u7533\u8BF7\u4F7F\u7528")),!!m&&e.createElement("div",{className:"applyNumber"},m)),e.createElement(At,{className:"flexRow alignItemsCenter mLeft20"},e.createElement(B.Z,{type:"search",className:"Font18 Gray_9d"}),e.createElement("input",{type:"text",ref:f,placeholder:_l("\u641C\u7D22\u8FDE\u63A5"),onChange:function(ke){return ln(ke.target.value.trim())}}),U&&e.createElement("div",{className:"searchClear flexRow alignItemsCenter justifyContentCenter",onClick:function(){f.current.value="",c(1),de("")}},e.createElement(B.Z,{type:"cancel",className:"Gray_9e Font16"})))),e.createElement(bt,{className:"flexRow"},q&&e.createElement("div",{className:"listItem null flexColumn alignItemsCenter justifyContentCenter",onClick:function(){return I(!0)}},e.createElement(B.Z,{type:"task-add-member-circle",className:"null"}),e.createElement("div",{className:"mTop25 Font13 Gray_75"},_l("\u6DFB\u52A0\u7EC4\u7EC7\u4E0B\u521B\u5EFA\u7684\u8FDE\u63A5\u81F3API\u5E93"))),!W.length&&!q?e.createElement("div",{className:"empty"},e.createElement("div",{className:"iconCon"},e.createElement(B.Z,{icon:"connect",className:"Font64"})),e.createElement("div",{className:"mTop24 Font16 Gray_9e"},U?_l("\u6682\u65E0\u641C\u7D22\u7ED3\u679C"):_l("\u7EC4\u7EC7\u4E0B\u6682\u672A\u5F00\u653E\u53EF\u7528API"))):W.map(function(ne){return e.createElement("div",{className:"listItem",key:ne.id,onClick:function(){return p({visible:!0,apiDetail:ne})}},e.createElement("div",{className:"flexRow listItemHeader"},ne.iconName?e.createElement("img",{src:ne.iconName}):e.createElement(B.Z,{icon:"connect",className:"Font16"}),e.createElement("div",{className:"listApplyBtn"},_l("\u7533\u8BF7\u4F7F\u7528"))),e.createElement("div",{className:"bold Font20 ellipsis mTop20"},ne.name),e.createElement("div",{className:"listItemDesc Gray_75 breakAll mTop20"},ne.explain),e.createElement("div",{className:"flexRow mTop20"},e.createElement("span",{className:"Gray_75"},_l("\u5305\u542B")),e.createElement("span",{className:"mLeft3 mRight3"},ne.apiCount),e.createElement("span",{className:"Gray_75"},"API"),e.createElement("div",{className:"flex"}),q&&e.createElement("div",{className:"listItemRemove",onClick:function(Ce){Ce.stopPropagation(),ae({id:ne.id,authorization:!1})}},_l("\u79FB\u9664"))))}),e.createElement(vt,{columnSize:b,number:(W.length+(q?1:0))%b})),Ee&&(!q||s>1)&&e.createElement(ve.Z,{className:"mTop10"}),e.createElement(et.Z,{companyId:u,title:_l("\u9009\u62E9\u7EC4\u7EC7\u4E0B\u8FDE\u63A5"),types:[1,2],allowAdd:!1,visible:n,onSave:ae,onClose:function(){return I(!1)}}),w.visible&&e.createElement(lt,{companyId:u,apiDetail:w.apiDetail,onClose:function(){return p({visible:!1})},onApplySuccess:function(){return x(m+1)}}),i&&e.createElement(ut,{companyId:u,isAdmin:q,onClose:function(){return S(!1)},onApproveSuccess:function(){return x(m-1)}}))}var Ct=(0,P.Z)([`
  background: #fff;
  min-height: 100%;
  .desCon {
    height: 260px;
    background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
    box-sizing: border-box;
    .conBox {
      padding: 80px 0 0 50px;
      background: url(`,`) no-repeat 85% bottom;
      background-size: auto 90%;
      width: 100%;
      height: 100%;
    }
  }
  .navTab {
    min-height: 48px;
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin: 0 18px;
        box-sizing: border-box;
        border-bottom: 4px solid rgba(0, 0, 0, 0);
        a {
          height: 44px;
          color: #333;
          padding: 10px;
          font-weight: 600;
          display: inline-block;
          font-size: 16px;
        }
        &.isCur {
          border-bottom: 4px solid #2196f3;
          a {
            color: #2196f3;
          }
        }
      }
    }
  }
  .listCon {
    margin-top: -48px;
  }
`],[`
  background: #fff;
  min-height: 100%;
  .desCon {
    height: 260px;
    background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
    box-sizing: border-box;
    .conBox {
      padding: 80px 0 0 50px;
      background: url(`,`) no-repeat 85% bottom;
      background-size: auto 90%;
      width: 100%;
      height: 100%;
    }
  }
  .navTab {
    min-height: 48px;
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin: 0 18px;
        box-sizing: border-box;
        border-bottom: 4px solid rgba(0, 0, 0, 0);
        a {
          height: 44px;
          color: #333;
          padding: 10px;
          font-weight: 600;
          display: inline-block;
          font-size: 16px;
        }
        &.isCur {
          border-bottom: 4px solid #2196f3;
          a {
            color: #2196f3;
          }
        }
      }
    }
  }
  .listCon {
    margin-top: -48px;
  }
`]),yt=(0,P.Z)([`
  padding: 32px 50px;
  max-width: 1600px;
  margin: 0 auto;
  .searchCon {
    height: 36px;
  }
`],[`
  padding: 32px 50px;
  max-width: 1600px;
  margin: 0 auto;
  .searchCon {
    height: 36px;
  }
`]),Nt=D.ZP.div(Ct,xn()),It=D.ZP.div(yt),kt=[{type:"commonLib",name:_l("\u516C\u5171")},{type:"projectLib",name:_l("\u7EC4\u7EC7")}];function wt(t){var o=t.currentProjectId,u=t.match,l=u===void 0?{params:{}}:u,a=r().get(r().find(md.global.Account.projects,function(m){return m.projectId===o}),"allowAPIIntegration"),f=md.global.Config.IsLocal&&md.global.SysSettings.hideIntegrationLibrary||!a,T=(0,e.useState)(f?"projectLib":l.params.listType||window.localStorage.getItem("apiLibTab")||"commonLib"),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=(0,e.useState)(""),Z=(0,k.Z)(F,2),w=Z[0],p=Z[1],j=(0,e.useState)(!1),L=(0,k.Z)(j,2),i=L[0],S=L[1],y=function(){window.MDAPILibrary&&window.MDAPILibrary({DomId:"containerApiLib",featureType:(0,pe.XH)(o,Me.UU.apiIntergration),installCallBack:function(H){window.open("/integrationConnect/"+H)},buriedUpgradeVersionDialog:function(){(0,pe.j0)(o,Me.UU.apiIntergration)},currentProjectId:o,getUrl:"https://api.mingdao.com/integration",installUrl:__api_server__.integration||md.global.Config.IntegrationAPIUrl})};(0,e.useEffect)(function(){n==="commonLib"&&(window.MDAPILibrary?y():$n()("https://alifile.mingdaocloud.com/open/js/apilibrary.js?"+ +new Date,function(m){!m&&window.MDAPILibrary&&y()}))},[n]);var h=function(){n==="commonLib"||!i||p(+new Date)};return e.createElement(Re.Z,{onScrollEnd:h},e.createElement(Nt,null,e.createElement("div",{className:"desCon"},e.createElement("div",{className:"conBox"},e.createElement("h3",{className:"Bold Font24"},_l("API\u5E93")),e.createElement("p",{className:"Font15"},_l("\u8FDE\u63A5\u7B2C\u4E09\u65B9 API \u5E76\u4FDD\u5B58\u9274\u6743\u8BA4\u8BC1\uFF0C\u5728\u5DE5\u4F5C\u8868\u6216\u5DE5\u4F5C\u6D41\u4E2D\u8C03\u7528")," ",e.createElement(He.Z,{type:3,href:"https://help.mingdao.com/integration/api#connection-certification",text:_l("\u4F7F\u7528\u5E2E\u52A9")})))),e.createElement("div",{className:"listCon"},e.createElement("div",{className:"navTab"},!f&&e.createElement("ul",null,kt.map(function(m,x){return e.createElement("li",{key:x,className:X()({isCur:m.type===n}),onClick:function(){n!==m.type&&(safeLocalStorageSetItem("apiLibTab",m.type),I(m.type))}},e.createElement("a",{className:"pLeft18"},m.name))}))),e.createElement("div",{className:"Con"},e.createElement(It,null,n==="commonLib"?e.createElement("div",{id:"containerApiLib"}):e.createElement(Et,(0,Y.default)({},t,{loadMore:w,setHasMore:S})))))))}function St(t){var o=(0,en.Z)(wt);return e.createElement(o,t)}const Tt=St;var Lt=d(43727),se=d(88106),Zt=d(56171),Pt=d(86853),Ye=d(31261),Dt=d(21914),jt=d(1564),Ot=(0,P.Z)([`
  .manageListOrder {
    transform: scale(0.8);
    color: #bfbfbf;
    .icon-arrow-down {
      margin-top: -4px;
    }
  }
  padding: 0 32px 32px;
  .noData {
    .iconCon {
      width: 130px;
      height: 130px;
      line-height: 130px;
      background: #f5f5f5;
      border-radius: 50%;
      margin: 120px auto 0;
      color: #9e9e9e;
    }
  }
  .addConnect {
    padding: 8px 24px;
    background: #2196f3;
    border-radius: 21px;
    color: #fff;
    display: inline-block;
    &:hover {
      background: #1764c0;
    }
  }
  .headTr {
  }
  .headTr,
  .conTr {
    color: #333;
    margin: 0;
    p {
      margin: 0;
    }
    padding: 15px 0;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    & > div {
      flex: 12;
      display: flex;
      align-items: center;
      &.option {
        width: 40px;
        flex: initial;
        opacity: 0;
      }
    }
    .apiCount,
    .apkCount {
      max-width: 140px;
    }
    .name {
      flex: 40;
      overflow: hidden;
      padding-left: 8px;
    }
    .imgCon {
      width: 36px;
      height: 36px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      overflow: hidden;
      line-height: 36px;
      text-align: center;
      font-size: 20px;
    }
  }
  .conTr {
    &:hover {
      background: rgba(247, 247, 247, 1);
      .option {
        opacity: 1;
      }
    }
  }
`],[`
  .manageListOrder {
    transform: scale(0.8);
    color: #bfbfbf;
    .icon-arrow-down {
      margin-top: -4px;
    }
  }
  padding: 0 32px 32px;
  .noData {
    .iconCon {
      width: 130px;
      height: 130px;
      line-height: 130px;
      background: #f5f5f5;
      border-radius: 50%;
      margin: 120px auto 0;
      color: #9e9e9e;
    }
  }
  .addConnect {
    padding: 8px 24px;
    background: #2196f3;
    border-radius: 21px;
    color: #fff;
    display: inline-block;
    &:hover {
      background: #1764c0;
    }
  }
  .headTr {
  }
  .headTr,
  .conTr {
    color: #333;
    margin: 0;
    p {
      margin: 0;
    }
    padding: 15px 0;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    & > div {
      flex: 12;
      display: flex;
      align-items: center;
      &.option {
        width: 40px;
        flex: initial;
        opacity: 0;
      }
    }
    .apiCount,
    .apkCount {
      max-width: 140px;
    }
    .name {
      flex: 40;
      overflow: hidden;
      padding-left: 8px;
    }
    .imgCon {
      width: 36px;
      height: 36px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      overflow: hidden;
      line-height: 36px;
      text-align: center;
      font-size: 20px;
    }
  }
  .conTr {
    &:hover {
      background: rgba(247, 247, 247, 1);
      .option {
        opacity: 1;
      }
    }
  }
`]),Ft=(0,P.Z)([`
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  line-height: 24px;
  display: inline-block;
  width: 24px;
  height: 24px;
  color: #9e9e9e;
  font-size: 18px;
  &:hover {
    // background-color: rgba(0, 0, 0, 0.03);
    color: #2196f3;
  }
`],[`
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  line-height: 24px;
  display: inline-block;
  width: 24px;
  height: 24px;
  color: #9e9e9e;
  font-size: 18px;
  &:hover {
    // background-color: rgba(0, 0, 0, 0.03);
    color: #2196f3;
  }
`]),Bt=(0,P.Z)([`
  position: relative !important;
  overflow: auto;
  padding: 6px 0 !important;
  width: 200px !important;
`],[`
  position: relative !important;
  overflow: auto;
  padding: 6px 0 !important;
  width: 200px !important;
`]),Rt=(0,P.Z)([`
  .Item-content {
    padding-left: 47px !important;
  }
`],[`
  .Item-content {
    padding-left: 47px !important;
  }
`]),Mt=(0,P.Z)([`
  .Item-content {
    color: #f44336 !important;
    .Icon {
      color: #f44336 !important;
    }
  }
  &:not(.disabled):hover {
    .Icon {
      color: #fff !important;
    }
  }
`],[`
  .Item-content {
    color: #f44336 !important;
    .Icon {
      color: #f44336 !important;
    }
  }
  &:not(.disabled):hover {
    .Icon {
      color: #fff !important;
    }
  }
`]),Qt=D.ZP.div(Ot),Ut=D.ZP.span(Ft),zt=(0,D.ZP)(Pt.Z)(Bt),nn=(0,D.ZP)(Zt.Z)(Rt),Kt=(0,D.ZP)(nn)(Mt);function Wt(t){var o=t.currentProjectId,u=t.data,l=t.isSuperAdmin,a=u.id,f=u.type,T=u.isOwner,C=u.name,n=(0,le.Z)({popupVisible:!1,showPublish:!1,apiList:[]}),I=(0,k.Z)(n,2),F=I[0],Z=F.popupVisible,w=F.showPublish,p=F.apiList,j=I[1],L=l||T;if(!L)return"";var i=function(m){ge.Z.upper((0,Y.default)({id:a},m),{isIntegration:!0}).then(function(x){x?(j({showPublish:!1}),alert(_l("\u5DF2\u7533\u8BF7\u4E0A\u67B6\uFF0C\u8BF7\u7B49\u5F85\u5BA1\u6838"))):alert(_l("\u7533\u8BF7\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)})},S=function(){ge.Z.delete({id:a},{isIntegration:!0}).then(function(m){m?(alert(_l("\u5220\u9664\u6210\u529F")),t.updateList(t.list.filter(function(x){return x.id!==a}))):alert(_l("\u6709API\u88AB\u5F15\u7528\uFF0C\u8BF7\u5220\u9664\u5F15\u7528\u540E\u91CD\u8BD5"),3)})},y=function(){ge.Z.copy({id:a},{isIntegration:!0}).then(function(m){m?(alert(_l("\u590D\u5236\u6210\u529F")),t.onFresh()):alert(_l("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"),3)})};return e.createElement(e.Fragment,null,e.createElement(Ye.Z,{action:["click"],popupClassName:"moOption",getPopupContainer:function(){return document.body},popupVisible:Z,onPopupVisibleChange:function(m){j({popupVisible:m})},popupAlign:{points:["tr","br"],offset:[0,10],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(zt,null,!md.global.Config.IsLocal&&f!==2&&e.createElement(nn,{icon:e.createElement(B.Z,{icon:"publish",className:"Font17 mLeft5"}),onClick:function(m){j({popupVisible:!1,showPublish:!0}),m.stopPropagation()}},_l("\u7533\u8BF7\u4E0A\u67B6\u5230API\u5E93")),f!==2&&e.createElement(nn,{icon:e.createElement(B.Z,{icon:"copy",className:"Font17 mLeft5"}),onClick:function(m){m.stopPropagation(),j({popupVisible:!1}),Se.Z.confirm({title:e.createElement("span",{className:""},_l("\u590D\u5236\u8FDE\u63A5")+"\u201C"+C+"\u201D"),width:500,description:_l("\u5C06\u590D\u5236\u76EE\u6807\u8FDE\u63A5\u7684\u6240\u6709\u914D\u7F6E\u4FE1\u606F"),okText:_l("\u590D\u5236"),onOk:function(){j({popupVisible:!1}),y()}})}},_l("\u590D\u5236")),e.createElement(Kt,{icon:e.createElement(B.Z,{icon:"delete1",className:"Font17 mLeft5"}),onClick:function(m){m.stopPropagation(),j({popupVisible:!1}),Se.Z.confirm({title:e.createElement("span",{className:"Red"},_l("\u5220\u9664\u8FDE\u63A5")+"\u201C"+C+"\u201D"),buttonType:"danger",width:500,description:_l("\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u5220\u9664\u5417\uFF1F"),onOk:function(){S()}})}},_l("\u5220\u9664")))},e.createElement(Ut,{className:"moreOperate mTop3",style:Z?{display:"inline-block"}:{},onClick:function(m){m.stopPropagation()}},e.createElement("i",{className:"icon icon-task-point-more"}))),w&&e.createElement(jt.Z,(0,Y.default)({},_.pick(t,["isSuperAdmin","currentProjectId"]),{currentProjectId:o,id:a,onOk:function(m){i(m)},onCancel:function(){j({showPublish:!1})},isSuperAdmin:t.isSuperAdmin,isGetData:!0})))}var tn=[{key:"name",name:_l("\u540D\u79F0"),render:function(o){return e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(Dt.Z,(0,Y.default)({},o,{width:36,size:22})),e.createElement("div",{className:"flex pLeft16 overflowHidden pRight16"},e.createElement("p",{className:"Font15 Bold WordBreak"},o.name),e.createElement("p",{className:"Font13 Gray_75 WordBreak overflow_ellipsis wMax100"},o.explain)))}},{key:"apiCount",sortKey:"countSort",renderHead:function(o){return e.createElement("div",{className:"pRight12 Hand ThemeHoverColor3 flexRow",onClick:function(){return o.onChange({countSort:o.countSort===2?0:o.countSort===0?1:2,pageIndex:1})}},e.createElement("span",{className:""},_l("API\u6570\u91CF")),e.createElement("div",{className:"flexColumn manageListOrder"},e.createElement(B.Z,{icon:"arrow-up",className:X()("flex",{ThemeColor3:o.countSort===2})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("flex",{ThemeColor3:o.countSort===1})})))}},{key:"apkCount",name:_l("\u6388\u6743\u5E94\u7528")},{key:"cid",name:_l("\u521B\u5EFA\u4EBA"),render:function(o){return e.createElement("div",{className:"pRight8"},o.ownerAccount.fullName)}},{key:"ctime",sortKey:"timeSort",renderHead:function(o){return e.createElement("div",{className:"pRight12 Hand ThemeHoverColor3 flexRow",onClick:function(){return o.onChange({timeSort:o.timeSort===2?0:o.timeSort===0?1:2,pageIndex:1})}},e.createElement("span",{className:""},_l("\u521B\u5EFA\u65F6\u95F4")),e.createElement("div",{className:"flexColumn manageListOrder"},e.createElement(B.Z,{icon:"arrow-up",className:X()("flex",{ThemeColor3:o.timeSort===2})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("flex",{ThemeColor3:o.timeSort===1})})))},render:function(o){return e.createElement("span",{className:""},o.createdDate)}},{key:"option",name:"",render:function(o,u){return e.createElement(Wt,(0,Y.default)({data:o},u))}}];function Gt(t){return e.createElement(Qt,null,t.pageIndex===1&&t.loading?e.createElement(ve.Z,null):t.list.length>0?e.createElement(e.Fragment,null,e.createElement("div",{className:"tableCon"},e.createElement("div",{className:"headTr"},tn.map(function(o){var u;return e.createElement("div",{className:""+o.key},o.renderHead?o.renderHead((u={},(0,se.default)(u,o.sortKey,t[o.sortKey]),(0,se.default)(u,"onChange",function(a){t.onChange(a)}),u)):o.name)})),t.list.map(function(o){var u=o.isOwner||t.isSuperAdmin;return u?e.createElement(ze.Z,{className:"conTr Hand stopPropagation",to:"/integrationConnect/"+o.id},tn.map(function(l){return e.createElement("div",{className:""+l.key},l.render?l.render(o,t):o[l.key])})):e.createElement("div",{className:"conTr Hand"},tn.map(function(l){return e.createElement("div",{className:""+l.key},l.render?l.render(o,t):o[l.key])}))}),t.loading&&t.pageIndex!==1&&e.createElement(ve.Z,null))):e.createElement("div",{className:"noData TxtCenter"},e.createElement("span",{className:"iconCon InlineBlock TxtCenter "},e.createElement("i",{className:"icon-connect Font64 TxtMiddle"})),e.createElement("p",{className:"Gray_9e mTop20 mBottom0"},t.keywords?_l("\u65E0\u5339\u914D\u7684\u7ED3\u679C\uFF0C\u6362\u4E00\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u5427"):_l("\u6682\u65E0\u53EF\u7528\u8FDE\u63A5\uFF0C\u8BF7\u5148\u521B\u5EFA API \u8FDE\u63A5")),!t.keywords&&t.featureType&&t.allowAPIIntegration&&e.createElement("span",{className:"addConnect Bold Hand mTop24",onClick:function(){return t.onCreate()}},_l("\u521B\u5EFA\u81EA\u5B9A\u4E49\u8FDE\u63A5"))))}const Jt=Gt;var an=d(12935),Ht=d(61181),fo=d(30381),Vt=(0,P.Z)([`
  .mLeft18 {
    margin-left: 18px;
  }
  background: #fff;
  min-height: 100%;
  .tips {
    padding: 0 32px 0 32px;
  }
  .desCon {
    height: 260px;
    background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
    box-sizing: border-box;
    .conBox {
      padding: 80px 0 0 50px;
      background: url(`,`) no-repeat 85% bottom;
      background-size: auto 90%;
      width: 100%;
      height: 100%;
    }
  }
  .navTab {
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin: 0 18px;
        box-sizing: border-box;
        border-bottom: 4px solid rgba(0, 0, 0, 0);
        a {
          height: 44px;
          color: #333;
          padding: 10px;
          font-weight: 600;
          display: inline-block;
          font-size: 16px;
        }
        &.isCur {
          border-bottom: 4px solid #2196f3;
          a {
            color: #2196f3;
          }
        }
      }
    }
  }
  .listCon {
    margin-top: -48px;
  }
`],[`
  .mLeft18 {
    margin-left: 18px;
  }
  background: #fff;
  min-height: 100%;
  .tips {
    padding: 0 32px 0 32px;
  }
  .desCon {
    height: 260px;
    background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
    box-sizing: border-box;
    .conBox {
      padding: 80px 0 0 50px;
      background: url(`,`) no-repeat 85% bottom;
      background-size: auto 90%;
      width: 100%;
      height: 100%;
    }
  }
  .navTab {
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin: 0 18px;
        box-sizing: border-box;
        border-bottom: 4px solid rgba(0, 0, 0, 0);
        a {
          height: 44px;
          color: #333;
          padding: 10px;
          font-weight: 600;
          display: inline-block;
          font-size: 16px;
        }
        &.isCur {
          border-bottom: 4px solid #2196f3;
          a {
            color: #2196f3;
          }
        }
      }
    }
  }
  .listCon {
    margin-top: -48px;
  }
`]),Yt=(0,P.Z)([`
  padding: 32px 32px 0 32px;
  .addConnect {
    padding: 8px 24px;
    background: #2196f3;
    border-radius: 21px;
    color: #fff;
    display: inline-block;
    &:hover {
      background: #1764c0;
    }
  }
  .searchCon {
    height: 36px;
  }
`],[`
  padding: 32px 32px 0 32px;
  .addConnect {
    padding: 8px 24px;
    background: #2196f3;
    border-radius: 21px;
    color: #fff;
    display: inline-block;
    &:hover {
      background: #1764c0;
    }
  }
  .searchCon {
    height: 36px;
  }
`]),Xt=D.ZP.div(Vt,xn()),qt=D.ZP.div(Yt),Ke=null;function _t(t){var o=(0,e.useRef)({pgIndex:1}),u={loading:!1,pageIndex:1,noMore:!1,listData:[],keywords:"",showConnect:!1,connectData:null,countSort:0,timeSort:0,searchType:0},l=(0,le.Z)((0,Y.default)({},u,{listCount:0})),a=(0,k.Z)(l,2),f=a[0],T=f.loading,C=f.noMore,n=f.pageIndex,I=f.listData,F=f.keywords,Z=f.showConnect,w=f.connectData,p=f.hasChange,j=f.listCount,L=f.countSort,i=f.timeSort,S=f.searchType,y=a[1],h=(0,pe.XH)(t.currentProjectId,Me.UU.apiIntergration),m=r().get(r().find(md.global.Account.projects,function(s){return s.projectId===t.currentProjectId}),"allowAPIIntegration"),x=function(){if(t.currentProjectId){Ke&&Ke.abort(),y({loading:!0});var c={lastModifiedDate:i===1?"ascend":i===2?"descend":void 0,apiCount:L===1?"ascend":L===2?"descend":void 0};!c.lastModifiedDate&&!c.apiCount&&(c=void 0),Ke=ge.Z.getList({companyId:t.currentProjectId,types:[1,2],pageIndex:n,pageSize:Pe.th,keyword:F,isOwner:S!==0,sorter:c},{isIntegration:!0}),Ke.then(function(A){Ke=null,y({loading:!1,listData:n<=1?A:I.concat(A),noMore:A.length<=0}),o.current.pgIndex=n})}},H=function(){y({loading:!1,pageIndex:1,noMore:!1,keywords:"",showConnect:!1,connectData:null,hasChange:p+1,countSort:0,timeSort:0,searchType:0})},Q=(0,e.useCallback)(r().throttle(function(s){y({keywords:s,pageIndex:1,noMore:!1})},500),[]),W=function(){T||C||y({pageIndex:o.current.pgIndex+1})};(0,e.useEffect)(function(){x()},[t.currentProjectId,n,F,p,L,i,S]),(0,e.useEffect)(function(){ge.Z.count({companyId:t.currentProjectId,types:[1,2],pageIndex:1,pageSize:1e7,isOwner:S!==0},{isIntegration:!0}).then(function(s){y({listCount:s[1]+s[2]})})},[p]);var re=function(){if(!(I.length<=0&&!F))return e.createElement(e.Fragment,null,e.createElement(qt,{className:X()("headCon flexRow",{pBottom12:!t.isSuperAdmin})},e.createElement("div",{className:"flex flexRow"},e.createElement(an.Z,{className:"searchCon",placeholder:_l("\u641C\u7D22\u8FDE\u63A5"),value:F,onChange:Q}),t.isSuperAdmin&&e.createElement(Lt.Z,{value:S,className:"dropSearchType mLeft18",onChange:function(A){S!==A&&y({searchType:A,pageIndex:1,hasChange:p+1})},border:!0,isAppendToBody:!0,data:[{text:_l("\u6240\u6709\u8FDE\u63A5"),value:0},{text:_l("\u6211\u7684\u8FDE\u63A5"),value:1}]})),h&&m&&e.createElement("span",{className:"addConnect Bold Hand",onClick:function(){var A=t.currentProjectId;h==="2"?(0,pe.j0)(A,Me.UU.apiIntergration):y({showConnect:!0,connectData:null})}},e.createElement("i",{className:"icon-add"}),_l("\u81EA\u5B9A\u4E49\u8FDE\u63A5"))),t.isSuperAdmin&&e.createElement("div",{className:"Font13 Gray_75 mTop24 tips"},_l("\u7EC4\u7EC7\u5E94\u7528\u7BA1\u7406\u5458\u53EF\u7BA1\u7406\u7EC4\u7EC7\u4E0B\u6240\u6709API\u8FDE\u63A5")))},ue=function(){window.MDAPILibrary&&window.MDAPILibrary({DomId:"containerApiLib",featureType:h,installCallBack:function(A){y({showConnect:!0,connectData:{id:A},hasChange:p+1})},buriedUpgradeVersionDialog:function(){(0,pe.j0)(t.currentProjectId,Me.UU.apiIntergration)},currentProjectId:t.currentProjectId,getUrl:"https://api.mingdao.com/integration",installUrl:__api_server__.integration||md.global.Config.IntegrationAPIUrl})},G=function(){var c=(0,Y.default)({},t,{loading:T,pageIndex:n,keywords:F,list:I,showConnect:Z,connectData:w,countSort:L,timeSort:i,onChange:function(U){y((0,Y.default)({},U))},onFresh:function(){H()}}),A=function(){var U=t.currentProjectId;if(!U)return alert(_l("\u8BF7\u521B\u5EFA\u6216\u7533\u8BF7\u52A0\u5165\u4E00\u4E2A\u7EC4\u7EC7"),3);h==="2"?(0,pe.j0)(U,Me.UU.apiIntergration):y({showConnect:!0,connectData:null})};return e.createElement(e.Fragment,null,re(),e.createElement(Jt,(0,Y.default)({},c,{onCreate:A,featureType:h,updateList:function(U){y({listData:U})},allowAPIIntegration:m})))};return e.createElement(Re.Z,{onScrollEnd:W},e.createElement(Xt,null,e.createElement("div",{className:"desCon"},e.createElement("div",{className:"conBox"},e.createElement("h3",{className:"Bold Font24"},_l("\u6211\u7684\u8FDE\u63A5")),e.createElement("p",{className:"Font15"},_l("\u8FDE\u63A5\u7B2C\u4E09\u65B9 API \u5E76\u4FDD\u5B58\u9274\u6743\u8BA4\u8BC1\uFF0C\u5728\u5DE5\u4F5C\u8868\u6216\u5DE5\u4F5C\u6D41\u4E2D\u8C03\u7528"),e.createElement(He.Z,{type:3,href:"https://help.mingdao.com/integration/api#connection-certification",text:_l("\u4F7F\u7528\u5E2E\u52A9")})))),e.createElement("div",{className:"listCon"},e.createElement(e.Fragment,null,e.createElement("div",{className:X()("Con mTop40")},G()))),Z&&e.createElement(Ht.default,{data:w,isSuperAdmin:t.isSuperAdmin,onClose:function(c){c?H():y({showConnect:!1,connectData:null})}})))}function $t(t){var o=(0,en.Z)(_t);return e.createElement(o,t)}const ea=$t;var na=d(22177),Xe=d(97553),go=d(34279),Te=d(64749),ta=d(74435),aa=d.n(ta),ra=d(52945),rn=d.n(ra),oa=d(17934),ia=d(98161),vn=d(14338),g=d(81872),En=d(3540),la=d(47426),Cn=d(20845),Le=d(26581),sa=d(94942),yn=d.n(sa),ca=d(36803),da=d(15071),pa=d(88555),De=d(85315),ce=d(28855),Nn=d(14490),ua=(0,P.Z)([`
  .selectItem {
    width: 100% !important;
    font-size: 13px;
    .ant-select-selector {
      min-height: 36px;
      padding: 2px 11px !important;
      border-radius: 3px !important;
    }
    .ant-select-selection-search {
      margin-inline-start: 0px !important;
      -webkit-margin-start: 0px !important;
    }
    &.disabled {
      .ant-select-selector {
        border: 0;
      }
    }
  }
`],[`
  .selectItem {
    width: 100% !important;
    font-size: 13px;
    .ant-select-selector {
      min-height: 36px;
      padding: 2px 11px !important;
      border-radius: 3px !important;
    }
    .ant-select-selection-search {
      margin-inline-start: 0px !important;
      -webkit-margin-start: 0px !important;
    }
    &.disabled {
      .ant-select-selector {
        border: 0;
      }
    }
  }
`]),ma=D.ZP.div(ua);function fa(t){var o=t.source,u=t.tableList,l=t.dataObj,a=t.setDataObj,f=o.hasSchema,T=(0,e.useState)([]),C=(0,k.Z)(T,2),n=C[0],I=C[1];(0,e.useEffect)(function(){ce.Z.getDatabases({projectId:t.currentProjectId,datasourceId:o.id}).then(function(j){if(j){var L=j.map(function(i){return{label:i,value:i}});a({dbOptionList:L})}})},[]);var F=function(){var L=[];return u.forEach(function(i){i.tableList.forEach(function(S){L.push(S.id)})}),L},Z=function(L){I([]),L?f?ce.Z.getSchemas({projectId:t.currentProjectId,datasourceId:o.id,dbName:L}).then(function(i){if(i){var S=i.map(function(y){return{label:y,value:y}});a({db:L,schema:null,tables:[],schemaOptionList:S})}}):a({db:L,tables:[]}):a({db:null,schema:null,tables:[]})},w=function(L){I([]),a(L?{schema:L,tables:[]}:{schema:null,tables:[],tableOptionList:[]})},p=function(L){var i=[g.Lu.MYSQL,g.Lu.ALIYUN_MYSQL,g.Lu.TENCENT_MYSQL],S=[g.Lu.SQL_SERVER,g.Lu.ALIYUN_SQLSERVER,g.Lu.TENCENT_SQLSERVER];if(r().includes(i,o.type)||L.length<=n.length)I(L),a({tables:L});else{var y=r().differenceBy(L,n,"value")[0],h={projectId:t.currentProjectId,datasourceId:o.id,dbName:l.db,schema:l.schema,tableName:y.value};ce.Z.getTableFields(h).then(function(m){if(m){var x=m.filter(function(H){return H.isPk});switch(!0){case(x.length===1||r().includes(S,o.type)&&x.length>1):I([].concat((0,De.Z)(n),[y])),a({tables:[].concat((0,De.Z)(n),[y])});break;case x.length>1:alert(_l("\u8BE5\u8868\u6709\u591A\u4E2A\u4E3B\u952E\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u540C\u6B65"),2);break;default:alert(_l("\u8BE5\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u540C\u6B65"),2);break}}})}};return e.createElement(ma,null,e.createElement("p",{className:"mBottom8"},_l("\u6570\u636E\u5E93")),e.createElement(Te.default,{className:"selectItem",allowClear:!0,showSearch:!0,placeholder:_l("\u8BF7\u9009\u62E9"),notFoundContent:_l("\u6682\u65E0\u6570\u636E"),options:l.dbOptionList,value:l.db,onChange:Z}),f&&e.createElement(e.Fragment,null,e.createElement("p",{className:"mTop24 mBottom8"},"schema"),e.createElement(Te.default,{className:X()("selectItem",{disabled:!l.db}),disabled:!l.db,allowClear:!0,showSearch:!0,placeholder:_l("\u8BF7\u9009\u62E9"),notFoundContent:_l("\u6682\u65E0\u6570\u636E"),options:l.schemaOptionList,value:l.schema,onChange:w})),e.createElement("p",{className:"mTop24 mBottom8"},_l("\u6570\u636E\u5BF9\u8C61")),e.createElement(Nn.Z,{className:X()("selectItem",{disabled:f?!l.db||!l.schema:!l.db}),value:l.tables,options:l.tableOptionList,onChangeOptions:function(L){return a({tableOptionList:L})},onChangeTable:p,projectId:t.currentProjectId,datasourceId:o.id,dbName:l.db,schema:l.schema,isMultiple:!0,disabled:f?!l.db||!l.schema:!l.db,addedTableIds:F()}))}var ga=d(91088),ha=(0,P.Z)([`
  width: 200px;
  min-width: 200px;
  height: 100%;

  .titleItem {
    width: 200px !important;
  }
  ul {
    li {
      display: inline-block;
      height: 36px;
      width: 100%;
      border-radius: 3px;
      font-size: 14px;
      cursor: pointer;
      .listItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        margin: 8px 0;
        border-left: 3px solid transparent;
        span {
          margin-left: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 150px;
          white-space: nowrap;
        }
        .repeatIcon {
          color: #f44336;
          margin-right: 8px;
        }
        .deleteIcon {
          display: none;
          margin-right: 10px;
          color: #bdbdbd;
          &:hover {
            color: #2196f3;
          }
          &.isActive {
            display: block;
          }
        }
      }

      &:hover {
        background: #f5f5f5;
        .deleteIcon {
          display: block;
        }
      }

      &.isCur {
        background: #edf7fe;
        .listItem {
          border-left: 3px solid #2196f3;
          span {
            color: #2196f3;
            font-weight: 600;
          }
        }
      }
    }
  }
`],[`
  width: 200px;
  min-width: 200px;
  height: 100%;

  .titleItem {
    width: 200px !important;
  }
  ul {
    li {
      display: inline-block;
      height: 36px;
      width: 100%;
      border-radius: 3px;
      font-size: 14px;
      cursor: pointer;
      .listItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        margin: 8px 0;
        border-left: 3px solid transparent;
        span {
          margin-left: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 150px;
          white-space: nowrap;
        }
        .repeatIcon {
          color: #f44336;
          margin-right: 8px;
        }
        .deleteIcon {
          display: none;
          margin-right: 10px;
          color: #bdbdbd;
          &:hover {
            color: #2196f3;
          }
          &.isActive {
            display: block;
          }
        }
      }

      &:hover {
        background: #f5f5f5;
        .deleteIcon {
          display: block;
        }
      }

      &.isCur {
        background: #edf7fe;
        .listItem {
          border-left: 3px solid #2196f3;
          span {
            color: #2196f3;
            font-weight: 600;
          }
        }
      }
    }
  }
`]),xa=(0,P.Z)([`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 20px;
  padding-left: 12px;
  border: 0;
  border-radius: 4px;
  color: #2196f3;
  cursor: pointer;
`],[`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 20px;
  padding-left: 12px;
  border: 0;
  border-radius: 4px;
  color: #2196f3;
  cursor: pointer;
`]),Aa=(0,P.Z)([`
  .selectItem {
    width: 100% !important;
    font-size: 13px;
    .ant-select-selector {
      min-height: 36px;
      padding: 2px 11px !important;
      border-radius: 3px !important;
    }
    .ant-select-selection-search {
      margin-inline-start: 0px !important;
      -webkit-margin-start: 0px !important;
    }
    &.disabled {
      .ant-select-selector {
        border: 0;
      }
    }
  }
`],[`
  .selectItem {
    width: 100% !important;
    font-size: 13px;
    .ant-select-selector {
      min-height: 36px;
      padding: 2px 11px !important;
      border-radius: 3px !important;
    }
    .ant-select-selection-search {
      margin-inline-start: 0px !important;
      -webkit-margin-start: 0px !important;
    }
    &.disabled {
      .ant-select-selector {
        border: 0;
      }
    }
  }
`]),ba=D.ZP.div(ha),va=D.ZP.div(xa),Ea=D.ZP.div(Aa);function Ca(t){var o=t.source,u=t.setNextOrSaveDisabled,l=t.currentTab,a=t.setCurrentTab,f=t.onDelete,T=t.submitData,C=T===void 0?[]:T,n=t.dest,I=(0,e.useState)([]),F=(0,k.Z)(I,2),Z=F[0],w=F[1],p=(0,e.useState)(!1),j=(0,k.Z)(p,2),L=j[0],i=j[1],S=(0,le.Z)({}),y=(0,k.Z)(S,2),h=y[0],m=y[1],x=o.type===g.Lu.APPLICATION_WORKSHEET,H=n.type===g.Lu.APPLICATION_WORKSHEET;(0,e.useEffect)(function(){if(o.type===g.Lu.KAFKA){var G=(r().get(o,"formData.hosts")||[])[0],s=r().get(o,"formData.extraParams.topic");w([{db:G,tableList:[{id:s,name:s}]}]),a({db:G,table:s,tableName:s}),u(!1)}},[]),(0,e.useEffect)(function(){x&&L&&!h.tableOptionList&&ga.Z.getWorksheetsByAppId({appId:o.id}).then(function(G){if(G){var s=G.filter(function(c){return c.type==0}).map(function(c){var A=(0,g.r1)(c.workSheetName);return{label:A?c.workSheetName:e.createElement(e.Fragment,null,c.workSheetName,e.createElement(Le.Z,{text:_l("\u540D\u79F0\u5305\u542B\u7279\u6B8A\u5B57\u7B26\uFF0C\u65E0\u6CD5\u540C\u6B65")},e.createElement(B.Z,{icon:"info1",className:"Gray_bd mLeft5 pointer"}))),value:c.workSheetId,workSheetName:c.workSheetName}});m({tableOptionList:s})}})},[L]);var Q=function(s,c){f(s,x?c.id:c.name);var A=r().without(Z.map(function(v){return v.db===s?(r().remove(v.tableList,function(U){return U.id===c.id}),v.tableList.length===0?null:v):v}),null);(c.id===l.table||s===l.db&&c.name===l.tableName)&&a({}),w(A),!A.length&&u(!0)},W=function(){var s=[];return(Z||[]).forEach(function(c){c.tableList.forEach(function(A){s.push(A.id)})}),h.tableOptionList?h.tableOptionList.map(function(c){var A=(0,g.r1)(c.workSheetName);return(0,Y.default)({},c,{disabled:s.indexOf(c.value)!==-1||!A})}):h.tableOptionList},re=function(){var s={db:x?"":h.db,schema:h.schema,tableList:h.tables.map(function(v){return{id:v.value,name:v.label}})},c=Z.map(function(v){return v.db}),A=[];c.indexOf(s.db)===-1?A=[].concat((0,De.Z)(Z),[s]):A=Z.map(function(v){return v.db===s.db?{db:v.db,schema:v.schema,tableList:[].concat((0,De.Z)(v.tableList),(0,De.Z)(s.tableList))}:v}),m({db:null,schema:null,tables:[]}),i(!1),w(A),a({db:s.db,schema:s.schema,table:s.db?s.tableList[0].name:s.tableList[0].id,tableName:s.tableList[0].name}),u(!1)},ue=function(){var s=[],c={};return C.filter(function(A){return!!r().get(A,["destNode","config","createTable"])&&!H}).forEach(function(A){var v=A.sourceNode.config,U=A.destNode.config.tableName;c[U]?s.push({db:v.dbName,tableName:v.tableName,workSheetId:v.workSheetId}):c[U]=1}),s};return e.createElement(ba,null,e.createElement("div",{className:"titleItem mTop16"},e.createElement("div",{className:"iconWrapper"},e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+r().get(o,"className")}))),e.createElement("span",{title:o.sourceName},o.sourceName)),e.createElement("ul",null,Z.map(function(G){var s=ue();return e.createElement("div",{key:G.db},e.createElement("div",{className:"Gray_9e mTop16 mBottom10 mLeft15"},G.db),G.tableList&&G.tableList.map(function(c){var A=!!s.filter(function(v){return x?v.workSheetId===c.id:v.db===G.db&&v.tableName===c.name}).length;return e.createElement("li",{key:c.id,className:X()({isCur:x?c.id===l.table:G.db===l.db&&c.name===l.tableName}),onClick:function(){return a({db:G.db,schema:G.schema,table:x?c.id:c.name,tableName:c.name})}},e.createElement("div",{className:"listItem"},e.createElement("span",{title:c.name},c.name),e.createElement("div",{className:"flexRow"},A&&e.createElement(Le.Z,{text:_l("\u76EE\u7684\u5730\u8868\u540D\u91CD\u590D")},e.createElement(B.Z,{icon:"info1",className:"repeatIcon"})),o.type!==g.Lu.KAFKA&&e.createElement(B.Z,{icon:"delete1",className:X()("deleteIcon",{isActive:x?c.id===l.table:G.db===l.db&&c.name===l.tableName}),onClick:function(U){U.stopPropagation(),Q(G.db,c)}}))))}))})),o.type!==g.Lu.KAFKA&&e.createElement(va,{onClick:function(){return i(!0)}},e.createElement(B.Z,{icon:"add"}),e.createElement("span",null,_l("\u6570\u636E\u5BF9\u8C61"))),L&&e.createElement(pa.Z,{visible:!0,width:640,onOk:re,okDisabled:!r().get(h,["tables","length"]),onCancel:function(){i(!1),!x&&m({db:null,schema:null,tables:[]})}},e.createElement("h5",{className:"Font14 bold mBottom24"},_l("\u9009\u62E9\u6570\u636E\u5BF9\u8C61")),x?e.createElement(Ea,null,e.createElement("p",{className:"mBottom8"},_l("\u5DE5\u4F5C\u8868")),e.createElement(Te.default,{className:"selectItem",mode:"multiple",allowClear:!0,showSearch:!0,labelInValue:!0,placeholder:_l("\u8BF7\u9009\u62E9"),notFoundContent:_l("\u6682\u65E0\u6570\u636E"),options:W(),value:h.tables,filterOption:function(s,c){return c.workSheetName.toLowerCase().includes(s.toLowerCase())},onChange:function(s){return m({tables:s})}})):e.createElement(fa,(0,Y.default)({},t,{tableList:Z,dataObj:h,setDataObj:m}))))}var In=d(45231),ya=d(42190),fe=d(34063),kn=d(62232),Na=(0,P.Z)([`
  padding: 16px 24px;
  width: 100%;
  height: calc(100% - 32px);

  .middleArrow {
    display: flex;
    justify-content: center;
    transform: rotate(-90deg);
    width: 64px;
    height: 56px;
    color: #2196f3;
  }
  .dbItem {
    display: flex;
    justify-content: space-between;
    width: 643px;
    .itemInput {
      width: 300px;
    }
  }
  .sheetNameWidth {
    width: 643px;
  }
  .multiplePkTips {
    padding: 10px 16px;
    background: #f7f7f7;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    margin-bottom: 20px;
    width: fit-content;
  }
  .loadSheetWrap {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-top: 20px;
    cursor: pointer;
    color: #2196f3;
    &:hover {
      color: #1565c0;
      i {
        color: #1565c0;
      }
    }
  }
`],[`
  padding: 16px 24px;
  width: 100%;
  height: calc(100% - 32px);

  .middleArrow {
    display: flex;
    justify-content: center;
    transform: rotate(-90deg);
    width: 64px;
    height: 56px;
    color: #2196f3;
  }
  .dbItem {
    display: flex;
    justify-content: space-between;
    width: 643px;
    .itemInput {
      width: 300px;
    }
  }
  .sheetNameWidth {
    width: 643px;
  }
  .multiplePkTips {
    padding: 10px 16px;
    background: #f7f7f7;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    margin-bottom: 20px;
    width: fit-content;
  }
  .loadSheetWrap {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-top: 20px;
    cursor: pointer;
    color: #2196f3;
    &:hover {
      color: #1565c0;
      i {
        color: #1565c0;
      }
    }
  }
`]),Ia=(0,P.Z)([`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  margin-top: 24px;
  border: 2px solid #f2f2f2;
  border-radius: 5px;

  .noContentIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    background: #f5f5f5;
    border-radius: 50%;
    color: #9e9e9e;
  }
`],[`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  margin-top: 24px;
  border: 2px solid #f2f2f2;
  border-radius: 5px;

  .noContentIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    background: #f5f5f5;
    border-radius: 50%;
    color: #9e9e9e;
  }
`]),ka=D.ZP.div(Na),wn=D.ZP.div(Ia);function wa(t){var o=this,u=t.onClose,l=t.source,a=t.dest,f=t.setSubmitData,T=(0,e.useState)({}),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=(0,le.Z)({dbOptionList:[],sheetOptionList:[]}),Z=(0,k.Z)(F,2),w=Z[0],p=Z[1],j=(0,le.Z)({}),L=(0,k.Z)(j,2),i=L[0],S=L[1],y=(0,le.Z)({}),h=(0,k.Z)(y,2),m=h[0],x=h[1],H=(0,le.Z)({}),Q=(0,k.Z)(H,2),W=Q[0],re=Q[1],ue=(0,le.Z)({}),G=(0,k.Z)(ue,2),s=G[0],c=G[1],A=(0,le.Z)({}),v=(0,k.Z)(A,2),U=v[0],de=v[1],Ne=(0,e.useState)(!0),Ie=(0,k.Z)(Ne,2),Ee=Ie[0],R=Ie[1],b=l.type===g.Lu.APPLICATION_WORKSHEET,N=a.type===g.Lu.APPLICATION_WORKSHEET,ee=a.hasSchema,V=function(E,M,z){M((0,se.default)({},n.db,rn()({},r().get(E,[n.db]),(0,se.default)({},n.table,rn()({tableName:n.tableName,schema:n.schema},r().get(E,[n.db,n.table]),z)))))},q=function(E){var M=E.initMapping,z=E.sourceFields,O=E.isCreate,te=E.noFetchSet,oe=E.isSetDefaultFields,xe=E.destFields;if(te){var K=(0,fe.V7)(M,r().get(U,[n.db,n.table,"matchedTypes"]),oe,xe,b,N,!0);V(s,c,{fieldsMapping:K});return}ce.Z.fieldsDataTypeMatch({dataDestType:a.type,sourceFields:z,isCreate:O}).then(function(Fe){var Ae=(0,fe.V7)(M,Fe.matchedTypes,oe,xe,b,N,!0);V(s,c,{fieldsMapping:Ae}),V(U,de,{matchedTypes:Fe.matchedTypes})})};(0,e.useEffect)(function(){N||ce.Z.getDatabases({projectId:t.currentProjectId,datasourceId:a.id}).then(function(J){if(J){var E=J.map(function(M){return{label:M,value:M}});p({dbOptionList:E})}}),b&&R(!1)},[]),(0,e.useEffect)(function(){var J=[],E=function(O){var te=function(K){var Fe=r().get(i,[O,K,"sheetCreateType"])!==g.Rb.SELECT_EXIST;if(!r().isEmpty(s[O][K].fieldsMapping)&&(!N&&r().get(i,[O,K,"dbName"])||N)){var Ae=s[O][K].fieldsMapping.map(function(be){var me={sourceField:(0,Y.default)({},be.sourceField,{alias:be.sourceField.name}),destField:(0,Y.default)({},be.destField,{alias:be.destField.name})};return Fe?b&&N?{sourceField:r().pick(me.sourceField,["id","isTitle","jdbcTypeId","isCheck","oid","controlSetting"]),destField:me.destField.isCheck?r().pick(me.destField,["name","isTitle","jdbcTypeId","isCheck","oid","comment"]):null}:(0,Y.default)({},me,{destField:me.destField.isCheck?me.destField:null}):N?{sourceField:b?r().pick(me.sourceField,["id","isTitle","jdbcTypeId","isCheck","oid"]):me.sourceField,destField:me.destField.isCheck?b?r().pick(me.destField,["id","isTitle","jdbcTypeId","isCheck","oid"]):r().pick(me.destField,["id","isTitle","jdbcTypeId","isPk","isNotNull","isCheck","oid"]):null}:me.destField.isCheck?me:(0,Y.default)({},me,{destField:null})}),ye=Ae.map(function(be){return be.sourceField}),$e=Ae.map(function(be){return be.destField}).filter(function(be){return be!==null}),cn=(r().get(W,[O,K,"fields"])||[]).filter(function(be){return be.id===r().get(i,[O,K,"fieldForIdentifyDuplicate"])})[0]||{},we=N&&r().get(i,[O,K,"sheetCreateType"])===g.Rb.SELECT_EXIST?{writeMode:r().get(i,[O,K,"writeMode"]),fieldForIdentifyDuplicate:r().isEmpty(cn)?void 0:cn,isCleanDestTableData:r().get(i,[O,K,"isCleanDestTableData"])}:{},uo={projectId:t.currentProjectId,owner:md.global.Account.accountId,sourceNode:{nodeId:"1",name:_l("\u6E90\u8868\u8282\u70B9"),nodeType:"SOURCE_TABLE",description:_l("\u8FD9\u662F\u4E00\u4E2A\u6E90\u8868\u8282\u70B9"),fields:ye,config:{datasourceId:l.id,dbName:l.type===g.Lu.KAFKA?s[O][K].tableName:O,tableName:s[O][K].tableName,schema:s[O][K].schema,dsType:l.type,className:l.className,iconBgColor:l.iconBgColor,appId:b?l.id:void 0,workSheetId:b?K:void 0,fields:ye}},destNode:{nodeId:"2",name:_l("\u76EE\u7684\u5730\u8282\u70B9"),nodeType:"DEST_TABLE",description:_l("\u8FD9\u662F\u4E00\u4E2A\u76EE\u7684\u5730\u8282\u70B9"),fields:$e,config:(0,Y.default)({dataDestId:a.id,dbName:r().get(i,[O,K,"dbName"]),tableName:r().get(i,[O,K,"sheetName"]),schema:r().get(i,[O,K,"schemaName"]),createTable:r().get(i,[O,K,"sheetCreateType"])!==g.Rb.SELECT_EXIST,dsType:a.type,className:a.className,iconBgColor:a.iconBgColor,appId:N?a.id:void 0,workSheetId:N?r().get(i,[O,K,"sheetNameValue"]):void 0,fieldsMapping:Ae,appSectionId:r().get(i,[O,K,"appSectionId"])},we)},workflowConfig:N?{insertTrigger:!!r().get(i,[O,K,"insertTrigger"]),updateTrigger:!!r().get(i,[O,K,"updateTrigger"]),deleteTrigger:!!r().get(i,[O,K,"deleteTrigger"])}:void 0,tableList:r().get(w,[n.db,n.table,"sheetOptionList"])||[]};J.push(uo)}};for(var oe in s[O])te(oe)};for(var M in s)E(M);f&&f(J)},[s,i,w]),(0,e.useEffect)(function(){n.table&&(ae(),r().get(s,[n.db,n.table,"fieldsMapping"])||(b?In.Z.getWorksheetInfo({worksheetId:n.table,getTemplate:!0}).then(function(J){if(J){var E=(0,fe.GA)(J.template.controls,!1,b,N,n.table);r().isEmpty(E)?V(s,c,{fieldsMapping:[]}):ce.Z.fillJdbcType({worksheetId:n.table,fields:E}).then(function(M){M&&(V(m,x,{fields:M,workSheetId:n.table}),q({initMapping:(0,fe.Dm)(M,b,a.type),sourceFields:M,isCreate:r().get(i,[n.db,n.table,"sheetCreateType"])!==g.Rb.SELECT_EXIST}))})}}):Ze()))},[n]);var Ze=function(){R(!0);var E={projectId:t.currentProjectId,datasourceId:l.id,dbName:l.type===g.Lu.KAFKA?n.tableName:n.db,schema:n.schema,tableName:n.tableName,destType:a.type};ce.Z.getTableFields(E).then(function(M){if(M){R(!1);var z=r().isArray(M)?M:[];V(m,x,{fields:z}),q({initMapping:(0,fe.Dm)(z,b,a.type),sourceFields:z,isCreate:r().get(i,[n.db,n.table,"sheetCreateType"])!==g.Rb.SELECT_EXIST})}}).catch(function(){return R(!1)})},ae=function(){var E=r().get(i,[n.db,n.table,"dbName"]),M=r().get(i,[n.db,n.table,"schemaName"]),z=r().get(i,[n.db,n.table,"sheetName"]),O=r().get(i,[n.db,n.table,"sheetCreateType"]),te={dbName:null,schemaName:null,schemaOptionList:null,sheetOptionList:null};if(!r().isEmpty(i)){for(var oe in i)for(var xe in i[oe])if(i[oe][xe].dbName){te=(0,Y.default)({},r().pick(i[oe][xe],["dbName","schemaName"]),r().pick(w[oe][xe],["schemaOptionList","sheetOptionList"]));break}}(!E&&te.dbName||!M&&te.schemaName||!z&&O!==g.Rb.SELECT_EXIST)&&(V(i,S,(0,Y.default)({},r().pick(te,["dbName","schemaName"]),{sheetName:n.tableName})),V(w,p,r().pick(te,["schemaOptionList","sheetOptionList"])))},ln=function(E){var M=(0,fe.Dm)(r().get(m,[n.db,n.table,"fields"])||[],b,a.type);q({initMapping:M,noFetchSet:!0}),ee?ce.Z.getSchemas({projectId:t.currentProjectId,datasourceId:a.id,dbName:E.value}).then(function(z){if(z){var O=z.map(function(te){return{label:te,value:te}});V(i,S,{dbName:E.value,schemaName:null,sheetNameValue:null}),V(w,p,{schemaOptionList:O})}}):V(i,S,{dbName:E.value,sheetNameValue:null})},ne=function(E){var M=(0,fe.Dm)(r().get(m,[n.db,n.table,"fields"])||[],b,a.type);q({initMapping:M,noFetchSet:!0}),V(i,S,{schemaName:E.value})},ke=function(){var J=(0,ca.Z)(yn().mark(function E(M){var z,O,te,oe,xe,K;return yn().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:z={},O=r().get(i,[n.db,n.table]),te=O.sheetNameValue,oe=O.writeNode,M===g.Rb.NEW?z.sheetName=n.tableName:(z.sheetName=te||"",z.appSectionId=null,oe||(z.writeMode="SKIP",z.isCleanDestTableData=!1),xe=r().get(w,[n.db,n.table,"sheetOptionList"])||[],te&&(z.sheetName=xe.filter(function(ye){return ye.value===te})[0].workSheetName)),V(i,S,(0,Y.default)({sheetCreateType:M},z)),K=(0,fe.Dm)(r().get(m,[n.db,n.table,"fields"])||[],b,a.type),!r().isEmpty(K)&&q({initMapping:K,sourceFields:r().get(m,[n.db,n.table,"fields"])||{},isCreate:M===g.Rb.NEW,noFetchSet:!1,isSetDefaultFields:M===g.Rb.SELECT_EXIST&&!!r().get(W,[n.db,n.table,"fields"]),destFields:r().get(W,[n.db,n.table,"fields"])});case 6:case"end":return Ae.stop()}},E,o)}));return function(M){return J.apply(this,arguments)}}(),Ce=function(E){var M=(0,fe.Dm)(r().get(m,[n.db,n.table,"fields"])||[],b,a.type);if(r().isEmpty(M)){V(i,S,{sheetName:E.label,sheetNameValue:E.value});return}if(N)V(i,S,{sheetName:E.label,sheetNameValue:E.value}),In.Z.getWorksheetInfo({worksheetId:E.value,getTemplate:!0}).then(function(O){if(O){var te=(0,fe.GA)(O.template.controls,!0,b,N,E.value);ce.Z.fillJdbcType({worksheetId:E.value,fields:te}).then(function(oe){oe&&(V(W,re,{fields:oe,workSheetId:E.value}),q({initMapping:M,noFetchSet:!0,isSetDefaultFields:!0,destFields:oe}))})}});else{var z={projectId:t.currentProjectId,datasourceId:a.id,dbName:r().get(i,[n.db,n.table,"dbName"]),schema:r().get(i,[n.db,n.table,"schemaName"]),tableName:E.label};ce.Z.getTableFields(z).then(function(O){if(O){var te=O.filter(function(oe){return oe.isPk});te.length>0?(V(i,S,{sheetName:E.label,sheetNameValue:E.value}),V(W,re,{fields:O}),q({initMapping:M,noFetchSet:!0,isSetDefaultFields:!0,destFields:O})):alert(_l("\u8BE5\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u540C\u6B65"),2)}})}},_e=function(){var E=r().get(W,[n.db,n.table,"fields"])||[],M=E.filter(function(z){return r().includes([2,3,4,5,7,33],z.mdType)}).map(function(z){return{label:e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(B.Z,{icon:(0,kn.hB)(z.mdType,!1),className:"Gray_9e Font18"}),e.createElement("span",{title:z.name,className:"mLeft8 overflow_ellipsis Gray"},z.name)),value:z.id}});return e.createElement(e.Fragment,null,e.createElement("p",{className:"mTop20 mBottom8 bold"},_l("\u91CD\u590D\u6570\u636E")),e.createElement("p",{className:"mBottom12 Gray_9e"},_l("\u672A\u9009\u62E9\u76EE\u6807\u5B57\u6BB5\u65F6, \u4F1A\u6839\u636E\u6570\u636E\u6E90\u7684\u4E3B\u952E\u5B57\u6BB5\u5224\u65AD\u91CD\u590D")),e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("span",{className:"nowrap"},_l("\u5728\u540C\u6B65\u65F6\uFF0C\u4F9D\u636E\u76EE\u6807\u5B57\u6BB5")),e.createElement("div",{className:"Width120 mLeft12 mRight12"},e.createElement(Te.default,{className:"selectItem",allowClear:!0,options:M,value:r().get(i,[n.db,n.table,"fieldForIdentifyDuplicate"]),onChange:function(O){return V(i,S,{fieldForIdentifyDuplicate:O})}})),e.createElement("span",{className:"nowrap"},_l("\u8BC6\u522B\u91CD\u590D\uFF0C\u5E76")),e.createElement("div",{className:"Width70 mLeft12 mRight12"},e.createElement(Te.default,{className:"selectItem",options:[{label:_l("\u8DF3\u8FC7"),value:"SKIP"},{label:_l("\u8986\u76D6"),value:"OVERWRITE"}],value:r().get(i,[n.db,n.table,"writeMode"]),onChange:function(O){return V(i,S,{writeMode:O})}})),r().get(i,[n.db,n.table,"writeMode"])==="OVERWRITE"&&e.createElement(Le.Z,{text:_l("\u201C\u8986\u76D6\u201D\u4F1A\u5BFC\u81F4\u6570\u636E\u540C\u6B65\u53D8\u6162\u3002")},e.createElement(B.Z,{icon:"info_outline",className:"Font16 Gray_bd pointer"}))),e.createElement("div",{className:"mTop20"},e.createElement(Cn.Z,{size:"small",text:_l("\u5728\u672C\u6B21\u540C\u6B65\u6570\u636E\u4E4B\u524D\uFF0C\u5F7B\u5E95\u6E05\u7A7A\u76EE\u6807\u8868\u6570\u636E"),checked:r().get(i,[n.db,n.table,"isCleanDestTableData"]),onClick:function(O){O?V(i,S,{isCleanDestTableData:!O}):Se.Z.confirm({title:_l("\u6E05\u7A7A\u76EE\u6807\u8868\u6570\u636E"),description:_l("\u5728\u672C\u6B21\u540C\u6B65\u4EFB\u52A1\u524D\uFF0C\u6E05\u7A7A\u76EE\u7684\u5730\u8868\u6570\u636E\uFF0C\u6E05\u7A7A\u540E\u65E0\u6CD5\u6062\u590D\u3002"),buttonType:"danger",okText:_l("\u786E\u8BA4"),onOk:function(){return V(i,S,{isCleanDestTableData:!O})}})}})))},Ue=function(){var E=(r().get(m,[n.db,n.table,"fields"])||[]).filter(function(K){return K.isPk}).length;if(!(!b&&E===0||b&&!N))return null;var M=r().get(m,[n.db,n.table,"fields"])||[],z=M.filter(function(K){return!(0,fe.Wu)(K,r().get(U,[n.db,n.table,"matchedTypes"])||{})&&(b||(!!K.isNotNull||l.type===g.Lu.KAFKA)&&!!K.isCanBePk)}).map(function(K){return{label:e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(B.Z,{icon:(0,kn.hB)(K.mdType,!1),className:"Gray_9e Font18"}),e.createElement("span",{title:K.name,className:"mLeft8 overflow_ellipsis Gray"},K.name)),value:K.id}}),O=r().get(s,[n.db,n.table,"fieldsMapping"])||[],te=(O.filter(function(K){return K.sourceField.isPk})[0]||{}).sourceField||{},oe=r().get(i,[n.db,n.table,"sheetCreateType"]),xe=function(Fe){var Ae=O.map(function(ye){var $e=ye.sourceField||{},cn=ye.destField||{},we=$e.id===Fe;return{sourceField:(0,Y.default)({},ye.sourceField,{isPk:we,isCheck:we,isFakePk:we}),destField:(0,Y.default)({},ye.destField,{isPk:we,isCheck:we,isFakePk:we,id:null,name:a.type===g.Lu.MONGO_DB&&we?"_id":$e.name.replace(g.ES,""),isNotNull:we})}});q({initMapping:(0,fe.AM)(Ae),sourceFields:Ae.map(function(ye){return ye.sourceField}),isCreate:oe!==g.Rb.SELECT_EXIST,noFetchSet:!1,isSetDefaultFields:oe===g.Rb.SELECT_EXIST&&!!r().get(W,[n.db,n.table,"fields"]),destFields:r().get(W,[n.db,n.table,"fields"])})};return e.createElement(e.Fragment,null,e.createElement("p",{className:"mBottom16 bold"},_l("\u8BBE\u7F6E\u4E3B\u952E")),e.createElement("div",{className:"flexRow alignItemsCenter mBottom20"},e.createElement("span",{className:"nowrap"},_l("\u5728\u540C\u6B65\u65F6\uFF0C\u6307\u5B9A\u6570\u636E\u6E90\u5B57\u6BB5")),e.createElement("div",{className:"Width120 mLeft12 mRight12"},e.createElement(Te.default,{className:"selectItem",options:z,value:te.id,notFoundContent:_l("\u6682\u65E0\u6570\u636E"),onChange:xe})),e.createElement("span",{className:"nowrap"},_l("\u4E3A\u4E3B\u952E")),e.createElement(Le.Z,{text:b?_l("\u4EC5\u7528\u4E8E\u6570\u636E\u540C\u6B65\uFF0C\u4E0D\u4F1A\u6539\u53D8\u6570\u636E\u5E93\u5B57\u6BB5\u5C5E\u6027\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7D22\u5F15\u5217\u3002"):_l("\u53EA\u53EF\u4EE5\u9009\u975E\u7A7A\u5B57\u6BB5\u3002\u4EC5\u7528\u4E8E\u6570\u636E\u540C\u6B65\uFF0C\u4E0D\u4F1A\u6539\u53D8\u6570\u636E\u5E93\u5B57\u6BB5\u5C5E\u6027\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7D22\u5F15\u5217\u3002")},e.createElement(B.Z,{icon:"info_outline",className:"Font16 Gray_bd pointer mLeft12"}))))},sn=!!(r().get(m,[n.db,n.table,"fields"])||[]).filter(function(J){return J.fid==="composite_primary_key"}).length;return e.createElement(ka,null,e.createElement("div",{className:"tabNav",onClick:u},e.createElement("span",null,_l("\u4EC5\u540C\u6B65\u6570\u636E"))),e.createElement("div",{className:"flexRow h100"},e.createElement(Ca,(0,Y.default)({},t,{currentTab:n,setCurrentTab:I,onDelete:function(E,M){var z=r().cloneDeep(i),O=r().clone(s);O[E][M]&&(O[E][M].fieldsMapping=null,z[E][M].dbName=null,z[E][M].sheetName=null,z[E][M].sheetNameValue=null,z[E][M].sheetCreateType=g.Rb.NEW,S(z),c(O))}})),e.createElement("div",{className:"middleArrow"},e.createElement(B.Z,{icon:"arrow_down",className:"Font24"})),e.createElement("div",{className:"flex flexColumn"},e.createElement("div",{className:"titleItem mTop16"},e.createElement("div",{className:"iconWrapper"},e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+r().get(a,"className")}))),e.createElement("span",{title:a.sourceName},a.sourceName)),n.table?e.createElement("div",{className:"mTop16 flex flexColumn"},!N&&e.createElement("div",{className:"dbItem"},e.createElement("div",{className:"itemInput"},e.createElement("p",{className:"mBottom8 bold"},_l("\u6570\u636E\u5E93")),e.createElement(Te.default,{className:"selectItem mBottom20",showSearch:!0,labelInValue:!0,placeholder:_l("\u8BF7\u9009\u62E9"),notFoundContent:_l("\u6682\u65E0\u6570\u636E"),value:r().get(i,[n.db,n.table,"dbName"]),options:w.dbOptionList,onChange:function(E){return ln(E)}})),ee&&e.createElement("div",{className:"itemInput"},e.createElement("p",{className:"mBottom8 bold"},"schema"),e.createElement(Te.default,{className:"selectItem mBottom20",showSearch:!0,labelInValue:!0,placeholder:_l("\u8BF7\u9009\u62E9"),notFoundContent:_l("\u6682\u65E0\u6570\u636E"),value:r().get(i,[n.db,n.table,"schemaName"]),options:r().get(w,[n.db,n.table,"schemaOptionList"]),onChange:function(E){return ne(E)}}))),(N||!ee&&r().get(i,[n.db,n.table,"dbName"])||ee&&r().get(i,[n.db,n.table,"schemaName"]))&&e.createElement("div",{className:"flexColumn flex"},e.createElement("p",{className:"mBottom16 bold"},N?_l("\u5DE5\u4F5C\u8868"):_l("\u6570\u636E\u8868")),e.createElement(la.ZP,{className:"mBottom20",data:g.kj,checkedValue:r().get(i,[n.db,n.table,"sheetCreateType"])||g.Rb.NEW,onChange:function(E){return ke(E)}}),e.createElement("div",{className:"flexRow"},N&&r().get(i,[n.db,n.table,"sheetCreateType"])!==g.Rb.SELECT_EXIST&&e.createElement(ya.Z,{appId:a.id,value:r().get(i,[n.db,n.table,"appSectionId"]),onChange:function(E){V(i,S,{appSectionId:E})}}),e.createElement("div",null,e.createElement("p",{className:"mBottom8 bold"},N?_l("\u5DE5\u4F5C\u8868\u540D\u79F0"):_l("\u6570\u636E\u8868\u540D\u79F0")),e.createElement("div",{className:"sheetNameWidth"},r().get(i,[n.db,n.table,"sheetCreateType"])===g.Rb.SELECT_EXIST?e.createElement(Nn.Z,{className:"selectItem mBottom20",value:r().get(i,[n.db,n.table,"sheetNameValue"]),options:r().get(w,[n.db,n.table,"sheetOptionList"]),onChangeOptions:function(E){return V(w,p,{sheetOptionList:E})},onChangeTable:Ce,projectId:t.currentProjectId,datasourceId:a.id,dbName:r().get(i,[n.db,n.table,"dbName"]),schema:r().get(i,[n.db,n.table,"schemaName"]),isAppType:N,isSameDbObj:N?l.id===a.id:l.id===a.id&&n.db===r().get(i,[n.db,n.table,"dbName"])&&(!ee||n.schema===r().get(i,[n.db,n.table,"schemaName"])),sourceTables:[N?n.table:n.tableName]}):e.createElement(En.Z,{className:"mBottom20 w100",value:r().get(i,[n.db,n.table,"sheetName"]),onBlur:function(E){return V(i,S,{sheetName:E.target.value.replace(g.ES,"")})},onChange:function(E){return V(i,S,{sheetName:E})}})))),e.createElement("div",{className:"pBottom20 h100 flexColumn"},Ee&&e.createElement(ve.Z,{className:"mTop10"}),!Ee&&(r().get(i,[n.db,n.table,"sheetCreateType"])!==g.Rb.SELECT_EXIST||!!r().get(i,[n.db,n.table,"sheetNameValue"]))&&r().get(s,[n.db,n.table,"fieldsMapping"])&&e.createElement(e.Fragment,null,!b&&N&&sn&&e.createElement("div",{className:"multiplePkTips"},_l("\u6570\u636E\u6E90\u4E3A\u591A\u4E3B\u952E\u8868\uFF0C\u4F1A\u65B0\u589E\u4E00\u4E2A\u540D\u4E3Acomposite_primary_key\u7684\u4E3B\u952E\uFF0C\u4F5C\u4E3A\u540C\u6B65\u5230\u5DE5\u4F5C\u8868\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u5176\u503C\u7531\u591A\u4E2A\u4E3B\u952E\u503C\u62FC\u63A5\u800C\u6210\u3002")),Ue(),e.createElement("p",{className:"bold"},_l("\u8BBE\u7F6E\u540C\u6B65\u5B57\u6BB5")),r().isEmpty(r().get(s,[n.db,n.table,"fieldsMapping"]))&&l.type!==g.Lu.KAFKA?e.createElement(wn,null,e.createElement("div",{className:"TxtCenter"},e.createElement("div",{className:"noContentIcon"},e.createElement(B.Z,{icon:"ic-line",className:"Font64"})),e.createElement("p",{className:"Gray_75 Font15 mTop24 mBottom0"},_l("\u6570\u636E\u6E90\u6682\u65E0\u53EF\u6620\u5C04\u5B57\u6BB5")))):e.createElement(e.Fragment,null,e.createElement(da.Z,{isCreate:r().get(i,[n.db,n.table,"sheetCreateType"])!==g.Rb.SELECT_EXIST,sourceData:{sourceFields:r().get(m,[n.db,n.table,"fields"]),isDbType:!b,dsType:l.type},destData:{destFields:r().get(W,[n.db,n.table,"fields"]),isDbType:!N,dsType:a.type},fieldsMapping:r().get(s,[n.db,n.table,"fieldsMapping"]),setFieldsMapping:function(E){return V(s,c,{fieldsMapping:E})},matchedTypes:r().get(U,[n.db,n.table,"matchedTypes"])}),l.type===g.Lu.KAFKA&&e.createElement("div",{className:"loadSheetWrap",onClick:function(){return Ze()}},e.createElement(B.Z,{icon:"refresh1",className:"Font16 mRight8"}),e.createElement("div",null,_l("\u52A0\u8F7D\u8868\u7ED3\u6784"))),N&&r().get(i,[n.db,n.table,"sheetCreateType"])===g.Rb.SELECT_EXIST&&_e(),N&&e.createElement(e.Fragment,null,e.createElement("p",{className:"mTop20 mBottom8 bold"},_l("\u89E6\u53D1\u5DE5\u4F5C\u6D41")),e.createElement("p",{className:"mBottom12 Gray_9e"},_l("\u540C\u6B65\u6570\u636E\u65F6\uFF0C\u662F\u5426\u89E6\u53D1\u5DE5\u4F5C\u8868\u7ED1\u5B9A\u7684\u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41")),e.createElement("div",{className:"flexRow"},g.Jm.map(function(J){var E=r().get(i,[n.db,n.table,J.key]);return e.createElement(Cn.Z,{key:J.key,size:"small",className:"pRight30",checked:E,onClick:function(){return V(i,S,(0,se.default)({},J.key,!E))}},J.text)})))))))):e.createElement(wn,null,e.createElement("div",{className:"TxtCenter"},e.createElement("div",{className:"noContentIcon"},e.createElement(B.Z,{icon:"ic-line",className:"Font64"})),e.createElement("p",{className:"Gray_75 Font15 mTop24 mBottom0"},_l("\u8BF7\u5148\u4ECE\u5DE6\u4FA7\u9009\u62E9\u6570\u636E\u5BF9\u8C61")))))))}var Sn=d(72045),Tn=d(79575),Qe=d(36021),Sa=d(80096),Ta=d.n(Sa),La=d(5813),Za=d.n(La),Pa=(0,P.Z)([`
  display: flex;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  .selectCreateType {
    margin: 0 auto;
    .titleText {
      font-size: 17px;
      font-weight: 600;
      margin-top: 32px;
    }
  }

  .selectItem {
    width: 100% !important;
    font-size: 13px;
    .ant-select-selector {
      min-height: 36px;
      padding: 2px 11px !important;
      border: 1px solid #ccc !important;
      border-radius: 3px !important;
      box-shadow: none !important;
    }
    &.ant-select-focused {
      .ant-select-selector {
        border-color: #1e88e5 !important;
      }
    }
    &.disabled {
      .ant-select-selector {
        border: 0;
      }
    }
  }
  .tabNav {
    height: 32px;
    width: fit-content;
    border: 2px solid #f2f2f2;
    border-radius: 12px;
    padding: 0 16px;
    cursor: pointer;
    span {
      font-weight: 600;
      line-height: 28px;
    }
    &:hover {
      border-color: #2196f3;
    }
  }
  .titleItem {
    display: inline-flex;
    height: 24px;
    .iconWrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 6px;
      background: #ecf4f9;
      .svg-icon {
        width: 16px;
        height: 16px;
      }
    }
    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`],[`
  display: flex;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  .selectCreateType {
    margin: 0 auto;
    .titleText {
      font-size: 17px;
      font-weight: 600;
      margin-top: 32px;
    }
  }

  .selectItem {
    width: 100% !important;
    font-size: 13px;
    .ant-select-selector {
      min-height: 36px;
      padding: 2px 11px !important;
      border: 1px solid #ccc !important;
      border-radius: 3px !important;
      box-shadow: none !important;
    }
    &.ant-select-focused {
      .ant-select-selector {
        border-color: #1e88e5 !important;
      }
    }
    &.disabled {
      .ant-select-selector {
        border: 0;
      }
    }
  }
  .tabNav {
    height: 32px;
    width: fit-content;
    border: 2px solid #f2f2f2;
    border-radius: 12px;
    padding: 0 16px;
    cursor: pointer;
    span {
      font-weight: 600;
      line-height: 28px;
    }
    &:hover {
      border-color: #2196f3;
    }
  }
  .titleItem {
    display: inline-flex;
    height: 24px;
    .iconWrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 6px;
      background: #ecf4f9;
      .svg-icon {
        width: 16px;
        height: 16px;
      }
    }
    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`]),Da=(0,P.Z)([`
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 200px;
  background: #fff;
  border: 2px solid #f2f2f2;
  border-radius: 12px;
  padding: 32px;
  margin-top: 16px;
  cursor: pointer;

  .Radio-text {
    font-size: 17px;
    font-weight: 500;
  }
  &:hover {
    border-color: #2196f3;
  }
`],[`
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 200px;
  background: #fff;
  border: 2px solid #f2f2f2;
  border-radius: 12px;
  padding: 32px;
  margin-top: 16px;
  cursor: pointer;

  .Radio-text {
    font-size: 17px;
    font-weight: 500;
  }
  &:hover {
    border-color: #2196f3;
  }
`]),ja=D.ZP.div(Pa),Ln=D.ZP.div(Da);function Oa(t){var o=t.currentProjectId,u=t.source,l=t.dest,a=(0,e.useState)(g.Jz.NO_SELECT),f=(0,k.Z)(a,2),T=f[0],C=f[1],n=function(){var F=u.type===g.Lu.KAFKA?{dbName:r().get(u,["formData","extraParams","topic"]),tableName:r().get(u,["formData","extraParams","topic"])}:{},Z={projectId:o,owner:md.global.Account.accountId,sourceNode:{nodeId:(0,Sn.Z)(),name:_l("\u6E90\u8868\u8282\u70B9"),nodeType:"SOURCE_TABLE",config:(0,Y.default)({datasourceId:u.id,dsType:u.type,className:u.className,iconBgColor:u.iconBgColor},F)},destNode:{nodeId:(0,Sn.Z)(),name:_l("\u76EE\u7684\u5730\u8282\u70B9"),nodeType:"DEST_TABLE",config:{dataDestId:l.id,dsType:l.type,className:l.className,iconBgColor:l.iconBgColor}}};Tn.Z.initEmpty(Z).then(function(w){w.id&&(0,Qe.T8)("/integration/taskCon/"+w.id)})};return e.createElement(ja,null,T===g.Jz.NO_SELECT&&e.createElement("div",{className:"selectCreateType"},e.createElement("p",{className:"titleText"},_l("\u9009\u62E9\u521B\u5EFA\u65B9\u5F0F")),e.createElement(Ln,{onClick:function(){return C(g.Jz.ONLY_SYNC)}},e.createElement("div",null,e.createElement(vn.Z,{text:_l("\u4EC5\u540C\u6B65\u6570\u636E"),checked:T==="onlySync"}),e.createElement("div",{className:"Gray_9e mTop8 mLeft30"},_l("\u6279\u91CF\u521B\u5EFA\u540C\u6B65\u4EFB\u52A1\uFF0C(\u540E\u7EED\u53EF\u5728\u4EFB\u52A1\u5217\u8868\u4E2D\u6DFB\u52A0\u6570\u636E\u5904\u7406\u6B65\u9AA4\uFF09"))),e.createElement("img",{src:Ta(),width:330})),e.createElement(Ln,{onClick:function(){return n()}},e.createElement("div",null,e.createElement(vn.Z,{text:_l("\u540C\u6B65\u65F6\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406"),checked:T===g.Jz.SYNC_WITH_DEAL}),e.createElement("div",{className:"Gray_9e mTop8 mLeft30"},_l("\u521B\u5EFA\u5355\u4E2A\u540C\u6B65\u4EFB\u52A1\uFF0C\u5E76\u7ACB\u5373\u5BF9\u5176\u6DFB\u52A0\u6570\u636E\u5904\u7406\u6B65\u9AA4"))),e.createElement("img",{src:Za(),width:330}))),T===g.Jz.ONLY_SYNC&&e.createElement(wa,(0,Y.default)({},t,{onClose:function(){return C(g.Jz.NO_SELECT)}})))}var je=d(60235),ho=d(21352),Fa=(0,P.Z)([`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`],[`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`]),Ba=(0,P.Z)([`
  display: flex;
  z-index: 1;
  height: 64px;
  min-height: 64px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.16);

  .headerLeft {
    display: flex;
    align-items: center;
    padding-left: 32px;
    cursor: pointer;
  }

  .headerMiddle {
    ul {
      text-align: center;
      li {
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        .stepIcon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f4f4f4;
          color: #9e9e9e;
        }
        span {
          line-height: 20px;
          margin-left: 5px;
          color: #9e9e9e;
        }
        .connectLine {
          height: 1px;
          width: 50px;
          margin: 0 16px;
          background-color: #ddd;
        }

        &.isActive {
          .stepIcon {
            background: #2196f3;
            color: #fff;
          }
          span {
            color: #333;
          }
        }
        &.isComplete {
          .stepIcon {
            background-color: #ecf6fe;
            color: #2196f3;
          }
          span {
            color: #9e9e9e;
          }
          .connectLine {
            background-color: #2196f3;
          }
        }
      }
    }
  }

  .headerRight {
    display: inline-flex;
    padding-right: 32px;
    .commonButton {
      height: 36px;
      min-width: 102px;
      &.disabled {
        background: #93c4f1 !important;
      }
    }
    .lastStepButton {
      margin-right: 16px;
      border: 1px solid #2196f3;
      background: #fff;
      color: #2196f3;
    }
  }
`],[`
  display: flex;
  z-index: 1;
  height: 64px;
  min-height: 64px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.16);

  .headerLeft {
    display: flex;
    align-items: center;
    padding-left: 32px;
    cursor: pointer;
  }

  .headerMiddle {
    ul {
      text-align: center;
      li {
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        .stepIcon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f4f4f4;
          color: #9e9e9e;
        }
        span {
          line-height: 20px;
          margin-left: 5px;
          color: #9e9e9e;
        }
        .connectLine {
          height: 1px;
          width: 50px;
          margin: 0 16px;
          background-color: #ddd;
        }

        &.isActive {
          .stepIcon {
            background: #2196f3;
            color: #fff;
          }
          span {
            color: #333;
          }
        }
        &.isComplete {
          .stepIcon {
            background-color: #ecf6fe;
            color: #2196f3;
          }
          span {
            color: #9e9e9e;
          }
          .connectLine {
            background-color: #2196f3;
          }
        }
      }
    }
  }

  .headerRight {
    display: inline-flex;
    padding-right: 32px;
    .commonButton {
      height: 36px;
      min-width: 102px;
      &.disabled {
        background: #93c4f1 !important;
      }
    }
    .lastStepButton {
      margin-right: 16px;
      border: 1px solid #2196f3;
      background: #fff;
      color: #2196f3;
    }
  }
`]),Ra=(0,P.Z)([`
  display: flex;
  height: 100%;
  background-color: #fafafa;

  .configForm {
    flex: 2;
    height: calc(100vh - 64px);
    overflow: auto;
    padding: 0px 80px;
    background-color: #fff;
    font-size: 13px;
  }

  .configGuide {
    flex: 1;
    padding: 20px;
    height: calc(100vh - 50px);
    min-width: 400px;
    overflow: auto;
  }
`],[`
  display: flex;
  height: 100%;
  background-color: #fafafa;

  .configForm {
    flex: 2;
    height: calc(100vh - 64px);
    overflow: auto;
    padding: 0px 80px;
    background-color: #fff;
    font-size: 13px;
  }

  .configGuide {
    flex: 1;
    padding: 20px;
    height: calc(100vh - 50px);
    min-width: 400px;
    overflow: auto;
  }
`]),Ma=D.ZP.div(Fa),Qa=D.ZP.div(Ba),Ua=D.ZP.div(Ra);function za(t){var o=t.onClose,u=(0,le.Z)(t.connectorConfigData),l=(0,k.Z)(u,2),a=l[0],f=l[1],T=(0,e.useState)(0),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=(0,e.useState)(!0),Z=(0,k.Z)(F,2),w=Z[0],p=Z[1],j=(0,e.useState)([]),L=(0,k.Z)(j,2),i=L[0],S=L[1],y=(0,e.useState)({visible:!1}),h=(0,k.Z)(y,2),m=h[0],x=h[1],H=a.source.type===g.Lu.APPLICATION_WORKSHEET,Q=a.dest.type===g.Lu.APPLICATION_WORKSHEET,W=function(){return(n===0?g.bA.SOURCE:g.bA.DEST).toLowerCase()},re=function(){var c=W(),A=a[c],v=A.formData;if(A.type!==g.Lu.APPLICATION_WORKSHEET&&!(A.sourceName||"").trim()){alert(_l("\u6570\u636E\u6E90\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),2);return}if((n===0&&!r().includes([24,36],a.dest.id.length)||n!==0)&&p(!0),I(n+1),A.createType!==g.Rb.SELECT_EXIST&&A.type!==g.Lu.APPLICATION_WORKSHEET){var U={projectId:t.currentProjectId,name:A.sourceName,hosts:[v.address+":"+v.post],user:v.user,password:v.password,initDb:v.initDb,connectOptions:v.connectOptions,cdcParams:v.cdcParams,type:A.type,fromType:A.fromType,roleType:n===0?g.bA.SOURCE:g.bA.DEST,extraParams:(0,fe.q8)(A.type,v)};ce.Z.addDatasource(U).then(function(de){de&&f((0,se.default)({},c,rn()({},A,{id:de})))})}},ue=function(){if(i.length===0)return alert(Q?_l("\u6CA1\u6709\u53EF\u521B\u5EFA\u7684\u540C\u6B65\u4EFB\u52A1"):_l("\u8BF7\u5148\u9009\u62E9\u76EE\u6807\u6570\u636E\u5E93"),2),!1;if(a.dest.hasSchema&&i.filter(function(N){return!r().get(N,["destNode","config","schema"])}).length>0)return alert(_l("\u672A\u9009\u62E9Schema"),2),!1;if(i.filter(function(N){return!(r().get(N,["destNode","config","tableName"])||"").trim()}).length>0)return alert(_l("\u672A\u9009\u62E9\u6216\u586B\u5199\u6570\u636E\u8868"),2),!1;var c=!0,A=!0,v=!0,U=!0,de=!1,Ne=!1,Ie=!1,Ee=!1,R=!0;i.forEach(function(N){var ee=r().get(N,["destNode","config","createTable"]);if(N.destNode.fields.filter(function(ae){return ae.isPk}).length===0&&!(H&&Q)){c=!1;return}if(N.destNode.fields.length===0){A=!1;return}if(ee&&Q&&N.destNode.fields.filter(function(ae){return ae.isTitle}).length===0){R=!1;return}N.destNode.fields.forEach(function(ae){if(ee)switch(!0){case(H&&Q):ae.name.trim()||(v=!1);break;case(!H&&Q):(!ae.name.trim()||!ae.alias||!ae.jdbcTypeId||!ae.mdType)&&(v=!1);break;default:(!ae.name.trim()||!ae.alias||!ae.jdbcTypeId)&&(v=!1);break}else ae.isPk&&!ae.id&&(U=!1)});var V=r().get(N,["destNode","config","tableName"]),q=N.tableList||[];if(ee)if(Q)N.destNode.fields.length>200&&(Ee=!0);else{q.filter(function(ae){return ae.value===V}).length>0&&(de=!0);var Ze=N.destNode.fields.map(function(ae){return ae.name});Ze.length>r().uniq(Ze).length&&(Ie=!0)}});var b=i.filter(function(N){return!!r().get(N,["destNode","config","createTable"])&&!Q}).map(function(N){return N.destNode.config.tableName});return b.length>r().uniq(b).length&&(Ne=!0),c?A?v?U?de?(alert(_l("\u76EE\u6807\u8868\u540D\u79F0\u5DF2\u5B58\u5728, \u9700\u8981\u4FEE\u6539\u76EE\u7684\u5730\u8868\u540D\u79F0"),2),!1):Ie?(alert(_l("\u5B57\u6BB5\u540D\u4E0D\u80FD\u91CD\u590D"),2),!1):Ne?(alert(_l("\u65B0\u5EFA\u8868\u540D\u4E0D\u80FD\u91CD\u590D"),2),!1):Ee?(alert(_l("\u65B0\u5EFA\u5DE5\u4F5C\u8868\u5B57\u6BB5\u6570\u4E0D\u80FD\u8D85\u8FC7200"),2),!1):R?!0:(alert(_l("\u76EE\u6807\u5DE5\u4F5C\u8868\u672A\u8BBE\u7F6E\u6807\u9898\u5B57\u6BB5"),2),!1):(alert(_l("\u8BF7\u586B\u5199\u4E3B\u952E\u540C\u6B65\u5B57\u6BB5"),2),!1):(alert(_l("\u5DF2\u52FE\u9009\u7684\u5B57\u6BB5\u4FE1\u606F\u672A\u586B\u5199\u5B8C\u6574"),2),!1):(alert(_l("\u6709\u540C\u6B65\u4EFB\u52A1\u672A\u9009\u62E9\u4EFB\u4F55\u5B57\u6BB5"),2),!1):(alert(_l("\u6709\u540C\u6B65\u4EFB\u52A1\u672A\u9009\u62E9\u4E3B\u952E\u5B57\u6BB5"),2),!1)},G=function(){ue()&&je.Z.createOnlySyncTaskPreCheck({projectId:t.currentProjectId}).then(function(c){if(c.currentTaskNum+i.length>c.maxTaskNum)(0,pe.Yg)({projectId:t.currentProjectId,hint:_l("\u4F59\u91CF\u4E0D\u8DB3"),explainText:md.global.Config.IsLocal?_l("\u5F53\u524D\u7248\u672C\u6700\u591A\u53EF\u521B\u5EFA"+c.maxTaskNum+"\u4E2A\u540C\u6B65\u4EFB\u52A1, \u8BF7\u5347\u7EA7\u7248\u672C\u4EE5\u521B\u5EFA\u66F4\u591A\u540C\u6B65\u4EFB\u52A1"):_l("\u514D\u8D39\u7248\u6700\u591A\u53EF\u521B\u5EFA"+c.maxTaskNum+"\u4E2A\u540C\u6B65\u4EFB\u52A1, \u8BF7\u5347\u7EA7\u7248\u672C\u4EE5\u521B\u5EFA\u66F4\u591A\u540C\u6B65\u4EFB\u52A1"),isFree:!0});else{p(!0),x({visible:!0,type:"loading"});var A=i.map(function(v){return r().omit(v,"tableList")});Tn.Z.createSyncTasks(A).then(function(v){x({visible:!0,type:v.isSucceeded?"success":"error",errorMsgList:v.errorMsgList})}).catch(function(){p(!1),x({visible:!1})})}})};return e.createElement(Ma,null,e.createElement(Qa,null,e.createElement("div",{className:"headerLeft",onClick:o},e.createElement(B.Z,{icon:"arrow_back",className:"Gray_75 Font22 bold"}),e.createElement("span",{className:"Gray Font16 bold pLeft10"},_l("\u521B\u5EFA\u8FDE\u63A5\u5668"))),e.createElement("div",{className:"headerMiddle"},e.createElement("ul",null,g.ii.map(function(s,c){return e.createElement("li",{key:c,className:X()({isActive:c===n,isComplete:c<n})},e.createElement("div",{className:"stepIcon"},c<n?e.createElement(B.Z,{icon:"done",className:"Font16"}):c+1),e.createElement("span",null,s.text),c!==g.ii.length-1&&e.createElement("div",{className:"connectLine"}))}))),e.createElement("div",{className:"headerRight"},n!==0&&e.createElement(Xe.ZP,{type:"primary",className:"commonButton lastStepButton",onClick:function(){I(n-1),p(!1)}},_l("\u4E0A\u4E00\u6B65")),e.createElement(Xe.ZP,{type:"primary",className:X()("commonButton",{disabled:w}),disabled:w,onClick:n!==2?re:G},n===2?i.length?_l("\u521B\u5EFA%0\u4E2A\u540C\u6B65\u4EFB\u52A1",i.length):_l("\u521B\u5EFA\u540C\u6B65\u4EFB\u52A1"):_l("\u4E0B\u4E00\u6B65")))),n===2?e.createElement(Oa,(0,Y.default)({},t,{source:a.source,dest:a.dest,submitData:i,setSubmitData:S,setNextOrSaveDisabled:p})):e.createElement(Ua,null,e.createElement("div",{className:"configForm"},e.createElement(oa.Z,(0,Y.default)({},t,{connectorConfigData:a,setConnectorConfigData:f,isCreateConnector:!0,setSaveDisabled:p,roleType:W()}))),e.createElement("div",{className:"configGuide"},e.createElement(ia.Z,{source:a[W()],current:n===0?"source":"dest"}))),m.visible&&(m.type!=="error"?e.createElement(Se.Z,{visible:!0,width:640,className:"connectorResultDialog",showFooter:!1,closable:!1},e.createElement("div",{className:"flexColumn alignItemsCenter justifyContentCenter h100 TxtCenter"},m.type==="success"?e.createElement(e.Fragment,null,e.createElement("img",{src:"/staticfiles/images/trophy.png",width:190,height:170}),e.createElement("div",{className:"Font20 bold mTop20"},_l("\u592A\u68D2\u4E86\uFF01\u540C\u6B65\u4EFB\u52A1\u521B\u5EFA\u6210\u529F")),e.createElement("div",{className:"Font14 Gray_75 mTop20"},_l("\u53EF\u5728"),e.createElement("a",{className:"mLeft5 mRight5",onClick:function(){window.location.href="/integration/task"}},_l("\u6570\u636E\u540C\u6B65\u4EFB\u52A1")),_l("\u4E2D\u67E5\u770B\u4EFB\u52A1\u7684\u8FD0\u884C\u72B6\u6001\u4E0E\u540C\u6B65\u8BE6\u60C5")),e.createElement("div",{className:"flexRow alignItemsCenter mTop20"},e.createElement(B.Z,{icon:"info_outline",className:"Gray_9e Font16"}),e.createElement("span",{className:"Gray_9e mLeft8"},_l("\u8FDE\u7EED60\u5929\u65E0\u6570\u636E\u540C\u6B65\uFF0C\u4F1A\u81EA\u52A8\u505C\u6B62"))),e.createElement(Xe.ZP,{type:"primary",className:"mTop36",onClick:function(){return window.location.href="/integration/task"}},_l("\u67E5\u770B\u540C\u6B65\u4EFB\u52A1"))):e.createElement(e.Fragment,null,e.createElement(ve.Z,null),e.createElement("div",{className:"Font20 bold mTop36"},_l("\u4EFB\u52A1\u521B\u5EFA\u4E2D...")),e.createElement("div",{className:"Font14 Gray_75 mTop8"},_l("\u53EF\u80FD\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"))))):e.createElement(Se.Z,{visible:!0,title:_l("\u62A5\u9519\u4FE1\u606F"),width:480,className:"connectorErrorDialog",showCancel:!1,okText:_l("\u5173\u95ED"),onOk:function(){x({visible:!1}),p(!1)},onCancel:function(){x({visible:!1}),p(!1)}},m.errorMsgList&&m.errorMsgList.length>0&&e.createElement("div",{className:"errorInfo"},m.errorMsgList.map(function(s,c){return e.createElement("div",{key:c,className:"mTop5"},c+1+". "+s)})))))}var Ka=d(63239),Wa=d.n(Ka),We=d(53205),Ga={getCommonTypes:function(o,u){return We.Z.ajaxOptions.url=We.Z.server(u)+"dataConnector/getCommonTypes",We.Z.ajaxOptions.type="POST",mdyAPI(We.V,"dataConnectorgetCommonTypes",Wa()(o),$.extend(We.Z,u))}};const Ja=Ga;var Ha=(0,P.Z)([`
  background: #fff;
  min-height: 100%;

  .headerWrapper {
    height: 400px;
    background-color: rgba(33, 150, 243, 0.04);
    box-sizing: border-box;

    .headerContent {
      padding: 50px 0 0 48px;
      background: url(`,`) no-repeat 85% center;
      background-size: auto 80%;
      width: 100%;
      height: calc(100% - 80px);
      max-height: calc(100% - 80px);
    }
  }

  .formCardWrapper {
    padding: 0 48px;
  }

  .optionItem {
    .dsTypeIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      margin-left: 2px;
      border-radius: 50%;
      .svg-icon {
        width: 18px;
        height: 18px;
      }
    }
    .nameText {
      margin-left: 10px;
      color: #333;
      font-size: 14px;
    }
  }
`],[`
  background: #fff;
  min-height: 100%;

  .headerWrapper {
    height: 400px;
    background-color: rgba(33, 150, 243, 0.04);
    box-sizing: border-box;

    .headerContent {
      padding: 50px 0 0 48px;
      background: url(`,`) no-repeat 85% center;
      background-size: auto 80%;
      width: 100%;
      height: calc(100% - 80px);
      max-height: calc(100% - 80px);
    }
  }

  .formCardWrapper {
    padding: 0 48px;
  }

  .optionItem {
    .dsTypeIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      margin-left: 2px;
      border-radius: 50%;
      .svg-icon {
        width: 18px;
        height: 18px;
      }
    }
    .nameText {
      margin-left: 10px;
      color: #333;
      font-size: 14px;
    }
  }
`]),Va=(0,P.Z)([`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  min-width: 800px;
  max-width: 1500px;
  margin: -80px auto 0 auto;
  padding: 48px;
  background: #fff;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px;

  .lineHeight20 {
    line-height: 20px;
  }
  .arrowIcon {
    color: #d0d0d0;
    font-size: 24px;
    margin: 26px 16px 0 16px;
    transform: rotate(-90deg);
  }
  .selectItem {
    width: 100%;
    margin-right: 16px;
    margin-top: 6px;

    .ant-select-selector {
      min-height: 48px;
      padding: 8px 11px !important;
      border: 2px solid #eaeaea !important;
      border-radius: 8px !important;
      box-shadow: none !important;

      .ant-select-selection-search {
        top: 8px !important;
      }
    }

    &.ant-select-focused {
      .ant-select-selector {
        border-color: #2196f3 !important;
      }
    }
  }
  .nextButton {
    width: 180px;
    height: 48px;
    margin-top: 26px;
    margin-left: 16px;
    min-width: 180px;
    max-width: 180px;
    background: #2196f3;
    border-radius: 8px !important;

    &.disabled {
      background: #6dc5fd !important;
    }
  }
`],[`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  min-width: 800px;
  max-width: 1500px;
  margin: -80px auto 0 auto;
  padding: 48px;
  background: #fff;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px;

  .lineHeight20 {
    line-height: 20px;
  }
  .arrowIcon {
    color: #d0d0d0;
    font-size: 24px;
    margin: 26px 16px 0 16px;
    transform: rotate(-90deg);
  }
  .selectItem {
    width: 100%;
    margin-right: 16px;
    margin-top: 6px;

    .ant-select-selector {
      min-height: 48px;
      padding: 8px 11px !important;
      border: 2px solid #eaeaea !important;
      border-radius: 8px !important;
      box-shadow: none !important;

      .ant-select-selection-search {
        top: 8px !important;
      }
    }

    &.ant-select-focused {
      .ant-select-selector {
        border-color: #2196f3 !important;
      }
    }
  }
  .nextButton {
    width: 180px;
    height: 48px;
    margin-top: 26px;
    margin-left: 16px;
    min-width: 180px;
    max-width: 180px;
    background: #2196f3;
    border-radius: 8px !important;

    &.disabled {
      background: #6dc5fd !important;
    }
  }
`]),Ya=(0,P.Z)([`
  padding: 40px 48px;
  max-width: 1600px;
  margin: 0 auto;
`],[`
  padding: 40px 48px;
  max-width: 1600px;
  margin: 0 auto;
`]),Xa=(0,P.Z)([`
  min-width: 320px;
  margin-bottom: 24px;
  display: inline-block;
  padding: 0 12px;
  &.connectorCardWidth1 {
    width: 100%;
  }

  &.connectorCardWidth2 {
    width: 50%;
  }

  &.connectorCardWidth3 {
    width: 33.33%;
  }

  &.connectorCardWidth4 {
    //\u4E34\u65F6\u8C03\u6574\uFF0C\u6570\u636E\u591A\u65F6\u6539\u56DE
    width: 33.33%;
    /* width: 25%; */
  }

  .connectorContent {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 16px;
    padding: 40px 55px;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px;
      border: 1px solid #fff;
    }

    .typeIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      .svg-icon {
        width: 36px;
        height: 36px;
      }
    }
    .arrowIcon {
      color: #ddd;
      transform: rotate(-90deg);
    }
    .nameText {
      white-space: nowrap;
      margin-top: 15px;
      font-size: 15px;
      line-height: 20px;
      color: #333;
    }
  }
`],[`
  min-width: 320px;
  margin-bottom: 24px;
  display: inline-block;
  padding: 0 12px;
  &.connectorCardWidth1 {
    width: 100%;
  }

  &.connectorCardWidth2 {
    width: 50%;
  }

  &.connectorCardWidth3 {
    width: 33.33%;
  }

  &.connectorCardWidth4 {
    //\u4E34\u65F6\u8C03\u6574\uFF0C\u6570\u636E\u591A\u65F6\u6539\u56DE
    width: 33.33%;
    /* width: 25%; */
  }

  .connectorContent {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 16px;
    padding: 40px 55px;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px;
      border: 1px solid #fff;
    }

    .typeIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      .svg-icon {
        width: 36px;
        height: 36px;
      }
    }
    .arrowIcon {
      color: #ddd;
      transform: rotate(-90deg);
    }
    .nameText {
      white-space: nowrap;
      margin-top: 15px;
      font-size: 15px;
      line-height: 20px;
      color: #333;
    }
  }
`]),qa=D.ZP.div(Ha,aa()),_a=D.ZP.div(Va),$a=D.ZP.div(Ya),er=D.ZP.div(Xa);function nr(t){var o=(0,le.Z)({}),u=(0,k.Z)(o,2),l=u[0],a=u[1],f=(0,e.useState)(!1),T=(0,k.Z)(f,2),C=T[0],n=T[1],I=(0,e.useState)([]),F=(0,k.Z)(I,2),Z=F[0],w=F[1],p=(0,e.useState)([]),j=(0,k.Z)(p,2),L=j[0],i=j[1],S=(0,e.useRef)(),y=[{title:_l("\u6570\u636E\u6E90\u7C7B\u578B"),key:"source"},{title:_l("\u76EE\u7684\u5730\u7C7B\u578B"),key:"dest"}];(0,e.useEffect)(function(){Ja.getCommonTypes({projectId:t.currentProjectId}).then(function(x){x&&r().isArray(x)&&w(x),x.errorMsgList&&x.errorMsgList.length&&alert(x.errorMsgList[0],2)}),ce.Z.getTypes({projectId:t.currentProjectId,onlyRelatedTask:!1,onlyCreated:!1}).then(function(x){x&&r().isArray(x)&&i(x),x.errorMsgList&&x.errorMsgList.length&&alert(x.errorMsgList[0],2)})},[]);var h=function(){var H=(t.width>=1600?1600:t.width)-100,Q=Math.floor(H/344)<1?1:Math.floor(H/344);return Q},m=function(){var H=(0,pe.vo)(t.currentProjectId),Q=H.licenseType;Q===1?n(!0):je.Z.createOnlySyncTaskPreCheck({projectId:t.currentProjectId}).then(function(W){W.currentTaskNum>=W.maxTaskNum?(0,pe.Yg)({projectId:t.currentProjectId,hint:_l("\u4F59\u91CF\u5DF2\u8FBE\u5230\u6700\u5927\u503C"),explainText:md.global.Config.IsLocal?_l("\u5F53\u524D\u7248\u672C\u6700\u591A\u53EF\u521B\u5EFA%0\u4E2A\u540C\u6B65\u4EFB\u52A1, \u8BF7\u5347\u7EA7\u7248\u672C\u4EE5\u521B\u5EFA\u66F4\u591A\u540C\u6B65\u4EFB\u52A1",W.maxTaskNum):_l("\u514D\u8D39\u7248\u6700\u591A\u53EF\u521B\u5EFA%0\u4E2A\u540C\u6B65\u4EFB\u52A1, \u8BF7\u5347\u7EA7\u7248\u672C\u4EE5\u521B\u5EFA\u66F4\u591A\u540C\u6B65\u4EFB\u52A1",W.maxTaskNum),isFree:!0}):n(!0)})};return e.createElement(Re.Z,null,e.createElement(qa,null,e.createElement("div",{className:"headerWrapper"},e.createElement("div",{className:"headerContent"},e.createElement("h3",{className:"Bold Font24"},_l("\u521B\u5EFA\u8FDE\u63A5\u5668")),e.createElement("p",{className:"Font15 flexRow alignItemsCenter"},_l("\u8FDE\u63A5\u5230\u5916\u90E8\u6570\u636E\u6E90\u8FDB\u884C\u6570\u636E\u5B9E\u65F6\u540C\u6B65")," ",e.createElement(He.Z,{type:3,href:"https://help.mingdao.com/integration/data-integration",text:_l("\u4F7F\u7528\u5E2E\u52A9")})))),e.createElement("div",{className:"formCardWrapper"},e.createElement(_a,null,y.map(function(x,H){return e.createElement(e.Fragment,{key:H},e.createElement("div",{className:"flex"},e.createElement("div",{className:"bold lineHeight20"},x.title),e.createElement("div",{ref:S},e.createElement(Te.default,{className:"selectItem",placeholder:_l("\u8BF7\u9009\u62E9"),notFoundContent:_l("\u6682\u65E0\u6570\u636E"),getPopupContainer:function(){return S.current},showSearch:!0,options:L.filter(function(Q){return r().includes([g.bA.ALL,x.key.toUpperCase()],Q.roleType)}).map(function(Q){return(0,Y.default)({},Q,{label:e.createElement("div",{className:"flexRow alignItemsCenter optionItem"},e.createElement("div",{className:"dsTypeIcon",style:{background:Q.iconBgColor}},e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+Q.className}))),e.createElement("span",{className:"nameText"},Q.name)),value:Q.type})}),value:r().get(l,[x.key,"type"]),filterOption:function(W,re){return re.name.toLowerCase().includes(W.toLowerCase())},onChange:function(W,re){return a((0,se.default)({},x.key,re))}}))),H===0&&e.createElement(B.Z,{icon:"arrow_down",className:"arrowIcon"}))}),e.createElement(Xe.ZP,{type:"primary",className:X()("nextButton",{disabled:!l.source||!l.dest}),disabled:!l.source||!l.dest,onClick:m},e.createElement("span",{className:"Font16 bold"},_l("\u4E0B\u4E00\u6B65"))))),e.createElement($a,null,e.createElement("h5",{className:"Bold Font17 Gray_75 mBottom0"},_l("\u5E38\u7528\u8FDE\u63A5\u5668")),e.createElement("div",{className:"mTop16",style:{margin:"0 -12px"}},Z.map(function(x,H){return e.createElement(er,{key:H,className:"connectorCardWidth"+h()},e.createElement("div",{className:"connectorContent",onClick:function(){a({source:x.source,dest:x.dest}),m()}},e.createElement("div",{className:"divCenter TxtCenter flexColumn justifyContentCenter alignItemsCenter"},e.createElement("div",{className:"typeIcon",style:{background:r().get(x,"source.iconBgColor")}},e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+r().get(x,"source.className")}))),e.createElement("div",{className:"nameText"},r().get(x,"source.name"))),e.createElement(B.Z,{icon:"arrow_down",className:"arrowIcon Font20 mBottom30 mLeft24 mRight24"}),e.createElement("div",{className:"divCenter TxtCenter flexColumn justifyContentCenter alignItemsCenter"},e.createElement("div",{className:"typeIcon",style:{background:r().get(x,"dest.iconBgColor")}},e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+r().get(x,"dest.className")}))),e.createElement("div",{className:"nameText"},r().get(x,"dest.name")))))})))),C&&e.createElement(za,(0,Y.default)({},t,{onClose:function(){return n(!1)},connectorConfigData:l})))}const tr=(0,en.Z)(nr);var ar=(0,P.Z)([`
  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background-color: #fff;

    &:hover {
      color: #2196f3;
      background-color: #f5f5f5;
    }
  }
`],[`
  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background-color: #fff;

    &:hover {
      color: #2196f3;
      background-color: #f5f5f5;
    }
  }
`]),rr=(0,P.Z)([`
  position: relative !important;
  width: 220px !important;
  padding: 6px 0 !important;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  background: #fff;
`],[`
  position: relative !important;
  width: 220px !important;
  padding: 6px 0 !important;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  background: #fff;
`]),or=(0,P.Z)([`
  padding: 0 20px;
  line-height: 36px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`],[`
  padding: 0 20px;
  line-height: 36px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`]),ir=(0,P.Z)([`
  color: #f44336;
`],[`
  color: #f44336;
`]),lr=D.ZP.div(ar),sr=D.ZP.div(rr),Zn=D.ZP.div(or),cr=(0,D.ZP)(Zn)(ir);function dr(t){var o=t.sourceId,u=t.sourceList,l=t.setSourceList,a=(0,e.useState)(!1),f=(0,k.Z)(a,2),T=f[0],C=f[1],n=(0,e.useState)(!1),I=(0,k.Z)(n,2),F=I[0],Z=I[1];return e.createElement(lr,null,e.createElement(Ye.Z,{action:["click"],popupClassName:"moreOption",getPopupContainer:function(){return document.body},popupVisible:T,onPopupVisibleChange:function(p){return C(p)},popupAlign:{points:["tr","bl"],offset:[25,5],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(sr,null,e.createElement(Zn,{onClick:function(){return(0,Qe.T8)("/integration/sourceDetail/"+o+"/useDetail")}},_l("\u4F7F\u7528\u8BE6\u60C5")),e.createElement(cr,{onClick:function(){C(!1),Z(!0)}},_l("\u5220\u9664")))},e.createElement("div",{className:"optionIcon"},e.createElement(B.Z,{icon:"task-point-more",className:"Font18 pointer"}))),F&&e.createElement(Se.Z,{title:_l("\u5220\u9664\u6570\u636E\u6E90"),buttonType:"danger",visible:F,description:e.createElement("div",null,e.createElement("span",null,_l("\u5220\u9664\u540E\uFF0C\u76F8\u5173\u7684\u540C\u6B65\u4EFB\u52A1\u4F1A\u7ACB\u5373\u7EC8\u6B62")),e.createElement("a",{className:"mLeft10",onClick:function(){return(0,Qe.T8)("/integration/sourceDetail/"+o+"/useDetail")}},_l("\u67E5\u770B\u540C\u6B65\u4EFB\u52A1"))),okText:_l("\u5220\u9664"),onOk:function(){ce.Z.deleteDatasource({projectId:t.currentProjectId,datasourceId:o}).then(function(p){p.isSucceeded?(alert(_l("\u6570\u636E\u6E90\u5220\u9664\u6210\u529F")),l(u.filter(function(j){return j.id!==o}))):alert(p.errorMsg,2),Z(!1)})},onCancel:function(){return Z(!1)}}))}var pr=(0,P.Z)([`
  margin-top: 16px;
  .searchInput {
    width: 360px;
    min-width: 360px;
    height: 36px;
  }
  .filterIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: 24px;
    color: #9e9e9e;
    cursor: pointer;

    &:hover {
      color: #2196f3;
      background: #f5f5f5;
    }
    &.isActive {
      color: #2196f3;
      background: rgba(33, 150, 243, 0.07);
    }
  }
`],[`
  margin-top: 16px;
  .searchInput {
    width: 360px;
    min-width: 360px;
    height: 36px;
  }
  .filterIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: 24px;
    color: #9e9e9e;
    cursor: pointer;

    &:hover {
      color: #2196f3;
      background: #f5f5f5;
    }
    &.isActive {
      color: #2196f3;
      background: rgba(33, 150, 243, 0.07);
    }
  }
`]),ur=(0,P.Z)([`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: red;
`],[`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: red;
`]),mr=(0,P.Z)([`
  display: flex;
  height: 36px;
  overflow: hidden;

  &.isExpand {
    overflow: visible !important;
    height: auto;
  }

  .itemText {
    min-width: 70px;
    font-size: 13px;
    color: #757575;
    font-weight: 600;
    padding: 8px 0;
  }

  ul {
    position: relative;
    padding-right: 28px;
    li {
      display: inline-block;
      padding: 0 15px;
      margin: 4px 0 4px 8px;
      height: 28px;
      box-sizing: border-box;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      cursor: pointer;
      line-height: 26px;
      font-size: 12px;
      color: #333;

      &.isActive {
        font-weight: 600;
        color: #2196f3;
      }
      &:hover {
        border-color: #ccc;
      }
      &::before {
        display: block;
        content: attr(title);
        font-weight: 600;
        visibility: hidden;
        overflow: hidden;
        height: 0;
      }
    }
  }

  .expandIcon {
    position: absolute;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    top: 5px;
    right: 0;
    color: #bdbdbd;
    cursor: pointer;

    &:hover {
      color: #2196f3;
      background: #f5f5f5;
    }
  }
`],[`
  display: flex;
  height: 36px;
  overflow: hidden;

  &.isExpand {
    overflow: visible !important;
    height: auto;
  }

  .itemText {
    min-width: 70px;
    font-size: 13px;
    color: #757575;
    font-weight: 600;
    padding: 8px 0;
  }

  ul {
    position: relative;
    padding-right: 28px;
    li {
      display: inline-block;
      padding: 0 15px;
      margin: 4px 0 4px 8px;
      height: 28px;
      box-sizing: border-box;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      cursor: pointer;
      line-height: 26px;
      font-size: 12px;
      color: #333;

      &.isActive {
        font-weight: 600;
        color: #2196f3;
      }
      &:hover {
        border-color: #ccc;
      }
      &::before {
        display: block;
        content: attr(title);
        font-weight: 600;
        visibility: hidden;
        overflow: hidden;
        height: 0;
      }
    }
  }

  .expandIcon {
    position: absolute;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    top: 5px;
    right: 0;
    color: #bdbdbd;
    cursor: pointer;

    &:hover {
      color: #2196f3;
      background: #f5f5f5;
    }
  }
`]),fr=(0,P.Z)([`
  .headTr {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;

    .sortIcon {
      color: #bfbfbf;
      height: 8px;

      &.selected {
        color: #2196f3;
      }
    }
  }

  .dataItem {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;

    .titleText,
    .taskNum {
      font-size: 14px;
      font-weight: 700;
    }

    &:hover {
      background: rgba(247, 247, 247, 1);
      .titleText {
        color: #2196f3;
      }
      .optionIcon {
        background: rgba(247, 247, 247, 1);
      }
    }

    .titleIcon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      margin-right: 8px;
      font-size: 16px;
      min-width: 32px;
      .svg-icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background: #fff;

    &:hover {
      color: #2196f3;
      background: #fff !important;
    }
  }

  .name,
  .address {
    padding-right: 8px;
    width: 0;
  }

  .name {
    flex: 6;
  }
  .createTime {
    flex: 4;
  }
  .address,
  .roleType,
  .taskNum {
    flex: 2;
  }
  .option {
    flex: 1;
  }
`],[`
  .headTr {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;

    .sortIcon {
      color: #bfbfbf;
      height: 8px;

      &.selected {
        color: #2196f3;
      }
    }
  }

  .dataItem {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;

    .titleText,
    .taskNum {
      font-size: 14px;
      font-weight: 700;
    }

    &:hover {
      background: rgba(247, 247, 247, 1);
      .titleText {
        color: #2196f3;
      }
      .optionIcon {
        background: rgba(247, 247, 247, 1);
      }
    }

    .titleIcon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      margin-right: 8px;
      font-size: 16px;
      min-width: 32px;
      .svg-icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background: #fff;

    &:hover {
      color: #2196f3;
      background: #fff !important;
    }
  }

  .name,
  .address {
    padding-right: 8px;
    width: 0;
  }

  .name {
    flex: 6;
  }
  .createTime {
    flex: 4;
  }
  .address,
  .roleType,
  .taskNum {
    flex: 2;
  }
  .option {
    flex: 1;
  }
`]),gr=(0,P.Z)([`
  text-align: center !important;
  .iconCon {
    width: 130px;
    height: 130px;
    line-height: 130px;
    background: #fbfbfb;
    border-radius: 50%;
    margin: 64px auto 0;
    color: #9e9e9e;
  }
`],[`
  text-align: center !important;
  .iconCon {
    width: 130px;
    height: 130px;
    line-height: 130px;
    background: #fbfbfb;
    border-radius: 50%;
    margin: 64px auto 0;
    color: #9e9e9e;
  }
`]),hr=D.ZP.div(pr),xr=D.ZP.div(ur),Ar=D.ZP.div(mr),Pn=D.ZP.div(fr),br=D.ZP.div(gr),Dn=void 0,he=0;function vr(t){var o=t.flag,u=(0,le.Z)({pageNo:0,loading:!0,noMore:!1,roleType:"ALL",fromType:"ALL",dsType:"ALL",keyWords:"",sort:{fieldName:"",sortDirection:null}}),l=(0,k.Z)(u,2),a=l[0],f=l[1],T=(0,e.useState)([]),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=(0,e.useState)(!1),Z=(0,k.Z)(F,2),w=Z[0],p=Z[1],j=(0,e.useState)(!1),L=(0,k.Z)(j,2),i=L[0],S=L[1],y=(0,e.useState)([]),h=(0,k.Z)(y,2),m=h[0],x=h[1],H=[{title:_l("\u4F5C\u4E3A"),data:g.dW,key:"roleType",hasExpand:!1},{title:_l("\u6765\u6E90"),data:g.dH,key:"fromType",hasExpand:!1},{title:_l("\u6E90\u7C7B\u578B"),data:m,key:"dsType",hasExpand:!1}],Q=[null,g.UO.ASC,g.UO.DESC];(0,e.useEffect)(function(){var s={projectId:t.currentProjectId,onlyRelatedTask:!1,onlyCreated:!1};ce.Z.getTypes(s).then(function(c){if(c){var A=c.filter(function(v){return v.type!==g.Lu.APPLICATION_WORKSHEET}).map(function(v){return{key:v.type,text:v.name}});x([{key:"ALL",text:_l("\u5168\u90E8")}].concat((0,De.Z)(A)))}})},[]);var W=function(){if(a.loading){var c={projectId:t.currentProjectId,pageNo:a.pageNo,pageSize:20,searchBody:a.keyWords,roleType:a.roleType,fromType:a.fromType==="ALL"?null:a.fromType,dsType:a.dsType==="ALL"?null:a.dsType,sort:a.sort};Dn=ce.Z.list(c),Dn.then(function(A){if(A){var v=A.content.map(function(U){return(0,Y.default)({},U,{address:U.hosts[0].split(":")[0]})});I(a.pageNo>0?n.concat(v):v),f({loading:!1,noMore:A.content.length<20})}})}},re=(0,e.useCallback)(r().debounce(function(s){f({loading:!0,pageNo:0,keyWords:s})},500),[]);(0,e.useEffect)(W,[a.loading,a.pageNo,a.roleType,a.fromType,a.dsType,a.keyWords,a.sort]);var ue=function(){!a.noMore&&!a.loading&&f({loading:!0,pageNo:a.pageNo+1})};(0,e.useEffect)(function(){f({loading:!0,pageNo:0})},[o]);var G=[{dataIndex:"name",title:_l("\u6570\u636E\u6E90"),render:function(c){return e.createElement("div",{className:"flexRow alignItemsCenter pLeft8 pointer",onClick:function(){return(0,Qe.T8)("/integration/sourceDetail/"+c.id)}},e.createElement(Le.Z,{text:r().get(c,"dsTypeInfo.name")},e.createElement("div",{className:"titleIcon",style:{background:r().get(c,"dsTypeInfo.iconBgColor")}},e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+r().get(c,"dsTypeInfo.className")})))),e.createElement("span",{title:c.name,className:"titleText overflow_ellipsis"},c.name))}},{dataIndex:"address",title:_l("\u5730\u5740"),render:function(c){return e.createElement("div",{title:c.address,className:"Gray_75 overflow_ellipsis"},c.address)}},{dataIndex:"roleType",title:_l("\u4F5C\u4E3A"),render:function(c){return c.roleType===g.bA.SOURCE?e.createElement("span",null,_l("\u6E90")):c.roleType===g.bA.DEST?e.createElement("span",null,_l("\u76EE\u7684\u5730")):c.roleType===g.bA.ALL?e.createElement("span",null,_l("\u6E90 / \u76EE\u7684\u5730")):e.createElement("span",null,"-")}},{dataIndex:"taskNum",renderTitle:function(){return e.createElement("div",{className:"flexRow pointer",onClick:function(){a.sort.fieldName!=="taskNum"?he=1:he=he===2?0:he+1,f({loading:!0,pageNo:0,sort:{fieldName:he===0?"":"taskNum",sortDirection:Q[he]}})}},e.createElement("span",null,_l("\u540C\u6B65\u4EFB\u52A1")),e.createElement("div",{className:"flexColumn mLeft6"},e.createElement(B.Z,{icon:"arrow-up",className:X()("sortIcon",{selected:a.sort.fieldName==="taskNum"&&a.sort.sortDirection===g.UO.ASC})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("sortIcon",{selected:a.sort.fieldName==="taskNum"&&a.sort.sortDirection===g.UO.DESC})})))}},{dataIndex:"createTime",renderTitle:function(){return e.createElement("div",{className:"flexRow pointer",onClick:function(){a.sort.fieldName!=="createTime"?he=1:he=he===2?0:he+1,f({loading:!0,pageNo:0,sort:{fieldName:he===0?"":"createTime",sortDirection:Q[he]}})}},e.createElement("span",null,_l("\u521B\u5EFA\u65F6\u95F4")),e.createElement("div",{className:"flexColumn mLeft6"},e.createElement(B.Z,{icon:"arrow-up",className:X()("sortIcon",{selected:a.sort.fieldName==="createTime"&&a.sort.sortDirection===g.UO.ASC})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("sortIcon",{selected:a.sort.fieldName==="createTime"&&a.sort.sortDirection===g.UO.DESC})})))},render:function(c){return e.createElement("div",{className:"pRight8"},e.createElement("span",null,c.creatorName),e.createElement("span",{className:"Gray_9e"}," \u521B\u5EFA\u4E8E "+(0,Pe.p6)(c.createTime)))}},{dataIndex:"option",title:"",renderTitle:function(){return e.createElement("div",{className:"optionIcon","data-tip":_l("\u5237\u65B0"),onClick:function(){return f({loading:!0,pageNo:0})}},e.createElement(B.Z,{icon:"refresh1",className:"Font18 pointer"}))},render:function(c){return e.createElement(dr,{currentProjectId:t.currentProjectId,sourceId:c.id,sourceList:n,setSourceList:I})}}];return e.createElement(e.Fragment,null,e.createElement(hr,null,e.createElement("div",{className:"flexRow"},e.createElement(an.Z,{className:"searchInput",placeholder:_l("\u641C\u7D22\u6570\u636E\u6E90\u540D\u79F0 / \u5730\u5740 / \u521B\u5EFA\u4EBA"),value:a.keyWords,onChange:re}),e.createElement("div",{className:"relative"},e.createElement(B.Z,{icon:"filter",className:X()("filterIcon",{isActive:i}),onClick:function(){return S(!i)}}),!i&&[a.roleType,a.fromType,a.dsType].filter(function(s){return s==="ALL"}).length!==3&&e.createElement(xr,null))),i&&e.createElement("div",{className:"mTop16"},H.map(function(s,c){return e.createElement(Ar,{key:c,className:X()({isExpand:s.hasExpand&&w})},e.createElement("div",{className:"itemText"},s.title),e.createElement("ul",null,s.data.map(function(A,v){return e.createElement("li",{key:v,title:A.text,className:X()({isActive:A.key===a[s.key]}),onClick:function(){return f((0,se.default)({loading:!0,pageNo:0},s.key,A.key))}},A.text)}),s.hasExpand&&e.createElement(B.Z,{icon:w?"arrow-up":"arrow-down",className:"expandIcon",onClick:function(){return p(!w)}})))}))),e.createElement(Pn,null,e.createElement("div",{className:"headTr mTop25"},G.map(function(s,c){return e.createElement("div",{key:c,className:""+s.dataIndex},s.renderTitle?s.renderTitle():s.title)}))),e.createElement(Re.Z,{className:"flex",onScrollEnd:ue},a.pageNo===0&&a.loading?e.createElement(ve.Z,{className:"mTop10"}):e.createElement(Pn,null,n&&n.length>0?n.map(function(s,c){return e.createElement("div",{key:c,className:"dataItem"},G.map(function(A,v){return e.createElement("div",{key:c+"-"+v,className:""+A.dataIndex},A.render?A.render(s):s[A.dataIndex])}))}):e.createElement(br,null,e.createElement("span",{className:"iconCon InlineBlock TxtCenter "},e.createElement("i",{className:"icon-storage Font64 TxtMiddle"})),e.createElement("p",{className:"Gray_9e mTop20 mBottom0"},_l("\u6682\u65E0\u6570\u636E"))))),a.pageNo>0&&a.loading&&e.createElement(ve.Z,{className:"mTop10"}))}var Er=d(21683),Cr=d(60964),yr=(0,P.Z)([`
  background: #fff;
  min-height: 100%;
  padding: 32px;

  .headerWrapper {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .addSourceButton {
      padding: 8px 24px;
      background: #2196f3;
      border-radius: 18px;
      color: #fff;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background: #1764c0;
      }
    }
  }
`],[`
  background: #fff;
  min-height: 100%;
  padding: 32px;

  .headerWrapper {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .addSourceButton {
      padding: 8px 24px;
      background: #2196f3;
      border-radius: 18px;
      color: #fff;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background: #1764c0;
      }
    }
  }
`]),Nr=D.ZP.div(yr);function Ir(t){var o=(0,e.useState)(+new Date),u=(0,k.Z)(o,2),l=u[0],a=u[1],f=(0,e.useState)(!1),T=(0,k.Z)(f,2),C=T[0],n=T[1],I=(0,e.useState)(!1),F=(0,k.Z)(I,2),Z=F[0],w=F[1],p=(0,e.useState)(),j=(0,k.Z)(p,2),L=j[0],i=j[1];return e.createElement(Nr,{className:"flexColumn h100"},e.createElement("div",{className:"headerWrapper"},e.createElement("div",null,e.createElement("h3",{className:"Bold Font24"},_l("\u6570\u636E\u6E90")),e.createElement("p",{className:"Font15 mBottom0 flexRow alignItemsCenter"},_l("\u7BA1\u7406\u5916\u90E8\u6570\u636E\u6E90\u548C\u76EE\u7684\u5730"),e.createElement(He.Z,{type:3,href:"https://help.mingdao.com/integration/data-integration",text:_l("\u4F7F\u7528\u5E2E\u52A9")}))),e.createElement("div",{className:"addSourceButton",onClick:function(){return n(!0)}},e.createElement(B.Z,{icon:"add",className:"Font13"}),e.createElement("span",{className:"mLeft5 bold"},_l("\u6570\u636E\u6E90")))),e.createElement(vr,(0,Y.default)({},t,{flag:l})),C&&e.createElement(Cr.Z,{projectId:t.currentProjectId,isCreateConnector:!1,onChange:function(y){i(y),w(!0),n(!1)},onClose:function(){return n(!1)}}),Z&&e.createElement(Er.default,{isCreateDialog:!0,source:L,onClose:function(){return w(!1)},onRefresh:a}))}var kr=d(66215),wr=d(88902),Sr=d.n(wr),jn=d(99924),On=d(37881),Tr=d(16921),Oe={};const Lr=function(t){var o=t.projectId,u=(0,e.useState)(!1),l=(0,k.Z)(u,2),a=l[0],f=l[1],T=(0,e.useState)(0),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=md.global.Account.projects.find(function(A){return A.projectId===o}).licenseType,Z=(0,e.useState)({total:0,used:0,percent:"100.00%"}),w=(0,k.Z)(Z,2),p=w[0],j=p.total,L=p.used,i=p.percent,S=w[1],y=(0,e.useState)(!0),h=(0,k.Z)(y,2),m=h[0],x=h[1],H=(0,e.useState)({currentTaskNum:0,maxTaskNum:0}),Q=(0,k.Z)(H,2),W=Q[0],re=Q[1],ue=function(){Oe.getAutoPurchaseDataPipelineExtPack=jn.Z.getAutoPurchaseDataPipelineExtPack({projectId:o}),Oe.getAutoPurchaseDataPipelineExtPack.then(function(v){var U=v.autoPurchaseDataPipelineExtPack,de=U===void 0?!1:U,Ne=v.balance;f(de),I(Ne)})},G=function(){On.Z.getArithmetic({projectId:o}).then(function(v){if(v){var U=v.arithmetic,de=U===void 0?{}:U;S(de),x(!1)}})},s=function(v){Oe.setAutoPurchaseDataPipelineExtPack=jn.Z.setAutoPurchaseDataPipelineExtPack({projectId:o,autoPurchaseDataPipelineExtPack:v}),Oe.setAutoPurchaseDataPipelineExtPack.then(function(U){U&&(f(v),v&&n<100&&alert(_l("\u5F53\u524D\u8D26\u6237\u4F59\u989D\u4E0D\u8DB3100\u5143\uFF0C\u8BE5\u529F\u80FD\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C"),3))})},c=function(v){if(!v){Se.Z.confirm({title:_l("\u662F\u5426\u5F00\u542F\u81EA\u52A8\u8BA2\u8D2D\uFF1F"),description:_l("\u5F00\u542F\u540E\uFF0C\u5F53\u6708\u5269\u4F59\u6267\u884C\u989D\u5EA6\u4E3A2%\u65F6\uFF0C\u81EA\u52A8\u8D2D\u4E70 100\u5143/10\u4E07\u884C \u7684\u5355\u6708\u5305\uFF0C\u4ECE\u8D26\u6237\u4F59\u989D\u4E2D\u6263\u6B3E\u3002"),onOk:function(){return s(!v)}});return}s(!v)};return(0,e.useEffect)(function(){Sr()(Oe).forEach(function(A){Oe[A]&&Oe[A].abort()}),ue(),G(),md.global.Config.IsLocal&&On.Z.getTaskCount({projectId:o}).then(function(A){return A&&re(A)})},[]),e.createElement("div",{className:"flexRow alignItemsCenter"},m?_l("\u52A0\u8F7D\u4E2D..."):e.createElement("div",null,e.createElement("span",null,md.global.Config.IsLocal&&e.createElement(e.Fragment,null,e.createElement("span",{className:"Gray_9e"},_l("\u540C\u6B65\u4EFB\u52A1\u6570 ")),e.createElement("span",{className:"Bold"},W.currentTaskNum," / ",W.maxTaskNum," \uFF0C")),e.createElement("span",{className:"Gray_9e"},_l("\u672C\u6708\u7B97\u529B ")),e.createElement("span",{className:"Bold"},L+_l(" \u4E07\u884C / ")+j+_l(" \u4E07\u884C")),e.createElement("span",{className:"Gray_9e"},_l("  \u5269\u4F59 ")),e.createElement("span",{className:"Bold"},i)),!md.global.Config.IsLocal&&e.createElement(e.Fragment,null,F===1?e.createElement(ze.Z,{className:"ThemeColor3 ThemeHoverColor2 mLeft10 NoUnderline",to:"/admin/expansionservice/"+o+"/dataSync"},e.createElement("span",{className:"Bold"},_l("\u8D2D\u4E70\u5347\u7EA7\u5305"))):e.createElement("span",{className:"ThemeColor3 ThemeHoverColor2 mLeft10 NoUnderline",onClick:function(){(0,Tr.F)({projectId:o})}},e.createElement("span",{className:"Bold"},_l("\u8D2D\u4E70\u4ED8\u8D39\u7248"))))),!md.global.Config.IsLocal&&!r().includes([0,2],F)&&e.createElement("div",null,e.createElement(kr.Z,{className:"TxtMiddle mLeft24",checked:a,size:"small",onClick:c}),e.createElement("span",null," ",_l("\u81EA\u52A8\u8BA2\u8D2D"))))};var Zr=(0,P.Z)([`
  margin-top: 16px;

  .statisticPanel {
    display: flex;
    justify-content: space-between;

    .itemPanel,
    .firstItemPanel {
      display: flex;
      align-items: center;
      height: 88px;
      padding: 0 24px;
      background: #fafafa;
      border-radius: 4px;

      .titleText {
        color: #757575;
        font-weight: 600;
      }
      .dataText {
        color: #333;
        font-size: 28px;
        font-weight: 600;
        line-height: 32px;

        &.running {
          color: #01ca83;
        }
        &.error {
          color: #f44336;
        }
      }
    }

    .firstItemPanel {
      flex: 4;
      display: flex;
      align-items: center;
    }

    .flex3 {
      flex: 3;
    }
  }
`],[`
  margin-top: 16px;

  .statisticPanel {
    display: flex;
    justify-content: space-between;

    .itemPanel,
    .firstItemPanel {
      display: flex;
      align-items: center;
      height: 88px;
      padding: 0 24px;
      background: #fafafa;
      border-radius: 4px;

      .titleText {
        color: #757575;
        font-weight: 600;
      }
      .dataText {
        color: #333;
        font-size: 28px;
        font-weight: 600;
        line-height: 32px;

        &.running {
          color: #01ca83;
        }
        &.error {
          color: #f44336;
        }
      }
    }

    .firstItemPanel {
      flex: 4;
      display: flex;
      align-items: center;
    }

    .flex3 {
      flex: 3;
    }
  }
`]),Pr=D.ZP.div(Zr),Ge=void 0;const Dr=function(t){var o=t.projectId,u=t.flag,l=(0,e.useState)({}),a=(0,k.Z)(l,2),f=a[0],T=a[1];return(0,e.useEffect)(function(){Ge&&Ge.abort(),Ge=je.Z.getStatistics({projectId:o}),Ge.then(function(C){C&&(T(C),Ge=null)})},[u]),e.createElement(Pr,null,e.createElement("div",{className:"statisticPanel"},e.createElement("div",{className:"firstItemPanel mRight16"},e.createElement("div",{className:"flex"},e.createElement("div",{className:"titleText"},_l("\u8FD0\u884C\u4E2D")),e.createElement("div",{className:"dataText running"},f.running||0)),e.createElement("div",{className:"flex"},e.createElement("div",{className:"titleText"},_l("\u5DF2\u505C\u6B62")),e.createElement("div",{className:"dataText"},f.stopped||0)),e.createElement("div",{className:"flex"},e.createElement("div",{className:"titleText"},_l("\u540C\u6B65\u9519\u8BEF")),e.createElement("div",{className:"dataText error"},f.error||0))),e.createElement("div",{className:"itemPanel flex3 mRight16"},e.createElement("div",null,e.createElement("div",{className:"titleText"},_l("\u4ECA\u65E5\u8BFB\u53D6\u8BB0\u5F55\u884C\u6570")),e.createElement("div",{className:"dataText"},f.toDayReadRecord||0))),e.createElement("div",{className:"itemPanel flex3"},e.createElement("div",null,e.createElement("div",{className:"titleText"},_l("\u4ECA\u65E5\u5199\u5165\u8BB0\u5F55\u884C\u6570")),e.createElement("div",{className:"dataText"},f.toDayWriteRecord||0)))))};var xo=d(45142),jr=d(40987),Or=(0,P.Z)([`
  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background-color: #fff;

    &:hover {
      color: #2196f3;
      background-color: #f5f5f5;
    }
  }
`],[`
  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background-color: #fff;

    &:hover {
      color: #2196f3;
      background-color: #f5f5f5;
    }
  }
`]),Fr=(0,P.Z)([`
  position: relative !important;
  width: 220px !important;
  padding: 6px 0 !important;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  background: #fff;
`],[`
  position: relative !important;
  width: 220px !important;
  padding: 6px 0 !important;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  background: #fff;
`]),Br=(0,P.Z)([`
  padding: 0 20px;
  line-height: 36px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`],[`
  padding: 0 20px;
  line-height: 36px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`]),Rr=(0,P.Z)([`
  color: #f44336;
`],[`
  color: #f44336;
`]),Mr=(0,P.Z)([`
  position: relative !important;
  width: 310px;
  padding: 20px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  background: #fff;
`],[`
  position: relative !important;
  width: 310px;
  padding: 20px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  background: #fff;
`]),Qr=D.ZP.div(Or),Ur=D.ZP.div(Fr),on=D.ZP.div(Br),zr=(0,D.ZP)(on)(Rr),Kr=D.ZP.div(Mr);function Wr(t){var o=t.projectId,u=t.record,l=t.taskList,a=t.setTaskList,f=t.onRefreshComponents,T=(0,e.useState)(!1),C=(0,k.Z)(T,2),n=C[0],I=C[1],F=(0,e.useState)(!1),Z=(0,k.Z)(F,2),w=Z[0],p=Z[1],j=(0,e.useRef)(),L=function(){p(!0),setTimeout(function(){j.current.select()},0)},i=function(){var h=j.current.value.trim();!h||h===u.name||(I(!1),p(!1),je.Z.updateSyncTask({projectId:o,taskId:u.id,name:h}).then(function(m){m?(alert(_l("\u540D\u79F0\u4FEE\u6539\u6210\u529F")),a(l.map(function(x){return x.id===u.id?(0,Y.default)({},x,{name:h}):x}))):alert(_l("\u540D\u79F0\u4FEE\u6539\u5931\u8D25"),2)}))},S=function(){I(!1),Se.Z.confirm({title:_l("\u5220\u9664\u540C\u6B65\u4EFB\u52A1"),buttonType:"danger",description:e.createElement("div",null,e.createElement("span",null,_l("\u5220\u9664\u540E\uFF0C\u76EE\u7684\u5730\u4E3A\u5DE5\u4F5C\u8868\u7684\u4F1A\u8F6C\u6362\u6210\u666E\u901A\u5DE5\u4F5C\u8868\uFF0C\u5DF2\u540C\u6B65\u7684\u6570\u636E\u4F1A\u4FDD\u7559"))),okText:_l("\u5220\u9664"),onOk:function(){if(u.taskStatus===g.xO.RUNNING){alert(_l("\u4E0D\u80FD\u5220\u9664\u8FD0\u884C\u4E2D\u7684\u4EFB\u52A1"),2);return}je.Z.deleteTask({projectId:o,taskId:u.id}).then(function(m){m?(alert(_l("\u540C\u6B65\u4EFB\u52A1\u5220\u9664\u6210\u529F")),a(l.filter(function(x){return x.id!==u.id})),f(+new Date)):alert(_l("\u540C\u6B65\u4EFB\u52A1\u5220\u9664\u5931\u8D25"),2)})}})};return e.createElement(Qr,null,e.createElement(Ye.Z,{action:["click"],popupClassName:"moreOption",getPopupContainer:function(){return document.body},popupVisible:n,onPopupVisibleChange:function(h){w&&!h&&i(),I(h),p(!1)},popupAlign:{points:["tr","bl"],offset:[25,5],overflow:{adjustX:!0,adjustY:!0}},popup:w?e.createElement(Kr,null,e.createElement("p",null,_l("\u4EFB\u52A1\u540D\u79F0")),e.createElement(En.Z,{className:"w100",defaultValue:u.name,manualRef:j,onBlur:i,onKeyDown:function(h){h.key==="Enter"&&i()}})):e.createElement(Ur,null,e.createElement(on,{onClick:L},_l("\u4FEE\u6539\u4EFB\u52A1\u540D\u79F0")),e.createElement(on,{onClick:function(){return(0,Qe.T8)("/integration/taskCon/"+u.flowId+"/monitor")}},_l("\u67E5\u770B\u76D1\u63A7")),e.createElement(zr,{onClick:S},_l("\u5220\u9664")))},e.createElement("div",{className:"optionIcon"},e.createElement(B.Z,{icon:"moreop",className:"Font18 pointer"}))))}var Gr=(0,P.Z)([`
  .headTr {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;

    .sortIcon {
      color: #bfbfbf;
      height: 8px;

      &.selected {
        color: #2196f3;
      }
    }
  }

  .dataItem {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
      background: rgba(247, 247, 247, 1);
      .titleText {
        color: #2196f3 !important;
      }
      .optionIcon {
        background: rgba(247, 247, 247, 1);
      }
    }

    .titleColumn {
      min-width: 124px;
      cursor: pointer;
    }
    .arrowIcon {
      transform: rotate(-90deg);
      margin-right: 8px;
      color: #d0d0d0;
      font-size: 20px;
    }
    .titleText {
      font-size: 14px;
      color: #333;
      font-weight: 600;
    }
    .ant-switch-checked {
      background-color: rgba(40, 202, 131, 1);
    }
    .errorIcon {
      font-size: 16px;
      color: #f44336;
      margin-left: 8px;
      cursor: pointer;
    }
    .warnColor {
      color: #faad14;
    }
  }

  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background: #fff;

    &:hover {
      color: #2196f3;
      background: #fff !important;
    }
  }

  .taskStatus {
    flex: 3;
    .ant-switch-disabled {
      background: #dedede !important;
      opacity: 1;
      &.ant-switch-checked {
        background: #80e4c1 !important;
        opacity: 1;
      }
    }
  }

  .taskName {
    flex: 6;
    width: 0;
  }
  .createUser {
    flex: 3;
  }
  .readRecord,
  .writeRecord {
    flex: 2;
    .hrHeight {
      height: 19.5px;
    }
    .h16 {
      height: 16px;
    }
  }
  .option {
    flex: 1;
  }
`],[`
  .headTr {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;

    .sortIcon {
      color: #bfbfbf;
      height: 8px;

      &.selected {
        color: #2196f3;
      }
    }
  }

  .dataItem {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
      background: rgba(247, 247, 247, 1);
      .titleText {
        color: #2196f3 !important;
      }
      .optionIcon {
        background: rgba(247, 247, 247, 1);
      }
    }

    .titleColumn {
      min-width: 124px;
      cursor: pointer;
    }
    .arrowIcon {
      transform: rotate(-90deg);
      margin-right: 8px;
      color: #d0d0d0;
      font-size: 20px;
    }
    .titleText {
      font-size: 14px;
      color: #333;
      font-weight: 600;
    }
    .ant-switch-checked {
      background-color: rgba(40, 202, 131, 1);
    }
    .errorIcon {
      font-size: 16px;
      color: #f44336;
      margin-left: 8px;
      cursor: pointer;
    }
    .warnColor {
      color: #faad14;
    }
  }

  .optionIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #9e9e9e;
    background: #fff;

    &:hover {
      color: #2196f3;
      background: #fff !important;
    }
  }

  .taskStatus {
    flex: 3;
    .ant-switch-disabled {
      background: #dedede !important;
      opacity: 1;
      &.ant-switch-checked {
        background: #80e4c1 !important;
        opacity: 1;
      }
    }
  }

  .taskName {
    flex: 6;
    width: 0;
  }
  .createUser {
    flex: 3;
  }
  .readRecord,
  .writeRecord {
    flex: 2;
    .hrHeight {
      height: 19.5px;
    }
    .h16 {
      height: 16px;
    }
  }
  .option {
    flex: 1;
  }
`]),Jr=(0,P.Z)([`
  text-align: center !important;
  .iconCon {
    width: 130px;
    height: 130px;
    line-height: 130px;
    background: #fbfbfb;
    border-radius: 50%;
    margin: 64px auto 0;
    color: #9e9e9e;
  }
`],[`
  text-align: center !important;
  .iconCon {
    width: 130px;
    height: 130px;
    line-height: 130px;
    background: #fbfbfb;
    border-radius: 50%;
    margin: 64px auto 0;
    color: #9e9e9e;
  }
`]),Hr=(0,P.Z)([`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 22px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 1px 3px;

  .svg-icon {
    width: 24px;
    height: 24px;
  }
  .sourceNum {
    position: absolute;
    text-align: center;
    top: -5px;
    right: -5px;
    width: 19px;
    height: 19px;
    line-height: 17px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #333;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
`],[`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 22px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 1px 3px;

  .svg-icon {
    width: 24px;
    height: 24px;
  }
  .sourceNum {
    position: absolute;
    text-align: center;
    top: -5px;
    right: -5px;
    width: 19px;
    height: 19px;
    line-height: 17px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #333;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
`]),Vr=(0,P.Z)([`
  padding: 18px 20px;
  width: 220px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.24);
  border-radius: 3px;

  .errorText {
    color: #f44336;
    word-break: break-all;
  }
`],[`
  padding: 18px 20px;
  width: 220px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.24);
  border-radius: 3px;

  .errorText {
    color: #f44336;
    word-break: break-all;
  }
`]),Yr=(0,P.Z)([`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: red;
`],[`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: red;
`]),Xr=(0,P.Z)([`
  display: flex;
  height: 36px;
  overflow: hidden;

  &.isExpand {
    overflow: visible !important;
    height: auto;
  }

  .itemText {
    min-width: 100px;
    font-size: 13px;
    color: #757575;
    font-weight: 600;
    padding: 8px 0;
  }

  ul {
    position: relative;
    padding-right: 28px;
    li {
      display: inline-block;
      padding: 0 15px;
      margin: 4px 0 4px 8px;
      height: 28px;
      box-sizing: border-box;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      cursor: pointer;
      line-height: 26px;
      font-size: 12px;
      color: #333;

      &.isActive {
        font-weight: 600;
        color: #2196f3;
      }
      &:hover {
        border-color: #ccc;
      }
      &::before {
        display: block;
        content: attr(title);
        font-weight: 600;
        visibility: hidden;
        overflow: hidden;
        height: 0;
      }
    }

    .expandIcon {
      position: absolute;
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 14px;
      top: 5px;
      right: 0;
      color: #bdbdbd;
      cursor: pointer;

      &:hover {
        color: #2196f3;
        background: #f5f5f5;
      }
    }
  }
`],[`
  display: flex;
  height: 36px;
  overflow: hidden;

  &.isExpand {
    overflow: visible !important;
    height: auto;
  }

  .itemText {
    min-width: 100px;
    font-size: 13px;
    color: #757575;
    font-weight: 600;
    padding: 8px 0;
  }

  ul {
    position: relative;
    padding-right: 28px;
    li {
      display: inline-block;
      padding: 0 15px;
      margin: 4px 0 4px 8px;
      height: 28px;
      box-sizing: border-box;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      cursor: pointer;
      line-height: 26px;
      font-size: 12px;
      color: #333;

      &.isActive {
        font-weight: 600;
        color: #2196f3;
      }
      &:hover {
        border-color: #ccc;
      }
      &::before {
        display: block;
        content: attr(title);
        font-weight: 600;
        visibility: hidden;
        overflow: hidden;
        height: 0;
      }
    }

    .expandIcon {
      position: absolute;
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 14px;
      top: 5px;
      right: 0;
      color: #bdbdbd;
      cursor: pointer;

      &:hover {
        color: #2196f3;
        background: #f5f5f5;
      }
    }
  }
`]),Fn=D.ZP.div(Gr),qr=D.ZP.div(Jr),Bn=D.ZP.div(Hr),_r=D.ZP.div(Vr),$r=D.ZP.div(Yr),eo=D.ZP.div(Xr),qe=void 0,Je=void 0,ie=0;function no(t){var o=t.projectId,u=t.onRefreshComponents,l=(0,e.useState)([]),a=(0,k.Z)(l,2),f=a[0],T=a[1],C=(0,le.Z)({}),n=(0,k.Z)(C,2),I=n[0],F=n[1],Z=(0,le.Z)({taskStatus:"ALL",sourceType:"ALL",destType:"ALL",keyWords:"",pageNo:0,loading:!0,noMore:!1,sort:{fieldName:"",sortDirection:null}}),w=(0,k.Z)(Z,2),p=w[0],j=w[1],L=(0,le.Z)({sourceType:!1,destType:!1}),i=(0,k.Z)(L,2),S=i[0],y=i[1],h=(0,e.useState)(!1),m=(0,k.Z)(h,2),x=m[0],H=m[1],Q=(0,e.useState)([]),W=(0,k.Z)(Q,2),re=W[0],ue=W[1],G=(0,e.useState)({}),s=(0,k.Z)(G,2),c=s[0],A=s[1],v=[{title:_l("\u4EFB\u52A1\u72B6\u6001"),data:g.tA,key:"taskStatus",hasExpand:!1},{title:_l("\u6E90\u7C7B\u578B"),data:re,key:"sourceType",hasExpand:!1},{title:_l("\u76EE\u7684\u5730\u7C7B\u578B"),data:re,key:"destType",hasExpand:!1}],U=[null,g.UO.ASC,g.UO.DESC],de=(0,e.useCallback)(r().debounce(function(R){j({keyWords:R,loading:!0,pageNo:0})},500),[]);(0,e.useEffect)(function(){var R={projectId:o,onlyRelatedTask:!1,onlyCreated:!1};ce.Z.getTypes(R).then(function(b){if(b){var N=b.map(function(ee){return{key:ee.type,text:ee.name}});ue([{key:"ALL",text:_l("\u5168\u90E8")}].concat((0,De.Z)(N)))}})},[]),(0,e.useEffect)(function(){if(p.loading){qe&&qe.abort();var R={projectId:o,pageNo:p.pageNo,pageSize:20,searchBody:p.keyWords,status:p.taskStatus==="ALL"?null:p.taskStatus,sourceType:p.sourceType==="ALL"?null:p.sourceType,destType:p.destType==="ALL"?null:p.destType,sort:p.sort};qe=je.Z.list(R),qe.then(function(b){b&&(T(p.pageNo>0?f.concat(b.content):b.content),j({loading:!1,noMore:b.content.length<20}))})}},[p.taskStatus,p.sourceType,p.destType,p.keyWords,p.pageNo,p.loading,p.sort]);var Ne=function(b,N){Je||(A((0,se.default)({},N.id,!0)),Je=je.Z[b?"startTask":"stopTask"]({projectId:o,taskId:N.id}),Je.then(function(ee){if(Je=null,A((0,se.default)({},N.id,!1)),b?ee.isSucceeded:ee){alert(b?_l("\u542F\u52A8\u540C\u6B65\u4EFB\u52A1\u6210\u529F"):_l("\u505C\u6B62\u540C\u6B65\u4EFB\u52A1\u6210\u529F"));var V=f.map(function(q){return q.id===N.id?(0,Y.default)({},q,{taskStatus:b?g.xO.RUNNING:g.xO.STOP}):q});T&&T(V),u(+new Date)}else alert(b?ee.errorMsg:_l("\u505C\u6B62\u540C\u6B65\u4EFB\u52A1\u5931\u8D25"),2)}).catch(function(){Je=null,A((0,se.default)({},N.id,!1))}))},Ie=function(){!p.noMore&&!p.loading&&j({pageNo:p.pageNo+1,loading:!0})},Ee=[{dataIndex:"taskName",title:_l("\u4EFB\u52A1"),render:function(b){return e.createElement(ze.Z,{className:"flexRow alignItemsCenter pRight8 pointer",to:"/integration/taskCon/"+b.flowId},e.createElement("div",{className:"flexRow alignItemsCenter pLeft8 titleColumn"},e.createElement(Le.Z,{text:b.sourceTypeName},e.createElement(Bn,null,e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+b.sourceClassName})),b.sourceNum>1&&e.createElement("div",{className:"sourceNum"},b.sourceNum))),e.createElement(B.Z,{icon:"arrow_down",className:"arrowIcon"}),e.createElement(Le.Z,{text:b.destTypeName},e.createElement(Bn,null,e.createElement("svg",{className:"icon svg-icon","aria-hidden":"true"},e.createElement("use",{xlinkHref:"#icon"+b.destClassName}))))),e.createElement("span",{title:b.name,className:"titleText overflow_ellipsis"},b.name))}},{dataIndex:"taskStatus",title:_l("\u540C\u6B65\u72B6\u6001"),render:function(b){return e.createElement("div",{className:X()("statusBox overflow_ellipsis WordBreak flexRow alignItemsCenter",{cursorDefault:[g.xO.STOP,g.xO.ERROR].indexOf(b.taskStatus)!==-1})},e.createElement(jr.Z,{loading:c[b.id],checkedChildren:_l("\u5F00\u542F"),unCheckedChildren:_l("\u5173\u95ED%11001"),checked:b.taskStatus===g.xO.RUNNING,onChange:function(ee){return Ne(ee,b)},disabled:!!b.errorInfo}),b.taskStatus===g.xO.CREATING&&e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(ve.Z,{size:"small",className:"mLeft8"}),e.createElement("span",{className:"mLeft4 ThemeColor"},_l("\u521B\u5EFA\u4E2D"))),(b.hasConfigUpdate||b.taskStatus===g.xO.UN_PUBLIC)&&!b.errorInfo&&e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(B.Z,{icon:"info1",className:"warnColor Font16 mLeft8"}),e.createElement("span",{className:"mLeft4 ThemeColor"},b.hasConfigUpdate?_l("\u6709\u66F4\u65B0\u672A\u53D1\u5E03"):_l("\u672A\u53D1\u5E03"))),b.errorInfo&&e.createElement(Ye.Z,{action:["hover"],getPopupContainer:function(){return document.body},popupVisible:I[b.id],onPopupVisibleChange:function(ee){return F((0,se.default)({},b.id,ee))},popupAlign:{points:["bl","tl"],offset:[0,-10],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(_r,null,e.createElement("div",{className:"errorText"},b.errorInfo))},e.createElement(B.Z,{icon:"info1",className:"errorIcon"})))}},{dataIndex:"readRecord",render:function(b){return e.createElement("span",{className:"Font14 Gray bold"},b.readRecord)},renderTitle:function(){return e.createElement("div",{className:"flexRow pointer",onClick:function(){p.sort.fieldName!=="readRecord"?ie=1:ie=ie===2?0:ie+1,j({loading:!0,pageNo:0,sort:{fieldName:ie===0?"":"readRecord",sortDirection:U[ie]}})}},e.createElement("span",null,_l("\u5DF2\u8BFB\u53D6(\u884C)")),e.createElement("div",{className:"flexColumn mLeft6"},e.createElement(B.Z,{icon:"arrow-up",className:X()("sortIcon",{selected:p.sort.fieldName==="readRecord"&&p.sort.sortDirection===g.UO.ASC})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("sortIcon",{selected:p.sort.fieldName==="readRecord"&&p.sort.sortDirection===g.UO.DESC})})))}},{dataIndex:"writeRecord",render:function(b){return e.createElement("span",{className:"Font14 Gray bold"},b.writeRecord)},renderTitle:function(){return e.createElement("div",{className:"flexRow pointer alignItemsCenter",onClick:function(){p.sort.fieldName!=="writeRecord"?ie=1:ie=ie===2?0:ie+1,j({loading:!0,pageNo:0,sort:{fieldName:ie===0?"":"writeRecord",sortDirection:U[ie]}})}},e.createElement("span",null,_l("\u5DF2\u5199\u5165(\u884C)")),e.createElement("div",{className:"flexColumn mLeft6 hrHeight"},e.createElement(B.Z,{icon:"arrow-up",className:X()("sortIcon",{selected:p.sort.fieldName==="writeRecord"&&p.sort.sortDirection===g.UO.ASC})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("sortIcon",{selected:p.sort.fieldName==="writeRecord"&&p.sort.sortDirection===g.UO.DESC})})),e.createElement(Le.Z,{className:"mLeft5 h16",text:_l("\u5DE5\u4F5C\u8868\u6570\u636E\u91CF\u5927\u65F6\u4F1A\u6309\u961F\u5217\u5206\u6279\u5199\u5165\uFF0C\u5B9E\u9645\u5B8C\u6210\u5199\u5165\u91CF\u7565\u6709\u5EF6\u8FDF\u3002")},e.createElement(B.Z,{icon:"info_outline",className:"Gray_9e Font16"})))}},{dataIndex:"createUser",render:function(b){return e.createElement("div",null,e.createElement("span",null,b.creatorName),e.createElement("span",{className:"Gray_9e"}," \u521B\u5EFA\u4E8E "+(0,Pe.p6)(b.createTime)))},renderTitle:function(){return e.createElement("div",{className:"flexRow pointer pRight8",onClick:function(){p.sort.fieldName!=="createTime"?ie=1:ie=ie===2?0:ie+1,j({loading:!0,pageNo:0,sort:{fieldName:ie===0?"":"createTime",sortDirection:U[ie]}})}},e.createElement("span",null,_l("\u521B\u5EFA\u4EBA")),e.createElement("div",{className:"flexColumn mLeft6"},e.createElement(B.Z,{icon:"arrow-up",className:X()("sortIcon",{selected:p.sort.fieldName==="createTime"&&p.sort.sortDirection===g.UO.ASC})}),e.createElement(B.Z,{icon:"arrow-down",className:X()("sortIcon",{selected:p.sort.fieldName==="createTime"&&p.sort.sortDirection===g.UO.DESC})})))}},{dataIndex:"option",title:"",renderTitle:function(){return e.createElement("div",{className:"optionIcon",onClick:function(){T([]),j({pageNo:0,loading:!0})}},e.createElement(B.Z,{icon:"refresh1",className:"Font18 pointer"}))},render:function(b){return e.createElement(Wr,{projectId:o,record:b,taskList:f,setTaskList:T,onRefreshComponents:u})}}];return e.createElement(e.Fragment,null,e.createElement("div",{className:"filterContent"},e.createElement("p",{className:"taskListText"},_l("\u4EFB\u52A1\u5217\u8868")),e.createElement("div",{className:"flexRowBetween"},e.createElement("div",{className:"flexRow"},e.createElement(an.Z,{className:"searchInput",placeholder:_l("\u4EFB\u52A1\u540D\u79F0 / \u521B\u5EFA\u4EBA"),value:p.keyWords,onChange:de}),e.createElement("div",{className:"relative"},e.createElement(B.Z,{icon:"filter",className:X()("filterIcon",{isActive:x}),onClick:function(){return H(!x)}}),!x&&[p.taskStatus,p.sourceType,p.destType].filter(function(R){return R==="ALL"}).length!==3&&e.createElement($r,null)))),x&&e.createElement("div",{className:"mTop16"},v.map(function(R,b){return e.createElement(eo,{key:b,className:X()({isExpand:S[R.key]})},e.createElement("div",{className:"itemText"},R.title),e.createElement("ul",null,R.data.map(function(N,ee){return e.createElement("li",{key:ee,title:N.text,className:X()({isActive:N.key===p[R.key]}),onClick:function(){var q;return j((q={},(0,se.default)(q,R.key,N.key),(0,se.default)(q,"pageNo",0),(0,se.default)(q,"loading",!0),q))}},N.text)}),R.hasExpand&&e.createElement(B.Z,{icon:S[R.key]?"arrow-up":"arrow-down",className:"expandIcon",onClick:function(){return y((0,se.default)({},R.key,!S[R.key]))}})))}))),e.createElement(Fn,null,e.createElement("div",{className:"headTr mTop8"},Ee.map(function(R,b){return e.createElement("div",{key:b,className:""+R.dataIndex},R.renderTitle?R.renderTitle():R.title)}))),e.createElement(Re.Z,{className:"flex",onScrollEnd:Ie},f&&f.length>0?e.createElement(Fn,null,f.map(function(R,b){return e.createElement("div",{key:b,className:"dataItem"},Ee.map(function(N,ee){return e.createElement("div",{key:ee,className:""+N.dataIndex},N.render?N.render(R):R[N.dataIndex])}))})):p.loading?null:e.createElement(qr,null,e.createElement("span",{className:"iconCon InlineBlock TxtCenter "},e.createElement("i",{className:"icon-synchronization Font64 TxtMiddle"})),e.createElement("p",{className:"Gray_9e mTop20 mBottom0"},p.searchKeyWords?_l("\u65E0\u641C\u7D22\u7ED3\u679C\uFF0C\u6362\u4E00\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u5427"):_l("\u6682\u65E0\u6570\u636E"))),p.loading&&e.createElement(ve.Z,{className:"mTop10"})))}var to=(0,P.Z)([`
  background: #fff;
  padding: 32px 32px 0;

  .flexRowBetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .filterContent {
    margin-top: 24px;

    .taskListText {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .searchInput {
      width: 360px;
      min-width: 360px;
      height: 36px;
    }
    .filterIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-left: 24px;
      color: #9e9e9e;
      cursor: pointer;

      &:hover {
        color: #2196f3;
        background: #f5f5f5;
      }
      &.isActive {
        color: #2196f3;
        background: rgba(33, 150, 243, 0.07);
      }
    }
    .addTaskButton {
      padding: 8px 24px;
      background: #2196f3;
      border-radius: 18px;
      color: #fff;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background: #1764c0;
      }
    }
  }
`],[`
  background: #fff;
  padding: 32px 32px 0;

  .flexRowBetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .filterContent {
    margin-top: 24px;

    .taskListText {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .searchInput {
      width: 360px;
      min-width: 360px;
      height: 36px;
    }
    .filterIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-left: 24px;
      color: #9e9e9e;
      cursor: pointer;

      &:hover {
        color: #2196f3;
        background: #f5f5f5;
      }
      &.isActive {
        color: #2196f3;
        background: rgba(33, 150, 243, 0.07);
      }
    }
    .addTaskButton {
      padding: 8px 24px;
      background: #2196f3;
      border-radius: 18px;
      color: #fff;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background: #1764c0;
      }
    }
  }
`]),ao=D.ZP.div(to);function ro(t){var o=(0,e.useState)(+new Date),u=(0,k.Z)(o,2),l=u[0],a=u[1];return e.createElement(ao,{className:"flexColumn h100"},e.createElement("div",{className:"flexRowBetween"},e.createElement("h3",{className:"Bold Font24 mBottom0"},_l("\u6570\u636E\u540C\u6B65\u4EFB\u52A1")),e.createElement(Lr,{projectId:t.currentProjectId})),e.createElement(Dr,{projectId:t.currentProjectId,flag:l}),e.createElement(no,{projectId:t.currentProjectId,onRefreshComponents:a}))}var oo=d(50839),Ao=d(30683),io,Rn,Mn,Qn={connectList:"/integration/connectList",dataConnect:"/integration/dataConnect",taskCon:"/integration/taskCon",task:"/integration/task",source:"/integration/source"},lo={connectList:ea,dataConnect:tr,taskCon:oo.default,task:ro,source:Ir},so=["dataConnect","taskCon","task","source"],co=function(o){var u=[];return r().keys(Qn).forEach(function(l,a){var f=Qn[l],T=lo[l];u.push(e.createElement(hn.Z,{key:a,path:f,component:function(){return md.global.Config.IsLocal&&!md.global.Config.EnableDataPipeline&&so.includes(l)?e.createElement("div",{className:"flexColumn alignItemsCenter justifyContentCenter h100"},(0,pe.Yg)({hint:md.global.Config.IsPlatformLocal?_l("\u6570\u636E\u96C6\u6210\u670D\u52A1\u672A\u90E8\u7F72\uFF0C\u6682\u4E0D\u53EF\u7528"):e.createElement("span",null,_l("\u6570\u636E\u96C6\u6210\u670D\u52A1\u672A\u90E8\u7F72\uFF0C\u8BF7\u53C2\u8003"),e.createElement("a",{href:"https://docs.pd.mingdao.com/faq/integrate/flink",target:"_blank"},_l("\u5E2E\u52A9"))),dialogType:"content"})):e.createElement(T,o)}}))}),u},po=(Rn=io=function(t){(0,gn.default)(o,t);function o(u){(0,un.default)(this,o);var l=(0,fn.default)(this,(o.__proto__||pn()(o)).call(this,u));Mn.call(l);var a=l.getProjectInfo(),f=a.projectId,T=f===void 0?"":f,C=a.isSuperAdmin,n=C===void 0?!1:C,I=a.isProjectAppManager,F=I===void 0?!1:I;return l.state={showCreateCustomBtn:!1,isSuperAdmin:n||F,currentProjectId:T},l}return(0,mn.default)(o,[{key:"componentDidMount",value:function(){$("html").addClass("integration"),pe.uY.addListener("CHANGE_CURRENT_PROJECT",this.reload)}},{key:"componentWillUnmount",value:function(){$("html").removeClass("integration"),pe.uY.removeListener("CHANGE_CURRENT_PROJECT",this.reload)}},{key:"render",value:function(){var l=this.props.match,a=l===void 0?{params:{}}:l,f=a.params.type,T=f===void 0?"":f,C=Pe.jx.find(function(p){return p.type===T})||{},n=this.state,I=n.isSuperAdmin,F=n.currentProjectId,Z=(0,Y.default)({},this.props,{currentProjectId:F,isSuperAdmin:I});if(!I){var w=Pe.Ez.map(function(p){return p.type});if(w.includes(T))return(0,Qe.T8)("/integration"),""}return e.createElement("div",{className:"flexRow h100"},e.createElement(Kn(),{title:C.txt?_l("\u96C6\u6210\u4E2D\u5FC3")+"-"+C.txt:_l("\u96C6\u6210\u4E2D\u5FC3")}),e.createElement(Vn,Z),e.createElement("div",{className:"flex"},e.createElement(na.Z,null,e.createElement(Yn.Z,null,co(Z),e.createElement(hn.Z,{path:"*",component:function(){return e.createElement(Tt,Z)},exact:!0})))))}}]),o}(e.Component),Mn=function(){var o=this;this.getProjectInfo=function(){var u=r().isEmpty((0,pe.vo)(localStorage.getItem("currentProjectId")))?r().get(md,"global.Account.projects.0"):(0,pe.vo)(localStorage.getItem("currentProjectId"));return u||{}},this.reload=function(){var u=o.getProjectInfo(),l=u.projectId,a=l===void 0?"":l,f=u.isSuperAdmin,T=f===void 0?!1:f,C=u.isProjectAppManager,n=C===void 0?!1:C;o.setState({isSuperAdmin:T||n,currentProjectId:a})}},Rn)},74435:Be=>{Be.exports="data:image/png;base64,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"},80096:Be=>{Be.exports="data:image/png;base64,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"},5813:Be=>{Be.exports="data:image/png;base64,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"}}]);
