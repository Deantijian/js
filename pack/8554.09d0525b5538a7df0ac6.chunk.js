"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[8554],{38554:(ue,T,l)=>{l.r(T),l.d(T,{default:()=>de});var U=l(88239),b=l(85105),h=l.n(b),v=l(99663),E=l(22600),p=l(49135),N=l(93196),e=l(67294),S=l(22731),w=l(25273),x=l(54208),P=l(93967),I=l.n(P),F=l(96841),H=l(20640),Z=l.n(H),k=l(25265),M,A,Q=(M=(0,F.$j)(function(u){return{}}),M(A=function(u){(0,N.default)(n,u);function n(){return(0,v.default)(this,n),(0,p.default)(this,(n.__proto__||h()(n)).apply(this,arguments))}return(0,E.default)(n,[{key:"render",value:function(){var a=this.props,t=a.userInfo,o=a.isMe,r=a.dispatch,i=function(){r(k.Wu(t.accountId))};return e.createElement("div",{className:"pTop20 pRight20 pBottom10 pLeft20 LineHeight30"},e.createElement("div",{className:"clearfix"},e.createElement("div",{className:"Left TxtCenter mRight10"},e.createElement("div",{className:"TxtCenter"},e.createElement("img",{src:t.avatar,className:"userAvatar"})),o&&e.createElement("div",{className:"Hand TxtCenter mTop10"},e.createElement("a",{href:"/personal?type=information&userInfo=avatarSetting"},_l("\u66F4\u6362\u5934\u50CF")))),e.createElement("div",{className:"Left infoBox"},e.createElement("div",{className:"Height30 pLeft15"},e.createElement("span",{className:"Font16 active Width400 overflow_ellipsis",title:t.fullname},t.fullname),o&&e.createElement("a",{className:"Right ThemeColor4 Font12",href:"/personal?type=information",target:"_blank"},_l("\u4FEE\u6539\u4E2A\u4EBA\u8BBE\u7F6E"))),t.companyName&&e.createElement("div",{className:"Height30 pLeft15 Gray_6 "},e.createElement("span",{className:"overflow_ellipsis Width500",title:t.companyName},t.companyName)),t.profession&&e.createElement("div",{className:"Height30 pLeft15 Gray_6"},e.createElement("span",{className:"overflow_ellipsis Width500",title:t.profession},t.profession)),t.mobilePhone&&e.createElement("div",{className:"Height30 pLeft15 Gray_6"},e.createElement("span",{className:"overflow_ellipsis Width500",title:t.mobilePhone},t.mobilePhone)),t.email&&e.createElement("div",{className:"Height30 pLeft15 Gray_6"},e.createElement("span",{id:"span_emailContact",className:"InlineBlock",title:t.email},t.email,e.createElement("span",{className:"ThemeColor3 Hand pLeft30",onClick:function(){Z()(t.email),alert(_l("\u5DF2\u7ECF\u590D\u5236\u5230\u7C98\u8D34\u677F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528Ctrl+V \u8D34\u5230\u9700\u8981\u7684\u5730\u65B9\u53BB\u4E86\u54E6"))}},_l("\u590D\u5236")))))),e.createElement("div",{className:"w100 clearfix"},e.createElement("div",{className:"TxtMiddle pLeft5"},!o&&e.createElement(e.Fragment,null,e.createElement("div",{className:"Left"},e.createElement("a",{href:"javascript:void(0);",className:"NoUnderline"},e.createElement("span",{className:"mLeft10 TxtMiddle icon-replyto Font18 ThemeColor4",title:_l("\u53D1\u9001\u79C1\u4FE1")}),e.createElement("span",{className:"TxtMiddle Font12 ThemeColor4 pLeft5",onClick:i},_l("\u53D1\u9001\u79C1\u4FE1")))),e.createElement("div",{className:"Left"},e.createElement("a",{href:"mailto:"+t.email,className:"NoUnderline"},e.createElement("span",{className:"mLeft30 TxtMiddle icon-message Font18 ThemeColor4",title:_l("\u53D1\u9001 E-mail")}),e.createElement("span",{className:"TxtMiddle Font12 ThemeColor4 pLeft5"},_l("\u53D1\u9001 E-mail"))))))))}}]),n}(e.PureComponent))||A);const V=Q;function z(u){var n=u.userInfo,s=function(r){var i="";return r.gender===2?i="\u5973":r.gender===1?i="\u7537":i="\u672A\u586B\u5199",i},a=function(r){return r.length>0?e.createElement("div",{className:"pLeft20 pRight20 mTop10"},e.createElement("h5",{className:"Font16 Normal mp0 mTop10 pLeft20"},_l("\u5DE5\u4F5C\u5C65\u5386")),r.map(function(i,m){return e.createElement("div",{className:"ThemeBorderColor4 LineHeight30 historyLi pAll10 pLeft20 WordBreak",key:m},e.createElement("div",null,e.createElement("span",{className:"mRight5"},i.startDate),e.createElement("span",{className:"mRight5"},_l("\u81F3")),e.createElement("span",{className:"mRight5"},i.endDate),e.createElement("span",{className:"mRight10"},i.name),e.createElement("span",{className:"mRight10"},i.title)),e.createElement("div",null,e.createElement("span",{className:"mRight5"},_l("\u63CF\u8FF0\uFF1A")),e.createElement("span",{className:"mRight10"},i.description)))})):null},t=function(r){return r.length>0?e.createElement("div",{className:"pLeft20 mTop10"},e.createElement("h5",{className:"Font16 Normal mp0 mTop10 pLeft20"},_l("\u6559\u80B2\u7ECF\u5386")),r.map(function(i,m){return e.createElement("div",{className:"ThemeBorderColor4 LineHeight30 historyLi pAll10 pLeft20 WordBreak",key:m},e.createElement("div",null,e.createElement("span",{className:"mRight5"},i.startDate),e.createElement("span",{className:"mRight5"},_l("\u81F3")),e.createElement("span",{className:"mRight5"},i.endDate),e.createElement("span",{className:"mRight10"},i.name),e.createElement("span",{className:"mRight10"},i.title)),e.createElement("div",null,e.createElement("span",{className:"mRight5"},_l("\u63CF\u8FF0\uFF1A")),e.createElement("span",{className:"mRight10"},i.description)))})):null};return e.createElement("div",{className:"infoList w100"},e.createElement("div",{className:"ThemeBorderColor4 BorderTop mAll10 pTop10 clearfix"},e.createElement("div",{className:"Left pLeft20 pRight20 ThemeBorderColor4 BorderRight infoContact"},e.createElement("ul",{className:"LineHeight25"},e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},_l("\u751F\u65E5"),"\uFF1A"),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis"},n.birthdate?n.birthdate.split(" ")[0]:_l("\u672A\u586B\u5199"))),e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},_l("\u6027\u522B"),"\uFF1A"),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis"},s(n))),e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},"QQ\uFF1A"),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis"},n.imqq?n.imqq:_l("\u672A\u586B\u5199"))),e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},"LinkeIn\uFF1A"),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis"},n.snsLinkedin?n.snsLinkedin:_l("\u672A\u586B\u5199"))))),e.createElement("div",{className:"Left pLeft20 infoContact"},e.createElement("ul",{className:"LineHeight25"},e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},_l("\u5FAE\u4FE1\uFF1A")),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis"},n.weiXin?n.weiXin:_l("\u672A\u586B\u5199"))),e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},_l("\u65B0\u6D6A\u5FAE\u535A\uFF1A")),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis InlineBlock"},n.snsSina?n.snsSina:_l("\u672A\u586B\u5199"))),e.createElement("li",null,e.createElement("span",{className:"Gray_8 Left"},_l("\u817E\u8BAF\u5FAE\u535A\uFF1A")),"\xA0",e.createElement("span",{className:"Gray_6 TxtMaxW overflow_ellipsis"},n.snsQQ?n.snsQQ:_l("\u672A\u586B\u5199")))))),n.jobList&&n.jobList.length>0&&n.eduList&&n.eduList.length>0?e.createElement("div",{className:"ThemeBorderColor4 BorderTop mAll10 historyBox mTop20"},a(n.jobList),t(n.eduList)):null)}const X=z;var W=l(26581),Y=l(85315),J=l(28829),K=l(3735),O=l(96486),_=l.n(O),q=function(u){(0,N.default)(n,u);function n(){(0,v.default)(this,n);var s=(0,p.default)(this,(n.__proto__||h()(n)).call(this));return s.hoverBg=function(){$(".showMorecards li").hover(function(){$(this).addClass("ThemeBGColor4 White")},function(){$(this).removeClass("ThemeBGColor4 White")})},s.showCardList=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};J.Z.getEffectiveUsersCount({projectId:t.projectId}).then(function(o){var r={userInfo:a,projectId:t.projectId,accountId:a.accountId,count:o};s.setState({user:r})})},s.selectCard=function(a){var t=s.props.userInfo;s.setState({cadrIndex:a,cardList:t.userCards.filter(function(o){return o.companyName})[a]}),s.showCardList(t,t.userCards[a])},s.setCardList=function(a){var t=s.props.userInfo,o=t.userCards,r=3;o.splice.apply(o,[r-1,1].concat((0,Y.Z)(o.splice(a,1,o[r-1])))),s.setState({cadrIndex:2,cardList:o[2]}),s.showCardList(t,t.userCards[2])},s.showMoreCard=function(){s.setState({isMore:!s.state.isMore})},s.getDepartmentFullName=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=s.state.fullDepartmentInfo,o=a.map(function(r){return r.departmentId}).filter(function(r){return!t[r]});_().isEmpty(o)||K.Z.getDepartmentFullNameByIds({projectId:s.state.cardList.projectId,departmentIds:o}).then(function(r){r.forEach(function(i){t[i.id]=i.name}),s.setState({fullDepartmentInfo:t})})},s.cardsList=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=s.state.fullDepartmentInfo,o=t===void 0?{}:t;return e.createElement("li",{className:"Left LineHeight30 pTop10 pBottom20",key:a.projectId},e.createElement("span",{className:"Left Width300"},e.createElement("span",{className:"Left"},_l("\u90E8\u95E8"),"\uFF1A\xA0"),a.departmentInfos&&a.departmentInfos.length>0?e.createElement("span",{className:"department overflow_ellipsis Width200 Left",onMouseEnter:function(){return s.getDepartmentFullName(a.departmentInfos)}},e.createElement(W.Z,{action:["hover"],tooltipClass:"departmentFullNametip",popupPlacement:"bottom",text:e.createElement("div",null,a.departmentInfos.map(function(r,i){var m=(s.state.fullDepartmentInfo[r.departmentId]||"").split("/");return e.createElement("div",{className:I()({mBottom8:i<a.departmentInfos.length-1})},m.map(function(c,d){return e.createElement("span",null,c,m.length-1>d&&e.createElement("span",{className:"mLeft8 mRight8"},"/"))}))})),mouseEnterDelay:.5},e.createElement("span",null,a.departmentInfos.map(function(r){return r.departmentName}).join(";")))):e.createElement("span",{className:"department overflow_ellipsis Width200 Left"},_l("\u672A\u586B\u5199"))),e.createElement("span",{className:"Left Width200"},e.createElement("span",{className:"Left"},_l("\u804C\u4F4D"),"\uFF1A\xA0"),a.jobInfos&&a.jobInfos.length>0?e.createElement(W.Z,{style:{maxWidth:"400px"},offset:[-50,0],text:e.createElement("span",null,a.jobInfos.map(function(r){return r.jobName}).join(";")),action:["hover"]},e.createElement("span",{className:"job overflow_ellipsis Width120 Left"},a.jobInfos.map(function(r){return r.jobName}).join(";"))):e.createElement("span",{className:"job overflow_ellipsis Width120 Left"},_l("\u672A\u586B\u5199"))),e.createElement("span",{className:"Left Width200"},e.createElement("span",{className:"Left"},_l("\u5DE5\u4F5C\u5730\u70B9"),"\uFF1A\xA0"),a.workSite?e.createElement("span",{className:"workSite overflow_ellipsis Width120 Left",title:a.workSite},a.workSite):e.createElement("span",{className:"workSite overflow_ellipsis Width120 Left"},_l("\u672A\u586B\u5199"))),e.createElement("span",{className:"Left Width300"},e.createElement("span",{className:"Left"},_l("\u5DE5\u53F7"),"\uFF1A\xA0"),a.jobNumber?e.createElement("span",{className:"jobNumber overflow_ellipsis Width120 Left",title:a.jobNumber},a.jobNumber):e.createElement("span",{className:"jobNumber overflow_ellipsis Width120 Left"},_l("\u672A\u586B\u5199"))),e.createElement("span",{className:"Left Width200"},e.createElement("span",{className:"Left"},_l("\u5DE5\u4F5C\u7535\u8BDD"),"\uFF1A\xA0"),a.contactPhone?e.createElement("span",{className:"contactPhone overflow_ellipsis Width120 Left",title:a.contactPhone},a.contactPhone):e.createElement("span",{className:"contactPhone overflow_ellipsis Width120 Left"},_l("\u672A\u586B\u5199"))))},s.closeMoreCard=function(a){var t=s.state.isMore;t&&(a.target==$(".showMorecards")[0]||$.contains($(".showMorecards")[0],a.target)||s.setState({isMore:!1}))},s.state={user:null,cadrIndex:0,isMore:!1,cardList:[],fullDepartmentInfo:{}},s}return(0,E.default)(n,[{key:"componentDidMount",value:function(){this.selectCard(0),document.addEventListener("click",this.closeMoreCard,!1)}},{key:"componentDidUpdate",value:function(){this.hoverBg()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.closeMoreCard,!1)}},{key:"render",value:function(){var a=this,t=this.props.userInfo,o=this.state,r=o.cadrIndex,i=o.isMore,m=o.cardList;return e.createElement("div",{className:"cardInfoBox card BoderRadAll_5 mTop15"},e.createElement("div",{className:"businessCard-wrapper enterprise-businessCard"},e.createElement("h5",{className:"Font16 Normal mp0"},_l("\u540D\u7247")),e.createElement("div",{className:"tabCardTitle"},e.createElement("ul",{className:"BorderBottom borderColor_d8 clearfix"},t.userCards.filter(function(c){return c.companyName}).map(function(c,d){if(d<3)return e.createElement("li",{className:I()("Left LineHeight40 tabCardTitleLi",r==d?"ThemeBorderColor3":""),title:c.companyName,key:d,onClick:function(){return a.selectCard(d)}},c.companyName)}),t.userCards.filter(function(c){return c.companyName}).length>3&&e.createElement("div",{className:"Left LineHeight40 TxtCenter Hand showMorecards mLeft30 Relative",onClick:this.showMoreCard},_l("\u66F4\u591A"),e.createElement("span",{className:"icon-arrow-down-border mLeft10"}),i&&e.createElement("ul",{className:"Absolute card moreListCard"},t.userCards.map(function(c,d){if(d>=3)return e.createElement("li",{className:"TxtLeft LineHeight30 pLeft10 pright10 overflow_ellipsis WordBreak",title:c.companyName,key:d,onClick:function(){return a.setCardList(d)}},c.companyName)}))))),e.createElement("div",{className:"cardsList"},e.createElement("ul",null,this.cardsList(m)))))}}]),n}(e.Component);const ee=q;var te=function(u){(0,N.default)(n,u);function n(){var s,a,t,o;(0,v.default)(this,n);for(var r=arguments.length,i=Array(r),m=0;m<r;m++)i[m]=arguments[m];return o=(a=(t=(0,p.default)(this,(s=n.__proto__||h()(n)).call.apply(s,[this].concat(i))),t),t.state={visible:!1},t.gradeAnimate=function(){var c=t.props.userInfo,d=0;if(c.nextGrade){var f=c.currentGrade.scoreValue,C=c.nextGrade.scoreValue;d=(c.mark-f)/(C-f)}else d=1;var y=$("#gradePrograssBar").width();$("#gradePrograssBar .prograssBar").show().animate({width:d*y},3e3)},t.toggle=function(){t.setState({visible:!t.state.visible}),$(".infoList").slideToggle()},a),(0,p.default)(t,o)}return(0,E.default)(n,[{key:"componentDidMount",value:function(){this.gradeAnimate()}},{key:"render",value:function(){var a=this.props,t=a.userInfo,o=a.isMe,r=this.state.visible;return e.createElement(e.Fragment,null,e.createElement("div",{className:"userInfoBox card BoderRadAll_5"},e.createElement(V,this.props),r&&e.createElement(X,this.props),e.createElement("div",{className:"Hand pLeft10 Gray_6 pBottom10 pRight40 Right"},e.createElement("span",{onClick:this.toggle},r?_l("\u6536\u8D77\u5B8C\u6574\u4FE1\u606F"):_l("\u5C55\u793A\u5B8C\u6574\u4FE1\u606F")),e.createElement("i",{className:I()("icon-arrow-down mLeft5 Gray_6",r?"icon-arrow-up":"")}))),t.userCards&&e.createElement(ee,this.props))}}]),n}(e.Component);const ae=te;var ne=l(45697),B=l.n(ne),g=l(94176),L=l(62679),j=l(93665),se=l(34919),fe=l(90617),pe=l(41),R,D,re=(D=R=function(u){(0,N.default)(n,u);function n(){return(0,v.default)(this,n),(0,p.default)(this,(n.__proto__||h()(n)).apply(this,arguments))}return(0,E.default)(n,[{key:"componentWillMount",value:function(){g.Z.dispatch((0,L.xe)({listType:j.Z.LIST_TYPE.user,accountId:this.props.accountId})),g.Z.dispatch((0,L.r1)(this.props.title))}},{key:"componentWillReceiveProps",value:function(a){(this.props.accountId!==a.accountId||this.props.title!==a.title)&&(g.Z.dispatch((0,L.xe)({listType:j.Z.LIST_TYPE.user,accountId:a.accountId})),g.Z.dispatch((0,L.r1)(a.title)))}},{key:"render",value:function(){return e.createElement(F.zt,{store:g.Z},e.createElement("div",{className:"userFeed userFeedContainer"},e.createElement(se.Z,{disableLoadNew:!0})))}}]),n}(e.Component),R.propTypes={accountId:B().string,title:B().string},D);const le=re;var oe=function(u){(0,N.default)(n,u);function n(){return(0,v.default)(this,n),(0,p.default)(this,(n.__proto__||h()(n)).apply(this,arguments))}return(0,E.default)(n,[{key:"renderFeed",value:function(){var a=this.props,t=a.isLoading,o=a.isMe,r=a.userInfo;r=r===void 0?{}:r;var i=r.fullname,m=r.accountId;if(t)return e.createElement(x.Z,{size:"small",className:"mTop10"});var c=o?_l("\u6211\u7684\u52A8\u6001\u5899"):_l("%0\u7684\u52A8\u6001\u5899",i);return e.createElement("div",{className:"mTop10"},e.createElement(le,{accountId:m,title:c}))}},{key:"render",value:function(){var a=this.props.isLoading;return e.createElement("div",{className:"clearfix"},e.createElement("div",{className:"clearfix Relative"},a?e.createElement(x.Z,{size:"small"}):e.createElement(ae,this.props)),this.renderFeed())}}]),n}(e.Component);const ie=oe;var ce=l(15862),me=l(15577),de=function(u){(0,N.default)(n,u);function n(){var s,a,t,o;(0,v.default)(this,n);for(var r=arguments.length,i=Array(r),m=0;m<r;m++)i[m]=arguments[m];return o=(a=(t=(0,p.default)(this,(s=n.__proto__||h()(n)).call.apply(s,[this].concat(i))),t),t.state={accountId:"",isMe:!1,isLoading:!1,userInfo:{},rUserList:[],isFriend:!1,isTask:!1},t.getAccountId=function(){var c=(location.pathname.match(/.*\/user_(.{36})/)||"")[1]||md.global.Account.accountId,d=c===md.global.Account.accountId;t.setState({isLoading:!0}),t.request=S.Z.getAccountDetail({accountId:c}),t.request.then(function(f){if(!f){var C=(0,me.FL)(),y=C.rp;t.setState({userInfo:f,isFriend:!0}),y&&(0,ce.Z)({accountId:c});return}var G=[];d||(G=[{accountId:f.accountId,fullname:f.userName,avatar:f.avatar},{accountId:md.global.Account.accountId,fullname:md.global.Account.fullname,avatar:md.global.Account.avatar}]),t.setState({userInfo:f,isLoading:!1,isMe:d,accountId:c,rUserList:G,isTask:!0})}).catch()},a),(0,p.default)(t,o)}return(0,E.default)(n,[{key:"componentDidMount",value:function(){$("html").addClass("AppUser"),this.getAccountId()}},{key:"componentWillUnmount",value:function(){$("html").removeClass("AppUser"),this.request&&this.request.abort&&this.request.abort()}},{key:"render",value:function(){var a=this,t=this.state,o=t.isFriend,r=t.userInfo;return e.createElement(w.Z,null,e.createElement("div",{className:"mainUserProfile relative mTop18"},r&&e.createElement(ie,(0,U.default)({},this.state,{getAccountId:function(){return a.getAccountId()}})),o&&e.createElement("div",{className:"card noticeContainer"},e.createElement("div",null,e.createElement("i",{className:"icon-task-folder-message Font56"})),e.createElement("div",{className:"Font18 mTop10"},_l("\u5BF9\u65B9\u4E0D\u662F\u60A8\u7684\u8054\u7CFB\u4EBA\uFF0C\u65E0\u6CD5\u67E5\u770B")))))}}]),n}(e.PureComponent)}}]);