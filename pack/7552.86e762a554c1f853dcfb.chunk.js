(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7552],{7552:(R,L,a)=>{"use strict";a.r(L),a.d(L,{default:()=>w});var M=a(44336),V=a.n(M),h=a(74253),y=a(33867),N=a(66215),x=a(70801),U=a(3540),g=a(12424),F=a(86735),e=a(67294),D=a(15577),O=a(93967),P=a.n(O),W=a(5017),v=a(13739),Y=a(16461),T=a(87912),Z=a.n(T),H=a(96486),K=a.n(H),k=(0,F.Z)([`
  .uploadingImageWrap, .uploadingIconWrap {
    border-radius: 4px;
    border: 2px dotted #ddd;
    &:hover {
      .uploadMask {
        display: flex;
      }
    }
  }
  .uploadingImageWrap {
    height: 63px;
    width: max-content;
    padding: 2px;
  }
  .uploadingIconWrap {
    width: 32px;
    height: 32px;
  }
  .uploadMask {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .noBorder {
    border: none;
    border-radius: 0;
    padding: 0;
  }
  .justifyContentCenter {
    justify-content: center;
  }
  .attachmentList {
    display: none !important;
  }
`],[`
  .uploadingImageWrap, .uploadingIconWrap {
    border-radius: 4px;
    border: 2px dotted #ddd;
    &:hover {
      .uploadMask {
        display: flex;
      }
    }
  }
  .uploadingImageWrap {
    height: 63px;
    width: max-content;
    padding: 2px;
  }
  .uploadingIconWrap {
    width: 32px;
    height: 32px;
  }
  .uploadMask {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .noBorder {
    border: none;
    border-radius: 0;
    padding: 0;
  }
  .justifyContentCenter {
    justify-content: center;
  }
  .attachmentList {
    display: none !important;
  }
`]),z=W.ZP.div(k),Q=function(r){var m=r.visible,i=r.onCancel,t=r.onSave,c=(0,e.useState)(r.brandName),u=(0,g.Z)(c,2),o=u[0],n=u[1];return e.createElement(x.Z,{visible:m,title:_l("\u54C1\u724C\u540D\u79F0"),okText:_l("\u4FDD\u5B58"),onOk:function(){if(K().isEmpty(o)){alert("\u8BF7\u8F93\u5165\u54C1\u724C\u540D\u79F0");return}(0,v.xR)({brandName:o},function(){md.global.SysSettings.brandName=o}),i(),t(o)},onCancel:i},e.createElement(U.Z,{className:"w100",placeholder:_l("\u8F93\u5165\u54C1\u724C\u540D\u79F0"),value:o,onChange:function(s){return n(s.trim())}}))},X=function(){var r=md.global.SysSettings,m=(0,e.useState)(r.brandName),i=(0,g.Z)(m,2),t=i[0],c=i[1],u=(0,e.useState)(r.hideBrandName),o=(0,g.Z)(u,2),n=o[0],d=o[1],s=(0,e.useState)(!1),_=(0,g.Z)(s,2),S=_[0],C=_[1];return e.createElement(e.Fragment,null,e.createElement("div",{className:"Font14 bold mBottom8"},_l("\u54C1\u724C\u540D\u79F0")),e.createElement("div",{className:"Font13 Gray_9e mBottom18"},_l("\u5E73\u53F0\u767B\u5F55 / \u6CE8\u518C\u9875\u54C1\u724C\u540D\u79F0")),e.createElement("div",{className:"flexRow valignWrapper Font13 Gray_9e"},e.createElement("span",{className:"mRight10"},t),e.createElement("a",{onClick:function(){return C(!0)}},_l("\u4FEE\u6539"))),e.createElement("div",{className:"flexRow valignWrapper mTop10"},e.createElement(N.Z,{checked:!n,onClick:function(){var p=!n;d(p),(0,v.xR)({hideBrandName:p},function(){md.global.SysSettings.hideBrandName=p})}}),e.createElement("div",{className:"mLeft8"},_l("\u5728\u767B\u5F55\u754C\u9762\u663E\u793A"))),e.createElement(Q,{visible:S,brandName:t,onCancel:function(){C(!1)},onSave:function(p){c(p)}}))},j=function(){var r=md.global.SysSettings,m=(0,e.useState)(r.brandLogoUrl),i=(0,g.Z)(m,2),t=i[0],c=i[1],u=(0,e.useState)(r.hideBrandLogo),o=(0,g.Z)(u,2),n=o[0],d=o[1],s=(0,e.useState)(r.brandLogoHeight),_=(0,g.Z)(s,2),S=_[0],C=_[1],B=function(l){var E=parseInt((0,D.pu)(l)||0);C(E)},p=function(){var l=S;l<30&&(l=30),l>100&&(l=100),C(l),(0,v.xR)({brandLogoHeight:l},function(){md.global.SysSettings.brandLogoHeight=l})};return(0,e.useEffect)(function(){$("#hideUploadBrandLogo").uploadAttachment({filterExtensions:"gif,png,jpg,jpeg,bmp",pluploadID:"#uploadBrandLogo",multiSelection:!1,maxTotalSize:4,folder:"ProjectLogo",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:4,checkProjectLimitFileSizeUrl:"",callback:function(l){if(l.length>0){var E=l[0],A=E.serverName+E.filePath+E.fileName+E.fileExt,I=E.fileName+E.fileExt;(0,v.xR)({brandLogo:I},function(){c(A),md.global.SysSettings.brandLogo=I,md.global.SysSettings.brandLogoUrl=A})}}})},[]),e.createElement(e.Fragment,null,e.createElement("div",{className:"Font14 bold mBottom8"},_l("\u54C1\u724CLOGO")),e.createElement("div",{className:"Font13 Gray_9e mBottom8"},_l("\u63A8\u8350\u5C3A\u5BF8 400*180 px\uFF0C\u663E\u793A\u5728\u767B\u5F55\u3001\u6CE8\u518C\u9875\u9762")),e.createElement("div",{id:"uploadBrandLogo",className:P()("uploadingImageWrap flexRow valignWrapper pointer",{noBorder:t,justifyContentCenter:!t})},e.createElement("input",{id:"hideUploadBrandLogo",type:"file",className:"Hidden"}),t?e.createElement(e.Fragment,null,e.createElement("img",{className:"h100",src:t}),e.createElement("div",{className:"uploadMask flexRow valignWrapper justifyContentCenter"},e.createElement(y.Z,{icon:"upload_pictures",className:"White Font17"}))):e.createElement("img",{className:"h100",src:Z()})),e.createElement("div",{className:"flexRow valignWrapper mTop10"},e.createElement(N.Z,{checked:!n,onClick:function(){var l=!n;d(l),(0,v.xR)({hideBrandLogo:l},function(){md.global.SysSettings.hideBrandLogo=l})}}),e.createElement("div",{className:"mLeft8"},_l("\u5728\u767B\u5F55\u754C\u9762\u663E\u793A"))),!n&&e.createElement("div",{className:"flexRow valignWrapper mTop10"},_l("LOGO\u9AD8\u5EA6"),e.createElement(U.Z,{className:"mLeft10 mRight10",style:{width:50},value:S,onBlur:p,onKeyDown:function(l){l.which===13&&p(l)},onChange:B}),"px",e.createElement("span",{className:"Gray_9e mLeft15"},_l("\u957F\u65B9\u5F62\u63A8\u835040px\uFF0C\u65B9\u5F62\u63A8\u835056px"))))},J=function(){var r=md.global.SysSettings,m=(0,e.useState)(r.brandHomeImageUrl),i=(0,g.Z)(m,2),t=i[0],c=i[1];return(0,e.useEffect)(function(){$("#hideUploadBrandHomeImage").uploadAttachment({filterExtensions:"gif,png,jpg,jpeg,bmp",pluploadID:"#uploadBrandHomeImage",multiSelection:!1,maxTotalSize:2,folder:"ProjectLogo",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:4,checkProjectLimitFileSizeUrl:"",callback:function(o){if(o.length>0){var n=o[0],d=n.serverName+n.filePath+n.fileName+n.fileExt,s=n.fileName+n.fileExt;(0,v.xR)({brandHomeImage:s},function(){c(d),md.global.SysSettings.brandHomeImage=s,md.global.SysSettings.brandHomeImageUrl=d})}}})},[]),e.createElement(e.Fragment,null,e.createElement("div",{className:"Font14 bold mBottom8"},_l("\u767B\u5F55/\u6CE8\u518C\u80CC\u666F\u56FE")),e.createElement("div",{className:"Font13 Gray_9e mBottom8"},_l("\u63A8\u8350\u5C3A\u5BF8 1920*900\uFF0C2 M\u4EE5\u5185")),e.createElement("div",{id:"uploadBrandHomeImage",className:P()("uploadingImageWrap flexRow valignWrapper pointer",{noBorder:t,justifyContentCenter:!t})},e.createElement("input",{id:"hideUploadBrandHomeImage",type:"file",className:"Hidden"}),t?e.createElement(e.Fragment,null,e.createElement("img",{className:"h100",src:t}),e.createElement("div",{className:"uploadMask flexRow valignWrapper justifyContentCenter"},e.createElement(y.Z,{icon:"upload_pictures",className:"White Font17"}))):e.createElement("div",{className:"flexRow valignWrapper justifyContentCenter",style:{width:110}},e.createElement(y.Z,{icon:"upload_pictures",className:"Gray_9e Font20"}))))},q=function(){var r=md.global.SysSettings,m=useState(r.brandFaviconUrl),i=_slicedToArray(m,2),t=i[0],c=i[1];return useEffect(function(){$("#hideUploadBrandFavicon").uploadAttachment({filterExtensions:"ico",pluploadID:"#uploadBrandFavicon",multiSelection:!1,maxTotalSize:2,folder:"ProjectLogo",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:4,checkProjectLimitFileSizeUrl:"",callback:function(o){if(o.length>0){var n=o[0],d=n.serverName+n.filePath+n.fileName+n.fileExt,s=n.fileName+n.fileExt;updateSysSettings({brandFavicon:s},function(){c(d),md.global.SysSettings.brandFavicon=s,md.global.SysSettings.brandFaviconUrl=d})}}})},[]),React.createElement(Fragment,null,React.createElement("div",{className:"Font14 bold mBottom8"},_l("Favicon")),React.createElement("div",{className:"Font13 Gray_9e mBottom8"},_l("\u63A8\u8350\u5C3A\u5BF8 32*32 px\uFF0C\u6587\u4EF6\u683C\u5F0Fico\uFF0C\u663E\u793A\u5728\u6D4F\u89C8\u5668\u9875\u7B7E\u3001\u6D4F\u89C8\u5668\u6536\u85CF\u5939")),React.createElement("div",{id:"uploadBrandFavicon",className:cx("uploadingIconWrap flexRow valignWrapper pointer",{noBorder:t,justifyContentCenter:!t})},React.createElement("input",{id:"hideUploadBrandFavicon",type:"file",className:"Hidden"}),t?React.createElement(Fragment,null,React.createElement("img",{className:"h100",src:t}),React.createElement("div",{className:"uploadMask flexRow valignWrapper justifyContentCenter"},React.createElement(_Icon,{icon:"upload_pictures",className:"White Font17"}))):React.createElement(_Icon,{icon:"upload_pictures",className:"Gray_9e"})))},G=function(r){return e.createElement(z,{className:"privateCardWrap flexColumn big"},e.createElement("div",{className:"Font17 bold mBottom25"},_l("\u54C1\u724C")),e.createElement(X,null),e.createElement(h.Z,{className:"mTop20 mBottom20"}),e.createElement(j,null),e.createElement(h.Z,{className:"mTop20 mBottom20"}),e.createElement(J,null))};const w=G},87912:R=>{R.exports="data:image/png;base64,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"}}]);
