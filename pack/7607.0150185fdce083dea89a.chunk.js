"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[7607],{97607:(sr,vt,b)=>{b.r(vt),b.d(vt,{default:()=>lr});var we={};b.r(we),b.d(we,{addColumnRules:()=>Ht,clearColumnRules:()=>Le,copyControlRules:()=>Xt,deleteControlRules:()=>zt,grabControlRules:()=>Qt,loadColumnRules:()=>Mt,saveControlRules:()=>Vt,selectColumnRules:()=>lt,updateActiveTab:()=>Gt,updateError:()=>ot,updateRuleAttr:()=>Jt,updateSelectRule:()=>Yt});var L=b(88239),Lt=b(85105),ne=b.n(Lt),ae=b(99663),re=b(22600),ee=b(49135),le=b(93196),e=b(67294),Ft=b(23156),Pt=b(49611),Zt=b.n(Pt),Ne=b(25273),F=b(33867),De=b(36021),Bt=b(93967),Z=b.n(Bt),At=function(d){(0,le.default)(n,d);function n(){return(0,ae.default)(this,n),(0,ee.default)(this,(n.__proto__||ne()(n)).apply(this,arguments))}return(0,re.default)(n,[{key:"render",value:function(){var t=this.props.match,a=t===void 0?{params:{}}:t,i=a.params,l=i.worksheetId,r=i.type,o=r===void 0?"":r;return e.createElement(Ne.Z,{className:"sidenavBox"},e.createElement("div",{className:"title"},_l("\u57FA\u7840\u8BBE\u7F6E")),e.createElement("ul",null,e.createElement("li",{className:Z()({current:!o||o==="submitForm"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/submitForm")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"task_alt",className:"aliasIcon"}),e.createElement("span",{className:"flex mLeft12 Bold"},_l("\u63D0\u4EA4\u8868\u5355"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u8BBE\u7F6E\u63D0\u4EA4\u8868\u5355\u7684\u6587\u6848\u548C\u64CD\u4F5C"))),e.createElement("li",{className:Z()({current:o==="alias"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/alias")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"workflow_write",className:"aliasIcon"}),e.createElement("span",{className:"flex mLeft12 Bold"},_l("\u6570\u636E\u540D\u79F0"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u8BBE\u7F6E\u6807\u9898\u5B57\u6BB5\u3001\u8BB0\u5F55\u540D\u79F0\u3001\u5B57\u6BB5\u522B\u540D"))),e.createElement("li",{className:Z()({current:o==="functionalSwitch"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/functionalSwitch")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"toggle_off",className:"aliasIcon"}),e.createElement("span",{className:"flex mLeft12 Bold"},_l("\u529F\u80FD\u5F00\u5173"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u8BBE\u7F6E\u542F\u7528\u7684\u7CFB\u7EDF\u529F\u80FD\u548C\u4F7F\u7528\u8303\u56F4")))),e.createElement("div",{className:"title"},_l("\u9AD8\u7EA7\u8BBE\u7F6E")),e.createElement("ul",null,e.createElement("li",{className:Z()({current:o==="display"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/display")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"task-list",className:"displayIcon"}),e.createElement("span",{className:"flex mLeft12 Bold"},_l("\u4E1A\u52A1\u89C4\u5219"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u5F53\u6EE1\u8DB3\u6761\u4EF6\u65F6\uFF0C\u53D8\u66F4\u5B57\u6BB5\u7684\u72B6\u6001\u6216\u63D0\u793A\u9519\u8BEF"))),e.createElement("li",{className:Z()({current:o==="customBtn"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/customBtn")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"custom_actions",className:"printIcon"}),e.createElement("span",{className:"mLeft12 Bold"},_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u81EA\u5B9A\u4E49\u5728\u67E5\u770B\u8BB0\u5F55\u65F6\u53EF\u6267\u884C\u7684\u64CD\u4F5C"))),e.createElement("li",{className:Z()({current:o==="printTemplate"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/printTemplate")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"print",className:"printIcon"}),e.createElement("span",{className:"mLeft12 Bold"},_l("\u6253\u5370\u6A21\u677F"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u81EA\u5B9A\u4E49\u8BB0\u5F55\u6253\u5370\u65F6\u7684\u6837\u5F0F"))),e.createElement("li",{className:Z()({current:o==="indexSetting"}),onClick:function(){(0,De.T8)("/worksheet/formSet/edit/"+l+"/indexSetting")}},e.createElement("div",{className:""},e.createElement(F.Z,{icon:"db_index",className:"printIcon"}),e.createElement("span",{className:"mLeft12 Bold"},_l("\u68C0\u7D22\u52A0\u901F"))),e.createElement("p",{className:"mTop5 Font12"},_l("\u81EA\u5B9A\u4E49\u5DE5\u4F5C\u8868\u7D22\u5F15\u4EE5\u52A0\u5FEB\u68C0\u7D22\u901F\u5EA6")))))}}]),n}(e.Component);const $t=At;var Ot=function(d){(0,le.default)(n,d);function n(){return(0,ae.default)(this,n),(0,ee.default)(this,(n.__proto__||ne()(n)).apply(this,arguments))}return(0,re.default)(n,[{key:"render",value:function(){return e.createElement(Ne.Z,{className:"validationBox"},e.createElement("p",{style:{lineHeight:document.body.clientHeight-350+"px"}},_l("\u529F\u80FD\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\u2026")))}}]),n}(e.Component);const Wt=Ot;var ke=b(54208),ir=b(48659),gt=b(1825),Xe=b(97553),rt=b(66946),Qe=b(74127),Ye=b(96841),ue=b(88106),jt=b(52945),xt=b.n(jt),A=b(45231),z=b(5420),Ut=b(96486),N=b.n(Ut);function Mt(d){var n=d.worksheetRuleControls,c=d.worksheetInfo,t=N().get(c,"worksheetId");return function(a,i){a({type:"COLUMNRULES_FETCH_START"}),a({type:"WORKSHEET_RULE_CONTROLS",data:n}),a({type:"WORKSHEET_INFO",data:c}),a({type:"COLUMNRULES_WORKSHEETID",data:t}),A.Z.getControlRules({worksheetId:t,type:1}).then(function(l){a({type:"COLUMNRULES_LOAD_SUCCESS"}),a({type:"COLUMNRULES_LIST",data:l.length>0?l.map(function(r){return(0,L.default)({},r,{name:r.name||(0,z.sd)(l,0)})}):[]}),a(Le())}).then(function(l){})}}function Ht(){return function(d,n){var c=n().formSet,t=c.columnRulesListData,a=t===void 0?[]:t,i=c.activeTab,l=xt()({},z.F$);i===1&&(l.type=1,l.checkType=0,l.hintType=0),l.name=(0,z.sd)(a,i),d(lt(l))}}function lt(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(n){n({type:"UPDATE_SELECT_COLUMNRULES_LIST",data:N().cloneDeep(d)})}}function Gt(d){return function(n){n({type:"UPDATE_ACTIVE_TAB",data:d})}}function Vt(){return function(d,n){var c=n().formSet,t=c.worksheetId,a=t===void 0?"":t,i=c.selectRules,l=i===void 0?{}:i,r=c.columnRulesListData,o=r===void 0?[]:r,s=c.worksheetControls,h=c.activeTab,f=l.filters,w=f===void 0?[]:f,g=l.name,I=g===void 0?"":g,p=l.ruleItems,k=p===void 0?[]:p;if(!k.length&&!w.length){d(Le());return}var y=(0,z.cx)(w,s),v=k.every(function(m){return!(0,z.WT)(m)});if(!I||!y.length||!(0,z.Gy)(y)||!k.length||!v){w.length>0&&d(ot("filters",w)),k.length>0&&k.map(function(m,E){return d(ot("action",m,E))}),alert(_l("\u8BF7\u5B8C\u5584\u89C4\u5219\u5185\u5BB9"),3);return}A.Z.saveControlRule((0,L.default)({},l,{filters:(0,z.XX)(w),ruleId:l.ruleId.indexOf("-")>=0?"":l.ruleId,worksheetId:a})).then(function(m){if(m){var E=l.ruleId.indexOf("-")>=0?o.concat((0,L.default)({},l,{ruleId:m})):o.map(function(x){return x.ruleId===l.ruleId?(0,L.default)({},l,{filters:w}):x});d(Le()),d({type:"COLUMNRULES_LIST",data:E}),alert(_l("\u4FDD\u5B58\u6210\u529F"))}})}}function Le(){return function(d){d(lt({})),d({type:"COLUMN_RULELIST_ERROR",data:{}})}}function zt(d){return function(n,c){var t=c().formSet,a=t.worksheetId,i=t.columnRulesListData,l=i===void 0?[]:i;A.Z.saveControlRule({ruleId:d.ruleId,editAttrs:["delete"],worksheetId:a}).then(function(){var r=l.filter(function(o){return o.ruleId!==d.ruleId});n(Le()),n({type:"COLUMNRULES_LIST",data:r}),alert(_l("\u5220\u9664\u6210\u529F"))})}}function Xt(d){return function(n,c){var t=c().formSet,a=t.worksheetId,i=t.columnRulesListData,l=i===void 0?[]:i;A.Z.saveControlRule({editAttrs:["copy"],ruleId:d.ruleId,worksheetId:a}).then(function(r){if(r){var o=N().findIndex(l,function(s){return s.ruleId===d.ruleId});l.splice(o+1,0,(0,L.default)({},d,{name:d.name+"-\u590D\u5236",ruleId:r})),n(Le()),n({type:"COLUMNRULES_LIST",data:l}),alert(_l("\u590D\u5236\u6210\u529F"))}})}}function Qt(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return function(n,c){var t=c().formSet,a=t.worksheetId,i=d.map(function(l){return l.ruleId});n(Le()),n({type:"COLUMNRULES_LIST",data:d}),A.Z.sortControlRules({ruleIds:i,worksheetId:a})}}function Yt(d,n){return function(c,t){var a=t().formSet,i=a.selectRules,l=i===void 0?{}:i;c({type:"UPDATE_SELECT_COLUMNRULES_LIST",data:(0,L.default)({},l,(0,ue.default)({},d,n))})}}function ot(d,n,c){return function(t,a){var i=a().formSet,l=i.ruleError,r=l===void 0?{}:l,o=i.activeTab;if(d==="filters"){var s=[];n.forEach(function(f){var w=(f.groupFilters||[]).map(function(g){return(0,z.O4)(g)}).filter(N().identity);!N().isEmpty(w)&&s.push(w)}),t({type:"COLUMN_RULELIST_ERROR",data:(0,L.default)({},r,{filterError:s})})}if(d==="action"){var h=r.actionError||{};n?h[c]=(0,z.WT)(n):delete h[c],t({type:"COLUMN_RULELIST_ERROR",data:(0,L.default)({},r,{actionError:h})})}}}function Jt(d,n,c){return function(t,a){var i,l=a().formSet,r=l.worksheetId,o=l.columnRulesListData,s=o===void 0?[]:o;A.Z.saveControlRule((i={},(0,ue.default)(i,d,n),(0,ue.default)(i,"ruleId",c),(0,ue.default)(i,"editAttrs",[d]),(0,ue.default)(i,"worksheetId",r),i)).then(function(h){if(h){var f=s.map(function(w){return w.ruleId===c?xt()({},w,(0,ue.default)({},d,n)):w});t({type:"COLUMNRULES_LIST",data:f})}})}}var ve=b(20845),cr=b(97373),be=b(94055),dr=b(34279),Je=b(64749),wt=b(90343),Te=b(70801),ur=b(67272),st=b(51024),Et=b(73935),Kt=st.default.TextArea,qt=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.state={errorMsg:t.props.value||""},t}return(0,re.default)(n,[{key:"render",value:function(){var t=this,a=this.state.errorMsg,i=this.props,l=i.onClose,r=i.onOk;return e.createElement(Te.Z,{title:_l("\u8BBE\u7F6E\u9519\u8BEF\u63D0\u793A"),className:"ruleWarnMsgDialog",visible:!0,footer:null,width:480,overlayClosable:!1,onCancel:function(){return l()}},e.createElement("div",{className:"ruleErrorDialog"},e.createElement("span",{className:"Gray_9e"},_l("\u5728\u8F93\u5165\u6216\u63D0\u4EA4\u8BB0\u5F55\u65F6\u6821\u9A8C\u5E76\u63D0\u793A\u9519\u8BEF\uFF0C\u9519\u8BEF\u65F6\u4E0D\u5141\u8BB8\u63D0\u4EA4")),e.createElement("span",{className:"Gray Bold mTop24 mBottom12 Block"},_l("\u63D0\u793A\u5185\u5BB9")),e.createElement(Kt,{value:a,rows:4,onChange:function(s){return t.setState({errorMsg:s.target.value})},placeholder:_l("\u8BF7\u8F93\u5165\u63D0\u793A\u5185\u5BB9...")}),e.createElement("div",{className:"ruleFooter"},e.createElement("button",{type:"button",className:"ming Button Button--link Gray_9e",onClick:function(){return l()}},_l("\u53D6\u6D88")),e.createElement("button",{type:"button",disabled:!a,className:Z()("ming Button",a?"Button--primary":"disabled"),onClick:function(){r(a),l()}},_l("\u4FDD\u5B58")))))}}]),n}(e.Component);function en(d){var n=document.createElement("div");document.body.appendChild(n);function c(){var t=setTimeout(function(){var a=Et.unmountComponentAtNode(n);a&&n.parentElement&&(n.parentElement.removeChild(n),clearTimeout(t),N().isFunction(d.onCancel)&&d.onCancel())},0)}return Et.render(e.createElement(qt,(0,L.default)({onClose:c},d)),n),c}var tn=b(39612),Ke=b(26358),Ee=b(86674),$e=b(31261),nn=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.setErrorMsg=function(a,i){var l=t.props,r=l.selectRules,o=r===void 0?{}:r,s=l.updateSelectRule,h=l.updateError,f=o.ruleItems,w=f===void 0?[]:f;en({value:a.message,onOk:function(I){var p=w[i]||{};p.message=I,w.splice(i,1,p),s("ruleItems",w),h("action","",i)}})},t.renderCondition=function(){var a=t.props,i=a.selectRules,l=a.projectId,r=a.worksheetControls,o=a.updateSelectRule,s=a.updateError,h=a.ruleError,f=h===void 0?{}:h,w=a.appId,g=a.sheetSwitchPermit,I=r.filter(function(p){return!N().includes(["wfname","wfcuaids","wfcaid","wfctime","wfrtime","wfftime","rowid"],p.controlId)}).map(Ke.BM);return e.createElement("div",{className:"conditionContainer"},e.createElement("div",{className:"Font14 Bold"},_l("\u5F53\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u65F6")),e.createElement(tn.Z,{canEdit:!0,feOnly:!0,isRules:!0,version:i.ruleId,supportGroup:!0,projectId:l,appId:w,from:"rule",columns:I,sheetSwitchPermit:g,currentColumns:I,showCustom:!0,conditions:i.filters,filterError:f.filterError||[],onConditionsChange:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],y=k.some(function(v){return v.groupFilters})?k:[{spliceType:2,isGroup:!0,groupFilters:k}];o("filters",y),(N().flatten(f.filterError)||[]).filter(function(v){return v}).length&&s("filters",y)}}))},t.renderAction=function(){var a=t.props,i=a.selectRules,l=i===void 0?{}:i,r=a.updateSelectRule,o=a.worksheetControls,s=a.ruleError,h=s===void 0?{}:s,f=a.updateError,w=t.state.visible,g=l.ruleItems,I=g===void 0?[]:g,p=z.qx.filter(function(y){return y.value!==6});I.some(function(y){return y.type===7})&&(p=p.filter(function(y){return y.value!==7}));var k=o.filter(function(y){return!N().includes(Ee.Hp.concat(Ee.x0),y.controlId)});return e.createElement("div",{className:"conditionContainer mTop0"},e.createElement("div",{className:"Font14 Bold"},_l("\u5219\u6267\u884C\u52A8\u4F5C")),I.map(function(y,v){var m=(h.actionError||{})[v]||!1;return e.createElement("div",{className:"actionItemCon"},e.createElement(Je.default,{className:Z()("ruleListSelect",{flexItem:N().includes([7],y.type)}),dropdownClassName:"ruleListSelectDropdown",value:(0,z.P6)(y.type),options:p,suffixIcon:e.createElement(F.Z,{icon:"arrow-down-border Font14"}),onChange:function(x){var u=(0,L.default)({},I[v]);u.type=x,N().includes([7],x)&&(u.controls=[],u.message=""),x===6?u.controls=[]:u.message="",N().includes([3,4,5],x)&&(u=(0,z.rQ)(u,o,x)),I.splice(v,1,u),r("ruleItems",I)}}),N().includes([7],y.type)?null:y.type===6?e.createElement("div",{className:Z()("errorInputBox Hand",{errorBorder:m})},y.message?e.createElement("span",{className:"flexRow Gray_75 clearfix LineHeight36"},e.createElement("span",{className:"ellipsis"},y.message),e.createElement("i",{className:"icon-edit mLeft6 Right TxtMiddle LineHeight36 Hover_49",onClick:function(){return t.setErrorMsg(y,v)}})):e.createElement("span",{className:"ThemeColor3 TxtCenter hoverColor",onClick:function(){return t.setErrorMsg(y,v)}},e.createElement("i",{className:"icon-edit mRight6"}),_l("\u8BBE\u7F6E\u63D0\u793A"))):e.createElement(wt.Z,{actionError:m,actionType:y.type,values:y.controls,dropDownData:k,onChange:function(x,u){var S=(0,L.default)({},I[v]);S[x]=u,I.splice(v,1,S),r("ruleItems",I),f("action","",v)}}),e.createElement(F.Z,{icon:"delete1",className:"Gray_9e deleteBtn Hand",onClick:function(){I.splice(v,1),r("ruleItems",I),f("action","",v)}}))}),e.createElement($e.Z,{popupVisible:w,onPopupVisibleChange:function(v){t.setState({visible:v})},popupClassName:"addConditionTrigger",action:["click"],mouseEnterDelay:.1,popupAlign:{points:["tl","bl"],offset:[0,4]},popup:function(){return e.createElement(e.Fragment,null,p.map(function(v){return e.createElement("div",{onClick:function(){return r("ruleItems",I.concat((0,L.default)({},z.j1,{type:v.value})))}},v.label,v.warnText&&e.createElement(be.default,{placement:"bottom",title:v.warnText},e.createElement("i",{className:"icon-info_outline Gray_9e Font16"})))}))},getPopupContainer:function(){return t.addAction}},e.createElement("div",{className:"addCondition",ref:function(v){return t.addAction=v}},e.createElement(F.Z,{icon:"plus",className:"mRight8"}),_l("\u6DFB\u52A0\u52A8\u4F5C"))))},t.renderPrompt=function(){var a=t.props,i=a.selectRules,l=i===void 0?{}:i,r=a.updateSelectRule,o=a.updateError,s=a.ruleError,h=a.worksheetControls,f=h===void 0?[]:h,w=a.activeTab,g=l.hintType,I=g===void 0?0:g,p=l.checkType,k=p===void 0?0:p,y=l.ruleItems,v=y===void 0?[]:y,m=v[0]||{},E=m.controls,x=E===void 0?[]:E,u=m.message,S=u===void 0?"":u,R=N().get(s,"actionError[0]"),C=(0,z.EV)(f);return e.createElement("div",{className:"conditionContainer mTop0"},e.createElement("div",{className:"Font14 Bold mBottom20"},_l("\u5219\u63D0\u793A\u9519\u8BEF")),e.createElement("div",{className:"Font14 mBottom12"},_l("\u63D0\u793A\u5185\u5BB9"),e.createElement("span",{className:"Red"},"*")),e.createElement("input",{className:Z()("ruleNameInput",{errorBorder:R&&!S}),value:t.state.message,placeholder:_l("\u8BF7\u8F93\u5165\u63D0\u793A\u5185\u5BB9"),onChange:function(j){return t.setState({message:j.target.value})},onBlur:function(j){var X=[{controls:x,message:j.target.value,type:6}];r("ruleItems",X),R&&o("action",X[0],0)}}),e.createElement("div",{className:"mTop24"},e.createElement("div",{className:"Font14 mBottom12"},_l("\u6307\u5B9A\u5B57\u6BB5")),e.createElement(wt.Z,{actionType:6,values:x,activeTab:w,dropDownData:C,onChange:function(j,X){var me=[{controls:X,message:S,type:6}];r("ruleItems",me)}})),e.createElement("div",{className:"mTop24"},e.createElement("div",{className:"Font14 Bold mBottom12"},_l("\u5176\u4ED6")),e.createElement(ve.Z,{text:e.createElement("span",null,_l("\u5728\u5B57\u6BB5\u8F93\u5165\u65F6\u5B9E\u65F6\u63D0\u793A"),e.createElement(be.default,{placement:"bottom",title:_l("\u52FE\u9009\u540E\uFF0C\u5728\u6761\u4EF6\u5B57\u6BB5\u8F93\u5165\u548C\u5931\u7126\u65F6\u5B9E\u65F6\u63D0\u793A\u9519\u8BEF\u3002\u53D6\u6D88\u52FE\u9009\u540E\uFF0C\u53EA\u4F1A\u5728\u6700\u540E\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u63D0\u793A\u9519\u8BEF\u3002")},e.createElement("i",{className:"icon-help Gray_9e Font16 Hand mLeft6"}))),checked:I===0,onClick:function(j){r("hintType",j?1:0)}}),e.createElement(ve.Z,{className:"mTop12",text:e.createElement("span",null,_l("\u4FDD\u5B58\u6570\u636E\u5230\u670D\u52A1\u5668\u65F6\u518D\u6B21\u6821\u9A8C"),e.createElement(F.Z,{icon:"beta1",className:"mRight6 mLeft6",style:{background:"#fff",color:"#43BD36"}}),e.createElement(be.default,{placement:"bottom",title:e.createElement("span",null,_l("\u52FE\u9009\u540E\uFF0C\u9664\u4E86\u5BF9\u8868\u5355\u5DF2\u52A0\u8F7D\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u5916\uFF0C\u5728\u6570\u636E\u4FDD\u5B58\u65F6\u4F1A\u518D\u6B21\u5BF9\u670D\u52A1\u5668\u4E2D\u7684\u6700\u65B0\u6570\u636E\u8FDB\u884C\u6821\u9A8C\uFF0C\u786E\u4FDD\u6570\u636E\u4E25\u683C\u9075\u5FAA\u4E1A\u52A1\u89C4\u5219\u7EA6\u675F\u3002"),e.createElement("br",null),_l("\u5982\uFF1A\u5728\u51FA\u5E93\u573A\u666F\u4E2D\uFF0C\u7531\u4E8E\u591A\u4EBA\u63D0\u4EA4\uFF0C\u5728\u586B\u5199\u671F\u95F4\u5B9E\u9645\u5E93\u5B58\u6570\u53EF\u80FD\u4F1A\u5C0F\u4E8E\u8868\u5355\u663E\u793A\u7684\u5E93\u5B58\u6570\u65F6\uFF0C\u901A\u8FC7\u6B64\u65B9\u5F0F\u53EF\u6309\u7167\u670D\u52A1\u5668\u7684\u5B9E\u9645\u5E93\u5B58\u6570\u8FDB\u884C\u6821\u9A8C\uFF0C\u786E\u4FDD\u5E93\u5B58\u6570\u4E0D\u4F1A\u4E3A\u8D1F\u3002"),e.createElement("br",null),_l("\u6CE8\u610F\uFF1A\u5F00\u542F\u540E\u6821\u9A8C\u901F\u5EA6\u4F1A\u53D8\u6162\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u573A\u666F\u5408\u7406\u4F7F\u7528\u3002"))},e.createElement("i",{className:"icon-help Gray_9e Font16 Hand"}))),checked:k===1,onClick:function(j){r("checkType",j?0:1)}})))},t.renderContent=function(){var a=t.props.activeTab;if(a===0)return t.renderAction();if(a===1)return t.renderPrompt()},t.state={name:(c.selectRules||{}).name||"",message:N().get(c.selectRules,"ruleItems[0].message")||"",visible:!1},t}return(0,re.default)(n,[{key:"componentWillReceiveProps",value:function(t){t.selectRules.name!==this.state.name&&this.setState({name:t.selectRules.name}),N().get(t.selectRules,"ruleItems[0].message")!==this.state.message&&this.setState({message:N().get(t.selectRules,"ruleItems[0].message")})}},{key:"render",value:function(){var t=this,a=this.props,i=a.selectRules,l=i===void 0?{}:i,r=a.updateSelectRule;return e.createElement(Ne.Z,{className:"editRuleBox"},e.createElement("div",{className:"pTop20 pLeft24 pRight24 pBottom20 box-sizing"},e.createElement("div",{className:"Font14 Bold"},_l("\u89C4\u5219\u540D\u79F0")),e.createElement("input",{className:"mTop12 ruleNameInput",value:this.state.name,onChange:function(s){return t.setState({name:s.target.value})},onBlur:function(s){var h=s.target.value?s.target.value:l.name;r("name",h)}}),this.renderCondition(),this.renderContent()))}}]),n}(e.Component),an=function(n){return{worksheetControls:n.formSet.worksheetRuleControls,columnRulesListData:n.formSet.columnRulesListData,selectRules:n.formSet.selectRules,projectId:n.formSet.worksheetInfo.projectId,appId:n.formSet.worksheetInfo.appId,ruleError:n.formSet.ruleError,sheetSwitchPermit:n.formSet.worksheetInfo.switches,activeTab:n.formSet.activeTab}},rn=function(n){return(0,Qe.DE)((0,L.default)({},we,we),n)};const ln=(0,Ye.$j)(an,rn)(nn);var ce=b(26581);function on(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(N().isEmpty(d))return"";var t=c.map(Ke.BM),a=d.map(function(l){return(0,L.default)({},l,{groupFilters:(l.groupFilters||[]).map(function(r){var o=(0,z.cm)(t,[r],!0,t);if(r.dataType===29){var s=N().find(t||[],function(h){return h.controlId===r.controlId});(0,z.gj)(s,r)&&(o=[(0,L.default)({},o[0],{name:_l("\u5B57\u6BB5\u5DF2\u5220\u9664")})])}return o[0]||{}})})}),i=function(r,o){return e.createElement("span",{key:o},o?e.createElement("span",{className:"mLeft10 mRight10 gray_9e Font13"},r.spliceType===2?_l("\u6216"):_l("\u4E14")):null,r.id?e.createElement(e.Fragment,null,r.name,e.createElement("span",{className:"mLeft5 mRight5"},(r.type||{}).text),(r.value||{}).type==="dynamicSource"?r.value.data.map(function(s){return s.name||_l("\u5B57\u6BB5\u5DF2\u5220\u9664")}):e.createElement("span",{className:"WordBreak"},r.value)):_l("\u5B57\u6BB5\u5DF2\u5220\u9664"))};return e.createElement(e.Fragment,null,a.map(function(l,r){return e.createElement("span",{className:Z()({Gray_bd:n})},a.length>1?e.createElement("span",{className:"gray_9e mRight2"},"("):null,(l.groupFilters||[]).map(function(o,s){return i(o,s)}),a.length>1?e.createElement("span",{className:"gray_9e mLeft2"},")"):null,r!==a.length-1?e.createElement("span",{className:"mLeft10 mRight10"},l.spliceType===2?_l("\u6216"):_l("\u4E14")):null)}))}var sn=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.renderActionItem=function(a,i){var l=t.props.worksheetControls,r=N().includes([7],a.type)?"":(0,z.P6)(a.type),o="";if(N().includes([7],a.type))o=(0,z.P6)(a.type);else{var s=(0,z.gc)(l,a.controls,a.type)||[];a.type===6?o=N().isEmpty(s)?a.message:s.map(function(h){return h.name}).join("\u3001")+"\uFF1A"+a.message:o=s.map(function(h){return h.name}).join(", ")}return e.createElement("span",{className:"ruleItemTextRow mTop10"},e.createElement("span",{className:Z()("leftLabel",{Gray_bd:i})},r),e.createElement("span",{className:Z()("rightLabel WordBreak",{Gray_bd:i})},o))},t.state={showDeleteBox:null,name:N().get(c,"ruleData.name")||""},t}return(0,re.default)(n,[{key:"componentWillReceiveProps",value:function(t){N().get(t,"ruleData.name")!==this.state.name&&this.setState({name:N().get(t,"ruleData.name")})}},{key:"render",value:function(){var t=this,a=this.props,i=a.selectColumnRules,l=a.deleteControlRules,r=a.copyControlRules,o=a.updateRuleAttr,s=a.worksheetControls,h=a.selectRules,f=h===void 0?{}:h,w=a.ruleData,g=w===void 0?{}:w,I=a.columnRulesListData,p=this.state,k=p.showDeleteBox,y=p.name,v=g.filters,m=v===void 0?[]:v,E=g.ruleItems,x=E===void 0?[]:E,u=g.ruleId,S=g.disabled,R=g.type;return e.createElement("div",{className:Z()("ruleItemCon",{active:f.ruleId===u,disabled:S}),onClick:function(T){(0,z.ep)(I,f)||i(g)}},e.createElement("div",{className:"ruleNameInputBox",onClick:function(T){return T.stopPropagation()}},e.createElement("input",{className:Z()("ruleNameInput",{Gray_bd:S}),style:{width:(0,z.HW)(y)},value:y,onFocus:function(T){T.target&&(T.target.style.width=(0,z.HW)(y)+"px")},onChange:function(T){return t.setState({name:T.target.value})},onBlur:function(T){o("name",y||g.name,u)}})),e.createElement("span",{className:Z()("ruleItemTextRow",{Gray_bd:S})},e.createElement("span",{className:"leftLabel"},_l("\u5F53\u6EE1\u8DB3\u6761\u4EF6")),e.createElement("span",{className:"rightLabel"},on(m,S,s),e.createElement("span",{className:"mLeft20 gray_9e"},_l("\u65F6")))),x.map(function(C){return t.renderActionItem(C,S)}),e.createElement("div",{className:"ruleItemOptions",onClick:function(T){return T.stopPropagation()}},e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,S?_l("\u505C\u7528"):_l("\u5F00\u542F"))},e.createElement(F.Z,{className:"Font24 Hand",icon:g.disabled?"toggle_off":"toggle_on",style:{color:g.disabled?"#bdbdbd":"#43bd36"},onClick:function(){return o("disabled",!g.disabled,u)}})),e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u590D\u5236"))},e.createElement(F.Z,{icon:"copy",className:"Font16 Hand Gray_9e Hover_49",onClick:function(){return r(g)}})),e.createElement($e.Z,{popupVisible:k===u,onPopupVisibleChange:function(T){t.setState({showDeleteBox:T?u:null})},action:["click"],mouseEnterDelay:.1,popupAlign:{points:["tl","tr"],offset:[-30,25],overflow:{adjustX:1,adjustY:2}},popup:e.createElement("div",{className:"DropdownDeleteRuleTrigger"},e.createElement("div",{className:"title"},_l("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89C4\u5219\uFF1F")),e.createElement("div",{className:"deleteGroupBtns"},e.createElement("div",{className:"Gray_9e Hand",onClick:function(){return t.setState({showDeleteBox:null})}},_l("\u53D6\u6D88")),e.createElement("div",{className:"deleteBtn",onClick:function(){l(g),t.setState({showDeleteBox:null})}},_l("\u5220\u9664"))))},e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u5220\u9664"))},e.createElement(F.Z,{icon:"delete1",className:"Font16 Red Hand RedHover"})))))}}]),n}(e.Component),cn=function(n){return{worksheetControls:n.formSet.worksheetRuleControls,selectRules:n.formSet.selectRules,columnRulesListData:n.formSet.columnRulesListData}},dn=function(n){return(0,Qe.DE)((0,L.default)({},we,we),n)};const un=(0,Ye.$j)(cn,dn)(sn);var _e=b(95742),It=[{text:_l("\u4EA4\u4E92"),value:0},{text:_l("\u9A8C\u8BC1"),value:1}],mn=(0,_e.W8)(function(d){var n=d.value;return e.createElement("div",null,e.createElement("div",{className:"ruleDrabItemContainer"},e.createElement("div",{className:Z()("grabIcon")},e.createElement(F.Z,{icon:"drag",className:"TxtMiddle Font14"})),e.createElement(un,{ruleData:n})))}),pn=(0,_e.JN)(function(d){var n=d.list;return e.createElement("div",{className:"flex flexColumn"},n.map(function(c,t){return e.createElement(mn,{value:c,key:t,index:t,sortIndex:t})}))}),fn=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.state={},t}return(0,re.default)(n,[{key:"renderCon",value:function(){var t=this.props,a=t.columnRulesListData,i=a===void 0?[]:a,l=t.grabControlRules,r=t.selectRules,o=r===void 0?{}:r,s=t.activeTab,h=(o.ruleId||"").indexOf("-")>=0?i.concat(o):i,f=h.filter(function(w){return w.type===s});return f.length?e.createElement(Ne.Z,{className:"rulesCon"},e.createElement(pn,{list:f,distance:5,helperClass:"columnRuleSortableList",onSortEnd:function(g){var I=g.oldIndex,p=g.newIndex;l((0,_e.Rp)(f,I,p))}})):e.createElement("div",{className:"emptyColumnRules"},e.createElement("span",{className:"emptyIcon"},e.createElement(F.Z,{icon:"list",className:"Gray_bd"})),e.createElement("span",{className:"Font15 Gray_9e mTop20"},_l("\u6682\u65E0\u4E1A\u52A1\u89C4\u5219")))}},{key:"render",value:function(){var t=this.props,a=t.addColumnRules,i=t.saveControlRules,l=t.clearColumnRules,r=t.selectRules,o=r===void 0?{}:r,s=t.activeTab,h=t.updateActiveTab,f=t.columnRulesListData,w=(o.ruleId||"").indexOf("-")>=0,g=N().get(N().find(It,function(I){return I.value===s}),"text");return e.createElement(e.Fragment,null,e.createElement("div",{className:"columnRuleTitle"},e.createElement("div",{className:"flexCenter"},e.createElement("span",{className:"Font17 Bold flex"},_l("\u4E1A\u52A1\u89C4\u5219")),e.createElement("div",{className:"addRules",onClick:function(){return a()}},e.createElement(F.Z,{icon:"plus",className:"mRight3"}),_l("\u6DFB\u52A0\u89C4\u5219"))),e.createElement("div",{className:"columnRuleTabs"},It.map(function(I){return e.createElement("div",{className:Z()("tabItem",{active:s===I.value}),onClick:function(){(0,z.ep)(f,o)||(o.ruleId&&l(),h(I.value))}},I.text)})),e.createElement("div",{className:"columnRuleDesc"},e.createElement("span",{className:"Gray_9e"},s===0?_l("\u4EA4\u4E92\u89C4\u5219\u53EF\u4EE5\u6839\u636E\u6761\u4EF6\u5B9E\u65F6\u63A7\u5236\u6307\u5B9A\u5B57\u6BB5\u7684\u663E\u9690\u3001\u662F\u5426\u53EF\u7F16\u8F91\u3001\u662F\u5426\u5FC5\u586B\u7B49\u5C5E\u6027\u3002"):_l("\u9A8C\u8BC1\u89C4\u5219\u53EF\u4EE5\u89C4\u8303\u6570\u636E\u7684\u5F55\u5165\u3002\u5F53\u6EE1\u8DB3\u6761\u4EF6\u65F6\uFF0C\u7981\u6B62\u4FDD\u5B58\u8BB0\u5F55\u5E76\u5BF9\u6307\u5B9A\u5B57\u6BB5\u63D0\u793A\u9519\u8BEF\u3002")),e.createElement(rt.Z,{type:3,text:_l("\u5E2E\u52A9"),href:"https://help.mingdao.com/worksheet/business-rule"}))),this.renderCon(),o.ruleId&&e.createElement(gt.Z,{className:"columnRulesDrawerContainer",width:640,title:e.createElement("span",null,w?_l("\u65B0\u5EFA%0\u89C4\u5219",g):_l("\u7F16\u8F91%0\u89C4\u5219",g)),placement:"right",mask:!1,onClose:function(){return l()},visible:!0,getContainer:!1,closeIcon:e.createElement("i",{className:"icon-close Font20"}),footer:e.createElement("div",{className:"ruleFooter"},e.createElement(Xe.ZP,{className:"mRight15 saveBtn",size:"medium",onClick:function(){return i()}},_l("\u786E\u5B9A")),e.createElement(Xe.ZP,{size:"medium",type:"secondary",className:"closeBtn",onClick:function(){return l()}},_l("\u53D6\u6D88")))},e.createElement(ln,null)))}}]),n}(e.Component),hn=function(n){return{columnRulesListData:n.formSet.columnRulesListData,selectRules:n.formSet.selectRules,activeTab:n.formSet.activeTab}},vn=function(n){return(0,Qe.DE)((0,L.default)({},we,we),n)};const gn=(0,Ye.$j)(hn,vn)(fn);var xn=function(d){(0,le.default)(n,d);function n(){return(0,ae.default)(this,n),(0,ee.default)(this,(n.__proto__||ne()(n)).apply(this,arguments))}return(0,re.default)(n,[{key:"componentDidMount",value:function(){var t=this.props.loadColumnRules;t(this.props)}},{key:"render",value:function(){var t=this.props.formSet;return e.createElement(e.Fragment,null,t.loading?e.createElement(ke.Z,null):e.createElement("div",{className:"displayRulesCon"},e.createElement(gn,this.props)))}}]),n}(e.Component),wn=function(n){return{formSet:n.formSet}},En=function(n){return(0,Qe.DE)(we,n)};const In=(0,Ye.$j)(wn,En)(xn);var it=b(51197),V=b(12424),Cn=b(94942),Ct=b.n(Cn),yn=b(36803),qe=b(15405),Nn=b(97238),Fe=b(15577),kn=b(49365),yt,ct={Word:"docx",Excel:"xlsx"},et={Word:"Word",Excel:"Xlsx"},bn=(0,qe.Z)(yt=function(d){(0,le.default)(n,d);function n(c){var t=this;(0,ae.default)(this,n);var a=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return a.setData=function(i){var l=i||a.props,r=l.printData,o=r===void 0?[]:r,s=l.templateId,h=o.find(function(f){return f.id===s})||[];a.setState({templateName:h.name,fileName:h.formName,hasChange:!1,allowDownloadPermission:h.allowDownloadPermission||0}),a.createUploader(),a.con.addEventListener("dragover",function(f){f.stopPropagation(),f.preventDefault(),f.dataTransfer.dropEffect="copy"}),a.con.addEventListener("drop",function(f){f.stopPropagation(),f.preventDefault()},!1)},a.uploaderDestroy=function(){a.uploader&&a.uploader.destroy()},a.editDownload=function(){var i=a.state.allowDownloadPermission;a.setState({allowDownloadPermission:!i,allowDownloadChange:!0})},a.onOk=(0,yn.Z)(Ct().mark(function i(){var l,r,o,s,h,f,w,g,I,p,k,y,v,m,E,x,u;return Ct().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(l=a.state,r=l.fileName,o=l.hasChange,s=l.allowDownloadPermission,h=l.allowDownloadChange,f=a.props,w=f.onClose,g=f.worksheetId,I=f.downLoadUrl,p=f.templateId,k=f.refreshFn,y=f.fileType,v=y===void 0?"Word":y,m=f.updatePrint,h&&p&&A.Z.editTemplateDownloadPermission({id:p,allowDownloadPermission:s}).then(function(C){o||(w(),m(p,{allowDownloadPermission:s}))}),o){R.next=5;break}return R.abrupt("return");case 5:return E=void 0,x=void 0,R.next=9,kn.Z.getToken({worksheetId:g||p,tokenType:5});case 9:u=R.sent,p?(E=I+("/Export"+et[v]+"/Upload"+et[v]),x={id:p,accountId:md.global.Account.accountId,doc:a.state.key,name:r,token:u}):(E=I+("/Export"+et[v]+"/Create"+et[v]),x={worksheetId:g,accountId:md.global.Account.accountId,doc:a.state.key,name:r,token:u}),$.ajax({type:"POST",url:E,data:x}).then(function(C){C.status!==1?alert(C.message,2):!p&&C.data?A.Z.editTemplateDownloadPermission({id:C.data,allowDownloadPermission:s}).then(function(T){if(T){k(),alert(_l("\u6DFB\u52A0\u6210\u529F"));return}}):(k(),alert(p?_l("\u4FEE\u6539\u6210\u529F"):_l("\u6DFB\u52A0\u6210\u529F")))});case 12:case"end":return R.stop()}},i,t)})),a.state={loading:!1,suc:!1,loadPer:0,bindCreateUpload:!1,url:"",key:"",fileName:"",templateName:"",file:{},hasChange:!1,allowDownloadPermission:0,allowDownloadChange:!1},a.con=e.createRef(),a}return(0,re.default)(n,[{key:"componentDidMount",value:function(){this.setData()}},{key:"componentWillReceiveProps",value:function(t,a){t.templateId!==this.props.templateId&&(this.uploaderDestroy(),this.setData(t))}},{key:"componentDidUpdate",value:function(t){this.state.bindCreateUpload||this.createUploader()}},{key:"componentWillUnmount",value:function(){this.uploaderDestroy()}},{key:"createUploader",value:function(){var t=this,a=this.props.fileType,i=a===void 0?"Word":a;this.uploader=(0,Nn.Z)({browse_button:"editorFiles",bucket:3,filters:{mime_types:[{extensions:ct[i]}]},init:{BeforeUpload:function(r,o){if(File.GetExt(o.name)!=ct[i])return alert(_l("\u4E0A\u4F20\u5931\u8D25\uFF0C\u6587\u4EF6\u9519\u8BEF"),3,1e3),!1;t.setState({loading:!0,suc:!1,loadPer:0,fileName:o.name,file:o,hasChange:!0})},FilesAdded:function(r,o){r.setOption("auto_start",!0)},UploadProgress:function(r,o){t.setState({loading:!0,suc:!1,loadPer:o.percent})},FileUploaded:function(r,o,s){var h=s.response,f=h.bucket,w=h.key,g=h.fsize;t.setState({loading:!1,suc:!0,loadPer:o.percent,url:(0,Fe.tN)(f)+w,key:w,file:o})},Error:function(r,o,s){t.setState({loading:!1,suc:!1,loadPer:0,fileName:"",url:"",key:""}),s&&alert(s)}}}),this.setState({bindCreateUpload:!0})}},{key:"render",value:function(){var t=this,a=this.state,i=a.loading,l=a.loadPer,r=a.fileName,o=a.file,s=a.templateName,h=a.hasChange,f=a.allowDownloadPermission,w=this.props,g=w.onClose,I=w.worksheetId,p=w.downLoadUrl,k=w.templateId,y=w.fileType,v=y===void 0?"Word":y;return e.createElement("div",{className:"editPrint upload"},e.createElement("h5",{className:"title overflow_ellipsis"},k?_l("\u7F16\u8F91\u6A21\u677F: %0",s):_l("\u65B0\u5EFA\u6A21\u677F"),e.createElement(F.Z,{icon:"clear_1",className:"closeBtnN",onClick:function(){g()}})),e.createElement("div",{className:"uploadBoxCon"},e.createElement("div",{className:"uploadCon"},e.createElement("p",{className:"tiTop"},e.createElement("span",{className:"num"},"1"),_l("\u5236\u4F5C\u6A21\u677F")),e.createElement("p",{className:"desc mTop20"},e.createElement("span",{className:"Font13 Gray_9e"},_l("\u8BF7\u5148\u6839\u636E\u7CFB\u7EDF\u63D0\u4F9B\u7684\u5B57\u6BB5\u4EE3\u7801\u5BF9\u7167\u8868\u5C06\u6240\u9700\u8981\u7684\u5B57\u6BB5\u4EE3\u7801\u590D\u5236\u540E\u7C98\u8D34\u5230\u5BF9\u5E94 \u7684\u672C\u5730\u7684 %0 \u6A21\u677F\u4E2D\u5236\u4F5C\u6210\u6A21\u677F\u3002",v))),e.createElement("p",{className:"btnTable mTop20 Hand",onClick:function(){window.open("/worksheet/uploadTemplateSheet/"+I)}},_l("\u5F00\u59CB\u5236\u4F5C"),e.createElement(F.Z,{icon:"navigate_next",className:"mLeft8"})),e.createElement("div",{className:"tiTop mTop50 valignWrapper"},e.createElement("div",null,e.createElement("span",{className:"num"},"2"),_l("\u4E0A\u4F20\u5236\u4F5C\u597D\u7684\u6A21\u677F")),e.createElement("div",{className:"flex"}),e.createElement(ve.Z,{className:"Font14",onClick:this.editDownload,checked:!f},_l("\u5141\u8BB8\u4E0B\u8F7D\u6253\u5370\u6587\u4EF6"))),e.createElement("p",{className:Z()("uploadBtn mTop20",{loading:i}),ref:function(E){t.con=E}},r?e.createElement("span",{className:v==="Excel"?"icon-new_excel Font50 excelIcon":"wordIcon"}):e.createElement(F.Z,{icon:"file",className:"LightGray"}),e.createElement("p",{className:"mTop15 TxtCenter"},r?e.createElement(e.Fragment,null,e.createElement("span",{className:"form"},r),k&&!h&&e.createElement("span",{className:"downLoad",onClick:function(){var E=void 0,x=void 0;E=p+"/ExportWord/DownloadWord",x={id:k};var u=document,S=u.createElement("form"),R=u.createElement("input");S.setAttribute("method","get"),S.setAttribute("action",E),R.setAttribute("value",k),R.setAttribute("name","id"),R.setAttribute("type","hidden"),S.appendChild(R),u.body.appendChild(S),S.submit()}},_l("\u4E0B\u8F7D"))):e.createElement("span",{className:"Gray_9e"},_l("\u8BF7\u9009\u62E9%0\u683C\u5F0F\u7684%1\u6587\u4EF6",ct[v],v))),i?e.createElement(e.Fragment,null,e.createElement("span",{className:"lineBox"},e.createElement("span",{className:"line",style:{width:l+"%"}})),e.createElement("span",{className:"per"},l,"%"),e.createElement(F.Z,{icon:"workflow_cancel",className:"closeIcon",onClick:function(){t.uploader&&(t.uploader.stop(),t.uploader.removeFile(o),t.setState({loading:!1,suc:!1,loadPer:0,fileName:"",url:"",key:""}))}})):e.createElement(e.Fragment,null,e.createElement("span",{id:"editorFiles",onClick:function(){$("#fileDemo").click()}},r?_l("\u91CD\u65B0\u4E0A\u4F20"):_l("\u4E0A\u4F20\u6A21\u677F")))))),e.createElement("div",{className:"activeBox"},e.createElement("span",{className:Z()("sure",{disa:k?!this.state.hasChange&&!this.state.allowDownloadChange:!this.state.hasChange}),onClick:this.onOk},_l("\u786E\u5B9A")),e.createElement("span",{className:"cancle",onClick:function(){g()}},_l("\u53D6\u6D88"))))}}]),n}(e.Component))||yt;const Tn=bn;var Nt,_n=Te.Z.confirm,dt=(0,qe.Z)(Nt=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.deleteFn=function(){var a=t.props,i=a.setFn,l=a.deleteFn,r=a.delTxt,o=a.description;return _n({title:e.createElement("span",{className:"Red"},r||_l("\u5220\u9664\u6A21\u677F")),description:o||_l("\u5220\u9664\u540E\u5C06\u65E0\u6CD5\u6062\u590D"),buttonType:"danger",onOk:function(){l()}})},t}return(0,re.default)(n,[{key:"render",value:function(){var t=this,a=this.props,i=a.setFn,l=a.delTxt,r=a.disabledRename,o=a.showCopy,s=a.onCopy;return e.createElement(e.Fragment,null,e.createElement("ul",{className:"moreOptionTrigger"},o&&e.createElement("li",{className:"valignWrapper",onClick:function(f){f.stopPropagation(),s()}},e.createElement(F.Z,{icon:"copy",className:"Font16 Gray_9e mRight10"}),_l("\u590D\u5236")),r?"":e.createElement("li",{className:"valignWrapper",onClick:function(f){f.stopPropagation(),i({isRename:!0,showMoreOption:!1})}},e.createElement(F.Z,{icon:"edit",className:"Font16 Gray_9e mRight10"}),_l("\u91CD\u547D\u540D")),e.createElement("li",{className:"Red valignWrapper",onClick:function(f){f.stopPropagation(),t.deleteFn()}},e.createElement(F.Z,{icon:"task-new-delete",className:"Font16 deleteIcon mRight10"}),l||_l("\u5220\u9664\u6A21\u677F"))))}}]),n}(e.Component))||Nt,Sn=b(87506),ut=b.n(Sn),Rn=b(45697),Dn=b(98843),Ln=b(86969),mt,kt,Fn=(kt=mt=function(d){(0,le.default)(n,d);function n(){return(0,ae.default)(this,n),(0,ee.default)(this,(n.__proto__||ne()(n)).apply(this,arguments))}return(0,re.default)(n,[{key:"render",value:function(){var t=this.props,a=t.onBack,i=t.isDefault,l=t.type,r=t.from,o=t.printId,s=t.worksheetId,h=t.projectId,f=t.rowId,w=t.getType,g=t.viewId,I=t.appId,p=t.name,k=t.fileTypeNum,y={params:{printType:"worksheet",printId:o,type:l,from:r,isDefault:i,worksheetId:s,projectId:h,rowId:f,getType:w,viewId:g,appId:I,name:p,fileTypeNum:k}};return e.createElement(Dn.Z,null,e.createElement(Ln.default,{match:y,onBack:a}))}}]),n}(e.Component),mt.propTypes={onBack:Rn.func},mt.defaultProps={onBack:function(){}},kt),Pn=b(97824),M=b(71129),Ge=b(77863),Zn=b(13476),pt=b(36835),Bn=b(5636),tt=b(77632),An=(0,_e.W6)(function(){return e.createElement(F.Z,{className:"Font14 Hand Gray_9e Hover_21 dragIcon",icon:"drag"})}),$n=(0,_e.W8)(function(d){var n=d.it,c=d.showDropOption,t=d.isRename,a=d.templateId,i=d.showMoreOption,l=d.isChangeDrop,r=d.showFilters,o=d.worksheetInfo,s=o===void 0?{}:o,h=d.worksheetControls,f=h===void 0?[]:h,w=d.printInfo,g=d.isCustom,I=d.updatePrint,p=d.changeState,k=d.editPrintName,y=d.deletePrint,v=d.editPrintRange,m=d.editPrintFilters,E=d.loadPrint,x=s.views,u=x===void 0?[]:x,S=(0,e.useRef)(),R=(0,e.useState)(n.name),C=(0,V.Z)(R,2),T=C[0],j=C[1];(0,e.useEffect)(function(){t&&(j(n.name),setTimeout(function(){$(S).focus()},200))},[t]);var X=function(){$(".printTemplatesList-tr .name input")[0]||(N().includes([M.bU.QR_CODE_PRINT,M.bU.BAR_CODE_PRINT],n.type)?(0,pt.VN)({mode:"preview",id:n.id,printType:n.printType,projectId:s.projectId,worksheetId:s.worksheetId,controls:N().get(s,"template.controls")}):p({templateId:n.id,name:n.name,type:"preview",showPrintTemDialog:!0,isDefault:n.type===M.bU.SYS_PRINT,fileTypeNum:n.type}))},me=function(){var W="";return n.range===1?W=_l("\u6240\u6709\u8BB0\u5F55"):n.range!==1&&n.views.length<=0?W=_l("\u672A\u6307\u5B9A\u89C6\u56FE"):n.range===3&&n.views.length>0&&(W=n.views.map(function(K){return K.name||K.viewName}).join("\u3001")),W},Ie=function(){var W=(0,z.cm)(f.filter(function(ge){return ge.viewDisplay||!("viewDisplay"in ge)})||[],n.filters||[]),K=N().flatMap(W,function(ge){return ge.groupFilters}).length;return K===0?"":"("+K+")"};return e.createElement("div",{className:"printTemplatesList-tr",onClick:X},e.createElement(An,null),e.createElement("div",{className:"name flex mRight20 valignWrapper overflowHidden"},e.createElement(F.Z,{icon:M.YC[n.type]?M.YC[n.type].icon:w.icon,className:"iconTitle mRight13 "+([M.bU.WORD_PRINT,M.bU.EXCEL_PRINT].includes(n.type)||w.icon!=="doc"?"Font24":"Font22")}),e.createElement("div",{className:"flex overflow_ellipsis"},t&&a===n.id?e.createElement("input",{type:"text",className:"Font13",ref:S,value:T,onChange:function(W){W.stopPropagation(),j(W.target.value)},onBlur:function(W){if(W.stopPropagation(),!N().trim(T)){alert(_l("\u8BF7\u8F93\u5165\u6A21\u677F\u540D\u79F0"),3),$(S).focus();return}I(n.id,{name:T}),k({id:n.id,name:T}),p({templateId:"",isRename:!1})}}):e.createElement(ce.Z,{text:n.name},e.createElement("span",{className:"overflow_ellipsis printName Font13"},n.name)),[M.bU.QR_CODE_PRINT,M.bU.BAR_CODE_PRINT].includes(n.type)&&e.createElement("div",{className:"printSize"},w.text))),e.createElement("div",{className:"views flex mRight20"},e.createElement("span",{className:"viewText printName WordBreak"},me())),e.createElement("div",{className:"activeCon mRight8 w180px flexRow ",onClick:function(W){return W.stopPropagation()}},e.createElement($e.Z,{popupVisible:c&&a===n.id,action:["click"],popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}},getPopupContainer:function(){return document.body},onPopupVisibleChange:function(W){p({showDropOption:W}),l&&v({id:n.id,range:n.range,viewsIds:n.views.map(function(K){return K.viewId})})},popup:e.createElement(Pn.Z,{className:"printRangeDrop",printData:n,views:u,onClose:function(){p({showDropOption:!1})},setData:function(W){I(W.printData.id,(0,L.default)({},W.printData)),p({isChangeDrop:!0})}})},e.createElement("span",{className:"Hand Bold",onClick:function(W){p({templateId:n.id,showDropOption:!0,isRename:!1})}},_l("\u4F7F\u7528\u8303\u56F4"))),e.createElement("span",{className:"Hand Bold",onClick:function(W){p({templateId:n.id,showFilters:!0,isRename:!1})}},_l("\u8FC7\u6EE4\u6761\u4EF6"),Ie()),r&&a===n.id&&e.createElement(Bn.Z,{sheetSwitchPermit:s.switches,projectId:s.projectId,appId:s.appId,columns:f.filter(function(G){return G.viewDisplay||!("viewDisplay"in G)}).map(function(G){return(0,Ke.BM)(G)}),filters:n.filters,isShowBtnFilterDialog:r,setValue:function(W){var K=W.filters,ge=W.isShowBtnFilterDialog,We=W.isOk;if(We){var je=(0,z.cm)(f.filter(function(Se){return Se.viewDisplay||!("viewDisplay"in Se)})||[],K||[]).length===0;m({id:n.id,filters:je?[]:K})}p({showFilters:ge})}}),e.createElement("span",{className:"Hand Bold",onClick:function(W){p({isRename:!1}),N().includes([M.bU.QR_CODE_PRINT,M.bU.BAR_CODE_PRINT],n.type)?(0,pt.VN)({isCharge:!0,mode:"editTemplate",id:n.id,printType:n.printType,projectId:s.projectId,worksheetId:s.worksheetId,controls:N().get(s,"template.controls"),onClose:function(){E({worksheetId:s.worksheetId})}}):p(g?{templateId:n.id,showEditPrint:!0,type:"edit",fileType:n.type===5?"Excel":"Word"}:{templateId:n.id,type:"edit",showPrintTemDialog:!0,isDefault:n.type===M.bU.SYS_PRINT})}},_l("\u7F16\u8F91"))),e.createElement("div",{className:"more w80px TxtCenter"},e.createElement(F.Z,{icon:"task-point-more",className:"moreActive Hand Font18 Gray_9e Hover_21",onClick:function(W){W.stopPropagation(),p({templateId:n.id,showMoreOption:!0,isRename:!1})}}),i&&a===n.id&&e.createElement(dt,{isRename:t,templateId:n.id,showMoreOption:i,onClickAwayExceptions:[],onClickAway:function(){return p({showMoreOption:!1})},setFn:function(W){p((0,L.default)({},W))},deleteFn:function(W){y(n.id),p((0,L.default)({},W))}})))}),On=(0,_e.JN)(function(d){var n=d.items;return e.createElement("div",{className:"sortablePrintItemList"},n.map(function(c,t){var a=(0,Zn.Uc)(c),i=[M.bU.WORD_PRINT,M.bU.EXCEL_PRINT].includes(c.type),l={};return i&&(l.background=M.YC[c.type].background),e.createElement($n,(0,L.default)({key:c.id||t,index:t,printInfo:a,isCustom:i,style:l,it:c},d))}))}),Wn=function(d){(0,le.default)(n,d);function n(c){return(0,ae.default)(this,n),(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c))}return(0,re.default)(n,[{key:"render",value:function(){var t=this.props,a=t.worksheetProjectId,i=t.onCloseDrawer,l=t.visible,r=t.addNewRecordPrintTemp,o=t.addWordPrintTemp,s=t.addCodePrintTemp,h=t.addExcelPrintTemp,f=a||(md.global.Account.projects[0]||{}).projectId,w=(0,Fe.XH)(f,Ge.UU.wordPrintTemplate);return e.createElement(gt.Z,{width:400,className:"printTempDrawer",title:_l("\u521B\u5EFA\u6253\u5370\u6A21\u677F"),placement:"right",mask:!1,onClose:i,visible:l},e.createElement("p",{className:"printTempDrawerListTitle"},_l("\u901A\u8FC7\u7CFB\u7EDF\u9ED8\u8BA4\u6253\u5370\u521B\u5EFA")),e.createElement("div",{className:"printTempDrawerListItem",onClick:r},e.createElement("span",{className:"iconbox"},e.createElement(F.Z,{icon:"doc",className:"printTempDrawerListItemIcon"})),_l("\u8BB0\u5F55\u6253\u5370")),e.createElement("div",{className:"printTempDrawerListItem",onClick:function(){s(M.bU.BAR_CODE_PRINT),i()}},e.createElement("span",{className:"iconbox"},e.createElement(F.Z,{icon:"a-barcode",className:"printTempDrawerListItemIcon"})),_l("\u6761\u5F62\u7801\u6253\u5370")),e.createElement("div",{className:"printTempDrawerListItem",onClick:function(){s(M.bU.QR_CODE_PRINT),i()}},e.createElement("span",{className:"iconbox"},e.createElement(F.Z,{icon:"qr_code",className:"printTempDrawerListItemIcon"})),_l("\u4E8C\u7EF4\u7801\u6253\u5370")),w&&e.createElement(e.Fragment,null,e.createElement("p",{className:"printTempDrawerListTitle",style:{marginTop:"35px"}},_l("\u81EA\u5B9A\u4E49")),e.createElement("div",{className:"printTempDrawerListItem",onClick:o},e.createElement("span",{className:"iconbox"},e.createElement(F.Z,{icon:"new_word",className:"printTempDrawerListItemIcon"})),_l("\u4E0A\u4F20 Word \u6A21\u677F"),w==="2"&&e.createElement(it.Z,null)),e.createElement("div",{className:"printTempDrawerListItem",onClick:h},e.createElement("span",{className:"iconbox"},e.createElement(F.Z,{icon:"new_excel",className:"printTempDrawerListItemIcon"})),_l("\u4E0A\u4F20 Excel \u6A21\u677F"),w==="2"&&e.createElement(it.Z,null))))}}]),n}(e.Component),jn=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.loadPrint=function(a){var i=a.worksheetId;t.setState({loading:!0}),A.Z.getPrintList({worksheetId:i}).then(function(l){t.setState({loading:!1,printData:l})})},t.addDrawerPrintTemp=function(a){var i=t.props.worksheetInfo;(0,Fe.XH)(i.projectId,Ge.UU.wordPrintTemplate)==="2"?(0,Fe.j0)(i.projectId,Ge.UU.wordPrintTemplate):t.setState((0,L.default)({},t.state,{showEditPrint:!0,templateId:"",type:"new",showCreatePrintTemp:!1,fileType:a}))},t.editPrintFilters=function(a){var i=a.id,l=a.filters,r=t.props.worksheetId;A.Z.editPrintFilter({id:i,filters:(l||[]).map(tt.gC)}).then(function(o){o?t.loadPrint({worksheetId:r}):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})},t.editPrintName=function(a){var i=a.id,l=a.name,r=t.props.worksheetId;A.Z.editPrintName({id:i,name:l}).then(function(o){o||(alert(_l("\u4FEE\u6539\u5931\u8D25"),2),t.loadPrint({worksheetId:r}))})},t.updatePrint=function(a,i){var l=t.state.printData,r=l.filter(function(s){return s.id===a}),o=[];l.map(function(s){s.id!==a?o.push(s):o.push((0,L.default)({},r[0],i))}),t.setState({printData:o})},t.deletePrint=function(a){A.Z.deletePrint({id:a}).then(function(i){t.loadPrint({worksheetId:t.props.worksheetId})})},t.editPrintRange=function(a){var i=a.id,l=a.range,r=a.viewsIds;A.Z.editPrintRange({range:l,id:i,viewsIds:r}).then(function(o){o||(alert(_l("\u4FEE\u6539\u5931\u8D25"),2),t.loadPrint({worksheetId:t.props.worksheetId}))})},t.onSortEnd=function(a,i){var l=a.oldIndex,r=a.newIndex,o=t.state.printData,s=t.props,h=s.worksheetInfo,f=h===void 0?{}:h,w=s.worksheetId,g=o.filter(function(k){return[M.bU.SYS_PRINT,M.bU.WORD_PRINT,M.bU.EXCEL_PRINT].includes(k.type)}).map(function(k){return{printId:k.id}}),I=o.filter(function(k){return k.type===M.bU.QR_CODE_PRINT||k.type===M.bU.BAR_CODE_PRINT}).map(function(k){return{printId:k.id}});i===0?g=(0,_e.Rp)(g,l,r):I=(0,_e.Rp)(I,l,r);var p=g.concat(I).map(function(k,y){return(0,L.default)({},k,{sort:y})});A.Z.editPrintTemplateSort({projectId:f.projectId,worksheetId:w,sortItems:p}).then(function(k){if(k){var y=[];p.forEach(function(v){var m=o.find(function(E){return v.printId===E.id});y.push(m)}),t.setState({printData:y})}})},t.changeState=function(a){t.setState((0,L.default)({},a))},t.renderPrintItem=function(a,i){var l=t.state,r=l.showDropOption,o=l.isRename,s=l.templateId,h=l.showMoreOption,f=l.isChangeDrop,w=l.showFilters,g=t.props,I=g.worksheetInfo,p=I===void 0?{}:I,k=g.worksheetControls,y=p.views,v=y===void 0?[]:y;return e.createElement(On,{useDragHandle:!0,axis:"xy",worksheetInfo:p,worksheetControls:k,showDropOption:r,isRename:o,isChangeDrop:f,showFilters:w,showMoreOption:h,templateId:s,hideSortableGhost:!0,transitionDuration:0,helperClass:"sortablePrintTempItemHelperClass",distance:3,items:a,onSortEnd:function(E){return t.onSortEnd(E,i)},updatePrint:t.updatePrint,changeState:t.changeState,editPrintName:t.editPrintName,deletePrint:t.deletePrint,editPrintRange:t.editPrintRange,editPrintFilters:t.editPrintFilters,loadPrint:t.loadPrint})},t.renderCon=function(){var a=t.props,i=a.worksheetId,l=a.worksheetInfo,r=l===void 0?{}:l,o=t.state,s=o.showEditPrint,h=o.list,f=o.isRename,w=o.templateId,g=o.showMoreOption,I=o.showCreatePrintTemp,p=o.fileType,k=o.printData,y=k===void 0?[]:k,v=y.filter(function(E){return[M.bU.SYS_PRINT,M.bU.WORD_PRINT,M.bU.EXCEL_PRINT].includes(E.type)}),m=y.filter(function(E){return E.type===M.bU.QR_CODE_PRINT||E.type===M.bU.BAR_CODE_PRINT});return e.createElement("div",{className:"printBox Relative"},e.createElement("div",{className:"printBoxList"},e.createElement("div",{className:"h100 overflowHidden"},e.createElement("div",{className:"topBoxText"},e.createElement("div",{className:"textCon"},e.createElement("h5",{className:"formName Gray Font17 Bold"},_l("\u6253\u5370\u6A21\u677F")),e.createElement("p",{className:"desc mTop8"},e.createElement("span",{className:"Font13 Gray_9e"},_l("\u4FDD\u5B58\u7CFB\u7EDF\u6253\u5370\u7684\u914D\u7F6E\u4E3A\u6A21\u677F\uFF0C\u6216\u4E0A\u4F20 Word\u3001Excel \u6A21\u677F\u81EA\u7531\u5B9A\u4E49\u8BB0\u5F55\u6253\u5370\u7684\u6837\u5F0F\u3002")),e.createElement(rt.Z,{type:3,text:_l("\u5E2E\u52A9"),href:"https://help.mingdao.com/worksheet/print-template"}))),e.createElement("span",{className:"add Relative bold",onClick:function(){t.setState({showCreatePrintTemp:!0})}},e.createElement(F.Z,{icon:"plus",className:"mRight8"}),_l("\u65B0\u5EFA\u6A21\u677F"))),y.length<=0?e.createElement("p",{className:"noData"},e.createElement(F.Z,{icon:"print",className:"icon"}),e.createElement("br",null),_l("\u6682\u65E0\u6253\u5370\u6A21\u677F")):e.createElement(e.Fragment,null,e.createElement("div",{className:"printTemplatesList withPrintTemp flex overflowHidden flexColumn"},e.createElement("div",{className:"printTemplatesList-header"},e.createElement("div",{className:"name flex mRight20 valignWrapper overflow_ellipsis"},_l("\u540D\u79F0")),e.createElement("div",{className:"views flex mRight20"},_l("\u4F7F\u7528\u8303\u56F4")),e.createElement("div",{className:"action mRight8 w180px"},_l("\u64CD\u4F5C")),e.createElement("div",{className:"more w80px"})),e.createElement("div",{className:"printTemplatesList-box flex"},v.length>0&&e.createElement("p",{className:"printTemTi"},_l("\u8BB0\u5F55\u6253\u5370")),v.length>0&&t.renderPrintItem(v||[],0),m.length>0&&e.createElement("p",{className:"printTemTi"},_l("\u6761\u7801\u6253\u5370")),m.length>0&&t.renderPrintItem(m||[],1))))),e.createElement(ut(),{transitionName:"EditPrint",transitionEnterTimeout:500,transitionLeaveTimeout:300},s&&e.createElement(Tn,{onClickAwayExceptions:[],downLoadUrl:r.downLoadUrl,onClickAway:function(){return t.setState({showEditPrint:!1,type:""})},onClose:function(){t.setState({showEditPrint:!1,type:""})},printData:y,templateId:w,worksheetId:i,fileType:p,updatePrint:t.updatePrint,refreshFn:function(){t.setState({showEditPrint:!1,type:""}),t.loadPrint({worksheetId:i})}})),e.createElement(Wn,{worksheetProjectId:r.projectId,onCloseDrawer:function(){t.setState({showCreatePrintTemp:!1})},visible:I,addNewRecordPrintTemp:function(){t.setState((0,L.default)({},t.state,{showPrintTemDialog:!0,templateId:"",type:"new",isDefault:!0,showCreatePrintTemp:!1}))},addWordPrintTemp:function(){return t.addDrawerPrintTemp("Word")},addExcelPrintTemp:function(){return t.addDrawerPrintTemp("Excel")},addCodePrintTemp:function(x){(0,pt.VN)({isCharge:!0,mode:"newTemplate",printType:x===M.bU.QR_CODE_PRINT?1:3,projectId:r.projectId,worksheetId:r.worksheetId,controls:N().get(r,"template.controls"),onClose:function(){t.loadPrint({worksheetId:r.worksheetId})}})}})))},t.state={showEditPrint:!1,isRename:!1,templateId:"",showDeletePrint:!1,showMoreOption:!1,showDropOption:!1,showPrintTemDialog:!1,type:"",isDefault:!1,isChangeDrop:!1,showCreatePrintTemp:!1,fileType:void 0,fileTypeNum:null,printData:[],defaulteTemData:[],codeTemData:[],loading:!1,showFilters:!1,sortIds:[]},t}return(0,re.default)(n,[{key:"componentDidMount",value:function(){var t=this.props.worksheetId;this.loadPrint({worksheetId:t})}},{key:"render",value:function(){var t=this,a=this.state.loading,i=this.props,l=i.worksheetInfo,r=l===void 0?{}:l,o=i.worksheetId,s=r.views,h=s===void 0?[]:s,f="";return e.createElement(e.Fragment,null,a?e.createElement(ke.Z,null):this.renderCon(),this.state.showPrintTemDialog&&e.createElement(Fn,{printId:this.state.templateId,name:this.state.name,type:this.state.type,isDefault:this.state.isDefault,worksheetId:o,projectId:r.projectId,rowId:"",viewId:f,appId:r.appId,getType:1,workId:"",from:"formSet",fileTypeNum:this.state.fileTypeNum,onBack:function(g){t.loadPrint({worksheetId:o}),t.setState({showPrintTemDialog:!1,type:"",templateId:"",name:""})}}))}}]),n}(e.Component);const Un=jn;var Mn=b(62232),Hn=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.state={focusId:"",controls:[],isChange:!1,controlsOriginal:[],loading:!1},t}return(0,re.default)(n,[{key:"componentWillMount",value:function(){var t=this,a=this.props,i=a.controls,l=i===void 0?[]:i,r=a.worksheetId,o=a.appId,s=a.controlTypeList,h=s===void 0?[]:s;if(l.length<=0)A.Z.getWorksheetInfo({worksheetId:r,getTemplate:!0,getViews:!0}).then(function(w){var g=w.template,I=g===void 0?[]:g,p=I.controls,k=p===void 0?[]:p,y=k.filter(function(v){return!N().includes(Ee.c_,v.controlId)});t.setState({controls:y,controlsOriginal:y})});else{var f=l.filter(function(w){return!N().includes(Ee.c_,w.controlId)});this.setState({controls:f,controlsOriginal:f})}h.length<=0?A.Z.getWorksheetApiInfo({worksheetId:r,appId:o}).then(function(w){t.setState({controlTypeList:w[0].controls})}):this.setState({controlTypeList:h})}},{key:"render",value:function(){var t=this,a=this.props,i=a.showAliasDialog,l=a.setFn,r=a.worksheetId,o=a.appId,s=this.state,h=s.focusId,f=s.controls,w=f===void 0?[]:f,g=s.isChange,I=s.controlsOriginal,p=I===void 0?[]:I,k=s.controlTypeList,y=k===void 0?[]:k;return e.createElement(Te.Z,{className:"aliasDialog",style:{width:"720px"},visible:i,onCancel:function(){return l({showAliasDialog:!1,controls:w})},footer:"",title:_l("\u8BBE\u7F6E\u5B57\u6BB5\u522B\u540D")},e.createElement("p",{className:"text"},_l("\u5B57\u6BB5\u522B\u540D\u4EC5\u5141\u8BB8\u4F7F\u7528\u5B57\u6BCD\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\u7EC4\u5408\uFF0C\u4E14\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u4E0D\u53EF\u91CD\u590D\u3002")),e.createElement("div",{className:"tableAlias"},e.createElement("div",{className:"topDiv"},e.createElement("span",{className:""},_l("\u5B57\u6BB5\u540D\u79F0")),e.createElement("span",{className:""},_l("\u7C7B\u578B")),e.createElement("span",{className:""},_l("\u5B57\u6BB5\u522B\u540D"),e.createElement("i",{className:"batchAlias mLeft10 InlineBlock Hand",onClick:function(){t.state.loading||Te.Z.confirm({title:_l("\u786E\u5B9A\u6279\u91CF\u751F\u6210\u5B57\u6BB5\u522B\u540D\uFF1F"),description:e.createElement(e.Fragment,null,_l("\u6839\u636E\u5B57\u6BB5\u540D\u7684\u62FC\u97F3\u81EA\u52A8\u751F\u6210\u522B\u540D\uFF0C\u82E5\u5B57\u6BB5\u540D\u4E3A\u82F1\u6587\u5219\u76F4\u63A5\u53D6\u5B57\u6BB5\u540D\u4F5C\u4E3A\u522B\u540D\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u5DF2\u8BBE\u7F6E\u7684\u522B\u540D\u3002")),onOk:function(){t.setState({loading:!0}),A.Z.editGenerateControlsDefaultAlias({worksheetId:r,appId:o}).then(function(E){t.setState({controls:E.data.controls,loading:!1})})}})}},_l("\u6279\u91CF\u751F\u6210")))),w.map(function(v,m){return e.createElement("div",{className:"listDiv"},e.createElement("span",{className:"breakAll"},v.controlName),e.createElement("span",{className:""},y.length>0&&y[m]?y[m].type:""),e.createElement("span",{className:Z()("aliasBox",{onFocusSpan:h===v.controlId,isError:t.state.isError})},h!==v.controlId?e.createElement("span",{className:"aliasTxt",onClick:function(){t.setState({focusId:v.controlId},function(){$(t.input).focus()})}},e.createElement("span",{className:Z()("txt",{noData:!v.alias})},v.alias||_l("\u8BF7\u8F93\u5165\u522B\u540D")),e.createElement(F.Z,{icon:"edit_17"})):e.createElement("input",{ref:function(x){t.input=x},type:"text",value:v.alias,onChange:function(x){t.setState({isChange:!0,controls:w.map(function(u){return v.controlId!==u.controlId?u:(0,L.default)({},u,{alias:x.target.value})})}),x.target.value&&w.filter(function(u){return x.target.value===u.alias}).length>1||x.target.value&&!/^[a-zA-Z]{1}\w*$/.test(x.target.value)?t.setState({isError:!0}):t.setState({isError:!1})},onBlur:function(){if(t.setState({focusId:""}),!g){t.setState({isChange:!1});return}if(v.alias&&(w.filter(function(x){return v.alias===x.alias}).length>1||Ee.c_.includes(v.alias))){t.setState({isChange:!1,controls:p,isError:!1}),alert(Ee.c_.includes(v.alias)?_l("\u8BE5\u522B\u540D\u4E0E\u7CFB\u7EDF\u5B57\u6BB5\u7684\u522B\u540D\u76F8\u540C\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"):_l("\u8BE5\u522B\u540D\u5DF2\u5B58\u5728"),2);return}if(v.alias&&!/^[a-zA-Z]{1}\w*$/.test(v.alias)||t.state.isError){t.setState({isChange:!1,controls:p,isError:!1});return}t.setState({isChange:!1}),A.Z.editControlsAlias({worksheetId:r,appId:o,controls:[{controlId:v.controlId,alias:v.alias}]}).then(function(x){x.code===15?(t.setState({isChange:!1,controls:p,isError:!1}),alert(_l("\u8BE5\u522B\u540D\u4E0E\u7CFB\u7EDF\u5B57\u6BB5\u7684\u522B\u540D\u76F8\u540C\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"),2)):t.setState({controlsOriginal:w})}).catch(function(x){alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})}})))})))}}]),n}(e.Component),Gn=b(1694),bt,Vn=(0,qe.Z)(bt=function(d){(0,le.default)(n,d);function n(){return(0,ae.default)(this,n),(0,ee.default)(this,(n.__proto__||ne()(n)).apply(this,arguments))}return(0,re.default)(n,[{key:"render",value:function(){var t=this.props,a=t.columsList,i=a===void 0?[]:a,l=t.id,r=t.setFn,o=i.filter(function(s){return!N().includes(Gn.mQ,s.type)});return i.length<=0?e.createElement("div",{className:"listCon"}," ",_l("\u6682\u65E0\u53EF\u9009\u5B57\u6BB5")):e.createElement("ul",{className:"listCon"},o.map(function(s,h){return e.createElement("li",{className:Z()("columnCheckItem overflow_ellipsis",{current:s.controlId===l}),key:h,onClick:function(){s.controlId!==l&&r(s.controlId,s)}},e.createElement("i",{className:Z()("icon mRight10 Font14","icon-"+(0,Mn.hB)(s.type))}),e.createElement("span",{className:"Font13"},s.controlName||(s.type===22?_l("\u5206\u6BB5"):_l("\u5907\u6CE8"))))}))}}]),n}(e.Component))||bt,zn=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.init=function(a){var i=a.worksheetInfo,l=i===void 0?[]:i,r=l.template,o=r===void 0?[]:r,s=l.entityName,h=l.alias,f=h===void 0?"":h,w=o.controls,g=w===void 0?[]:w,I=g.find(function(p){return p.attribute===1})||[];t.setState({name:s||_l("\u8BB0\u5F55"),id:I.controlId,controls:g.filter(function(p){return!Ee.c_.includes(p.controlId)}),alias:f,showControlList:!1,nameFocus:!1})},t.state={loading:!0,worksheetInfo:c.worksheetInfo,showControlList:!1,name:"\u8BB0\u5F55",nameFocus:!1,id:"",showAliasDialog:!1,controls:[],alias:""},t}return(0,re.default)(n,[{key:"componentDidMount",value:function(){this.init(this.props)}},{key:"render",value:function(){var t=this,a=this.props,i=a.match,l=i===void 0?{}:i,r=a.onChange,o=l.params.worksheetId,s=this.state,h=s.showControlList,f=s.name,w=s.nameFocus,g=s.id,I=s.showAliasDialog,p=s.alias,k=p===void 0?"":p,y=s.worksheetInfo,v=y===void 0?[]:y,m=v.projectId,E=m===void 0?"":m,x=v.appId,u=x===void 0?"":x,S=this.state.controls,R=S.find(function(C){return C.controlId===g})||[];return e.createElement(e.Fragment,null,e.createElement(Ne.Z,null,e.createElement("div",{className:"aliasCon"},e.createElement("div",{className:"conBox"},e.createElement("h5",null,_l("\u6807\u9898\u5B57\u6BB5")),e.createElement("p",null,_l("\u8BB0\u5F55\u6807\u9898\u7528\u4E8E\u5FEB\u901F\u8FA8\u8BC6\u4E00\u6761\u6570\u636E\uFF0C\u7528\u4E8E\u6570\u636E\u8BE6\u60C5\u3001\u5173\u8054\u6570\u636E\u3001\u548C\u6D88\u606F\u901A\u77E5\u7B49\u529F\u80FD\u573A\u666F\u4E2D\u3002")),e.createElement("h6",{className:"Font13 mTop24"},_l("\u6807\u9898\u5B57\u6BB5")),e.createElement("div",{className:"attr mTop6"},e.createElement("div",{className:Z()("inputTxt overflow_ellipsis",{noData:!R.controlName}),onClick:function(){t.setState({showControlList:!h})}},R.controlName||_l("\u8BF7\u9009\u62E9")),e.createElement(F.Z,{icon:"expand_more",className:"Font16",onClick:function(){t.setState({showControlList:!h})}}),h&&e.createElement(Vn,{columsList:S.filter(function(C){return!Ee.c_.includes(C.controlId)}),onClickAwayExceptions:[],onClickAway:function(){return t.setState({showControlList:!1})},id:g,setFn:function(T,j){t.setState({id:T,showControlList:!h}),A.Z.editWorksheetControls({worksheetId:o,appId:u,controls:[(0,L.default)({},j,{attribute:1})]}).then(function(X){}).catch(function(X){alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})}})),e.createElement("span",{className:"line"}),e.createElement("h5",null,_l("\u8BB0\u5F55\u540D\u79F0")),e.createElement("p",null,_l("\u8BBE\u7F6E\u5728\u6DFB\u52A0\u6309\u94AE\uFF0C\u6D88\u606F\u901A\u77E5\u7B49\u9700\u8981\u6307\u4EE3\u8BB0\u5F55\u65F6\u6240\u4F7F\u7528\u7684\u540D\u79F0\uFF0C\u5982\uFF1A\u53EF\u4EE5\u4FEE\u6539\u201C\u5BA2\u6237\u7BA1\u7406\u201D\u8868\u7684\u8BB0\u5F55\u540D\u79F0\u4E3A\u201C\u5BA2\u6237\u201D\u3002")),e.createElement("h6",{className:"Font13 mTop24"},_l("\u8BB0\u5F55\u540D\u79F0")),e.createElement("input",{type:"text",className:"name mTop6",placeholder:_l("\u8BF7\u8F93\u5165"),value:f,onFocus:function(){t.setState({nameFocus:!0})},onBlur:function(){f||t.setState({name:"\u8BB0\u5F55"}),t.setState({nameFocus:!1}),A.Z.updateEntityName({worksheetId:o,entityName:f,projectId:E}).then(function(T){r((0,L.default)({},v,{entityName:f}))}).catch(function(T){alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})},onChange:function(T){t.setState({name:T.target.value})}}),e.createElement("div",{className:"preview mTop18"},e.createElement("div",{className:"btn"},e.createElement("span",{className:"title WordBreak"},_l("\u6309\u94AE\u9884\u89C8")),e.createElement("span",{className:"btnCon TxtTop"},e.createElement(F.Z,{icon:"plus",className:"mRight8"}),e.createElement("span",{className:"Bold"},f))),e.createElement("div",{className:"notice mTop18"},e.createElement("span",{className:"title WordBreak"},_l("\u901A\u77E5\u9884\u89C8")),e.createElement("span",{className:"noticeCon"},e.createElement("span",{className:"appIcon"},e.createElement(F.Z,{icon:"workbench",className:"Font18"})),e.createElement("span",{className:"textCon"},e.createElement("span",{className:"text"},_l("\u5E94\u7528\u6D88\u606F:\u60A8\u5DF2\u88AB"),e.createElement("span",{className:""},"@",_l("\u5218\u5170")),_l("\u6DFB\u52A0\u4E3A"),e.createElement("b",{className:Z()("Normal",{nameFocus:w})},f),"\uFF1A",e.createElement("span",{className:""},_l("\u9500\u552E\u7EBF\u7D22\u7BA1\u7406")),_l("\u7684\u8D1F\u8D23\u4EBA")),e.createElement("span",{className:"time mTop20 Block"},"2020-05-09 10:21:35"))))),e.createElement("span",{className:"line"}),e.createElement("h5",{className:"Font17"},_l("\u5DE5\u4F5C\u8868/\u5B57\u6BB5\u522B\u540D")),e.createElement("p",null,_l("\u901A\u8FC7\u8BBE\u7F6E\u5DE5\u4F5C\u8868\u548C\u5B57\u6BB5\u522B\u540D\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u5728API\u3001webhook\u3001\u81EA\u5B9A\u4E49\u6253\u5370\u7B49\u573A\u666F\u4F7F\u7528\u7684\u65F6\u5019\u66F4\u5177\u6709\u8FA8\u8BC6\u5EA6\u3002")),e.createElement("h6",{className:"Font13 mTop24"},_l("\u5DE5\u4F5C\u8868\u522B\u540D")),e.createElement("input",{type:"text",className:"name mTop6",placeholder:_l("\u8BF7\u8F93\u5165"),value:k,onChange:function(T){t.setState({alias:T.target.value.trim()})},onBlur:function(T){A.Z.updateWorksheetAlias({appId:u,worksheetId:o,alias:T.target.value.trim()}).then(function(j){j===0?t.setState({alias:T.target.value.trim()}):alert(j===3?_l("\u5DE5\u4F5C\u8868\u522B\u540D\u683C\u5F0F\u4E0D\u5339\u914D"):j===2?_l("\u5DE5\u4F5C\u8868\u522B\u540D\u5DF2\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"):_l("\u522B\u540D\u4FEE\u6539\u5931\u8D25"),3)})}}),e.createElement("h6",{className:"Font13 mTop24"},_l("\u5B57\u6BB5\u522B\u540D")),e.createElement("div",{className:"btnAlias mTop6",onClick:function(){t.setState({showAliasDialog:!I})}},_l("\u8BBE\u7F6E\u5B57\u6BB5\u522B\u540D")))),I&&e.createElement(Hn,{showAliasDialog:I,controls:S,worksheetId:o,appId:u,setFn:function(T){t.setState((0,L.default)({},T))}})))}}]),n}(e.Component);const Xn=zn;var Qn=b(88902),Yn=b.n(Qn),Ve=b(66215),H=b(85315),Oe=b(14338),oe=b(86735),se=b(5017),Tt,Jn=(0,oe.Z)([`
  width: 320px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 12px 24px #0000003d;
  box-sizing: border-box;
  line-height: 1;
  font-size: 14px;
  font-weight: bold;
  // margin-bottom: 50px;
  transition: all 0.3s;
  animation-name: fadeInUp;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      box-shadow: 0px 0px 0px #fff;
      -webkit-transform: translate3d(-30px, 0, 0);
      transform: translate3d(-30px, 0, 0);
    }

    to {
      opacity: 1;
      box-shadow: 0px 12px 24px #0000003d;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .con {
    padding: 24px;
    max-height: 350px;
    overflow: auto;
    h5 {
      margin: 0;
      line-height: 1;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .Radio-text {
      font-weight: initial;
      color: #333;
    }
  }
  .conLine {
    margin: 0 24px;
    border-bottom: 1px solid #eaeaea;
  }
  .inputTxt {
    font-weight: normal;
  }
`],[`
  width: 320px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 12px 24px #0000003d;
  box-sizing: border-box;
  line-height: 1;
  font-size: 14px;
  font-weight: bold;
  // margin-bottom: 50px;
  transition: all 0.3s;
  animation-name: fadeInUp;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      box-shadow: 0px 0px 0px #fff;
      -webkit-transform: translate3d(-30px, 0, 0);
      transform: translate3d(-30px, 0, 0);
    }

    to {
      opacity: 1;
      box-shadow: 0px 12px 24px #0000003d;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .con {
    padding: 24px;
    max-height: 350px;
    overflow: auto;
    h5 {
      margin: 0;
      line-height: 1;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .Radio-text {
      font-weight: initial;
      color: #333;
    }
  }
  .conLine {
    margin: 0 24px;
    border-bottom: 1px solid #eaeaea;
  }
  .inputTxt {
    font-weight: normal;
  }
`]),Kn=(0,oe.Z)([`
  padding: 16px 24px;
  border-bottom: 1px solid #eaeaea;
  .ming.icon-close {
    float: right;
  }
  .ming.icon-close:hover {
    color: #2196f3 !important;
  }
`],[`
  padding: 16px 24px;
  border-bottom: 1px solid #eaeaea;
  .ming.icon-close {
    float: right;
  }
  .ming.icon-close:hover {
    color: #2196f3 !important;
  }
`]),qn=se.ZP.div(Jn),ea=se.ZP.div(Kn),ta=(0,qe.Z)(Tt=function(d){(0,le.default)(n,d);function n(){var c,t,a,i;(0,ae.default)(this,n);for(var l=arguments.length,r=Array(l),o=0;o<l;o++)r[o]=arguments[o];return i=(t=(a=(0,ee.default)(this,(c=n.__proto__||ne()(n)).call.apply(c,[this].concat(r))),a),a.el=null,a.getTop=function(s){setTimeout(function(){var h=a.el;if(h){var f=$(h).height()+s.top-$(".switchBoxCon").height();$(h).css({transition:"none"}),f>0?$(h).css({top:s.top-$(h).height()+48,transition:"all 0.3s"}):$(h).css({top:s.top,transition:"all 0.3s"})}},0)},t),(0,ee.default)(a,i)}return(0,re.default)(n,[{key:"componentDidMount",value:function(){this.getTop(this.props)}},{key:"componentWillReceiveProps",value:function(t){this.getTop(t)}},{key:"render",value:function(){var t=this,a=this.props,i=a.data,l=i===void 0?{}:i,r=a.diaRang,o=l.viewIds,s=o===void 0?[]:o;return e.createElement(qn,{className:"rangeBox Absolute",style:{left:645},ref:function(f){t.el=f}},e.createElement(ea,{className:"headerRange Font14 Gray"},_l("\u4F7F\u7528\u8303\u56F4"),e.createElement(F.Z,{icon:"close",className:"Font18 Gray_9e Hand",onClick:function(){t.props.closeFn()}})),e.createElement("div",{className:"con"},e.createElement("h5",{className:"Blod"},_l("\u7528\u6237")),e.createElement(Oe.Z,{text:_l("\u6240\u6709\u7528\u6237"),checked:this.props.roleType!==100,onClick:function(){t.props.change(0)}}),e.createElement("p",{className:"mLeft25 mTop10 mBottom16"}),e.createElement(Oe.Z,{title:_l("\u4EC5\u7CFB\u7EDF\u89D2\u8272"),text:e.createElement("span",{className:"TxtMiddle"},_l("\u4EC5\u7CFB\u7EDF\u89D2\u8272"),e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u5305\u542B\u7BA1\u7406\u5458\u3001\u8FD0\u8425\u8005\u3001\u5F00\u53D1\u8005"))},e.createElement(F.Z,{icon:"info_outline",className:"Gray_9e Font16 TxtTop mLeft5"}))),checked:this.props.roleType===100,onClick:function(){t.props.change(100)}})),this.props.hasViewRange&&e.createElement(e.Fragment,null,e.createElement("div",{className:"conLine"}),e.createElement("div",{className:"con"},e.createElement("h5",{className:"Blod"},_l("\u89C6\u56FE")),e.createElement(Oe.Z,{text:this.props.text.allview||_l("\u6240\u6709\u89C6\u56FE"),checked:s.length<=0&&r,onClick:function(){t.props.changeViewRange({viewIds:[],diaRang:!0})}}),e.createElement("p",{className:"mLeft25 mTop10 mBottom16"}),e.createElement(Oe.Z,{text:this.props.text.assignview||_l("\u5E94\u7528\u4E8E\u6307\u5B9A\u7684\u89C6\u56FE"),checked:s.length>0||!r,onClick:function(){t.props.changeViewRange({viewIds:[],diaRang:!1})}}),e.createElement("p",{className:"mLeft25 mTop10 mBottom16"}),!r&&this.props.views.map(function(h){return e.createElement("div",{className:"mTop15 mLeft25 inputTxt Hand",onClick:function(){s.includes(h.viewId)?t.props.changeViewRange({viewIds:N().pull(s,h.viewId),diaRang:!1}):t.props.changeViewRange({viewIds:(s||[]).concat(h.viewId),diaRang:!1})}},e.createElement("input",{type:"checkbox",className:"viewInput TxtMiddle",checked:s.includes(h.viewId)}),e.createElement("span",{className:"TxtMiddle"},h.name))}))))}}]),n}(e.Component))||Tt;const na=ta;var aa=b(42638),ra=(0,oe.Z)([""],[""]),la=se.ZP.div(ra);function oa(d){var n=d.show,c=d.onClose,t=d.worksheetId,a=d.appId,i=d.companyId,l=d.deleCallback,r=(0,e.useState)(!1),o=(0,V.Z)(r,2),s=o[0],h=o[1],f=(0,e.useState)(!1),w=(0,V.Z)(f,2),g=w[0],I=w[1],p=(0,e.useState)([]),k=(0,V.Z)(p,2),y=k[0],v=k[1],m=function(){h(!0),aa.Z.getProcessByControlId({controlId:"autoid",appId:t,companyId:i}).then(function(u){v(u),h(!1),I(!0)})},E=function(){A.Z.deleteWorksheetAutoID({worksheetId:t}).then(function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};u.data?(alert(_l("\u5220\u9664\u6210\u529F")),l()):alert(_l("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"),2),c()})};return e.createElement(Te.Z,{title:_l("\u5220\u9664\u7CFB\u7EDF\u7F16\u53F7\u5B57\u6BB5"),className:Z()("deleDialog"),onCancel:c,visible:n,footer:e.createElement("div",null,e.createElement(Xe.ZP,{className:"check",type:"ghostgray",onClick:function(){m()}},_l("\u68C0\u67E5")),e.createElement(Xe.ZP,{className:"onSur",type:"danger",onClick:function(){E()}},_l("\u5220\u9664")))},e.createElement(la,null,e.createElement("p",{className:""},s&&e.createElement(ke.Z,{size:"small",className:"InlineBlock mRight10"}),g?s?_l("\u68C0\u67E5\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u2026\u2026"):y.length<=0?_l("\u68C0\u67E5\u5B8C\u6BD5\uFF01\u4F60\u672A\u4F7F\u7528\u8FC7\u6B64\u5B57\u6BB5\uFF0C\u53EF\u653E\u5FC3\u5220\u9664"):_l("\u68C0\u67E5\u5B8C\u6BD5\uFF01\u4F60\u5728\u4EE5\u4E0B%0\u4E2A\u6D41\u7A0B\u4E2D\u4F7F\u7528\u4E86\u6B64\u5B57\u6BB5\u3002\u8BF7\u8C28\u614E\u5220\u9664",y.length):s?_l("\u68C0\u67E5\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u2026\u2026"):_l("\u5982\u679C\u4F60\u4E0D\u786E\u5B9A\u662F\u5426\u5DF2\u5728\u5DE5\u4F5C\u6D41\u4E2D\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7A0B\u5E8F\u68C0\u67E5")),!s&&g&&y.map(function(x){return e.createElement("div",{className:"mBottom6"},e.createElement("span",{className:"ThemeColor3"},x.name),(x.flowNodes||[]).length>0&&e.createElement("span",{className:""}," (  "+(x.flowNodes||[]).map(function(u){return u.name}).join(",")+" ) "))})))}var O=b(76345),sa=Te.Z.confirm,ia={10:_l("\u5728\u5DE5\u4F5C\u8868\u53F3\u4E0A\u65B9\u663E\u793A\u7684\u521B\u5EFA\u8BB0\u5F55\u6309\u94AE\u3002\u5173\u95ED\u540E\uFF0C\u5219\u65E0\u6CD5\u76F4\u63A5\u5728\u5DE5\u4F5C\u8868\u4E2D\u521B\u5EFA\u8BB0\u5F55\uFF0C\u53EA\u80FD\u901A\u8FC7\u5173\u8054\u8BB0\u5F55\u7B49\u5176\u4ED6\u4F4D\u7F6E\u521B\u5EFA"),22:e.createElement("div",null,_l("\u8868\u683C\u89C6\u56FE\u53EF\u4EE5\u5355\u5143\u683C\u76F4\u63A5\u7F16\u8F91\uFF1B"),e.createElement("br",null),_l("\u770B\u677F\u3001\u5C42\u7EA7\u3001\u7518\u7279\u56FE\u5728\u6807\u9898\u5B57\u6BB5\u4E3A\u6587\u672C\u7C7B\u578B\u65F6\u53EF\u4EE5\u53EA\u586B\u5199\u6807\u9898\u5B57\u6BB5\u5FEB\u901F\u521B\u5EFA\u8BB0\u5F55\uFF1B"),e.createElement("br",null),_l("\u53EF\u4EE5\u5728\u770B\u677F\u3001\u5C42\u7EA7\u3001\u753B\u5ECA\u548C\u8BE6\u60C5\u89C6\u56FE\u7684\u5361\u7247\u4E0A\u76F4\u63A5\u4FEE\u6539\u6587\u672C\u7C7B\u6807\u9898\u548C\u68C0\u67E5\u6846")),23:_l("\u4EC5\u63A7\u5236\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u6761\u5F62\u7801/\u4E8C\u7EF4\u7801\u6253\u5370\u529F\u80FD\u3002\u4E0D\u5305\u542B\u914D\u7F6E\u7684\u6253\u5370\u6A21\u677F"),32:_l("\u4EC5\u63A7\u5236\u7CFB\u7EDF\u9ED8\u8BA4\u63D0\u4F9B\u7684\u6253\u5370\u65B9\u5F0F\uFF0C\u4E0D\u5305\u542B\u6253\u5370\u6A21\u7248"),33:_l("\u53EF\u4EE5\u63A7\u5236\u9644\u4EF6\u7684\u4E0B\u8F7D\u3001\u5206\u4EAB\u3001\u4FDD\u5B58\u5230\u77E5\u8BC6\uFF08\u4E0D\u5305\u542B\u7528\u6237\u81EA\u884C\u4E0A\u4F20\u7684\u9644\u4EF6\uFF09"),37:e.createElement("div",null,e.createElement("div",null,_l("\u4F7F\u7528\u5BF9\u5E94\u8BB0\u5F55\u7684\u5B57\u6BB5\u503C\u65B0\u5EFA\u8BB0\u5F55\u3002")),e.createElement("div",null,_l("\u4EE5\u4E0B\u5B57\u6BB5\u7C7B\u578B\u5728\u521B\u5EFA\u65F6\u6709\u590D\u5236\u6570\u91CF\u9650\u5236:")),e.createElement("div",null,_l("\u5173\u8054\u8BB0\u5F55\uFF08\u5361\u7247\u548C\u4E0B\u62C9\u6846\uFF09\u6700\u591A\u590D\u52365\u6761;")),e.createElement("div",null,_l("\u5173\u8054\u8BB0\u5F55\uFF08\u5217\u8868\uFF09\u4E0D\u590D\u5236;")),e.createElement("div",null,_l("\u5B50\u8868\u8BB0\u5F55\u6700\u591A\u590D\u5236200\u6761;")),_l("\u5B50\u8868\u4E2D\u7684\u5173\u8054\u8BB0\u5F55\u6700\u591A\u590D\u52365\u6761\u3002")),40:_l("\u5728\u89C6\u56FE\u4E0A\u5448\u73B0\u6D41\u7A0B\u540D\u79F0\u3001\u72B6\u6001\u3001\u8282\u70B9\u8D1F\u8D23\u4EBA\u3001\u8282\u70B9\u5F00\u59CB\u3001\u5269\u4F59\u65F6\u95F4\u3001\u53D1\u8D77\u4EBA\u3001\u53D1\u8D77\u65F6\u95F4")};function ca(d){var n=d.worksheetId,c=d.worksheetInfo,t=c.views,a=t===void 0?[]:t,i=c.projectId,l=c.appId,r=(0,e.useState)(!1),o=(0,V.Z)(r,2),s=o[0],h=o[1],f=(0,e.useState)(!1),w=(0,V.Z)(f,2),g=w[0],I=w[1],p=(0,e.useState)(!1),k=(0,V.Z)(p,2),y=k[0],v=k[1],m=(0,e.useState)(!!c.closeAutoID),E=(0,V.Z)(m,2),x=E[0],u=E[1],S=(0,e.useState)({loading:!0,worksheetId:n,showDialog:!1,showData:{},showLocation:{}}),R=(0,V.Z)(S,2),C=R[0],T=R[1],j=(0,e.useState)(!1),X=(0,V.Z)(j,2),me=X[0],Ie=X[1];(0,e.useEffect)(function(){C.worksheetId&&W()},[C.worksheetId]),(0,e.useEffect)(function(){var J=d.worksheetInfo;u(!!J.closeAutoID)},[d]),(0,e.useEffect)(function(){I(localStorage.getItem("batchIsOpen")==="1"),v(localStorage.getItem("statisticsIsOpen")==="1")},[]);var G=function(B){var Q=B.filter(function(q){return O.hd.includes(q.type)})||[],Y=N().groupBy(B.filter(function(q){return![].concat((0,H.Z)(O.hd),[O.u_]).includes(q.type)}),function(q){return Math.floor(q.type/10)});return Y[1]=[].concat((0,H.Z)(Y[1]),[{view:[],state:Q.filter(function(q){return q.state}).length>0,type:O.u_,roleType:0,viewIds:[]}],(0,H.Z)(Q)),Y},W=function(){A.Z.getSwitch({worksheetId:C.worksheetId}).then(function(B){var Q=B;T((0,L.default)({},C,{loading:!1,data:Q,list:G(Q)}))})},K=function(B){var Q=B.roleType,Y=B.type,q=B.state,pe=B.viewIds,D=[(0,L.default)({},B)];if([].concat((0,H.Z)(O.dC),[25]).includes(Y))if(Y===25)D.push.apply(D,(0,H.Z)(C.data.filter(function(U){return O.dC.includes(U.type)}).map(function(U){return(0,L.default)({},N().pick(U,["roleType","type","state","viewIds"]),{state:q})})));else{var fe=C.data.filter(function(U){return O.dC.includes(U.type)&&Y!==U.type});D.push.apply(D,(0,H.Z)(fe));var xe=D.filter(function(U){return U.state}).length,Ze=xe<=0;Ze&&D.push.apply(D,(0,H.Z)(C.data.filter(function(U){return U.type===25}).map(function(U){return(0,L.default)({},N().pick(U,["roleType","type","state","viewIds"]),{state:!1})})))}if([O.u_].concat((0,H.Z)(O.hd)).includes(Y))if(Y===O.u_)D.push.apply(D,(0,H.Z)(C.data.filter(function(U){return O.hd.includes(U.type)}).map(function(U){return(0,L.default)({},N().pick(U,["roleType","type","state","viewIds"]),{state:q})})));else{var Ce=C.data.filter(function(U){return O.hd.includes(U.type)&&Y!==U.type});D.push.apply(D,(0,H.Z)(Ce));var Ue=D.filter(function(U){return U.state}).length,Be=Ue<=0;Be&&D.push.apply(D,(0,H.Z)(C.data.filter(function(U){return U.type===O.u_}).map(function(U){return(0,L.default)({},N().pick(U,["roleType","type","state","viewIds"]),{state:!1})})))}A.Z.batchEditSwitch({worksheetId:C.worksheetId,switchList:D.filter(function(U){return U.type!==O.u_})}).then(function(U){if(U){var Me=D.map(function(P){return P.type}),Ae=C.data.filter(function(P){return!Me.includes(P.type)});Ae.push.apply(Ae,D),T((0,L.default)({},C,{data:Ae,list:G(Ae),showData:B}))}else alert(_l("\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"),2)})},ge=function(B){var Q="";switch(B){case"1":Q=_l("\u5DE5\u4F5C\u8868");break;case"2":Q=_l("\u89C6\u56FE");break;case"3":Q=_l("\u8BB0\u5F55");break;case"4":Q=_l("\u5BA1\u6279");break;default:Q="";break}return Q},We=function(B,Q){var Y=Q.viewIds,q=Y===void 0?[]:Y,pe=q.length,D=a.map(function(xe){return xe.viewId}),fe=q.filter(function(xe){return D.includes(xe)}).length;switch(B){case"2":case"4":return pe<=0?_l("\u6240\u6709\u89C6\u56FE"):_l("%0\u4E2A\u89C6\u56FE",fe);case"3":return pe<=0?_l("\u6240\u6709\u8BB0\u5F55"):_l("%0\u4E2A\u89C6\u56FE\u4E0B\u7684\u8BB0\u5F55",fe)}},je=function(B){var Q=B.showData,Y=Q.viewIds,q=Y===void 0?[]:Y,pe=Q.state;if(q.length<=0&&!me&&pe){alert("\u81F3\u5C11\u9009\u4E2D\u4E00\u4E2A\u89C6\u56FE\uFF01",3);return}T((0,L.default)({},B,{showData:{},showDialog:!1})),Ie(!1)},Se=function(B){return e.createElement(Ve.Z,{checked:B.state,onClick:function(){if(!C.showDialog){if([20,30].includes(B.type)&&B.state)return sa({title:e.createElement("span",{className:"Red"},_l("\u5173\u95ED%0",O.jY[B.type])),description:_l("\u5173\u95ED\u540E\uFF0C\u5DF2\u7ECF\u5206\u4EAB\u7684\u94FE\u63A5\u5C06\u4F1A\u5931\u6548\u65E0\u6CD5\u8BBF\u95EE"),onOk:function(){K({state:!B.state,type:B.type,roleType:B.roleType})}});K({state:!B.state,type:B.type,roleType:B.roleType})}},className:"mRight18"})};return e.createElement(e.Fragment,null,C.loading?e.createElement(ke.Z,null):e.createElement(Ne.Z,null,e.createElement("div",{className:"switchBox"},e.createElement("div",{className:"switchBoxCon"},e.createElement("h5",null,_l("\u529F\u80FD\u5F00\u5173")),e.createElement("p",null,_l("\u8BBE\u7F6E\u542F\u7528\u7684\u7CFB\u7EDF\u529F\u80FD\u548C\u4F7F\u7528\u8303\u56F4")),Yn()(C.list).map(function(J){var B=C.list[J];B=B.sort(function(D,fe){return O.cL.indexOf(D.type)-O.cL.indexOf(fe.type)});var Q=C.data.filter(function(D){return O.dC.includes(D.type)&&D.state}).length,Y=Q<=0,q=C.data.filter(function(D){return O.hd.includes(D.type)&&D.state}).length,pe=q<=0;return e.createElement(e.Fragment,null,e.createElement("h6",{className:"Font13 mTop24 Gray Bold"},ge(J)),e.createElement("ul",{className:"mTop12"},B.map(function(D){return D.type===31||O.dC.includes(D.type)&&(Y||g)||O.hd.includes(D.type)&&(pe||y)?"":e.createElement("li",{className:Z()({current:(C.showData.type||"")===D.type,isOpen:D.state})},[].concat((0,H.Z)(O.dC),(0,H.Z)(O.hd)).includes(D.type)?e.createElement("div",{className:"InlineBlock mRight18 nullBox"}):Se(D),[].concat((0,H.Z)(O.dC),(0,H.Z)(O.hd)).includes(D.type)&&Se(D),e.createElement("span",{className:"con flexRow",onClick:function(xe){var Ze=xe.target;if(D.state){var Ce=D.viewIds,Ue=Ce===void 0?[]:Ce;Ie(Ue.length<=0),T((0,L.default)({},C,{showData:D,showDialog:C.showData.type&&C.showData.type!==D.type?!0:!C.showDialog,showLocation:{left:xe.clientX,top:$(Ze).closest("li").length?$(Ze).closest("li").position().top:0}}))}}},O.jY[D.type],D.type===21&&e.createElement("span",{className:"Gray_9e InlineBlock overflow_ellipsis WordBreak TxtMiddle",style:{maxWidth:330},title:_l("\u6279\u91CF\u64CD\u4F5C\u4E2D\u7684\u5BFC\u51FA\u529F\u80FD\u9700\u989D\u5916\u8BBE\u7F6E")},"\uFF08",_l("\u6279\u91CF\u64CD\u4F5C\u4E2D\u7684\u5BFC\u51FA\u529F\u80FD\u9700\u989D\u5916\u8BBE\u7F6E"),"\uFF09"),[25].includes(D.type)&&!Y&&e.createElement("span",{className:"mLeft5 Gray_9e"},Q,"/",O.dC.length),[O.u_].includes(D.type)&&!pe&&e.createElement("span",{className:"mLeft5 Gray_9e"},q,"/",O.hd.length),O.jk.includes(D.type)&&e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,ia[D.type])},e.createElement(F.Z,{icon:"help",className:"Font14 Gray_9e mLeft4"})),D.roleType===100&&D.state&&e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u4EC5\u7CFB\u7EDF\u89D2\u8272\u53EF\u89C1\uFF08\u5305\u542B\u7BA1\u7406\u5458\u3001\u8FD0\u8425\u8005\u3001\u5F00\u53D1\u8005\uFF09"))},e.createElement(F.Z,{icon:"visibility_off",className:""})),[25].includes(D.type)&&!Y&&e.createElement("span",{className:"batchIsOpen Right Hand ThemeHoverColor3",onClick:function(){safeLocalStorageSetItem("batchIsOpen",g?null:"1"),I(!g)}},g?_l("\u5C55\u5F00"):_l("\u6536\u8D77")),[O.u_].includes(D.type)&&!pe&&e.createElement("span",{className:"batchIsOpen Right Hand ThemeHoverColor3",onClick:function(){safeLocalStorageSetItem("statisticsIsOpen",y?null:"1"),v(!y)}},y?_l("\u5C55\u5F00"):_l("\u6536\u8D77")),O.DX.includes(D.type)&&D.state&&e.createElement(F.Z,{icon:"navigate_next",className:"Gray_c Right Hand Font20"}),D.state&&!O.o$.includes(D.type)&&e.createElement("span",{className:"Gray_bd Right text"},J==="1"?D.roleType===100?_l("\u4EC5\u7CFB\u7EDF\u89D2\u8272"):_l("\u6240\u6709\u7528\u6237"):We(J,D))))})))})),C.showDialog&&!O.o$.includes(C.showData.type||"")&&e.createElement(na,{showDialog:C.showDialog,hasViewRange:![].concat((0,H.Z)(O.hd),[10,11,12,13,14]).includes(C.showData.type||""),text:{allview:C.showData.type/10>=4?_l("\u6240\u6709\u8BB0\u5F55"):"",assignview:C.showData.type/10>=4?_l("\u5E94\u7528\u4E8E\u6307\u5B9A\u7684\u89C6\u56FE\u4E0B\u7684\u8BB0\u5F55"):""},onClickAwayExceptions:[".switchBox li.isOpen .con"],onClickAway:function(){je(C)},diaRang:me,closeFn:function(){je(C)},roleType:C.showData.roleType,change:function(B){K((0,L.default)({},C.showData,{roleType:B}))},top:C.showLocation.top,changeViewRange:function(B){K((0,L.default)({},C.showData,N().omit(B,"diaRang"))),Ie(B.diaRang)},views:a,data:C.showData}),!x&&e.createElement(e.Fragment,null,e.createElement("h6",{className:"Font13 mTop24 Gray Bold"},_l("\u5176\u4ED6")),e.createElement("div",{className:""},e.createElement("ul",{className:"mTop12"},e.createElement("li",{className:"autoId pRight16"},e.createElement("div",{className:""},_l("\u7CFB\u7EDF\u7F16\u53F7"),e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u7CFB\u7EDF\u7F16\u53F7\u4E3A\u4E4B\u524D\u521B\u5EFA\u7684\u5DE5\u4F5C\u8868\u4E2D\u7528\u4E8E\u751F\u6210\u5E8F\u53F7\u7684\u7CFB\u7EDF\u5B57\u6BB5\uFF0C\u6BCF\u589E\u52A0\u4E00\u6761\u8BB0\u5F55\u65F6\u81EA\u52A8+1\uFF0C\u4EC5\u5728\u5DE5\u4F5C\u6D41\u4E2D\u53EF\u4EE5\u4F7F\u7528\u6B64\u5B57\u6BB5\u3002\u73B0\u5728\u5DF2\u88AB\u81EA\u52A8\u7F16\u53F7\u5B57\u6BB5\u4EE3\u66FF\uFF0C\u65B0\u521B\u5EFA\u7684\u5DE5\u4F5C\u8868\u4E0D\u518D\u5305\u542B\u6B64\u5B57\u6BB5\u3002\u5982\u679C\u4F60\u672A\u4F7F\u7528\u8FC7\u6B64\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u5220\u9664\u4EE5\u63D0\u5347\u5728\u5927\u6570\u636E\u91CF\u65F6\u7684\u5DE5\u4F5C\u8868\u6027\u80FD"))},e.createElement(F.Z,{icon:"help",className:"Font14 Gray_9e mLeft4"}))),e.createElement("span",{className:"Hand text dele",onClick:function(){h(!0)}},_l("\u5220\u9664"))))),s&&e.createElement(oa,{show:s,appId:l,companyId:i,onClose:function(){return h(!1)},worksheetId:n,deleCallback:function(){u(!0)}})))))}const da=ca;var ua=b(12985),ma=b(31742),pa=b(45371),fa=b(57853),ze=b(93002),ha=b(63025),va=(0,oe.Z)([`
  height: 53px;
  padding: 0 68px 0 26px;
  .trashSearch {
    .icon {
      top: 8px;
    }
    input {
      width: 184px;
      height: 30px;
      background: #f5f5f5;
      border-radius: 16px 16px 16px 16px;
    }
  }
`],[`
  height: 53px;
  padding: 0 68px 0 26px;
  .trashSearch {
    .icon {
      top: 8px;
    }
    input {
      width: 184px;
      height: 30px;
      background: #f5f5f5;
      border-radius: 16px 16px 16px 16px;
    }
  }
`]),ga=(0,oe.Z)([`
  .table {
    height: 600px;
    min-height: 600px;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    .nameWrapTr,
    .rageWrapTr {
      min-width: 260px;
      max-width: 260px;
    }
    .iconWrap {
      width: 36px;
      min-width: 36px;
      height: 36px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 24px;
        color: #fff;
      }
    }
    .optionWrapTr {
      max-width: 100px;
      text-align: right;
      padding-right: 10px;
    }
    .nullData {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100% - 60px) !important;
      .emptyIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        border-radius: 130px;
        background: #f5f5f5;
        .icon {
          color: #bdbdbd;
          font-size: 66px;
        }
      }
    }
    font-weight: 400;
    .trashHeader {
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }
    .trashLi {
      padding: 15px 10px;
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
      .icon-reply1,
      .icon-delete1 {
        color: #9d9d9d;
        cursor: pointer;
        opacity: 0;
        font-size: 20px;
      }
      &:hover {
        background: #f5f5f5;
        .icon-reply1,
        .icon-delete1 {
          opacity: 1;
        }
        .icon-reply1 {
          &:hover {
            color: #2196f3;
          }
        }
        .icon-delete1 {
          &:hover {
            color: #f32121;
          }
        }
      }
    }
  }
