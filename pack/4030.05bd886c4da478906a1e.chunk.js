"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4030],{64030:(O,C,a)=>{a.r(C),a.d(C,{default:()=>z});var A=a(26581),S=a(36164),E=a(33867),W=a(85105),I=a.n(W),x=a(99663),L=a(22600),B=a(49135),V=a(93196),e=a(67294),y=a(15577),Z=a(36964),G=a.n(Z),F=a(72698),P=a(97553),T=a(47426),Y=a(43727),R=a(3540),K=a(96486),N=a.n(K),M=function(h){(0,V.default)(s,h);function s(i){(0,x.default)(this,s);var t=(0,B.default)(this,(s.__proto__||I()(s)).call(this,i));t.handleGenerateKey=function(c){var l=t.state,r=l.serverId,p=l.channel,f=l.licenseTemplateVersion,m=l.projectName,v=l.scaleId,u=l.job,g=l.licenseVersion;if(N().isEmpty(r)){alert(_l("\u8BF7\u8F93\u5165\u670D\u52A1\u5668 ID"),3);return}if(N().isEmpty(m)){alert(_l("\u8BF7\u8F93\u5165\u7EC4\u7EC7\u540D\u79F0"),3);return}if(N().isEmpty(u)){alert(_l("\u8BF7\u8F93\u5165\u804C\u4F4D"),3);return}F.Z.applyLicenseCode({serverId:r,channel:p,licenseTemplateVersion:f,projectName:m,job:u,scaleId:v,licenseVersion:g},{silent:!0}).then(function(d){d?(alert(_l("\u5BC6\u94A5\u7533\u8BF7\u6210\u529F\uFF0C\u8BF7\u590D\u5236\u540E\u53BB\u7533\u8BF7\u9875\u9762\u586B\u5199")),t.props.onClose(c,d)):alert(_l("\u5BC6\u94A5\u7533\u8BF7\u5931\u8D25"),2)}).fail(function(d){var o=d.errorMessage;alert(o==="community exists"||o==="professional trial exists"?_l("\u5BC6\u94A5\u7533\u8BF7\u5931\u8D25\uFF0C\u8BE5\u670D\u52A1\u5668ID\u5DF2\u7533\u8BF7\u8FC7\u5BC6\u94A5"):_l("\u5BC6\u94A5\u7533\u8BF7\u5931\u8D25"),2)})};var n=(0,y.A_)();return t.state={serverId:n.serverId,channel:n.channel||"",licenseTemplateVersion:n.ltv||"",projectName:"",job:"",scaleId:1,licenseVersion:0},t}return(0,L.default)(s,[{key:"render",value:function(){var t=this,n=this.state,c=n.serverId,l=n.projectName,r=n.job,p=n.scaleId,f=n.seconds,m=n.licenseVersion,v=(0,y.A_)().v,u=v&&parseFloat(v)>=5.3,g=[{value:1,text:_l("10\u4EBA\u4EE5\u4E0B")},{value:2,text:_l("10\uFF5E50\u4EBA")},{value:3,text:_l("51\uFF5E100\u4EBA")},{value:4,text:_l("101\uFF5E250\u4EBA")},{value:5,text:_l("251\uFF5E500\u4EBA")},{value:6,text:_l("501\u4EBA\u53CA\u4EE5\u4E0A")}];return e.createElement(e.Fragment,null,e.createElement("span",{className:"flexRow valignWrapper Gray_75 pointer",onClick:this.props.onClose},e.createElement(E.Z,{icon:"backspace",className:"mRight3 Font20"}),_l("\u8FD4\u56DE")),e.createElement("div",{className:"applyForm"},e.createElement("div",{className:"Bold Font28 mBottom30"},_l("\u5BC6\u94A5\u7533\u8BF7")),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"Font14 Bold mBottom5"},_l("\u670D\u52A1\u5668 ID")),e.createElement("div",{className:"mTop16 mBottom24 Gray_75"},c)),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"Font14 Bold mBottom5"},_l("\u7EC4\u7EC7\u540D\u79F0")),e.createElement(R.Z,{value:l,onChange:function(o){t.setState({projectName:o})}})),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"Font14 Bold mBottom5"},_l("\u804C\u4F4D")),e.createElement(R.Z,{value:r,onChange:function(o){t.setState({job:o})}})),e.createElement("div",{className:"formItem"},e.createElement("div",{className:"Font14 Bold mBottom5"},_l("\u9884\u8BA1\u4F7F\u7528\u4EBA\u6570")),e.createElement(Y.Z,{data:g,value:p,border:!0,onChange:function(o){return t.setState({scaleId:o})}})),u&&e.createElement("div",{className:"formItem"},e.createElement("div",{className:"Font14 Bold mBottom10"},_l("\u7248\u672C")),e.createElement(T.ZP,{radioItemClassName:"mBottom10",checkedValue:m,data:[{text:_l("\u793E\u533A\u7248"),value:0},{text:_l("\u4E13\u4E1A\u7248\u8BD5\u7528\uFF08\u6709\u6548\u671F30\u5929\uFF0C\u6BCF\u4E2A\u670D\u52A1\u5668ID\u53EF\u7533\u8BF71\u6B21\uFF09"),value:5}],vertical:!0,onChange:function(o){t.setState({licenseVersion:o})}})),e.createElement(P.ZP,{className:"generateKey",type:"primary",size:"large",onClick:this.handleGenerateKey},_l("\u751F\u6210\u5BC6\u94A5")),e.createElement("div",{className:"mTop16 Gray_75"},_l("\u70B9\u51FB\u751F\u6210\u5373\u4EE3\u8868\u60A8\u540C\u610F"),e.createElement("a",{href:"https://docs.pd.mingdao.com/agreement",target:"_blank"},_l("\u300A\u4F7F\u7528\u534F\u8BAE\u300B")))))}}]),s}(e.Component),H=a(30381),D=a.n(H),b=[_l("\u793E\u533A\u7248"),_l("\u6807\u51C6\u7248"),_l("\u4E13\u4E1A\u7248"),_l("\u5927\u578B\u4E13\u4E1A\u7248"),_l("\u6559\u5B66\u7248"),_l("\u4E13\u4E1A\u7248\u8BD5\u7528")],j=function(s){var i=D()(s).format("YYYY");return i==9999?_l("\u6C38\u4E45"):D()(s).format("YYYY\u5E74MM\u6708DD\u65E5")},z=function(h){(0,V.default)(s,h);function s(i){(0,x.default)(this,s);var t=(0,B.default)(this,(s.__proto__||I()(s)).call(this));t.getLicenseList=function(l){F.Z.getLicenseList().then(function(r){t.setState({licenseList:r},l)})},t.handleSetVisible=function(l,r){var p=t.state.licenseList;t.setState({licenseList:p.map(function(f,m){return m===r&&(f.visible=!l),f})})},t.handleCloseApply=function(l,r){location.hash="",t.getLicenseList(function(){r&&t.handleSetVisible(!1,0)}),t.setState({isApply:!1})};var n=location,c=n.hash;return t.state={isApply:c==="#apply",licenseList:[]},t}return(0,L.default)(s,[{key:"componentDidMount",value:function(){this.state.isApply||this.getLicenseList()}},{key:"renderLicenseItem",value:function(t,n){var c=this,l=t.serverId,r=t.licenseCode,p=t.startDate,f=t.expirationDate,m=t.licenseVersion,v=t.visible;return e.createElement(e.Fragment,{key:n},e.createElement("div",{className:"flexRow companyItem Hand",onClick:function(){c.handleSetVisible(v,n)}},e.createElement("div",{className:"flex flexRow valignWrapper"},e.createElement(E.Z,{icon:v?"expand_more":"navigate_next",className:"Gray_9e Font18 pointer"}),e.createElement("span",{className:"mLeft5 serverId"},l)),e.createElement("div",{className:"flex flexRow valignWrapper"},b[m]),e.createElement("div",{className:"flex flexRow valignWrapper"},j(p)),e.createElement("div",{className:"flex flexRow valignWrapper"},j(f))),v&&e.createElement("div",{className:"flexRow valignWrapper companyPrivateKeyItem"},e.createElement("div",{className:"flex flexRow w100"},e.createElement("div",{className:"Gray_75 mBottom5 mRight5"},_l("\u4EA7\u54C1\u5BC6\u94A5")),e.createElement("div",{className:"flex Relative"},e.createElement(S.Z,{minHeight:90,readOnly:!0,defaultValue:r}),e.createElement(A.Z,{text:e.createElement("span",null,_l("\u590D\u5236")),popupPlacement:"bottom"},e.createElement("div",{className:"copyWrapper"},e.createElement(G(),{component:"div","data-clipboard-text":r,onSuccess:function(){alert(_l("\u590D\u5236\u6210\u529F"))}},e.createElement(E.Z,{icon:"content-copy",className:"pointer Gray_75 Font16"}))))))))}},{key:"renderContent",value:function(){var t=this,n=this.state.licenseList,c=(0,y.A_)();return e.createElement(e.Fragment,null,e.createElement("div",{className:"personalEntrypointHeader flexRow"},e.createElement("div",{className:"Bold Font18"},_l("\u4EA7\u54C1\u5BC6\u94A5")),e.createElement("div",{className:"flexRow valignWrapper"},c.serverId?e.createElement("div",{className:"applyPrivateKey pointer",onClick:function(){t.setState({isApply:!0})}},_l("\u7533\u8BF7\u5BC6\u94A5")):null)),e.createElement("div",{className:"personalEntrypointContent"},e.createElement("div",{className:"flexRow titleWrapper"},e.createElement("div",{className:"Bold"},_l("\u670D\u52A1\u5668ID")),e.createElement("div",{className:"Bold"},_l("\u7248\u672C")),e.createElement("div",{className:"Bold"},_l("\u5F00\u59CB\u65F6\u95F4")),e.createElement("div",{className:"Bold"},_l("\u5230\u671F\u65F6\u95F4"))),n.length?e.createElement(e.Fragment,null,n.map(function(l,r){return t.renderLicenseItem(l,r)})):e.createElement("div",{className:"withoutList flexColumn valignWrapper"},e.createElement("div",{className:"iconWrapper flexRow valignWrapper"},e.createElement(E.Z,{className:"Font40",icon:"Empty_nokey"})),e.createElement("div",{className:"Gray_75"},_l("\u6682\u65E0\u5BC6\u94A5")))))}},{key:"render",value:function(){var t=this.state.isApply;return e.createElement("div",{className:"card personalEntrypointWrapper"},t?e.createElement(M,{onClose:this.handleCloseApply}):this.renderContent())}}]),s}(e.Component)}}]);