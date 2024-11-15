"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[8900],{38900:(L,v,e)=>{e.r(v),e.d(v,{default:()=>G});var S=e(3540),f=e(33867),N=e(85105),T=e.n(N),V=e(99663),K=e(22600),g=e(49135),M=e(93196),Z=e(86735),n=e(67294),H=e(12855),A=e(83947),I=e(5017),y=e(36021),C=e(15577),P=e(96486),l=e.n(P),E,m,x,U=(0,Z.Z)([`
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
`]),b=I.ZP.div(U),D={account:_l("\u4E2A\u4EBA\u8D26\u6237"),admin:_l("\u7EC4\u7EC7\u7BA1\u7406"),user:_l("\u4E2A\u4EBA\u8D44\u6599"),group:_l("\u7FA4\u7EC4\u4FE1\u606F"),search:_l("\u8D85\u7EA7\u641C\u7D22")},c={account:["/personal"],admin:["/admin/:roleType/:projectId"],group:["/group/groupValidate"],user:["user","/user_:userId?"],search:["/search"]},G=(0,H.Z)(E=(x=m=function(O){(0,M.default)(s,O);function s(){var i,t,a,d;(0,V.default)(this,s);for(var h=arguments.length,u=Array(h),p=0;p<h;p++)u[p]=arguments[p];return d=(t=(a=(0,g.default)(this,(i=s.__proto__||T()(s)).call.apply(i,[this].concat(u))),a),a.state={indexSideVisible:!1,searchValue:void 0,searchKey:void 0},a.getModule=function(){var o=a.props.path,r=o===void 0?"":o;return l().isEqual(c.user,r)?"user":l().includes(c.account,r)?"account":l().includes(c.admin,r)?"admin":l().includes(c.group,r)?"group":l().includes(c.search,r)?"search":""},a.onSearchChange=function(o){return a.setState({searchValue:o})},a.onSearch=function(){var o=a.state,r=o.searchValue,R=o.searchKey;if(r!==R){var F=(0,C.A_)(a.props.search);a.setState({searchKey:r}),(0,y.T8)("/search?search_key="+(r||"")+"&search_type="+(F.search_type||""))}},a.onClearSearch=function(){return a.setState({searchValue:""})},t),(0,g.default)(a,d)}return(0,K.default)(s,[{key:"componentDidMount",value:function(){var t=(0,C.A_)(this.props.search);this.setState({searchKey:t.search_key||void 0,searchValue:t.search_key||void 0})}},{key:"render",value:function(){var t=this,a=D[this.getModule()],d=this.state.searchValue;return n.createElement("div",{className:"globalSearchHeaderWrap"},n.createElement("div",{className:"netManageLogo"},n.createElement(b,{"data-tip":_l("\u9996\u9875"),onClick:function(){return(0,y.T8)("/dashboard")}},n.createElement("i",{className:"icon-home_page Font18"})),a&&n.createElement("div",{className:"netManageTitle"},a)),n.createElement("div",{className:"searchCon"},n.createElement("div",{className:"search"},n.createElement("span",{className:"searchIconCon",onClick:this.onSearch},n.createElement(f.Z,{icon:"search",className:"Font20",style:{color:"#4a4a4a"}})),n.createElement(S.Z,{className:"flex borderNone",value:d,placeholder:_l("\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"),onChange:this.onSearchChange,onKeyUp:function(u){u.keyCode===13&&t.onSearch()}}),d&&n.createElement(f.Z,{icon:"delete_out",className:"Gray_bd Font14",onClick:this.onClearSearch}))),n.createElement(A.Z,null))}}]),s}(n.Component),m.propTypes={},m.defaultProps={},x))||E}}]);
