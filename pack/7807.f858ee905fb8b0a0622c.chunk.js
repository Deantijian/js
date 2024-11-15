(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7807],{27807:(pt,mt,C)=>{"use strict";C.r(mt),C.d(mt,{default:()=>Mr});var cn=C(85105),K=C.n(cn),z=C(99663),J=C(22600),V=C(49135),Y=C(93196),t=C(67294),ie=C(96841),ce=C(64712),y=C(88239),he=C(54208),Ze=C(1678),Ke=C(15405),Re=C(96486),E=C.n(Re),ft,dn=(0,Ke.Z)(ft=function(m){(0,Y.default)(r,m);function r(){var s,e,n,a;(0,z.default)(this,r);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return a=(e=(n=(0,V.default)(this,(s=r.__proto__||K()(r)).call.apply(s,[this].concat(l))),n),n.renderDepartments=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments[1];if(!i||!i.length)return null;var u=(0,Ze.Tu)(i,d),p=E().map(u,function(f,h){return t.createElement("div",{dangerouslySetInnerHTML:{__html:f.departmentName},key:h+"_"+f.id,className:"deptItem",onClick:function(){n.props.onDepartmentClick(f)}})});return t.createElement("div",{className:"searchDepartmentList"},t.createElement("div",{className:"title"},_l("\u90E8\u95E8"),"\uFF08",u.length,"\uFF09"),t.createElement("div",null,p))},n.renderUsers=function(i){return!i||!i.length?null:t.createElement("div",{className:"searchUserList"},t.createElement("div",{className:"title"},_l("\u5458\u5DE5"),"\uFF08",i.length,"\uFF09"),t.createElement("div",null,E().map(i,function(d){return t.createElement("div",{key:d.accountId,className:"userItem clearfix",onClick:function(){n.props.onUserClick(d.accountId)}},t.createElement("img",{src:d.avatar,alt:d.fullname,className:"avatar mTop2"}),t.createElement("div",{className:"info pLeft40"},t.createElement("span",{className:"name"},d.fullname),t.createElement("span",{className:"job"},d.jobs.map(function(u){return u.name}).join("\u3001"))))})))},e),(0,V.default)(n,a)}return(0,J.default)(r,[{key:"render",value:function(){var e=this.props,n=e.keywords,a=e.data,o=a===void 0?{}:a,l=e.isSearching,c=e.showResult;if(!c)return null;if(l)return t.createElement("div",{className:"searchResult pTop20"},t.createElement(he.Z,null));var i=o.departments,d=i===void 0?[]:i,u=o.users,p=u===void 0?[]:u;return d.length>0||p.length>0?t.createElement("div",{className:"searchResult"},this.renderUsers(p),this.renderDepartments(d,n)):t.createElement("div",{className:"searchResult"},t.createElement("div",{className:"TxtCenter Gray_c",style:{paddingTop:"80px"}},_l("\u65E0\u641C\u7D22\u7ED3\u679C")))}}]),r}(t.Component))||ft;const un=dn;var me=C(39609),k=C(27301),R=C(6105),pn=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.handChange=(0,Re.debounce)(function(n){var a=e.props,o=a.dispatch,l=a.projectId;n?e.setState({showResult:!0},function(){o({type:"SHOW_SEACH_RESULT"}),e.ajaxObj=o((0,me.iJ)(n))}):e.handleClear()},600),e.handleClear=function(){var n=e.props.dispatch;e.setState({showResult:!1,searchValue:""},function(){n((0,me.pT)());var a=function(){n({type:"UPDATE_SEARCH_VALUYE",data:""})};n((0,k.loadDepartments)("",1,a)),e.handleReset(),e.input.value=""})},e.renderResult=function(){var n=e.props,a=n.result,o=n.keywords,l=n.isSearching,c=l===void 0?!0:l,i=n.dispatch;return e.state.showResult?t.createElement(un,{onClickAway:function(){e.setState({showResult:!1})},onClickAwayExceptions:[".searchInput"],isSearching:c,showResult:e.state.showResult,data:a,keywords:o,onUserClick:function(u){e.setState({showResult:!1},function(){i((0,me.Km)([u])),i((0,R.updateTypeCursor)(0)),i((0,R.updateType)(0)),i((0,me.pT)()),i((0,R.updateSelectedAccountIds)([]))})},onDepartmentClick:function(u){var p=u.id,f=u.name;e.input.value=f,e.setState({showResult:!1,searchValue:f},function(){i((0,k.getFullTree)({departmentId:p,collapseAll:!0,afterRequest:function(){i({type:"UPDATE_SEARCH_VALUYE",data:f}),i((0,R.updateType)(0)),i((0,R.updateTypeCursor)(0)),i((0,R.updateCursor)(p)),i((0,k.loadUsers)(p))}})),i((0,me.pT)())})}}):""},e.ajaxObj=null,e.handleFocus=e.handleFocus.bind(e),e.handleBlur=e.handleBlur.bind(e),e.handleClear=e.handleClear.bind(e),e.state={showResult:!1,searchValue:""},e}return(0,J.default)(r,[{key:"handleFocus",value:function(){$(this.box).addClass("ThemeBorderColor3").removeClass("ThemeBorderColor8"),this.handleReset();var e=this.props.result;e=e===void 0?{}:e;var n=e.departments,a=n===void 0?[]:n,o=e.users,l=o===void 0?[]:o;(a.length||l.length)&&this.setState({showResult:!0})}},{key:"handleReset",value:function(){var e=this.props,n=e.dispatch,a=e.departmentId,o=e.projectId;a&&(n((0,R.updateType)(0)),n((0,R.updateCursor)("")),n((0,R.updateTypeCursor)(0)),n((0,k.loadAllUsers)(o,1)))}},{key:"handleBlur",value:function(){$(this.box).addClass("ThemeBorderColor8").removeClass("ThemeBorderColor3")}},{key:"render",value:function(){var e=this,n=this.state.searchValue,a=n!==""?t.createElement("span",{className:"Font14 icon-closeelement-bg-circle Gray_c Hand Absolute",style:{top:"8px",right:"8px"},onClick:this.handleClear}):null;return t.createElement("div",{className:"searchContainer Relative",ref:function(l){return e.box=l}},t.createElement("span",{className:"icon-search btnSearch Gray_75",title:_l("\u641C\u7D22")}),t.createElement("input",{defaultValue:n,ref:function(l){return e.input=l},onChange:function(l){e.setState({searchValue:l.target.value}),e.ajaxObj&&e.ajaxObj.abort&&(e.ajaxObj.abort(),e.ajaxObj=null),e.handChange(l.target.value)},onFocus:this.handleFocus,onBlur:this.handleBlur,type:"text",className:"searchInput ThemeColor10 w100",placeholder:_l("\u641C\u7D22")}),a,this.renderResult())}}]),r}(t.Component),mn=function(r){var s=r.search,e=r.current,n=e.departmentId,a=e.projectId;return(0,y.default)({},s,{departmentId:n,projectId:a})},fn=(0,ie.$j)(mn)(pn);const hn=fn;var xe=C(74127),ze=C(12424),vn=C(46593),$e=C.n(vn),Wr=C(59768),ht=C(82891),Vr=C(60954),vt=C(12386),W=C(33867),Ce=C(26581),we=C(85315),Gr=C(21133),It=C(60171),Ae=C(3735),In=C(20640),gn=C.n(In),gt=C(37578),Et,Ct=function(r,s){var e=s.response,n=e===void 0?{}:e,a=s.pageIndex,o=s.type,l=s.expandedKeys,c=s.projectId,i=n.departmentId,d=i===void 0?"":i,u=n.parentDepartmentId,p=u===void 0?"":u,f=n.newDepartments,h=f===void 0?[]:f;switch(o){case"EDIT":{r((0,k.editDepartment)({newDepartments:h,expandedKeys:l})),r((0,k.loadUsers)(d,a));break}case"DELETE":{p===""?(r((0,R.removeCursor)()),r((0,k.deleteDepartment)({departmentId:d,parentId:p})),r((0,R.updateTypeCursor)(0)),r((0,k.loadAllUsers)(c,1))):(r((0,k.deleteDepartment)({departmentId:d,parentId:p,expandedKeys:l})),r((0,R.updateCursor)(p)),r((0,k.loadUsers)(p,1)));break}default:break}},En=(0,Ke.Z)(Et=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.handleClick=function(n){var a=e.props,o=a.departmentId,l=a.projectId,c=a.dispatch,i=a.expandedKeys;e.props.closeAction(),(0,gt.$)({type:"create",projectId:l,departmentId:o,isLevel0:!1,callback:function(u){var p=u.response,f=p===void 0?{}:p,h=f.departmentId;c((0,k.getFullTree)({departmentId:h,isGetAll:!0,expandedKeys:i,afterRequest:function(){c((0,R.updateCursor)(h)),c((0,k.loadUsers)(h))}}))}})},e.openSettingDialog=function(){var n=e.props,a=n.departmentId,o=n.projectId,l=n.pageIndex,c=n.expandedKeys,i=n.dispatch,d=n.newDepartments;e.props.closeAction(),(0,gt.$)({type:"edit",projectId:o,departmentId:a,newDepartments:d,callback:function(p){var f=p.response,h=f===void 0?{}:f;Ct(i,{response:h,type:"EDIT",projectId:o,pageIndex:l,expandedKeys:c})}})},e.deleteCurrentDepartment=function(){var n=e.props,a=n.departmentId,o=n.projectId,l=n.pageIndex,c=n.expandedKeys,i=n.dispatch,d=n.newDepartments;Ae.Z.deleteDepartments({projectId:o,departmentId:a}).then(function(u){if(e.props.closeAction(),u===1)alert(_l("\u5220\u9664\u6210\u529F")),Ct(i,{type:"DELETE",projectId:o,expandedKeys:c,response:{departmentId:a,newDepartments:d}});else if(u===3)alert(_l("\u90E8\u95E8\u5B58\u5728\u6210\u5458\uFF0C\u65E0\u6CD5\u5220\u9664"),3);else{if(u===2)return alert(_l("\u90E8\u95E8\u5B58\u5728\u5B50\u90E8\u95E8\uFF0C\u65E0\u6CD5\u5220\u9664"),3);alert(_l("\u5220\u9664\u5931\u8D25"),2)}}).catch(function(u){alert(_l("\u5220\u9664\u5931\u8D25"),2)})},e.diaUl=null,e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){$(".departmentTreeBox").addClass("actinNow")}},{key:"componentWillUnmount",value:function(){$(".departmentTreeBox").removeClass("actinNow")}},{key:"render",value:function(){var e=this,n=this.props.showAction;return n?t.createElement("ul",{className:"diaActionTree",ref:function(o){return e.diaUl=o},style:{left:this.props.dropData.left,top:this.props.dropData.top}},t.createElement("li",{onClick:this.handleClick},_l("\u6DFB\u52A0\u5B50\u90E8\u95E8")),t.createElement("li",{onClick:this.openSettingDialog},_l("\u7F16\u8F91\u90E8\u95E8")),t.createElement("li",{onClick:function(){e.props.closeAction(),gn()(e.props.departmentId),alert(_l("\u590D\u5236\u6210\u529F"))}},_l("\u590D\u5236ID")),t.createElement("li",{onClick:this.deleteCurrentDepartment,style:{color:"#f51744"}},_l("\u5220\u9664"))):""}}]),r}(t.Component))||Et,Cn=function(r){var s=r.current,e=r.pagination.userList,n=r.entities,a=s.departmentId,o=s.root,l=s.projectId,c=a===o,i=r.entities,d=i.departments,u=i.expandedKeys,p=d[a];return{isRoot:c,expandedKeys:u,departmentId:a,projectId:l,isSearch:e&&e.isSearchResult,allCount:e&&e.allCount,pageIndex:e&&e.pageIndex,departmentName:p?p.departmentName:"",newDepartments:n.newDepartments}},bn=(0,ie.$j)(Cn)(En);const yn=bn;var Sn,bt,yt,Le=function m(r,s,e){r.forEach(function(n,a,o){if(n.departmentId===s)return e(n,a,o);if(n.subDepartments)return m(n.subDepartments,s,e)})},St=It.default.TreeNode,xn=It.default.DirectoryTree,kn=(bt=Sn=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return yt.call(e),e.state={newDepartments:E().cloneDeep(s.newDepartments)||[],expandedKeys:s.expandedKeys||[],showAction:!1,selectedKeys:e.props.departmentId?[e.props.departmentId]:[],autoExpandParent:!0,dropData:{id:"",left:0,top:0},moreIds:[],pageSize:100,rootIsAll:!1,moreIdLoading:"",height:600},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.init(),this.lisentHover(),window.addEventListener("resize",E().throttle(this.getHeight,500))}},{key:"lisentHover",value:function(){$(document).on("mouseover",".ant-tree-switcher",function(e){$(e.target).closest(".ant-tree-treenode").addClass("hoverParentStyle")}),$(document).on("mouseleave",".ant-tree-switcher",function(e){$(e.target).closest(".ant-tree-treenode").removeClass("hoverParentStyle")})}},{key:"unBindHover",value:function(){$(document).off("mouseover",".ant-tree-switcher",function(e){$(e.target).closest(".ant-tree-treenode").addClass("hoverParentStyle")}),$(document).off("mouseleave",".ant-tree-switcher",function(e){$(e.target).closest(".ant-tree-treenode").removeClass("hoverParentStyle")})}},{key:"componentWillReceiveProps",value:function(e){!E().isEqual(this.props.newDepartments,e.newDepartments)||!E().isEqual(this.props.expandedKeys,e.expandedKeys)||this.props.departmentId!==e.departmentId||!e.departmentId?this.setState({newDepartments:E().cloneDeep(e.newDepartments),expandedKeys:e.expandedKeys||[],selectedKeys:e.departmentId?[e.departmentId]:[]}):this.setState({newDepartments:E().cloneDeep(e.newDepartments)})}},{key:"componentWillUnmount",value:function(){this.unBindHover()}},{key:"render",value:function(){var e=this,n=this.state,a=n.newDepartments,o=n.expandedKeys,l=n.selectedKeys,c=n.autoExpandParent,i=n.height;return E().isEmpty(a)?t.createElement("div",{className:"Gray_9e Font13 mLeft24 mTop16"},_l("\u6682\u65E0\u90E8\u95E8\uFF0C\u53EF "),t.createElement("span",{className:"Hand",style:{color:"#2196F3"},onClick:function(){e.props.updateShowExport(!0),e.props.updateImportType("importDepartment")}},_l("\u6279\u91CF\u5BFC\u5165"))):t.createElement("div",{className:"departmentTreeBox"},t.createElement(xn,{onExpand:this.onExpand,selectedKeys:l,expandAction:!1,selectable:!0,onSelect:this.onSelect,showIcon:!0,className:"departmentsTree",expandedKeys:o,loadedKeys:o,autoExpandParent:c,draggable:!0,blockNode:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop,loadData:this.loadDataFn,height:i},this.renderTreeNodes(a)),this.state.showAction&&this.renderDropListDia())}}]),r}(t.Component),yt=function(){var r=this;this.init=function(){var s=r.props,e=s.isRoot,n=s.autoLoad,a=s.id,o=s.initRoot,l=o===void 0?function(){}:o,c=s.loadDepartments,i=c===void 0?function(){}:c;e&&l(a),n&&i(a,1,r.getHeight),$(".departmentTreeBox").scroll(function(){r.setState({showAction:!1,dropData:{id:"",left:0,top:0}})})},this.getHeight=function(){var s=document.querySelector(".departmentTreeBox");r.setState({height:s?s.offsetHeight-20:r.state.height})},this.sortDepartmentsFn=function(s,e,n,a,o){var l=r.props.projectId;Ae.Z.moveDepartment({projectId:l,sortedDepartmentIds:n,moveToParentId:a,movingDepartmentId:e}).then(function(c){c?(o(),alert(_l("\u8C03\u6574\u6210\u529F"),1)):alert(_l("\u8C03\u6574\u5931\u8D25"),2)})},this.onDragEnter=function(s){r.props.expandedKeysUpdate(s.expandedKeys)},this.onDrop=function(s){var e=[],n="",a=s.node.props.eventKey,o=s.dragNode.props.eventKey,l=s.node.props.pos.split("-"),c=s.dropPosition-Number(l[l.length-1]),i=[].concat((0,we.Z)(E().cloneDeep(r.state.newDepartments))),d=void 0;if(Le(i,o,function(v,I,g){g.splice(I,1),d=v}),!s.dropToGap)e=[],Le(i,a,function(v){v.subDepartments=v.subDepartments||[],v.subDepartments.unshift(d),e=v.subDepartments.map(function(I){return I.departmentId})}),n=a;else if((s.node.props.subDepartments||[]).length>0&&s.node.props.expanded&&c===1)e=[],Le(i,a,function(v){v.subDepartments=v.subDepartments||[],v.subDepartments.unshift(d),e=v.subDepartments.map(function(I){return I.departmentId}),n=v.departmentId});else{e=[];var u=void 0,p=void 0;Le(i,a,function(v,I,g){u=g,p=I});var f=(0,Ze.qg)(i,a);n=f[1],c===-1?u.splice(p,0,d):u.splice(p+1,0,d),e=u.map(function(v){return v.departmentId})}var h=a;r.sortDepartmentsFn(i,o,e,n,function(){r.setState({newDepartments:E().cloneDeep(i)},function(){r.props.departmentUpdate(i,d,h)})})},this.loadDataFn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments[1],n=r.props.projectId,a=s.props,o=a===void 0?{}:a;return new($e())(function(l){if(o.subDepartments&&!e){l();return}var c=r.state.moreIds.find(function(d){return(d.departmentId||"")===(o.departmentId||"")}),i=!o.departmentId&&!c?2:c?c.pageIndex+1:1;r.setState({moreIdLoading:o.departmentId}),Ae.Z.pagedSubDepartments({projectId:n,parentId:o.departmentId,pageIndex:i,pageSize:r.state.pageSize}).then(function(d){r.setState({moreIdLoading:""}),d.length>=r.state.pageSize?r.setState({moreIds:i>1&&c?r.state.moreIds.map(function(I){return I.departmentId===o.departmentId?(0,y.default)({},I,{pageIndex:i}):I}):r.state.moreIds.concat({departmentId:o.departmentId,pageIndex:i})}):r.setState({moreIds:r.state.moreIds.filter(function(I){return I.departmentId!==o.departmentId}),rootIsAll:o.departmentId?r.state.rootIsAll:!0});var u=o.dataRef,p=u===void 0?{}:u,f=p.subDepartments,h=f===void 0?[]:f;h=e?h.concat(d):d;var v=[].concat((0,we.Z)(E().cloneDeep(r.state.newDepartments)));o.departmentId?Le(v,o.departmentId,function(I,g,b){b[g].subDepartments=h}):v=v.concat(h),r.props.departmentUpdate(v,h,o.departmentId),l()})})},this.onSelect=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments[1],n=s[0];!n||n.indexOf("more_")>=0||(r.setState({selectedKeys:s}),r.props.updateCursor(n),r.props.loadUsers(n))},this.renderDropListDia=function(){return t.createElement(yn,{showAction:r.state.showAction,dropData:r.state.dropData,onClickAwayExceptions:[],closeAction:function(){return r.setState({showAction:!1})},onClickAway:function(){return r.setState({showAction:!1,dropData:{id:"",left:0,top:0}})}})},this.objxy=function(s){var e=document.querySelector(s),n=0,a=0,o=e.offsetWidth,l=e.offsetHeight;if(e.getBoundingClientRect)n=e.getBoundingClientRect().left+document.body.scrollLeft,a=e.getBoundingClientRect().top+document.body.scrollTop;else for(;e!=null&&e.tagName.toUpperCase()!="BODY";)n+=e.offsetLeft,a+=e.offsetTop,e=e.offsetParent;return[n,a,o,l]},this.renderTreeNodes=function(s,e,n){var a=function(){return s.map(function(l){return t.createElement(St,(0,y.default)({},l,{key:l.departmentId,title:t.createElement(t.Fragment,null,t.createElement("span",{className:"departmentName WordBreak"},t.createElement(Ce.Z,{text:t.createElement("span",null,l.departmentName)},t.createElement("span",{className:"InlineBlock wMax100 ellipsis"},l.departmentName)),t.createElement("span",{className:"departmentAction",onClick:function(i){localStorage.removeItem("columnsInfoData");var d=i.target,u=$(d).offset().top-$(".departmentTreeBox").offset().top,p=$(".departmentTreeBox").height();r.setState({showAction:!0,dropData:{id:l.departmentId,left:$(".departmentTreeBox").width()-8,top:u+80<p?u:p-80}}),l.departmentId===r.props.cursor&&i.stopPropagation()}},t.createElement(W.Z,{className:"Font20 Gray_9e listName",icon:"moreop"})))),icon:t.createElement(t.Fragment,null,t.createElement(W.Z,{icon:"folder",className:"Font16 Gray_9e listName"})),dataRef:l,isLeaf:!l.haveSubDepartment&&!(l.subDepartments&&l.subDepartments.length>0)}),l.subDepartments&&l.subDepartments.length?r.renderTreeNodes(l.subDepartments,r.state.moreIds.map(function(c){return c.departmentId}).includes(l.departmentId),{props:(0,y.default)({},l,{dataRef:l})}):"")})};return t.createElement(t.Fragment,null,a(),(!r.props.searchValue&&e||!n&&s.length>=r.state.pageSize&&!r.state.rootIsAll)&&t.createElement(St,{key:"more_"+(E().get(n,["props","departmentId"])||"all"),isLeaf:!0,icon:t.createElement("div",{className:"mTop5 moreListIcon"},r.state.moreIdLoading===E().get(n,["props","departmentId"])&&t.createElement(he.Z,{size:"small"})),title:t.createElement("div",{className:"moreList Hand mLeft10",onClick:function(l){l.stopPropagation(),r.loadDataFn(n,!0)}},r.state.moreIdLoading===E().get(n,["props","departmentId"])?_l("\u52A0\u8F7D\u4E2D"):_l("\u66F4\u591A"))}))},this.onExpand=function(s){r.props.expandedKeysUpdate(s),r.setState({autoExpandParent:!1})}},bt),_n=function(r,s){var e=r.current,n=e.departmentId,a=e.root,o=e.projectId,l=r.pagination.userList,c=r.entities,i=c.departments,d=i===void 0?[]:i,u=c.newDepartments,p=u===void 0?[]:u,f=c.expandedKeys,h=f===void 0?[]:f,v=r.search.searchValue,I=d[s.id],g=E().filter(d,function(b){return b.parentDepartment===s.id});return(0,y.default)({},I,s,{isRoot:a===s.id,subDepartments:E().map(g,function(b){return b.departmentId}),cursor:n,departmentId:n,projectId:o,pageIndex:l&&l.pageIndex,newDepartments:p,expandedKeys:h,searchValue:v})},wn=(0,ie.$j)(_n,{initRoot:k.initRoot,loadDepartments:k.loadDepartments,loadUsers:k.loadUsers,departmentUpdate:k.departmentUpdate,expandedKeysUpdate:k.expandedKeysUpdate,updateShowExport:k.updateShowExport,updateImportType:k.updateImportType,updateCursor:R.updateCursor})(kn);const Nn=wn;var Tn=function(m){(0,Y.default)(r,m);function r(){return(0,z.default)(this,r),(0,V.default)(this,(r.__proto__||K()(r)).apply(this,arguments))}return(0,J.default)(r,[{key:"render",value:function(){var e=this.props.root;return t.createElement(Nn,{id:e,autoLoad:!0,isRoot:!0})}}]),r}(t.Component),An=function(r){var s=r.current.root,e=r.entities.departments;return{root:s,departments:e}},Dn=(0,ie.$j)(An)(Tn);const jn=Dn;var Un=C(51612),xt=C(99924),Rn=C(93967),P=C.n(Rn),Ln,kt,_t,Pn=function(r){var s=r.haveSubDepartment,e=r.subDepartments,n=r.isLoading,a=r.isExpired;return n?!1:a||s&&!e.length},Fn=(kt=Ln=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));_t.call(e);var n=s.projectId,a=s.fetchInActive,o=a===void 0?function(){}:a,l=s.fetchApproval,c=l===void 0?function(){}:l;return e.state={showPositionDialog:!1,isNew:!0},o(n),c(n),e}return(0,J.default)(r,[{key:"render",value:function(){var e=this,n=this.props,a=n.typeCursor,o=a===void 0?0:a,l=n.approveNumber,c=n.inActiveNumber,i=n.root,d=n.cursor;return t.createElement(t.Fragment,null,t.createElement("div",{className:"departmentTop"},t.createElement("ul",null,t.createElement("li",{className:P()("Hand flexRow",{current:d===i&&(o===1||o===0)})},t.createElement("div",{className:"flex",onClick:function(){e.handleClick(0)}},t.createElement(W.Z,{className:P()("Font16 Gray_9e listName mRight10"),icon:"person"}),t.createElement("span",null,_l("\u5168\u7EC4\u7EC7"))),t.createElement(ht.default,{overlayStyle:{width:150},trigger:["click"],placement:"bottomLeft",overlay:t.createElement(vt.default,null,t.createElement(vt.default.Item,{key:"0",onClick:this.clearCache},_l("\u5237\u65B0\u6240\u6709\u6210\u5458\u4FE1\u606F")))},t.createElement("div",{className:"moreopWrap",onClick:function(p){return p.stopPropagation()}},t.createElement(W.Z,{icon:"moreop"})))),t.createElement("li",{onClick:function(){e.handleClick(2)},className:P()("Hand",{current:d===i&&o===2})},t.createElement(W.Z,{className:"Font16 Gray_9e listName mRight10",icon:"check_circle"}),t.createElement("span",null,_l("\u672A\u6FC0\u6D3B"),c>0&&o!==2&&t.createElement("span",{className:"numTag"},c>99?"99+":c))),t.createElement("li",{onClick:function(){e.handleClick(3)},className:P()("Hand",{current:d===i&&o===3})},t.createElement(W.Z,{className:"Font16 Gray_9e listName mRight10",icon:"access_time_filled"}),t.createElement("span",null,_l("\u5F85\u5BA1\u6838"),l>0&&o!==3&&t.createElement("span",{className:"numTag"},l>99?"99+":l))))),t.createElement(Un.Z,null),t.createElement("div",{className:"w100 flex",style:{position:"relative",zIndex:0,minHeight:0}},t.createElement(jn,null)))}}]),r}(t.Component),_t=function(){var r=this;this.handleClick=function(s){var e=r.props,n=e.projectId,a=e.updateCursor,o=a===void 0?function(){}:a,l=e.updateTypeCursor,c=l===void 0?function(){}:l,i=e.loadAllUsers,d=i===void 0?function(){}:i,u=e.loadDepartments,p=u===void 0?function(){}:u,f=e.loadUsers,h=f===void 0?function(){}:f,v=e.loadInactiveUsers,I=v===void 0?function(){}:v,g=e.loadApprovalUsers,b=g===void 0?function(){}:g,S=e.updateNoDepartmentUsers,N=S===void 0?function(){}:S;switch(localStorage.removeItem("columnsInfoData"),N(!1),o(""),c(s),s){case 0:d(n,1);break;case 1:Pn(r.props)&&p("",1),h("");break;case 2:I(n,1);break;case 3:b(n,1);break}},this.clearCache=function(){var s=r.props.projectId;$e().all([xt.Z.projectClearCache({projectId:s,processType:10}),xt.Z.projectClearCache({projectId:s,processType:20})]).then(function(e){var n=(0,ze.Z)(e,2),a=n[0],o=n[1];a&&o?alert(_l("\u5237\u65B0\u6210\u529F")):alert(_l("\u5237\u65B0\u5931\u8D25"),2)})}},kt),Zn=function(r){var s=r.current,e=s.departmentId,n=s.projectId,a=s.selectedAccountIds,o=s.approveNumber,l=s.inActiveNumber,c=s.isSearch,i=s.typeNum,d=s.typeCursor,u=s.root,p=r.pagination,f=r.entities,h=f.departments,v=f.isLoading,I=h[""];return{pagination:p,projectId:n,departmentId:e,selectedAccountIds:a,selectCount:a.length,approveNumber:o,inActiveNumber:l,isSearch:c,typeNum:i,typeCursor:d,root:u,cursor:e,departmentName:I?I.departmentName:"",isLoading:v}};const $n=(0,ie.$j)(Zn,{loadAllUsers:k.loadAllUsers,loadDepartments:k.loadDepartments,loadUsers:k.loadUsers,loadInactiveUsers:k.loadInactiveUsers,loadApprovalUsers:k.loadApprovalUsers,updateShowExport:k.updateShowExport,updateCursor:R.updateCursor,updateTypeCursor:R.updateTypeCursor,fetchInActive:R.fetchInActive,fetchApproval:R.fetchApproval,updateImportType:k.updateImportType,updateNoDepartmentUsers:R.updateNoDepartmentUsers})(Fn);var ve=C(20845),wt=C(99934),de=C(70801),De=C(3540),Nt=C(47426),Kr=C(34279),Pe=C(64749),Je=C(60510),On=C(14467),ee=C(22731),Ye=C(95881),Ne=C(15577),Tt=C(66344),At,Bn=(0,Ke.Z)(At=function(m){(0,Y.default)(r,m);function r(s){return(0,z.default)(this,r),(0,V.default)(this,(r.__proto__||K()(r)).call(this,s))}return(0,J.default)(r,[{key:"render",value:function(){var e=this.props,n=e.isShowAct,a=n===void 0?!1:n,o=e.isTop,l=o===void 0?!1:o,c=e.isPosition,i=c===void 0?!1:c,d=e.deleteFn,u=e.setToTop;return a?t.createElement("ul",null,!l&&!i&&t.createElement("li",{onClick:function(){u()}},_l("\u8BBE\u4E3A\u4E3B\u5C5E\u90E8\u95E8")),t.createElement("li",{onClick:function(){d()}},_l("\u5220\u9664"))):""}}]),r}(t.Component))||At;const Dt=Bn;var Hn=Pe.default.Option,Mn=[{text:_l("\u90E8\u95E8"),value:1},{text:_l("\u804C\u4F4D"),value:2},{text:_l("\u5DE5\u4F5C\u5730\u70B9"),value:3},{text:_l("\u5BC6\u7801"),value:4,className:md.global.Config.IsLocal&&!md.global.Config.IsPlatformLocal?"show":"hide"}],zr=[{label:_l("\u77ED\u4FE1"),value:1},{label:_l("\u90AE\u4EF6"),value:2},{label:_l("\u5FAE\u4FE1"),value:3}],Wn=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.changeRadio=function(n){n!==e.state.filedValue&&e.setState({filedValue:n,departmentInfos:[],jobInfos:[],workSiteId:""},function(){e.state.filedValue===3&&e.getWorkSites()})},e.dialogSelectDeptFn=function(n){var a=e.props.projectId,o=e.state.departmentInfos,l=e;(0,Je.Z)({projectId:a,unique:!1,fromAdmin:!0,showCreateBtn:!1,selectedDepartment:o,selectFn:function(i){l.setState({departmentInfos:i})}})},e.dialogSelectJobFn=function(n){var a=e.props.projectId,o=e.state.jobInfos;(0,On.Z)({projectId:a,onSave:function(c){var i=o.map(function(d){return d.jobId});e.setState({jobInfos:o.concat(c.filter(function(d){return i.indexOf(d.jobId)===-1}))})}})},e.getWorkSites=function(){var n=e.props.projectId;Ye.Z.getWorkSites({projectId:n,pageSize:1e4,sortField:1,sortType:1}).then(function(a){e.setState({workSiteInfo:E().get(a,"list")||[]})})},e.chnageMessageWay=function(n){e.setState({messageWay:n})},e.submit=function(){var n=e.props,a=n.projectId,o=n.selectedAccountIds,l=e.state,c=l.departmentInfos,i=c===void 0?[]:c,d=l.jobInfos,u=d===void 0?[]:d,p=l.workSiteId,f=p===void 0?"":p,h=l.filedValue;if(h===1){var v=i.map(function(g){return g.departmentId});ee.Z.updateDepartmentForUsers({projectId:a,accountIds:o,departmentIds:v}).then(function(g){g?(e.props.loadData(1),alert(_l("\u4FEE\u6539\u6210\u529F"))):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})}else if(h===2){var I=u.map(function(g){return g.jobId});ee.Z.updateJobForUsers({projectId:a,accountIds:o,jobIds:I}).then(function(g){g?(e.props.loadData(1),alert(_l("\u4FEE\u6539\u6210\u529F"))):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})}else h===3?ee.Z.updateWorkSiteForUsers({projectId:a,accountIds:o,workSiteId:f}).then(function(g){g?(e.props.loadData(1),alert(_l("\u4FEE\u6539\u6210\u529F"))):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)}):h===4&&e.resetPassword();e.props.removeUserFromSet(o),e.props.onCancel()},e.resetPassword=function(){var n=e.props,a=n.selectedAccountIds,o=a===void 0?[]:a,l=n.projectId,c=n.emptyUserSet,i=e.state.password,d=E().get(md,["global","SysSettings"])||{},u=d.passwordRegexTip,p=d.passwordRegex;if(E().isEmpty(i)){alert(_l("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"),3);return}else if(!Tt.Z.isPasswordValid(i,p)){alert(u||_l("\u5BC6\u7801\u8FC7\u4E8E\u7B80\u5355\uFF0C\u81F3\u5C118~20\u4F4D\u4E14\u542B\u5B57\u6BCD+\u6570\u5B57"),3);return}ee.Z.batchResetPassword({projectId:l,accountIds:o,password:(0,Ne.HI)(i)}).then(function(f){f?(alert(_l("\u4FEE\u6539\u6210\u529F"),1),e.setState({batchResetPasswordVisible:!1,password:""})):alert(_l("\u4FEE\u6539\u5931\u8D25"),2),c()})},e.state={filedValue:1,departmentInfos:[],jobInfos:[],workSiteInfo:[],isShowAct:!1,idAct:"",messageWay:[]},e}return(0,J.default)(r,[{key:"render",value:function(){var e=this,n=this.props,a=n.visible,o=n.selectedAccountIds,l=o===void 0?[]:o,c=E().get(md,["global","SysSettings"])||{},i=c.passwordRegexTip,d=this.state,u=d.filedValue,p=d.departmentInfos,f=p===void 0?[]:p,h=d.jobInfos,v=h===void 0?[]:h,I=d.isShowAct,g=d.idAct,b=d.workSiteInfo,S=b===void 0?[]:b,N=d.workSiteId,w=d.messageWay,A=w===void 0?[]:w,L=d.password;return t.createElement(de.Z,{className:"dialogBatchEdit dialogSetEdit",title:_l("\u7F16\u8F91%0\u4E2A\u7528\u6237\u4FE1\u606F",l.length),visible:a,okText:_l("\u786E\u8BA4"),cancelText:_l("\u53D6\u6D88"),onCancel:this.props.onCancel,onOk:this.submit},t.createElement("div",{className:"Gray_75 Bold "},_l("\u9009\u62E9\u7F16\u8F91\u5B57\u6BB5")),t.createElement(Nt.ZP,{data:Mn.filter(function(x){return md.global.Config.IsLocal?!0:x.value!==4}),onChange:this.changeRadio,checkedValue:u}),t.createElement("div",{className:"Gray_75 Bold mTop20 mBottom12"},_l("\u8BBE\u4E3A")),u===1&&f.map(function(x,Z){return t.createElement("span",{className:"itemSpan mAll5"},x.departmentName,Z===0&&t.createElement("span",{className:"isTopIcon"},_l("\u4E3B")),t.createElement("div",{className:"moreOption"},t.createElement(W.Z,{className:"Font14 Hand Gray_bd",icon:"moreop",onClick:function(D){e.setState({isShowAct:!I,idAct:I?"":x.departmentId})}}),I&&g===x.departmentId&&t.createElement(Dt,{onClickAwayExceptions:[],onClickAway:function(){return e.setState({isShowAct:!1,idAct:""})},isPosition:!1,isTop:Z===0,deleteFn:function(){var D=f.filter(function(U){return U.departmentId!==x.departmentId})||[];e.setState({isShowAct:!1,idAct:"",departmentInfos:D})},setToTop:function(){var D=f.filter(function(M){return M.departmentId!==x.departmentId}),U=f.find(function(M){return M.departmentId===x.departmentId});D.unshift(U),e.setState({isShowAct:!1,idAct:"",departmentInfos:D})},isShowAct:I})))}),u===2&&E().map(v,function(x){return t.createElement("span",{className:"itemSpan mAll5"},x.jobName,t.createElement("div",{className:"moreOption"},t.createElement(W.Z,{className:"Font14 Hand Gray_bd",icon:"moreop",onClick:function(B){e.setState({isShowAct:!I,idAct:I?"":x.jobId})}}),I&&g===x.jobId&&t.createElement(Dt,{onClickAwayExceptions:[],onClickAway:function(){return e.setState({isShowAct:!1,idAct:""})},isPosition:!0,isTop:!1,deleteFn:function(){e.setState({isShowAct:!1,idAct:"",jobInfos:e.state.jobInfos.filter(function(B){return B.jobId!==x.jobId})})},isShowAct:I})))}),(u===1||u===2)&&t.createElement(W.Z,{icon:"task_add-02",className:"Font26 Hand Gray_9e mAll5 TxtMiddle",onClick:function(Z){var B=e.state.filedValue;B===1?e.dialogSelectDeptFn(Z):e.dialogSelectJobFn(Z)}}),u===3&&t.createElement(Pe.default,{className:"w100",placeholder:_l("\u8BF7\u9009\u62E9"),value:N||void 0,onChange:function(Z){e.setState({workSiteId:Z})}},S.map(function(x){return t.createElement(Hn,{value:x.workSiteId},x.workSiteName)})),u===4&&md.global.Config.IsLocal&&t.createElement(De.Z,{className:"w100",type:"password",value:L,autoComplete:"new-password",placeholder:i||_l("\u5BC6\u7801\uFF0C8-20\u4F4D\uFF0C\u5FC5\u987B\u542B\u5B57\u6BCD+\u6570\u5B57"),onChange:function(Z){e.setState({password:Z})}}))}}]),r}(t.Component),Vn=C(63239),Ie=C.n(Vn),Fe=C(57853),Oe=C(86853),ue=C(56171),Qe=C(67707),se=C(97553),ae=C(86735),Xe=C(1952),Gn=C(6100),Kn=C(47518),zn=C.n(Kn),te=C(33179),Jn={count:function(r,s){return te.Z.ajaxOptions.url=te.Z.server(s)+"/transfer/count",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"transfercount",Ie()(r),$.extend(te.Z,s))},getList:function(r,s){return te.Z.ajaxOptions.url=te.Z.server(s)+"/transfer/getList",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"transfergetList",Ie()(r),$.extend(te.Z,s))},initProcessExtends:function(r,s){return te.Z.ajaxOptions.url=te.Z.server(s)+"/transfer/initProcessExtends",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"transferinitProcessExtends",Ie()(r),$.extend(te.Z,s))},update:function(r,s){return te.Z.ajaxOptions.url=te.Z.server(s)+"/transfer/update",te.Z.ajaxOptions.type="POST",mdyAPI(te.V,"transferupdate",Ie()(r),$.extend(te.Z,s))}};const qe=Jn;var et=C(75809),Yn=[{tab:1,tabName:_l("\u6D41\u7A0B\u5F85\u529E")},{tab:2,tabName:_l("\u5DE5\u4F5C\u6D41")}],jt=function(r){var s={};return r.forEach(function(e){s[e.id]||(s[e.id]={});var n=(e.items||[]).map(function(a){return a.id});s[e.id].ids=n,s[e.id].checkedAll=!0}),s},je=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return r.map(function(e){var n=E().get(s,"["+e.id+"].ids")||[];return(0,y.default)({},e,{items:e.items.filter(function(a){return!E().includes(n,a.id)})})}).filter(function(e){return!E().isEmpty(e.items)})},Ut=function(r){var s=E().reduce(r,function(e,n){return e+n.count},0);return s||""},Be=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.getCount=function(){var n=e.props,a=n.transferor,o=a===void 0?{}:a,l=n.projectId;qe.count({accountId:o.accountId,companyId:l,init:!0,types:[1,2]}).then(function(c){e.setState({countInfo:c})}).catch(function(c){e.setState({countInfo:{}})})},e.getList=function(n){var a=e.props,o=a.transferor,l=o===void 0?{}:o,c=a.projectId,i=e.state.activeTab;e.setState({loading:!0}),qe.getList({accountId:l.accountId,companyId:c,types:[1,2],init:n}).then(function(d){var u=function(f){return d.map(function(h){return(0,y.default)({},h,{items:h.items.filter(function(v){return v.type===f}),count:(h.items||[]).filter(function(v){return v.type===f}).length})}).filter(function(h){return!E().isEmpty(h.items)})};e.setState({loading:!1,currentAppId:i===2?!E().isEmpty(u(2))&&u(2)[0].id:!E().isEmpty(u(1))&&u(1)[0].id,todoList:u(1),workflowList:u(2)})}).catch(function(d){e.setState({loading:!1,currentAppId:"",todoList:[],workflowList:[]})})},e.checkedAllApps=function(n){var a=e.state,o=a.activeTab,l=a.todoList,c=a.workflowList;o===1?e.setState({todoCheckedInfo:n?{}:jt(l)}):e.setState({workflowCheckedInfo:n?{}:jt(c)})},e.checkedAppItem=function(n){var a=n.checked,o=n.appId,l=n.itemId,c=n.checkType,i=e.state,d=i.activeTab,u=i.todoList,p=i.workflowList,f=i.todoCheckedInfo,h=i.workflowCheckedInfo,v=d===1?u:p,I=d===1?E().clone(f):E().clone(h),g=E().clone(I),b=((E().find(v,function(w){return w.id===o})||{}).items||[]).map(function(w){return w.id});if(g[o]||(g[o]={ids:[],checkedAll:!1}),c=="app")a?delete g[o]:(g[o].ids=b,g[o].checkedAll=!0);else{var S=g[o].ids||[];if(a){var N=S.filter(function(w){return w!==l});E().isEmpty(N)?delete g[o]:(g[o].ids=N,g[o].checkedAll=N.length===b.length)}else S.push(l),g[o].checkedAll=S.length===b.length}d===1?e.setState({todoCheckedInfo:g}):e.setState({workflowCheckedInfo:g})},e.transfer=function(){var n=e.props,a=n.projectId,o=n.transferor,l=o===void 0?{}:o,c=e.state,i=c.todoCheckedInfo,d=c.workflowCheckedInfo,u=e;if(E().isEmpty(i)&&E().isEmpty(d)){alert(_l("\u8BF7\u9009\u62E9\u4EA4\u63A5\u5185\u5BB9"),3);return}(0,et.Z)({fromAdmin:!0,SelectUserSettings:{projectId:a,filterAll:!0,filterFriend:!0,filterOtherProject:!0,filterOthers:!0,unique:!0,filterAccountIds:[l.accountId],callback:u.handleHandover}})},e.handleHandover=function(n){var a=e.props,o=a.transferor,l=o===void 0?{}:o,c=a.projectId,i=e.state,d=i.todoCheckedInfo,u=i.workflowCheckedInfo,p=i.todoList,f=p===void 0?[]:p,h=i.workflowList,v=i.activeTab;if(E().isEmpty(d)&&E().isEmpty(u)){alert(_l("\u8BF7\u9009\u62E9\u4EA4\u63A5\u5185\u5BB9"));return}var I=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=[];return zn()(S).forEach(function(w){N=N.concat(w.ids)}),N},g={accountId:l.accountId,companyId:c,ids:[].concat((0,we.Z)(I(d)),(0,we.Z)(I(u))),transferAccountId:n[0].accountId};qe.update(g).then(function(b){b?(alert(_l("\u4EA4\u63A5\u6210\u529F")),e.setState({todoList:je(f,d),workflowList:je(h,u),todoCheckedInfo:{},workflowCheckedInfo:{},currentAppId:v?!E().isEmpty(je(f,d))&&je(f,d)[0].id:!E().isEmpty(je(h,u))&&je(h,u)[0].id})):alert(_l("\u4EA4\u63A5\u5931\u8D25"),2)})},e.renderEmpty=function(){return t.createElement("div",{className:"h100 Gray_75 flexRow alignItemsCenter justifyContentCenter"},_l("\u6CA1\u6709\u5185\u5BB9\u9700\u8981\u4EA4\u63A5"))},e.state={activeTab:1,loading:!1,currentAppId:"",countInfo:{},todoList:[],workflowList:[],todoCheckedInfo:{},workflowCheckedInfo:{}},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.getCount(),this.getList()}},{key:"render",value:function(){var e=this,n=this.props,a=n.visible,o=n.transferor,l=o===void 0?{}:o,c=n.onCancel,i=c===void 0?function(){}:c,d=l.fullname,u=this.state,p=u.activeTab,f=u.loading,h=u.todoList,v=h===void 0?[]:h,I=u.workflowList,g=I===void 0?[]:I,b=u.currentAppId,S=u.todoCheckedInfo,N=u.workflowCheckedInfo,w=u.countInfo,A=p===1?v:g,L=p===1?S:N,x=(E().find(A,function(D){return D.id===b})||{}).items||[],Z=A.every(function(D){return E().get(L,"["+D.id+"].checkedAll")}),B=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;return t.createElement(de.Z,{className:"workHandoverDialog",width:1e3,maxHeight:B-64,title:_l("\u4EA4\u63A5\u5DE5\u4F5C\uFF1A%0",d),visible:a,onCancel:i,showCancel:!1,okText:_l("\u4EA4\u63A5\u7ED9"),showFooter:!1,footer:null},t.createElement("div",{className:"flexColumn overflowHidden",style:{height:B-180+"px"}},t.createElement("div",{className:"tabBox flexRow"},Yn.map(function(D){return t.createElement("div",{className:P()("tabItem",{active:D.tab===p}),onClick:function(){return e.setState({activeTab:D.tab,currentAppId:D.tab===1?!E().isEmpty(v)&&v[0].id:!E().isEmpty(g)&&g[0].id})}},D.tabName,!f&&t.createElement("span",{className:"Gray_75 mLeft4"},w[D.tab]||(D.tab===1?Ut(v):Ut(g))))}),t.createElement("div",{className:"flex TxtRight pRight24"},t.createElement("i",{className:"icon icon-refresh1 Gray_9e Hand Font18",onClick:function(){return e.getList(!0)}}))),f?t.createElement("div",{className:"mTop40 TxtCenter flex"},t.createElement(he.Z,{className:"mBottom25"}),t.createElement("span",{className:"Gray_9e"}," ",_l("\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"))):E().isEmpty(A)?this.renderEmpty():t.createElement("div",{className:"overflowHidden flex flexRow"},t.createElement("div",{className:"apps"},t.createElement("div",{className:"checkItem checkAll flexRow alignItemsCenter"},t.createElement(ve.Z,{checked:Z,onClick:this.checkedAllApps}),t.createElement("span",{className:"flex ellipsis"},_l("\u5168\u9009"))),A.map(function(D){var U=D.id,M=D.apk,q=M===void 0?{}:M,F=q.name,G=q.iconUrl,X=q.iconColor;return t.createElement("div",{key:U,className:P()("checkItem flexRow alignItemsCenter Hand",{activeApp:b===U}),onClick:function(){return e.setState({currentAppId:U})}},t.createElement(ve.Z,{clearselected:E().has(L,U)&&!E().get(L,"["+U+"].checkedAll"),checked:E().has(L,U),onClick:function(fe){return e.checkedAppItem({checked:fe,appId:U,checkType:"app"})}}),t.createElement("div",{className:"appIconWrap",style:{backgroundColor:X}},t.createElement(Gn.Z,{url:G,fill:"#fff",size:16,addClassName:"mTop2"})),t.createElement("span",{className:"flex ellipsis mLeft8"}," ",F))})),t.createElement("div",{className:"handoverList flex"},E().isEmpty(x)?this.renderEmpty():x.map(function(D){var U=D.id,M=D.type,q=D.apkId,F=D.detail,G=F===void 0?{}:F;return t.createElement("div",{className:"checkItem flexRow alignItemsCenter",key:U},t.createElement(ve.Z,{checked:!!(L[b]&&E().includes(L[b].ids||{},U)),onClick:function(oe){return e.checkedAppItem({checked:oe,appId:q,itemId:U,checkType:"item"})}}),t.createElement("span",{className:"flex ellipsis mLeft8"}," ",M==1?G.title:G.name))}))),!f&&(!E().isEmpty(v)||!E().isEmpty(g))&&t.createElement("div",{className:"footer"},t.createElement(se.ZP,{disabled:E().isEmpty(S)&&E().isEmpty(N),onClick:this.transfer},_l("\u4EA4\u63A5\u7ED9")))))}}]),r}(t.Component),re=C(5017),Qn=(0,ae.Z)([`
  .footer {
    margin-top: 65px;
    align-items: center;
  }
`],[`
  .footer {
    margin-top: 65px;
    align-items: center;
  }
`]),Xn=(0,re.ZP)(de.Z)(Qn),tt={FAILED:0,SUCCESS:1,NEEDTRANSFER:2,NOAUTHORITY:3};function qn(m){var r=m.accountId,s=m.projectId,e=m.user,n=e===void 0?{}:e,a=m.success,o=a===void 0?function(){}:a,l=m.onCancel,c=l===void 0?function(){}:l,i=(0,t.useState)(!1),d=(0,ze.Z)(i,2),u=d[0],p=d[1],f=function(){ee.Z.removeUser({accountId:r,projectId:s}).then(function(v){v===tt.NEEDTRANSFER?p(!0):v===tt.SUCCESS?(c(),o()):v===tt.NOAUTHORITY?alert(_l("\u6682\u65E0\u6743\u9650"),2):alert(_l("\u64CD\u4F5C\u5931\u8D25, \u8BF7\u786E\u8BA4\u662F\u5426\u6709\u8DB3\u591F\u6743\u9650\u79FB\u9664\u7528\u6237"),2)})};return t.createElement(t.Fragment,null,t.createElement(Xn,{width:520,visible:!0,title:_l("\u662F\u5426\u786E\u8BA4\u5C06\u5458\u5DE5\u3010%0\u3011\u79BB\u804C\uFF1F",n.fullname),footer:null,onCancel:c},t.createElement("div",null,t.createElement("div",null,t.createElement("span",{className:"bold"},_l("\u5EFA\u8BAE \u201C\u4EA4\u63A5\u5DE5\u4F5C\u201D \u540E\u79BB\u804C\uFF0C")),t.createElement("span",null,_l(" \u907F\u514D\u5DE5\u4F5C\u4E2D\u65AD\u548C\u5EF6\u8BEF\u3002"))),t.createElement("div",null,_l("\u6210\u529F\u79BB\u804C\u540E\uFF0C\u4E5F\u53EF\u4EE5\u5728 \u201C\u79BB\u804C\u4EA4\u63A5\u201D \u4E2D\u4EA4\u63A5\u5DE5\u4F5C\u3002"))),t.createElement("div",{className:"footer flexRow"},t.createElement("div",{className:"flex"}),t.createElement(se.ZP,{type:"link",onClick:c,className:"mRight16"},_l("\u53D6\u6D88")),t.createElement(se.ZP,{type:"danger",onClick:f},_l("\u786E\u8BA4\u79BB\u804C")))),u&&t.createElement(Be,{visible:u,projectId:s,transferor:n,onCancel:function(){return p(!1)}}))}var ea=function(r){return(0,Xe.Z)(qn,r)},ta=(0,ae.Z)([`
  .test-textarea {
    padding: 8px;
    color: #333;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    outline: none;
    border: 1px solid #e0e0e0;
    line-height: 18px;
    height: auto;
    min-height: 90px;
    vertical-align: text-top;
    overflow-y: scroll;
    resize: none;
  }
`],[`
  .test-textarea {
    padding: 8px;
    color: #333;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    outline: none;
    border: 1px solid #e0e0e0;
    line-height: 18px;
    height: auto;
    min-height: 90px;
    vertical-align: text-top;
    overflow-y: scroll;
    resize: none;
  }
`]),na=(0,re.ZP)(de.Z)(ta),aa=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.refuseUserJoin=function(){var n=e.props,a=n.projectId,o=n.accountIds,l=n.callback,c=l===void 0?function(){}:l,i=n.onCancel,d=i===void 0?function(){}:i,u=e.state.refuseMessage;ee.Z.refuseUsersJoin({projectId:a,accountIds:o,refuseMessage:u}).then(function(p){p.actionResult===1?(c(),alert(_l("\u62D2\u7EDD\u6210\u529F"))):alert(_l("\u62D2\u7EDD\u5931\u8D25"),2),d()}).catch(function(p){alert(_l("\u62D2\u7EDD\u5931\u8D25"),2),c()})},e.state={refuseMessage:""},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.area&&this.area.focus()}},{key:"render",value:function(){var e=this,n=this.props,a=n.onCancel,o=a===void 0?function(){}:a,l=n.accountIds,c=l===void 0?[]:l,i=this.state.refuseMessage;return t.createElement(na,{visible:!0,title:_l("\u62D2\u7EDD\u7528\u6237\u52A0\u5165"),okText:_l("\u786E\u5B9A"),cancelText:_l("\u53D6\u6D88"),className:"dialogRefuse",onCancel:o,onOk:this.refuseUserJoin},t.createElement("div",{className:"mBottom20 Gray"},_l("\u60A8\u5171\u52FE\u9009\u4E86"),t.createElement("span",{className:"ThemeColor"}," ",c.length," "),_l("\u4E2A\u7528\u6237")),t.createElement("div",{className:"settingItemTitle"},_l("\u62D2\u7EDD\u6D88\u606F")),t.createElement("textarea",{type:"textarea",className:"test-textarea mTop10",value:i||"",ref:function(u){return e.area=u},onChange:function(u){e.setState({refuseMessage:u.target.value})}}))}}]),r}(t.Component),nt=function(r){return(0,Xe.Z)(aa,r)},ra=C(30381),Te=C.n(ra),He=C(31261),oa=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.refreshData=function(n,a,o){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(n)e.props.loadUsers(n,l);else switch(a){case 0:e.props.loadAllUsers(o,l);break;case 1:e.props.loadUsers(n,l);break;case 2:e.props.loadInactiveUsers(o,l);break;case 3:e.props.loadApprovalUsers(o,l);break}},e.clickEvent=function(n){n.stopPropagation(),e.setState({optListVisible:!e.state.optListVisible})},e.handleRefuseClick=function(n){var a=e.props,o=a.accountId,l=a.projectId;e.clickEvent(n),nt({projectId:l,accountIds:[o],callback:function(){e.props.fetchApproval(),e.props.loadApprovalUsers(l,1)}})},e.handleApprovalClick=function(n){e.clickEvent(n),e.props.clickRow()},e.handleEditUserClick=function(n){e.clickEvent(n),e.props.clickRow()},e.handleTransfer=function(n){e.clickEvent(n),e.setState({showWorkHandover:!0})},e.handleRemoveUserClick=function(n){var a=e.props,o=a.accountId,l=a.projectId,c=a.user,i=a.departmentId,d=a.typeCursor;e.clickEvent(n),ea({accountId:o,projectId:l,user:(0,y.default)({},c),success:function(){e.props.emptyUserSet(),e.refreshData(i,d,l)}})},e.handleCheckbox=function(n,a){n?e.props.removeUserFromSet([a]):e.props.addUserToSet([a])},e.setAndCancelCharge=function(n){var a=e.props,o=a.typeCursor,l=a.projectId,c=a.departmentId,i=a.user,d=i===void 0?{}:i;e.clickEvent(n),Ae.Z.editDepartmentSingleChargeUser({projectId:l,departmentId:c,chargeAccountId:d.accountId}).then(function(u){u?(alert(_l("\u8BBE\u7F6E\u6210\u529F",1)),e.refreshData(c,o,l)):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)})},e.inviteAgain=function(n){var a=e.props.user,o=a===void 0?{}:a;e.clickEvent(n),e.props.fetchReInvite([o.accountId])},e.cancelInviteAndRemove=function(n){var a=e.props,o=a.projectId,l=a.user,c=l===void 0?{}:l;e.clickEvent(n),(0,Qe.Z)({className:"deleteNodeConfirm",title:_l("\u786E\u8BA4\u53D6\u6D88\u9080\u8BF7\u8BE5\u7528\u6237\u5417"),description:"",okText:_l("\u786E\u5B9A"),onOk:function(){return e.props.fetchCancelImportUser([c.accountId],function(){e.props.loadInactiveUsers(o,1),e.props.fetchInActive(o)})}})},e.handleResetPasswordClick=function(n){e.clickEvent(n),e.setState({resetPasswordShowDialog:!e.state.resetPasswordShowDialog})},e.renderResetPasswordInfo=function(){var n=window,a=n.md,o=a===void 0?{}:a,l=o.global,c=l===void 0?{}:l,i=c.SysSettings,d=i===void 0?{}:i,u=d.passwordRegexTip;return e.state.resetPasswordShowDialog?t.createElement(de.Z,{title:_l("\u91CD\u7F6E\u5BC6\u7801"),okText:_l("\u4FDD\u5B58"),cancelText:_l("\u53D6\u6D88"),onCancel:function(){e.setState({resetPasswordShowDialog:!1})},onOk:e.handleSavePassWord,visible:e.state.resetPasswordShowDialog},t.createElement("div",{className:"Font15 Gray mTop20 mBottom10"},_l("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801")),t.createElement(De.Z,{className:"w100",type:"password",autocomplete:"new-password",value:e.state.password,placeholder:u||_l("\u5BC6\u7801\uFF0C8-20\u4F4D\uFF0C\u5FC5\u987B\u542B\u5B57\u6BCD+\u6570\u5B57"),onChange:function(f){e.setState({password:f})}})):""},e.handleSavePassWord=function(){var n=e.props,a=n.accountId,o=n.projectId,l=e.state.password,c=window,i=c.md,d=i===void 0?{}:i,u=d.global,p=u===void 0?{}:u,f=p.SysSettings,h=f===void 0?{}:f,v=h.passwordRegexTip,I=h.passwordRegex;if(E().isEmpty(l)){alert(_l("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"),3);return}else if(!Tt.Z.isPasswordValid(l,I)){alert(v||_l("\u5BC6\u7801\u8FC7\u4E8E\u7B80\u5355\uFF0C\u81F3\u5C118~20\u4F4D\u4E14\u542B\u5B57\u6BCD+\u6570\u5B57"),3);return}ee.Z.resetPassword({projectId:o,accountId:a,password:(0,Ne.HI)(l)}).then(function(g){g?(alert(_l("\u4FEE\u6539\u6210\u529F"),1),e.setState({resetPasswordShowDialog:!1,password:""})):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})},e.renderAction=function(){var n=e.props,a=n.user,o=n.isChargeUser,l=n.typeCursor,c=n.departmentId;return E().includes([0,1],l)?t.createElement(Oe.Z,{className:"userOptList"},t.createElement(ue.Z,{onClick:e.handleEditUserClick}," ",_l("\u7F16\u8F91")),md.global.Config.IsLocal&&!md.global.Config.IsPlatformLocal&&t.createElement(ue.Z,{onClick:e.handleResetPasswordClick}," ",_l("\u91CD\u7F6E\u5BC6\u7801")),c&&!o&&t.createElement(ue.Z,{onClick:e.setAndCancelCharge},_l("\u8BBE\u4E3A\u90E8\u95E8\u8D1F\u8D23\u4EBA")),c&&o&&t.createElement(ue.Z,{onClick:e.setAndCancelCharge},_l("\u53D6\u6D88\u90E8\u95E8\u8D1F\u8D23\u4EBA")),t.createElement(ue.Z,{onClick:e.handleTransfer}," ",_l("\u4EA4\u63A5\u5DE5\u4F5C")),a.accountId!==md.global.Account.accountId&&t.createElement(ue.Z,{className:"leaveText",onClick:e.handleRemoveUserClick},_l("\u79BB\u804C"))):l===2?t.createElement(Oe.Z,{className:"userOptList"},t.createElement(ue.Z,{onClick:e.inviteAgain},_l("\u91CD\u65B0\u9080\u8BF7")),t.createElement(ue.Z,{onClick:e.cancelInviteAndRemove},_l("\u53D6\u6D88\u9080\u8BF7\u5E76\u79FB\u9664"))):E().includes([2,3],a.status)?t.createElement(Oe.Z,{className:"userOptList"},t.createElement(ue.Z,{onClick:e.handleApprovalClick},a.status==2?_l("\u91CD\u65B0\u5BA1\u6279"):a.status==3?_l("\u5BA1\u6279"):""),a.status==3&&t.createElement(ue.Z,{onClick:e.handleRefuseClick},_l("\u62D2\u7EDD"))):t.createElement(t.Fragment,null)},e.state={resetPasswordShowDialog:!1,isMinSc:!1,fullDepartmentInfo:{},password:"",optListVisible:!1},e}return(0,J.default)(r,[{key:"renderContact",value:function(e){var n=e.mobilePhone,a=e.isPrivateMobile,o=null;return n?o=t.createElement("div",{className:"ellipsis w100"},t.createElement("span",{className:"w100 overflow_ellipsis WordBreak"},n)):a?o=t.createElement("span",{title:_l("\u4FDD\u5BC6"),className:"overLimi_130 overflow_ellipsis"},"*********"):o=t.createElement("div",{className:"Gray_9e ellipsis forRemind w100 overflow_ellipsis WordBreak"},t.createElement("span",{onClick:this.sendNotice(1),className:"Remind w100 overflow_ellipsis WordBreak"},_l("\u63D0\u9192\u586B\u5199"))),o}},{key:"renderEmail",value:function(e){var n=null,a=e.email,o=e.isPrivateEmail;return a?n=t.createElement("span",{title:a},a):o&&(n=t.createElement("span",{title:_l("\u4FDD\u5BC6"),className:"overLimi_130 overflow_ellipsis"},"*********")),n}},{key:"sendNotice",value:function(e){var n=this.props,a=n.projectId,o=n.accountId;return function(l){if(l.stopPropagation(),!o){alert(_l("\u6CA1\u6709\u8981\u63D0\u9192\u7684\u4EBA"),4);return}ee.Z.sendNotice({accountIds:[o],projectId:a,type:e}).then(function(){alert("\u5DF2\u6210\u529F\u53D1\u9001\u63D0\u9192",1)})}}},{key:"render",value:function(){var e=this,n=this.props,a=n.user,o=n.isChargeUser,l=n.isChecked,c=n.typeCursor,i=n.projectId,d=n.selectCount,u=n.isHideCurrentColumn,p=n.columnsInfo,f=p===void 0?[]:p,h=n.fullDepartmentInfo,v=h===void 0?{}:h,I=n.editCurrentUser,g=I===void 0?{}:I,b=n.departmentId,S=this.state,N=S.isMinSc,w=S.optListVisible,A=S.showWorkHandover,L=a.jobs,x=a.departments,Z=a.departmentInfos,B=a.jobInfos,D=b?Z:x||Z||[],U=L||B,M=0;f.forEach(function(F){u(F.value)&&(M+=F.width)});var q=$(".listInfo")&&M>$(".listInfo").width();return t.createElement("tr",{key:a.accountId,className:P()("userItem Hand",{isChecked:l,bgColor:g.accountId===a.accountId}),onClick:this.props.clickRow},t.createElement("td",{className:P()("checkBox",{showCheckBox:l,hasSelectCount:d>0})},t.createElement(ve.Z,{ref:"example",key:"checkBox-"+a.accountId,className:"TxtMiddle InlineBlock",checked:l,onClick:function(G,X,oe){oe.stopPropagation(),e.handleCheckbox(l,a.accountId)}})),u("name")&&t.createElement("td",{className:P()("nameTh",{left0:c!==0,pLeft12:c!==0}),style:{width:q?200:"unset"}},t.createElement("div",{className:"flexRow"},t.createElement(Fe.Z,{className:"avatar",user:{userHead:a.avatar,accountId:a.accountId},size:32,projectId:i}),t.createElement("a",{className:"overflow_ellipsis mLeft10 LineHeight32",title:a.fullname},a.fullname),o?t.createElement(Ce.Z,{text:t.createElement("span",null,_l("\u90E8\u95E8\u8D1F\u8D23\u4EBA")),action:["hover"]},t.createElement("span",{className:"icon-ic-head Font16 mLeft5 chargeIcon",title:_l("\u90E8\u95E8\u8D1F\u8D23\u4EBA")})):null)),u("department")&&t.createElement("td",{className:"departmentTh"},t.createElement("div",{className:"WordBreak overflow_ellipsis",onMouseEnter:function(){var G=D.map(function(X){return X.id||X.departmentId});e.props.updateFullDepartmentInfo(i,G)}},t.createElement(Ce.Z,{action:["hover"],tooltipClass:"departmentFullNametip",popupPlacement:"bottom",text:t.createElement("div",null,(D||[]).map(function(F,G){var X=(v[F.id]||v[F.departmentId]||"").split("/");return t.createElement("div",{className:P()({mBottom8:G<D.length-1})},X.map(function(oe,fe){return t.createElement("span",null,oe,X.length-1>fe&&t.createElement("span",{className:"mLeft8 mRight8"},"/"))}))})),mouseEnterDelay:.5},t.createElement("span",{className:"ellipsis InlineBlock wMax100 space"},(D||[]).map(function(F){return""+(F.name||F.departmentName)}).join("\uFF1B"))))),u("position")&&t.createElement("td",{className:"jobTh"},t.createElement("div",{className:"job WordBreak overflow_ellipsis",title:(U||[]).map(function(F,G){return U.length-1>G?(F.name||F.jobName)+";":""+(F.name||F.jobName)})},(U||[]).map(function(F,G){return U.length-1>G?(F.name||F.jobName)+" ; ":""+(F.name||F.jobName)}))),u("phone")&&t.createElement("td",{className:"mobileTh overflow_ellipsis WordBreak"}," ",this.renderContact(a)),!N&&u("email")&&t.createElement("td",{className:"emailTh overflow_ellipsis WordBreak"},this.renderEmail(a)),u("jobNum")&&t.createElement("td",{className:"jobNumberTh overflow_ellipsis WordBreak"},a.jobNumber),u("adress")&&t.createElement("td",{className:"workSiteTh overflow_ellipsis WordBreak"},a.workSiteName||a.workSite),u("joinDate")&&c===0&&t.createElement("td",{className:"joinDateTh"},a.addProjectTime?Te()(a.addProjectTime).format("YYYY-MM-DD"):Te()(a.createTime).format("YYYY-MM-DD")),!N&&c===3?t.createElement(t.Fragment,null,u("applyDate")&&t.createElement("td",{className:"dateTh overflow_ellipsis WordBreak"},Te()(a.updateTime).format("YYYY-MM-DD")),u("operator")&&t.createElement("td",{className:"actMenTh overflow_ellipsis WordBreak"},!a.lastModifyUser||!a.lastModifyUser.fullname?"":a.lastModifyUser.fullname)):"",t.createElement("td",{className:"actTh"},t.createElement(He.Z,{action:["click"],popupAlign:{points:["tl","bl"],offset:[-20,0],overflow:{adjustX:!0,adjustY:!0}},popupVisible:w,onPopupVisibleChange:function(G){return e.setState({optListVisible:G})},popup:this.renderAction},t.createElement("span",{className:"tip-top Hand",onClick:function(G){return G.stopPropagation()}},t.createElement("span",{className:"icon-moreop TxtMiddle Font18 Gray_9e"}))),this.renderResetPasswordInfo()),A&&t.createElement(Be,{visible:A,projectId:i,transferor:a,onCancel:function(){return e.setState({showWorkHandover:!1})}}))}}]),r}(t.Component),sa=function(r,s){var e=r.current,n=e.projectId,a=e.departmentId,o=e.activeAccountId,l=e.selectedAccountIds,c=e.typeCursor,i=e.isSelectAll,d=r.entities.fullDepartmentInfo,u=d===void 0?{}:d,p=r.pagination.userList.pageIndex,f=s.user.accountId,h=E().some(l,function(v){return v===f})||i;return{isOpen:o===f,accountId:f,isChecked:h,projectId:n,departmentId:a,pageIndex:p,typeCursor:c,selectCount:l.length,fullDepartmentInfo:u}},la=(0,ie.$j)(sa,function(m){return(0,xe.DE)((0,y.default)({},k,R),m)})(oa);const ia=la;var ne=C(88106),ca=C(14260),at=C.n(ca),da=C(60300),rt=C.n(da),ua=C(87506),Rt=C.n(ua);function Lt(m){var r=m.actType,s=m.typeCursor,e=m.isUploading,n=m.editCurrentUser,a=n===void 0?{}:n,o=m.handleSubmit,l=o===void 0?function(){}:o,c=m.saveFn,i=c===void 0?function(){}:c,d=m.onClose,u=d===void 0?function(){}:d,p=a.accountId;return t.createElement(t.Fragment,null,(s===0||s===1)&&r==="add"&&t.createElement("div",{className:"btnGroups"},t.createElement("a",{className:"btnBootstrap addBtn",href:"javascript:void(0);",disabled:e,onMouseDown:function(){return l()}},_l("\u6DFB\u52A0")),t.createElement("a",{className:"btnBootstrap mLeft8 addContinueBtn",href:"javascript:void(0);",disabled:e,onMouseDown:function(){return l(!0)}},_l("\u7EE7\u7EED\u6DFB\u52A0")),t.createElement("span",{className:"Hand cancelBtn mLeft8",onClick:function(){u(!0)}},_l("\u53D6\u6D88"))),(s===0||s===1)&&r!=="add"&&t.createElement("div",{className:"btnGroups flexRow"},t.createElement("div",{className:"flex"},t.createElement("a",{className:P()("btnBootstrap addBtn",{disabledBtn:e}),href:"javascript:void(0);",disabled:e,onClick:function(){e||i()}},_l("\u4FDD\u5B58")),t.createElement("span",{className:"Hand cancelBtn mLeft8",onClick:function(){u(!0)}},_l("\u53D6\u6D88")))),s===2&&t.createElement("div",{className:"btnGroups flexRow"},t.createElement("div",{className:"flex"},t.createElement("a",{className:"btnBootstrap addBtn",href:"javascript:void(0);",onClick:function(){return m.fetchReInvite([p],u)}},_l("\u91CD\u65B0\u9080\u8BF7")),t.createElement("span",{className:"Hand cancelBtn mLeft8",onClick:u},_l("\u53D6\u6D88")))),s===3&&t.createElement("div",{className:"btnGroups flexRow"},t.createElement("div",{className:"flex"},t.createElement("span",{className:"btnBootstrap addBtn",onClick:m.agreeJoin},_l("\u6279\u51C6\u52A0\u5165")),t.createElement("span",{className:"Hand cancelBtn mLeft8",onClick:function(){u(!0)}},_l("\u53D6\u6D88")))))}var Pt=C(6953),j=C(80671);function le(m){var r=m.label,s=m.field,e=m.error,n=m.value,a=m.placeholder,o=m.onChange,l=m.onFocus,c=m.maxLength,i=m.ref,d=m.disabled,u=m.isRequired,p=m.type,f={ref:i,value:n,disabled:d,placeholder:a,onChange:o,onFocus:l,type:p};return p==="password"&&(f.autoComplete="new-password"),t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},r,u?t.createElement("span",{className:"TxtMiddle Red"},"*"):null),t.createElement("input",(0,y.default)({type:"text",className:P()("formControl",{error:e,disabled:d,noBorder:d})},f,{maxLength:c||1/0})),m.children,e&&j.uE[s]&&t.createElement("div",{className:"Block Red LineHeight25 Hidden"},j.uE[s](n)))}var pa=C(85038),ma,Ft,Zt,fa=(0,ae.Z)([`
  &:not(.ant-select-customize-input) .ant-select-selector {
    height: unset !important;
  }
`],[`
  &:not(.ant-select-customize-input) .ant-select-selector {
    height: unset !important;
  }
`]),ha=(0,ae.Z)([`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  .roleTag {
    background: #eaeaea;
    border-radius: 12px 12px 12px 12px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
  }
`],[`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  .roleTag {
    background: #eaeaea;
    border-radius: 12px 12px 12px 12px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
  }
`]),va=(0,re.ZP)(Pe.default)(fa),Ia=re.ZP.div(ha),Ue=Pe.default.Option,$t=(Ft=ma=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return Zt.call(e),e.state={jobIds:[],worksiteList:[],orgRoles:[]},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.typeCursor,a=e.editCurrentUser,o=a===void 0?{}:a,l=e.actType;(n===2||l==="add")&&(this.getJobList(),this.getWorksiteList()),this.updateBaseInfo(this.props)}},{key:"componentWillReceiveProps",value:function(e){E().isEqual(e.baseInfo,this.props.baseInfo)||(this.setState({jobList:e.baseInfo.jobList,worksiteList:e.baseInfo.worksiteList}),this.updateBaseInfo(e))}},{key:"render",value:function(){var e=this,n=this.props,a=n.typeCursor,o=n.errors,l=o===void 0?{}:o,c=n.projectId,i=n.hideRole,d=this.state,u=d.departmentInfos,p=u===void 0?[]:u,f=d.fullDepartmentInfo,h=f===void 0?{}:f,v=d.visible,I=d.jobList,g=I===void 0?[]:I,b=d.jobIds,S=b===void 0?[]:b,N=d.keywords,w=N===void 0?"":N,A=d.workSite,L=A===void 0?"":A,x=d.worksiteList,Z=x===void 0?[]:x,B=d.workSiteId,D=d.worksiteKeywords,U=D===void 0?"":D,M=d.jobNumber,q=d.contactPhone,F=d.currentDepartmentId,G=d.orgRoles,X=G===void 0?[]:G,oe=[].concat((0,we.Z)(g));w&&(oe=oe.filter(function(T){return T.jobName.indexOf(w)>-1})),S.forEach(function(T){(T||"").toString().indexOf("add_")>-1&&oe.push({jobId:"",jobName:T.split("add_")[1]})});var fe=[].concat((0,we.Z)(Z));return U&&(fe=fe.filter(function(T){return T.workSiteName.indexOf(U)>-1})),t.createElement(t.Fragment,null,t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u90E8\u95E8")),p.map(function(T,O){var Se=(h[T.departmentId]||"").split("/");return t.createElement("span",{className:P()("itemSpan mAll5",{disabledDepartment:a===2}),onMouseEnter:function(){return e.getDepartmentFullName([T.departmentId])}},t.createElement(W.Z,{className:"departmentIcon Font14 TxtMiddle mRight6",icon:"department1"}),t.createElement(Ce.Z,{tooltipClass:"departmentFullNametip",popupPlacement:"bottom",text:t.createElement("div",null,Se.map(function(Ee,pe){return t.createElement("span",null,Ee,Se.length-1>pe&&t.createElement("span",{className:"mLeft8 mRight8"},"/"))})),mouseEnterDelay:.5},t.createElement("span",null,T.departmentName)),O===0&&t.createElement("span",{className:"isTopIcon"},_l("\u4E3B")),a!==2&&t.createElement("div",{className:"moreOption mLeft8"},t.createElement(He.Z,{popupClassName:"moreActionTrigger",action:["click"],popupAlign:{points:["tl","bl"],offset:[10,10]},popupVisible:v&&F===T.departmentId,onPopupVisibleChange:function(pe){e.setState({visible:pe})},popup:t.createElement("ul",null,O!==0&&t.createElement("li",{onClick:function(){var pe=p.filter(function(ut){return ut.departmentId!==T.departmentId}),dt=p.find(function(ut){return ut.departmentId===T.departmentId});pe.unshift(dt),e.setState({departmentInfos:pe,visible:!1})}},_l("\u8BBE\u4E3A\u4E3B\u5C5E\u90E8\u95E8")),t.createElement("li",{onClick:function(){var pe=p.filter(function(dt){return dt.departmentId!==T.departmentId});e.setState({departmentInfos:pe,visible:!1})}},_l("\u5220\u9664")))},t.createElement(W.Z,{className:"Font14 Hand Gray_bd TxtMiddle",icon:"moreop",onClick:function(pe){pe.stopPropagation(),e.setState({visible:!0,currentDepartmentId:T.departmentId})}}))))}),a!==2&&t.createElement(W.Z,{className:"Font26 Hand Gray_9e mAll5 TxtMiddle",icon:"task_add-02",onClick:function(O){return e.dialogSelectDeptFn(O)}})),!i&&a!==2&&t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u89D2\u8272")),t.createElement(Ia,{className:"formRolesValue"},X.map(function(T){return t.createElement("span",{className:"roleTag",key:T.id},t.createElement(W.Z,{icon:"person_new",className:"Gray_9e Font18 mRight8 TxtMiddle"}),t.createElement("span",null,T.name),t.createElement(W.Z,{icon:"clear",className:"mLeft8 Hand",onClick:function(){return e.deleteOrgRoles(T)}}))}),t.createElement(W.Z,{className:"Font26 Hand Gray_9e mAll5 TxtMiddle",icon:"task_add-02",onClick:function(O){return e.dialogSelectRoleFn(O)}}))),t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},t.createElement("span",null,_l("\u804C\u4F4D")),t.createElement("span",{className:"Gray_9e Hover_21 Hand Right",onClick:function(){location.assign("/admin/sysinfo/"+c+"?level5")}},_l("\u7BA1\u7406"))),t.createElement(va,{disabled:a===2,ref:function(O){e.select=O},className:P()("w100 mdAntSelect",{noBorder:a===2}),dropdownClassName:"dropJobList",showSearch:!0,allowClear:S.length>0,listHeight:285,optionLabelProp:"label",value:S,placeholder:"\u8BF7\u9009\u62E9",suffixIcon:t.createElement(W.Z,{icon:"arrow-down-border Font14"}),filterOption:function(){return!0},notFoundContent:t.createElement("span",{className:"Gray_99"},_l("\u53EF\u76F4\u63A5\u8F93\u5165\u521B\u5EFA\u65B0\u7684\u804C\u4F4D")),onSearch:function(O){return e.setState({keywords:O,jobIds:S.filter(function(Se){return Se.indexOf("add_")===-1})})},onDropdownVisibleChange:function(O){e.setState({keywords:""}),!O&&e.select.blur()},mode:"multiple",onChange:function(O){var Se=O.find(function(pe){return pe.indexOf("add_")>-1});if(Se){var Ee=Se.split("add_")[1];e.setState({keywords:""},function(){e.handleAddJob(Ee)})}else e.setState({jobIds:O,keywords:""})}},!!w&&E().isEmpty(g)&&t.createElement(Ue,{disabled:!0},t.createElement("span",{className:"ellipsis customRadioItem Gray_9e"},_l("\u53EF\u76F4\u63A5\u8F93\u5165\u521B\u5EFA\u65B0\u7684\u804C\u4F4D"))),oe.map(function(T){return t.createElement(Ue,{key:T.jobId,value:T.jobId,label:T.jobName},T.jobName)}),w&&!oe.find(function(T){return T.jobName===w})&&t.createElement(Ue,{value:"add_"+w,label:w},t.createElement("span",null,_l("\u521B\u5EFA\u65B0\u804C\u4F4D\uFF1A%0",w))))),t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},t.createElement("span",null,_l("\u5DE5\u4F5C\u5730\u70B9")),t.createElement("span",{className:"Gray_9e Hover_21 Hand Right",onClick:function(){location.assign("/admin/sysinfo/"+c+"?level3")}},_l("\u7BA1\u7406"))),t.createElement(Pe.default,{ref:function(O){e.worksiteSelect=O},disabled:a===2,className:P()("w100 mdAntSelect",{noBorder:a===2}),dropdownClassName:"dropJobList",showSearch:!0,allowClear:!0,listHeight:285,optionLabelProp:"label",value:B||void 0,placeholder:"\u8BF7\u9009\u62E9",suffixIcon:t.createElement(W.Z,{icon:"arrow-down-border Font14"}),filterOption:function(){return!0},notFoundContent:t.createElement("span",{className:"Gray_99"},_l("\u53EF\u76F4\u63A5\u8F93\u5165\u521B\u5EFA\u65B0\u7684\u5DE5\u4F5C\u5730\u70B9")),onSearch:function(O){return e.setState({worksiteKeywords:O})},onDropdownVisibleChange:function(O){e.setState({worksiteKeywords:""}),!O&&e.worksiteSelect.blur()},onChange:function(O){if(O&&O.indexOf("add_")>-1){var Se=O.split("add_")[1];e.setState({worksiteKeywords:""},function(){return e.handleAddWorksite(Se)})}else e.setState({workSiteId:O});var Ee=O&&O.indexOf("add_")>-1?O.split("add_")[1]:O;e.setState({workSiteId:Ee})}},!!U&&E().isEmpty(Z)&&t.createElement(Ue,{disabled:!0},t.createElement("span",{className:"ellipsis customRadioItem Gray_9e"},_l("\u53EF\u76F4\u63A5\u8F93\u5165\u521B\u5EFA\u65B0\u7684\u5DE5\u4F5C\u5730\u70B9"))),fe.map(function(T){return t.createElement(Ue,{key:T.workSiteId,value:T.workSiteId,label:T.workSiteName},T.workSiteName)}),U&&!fe.find(function(T){return T.workSiteName===U})&&t.createElement(Ue,{value:"add_"+U,label:U},t.createElement("span",null,_l("\u521B\u5EFA\u65B0\u5DE5\u4F5C\u5730\u70B9\uFF1A%0",U))))),t.createElement(le,{label:_l("\u5DE5\u53F7"),value:M,disabled:a===2,placeholder:_l(""),onChange:function(O){return e.changeFormInfo(O,"jobNumber")}}),t.createElement(le,{label:_l("\u5DE5\u4F5C\u7535\u8BDD"),field:"contactPhone",value:q,disabled:a===2,onChange:function(O){return e.changeFormInfo(O,"contactPhone")},maxLength:"32",error:l.contactPhone&&!!j.uE.contactPhone(q)}))}}]),r}(t.Component),Zt=function(){var r=this;this.updateBaseInfo=function(s){var e=s.typeCursor,n=s.editCurrentUser,a=n===void 0?{}:n,o=s.actType,l=a.departmentInfos,c=l===void 0?[]:l,i=a.jobInfos,d=i===void 0?[]:i,u=s.baseInfo,p=u.jobNumber,f=u.contactPhone,h=u.workSiteId,v=u.departmentIds,I=u.jobIds,g=I===void 0?[]:I,b=u.jobList,S=u.worksiteList,N=u.orgRoles,w=N===void 0?[]:N,A=e===2||e===3?c.map(function(L){return L.id||L.departmentId}):v;r.getDepartmentFullName(A,"all"),r.setState({jobNumber:p,contactPhone:f,workSiteId:h,jobList:b,worksiteList:S,departmentIds:A,jobIds:e===2||e===3?d.map(function(L){return L.id||L.jobId}):g,departmentInfos:c,jobInfos:d,orgRoles:w})},this.dialogSelectDeptFn=function(s){var e=r.props.projectId,n=r.state.departmentInfos,a=r;(0,Je.Z)({projectId:e,unique:!1,fromAdmin:!0,selectedDepartment:n,showCreateBtn:!1,selectFn:function(l){a.getDepartmentFullName(l.map(function(c){return c.departmentId}),"all",l)}})},this.dialogSelectRoleFn=function(s){var e=r.props.projectId,n=r.state.orgRoles;(0,pa.Z)(s.target,{projectId:e,unique:!1,offset:{left:-167},onSave:function(o){if(o.length){var l=o.map(function(c){return{id:c.organizeId,name:c.organizeName}});r.setState({orgRoles:E().uniqBy(n.concat(l),"id")})}}})},this.getDepartmentFullName=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments[1],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=r.props.projectId,o=r.state.fullDepartmentInfo,l=o===void 0?{}:o,c=s.filter(function(i){return!l[i]});if(E().isEmpty(c)){E().isEmpty(n)||r.setState({departmentInfos:n.map(function(i){return E().includes(s,i.departmentId)?(0,y.default)({},i,{departmentName:(0,j._L)(l[i.departmentId])}):i})});return}Ae.Z.getDepartmentFullNameByIds({projectId:a,departmentIds:s}).then(function(i){if(e==="all"){r.setState({departmentInfos:i.map(function(d){return{departmentId:d.id,departmentName:(0,j._L)(d.name)}})});return}i.forEach(function(d){l[d.id]=d.name}),r.setState({fullDepartmentInfo:l})})},this.getJobList=function(s){var e=r.props.projectId,n=r.state.keywords;!s&&r.props.actType!=="add"&&r.setState({jobLoading:!0}),r.ajaxRequest&&r.ajaxRequest.abort(),r.ajaxRequest=Pt.Z.getJobs({projectId:e,keywords:n,pageIndex:1,pageSize:1e3}),r.ajaxRequest.then(function(a){var o=s&&E().find(a.list,function(c){return c.jobName===s})||{},l=s&&o&&E().get(o,"jobId")?[o.jobId]:[];r.setState({jobList:a.list,jobIds:[].concat((0,we.Z)(r.state.jobIds),l),jobLoading:!1})})},this.changeFormInfo=function(s,e){var n;r.setState((n={},(0,ne.default)(n,e,e==="mobile"?r.iti.getNumber():e==="email"?s:s.target.value),(0,ne.default)(n,"isClickSubmit",!1),n))},this.handleAddJob=function(s){var e=r.props.projectId;Pt.Z.addJob({projectId:e,jobName:s}).then(function(n){n?(alert(_l("\u521B\u5EFA\u6210\u529F")),r.getJobList(s)):alert(_l("\u521B\u5EFA\u5931\u8D25"),2)})},this.getWorksiteList=function(s){var e=r.props.projectId,n=r.state.worksiteKeywords;!s&&r.props.actType!=="add"&&r.setState({worksiteLoading:!0}),r.worksiteRequest&&r.worksiteRequest.abort(),r.worksiteRequest=Ye.Z.getWorkSites({projectId:e,sortField:1,sortType:1,pageSize:1e3,keywords:n}),r.worksiteRequest.then(function(a){var o=s&&E().find(a.list,function(c){return c.workSiteName===s})||{},l=o.workSiteId;r.setState({worksiteList:a.list,workSiteId:l||r.state.workSiteId,worksiteLoading:!1})})},this.handleAddWorksite=function(s){var e=r.props.projectId;Ye.Z.addWorkSite({projectId:e,worksiteName:s}).then(function(n){n?(alert(_l("\u521B\u5EFA\u6210\u529F")),r.getWorksiteList(s)):alert(_l("\u521B\u5EFA\u5931\u8D25"),2)})},this.deleteOrgRoles=function(s){var e=r.state.orgRoles;r.setState({orgRoles:e.filter(function(n){return n.id!==s.id})})}},Ft),Ot=C(29208),Bt=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.itiFn=function(){e.mobilePhone&&(e.iti=at()(e.mobilePhone,{customPlaceholder:"",autoPlaceholder:"off",loadUtils:"",initialCountry:_.get(md,"global.Config.DefaultConfig.initialCountry")||"cn",preferredCountries:_.get(md,"global.Config.DefaultConfig.preferredCountries")||["cn"],utilsScript:rt(),separateDialCode:!0,showSelectedDialCode:!0}))},e.getUserData=function(){var n=e.props,a=n.accountId,o=n.projectId,l=n.typeCursor,c=n.editCurrentUser;e.setState({isUploading:!0}),ee.Z.getUserCard({accountId:a,projectId:o}).then(function(i){var d=i.user,u=d===void 0?{}:d,p=i.jobs,f=p===void 0?[]:p,h=i.workSites,v=h===void 0?[]:h;e.setState({isUploading:!1,userName:u.fullname||"",companyName:u.companyName||"",mobile:u.mobilePhone,email:u.email,mobilePhone:u.mobilePhone||c.mobilePhone,baseInfo:{jobNumber:u.jobNumber||"",contactPhone:u.contactPhone||"",workSiteId:u.workSiteId,departmentIds:u.departmentInfos.map(function(I){return I.departmentId}),jobIds:l===3?e.state.jobIds:(u.jobInfos||[]).map(function(I){return I.jobId}),jobList:f,worksiteList:v,orgRoles:u.orgRoles||[]}})})},e.changeFormInfo=function(n,a){var o;e.setState((o={},(0,ne.default)(o,a,a==="mobilePhone"?n.target.value.replace(/ +/g,""):n.target.value),(0,ne.default)(o,"isClickSubmit",!1),o))},e.fromatMobilePhoe=function(n){var a=n;if(e.iti){var o=e.iti.getSelectedCountryData(),l="+"+o.dialCode;a=(a||"").replace(l,"")}return a},e.clearError=function(n){var a=e.state.errors,o=a===void 0?{}:a;delete o[n],e.setState({errors:o})},e.agreeJoin=function(){var n=e.props,a=n.projectId,o=n.accountId,l=n.onClose,c=l===void 0?function(){}:l,i=e.baseFormInfo.state,d=i.jobIds,u=d===void 0?[]:d,p=i.departmentInfos,f=p===void 0?[]:p,h=i.jobNumber,v=i.workSiteId,I=i.contactPhone,g=i.orgRoles,b=g===void 0?[]:g;ee.Z.agreeUserJoin({projectId:a,accountId:o,jobIds:u,departmentIds:f.map(function(S){return S.departmentId}),workSiteId:v,jobNumber:h,contactPhone:I,orgRoleIds:b.map(function(S){return S.id})}).then(function(S){S===1?(alert(_l("\u6279\u51C6\u6210\u529F")),c(),e.props.fetchApproval(),e.props.clickSave()):S===4?alert(_l("\u5F53\u524D\u7528\u6237\u6570\u5DF2\u8D85\u51FA\u4EBA\u6570\u9650\u5236"),3):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)},function(){alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})},e.saveFn=function(){var n=e.props,a=n.projectId,o=n.accountId,l=e.baseFormInfo.state,c=l.jobIds,i=c===void 0?[]:c,d=l.departmentInfos,u=d===void 0?[]:d,p=l.jobNumber,f=l.workSiteId,h=l.contactPhone,v=l.orgRoles;if(!md.global.Config.IsLocal||md.global.Config.IsPlatformLocal)ee.Z.updateUserCard({projectId:a,accountId:o,jobIds:i,departmentIds:u.map(function(x){return x.departmentId}),jobNumber:p,contactPhone:h,workSiteId:f,orgRoleIds:v.map(function(x){return x.id})}).then(function(x){x===1?(alert(_l("\u4FEE\u6539\u6210\u529F"),1),e.props.clickSave()):alert(_l("\u4FDD\u5B58\u5931\u8D25"),2),e.setState({isUploading:!1})},function(){alert(_l("\u4FDD\u5B58\u5931\u8D25"),2)});else{var I,g=e.state,b=g.userName,S=g.email,N=g.mobilePhone,w=g.companyName,A=(0,y.default)({},e.state.errors,{userName:!!j.uE.userName(b),contactPhone:!!j.uE.contactPhone(h),mobilePhone:N&&!!j.uE.mobilePhone(N,e.iti),email:S&&!!j.uE.email(S)});if(e.setState({errors:A}),!(S||N))return alert(_l("\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u6216\u90AE\u7BB1"),3),!1;if(A&&_.values(A).some(function(x){return x}))return!1;var L=(I={accountId:o,companyName:w,contactPhone:"",departmentIds:u.map(function(x){return x.departmentId}),email:S,fullname:b,jobIds:i,jobNumber:p,mobilePhone:N,projectId:a,workSiteId:f},(0,ne.default)(I,"contactPhone",h),(0,ne.default)(I,"orgRoleIds",v.map(function(x){return x.id})),I);e.setState({isUploading:!0}),$e().all([Ot.Z.checkSensitive({content:w}),Ot.Z.checkSensitive({content:p})]).then(function(x){x.find(function(Z){return Z})?(alert(_l("\u8F93\u5165\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u8BF7\u91CD\u65B0\u586B\u5199"),3),e.setState({isUploading:!1})):ee.Z.updateUser(L).then(function(Z){Z===1?(alert(_l("\u4FEE\u6539\u6210\u529F"),1),e.props.clickSave()):alert(_l("\u4FDD\u5B58\u5931\u8D25"),2),e.setState({isUploading:!1})}).catch(function(Z){e.setState({isUploading:!1}),e.itiFn()})})}},e.renderBaseUserInfo=function(){var n=e.props.typeCursor,a=e.state,o=a.userName,l=a.mobile,c=a.email,i=a.companyName,d=a.mobilePhone,u=a.errors,p=u===void 0?{}:u,f=a.status;return md.global.Config.IsLocal?t.createElement(t.Fragment,null,md.global.Config.IsPlatformLocal||n===2||n===3?t.createElement(le,{label:_l("\u59D3\u540D"),value:o,disabled:"disabled"}):t.createElement(le,{label:_l("\u59D3\u540D"),field:"userName",value:o,isRequired:!0,placeholder:_l(""),error:p.userName&&!!j.uE.userName(o),onChange:function(v){return e.changeFormInfo(v,"userName")},onFocus:function(){e.clearError("userName")}}),md.global.Config.IsPlatformLocal||n===2||n===3?t.createElement(le,{label:_l("\u624B\u673A\u53F7"),value:l,disabled:"disabled"}):t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u624B\u673A\u53F7")),t.createElement(De.Z,{className:P()("formControl input",{error:p.mobilePhone&&!!j.uE.mobilePhone(d,e.iti)}),value:e.fromatMobilePhoe(d),manualRef:function(v){return e.mobilePhone=v},onInput:function(v){return e.changeFormInfo(v,"mobilePhone")},placeholder:_l("\u8BF7\u8F93\u5165"),onFocus:function(){e.clearError("mobilePhone")}}),p.mobilePhone&&!!j.uE.mobilePhone(d,e.iti)&&t.createElement("div",{className:"Block Red LineHeight25 Hidden"},j.uE.mobilePhone(d,e.iti))),md.global.Config.IsPlatformLocal?t.createElement(le,{label:_l("\u90AE\u7BB1"),value:c,disabled:"disabled"}):n===0||n===1?t.createElement(le,{label:_l("\u90AE\u7BB1"),field:"email",value:c,placeholder:_l(""),error:p.email&&!!j.uE.email(c),onChange:function(v){return e.changeFormInfo(v,"email")},onFocus:function(){e.clearError("email")}}):"",(n===0||n===1)&&t.createElement(le,{label:_l("\u7EC4\u7EC7"),field:"companyName",value:i,placeholder:_l("\u7EC4\u7EC7\u540D\u79F0"),onChange:function(v){return e.changeFormInfo(v,"companyName")},onFocus:function(){e.clearError("companyName")}})):t.createElement(t.Fragment,null,n===3&&t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u72B6\u6001")),f===3&&t.createElement("div",{className:"status check"},_l("\u5F85\u5BA1\u6838")),f===2&&t.createElement("div",{className:"status refuse"},_l("\u5DF2\u62D2\u7EDD"))),t.createElement(le,{label:_l("\u59D3\u540D"),value:o,disabled:"disabled"}),t.createElement(le,{label:_l("\u624B\u673A"),value:l,disabled:"disabled"}),t.createElement(le,{label:_l("\u90AE\u7BB1"),value:c,disabled:"disabled"}))},e.state={departmentIds:[],errors:{},baseInfo:{}},e.it=null,e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){var e=this,n=this.props,a=n.typeCursor,o=n.editCurrentUser,l=o===void 0?{}:o;if(a!==2&&this.getUserData(),a===2&&this.setState((0,y.default)({},l,{userName:l.fullname,mobile:l.mobilePhone})),a!==0){var c=l.fullname,i=l.mobilePhone,d=l.email,u=l.status,p=u===void 0?"":u;this.setState({userName:c,mobile:i,email:d,status:p,isUploading:!1})}setTimeout(function(){e.itiFn()},500)}},{key:"componentWillReceiveProps",value:function(e){if(e.typeCursor!==0&&!_.isEqual(this.props.editCurrentUser,e.editCurrentUser)){var n=e.fullname,a=e.mobilePhone,o=e.email,l=e.department,c=e.job,i=e.worksite,d=e.jobNumber,u=e.contactPhone;this.setState({userName:n,mobile:a,email:o,jobNumber:d,contactPhone:u,mobilePhone:a})}}},{key:"componentDidUpdate",value:function(){!this.iti&&this.itiFn()}},{key:"render",value:function(){var e=this,n=this.props,a=n.onClose,o=a===void 0?function(){}:a,l=n.actType,c=n.typeCursor,i=n.editCurrentUser,d=n.projectId,u=n.departmentId,p=n.accountId,f=this.state,h=f.isUploading,v=f.errors,I=f.jobList,g=f.worksiteList,b=f.baseInfo,S=f.showWorkHandover,N=f.userName;return t.createElement(Rt(),{component:"div",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},t.createElement("div",{className:"addEditUserInfoWrap",key:"addEditUserInfo"},t.createElement("div",{className:"headerInfo"},t.createElement("div",{className:"Font17 Bold flex"},_l("\u4EBA\u5458\u4FE1\u606F")),t.createElement("span",{className:"close Hand",onClick:function(){o()}},t.createElement(W.Z,{icon:"close",className:"Font24 Gray_9e LineHeight36"}))),(!md.global.Config.IsLocal||md.global.Config.IsLocal&&md.global.Config.IsPlatformLocal)&&t.createElement("div",{className:"Gray_9e mLeft24"},_l("\u59D3\u540D\u3001\u624B\u673A\u548C\u90AE\u7BB1\u4E3A\u4E2A\u4EBA\u8D26\u6237\u4FE1\u606F\uFF0C\u7EC4\u7EC7\u4E2D\u65E0\u6CD5\u4FEE\u6539")),h?t.createElement("div",{className:"flex flexRow justifyContentCenter alignItemsCenter"},t.createElement(he.Z,null)):t.createElement(t.Fragment,null,t.createElement("div",{className:"formInfoWrap flex"},this.renderBaseUserInfo(),t.createElement($t,{ref:function(A){return e.baseFormInfo=A},typeCursor:c,actType:l,isUploading:h,editCurrentUser:i,projectId:d,errors:v,jobList:I,worksiteList:g,baseInfo:b})),t.createElement(Lt,{typeCursor:c,actType:l,isUploading:h,editCurrentUser:i,projectId:d,departmentId:u,clickSave:this.props.clickSave,saveFn:this.saveFn,agreeJoin:this.agreeJoin,onClose:o,fetchInActive:this.props.fetchInActive,fetchApproval:this.props.fetchApproval,fetchReInvite:this.props.fetchReInvite,fetchCancelImportUser:this.props.fetchCancelImportUser,handleTransfer:function(){return e.setState({showWorkHandover:!0})}})),t.createElement("div",{className:"cover",onClick:function(){o()}}),S&&t.createElement(Be,{visible:S,projectId:d,transferor:{accountId:p,fullname:N},onCancel:function(){return e.setState({showWorkHandover:!1})}})))}}]),r}(t.Component),ga=function(r){var s=r.dispatch;s((0,R.updateUserOpList)(null))},Ea=function(r,s,e,n,a){if(r)a((0,k.loadUsers)(r,n));else switch(s){case 0:a((0,k.loadAllUsers)(e,n));break;case 1:a((0,k.loadUsers)(r,n));break;case 2:a((0,k.loadInactiveUsers)(e,n));break;case 3:a((0,k.loadApprovalUsers)(e,n));break}},Ht=function(m){(0,Y.default)(r,m);function r(){var s,e,n,a;(0,z.default)(this,r);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return a=(e=(n=(0,V.default)(this,(s=r.__proto__||K()(r)).call.apply(s,[this].concat(l))),n),n.state={isMinSc:!1,columnsInfo:[{value:"name",label:_l("\u59D3\u540D"),checked:!0,width:200},{value:"department",label:_l("\u90E8\u95E8"),checked:!0,width:160},{value:"position",label:_l("\u804C\u4F4D"),checked:!0,width:160},{value:"phone",label:_l("\u624B\u673A"),checked:!0,width:160},{value:"email",label:_l("\u90AE\u7BB1"),checked:!0,width:180},{value:"jobNum",label:_l("\u5DE5\u53F7"),checked:!0,width:120},{value:"adress",label:_l("\u5DE5\u4F5C\u5730\u70B9"),checked:!0,width:120},{value:"joinDate",label:_l("\u52A0\u5165\u65F6\u95F4"),checked:!0,typeCursor:0,width:120},{value:"applyDate",label:_l("\u7533\u8BF7\u65E5\u671F"),checked:!0,typeCursor:3,width:160},{value:"operator",label:_l("\u64CD\u4F5C\u8005"),checked:!0,typeCursor:3,width:160}]},n.handleClickStastics=function(i){var d=n.state.columnsInfo,u=[];i?u=d.map(function(p){return p.value!=="name"?(0,y.default)({},p,{checked:!1}):p}):u=d.map(function(p){return(0,y.default)({},p,{checked:!0})}),safeLocalStorageSetItem("columnsInfoData",Ie()(u)),n.setState({columnsInfo:u})},n.handleSingleColumn=function(i,d){var u=n.state.columnsInfo,p=JSON.parse(localStorage.getItem("columnsInfoData"))||[],f=!E().isEmpty(p)&&p||u,h=f.map(function(v){return v.value===d?(0,y.default)({},v,{checked:!i}):v});safeLocalStorageSetItem("columnsInfoData",Ie()(h)),n.setState({columnsInfo:h})},n.renderShowColumns=function(){var i=n.props.typeCursor,d=n.state.columnsInfo,u=JSON.parse(localStorage.getItem("columnsInfoData"))||[],p=(!E().isEmpty(u)&&u||d||[]).filter(function(v){return E().isUndefined(v.typeCursor)||v.typeCursor===i}),f=p.filter(function(v){return v.checked}).length,h=p.length;return t.createElement("div",{className:"showColumnsBox"},t.createElement("div",{className:"statistics"},t.createElement(ve.Z,{clearselected:f!==h,checked:E().every(p,function(v){return v.checked}),onClick:n.handleClickStastics},t.createElement("span",{className:"verticalAlign"},_l("\u663E\u793A\u5217 %0/%1",f,h)))),t.createElement("ul",null,p.map(function(v){return v.typeCursor&&v.typeCursor!==n.props.typeCursor||v.typeCursor===0&&n.props.typeCursor!==0?null:t.createElement("li",{key:v.value},t.createElement(ve.Z,{checked:v.checked,onClick:function(g){return n.handleSingleColumn(g,v.value)},disabled:v.value==="name"},t.createElement("span",{className:"verticalAlign"},v.label)))})))},n.isHideCurrentColumn=function(i){var d=n.state.columnsInfo,u=JSON.parse(localStorage.getItem("columnsInfoData"))||[],p=!E().isEmpty(u)&&u||d,f=p.filter(function(h){return h.value===i})[0]||{};return f.checked},n.handleVisibleChange=function(i){n.setState({dropDownVisible:i})},n.renderThead=function(i){var d=i.isThisPageCheck,u=i.isSelectAll,p=i.dispatch,f=i.selectCount,h=i.typeCursor,v=i.usersCurrentPage,I=v===void 0?[]:v,g=i.searchId,b=g===void 0?[]:g,S=i.isSearch,N=i.searchAccountIds,w=n.state,A=w.columnsInfo,L=w.dropDownVisible,x=JSON.parse(localStorage.getItem("columnsInfoData"))||[],Z=!E().isEmpty(x)&&x||A,B=d||u,D=Z.filter(function(X){return(!X.typeCursor||X.typeCursor===n.props.typeCursor)&&X.checked}).length,U=h===3?D!==10:D!==8,M=0;Z.forEach(function(X){n.isHideCurrentColumn(X.value)&&(M+=X.width)});var q=$(".listInfo")&&M>$(".listInfo").width(),F=$(".listInfo").height()>48*I.length||b.length?80:90,G=S&&b[0]&&N.length>0?N.filter(function(X){return X.accountId===b[0]}):I;return t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",{className:P()("checkBox",{showCheckBox:B||f>0,hasSelectCount:f>0})},t.createElement(ve.Z,{ref:"example",className:"TxtMiddle InlineBlock mRight0 checked_selected",clearselected:f>0&&f!==G.length&&!d,checked:B,onClick:function(oe,fe){var T=E().map(G,function(O){return O.accountId});p(B?(0,R.removeUserFromSet)(T):(0,R.addUserToSet)(T))}})),n.isHideCurrentColumn("name")&&t.createElement("th",{className:P()("TxtLeft nameTh",{left0:h!==0,pLeft12:h!==0}),style:{width:q?200:"unset"}},_l("\u59D3\u540D")),n.isHideCurrentColumn("department")&&t.createElement("th",{className:"departmentTh"},_l("\u90E8\u95E8")),n.isHideCurrentColumn("position")&&t.createElement("th",{className:"TxtLeft jobTh"},_l("\u804C\u4F4D")),n.isHideCurrentColumn("phone")&&t.createElement("th",{className:"mobileTh"},_l("\u624B\u673A")),!n.state.isMinSc&&n.isHideCurrentColumn("email")&&t.createElement("th",{className:"emailTh"},_l("\u90AE\u7BB1")),n.isHideCurrentColumn("jobNum")&&t.createElement("th",{className:"jobNumberTh"},_l("\u5DE5\u53F7")),n.isHideCurrentColumn("adress")&&t.createElement("th",{className:"workSiteTh"},_l("\u5DE5\u4F5C\u5730\u70B9")),n.isHideCurrentColumn("joinDate")&&i.typeCursor===0&&t.createElement("th",{className:"joinDateTh"},_l("\u52A0\u5165\u65F6\u95F4")),!n.state.isMinSc&&i.typeCursor===3&&t.createElement(t.Fragment,null,n.isHideCurrentColumn("applyDate")&&t.createElement("th",{className:"dateTh"},_l("\u7533\u8BF7\u65E5\u671F")),n.isHideCurrentColumn("operator")&&t.createElement("th",{className:"actMenTh"},_l("\u64CD\u4F5C\u8005"))),t.createElement("th",{width:"80px",className:"actTh",style:{width:F}},t.createElement(ht.default,{overlay:n.renderShowColumns,trigger:["click"],visible:L,onVisibleChange:n.handleVisibleChange,placement:"bottomRight"},t.createElement(Ce.Z,{text:t.createElement("span",null,_l("\u81EA\u5B9A\u4E49\u663E\u793A\u5217")," "),popupPlacement:"top"},t.createElement(W.Z,{icon:"visibility",className:"visibiliityIcon",style:U?{color:"#2196f3"}:{}}))))))},n.renderCon=function(){return n.props.allCount!==0?n.renderUsers(n.props):n.renderNullState()},n.renderUsers=function(i){var d=n.state.columnsInfo,u=JSON.parse(localStorage.getItem("columnsInfoData"))||[],p=!E().isEmpty(u)&&u||d,f=i.usersCurrentPage,h=f===void 0?[]:f,v=i.projectId,I=i.chargeUsers,g=I===void 0?[]:I,b=i.searchAccountIds,S=i.searchId,N=S===void 0?[]:S,w=i.isSearch;return w&&N[0]&&b.length>0&&(h=b.filter(function(A){return A.accountId===N[0]})),h.length<=0?"":E().sortBy(h,function(A){return!E().includes(g,A.accountId)}).map(function(A,L){var x=E().includes(g,A.accountId);return t.createElement(ia,{isSearch:i.isSearch,isChargeUser:x,user:A,projectId:v,key:A.accountId||L,isHideCurrentColumn:n.isHideCurrentColumn,columnsInfo:p,dateNow:Date.now(),editCurrentUser:n.state.editCurrentUser,clickRow:function(){n.setState({openChangeUserInfoDrawer:!0,editCurrentUser:(0,y.default)({},A,{departmentInfos:(A.departmentInfos||A.departments).map(function(B){return{departmentId:B.departmentId||B.id,departmentName:B.departmentName||B.name}})})})}})})},n.bodyScroll=function(){var i=n.tbodyContainer&&n.tbodyContainer.scrollLeft;n.headContainer&&(n.headContainer.scrollLeft=i),i>0?$(".nameTh").addClass("fixedLeft"):i===0&&$(".nameTh").removeClass("fixedLeft"),n.tbodyContainer.scrollWidth-n.tbodyContainer.scrollLeft===n.tbodyContainer.clientWidth?$(".actTh").removeClass("fixedRight"):n.tbodyContainer.scrollWidth-n.tbodyContainer.scrollLeft!==n.tbodyContainer.clientWidth&&$(".actTh").addClass("fixedRight")},n.headScroll=function(){var i=n.headContainer&&n.headContainer.scrollLeft;n.headContainer&&(n.tbodyContainer.scrollLeft=i),i>0?$(".nameTh").addClass("fixedLeft"):i===0&&$(".nameTh").removeClass("fixedLeft"),n.headContainer.scrollWidth-n.headContainer.scrollLeft===n.headContainer.clientWidth?$(".actTh").removeClass("fixedRight"):n.headContainer.scrollWidth-n.headContainer.scrollLeft!==n.headContainer.clientWidth&&$(".actTh").addClass("fixedRight")},e),(0,V.default)(n,a)}return(0,J.default)(r,[{key:"componentWillUnmount",value:function(){ga(this.props)}},{key:"shouldComponentUpdate",value:function(e,n){return!e.showSeachResult}},{key:"renderNullState",value:function(){var e=this.props.typeCursor;return t.createElement("div",{className:"TxtCenter listPhContent"},t.createElement("div",null,t.createElement("div",{className:"nullState InlineBlock"},t.createElement(W.Z,{className:"",icon:"Empty_data"})),t.createElement("h6",{className:"Bold Font15 txtCenter mTop20 mBottom0"},e===2?_l("\u65E0\u672A\u6FC0\u6D3B\u6210\u5458"):e===3?_l("\u65E0\u5F85\u5BA1\u6838\u6210\u5458"):""),t.createElement("p",{className:"Gray_75",style:{maxWidth:"270px",margin:"10px auto"}},e===2?_l("\u7BA1\u7406\u5458\u901A\u8FC7\u624B\u673A\u548C\u90AE\u7BB1\u6DFB\u52A0\u7684\u6210\u5458\u672A\u6FC0\u6D3B\u65F6\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"):e===3?_l("\u901A\u8FC7\u94FE\u63A5\u3001\u641C\u7D22\u4F01\u4E1A\u8D26\u53F7\u3001\u975E\u7BA1\u7406\u5458\u901A\u8FC7\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u9080\u8BF7\u7684\u6210\u5458\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"):_l("\u6682\u65E0\u6210\u5458\uFF0C\u60A8\u53EF\u4EE5\u70B9\u51FB\u9876\u90E8\u64CD\u4F5C\u6DFB\u52A0\u6210\u5458"))))}},{key:"render",value:function(){var e=this,n=this.props,a=n.isLoading,o=n.projectId,l=n.dispatch,c=n.typeCursor,i=n.pageIndex,d=n.departmentId,u=this.state,p=u.openChangeUserInfoDrawer,f=u.editCurrentUser,h=f===void 0?{}:f;return a?t.createElement(he.Z,null):t.createElement("div",{className:"tableContent"},t.createElement("div",{className:"theadContainer",ref:function(I){return e.headContainer=I},onScroll:this.headScroll},t.createElement("table",{className:"usersTable overflowTable",cellSpacing:"0"},this.renderThead(this.props))),t.createElement("div",{className:"tbodyContainer",ref:function(I){return e.tbodyContainer=I},onScroll:this.bodyScroll},t.createElement("table",{className:"usersTable overflowTable",cellSpacing:"0"},t.createElement("tbody",null,this.renderCon()))),p&&t.createElement(Bt,{projectId:o,typeCursor:c,actType:"edit",key:"editUserInfo_"+h.accountId,accountId:h.accountId,editCurrentUser:h,departmentId:d,clickSave:function(){Ea(d,c,o,i,l),e.setState({openChangeUserInfoDrawer:!1})},onClose:function(){e.setState({openChangeUserInfoDrawer:!1,editCurrentUser:{}})},cancelInviteRemove:function(){l((0,k.loadInactiveUsers)(o,1))},fetchInActive:function(){return l((0,R.fetchInActive)(o))},fetchApproval:function(){return l((0,R.fetchApproval)(o))},fetchReInvite:function(I,g){return l((0,R.fetchReInvite)(I,g))},fetchCancelImportUser:function(I,g){return l((0,R.fetchCancelImportUser)(I,g))}}))}}]),r}(t.Component);Ht.propTypes={};var Ca=function(r,s){var e=r.pagination.userList,n=e===void 0?{}:e,a=r.entities,o=a.users,l=a.departments,c=a.searchUsers,i=r.current,d=i.selectedAccountIds,u=d===void 0?[]:d,p=i.activeAccountId,f=i.typeCursor,h=i.isSelectAll,v=i.departmentId,I=r.search.showSeachResult,g=I===void 0?!1:I,b=l[v]||{},S=b.chargeUsers,N=S===void 0?[]:S,w=n&&n.ids?n:{ids:[]},A=n.ids,L=A===void 0?[]:A,x=n.searchId,Z=x===void 0?[]:x,B=n.pageIndex,D=u.length>0;return L.map(function(U){E().includes(u,U)||(D=!1)}),(0,y.default)({},w,{activeAccountId:p,isSelectAll:h,chargeUsers:N,usersCurrentPage:o,typeCursor:f,isThisPageCheck:D,selectCount:u.length,searchAccountIds:c,isSearch:n&&n.isSearchResult,searchId:Z,showSeachResult:g,departmentId:v,pageIndex:B})},ba=(0,ie.$j)(Ca)(Ht);const Mt=ba;var ya=(0,ae.Z)([`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  .item {
    width: 42px;
    text-align: center;
    padding: 10px 0;
    margin-right: 30px;
    &.active {
      border-bottom: 2px solid #2196f3;
    }
  }
`],[`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  .item {
    width: 42px;
    text-align: center;
    padding: 10px 0;
    margin-right: 30px;
    &.active {
      border-bottom: 2px solid #2196f3;
    }
  }
`]),Sa=re.ZP.div(ya),xa=[{tab:_l("\u5F85\u5BA1\u6838"),type:3},{tab:_l("\u5DF2\u62D2\u7EDD"),type:2}];function ka(m){var r=m.projectId,s=m.isLoading,e=m.userStatus,n=m.selectedAccountIds,a=m.loadApprovalUsers,o=a===void 0?function(){}:a,l=m.updateUserStatus,c=l===void 0?function(){}:l,i=m.updateSelectedAccountIds,d=i===void 0?function(){}:i,u=function(){_.isEmpty(n)||de.Z.confirm({title:_l("\u6279\u51C6\u7528\u6237\u52A0\u5165"),description:t.createElement("div",{className:"Gray"},_l("\u60A8\u5171\u52FE\u9009\u4E86"),t.createElement("span",{className:"ThemeColor"}," ",n.length," "),_l("\u4E2A\u7528\u6237")),okText:_l("\u6279\u51C6"),onOk:function(){ee.Z.agreeUsersJoin({accountIds:n,projectId:r}).then(function(v){v.actionResult===1?(alert(_l("\u6279\u51C6\u6210\u529F")),o(r,1),d([])):v.actionResult===4?wt.Z.error({className:"approvalErr",key:"approvalErr",duration:5,message:_l("\u6279\u91CF\u6279\u51C6\u7528\u6237\u52A0\u5165\u5931\u8D25"),description:t.createElement("div",null,t.createElement("div",null,_l("\u60A8\u64CD\u4F5C\u7684\u6210\u5458\u6279\u91CF\u6279\u51C6\u7528\u6237\u52A0\u5165\u5931\u8D25")),t.createElement("div",null,_l("\u5931\u8D25\u539F\u56E0\uFF1A\u7528\u6237\u6570\u8D85\u9650")))}):alert(_l("\u6279\u51C6\u52A0\u5165\u5931\u8D25"),2)})}})},p=function(){_.isEmpty(n)||nt({projectId:r,accountIds:n,callback:function(){d([]),o(r,1)}})};return t.createElement(t.Fragment,null,t.createElement(Sa,null,xa.map(function(f){return t.createElement("div",{className:P()("item Hand",{active:f.type===e}),onClick:function(){d([]),c(f.type),o(r,1)}},f.tab)})),t.createElement("div",{className:"actList flexRow pLeft0 mTop20"},t.createElement("div",{className:P()("actBtn",{disabledBtn:_.isEmpty(n)}),onClick:u},_l("\u6279\u51C6\u52A0\u5165")),e===3&&t.createElement("div",{className:P()("actBtn",{disabledBtn:_.isEmpty(n)}),onClick:p},_l("\u62D2\u7EDD"))),s?t.createElement("div",null,t.createElement(he.Z,null)):t.createElement(Mt,{projectId:r}))}var _a=C(30539),ot=C(10929),wa=C(94408),st=C(26123),Na=C(16921),Ta=(0,ae.Z)([`
  .footer {
    text-align: right;
    .ming.Button--medium {
      padding: 0 24px;
    }
    .ming.Button--link {
      height: 34px;
      line-height: 34px;
      border: 1px solid #2196f3;
      color: #2196f3;
    }
  }
`],[`
  .footer {
    text-align: right;
    .ming.Button--medium {
      padding: 0 24px;
    }
    .ming.Button--link {
      height: 34px;
      line-height: 34px;
      border: 1px solid #2196f3;
      color: #2196f3;
    }
  }
`]),Aa=(0,re.ZP)(de.Z)(Ta),Da=function(r){var s=r.accountId,e=r.fullname,n=r.projectId,a=r.callback,o=a===void 0?function(){}:a;(0,Qe.Z)({title:_l("\u786E\u8BA4\u6846"),description:_l("\u786E\u5B9A\u6062\u590D[%0]\u6743\u9650\u5417\uFF1F",e),onOk:function(){ee.Z.recoveryUser({accountId:s,projectId:n}).then(function(c){if(c==1)alert(_l("\u6062\u590D\u6210\u529F")),o();else if(c==4){var i=(0,Ne.vo)(n,!0),d=i.licenseType,u="";d===0?u=t.createElement("span",null,_l("\u5F53\u524D\u7528\u6237\u6570\u5DF2\u8D85\u51FA\u4EBA\u6570\u9650\u5236\uFF0C\u8BF7\u53BB\u8D2D\u4E70"),t.createElement("a",{href:"javascript:void(0);",onClick:function(){(0,Na.F)({projectId:n})}},_l("\u4ED8\u8D39\u7248\u672C"))):u=t.createElement("span",null,_l("\u5F53\u524D\u7528\u6237\u6570\u5DF2\u8D85\u51FA\u4EBA\u6570\u9650\u5236\uFF0C\u8BF7\u53BB\u8D2D\u4E70"),t.createElement("a",{href:"/admin/expansionservice/"+n+"/user",target:"_blank"},_l("\u7528\u6237\u5305"))),alert(u,3)}else alert(_l("\u6062\u590D\u5931\u8D25"),2)})}})},ja=function(r){var s=r.projectId,e=r.accountId,n=r.jobIds,a=r.departmentIds,o=r.workSiteId,l=r.jobNumber,c=r.contactPhone,i=r.callback;ee.Z.agreeUserJoin({projectId:s,accountId:e,jobIds:n,departmentIds:a,workSiteId:o,jobNumber:l,contactPhone:c}).then(function(d){d===1?(alert(_l("\u6279\u51C6\u6210\u529F")),i()):d===4?alert(_l("\u5F53\u524D\u7528\u6237\u6570\u5DF2\u8D85\u51FA\u4EBA\u6570\u9650\u5236"),3):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)},function(){alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})},Wt=function(r){var s=r.projectId,e=r.accountId,n=r.jobIds,a=n===void 0?[]:n,o=r.departmentIds,l=o===void 0?[]:o,c=r.jobNumber,i=r.workSiteId,d=r.contactPhone,u=r.userName,p=r.fullname,f=r.email,h=r.mobilePhone,v=r.companyName,I=r.currentDepartmentId,g=r.action,b=r.callback,S=b===void 0?function(){}:b;if(l=g==="move"?[I]:l.concat(I),!md.global.Config.IsLocal||md.global.Config.IsPlatformLocal)ee.Z.updateUserCard({projectId:s,accountId:e,jobIds:a,departmentIds:l,jobNumber:c,contactPhone:d,workSiteId:i}).then(function(w){w===1?(alert(_l("\u8BBE\u7F6E\u6210\u529F"),1),S()):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)},function(){alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)});else{var N=(0,ne.default)({accountId:e,companyName:v,contactPhone:"",departmentIds:l,email:f,fullname:u||p,jobIds:a,jobNumber:c,mobilePhone:h,projectId:s,workSiteId:i},"contactPhone",d);ee.Z.updateUser(N).then(function(w){w===1?(alert(_l("\u8BBE\u7F6E\u6210\u529F"),1),S()):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)},function(){})}};function Ua(m){var r=m.visible,s=m.actionResult,e=m.closeDrawer,n=e===void 0?function(){}:e,a=m.projectId,o=m.currentUser,l=o===void 0?{}:o,c=m.refreshData,i=c===void 0?function(){}:c,d=m.hideMask,u=d===void 0?function(){}:d,p=l.accountId,f=l.avatar,h=l.fullname,v=l.mobile,I=l.email,g=l.jobIds,b=g===void 0?[]:g,S=l.departmentIds,N=S===void 0?[]:S,w=l.workSiteId,A=l.jobNumber,L=l.contactPhone,x=function(){u(),m.onCancel()},Z=function(D){var U=m.departmentId;switch(D){case 2:return U?t.createElement("div",{className:"footer"},t.createElement(se.ZP,{type:"link",onClick:function(){Wt((0,y.default)({},l,{projectId:a,currentDepartmentId:U,action:"move",callback:function(){x(),i(),n()}}))}},_l("\u79FB\u52A8\u5230\u5F53\u524D\u90E8\u95E8")),t.createElement(se.ZP,{type:"primary",className:"mLeft16",onClick:function(){Wt((0,y.default)({},l,{projectId:a,currentDepartmentId:U,action:"copy",callback:function(){x(),i(),n()}}))}},_l("\u590D\u5236\u5230\u5F53\u524D\u90E8\u95E8"))):t.createElement("div",{className:"footer"},t.createElement(se.ZP,{type:"link",onClick:function(){m.reviewUserInfo(),x()}},_l("\u67E5\u770B")),t.createElement(se.ZP,{type:"primary",className:"mLeft16",onClick:x},_l("\u5173\u95ED")));case 3:return t.createElement("div",{className:"footer"},t.createElement(se.ZP,{type:"link",onClick:function(){(0,Qe.Z)({className:"deleteNodeConfirm",title:_l("\u786E\u8BA4\u53D6\u6D88\u9080\u8BF7\u8BE5\u7528\u6237\u5417"),description:"",okText:_l("\u786E\u5B9A"),onOk:function(){m.fetchCancelImportUser([p],function(){x(),n()})}})}},_l("\u53D6\u6D88\u9080\u8BF7\u5E76\u79FB\u9664")),t.createElement(se.ZP,{type:"primary",className:"mLeft16",onClick:function(){m.fetchReInvite([p],function(){x(),n()})}},_l("\u91CD\u65B0\u9080\u8BF7")));case 4:case 7:return t.createElement("div",{className:"footer"},D!==7&&t.createElement(se.ZP,{type:"link",onClick:function(){return nt({accountIds:[p],projectId:a,callback:function(){x(),i(),n()}})}},_l("\u62D2\u7EDD")),t.createElement(se.ZP,{type:"primary",className:"mLeft16",onClick:function(){return ja({projectId:a,accountId:p,jobIds:b,departmentIds:N,workSiteId:w,jobNumber:A,contactPhone:L,callback:x})}},_l("\u540C\u610F")));case 5:return t.createElement("div",{className:"footer"},t.createElement(se.ZP,{type:"primary",onClick:function(){return Da({projectId:a,fullname:h,accountId:p,callback:function(){x(),n(),i()}})}},_l("\u6062\u590D\u6743\u9650")));case 6:return t.createElement("div",{className:"footer"},t.createElement(se.ZP,{type:"link",onClick:function(){m.reviewUserInfo(),x()}},_l("\u67E5\u770B")),t.createElement(se.ZP,{type:"primary",className:"mLeft16",onClick:x},_l("\u5173\u95ED")));default:}};if(s)return t.createElement(Aa,{visible:r,width:410,title:t.createElement("div",{className:"Font17 Gray bold"},j.WM[s]),onCancel:x,footer:null},t.createElement("div",{className:"flexRow mTop16"},t.createElement(Fe.Z,{className:"createHeadImg circle userAvarar pointer userMessage",user:{userHead:f,accountId:p},size:40,projectId:a}),t.createElement("div",{className:"mLeft12 mBottom50"},t.createElement("div",{className:"Font15 Gray bold"},h),t.createElement("div",{className:"Font13 Gray_75"},I),t.createElement("div",{className:"Font13 Gray_75"},v))),Z(s))}var Ra=function(r){return(0,Xe.Z)(Ua,(0,y.default)({},r))},La=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.itiFn=function(){e.mobile&&(e.iti&&e.iti.destroy(),e.iti=at()(e.mobile,{customPlaceholder:"",autoPlaceholder:"off",loadUtils:"",initialCountry:E().get(md,"global.Config.DefaultConfig.initialCountry")||"cn",preferredCountries:E().get(md,"global.Config.DefaultConfig.preferredCountries")||["cn"],utilsScript:rt(),separateDialCode:!0,showSelectedDialCode:!0}))},e.itiAutonomouslyFn=function(n){e.itiAutonomously&&e.itiAutonomously.destroy(),e.itiAutonomously=at()(e.autonomously,{customPlaceholder:"",autoPlaceholder:"off",loadUtils:"",initialCountry:E().get(md,"global.Config.DefaultConfig.initialCountry")||"cn",preferredCountries:E().get(md,"global.Config.DefaultConfig.preferredCountries")||["cn"],utilsScript:rt(),separateDialCode:!0,showSelectedDialCode:!0}),$(e.autonomously).css({"padding-left":"15px"}),e.autonomously.focus(),e.itiAutonomously.setNumber(n)},e.dialogSelectUserHandler=function(){var n=e.props.projectId,a=e;(0,et.Z)({fromAdmin:!0,SelectUserSettings:{filterProjectId:n,unique:!0,callback:function(l){a.setState({user:l[0]})}}})},e.clearSelectUser=function(){setTimeout(function(){e.itiFn()},200),e.clearError("mobile"),e.clearError("email"),e.setState({user:{},errors:{},inviteType:"mobile",mobile:"",email:""})},e.changeFormInfo=function(n,a){var o,l=a==="autonomously"&&n.length>3&&!isNaN(Number(n));l&&!e.itiAutonomously&&e.itiAutonomouslyFn(n),e.setState((o={},(0,ne.default)(o,a,E().includes(["mobile","email","autonomously"],a)?n:n.target.value),(0,ne.default)(o,"isClickSubmit",!1),o))},e.clearError=function(n){var a=e.state.errors,o=a===void 0?{}:a;delete o[n],e.setState({errors:o})},e.checkedUser=function(n,a){var o=e.props,l=o.projectId,c=o.typeCursor,i=o.departmentId,d=e.state,u=d.email,p=d.inviteType,f=d.autonomously,h=n.target.value;if(a==="mobile"&&j.uE.mobile(h,e.iti)||a==="email"&&j.uE.email(h)||a==="autonomously"&&j.uE.autonomously(h,e.itiAutonomously)){e.setState({showMask:!1});return}var v=p==="mobile"?e.iti.getNumber():p==="email"?u:a==="autonomously"&&e.itiAutonomously?e.itiAutonomously.getNumber():f;if(!v){e.setState({showMask:!1});return}ee.Z.getUserOrgState({projectId:l,userContact:v,departmentId:i}).then(function(I){if(I.userState===0||I.userState===1){e.setState({showMask:!1});return}var g={accountId:I.accountId,fullname:I.name,mobile:I.phone,email:I.email,avatar:I.avatar},b=E().get(I,"userCardModel.user")||{};g=(0,y.default)({},g,b,{departmentIds:(b.departmentInfos||[]).map(function(S){return S.departmentId})}),Ra({projectId:l,typeCursor:I.userState===3?2:I.userState===4?3:c,departmentId:i,actionResult:I.userState,closeDrawer:e.props.onClose,currentUser:g,refreshData:e.props.refreshData,reviewUserInfo:e.reviewUserInfo,hideMask:function(){return e.setState({showMask:!1})},fetchReInvite:e.props.fetchReInvite,fetchCancelImportUser:e.props.fetchCancelImportUser}),e.setState({currentUser:g})})},e.handleSubmit=function(n){var a=e,o=e.state,l=o.isUploading,c=o.inviteType,i=o.userName,d=o.email,u=o.user,p=u===void 0?{}:u,f=o.autonomouslyPasswrod,h=o.autonomously,v=e.iti&&e.iti.getNumber(),I=e.baseFormInfo.state,g=I.jobIds,b=g===void 0?[]:g,S=I.departmentInfos,N=S===void 0?[]:S,w=I.jobNumber,A=w===void 0?"":w,L=I.workSiteId,x=L===void 0?"":L,Z=I.contactPhone,B=Z===void 0?"":Z,D=e.props.projectId,U=(0,y.default)({},e.state.errors,{userName:!!j.uE.userName(i),mobile:c==="mobile"&&!!j.uE.mobile(v,e.iti),email:c==="email"&&!!j.uE.email(d),contactPhone:!!j.uE.contactPhone(B),autonomously:e.itiAutonomously&&!!j.uE.autonomously(h,e.itiAutonomously),autonomouslyPasswrod:c==="autonomously"&&!!j.uE.autonomouslyPasswrod(f)});if(e.setState({isClickSubmit:!0,errors:U}),l)return!1;var M=E().isEmpty(p)?c==="mobile"?!!j.uE.userName(i)||!!j.uE.mobile(v,e.iti)||!!j.uE.contactPhone(B):!!j.uE.userName(i)||!!j.uE.email(d)||!!j.uE.contactPhone(B):!!j.uE.contactPhone(B);if(md.global.Config.IsLocal&&(M=c==="autonomously"&&(!!j.uE.autonomously(e.itiAutonomously?e.itiAutonomously.getNumber():h,e.itiAutonomously)||!!j.uE.autonomouslyPasswrod(f))),M)return!1;var q={projectId:D,jobIds:b.join(";"),departmentIds:N.map(function(F){return F.departmentId}).join(";"),jobNumber:A,workSiteId:x,contactPhone:B,fullname:i,account:c==="mobile"?v:d,accountId:!md.global.Config.IsLocal||!E().isEmpty(p)?p.accountId:""};md.global.Config.IsLocal&&(q.verifyType=E().includes(["mobile","email"],c)?0:1,c==="autonomously"&&(q.account=E().isEmpty(p)?e.itiAutonomously?e.itiAutonomously.getNumber():h:"",q.password=(0,Ne.HI)(f))),e.setState({isUploading:!0,departmentInfos:[]}),st.Z.inviteUser(q).then(function(F){if(!F||F.actionResult==j.oj.FAILED)alert(_l("\u9080\u8BF7\u5931\u8D25"),1);else if(F.actionResult==j.oj.OVERINVITELIMITCOUNT)alert(_l("\u8D85\u8FC7\u9080\u8BF7\u6570\u91CF\u9650\u5236"),3);else{var G=F.failUsers,X=F.successUsers,oe=F.existsUsers,fe=F.forbidUsers,T=F.successCount;if(G&&G.length){var O=G[0].failReason;alert(O||_l("\u9080\u8BF7\u5931\u8D25"),2)}else X||T?(alert(_l("\u9080\u8BF7\u6210\u529F"),1),n||a.props.onClose()):oe?alert(_l("\u624B\u673A\u53F7/\u90AE\u7BB1\u5DF2\u5B58\u5728"),2):fe&&alert(_l("\u8D26\u53F7\u6765\u6E90\u7C7B\u578B\u53D7\u9650"),2)}setTimeout(function(){e.itiFn()},200),e.clearError("mobile"),e.clearError("email"),e.setState({inviteType:"mobile",user:{},userName:"",mobile:"",email:"",departmentInfos:[],jobIds:[],workSiteId:"",jobNumber:"",contactPhone:"",errors:{},isUploading:!1,autonomously:""}),e.mobile&&(e.mobile.value="")})},e.renderBase=function(){var n=e.state,a=n.userName,o=n.mobile,l=n.email,c=n.inviteType,i=n.errors,d=i===void 0?{}:i,u=n.user,p=u===void 0?{}:u,f=n.autonomously,h=n.autonomouslyPasswrod,v=E().get(md,"global.SysSettings")||{},I=v.passwordRegexTip;return t.createElement(t.Fragment,null,E().isEmpty(p)?t.createElement(le,{ref:function(b){return e.userNameInput=b},label:_l("\u59D3\u540D"),field:"userName",value:a,isRequired:!0,placeholder:_l(""),error:d.userName&&!!j.uE.userName(a),onChange:function(b){return e.changeFormInfo(b,"userName")},onFocus:function(){e.clearError("userName")}},t.createElement(Ce.Z,{tooltipClass:"addUserDressbook",text:t.createElement("span",null,_l("\u4ECE\u901A\u8BAF\u5F55\u6DFB\u52A0")),offset:[-20,0],popupPlacement:"bottom"},t.createElement("span",{className:"icon-topbar-addressList Font16 selectUser ThemeHoverColor3",onClick:e.dialogSelectUserHandler}))):t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u59D3\u540D")),t.createElement("div",null,t.createElement("span",{className:"userLabel"},t.createElement("img",{src:p.avatar}),t.createElement("span",{className:"userLabelName"},p.fullname),t.createElement("span",{className:"mLeft5 icon-closeelement-bg-circle Font14 Gray_c Hand",onClick:e.clearSelectUser})),t.createElement(Ce.Z,{text:_l("\u4ECE\u901A\u8BAF\u5F55\u6DFB\u52A0")},t.createElement("span",{className:"icon-topbar-addressList Font16 selectUser ThemeHoverColor3",onClick:e.dialogSelectUserHandler})))),E().isEmpty(p)&&t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u9080\u8BF7\u65B9\u5F0F")),t.createElement("div",null,t.createElement(Nt.ZP,{checkedValue:c,data:[{text:md.global.Config.IsLocal?_l("\u624B\u673A\u53F7\u9080\u8BF7"):_l("\u624B\u673A"),value:"mobile"},{text:md.global.Config.IsLocal?_l("\u90AE\u7BB1\u9080\u8BF7"):_l("\u90AE\u7BB1"),value:"email"},{text:_l("\u81EA\u4E3B\u521B\u5EFA"),value:"autonomously"}].filter(function(g){return!md.global.Config.IsLocal||md.global.Config.IsPlatformLocal?g.value!=="autonomously":md.global.SysSettings.enableSmsCustomContent?!0:g.value!=="mobile"}),onChange:function(b){setTimeout(function(){e.itiFn()},200),e.clearError("mobile"),e.clearError("email"),e.clearError("autonomously"),e.setState({inviteType:b,mobile:"",email:"",autonomously:"",autonomouslyPasswrod:""})}}))),c==="mobile"&&E().isEmpty(p)&&t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u624B\u673A"),t.createElement("span",{className:"TxtMiddle Red"},"*")),t.createElement(De.Z,{value:o,className:P()("formControl",{error:d.mobile&&!!j.uE.mobile(o,e.iti)}),manualRef:function(b){return e.mobile=b},placeholder:_l("\u6210\u5458\u4F1A\u6536\u5230\u9080\u8BF7\u94FE\u63A5\uFF0C\u9A8C\u8BC1\u540E\u53EF\u52A0\u5165\u7EC4\u7EC7"),onFocus:function(){e.clearError("mobile")},onInput:function(b){var S=b.target.value.replace(/ +/g,"");e.changeFormInfo(S,"mobile")},onBlur:function(b){e.setState({showMask:!0}),e.checkedUser(b,"mobile")}}),d.mobile&&!!j.uE.mobile(o,e.iti)&&t.createElement("div",{className:"Block Red LineHeight25 Hidden"},j.uE.mobile(o,e.iti))),c==="email"&&E().isEmpty(p)&&t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u90AE\u7BB1"),t.createElement("span",{className:"TxtMiddle Red"},"*")),t.createElement(De.Z,{className:P()("formControl",{error:d.email&&j.uE.email(l)}),value:l,onChange:function(b){return e.changeFormInfo(b,"email")},placeholder:_l("\u6210\u5458\u4F1A\u6536\u5230\u9080\u8BF7\u94FE\u63A5\uFF0C\u9A8C\u8BC1\u540E\u53EF\u52A0\u5165\u7EC4\u7EC7"),onFocus:function(){e.clearError("email")},onBlur:function(b){e.setState({showMask:!0}),e.checkedUser(b,"email")}}),d.email&&j.uE.email(l)&&t.createElement("div",{className:"Block Red LineHeight25 Hidden"},j.uE.email(l))),c==="autonomously"&&E().isEmpty(p)&&t.createElement("div",{className:"formGroup"},t.createElement("div",{className:"formLabel"},_l("\u767B\u5F55\u8D26\u53F7")),t.createElement(De.Z,{value:f,className:P()("formControl input",{error:d.autonomously&&j.uE.autonomously(f)}),manualRef:function(b){return e.autonomously=b},onChange:function(b){return e.changeFormInfo(b,"autonomously")},onInput:function(b){var S=b.target.value.replace(/ +/g,"");(S.length<=3||isNaN(Number(S)))&&e.itiAutonomously&&(e.itiAutonomously.destroy(),e.itiAutonomously=null,e.autonomously.focus(),$(e.autonomously).css({"padding-left":"12px"})),e.changeFormInfo(S,"autonomously")},placeholder:_l("\u8BF7\u8F93\u5165"),onFocus:function(){e.clearError("autonomously")},onBlur:function(b){e.setState({showMask:!0}),e.checkedUser(b,"autonomously")}}),d.autonomously&&j.uE.autonomously(f)&&t.createElement("div",{className:"Block Red LineHeight25 Hidden"},j.uE.autonomously(f))),c==="autonomously"&&E().isEmpty(p)&&t.createElement(le,{type:"password",field:"autonomouslyPasswrod",value:h,placeholder:I||_l("\u5BC6\u7801\uFF0C8-20\u4F4D\uFF0C\u5FC5\u987B\u542B\u5B57\u6BCD+\u6570\u5B57"),label:t.createElement("span",null,_l("\u521D\u59CB\u5BC6\u7801")),onFocus:function(){return e.clearError("autonomouslyPasswrod")},onChange:function(b){return e.changeFormInfo(b,"autonomouslyPasswrod")},error:d.autonomouslyPasswrod}))},e.reviewUserInfo=function(){e.setState({openChangeUserInfoDrawer:!e.state.openChangeUserInfoDrawer})},e.state={departmentIds:[],errors:{},baseInfo:{},inviteType:md.global.SysSettings.enableSmsCustomContent?"mobile":"email"},e.it=null,e.itiInvite=null,e.itiAutonomously=null,e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.itiFn()}},{key:"componentWillUnmount",value:function(){this.iti&&this.iti.destroy(),this.itiInvite&&this.itiInvite.destroy(),this.itiAutonomously&&this.itiAutonomously.destroy()}},{key:"render",value:function(){var e=this,n=this.props,a=n.onClose,o=a===void 0?function(){}:a,l=n.actType,c=n.typeCursor,i=n.editCurrentUser,d=n.projectId,u=n.departmentId,p=this.state,f=p.isUploading,h=p.errors,v=p.jobList,I=p.worksiteList,g=p.baseInfo,b=p.openChangeUserInfoDrawer,S=p.currentUser,N=S===void 0?{}:S,w=p.showMask;return t.createElement(t.Fragment,null,t.createElement(Rt(),{component:"div",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},t.createElement("div",{className:"addEditUserInfoWrap",key:"addEditUserInfo"},t.createElement("div",{className:"headerInfo"},t.createElement("div",{className:"Font17 Bold flex"},_l("\u6DFB\u52A0\u4EBA\u5458")),t.createElement("span",{className:"close Hand",onClick:function(){o()}},t.createElement(W.Z,{icon:"close",className:"Font24 Gray_9e LineHeight36"}))),(!md.global.Config.IsLocal||md.global.Config.IsLocal&&md.global.Config.IsPlatformLocal)&&t.createElement("div",{className:"Gray_9e mLeft24"},_l("\u59D3\u540D\u3001\u624B\u673A\u548C\u90AE\u7BB1\u4E3A\u4E2A\u4EBA\u8D26\u6237\u4FE1\u606F\uFF0C\u7EC4\u7EC7\u4E2D\u65E0\u6CD5\u4FEE\u6539")),f?t.createElement("div",{className:"flex flexRow justifyContentCenter alignItemsCenter"},t.createElement(he.Z,null)):t.createElement(t.Fragment,null,t.createElement("div",{className:"formInfoWrap flex"},this.renderBase(),t.createElement($t,{ref:function(L){return e.baseFormInfo=L},typeCursor:c,actType:l,isUploading:f,editCurrentUser:i,projectId:d,errors:h,jobList:v,worksiteList:I,baseInfo:(0,y.default)({},g,{departmentIds:u?[u]:[]}),hideRole:!0})),t.createElement(Lt,{typeCursor:c,actType:l,isUploading:f,editCurrentUser:i,projectId:d,departmentId:u,clickSave:this.props.clickSave,handleSubmit:this.handleSubmit,onClose:o,errors:h,jobList:v,worksiteList:I,baseInfo:(0,y.default)({},g,{departmentIds:u?[u]:[]}),fetchInActive:this.props.fetchInActive,fetchApproval:this.props.fetchApproval})),!w&&t.createElement("div",{className:"cover",onClick:function(){o()}}),w&&t.createElement("div",{className:"mask"}))),b&&t.createElement(Bt,{projectId:d,typeCursor:c,actType:"edit",key:"editUserInfo_"+N.accountId,accountId:N.accountId,editCurrentUser:N,departmentId:u,clickSave:function(){e.reviewUserInfo(),e.props.refreshData(),o()},onClose:function(){e.reviewUserInfo()},cancelInviteRemove:this.props.cancelInviteRemove,fetchInActive:this.props.fetchInActive,fetchApproval:this.props.fetchApproval}))}}]),r}(t.Component),Pa=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.getPermission=function(){var n=e.props.projectId;_a.Z.getProjectPermissionsByUser({projectId:n}).then(function(a){e.setState({isSuperAdmin:a.isSuperAdmin})})},e.loadData=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,a=e.props,o=a.departmentId,l=a.typeCursor,c=a.projectId,i=a.noDepartmentUsers;if(o||i)e.props.loadUsers(i?"":o,n);else switch(l){case 0:e.props.loadAllUsers(c,n);break;case 1:e.props.loadAllUsers(o,n);break;case 2:e.props.loadInactiveUsers(c,n);break;case 3:e.props.loadApprovalUsers(c,n);break}},e.addUser=function(){e.setState({openChangeUserInfoDrawer:!0})},e.inviteMore=function(){var n=e.props.projectId;(0,wa.ZP)({projectId:n,fromType:4})},e.exportInAndOut=function(){e.props.updateShowExport(!0)},e.batchEdit=function(){e.setState({batchEditVisible:!0})},e.batchResign=function(){var n=e.props,a=n.selectedAccountIds,o=n.projectId,l=n.updateSelectedAccountIds,c=l===void 0?function(){}:l;if(a.length>50){alert(_l("\u8BF7\u6CE8\u610F\uFF0C\u5355\u6B21\u6279\u91CF\u79BB\u804C\u4EBA\u6570\u4E0D\u5F97\u8D85\u8FC750\u4EBA"),2);return}de.Z.confirm({title:_l("\u6279\u91CF\u79BB\u804C"),buttonType:"danger",description:t.createElement("div",{className:"Gray"},_l("\u60A8\u5171\u52FE\u9009\u4E86"),t.createElement("span",{className:"ThemeColor"}," ",a.length," "),_l("\u4E2A\u6210\u5458\uFF0C\u662F\u5426\u786E\u8BA4\u5C06\u52FE\u9009\u6210\u5458\u79BB\u804C\uFF1F")),okText:_l("\u786E\u8BA4"),onOk:function(){ee.Z.removeUsers({projectId:o,accountIds:a}).then(function(d){if(d.result===1)e.loadData(),c([]);else if(d.result===3){var u=(d.failedNames||[]).map(function(p){return'"'+p+'"'}).join("\u3001");wt.Z.error({className:"removeUserErr",key:"removeUserErr",duration:5,message:_l("\u6279\u91CF\u79BB\u804C\u5931\u8D25"),description:t.createElement("div",null,t.createElement("div",null,_l("\u60A8\u64CD\u4F5C\u7684\u6210\u5458\u6279\u91CF\u79BB\u804C\u5931\u8D25")),t.createElement("div",null,_l("\u5931\u8D25\u539F\u56E0\uFF1A\u7528\u6237%0\u662F\u8D85\u7EA7\u7BA1\u7406\u5458\uFF0C\u4E0D\u53EF\u79BB\u804C",u)))})}else d.result===101&&alert(_l("\u8BF7\u6CE8\u610F\uFF0C\u60A8\u52FE\u9009\u4E86\u81EA\u5DF1\uFF0C\u65E0\u6CD5\u8FDB\u884C\u79BB\u804C\u64CD\u4F5C\u3002"),2)})}})},e.reInvite=function(){var n=e.props.selectedAccountIds;de.Z.confirm({title:_l(" \u91CD\u65B0\u9080\u8BF7"),description:t.createElement("div",{className:"Gray"},_l("\u60A8\u5171\u52FE\u9009\u4E86")," ",t.createElement("span",{className:"ThemeColor"}," ",n.length," ")," ",_l("\u4E2A\u7528\u6237")),okText:_l("\u9080\u8BF7"),onOk:function(){e.props.fetchReInvite(n)}})},e.cancelAndRemove=function(){var n=e.props,a=n.selectedAccountIds,o=n.projectId;de.Z.confirm({title:_l("\u53D6\u6D88\u9080\u8BF7\u5E76\u79FB\u9664"),buttonType:"danger",description:t.createElement("div",{className:"Gray"},_l("\u60A8\u5171\u52FE\u9009\u4E86")," ",t.createElement("span",{className:"ThemeColor"}," ",a.length," "),_l("\u4E2A\u6210\u5458\uFF0C\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u9080\u8BF7\u52FE\u9009\u7528\u6237?")),okText:_l("\u786E\u8BA4"),onOk:function(){e.props.fetchCancelImportUser(a,function(){e.props.loadInactiveUsers(o,1),e.props.fetchInActive(o),e.props.updateSelectedAccountIds([])})}})},e.changPage=function(n){e.loadData(n)},e.state={batchEditVisible:!1,isSuperAdmin:!1},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.loadData(),md.global.Config.IsLocal&&this.getPermission()}},{key:"componentWillUnmount",value:function(){localStorage.removeItem("columnsInfoData")}},{key:"renderUserCount",value:function(){var e=this.props,n=e.allCount,a=e.departmentId,o=e.typeCursor,l=e.approveNumber,c=o===3?l:n;return t.createElement("span",{className:P()("color_9e mLeft6 mRight8",{TxtMiddle:a})},_.isUndefined(c)?"":c)}},{key:"render",value:function(){var e=this,n=this.props,a=n.allCount,o=n.pageIndex,l=n.isSearch,c=n.typeNum,i=c===void 0?0:c,d=n.projectId,u=n.departmentId,p=n.departmentInfos,f=n.typeCursor,h=f===void 0?0:f,v=n.selectedAccountIds,I=v===void 0?[]:v,g=n.departmentName,b=n.pageSize,S=n.isLoading,N=n.noDepartmentUsers,w=n.removeUserFromSet,A=w===void 0?function(){}:w,L=this.state,x=L.batchEditVisible,Z=L.batchResetPasswordVisible,B=L.openChangeUserInfoDrawer;return t.createElement(t.Fragment,null,l?"":t.createElement("div",{className:"Font17 departmentTitle"},t.createElement("span",{className:"departmentNameValue",title:!!u&&g},!!u&&g),(h===0||h===1)&&!u&&_l("\u5168\u7EC4\u7EC7"),h===2&&_l("\u672A\u6FC0\u6D3B"),h===3&&_l("\u5F85\u5BA1\u6838"),this.renderUserCount(),(h===0||h===1)&&!u&&t.createElement(ve.Z,{className:"InlineBlock Gray_9e Font12 TxtMiddle LineHeight24 noDepartment",defaultChecked:h===1,checked:N,onClick:function(U,M){e.props.updateNoDepartmentUsers(!U),e.props.updateCursor(""),U?(e.props.updateTypeCursor(0),e.props.loadAllUsers(d,1)):(e.props.updateTypeCursor(1),e.props.loadUsers("",1))}},t.createElement("span",{className:"Font12"},_l("\u4EC5\u770B\u65E0\u90E8\u95E8\u4EBA\u5458")))),h!==3&&t.createElement("div",{className:"actList flexRow"},h===0||h===1||u?t.createElement(t.Fragment,null,t.createElement("div",{className:"actBtn primaryBtn",onClick:this.addUser},_l("\u6DFB\u52A0\u6210\u5458")),t.createElement("div",{className:"actBtn",onClick:this.inviteMore},_l("\u66F4\u591A\u9080\u8BF7")),t.createElement("div",{className:"actBtn",onClick:this.exportInAndOut},_l("\u5BFC\u5165 / \u5BFC\u51FA / \u4FEE\u6539")),t.createElement("div",{className:P()("actBtn",{disabledBtn:_.isEmpty(I)}),onClick:_.isEmpty(I)?function(){}:this.batchEdit},_l("\u6279\u91CF\u7F16\u8F91")),t.createElement("div",{className:P()("actBtn",{disabledBtn:_.isEmpty(I)}),onClick:_.isEmpty(I)?function(){}:this.batchResign},_l("\u6279\u91CF\u79BB\u804C"))):h===2?t.createElement(t.Fragment,null,t.createElement("div",{className:P()("actBtn",{disabledBtn:_.isEmpty(I)}),onClick:_.isEmpty(I)?function(){}:this.reInvite},_l("\u91CD\u65B0\u9080\u8BF7")),t.createElement("div",{className:P()("actBtn",{disabledBtn:_.isEmpty(I)}),onClick:_.isEmpty(I)?function(){}:this.cancelAndRemove},_l("\u53D6\u6D88\u9080\u8BF7\u5E76\u79FB\u9664"))):""),t.createElement("div",{className:"listInfo"},S&&h!==3?t.createElement("div",{className:"laodingContainer"},t.createElement(he.Z,null)):h===3?t.createElement(ka,(0,y.default)({projectId:d},this.props)):t.createElement(Mt,{projectId:d}),t.createElement(ot.Z,{total:a,pageIndex:o,pageSize:b||50,onChange:this.changPage})),x&&t.createElement(Wn,{visible:x,selectedAccountIds:I,projectId:d,loadData:this.loadData,removeUserFromSet:A,onCancel:function(){e.setState({batchEditVisible:!1})}}),Z&&this.renderBatchResetPassword(),B&&t.createElement(La,{projectId:d,typeCursor:h,actType:"add",departmentInfos:!u||i!==0?"":p,onClose:function(){e.setState({openChangeUserInfoDrawer:!1})},getData:this.props.fetchApproval,cancelInviteRemove:function(){return e.props.loadInactiveUsers(d,o)},departmentId:u,refreshData:this.loadData,fetchInActive:function(){return e.props.fetchInActive(d)},fetchApproval:function(){return e.props.fetchApproval(d)},fetchReInvite:this.props.fetchReInvite,fetchCancelImportUser:this.props.fetchCancelImportUser}))}}]),r}(t.Component);const Fa=(0,ie.$j)(function(m){var r=m.current,s=m.pagination.userList,e=s===void 0?[]:s,n=r.departmentId,a=r.root,o=r.projectId,l=r.typeNum,c=r.typeCursor,i=r.selectedAccountIds,d=r.isSelectAll,u=r.approveNumber,p=r.userStatus,f=r.noDepartmentUsers,h=n===a,v=m.entities.departments,I=v[n];return{typeNum:l,typeCursor:c,selectedAccountIds:i,isRoot:h,departmentId:n,projectId:o,isSearch:e&&e.isSearchResult,allCount:e&&e.allCount,pageIndex:e&&e.pageIndex,pageSize:e&&e.pageSize,isLoading:e&&e.isLoading,departmentName:I?I.departmentName:"",selectCount:i.length,isSelectAll:d,userList:e,departmentInfos:I,approveNumber:u,userStatus:p,noDepartmentUsers:f}},function(m){return(0,xe.DE)((0,y.default)({},_.pick((0,y.default)({},k,R),["updateCursor","updateTypeCursor","loadUsers","updateTypeCursor","loadAllUsers","loadInactiveUsers","loadApprovalUsers","fetchApproval","updateShowExport","emptyUserSet","removeUserFromSet","fetchInActive","fetchReInvite","fetchCancelImportUser","updateSelectedAccountIds","updateUserStatus","updateNoDepartmentUsers"])),m)})(Pa);var Za=C(9122),Vt=C(54895),$a=C(97238),Gt=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.state={},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.uploadFile()}},{key:"uploadFile",value:function(){var e=!1,n=this;(0,$a.Z)({runtimes:"html5",max_file_count:1,browse_button:n.con,drop_element:"importExcelBox",multi_selection:!1,max_file_size:"4mb",filters:[{title:"File",extensions:"xlsx,xls"}],init:{BeforeUpload:function(o,l){if(e)return o.stop(),o.removeFile(l),alert(_l("\u6570\u636E\u5BFC\u5165\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u4F7F\u7528\u8BE5\u529F\u80FD"),3,1e3),!1;if(File.GetExt(l.name)!="xlsx"&&File.GetExt(l.name)!="xls")return alert(_l("\u4E0A\u4F20\u5931\u8D25\uFF0C\u6587\u4EF6\u9519\u8BEF\uFF0C\u8BF7\u4E0B\u8F7D\u4E13\u7528\u6A21\u677F"),3,1e3),o.stop(),o.removeFile(l),!1;e=!0},FileUploaded:function(o,l,c){o.stop(),n.props.updateUploadInfo({fileName:l.name,fileUrl:md.global.FileStoreConfig.documentHost+c.response.key}),e=!1},Error:function(o,l){l.code===window.plupload.FILE_SIZE_ERROR?alert(_l("\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC74MB\uFF0C\u65E0\u6CD5\u652F\u6301\u4E0A\u4F20"),2):alert(_l("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002"),2)}}})}},{key:"render",value:function(){var e=this,n=this.props.fileName;return t.createElement("button",{id:"upload_field",ref:function(o){return e.con=o},type:"button",className:"ming Button uploadBtnStyle mTop30"},n?_l("\u91CD\u65B0\u4E0A\u4F20"):_l("\u4E0A\u4F20\u6587\u4EF6"))}}]),r}(t.Component),Jr=C(80176),Kt=C(2307),Oa=C(82468),Ba=C.n(Oa),zt=C(70714),Ha=(0,ae.Z)([`
  padding: 0 24px;
  .detailDes {
    justify-content: center;
    align-items: center;
    margin: 56px auto 35px;
    .alertIcon {
      width: 44px;
      height: 44px;
      margin-right: 20px;
    }
    .detailDesCount {
      font-size: 24px;
      color: #292929;
      font-weight: 600;
    }
    .desInfo {
      color: #898989;
      font-size: 14px;
    }
  }
  .listTitle {
    justify-content: space-between;
    font-size: 17px;
    color: #333;
    line-height: 36px;
    margin-bottom: 30px;
    .downloadBtn {
      width: 114px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      background: #2196f3;
      border: 1px solid #2196f3;
      opacity: 1;
      border-radius: 28px;
      font-size: 13px;
      color: #fff;
      cursor: pointer;
    }
  }
  .ant-table-wrapper {
    width: 100%;
    .ant-table-thead {
      tr {
        th {
          background-color: #fff;
          padding: 10px 0 12px;
          color: #757575;
          font-weight: 400;
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
        }
      }
    }
    .ant-table-tbody {
      .ant-table-row {
        .ant-table-cell {
          padding: 8px 12px 8px 0;
          border: none;
          color: #333;
          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
          &.ant-table-selection-column {
            padding: 0;
          }
        }
        &.ant-table-row-selected {
          .ant-table-cell {
            background: #fff;
          }
        }
        &.ant-table-row-selected:hover {
          .ant-table-cell {
            background: #f5f5f5;
          }
        }
      }
      .ant-table-placeholder {
        display: none;
      }
    }
  }
`],[`
  padding: 0 24px;
  .detailDes {
    justify-content: center;
    align-items: center;
    margin: 56px auto 35px;
    .alertIcon {
      width: 44px;
      height: 44px;
      margin-right: 20px;
    }
    .detailDesCount {
      font-size: 24px;
      color: #292929;
      font-weight: 600;
    }
    .desInfo {
      color: #898989;
      font-size: 14px;
    }
  }
  .listTitle {
    justify-content: space-between;
    font-size: 17px;
    color: #333;
    line-height: 36px;
    margin-bottom: 30px;
    .downloadBtn {
      width: 114px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      background: #2196f3;
      border: 1px solid #2196f3;
      opacity: 1;
      border-radius: 28px;
      font-size: 13px;
      color: #fff;
      cursor: pointer;
    }
  }
  .ant-table-wrapper {
    width: 100%;
    .ant-table-thead {
      tr {
        th {
          background-color: #fff;
          padding: 10px 0 12px;
          color: #757575;
          font-weight: 400;
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
        }
      }
    }
    .ant-table-tbody {
      .ant-table-row {
        .ant-table-cell {
          padding: 8px 12px 8px 0;
          border: none;
          color: #333;
          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
          &.ant-table-selection-column {
            padding: 0;
          }
        }
        &.ant-table-row-selected {
          .ant-table-cell {
            background: #fff;
          }
        }
        &.ant-table-row-selected:hover {
          .ant-table-cell {
            background: #f5f5f5;
          }
        }
      }
      .ant-table-placeholder {
        display: none;
      }
    }
  }
`]),Ma=(0,ae.Z)([`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .errorIcon {
    color: #f51744;
    font-size: 56px;
  }
  .errorTxt {
    font-size: 24px;
    color: #292929;
    font-weight: 600;
    margin: 36px 0 16px;
  }
  .errorDes {
    font-size: 14;
    color: #898989;
    margin-bottom: 78px;
  }
  .uploadBtnStyle {
    width: 108px;
    height: 36px;
    border: 1px solid rgba(33, 150, 243, 1);
    border-radius: 32px;
    background-color: #ffffff;
    color: rgba(33, 150, 243, 1);
    &:hover {
      color: #49adfc !important;
      border-color: #49adfc !important;
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .errorIcon {
    color: #f51744;
    font-size: 56px;
  }
  .errorTxt {
    font-size: 24px;
    color: #292929;
    font-weight: 600;
    margin: 36px 0 16px;
  }
  .errorDes {
    font-size: 14;
    color: #898989;
    margin-bottom: 78px;
  }
  .uploadBtnStyle {
    width: 108px;
    height: 36px;
    border: 1px solid rgba(33, 150, 243, 1);
    border-radius: 32px;
    background-color: #ffffff;
    color: rgba(33, 150, 243, 1);
    &:hover {
      color: #49adfc !important;
      border-color: #49adfc !important;
    }
  }
`]),Wa=re.ZP.div(Ha),Va=re.ZP.div(Ma),Ga=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.exportExcel=function(){var n=e.props,a=n.currentTab,o=n.projectId,l=n.resultDetail,c=l===void 0?{}:l,i=c.dowloadId,d=a==="import"?md.global.Config.AjaxApiUrl+"Download/ExportImportUserFailList":md.global.Config.AjaxApiUrl+"Download/ExportImportEditUserFailList",u={projectId:o,dowloadId:i};fetch(d,{method:"POST",headers:{"content-type":"application/json",Authorization:"md_pss_id "+(0,zt.qz)()},body:Ie()(u)}).then(function(p){return p.blob()}).then(function(p){var f=a==="import"?_l("\u5BFC\u5165\u65B0\u6210\u5458\u5931\u8D25\u5217\u8868"):_l("\u5BFC\u5165\u4FEE\u6539\u7528\u6237\u4FE1\u606F\u5931\u8D25\u5217\u8868"),h=Te()().format("YYYYMMDDhhmmss"),v=f+"-"+h+".xlsx",I=document.createElement("a");I.href=window.URL.createObjectURL(p),I.download=v,I.click(),window.URL.revokeObjectURL(I.href)})},e.state={dataSource:s.resultDetail.failUsers||[]},e.columns=function(){var n=e.props.currentTab,a=[{title:n==="import"?_l("\u624B\u673A/\u90AE\u7BB1"):_l("\u624B\u673A"),dataIndex:"account",ellipsis:!0,width:160,show:!0,render:function(l,c){return c.account||c.mobile||""}},{title:_l("\u90AE\u7BB1"),dataIndex:"email",ellipsis:!0,width:160,show:n==="export"},{title:_l("\u59D3\u540D"),dataIndex:"fullName",ellipsis:!0,width:200,show:!0,render:function(l,c){return c.fullname||c.fullName||""}},{title:_l("\u804C\u4F4D"),dataIndex:"jobStr",ellipsis:!0,width:160,show:!0,render:function(l,c){return c.job||c.jobStr||""}},{title:_l("\u90E8\u95E8"),dataIndex:"departmentStr",ellipsis:!0,width:160,show:!0,render:function(l,c){return c.department||c.departmentStr||""}},{title:_l("\u5931\u8D25\u539F\u56E0"),dataIndex:"failReason",ellipsis:!0,width:180,show:!0}];return a.filter(function(o){return o.show})},e}return(0,J.default)(r,[{key:"render",value:function(){var e=this,n=this.props,a=n.resultDetail,o=a===void 0?{}:a,l=n.currentTab,c=n.importError,i=this.state.dataSource,d=i===void 0?[]:i,u=o.successCount;return t.createElement(t.Fragment,null,!c&&t.createElement(Wa,null,t.createElement("div",{className:"detailDes flexRow"},t.createElement("img",{src:Ba(),className:"alertIcon"}),t.createElement("div",null,t.createElement("div",{className:"detailDesCount"},l==="import"?_l("\u6210\u529F\u5BFC\u5165 %0 \u4EBA\uFF0C\u5931\u8D25 %1 \u4EBA",u,d.length):_l("\u6210\u529F\u66F4\u65B0%0\u4EBA\uFF0C\u672A\u66F4\u65B0 %1 \u4EBA",u,d.length)),t.createElement("div",{className:"desInfo"},_l("\u6210\u529F\u5BFC\u5165\u7684\u6210\u5458\u53EF\u4EE5\u6536\u5230\u9080\u8BF7\u94FE\u63A5")))),t.createElement("div",{className:"listTitle flexRow"},t.createElement("div",null,l==="import"?_l("\u5BFC\u5165\u65B0\u6210\u5458\u5931\u8D25\u5217\u8868"):_l("\u66F4\u65B0\u6210\u5458\u4FE1\u606F\u5931\u8D25\u5217\u8868")),o.dowloadId&&t.createElement("div",{onClick:this.exportExcel,className:"downloadBtn"},_l("\u4E0B\u8F7D\u5931\u8D25\u5217\u8868"))),t.createElement(Kt.Z,{rowKey:function(f){return f.accountId},columns:this.columns(),dataSource:d,pagination:!1,scroll:{x:300,y:"calc(100vh - 300px)"}})),c&&t.createElement(Va,null,t.createElement(W.Z,{icon:"task-folder-message",className:"errorIcon"}),t.createElement("div",{className:"errorTxt"},_l("\u5BFC\u5165\u9519\u8BEF")),t.createElement("div",{className:"errorDes"},_l("\u8BF7"),t.createElement("a",{className:"Font16 ThemeColor3 Hover_49",href:"/staticfiles/template/importuser.xlsx",target:"_blank"},_l("\u4E0B\u8F7D\u6A21\u677F")),_l("\uFF0C\u6309\u683C\u5F0F\u4FEE\u6539\u540E\u91CD\u65B0\u5BFC\u5165")),t.createElement("button",{className:"ming Button uploadBtnStyle mTop30",onClick:function(){return e.props.changeShowList(!1)}},_l("\u91CD\u65B0\u4E0A\u4F20"))))}}]),r}(t.Component),Ka=(0,ae.Z)([`
  background: #219dff;
  border-radius: 32px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  margin: 44px auto 24px;
  text-align: center;
  width: 193px;
  cursor: `,`;
`],[`
  background: #219dff;
  border-radius: 32px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  margin: 44px auto 24px;
  text-align: center;
  width: 193px;
  cursor: `,`;
`]),za=re.ZP.div(Ka,function(m){return m.notAllowed?"not-allowed":"pointer"}),Ja=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.changeTab=function(n){e.setState({currentTab:n,fileName:"",fileUrl:""})},e.verifyPasswordDialog=function(){var n=e.props.projectId,a=e.state.orgnazation,o=a===void 0?[]:a;Za.Z.confirm({allowNoVerify:!1,isRequired:!1,closeImageValidation:!1,onOk:function(){e.exportUsers(n,o.map(function(c){return c.departmentId})),e.setState({password:void 0})}})},e.exportFile=function(){var n=e.props.projectId,a=e;(0,Je.Z)({projectId:n,unique:!1,showCreateBtn:!1,isShowAllOrg:!0,fromAdmin:!0,allProject:!0,selectFn:function(l){var c=l.map(function(i){return i.departmentId.indexOf("orgs")>-1?(0,y.default)({},i,{departmentId:""}):i});a.setState({orgnazation:c},a.verifyPasswordDialog)}})},e.exportUsers=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],o=(0,Ne.vo)(n,!0).companyName;fetch(md.global.Config.AjaxApiUrl+"download/exportProjectUserList",{method:"POST",headers:{"content-type":"application/json",Authorization:"md_pss_id "+(0,zt.qz)()},body:Ie()({userStatus:"1",projectId:n,departmentIds:a.join(",")})}).then(function(l){return l.blob()}).then(function(l){var c=Te()().format("YYYYMMDDHHmmss"),i=o+"_"+c+".xlsx",d=document.createElement("a");d.href=window.URL.createObjectURL(l),d.download=i,d.click(),window.URL.revokeObjectURL(d.href)})},e.changeShowList=function(n){e.setState({isShowFailList:n})},e.renderFailDetail=function(){var n=e.state,a=n.currentTab,o=n.resultDetail,l=o===void 0?{}:o,c=n.importError;return t.createElement(Ga,{currentTab:a,resultDetail:l,projectId:e.props.projectId,importError:c,changeShowList:e.changeShowList})},e.updateUploadInfo=function(n){var a=n.fileName,o=n.fileUrl;e.setState({fileName:a,fileUrl:o})},e.importFile=function(){e.setState({importFileLoading:!0});var n=e.state.currentTab,a=e,o=function(c){var i={projectId:ce.Z.projectId,fileName:e.state.fileUrl,ticket:c.ticket,randstr:c.randstr,captchaType:md.global.getCaptchaType()},d=n==="import"?st.Z.importUserList(i):st.Z.importEditUserList(i);d.then(function(u){var p=u.dowloadId,f=u.actionResult,h=u.failUsers;e.setState({importFileLoading:!1,resultDetail:u}),f===1?(E().isEmpty(h)&&alert(_l("\u5BFC\u5165\u6210\u529F")),a.setState({importError:!1,isShowFailList:p||f===0,fileName:"",fileUrl:""})):f===0?alert(_l("\u5BFC\u5165\u5931\u8D25"),2):f===2?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):f===3?alert(_l("\u8D85\u51FA\u5BFC\u5165\u6570\u91CF\u9650\u5236"),3):f===4?alert(_l("\u8D85\u51FA\u9080\u8BF7\u6570\u91CF\u9650\u5236"),3):a.setState({importError:!0,isShowFailList:!1})}).catch(function(u){a.setState({resultDetail:u,importError:!0,isShowFailList:!1,importFileLoading:!1})})};md.global.getCaptchaType()===1?new Vt.Z(o):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),o).show()},e.renderImport=function(){var n=e.state.fileName;return t.createElement("div",{className:"uploadStep"},t.createElement("div",{className:"serialTitle"},_l("1.\u4E0B\u8F7D\u5BFC\u5165\u6A21\u7248")),t.createElement("div",{className:"importUploadModule"},t.createElement("div",{className:"importUploadText"},t.createElement("span",{className:"Font20 mRight10 mBottom2 icon-task_custom_excel_01 color_gr TxtMiddle"}),t.createElement("span",{className:"Font17"},_l("\u5BFC\u5165\u6A21\u677F"))),t.createElement("a",{className:"Font16 downloadBtn",href:!md.global.Config.IsLocal||md.global.Config.IsPlatformLocal?"/staticfiles/template/memberImport.xlsx":"/staticfiles/template/user.xlsx",target:"_blank"},_l("\u4E0B\u8F7D"))),t.createElement("div",{className:"serialTitle mTop30"},_l("2.\u4E0A\u4F20\u5B8C\u5584\u540E\u7684\u8868\u683C")),e.renderUpload(),!n&&t.createElement("div",{className:"Gray_75"},_l("\xB7\u6700\u591A\u4E00\u6B21\u53EF\u4EE5\u5BFC\u5165 500 \u4E2A\u7528\u6237\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u5931\u6548")))},e.renderExport=function(){return t.createElement("div",{className:"exportInfo"},t.createElement("div",{className:"templateInfo"},t.createElement("div",null,t.createElement("span",{className:"Font20 mRight10 mBottom2 icon-task_custom_excel_01 color_gr TxtMiddle"}),_l("\u6210\u5458\u5217\u8868")),t.createElement("div",{className:"exportBtn ",onClick:e.exportFile},_l("\u5BFC\u51FA"))),t.createElement("div",{className:"Gray_75 mBottom16"},_l("\u5982\u679C\u9700\u8981\u4FEE\u6539\u6210\u5458\u4FE1\u606F\uFF0C\u53EF\u5728\u672C\u5730\u7F16\u8F91\u540E\uFF0C\u4E0A\u4F20\u8868\u683C\u5B8C\u6210\u4FEE\u6539")),e.renderUpload())},e.renderUpload=function(){var n=e.state.fileName;return t.createElement("div",{className:"importExcelBox"},t.createElement("span",{className:P()("icon-task_custom_excel_01",n?"color_gr":"color_d")}),t.createElement("span",{className:"Font13 mTop10 color_dd"},n||_l("\u652F\u6301 excel")),t.createElement(Gt,{fileName:n,updateUploadInfo:e.updateUploadInfo}))},e.state={currentTab:"import",fileName:"",fileUrl:"",resultDetail:{},isShowFailList:!1,importFileLoading:!1},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,n=this.state,a=n.currentTab,o=n.isShowFailList,l=n.fileName,c=n.importFileLoading;return t.createElement("div",{className:"exportContainer"},t.createElement("div",{className:"exportHeader"},t.createElement(W.Z,{icon:"arrow_back",onClick:function(){e.props.updateShowExport(!1)}}),_l("\u5BFC\u5165 / \u5BFC\u51FA / \u4FEE\u6539")),!o&&t.createElement("div",{className:"exportContent"},t.createElement("div",{className:"tabs"},t.createElement("div",{className:P()("tabItem",{activeTab:a==="import"}),onClick:function(){return e.changeTab("import")}},_l("\u5BFC\u5165\u65B0\u6210\u5458")),t.createElement("div",{className:P()("tabItem",{activeTab:a==="export"}),onClick:function(){return e.changeTab("export")}},_l("\u5BFC\u51FA / \u4FEE\u6539"))),a==="import"&&this.renderImport(),a==="export"&&this.renderExport(),l?t.createElement(za,{notAllowed:c,onClick:c?function(){}:this.importFile},c?_l("\u6B63\u5728\u5BFC\u5165..."):_l("\u5BFC\u5165")):""),o&&this.renderFailDetail())}}]),r}(t.Component);const Ya=(0,ie.$j)(function(m){var r=m.current,s=r.projectId;return{projectId:s}},function(m){return(0,xe.DE)((0,y.default)({},E().pick(k,["updateShowExport"])),m)})(Ja);var Qa=(0,ae.Z)([`
  background: #fff;
  border-radius: 4px;
  height: 100%;
  min-width: 750px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .exportHeader {
    height: 56px;
    line-height: 56px;
    font-weight: 600;
    font-size: 17px;
    padding-left: 24px;
    border-bottom: 1px solid #eaeaea;
    .icon {
      margin-right: 18px;
      cursor: pointer;
    }
  }
  .importContent {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 24px;
    .uploadStep {
      width: 640px;
      margin: 0 auto;
      .serialTitle {
        font-size: 14px;
        font-family: FZLanTingHeiS;
        font-weight: 600;
        color: #333333;
        margin-bottom: 17px;
      }
      .color_b {
        color: #333333;
      }
      .color_gr {
        color: #1bb954;
      }
      .color_g {
        color: #9e9e9e;
      }
      .color_d {
        color: #d9d9d9;
      }
      .color_dd {
        color: #757575;
      }
      .color_r {
        color: #f51744;
      }
      .color_blue {
        color: #2196f3;
      }
      .importUploadModule {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        padding: 0 25px;
        border: 1px solid rgba(227, 227, 227, 1);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        box-sizing: border-box;
        .importUploadText {
          display: flex;
          align-items: center;
          line-height: 37px;
        }
        .downloadBtn {
          display: inline-block;
          width: 81px;
          height: 32px;
          font-size: 16px;
          font-weight: 600;
          line-height: 32px;
          text-align: center;
          border: none;
          border-radius: 32px;
          background-color: #fff;
        }
      }
      .importExcelBox {
        height: 271px;
        border: 3px dashed #eaeaea;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon-task_custom_excel_01 {
          font-size: 50px;
        }
        .uploadBtnStyle {
          margin-top: 33px !important;
          width: 108px;
          height: 32px;
          border-radius: 32px;
          border: 1px solid #2196f3;
          background-color: #ffffff;
          color: #2196f3;
        }
      }
      .importBtn {
        width: 193px;
        height: 34px;
        margin: 44px auto 0;
        text-align: center;
        line-height: 34px;
        background: #219dff;
        border-radius: 32px;
        font-size: 14px;
        font-family: FZLanTingHeiS;
        font-weight: 600;
        color: #ffffff;
        &.notAllowed {
          cursor: not-allowed;
        }
      }
      .colErrorInfo {
        display: flex;
      }
    }
  }
`],[`
  background: #fff;
  border-radius: 4px;
  height: 100%;
  min-width: 750px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .exportHeader {
    height: 56px;
    line-height: 56px;
    font-weight: 600;
    font-size: 17px;
    padding-left: 24px;
    border-bottom: 1px solid #eaeaea;
    .icon {
      margin-right: 18px;
      cursor: pointer;
    }
  }
  .importContent {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 24px;
    .uploadStep {
      width: 640px;
      margin: 0 auto;
      .serialTitle {
        font-size: 14px;
        font-family: FZLanTingHeiS;
        font-weight: 600;
        color: #333333;
        margin-bottom: 17px;
      }
      .color_b {
        color: #333333;
      }
      .color_gr {
        color: #1bb954;
      }
      .color_g {
        color: #9e9e9e;
      }
      .color_d {
        color: #d9d9d9;
      }
      .color_dd {
        color: #757575;
      }
      .color_r {
        color: #f51744;
      }
      .color_blue {
        color: #2196f3;
      }
      .importUploadModule {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        padding: 0 25px;
        border: 1px solid rgba(227, 227, 227, 1);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        box-sizing: border-box;
        .importUploadText {
          display: flex;
          align-items: center;
          line-height: 37px;
        }
        .downloadBtn {
          display: inline-block;
          width: 81px;
          height: 32px;
          font-size: 16px;
          font-weight: 600;
          line-height: 32px;
          text-align: center;
          border: none;
          border-radius: 32px;
          background-color: #fff;
        }
      }
      .importExcelBox {
        height: 271px;
        border: 3px dashed #eaeaea;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon-task_custom_excel_01 {
          font-size: 50px;
        }
        .uploadBtnStyle {
          margin-top: 33px !important;
          width: 108px;
          height: 32px;
          border-radius: 32px;
          border: 1px solid #2196f3;
          background-color: #ffffff;
          color: #2196f3;
        }
      }
      .importBtn {
        width: 193px;
        height: 34px;
        margin: 44px auto 0;
        text-align: center;
        line-height: 34px;
        background: #219dff;
        border-radius: 32px;
        font-size: 14px;
        font-family: FZLanTingHeiS;
        font-weight: 600;
        color: #ffffff;
        &.notAllowed {
          cursor: not-allowed;
        }
      }
      .colErrorInfo {
        display: flex;
      }
    }
  }
`]),Xa=(0,ae.Z)([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  height: calc(100% - 56px);
  align-items: center;
  .colErrorInfo {
    font-size: 24px;
    font-family: FZLanTingHeiS;
    font-weight: 600;
    color: #292929;
    .errorIcon {
      font-size: 44px;
      color: #f51744;
      vertical-align: middle;
      margin-right: 19px;
    }
    > span {
      vertical-align: middle;
    }
  }
  .backact {
    width: 193px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: #219dff;
    border-radius: 32px;
    margin-top: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`],[`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  height: calc(100% - 56px);
  align-items: center;
  .colErrorInfo {
    font-size: 24px;
    font-family: FZLanTingHeiS;
    font-weight: 600;
    color: #292929;
    .errorIcon {
      font-size: 44px;
      color: #f51744;
      vertical-align: middle;
      margin-right: 19px;
    }
    > span {
      vertical-align: middle;
    }
  }
  .backact {
    width: 193px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: #219dff;
    border-radius: 32px;
    margin-top: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`]),qa=(0,ae.Z)([`
  height: calc(100% - 56px);
  padding: 58px 33px 0;
  font-size: 24px;
  font-family: FZLanTingHeiS;
  font-weight: 600;
  color: #292929;
  overflow-y: auto;
  .listErrorInfo {
    display: flex;
    justify-content: center;
    .errorIcon {
      font-size: 44px;
      line-height: 57px;
      color: #f51744;
      vertical-align: middle;
      margin-right: 19px;
    }
    .Gray_89 {
      color: #898989;
    }
    .primaryColor {
      color: #2196f3;
    }
  }
  .errorList {
    width: 100%;
    .ant-table-thead {
      tr {
        th {
          background-color: #fff;
          padding: 14px 10px;
          color: #757575;
          font-weight: 400;
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
        }
      }
    }
    .ant-table-tbody {
      .ant-table-row {
        .ant-table-cell {
          padding: 18px 10px;
          border: none;
          color: #333;
          border-bottom: 1px solid #eaeaea;
          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
          &.ant-table-selection-column {
            padding: 0;
          }
        }
        &.ant-table-row-selected {
          .ant-table-cell {
            background: #fff;
          }
        }
        &.ant-table-row-selected:hover {
          .ant-table-cell {
            background: #f5f5f5;
          }
        }
      }
      .ant-table-placeholder {
        display: none;
      }
    }
  }
`],[`
  height: calc(100% - 56px);
  padding: 58px 33px 0;
  font-size: 24px;
  font-family: FZLanTingHeiS;
  font-weight: 600;
  color: #292929;
  overflow-y: auto;
  .listErrorInfo {
    display: flex;
    justify-content: center;
    .errorIcon {
      font-size: 44px;
      line-height: 57px;
      color: #f51744;
      vertical-align: middle;
      margin-right: 19px;
    }
    .Gray_89 {
      color: #898989;
    }
    .primaryColor {
      color: #2196f3;
    }
  }
  .errorList {
    width: 100%;
    .ant-table-thead {
      tr {
        th {
          background-color: #fff;
          padding: 14px 10px;
          color: #757575;
          font-weight: 400;
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
        }
      }
    }
    .ant-table-tbody {
      .ant-table-row {
        .ant-table-cell {
          padding: 18px 10px;
          border: none;
          color: #333;
          border-bottom: 1px solid #eaeaea;
          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-checked::after {
                border: none;
              }
              .ant-checkbox-inner {
                top: -8px;
              }
            }
          }
          &.ant-table-selection-column {
            padding: 0;
          }
        }
        &.ant-table-row-selected {
          .ant-table-cell {
            background: #fff;
          }
        }
        &.ant-table-row-selected:hover {
          .ant-table-cell {
            background: #f5f5f5;
          }
        }
      }
      .ant-table-placeholder {
        display: none;
      }
    }
  }
`]),er=(0,ae.Z)([`
  height: calc(100% - 56px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-family: FZLanTingHeiS;
  font-weight: 600;
  color: #292929;
  .successIcon {
    font-size: 44px;
    vertical-align: middle;
    color: #00c345;
    margin-right: 19px;
  }
  .backact {
    width: 193px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: #219dff;
    border-radius: 32px;
    margin-top: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`],[`
  height: calc(100% - 56px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-family: FZLanTingHeiS;
  font-weight: 600;
  color: #292929;
  .successIcon {
    font-size: 44px;
    vertical-align: middle;
    color: #00c345;
    margin-right: 19px;
  }
  .backact {
    width: 193px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: #219dff;
    border-radius: 32px;
    margin-top: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`]),tr=re.ZP.div(Qa),Jt=re.ZP.div(Xa),nr=re.ZP.div(qa),ar=re.ZP.div(er),rr=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.renderImport=function(){var n=e.props.importExportType,a=e.state,o=a.fileName,l=a.importFileLoading;return t.createElement("div",{className:"uploadStep"},t.createElement("div",{className:"serialTitle mTop32"},_l("1.\u4E0B\u8F7D\u5BFC\u5165\u6A21\u7248")),t.createElement("div",{className:"importUploadModule"},t.createElement("div",{className:"importUploadText"},t.createElement("span",{className:"Font20 mRight10 mBottom2 icon-task_custom_excel_01 color_gr TxtMiddle"}),t.createElement("span",{className:"Font17"},n==="importDepartment"?_l("\u5BFC\u5165\u90E8\u95E8\u6A21\u677F"):_l("\u5BFC\u5165\u804C\u4F4D\u6A21\u677F"))),t.createElement("a",{className:"Font16 downloadBtn",href:n==="importDepartment"?"/staticfiles/template/departmentImport.xlsx":"/staticfiles/template/positionImport.xlsx",target:"_blank"},_l("\u7ACB\u5373\u4E0B\u8F7D"))),t.createElement("div",{className:"serialTitle mTop32 mBottom14"},_l("2.\u4E0A\u4F20\u5B8C\u5584\u540E\u7684\u8868\u683C")),e.renderUpload(),o&&t.createElement("div",{className:P()("importBtn",{notAllowed:l,Hand:!l}),onClick:l?function(){}:e.importAction},l?_l("\u6B63\u5728\u5BFC\u5165..."):_l("\u5BFC\u5165")))},e.updateUploadInfo=function(n){var a=n.fileName,o=n.fileUrl;e.setState({fileName:a,fileUrl:o})},e.renderUpload=function(){var n=e.state.fileName;return t.createElement("div",{className:"importExcelBox",id:"importExcelBox"},t.createElement("span",{className:P()("icon-task_custom_excel_01",n?"color_gr":"color_d")}),t.createElement("span",{className:"Font13 mTop10 color_dd"},n||_l("\u652F\u6301 excel")),t.createElement(Gt,{fileName:n,updateUploadInfo:e.updateUploadInfo}))},e.importAction=function(){var n=e.props.importExportType;e.setState({importFileLoading:!0});var a=e,o=function(c){var i={projectId:ce.Z.projectId,fileName:e.state.fileUrl,ticket:c.ticket,randstr:c.randstr,captchaType:md.global.getCaptchaType()};Ae.Z.importDepartmentList(i).then(function(d){var u=d.actionResult,p=d.failes;if(u===1||u===6){if(!E().isEmpty(p)){a.setState({resultDetail:d,importFileLoading:!1,actionResultStatus:2});return}n==="importDepartment"&&e.props.loadDepartments("",1),a.setState({importFileLoading:!1,fileName:"",fileUrl:"",actionResultStatus:1,resultDetail:d})}else e.setState({actionResultStatus:u,importFileLoading:!1,fileName:"",fileUrl:""})}).catch(function(d){a.setState({importError:!0,importFileLoading:!1})})};md.global.getCaptchaType()===1?new Vt.Z(o):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),o).show()},e.backAct=function(){e.setState({actionResultStatus:""})},e.renderImportResult=function(){var n=e.state,a=n.actionResultStatus,o=n.columns,l=n.resultDetail,c=l===void 0?{}:l,i=c.failes,d=i===void 0?[]:i,u=c.successCount,p=e.props.importExportType;if(a===1)return t.createElement(ar,null,t.createElement("div",{className:"successInfo"},t.createElement(W.Z,{icon:"check_circle",className:"successIcon"}),t.createElement("span",null,_l("\u6210\u529F\u5BFC\u5165%0\u6761\u8BB0\u5F55",u))),t.createElement("div",{className:"backact Hand",onClick:function(){return e.props.updateShowExport(!1)}},_l("\u8FD4\u56DE")));if(a===3)return t.createElement(Jt,null,t.createElement("div",{className:"colErrorInfo"},t.createElement(W.Z,{icon:"delete_out",className:"errorIcon"}),t.createElement("span",null,_l("\u8D85\u51FA\u5BFC\u5165\u6570\u91CF\u9650\u5236,\u5355\u6B21\u5BFC\u5165\u4E0A\u96501000\u884C\u8BB0\u5F55\uFF01"))),t.createElement("div",{className:"backact Hand",onClick:e.backAct},_l("\u8FD4\u56DE")));if(a===5)return t.createElement(Jt,null,t.createElement("div",{className:"colErrorInfo"},t.createElement(W.Z,{icon:"delete_out",className:"errorIcon"}),t.createElement("span",null,_l("\u5BFC\u5165\u6587\u4EF6\u5217\u540D\u6709\u8BEF\uFF0C\u8BF7\u68C0\u67E5\uFF0C\u6216\u4ECE\u5BFC\u5165\u6A21\u7248\u4E2D\u91CD\u65B0\u4E0B\u8F7D\uFF01"))),t.createElement("div",{className:"backact Hand",onClick:e.backAct},_l("\u8FD4\u56DE")));var f=p.indexOf("import")>-1?_l("\u5BFC\u5165"):_l("\u5BFC\u51FA");return t.createElement(nr,null,t.createElement("div",{className:"listErrorInfo"},t.createElement(W.Z,{icon:"delete_out",className:"errorIcon"}),t.createElement("div",null,t.createElement("div",null,_l("%0\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\uFF01",f)),t.createElement("div",{className:"Gray_89 Font14"},_l("\u8BF7\u8C03\u6574\u540E\uFF0C"),t.createElement("a",{className:"Hand primaryColor",onClick:e.backAct},_l("\u91CD\u65B0\u4E0A\u4F20"))))),t.createElement("div",{className:"Font17 mBottom30"},_l("\u9519\u8BEF\u4FE1\u606F")),t.createElement(Kt.Z,{className:"errorList",columns:o,dataSource:d,pagination:!1}))},e.state={actionResultStatus:"",columns:[{dataIndex:"rowNum",title:_l("\u9519\u8BEF\u884C"),width:100},{dataIndex:"failReason",title:_l("\u9519\u8BEF\u539F\u56E0")}],dataSource:[]},e}return(0,J.default)(r,[{key:"componentWillReceiveProps",value:function(e){if(!E().isEqual(this.props.importExportResult,e.importExportResult)){var n=e.importExportResult.actionResult;n===1?this.setState({actionResultStatus:1}):this.setState({actionResultStatus:2})}}},{key:"render",value:function(){var e=this,n=this.props.importExportType,a=this.state.actionResultStatus;return t.createElement(tr,null,t.createElement("div",{className:"exportHeader"},t.createElement(W.Z,{icon:"arrow_back",onClick:function(){e.props.updateShowExport(!1),e.props.updateImportType("")}}),j.jS[n]),t.createElement("div",{className:"importContent"},!a&&this.renderImport()),a&&this.renderImportResult())}}]),r}(t.Component);const or=(0,ie.$j)(function(m){var r=m.current,s=m.entities,e=r.projectId,n=s.importExportType,a=s.importExportResult;return{projectId:e,importExportType:n,importExportResult:a}},{updateShowExport:k.updateShowExport,updateImportExportResult:k.updateImportExportResult,updateImportType:k.updateImportType,loadDepartments:k.loadDepartments})(rr);var sr=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.state={},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){location.href.indexOf("importusers")>-1&&this.props.updateShowExport(!0)}},{key:"componentWillReceiveProps",value:function(e){e.isShowExport!==this.props.isShowExport&&e.handleShowHeader(!e.isShowExport)}},{key:"render",value:function(){var e=this.props,n=e.isShowExport,a=e.importExportType;return t.createElement(t.Fragment,null,t.createElement("div",{className:"adminStructureBox"},!n&&t.createElement("div",{className:"adminStructureContent flexRow"},t.createElement("div",{className:"structureNavigator"},t.createElement(hn,null),t.createElement($n,null)),t.createElement("div",{className:"structureContent flex"},t.createElement(Fa,null))),n&&(a?t.createElement(or,null):t.createElement(Ya,null))))}}]),r}(t.Component),lr=function(r){var s=r.current,e=r.entities,n=s.projectId,a=e.isShowExport,o=e.importExportType;return{projectId:n,isShowExport:a,importExportType:o}},ir=(0,ie.$j)(lr,function(m){return(0,xe.DE)((0,y.default)({},E().pick((0,y.default)({},k,R),["updateShowExport","updateType"])),m)})(sr);const cr=ir;var dr=C(53894),be=C(34164),Yt=function(){var r=0;return location.href.indexOf("admin/approve")>-1&&(r=3),ce.Z.params&&ce.Z.params[3]==="uncursor"&&(r=2),{projectId:ce.Z.projectId,root:j.vz,departmentId:j.vz,selectedAccountIds:[],activeAccountId:null,approveNumber:0,isSearch:!1,autoShow:ce.Z.params&&ce.Z.params[3]==="create",autoImport:ce.Z.params&&ce.Z.params[3]==="importusers",typeNum:0,typeCursor:r,isSelectAll:!1,userStatus:3,noDepartmentUsers:!1}},ur=function(r,s){var e=r.selectedAccountIds,n=s.type,a=s.accountIds;switch(n){case R.ADD_TO_USERSET:return E().union(e,a);case R.REMOVE_FROM_USERSET:var o=a.slice();return o.unshift(e),E().pull.apply(null,o);case R.EMPTY_USERSET:default:return[]}};const pr=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yt(),r=arguments[1],s=r.departmentId,e=r.type,n=r.accountId,a=r.typeNum,o=r.typeCursor,l=r.isSelectAll,c=r.selectedAccountIds,i=r.userStatus,d=r.noDepartmentUsers,u=r.fullDepartmentInfo,p=u===void 0?{}:u;switch(e){case"PROJECT_ID_CHANGED":return Yt();case R.UPDATE_PROJECT_ID:return(0,y.default)({},m,{projectId:ce.Z.projectId});case R.UPDATE_TYPE:return(0,y.default)({},m,{typeNum:a,typeCursor:0});case R.UPDATE_TYPE_CURSOR:return(0,y.default)({},m,{typeCursor:o});case R.UPDATE_CURSOR:return(0,y.default)({},m,{departmentId:s,typeCursor:0,selectedAccountIds:[],isSelectAll:!1});case R.REMOVE_CURSOR:return(0,y.default)({},m,{departmentId:j.vz});case R.UPDATE_ACTIVE_OPLIST:return(0,y.default)({},m,{activeAccountId:n});case R.ADD_TO_USERSET:case R.REMOVE_FROM_USERSET:case R.EMPTY_USERSET:return(0,y.default)({},m,{selectedAccountIds:ur(m,r),isSelectAll:!1});case R.UPDATE_SELECT_ALL:return(0,y.default)({},m,{selectedAccountIds:[],isSelectAll:l});case R.APPROVAL_SUCCESS:return(0,y.default)({},m,{approveNumber:m.userStatus===3?r.response:m.approveNumber});case R.INACTIVE_SUCCESS:return(0,y.default)({},m,{inActiveNumber:r.response});case"UPDATE_AUTO_SHOW":return(0,y.default)({},m,{autoShow:!1});case"UPDATE_SELECTED_ACCOUNTIDS":return(0,y.default)({},m,{selectedAccountIds:c});case"UPDATE_USER_TATUS":return(0,y.default)({},m,{userStatus:i});case"UPDATE_NO_DEPARTMENT_USERS":return(0,y.default)({},m,{noDepartmentUsers:d});default:return m}};var Q=(0,y.default)({},k,{SEARCH_SUCCESS:me.B0}),Qt={departments:{},users:{},getDepartmentIds:[],newDepartments:[],expandedKeys:[],searchUsers:[],isShowExport:!1,importExportType:"",importExportResult:{}},mr=function(r,s){var e=r.departmentId;if(e===""){var n=s.listUser.list,a=s.totalMembers;return(0,y.default)({},r,{userCount:a,users:n})}else{var o=s.list,l=_.filter(o,function(c){return c.isDepartmentChargeUser});return _.assign({},r,{chargeUsers:l,users:o})}},Xt=function(r,s){var e=s.departmentId,n=s.response,a=s.type,o=r.departments,l=r.getDepartmentIds,c=o[e],i=n;if(typeof c<"u"||a===Q.APPROVAL_USER_SUCCESS||a===Q.INACTIVE_USER_SUCCESS||a===Q.ALL_USER_SUCCESS)switch(a){case Q.DEPARTMENT_REQUEST:i=[(0,y.default)({},c,{isLoading:!0})];break;case Q.DEPARTMENT_SUCCESS:var d=_.isArray(n)?n:[n];d.length?i=_.map(d,function(f){return(0,y.default)({},f,{parentDepartment:(0,y.default)({},c,{isExpired:!1,isLoading:!1})})}):i=[(0,y.default)({},c,{isExpired:!1,isLoading:!1})];break;case Q.DEPARTMENT_FAILURE:i=[(0,y.default)({},c,{isLoading:!1})];break;case Q.DEPARTMENT_TOGGLE:i=[(0,y.default)({},c,{collapsed:!c.collapsed})];break;case Q.USER_SUCCESS:i=[mr(c,n)];break;case Q.APPROVAL_USER_SUCCESS:i=[{userCount:_.filter(n.users.list||[],function(f){return f.status===3}).length,users:n.users.list||[]}];break;case Q.INACTIVE_USER_SUCCESS:case Q.ALL_USER_SUCCESS:i=[{userCount:n.allCount||0,users:n.list||[]}];break;default:break}var u=(0,be.Qc)(i,be.lg.DEPARTMENT_ARRAY),p=u.entities;switch(a){case Q.USER_SUCCESS:case Q.APPROVAL_USER_SUCCESS:case Q.ALL_USER_SUCCESS:case Q.INACTIVE_USER_SUCCESS:return(0,y.default)({},r,p,{users:_.isArray(i)&&!_.isEmpty(i)&&i[0].users||[],departments:(0,y.default)({},r.departments,p.departments)});default:return(0,y.default)({},r,p)}},Yr=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",e=r,n=function l(c,i,d){c.forEach(function(u,p,f){if(u.departmentId===i)return d(u,p,f);if(u.subDepartments)return l(u.subDepartments,i,d)})},a=void 0,o=void 0;return n(e,s,function(l,c,i){o=i.splice(c,1),a=l}),{dragObj:a,ar:o,list:e}},fr=function(r,s){var e=s.parentId,n=s.departmentId,a=s.expandedKeys,o=r.departments,l=r.newDepartments,c=(0,y.default)({},o,(0,ne.default)({},e||"",(0,y.default)({},o[e||""],{isExpired:!0})));return delete c[n],(0,y.default)({},r,{departments:c,newDepartments:(0,Ze.Lh)(l,n),expandedKeys:a})},hr=function(r,s){var e=s.newDepartments,n=s.expandedKeys,a=n===void 0?[]:n;return(0,y.default)({},r,{newDepartments:e,expandedKeys:a})},Qr=function(r,s){var e=s.response.users;return e?merge({},r,parse(e,Schemas.USER_ARRAY).entities):r},vr=function(r,s){var e=s.curDepartmentId,n=s.departmentId,a=s.response,o=s.collapseAll,l=r.departments[n];if(!a)return r;var c=[];{var i=function I(g){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l;_.isArray(g)&&_.map(g,function(S){S.parentDepartment=b,c.push(S),S.subDepartments&&I(S.subDepartments,S)})};i(a)}var d=(0,be.Qc)(c,be.lg.DEPARTMENT_ARRAY),u=d.entities;if(o){var p=_.forEach(u.departments,function(I){return(0,y.default)({},I,{collapsed:!0})}),f=function I(g){if(!(!g||!p[g])&&p[g].parentDepartment!==void 0){p[g].collapsed=!1;var b=p[g].parentDepartment;I(b)}};return f(e),(0,Re.merge)({},r,{departments:p})}else{var h=u.departments,v=function I(g){if(!(!g||!h[g])&&h[g].parentDepartment!==void 0){var b=h[g].parentDepartment;h[b].collapsed=!1,I(b)}};return v(e),(0,Re.merge)({},r,{departments:h})}},Ir=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qt,s=arguments[1],e=s.type,n=s.response,a=s.departmentId,o=s.department,l=s.id,c=s.curDepartmentId,i=s.isGetAll,d=s.isShowExport,u=s.importExportType,p=s.importExportResult,f=p===void 0?{}:p,h=s.fullDepartmentInfo,v=h===void 0?{}:h,I=r.getDepartmentIds,g=r.newDepartments,b=r.departments;if(e==="UPDATE_IMPORT_EXPORT_RESULT")return(0,y.default)({},r,{importExportResult:f});if(e==="UPDATE_SHOW_EXPORT")return(0,y.default)({},r,{isShowExport:d});if(e==="UPDATE_IMPORT_EXPORT_TYPE")return(0,y.default)({},r,{importExportType:u});if(e==="UPDATE_FULL_DEPARTMENT_INFO")return(0,y.default)({},r,{fullDepartmentInfo:v});if(e==="PROJECT_ID_CHANGED")return Qt;if(typeof Q[e]>"u")return r;if(e===Q.DELETE_DEPARTMENT)return fr(r,s);if(e===Q.EDIT_DEPARTMENT)return hr(r,s);if(e===Q.SEARCH_SUCCESS){var S=s.response.users;return(0,y.default)({},r,{searchUsers:S})}if(e===Q.DEPARTMENT_UPDATE){if(o){var N=(0,be.Qc)(o,be.lg.DEPARTMENT_ARRAY),w=N.entities;return(0,y.default)({},(0,Re.merge)({},r,w),{newDepartments:s.newDepartments})}return(0,y.default)({},r,{newDepartments:s.newDepartments})}if(e===Q.EXPANDED_KEYS_UPDATE)return(0,y.default)({},r,{expandedKeys:s.expandedKeys});if(e===Q.FULL_TREE_SUCCESS){var A=vr(r,s),L=n;return(0,y.default)({},A,{newDepartments:L,expandedKeys:(0,Ze.qg)(n,c)})}if(e===Q.DEPARTMENT_SUCCESS){var x=!I.includes(a)||!a;x&&I.push(a);var Z=function(){var D=g.filter(function(M){return M.departmentId!==a}),U=g.filter(function(M){return M.departmentId===a});return U=(0,y.default)({},U,{subDepartments:n}),D.concat(U)};return(0,y.default)({},Xt(r,s),{getDepartmentIds:I,newDepartments:!x||!a?n:Z()})}return Xt(r,s)};const gr=Ir;var Er=function(r,s){var e=r.response,n=r.departmentId,a=r.pageIndex,o=[],l=0;if(s===k.APPROVAL_USER_SUCCESS){var c=e.users,i=c.list,d=i===void 0?[]:i,u=c.allCount,p=u===void 0?0:u;o=d,l=p}else if(s===k.INACTIVE_USER_SUCCESS||s===k.ALL_USER_SUCCESS){var f=e.list,h=e.allCount;o=f,l=h}else{var v=n?e:e.listUser,I=v.list,g=v.allCount;o=I,l=g}var b=(0,be.Qc)(o,be.lg.USER_ARRAY).result;return{ids:b,pageIndex:a,allCount:l}},Cr=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{isLoading:!1,pageIndex:1,pageSize:j.IV,ids:[],allCount:void 0,searchId:[]},s=arguments[1],e=s.type,n=k.USER_REQUEST,a=k.USER_SUCCESS,o=k.USER_FAILURE;switch(e){case n:case k.APPROVAL_USER_REQUEST:case k.INACTIVE_USER_REQUEST:case k.ALL_USER_REQUEST:return(0,y.default)({},r,{isLoading:!0});case a:case k.APPROVAL_USER_SUCCESS:case k.ALL_USER_SUCCESS:case k.INACTIVE_USER_SUCCESS:return(0,y.default)({},r,Er(s,e),{isLoading:!1});case o:case k.APPROVAL_USER_FAILURE:case k.INACTIVE_USER_FAILURE:case k.ALL_USER_FAILURE:return(0,y.default)({},r,{isLoading:!1});default:return r}};const br=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments[1];switch(r.type){case"PROJECT_ID_CHANGED":return{};case k.USER_REQUEST:case k.USER_SUCCESS:case k.USER_FAILURE:case k.APPROVAL_USER_REQUEST:case k.APPROVAL_USER_SUCCESS:case k.APPROVAL_USER_FAILURE:case k.INACTIVE_USER_REQUEST:case k.INACTIVE_USER_SUCCESS:case k.INACTIVE_USER_FAILURE:case k.ALL_USER_REQUEST:case k.ALL_USER_SUCCESS:case k.ALL_USER_FAILURE:var s=m.userList;return(0,y.default)({},m,{userList:(0,y.default)({},Cr(s,r),{isSearchResult:!1})});case me.LM:var e=r.accountIds;return(0,y.default)({},m,{userList:{isSearchResult:!0,isLoading:!1,pageIndex:1,pageSize:j.IV,searchId:e,allCount:e.length}});default:return m}};var qt={keywords:"",isSearching:!1,result:{},showSeachResult:!1,searchValue:""};const yr=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qt,r=arguments[1],s=r.type,e=r.keywords;switch(s){case"PROJECT_ID_CHANGED":return qt;case me.CV:return(0,y.default)({},m,{keywords:e,isSearching:!0});case me.B0:case me.K9:var n=r.response;return(0,y.default)({},m,{result:n,isSearching:!1});case me.BQ:return(0,y.default)({},m,{keywords:"",result:{},isSearching:!1,showSeachResult:!1});case"SHOW_SEACH_RESULT":return(0,y.default)({},m,{showSeachResult:!0});case"UPDATE_SEARCH_VALUYE":return(0,y.default)({},m,{searchValue:r.data});default:return m}},Sr=(0,xe.UY)({current:pr,entities:gr,pagination:br,search:yr});var xr=function(r){var s=(0,xe.qC)((0,xe.md)(dr.Z,be.ZP))(xe.MT),e=s(Sr,r,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return e},lt=xr(),kr=function(m){(0,Y.default)(r,m);function r(){(0,z.default)(this,r);var s=(0,V.default)(this,(r.__proto__||K()(r)).call(this));return ce.Z.setPageTitle(_l("\u6210\u5458\u4E0E\u90E8\u95E8")),s}return(0,J.default)(r,[{key:"componentDidMount",value:function(){$("html").addClass("AppAdminStructure")}},{key:"componentWillUnmount",value:function(){lt.dispatch({type:"PROJECT_ID_CHANGED"}),$("html").removeClass("AppAdminStructure")}},{key:"render",value:function(){return lt.dispatch((0,R.updateProjectId)(this.props.projectId)),t.createElement(ie.zt,{store:lt},t.createElement(cr,{handleShowHeader:this.props.handleShowHeader}))}}]),r}(t.Component),_r=C(22507),wr=C(6280),en=C(6307),Nr=C(45697),ke=C.n(Nr),ge=C(3274),tn=C(71411),Tr=(0,ae.Z)([`
  display: flex;
  width: 197px;
  height: 32px;
  padding: 9px 10px;
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 15px;
  input {
    background: #f5f5f5;
    border: none;
  }
