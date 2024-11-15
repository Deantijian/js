"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3411],{43411:(_r,Qe,u)=>{u.r(Qe),u.d(Qe,{default:()=>Ft});var Se={};u.r(Se),u.d(Se,{addWorksheetControl:()=>Kt,changeControls:()=>$t,clear:()=>Jt,hideControl:()=>et,loadPublicWorksheet:()=>qe,refreshShareUrl:()=>zt,resetControls:()=>Xt,showControl:()=>Qt,updateSettings:()=>Mt,updateWorksheetInfo:()=>Gt,updateWorksheetVisibleType:()=>Yt});var ee=u(12424),e=u(67294),Bt=u(45697),b=u.n(Bt),Ut=u(49611),Ot=u.n(Ut),_e=u(77632),Lt=u(45231),Rt=u(23156),Ht=u(44036),B=u(88239),Ce=u(97553),Ue=u(66215),jt=u(66946),Ne=u(79221),Ze=u(74127),We=u(96841),Me=u(25273),Xe=u(56493),Vt=u(85105),ie=u.n(Vt),le=u(99663),ae=u(22600),se=u(49135),ce=u(93196),Z=u(5017),ve=u(5505),At=u(29955),me=u(72950),Je=u(96486),s=u.n(Je);function _t(a){return s().isUndefined(a.coverUrl)||(a.cover=a.coverUrl.split("?")[0],delete a.coverUrl),s().isUndefined(a.logoUrl)||(a.logo=a.logoUrl.split("?")[0],delete a.logoUrl),s().isUndefined(a.themeIndex)||(a.themeColor=a.themeIndex,delete a.themeIndex),a}var Mt=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(n){};return function(n,o){var t=o(),i=t.publicWorksheet.worksheetInfo,d=i.worksheetId,g=i.projectId;ve.Z.saveSetting((0,B.default)({projectId:g,worksheetId:d},r)).then(function(p){p&&(l(!0),console.log("save success"),n({type:"PUBLICWORKSHEET_UPDATE_SETTINGS",value:r}))}).catch(function(p){l(!1)})}};function De(a,r,l,n){var o=r(),t=o.publicWorksheet.worksheetInfo,i=t.worksheetId,d=t.projectId,g=_t(l),p=(0,B.default)({},g);ve.Z.saveWorksheet((0,B.default)({projectId:d,worksheetId:i},p)).then(function(c){s().isFunction(n)&&n(i)}).catch(function(c){alert(_l("\u4FDD\u5B58\u5931\u8D25"),3)})}function zt(){return function(a,r){var l=r(),n=l.publicWorksheet.worksheetInfo.worksheetId;ve.Z.refreshPublicWorksheetUrl({worksheetId:n}).then(function(o){alert(_l("\u5237\u65B0\u6210\u529F")),a({type:"PUBLICWORKSHEET_UPDATE_URL",url:o.url})})}}function Kt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};return function(l,n){var o=n();if(o.publicWorksheet.originalControls.length+1>200){alert(_l("\u8868\u5355\u4E2D\u6DFB\u52A0\u5B57\u6BB5\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\uFF08200\u4E2A\uFF09"),3);return}var t=o.publicWorksheet.worksheetInfo.worksheetId;At.Z.addTextControl({worksheetId:t,name:a}).then(function(i){l({type:"PUBLICWORKSHEET_ADD_CONTROL",control:i}),l(et(i.controlId)),r(i)}).catch(function(i){alert(_l("\u6DFB\u52A0\u6587\u672C\u5B57\u6BB5\u5931\u8D25"),3)})}}function qe(a){var r=a.worksheetId;return function(l,n){ve.Z.getPublicWorksheetInfo({worksheetId:r}).then(function(o){l({type:"PUBLICWORKSHEET_LOAD_SUCCESS",controls:o.controls,originalControls:o.originalControls.filter(function(t){return!(t.type===29&&!s().includes([0,1],t.enumDefault2)||t.type===51&&s().get(t,"advancedSetting.showtype")==="2")&&!s().includes(["caid","ownerid","ctime","utime"],t.controlId)}).map(function(t){return(0,B.default)({},t,{advancedSetting:t.type===29&&s().includes(["2","6"],s().get(t,"advancedSetting.showtype"))?(0,B.default)({},t.advancedSetting||{},{showtype:"5"}):t.advancedSetting})}),shareId:o.shareId,url:o.url,worksheetInfo:(0,B.default)({themeIndex:o.themeColor,themeBgColor:o.themeBgColor,logoUrl:o.logo,coverUrl:o.cover},s().pick(o,["worksheetName","advancedSetting","name","desc","worksheetId","projectId","visibleType","submitBtnName"])),worksheetSettings:(0,B.default)({},s().pick(o,["limitWriteFrequencySetting","ipControlId","browserControlId","deviceControlId","systemControlId","receipt","extendSourceId","extends","needCaptcha","smsVerification","smsVerificationFiled","smsSignature","writeScope","linkSwitchTime","limitWriteTime","limitWriteCount","limitPasswordWrite","cacheDraft","cacheFieldData","weChatSetting","abilityExpand","completeNumber"])),hidedControlIds:o.hidedControlIds||[]})}).then(function(o){})}}var $t=function(r){return function(l,n){l({type:"PUBLICWORKSHEET_UPDATE_CONTROLS",controls:r}),De(l,n,{controls:r.map(function(o){return s().pick(o,["controlId","col","row","size"])})})}},Gt=function(r){return function(l,n){l({type:"PUBLICWORKSHEET_UPDATE_INFO",value:r}),De(l,n,r)}},Yt=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};return function(n,o){De(n,o,{visibleType:r},function(t){l(),n(r===1?{type:"PUBLICWORKSHEET_UPDATE_INFO",value:{visibleType:r}}:qe({worksheetId:t}))})}},et=function(r){return function(l,n){var o=n(),t=o.publicWorksheet,i=t.hidedControlIds,d=t.controls,g=s().uniqBy(i.concat(r)),p=d.filter(function(c){return!s().includes(g,c.controlId)});De(l,n,{hidedControlIds:g,controls:p}),l({type:"WORKSHEET_HIDE_CONTROL",controlId:r}),l({type:"PUBLICWORKSHEET_UPDATE_CONTROLS",controls:p})}};function Qt(a){return function(r,l){var n=l(),o=n.publicWorksheet,t=o.controls,i=o.hidedControlIds,d=(0,me.rc)(t,a.half);a.col=d.col,a.row=d.row,De(r,l,{hidedControlIds:i.filter(function(g){return g!==a.controlId}),controls:t.concat(s().pick(a,["controlId","col","row"]))}),s().isFunction(window.scrollToFormEnd)&&window.scrollToFormEnd(),r({type:"WORKSHEET_SHOW_CONTROL",controlId:a.controlId,control:s().pick(a,["controlId","col","row"])})}}function Xt(){return function(a,r){var l=r(),n=l.publicWorksheet.worksheetInfo.worksheetId;ve.Z.reset({worksheetId:n}).then(function(o){o&&o.success&&(o=o.info,a({type:"PUBLICWORKSHEET_LOAD_SUCCESS",controls:o.controls,originalControls:o.originalControls.filter(function(t){return!(t.type===29&&!s().includes([0,1],t.enumDefault2)||t.type===51&&s().get(t,"advancedSetting.showtype")==="2")&&!s().includes(["caid","ownerid","ctime","utime"],t.controlId)}),shareId:o.shareId,url:o.url,worksheetInfo:(0,B.default)({themeIndex:o.themeColor,themeBgColor:o.themeBgColor,logoUrl:o.logo,coverUrl:o.cover},s().pick(o,["worksheetName","name","desc","worksheetId","projectId","visibleType","submitBtnName"])),worksheetSettings:(0,B.default)({},s().pick(o,["limitWriteFrequencySetting","ipControlId","browserControlId","deviceControlId","systemControlId","receipt","extendSourceId","extends","needCaptcha","smsVerification","smsVerificationFiled","smsSignature","writeScope","linkSwitchTime","limitWriteTime","limitWriteCount","limitPasswordWrite","cacheDraft","cacheFieldData","weChatSetting","abilityExpand","completeNumber"])),hidedControlIds:o.hidedControlIds||[]}))}).catch(function(){alert(_l("\u91CD\u7F6E\u5931\u8D25"),2)})}}var Jt=function(){return{type:"PUBLICWORKSHEET_CLEAR"}},H=u(42541),qt=u(8177),X=u.n(qt),tt=u(46417),F=u(86735),J=u(44894),Mr,zr,be,ze,nt,en=(0,F.Z)([`
  cursor: pointer;
  width: 140px;
  height: 60px;
  background: #f7f7f7;
  border: 2px dashed #e0e0e0;
  border-radius: 4px;
  margin-top: 32px;
  color: #bdbdbd;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  letter-spacing: 3px;
  user-select: none;
  .icon {
    width: 1em;
    display: inline-block;
  }
  :hover {
    background: #f4f4f4;
  }
`],[`
  cursor: pointer;
  width: 140px;
  height: 60px;
  background: #f7f7f7;
  border: 2px dashed #e0e0e0;
  border-radius: 4px;
  margin-top: 32px;
  color: #bdbdbd;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  letter-spacing: 3px;
  user-select: none;
  .icon {
    width: 1em;
    display: inline-block;
  }
  :hover {
    background: #f4f4f4;
  }
`]),tn=(0,F.Z)([`
  position: relative;
  display: inline-block;
  margin-top: 32px;
  img {
    height: 59px;
    max-width: 100%;
    object-fit: contain;
  }
  .icon {
    cursor: pointer;
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 18px;
    color: #bdbdbd;
  }
`],[`
  position: relative;
  display: inline-block;
  margin-top: 32px;
  img {
    height: 59px;
    max-width: 100%;
    object-fit: contain;
  }
  .icon {
    cursor: pointer;
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 18px;
    color: #bdbdbd;
  }
`]);function ot(a,r,l,n,o){var t={};return Object.keys(n).forEach(function(i){t[i]=n[i]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=l.slice().reverse().reduce(function(i,d){return d(a,r,i)||i},t),o&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(o):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(a,r,t),t=null),t}var nn=Z.ZP.div(en),on=Z.ZP.div(tn),rn=(be=(nt=ze=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.state={isUploading:!1},n}return(0,ae.default)(r,[{key:"handleUploaded",value:function(n,o){var t=this.props.onChange;this.setState({isUploading:!1}),n.disableBrowse(!1),t(o.url)}},{key:"handleRemove",value:function(n){var o=this.props.onChange;this.setState({logourl:""}),o("")}},{key:"render",value:function(){var n=this,o=this.props.url,t=this.state.isUploading;return e.createElement(e.Fragment,null,!o&&e.createElement(tt.Z,{className:"InlineBlock",options:{multi_selection:!1,filters:{mime_types:[{title:"image",extensions:"jpg,jpeg,png"}]}},bucket:4,onUploaded:this.handleUploaded,onAdd:function(d,g){n.setState({isUploading:!0}),d.disableBrowse()},onError:function(){}},e.createElement(nn,null,t?e.createElement("i",{className:"icon icon-loading_button rotate"}):"LOGO")),o&&e.createElement(on,null,e.createElement("img",{src:o}),e.createElement("i",{className:"icon icon-closeelement-bg-circle",onClick:this.handleRemove})))}}]),r}(e.Component),ze.propTypes={url:b().string,onChange:b().func},ze.defaultProps={onChange:function(){}},nt),ot(be.prototype,"handleUploaded",[J.Nj],X()(be.prototype,"handleUploaded"),be.prototype),ot(be.prototype,"handleRemove",[J.Nj],X()(be.prototype,"handleRemove"),be.prototype),be),ln=u(36164),de=u(3540),an=u(68924),sn=u.n(an),rt,it,cn=(0,F.Z)([`
  color: #9e9e9e;
`],[`
  color: #9e9e9e;
`]),dn=(0,F.Z)([`
  border: none !important;
  padding: 0 !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  background-color: transparent;
`],[`
  border: none !important;
  padding: 0 !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  background-color: transparent;
`]),un=(0,F.Z)([`
  display: block;
  color: inherit;
  border: none !important;
  padding: 0 !important;
  font-size: inherit !important;
  line-height: inherit;
  background-color: transparent;
`],[`
  display: block;
  color: inherit;
  border: none !important;
  padding: 0 !important;
  font-size: inherit !important;
  line-height: inherit;
  background-color: transparent;
