"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5067],{15067:(yn,ye,o)=>{o.r(ye),o.d(ye,{default:()=>Sn});var Ke=o(85105),de=o.n(Ke),fe=o(99663),me=o(22600),pe=o(49135),he=o(93196),e=o(67294),xe=o(25273),Xe=o(46593),ke=o.n(Xe),qe=o(94942),M=o.n(qe),q=o(36803),ge=o(79221),P=o(88239),_e=o(45697),A=o.n(_e),j=o(5017),et=o(49611),tt=o.n(et),Ne=o(42541),nt=o(7205),rt=o(98658),V=o(86735),at=(0,V.Z)([`
  text-align: center;
  font-size: 13px;
  color: #333;
  line-height: 1em;
  margin: 8px 0 -2px;
`],[`
  text-align: center;
  font-size: 13px;
  color: #333;
  line-height: 1em;
  margin: 8px 0 -2px;
`]),it=j.ZP.div(function(a){var r=a.width;return"position: relative; z-index: 1; width: "+r+"px; border-radius: 4px; background-color: #fff; padding: 10px; box-sizing: border-box; box-shadow: 0px 3px 8px #0000004D;"}),ot=j.ZP.div(at),lt=j.ZP.span(function(a){var r=a.width;return`
  position: absolute;
  top: -`+r+`px;
  left: 50%;
  margin-left: -`+r/2+`px;
  width: 0px;
  height: 0px;
  border: `+r/2+`px solid transparent;
  border-bottom-color: #fff;