`],[`
  display: flex;
  width: 197px;
  height: 32px;
  padding: 9px 10px;
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 15px;
  input {
    background: #f5f5f5;
    border: none;
  }
`]),Ar=re.ZP.div(Tr);function nn(m){var r=m.className,s=m.placeholder,e=m.onSearch,n=e===void 0?function(){}:e,a=(0,t.useState)(),o=(0,ze.Z)(a,2),l=o[0],c=o[1];return t.createElement(Ar,{className:r},t.createElement("i",{className:"icon icon-search Gray_9e"}),t.createElement("input",{placeholder:s||_l("\u641C\u7D22"),type:"search",value:l,onKeyUp:function(d){d.keyCode===13&&n(d.target.value)},onChange:function(d){c(d.target.value)}}))}var an=C(42723),_e,Me,rn,on,H={OA:"OA",WORKSHEET_ALL:"WORKSHEET_ALL",TASK_PROJECT:1,TASK:2,GROUP:3,KC:4},ye={WORKSHEET:5,WORKSHEET_ROW:6},We=(_e={},(0,ne.default)(_e,H.TASK_PROJECT,_l("\u9879\u76EE")),(0,ne.default)(_e,H.TASK,_l("\u4EFB\u52A1")),(0,ne.default)(_e,H.GROUP,_l("\u7FA4\u7EC4")),(0,ne.default)(_e,H.KC,_l("\u5171\u4EAB\u6587\u4EF6\u5939")),(0,ne.default)(_e,H.OA,_l("\u534F\u4F5C\u5957\u4EF6")+"-"+_l("\u5BA1\u6279")),(0,ne.default)(_e,H.WORKSHEET_ALL,_l("\u5DE5\u4F5C\u8868")),_e),Dr={1:_l("\u7533\u8BF7\u8BB0\u5F55"),2:_l("\u5BA1\u6279\u6D41\u7A0B"),3:_l("\u5BA1\u6279\u89D2\u8272")},jr=(Me={},(0,ne.default)(Me,ye.WORKSHEET,_l("\u5DE5\u4F5C\u8868")),(0,ne.default)(Me,ye.WORKSHEET_ROW,_l("\u5DE5\u4F5C\u8868\u8BB0\u5F55")),Me),Ve={ALL:-1,UNDONE:0,DONE:1},sn={currentOACompleteType:Ve.ALL,currentOAType:1},it={currentWorksheetType:5},Ge=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};(0,et.Z)({fromAdmin:!0,SelectUserSettings:{projectId:r,filterAll:!0,filterFriend:!0,filterOtherProject:!0,filterOthers:!0,unique:!0,callback:s}})},Ur=(on=rn=function(m){(0,Y.default)(r,m);function r(){(0,z.default)(this,r);var s=(0,V.default)(this,(r.__proto__||K()(r)).call(this));return s.renderOATabs=function(){var e=s.state,n=e.currentType,a=e.currentOAType;return n!==H.OA?null:t.createElement("div",{className:"clearfix oaFilterList Font13"},t.createElement("div",{className:"typeList"},t.createElement("span",{onClick:function(){s.setState({pageIndex:1,currentOAType:1,currentOACompleteType:Ve.ALL,showMenuList:!s.state.showMenuList})}},_l("\u8868\u5355")),t.createElement("span",{className:P()("ThemeColor3",{active:a===2}),onClick:function(){s.setState({pageIndex:1,currentOAType:2,currentOACompleteType:Ve.UNDONE,showMenuList:!s.state.showMenuList})}},_l("\u6D41\u7A0B")),t.createElement("span",{className:P()("ThemeColor3",{active:a===3}),onClick:function(){s.setState({pageIndex:1,currentOAType:3,currentOACompleteType:Ve.UNDONE,showMenuList:!s.state.showMenuList})}},_l("\u89D2\u8272"))))},s.state=(0,y.default)({list:null,isLoading:!1,allCount:null,pageIndex:1,pageSize:20,selectItems:{},currentType:H.GROUP},sn,it,{showMenuList:!1}),s}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.fetchList()}},{key:"_getTypeName",value:function(){var e=this.state,n=e.currentType,a=e.currentOAType,o=e.currentWorksheetType;return n===H.WORKSHEET_ALL?jr[o]:n===H.OA?Dr[a]:We[n]}},{key:"_getReqParamType",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.state,a=n.currentType,o=n.currentWorksheetType;return a===H.WORKSHEET_ALL?e?ye.WORKSHEET:o:a}},{key:"transferByType",value:function(){var e=this,n=this.state,a=n.allCount,o=n.currentType,l=this.props,c=l.projectId,i=l.user.accountId;if(!a){alert(_l("\u6CA1\u6709\u8981\u4EA4\u63A5\u7684%0",this._getTypeName()),3);return}return Ge(c,function(d){var u=null;o!==H.OA?u=ge.Z.transferByType({transferRecordType:e._getReqParamType(!0),oldAccountId:i,toAccountId:d[0].accountId,projectId:c}):u=ge.Z.oATransferAllToAccountId({accountId:i,transferAccountId:d[0].accountId,sourceType:0,completeType:-1,projectId:c}),u.then(function(p){p?(e.setState({list:[],allCount:0}),alert(_l("\u4EA4\u63A5\u6210\u529F"))):alert(_l("\u4EA4\u63A5\u5931\u8D25"),2)})})}},{key:"transfer",value:function(e){var n=this,a=this.props.projectId,o=this.state,l=o.currentType,c=o.pageIndex;Ge(a,function(i){var d=null;l===H.OA?d=ge.Z.oATransferToAccountId({projectId:a,accountId:e.originalChargeUser?e.originalChargeUser.accountId:e.accountId,transferAccountId:i[0].accountId,listTranser:Ie()([E().pick(e,["sourceType","sourceId","completeType"])])}):d=ge.Z.transferOne({oldAccountId:e.originalChargeUser.accountId,toAccountId:i[0].accountId,projectId:a,transferRecordType:n._getReqParamType(),sourceId:e.sourceId}),d.then(function(u){if(u){var p=E().filter(n.state.list,function(f){var h=f.sourceId;return e.sourceId!==h});n.setState({list:p,selectItems:{}}),p.length||n.setState({pageIndex:Math.max(1,c-1)}),alert(_l("\u4EA4\u63A5\u6210\u529F"))}else alert(_l("\u4EA4\u63A5\u5931\u8D25"),2)})})}},{key:"transferMultiple",value:function(){var e=this,n=this.state,a=n.selectItems,o=n.currentType,l=n.pageIndex,c=this.props,i=c.projectId,d=c.user.accountId;if(!E().keys(a).length)return alert(_l("\u8BF7\u9009\u62E9\u8981\u4EA4\u63A5\u7684\u6761\u76EE"),2);Ge(i,function(u){var p=null;o===H.OA?p=ge.Z.oATransferToAccountId({projectId:i,accountId:d,transferAccountId:u[0].accountId,listTranser:Ie()(E().values(a).map(function(f){return E().pick(f,["sourceType","sourceId","completeType"])}))}):p=ge.Z.transferMany({projectId:i,sourceIds:E().keys(a),transferRecordType:e._getReqParamType(),oldAccountId:d,toAccountId:u[0].accountId}),p.then(function(f){f?(alert(_l("\u4EA4\u63A5\u6210\u529F")),e.setState({pageIndex:1,selectItems:{}},function(){l===1&&e.fetchList()})):alert(_l("\u4EA4\u63A5\u5931\u8D25"),2)})})}},{key:"fetchList",value:function(){var e=this,n=this.state,a=n.pageIndex,o=n.pageSize,l=n.currentType,c=n.currentOACompleteType,i=n.currentOAType,d=this.props,u=d.user.accountId,p=d.projectId;this.setState({isLoading:!0}),this.ajax&&this.ajax.abort&&this.ajax.abort(),l===H.OA?this.ajax=ge.Z.getOATransferRecordByType({projectId:p,oaTransferType:i,completedType:c,originAccountId:u,pageIndex:a,pageSize:o}):this.ajax=ge.Z.getTransferRecordByType({projectId:p,transferRecordType:this._getReqParamType(),originAccountId:u,pageIndex:a,pageSize:o}),this.ajax.then(function(f){var h=f.allCount,v=f.list;e.setState({allCount:h,list:v})}).finally(function(){e.setState({isLoading:!1})})}},{key:"renderUser",value:function(){var e=this.props,n=e.user,a=e.projectId;return t.createElement(t.Fragment,null,t.createElement(Fe.Z,{className:"mLeft10 mRight10 InlineBlock TxtMiddle",user:(0,y.default)({},n,{userHead:n.avatar}),size:30,projectId:a}),t.createElement("span",{className:"flexColumn TxtLeft pLeft5"},t.createElement(en.Z,{sourceId:n.accountId},t.createElement("a",{className:"Bold overflow_ellipsis",href:"/user_"+n.accountId,title:n.fullname,target:"_blank"},n.fullname,n.isRelationShip?t.createElement("span",{className:"boderRadAll_3 TxtCenter otherRelationShip"},"\u534F"):null)),t.createElement("span",{className:"overflow_ellipsis Gray_bd wMax100",title:n.department},n.department),t.createElement("span",{className:"overflow_ellipsis Gray_bd wMax100",title:n.job},n.job)))}},{key:"renderTabs",value:function(){var e=this,n=this.state,a=n.currentType,o=n.showMenuList,l=[H.GROUP,H.TASK_PROJECT,H.TASK,H.KC];return t.createElement("div",{className:"transferTabList mBottom10 clearfix"},t.createElement("ul",{className:"clearfix tabList Left"},E().map(l,function(c){return t.createElement("li",{key:c,className:P()("listItem",{active:a===c}),onClick:function(){c!==a&&e.setState((0,y.default)({pageIndex:1,selectItems:{}},sn,it,{currentType:c,allCount:0,list:[]}),e.fetchList)}},We[c])}),t.createElement(He.Z,{action:["click"],popupVisible:o,onPopupVisibleChange:function(i){return e.setState({showMenuList:i})},popupAlign:{points:["tl","bl"],offset:[0,-30]},popup:this.renderOATabs},t.createElement("li",{className:P()("listItem Relative",{active:a===H.OA}),onClick:function(){a!==H.OA&&e.setState((0,y.default)({pageIndex:1,selectItems:{}},it,{currentType:H.OA,showMenuList:!e.state.showMenuList,allCount:0,list:[]}),e.fetchList)}},t.createElement("span",null,We[H.OA],t.createElement("i",{className:"icon-arrow-down-border Font10"}))))),t.createElement("span",{className:"Right  ThemeColor3 Font13 Hand adminHoverColor",onClick:function(){e.transferByType()}},_l("\u4EA4\u63A5\u6240\u6709\u201C%0\u201D",We[a])))}},{key:"renderWorkSheetTabs",value:function(){var e=this,n=this.state,a=n.currentType,o=n.currentWorksheetType;return a!==H.WORKSHEET_ALL?null:t.createElement("div",{className:"clearfix oaFilterList mBottom5 Font13"},t.createElement("div",{className:"Left typeList"},t.createElement("span",{className:P()("ThemeColor3",{active:o===ye.WORKSHEET}),onClick:function(){e.setState({pageIndex:1,selectItems:{},currentWorksheetType:ye.WORKSHEET})}},_l("\u5DE5\u4F5C\u8868")),t.createElement("span",{className:P()("ThemeColor3",{active:o===ye.WORKSHEET_ROW}),onClick:function(){e.setState({pageIndex:1,selectItems:{},currentWorksheetType:ye.WORKSHEET_ROW})}},_l("\u8868\u8BB0\u5F55"))))}},{key:"renderTable",value:function(){var e=this,n=this.state,a=n.isLoading,o=n.list,l=n.currentType,c=n.selectItems;if(a||o===null)return t.createElement("tr",{className:"TxtCenter"},t.createElement("td",{colSpan:"5",className:"pTop100 Gray_bd"},t.createElement(he.Z,null)));if(!a&&!o.length){var i={icon:"icon-sp_assignment_turned_in_white",desc:_l("\u65E0\u6570\u636E")};return t.createElement("tr",null,t.createElement(tn.Z,{detail:i}))}return t.createElement(t.Fragment,null,E().map(o,function(d){return t.createElement("tr",{key:d.sourceId},t.createElement("td",{width:"10%"},t.createElement(ve.Z,{checked:!!(c&&c[d.sourceId]),onClick:function(p){e.setState(function(f){if(p){var h=f.selectItems,v=h[d.sourceId],I=(0,an.Z)(h,[d.sourceId]);return{selectItems:I}}else return{selectItems:(0,y.default)({},f.selectItems,(0,ne.default)({},d.sourceId,d))}})}})),t.createElement("td",{width:"25%",className:"sourceName overflow_ellipsis"},function(){var u=(0,Ne.u1)(d.sourceName);if(l===H.OA)return t.createElement("span",{className:"pLeft16"},u);var p=void 0;return l===H.TASK_PROJECT?p="/apps/task/folder_"+d.sourceId+"#detail":l===H.TASK?p="/apps/task/task_"+d.sourceId:l===H.GROUP?p="/group/groupValidate?gID="+d.sourceId:l===H.KC?p="/apps/kc/"+d.sourceId:l===H.WORKSHEET_ALL&&(p="/worksheet/"+d.sourceId),p?t.createElement("a",{className:"TxtMiddle",href:p,target:"_blank"},u):t.createElement("span",{className:"TxtMiddle"},u)}()),t.createElement("td",{width:"20%"},t.createElement("span",null,_l("\u672A\u4EA4\u63A5"))),t.createElement("td",{width:"20%"},t.createElement("span",{className:"Hand ThemeColor3 TxtMiddle adminHoverColor",onClick:function(){e.transfer(d)}},_l("\u66F4\u6539\u8D1F\u8D23\u4EBA"))),t.createElement("td",{width:"25%"}))}))}},{key:"renderList",value:function(){var e=this,n=this.state,a=n.currentType,o=n.currentWorksheetType,l=n.currentOAType,c=n.selectItems,i=n.list,d=this.state,u=d.isLoading,p=d.allCount,f=d.pageIndex,h=d.pageSize,v=function(){if(a===H.OA){if(l===1)return _l("\u8868\u5355\u540D\u79F0");if(l===2)return _l("\u6D41\u7A0B\u540D\u79F0");if(l===3)return _l("\u89D2\u8272\u540D\u79F0")}else if(a===H.WORKSHEET_ALL){if(o===ye.WORKSHEET)return _l("\u5DE5\u4F5C\u8868\u540D\u79F0");if(o===ye.WORKSHEET_ROW)return _l("\u5DE5\u4F5C\u8868\u8BB0\u5F55\u540D\u79F0")}else{if(a===H.TASK_PROJECT)return _l("\u9879\u76EE\u540D\u79F0");if(a===H.TASK)return _l("\u4EFB\u52A1\u540D\u79F0");if(a===H.GROUP)return _l("\u7FA4\u7EC4\u540D\u79F0");if(a===H.KC)return _l("\u5171\u4EAB\u6587\u4EF6\u5939\u540D\u79F0")}}(),I=!!(E().isArray(i)&&i.length&&E().every(i,function(g){return!!c[g.sourceId]}));return t.createElement(t.Fragment,null,t.createElement("table",{className:"w100 Relative",cellSpacing:"0"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",{width:"10%"},t.createElement(ve.Z,{checked:I,onClick:function(b){E().isArray(i)&&E().each(i,function(S){e.setState(function(N){if(b){var w=N.selectItems,A=w[S.sourceId],L=(0,an.Z)(w,[S.sourceId]);return{selectItems:L}}else return{selectItems:(0,y.default)({},N.selectItems,(0,ne.default)({},S.sourceId,S))}})})}})),t.createElement("th",{width:"25%",className:"TxtLeft"},E().keys(c).length?_l("\u5DF2\u9009\u62E9%0\u4E2A%1",E().keys(c).length,this._getTypeName()):v),t.createElement("th",{width:"20%"},_l("\u72B6\u6001")),t.createElement("th",{width:"20%"},E().keys(c).length?t.createElement("span",{className:"TxtMiddle Hand ThemeHoverColor2 ThemeColor3 adminHoverColor",onClick:function(){e.transferMultiple()}},_l("\u6279\u91CF\u66F4\u6539\u8D1F\u8D23\u4EBA")):_l("\u64CD\u4F5C")),t.createElement("th",{width:"25%"})))),t.createElement("div",{className:"resignlistTable Relative"},t.createElement("table",{className:"w100"},t.createElement("tbody",null,this.renderTable()))),!u&&p&&p>10?t.createElement(ot.Z,{total:p,pageSize:h,pageIndex:f,onChange:function(b){return e.setState({pageIndex:b},e.fetchList)}}):null)}},{key:"render",value:function(){var e=this,n=this.props,a=n.returnCallback,o=n.projectId;return t.createElement("div",{className:"transferDetail"},t.createElement("div",{className:"flexRow pBottom25 detailHeader"},t.createElement("span",{className:"mRight5 color_b Font13"},_l("\u539F\u8D1F\u8D23\u4EBA")),t.createElement("div",{className:"flexRow originalCharger"},this.renderUser()),t.createElement("div",null,t.createElement(se.ZP,{className:"postBtn",size:"medium",onClick:function(){Ge(o,function(c){ge.Z.transferAllOneClick({oldAccountId:e.props.user.accountId,toAccountId:c.accountId,projectId:o}).then(function(i){if(i)alert(_l("\u64CD\u4F5C\u6210\u529F")),a(!0);else return $e().reject()}).catch(function(){alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})})}},_l("\u4E00\u952E\u4EA4\u63A5\u534F\u4F5C")))),this.renderTabs(),this.renderWorkSheetTabs(),this.renderList())}}]),r}(t.Component),rn.propTypes={user:ke().shape({avatar:ke().string,accountId:ke().string}).isRequired,returnCallback:ke().func.isRequired},on),ct,ln,Rr=(ln=ct=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.state={pageIndex:1,isLoading:!1,list:null,allCount:null,selectAccount:null,ajaxMap:{}},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.fetchList()}},{key:"componentWillReceiveProps",value:function(e){(e.activeTab!==this.props.activeTab||e.level!==this.props.level)&&this.setState({pageIndex:1},this.fetchList.bind(this))}},{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.ajax&&this.ajax.abort&&this.ajax.abort()}},{key:"fetchList",value:function(){var e=this,n=this.props.projectId,a=this.state,o=a.pageIndex,l=a.keywords;return this.abortRequest(),this.setState({isLoading:!0}),this.ajax=ge.Z.getTransferRecordByProject({pageIndex:o,projectId:n,keywords:l,pageSize:20}),this.ajax.then(function(c){var i=c.list,d=c.allCount;e.setState({list:i,allCount:d,isLoading:!1})},function(){e.setState({isLoading:!1})})}},{key:"renderUser",value:function(e){return t.createElement(t.Fragment,null,t.createElement(Fe.Z,{className:"mRight10 InlineBlock TxtMiddle",user:(0,y.default)({},e,{userHead:e.avatar}),size:30,projectId:this.props.projectId}),e.accountId?t.createElement("span",{className:"flexColumn TxtLeft personBox ellipsis pRight10"},t.createElement(en.Z,{sourceId:e.accountId},t.createElement("a",{className:"Bold overflow_ellipsis",href:"/user_"+e.accountId,title:e.fullname},e.fullname)),t.createElement("span",{className:"overflow_ellipsis Gray_bd wMax100",title:e.department},e.department),t.createElement("span",{className:"overflow_ellipsis Gray_bd wMax100",title:e.job},e.job)):null)}},{key:"renderList",value:function(){var e=this,n=this.state,a=n.isLoading,o=n.list,l=n.ajaxMap;if(a)return t.createElement("div",null,t.createElement("div",{colSpan:"5"},t.createElement(he.Z,{className:"mTop10"})));if(!o||!(o&&o.length)){var c={icon:"icon-sp_assignment_turned_in_white",desc:_l("\u65E0\u6570\u636E")};return t.createElement(tn.Z,{detail:c})}return t.createElement(t.Fragment,null,E().map(o,function(i,d){return t.createElement("div",{className:P()("flexRow listItem",{deepBg:d%2===0}),key:i.originalChargeUser.accountId},t.createElement("div",{className:"pLeft16 TxtMiddle tablePerson overflow_ellipsis"},e.renderUser(i.currentChargeUser)),t.createElement("div",{className:"tableOrigin"},t.createElement("div",{className:"flexRow originalCharger alignItemsCenter"},e.renderUser(i.originalChargeUser))),t.createElement("div",{className:"tableWork"},t.createElement("span",{className:"overflow_ellipsis TxtMiddle Gray Font14"},i.createTime)),t.createElement("div",{className:"tableDays overflowHidden"},t.createElement("span",{className:"ellipsis TxtMiddle color_b Font13 InlineBlock w100"},i.createUser&&i.createUser.fullname)),l[i.originalChargeUser.accountId]?t.createElement("div",{className:"tableOptions"},_l("\u4EA4\u63A5\u4E2D"),t.createElement("span",{className:"dot"})):t.createElement("div",{className:"tableOptions"},t.createElement("span",{className:"ThemeColor3 Hand adminHoverColor",onClick:function(){e.setState({selectAccount:i.originalChargeUser})}},_l("\u4EA4\u63A5"))))}))}},{key:"renderContent",value:function(){var e=this,n=this.state,a=n.allCount,o=n.isLoading,l=n.pageIndex;return t.createElement("div",{className:"transferList flex"},t.createElement("div",{className:"listHeader flexRow bold"},t.createElement("div",{className:"tablePerson pLeft16"},_l("\u5F53\u524D\u8D1F\u8D23\u4EBA")),t.createElement("div",{className:"tableOrigin"},_l("\u539F\u8D1F\u8D23\u4EBA")),t.createElement("div",{className:"tableWork"},_l("\u79BB\u804C\u5904\u7406\u65F6\u95F4")),t.createElement("div",{className:"tableDays"},_l("\u64CD\u4F5C\u8005")),t.createElement("div",{className:"tableOptions"},_l("\u64CD\u4F5C"))),t.createElement("div",{className:"resignlistTable flex"},this.renderList()),!o&&a&&a>20?t.createElement(ot.Z,{className:"pagination",total:a,pageIndex:l,pageSize:20,onChange:function(i){e.setState({pageIndex:i},function(){e.fetchList()})}}):null)}},{key:"renderDetail",value:function(){var e=this,n=this.props.projectId;return t.createElement(Ur,{projectId:n,user:this.state.selectAccount,returnCallback:function(o){e.setState({selectAccount:null}),o&&e.fetchList()}})}},{key:"render",value:function(){var e=this,n=this.state.selectAccount,a=this.props,o=a.visible,l=a.onCancel,c=l===void 0?function(){}:l;return t.createElement(de.Z,{title:"",width:1e3,className:"handoverDialog",visible:o,showFooter:!1,onCancel:c},n?t.createElement(t.Fragment,null,t.createElement("div",{className:"flexRow"},t.createElement("div",{className:"flex bold Font17"},t.createElement("i",{className:"icon icon-arrow_back mRight10 Hand",onClick:function(){return e.setState({selectAccount:null})}}),_l("\u4EA4\u63A5\u534F\u4F5C:%0",(n||{}).fullname))),this.renderDetail()):t.createElement(t.Fragment,null,t.createElement("div",{className:"flexRow"},t.createElement("div",{className:"flex bold Font17"},_l("\u4EA4\u63A5\u534F\u4F5C")),t.createElement(nn,{onSearch:function(d){return e.setState({keywords:d},e.fetchList)}})),this.renderContent()))}}]),r}(t.Component),ct.propTypes={keywords:ke().string,projectId:ke().string.isRequired,setLevel:ke().func.isRequired,level:ke().string.isRequired},ct.defaultProps={keywords:""},ln),Lr=(0,ae.Z)([`
  width: 130px !important;
