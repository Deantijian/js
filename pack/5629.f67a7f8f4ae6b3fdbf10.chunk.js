(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5629],{79592:(mn,Kn,C)=>{"use strict";C.r(Kn),C.d(Kn,{default:()=>Yi});var xe=C(54208),Xn=C(51197),Pe=C(26581),Q=C(33867),y=C(88239),Pt=C(85105),Je=C.n(Pt),Ke=C(99663),Xe=C(22600),_e=C(49135),qe=C(93196),e=C(67294),Gt=C(13561),fn=C(91088),$e=C(97777),Ne=C(15742),_n=C(43727),Ce=C(88106),F=C(12424),Xi=C(97373),Qe=C(94055),Y=C(86735),z=C(5017),Mt=C(93967),V=C.n(Mt),Ut=C(7145),Tn=C.n(Ut),en=C(96486),U=C.n(en),Se=C(45231),qn=C(82104),ln=C(66946),Ze=C(97553),$n=C(3540),hn=C(48355),Te=C(45697),Ot=(0,Y.Z)([`
  margin-bottom: 24px;
  .content {
    height: 40px;
  }
  .searchWrap {
    display: flex;
    align-items: center;
    width: 200px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 18px;
    padding: 0 12px;
    margin-left: 20px;
    overflow: hidden;
    .ming.Input {
      flex: 1;
      border: none;
      background-color: inherit;
      padding: 0 7px;
    }
  }
  .needUpgrade {
    background: #eee;
    color: #333;
    &:hover {
      background: #dbdbdb;
    }
  }
`],[`
  margin-bottom: 24px;
  .content {
    height: 40px;
  }
  .searchWrap {
    display: flex;
    align-items: center;
    width: 200px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 18px;
    padding: 0 12px;
    margin-left: 20px;
    overflow: hidden;
    .ming.Input {
      flex: 1;
      border: none;
      background-color: inherit;
      padding: 0 7px;
    }
  }
  .needUpgrade {
    background: #eee;
    color: #333;
    &:hover {
      background: #dbdbdb;
    }
  }
`]),Vt=z.ZP.div(Ot);function Le(t){var a=t.warpClassName,o=t.title,n=t.showBeta,r=t.showSearch,i=t.placeholder,s=t.addBtnName,c=t.needUpgrade,l=t.description,p=t.extraElement,d=t.link,u=t.handleSearch,g=u===void 0?function(){}:u,f=t.handleAdd,h=f===void 0?function(){}:f;return e.createElement(Vt,{className:a},e.createElement("div",{className:"flexRow alignItemsCenter content"},e.createElement("div",{className:"Font17 bold flex"},o," ",n&&e.createElement(hn.Z,null)),p&&e.createElement(e.Fragment,null,p),r&&e.createElement("div",{className:"searchWrap"},e.createElement("i",{className:"icon-search Font18 Gray_9d"}),e.createElement($n.Z,{className:"flex",placeholder:_l("\u641C\u7D22")||i,onChange:g})),s&&e.createElement(Ze.ZP,{className:V()("mLeft20 pLeft20 pRight20",{needUpgrade:c}),type:"primary",radius:!0,onClick:h},e.createElement("i",{className:"icon icon-plus Font12 mRight5"}),s,c&&e.createElement(Xn.Z,null))),l&&e.createElement("div",null,e.createElement("span",{className:"Gray_9e TxtMiddle"},l),d&&e.createElement(ln.Z,{text:_l("\u5E2E\u52A9"),type:3,href:d})))}Le.propTypes={warpClassName:Te.string,title:Te.string,showBeta:Te.bool,showSearch:Te.bool,placeholder:Te.string,handleSearch:Te.func,addBtnName:Te.string,needUpgrade:Te.bool,description:Te.string,extraElement:Te.any,handleAdd:Te.func,link:Te.string};var et=C(94914),Ee=C(93002),ke=C(56171),zt=C(94942),nn=C.n(zt),Ae=C(70801),In=C(36803),vn=C(86853),Ue=C(31261),Yt=C(36376),Jt=C(41053),Kt=(0,Y.Z)([`
  &.optWrap {
    width: 160px !important;
  }
  .ming.MenuItem .Item-content:not(.disabled):hover {
    color: #333 !important;
    background-color: #f5f5f5 !important;
  }
  .ming.Item .Item-content:not(.disabled):hover .icon {
    color: #9e9e9e !important;
  }
  .del,
  .del .icon,
  .del.MenuItem .Item-content:not(.disabled):hover,
  .del.Item .Item-content:not(.disabled):hover .icon {
    color: #f44336 !important;
  }
`],[`
  &.optWrap {
    width: 160px !important;
  }
  .ming.MenuItem .Item-content:not(.disabled):hover {
    color: #333 !important;
    background-color: #f5f5f5 !important;
  }
  .ming.Item .Item-content:not(.disabled):hover .icon {
    color: #9e9e9e !important;
  }
  .del,
  .del .icon,
  .del.MenuItem .Item-content:not(.disabled):hover,
  .del.Item .Item-content:not(.disabled):hover .icon {
    color: #f44336 !important;
  }
`]),Xt=(0,z.ZP)(vn.Z)(Kt);function _t(t){var a=this,o=t.status,n=t.index,r=t.projectId,i=t.appId,s=t.name,c=t.collectionId,l=t.colorful,p=t.enableScore,d=t.options,u=d===void 0?[]:d,g=t.items,f=g===void 0?[]:g,h=t.updateList,E=h===void 0?function(){}:h,w=(0,e.useState)(!1),m=(0,F.Z)(w,2),I=m[0],T=m[1],x=(0,e.useState)(!1),B=(0,F.Z)(x,2),N=B[0],S=B[1],Z=(0,e.useState)(!1),k=(0,F.Z)(Z,2),v=k[0],b=k[1],W=(0,e.useState)([]),M=(0,F.Z)(W,2),H=M[0],j=M[1],P=(0,e.useState)({}),A=(0,F.Z)(P,2),D=A[0],R=A[1],G=function(){var q=(0,In.Z)(nn().mark(function ee(se){var ae,re,le,de,ve,be;return nn().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,Se.Z.getQuoteControlsById({collectionId:se});case 2:if(ae=J.sent,re=ae.code,le=ae.msg,de=ae.data,ve=de===void 0?[]:de,re===1){J.next=6;break}return J.abrupt("return",alert(le));case 6:T(!1),_.isEmpty(ve)?Ae.Z.confirm({title:e.createElement("span",{className:"Bold",style:{color:"#f44336"}},_l("\u5220\u9664\u9009\u9879\u96C6 \u201C%0\u201D",s)),buttonType:"danger",description:e.createElement("span",{className:"Gray"},_l("\u6B64\u9009\u9879\u96C6\u672A\u88AB\u4EFB\u4F55\u9009\u9879\u5B57\u6BB5\u5F15\u7528\uFF0C\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3001\u4E0D\u53EF\u518D\u88AB\u5F15\u7528\u3002")),onOk:function(){L({status:999,fail:function(){return alert(_l("\u5220\u9664\u5931\u8D25"),2)}})}}):(be={},ve.forEach(function(K){be[K.appId]?be[K.appId].data.push(K):be[K.appId]={appId:K.appId,appName:K.appName,data:[].concat(K)}}),R(be),j(ve),T(!1),S(!0));case 8:case"end":return J.stop()}},ee,a)}));return function(se){return q.apply(this,arguments)}}(),L=function(ee){var se=ee.status,ae=ee.fail,re=ae===void 0?function(){}:ae;Se.Z.deleteOptionsCollection({appId:i,collectionId:c,status:se}).then(function(le){var de=le.data;if(de){var ve=Tn()(f,{$splice:[[n,1]]});E(ve)}else re()})},O=function(ee){Se.Z.updateOptionsCollectionAppId({appId:ee,collectionId:c}).then(function(se){if(se&&ee!==i){var ae=Tn()(f,{$splice:[[n,1]]});E(ae)}})},X=function(){T(!1);var ee={projectId:r,options:u,appId:i,colorful:l,name:s+"-"+_l("\u590D\u5236"),enableScore:p,status:o};Se.Z.saveOptionsCollection(ee).then(function(se){var ae=se.code,re=se.data,le=se.msg;ae===1?(f.splice(n+1,0,re),E(f)):alert(le)})};return e.createElement(e.Fragment,null,e.createElement(Ue.Z,{action:["click"],popupVisible:I,onPopupVisibleChange:T,popupAlign:{points:["tr","br"],offset:[-160,0],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(Xt,{className:"optWrap",onClick:function(ee){return ee.stopPropagation()}},e.createElement(ke.Z,{icon:e.createElement(Q.Z,{icon:"content-copy",className:"Font16"}),onClick:X},_l("\u590D\u5236")),e.createElement(ke.Z,{icon:e.createElement(Q.Z,{icon:"swap_horiz",className:"Font18"}),onClick:function(){T(!1),b(!0)}},_l("\u79FB\u52A8\u81F3\u5176\u4ED6\u5E94\u7528")),e.createElement(Pe.Z,{text:o===9?_l("\u542F\u7528\u540E\u652F\u6301\u88AB\u65B0\u5B57\u6BB5\u5F15\u7528"):_l("\u505C\u7528\u4E0D\u5F71\u54CD\u5DF2\u5F15\u7528\u5B57\u6BB5\u7684\u4F7F\u7528\uFF0C\u4F46\u662F\u65B0\u5B57\u6BB5\u65E0\u6CD5\u518D\u5F15\u7528")},e.createElement(ke.Z,{icon:e.createElement(Q.Z,{icon:o===9?"play_circle_outline":"arrow_drop_down_circle",className:"Font18"}),onClick:function(){T(!1),L({status:o===9?1:9,fail:function(){return alert(o===9?_l("\u542F\u7528\u5931\u8D25"):_l("\u505C\u7528\u5931\u8D25"),2)}})}},o===9?_l("\u542F\u7528"):_l("\u505C\u7528"))),e.createElement(ke.Z,{className:"del",icon:e.createElement(Q.Z,{icon:"hr_delete",className:"Font18"}),onClick:function(){return G(c)}},_l("\u5220\u9664")))},e.createElement(Q.Z,{icon:"more_horiz",className:"Gray_9e ThemeHoverColor3 Font16 pointer mLeft16",onClick:function(ee){return ee.stopPropagation()}})),N&&e.createElement(Yt.Z,(0,y.default)({},t,{controls:H,dataInfo:D,onOk:function(){return S(!1)},onCancel:function(){return S(!1)}})),v&&e.createElement(Jt.Z,{visible:!0,title:_l("\u79FB\u52A8\u81F3\u5176\u4ED6\u5E94\u7528"),description:e.createElement("span",{className:"Gray_75"},_l("\u5C06\u9009\u9879\u96C6\u79FB\u52A8\u81F3\u5176\u4ED6\u5E94\u7528\u3002\u79FB\u52A8\u540E\uFF0C\u76EE\u6807\u5E94\u7528\u7684\u7BA1\u7406\u5458\u548C\u5F00\u53D1\u8005\u53EF\u4EE5\u7BA1\u7406\u3001\u5F15\u7528\u9009\u9879\u96C6\u3002")),onlyApp:!0,hideAppLabel:!0,projectId:r,selectedAppId:i,currentAppId:i,onHide:b,onOk:O}))}var qt=(0,Y.Z)([`
  position: relative;
  overflow: auto;
  flex: 1;
  &.emptyWrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`],[`
  position: relative;
  overflow: auto;
  flex: 1;
  &.emptyWrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`]),$t=(0,Y.Z)([`
  position: absolute;
  width: 243px;
  padding: 0 12px;
  transition: transform 0.25s;
  background-color: #fff;
  max-height: 550px;
  overflow: hidden;
  transition: all 0.25s;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  cursor: pointer;
  .operate {
    /* visibility: hidden; */
  }
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    .operate {
      visibility: visible;
    }
  }
  .icon-trash {
    &:hover {
      color: #f44336 !important;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    line-height: 24px;
    padding: 10px 0;
  }
  ul {
    padding: 8px 0;
    max-height: 485px;
  }

  li {
    display: flex;
    align-items: center;
    line-height: 30px;

    .colorWrap {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 6px;
    }
    &.more {
      position: absolute;
      width: 100%;
      bottom: 0;
      background-color: #fff;
      color: #757575;
    }
  }
`],[`
  position: absolute;
  width: 243px;
  padding: 0 12px;
  transition: transform 0.25s;
  background-color: #fff;
  max-height: 550px;
  overflow: hidden;
  transition: all 0.25s;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  cursor: pointer;
  .operate {
    /* visibility: hidden; */
  }
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    .operate {
      visibility: visible;
    }
  }
  .icon-trash {
    &:hover {
      color: #f44336 !important;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    line-height: 24px;
    padding: 10px 0;
  }
  ul {
    padding: 8px 0;
    max-height: 485px;
  }

  li {
    display: flex;
    align-items: center;
    line-height: 30px;

    .colorWrap {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 6px;
    }
    &.more {
      position: absolute;
      width: 100%;
      bottom: 0;
      background-color: #fff;
      color: #757575;
    }
  }
`]),ea=530,na=30,ta=243,Bn=20,aa=61,ra=z.ZP.div(qt),oa=z.ZP.div($t),la=function(a){var o=a.name,n=a.colorful,r=a.handleClick,i=a.pos,s=a.status,c=a.onClick,l=c===void 0?function(){}:c,p=(0,et.FW)({options:a.options}),d=function(){return i?{transform:"translate("+i.left+"px,"+i.top+"px)"}:{}};return e.createElement(oa,{style:(0,y.default)({},d()),status:s,onClick:l},e.createElement("div",{className:"title Bold"},e.createElement("div",{className:"name ellipsis"},o," ( "+p.length+" )"),e.createElement("div",{className:"operate"},e.createElement(Qe.default,{placement:"bottom",title:_l("\u7F16\u8F91")},e.createElement(Q.Z,{icon:"edit",className:"Gray_9e ThemeHoverColor3 Font16 pointer",onClick:function(){return r("edit")}})),e.createElement(_t,(0,y.default)({},a,{status:s})))),e.createElement("ul",null,p.filter(function(u){return!u.isDeleted}).map(function(u){var g=u.color,f=u.value;return e.createElement("li",null,n&&e.createElement("div",{className:"colorWrap",style:{backgroundColor:g}}),e.createElement("div",{className:"name ellipsis flex"},f))}),p.length>15&&e.createElement("li",{className:"more"},_l("\u66F4\u591A ..."))))};function ia(t){var a=t.projectId,o=t.appId,n=(0,e.useRef)(null),r=(0,Ee.Z)({createVisible:!1}),i=(0,F.Z)(r,2),s=i[0].createVisible,c=i[1],l=(0,Ee.Z)({editIndex:-1}),p=(0,F.Z)(l,2),d=p[0].editIndex,u=p[1],g=(0,e.useState)(!1),f=(0,F.Z)(g,2),h=f[0],E=f[1],w=(0,e.useState)([]),m=(0,F.Z)(w,2),I=m[0],T=m[1],x=(0,e.useState)([]),B=(0,F.Z)(x,2),N=B[0],S=B[1],Z=(0,e.useState)([]),k=(0,F.Z)(Z,2),v=k[0],b=k[1],W=(0,e.useState)(1),M=(0,F.Z)(W,2),H=M[0],j=M[1],P=(0,e.useState)(),A=(0,F.Z)(P,2),D=A[0],R=A[1],G=function(re){return Math.min(ea+Bn,((0,et.FW)(re)||[]).length*na+aa+Bn)},L=function(re){var le=n.current;if(!le)return[];var de=le.offsetWidth,ve=ta+Bn,be=de/ve,ie=re.slice(0,be),J=re.slice(be),K=ie.map(function(me,pe){return{top:0,left:pe*ve,y:G(me)}}),ue=function(){var pe=(0,en.groupBy)(K,"left");return(0,en.head)((0,en.sortBy)((0,en.keys)(pe).map(function(ge){return(0,en.maxBy)(pe[ge],"y")}),"y"))};J.forEach(function(me){var pe=ue(),ge=pe.left,Ie=pe.y;K.push({top:Ie,left:ge,y:Ie+G(me)})}),T(K)};(0,e.useEffect)(function(){O({status:1})},[]);var O=function(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},le=re.status;E(!0),Se.Z.getCollectionsByAppId({appId:o,status:le}).then(function(de){var ve=de.data,be=ve===void 0?[]:ve;S(be),b(be),L(be)}).finally(function(){E(!1)})},X=function(re){var le=v.concat(re);if(H===9){c({createVisible:!1});return}S(le),b(le),L(le),c({createVisible:!1})},q=function(re){var le=(0,y.default)({},v[d],re),de=Tn()(v,(0,Ce.default)({},d,{$set:le}));S(de),b(de),L(de),u({editIndex:-1})},ee=_.throttle(function(ae){O({name:ae,status:H})},200),se=function(){return h?e.createElement(xe.Z,null):(0,en.isEmpty)(v)?e.createElement("div",{className:"emptyHint Gray_9e Font14"},_l("\u6B64\u5E94\u7528\u4E0B\u8FD8\u6CA1\u6709\u6DFB\u52A0\u9009\u9879\u96C6")):v.map(function(re,le){return e.createElement(la,(0,y.default)({},re,{status:H,index:le,projectId:a,appId:o,pos:I[le],items:v,onClick:function(){return u({editIndex:le})},handleClick:function(ve){ve==="edit"&&u({editIndex:le})},updateList:function(ve){S(ve),b(ve),L(ve)}}))})};return e.createElement(e.Fragment,null,e.createElement(Le,{title:_l("\u9009\u9879\u96C6"),showSearch:!0,addBtnName:_l("\u65B0\u589E\u9009\u9879\u96C6"),extraElement:e.createElement(_n.Z,{border:!0,style:{width:160},menuStyle:{width:160},value:H,data:[{text:_l("\u542F\u7528"),value:1},{text:_l("\u505C\u7528"),value:9}],onChange:function(re){j(re),O({status:re})}}),handleSearch:function(re){if(R(re),_.trim(re)){var le=_.filter(N,function(de){return de.name.indexOf(_.trim(re))>-1});b(le),L(le)}else b(N),L(N)},handleAdd:function(){return c({createVisible:!0})}}),e.createElement(ra,{className:V()({emptyWrap:(0,en.isEmpty)(v)}),ref:n},se()),s&&e.createElement(qn.default,{projectId:a,appId:o,onOk:X,onCancel:function(){return c({createVisible:!1})}}),d>-1&&e.createElement(qn.default,(0,y.default)({},v[d],{appId:o,projectId:a,onOk:q,onCancel:function(){return u({editIndex:-1})}})))}var _i=C(11378),Dn=C(56697),qi=C(45142),nt=C(40987),sa=C(36164),tt=C(61511),ca=C(3378),at=C.n(ca),Oe=C(36021),da=(0,Y.Z)([`
  h3,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`],[`
  h3,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`]),pa=(0,Y.Z)([`
  width: 100%;
  overflow: auto;
  position: relative;
  h6 {
    padding-top: 24px;
  }
  .borTopLine {
    border-top: 1px solid #eaeaea;
    margin-top: 24px;
  }
  .publishAppCourse {
    font-weight: 600;
    margin-top: 20px;

    span {
      color: #2196f3;
      cursor: pointer;
      margin-left: 13px;
      display: inline-block;
    }
  }
  .fixedCon {
    line-height: 36px;
    background: rgba(230, 162, 60, 0.17);
    border-radius: 4px;
    margin-top: 10px;
    padding: 0 12px;
  }
  .editFixed {
    color: #2196f3;
    margin-top: 10px;
  }
  .con {
    margin: 20px 0 40px;
    ul {
      display: flex;
      li {
        text-align: center;
        margin-right: 100px;
        .imgCon {
          margin: 20px 0;
          height: 43px;
        }
      }
    }
  }
  .ant-switch {
    transform: scale(0.8);
  }
`],[`
  width: 100%;
  overflow: auto;
  position: relative;
  h6 {
    padding-top: 24px;
  }
  .borTopLine {
    border-top: 1px solid #eaeaea;
    margin-top: 24px;
  }
  .publishAppCourse {
    font-weight: 600;
    margin-top: 20px;

    span {
      color: #2196f3;
      cursor: pointer;
      margin-left: 13px;
      display: inline-block;
    }
  }
  .fixedCon {
    line-height: 36px;
    background: rgba(230, 162, 60, 0.17);
    border-radius: 4px;
    margin-top: 10px;
    padding: 0 12px;
  }
  .editFixed {
    color: #2196f3;
    margin-top: 10px;
  }
  .con {
    margin: 20px 0 40px;
    ul {
      display: flex;
      li {
        text-align: center;
        margin-right: 100px;
        .imgCon {
          margin: 20px 0;
          height: 43px;
        }
      }
    }
  }
  .ant-switch {
    transform: scale(0.8);
  }
`]),ua=(0,Y.Z)([`
  &::placeholder {
    color: #bdbdbd;
  }
`],[`
  &::placeholder {
    color: #bdbdbd;
  }
`]),ma=(0,Y.Z)([`
  &.ant-switch {
    width: 48px;
    height: 24px;
    line-height: 24px;
  }
  &.ant-switch-checked {
    background-color: #01ca83;
    .ant-switch-handle {
      left: calc(100% - 20px - 2px);
    }
  }
  .ant-switch-handle {
    width: 20px;
    height: 20px;
  }
`],[`
  &.ant-switch {
    width: 48px;
    height: 24px;
    line-height: 24px;
  }
  &.ant-switch-checked {
    background-color: #01ca83;
    .ant-switch-handle {
      left: calc(100% - 20px - 2px);
    }
  }
  .ant-switch-handle {
    width: 20px;
    height: 20px;
  }
`]),fa=z.ZP.div(da),ga=z.ZP.div(pa),ha=(0,z.ZP)(sa.Z)(ua),va=(0,z.ZP)(nt.Z)(ma),xa=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.toSetEnterpirse=function(){var r=n.props,i=r.projectId,s=r.appId;(0,Oe.T8)("/admin/workwxapp/"+i),n.setState({noIntegratedWechat:!1})},n.submitApply=function(){var r=n.props,i=r.projectId,s=r.appId,c=r.appName;tt.Z.applyWorkWXAlternativeApp({projectId:i,appId:s,appName:c}).then(function(l){l?alert(_l("\u63D0\u4EA4\u7533\u8BF7\u6210\u529F")):alert(_l("\u63D0\u4EA4\u7533\u8BF7\u5931\u8D25"),2)}),n.setState({integratedWechat:!1})},n.renderEnterpriseWechatModal=function(){var r=n.state,i=r.integratedWechat,s=r.noIntegratedWechat,c=n.props.appName;if(i)return e.createElement(Dn.Z,{wrapClassName:"addwechatModal",visible:i,width:608,onCancel:function(){return n.setState({integratedWechat:!1})},footer:null},e.createElement("div",{className:"modalContent flexColumn"},e.createElement("img",{className:"wechatPng",src:at()}),e.createElement("div",{className:"Font24 Blod mTop50"},_l("\u5C06\u6B64\u5E94\u7528\u6DFB\u52A0\u5230\u4F01\u4E1A\u5FAE\u4FE1\u5DE5\u4F5C\u53F0")),e.createElement("div",{className:"flexRow mTop30"},e.createElement("sapn",{className:" colorGray mRight18"},_l("\u5E94\u7528")),e.createElement("span",null,c)),e.createElement("div",{className:"submitBtn",onClick:n.submitApply},_l("\u63D0\u4EA4\u7533\u8BF7")),e.createElement("div",{className:"connectInfo mTop16"},_l("\u63D0\u4EA4\u540E\uFF0C\u987E\u95EE\u4F1A\u7535\u8BDD\u8054\u7CFB\u60A8\u5B8C\u6210\u5E94\u7528\u96C6\u6210,\u4E5F\u53EF\u4E3B\u52A8\u8054\u7CFB\u987E\u95EE \u8054\u7CFB\u7535\u8BDD\uFF1A400-665-6655"))));if(s)return e.createElement(Dn.Z,{wrapClassName:"addwechatModal",width:608,visible:s,onCancel:function(){return n.setState({noIntegratedWechat:!1})},footer:null},e.createElement("div",{className:"modalContent flexColumn"},e.createElement("img",{className:"wechatPng",src:at()}),e.createElement("div",{className:"Font24 Blod mTop50"},_l("\u8BF7\u5148\u914D\u7F6E\u4F01\u4E1A\u5FAE\u4FE1\u96C6\u6210")),e.createElement("div",{className:"mTop30 colorGray Font14"},_l("\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u65B9\u53EF\u5C06\u6B64\u5E94\u7528\u6DFB\u52A0\u5230\u4F01\u4E1A\u5FAE\u4FE1\u5DE5\u4F5C\u53F0")),e.createElement("div",{className:"settingBtn",onClick:n.toSetEnterpirse},_l("\u524D\u5F80\u8BBE\u7F6E"))))},n.publishSettings=function(r){var i=n.props,s=i.data,c=i.projectId,l=i.appId,p=i.onChangeData,d=s.pcDisplay,u=s.webMobileDisplay,g=s.appDisplay;p(r),fn.Z.publishSettings((0,y.default)({appId:l,projectId:c,pcDisplay:d,webMobileDisplay:u,appDisplay:g},r)).then(function(f){f.data?p(r):alert(_l("\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})},n.fixedApp=function(r,i){var s=n.props,c=s.projectId,l=s.appId,p=s.onChangeData,d=n.state.fixRemark;fn.Z.editFix({appId:l,projectId:c,fixed:r,fixRemark:r?d:void 0}).then(function(u){u&&(i&&alert(_l("\u4FDD\u5B58\u6210\u529F")),p({fixed:r,fixRemark:d}),n.setState({fixed:r,fixRemark:r?d:void 0}))})},n.state={type:0,saveLoading:!1,hasChange:!1,integratedWechat:!1,data:{},fixed:!1},n.saveRef=null,n}return(0,Xe.default)(a,[{key:"componentDidMount",value:function(){var n=this.props.data||{},r=n.fixRemark,i=n.fixed;this.setState({fixed:i,fixRemark:r})}},{key:"getWXProjectSettingInfo",value:function(){var n=this,r=this.props,i=r.projectId,s=r.appId;md.global.Config.IsLocal?window.open("/weixinAppCourse/"+i+"/"+s):tt.Z.getWXProjectSettingInfo({projectId:i,appId:s}).then(function(c){c&&c.status===1?n.setState({integratedWechat:!0}):n.setState({noIntegratedWechat:!0})})}},{key:"render",value:function(){var n=this,r=this.props,i=r.projectId,s=r.appId,c=r.data,l=c.appDisplay,p=c.webMobileDisplay,d=c.pcDisplay,u=this.state,g=u.fixRemark,f=u.fixed;return e.createElement(fa,null,e.createElement(ga,null,e.createElement(Le,{title:_l("\u53D1\u5E03")}),e.createElement("h6",{className:"Font15 Bold pTop0"},_l("\u53D1\u5E03\u5230\u7EC4\u7EC7\u5DE5\u4F5C\u53F0")),e.createElement("p",{className:"Gray_9 mTop12"},_l("\u8BBE\u7F6E\u7528\u6237\u5728\u54EA\u4E9B\u8BBE\u5907\u73AF\u5883\u4E0B\u53EF\u89C1\u6B64\u5E94\u7528\uFF0C\u7BA1\u7406\u5458\u548C\u5F00\u53D1\u8005\u5728PC\u7AEF\u59CB\u7EC8\u53EF\u89C1")),e.createElement("div",{className:"con"},e.createElement("ul",null,[1,2,3].map(function(h){var E=!1,w=["pcCon","webCon","appCon"][h-1];return h===1&&(E=d),h===2&&(E=p),h===3&&(E=l),w=E?w:w+"hover",e.createElement("li",{onClick:function(I,T){var x={};h===1&&(x={pcDisplay:!E}),h===2&&(x={webMobileDisplay:!E}),h===3&&(x={appDisplay:!E}),n.publishSettings(x)}},e.createElement("div",{className:V()("imgCon Hand publishSettingsImgCon "+w)}),e.createElement(nt.Z,{size:"small",checked:!E}),e.createElement("span",{className:"mLeft6 TxtMiddle Hand"},h===1?_l("PC\u7AEF"):h===2?_l("Web\u79FB\u52A8\u7AEF"):_l("App")))}))),(!md.global.SysSettings.hideWorkWeixin||!md.global.SysSettings.hideDingding)&&e.createElement("h6",{className:"Font15 Bold borTopLine"},_l("\u53D1\u5E03\u5230\u7B2C\u4E09\u65B9")),!md.global.SysSettings.hideWorkWeixin&&e.createElement("div",{className:"publishAppCourse"},_l("\u53D1\u5E03\u5230"),e.createElement("span",{className:"ThemeHoverColor2",onClick:function(){n.getWXProjectSettingInfo()}},_l("\u4F01\u4E1A\u5FAE\u4FE1\u5DE5\u4F5C\u53F0"),e.createElement(Q.Z,{icon:"external_collaboration",className:"mLeft10 Gray_9e"}))),!md.global.SysSettings.hideDingding&&e.createElement("div",{className:"publishAppCourse"},_l("\u53D1\u5E03\u5230"),e.createElement("span",{className:"ThemeHoverColor2",onClick:function(){window.open("/dingAppCourse/"+i+"/"+s)}},_l("\u9489\u9489\u5DE5\u4F5C\u53F0"),e.createElement(Q.Z,{icon:"external_collaboration",className:"mLeft10 Gray_9e"}))),e.createElement("h6",{className:"Font15 Bold borTopLine"},_l("\u5E94\u7528\u7EF4\u62A4")),e.createElement("p",{className:"Gray_9 mTop12 mBottom20"},_l("\u5E94\u7528\u5F00\u542F\u7EF4\u62A4\u72B6\u6001\u540E\uFF0C\u53EA\u6709\u7BA1\u7406\u5458\u548C\u5F00\u53D1\u8005\u53EF\u4EE5\u8BBF\u95EE\u5E94\u7528\u8FDB\u884C\u66F4\u65B0\u7EF4\u62A4\uFF0C\u5176\u4ED6\u6210\u5458\u65E0\u6CD5\u4F7F\u7528\u5E94\u7528")),e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow alignItemsCenter",style:{marginLeft:-4}},e.createElement(va,{size:"default",checked:f,onChange:function(E){return n.fixedApp(E)}}),f&&e.createElement("span",{className:"Gray_9e"}," ",_l("\u6B63\u5728\u7EF4\u62A4\u4E2D..."))),f&&e.createElement(e.Fragment,null,e.createElement("div",{className:"Font13 mBottom5 mTop24"},_l("\u7EF4\u62A4\u516C\u544A")),e.createElement(ha,{ref:function(E){return n.appFixTextarea=E},id:"appFixTextarea",value:g,className:"Font13",placeholder:_l("\u7B80\u77ED\u8BF4\u660E\u7EF4\u62A4\u539F\u56E0\uFF0C\u9884\u8BA1\u6062\u590D\u65F6\u95F4..."),onChange:function(E){n.setState({fixRemark:E})}}),e.createElement(Ze.ZP,{className:"mTop20",onClick:function(){return n.fixedApp(!0,!0)}},_l("\u4FDD\u5B58"))))),this.renderEnterpriseWechatModal())}}]),a}(e.Component);const Ca=xa;var Ea=C(46593),rt=C.n(Ea),Zn=C(57853),Ge=C(6100),Re=C(25273),ce=C(49365),Ia=C(30381),Be=C.n(Ia),ba=(0,Y.Z)([`
  height: calc(100% - 53px);
`],[`
  height: calc(100% - 53px);
`]),wa=(0,Y.Z)([`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
  .operateIcon {
    opacity: 0;
  }
  &:hover {
    background: #f5f5f5;
    .operateIcon {
      opacity: 1;
    }
  }
`],[`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
  .operateIcon {
    opacity: 0;
  }
  &:hover {
    background: #f5f5f5;
    .operateIcon {
      opacity: 1;
    }
  }
`]),ka=(0,Y.Z)([""],[""]),Aa=(0,Y.Z)([`
  padding: 0 142px 0 12px;
  height: 40px;
  &:hover {
    background: inherit;
  }
`],[`
  padding: 0 142px 0 12px;
  height: 40px;
  &:hover {
    background: inherit;
  }
`]),ya=(0,Y.Z)([`
  height: calc(100% - 60px) !important;
  overflow-y: auto;
`],[`
  height: calc(100% - 60px) !important;
  overflow-y: auto;
`]),Na=(0,Y.Z)([`
  height: 100%;
`],[`
  height: 100%;
`]),Sa=(0,Y.Z)([`
  display: flex;
  align-items: center;
`],[`
  display: flex;
  align-items: center;
`]),Ta=(0,Y.Z)([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px) !important;
  .emptyIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    border-radius: 130px;
    background: #f5f5f5;
    .icon {
      color: #bdbdbd;
      font-size: 66px;
    }
  }
`],[`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px) !important;
  .emptyIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    border-radius: 130px;
    background: #f5f5f5;
    .icon {
      color: #bdbdbd;
      font-size: 66px;
    }
  }
`]),Ba=z.ZP.div(ba),ot=z.ZP.div(wa),Da=z.ZP.div(ka),Za=(0,z.ZP)(ot)(Aa),La=(0,z.ZP)(Re.Z)(ya),Ra=z.ZP.div(Na),lt=z.ZP.div(Sa),Fa=z.ZP.div(Ta),it=[{name:_l("\u5E94\u7528\u9879\u540D\u79F0"),flex:!0},{name:_l("\u7C7B\u578B"),width:140},{name:_l("\u5220\u9664\u8005"),width:150},{name:_l("\u5220\u9664\u65F6\u95F4"),width:140}];function st(t){var a=t.appId,o=t.projectId,n=t.onCancel,r=(0,e.useRef)({}),i=(0,e.useState)(!0),s=(0,F.Z)(i,2),c=s[0],l=s[1],p=(0,e.useState)(1),d=(0,F.Z)(p,2),u=d[0],g=d[1],f=(0,e.useState)(),h=(0,F.Z)(f,2),E=h[0],w=h[1],m=(0,e.useState)([]),I=(0,F.Z)(m,2),T=I[0],x=I[1],B=(0,e.useState)(),N=(0,F.Z)(B,2),S=N[0],Z=N[1],k=T.map(function(A){return[[e.createElement(Ge.Z,{url:A.iconUrl.startsWith("http")?A.iconUrl:md.global.FileStoreConfig.pubHost.replace(/\/$/,"")+"/customIcon/"+A.iconUrl+".svg",fill:"#2196f3",size:34,className:"InlineBlock"}),e.createElement("span",{className:"mLeft20 ellipsis",style:{maxWidth:250}},A.name)],e.createElement("span",{className:"ellipsis"},A.type===0?_l("\u5DE5\u4F5C\u8868"):_l("\u81EA\u5B9A\u4E49\u9875\u9762")),[e.createElement(Zn.Z,{projectId:o,className:"cellUserHead",user:{userHead:A.deletePerson.avatar,accountId:A.deletePerson.accountId},appId:a,size:24}),e.createElement("span",{className:"mLeft8 ellipsis"},A.deletePerson.fullname||A.deletePerson.fullName)],e.createElement("span",{className:"Gray_9e"},Be()(A.deleteTime).format("YYYY-MM-DD HH:mm:ss"))]});function v(A,D){r.current["pending_"+A]=D}function b(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};l(!0),U().isUndefined(A.keyword)||(x([]),g(1),w(!1),Z(A.keyword)),A.pageIndex&&g(A.pageIndex),ce.Z.getAppItemRecoveryList({keyword:U().isUndefined(A.keyword)?S:A.keyword,pageIndex:A.pageIndex||u,pageSize:14,projectId:o,appId:a}).then(function(D){D.length?x(function(R){return R.concat(D)}):w(!0),l(!1)})}function W(A){var D=T[A];r.current["pending_"+D.id]||(v(D.id,!0),ce.Z.appItemRecovery({id:D.id,projectId:o,appId:a}).then(function(R){if(R)x(function(G){return G.filter(function(L){return L.id!==D.id})}),alert(_l("\u6062\u590D\u6210\u529F")),v(D.id,!1),U().isFunction(window.__worksheetLeftReLoad)&&window.__worksheetLeftReLoad();else return rt().reject()}).catch(function(R){alert(_l("\u6062\u590D\u5931\u8D25"),3),v(D.id,!1)}))}function M(A){var D=T[A];Ae.Z.confirm({title:e.createElement("span",{style:{color:"#f44336"}},_l('\u5C06\u5F7B\u5E95\u5220\u9664\u5DE5\u4F5C\u8868"%0"',D.name)),buttonType:"danger",description:_l("\u5F7B\u5E95\u5220\u9664\u8BE5\u6570\u636E\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002"),okText:_l("\u5F7B\u5E95\u5220\u9664"),onOk:function(){ce.Z.removeWorkSheetForApp({appId:a,projectId:o,appSectionId:D.appSectionId,workSheetId:D.id,type:D.type,isPermanentlyDelete:!0}).then(function(G){if(G)x(function(L){return L.filter(function(O){return O.id!==T[A].id})}),alert(_l("\u5F7B\u5E95\u5220\u9664\u6210\u529F"));else return rt().reject()}).catch(function(G){alert(_l("\u5F7B\u5E95\u5220\u9664\u5931\u8D25"),3)})}})}function H(A){b({pageIndex:1,keyword:A})}function j(){!c&&!E&&b({pageIndex:u+1})}(0,e.useEffect)(b,[]);var P=(0,e.useCallback)(U().debounce(H,300),[]);return e.createElement(e.Fragment,null,e.createElement(Le,{title:_l("\u56DE\u6536\u7AD9\uFF08\u5E94\u7528\u9879\uFF09"),description:_l("\u53EF\u6062\u590D%0\u5929\u5185\u5220\u9664\u7684\u5E94\u7528\u9879",md.global.SysSettings.appItemRecycleDays),showSearch:!0,handleSearch:U().debounce(function(A){A?P(A):H(A)},500)}),c&&!k.length&&e.createElement(xe.Z,{className:"mTop80"}),!c&&!k.length&&e.createElement(Fa,null,e.createElement("div",{className:"emptyIcon"},e.createElement("i",{className:"icon icon-custom_-page_delete"})),e.createElement("div",{className:"Font17 Gray_9e mTop16"},S?_l("\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u7ED3\u679C"):_l("\u56DE\u6536\u7AD9\u6682\u65E0\u5185\u5BB9"))),!!k.length&&e.createElement(Ba,null,!!k.length&&e.createElement(Da,null,e.createElement(Za,null,it.map(function(A,D){return e.createElement(lt,{key:D,className:V()("Font14 Gray_75",{flex:A.flex}),style:{width:A.width}},A.name)}))),e.createElement(La,{onScrollEnd:j},e.createElement(Ra,null,!!k.length&&k.map(function(A,D){return e.createElement(ot,{key:D},it.map(function(R,G){return e.createElement(lt,{key:G,className:R.flex?"flex":"",style:{width:R.width}},A[G])}),e.createElement("span",{"data-tip":_l("\u6062\u590D"),className:"tip-bottom mLeft40 mRight25"},e.createElement("i",{className:"operateIcon icon icon-restart Font14 Gray_9e Hand",onClick:function(){return W(D)}})),e.createElement("span",{"data-tip":_l("\u5F7B\u5E95\u5220\u9664"),className:"tip-bottom mRight35"},e.createElement("i",{className:"operateIcon icon icon-trash Font16 Gray_9e Hand",onClick:function(){return M(D)}})))}),c&&!!k.length&&e.createElement(xe.Z,{className:"mTop20"})))))}st.propTypes={appId:Te.string,projectId:Te.string};var ct=C(66215),bn=C(98452),Wa=(0,Y.Z)([`
  .prompt {
    width: 783px;
    height: 33px;
    line-height: 33px;
    background: #fbefe0;
    border-radius: 4px 4px 4px 4px;
    padding-left: 14px;
    margin-bottom: 16px;
  }
  .recoverAction {
    width: 783px;
    justify-content: space-between;
    align-items: center;
  }
`],[`
  .prompt {
    width: 783px;
    height: 33px;
    line-height: 33px;
    background: #fbefe0;
    border-radius: 4px 4px 4px 4px;
    padding-left: 14px;
    margin-bottom: 16px;
  }
  .recoverAction {
    width: 783px;
    justify-content: space-between;
    align-items: center;
  }
`]),Qa=z.ZP.div(Wa);function ja(t){var a=t.appId,o=t.data,n=o===void 0?{}:o,r=n.sourceType,i=n.isPassword,s=n.isLock,c=n.permissionType,l=!s&&i,p=r===1,d=c===Ne.lt.POSSESS_ROLE,u=function(){return(0,Oe.T8)("/app/"+a)},g=(0,e.useState)(l),f=(0,F.Z)(g,2),h=f[0],E=f[1],w=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"prompt"},_l("\u5F53\u524D\u5E94\u7528\u4E3A\u89E3\u9501\u72B6\u6001")),e.createElement("div",{className:"flexRow recoverAction"},e.createElement("div",null,e.createElement(Ze.ZP,{onClick:function(){(0,bn.gC)({appId:a,sourceType:r,isPassword:i,isOwner:d,isLock:s,refreshPage:u})}},_l("\u6062\u590D\u9501\u5B9A")),d&&e.createElement("span",{className:"ThemeColor Hand mLeft20",onClick:function(){return(0,bn.bF)({appId:a,refreshPage:u})}},_l("\u4FEE\u6539\u5E94\u7528\u9501\u5BC6\u7801")))))};return e.createElement(Qa,null,e.createElement(Le,{title:_l("\u9501\u5B9A"),description:_l("\u5E94\u7528\u9501\u5B9A\u72B6\u6001\u4E0B\u6240\u6709\u7528\u6237\uFF08\u5305\u62EC\u7BA1\u7406\u5458\uFF09\u4E0D\u80FD\u67E5\u770B\u3001\u4FEE\u6539\u5E94\u7528\u7684\u914D\u7F6E\uFF0C\u7528\u6237\u9A8C\u8BC1\u5BC6\u7801\u540E\u53EF\u89E3\u9501\u5176\u5728\u5E94\u7528\u4E0B\u7684\u64CD\u4F5C\u6743\u9650\u3002\u9501\u5B9A\u5E94\u7528\u9700\u9A8C\u8BC1\u8EAB\u4EFD")}),e.createElement("div",{className:"mBottom20"},e.createElement(ct.Z,{disabled:h&&!(p&&d),checked:h,onClick:function(I){I?(0,bn.kS)({appId:a,refreshPage:u}):(0,bn.HP)({appId:a,refreshPage:u})}}),h&&e.createElement("span",{className:"Gray_9e mLeft15 TxtMiddle"},_l("\u5F00\u542F"))),l&&w())}var dt=C(42723),$i=C(48659),pt=C(1825),Ha=(0,Y.Z)([`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .con {
    width: `,`;
    height: `,`;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f5f5f5;
    text-align: center;
    .icon {
      font-size: 36px;
      color: #bdbdbd;
    }
    .emptyTxt {
      margin-top: 12px;
      font-size: 15px;
      color: #bdbdbd;
    }
  }
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .con {
    width: `,`;
    height: `,`;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f5f5f5;
    text-align: center;
    .icon {
      font-size: 36px;
      color: #bdbdbd;
    }
    .emptyTxt {
      margin-top: 12px;
      font-size: 15px;
      color: #bdbdbd;
    }
  }
`]),Pa=z.ZP.div(Ha,function(t){return t.radiusSize?t.radiusSize+"px":"100px"},function(t){return t.radiusSize?t.radiusSize+"px":"100px"});function Ln(t){var a=t.emptyTxt,o=t.icon,n=t.radiusSize,r=t.emptyTxtClassName,i=t.iconClassName;return e.createElement(Pa,{radiusSize:n},e.createElement("div",{className:"con"},e.createElement(Q.Z,{icon:o||"sp_assignment_white",className:i})),e.createElement("div",{className:""+r},a||_l("\u6682\u65E0\u4FE1\u606F")))}var Ga=C(61987),Ma=C(6503),Ua=(0,Y.Z)([`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 24px;
`],[`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 24px;
`]),Oa=(0,Y.Z)([`
  flex: 1;
  height: calc(100% - 50px);
  background-color: #f7f7f7;
  padding: 16px 0;
  overflow-y: auto;
`],[`
  flex: 1;
  height: calc(100% - 50px);
  background-color: #f7f7f7;
  padding: 16px 0;
  overflow-y: auto;
`]),Va=(0,Y.Z)([`
  font-size: 13px;
  color: #9e9e9e;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 24px;
  .icon {
    font-size: 18px;
    color: #757575;
  }
  .icon.icon-arrow-down {
    color: #9e9e9e;
    font-size: 8px;
    width: 18px;
    display: inline-block;
    text-align: center;
  }
  .icon-cancel1 {
    display: none;
  }
  .selectUser,
  .selectDate {
    padding: 8px 12px;
    background: #fff;
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    &:hover {
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
      .icon-cancel1 {
        display: inline-block;
      }
      .icon-arrow-down {
        display: none;
      }
    }
  }
  .selectUser {
    margin-right: 8px;
  }
  .selectConText {
    margin: 0 4px;
  }
  .selectLight {
    color: #2196f3;
    .icon {
      color: #2196f3;
    }
  }
  .left {
    display: flex;
  }
`],[`
  font-size: 13px;
  color: #9e9e9e;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 24px;
  .icon {
    font-size: 18px;
    color: #757575;
  }
  .icon.icon-arrow-down {
    color: #9e9e9e;
    font-size: 8px;
    width: 18px;
    display: inline-block;
    text-align: center;
  }
  .icon-cancel1 {
    display: none;
  }
  .selectUser,
  .selectDate {
    padding: 8px 12px;
    background: #fff;
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    &:hover {
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
      .icon-cancel1 {
        display: inline-block;
      }
      .icon-arrow-down {
        display: none;
      }
    }
  }
  .selectUser {
    margin-right: 8px;
  }
  .selectConText {
    margin: 0 4px;
  }
  .selectLight {
    color: #2196f3;
    .icon {
      color: #2196f3;
    }
  }
  .left {
    display: flex;
  }
`]),za=(0,Y.Z)([`
  border-bottom: 1px solid #eaeaea;
  padding: 16px;
  background-color: #fff;
  margin: 0 24px 16px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.08);
  .row {
    justify-content: space-between;
    font-size: 13px;
    .avatar {
      width: 20px;
      height: 20px;
      display: inline-block;
      border-radius: 50%;
      vertical-align: middle;
    }
    .name,
    .action,
    .date {
      color: #9e9e9e;
    }
  }
  .actContent {
    color: #333;
    padding-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .changeBefore {
      color: #bdbdbd;
      text-decoration: line-through;
    }
  }
`],[`
  border-bottom: 1px solid #eaeaea;
  padding: 16px;
  background-color: #fff;
  margin: 0 24px 16px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.08);
  .row {
    justify-content: space-between;
    font-size: 13px;
    .avatar {
      width: 20px;
      height: 20px;
      display: inline-block;
      border-radius: 50%;
      vertical-align: middle;
    }
    .name,
    .action,
    .date {
      color: #9e9e9e;
    }
  }
  .actContent {
    color: #333;
    padding-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .changeBefore {
      color: #bdbdbd;
      text-decoration: line-through;
    }
  }
`]),Ya=z.ZP.div(Ua),Ja=z.ZP.div(Oa),Ka=z.ZP.div(Va),Xa=z.ZP.div(za),_a={6:_l("\u7528\u5907\u4EFD\u8FD8\u539F\u4E86\u65B0\u5E94\u7528"),1:_l("\u5C06\u5E94\u7528\u5907\u4EFD\u4E3A"),2:_l("\u5C06\u5E94\u7528\u8FD8\u539F\u4E3A"),3:_l("\u5220\u9664\u4E86\u5907\u4EFD"),4:_l("\u91CD\u547D\u540D\u4E86\u5907\u4EFD"),5:_l("\u4E0B\u8F7D\u4E86\u5907\u4EFD")},qa=10;function $a(t){var a=t.appId,o=t.projectId,n=t.onClose,r=n===void 0?function(){}:n,i=(0,e.useRef)(),s=(0,Ee.Z)({selectUser:void 0,selectDate:{visible:!1,range:void 0},pageIndexs:{newLogIndex:1,oldLogIndex:0},isLoading:!1,pageIndex:1,actLogList:[]}),c=(0,F.Z)(s,2),l=c[0],p=l.selectUser,d=l.selectDate,u=l.isLoading,g=l.pageIndex,f=l.actLogList,h=l.startTime,E=l.endTime,w=l.total,m=c[1];(0,e.useEffect)(function(){I()},[]);var I=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=k.pageIndex,b=v===void 0?1:v,W=(0,dt.Z)(k,["pageIndex"]);u||(m({isLoading:!0}),ce.Z.pageGetBackupRestoreOperationLog((0,y.default)({pageIndex:b||1,pageSize:qa,projectId:o,appId:a,isBackup:!1,startTime:h,endTime:E,accountId:p&&!U().isEmpty(p)&&p[0].accountId},W)).then(function(M){var H=M.list,j=H===void 0?[]:H,P=M.total,A=b===1?j:f.concat(j);m({isLoading:!1,actLogList:A,pageIndex:b,total:P})}))},T=function(k){m({selectUser:k,pageIndex:1}),I({accountId:k[0].accountId})},x=function(){var k=["user-sub","user-undefined"];(0,Ga.ZP)(i.current,{hidePortalCurrentUser:!0,selectRangeOptions:!1,includeSystemField:!0,prefixOnlySystemField:!0,rect:i.current.getBoundingClientRect(),tabType:3,appId:a,showMoreInvite:!1,isTask:!1,filterAccountIds:p?p.map(function(v){return v.accountId}).concat(k):[].concat(k),offset:{top:2},zIndex:10001,SelectUserSettings:{unique:!0,projectId:o,filterAccountIds:p?p.map(function(v){return v.accountId}).concat(k):[].concat(k),callback:T},selectCb:T})},B=function(k){k.stopPropagation(),m({selectUser:void 0,pageIndex:1}),I({accountId:void 0,pageIndex:1})},N=function(){!u&&f.length<w&&I({pageIndex:g+1})},S=function(k){k.stopPropagation(),m({selectDate:{visible:d.visible,range:void 0},pageIndex:1,startTime:void 0,endTime:void 0}),I({pageIndex:1,startTime:void 0,endTime:void 0})};return e.createElement(e.Fragment,null,e.createElement(Ya,null,e.createElement("div",{className:"Font17 bold flex"},_l("\u64CD\u4F5C\u65E5\u5FD7")),e.createElement(Q.Z,{icon:"close",className:"Hand Font18",onClick:r})),e.createElement(Ja,null,e.createElement(Re.Z,{onScrollEnd:N},e.createElement(Ka,null,e.createElement("div",{className:"left"},e.createElement("span",{className:V()({selectLight:p},"selectUser"),onClick:x,ref:i},e.createElement(Q.Z,{icon:"person"}),e.createElement("span",{className:"selectConText"},p?p[0].fullname:_l("\u64CD\u4F5C\u8005")),e.createElement(Q.Z,{icon:"arrow-down",style:p?{}:{display:"inline-block"}}),p&&e.createElement(Q.Z,{onClick:B,icon:"cancel1"}))),e.createElement(Ue.Z,{popupVisible:d.visible,onPopupVisibleChange:function(k){return m({selectDate:(0,y.default)({},d,{visible:k})})},action:["click"],popupAlign:{points:["tr","br"]},popup:e.createElement(Ma.Z,{onChange:function(k){m({selectDate:{visible:!1,range:k.value?(0,y.default)({},k,{value:[k.value[0],k.value[1]]}):void 0},startTime:k.value?k.value[0]:void 0,endTime:k.value?k.value[1]:void 0,pageIndex:1}),I({startTime:k.value?Be()(k.value[0]).format("YYYY-MM-DD HH:mm:ss"):void 0,endTime:k.value?Be()(k.value[1]).format("YYYY-MM-DD HH:mm:ss"):void 0,pageIndex:1})}})},e.createElement("span",{className:(d.range?"selectLight":"")+" selectDate"},e.createElement(Q.Z,{icon:"event"}),d.range&&e.createElement("span",{className:"selectConText"},d.range.label),d.range&&e.createElement(Q.Z,{icon:"arrow-down"}),d.range&&e.createElement(Q.Z,{icon:"cancel1",onClick:S})))),U().isEmpty(f)?e.createElement(Ln,{icon:"sp_assignment_white",radiusSize:100,iconClassName:"Font36",emptyTxt:_l("\u6682\u65E0\u65E5\u5FD7\u4FE1\u606F"),emptyTxtClassName:"Font15 mTop12"}):f.map(function(Z){var k=Z.id,v=Z.operator,b=Z.operationType,W=Z.backupFileName,M=Z.oldBackupFileName,H=Z.operationDateTime,j=Z.rowTotal,P=Z.appItemTotal;return e.createElement(Xa,{key:k},e.createElement("div",{className:"flexRow row mBottom10"},e.createElement("img",{src:v.avatar,className:"avatar mRight8"}),e.createElement("span",{className:"Font12 mRight5"},v.fullname),e.createElement("span",{className:"action flex"},(b||b===0)&&_a[Z.operationType]),e.createElement("div",{className:"date"},Be()(H).format("YYYY-MM-DD HH:mm:ss"))),e.createElement("div",{className:"actContent"},e.createElement("span",{className:V()("mRight6",{changeBefore:b===4})},b===4?M:W),b===4&&e.createElement("span",{className:"renameContent"},W)),P||j?e.createElement("div",{className:"Gray_9e"},e.createElement("span",{className:"mRight16"}," ",P?_l("%0\u4E2A\u5E94\u7528\u9879",P):""),e.createElement("span",null,j?_l("%0\u884C\u8BB0\u5F55",j):"")):"")}))))}var es=C(59768),Rn=C(82891),er=C(52945),nr=C.n(er),tr=C(9122),je=C(20845),ar=C(73820),rr=C(96841),or=(0,Y.Z)([`
  p {
    margin-bottom: 0;
  }
`],[`
  p {
    margin-bottom: 0;
  }
`]),lr=z.ZP.div(or),ir=[{type:"appItem",txt:_l("\u8FD8\u539F\u5E94\u7528\u9879")},{type:"data",txt:_l("\u8FD8\u539F\u6570\u636E")}],sr=function(a){var o=a.containData,n=a.operationDateTime,r=a.appItemTotal,i=a.rowTotal,s=a.validLimit,c=a.currentValid,l=a.handleRestore,p=l===void 0?function(){}:l,d=a.onCancel,u=d===void 0?function(){}:d,g=(0,Ee.Z)({appItemChecked:!0,dataChecked:!1,backupCurrentVersion:!1}),f=(0,F.Z)(g,2),h=f[0],E=h.appItemChecked,w=h.dataChecked,m=h.backupCurrentVersion,I=f[1];return e.createElement(lr,null,e.createElement("div",{className:"flexRow mBottom50"},ir.filter(function(T){return o?!0:T.type==="appItem"}).map(function(T,x){return e.createElement("div",{key:x,className:V()({mLeft80:T.type==="data"})},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(je.Z,{disabled:T.type==="appItem",checked:T.type==="appItem"?E:w,text:T.txt,onClick:function(N){return I((0,Ce.default)({},T.type+"Checked",!N))}}),T.type==="data"&&e.createElement(hn.Z,null)),e.createElement("div",{className:"Font12 Gray_9e pLeft24"},T.type==="appItem"&&r?_l("\u5171\u6709 %0 \u4E2A\u5E94\u7528\u9879",r):T.type==="data"?_l("\u5171\u6709 %0 \u884C\u8BB0\u5F55",i):""))})),e.createElement("p",null,"- ",_l("\u5728 %0 \u4E4B\u540E\u6240\u6709\u914D\u7F6E\u76F8\u5173\u7684\u66F4\u6539\u90FD\u5C06\u4E22\u5931\uFF0C\u5EFA\u8BAE\u52FE\u9009\u5DE6\u4E0B\u89D2\u8FD8\u539F\u524D\u5907\u4EFD\u5F53\u524D\u7248\u672C",Be()(n).format("YYYY-MM-DD"))),o&&w&&e.createElement(e.Fragment,null,e.createElement("p",null,"- ",_l("\u8FD8\u539F\u64CD\u4F5C\u5C06\u589E\u91CF\u8986\u76D6\u6570\u636E\u4E14\u4E0D\u53EF\u9006\uFF0C\u8BF7\u5728\u64CD\u4F5C\u524D\u8FDB\u884C\u5907\u4EFD\u4EE5\u786E\u4FDD\u6570\u636E\u5B89\u5168"))),e.createElement("div",{className:"flexRow alignItemsCenter mTop24"},e.createElement(je.Z,{text:_l("\u8FD8\u539F\u524D\u5907\u4EFD\u5F53\u524D\u7248\u672C")+(w?_l("(\u540C\u65F6\u5907\u4EFD\u6570\u636E)"):""),checked:m,onClick:function(x){if(s!==-1&&c>=s){alert("\u5907\u4EFD\u6587\u4EF6\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u5347\u7EA7\u65D7\u8230\u7248\u53EF\u4EE5\u65E0\u9650\u5907\u4EFD",3);return}I({backupCurrentVersion:!x})}}),e.createElement("div",{className:"flex TxtRight"},e.createElement(Ze.ZP,{type:"link",onClick:u},_l("\u53D6\u6D88")),e.createElement(Ze.ZP,{type:"primary",onClick:function(){return p({backupCurrentVersion:m,containData:w})}},_l("\u8FD8\u539F")))))};function cr(t){var a=t.visible,o=t.appId,n=t.projectId,r=t.validLimit,i=t.currentValid,s=t.changeRestoreAppVisible,c=s===void 0?function(){}:s,l=t.actCurrentFileInfo,p=l===void 0?{}:l,d=t.getList,u=d===void 0?function(){}:d,g=function(h){c();var E=h.backupCurrentVersion,w=h.containData;tr.Z.confirm({onOk:function(){var I={projectId:n,appId:o,id:p.id,autoEndMaintain:!1,backupCurrentVersion:E,isRestoreNew:!1,containData:w};ce.Z.restore(I).then(function(T){T&&(0,Oe.T8)("/app/"+o)})}})};return e.createElement(e.Fragment,null,e.createElement(Ae.Z,{visible:a,title:_l('\u8FD8\u539F\u5907\u4EFD "%0"',p.backupFileName),className:"restoreAppDialog",overlayClosable:!1,onCancel:c,footer:null},e.createElement(sr,(0,y.default)({validLimit:r,currentValid:i},p,{handleRestore:function(h){return g(h)},onCancel:c}))))}const dr=(0,rr.$j)(function(t){var a=t.appPkg;return{appPkg:a}},function(t){return{syncAppDetail:function(o){return t((0,ar.E6)(o))}}})(cr);var ns=C(67272),he=C(51024),pr=(0,Y.Z)([`
  display: flex;
  overflow: hidden;
  .backupFileName {
    display: inline-block;
    font-weight: 600;
  }
  .input {
    border: none;
    border-bottom: 2px solid #2196f3;
    padding: 4px 0;
  }
  .ant-input:focus,
  .ant-input-focused {
    box-shadow: unset;
  }
  .editIcon {
    display: inline-block;
    &.hidden {
      display: none !important;
    }
  }
`],[`
  display: flex;
  overflow: hidden;
  .backupFileName {
    display: inline-block;
    font-weight: 600;
  }
  .input {
    border: none;
    border-bottom: 2px solid #2196f3;
    padding: 4px 0;
  }
  .ant-input:focus,
  .ant-input-focused {
    box-shadow: unset;
  }
  .editIcon {
    display: inline-block;
    &.hidden {
      display: none !important;
    }
  }
`]),ur=z.ZP.div(pr);function mr(t){var a=t.actCurrentFileInfo,o=a===void 0?{}:a,n=t.projectId,r=t.appId,i=(0,e.useState)(!1),s=(0,F.Z)(i,2),c=s[0],l=s[1],p=(0,e.useState)(o.backupFileName||""),d=(0,F.Z)(p,2),u=d[0],g=d[1];return(0,e.useEffect)(function(){g(o.backupFileName)},[o]),e.createElement(ur,null,!c&&e.createElement("span",{className:"backupFileName ellipsis"},u),c&&e.createElement(he.default,{className:"input flex",value:u,onChange:function(h){var E=h.target.value.trim();g(E)},onBlur:function(){if($(".editIcon").removeClass("hidden"),l(!1),!u)return g(o.backupFileName);u!==o.backupFileName&&ce.Z.renameBackupFileName({projectId:n,appId:r,id:o.id,fileName:u,fileOldName:o.backupFileName}).then(function(h){h?(alert(_l("\u4FEE\u6539\u6210\u529F")),g(u),t.updateFileList((0,y.default)({},o,{backupFileName:u}))):(alert(_l("\u4FEE\u6539\u5931\u8D25"),2),g(o.backupFileName))})},onFocus:function(){$(".editIcon").addClass("hidden")}}),e.createElement("span",{className:"editIcon",onClick:function(h){setTimeout(function(){$(".input").focus()},50),h.stopPropagation(),l(!0),$(".editIcon").addClass("hidden")}},e.createElement(Q.Z,{icon:"edit",className:"Hand mLeft4 iconEdit Gray_9e"})))}var ne=C(15577),fr=C(31628),tn=C(77863),gr=(0,Y.Z)([`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .con {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f5f5f5;
    text-align: center;
    .icon {
      font-size: 36px;
      color: #bdbdbd;
      line-height: 100px;
    }
  }
  .emptyTxt {
    margin-top: 12px;
    font-size: 15px;
    color: #bdbdbd;
  }
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .con {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f5f5f5;
    text-align: center;
    .icon {
      font-size: 36px;
      color: #bdbdbd;
      line-height: 100px;
    }
  }
  .emptyTxt {
    margin-top: 12px;
    font-size: 15px;
    color: #bdbdbd;
  }
`]),hr=(0,Y.Z)([`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  .name,
  .backupType,
  .backupTime,
  .operator,
  .size,
  .status,
  .action {
    padding-left: 10px;
  }
  .backupType,
  .operator,
  .status {
    width: 90px;
  }
  .size,
  .action {
    width: 130px;
  }
  .backupTime {
    width: 160px;
  }
  .header,
  .row {
    border-bottom: 1px solid #dddddd;
    .actionContent {
      display: none;
    }
    .icon-edit {
      display: none !important;
    }
    .order {
      transform: scale(0.8);
      margin-left: 4px;
    }
  }
  .header {
    height: 40px;
  }
  .row {
    height: 60px;
    &:hover {
      background: #f5f5f5;
      .actionContent {
        display: block;
      }
      .icon-edit {
        display: inline-block !important;
      }
    }
    .warningColor {
      color: #ff9a2d;
    }
  }
`],[`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  .name,
  .backupType,
  .backupTime,
  .operator,
  .size,
  .status,
  .action {
    padding-left: 10px;
  }
  .backupType,
  .operator,
  .status {
    width: 90px;
  }
  .size,
  .action {
    width: 130px;
  }
  .backupTime {
    width: 160px;
  }
  .header,
  .row {
    border-bottom: 1px solid #dddddd;
    .actionContent {
      display: none;
    }
    .icon-edit {
      display: none !important;
    }
    .order {
      transform: scale(0.8);
      margin-left: 4px;
    }
  }
  .header {
    height: 40px;
  }
  .row {
    height: 60px;
    &:hover {
      background: #f5f5f5;
      .actionContent {
        display: block;
      }
      .icon-edit {
        display: inline-block !important;
      }
    }
    .warningColor {
      color: #ff9a2d;
    }
  }
`]),vr=z.ZP.div(gr),xr=z.ZP.div(hr),Cr=[{label:_l("\u7CFB\u7EDF\u9ED8\u8BA4\u6570\u636E\u5E93"),value:""}];function Er(t){var a=t.appId,o=t.projectId,n=t.currentValid,r=t.validLimit,i=t.permissionType,s=t.backupInfo,c=s===void 0?{}:s,l=t.getList,p=l===void 0?function(){}:l,d=(0,Ee.Z)({isLoading:!0,fileList:[],pageIndex:1,total:0,orderType:0,actCurrentFileInfo:I,restoreAppVisible:T,appDetail:x,token:B,DBInstancesDialog:N,dataDBInstances:S,restoreItem:Z,dbInstanceId:void 0}),u=(0,F.Z)(d,2),g=u[0],f=g.isLoading,h=g.fileList,E=g.pageIndex,w=g.total,m=g.orderType,I=g.actCurrentFileInfo,T=g.restoreAppVisible,x=g.appDetail,B=g.token,N=g.DBInstancesDialog,S=g.dataDBInstances,Z=g.restoreItem,k=g.dbInstanceId,v=u[1];(0,e.useEffect)(function(){v(c)},[c]);var b=function(){ce.Z.getApps({appIds:[a]}).then(function(L){var O=L.token;v({token:O})})},W=function(L){b(),fn.Z.getApp({appId:a}).then(function(O){v({appDetail:O})}),v({actCurrentFileInfo:L,restoreAppVisible:!0})},M=function(L,O){var X=L||Z,q={projectId:o,appId:a,id:X.id,autoEndMaintain:!1,backupCurrentVersion:!1,isRestoreNew:!0,dbInstanceId:O};ce.Z.restore(q).then(function(ee){ee?p({pageIndex:1}):alert(_l("\u8FD8\u539F\u5931\u8D25"),2)})},H=function(L){Ae.Z.confirm({width:500,className:"restoreNewAppDialog",title:_l("\u8FD8\u539F\u4E3A\u65B0\u5E94\u7528"),description:e.createElement(e.Fragment,null,e.createElement("div",{className:"mBottom10"},_l("\u786E\u5B9A\u5C06\u5907\u4EFD\u6587\u4EF6\u201C%0\u201D\u8FD8\u539F\u4E3A\u4E00\u4E2A\u65B0\u7684\u5E94\u7528\u5417\uFF1F",L.backupFileName)),e.createElement("div",{className:"Red"},_l("\u6CE8\u610F\uFF1A\u8FD8\u539F\u4E3A\u65B0\u5E94\u7528\u5E76\u4E0D\u4F1A\u8FD8\u539F\u6570\u636E"))),onOk:function(){var X=(0,ne.vo)(o),q=(0,ne.XH)(o,tn.UU.dataBase)==="1"&&!md.global.Config.IsPlatformLocal;if(q&&(X.isSuperAdmin||X.isProjectAppManager)){fn.Z.getMyDbInstances({projectId:o}).then(function(ee){var se=ee.map(function(ae){return{label:ae.name,value:ae.id}});ee&&ee.length?v({dataDBInstances:Cr.concat(se),DBInstancesDialog:!0,restoreItem:L}):M(L)});return}M(L)}})},j=function(L){window.open((0,ne.Sv)(md.global.Config.AjaxApiUrl+"Download/DownloadBackupFile?id="+L.id+"&projectId="+o+"&appId="+a))},P=function(L){Ae.Z.confirm({className:"deleteBackupDialog",title:_l("\u5220\u9664\u5907\u4EFD"),description:_l("\u786E\u5B9A\u5C06\u5907\u4EFD\u6587\u4EF6\u201C%0\u201D\u5220\u9664\u5417\uFF1F",L.backupFileName),onOk:function(){ce.Z.deleteBackupFile({id:L.id,projectId:o,appId:a,fileName:L.backupFileName}).then(function(X){X?(alert(_l("\u5220\u9664\u6210\u529F ")),p({pageIndex:1})):alert(_l("\u5220\u9664\u5931\u8D25 "),2)})}})},A=function(){!f&&h.length<w&&p({pageIndex:E+1})},D=function(L){var O=h.map(function(X){return X.id===L.id?L:X});v({fileList:O})},R=!nr()({cannotCreateApp:!0},(0,ne.vo)(o)).cannotCreateApp;return f&&E===1?e.createElement(xe.Z,{className:"mTop15"}):e.createElement(e.Fragment,null,U().isEmpty(h)?e.createElement(vr,null,e.createElement("div",{className:"con"},e.createElement(Q.Z,{icon:"refresh"})),e.createElement("div",{className:"emptyTxt mTop12"},_l("\xA0\u6682\u65E0\u5907\u4EFD\u6587\u4EF6")),e.createElement(Ze.ZP,{radius:!0,className:"mTop24",onClick:t.handleCreateBackup},_l("\u521B\u5EFA\u5907\u4EFD"))):e.createElement(xr,null,e.createElement("div",{className:"header Gray_9e flexRow alignItemsCenter"},e.createElement("div",{className:"name flex"},_l("\u5907\u4EFD\u6587\u4EF6\u540D\u79F0")),e.createElement("div",{className:"backupType"},_l("\u5907\u4EFD\u7C7B\u578B")),e.createElement("div",{className:"backupTime flexRow alignItemsCenter"},_l("\u5907\u4EFD\u65F6\u95F4"),e.createElement("div",{className:"flexColumn order Hand",onClick:function(){v({orderType:m===0?1:0}),p({pageIndex:1,orderType:m===0?1:0})}},e.createElement(Q.Z,{icon:"arrow-up",className:V()({ThemeColor3:m===1})}),e.createElement(Q.Z,{icon:"arrow-down",className:V()({ThemeColor3:m===0})}))),e.createElement("div",{className:"size flexRow alignItemsCenter"},_l("\u6570\u636E\u6587\u4EF6\u5927\u5C0F"),e.createElement("div",{className:"flexColumn order Hand",onClick:function(){v({orderType:m===2?3:2}),p({pageIndex:1,orderType:m===2?3:2})}},e.createElement(Q.Z,{icon:"arrow-up",className:V()({ThemeColor3:m===3})}),e.createElement(Q.Z,{icon:"arrow-down",className:V()({ThemeColor3:m===2})}))),e.createElement("div",{className:"operator"},_l("\u64CD\u4F5C\u4EBA")),e.createElement("div",{className:"status"},_l("\u5907\u4EFD\u72B6\u6001")),e.createElement("div",{className:"action"})),e.createElement("div",{className:"flex"},e.createElement(Re.Z,{onScrollEnd:A},h.map(function(G){var L=G.id,O=G.operator,X=G.operationDateTime,q=G.status,ee=G.containData,se=G.usage,ae=(se/(1024*1024)).toFixed(2)+"MB",re=(r===-1?Be()(G.operationDateTime).add(1,"year").format("YYYYMMDDHHmmss"):Be()(G.operationDateTime).add(60,"days").format("YYYYMMDDHHmmss"))<Be()().format("YYYYMMDDHHmmss"),le=(r===-1?Be()(G.operationDateTime).add(1,"year").subtract(10,"days").format("YYYYMMDDHHmmss"):Be()(G.operationDateTime).add(50,"days").format("YYYYMMDDHHmmss"))<Be()().format("YYYYMMDDHHmmss");return e.createElement("div",{key:L,className:"row flexRow alignItemsCenter"},e.createElement("div",{className:"backupFileName pLeft10 flex ellipsis"},e.createElement(mr,{actCurrentFileInfo:G,projectId:o,appId:a,updateFileList:D})),e.createElement("div",{className:"backupType"},ee?_l("\u5E94\u7528\u3001\u6570\u636E"):_l("\u5E94\u7528")),e.createElement("div",{className:"backupTime"},Be()(X).format("YYYY-MM-DD HH:mm:ss")),e.createElement("div",{className:"size"},ee?ae:"-"),e.createElement("div",{className:"operator"},O.fullname),e.createElement("div",{className:V()("status",{ThemeColor:U().includes([1,2],q),Gray_75:re,warningColor:le&&q===0})},q===1?_l("\u6392\u961F\u4E2D..."):q===2?_l("\u5907\u4EFD\u4E2D..."):q===10?_l("\u5931\u8D25"):re?_l("\u5DF2\u8FC7\u671F"):le?_l("\u5373\u5C06\u8FC7\u671F"):_l("\u5B8C\u6210"),r!==-1&&(re||le)?e.createElement(Pe.Z,{text:re?e.createElement("span",null,_l("\u5907\u4EFD\u6587\u4EF6\u5DF2\u8FC7\u671F\uFF0C\u5347\u7EA7\u65D7\u8230\u7248\u540E\u53EF\u6062\u590D\u4E0B\u8F7D"),e.createElement(ln.Z,{text:_l("\u4E86\u89E3\u66F4\u591A"),type:3,href:"/upgrade/choose?projectId="+o+"&goToPost=true&select=3"})):e.createElement("span",null,_l("\u5907\u4EFD\u6587\u4EF6\u5373\u5C06\u5230\u671F\uFF0C\u5347\u7EA7\u65D7\u8230\u7248\u5EF6\u957F\u6709\u6548\u671F"),e.createElement(ln.Z,{text:_l("\u4E86\u89E3\u66F4\u591A"),type:3,href:"/upgrade/choose?projectId="+o+"&goToPost=true&select=3"}))},e.createElement(Q.Z,{icon:"info_outline",className:"Gray_bd mLeft4"})):""),U().includes([0,10],q)?e.createElement("div",{className:"action"},e.createElement("div",{className:"actionContent pRight10 TxtRight"},!re&&q===0&&e.createElement("span",{className:"ThemeColor Hand mRight20",onClick:function(){return W(G)}},_l("\u8FD8\u539F")),!re&&i!==Ne.lt.DEVELOPERS_ROLE&&q===0&&e.createElement(Rn.default,{trigger:["click"],placement:["bottomRight"],overlayClassName:"moreActionDropdown",overlay:e.createElement(vn.Z,null,e.createElement(ke.Z,{onClick:function(){return j(G)}},_l("\u4E0B\u8F7D\u5E94\u7528")),e.createElement(ke.Z,{disabled:!0},_l("\u4E0B\u8F7D\u6570\u636E")))},e.createElement("span",{className:"ThemeColor Hand mRight20"},_l("\u4E0B\u8F7D"))),e.createElement(Rn.default,{trigger:["click"],placement:["bottomRight"],overlayClassName:"moreActionDropdown",overlay:e.createElement(vn.Z,null,!re&&i!==Ne.lt.DEVELOPERS_ROLE&&R&&q===0&&e.createElement(ke.Z,{onClick:function(){return H(G)}},e.createElement("span",null,_l("\u8FD8\u539F\u4E3A\u65B0\u5E94\u7528"))),e.createElement(ke.Z,{onClick:function(){return P(G)}},e.createElement("span",null,_l("\u5220\u9664"))))},e.createElement(Q.Z,{icon:"more_horiz",className:"Gray_9e Hand Font18 more_horiz"})))):e.createElement("div",{className:"action"}))}),f&&E>1&&e.createElement(xe.Z,{className:"mTop15"})))),e.createElement(dr,{visible:T,actCurrentFileInfo:I,projectId:o,appId:a,token:B,changeRestoreAppVisible:function(){return v({restoreAppVisible:!1})},getList:p,getBackupCount:t.getBackupCount,currentValid:n,validLimit:r}),e.createElement(fr.Z,{visible:N,options:S,onOk:function(L){return M(void 0,L)},onCancel:function(){return v({DBInstancesDialog:!1,restoreItem:void 0})}}))}var Ir=(0,Y.Z)([`
  font-size: 13px;
  line-height: 17px;
  &.emptyWrap {
    height: 216px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .warning {
    background: rgba(255, 159, 51, 0.15);
    height: 32px;
    line-height: 32px;
    color: #e68619;
    .icon {
      color: #ff9f33;
    }
  }
  .limitNum {
    color: #ff1100;
  }
  .FontW {
    font-weight: 600;
  }
  .appIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 6px;
  }
`],[`
  font-size: 13px;
  line-height: 17px;
  &.emptyWrap {
    height: 216px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .warning {
    background: rgba(255, 159, 51, 0.15);
    height: 32px;
    line-height: 32px;
    color: #e68619;
    .icon {
      color: #ff9f33;
    }
  }
  .limitNum {
    color: #ff1100;
  }
  .FontW {
    font-weight: 600;
  }
  .appIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 6px;
  }
`]),br=(0,Y.Z)([`
  font-size: 14px;
  line-height: 36px;
  min-height: 36px;
  span {
    font-size: 14px;
    line-height: 36px;
    min-height: 36px;
    display: inline-block;
    box-sizing: border-box;
    text-shadow: none;
    border: none;
    outline: none;
    border-radius: 3px;
    color: #fff;
    vertical-align: middle;
    cursor: pointer;
    width: 92px;
    text-align: center;
  }
  .cancelBtn {
    color: #9e9e9e;
  }
  .cancelBtn:hover {
    color: #1e88e5;
  }
  .disabledConfirmBtn {
    color: #fff;
    background: #bdbdbd;
  }
  .confirmBtn {
    background: #2196f3;
    cursor: pointer;
  }
  .confirmBtn:hover {
    background-color: #1565c0;
  }
  .disabledBtn {
    cursor: not-allowed;
    background-color: #bdbdbd;
    color: #fff;
    &:hover {
      background-color: #bdbdbd;
    }
  }
`],[`
  font-size: 14px;
  line-height: 36px;
  min-height: 36px;
  span {
    font-size: 14px;
    line-height: 36px;
    min-height: 36px;
    display: inline-block;
    box-sizing: border-box;
    text-shadow: none;
    border: none;
    outline: none;
    border-radius: 3px;
    color: #fff;
    vertical-align: middle;
    cursor: pointer;
    width: 92px;
    text-align: center;
  }
  .cancelBtn {
    color: #9e9e9e;
  }
  .cancelBtn:hover {
    color: #1e88e5;
  }
  .disabledConfirmBtn {
    color: #fff;
    background: #bdbdbd;
  }
  .confirmBtn {
    background: #2196f3;
    cursor: pointer;
  }
  .confirmBtn:hover {
    background-color: #1565c0;
  }
  .disabledBtn {
    cursor: not-allowed;
    background-color: #bdbdbd;
    color: #fff;
    &:hover {
      background-color: #bdbdbd;
    }
  }
`]),ut=z.ZP.div(Ir),wr=z.ZP.div(br);function kr(t){var a=t.appId,o=t.projectId,n=t.appName,r=t.data,i=r===void 0?{}:r,s=t.getList,c=s===void 0?function(){}:s,l=(0,e.useState)(0),p=(0,F.Z)(l,2),d=p[0],u=p[1],g=(0,e.useState)(0),f=(0,F.Z)(g,2),h=f[0],E=f[1],w=(0,e.useState)(!0),m=(0,F.Z)(w,2),I=m[0],T=m[1],x=(0,e.useState)(!1),B=(0,F.Z)(x,2),N=B[0],S=B[1],Z=(0,e.useState)({}),k=(0,F.Z)(Z,2),v=k[0],b=k[1];(0,e.useEffect)(function(){a&&(W(),M())},[a]);var W=function(){ce.Z.getValidBackupFileInfo({appId:a,projectId:o}).then(function(P){T(!1),u(P.validLimit),E(P.currentValid)})},M=function(){ce.Z.getAppSupportInfo({appId:a}).then(function(P){b(P)})},H=function(){if(v.appItemTotal){if(d!==-1&&h>=d){alert("\u5907\u4EFD\u6587\u4EF6\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u5347\u7EA7\u65D7\u8230\u7248\u53EF\u4EE5\u65E0\u9650\u5907\u4EFD",3),t.closeDialog(),t.openManageBackupDrawer();return}ce.Z.backup({appId:a,containData:N}).then(function(P){P===1?c():P===2&&alert("\u5907\u4EFD\u6587\u4EF6\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u5347\u7EA7\u65D7\u8230\u7248\u53EF\u4EE5\u65E0\u9650\u5907\u4EFD",3)}),t.closeDialog()}};return e.createElement(Ae.Z,{title:_l("\u5907\u4EFD"),visible:!0,width:580,onCancel:function(){return t.closeDialog()},className:"createIndexDialog",overlayClosable:!1,okText:_l("\u5907\u4EFD"),footer:e.createElement(wr,{className:"flexRow"},e.createElement("div",{className:"Gray_9e flex TxtLeft Font13"},d!==-1?_l("\u5DF2\u5907\u4EFD:%0",h+"/"+d):""),e.createElement("span",{className:"cancelBtn",onClick:t.closeDialog},_l("\u53D6\u6D88")),e.createElement("span",{className:V()("confirmBtn",{disabledBtn:!v.appItemTotal}),type:"primary",onClick:H},_l("\u786E\u8BA4")))},I?e.createElement(ut,{className:"emptyWrap"},e.createElement(xe.Z,null)):e.createElement(ut,null,e.createElement("div",{className:"Font12 gray_9e mBottom12"},_l("\u6B63\u5728\u5907\u4EFD\u5E94\u7528\uFF1A")),e.createElement("div",{className:"flexRow mBottom30"},e.createElement("div",{className:"appIcon mRight12",style:{background:i.iconColor}},e.createElement(Ge.Z,{url:i.iconUrl,fill:"#fff",size:24})),e.createElement("div",null,e.createElement("div",{className:"bold Font16 Gray"},n),e.createElement("div",{className:"Gray_9e Font12 mTop3"},_l("\u5171\u6709 %0 \u4E2A\u5E94\u7528\u9879",v.appItemTotal)))),(!md.global.Config.IsLocal||md.global.SysSettings.enableBackupWorksheetData)&&e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(je.Z,{text:_l("\u540C\u65F6\u5907\u4EFD\u6570\u636E"),checked:N,onClick:function(P){S(!P)}}),e.createElement(hn.Z,null)),e.createElement("div",{className:"Font12 Gray_9e pLeft24"},_l("\u9884\u8BA1\u5171\u6709 %0 \u884C\u8BB0\u5F55",v.rowTotal))),d===-1?e.createElement(e.Fragment,null,e.createElement("div",{className:"mTop50"}," - ",_l("\u4E0D\u9650\u5236\u5907\u4EFD\u6587\u4EF6\u4E2A\u6570")),e.createElement("div",null,"-",md.global.Config.IsLocal?_l("\u6BCF\u4E2A\u5907\u4EFD\u6587\u4EF6\u4EC5\u4FDD\u7559%0\u5929\u6709\u6548\u671F\uFF0C\u8D85\u8FC7%0\u5929\u7684\u4F1A\u81EA\u52A8\u5220\u9664",md.global.SysSettings.appBackupRecycleDays):_l("\u5907\u4EFD\u6587\u4EF6\u4E00\u5E74\u6709\u6548\uFF0C\u5360\u7528\u5E94\u7528\u9644\u4EF6\u5B58\u50A8\u91CF"),e.createElement(ln.Z,{text:_l("\u5E2E\u52A9"),type:3,href:"https://help.mingdao.com/application/backup-restore"}))):e.createElement(e.Fragment,null,e.createElement("div",{className:"mTop50"}," - ",_l("\u6BCF\u4E2A\u5E94\u7528\u6700\u591A\u53EF\u5907\u4EFD10\u4E2A\u6587\u4EF6")),e.createElement("div",null,"- ",_l("\u6BCF\u4E2A\u5907\u4EFD\u6587\u4EF6\u4EC5\u4FDD\u755960\u5929\u6709\u6548\u671F\uFF0C\u8D85\u8FC760\u5929\u7684\u4F1A\u81EA\u52A8\u5220\u9664"),e.createElement(ln.Z,{text:_l("\u5E2E\u52A9"),type:3,href:"https://help.mingdao.com/application/backup-restore"})))))}var Ar=(0,Y.Z)([`
  .ant-drawer-content-wrapper {
    width: 500px !important;
  }
  .ant-drawer-wrapper-body,
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`],[`
  .ant-drawer-content-wrapper {
    width: 500px !important;
  }
  .ant-drawer-wrapper-body,
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`]),yr=(0,Y.Z)([`
  .refresh {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    color: #9e9e9e;
    padding-top: 3px;
    box-sizing: border-box;
    margin-right: 30px;
    &:hover {
      background-color: #f5f5f5;
      color: #2196f3;
    }
  }
  .act {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #757575;
    cursor: pointer;
    .icon {
      color: #9e9e9e;
      font-size: 18px;
    }
    &:hover {
      color: #2196f3;
      .icon {
        color: #2196f3;
      }
    }
  }
`],[`
  .refresh {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    color: #9e9e9e;
    padding-top: 3px;
    box-sizing: border-box;
    margin-right: 30px;
    &:hover {
      background-color: #f5f5f5;
      color: #2196f3;
    }
  }
  .act {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #757575;
    cursor: pointer;
    .icon {
      color: #9e9e9e;
      font-size: 18px;
    }
    &:hover {
      color: #2196f3;
      .icon {
        color: #2196f3;
      }
    }
  }
`]),Nr=(0,z.ZP)(pt.Z)(Ar),Sr=z.ZP.div(yr);function Tr(t){var a=t.appId,o=t.projectId,n=t.appName,r=t.permissionType,i=t.data,s=(0,e.useState)(0),c=(0,F.Z)(s,2),l=c[0],p=c[1],d=(0,e.useState)(0),u=(0,F.Z)(d,2),g=u[0],f=u[1],h=(0,e.useState)(!1),E=(0,F.Z)(h,2),w=E[0],m=E[1],I=(0,e.useState)(!1),T=(0,F.Z)(I,2),x=T[0],B=T[1],N=(0,e.useState)(!1),S=(0,F.Z)(N,2),Z=S[0],k=S[1],v=(0,e.useState)({isLoading:!1,fileList:[],pageIndex:1}),b=(0,F.Z)(v,2),W=b[0],M=b[1],H=W.isLoading,j=W.fileList,P=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},G=R.pageIndex,L=G===void 0?1:G,O=(0,dt.Z)(R,["pageIndex"]);H||(M((0,y.default)({},W,{isLoading:!0})),ce.Z.pageGetBackupRestoreOperationLog((0,y.default)({pageIndex:L,pageSize:50,projectId:o,appId:a,isBackup:!0,orderType:O.orderType||0},O)).then(function(X){var q=X.list,ee=q===void 0?[]:q,se=X.total,ae=L===1?ee:j.concat(ee);M({isLoading:!1,fileList:ae,pageIndex:L,total:se})}))};(0,e.useEffect)(function(){a&&(P(),A())},[a]);var A=function(){ce.Z.getValidBackupFileInfo({appId:a,projectId:o}).then(function(R){p(R.validLimit),f(R.currentValid)})};return e.createElement("div",{className:"manageBackupFilesWrap flexColumn"},e.createElement(Le,{title:_l("\u5907\u4EFD\u4E0E\u8FD8\u539F"),addBtnName:_l("\u5907\u4EFD"),description:l===-1?_l("\u652F\u6301\u4EC5\u5907\u4EFD\u5E94\u7528\u6216\u8005\u5907\u4EFD\u5E94\u7528\u548C\u6570\u636E\uFF0C\u5907\u4EFD\u540E\u7684\u6587\u4EF6\u53EF\u4EE5\u4E0B\u8F7D\u4FDD\u5B58"):_l("\u6BCF\u4E2A\u5E94\u7528\u6700\u591A\u521B\u5EFA10\u4E2A\u5907\u4EFD\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4EC5\u4FDD\u755960\u5929\u6709\u6548\u671F\u3002"),link:"https://help.mingdao.com/application/backup-restore",extraElement:e.createElement(Sr,{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"refresh",onClick:function(){M((0,y.default)({},W,{pageIndex:1})),P({pageIndex:1,orderType:0})}},e.createElement(Q.Z,{icon:"refresh1",className:"Font18"})),e.createElement("div",{className:"act",onClick:function(){return B(!0)}},e.createElement(Q.Z,{icon:"wysiwyg",className:"mRight5"}),e.createElement("span",null,_l("\u65E5\u5FD7")))),handleAdd:function(){return m(!0)}}),e.createElement(Er,{backupInfo:W,permissionType:r,projectId:o,appId:a,appName:n,validLimit:l,currentValid:g,getList:P,getBackupCount:A,handleCreateBackup:function(){return m(!0)}}),w&&e.createElement(kr,{projectId:o,appId:a,appName:n,data:i,validLimit:l,openManageBackupDrawer:function(){return m(!0)},closeDialog:function(){return m(!1)},getList:P}),Z&&e.createElement(BackupFromFiles,{visible:Z,projectId:o,appId:a,appName:n,onCancel:function(){return k(!1)}}),x&&e.createElement(Nr,{title:_l("\u64CD\u4F5C\u65E5\u5FD7"),onClose:function(){return B(!1)},visible:x,headerStyle:{display:"none"}},e.createElement($a,{projectId:o,appId:a,onClose:function(){return B(!1)}})))}var Br=C(22507),Dr=C(76275),Zr=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.getExportLogs=function(){var r=n.props.appId,i=n.state.pageIndex;n.setState({loading:!0}),ce.Z.getExportsByApp({appId:r,pageIndex:i,pageSize:50}).then(function(s){var c=s.records,l=s.total;n.setState({records:i>1?n.state.records.concat(c):c,loading:!1,isMore:c.length>=50})})},n.onScrollEnd=function(){var r=n.state,i=r.isMore,s=r.loading;s||!i||n.setState({pageIndex:n.state.pageIndex+1},function(){n.getExportLogs()})},n.getPassword=function(r,i){var s=n.props.appId,c=n.state.records;ce.Z.getExportPassword({appId:s,id:r,passwordType:i==="exportPassword"?0:1}).then(function(l){n.setState({records:c.map(function(p){if(p.id===r){var d;return(0,y.default)({},p,(d={},(0,Ce.default)(d,i,l),(0,Ce.default)(d,"show_"+i,!0),d))}return p})})})},n.checkPassword=function(r){var i=r.id,s=r.passwordType,c=r.password,l=n.state.records,p=l===void 0?[]:l;c?n.setState({records:p.map(function(d){return d.id===i&&(d["show_"+s]=!d["show_"+s]),d})}):n.getPassword(i,s)},n.renderPassword=function(r,i){var s=r.id,c=r.hasExportPassword,l=r.hasLockPassword,p=r.show_exportPassword,d=r.show_lockPassword,u=r.exportPassword,g=r.lockPassword,f=n.state.records,h=i==="exportPassword"?c:l,E=i==="exportPassword"?p:d,w=i==="exportPassword"?u:g;return e.createElement("span",{className:V()("password",{hoverPassword:!E}),onClick:function(){!h||E||n.checkPassword({id:s,passwordType:i,password:w})}},h?E?w:"******":"",h&&e.createElement("i",{className:V()("icon Font14 Hover_21 mLeft5 Hand showVisibilityIcon",E?"icon-visibility_off":"icon-visibility"),onClick:function(){E&&n.checkPassword({id:s,passwordType:i,password:w})}}))},n.state={exportAppVisible:!1,loading:!1,pageIndex:1,records:[],isMore:!1},n}return(0,Xe.default)(a,[{key:"componentDidMount",value:function(){this.getExportLogs()}},{key:"render",value:function(){var n=this,r=this.props,i=r.appId,s=r.projectId,c=this.state,l=c.exportAppVisible,p=c.records,d=p===void 0?[]:p,u=c.loading;return e.createElement(e.Fragment,null,e.createElement(Le,{title:_l("\u5BFC\u51FA"),addBtnName:_l("\u5BFC\u51FA\u5E94\u7528"),link:"https://help.mingdao.com/application/import-export",description:_l("\u5C06\u5E94\u7528\u914D\u7F6E\u5BFC\u51FA\u4E3A\u6587\u4EF6\uFF0C\u4E4B\u540E\u53EF\u4EE5\u5C06\u6B64\u6587\u4EF6\u5BFC\u5165\u5176\u4ED6\u7EC4\u7EC7\u4EE5\u5B9E\u73B0\u5E94\u7528\u8FC1\u79FB\uFF0C\u53EF\u9009\u62E9\u540C\u65F6\u5BFC\u51FA\u90E8\u5206\u793A\u4F8B\u6570\u636E"),extraElement:e.createElement("div",{className:"refresh",onClick:function(){n.setState({pageIndex:1},function(){n.getExportLogs()})}},e.createElement(Q.Z,{icon:"refresh1",className:"Font18"})),handleAdd:function(){return n.setState({exportAppVisible:!0})}}),u?e.createElement("div",{className:"exportAppListWrap flexColumn flex"},e.createElement(xe.Z,null)):e.createElement("div",{className:"exportAppListWrap flexColumn flex"},e.createElement("div",{className:"row headerRow flexRow Gray_9e Font14"},e.createElement("div",{className:"operator"},_l("\u64CD\u4F5C\u4EBA")),e.createElement("div",{className:"date"},_l("\u5BFC\u51FA\u65F6\u95F4")),e.createElement("div",{className:"exportType flex"},_l("\u5BFC\u51FA\u7C7B\u578B")),e.createElement("div",{className:"password"},_l("\u5BFC\u51FA\u5BC6\u7801")),e.createElement("div",{className:"password"},_l("\u5E94\u7528\u9501\u5BC6\u7801")),e.createElement("div",{className:"download"})),e.createElement("div",{className:"flex listContent"},_.isEmpty(d)?e.createElement(Ln,{radiusSize:132,icon:"import",iconClassName:"Gray_9e Font50",emptyTxtClassName:"Gray_bd mTop18 Font17",emptyTxt:_l("\u6682\u65E0\u5BFC\u51FA\u8BB0\u5F55")}):e.createElement(Re.Z,{onScrollEnd:this.onScrollEnd},d.map(function(g){var f=g.operator,h=g.createTime,E=g.apps,w=E===void 0?[]:E,m=g.downLoadUrl,I=w.map(function(T,x){return x<w.length-1?T.appName+";":T.appName}).join("");return e.createElement("div",{className:"row flexRow"},e.createElement("div",{className:"operator flexRow"},e.createElement(Zn.Z,{className:"circle mRight8",user:{userHead:f.avatarSmall,accountId:f.accountId},size:24,projectId:s}),e.createElement(Br.Z,{className:"Gray Font13 pLeft5 pRight10 pTop3 flex ellipsis",user:{userName:f.fullname,accountId:f.accountId}})),e.createElement("div",{className:"date"},h),e.createElement("div",{className:"exportType flex overflowHidden"},w.length===1?_l("\u5355\u5E94\u7528"):e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u5E94\u7528\u5305")+("("+I+")"))},e.createElement("span",{className:"ellipsis InlineBlock wMax100"},_l("\u5E94\u7528\u5305")+("("+I+")")))),n.renderPassword(g,"exportPassword"),n.renderPassword(g,"lockPassword"),e.createElement("div",{className:"download"},m?e.createElement("a",{href:m,target:"_blank"},_l("\u4E0B\u8F7D")):e.createElement("span",{className:"Gray_9e"},_l("\u4E0B\u8F7D"))))})))),l&&e.createElement(Dr.Z,{appIds:[i],closeDialog:function(){return n.setState({exportAppVisible:!1})}}))}}]),a}(e.Component),Lr=C(92410),Rr=C(47004),mt=C(11797),Fr=C(25488),Wr=[{label:_l("\u5E94\u7528"),value:"app"},{label:_l("\u7EC4\u7EC7"),value:"project"}];function Qr(t){var a=t.projectId,o=t.appId,n=(0,e.useState)("app"),r=(0,F.Z)(n,2),i=r[0],s=r[1],c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)(""),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=(0,e.useState)({visible:!1,isEdit:!1}),w=(0,F.Z)(E,2),m=w[0],I=w[1],T=(0,e.useState)({}),x=(0,F.Z)(T,2),B=x[0],N=x[1],S=(0,e.useState)([]),Z=(0,F.Z)(S,2),k=Z[0],v=Z[1],b=(0,e.useState)(""),W=(0,F.Z)(b,2),M=W[0],H=W[1],j=(0,ne.XH)(a,tn.UU.globalVariable);(0,e.useEffect)(function(){d(!0),Fr.Z.gets({sourceId:o,sourceType:i==="project"?11:1}).then(function(A){d(!1),A.resultCode===1?v(A.variables):v([])})},[i]);var P=function(D,R){var G=[];D===mt.nt.ADD?(G=k.concat([R]),v(G)):D===mt.nt.UPDATE?(G=k.map(function(L){return L.id===R.id?R:L}),v(G)):(G=k.filter(function(L){return L.id!==R.id}),v(G))};return e.createElement("div",{className:"appGlobalVarWrapper"},e.createElement(Le,{title:_l("\u5168\u5C40\u53D8\u91CF"),showSearch:!0,addBtnName:_l("\u5E94\u7528\u53D8\u91CF"),needUpgrade:j==="2",link:"https://help.mingdao.com/workflow/node-update-global-variables",description:_l("\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\u5B9E\u73B0\u7EC4\u7EC7\u5185\u6570\u636E\u7684\u5171\u4EAB\u4E0E\u4F20\u9012"),handleSearch:_.debounce(function(A){h(A)},500),handleAdd:function(){j==="2"?(0,ne.j0)(a,tn.UU.globalVariable):I({visible:!0,isEdit:!1})}}),e.createElement("div",{className:"tabWrap"},Wr.map(function(A){return e.createElement("div",{className:V()("tabItem Hand",{active:A.value===i}),onClick:function(){return s(A.value)}},A.label)})),e.createElement("div",{className:"flex"},e.createElement(Lr.Z,{data:k.filter(function(A){return A.name.indexOf(f)>-1}),readOnly:i==="project",loading:p,onRefreshVarList:P,emptyText:f?_l("\u6682\u65E0\u641C\u7D22\u7ED3\u679C"):_l("\u6682\u65E0\u5168\u5C40\u53D8\u91CF"),onAdd:function(D){I({visible:!0,isEdit:!1}),N({name:D})},onEdit:function(D){H(D.id),I({visible:!0,isEdit:!0}),N(D)},activeId:M,setActiveId:H,projectId:a,emptyNoBorder:!0})),m.visible&&e.createElement(Rr.Z,{visible:m.visible,isEdit:m.isEdit,onClose:function(){I({visible:!1}),N({}),H("")},projectId:a,appId:o,defaultFormValue:B,onRefreshVarList:i==="app"?P:function(){}}))}var jr=C(88902),wn=C.n(jr),Hr=C(46417),ts=C(96661),ft=C(94704),gt=function(a,o){switch(o){case Ne.lt.POSSESS_ROLE:break;case Ne.lt.ADMIN_ROLE:a=_.filter(a,function(n){return!_.includes(["del"],n.type)});break;case Ne.lt.RUNNER_ROLE:a=_.filter(a,function(n){return _.includes(["modify","editIntro","appAnalytics","appLogs","modifyAppLockPassword"],n.type)});break;case Ne.lt.DEVELOPERS_ROLE:a=_.filter(a,function(n){return!_.includes(["copy","export","appAnalytics","appLogs","del"],n.type)});break;case Ne.lt.RUNNER_DEVELOPERS_ROLE:a=_.filter(a,function(n){return!_.includes(["copy","export","del"],n.type)});break;default:break}return a},kn=function(a){var o=a.typeList,n=o===void 0?[]:o,r=a.defaultCheckedAll,i=r===void 0?!1:r,s=a.source,c=s===void 0?{}:s,l={};return n.forEach(function(p){var d=(c[p]||[]).map(function(u){var g=u.id;return g});l[p+"CheckAll"]=i,l[p+"CheckIds"]=d}),l},Pr=function(a){if(!_.isUndefined(a)){var o={0:"sheet",1:"board",2:"structure",3:"gallery",4:"calendar",5:"gunter",6:"detail"};return(_.find(Ne.D,function(n){return n.id===o[a]})||{}).icon}},Gr=(0,Y.Z)([`
  padding: 0 12px;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid #dddddd;
  margin-bottom: 30px;
  .itemTitle {
    height: 52px;
    align-items: center;
  }
  .rowItem {
    height: 44px;
    border-bottom: 1px solid #eaeaea;
    &.hoverRowItem:hover {
      background-color: #f5f5f5;
      margin: 0 -12px;
      padding: 0 12px;
    }
  }
  .noBorder {
    border: none !important;
  }
  .addTxtColor {
    color: #4caf50;
  }
  .w50 {
    width: 50px;
  }
  .partialChanges {
    font-size: 12px;
    color: #757575;
    background-color: #eaeaea;
    padding: 0 7px;
    border-radius: 12px;
  }
`],[`
  padding: 0 12px;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid #dddddd;
  margin-bottom: 30px;
  .itemTitle {
    height: 52px;
    align-items: center;
  }
  .rowItem {
    height: 44px;
    border-bottom: 1px solid #eaeaea;
    &.hoverRowItem:hover {
      background-color: #f5f5f5;
      margin: 0 -12px;
      padding: 0 12px;
    }
  }
  .noBorder {
    border: none !important;
  }
  .addTxtColor {
    color: #4caf50;
  }
  .w50 {
    width: 50px;
  }
  .partialChanges {
    font-size: 12px;
    color: #757575;
    background-color: #eaeaea;
    padding: 0 7px;
    border-radius: 12px;
  }
`]),Mr=z.ZP.div(Gr);function ht(t){var a=t.titleClassName,o=t.isWorksheetDetail,n=t.item,r=n===void 0?{}:n,i=t.itemList,s=i===void 0?[]:i,c=t.isExpand,l=t.checkedInfo,p=l===void 0?{}:l,d=t.worksheetDetailData,u=d===void 0?{}:d,g=t.handleExpandCollapse,f=g===void 0?function(){}:g,h=t.checkAllCurrentType,E=h===void 0?function(){}:h,w=t.checkItem,m=w===void 0?function(){}:w,I=t.openShowUpgradeDetail,T=I===void 0?function(){}:I,x=r.type;return e.createElement(Mr,null,e.createElement("div",{className:"flexRow itemTitle"},e.createElement("div",{className:"flex"},r.icon&&e.createElement("i",{className:"icon-"+r.icon+" Gray_9e Font18 mRight7 TxtMiddle"}),e.createElement("span",{className:V()("bold TxtMiddle",a)},r.name)),e.createElement("div",{className:"w50 TxtCenter"},e.createElement("i",{className:V()("Gray_bd Font18 Hand "+(c?"icon-arrow-up-border":"icon-arrow-down-border")),onClick:function(){return f(r)}}))),c&&e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow alignItemsCenter Gray_9e bold rowItem"},e.createElement("div",{className:"flex flexRow name"},e.createElement("span",null,_l("\u540D\u79F0"))),o?"":e.createElement("div",{className:"flex action"},_l("\u52A8\u4F5C")),e.createElement("div",{className:"w50 TxtLeft"})),s.map(function(B,N){var S=_.includes(p[x+"CheckIds"],B.id);return e.createElement("div",{key:B.id,className:V()("flexRow alignItemsCenter Gray rowItem hoverRowItem",{noBorder:N===s.length-1})},e.createElement("div",{className:"flex flexRow name alignItemsCenter"},B.iconUrl?e.createElement("div",null,e.createElement(Ge.Z,{className:"mRight5 mTop2",url:B.iconUrl,fill:"#9e9e9e",size:16})):B.icon?e.createElement("i",{className:"icon-"+B.icon+" Gray_9e mRight3"}):"",e.createElement("span",{className:"ellipsis"},B.displayName)),o?"":e.createElement(e.Fragment,null,e.createElement("div",{className:"flex action "+(B.upgradeType===3?"addTxtColor":"")},B.upgradeType===3?_l("\u65B0\u589E"):_l("\u66F4\u65B0")),e.createElement("div",{className:"w50 TxtLeft"},x==="worksheets"?e.createElement("span",{className:"Hand ThemeColor",onClick:function(){return T(B)}},_l("\u8BE6\u60C5")):"")))})))}var Ur=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.handleExpandCollapse=function(r){var i=n.state.expandTypeList;n.setState({expandTypeList:U().includes(i,r.type)?i.filter(function(s){return r.type!==s}):i.concat(r.type)})},n.state={expandTypeList:$e.Bd.map(function(r){return r.type}),checkedInfo:kn({parseParams:{addFields:[],updateFields:[],addView:[],updateView:[]},defaultCheckedAll:!0})},n}return(0,Xe.default)(a,[{key:"componentDidMount",value:function(){var n=this.props,r=n.worksheetDetailData,i=n.currentWorksheet;U().isEmpty(r)||this.setState((0,y.default)({},r[i.id]))}},{key:"componentWillReceiveProps",value:function(n){if(!U().isEqual(this.props.worksheetDetailData,n.worksheetDetailData)){var r=n.worksheetDetailData,i=n.currentWorksheet;U().isEmpty(r)||this.setState((0,y.default)({},r[i.id]))}}},{key:"render",value:function(){var n=this,r=this.props,i=r.visible,s=r.onClose,c=s===void 0?function(){}:s,l=this.state,p=l.expandTypeList,d=l.checkedInfo,u=l.data,g=u===void 0?{}:u;return e.createElement(pt.Z,{title:_l("\u66F4\u65B0\u8BE6\u60C5"),placement:"right",onClose:c,visible:i,closable:!1,maskClosable:!1,headerStyle:{},width:520,extra:e.createElement("i",{className:"icon-close Font20 Hand Gray_9e",onClick:c})},$e.Bd.map(function(f){var h=f.type,E=g[h]||[],w=U().includes(p,f.type);return U().isEmpty(E)?null:e.createElement(ht,{isWorksheetDetail:!0,titleClassName:"Font14",item:f,itemList:E,isExpand:w,checkedInfo:d,handleExpandCollapse:n.handleExpandCollapse,checkAllCurrentType:n.props.checkAllCurrentType,checkItem:n.props.checkItem})}))}}]),a}(e.Component),Or=C(79221),vt=C(37397),Vr=C(96800),zr=C(51422),Yr=C(83947),Jr=(0,Y.Z)([`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  overflow: auto;
  .homepageIconWrap {
    isplay: flex;
    align-items: center;
    padding: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 0 5px 0 10px;
    cursor: pointer;
    width: max-content;
  }
  .appDetailWrap {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
  }
  .appIconAndName {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    color: #fff;
  }
  .appIconWrap {
    idth: 30px;
    height: 30px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .appName {
    font-size: 18px;
    margin: 0 2px 0 6px;
  }
  .isUpgrade {
    border-radius: 13px;
    color: #fff;
    line-height: 22px;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: bold;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 5px;
    background: #4caf50;
  }
  .appIntroWrap {
    margin: 2px 10px 0 0;
  }
  .count {
    color: #fff;
    border-radius: 20px;
    min-width: 20px;
    height: 20px;
    background-color: #f76d6d;
    width: auto;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .commonUserHandleWrap {
    display: flex;
    height: 100%;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    padding: 0 20px 0 0;
  }
  .appPkgHeaderSearch,
  .workflowHelpIconWrap {
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .appPkgHeaderSearch {
    cursor: pointer;
  }
  .workflowHelpIconWrap {
    margin-left: 15px;
  }
  .appPkgHeaderWrap .commonUserHandleWrap .appPkgHeaderSearch .icon,
  .appPkgHeaderWrap .commonUserHandleWrap .workflowHelpIconWrap .icon {
    color: #fff;
  }
  &.commonWrap {
    .appPkgHeaderWrap {
      height: 50px;
      display: flex;
      align-items: center;
      height: 50px;
      justify-content: space-between;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    .appName {
      margin: 0 2px;
      font-size: 15px;
      font-weight: bold;
      max-width: 200px;
    }
  }
  &.leftWrap {
    .appPkgHeaderWrap {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .loadingSkeleton {
      opacity: 0.8;
      background-color: transparent;
    }
    .commonUserHandleWrap {
      height: 50px;
      justify-content: space-around;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }
    [data-tip]:after {
      display: none;
    }
  }
`],[`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  overflow: auto;
  .homepageIconWrap {
    isplay: flex;
    align-items: center;
    padding: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 0 5px 0 10px;
    cursor: pointer;
    width: max-content;
  }
  .appDetailWrap {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
  }
  .appIconAndName {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    color: #fff;
  }
  .appIconWrap {
    idth: 30px;
    height: 30px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .appName {
    font-size: 18px;
    margin: 0 2px 0 6px;
  }
  .isUpgrade {
    border-radius: 13px;
    color: #fff;
    line-height: 22px;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: bold;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 5px;
    background: #4caf50;
  }
  .appIntroWrap {
    margin: 2px 10px 0 0;
  }
  .count {
    color: #fff;
    border-radius: 20px;
    min-width: 20px;
    height: 20px;
    background-color: #f76d6d;
    width: auto;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .commonUserHandleWrap {
    display: flex;
    height: 100%;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    padding: 0 20px 0 0;
  }
  .appPkgHeaderSearch,
  .workflowHelpIconWrap {
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .appPkgHeaderSearch {
    cursor: pointer;
  }
  .workflowHelpIconWrap {
    margin-left: 15px;
  }
  .appPkgHeaderWrap .commonUserHandleWrap .appPkgHeaderSearch .icon,
  .appPkgHeaderWrap .commonUserHandleWrap .workflowHelpIconWrap .icon {
    color: #fff;
  }
  &.commonWrap {
    .appPkgHeaderWrap {
      height: 50px;
      display: flex;
      align-items: center;
      height: 50px;
      justify-content: space-between;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    .appName {
      margin: 0 2px;
      font-size: 15px;
      font-weight: bold;
      max-width: 200px;
    }
  }
  &.leftWrap {
    .appPkgHeaderWrap {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .loadingSkeleton {
      opacity: 0.8;
      background-color: transparent;
    }
    .commonUserHandleWrap {
      height: 50px;
      justify-content: space-around;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }
    [data-tip]:after {
      display: none;
    }
  }
`]),xt=z.ZP.div(Jr),Kr=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.changeIndexVisible=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;n.timer=setTimeout(function(){window.disabledSideButton||n.setState({indexSideVisible:r})},100)},n.renderHomepageIconWrap=function(){return e.createElement("div",{className:"homepageIconWrap",onClick:function(){window.disabledSideButton=!1,n.changeIndexVisible()},onMouseEnter:n.changeIndexVisible,onMouseLeave:function(){window.disabledSideButton=!1,clearTimeout(n.timer)}},e.createElement(Vr.Z,null))},n.renderAppDetailWrap=function(r){var i=r.themeType,s=r.iconUrl,c=r.pcNaviStyle,l=r.name,p=r.description;return e.createElement(e.Fragment,null,e.createElement("div",{className:V()("appDetailWrap pointer overflowHidden")},e.createElement("div",{className:"appIconAndName pointer overflow_ellipsis"},e.createElement("div",{className:"appIconWrap"},e.createElement(Ge.Z,{url:s,fill:["black","light"].includes(i)?iconColor:"#FFF",size:c===1?28:24})),e.createElement("span",{className:"appName overflow_ellipsis"},l))),e.createElement("div",{className:"isUpgrade"},_l("\u5347\u7EA7\u4E2D")),p&&e.createElement("div",{className:"appIntroWrap pointer","data-tip":_l("\u5E94\u7528\u8BF4\u660E")},e.createElement(Q.Z,{className:"appIntroIcon Font16",icon:"info"})))},n.renderAppInfoWrap=function(){var r=n.props.appPkg,i=r===void 0?{}:r,s=i.pcNaviStyle;if(s===1){var c=function(p,d){return e.createElement("div",{className:"flexRow alignItemsCenter pointer White backlogWrap",onClick:d},e.createElement(Q.Z,{icon:"task_alt",className:"Font18"}),e.createElement("div",{className:"mLeft5 mRight5 bold"},_l("\u5F85\u529E")),!!p&&e.createElement("div",{className:"count"},p))};return e.createElement("div",{className:"appInfoWrap flexColumn pLeft10 pRight10 mBottom8"},e.createElement("div",{className:"flexRow alignItemsCenter pTop10"},e.createElement("div",{className:"flex"},n.renderHomepageIconWrap()),e.createElement(zr.Z,{type:"appPkg",renderContent:c})),e.createElement("div",{className:"flexRow alignItemsCenter pTop10 Relative"},n.renderAppDetailWrap(i)))}else return e.createElement("div",{className:"appInfoWrap flexRow alignItemsCenter"},n.renderHomepageIconWrap(),n.renderAppDetailWrap(i))},n.renderHeader=function(){var r=n.props.appPkg,i=r.pcNaviStyle,s=r.themeType,c=r.navColor;return e.createElement("div",{className:V()("appPkgHeaderWrap",s),style:{backgroundColor:c,width:i===1?240:void 0}},n.renderAppInfoWrap(),i===1&&e.createElement("div",{className:"LeftAppGroupWrap w100 flex"},e.createElement(Or.Z,{active:!1})),e.createElement(Yr.Z,(0,y.default)({type:"appPkg"},r)))},n.state={},n}return(0,Xe.default)(a,[{key:"render",value:function(){var n=this.props.appPkg,r=n.pcNaviStyle;return r===1?e.createElement(xt,{className:"leftWrap flexRow"},this.renderHeader(),e.createElement("div",{className:"flex",style:{background:"#f5f5f5"}},e.createElement(vt.Z,{appPkg:n,showLeftSkeleton:!1}))):e.createElement(xt,{className:"flexColumn commonWrap"},this.renderHeader(),e.createElement(vt.Z,{appPkg:n}))}}]),a}(e.Component),Xr=C(94797),_r=C.n(Xr),qr=C(63256),$r=C.n(qr),sn=C(62232),eo=ft.Z.Step,no=[{title:_l("\u4E0A\u4F20\u6587\u4EF6")},{title:_l("\u5347\u7EA7\u8303\u56F4")},{title:_l("\u5F00\u59CB\u5BFC\u5165")}],Fn=$e.Bd.map(function(t){return t.type}),Wn=$e.YK.map(function(t){return t.type}),to=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.getIds=function(r,i){return(i[r]||[]).map(function(s){var c=s.id;return c})},n.handleExpandCollapse=function(r){var i=n.state.expandTypeList;n.setState({expandTypeList:U().includes(i,r.type)?i.filter(function(s){return r.type!==s}):i.concat(r.type)})},n.destroyUploadWrap=function(){n.uploaderWrap&&n.uploaderWrap.uploader&&!n.state.isEncrypt&&n.uploaderWrap.uploader.destroy()},n.checkUpgrade=function(){var r=n.props.appDetail,i=n.state.file;n.setState({compareLoading:!0});var s={password:n.state.password||"",url:n.state.url,appId:r.id,fileName:i.name};ce.Z.checkUpgrade(s).then(function(c){var l=c.resultCode,p=c.contrasts,d=p===void 0?{}:p,u=c.id,g=d.worksheets,f=g===void 0?[]:g;l===0?n.setState({isEncrypt:!1,password:"",current:U().isEmpty(f)?0:1,contrasts:d,upgradeId:u,compareLoading:!1,analyzeLoading:!1,checkedInfo:kn({typeList:Wn,source:d,defaultCheckedAll:!0}),errTip:U().isEmpty(f)?_l("\u5E94\u7528\u4E2D\u6CA1\u6709\u53EF\u5BFC\u5165\u7684\u6570\u636E"):""},function(){U().isEmpty(f)||n.destroyUploadWrap()}):l===3?(n.state.password&&alert(_l("\u5BC6\u7801\u9519\u8BEF\uFF0C\u6821\u9A8C\u5931\u8D25"),2),n.setState({isEncrypt:!0,compareLoading:!1,analyzeLoading:!1,contrasts:{}})):n.setState({isEncrypt:!1,password:"",compareLoading:!1,analyzeLoading:!1,contrasts:{},errTip:$e.ej[l]})}).catch(function(c){n.setState({compareLoading:!1,analyzeLoading:!1})})},n.renderUploadBtn=function(r){return e.createElement(Hr.Z,{ref:function(s){return n.uploaderWrap=s},className:"upgradeAppUpload mTop24",options:{filters:{mime_types:[{extensions:"mdy"}]}},onAdd:function(s,c){n.setState({isEncrypt:!1,errTip:""})},onBeforeUpload:function(s,c){setTimeout(function(){n.setState({file:c,analyzeLoading:!0})},200)},onUploaded:function(s,c,l){var p=l.key;n.setState({file:c,url:md.global.FileStoreConfig.documentHost+p,errTip:"",analyzeLoading:!1},n.checkUpgrade)},onError:function(){n.setState({file:{},url:"",password:"",errTip:_l("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25"),analyzeLoading:!1})}},r)},n.renderUploadFile=function(){var r=n.state,i=r.file,s=r.errTip,c=r.isEncrypt,l=r.password,p=r.compareLoading,d=r.analyzeLoading;return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray_75 mBottom20"},_l("\u5BFC\u5165\u5355\u4E2A\u5E94\u7528\u6587\u4EF6\uFF0C\u5B9E\u73B0\u5BF9\u5F53\u524D\u5E94\u7528\u5FEB\u901F\u5347\u7EA7\u3002\u8BF7\u786E\u8BA4\u79C1\u6709\u90E8\u7F72\u7684\u7248\u672C\uFF0C\u9AD8\u7248\u672C\u5411\u4F4E\u7248\u672C\u5BFC\u5165\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u5165\u5931\u8D25\u3002\u5E94\u7528\u5347\u7EA7\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\uFF0C\u6B63\u5728\u5347\u7EA7\u4E2D\u7684\u5E94\u7528\u5C06\u4E3A\u4E0D\u53EF\u7528\u72B6\u6001\u3002"),e.createElement(ln.Z,{text:_l("\u5E2E\u52A9"),type:3,href:"https://help.mingdao.com/application/import-export"})),e.createElement("div",{className:"uploadWrap flex"},c?e.createElement(e.Fragment,null,e.createElement("div",{className:"Font14"},_l("\u6587\u4EF6\u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u9A8C\u8BC1\u901A\u8FC7\u624D\u80FD\u4E0A\u4F20")),e.createElement("input",{className:"passwordInputBox mTop16 mBottom16",placeholder:_l("\u8BF7\u8F93\u5165\u5BC6\u7801"),value:l,onChange:function(g){return n.setState({password:g.target.value})}}),e.createElement(Ze.ZP,{type:"primary",disabled:!l,onClick:function(){return n.setState({isEncrypt:!1,errTip:""},function(){return n.checkUpgrade()})}},_l("\u786E\u8BA4"))):e.createElement(e.Fragment,null,e.createElement("img",{className:"uploadImg",src:i.name?$r():_r()}),i.name?e.createElement(e.Fragment,null,e.createElement("div",{className:"Font17"},i.name),e.createElement("div",{className:"Gray_75 mTop6"},_l("\u5927\u5C0F\uFF1A%0",(0,ne.sS)(i.size))),s&&e.createElement("div",{className:"mTop15 errTip Font14"},e.createElement("span",{className:"icon-closeelement-bg-circle Font15 mRight6"}),e.createElement("span",null,_l(s)))):e.createElement("div",{className:"Gray_bd"},_l("\u8BF7\u9009\u62E9.mdy\u683C\u5F0F\u7684\u5E94\u7528\u6587\u4EF6")),(d||p)&&e.createElement("div",{className:"flexRow mTop16"},e.createElement("div",{className:"notificationIconWrap"},e.createElement("i",{className:"icon-loading_button Font20 ThemeColor3"})),e.createElement("span",{className:"Gray_75 mLeft10"},p?_l("\u6B63\u5728\u6821\u9A8C\u5347\u7EA7\u5185\u5BB9..."):_l("\u6B63\u5728\u89E3\u6790\u6587\u4EF6..."))),p&&e.createElement("div",{className:"Gray_9e Font14 mTop16"},_l("\u6B64\u6B65\u9AA4\u53EF\u80FD\u8017\u65F6\u8F83\u4E45\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"))),p?"":U().isEmpty(i)?n.renderUploadBtn(e.createElement(Ze.ZP,{type:"primary",radius:!0,className:V()({Visibility:d})},_l("\u4E0A\u4F20\u6587\u4EF6"))):n.renderUploadBtn(e.createElement("div",{className:V()("ThemeColor Hand",{Visibility:d})},_l("\u91CD\u65B0\u4E0A\u4F20")))))},n.checkAllCurrentType=function(r,i){var s,c,l=n.state,p=l.contrasts,d=l.worksheetDetailData,u=l.currentWorksheet,g=u||{},f=g.id,h=f&&d[f]||{},E=h.checkedInfo,w=h.data,m=U().includes(Fn,i),I=m?E:n.state.checkedInfo,T=n.getIds(i,m?w:p),x=(0,y.default)({},I,(s={},(0,Ce.default)(s,i+"CheckAll",!r),(0,Ce.default)(s,i+"CheckIds",r?[]:T),s)),B=f&&wn()(x).every(function(N){return!x[N]});n.setState({checkedInfo:m?n.state.checkedInfo:B?(0,y.default)({},x,(c={},(0,Ce.default)(c,i+"CheckAll",!1),(0,Ce.default)(c,i+"CheckIds",x[i+"CheckIds"].filter(function(N){return N!==f})),c)):x,worksheetDetailData:m?(0,y.default)({},d,(0,Ce.default)({},f,(0,y.default)({},d[f],{checkedInfo:x,isPartialChanges:wn()(x).some(function(N){return!x[N]})}))):d})},n.checkItem=function(r){var i,s,c=r.checked,l=r.type,p=r.it,d=r.currentItemAllList,u=d===void 0?[]:d,g=n.state,f=g.worksheetDetailData,h=g.currentWorksheet,E=h||{},w=E.id,m=w&&f[w]||{},I=m.checkedInfo,T=U().includes(Fn,l),x=T?I:n.state.checkedInfo,B=u.map(function(b){return b.id}),N=x[l+"CheckIds"]||[],S=c?N.filter(function(b){return b!==p.id}):N.concat(p.id),Z=B.every(function(b){return U().includes(S,b)}),k=(0,y.default)({},x,(i={},(0,Ce.default)(i,l+"CheckAll",!!Z),(0,Ce.default)(i,l+"CheckIds",S),i)),v=w&&wn()(k).every(function(b){return!k[b]});n.setState({checkedInfo:T?n.state.checkedInfo:v?(0,y.default)({},k,(s={},(0,Ce.default)(s,l+"CheckAll",!1),(0,Ce.default)(s,l+"CheckIds",k[l+"CheckIds"].filter(function(b){return b!==w})),s)):k,worksheetDetailData:T?(0,y.default)({},f,(0,Ce.default)({},w,(0,y.default)({},f[w],{checkedInfo:k,isPartialChanges:wn()(k).some(function(b){return!k[b]})}))):f})},n.getWorksheetDetailParams=function(){var r=n.state,i=r.worksheetDetailData,s=r.contrasts,c=s===void 0?{}:s,l=c.worksheets,p=l.map(function(d){var u=d.id,g=d.upgradeType;return{worksheet:{id:u,upgradeType:g}}});return p},n.getParams=function(r){var i=n.state.contrasts;return(i[r]||[]).filter(function(s){return U().includes(n.state.checkedInfo[r+"CheckIds"]||[],s.id)}).map(function(s){var c=s.id,l=s.upgradeType;return{id:c,upgradeType:l}})},n.handleUpgrade=function(){n.setState({showUpgradeStatus:!0});var r=n.props.appDetail,i=n.state,s=i.upgradeId,c=i.backupCurrentVersion,l=i.matchOffice,p=i.url,d={id:s,appId:r.id,url:p,worksheets:n.getWorksheetDetailParams(),pages:n.getParams("pages"),roles:n.getParams("roles"),workflows:n.getParams("workflows"),backupCurrentVersion:c,matchOffice:l};ce.Z.upgrade(d).then(function(u){})},n.renderUpgradeScope=function(){var r=n.state,i=r.expandTypeList,s=r.checkedInfo,c=s===void 0?{}:s,l=r.contrasts,p=r.worksheetDetailData,d=r.backupCurrentVersion,u=r.matchOffice,g=[];return Wn.forEach(function(f){var h=c[f+"CheckIds"];h&&!U().isEmpty(h)&&(g=g.concat(h))}),e.createElement("div",{className:"pBottom68"},e.createElement("div",{className:"Font14 mBottom20"},_l("\u672C\u6B21\u5347\u7EA7\u5C06\u4F1A\u6709\u4EE5\u4E0B\u53D8\u66F4")),$e.YK.map(function(f){var h=f.type,E=l[h]||[],w=U().includes(i,f.type);return U().isEmpty(E)?null:e.createElement(ht,{isWorksheetDetail:!1,itleClassName:"Font15",item:f,itemList:E,isExpand:w,checkedInfo:c,worksheetDetailData:p,handleExpandCollapse:n.handleExpandCollapse,checkAllCurrentType:n.checkAllCurrentType,checkItem:n.checkItem,openShowUpgradeDetail:n.openShowUpgradeDetail})}),e.createElement("div",{className:"importActionWrap"},e.createElement("div",{className:"actionContent"},e.createElement(je.Z,{checked:u,onClick:function(h){n.setState({matchOffice:!h})}}),e.createElement("span",{className:"mRight30"},_l("\u5BFC\u5165\u65F6\u5339\u914D\u4EBA\u5458\u90E8\u95E8")),e.createElement(je.Z,{checked:d,onClick:function(h){n.setState({backupCurrentVersion:!h})}}),e.createElement("span",null,_l("\u5347\u7EA7\u65F6\u540C\u65F6\u5907\u4EFD\u5F53\u524D\u7248\u672C")),e.createElement(Ze.ZP,{type:"primary",className:"mLeft30",onClick:n.handleUpgrade},_l("\u5F00\u59CB\u5BFC\u5165")))))},n.openShowUpgradeDetail=function(r){var i=r.id,s=r.upgradeType,c=r.sourceId,l=n.props.appDetail,p=n.state,d=p.worksheetDetailData,u=p.upgradeId;if(d[i]){n.setState({currentWorksheet:{id:i,upgradeType:s},showUpgradeDetail:!0});return}ce.Z.getWorksheetUpgrade({appId:l.id,id:u,upgradeType:s,worksheetId:c}).then(function(g){var f=g.controls,h=f===void 0?[]:f,E=g.views,w=E===void 0?[]:E;h=h.map(function(I){return(0,y.default)({},I,{icon:(0,sn.hB)(I.type)})}),w=w.map(function(I){return(0,y.default)({},I,{icon:Pr(I.type)})});var m={addFields:h.filter(function(I){return I.upgradeType===3}),updateFields:h.filter(function(I){return I.upgradeType===2}),addView:w.filter(function(I){return I.upgradeType===3}),updateView:w.filter(function(I){return I.upgradeType===2})};n.setState({currentWorksheet:{id:i,upgradeType:s},showUpgradeDetail:!0,worksheetDetailData:(0,y.default)({},d,(0,Ce.default)({},i,{upgradeType:s,data:m,checkedInfo:kn({typeList:Fn,source:m,defaultCheckedAll:!0})}))})})},n.clickBack=function(){Ae.Z.confirm({title:_l("\u9000\u51FA\u5BFC\u5165\u5347\u7EA7"),description:_l("\u5F53\u524D\u8FDB\u7A0B\u4E0D\u4F1A\u88AB\u4FDD\u5B58"),okText:_l("\u9000\u51FA"),onOk:function(){n.props.onCancel()}})},n.state={contrasts:{},currentWorksheet:{},current:0,file:{},errTip:_l("\u5BFC\u5165\u6587\u4EF6\u4E0D\u5728\u5141\u8BB8\u5347\u7EA7\u8303\u56F4\u5185"),compareLoading:!1,isEncrypt:!1,expandTypeList:["worksheets","pages","roles","workflows"],checkedInfo:kn({typeList:Wn,source:[],defaultCheckedAll:!0}),worksheetDetailData:{},worksheetDetailParams:{},backupCurrentVersion:!0,matchOffice:!0,showUpgradeStatus:!1},n}return(0,Xe.default)(a,[{key:"render",value:function(){var n=this,r=this.props.appDetail,i=r===void 0?{}:r,s=this.state,c=s.current,l=s.showUpgradeDetail,p=s.currentWorksheet,d=s.worksheetDetailData,u=s.showUpgradeStatus;return e.createElement("div",{className:"upgradeProcessWrap"},e.createElement("div",{className:"upgradeProcessHeader"},e.createElement("div",{className:"w110"},e.createElement("i",{className:"icon-arrow_back Gray_9e Font24 Hand TxtMiddle",onClick:this.clickBack}),e.createElement("span",{className:"Font17 TxtMiddle mLeft12 bold"},_l("\u5BFC\u5165\u5347\u7EA7"))),e.createElement(hn.Z,null),e.createElement("div",{className:"flex flexRow justifyContentCenter"},e.createElement("div",{className:"applicationIcon ",style:{backgroundColor:i.iconColor}},e.createElement(Ge.Z,{url:i.iconUrl,fill:"#fff",size:18})),e.createElement("div",{className:"Font15"},i.name)),e.createElement("div",{className:"Gray_9d Font14 w110 TxtRight helpIcon"},e.createElement(ln.Z,{title:_l("\u5E2E\u52A9"),type:1,href:"https://help.mingdao.com/application/import-export"}))),e.createElement("div",{className:"upgradeProcessContent"},e.createElement(e.Fragment,null,e.createElement(ft.Z,{current:c,className:"mBottom20"},no.map(function(g){return e.createElement(eo,{key:g.title,title:g.title,disabled:!0})}))),c===0&&this.renderUploadFile(),c===1&&this.renderUpgradeScope()),l&&e.createElement(Ur,{currentWorksheet:p,visible:l,worksheetDetailData:d,checkAllCurrentType:this.checkAllCurrentType,checkItem:this.checkItem,onClose:function(){return n.setState({showUpgradeDetail:!1,currentWorksheet:{}})}}),u&&e.createElement(Kr,{appPkg:(0,y.default)({},i,{appStatus:4})}))}}]),a}(e.Component),ao=(0,Y.Z)([`
  overflow: auto;
  .logsItem {
    height: 85px;
    display: flex;
    padding-top: 20px;
    border-bottom: 1px solid #eaeaea;
    .avatar {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
  .Gray_a4 {
    color: #a4a4a4;
  }
`],[`
  overflow: auto;
  .logsItem {
    height: 85px;
    display: flex;
    padding-top: 20px;
    border-bottom: 1px solid #eaeaea;
    .avatar {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
  .Gray_a4 {
    color: #a4a4a4;
  }
`]),ro=z.ZP.div(ao),oo=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.renderEmpty=function(){return e.createElement(Ln,{icon:"unarchive",radiusSize:130,iconClassName:"Font50 Gray_9e",emptyTxt:_l("\u6682\u65E0\u5347\u7EA7\u8BB0\u5F55"),emptyTxtClassName:"Font17 Gray_bd mTop15"})},n.getUpgradeLogs=function(){n.setState({loading:!0});var r=n.props.appId;ce.Z.getUpgradeLogs({appId:r}).then(function(i){n.setState({loading:!1,logList:i})}).catch(function(i){n.setState({loading:!1})})},n.clickImportUpgrade=function(){var r=n.props.projectId,i=(0,ne.XH)(r,tn.UU.appBackupRestore);if(i==="2"){(0,ne.j0)(r,tn.UU.appBackupRestore);return}n.setState({showUpgradeProcess:!0})},n.state={showUpgradeProcess:!1,logList:[]},n}return(0,Xe.default)(a,[{key:"componentDidMount",value:function(){this.getUpgradeLogs()}},{key:"render",value:function(){var n=this,r=this.props,i=r.projectId,s=r.data,c=r.appId,l=this.state,p=l.showUpgradeProcess,d=l.loading,u=l.logList;return e.createElement(e.Fragment,null,e.createElement(Le,{title:_l("\u5BFC\u5165\u5347\u7EA7"),addBtnName:_l("\u5BFC\u5165\u5347\u7EA7"),description:_l("\u5BFC\u5165\u5355\u4E2A\u5E94\u7528\u6587\u4EF6\uFF0C\u5B9E\u73B0\u5BF9\u5F53\u524D\u5E94\u7528\u5FEB\u901F\u5347\u7EA7\uFF0C\u5347\u7EA7\u4E2D\u7684\u5E94\u7528\u5C06\u4E3A\u4E0D\u53EF\u7528\u72B6\u6001"),link:"https://help.mingdao.com/application/import-export",handleAdd:this.clickImportUpgrade}),!d&&!U().isEmpty(u)?e.createElement(ro,null,u.map(function(g){var f=g.fileName,h=g.createTime,E=g.creater;return e.createElement("div",{className:"logsItem"},e.createElement("img",{className:"avatar",src:E.avatar}),e.createElement("div",{className:"flex flexColumn pTop2"},e.createElement("div",{className:"Gray_a4 mBottom8"},_l(E.fullName+" \u64CD\u4F5C\u5BFC\u5165\u5347\u7EA7")),e.createElement("div",null,f)),e.createElement("div",{className:"Gray_a4 Font12 mRight20 pTop2"},h))})):this.renderEmpty(),p&&e.createElement(to,{projectId:i,appDetail:s,onCancel:function(){return n.setState({showUpgradeProcess:!1})}}))}}]),a}(e.Component),lo=C(43799),io=C.n(lo),as=C(60954),Qn=C(12386),Ve=C(41436),rs=C(10524),so=C(31059),co=function(a){var o=a.app,n=a.langs,r=n===void 0?[]:n,i=a.visible,s=a.onCancel,c=a.onSave,l=(0,e.useState)(r.map(function(f){return _.find(Ve.Z,{code:f.type}).key})),p=(0,F.Z)(l,2),d=p[0],u=p[1],g=function(){ce.Z.createAppLang({projectId:o.projectId,appId:o.id,langTypes:d.map(function(h){return _.find(Ve.Z,{key:h}).code})}).then(function(h){var E=h.suc;E.length&&(s(),c())})};return e.createElement(Ae.Z,{centered:!0,title:_l("\u6DFB\u52A0\u8BED\u8A00"),visible:i,onOk:g,onCancel:s},e.createElement("div",{className:"flexColumn mTop10"},Ve.Z.map(function(f){return e.createElement(so.default,{className:"mLeft0 mBottom10",key:f.key,disabled:_.find(r,{type:f.code}),checked:d.includes(f.key),onChange:function(E){E.target.checked?u(d.concat(f.key)):u(d.filter(function(w){return w!==f.key}))}},f.value)})))};const Ct=co;var po=(0,Y.Z)([`
  .header {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .item {
    cursor: pointer;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    &:hover {
      .langName {
        color: #2196f3;
      }
      background-color: #f5f5f5;
    }
  }
  .operate {
    width: 50px;
  }
  .icon-more_horiz:hover {
    color: #2196f3 !important;
  }
`],[`
  .header {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .item {
    cursor: pointer;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    &:hover {
      .langName {
        color: #2196f3;
      }
      background-color: #f5f5f5;
    }
  }
  .operate {
    width: 50px;
  }
  .icon-more_horiz:hover {
    color: #2196f3 !important;
  }
`]),uo=z.ZP.div(po);function mo(t){var a=t.app,o=t.langs,n=t.onGetAppLangs,r=t.onChangeLangInfo,i=(0,e.useState)(!1),s=(0,F.Z)(i,2),c=s[0],l=s[1],p=function(u){Ae.Z.confirm({title:_l("\u786E\u8BA4\u662F\u5426\u5220\u9664 %0 ?",_.find(Ve.Z,{code:u.type}).value),description:_l("\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u8BED\u8A00"),buttonType:"danger",onOk:function(){ce.Z.deleteAppLang({projectId:a.projectId,appId:a.id,id:u.id}).then(function(f){f?(alert(_l("\u5220\u9664\u6210\u529F")),n()):alert(_l("\u5220\u9664\u5931\u8D25"),2)})}})};return e.createElement("div",{className:"h100",style:{padding:"20px 40px"}},e.createElement(Le,{title:_l("\u591A\u8BED\u8A00"),addBtnName:_l("\u6DFB\u52A0\u8BED\u8A00"),description:_l("\u8BBE\u7F6E\u7528\u6237\u5728\u8BBF\u95EE\u5E94\u7528\u65F6\u53EF\u4EE5\u4F7F\u7528\u7684\u8BED\u8A00"),handleAdd:function(){return l(!0)}}),c&&e.createElement(Ct,{app:a,langs:o,visible:c,onSave:n,onCancel:function(){return l(!1)}}),e.createElement(uo,null,e.createElement("div",{className:"header flexRow Font14 Gray_9e"},e.createElement("div",{className:"flex pLeft10"},_l("\u8BED\u8A00")),e.createElement("div",{className:"flex"},_l("\u521B\u5EFA\u4EBA")),e.createElement("div",{className:"flex"},_l("\u521B\u5EFA\u65F6\u95F4")),e.createElement("div",{className:"flex"},_l("\u6700\u540E\u66F4\u65B0\u65F6\u95F4")),e.createElement("div",{className:"operate"})),e.createElement("div",{className:"content Font14"},o.map(function(d){return e.createElement("div",{className:"flexRow item",key:d.id},e.createElement("div",{className:"flex pLeft10 bold langName",onClick:function(){return r(d)}},_.find(Ve.Z,{code:d.type}).value),e.createElement("div",{className:"flex"},d.creator.fullname),e.createElement("div",{className:"flex"},window.createTimeSpan(d.createTime)),e.createElement("div",{className:"flex"},window.createTimeSpan(d.lastModifyTime)),e.createElement("div",{className:"operate"},e.createElement(Rn.default,{trigger:["click"],overlay:e.createElement(Qn.default,{style:{width:100}},e.createElement(Qn.default.Item,{key:"edit",onClick:function(){return r(d)}},_l("\u7F16\u8F91")),e.createElement(Qn.default.Item,{key:"delete",danger:!0,onClick:function(){return p(d)}},_l("\u5220\u9664")))},e.createElement(Q.Z,{className:"Gray_75 Font20",icon:"more_horiz"}))))}))))}var os=C(34279),jn=C(64749),ls=C(55055),fo=C(62443),go=C(47426),ho=C(53280),is=C(21133),vo=C(60171),xo=(0,Y.Z)([`
  width: 260px;
  padding: 10px;
  border-right: 1px solid #dddddd;

  .normalLineHeight {
    line-height: normal;
  }

  .appItem {
    border-radius: 4px;
    padding: 8px 6px;
    &.active {
      svg {
        fill: #2196f3 !important;
      }
      font-weight: bold;
      color: #2196f3;
      background-color: #ecf7fe;
    }
  }

  .treeWrap {
    min-height: 0;
    margin: 0 -10px;
    padding: 0 10px;
  }

  .ant-tree {
    .ant-tree-switcher-leaf-line::after {
      top: 4px;
    }
    .ant-tree-treenode-leaf-last .ant-tree-switcher-leaf-line::before {
      height: 18px !important;
    }
    .anticon-plus-square,
    .anticon-minus-square {
      svg path {
        &:first-child {
          fill: #333;
        }
        &:last-child {
          fill: #bdbdbd;
        }
      }
    }
    .ant-tree-node-content-wrapper.ant-tree-node-selected {
      .icon {
        color: #2196f3 !important;
      }
      svg {
        fill: #2196f3 !important;
      }
      font-weight: bold;
      color: #2196f3;
      background-color: #ecf7fe;
    }
    .ant-tree-title {
      width: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ant-tree-treenode,
    .ant-tree-node-content-wrapper {
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
    .ant-tree-switcher,
    .ant-tree-node-content-wrapper,
    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      line-height: 36px;
    }
    .ant-tree-node-content-wrapper,
    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      display: flex;
      align-items: center;
      min-height: 36px;
    }
    .ant-tree-node-content-wrapper .ant-tree-iconEle:empty {
      display: none !important;
    }
  }
`],[`
  width: 260px;
  padding: 10px;
  border-right: 1px solid #dddddd;

  .normalLineHeight {
    line-height: normal;
  }

  .appItem {
    border-radius: 4px;
    padding: 8px 6px;
    &.active {
      svg {
        fill: #2196f3 !important;
      }
      font-weight: bold;
      color: #2196f3;
      background-color: #ecf7fe;
    }
  }

  .treeWrap {
    min-height: 0;
    margin: 0 -10px;
    padding: 0 10px;
  }

  .ant-tree {
    .ant-tree-switcher-leaf-line::after {
      top: 4px;
    }
    .ant-tree-treenode-leaf-last .ant-tree-switcher-leaf-line::before {
      height: 18px !important;
    }
    .anticon-plus-square,
    .anticon-minus-square {
      svg path {
        &:first-child {
          fill: #333;
        }
        &:last-child {
          fill: #bdbdbd;
        }
      }
    }
    .ant-tree-node-content-wrapper.ant-tree-node-selected {
      .icon {
        color: #2196f3 !important;
      }
      svg {
        fill: #2196f3 !important;
      }
      font-weight: bold;
      color: #2196f3;
      background-color: #ecf7fe;
    }
    .ant-tree-title {
      width: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ant-tree-treenode,
    .ant-tree-node-content-wrapper {
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
    .ant-tree-switcher,
    .ant-tree-node-content-wrapper,
    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      line-height: 36px;
    }
    .ant-tree-node-content-wrapper,
    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      display: flex;
      align-items: center;
      min-height: 36px;
    }
    .ant-tree-node-content-wrapper .ant-tree-iconEle:empty {
      display: none !important;
    }
  }
`]),Co=z.ZP.div(xo),Eo=[{title:_l("\u5B57\u6BB5"),type:"control"},{title:_l("\u89C6\u56FE"),type:"view"},{title:_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"),type:"customAction"}],Io=function(a,o,n){var r=function s(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(c.type===0){var p=Eo.map(function(u){return(0,y.default)({},u,{workSheetId:c.workSheetId,key:c.workSheetId+"-"+u.type})});return c.workSheetName.toLocaleLowerCase().includes(n)?p:[]}if(c.type===2){var d=_.get(_.find(l,{appSectionId:c.workSheetId}),"workSheetInfo")||[];return d.map(function(u){return{title:(0,ne.T3)(a,u.workSheetId).name||u.workSheetName,originalTitle:u.workSheetName,key:u.workSheetId,type:u.type,externalLinkInfo:c.type===1&&c.externalLinkId?{urlTemplate:c.urlTemplate,desc:c.configuration.desc}:void 0,icon:e.createElement(Ge.Z,{className:"normalLineHeight",url:u.iconUrl,fill:"#9e9e9e",size:17}),children:s(u)}}).filter(function(u){return n?u.title.toLocaleLowerCase().includes(n)?!0:u.children.length:!0})}return[]},i=o.map(function(s){return{title:(0,ne.T3)(a,s.appSectionId).name||s.name,originalTitle:s.name,key:s.appSectionId,type:2,icon:e.createElement(Q.Z,{className:"Font17 Gray_9e",icon:"gourup_default"}),children:s.workSheetInfo.map(function(c){return{title:(0,ne.T3)(a,c.workSheetId).name||c.workSheetName,originalTitle:c.workSheetName,key:c.workSheetId,type:c.type,externalLinkInfo:c.type===1&&c.externalLinkId?{urlTemplate:c.urlTemplate,desc:c.configuration.desc}:void 0,parentId:s.appSectionId,icon:e.createElement(Ge.Z,{className:"normalLineHeight",url:c.iconUrl,fill:"#9e9e9e",size:17}),children:r(c,s.childSections)}}).filter(function(c){return n?c.title.toLocaleLowerCase().includes(n)?!0:c.children.length:!0})}}).filter(function(s){return n?s.title.toLocaleLowerCase().includes(n)?!0:s.children.length:!0});return i.length===1&&!i[0].title?i[0].children:i},bo=function(a){return _.flatten(a.map(function(o){var n=o.children.map(function(r){return r.key});return[o.key].concat(n)}))};function wo(t){var a=t.style,o=t.app,n=t.translateData,r=t.selectedKeys,i=t.onSelectedKeys,s=o.name,c=o.iconUrl,l=o.sections,p=(0,e.useState)(""),d=(0,F.Z)(p,2),u=d[0],g=d[1],f=(0,e.useState)([]),h=(0,F.Z)(f,2),E=h[0],w=h[1],m=Io(o.id,l,u.toLocaleLowerCase());return(0,e.useEffect)(function(){u&&w(bo(m))},[u]),e.createElement(Co,{className:"flexColumn",style:a},e.createElement("div",{className:"searchWrap flexRow alignItemsCenter pLeft5 mBottom10"},e.createElement(Q.Z,{className:"Gray_9e Font20 mRight5",icon:"search"}),e.createElement("input",{placeholder:_l("\u641C\u7D22"),className:"flex",value:u,onChange:function(T){g(T.target.value)}}),u&&e.createElement(Q.Z,{className:"Gray_9e pointer Font15",icon:"closeelement-bg-circle",onClick:function(){return g("")}})),e.createElement("div",{className:"treeWrap flexColumn flex"},e.createElement("div",{className:V()("flexRow alignItemsCenter pointer appItem",{active:r.includes("app")}),onClick:function(){i(["app"],{node:(0,y.default)({},o,{type:"app"})})}},e.createElement(Ge.Z,{url:c,fill:"#9e9e9e",size:18}),e.createElement("span",{className:"Font13 mLeft5 ellipsis"},(0,ne.T3)(o.id,o.id).name||s)),e.createElement(Re.Z,{className:"flex mTop10"},e.createElement(vo.default,{showLine:{showLeafIcon:!1},showIcon:!0,expandedKeys:E,onExpand:function(T){w(T)},selectedKeys:r,onSelect:i,treeData:m}))))}function De(t){var a=t.className,o=t.style,n=t.disabled,r=t.type,i=t.value,s=t.onChange,c=(0,e.useState)(i),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=r==="textArea"?he.default.TextArea:he.default;(0,e.useEffect)(function(){d(i)},[i]);var g=function(h){i!==h.target.value&&s(h.target.value||void 0)};return e.createElement(u,{className:a,style:o,disabled:n,value:p,onChange:function(h){return d(h.target.value)},onBlur:g,onKeyDown:function(h){h.which===13&&g(h)}})}var ko=C(56493),Ao=C(82248),xn=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return a.replace(/<[^>]*>/g,"").replace(/&nbsp;/ig,"")};function An(t){var a=t.value,o=t.originalValue,n=t.onChange,r=(0,e.useState)(!1),i=(0,F.Z)(r,2),s=i[0],c=i[1];return e.createElement(e.Fragment,null,e.createElement(he.default.TextArea,{readOnly:!0,style:{resize:"none"},className:"flex pointer",value:xn(a),placeholder:_l("\u70B9\u51FB\u8F93\u5165\u5185\u5BB9"),onClick:function(){return c(!0)}}),e.createElement(Dn.Z,{centered:!0,zIndex:1e3,width:1600,footer:null,destroyOnClose:!0,className:"appIntroDialog appMultilingualDialog",wrapClassName:"appIntroDialogWrapCenter",visible:s,onClose:function(){return c(!1)},maskStyle:{backgroundColor:"rgba(0, 0, 0, 0.7)"},bodyStyle:{padding:0},closable:!1},e.createElement(Ao.Z,{title:_l("\u5E94\u7528\u8BF4\u660E"),description:a,permissionType:100,isEditing:!0,cacheKey:"appMultilingual",renderLeftContent:function(){return e.createElement(ko.Z,{data:o,className:"editorContent mdEditorContent",disabled:!0,showTool:!1,changeSetting:!1})},onSave:function(p){n(p||void 0),c(!1)},onCancel:function(){return c(!1)}})))}var cn={app:0,section:1,wrokSheet:2,customePage:3,wrokSheetView:4,wrokSheetFiled:5,wrokSheetCustomAction:6};function yo(t){var a=t.app,o=t.translateData,n=t.comparisonLangId,r=t.comparisonLangData,i=t.selectNode,s=t.onEditAppLang,c=(0,e.useState)(!1),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=_.find(o,{correlationId:a.id})||{},g=u.data||{},f=(0,ne.T3)(a.id,a.id,r),h=function(w){s({id:u.id,parentId:"",correlationId:a.id,type:cn.app,data:(0,y.default)({},g,w)})};return e.createElement(e.Fragment,null,e.createElement("div",{className:"pAll20"},e.createElement("div",{className:"Font14 bold mBottom20"},(0,ne.T3)(a.id,a.id).name||i.name),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5E94\u7528\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:n?f.name:i.name,disabled:!0}),e.createElement(De,{className:"flex",value:g.name,onChange:function(w){return h({name:w})}})),e.createElement("div",{className:"flexRow nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5E94\u7528\u8BF4\u660E")),e.createElement(he.default.TextArea,{style:{resize:"none"},className:"flex mRight20",value:xn(n?f.description:i.description),disabled:!0}),e.createElement(An,{value:g.description,originalValue:i.description,onChange:function(w){return h({description:w})}}))))}function No(t){var a=t.app,o=t.selectNode,n=t.translateData,r=t.comparisonLangId,i=t.comparisonLangData,s=t.onEditAppLang,c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)({}),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=_.find(n,{correlationId:o.key})||{},w=E.data||{};(0,e.useEffect)(function(){d(!0),Se.Z.getWorksheetInfo({worksheetId:o.key}).then(function(b){d(!1),h(b)})},[o.key]);var m=function(W){s({id:E.id,parentId:o.parentId,correlationId:o.key,type:cn.wrokSheet,data:(0,y.default)({},w,W)})};if(p)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null));var I=f.desc,T=f.entityName,x=f.advancedSetting,B=x===void 0?{}:x,N=(0,ne.T3)(a.id,o.key,i),S=r?N.formTitle:B.title,Z=r?N.formSub:B.sub,k=r?N.formContinue:B.continue,v=r?N.recordName:T;return e.createElement("div",{className:"pAll20"},e.createElement("div",{className:"Font14 bold mBottom20"},w.name||o.originalTitle),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5DE5\u4F5C\u8868\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:r?N.name:o.originalTitle,disabled:!0}),e.createElement(De,{className:"flex",value:w.name,onChange:function(W){return m({name:W})}})),e.createElement("div",{className:"flexRow nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5DE5\u4F5C\u8868\u8BF4\u660E")),e.createElement(he.default.TextArea,{style:{resize:"none"},className:"flex mRight20",value:xn(r?N.description:I),disabled:!0}),e.createElement(An,{value:w.description,originalValue:I,onChange:function(W){return m({description:W})}})),!!(S||Z||k)&&e.createElement("div",{className:"Font14 bold mTop20 mBottom20"},_l("\u63D0\u4EA4\u8868\u5355")),S&&e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u8868\u5355\u6807\u9898")),e.createElement(he.default,{className:"flex mRight20",value:S,disabled:!0}),e.createElement(De,{className:"flex",disabled:!S,value:w.formTitle,onChange:function(W){return m({formTitle:W})}})),Z&&e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u63D0\u4EA4\u6309\u94AE")),e.createElement(he.default,{className:"flex mRight20",value:Z,disabled:!0}),e.createElement(De,{className:"flex",disabled:!Z,value:w.formSub,onChange:function(W){return m({formSub:W})}})),k&&e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u7EE7\u7EED\u521B\u5EFA\u6309\u94AE")),e.createElement(he.default,{className:"flex mRight20",value:k,disabled:!0}),e.createElement(De,{className:"flex",disabled:!k,value:w.formContinue,onChange:function(W){return m({formContinue:W})}})),e.createElement("div",{className:"Font14 bold mTop20 mBottom20"},_l("\u8BB0\u5F55\u540D\u79F0")),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u8BB0\u5F55\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:v,disabled:!0}),e.createElement(De,{className:"flex",disabled:!v,value:w.recordName,onChange:function(W){return m({recordName:W})}})))}var Et=C(84731);function So(t){var a=t.app,o=t.selectNode,n=t.translateData,r=t.comparisonLangId,i=t.comparisonLangData,s=t.onEditAppLang,c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)(""),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=_.find(n,{correlationId:o.key})||{},w=E.data||{};(0,e.useEffect)(function(){o.externalLinkInfo?(d(!1),h(o.externalLinkInfo.desc)):(d(!0),Et.Z.getPage({appId:o.key}).then(function(T){d(!1),h(T.desc)}))},[o.key]);var m=function(x){s({id:E.id,parentId:o.parentId,correlationId:o.key,type:cn.customePage,data:(0,y.default)({},w,x)})};if(p)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null));var I=(0,ne.T3)(a.id,o.key,i);return e.createElement("div",{className:"pAll20"},e.createElement("div",{className:"Font14 bold mBottom20"},w.name||o.originalTitle),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u81EA\u5B9A\u4E49\u9875\u9762\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:r?I.name:o.originalTitle,disabled:!0}),e.createElement(De,{className:"flex",value:w.name,onChange:function(x){return m({name:x})}})),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u81EA\u5B9A\u4E49\u9875\u9762\u8BF4\u660E")),e.createElement(he.default.TextArea,{style:{resize:"none"},className:"flex mRight20",value:xn(r?I.description:f),disabled:!0}),e.createElement(An,{value:w.description,originalValue:f,onChange:function(x){return m({description:x})}})))}function To(t){var a=t.app,o=t.translateData,n=t.comparisonLangId,r=t.comparisonLangData,i=t.selectNode,s=t.onEditAppLang,c=_.find(o,{correlationId:i.key})||{},l=c.data||{},p=function(g){s({id:c.id,parentId:a.id,correlationId:i.key,type:cn.section,data:(0,y.default)({},l,g)})},d=n?(0,ne.T3)(a.id,i.key,r).name:i.originalTitle;return e.createElement("div",{className:"pAll20"},e.createElement("div",{className:"Font14 bold mBottom20"},l.name||i.originalTitle),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5206\u7EC4\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:d,disabled:!0}),e.createElement(De,{className:"flex",disabled:!d,value:l.name,onChange:function(g){return p({name:g})}})))}var Hn=C(86674),It=C(1694),Bo=(0,Y.Z)([`
  .controlsNav {
    width: 180px;
    .control {
      height: 36px;
      border-radius: 4px;
      padding: 0 10px;
      margin-right: 12px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .controlsContent {
    flex: 1;
    .controlName .icon {
      color: #9e9e9e;
    }
  }
  .controlWrap {
    .controlName {
      padding: 3px;
    }
    .nodeItem {
      padding: 0 3px;
    }
  }
`],[`
  .controlsNav {
    width: 180px;
    .control {
      height: 36px;
      border-radius: 4px;
      padding: 0 10px;
      margin-right: 12px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .controlsContent {
    flex: 1;
    .controlName .icon {
      color: #9e9e9e;
    }
  }
  .controlWrap {
    .controlName {
      padding: 3px;
    }
    .nodeItem {
      padding: 0 3px;
    }
  }
`]),Do=z.ZP.div(Bo);function Zo(t){var a=t.app,o=t.selectNode,n=t.translateData,r=t.comparisonLangId,i=t.comparisonLangData,s=t.onEditAppLang,c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)({}),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=(0,e.useState)(""),w=(0,F.Z)(E,2),m=w[0],I=w[1],T=(0,e.useRef)();if((0,e.useEffect)(function(){d(!0),Se.Z.getWorksheetInfo({worksheetId:o.workSheetId,getTemplate:!0}).then(function(v){d(!1),h(v)})},[o.key]),p)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null));var x=function(b){var W=document.querySelector(".control-"+b.controlId),M="highlight",H=W.querySelector(".controlName");$(H).addClass(M).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){$(this).removeClass(M)}),$(T.current.nanoScroller).nanoScroller({scrollTop:W.offsetTop})},B=f.template,N=B===void 0?{}:B,S=(N.controls||[]).filter(function(v){return!Hn.c_.includes(v.controlId)}),Z=function(b){var W=_.find(n,{correlationId:b.controlId})||{},M=W.data||{};return e.createElement("div",{className:"control flexRow alignItemsCenter pointer",key:b.controlId,onClick:function(){return x(b)}},e.createElement(Q.Z,{icon:(0,sn.hB)(b.type),className:"Gray_9e Font16"}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},M.name||b.controlName))},k=function(b){var W=_.find(n,{correlationId:b.controlId})||{},M=W.data||{},H=(0,ne.T3)(a.id,b.controlId,i),j=b.type,P=b.advancedSetting;P=P===void 0?{}:P;var A=P.showtype,D=P.checktype,R=P.hinttype,G=R===void 0?"0":R,L=function(ee){s({id:W.id,parentId:o.workSheetId,correlationId:b.controlId,type:cn.wrokSheetFiled,data:(0,y.default)({},M,ee)})},O=r?H.hintText:b.hint,X=r?H.description:b.desc;return e.createElement("div",{className:V()("flexColumn mBottom30 controlWrap","control-"+b.controlId),key:b.controlId},e.createElement("div",{className:"flexRow alignItemsCenter mBottom15 controlName"},e.createElement(Q.Z,{icon:(0,sn.hB)(b.type),className:"Font16"}),e.createElement("span",{className:"flex mLeft5 Font14 bold ellipsis"},M.name||b.controlName)),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5B57\u6BB5\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:r?H.name:b.controlName,disabled:!0}),e.createElement(De,{className:"flex",value:M.name,onChange:function(ee){return L({name:ee})}})),(It.d$.includes(j)||j===11&&A!=="2"||j===10&&D==="1"||j===29&&A==="3")&&e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_.includes([14,43,49],j)?_l("\u6309\u94AE\u540D\u79F0"):_l("\u5F15\u5BFC\u6587\u5B57")),e.createElement(he.default,{className:"flex mRight20",value:O,disabled:!0}),e.createElement(De,{className:"flex",disabled:!O,value:M.hintText,onChange:function(ee){return L({hintText:ee})}})),!It.Qg.includes(j)&&e.createElement("div",{className:"flexRow nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5B57\u6BB5\u8BF4\u660E")),e.createElement(he.default.TextArea,{style:{resize:"none"},className:"flex mRight20",value:X,disabled:!0}),e.createElement(De,{type:"textArea",className:"flex",disabled:!X,style:{resize:"none"},value:M.description,onChange:function(ee){return L({description:ee})}})),b.type===10010&&e.createElement("div",{className:"flexRow nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u5907\u6CE8\u5185\u5BB9")),e.createElement(he.default.TextArea,{style:{resize:"none"},className:"flex mRight20",value:xn(r?H.remark:b.dataSource),disabled:!0}),e.createElement(An,{value:M.remark,originalValue:b.dataSource,onChange:function(ee){return L({remark:ee})}})))};return e.createElement(Do,{className:"flexRow pAll10 h100"},e.createElement("div",{className:"controlsNav flexColumn"},e.createElement("div",{className:"searchWrap flexRow alignItemsCenter mBottom10"},e.createElement(Q.Z,{className:"Gray_9e Font20 mRight5",icon:"search"}),e.createElement("input",{placeholder:_l("\u5B57\u6BB5"),className:"flex",value:m,onChange:function(b){I(b.target.value)}}),m&&e.createElement(Q.Z,{className:"Gray_9e pointer Font15",icon:"closeelement-bg-circle",onClick:function(){return I("")}})),e.createElement(Re.Z,{className:"flex"},S.filter(function(v){return v.controlName.includes(m)}).map(function(v){return Z(v)}))),e.createElement(Re.Z,{className:"controlsContent",ref:T},e.createElement("div",{className:"pLeft20 pRight20"},S.map(function(v){return k(v)}))))}var Lo=(0,Y.Z)([`
  .viewsNav {
    width: 180px;
    .view {
      height: 36px;
      border-radius: 4px;
      padding: 0 10px;
      margin-right: 12px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .viewsContent {
    flex: 1;
  }
  .viewWrap {
    .viewName {
      padding: 3px;
    }
    .nodeItem {
      padding: 0 3px;
    }
  }
`],[`
  .viewsNav {
    width: 180px;
    .view {
      height: 36px;
      border-radius: 4px;
      padding: 0 10px;
      margin-right: 12px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .viewsContent {
    flex: 1;
  }
  .viewWrap {
    .viewName {
      padding: 3px;
    }
    .nodeItem {
      padding: 0 3px;
    }
  }
`]),Ro=z.ZP.div(Lo);function Fo(t){var a=t.app,o=t.selectNode,n=t.translateData,r=t.comparisonLangId,i=t.comparisonLangData,s=t.onEditAppLang,c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)({}),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=(0,e.useState)(""),w=(0,F.Z)(E,2),m=w[0],I=w[1],T=(0,e.useRef)();if((0,e.useEffect)(function(){d(!0),Se.Z.getWorksheetInfo({worksheetId:o.workSheetId,getViews:!0}).then(function(k){d(!1),h(k)})},[o.key]),p)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null));var x=function(v){var b=document.querySelector(".view-"+v.viewId),W="highlight",M=b.querySelector(".viewName");$(M).addClass(W).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){$(this).removeClass(W)}),$(T.current.nanoScroller).nanoScroller({scrollTop:b.offsetTop})},B=f.views,N=B===void 0?[]:B,S=function(v){var b=_.find(n,{correlationId:v.viewId})||{},W=b.data||{};return e.createElement("div",{className:"view flexRow alignItemsCenter pointer",key:v.viewId,onClick:function(){return x(v)}},e.createElement("span",{className:"mLeft5 Font13 ellipsis"},W.name||v.name))},Z=function(v){var b=_.find(n,{correlationId:v.viewId})||{},W=b.data||{},M=(0,ne.T3)(a.id,v.viewId,i),H=function(P){s({id:b.id,parentId:o.workSheetId,correlationId:v.viewId,type:cn.wrokSheetView,data:(0,y.default)({},W,P)})};return e.createElement("div",{className:V()("flexColumn mBottom30 viewWrap","view-"+v.viewId),key:v.viewId},e.createElement("div",{className:"flexRow alignItemsCenter mBottom15 viewName"},e.createElement("span",{className:"flex Font14 bold ellipsis"},W.name||v.name)),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u89C6\u56FE\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:r?M.name:v.name,disabled:!0}),e.createElement(De,{className:"flex",value:W.name,onChange:function(P){return H({name:P})}})))};return e.createElement(Ro,{className:"flexRow pAll10 h100"},e.createElement("div",{className:"viewsNav flexColumn"},e.createElement("div",{className:"searchWrap flexRow alignItemsCenter mBottom10"},e.createElement(Q.Z,{className:"Gray_9e Font20 mRight5",icon:"search"}),e.createElement("input",{placeholder:_l("\u89C6\u56FE"),className:"flex",value:m,onChange:function(v){I(v.target.value)}}),m&&e.createElement(Q.Z,{className:"Gray_9e pointer Font15",icon:"closeelement-bg-circle",onClick:function(){return I("")}})),e.createElement(Re.Z,{className:"flex"},N.filter(function(k){return k.name.includes(m)}).map(function(k){return S(k)}))),e.createElement(Re.Z,{className:"viewsContent",ref:T},e.createElement("div",{className:"pLeft20 pRight20"},N.map(function(k){return Z(k)}))))}var Wo=(0,Y.Z)([`
  .customActionNav {
    width: 180px;
    .customAction {
      height: 36px;
      border-radius: 4px;
      padding: 0 10px;
      margin-right: 12px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .customActionContent {
    flex: 1;
  }
  .customActionWrap {
    .customActionName {
      padding: 3px;
    }
    .nodeItem {
      padding: 0 3px;
    }
  }
`],[`
  .customActionNav {
    width: 180px;
    .customAction {
      height: 36px;
      border-radius: 4px;
      padding: 0 10px;
      margin-right: 12px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .customActionContent {
    flex: 1;
  }
  .customActionWrap {
    .customActionName {
      padding: 3px;
    }
    .nodeItem {
      padding: 0 3px;
    }
  }
`]),Qo=z.ZP.div(Wo);function jo(t){var a=t.app,o=t.selectNode,n=t.translateData,r=t.comparisonLangId,i=t.comparisonLangData,s=t.onEditAppLang,c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)([]),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=(0,e.useState)(""),w=(0,F.Z)(E,2),m=w[0],I=w[1],T=(0,e.useRef)();if((0,e.useEffect)(function(){d(!0),Se.Z.getWorksheetBtns({worksheetId:o.workSheetId}).then(function(S){d(!1),h(S)})},[o.key]),p)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null));if(!f.length)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100 Gray_9e Font14"},_l("\u6CA1\u6709\u81EA\u5B9A\u4E49\u52A8\u4F5C"));var x=function(Z){var k=document.querySelector(".customAction-"+Z.btnId),v="highlight",b=k.querySelector(".customActionName");$(b).addClass(v).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){$(this).removeClass(v)}),$(T.current.nanoScroller).nanoScroller({scrollTop:k.offsetTop})},B=function(Z){var k=_.find(n,{correlationId:Z.btnId})||{},v=k.data||{};return e.createElement("div",{className:"customAction flexRow alignItemsCenter pointer",key:Z.btnId,onClick:function(){return x(Z)}},e.createElement("span",{className:"mLeft5 Font13 ellipsis"},v.name||Z.name))},N=function(Z){var k=_.find(n,{correlationId:Z.btnId})||{},v=k.data||{},b=(0,ne.T3)(a.id,Z.btnId,i),W=r?b.name:Z.name,M=r?b.description:Z.desc,H=function(P){s({id:k.id,parentId:o.workSheetId,correlationId:Z.btnId,type:cn.wrokSheetCustomAction,data:(0,y.default)({},v,P)})};return e.createElement("div",{className:V()("flexColumn mBottom30 customActionWrap","customAction-"+Z.btnId),key:Z.btnId},e.createElement("div",{className:"flexRow alignItemsCenter mBottom15 customActionName"},e.createElement("span",{className:"flex Font14 bold ellipsis"},v.name||Z.name)),e.createElement("div",{className:"flexRow alignItemsCenter nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u6309\u94AE\u540D\u79F0")),e.createElement(he.default,{className:"flex mRight20",value:W,disabled:!0}),e.createElement(De,{className:"flex",disabled:!W,value:v.name,onChange:function(P){return H({name:P})}})),e.createElement("div",{className:"flexRow nodeItem"},e.createElement("div",{className:"Font13 mRight20 label"},_l("\u6309\u94AE\u8BF4\u660E")),e.createElement(he.default.TextArea,{style:{resize:"none"},className:"flex mRight20",value:M,disabled:!0}),e.createElement(De,{type:"textArea",className:"flex",disabled:!M,style:{resize:"none"},value:v.description,onChange:function(P){return H({description:P})}})))};return e.createElement(Qo,{className:"flexRow pAll10 h100"},e.createElement("div",{className:"customActionNav flexColumn"},e.createElement("div",{className:"searchWrap flexRow alignItemsCenter mBottom10"},e.createElement(Q.Z,{className:"Gray_9e Font20 mRight5",icon:"search"}),e.createElement("input",{placeholder:_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"),className:"flex",value:m,onChange:function(Z){I(Z.target.value)}}),m&&e.createElement(Q.Z,{className:"Gray_9e pointer Font15",icon:"closeelement-bg-circle",onClick:function(){return I("")}})),e.createElement(Re.Z,{className:"flex"},f.filter(function(S){return S.name.includes(m)}).map(function(S){return B(S)}))),e.createElement(Re.Z,{className:"customActionContent",ref:T},e.createElement("div",{className:"pLeft20 pRight20"},f.map(function(S){return N(S)}))))}function Ho(t){var a=t.selectNode;return a.type==="app"?e.createElement(yo,t):a.type===0?e.createElement(No,t):a.type===1?e.createElement(So,t):a.type===2?e.createElement(To,t):a.type==="control"?e.createElement(Zo,t):a.type==="view"?e.createElement(Fo,t):a.type==="customAction"?e.createElement(jo,t):null}var Po=(0,Y.Z)([`
  .header {
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid #DDDDDD;
    justify-content: space-between;
    .backHome {
      margin-top: 1px;
      border-bottom: 1px solid transparent;
      &:hover {
        border-color: currentColor;
      }
    }
    .translateWrap {
      padding: 3px 5px;
      border-radius: 3px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .content {
    min-height: 0;
  }
  .searchWrap {
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;
    margin-right: 15px;
    input {
      padding: 3px;
      border: none;
      min-width: 0;
    }
  }
  .ant-select-selector {
    border-radius: 4px !important;
    box-shadow: none !important;
  }
`],[`
  .header {
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid #DDDDDD;
    justify-content: space-between;
    .backHome {
      margin-top: 1px;
      border-bottom: 1px solid transparent;
      &:hover {
        border-color: currentColor;
      }
    }
    .translateWrap {
      padding: 3px 5px;
      border-radius: 3px;
      &:hover {
        background-color: #F5F5F5;
      }
    }
  }
  .content {
    min-height: 0;
  }
  .searchWrap {
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;
    margin-right: 15px;
    input {
      padding: 3px;
      border: none;
      min-width: 0;
    }
  }
  .ant-select-selector {
    border-radius: 4px !important;
    box-shadow: none !important;
  }
`]),Go=(0,Y.Z)([`
  width: 450px;
  padding: 15px;
`],[`
  width: 450px;
  padding: 15px;
`]),Mo=(0,Y.Z)([`
  .nodeItem {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    .label {
      width: 120px;
    }
  }
  textarea.ant-input {
    height: 120px;
  }
  .ant-input {
    border-radius: 3px !important;
    box-shadow: none !important;
    &[disabled] {
      color: #333;
    }
  }

  .highlight {
    border-radius: 3px;
    animation-name: shining;
    animation-timing-function: linear;
    animation-duration: 0.3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes shining {
    from {
      background-color: #fff;
    }
    to {
      background-color: #DBEEFD;
    }
  }
`],[`
  .nodeItem {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    .label {
      width: 120px;
    }
  }
  textarea.ant-input {
    height: 120px;
  }
  .ant-input {
    border-radius: 3px !important;
    box-shadow: none !important;
    &[disabled] {
      color: #333;
    }
  }

  .highlight {
    border-radius: 3px;
    animation-name: shining;
    animation-timing-function: linear;
    animation-duration: 0.3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes shining {
    from {
      background-color: #fff;
    }
    to {
      background-color: #DBEEFD;
    }
  }
`]),Uo=z.ZP.div(Po),Oo=z.ZP.div(Go),Vo=z.ZP.div(Mo),zo=z.ZP.div(function(t){var a=t.left;return`
  position: absolute;
  z-index: 2;
  left: `+a+`px;
  width: 2px;
  height: 100%;
  cursor: ew-resize;
  &:hover {
    border-left: 1px solid #ddd;
  }
`});function Yo(t){var a=t.app,o=t.langs,n=t.langInfo,r=t.onBack,i=(0,e.useState)((0,y.default)({},a,{type:"app"})),s=(0,F.Z)(i,2),c=s[0],l=s[1],p=(0,e.useState)(["app"]),d=(0,F.Z)(p,2),u=d[0],g=d[1],f=(0,e.useState)(!0),h=(0,F.Z)(f,2),E=h[0],w=h[1],m=(0,e.useState)([]),I=(0,F.Z)(m,2),T=I[0],x=I[1],B=(0,e.useState)(!1),N=(0,F.Z)(B,2),S=N[0],Z=N[1],k=(0,e.useState)([]),v=(0,F.Z)(k,2),b=v[0],W=v[1],M=(0,e.useState)(1),H=(0,F.Z)(M,2),j=H[0],P=H[1],A=(0,e.useState)(""),D=(0,F.Z)(A,2),R=D[0],G=D[1],L=(0,e.useState)(Number(localStorage.getItem("multiLingualNavWidth"))||260),O=(0,F.Z)(L,2),X=O[0],q=O[1],ee=(0,e.useState)(!1),se=(0,F.Z)(ee,2),ae=se[0],re=se[1];(0,e.useEffect)(function(){ce.Z.getAppLangDetail({appId:a.id,appLangId:n.id}).then(function(me){window["langData-"+a.id]=me.items,Z(me.status),x(me.items),w(!1)});var J=window.IM||{},K=J.socket,ue=function(pe){Z(pe.status===1)};return K.on("custom",ue),function(){delete window["langData-"+a.id],delete window["langVersion-"+a.id],K.off("custom",ue)}},[]);var le=function(K,ue){var me=ue.node;me.selected||(l(me),g(K))},de=function(K){G(K),K?ce.Z.getAppLangDetail({projectId:a.projectId,appId:a.id,appLangId:K}).then(function(ue){W(ue.items)}):W([])},ve=function(K){ce.Z.editAppLang((0,y.default)({projectId:a.projectId,appId:a.id,langId:n.id},K)).then(function(ue){window["langData-"+a.id]=ue,x(ue)})},be=function(){ce.Z.machineTranslation({appId:a.id,comparisonLangId:R,targetLangId:n.id,fillType:j}).then(function(K){K.message&&alert(K.message,3),document.querySelector(".translateWrap").click()})};if(E)return e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null));var ie=function(){var K=_l("\u539F\u59CB\u6587\u672C"),ue=_.find(o,{id:R}),me=R?_.find(Ve.Z,{code:ue.type}).value:K;return e.createElement("div",{className:"header flexRow"},e.createElement("div",{className:"flexRow alignItemsCenter Font15"},e.createElement("span",{className:"bold mRight5 pointer ThemeColor backHome",onClick:r},_l("\u591A\u8BED\u8A00")),"/",e.createElement("span",{className:"bold mLeft5"},_.find(Ve.Z,{code:n.type}).value)),e.createElement("div",{className:"flexRow alignItemsCenter"},!md.global.Config.IsLocal&&e.createElement(fo.Z,{disabled:!0,trigger:"click",placement:"bottomLeft",content:e.createElement(Oo,null,e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(Q.Z,{className:"Font26 ThemeColor mRight5",icon:"translate_language"}),e.createElement("div",{className:"Font17 bold"},_l("\u5C06\u672C\u5E94\u7528\u7684%0\u7FFB\u8BD1\u4E3A %1",me,_.find(Ve.Z,{code:n.type}).value))),e.createElement("div",{className:"mTop40 mBottom40"},e.createElement("div",{className:"mBottom10"},_l("\u8BD1\u6587\u586B\u5145\u65B9\u5F0F")),e.createElement(go.ZP,{size:"middle",data:[{text:_l("\u4EC5\u5904\u7406\u4E3A\u7A7A\u7684\u6587\u672C"),value:1},{text:_l("\u5168\u90E8\u5904\u7406\uFF08\u5C06\u8986\u76D6\u5DF2\u6709\u6587\u672C\uFF09"),value:0}],checkedValue:j,onChange:function(ge){P(ge)}})),e.createElement(Ze.ZP,{type:"primary",size:"small",radius:!0,onClick:be},e.createElement("span",null,_l("\u6267\u884C\u7FFB\u8BD1"))))},e.createElement("div",{className:"flexRow alignItemsCenter mRight20 pointer translateWrap",style:{pointerEvents:S?"none":void 0}},e.createElement(Q.Z,{className:"Font20 ThemeColor mRight5",icon:"translate_language"}),e.createElement("div",{className:"Font13"},S?_l("\u7FFB\u8BD1\u4E2D..."):_l("\u667A\u80FD\u7FFB\u8BD1")))),e.createElement("div",{className:"mRight10"},_l("\u5BF9\u7167\u8BED\u8A00")),e.createElement(jn.default,{style:{width:180},value:R,suffixIcon:e.createElement(Q.Z,{icon:"expand_more",className:"Gray_9e Font20"}),onChange:function(ge){de(ge)}},e.createElement(jn.default.Option,{key:"",value:""},K),o.filter(function(pe){return pe.type!==n.type}).map(function(pe){return e.createElement(jn.default.Option,{key:pe.id,value:pe.id},_.find(Ve.Z,{code:pe.type}).value)}))))};return e.createElement(Uo,{className:"flexColumn w100 h100"},ie(),e.createElement("div",{className:"content flexRow flex Relative"},ae&&e.createElement(ho.Z,{value:X,min:210,max:500,onChange:function(K){q(K),localStorage.setItem("multiLingualNavWidth",K),re(!1)}}),e.createElement(zo,{left:X,onMouseDown:function(){return re(!0)}}),e.createElement(wo,{style:{width:X},app:a,translateData:T,selectedKeys:u,onSelectedKeys:le}),e.createElement(Vo,{className:"flex"},e.createElement(Ho,{app:a,comparisonLangId:R,translateData:T,comparisonLangData:b,selectNode:c,onEditAppLang:ve}))))}function Jo(t){var a=t.app,o=t.onGetAppLangs,n=(0,e.useState)(!1),r=(0,F.Z)(n,2),i=r[0],s=r[1];return e.createElement("div",{className:"h100 flexColumn justifyContentCenter alignItemsCenter"},e.createElement("img",{style:{width:200},src:io()}),e.createElement("div",{className:"Font32 bold mTop25 mBottom15"},_l("\u591A\u8BED\u8A00")),e.createElement("div",{className:"Font15 mBottom20"},_l("\u8BBE\u7F6E\u7528\u6237\u5728\u8BBF\u95EE\u5E94\u7528\u65F6\u53EF\u4EE5\u4F7F\u7528\u7684\u8BED\u8A00")),e.createElement(Ze.ZP,{type:"primary",radius:!0,style:{height:36},onClick:function(){return s(!0)}},e.createElement(Q.Z,{icon:"plus"}),e.createElement("span",null,_l("\u6DFB\u52A0\u8BED\u8A00"))),e.createElement(Ct,{app:a,visible:i,onSave:o,onCancel:function(){return s(!1)}}))}function Ko(t){var a=t.data,o=a.id,n=a.projectId,r=(0,e.useState)(!0),i=(0,F.Z)(r,2),s=i[0],c=i[1],l=(0,e.useState)([]),p=(0,F.Z)(l,2),d=p[0],u=p[1],g=(0,e.useState)(null),f=(0,F.Z)(g,2),h=f[0],E=f[1],w=(0,ne.A_)(),m=w.langId,I=w.flag,T=function(){c(!0),ce.Z.getAppLangs({projectId:n,appId:o}).then(function(B){u(B),E(_.find(B,{id:m})),c(!1)})};return(0,e.useEffect)(function(){T()},[I]),s?e.createElement("div",{className:"flexRow alignItemsCenter justifyContentCenter h100"},e.createElement(xe.Z,null)):h?e.createElement(Yo,{app:a,langs:d,langInfo:h,onBack:function(){(0,Oe.T8)("/app/"+o+"/settings/language"),E(null)}}):d.length?e.createElement(mo,{app:a,langs:d,onGetAppLangs:T,onChangeLangInfo:function(B){(0,Oe.T8)("?langId="+B.id),E(B)}}):e.createElement(Jo,{app:a,onGetAppLangs:T})}var He=C(81872),dn=C(60235),Pn=C(36574),Xo=C(32415),_o=C(63239),ze=C.n(_o),te=C(53205),qo={getPreviewTaskStatus:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/getPreviewTaskStatus",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTablegetPreviewTaskStatus",ze()(a),$.extend(te.Z,o))},export:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/export",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTableexport",ze()(a),$.extend(te.Z,o))},publishTask:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/publishTask",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTablepublishTask",ze()(a),$.extend(te.Z,o))},initEmpty:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/initEmpty",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTableinitEmpty",ze()(a),$.extend(te.Z,o))},updateNode:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/updateNode",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTableupdateNode",ze()(a),$.extend(te.Z,o))},publishAggTable:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/publishAggTable",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTablepublishAggTable",ze()(a),$.extend(te.Z,o))},getAggTable:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/getAggTable",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTablegetAggTable",ze()(a),$.extend(te.Z,o))},copy:function(a,o){return te.Z.ajaxOptions.url=te.Z.server(o)+"aggTable/copy",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"aggTablecopy",ze()(a),$.extend(te.Z,o))}};const pn=qo;var $o=(0,Y.Z)([`
  .flexShrink0 {
    flex-shrink: 0;
    min-width: 0;
  }
  background: #fff;
  min-height: 68px;
  padding: 12px 0;
  margin: 0 40px;
  .iconCon {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    flex-shrink: 0;
    min-width: 0;
    background: #bdbdbd;
    &.isRun {
      background: #2196f3;
    }
    .iconTitle {
      color: #fff;
    }
  }
  .moreActive {
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }
  &:hover {
    background: #fafafa;
    .moreActive {
      opacity: 1;
    }
  }
  .tableSwitch {
    &:hover {
    }
  }
`],[`
  .flexShrink0 {
    flex-shrink: 0;
    min-width: 0;
  }
  background: #fff;
  min-height: 68px;
  padding: 12px 0;
  margin: 0 40px;
  .iconCon {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    flex-shrink: 0;
    min-width: 0;
    background: #bdbdbd;
    &.isRun {
      background: #2196f3;
    }
    .iconTitle {
      color: #fff;
    }
  }
  .moreActive {
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }
  &:hover {
    background: #fafafa;
    .moreActive {
      opacity: 1;
    }
  }
  .tableSwitch {
    &:hover {
    }
  }
`]),el=(0,Y.Z)([`
  .ming.Item .Item-content .Icon {
    left: 15px;
  }
  .ming.MenuItem .Item-content:not(.disabled):hover {
    background: #f5f5f5 !important;
    color: initial !important;
    .icon {
      color: #9e9e9e !important;
    }
    .Red {
      color: red !important;
    }
  }
  .Red.ming.MenuItem .Item-content:not(.disabled):hover {
    color: red !important;
  }
`],[`
  .ming.Item .Item-content .Icon {
    left: 15px;
  }
  .ming.MenuItem .Item-content:not(.disabled):hover {
    background: #f5f5f5 !important;
    color: initial !important;
    .icon {
      color: #9e9e9e !important;
    }
    .Red {
      color: red !important;
    }
  }
  .Red.ming.MenuItem .Item-content:not(.disabled):hover {
    color: red !important;
  }
`]),nl=(0,Y.Z)([`
  .ic {
    span {
      padding: 4px;
      border-radius: 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
`],[`
  .ic {
    span {
      padding: 4px;
      border-radius: 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
`]),tl=z.ZP.div($o),al=(0,z.ZP)(vn.Z)(el),rl=z.ZP.div(nl);function ol(t){var a=t.item,o=t.items,n=t.onEdit,r=t.onChange,i=t.projectId,s=t.displayType,c=t.appId,l=t.onRefresh,p=(0,e.useRef)(null),d=(0,Ee.Z)({showChangeName:!1,showMoreOption:!1,updating:!1}),u=(0,F.Z)(d,2),g=u[0],f=g.showChangeName,h=g.showMoreOption,E=g.updating,w=u[1],m=function(S){dn.Z.updateSyncTask({projectId:i,taskId:a.id,name:S}).then(function(Z){Z?(alert(_l("\u540D\u79F0\u4FEE\u6539\u6210\u529F")),r(o.map(function(k){return a.id===k.id?(0,y.default)({},a,{name:S}):k}))):alert(_l("\u540D\u79F0\u4FEE\u6539\u5931\u8D25"),2)})},I=function(){pn.copy({appId:c,projectId:i,aggTableId:a.aggTableId}).then(function(S){l()})},T=function(S){if(!E){var Z=null;w({updating:!0}),S===He.xO.RUNNING?Z=dn.Z.stopTask({projectId:i,taskId:a.id}):Z=dn.Z.startTask({projectId:i,taskId:a.id}),Z.then(function(k){w({updating:!1});var v=S===He.xO.RUNNING?k:(k||{}).isSucceeded,b=k.errorMsg;v?r(o.map(function(W){return a.id===W.id?(0,y.default)({},a,{taskStatus:S!==He.xO.RUNNING?He.xO.RUNNING:He.xO.STOP}):W})):alert(b||_l("\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)},function(){w({updating:!1})})}},x=function(){var S=function(){Ae.Z.confirm({title:e.createElement("span",{style:{color:"#f44336"},className:"WordBreak"},_l("\u5220\u9664\u805A\u5408\u8868\u201C%0\u201D",a.name)),buttonType:"danger",anim:!1,okText:_l("\u5220\u9664"),description:e.createElement("div",{className:"pBottom6 pTop8"},e.createElement("span",{className:"Gray"},_l("\u6B64\u805A\u5408\u8868\u672A\u88AB\u4EFB\u4F55\u7EDF\u8BA1\u56FE\u5F15\u7528\uFF0C\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3001\u4E0D\u53EF\u518D\u88AB\u5F15\u7528\u3002"))),onOk:B})};a.worksheetId?Et.Z.getReportsByWorksheetId({worksheetId:a.worksheetId}).then(function(Z){var k=Z.length>0;k?Ae.Z.confirm({title:e.createElement("span",{style:{color:"#f44336"},className:"WordBreak"},_l("\u65E0\u6CD5\u76F4\u63A5\u5220\u9664\u805A\u5408\u8868\u201C%0\u201D",a.name)),buttonType:"danger",anim:!1,okText:_l("\u5173\u95ED"),removeCancelBtn:!0,description:e.createElement(rl,null,e.createElement("span",{className:"Gray"},_l("\u6B64\u805A\u5408\u8868\u6B63\u5728\u88AB\u4EE5\u4E0B\u7EDF\u8BA1\u56FE\u5F15\u7528\uFF0C\u65E0\u6CD5\u76F4\u63A5\u5220\u9664\u3002\u8BF7\u5148\u89E3\u9664\u5F15\u7528\u5173\u7CFB\u540E\u518D\u5220\u9664\u805A\u5408\u8868\u3002")),Z.map(function(v){return e.createElement("div",{className:"mTop20"},e.createElement("div",{className:"Gray Bold"},v.apkName),(v.reports||[]).map(function(b){return e.createElement("div",{className:"ic mTop4"},e.createElement("span",{className:"Gray ThemeHoverColor3 Hand",onClick:function(){window.open("/app/"+v.apkId+"/"+b.pageId+"/"+b.reportId)}},v.apkName+" - "+b.reportName))}))})),onOk:function(){}}):S()}):S()},B=function(){dn.Z.deleteTask({projectId:i,taskId:a.id}).then(function(S){S?(alert(_l("\u5220\u9664\u6210\u529F")),r(o.filter(function(Z){return Z.aggTableId!==a.aggTableId}))):alert(_l("\u5220\u9664\u5931\u8D25"),2)})};return e.createElement(tl,{className:"flexRow alignItemsCenter",onClick:function(){window.open("/aggregationTable/"+(a.worksheetId||"")+"/"+encodeURIComponent(a.name))}},e.createElement("div",{className:"flex mLeft10 mRight20 flexRow alignItemsCenter Hand",style:{minWidth:120}},e.createElement("div",{className:V()("iconCon flexRow alignItemsCenter justifyContentCenter flexShrink0",a.taskStatus!==He.xO.RUNNING?"":"isRun")},e.createElement(Q.Z,{icon:"aggregate_table",className:V()("iconTitle Font24")})),e.createElement("span",{className:V()("mLeft12 flex WordBreak overflow_ellipsis flexShrink0 ThemeHoverColor3 Hand Font14",a.taskStatus!==He.xO.RUNNING?"Gray_75":"Gray")},a.name)),e.createElement("div",{className:"flex mRight20 alignItemsCenter WordBreak minWidth100"},(a.datasources||[]).map(function(N,S){return e.createElement(e.Fragment,null,e.createElement("span",{className:V()("",{Red:N.isDelete})}," ",N.isDelete?_l("\u5DF2\u5220\u9664"):N.tableName),S<(a.datasources||[]).length-1&&"\u3001")})),e.createElement("div",{className:"w150px minWidth100 flexRow mRight20"},e.createElement("div",{className:"flex alignItemsCenter"},e.createElement(ct.Z,{className:"TxtMiddle tableSwitch mRight10",checked:a.taskStatus===He.xO.RUNNING,onClick:function(S){T(a.taskStatus)},text:a.taskStatus===He.xO.RUNNING?_l("\u5F00\u542F"):_l("\u5173\u95ED")}),a.aggTableTaskStatus===0&&e.createElement("span",{className:"Gray_75"},_l("\u672A\u53D1\u5E03")),a.taskStatus!==He.xO.RUNNING&&a.errorInfo&&e.createElement(Qe.default,{placement:"bottomRight",overlayStyle:{maxWidth:350,maxHeight:300,overflow:"auto"},align:{offset:[12,0]},title:e.createElement("span",{className:"InlineBlock WordBreak"},a.errorInfo)},e.createElement(Q.Z,{type:"error",className:"Red Font16 TxtMiddle InlineBlock"})))),e.createElement("div",{className:"w200px pRight20 mRight20 flexRow alignItemsCenter"},e.createElement("span",{className:"Gray_9e"},""+(0,Xo.p6)(a[s]))),e.createElement("div",{className:"w100px minWidth100 mRight20 Gray_75 flexRow alignItemsCenter"},e.createElement(Zn.Z,{className:"createHeadImg circle userAvarar pointer userMessage",user:{userHead:a.creatorAvatar,accountId:a.createBy},size:24,appId:c,projectId:i}),e.createElement("span",{className:"mLeft8"},a.creatorName)),e.createElement("div",{className:"w50px moreActive mRight20 Hand Gray_9e ThemeHoverColor3",onClick:function(S){S.stopPropagation(),n()}},_l("\u7F16\u8F91")),e.createElement("div",{className:"w20px mRight20"},e.createElement(Ue.Z,{ref:p,action:["click"],popup:e.createElement(al,null,e.createElement(ke.Z,{icon:e.createElement(Q.Z,{className:"Font16",icon:"copy"}),onClick:function(S){w({showMoreOption:!1}),I(a),S.stopPropagation()}},e.createElement("div",{className:"mLeft16"},_l("\u590D\u5236"))),e.createElement(ke.Z,{icon:e.createElement(Q.Z,{className:"Font16",icon:"edit"}),onClick:function(S){w({showMoreOption:!1,showChangeName:!0}),S.stopPropagation()}},e.createElement("div",{className:"mLeft16"},_l("\u91CD\u547D\u540D"))),e.createElement(ke.Z,{icon:e.createElement(Q.Z,{icon:"delete1",className:"Red Font16"}),className:"Red",onClick:function(S){if(S.stopPropagation(),w({showMoreOption:!1}),a.taskStatus===He.xO.RUNNING)return alert(_l("\u4E0D\u80FD\u5220\u9664\u8FD0\u884C\u4E2D\u7684\u805A\u5408\u8868\uFF01"),3);x()}},e.createElement("div",{className:"mLeft16"},_l("\u5220\u9664")))),popupClassName:V()("dropdownTrigger PolymerizationTrigge"),popupVisible:h,onPopupVisibleChange:function(S){w({showMoreOption:S})},popupAlign:{points:["tl","bl"],offset:[0,1],overflow:{adjustX:!0,adjustY:!0}}},e.createElement(Q.Z,{icon:"task-point-more",className:V()("moreActive Hand Font20 mLeft6 Gray_9e ThemeHoverColor3",h&&"show ThemeColor3"),onClick:function(S){return S.stopPropagation()}}))),f&&e.createElement(Pn.Z,{name:a.name,onCancel:function(){w({showChangeName:!1})},onChange:function(S){m(S),w({showChangeName:!1})}}))}var bt=C(26631),fe=function(a,o){return U().values(U().get(a,"aggTableNodes")||{}).find(function(n){return U().get(n,"nodeType")===o})||{}},wt=function(a,o){var n=fe(a,"GROUP"),r=fe(a,"AGGREGATE"),i=[];return(U().get(n,"nodeConfig.config.groupFields")||[]).map(function(s){var c=s.fields,l=c===void 0?[]:c;l.map(function(p){i.push(p.oid)})}),o||(U().get(r,"nodeConfig.config.aggregateFields")||[]).map(function(s){s.isCalculateField||i.push(s.oid)}),i},ll=function(a,o){return U().uniq(a.filter(function(n){return n.oid===o}).map(function(n){return n.aggFuncType}))},il=function(a,o,n,r){var i=wt(o)||[],s=[];if(r){var c=fe(o,"AGGREGATE"),l=U().get(c,"nodeConfig.config.aggregateFields")||[];s=Mn((a.find(function(d){return d.worksheetId===n})||{}).controls||[]);var p=wt(o,!0);s=s.filter(function(d){return d.controlId==="rowscount"?!U().includes(i,n+"_"+d.controlId):U().includes(p,n+"_"+d.controlId)?!1:U().includes(i,n+"_"+d.controlId)?ll(l,n+"_"+d.controlId).length<Gn(d.type).length:!0})}else s=Mn((a.find(function(d){return d.worksheetId===n})||{}).controls||[]).filter(function(d){return!U().includes(i,n+"_"+d.controlId)});return s},Gn=function(a){return bt.Z0.filter(function(o){return U().includes([6,8,28,31],a)||a===38&&o.enumDefault===2?["SUM","MAX","MIN","AVG"].includes(o.value):["COUNT","DISTINCT_COUNT"].includes(o.value)})},Mn=function(a){return a.filter(function(o){return!([45,47,22,10010,52,21,41,51,49,50,43].includes(o.type)||o.type===30&&(o.strDefault||"").split("")[0]==="1")})},sl=function(a,o,n){var r=!1,i="COUNT";if(o.controlId==="rowscount")r=!!a.find(function(p){return p.oid===n+"_rowscount"});else{var s=Gn(o.type),c=a.filter(function(p){return p.oid===n+"_"+o.controlId}).map(function(p){return p.aggFuncType}),l=s.filter(function(p){return!(c||[]).includes(p.value)});l.length<=0?r=!0:i=l[0].value}return{hs:r,aggFuncType:i}},cl=function(a){if(a===null||typeof a!="string")return[];var o=/\$([^$]*)\$/g,n=a.match(o);return n?n.map(function(r){return r.slice(1,-1)}):[]},an=function(a,o,n){var r=fe(o,"GROUP"),i=fe(o,"AGGREGATE"),s=U().get(r,"nodeConfig.config.groupFields")||[],c=U().get(i,"nodeConfig.config.aggregateFields")||[],l=[];return s.map(function(p){l.push(p.resultField.alias)}).concat(c.map(function(p){l.push(p.alias)})).filter(function(p){return!!p}),n?!l.find(function(p){return p===a}):l.find(function(p){return p===a})?a+"_1":a},dl=(0,Y.Z)([`
  width: 240px;
  height: 320px;
  min-height: 200px;
  .controls {
    overflow-y: auto;
  }
  .title {
    padding: 0 16px;
    margin-top: 10px;
  }
  .search {
    position: relative;
    width: calc(100% - 32px);
    margin: 0 auto;
    i {
      position: absolute;
      top: 11px;
      left: 8px;
      font-size: 18px;
    }
    input {
      box-sizing: border-box;
      width: 100%;
      height: 36px;
      border: none;
      outline: none;
      padding-left: 30px;
      border: 1px solid #dddddd;
      opacity: 1;
      border-radius: 4px;
      &::placeholder {
        color: #ccc;
      }
    }
  }
  .itemControl {
    padding: 10px 16px;
    &:hover {
      background: #f5f5f5;
    }
    &.hs {
      background: #f5f5f5;
      color: #2196f3;
    }
  }
`],[`
  width: 240px;
  height: 320px;
  min-height: 200px;
  .controls {
    overflow-y: auto;
  }
  .title {
    padding: 0 16px;
    margin-top: 10px;
  }
  .search {
    position: relative;
    width: calc(100% - 32px);
    margin: 0 auto;
    i {
      position: absolute;
      top: 11px;
      left: 8px;
      font-size: 18px;
    }
    input {
      box-sizing: border-box;
      width: 100%;
      height: 36px;
      border: none;
      outline: none;
      padding-left: 30px;
      border: 1px solid #dddddd;
      opacity: 1;
      border-radius: 4px;
      &::placeholder {
        color: #ccc;
      }
    }
  }
  .itemControl {
    padding: 10px 16px;
    &:hover {
      background: #f5f5f5;
    }
    &.hs {
      background: #f5f5f5;
      color: #2196f3;
    }
  }
`]),pl=(0,Y.Z)([`
  .lineLeft {
    width: 0;
    // height: 100%;
    max-height: 500px;
    border-left: 1px solid #dddddd;
  }
`],[`
  .lineLeft {
    width: 0;
    // height: 100%;
    max-height: 500px;
    border-left: 1px solid #dddddd;
  }
`]),ul=z.ZP.div(dl),ml=z.ZP.div(pl);function fl(t){var a=(0,e.useRef)(null),o=t.title,n=t.onChange,r=t.parentName,i=t.showNext,s=t.controlId,c=(0,Ee.Z)({keywords:""}),l=(0,F.Z)(c,2),p=l[0].keywords,d=l[1];(0,e.useEffect)(function(){setTimeout(function(){a.current&&a.current.focus()},300)},[]);var u=function(){var f=Mn(t.controls).filter(function(h){return(h.controlName||"").toLowerCase().indexOf((p||"").toLowerCase())>=0});return e.createElement(e.Fragment,null,e.createElement("div",{className:"title Bold Gray_75 Font13 WordBreak overflow_ellipsis"},r?">"+r:o,r&&e.createElement("span",{className:"ThemeColor3 pLeft5"},o)),e.createElement("div",{className:"search mTop8"},e.createElement("i",{className:"icon-search Gray_9e"}),e.createElement("input",{value:p,autofocus:!0,ref:a,onChange:function(E){return d({keywords:E.target.value})},placeholder:_l("\u641C\u7D22\u5B57\u6BB5")})),e.createElement("div",{className:"flex controls mTop6"},f.length<=0?e.createElement("div",{className:"Gray_9e mTop40 pTop8 TxtCenter pBottom20"},_l("\u6682\u65E0\u76F8\u5173\u5B57\u6BB5")):f.map(function(h){var E=(t.list||[]).includes(h.controlId),w=s===h.controlId;return e.createElement("div",{className:V()("itemControl flexRow alignItemsCenter",{hs:w}),onClick:function(I){E||n(h)}},e.createElement("div",{className:V()("flex flexRow alignItemsCenter",E?"disable":"Hand")},e.createElement(Q.Z,{icon:h.controlId==="rowscount"?"calculate":(0,sn.hB)(h.type),className:V()("Font16",w?"ThemeColor3":"Gray_9e")}),e.createElement("div",{className:V()("flex mLeft8 WordBreak overflow_ellipsis",w?"ThemeColor3":"Gray")},h.controlName)),(h.relationControls||[]).length>0&&!r&&i&&e.createElement(Q.Z,{icon:"arrow-right-tip",className:"Gray_9e Hand mLeft10",onClick:function(I){I.stopPropagation(),i(h.controlId)}}))})))};return e.createElement(ul,{className:"flexColumn"},u(t))}function Un(t){var a=(0,Ee.Z)({controlId:"",controls:[]}),o=(0,F.Z)(a,2),n=o[0],r=n.controlId,i=n.controls,s=o[1];return(0,e.useEffect)(function(){var c=t.addRowsCount?t.sourceInfos.map(function(p){return p.worksheetId===t.worksheetId?(0,y.default)({},p,{controls:[{controlId:"rowscount",controlName:_l("\u8BB0\u5F55\u6570\u91CF")}].concat(p.controls)}):p}):t.sourceInfos,l=il(c,t.flowData,t.worksheetId,t.forAggregation);s({controls:l})},[t.sourceInfos,t.flowData,t.worksheetId,t.addRowsCount]),e.createElement(ml,{className:"flexRow h100"},e.createElement(fl,(0,y.default)({},t,{controls:i,onChange:function(l){t.onChange({control:l})},controlId:r})))}var Fe=C(95742),gl=(0,Y.Z)([`
  overflow-x: auto;
  max-height: 400px;
`],[`
  overflow-x: auto;
  max-height: 400px;
`]),hl=(0,Y.Z)([`
  height: 40px;
  .leftCon,
  .rightCon {
    height: 36px;
    line-height: 36px;
    position: absolute;
    flex-shrink: 0;
    width: 16px;
    left: 5px;
    min-width: 16px;
    &.rightCon {
      right: 10px;
      left: initial;
    }
    &:hover {
      .dragIcon,
      .clearIcon {
        opacity: 1;
        color: #9e9e9e;
        &:hover {
          color: Red;
        }
      }
    }
  }
  .dragIcon,
  .clearIcon {
    opacity: 0;
    font-size: 14px;
  }
  &:hover {
    &.cardItemTitle {
      background: #fff;
    }
    .dragIcon,
    .clearIcon {
      opacity: 1;
      color: #9e9e9e;
      &:hover {
        color: Red;
      }
    }
    .conByWorksheet {
    }
    .titleConByWorksheet {
      background: rgba(230, 247, 255, 0.61);
    }
  }
  .joinCon {
    width: 40px;
    min-width: 40px;
  }
  .Dropdown--input {
    min-width: `,`px;
    width: `,`px;
    height: 35px;
    line-height: 35px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    padding: 0 8px 0 12px;
    &.hasFeil {
      position: relative;
      .clearFeil,
      .icon-arrow-down-border {
        position: absolute;
        right: 6px;
      }
      .clearFeil {
        opacity: 0;
      }
      &:hover {
        .clearFeil {
          opacity: 1;
        }
        .icon-arrow-down-border {
          display: none;
        }
      }
    }
  }
  &.cardItemTitle {
    .Dropdown--input {
      background: #f4f4f4;
      border: none;
      font-weight: 700;
      padding: 0 12px;
    }
  }
`],[`
  height: 40px;
  .leftCon,
  .rightCon {
    height: 36px;
    line-height: 36px;
    position: absolute;
    flex-shrink: 0;
    width: 16px;
    left: 5px;
    min-width: 16px;
    &.rightCon {
      right: 10px;
      left: initial;
    }
    &:hover {
      .dragIcon,
      .clearIcon {
        opacity: 1;
        color: #9e9e9e;
        &:hover {
          color: Red;
        }
      }
    }
  }
  .dragIcon,
  .clearIcon {
    opacity: 0;
    font-size: 14px;
  }
  &:hover {
    &.cardItemTitle {
      background: #fff;
    }
    .dragIcon,
    .clearIcon {
      opacity: 1;
      color: #9e9e9e;
      &:hover {
        color: Red;
      }
    }
    .conByWorksheet {
    }
    .titleConByWorksheet {
      background: rgba(230, 247, 255, 0.61);
    }
  }
  .joinCon {
    width: 40px;
    min-width: 40px;
  }
  .Dropdown--input {
    min-width: `,`px;
    width: `,`px;
    height: 35px;
    line-height: 35px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    padding: 0 8px 0 12px;
    &.hasFeil {
      position: relative;
      .clearFeil,
      .icon-arrow-down-border {
        position: absolute;
        right: 6px;
      }
      .clearFeil {
        opacity: 0;
      }
      &:hover {
        .clearFeil {
          opacity: 1;
        }
        .icon-arrow-down-border {
          display: none;
        }
      }
    }
  }
  &.cardItemTitle {
    .Dropdown--input {
      background: #f4f4f4;
      border: none;
      font-weight: 700;
      padding: 0 12px;
    }
  }
`]),vl=(0,Y.Z)([`
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  padding: 5px 0;
  max-height: 360px;
`],[`
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  padding: 5px 0;
  max-height: 360px;
`]),xl=(0,Y.Z)([`
  color: #2196f3;
`],[`
  color: #2196f3;
`]),gn=240,Cl=z.ZP.div(gl),kt=z.ZP.div(hl,gn,gn),El=z.ZP.div(vl),Il=z.ZP.span(xl);function bl(t){var a=t.onHide,o=t.onOk,n=t.visible,r=t.className,i=t.sourceInfos,s=i===void 0?[]:i,c=t.flowData,l=(0,e.useRef)(null),p=(0,Ee.Z)({groupControls:t.groupControls.length<=0?[{}]:t.groupControls}),d=(0,F.Z)(p,2),u=d[0].groupControls,g=d[1],f=(0,Fe.W6)(function(){return e.createElement("div",{className:"leftCon flexRow alignItemsCenter justifyContentCenter"},e.createElement(Q.Z,{className:"Gray_bd Hand dragIcon ThemeHoverColor3",icon:"drag"}))}),h=(0,Fe.W8)(function(m){var I=m.item,T=m.onUpdate,x=m.items,B=m.sourceInfos,N=m.num,S=Math.random();return e.createElement(kt,{className:V()("flexRow cardItem alignItemsCenter mTop12",N+"_itemC")},e.createElement(f,null),e.createElement("div",{className:"flex flexRow alignItemsCenter conByWorksheet titleConByWorksheet",style:{width:B.length*gn+(B.length-1)*40,minWidth:B.length*gn+(B.length-1)*40}},e.createElement(e.Fragment,null,B.map(function(Z,k){var v=_.get(I,"fields"),b=(v||[]).find(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=arguments[1];return!!P.oid&&A!==k}),W=(_.get(x,"["+k+"].fields")||[]).map(function(P){return(P.oid||"").split("_")[1]}),M=B.find(function(P){return P.worksheetId===Z.worksheetId})||{},H=fe(c,"GROUP"),j=[(0,y.default)({},M,{controls:((M||{}).controls||[]).filter(function(P){return(b?_.get(b,"controlSetting.dataSource")&&[9,10,11].includes(b.mdType)?P.type===b.mdType&&P.dataSource===_.get(b,"controlSetting.dataSource"):P.type===b.mdType:!0)&&!W.includes(P.controlId)})})];return e.createElement(e.Fragment,null,e.createElement(Ue.Z,{action:["click"],key:Z.worksheetId+"_"+k+"_"+Z.controlId,getPopupContainer:function(){return document.body},popupAlign:{points:["tl","bl"],offset:[0,0],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(El,null,e.createElement(Un,{title:(Z||{}).workSheetName,worksheetId:Z.worksheetId,flowData:(0,y.default)({},c,(0,Ce.default)({},H.nodeId,(0,y.default)({},H,{nodeConfig:(0,y.default)({},_.get(H,"nodeConfig"),{config:(0,y.default)({},_.get(H,"nodeConfig.config"),{groupFields:x})})}))),key:S,sourceInfos:j,onChange:function(A){var D=A.control,R=A.childrenControl,G={alias:D.controlName,controlSetting:R||D,isChildField:!!R,parentFieldInfo:R?D:{},isNotNull:!0,isTitle:D.attribute===1,mdType:D.type,name:D.controlName,oid:Z.worksheetId+"_"+D.controlId,precision:0,scale:0},L=v||[];L[k]=G,T(x.map(function(O,X){return X===N?(0,y.default)({},O,{fields:L}):O}))}}))},e.createElement("div",{className:V()("Dropdown--input Dropdown--border flexRow alignItemsCenter",{hasFeil:_.get(I,"fields["+k+"].name")})},e.createElement("div",{className:V()("flex WordBreak overflow_ellipsis",{Gray_bd:!_.get(I,"fields["+k+"].name")})},_.get(I,"fields["+k+"].name")||_l("\u9009\u62E9\u5B57\u6BB5")),_.get(I,"fields["+k+"].name")&&e.createElement(Q.Z,{icon:"cancel1",className:"Gray_9e mLeft8 clearFeil",onClick:function(A){A.stopPropagation();var D=v||[];D[k]={},T(x.map(function(R,G){return G===N?(0,y.default)({},R,{fields:D}):R})),S=Math.random()}}),e.createElement(Q.Z,{icon:"arrow-down-border",className:"mLeft5 Font16 Hand Gray_9e"}))),k<B.length-1&&e.createElement("div",{className:"joinCon flexRow alignItemsCenter justifyContentCenter"},e.createElement(Q.Z,{icon:"task-point-more",className:"mLeft5 Font20 Gray_bd"})))}))),e.createElement("div",{className:"rightCon flexRow alignItemsCenter justifyContentCenter"},e.createElement(Q.Z,{icon:"delete1",className:"clearIcon Hand del Font16 mLeft4",onClick:function(){T(x.filter(function(k,v){return v!==N}))}})))}),E=(0,Fe.JN)(function(m){var I=m.items,T=m.sourceInfos;return e.createElement(Cl,{className:"tbodyContainer",ref:l,onScroll:function(){var B=l.current&&l.current.scrollTop;$(".leftCon,.rightCon").css({transform:"translate(0,"+-B+"px)"})}},e.createElement(kt,{className:"flexRow cardItem cardItemTitle  alignItemsCenter"},e.createElement("div",{className:"flex flexRow alignItemsCenter conByWorksheet"},T.map(function(x,B){return e.createElement(e.Fragment,null,e.createElement("div",{className:"Dropdown--input TxtCenter WordBreak overflow_ellipsis"},x.workSheetName),B<T.length-1&&e.createElement("div",{className:"joinCon"}))}))),_.map(I,function(x,B){return e.createElement(h,(0,y.default)({item:x,sourceInfos:T},m,{key:"item_"+B,index:B,num:B}))}))}),w=function(){var I=!1;if(u.map(function(x,B){s.map(function(N,S){(_.get(x,"fields["+S+"]")||{}).oid||(I=!0)})}),I){alert(_l("\u914D\u7F6E\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u5B8C\u6574\u914D\u7F6E"),3);return}var T=u.map(function(x){return x.resultField&&x.resultField.oid===x.fields[0].oid?x:(0,y.default)({},x,{resultField:x.fields[0]})});o(T),a()};return e.createElement(Ae.Z,{dialogClasses:r,className:V()("groupConPolymerizationDialog"),visible:n,anim:!1,title:_l("\u8BBE\u7F6E\u5F52\u7EC4"),description:_l("\u5BF9\u591A\u8868\u6570\u636E\u6E90\u5F52\u7EC4\uFF0C\u8BF7\u5206\u522B\u9009\u62E9\u5DE5\u4F5C\u8868\u4E2D\u7684\u540C\u7C7B\u578B\u5B57\u6BB5\u8FDB\u884C\u5F52\u7EC4\u5408\u5E76"),width:s.length>2?3*gn+2*40+24*2:s.length*gn+(s.length-1)*40+24*2,onCancel:a,onOk:function(){w()}},e.createElement("div",{className:"groupConPolymerizationCon"},e.createElement(E,{items:u,sourceInfos:s,distance:5,useDragHandle:!0,onSortEnd:function(I){var T=I.oldIndex,x=I.newIndex;T!==x&&g({groupControls:(0,Fe.Rp)(u,T,x)})},helperClass:"groupConPolymerization",onUpdate:function(I){g({groupControls:I})}}),e.createElement(Il,{className:"Hand mTop12 addItem Bold ThemeHoverColor3 flexRow alignItemsCenter",onClick:function(){g({groupControls:u.concat({})})}},e.createElement(Q.Z,{icon:"add",className:"InlineBlock Font16"})," ",e.createElement("span",null,_l("\u5F52\u7EC4")))))}var wl=(0,Y.Z)([`
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  z-index: 1000;
  .dragIcon {
    opacity: 0;
    position: absolute;
    left: -16px;
    font-size: 14px;
  }
  &:hover {
    .dragIcon {
      opacity: 1;
    }
  }
`],[`
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  z-index: 1000;
  .dragIcon {
    opacity: 0;
    position: absolute;
    left: -16px;
    font-size: 14px;
  }
  &:hover {
    .dragIcon {
      opacity: 1;
    }
  }
`]),kl=z.ZP.div(wl);function Al(t){var a=t.list,o=t.onChange,n=t.sourceTables,r=t.updateErr,i=(0,Fe.W6)(function(){return e.createElement(Q.Z,{className:"Gray_bd Hand dragIcon ThemeHoverColor3",icon:"drag"})}),s=(0,Fe.W8)(function(l){var p=l.item,d=l.onUpdate,u=l.items,g=(0,Ee.Z)({showChangeName:!1}),f=(0,F.Z)(g,2),h=f[0].showChangeName,E=f[1],w=_.get(p,"resultField.isDelete");return _.get(p,"fields").map(function(m){n.find(function(I){return m.oid&&m.oid.indexOf(I.workSheetId)>=0})||(w=!0)}),_.get(p,"fields").length!==n.length&&(w=!0),w&&r(),e.createElement(kl,{className:"flexRow cardItem alignItemsCenter Relative mTop12 hoverBoxShadow"},e.createElement(i,null),e.createElement("div",{className:"flex flexRow pLeft16 pRight12 alignItemsCenter"},e.createElement(e.Fragment,null,e.createElement(Q.Z,{icon:(0,sn.hB)(_.get(p,"resultField.mdType")),className:V()("Gray_9e Font16 ThemeHoverColor3")}),e.createElement("div",{className:V()("flex mLeft8 mRight8 overflow_ellipsis WordBreak",{Red:w})},_.get(p,"resultField.alias"))),e.createElement(Qe.default,{title:_l("\u91CD\u547D\u540D")},e.createElement(Q.Z,{icon:"rename_input",className:"Font16 Hand Gray_75 ThemeHoverColor3",onClick:function(){E({showChangeName:!0})}})),e.createElement(Qe.default,{title:_l("\u5220\u9664")},e.createElement(Q.Z,{icon:"clear",className:"clearIcon Hand Gray_9e del ThemeHoverColor3 mLeft8 Font16",onClick:function(){d(u.filter(function(I){return _.get(I,"resultField.oid")!==_.get(p,"resultField.oid")}))}}))),h&&e.createElement(Pn.Z,{name:_.get(p,"resultField.alias"),onCancel:function(){E({showChangeName:!1})},onChange:function(I){if(_.get(p,"resultField.alias")!==I){if(!an(I,l.flowData,!0))return alert(_l("\u5DF2\u5B58\u5728\u8BE5\u5B57\u6BB5\u540D\u79F0\uFF0C\u540D\u79F0\u4E0D\u53EF\u91CD\u590D"),3);d(u.map(function(T){return T.oid===p.oid?(0,y.default)({},T,{resultField:(0,y.default)({},T.resultField,{alias:I})}):T}),!1),E({showChangeName:!1})}}}))}),c=(0,Fe.JN)(function(l){var p=l.items;return e.createElement("div",{className:"mTop8"},_.map(p,function(d,u){return e.createElement(s,(0,y.default)({item:d},l,{key:"item_"+u,index:u,num:u}))}))});return e.createElement(c,{items:a,flowData:t.flowData,distance:5,useDragHandle:!0,onSortEnd:function(p){var d=p.oldIndex,u=p.newIndex;d!==u&&o((0,Fe.Rp)(a,d,u),!1)},helperClass:"groupConPolymerization",onUpdate:function(p,d){o(p,d)}})}var yl=C(5980),Nl=C(65224),ss=C(60871),Sl=(0,Y.Z)([`
  .enumDefaultType {
    display: none;
  }
  .formulaBtns {
    width: 330px;
  }
  .settingItemTitle {
    color: #333;
  }
  .customTip {
    color: #9e9e9e;
  }
  .ant-input {
    border-radius: 3px 0 0 3px;
  }
  .numberControlBox .iconWrap {
    border-radius: 0 0 3px 0;
    &:hover {
      i {
        color: #2196f3;
      }
    }
  }
  .numberControlBox .iconWrap:first-child {
    border-radius: 0 3px 0 0;
  }
  .flexCenter {
    display: inline-flex !important;
    .Dropdown--input {
      width: 200px;
      padding: 5px 8px 5px 12px !important;
      margin-right: 16px;
    }
  }
  .AggregationFormula {
    .Checkbox {
      display: inline-flex !important;
    }
  }
`],[`
  .enumDefaultType {
    display: none;
  }
  .formulaBtns {
    width: 330px;
  }
  .settingItemTitle {
    color: #333;
  }
  .customTip {
    color: #9e9e9e;
  }
  .ant-input {
    border-radius: 3px 0 0 3px;
  }
  .numberControlBox .iconWrap {
    border-radius: 0 0 3px 0;
    &:hover {
      i {
        color: #2196f3;
      }
    }
  }
  .numberControlBox .iconWrap:first-child {
    border-radius: 0 3px 0 0;
  }
  .flexCenter {
    display: inline-flex !important;
    .Dropdown--input {
      width: 200px;
      padding: 5px 8px 5px 12px !important;
      margin-right: 16px;
    }
  }
  .AggregationFormula {
    .Checkbox {
      display: inline-flex !important;
    }
  }
`]),Tl=z.ZP.div(Sl);function At(t){var a=t.onHide,o=t.onOk,n=t.visible,r=t.className,i=t.allControls,s=(0,Ee.Z)({calculation:t.calculation||{advancedSetting:{dot:2},dot:2}}),c=(0,F.Z)(s,2),l=c[0].calculation,p=c[1];return e.createElement(Ae.Z,{dialogClasses:r,className:V()("calculationConPolymerizationDialog addUserByTelDialog"),visible:n,anim:!1,title:_l("\u8BA1\u7B97"),width:560,onCancel:a,onOk:function(){if(!l.controlName)return alert(_l("\u8BF7\u8BBE\u7F6E\u540D\u79F0"),3);o(l),a()}},e.createElement(Tl,{className:""},e.createElement("div",{className:"Gray_75",style:{marginTop:-4}},_l("\u5BF9\u5DF2\u6DFB\u52A0\u7684\u805A\u5408\u5B57\u6BB5\u8FDB\u884C\u6570\u503C\u8FD0\u7B97")),e.createElement("div",{className:"Bold mTop10"},_l("\u540D\u79F0")),e.createElement($n.Z,{value:l.controlName,className:"w100 mTop10 placeholderColor",placeholder:_l("\u8F93\u5165\u5B57\u6BB5\u540D\u79F0"),onChange:function(u){p({calculation:(0,y.default)({},l,{controlName:u})})}}),e.createElement(Nl.default,{data:{enumDefault:1,type:31,controlName:l.controlName,dataSource:l.dataSource,advancedSetting:(0,y.default)({},l.advancedSetting,{numshow:"1"}),dot:Number(_.get(l,"advancedSetting.dot"))},className:"AggregationFormula",fromAggregation:!0,allControls:i,dataSourceTitle:_l("\u8868\u8FBE\u5F0F"),onChange:function(u){p({calculation:(0,y.default)({},l,u)})}}),e.createElement("div",{className:"Bold mTop24"},_l("\u6570\u636E\u683C\u5F0F")),e.createElement("div",{className:"labelWrap mTop12"},e.createElement(je.Z,{className:"InlineBlock",checked:_.get(l,"advancedSetting.thousandth")!=="1",onClick:function(u){p({calculation:(0,ne.Wz)(l,{thousandth:u?"1":"0"})})},text:_l("\u663E\u793A\u5343\u5206\u4F4D")}),e.createElement(je.Z,{className:"InlineBlock mLeft60",checked:_.get(l,"advancedSetting.numshow")==="1",onClick:function(u){p({calculation:(0,ne.Wz)(l,{suffix:u?"":"%",prefix:"",numshow:u?"0":"1"})})},text:_l("\u6309\u767E\u5206\u6BD4\u663E\u793A")}))))}var On=["#2196f3ff","#08c9c9ff","#00c345ff","#fad714ff","#ff9300ff","#f52222ff","#eb2f96ff","#7500eaff","#2d46c4ff","#c9e6fcff","#c3f2f2ff","#c2f1d2ff","#fef6c6ff","#ffe5c2ff","#fdcacaff","#facde6ff","#dec2faff","#ccd2f1ff"],Bl=(0,Y.Z)([`
  // &.rowsCountItem {
  //   height: 40px;
  // }
  // height: 120px;
  .ming.MenuItem .Item-content:not(.disabled):hover {
    background: #f5f5f5 !important;
    color: initial !important;
    .icon {
      color: #9e9e9e !important;
    }
    .Red {
      color: red !important;
    }
  }
  .Red.ming.MenuItem .Item-content:not(.disabled):hover {
    color: red !important;
  }
  .ming.Item .Item-content {
    padding: 0 8px 0 16px;
    & > span {
      display: flex;
      .Icon {
        position: initial;
      }
    }
  }
`],[`
  // &.rowsCountItem {
  //   height: 40px;
  // }
  // height: 120px;
  .ming.MenuItem .Item-content:not(.disabled):hover {
    background: #f5f5f5 !important;
    color: initial !important;
    .icon {
      color: #9e9e9e !important;
    }
    .Red {
      color: red !important;
    }
  }
  .Red.ming.MenuItem .Item-content:not(.disabled):hover {
    color: red !important;
  }
  .ming.Item .Item-content {
    padding: 0 8px 0 16px;
    & > span {
      display: flex;
      .Icon {
        position: initial;
      }
    }
  }
`]),Dl=(0,Y.Z)([`
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  z-index: 1000;
  .dragIcon {
    opacity: 0;
    position: absolute;
    left: -16px;
    font-size: 14px;
  }
  &:hover {
    .dragIcon {
      opacity: 1;
    }
  }
`],[`
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  z-index: 1000;
  .dragIcon {
    opacity: 0;
    position: absolute;
    left: -16px;
    font-size: 14px;
  }
  &:hover {
    .dragIcon {
      opacity: 1;
    }
  }
`]),Zl=(0,Y.Z)([`
  width: 180px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 6px 0;
  .labelWrap {
    &.H36 {
      height: 36px;
    }
    padding: 0 16px;
    min-height: 36px;
    line-height: 36px;
    &:hover {
      background: #f5f5f5;
    }
    .ant-input {
      height: 28px;
    }
    .numberControlBox .iconWrap {
      height: 14px;
    }
    .numberControlBox .iconWrap i {
      vertical-align: top;
      line-height: 14px;
    }
  }
`],[`
  width: 180px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 6px 0;
  .labelWrap {
    &.H36 {
      height: 36px;
    }
    padding: 0 16px;
    min-height: 36px;
    line-height: 36px;
    &:hover {
      background: #f5f5f5;
    }
    .ant-input {
      height: 28px;
    }
    .numberControlBox .iconWrap {
      height: 14px;
    }
    .numberControlBox .iconWrap i {
      vertical-align: top;
      line-height: 14px;
    }
  }
`]),yt=(0,z.ZP)(vn.Z)(Bl),Ll=z.ZP.div(Dl),Rl=z.ZP.div(Zl),Vn=8;function Fl(t){var a=t.num,o=t.onUpdate,n=(0,Ee.Z)({items:t.items,show:!1}),r=(0,F.Z)(n,2),i=r[0],s=i.items,c=i.show,l=r[1];return e.createElement(Ue.Z,{action:["click"],popupAlign:{points:["tl","tr"],offset:[0,-5],overflow:{adjustX:!0,adjustY:!0}},popupVisible:c,onPopupVisibleChange:function(d){!d&&!U().isEqual(t.items,s)&&o(s,!1),l({show:d})},popup:e.createElement(Rl,{className:""},e.createElement("div",{className:"labelWrap H36"},e.createElement(je.Z,{size:"small",checked:U().get(s[a],"controlSetting.advancedSetting.thousandth")!=="1",onClick:function(d){l({items:s.map(function(u,g){return g===a?(0,y.default)({},u,{controlSetting:(0,ne.Wz)(U().get(s[a],"controlSetting"),{thousandth:d?"1":"0"})}):u})})},text:_l("\u663E\u793A\u5343\u5206\u4F4D")})),e.createElement("div",{className:"labelWrap H36"},e.createElement(je.Z,{size:"small",checked:U().get(s[a],"controlSetting.advancedSetting.numshow")==="1",onClick:function(d){l({items:s.map(function(u,g){return g===a?(0,y.default)({},u,{controlSetting:(0,ne.Wz)(U().get(s[a],"controlSetting"),{suffix:d?"":"%",prefix:"",numshow:d?"0":"1"})}):u})})},text:_l("\u6309\u767E\u5206\u6BD4\u663E\u793A")})),e.createElement("div",{className:"labelWrap"},e.createElement("div",{className:"H36"},e.createElement(je.Z,{size:"small",checked:!!U().get(s[a],"controlSetting.advancedSetting.dot"),onClick:function(d){l({items:s.map(function(u,g){return g===a?(0,y.default)({},u,{controlSetting:(0,ne.Wz)(U().get(s[a],"controlSetting"),{dot:U().get(s[a],"controlSetting.advancedSetting.dot")?"":"2"})}):u})})},text:_l("\u5C0F\u6570\u4F4D\u6570")})),U().get(s[a],"controlSetting.advancedSetting.dot")&&e.createElement("div",{className:"flex mLeft20 showCount flexRow alignItemsCenter"},e.createElement(yl.Z,{className:"flex",minNum:2,maxNum:Vn,value:Number(U().get(s[a],"controlSetting.advancedSetting.dot")),onChange:function(d){var u=ze()(Vn>=d?d:Vn);u!==U().get(s[a],"controlSetting.advancedSetting.dot")&&l({items:s.map(function(g,f){return f===a?(0,y.default)({},g,{controlSetting:(0,ne.Wz)(U().get(s[a],"controlSetting"),{dot:u})}):g})})}}))),s[a].dot&&e.createElement("div",{className:"labelWrap"},e.createElement(je.Z,{size:"small",className:"mTop8",checked:U().get(s[a],"controlSetting.advancedSetting.dotformat")==="1",onClick:function(d){l({items:s.map(function(u,g){return g===a?(0,y.default)({},u,{controlSetting:(0,ne.Wz)(U().get(s[a],"controlSetting"),{dotformat:d?"0":"1"})}):u})})}},e.createElement("span",{style:{marginRight:"4px"}},_l("\u7701\u7565\u672B\u5C3E\u76840")),e.createElement(Qe.default,{title:_l("\u52FE\u9009\u540E\uFF0C\u4E0D\u8DB3\u5C0F\u6570\u4F4D\u6570\u65F6\u7701\u7565\u672B\u5C3E\u76840\u3002\u5982\u8BBE\u7F6E4\u4F4D\u5C0F\u6570\u65F6\uFF0C\u9ED8\u8BA4\u663E\u793A\u5B8C\u6574\u7CBE\u5EA62.800\uFF0C\u52FE\u9009\u540E\u663E\u793A\u4E3A2.8")},e.createElement("i",{className:"icon-help Gray_bd Font15"})))))},e.createElement(ke.Z,{className:"flexRow alignItemsCenter"},e.createElement("span",{className:"text flex Font14"},_l("\u6570\u636E\u683C\u5F0F")),e.createElement(Q.Z,{className:"Font15 Gray_9e Font14",icon:"arrow-right-tip"})))}function Wl(t){var a=t.list,o=t.onChange,n=t.updateErr,r=(0,Fe.W6)(function(){return e.createElement(Q.Z,{className:"Gray_bd Hand dragIcon ThemeHoverColor3",icon:"drag"})}),i=(0,Fe.W8)(function(c){var l=c.item,p=c.onUpdate,d=c.items,u=c.num,g=c.sourceTables,f=c.flowData,h=(0,Ee.Z)({showChangeName:!1,showCalculation:!1,popupVisible:!1}),E=(0,F.Z)(h,2),w=E[0],m=w.showChangeName,I=w.showCalculation,T=w.popupVisible,x=E[1],B=-1;(g||[]).find(function(v,b){l.oid&&l.oid.indexOf(v.workSheetId)>=0&&(B=b)});var N=l.isCalculateField?"#9e9e9e":On[B],S=U().get(l,"isDelete");if(l.isCalculateField){var Z=cl(U().get(l,"controlSetting.dataSource")),k=a.filter(function(v){return!v.isCalculateField});Z.filter(function(v){return!!k.find(function(b){return b.id===v})}).length<Z.length&&(S=!0)}else g.find(function(v){return l.oid&&l.oid.indexOf(v.workSheetId)>=0})||(S=!0);return S&&n(),e.createElement(Ll,{className:"flexRow cardItem alignItemsCenter Relative mTop12 hoverBoxShadow"},e.createElement(r,null),!l.isCalculateField&&B>=0&&e.createElement("div",{className:"colorByWorksheet",style:{backgroundColor:N}}),e.createElement("div",{className:"flex flexRow pLeft16 pRight12 alignItemsCenter Relative"},S&&!l.isCalculateField?e.createElement("span",{className:"Red Bold flex"},_l("\u5B57\u6BB5\u5DF2\u5220\u9664")):e.createElement(e.Fragment,null,e.createElement(Q.Z,{icon:(0,sn.hB)(l.isCalculateField?31:6),className:V()("Font16"),style:{color:N}}),e.createElement("div",{className:V()("flex mLeft5 overflow_ellipsis WordBreak Bold",{Red:S&&l.isCalculateField})},l.alias,l.aggFuncType&&"("+bt.Z0.find(function(v){return v.value===l.aggFuncType}).text+")")),!l.isCalculateField&&e.createElement(Qe.default,{placement:"bottom",color:"#fff",title:e.createElement("span",{className:"Gray"},(((c.sourceTables||[]).find(function(v){return l.oid.indexOf(v.workSheetId)>=0})||{}).tableName||_l("\u672A\u547D\u540D"))+"-"+(U().get(l,"controlSetting")?U().get(l,"controlSetting.controlName"):U().get(l,"alias")))},e.createElement(Q.Z,{icon:"info_outline",className:"Hand Gray_9e ThemeHoverColor3 Font16"})),l.isCalculateField?e.createElement(Qe.default,{title:_l("\u7F16\u8F91")},e.createElement(Q.Z,{icon:"new_mail",className:"Hand Gray_9e ThemeHoverColor3 Font16 mLeft8",onClick:function(){x({showCalculation:!0})}})):e.createElement(Ue.Z,{action:["click"],popupVisible:T,onPopupVisibleChange:function(b){x({popupVisible:b})},getPopupContainer:function(){return document.body},popupAlign:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(yt,{className:V()("Relative",{rowsCountItem:l.isRowsCount})},e.createElement(ke.Z,{className:"settingSheet",onClick:function(){x({showChangeName:!0,popupVisible:!1})}},e.createElement("span",{className:"text Font14"},_l("\u91CD\u547D\u540D"))),!l.isRowsCount&&e.createElement(e.Fragment,null,e.createElement(Ue.Z,{action:["click"],popupAlign:{points:["tl","tr"],offset:[0,-5],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(yt,{className:"Relative"},Gn(l.mdType).map(function(v){return e.createElement(ke.Z,{className:V()("settingSheet flexRow",{ThemeColor3:v.value===l.aggFuncType}),onClick:function(){if(v.value!==l.aggFuncType){var W=!!a.find(function(M){return M.oid===l.oid&&M.aggFuncType===v.value});if(W){alert(_l("\u4E0D\u80FD\u91CD\u590D\u6DFB\u52A0\u76F8\u540C\u8BA1\u7B97\u65B9\u5F0F\u7684\u76F8\u540C\u5B57\u6BB5"),3);return}p(d.map(function(M,H){return H===u?(0,y.default)({},M,{aggFuncType:v.value,alias:an(M.name+"_"+v.value,f)}):M})),x({popupVisible:!1})}}},v.text)}))},e.createElement(ke.Z,{className:"flexRow alignItemsCenter",onClick:function(){x({popupVisible:!0})}},e.createElement("span",{className:"text flex Font14"},_l("\u8BA1\u7B97")),e.createElement(Q.Z,{className:"Font15 Gray_9e Font14",icon:"arrow-right-tip"}))),e.createElement(Fl,c)))},e.createElement(Q.Z,{icon:"arrow-down-border",className:"Hand Gray_9e ThemeHoverColor3 Font16 mLeft8",onClick:function(){return x({popupVisible:!0})}})),e.createElement(Qe.default,{title:_l("\u5220\u9664")},e.createElement(Q.Z,{icon:"clear",className:"clearIcon Hand Gray_9e del ThemeHoverColor3 mLeft8 Font16",onClick:function(){p(d.filter(function(b,W){return W!==u}))}}))),I&&e.createElement(At,{visible:I,onHide:function(){x({showCalculation:!1})},calculation:l.controlSetting,allControls:a.filter(function(v){return!v.isCalculateField}).map(function(v){return(0,y.default)({},v,{controlName:v.alias,controlId:U().get(v,"id"),type:6})}),onOk:function(b){var W=(0,y.default)({},l,{alias:an(b.controlName,c.flowData),controlSetting:b,name:b.controlName});p(d.map(function(M,H){return H===u?W:M}))}}),m&&e.createElement(Pn.Z,{name:l.alias,onCancel:function(){x({showChangeName:!1})},onChange:function(b){if(l.alias!==b){if(!an(b,f,!0))return alert(_l("\u5DF2\u5B58\u5728\u8BE5\u5B57\u6BB5\u540D\u79F0\uFF0C\u540D\u79F0\u4E0D\u53EF\u91CD\u590D"),3);p(d.map(function(W,M){return M===u?(0,y.default)({},W,{alias:b}):W}),!1),x({showChangeName:!1})}}}))}),s=(0,Fe.JN)(function(c){var l=c.items;return e.createElement("div",{className:"mTop8"},U().map(l,function(p,d){return e.createElement(i,(0,y.default)({item:p},c,{key:"item_"+d,index:d,num:d}))}))});return e.createElement(e.Fragment,null,e.createElement(s,{items:a,flowData:t.flowData,sourceTables:t.sourceTables,distance:5,useDragHandle:!0,onSortEnd:function(l){var p=l.oldIndex,d=l.newIndex;p!==d&&o((0,Fe.Rp)(a,p,d),!1)},helperClass:"groupConPolymerization",onUpdate:function(l,p){o(l,p)}}))}var Ql=(0,Y.Z)([`
  width: 240px;
  .title {
    padding: 0 16px;
    margin-top: 10px;
  }
  .itemControl {
    padding: 10px 16px;
    &:hover {
      background: #f5f5f5;
    }
    &.hs {
      background: #f5f5f5;
      color: #2196f3;
    }
    svg {
      margin-top: 2px;
    }
  }
`],[`
  width: 240px;
  .title {
    padding: 0 16px;
    margin-top: 10px;
  }
  .itemControl {
    padding: 10px 16px;
    &:hover {
      background: #f5f5f5;
    }
    &.hs {
      background: #f5f5f5;
      color: #2196f3;
    }
    svg {
      margin-top: 2px;
    }
  }
`]),jl=(0,Y.Z)([`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 5px 0;
  border-radius: 3px;
  background: white;
  height: 320px;
  .lineLeft {
    width: 0;
    border-left: 1px solid #dddddd;
  }
`],[`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 5px 0;
  border-radius: 3px;
  background: white;
  height: 320px;
  .lineLeft {
    width: 0;
    border-left: 1px solid #dddddd;
  }
`]),Hl=z.ZP.div(Ql),Pl=z.ZP.div(jl);function Gl(t){var a=t.worksheets,o=t.onChange,n=t.worksheetId,r=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"title Bold Gray_75 Font13"},_l("\u5DE5\u4F5C\u8868")),e.createElement("div",{className:"mTop6"},a.map(function(s){var c=n===s.workSheetId;return e.createElement("div",{className:V()("itemControl flexRow alignItemsCenter",{hs:c}),onClick:function(p){o(s.workSheetId)}},e.createElement("div",{className:V()("flex flexRow alignItemsCenter Hand")},e.createElement(Ge.Z,{url:s.iconUrl?s.iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/"+s.icon+".svg",fill:c?"#2196f3":"#757575",size:16}),e.createElement("div",{className:V()("flex mLeft5 overflow_ellipsis WordBreak Bold",c?"ThemeColor3":"Gray_9e")},s.tableName)),e.createElement(Q.Z,{icon:"arrow-right-tip",className:V()("Hand mLeft10 Gray_9e")}))})))};return e.createElement(Hl,{className:""},r(t))}function Ml(t){var a=t.worksheets,o=(0,Ee.Z)({worksheetId:t.worksheetId}),n=(0,F.Z)(o,2),r=n[0].worksheetId,i=n[1];return(0,e.useEffect)(function(){i({worksheetId:t.worksheetId})},[t.worksheetId]),e.createElement(Pl,{className:"flexRow"},a.length>1&&e.createElement(Gl,{worksheets:a,worksheetId:r,onChange:function(c){i({worksheetId:c})}}),r&&e.createElement(e.Fragment,null,a.length>1&&e.createElement("div",{className:"lineLeft"}),e.createElement(Un,{addRowsCount:!0,forAggregation:!0,title:(a.find(function(s){return s.workSheetId===r})||{}).tableName,onChange:function(c){t.onChange(c,r),i({worksheetId:""})},key:r,worksheetId:r,flowData:t.flowData,sourceInfos:t.sourceInfos})))}var cs=C(917),Ul=C(51040),Ol=C(56035),Vl=C(46794),zl=C.n(Vl),Yl=C(69507),Jl=C(40240),Kl=z.ZP.div(function(t){var a=t.width;return`
  .tableCon {
    overflow: auto;
    width: 100%;
    .itemCon {
      flex-grow: 0;
      flex-shrink: 0;
      min-width: `+(a>200?a:200)+`px;
      border: 1px solid rgba(0, 0, 0, 0.09) !important;
      border-left: none !important;
      border-top: none !important;
      padding: 0 16px;
      box-sizing: border-box;
      height: 35px;
      line-height: 35px;
      overflow: hidden;
    }
    .tag {
      max-width: 70px;
      min-width: 70px;
      border-left: 0;
    }
    .tableHeader {
      position: sticky;
      top: 0;
      .itemCon {
        background-color: #fafafa !important;
      }
    }
    .rowCon {
      .itemCon {
        border-top: 1px solid rgba(0, 0, 0, 0.09);
      }
    }
  }
`});function Xl(t){var a=(t.width-70)/t.controls.length;return e.createElement(Kl,{className:"h100",width:a},e.createElement("div",{className:"tableCon flex"},t.controls.length>0&&e.createElement("div",{className:"tableHeader flexRow"},e.createElement("div",{className:"tag flexRow alignItemsCenter itemCon InlineBlock"}),t.controls.map(function(o){return e.createElement("div",{className:"itemCon flex flexRow alignItemsCenter InlineBlock",width:a},t.showIcon&&o.icon&&e.createElement(Q.Z,{icon:o.icon,className:"Font16 mRight5",style:{color:o.color||"#9e9e9e"}}),e.createElement("span",{className:"ellipsis"}," ",o.controlName))})),t.loading?e.createElement(xe.Z,null):t.renderCon?t.renderCon():e.createElement(e.Fragment,null,t.data.map(function(o,n){return e.createElement("div",{className:"rowCon flexRow"},e.createElement("div",{className:"tag flexRow alignItemsCenter itemCon InlineBlock"},n+1),t.controls.map(function(r){return e.createElement("div",{className:"itemCon flex",width:a},e.createElement(Yl.Z,{cell:(0,y.default)({},r,{value:o[r.controlId]}),worksheetId:t.worksheetId,row:{rowid:o.rowid},isCharge:!1}))}))}))))}const ql=(0,Jl.Z)(Xl);var $l=(0,Y.Z)([`
  .coverTab {
    position: absolute;
    right: 20px;
    top: 12px;
    bottom: 0;
    left: 20px;
    z-index: 1;
    background: #f5f5f5;
    opacity: 0.5;
  }
  .warnCon {
    border-radius: 5px;
    padding: 8px 14px;
    margin: 20px 20px 0;
    &.isERR {
      background: #ffe2e2;
    }
    &.isRunning {
      background: #edf6ff;
    }
    &.hasRun {
      background: rgba(76, 175, 80, 0.09);
    }
    &.isStop {
      background: #fef9ed;
    }
    &.hasChange {
      .icon {
        color: #ff6c00;
      }
      background: #fff9ed;
    }
    .btn {
      padding: 9px 16px;
      background: #ffffff;
      border-radius: 3px;
      border: 1px solid #bfbfbf;
      &:hover {
        color: #2196f3;
        border: 1px solid #2196f3;
      }
    }
  }
  .searchInputComp.default .icon-search {
    font-size: 20px;
    &:hover {
      color: #2196f3 !important;
    }
  }
  .previewHeader {
    padding: 16px 24px 0;
  }
  .previewEmpty {
    & > div {
      margin-top: -100px;
    }
  }
  .previewBtn {
    padding: 9px 24px;
    line-height: 1 !important;
    min-width: 0;
    position: absolute;
    min-height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &.disable {
      color: #bdbdbd;
      border: 1px solid #bdbdbd;
      &:hover {
        background: #fff;
      }
    }
  }
  .tableCon {
    width: 100%;
    height: 100%;
  }
  .icon-task-later {
    margin-top: -2px;
  }
  .previewBtnCon {
  }
`],[`
  .coverTab {
    position: absolute;
    right: 20px;
    top: 12px;
    bottom: 0;
    left: 20px;
    z-index: 1;
    background: #f5f5f5;
    opacity: 0.5;
  }
  .warnCon {
    border-radius: 5px;
    padding: 8px 14px;
    margin: 20px 20px 0;
    &.isERR {
      background: #ffe2e2;
    }
    &.isRunning {
      background: #edf6ff;
    }
    &.hasRun {
      background: rgba(76, 175, 80, 0.09);
    }
    &.isStop {
      background: #fef9ed;
    }
    &.hasChange {
      .icon {
        color: #ff6c00;
      }
      background: #fff9ed;
    }
    .btn {
      padding: 9px 16px;
      background: #ffffff;
      border-radius: 3px;
      border: 1px solid #bfbfbf;
      &:hover {
        color: #2196f3;
        border: 1px solid #2196f3;
      }
    }
  }
  .searchInputComp.default .icon-search {
    font-size: 20px;
    &:hover {
      color: #2196f3 !important;
    }
  }
  .previewHeader {
    padding: 16px 24px 0;
  }
  .previewEmpty {
    & > div {
      margin-top: -100px;
    }
  }
  .previewBtn {
    padding: 9px 24px;
    line-height: 1 !important;
    min-width: 0;
    position: absolute;
    min-height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &.disable {
      color: #bdbdbd;
      border: 1px solid #bdbdbd;
      &:hover {
        background: #fff;
      }
    }
  }
  .tableCon {
    width: 100%;
    height: 100%;
  }
  .icon-task-later {
    margin-top: -2px;
  }
  .previewBtnCon {
  }
`]),ei=z.ZP.div($l),yn=null;function ni(t,a){var o=(0,e.useRef)(t);(0,e.useEffect)(function(){o.current=t},[t]),(0,e.useEffect)(function(){if(!(!a&&a!==0)){var n=setInterval(function(){return o.current()},a);return function(){return clearInterval(n)}}},[a])}function ti(t){var a=this,o=t.projectId,n=t.appId,r=t.renderErrerDialog,i=t.onChangePreview,s=(0,Ee.Z)({flowData:t.flowData,data:[],controls:[],loading:!1,filters:[],keyWords:"",filterVisible:!1,pageIndex:1,pageSize:100,count:0,controlList:[],scan:!1,time:null,worksheetId:t.flowData.worksheetId,syncTaskStatus:"",hasEdit:t.hasChange}),c=(0,F.Z)(s,2),l=c[0],p=l.flowData,d=l.data,u=l.loading,g=l.filters,f=l.pageIndex,h=l.pageSize,E=l.keyWords,w=l.count,m=l.controlList,I=l.time,T=l.worksheetId,x=l.syncTaskStatus,B=l.hasEdit,N=c[1];(0,e.useEffect)(function(){N({hasEdit:t.hasChange,flowData:t.flowData,syncTaskStatus:t.hasChange?"":x}),S(t.flowData)},[t.flowData]),(0,e.useEffect)(function(){b()},[E,g]),(0,e.useEffect)(function(){W()},[E,f,h,g]),ni(function(){k()},["CREATING","RUNNING"].includes(x)?3e4:null);var S=function(j){var P=[],A=fe(j,"GROUP"),D=fe(j,"AGGREGATE"),R=U().get(A,"nodeConfig.config.groupFields")||[],G=U().get(D,"nodeConfig.config.aggregateFields")||[];P=R.map(function(L){return(0,y.default)({},L.resultField,L.resultField.controlSetting,{controlName:L.resultField.alias,type:L.resultField.mdType,controlId:j.fieldIdAndAssignCidMap?j.fieldIdAndAssignCidMap[L.resultField.id]:L.id,isGroupFields:!0})}).concat(G.map(function(L){return(0,y.default)({},L,L.controlSetting,{controlName:L.alias,type:L.isCalculateField?31:6,controlId:j.fieldIdAndAssignCidMap?j.fieldIdAndAssignCidMap[L.id]:L.id})})).filter(function(L){return!!L}),N({controlList:(P||[]).map(function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=-1;return(t.sourceInfos||[]).map(function(X,q){L.oid&&L.oid.indexOf(X.worksheetId)>=0&&(O=q)}),(0,y.default)({},L,{icon:(0,sn.hB)(L.isCalculateField?31:L.isGroupFields?L.mdType:6),color:L.isGroupFields||L.isCalculateField||O<0?null:On[O]})})})},Z=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";N({syncTaskStatus:j,hasEdit:!1}),i(j==="RUNNING")},k=function(){if(!T||!["CREATING","RUNNING"].includes(x)){Z();return}W(T),b(T),pn.getPreviewTaskStatus({projectId:o,appId:n,aggTableId:p.id}).then(function(j){Z(j)})},v=function(){var H=(0,In.Z)(nn().mark(function j(P){var A,D,R,G;return nn().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return A=!0,D=[],Z("RUNNING"),N({time:Be()().format("HH:mm:SS")}),O.next=6,pn.publishTask({projectId:o,appId:n,aggTableId:P.id,preview:!0});case 6:if(R=O.sent,A=R.isSucceeded,D=R.errorMsgList,A){O.next=13;break}return Z(T?"ERROR":""),alert(D.length<=0?_l("\u805A\u5408\u8868\u9884\u89C8\u5931\u8D25"):D.join(""),3),O.abrupt("return");case 13:G=(0,y.default)({},P,{fieldIdAndAssignCidMap:R.fieldIdAndAssignCidMap}),N({worksheetId:R.worksheetId,flowData:G}),S(G),W(R.worksheetId),b(R.worksheetId);case 18:case"end":return O.stop()}},j,a)}));return function(P){return H.apply(this,arguments)}}(),b=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p.worksheetId;if(j){var P={worksheetId:j,pageSize:h,pageIndex:f,status:1,sortControls:[],notGetTotal:!0,searchType:1,keyWords:E,filterControls:g};Se.Z.getFilterRowsTotalNum(P).then(function(A){N({count:Number(A)||0})})}},W=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p.worksheetId;if(!(u||!j)){yn&&yn.abort(),N({loading:!0});var P={worksheetId:j,pageSize:h,pageIndex:f,status:1,sortControls:[],notGetTotal:!0,searchType:1,keyWords:E,filterControls:g};yn=Se.Z.getFilterRows(P),yn.then(function(A){N({data:U().get(A,"data"),pageIndex:f,loading:!1})})}},M=function(j){u||N({pageIndex:j})};return e.createElement(ei,{className:"h100 flexColumn"},(B&&p.worksheetId||x)&&e.createElement("div",{className:V()("warnCon flexRow alignItemsCenter",{isRunning:x==="RUNNING",hasRun:x==="FINISHED",isStop:x==="STOP",hasChange:B,isERR:x==="ERROR"})},x==="RUNNING"&&e.createElement(xe.Z,{size:"small",className:"mRight10"}),B&&e.createElement(Q.Z,{icon:"error",className:"Font20 mRight10"}),x==="FINISHED"&&e.createElement("div",{className:"Bold mRight10"},_l("\u5DF2\u5B8C\u6210")),x==="STOP"&&e.createElement("div",{className:"Bold mRight10"},_l("\u5DF2\u505C\u6B62")),e.createElement("div",{className:"flex"},x==="RUNNING"&&_l("\u6B63\u5728\u751F\u6210\u9884\u89C8\u6570\u636E\uFF08\u622A\u6B62%0\uFF09\uFF0C\u6570\u636E\u91CF\u5927\u65F6\u9700\u8981\u8F83\u957F\u65F6\u95F4",I),x==="FINISHED"&&_l("\u751F\u6210\u622A\u6B62%0\u7684\u6570\u636E\uFF0C\u5171\u805A\u5408%1\u884C",I,w),x==="STOP"&&_l("\u5904\u7406%0\u884C\uFF08\u622A\u6B62%1\uFF09",w,I),x==="ERROR"&&_l("\u9884\u89C8\u5931\u8D25"),B&&_l("\u805A\u5408\u8868\u914D\u7F6E\u5DF2\u66F4\u6539\uFF0C\u9700\u8981\u91CD\u65B0\u805A\u5408\u540E\u67E5\u770B\u7ED3\u679C")),e.createElement("div",{className:"btn Hand mLeft10 Bold",onClick:function(){x!=="RUNNING"&&v(p),Z(x==="RUNNING"?"STOP":"RUNNING")}},x==="RUNNING"?_l("\u505C\u6B62"):x==="FINISHED"?_l("\u66F4\u65B0"):_l("\u91CD\u65B0\u9884\u89C8"))),e.createElement(e.Fragment,null,e.createElement("div",{className:"Font16 Gray flexRow alignItemsCenter Height36 previewHeader"},e.createElement("span",{className:"flex Bold"},_l("\u9884\u89C8")),e.createElement(e.Fragment,null,(x==="RUNNING"||!x&&T)&&e.createElement(e.Fragment,null,x==="RUNNING"&&e.createElement("div",{className:"Bold Gray_9e Font13"},_l("\u6BCF30\u79D2\u81EA\u52A8\u5237\u65B0")),e.createElement(Pe.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u5237\u65B0"))},e.createElement(Q.Z,{icon:"task-later",className:"Gray_9e Font18 pointer mLeft10 mRight2 ThemeHoverColor3",onClick:function(){M(1),W(T),b(T)}}))),T&&e.createElement(Ul.Z,{className:"pagination",pageIndex:f,pageSize:h,allCount:w,changePageSize:function(j,P){N({pageSize:j,pageIndex:P})},changePageIndex:M,onPrev:function(){M(f-1)},onNext:function(){M(f+1)}}))),e.createElement("div",{className:"tabConB pLeft20 pRight20 Relative w100 h100 flex flexColumn"},e.createElement("div",{className:V()("tableCon mTop12 flex",{})},T?e.createElement(Ol.Z,{loading:u,controls:m,showIcon:!0,data:d}):e.createElement("div",{className:"flexRow alignItemsCenter h100 Relative"},m.length>0?e.createElement(e.Fragment,null,e.createElement(ql,{loading:!1,controls:m,showIcon:!0,data:[],renderCon:function(){return e.createElement("div",{className:"previewBtnCon flexRow alignItemsCenter"},e.createElement(Ze.ZP,{type:"ghost",className:"previewBtn",onClick:function(P){v(p)}},_l("\u9884\u89C8\u7ED3\u679C")))}})):e.createElement("div",{className:"previewEmpty flex TxtCenter alignItemsCenter justifyContentCenter"},e.createElement("div",{className:""},e.createElement("img",{src:zl(),height:130}),e.createElement("div",{className:"Gray_9e Font14 mTop20"},_l("\u4ECE\u5DE6\u4FA7\u9762\u677F\u4E2D\u9009\u62E9\u6570\u636E\u6E90\u548C\u5B57\u6BB5")))))))))}var ai=(0,Y.Z)([`
  .setCon {
    overflow-y: auto;
    width: 360px;
    border-right: 1px solid #e8e8e8;
    padding: 24px;
    flex-shrink: 0;
    min-width: 0;
    .line {
      border-bottom: 1px solid #dddddd;
    }
    .cover {
      position: fixed;
      background: #f5f5f5;
      opacity: 0.5;
      left: 0;
      top: 0;
      width: 360px;
      bottom: 0;
      z-index: 9999;
    }
  }
  .preview {
    background: #fff;
    flex-shrink: 0;
    min-width: 0;
  }
  .hoverBoxShadow {
    &:hover {
      box-shadow: 0px 1px 2px rgba(33, 150, 243, 0.3);
    }
  }
  .colorByWorksheet {
    width: 2px;
    height: calc(100% - 16px);
    position: absolute;
    left: 0;
    top: 8px;
  }
`],[`
  .setCon {
    overflow-y: auto;
    width: 360px;
    border-right: 1px solid #e8e8e8;
    padding: 24px;
    flex-shrink: 0;
    min-width: 0;
    .line {
      border-bottom: 1px solid #dddddd;
    }
    .cover {
      position: fixed;
      background: #f5f5f5;
      opacity: 0.5;
      left: 0;
      top: 0;
      width: 360px;
      bottom: 0;
      z-index: 9999;
    }
  }
  .preview {
    background: #fff;
    flex-shrink: 0;
    min-width: 0;
  }
  .hoverBoxShadow {
    &:hover {
      box-shadow: 0px 1px 2px rgba(33, 150, 243, 0.3);
    }
  }
  .colorByWorksheet {
    width: 2px;
    height: calc(100% - 16px);
    position: absolute;
    left: 0;
    top: 8px;
  }
`]),ri=(0,Y.Z)([`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 6px 0;
  background-color: #fff;
`],[`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 6px 0;
  background-color: #fff;
`]),oi=(0,Y.Z)([`
  .flexRowCon {
    display: flex !important;
    min-width: 0;
  }
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.16);
  &.isAdd {
    background: initial;
    border-radius: initial;
    box-shadow: initial;
  }
  .ming.Dropdown .Dropdown--border,
  .dropdownTrigger .Dropdown--border {
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      word-break: break-word;
      flex: 1;
    }
    border: none;
  }
  .filterConByWorksheet {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    margin: 0 12px 0;
    box-sizing: border-box;
    width: calc(100% - 24px);
    padding: 2px 5px 8px 12px;
    &:hover {
      background: #f5f5f5;
    }
  }
  .selectWorksheetCommon .dropdownWrapper .aroundList {
    z-index: 10000;
    .selectWorksheetCommonContent {
      input {
        &::placeholder {
          color: #bdbdbd;
        }
        margin-left: -8px;
      }
      .icon-search {
        font-size: 18px !important;
        left: 16px;
        top: 16px;
      }
    }
  }
`],[`
  .flexRowCon {
    display: flex !important;
    min-width: 0;
  }
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.16);
  &.isAdd {
    background: initial;
    border-radius: initial;
    box-shadow: initial;
  }
  .ming.Dropdown .Dropdown--border,
  .dropdownTrigger .Dropdown--border {
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      word-break: break-word;
      flex: 1;
    }
    border: none;
  }
  .filterConByWorksheet {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    margin: 0 12px 0;
    box-sizing: border-box;
    width: calc(100% - 24px);
    padding: 2px 5px 8px 12px;
    &:hover {
      background: #f5f5f5;
    }
  }
  .selectWorksheetCommon .dropdownWrapper .aroundList {
    z-index: 10000;
    .selectWorksheetCommonContent {
      input {
        &::placeholder {
          color: #bdbdbd;
        }
        margin-left: -8px;
      }
      .icon-search {
        font-size: 18px !important;
        left: 16px;
        top: 16px;
      }
    }
  }
`]),li=(0,Y.Z)([`
  width: 100%;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.16);
  z-index: 1;
  .pageName {
    .iconWrap {
      padding-right: 24px;
      .back {
        color: #757575;
        &:hover {
          color: #2196f3;
        }
      }
    }
    display: flex;
    align-items: center;
    font-size: 17px;
    .name {
      box-sizing: border-box;
      max-width: 240px;
      margin-top: 1px;
      padding: 0 10px;
      border-bottom: 1px dashed #9e9e9e;
      cursor: pointer;
    }
    input {
      border: none;
      font-size: 17px;
      border-bottom: 2px solid #2196f3;
    }
  }
  .ming.Button--secondary {
    color: #757575;
    background: #f5f5f5;
    &:hover {
      background: #e0e0e0;
    }
  }
  .publishBtn {
    box-sizing: border-box;
    padding: 0 32px;
    line-height: 36px;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    text-align: center;
    font-weight: 600;
    background: #2196f3;
    &:hover {
      background: #1e88e5;
    }
  }
  .disable,
  .disable:hover {
    background: #bdbdbd;
    background-color: #bdbdbd !important;
    border: 1px solid #bdbdbd;
    border-color: #bdbdbd;
    cursor: not-allowed !important;
    color: #fff;
  }
  .workflowStatusWrap {
    .disable,
    .disable:hover {
      .iconWrap .workflowSwitchIcon-active {
        color: #bdbdbd !important;
      }
    }
  }
`],[`
  width: 100%;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.16);
  z-index: 1;
  .pageName {
    .iconWrap {
      padding-right: 24px;
      .back {
        color: #757575;
        &:hover {
          color: #2196f3;
        }
      }
    }
    display: flex;
    align-items: center;
    font-size: 17px;
    .name {
      box-sizing: border-box;
      max-width: 240px;
      margin-top: 1px;
      padding: 0 10px;
      border-bottom: 1px dashed #9e9e9e;
      cursor: pointer;
    }
    input {
      border: none;
      font-size: 17px;
      border-bottom: 2px solid #2196f3;
    }
  }
  .ming.Button--secondary {
    color: #757575;
    background: #f5f5f5;
    &:hover {
      background: #e0e0e0;
    }
  }
  .publishBtn {
    box-sizing: border-box;
    padding: 0 32px;
    line-height: 36px;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    text-align: center;
    font-weight: 600;
    background: #2196f3;
    &:hover {
      background: #1e88e5;
    }
  }
  .disable,
  .disable:hover {
    background: #bdbdbd;
    background-color: #bdbdbd !important;
    border: 1px solid #bdbdbd;
    border-color: #bdbdbd;
    cursor: not-allowed !important;
    color: #fff;
  }
  .workflowStatusWrap {
    .disable,
    .disable:hover {
      .iconWrap .workflowSwitchIcon-active {
        color: #bdbdbd !important;
      }
    }
  }
`]),ii=z.ZP.div(ai),si=z.ZP.div(ri),ci=z.ZP.div(oi),di=z.ZP.div(li),ds=C(21352),pi=C(67332),ui=C(57296),mi=C(68111);function fi(t){var a=t.projectId,o=t.appId,n=t.getWorksheets,r=t.onChange,i=(0,Ee.Z)({filterVisible:!1,filterVisibleId:"",hideIds:[]}),s=(0,F.Z)(i,2),c=s[0],l=c.filterVisible,p=c.filterVisibleId,d=c.hideIds,u=s[1],g=function(m,I,T,x){var B=fe(t.flowData,"DATASOURCE");return e.createElement(e.Fragment,null,e.createElement("div",{className:"Dropdown--input Dropdown--border"},m.isDelete?e.createElement("span",{className:"Red Bold"},_l("\u6570\u636E\u6E90\u5DF2\u5220\u9664")):e.createElement(e.Fragment,null,e.createElement(Ge.Z,{url:m.iconUrl?m.iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/"+m.icon+".svg",fill:"#9e9e9e",size:16}),e.createElement("span",{className:"flex mLeft5 Bold"},m.tableName)),e.createElement(Qe.default,{title:_l("\u7B5B\u9009")},e.createElement("div",{className:V()("ming Icon icon icon-filter mLeft8 Hand Font16 ThemeHoverColor3",T.length>0?"ThemeColor3":"Gray_9e"),onClick:function(S){S.stopPropagation(),T.length>0?u({hideIds:d.includes(m.workSheetId)?d.filter(function(Z){return Z!==m.workSheetId}):d.concat(m.workSheetId)}):u({filterVisible:!0,filterVisibleId:m.workSheetId})}})),I&&e.createElement(Qe.default,{title:_l("\u66F4\u6539\u6570\u636E\u6E90")},e.createElement("div",{className:"ming Icon icon icon-swap_horiz mLeft8 Gray_9e Font16 Hand ThemeHoverColor3"})),m.workSheetId&&e.createElement(Qe.default,{title:_l("\u5220\u9664")},e.createElement(Q.Z,{icon:"clear",className:"mLeft8 Font16 Hand Gray_9e del ThemeHoverColor3 mRight8",onClick:function(S){S.stopPropagation(),r((0,y.default)({},B,{nodeConfig:(0,y.default)({},_.get(B,"nodeConfig"),{config:(0,y.default)({},_.get(B,"nodeConfig.config"),{sourceTables:(_.get(B,"nodeConfig.config.sourceTables")||[]).filter(function(Z){return Z.workSheetId!==m.workSheetId})})})}),{sourceInfos:t.sourceInfos.filter(function(Z){return Z.worksheetId!==m.workSheetId})})}}))))},f=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=arguments[1],T=arguments[2],x=arguments[3],B=fe(t.flowData,"DATASOURCE"),N=_.get(m,"filterConfig.items")||[],S=(_.get(B,"nodeConfig.config.sourceTables")||[]).length===1||!m.workSheetId;return e.createElement(ci,{className:V()("mTop12 Relative",{pBottom12:N.length>0&&!d.includes(m.workSheetId),isAdd:I,hoverBoxShadow:!I})},m.workSheetId&&e.createElement("div",{className:"colorByWorksheet",style:{backgroundColor:On[x]}}),S?e.createElement(pi.Z,{dialogClassName:"sheetSelectDialog",worksheetType:0,projectId:a,appId:o,filterIds:(_.get(B,"nodeConfig.config.sourceTables")||[]).map(function(Z){return Z.workSheetId}),value:m.workSheetId,onChange:function(k,v,b){if(((_.get(B,"nodeConfig.config.sourceTables")||[]).map(function(H){return H.workSheetId})||[]).includes(v)){alert(_l("\u4E00\u4E2A\u805A\u5408\u8868\u4E0D\u80FD\u6DFB\u52A0\u76F8\u540C\u7684\u6570\u636E\u6E90"),3);return}var W=(_.get(B,"nodeConfig.config.sourceTables")||[]).map(function(H){return H.workSheetId});n(m.workSheetId?W.map(function(H){return H.workSheetId===m.worksheetId?v:H}):W.concat(v));var M={dsType:"MING_DAO_YUN",icon:b.icon,iconUrl:b.iconUrl,tableName:b.workSheetName,appId:k,workSheetId:v,filterConfig:null};r((0,y.default)({},B,{nodeConfig:(0,y.default)({},_.get(B,"nodeConfig"),{config:(0,y.default)({},_.get(B,"nodeConfig.config"),{sourceTables:m.workSheetId?(_.get(B,"nodeConfig.config.sourceTables")||[]).map(function(H){return H.workSheetId===m.workSheetId?M:H}):(_.get(B,"nodeConfig.config.sourceTables")||[]).concat(M)})})}))},dropdownElement:T||(m.workSheetId?g(m,!0,N,x):e.createElement("div",{className:"Dropdown--input Dropdown--border"},e.createElement("div",{className:"Gray_a"},_l("\u8BF7\u9009\u62E9\u5DE5\u4F5C\u8868")),e.createElement("div",{className:"ming Icon icon icon-arrow-down-border mLeft8 Gray_9e Font16 Hand mRight12 ThemeHoverColor3"})))}):e.createElement("div",{className:"selectWorksheetCommon ming Dropdown w100"},e.createElement("div",{class:"dropdownWrapper w100"},e.createElement("div",{class:"targetEle"},g(m,!1,N,x)))),N.length>0&&!d.includes(m.workSheetId)&&e.createElement(ui.Z,{className:"filterConByWorksheet mTop0",data:{},filters:N,loading:!1,globalSheetInfo:{projectId:a,appId:o},onClear:function(){var k=(0,y.default)({},B,{nodeConfig:(0,y.default)({},_.get(B,"nodeConfig"),{config:(0,y.default)({},_.get(B,"nodeConfig.config"),{sourceTables:(_.get(B,"nodeConfig.config.sourceTables")||[]).map(function(v){return v.workSheetId===m.workSheetId?(0,y.default)({},v,{filterConfig:null}):v})})})});r(k)},controls:(t.sourceInfos.find(function(Z){return Z.worksheetId===m.workSheetId})||{}).controls||[],allControls:[],editFn:function(){return u({filterVisible:!0,filterVisibleId:m.workSheetId})}}))},h=function(){if(!l)return"";var m=fe(t.flowData,"DATASOURCE"),I=(_.get(m,"nodeConfig.config.sourceTables")||[]).find(function(N){return N.workSheetId===p}),T=_.get(I,"filterConfig.items")||[],x=t.sourceInfos.find(function(N){return N.worksheetId===p})||{},B=x.controls||[];return e.createElement(mi.Z,{data:{},overlayClosable:!1,relationControls:B||[],title:"\u7B5B\u9009",fromCondition:"subTotal",filters:T,allControls:[],globalSheetInfo:{projectId:a,appId:o},onChange:function(S){var Z=S.filters,k=Z.map(function(b){return b.isGroup?(0,y.default)({},b,{groupFilters:b.groupFilters.map(function(W){return(0,y.default)({},W,{fieldName:(B.find(function(M){return M.id===W.controlId&&M.alias===W.name})||{}).name})})}):(0,y.default)({},b,{fieldName:(B.find(function(W){return W.id===b.controlId&&W.alias===b.name})||{}).name})}),v=(0,y.default)({},m,{nodeConfig:(0,y.default)({},_.get(m,"nodeConfig"),{config:(0,y.default)({},_.get(m,"nodeConfig.config"),{sourceTables:(_.get(m,"nodeConfig.config.sourceTables")||[]).map(function(b){return b.workSheetId===p?(0,y.default)({},b,{filterConfig:{items:k}}):b})})})});r(v),u({filterVisible:!1,filterVisibleId:""})},onClose:function(){return u({filterVisible:!1,filterVisibleId:""})},hideSupport:!0,supportGroup:!0})},E=fe(t.flowData,"DATASOURCE");return e.createElement(e.Fragment,null,(_.get(E,"nodeConfig.config.sourceTables")||[]).length>0?(_.get(E,"nodeConfig.config.sourceTables")||[]).map(function(w,m){return f(w,!1,null,m)}):f(),(_.get(E,"nodeConfig.config.sourceTables")||[]).length>0&&f({},!0,e.createElement("div",{className:"Hand Gray_75 ThemeHoverColor3 alignItemsCenter Bold flexRowCon"},e.createElement(Q.Z,{icon:"add",className:"InlineBlock Font16"}),e.createElement("span",null,_l("\u5DE5\u4F5C\u8868")))),h())}var ps={active:_l("\u540C\u6B65\u4E2D"),close:_l("\u5DF2\u5173\u95ED")};function gi(t){var a=t.onClose,o=t.projectId,n=t.appId,r=t.id,i=(0,Ee.Z)({flowData:{},showGroupDialog:!1,showCalculation:!1,sourceInfos:[],isUpdate:!1,updating:!1,loading:!0,isEdit:!1,name:"",hasChange:!1,hasDelete:!1,isPreviewRunning:!1}),s=(0,F.Z)(i,2),c=s[0],l=c.flowData,p=c.showGroupDialog,d=c.sourceInfos,u=c.showCalculation,g=c.isUpdate,f=c.updating,h=c.loading,E=c.isEdit,w=c.name,m=c.hasChange,I=c.hasDelete,T=c.isPreviewRunning,x=s[1];(0,e.useEffect)(function(){B()},[]);var B=function(){var D=null;x({loading:!0}),r?D=pn.getAggTable({projectId:o,appId:n,aggTableId:r}):D=pn.initEmpty({projectId:o,appId:n,owner:md.global.Account.accountId}),D.then(function(R){N(R)})},N=function(D){x({flowData:D,loading:(_.get(fe(D,"DATASOURCE"),"nodeConfig.config.sourceTables")||[]).length>0,hasChange:D.status==="EDITING"}),(_.get(fe(D,"DATASOURCE"),"nodeConfig.config.sourceTables")||[]).length>0&&S(_.get(fe(D,"DATASOURCE"),"nodeConfig.config.sourceTables").map(function(R){return R.workSheetId}))},S=function(D){Se.Z.getWorksheetsControls({worksheetIds:D,handControlSource:!0}).then(function(R){var G=R.code,L=R.data;G===1&&x({loading:!1,sourceInfos:_.map(D,function(O){return _.keyBy(L,"worksheetId")[O]}).map(function(O){return(0,y.default)({},O,{controls:(O.controls||[]).filter(function(X){return!X.encryId}).map(function(X){return(0,y.default)({},X,{relationControls:X.relationControls.filter(function(q){return!q.encryId})})})})})})})},Z=function(D){x({isUpdate:!0,flowData:(0,y.default)({},l,{aggTableNodes:(0,y.default)({},_.get(l,"aggTableNodes"),(0,Ce.default)({},D.nodeId,D))})})},k=function(D){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;!m&&R&&x({hasChange:!0}),pn.updateNode({projectId:o,aggTableId:l.id,nodeId:D.nodeId,name:D.name,nodeType:D.nodeType,status:D.status,description:D.description,nodeConfig:D.nodeConfig,updateFlag:R}).then(function(G){if(G.clearAll){var L,O=fe(l,"GROUP"),X=fe(l,"AGGREGATE");x({isUpdate:!0,sourceInfos:[],flowData:(0,y.default)({},l,{aggTableNodes:(0,y.default)({},_.get(l,"aggTableNodes"),(L={},(0,Ce.default)(L,D.nodeId,D),(0,Ce.default)(L,O.nodeId,(0,y.default)({},O,{nodeConfig:(0,y.default)({},O.nodeConfig,{config:{groupFields:[]}})})),(0,Ce.default)(L,X.nodeId,(0,y.default)({},X,{nodeConfig:(0,y.default)({},X.nodeConfig,{config:{aggregateFields:[]}})})),L))})});var q=_.get(D,"nodeConfig.config.sourceTables");q.length>0&&S(q.map(function(ee){return ee.workSheetId}))}else Z((0,y.default)({},D,{nodeConfig:G}))})},v=function(D){return Ae.Z.confirm({title:_l("\u62A5\u9519\u4FE1\u606F"),className:"connectorErrorDialog",description:e.createElement("div",{className:"errorInfo",style:{"max-height":400,overflow:"auto"}},D.map(function(R,G){return e.createElement("div",{key:G,className:"mTop5"},R)})),removeCancelBtn:!0,okText:_l("\u5173\u95ED")})},b=function(){f||W()},W=function(D){x({updating:!0}),pn.publishTask({projectId:o,appId:n,aggTableId:l.id,preview:!1}).then(function(R){x({updating:!1,hasChange:!1});var G=R.errorMsgList,L=G===void 0?[]:G,O=R.isSucceeded,X=R.errorNodeIds,q=X===void 0?[]:X,ee=R.errorType,se=R.worksheetId,ae=R.fieldIdAndAssignCidMap;O?a():L.length>0&&(x({isUpdate:!1,flowData:(0,y.default)({},l,{taskStatus:"ERROR"})}),v(L))},function(){x({updating:!1})})},M=function(){dn.Z.updateSyncTask({taskId:l.taskId,name:w,projectId:o,owner:md.global.Account.accountId}).then(function(D){D?x({flowData:(0,y.default)({},l,{taskName:w}),isEdit:!1,name:""}):alert(_l("\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)})};if(h)return e.createElement(xe.Z,null);var H=fe(l,"DATASOURCE"),j=fe(l,"GROUP"),P=fe(l,"AGGREGATE");return e.createElement(ii,{className:"flexColumn h100"},e.createElement(di,{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"flex mLeft24 pageName"},e.createElement("div",{className:"iconWrap Hand",onClick:function(){a()}},e.createElement("i",{className:"back icon-backspace Font24"})),E?e.createElement("input",{autoFocus:!0,value:w,onChange:function(D){var R=D.target.value;x({name:R})},onBlur:function(){w.trim()?M():x({isEdit:!1,name:""})}}):e.createElement("div",{className:"name overflow_ellipsis Font16 Bold",onClick:function(){return x({isEdit:!0,name:(l||{}).taskName})}},(l||{}).taskName||_l("\u672A\u547D\u540D\u805A\u5408\u8868"))),e.createElement("div",{className:"flex flexRow",style:{"justify-content":"flex-end"}},e.createElement("span",{className:V()("publishBtn InlineBlock Hand mRight24",{disable:f}),onClick:function(){f||b()}},l.worksheetId?_l("\u4FDD\u5B58"):_l("\u53D1\u5E03")))),e.createElement("div",{className:"con flex overflowHidden"},e.createElement("div",{className:"flexRow h100"},e.createElement("div",{className:"setCon h100 Relative"},T&&e.createElement(e.Fragment,null,e.createElement("div",{className:"cover"}),e.createElement("div",{className:"TxtCenter Bold Gray"},_l("\u9884\u89C8\u4E2D\u65E0\u6CD5\u4FEE\u6539\u914D\u7F6E\uFF0C\u8BF7\u5148\u505C\u6B62\u9884\u89C8"))),e.createElement("div",{className:"Bold Font14 Gray"},_l("\u6570\u636E\u6E90")),e.createElement(fi,{projectId:o,appId:n,flowData:l,sourceInfos:d,onChange:function(D,R){D&&k(D),R&&x((0,y.default)({},R))},getWorksheets:S}),e.createElement("div",{className:"line mTop20"}),e.createElement("div",{className:"Bold Font13 Gray mTop24"},e.createElement("div",{className:"flexRow"},e.createElement("span",{className:"flex Font14"},_l("\u5F52\u7EC4")," "),(_.get(H,"nodeConfig.config.sourceTables")||[]).length>1&&e.createElement("span",{className:"Hand Gray_75 ThemeHoverColor3",onClick:function(){x({showGroupDialog:!0})}},_l("\u8BBE\u7F6E\u5F52\u7EC4"))),(_.get(j,"nodeConfig.config.groupFields")||[]).length>0&&e.createElement(Al,{flowData:l,list:_.get(j,"nodeConfig.config.groupFields")||[],sourceTables:_.get(H,"nodeConfig.config.sourceTables")||[],onChange:function(D,R){k((0,y.default)({},j,{nodeConfig:(0,y.default)({},_.get(j,"nodeConfig"),{config:(0,y.default)({},_.get(j,"nodeConfig.config"),{groupFields:D})})}),R)},updateErr:function(){!I&&x({hasDelete:!0})}}),(_.get(H,"nodeConfig.config.sourceTables")||[]).length<=1?e.createElement(Ue.Z,{action:["click"],key:"groupFields_"+(_.get(j,"nodeConfig.config.groupFields")||[]).length,getPopupContainer:function(){return document.body},popupAlign:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:!0,adjustY:!0}},popup:(_.get(H,"nodeConfig.config.sourceTables")||[]).length<=0?e.createElement("span",null):e.createElement(si,null,e.createElement(Un,{title:((_.get(H,"nodeConfig.config.sourceTables")||[])[0]||{}).tableName,worksheetId:((_.get(H,"nodeConfig.config.sourceTables")||[])[0]||{}).workSheetId,flowData:l,sourceInfos:d,onChange:function(D){var R=D.control,G=D.childrenControl,L={alias:an(R.controlName,l),controlSetting:G||R,isChildField:!!G,parentFieldInfo:G?R:{},isNotNull:!0,isTitle:R.attribute===1,mdType:R.type,name:R.controlName,oid:((_.get(H,"nodeConfig.config.sourceTables")||[])[0]||{}).workSheetId+"_"+R.controlId,precision:0,scale:0},O={fields:[L],resultField:L},X=fe(l,"GROUP");k((0,y.default)({},X,{nodeConfig:(0,y.default)({},_.get(X,"nodeConfig"),{config:(0,y.default)({},_.get(X,"nodeConfig.config"),{groupFields:(_.get(X,"nodeConfig.config.groupFields")||[]).concat(O)})})}))}}))},e.createElement("div",{className:V()("mTop16 Gray_75 ThemeHoverColor3 qw alignItemsCenter flexRow",(_.get(H,"nodeConfig.config.sourceTables")||[]).length<=0?"":"Hand")},e.createElement(Q.Z,{icon:"add",className:"Font16"})," ",e.createElement("span",null,_l("\u5F52\u7EC4")))):""),e.createElement("div",{className:"line mTop20"}),e.createElement("div",{className:"Bold Font14 Gray mTop24"},_l("\u805A\u5408")),e.createElement(Wl,{flowData:l,list:_.get(P,"nodeConfig.config.aggregateFields")||[],sourceTables:_.get(H,"nodeConfig.config.sourceTables")||[],onChange:function(D,R){k((0,y.default)({},P,{nodeConfig:(0,y.default)({},_.get(P,"nodeConfig"),{config:(0,y.default)({},_.get(P,"nodeConfig.config"),{aggregateFields:D})})}),R)},updateErr:function(){!I&&x({hasDelete:!0})}}),e.createElement(Ue.Z,{action:["click"],getPopupContainer:function(){return document.body},key:"ChooseControlsForAggregation_"+(_.get(P,"nodeConfig.config.aggregateFields")||[]).length,popupAlign:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:!0,adjustY:!0}},popup:(_.get(H,"nodeConfig.config.sourceTables")||[]).length>0?e.createElement(Ml,{worksheets:_.get(H,"nodeConfig.config.sourceTables").map(function(A){return(0,y.default)({},A,{controls:(d.find(function(D){return D.worksheetId===A.workSheetId})||{}).controls})}),worksheetId:(_.get(H,"nodeConfig.config.sourceTables")||[]).length>1?"":(_.get(H,"nodeConfig.config.sourceTables")||[])[0].workSheetId,list:[],flowData:l,sourceInfos:d,onChange:function(D,R){var G=D.control,L=G===void 0?{}:G,O=D.childrenControl,X=fe(l,"AGGREGATE"),q=sl(_.get(X,"nodeConfig.config.aggregateFields")||[],O||L,R),ee=q.hs,se=q.aggFuncType;if(ee){alert(_l("\u4E0D\u80FD\u91CD\u590D\u6DFB\u52A0\u76F8\u540C\u8BA1\u7B97\u65B9\u5F0F\u7684\u76F8\u540C\u5B57\u6BB5"),3);return}var ae=L.controlId==="rowscount"?{name:_l("\u8BB0\u5F55\u6570\u91CF"),alias:an(_l("\u8BB0\u5F55\u6570\u91CF")+"_"+se,l),isRowsCount:!0,aggFuncType:se,oid:R+"_rowscount"}:{aggFuncType:se,alias:an((O||L).controlName+"_"+se,l),controlSetting:O||L,isChildField:!!O,parentFieldInfo:O?L:{},isNotNull:!0,isTitle:(O||L).attribute===1,mdType:(O||L).type,name:(O||L).controlName,oid:R+"_"+(O||L).controlId,precision:0,scale:0,isCalculateField:!1};k((0,y.default)({},X,{nodeConfig:(0,y.default)({},_.get(X,"nodeConfig"),{config:(0,y.default)({},_.get(X,"nodeConfig.config"),{aggregateFields:(_.get(X,"nodeConfig.config.aggregateFields")||[]).concat(ae)})})}))}}):e.createElement("span",{className:""})},e.createElement("span",{className:"InlineBlock"},e.createElement("span",{className:V()("mTop16 Gray_75 ThemeHoverColor3 Bold alignItemsCenter flexRow",(_.get(H,"nodeConfig.config.sourceTables")||[]).length<=0?"":"Hand")},e.createElement(Q.Z,{icon:"add",className:"Font16"}),e.createElement("span",null,_l("\u5B57\u6BB5"))))),(_.get(H,"nodeConfig.config.sourceTables")||[]).length>0&&(_.get(P,"nodeConfig.config.aggregateFields")||[]).filter(function(A){return!A.isCalculateField}).length>0&&e.createElement("span",{className:"InlineBlock"},e.createElement("span",{className:V()("Hand mTop16 Gray_75 ThemeHoverColor3 Bold flexRow alignItemsCenter mLeft25",{}),onClick:function(){x({showCalculation:!0})}},e.createElement(Q.Z,{icon:"add",className:"Font16"}),e.createElement("span",null,_l("\u8BA1\u7B97\u5B57\u6BB5")))),e.createElement("div",{className:"line mTop20"})),e.createElement("div",{className:"preview flex h100"},e.createElement(ti,(0,y.default)({},t,{sourceInfos:d,flowData:l,hasChange:m,renderErrerDialog:v,onChangePreview:function(D){x({isPreviewRunning:D})}}))))),p&&e.createElement(bl,{visible:p,onHide:function(){x({showGroupDialog:!1})},flowData:l,sourceInfos:d.map(function(A){return(0,y.default)({},A,{workSheetName:(_.get(H,"nodeConfig.config.sourceTables")||[]).find(function(D){return D.workSheetId===A.worksheetId}).tableName})}),groupControls:_.get(j,"nodeConfig.config.groupFields")||[],onOk:function(D){var R=fe(l,"GROUP");k((0,y.default)({},R,{nodeConfig:(0,y.default)({},_.get(R,"nodeConfig"),{config:(0,y.default)({},_.get(R,"nodeConfig.config"),{groupFields:D})})}))}}),u&&e.createElement(At,{visible:u,onHide:function(){x({showCalculation:!1})},onOk:function(D){var R={alias:an(D.controlName,l),controlSetting:D,isChildField:!1,parentFieldInfo:{},isNotNull:!0,isTitle:!1,mdType:31,name:D.controlName,precision:0,scale:0,isCalculateField:!0},G=fe(l,"AGGREGATE");k((0,y.default)({},G,{nodeConfig:(0,y.default)({},_.get(G,"nodeConfig"),{config:(0,y.default)({},_.get(G,"nodeConfig.config"),{aggregateFields:(_.get(G,"nodeConfig.config.aggregateFields")||[]).concat(R)})})}))},allControls:(_.get(P,"nodeConfig.config.aggregateFields")||[]).filter(function(A){return!A.isCalculateField}).map(function(A){return(0,y.default)({},A,{controlName:A.alias,controlId:_.get(A,"id"),type:6})})}))}var hi=C(98843),vi=(0,Y.Z)([`
  .emptyIcon {
    width: 130px;
    height: 130px;
    background: #f5f5f5;
    border-radius: 50%;
    opacity: 1;
    margin: 200px auto 0;
    i {
      margin: 0 auto;
    }
  }
  .cardItemCon {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    margin: 0 -10px;
  }
  .aggregationList {
    margin: 0 -40px;
  }
  .manageListHeader {
    height: 40px;
    border-bottom: 1px solid #dddddd;
    margin: 0 40px;
    .Dropdown {
      .Dropdown--input {
        padding: 0;
        i {
          line-height: 32px;
          display: inline-block;
          vertical-align: middle;
          height: 32px;
        }
      }
    }
  }
  .minWidth100 {
    min-width: 100px;
  }
  .w100px {
    width: 100px;
  }
  .w150px {
    width: 150px;
  }
  .w200px {
    width: 200px;
  }
  .w50px {
    width: 50px;
    flex-shrink: 0;
  }
  .w20px {
    width: 20px;
  }
`],[`
  .emptyIcon {
    width: 130px;
    height: 130px;
    background: #f5f5f5;
    border-radius: 50%;
    opacity: 1;
    margin: 200px auto 0;
    i {
      margin: 0 auto;
    }
  }
  .cardItemCon {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    margin: 0 -10px;
  }
  .aggregationList {
    margin: 0 -40px;
  }
  .manageListHeader {
    height: 40px;
    border-bottom: 1px solid #dddddd;
    margin: 0 40px;
    .Dropdown {
      .Dropdown--input {
        padding: 0;
        i {
          line-height: 32px;
          display: inline-block;
          vertical-align: middle;
          height: 32px;
        }
      }
    }
  }
  .minWidth100 {
    min-width: 100px;
  }
  .w100px {
    width: 100px;
  }
  .w150px {
    width: 150px;
  }
  .w200px {
    width: 200px;
  }
  .w50px {
    width: 50px;
    flex-shrink: 0;
  }
  .w20px {
    width: 20px;
  }
`]),xi=(0,Y.Z)([`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    margin: 0;
  }
  .searchInput {
    input {
      &::placeholder {
        color: #9e9e9e;
      }
    }
  }
`],[`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    margin: 0;
  }
  .searchInput {
    input {
      &::placeholder {
        color: #9e9e9e;
      }
    }
  }
`]),Ci=(0,Y.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`]),Ei=(0,Y.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`]),Ii=z.ZP.div(vi),us=z.ZP.header(xi),Nt=z.ZP.span(Ci),St=z.ZP.span(Ei),Nn=null,Tt=40;function bi(t){var a=t.projectId,o=t.appId,n=(0,Ee.Z)({id:"",showInfo:!1,list:[],loading:!0,keyWords:"",pageNo:0,noMore:!1,sort:{fieldName:"",sortDirection:null},displayType:"createDate"}),r=(0,F.Z)(n,2),i=r[0],s=i.showInfo,c=i.list,l=i.id,p=i.loading,d=i.pageNo,u=i.keyWords,g=i.noMore,f=i.sort,h=i.displayType,E=r[1];(0,e.useEffect)(function(){if(p){Nn&&Nn.abort();var N={projectId:a,pageNo:d,pageSize:Tt,searchBody:u,sort:f,taskType:1,appId:o};Nn=dn.Z.list(N),Nn.then(function(S){S&&E({list:d>0?c.concat(S.content):S.content,loading:!1,noMore:S.content.length<Tt})})}},[u,d,p,f]);var w=function(){dn.Z.createAggTableSyncTaskPreCheck({projectId:a}).then(function(S){S.currentTaskNum>=S.maxTaskNum?(0,ne.j0)(a,tn.UU.aggregation,{explainText:_l("\u5DF2\u8FBE\u5230\u4F7F\u7528\u4E0A\u9650\uFF0C\u8BF7\u8003\u8651\u8D2D\u4E70\u589E\u8865\u5305\u6216\u5347\u7EA7\u7248\u672C")},function(){(0,Oe.T8)("/admin/exaggregationtable/"+a+"/aggregationtable")}):E({showInfo:!0,id:""})})},m=function(){!g&&!p&&E({pageNo:d+1,loading:!0})},I=(0,e.useCallback)(_.debounce(function(N){E({keyWords:N,loading:!0,pageNo:0})},500),[]),T=function(S){return e.createElement(e.Fragment,null,e.createElement("div",{className:"emptyIcon flexRow alignItemsCenter TxtCenter"},e.createElement(Q.Z,{icon:"aggregate_table",className:"Gray_bd Font50"})),e.createElement("div",{className:"emptyHint TxtCenter Gray_9e Font17 mTop20"},S||_l("\u6682\u65E0\u805A\u5408\u8868")))},x=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow manageListHeader bold alignItemsCenter"},e.createElement("div",{className:"flex mLeft10 mRight20 flexRow alignItemsCenter",style:{minWidth:120}},e.createElement("div",{className:"flex Gray_75"},_l("\u540D\u79F0")),e.createElement("div",{className:"flexColumn"},e.createElement(Nt,{className:V()({active:f.fieldName==="name"&&f.sortDirection==="ASC"}),onClick:function(){return E({loading:!0,pageNo:0,sort:{fieldName:"name",sortDirection:"ASC"}})}}),e.createElement(St,{className:V()({active:f.fieldName==="name"&&f.sortDirection==="DESC"}),onClick:function(){return E({loading:!0,pageNo:0,sort:{fieldName:"name",sortDirection:"DESC"}})}}))),e.createElement("div",{className:"flex mRight20 flexRow alignItemsCenter Gray_75 minWidth100"},_l("\u6570\u636E\u6E90")),e.createElement("div",{className:"w150px mRight20 minWidth100 Gray_75"},_l("\u72B6\u6001")),e.createElement("div",{className:"w200px pRight20 mRight20 flexRow alignItemsCenter"},e.createElement("div",{className:"flex"},e.createElement(_n.Z,{className:"Normal",data:[{text:_l("\u521B\u5EFA\u65F6\u95F4"),value:"createDate"},{text:_l("\u66F4\u65B0\u65F6\u95F4"),value:"lastModifiedDate"}],value:h,renderTitle:function(){return e.createElement("span",{className:"Gray_75 bold TxtTop"},h==="createDate"?_l(" \u521B\u5EFA\u65F6\u95F4"):_l("\u66F4\u65B0\u65F6\u95F4"))},onChange:function(Z){return E({loading:!0,pageNo:0,displayType:Z,sort:{fieldName:Z,sortDirection:"ASC"}})}})),e.createElement("div",{className:"flexColumn"},e.createElement(Nt,{className:V()({active:_.includes(["createDate","lastModifiedDate"],f.fieldName)&&f.sortDirection==="ASC"}),onClick:function(){return E({loading:!0,pageNo:0,displayType:h,sort:{fieldName:h,sortDirection:"ASC"}})}}),e.createElement(St,{className:V()({active:_.includes(["createDate","lastModifiedDate"],f.fieldName)&&f.sortDirection==="DESC"}),onClick:function(){return E({loading:!0,pageNo:0,displayType:h,sort:{fieldName:h,sortDirection:"DESC"}})}}))),e.createElement("div",{className:"w100px mRight20 minWidth100 Gray_75"},_l("\u521B\u5EFA\u4EBA")),e.createElement("div",{className:"w50px mRight20"}),e.createElement("div",{className:"w20px mRight20"})),p&&d<=0?e.createElement(xe.Z,{className:"mTop20"}):e.createElement(Re.Z,{className:"flex",onScrollEnd:m},!c.length&&T(u?_l("\u6CA1\u6709\u76F8\u5173\u805A\u5408\u8868"):null),c.map(function(S,Z){return e.createElement(ol,(0,y.default)({},t,{item:S,onChange:function(v){E({list:v})},onRefresh:function(){E({keyWords:"",pageNo:0,loading:!0,noMore:!1,sort:{fieldName:"",sortDirection:null}})},items:c,key:"item_"+Z,index:Z,num:Z,displayType:h,onEdit:function(){E({showInfo:!0,id:S.aggTableId})}}))})),p&&d>0&&e.createElement(xe.Z,null))},B=(0,ne.XH)(a,tn.UU.aggregation);return e.createElement(Ii,{className:"flexColumn h100"},e.createElement(Le,{title:_l("\u805A\u5408\u8868"),addBtnName:_l("\u65B0\u5EFA\u805A\u5408\u8868"),description:_l("\u5C06\u5DE5\u4F5C\u8868\u6570\u636E\u9884\u5904\u7406\u4E3A\u805A\u5408\u6570\u636E\uFF0C\u5728\u8868\u5355\u3001\u5DE5\u4F5C\u6D41\u548C\u7EDF\u8BA1\u4E2D\u8FDB\u884C\u8C03\u7528"),handleSearch:I,handleAdd:function(){B==="2"?(0,ne.j0)(a,tn.UU.aggregation):w()}}),e.createElement("div",{className:"flex flexColumn aggregationList"},x()),s&&e.createElement(hi.Z,null,e.createElement(gi,{id:l,projectId:a,appId:o,onClose:function(){E({showInfo:!1,pageNo:0,loading:!0,keyWords:"",noMore:!1,sort:{fieldName:"",sortDirection:null}})}})))}var wi=C(69203),Bt=C(52729),ki=C(2443),Ai=C(8605),yi=C(14923),Ni=C(34881),Si=C(1952),Ti=C(53336),Bi=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));return n.handleClose=function(){n.setState({visible:!1}),n.props.onClose&&n.props.onClose()},n.state={visible:!0},n}return(0,Xe.default)(a,[{key:"render",value:function(){var n=this,r=this.state.visible,i=window.innerWidth-32*2>1600?1600:window.innerWidth-32*2;return e.createElement(Ae.Z,{width:i,className:"DialogWidgetConfig",overlayClosable:!1,visible:r,title:null,footer:null,type:"fixed"},e.createElement(Ti.default,(0,y.default)({},this.props,{handleClose:function(){return n.handleClose()}})))}}]),a}(e.Component);function Di(t){(0,Si.Z)(Bi,(0,y.default)({},t))}var Dt=C(54742);function ms(t){var a=_.findKey(WIDGETS_TO_API_TYPE_ENUM,function(o){return o===t});return DEFAULT_CONFIG[a]||{}}function zn(t,a){var o=a.controls||[];return!(!t.dataSource||!t.sourceControlId||!o.find(function(n){return n.controlId===t.sourceControlId})||t.type!==29)}function Zi(t,a){var o=["","1"];if(o[1]=t.enumDefault===1?"1":"N",zn(t,a)){var n=a.controls||[],r=n.find(function(i){return i.controlId===t.sourceControlId});o[0]=r.enumDefault===1?"1":"N"}return[{markup:[{tagName:"text",selector:"txt"}],attrs:{txt:{fill:"#333",fontSize:13,textAnchor:"middle",textVerticalAnchor:"middle",pointerEvents:"none",text:o[0]}},position:{distance:15,offset:-10}},{markup:[{tagName:"text",selector:"txt"}],attrs:{txt:{fill:"#333",fontSize:13,textAnchor:"middle",textVerticalAnchor:"middle",pointerEvents:"none",text:o[1]}},position:{distance:-15,offset:-10}}]}var Yn=24,Sn=180,Zt=[43,10010,22,52,45,49],Li=`
.overflow_ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.flex {
  -webkit-flex: 1;
  flex: 1;
  -ms-flex: 1;
}
.customErNode {
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 4px;
  color: #333;
  height: 100%;
  padding: 6px 0;
  border: 1px solid #dddddd;
  .count {
    padding: 0 16px;
  }
}
.x6-graph-svg {
  background: #f0f0f0;
}
.splitLint {
  height: 1px;
  background: #dddddd;
  border: none;
  margin: 2px 12px 6px 12px;
}
.nodeTitle {
  padding: 0 12px;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 36px;
  .editIconBox {
    width: 36px;
    height: 36px;
    display: none;
    text-align: center;
    line-height: 36px;
    margin-right: -8px;
  }
}
.nodeControlItem {
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  & > span {
    width: 100%;
    display: inline-block;
    line-height: 24px;
  }
  .icon {
    vertical-align: text-bottom;
    margin-right: 4px;
  }
}
.icon {
  width: 16px;
  height: 16px;
  fill: #757575;
  color: #757575;
}
.valignWrapper {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.Font14 {
  font-size: 14px !important;
}
.Font12 {
  font-size: 12px !important;
}
.Bold {
  font-weight: bold !important;
}
.Gray_9e {
  color: #9e9e9e !important;
}
`,Ri={letter_a:e.createElement("path",{d:"M589.80871576 136.47530835H432.9145L136.47530835 887.52469165h172.32828145l54.63884259-144.68966388h296.43919078L711.96689815 887.52469165h172.32828057L589.77116388 136.47530835zM409.0686824 618.72411758l102.25537316-270.71575001 102.25537316 270.71575001H409.0686824z","p-id":"121055"}),number_6:e.createElement("path",{d:"M469.333333 640h85.333334v-85.333333h-85.333334z m341.333334-512H213.333333a85.589333 85.589333 0 0 0-85.333333 85.333333v597.333334a85.589333 85.589333 0 0 0 85.333333 85.333333h597.333334a85.589333 85.589333 0 0 0 85.333333-85.333333V213.333333a85.589333 85.589333 0 0 0-85.333333-85.333333z m-170.666667 256h-170.666667v85.333333h85.333334a85.333333 85.333333 0 0 1 85.333333 85.333334v85.333333a85.333333 85.333333 0 0 1-85.333333 85.333333h-85.333334a85.333333 85.333333 0 0 1-85.333333-85.333333V384a85.333333 85.333333 0 0 1 85.333333-85.333333h170.666667z","p-id":"121197"}),amount_rmb:e.createElement("path",{d:"M512 85.333333A426.666667 426.666667 0 0 0 85.333333 512a426.666667 426.666667 0 0 0 426.666667 426.666667 426.666667 426.666667 0 0 0 426.666667-426.666667A426.666667 426.666667 0 0 0 512 85.333333z m170.666667 341.333334v85.333333h-128v85.333333h128v85.333334h-128v85.333333h-85.333334v-85.333333H341.333333v-85.333334h128v-85.333333H341.333333v-85.333333h75.008L293.504 303.829333l60.330667-60.330666L512 401.706667l158.165333-158.208 60.330667 60.330666L607.658667 426.666667z","p-id":"121339"}),email:e.createElement("path",{d:"M854.016 342.016V256L512 470.016 169.984 256v86.016L512 554.026667z m0-172.032q34.005333 0 59.008 25.984t25.002667 59.989333v512q0 34.005333-25.002667 59.989334t-59.008 25.984H170.026667q-34.005333 0-59.008-25.984t-25.002667-59.989334v-512q0-34.005333 25.002667-59.989333t59.008-25.984h683.989333z","p-id":"121481"}),event:e.createElement("path",{d:"M738.133333 558.933333H512v226.133334h226.133333v-226.133334zM691.2 64v89.6H332.8V64H243.2v89.6H196.266667c-51.2 0-89.6 38.4-89.6 89.6v631.466667c0 51.2 38.4 89.6 89.6 89.6h631.466666c51.2 0 89.6-38.4 89.6-89.6V243.2c0-51.2-38.4-89.6-89.6-89.6h-46.933333V64h-89.6z m136.533333 810.666667H196.266667V379.733333h631.466666v494.933334z","p-id":"121623"}),access_time:e.createElement("path",{d:"M534.016 297.984v224l192 114.005333-32 54.016-224-136.021333v-256h64zM512 854.016q139.989333 0 240.981333-100.992t100.992-240.981333-100.992-240.981334T512 170.069333 271.018667 271.061333t-100.992 240.981334 100.992 240.981333T512 854.016z m0-768q176 0 301.013333 125.013333t125.013334 301.013334-125.013334 301.013333T512 938.069333t-301.013333-125.013333-125.013334-301.013333 125.013334-301.013334T512 86.016z","p-id":"121765"}),call:e.createElement("path",{d:"M854.016 656q18.005333 0 29.994667 11.989333t11.989333 29.994667v148.010667Q896 896 854.016 896q-297.984 0-512-214.016T128 169.984Q128 128 178.005333 128h148.010667q18.005333 0 29.994667 11.989333t11.989333 29.994667q0 77.994667 24.021333 150.016 8.021333 25.984-9.984 43.989333l-82.005333 72.021334q91.989333 192 294.016 290.005333l66.005333-84.010667q11.989333-11.989333 29.994667-11.989333 9.984 0 13.994667 2.005333 72.021333 24.021333 150.016 24.021334z","p-id":"121907"}),map:e.createElement("path",{d:"M640 809.984V304L384 214.016v505.984zM873.984 128Q896 128 896 150.016V794.026667q0 16-16 20.010666L640 896.042667l-256-89.984-228.010667 88.021333-6.016 2.005333q-22.016 0-22.016-22.016V230.058667q0-16 16-20.010667l240-82.005333 256 89.984 228.010667-88.021334z","p-id":"122049"}),arrow_drop_down_circle:e.createElement("path",{d:"M512 598.016l169.984-171.989333H341.973333z m0-512q176 0 301.013333 125.013333t125.013334 301.013334-125.013334 301.013333T512 938.069333t-301.013333-125.013333-125.013334-301.013333 125.013334-301.013334T512 86.016z","p-id":"122333"}),multi_select:e.createElement("path",{d:"M170.666667 853.333333a42.666667 42.666667 0 0 1-42.666667-42.666666v-213.333334a42.666667 42.666667 0 0 1 42.666667-42.666666h213.333333a42.666667 42.666667 0 0 1 42.666667 42.666666v213.333334a42.666667 42.666667 0 0 1-42.666667 42.666666z m42.666666-85.333333h128v-128H213.333333z m341.333334 42.666667v-85.333334h384v85.333334z m0-213.333334v-85.333333h384v85.333333zM85.333333 318.336l60.16-60.16 90.453334 90.453333 180.906666-180.906666 60.117334 60.117333L236.373333 469.333333z m469.333334 65.706667v-85.333334h384v85.333334z","p-id":"122475"}),account_circle:e.createElement("path",{d:"M512 820.010667q68.010667 0 143.018667-40.021334T768 681.984q-2.005333-56.021333-89.984-93.994667T512 549.973333t-166.016 36.992T256 681.984q38.016 57.984 112.981333 98.005333t143.018667 40.021334z m0-605.994667q-52.010667 0-89.984 38.016T384 342.016t38.016 89.984 89.984 38.016 89.984-38.016T640 342.016t-38.016-89.984T512 214.016z m0-128q176 0 301.013333 125.013333t125.013334 301.013334-125.013334 301.013333T512 938.069333t-301.013333-125.013333-125.013334-301.013333 125.013334-301.013334T512 86.016z","p-id":"122617"}),department:e.createElement("path",{d:"M810.666667 682.666667v-213.333334h-256V341.333333h128V128H341.333333v213.333333h128v128H213.333333v213.333334H85.333333v213.333333h341.333334v-213.333333H298.666667v-128h426.666666v128h-128v213.333333h341.333334v-213.333333z","p-id":"122759"}),user:e.createElement("path",{d:"M234.12736 742.74816q0-62.5664 104.81152-106.43456 86.9376-36.56192 173.06624-36.56192 84.50048 0 173.06624 36.56192 104.00256 43.8784 104.00256 106.43456v47.12448H234.1376v-47.12448zM512 512q-138.12736 0-138.12736-138.12736 0-138.93632 138.12736-138.93632t138.12736 138.93632Q650.12736 512 512 512z m-416 323.37408q0 92.62592 92.62592 92.62592h646.74816q92.62592 0 92.62592-92.62592V188.62592q0-92.62592-92.62592-92.62592H188.62592q-92.62592 0-92.62592 92.62592v646.74816z","p-id":"122901"}),attachment:e.createElement("path",{d:"M281.00096 784.9984q-115.00032 0-198.00064-80Q0 624 0 512t83.00032-191.0016q83.00032-82.00192 198.00064-82.00192h537.99936q83.99872 0 144.9984 57.99936Q1024 354.9952 1024 436.99712q0 83.00032-60.00128 140.99968-60.99968 57.99936-144.9984 57.99936H383.0016q-53.00224 0-89.99936-35.00032Q256 563.9936 256 511.99488q0-53.00224 37.00224-87.99744 37.00224-37.00224 89.99936-37.00224H768v74.99776H383.0016q-51.00032 0-51.00032 50.00192t51.00032 50.00192h435.99872q53.00224 0 90.99776-35.99872 38.00064-38.00064 38.00064-89.00096 0-51.99872-38.00064-87.99744t-90.99776-35.99872H281.00096q-83.99872 0-144.9984 58.99776Q76.00128 429.99808 76.00128 512t60.00128 140.00128q60.99968 58.99776 144.9984 58.99776H768v73.99936H281.00096z","p-id":"123043"}),formula:e.createElement(e.Fragment,null,e.createElement("path",{d:"M192 870.4v-383.445333H128V397.909333h64v-20.096a221.312 221.312 0 0 1 57.386667-161.578666A179.413333 179.413333 0 0 1 373.12 170.666667a232.917333 232.917333 0 0 1 75.818667 11.733333l-8.533334 91.818667a142.464 142.464 0 0 0-50.944-8.533334c-58.965333-0.042667-78.677333 49.706667-78.677333 107.562667v24.661333h103.296v89.045334H311.552V870.4z","p-id":"123185"}),e.createElement("path",{d:"M568.234667 397.909333l55.893333 88.96c15.573333 25.173333 29.184 48.768 42.88 73.344h2.176c13.696-26.538667 27.221333-50.645333 41.386667-75.008l52.48-87.296h130.005333l-157.866667 226.56 160.938667 245.930667h-135.594667l-57.216-94.464a1097.514667 1097.514667 0 0 1-42.666666-76.544h-2.346667c-13.653333 27.008-27.477333 51.2-42.410667 76.8l-54.826666 94.336h-131.754667l163.584-240.896-158.08-231.722667z","p-id":"123186"})),checkbox_01:e.createElement("path",{d:"M809.6 790.4H214.4V190.40256h427.19744V104.00256H214.4C166.4 104.00256 128 142.40256 128 190.40256v595.2c0 48 38.4 86.4 86.4 86.4h595.2c48 0 86.4-38.4 86.4-86.4V444.80512h-86.4v345.6zM339.2 411.20256L281.6 468.80256l192 192L896 233.60512l-57.6-57.6-364.8 364.8-134.4-129.60256z","p-id":"123328"}),star:e.createElement("path",{d:"M512 736L247.978667 896l70.016-299.989333-232.021334-201.984 306.005334-25.984L512 86.058667l120.021333 281.984 306.005334 25.984-232.021334 201.984L776.021333 896z","p-id":"123470"}),category:e.createElement("path",{d:"M128 576h342.016v342.016H128V576z m425.984 169.984q0-80 56.021333-136.021333t136.021334-56.021334 136.021333 56.021334 56.021333 136.021333-56.021333 136.021333-136.021333 56.021334-136.021334-56.021334-56.021333-136.021333zM512 86.016l233.984 384H277.973333z","p-id":"123612"}),auto_number:e.createElement("path",{d:"M870.016 405.333333V298.666667h-134.485333l27.818666-213.333334h-106.666666l-27.818667 213.333334h-213.333333l27.818666-213.333334H341.333333l-27.818666 213.333334H128v106.666666h171.605333l-27.818666 213.333334H128V725.333333h134.485333L234.666667 938.666667H341.333333l27.818667-213.333334h213.333333L554.666667 938.666667h106.666666l27.818667-213.333334H874.666667v-106.666666h-171.605334l27.818667-213.333334z m-278.272 213.333334h-213.333333l27.818666-213.333334h213.333334z","p-id":"123754"}),rich_text:e.createElement("path",{d:"M85.333333 843.861333v-94.805333h853.333334v94.805333z m0-189.610666L274.944 170.666667h99.584l184.874667 478.805333h-109.013334l-33.194666-90.069333H227.541333l-33.194666 94.805333z m175.402667-175.445334h132.736L327.125333 303.402667z m336.597333 170.666667V554.666667h336.597334v94.805333z m0-189.610667V365.056h336.597334v94.805333z m0-194.389333V170.666667h336.597334v94.805333z","p-id":"123896"}),id_number:e.createElement("path",{d:"M853.333333 853.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V256a85.333333 85.333333 0 0 1 85.333334-85.333333h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v512a85.333333 85.333333 0 0 1-85.333334 85.333333z m-256-213.333333v42.666667h256v-42.666667h-256z m-261.205333-68.821333c-57.728 0-165.461333 28.416-165.461333 82.730666v27.562667h330.965333v-27.562667c0-54.314667-107.733333-82.730667-165.504-82.730666zM597.333333 512v42.666667h256v-42.666667h-256zM336.128 341.333333a82.816 82.816 0 0 0-82.730667 82.773334 82.816 82.816 0 0 0 82.730667 82.730666A82.816 82.816 0 0 0 418.858667 424.106667 82.858667 82.858667 0 0 0 336.128 341.333333zM597.333333 384v42.666667h256V384h-256z","p-id":"124038"}),location_on:e.createElement("path",{d:"M512 489.984q43.989333 0 75.008-31.018667t31.018667-75.008-31.018667-75.008T512 277.930667t-75.008 31.018666-31.018667 75.008 31.018667 75.008 75.008 31.018667z m0-403.968q123.989333 0 210.986667 86.997333T809.984 384q0 61.994667-31.018667 141.994667t-75.008 150.016-86.997333 130.986666-73.002667 96.981334l-32 34.005333q-11.989333-13.994667-32-36.992t-72.021333-91.989333-91.008-134.016-70.997333-146.986667T213.930667 384q0-123.989333 86.997333-210.986667t210.986667-86.997333z","p-id":"124180"}),gesture:e.createElement("path",{d:"M195.84 293.973333c29.866667-30.293333 59.733333-57.6 72.96-52.053333 21.333333 8.533333 0 43.946667-12.8 64.853333-10.666667 17.92-122.026667 165.973333-122.026667 269.226667a153.045333 153.045333 0 0 0 57.173334 127.146667 128 128 0 0 0 112.64 19.626666c45.653333-13.226667 83.2-59.733333 130.56-118.186666 51.626667-63.573333 120.746667-146.773333 174.08-146.773334 69.546667 0 70.4 43.093333 75.093333 76.373334a260.736 260.736 0 0 0-229.546667 229.12 134.741333 134.741333 0 0 0 136.96 131.84c69.546667 0 183.04-56.746667 200.106667-260.266667H896v-106.666667h-105.386667c-6.4-70.4-46.506667-179.2-171.946666-179.2-96 0-178.346667 81.493333-210.773334 121.173334-24.746667 31.146667-87.893333 105.813333-97.706666 116.053333-10.666667 12.8-29.013333 35.84-47.36 35.84-19.2 0-30.72-35.413333-15.36-81.92a778.581333 778.581333 0 0 1 78.933333-150.186667 226.133333 226.133333 0 0 0 55.466667-139.946666A112.426667 112.426667 0 0 0 274.773333 128a186.069333 186.069333 0 0 0-116.053333 53.333333c-15.36 15.36-28.16 28.16-37.546667 39.68z m396.373333 497.493334a32.042667 32.042667 0 0 1-31.573333-30.72 151.04 151.04 0 0 1 122.453333-117.76c-12.8 114.773333-61.013333 148.48-90.88 148.48z","p-id":"124322"}),a_barcode:e.createElement("path",{d:"M725.333333 213.333333h85.333334v597.333334h-85.333334zM853.333333 213.333333h42.666667v597.333334h-42.666667zM426.666667 213.333333h85.333333v597.333334h-85.333333zM128 213.333333h42.666667v597.333334H128zM554.666667 213.333333h128v597.333334h-128zM213.333333 213.333333h170.666667v597.333334H213.333333z","p-id":"124464"}),amount_capital:e.createElement(e.Fragment,null,e.createElement("path",{d:"M550.058667 684.629333h93.482666c5.461333-52.693333 10.325333-110.933333 13.568-157.568h-81.493333c-8.704 57.770667-16.853333 112.64-25.557333 157.568z","p-id":"124606"}),e.createElement("path",{d:"M810.666667 128H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333zM391.424 765.226667H328.917333v-282.581334c-13.610667 17.408-27.178667 34.133333-41.301333 49.450667a455.466667 455.466667 0 0 0-33.194667-67.882667 585.386667 585.386667 0 0 0 125.013334-205.44l59.733333 18.474667a800.554667 800.554667 0 0 1-47.786667 105.984z m378.197333-20.096H415.829333v-60.501334h67.925334c9.258667-45.610667 17.962667-100.522667 26.666666-157.568h-68.522666v-60.032h77.184c5.461333-36.949333 10.325333-74.965333 14.122666-109.738666h-94.549333V296.832h312.490667v60.330667h-151.594667c-4.266667 35.285333-9.258667 72.789333-14.677333 109.738666h82.048l10.325333-2.176 48.896 3.285334c-3.285333 64.64-10.325333 144.512-17.408 216.789333h60.885333z","p-id":"124607"})),link_record:e.createElement(e.Fragment,null,e.createElement("path",{d:"M170.666667 298.666667h426.666666v256h-128v85.333333h213.333334V298.666667a85.333333 85.333333 0 0 0-85.333334-85.333334H170.666667a85.333333 85.333333 0 0 0-85.333334 85.333334v341.333333h213.333334v-85.333333H170.666667z","p-id":"124749"}),e.createElement("path",{d:"M725.333333 384v85.333333h128v256H426.666667v-256h128V384H341.333333v341.333333a85.333333 85.333333 0 0 0 85.333334 85.333334h426.666666a85.333333 85.333333 0 0 0 85.333334-85.333334V384z","p-id":"124750"})),Worksheet_query:e.createElement(e.Fragment,null,e.createElement("path",{d:"M868.565333 811.349333a162.602667 162.602667 0 0 0 24.021334-85.034666 168.362667 168.362667 0 1 0-168.405334 168.362666 166.4 166.4 0 0 0 84.992-23.978666l108.16 108.16 59.306667-59.349334z m-144.384-0.853333a84.181333 84.181333 0 1 1 84.224-84.181333 84.437333 84.437333 0 0 1-84.224 84.181333z","p-id":"124892"}),e.createElement("path",{d:"M212.650667 212.693333h554.24v301.098667h84.650666V208.426667A80.384 80.384 0 0 0 771.157333 128H208.384A80.384 80.384 0 0 0 128 208.426667v562.730666a80.384 80.384 0 0 0 80.384 80.426667h305.408v-84.693333H212.650667z","p-id":"124893"}),e.createElement("path",{d:"M298.666667 337.792h384.896V425.813333H298.666667z","p-id":"124894"}),e.createElement("path",{d:"M298.666667 551.125333h213.333333v88.021334H298.666667z","p-id":"124895"})),table:e.createElement("path",{d:"M864.66666667 198.51851883H159.33333333c-43.1037034 0-78.37037007 35.26666667-78.37037006 78.37037006v470.22222222c0 43.1037034 35.26666667 78.37037007 78.37037006 78.37037006h705.33333334c43.1037034 0 78.37037007-35.26666667 78.37037006-78.37037006V276.88888889c0-43.1037034-35.26666667-78.37037007-78.37037006-78.37037006zM335.66666667 747.11111111h-156.74074106v-156.74074104h156.74074106v156.74074104z m0-235.11111111h-156.74074106V355.25925895h156.74074106v156.74074105z m254.7037034 235.11111111h-156.74074014v-156.74074104h156.74074014v156.74074104z m0-235.11111111h-156.74074014V355.25925895h156.74074014v156.74074105z m254.70370432 176.33333333V747.11111111h-156.74074106v-156.74074104h156.74074105v97.96296326z m-1e-8-235.1111111V512h-156.74074105V355.25925895h156.74074105v97.96296328z","p-id":"125037"}),lookup:e.createElement("path",{d:"M811.52 743.68A168.746667 168.746667 0 0 1 725.333333 768a170.666667 170.666667 0 0 1-170.666666-170.666667 170.666667 170.666667 0 0 1 170.666666-170.666666 170.666667 170.666667 0 0 1 170.666667 170.666666 164.778667 164.778667 0 0 1-24.32 86.186667l109.610667 109.653333L921.173333 853.333333zM640 597.333333a85.589333 85.589333 0 0 0 85.333333 85.333334 85.589333 85.589333 0 0 0 85.333334-85.333334 85.589333 85.589333 0 0 0-85.333334-85.333333 85.589333 85.589333 0 0 0-85.333333 85.333333zM85.333333 725.333333v-85.333333h341.333334v85.333333z m0-213.333333v-85.333333h341.333334v85.333333z m0-213.333333V213.333333h768v85.333334z","p-id":"125179"}),sigma:e.createElement("path",{d:"M768 170.666667H256v85.333333l277.333333 256L256 768v85.333333h512v-128h-298.666667l213.333334-213.333333-213.333334-213.333333h298.666667z","p-id":"125321"}),device_hub:e.createElement("path",{d:"M725.333333 682.666667l-170.666666-170.666667V376.32a128 128 0 1 0-85.333334 0V512l-170.666666 170.666667H128v213.333333h213.333333v-130.133333l170.666667-179.2 170.666667 179.2V896h213.333333v-213.333333z","p-id":"125463"}),cascade_selection:e.createElement("path",{d:"M896 128H128a42.666667 42.666667 0 0 0-42.666667 42.666667v213.333333a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666667v256a85.333333 85.333333 0 0 0 85.333333 85.333333h170.666667v42.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h341.333333a85.333333 85.333333 0 0 0 85.333334-85.333333v-170.666667a85.333333 85.333333 0 0 0-85.333334-85.333333h-341.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v42.666667H256v-256h640a42.666667 42.666667 0 0 0 42.666667-42.666667V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667z m-384 512h341.333333v170.666667h-341.333333z","p-id":"125605"})},Fi=[_l("\u7126\u70B9"),_l("\u7F16\u8F91\u8868\u5355")];function Wi(t){var a=this,o=t.node,n=U().get(o,"store.data.data"),r=n.item,i=n.controls,s=n.height,c=n.list,l=n.updateSource,p=n.appId,d=n.count,u=n.filter,g=n.allControls,f=n.onFilter,h=function(){var m=(0,In.Z)(nn().mark(function I(){var T,x,B,N,S;return nn().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Se.Z.getWorksheetInfo({getTemplate:!0,worksheetId:r.worksheetId});case 2:T=k.sent,x=U().get(T,"template.controls").filter(function(v){return v.controlId.length===24}),B=(0,Dt.kg)(x).filter(function(v,b){return!Zt.includes(v.type)}).map(function(v){return U().pick(v,["controlId","controlName","dataSource","enumDefault","sourceControlId","type"])}),N=U().get(o,"store.data.data"),S=U().findIndex(c,function(v){return v.worksheetId===r.worksheetId}),N.list[S].controls=B,o.updateData({controls:B.slice(0,10),list:N.list}),o.size({width:Sn,height:(B.slice(0,10).length+1)*Yn+59}),(g.length!==x.length||U().some(x,function(v){return!g.find(function(b){return b.controlId===v.controlId})}))&&l({worksheetId:r.worksheetId,list:c,newControls:B,allControls:x});case 11:case"end":return k.stop()}},I,a)}));return function(){return m.apply(this,arguments)}}(),E=function(){Di({worksheetId:r.worksheetId,onClose:h})},w=function(I){return(0,Ce.default)({},window.isSafari?"title":"data-tip",Fi[I])};return e.createElement("div",{className:V()("customErNode",{searchCurrent:u===r.worksheetId}),id:"customErNode-"+r.worksheetId},e.createElement("div",{className:"nodeTitle valignWrapper"},e.createElement("span",{className:"Font14 Bold overflow_ellipsis"},(0,ne.T3)(p,r.worksheetId).name||r.worksheetName),(!!r.start||!!r.end)&&e.createElement("span",{className:"editIconBox Gray_9e Hover_21 Hand",onClick:function(){return f({worksheetId:r.worksheetId,list:c})}},e.createElement("span",w(0),e.createElement(Q.Z,{icon:"gps_fixed",className:"Font14 editIcon Hover_21"}))),e.createElement("span",{className:"editIconBox Gray_9e Hover_21 Hand",onClick:E},e.createElement("span",w(1),e.createElement(Q.Z,{icon:"edit",className:"Font14 editIcon Hover_21"})))),e.createElement("div",{className:"splitLint"}),i.map(function(m){var I=(0,ne.T3)(p,m.controlId).name||m.controlName;return e.createElement("div",{className:"nodeControlItem valignWrapper",key:"customErNode-control-"+r.worksheetId+`-
            `+m.controlId,style:{height:s||32,lineHeight:(s||32)+"px"}},e.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},Ri[Hn.g5[U().findKey(Hn.DN,function(T){return T===m.type})].icon.replace("-","_")]),e.createElement("span",{className:"overflow_ellipsis flex Font12"},I))}),e.createElement("div",{className:"count Font12 Gray_9e",style:{height:s||32,lineHeight:(s||32)+"px"}},_l("\u5171%0\u4E2A\u5B57\u6BB5",d)))}var Qi=C(15405),ji=(0,Y.Z)([`
  position: relative;
  .searchWorksheet {
    width: 180px;
    height: 36px;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 22px;
    border: none;
  }
  .optionList {
    position: absolute;
    top: 40px;
    left: 0;
    width: 180px;
    padding: 6px 0;
    font-size: 13px;
    background: #fff;
    max-height: 189px;
    overflow-y: scroll;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    li {
      height: 36px;
      line-height: 36px;
      padding: 0 17px;
      &:hover,
      &.current {
        background: #2196f3;
        color: #fff !important;
      }
    }
  }
  .emptyWrap {
    height: 36px;
    text-align: center;
    line-height: 36px;
  }
`],[`
  position: relative;
  .searchWorksheet {
    width: 180px;
    height: 36px;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 22px;
    border: none;
  }
  .optionList {
    position: absolute;
    top: 40px;
    left: 0;
    width: 180px;
    padding: 6px 0;
    font-size: 13px;
    background: #fff;
    max-height: 189px;
    overflow-y: scroll;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    li {
      height: 36px;
      line-height: 36px;
      padding: 0 17px;
      &:hover,
      &.current {
        background: #2196f3;
        color: #fff !important;
      }
    }
  }
  .emptyWrap {
    height: 36px;
    text-align: center;
    line-height: 36px;
  }
`]),Hi=z.ZP.div(ji);function Pi(t){var a=t.list,o=t.appId,n=t.openList,r=t.className,i=r===void 0?"":r,s=t.onClick,c=t.setOpenList,l=(0,e.useState)([]),p=(0,F.Z)(l,2),d=p[0],u=p[1],g=(0,e.useState)(""),f=(0,F.Z)(g,2),h=f[0],E=f[1];(0,e.useEffect)(function(){u(a.map(function(m){return{value:m.worksheetId,label:(0,ne.T3)(o,m.worksheetId).name||m.worksheetName}}))},[a]);var w=function(I){s(I),c(!1)};return e.createElement(Hi,{className:i},e.createElement(he.default,{className:"searchWorksheet Font14",size:"large",prefix:e.createElement(Q.Z,{icon:"search",className:"Gray_9e Font18"}),value:h,placeholder:_l("\u641C\u7D22\u5DE5\u4F5C\u8868"),onChange:function(I){return E(I.target.value.trim())},onFocus:function(I){return!n&&c(!0)}}),e.createElement("ul",{className:V()("optionList",{hide:!n})},d.filter(function(m){return m.label.toLowerCase().includes(h.toLowerCase())}).map(function(m){return e.createElement("li",{className:"overflow_ellipsis Gray Hand",key:"erSearchItem-"+m.value,onClick:function(){return w(m.value)}},m.label)}),d.filter(function(m){return m.label.toLowerCase().includes(h.toLowerCase())}).length===0&&e.createElement("div",{className:"emptyWrap Font13 Gray_bd"},_l("\u65E0\u5339\u914D\u7ED3\u679C"))))}const Gi=(0,Qi.Z)(Pi);var Mi=C(13711);(0,Ai.z2)({shape:"custom-er-node",width:Sn,effect:["data"],component:Wi,ports:{groups:{port1:{markup:[{tagName:"rect",selector:"portBody"}],attrs:{strict:!0,portBody:{width:Sn,height:2,strokeWidth:1,stroke:"rgba(0,0,0,0)",fill:"rgba(0,0,0,0)",magnet:!1}}}}}});function Ui(t){var a=this,o=t.appId,n=(0,e.useState)([]),r=(0,F.Z)(n,2),i=r[0],s=r[1],c=(0,e.useState)(!0),l=(0,F.Z)(c,2),p=l[0],d=l[1],u=(0,e.useState)(!1),g=(0,F.Z)(u,2),f=g[0],h=g[1],E=(0,e.useState)(!1),w=(0,F.Z)(E,2),m=w[0],I=w[1],T=(0,e.useState)(1),x=(0,F.Z)(T,2),B=x[0],N=x[1],S=(0,e.useState)(void 0),Z=(0,F.Z)(S,2),k=Z[0],v=Z[1],b=(0,e.useState)(void 0),W=(0,F.Z)(b,2),M=W[0],H=W[1],j=(0,e.useRef)(null),P=(0,e.useRef)(null),A=(0,e.useRef)(null);(0,e.useEffect)(function(){return j.current=new Bt.kJ({container:document.getElementById("relationshipWrap"),connecting:{highlight:!0,router:{name:"er",args:{offset:25,direction:"H"}},createEdge:function(){return new Bt.bn.kS({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}})}},async:!0,frozen:!0,autoResize:!0,panning:!1,translating:{restrict:!0},mousewheel:{enabled:!0,factor:1.1,modifiers:["ctrl","meta"]},scaling:{min:.01,max:5},interacting:function(){return{nodeMovable:!0,magnetConnectable:!1,edgeMovable:!1,edgeLabelMovable:!1,arrowheadMovable:!1,vertexMovable:!1,vertexAddable:!1,vertexDeletable:!1}}}),j.current.use(new yi.D),j.current.use(new Ni.T({enabled:!0,pannable:!0,padding:80})),document.addEventListener("keydown",G),L(),j.current.on("edge:click",function(ie){var J=ie.edge;P.current&&D(),!U().endsWith(J.id,"-null")&&(P.current=J.id,J.updateAttrs({line:{stroke:"#5f95ff",strokeWidth:2}}),$(".searchCurrent")&&$(".searchCurrent").removeClass("searchCurrent"))}),j.current.on("blank:click",function(){$(".searchCurrent")&&$(".searchCurrent").removeClass("searchCurrent"),D()}),j.current.on("scale",function(ie){var J=ie.sx;N(J.toFixed(2))}),function(){document.removeEventListener("keydown",G)}},[]);var D=function(){if(P.current){var J=j.current.getCellById(P.current);J&&J.updateAttrs({line:{stroke:"#bdbdbd",strokeWidth:1}})}},R=function(J){var K=J.worksheetId,ue=J.list,me=J.allControls,pe=U().findIndex(ue,function(ge){return ge.worksheetId===K});ue[pe].controls=me,A.current=A.current.map(function(ge){return(0,y.default)({},ge,{controls:ge.worksheetId===K?me:ge.controls})}),s(A.current),q(A.current)},G=function(J){var K=J.keyCode||J.which||J.charCode,ue=J.ctrlKey||J.metaKey;return ue&&K==96&&(J.preventDefault(),ae()),!1},L=function(){!j.current||!o||(d(!0),ce.Z.getAppStructureForER({appId:o}).then(function(J){d(!1),s(J),A.current=J,J.length&&(q(J),ae())}))},O=function(J){var K=J.worksheetId,ue=J.list,me=A.current.find(function(ge){return ge.worksheetId===K}),pe=A.current.filter(function(ge){return ge.worksheetId===K||me.controls.find(function(Ie){return Ie.dataSource===ge.worksheetId})||ge.controls.find(function(Ie){return Ie.dataSource===K})});H(me),q(pe,{light:K}),de(K)},X=function(){q(A.current),de(M.worksheetId),H(void 0)},q=function(J){var K=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ue=K.light,me=ue===void 0?void 0:ue,pe=K.type,ge=pe===void 0?"grid":pe,Ie=J.map(function(oe){return(0,y.default)({},oe,{start:0,end:0,index:0})}),Cn=[],rn=[];Ie.forEach(function(oe,we){oe.controls.filter(function(Ye){return[29,34].includes(Ye.type)&&Ye.dataSource!==oe.worksheetId}).forEach(function(Ye,Qt){var on=U().findIndex(Ie,function(ye){return ye.worksheetId===Ye.dataSource});on<0||zn(Ye,Ie[on])&&we>on||(Ie[we].start++,Ie[on]&&Ie[on].end++)})});var Me=Ie.sort(function(oe,we){return!!(we.start+we.end)-!!(oe.start+oe.end)});Me.forEach(function(oe,we){var Ye=oe.controls.filter(function(ye){return!Zt.includes(ye.type)}),Qt=U().fill(Array(oe.start+oe.end),0).map(function(ye,jt){return{id:oe.worksheetId+"-"+jt,group:"port1"}}),on=(Ye.slice(0,10).length+1)*Yn+59;Cn.push({id:oe.worksheetId,shape:"custom-er-node",width:Sn,height:on,data:{controls:Ye.slice(0,10),height:Yn,item:oe,list:J,appId:o,filter:me,count:oe.controls.length,allControls:oe.controls,updateSource:R,onFilter:O},ports:{groups:{port1:{position:{name:"line",args:{start:{x:0,y:0},end:{x:0,y:on}}}}},items:Qt}}),Ye.filter(function(ye){return[29,34].includes(ye.type)&&ye.dataSource!==oe.worksheetId}).forEach(function(ye,jt){var un=U().findIndex(Me,function(Ki){return Ki.worksheetId===ye.dataSource}),Ht=un<0?!1:zn(ye,Me[un]);un<0||Ht&&we>un||(rn.push({id:ye.controlId+"-"+ye.dataSource,shape:"edge",labels:Zi(ye,Me[un]),source:{cell:oe.worksheetId,port:oe.worksheetId+"-"+Me[we].index},target:{cell:ye.dataSource,port:ye.dataSource+"-"+Me[un].index},attrs:{line:{stroke:"#bdbdbd",strokeWidth:1,sourceMarker:Ht?"block":null,targetMarker:"block"}},zIndex:0,router:{name:"er",args:{offset:"center",direction:"H",min:25}},connector:{name:"rounded",args:{}}}),Me[we].index++,Me[un].index++)})});var We=Me.filter(function(oe){return!oe.start&&!oe.end});We.forEach(function(oe,we){(we+1)%10===0||!We[we+1]||rn.push({id:oe.worksheetId+"-"+We[we+1].worksheetId+"-null",shape:"edge",source:{cell:oe.worksheetId},target:{cell:We[we+1].worksheetId},attrs:{line:{stroke:"rgba(0,0,0,0)",strokeWidth:1,sourceMarker:null,targetMarker:null}},zIndex:0,router:{name:"er",args:{offset:"center",direction:"H",min:25}},connector:{name:"rounded",args:{}}})});var Jn=new ki.Vq({type:"dagre",rankdir:"LR",align:"UL",ranksep:65}),Wt=Jn.layout({nodes:Cn,edges:rn}),En={},Ji=Wt.nodes.map(function(oe){var we=En[oe.x]!==void 0?En[oe.x]+20:0;return En[oe.x]=En[oe.x]!==void 0?En[oe.x]+oe.height+20:oe.height,(0,y.default)({},oe,{y:we})});j.current.fromJSON({nodes:Ji,edges:Wt.edges})},ee=function(){var ie=(0,In.Z)(nn().mark(function J(K,ue){var me,pe,ge,Ie,Cn,rn;return nn().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:return me=ue.name,We.next=3,ce.Z.addWorkSheet({appId:o,appSectionId:t.data.sections[0].appSectionId,name:me,icon:"table",type:0});case 3:return pe=We.sent,We.next=6,Se.Z.getWorksheetInfo({getRules:!0,getTemplate:!0,worksheetId:pe.workSheetId});case 6:ge=We.sent,Ie=(0,Dt.kg)(U().get(ge,"template.controls")).filter(function(Jn){return Jn.controlId.length===24}),Cn={worksheetName:ge.name,worksheetId:pe.workSheetId,controls:Ie},rn=A.current.concat(Cn),s(rn),A.current=rn,q(rn),h(!1),de(pe.workSheetId);case 15:case"end":return We.stop()}},J,a)}));return function(K,ue){return ie.apply(this,arguments)}}(),se=function(J){var K=j.current.zoom();j.current.zoomTo(J?K+.1:K-.1,{minScale:.1,scaleGrid:.05,maxScale:5})},ae=function(){var J=$("#relationshipWrap").width(),K=$("#relationshipWrap").height();j.current.zoomToFit({rect:{x:0,y:0,width:J,height:K},padding:{left:10,right:10,top:10,bottom:160}})},re=function(){j.current.zoomTo(1),j.current.centerContent()},le=function(){var J=t.data.name,K=J+"-"+_l("\u5173\u7CFB\u56FE")+"-"+Be()().format("YYYY-MM-DD-HH_mm_ss")+".png";j.current.exportPNG(K,{padding:40,backgroundColor:"#f0f0f0",stylesheet:Li})},de=function(J){var K=j.current.getCellById(J);K&&j.current.centerCell(K)},ve=function(J){k&&$(".searchCurrent").removeClass("searchCurrent"),v(J),$("#customErNode-"+J).addClass("searchCurrent"),j.current.zoomTo(1),de(J)},be=function(){return e.createElement("div",{className:"emptyWrap"},e.createElement("span",{className:"mBottom20 iconBox ThemeBG"},e.createElement(Q.Z,{icon:"circle_three",className:"Gray_bd"})),e.createElement("div",{className:"mBottom24 Gray_9e Font17"},_l("\u6682\u672A\u6DFB\u52A0\u5DE5\u4F5C\u8868")),e.createElement(Ze.ZP,{onClick:function(){return h(!0)}},_l("\u65B0\u5EFA\u5DE5\u4F5C\u8868")))};return e.createElement("div",{className:"w100 h100 relative"},p&&e.createElement("div",{className:"LoadBox"},e.createElement(xe.Z,null)),e.createElement("div",{id:"relationshipWrap",className:"relationshipWrap"},!p&&!i.length&&be()),!M&&e.createElement(Le,{warpClassName:"topButtons",addBtnName:_l("\u5DE5\u4F5C\u8868"),extraElement:e.createElement(Gi,{warpClassName:"topButtons",openList:m,appId:o,list:i,onClick:ve,onClickAway:function(){return I(!1)},setOpenList:I}),handleAdd:function(){return h(!0)}}),e.createElement("div",{className:"quickActions-relationship"},e.createElement("span",{className:"Font13 Gray percent"},Math.round(B*100)+"%"),e.createElement(Q.Z,{icon:"minus",className:"Gray_75 Font19 Hand Hover_21 mRight20",onClick:function(){return se(!1)}}),e.createElement(Q.Z,{icon:"add1",className:"Gray_75 Font19 Hand mRight20 Hover_21 ",onClick:function(){return se(!0)}}),e.createElement(Pe.Z,{text:_l("\u9002\u5408\u753B\u5E03(cmd+0)")},e.createElement(Q.Z,{icon:"full_screen",className:"Gray_75 Font20 Hand mRight20 Hover_21",onClick:ae})),e.createElement(Pe.Z,{text:_l("\u7B49\u6BD4\u663E\u793A")},e.createElement(Q.Z,{icon:"enlarge",className:"Gray_75 restore Hand Font20 Hover_21",onClick:re})),e.createElement("span",{className:"splintLint"}),e.createElement(Pe.Z,{text:_l("\u5BFC\u51FA\u4E3A\u56FE\u7247")},e.createElement(Q.Z,{icon:"download",className:"Gray_75 Font16 Hand Hover_21",onClick:le}))),f&&e.createElement(Mi.Z,{type:"worksheet",onCreate:ee,onCancel:function(){return h(!1)}}),!!M&&e.createElement(wi.Z,{isBlack:!0,visible:!!M,title:e.createElement("div",{className:"valignWrapper"},_l("\u5F53\u524D\u7126\u70B9\uFF1A%0",(0,ne.T3)(o,M.worksheetId).name||M.worksheetName),e.createElement(Pe.Z,{themeColor:"white",text:_l("\u4EC5\u663E\u793A%0\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u9000\u51FA\u540E\u53EF\u663E\u793A\u6240\u6709\u5DE5\u4F5C\u8868",(0,ne.T3)(o,M.worksheetId).name||M.worksheetName)},e.createElement(Q.Z,{icon:"workflow_error",className:"White Font16 mLeft6"}))),cancelText:null,defaultTop:-72,visibleTop:20,updateText:_l("\u9000\u51FA"),onUpdate:X}))}const Lt={options:ia,publish:Ca,recyclebin:st,lock:ja,backup:Tr,export:Zr,variables:Qr,upgrade:oo,language:Ko,aggregation:bi,relationship:Ui};var Oi,Rt,Ft;function Vi(t){var a=t.projectId,o=t.featureId;return e.createElement(e.Fragment,null,(0,ne.j0)(a,o,{dialogType:"content"}))}var zi=(Rt=Oi=function(t){(0,qe.default)(a,t);function a(o){(0,Ke.default)(this,a);var n=(0,_e.default)(this,(a.__proto__||Je()(a)).call(this,o));Ft.call(n);var r=localStorage.getItem("appManageMenu");return n.state={currentConfigType:_.get(o,"match.params.navTab")||r||"options",loading:!0,data:{},delAppConfirmVisible:!1,collapseAppManageNav:localStorage.getItem("collapseAppManageNav")==="true"},n}return(0,Xe.default)(a,[{key:"componentDidMount",value:function(){this.getData(),this.props.location.search==="?backup"&&this.setState({currentConfigType:"backup"})}},{key:"componentWillReceiveProps",value:function(n){n.location.search==="?backup"&&this.setState({manageBackupFilesVisible:!0}),_.get(this.props,"match.params.navTab")!==_.get(n,"match.params.navTab")&&this.setState({currentConfigType:_.get(n,"match.params.navTab")})}},{key:"render",value:function(){var n=this,r=this.state,i=r.currentConfigType,s=r.data,c=r.loading,l=r.delAppConfirmVisible,p=r.configList,d=p===void 0?[]:p,u=r.collapseAppManageNav,g=s.id,f=s.name,h=s.permissionType,E=s.projectId,w=s.fixed,m=(_.find(d,function(B){return B.type===i})||{}).featureId,I=m&&(0,ne.XH)(E,m),T=I&&I==="2"&&!["variables","aggregation"].includes(i)?Vi:Lt[i]||Lt.options,x=(0,y.default)({},this.props,{data:s,projectId:E,appId:g,name:f,fixed:w,permissionType:h,appName:f,featureId:I&&I==="2"?m:void 0,onChangeData:function(N){return n.setState({data:(0,y.default)({},s,N)})}});return e.createElement("div",{className:"manageAppWrap flexRow"},e.createElement("div",{className:V()("manageAppLeft",{collapseManageAppLeft:u})},e.createElement("div",{className:"flex"},d.map(function(B){var N=B.type,S=B.icon,Z=B.text;return e.createElement(e.Fragment,null,_.includes(["publish","recyclebin"],N)&&e.createElement("div",{className:"line"}),e.createElement("div",{key:N,className:V()("configItem "+N,{active:N===i,collapseItem:u}),onClick:function(){if(N==="del"){n.setState({delAppConfirmVisible:!0});return}safeLocalStorageSetItem("appManageMenu",N),(0,Oe.T8)("/app/"+g+"/settings/"+N),n.setState({currentConfigType:N})}},u?e.createElement(Pe.Z,{popupPlacement:"right",popupAlign:{offset:[5,0]},text:e.createElement("span",null,Z)},e.createElement(Q.Z,{className:"appConfigItemIcon Font18",icon:S})):e.createElement(Q.Z,{className:"appConfigItemIcon Font18 mRight10",icon:S}),!u&&e.createElement(e.Fragment,null,e.createElement("span",{className:"flex"},Z,["aggregation","relationship"].includes(N)&&e.createElement(hn.Z,{className:"mRight15"})),B.featureId&&(0,ne.XH)(E,B.featureId)==="2"&&_.includes(["backup","recyclebin","variables","language","upgrade","aggregation"],N)&&e.createElement(Xn.Z,null))))})),e.createElement("div",{className:V()("collapseWrap TxtRight",{collapseHideWrap:u})},e.createElement(Pe.Z,{text:e.createElement("span",null,u?_l("\u5C55\u5F00"):_l("\u6536\u8D77"))},e.createElement(Q.Z,{icon:u?"menu_right":"menu_left",className:"Font20 Gray_9e pointer collapseWrapIcon",onClick:function(){safeLocalStorageSetItem("collapseAppManageNav",!u),n.setState({collapseAppManageNav:!u})}})))),e.createElement("div",{className:V()("manageAppRight flex flexColumn",i)},c?e.createElement(xe.Z,null):e.createElement(T,x)),l&&e.createElement(Gt.Z,{name:f,onOk:this.handleDelApp,onCancel:function(){return n.setState({delAppConfirmVisible:!1})}}))}}]),a}(e.Component),Ft=function(){var a=this;this.getData=function(){var o=_.get(a.props,"match.params"),n=o.appId;fn.Z.getApp({appId:md.global.Account.isPortal?md.global.Account.appId:n,getSection:!0,getManager:!window.isPublicApp,getLang:!0}).then(function(r){(0,ne.tl)(r.iconUrl,r.iconColor);var i=r.permissionType,s=r.id,c=r.isLock,l=r.isPassword,p=r.projectId,d=gt($e.it,i).filter(function(u){return!u.featureId||(0,ne.XH)(p,u.featureId)});if(!i||c&&l||_.isEmpty(d)){(0,Oe.T8)("/app/"+s);return}r.name=(0,ne.T3)(s,s).name||r.name,a.setState({data:r,loading:!1},a.getConfigList)}).catch(function(r){a.setState({loading:!1})})},this.handleDelApp=function(){var o=_.get(a.props,"match.params"),n=o.appId,r=a.state.data;r=r===void 0?{projectId:""}:r;var i=r.projectId;a.setState({delAppConfirmVisible:!1}),fn.Z.deleteApp({appId:n,projectId:i,isHomePage:!0}).then(function(s){(0,Oe.T8)("/dashboard")})},this.getConfigList=function(){var o=a.state.data,n=o.permissionType,r=o.isLock,i=o.isPassword,s=o.projectId,c=o.sourceType,l=o.id,p=c===1,d=n===Ne.lt.POSSESS_ROLE,u=_.includes([Ne.lt.ADMIN_ROLE,Ne.lt.DEVELOPERS_ROLE,Ne.lt.RUNNER_DEVELOPERS_ROLE,Ne.lt.POSSESS_ROLE],n),g=gt($e.it,n).filter(function(E){return!E.featureId||(0,ne.XH)(s,E.featureId)}).filter(function(E){if(E.type==="lock"){if(u&&o.isPassword)return!0;if(!(d&&p&&!r&&!i))return!1}return!0}),f=localStorage.getItem("appManageMenu"),h=_.includes(g.map(function(E){return E.type}),f);a.setState({configList:g,currentConfigType:f&&h?f:"options"}),f&&!h&&(safeLocalStorageSetItem("appManageMenu","options"),location.href="/app/"+l+"/settings/options")}},Rt);const Yi=zi},46794:mn=>{mn.exports="data:image/png;base64,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"},43799:mn=>{mn.exports="data:image/png;base64,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"},3378:mn=>{mn.exports="data:image/png;base64,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"}}]);
