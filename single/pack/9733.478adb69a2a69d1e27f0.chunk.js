"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[9733,9251],{37362:(I,s,t)=>{t.r(s),t.d(s,{default:()=>M});var d=t(54208),f=t(85105),p=t.n(f),c=t(99663),h=t(22600),g=t(49135),m=t(93196),E=t(86735),a=t(67294),u=t(11555),C=t(10358),x=t(75915),v=t(71893),D=(0,E.Z)([`
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
  background-color: #f5f5f5;
  .loadingWrap {
    width: 100%;
    height: 100vh;
  }
  .chartItemWrap {
    height: 300px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 10px;
    padding: 16px 15px 15px;
    box-sizing: content-box;
    .reportName {
      font-size: 17px;
      font-weight: 400;
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
  background-color: #f5f5f5;
  .loadingWrap {
    width: 100%;
    height: 100vh;
  }
  .chartItemWrap {
    height: 300px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 10px;
    padding: 16px 15px 15px;
    box-sizing: content-box;
    .reportName {
      font-size: 17px;
      font-weight: 400;
    }
  }
`]),b=v.ZP.div(D),M=function(P){(0,m.default)(o,P);function o(l){(0,c.default)(this,o);var n=(0,g.default)(this,(o.__proto__||p()(o)).call(this,l));return n.getData=function(){var i=_.get(n.props,"match.params")||{},r=i.projectId;r&&(n.setState({loading:!0}),C.Z.getAllFavorites({projectId:r,type:2,isRefresh:1}).then(function(e){n.setState({collectCharts:e,loading:!1})}).fail(function(e){n.setState({collectCharts:[],loading:!1})}))},n.state={loading:!1,collectCharts:[]},n}return(0,h.default)(o,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var n=this.state,i=n.collectCharts,r=n.loading;return a.createElement(b,null,r?a.createElement("div",{className:"loadingWrap flexRow alignItemsCenter justifyContentCenter"},a.createElement(d.Z,null)):i.map(function(e,O){return a.createElement("div",{key:e.favoriteId,className:"chartItemWrap flexColumn"},a.createElement(u.default,{isHorizontal:!1,reportId:e.reportId,pageId:e.pageId,viewId:e.viewId,filters:[]}))}),a.createElement(x.Z,{icon:"home",onClick:function(){window.mobileNavigateTo("/mobile/dashboard")}}))}}]),o}(a.Component)}}]);
