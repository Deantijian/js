"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4623],{14623:(G,i,n)=>{n.r(i),n.d(i,{default:()=>K});var d=n(88239),p=n(94942),s=n.n(p),D=n(33867),P=n(70801),O=n(36803),M=n(85105),v=n.n(M),h=n(99663),g=n(22600),C=n(49135),I=n(93196),f=n(86735),t=n(67294),A=n(49611),T=n.n(A),R=n(83936),W=n(5017),E=n(14118),L=n(36021),U=(0,f.Z)([`
  .apiCont {
    width: 100% !important;
    box-shadow: none !important;
    .tabCon {
      text-align: center;
    }
  }
`],[`
  .apiCont {
    width: 100% !important;
    box-shadow: none !important;
    .tabCon {
      text-align: center;
    }
  }
`]),B=W.ZP.div(U),K=function(b){(0,I.default)(e,b);function e(_){return(0,h.default)(this,e),(0,C.default)(this,(e.__proto__||v()(e)).call(this,_))}return(0,g.default)(e,[{key:"componentDidMount",value:function(){$("html").addClass("integrationApi")}},{key:"componentWillUnmount",value:function(){$("html").removeClass("integrationApi")}},{key:"render",value:function(){var y=this,m=this.props.match,Z=m===void 0?{}:m,u=Z.params,j=u===void 0?{}:u,N=j.apiId,x=function(){var c=(0,O.Z)(s().mark(function r(l){var o;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.Z.getApiRelationList({id:l.id,isPublic:!0},{isIntegration:!0});case 2:o=a.sent,P.Z.confirm({title:t.createElement("span",{className:"Red"},o.length>0?t.createElement(D.Z,{type:"warning",className:"mRight8"}):"",_l("\u5220\u9664\u201C%0\u201D",l.name)),description:t.createElement("div",null,o.length>0?t.createElement(t.Fragment,null,t.createElement("span",{className:"Font14 Bold Gray"},_l("\u6CE8\u610F\uFF1A\u5F53\u524DAPI\u6B63\u5728\u88AB\u7EC4\u7EC7\u5185\u5F15\u7528")),t.createElement("p",{className:"Gray_75 Font14 mTop8"},_l("\u8BF7\u52A1\u5FC5\u786E\u8BA4\u5F15\u7528\u4F4D\u7F6E\u4E0D\u518D\u9700\u8981\u6B64API\uFF0C\u518D\u6267\u884C\u6B64\u64CD\u4F5C"))):_l("API \u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u5220\u9664\u5417\uFF1F")),buttonType:"danger",onOk:function(){E.Z.deleteApi({id:l.id},{isIntegration:!0}).then(function(F){F&&(alert(_l("\u5220\u9664\u6210\u529F")),(0,L.T8)("/integration"))})}});case 4:case"end":return a.stop()}},r,y)}));return function(l){return c.apply(this,arguments)}}();return t.createElement(B,{className:"Con"},t.createElement(T(),{title:_l("\u96C6\u6210\u4E2D\u5FC3")}),t.createElement(R.Z,(0,d.default)({},this.props,{data:{},connectInfo:null,onChange:null,listId:N,className:"apiCont",forPage:!0,onDel:function(r){return x(r)}})))}}]),e}(t.Component)}}]);
