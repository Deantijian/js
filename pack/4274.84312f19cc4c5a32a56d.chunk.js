"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4274],{64274:(nn,q,l)=>{l.r(q),l.d(q,{default:()=>Oe});var x=l(33867),ie=l(51197),de=l(85105),G=l.n(de),R=l(99663),$=l(22600),W=l(49135),M=l(93196),T=l(86735),e=l(67294),me=l(25273),ue=l(6100),pe=l(46417),ee=l(20845),fe=l(63239),he=l.n(fe),ne=l(36070),ge=l(93967),k=l.n(ge),H=l(49365),ve=l(96486),I=l.n(ve),Ce=function(u){(0,M.default)(p,u);function p(){var h,n,t,a;(0,R.default)(this,p);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return a=(n=(t=(0,W.default)(this,(h=p.__proto__||G()(p)).call.apply(h,[this].concat(r))),t),t.state={selected:[],data:null,preserveColor:!1,cacheKey:+new Date},t.cacheData=[],t.download=function(){var s=t.props.projectId,o=t.state.selected;fetch(__api_server__.main+"Download/CustomIcon",{method:"POST",body:he()({projectId:s,fileNames:o}),headers:new Headers({"Content-Type":"application/json"})}).then(function(d){return d.blob()}).then(function(d){var m=window.URL.createObjectURL(d),f=document.createElement("a");f.download="MDFont_"+new Date().getTime(),f.href=m,f.click()})},t.delete=function(){var s=t.props.projectId,o=t.state.selected;H.Z.deleteCustomIcon({projectId:s,fileNames:o}).then(function(){t.setState({selected:[]}),t.getList()})},n),(0,W.default)(t,a)}return(0,$.default)(p,[{key:"componentWillMount",value:function(){this.getList()}},{key:"getList",value:function(){var n=this,t=this.props.projectId;H.Z.getCustomIconByProject({projectId:t}).then(function(a){n.setState({data:a})})}},{key:"onSelected",value:function(n){var t=[].concat(this.state.selected);I().includes(t,n)?I().remove(t,function(a){return a===n}):t.push(n),this.setState({selected:t})}},{key:"render",value:function(){var n=this,t=this.props,a=t.onClose,i=t.projectId,r=this.state,c=r.selected,s=r.data,o=r.preserveColor,d=r.cacheKey;return e.createElement("div",{className:"orgManagementWrap flex flexColumn"},e.createElement(ne.Z,{prefix:_l("\u81EA\u5B9A\u4E49\u56FE\u6807")}),e.createElement("div",{className:"orgManagementHeader flexRow"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(x.Z,{icon:"backspace",className:"Font22 ThemeHoverColor3 pointer",onClick:a}),e.createElement("div",{className:"Font17 bold flex mLeft10"},_l("\u81EA\u5B9A\u4E49\u56FE\u6807"))),e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(ee.Z,{className:"InlineBlock mRight15",text:_l("\u4E0A\u4F20\u56FE\u6807\u4FDD\u7559\u989C\u8272"),checked:o,onClick:function(){return n.setState({preserveColor:!o,cacheKey:+new Date})}}),e.createElement(pe.Z,{key:d,options:{filters:{mime_types:[{extensions:"svg"}]},ext_blacklist:[],bucket:2,type:5},getTokenParam:{extend:o?"preserve":""},onUploaded:function(f,v){n.cacheData.push(v)},onUploadComplete:function(f){if(f){var v=n.cacheData.map(function(b){return{fileName:b.fileName.replace(/\.[^\.]*$/,""),originalFileName:b.originalFileName,serverName:b.serverName,key:b.key}});H.Z.addCustomIcon({projectId:i,data:v}).then(function(){n.cacheData=[],n.getList()})}},onError:function(f,v,b){alert(b,2)}},e.createElement("div",{className:"ThemeBGColor3 ThemeHoverBGColor2 pointer White appManagementUploadBtn",id:"customIconBtn"},e.createElement(x.Z,{icon:"add",className:"Font18 mRight2"}),_l("\u4E0A\u4F20\u56FE\u6807"))))),e.createElement("div",{className:"mTop16 mLeft24 mRight24"},c.length?e.createElement(e.Fragment,null,e.createElement("span",null,_l("\u5DF2\u9009\u4E2D%0\u4E2A",c.length)),e.createElement("span",{className:"ThemeHoverColor3 pointer mLeft15 Gray_75",onClick:this.download},e.createElement(x.Z,{icon:"download",className:"Font16 mRight5"}),"SVG"),e.createElement("span",{className:"pointer mLeft20 Gray_75 hoverRed",onClick:this.delete},e.createElement(x.Z,{icon:"delete2",className:"Font16 mRight5"}),_l("\u5220\u9664"))):e.createElement("span",{className:"Gray_9e"},_l("\u4E0A\u4F20\u7684\u56FE\u6807\u53EF\u7528\u4E8E\u5E94\u7528\u3001\u5E94\u7528\u9879\u3001\u5DE5\u4F5C\u8868\u7684\u56FE\u6807\u9009\u62E9\uFF0C\u4F7F\u7528SVG\u683C\u5F0F\u7684\u5355\u8272\u56FE\u6807"),"\uFF08",_l("\u63A8\u8350\u4E0B\u8F7D\u5730\u5740"),e.createElement("a",{className:"ThemeColor3 ThemeHoverColor2",href:"https://www.iconfont.cn",target:"_blank"},"iconfont"),"\uFF09\u3002")),e.createElement("div",{className:"flex appManagementCustom"},e.createElement(me.Z,null,!(s||[]).length&&e.createElement("div",{className:"manageListNull flexColumn h100"},e.createElement("div",{className:"iconWrap"},e.createElement(x.Z,{icon:"hr_custom"})),e.createElement("div",{className:"emptyExplain"},_l("\u6682\u65E0\u56FE\u6807"))),(s||[]).map(function(m){return e.createElement("span",{key:m.fileName,className:k()("appManagementCustomItem",{selected:I().includes(c,m.fileName)}),onClick:function(){return n.onSelected(m.fileName)}},e.createElement(ue.Z,{url:m.iconUrl,fill:"#47505B",size:32}))}))))}}]),p}(e.Component),D=l(64712),O=l(15577),U=l(77863),Z=l(5017),xe=l(97553),V=l(88106),w=l(88239),z=l(41191),P=l(8620),be=l(26581),j=l(12424),te=l(31261),ye=(0,T.Z)([`
  width: 120px;
  padding: 6px 0;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
  .item {
    padding: 9px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      background: #f5f5f5;
    }
  }
  .deleteItem {
    color: #f44336;
    .icon {
      color: #f44336;
    }
  }
