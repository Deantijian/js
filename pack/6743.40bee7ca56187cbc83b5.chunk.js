"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[6743],{66743:(ft,P,t)=>{t.r(P),t.d(P,{default:()=>ct});var E=t(54208),gt=t(31277),L=t(31929),i=t(12424),b=t(86735),n=t(67294),D=t(5017),T=t(33867),yt=t(93967),H=t(70132),K=t(21),O=[{title:_l("\u901A\u7528"),icon:"draft-box",type:"base",routes:[{path:"/privateDeployment/base",component:function(){return Promise.all([t.e(8592),t.e(5835)]).then(t.bind(t,45835))}}]},{title:_l("\u5E94\u7528"),icon:"widgets",type:"app",routes:[{path:"/privateDeployment/app",component:function(){return Promise.all([t.e(8592),t.e(2897)]).then(t.bind(t,62897))}}]},{title:_l("\u5E94\u7528\u5E93"),icon:"sidebar_application_library",type:"appLibrary",routes:[{path:"/privateDeployment/appLibrary",component:function(){return Promise.all([t.e(8592),t.e(3971)]).then(t.bind(t,23971))}}]},{title:_l("\u8D26\u53F7\u4E0E\u6CE8\u518C"),icon:"account_circle",type:"login",routes:[{path:"/privateDeployment/login",component:function(){return Promise.all([t.e(9704),t.e(2122),t.e(8592),t.e(5777)]).then(t.bind(t,25777))}}]},{title:_l("\u8D44\u6E90"),icon:"link_record",type:"resource",routes:[{path:"/privateDeployment/resource",component:function(){return Promise.all([t.e(8592),t.e(3292)]).then(t.bind(t,43292))}}]},{title:_l("\u534F\u4F5C\u5957\u4EF6"),icon:"cooperation",type:"cooperation",routes:[{path:"/privateDeployment/cooperation",component:function(){return Promise.all([t.e(8592),t.e(3081)]).then(t.bind(t,63081))}}]},{title:_l("\u96C6\u6210"),icon:"hub",type:"hub",routes:[{path:"/privateDeployment/hub",component:function(){return Promise.all([t.e(8592),t.e(1699)]).then(t.bind(t,43950))}}]},{title:_l("\u5B89\u5168"),icon:"security",type:"security",routes:[{path:"/privateDeployment/security",component:function(){return Promise.all([t.e(8592),t.e(9217)]).then(t.bind(t,99217))}}]}],U=[{title:_l("\u7BA1\u7406\u5458"),icon:"admin_panel_settings",type:"admin",routes:[{path:"/privateDeployment/admin",component:function(){return Promise.all([t.e(8592),t.e(2149)]).then(t.bind(t,82149))}}]},{title:_l("\u65E5\u5FD7"),icon:"event",type:"logs",routes:[{path:"/privateDeployment/logs",component:function(){return t.e(3349).then(t.bind(t,23349))}}]}],J=[{title:_l("\u54C1\u724C"),icon:"brand",type:"brand",routes:[{path:"/privateDeployment/brand",component:function(){return Promise.all([t.e(8592),t.e(7552)]).then(t.bind(t,7552))}}]},{title:_l("\u6388\u6743"),icon:"how_to_reg",type:"authorization",routes:[{path:"/privateDeployment/authorization",component:function(){return Promise.all([t.e(8592),t.e(9370)]).then(t.bind(t,99370))}}]}],B=[{title:_l("\u8BBE\u7F6E"),type:"setting",menus:O},{title:_l("\u7BA1\u7406"),type:"management",menus:U.filter(function(e){return e.type==="privateKey"?md.global.Config.IsPlatformLocal===!1:!0})},{title:_l("\u5E73\u53F0"),type:"platform",menus:J}],xt=t(17563),Q=t(96486),p=t.n(Q),X=(0,b.Z)([`
  width: 240px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.1600);
  overflow-y: auto;

  .title, .menuItem {
    padding: 0 20px;
  }
  .title {
    color: #AFAFAF;
    margin-top: 26px;
  }
  .menuItem {
    height: 45px;
    width: 95%;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    font-weight: 400;
    color: #000;
    &.active {
      color: #2196F3;
      background-color: #2196f31f !important;
      .icon {
        color: #2196F3 !important;
      }
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }
`],[`
  width: 240px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.1600);
  overflow-y: auto;

  .title, .menuItem {
    padding: 0 20px;
  }
  .title {
    color: #AFAFAF;
    margin-top: 26px;
  }
  .menuItem {
    height: 45px;
    width: 95%;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    font-weight: 400;
    color: #000;
    &.active {
      color: #2196F3;
      background-color: #2196f31f !important;
      .icon {
        color: #2196F3 !important;
      }
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }
`]),Y=D.ZP.div(X),$=function(f){return n.createElement(Y,{className:"privateDeploymentSidebar"},B.map(function(l){return n.createElement(n.Fragment,{key:l.type},n.createElement("div",{className:"title Font13 mBottom8"},l.title),n.createElement("div",{className:"menu"},l.menus.map(function(c){return n.createElement(H.Z,{key:c.type,to:p().get(c,"routes[0].path"),className:"menuItem valignWrapper",activeClassName:"active"},n.createElement(T.Z,{className:"Font18 Gray_9e",icon:c.icon}),n.createElement("span",{className:"Font14 mLeft12"},c.title))})))}))};const w=(0,K.Z)($);var k=t(68356),q=t.n(k),z=t(36021),R=t(98523),v=t(15028),S=t(72698),Et=t(52262),_=t(65400),tt=t(36164),nt=t(20640),et=t.n(nt),ot=(0,b.Z)([`
  .ming.Textarea {
    border-color: #DDDDDD;
    &:hover:not(:disabled),
    &:focus {
      border-color: #2196F3;
    }
  }
  .footer {
  }
`],[`
  .ming.Textarea {
    border-color: #DDDDDD;
    &:hover:not(:disabled),
    &:focus {
      border-color: #2196F3;
    }
  }
  .footer {
  }
`]),at=D.ZP.div(ot),lt=function(){var f=(0,n.useState)(!0),l=(0,i.Z)(f,2),c=l[0],I=l[1],Z=(0,n.useState)({}),d=(0,i.Z)(Z,2),o=d[0],F=d[1],N=(0,n.useState)(""),g=(0,i.Z)(N,2),u=g[0],r=g[1],a=(0,n.useState)(""),s=(0,i.Z)(a,2),h=s[0],y=s[1],mt=(0,n.useState)(""),G=(0,i.Z)(mt,2),V=G[0],A=G[1],pt=(0,n.useState)(!1),M=(0,i.Z)(pt,2),j=M[0],C=M[1],dt=function(){if(p().isEmpty(u)){A(_l("\u8BF7\u8F93\u5165\u5BC6\u94A5")),y("");return}j||(C(!0),y(""),A(""),S.Z.bindLicenseCode({licenseCode:u}).then(function(m){y(m),C(!1),m&&(alert(_l("\u6DFB\u52A0\u6210\u529F")),r(""),y(""),setTimeout(function(){location.reload()},1e3))}).catch(function(m){C(!1),A(m.errorMessage)}))};(0,n.useEffect)(function(){S.Z.getServerInfo().then(function(x){I(!1),F(x)})},[]);var ut='<a href="https://www.mingdao.com/register?ReturnUrl='+encodeURIComponent("/personal?type=privatekey&v="+o.systemVersion+"&ltv="+o.licenseTemplateVersion+"&serverId="+o.serverId+"#apply")+'" target="_blank">'+_l("\u6CE8\u518C\u5E76\u7533\u8BF7")+"</a>",ht='<a href="https://www.mingdao.com/personal?type=privatekey&v='+o.systemVersion+"&ltv="+o.licenseTemplateVersion+"&serverId="+o.serverId+'#apply" target="_blank">'+_l("\u767B\u5F55\u5E76\u7533\u8BF7")+"</a>",vt='<a href="https://docs.pd.mingdao.com/faq/deployment#%E5%AF%86%E9%92%A5%E4%B8%A2%E5%A4%B1%E6%9C%8D%E5%8A%A1%E5%99%A8id-%E4%B8%8D%E6%98%BE%E7%A4%BA" target="_blank">'+_l("\u67E5\u770B\u5E2E\u52A9")+"</a>";return n.createElement(at,{className:"privateCardWrap flexColumn"},c?n.createElement(E.Z,null):n.createElement(n.Fragment,null,n.createElement("div",{className:"Font24 bold mBottom18"},_l("\u8BF7\u8F93\u5165\u5BC6\u94A5")),n.createElement("div",{className:"Font13 mBottom5"},_l("\u5BC6\u94A5\u7248\u672C\uFF1A%0",o.licenseTemplateVersion)),n.createElement("div",{className:"Font13 mBottom5"},_l("\u670D\u52A1\u5668ID\uFF1A%0",o.serverId),o.serverId?n.createElement(T.Z,{icon:"copy",className:"Gray_9e Font17 pointer",onClick:function(){et()(o.serverId),alert(_l("\u590D\u5236\u6210\u529F"))}}):null),n.createElement("div",{className:"Gray_75 Font12 mTop5",dangerouslySetInnerHTML:{__html:o.serverId?_l("\u6682\u65E0\u5BC6\u94A5\uFF1F\u8BF7 %0 \u6216 %1",ut,ht):_l("\u670D\u52A1\u5668ID\u4E0D\u663E\u793A\uFF1F%0",vt)}}),n.createElement(tt.Z,{className:"mTop20",value:u,minHeight:250,maxHeight:250,placeholder:_l("\u8BF7\u8F93\u5165\u5BC6\u94A5"),onChange:function(m){r(m)}}),n.createElement("div",{className:"flexRow mTop30 footer"},n.createElement("div",{className:"flexRow valignWrapper flex"},j?n.createElement("div",{className:"flexRow verifyInfo Gray_75 mBottom10"},n.createElement(E.Z,{size:"small"}),n.createElement("span",{className:"mLeft5"},_l("\u6B63\u5728\u9A8C\u8BC1\u60A8\u7684\u4EA7\u54C1\u5BC6\u94A5"))):p().isBoolean(h)&&!h&&n.createElement("div",{className:"mBottom10 Red"},_l("\u5BC6\u94A5\u9A8C\u8BC1\u5931\u8D25, \u8BF7\u91CD\u65B0\u586B\u5199")),V?n.createElement("div",{className:"mBottom10 Red"},V):null),n.createElement(_.default,{type:"primary",onClick:dt},_l("\u786E\u5B9A")))))};const rt=lt;var st=(0,b.Z)([`
  width: 100%;
  height: 100%;

  .privateCardWrap {
    width: 880px;
    margin: 20px auto 0;
    padding: 30px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.16);
    &.big {
      width: 95%;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  .content {
    overflow-y: auto;
  }

  .ant-input {
    border-radius: 4px !important;
    box-shadow: none !important;
  }
  .ant-btn {
    height: 30px;
    padding: 2px 15px;
    border-radius: 3px;
    &.ant-btn-primary {
      background-color: #2196F3;
      border-color: #2196F3;
    }
    &.ant-btn-background-ghost {
      background: transparent !important;
    }
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ant-select {
    &.ant-select:not(.ant-select-disabled):hover .ant-select-selector, &.ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      border-color: #2196F3 !important;
    }
    .ant-select-selector {
      border-radius: 4px !important;
      box-shadow: none !important;
    }
    .ant-select-selector, .ant-select-selection-item {
      height: 32px;
      line-height: 30px;
    }
    .ant-select-arrow {
      width: auto;
      height: auto;
      top: 40%;
    }
    &.ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
      opacity: 1;
      font-size: 13px;
    }
    &.ant-select-single.ant-select-open .ant-select-selection-item {
      color: inherit;
    }
  }
`],[`
  width: 100%;
  height: 100%;

  .privateCardWrap {
    width: 880px;
    margin: 20px auto 0;
    padding: 30px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.16);
    &.big {
      width: 95%;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  .content {
    overflow-y: auto;
  }

  .ant-input {
    border-radius: 4px !important;
    box-shadow: none !important;
  }
  .ant-btn {
    height: 30px;
    padding: 2px 15px;
    border-radius: 3px;
    &.ant-btn-primary {
      background-color: #2196F3;
      border-color: #2196F3;
    }
    &.ant-btn-background-ghost {
      background: transparent !important;
    }
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ant-select {
    &.ant-select:not(.ant-select-disabled):hover .ant-select-selector, &.ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      border-color: #2196F3 !important;
    }
    .ant-select-selector {
      border-radius: 4px !important;
      box-shadow: none !important;
    }
    .ant-select-selector, .ant-select-selection-item {
      height: 32px;
      line-height: 30px;
    }
    .ant-select-arrow {
      width: auto;
      height: auto;
      top: 40%;
    }
    &.ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
      opacity: 1;
      font-size: 13px;
    }
    &.ant-select-single.ant-select-open .ant-select-selection-item {
      color: inherit;
    }
  }
`]),W=D.ZP.div(st),it=function(){var f=(0,n.useState)(!0),l=(0,i.Z)(f,2),c=l[0],I=l[1],Z=(0,n.useState)(!1),d=(0,i.Z)(Z,2),o=d[0],F=d[1],N=p().flatten(B.map(function(r){return p().flatten(r.menus.map(function(a){return a.routes}))})),g=function(a){return q()({loader:a,loading:function(){return null}})};(0,n.useEffect)(function(){S.Z.getPlatformLicenseInfo().then(function(r){I(!1),F(!!r)})},[]);var u=function(){return n.createElement(W,{className:"flexRow valignWrapper"},n.createElement(w,null),n.createElement("div",{className:"flex h100 flexColumn content"},n.createElement(L.default,{autoInsertSpaceInButton:!1},n.createElement(R.Z,null,N.map(function(a){var s=a.path,h=a.component;return n.createElement(v.Z,{key:s,path:s,component:g(h)})}),n.createElement(v.Z,{path:"*",render:function(s){var h=s.location;return(0,z.T8)("/privateDeployment/base"),null}})))))};return c?n.createElement(E.Z,{className:"mTop30"}):o?n.createElement(R.Z,null,n.createElement(v.Z,{path:"/privateDeployment/:routeType"},u()),n.createElement(v.Z,{path:"*",render:function(a){var s=a.location;return(0,z.T8)("/privateDeployment/base"),null}})):n.createElement(W,null,n.createElement(L.default,{autoInsertSpaceInButton:!1},n.createElement(rt,null)))};const ct=it}}]);
