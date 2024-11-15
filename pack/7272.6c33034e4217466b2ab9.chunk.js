(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7272],{57272:(h,y,o)=>{"use strict";o.r(y),o.d(y,{default:()=>L});var F=o(54208),b=o(85105),A=o.n(b),E=o(99663),H=o(22600),N=o(49135),P=o(93196),v=o(86735),e=o(67294),G=o(49611),D=o.n(G),S=o(12424),T=o(99924),j=o(5017),Q=o(49273),W=o.n(Q),M=(0,v.Z)([`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 32px;
  height: 60px;
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.15);
  &::before {
    content: '';
    line-height: 60px;
    height: 60px;
    display: inline-block;
    vertical-align: middle;
  }
  .netManageTitle {
    height: 32px;
    line-height: 32px;
    color: #333;
    padding-left: 20px;
    margin-left: 20px;
    font-size: 17px;
    border-left: 1px solid #ddd;
  }
`],[`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 32px;
  height: 60px;
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.15);
  &::before {
    content: '';
    line-height: 60px;
    height: 60px;
    display: inline-block;
    vertical-align: middle;
  }
  .netManageTitle {
    height: 32px;
    line-height: 32px;
    color: #333;
    padding-left: 20px;
    margin-left: 20px;
    font-size: 17px;
    border-left: 1px solid #ddd;
  }
`]),K=j.ZP.div(M);function X(l){var a=l.projectId,t=l.title,n=(0,e.useState)(),i=(0,S.Z)(n,2),d=i[0],p=i[1],r=function(){T.Z.getSysColor({projectId:a}).then(function(c){c&&p(c.logo)})};return(0,e.useEffect)(function(){a&&r()},[a]),e.createElement(K,null,e.createElement("a",{href:"/",className:"TxtMiddle InlineBlock"},e.createElement("img",{src:d&&!d.includes("emptylogo.png")?d:W(),className:"TxtMiddle",style:{height:32}})),e.createElement("div",{className:"netManageTitle TxtMiddle InlineBlock"},t||_l("\u8D2D\u4E70\u7EED\u8D39")))}var O=o(52945),f=o.n(O);const C={aliPay:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.ajaxOptions=f()({},t.ajaxOptions,{type:"GET"}),mdyAPI("Pay","AliPay",a,t)},alipayReturn:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.ajaxOptions=f()({},t.ajaxOptions,{type:"GET"}),mdyAPI("Pay","AlipayReturn",a,t)},alipayNotify:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Pay","AlipayNotify",a,t)},weChatPay:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.ajaxOptions=f()({},t.ajaxOptions,{type:"GET"}),mdyAPI("Pay","WeChatPay",a,t)},weChatNotify:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Pay","WeChatNotify",a,t)},weChatQueryOrder:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.ajaxOptions=f()({},t.ajaxOptions,{type:"GET"}),mdyAPI("Pay","WeChatQueryOrder",a,t)}};var I=o(93224),w=(0,v.Z)([`
  padding-top: 60px;
  height: 100%;
  .payCon {
    width: 80%;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px auto 0;
    background: #fff;
    .payInfo {
      width: 280px;
      text-align: left;
    }
    .payNum {
      width: 280px;
      text-align: left;
      margin: 16px 0 24px 0;
    }
    .qrCode {
      width: 280px;
      height: 280px;
      border: 1px solid #eaeaea;
      padding: 9px;
      box-sizing: border-box;
      position: relative;
      img {
        width: 260px;
        height: 260px;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.95);
        z-index: 1;
      }
    }
    .payTxt {
      width: 280px;
      height: 50px;
      background: #15ba11;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 15px;
      font-weight: 600;
      margin-top: 20px;
    }
  }
  .paySuccessContent {
    .successCon {
      margin: 80px auto 0;
      width: 800px;
      border-radius: 4px;
      box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.15);
    }
  }
`],[`
  padding-top: 60px;
  height: 100%;
  .payCon {
    width: 80%;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px auto 0;
    background: #fff;
    .payInfo {
      width: 280px;
      text-align: left;
    }
    .payNum {
      width: 280px;
      text-align: left;
      margin: 16px 0 24px 0;
    }
    .qrCode {
      width: 280px;
      height: 280px;
      border: 1px solid #eaeaea;
      padding: 9px;
      box-sizing: border-box;
      position: relative;
      img {
        width: 260px;
        height: 260px;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.95);
        z-index: 1;
      }
    }
    .payTxt {
      width: 280px;
      height: 50px;
      background: #15ba11;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 15px;
      font-weight: 600;
      margin-top: 20px;
    }
  }
  .paySuccessContent {
    .successCon {
      margin: 80px auto 0;
      width: 800px;
      border-radius: 4px;
      box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.15);
    }
  }
`]),Z=j.ZP.div(w),L=function(l){(0,P.default)(a,l);function a(t){(0,E.default)(this,a);var n=(0,N.default)(this,(a.__proto__||A()(a)).call(this,t));return n.getQRCode=function(){var i=_.get(n.props,"match.params")||{},d=i.projectId,p=i.orderId;n.setState({loading:!0}),C.weChatPay({projectId:d,orderNumber:p}).then(function(r){var s=r.redirectUrl,c=s===void 0?"":s,x=r.price,g=x===void 0?"":x,m=r.subject,u=r.state,z=(0,I.Z)({width:270,height:270,value:c,correctLevel:I.q.H});n.setState({qrCodeUrl:z,price:g,subject:m,payState:u,loading:!1},function(){return n.pollFetch(5e3)})})},n.pollFetch=function(i){n.timeInterval=setInterval(n.getPayStatus,i)},n.getPayStatus=function(){var i=_.get(n.props,"match.params")||{},d=i.orderId,p=i.projectId;C.weChatQueryOrder({projectId:p,state:n.state.payState}).then(function(r){if(r.resultCode===0){clearInterval(n.timeInterval),n.setState({disabledScan:!0});return}r.tradeStatus==="SUCCESS"&&(clearInterval(n.timeInterval),window.open("/pay/success?orderId="+d+"&payType=1","_self"))})},n.state={qrCodeUrl:"",price:"",subject:"",loading:!1,payState:"",disabledScan:!1},n.timeInterval=null,n}return(0,H.default)(a,[{key:"componentDidMount",value:function(){var n=_.get(this.props,"match.params")||{},i=n.projectId,d=_.find(md.global.Account.projects||[],function(r){return r.projectId===i}),p=d.isProjectAdmin;p&&this.getQRCode()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeInterval)}},{key:"render",value:function(){var n=this.state,i=n.qrCodeUrl,d=n.price,p=n.subject,r=p===void 0?"-":p,s=n.loading,c=n.disabledScan,x=_.get(this.props,"match.params")||{},g=x.orderId,m=g===void 0?"-":g,u=x.projectId;return e.createElement(Z,null,e.createElement(D(),{title:r}),e.createElement(X,{projectId:u,title:_l("\u5FAE\u4FE1\u652F\u4ED8")}),s?e.createElement("div",{className:"payCon"},e.createElement(F.Z,null)):e.createElement("div",{className:"payCon"},e.createElement("div",{className:"payInfo"},e.createElement("div",{className:"Font17 bold mTop32 nowrap"},r),e.createElement("div",{className:"Gray_75"},_l("\u6536\u6B3E\u65B9\uFF1A\u4E0A\u6D77\u4E07\u4F01\u660E\u9053\u8F6F\u4EF6\u6709\u9650\u516C\u53F8")),e.createElement("div",{className:"Gray_75 nowrap"},_l("\u8BA2\u5355\u53F7\uFF1A%0",m))),e.createElement("div",{className:"payNum"},e.createElement("span",{className:"Font24 bold"},_l("%0\u5143",d/100))),e.createElement("div",{className:"qrCode"},e.createElement("img",{src:i}),c&&e.createElement("div",{className:"mask Font16"},e.createElement("div",null,_l("\u4E8C\u7EF4\u7801\u5931\u6548")),e.createElement("div",null,_l("\u8BF7\u5237\u65B0\u9875\u9762")))),e.createElement("div",{className:"Gray_75 mTop10"},_l("\u4E8C\u7EF4\u7801\u6709\u6548\u671F10\u5206\u949F\uFF0C\u8FC7\u671F\u8BF7\u5237\u65B0\u9875\u9762")),e.createElement("div",{className:"payTxt"},_l("\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801\u652F\u4ED8"))))}}]),a}(e.Component)},49273:h=>{h.exports="data:image/png;base64,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"}}]);
