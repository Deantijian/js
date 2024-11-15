"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[1479,5274],{77657:(Ht,re,n)=>{n.r(re),n.d(re,{default:()=>Yt});var Gt=n(66814),Ze=n(91880),oe=n.n(Ze),Ut=n(56118),Le=n(80181),Ae=n.n(Le),$t=n(51097),le=n(64540),ke=n(25273),je=n(54208),Z=n(33867),Me=n(72557),Re=n(26022),L=n(12424),Fe=n(46593),Ve=n.n(Fe),R=n(88239),Ye=n(85105),ze=n.n(Ye),We=n(99663),Be=n(22600),Pe=n(49135),Oe=n(93196),Kt=n(20148),He=n(60385),G=n.n(He),k=n(86735),e=n(67294),Ge=n(93967),Y=n.n(Ge),Ue=n(17563),$e=n(75915),A=n(71893),Ke=n(46100),U=n(58064),Xe=n(62509),J=n(62592),Xt=n(48860),Qe=n(81233),Je=n.n(Qe),V=n(51843),ie=n(22507),se=n(15759),qe=n(69288),_e=n(52945),ce=n.n(_e),et=n(15405),tt=n(30381),I=n.n(tt),nt=n(42057),Qt=n(6538),de=n(14321),at=n(31546),rt=n(24043),pe=n.n(rt),ue=n(43792),ot=n(75809),lt=n(96486),T=n.n(lt),it=(0,k.Z)([`
  font-size: 17px;
  color: #333333;
  font-weight: bold;
`],[`
  font-size: 17px;
  color: #333333;
  font-weight: bold;
`]),st=(0,k.Z)([`
  color: #9e9e9e;
  font-size: 13px;
`],[`
  color: #9e9e9e;
  font-size: 13px;
`]),ct=(0,k.Z)([`
  margin-top: 25px;
  color: #333;
  font-size: 14px;
`],[`
  margin-top: 25px;
  color: #333;
  font-size: 14px;
`]),dt=(0,k.Z)([`
  display: flex;
  align-items: center;
  margin-right: 10px;
  border-radius: 24px;
  background-color: #f7f7f7;
`],[`
  display: flex;
  align-items: center;
  margin-right: 10px;
  border-radius: 24px;
  background-color: #f7f7f7;
`]),pt=(0,k.Z)([`
  display: inline-flex;
  width: 26px;
  height: 26px;
  line-height: 26px;
  border: 1px solid #ddd;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .addOrTransferIcon {
    color: #757575;
  }
  &:hover {
    border-color: #2196f3;
    .addOrTransferIcon {
      color: #2196f3;
    }
  }
`],[`
  display: inline-flex;
  width: 26px;
  height: 26px;
  line-height: 26px;
  border: 1px solid #ddd;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .addOrTransferIcon {
    color: #757575;
  }
  &:hover {
    border-color: #2196f3;
    .addOrTransferIcon {
      color: #2196f3;
    }
  }
`]),ut=(0,k.Z)([`
  display: flex;

  .dateItem {
    width: 288px;
  }
`],[`
  display: flex;

  .dateItem {
    width: 288px;
  }