`],[`
  .table {
    height: 600px;
    min-height: 600px;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    .nameWrapTr,
    .rageWrapTr {
      min-width: 260px;
      max-width: 260px;
    }
    .iconWrap {
      width: 36px;
      min-width: 36px;
      height: 36px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 24px;
        color: #fff;
      }
    }
    .optionWrapTr {
      max-width: 100px;
      text-align: right;
      padding-right: 10px;
    }
    .nullData {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100% - 60px) !important;
      .emptyIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        border-radius: 130px;
        background: #f5f5f5;
        .icon {
          color: #bdbdbd;
          font-size: 66px;
        }
      }
    }
    font-weight: 400;
    .trashHeader {
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }
    .trashLi {
      padding: 15px 10px;
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
      .icon-reply1,
      .icon-delete1 {
        color: #9d9d9d;
        cursor: pointer;
        opacity: 0;
        font-size: 20px;
      }
      &:hover {
        background: #f5f5f5;
        .icon-reply1,
        .icon-delete1 {
          opacity: 1;
        }
        .icon-reply1 {
          &:hover {
            color: #2196f3;
          }
        }
        .icon-delete1 {
          &:hover {
            color: #f32121;
          }
        }
      }
    }
  }
`]),xa=se.ZP.div(va),wa=se.ZP.div(ga);function Ea(d){var n=d.projectId,c=d.appId,t=d.worksheetId,a=d.views,i=(0,ze.Z)({loading:!1,list:[],allList:[],keyWords:""}),l=(0,V.Z)(i,2),r=l[0],o=r.loading,s=r.list,h=r.allList,f=r.keyWords,w=l[1];(0,e.useEffect)(function(){g()},[]);var g=function(){o||(w({loading:!0}),A.Z.getWorksheetBtns({appId:c,status:9,worksheetId:t}).then(function(u){w({list:u||[],allList:u||[],loading:!1})}))},I=function(u){A.Z.optionWorksheetBtn({appId:c,btnId:u,viewId:"",worksheetId:t,optionType:11}).then(function(S){S?(w({keyWords:""}),alert(_l("\u6062\u590D\u6210\u529F")),g(),d.onChange()):alert(_l("\u6062\u590D\u5931\u8D25"),2)})},p=function(u){A.Z.optionWorksheetBtn({appId:c,btnId:u,viewId:"",worksheetId:t,optionType:999}).then(function(S){S?(alert(_l("\u5F7B\u5E95\u5220\u9664\u6210\u529F")),w({keyWords:""}),g()):alert(_l("\u5F7B\u5E95\u5220\u9664\u5931\u8D25"),2)})},k=function(u){var S=safeParse(_.get(u,"advancedSetting.listviews"),"array"),R=safeParse(_.get(u,"advancedSetting.detailviews"),"array"),C=_.uniq([].concat((0,H.Z)(S),(0,H.Z)(R)));return C.length>0?e.createElement("span",{className:""},C.map(function(T){var j=a.find(function(X){return X.viewId===T})||{};return j.name||_l("\u8BE5\u89C6\u56FE\u5DF2\u5220\u9664")}).join(",")):_l("\u672A\u5206\u914D\u89C6\u56FE")},y=[{id:"name",className:"nameWrapTr",name:_l("\u52A8\u4F5C\u540D\u79F0"),render:function(u,S){return e.createElement("div",{className:"flexRow flex alignItemsCenter"},e.createElement("div",{className:Z()("iconWrap",{"Border BorderGrayColor":u.color==="transparent"}),style:{backgroundColor:u.color?u.color:"#9e9e9e"}},e.createElement(F.Z,{icon:u.icon||"custom_actions",className:Z()("iconTitle Font16 White",{Gray:u.color==="transparent"})})),e.createElement("div",{className:"flex name Font14 mLeft10 mRight24 WordBreak overflow_ellipsis",title:u.name},u.name))}},{id:"type",name:_l("\u4F7F\u7528\u8303\u56F4"),className:"rageWrapTr",sorter:!0,render:function(u,S){return e.createElement("div",{className:"view flex overflow_ellipsis"},u.isAllView===1?e.createElement("span",{className:"viewText Gray_9e WordBreak overflow_ellipsis",title:_l("\u6240\u6709\u8BB0\u5F55")},_l("\u6240\u6709\u8BB0\u5F55")):e.createElement("span",{className:"viewText Gray_9e WordBreak overflow_ellipsis",style:{WebkitBoxOrient:"vertical"},title:k(u)},k(u)))}},{id:"updateAccount",name:_l("\u5220\u9664\u8005"),render:function(u,S){return e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement(fa.Z,{projectId:n,size:28,user:{userHead:_.get(u,"updateAccount.avatar"),accountId:_.get(u,"updateAccount.accountId")}}),e.createElement("div",{className:"mLeft12 ellipsis flex mRight20"},_.get(u,"updateAccount.fullname")))}},{id:"updateTime",name:_l("\u5220\u9664\u65F6\u95F4"),sorter:!0,render:function(u,S){return u.updateTime}},{id:"option",className:"optionWrapTr",name:"",render:function(u,S){return e.createElement("div",{className:"flex"},e.createElement(ce.Z,{text:e.createElement("span",null,_l("\u6062\u590D")),popupPlacement:"bottom"},e.createElement("i",{className:"icon icon-reply1",onClick:function(){I(u.btnId)}})),e.createElement(ce.Z,{text:e.createElement("span",null,_l("\u5F7B\u5E95\u5220\u9664")),popupPlacement:"bottom"},e.createElement("i",{className:"icon icon-delete1 mLeft25",onClick:function(){(0,pa.Z)({title:_l("\u5C06\u5F7B\u5E95\u5220\u9664\u52A8\u4F5C\u201C%0\u201D",u.name),description:_l("\u5F7B\u5E95\u5220\u9664\u8BE5\u6570\u636E\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002"),data:[{text:_l("\u6211\u786E\u5B9A\u6267\u884C\u6B64\u64CD\u4F5C"),value:!0}],okText:_l("\u5F7B\u5E95\u5220\u9664"),buttonType:"danger",onOk:function(){p(u.btnId)}})}})))}}],v=function(u){return e.createElement("div",{className:"flexRow trashLi alignItemsCenter"},y.map(function(S){return e.createElement("div",{className:Z()("flex flexRow alignItemsCenter",S.className)},S.render(u))}))},m=function(){return e.createElement("div",{className:"flexRow trashHeader alignItemsCenter"},y.map(function(u){return e.createElement("div",{className:Z()("flex",u.className)},u.id!=="option"?u.name:"")}))},E=function(){return e.createElement(e.Fragment,null,m(),e.createElement(Ne.Z,{className:"flex"},s.map(function(u){return v(u)})))};return e.createElement(Te.Z,{className:"btnTrashDialog",width:"1000",headerClass:"pAll0",visible:!0,title:null,footer:null,onCancel:d.onCancel},e.createElement(wa,{className:"flexColumn"},e.createElement(xa,{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"Font17 flex"},_l("\u56DE\u6536\u7AD9"),"\uFF08 ",_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C"),"\uFF09",e.createElement("span",{className:"Gray_9e Font13 mLeft10"},_l("\u53EF\u6062\u590D60\u5929\u5185\u5220\u9664\u7684\u81EA\u5B9A\u4E49\u52A8\u4F5C"))),e.createElement(ha.Z,{className:"trashSearch",placeholder:_l("\u52A8\u4F5C\u540D\u79F0"),value:f,handleChange:function(u){return w({keyWords:u,list:h.filter(function(S){return S.name.indexOf(u)>=0})})}})),e.createElement("div",{className:"table flex flexColumn pLeft20 pRight20 pTop10 pBottom10"},o?e.createElement(ke.Z,null):s.length<=0?e.createElement("div",{className:"nullData TxtCenter flex"},e.createElement("div",{className:"emptyIcon"},e.createElement("i",{className:"icon icon-custom_-page_delete"})),e.createElement("p",{className:"TxtCenter Gray_9e Font17 mTop10"},f?_l("\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u7ED3\u679C"):_l("\u56DE\u6536\u7AD9\u6682\u65E0\u5185\u5BB9"))):E())))}var Ia=b(63239),Pe=b.n(Ia),Ca=(0,oe.Z)([`
  width: 320px;
  background: #ffffff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  .viewList {
    border-top: 1px solid #f5f5f5;
    max-height: 300px;
    overflow: auto;
    .viewName {
      word-break: break-all;
    }
  }
  .pAll16 {
    padding: 16px;
  }