`],[`
  width: 120px;
  padding: 6px 0;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
  .item {
    padding: 9px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      background: #f5f5f5;
    }
  }
  .deleteItem {
    color: #f44336;
    .icon {
      color: #f44336;
    }
  }
`]),Ee=Z.ZP.div(function(u){var p=u.select,h=p===void 0?!1:p;return`
  width: 150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  &:hover {
    border: 1px solid #2196F3;
    .chartWrap,
    .titleWrap {
      opacity: 1;
    }
  }
  .chartWrap {
    padding: 0 10px 8px 10px;
    display: flex;
    justify-content: space-between;
    gap: 6px;
    align-items: end;
    cursor: pointer;
    opacity: `+(h?1:.6)+`;
    &:hover {
      & + .ChartColorSetting_checkbox {
        .Checkbox-box {
          border: 1px solid #2196F3;
        }
      }
    }
    .colorBox {
      width: 11px;
      display: inline-block;
    }
  }
  .titleWrap {
    border-top: 1px solid #DDDDDD;
    padding: 5px 3px 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    cursor: pointer;
    opacity: `+(h?1:.6)+`;
    .option {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      i {
        color: #9E9E9E;
        &:hover {
          color: #2196f3;
        }
      }
    }
  }
  .ChartColorSetting_checkbox {
    position: absolute;
    top: 0;
    right: 6px;
  }
  .ming.Checkbox .Checkbox-box {
    margin-right: 0;
  }