`]),mt=A.ZP.div(it),ft=A.ZP.div(st),q=A.ZP.div(ct),vt=A.ZP.div(dt),gt=A.ZP.div(pt),ht=A.ZP.div(ut);function bt(x){var u=x.setTodoEntrustModalVisible,d=x.editEntrustData,t=x.delegationList,o=x.setDelegationList,s=t?t.map(function(h){return h.companyId}):[],l=md.global.Account.projects.map(function(h){return{text:h.companyName,value:h.projectId,disabled:s.indexOf(h.projectId)>=0&&h.projectId!==d.companyId}}),i=!T().isEmpty(d),p=(0,e.useState)(i?d:{companyId:(l.filter(function(h){return!h.disabled})[0]||{}).value}),c=(0,L.Z)(p,2),r=c[0],a=c[1],m=function(v){a(ce()({},r,v))},f=function(v){var g=I()().hours(),E=I()().minutes();return!v||I()(v).isSame(I()(),"d")?{disabledHours:function(){return pe()(Array(g),function(z,F){return F})},disabledMinutes:function(){return!v||I()(v).isSame(I()(),"h")?pe()(Array(E),function(z,F){return F}):[]}}:{disabledHours:function(){return[]},disabledMinutes:function(){return[]}}},b=function(){(0,ot.Z)({SelectUserSettings:{filterAccountIds:[md.global.Account.accountId].concat((r.trustee||{}).accountId||[]),projectId:r.companyId,filterAll:!0,filterFriend:!0,filterOtherProject:!0,unique:!0,callback:function(g){return m({trustee:g[0]})}}})},y=function(){var v={companyId:r.companyId,startDate:r.startDate?I()(r.startDate).format("YYYY-MM-DD HH:mm:ss"):"",endDate:I()(r.endDate).format("YYYY-MM-DD HH:mm:ss"),trustee:r.trustee.accountId};if(I()(r.endDate).diff(I()(r.startDate),"minutes")<=0){alert(_l("\u59D4\u6258\u7ED3\u675F\u65F6\u95F4\u5E94\u5927\u4E8E\u5F00\u59CB\u65F6\u95F4"),2);return}i?V.Z.update((0,R.default)({},v,{id:d.id,status:d.status})).then(function(g){g&&(u(!1),V.Z.getList().then(function(E){return o(E)}),alert(_l("\u66F4\u65B0\u59D4\u6258\u6210\u529F")))}):V.Z.add(v).then(function(g){g&&(u(!1),V.Z.getList().then(function(E){return o(E)}),alert(_l("\u6DFB\u52A0\u59D4\u6258\u6210\u529F")))})};return e.createElement(e.Fragment,null,e.createElement(nt.Z,{visible:!0,width:640,bodyStyle:{padding:"16px 24px"},okDisabled:!(r.trustee&&r.companyId&&r.endDate),onOk:y,onCancel:function(){return u(!1)}},e.createElement(mt,null,_l("\u5F85\u529E\u59D4\u6258")),e.createElement(ft,null,_l("\u53D1\u8D77\u59D4\u6258\u540E\uFF0C\u60A8\u8D1F\u8D23\u7684\u5BA1\u6279\u3001\u586B\u5199\u4E8B\u9879\u5C06\u8F6C\u4EA4\u7ED9\u88AB\u59D4\u6258\u4EBA")),e.createElement(q,null,e.createElement("span",{className:"bold"},_l("\u7EC4\u7EC7")),e.createElement("span",{className:"Red bold"}," *"),e.createElement("div",null,e.createElement(at.Z,{className:"mTop10 w100 Font13",isAppendToBody:!0,border:!0,value:r.companyId,data:l,onChange:function(v){return m({companyId:v,trustee:""})}}))),e.createElement(q,null,e.createElement("span",{className:"bold"},_l("\u59D4\u6258\u7ED9")),e.createElement("span",{className:"Red bold"}," *"),e.createElement("div",{className:"flexRow mTop10"},r.trustee&&e.createElement(vt,null,e.createElement(se.Z,{className:"circle",user:{userHead:r.trustee.avatar,accountId:r.trustee.accountId},size:26}),e.createElement(ie.Z,{className:"Gray Font13 pLeft5 pRight10 pTop2",user:{userName:r.trustee.fullName||r.trustee.fullname,accountId:r.trustee.accountId}})),e.createElement(gt,{onClick:b},e.createElement(Z.Z,{icon:r.trustee?"swap_horiz":"plus",className:"Font16 addOrTransferIcon"})))),e.createElement(q,null,e.createElement("span",{className:"bold"},_l("\u59D4\u6258\u65F6\u95F4")),e.createElement(ht,null,e.createElement("div",{className:"mTop10 mRight16 dateItem"},e.createElement("div",{className:"Font13 mBottom5"},_l("\u5F00\u59CB")),e.createElement(de.default,{style:{width:"100%",borderRadius:"3px"},placeholder:_l("\u6B64\u523B"),showTime:!0,disabledDate:function(v){return v<I()().subtract(1,"d")},disabledTime:f,format:"YYYY-MM-DD HH:mm",locale:ue.Z,defaultValue:r.startDate,allowClear:!0,onChange:function(v){return m({startDate:v})}})),e.createElement("div",{className:"mTop10 dateItem"},e.createElement("div",{className:"Font13 mBottom5"},_l("\u7ED3\u675F"),e.createElement("span",{className:"Red bold"}," *")),e.createElement(de.default,{style:{width:"100%",borderRadius:"3px"},placeholder:_l("\u8BF7\u9009\u62E9\u65E5\u671F"),showTime:!0,disabledDate:function(v){return v<I()().subtract(1,"d")},disabledTime:f,format:"YYYY-MM-DD HH:mm",defaultValue:r.endDate,allowClear:!0,locale:ue.Z,onChange:function(v){return m({endDate:v})}}))))))}var Jt=n(80426),xt=n(59012),me=n.n(xt),qt=n(63627),Et=n(81982),fe=n.n(Et),Ct=n(18667),ve=n(17206),yt=(0,k.Z)([`
  height: 95%;
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.full {
    height: 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .description {
    font-size: 13px;
    color: #9e9e9e;
    padding: 22px 16px;
  }
  .formInfo {
    padding: 0 16px;
    .formItem {
      .label {
        font-size: 14px;
        color: #333;
        font-weight: 600;
      }
    }
    .requied {
      position: absolute;
      left: -10px;
      top: 3px;
      color: #ff7272;
      font-size: 13px;
      font-weight: bold;
    }
    .organization {
      height: 36px;
      padding: 0 10px;
      border: 1px solid #eaeaea;
    }
    .client {
      margin: 15px 0 24px 0;
    }
    .userItemWrapper {
      display: flex;
      height: 26px;
      align-items: center;
      margin-right: 10px;
      overflow: hidden;
      max-width: calc(100% - 26px);
      .circle {
        z-index: 2;
      }
      .fullName {
        height: 22px;
        line-height: 22px;
        background: #f7f7f7;
        border-top-right-radius: 22px;
        border-bottom-right-radius: 22px;
        padding-left: 20px !important;
        margin-left: -16px;
      }
    }
    .addUserBtn {
      width: 26px;
      height: 26px;
      line-height: 26px;
      border: 1px solid #ddd;
      border-radius: 50%;
      display: inline-flex;
      vertical-align: top;
      align-items: center;
      justify-content: center;
    }
  }
  .actionButtons {
    padding: 7px 0;
    .am-button {
      height: 36px;
      line-height: 36px;
      border-radius: 18px;
      border: 1px solid #ddd;
    }
    .am-button-primary {
      border: 1px solid #2196f3;
      background-color: #2196f3;
      &.am-button-disabled {
        opacity: 0.9;
      }
    }
    .am-button-active::before,
    .am-button::before {
      border: none;
    }
  }
  &.projectListWrap {
    height: 280px;
    .am-modal-body {
      text-align: left;
      padding: 16px 16px 0;
    }
    .header {
      line-height: 24px;
      margin-bottom: 10px;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .projectItem {
      height: 50px;
      line-height: 50px;
    }
  }
`],[`
  height: 95%;
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.full {
    height: 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .description {
    font-size: 13px;
    color: #9e9e9e;
    padding: 22px 16px;
  }
  .formInfo {
    padding: 0 16px;
    .formItem {
      .label {
        font-size: 14px;
        color: #333;
        font-weight: 600;
      }
    }
    .requied {
      position: absolute;
      left: -10px;
      top: 3px;
      color: #ff7272;
      font-size: 13px;
      font-weight: bold;
    }
    .organization {
      height: 36px;
      padding: 0 10px;
      border: 1px solid #eaeaea;
    }
    .client {
      margin: 15px 0 24px 0;
    }
    .userItemWrapper {
      display: flex;
      height: 26px;
      align-items: center;
      margin-right: 10px;
      overflow: hidden;
      max-width: calc(100% - 26px);
      .circle {
        z-index: 2;
      }
      .fullName {
        height: 22px;
        line-height: 22px;
        background: #f7f7f7;
        border-top-right-radius: 22px;
        border-bottom-right-radius: 22px;
        padding-left: 20px !important;
        margin-left: -16px;
      }
    }
    .addUserBtn {
      width: 26px;
      height: 26px;
      line-height: 26px;
      border: 1px solid #ddd;
      border-radius: 50%;
      display: inline-flex;
      vertical-align: top;
      align-items: center;
      justify-content: center;
    }
  }
  .actionButtons {
    padding: 7px 0;
    .am-button {
      height: 36px;
      line-height: 36px;
      border-radius: 18px;
      border: 1px solid #ddd;
    }
    .am-button-primary {
      border: 1px solid #2196f3;
      background-color: #2196f3;
      &.am-button-disabled {
        opacity: 0.9;
      }
    }
    .am-button-active::before,
    .am-button::before {
      border: none;
    }
  }
  &.projectListWrap {
    height: 280px;
    .am-modal-body {
      text-align: left;
      padding: 16px 16px 0;
    }
    .header {
      line-height: 24px;
      margin-bottom: 10px;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .projectItem {
      height: 50px;
      line-height: 50px;
    }
  }
`]),ge=(0,A.ZP)(G())(yt);function he(x){var u=x.configVisible,d=x.onCancel,t=d===void 0?function(){}:d,o=x.getList,s=o===void 0?function(){}:o,l=x.entrustData,i=l===void 0?{}:l,p=x.setEntrustData,c=x.delegationList,r=c===void 0?[]:c,a=md.global.Account.projects,m=r?r.map(function(N){return N.companyId}):[],f=!_.isEmpty(i),b=f?i.companyId:_.includes(m,localStorage.getItem("currentProjectId"))?a.find(function(N){return!_.includes(m,N.projectId)}).projectId:localStorage.getItem("currentProjectId"),y=_.find(a,function(N){return N.projectId==b}),h=(0,e.useState)(_.isEmpty(y)?a[0]:y),v=(0,L.Z)(h,2),g=v[0],E=v[1],C=(0,e.useState)(!1),z=(0,L.Z)(C,2),F=z[0],W=z[1],D=(0,e.useState)(f?(0,R.default)({},i.trustee,{fullname:i.trustee.fullName}):{}),j=(0,L.Z)(D,2),w=j[0],O=j[1],ee=(0,e.useState)(!1),$=(0,L.Z)(ee,2),K=$[0],te=$[1],zt=(0,e.useState)(!1),De=(0,L.Z)(zt,2),Ne=De[0],ne=De[1],Wt=(0,e.useState)(f?{startDate:i.startDate?new Date(I()(i.startDate).format("YYYY-MM-DD HH:mm")):i.startDate,endDate:new Date(I()(i.endDate).format("YYYY-MM-DD HH:mm"))}:{startDate:"",endDate:""}),Ie=(0,L.Z)(Wt,2),S=Ie[0],H=Ie[1],Bt=(0,e.useState)(!1),we=(0,L.Z)(Bt,2),Se=we[0],X=we[1],Q=function(M){if(M)return I()(M).format("YYYY-MM-DD HH:mm")},Pt=function(){var M={companyId:g.projectId,startDate:S.startDate?I()(S.startDate).format("YYYY-MM-DD HH:mm:ss"):"",endDate:I()(S.endDate).format("YYYY-MM-DD HH:mm:ss"),trustee:w.accountId};if(I()(S.endDate).diff(I()(S.startDate),"minutes")<=0){alert(_l("\u59D4\u6258\u7ED3\u675F\u65F6\u95F4\u5E94\u5927\u4E8E\u5F00\u59CB\u65F6\u95F4"),2);return}if(f){V.Z.update((0,R.default)({},M,{id:i.id,status:i.status})).then(function(ae){ae&&(t(),s(),_.isFunction(p)&&p({}),alert(_l("\u66F4\u65B0\u59D4\u6258\u6210\u529F")))});return}V.Z.add(M).then(function(ae){ae&&(t(),s(),E(_.isEmpty(y)?a[0]:y),H({startDate:"",endDate:""}),O({}),alert(_l("\u6DFB\u52A0\u59D4\u6258\u6210\u529F")))})};if(!g)return null;var Ot=!g.projectId||!w.accountId||!S.endDate;return e.createElement(ge,{popup:!0,animationType:"slide-up",className:"mobileDelegationCardList full",onClose:t,visible:u},e.createElement("div",{className:"flexColumn h100 TxtLeft Font13"},e.createElement("div",{className:"description"},_l("\u53D1\u8D77\u59D4\u6258\u540E\uFF0C\u60A8\u8D1F\u8D23\u7684\u5BA1\u6279\u3001\u586B\u5199\u4E8B\u9879\u5C06\u8F6C\u4EA4\u7ED9\u88AB\u59D4\u6258\u4EBA")),e.createElement("div",{className:"formInfo flex"},e.createElement("div",{className:"formItem "},e.createElement("div",{className:"label Relative"},e.createElement("span",{className:"requied"},"*"),_l("\u7EC4\u7EC7")),e.createElement("div",{className:"formCon organization flexRow alignItemsCenter mBottom24 mTop10",onClick:function(){return X(!0)}},e.createElement("div",{className:"flex ellipsis Gray"},g.companyName||""),e.createElement(Z.Z,{icon:"arrow-right-border",className:"Gray_9d"}))),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"label Relative"},e.createElement("span",{className:"requied"},"*"),_l("\u59D4\u6258\u7ED9")),e.createElement("div",{className:"formCon flexRow client"},!_.isEmpty(w)&&e.createElement("div",{className:"userItemWrapper"},e.createElement("div",{className:"pointer circle"},e.createElement("img",{style:{backgroundColor:"#f5f5f5",borderRadius:"50%",width:"22px",height:"22px"},placeholder:md.global.FileStoreConfig.pictureHost.replace(/\/$/,"")+"/UserAvatar/default.gif",className:"circle",src:w.avatar?w.avatar.indexOf("?")>0?w.avatar.replace(/imageView2\/\d\/w\/\d+\/h\/\d+(\/q\/\d+)?/,"imageView2/2/w/100/h/100/q/90"):w.avatar+"?imageView2/2/w/100/h/100/q/90":""})),e.createElement("div",{className:"Gray Font13 pRight10 pTop1 ellipsis fullName"},w.fullname)),e.createElement("div",{className:"addUserBtn",onClick:function(){return W(!0)}},e.createElement(Z.Z,{icon:_.isEmpty(w)?"plus":"swap_horiz",className:"Font14"})))),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"label mBottom16"},_l("\u59D4\u6258\u65F6\u95F4")),e.createElement("div",{className:"flexRow Gray Font13"},e.createElement("div",{className:"flex mRight5"},e.createElement("div",null,_l("\u5F00\u59CB")),e.createElement("div",{className:"formCon organization flexRow alignItemsCenter mTop8",onClick:function(){te(!0)}},e.createElement("div",{className:"flex ellipsis Gray_bd"},Q(S.startDate)?e.createElement("span",{className:"Gray"},Q(S.startDate)):_l("\u6B64\u523B")),e.createElement(Z.Z,{icon:"arrow-right-border",className:"Gray_9d"})),K&&e.createElement(ve.Z,{customHeader:_l("\u5F00\u59CB\u65F6\u95F4"),precision:"minite",isOpen:K,value:S.startDate?S.startDate:new Date,min:new Date,onSelect:function(M){H((0,R.default)({},S,{startDate:M})),te(!1)},onCancel:function(){H((0,R.default)({},S,{startDate:""})),te(!1)}})),e.createElement("div",{className:"flex mLeft5"},e.createElement("div",{className:"Relative"},e.createElement("span",{className:"requied"},"*"),_l("\u7ED3\u675F")),e.createElement("div",{className:"formCon organization flexRow alignItemsCenter mTop8",onClick:function(){ne(!0)}},e.createElement("div",{className:"flex ellipsis Gray_bd"},Q(S.endDate)?e.createElement("span",{className:"Gray"},Q(S.endDate)):_l("\u8BF7\u9009\u62E9")),e.createElement(Z.Z,{icon:"arrow-right-border",className:"Gray_9d"})),Ne&&e.createElement(ve.Z,{customHeader:_l("\u7ED3\u675F\u65F6\u95F4"),precision:"minite",isOpen:Ne,value:S.endDate||new Date,min:S.startDate||new Date,onSelect:function(M){H((0,R.default)({},S,{endDate:M})),ne(!1)},onCancel:function(){H((0,R.default)({},S,{endDate:""})),ne(!1)}}))))),e.createElement("div",{className:"actionButtons flexRow"},e.createElement(me(),{className:"flex",size:"sm"},e.createElement(fe(),{className:"Font13 bold Gray_75 btn",onClick:t},_l("\u53D6\u6D88"))),e.createElement(me(),{className:"flex",size:"sm"},e.createElement(fe(),{className:"Font13 bold btn",type:"primary",disabled:Ot,onClick:Pt},_l("\u786E\u5B9A"))))),F&&e.createElement(Ct.Z,{visible:F,filterAccountIds:w.accountId?[md.global.Account.accountId].concat(w.accountId):[md.global.Account.accountId],type:"user",projectId:g.projectId,onlyOne:!0,onClose:function(){return W(!1)},onSave:function(M){O(_.get(M,[0])||{})}}),Se&&e.createElement(ge,{popup:!0,animationType:"slide-up",visible:Se,style:{height:280},className:"projectListWrap",onClose:function(){return X(!1)}},e.createElement("div",{className:"flexRow header"},e.createElement("div",{className:"Font13 Gray_9e flex"},_l("\u9009\u62E9\u7EC4\u7EC7")),e.createElement("div",{className:"closeIcon",onClick:function(){X(!1)}},e.createElement(Z.Z,{icon:"close",className:"Font17 Gray_9e bold"}))),a.map(function(N){return e.createElement("div",{className:"flexRow projectItem",onClick:function(){_.includes(m,N.projectId)||(N.projectId!==g.projectId&&O({}),E(N),X(!1))}},e.createElement("div",{className:Y()("flex Gray Font15 Bold",{Gray_9e:_.includes(m,N.projectId)})},N.companyName),N.projectId===g.projectId&&e.createElement("div",null,e.createElement(Z.Z,{icon:"done",className:"ThemeColor Font20 Bold"})))})))}var B=n(15577),Tt=(0,k.Z)([`
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }
`],[`
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }
`]),Dt=(0,k.Z)([`
  margin-bottom: 20px;
  color: #333333;
  font-size: 15px;
  font-weight: bold;
`],[`
  margin-bottom: 20px;
  color: #333333;
  font-size: 15px;
  font-weight: bold;
`]),Nt=(0,k.Z)([`
  display: flex;
  margin-bottom: 15px;
`],[`
  display: flex;
  margin-bottom: 15px;
`]),It=(0,k.Z)([`
  flex: 1;
  color: #9e9e9e;
  font-size: `,`;
`],[`
  flex: 1;
  color: #9e9e9e;
  font-size: `,`;
`]),wt=(0,k.Z)([`
  flex: 4;
  color: #333333;
  font-size: `,`;
  overflow: hidden;
`],[`
  flex: 4;
  color: #333333;
  font-size: `,`;
  overflow: hidden;
`]),St=A.ZP.div(Tt),Zt=A.ZP.div(Dt),be=A.ZP.div(Nt),xe=A.ZP.div(It,function(x){return x.isMobile?"13px":"14px"}),Ee=A.ZP.div(wt,function(x){return x.isMobile?"13px":"14px"}),Ce=A.ZP.button(function(x){var u=x.isAdd,d=x.isMobile;return`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
line-height: 36px;
border: 0;
border-radius: 4px;
background-color: `+(d?u?"#fff":"#2196f3":u?"#f5f5f5":"#f7f7f7")+` ;
color: `+(d&&!u?"#fff":"#2196f3")+`;
font-size: `+(d?"13px":"14px")+`;
cursor: pointer;

&:hover {
  color: `+(!u&&"#fff")+`
  background-color: `+(u?"#fff":"#2196f3")+`;
}
&.mobileStyle {
  height: 32px;
  line-height: 32px;
  width: 102px;
  border-radius: 5px;
}
`});function Lt(x){var u=x.posX,d=x.visible,t=x.delegationList,o=x.onClose,s=x.setDelegationList,l=x.finishDelegation,i=l===void 0?function(){}:l,p=(0,e.useState)(!1),c=(0,L.Z)(p,2),r=c[0],a=c[1],m=(0,e.useState)({}),f=(0,L.Z)(m,2),b=f[0],y=f[1],h=(0,e.useState)(!1),v=(0,L.Z)(h,2),g=v[0],E=v[1],C=(0,B.Q9)(),z=function(j){var w=ce()({},j,{startDate:W(j.startDate)?I()(j.startDate):null,endDate:I()(j.endDate)});if(y(w),C){E(!0);return}a(!0)},F=function(j,w){if(j.stopPropagation(),C){G().alert(_l("\u662F\u5426\u7ED3\u675F\u59D4\u6258?"),"",[{text:_l("\u53D6\u6D88"),style:"default",onPress:function(){}},{text:_l("\u786E\u5B9A"),style:{color:"red"},onPress:function(){i(w),o()}}]);return}qe.Z.confirm({title:_l("\u7ED3\u675F\u59D4\u6258"),description:_l("\u786E\u5B9A\u7ED3\u675F\u8BE5\u59D4\u6258\u5417?"),buttonType:"danger",onOk:function(){var ee={id:w.id,status:0,companyId:w.companyId,startDate:w.startDate,endDate:w.endDate,trustee:w.trustee.accountId};V.Z.update(ee).then(function($){$&&(alert(_l("\u7ED3\u675F\u59D4\u6258\u6210\u529F")),V.Z.getList().then(function(K){return s(K)}))})}})},W=function(j){return j&&I()(j).diff(I()(),"minutes")>0};return e.createElement(e.Fragment,null,d?e.createElement("div",{className:Y()("todoEntrustWrapper",{mobileCarListWrapper:C}),style:{transform:"translate3d("+u+"px,0,0)"}},!C&&e.createElement("div",{className:"todoEntrustHeaderWrapper"},e.createElement("span",{className:"bold"},_l("\u5F85\u529E\u59D4\u6258")),e.createElement(Z.Z,{icon:"close",className:"pointer Font24 Gray_9d ThemeHoverColor3",onClick:o})),e.createElement("div",{className:"listWrapper"},t.map(function(D){return e.createElement(St,{key:D.id,className:"pointer",onClick:function(){return z(D)}},e.createElement(Zt,null,D.companyName),e.createElement(be,null,e.createElement(xe,{isMobile:C},_l("\u59D4\u6258\u7ED9")),e.createElement(Ee,{isMobile:C},e.createElement("div",{className:"flexRow"},C?e.createElement("div",{className:"trusteeAvatarWrapper valignWrapper mRight10"},e.createElement("div",{className:"pointer circle"},e.createElement("img",{style:{backgroundColor:"#f5f5f5",borderRadius:"50%",width:"22px",height:"22px"},placeholder:md.global.FileStoreConfig.pictureHost.replace(/\/$/,"")+"/UserAvatar/default.gif",className:"circle",src:D.trustee.avatar?D.trustee.avatar.indexOf("?")>0?D.trustee.avatar.replace(/imageView2\/\d\/w\/\d+\/h\/\d+(\/q\/\d+)?/,"imageView2/2/w/100/h/100/q/90"):D.trustee.avatar+"?imageView2/2/w/100/h/100/q/90":""})),e.createElement("div",{className:"Gray Font13 pLeft5 pRight10 pTop1 ellipsis"},D.trustee.fullName)):e.createElement("div",{className:"trusteeAvatarWrapper valignWrapper mRight10"},e.createElement(se.Z,{className:"circle",user:{userHead:D.trustee.avatar,accountId:D.trustee.accountId},size:22,chatButton:!1}),e.createElement(ie.Z,{className:"Gray Font13 pLeft5 pRight10 pTop1",user:{userName:D.trustee.fullName,accountId:D.trustee.accountId},chatButton:!1}))))),e.createElement(be,null,e.createElement(xe,{isMobile:C},W(D.startDate)?_l("\u59D4\u6258\u65F6\u95F4"):_l("\u622A\u6B62\u65F6\u95F4")),e.createElement(Ee,{isMobile:C},W(D.startDate)?e.createElement(e.Fragment,null,I()(D.startDate).format("YYYY-MM-DD HH:mm"),e.createElement("span",{className:"Gray_9e"}," ~ ")):"",I()(D.endDate).format("YYYY-MM-DD HH:mm"))),e.createElement(Ce,{isMobile:C,className:"w100",onClick:function(w){return F(w,D)}},_l("\u7ED3\u675F\u59D4\u6258")))}),t.length<md.global.Account.projects.length&&e.createElement(Ce,{isMobile:C,className:"mobileStyle",isAdd:!0,onClick:function(){if(C){E(!0);return}y({}),a(!0)}},e.createElement(Z.Z,{icon:"add",className:"Font24"}),_l("\u53D1\u8D77\u59D4\u6258"))),r&&e.createElement(bt,{setTodoEntrustModalVisible:a,editEntrustData:b,delegationList:t,setDelegationList:s}),g&&e.createElement(he,{configVisible:g,onCancel:function(){return E(!1)},getList:x.getList,entrustData:b,setEntrustData:y,delegationList:t})):null)}const At=(0,et.Z)(Lt);var kt=(0,k.Z)([`
  z-index: 100 !important;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .am-drawer-sidebar {
    width: 100%;
    background-color: #f5f5f5;
  }
  .ant-drawer-body {
    padding: 10px 0 0 0;
  }
`],[`
  z-index: 100 !important;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .am-drawer-sidebar {
    width: 100%;
    background-color: #f5f5f5;
  }
  .ant-drawer-body {
    padding: 10px 0 0 0;
  }
`]),jt=(0,A.ZP)(Je())(kt);function Mt(x){var u=x.topTab,d=u===void 0?{}:u,t=x.className,o=(0,e.useState)(!1),s=(0,L.Z)(o,2),l=s[0],i=s[1],p=(0,e.useState)([]),c=(0,L.Z)(p,2),r=c[0],a=c[1],m=(0,e.useState)(!1),f=(0,L.Z)(m,2),b=f[0],y=f[1];(0,e.useEffect)(function(){h()},[]);var h=function(){V.Z.getList().then(function(C){return C&&a(C)})},v=function(){_.isEmpty(r)?y(!0):i(!0)},g=function(C){var z={id:C.id,status:0,companyId:C.companyId,startDate:C.startDate,endDate:C.endDate,trustee:C.trustee.accountId};V.Z.update(z).then(function(F){if(F){var W=r.filter(function(D){return D.id!==F.id});a(W),alert(_l("\u7ED3\u675F\u59D4\u6258\u6210\u529F"))}})};return e.createElement("div",{className:Y()("card processDelegation "+t,{bottom180:d.id==="waitingApproval"})},e.createElement(oe(),{justify:"center",align:"center",onClick:v},e.createElement(Z.Z,{className:"Font24 Gray_9e",icon:"lift"}),!_.isEmpty(r)&&e.createElement("div",{className:"redDot"})),l&&e.createElement(jt,{className:"delegationCardList",position:"right",open:l,sidebar:e.createElement("div",{className:"flexColumn"},e.createElement("div",{className:"pTop16 pRight16 TxtRight"},e.createElement(Z.Z,{icon:"closeelement-bg-circle",className:"Font22 Gray_9e",onClick:function(){i(!1)}})),e.createElement("div",{className:"flex"},e.createElement(At,{visible:l,delegationList:r,setDelegationList:a,onClose:function(){return i(!1)},getList:h,finishDelegation:g}))),onOpenChange:function(){return i(!l)}}),e.createElement(he,{configVisible:b,onCancel:function(){return y(!1)},getList:h,delegationList:r}))}var _t=n(23246),en=n(36674),tn=n(66629),Rt,ye,Te,Ft=(0,k.Z)([`
  height: 95%;
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  .content {
    background-color: #f3f3f3;
  }
  .closeBtn, .rejectApprove {
    color: #999;
    text-align: center;
    padding: 4px 15px;
    border-radius: 24px;
    border: 1px solid #DDDDDD;
    background-color: #fff;
  }
  .rejectApprove {
    &.select {
      color: #F44336;
      border-color: #F44336;
      background-color: rgba(244, 67, 54, 0.12);
    }
    &.all {
      color: #fff;
      border-color: #F44336;
      background-color: #F44336;
    }
  }
`],[`
  height: 95%;
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  .content {
    background-color: #f3f3f3;
  }
  .closeBtn, .rejectApprove {
    color: #999;
    text-align: center;
    padding: 4px 15px;
    border-radius: 24px;
    border: 1px solid #DDDDDD;
    background-color: #fff;
  }
  .rejectApprove {
    &.select {
      color: #F44336;
      border-color: #F44336;
      background-color: rgba(244, 67, 54, 0.12);
    }
    &.all {
      color: #fff;
      border-color: #F44336;
      background-color: #F44336;
    }
  }
`]),Vt=(0,A.ZP)(G())(Ft),P=[{name:_l("\u5F85\u529E"),id:"untreated",icon:"access_time",className:"Font18",tabs:[{name:_l("\u5F85\u5BA1\u6279"),id:"waitingApproval",param:{type:4}},{name:_l("\u5F85\u586B\u5199"),id:"waitingWrite",param:{type:3}}]},{name:_l("\u6211\u53D1\u8D77\u7684"),id:"mySponsor",icon:"send",className:"Font18",tabs:[],param:{type:0}},{name:_l("\u5DF2\u5B8C\u6210"),id:"processed",icon:"succeed-one-o",className:"Font15",tabs:[{name:_l("\u5DF2\u5904\u7406"),id:"completeDispose",param:{type:-1,complete:!0}},{name:_l("\u6211\u53D1\u8D77\u7684"),id:"completeMySponsor",param:{type:0,complete:!0}}]}],Yt=(ye=Rt=function(x){(0,Oe.default)(u,x);function u(d){(0,We.default)(this,u);var t=(0,Pe.default)(this,(u.__proto__||ze()(u)).call(this,d));Te.call(t);var o=d.location.search,s=Ue.parse(o),l=T().find(P,{id:s.tab});return t.state={pageIndex:1,pageSize:30,list:[],loading:!1,isMore:!0,bottomTab:l||P[0],topTab:T().find(P[0].tabs,{id:s.tab})||P[0].tabs[0],searchValue:"",countData:{},appCount:{},previewRecord:{},batchApproval:!1,approveCards:[],approveType:null,encryptType:null},t}return(0,Be.default)(u,[{key:"componentDidMount",value:function(){var t=this;this.getTodoList(),this.getTodoCount(),(0,B.Gv)({checkNeedAuth:!0,fail:function(){t.setState({showPassword:!0})}})}},{key:"getTodoList",value:function(){var t=this,o={},s=this.state,l=s.loading,i=s.isMore,p=s.topTab,c=s.bottomTab,r=s.searchValue,a=(0,B.A_)(),m=a.appId;if(!(l||!i)){this.setState({loading:!0}),this.request&&this.request.abort(),r&&(o.keyword=r),m&&(o.apkId=m);var f=this.state,b=f.pageIndex,y=f.pageSize,h=f.list,v=f.stateTab;this.request=U.Z.getTodoList((0,R.default)({pageSize:y,pageIndex:b},o,p?p.param:c.param)),this.request.then(function(g){t.setState({list:h.concat(g),loading:!1,pageIndex:b+1,isMore:g.length===y})})}}},{key:"getTodoCount",value:function(){var t=this,o=(0,B.A_)(),s=o.appId;s?Ve().all([U.Z.getTodoListFilter({type:4}).then(),U.Z.getTodoListFilter({type:3}).then()]).then(function(l){var i=(0,L.Z)(l,2),p=i[0],c=i[1],r=T().find(p,{app:{id:s}}),a=T().find(c,{app:{id:s}});t.setState({appCount:{approveCount:r?r.count:0,writeCount:a?a.count:0}})}):(0,Xe.C)().then(function(l){t.setState({countData:l})})}},{key:"renderSignatureDialog",value:function(){var t=this,o=this.state,s=o.approveType,l=o.encryptType,i=s||l,p=i===4?"auth.passTypeList":"auth.overruleTypeList",c=i===4?this.state.approveCards:this.state.approveCards.filter(function(m){return T().get(m,"flowNode.btnMap")[5]}),r=c.filter(function(m){return(T().get(m.flowNode,p)||[]).includes(1)}),a=c.filter(function(m){return T().get(m.flowNode,"encrypt")});return e.createElement(G(),{popup:!0,visible:!0,onClose:function(){t.setState({approveType:null,encryptType:null})},animationType:"slide-up"},e.createElement("div",{className:"otherActionWrapper flexColumn"},e.createElement("div",{className:"flex pAll10"},e.createElement("div",{className:"Gray_75 Font14 TxtLeft mBottom10"},_l("\u5176\u4E2D"),!!r.length&&_l("%0\u4E2A\u4E8B\u9879\u9700\u8981\u7B7E\u540D",r.length),!!(r.length&&a.length)&&"\uFF0C",!!a.length&&_l("%0\u4E2A\u4E8B\u9879\u9700\u8981\u9A8C\u8BC1\u767B\u5F55\u5BC6\u7801",a.length)),!!r.length&&e.createElement(Re.Z,{ref:function(f){t.signature=f}}),l&&e.createElement("div",{className:"mTop20 TxtLeft"},e.createElement(Me.Z,{showSubTitle:!1,isRequired:!0,allowNoVerify:!1,onChange:function(f){var b=f.password;b!==void 0&&(t.password=b)}}))),e.createElement("div",{className:"flexRow actionBtnWrapper"},e.createElement("div",{className:"flex actionBtn",onClick:function(){t.setState({approveType:null,encryptType:null})}},_l("\u53D6\u6D88")),e.createElement("div",{className:"flex actionBtn ok",onClick:function(){if(r.length&&t.signature.checkContentIsEmpty()){alert(_l("\u8BF7\u586B\u5199\u7B7E\u540D"),2);return}var f=function(){r.length?t.signature.saveSignature(function(y){t.handleBatchApprove(y,t.state.approveType),t.setState({approveType:null,encryptType:null})}):(t.handleBatchApprove(null,t.state.encryptType),t.setState({approveType:null,encryptType:null}))};if(a.length){if(!t.password||!t.password.trim()){alert(_l("\u8BF7\u8F93\u5165\u5BC6\u7801"),3);return}(0,B.Gv)({password:t.password,closeImageValidation:!0,success:f})}else f()}},_l("\u786E\u5B9A")))))}},{key:"renderRejectDialog",value:function(){var t=this,o=this.state,s=o.approveCards,l=o.batchApproval,i=o.filter,p=o.topTab,c=s.filter(function(a){return T().get(a,"flowNode.btnMap")[5]}),r=s.filter(function(a){return!T().get(a,"flowNode.btnMap")[5]});return e.createElement(Vt,{popup:!0,visible:!0,onClose:function(){t.setState({rejectVisible:!1})},animationType:"slide-up"},e.createElement("div",{className:"flexColumn h100 content"},e.createElement("div",{className:"flex flexColumn",style:{overflowY:"auto"}},e.createElement("div",{className:"pLeft10 mTop16 mBottom10 TxtLeft Gray bold"},_l("\u6709%0\u4E2A\u53EF\u5426\u51B3\u7684\u5BA1\u6279\u4E8B\u9879",c.length)),c.map(function(a){return e.createElement("div",{className:"pLeft10 pRight10",key:a.workId},e.createElement(J.Z,{item:a,type:i?i.type:null,time:createTimeSpan(a.workItem.receiveTime),currentTab:p?p.id:bottomTab.id,showApproveChecked:!1,batchApproval:l,renderBodyTitle:function(){return a.entityName?a.entityName+": "+a.title:a.title},onClick:function(){t.setState({previewRecord:{instanceId:a.id,workId:a.workId}})}}))}),!!r.length&&e.createElement(e.Fragment,null,e.createElement("div",{className:"pLeft10 mTop6 mBottom10 Gray_75 TxtLeft bold"},_l("\u4E0D\u80FD\u5426\u51B3\u4E8B\u9879")," ",r.length),r.map(function(a){return e.createElement("div",{className:"pLeft10 pRight10",key:a.workId},e.createElement(J.Z,{item:a,type:i?i.type:null,time:createTimeSpan(a.workItem.receiveTime),currentTab:p?p.id:bottomTab.id,showApproveChecked:!1,batchApproval:l,renderBodyTitle:function(){return a.entityName?a.entityName+": "+a.title:a.title},onClick:function(){t.setState({previewRecord:{instanceId:a.id,workId:a.workId}})}}))}))),e.createElement("div",{className:"flexRow valignWrapper pAll10 WhiteBG"},e.createElement("div",{className:"closeBtn flex bold mRight10",onClick:function(){t.setState({rejectVisible:!1})}},_l("\u53D6\u6D88")),e.createElement("div",{className:Y()("rejectApprove flex bold all"),onClick:function(){t.hanndleApprove(5,"auth.overruleTypeList"),t.setState({rejectVisible:!1})}},e.createElement("span",{className:"mRight5"},_l("\u5426\u51B3"))))))}},{key:"renderCount",value:function(t){var o=this.state,s=o.countData,l=o.appCount,i=(0,B.A_)(),p=i.appId;if(t.id==="waitingWrite")return p?l.writeCount>0?"("+l.writeCount+")":null:s.waitingWrite>0?"("+s.waitingWrite+")":null;if(t.id==="waitingApproval")return p?l.approveCount>0?"("+l.approveCount+")":null:s.waitingApproval>0?"("+s.waitingApproval+")":null}},{key:"renderInput",value:function(){var t=this,o=this.state.searchValue;return e.createElement("div",{className:"searchWrapper valignWrapper"},e.createElement(Z.Z,{icon:"search",className:"Gray_75 Font20 pointer"}),e.createElement("input",{value:o,type:"text",placeholder:_l("\u641C\u7D22\u8BB0\u5F55\u540D\u79F0"),onChange:function(l){t.setState({searchValue:l.target.value})},onKeyDown:function(l){var i=t.state,p=i.bottomTab,c=i.topTab;c?l.which===13&&t.handleChangeTopTab(c):l.which===13&&t.handleChangeCompleteTab(p)}}),o?e.createElement(Z.Z,{icon:"close",className:"Gray_75 Font20 pointer",onClick:function(){t.setState({searchValue:""},function(){var l=t.state,i=l.bottomTab,p=l.topTab;p?t.handleChangeTopTab(p):t.handleChangeCompleteTab(i)})}}):null)}},{key:"renderWithoutData",value:function(){return e.createElement("div",{className:"withoutData"},e.createElement("div",{className:"icnoWrapper"},e.createElement(Z.Z,{icon:"ic-line"})),e.createElement("span",null,_l("\u6682\u65E0\u5185\u5BB9")))}},{key:"renderContent",value:function(){var t=this,o=this.state,s=o.stateTab,l=o.batchApproval,i=o.list,p=o.loading,c=o.pageIndex,r=o.filter,a=o.bottomTab,m=o.topTab,f=o.approveCards;return e.createElement(ke.Z,{className:"flex",onScrollEnd:this.handleScrollEnd},i.map(function(b){return e.createElement("div",{className:"pLeft10 pRight10",key:b.workId},e.createElement(J.Z,{item:b,type:r?r.type:null,time:createTimeSpan(b.workItem.receiveTime),currentTab:m?m.id:a.id,approveChecked:!T().isEmpty(T().find(f,{workId:b.workId})),batchApproval:l,renderBodyTitle:function(){return b.entityName?b.entityName+": "+b.title:b.title},onClick:function(){t.setState({previewRecord:{instanceId:b.id,workId:b.workId}})},onApproveDone:t.handleApproveDone,onChangeApproveCards:function(h){var v=h.target.checked;v?t.setState({approveCards:f.concat(b)}):t.setState({approveCards:f.filter(function(g){return g.workId!==b.workId})})}}))}),p?e.createElement("div",{className:Y()({withoutData:c==1})},e.createElement(je.Z,{size:"middle"})):null,!p&&T().isEmpty(i)?this.renderWithoutData():null)}},{key:"render",value:function(){var t=this,o=this.state,s=o.batchApproval,l=o.list,i=o.countData,p=o.bottomTab,c=o.topTab,r=o.previewRecord,a=o.approveCards,m=o.approveType,f=o.encryptType,b=o.rejectVisible,y=p.tabs,h=l.filter(function(g){return T().get(g,"flowNode.batch")}),v=a.filter(function(g){return T().get(g,"flowNode.btnMap")[5]});return e.createElement("div",{className:"processContent flexColumn h100"},e.createElement("div",{className:"flex flexColumn"},e.createElement("div",{className:"processTabs mBottom10 z-depth-1"},e.createElement(le.default,{tabBarInactiveTextColor:"#9e9e9e",tabs:y,page:c?T().findIndex(y,{id:c.id}):-1,onTabClick:this.handleChangeTopTab,renderTab:function(E){return e.createElement("span",null,E.name," ",t.renderCount(E))}}),s&&e.createElement("div",{className:"batchApprovalHeader valignWrapper Font16"},e.createElement("div",{className:"bold"},_l("\u5F85\u5BA1\u6279"),i.waitingApproval&&"("+i.waitingApproval+")"),e.createElement("a",{onClick:function(){t.setState({batchApproval:!1,approveCards:[]})}},_l("\u5B8C\u6210")))),s&&e.createElement("div",{className:"batchApprovalFooter flexColumn"},e.createElement("div",{className:"valignWrapper"},e.createElement(Ae(),{checked:h.length&&h.length===a.length,className:Y()({checkboxDisabled:!h.length}),onChange:function(E){var C=E.target.checked;C?h.length?(alert(_l("\u5168\u9009%0\u6761\u53EF\u6279\u91CF\u5BA1\u6279\u7684\u8BB0\u5F55",h.length),1),t.setState({approveCards:h})):alert(_l("\u6CA1\u6709\u53EF\u6279\u91CF\u64CD\u4F5C\u7684\u5BA1\u6279\u4E8B\u9879"),2):t.setState({approveCards:[]})}}),e.createElement("div",{className:"mLeft5"},_l("\u5168\u9009"),a.length?_l("\uFF08\u5DF2\u9009\u62E9%0/%1\u6761\uFF09",a.length,l.length):l.length!==i.waitingApproval&&_l("\uFF08\u5DF2\u52A0\u8F7D%0\u6761\uFF09",l.length))),e.createElement("div",{className:"valignWrapper mTop10"},e.createElement("div",{className:Y()("passApprove flex mRight10",{all:a.length}),onClick:function(){t.hanndleApprove(4,"auth.passTypeList")}},_l("\u901A\u8FC7")),e.createElement("div",{className:Y()("rejectApprove flex",{select:v.length,all:a.length&&v.length===a.length}),onClick:function(){T().isEmpty(a)?alert(_l("\u8BF7\u5148\u52FE\u9009\u9700\u8981\u5904\u7406\u7684\u5BA1\u6279"),2):T().isEmpty(v)?alert(_l("\u6CA1\u6709\u53EF\u5426\u51B3\u7684\u5BA1\u6279\u4E8B\u9879"),2):t.setState({rejectVisible:!0})}},e.createElement("span",{className:"mRight5"},_l("\u5426\u51B3")),!(a.length&&v.length===a.length)&&!!v.length&&v.length))),this.renderInput(),this.renderContent(),e.createElement("div",{className:"processTabs bottomProcessTabs"},e.createElement(le.default,{tabBarInactiveTextColor:"#9e9e9e",tabs:P,page:p?T().findIndex(P,{id:p.id}):-1,onTabClick:this.handleChangeCompleteTab,renderTab:function(E){return e.createElement("div",{className:"flexColumn valignWrapper"},e.createElement(Z.Z,{className:E.className,icon:E.icon}),e.createElement("span",{className:"Font12 mTop2"},E.name))}}))),!s&&e.createElement($e.Z,{style:{bottom:60},onClick:function(){history.back()}}),!s&&c&&(c.id==="waitingApproval"||c.id==="waitingWrite")&&e.createElement(Mt,{topTab:c,className:Y()({bottom120:!l.length})}),c&&c.id==="waitingApproval"&&!s&&!!l.length&&e.createElement(oe(),{justify:"center",align:"center",className:"card processBatchOperation",onClick:function(){t.setState({batchApproval:!0})}},e.createElement(Z.Z,{className:"Font20 Gray_9e",icon:"task-complete"})),e.createElement(Ke.default,{isModal:!0,className:"full",visible:!T().isEmpty(r),instanceId:r.instanceId,workId:r.workId,onClose:function(E){E.id&&t.handleApproveDone(E),t.setState({previewRecord:{}})}}),(m||f)&&this.renderSignatureDialog(),b&&this.renderRejectDialog())}}]),u}(e.Component),Te=function(){var u=this;this.handleChangeCompleteTab=function(d){u.setState({loading:!1,pageIndex:1,isMore:!0,list:[],bottomTab:d,topTab:d.tabs[0]},function(){u.getTodoList()})},this.handleChangeTopTab=function(d){u.setState({loading:!1,pageIndex:1,isMore:!0,list:[],topTab:d},function(){u.getTodoList()})},this.handleScrollEnd=function(d){u.getTodoList()},this.handleApproveDone=function(d){var t=d.id,o=d.workId,s=u.state,l=s.list,i=s.countData,p=s.appCount,c=s.topTab,r=c===void 0?{}:c,a=(0,B.A_)(),m=a.appId;if(m){var f=(0,R.default)({},p);r.id==="waitingApproval"&&(f.approveCount=p.approveCount-1),r.id==="waitingWrite"&&(f.writeCount=p.writeCount-1),u.setState({list:l.filter(function(y){return y.workId!==o}),appCount:f})}else{var b=(0,R.default)({},i);r.id==="waitingApproval"&&(b.waitingApproval=i.waitingApproval-1),r.id==="waitingWrite"&&(b.waitingWrite=i.waitingWrite-1),u.setState({list:l.filter(function(y){return y.workId!==o}),countData:b})}},this.hanndleApprove=function(d,t){var o=u.state.approveCards,s=o.filter(function(c){return T().get(c,"flowNode.btnMap")[5]}),l=d===5?s:o,i=l.filter(function(c){return(T().get(c.flowNode,t)||[]).includes(1)}),p=l.filter(function(c){return T().get(c.flowNode,"encrypt")});T().isEmpty(l)&&alert(_l("\u8BF7\u5148\u52FE\u9009\u9700\u8981\u5904\u7406\u7684\u5BA1\u6279"),2),i.length||p.length?(i.length&&u.setState({approveType:d}),p.length&&u.setState({encryptType:d})):u.handleBatchApprove(null,d)},this.handleBatchApprove=function(d,t){var o=t===4?"auth.passTypeList":"auth.overruleTypeList",s=u.state.approveCards,l=s.filter(function(c){return T().get(c,"flowNode.btnMap")[5]}),i=t===5?l:s,p=i.map(function(c){var r=c.id,a=c.workId,m=c.flowNode,f={id:r,workId:a,opinion:_l("\u6279\u91CF\u5904\u7406")};return(T().get(m,o)||[]).includes(1)?(0,R.default)({},f,{signature:d}):f});U.Z.batch({type:4,batchOperationType:t,selects:p}).then(function(c){c&&(alert(_l("\u64CD\u4F5C\u6210\u529F"),1),u.setState({batchApproval:!1,approveCards:[]}),u.getTodoList(),u.getTodoCount())})}},ye)}}]);