`],[`
  width: 320px;
  background: #ffffff;
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.24);
  border-radius: 3px 3px 3px 3px;
  .viewList {
    border-top: 1px solid #f5f5f5;
    max-height: 300px;
    overflow: auto;
    .viewName {
      word-break: break-all;
    }
  }
  .pAll16 {
    padding: 16px;
  }
`]),ya=(0,oe.Z)([`
  display: block;
  padding: 16px 24px;
  font-weight: bold;
  border-bottom: 1px solid #f5f5f5;
  .ming.icon-close {
    float: right;
  }
  .ming.icon-close:hover {
    color: #2196f3 !important;
  }
`],[`
  display: block;
  padding: 16px 24px;
  font-weight: bold;
  border-bottom: 1px solid #f5f5f5;
  .ming.icon-close {
    float: right;
  }
  .ming.icon-close:hover {
    color: #2196f3 !important;
  }
`]),Na=se.ZP.div(Ca),ka=se.ZP.div(ya);function ba(d){var n=d.onClose,c=d.data,t=d.onChange,a=d.views,i=(c.writeObject===2||c.writeType===2)&&c.clickType===3,l=(0,ze.Z)({viewIds:[],viewSheetIds:[],isAllDt:!1,isAllList:!1,hsDt:!1,hsList:!1}),r=(0,V.Z)(l,2),o=r[0],s=o.isAllDt,h=o.isAllList,f=o.viewIds,w=o.viewSheetIds,g=o.hsDt,I=o.hsList,p=r[1];return(0,e.useEffect)(function(){var k=d.views.map(function(v){return v.viewId}),y=d.views.filter(function(v){return v.viewType===0}).map(function(v){return v.viewId});p({viewIds:k,viewSheetIds:y,isAllDt:k.filter(function(v){return!safeParse(N().get(c,"advancedSetting.detailviews"),"array").includes(v)}).length<=0,hsDt:k.filter(function(v){return safeParse(N().get(c,"advancedSetting.detailviews"),"array").includes(v)}).length>0,isAllList:y.filter(function(v){return!safeParse(N().get(c,"advancedSetting.listviews"),"array").includes(v)}).length<=0,hsList:y.filter(function(v){return safeParse(N().get(c,"advancedSetting.listviews"),"array").includes(v)}).length>0})},[d]),e.createElement(Na,{className:""},e.createElement(ka,{className:"headerRange Font14 Gray"},_l("\u4F7F\u7528\u8303\u56F4"),e.createElement(F.Z,{icon:"close",className:"Font18 Gray_9e Hand",onClick:function(){n()}})),e.createElement("div",{className:"pLeft16 pBottom16"},e.createElement("div",{className:"mTop16"},e.createElement(Oe.Z,{text:_l("\u6240\u6709\u8BB0\u5F55"),checked:c.isAllView===1,onClick:function(){t((0,L.default)({},c,{isAllView:1,advancedSetting:N().omit(N().get(c,"advancedSetting"),["detailviews","listviews"])}))}})),e.createElement("div",{className:"mTop16"},e.createElement(Oe.Z,{text:_l("\u5E94\u7528\u4E8E\u6307\u5B9A\u89C6\u56FE"),checked:c.isAllView!==1,onClick:function(){t((0,L.default)({},c,{isAllView:0}))}}))),e.createElement("ul",{className:"dropOptionTrigger"},c.isAllView!==1&&e.createElement("div",{className:"viewList"},e.createElement("div",{className:"viewListLi pAll16"},e.createElement("div",{className:"flexRow alignItemsCenter Bold"},e.createElement("span",{className:"flex"},_l("\u89C6\u56FE")),e.createElement("span",{className:"flex Hand",onClick:function(){t((0,L.default)({},c,{advancedSetting:s?N().omit(N().get(c,"advancedSetting"),["detailviews"]):(0,L.default)({},N().get(c,"advancedSetting"),{detailviews:Pe()(f)})}))}},e.createElement(ve.Z,{className:"viewInput TxtMiddle",size:"small",checked:s,clearselected:!s&&g,text:_l("\u8BB0\u5F55\u8BE6\u60C5")})),i?e.createElement("span",{className:"flex"}):e.createElement("span",{className:"flex Hand",onClick:function(){t((0,L.default)({},c,{advancedSetting:h?N().omit(N().get(c,"advancedSetting"),["listviews"]):(0,L.default)({},N().get(c,"advancedSetting"),{listviews:Pe()(w)})}))}},e.createElement(ve.Z,{className:"viewInput TxtMiddle",size:"small",checked:h,clearselected:!h&&I,text:_l("\u6279\u91CF\u64CD\u4F5C")}))),a.map(function(k){var y=safeParse(N().get(c,"advancedSetting.detailviews"),"array").includes(k.viewId),v=safeParse(N().get(c,"advancedSetting.listviews"),"array").includes(k.viewId);return e.createElement("div",{className:"flexRow alignItemsCenter mTop10"},e.createElement("span",{className:"flex viewName"},k.name),e.createElement("span",{className:"flex Hand",onClick:function(){t((0,L.default)({},c,{advancedSetting:(0,L.default)({},N().get(c,"advancedSetting"),{detailviews:Pe()(y?safeParse(N().get(c,"advancedSetting.detailviews"),"array").filter(function(E){return E!==k.viewId}):[].concat((0,H.Z)(safeParse(N().get(c,"advancedSetting.detailviews"),"array")),[k.viewId]))})}))}},e.createElement(ve.Z,{className:"viewInput TxtMiddle",size:"small",checked:y,text:null})),k.viewType===0&&!i?e.createElement("span",{className:"flex Hand",onClick:function(){t((0,L.default)({},c,{advancedSetting:(0,L.default)({},N().get(c,"advancedSetting"),{listviews:Pe()(v?safeParse(N().get(c,"advancedSetting.listviews"),"array").filter(function(E){return E!==k.viewId}):[].concat((0,H.Z)(safeParse(N().get(c,"advancedSetting.listviews"),"array")),[k.viewId]))})}))}},e.createElement(ve.Z,{className:"viewInput TxtMiddle",size:"small",checked:v,text:null})):e.createElement("span",{className:"flex"}))})))))}var Ta=Te.Z.confirm;function _t(d){var n=(0,e.useRef)(null),c=d.onChange,t=d.getSheetBtns,a=d.views,i=a===void 0?[]:a,l=d.appId,r=d.btnList,o=d.worksheetId,s=(0,ze.Z)({showDropOption:!1,showMoreOption:!1,isRename:!1,it:d.it}),h=(0,V.Z)(s,2),f=h[0],w=f.showDropOption,g=f.showMoreOption,I=f.isRename,p=f.it,k=h[1];(0,e.useEffect)(function(){k({it:d.it})},[d]),(0,e.useEffect)(function(){I&&n.current.focus()},[I]);var y=function(u,S){A.Z.saveWorksheetBtn((0,L.default)({btnId:p.btnId,worksheetId:o},u)).then(function(R){S&&S()})},v=function(){A.Z.copyWorksheetBtn({appId:l,viewId:"",btnId:p.btnId,worksheetId:o}).then(function(u){u?(t(),alert(_l("\u590D\u5236\u6210\u529F"))):alert(_l("\u590D\u5236\u5931\u8D25"),2)})},m=function(u){var S=u.appId,R=u.viewId,C=u.optionType,T=u.callback;A.Z.optionWorksheetBtn({appId:S,viewId:R,btnId:p.btnId,worksheetId:o,optionType:C}).then(function(j){j?(alert(_l("\u5220\u9664\u6210\u529F")),t()):alert(_l("\u5220\u9664\u5931\u8D25"),2)})},E=function(){var u=safeParse(_.get(p,"advancedSetting.listviews"),"array"),S=safeParse(_.get(p,"advancedSetting.detailviews"),"array"),R=(p.writeObject===2||p.writeType===2)&&p.clickType===3,C=R?S:[].concat((0,H.Z)(S),(0,H.Z)(u)),T=_.uniq(C);if(T.length>0){var j=T.map(function(X){var me=i.find(function(Ie){return Ie.viewId===X})||{};return me.name}).filter(function(X){return X}).join(",");return j}return _l("\u672A\u5206\u914D\u89C6\u56FE")};return e.createElement("div",{className:"printTemplatesList-tr printBtnsList-tr"},e.createElement("div",{className:"name flex mRight20 valignWrapper overflowHidden"},e.createElement(F.Z,{icon:p.icon||"custom_actions",style:{color:p.color?p.color==="transparent"&&!p.icon?"#9e9e9e":p.color==="transparent"?"#333":p.color:"#2196f3"},className:"iconTitle Font24 mRight13"}),I?e.createElement("input",{type:"text",ref:n,defaultValue:p.name,onBlur:function(u){var S=_.trim(u.target.value);if(k({templateId:"",isRename:!1}),!S){alert(_l("\u8BF7\u8F93\u5165\u6309\u94AE\u540D\u79F0"),3),n.current.focus();return}if(r.find(function(C){return C.name===S&&C.btnId!==p.btnId})){alert(_l("\u6309\u94AE\u540D\u79F0\u91CD\u540D\uFF0C\u8BF7\u91CD\u65B0\u4FEE\u6539"),3),n.current.focus();return}var R=r.map(function(C){return C.btnId===p.btnId?(0,L.default)({},C,{name:S}):C});c({btnList:R}),y({name:_.trim(u.target.value),EditAttrs:["name"],btnId:p.btnId})}}):e.createElement(ce.Z,{text:p.name},e.createElement("span",{className:"overflow_ellipsis"},p.name))),e.createElement("div",{className:"views flex mRight20"},e.createElement("div",{className:"viewsBox"},p.isAllView===1?e.createElement("span",{className:"viewText Gray"},_l("\u6240\u6709\u8BB0\u5F55")):e.createElement("span",{className:"viewText Gray",style:{WebkitBoxOrient:"vertical"}},E()))),e.createElement("div",{className:"activeCon mRight8 w120px"},e.createElement($e.Z,{popupVisible:w,action:["click"],popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}},getPopupContainer:function(){return document.body},onPopupVisibleChange:function(u){k({showDropOption:u,templateId:u?p.btnId:""})},popup:e.createElement(ba,{onClose:function(){k({showDropOption:!1})},data:p,views:i,onChange:function(u){var S=(0,L.default)({},u,{displayViews:[]});y((0,L.default)({},S,{editAttrs:["advancedSetting","isAllView","displayViews"]}),function(){var R=r.map(function(C){return C.btnId===p.btnId?S:C});c({btnList:R})})}})},e.createElement("span",{className:"Hand Bold"},_l("\u4F7F\u7528\u8303\u56F4"))),e.createElement("span",{className:"Hand mLeft20 Bold",onClick:function(){c({isEdit:!0,showCreateCustomBtn:!0,btnId:p.btnId})}},_l("\u7F16\u8F91"))),e.createElement("div",{className:"more w80px TxtCenter"},e.createElement(F.Z,{icon:"task-point-more",className:"moreActive Hand Font18 Gray_9e Hover_21",onClick:function(){k({showMoreOption:!0,templateId:p.btnId})}}),g&&e.createElement(dt,{showCopy:!0,onCopy:function(){return Ta({title:e.createElement("span",{className:"WordBreak Block"},_l("\u590D\u5236\u81EA\u5B9A\u4E49\u52A8\u4F5C\u201C%0\u201D",p.name)),description:_l("\u5C06\u590D\u5236\u76EE\u6807\u81EA\u5B9A\u4E49\u52A8\u4F5C\u7684\u6240\u6709\u8282\u70B9\u548C\u914D\u7F6E"),onOk:function(){v()}})},delTxt:_l("\u5220\u9664\u52A8\u4F5C"),description:_l("\u52A8\u4F5C\u5C06\u88AB\u5220\u9664\uFF0C\u8BF7\u786E\u8BA4\u6267\u884C\u6B64\u64CD\u4F5C"),showMoreOption:g,onClickAwayExceptions:[],onClickAway:function(){k({showMoreOption:!1})},setFn:function(u){k({showMoreOption:!1,isRename:!0})},deleteFn:function(){m({appId:l,viewId:"",optionType:9,callback:function(){}})}})))}var _a=(0,oe.Z)([`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative !important;
  .createCustomBtnCon {
    z-index: 1;
  }
  .topBox {
    position: relative;
    background: none !important;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 3px 3px 0px 0px;
      border-top: 1px solid #000;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }
    .moreActive {
      z-index: 1;
      color: #7d7d7d !important;
    }
    span {
      // z-index: 1;
      position: relative;
      color: #333 !important;
    }
    input {
      z-index: 1;
      position: relative;
    }
  }
  .trash {
    color: #757575;
    .trashIcon {
      color: #9e9e9e;
    }
    &:hover {
      color: #2196f3;
      .trashIcon {
        color: #2196f3;
      }
    }
  }
  .line {
    border-top: 1px solid #e0e0e0;
    width: 100%;
    margin-top: 8px;
  }