`}),Ne=Z.ZP.div(ye),Se=[48,24,32,24,13,29,22,41];function ke(u){var p=u.name,h=u.editable,n=h===void 0?!1:h,t=u.selected,a=t===void 0?!1:t,i=u.colors,r=i===void 0?[]:i,c=u.openDialog,s=u.handleSelect,o=s===void 0?function(){}:s,d=u.remove,m=d===void 0?function(){}:d,f=u.copy,v=f===void 0?function(){}:f,b=u.disablechecked,A=b===void 0?!1:b,X=(0,e.useState)(!1),L=(0,j.Z)(X,2),B=L[0],F=L[1],K=e.createElement(Ne,null,n?e.createElement(e.Fragment,null,e.createElement("div",{className:"item",onClick:function(g){g.stopPropagation(),F(!1),c()}},e.createElement(x.Z,{icon:"edit",className:"Font18 Gray_9e mRight10"}),_l("\u7F16\u8F91")),e.createElement("div",{className:"item",onClick:function(g){g.stopPropagation(),F(!1),v()}},e.createElement(x.Z,{icon:"copy",className:"Font18 Gray_9e mRight10"}),_l("\u590D\u5236")),e.createElement("div",{className:"item deleteItem",onClick:function(g){g.stopPropagation(),F(!1),m()}},e.createElement(x.Z,{icon:"delete_12",className:"Font18 mRight10"}),_l("\u5220\u9664"))):e.createElement("div",{className:"item",onClick:function(g){g.stopPropagation(),F(!1),c()}},e.createElement(x.Z,{icon:"follow",className:"Font18 Gray_9e mRight10"}),_l("\u67E5\u770B")));return e.createElement(Ee,{select:a},e.createElement("div",{className:"chartWrap flex",onClick:function(){return o(!a)}},Se.map(function(E,g){return e.createElement("span",{className:"colorBox",style:{background:r[g],height:E}})})),!A&&e.createElement(ee.Z,{className:"ChartColorSetting_checkbox",size:"small",text:null,checked:a,onClick:function(g){return o(!g)}}),e.createElement("div",{className:"titleWrap",onClick:c},e.createElement("span",{className:"ellipsis flex Bold"},e.createElement(be.Z,{text:p},e.createElement("span",null,p))),e.createElement(te.Z,{popup:K,popupVisible:B,onPopupVisibleChange:function(g){F(g)},action:["click"],popupAlign:{points:["tr","br"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement("span",{className:"option",onClick:function(g){return g.stopPropagation()}},e.createElement("i",{className:"icon-task-point-more Font16"})))))}var oe=l(99924),Ie=l(70801),Ze=l(3540),je=l(94708),Fe=(0,T.Z)([`
  .label {
    font-size: 13px;
    font-family: FZLanTingHeiS;
    font-weight: 600;
    line-height: 13px;
    color: #333333;
  }
  .nameInput {
    width: 100%;
    cursor: pointer;
  }
  .colorList {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 37px;
  }
  .colorSelectWrap {
    width: 80px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    .colorBg {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
      box-sizing: content-box;
    }
    &.disableColorSelectWrap {
      background: #f5f5f5;
    }
  }
  .themeList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .colorItem {
      width: 36px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .colorBg {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      &.disable {
        background: #f5f5f5;
      }
      &:hover {
        .removeIcon {
          opacity: 1;
        }
      }
      .removeIcon {
        position: absolute;
        font-size: 16px;
        top: 0;
        right: 0;
        background: #fff;
        transform: translate(50%, -50%);
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
        color: #bdbdbd;
        &:hover {
          color: #2196f3;
        }
      }
    }
    .addColorWrap:hover {
      border: 1px solid #2196f3;
      .icon {
        color: #2196f3;
      }
    }
  }
`],[`
  .label {
    font-size: 13px;
    font-family: FZLanTingHeiS;
    font-weight: 600;
    line-height: 13px;
    color: #333333;
  }
  .nameInput {
    width: 100%;
    cursor: pointer;
  }
  .colorList {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 37px;
  }
  .colorSelectWrap {
    width: 80px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    .colorBg {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
      box-sizing: content-box;
    }
    &.disableColorSelectWrap {
      background: #f5f5f5;
    }
  }
  .themeList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .colorItem {
      width: 36px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .colorBg {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      &.disable {
        background: #f5f5f5;
      }
      &:hover {
        .removeIcon {
          opacity: 1;
        }
      }
      .removeIcon {
        position: absolute;
        font-size: 16px;
        top: 0;
        right: 0;
        background: #fff;
        transform: translate(50%, -50%);
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
        color: #bdbdbd;
        &:hover {
          color: #2196f3;
        }
      }
    }
    .addColorWrap:hover {
      border: 1px solid #2196f3;
      .icon {
        color: #2196f3;
      }
    }
  }