`]),pn=Z.ZP.div(function(a){var r=a.active;return`
  padding: 10px 20px;
  white-space: pre-line;
  `+(r?"background: #f5f5f5":"")+`
  :hover { background: #f5f5f5 }
`}),mn=Z.ZP.span(cn),fn=(0,Z.ZP)(de.Z)(dn),hn=(0,Z.ZP)(ln.Z)(un),gn=(it=rt=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.state={inputvalue:l.value,editting:!1},n}return(0,ae.default)(r,[{key:"render",value:function(){var n=this,o=this.props,t=o.mutiLine,i=o.turnLine,d=o.minHeight,g=o.maxLength,p=o.className,c=o.emptyTip,m=o.style,h=o.value,f=o.onChange,E=this.state,I=E.inputvalue,k=E.editting;return e.createElement(pn,{className:"editableText Hand "+(p||""),active:k,style:m,onClick:function(){n.setState({editting:!0,inputvalue:h},function(){setTimeout(function(){n.input&&n.input.focus()},100)})}},k&&!t&&e.createElement(fn,{manualRef:function(P){return n.input=P},value:I,onBlur:function(P){f(P.target.value),n.setState({editting:!1})},onChange:function(P){return n.setState({inputvalue:i?P:P.replace(/\n/g,"")})}}),k&&t&&e.createElement(hn,{minHeight:d,maxLength:g,manualRef:function(P){return n.input=P},value:I,onBlur:function(P){f(P.target.value),n.setState({editting:!1})},onChange:function(P){return n.setState({inputvalue:i?P:P.replace(/\n/g,"")})}}),!k&&e.createElement("div",null,h?e.createElement("span",{dangerouslySetInnerHTML:{__html:sn()(h)}}):e.createElement(mn,null,c||_l("\u70B9\u51FB\u8BBE\u7F6E"))))}}]),r}(e.Component),rt.propTypes={className:b().string,mutiLine:b().bool,turnLine:b().bool,minHeight:b().number,maxLength:b().number,style:b().shape({}),emptyTip:b().string,value:b().string,onChange:b().func},it),lt,at,Cn=(0,F.Z)([`
  max-width: 756px;
  .submitContent {
    height: 40px;
    border-radius: 3px;
    padding: 0 32px;
    overflow: hidden;
    white-space: nowrap;
    i {
      line-height: 40px;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`],[`
  max-width: 756px;
  .submitContent {
    height: 40px;
    border-radius: 3px;
    padding: 0 32px;
    overflow: hidden;
    white-space: nowrap;
    i {
      line-height: 40px;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`]),vn=(0,Z.ZP)(Ce.ZP)(Cn),bn=(at=lt=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.state={isEditing:!1},n}return(0,ae.default)(r,[{key:"render",value:function(){var n=this,o=this.props,t=o.name,i=o.onChange,d=o.themeBgColor,g=this.state.isEditing;return e.createElement("div",null,g?e.createElement(de.Z,{manualRef:function(c){return n.con=c},defaultValue:t,onBlur:function(c){if(c.target.value.trim()===""){alert(_l("\u63D0\u4EA4\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),3),n.con.focus(),c.preventDefault();return}n.setState({isEditing:!1}),i(c.target.value.trim())}}):e.createElement(vn,{style:{background:d,padding:0},onClick:function(){n.setState({isEditing:!0},function(){setTimeout(function(){n.con&&n.con.focus()},100)})}},e.createElement("div",{className:"submitContent"},e.createElement("span",{className:"text ellipsis InlineBlock"},t),e.createElement("i",{className:"icon icon-hr_edit"}))))}}]),r}(e.Component),lt.propTypes={name:b().string,onChange:b().func,themeBgColor:b().string},at),xn=u(7205),En=u(90142),Kr=u(97373),st=u(94055),q=u(33867),we=u(85315),yn=u(93967),fe=u.n(yn),ct,dt,Sn=(0,F.Z)([`
  margin-top: 10px;
  height: 260px;
`],[`
  margin-top: 10px;
  height: 260px;
`]),wn=(0,F.Z)([`
  cursor: pointer;
  position: relative;
  width: 80px;
  height: 60px;
  display: inline-block;
  margin-right: 6px;
  background-size: cover !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  :nth-child(3n) {
    margin-right: 0px;
  }
  .picMask,
  .icon {
    visibility: hidden;
  }
  :hover {
    .picMask {
      visibility: visible;
    }
  }
  .active.picMask {
    visibility: visible;
  }
  .active.picMask .icon {
    visibility: visible;
  }
`],[`
  cursor: pointer;
  position: relative;
  width: 80px;
  height: 60px;
  display: inline-block;
  margin-right: 6px;
  background-size: cover !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  :nth-child(3n) {
    margin-right: 0px;
  }
  .picMask,
  .icon {
    visibility: hidden;
  }
  :hover {
    .picMask {
      visibility: visible;
    }
  }
  .active.picMask {
    visibility: visible;
  }
  .active.picMask .icon {
    visibility: visible;
  }
`]),kn=(0,F.Z)([`
  position: absolute;
  width: 80px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
`],[`
  position: absolute;
  width: 80px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
`]),In=(0,F.Z)([`
  text-align: center;
`],[`
  text-align: center;
`]),Tn=(0,F.Z)([`
  cursor: pointer;
  display: inline-block;
  padding: 3px 5px;
`],[`
  cursor: pointer;
  display: inline-block;
  padding: 3px 5px;
`]),Nn=Z.ZP.div(Sn),Pn=Z.ZP.div(wn),Zn=Z.ZP.div(kn),Wn=Z.ZP.div(In),Dn=Z.ZP.div(Tn),Fn=Z.ZP.div(function(a){var r=a.active;return`
  width: 8px;
  height: 8px;
  border-radius: 6px;
  background: `+(r?"#9E9E9E":"#E0E0E0")+`;
  vertical-align: middle;
`}),Bn=(dt=ct=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.state={pageIndex:0},n}return(0,ae.default)(r,[{key:"render",value:function(){var n=this,o=this.props,t=o.images,i=o.coverUrl,d=o.onChange,g=d===void 0?function(){}:d,p=this.state.pageIndex;return e.createElement("div",null,e.createElement(Nn,null,t.slice(p*12,(p+1)*12).map(function(c){return e.createElement(Pn,{onClick:function(){return g(md.global.FileStoreConfig.pubHost+c)},style:{background:"url("+(md.global.FileStoreConfig.pubHost+c)+"?imageView2/1/w/160)"}},e.createElement(Zn,{className:fe()("picMask",{active:md.global.FileStoreConfig.pubHost+c===i})},e.createElement("i",{className:"icon icon-hr_ok"})))})),e.createElement(Wn,null,[].concat((0,we.Z)(new Array(Math.ceil(t.length/12)))).map(function(c,m){return e.createElement(Dn,{onClick:function(){n.setState({pageIndex:m})}},e.createElement(Fn,{active:m===p}))})))}}]),r}(e.Component),ct.propTypes={coverUrl:b().string,images:b().arrayOf(b().string),onChange:b().func},dt),y=u(14663),Ke=u(15577),Un=u(61455),$r,Gr,ne,ut,pt,On=(0,F.Z)([`
  padding: 0 24px;
  width: 300px;
`],[`
  padding: 0 24px;
  width: 300px;
`]),Ln=(0,F.Z)([`
  font-size: 18px;
  color: #9e9e9e;
  cursor: pointer;
`],[`
  font-size: 18px;
  color: #9e9e9e;
  cursor: pointer;
`]),Rn=(0,F.Z)([`
  display: flex;
  flex-wrap: wrap;

  li {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 12px 12px 0;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    &:not(.isCurrentColor):hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    & > .icon {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
    }
  }
`],[`
  display: flex;
  flex-wrap: wrap;

  li {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 12px 12px 0;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    &:not(.isCurrentColor):hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    & > .icon {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
    }
  }
`]),Hn=(0,F.Z)([`
  margin-top: 20px;
  .icon {
    display: inline-block;
    position: relative;
    top: 1px;
    margin-right: 7px;
    font-size: 20px;
  }
`],[`
  margin-top: 20px;
  .icon {
    display: inline-block;
    position: relative;
    top: 1px;
    margin-right: 7px;
    font-size: 20px;
  }
`]),jn=(0,F.Z)([`
  :hover {
    background-color: #feecea;
    color: #f44336;
  }
`],[`
  :hover {
    background-color: #feecea;
    color: #f44336;
  }
`]);function $e(a,r,l,n,o){var t={};return Object.keys(n).forEach(function(i){t[i]=n[i]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=l.slice().reverse().reduce(function(i,d){return d(a,r,i)||i},t),o&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(o):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(a,r,t),t=null),t}var Vn=Z.ZP.div(On),An=Z.ZP.span(Ln),mt=Z.ZP.ul(Rn),_n=(0,Z.ZP)(H.op)(Hn),Mn=(0,Z.ZP)(H.op)(jn),zn=(ne=(pt=ut=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l)),o=l.worksheetInfo.projectId,t=(0,Ke.LK)(o);return n.state={isUploading:!1,customColors:(s().find(t.concat((localStorage.getItem("customColors")||"").split(",").filter(function(i){return i})),function(i){return i.toLocaleUpperCase()===n.props.theme.toLocaleUpperCase()})?[]:[n.props.theme]).concat((localStorage.getItem("customColors")||"").split(",").filter(function(i){return i})),addColorDialogVisible:!1},n}return(0,ae.default)(r,[{key:"changeCover",value:function(n){var o=this.props.updateWorksheetInfo;o({coverUrl:n})}},{key:"handleUploaded",value:function(n,o){this.setState({isUploading:!1}),this.changeCover(o.url),n.disableBrowse(!1)}},{key:"renderCustomColor",value:function(n){var o=this,t=this.state,i=t.addColorDialogVisible,d=t.customColors,g=this.props.updateWorksheetInfo;return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray_9e"},_l("\u81EA\u5B9A\u4E49")),e.createElement(mt,{className:"pTop12"},e.createElement("li",{className:"isCurrentColor"},e.createElement(q.Z,{icon:"task-add-member-circle",className:"Gray_bd Font30 pointer",onClick:function(){return o.setState({addColorDialogVisible:!0})}})),d.map(function(p,c){return e.createElement(st.default,{key:c,title:p,color:"#000",placement:"bottom"},e.createElement("li",{className:fe()({isCurrentColor:p.toLocaleUpperCase()===n.toLocaleUpperCase()}),style:{backgroundColor:p},onClick:function(){return g({themeBgColor:p})}},p.toLocaleUpperCase()===n.toLocaleUpperCase()&&e.createElement(q.Z,{icon:"hr_ok"})))})),i&&e.createElement(Un.Z,{onSave:function(c){var m=[c].concat(d).slice(0,5);o.setState({customColors:m}),localStorage.setItem("customColors",m),g({themeBgColor:c})},onCancel:function(){return o.setState({addColorDialogVisible:!1})}}))}},{key:"render",value:function(){var n=this,o=this.props,t=o.open,i=o.worksheetInfo,d=o.onClose,g=o.updateWorksheetInfo,p=o.theme,c=i.coverUrl,m=i.projectId,h=this.state.isUploading,f=(0,Ke.LK)(m);return e.createElement(En.Z,{open:t,style:{position:"absolute",top:0,width:300},onRequestClose:d,onClickAwayExceptions:[".mui-dialog-container"]},e.createElement(Me.Z,null,e.createElement(Vn,null,e.createElement(H.e2,{right:"24",top:"-2"},e.createElement(An,{onClick:d},e.createElement("i",{className:"icon icon-close ThemeHoverColor3"}))),e.createElement(H.H1,null,_l("\u4E3B\u9898\u80CC\u666F")),e.createElement(H.H3,null,_l("\u4E3B\u9898\u989C\u8272")),e.createElement(mt,null,f.map(function(E,I){return e.createElement(st.default,{key:E,color:"#000",placement:"bottom"},e.createElement("li",{className:fe()({isCurrentColor:E.toLocaleUpperCase()===p.toLocaleUpperCase()}),style:{backgroundColor:E},onClick:function(){return g({themeBgColor:E})}},E.toLocaleUpperCase()===p.toLocaleUpperCase()&&e.createElement(q.Z,{icon:"hr_ok"})))})),this.renderCustomColor(p),e.createElement(H.Hr,null),e.createElement("div",{className:"flexRow"},e.createElement(H.H3,{className:"flex",style:{margin:"4px 0"}},_l("\u5C01\u9762\u56FE\u7247")),e.createElement(Mn,{height:"28",borderRadius:"14",onClick:function(){return n.changeCover("")}}," ",_l("\u6E05\u9664\u56FE\u7247")," ")),e.createElement(Bn,{coverUrl:c,images:y.T4,onChange:function(I){return n.changeCover(I)}}),e.createElement(tt.Z,{className:"Block",options:{multi_selection:!1,filters:{mime_types:[{title:"image",extensions:"jpg,jpeg,png"}]},error_callback:function(){alert(_l("\u6709\u4E0D\u5408\u6CD5\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u56FE\u7247\u4E0A\u4F20"),3)}},bucket:4,onUploaded:this.handleUploaded,onAdd:function(I,k){n.setState({isUploading:!0}),I.disableBrowse()}},e.createElement(_n,{height:"44",bg:"#F3FAFF",color:"#2196F3",hoverBg:"#EBF6FE",style:{margin:"10px 0"}},h?e.createElement("i",{className:"icon icon-loading_button rotate"}):e.createElement("i",{className:"icon icon-custom_insert_photo"}),_l("\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247"))))))}}]),r}(e.Component),ut.propTypes={open:b().bool,worksheetInfo:b().shape({}),updateWorksheetInfo:b().func,onClose:b().func,theme:b().string},pt),$e(ne.prototype,"changeCover",[J.Nj],X()(ne.prototype,"changeCover"),ne.prototype),$e(ne.prototype,"handleUploaded",[J.Nj],X()(ne.prototype,"handleUploaded"),ne.prototype),$e(ne.prototype,"renderCustomColor",[J.Nj],X()(ne.prototype,"renderCustomColor"),ne.prototype),ne),Kn=function(r){return(0,B.default)({},s().pick(r.publicWorksheet,["worksheetInfo"]))},$n=function(r){return(0,Ze.DE)(Se,r)};const Gn=(0,We.$j)(Kn,$n)(zn);var Yn=u(52945),Q=u.n(Yn),xe=u(86674),Qn=u(42723),Xn=u(11105),Jn=u(10509),qn=u(44675),ke=u(62232);function eo(a){var r=a.controls,l=a.onChange,n=(0,Qn.Z)(a,["controls","onChange"]),o=(0,e.useState)([]),t=(0,ee.Z)(o,2),i=t[0],d=t[1];(0,e.useEffect)(function(){d((0,ke.tt)(r))},[r]);var g=(0,e.useState)({}),p=(0,ee.Z)(g,2),c=p[0],m=p[1],h=function(I){var k=r.filter(function(x){return x.controlId!==I});l(k,I)},f=function(I){d(I),l((0,ke.wf)(I))};return e.createElement(Xn.W,{key:"public",context:window,backend:Jn.PD},e.createElement(qn.Z,(0,B.default)({widgets:i,setWidgets:f,activeWidget:c,setActiveWidget:m,handleHide:h,allControls:(0,Je.flatten)(i)},n)))}var Ge,ft,to=(ft=Ge=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.state={},n}return(0,ae.default)(r,[{key:"render",value:function(){var n=this.props,o=n.advancedSetting,t=n.controls,i=n.onChange,d=n.onHideControl;return e.createElement("div",{className:"customWidgetForWorksheetWrap publicWorksheetForm"},e.createElement(eo,{styleInfo:{info:o},controls:t.filter(function(g){return!_.includes(xe.Vh.concat(["rowid"]),g.controlId)}).map(function(g){return(0,ke.lS)(g)?(0,B.default)({},g,{advancedSetting:Q()({},g.advancedSetting,{showtype:"1"})}):g}),fromType:"public",onChange:function(p,c){c?d(c):i(p)}}))}}]),r}(e.Component),Ge.propTypes={controls:b().arrayOf(b().shape({})),onChange:b().func,onHideControl:b().func},Ge.defaultProps={controls:[],onChange:function(){},onHideControl:function(){}},ft),no=u(92138),ht,gt,oo=Z.ZP.div(function(a){var r=a.color;return`
  height: 10px;
  background: #fff;
  border-radius: 3px 3px 0 0;
  .topBar{
    width: 100%;
    height: 100%;
    background: `+(0,ke.YT)(r,.4)+`;
  }
 `}),ro=Z.ZP.div(function(a){var r=a.themeBgColor;return`
  text-align: center;
  margin: 30px 0 30px;
  .text {
    width: 100%;
  }
  .icon {
    margin-left: 6px;
    font-size: 18px;
  }
  input {
    width: 200px;
    max-width: calc(100% - 44px);
    border: 7px solid `+r+` !important;
    height: 40px !important;
  }
  .Button {
    height: 40px;
    line-height: 40px;
  }
`}),io=(gt=ht=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.getThemeBgColor=function(){var o=n.props.worksheetInfo,t=o.themeIndex,i=o.themeBgColor;return i||(y.np[t]?(y.np[t]||{}).main:"#2196f3")},n.state={appearanceConfigVisible:!1,isEditing:!1},n}return(0,ae.default)(r,[{key:"componentDidMount",value:function(){var n=this;window.scrollToFormEnd=function(){n.con&&$(n.con).find(".nano").nanoScroller({scroll:"bottom"})}}},{key:"componentWillUnmount",value:function(){delete window.scrollToFormEnd}},{key:"render",value:function(){var n=this,o=this.props,t=o.worksheetInfo,i=o.worksheetSettings,d=o.shareUrl,g=o.controls,p=o.originalControls,c=o.loading,m=o.updateWorksheetInfo,h=o.hidedControlIds,f=o.changeControls,E=o.onHideControl,I=t.coverUrl,k=t.logoUrl,x=t.submitBtnName,P=t.advancedSetting,T=this.state,S=T.appearanceConfigVisible,C=T.isEditing,N=(0,me.iR)(p,i),O=h.concat(N),V=this.getThemeBgColor();return e.createElement("div",{className:"publicWorksheetConfigForm flex",ref:function(M){return n.con=M},style:{backgroundColor:(0,no.generate)(V)[0]}},e.createElement(Gn,{theme:V,open:S,onClose:function(){return n.setState({appearanceConfigVisible:!1})}}),e.createElement(Me.Z,{className:"flex"},e.createElement(xn.Z,(0,B.default)({mask:!0},{theme:V,coverUrl:I}),e.createElement(H.e2,{top:"17",right:"24"},e.createElement(H.L3,{onClick:function(){return n.setState({appearanceConfigVisible:!0})}},e.createElement("i",{className:"icon icon-task-color"}),_l("\u4E3B\u9898\u80CC\u666F")),e.createElement(H.L3,{onClick:function(){return window.open("/worksheet/form/preview/"+t.worksheetId+"?url="+encodeURIComponent(d))}},e.createElement("i",{className:"icon icon-eye"}),_l("\u9884\u89C8"))),e.createElement("div",{className:"formContent flexColumn"},e.createElement(oo,{color:V},e.createElement("div",{className:"topBar"})),c&&e.createElement(Ne.Z,{direction:"column",widths:["30%","40%","90%"],active:!0,itemStyle:{marginBottom:"10px"}}),!c&&e.createElement("div",{className:"formContentHeader"},e.createElement("div",{className:"mLeft20"},e.createElement(rn,{url:k,onChange:function(M){return m({logoUrl:M})}})),e.createElement("div",{className:"worksheetName"},e.createElement(gn,{turnLine:!0,mutiLine:!0,minHeight:38,maxLength:200,emptyTip:_l("\u672A\u547D\u540D\u8868\u5355"),value:t.name,onChange:function(M){return m({name:M.trim()})}})),e.createElement("div",{className:"worksheetDescription WordBreak"},e.createElement(Xe.Z,{bucket:2,data:t.desc||"",minHeight:46,className:"descText-"+Math.round(Math.random()*10),onSave:function(M){m({desc:M})}})),e.createElement(H.Hr,{style:{margin:"16px 0"}})),e.createElement("div",{className:"formMain"},c&&e.createElement(Ne.Z,{direction:"column",widths:["40%","50%","60%","70%","80%","40%","50%","60%","70%","80%"],active:!0,itemStyle:{marginBottom:"10px"}}),!c&&e.createElement(to,{advancedSetting:P,controls:(0,me.LM)(p,g).filter(function(D){return!s().find(O,function(M){return D.controlId===M})}),onHideControl:E,onChange:function(M){f(M)}})),c&&e.createElement(Ne.Z,{className:"mBottom30",direction:"column",widths:["60%","70%","80%"],active:!0,itemStyle:{marginBottom:"10px"}}),!c&&e.createElement(ro,{themeBgColor:V},e.createElement(bn,{name:x,themeBgColor:V,onChange:function(M){return m({submitBtnName:M})}}))))))}}]),r}(e.Component),ht.propTypes={controls:b().arrayOf(b().shape({})),originalControls:b().arrayOf(b().shape({})),loading:b().bool,hidedControlIds:b().arrayOf(b().string),worksheetInfo:b().shape({}),worksheetSettings:b().shape({}),onHideControl:b().func,changeControls:b().func,updateWorksheetInfo:b().func},gt),lo=function(r){return(0,B.default)({},s().pick(r.publicWorksheet,["loading","shareUrl","worksheetInfo","worksheetSettings","controls","originalControls","hidedControlIds"]))},ao=function(r){return(0,Ze.DE)(Se,r)};const so=(0,We.$j)(lo,ao)(io);var Fe=u(70801),Oe=u(60866),Le=u(20845),co=(0,F.Z)([`
  .expandIcon {
    position: absolute;
    top: 0px;
    right: 0;
    color: #9e9e9e;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: #2196f3;
    }
  }
  .sectionLiCon::before {
    content: '';
    width: 9px;
    height: 100%;
    border: none;
    border-left: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    position: absolute;
    display: inline-block;
    left: 7px;
    top: -9px;
  }
`],[`
  .expandIcon {
    position: absolute;
    top: 0px;
    right: 0;
    color: #9e9e9e;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: #2196f3;
    }
  }
  .sectionLiCon::before {
    content: '';
    width: 9px;
    height: 100%;
    border: none;
    border-left: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    position: absolute;
    display: inline-block;
    left: 7px;
    top: -9px;
  }
`]),uo=Z.ZP.div(co);function po(a){var r=a.disabled,l=a.controls,n=a.hidedControls,o=a.disabledControls,t=a.onAdd,i=t===void 0?function(){}:t,d=a.onHide,g=d===void 0?function(){}:d,p=(0,e.useState)([]),c=(0,ee.Z)(p,2),m=c[0],h=c[1],f=function E(I){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.createElement(uo,null,I.filter(function(x){return(!x.sectionId||!k)&&!s().find(o,function(P){return P.controlId===x.controlId})}).map(function(x){var P=s().includes(m,x.controlId),T=!s().find(n,function(C){return C.controlId===x.controlId}),S=[];return x.type===52&&(S=l.filter(function(C){return C.sectionId===x.controlId&&!s().find(o,function(N){return N.controlId===C.controlId})}),S.length&&(T=S.some(function(C){return!s().find(n,function(N){return N.controlId===C.controlId})}),T&&s().find(n,function(C){return C.controlId===x.controlId})&&i(x))),e.createElement("div",{key:x.controlId,className:fe()("Relative",{mLeft25:!!x.sectionId})},e.createElement(Le.Z,{className:"mTop12",checked:T,text:x.controlName||_l("\u672A\u547D\u540D"),onClick:function(){if(T)g(x.controlId);else if(x.type===52){var N=S.concat([x]);N.forEach(function(D){return i(D)})}else{if(x.sectionId){var O=l.filter(function(D){return D.controlId===x.sectionId})[0]||{},V=l.filter(function(D){return D.sectionId===O.controlId&&!s().find(n,function(M){return M.controlId===D.controlId})});V.length||i(O)}i(x)}}}),x.type===52&&e.createElement("div",null,e.createElement(q.Z,{icon:P?"expand_less":"expand_more",className:"expandIcon",onClick:function(){return h(P?m.filter(function(N){return N!==x.controlId}):m.concat([x.controlId]))}}),P&&!!S.length&&e.createElement("div",{className:"Relative sectionLiCon"},E(S,!1))))}))};return f(l)}var Yr=u(48659),mo=u(1825),Re=u(14338),fo=u(38890),ho=u(47518),Ct=u.n(ho),ue=u(43727),go=u(7145),vt=u.n(go),Co=u(36964),vo=u.n(Co),bo=(0,F.Z)([`
  :hover .delete {
    display: inline-block;
  }
  :hover .index {
    display: none;
  }
`],[`
  :hover .delete {
    display: inline-block;
  }
  :hover .index {
    display: none;
  }
`]),xo=(0,F.Z)([`
  margin-right: 10px;
  font-size: 14px;
  line-height: 36px;
  width: 24px;
  text-align: center;
  .delete {
    cursor: pointer;
    display: none;
    font-size: 18px;
    color: #9e9e9e;
  }
`],[`
  margin-right: 10px;
  font-size: 14px;
  line-height: 36px;
  width: 24px;
  text-align: center;
  .delete {
    cursor: pointer;
    display: none;
    font-size: 18px;
    color: #9e9e9e;
  }
`]),Eo=Z.ZP.div(bo),yo=Z.ZP.span(xo);function So(a){var r=a.url,l=a.sourceKeys,n=a.onChange,o=n===void 0?function(){}:n,t=a.onDelete,i=t===void 0?function(){}:t;return l.map(function(d,g){return e.createElement(Eo,{key:d,className:"mBottom6 flexRow"},e.createElement(yo,null,e.createElement("span",{className:"index"},g+1),e.createElement("i",{className:"icon icon-task-new-delete delete",onClick:function(){return i(g)}})),e.createElement(H.al,{className:"ellipsis",style:{width:104,marginRight:6}},d),e.createElement(Oe.Z,{className:"flex overflowHidden",url:r+("?source="+encodeURIComponent(d))}))})}var Ye=function(a){(0,ce.default)(r,a);function r(){return(0,le.default)(this,r),(0,se.default)(this,(r.__proto__||ie()(r)).apply(this,arguments))}return(0,ae.default)(r,[{key:"render",value:function(){var n=this,o=this.props,t=o.defaultText,i=o.onOk,d=o.onClose;return e.createElement(Fe.Z,{title:_l("\u65B0\u5EFA\u6587\u672C\u5B57\u6BB5"),width:480,visible:!0,anim:!1,okText:_l("\u521B\u5EFA"),onCancel:d,onOk:function(){var p=n.input.value;if(!p.trim()){alert(_l("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0"),3);return}i(n.input.value.trim()),d()}},e.createElement(H.H3,{style:{margin:"0 0 10px"}},_l("\u5B57\u6BB5\u540D\u79F0")),e.createElement(de.Z,{defaultValue:t,manualRef:function(p){n.input=p,p&&p.focus()},style:{width:"100%"},placeholder:_l("\u5B57\u6BB5\u540D\u79F0")}))}}]),r}(e.Component);Ye.propTypes={defaultText:b().string,onOk:b().func,onClose:b().func};var wo=u(88106),ko=u(24043),Ee=u.n(ko),Qr=u(68841),Io=u(12528),Xr=u(6538),To=u(14321),No=u(31261),Po=u(9958),Zo=u(71792),Wo=u(86069),Do=u(22252),Fo=u(27484),bt=u.n(Fo),Bo=u(30381),Be=u.n(Bo),Uo=u(26581),Oo=(0,F.Z)([`
  height: 18px;
  .smallSwitch {
    transform: scale(0.67) translate(-6px, -3px);
    margin-left: -4px;
  }
`],[`
  height: 18px;
  .smallSwitch {
    transform: scale(0.67) translate(-6px, -3px);
    margin-left: -4px;
  }
`]),Lo=Z.ZP.div(Oo);function te(a){var r=a.checked,l=a.onClick,n=a.name,o=a.tip,t=a.disabled;return e.createElement(Lo,null,e.createElement(Ue.Z,{className:"smallSwitch",checked:r,onClick:l,disabled:t}),e.createElement("span",null,n),!!o&&e.createElement(Uo.Z,{popupPlacement:"bottom",text:e.createElement("span",null,o)},e.createElement("i",{className:"icon icon-help Font16 Gray_9e mLeft10"})))}var Ro=(0,F.Z)([`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 24px;
  cursor: pointer;

  .titleText {
    color: #333;
    font-weight: bold;
    vertical-align: middle;
    font-size: 15px;
  }
  i {
    color: #9e9e9e;
    margin-right: 12px;
  }
`],[`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 24px;
  cursor: pointer;

  .titleText {
    color: #333;
    font-weight: bold;
    vertical-align: middle;
    font-size: 15px;
  }
  i {
    color: #9e9e9e;
    margin-right: 12px;
  }
`]),Ho=Z.ZP.div(Ro);function Pe(a){var r=a.title,l=a.isFolded,n=a.onClick,o=n===void 0?_.noop:n,t=a.className;return e.createElement(Ho,{className:t||"",onClick:o},e.createElement(q.Z,{icon:l?"arrow-right-tip":"arrow-down"}),e.createElement("div",{className:"titleText"},r))}var jo=(0,F.Z)([`
  width: 110px;
  margin-right: 20px;
  &.ming.Dropdown .Dropdown--border,
  .dropdownTrigger .Dropdown--border {
    height: 32px;
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`],[`
  width: 110px;
  margin-right: 20px;
  &.ming.Dropdown .Dropdown--border,
  .dropdownTrigger .Dropdown--border {
    height: 32px;
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`]),Vo=(0,F.Z)([`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
  border: 1px solid #ddd;
  border-right: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`],[`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
  border: 1px solid #ddd;
  border-right: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`]),Ao=(0,F.Z)([`
  position: relative;

  .ming.Input {
    width: 150px;
    height: 32px;
    border-color: #ddd !important;

    &:focus {
      border-color: #1e88e5 !important;
    }
  }

  .rangeSuffix {
    position: absolute;
    top: 6px;
    right: 8px;
    line-height: 20px;
  }
`],[`
  position: relative;

  .ming.Input {
    width: 150px;
    height: 32px;
    border-color: #ddd !important;

    &:focus {
      border-color: #1e88e5 !important;
    }
  }

  .rangeSuffix {
    position: absolute;
    top: 6px;
    right: 8px;
    line-height: 20px;
  }
`]),_o=(0,F.Z)([`
  width: 150px !important;
  height: 32px !important;
  border-radius: 3px !important;
  &:hover {
    border-color: #ddd !important;
  }
  &.ant-picker-focused {
    border-color: #1e88e5 !important;
  }
`],[`
  width: 150px !important;
  height: 32px !important;
  border-radius: 3px !important;
  &:hover {
    border-color: #ddd !important;
  }
  &.ant-picker-focused {
    border-color: #1e88e5 !important;
  }
`]),Mo=(0,F.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Icon {
    color: #2196f3 !important;
    position: unset !important;
  }
  &:hover {
    .Icon {
      color: #fff !important;
    }
  }
`],[`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Icon {
    color: #2196f3 !important;
    position: unset !important;
  }
  &:hover {
    .Icon {
      color: #fff !important;
    }
  }
`]),zo=(0,F.Z)([`
  width: 320px;
  padding: 12px 13px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 6px;

  .dayItem {
    display: inline-block;
    text-align: center;
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 5px;
    margin: 0 8px 8px 8px;
    border: 1px solid transparent;
    cursor: pointer;

    :hover {
      border: 1px solid #2196f3;
    }

    &.active {
      background: #2196f3;
      color: #fff;
    }
  }
`],[`
  width: 320px;
  padding: 12px 13px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 6px;

  .dayItem {
    display: inline-block;
    text-align: center;
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 5px;
    margin: 0 8px 8px 8px;
    border: 1px solid transparent;
    cursor: pointer;

    :hover {
      border: 1px solid #2196f3;
    }

    &.active {
      background: #2196f3;
      color: #fff;
    }
  }
`]),Ko=(0,F.Z)([`
  display: flex;
  width: 320px;
  .weekItem {
    flex: 1;
    height: 32px;
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;
    border-left-width: 0.5px;
    border-right-width: 0.5px;
    line-height: 18px;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-left-width: 1px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-right-width: 1px;
    }
    :hover {
      border-color: #2196f3;
    }
    &.active {
      background: #2196f3;
      color: #fff;
    }
  }
`],[`
  display: flex;
  width: 320px;
  .weekItem {
    flex: 1;
    height: 32px;
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;
    border-left-width: 0.5px;
    border-right-width: 0.5px;
    line-height: 18px;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-left-width: 1px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-right-width: 1px;
    }
    :hover {
      border-color: #2196f3;
    }
    &.active {
      background: #2196f3;
      color: #fff;
    }
  }
`]),$o=(0,F.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 32px;
  padding: 5px 5px 5px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  i {
    margin-left: 8px;
    color: #9e9e9e;
  }

  :hover,
  &.active {
    border-color: #2196f3;
  }
`],[`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 32px;
  padding: 5px 5px 5px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  i {
    margin-left: 8px;
    color: #9e9e9e;
  }

  :hover,
  &.active {
    border-color: #2196f3;
  }
`]),Go=(0,F.Z)([`
  .limitRangTypeDropdown {
    width: 120px;
  }
  .limitWriteCount {
    max-width: 200px;
    .text {
      right: 10px;
      top: 0px;
      line-height: 36px;
    }
  }
`],[`
  .limitRangTypeDropdown {
    width: 120px;
  }
  .limitWriteCount {
    max-width: 200px;
    .text {
      right: 10px;
      top: 0px;
      line-height: 36px;
    }
  }
`]),Yo=To.default.RangePicker,Qo=(0,Z.ZP)(ue.Z)(jo),Xo=Z.ZP.div(Vo),xt=Z.ZP.div(Ao),Et=(0,Z.ZP)(Io.Z)(_o),Jo=Z.ZP.div(Mo),qo=Z.ZP.div(zo),er=Z.ZP.div(Ko),tr=Z.ZP.div($o),nr=Z.ZP.div(Go);function or(a){var r=a.data,l=a.setState,n=r.linkSwitchTime,o=n===void 0?{}:n,t=r.limitWriteTime,i=t===void 0?{}:t,d=r.limitWriteCount,g=d===void 0?{}:d,p=r.limitPasswordWrite,c=p===void 0?{}:p,m=r.limitWriteFrequencySetting,h=m===void 0?{limitRangType:1}:m,f=r.timeRange,E=r.titleFolded,I=(0,e.useState)(!1),k=(0,ee.Z)(I,2),x=k[0],P=k[1],T=[{type:y.uK.MONTH,text:_l("\u6708%02068")},{type:y.uK.DAY,text:_l("\u65E5")},{type:y.uK.HOUR,text:_l("\u65F6%02069")}],S={"zh-Hans":Po.Z,"zh-Hant":Wo.Z,en:Do.Z,ja:Zo.Z},C=S[md.global.Account.lang],N=function(v,A,w){if(parseInt(v)||parseInt(v)===0||v===""){var W=s().cloneDeep(f),z=A===y.uK.MONTH?12:31,K=1,oe=v!==""?parseInt(v)>z?z:parseInt(v)<K?K:parseInt(v):"";W[A][w]=oe,l({timeRange:W})}},O=function(v){if(f[v].start&&f[v].end){var A=s().cloneDeep(f);f[v].start>f[v].end&&(A[v].start=f[v].end,A[v].end=f[v].start);var w=s().cloneDeep(i);if(v!==y.uK.HOUR){var W=Ee()(Array(A[v].end),function(z,K){return K+1}).filter(function(z){return z>=A[v].start});w[v+"Setting"]["define"+s().upperFirst(v)]=W}l({timeRange:A,limitWriteTime:w})}},V=function(v,A,w){var W=s().cloneDeep(f);W[y.uK.HOUR][A][w]=v,l({timeRange:W})},D=function(v,A){var w=function(){return[]},W=function(){return[]};if(v==="start"&&A.end){var z=A.end.split(":").map(function(Y){return parseInt(Y)}),K=(0,ee.Z)(z,2),oe=K[0],he=K[1];w=function(){return Ee()({length:23-oe},function(ge,Ie){return Ie+oe+1})},W=function(ge){return ge<0?Ee()({length:60},function(Ie,Te){return Te}):ge===oe?Ee()({length:60-he},function(Ie,Te){return Te+he}):[]}}if(v==="end"&&A.start){var L=A.start.split(":").map(function(Y){return parseInt(Y)}),U=(0,ee.Z)(L,2),G=U[0],re=U[1];w=function(){return Ee()({length:G},function(ge,Ie){return Ie})},W=function(ge){return ge<0?Ee()({length:60},function(Ie,Te){return Te}):ge===G?Ee()({length:re+1},function(Ie,Te){return Te}):[]}}return{disabledHours:w,disabledMinutes:W}},M=function(v,A){var w=v.type,W=v.text,z=i.monthSetting.defineMonth||[],K=i.daySetting.defineDay||[],oe=i.daySetting.defineWeek||[],he=i[w+"Setting"][w+"Type"];return e.createElement("div",{className:"flexRow mBottom10",key:A},e.createElement(Xo,null,W),e.createElement(Qo,{border:!0,isAppendToBody:!0,value:he,data:y.fV[w],onChange:function(U){var G=s().cloneDeep(i);switch(G[w+"Setting"][w+"Type"]=U,w){case y.uK.MONTH:G.monthSetting.defineMonth=[];break;case y.uK.DAY:G.daySetting.defineDay=[],G.daySetting.defineWeek=[];break;default:G.hourSetting.rangHour=[];break}l({limitWriteTime:G})}}),he===y.Cu.SPECIFY_MONTH&&w===y.uK.MONTH&&e.createElement(ue.Z,{border:!0,isAppendToBody:!0,selectClose:!1,className:"monthDropdown",placeholder:_l("\u9009\u62E9\u6708\u4EFD"),renderTitle:function(){return s().isEmpty(z)?e.createElement("span",{className:"Gray_bd"},_l("\u9009\u62E9\u6708\u4EFD")):e.createElement("span",null,z.sort(function(U,G){return U-G}).join(", "))},data:y.gg.map(function(L,U){return{text:e.createElement(Jo,{key:U},e.createElement("span",null,L.text),s().includes(z,L.value)&&e.createElement(q.Z,{icon:"done"})),value:L.value}}),value:z.length,onChange:function(U){var G=s().includes(z,U),re=s().cloneDeep(i);re.monthSetting.defineMonth=G?s().remove(z,function(Y){return Y!==U}):[].concat((0,we.Z)(z),[U]),l({limitWriteTime:re})}}),he===y.Cu.SPECIFY_DAY&&w===y.uK.DAY&&e.createElement(No.Z,{action:["click"],popupClassName:"moreOption",popupVisible:x,onPopupVisibleChange:function(U){return P(U)},popupAlign:{points:["tl","bl"],offset:[0,1],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(qo,null,Ee()(Array(31),function(L,U){return U+1}).map(function(L){var U=s().includes(K,L);return e.createElement("div",{className:fe()("dayItem",{active:U}),onClick:function(){var re=s().cloneDeep(i);re.daySetting.defineDay=U?s().remove(K,function(Y){return Y!==L}):[].concat((0,we.Z)(K),[L]),l({limitWriteTime:re})}},L)}))},e.createElement(tr,{className:fe()({active:x})},s().isEmpty(K)?e.createElement("span",{className:"Gray_bd ellipsis InlineBlock"},_l("\u9009\u62E9\u65E5\u671F")):e.createElement("span",{className:"ellipsis InlineBlock"},K.sort(function(L,U){return L-U}).join(", ")),e.createElement("i",{className:"icon-arrow-down-border"}))),he===y.Cu.WEEKLY&&w===y.uK.DAY&&e.createElement(er,null,y.W.map(function(L,U){var G=s().includes(oe,L.value);return e.createElement("div",{key:U,className:fe()("weekItem",{active:G}),onClick:function(){var Y=s().cloneDeep(i);Y.daySetting.defineWeek=G?s().remove(oe,function(ge){return ge!==L.value}):[].concat((0,we.Z)(oe),[L.value]),l({limitWriteTime:Y})}},Be()().day(L.value).format("dd"))})),s().includes([y.Cu.SPECIFY_RANGE_MONTH,y.Cu.SPECIFY_RANGE_DAY],he)&&e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(xt,null,e.createElement(de.Z,{value:f[w].start||"",onChange:function(U){return N(U,w,"start")},onBlur:function(){return O(w)}}),e.createElement("div",{className:"rangeSuffix"},w===y.uK.MONTH?_l("\u6708"):_l("\u65E5"))),e.createElement(q.Z,{icon:"minus Gray_75 Font12 mLeft4 mRight4"}),e.createElement(xt,null,e.createElement(de.Z,{value:f[w].end||"",onChange:function(U){return N(U,w,"end")},onBlur:function(){return O(w)}}),e.createElement("div",{className:"rangeSuffix"},w===y.uK.MONTH?_l("\u6708"):_l("\u65E5")))),w===y.uK.HOUR&&he===y.Cu.SPECIFY_RANGE_HOUR&&e.createElement("div",{className:"flexColumn flex"},f[w].map(function(L,U){return e.createElement("div",{className:"flexRow alignItemsCenter "+(U!==0?"mTop10":""),key:U},e.createElement(Et,{locale:C,format:"HH:mm",showNow:!1,suffixIcon:null,disabledTime:function(){return D("start",L)},value:L.start?bt()(L.start,"HH:mm"):null,onChange:function(re,Y){return V(Y,U,"start")}}),e.createElement(q.Z,{icon:"minus Gray_75 Font12 mLeft4 mRight4"}),e.createElement(Et,{locale:C,format:"HH:mm",showNow:!1,suffixIcon:null,disabledTime:function(){return D("end",L)},value:L.end?bt()(L.end,"HH:mm"):null,onChange:function(re,Y){return V(Y,U,"end")}}),e.createElement(q.Z,{icon:U===0?"add_circle_outline":"remove_circle_outline",className:"Font15 Gray_9e mLeft10 pointer",onClick:function(){l({timeRange:Q()({},f,(0,wo.default)({},w,U===0?[].concat((0,we.Z)(f[w]),[{start:null,end:null}]):f[w].filter(function(re,Y){return Y!==U})))})}}))})))};return e.createElement(e.Fragment,null,e.createElement(Pe,{title:_l("\u6570\u636E\u6536\u96C6"),isFolded:E.dataCollect,onClick:function(){return l({titleFolded:Q()({},E,{dataCollect:!E.dataCollect})})}}),!E.dataCollect&&e.createElement("div",{className:"mLeft25"},e.createElement("div",{className:"mBottom24"},e.createElement(te,{checked:o.isEnable,onClick:function(v){return l({linkSwitchTime:{isEnable:!v,isShowCountDown:!1}})},name:_l("\u8BBE\u7F6E\u94FE\u63A5\u5F00\u59CB/\u505C\u6B62\u65F6\u95F4"),tip:_l("\u6253\u5F00\u540E\uFF0C\u586B\u5199\u8005\u53EA\u6709\u5728\u8BBE\u7F6E\u7684\u65F6\u95F4\u8303\u56F4\u5185\u586B\u5199\uFF0C\u65B9\u53EF\u6B63\u5E38\u63D0\u4EA4\u8868\u5355\u3002")}),o.isEnable&&e.createElement("div",{className:"commonMargin flexRow alignItemsCenter"},e.createElement(Yo,{showTime:!0,locale:C,value:!o.startTime||o.startTime.substr(0,4)==="0001"?null:[Be()(o.startTime),Be()(o.endTime)],onChange:function(v){l({linkSwitchTime:Q()({},o,{startTime:v?Be()(v[0]).format("YYYY-MM-DD HH:mm:ss"):"",endTime:v?Be()(v[1]).format("YYYY-MM-DD HH:mm:ss"):""})})}}),e.createElement(Le.Z,{className:"mLeft32",size:"small",checked:o.isShowCountDown,text:_l("\u663E\u793A\u5012\u8BA1\u65F6"),onClick:function(){return l({linkSwitchTime:Q()({},o,{isShowCountDown:!o.isShowCountDown})})}}))),e.createElement("div",{className:"mBottom24"},e.createElement(te,{checked:i.isEnable,onClick:function(v){var A=v?{isEnable:!v}:{isEnable:!v,monthSetting:{monthType:1},daySetting:{dayType:1},hourSetting:{hourType:1}};l({limitWriteTime:A})},name:_l("\u8BBE\u7F6E\u586B\u5199\u65F6\u6BB5"),tip:_l("\u6253\u5F00\u540E\uFF0C\u586B\u5199\u8005\u53EA\u6709\u5728\u8BBE\u7F6E\u7684\u8FD9\u4E2A\u65F6\u95F4\u6BB5\u5185\u586B\u5199\uFF0C\u65B9\u53EF\u6B63\u5E38\u63D0\u4EA4\u6570\u636E\u3002")}),i.isEnable&&e.createElement("div",{className:"commonMargin"},e.createElement("p",{className:"mBottom12"},_l("\u4EE5\u4E0B\u65F6\u6BB5\u53EF\u586B\u5199")),T.map(function(j,v){return M(j,v)}))),e.createElement("div",{className:"mBottom24"},e.createElement(te,{checked:g.isEnable,onClick:function(v){return l({limitWriteCount:{isEnable:!v}})},name:_l("\u9650\u5236\u6536\u96C6\u6570\u91CF\u4E0A\u9650"),tip:_l("\u6253\u5F00\u540E\uFF0C\u5F53\u6570\u636E\u91CF\u8FBE\u5230\u8BBE\u7F6E\u7684\u4E0A\u9650\u65F6\uFF0C\u8BE5\u8868\u5355\u5C06\u4E0D\u80FD\u7EE7\u7EED\u63D0\u4EA4\u6570\u636E\u3002")}),g.isEnable&&e.createElement("div",{className:"commonMargin"},e.createElement("span",null,_l("\u6700\u591A\u6536\u96C6")),e.createElement(de.Z,{value:g.limitWriteCount||"",className:"limitInput",onChange:function(v){(parseInt(v)||v==="")&&l({limitWriteCount:Q()({},g,{limitWriteCount:parseInt(v)})})}}),e.createElement("span",null,_l("\u6761\u6570\u636E")))),e.createElement(nr,null,e.createElement(te,{checked:!!s().get(h,"isEnable"),onClick:function(){return l({limitWriteFrequencySetting:(0,B.default)({},h,{isEnable:!s().get(h,"isEnable")})})},name:_l("\u9650\u5236\u586B\u5199\u6B21\u6570")}),!!s().get(h,"isEnable")&&e.createElement("div",{className:"commonMargin flexRow"},e.createElement(ue.Z,{border:!0,isAppendToBody:!0,selectClose:!0,className:"limitRangTypeDropdown",data:y.o9,value:s().get(h,"limitRangType"),onChange:function(v){l({limitWriteFrequencySetting:(0,B.default)({},h,{limitRangType:v})})}}),e.createElement("div",{className:"flex Relative mLeft10 limitWriteCount"},e.createElement(de.Z,{className:"w100 pRight30",value:s().get(h,"limitWriteCount")||"",onChange:function(v){(parseInt(v)||v==="")&&l({limitWriteFrequencySetting:(0,B.default)({},h,{limitWriteCount:v?parseInt(v)>1e4?1e4:parseInt(v):""})})}}),e.createElement("span",{className:"text Absolute"},_l("\u6B21"))))),e.createElement("div",{className:"mTop24"},e.createElement(te,{checked:c.isEnable,onClick:function(v){return l({limitPasswordWrite:{isEnable:!v,limitPasswordWrite:v?"":(0,Ke.ne)(4)}})},name:_l("\u51ED\u5BC6\u7801\u586B\u5199"),tip:_l("\u6253\u5F00\u540E\uFF0C\u586B\u5199\u8005\u9700\u8981\u8F93\u5165\u6B63\u786E\u7684\u5BC6\u7801\uFF0C\u65B9\u53EF\u6253\u5F00\u8868\u5355\u586B\u5199\u6570\u636E\u3002")}),c.isEnable&&e.createElement("div",{className:"commonMargin"},e.createElement(de.Z,{className:"passwordInput",placeholder:"\u8BF7\u8F93\u51654-8\u4F4D\u5BC6\u7801",value:c.limitPasswordWrite,onChange:function(v){l({limitPasswordWrite:Q()({},c,{limitPasswordWrite:v})})}})))))}var rr=u(12935),ir=(0,F.Z)([`
  .icon {
    position: unset !important;
  }
`],[`
  .icon {
    position: unset !important;
  }
`]),lr=(0,Z.ZP)(Le.Z)(ir);function yt(a){var r=a.controls,l=a.selectedFields,n=a.onChange,o=a.extendSourceId,t=a.weChatSetting,i=(0,e.useState)(""),d=(0,ee.Z)(i,2),g=d[0],p=d[1],c=r.filter(function(f){return s().includes(f.controlName.toLocaleLowerCase(),g.toLocaleLowerCase())&&!s().includes([21,26,27,48,52],f.type)&&!s().includes([o,s().get(t,"fieldMaps.openId"),s().get(t,"fieldMaps.nickName"),s().get(t,"fieldMaps.headImgUrl")],f.controlId)}),m=r.filter(function(f){return s().includes(l,f.controlId)}).length,h=[{text:e.createElement(rr.Z,{className:"searchInput",placeholder:_l("\u641C\u7D22\u5B57\u6BB5"),onChange:function(E){return p(E)}}),className:"customFieldSearch"}].concat(c.length>0?c.map(function(f){return{text:e.createElement(lr,{size:"small",checked:s().includes(l,f.controlId),text:e.createElement("span",null,e.createElement(q.Z,{icon:(0,ke.hB)(f.type,!1),className:"mRight8"}),f.controlName)}),value:f.controlId}}):[{text:g?_l("\u6682\u65E0\u641C\u7D22\u7ED3\u679C"):_l("\u6682\u65E0\u6570\u636E"),disabled:!0}]);return e.createElement(ue.Z,{border:!0,selectClose:!1,className:"customFieldDropdown",placeholder:_l("\u9009\u62E9\u5B57\u6BB5"),renderTitle:function(){return m?e.createElement("span",null,_l("\u5DF2\u9009\u62E9"+m+"\u4E2A\u5B57\u6BB5")):e.createElement("span",{className:"Gray_bd"},_l("\u9009\u62E9\u5B57\u6BB5"))},data:h,value:m,onChange:n})}function ar(a){var r=a.data,l=a.setState,n=r.needCaptcha,o=r.smsVerification,t=r.smsVerificationFiled,i=r.smsSignature,d=r.cacheDraft,g=r.cacheFieldData,p=g===void 0?{}:g,c=r.originalControls,m=c===void 0?[]:c,h=r.extendSourceId,f=r.weChatSetting,E=r.controls,I=r.titleFolded,k=(0,e.useRef)(),x=function(){return m.filter(function(C){return C.type===3}).map(function(C){var N=C.controlName,O=C.controlId;return{value:O,text:N}})},P=function(){if(!t)return null;var C=s().find(m||[],function(N){return N.controlId===t});return C?C.type===3?null:C:{controlName:_l("\u5B57\u6BB5\u5DF2\u5220\u9664")}},T=function(){Fe.Z.confirm({title:e.createElement("span",{className:"Font16 Bold"},_l("\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u7801\u7B7E\u540D")),width:480,description:e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray_9e Font12 mBottom20"},e.createElement("div",null,_l("\u81EA\u5B9A\u4E49\u7B7E\u540D\u4EC5\u652F\u6301\u56FD\u5185\u53F7\u7801")),e.createElement("div",{className:"mTop8 "},_l("\u8BF7\u8C28\u614E\u586B\u5199\u60A8\u7684\u7EC4\u7EC7\u7B80\u79F0\u3001\u7F51\u7AD9\u540D\u3001\u54C1\u724C\u540D\uFF0C2-8\u4E2A\u6C49\u5B57\u3002\u5982\u7B7E\u540D\u4E0D\u7B26\u5408\u89C4\u8303\uFF0C\u5C06\u4F1A\u88AB\u8FD0\u8425\u5546\u62E6\u622A"))),e.createElement("input",{maxLength:8,className:"ming Input w100",defaultValue:i,ref:k})),onOk:function(){if(/^[a-zA-z\u4e00-\u9fa5]{2,8}$/.test(k.current.value))l({smsSignature:k.current.value||i});else return alert(_l("\u7B7E\u540D\u9700\u8981\u63A7\u5236\u57282-8\u4E2A\u4E2D\u82F1\u6587\u5B57\u7B26"),2),!1}})};return e.createElement(e.Fragment,null,e.createElement(Pe,{title:_l("\u586B\u5199\u8BBE\u7F6E"),isFolded:I.fillSettings,onClick:function(){return l({titleFolded:Q()({},I,{fillSettings:!I.fillSettings})})}}),!I.fillSettings&&e.createElement("div",{className:"mLeft25"},e.createElement("div",{className:"mBottom24"},e.createElement("div",null,e.createElement(te,{checked:o,onClick:function(C){return l({smsVerification:!C})},name:_l("\u624B\u673A\u53F7\u77ED\u4FE1\u9A8C\u8BC1"),tip:md.global.Config.IsPlatformLocal?_l("\u5BF9\u586B\u5199\u7684\u624B\u673A\u53F7\u5B57\u6BB5\u8FDB\u884C\u77ED\u4FE1\u9A8C\u8BC1\uFF0C\u4EE5\u786E\u4FDD\u4E3A\u672C\u4EBA\u6709\u6548\u624B\u673A\u53F7\u3002\u9A8C\u8BC1\u7801\u77ED\u4FE10.05\u5143\u6BCF\u6761\uFF0C\u4ECE\u8D26\u6237\u4F59\u989D\u6263\u8D39\uFF0C\u4F59\u989D\u4E0D\u8DB3\u65F6\u65E0\u6CD5\u83B7\u53D6\u9A8C\u8BC1\u7801\u3002"):_l("\u5BF9\u586B\u5199\u7684\u624B\u673A\u53F7\u5B57\u6BB5\u8FDB\u884C\u77ED\u4FE1\u9A8C\u8BC1\uFF0C\u4EE5\u786E\u4FDD\u4E3A\u672C\u4EBA\u6709\u6548\u624B\u673A\u53F7\u3002")})),o&&e.createElement("div",{className:"codeContent"},e.createElement(ue.Z,(0,B.default)({border:!0,isAppendToBody:!0,className:fe()({deleteCode:P()}),value:t,data:x(),onChange:function(C){return l({smsVerificationFiled:C})}},P()?{renderError:function(){return e.createElement("span",{className:"Red"},(P()||{}).controlName)}}:{})),e.createElement("span",{className:"mLeft20"},e.createElement("span",{className:"Gray_9e"},_l("\u77ED\u4FE1\u7B7E\u540D\uFF1A")),e.createElement("span",null,_l("\u3010%0\u3011",i)),e.createElement("span",{className:"ThemeColor3 ThemeHoverColor2 pointer",onClick:T},_l("\u4FEE\u6539"))))),e.createElement("div",{className:"mBottom24"},e.createElement(te,{checked:n,onClick:function(C){return l({needCaptcha:!C})},name:_l("\u8868\u5355\u63D0\u4EA4\u524D\u8FDB\u884C\u56FE\u5F62\u9A8C\u8BC1"),tip:_l("\u6253\u5F00\u540E\uFF0C\u586B\u5199\u8005\u5728\u63D0\u4EA4\u6570\u636E\u524D\u9700\u8981\u8F93\u5165\u9A8C\u8BC1\u7801\uFF0C\u7528\u4E8E\u9632\u6B62\u6076\u610F\u6216\u91CD\u590D\u6570\u636E\u63D0\u4EA4\u3002")})),e.createElement("div",{className:"mBottom24"},e.createElement(te,{checked:d,onClick:function(C){return l({cacheDraft:!C})},name:_l("\u7F13\u5B58\u672A\u63D0\u4EA4\u5185\u5BB9, \u4E0B\u6B21\u81EA\u52A8\u586B\u5145"),tip:_l("\u6253\u5F00\u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230\u586B\u5199\u8005\u4E4B\u524D\u672A\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C\u586B\u5199\u8005\u53EF\u7EE7\u7EED\u586B\u5199\u8868\u5355\u3002")})),e.createElement("div",null,e.createElement(te,{checked:p.isEnable,onClick:function(C){return l({cacheFieldData:{isEnable:!C,cacheField:[]}})},name:_l("\u7F13\u5B58\u672C\u5730\u586B\u5199\u6570\u636E, \u4E0B\u6B21\u81EA\u52A8\u586B\u5145"),tip:_l("\u6253\u5F00\u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230\u586B\u5199\u8005\u4E4B\u524D\u5DF2\u63D0\u4EA4\u7684\u5185\u5BB9\uFF08\u5177\u4F53\u5230\u5B57\u6BB5\uFF09\uFF0C\u586B\u5199\u8005\u53EF\u53EA\u586B\u5199\u5269\u4F59\u5B57\u6BB5\u3002")}),p.isEnable&&e.createElement("div",{className:"commonMargin"},e.createElement(yt,{controls:m.filter(function(S){return s().includes(E.map(function(C){return C.controlId}),S.controlId)}).map(function(S){return s().pick(S,["controlId","controlName","type"])}),extendSourceId:h,weChatSetting:f,selectedFields:p.cacheField||[],onChange:function(C){var N=p.cacheField||[],O=s().includes(N,C);C&&l({cacheFieldData:Q()({},p,{cacheField:O?s().remove(N,function(V){return V!==C}):[].concat((0,we.Z)(N),[C])})})}})))))}var sr=(0,F.Z)([`
  width: 410px;
  padding: 16px;
  margin: 16px 0;
  background: #f8f8f8;
  border-radius: 6px;
  .bindText {
    color: #4caf50;
  }
`],[`
  width: 410px;
  padding: 16px;
  margin: 16px 0;
  background: #f8f8f8;
  border-radius: 6px;
  .bindText {
    color: #4caf50;
  }
`]),cr=(0,F.Z)([`
  :hover {
    color: #fff !important;
  }
  :hover .icon {
    color: #fff !important;
  }
`],[`
  :hover {
    color: #fff !important;
  }
  :hover .icon {
    color: #fff !important;
  }
`]),St=Z.ZP.div(sr),dr=Z.ZP.div(cr);function ur(a){var r=a.data,l=a.setState,n=a.projectId,o=a.addWorksheetControl,t=a.weChatBind,i=r.weChatSetting,d=r.originalControls,g=r.extendSourceId,p=r.ipControlId,c=r.browserControlId,m=r.deviceControlId,h=r.systemControlId,f=r.titleFolded,E=(0,e.useState)({visible:!1}),I=(0,ee.Z)(E,2),k=I[0],x=I[1],P=function(S,C){var N=d.filter(function(O){return(S!==y.gO.HEAD_IMG_URL&&s().includes([2,41],O.type)||S===y.gO.HEAD_IMG_URL&&O.type===14)&&!s().find(Ct()(i.fieldMaps||{}).concat([g,p,c,m,h]),function(V){return O.controlId===V})}).map(function(O){return{text:e.createElement("div",null,e.createElement(q.Z,{icon:(0,ke.hB)(O.type,!1)}),e.createElement("span",{className:"mLeft20"},O.controlName)),value:O.controlId}});return(C?[{style:{color:"#757575"},text:e.createElement("div",null,e.createElement(q.Z,{icon:"delete1"}),e.createElement("span",{className:"mLeft20"},_l("\u6E05\u9664"))),value:"clear"}]:[]).concat(N).concat(S!==y.gO.HEAD_IMG_URL?{style:{borderTop:"1px solid #ddd",paddingTop:"4px",height:"36px"},text:e.createElement(dr,{className:"hand ThemeColor3",onClick:function(){return x({visible:!0,key:S})}},e.createElement("i",{className:"icon icon-plus mRight5 ThemeColor3"}),_l("\u65B0\u5EFA\u6587\u672C\u5B57\u6BB5"))}:[])};return e.createElement(e.Fragment,null,e.createElement(Pe,{title:_l("\u5FAE\u4FE1\u8BBE\u7F6E"),isFolded:f.weChatSetting,onClick:function(){return l({titleFolded:Q()({},f,{weChatSetting:!f.weChatSetting})})}}),!f.weChatSetting&&e.createElement("div",{className:"mLeft25"},e.createElement("div",{className:"mBottom24"},e.createElement("div",null,e.createElement(te,{checked:i.isCollectWxInfo,onClick:function(S){return l({weChatSetting:{isCollectWxInfo:!S,collectChannel:2,isRequireAuth:!1,fieldMaps:{},onlyWxCollect:i.onlyWxCollect}})},name:_l("\u6536\u96C6\u586B\u5199\u8005\u5FAE\u4FE1\u4FE1\u606F")})),i.isCollectWxInfo&&e.createElement(e.Fragment,null,e.createElement("div",{className:"commonMargin"},e.createElement("p",{className:"pTop8 mBottom16"},_l("\u6536\u96C6\u6E20\u9053")),y.iw.map(function(T,S){return e.createElement(Re.Z,(0,B.default)({key:S},T,{disableTitle:!0,checked:T.value===i.collectChannel,onClick:function(){return l({weChatSetting:Q()({},i,{collectChannel:T.value,isRequireAuth:T.value===2&&!t.isBind?!1:i.isRequireAuth})})}}))}),i.collectChannel===2&&(t.isBind?e.createElement(St,null,e.createElement("span",null,t.name),e.createElement("span",{className:"bindText mLeft8"},_l("\u5B98\u65B9\u8BA4\u8BC1\u670D\u52A1\u53F7"))):e.createElement(St,null,e.createElement("span",{className:"Gray_9e"},_l("\u6682\u672A\u7ED1\u5B9A\u8BA4\u8BC1\u7684\u670D\u52A1\u53F7, \u8BF7\u524D\u5F80")),e.createElement("a",{className:"ThemeColor pointer",href:"/admin/weixin/"+n,target:"_blank"},_l("\u7EC4\u7EC7\u540E\u53F0")),e.createElement("span",{className:"Gray_9e"},_l("\u6DFB\u52A0\u5FAE\u4FE1\u670D\u52A1\u53F7")))),e.createElement("p",{className:"mTop24 mBottom16"},_l("\u83B7\u53D6\u586B\u5199\u4FE1\u606F")),y.XQ.map(function(T,S){return e.createElement(Re.Z,(0,B.default)({key:S},T,{disableTitle:!0,disabled:i.collectChannel===2&&!t.isBind&&S===1,checked:T.value===i.isRequireAuth,onClick:function(){return l({weChatSetting:Q()({},i,{isRequireAuth:T.value})})}}))}),e.createElement("div",{className:"mappingSection"},y.bG.filter(function(T){return i.isRequireAuth||T.key===y.gO.OPEN_ID}).map(function(T){var S=(i.fieldMaps||{})[T.key],C=d.filter(function(N){return N.controlId===S})[0];return e.createElement("div",{className:"flexRow mBottom10 alignItemsCenter",key:T.key},e.createElement("div",{className:"flex"},e.createElement("div",{className:"fieldText"},T.name,T.required&&e.createElement("span",{className:"Red bold"},"*"))),e.createElement(q.Z,{icon:"arrow_forward",className:"Font16 ThemeColor mLeft16 mRight16"}),e.createElement(ue.Z,{border:!0,isAppendToBody:!0,className:"flex minWidth0",value:S,data:P(T.key,!!S),onChange:function(O){var V=s().cloneDeep(i.fieldMaps);V[T.key]=O==="clear"?"":O,l({weChatSetting:Q()({},i,{fieldMaps:V})})},renderTitle:function(){return C?e.createElement(e.Fragment,null,e.createElement(q.Z,{icon:(0,ke.hB)(C.type,!1),className:"Gray_9e Font14"}),e.createElement("span",{className:"mLeft10"},C.controlName)):e.createElement("span",{className:"Gray_bd"},_l("\u8BF7\u9009\u62E9"))}}))}))))),e.createElement("div",null,e.createElement(te,{checked:i.onlyWxCollect,onClick:function(S){return l({weChatSetting:Q()({},i,{onlyWxCollect:!S})})},name:_l("\u53EA\u5141\u8BB8\u5728\u5FAE\u4FE1\u4E2D\u586B\u5199"),tip:_l("\u6253\u5F00\u540E\uFF0C\u586B\u5199\u8005\u53EA\u80FD\u5728\u5FAE\u4FE1\u73AF\u5883\u5185\u586B\u5199\u8868\u5355\u3002")}))),k.visible&&e.createElement(Ye,{defaultText:"",onOk:function(S){o(S,function(C){var N=s().cloneDeep(i.fieldMaps);N[k.key]=C.controlId,l({weChatSetting:Q()({},i,{fieldMaps:N})})})},onClose:function(){return x({visible:!1})}}))}var pr=(0,F.Z)([`
  width: 50px;
  height: 32px !important;
`],[`
  width: 50px;
  height: 32px !important;
`]),mr=(0,Z.ZP)(de.Z)(pr),He=!0;function fr(a){var r=a.data,l=a.setState,n=r.abilityExpand,o=r.originalControls,t=r.writeScope,i=r.weChatSetting,d=r.extendSourceId,g=r.controls,p=r.titleFolded;return(0,e.useEffect)(function(){if(t===1&&!i.isCollectWxInfo){var c=s().cloneDeep(n);c={autoFillField:{isAutoFillField:!1,autoFillFields:[]},allowViewChange:{isAllowViewChange:!1,switchViewChange:1}},!He&&l({abilityExpand:c})}},[t,i.isCollectWxInfo]),(0,e.useEffect)(function(){return He&&(He=!1),function(){He=!0}},[]),e.createElement(e.Fragment,null,e.createElement(Pe,{className:"mBottom12",title:_l("\u529F\u80FD\u589E\u5F3A"),isFolded:p.abilityExpand,onClick:function(){return l({titleFolded:Q()({},p,{abilityExpand:!p.abilityExpand})})}}),!p.abilityExpand&&e.createElement("div",{className:"mLeft25"},e.createElement("p",{className:"Gray_75 mBottom24"},_l('\u5F53\u542F\u7528"\u6536\u96C6\u586B\u5199\u8005\u5FAE\u4FE1\u4FE1\u606F"\uFF0C\u6216\u586B\u5199\u8303\u56F4\u4E3A"\u5E73\u53F0/\u672C\u7EC4\u7EC7\u7528\u6237"\u65F6\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u589E\u5F3A\u529F\u80FD')),e.createElement("div",{className:"mBottom24"},e.createElement("div",null,e.createElement(te,{disabled:t===1&&!i.isCollectWxInfo,checked:s().get(n,"autoFillField.isAutoFillField"),onClick:function(m){var h=s().cloneDeep(n);h.autoFillField={isAutoFillField:!m,autoFillFields:[]},l({abilityExpand:h})},name:_l("\u83B7\u53D6\u586B\u5199\u8005\u4E0A\u6B21\u63D0\u4EA4\u5185\u5BB9\uFF0C\u5E76\u81EA\u52A8\u586B\u5145")})),s().get(n,"autoFillField.isAutoFillField")&&e.createElement("div",{className:"commonMargin"},e.createElement("p",{className:"mBottom8 mTop16"},_l("\u81EA\u52A8\u586B\u5145")),e.createElement(yt,{controls:o.filter(function(c){return s().includes(g.map(function(m){return m.controlId}),c.controlId)}).map(function(c){return s().pick(c,["controlId","controlName","type"])}),extendSourceId:d,weChatSetting:i,selectedFields:s().get(n,"autoFillField.autoFillFields")||[],onChange:function(m){var h=s().get(n,"autoFillField.autoFillFields")||[],f=s().includes(h,m),E=s().cloneDeep(n);E.autoFillField.autoFillFields=f?s().remove(h,function(I){return I!==m}):[].concat((0,we.Z)(h),[m]),m&&l({abilityExpand:E})}}))),e.createElement("div",null,e.createElement(te,{disabled:t===1&&!i.isCollectWxInfo,checked:s().get(n,"allowViewChange.isAllowViewChange"),onClick:function(m){var h=s().cloneDeep(n);h.allowViewChange={isAllowViewChange:!m,switchViewChange:1},l({abilityExpand:h})},name:_l("\u63D0\u4EA4\u540E\u5141\u8BB8\u67E5\u770B/\u4FEE\u6539"),tip:_l("\u6253\u5F00\u540E\uFF0C\u62E5\u6709\u5E73\u53F0\u8D26\u53F7\u7684\u586B\u5199\u8005\u53EF\u4EE5\u518D\u6B21\u8FDB\u5165\u8868\u5355\u67E5\u770B/\u4FEE\u6539\uFF0C\u8BF7\u6CE8\u610F\u5982\u679C\u8868\u5355\u5DF2\u505C\u6B62\u6536\u96C6\u6570\u636E\uFF0C\u5C06\u4E0D\u80FD\u8FDB\u884C\u6570\u636E\u4FEE\u6539")}),s().get(n,"allowViewChange.isAllowViewChange")&&e.createElement("div",{className:"commonMargin"},y.ZZ.map(function(c,m){return e.createElement(Re.Z,(0,B.default)({key:m},c,{disableTitle:!0,checked:c.value===s().get(n,"allowViewChange.switchViewChange"),onClick:function(){var f=s().cloneDeep(n);f.allowViewChange.switchViewChange=c.value,f.allowViewChange.changeSetting=c.value===2?{changeType:1}:{},l({abilityExpand:f})}}))}),s().get(n,"allowViewChange.switchViewChange")===2&&e.createElement("div",{className:"flexRow alignItemsCenter mTop16"},e.createElement("span",null,_l("\u4FEE\u6539\u65F6\u6548\uFF1A")),e.createElement(ue.Z,{border:!0,className:"effectiveTimeDropdown",value:s().get(n,["allowViewChange","changeSetting","changeType"]),data:[{text:_l("\u59CB\u7EC8\u5141\u8BB8\u4FEE\u6539"),value:1},{text:_l("\u4E00\u6BB5\u65F6\u95F4\u5185\u53EF\u4FEE\u6539"),value:2}],onChange:function(m){var h=s().cloneDeep(n);h.allowViewChange.changeSetting.changeType=m,l({abilityExpand:h})}}),s().get(n,["allowViewChange","changeSetting","changeType"])===2&&e.createElement("div",{className:"mLeft10"},e.createElement(mr,{value:s().get(n,["allowViewChange","changeSetting","expireTime"])||"",onChange:function(m){if(parseInt(m)||m===""){var h=s().cloneDeep(n),f=parseInt(m)?parseInt(m)<1?1:parseInt(m):"";h.allowViewChange.changeSetting.expireTime=f,l({abilityExpand:h})}}}),e.createElement("span",{className:"mLeft8"},_l("\u5C0F\u65F6"))))))))}var hr=u(28829),Jr,qr,R,wt,kt,gr=(0,F.Z)([`
  width: 250px;
  .ming.Menu.List {
    width: 250px;
  }
`],[`
  width: 250px;
  .ming.Menu.List {
    width: 250px;
  }
`]),Cr=(0,F.Z)([`
  :hover {
    color: #fff !important;
  }
  :hover .icon {
    color: #fff !important;
  }
`],[`
  :hover {
    color: #fff !important;
  }
  :hover .icon {
    color: #fff !important;
  }
`]);function pe(a,r,l,n,o){var t={};return Object.keys(n).forEach(function(i){t[i]=n[i]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=l.slice().reverse().reduce(function(i,d){return d(a,r,i)||i},t),o&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(o):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(a,r,t),t=null),t}var It=(0,Z.ZP)(ue.Z)(gr),vr=Z.ZP.div(Cr),br={ipControlId:_l("IP\u5730\u5740"),browserControlId:_l("\u6D4F\u89C8\u5668"),deviceControlId:_l("\u8BBE\u5907"),systemControlId:_l("\u7CFB\u7EDF"),extendSourceId:_l("\u6269\u5C55\u503C")},xr=(R=(kt=wt=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l)),o=l.worksheetSettings;return n.cacheSettings=l.worksheetSettings,n.state=(0,B.default)({addControlVisible:!1,activeTab:1,sourceKeys:o.extends||[],isEditing:!1,daySelectPopupVisible:!1,mappingDialogVisible:!1,confirmDialog:{visible:!1},fieldSearchKeyWords:"",weChatBind:{isBind:!1},titleFolded:{writeScope:!1,dataCollect:!1,fillSetting:!1,weChatSetting:!1,abilityExpand:!1,receipt:!1}},s().pick(o,["limitWriteFrequencySetting","ipControlId","browserControlId","deviceControlId","systemControlId","receipt","needCaptcha","smsVerificationFiled","extendSourceId","smsVerification","writeScope","linkSwitchTime","limitWriteTime","limitWriteCount","limitPasswordWrite","cacheDraft","cacheFieldData","weChatSetting","abilityExpand"]),{smsSignature:o.smsSignature||"",timeRange:n.getTimeRange(o),settingChanged:!1}),n}return(0,ae.default)(r,[{key:"componentDidMount",value:function(){var n=this,o=this.props.worksheetInfo,t=o===void 0?{}:o;hr.Z.getWeiXinBindingInfo({projectId:t.projectId}).then(function(i){return n.setState({weChatBind:{isBind:i&&i.length,name:(i[0]||{}).nickName}})})}},{key:"getTimeRange",value:function(n){var o=s().get(n,"limitWriteTime"),t=o.monthSetting,i=t===void 0?{}:t,d=o.daySetting,g=d===void 0?{}:d,p=o.hourSetting,c=p===void 0?{}:p,m=i.defineMonth,h=m===void 0?[]:m,f=i.monthType,E=g.defineDay,I=E===void 0?[]:E,k=g.dayType,x=c.rangHour,P=x===void 0?[]:x,T=c.hourType,S={month:f===y.Cu.SPECIFY_RANGE_MONTH?{start:h[0],end:h[h.length-1]}:{start:null,end:null},day:k===y.Cu.SPECIFY_RANGE_DAY?{start:I[0],end:I[I.length-1]}:{start:null,end:null},hour:T===y.Cu.SPECIFY_RANGE_HOUR?P.map(function(C){return{start:C.split("-")[0],end:C.split("-")[1]}}):[{start:null,end:null}]};return S}},{key:"resetInitState",value:function(){var n=this.cacheSettings;this.setState((0,B.default)({},s().pick(n,["limitWriteFrequencySetting","receipt","needCaptcha","smsVerificationFiled","smsVerification","writeScope","linkSwitchTime","limitWriteTime","limitWriteCount","limitPasswordWrite","cacheDraft","cacheFieldData","weChatSetting","abilityExpand"]),{smsSignature:n.smsSignature||"",timeRange:this.getTimeRange(n)}))}},{key:"getChangedIds",value:function(){var n=this.props.worksheetSettings,o=this.state,t=o.ipControlId,i=o.browserControlId,d=o.deviceControlId,g=o.systemControlId,p=o.extendSourceId,c=s().uniqBy([n.ipControlId,n.browserControlId,n.deviceControlId,n.systemControlId,n.extendSourceId].filter(s().identity));return c.filter(function(m){return[t,i,d,g,p].indexOf(m)<0})}},{key:"validateConfigData",value:function(){var n=this.props.originalControls,o=n===void 0?[]:n,t=this.state,i=t.linkSwitchTime,d=t.limitWriteTime,g=t.timeRange,p=t.limitWriteCount,c=t.limitPasswordWrite,m=t.limitWriteFrequencySetting,h=t.cacheFieldData,f=t.weChatSetting,E=t.abilityExpand;if(i.isEnable&&(!i.startTime||i.startTime.substr(0,4)==="0001"))return alert(_l("\u5DF2\u5F00\u542F\u94FE\u63A5\u65F6\u95F4\u8BBE\u7F6E\uFF0C\u4F46\u672A\u9009\u62E9\u5F00\u59CB/\u505C\u6B62\u65F6\u95F4"),3),!1;if(d.isEnable){var I=d.monthSetting.monthType,k=d.daySetting.dayType,x=d.hourSetting.hourType;if(I!==y.Cu.MONTHLY&&s().isEmpty(d.monthSetting.defineMonth))return alert(I===y.Cu.SPECIFY_RANGE_MONTH?_l("\u8BF7\u5B8C\u6574\u586B\u5199\u6708\u4EFD\u6307\u5B9A\u8303\u56F4"):_l("\u8BF7\u9009\u62E9\u6307\u5B9A\u6708\u4EFD"),3),!1;if(k!==y.Cu.DAILY){if(k===y.Cu.WEEKLY){if(s().isEmpty(d.daySetting.defineWeek))return alert(_l("\u8BF7\u9009\u62E9\u6307\u5B9A\u661F\u671F"),3),!1}else if(s().isEmpty(d.daySetting.defineDay))return alert(k===y.Cu.SPECIFY_RANGE_DAY?_l("\u8BF7\u5B8C\u6574\u586B\u5199\u65E5\u671F\u6307\u5B9A\u8303\u56F4"):_l("\u8BF7\u9009\u62E9\u6307\u5B9A\u65E5\u671F"),3),!1}if(x===y.Cu.SPECIFY_RANGE_HOUR){var P=g[y.uK.HOUR].filter(function(D){return D.start&&D.end}).length===0;if(P)return alert(_l("\u8BF7\u81F3\u5C11\u5B8C\u6574\u586B\u5199\u4E00\u4E2A\u65F6\u95F4\u6307\u5B9A\u8303\u56F4"),3),!1;var T=g[y.uK.HOUR].filter(function(D){return D.start&&D.end}).map(function(D){return D.start+"-"+D.end}),S=d;S.hourSetting.rangHour=T,this.setState({limitWriteTime:S})}}if(p.isEnable&&!p.limitWriteCount)return alert(_l("\u8BF7\u586B\u5199\u6536\u96C6\u6570\u91CF\u4E0A\u9650"),3),!1;if(c.isEnable){if(!c.limitPasswordWrite)return alert(_l("\u5DF2\u5F00\u542F\u51ED\u5BC6\u7801\u586B\u5199\uFF0C\u8BF7\u8BBE\u7F6E\u5BC6\u7801"),3),!1;if(!/^\w{4,8}$/.test(c.limitPasswordWrite))return alert(_l("\u5BC6\u7801\u5FC5\u987B\u4E3A4-8\u4F4D\u7684\u82F1\u6587\u6216\u6570\u5B57"),3),!1}if(h.isEnable){var C=h.cacheField||[],N=o.filter(function(D){return s().includes(C,D.controlId)}).length;if(!C.length||!N)return alert(_l("\u5DF2\u5F00\u542F\u672C\u5730\u586B\u5199\u6570\u636E\u7F13\u5B58\uFF0C\u8BF7\u9009\u62E9\u9700\u8981\u7F13\u5B58\u7684\u5B57\u6BB5"),3),!1}if(f.isCollectWxInfo){if(s().isEmpty(f.fieldMaps)||!f.fieldMaps[y.gO.OPEN_ID])return alert(_l("\u5FAE\u4FE1OpenID\u4E0D\u80FD\u4E3A\u7A7A"),3),!1;if(f.collectChannel===2&&!this.state.weChatBind.isBind)return alert(_l("\u5FAE\u4FE1\u767B\u5F55\u5FC5\u987B\u7ED1\u5B9A\u5FAE\u4FE1\u516C\u4F17\u53F7"),2),!1}if(E.autoFillField.isAutoFillField){var O=E.autoFillField.autoFillFields||[],V=o.filter(function(D){return s().includes(O,D.controlId)}).length;if(!O.length||!V)return alert(_l("\u8BF7\u9009\u62E9\u81EA\u52A8\u586B\u5145\u5B57\u6BB5"),3),!1}return E.allowViewChange.isAllowViewChange&&E.allowViewChange.changeSetting&&E.allowViewChange.changeSetting.changeType===2&&!E.allowViewChange.changeSetting.expireTime?(alert(_l("\u8BF7\u586B\u5199\u4FEE\u6539\u65F6\u6548"),3),!1):!0}},{key:"saveSetting",value:function(){var n=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){},t=this.state,i=t.limitWriteFrequencySetting,d=t.ipControlId,g=t.browserControlId,p=t.deviceControlId,c=t.systemControlId,m=t.receipt,h=t.extendSourceId,f=t.sourceKeys,E=t.needCaptcha,I=t.smsVerification,k=t.smsVerificationFiled,x=t.smsSignature,P=t.writeScope,T=t.linkSwitchTime,S=t.limitWriteTime,C=t.limitWriteCount,N=t.limitPasswordWrite,O=t.cacheDraft,V=t.cacheFieldData,D=t.weChatSetting,M=t.abilityExpand,j=this.props,v=j.updateSettings,A=j.hideControl,w=j.onClose,W=this.getChangedIds();W&&W.length&&A(W);var z=D.isRequireAuth?D:Q()({},D,{fieldMaps:s().pick(D.fieldMaps,[y.gO.OPEN_ID])}),K={limitWriteFrequencySetting:i,ipControlId:d,browserControlId:g,deviceControlId:p,systemControlId:c,receipt:m,extendSourceId:h,needCaptcha:E,smsVerification:I,smsVerificationFiled:k,smsSignature:x,extends:f,writeScope:P,linkSwitchTime:T,limitWriteTime:S,limitWriteCount:C,limitPasswordWrite:N,cacheDraft:O,cacheFieldData:V,weChatSetting:z,abilityExpand:M};v(K,function(oe){oe&&(o(),n.cacheSettings=K)})}},{key:"handleChange",value:function(n,o){var t=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},d={};d[n]=o,this.setState(d,function(){i(),t.saveSetting()})}},{key:"handleLinkSettingChange",value:function(n){this.setState((0,B.default)({},n,{settingChanged:!0}))}},{key:"handleGenUrl",value:function(){var n=this,o=this.state.sourceKeys;if(this.keyinput.value.trim()===""){alert(_l("\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A"),3);return}this.handleChange("sourceKeys",vt()(o,{$push:[this.keyinput.value]}),function(){n.keyinput.value=""})}},{key:"handleRemoveUrl",value:function(n){var o=this.state.sourceKeys;this.handleChange("sourceKeys",vt()(o,{$splice:[[n,1]]}))}},{key:"handleShowControl",value:function(n){this.setState({addControlVisible:!0,activeSourceKey:n})}},{key:"handleAddControl",value:function(n){var o=this,t=this.props.addWorksheetControl,i=this.state.activeSourceKey;t(n,function(d){i&&(o.handleChange(i,d.controlId),o.setState({activeSourceKey:void 0}))})}},{key:"getIframeHtml",value:function(){return'<iframe width="100%" height="100%" style="border: none; margin: 0; padding: 0;" src="'+this.props.shareUrl+'"></iframe>'}},{key:"getDropdownControls",value:function(n){var o=this,t=this.props.originalControls,i=this.state,d=i.extendSourceId,g=i.ipControlId,p=i.browserControlId,c=i.deviceControlId,m=i.systemControlId,h=i.weChatSetting;return[{style:{color:"#757575"},text:e.createElement("span",null,_l("\u6E05\u9664")),value:"clear"}].concat(t.filter(function(f){var E=Ct()(h.fieldMaps||{});return f.type===2&&(!s().find([d,g,p,c,m].concat(E),function(I){return f.controlId===I})||f.controlId===o.state[n])}).map(function(f){return{text:e.createElement("span",null,f.controlName),value:f.controlId}})).concat({style:{borderTop:"1px solid #ddd",paddingTop:"4px",height:"36px"},text:e.createElement(vr,{className:"hand ThemeColor3",onClick:function(){return o.handleShowControl(n)}},e.createElement("i",{className:"icon icon-plus mRight5 ThemeColor3"}),_l("\u65B0\u5EFA\u6587\u672C\u5B57\u6BB5"))})}},{key:"render",value:function(){var n=this,o=this.props,t=o.onClose,i=o.shareUrl,d=o.originalControls,g=d===void 0?[]:d,p=o.addWorksheetControl,c=o.controls,m=this.state,h=m.addControlVisible,f=m.activeTab,E=m.sourceKeys,I=m.receipt,k=m.extendSourceId,x=m.activeSourceKey,P=m.ipControlId,T=m.browserControlId,S=m.deviceControlId,C=m.systemControlId,N=m.writeScope,O=m.weChatSetting,V=O===void 0?{}:O,D=m.abilityExpand,M=D===void 0?{}:D,j=m.confirmDialog,v=m.titleFolded,A=m.settingChanged;return e.createElement(mo.Z,{width:640,className:"publicConfigSettingDrawer",title:_l("\u53D1\u5E03\u8BBE\u7F6E"),placement:"right",visible:!0,closeIcon:e.createElement("i",{className:"icon-close Font18"}),onClose:function(){A?n.setState({confirmDialog:{visible:!0,isOnClose:!0}}):t()}},e.createElement(fo.Z,{className:"headerTab",tabs:y.k0,active:f,tabStyle:{lineHeight:"34px"},onChange:function(W){f===1&&A?n.setState({confirmDialog:{visible:!0,tabValue:W.value}}):n.setState({activeTab:W.value})}}),e.createElement("div",{className:"settingContent"},f===1&&e.createElement(e.Fragment,null,e.createElement(Pe,{title:_l("\u586B\u5199\u4EBA\u7FA4"),isFolded:v.writeScope,onClick:function(){n.handleLinkSettingChange({titleFolded:Q()({},v,{writeScope:!v.writeScope})})}}),!v.writeScope&&e.createElement("div",{className:"mLeft25"},y.DM.map(function(w,W){return e.createElement(Re.Z,(0,B.default)({key:W},w,{disableTitle:!0,checked:w.value===N,onClick:function(){return n.handleLinkSettingChange({writeScope:w.value})}}))})),e.createElement(or,{data:s().pick(this.state,["linkSwitchTime","limitWriteTime","limitWriteCount","limitPasswordWrite","limitWriteFrequencySetting","timeRange","titleFolded"]),setState:this.handleLinkSettingChange}),e.createElement(ar,{data:(0,B.default)({},s().pick(this.state,["needCaptcha","smsVerification","smsVerificationFiled","smsSignature","cacheDraft","cacheFieldData","extendSourceId","titleFolded","weChatSetting"]),{originalControls:g,controls:c}),setState:this.handleLinkSettingChange}),!md.global.SysSettings.hideWeixin&&e.createElement(ur,{projectId:this.props.worksheetInfo.projectId,data:{weChatSetting:V,originalControls:g,writeScope:N,extendSourceId:k,ipControlId:P,browserControlId:T,deviceControlId:S,systemControlId:C,titleFolded:v},weChatBind:this.state.weChatBind,setState:this.handleLinkSettingChange,addWorksheetControl:p}),!md.global.SysSettings.hideWeixin&&e.createElement(fr,{data:{abilityExpand:M,originalControls:g,writeScope:N,weChatSetting:V,extendSourceId:k,controls:c,titleFolded:v},setState:this.handleLinkSettingChange}),e.createElement(Pe,{className:"mBottom16",title:_l("\u8868\u5355\u586B\u5199\u6210\u529F\u56DE\u6267"),isFolded:v.receipt,onClick:function(){n.handleLinkSettingChange({titleFolded:Q()({},v,{receipt:!v.receipt})})}}),!v.receipt&&e.createElement("div",{className:"mLeft25"},e.createElement(Xe.Z,{maxWidth:580,maxHeight:600,dropdownPanelPosition:{left:"0px",right:"initial"},data:I||"",onSave:function(W){return n.setState({receipt:W})}}))),f===2&&e.createElement(e.Fragment,null,e.createElement(H.H1,null,_l("\u6269\u5C55\u53C2\u6570")),e.createElement(H.HP,null,_l("\u4E3A\u94FE\u63A5\u5730\u5740\u6DFB\u52A0\u6269\u5C55\u503C\uFF0C\u5E76\u5C06\u6269\u5C55\u503C\u8BB0\u5F55\u5230\u5DE5\u4F5C\u8868\u5B57\u6BB5\uFF08\u6587\u672C\u5B57\u6BB5\uFF09\u4E2D\u3002\u5982\uFF1A\u8868\u5355\u5C06\u4F1A\u88AB\u53D1\u5E03\u5230N\u4E2A\u6E20\u9053\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6EN\u4E2A\u5E26\u6709\u5BF9\u5E94\u6269\u5C55\u503C\u7684\u8868\u5355\u94FE\u63A5\u8FDB\u884C\u53D1\u5E03\uFF0C\u6765\u6807\u8BC6\u6536\u96C6\u5230\u7684\u6570\u636E\u7684\u6765\u6E90\u6E20\u9053\u3002")),e.createElement(H.H3,null,_l("\u9009\u62E9\u8BB0\u5F55\u6269\u5C55\u503C\u7684\u6587\u672C\u5B57\u6BB5")),e.createElement(It,{isAppendToBody:!0,border:!0,value:k,renderTitle:function(W){return W?W.text:e.createElement(H.lP,null,_l("\u8BF7\u9009\u62E9..."))},data:this.getDropdownControls("extendSourceId"),onChange:function(W){return n.handleChange("extendSourceId",W==="clear"?"":W)}}),e.createElement(H.H3,null,_l("\u751F\u6210\u5730\u5740")),e.createElement(H.HP,{className:"mBottom10"},_l("\u53EF\u4EE5\u5728\u4E0B\u65B9\u8F93\u5165\u751F\u6210\u5E26\u6269\u5C55\u503C\u7684\u94FE\u63A5\u3002\u6216\u81EA\u5DF1\u62FC\u63A5\u6269\u5C55\u503C\uFF0C\u62FC\u63A5\u65B9\u6CD5https://......?source=\u5FAE\u535A\u3002https://...\u4E3A\u516C\u5F00\u8868\u5355\u94FE\u63A5\uFF0C\u5FAE\u535A\u4E3A\u8BBE\u7F6E\u7684\u6269\u5C55\u503C")),e.createElement("input",{className:"ming Input",id:"publicConfig_extendInput",ref:function(W){return n.keyinput=W},placeholder:_l("\u8F93\u5165\u53C2\u6570"),style:{width:250,verticalAlign:"middle"}}),e.createElement(Ce.ZP,{className:"mLeft10",onClick:this.handleGenUrl},_l("\u751F\u6210\u5730\u5740")),e.createElement("div",{className:"mTop16"}),e.createElement(So,{sourceKeys:E,url:i,onDelete:this.handleRemoveUrl}),e.createElement(H.Hr,null),e.createElement(H.H1,null,_l("\u8BBE\u5907\u4FE1\u606F")),e.createElement(H.HP,null,_l("\u5C06\u7528\u6237\u586B\u5199\u8868\u5355\u65F6\u7684IP\u5730\u5740\u3001\u6D4F\u89C8\u5668\u3001\u586B\u5199\u8BBE\u5907\u3001\u64CD\u4F5C\u7CFB\u7EDF\u8BB0\u5F55\u5230\u5DE5\u4F5C\u8868\u5B57\u6BB5\u4E2D\uFF08\u6587\u672C\u5B57\u6BB5\uFF09\u3002")),e.createElement(H.H3,null,_l("\u9009\u62E9\u8BB0\u5F55\u8BBE\u5907\u4FE1\u606F\u7684\u6587\u672C\u5B57\u6BB5")),[{name:_l("IP\u5730\u5740"),key:"ipControlId"},{name:_l("\u6D4F\u89C8\u5668"),key:"browserControlId"},{name:_l("\u8BBE\u5907"),key:"deviceControlId"},{name:_l("\u7CFB\u7EDF"),key:"systemControlId"}].map(function(w,W){return e.createElement(e.Fragment,null,e.createElement("div",{className:"mBottom8"},w.name),e.createElement(It,{isAppendToBody:!0,className:"mBottom10",border:!0,value:n.state[w.key],renderTitle:function(K){return K?K.text:e.createElement(H.lP,null,_l("\u8BF7\u9009\u62E9..."))},data:n.getDropdownControls(w.key),onChange:function(K){n.handleChange(w.key,K==="clear"?"":K)}}))})),f===3&&e.createElement(e.Fragment,null,e.createElement(H.H3,null,_l("\u5D4C\u5165\u4EE3\u7801")),e.createElement(H.ot,{color:"#757575",className:"Font14"},this.getIframeHtml()),e.createElement("div",{className:"TxtRight mTop35"},e.createElement(vo(),{component:"span","data-clipboard-text":this.getIframeHtml(),onSuccess:function(){return alert(_l("\u590D\u5236\u6210\u529F"))}},e.createElement(Ce.ZP,null,_l("\u590D\u5236")))))),f===1&&e.createElement("div",{className:"footer flexRow"},e.createElement("div",{className:"flex"},e.createElement(Ce.ZP,{type:"primary",onClick:function(){n.validateConfigData()&&n.saveSetting(function(){t(),alert("\u4FDD\u5B58\u6210\u529F")})}},_l("\u4FDD\u5B58\u8BBE\u7F6E")),e.createElement(Ce.ZP,{type:"link",onClick:t},_l("\u53D6\u6D88")))),h&&e.createElement(Ye,{defaultText:br[x]||"",onOk:this.handleAddControl,onClose:function(){n.setState({addControlVisible:!1})}}),j.visible&&e.createElement(Fe.Z,{visible:!0,title:_l("\u662F\u5426\u4FDD\u5B58\u94FE\u63A5\u8BBE\u7F6E\u7684\u66F4\u6539\uFF1F"),description:_l("\u5F53\u524D\u6709\u5C1A\u672A\u4FDD\u5B58\u7684\u66F4\u6539\uFF0C\u4F60\u5728\u79BB\u5F00\u9875\u9762\u524D\u662F\u5426\u9700\u8981\u4FDD\u5B58\u8FD9\u4E9B\u66F4\u6539\uFF1F"),cancelText:_l("\u5426"),okText:_l("\u662F%25028"),handleClose:function(){return n.setState({confirmDialog:{visible:!1}})},onCancel:function(W){W||(n.resetInitState(),j.isOnClose?(n.setState({confirmDialog:{visible:!1}}),t()):n.setState({activeTab:j.tabValue,confirmDialog:{visible:!1}}))},onOk:function(){n.validateConfigData()?n.saveSetting(function(){j.isOnClose?(n.setState({confirmDialog:{visible:!1}}),t(),alert("\u4FDD\u5B58\u6210\u529F")):n.setState({activeTab:j.tabValue,confirmDialog:{visible:!1}})}):n.setState({confirmDialog:{visible:!1}})}}))}}]),r}(e.Component),wt.propTypes={originalControls:b().arrayOf(b().shape({})),worksheetSettings:b().shape({}),shareUrl:b().string,onClose:b().func,addWorksheetControl:b().func,updateSettings:b().func,refreshShareUrl:b().func,hideControl:b().func},kt),pe(R.prototype,"getTimeRange",[J.Nj],X()(R.prototype,"getTimeRange"),R.prototype),pe(R.prototype,"resetInitState",[J.Nj],X()(R.prototype,"resetInitState"),R.prototype),pe(R.prototype,"validateConfigData",[J.Nj],X()(R.prototype,"validateConfigData"),R.prototype),pe(R.prototype,"saveSetting",[J.Nj],X()(R.prototype,"saveSetting"),R.prototype),pe(R.prototype,"handleChange",[J.Nj],X()(R.prototype,"handleChange"),R.prototype),pe(R.prototype,"handleLinkSettingChange",[J.Nj],X()(R.prototype,"handleLinkSettingChange"),R.prototype),pe(R.prototype,"handleGenUrl",[J.Nj],X()(R.prototype,"handleGenUrl"),R.prototype),pe(R.prototype,"handleRemoveUrl",[J.Nj],X()(R.prototype,"handleRemoveUrl"),R.prototype),pe(R.prototype,"handleShowControl",[J.Nj],X()(R.prototype,"handleShowControl"),R.prototype),pe(R.prototype,"handleAddControl",[J.Nj],X()(R.prototype,"handleAddControl"),R.prototype),R),Er=function(r){return(0,B.default)({},s().pick(r.publicWorksheet,["loading","shareUrl","originalControls","controls","hidedControlIds","worksheetSettings","worksheetInfo"]))},yr=function(r){return(0,Ze.DE)(Se,r)};const Sr=(0,We.$j)(Er,yr)(xr);var ei,ti,ye,Tt,Nt,wr=(0,F.Z)([`
  cursor: pointer;
  font-weight: 700;
  margin: 16px 0 0;
  display: inline-block;
  font-size: 13px;
  width: 74px;
  text-align: center;
  line-height: 32px;
  color: #2196f3;
  background: #e3f2ff;
  border-radius: 32px;
  &:hover {
    color: #1c80d0;
    background: #d6edff;
  }
`],[`
  cursor: pointer;
  font-weight: 700;
  margin: 16px 0 0;
  display: inline-block;
  font-size: 13px;
  width: 74px;
  text-align: center;
  line-height: 32px;
  color: #2196f3;
  background: #e3f2ff;
  border-radius: 32px;
  &:hover {
    color: #1c80d0;
    background: #d6edff;
  }
`]),kr=(0,F.Z)([`
  .customShareUrl > :nth-last-child(1) {
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .customShareUrl {
    .text {
      line-height: initial;
    }
  }
`],[`
  .customShareUrl > :nth-last-child(1) {
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .customShareUrl {
    .text {
      line-height: initial;
    }
  }
`]),Ir=(0,F.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .publishUrlSwitch {
    transform: scale(0.8) translate(6px);
  }
`],[`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .publishUrlSwitch {
    transform: scale(0.8) translate(6px);
  }
`]);function Pt(a,r,l,n,o){var t={};return Object.keys(n).forEach(function(i){t[i]=n[i]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=l.slice().reverse().reduce(function(i,d){return d(a,r,i)||i},t),o&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(o):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(a,r,t),t=null),t}var Tr=Z.ZP.span(wr),Nr=Z.ZP.div(kr),Pr=Z.ZP.div(Ir),Zr=(ye=(Nt=Tt=function(a){(0,ce.default)(r,a);function r(l){(0,le.default)(this,r);var n=(0,se.default)(this,(r.__proto__||ie()(r)).call(this,l));return n.state={publicConfigVisible:!1},n}return(0,ae.default)(r,[{key:"changeWOrksheetVisibleType",value:function(n){var o=this.props,t=o.updateWorksheetVisibleType,i=o.worksheetInfo;t(i.visibleType===y.Zt.CLOSE?y.Zt.PUBLIC:y.Zt.CLOSE)}},{key:"resetControls",value:function(){var n=this.props.resetControls;Fe.Z.confirm({title:_l("\u91CD\u7F6E\u516C\u5F00\u8868\u5355\u5B57\u6BB5"),description:_l("\u516C\u5F00\u8868\u5355\u91CD\u7F6E\u4E3A\u539F\u59CB\u8868\u5355\u72B6\u6001\uFF0C\u5DF2\u6709\u7684\u9690\u85CF\u5B57\u6BB5\u548C\u6392\u5E8F\u8BBE\u7F6E\u5C06\u6E05\u9664"),okText:_l("\u91CD\u7F6E\u5B57\u6BB5"),onOk:n})}},{key:"render",value:function(){var n=this,o=this.props,t=o.loading,i=o.worksheetInfo,d=o.worksheetSettings,g=o.originalControls,p=o.shareUrl,c=o.hidedControlIds,m=o.showControl,h=o.onHideControl,f=o.onCloseConfig,E=o.refreshShareUrl,I=o.enabled,k=o.onSwitchChange,x=this.state.publicConfigVisible,P=(0,me.iR)(g,d),T=P.map(function(C){return s().find(g,function(N){return N.controlId===C})}).filter(s().identity),S=c.filter(function(C){return!s().find(P,function(N){return N===C})}).map(function(C){return s().find(g,function(N){return N.controlId===C})}).filter(s().identity);return e.createElement("div",{className:"publicWorksheetConfigPanel"},e.createElement("div",{className:"publicConfig flexColumn"},e.createElement(Tr,{onClick:f},_l("\u5B8C\u6210")),e.createElement(Pr,null,e.createElement(H.H2,{className:"InlineBlock",style:{fontSize:16}},_l("\u516C\u5F00\u94FE\u63A5")),e.createElement(Ue.Z,{className:"publishUrlSwitch",checked:I,onClick:function(){k(),f()}})),i.visibleType===y.Zt.PUBLIC&&e.createElement(e.Fragment,null,(0,me.cV)(d)&&e.createElement("div",{className:"promptText flexColumn"},(0,me.lZ)(d)),e.createElement(Nr,null,e.createElement(Oe.Z,{theme:"light",className:"customShareUrl",style:{margin:"16px 0",flexDirection:"column"},showPreview:!1,url:p,showCompletely:{copy:!0,qr:!0},refreshShareUrl:E,customBtns:[{tip:_l("\u6253\u5F00"),icon:"launch",text:_l("\u6253\u5F00"),showCompletely:!0,onClick:function(){return window.open(p)}}]})),e.createElement(Ce.ZP,{fullWidth:!0,className:"mTop8",onClick:function(){return n.setState({publicConfigVisible:!0})}},e.createElement("i",{className:"icon icon-send Font16 mRight10"}),_l("\u53D1\u5E03\u8BBE\u7F6E"))),x&&e.createElement(Sr,{onClose:function(){return n.setState({publicConfigVisible:!1})}}),e.createElement(H.Hr,{style:{margin:"20px -20px 0"}}),e.createElement("div",null,e.createElement(H.H2,{className:"mBottom10 Left",style:{color:"#757575",fontSize:"14px"}},_l("\u663E\u793A\u7684\u5B57\u6BB5")),e.createElement("span",{className:"Right mTop16",onClick:this.resetControls,"data-tip":_l("\u91CD\u7F6E\u516C\u5F00\u8868\u5355\u5B57\u6BB5")},e.createElement("i",{className:"icon icon-refresh1 Gray_9e Font16 Hand"}))),e.createElement(H.go,{className:"tip mBottom10"},_l("\u4EBA\u5458\u3001\u90E8\u95E8\u3001\u7EC4\u7EC7\u89D2\u8272\u3001\u81EA\u7531\u8FDE\u63A5\u3001\u6269\u5C55\u503C\u7684\u6587\u672C\u5B57\u6BB5\u4E0D\u80FD\u7528\u4E8E\u516C\u5F00\u8868\u5355\uFF0C\u539F\u8868\u5355\u5185\u7684\u4EE5\u4E0A\u5B57\u6BB5\u5C06\u88AB\u81EA\u52A8\u9690\u85CF\u3002")),e.createElement("div",{className:"flex",style:{margin:"0 -20px",padding:"0 0 32px"}},e.createElement(Me.Z,null,t&&e.createElement("div",null,e.createElement(Ne.Z,{direction:"column",widths:["100%","100%","100%","100%","100%"],active:!0,itemStyle:{marginBottom:"10px"}})),e.createElement("div",{style:{padding:"0 25px 0 20px"}},e.createElement(po,{controls:g,hidedControls:S,disabledControls:T,onAdd:m,onHide:h}))))))}}]),r}(e.Component),Tt.propTypes={worksheetInfo:b().shape({}),worksheetSettings:b().shape({}),shareUrl:b().string,hidedControlIds:b().arrayOf(b().string),originalControls:b().arrayOf(b().shape({})),showControl:b().func,onHideControl:b().func,updateWorksheetVisibleType:b().func,resetControls:b().func,onCloseConfig:b().func},Nt),Pt(ye.prototype,"changeWOrksheetVisibleType",[J.Nj],X()(ye.prototype,"changeWOrksheetVisibleType"),ye.prototype),Pt(ye.prototype,"resetControls",[J.Nj],X()(ye.prototype,"resetControls"),ye.prototype),ye),Wr=function(r){return(0,B.default)({},s().pick(r.publicWorksheet,["loading","shareUrl","worksheetInfo","worksheetSettings","originalControls","controls","hidedControlIds"]))},Dr=function(r){return(0,Ze.DE)(Se,r)};const Fr=(0,We.$j)(Wr,Dr)(Zr);function Zt(a){var r=a.worksheetId,l=a.worksheetInfo,n=a.shareUrl,o=a.loadPublicWorksheet,t=a.updateWorksheetVisibleType,i=a.clear,d=a.setHederVisible,g=a.refreshShareUrl,p=a.worksheetSettings,c=a.originalControls,m=a.hidedControlIds,h=a.hideControl,f=(0,e.useState)(/detail/.test(location.hash)),E=(0,ee.Z)(f,2),I=E[0],k=E[1],x=l.visibleType===y.Zt.PUBLIC;function P(C){d(!C),k(C)}function T(){var C=l.visibleType===y.Zt.PUBLIC?y.Zt.CLOSE:y.Zt.PUBLIC;t(C,function(){C===y.Zt.PUBLIC&&P(!0)})}var S=function(N){var O=(0,me.iR)(c,p),V=m.concat(O),D=c.filter(function(W){return W.controlId===N})[0]||{},M=[];if(D.type===52){M=c.filter(function(W){return W.sectionId===N&&!s().find(V,function(z){return z.controlId===W.controlId})});var j=M.concat(D);h(j.map(function(W){return W.controlId}))}else if(D.sectionId){var v=c.filter(function(W){return W.controlId===D.sectionId})[0]||{},A=c.filter(function(W){return W.sectionId===v.controlId&&!s().find(V,function(z){return z===W.controlId})}),w=[N];A.length===1&&A[0].controlId===N&&(w=[N,v.controlId]),h(w)}else h(N)};return(0,e.useEffect)(function(){return/detail/.test(location.hash)&&(location.hash=""),o({worksheetId:r}),function(){i()}},[]),s().isEmpty(l)?e.createElement("div",{class:"publicWorksheetEnablePanel"},e.createElement("div",{style:{padding:10}},e.createElement(Ne.Z,{style:{flex:1},direction:"column",widths:["40%","60%","80%"],active:!0,itemStyle:{marginBottom:"10px"}}))):I?e.createElement("div",{className:"publicWorksheetConfigCon flexRow"},e.createElement(Fr,{onCloseConfig:function(){return P(!1)},enabled:x,onSwitchChange:T,onHideControl:S}),e.createElement(so,{onHideControl:S})):e.createElement("div",{class:"publicWorksheetEnablePanel"},e.createElement("h1",null,_l("\u516C\u5F00\u8868\u5355")),e.createElement("div",{className:"description"},_l("\u542F\u7528\u540E\uFF0C\u5C06\u8868\u5355\u516C\u5F00\u53D1\u5E03\u7ED9\u5E94\u7528\u5916\u7684\u7528\u6237\u586B\u5199\uFF0C\u4E3A\u4F60\u7684\u5DE5\u4F5C\u8868\u6536\u96C6\u6570\u636E"),e.createElement(jt.Z,{type:3,href:"https://help.mingdao.com/worksheet/public-form",text:_l("\u5E2E\u52A9")})),e.createElement(Ue.Z,{className:"publishSwitch",checked:x,onClick:T}),e.createElement("span",{className:"status"},x?_l("\u542F\u7528"):_l("\u5173\u95ED")),x&&e.createElement(e.Fragment,null,(0,me.cV)(p)&&e.createElement("div",{className:"promptText mTop16"},(0,me.lZ)(p)),e.createElement(Oe.Z,{copyShowText:!0,theme:"light",className:"mainShareUrl mTop16 mBottom20",url:n,refreshShareUrl:g,customBtns:[{tip:_l("\u6253\u5F00"),icon:"launch",onClick:function(){window.open(""+n+(window.isMDClient?"?isMDClient=true":""))}}]}),e.createElement(Ce.ZP,{size:"mdbig",onClick:function(){return P(!0)}},_l("\u8BBE\u7F6E\u8868\u5355"))))}Zt.propTypes={worksheetInfo:b().shape({}),worksheetId:b().string,shareUrl:b().string,clear:b().func,loadPublicWorksheet:b().func,updateWorksheetVisibleType:b().func,setHederVisible:b().func};var Br=function(r){return(0,B.default)({},s().pick(r.publicWorksheet,["shareUrl","worksheetInfo","worksheetSettings","originalControls","hidedControlIds"]))},Ur=function(r){return(0,Ze.DE)(Se,r)};const Or=(0,We.$j)(Br,Ur)(Zt);var Lr=(0,F.Z)([`
  margin-bottom: 20px;
  .Dropdown {
    width: 260px;
    .Menu {
      width: 100%;
    }
  }
  .MenuBox .Menu {
    width: auto;
  }
`],[`
  margin-bottom: 20px;
  .Dropdown {
    width: 260px;
    .Menu {
      width: 100%;
    }
  }
  .MenuBox .Menu {
    width: auto;
  }
`]),Rr=(0,F.Z)([`
  font-weight: 500;
  .required {
    color: #f44336;
    margin-top: -10px;
  }
`],[`
  font-weight: 500;
  .required {
    color: #f44336;
    margin-top: -10px;
  }
`]),Hr=(0,F.Z)([`
  margin: 10px 0 15px;
  color: #9e9e9e;
`],[`
  margin: 10px 0 15px;
  color: #9e9e9e;
`]),jr=(0,F.Z)([`
  display: flex;
  flex-wrap: wrap;
  li {
    align-items: center;
    box-sizing: border-box;
    margin: 3px 6px 3px 0;
    border-radius: 3px;
    height: 24px;
    padding: 6px 5px 6px 10px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    &.error {
      background-color: #fef3f2;
      border-color: #e8dbd9;
      color: #b53026;
    }
    .tag {
      margin-right: 5px;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }
    .delTag {
      color: rgba(0, 0, 0, 0.3);
      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`],[`
  display: flex;
  flex-wrap: wrap;
  li {
    align-items: center;
    box-sizing: border-box;
    margin: 3px 6px 3px 0;
    border-radius: 3px;
    height: 24px;
    padding: 6px 5px 6px 10px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    &.error {
      background-color: #fef3f2;
      border-color: #e8dbd9;
      color: #b53026;
    }
    .tag {
      margin-right: 5px;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }
    .delTag {
      color: rgba(0, 0, 0, 0.3);
      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`]),je=Z.ZP.div(Lr),Ve=Z.ZP.div(Rr),Ae=Z.ZP.div(Hr),Vr=Z.ZP.ul(jr),Ar=[xe.DN.TEXT,xe.DN.NUMBER,xe.DN.MOBILE_PHONE,xe.DN.TELEPHONE,xe.DN.EMAIL,xe.DN.CRED];function Wt(a){var r=(0,e.useState)({}),l=(0,ee.Z)(r,2),n=l[0],o=l[1],t=a.queryInfo,i=t===void 0?{}:t,d=a.onClose,g=a.onSuccess,p=(0,B.default)({},i,n),c=p.title,m=p.queryControlIds,h=m===void 0?[]:m,f=p.viewId,E=p.worksheet,I=p.exported;return e.createElement(Fe.Z,{title:_l("\u8BBE\u7F6E\u67E5\u8BE2\u94FE\u63A5"),style:{width:"560px"},overlayClosable:!1,visible:!0,okDisabled:s().isEmpty(h)||!f,onOk:function(){var x=(0,B.default)({worksheetId:E.worksheetId},(0,B.default)({},s().pick(i,["viewId","queryControlIds","title","exported"]),n));x.title||(x.title=_l("\u67E5\u8BE2%0",i.worksheetName)),ve.Z.editPublicQuery(x).then(function(){alert(_l("\u8BBE\u7F6E\u6210\u529F")),g((0,B.default)({},i,x)),d()})},onCancel:d},e.createElement(je,null,e.createElement(Ve,null,_l("\u67E5\u8BE2\u89C6\u56FE")," ",e.createElement("span",{className:"required"},"*")),e.createElement(Ae,null,_l("\u5BF9\u6240\u9009\u89C6\u56FE\u4E0B\u6570\u636E\u8FDB\u884C\u67E5\u8BE2")),e.createElement(ue.Z,{value:f,data:E.views.map(function(k){return{text:k.name,value:k.viewId}}),border:!0,placeholder:_l("\u8BF7\u9009\u62E9\u89C6\u56FE"),onChange:function(x){return o((0,B.default)({},n,{viewId:x}))}})),e.createElement(je,null,e.createElement(Ve,null,_l("\u67E5\u8BE2\u6761\u4EF6")," ",e.createElement("span",{className:"required"},"*")),e.createElement(Ae,null,_l("\u9009\u62E9\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6\u7684\u5B57\u6BB5\u3002\u5982\u8BBE\u7F6E\u591A\u4E2A\u6761\u4EF6\uFF0C\u5219\u6240\u6709\u6761\u4EF6\u90FD\u4E3A\u5FC5\u586B\u3002\u53EA\u652F\u6301\u6587\u672C\u7C7B\u578B\u5B57\u6BB5\u8FDB\u884C\u67E5\u8BE2\uFF0C\u5982\uFF1A\u5B66\u53F7\u3001\u8EAB\u4EFD\u8BC1\u53F7\u3001\u624B\u673A\u53F7\u3001\u8BA2\u5355\u7F16\u53F7")),e.createElement(ue.Z,{className:"queryConfigControlsDropdown w100",selectClose:!1,data:E.template.controls.filter(function(k){return!s().find(h.concat(xe._Q.map(function(x){return x.controlId})),function(x){return x===k.controlId})&&s().includes(Ar,k.type)}).map(function(k){return{text:e.createElement("span",null,k.controlName),searchText:k.controlName,value:k.controlId}}),value:h.length||void 0,border:!0,isAppendToBody:!0,placeholder:_l("\u8BF7\u9009\u62E9\u67E5\u8BE2\u6761\u4EF6\u5B57\u6BB5"),maxHeight:280,onChange:function(x){o((0,B.default)({},n,{queryControlIds:s().uniqBy(h.concat(x))}))},renderTitle:function(){return!!h.length&&e.createElement(Vr,null,h.map(function(x){var P=s().find(E.template.controls,function(T){return T.controlId===x});return e.createElement("li",{key:x,className:fe()("tagItem flexRow",{error:!P})},e.createElement("span",{className:"tag"},P?P.controlName:_l("\u5B57\u6BB5\u5DF2\u5220\u9664")),e.createElement("span",{className:"delTag",onClick:function(S){S.stopPropagation(),o((0,B.default)({},n,{queryControlIds:h.filter(function(C){return C!==x})}))}},e.createElement(q.Z,{icon:"close",className:"pointer"})))}))}})),e.createElement(je,null,e.createElement(Ve,null,_l("\u9875\u9762\u6807\u9898")),e.createElement(Ae,null,_l("\u5982\uFF1A\u67E5\u8BE2\u6210\u7EE9\u5355")),e.createElement(de.Z,{className:"w100",value:c,onChange:function(x){return o((0,B.default)({},n,{title:x}))}})),e.createElement(je,null,e.createElement(Ve,null,_l("\u8BBE\u7F6E")),e.createElement(Ae,null),e.createElement(Le.Z,{text:_l("\u5141\u8BB8\u5BFC\u51FA\u6570\u636E"),checked:I,onClick:function(){return o((0,B.default)({},n,{exported:!I}))}})))}Wt.propTypes={queryInfo:b().shape({}),onClose:b().func,onSuccess:b().func};function Dt(a){var r=a.worksheetId,l=a.worksheetInfo,n=(0,e.useState)({}),o=(0,ee.Z)(n,2),t=o[0],i=o[1],d=(0,e.useState)(),g=(0,ee.Z)(d,2),p=g[0],c=g[1],m=t.visibleType===y.Zt.PUBLIC;return(0,e.useEffect)(function(){ve.Z.getPublicQuery({worksheetId:r}).then(function(h){h.title||(h.title=_l("\u67E5\u8BE2%0",l.name)),h.queryControlIds=(h.queryControlIds||[]).filter(function(f){return s().find(l.template.controls,function(E){return E.controlId===f})}),i(h)})},[]),s().isEmpty(t)?e.createElement("div",{class:"publicWorksheetEnablePanel"},e.createElement("div",{style:{padding:10}},e.createElement(Ne.Z,{style:{flex:1},direction:"column",widths:["40%","60%","80%"],active:!0,itemStyle:{marginBottom:"10px"}}))):e.createElement("div",{class:"publicWorksheetEnablePanel"},e.createElement("h1",null,_l("\u516C\u5F00\u67E5\u8BE2")),e.createElement("div",{className:"description"},_l("\u542F\u7528\u540E\uFF0C\u751F\u6210\u7528\u4E8E\u516C\u5F00\u67E5\u8BE2\u6570\u636E\u7684\u94FE\u63A5\uFF0C\u7528\u4E8E\u8BA2\u5355\u67E5\u8BE2\u3001\u6210\u7EE9\u67E5\u8BE2\u3001\u767B\u8BB0\u4FE1\u606F\u67E5\u8BE2\u7B49\u573A\u666F")),e.createElement(Ue.Z,{className:"publishSwitch",checked:m,onClick:function(){var f=t.visibleType===y.Zt.PUBLIC?y.Zt.CLOSE:y.Zt.PUBLIC;ve.Z.editPublicQueryState({worksheetId:r,visibleType:f}).then(function(E){i((0,B.default)({},t,{url:E,visibleType:f})),f===y.Zt.PUBLIC&&c(!0)})}}),e.createElement("span",{className:"status"},m?_l("\u542F\u7528"):_l("\u5173\u95ED")),m&&e.createElement(e.Fragment,null,e.createElement(Oe.Z,{theme:"light",copyShowText:!0,className:"mainShareUrl mTop15 mBottom20",url:t.url,customBtns:[{tip:_l("\u6253\u5F00"),icon:"launch",onClick:function(){return window.open(t.url)}}]}),e.createElement(Ce.ZP,{size:"mdbig",onClick:function(){return c(!0)}},_l("\u8BBE\u7F6E\u67E5\u8BE2\u94FE\u63A5"))),p&&e.createElement(Wt,{queryInfo:(0,B.default)({},t,{worksheet:l}),onClose:function(){return c(!1)},onSuccess:function(f){return i(f)}}))}Dt.propTypes={worksheetId:b().string,worksheetInfo:b().shape({})};function Ft(a){var r=a.match,l=r===void 0?{params:{}}:r,n=l.params.worksheetId,o=(0,e.useState)({}),t=(0,ee.Z)(o,2),i=t[0],d=t[1],g=(0,e.useState)(!/detail/.test(location.hash)),p=(0,ee.Z)(g,2),c=p[0],m=p[1],h=i.name,f=i.roleType;(0,e.useEffect)(function(){Lt.Z.getWorksheetInfo({worksheetId:n,getTemplate:!0,getViews:!0}).then(d)},[]);var E=s().isEmpty(i),I=[2,4].includes(f);return e.createElement("div",{className:"publicWorksheetConfig flexColumn"},c&&e.createElement(Rt.Z,{worksheetId:n,worksheetName:h,showSaveButton:!1,saveLoading:!1,onBack:function(){return(0,_e.Jh)(n)},onClose:function(){return(0,_e.Jh)(n)}}),e.createElement(Ot(),{title:_l("\u8BBE\u7F6E\u516C\u5F00\u8868\u5355 - %0",h||"")}),!E&&!I&&e.createElement("div",{className:"w100 WhiteBG Absolute",style:{top:0,bottom:0}},e.createElement(Ht.Z,{text:_l("\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u7F16\u8F91"),showBtn:!0,btnText:_l("\u8FD4\u56DE"),callback:function(){return(0,_e.Jh)(n)}})),!E&&I&&e.createElement("div",{className:"flex h100"},e.createElement(Or,{worksheetId:n,setHederVisible:m}),e.createElement(Dt,{worksheetId:n,worksheetInfo:i})))}Ft.propTypes={match:b().shape({})}}}]);
