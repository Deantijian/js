(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[1699],{43950:(D,G,i)=>{"use strict";i.r(G),i.d(G,{default:()=>Ae});var F=i(88239),L=i(88106),Z=i(70801),b=i(20845),Fe=i(44336),P=i(74253),Ze=i(52262),V=i(65400),I=i(54208),A=i(12424),e=i(67294),h=i(3540),w=i(97553),ae=i(85105),j=i.n(ae),Q=i(99663),U=i(22600),M=i(49135),O=i(93196),ne=i(66344);const K={editSmtpSecret:function(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Email","EditSmtpSecret",d,c)},getSmtpSecret:function(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Email","GetSmtpSecret",d,c)},sendTest:function(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Email","SendTest",d,c)}};var Y=i(15577),le=i(96486),y=i.n(le),se=function(p){(0,O.default)(d,p);function d(c){(0,Q.default)(this,d);var t=(0,M.default)(this,(d.__proto__||j()(d)).call(this,c));return t.getEmailConfig=function(){var n=t.state,a=n.signature,r=n.fromAddress,o=n.server,l=n.account,s=n.password,m=n.port,u=n.enableSsl;if(y().isEmpty(a)){alert(_l("\u8BF7\u8F93\u5165\u7B7E\u540D"),3);return}if(y().isEmpty(r)){alert(_l("\u8BF7\u8F93\u5165\u53D1\u9001\u90AE\u7BB1"),3);return}else if(!ne.Z.isEmail(r)){alert(_l("\u53D1\u9001\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"),3);return}if(y().isEmpty(o)){alert(_l("\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740"),3);return}if(!m){alert(_l("\u8BF7\u8F93\u5165\u7AEF\u53E3"),3);return}var g={signature:a,fromAddress:r,server:o,account:l,password:s,port:m,enableSsl:u};return g},t.handleSave=function(){var n=t.getEmailConfig();n&&K.editSmtpSecret((0,F.default)({},n,{password:n.password?(0,Y.HI)(n.password):""})).then(function(a){a&&(alert(_l("\u4FEE\u6539\u6210\u529F")),t.props.onCancel(),t.props.onChange(n))})},t.handleSendTest=function(){var n=t.state.toEmail,a=t.getEmailConfig();if(a){if(y().isEmpty(n)){alert(_l("\u8BF7\u8F93\u5165\u6536\u4EF6\u90AE\u7BB1"),3);return}t.setState({toEmailLoading:!0}),K.sendTest((0,F.default)({},a,{toEmail:n,password:a.password?(0,Y.HI)(a.password):""})).then(function(r){t.setState({toEmailLoading:!1,toEmailResult:r})}).catch(function(){t.setState({toEmailLoading:!1,toEmailResult:null})})}},t.state={signature:"",fromAddress:"",server:"",account:"",port:"",enableSsl:!1,toEmail:"",toEmailVisible:!1,toEmailLoading:!1,toEmailResult:null},t}return(0,U.default)(d,[{key:"componentWillReceiveProps",value:function(t){y().isEmpty(t.emailConfig)||this.setState((0,F.default)({},t.emailConfig))}},{key:"render",value:function(){var t=this,n=this.props.visible,a=this.state,r=a.signature,o=a.fromAddress,l=a.server,s=a.account,m=a.password,u=a.port,g=a.enableSsl,f=this.state,E=f.toEmail,S=f.toEmailVisible,k=f.toEmailLoading,x=f.toEmailResult;return e.createElement(e.Fragment,null,e.createElement(Z.Z,{visible:n,anim:!1,title:_l("\u90AE\u4EF6\u670D\u52A1\u8BBE\u7F6E"),width:560,footer:e.createElement("div",{className:"mui-dialog-footer"},e.createElement(w.ZP,{type:"link",onClick:this.props.onCancel},_l("\u53D6\u6D88")),e.createElement(w.ZP,{type:"ghost",onClick:function(){var v=t.getEmailConfig();t.setState({toEmailVisible:!!v})}},_l("\u6D4B\u8BD5\u8FDE\u63A5")),e.createElement(w.ZP,{type:"primary",onClick:this.handleSave},_l("\u786E\u5B9A"))),onCancel:this.props.onCancel},e.createElement("div",{className:"mBottom20"},e.createElement("div",{className:"mBottom5 Font14"},_l("\u7B7E\u540D")," ",e.createElement("span",{class:"Red"},"*")),e.createElement(h.Z,{value:r,onChange:function(v){t.setState({signature:v})}})),e.createElement("div",{className:"mBottom20"},e.createElement("div",{className:"mBottom5 Font14"},_l("\u53D1\u9001\u90AE\u7BB1")," ",e.createElement("span",{class:"Red"},"*")),e.createElement(h.Z,{className:"w100",value:o,onChange:function(v){t.setState({fromAddress:v})}})),e.createElement("div",{className:"mBottom20"},e.createElement("div",{className:"mBottom5 Font14"},_l("\u670D\u52A1\u5668")," ",e.createElement("span",{class:"Red"},"*")),e.createElement(h.Z,{className:"w100",value:l,onChange:function(v){t.setState({server:v})}})),e.createElement("div",{className:"mBottom20"},e.createElement("div",{className:"mBottom5 Font14"},_l("\u8D26\u53F7")),e.createElement(h.Z,{className:"w100",value:s,onChange:function(v){t.setState({account:v})}})),e.createElement("div",{className:"mBottom20"},e.createElement("div",{className:"mBottom5 Font14"},_l("\u5BC6\u7801")),e.createElement(h.Z,{className:"w100",value:m,onChange:function(v){t.setState({password:v})},type:"password"})),e.createElement("div",{className:"mBottom20"},e.createElement("div",{className:"mBottom5 Font14"},_l("\u7AEF\u53E3")," ",e.createElement("span",{class:"Red"},"*")),e.createElement(h.Z,{value:u,onChange:function(v){t.setState({port:v})}})),e.createElement("div",{className:"mtop10"},e.createElement(b.Z,{checked:g,onClick:function(v){t.setState({enableSsl:!v})}},_l("\u4F7F\u7528 SSL \u94FE\u63A5")))),e.createElement(Z.Z,{visible:S,anim:!1,title:_l("\u6D4B\u8BD5\u8FDE\u63A5"),width:560,onOk:this.handleSendTest,okText:_l("\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6"),onCancel:function(){return t.setState({toEmailVisible:!1,toEmailResult:null})}},e.createElement("div",{className:"mBottom10"},_l("\u6536\u4EF6\u90AE\u7BB1")),e.createElement(h.Z,{className:"w100 mBottom10",value:E,onChange:function(v){t.setState({toEmail:v})}}),k?e.createElement("div",{style:{width:30}},e.createElement(I.Z,{size:"small"})):x&&e.createElement("div",{className:x.success?"DepGreen":"Red"},e.createElement("div",{className:"mBottom5"},x.success?_l("\u53D1\u9001\u6210\u529F"):_l("\u53D1\u9001\u5931\u8D25")),e.createElement("div",null,!x.success&&x.message))))}}]),d}(e.Component),J=i(33867),re=i(43727),oe=i(52945),ie=i.n(oe),X=i(86735);const W={editProviders:function(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Sms","EditProviders",d,c)},getProviders:function(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Sms","GetProviders",d,c)}};var z=i(5017),me=(0,X.Z)([`
  .privateTplList {
    align-items: center;
    padding: 19px 40px;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  }
`],[`
  .privateTplList {
    align-items: center;
    padding: 19px 40px;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  }
`]),ce=(0,X.Z)([`
  border: 1px solid #ddd;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: #9e9e9e;
  }
`],[`
  border: 1px solid #ddd;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: #9e9e9e;
  }
`]),de=z.ZP.div(me),ue=z.ZP.span(ce),ve=function(p){(0,O.default)(d,p);function d(c){(0,Q.default)(this,d);var t=(0,M.default)(this,(d.__proto__||j()(d)).call(this,c));return t.editProviders=function(){var n=t.state,a=n.operators,r=n.data,o=0;if(r.forEach(function(l){var s=a[l.name];!l.signature&&!l.secret[s.keys[0]]&&!l.secret[s.keys[1]]&&l.sms.china.templates.length===0||l.signature&&l.secret[s.keys[0]]&&l.secret[s.keys[1]]&&l.sms.china.templates.length>0||o++}),o>0){alert(_l("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E\u4FE1\u606F"),2);return}W.editProviders({providers:r}).then(function(l){alert(_l("\u8BBE\u7F6E\u5B8C\u6210")),t.props.onSave(r)}).catch(function(){alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})},t.onSave=function(){var n=t.state,a=n.editDialogKey,r=n.editIndex,o=n.currentTemp,l=[].concat(t.state.data),s=l.find(function(m){return m.name===a});if(!o.id){alert(_l("\u6A21\u677F Code\u4E0D\u80FD\u4E3A\u7A7A"),2);return}o.vars=o.vars.filter(function(m){return m}),r!==""?s.sms.china.templates=s.sms.china.templates.map(function(m,u){return u===r?o:m}):s.sms.china.templates.push(o),t.setState({data:l,editDialogKey:"",currentTemp:null})},t.state={loading:!0,editDialogKey:"",editIndex:"",currentTemp:null,operators:{Tencentyun:{text:_l("\u817E\u8BAF\u4E91"),tags:["App ID","App Key"],keys:["appId","appKey"]},Aliyun:{text:_l("\u963F\u91CC\u4E91"),tags:["Access Key","Access Secret"],keys:["accessKey","accessSecret"]}},data:[{signature:"",name:"Tencentyun",secret:{appId:"",appKey:""},sms:{china:{templates:[]}}},{signature:"",name:"Aliyun",secret:{accessKey:"",accessSecret:""},sms:{china:{templates:[]}}}]},t}return(0,U.default)(d,[{key:"componentDidMount",value:function(){var t=this,n=this.state.data;W.getProviders().then(function(a){n.forEach(function(r){a.find(function(o){return o.name===r.name})||a.push(r)}),t.setState({data:a,loading:!1})})}},{key:"onChangeSecret",value:function(t,n,a){var r=[].concat(this.state.data),o=r.find(function(l){return l.name===t});o.secret[n]=a,this.setState({data:r})}},{key:"onChangeSignature",value:function(t,n){var a=[].concat(this.state.data),r=a.find(function(o){return o.name===t});r.signature=n,this.setState({data:a})}},{key:"onDeleteTemplate",value:function(t,n){var a=[].concat(this.state.data),r=a.find(function(o){return o.name===t});y().remove(r.sms.china.templates,function(o,l){return l===n}),this.setState({data:a})}},{key:"onChangeCode",value:function(t){var n=this.state.currentTemp;n.id=t,this.setState({currentTemp:n})}},{key:"onChangeVar",value:function(t,n){var a=this.state.currentTemp;a.vars=a.vars.map(function(r,o){return o===t?n:r}),this.setState({currentTemp:a})}},{key:"onDeleteVar",value:function(t){var n=this.state.currentTemp;y().remove(n.vars,function(a,r){return r===t}),this.setState({currentTemp:n})}},{key:"onAddVar",value:function(){var t=this.state.currentTemp;t.vars.push(""),this.setState({currentTemp:t})}},{key:"renderTemplates",value:function(t,n){var a=this,r={1:_l("\u9A8C\u8BC1\u7801")};return n.map(function(o,l){return e.createElement("div",{className:"privateTplList flexRow mBottom15",key:l},e.createElement("div",{className:"flex"},e.createElement("div",{className:"Font12 Gray_9e"},_l("\u6A21\u677F\u7C7B\u578B")),e.createElement("div",{className:"Font15"},r[o.type])),e.createElement("div",{className:"flex"},e.createElement("div",{className:"Font12 Gray_9e"},_l("\u6A21\u677F code")),e.createElement("div",{className:"Font15",style:{height:22}},o.id)),e.createElement("div",{className:"flex"},e.createElement("div",{className:"Font12 Gray_9e"},_l("\u53D8\u91CF\u53C2\u6570")),e.createElement("div",{className:"Font15 ellipsis",style:{height:22}},o.vars.join("\uFF0C"))),e.createElement("div",null,e.createElement("span",{className:"ThemeColor3 ThemeHoverColor2 pointer",onClick:function(){return a.setState({editDialogKey:t,editIndex:l,currentTemp:ie()({},o)})}},_l("\u7F16\u8F91")),e.createElement("span",{className:"ThemeColor3 ThemeHoverColor2 mLeft35 pointer",onClick:function(){return a.onDeleteTemplate(t,l)}},_l("\u5220\u9664"))))})}},{key:"renderEditDialog",value:function(){var t=this,n=this.state,a=n.editDialogKey,r=n.currentTemp,o=n.operators,l=[{text:_l("\u9A8C\u8BC1\u7801"),value:1}];return a?e.createElement(Z.Z,{visible:!0,anim:!1,title:o[a].text,width:480,okText:_l("\u4FDD\u5B58"),onOk:this.onSave,onCancel:function(){return t.setState({editDialogKey:"",currentTemp:null})}},e.createElement("div",{className:"Font14"},_l("\u6A21\u677F\u7C7B\u578B"),e.createElement("span",{className:"Gray_bd"},_l("\uFF08\u6682\u4EC5\u652F\u6301\u9A8C\u8BC1\u7801\uFF09"))),e.createElement(re.Z,{className:"w100 mTop10",style:{background:"#f5f5f5"},disabled:!0,value:r.type,border:!0,data:l}),e.createElement("div",{className:"Font14 mTop20"},_l("\u6A21\u7248 Code")),e.createElement(h.Z,{className:"w100 mTop10",value:r.id,onChange:function(m){return t.onChangeCode(m.trim())}}),e.createElement("div",{className:"Font14 mTop20"},_l("\u53D8\u91CF\u53C2\u6570")),a==="Tencentyun"?e.createElement("div",{className:"Font12 mTop10 Gray_bd"},_l('\u5982\uFF1A"\u60A8\u7684\u9A8C\u8BC1\u7801\u662F{1}\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528"\uFF0C\u5219\u53C2\u6570\u4E3A {1}\u3002')):e.createElement("div",{className:"Font12 mTop10 Gray_bd"},_l('\u5982\uFF1A"\u60A8\u7684\u9A8C\u8BC1\u7801\u662F${code}\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528"\uFF0C\u5219\u53C2\u6570\u4E3A code\u3002')),r.vars.map(function(s,m){return e.createElement("div",{className:"mTop10",key:m},e.createElement(h.Z,{style:{width:215},value:s,onChange:function(g){return t.onChangeVar(m,g.trim())}}),e.createElement("span",{className:"Gray_9e ThemeHoverColor3 pointer mLeft15",onClick:function(){return t.onDeleteVar(m)}},_l("\u5220\u9664")))}),e.createElement("div",{className:"mTop10"},e.createElement(ue,{className:"pointer",onClick:function(){return t.onAddVar()}},e.createElement(J.Z,{icon:"add",className:"Gray_9e Font24"})))):null}},{key:"render",value:function(){var t=this,n=this.props.name,a=this.state,r=a.loading,o=a.operators,l=a.data;return r?e.createElement(I.Z,null):e.createElement(de,{className:"flexColumn"},e.createElement("div",{className:"flex"},l.filter(function(s){return s.name===n}).map(function(s){var m=o[s.name],u=s.sms.china.templates;return e.createElement(e.Fragment,{key:s.name},e.createElement("div",{className:"flexColumn"},e.createElement("div",{className:"flex"},e.createElement("div",{className:"Font14 mBottom5"},m.tags[0]),e.createElement(h.Z,{className:"w100",value:s.secret[m.keys[0]],onChange:function(f){return t.onChangeSecret(s.name,m.keys[0],f.trim())}})),e.createElement("div",{className:"flex"},e.createElement("div",{className:"Font14 mTop15 mBottom5"},m.tags[1]),e.createElement(h.Z,{type:"password",className:"w100",value:s.secret[m.keys[1]],onChange:function(f){return t.onChangeSecret(s.name,m.keys[1],f.trim())}})),e.createElement("div",{className:"flex"},e.createElement("div",{className:"Font14 mTop15 mBottom5"},_l("\u7B7E\u540D")),e.createElement(h.Z,{className:"w100",value:s.signature,onChange:function(f){return t.onChangeSignature(s.name,f.trim())}}))),!y().isEmpty(u)&&e.createElement("div",{className:"Font14 mTop10 mBottom5"},_l("\u77ED\u4FE1\u6A21\u677F")),t.renderTemplates(s.name,u),e.createElement("div",{style:{color:"#2196F3"},className:"mTop20 pointer",onClick:function(){return t.setState({editDialogKey:s.name,editIndex:"",currentTemp:{type:1,id:"",vars:[]}})}},e.createElement(J.Z,{icon:"add"}),_l("\u6DFB\u52A0\u6A21\u677F")))})),this.renderEditDialog())}}]),d}(e.Component),pe=i(13739),ge=i(46016),fe=i(26231),Ee=i.n(fe),he=i(44957),ye=i.n(he),Se=function(d){var c=(0,e.useState)(!1),t=(0,A.Z)(c,2),n=t[0],a=t[1],r=(0,e.useState)({}),o=(0,A.Z)(r,2),l=o[0],s=o[1],m=(0,e.useState)(!0),u=(0,A.Z)(m,2),g=u[0],f=u[1],E={width:100};return(0,e.useEffect)(function(){K.getSmtpSecret().then(function(S){S&&s(S),f(!1)})},[]),e.createElement("div",{className:"privateCardWrap flexColumn"},e.createElement("div",{className:"Font17 bold mBottom8"},_l("\u90AE\u4EF6\u670D\u52A1")),g?e.createElement(I.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("\u7B7E\u540D")),e.createElement("div",null,l.signature||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("\u53D1\u9001\u90AE\u7BB1")),e.createElement("div",null,l.fromAddress||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("\u670D\u52A1\u5668")),e.createElement("div",null,l.server||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("\u8D26\u53F7")),e.createElement("div",null,l.account||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("\u5BC6\u7801")),e.createElement("div",null,l.password?(l.password||"").replace(/./g,"*"):_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("\u7AEF\u53E3")),e.createElement("div",null,l.port||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("div",{style:E,className:"Gray_75"},_l("SSL \u94FE\u63A5")),e.createElement("div",null,l.enableSsl?_l("\u542F\u7528"):_l("\u672A\u542F\u7528")))),e.createElement("div",null,e.createElement(V.default,{ghost:!0,type:"primary",onClick:function(){return a(!0)}},_l("\u8BBE\u7F6E"))),e.createElement(se,{visible:n,emailConfig:l,onCancel:function(){a(!1)},onChange:function(k){s(k)}}))},Ce=function(d){var c=md.global.SysSettings,t=(0,e.useState)([]),n=(0,A.Z)(t,2),a=n[0],r=n[1],o=(0,e.useState)(!0),l=(0,A.Z)(o,2),s=l[0],m=l[1],u=(0,e.useRef)(null),g=(0,e.useState)({}),f=(0,A.Z)(g,2),E=f[0],S=f[1],k=(0,e.useState)(c.enableSmsCustomContent),x=(0,A.Z)(k,2),C=x[0],v=x[1],R={width:100};(0,e.useEffect)(function(){W.getProviders().then(function(T){r(T),m(!1)})},[]);var H=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=arguments[1],Ie=B.name,$=B.secret,q=$===void 0?{}:$,Te=B.sms,_=N.tags,ee=N.keys,ke=N.icon,De=q[ee[0]],te=q[ee[1]];return e.createElement(e.Fragment,null,e.createElement("div",{className:"flexRow valignWrapper mBottom15"},e.createElement("img",{style:{width:15},src:ke}),e.createElement("div",{className:"Font14 bold mLeft5"},N.title),e.createElement("div",{className:"Gray_9e mLeft20 pTop2"},_l("\u4EC5\u652F\u6301\u53D1\u9001\u767B\u5F55/\u6CE8\u518C\u9A8C\u8BC1\u7801"))),e.createElement("div",{className:"flexRow valignWrapper mBottom12"},e.createElement("div",{style:R,className:"Gray_75"},_[0]),e.createElement("div",null,De||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom12"},e.createElement("div",{style:R,className:"Gray_75"},_[1]),e.createElement("div",null,te?te.replace(/./g,"*"):_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom12"},e.createElement("div",{style:R,className:"Gray_75"},_l("\u7B7E\u540D")),e.createElement("div",null,B.signature||_l("\u672A\u914D\u7F6E"))),e.createElement("div",{className:"flexRow valignWrapper mBottom12"},e.createElement("div",{style:R,className:"Gray_75"},_l("\u77ED\u4FE1\u6A21\u677F")),e.createElement("div",null,_l("%0\u4E2A",y().get(Te,"china.templates.length")||0))),e.createElement("div",null,e.createElement(V.default,{ghost:!0,type:"primary",onClick:function(){S(N)}},_l("\u8BBE\u7F6E"))))},xe={title:_l("\u817E\u8BAF\u4E91"),name:"Tencentyun",tags:["App ID","App Key"],keys:["appId","appKey"],icon:Ee()},Be={title:_l("\u963F\u91CC\u4E91"),name:"Aliyun",tags:["Access Key","Access Secret"],keys:["accessKey","accessSecret"],icon:ye()};return e.createElement("div",{className:"privateCardWrap flexColumn"},e.createElement("div",{className:"Font17 bold mBottom8"},_l("\u77ED\u4FE1\u670D\u52A1")),s?e.createElement(I.Z,null):e.createElement(e.Fragment,null,H(y().find(a,{name:"Tencentyun"}),xe),e.createElement(P.Z,{className:"mTop20 mBottom20"}),H(y().find(a,{name:"Aliyun"}),Be)),e.createElement(P.Z,{className:"mTop20 mBottom20"}),e.createElement("div",{className:"Font15 bold mBottom8"},_l("\u81EA\u52A9\u96C6\u6210\u670D\u52A1")),e.createElement("div",{className:"Gray_9e"},_l("\u5982\u679C\u9700\u8981\u542F\u7528\u7CFB\u7EDF\u5185\u77ED\u4FE1\u670D\u52A1\u76F8\u5173\u7684\u529F\u80FD(\u5982: \u5DE5\u4F5C\u6D41\u77ED\u4FE1\u901A\u77E5\u8282\u70B9\u3001\u624B\u673A\u53F7\u9080\u8BF7\u7528\u6237\u52A0\u5165\u4EA7\u54C1\u4F7F\u7528),\u9700\u81EA\u884C\u7533\u8BF7\u7B2C\u4E09\u65B9\u77ED\u4FE1\u670D\u52A1\u5546\u8D26\u53F7,\u7136\u540E\u81EA\u4E3B\u96C6\u6210\u6216\u7531\u5B98\u65B9\u6280\u672F\u56E2\u961F\u5B9A\u5236\u5F00\u53D1"),"\uFF0C",e.createElement("a",{className:"pointer",target:"_blank",href:"https://docs.pd.mingdao.com/faq/sms"},_l("\u67E5\u770B\u8BF4\u660E"))),e.createElement("div",{className:"mTop30"},e.createElement(b.Z,{checked:!C,text:_l("\u9690\u85CF\u77ED\u4FE1\u670D\u52A1\u76F8\u5173\u7684\u7CFB\u7EDF\u529F\u80FD"),onClick:function(B){var N=B;(0,pe.xR)({enableSmsCustomContent:N},function(){v(N),md.global.SysSettings.enableSmsCustomContent=N})}}),e.createElement("div",{className:"Gray_9e mTop8 mLeft25"},_l("\u5982\u679C\u4F60\u672A\u5B8C\u6210\u81EA\u4E3B\u96C6\u6210,\u53EF\u4EE5\u5728\u7CFB\u7EDF\u5185\u9690\u85CF\u8FD9\u4E9B\u529F\u80FD\u5165\u53E3"))),e.createElement(Z.Z,{visible:!y().isEmpty(E),anim:!1,title:_l("%0\u77ED\u4FE1\u914D\u7F6E\u670D\u52A1",E.title),width:680,okText:_l("\u4FDD\u5B58"),onOk:function(){u.current.editProviders()},onCancel:function(){return S({})}},e.createElement(ve,{ref:u,name:E.name,onSave:function(B){r(B),S({})}})))},Ne=function(d){var c=[{type:"WorkWeixin",text:_l("\u4F01\u4E1A\u5FAE\u4FE1")},{type:"Dingding",text:_l("\u9489\u9489")},{type:"Welink",text:_l("Welink")},{type:"Feishu",text:_l("\u98DE\u4E66")},{type:"Weixin",text:_l("\u5FAE\u4FE1")}],t=(0,e.useState)({hideWorkWeixin:md.global.SysSettings.hideWorkWeixin,hideDingding:md.global.SysSettings.hideDingding,hideWelink:md.global.SysSettings.hideWelink,hideFeishu:md.global.SysSettings.hideFeishu,hideWeixin:md.global.SysSettings.hideWeixin}),n=(0,A.Z)(t,2),a=n[0],r=n[1],o=function(s,m){ge.Z.editSysSettings({settings:(0,L.default)({},"hide"+m,s)}).then(function(u){u?(r((0,F.default)({},a,(0,L.default)({},"hide"+m,s))),md.global.SysSettings["hide"+m]=s,alert(_l("\u4FEE\u6539\u6210\u529F"))):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})};return e.createElement("div",{className:"privateCardWrap flexColumn"},e.createElement("div",{className:"Font17 bold mBottom8"},_l("\u7B2C\u4E09\u65B9\u5E73\u53F0")),e.createElement("div",{className:"mBottom15 Gray_9e"},_l("\u5982\u679C\u4F60\u7684\u4F01\u4E1A\u4E0D\u4F7F\u7528\u4E0B\u5217\u7B2C\u4E09\u65B9\u5E73\u53F0\uFF0C\u4F60\u53EF\u4EE5\u53D6\u6D88\u52FE\u9009")),e.createElement("div",{className:"flexRow"},c.map(function(l){var s=l.type,m=l.text;return e.createElement(e.Fragment,{key:s},e.createElement(b.Z,{checked:!a["hide"+s],onClick:function(g){return o(g,s)}}),e.createElement("span",{className:"mRight30"},m))})))};const Ae=function(p){return e.createElement(e.Fragment,null,e.createElement(Se,p),e.createElement(Ce,p),e.createElement(Ne,p))}},44957:D=>{D.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmtJREFUSEvtlktoE1EUhr+TjvVRlFrcaXUjrrSuxE2hCu4K2oXRlaAuNBPpwheiiPGBC0FBLJ2Jbgy60iJYVFpwJQo+UBFXQjc+QdGqNLWtYObInTYhj0li7GAQepc55/7fPf+9c06EOi2pE5cZ8D9zvv5Wq00bsBVoBRpKSleeS5JzQZboblZjcQbFKooryheE26S5KVf5kY37FWuM/UQ4ATQFeq2kgXZxeRkIjtLAIi4jbCuzXxGe4dElST6YHFGbDcAdhMaATZ+AeygpcRmo9AB0O83M4zD4equAWQGuDeLSKeAZcD/CxlyS8hW4BVxDuC8Oo7W8OE1gMUwrGbYg/tWZQ2SvwCPDWrnIU9E434BmX1x5i9IhSV7XAiuXq5NXcBLhSF7OQXE4a8Ca+9EjJUl2hAHNamic5cBQnuYpcThWCFZccYmHCo6xmAjv/wqsIESJVDuQ9JEpztFpgeMkgONVwU5p7/9PwcauBpZUrbiXx6FaXQ1YsbH84R0nxcWeDqik4l0sxeJN0KseB+ZMNZBHjLNeUkyEBVebKML1PL2j4nDafMdPgDVTAQ/lLsJ5fvGQS4yI6Wc1Lo3SSAvLiLAZOIDQkpMQuqSXftOrY4D5EIpn80fUP9QAFjekh8/V+GrTgbAJWAesDBgUQ4zRZhwV3ctcJuhD6Kwg/IpR2uUKw2X7sk03woUKGiNm3ovDoMmZnMcG/pNu3xZYUGazIw77gmK6hxUoD3LDpjDJ80crHBKHF9lQgb2aIMI7mrAC2uNsVHowpy5ZupP5WCwsCVgoY6QlxffiWP3/c1V7OGHHZyoO29Gyer8BREXjH61t044AAAAASUVORK5CYII="},26231:D=>{D.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABOhJREFUSEvtlltsVUUUhv81sy/n9IamlABCqNhSSkRj1EBsDBLAYMODPnBRqKIJRoRwSUhEiTlUUcQYBYvBB4VAQbCCGvEKD3hJizENCoS0coshEgqlAm1Puy8zs8w+h0qB00KJCS/M0072Xv+31j+z1h7CTVp0k7i4Be7Z+cUcl6pjoiBrloEYpxkFBBARnyXQzxLhluBc6y5UD0xez/Zdl9XuggvFirKqNNMEkLTADLBJ65OI8IDRWgr8KHXH/GBtXuO14NcEO/P9kaGQ3zHkMLCOKmyWwCfEwQEQsyb3HjBmGogCQLCAPmkZrzxYm3OwN3jv4EXnbiOd8y2TNRZgz0JQlcfJN/6pym/tLtr/Oc49n6uWKpaLAGQR8z424lF8QC09wXsF2wu8hSHb74HAFqtXVJPzDj4jnVFsKktrkFqoSK4CG2khXKbej6/sOzjBgs7zEWYMtzioVU3uuB6hXeopuL8DjGwJ7PerYkv6DM577eyYtvacvWBBdqimBquztl/rwKTeJ1hgeNvtiOfaBWhub542oD1T3FVWOz8dLmVLL9ZKTDKhKCQDiJiudaRZ2xmc3o7x41XGBBJ7rPhdY57wyJ7DTMUAbAK3CXBdzOI1yafcA93jLoETCRGbPKPCZ/qQGbEM4mwDNaHF8zCm9PJDs7klT3JulYGoYI56q/tiCBg/RuH8jqNZ61EZlYJLI9Ota5gSsNjK4BwCWgV4NzPvF0LkG6DcgIrATBJcn2Uws+3h0sMp+erkIMn2Fk3WIwBDsDouQN8YULMgc6+GnMRM/QjcYUNXBE+7n18C76zPovzcX5kxWoBPOayne2WjakHp7FD/Z3/p8ypNmB0laxnep0JvYvbRYtdz3e2aZFk0VGxS2xwvXJyck3O6a7/jRZ1jfWNtMySHEkwDi9axmJXfmrIlVndoggdrd/RsM54Jy0qqr7K6vt52vOxKRTTHBebSiaF1vrK/1LAeBLOxoTaF2pmLZ8m7Mja+sWN6p3C3Ro648Mr9ipzvU2CnrmFpwLSSwK18wRqA8mI/4wFiJmfvwRI6PCIMhfjUQN4PsLagVqvz7jIsoMxxNexIPzij2epnCfOymmW/lQKL2oaEAS23wCdVWemQ3tomvrHjDl/YXxnI+2AMW0K/q1xnGaZR0Fuc3OSf0GQPBXg5KmRlCuzubXzBN1gHIMwnurPloZKTmUTcjd4ILcQXisUoANois0YNsV/CeMrcYhdFsj5ODu603b8YsAWZF02Fsy4N/qVhhC/EfoBjNvBRGJyae2W/OhvaRyvp1BiSJWBWDuk3A9d5HdN6GKFdmdewtINwTWjkvGjeO0Y/EMx2D6V7jlnYdY2bQ9CTUdUu8Qab7Vfby4rORK/zqi8UtXN8lyGrkJiNS94K7+hvK1DZwzC5CB24vq2gxXEToZHPR+fWQrhDHXNnoJLUf80e2/N7oe/EdzL47qi9CfAkcEJ2Ol7YNHiwYad/uv+MkjB/MHqolFlIsGuIYpppGIPcdBw1Oiac4s+OHbtsgKTaak9DobL5bU30eLQf5MfATQMB5aR/9n1dqcsChxaZr5UwSzAzfrxL4mq1REI4j00dqbScLP8eUhx6cTdtQLcleknCRLcTYknsM6ljcVI/JI9kH+oalT2D+1rVDX5/A/7dIOmKsFvg/8fH61C5aVb/C9dKND3rlUwVAAAAAElFTkSuQmCC"}}]);