`});function Fe(a){var r=a.url,n=a.bulge,i=n===void 0?!0:n,s=a.width,t=s===void 0?160:s,c=md.global.Config.AjaxApiUrl+("code/CreateQrCodeImage?url="+encodeURI(""+r));return e.createElement(it,{width:t},i&&e.createElement(lt,{width:24}),r&&e.createElement(rt.Z,{content:r,width:t-24,height:t-24,alt:"",style:{verticalAlign:"bottom"}}),e.createElement(ot,null,_l("\u626B\u4E00\u626B\u5206\u4EAB\u7ED9\u597D\u53CB")))}Fe.propTypes={url:A().string,bulge:A().bool,width:A().number};var b={CLOSE:"CLOSE",NORMAL:"NORMAL",COMPLETED:"COMPLETED",NEED_FILL_PASSWORD:"NEED_FILL_PASSWORD",NEED_LOGIN:"NEED_LOGIN",NO_PROJECT_USER:"NO_PROJECT_USER",NEED_WECHAT_AUTH:"NEED_WECHAT_AUTH",ONLY_WECHAT_FILL:"ONLY_WECHAT_FILL",NOT_OPEN:"NOT_OPEN",NOT_IN_FILL_TIME:"NOT_IN_FILL_TIME"},st=["rowid","ownerid","caid","ctime","utime","uaid","wfname","wfcuaids","wfcaid","wfctime","wfrtime","wfftime","wfstatus"],ut=o(63239),G=o.n(ut),De=o(17563),ne=o(5505),Te=o(45231),Le=o(23098),ae=o(72950),le=o(24607),Y=o(14663),ct=o(30381),K=o.n(ct),ie=navigator.userAgent;function dt(){for(var a=_l("\u672A\u77E5"),r=[["Android",/Android\s([0-9\.]+)/],["iOS",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["Firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["Opera",/Opera\/([0-9\.]+)(?:\s|$)/],["Opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["Edge",/(Edge|Edg)\/([0-9\._]+)/],["IE",/Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],["IE",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["IE",/MSIE\s(7\.0)/],["Safari",/Version\/([0-9\._]+).*Safari/],["Chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/]],n=0;n<r.length;n++)if(r[n][1].test(ie)){a=r[n][0];break}return a}function ft(){var a=navigator.platform;return ie.indexOf("Android")>-1?"Android":ie.indexOf("iPhone")>-1?"iPhone":ie.indexOf("Mac")>-1?"Mac":a==="Win32"||a==="Windows"?"Windows":_l("\u672A\u77E5")}function mt(){var a=navigator.platform;return ie.indexOf("Android")>-1?"Android":ie.indexOf("iPhone")>-1?"iOS":a==="Win32"||a==="Windows"?"Windows":a==="Mac68K"||a==="MacPPC"||a==="Macintosh"||a==="MacIntel"?"Mac OS":a==="X11"?"Unix":String(a).indexOf("Linux")>-1?"Linux":_l("\u672A\u77E5")}function pt(){var a=location.href.indexOf("?");if(!(a<0)){var r=De.parse(location.href.slice(location.href.indexOf("?")+1));return decodeURIComponent(r.source)}}function ht(){return{browser:dt(),device:ft(),system:mt(),source:pt()}}var ve=function(r,n){var i=localStorage.getItem("publicWorksheetSubmit_"+r),s=i?i.indexOf("[")<0?[i]:safeParse(i):[],t=!0,c=_.get(n,"limitWriteCount");if(s.length>0&&_.get(n,"isEnable")&&c){var l=null;switch(_.get(n,"limitRangType")){case Y.Je.SPECIFIEDTIMES:l=null;break;case Y.Je.DAY:l="day";break;case Y.Je.WEEK:l="week";break;case Y.Je.MONTH:l="month";break;case Y.Je.YEAR:l="year";break}t=c>0?s.filter(function(d){return l?K()(d).isSame(K()(),l):!0}).length<c:!0}return t},X=o(15577),gt=o(96486),N=o.n(gt),vt=o(29854),bt=o(49365),It=o(86674),Et=o(72045),wt=o(70714),We=o(89471),Ct=o(1084),St=o(89499),se=o(62232),yt=function(){var a=(0,q.Z)(M().mark(function r(n,i){var s,t,c,l,d,p,g,m,I,y,w,f,T,v,x,L,C,k,O,S;return M().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=n.visibleType,t=n.limitWriteFrequencySetting,c=n.linkSwitchTime,l=c===void 0?{}:c,d=n.limitWriteCount,p=d===void 0?{}:d,g=n.limitPasswordWrite,m=g===void 0?{}:g,I=n.weChatSetting,y=n.isWithinLimitWriteTime,w=n.completeNumber,f=n.writeScope,T=n.projectId,v=n.returnUrl,!m.isEnable){u.next=3;break}return u.abrupt("return",b.NEED_FILL_PASSWORD);case 3:if(s===2){u.next=5;break}return u.abrupt("return",b.CLOSE);case 5:if(!(I.onlyWxCollect&&!window.isWeiXin)){u.next=7;break}return u.abrupt("return",b.ONLY_WECHAT_FILL);case 7:if(!l.isEnable){u.next=12;break}if(!K()().isBefore(K()(l.startTime),"second")){u.next=10;break}return u.abrupt("return",b.NOT_OPEN);case 10:if(!K()().isAfter(K()(l.endTime),"second")){u.next=12;break}return u.abrupt("return",b.CLOSE);case 12:if(!p.isEnable){u.next=15;break}if(!(w>=p.limitWriteCount)){u.next=15;break}return u.abrupt("return",b.CLOSE);case 15:if(!(window.isWeiXin&&v)){u.next=46;break}if(!(I.isCollectWxInfo||f!==1)){u.next=46;break}if(sessionStorage.setItem("entryUrl",location.href),x=(0,X.A_)(),!(x.code&&x.state)){u.next=45;break}return u.next=22,ne.Z.getUserInfo({code:x.code,state:x.state});case 22:if(L=u.sent,!L){u.next=41;break}if(safeLocalStorageSetItem("wxUserInfo",G()(L||{})),!(f!==1&&!md.global.Config.IsLocal&&L.state&&I.collectChannel===1)){u.next=38;break}return u.next=28,Le.Z.tPLogin({unionId:L.unionId,state:L.state,tpType:1});case 28:if(C=u.sent,C.accountResult!==1){u.next=36;break}return(0,wt.GK)(C.sessionId),u.next=33,vt.Z.getGlobalMeta({});case 33:k=u.sent,k&&(window.config=k.config,window.md?window.md.global=k["md.global"]:window.md={global:k["md.global"]},window.md.global&&!window.md.global.Account&&(window.md.global.Account={})),Ie(x.source);case 36:u.next=39;break;case 38:Ie(x.source);case 39:u.next=43;break;case 41:O=sessionStorage.getItem("repeatRequestCount")||0,O===0?(location.href=location.origin+location.pathname,sessionStorage.setItem("repeatRequestCount",O+1)):Ie(x.source);case 43:u.next=46;break;case 45:return u.abrupt("return",b.NEED_WECHAT_AUTH);case 46:if(!(f!==1&&(!md.global.Account.accountId||md.global.Account.isPortal))){u.next=48;break}return u.abrupt("return",b.NEED_LOGIN);case 48:if(!(f===3&&md.global.Account.projects)){u.next=52;break}if(S=md.global.Account.projects.map(function(E){return E.projectId}),N().includes(S,T)){u.next=52;break}return u.abrupt("return",b.NO_PROJECT_USER);case 52:if(!ve(i,t)){u.next=56;break}return u.abrupt("return",y?b.NORMAL:b.NOT_IN_FILL_TIME);case 56:return u.abrupt("return",b.COMPLETED);case 57:case"end":return u.stop()}},r,this)}));return function(n,i){return a.apply(this,arguments)}}(),xt=function(){var a=(0,q.Z)(M().mark(function r(n,i,s){var t;return M().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=n,l.next=3,Te.Z.getRowRelationRows({controlId:n.controlId,rowId:i,worksheetId:s,pageIndex:1,pageSize:200,getWorksheet:!0}).then(function(d){if(d.resultCode===1){var p=void 0;if(n.type===34){var g=((d.template||{}).controls||[]).filter(function(I){return!N().includes(st,I.controlId)}),m=(d.data||[]).map(function(I){var y={};return g.forEach(function(w){y[w.controlId]=w.type===It.DN.ATTACHMENT?(0,We.N$)(I[w.controlId]):I[w.controlId]}),y});p=[{cid:"",rcid:"",isAsync:!1,staticValue:G()(m)}]}else p=d.data.map(function(I){return{cid:"",rcid:"",isAsync:!1,staticValue:G()([G()(I)])}});t.advancedSetting=(0,P.default)({},n.advancedSetting,{defsource:G()(p)})}});case 3:return l.abrupt("return",t);case 4:case"end":return l.stop()}},r,this)}));return function(n,i,s){return a.apply(this,arguments)}}();function Oe(a){var r=(0,ae.iR)(a.originalControls,N().pick(a,["ipControlId","browserControlId","deviceControlId","systemControlId","extendSourceId","ipControlId","weChatSetting"])),n=a.hidedControlIds.concat(r);return(0,ae.LM)(a.originalControls,a.controls).map(function(i){return(0,P.default)({},i,{advancedSetting:(0,P.default)({},i.advancedSetting||{},{showtype:(0,X.Q9)()&&(0,se.YU)(i)?"1":i.type===29&&N().includes(["2","6"],N().get(i,"advancedSetting.showtype"))?"5":N().get(i,"advancedSetting.showtype"),allowlink:i.type===29?"0":N().get(i,"advancedSetting.allowlink"),allowedit:i.type===29?"0":N().get(i,"advancedSetting.allowedit")}),controlPermissions:N().find(n,function(s){return i.controlId===s})||i.type===29&&!N().includes([0,1],i.enumDefault2)?"000":i.controlPermissions,fieldPermission:i.fieldPermission?i.fieldPermission.slice(0,2)+"1":""})})}function be(a,r){return r||(Y.np[a]?(Y.np[a]||{}).main:"#2196f3")}function kt(a,r){ne.Z.getPublicWorksheetInfo({worksheetId:a}).then(function(n){var i=Oe(n);r(!1,{publicWorksheetInfo:(0,P.default)({},n,{logoUrl:n.logo,themeIndex:n.themeColor,themeBgColor:be(n.themeColor,n.themeBgColor),coverUrl:n.cover,visibleType:2}),formData:i})})}function Ie(a){history.pushState({},"",a?""+location.origin+location.pathname+"?source="+a:location.origin+location.pathname)}function ue(a,r){var n=a,i=r.fieldMaps,s=localStorage.getItem("wxUserInfo"),t=JSON.parse(s||"{}");return N().isEmpty(t)||(n=a.map(function(c){var l=c;for(var d in i)c.controlId===i[d]&&(l=(0,P.default)({},c,{value:d===Y.gO.HEAD_IMG_URL?G()(t.avatarAttachment?{attachments:[(0,P.default)({},t.avatarAttachment,{fileID:(0,Et.Z)(),url:t.avatarAttachment.url+(t.avatarAttachment.url.indexOf("?")>-1?"":"?")})],knowledgeAtts:[],attachmentData:[]}:{}):t[d]}));return l})),n}var Re=function(){var a=(0,q.Z)(M().mark(function r(n,i){var s,t,c,l,d,p,g,m,I,y,w,f,T,v,x,L,C,k,O,S,Z,u,E,F;return M().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s=n.shareId,t=n.appId,c=n.worksheetId,l=n.cacheDraft,d=n.cacheFieldData,p=d===void 0?{}:d,g=n.weChatSetting,m=g===void 0?{}:g,I=n.abilityExpand,y=I===void 0?{}:I,w=n.writeScope,f=Oe(n),i!==b.NOT_IN_FILL_TIME){h.next=4;break}return h.abrupt("return",f.map(function(R){return(0,P.default)({},R,{disabled:!0})}));case 4:if(!l){h.next=11;break}if(T=localStorage.getItem("cacheDraft_"+s)||"[]",v=JSON.parse(T)||[],!v.length){h.next=11;break}return x=f.map(function(R){var Q=v.filter(function(J){return J.controlId===R.controlId})[0]||{};return(0,P.default)({},R,{value:Q.value})}),m.isCollectWxInfo&&(x=ue(x,m)),h.abrupt("return",x);case 11:if(!(y.autoFillField.isAutoFillField&&(w!==1||window.isWeiXin))){h.next=37;break}return L=f,C={appId:t,pageIndex:1,pageSize:50,keyWords:"",fastFilters:[],navGroupFilters:[],sortControls:[{controlId:"ctime",dataType:2,isAsc:!1}],notGetTotal:!0,searchType:1,status:1},h.next=16,ne.Z.getLastFillData(C);case 16:if(k=h.sent,!(k.data&&k.data[0])){h.next=37;break}O=0;case 19:if(!(O<f.length)){h.next=35;break}if(S=f[O],Z=N().includes(y.autoFillField.autoFillFields,S.controlId)&&k.data[0][S.controlId],!Z){h.next=31;break}if(![29,34].includes(S.type)){h.next=29;break}return h.next=26,xt(S,k.data[0].rowid,c);case 26:h.t0=h.sent,h.next=30;break;case 29:h.t0=(0,P.default)({},S,{value:S.type===14?(0,We.N$)(k.data[0][S.controlId]):k.data[0][S.controlId]});case 30:S=h.t0;case 31:L[O]=S;case 32:O++,h.next=19;break;case 35:return m.isCollectWxInfo&&(L=ue(L,m)),h.abrupt("return",L);case 37:if(!p.isEnable){h.next=44;break}if(u=localStorage.getItem("cacheFieldData_"+s)||"[]",E=JSON.parse(u)||[],!E.length){h.next=44;break}return F=f.map(function(R){if(N().includes(p.cacheField,R.controlId)){var Q=E.filter(function(J){return J.controlId===R.controlId})[0]||{};return(0,P.default)({},R,{value:Q.value})}else return R}),m.isCollectWxInfo&&(F=ue(F,m)),h.abrupt("return",F);case 44:if(!m.isCollectWxInfo){h.next=46;break}return h.abrupt("return",ue(f,m));case 46:return h.abrupt("return",f);case 47:case"end":return h.stop()}},r,this)}));return function(n,i){return a.apply(this,arguments)}}();function Pe(a){var r=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(i){};ne.Z.getPublicWorksheet(a).then(function(){var i=(0,q.Z)(M().mark(function s(t){var c,l,d,p,g,m,I,y;return M().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(t.clientId&&(window.clientId=t.clientId,!sessionStorage.getItem("clientId")&&sessionStorage.setItem("clientId",t.clientId)),localStorage.setItem("currentProjectId",t.projectId),(0,Ct.Z)({type:"function"},{allowNotLogin:!0,requestParams:{projectId:t.projectId}}),!(t.langInfo&&t.langInfo.appLangId)){f.next=8;break}return f.next=6,bt.Z.getAppLangDetail({projectId:t.projectId,appId:t.appId,appLangId:t.langInfo.appLangId});case 6:c=f.sent,window["langData-"+t.appId]=c.items;case 8:return t.name=(0,X.T3)(t.appId,t.worksheetId).name||t.name,t.originalControls=(0,St.zj)(t.appId,t.originalControls),f.next=12,yt(t,a.shareId);case 12:if(l=f.sent,!(!t||t.visibleType!==2)){f.next=16;break}return n({publicWorksheetInfo:{logoUrl:t.logo,name:t.name,themeIndex:t.themeColor,themeBgColor:be(t.themeColor,t.themeBgColor),coverUrl:t.cover,projectName:t.projectName,worksheetId:t.worksheetId},status:l}),f.abrupt("return");case 16:if(l!==b.NEED_LOGIN){f.next=25;break}if(d=localStorage.getItem("wxUserInfo"),p=JSON.parse(d||"{}"),g=p.unionId&&p.state?"/login?unionId="+p.unionId+"&state="+p.state+"&tpType=1&":"/login?",!N().get(window,"md.global.Account.isPortal")){f.next=23;break}return f.next=23,Le.Z.loginOut();case 23:return location.href=""+(window.subPath||"")+g+"ReturnUrl="+encodeURIComponent(location.href),f.abrupt("return");case 25:if(l!==b.NEED_WECHAT_AUTH){f.next=31;break}return m=encodeURIComponent(location.href),I=md.global.Config.WebUrl+"weixinAuth",y=""+t.returnUrl.replace("&redirect_uri=custom","&redirect_uri="+encodeURIComponent(I+"?returnUrl="+m)),location.href=I+"?authUrl="+encodeURIComponent(y),f.abrupt("return");case 31:t.shareAuthor&&(window.shareAuthor=t.shareAuthor),Te.Z.getControlRules({worksheetId:t.worksheetId,type:1}).then(function(){var T=(0,q.Z)(M().mark(function v(x){return M().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.t0=n,C.t1=(0,P.default)({},t,{logoUrl:t.logo,themeIndex:t.themeColor,themeBgColor:be(t.themeColor,t.themeBgColor),coverUrl:t.cover}),C.next=4,Re(t,l);case 4:C.t2=C.sent,C.t3=x,C.t4=l,C.t5={publicWorksheetInfo:C.t1,formData:C.t2,rules:C.t3,status:C.t4},(0,C.t0)(C.t5);case 9:case"end":return C.stop()}},v,r)}));return function(v){return T.apply(this,arguments)}}());case 33:case"end":return f.stop()}},s,r)}));return function(s){return i.apply(this,arguments)}}()).catch(function(i){n(!1)})}function Nt(a,r){var n=ht(),i=r.originalControls,s=[r.browserControlId,r.deviceControlId,r.systemControlId,r.extendSourceId,r.ipControlId],t=i.filter(function(c){return N().find(s,function(l){return l&&l===c.controlId})});return t.map(function(c){var l=s.indexOf(c.controlId);return(0,P.default)({},N().pick(c,["controlId","controlName","type"]),{value:n[["browser","device","system","source"][l]]})})}function Ft(a,r){var n=r.originalControls,i=N().find(n,function(t){return t.controlName.indexOf("\u8FDD\u89C4\u8868\u5355\u94FE\u63A5")>-1});if(i){var s=void 0;try{s=De.parse(decodeURIComponent(location.search.slice(1))).from}catch(t){return a}return s?a.filter(function(t){return t.controlId!==i.controlId}).concat((0,P.default)({},i,{value:decodeURIComponent(s)})):a}else return a}function Dt(a){return a.map(function(r){if(r.type===14&&r.value){var n=JSON.parse(r.value);return n.attachmentData=n.attachmentData.filter(function(i){return i.accountId}),n.attachments=n.attachments.filter(function(i){return i.key}),(0,P.default)({},r,{value:G()(n)})}return r})}function Tt(a){var r=a.shareId,n=a.worksheetId,i=a.formData,s=i===void 0?[]:i,t=a.params,c=t===void 0?{}:t,l=a.publicWorksheetInfo,d=a.triggerUniqueError,p=d===void 0?function(){}:d,g=a.setSubListUniqueError,m=g===void 0?function(){}:g,I=a.setRuleError,y=I===void 0?function(){}:I,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},f=Nt(s,l),T=s.filter(function(v){return!N().find(f,function(x){return v.controlId===x.controlId})}).concat(f).filter(function(v){return!N().includes([27,21,30,31,32,48],v.type)});r==="a7f10198e9d84702b68ba35f73c94cac"&&(T=Ft(T,l)),(0,X.Q9)()&&(T=Dt(T)),ne.Z.addRow((0,P.default)({worksheetId:n,receiveControls:T.map(function(v){return(0,le.jz)(v,{needFullUpdate:!0,isNewRecord:!0})})},c)).then(function(v){if(v)if(v.resultCode===1)w(null,v);else switch(w(!0),v.resultCode){case 7:alert(_l("\u65E0\u6743\u9650"),3);break;case 11:p(v.badData);break;case 22:m(v.badData);break;case 32:y(v.badData);break;case 14:alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3);break;case 8:case 9:case 21:alert(_l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u5DF2\u505C\u6B62\u6570\u636E\u6536\u96C6\uFF01"),2);break;case 15:alert(_l("\u624B\u673A\u9A8C\u8BC1\u7801\u9519\u8BEF"),2);break;case 16:alert(_l("\u624B\u673A\u9A8C\u8BC1\u7801\u8FC7\u671F\u6216\u5931\u6548"),2);break;case 17:location.reload();break;case 19:location.reload();break;default:alert(_l("\u63D0\u4EA4\u53D1\u751F\u9519\u8BEF"),3);break}}).catch(function(v){w(v),v&&v.errorCode===4017&&alert(_l("\u5E94\u7528\u9644\u4EF6\u4E0A\u4F20\u6D41\u91CF\u4E0D\u8DB3\uFF0C\u8BF7\u8054\u7CFB\u8868\u5355\u53D1\u5E03\u8005"),3)})}var Lt=o(8177),Ze=o.n(Lt),Wt=o(97553),Ae=o(56493),Ot=o(85315),Ue=o(44894),Me=o(54895),Rt=o(25796),Pt=o(54208),Ee=o(33867),we=o(70801),re=o(12424),xn=o(20148),Zt=o(60385),je=o.n(Zt),At=o(93002),Ut=o(82011),Mt=o(58916),jt=(0,V.Z)([`
  .mui-dialog-header {
    display: none;
  }
  .mui-dialog-body {
    padding: 0 !important;
  }
