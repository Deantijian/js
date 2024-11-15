(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[2406],{92406:(se,De,n)=>{"use strict";n.r(De),n.d(De,{default:()=>yt});var L=n(88239),ze=n(66946),Ke=n(85105),Ve=n.n(Ke),Xe=n(99663),qe=n(22600),$e=n(49135),_e=n(93196),e=n(67294),Ze=n(15028),en=n(93967),xe=n.n(en),nn=n(96486),oe=n.n(nn),tn=n(36070),ce=n(36021),Ce=n(54208),ae=n(33867),an=n(22507),Le=n(26581),Ee=n(97553),g=n(12424),Y=n(86735),Fe=n(21),z=n(5017),We=n(31261),on=n(30381),Pe=n.n(on),ln=n(36964),rn=n.n(ln),sn=n(59680),cn=n.n(sn),dn=n(86324),un=n.n(dn),pn=n(79600),mn=n.n(pn),fn=(0,Y.Z)([`
  display: flex;
  align-items: center;
  .circlePoint {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
    display: inline-block;
  }
  .statusText {
    font-size: 12px;
  }
`],[`
  display: flex;
  align-items: center;
  .circlePoint {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
    display: inline-block;
  }
  .statusText {
    font-size: 12px;
  }
`]),gn=z.ZP.span(fn),Te={0:{text:_l("\u521B\u5EFA\u4E2D\uFF0C\u8BF7\u7A0D\u5019\uFF08\u7EA6\u9700\u8981\u51E0\u5206\u949F\uFF09..."),textColor:"#212121",loading:!0,icon:null,color:null},1:{text:_l("\u521B\u5EFA\u5931\u8D25"),textColor:"#F51744",loading:!1,icon:"icon-cancel1",color:"#F51744"},2:{text:_l("\u8FD0\u884C\u4E2D"),textColor:"#757575",loading:!1,icon:null,color:"#00CA86"},3:{text:_l("\u542F\u52A8\u4E2D"),textColor:"#757575",loading:!1,icon:null,color:"#00CA86"},4:{text:_l("\u505C\u6B62\u4E2D"),textColor:"#F5972B",loading:!1,icon:null,color:"#F5972B"},5:{text:_l("\u5DF2\u505C\u6B62"),textColor:"#757575",loading:!1,icon:null,color:"#BDBDBD"},6:{text:_l("\u91CD\u542F\u4E2D"),textColor:"#F5972B",loading:!1,icon:null,color:"#F5972B"},7:{text:_l("\u9500\u6BC1\u4E2D"),textColor:"#F5972B",loading:!1,icon:null,color:"#F5972B"},8:{text:_l("\u5DF2\u9500\u6BC1"),textColor:"#757575",loading:!1,icon:null,color:"#BDBDBD"},9:{text:_l("\u9500\u6BC1\u5931\u8D25"),textColor:"#F51744",loading:!1,icon:"icon-cancel1",color:"#F51744"}};function xn(a){var t=a.text,s=t===void 0?"":t,d=a.className,B=d===void 0?"":d,x=a.textColor,E=x===void 0?"":x,k=a.value,w=k===void 0?null:k,p=a.statusConfig,r=(0,e.useState)(p?p[w]:Te[w]),b=(0,g.Z)(r,2),I=b[0],Z=b[1];return(0,e.useEffect)(function(){Z(p?p[w]:Te[w])},[w]),I?e.createElement(gn,{className:B},I.loading?e.createElement(Ce.Z,{size:"small",className:"mRight12"}):e.createElement("span",{className:I.icon?I.icon+" mRight6":"circlePoint",style:I.icon?{color:I.color}:{background:I.color}}),e.createElement("span",{className:"statusText",style:{color:E||I.textColor}},s||I.text)):null}const Ge=xn;var ve=n(70801),vn=n(3540),hn=(0,Y.Z)([`
  input {
    width: 100%;
  }
`],[`
  input {
    width: 100%;
  }
`]),An=z.ZP.div(hn);function Cn(a){var t=a.visible,s=t===void 0?!1:t,d=a.defauleValue,B=a.onOk,x=a.onCancel,E=(0,e.useRef)(null),k=(0,e.useState)(d||void 0),w=(0,g.Z)(k,2),p=w[0],r=w[1];return(0,e.useEffect)(function(){r(d||void 0),E.current&&E.current.focus()},[d]),e.createElement(ve.Z,{className:"EditNameDialog",width:"480",visible:s,title:_l("\u4FEE\u6539\u540D\u79F0"),okText:_l("\u786E\u5B9A"),onCancel:x,onOk:function(){if(p.trim()===""){alert(_l("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),2);return}B(p)}},e.createElement(An,null,e.createElement(vn.Z,{manualRef:E,defaultValue:d,value:p,size:"default",onChange:function(I){r(I)}})))}const En=Cn;var ne=n(28829),le=n(15577),he=n(77863),bn=[{label:_l("\u5168\u90E8\u7C7B\u578B"),value:""},{label:_l("\u5DE5\u4F5C\u8868\u4E8B\u4EF6"),value:1},{label:_l("\u65F6\u95F4"),value:2},{label:_l("\u4EBA\u5458\u4E8B\u4EF6"),value:9},{label:_l("Webhook"),value:6},{label:_l("\u5B50\u6D41\u7A0B"),value:8},{label:_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"),value:7},{label:_l("\u5BA1\u6279\u6D41\u7A0B"),value:11},{label:_l("\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B"),value:10}],F={Creating:0,CreationFailed:1,Running:2,Starting:3,Stopping:4,Stopped:5,Restarting:6,Destroying:7,Destroyed:8,DestroyFailed:9},In=(0,Y.Z)([`
  background: #fff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  width: 160px;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  li {
    line-height: 36px;
    padding: 0 24px;
    cursor: pointer;
    a {
      color: #333;
      transition: none !important;
    }
    &:hover {
      background-color: #2196f3;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
`],[`
  background: #fff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  width: 160px;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  li {
    line-height: 36px;
    padding: 0 24px;
    cursor: pointer;
    a {
      color: #333;
      transition: none !important;
    }
    &:hover {
      background-color: #2196f3;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
`]),wn=(0,Y.Z)([`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 94px;
    height: auto;
    margin-bottom: 25px;
  }
  .desc {
    width: 448px;
    font-size: 14px;
    color: #333333;
    line-height: 25px;
    margin-bottom: 70px;
    text-align: center;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 94px;
    height: auto;
    margin-bottom: 25px;
  }
  .desc {
    width: 448px;
    font-size: 14px;
    color: #333333;
    line-height: 25px;
    margin-bottom: 70px;
    text-align: center;
  }
`]),Nn=z.ZP.ul(In),Bn=z.ZP.div(wn);function yn(a){var t=a.projectId,s=a.refresh,d=(0,le.vo)(t,!0),B=d.isSuperAdmin,x=(0,le.XH)(t,he.UU.exclusiveResource),E=(0,e.useState)(-1),k=(0,g.Z)(E,2),w=k[0],p=k[1],r=(0,e.useState)({visible:!1,value:void 0}),b=(0,g.Z)(r,2),I=b[0],Z=b[1],P=(0,e.useState)({list:[],outDateList:[]}),c=(0,g.Z)(P,2),G=c[0],U=c[1],q=(0,e.useState)({isInit:!0,loading:!0,effectiveCount:0,upgradeVersionDialog:!x}),te=(0,g.Z)(q,2),y=te[0],K=te[1];(0,e.useEffect)(function(){X()},[t]),(0,e.useEffect)(function(){s!==-1&&X()},[s]);var X=function(){!y.loading&&K((0,L.default)({},y,{loading:!0})),ne.Z.getComputingInstances({projectId:t}).then(function(S){K((0,L.default)({},y,{isInit:S&&S.length===0,loading:!1,effectiveCount:S.filter(function(R){return[F.Creating,F.Running].includes(R.status)}).length}));var o=[],O=[];S.forEach(function(R){R.status<7?o.push(R):O.push(R)}),U({list:o,outDateList:O})})},T=function(S){ne.Z.updateComputingInstance((0,L.default)({projectId:t},S)).then(function(o){o&&X()})},H=function(){if(!B||!x){alert(_l("\u8BF7\u8054\u7CFB\u7EC4\u7EC7\u8D85\u7EA7\u7BA1\u7406\u5458\u8D2D\u4E70\u6216\u5347\u7EA7"),2);return}if(x==="2"){K((0,L.default)({},y,{upgradeVersionDialog:!0}));return}(0,ce.T8)("/admin/expansionserviceComputing/"+t+"/computing")},W=function(S){var o=S.id,O=S.resourceId;ne.Z.retryComputingInstance({projectId:t,id:o,resourceId:O}).then(function(R){R?(alert(_l("\u91CD\u65B0\u521B\u5EFA\u4E2D...")),X()):alert(_l("\u521B\u5EFA\u5931\u8D25"))})},v=function(){return e.createElement(Bn,{className:"exclusiveCompContent flex"},e.createElement("img",{src:mn()}),e.createElement("div",{className:"Font22 bold mBottom24"},_l("\u7B97\u529B")),e.createElement("div",{className:"desc"},_l("\u7EC4\u7EC7\u8D2D\u4E70\u4E13\u5C5E\u7B97\u529B\u670D\u52A1\u540E\uFF0C\u5C06\u91CD\u8981\u7684\u5DE5\u4F5C\u6D41\u6DFB\u52A0\u5230\u4E13\u5C5E\u7B97\u529B\u670D\u52A1\u4E2D\u8FD0\u884C\uFF0C\u53EF\u514D\u53D7\u672C\u7EC4\u7EC7\u6216\u5E73\u53F0\u5176\u4ED6\u7EC4\u7EC7\u7684\u6D41\u7A0B\u5835\u585E\u5F71\u54CD")),e.createElement(Ee.ZP,{radius:!0,className:"exclusiveCompButton Font14",onClick:H},md.global.Config.IsLocal&&!md.global.Config.IsPlatformLocal?_l("\u521B\u5EFA\u4E13\u5C5E\u7B97\u529B"):_l("\u8D2D\u4E70\u4E13\u5C5E\u7B97\u529B")))},u=function(S){return S.length===0?null:S.map(function(o){return e.createElement("li",{className:"mBottom14",key:"exclusiveCompItem-"+o.id,onClick:function(){}},e.createElement("div",{className:"explanCardHeader valignWrapper"},e.createElement("div",{className:"headerLeft"},e.createElement("span",{className:"Hand",onClick:function(){[F.Creating,F.CreationFailed,F.Destroyed].includes(o.status)||(0,ce.T8)("/admin/computing/"+t+"/"+o.id)}},e.createElement("img",{src:o.status===F.Running?cn():un()}),e.createElement("span",{className:"bold Font15"},o.name)),e.createElement("span",{className:"Font15 mRight10"},e.createElement(Le.Z,{text:e.createElement("div",null,e.createElement("div",{className:"Gray_bd"},_l("\u8D44\u6E90ID")),e.createElement("div",{className:"mTop9"},o.resourceId,e.createElement(rn(),{className:"Hand tip-top",component:"span","data-clipboard-text":o.resourceId,onSuccess:function(){return alert(_l("\u590D\u5236\u6210\u529F"))},"data-tip":_l("\u590D\u5236\u8D44\u6E90ID")},e.createElement("span",{className:"icon-content-copy mLeft8 Gray_bd Hover_49 Hand"}))))},e.createElement("span",{className:"icon-info_outline Font16 Gray_bd mLeft4"}))),e.createElement(Ge,{value:o.status})),e.createElement("div",{className:"actionsRight Font13 ",style:{color:"#AEAEAE"}},o.creator&&e.createElement(e.Fragment,null,e.createElement(an.Z,{className:"mRight5",style:{color:"#AEAEAE"},user:{userName:o.creator.fullname,accountId:o.creator.accountId}}),e.createElement("span",{className:"mRight5"},_l("\u521B\u5EFA\u4E8E")),e.createElement("span",null,o.createDateTime?Pe()(o.createDateTime).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss"):"_")),[F.CreationFailed,F.Stopped].includes(o.status)&&e.createElement("span",{className:"repurchaseBtn mLeft24",onClick:function(){return W(o)}},_l("\u91CD\u65B0\u521B\u5EFA")),![F.Creating,F.CreationFailed,F.Starting,F.Stopping,F.Stopped,F.Restarting].includes(o.status)&&e.createElement(e.Fragment,null,(![F.Destroyed,F.DestroyFailed].includes(o.status)||o.workflowCount>0)&&e.createElement("span",{className:"manageBtn",onClick:function(){(0,ce.T8)("/admin/computing/"+t+"/"+o.id)}},_l("\u7BA1\u7406")),![F.Destroying,F.DestroyFailed].includes(o.status)&&e.createElement(We.Z,{popupVisible:w===o.id,onPopupVisibleChange:function(R){return p(R?o.id:-1)},action:["click"],popup:e.createElement(Nn,null,[F.Creating,F.Running].includes(o.status)&&e.createElement(e.Fragment,null,e.createElement("li",{onClick:function(){Z({visible:!0,value:o.name,id:o.id}),p(-1)}},_l("\u4FEE\u6539\u540D\u79F0")),o.canRenew&&!(md.global.Config.IsLocal&&!md.global.Config.IsPlatformLocal)&&e.createElement("li",{onClick:function(){if(!B){alert(_l("\u8BF7\u8054\u7CFB\u7EC4\u7EC7\u8D85\u7EA7\u7BA1\u7406\u5458\u7EED\u8D39"),2);return}(0,ce.T8)("/admin/expansionserviceComputing/"+t+"/renewcomputing/"+o.id)}},_l("\u7EED\u8D39"))),[F.Destroyed].includes(o.status)&&e.createElement("li",{onClick:function(){T({instanceId:o.id,isDelete:!0}),p(-1)}},_l("\u5220\u9664"))),popupAlign:{points:["tr","bc"],offset:[15,0]}},e.createElement(ae.Z,{icon:"moreop",className:"Gray_bd Font20 mLeft24 Hover_49 Hand"}))))),e.createElement("div",{className:"explanCardContent"},e.createElement("div",{className:"explanCardContentItem"},e.createElement("p",{className:"label"},_l("\u89C4\u683C")),e.createElement("p",{className:"value"},_l("%0\u5E76\u53D1\u6570",o.specification.concurrency)+" | "+o.specification.core+"\u6838\uFF08vCPU\uFF09 | "+o.specification.memory/1024+"GiB")),e.createElement("div",{className:"explanCardContentItem"},e.createElement("p",{className:"label"},_l("\u5230\u671F\u65F6\u95F4")),e.createElement("p",{className:"value"},o.status===F.CreationFailed?"_":o.expirationDatetime?e.createElement(e.Fragment,null,e.createElement("span",{className:o.remainingDays<1?"Gray_75 mRight5":"Gray mRight5"},Pe()(o.expirationDatetime).format(_l("YYYY\u5E74MM\u6708DD\u65E5")),_l("\u5230\u671F")),o.remainingDays<1?e.createElement("span",{style:{color:"#F51744"}},_l("\u5DF2\u8FC7\u671F")):e.createElement(e.Fragment,null,_l("\u5269\u4F59")," ",e.createElement("span",{style:{color:"#33B153"}},o.remainingDays)," ",_l("\u5929"))):"_")),e.createElement("div",{className:"explanCardContentItem"},e.createElement("p",{className:"label"},_l("\u5DE5\u4F5C\u6D41\u6570")),e.createElement("p",{className:"value"},o.workflowCount))))})};return e.createElement(e.Fragment,null,y.loading?e.createElement("div",{className:"exclusiveCompContent flex"},e.createElement(Ce.Z,null)):y.isInit?v():e.createElement("div",{className:"exclusiveCompContent flex"},e.createElement("div",{className:"exclusiveCompExplan"},_l("\u5C06\u91CD\u8981\u7684\u5DE5\u4F5C\u6D41\u6DFB\u52A0\u5230\u4E13\u5C5E\u7B97\u529B\u4E2D\u8FD0\u884C\uFF0C\u53EF\u514D\u53D7\u672C\u7EC4\u7EC7\u6216\u5E73\u53F0\u5176\u4ED6\u7EC4\u7EC7\u7684\u6D41\u7A0B\u5835\u585E\u5F71\u54CD"),e.createElement("span",{className:"createComputingButton Hand",onClick:H},e.createElement(ae.Z,{icon:"add",className:"mRight3"}),_l("\u8D2D\u4E70"))),e.createElement("ul",{className:"exclusiveCompList"},u(G.list),u(G.outDateList))),y.upgradeVersionDialog&&x&&(0,le.j0)(t,he.UU.exclusiveResource),e.createElement(En,{visible:I.visible,defauleValue:I.value,onOk:function(S){var o=I.id;T({name:S.trim(),instanceId:o}),Z({visible:!1,value:void 0,id:void 0})},onCancel:function(){Z({visible:!1,value:void 0,id:void 0})}}))}const kn=(0,Fe.Z)(yn);var kt=n(31277),Sn=n(31929),St=n(80176),Dn=n(2307),Dt=n(34279),Ae=n(64749),Zn=n(57853),Ln=n(46593),He=n.n(Ln),Zt=n(61256),we=n(36671),Fn=n(67707),Re=n(63025),Wn=n(10929),Pn=(0,Y.Z)([`
  min-height: 400px;
`],[`
  min-height: 400px;
`]),Gn=(0,Y.Z)([`
  height: 100%;
  overflow-y: scroll;
  > li {
    margin-bottom: 20px;
    padding: 16px 20px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #eaeaea;
    cursor: pointer;
  }
  > li.active,
  > li:hover {
    background: rgba(33, 150, 243, 0.11);
    border: 1px solid #2196f3;
  }
  .emptyWrap {
    margin-top: 94px;
  }
`],[`
  height: 100%;
  overflow-y: scroll;
  > li {
    margin-bottom: 20px;
    padding: 16px 20px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #eaeaea;
    cursor: pointer;
  }
  > li.active,
  > li:hover {
    background: rgba(33, 150, 243, 0.11);
    border: 1px solid #2196f3;
  }
  .emptyWrap {
    margin-top: 94px;
  }
`]),Mn=(0,z.ZP)(ve.Z)(Pn),Qn=z.ZP.ul(Gn);function On(a){var t=a.visible,s=t===void 0?!1:t,d=a.onOk,B=a.onCancel,x=a.projectId,E=a.sourceResourceId,k=(0,e.useState)(void 0),w=(0,g.Z)(k,2),p=w[0],r=w[1],b=(0,e.useState)([]),I=(0,g.Z)(b,2),Z=I[0],P=I[1];return(0,e.useEffect)(function(){!s||!x||ne.Z.getComputingInstances({projectId:x}).then(function(c){P(c.filter(function(G){return G.resourceId!==E&&G.status===2}))})},[s]),e.createElement(Mn,{className:"moveWorkflowDialog",visible:s,width:600,title:e.createElement("span",{className:"Font17 bold"},_l("\u79FB\u52A8\u5230")),okText:_l("\u79FB\u52A8"),okDisabled:Z.length===0,onOk:function(){var G=p;d(G),r(void 0)},onCancel:function(){r(void 0),B()}},e.createElement(Qn,null,Z.length===0&&e.createElement("div",{className:"emptyWrap"},e.createElement(we.default,{image:we.default.PRESENTED_IMAGE_SIMPLE,description:_l("\u6CA1\u6709\u53EF\u9009\u7B97\u529B")})),Z.map(function(c){return e.createElement("li",{key:"moveExplainItem-"+c.id,className:p===c.resourceId?"active":"",onClick:function(){r(c.resourceId)}},e.createElement("div",{className:"Font15 bold mBottom12"},c.name),e.createElement("div",{className:"Font13 flexRow"},e.createElement(Ge,{value:c.status,className:"mRight12"}),e.createElement("span",{className:"Gray_75"},""+c.specification.concurrency+_l("\u5E76\u53D1\u6570")+" | "+_l("%0\u6838",c.specification.core)+" | "+c.specification.memory/1024+"GiB")))})))}const Tn=On;var Hn=n(6100),Lt=n(67272),Rn=n(51024),Je=n(25273),Ne=n(20845),Jn=n(93002),je=n(49365),jn=n(63239),Be=n.n(jn),Q=n(33179),Un={addProcess:function(t,s){return Q.Z.ajaxOptions.url=Q.Z.server(s)+"/resource/addProcess",Q.Z.ajaxOptions.type="POST",mdyAPI(Q.V,"resourceaddProcess",Be()(t),$.extend(Q.Z,s))},getCountByResourceId:function(t,s){return Q.Z.ajaxOptions.url=Q.Z.server(s)+"/resource/getProcessCount",Q.Z.ajaxOptions.type="POST",mdyAPI(Q.V,"resourcegetProcessCount",Be()(t),$.extend(Q.Z,s))},getProcessList:function(t,s){return Q.Z.ajaxOptions.url=Q.Z.server(s)+"/resource/getProcessList",Q.Z.ajaxOptions.type="POST",mdyAPI(Q.V,"resourcegetProcessList",Be()(t),$.extend(Q.Z,s))},moveProcess:function(t,s){return Q.Z.ajaxOptions.url=Q.Z.server(s)+"/resource/moveProcess",Q.Z.ajaxOptions.type="POST",mdyAPI(Q.V,"resourcemoveProcess",Be()(t),$.extend(Q.Z,s))}};const be=Un;var Yn=n(81912),re=n(83534),Me=n(75813),zn=(0,Y.Z)([`
  height: 100%;
  display: flex;
  flex-direction: column;
  .Grey_21 {
    color: #212121;
  }
  .selectItem {
    width: 100%;
    height: 48px;
    font-size: 13px !important;
    .ant-select-arrow {
      right: 16px !important;
    }
    .ant-select-selector {
      height: 48px !important;
      border-radius: 53px !important;
      box-shadow: none !important;
      .ant-select-selection-item {
        line-height: 48px !important;
        padding-left: 13px !important;
      }
      .ant-select-selection-placeholder {
        line-height: 48px !important;
        padding-left: 13px !important;
      }
    }
  }
  .filterWrap {
    .label {
      margin-right: 4px;
    }
    .filterItem {
      width: 160px;
      margin-right: 20px;
      .ant-select-selector {
        height: 36px;
        line-height: 36px;
      }
      .ant-select-selection-item {
        line-height: 36px;
      }
      input {
        height: 36px !important;
      }
    }
  }
  .headerCon {
    border-color: #ddd;
    color: #757575;
  }
  .workflowListWrap .listItem,
  .headerCon.listItem {
    padding: 12px 24px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    color: #aaa;
    .Checkbox-box {
      margin-right: 12px;
    }
    .columnType,
    .columnStatus {
      width: 150px;
    }
  }
  .workflowListWrap .listItem .columnName {
    display: flex;
    align-items: center;
    color: #212121;
    .workflowInfoWrap {
      align-items: center;
      width: 100%;
      .iconWrap {
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          color: #fff;
          font-size: 24px;
        }
      }
    }
  }
`],[`
  height: 100%;
  display: flex;
  flex-direction: column;
  .Grey_21 {
    color: #212121;
  }
  .selectItem {
    width: 100%;
    height: 48px;
    font-size: 13px !important;
    .ant-select-arrow {
      right: 16px !important;
    }
    .ant-select-selector {
      height: 48px !important;
      border-radius: 53px !important;
      box-shadow: none !important;
      .ant-select-selection-item {
        line-height: 48px !important;
        padding-left: 13px !important;
      }
      .ant-select-selection-placeholder {
        line-height: 48px !important;
        padding-left: 13px !important;
      }
    }
  }
  .filterWrap {
    .label {
      margin-right: 4px;
    }
    .filterItem {
      width: 160px;
      margin-right: 20px;
      .ant-select-selector {
        height: 36px;
        line-height: 36px;
      }
      .ant-select-selection-item {
        line-height: 36px;
      }
      input {
        height: 36px !important;
      }
    }
  }
  .headerCon {
    border-color: #ddd;
    color: #757575;
  }
  .workflowListWrap .listItem,
  .headerCon.listItem {
    padding: 12px 24px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    color: #aaa;
    .Checkbox-box {
      margin-right: 12px;
    }
    .columnType,
    .columnStatus {
      width: 150px;
    }
  }
  .workflowListWrap .listItem .columnName {
    display: flex;
    align-items: center;
    color: #212121;
    .workflowInfoWrap {
      align-items: center;
      width: 100%;
      .iconWrap {
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          color: #fff;
          font-size: 24px;
        }
      }
    }
  }
`]),Kn=(0,Y.Z)([`
  display: flex;
  align-items: center;
  .imgCon {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 3px;
    margin-right: 8px;
    text-align: center;
    svg {
      margin-top: 2px;
    }
  }
`],[`
  display: flex;
  align-items: center;
  .imgCon {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 3px;
    margin-right: 8px;
    text-align: center;
    svg {
      margin-top: 2px;
    }
  }
`]),Vn=(0,Y.Z)([`
  margin-left: 10px;
  margin-right: 10px;
  .searchApp {
    border: none;
    border-bottom: 1px solid #f0f0f0 !important;
    box-shadow: none;
    padding-left: 3px;
    padding-right: 3px;
  }
`],[`
  margin-left: 10px;
  margin-right: 10px;
  .searchApp {
    border: none;
    border-bottom: 1px solid #f0f0f0 !important;
    box-shadow: none;
    padding-left: 3px;
    padding-right: 3px;
  }
`]),Xn=(0,Y.Z)([`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  .iconCon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f5f5f5;
    display: inline-block;
    line-height: 100px;
    color: #c2c3c3;
  }
`],[`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  .iconCon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f5f5f5;
    display: inline-block;
    line-height: 100px;
    color: #c2c3c3;
  }
`]),qn=(0,Y.Z)([`
  height: 100%;
  .headerCon {
    border-color: #ddd;
    color: #757575;
  }
  .workflowListWrap .listItem,
  .headerCon.listItem {
    padding: 12px 24px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    color: #aaa;
    .Checkbox-box {
      margin-right: 12px;
    }
    .columnType,
    .columnStatus {
      width: 150px;
    }
  }
  .workflowListWrap .listItem .columnName {
    display: flex;
    align-items: center;
    .workflowInfoWrap {
      width: 100%;
    }
    .iconWrap {
      align-items: center;
      border-radius: 5px;
      display: flex;
      height: 36px;
      justify-content: center;
      width: 36px;
      .icon {
        color: #fff;
        font-size: 24px;
      }
    }
  }
`],[`
  height: 100%;
  .headerCon {
    border-color: #ddd;
    color: #757575;
  }
  .workflowListWrap .listItem,
  .headerCon.listItem {
    padding: 12px 24px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    color: #aaa;
    .Checkbox-box {
      margin-right: 12px;
    }
    .columnType,
    .columnStatus {
      width: 150px;
    }
  }
  .workflowListWrap .listItem .columnName {
    display: flex;
    align-items: center;
    .workflowInfoWrap {
      width: 100%;
    }
    .iconWrap {
      align-items: center;
      border-radius: 5px;
      display: flex;
      height: 36px;
      justify-content: center;
      width: 36px;
      .icon {
        color: #fff;
        font-size: 24px;
      }
    }
  }
`]),$n=[{label:_l("\u5DE5\u4F5C\u8868\u4E8B\u4EF6"),value:1},{label:_l("\u65F6\u95F4"),value:2},{label:_l("\u4EBA\u5458\u4E8B\u4EF6"),value:9},{label:_l("Webhook"),value:6},{label:_l("\u5B50\u6D41\u7A0B"),value:8},{label:_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"),value:7},{label:_l("\u5BA1\u6279\u6D41\u7A0B"),value:11},{label:_l("\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B"),value:10}],_n=z.ZP.div(zn),et=z.ZP.div(Kn),nt=z.ZP.div(Vn),tt=z.ZP.div(Xn),at=z.ZP.div(qn),ot=[{label:_l("\u5168\u90E8\u72B6\u6001"),value:0},{label:_l("\u5F00\u542F"),value:!0},{label:_l("\u5173\u95ED"),value:!1}],lt=function(t){return e.createElement(tt,null,e.createElement("span",{className:"iconCon icon-department Font48"}),e.createElement("div",{className:"mTop12 Gray_9e"},t?_l("\u6682\u65E0\u5DE5\u4F5C\u6D41"):_l("\u8BF7\u9009\u62E9\u5E94\u7528")))};function rt(a){var t=a.visible,s=t===void 0?!1:t,d=a.onOk,B=a.onCancel,x=a.projectId,E=a.resourceId,k=(0,e.useState)([]),w=(0,g.Z)(k,2),p=w[0],r=w[1],b=(0,e.useState)(""),I=(0,g.Z)(b,2),Z=I[0],P=I[1],c=(0,e.useState)(void 0),G=(0,g.Z)(c,2),U=G[0],q=G[1],te=(0,e.useState)([]),y=(0,g.Z)(te,2),K=y[0],X=y[1],T=(0,e.useState)({workflowType:1,enabled:0,search:""}),H=(0,g.Z)(T,2),W=H[0],v=H[1],u=(0,e.useState)(!1),h=(0,g.Z)(u,2),S=h[0],o=h[1],O=(0,e.useState)({visible:!1,list:[],checked:[]}),R=(0,g.Z)(O,2),M=R[0],J=R[1],l=(0,Jn.Z)({appList:[],appLoading:!1,appIndex:1}),_=(0,g.Z)(l,2),ue=_[0],ye=ue.appList,Ie=ue.appLoading,ke=ue.appIndex,pe=_[1],Se=(0,e.useRef)();(0,e.useEffect)(function(){s&&me()},[s]),(0,e.useEffect)(function(){s&&Qe()},[U,W.workflowType]),(0,e.useEffect)(function(){M.list.length},[M.list]);var me=function(m,i){pe({appLoading:!0});var j=m||ke,D=i!==void 0?i:Z;je.Z.getAppsForProject({projectId:x,status:"",order:3,pageIndex:j,pageSize:100,keyword:D}).then(function(V){var ge=V.apps;pe({appList:ge,appLoading:!1,appIndex:j+1})})},Qe=function(){U&&(o(!0),Yn.Z.list({relationId:U,processListType:W.workflowType}).then(function(m){o(!1);var i=[];m.map(function(j){i=i.concat(j.processList)}),X(i)}))},A=function(){q(void 0),r([]),P(""),X([]),v({workflowType:1,enabled:0,servies:"",search:""}),J({visible:!1,list:[],checked:[]})},N=function(m){be.addProcess({apkId:U,companyId:x,processIds:m,resourceId:E}).then(function(i){i.length===0?(alert(_l("\u6DFB\u52A0\u6210\u529F")),d(),A()):ne.Z.getComputingInstances({projectId:x,resourceIds:i.map(function(j){return j.resourceId})}).then(function(j){J({visible:!0,list:i.map(function(D){var V=(j.find(function(ge){return ge.resourceId===D.resourceId})||{}).name;return(0,L.default)({},D,{name:V})}),checked:i.map(function(D){return D.id})})})})},C=function(){if(M.checked.length!==0){var m=M.list.filter(function(D){return M.checked.includes(D.id)}),i=oe().uniq(m.map(function(D){return D.resourceId})),j=He().all(i.map(function(D){return be.moveProcess({moveToResourceId:E,processIds:m.filter(function(V){return V.resourceId===D}).map(function(V){return V.id}),resourceId:D,companyId:x})}));j.then(function(D){alert(_l("\u79FB\u52A8\u6210\u529F")),A(),d()})}},ee=function(m){return!m||m.length===0?null:e.createElement(Je.Z,{className:"flex"},m.map(function(i){return e.createElement("div",{className:"listItem",key:"addWorkflowList-"+i.id},e.createElement("div",{className:"columnCheckbox"},e.createElement(Ne.Z,{value:i.id,text:null,checked:p.includes(i.id),onClick:function(D,V){var ge=D?p.filter(function(Oe){return Oe!==V}):p.concat(V);r(ge)}})),e.createElement("div",{className:"columnName flex"},e.createElement(Me.Z,{className:"alignItemsCenter workflowInfoWrap",appId:i.relationId,appName:i.name,defaultIcon:(re.EV[i.child?"subprocess":i.startAppType]||{}).iconName,iconColor:(re.EV[i.child?"subprocess":i.startAppType]||{}).iconColor,createType:2,ckeckSuccessCb:function(){(0,ce.T8)("/workflowedit/"+i.id)}})),e.createElement("div",{className:"columnType"},(re.EV[i.child?"subprocess":i.startAppType]||{}).text),e.createElement("div",{className:"columnStatus",style:{color:i.enabled?"#00C985":"#aaa"}},i.enabled?_l("\u5F00\u542F"):_l("\u5173\u95ED")))}),S&&e.createElement(Ce.Z,{className:"mTop15",size:"small"}))},ie=function(m){return!m||m.length===0?null:e.createElement(Je.Z,{className:"flex workflowListWrap"},m.map(function(i){return e.createElement("div",{className:"listItem",key:"checkedWorkflowList-"+i.id},e.createElement("div",{className:"columnCheckbox"},e.createElement(Ne.Z,{value:i.id,text:null,checked:M.checked.includes(i.id),onClick:function(D,V){var ge=D?M.checked.filter(function(Oe){return Oe!==V}):M.checked.concat(V);J((0,L.default)({},M,{checked:ge}))}})),e.createElement("div",{className:"columnName flex"},e.createElement(Me.Z,{className:"alignItemsCenter workflowInfoWrap",appId:i.app.id,appName:i.process.name,defaultIcon:(re.EV[i.process.child?"subprocess":i.process.startAppType]||{}).iconName,iconColor:(re.EV[i.process.child?"subprocess":i.process.startAppType]||{}).iconColor,createType:2})),e.createElement("div",{className:"columnType"},(re.EV[i.process.child?"subprocess":i.process.startAppType]||{}).text),e.createElement("div",{className:"columnStatus Gray"},i.name))}))},fe=oe().debounce(function(){var f=Se.current.input.value||"";P(f),me(1,f)},500);return e.createElement(e.Fragment,null,e.createElement(ve.Z,{type:"fixed",className:"addWorkflowDialog",dialogClasses:"addWorkflowDialogContainer",visible:s,width:1e3,title:e.createElement("span",{className:"Font17 bold"},_l("\u6DFB\u52A0\u5DE5\u4F5C\u6D41"),e.createElement(Le.Z,{text:_l("\u5DE5\u4F5C\u6D41\u4E2D\u5F15\u7528\u7684\u5B50\u6D41\u7A0B\u3001\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u4F1A\u5728\u5DE5\u4F5C\u6D41\u6240\u5728\u7684\u4E13\u5C5E\u7B97\u529B\u8D44\u6E90\u4E0A\u8FD0\u884C\u3002")},e.createElement("span",{className:"mLeft8 Font17 Gray_bd icon-info_outline"}))),okText:p.length===0?_l("\u6DFB\u52A0"):_l("\u6DFB\u52A0(%0)",p.length),onOk:function(){var m=p;if(m.length===0){alert(_l("\u672A\u9009\u62E9\u5DE5\u4F5C\u6D41"),3);return}N(m)},onCancel:function(){A(),B()}},e.createElement(_n,null,e.createElement("div",{className:"mTop8 bold Grey_21"},_l("\u9009\u62E9\u5E94\u7528")),e.createElement(Ae.default,{className:"selectItem mTop16 mBottom32",size:"large",placeholder:_l("\u9009\u62E9\u5E94\u7528"),notFoundContent:Ie?null:e.createElement("span",{className:"Gray_9e"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")),loading:Ie,onChange:function(m){q(m)},onFocus:function(){var m=document.getElementById("selectSearchApp");m.focus()},dropdownRender:function(m){return e.createElement(e.Fragment,null,e.createElement(nt,null,e.createElement(Rn.default,{id:"selectSearchApp",className:"searchApp",size:"large",prefix:e.createElement(ae.Z,{icon:"search",className:"Gray_bd"}),placeholder:_l("\u641C\u7D22\u5E94\u7528\u540D\u79F0"),ref:Se,onChange:fe})),m,Ie&&e.createElement(Ce.Z,null))},onPopupScroll:function(m){var i=m.target,j=i.scrollTop,D=i.offsetHeight,V=i.scrollHeight;j+D===V&&me()}},ye.filter(function(f){return f.appName.toLowerCase().indexOf(Z?Z.toLowerCase():"")>-1}).map(function(f){return e.createElement(Ae.default.Option,{value:f.appId},e.createElement(et,null,e.createElement("span",{className:"imgCon",style:{background:f.iconColor}},e.createElement(Hn.Z,{url:f.iconUrl,fill:"#FFF",size:16})),f.appName))})),U&&e.createElement(e.Fragment,null,e.createElement("div",{className:"valignWrapper filterWrap"},e.createElement("span",{className:"label"},_l("\u7C7B\u578B")),e.createElement(Ae.default,{className:"filterItem",defaultValue:W.workflowType,options:$n,suffixIcon:e.createElement(ae.Z,{icon:"arrow-down-border Font14"}),onChange:function(m){return v((0,L.default)({},W,{workflowType:m}))}}),e.createElement("span",{className:"label"},_l("\u72B6\u6001")),e.createElement(Ae.default,{className:"filterItem",defaultValue:W.enabled,options:ot,suffixIcon:e.createElement(ae.Z,{icon:"arrow-down-border Font14"}),onChange:function(m){return v((0,L.default)({},W,{enabled:m}))}}),e.createElement("div",{className:"flex"}),e.createElement(Re.Z,{placeholder:_l("\u5DE5\u4F5C\u6D41\u540D\u79F0"),handleChange:function(m){return v((0,L.default)({},W,{search:m}))}}))),U&&e.createElement("div",{className:"headerCon listItem mTop8"},e.createElement("div",{className:"columnCheckbox"},e.createElement(Ne.Z,{value:void 0,text:null,onClick:function(m,i){var j=[];m&&(j=K.filter(function(D){return(W.enabled===0||D.enabled===W.enabled)&&D.name.includes(W.search)}).map(function(D){return D.id})),r(j)}})),e.createElement("div",{className:"columnName flex"},_l("\u5DE5\u6D41\u7A0B\u540D\u79F0")),e.createElement("div",{className:"columnType"},_l("\u7C7B\u578B")),e.createElement("div",{className:"columnStatus"},_l("\u72B6\u6001"))),e.createElement("div",{className:"flex relative workflowListWrap"},K.length===0?lt(U):ee(K.filter(function(f){return(W.enabled===0||f.enabled===W.enabled)&&f.name.includes(W.search)}))))),e.createElement(ve.Z,{className:"checkedWorkflowDialog",dialogClasses:"addWorkflowDialogContainer",visible:M.visible,width:740,title:e.createElement("span",{className:"Font17 bold"},_l("\u68C0\u6D4B\u5230\u5DE5\u4F5C\u6D41\u5DF2\u5B58\u5728\u5176\u4ED6\u4E13\u5C5E\u7B97\u529B\u4E2D\uFF0C\u662F\u5426\u79FB\u52A8\uFF1F")),footer:e.createElement("div",null,e.createElement(Ee.ZP,{type:"ghostgray",onClick:C},_l("\u79FB\u52A8")+"("+M.checked.length+")"),e.createElement(Ee.ZP,{onClick:function(){A(),d()}},_l("\u4E0D\u79FB\u52A8"))),onOk:function(){},onCancel:function(){A(),d()}},e.createElement(at,null,e.createElement("div",{className:"headerCon listItem mTop8"},e.createElement("div",{className:"columnCheckbox"},e.createElement(Ne.Z,{checked:M.checked.length!==0&&M.list.length===M.checked.length,text:null,value:M.list.map(function(f){return f.id}),onClick:function(m,i){J((0,L.default)({},M,{checked:i}))}})),e.createElement("div",{className:"columnName flex"},_l("\u5DE5\u6D41\u7A0B\u540D\u79F0")),e.createElement("div",{className:"columnType"},_l("\u7C7B\u578B")),e.createElement("div",{className:"columnStatus"},_l("\u6240\u5C5E\u7B97\u529B\u670D\u52A1"))),ie(M.list))))}const it=rt;var st=(0,Y.Z)([`
  background: #fff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  width: 160px;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  li {
    line-height: 36px;
    padding: 0 24px;
    cursor: pointer;
    &:hover {
      background-color: #2196f3;
      color: #fff;
    }
  }
`],[`
  background: #fff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  width: 160px;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  li {
    line-height: 36px;
    padding: 0 24px;
    cursor: pointer;
    &:hover {
      background-color: #2196f3;
      color: #fff;
    }
  }
`]),ct=z.ZP.ul(st),Ue=10,dt=function(){return e.createElement(we.default,{image:we.default.PRESENTED_IMAGE_SIMPLE,description:_l("\u6682\u65E0\u6570\u636E")})};function ut(a){var t=a.projectId,s=a.id,d=a.history,B=a.location,x=(0,e.useState)({count:0,list:[]}),E=(0,g.Z)(x,2),k=E[0],w=E[1],p=(0,e.useState)([{label:_l("\u5168\u90E8\u5E94\u7528"),value:""}]),r=(0,g.Z)(p,2),b=r[0],I=r[1],Z=(0,e.useState)({apkId:"",workflowType:"",search:"",pageIndex:1}),P=(0,g.Z)(Z,2),c=P[0],G=P[1],U=(0,e.useState)(-1),q=(0,g.Z)(U,2),te=q[0],y=q[1],K=(0,e.useState)([]),X=(0,g.Z)(K,2),T=X[0],H=X[1],W=(0,e.useState)({visible:!1,ids:[]}),v=(0,g.Z)(W,2),u=v[0],h=v[1],S=(0,e.useState)({visible:!1}),o=(0,g.Z)(S,2),O=o[0],R=o[1],M=(0,e.useState)(void 0),J=(0,g.Z)(M,2),l=J[0],_=J[1],ue=(0,e.useState)(!0),ye=(0,g.Z)(ue,2),Ie=ye[0],ke=ye[1];(0,e.useState)(function(){ne.Z.getComputingInstanceDetail({projectId:t,id:s}).then(function(A){_(A),pe(A.resourceId)})},[s]),(0,e.useEffect)(function(){pe()},[c.search,c.pageIndex,c.apkId,c.workflowType]);var pe=function(N){ke(!0);var C=N||(l||{}).resourceId;if(C){var ee=He().all([be.getProcessList({keyword:c.search,pageIndex:c.pageIndex,pageSize:Ue,resourceId:C,apkId:c.apkId,processListType:c.workflowType}),be.getCountByResourceId({keyword:c.search,resourceId:C,apkId:c.apkId,processListType:c.workflowType})]);ee.then(function(ie){var fe=(0,g.Z)(ie,2),f=fe[0],m=fe[1];ke(!1),w({list:f,count:m})})}},Se=function(){je.Z.getAppsForProject({projectId:t,status:"",order:3,pageIndex:1,pageSize:1e5,keyword:""}).then(function(N){var C=N.apps,ee=C.map(function(ie){return{label:ie.appName,value:ie.appId}});I(b.concat(ee))})},me=function(N,C){!N||N.length===0||be.moveProcess({moveToResourceId:C||"",processIds:N,resourceId:(l||{}).resourceId,companyId:t}).then(function(ee){ee?(alert(_l("\u79FB\u52A8\u6210\u529F")),pe()):alert(_l("\u79FB\u52A8\u5931\u8D25"),2)})},Qe=[{title:_l("\u5DE5\u4F5C\u6D41"),dataIndex:"id",render:function(N,C){return e.createElement("div",{className:"workfloeRowName flexRow alignItemsCenter"},e.createElement(Me.Z,{className:"workflowCheckWrap",appId:C.app?C.app.id:void 0,desc:C.app?C.app.name:void 0,appName:C.process.name,defaultIcon:(re.EV[C.process.child?"subprocess":C.process.startAppType]||{}).iconName,iconColor:(re.EV[C.process.child?"subprocess":C.process.startAppType]||{}).iconColor,createType:2,ckeckSuccessCb:function(){(0,ce.T8)("/workflowedit/"+N)}}))}},{title:_l("\u7C7B\u578B"),dataIndex:"id",width:150,render:function(N,C){return e.createElement("div",{className:"columnType"},(re.EV[C.process.child?"subprocess":C.process.startAppType]||{}).text)}},{title:_l("\u6DFB\u52A0\u65F6\u95F4"),dataIndex:"createDate",width:300},{title:_l("\u6DFB\u52A0\u4EBA"),dataIndex:"id",width:300,render:function(N,C){return e.createElement("div",{className:"flexRow Gray_75"},e.createElement(Zn.Z,{size:28,user:{userHead:C.createBy.avatar,accountId:C.createBy.accountId},projectId:t}),e.createElement("div",{className:"mLeft12 ellipsis flex LineHeight28"},C.createBy.fullName))}},{title:"",width:50,dataIndex:"id",render:function(N,C,ee){return e.createElement(We.Z,{popupVisible:te===ee,onPopupVisibleChange:function(fe){return y(fe?ee:-1)},action:["click"],popup:e.createElement(ct,null,e.createElement("li",{onClick:function(fe){y(-1),h({visible:!0,ids:[C.id]})}},_l("\u79FB\u52A8\u5230")),e.createElement("li",{onClick:function(){y(-1),me([C.id])}},_l("\u79FB\u51FA"))),popupAlign:{points:["tr","bc"],offset:[15,0]}},e.createElement(ae.Z,{icon:"moreop",className:"Font18 Gray_9e Hover_49 Hand"}))}}];return e.createElement(e.Fragment,null,e.createElement("div",{className:"exclusiveCompHeader explanDetailHeader"},e.createElement("span",{className:"icon-backspace Font22 ThemeHoverColor3",onClick:function(){return d.go(-1)}}),e.createElement("span",{className:"explanDetailLabel"},_l("\u7BA1\u7406\u7B97\u529B")),e.createElement("span",{className:"explanDetailName Gray_75"},l&&l.name+"\uFF08"+l.resourceId+"\uFF09"),e.createElement("span",{className:"flex"}),l&&Pe()(l.expirationDatetime).add(1,"d").isBefore(new Date)&&e.createElement("span",{className:"",style:{color:"#f51744"}},_l("\u670D\u52A1\u5DF2\u8FC7\u671F"))),e.createElement("div",{className:"explanDetailContent flex"},e.createElement("div",{className:"actionCon flexRow"},e.createElement(Ae.default,{className:"selectItem",showSearch:!0,defaultValue:c.apkId,options:b,onFocus:function(){return b.length===1&&Se(t)},filterOption:function(N,C){return b.find(function(ee){return ee.value===C.value}).label.toLowerCase().indexOf(N.toLowerCase())>-1},suffixIcon:e.createElement(ae.Z,{icon:"arrow-down-border Font14"}),notFoundContent:e.createElement("span",{className:"Gray_9e"},_l("\u65E0\u641C\u7D22\u7ED3\u679C")),onChange:function(N){return G((0,L.default)({},c,{apkId:N}))}}),e.createElement(Ae.default,{className:"selectItem",defaultValue:c.workflowType,options:bn,suffixIcon:e.createElement(ae.Z,{icon:"arrow-down-border Font14"}),onChange:function(N){return G((0,L.default)({},c,{workflowType:N}))}}),e.createElement(Re.Z,{placeholder:_l("\u5DE5\u4F5C\u6D41\u540D\u79F0"),handleChange:oe().debounce(function(A){G((0,L.default)({},c,{pageIndex:1,search:A}))},500)}),e.createElement("div",{className:"flex"}),e.createElement("span",{className:xe()("actionBtn mRight20",{disabled:T.length===0}),onClick:function(){T.length!==0&&h((0,L.default)({},k,{visible:!0,ids:T}))}},_l("\u79FB\u52A8\u5230")),e.createElement("span",{className:xe()("actionBtn mRight20",{disabled:T.length===0}),onClick:function(){T.length!==0&&(0,Fn.Z)({className:"",title:T.length===1?_l("\u79FB\u51FA\u5DE5\u4F5C\u6D41"):_l("\u79FB\u51FA%0\u4E2A\u5DE5\u4F5C\u6D41",T.length),okText:_l("\u79FB\u51FA"),buttonType:"danger",cancelText:_l("\u53D6\u6D88"),onOk:function(){me(T)}})}},_l("\u79FB\u51FA")),e.createElement(Ee.ZP,{type:"primary",icon:"add",className:"addBtn",size:"small",disabled:l&&l.status!==F.Running,onClick:function(){R({visible:!0})}},_l("\u5DE5\u4F5C\u6D41"))),e.createElement("div",{className:"listCon flex"},e.createElement(Sn.default,{renderEmpty:dt},e.createElement(Dn.Z,{loading:Ie,className:"workflowTable",rowClassName:"workflowTableTitleRow",rowSelection:{selectedRowKeys:T,onChange:function(N){H(N)}},columns:Qe,dataSource:k.list,rowKey:function(N){return N.id},pagination:!1}))),e.createElement(Wn.Z,{total:k.count,pageIndex:c.pageIndex,pageSize:Ue,onChange:function(N){G((0,L.default)({},c,{pageIndex:N}))}})),l&&u.visible&&e.createElement(Tn,{visible:u.visible,projectId:t,sourceResourceId:l.resourceId,onOk:function(N){h((0,L.default)({},u,{visible:!1})),me(u.ids,N)},onCancel:function(){h({visible:!1,ids:[]})}}),l&&O.visible&&e.createElement(it,{projectId:t,visible:O.visible,resourceId:l.resourceId,onOk:function(){R({visible:!1}),pe()},onCancel:function(){R({visible:!1})}}))}const pt=(0,Fe.Z)(ut);var mt=n(63220),Ye=n.n(mt),ft=n(36164),gt=n(66215),xt=(0,Y.Z)([`
  width: 100%;
  input:focus::-webkit-contacts-auto-fill-button {
    opacity: 0;
  }
  .formControl {
    width: 100%;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    padding: 0 12px;
    line-height: 36px;
    &:hover {
      border-color: #bbb;
    }
    &:focus {
      border-color: #2196f3;
    }
    &.error {
      border-color: #f00 !important;
    }
    &.disabled {
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
    }
  }
`],[`
  width: 100%;
  input:focus::-webkit-contacts-auto-fill-button {
    opacity: 0;
  }
  .formControl {
    width: 100%;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    padding: 0 12px;
    line-height: 36px;
    &:hover {
      border-color: #bbb;
    }
    &:focus {
      border-color: #2196f3;
    }
    &.error {
      border-color: #f00 !important;
    }
    &.disabled {
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
    }
  }
`]),vt=z.ZP.div(xt);function de(a){var t=a.label,s=a.error,d=a.value,B=a.placeholder,x=a.maxLength,E=a.ref,k=a.disabled,w=a.isRequired,p=a.type,r=a.className,b=a.onChange,I=a.onFocus,Z=a.onBlur,P=Z===void 0?function(){}:Z,c={ref:E,value:d,disabled:k,placeholder:B,onChange:b,onFocus:I,type:p,onBlur:P};return p==="password"&&(c.autoComplete="new-password"),e.createElement(vt,{className:xe()("formGroup",r)},e.createElement("div",{className:"formLabel Font14 mBottom12"},w?e.createElement("span",{className:"TxtMiddle Red"},"* "):null,t),e.createElement("input",(0,L.default)({type:"text",className:xe()("formControl",{error:s,disabled:k,noBorder:k})},c,{maxLength:x||1/0})),a.children,s&&e.createElement("div",{className:"Block Red LineHeight25 Hidden"},""+t+_l("\u4E0D\u80FD\u4E3A\u7A7A")))}var ht=(0,Y.Z)([`
  .rowFlex {
    display: flex;
    align-items: flex-start;
    .formGroup:nth-child(1) {
      flex: 6;
    }
    .formGroup:nth-child(2) {
      flex: 4;
    }
  }
  .textInput {
    .formLabel {
      margin-bottom: 4px !important;
    }
  }
`],[`
  .rowFlex {
    display: flex;
    align-items: flex-start;
    .formGroup:nth-child(1) {
      flex: 6;
    }
    .formGroup:nth-child(2) {
      flex: 4;
    }
  }
  .textInput {
    .formLabel {
      margin-bottom: 4px !important;
    }
  }
`]),At=z.ZP.div(ht);function Ct(a){var t=a.id,s=a.info,d=a.projectId,B=a.numberOfApp,x=B===void 0?0:B,E=a.onClose,k=a.onOk,w=(0,e.useState)({name:void 0,host:void 0,port:27017,account:void 0,password:void 0,dbName:void 0,other:void 0,status:0,remark:void 0}),p=(0,g.Z)(w,2),r=p[0],b=p[1],I=(0,e.useState)([]),Z=(0,g.Z)(I,2),P=Z[0],c=Z[1],G=(0,e.useState)(!1),U=(0,g.Z)(G,2),q=U[0],te=U[1];(0,e.useState)(function(){t&&b(s)},[t]);var y=function(u){b((0,L.default)({},r,u))},K=function(){var u=["name","host","port","account","password","dbName"],h=[];return u.forEach(function(S){r[S]||h.push(S)}),c(h),h},X=function(){var u=K();if(!(u.length>0)){var h=t?ne.Z.editDBInstance:ne.Z.createDBInstance;h((0,L.default)({},r,{id:t,projectId:d,password:/^[*]+$/.test(r.password)?void 0:(0,le.HI)(r.password)})).then(function(S){S?(alert("\u4FDD\u5B58\u6210\u529F"),k()):alert("\u521B\u5EFA\u5931\u8D25",2)})}},T=function(){var u=K();if(!(u.length>0))return te(!0),ne.Z.testConnection((0,L.default)({},r,{id:t,projectId:d,password:/^[*]+$/.test(r.password)?void 0:(0,le.HI)(r.password)}),{silent:!0}).then(function(h){te(!1),h?alert(_l("\u8FDE\u63A5\u6210\u529F")):alert(_l("\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5"),3)}).catch(function(h){var S=h.errorMessage;te(!1),alert(S||_l("\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5"),3)}),!1},H=function(u){c(P.filter(function(h){return h!==u}))},W=function(){return t?oe().some(["name","host","port","account","password","dbName","other","remark","status"],function(u){return s[u]!==r[u]}):!0};return e.createElement(ve.Z,{className:"connectDataBaseDialog",visible:!0,width:496,title:_l("\u6570\u636E\u5E93\u5B9E\u4F8B"),okDisabled:!W(),okText:t?_l("\u4FDD\u5B58"):_l("\u521B\u5EFA"),footerLeftElement:function(){return e.createElement("div",{className:"ThemeColor ThemeHoverColor2 Hand",onClick:T},q?_l("\u8FDE\u63A5\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u2026"):_l("\u6D4B\u8BD5\u8FDE\u63A5"))},onOk:X,onCancel:E},e.createElement(At,null,e.createElement(de,{className:"mBottom16 textInput",value:r.name,label:_l("\u5B9E\u4F8B\u540D\u79F0"),isRequired:!0,error:P.includes("name"),onChange:function(u){return y({name:u.target.value})},onFocus:function(){return H("name")}}),e.createElement("div",{className:"rowFlex mBottom16"},e.createElement(de,{className:"mRight16 textInput",value:r.host,label:_l("\u6570\u636E\u5E93\u5730\u5740"),isRequired:!0,error:P.includes("host"),onChange:function(u){return y({host:u.target.value})},onFocus:function(){return H("host")}}),e.createElement(de,{className:"textInput",label:_l("\u7AEF\u53E3\u53F7"),value:r.port,isRequired:!0,error:P.includes("port"),onChange:function(u){var h=Number(u.target.value);y({port:oe().isNumber(h)&&!oe().isNaN(h)?h:""})},onFocus:function(){return H("port")}})),e.createElement(de,{className:"mBottom16 textInput",value:r.account,label:_l("\u8D26\u53F7"),isRequired:!0,error:P.includes("account"),onChange:function(u){return y({account:u.target.value})},onFocus:function(){return H("account")}}),e.createElement(de,{className:"mBottom16 textInput",value:r.password,label:_l("\u5BC6\u7801"),isRequired:!0,error:P.includes("password"),onChange:function(u){return y({password:u.target.value})},onFocus:function(){H("password"),t&&y({password:""})},onBlur:function(){t&&!r.password&&y({password:s.password})}}),e.createElement(de,{className:"mBottom16 textInput",value:r.dbName,label:_l("\u6570\u636E\u5E93\u540D\u79F0"),isRequired:!0,onChange:function(u){return y({dbName:u.target.value})}}),e.createElement(de,{className:"mBottom16 textInput",value:r.other,label:_l("\u5176\u4ED6\u8FDE\u63A5\u4E32\u53C2\u6570"),isRequired:!1,onChange:function(u){return y({other:u.target.value})}}),e.createElement("div",{className:"Font14 mBottom4"},_l("\u72B6\u6001")),e.createElement("div",{className:"SwitchCon mBottom16"},e.createElement(gt.Z,{className:"mRight8",checked:!!r.status,onClick:function(u){b((0,L.default)({},r,{status:u?0:1}))}}),e.createElement("span",null,r.status?_l("\u5DF2\u542F\u7528"):_l("\u5DF2\u5173\u95ED"))),e.createElement("div",{className:"Font14 mBottom4"},_l("\u5907\u6CE8")),e.createElement(ft.Z,{minHeight:62,value:r.remark,onChange:function(u){return y({remark:u})}})))}const Et=Ct;var bt=(0,Y.Z)([`
  background: #fff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  width: 160px;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  li {
    line-height: 36px;
    padding: 0 24px;
    cursor: pointer;
    a {
      color: #333;
      transition: none !important;
    }
    &:hover {
      background-color: #2196f3;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
`],[`
  background: #fff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  width: 160px;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  li {
    line-height: 36px;
    padding: 0 24px;
    cursor: pointer;
    a {
      color: #333;
      transition: none !important;
    }
    &:hover {
      background-color: #2196f3;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
`]),It=z.ZP.ul(bt),wt={0:{text:_l("\u5DF2\u7981\u7528"),textColor:"#757575",loading:!1,icon:null,color:"#BDBDBD"},1:{text:_l("\u5DF2\u542F\u7528"),textColor:"#757575",loading:!1,icon:null,color:"#00CA86"},"-1":{text:_l("\u5DF2\u5220\u9664"),textColor:"#F51744",loading:!1,icon:null,color:"#F51744"}};function Nt(a){var t=a.projectId,s=a.refresh,d=(0,e.useState)({visible:!1,id:void 0,data:{}}),B=(0,g.Z)(d,2),x=B[0],E=B[1],k=(0,e.useState)([]),w=(0,g.Z)(k,2),p=w[0],r=w[1],b=(0,e.useState)(!0),I=(0,g.Z)(b,2),Z=I[0],P=I[1],c=(0,e.useState)(void 0),G=(0,g.Z)(c,2),U=G[0],q=G[1],te=(0,e.useState)("-"),y=(0,g.Z)(te,2),K=y[0],X=y[1];(0,e.useEffect)(function(){H(),T()},[]),(0,e.useEffect)(function(){s!==-1&&H()},[s]);var T=function(){ne.Z.getDBInstanceLimit({projectId:t}).then(function(l){X(l)})},H=function(){!Z&&P(!0),ne.Z.getDBInstances({projectId:t}).then(function(l){r(l),P(!1)})},W=function(){E({visible:!0,id:void 0,data:{}})},v=function(l){var _={name:l.name,host:l.host,port:l.port,account:l.account,password:l.password,dbName:l.dbName,other:l.other,status:l.status,remark:l.remark};E({visible:!0,id:l.id,data:_,numberOfApp:l.numberOfApp}),q(!1)},u=function(l){ne.Z.removeDBInstance({projectId:t,instanceId:l.id}).then(function(_){_?(alert(_l("\u5220\u9664\u6210\u529F")),H()):alert(_l("\u8BE5\u5B9E\u4F8B\u4E0D\u53EF\u5220\u9664"),3)})},h=function(l){q(!1),ve.Z.confirm({title:_l("\u8BF7\u786E\u8BA4\u662F\u5426\u5220\u9664%0\u6570\u636E\u5E93\uFF1F",l.name),onOk:function(){return u(l)},okText:_l("\u786E\u5B9A")})},S=function(l){return e.createElement(It,null,e.createElement("li",{onClick:function(){return v(l)}},_l("\u7F16\u8F91")),e.createElement("li",{onClick:function(){return(0,ce.T8)("/admin/app/"+t+"?dbInstanceId="+l.id)}},_l("\u67E5\u770B\u5B58\u50A8\u5E94\u7528")),l.numberOfApp===0&&e.createElement("li",{onClick:function(){return h(l)}},_l("\u5220\u9664")))},o=function(){return e.createElement("div",{className:"emptyWrap"},e.createElement("img",{src:Ye()}),e.createElement("div",{className:"Font22 Bold mBottom24"},_l("\u6570\u636E\u5E93")),e.createElement("div",{className:"textCon"},_l("\u53EF\u5C06\u6307\u5B9A\u5E94\u7528\u5185\u7684\u6240\u6709\u5DE5\u4F5C\u8868\u6570\u636E\u5B58\u50A8\u5230\u4E13\u5C5E\u6570\u636E\u5E93\u4E2D\uFF0C\u514D\u53D7\u7CFB\u7EDF\u9ED8\u8BA4\u6570\u636E\u5E93\u7684\u5F71\u54CD\uFF0C\u9002\u7528\u4E8E\u9694\u79BB\u7B49\u573A\u666F\uFF0C\u5F53\u524D\u652F\u6301\u6700\u591A\u521B\u5EFA%0\u4E2A\u53EF\u7528\u4E13\u5C5E\u6570\u636E\u5E93\u5B9E\u4F8B\uFF1B\u7BA1\u7406\u5458\u521B\u5EFA\u5E94\u7528\u65F6\uFF0C\u53EF\u9009\u62E9\u4E13\u5C5E\u6570\u636E\u5E93\u3002",K)),e.createElement(Ee.ZP,{icon:"add",radius:!0,className:"dataBaseCreateButton Font14",onClick:W},_l("\u521B\u5EFA")))},O=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"dataBaseExplain"},e.createElement("span",{className:"textCon flex"},_l("\u53EF\u5C06\u6307\u5B9A\u5E94\u7528\u5185\u7684\u6240\u6709\u5DE5\u4F5C\u8868\u6570\u636E\u5B58\u50A8\u5230\u4E13\u5C5E\u6570\u636E\u5E93\u4E2D\uFF0C\u514D\u53D7\u7CFB\u7EDF\u9ED8\u8BA4\u6570\u636E\u5E93\u7684\u5F71\u54CD\uFF0C\u9002\u7528\u4E8E\u9694\u79BB\u7B49\u573A\u666F\uFF0C\u5F53\u524D\u652F\u6301\u6700\u591A\u521B\u5EFA%0\u4E2A\u53EF\u7528\u4E13\u5C5E\u6570\u636E\u5E93\u5B9E\u4F8B\uFF1B\u7BA1\u7406\u5458\u521B\u5EFA\u5E94\u7528\u65F6\uFF0C\u53EF\u9009\u62E9\u4E13\u5C5E\u6570\u636E\u5E93\u3002",K)),e.createElement("span",{className:"createDataBaseButton Hand",onClick:W},e.createElement(ae.Z,{icon:"add",className:"mRight3"}),_l("\u521B\u5EFA"))),e.createElement("ul",{className:"exclusiveCompList"},p.map(function(l){return e.createElement("li",{key:"database-"+l.id},e.createElement("div",{className:"header"},e.createElement("div",{className:"left"},e.createElement("span",{className:"imgCon mRight8"},e.createElement("img",{src:Ye()})),e.createElement("span",{className:"name flex mRight8 Font15 Bold"},l.name),l.remark&&e.createElement(Le.Z,{text:l.remark},e.createElement("span",{className:"icon-info_outline Font16 Gray_bd"})),e.createElement(Ge,{className:"mLeft15",value:l.status,statusConfig:wt})),e.createElement("div",{className:"right"},e.createElement(We.Z,{popupVisible:U===l.id,action:["click"],popupAlign:{points:["tr","bc"],offset:[15,0]},popup:S(l),onPopupVisibleChange:function(ue){q(ue?l.id:void 0)}},e.createElement(ae.Z,{icon:"moreop",className:"Gray_bd Font20 mLeft24 Hover_49 Hand"})))),e.createElement("div",{className:"content Font13 valignWrapper"},e.createElement("div",null,e.createElement("div",{className:"label Gray_9e mBottom8"},_l("\u5B58\u50A8\u5E94\u7528\u6570")),e.createElement("div",{className:"value"},l.numberOfApp||0)),e.createElement("div",null,e.createElement("div",{className:"label Gray_9e mBottom8"},_l("\u6570\u636E\u5E93\u5730\u5740")),e.createElement("div",{className:"value"},l.host||""))))})))},R=function(){E({visible:!1,id:void 0,data:{}})},M=function(){E({visible:!1,id:void 0,data:{}}),H()};return e.createElement("div",{className:"dataBaseWrap flex"},Z?e.createElement(Ce.Z,null):p.length===0?o():O(),x.visible&&e.createElement(Et,{id:x.id,projectId:t,info:x.data,numberOfApp:x.numberOfApp||0,onOk:M,onClose:R}))}const Bt=(0,Fe.Z)(Nt);var yt=function(a){(0,_e.default)(t,a);function t(s){(0,Xe.default)(this,t);var d=(0,$e.default)(this,(t.__proto__||Ve()(t)).call(this,s));return d.onClick=function(B){var x=d.props.match;B!==d.state.activeKey&&(0,ce.T8)("/admin/"+B+"/"+x.params.projectId)},d.onRefresh=function(){return d.setState({refresh:!d.state.refresh})},d.renderHeader=function(){var B=d.state.activeKey,x=d.props.match;if(x.params.explanId)return null;var E=oe().get(x,"params.projectId"),k=(0,le.XH)(E,he.UU.exclusiveResource),w=(0,le.XH)(E,he.UU.dataBase)&&!md.global.Config.IsPlatformLocal;return e.createElement("div",{className:"exclusiveHeader"},e.createElement("div",{className:"exclusiveHeaderTextCon"},k&&e.createElement("span",{className:xe()("Hand",{active:B==="computing"}),onClick:function(){return d.onClick("computing")}},_l("\u7B97\u529B")),w&&e.createElement("span",{className:xe()("Hand",{active:B==="database"}),onClick:function(){return d.onClick("database")}},_l("\u6570\u636E\u5E93"))),e.createElement("div",{className:"refresh Hand Font20 mRight24 ",onClick:d.onRefresh},e.createElement("i",{className:"icon-task-later Gray_9"})),e.createElement(ze.Z,{text:_l("\u5E2E\u52A9"),type:2,href:"https://help.mingdao.com/application/exclusive-computing-power"}))},d.state={activeKey:oe().get(s.match,"url").includes("computing")?"computing":"database",refresh:-1},d}return(0,qe.default)(t,[{key:"render",value:function(){var d=this.state,B=d.refresh,x=d.activeKey,E=oe().get(this.props,"match.params.projectId"),k=(0,le.XH)(E,he.UU.dataBase)==="1"&&!md.global.Config.IsPlatformLocal,w=(0,le.XH)(E,he.UU.exclusiveResource);return e.createElement("div",{className:"orgManagementWrap exclusiveComp flex flexColumn"},e.createElement(tn.Z,{prefix:x==="computing"?_l("\u4E13\u5C5E\u7B97\u529B"):_l("\u4E13\u5C5E\u6570\u636E\u5E93")}),this.renderHeader(),w&&e.createElement(e.Fragment,null,e.createElement(Ze.Z,{path:"/admin/computing/:projectId",exact:!0,render:function(r){var b=r.match.params;return e.createElement(kn,(0,L.default)({},b,{refresh:B}))}}),e.createElement(Ze.Z,{path:"/admin/computing/:projectId/:id",exact:!0,render:function(r){var b=r.match.params;return e.createElement(pt,b)}})),k&&e.createElement(Ze.Z,{path:"/admin/database/:projectId",exact:!0,render:function(r){var b=r.match.params;return e.createElement(Bt,(0,L.default)({},b,{refresh:B}))}}))}}]),t}(e.Component)},63220:(se,De,n)=>{se.exports=n.p+"static/database.a25da2bb75792e5509d47a3ae2fd3c6a.png"},79600:se=>{se.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADICAYAAACZIW+CAAAAAXNSR0IArs4c6QAAIABJREFUeF7tfVmsbsl11qr9/2e6Y3ffdo92d7vtNtgxso0j27FNCAgJJDMIISJFQi0kwIAieEBC4sFCCJSQF7/wxkOQicRDIuCBoCiR8uAHJ3Y8tZ223XY6eOjhDn37Tuece4b///cutGpPNay1atV//mPfe/Ufq33P2bt21Zq+b61du2pvAwDw6quvbl164pkXbFP9QwD7GQB4wVp73gIYPO9+bPevAbD979GpsVHbPmyGXY1Hoi7GYYgTurZ+KwM2Gn04y8o+iBCoG/9ByRKO1eoZ2yjsPbZNalO/Paf/4BbXQNK/k4noNNt3JDilV9uHFyDuz/BoTp9EhSS2tP5JNSJ9xihOHjZQg4VbAOalyprfWUzN77/2xztXfvmXTW2stZt37i7+at3Yf2cb+IQxsGWtrTqTJACiAyhGGQWg0QCi05QASh3JOywIr1MHUMc3JQ5KyEYIFj+wgjFkAuFswJKTAjih11PDavsOiSCve0wXLXZjymTirRNKjuOY7sB28daAtftgqv+1YTY+/5FnNr9vbu7OP2Ub++sA9lMWYEJAIehNYtZABSEodBlFNiQXO5wZTzMDjQ4dpeLsROre28pL0hLJ5AOOvpqygTbIdfpEIGYuEoN3GYJzCS8cu8+IyVjegfgca/O0mjoEY/6H3T7zOXPzzuy/NBb+KYDdyabZjFdPA0AqBw+swgt4mgCiQKsLuC5bFZZWA8kR6raH0hM84SRsO14tBFtKtHnykMh5eXtRGo9MROmtiqk+0zNcZIy52hj7b8yN27M/tWB/DgBc2UabX1OSpdYWmUZZIpB9MBYozT6UriWMNdqLCFg2uHUBK5EZnUkYT6fDDfjK+icDoPB6GUAS97pzy9jLXcdRBtHlQLSCD5RxCWAOrWl+29y4M9u11p4Db8JAG0Rs1bmi8o1liuhEFjgMM2QDKHIs3Z7wijjREpWmQmSJTBmVLKU2UOne6Z9n7L6FiUqpUddVASjoJwA4QWIn8bvne1J2Y2oL9ivm7dvHjTFO8XHCICYEBrnJ7JPn1LzRPeMyjUWjZ4wnZVIx0/a6Z9g3yT4Cu7GyjARK5QmKlId2cc1fAqAS33gkn8jo5ZzuHA8gzgZDHwkpkiYJbSLEAAc00RfxkPLkDg7xMgJIGktM90kg/hQARBucDh8yULSBrgZQaAV5koUpHQhBs0GeBBxPN7GDS7JPPuDC3pbSnxhEJaMWQIpKgtIzq4tZAYAi87URUljC8c8WmIBLtD0FAOVSuDBxutQNsYKBZValAZQcZQiEa1cCoNJnXwP1MNiPD4f6+3+lz/2IEOlDU53tc/qYGECcg3g2TL3O8yB5n9gqtTQDtxeWsLVKPnUwp2kqK4vnPtd2Gd0TowkPjqNwybJqVFbwmSA9kws4/4ryWOsEGy70fR8+pOfAw8VKuSzdFcaEJVwkmxCcROAyzJaUeWoHkUQRgW11AKKMqAPDqLiufZekBSSLICecxAd5HHQKsvEBzggiWZ1fpRL6c2nyiBxVonsJgGSi1QKImE0KH1D18w5pzRYLkAgkAE4XQKNDyOcwvr+8DrVBrmZqr15dRd9SRqWyNf/83QNLJFg26HrciQCiqVELIFoXmjSTkYbYoQWkyJAlcqaCyZfhuNCNy0AZA5JOFiYQSgFB9c8ZZQwgD8zMLKKKgaJGMiiWyz6DMxWBTfIASQhhZ0SiEiqKZZ+Z+GPSM3AqUhHIlAx8x9d8VJ1UdzV5ivdA2SnW0Hh+bZXNPpkyIXt9EEBlLFTSNw+4KFgFhighD21mCG0dEkcQcAUALQm6sVvvN1W28quGlPpFWwVMIsGHzrzqvtVxb/DJKXEPRLIbUb/6DJBhEJaFiBPZIBrGkkwS3VQLOiW9qHRZnnm5AFcxNZG6rFswn17tjvSHuyZZ2yqyb9tHqH+4+ny1q+5p/4yKxfIkREDehlDxrAN0UPH0AAqEzACoP72oLbx10MC86eu9bi0D5j9nQ2Y9kmbWjKD+2JCj4XwGzlvLBVwvo1Cq7mwYuLBlYKMKni9zmySELR6Ms6LaRAWgqJHq4WlyTUaeTPmeAEggnBLiVJXXQWxaqG0Dh7CAm/YArjW7cNsewJFdAIbkNmzAw9UOPGbOwSVzDrbNFCow7n/s/VCGPEcZu4Z4D3Q9epDq984zloVZDfDmXgOzOqK50D9kpZq/QYtSfcK89Lx/MDTjPZGFvZPnNg08smNgc8IBaGxcNA1fIFcQVATLZUGXIUM2aImOw0Npx6Jd45jI9s/5vz3eQAOHdg5Xmz34s/o6XLN7MIPa/a/p7o4QLBMwsAlTeBTOwvsmj8FT1UXYMRv+qjWSTXi7RmdYAGVZBQFkOwBF1vH+LGGgbDBE0cS15+mFnsIl4tJ1QQHIg0yI1ZKAKGi7DIA4fdQBzjwEJwEkAFTyj5ZwKF0QILv2CH5QvwXfq6/BIcwcZDi90YZIgWfMJry3ege8v3oCLlbbQSZyzsyQTXuaABAu5UmUVawkmNcW3tirXSbifkRQRCdFg/sDZGZgTgSgzkYoSw+gLS8D/UwBxDqZzQ2Jv2MbkzbPkqcnyAoBRGXDGBQInjvNIXy3uQo/qK/BESzoooMJpi2YwvPVo/ChydNwsdrxirny1TPOuEMG8gfsKha+zGobtyUcD6CS7MOWEgFw+h5bAcV5GCXLS2zNAygKWEZRipSyQRIxEe0DiguJ+80Mo/ZD+XLmfN5e45e0nSxaG3SDuuZKAu2b4eLZu3YG36uvwnfqqy7zRLya8jghF94b/YXqMfjQ5Ck4U22FfYh6ECdJAPlKxg710hgC6MpeDcdCBqKcRB7rMp4R5wBSyOSWjlCZcbgms/vz7MZ4DyRwvH4ZErHrlCOO4TiTIqjDHBmoQStWHTHDeiBWAsHJwbEqMbE0NO1+mUMNr9W34GvNa3CjuZu4liOsuCG6/Txsw8cnz8Fzk0dgYoZtcBn5KOKMJxEyrOVzX2MBjuYW8N9+YivLCD04CxgrNmQIQH1HcctchphU4CYQcBKOA1DJZAgHCi6maL19D4ShwQEoC7aI0XTtVwsgccyuZN9tjuDb9ZvwSnMN2nk2QX+BmXCsKUzgOfMIfHLjOXdv1M/M6TNw/9KYHkCEBv6h3JZlytnZwCh23EiR3gw5bcgO1MPJTpico1z7cNLNy7lpJ7pga6UoARtHGuw+f2IPkzr7e8HG+yw9U6JPIEs21lJkIGCu1Xvw5fpH8JbdJ8t3jhApoKGLL8I2/NLGC/C4ueCmt+VM7ffur7hYCkBevZ0xBskSpddE0aQOWtVsUsRiYkILAaQmiBVmXSn7OnkiodQyCgTTdqsHkED+qnKXAsKxXcCP6xvwR/WP4BDm+ewjCdGZaQem8JHJu+D9kydgs3uXTjw2a7/xPuBlc/3WuKGOuyCQx6eedidrohCJ5r5Z9OBcdHLQNz95ILGPNoj0jCq/840EuGTY4sWMtCGDIbKASF0mTVhgWm67HDt2vxGLINggLCBOnwzw90M7g+/Xb8E36tfc8x42u2bs7F+HoHlf9Rh8bPoMbAI+GyJsEhwaOx/lwwykAFDonMCUioHLbh4HJRNKpQHEgUdFBpnskBJBp7vQeRJABW19Y9LPSvjOhjNeExLMpMc4H/W5J1qoy4ghjhedzBLbgFUL+3YG362vwJ/Wb8Lcu//hfM+o6FMAbEAF764uwaemz8NWFkAUeByDdCsRVIwVils0o1IYROSDqT7YI9qjAieTwZOHbnqw/SwAFDmPAwBBywmYhcjS30B7JV0GrGHlEg6uAnc3gXDQTV+/VL8RAKgkE8XjbcAE3ls9Cp+YPicAKJUytNOKAcSySiljCdTCBkUpw3nWz7Kh/0piCW3UdGyB7i7gCnQPAkihPxm0WXLzG+hLdkk2juAo1TEH4gPTV+vr8NXFT+CYe3jKoqk9Efe9DVN4f/U4fGT6Lrfchy7hCgCkZuHOwyoGEUqkbNCSAUFfFRzt/sj271lMLpei1cWFgAhLUtqZudJtjA3CoUzgaPUvufejAT5Kn5BbFpxp2LpLPKHw77mt4fXmNnxp8UPYh2MSEOIrjHxf90t7YNM9C3p+cslNa9MAoo07iudlIN7gIQMVvciOAZDKuUoAcYSdHcNrQJNBf/RkAGoDIl++JK4ihGJfmB+NoSbDoun1sVf1WrYodLw5CDJgBzUiAOESnrebu/DV+ifwRnN7WDAadCIpnWzAMG6B6V/beAEeNmfSdXGJy8LOQwB1kwgqAHnsvmgs3Di0sIieaWGTZGEJ1rLdfahxda1uz8hoUJ7lEk+wGag9MeopT8dvTw2c3zIwddsZyoMnAAQJBjqGhqYJ6NJOgiNZQmDGE2Wjo+I0AMTr0tLGYTOH79fX4KXmTTgiprJzGcjvH2fgPlg9CR+ePq2YgZN8383CqcDjRR+2x8Wkb+7jdga+LNGXBxFJB8GQoZaIulXsmwk27HJcje2Bl+mcOlyi+6ACE0Vk/zEeWOI4iX9WCKCojGLED4T1M+4Cs1C9D99oXofXmlsuCy2TgfCh6eNwHj4+fdY9RMWXivKyhGOkPtUCiAi4OS4m3R8Xk8amLg2gkXk9xLOJPjqhAAQVmxJxnHf7gSrY9MpjLfM6rikAG5VpM8tlU8IVAETiMrP3sL0m7VQF5s49JTbQ+H9maweeb9VvwnW7H4JIYM7+FC7ZeQh24MOTp+E9k0eL7n1oXQQABVtXo5oU7YP7gS7jhrqG2WezTABFkafMPcq9HL1Xu3+FAELdg9XY2uD0WbZA/zDAdQQyBpyXIRnCYRKbDxGGzEPFecLRlYeSPykAeRAeBsBVCT9sbsDL9RW4Ye+OIMoACDMPgueDkyfhheodsGGQGaXdxuHoMYBwOIPPgd7yHqT6ZkiWb0RBhMC53G1nIFmpIIBoBs5xMF8TJNkwVIwNnL4ZXj8CiCTioUc2qIgTqgAUZjl9+SgBVP1HUSnaKl5GW6pT1F4HoFFLLtthJrrc3IZX6mtwxe62+4KEznEf0BPmglt58MzkIdiAKb1TmqERqqJohxMBFLnrpwwg+b0rEeN5xtMGUe5BcJiB2l7lYAtlKin3gr4HO/MRsQrCQmW4AG01ocenmJjKP+5qJYCCZokvUznwCL4PAVcoXG7uwBv2tltsilPc/b0RlmvnYBMeM+fh6eoheKq6AOfNNlTd0lFZdzn7jPpqM1AEHuygthYOZuC2MyTC9LNueCLaf8UKPrRtO2xn7boZMIn5+uv8Nkx5NjTx5OLWgE0nAFtTA7ghtaSWH2inJHiStgKdMiuvtcTBAacNGR1oeHhF0FPYII0dmqyS7NtdiCu1j+wccLUCZiLMTnhq00zci0Xwvx0zdft+3LaF7G7rUCKKCEb9EwARJiTA06c0fygSRBQ1ZTdP0YzDshzjTRKo/UFyQet4RY8vYq1kIkY8TinYWgcRTsvZThGcpGnEzEOzEEt6hIwl+gf9KmxAxZgPLIxePwP5b+DxRZWzaBgHw3Xe4OOvEYBS+Iz0q2a4bsSiVJ/QS89kSjARQUHK6wEolY+OSE5vRuQld10q9aQKK4bgSPmEtrS98oX0SQiEBlD5qvvTiU3+RSUCgCJKydzQsoILUZcYvAA85Ywa6xOVGD3Yg2ZRNmB0yTotE9iBLkRn2fd9R3ZTZYkiALWNc/eKAbOzf/D3+G4UUv/wRC77iBWKd1KXIaMsRHNrOomQCtkZkUrVTImxtNG9wVXvPfYCSBU8nj9YELchE8KJdS5tgKH5aQJIKRMXdLK98vqz2bcQQLGtghUf0moVNqBDn/jNJCIgvM6SRzi0V8Jx09bU+w4Y0ii+2R4N2P8mv3EnED4AXBrMS7eNN40VkEcJW4cZaNRfRR4Z3Tn/SDfQ4zUy+7J9M9mKAmvSh4ekkvZcW0pGPvNwvWhelq8A0GqEzLF1xHpMdisBxWBEBVuROlo+lFknMyeyQTF4V37jaqx/tl8K/KyM/ol2+iTNEG2HWv3V8iWEkF6ZHJG/X0rLTn78mZZSR4YsgJZ778FJn31IL83gWSvzPCOKC1pGwmECc2gDiCt10jI3n4Eo8lAHaOZeprVtEsU8UJTAVMmneHAc+z5XjoXZfRSWkudkU/ccgLqRVAbwooQWMJd90jCL+6HYRwrOEgMmwdN1rGOgiJEJA7A2IdsqmNdTrsjeAiH8zADkZGoFK4m1HICozJnvf2yhm2hAqTsApQEqK4WX1g3A7qxx/5KOxIP+g5TugaosXPcEtd3zIBo2AFA8Vg+CCLsUi6fPattW+E64HXyQOr53b+hNBHh0sqxtGYCowJNwIlcI4ZUlBDLIkdE9Ib2kfSQDzb3iw9AS8uRG0+s+AMjvaox0ieH8xaSDYbwL8oj3rBNcx1zZHw7fbyEvRyG68g+xdzm2XwsXrsYWmTIjdgL4CI7tHqlwBLLLDLGwZMYEY2kQlfQvxkAQpfy9X9LHCvUP/Z/sYssuUvYyEMF8mYBw+4Hi1dglAAr6b/+Q2FO7ropiIN6RvJLy1xnGaBx6ULKvky/SXSKqJO5XGECtrXirax6Gu6tFx6W2avv1L6LXfGALIkzGDokVJRLpxLaMv+qgzzx9T0kJNw6fqwPdfiBcje2XcIogogNOAaAo/4vspmw7ujEV/LQApJ7EoDJGCUH1+SwT3Ce7ifYCvBsHN/BuTgGmuFGtL2a6kn++sLDA6tyTCZth++RDZhbgeNFul/GTtWs/MbAxCRfqNLb9ZhVWRrHKG1W7rtHfPIcy4K7qw/kIo1zMpy4xL5trbjvDkhmo25FaMvumDSCOeSNsyM2ybK3PQCJgiZNs+wSrdMsck2azVkb30I5j42y/kcX9ZIJ4wcC+sF11AdsVpRYDu4G9oz5gR+rCRbsXtio4s9kt9uz6rxsLt48a2I82nCGAsP/zW5V7b3n/g9952ztqYPe4ad/X3mV6bHN208BDO5PgfhbbHMws3DioAcE3SKT0JTZz+4FKAOT3HWyoUw7aK0WlUopwg2Ml2U2ZgbgaGPkkzkASkRcRSCIb37MWhGM4hmzt20/O2F0A8XwiuqfXH+N5c+oDqHsw3gFo97CBg3k/SPvvtAPcWQcgDxAIoMMG9lgAhYBAwO0KAHr4DLYfR+gB9PbdeQC4NDZp1VvpHYCOOo3khaOxbZ3AM+tm4YaY8Buptgx3rnfXUasQ+iKXuMFmQSuvofaDPe2i5RX8wa3c/iycNphFoDGGUq97K90qzmShkvueCO9JNAXlGGagDkD4Upa+ZMI2mIEcgFwNN3YzrdqM4gDkbWFxGagHUNcc+0EMXHQZaAKVN0NKAchFFWagDQM8gBYuA5WWb237AECFOy8tfquy/dHcbKaxM1oxWzYosk/AwkzgjMHAI70/g7503ysSuHf5zCPrHujij5/dyxIJy25doNkn64e4e+ICvD9BQGxv0AA6XITB6ko4BNBGD6B2kBhAva1LANQDDku4FEC4n83C23fbEu4EAPLugYTAS2zlHYjPLRd0QlApAJTIIAjBrvtT7jotn63pgJjowQsZnFlCf4rYxGzCLF0q9WUPICzl+hfeoL3m3T2Qn4HQD+090MRlIP8HAXSnvwfySBoBhPdM57bxHmgsybD93nHj/vPvgVwGQgDtYMbySzgLh949UAkZjgQX3wNlt/l6Ki4BIHcJERlZAApjcWzNMwrNvlQ/XPCcJoDIMTMA4q5h5W/rhjCfFPheYmt8jx5mH/zXL7wxwI/m/Vfdx3IdY3pno510GH+M2/F8OG/guLtnGioDA4Dl4fY0zFgo09Gi6WbVxqoIe93aADizMRkA3ZPLbIGTFO0s3MkBVFoeLLtXJEWR/DDUo005IPp6cnQDXZIMrhgaaj/REldzRaUrQ/+tNEL29TmLMYAEOtkGEYaU/Qd6e7ecWf8MF45gyep/ytmX8z1bRvtxj99I7WfhSmvA0hJhsEMCIPopdOIMLcDV2coLWqlOyW5BlwHLJN0RvByA+EQZ4zgloO5aPqB9EulCWLBBfCr4O2PvQP9BLr+HcNKH8rsUzOUVSEwatOJSSIw8gAC62c7C0UyV+Kp1t5Kp+OCRGZcTKCtjFjyMsQqC9eT6x5zLAFDBvKTfBBtIVi8pYbRteaApgzbrT318clbX6kIRQTsLtyIA8Wzn1yBpHcOCYpkAyhr89ACk138NIG4FNpV9VHaNcMSDIu3t5AC6dcSWgWRwF2SfAC7DdT4Pps9seNZi2IagYd7oNCrj9tz1pdknZK2+V+XCSe2Gsdgs3TAsMQ21RlQ6FWRh7b0f50tuBd6JANTrTTwGZBeNFsQyrUv3HKioJOt6wrnzo0X7Xrg0rxDHIgCpmCXT9xCgfmfMA1y0Kz6025i0z3fcA9NO8dMAUBoMeQDFABWBzABH8kVrr7DXkhlFggPbkt6TBW2La8/cFLM3sdY0AIvautm19pur7VXOLxOctQsVsta4DxjM/QDr21ftNf4PNsO1bYs6vR3BvnG6PJwXNO7LIjgTp/E/BaB2Kc/NI9aGJIt1B1Extxp7/OarLEhC/lJ4dKbJsilVHtL3c24NlVsTZZyDc/uNWIArmZpnX5p/ueAk73Ooe1Yt2UQhvwoA9TK6pTzeg9R+3rh/DrR7WLulPL5t2pUIEzg3rERofdo/SMW1bf6Pew7UrUTw92r1z41wOY+POfQ7LstiVyLszwHX0fk/ZNyTDX5aAGJTpQAibWaLKJfrMQTQ6t53pwrwQBdawjRjEVmc5ov2aBGAvL4ZBLEEwijc5pUcgNqlPP49QzmAjHuQen67ChaH9kt58OFrEYDuLhxYJQCxvsFp7KvdJEKIQWGLbdebW0zar8aOLxb2cWRf1adgg8SHQqYa2LHLQA9vdxlohduIWcYigjPLbp5yUo6mnKprHwWLMqMGNmd85ANoq1/K093LudXYZAZql/5oMxAS4UUHoHAxKZZvbjFpAYDu4koELwOJpMFlIApAoiNKAETUMVLfSzNpFkDWVRMXsYTbrlwJpws2n6kJlsiBMAJQ1kGKLBIlXGXmSSM+K0ukrmufARsNoJYycSlPvxrb78atxsalOVEJh4Bwi0mjEo4DUFEJ163jRAC9vd+uxs7FJTVx4u6BlgWQfw/EM3AK25ygPojUTi4B0A4CqPxr00PgnihD0hoNR5UAIngp5p6oJMlnnQSYKwZQm4Fsdw80yoNLfqgMxAGoXwvnZyDsbViNrclACCBr4e4cM9DC3QPl4nIlAPJZCBXE6m/4RiqeZLcw+HMu7bojt9I5J3XsxAwDJkHuTWkaY932BFxY6G/E0paujoCV4AnLHf+idAq7FAxMIlA+3NYBKTYzBXBODryn2dlod4yOW1RwhqxdpzZbhFf6a+GC/UBuw1sDR7j9wfvBuMH+k7VwTQtOf7U3Rp1bC+f8XnWLSdv+0Je4zg73G+HvIlkzcddmINyRqig1kuCx+ImTMPzScfhl4qQDsv2145UGXWcyZ0zik5gRW9Ol2ioAxAYmQf8St1DndA8E8wASZVT6J5xgHn02BmrvkfbcCLXR9tiCCuyOp5OFoX1c+HbwaXvYatSPaPFLDiMpkjYV0nIrB1HCsUhUsn+YBShIpQFKAUJUKEKRyB4nWHWcZLRIdNnocuYJs1QYOByEk/G8A1l7edRT9NyvANypH0OgxHpx+qyGPPpe/DXhSy5DY4hDBaCS5wSBrZk0oUV6NiAywTMGaKp9tu8YKIxHZbYez2YDQqFLLmPLJOIrtOTSfYWMKSAKAdQpqdfFI57EzVQvZfe+Qw8aALFCC94XFSVGzxom46QSGenwbW+8VgGgbB+BLmlrkl9Kv4aXtRdtMV25tyRbE6m1lWJFy7aKqo+wsVZvPhGM5WirkVfCkaYWHCSyKhEdJwVPaclDAWipbEoIntXFCVvAvl2Hok2puu4+AJBap6wungGybU9GHFLp7vfcTyLUuGrJWosv1A1/CgFEJB2v8iaKaX9CIGMUjhVUwdxdvMzGuRLWCnlDBhBFCFKwkSWcdzCbETtPuHYlpFDSNqwUI9+nHVHxVuJPLtBLX5rCjinrjmfxOdDxHQB7HmeWKZLzyDQ5HfcfBpufA1aYviMcyoFDOE0ZECU32rSNfDcKm8YiedQB1DXk2/dn5FXXEmhLbECRp+pbRxl/LiNfyxGj/ssQZzbuDdTGmj82V2/Nvgq2+Si+MYhMQEoHpwP6F+qef4jGYrLj/QEgNrFTryYIGrM2EQAU5r4RQFT2KQ3QLMC9BuxbT5lyVPZlepFcHXgEzggt6pKNe3sAFv67uXr7+D9DA79qwZ5fLYDG3rLvPcuwKVl1MNfQRpGNSTpuGaNHdZkqIIKAI4KELQvaE/kxPN2JC9ggWkZ/MujSjpIjWTLQgSdULxyluBSXAWQNwGsW4F+b63dnH63n9j9CA3/dgt3m6soo03JuDVbaZtmK6FR9DbO1PDJbEmX+eXXwaF4SSXSWJY7O4yU6S/4prf0lnxYHHAnOWLOoEsmQBylfEdjaxkWlKOeMkKxuWWN+6/jI/iecPKiu3zr6ZAPVrwLA37JgL+IM3fIzVp3QAcTGh1mkfEuwcG4ZUCAF078aQMKi0SFulOybBEVuGQlDVXSAUxq1ti+5Dxh6kVl4kIzPKEL2OUHfesJZMYAM1GDhDWOq326qxX/9K88+9ENnXQTR1dvwzMTUH1vUi18wYJ6xxp5tq+dxbmG+mG9eu3L5hf39vafA2uCeKXAosa02KegwCfouKH0GEgWWQByuzhnP428ZQMdB6wOQ0a1vwqk+2mdsScrkGXIwkagcUd5Qtun6yK1B1AxFtRlB55+Vv/mq2cNE8YcbQQlAoilZlZhJNb/48KVXzz906XJVTb1tovgG3sYaMLebBn5gjPmjjc3mmx9/54Ub2FEw8/b1r9uNp94HF2FxdMaY7cqYo+D8t77xrYf/8A/+z789PNj/B/gaZLaOU5zQOErRja7JCgdbYVeufmyUAAAgAElEQVQ62Zds9TOVM+QolQY/U3lbJOxeeOjS53/xM7/yO4899fixL3Rjt6xZHCym1SN7H30e9owxwzZZduqa0vrFF1+8dHx8/BtVVb2Imw9Vllk3Wlvg/rDAbWvt57a3t3/zC1/4wpFW5DWAtJZat3vQLbAG0IPu4bV+p2qBNYBO1bzrzh90C6wB9KB7eK3fqVpgDaBTNe+68wfdAmsAPegeXut3qhZYA+hUzbvu/EG3wBpAD7qH1/qdqgXWADpV8647f9AtsAbQg+7htX6naoE1gE7VvOvOH3QLrAH0oHt4rd+pWmANoFM177rzB90CawA96B5e63eqFlgD6FTNu+78QbfAGkAPuofX+p2qBdYAOlXzrjt/0C1wMgBZazdv7sMLUM/eP5mYS4sGthpoxg13DcD+3u7Zr3/tK3/71s2bH7PWTnIWdW+J6bb39l9IHl9uMXad/eyjMFC4Fdh/MwFeFP/ddUS9H7v//gXxtg7NdmNNm5y9fImzX3ziOvNULvmekUa2vg2ta2TrfnDvezLpeyH8Udu3SSxjx6Hf6DUbkk7hmxsATDU5fPyd7/q993zgQ1+ZbuzMw2st/hxUMLl8VB9/59PPP/y6wQ9O9e9EuLa///gmbP5Ks4C/b419H1h4BN95ELytVOUY/+0b8XsfhLdzetJqX6eUtpNfZjG+9CIyDWPlwJGhWskVodu7QMhEQnx6mbcgDYBL3rIRv8yDCM5OAElM6hzvHxpAZB+EzRMVeq4r9k86Ypke5IC2MuagbprrYMy3jZ38VrW58/s//5Q5MPv79vFZvfhXFpp/Yi08Bt0bSjnDat8GGb4JRxm0gje1AZd9G2bUEaunL3IGQGPmGBuWvIuMslWOidOAa69QAUKtz2gEnT4RiTEXiaBaxj8lr+0SdGdt573VyYCZW7B/boz59Xc0Z/+nubE7+2cA5t9D0zztZxwtasM4C6VTBecS2ScJlIFN+fAZzizjoEzAkS9QZEQR7eol6XIAtYbkYBT0l9Unpf+8L/PkIZWAOoD6OvYyUhpHrzOOBs7rIhOHMQgi+FZt5//c3Lhz/H+thb8JAFOxxs2+ADD1ykkF5Rg1Zd/esPSIHHio/pMeVGydjqstRQMZFGNx7XnoEFlpIJy0XFkKaFHuK9F9iDnCdar4ET4jw/lS1W+Iz9BQbYW8awE+jwC6bC084b8jjhwga3QdgFjhBcqNT8n3C0QwC8yQ9B3HlCKowz46RlwmIBgbiDIOfsmQB1GSUleUEIjgsuRNqGJbxj/qQB/InfJE5FAmjmVdUqIxxswswB+aG3dmM8w++H0gwsZJzvQHSm+eR0uUpGTHqgUBF7Nw9r6HUazEQXw2JDxi0k8JroI4AjWiV8GO/WeCKEuERFbKArtvwH9CkbPfcFzp/6BZQG6jDEk9EvW9Cr+7kDXwknn79jEnUwAemq38o+G7edVClr78m2CrZQCUlS9wThpUHlVk7SQGTzY4w7GH5gmAeA6NHUz7ktBRANuoUwRYgcrFcRVBnlxPAijhfPVrgOP+szOjBl4+EYCSwPDf68zEHGlEJfvEmWccouC7p6qgCKezeLClZ7JGpyoKpf4S06lJhLmXlYOTdmZ7zXil7oX/BCEspX9I3rH+nD5Z4vTEy/oyBhDnoNMMoNLybWRgjgN9WHW/q7NJ2l4uPdKOSxy0tO7JhZkPmCmCohRAJTOPRNEQQk/hn9Dvse/pV/qn1yi+p6SSpWtkTJiBTgwgYaautIzJBqJrEHMgV+4QoOIrFlXKTwNOKYsfzIxRON2DQMyUcKz9hM4pEFHNZU113+NZOkNEF3r5L/AoF8uUyZeOexZAfY/sJ0fGBoMxWcVavUoMJgWQ/rs43rhEh/EhbfCkuni2UD44jGJfBdgBPJ5v2gewvLUoBsbvcWgnbHQTQeH4JcuHdP3zFYWqbM3EJUfs2fIN7b4cgHz+Gb+zE/hRMwvVKcYzHJEi2Nm6tJdyVomyl5qpx7TLsn6kyjL3CgmAhmozHpV4iLjiIIogEzK/YixeF9rnSQk4xA5t8ZLsUwqgIOOJJZwwO9YO6ospz8CVZxSmFEssyTOwFkBcZiSGGoRKbljVYJNBqiaTYLLGI7FMeSj6gVFYlskLJ6ZzkVRKwOabjloMHOseIUOle09Koj/7kwa/KUTcA3kXy4yaNtQyMMdALBsExhs9rTaKoBMHILXuhdPwQZyqbc2nsPYLgqm07ogiQCUC4cFDjFcKIKK9ikA6xbKxprAtn9n4TDiSpwegQJjMwP3pxlo4Xlho+gNYyfS+jHyaVVbNHiP62dq/ayKOiSejpe9x+4kB2JgYqKIvKLXtwtbae4rkSoWTad9QUhBZ+wQA0hMIv/qc68PZYUUAasDCzC7gwM7hGGr3P+x6aivYNFPYMRuwBVPot9OQXFyUfT3B+xKOVDTzvGBeW3hjr4FZPQY1txY47r/05nEIvOHCzLc3BStpWe7cpoFHdgxsIpIogEdA0t48J+NrAM86mA5RjhCpDM8ChTmRQFeQf7m+CSIg9G+gcaC50uzCFXsHrjd3Yc8eOhDhuJswhfNmC95hzsET5gI8WV2AM7AJlb8/KU40GV+M9usaIoCuRysRhj7FxaPWAefNvfbf9iczF+8HoegcnQGzW6+WGcO7Jg+gsbGWTTnmpQKbKy/a43IGGiQrzXDdoHl90o5VxKTuf4wBigwWUMO1Zg++V1+Fy80u3IUZYCaifjAqd2ATnjIX4S9OHoenzAWoTPB97GQwFvjxGCyAFCuvWwBhBiLljvg5AoUyfSeBNTAEpyKbKlh5KAfhsR5AW14G8iATKJQPOM9HBboH+keC8k6mbaAOcNVKhZSq4/4lD2ntRflmBgt4rb4FL9dX4Jrdgxra7/1SbX0nTaCCR805+ODkSXiuegQ2TLShOhvzBM0NAPJH7xJJDoUInDf3ahZA7PXLZIaAuhXlmzJIOaPLAAo7V5ejacyJJMNnq9PLPrwuRIB48aQGZ2EGiv0zgxou17fhpfpNuGp3g6yTAxAOXYGBS+YcfGTyTni2ehgmfibKAojQkgRQrySRWHzXrRJAOjaNApdPfKrZJ4m1YgBJI98rAEps6B3QZodiAAmAIPh6nDggqn1Wxu4Elmg3mrvw9fp1+HFzE/AeyP+R9PfbIYiwnPv49Fl3fwTkOxuiiomgutZW8T2QYPTRIG2jRQNw46CBOZZw7IqFVhC8grpDIpmLQxNR+aMSqH/uwWRg6L7/zO7PnSnA+S0D0wozHu8qbTkSBFTGzlzb3ppZxo8aqADEZEgKCME9WGYs0vYsOY8nhm67zHBkZ/CD+i34Zv0mHALuwKGC3DsmxBFOMHyoegr+0vQpN1PX/+RXHwwtu5ijJhEEQ7bG7PKQBag9ElA5qfOGKuNk6lp2GUcWgKn3KMMhMN1/6aR11uCifsqA8wMoDqsSAGlt3bNEtm+PjV1bpT4SKeTs1Wefr9WvwU9c9kmv0GYgbIdZ6DFzDn5p4wV4yOwMU9zFGVhbwpUEqxC/rdpEA9FpUSRlHZxhd1K+LGl4gqva6kDKmGM0ERMV1MPTkmDmgo0PZCJgV0RUWeK1ADjr9np9G75U/xB27VE++3CG9aqhs7AJvzB9NzxXXYIptLNyvCz+GX/TIGagW+OGOrUBhSBi+2BOyOyjYJoVLVTN38uMSmdJIi4vCoONIxq/AiBLmGgc0bZBbSU/waMAp+6798+SxImXHdk5/Hl9Hf6k/gkcw2KsALJ1HFErdvJswxQ+MHkCPjx5p3tmRP2EIo9/jbGiBFCYftuOpCAi0XxiALUPNMl9KIQhT08+K95zUePmwVmSsWjNgqMCwbFZj+y2t3a03q6fsVpiMiDCLR+4gw4WDuwMXqmvwUv1G4Azcf0PBWwaMuFRvG4TJvCe6lH4xPQ52IINNYCGMd0v/T1QkcE7ABWwqv7mbNRDDjqPDRgWKskSevn6XjGN06EYj6vvO3Iyydi8VqFj275IMDMRVgLygcSiAcTxFG0TmbvtGvt2Bt9ZXIGXm8swdwDKvKRTEZsbULny7dPTd8MWbGYAFMXb8GcRgEKpSgKjpK0zokAtcf1PBU4uQ8ZsrQfbT4c8QhsIZOG5XQMgUU/mJPXiGApAXN8l/qHcjscO7Qy+X1+Db9SvBxmoJBPFfWMGel/1GHxs+gxsshko1SqMzaUA1JVSBCokB1HAYBlrJPqORuUgSpKBMLUtYFN1E5mbMo/7LwmgPHm4soGeF1QwPGnvLFv7Dfi37ogAIk6yvo9qPATrsV3Aj+ob8Ef1j+EY/NdWEw/VWSIIk8wOTmVPnoafmzwJG+w9UKh765/gWLcWLrPubRx6jEyVAboLl1poSQYEwQiFJZyGqdsMlqC4LYuUDgrYURHcQ3sxoMOTwV/eHxKRJQBX69M2LNG/pG1or5AwF9DA1XoXvlz/GN62+84zEhFS9VgMhQuwDb84fQ88WV2EqpuFi7BL5ffIBt4kAs8gqWecAhZg1qQ31Hgu4chuq4PLXQRYWYf7WyS6ql4Kjq6J/09iSyroqD7xGdC0wmdBUb2tZNOlAcTUJdnJkwyAWP+K+tBXaR8eh2Q9Rn2WfL0LW7BYuN0cwbfqN+DPmuuAgJIdK5+egIF3mUfg09Pn4ZzB+59oz0oAUA/MieAdgFTg6YK//wcXk17ZHxeTskZRBhzHKNlV1wRt8PowhiUuODtsZxivKWHU0vu+lN1DFs6xqvQg1HNd0E1enxUCiOXz9gRFbH4dMLc1/Li+CV+rX4dbcLA0gBAq52ALfn7yDLx38ihMIP1KD2f51F7dPZDuCWwnc9f7rAkXk5IAEtJFfIo2YG/cbN4ZPCC1HM5l2BpHHbczrBZAonyMEbKMHZEbBTYKRDqQp6OrMxCDXBXBRS9MQSLda47hu/VV+F5zFY6850FiyRGGLWy4yYN3wEcm74JzZos0lURd6STCrWPWjmPApV1iBrqM2xmY5Tx5dgtll8biAmI4rgBECcDRWeddBqq6DXXt1drACeImGjgbPIEuPNz4jJ0h5/7CrmpRPS7I2JfViTkhEkJU9/kVCC7huVUfwLeby/D/mrfDGTkFWeOKg2fNI/CXJ++ER6qz5C7VEPNe3FP9V+Zl85a3EiGshmir9UdxNfbl/XY7Q1lw0nBwfYz/pyEVLzUwYIzYx+9UzARgw/1AXWNVJujHJBpnweOhVJbP07eUPDKADk+HihfpT2QflU7R/U8cLbW1cMsewCvNNXi1vg5HMGeXiPXXIlfgw9LnzCPwwemT8LA5c4KJg74qwn+1ACJKBMw8l7v9QKsFUC+gZO7IrCUMKYCh7xWbjBvq+JtfMSB+ygBSgdNXMPugNe2xOANnwBqJ40cms+akbYIgOoCZWx/3anMdbtq7cGzxbQjh5AJOFuAynYfMNjxfvQOerR5xkwY465YnAzn74FmjBhARoPMG4Hq/nYFSN7tBickaCkZNchh7jWcEIvFJ5cuZDQMXtwxs4D2mapdmpE9J8CRtZfJwZ0v6D0sLdhnWShcNLytj55QcIWCzxjawDzO4iu9FaHbhjsV8hCsVrLvXuWC24XFzHp6oLjrg4K5UfLmI3LeeOIoB5HeNCuCeoP7YcK7/pXtk5CaB6VeXBYpgf8FqN/dH2wkbTtFY3RVB+Udem8lCOCLOXuNubs1+I5LNSgL8FAGUsHzJMz9v60rMP2L2JVOLcmmREkCDPJ4vMQPhbB0eQgAFO079qpcRvj0cngz+Sog6KuHSUJUfnBIkM+pVEkCswf1OutcnEZmEyxCJfATgxqHTsaR+GZGLF5o6GQtWdSS+z5JBajB1KdY3JN40W6o/STJBZuxaOMbSLxrm5JCO6x7sR2hIwOPoOpxESAC0hHPagCCcRgW+j3clC1MBlHVOZM24PcU8yzxXoXTXMXXa6qQ6keQm+JOUoPBjAa4Pkd3DIBiaBhfSq+454hBJnIg5XWxGEcEmgwRA0YhCOhUDQzhJB29oeNUL0z1QnDTYwuujvwrIIHBmhnyotgEhE5EYBhwTjN5hLuhke+X1Z7NPqEAgoDgmoRi7aJhADBdu/nHpmVfaZQegrO9JAKWeLwlQFeN2ph3t1v/G7/lJnOYNpJJPCGgOQKXPsgZHZGSTdeEtyAFIpb8XJVoAuXbZIBpxEjQt8c8JAKQBD1cVpXjPk0fYwgMQV77hXTRVo1O2LQ04DkBt36lpShxEBTOX7kknZF5gXqJ/dtzBcPIruyj9tQE0gFZguJhISgDLBalKvgRs9FWx/oIq/ExbdBFf7WjingXQuIBSt9yjdc/yAAo5eTmjhyUNCaCCb+NIs3+sfMyJrD5LAijbb2oSwUd+b9GETRJ0RMeE/9XyKQCU9KW9P4vUSicQGLCqiGZJAJUEkIolIqpTGT4xOnNPkDEgm+1UBozGLABQ0fpDZrGlyk59uSw5Is74XduT9q+6PjNtnZS7AlGnJVl8b82Q7HB4lFg32dABqL0sjUjJADgAPhEeNi8UPmyMMNO72fU3yhPfE6WvTc0CNAO01EHtBfjArX+tVWz2eExaly4rRxfLbVNtSP2EAC8ht9DroaGydo31Ii7IAsg1SKKPCGcdUSW+1JJsFP/6SmoAEE3TlAH6Y/h1hmt3w8Wk/XMT7UsUyTKL+2hhPzDxULYkaMK2HuNE9HUWVyJs42JSJrN5h704SCiOBFtwsA8g6Q108WD8S11InwloYCxQVI7rA84jFWHRKJV1YlRlwemxA9+WPqPLPo5m2+dA5A07M2p/mFyNnUF8wHhEELXZJzOwl6vShByxvsDUrSz8WPmvM8isKDo40l0VDFFUlVwj38eeNIiWvPdVACjMkKPjS3R3fbBujug0yiNEURaFXFDCRQk9E8f4Sl/3cnlvOY9mfdbQLcnCHCT0DEyBVCBgT+QQ/RSASHZn6FIcMzqZnXGMsiMZWAKxLAMgKvA0+mPZix8liwsFvBY/xoayxPJge/9DZu04FvDLOcMH3Dyl4/at6sbdUgxf2/FshrK4j2x4G09xDJQDl6MNZaTgNPpUAqBx1NzUtQNQvJ0hCYwUEGTiGZwvhV0YISoWUmfEVPAWQGEJpwkgBk+DIfLlTh8+BJmo9fH9KJPS2KXAxil/jfpECuO7xHE378Z0/CYc9ryoLRzM268a+jbAwD6zaWB7A+8522U8+IPA2Z81cICrlr0xEDxnNivAxb7ee+GhaQDuzi0czMLXziNmdqYGzm0ZMB5KUYbjuYU7x80A0pLXdXWgfdlcc/uB0tDI1YF+CZdrGxAoEYWqbdul4PQYiwcbn2bjDFSSUcQMocg+LAi7a0UgRxfnKMmHax7cNBj76zBYN6cGLmxXsIUA6iIcz8/qBnYPGzicD29Xd51NJ237s5u4Unr8qRsLtw8b2AtKnHZxL96bnt+aQOV9Jwvb7x41sOsDwraZDQH98JkJTDwAIUAPZhbevjsfAUTGJqOzO2wQQEcJCWkcFEwiMI4lnUeyKMeDAvUJ+1mG2/GMQdJ3no2KtJMI4yceWRAWGz0sylWZ1DcDj/nQ00K2Ktm2IJGBO+eNowEQZqH2p/3XAWirgrNbeQDhFYgBBBwCaLISAC0Av/dbSh5t+xMAqGWV1hXLZ6Ce/3zu6Q3sTWdz+yE4EAm0G58a/na/4P+1sqCj2rfy+O5O2Sh9MEczVhCI0UUawhoSixZAQgYW1xpG/WczWAQg/DAzBvhQknXxMWSgqIRDGw8ZyAuDIAP1kOsyCp2BAHaP6iADuRDHDLRBZSAs9yzcuFu7e6cTAMgr4ZhMElUFSYQUBRHL2OGJ4C+lU+NreHb3z4TLE1iAEbgoIg7SiHwok7IL/uHaq8HZz8VGs+kSgCj98aPMEoAOFuEdw3QCcH67gnMbVXBPEwOoHwuJraSEQwBhOZ6WcC2A3r5bL5eBxhJOB6DEkN6BkwZdS5ZjL9JYXEmRyCBmIR6RGl3kWS06Aw0JLqhKeSFLCYQESlG2osFcCiDMQOe3Kncv5HPGom5g79jCkQcgHBEz0LktnBTw0j1u28Z7muPGTQr4pSICCCcEzm5Ogi9uYxa5e9y4iYd+5g791GegCzthe3xBydHMwq1DHkCi7gmACrdgqzexBRVvX3MJ2YYqy0oyY7ZtP/Y40bpc+ibKOb56a+khwW3qotLMwxGK7B86NLQZNXqEE7xSzL2Q0u3kDQGEs7qL4UWc4woTN8VcmWAau//iIbbH2bX4B0GE1wzldafOAqexu/a+jGM57m3ndlPkFubEy0HVFRd+YKufhSsNIp8VYgXFsoGIJFWZoQW4kBnjTLfUfYW4CVDIPoxXWnGJ7EsYhWNELmPz7Qngihk71Ks0VoauuwvDocKasVQXtiJRZt/c4xrKo4P+DkA321k4tXMUi/n8voJ+R0t6ctGrD7RsGMieAQ8TqtlvrMa24QymsiEZRKM5SBMJ/iF913WSB5C86l6nTyu7lgQ5EmNZP6sLQ1okAemJQ9SnP5kDEGtAJboTwxLRwQpKGiBTNmUAVDJ9KxBy0YxNSiDtkWzARQ1UwRx1TAKfGb2IsE7oG24BadJt1p8l4KGtXqR3gvK+hGM2j5UEkdjW1zMJDIIViJqwNIDoAKV7KTGic4MygHgC6Vk77CgFW1Q6EfFSEnSSpUvKsqX0J5TjAd4pqi3bI7vo5BtHL5pFDkDUPQc6qfHY9DvawaNcT/BkxVTEzBkGGgJUydZpQNPZoIQ4VLoHqNPvOl1mti//MpReu3C1mi7oOuAr7S2DmyEzBRjIXNJ1Rz0y5B6YF8U9kQRMX8Kp2d1jX5whcS9WjN+NjZ2l23YS7hxD13sO465TLOtPPnuSYWpvOvP8lmmfYPcG17C610YbaCnhjoErLh5VkIYUQFx5OB6Psp7AFmyGEACE09j44NJNY3sYxbVwOMXs1sJ59sS1cLiMZyd+DmQB9rxp7P6Sdi0cTmPjc6MxVnC2bv+4gbuzCC4GYGcD2qU/3oNaDFtcC3fbTWMXZvqhfTeJsAyAcPrvTXy5/PjN16SuH/olBsiuf8sEEsdunC5o6wubBh7aMYCPHPJMTSCroHxLAUSXbUkGI22VyiKzOyP7cHi8eikWZmR0S3m8B6n9PDOOgSsR9g5rt6DUvxwXn+KD13MOEKPc/YNUfBbk/7ilPFsVnN+ml/LcORqfA+F1/IPUbi3c/jxZwc0SR+Is87K52s3CxSZnQdWdwLVwb3bfB8oCMACDQHkEfWb7jq6h2uMxtwgRAbTdAWiFM4/cmNTNEtuWKBEkS1EA0rUPW60CQH2PJIC6+5i5W0xKAahdytMCaEQQByDnRwJAWBG5xaQnBFCJf9xauFIA9eW8W40tAIh0JvPGyQC8inSa4Ky7RgLbvQOgeKcMMSOX0Ycr4VYFoCxpMT7yAbTlbU/A5jyAyjLQKgGE5d7b+95qbDpxp3l70J8BkOiI7iR+3tF9H4j7vAkX5cE7DxiJFYCgQMc7vn3XtctAOxVsVPwri5IsHYmonbEJZBn0oST0JhWCTJ3xJr2ow10UjxLfRHMPD0lgdmK4Pgnx/UM0gNrR2xKu3RPky8OVcJhR3HaGghIOyzdVBuo26uH+oRtdCSfFfJ804iLBvVyeykAiA3UnsYTrM9DQMfHaKGze3uqNvfZrlKRZpiGQuwmAolIjUaAFUHsPVLW7E2Xskme14AlizbsoWx4oAUSDk1aobRuOXDq7N1zNZJ5+ZDRrvxobJxH6e/w+A+0d2W4/0NgRAggXk+LEg38PhDtF7xy2a9v8H+fHrcqtn+u3M2BvuIRn76gF3LAWDmy3H6iCh3a8e6YOQG419gFuZ8gsJGCIowhAsdFxHdHRHNwXWVLG81QOqMuHUjrbptkSzia27D2NdWu0/J2SVMhpsm8uS2kBROB8EEmUgxBcNzuYB1Lel+PgZD7t1sIhSVlvL0i77qzfoj3CGqMAF5S6tW2eYTGucKKqX9vmqxy3x97wP8xai2BSqx3H+b3/1MYwe2QA187NcHFr7sF2CYDY7EOxT3eMZ9YO2h7jqzJJ32G/F4cRyj884LSbPQ1w62VAArbZoFXJnHBGFKxU0Mc1QWbJDgtc9SvFvGBhgiIWM2jm/ZEFeNCWbr0MgZCxRurCSxjHxk8FQMMgWiMylufB1rkuC8qwHaf8eJxC/vDpoSx4XD8KAKeZ0b+If3iaAp3Ki+2x1QTcEpvHosFZkk3Q5wGWVyvUS/vG0ai/tLyOWLgPG8aZIiGwIUTcA8UdldbLFNDI1cYxYyucxDpODPAwkLlX9pYYkMsEPFsr2ZB59bCUedhzKc8MR3Tl3uggLchTgPsAUjwg72JADVA/hpggD2lH877rSG+CuUZoegAihc7dXDGsEjpIZqFhXEVmowI0b+yxxVJkQAyQH3NMW7q2hNNihqVsnbHZSRfPajNvmn1HWIvE5OuU1YViXG5RLj1qMXFkfN9PIjT4AKuxwyoi0ptJZiIcSoFBeH1hWJaUAKikbTT7l4nD5HSJ0UOAK4nDiz51sBFph7qWXTKkJIWfBYBWQTgnJY7BvIKdjDHWWvsdc/XW8TFYuzF8opRgBdo5aSiGAPKYv18cJ7Fq13w1BqQKm7L0PcR1JBArn3/CVSs8gKhMSlQKKZiLGLsfJdqwxihA+rigLWWvMZAV5VuJ//tilJUvPFFCBIGJZaJByHwTN9S9bgGeJgGUFTT0MVW6tS3Sm+jSIEp0EQzuQzeOQm1GKTV62t7nQWHXpRagiSLtAZ5wdAASs14BgELy7GXje9f6cxn5WruM+i+z69T1IehvDMwsVH9grt2a/28Lzd+x1k5JHykdLA0YKkQ4PsM+ZKCoAJRmolMDUDKU8o07GfuyAbSE/u6SE/qTB2zPtmMUtW3TK8g+1FPxXv9ihshnIVGXjJ0MwB1bVb9mrtw6/McGqv9grX32xABK47UzIS1qzFoi2ygZOMd5WgBxhJANoCFm6PDhmFaH4KcAAAMNSURBVJfLJjkAUddFoTNYrgRAxRlYBCcnUQg6SlfW3kJ2CEOl84MINuIKAUDGwgIq+OqiWfwL88bu7qVpvfUvrbWfBYCnAEyFz5BLDTgGHMc7ROYhAKc1ok6+lKb9/kuckwU3aXAF+65kplNRMqkDrssZpQFHAkjQP8PwDBc74VQk5mU/Xax0NpQc3d5GzwDMK9MJ/NrN2dXfdc/6WxBt/z0w8I9s07wbLJwBA1Xcl7W2mh3Pzszn8+04IYz2o9imf2l4PqA4hsbj5asIePbhGL8080QJJ2R71tXhBt0sOHlji+O1/dLLOdRB6DXkXhBL9sWsvGf9my5S9yCQGsCBgriGij7S175e2FVVNZPp9HBjY/PIWhN044pxAwsDZhcnDmwF/62qzn7pk+8yh+PyI2snd+/Co7vHxx+uoHqmgeZsVVVurVv/s7+3e/alr335Mzdv3viYtTb69FRX7lKGCCK/z1D+ik45a1HxU3Jsmec/XP85ICd3nu6LA4RbhwDojBNHVuahak5/CZTStaXXcYBgcEvUShi9fVoxWPuAsdTKDYk+heomZ6gubCszOXzs6Wd/7/kPfPhPphub8+gy5I7bBqof7DVHr/yN5x/exWlsj54UowDAiy++eOn4+Pg3qqp6ETcf6q5at1pb4L6wwG1r7ee2t7d/8wtf+MKRVmJhYX/axRpAWrOu292HFlgD6D502lrke8cCawDdO75YS3IfWmANoPvQaWuR7x0LrAF07/hiLcl9aIE1gO5Dp61FvncssAbQveOLtST3oQXWALoPnbYW+d6xwBpA944v1pLchxZYA+g+dNpa5HvHAmsA3Tu+WEtyH1pgDaD70Glrke8dC6wBdO/4Yi3JfWiBNYDuQ6etRb53LLAG0L3ji7Uk96EF1gC6D522FvnescAaQPeOL9aS3IcWWAPoPnTaWuR7xwJrAN07vlhLch9aYA2g+9Bpa5HvHQucPoA++9nPnrlz587fnUwm+Fae5E2m944t1pKsLVBmgaZpDquq+t0rV6585Ytf/OJCe/X/B2qU8ooz1MWKAAAAAElFTkSuQmCC"},59680:se=>{se.exports="data:image/png;base64,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"},86324:se=>{se.exports="data:image/png;base64,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"}}]);