`]),De=(0,T.Z)([`
  width: 360px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
  opacity: 1;
  border-radius: 5px;
  padding: 24px;
  .customColors {
    display: flex;
    gap: 6px;
    margin-top: 16px;
    flex-wrap: wrap;
    .colorItem {
      width: 34px;
      height: 34px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 2px;
      cursor: pointer;
      position: relative;
      .bgColor {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &.isDark {
        .selectIcon {
          color: #fff;
        }
      }
      &.selected {
        border: 1px solid #2196f3;
      }
      &.disabled {
        cursor: not-allowed;
        &::after {
          content: '';
          width: 1px;
          height: 28px;
          background: #333;
          display: inline-block;
          position: absolute;
          top: 2px;
          transform: rotate(-45deg);
          left: 15px;
        }
      }

      &.disabled.isDark {
        &::after {
          background: #fff;
        }
      }
    }
  }
`],[`
  width: 360px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
  opacity: 1;
  border-radius: 5px;
  padding: 24px;
  .customColors {
    display: flex;
    gap: 6px;
    margin-top: 16px;
    flex-wrap: wrap;
    .colorItem {
      width: 34px;
      height: 34px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 2px;
      cursor: pointer;
      position: relative;
      .bgColor {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &.isDark {
        .selectIcon {
          color: #fff;
        }
      }
      &.selected {
        border: 1px solid #2196f3;
      }
      &.disabled {
        cursor: not-allowed;
        &::after {
          content: '';
          width: 1px;
          height: 28px;
          background: #333;
          display: inline-block;
          position: absolute;
          top: 2px;
          transform: rotate(-45deg);
          left: 15px;
        }
      }

      &.disabled.isDark {
        &::after {
          background: #fff;
        }
      }
    }
  }
`]),we=Z.ZP.div(Fe),Be=Z.ZP.div(De);function Te(u){var p=u.onOk,h=u.visible,n=u.onCancel,t=u.data,a=t===void 0?null:t,i=u.editable,r=i===void 0?!1:i,c=u.customColors,s=c===void 0?[]:c,o=u.id,d=u.customChar,m=d===void 0?[]:d,f=(0,e.useState)((a||{}).name),v=(0,j.Z)(f,2),b=v[0],A=v[1],X=(0,e.useState)((a||{}).colors||new Array(8).fill()),L=(0,j.Z)(X,2),B=L[0],F=L[1],K=(0,e.useState)((a||{}).themeColors||[]),E=(0,j.Z)(K,2),g=E[0],ae=E[1],Ue=(0,e.useState)(!1),re=(0,j.Z)(Ue,2),Ve=re[0],le=re[1],ze=(0,e.useState)([]),ce=(0,j.Z)(ze,2),Ae=ce[0],Xe=ce[1],Ke=(0,e.useState)(""),se=(0,j.Z)(Ke,2),Ye=se[0],_e=se[1],Y=(0,e.useRef)();(0,e.useEffect)(function(){Y.current&&Y.current.focus()},[]),(0,e.useEffect)(function(){if(m.length!==0){var y=[];m.forEach(function(C){y=y.concat(o===C.id&&a?[]:C.themeColors||[])}),Xe(y)}},[o]);var Qe=function(C,N){var S=e.createElement("div",{className:k()("colorSelectWrap",{disableColorSelectWrap:!r})},e.createElement("div",{className:"colorBg",style:{background:C||"rgba(255, 255, 255, 0)"}}),e.createElement(x.Z,{icon:"expand_more",className:"Font18 Gray_9e"}));return r?e.createElement(je.Z,{value:C||Ye,onChange:function(Q){F(B.map(function(J,en){return N===en?Q:J})),_e(Q)}},S):S},Je=function(C){return e.createElement(Be,null,e.createElement("div",{className:"title Font14 bold Gray"},_l("\u81EA\u5B9A\u4E49\u4E3B\u9898\u989C\u8272")),e.createElement("div",{className:"customColors"},C.map(function(N){var S=g.includes(N.color),_=Ae.includes(N.color);return e.createElement("div",{className:k()("colorItem",{selected:S,disabled:_,isDark:(0,z.default)(N.color).isDark()}),onClick:function(){_||(ae(S?g.filter(function(J){return J!==N.color}):g.concat(N.color)),le(!1))}},e.createElement("div",{className:"bgColor",style:{background:N.color}},e.createElement("i",{className:k()("icon-done selectIcon",{hide:!S})})))})))},qe=function(){if(!b){alert(_l("\u8BF7\u586B\u5199\u56FE\u8868\u914D\u8272\u540D\u79F0"),3);return}if(B.filter(function(C){return C}).length<8){alert(_l("\u8BF7\u5B8C\u5584\u56FE\u8868\u989C\u8272"),3);return}p({name:b,colors:B,themeColors:g,id:o||null})};return e.createElement(Ie.Z,{width:480,className:"customChartDialog",visible:h,title:r?_l("\u81EA\u5B9A\u4E49\u56FE\u8868\u914D\u8272"):_l("\u9884\u8BBE\u989C\u8272"),onCancel:n,onOk:qe},e.createElement(we,null,e.createElement("div",{className:"label mBottom12"},_l("\u540D\u79F0")),e.createElement(Ze.Z,{placeholder:_l("\u8BF7\u586B\u5199\u81EA\u5B9A\u4E49\u56FE\u8868\u914D\u8272\u540D\u79F0"),disabled:!r,className:"nameInput placeholderColor",value:b,onChange:function(C){return A(C)},maxlength:"15",manualRef:Y}),e.createElement("div",{className:"label mBottom16 mTop24"},_l("\u989C\u8272")),e.createElement("div",{className:"colorList"},B.map(function(y,C){return e.createElement("div",{className:"colorSelectItem"},e.createElement("div",{className:"name mBottom12"},_l("\u989C\u8272"),C+1),Qe(y,C))})),e.createElement("div",{className:"label mBottom16 mTop32"},_l("\u4E3B\u9898\u989C\u8272")),e.createElement("div",{className:"themeList"},g.map(function(y){return e.createElement("div",{className:k()("colorItem",{disable:!r})},e.createElement("div",{className:"colorBg",style:{background:y}}),r&&e.createElement("i",{className:"icon-remove_circle removeIcon",onClick:function(N){N.stopPropagation(),ae(g.filter(function(S){return S!==y}))}}))}),r&&e.createElement(te.Z,{popup:Je(s),popupVisible:Ve,onPopupVisibleChange:function(C){le(C)},action:["click"],popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement("div",{className:"colorItem addColorWrap"},e.createElement(x.Z,{icon:"add",className:"Font16 Gray_9e"}))))))}var Le=l(61455),We=Z.ZP.div(function(u){var p=u.color,h=u.select,n=h===void 0?!1:h,t=u.hasRemove,a=t===void 0?!1:t;return`
  width: 36px;
  height: 36px;
  background: #ffffff;
  border: 1px solid;
  border-color: `+(n?"#d5d5d5":"#fff")+`;
  border-radius: 4px;
  padding: 3px;
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: #2196F3;
    .removeIcon {
      opacity: `+(a?1:0)+`;
    }
  }
  .colorBg {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: `+p+`;

    display: flex;
    align-items: center;
    justify-content: center;
    .selectIcon {
      font-size: 16px;
      color: #fff;
      opacity: 1;
    }
  }
  .removeIcon {
    position: absolute;
    font-size: 16px;
    top: 0;
    right: 0;
    background: #fff;
    transform: translate(50%, -50%);
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
    color: #bdbdbd;
    &:hover {
      color: #2196F3;
    }
  }
  .hide {
    opacity: 0;
  }
`}),Pe=function(u){(0,M.default)(p,u);function p(h){(0,R.default)(this,p);var n=(0,W.default)(this,(p.__proto__||G()(p)).call(this,h));return n.getColorSettings=function(){var t=n.props.projectId;oe.Z.getColorSettings({projectId:t}).then(function(a){var i=a||{},r=i.themeColor,c=r===void 0?{}:r,s=i.chartColor,o=s===void 0?{}:s;n.setState({system_color:(!c.system||I().isEmpty(c.system)?P.m:c.system).map(function(d){return(0,w.default)({},d,{enable:d.hasOwnProperty("enable")?d.enable:!0})}),custom_color:c.custom||[],system_char:(!o.system||I().isEmpty(o.system)?P.W:o.system).map(function(d,m){return(0,w.default)({},P.W[m],{enable:d.hasOwnProperty("enable")&&m!==0?d.enable:!0})}),custom_char:o.custom||[]})})},n.setColorSetting=function(t,a,i){var r,c=n.props.projectId,s=n.state.mdProjectColorIndex;oe.Z.editColorSettings((r={projectId:c},(0,V.default)(r,i,i==="chart"&&t.startsWith("system")?a.map(function(o,d){return{id:o.id,enable:d===0?!0:o.enable}}):a),(0,V.default)(r,"type",t.startsWith("system")?0:1),r)).then(function(o){o?(typeof o!="boolean"&&o[0]&&(a[a.length-1].id=o[0]),n.setState((0,V.default)({},t,a)),md.global.PorjectColor[s][i==="chart"?"chartColor":"themeColor"][t.split("_")[0]]=a):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)})},n.isMax=function(){var t=n.state,a=t.system_color,i=t.custom_color;return a.filter(function(r){return r.enable}).length+i.filter(function(r){return r.enable}).length>17},n.initChartDialog=function(){n.setState({customChartDialog:{visible:!1,data:null,editable:!1,id:null}})},n.selected=function(t,a){var i=n.state,r=i.system_color,c=i.custom_color;if(!t.enable&&n.isMax()){alert(_l("\u6700\u591A\u663E\u793A18\u4E2A\u4E3B\u9898\u989C\u8272"),3);return}if(t.enable&&r.concat(c).filter(function(o){return o.enable}).length===1){alert(_l("\u6700\u5C11\u9009\u62E91\u4E2A\u4E3B\u9898\u989C\u8272"),3);return}var s=n.state[a];n.setColorSetting(a,s.map(function(o){return{color:o.color,enable:o.color===t.color?!o.enable:o.enable}}),"theme")},n.renderColorList=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"system_color",i=arguments[2],r=n.state,c=r.system_color,s=r.custom_color;return e.createElement("div",{className:"sysColorWrap mBottom24"},t.map(function(o){return e.createElement(We,{color:o.color,select:o.enable,key:a+"-"+o.color,onClick:function(){return n.selected(o,a)},hasRemove:i},e.createElement("div",{className:"colorBg"},e.createElement("i",{className:k()("icon-done selectIcon",{hide:!o.enable})})),e.createElement("i",{className:"icon-remove_circle removeIcon",onClick:function(m){if(m.stopPropagation(),o.enable&&c.concat(s).filter(function(f){return f.enable}).length===1){alert(_l("\u6700\u5C11\u9009\u62E91\u4E2A\u4E3B\u9898\u989C\u8272"),3);return}n.setColorSetting("custom_color",s.filter(function(f){return f.color!==o.color}),"theme")}}))}),i&&e.createElement("div",{className:"addColorWrap",onClick:function(){return n.setState({addThemeColorVisible:!0})}},e.createElement("i",{className:"icon-add addIcon"})))},n.renderChartList=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n.state,r=i.system_char,c=i.custom_char;return e.createElement("div",{className:"chartSettingWrap"},t.map(function(s,o){return e.createElement(ke,{name:s.name,editable:a,selected:s.enable,colors:s.colors,disablechecked:a?!1:o===0,openDialog:function(){n.setState({customChartDialog:{visible:!0,data:s,editable:a,id:s.id}})},handleSelect:function(m){if(!(!a&&o===0)){var f=a?"custom_char":"system_char";n.setColorSetting(f,n.state[f].map(function(v){return s.id===v.id?(0,w.default)({},v,{enable:m}):v}),"chart")}},copy:function(){if(a){if(c.length>9){alert(_l("\u6700\u591A\u6DFB\u52A0\u5341\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u914D\u8272"),3);return}n.setColorSetting("custom_char",c.concat((0,w.default)({},s,{themeColors:[],enable:!1,id:null})),"chart")}},remove:function(){a&&n.setColorSetting("custom_char",c.filter(function(m){return m.id!==s.id}),"chart")}})}))},n.state={system_color:[],custom_color:[],system_char:[],custom_char:[],customChartDialog:{visible:!1,data:null,editable:!1,id:null},mdProjectColorIndex:I().findIndex(md.global.Account.projects,function(t){return t.projectId===h.projectId}),addThemeColorVisible:!1},n}return(0,$.default)(p,[{key:"componentDidMount",value:function(){this.getColorSettings()}},{key:"render",value:function(){var n=this,t=this.state,a=t.system_color,i=t.custom_color,r=t.system_char,c=t.custom_char,s=t.customChartDialog,o=t.addThemeColorVisible,d=this.props.onClose;return e.createElement("div",{className:"orgManagementWrap managementCustomColor flex flexColumn"},e.createElement(ne.Z,{prefix:_l("\u81EA\u5B9A\u4E49\u989C\u8272")}),e.createElement("div",{className:"orgManagementHeader flexRow"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(x.Z,{icon:"backspace",className:"Font22 ThemeHoverColor3 pointer",onClick:d}),e.createElement("div",{className:"Font17 bold flex mLeft10"},_l("\u81EA\u5B9A\u4E49\u989C\u8272"),e.createElement("span",{className:"Font13 Gray_9 mLeft10"},_l("\u81EA\u5B9A\u4E49\u989C\u8272\u53EF\u7528\u4E8E\u5E94\u7528\u3001\u81EA\u5B9A\u4E49\u9875\u9762\u7B49\u5730\u65B9"))))),e.createElement("div",{className:"managementCustomColorContent flex"},e.createElement("div",{className:"themeColorSetting"},e.createElement("div",{className:"Font15 Gray Bold mBottom24"},_l("\u4E3B\u9898\u8272"),e.createElement("span",{className:"Font13 Gray_9 Normal mLeft16"},_l("\u6700\u591A\u663E\u793A18\u4E2A\u4E3B\u9898\u989C\u8272"))),e.createElement("div",{className:"Font14 Gray Bold mBottom16"},_l("\u7CFB\u7EDF\u9884\u8BBE")),this.renderColorList(a,"system_color",!1),e.createElement("div",{className:"Font14 Gray Bold mBottom16"},_l("\u81EA\u5B9A\u4E49"),e.createElement("span",{className:"Gray_9 Font13 Normal mLeft8"},_l("\u5BF9\u6BD4\u5EA6\u5927\u4E8E%0","70%"))),this.renderColorList(i,"custom_color",!0)),e.createElement("div",{className:"chartColorSetting"},e.createElement("div",{className:"Font15 Gray Bold flexRow chartSettingHeader"},_l("\u56FE\u8868\u914D\u8272"),e.createElement(xe.ZP,{className:"createChartColorBtn",icon:"add",radius:!0,onClick:function(){if(c.length>9){alert(_l("\u6700\u591A\u6DFB\u52A0\u5341\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u914D\u8272"),3);return}n.setState({customChartDialog:{visible:!0,data:null,editable:!0}})}},e.createElement("span",{className:"mLeft6"},_l("\u521B\u5EFA\u989C\u8272")))),e.createElement("div",{className:"Font14 Gray Bold mBottom16"},_l("\u7CFB\u7EDF\u9884\u8BBE")),this.renderChartList(r),e.createElement("div",{className:"Font14 Gray Bold mBottom16 mTop40"},c.length?_l("\u81EA\u5B9A\u4E49"):null),this.renderChartList(c,!0))),s.visible&&e.createElement(Te,{visible:s.visible,data:s.data,editable:s.editable,customColors:i,id:s.id,customChar:c,onCancel:function(){return n.initChartDialog()},onOk:function(f){n.setColorSetting("custom_char",s.data?c.map(function(v){return v.id===s.id?(0,w.default)({},f,{enable:v.enable}):v}):c.concat((0,w.default)({},I().pick(f,["name","colors","themeColors"]),{enable:!0})),"chart"),n.initChartDialog()}}),o&&e.createElement(Le.Z,{onSave:function(f){if(i.length>17){alert(_l("\u81EA\u5B9A\u4E49\u4E3B\u9898\u8272\u6700\u591A\u6DFB\u52A018\u4E2A"),3);return}if(P.m.concat(i).find(function(v){return(0,z.default)(v.color).toHex8String()===(0,z.default)(f).toHex8String()})){alert(_l("\u989C\u8272\u5DF2\u5B58\u5728"),3);return}n.setColorSetting("custom_color",i.concat({color:f,enable:!n.isMax()}),"theme")},onCancel:function(){return n.setState({addThemeColorVisible:!1})}}))}}]),p}(e.Component),Ge=(0,T.Z)([`
  padding: 0 32px;
  &.hoverStyle:hover {
    background: #f5f5f5;
  }
`],[`
  padding: 0 32px;
  &.hoverStyle:hover {
    background: #f5f5f5;
  }
`]),Re=(0,T.Z)([`
  display: flex;
  align-items: center;
  padding: 24px 24px 24px 0;
  border-bottom: 1px solid #eaeaea;
`],[`
  display: flex;
  align-items: center;
  padding: 24px 24px 24px 0;
  border-bottom: 1px solid #eaeaea;
`]),$e=Z.ZP.div(Ge),Me=Z.ZP.div(Re),He=[{key:"customIcon",title:_l("\u81EA\u5B9A\u4E49\u56FE\u6807"),descrption:_l("\u4E0A\u4F20\u7684\u56FE\u6807\u53EF\u7528\u4E8E\u5E94\u7528\u3001\u5E94\u7528\u9879\u3001\u5DE5\u4F5C\u8868\u7B49\u5730\u65B9"),clickFunc:"openCustomSvg"},{key:"customColor",title:_l("\u81EA\u5B9A\u4E49\u989C\u8272"),descrption:_l("\u81EA\u5B9A\u4E49\u989C\u8272\u53EF\u7528\u4E8E\u5E94\u7528\u3001\u81EA\u5B9A\u4E49\u9875\u9762\u7B49\u5730\u65B9"),clickFunc:"openCustomColor"}],Oe=function(u){(0,M.default)(p,u);function p(h){(0,R.default)(this,p);var n=(0,W.default)(this,(p.__proto__||G()(p)).call(this,h));return n.openCustomSvg=function(){var t=(0,O.XH)(D.Z.projectId,U.UU.customIcon);t==="2"?(0,O.j0)(D.Z.projectId,U.UU.customIcon):n.setState({uploadSvg:!0})},n.openCustomColor=function(){n.setState({customColor:!0})},n.state={uploadSvg:!1,customColor:!1},D.Z.setPageTitle(_l("\u901A\u7528\u8BBE\u7F6E")),n}return(0,$.default)(p,[{key:"render",value:function(){var n=this,t=this.state,a=t.uploadSvg,i=t.customColor;return a?e.createElement(Ce,{onClose:function(){return n.setState({uploadSvg:!1})},projectId:D.Z.projectId}):i?e.createElement(Pe,{onClose:function(){return n.setState({customColor:!1})},projectId:D.Z.projectId}):e.createElement("div",{className:"orgManagementWrap"},e.createElement("div",{className:"orgManagementHeader Font17"},_l("\u901A\u7528\u8BBE\u7F6E")),e.createElement(e.Fragment,null,He.map(function(r){var c=r.key,s=r.title,o=r.descrption,d=r.clickFunc,m=(0,O.XH)(D.Z.projectId,U.UU.customIcon);if(!(c==="customIcon"&&!m))return e.createElement($e,{className:k()({hoverStyle:d,Hand:d}),onClick:d?n[d]:function(){}},e.createElement(Me,{key:c},e.createElement("div",{className:"flex"},e.createElement("div",{className:"bold mBottom5 Font14"},s,c==="customIcon"&&m==="2"&&e.createElement(ie.Z,null)),e.createElement("div",{className:"Gray_9e"},o)),e.createElement("div",null,d&&e.createElement(x.Z,{icon:"sidebar-more",className:"Font18 Gray_9d Right Hand",onClick:function(){return n[d]()}}))))})))}}]),p}(e.Component)}}]);