`],[`
  width: 130px !important;
`]),Pr=(0,ae.Z)([`
  &.resignTableList {
    .actionWrap {
      width: 20px;
    }
    .ant-table-tbody > tr.ant-table-row {
      .icon-moreop {
        display: none;
      }
      &:hover {
        .icon-moreop {
          display: inline;
        }
      }
    }
  }
`],[`
  &.resignTableList {
    .actionWrap {
      width: 20px;
    }
    .ant-table-tbody > tr.ant-table-row {
      .icon-moreop {
        display: none;
      }
      &:hover {
        .icon-moreop {
          display: inline;
        }
      }
    }
  }
`]),Fr=(0,ae.Z)([`
  justify-content: space-between;
`],[`
  justify-content: space-between;
`]),Zr=(0,re.ZP)(Oe.Z)(Lr),$r=(0,re.ZP)(wr.Z)(Pr),Or=re.ZP.div(Fr),Br=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this));return e.getData=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.setState({loading:!0,pageIndex:n.pageIndex||1});var a=n.pageIndex,o=a===void 0?1:a,l={projectId:e.props.projectId,pageIndex:o,pageSize:50,userStatus:4,keywords:e.state.keywords};ee.Z.getUserList(l).then(function(c){e.setState({dataSource:c.list||[],count:c.allCount||0,loading:!1})}).catch(function(c){e.setState({dataSource:[],count:0,loading:!1})})},e.recovery=function(n,a){var o=e.props.projectId,l=document.querySelector(".actionTrigger");l.classList.add("rc-trigger-popup-hidden"),de.Z.confirm({title:_l("\u786E\u8BA4\u6846"),description:_l("\u786E\u5B9A\u6062\u590D[%0]\u6743\u9650\u5417\uFF1F",a),onOk:function(){ee.Z.recoveryUser({accountId:n,projectId:o}).then(function(i){if(i==1)e.getData(),alert(_l("\u6062\u590D\u6210\u529F"));else if(i==4){var d=(0,Ne.vo)(o,!0),u=d.licenseType,p="";u===0?p=t.createElement("span",null,_l("\u5F53\u524D\u7528\u6237\u6570\u5DF2\u8D85\u51FA\u4EBA\u6570\u9650\u5236\uFF0C\u8BF7\u53BB\u8D2D\u4E70"),t.createElement("a",{href:"javascript:void(0);",onClick:function(){purchaseMethodFunc({projectId:o})}},_l("\u4ED8\u8D39\u7248\u672C"))):p=t.createElement("span",null,_l("\u5F53\u524D\u7528\u6237\u6570\u5DF2\u8D85\u51FA\u4EBA\u6570\u9650\u5236\uFF0C\u8BF7\u53BB\u8D2D\u4E70"),t.createElement("a",{href:"/admin/expansionserviceResign/"+o+"/user",target:"_self"},_l("\u7528\u6237\u5305"))),alert(p,3)}else alert(_l("\u6062\u590D\u5931\u8D25"),2)})}})},e.state={level:"index",activeTab:"transfer",keywords:"",columns:[]},e.getColumns=function(){return[{title:_l("\u7528\u6237"),dataIndex:"accountId",fixed:"left",disabled:!0,render:function(a,o){var l=o.avatar,c=o.accountId,i=o.fullname;return t.createElement("div",{className:"flexRow alignItemsCenter"},t.createElement(Fe.Z,{className:"circle mRight8",user:{userHead:l,accountId:c},lazy:"false",size:32,projectId:s.projectId}),t.createElement(_r.Z,{className:"Gray Font13 pLeft5 pRight10 pTop3 flex ellipsis",user:{userName:i,accountId:c}}))}},{title:_l("\u5DE5\u53F7"),dataIndex:"jobNumber"},{title:_l("\u90E8\u95E8"),dataIndex:"departmentInfos",render:function(a,o){var l=o.departmentInfos,c=l===void 0?[]:l,i=c.map(function(d,u){return d.departmentName+(u<c.length-1?";":"")});return t.createElement("div",{className:"ellipsis"},t.createElement(Ce.Z,{text:t.createElement("span",null,i)},t.createElement("span",null,i)))}},{title:_l("\u804C\u4F4D"),dataIndex:"jobInfos",render:function(a,o){var l=o.jobInfos,c=l===void 0?[]:l,i=c.map(function(d,u){return d.jobName+(u<c.length-1?";":"")});return t.createElement("div",{className:"ellipsis"},t.createElement(Ce.Z,{text:t.createElement("span",null,i)},t.createElement("span",null,i)))}},{title:_l("\u52A0\u5165\u5929\u6570"),dataIndex:"joinDays",render:function(a,o){return Te()().diff(Te()(o.createTime),"days")}},{title:_l("\u79BB\u804C\u65F6\u95F4"),dataIndex:"updateTime",width:200}].map(function(n){return(0,y.default)({},n,{width:n.width||150,onCell:function(){return{style:{maxWidth:n.width||150,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}}})})},e}return(0,J.default)(r,[{key:"componentDidMount",value:function(){this.getColumns(),this.getData()}},{key:"render",value:function(){var e=this,n=this.props.projectId,a=this.state,o=a.loading,l=a.dataSource,c=l===void 0?[]:l,i=a.count,d=i===void 0?0:i,u=a.pageIndex,p=a.handoverVisible,f=a.showWorkHandover,h=a.transferor;return t.createElement("div",{className:"flexColumn flex minHeight0 h100"},t.createElement(Or,{className:"flexRow"},t.createElement(nn,{placeholder:_l("\u641C\u7D22\u6210\u5458"),onSearch:function(I){return e.setState({keywords:I},e.getData)}}),t.createElement("span",{className:"ThemeColor Hand Font13 Normal",onClick:function(){return e.setState({handoverVisible:!0})}},_l("\u4EA4\u63A5\u534F\u4F5C"))),t.createElement("div",{className:"flex"},t.createElement($r,{className:"resignTableList",loading:o,columns:this.getColumns().concat({title:"",dataIndex:"action",width:80,render:function(I,g){var b=g.accountId,S=g.fullname,N=_.find(md.global.Account.projects,function(L){return L.projectId===n})||{},w=N.isSuperAdmin,A=N.isProjectAppManager;return t.createElement("div",{className:"actionWrap"},t.createElement(He.Z,{popupClassName:"actionTrigger",action:["click"],popupAlign:{points:["tc","bc"],offset:[-120,30]},popup:t.createElement(Zr,null,t.createElement(ue.Z,{onClick:function(){return e.recovery(b,S)}},_l("\u6062\u590D")),(w||A)&&t.createElement(ue.Z,{onClick:function(){var x=document.querySelector(".actionTrigger");x.classList.add("rc-trigger-popup-hidden"),e.setState({showWorkHandover:!0,transferor:g})}},_l("\u4EA4\u63A5\u5DE5\u4F5C")))},t.createElement(W.Z,{icon:"moreop",className:"Gray_9e Font16 Hand"})))}}),dataSource:c,count:d,getDataSource:this.getData,paginationInfo:{pageIndex:u,pageSize:50}})),p&&t.createElement(Rr,{projectId:n,visible:p,onCancel:function(){e.setState({handoverVisible:!1})}}),f&&t.createElement(Be,{visible:f,projectId:n,transferor:h,onCancel:function(){return e.setState({showWorkHandover:!1})}}))}}]),r}(t.Component),Hr=C(15216),Mr=function(m){(0,Y.default)(r,m);function r(s){(0,z.default)(this,r);var e=(0,V.default)(this,(r.__proto__||K()(r)).call(this,s));return e.changeInviteRulesDialog=function(){e.setState({showDialogSettingInviteRules:!e.state.showDialogSettingInviteRules})},e.setValue=function(n){var a=n.showDialogSettingInviteRules;e.setState({showDialogSettingInviteRules:a})},e.state={currentTab:"member",showDialogSettingInviteRules:!1,showHeader:!0},e}return(0,J.default)(r,[{key:"render",value:function(){var e=this,n=this.state,a=n.currentTab,o=n.showDialogSettingInviteRules,l=n.showHeader,c=ce.Z.projectId;return t.createElement("div",{className:"orgManagementWrap"},l&&t.createElement("div",{className:"orgManagementHeader"},t.createElement("div",{className:"tabBox"},[{key:"member",label:_l("\u6210\u5458\u4E0E\u90E8\u95E8")},{key:"resigned",label:_l("\u5DF2\u79BB\u804C")}].map(function(i){var d=i.key,u=i.label;return t.createElement("div",{key:d,className:P()("tabItem",{active:a===d}),onClick:function(){return e.setState({currentTab:d})}},u)}))),t.createElement("div",{className:P()("orgManagementContent",{pAll0:a==="member"})},a==="member"?t.createElement(kr,{projectId:c,handleShowHeader:function(d){return e.setState({showHeader:d})}}):t.createElement(Br,{projectId:c})),o&&t.createElement(Hr.Z,{showDialogSettingInviteRules:o,setValue:this.setValue,projectId:c}))}}]),r}(t.Component)},82468:pt=>{pt.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA6hJREFUWEfVWd1R20AQ/taByWQGOe4glwpiKoipAFIB5hH5JVSAqQAyE5tHTAUhFWAqwFTg6yDYJpMHGG9mT1iRZMnWnc4P0YsfrN39brW/3xEqPur7dB9vqAlGC4wGEZpJlcwYgfAIwhCMoQ6DuyomyUVYXc5amPMhEbVd5Jl5gBpd6+NgaCtvBVj1pwcAzgmkbA3lvR95n890WL8pq68UYHX5R4FfrgholVVs8x4DQ9DWkT5+p9fJrQVsvMq4IqLGOmVV/mdmifOjdd5eCVhdzk6J0a0CxFaWCV19HJwVyRUCVr2peNUpqWxBZt+XpNSd+lGenlzAqjfrEuG0quEq8sw4051g6esuAZaYJdCPKsZ8yTL4SzamU4BNNZg/3/tJMJ4wal0Qj8DcIMYFiD7YHMYkYm17N1k90oD7s1tfpSvrHXEG8fMIoPdWoGG6495CJgbsOxTGYbAcbr3ZDRH2bQDLu8nDJwGPfXUwMZILuD8bEvDZGjBjpDvBrsgZwDIbEOPWVtGq97NZrnpPTSK+d7XBhD2ZPSLA/emAQIeuyorkzJCDmswLCsztKsnM4Gsd1tsG8Mf+jH2D3YQ+CTPynWybALrQKWFBm+lqPLEtX2UOKnlByjFzkwYYeABoYDaKzs5o8Z/qPbUJ865twyjMCeBOPHyfXWvKnDb+TIxvuhN8LZKJqsN86MPjMvBT1YQzlYDiDWSkw+AkC97HV4w7XVXAWXAFHc7b9FfZwyUBO7XkvDDzCliST4dBas03jaliniSBS5UYEfDJJtGKO9tyAkZT2svYi37gwUtZSxb2LNdgShvxlSfApqx5SgiejMP60matHEfKvANGjcPTpMaMn7oTCNGSelRv+qvK0JNqUNKafQ0/DDrR4c5F0oAvZyx0muHHZLGH8ZKZdpNt+bU6eAo3s3X8Gy99eGLTDSM1wEderlbeNgk4Wd+9LaG5IXHODbz93ZY136z7jsxn7hL66mWnJVFkhYFMruPLA9DTIUFWJruHgTsdBjFrukSkuHAHceMAawh5Yn7lIQWei7EDt9LGE6btZiGR8lox/h+qauEpf93P7vOnmkRZMjAG7aE2u8Jd1Nw8+dWEtrc5ozz0Ipp1oaHUlQEBAx872WrYwnaiXenKIA6P6FJm4MKLlfGtlC7QVtvLpUxqmDHXXtT1NvAbeoC767yaxLA2JPI8ZC4WhStz5OMkqUA02PjFYiH4OVogc4fXyHo/IlnwKCQLahi6gEza/Quk0M7GxVKLBAAAAABJRU5ErkJggg=="}}]);