`],[`
  .mui-dialog-header {
    display: none;
  }
  .mui-dialog-body {
    padding: 0 !important;
  }
`]),Bt=(0,V.Z)([`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  margin: 0px auto;
  position: relative;

  .recordDetailHeader {
    padding: 20px 24px;
    font-size: 17px;
    font-weight: 600;
  }

  .workSheetRecordInfo {
    flex: 1;
    min-height: 0;

    .ant-pro-layout-watermark-wrapper {
      position: unset !important;
    }
    .recordHeader {
      display: none;
    }
    .recordInfoForm {
      .recordInfoFormHeader {
        display: none;
      }
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  margin: 0px auto;
  position: relative;

  .recordDetailHeader {
    padding: 20px 24px;
    font-size: 17px;
    font-weight: 600;
  }

  .workSheetRecordInfo {
    flex: 1;
    min-height: 0;

    .ant-pro-layout-watermark-wrapper {
      position: unset !important;
    }
    .recordHeader {
      display: none;
    }
    .recordInfoForm {
      .recordInfoFormHeader {
        display: none;
      }
    }
  }
`]),Ht=(0,j.ZP)(we.Z)(jt),$t=j.ZP.div(Bt);function zt(a){var r=a.isEdit,n=a.publicWorksheetInfo,i=a.onClose,s=a.rowId,t=a.onRefreshList,c=n.worksheetId,l=n.appId;return(0,X.Q9)()?e.createElement(Mt.aY,{className:"full",visible:!0,appId:l,worksheetId:c,rowId:s,editable:r,hideOtherOperate:r,onClose:i,updateSuccess:function(p,g){return t(p[0],g)}}):e.createElement(Ht,{visible:!0,type:"fixed",width:1100,showFooter:!1,onCancel:i},e.createElement($t,null,e.createElement("div",{className:"recordDetailHeader"},r?_l("\u4FEE\u6539\u8BB0\u5F55"):_l("\u67E5\u770B\u8BB0\u5F55")),e.createElement(Ut.Z,{notDialog:!0,from:2,appId:l,worksheetId:c,allowEdit:r,recordId:s,updateSuccess:function(p,g){return t(p[0],g)}})))}var Vt=(0,V.Z)([`
  height: 100%;
  .am-modal-body {
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    color: unset !important;

    .recordHeader {
      display: flex;
      align-items: center;
      height: 54px;
      min-height: 54px;
      background: #fff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
      border-radius: 3px 3px 0px 0px;

      .arrowIcon {
        font-size: 20px;
        color: #757575;
        margin-left: 14px;
        cursor: pointer;
      }
    }
  }
`],[`
  height: 100%;
  .am-modal-body {
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    color: unset !important;

    .recordHeader {
      display: flex;
      align-items: center;
      height: 54px;
      min-height: 54px;
      background: #fff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
      border-radius: 3px 3px 0px 0px;

      .arrowIcon {
        font-size: 20px;
        color: #757575;
        margin-left: 14px;
        cursor: pointer;
      }
    }
  }
`]),Gt=(0,V.Z)([`
  border-right: 2px solid #bdbdbd;
  margin: 0 16px;
  height: 15px;
`],[`
  border-right: 2px solid #bdbdbd;
  margin: 0 16px;
  height: 15px;
`]),Yt=(0,j.ZP)(je())(Vt),Jt=j.ZP.div(Gt),Qt=j.ZP.div(function(a){var r=a.themeBgColor,n=a.isMobile;return`
    width: `+(n?"100%":"fit-content")+`;
    background: `+(0,se.YT)(r,.05)+`;
    height: 32px;
    padding: 0 12px;
    margin-bottom: 20px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    span {
      line-height: 32px;
      font-weight: 600;
      font-size: 14px;
    }
    :hover {
      background: `+(0,se.YT)(r,.1)+`;
    }
`});function Be(a){var r=a.isFillPage,n=a.publicWorksheetInfo,i=a.formData,s=n.appId,t=n.abilityExpand,c=t===void 0?{}:t,l=n.writeScope,d=n.shareId,p=n.limitWriteFrequencySetting,g=n.themeBgColor,m=(0,X.Q9)(),I=(0,e.useState)({list:[],count:0}),y=(0,re.Z)(I,2),w=y[0],f=y[1],T=(0,e.useState)(!1),v=(0,re.Z)(T,2),x=v[0],L=v[1],C=(0,e.useState)({visible:!1}),k=(0,re.Z)(C,2),O=k[0],S=k[1],Z=(0,At.Z)({pageIndex:1,loading:!0,noMore:!1}),u=(0,re.Z)(Z,2),E=u[0],F=u[1],B=i.filter(function(U){return U.attribute===1})[0]||{};(0,e.useEffect)(function(){N().get(c,"allowViewChange.isAllowViewChange")&&(l!==1||window.isWeiXin)&&h()},[E.loading,E.pageIndex]);var h=function(){if(E.loading){var D={appId:s,pageIndex:E.pageIndex,pageSize:50,keyWords:"",fastFilters:[],navGroupFilters:[],sortControls:[],notGetTotal:!0,searchType:1,status:1};ne.Z.queryHistoryRows(D).then(function(W){W.resultCode===1&&(f({list:E.pageIndex>1?w.list.concat(W.data):W.data,count:W.count}),F({loading:!1,noMore:W.data.length<50}))})}},R=function(){!E.noMore&&!E.loading&&F({loading:!0,pageIndex:E.pageIndex+1})},Q=function(D){if(c.allowViewChange.switchViewChange===2){if(!N().isEmpty(c.allowViewChange.changeSetting)&&c.allowViewChange.changeSetting.changeType===2){var W=c.allowViewChange.changeSetting.expireTime,H=K()().diff(K()(D),"hours");return H<W}return!0}return!1},J=function(D){ne.Z.deleteWorksheetRows({appId:s,rowId:D}).then(function(W){if(W.isSuccess){var H=w.list.filter(function(z){return z.rowid!==D});f({list:H,count:w.count-1}),alert(_l("\u5220\u9664\u6210\u529F"))}else alert(_l("\u5220\u9664\u5931\u8D25"),2)})},te=function(D){m?je().alert(_l("\u786E\u8BA4\u5220\u9664\u8BE5\u586B\u5199\u8BB0\u5F55\u5417?"),"",[{text:_l("\u53D6\u6D88"),style:{color:"#2196F3"},onPress:function(){}},{text:_l("\u5220\u9664"),style:{color:"red"},onPress:function(){return J(D)}}]):we.Z.confirm({title:_l("\u5220\u9664\u8BB0\u5F55"),buttonType:"danger",description:_l("\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u5220\u9664\u5417\uFF1F"),onOk:function(){return J(D)}})},oe=function(){return e.createElement(e.Fragment,null,e.createElement(xe.Z,{className:"flex",onScrollEnd:R},w.list.map(function(D){return e.createElement("div",{className:"recordItem",onClick:function(){return S({visible:!0,isEdit:m?Q(D.ctime)&&D.allowedit:!1,rowId:D.rowid})}},e.createElement("div",{title:D[B.controlId||""]||_l("\u672A\u547D\u540D"),className:"flex TxtLeft Font17 overflow_ellipsis bold"},N().includes([21,26,27,48],B.type)?_l("\u672A\u547D\u540D"):(0,le.xI)(i,D,void 0,{noMask:!0})),e.createElement("div",{className:"recordFooter"},e.createElement("div",{title:D.ctime,className:"overflow_ellipsis"},e.createElement("span",{className:"Gray_75"},_l("\u63D0\u4EA4\u65F6\u95F4")),e.createElement("span",{className:"mLeft10"},D.ctime)),e.createElement("div",{className:"flexRow"},Q(D.ctime)&&D.allowdelete&&e.createElement("div",{className:"optionIcon",onClick:function(H){H.stopPropagation(),te(D.rowid)}},e.createElement(Ee.Z,{icon:"delete1",className:"deleteIcon"})),Q(D.ctime)&&D.allowedit&&!m&&e.createElement("div",{className:"optionIcon",onClick:function(H){H.stopPropagation(),S({visible:!0,isEdit:!0,rowId:D.rowid})}},e.createElement(Ee.Z,{icon:"edit",className:"editIcon"})))))})),E.pageSize>0&&E.loading&&e.createElement(Pt.Z,{className:"mTop10"}))},Se=ve(d,p);return N().get(c,"allowViewChange.isAllowViewChange")?e.createElement(e.Fragment,null,r&&!!w.count&&e.createElement(Qt,{isMobile:m,themeBgColor:g,onClick:function(){L(!0),F({loading:!0,pageIndex:1})}},e.createElement("span",{style:{color:g}},_l("\u6211\u7684\u586B\u5199")),e.createElement("span",{className:"mLeft10",style:{color:g}},w.count)),!r&&!!w.count&&e.createElement(e.Fragment,null,e.createElement("span",{className:"Hand",onClick:function(){L(!0),F({loading:!0,pageIndex:1})}},_l("\u67E5\u770B\u586B\u5199\u8BB0\u5F55")),Se&&e.createElement(Jt,null)),m?e.createElement(Yt,{popup:!0,visible:x,className:"filledRecordDialog",onClose:function(){return L(!1)}},e.createElement("div",{className:"recordHeader"},e.createElement(Ee.Z,{icon:"arrow_back",className:"arrowIcon",onClick:function(){return L(!1)}}),e.createElement("span",{className:"Font15 Gray_75 bold mLeft10"},_l("\u5DF2\u586B\u8BB0\u5F55"))),oe()):e.createElement(we.Z,{visible:x,type:"fixed",className:"filledRecordDialog",title:_l("\u5DF2\u586B\u8BB0\u5F55"),width:1100,showFooter:!1,onCancel:function(){return L(!1)}},oe()),O.visible&&e.createElement(zt,{rowId:O.rowId,isEdit:O.isEdit,onClose:function(){return S({visible:!1})},publicWorksheetInfo:n,onRefreshList:function(D,W){var H=w.list.map(function(z){return z.rowid===D?(0,P.default)({},z,W):z});f({list:H,count:w.count})}})):null}var Kt=o(2740),Xt=o(93967),He=o.n(Xt),kn,Nn,ee,$e,ze,qt=(0,V.Z)([`
  position: relative;
  display: inline-block;
  height: 40px;
  img {
    height: 40px;
    max-width: 100%;
    object-fit: contain;
  }
  .icon {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 18px;
    color: #bdbdbd;
  }
`],[`
  position: relative;
  display: inline-block;
  height: 40px;
  img {
    height: 40px;
    max-width: 100%;
    object-fit: contain;
  }
  .icon {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 18px;
    color: #bdbdbd;
  }
`]),_t=(0,V.Z)([`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;
`],[`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;
`]);function Ve(a,r,n,i,s){var t={};return Object.keys(i).forEach(function(c){t[c]=i[c]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=n.slice().reverse().reduce(function(c,l){return l(a,r,c)||c},t),s&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(s):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(a,r,t),t=null),t}var en=j.ZP.div(qt),tn=j.ZP.div(_t),nn=(ee=(ze=$e=function(a){(0,he.default)(r,a);function r(n){(0,fe.default)(this,r);var i=(0,pe.default)(this,(r.__proto__||de()(r)).call(this,n));return i.con=e.createRef(),i.customwidget=e.createRef(),i.cellObjs={},i.state={showError:!1,formData:n.formData},i}return(0,me.default)(r,[{key:"componentDidMount",value:function(){var i=(0,X.A_)();!this.props.isPreview&&!i.isMDClient&&(window.onbeforeunload=function(s){return s=s||window.event,s&&(s.returnValue="\u5173\u95ED\u63D0\u793A"),"\u5173\u95ED\u63D0\u793A"})}},{key:"handleSubmit",value:function(){this.setState({submitLoading:!0}),this.customwidget.current.submitFormData()}},{key:"onSave",value:function(i,s){var t=this,c=s.data,l=s.updateControlIds,d=s.handleRuleError;if(!this.issubmitting){if(i){this.setState({submitLoading:!1});return}if(this.customwidget.current){var p=this.props,g=p.publicWorksheetInfo,m=g===void 0?{}:g,I=p.onSubmit,y=m.shareId,w=m.worksheetId,f=m.needCaptcha,T=m.smsVerificationFiled,v=m.smsVerification,x=m.cacheFieldData,L=x===void 0?{}:x,C=void 0,k=function(S){if(S&&!S.ticket){t.setState({submitLoading:!1});return}t.issubmitting=!0;var Z=S?{ticket:S.ticket,randStr:S.randstr,captchaType:md.global.getCaptchaType()}:{};v&&(0,le.J)(c,T)&&(Z.verifyCode=t.customwidget.current.state.verifyCode),Tt({worksheetId:w,shareId:y,formData:c,publicWorksheetInfo:m,triggerUniqueError:function(E){t.customwidget.current&&N().isFunction(t.customwidget.current.uniqueErrorUpdate)&&t.customwidget.current.uniqueErrorUpdate(E)},setSubListUniqueError:function(E){t.customwidget.current.dataFormat.callStore("setUniqueError",{badData:E})},setRuleError:function(E){d(E,t.cellObjs)},params:Z},function(u,E){if(t.issubmitting=!1,u){t.setState({submitLoading:!1});return}if(!E){alert(_l("\u5F53\u524D\u8868\u5355\u5DF2\u8FC7\u671F"),3),t.setState({submitLoading:!1});return}var F=localStorage.getItem("publicWorksheetSubmit_"+y),B=F?F.indexOf("[")<0?[F]:safeParse(F):[];safeLocalStorageSetItem("publicWorksheetSubmit_"+m.shareId,G()([].concat((0,Ot.Z)(B),[new Date().toISOString()]))),L.isEnable&&safeLocalStorageSetItem("cacheFieldData_"+m.shareId,G()((c||[]).map(function(h){return{controlId:h.controlId,value:h.type===34?N().get(h,"value.rows")?G()(h.value.rows):void 0:h.value}}))),localStorage.removeItem("cacheDraft_"+m.shareId),window.onbeforeunload=null,t.setState({submitLoading:!1}),I()})};if(C)return alert(_l("\u8BF7\u6B63\u786E\u586B\u5199"),3),this.setState({submitLoading:!1}),!1;f?md.global.getCaptchaType()===1?(0,Me.Z)(k,function(){return k({})}):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),k).show():k()}}}},{key:"render",value:function(){var i=this,s=this.props,t=s.loading,c=s.publicWorksheetInfo,l=c===void 0?{}:c,d=s.rules,p=s.status,g=s.isPreview,m=this.state,I=m.submitLoading,y=m.formData,w=m.showError,f=l.name,T=l.desc,v=l.worksheetId,x=l.logoUrl,L=l.submitBtnName,C=l.isWorksheetQuery,k=l.smsVerificationFiled,O=l.smsVerification,S=l.appId,Z=l.projectId,u=l.linkSwitchTime,E=u===void 0?{}:u,F=l.limitWriteCount,B=F===void 0?{}:F,h=l.limitWriteTime,R=h===void 0?{}:h,Q=l.completeNumber,J=l.cacheDraft,te=l.themeBgColor,oe=(0,X.A_)(),Se=oe.header,U=oe.submit;return e.createElement(e.Fragment,null,I&&e.createElement(tn,null),e.createElement("div",{className:"infoCon"},Se!=="no"&&e.createElement(e.Fragment,null,x&&e.createElement(en,null,e.createElement("img",{className:"logo",src:x})),f&&e.createElement("div",{className:"worksheetName"},f),!!T&&e.createElement("div",{className:"mdEditor"},e.createElement(Ae.Z,{data:T||"",className:"worksheetDescription WordBreak mdEditorContent ",disabled:!0,minHeight:64}))),!g&&e.createElement(e.Fragment,null,(E.isEnable||B.isEnable||R.isEnable)&&e.createElement("div",{className:"worksheetLimitInfo",style:{borderColor:(0,se.YT)(te,.2)}},E.isEnable&&e.createElement("div",{className:"itemInfo"},e.createElement(e.Fragment,null,E.isShowCountDown?e.createElement(Kt.Z,{className:"Gray",endTime:E.endTime,beforeText:_l("\u94FE\u63A5\u5C06\u4E8E"),afterText:_l("\u540E\u622A\u6B62"),arriveText:_l("\u94FE\u63A5\u5DF2\u622A\u6B62")+";"}):e.createElement(e.Fragment,null,e.createElement("span",null,_l("\u94FE\u63A5\u5C06\u4E8E")),e.createElement("span",{className:"bold Gray mLeft5 mRight5"},K()(E.endTime).format("YYYY-MM-DD HH:mm")),e.createElement("span",null,_l("\u622A\u6B62"),";")))),B.isEnable&&e.createElement("div",{className:"itemInfo"},e.createElement("span",null,_l("\u5DF2\u6536\u96C6")),e.createElement("span",{className:"Gray mLeft5 mRight5"},_l((Q||0)+"/"+B.limitWriteCount+" ")),e.createElement("span",null,_l("\u4EFD, \u8FD8\u5269")),e.createElement("span",{className:"Gray mLeft5 mRight5"},B.limitWriteCount-(Q||0)),e.createElement("span",null,_l("\u4EFD\u7ED3\u675F\u6536\u96C6"),";")),R.isEnable&&e.createElement("div",{className:"itemInfo"},e.createElement("span",{className:"Gray"},(0,ae.WA)(Y.uK.MONTH,R)),e.createElement("span",{className:"mLeft5 mRight5"},_l("\u7684")),e.createElement("span",{className:"Gray"},(0,ae.WA)(Y.uK.DAY,R)),!!(0,ae.WA)(Y.uK.HOUR,R)&&e.createElement("span",{className:"mLeft5 mRight5"},_l("\u7684")),e.createElement("span",{className:"Gray"},(0,ae.WA)(Y.uK.HOUR,R)),e.createElement("span",{className:"mLeft5"},_l("\u53EF\u586B\u5199")))),e.createElement(Be,{isFillPage:!0,publicWorksheetInfo:l,formData:y,rules:d,status:p}))),e.createElement("div",{className:"formMain",ref:this.con,style:{padding:"0 32px"}},!t&&e.createElement(Rt.Z,{widgetStyle:l.advancedSetting,rules:d,ref:this.customwidget,data:y,appId:S,projectId:Z,from:4,worksheetId:v,isWorksheetQuery:C,smsVerificationFiled:k,smsVerification:O,showError:w,registerCell:function(W){var H=W.item,z=W.cell;return i.cellObjs[H.controlId]={item:H,cell:z}},onChange:function(W,H){J&&safeLocalStorageSetItem("cacheDraft_"+l.shareId,G()((W||[]).map(function(z){return{controlId:z.controlId,value:z.type===34?N().get(z,"value.rows")?G()(z.value.rows):void 0:z.value}}))),i.setState({formData:W})},onSave:this.onSave,onError:function(){i.setState({submitLoading:!1})}})),e.createElement("div",{className:He()("submitCon",{TxtLeft:U==="left",TxtRight:U==="right"})},e.createElement(Wt.ZP,{className:"submitBtn",disabled:!y.filter(function(D){return(0,le.kM)(D,4).visible}).length||p===b.NOT_IN_FILL_TIME||g,loading:I,style:{height:"40px",lineHeight:"40px",background:te,padding:0},onClick:this.handleSubmit},e.createElement("span",{className:"InlineBlock ellipsis w100"},L))))}}]),r}(e.Component),$e.propTypes={loading:A().bool,rules:A().arrayOf(A().shape({})),publicWorksheetInfo:A().shape({}),formData:A().arrayOf(A().shape({})),onSubmit:A().func,status:A().string},ze),Ve(ee.prototype,"handleSubmit",[Ue.Nj],Ze()(ee.prototype,"handleSubmit"),ee.prototype),Ve(ee.prototype,"onSave",[Ue.Nj],Ze()(ee.prototype,"onSave"),ee.prototype),ee),rn=(0,V.Z)([`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  padding: 100px 0 0 0;
`],[`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  padding: 100px 0 0 0;
`]),an=(0,V.Z)([`
  font-size: 24px;
  font-weight: 500;
  padding: 0 20px;
`],[`
  font-size: 24px;
  font-weight: 500;
  padding: 0 20px;
`]),on=(0,V.Z)([`
  font-size: 15px;
`],[`
  font-size: 15px;
`]),ln=(0,V.Z)([`
  word-break: break-all;
  font-size: 14px;
  color: #757575;
  text-align: left;
  padding: 0 50px;
  white-space: pre-line;
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  ol,
  ul {
    list-style-position: outside;
    list-style: decimal;
    margin-left: 16px;
  }
  img {
    max-width: 100%;
  }
`],[`
  word-break: break-all;
  font-size: 14px;
  color: #757575;
  text-align: left;
  padding: 0 50px;
  white-space: pre-line;
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  ol,
  ul {
    list-style-position: outside;
    list-style: decimal;
    margin-left: 16px;
  }
  img {
    max-width: 100%;
  }
`]),sn=j.ZP.div(rn),un=j.ZP.div(an),Ce=j.ZP.div(on),cn=j.ZP.div(ln);function dn(a,r){if(!a)return _l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u4E0D\u5B58\u5728");switch(r){case b.CLOSE:return _l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u5DF2\u505C\u6B62\u6570\u636E\u6536\u96C6\uFF01");case b.NOT_OPEN:return _l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u6682\u672A\u5F00\u653E\uFF01");case b.ONLY_WECHAT_FILL:return _l("\u6B64\u8868\u5355\u4EC5\u9650\u5728\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u4E2D\u586B\u5199");case b.NO_PROJECT_USER:return _l("\u6B64\u8868\u5355\u4EC5\u9650\u672C\u7EC4\u7EC7\u7528\u6237\u586B\u5199");case b.COMPLETED:return _l("\u63D0\u4EA4\u6210\u529F");default:return""}}var Ge=function(r){var n=r.status;return e.createElement("i",{className:"icon "+(n===b.COMPLETED?"icon-plus-interest":"icon-task-folder-message"),style:{fontSize:80,color:n===b.COMPLETED?"#4CAF50":"#FF6200"}})};Ge.propTypes={status:A().string};function Ye(a){var r=a.status,n=a.publicWorksheetInfo,i=a.onRefill,s=a.formData,t=a.rules,c=n.worksheetId,l=n.name,d=n.limitWriteFrequencySetting,p=n.receipt,g=n.linkSwitchTime,m=g===void 0?{}:g,I=n.abilityExpand,y=I===void 0?{}:I,w=n.shareId,f=ve(w,d);return e.createElement(sn,{className:"notFillStatus"},e.createElement("div",{style:{width:"100%"}},c?e.createElement(Ge,{status:r}):e.createElement("i",{className:"icon icon-closeelement-bg-circle",style:{fontSize:80,color:"#f44133"}}),c&&e.createElement(un,{className:"mTop10"},l||_l("\u672A\u547D\u540D\u8868\u5355")),e.createElement(Ce,{className:"mTop8"},dn(c,r)),r===b.NOT_OPEN&&e.createElement(Ce,{className:"mTop8"},_l("\u8868\u5355\u5C06\u4E8E")+K()(m.startTime).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm")+_l("\u5F00\u653E\u586B\u5199")),r===b.COMPLETED&&(f||!!N().get(y,"allowViewChange.isAllowViewChange"))&&e.createElement(Ce,{style:{color:"#2196F3",margin:"24px 0 32px",fontWeight:600},className:"flexRow justifyContentCenter alignItemsCenter"},e.createElement(Be,{isFillPage:!1,publicWorksheetInfo:n,formData:s,rules:t,status:r}),f&&e.createElement("span",{className:"Hand",onClick:i},_l("\u518D\u586B\u5199\u4E00\u4EFD"))),e.createElement("div",{style:{minHeight:p?"200px":"224px"}},p&&r===b.COMPLETED&&e.createElement(e.Fragment,null,e.createElement(Ne.Hr,{style:{margin:"20px 0 4px"}}),e.createElement(cn,{className:"receipt"},e.createElement(Ae.Z,{data:p||"",className:"",disabled:!0}))))))}Ye.propTypes={status:A().number,publicWorksheetInfo:A().shape({}),onRefill:A().func};var fn=o(92138),Fn=o(31277),mn=o(31929),Dn=o(52262),pn=o(65400),Tn=o(67272),hn=o(51024),Ln=o(69852),ce=o(97538),gn=void 0,vn=(0,V.Z)([`
  .ant-form {
    width: 240px;
  }
  .ant-input, .ant-btn {
    height: 36px;
    border-radius: 4px;
  }
  .ant-input:focus, .ant-input-focused {
    box-shadow: none;
  }
  .ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    background-color: #E0E0E0;
    border: none;
  }
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    border-color: #F44336;
  }
  .ant-form-item-explain-error {
    color: #F44336;
    font-size: 12px;
  }