`],[`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative !important;
  .createCustomBtnCon {
    z-index: 1;
  }
  .topBox {
    position: relative;
    background: none !important;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 3px 3px 0px 0px;
      border-top: 1px solid #000;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }
    .moreActive {
      z-index: 1;
      color: #7d7d7d !important;
    }
    span {
      // z-index: 1;
      position: relative;
      color: #333 !important;
    }
    input {
      z-index: 1;
      position: relative;
    }
  }
  .trash {
    color: #757575;
    .trashIcon {
      color: #9e9e9e;
    }
    &:hover {
      color: #2196f3;
      .trashIcon {
        color: #2196f3;
      }
    }
  }
  .line {
    border-top: 1px solid #e0e0e0;
    width: 100%;
    margin-top: 8px;
  }
`]),Sa=(0,oe.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`]),Ra=(0,oe.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`]),Da=se.ZP.div(_a),La=se.ZP.span(Sa),Fa=se.ZP.span(Ra);function Pa(d){var n=d.worksheetId,c=d.worksheetControls,t=d.worksheetInfo,a=(0,ze.Z)({showCreateCustomBtn:!1,btnId:"",showTrash:!1,isEdit:!1,btnList:[],sortDirection:""}),i=(0,V.Z)(a,2),l=i[0],r=l.showCreateCustomBtn,o=l.btnId,s=l.showTrash,h=l.isEdit,f=l.btnList,w=l.sortDirection,g=i[1];(0,e.useEffect)(function(){n&&p()},[n]);var I=null,p=function(){I&&I.abort(),I=A.Z.getWorksheetBtns({worksheetId:n}),I.then(function(x){g({btnList:x})})},k=function(x,u){g({btnList:(0,ma.u)(N().cloneDeep(f),x,u)})},y=N().get(N().find(md.global.Account.projects,function(E){return E.projectId===t.projectId}),"licenseType")===0,v=(0,Fe.XH)(t.projectId,Ge.UU.recycle),m=function(x){if(x.length<=0)return e.createElement("p",{className:"noData pTop40"},e.createElement(F.Z,{icon:"custom_actions",className:"icon"}),e.createElement("br",null),_l("\u6682\u65E0\u81EA\u5B9A\u4E49\u52A8\u4F5C"));var u=x.filter(function(R){return!R.isBatch}),S=x.filter(function(R){return R.isBatch});return w!==""&&(u=u.sort(function(R,C){return w==="ASC"?R.name.charCodeAt(0)-C.name.charCodeAt(0):C.name.charCodeAt(0)-R.name.charCodeAt(0)}),S=S.sort(function(R,C){return w==="ASC"?R.name.charCodeAt(0)-C.name.charCodeAt(0):C.name.charCodeAt(0)-R.name.charCodeAt(0)})),e.createElement("div",{className:"printTemplatesList flex overflowHidden flexColumn"},e.createElement("div",{className:"printTemplatesList-header"},e.createElement("div",{className:"name flex mRight20 valignWrapper"},e.createElement("div",{className:"flex"},_l("\u540D\u79F0")),e.createElement("div",{className:"flexColumn"},e.createElement(La,{className:Z()({active:w==="ASC"}),onClick:function(){return g({sortDirection:"ASC"})}}),e.createElement(Fa,{className:Z()({active:w==="DESC"}),onClick:function(){return g({sortDirection:"DESC"})}}))),e.createElement("div",{className:"views flex mRight20"},_l("\u4F7F\u7528\u8303\u56F4")),e.createElement("div",{className:"action mRight8 w120px"},_l("\u64CD\u4F5C")),e.createElement("div",{className:"more w80px"})),e.createElement("div",{className:"printTemplatesList-box flex"},u.map(function(R){return e.createElement(_t,{appId:t.appId,views:t.views,getSheetBtns:p,key:R.btnId,it:R,worksheetId:n,btnList:f,onChange:function(T){g((0,L.default)({},T))}})}),!!S.length&&e.createElement("p",{className:"Gray_9e Font15 mTop12 pLeft11"},_l("\u6279\u91CF\u6570\u636E\u6E90")),S.map(function(R){return e.createElement(_t,{appId:t.appId,views:t.views,getSheetBtns:p,key:R.btnId,it:R,worksheetId:n,btnList:f,onChange:function(T){g((0,L.default)({},T))}})})))};return e.createElement(e.Fragment,null,e.createElement(Da,{className:"printBox Relative"},e.createElement("div",{className:"printBoxList"},e.createElement("div",{className:"flexColumn h100"},e.createElement("div",{className:"topBoxText flexRow alignItemsCenter"},e.createElement("div",{className:"textCon flex"},e.createElement("h5",{className:"formName Gray Font17 Bold"},_l("\u81EA\u5B9A\u4E49\u52A8\u4F5C")),e.createElement("p",{className:"desc mTop8"},e.createElement("span",{className:"Font13 Gray_9e"},_l("\u81EA\u5B9A\u4E49\u5728\u67E5\u770B\u8BB0\u5F55\u8BE6\u60C5\u65F6\u6216\u6279\u91CF\u9009\u62E9\u8BB0\u5F55\u65F6\u53EF\u6267\u884C\u7684\u64CD\u4F5C")))),v&&e.createElement("div",{className:"trash mRight20 ThemeHoverColor3 flexRow",onClick:function(){if(y){(0,Fe.j0)(t.projectId,Ge.UU.recycle);return}g({showTrash:!0})}},e.createElement(F.Z,{icon:"knowledge-recycle",className:"trashIcon Hand Font18"}),e.createElement("div",{className:"recycle InlineBlock Hand mLeft5"},_l("\u56DE\u6536\u7AD9")),y&&e.createElement(it.Z,null)),e.createElement("span",{className:"add Relative bold",onClick:function(){g({btnId:"",showCreateCustomBtn:!0,isEdit:!1})}},e.createElement(F.Z,{icon:"plus",className:"mRight8"}),_l("\u6DFB\u52A0\u6309\u94AE"))),m(f))),e.createElement(ut(),{transitionName:"ViewConfigCreateCustomBtn",transitionEnterTimeout:500,transitionLeaveTimeout:300},r&&e.createElement(ua.Z,{isClickAway:!0,from:"formset",onClickAwayExceptions:[".ant-modal-root",".ChooseWidgetDialogWrap",".showBtnFilterDialog",".doubleConfirmDialog",".appointDialog",".chooseWidgetDialog",".rc-trigger-popup",".fullScreenCurtain",".errerDialogForAppoint",".mobileDepartmentPickerDialog","#dialogBoxSelectUser_container",".selectUserFromAppDialog",".selectUserBox",".dropdownTrigger",".worksheetFilterColumnOptionList",".PositionContainer-wrapper",".mui-dialog-container",".mdAlertDialog",".ant-cascader-menus",".ant-tree-select-dropdown",".ant-tooltip",".CodeMirror-hints",".ck",".ant-picker-dropdown",".Tooltip"],onClickAway:function(){return g({showCreateCustomBtn:!1})},isEdit:h,onClose:function(){g({showCreateCustomBtn:!1})},columns:c.filter(function(E){return E.viewDisplay||!("viewDisplay"in E)}).map(function(E){return(0,Ke.BM)(E)}),btnId:o,btnList:f,btnDataInfo:o?N().find(f,function(E){return E.btnId===o}):[],projectId:t.projectId,worksheetControls:c,currentSheetInfo:(0,L.default)({},t,{template:{controls:c}}),viewId:"",appId:t.appId,worksheetId:n,sheetSwitchPermit:t.switches,workflowId:"",refreshFn:function(x,u,S,R){p()},updateCustomButtons:k}))),s&&e.createElement(Ea,{projectId:t.projectId,appId:t.appId,worksheetId:n,views:t.views||[],onCancel:function(){g({showTrash:!1})},onChange:function(){p()}}))}const Za=Pa;var St=Je.default.Option,Ba={0:[{value:1,txt:_l("A \u2192 Z%02058")},{value:-1,txt:_l("Z \u2192 A%02059")},{value:"text",txt:_l("\u6587\u672C\u7D22\u5F15")}],1:[{value:1,txt:"1 \u2192 9"},{value:-1,txt:"9 \u2192 1"}],2:[{value:-1,txt:_l("\u6700\u65B0\u7684\u5728\u524D\u9762")},{value:1,txt:_l("\u6700\u65E7\u7684\u5728\u524D\u9762")}],3:[{value:1,txt:_l("\u5347\u5E8F")},{value:-1,txt:_l("\u964D\u5E8F")}]},Aa=[{qa:1,title:_l("\u54EA\u4E9B\u5DE5\u4F5C\u8868\u9700\u8981\u521B\u5EFA\u7D22\u5F15\uFF1F"),content:_l("\u5982\u679C\u5DE5\u4F5C\u8868\u7684\u6570\u636E\u91CF\u6BD4\u8F83\u5927\uFF08\u901A\u5E38\u4E3A\u6570\u4E07\u6216\u6570\u5341\u4E07\u4EE5\u4E0A\uFF09\uFF0C\u800C\u4E14\u5728\u67E5\u8BE2\u5DE5\u4F5C\u8868\u65F6\u5DF2\u7ECF\u51FA\u73B0\u660E\u663E\u7684\u52A0\u8F7D\u5EF6\u8FDF\uFF0C\u90A3\u5C31\u53EF\u4EE5\u5728\u8BE5\u5DE5\u4F5C\u8868\u4E0A\u521B\u5EFA\u7D22\u5F15\u4EE5\u5C1D\u8BD5\u52A0\u5FEB\u68C0\u7D22\u901F\u5EA6\u3002")},{qa:2,title:_l("\u521B\u5EFA\u7D22\u5F15\u65F6\u5982\u4F55\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5\uFF1F"),content:e.createElement(e.Fragment,null,e.createElement("div",null,_l("\u5728\u89C6\u56FE\u3001\u7B5B\u9009\u3001\u5FEB\u901F\u7B5B\u9009\u7B49\u67E5\u8BE2\u573A\u666F\u4E2D\u88AB\u68C0\u7D22\u7684\u5B57\u6BB5\u6216\u8005\u5728\u89C6\u56FE\u3001\u5B50\u8868\u3001\u5173\u8054\u8BB0\u5F55\u4E2D\u88AB\u6392\u5E8F\u7684\u5B57\u6BB5\u624D\u9700\u8981\u521B\u5EFA\u7D22\u5F15\u3002")),e.createElement("div",null,_l("\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5\u65F6\u8BF7\u8BB0\u4F4F\u4E00\u4E2A\u539F\u5219\uFF1A\u8BB0\u5F55\u4E2D\u91CD\u590D\u503C\u8D8A\u5C11\u7684\u5B57\u6BB5\uFF0C\u8D8A\u9002\u5408\u5EFA\u7ACB\u7D22\u5F15\u3002\u4F8B\u5982\u4E00\u4E2A\u4E0D\u5141\u8BB8\u91CD\u590D\u7684\u300C\u5546\u54C1\u7F16\u53F7\u300D\u5B57\u6BB5\uFF0C\u5C31\u975E\u5E38\u9002\u5408\u521B\u5EFA\u7D22\u5F15\uFF1B\u53CD\u4E4B\uFF0C\u4E00\u4E2A\u7528\u4E8E\u8BB0\u5F55\u7537\u3001\u5973\u7684\u300C\u6027\u522B\u300D\u5B57\u6BB5\uFF0C\u5219\u4E0D\u9002\u5408\u521B\u5EFA\u7D22\u5F15\u3002")),e.createElement("div",null,_l("\u5982\u679C\u4E00\u4E9B\u5B57\u6BB5\u603B\u662F\u9700\u8981\u4E00\u8D77\u53C2\u4E0E\u68C0\u7D22\uFF0C\u5B83\u4EEC\u7EC4\u5408\u8D77\u6765\u4E4B\u540E\u7684\u91CD\u590D\u7387\u66F4\u4F4E\uFF0C\u4F8B\u5982\u300CFirst Name\u300D\u548C\u300CLast Name\u300D\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u540C\u65F6\u9009\u62E9\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u521B\u5EFA\u4E00\u4E2A\u590D\u5408\u7D22\u5F15\uFF0C\u6BD4\u4E3A\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u5206\u522B\u521B\u5EFA\u7D22\u5F15\u6548\u679C\u66F4\u597D\u3002")))},{qa:3,title:_l("\u7D22\u5F15\u5B57\u6BB5\u6392\u5E8F\u6709\u4EC0\u4E48\u7528\uFF1F"),content:_l("\u7D22\u5F15\u5B57\u6BB5\u7684\u6392\u5E8F\u548C\u4F60\u5728\u89C6\u56FE\u4E2D\u4F7F\u7528\u6B64\u5B57\u6BB5\u53C2\u4E0E\u6392\u5E8F\u7684\u89C4\u5219\u6709\u5173\u3002\u5F53\u7D22\u5F15\u53EA\u6709\u4E00\u4E2A\u5B57\u6BB5\u65F6\uFF0C\u89C6\u56FE\u4E2D\u6392\u5E8F\u7684\u65B9\u5411\u4E0D\u4F1A\u5F71\u54CD\u68C0\u7D22\u7684\u52A0\u901F\uFF1B\u9664\u6B64\u4E4B\u5916\uFF0C\u8BF7\u5C3D\u91CF\u4FDD\u8BC1\u5728\u89C6\u56FE\u4E2D\u7684\u5B57\u6BB5\u6392\u5E8F\u65B9\u5F0F\u4E0E\u7D22\u5F15\u4E2D\u8BBE\u7F6E\u7684\u4E00\u81F4\uFF0C\u5426\u5219\u68C0\u7D22\u53EF\u80FD\u4E0D\u4F1A\u88AB\u52A0\u901F\u3002")},{qa:4,title:_l("\u4E3A\u4EC0\u4E48\u7D22\u5F15\u4F1A\u521B\u5EFA\u5931\u8D25\uFF1F"),content:e.createElement(e.Fragment,null,e.createElement("div",null,_l("\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u4F1A\u6709\u4E0B\u5217\u9650\u5236\uFF0C\u4E0D\u9075\u5FAA\u9650\u5236\u53EF\u80FD\u4F1A\u51FA\u73B0\u7D22\u5F15\u521B\u5EFA\u5931\u8D25\u7684\u60C5\u51B5\uFF1A")),e.createElement("div",null,_l("\u25CB \u521B\u5EFA\u300C\u552F\u4E00\u7D22\u5F15\u300D\u65F6\uFF0C\u9009\u62E9\u7684\u7D22\u5F15\u5B57\u6BB5\u5728\u5DF2\u6709\u8BB0\u5F55\u91CC\u4E0D\u80FD\u5B58\u5728\u91CD\u590D\u503C\uFF1B")),e.createElement("div",null,_l("\u25CB \u521B\u5EFA\u7D22\u5F15\u65F6\u9009\u62E9\u7684\u5B57\u6BB5\u4E0D\u80FD\u548C\u4E4B\u524D\u5DF2\u521B\u5EFA\u7684\u67D0\u4E2A\u7D22\u5F15\u7684\u5B57\u6BB5\u5B8C\u5168\u4E00\u6837\uFF1B")),e.createElement("div",null,_l("\u25CB \u4E00\u5F20\u5DE5\u4F5C\u8868\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u300C\u6587\u672C\u7D22\u5F15\u300D\u6216\u300C\u6240\u6709\u6587\u672C\u5B57\u6BB5\u5168\u6587\u7D22\u5F15\u300D\uFF1B")),e.createElement("div",null,_l("\u25CB \u4E00\u4E2A\u7D22\u5F15\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u300C\u9009\u9879\u300D\u7C7B\u578B\u7684\u5B57\u6BB5\uFF0C\u5982\u5355\u9009/\u591A\u9009/\u4EBA\u5458/\u90E8\u95E8\u7B49\uFF1B")))},{qa:5,title:_l("\u7D22\u5F15\u8D8A\u591A\u8D8A\u597D\u5417\uFF1F"),content:_l("\u5E76\u975E\u5982\u6B64\u3002\u7D22\u5F15\u53EA\u4F1A\u52A0\u901F\u68C0\u7D22\uFF0C\u800C\u5728\u65B0\u589E\u3001\u66F4\u65B0\u3001\u5220\u9664\u8BB0\u5F55\u65F6\u7CFB\u7EDF\u4F1A\u82B1\u8D39\u66F4\u591A\u7684\u65F6\u95F4\u7528\u4E8E\u66F4\u65B0\u7D22\u5F15\uFF0C\u8FC7\u591A\u7684\u7D22\u5F15\u4F1A\u5F88\u660E\u663E\u7684\u964D\u4F4E\u8FD9\u4E9B\u64CD\u4F5C\u7684\u901F\u5EA6\uFF0C\u751A\u81F3\u5F71\u54CD\u5230\u67E5\u8BE2\u7684\u901F\u5EA6\u3002")},{qa:6,title:_l("\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u4E3A\u6211\u5EFA\u7ACB\u7D22\u5F15\u5417\uFF1F"),content:_l("\u662F\u7684\uFF0C\u6211\u4EEC\u4F1A\u6839\u636E\u516C\u6709\u4E91\u5E73\u53F0\u6BCF\u5929\u7684\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u81EA\u52A8\u5B66\u4E60\u548C\u667A\u80FD\u5206\u6790\u88AB\u9891\u7E41\u4F7F\u7528\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5E76\u81EA\u52A8\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15\u3002\u6240\u4EE5\uFF0C\u8BF7\u4E0D\u8981\u968F\u610F\u4FEE\u6539\u548C\u5220\u9664\u4E0D\u662F\u7531\u4F60\u81EA\u5DF1\u521B\u5EFA\u7684\u7D22\u5F15\u3002\u79C1\u6709\u90E8\u7F72\u73AF\u5883\u6682\u4E0D\u652F\u6301\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15\u3002")}],Rt=md.global.Config.IsLocal?10:5,$a=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.renderTitle=function(){var a=t.props.isEdit;return e.createElement("div",{className:"title Gray"},e.createElement("span",null,a?_l("\u7F16\u8F91\u7D22\u5F15"):_l("\u521B\u5EFA\u7D22\u5F15")),e.createElement(F.Z,{icon:"close",className:"Gray_9d Font20 pointer",onClick:t.props.onClose}))},t.changeIndexOnly=function(a){t.setState({uniqueIndex:!a})},t.addUsualTxt=function(a){t.setState({wildcardIndex:!a})},t.saveIndex=function(){var a=t.state,i=a.uniqueIndex,l=a.selectedIndexList,r=l===void 0?[]:l,o=a.customeIndexName,s=o===void 0?"":o,h=a.wildcardIndex,f=t.props,w=f.worksheetId,g=f.isEdit,I=f.currentIndexInfo,p=I===void 0?{}:I,k=f.appId,y=f.getIndexesInfo,v=y===void 0?function(){}:y,m=f.indexList,E=m===void 0?[]:m,x=r.some(function(T){return T.isDelete});if(x)return alert(_l("\u8BF7\u79FB\u9664\u7D22\u5F15\u4E2D\u5DF2\u5220\u9664\u7684\u5B57\u6BB5"),3);if(p.indexStateId!==0){var u=r.some(function(T){return T.indexType==="text"})||h,S=!1;if(E.forEach(function(T){T.indexConfigId!==p.indexConfigId&&(T.wildcardIndex||T.indexFields.some(function(j){return j.indexType==="text"}))&&(S=!0)}),u&&S)return alert(_l("\u6BCF\u5F20\u5DE5\u4F5C\u8868\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u6587\u672C\u7D22\u5F15"),3);var R=r.filter(function(T){return T.type===3}).length;if(R>1)return alert(_l("\u7D22\u5F15\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u591A\u9009\u7C7B\u578B\u5B57\u6BB5"),3);if(u&&r.some(function(T){return T.type===3}))return alert(_l("\u7D22\u5F15\u4E0D\u80FD\u540C\u65F6\u5305\u542B\u6587\u672C\u7D22\u5F15\u4E0E\u591A\u9009\u7C7B\u578B\u5B57\u6BB5"),3);var C={appId:k,worksheetId:w,customeIndexName:s,indexFields:r.map(function(T){return{fieldId:T.fieldId,indexType:T.indexType,isSystem:T.isSystem||!1}}),uniqueIndex:i||!1,wildcardIndex:h||!1,sparseIndex:!1,backgroundIndex:!u};g&&(C.indexConfigId=p.indexConfigId||"",C.isSystemIndex=p.isSystem,C.systemIndexName=p.systemIndexName),g?A.Z.updateRowIndex(C).then(function(T){if(T.responseEnum===0){var j=(T.rowIndexConfigs||[]).filter(function(X){return X.indexConfigId===p.indexConfigId}).length&&(T.rowIndexConfigs||[]).filter(function(X){return X.indexConfigId===p.indexConfigId})[0].indexStateId;if(j===-1)return alert(_l("\u64CD\u4F5C\u5931\u8D25"),2);alert(_l("\u64CD\u4F5C\u6210\u529F"))}else T.responseEnum==-1?alert(_l("\u64CD\u4F5C\u5931\u8D25"),2):T.responseEnum==1?alert(_l("\u53C2\u6570\u9519\u8BEF"),3):T.responseEnum==2?alert(_l("\u6392\u961F\u4E2D"),3):T.responseEnum===3?alert(_l("\u8D85\u51FA\u7D22\u5F15\u6700\u591A\u663E\u793A"),3):T.responseEnum===4&&alert(_l("\u7D22\u5F15\u5DF2\u5B58\u5728"),3);v()}):A.Z.addRowIndex(C).then(function(T){T.responseEnum===0?alert(_l("\u64CD\u4F5C\u6210\u529F")):T.responseEnum==-1?alert(_l("\u64CD\u4F5C\u5931\u8D25"),2):T.responseEnum==1?alert(_l("\u53C2\u6570\u9519\u8BEF"),3):T.responseEnum==2?alert(_l("\u6392\u961F\u4E2D"),3):T.responseEnum===3?alert(_l("\u8D85\u51FA\u7D22\u5F15\u6700\u591A\u663E\u793A"),3):T.responseEnum===4&&alert(_l("\u7D22\u5F15\u5DF2\u5B58\u5728"),3),v()}),t.props.onClose()}},t.changeIndexField=function(a,i){var l=t.state.selectedIndexList,r=l===void 0?[]:l,o=t.props.worksheetAvailableFields,s=o===void 0?[]:o;if(a!==r[i].fieldId){var h=N().get(s.filter(function(I){return I.id===a})[0],"type"),f=r.map(function(I,p){return p===i?(0,L.default)({},I,{fieldId:a,type:h,indexType:1}):I}),w=N().differenceWith(s,f,function(I,p){return I.id===p.fieldId}),g=f.map(function(I){var p=s.filter(function(k){return k.id===I.fieldId})||[];return(0,L.default)({},I,{selectFiledsList:p.concat(w)})});t.setState({selectedIndexList:g})}},t.changeFieldValue=function(a,i){var l=t.state.selectedIndexList,r=l===void 0?[]:l,o=[].concat((0,H.Z)(r));o[i]=(0,L.default)({},o[i],{indexType:a}),t.setState({selectedIndexList:o})},t.addField=function(){var a=t.state.selectedIndexList,i=a===void 0?[]:a,l=t.props.worksheetAvailableFields,r=i.length>l.length-1;if(!(i.length>=Rt||r)){var o=[].concat((0,H.Z)(i)),s=N().differenceWith(l,i,function(h,f){return h.id===f.fieldId})||[];o.push({fieldId:s.length?s[0].id:"",name:s.length?s[0].name:"",type:s.length?s[0].type:"",indexType:"1",selectFiledsList:s}),t.setState({selectedIndexList:o})}},t.removeCurrentField=function(a){var i=t.state.selectedIndexList,l=i===void 0?[]:i;if(!(l.length<=1)){var r=[].concat((0,H.Z)(l));r.splice(a,1),t.setState({selectedIndexList:r})}},t.openAndClose=function(a){var i=[].concat((0,H.Z)(t.state.showQAList));N().includes(i,a)?i=i.filter(function(l){return l!==a}):i.push(a),t.setState({showQAList:i})},t.state={selectedIndexList:c.selectedIndexList||[{}],selectIndexFileds:[],uniqueIndex:c.currentIndexInfo.uniqueIndex||!1,wildcardIndex:c.currentIndexInfo.wildcardIndex||!1,customeIndexName:c.currentIndexInfo.customeIndexName||void 0,showQAList:[]},t}return(0,re.default)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,a=this.props,i=a.isEdit,l=a.currentIndexInfo,r=a.worksheetAvailableFields,o=a.getFieldObjById,s=o===void 0?function(){}:o,h=this.state,f=h.selectedIndexList,w=f===void 0?[]:f,g=h.wildcardIndex,I=h.uniqueIndex,p=h.customeIndexName,k=h.showQAList,y=k===void 0?[]:k,v=w.length>r.length-1;return e.createElement("div",{className:"createIndexContainer"},this.renderTitle(),e.createElement("div",{className:"createIndexBody"},e.createElement("div",{className:"minBold sunTitle"},e.createElement("span",null,_l("\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5")),e.createElement(be.default,{title:_l("\u6BCF\u5F20\u5DE5\u4F5C\u8868\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u300C\u6587\u672C\u7D22\u5F15\u300D\u6216\u8005\u300C\u6587\u672C\u5B57\u6BB5\u5168\u6587\u7D22\u5F15\u300D\uFF1B\u521B\u5EFA\u300C\u6587\u672C\u7D22\u5F15\u300D\u65F6\uFF0C\u4E0D\u80FD\u5305\u542B\u300C\u9009\u9879\u5B57\u6BB5\u300D\uFF1B\u6BCF\u4E2A\u7D22\u5F15\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u300C\u9009\u9879\u5B57\u6BB5\u300D"),placement:"bottom"},e.createElement(F.Z,{icon:"help",className:"mLeft8 Gray_9d"}))),e.createElement("div",{className:"selectedInfo"},w.map(function(m,E){return e.createElement("div",{className:"selectedRow",key:m.fieldId},m.isSystem||m.isDelete?e.createElement(be.default,{title:m.isDelete&&"ID\uFF1A"+m.fieldId||"",placement:"top",trigger:["hover"]},e.createElement("span",null,e.createElement(st.default,{value:m.isDelete?_l("\u5B57\u6BB5\u5DF2\u5220\u9664"):N().get(s(m.fieldId),"name")?N().get(s(m.fieldId),"name"):m.fieldId,disabled:!0,className:Z()("col1 mRight8",{Red:m.isDelete})}))):e.createElement(Je.default,{placeholder:_l("\u8BF7\u9009\u62E9"),className:"col1 mRight8",value:m.fieldId,onChange:function(u){return t.changeIndexField(u,E)},showSearch:!0,filterOption:function(u,S){return S.children.toLowerCase().includes(u.toLowerCase())}},(m.selectFiledsList||[]).map(function(x){return e.createElement(St,{value:x.id,key:x.id},x.name)})),e.createElement(Je.default,{className:"col2",onChange:function(u){return t.changeFieldValue(u,E)},placeholder:_l("\u8BF7\u9009\u62E9"),value:m.indexType&&m.indexType!=="text"?Number(m.indexType):m.indexType==="text"?m.indexType:""},(Ba[m.type||0]||[]).map(function(x,u){return e.createElement(St,{key:E+"-"+u,value:x.value,disabled:(g||I)&&x.value==="text"},x.txt)})),e.createElement(F.Z,{icon:"remove_circle_outline",className:Z()("Font16 remove Hand Gray_9d",{disabledAct:w.length<=1}),onClick:function(){return t.removeCurrentField(E)}}),e.createElement(F.Z,{icon:"create-network",className:Z()("Font16 Hand Gray_9d",{disabledAct:w.length>=Rt||v}),onClick:t.addField}))})),e.createElement("div",{className:"minBold sunTitle"},_l("\u7D22\u5F15\u7C7B\u578B")),e.createElement("div",{className:"flexRow"},e.createElement(ve.Z,{onClick:this.changeIndexOnly,checked:I,disabled:w.some(function(m){return m.indexType=="text"})},_l("\u552F\u4E00\u7D22\u5F15")),e.createElement(be.default,{title:_l("\u5EFA\u7ACB\u552F\u4E00\u7D22\u5F15\u540E\uFF0C\u5B57\u6BB5\u7684\u503C\u4E0D\u5141\u8BB8\u91CD\u590D\u3002\u5982\u679C\u5B57\u6BB5\u4E3A\u975E\u5FC5\u586B\uFF0C\u5219\u6574\u4E2A\u5DE5\u4F5C\u8868\u53EA\u80FD\u6709\u4E00\u6761\u4E3A\u7A7A\u7684\u6570\u636E\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u552F\u4E00\u6027"),placement:"bottom"},e.createElement(F.Z,{icon:"help",className:"mLeft8 lineHeight20 mRight24 Gray_9d"})),e.createElement(ve.Z,{checked:g,disabled:w.some(function(m){return m.indexType=="text"}),onClick:this.addUsualTxt},_l("\u6240\u6709\u6587\u672C\u5B57\u6BB5\u5168\u6587\u7D22\u5F15")),e.createElement(be.default,{title:_l("\u652F\u6301\u6240\u6709\u6587\u672C\u5B57\u6BB5\u5168\u6587\u68C0\u7D22\u3002\u5DE5\u4F5C\u8868\u521B\u5EFA\u6587\u672C\u7D22\u5F15\u540E\u4E0D\u53EF\u518D\u521B\u5EFA\u6B64\u7C7B\u578B\u7D22\u5F15"),placement:"bottom"},e.createElement(F.Z,{icon:"help",className:"mLeft8 lineHeight20 Gray_9d"}))),e.createElement("div",{className:"minBold sunTitle"},_l("\u7D22\u5F15\u540D\u79F0")),e.createElement(st.default,{disabled:!!l.isSystem,placeholder:_l("\u4E0D\u8F93\u5165\u540D\u79F0\u5C06\u6309\u5B57\u6BB5\u540D\u79F0\u81EA\u52A8\u521B\u5EFA"),className:"w100",value:p,onChange:function(E){t.setState({customeIndexName:E.target.value})}}),e.createElement("div",{className:"descriptionInfos"},e.createElement("div",{className:"minBold mBottom16"},_l("\u5982\u4F55\u5229\u7528\u7D22\u5F15\u52A0\u901F\u68C0\u7D22\uFF1F")),e.createElement("div",{className:"desContent"},_l("\u4E3A\u5DE5\u4F5C\u8868\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u5C31\u50CF\u662F\u4E3A\u4E00\u672C\u5B57\u5178\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u4EE5\u7528\u62FC\u97F3\u68C0\u7D22\u7684\u76EE\u5F55\u3002\u521B\u5EFA\u9002\u5408\u7684\u7D22\u5F15\u53EF\u4EE5\u975E\u5E38\u6709\u6548\u7684\u52A0\u5FEB\u7279\u5B9A\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u8BB0\u5F55\u68C0\u7D22\u901F\u5EA6\u3002\u5728\u521B\u5EFA\u7D22\u5F15\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u4E86\u89E3\u521B\u5EFA\u7D22\u5F15\u7684\u4E00\u4E9B\u57FA\u672C\u539F\u5219\u3002")),Aa.map(function(m){return e.createElement(e.Fragment,null,e.createElement("div",{className:"desTitle  mTop16",onClick:function(){return t.openAndClose(m.qa)}},e.createElement("span",{className:"Hand"}," ",m.title)),N().includes(y,m.qa)&&e.createElement("div",{className:"desContent mTop10"},m.content))}))),e.createElement("div",{className:"createIndexFooter"},l.indexStateId!==0&&e.createElement("span",{className:"confirmBtn Hand",onClick:this.saveIndex},i?_l("\u4FEE\u6539\u4FDD\u5B58"):_l("\u521B\u5EFA\u7D22\u5F15")),l.indexStateId==0&&e.createElement(be.default,{title:_l("\u4E0D\u80FD\u4FEE\u6539\u6392\u961F\u4E2D\u7684\u7D22\u5F15"),placement:"top"},e.createElement("span",{className:"confirmBtn disabled"},_l("\u4FEE\u6539\u4FDD\u5B58"))),e.createElement("span",{className:"cancelBtn Hand",onClick:this.props.onClose},_l("\u53D6\u6D88"))))}}]),n}(e.Component),Oa=(0,oe.Z)([`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative !important;
  overflow: hidden;
  .setIndexList {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 32px 40px;
    display: flex;
    flex-direction: column;
    .add {
      padding: 0 16px;
      line-height: 38px;
      height: 38px;
      background: #2196f3 0% 0% no-repeat padding-box;
      border-radius: 32px;
      text-align: center;
      font-size: 13px;
      letter-spacing: 0px;
      color: #ffffff;
      cursor: pointer;
      &.disabled {
        background-color: #9e9e9e;
        cursor: not-allowed;
      }
    }
    .noData {
      width: 130px;
      height: 130px;
      background: #f5f5f5;
      border-radius: 50%;
      margin: 200px auto 0;
      text-align: center;
      color: #9e9e9e;
      .icon {
        font-size: 60px;
        line-height: 130px;
      }
    }
    .printTemplatesList {
      width: 100%;
      .printTemplatesList-box {
        overflow-y: scroll;
        position: relative;
        &::-webkit-scrollbar {
          width: 0px !important;
        }
        -ms-overflow-style: none; /* Internet Explorer\u548CEdge */
        scrollbar-width: none; /* Firefox */
      }
      .printTemplatesList-header {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #757575;
        font-weight: 600;
        padding-bottom: 11px;
        border-bottom: 1px solid #dddddd;
      }
      .printTemplatesList-tr {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        height: auto !important;
        min-height: 68px !important;
        &:hover {
          background: #fafafa;
        }
        .field {
          padding: 10px 0;
        }
        .field .viewsBox {
          width: fit-content;
          max-width: 100%;
        }
        .status {
          display: flex;
          justify-content: space-between;
          line-height: 24px;
          margin-top: 0px;
          .fail,
          .inLine {
            height: 24px;
            padding: 0 12px;
            border-radius: 12px;
            color: #f44336;
            background-color: #fbe9e7;
          }
          .opacity0 {
            opacity: 0;
          }
          .edit {
            color: #2196f3;
            &:hover {
              opacity: 0.8;
            }
          }
        }
        .activeCon {
          display: flex;

          & > span {
            display: inline-flex;
            color: #2196f3;

            &:hover {
              opacity: 0.8;
            }
          }
        }
        .more {
          position: relative;
        }
      }
      .printTemplatesList-header,
      .printTemplatesList-tr {
        .w120px {
          width: 120px;
        }
        .w80px {
          width: 80px;
        }
        .w150px {
          width: 150px;
        }
        .name {
          padding-left: 11px;
        }
      }
    }
  }
  .uniqueIndexColor {
    color: #4caf50;
  }
  .wildcardIndexColor {
    color: #ffa340;
  }
`],[`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative !important;
  overflow: hidden;
  .setIndexList {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 32px 40px;
    display: flex;
    flex-direction: column;
    .add {
      padding: 0 16px;
      line-height: 38px;
      height: 38px;
      background: #2196f3 0% 0% no-repeat padding-box;
      border-radius: 32px;
      text-align: center;
      font-size: 13px;
      letter-spacing: 0px;
      color: #ffffff;
      cursor: pointer;
      &.disabled {
        background-color: #9e9e9e;
        cursor: not-allowed;
      }
    }
    .noData {
      width: 130px;
      height: 130px;
      background: #f5f5f5;
      border-radius: 50%;
      margin: 200px auto 0;
      text-align: center;
      color: #9e9e9e;
      .icon {
        font-size: 60px;
        line-height: 130px;
      }
    }
    .printTemplatesList {
      width: 100%;
      .printTemplatesList-box {
        overflow-y: scroll;
        position: relative;
        &::-webkit-scrollbar {
          width: 0px !important;
        }
        -ms-overflow-style: none; /* Internet Explorer\u548CEdge */
        scrollbar-width: none; /* Firefox */
      }
      .printTemplatesList-header {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #757575;
        font-weight: 600;
        padding-bottom: 11px;
        border-bottom: 1px solid #dddddd;
      }
      .printTemplatesList-tr {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        height: auto !important;
        min-height: 68px !important;
        &:hover {
          background: #fafafa;
        }
        .field {
          padding: 10px 0;
        }
        .field .viewsBox {
          width: fit-content;
          max-width: 100%;
        }
        .status {
          display: flex;
          justify-content: space-between;
          line-height: 24px;
          margin-top: 0px;
          .fail,
          .inLine {
            height: 24px;
            padding: 0 12px;
            border-radius: 12px;
            color: #f44336;
            background-color: #fbe9e7;
          }
          .opacity0 {
            opacity: 0;
          }
          .edit {
            color: #2196f3;
            &:hover {
              opacity: 0.8;
            }
          }
        }
        .activeCon {
          display: flex;

          & > span {
            display: inline-flex;
            color: #2196f3;

            &:hover {
              opacity: 0.8;
            }
          }
        }
        .more {
          position: relative;
        }
      }
      .printTemplatesList-header,
      .printTemplatesList-tr {
        .w120px {
          width: 120px;
        }
        .w80px {
          width: 80px;
        }
        .w150px {
          width: 150px;
        }
        .name {
          padding-left: 11px;
        }
      }
    }
  }
  .uniqueIndexColor {
    color: #4caf50;
  }
  .wildcardIndexColor {
    color: #ffa340;
  }
`]),Wa=(0,oe.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #9e9e9e transparent;
  cursor: pointer;
  &:hover,
  &.active {
    border-color: transparent transparent #2196f3 transparent;
  }
`]),ja=(0,oe.Z)([`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`],[`
  border-width: 5px;
  border-style: solid;
  border-color: #9e9e9e transparent transparent transparent;
  cursor: pointer;
  margin-top: 2px;
  &:hover,
  &.active {
    border-color: #2196f3 transparent transparent transparent;
  }
`]),Ua=se.ZP.div(Oa),Ma=se.ZP.span(Wa),Ha=se.ZP.span(ja),ft=md.global.Config.IsLocal?10:5,Ga={1:_l("\u5347\u5E8F"),"-1":_l("\u964D\u5E8F"),text:_l("\u6587\u672C\u7D22\u5F15")},Va=[40,42,43,21,25,45,14,34,22,10010,30,47,49,50,51,52];function za(d){var n=d.worksheetInfo,c=n.worksheetId,t=n.appId,a=n.template,i=e.createRef(),l=(0,e.useState)(!1),r=(0,V.Z)(l,2),o=r[0],s=r[1],h=(0,e.useState)(!1),f=(0,V.Z)(h,2),w=f[0],g=f[1],I=(0,e.useState)({}),p=(0,V.Z)(I,2),k=p[0],y=p[1],v=(0,e.useState)(!1),m=(0,V.Z)(v,2),E=m[0],x=m[1],u=(0,e.useState)([]),S=(0,V.Z)(u,2),R=S[0],C=S[1],T=(0,e.useState)(""),j=(0,V.Z)(T,2),X=j[0],me=j[1],Ie=(0,e.useState)(),G=(0,V.Z)(Ie,2),W=G[0],K=G[1],ge=(0,e.useState)(!0),We=(0,V.Z)(ge,2),je=We[0],Se=We[1],J=(0,e.useState)([{}]),B=(0,V.Z)(J,2),Q=B[0],Y=B[1],q=(0,e.useState)([]),pe=(0,V.Z)(q,2),D=pe[0],fe=pe[1],xe=(0,e.useState)(""),Ze=(0,V.Z)(xe,2),Ce=Ze[0],Ue=Ze[1];(0,e.useEffect)(function(){c&&Be()},[c]),(0,e.useEffect)(function(){w&&i.current.focus()},[w]);var Be=function(){A.Z.getRowIndexes({worksheetId:c}).then(function(ie){C(ie.worksheetRowIndexConfigs||[]);var he=(ie.worksheetAvailableFields||[]).filter(function(Re){return!N().includes(Va,Re.controlType)});fe(he),Se(!1)})},U=function(ie){A.Z.updateRowIndexCustomeIndexName({appId:t,worksheetId:c,indexConfigId:ie.indexConfigId,customeIndexName:ie.customeIndexName}).then(function(he){he===0?alert(_l("\u4FEE\u6539\u6210\u529F")):alert(_l("\u4FEE\u6539\u5931\u8D25"),2),Be()})},Me=function(ie){return!N().isEmpty(N().filter(D,function(he){return he.id===ie}))&&N().filter(D,function(he){return he.id===ie})[0]||{}};if(je)return e.createElement(ke.Z,null);var Ae=R;return Ce!==""&&(Ae=R.sort(function(P,ie){return Ce==="ASC"?P.customeIndexName.charCodeAt(0)-ie.customeIndexName.charCodeAt(0):ie.customeIndexName.charCodeAt(0)-P.customeIndexName.charCodeAt(0)})),e.createElement(e.Fragment,null,e.createElement(Ua,{className:"Relative"},e.createElement("div",{className:"setIndexList"},e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex"},e.createElement("h5",{className:"formName Gray Font17 Bold"},_l("\u68C0\u7D22\u52A0\u901F"),e.createElement(F.Z,{icon:"workflow_cycle",className:"Font12 mLeft12 Hand Gray_9e",onClick:function(){Se(!0),Be()}})),e.createElement("p",{className:"desc mTop8"},e.createElement("span",{className:"Font13 Gray_9e"},_l("\u624B\u52A8\u4E3A\u5927\u6570\u636E\u91CF\u7684\u5DE5\u4F5C\u8868\u5EFA\u7ACB\u5408\u9002\u7684\u7D22\u5F15\uFF0C\u53EF\u4EE5\u52A0\u5FEB\u5DE5\u4F5C\u8868\u68C0\u7D22\u901F\u5EA6\uFF0C\u6700\u591A\u521B\u5EFA%0\u4E2A\u3002",ft)),e.createElement(rt.Z,{type:3,text:_l("\u5E2E\u52A9"),href:"https://help.mingdao.com/worksheet/index-acceleration"}))),e.createElement("span",{className:Z()("add Relative bold",{disabled:(R||[]).filter(function(P){return!P.isSystem}).length>=ft}),onClick:function(){(R||[]).filter(function(ie){return!ie.isSystem}).length>=ft||(s(!0),x(!1),y({}),Y([{fieldId:D.length?D[0].id:"",name:D.length?D[0].name:"",type:D.length?D[0].type:"",indexType:"1",selectFiledsList:D}]))}},e.createElement(F.Z,{icon:"plus",className:"mRight8"}),_l("\u521B\u5EFA\u7D22\u5F15"))),N().isEmpty(R)?e.createElement("div",{className:"noData"},e.createElement(F.Z,{icon:"db_index"}),e.createElement("div",{className:"mTop20 Gray_9e Font15"},_l("\u6682\u65E0\u7D22\u5F15"))):e.createElement("div",{className:"printTemplatesList flex overflowHidden flexColumn"},e.createElement("div",{className:"printTemplatesList-header"},e.createElement("div",{className:"name flex mRight20 valignWrapper"},e.createElement("div",{className:"flex"},_l("\u540D\u79F0")),e.createElement("div",{className:"flexColumn"},e.createElement(Ma,{className:Z()({active:Ce==="ASC"}),onClick:function(){return Ue("ASC")}}),e.createElement(Ha,{className:Z()({active:Ce==="DESC"}),onClick:function(){return Ue("DESC")}}))),e.createElement("div",{className:"type mRight20 w120px"},_l("\u7D22\u5F15\u7C7B\u578B")),e.createElement("div",{className:"field flex mRight20"},_l("\u7D22\u5F15\u5B57\u6BB5")),e.createElement("div",{className:"action mRight8 w80px"},_l("\u64CD\u4F5C")),e.createElement("div",{className:"more w80px"})),e.createElement("div",{className:"printTemplatesList-box flex"},Ae.map(function(P){var ie=[1,-1,"text"],he=P.isSystem&&P.indexFields.some(function(te){return!N().includes(ie,te.indexType)});if(!he&&P.isSystem)return"";var Re=P.uniqueIndex&&!P.wildcardIndex?1:P.wildcardIndex||P.indexFields.some(function(te){return te.indexType==="text"})?2:0;return e.createElement("div",{className:"printTemplatesList-tr",key:"formIndexSetting-"+P.indexConfigId},e.createElement("div",{className:"name flex mRight20 valignWrapper overflowHidden"},e.createElement(F.Z,{icon:Re===0?"db_index":Re===1?"score":"task_custom_text-box",className:Z()("iconTitle Font24 mRight13",Re===0?"Gray_75":Re===1?"uniqueIndexColor":"wildcardIndexColor")}),w&&X===P.indexConfigId?e.createElement("input",{type:"text",ref:i,defaultValue:P.customeIndexName,onBlur:function(de){if(me(""),g(!1),!N().trim(de.target.value)){alert(_l("\u8BF7\u8F93\u5165\u7D22\u5F15\u540D\u79F0"),3),i.current.focus();return}if(N().trim(de.target.value)!==P.customeIndexName){var He=R.map(function(ye){return ye.indexConfigId===P.indexConfigId?(0,L.default)({},ye,{customeIndexName:N().trim(de.target.value)}):ye});C(He||[]),U((0,L.default)({},P,{customeIndexName:N().trim(de.target.value)}))}}}):e.createElement(ce.Z,{text:P.customeIndexName},e.createElement("span",{className:"overflow_ellipsis"}," ",P.customeIndexName)),e.createElement("span",{className:"status mLeft12 nowrap"},P.indexStateId===1&&P.uniqueIndex&&e.createElement("span",{className:"Gray_9e"},_l("\u552F\u4E00\u7D22\u5F15")),P.indexStateId===-1&&e.createElement("span",{className:"fail"},_l("\u540E\u53F0\u6267\u884C\u5931\u8D25")),P.indexStateId===0&&e.createElement("span",{className:"inLine"},_l("\u6392\u961F\u4E2D")))),e.createElement("div",{className:"type mRight20 w120px"},Re===0?_l("\u666E\u901A\u7D22\u5F15"):Re===1?_l("\u552F\u4E00\u7D22\u5F15"):_l("\u6587\u672C\u7D22\u5F15")),e.createElement("div",{className:"field flex mRight20"},e.createElement("div",{className:"viewsBox"},(P.indexFields||[]).map(function(te,de){return e.createElement("span",{className:"ruleItem",key:te.fieldId},e.createElement("span",{className:Z()("filed",{Red:te.isDelete&&!P.isSystem})},te.isDelete&&!P.isSystem?_l("\u5B57\u6BB5\u5DF2\u5220\u9664"):N().get(Me(te.fieldId),"name")?N().get(Me(te.fieldId),"name"):te.fieldId),e.createElement("span",{className:"rule Gray_9e"},he?"\uFF08"+te.indexType+"\uFF09":"\uFF08"+Ga[te.indexType]+"\uFF09"),de<P.indexFields.length-1?"\u3001":"")}))),e.createElement("div",{className:"activeCon mRight8 w80px"},!he&&e.createElement("span",{className:"Hand edit Bold",onClick:function(){var de=N().differenceWith(D,P.indexFields,function(ye,ht){return ye.id===ht.fieldId}),He=(P.indexFields||[]).map(function(ye){var ht=D.filter(function(or){return or.id===ye.fieldId})||[];return(0,L.default)({},ye,{type:N().get(Me(ye.fieldId),"type"),selectFiledsList:ht.concat(de)})});Y([].concat((0,H.Z)(He))),y(P),s(!0),x(!0)}},_l("\u7F16\u8F91"))),e.createElement("div",{className:"more w80px TxtCenter"},e.createElement($e.Z,{popupVisible:W&&(X===P.indexConfigId||P.isSystem&&X===P.systemIndexName),action:["click"],popupAlign:{points:["tr","br"],overflow:{adjustX:!0,adjustY:!0}},getPopupContainer:function(){return document.body},onPopupVisibleChange:function(de){K(de),me(de?P.indexConfigId?P.indexConfigId:P.systemIndexName:"")},popup:e.createElement(dt,{disabledRename:P.isSystem,delTxt:_l("\u5220\u9664\u7D22\u5F15"),description:_l("\u786E\u5B9A\u5220\u9664\u7D22\u5F15\u5417\uFF1F\u5220\u9664\u540E\u5C06\u65E0\u6CD5\u6062\u590D"),showMoreOption:W,setFn:function(de){g(!0),K(!1)},deleteFn:function(de){A.Z.removeRowIndex({appId:t,worksheetId:P.worksheetId,indexConfigId:P.indexConfigId,isSystemIndex:P.isSystem,systemIndexName:P.systemIndexName}).then(function(He){He.responseEnum===0?(alert(_l("\u64CD\u4F5C\u6210\u529F\u3002\u4E3A\u4FDD\u969C\u6027\u80FD\uFF0C\u7CFB\u7EDF\u5C06\u5728\u7A7A\u95F2\u65F6\u5220\u9664\u6B64\u7D22\u5F15")),Be()):He.responseEnum===-1&&alert(_l("\u5220\u9664\u5931\u8D25"),2)})}})},e.createElement(F.Z,{icon:"task-point-more",className:"moreActive Hand Font18 Gray_9e Hover_21",onClick:function(){K(!0),me(P.indexConfigId?P.indexConfigId:P.systemIndexName)}}))))})))),e.createElement(ut(),{transitionName:"ViewConfigCreateCustomBtn",transitionEnterTimeout:500,transitionLeaveTimeout:300},o&&e.createElement($a,{isEdit:E,currentIndexInfo:k,selectedIndexList:Q,worksheetAvailableFields:D,appId:t,worksheetId:c,getIndexesInfo:Be,indexList:R,onClose:function(){s(!1)},getFieldObjById:Me}))))}const Xa=za;var Qa=b(47426),nt=b(43727),Ya=(0,oe.Z)([`
  p {
    margin: 0;
  }
  max-width: 800px;
  margin: 0 40px;
  padding-bottom: 100px;
  h5,
  h6 {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-top: 38px;
  }
  .title {
    width: 100%;
    padding: 0px 9px;
    line-height: 36px;
    border-radius: 3px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    &:-ms-input-placeholder {
      color: #9e9e9e !important;
    }
    &::-ms-input-placeholder {
      color: #9e9e9e;
    }
    &::placeholder {
      color: #9e9e9e;
    }
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .con {
    width: 100%;
    padding: 24px 16px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    .ming.Dropdown {
      .Dropdown--input {
        padding-left: 0px;
      }
      .currentMenu {
        color: #2196f3;
      }
    }
    .ming.MenuItem .Item-content:not(.disabled):hover {
      background-color: #f5f5f5 !important;
      color: #333 !important;
    }

    .btnCon {
      width: 180px;
      margin-right: 34px;
      & > div {
        height: 32px;
      }
      .btnStr {
        color: #fff;
        line-height: 32px;
        min-height: 32px;
        padding: 0 20px;
        background: #2196f3;
        border-radius: 4px;
        max-width: 155px;
        box-sizing: border-box;
      }
      i {
        color: #bdbdbd;
        opacity: 0;
        &:hover {
          color: #2196f3;
        }
      }
    }
    &:hover {
      border: 1px solid #ccc;
      i {
        opacity: 1;
      }
    }
    &.nextBtn {
      .btnCon {
        .btnStr {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          color: #333;
        }
      }
      &.noAction {
        opacity: 0.5;
        position: relative;
      }
    }
    .cover {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .switchBtn {
      z-index: 2;
    }
  }
  .moreActionCon {
    border-top: 1px solid #eaeaea;
    padding-bottom: 20px;
    align-items: center;
    justify-content: center;
    .SwitchDisable {
      position: absolute;
      right: 0;
      width: 48px;
      height: 24px;
      cursor: not-allowed;
    }
    &.borderB {
      border-bottom: 1px solid #eaeaea;
    }
  }
  .autoreserveCon {
    .Radio {
      margin-top: 12px;
    }
  }
  .w200 {
    width: 200px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 3px;
  }
  .act {
    flex-shrink: 0;
    min-width: 0;
  }
  .controlsDropdown {
    flex-shrink: 0;
    min-width: 0;
    height: auto;
    min-height: 36px;
    .itemT {
      background: #f5f5f5;
      border-radius: 4px 4px 4px 4px;
      padding: 3px 8px 3px 10px;
      border: 1px solid #e0e0e0;
      overflow: hidden;
      span {
        max-width: 200px;
        overflow: hidden;
      }
      i {
        color: #9e9e9e;
        &:hover {
          color: #757575;
        }
      }
    }
    .Dropdown--border,
    .dropdownTrigger .Dropdown--border {
      min-height: 36px !important;
      height: auto !important;
    }
    .Dropdown--input .value {
      display: flex !important;
      & > div {
        flex: 1 !important;
        display: flex !important;
        flex-flow: row wrap !important;
        gap: 5px;
      }
    }
  }
`],[`
  p {
    margin: 0;
  }
  max-width: 800px;
  margin: 0 40px;
  padding-bottom: 100px;
  h5,
  h6 {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-top: 38px;
  }
  .title {
    width: 100%;
    padding: 0px 9px;
    line-height: 36px;
    border-radius: 3px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    &:-ms-input-placeholder {
      color: #9e9e9e !important;
    }
    &::-ms-input-placeholder {
      color: #9e9e9e;
    }
    &::placeholder {
      color: #9e9e9e;
    }
    &:focus {
      border: 1px solid #2196f3;
    }
  }
  .con {
    width: 100%;
    padding: 24px 16px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    .ming.Dropdown {
      .Dropdown--input {
        padding-left: 0px;
      }
      .currentMenu {
        color: #2196f3;
      }
    }
    .ming.MenuItem .Item-content:not(.disabled):hover {
      background-color: #f5f5f5 !important;
      color: #333 !important;
    }

    .btnCon {
      width: 180px;
      margin-right: 34px;
      & > div {
        height: 32px;
      }
      .btnStr {
        color: #fff;
        line-height: 32px;
        min-height: 32px;
        padding: 0 20px;
        background: #2196f3;
        border-radius: 4px;
        max-width: 155px;
        box-sizing: border-box;
      }
      i {
        color: #bdbdbd;
        opacity: 0;
        &:hover {
          color: #2196f3;
        }
      }
    }
    &:hover {
      border: 1px solid #ccc;
      i {
        opacity: 1;
      }
    }
    &.nextBtn {
      .btnCon {
        .btnStr {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          color: #333;
        }
      }
      &.noAction {
        opacity: 0.5;
        position: relative;
      }
    }
    .cover {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .switchBtn {
      z-index: 2;
    }
  }
  .moreActionCon {
    border-top: 1px solid #eaeaea;
    padding-bottom: 20px;
    align-items: center;
    justify-content: center;
    .SwitchDisable {
      position: absolute;
      right: 0;
      width: 48px;
      height: 24px;
      cursor: not-allowed;
    }
    &.borderB {
      border-bottom: 1px solid #eaeaea;
    }
  }
  .autoreserveCon {
    .Radio {
      margin-top: 12px;
    }
  }
  .w200 {
    width: 200px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 3px;
  }
  .act {
    flex-shrink: 0;
    min-width: 0;
  }
  .controlsDropdown {
    flex-shrink: 0;
    min-width: 0;
    height: auto;
    min-height: 36px;
    .itemT {
      background: #f5f5f5;
      border-radius: 4px 4px 4px 4px;
      padding: 3px 8px 3px 10px;
      border: 1px solid #e0e0e0;
      overflow: hidden;
      span {
        max-width: 200px;
        overflow: hidden;
      }
      i {
        color: #9e9e9e;
        &:hover {
          color: #757575;
        }
      }
    }
    .Dropdown--border,
    .dropdownTrigger .Dropdown--border {
      min-height: 36px !important;
      height: auto !important;
    }
    .Dropdown--input .value {
      display: flex !important;
      & > div {
        flex: 1 !important;
        display: flex !important;
        flex-flow: row wrap !important;
        gap: 5px;
      }
    }
  }
`]),Ja=(0,oe.Z)([`
  width: 340px;
  background: #ffffff;
  box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, 0.1607843137254902);
  border-radius: 3px;
  padding: 16px;
  p {
    margin: 0;
  }
  .btnName {
    width: 100%;
    line-height: 36px;
    border-radius: 3px;
    border: 1px solid #dddddd;
    padding: 0 12px;
    &:focus {
      border: 1px solid #2196f3;
    }
  }
`],[`
  width: 340px;
  background: #ffffff;
  box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, 0.1607843137254902);
  border-radius: 3px;
  padding: 16px;
  p {
    margin: 0;
  }
  .btnName {
    width: 100%;
    line-height: 36px;
    border-radius: 3px;
    border: 1px solid #dddddd;
    padding: 0 12px;
    &:focus {
      border: 1px solid #2196f3;
    }
  }
`]),Ka=se.ZP.div(Ya),qa=se.ZP.div(Ja),at=null;function er(d){var n=d.worksheetId,c=N().get(d,"worksheetInfo")||{},t=c.appId,a=(0,ze.Z)({advancedSetting:{},loading:!0,dropDownVisible:!1,str:"",index:null}),i=(0,V.Z)(a,2),l=i[0],r=l.advancedSetting,o=l.str,s=l.loading,h=l.dropDownVisible,f=l.index,w=i[1],g=[["subafter","sub","subview"],["continueafter","continue","continueview","continuestatus"]];(0,e.useEffect)(function(){!t||!n||(at&&at.abort(),at=A.Z.getFormSubmissionSettings({workSheetId:n,appId:t}),at.then(function(v){var m=v.advancedSetting,E=m===void 0?{}:m;w({loading:!1,advancedSetting:E})}))},[]);var I=function(m){var E=(0,L.default)({},r,m);w({advancedSetting:E}),A.Z.editWorksheetSetting({workSheetId:n,appId:t,advancedSetting:E}).then(function(x){if(!x){alert(_l("\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2);return}})},p=function(m){return e.createElement(qa,null,e.createElement("p",{className:"Font13"},_l("\u6309\u94AE\u540D\u79F0")),e.createElement("input",{type:"text",className:"btnName mTop10",defaultValue:o,onChange:function(x){w((0,L.default)({},r,(0,ue.default)({},g[m][1],x.target.value)))},autoFocus:!0,onBlur:function(x){var u=x.target.value.trim();w({str:"",index:null}),I((0,ue.default)({},g[m][1],u||o))}}))},k=function(m){var E=m===1&&r.continuestatus==="0",x=N().get(r,g[m][1])||(m===0?_l("\u63D0\u4EA4"):_l("\u7EE7\u7EED\u521B\u5EFA"));return e.createElement(e.Fragment,null,e.createElement("div",{className:Z()("con",{nextBtn:m===1,mTop10:m!==0,noAction:E})},e.createElement("div",{className:"btnCon"},e.createElement($e.Z,{action:["click"],popup:p(m),popupClassName:Z()("inputTrigger"),popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}}},e.createElement("div",{className:"TxtMiddle"},e.createElement("span",{className:"btnStr InlineBlock overflow_ellipsis"},o&&f&&f===m?o:x),!E&&e.createElement(ce.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u4FEE\u6539\u6309\u94AE\u540D\u79F0"))},e.createElement(F.Z,{icon:"workflow_write",className:"Font16 Hand mLeft5 TxtTop LineHeight30",onClick:function(){w({index:m,str:x}),setTimeout(function(){$(".btnName").focus()},300)}}))))),e.createElement("span",{className:"after flex"},e.createElement("span",{className:"Gray_75 TxtMiddle"},_l("\u63D0\u4EA4\u540E\uFF1A")),e.createElement(nt.Z,{menuStyle:{minWidth:150,width:"auto"},currentItemClass:"currentMenu",data:O.Vm,value:N().get(r,g[m][0])||(m===0?"1":"2"),className:Z()("flex InlineBlock"),onChange:function(S){if(S!==N().get(r,g[m][0])){var R={};S==="3"&&(N().get(r,g[m][2])||(R=(0,L.default)({},R,(0,ue.default)({},g[m][2],N().get(d,"worksheetInfo.views[0].viewId"))))),I((0,L.default)({},R,(0,ue.default)({},g[m][0],S)))}}}),N().get(r,g[m][0])==="3"&&e.createElement("span",{className:"viewCon mLeft25"},e.createElement("span",{className:"Gray_75 TxtMiddle"},_l("\u89C6\u56FE\uFF1A")),e.createElement(nt.Z,{menuStyle:{width:150},currentItemClass:"currentMenu",data:(N().get(d,"worksheetInfo.views")||[]).map(function(u){return{text:u.name,value:u.viewId}}),value:N().get(r,g[m][2]),placeholder:N().get(r,g[m][2])?e.createElement("span",{className:"Red"},_l("\u89C6\u56FE\u5DF2\u5220\u9664")):_l("\u9009\u62E9\u89C6\u56FE"),className:Z()("flex InlineBlock"),onChange:function(S){S!==N().get(r,g[m][2])&&I((0,ue.default)({},g[m][2],S))}}))),E&&e.createElement("div",{className:"cover"}),m===1&&e.createElement(Ve.Z,{className:"Hand switchBtn",checked:N().get(r,g[m][3])!=="0",onClick:function(){I((0,ue.default)({},g[m][3],N().get(r,g[m][3])==="0"?"1":"0"))}})))};if(s)return e.createElement(ke.Z,null);var y=function(){return(N().get(r,"reservecontrols")||"").indexOf("[")>=0};return e.createElement(Ne.Z,null,e.createElement(Ka,{className:""},e.createElement("h5",null,_l("\u8868\u5355\u6807\u9898")),e.createElement("input",{type:"text",className:"title mTop12",placeholder:_l("\u521B\u5EFA\u8BB0\u5F55"),defaultValue:N().get(r,"title"),onBlur:function(m){I({title:m.target.value.trim()})}}),e.createElement("h5",null,_l("\u63D0\u4EA4\u6309\u94AE")),g.map(function(v,m){return k(m)}),e.createElement("h5",null,_l("\u66F4\u591A\u8BBE\u7F6E")),e.createElement("div",{className:"moreActionCon flexRow mTop12"},e.createElement("div",{className:"flex"},e.createElement("h6",{className:"mTop20"},_l("\u5B58\u8349\u7A3F")),e.createElement("p",{className:"Gray_9e"},_l("\u5728\u8868\u5355\u4E2D\u663E\u793A\u5B58\u8349\u7A3F\u6309\u94AE\uFF0C\u8349\u7A3F\u6570\u636E\u5728\u4E0B\u6B21\u6253\u5F00\u65F6\u53EF\u4EE5\u7EE7\u7EED\u7F16\u8F91\u5E76\u63D0\u4EA4"))),e.createElement("div",{className:"mRight16 mLeft40 Relative"},e.createElement(Ve.Z,{checked:r.closedrafts!=="1",onClick:function(){I({closedrafts:r.closedrafts==="1"?"0":"1"})}}))),e.createElement("div",{className:"moreActionCon"},e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"flex"},e.createElement("h6",{className:"mTop20"},_l("\u7EE7\u7EED\u521B\u5EFA\u65F6\uFF0C\u4FDD\u7559\u672C\u6B21\u63D0\u4EA4\u5185\u5BB9")),e.createElement("p",{className:"Gray_9e"},_l("\u542F\u7528\u540E\uFF0C\u5728\u8FDE\u7EED\u521B\u5EFA\u6570\u636E\u65F6\u53EF\u4EE5\u81EA\u52A8\u586B\u5145\u4E0A\u6B21\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C\u51CF\u5C11\u91CD\u590D\u8F93\u5165"))),e.createElement("div",{className:"mRight16 mLeft40 Relative"},e.createElement(Ve.Z,{className:Z()("Hand TxtMiddle"),checked:r.showcontinue!=="0",onClick:function(){I({showcontinue:r.showcontinue==="0"?"1":"0"})}}))),r.showcontinue!=="0"&&e.createElement("div",{className:"mLeft12"},e.createElement("div",{className:"flexRow mTop16 pRight16"},e.createElement(nt.Z,{data:[{text:_l("\u4FDD\u7559\u6240\u6709\u63D0\u4EA4\u5185\u5BB9"),value:"all"},{text:_l("\u4FDD\u7559\u6307\u5B9A\u5B57\u6BB5"),value:"reserve"}],value:y()?"reserve":"all",className:Z()("act",y()?"w200":"flex"),onChange:function(m){I({reservecontrols:m==="all"?"all":"[]"})},border:!0,isAppendToBody:!0}),y()&&e.createElement(nt.Z,{key:n,data:d.worksheetControls.filter(function(v){return!Ee.c_.includes(v.controlId)&&[1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,19,21,23,24,26,27,28,29,34,35,36,40,41,42,44,46,48].includes(v.type)}).map(function(v){return{text:v.controlName,value:v.controlId}}),border:!0,value:safeParse(r.reservecontrols).length<=0?void 0:safeParse(r.reservecontrols),className:Z()("flex mLeft10 controlsDropdown"),onChange:function(m){if(!m){I({reservecontrols:Pe()([])});return}var E=safeParse(r.reservecontrols);E.includes(m)?E=E.filter(function(x){return x!==m}):E=[].concat((0,H.Z)(E),[m]),I({reservecontrols:Pe()(E)})},placeholder:_l("\u8BF7\u9009\u62E9"),renderItem:function(m){var E=safeParse(r.reservecontrols),x=E.includes(m.value);return e.createElement("div",{className:Z()("itemText flexRow alignItemsCenter",{isCur:x})},e.createElement(ve.Z,{className:"Hand",checked:x}),e.createElement("span",{className:"mLeft10 flex Gray overflow_ellipsis"},m.text))},cancelAble:!0,popupVisible:h,onVisibleChange:function(m){w({dropDownVisible:m})},selectClose:!1,menuClass:"reserveControlsDropdownMenuSet",renderTitle:function(){var m=safeParse(r.reservecontrols);return e.createElement("div",{className:""},m.map(function(E){var x=d.worksheetControls.find(function(u){return u.controlId===E});return e.createElement("div",{className:"itemT flexRow alignItemsCenter"},e.createElement("span",{className:Z()("flex overflow_ellipsis",{Red:!x})},x?x.controlName:_l("\u5B57\u6BB5\u5DF2\u5220\u9664")),e.createElement(F.Z,{icon:"close",className:"Hand mLeft3 ThemeHoverColor3",onClick:function(S){S.stopPropagation();var R=m.filter(function(C){return C!==E});I({reservecontrols:Pe()(R)})}}))}))},isAppendToBody:!0})),e.createElement("div",{className:"mTop12 Gray_75 Font13 Bold"},_l("\u4FDD\u7559\u65B9\u5F0F")),e.createElement(Qa.ZP,{className:"autoreserveCon flexColumn",data:[{value:"0",text:_l("\u663E\u793A\u201C\u4FDD\u7559\u4E0A\u6B21\u63D0\u4EA4\u5185\u5BB9\u201D\u9009\u9879\uFF0C\u7531\u7528\u6237\u51B3\u5B9A\u662F\u5426\u4FDD\u7559")},{value:"1",text:_l("\u65E0\u9700\u8BE2\u95EE\uFF0C\u81EA\u52A8\u4FDD\u7559")}],checkedValue:r.autoreserve==="1"?"1":"0",onChange:function(m){I({autoreserve:m})}}))),e.createElement("div",{className:"moreActionCon flexRow borderB"},e.createElement("div",{className:"flex"},e.createElement("h6",{className:"mTop20"},_l("\u901A\u8FC7\u63D0\u4EA4\u6309\u94AE\u65B0\u589E\u65F6\uFF0C\u7ACB\u5373\u6267\u884C\u5DE5\u4F5C\u6D41"),e.createElement("i",{className:"icon-beta1 Font16 mLeft5",style:{color:"#4caf50"}})),e.createElement("p",{className:"Gray_9e"},_l("\u542F\u7528\u540E\uFF0C\u901A\u8FC7\u70B9\u51FB\u8868\u5355\u63D0\u4EA4\u6309\u94AE\u521B\u5EFA\u7684\u8BB0\u5F55\uFF0C\u5728\u89E6\u53D1\u5DE5\u4F5C\u6D41\u540E\u4F1A\u7ACB\u5373\u5F00\u59CB\u6267\u884C\uFF08\u65E0\u9700\u7CFB\u7EDF\u9ED8\u8BA4\u76845s\u5EF6\u65F6\u7B49\u5F85\uFF09\u3002\u5F53\u6267\u884C\u5B8C\u6210\u6216\u7B49\u5F85\u65F6\u4F1A\u540C\u65F6\u5237\u65B0\u524D\u7AEF\u6570\u636E\u3002"))),e.createElement("div",{className:"mRight16 mLeft40 Relative"},e.createElement(Ve.Z,{checked:r.executeworkflow==="1",onClick:function(){I({executeworkflow:r.executeworkflow==="1"?"0":"1"})}})))))}const Dt=er;var tr=b(44036),nr=b(22177),ar=b(89499),rr=function(d){(0,le.default)(n,d);function n(c){(0,ae.default)(this,n);var t=(0,ee.default)(this,(n.__proto__||ne()(n)).call(this,c));return t.getWorksheetInfo=function(){var a=t.props.match,i=a===void 0?{}:a,l=i.params.worksheetId;A.Z.getWorksheetInfo({worksheetId:l,getTemplate:!0,getViews:!0,getSwitchPermit:!0}).then(function(r){if(r.name=(0,Fe.T3)(r.appId,l).name||r.name,r.template.controls=(0,ar.zj)(r.appId,r.template.controls),![2,4].includes(r.roleType))t.setState({noRight:!0,loading:!1});else{var o=_.sortBy(r.template.controls,function(s){return s.row});t.setState({worksheetName:r.name,loading:!1,worksheetControls:r.template.controls,worksheetRuleControls:o,worksheetInfo:r})}})},t.renderCon=function(a){var i=t.props.match,l=i===void 0?{}:i,r=l.params.worksheetId,o=(0,L.default)({},t.props,t.state,{worksheetId:r,onChange:function(h){t.setState({worksheetInfo:h})}});switch(a){case"alias":return e.createElement(Xn,o);case"display":return e.createElement(In,t.state);case"validationBox":return e.createElement(Wt,null);case"printTemplate":return e.createElement(Un,o);case"functionalSwitch":return e.createElement(da,o);case"customBtn":return e.createElement(Za,o);case"indexSetting":return e.createElement(Xa,o);case"submitForm":return e.createElement(Dt,o);default:return e.createElement(Dt,o)}},t.state={worksheetName:"",loading:!0,worksheetControls:[],worksheetRuleControls:[],worksheetInfo:{}},t}return(0,re.default)(n,[{key:"componentWillMount",value:function(){this.getWorksheetInfo()}},{key:"componentDidMount",value:function(){$("html").addClass("formSetWorksheet")}},{key:"componentWillUnmount",value:function(){$("html").removeClass("formSetWorksheet")}},{key:"render",value:function(){var t=this.props.match,a=t===void 0?{params:{}}:t,i=a.params,l=i.worksheetId,r=i.type,o=r===void 0?"":r,s=this.state,h=s.loading,f=s.noRight,w=f===void 0?!1:f,g=s.worksheetName;return h?e.createElement(ke.Z,null):e.createElement("div",{className:"columnRulesWrap"},e.createElement(Ft.Z,{worksheetId:l,worksheetName:g,showSaveButton:!1,saveLoading:!1,onBack:function(){return(0,tt.Jh)(l)},onClose:function(){return(0,tt.Jh)(l)}}),w?e.createElement("div",{className:"w100 WhiteBG Absolute",style:{top:0,bottom:0,zIndex:2}},e.createElement(tr.Z,{text:_l("\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u7F16\u8F91"),showBtn:!0,btnText:_l("\u8FD4\u56DE"),callback:function(){return(0,tt.Jh)(l)}})):e.createElement("div",{className:"flexBox columnRulesBox"},e.createElement($t,this.props),e.createElement(Zt(),{title:_l("\u8868\u5355\u8BBE\u7F6E - %0 - %1",O.e5[o||"submitForm"],g||"")}),e.createElement(nr.Z,null,this.renderCon(o))))}}]),n}(e.Component);const lr=rr}}]);
