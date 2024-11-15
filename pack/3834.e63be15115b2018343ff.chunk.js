"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3834],{53834:(P,c,e)=>{e.r(c),e.d(c,{default:()=>I});var x=e(85105),y=e.n(x),E=e(99663),T=e(22600),p=e(49135),C=e(93196),M=e(86735),n=e(67294),H=e(83947),N=e(5017),S=e(36021),O=e(96486),a=e.n(O),i,m,b=(0,M.Z)([`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid #eaeaea;
  margin: 0 12px 0 16px;
  color: #9e9e9e;
  text-align: center;
  line-height: 29px;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
    color: #2196f3;
  }
`],[`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid #eaeaea;
  margin: 0 12px 0 16px;
  color: #9e9e9e;
  text-align: center;
  line-height: 29px;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
    color: #2196f3;
  }
`]),A=N.ZP.div(b),D={account:_l("\u4E2A\u4EBA\u8D26\u6237"),admin:_l("\u7EC4\u7EC7\u7BA1\u7406"),user:_l("\u4E2A\u4EBA\u8D44\u6599"),group:_l("\u7FA4\u7EC4\u4FE1\u606F"),systemSetting:_l("\u7CFB\u7EDF\u914D\u7F6E"),search:_l("\u8D85\u7EA7\u641C\u7D22")},r={systemSetting:["/privateDeployment/:routeType?","/appInstallSetting"],account:["/personal"],admin:["/admin/:roleType/:projectId"],group:["/group/groupValidate"],user:["user","/user_:userId?"],search:["/search"]},I=(m=i=function(L){(0,C.default)(o,L);function o(){var u,s,t,g;(0,E.default)(this,o);for(var h=arguments.length,v=Array(h),d=0;d<h;d++)v[d]=arguments[d];return g=(s=(t=(0,p.default)(this,(u=o.__proto__||y()(o)).call.apply(u,[this].concat(v))),t),t.state={indexSideVisible:!1},t.getModule=function(){var f=t.props.path,l=f===void 0?"":f;return a().isEqual(r.user,l)?"user":a().includes(r.account,l)?"account":a().includes(r.admin,l)?"admin":a().includes(r.group,l)?"group":a().includes(r.search,l)?"search":a().includes(r.systemSetting,l)?"systemSetting":""},s),(0,p.default)(t,g)}return(0,T.default)(o,[{key:"render",value:function(){var s=D[this.getModule()];return n.createElement("div",{className:"netManageHeaderWrap"},n.createElement("div",{className:"netManageLogo"},n.createElement(A,{"data-tip":_l("\u9996\u9875"),onClick:function(){return(0,S.T8)("/dashboard")}},n.createElement("i",{className:"icon-home_page Font18"})),s&&n.createElement("div",{className:"netManageTitle"},s)),n.createElement(H.Z,null))}}]),o}(n.Component),i.propTypes={},i.defaultProps={},m)}}]);