`],[`
  .ant-form {
    width: 240px;
  }
  .ant-input, .ant-btn {
    height: 36px;
    border-radius: 4px;
  }
  .ant-input:focus, .ant-input-focused {
    box-shadow: none;
  }
  .ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    background-color: #E0E0E0;
    border: none;
  }
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    border-color: #F44336;
  }
  .ant-form-item-explain-error {
    color: #F44336;
    font-size: 12px;
  }
`]),bn=j.ZP.div(vn),In={4:_l("\u6570\u636E\u4E0D\u5B58\u5728"),7:_l("\u65E0\u6743\u9650"),8:_l("\u5206\u4EAB\u5DF2\u5173\u95ED"),14:_l("\u56FE\u5F62\u9A8C\u8BC1\u9A8C\u8BC1\u9519\u8BEF"),17:_l("\u94FE\u63A5\u5DF2\u5931\u6548"),18:_l("\u9700\u8981\u5BC6\u7801"),19:_l("\u5BC6\u7801\u9519\u8BEF")},Wn=function(r){var n=r.code;return React.createElement("div",{className:"w100 h100 flexColumn alignItemsCenter justifyContentCenter WhiteBG"},React.createElement(_Icon,{className:"mBottom20",icon:"Import-failure",style:{color:"#ddd",fontSize:70}}),React.createElement("div",{className:"Font17 Gray_9e"},In[n]))},En=function(r){var n=r.onFinish,i=r.validatorPassPromise,s=(0,e.useState)(!1),t=(0,re.Z)(s,2),c=t[0],l=t[1],d=(0,e.useState)([]),p=(0,re.Z)(d,2),g=p[0],m=p[1],I=ce.Z.useForm(),y=(0,re.Z)(I,1),w=y[0],f=N().find(g,{name:["sharePassword"]});return e.createElement(mn.default,{autoInsertSpaceInButton:!1},e.createElement(bn,{className:"w100 h100 flexColumn justifyContentCenter WhiteBG"},e.createElement("div",{className:"flexColumn alignItemsCenter",style:{marginTop:-120}},e.createElement("div",{className:"flexRow alignItemsCenter mBottom18"},e.createElement("div",{className:"Font13 mRight5"},_l("\u8BF7\u8F93\u5165\u5BC6\u7801\u8BBF\u95EE")),e.createElement("div",{className:"Font12"},_l("(\u5BC6\u7801\u533A\u5206\u5927\u5C0F\u5199)"))),e.createElement(ce.Z,{form:w,name:"shareform",validateTrigger:"submit",onFinish:function(){l(!1)},onFinishFailed:function(){l(!1)},onFieldsChange:function(v){m(v)},autoComplete:"off"},e.createElement("input",{type:"password",hidden:!0,autoComplete:"new-password"}),e.createElement(ce.Z.Item,{name:"sharePassword",rules:[{required:!0,message:_l("\u8BF7\u8F93\u5165\u5BC6\u7801\u8BBF\u95EE")},function(){return{validator:function(v,x){return new(ke())(function(){var L=(0,q.Z)(M().mark(function C(k,O){var S;return M().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:S=function(F){if(F.ret===0){l(!0);var B={randStr:F.randstr,ticket:F.ticket,captchaType:md.global.getCaptchaType()};k(i(x,B))}else O(_l("\u56FE\u5F62\u9A8C\u8BC1\u5931\u8D25"))},md.global.getCaptchaType()===1?new Me.Z(S):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),S).show();case 2:case"end":return u.stop()}},C,gn)}));return function(C,k){return L.apply(this,arguments)}}())}}}]},e.createElement(hn.default.Password,{className:"Font13",autoComplete:"off",placeholder:_l("\u8BF7\u8F93\u5165\u5BC6\u7801"),visibilityToggle:!1,size:"large"})),e.createElement(ce.Z.Item,null,e.createElement(pn.default,{className:"w100 bold",type:"primary",htmlType:"submit",loading:c,disabled:f?f.value.length<4||f.value.length>8:!0},_l("\u786E\u5B9A")))))))},Je,Qe,wn=j.ZP.div(function(a){var r=a.color;return"height: 10px; background: "+r+"; opacity: .4; border-radius: 3px 3px 0 0;"}),Cn=(Qe=Je=function(a){(0,he.default)(r,a);function r(n){(0,fe.default)(this,r);var i=(0,pe.default)(this,(r.__proto__||de()(r)).call(this,n));return i.state={loading:!0,qrurl:"",passWord:""},window.isPublicWorksheet=!N().get(window,"shareState.isPublicFormPreview"),i}return(0,me.default)(r,[{key:"componentDidMount",value:function(){var i=this,s=this.props,t=s.isPreview,c=s.worksheetId;if(t)kt(c,function(p,g){i.setState({loading:!1,status:b.NORMAL,publicWorksheetInfo:g.publicWorksheetInfo,formData:g.formData})});else{var l=location.pathname.match(/.*\/((\w{32}))/);l||alert(_l("\u5730\u5740\u6709\u8BEF\uFF0C\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u6570\u636E\uFF01"),2);var d=l[1];window.publicWorksheetShareId=d,this.shareId=d,Pe({shareId:d,langType:getCurrentLangCode()},function(p){i.setState((0,P.default)({loading:!1},p)),p.status===b.NOT_IN_FILL_TIME&&alert(_l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u6682\u672A\u5F00\u653E!"),3)})}}},{key:"render",value:function(){var i=this,s=this.props.isPreview,t=this.state,c=t.loading,l=t.publicWorksheetInfo,d=l===void 0?{}:l,p=t.formData,g=t.rules,m=t.status,I=t.qrurl,y=d.worksheetId,w=d.coverUrl,f=d.projectName,T=d.themeBgColor,v=d.writeScope,x=(0,X.A_)(),L=x.bg,C=x.footer,k=L==="no",O=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"formContent flexColumn"},!k&&e.createElement(e.Fragment,null,y&&e.createElement(Ne.e2,{top:"0",right:"-48"},e.createElement("div",{className:"qrIcon icon icon-zendeskHelp-qrcode",onMouseEnter:function(){var u=location.href;if(s)try{u=new URL(location.href).searchParams.get("url")}catch(E){console.error(E)}i.setState({qrurl:u})}},e.createElement(Fe,{url:I}))),e.createElement(wn,{color:T})),c&&e.createElement("div",{style:{padding:10}},e.createElement(ge.Z,{style:{flex:1},direction:"column",widths:["30%","40%","90%","60%"],active:!0,itemStyle:{marginBottom:"10px"}}),e.createElement(ge.Z,{style:{flex:1},direction:"column",widths:["40%","55%","100%","80%"],active:!0,itemStyle:{marginBottom:"10px"}}),e.createElement(ge.Z,{style:{flex:2},direction:"column",widths:["45%","100%","100%","100%"],active:!0,itemStyle:{marginBottom:"10px"}})),!c&&(N().includes([b.NORMAL,b.NOT_IN_FILL_TIME],m)?e.createElement(nn,{rules:g,isPreview:s,loading:c,publicWorksheetInfo:d,formData:p,status:m,onSubmit:function(){i.setState({status:b.COMPLETED})}}):e.createElement(Ye,{publicWorksheetInfo:d,status:m,onRefill:(0,q.Z)(M().mark(function Z(){var u;return M().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,Re(d,b.NORMAL);case 2:u=F.sent,i.setState({status:b.NORMAL,formData:u,publicWorksheetInfo:(0,P.default)({},d,{completeNumber:d.completeNumber+1})}),$(".nano").nanoScroller({scrollTop:0});case 5:case"end":return F.stop()}},Z,i)})),formData:p,rules:g}))))};return e.createElement("div",{className:He()("publicWorksheet",{hideBg:k}),style:{backgroundColor:k?"#f7f7f7":T?(0,fn.generate)(T)[0]:void 0}},!c&&e.createElement(tt(),{title:m!==b.NEED_FILL_PASSWORD?y?d.name||_l("\u516C\u5F00\u8868\u5355"):_l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u4E0D\u5B58\u5728"):_l("\u586B\u5199\u5BC6\u7801")}),!c&&m===b.NEED_FILL_PASSWORD?e.createElement(En,{validatorPassPromise:function(Z,u){return new(ke())(function(){var E=(0,q.Z)(M().mark(function F(B,h){var R;return M().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:Z?(R=(0,P.default)({shareId:i.shareId,passWord:Z},u),Pe(R,function(te){te?(i.setState((0,P.default)({loading:!1},te)),te.status===b.NOT_IN_FILL_TIME&&alert(_l("\u4F60\u8BBF\u95EE\u7684\u8868\u5355\u6682\u672A\u5F00\u653E!"),3),B(data)):h()})):h();case 1:case"end":return J.stop()}},F,i)}));return function(F,B){return E.apply(this,arguments)}}())}}):e.createElement(xe.Z,{className:"flex"},k?O():e.createElement(nt.Z,{coverUrl:w,theme:T,isDisplayAvatar:!s&&v!==1&&!c},O())))}}]),r}(e.Component),Je.propTypes={isPreview:A().bool,worksheetId:A().string},Qe),Sn=function(a){(0,he.default)(r,a);function r(n){return(0,fe.default)(this,r),(0,pe.default)(this,(r.__proto__||de()(r)).call(this,n))}return(0,me.default)(r,[{key:"render",value:function(){var i=this.props.match.params.worksheetId;return e.createElement(Cn,{worksheetId:i,isPreview:!0})}}]),r}(e.Component)}}]);
