(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[1050],{16960:g=>{g.exports=`<div class="shareAttachmentDialogContainer">
    <div class="filePreview">
        <div class="fileIcon hide">
            <span class="fileSize"></span>
        </div>
        <div class="thumbnailCon hide">
            <div class="thumbnail">
            </div>
        </div>
    </div>
    <div class="dList">
        <div class="dItem">
            <div class="itemLabel">
                {{=_l('\u540D\u79F0')}}
            </div>
            <div class="itemContent">
                <input type="text" id="fileName" class="ming Input" placeholder="{{=_l('\u540D\u79F0')}}" />
                <span class="fileNameText ellipsis hide"></span>
            </div>
        </div>
        {{? it.showChangeDownload}}
        <div class="dItem">
            <div class="itemLabel">
                {{=_l('\u5141\u8BB8\u4E0B\u8F7D')}}
            </div>
            <div class="itemContent">
                <div class="downloadableCon">
                    <div class="switchBtnCon">
                        <input id="canDownload" type="checkbox" checked></input>
                        <label class="switchBtn" for="canDownload"></label>
                    </div>
                    <span class="canDownloadTip" data-tip="{{=_l('\u53EF\u5728\u6B64\u914D\u7F6E\u5206\u4EAB\u540E\u7684\u6587\u4EF6\u662F\u5426\u5141\u8BB8\u7528\u6237\u4E0B\u8F7D\uFF08\u5206\u4EAB\u5230\u201C\u6D88\u606F\u201D\u7684\u5C06\u81EA\u52A8\u8BBE\u4E3A\u53EF\u4E0B\u8F7D\uFF09')}}">
                        <i class="icon icon-novice-circle ThemeHoverColor3 Hand"></i>
                    </span>
                </div>
            </div>
        </div>
        {{?}}
        {{? it.showChangeShare}}
        <div class="dItem changeShare hide">
            <div class="itemLabel">
                {{=_l('\u5206\u4EAB\u94FE\u63A5')}}
            </div>
            <div class="itemContent">
                <div class="selectSharePermission">
                    <div class="preventCover"></div>
                    <input type="hidden" id="selectSharePermission" />
                    <span class="InlineBlock w100" id="selectSharePermissionBox"></span>
                </div>
                <div class="copyLinkCon hide">
                    <span class="copyLinkHover">
                        <i class="icon icon-link"></i>
                        {{=_l('\u590D\u5236\u94FE\u63A5')}}
                    </span>
                    <div class="copyLinkContent">
                        <input type="text" id="linkContent" readonly="readonly" class="ming Input"
                            onclick="this.select();">
                        <span class="copyLinkBtn ThemeBGColor3" id="copyLinkBtn">
                            {{=_l('\u590D\u5236\u94FE\u63A5')}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="dItem closedTip hide">
            <div class="itemLabel"></div>
            <div class="itemContent">
                {{=_l('\u94FE\u63A5\u5DF2\u5173\u95ED\uFF0C\u5F00\u542F\u540E\u53EF\u8FDB\u884C\u5171\u4EAB')}}
            </div>
        </div>
        {{?}}
        <div class="selectTargetCon dItem hide">
            <div class="itemLabel"></div>
            <div class="itemContent">
                <div class="selectTargetBtnList">
                    <span class="prev icon icon-arrow-left-border ThemeHoverColor3 Hand"></span>
                    <span class="next icon icon-arrow-right-border ThemeHoverColor3 Hand"></span>
                    <div class="listBox overfllowHidden">
                        <div class="listCon">
                            <div class="targetBtn chat" data-type="{{! it.SEND_TO_TYPE.CHAT.toString()}}">
                                <span class="icon icon-to-chat-circle">
                                </span>
                                <p>{{=_l('\u53D1\u6D88\u606F')}}</p>
                            </div>
                            {{? !md.global.SysSettings.forbidSuites.includes('1')}}
                                <div class="targetBtn feed" data-type="{{! it.SEND_TO_TYPE.FEED}}">
                                    <span class="icon icon-to-feed-circle"></span>
                                    <p>{{=_l('\u53D1\u52A8\u6001')}}</p>
                                </div>
                            {{?}}
                            {{? !md.global.SysSettings.forbidSuites.includes('2')}}
                                <div class="targetBtn task" data-type="{{! it.SEND_TO_TYPE.TASK}}">
                                    <span class="icon icon-to-task-circle"></span>
                                    <p>{{=_l('\u53D1\u4EFB\u52A1')}}</p>
                                </div>
                            {{?}}
                            {{? !md.global.SysSettings.forbidSuites.includes('3')}}
                                <div class="targetBtn calendar" data-type="{{! it.SEND_TO_TYPE.CALENDAR}}">
                                    <span class="icon icon-calendar"></span>
                                    <p>{{=_l('\u53D1\u65E5\u7A0B')}}</p>
                                </div>
                            {{?}}
                            {{? !md.global.SysSettings.forbidSuites.includes('4')}}
                                <div class="targetBtn kc" data-type="{{! it.SEND_TO_TYPE.KC}}">
                                    <span class="icon icon-to-kc-circle"></span>
                                    <p>{{=_l('\u5B58\u5165\u77E5\u8BC6')}}</p>
                                </div>
                            {{?}}
                            <div class="targetBtn qr" data-type="{{! it.SEND_TO_TYPE.QR}}">
                                <span class="icon icon-invite-qrcode"></span>
                                <p>{{=_l('\u4E8C\u7EF4\u7801')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sendToOther hide">
            <div class="dItem">
                <div class="itemLabel">
                    {{=_l('\u5206\u4EAB\u5230')}}
                </div>
                <div class="itemContent">
                    <div class="sendToTarget">
                        <input type="hidden" id="sendToTarget" />
                        <span class="InlineBlock w100" id="sendToTargetBox"></span>
                    </div>
                    <div class="sendToContent InlineBlock">
                        <input type="hidden" id="selectSendTo">
                    </div>
                </div>
            </div>
            <div class="dItem">
                <div class="itemLabel"></div>
                <div class="itemContent addDescBtn">
                    {{=_l('\u6DFB\u52A0\u8BF4\u660E')}}
                </div>
            </div>
            <div class="dItem descCon hide">
                <div class="itemLabel">
                    {{=_l('\u6DFB\u52A0\u8BF4\u660E')}}
                </div>
                <div class="itemContent">
                    <textarea name="" id="shareDesc" class="ming Input" cols="30" rows="10"
                        placeholder="{{=_l('\u6DFB\u52A0\u6587\u4EF6\u8BF4\u660E')}}"></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="shareAttachmentFooter hide">
        <a href="javascript:void(0);" class="no ThemeHoverColor3">{{=_l('\u53D6\u6D88')}}</a>
        <a href="javascript:void(0);" class="yes boderRadAll_3 ThemeBGColor3 ">{{=_l('\u5206\u4EAB')}}</a>
    </div>
</div>
`},78250:g=>{g.exports=`<div class="mobileShareDialog">
    <div class="urlQrCode">
        <span class="clipLoader ThemeColor8"></span>
    </div>
    <div class="tip">
        {{! it.targetText + '\uFF0C' + it.tip }}
    </div>
    <div class="fileName ellipsis">
        {{! it.fileName}}
    </div>
    {{? it.attachmentType === 2 }}
    <div class="deadline">
        {{=_l('\u4E0B\u8F7D\u94FE\u63A5\u6709\u6548\u671F%0\u5C0F\u65F6', 48)}}
    </div>
    {{?}}
</div>
`},96934:g=>{g.exports=`<div class="searchListCon">
    <input type="text" class="searchInput ming Input" placeholder="{{!it.placeholderStr}}">
    <div class="selected ellipsis">
        \u8BF7\u9009\u62E9
    </div>
    <div class="listPanel">
        <div class="searchList">
            <p class="listTip">\u52A0\u8F7D\u4E2D...</p>
        </div>
        <div class="footerBtn">
            <i class="icon icon-addapplication ThemeColor3"></i>
            <spna class="footerStr ThemeColor3">
                {{! it.footerStr}}
            </spna>
        </div>
    </div>
</div>
`},66239:g=>{g.exports=`{{? it.isLoading}}
    <p class="listTip">\u52A0\u8F7D\u4E2D...</p>
{{?? it.list.length === 0}}
    <p class="listTip">\u65E0\u641C\u7D22\u7ED3\u679C</p>
{{??}}
    {{~it.list :item:index}}
        <div class="ThemeBGColor3">
            <div class="listItem" data-key="{{! index.toString()}}">
                {{? item.headUrl}}
                    <img src="{{! item.headUrl}}" alt="">
                {{?}}
                <span class="itemName ellipsis">{{! item.value}}</span>
            </div>
        </div>
    {{~}}
{{?}}
`},51050:(g,x,r)=>{"use strict";r.r(x),r.d(x,{default:()=>De});var V=r(63239),D=r.n(V),F=r(43727),G=r(52945),O=r.n(G),b=r(70801),W=r(15577),Y=r(20640),j=r.n(Y),J=r(38197),A=r.n(J),X=r(16960),q=r.n(X),_=r(96934),ee=r.n(_),te=r(66239),ne=r.n(te),ae=r(1935),ie=r(70794),oe=r(63743),N=r(48446),R=r(45231),C=r(67460),le=r(537),k=r(98306),se=r(46593),T=r.n(se),re=r(96213),de=r(65406),ce=r(75809);function he(o){return new(T())(function(e,t){re.Z.getMyTaskList(o).then(function(n){if(!n.status)t(_l("\u83B7\u53D6\u6570\u636E\u5931\u8D25"));else{var a=n.data;e(a)}}).catch(function(n){t(n)})})}function pe(o){return new(T())(function(e,t){C.Z.getChatList(o).then(function(n){e(n)}).catch(function(n){t(_l("\u83B7\u53D6\u6570\u636E\u5931\u8D25"))})})}function fe(o){return new(T())(function(e,t){if(o.qiniuUrl&&o.qiniuUrl.indexOf(md.global.FileStoreConfig.pictureHost)>-1){e({data:o.qiniuUrl});return}C.Z.convertToOtherAttachment(o).then(function(n){e({data:n})}).catch(function(n){t(_l("\u83B7\u53D6\u6570\u636E\u5931\u8D25"))})})}function me(){return new(T())(function(o,e){$.CreateTask({relationCallback:function(n){o({taskID:n.taskID,taskName:n.taskName})}})})}function ve(){return new(T())(function(o,e){(0,ce.Z)({sourceId:0,fromType:0,showMoreInvite:!1,SelectUserSettings:{filterAccountIds:[md.global.Account.accountId],callback:function(n){n.length>1?de.Z.addDiscussionGroup({accountIds:n.map(function(a){return a.accountId})}).then(function(a){o({type:2,logo:a.avatar,name:a.name,value:a.groupId})}).catch(function(){e(_l("\u521B\u5EFA\u65B0\u804A\u5929\u5931\u8D25"))}):o({type:1,logo:n[0].avatar,name:n[0].fullname,value:n[0].accountId})}}})})}var i={QINIU:0,COMMON:1,KC:2,WORKSHEET:3,WORKSHEETROW:4},f={CLOSE:1,PROJECT:2,MDUSER:3,PUBLIC:4},S={CLOSE:1,ALL:2},d={CHAT:0,FEED:1,TASK:2,CALENDAR:4,KC:5,QR:7},w={ALL:-1,TASK:1,CALENDAR:2,POST:3,VOTE:4,KCFILE:5,KCFOLDER:6,WORKSHEET:7,WORKSHEETROW:8,LINK:100},ue=r(42506),ge=r(12424),Te=r(78250),Se=r.n(Te),P=r(17563),Ce=r(96486),L=r.n(Ce),Ee=A().template(Se()),U=function(e){var t={sendToType:1,attachmentType:1,file:{}};this.options=L().assign({},t,e),this.openDialog()};U.prototype={getTip:function(e){switch(e){case i.COMMON:return _l("\u53D1\u9001\u6587\u4EF6\u526F\u672C");case i.KC:return _l("\u53D1\u9001\u6587\u4EF6\u5206\u4EAB\u94FE\u63A5");case i.WORKSHEET:return _l("\u53D1\u9001\u5DE5\u4F5C\u8868\u5206\u4EAB\u94FE\u63A5");case i.WORKSHEETROW:return _l("\u53D1\u9001\u5DE5\u4F5C\u8868\u8BB0\u5F55\u5206\u4EAB\u94FE\u63A5");default:return""}},getTargetText:function(e){switch(e){case 3:return _l("\u5FAE\u4FE1\u626B\u7801");case 6:return _l("\u624B\u673AQQ\u626B\u7801");default:return _l("\u626B\u63CF\u4E8C\u7EF4\u7801")}},openDialog:function(){var e=this,t=e.options;b.Z.confirm({dialogClasses:"sendToMobile",width:540,title:_l("\u5206\u4EAB"),children:React.createElement("div",{dangerouslySetInnerHTML:{__html:Ee({tip:e.getTip(t.attachmentType),targetText:e.getTargetText(t.sendToType),attachmentType:t.attachmentType,fileName:t.file.fullName})}}),noFooter:!0}),e.$dialog=$(".sendToMobile"),e.$QRCode=e.$dialog.find(".urlQrCode"),this.renderQR()},renderQR:function(){var e=this,t=e.options,n=t.attachmentType,a,l;switch(n){case i.COMMON:l=k.Z.getShareLocalAttachmentUrl({fileID:t.file.fileID});break;case i.KC:l=t.file.shareUrl;break;case i.QINIU:l=e.genQiniuFileShareUrl();break;case i.WORKSHEET:case i.WORKSHEETROW:l=t.file.shareUrl;break;default:break}T().all([l]).then(function(s){var c=(0,ge.Z)(s,1),h=c[0],p=e.getQRCodeLink(h);a=e.getImg(p,function(){e.$QRCode.empty().append($('<p class="loadError">\u52A0\u8F7D\u4E8C\u7EF4\u7801\u5931\u8D25</p>'))}),e.$QRCode.empty().append(a)}).catch(function(){e.$QRCode.empty().append($('<p class="loadError">\u52A0\u8F7D\u4E8C\u7EF4\u7801\u5931\u8D25</p>'))})},genQiniuFileShareUrl:function(){var e=this,t=e.options,n=t.file;return new(T())(function(a,l){k.Z.getShareLocalAttachmentUrl({filePath:t.file.qiniuPath,hours:48}).then(function(s){var c=P.parse(s.slice(s.indexOf("?")+1));s=s.slice(0,s.indexOf("?")>0?s.indexOf("?"):void 0);var h=P.stringify({qiniuPath:s,qiniutoken:c.token,e:c.e,name:n.name,ext:n.ext,size:n.size,genTime:new Date().getTime()});k.Z.getShortUrl({url:escape(md.global.Config.WebUrl+"apps/kc/shareLocalAttachment.aspx?"+h)}).then(function(p){a(p.shortUrl||p)})})})},getQRCodeLink:function(e){return md.global.Config.AjaxApiUrl+"code/CreateQrCodeImage?url="+encodeURIComponent(e)},getImg:function(e,t){var n=document.createElement("img");return n.setAttribute("src",e),n.addEventListener("error",function(){t&&t()},!1),n}};function ye(o){return new U(o)}var K=r(67294),H=r(73935),Ie=A().template(q()),$e=A().template(ee()),B=A().template(ne()),M=function(e,t){this.options=e,this.callback=t,this.options.type===d.TASK?(this.fetch=he,this.formatTpl={value:"taskName"},this.create=me,this.defaultStr={footerStr:_l("\u521B\u5EFA\u65B0\u4EFB\u52A1"),placeholderStr:_l("\u641C\u7D22\u4EFB\u52A1")}):this.options.type===d.CHAT&&(this.fetch=pe,this.formatTpl={value:"name",headUrl:"logo"},this.create=ve,this.defaultStr={footerStr:_l("\u521B\u5EFA\u65B0\u804A\u5929"),placeholderStr:_l("\u641C\u7D22\u804A\u5929")}),this.init()};M.prototype={init:function(){var e=this,t=e.options,n=$(t.el),a=$($e(this.defaultStr));n.after(a),e.elements={},e.elements.$searchListCon=a.find(".searchListCon"),e.elements.$searchInput=a.find(".searchInput"),e.elements.$selected=a.find(".selected"),e.elements.$listPanel=a.find(".listPanel"),e.elements.$searchList=a.find(".searchList"),e.elements.$footerBtn=a.find(".footerBtn"),e.bindEvent()},bindEvent:function(){var e=this;$(document).on("click.hideShareAttSearchList",function(t){$(t.target).closest(".searchListCon").length||e.hideList(),t.stopPropagation()}),e.elements.$searchInput.on("keyup",function(t){var n=L().trim($(this).val());t.keyCode===37||t.keyCode===38||t.keyCode===39||t.keyCode===40||e.keywordsCache===n||(e.keywordsCache=n,e.fetchList())}),e.elements.$selected.on("click",function(t){e.elements.$listPanel.show(0,0,function(){e.defaultListData||e.fetchList(!0)}),e.elements.$searchInput.show().focus(),e.elements.$selected.hide(),t.stopPropagation()}),e.elements.$searchList.on("click",".listItem",function(t){t.stopPropagation();var n=$(this),a=n.data("key");e.select(a)}),e.elements.$searchList.on("wheel",function(t){t=t.originalEvent;var n=t.currentTarget,a=n.clientHeight,l=n.scrollTop,s=n.scrollHeight,c=t.deltaY<0&&l===0,h=t.deltaY>0&&a+l>=s;(c||h)&&t.preventDefault()}),e.elements.$footerBtn.on("click",function(){e.create().then(function(t){e.listData=[t],e.listTplData=e.formatDataTplData([t]),e.defaultListData=void 0,e.select(0)}).catch(function(t){alert(_l("\u521B\u5EFA\u5931\u8D25"),2)})})},fetchList:function(e){var t=this;t.elements.$searchList.html(B({isLoading:!0})),t.fetch({keywords:L().trim(t.elements.$searchInput.val()),size:20,projectId:t.options.type===d.CHAT?void 0:"all"}).then(function(n){e&&(t.defaultListData=n),t.listData=n,t.listTplData=t.formatDataTplData(n),t.renderList()}).catch(function(n){alert(_l("\u83B7\u53D6\u6570\u636E\u5931\u8D25"),2)})},renderList:function(){var e=this;e.elements.$searchList.html(B({list:e.listTplData}))},select:function(e){var t=this,n,a=t.listTplData[e];t.selectedData=t.listData[e],t.callback&&t.callback(t.selectedData),a.headUrl?n='<img src="'+a.headUrl+'">'+a.value:n=a.value,t.elements.$selected.html(n),t.hideList()},formatDataTplData:function(e){var t=this,n=t.formatTpl;return e.map(function(a){var l={};return n.value&&(l.value=a[n.value]),n.headUrl&&(l.headUrl=a[n.headUrl]),l})},hideList:function(){var e=this;e.elements.$listPanel.hide(),e.elements.$searchInput.hide(),e.elements.$selected.show()}};var Q=function(e,t){this.options=L().assign({},{sendToTargetType:d.CHAT,isKcFolder:!1},e),this.callbacks=t||{},this.file={ext:e.ext[0]==="."?e.ext.slice(1):e.ext,name:e.name,size:e.size,imgSrc:e.imgSrc},this.init()};Q.prototype={init:function(){var e=this,t=e.options,n=Ie({showChangeDownload:!(File.isPicture(e.options.ext)||e.options.attachmentType===i.KC||e.options.attachmentType===i.WORKSHEET||e.options.attachmentType===i.WORKSHEETROW),showChangeShare:e.options.attachmentType===i.KC||e.options.attachmentType===i.WORKSHEET||e.options.attachmentType===i.WORKSHEETROW,SEND_TO_TYPE:d,attachmentType:e.options.attachmentType}),a="shareAttachmentDialog";b.Z.confirm({dialogClasses:a+" shareAttachmentDialog darkHeader",width:540,title:e.options.dialogTitle||_l("\u5206\u4EAB"),children:K.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),noFooter:!0}),e.$dialog=$("."+a),e.dialogEle={},e.dialogEle.$fileName=e.$dialog.find("#fileName"),e.dialogEle.$fileNameText=e.$dialog.find(".fileNameText"),e.dialogEle.$canDownloadSwitch=e.$dialog.find("#canDownload"),t.attachmentType===i.KC||t.attachmentType===i.WORKSHEET||t.attachmentType===i.WORKSHEETROW?(e.dialogEle.$fileName.hide(),e.dialogEle.$fileNameText.text(e.file.name).removeClass("hide")):e.dialogEle.$fileName.val(e.file.name),t.attachmentType===i.WORKSHEET&&e.$dialog.find(".shareAttachmentDialogContainer").addClass("isWorksheet"),t.attachmentType===i.WORKSHEETROW&&e.$dialog.find(".shareAttachmentDialogContainer").addClass("isWorksheetRow"),e.bindEvent(),e.previewFile(),t.attachmentType===i.KC&&t.node?e.initModules():e.fetchBaseData(e.initModules.bind(e))},bindEvent:function(){var e=this;e.$dialog.on("change","#fileName",function(){e.newFileName=$(this).val()}),e.$dialog.on("click",".shareAttachmentFooter .yes",function(){e.share()}),e.$dialog.on("click",".shareAttachmentFooter .no",function(){$(".shareAttachmentDialog")[0]&&$(".shareAttachmentDialog").parent().remove()}),e.$dialog.on("click",".addDescBtn",function(){e.$dialog.find(".addDescBtn").hide(),e.$dialog.find(".descCon").removeClass("hide"),$("#shareDesc").focus()})},checkClose:function(e){var t=this,n=t.options,a=e||n.node.visibleType;return n.attachmentType===i.KC?a===f.CLOSE:n.attachmentType===i.WORKSHEET||n.attachmentType===i.WORKSHEETROW?a===S.CLOSE:!0},initModules:function(){var e=this,t=e.options;t.attachmentType===i.KC||t.attachmentType===i.WORKSHEET||t.attachmentType===i.WORKSHEETROW?(e.initSelectPermission(),this.checkClose()||e.initSelectTargetList()):e.initSelectTargetList()},updateWorkshhetShareUrl:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,t=arguments[1],n=this,a={worksheetId:n.options.id,appId:n.options.appId,viewId:n.options.viewId,objectType:1};e===2&&(a.objectType=2,a.rowId=n.options.rowId),R.Z.getWorksheetShareUrl(a).then(function(l){n.options.node=O()({},n.options.node,{shareUrl:l}),t()})},fetchBaseData:function(e){var t=this;switch(t.options.attachmentType){case i.COMMON:k.Z.shareAttachmentByPost({fileId:t.options.id}).then(function(n){t.options.node=n,e&&typeof e=="function"&&e(n)}).catch(function(n){console.log(n)});break;case i.KC:N.Z.getNodeDetail({id:t.options.id}).then(function(n){if(!n){alert(_l("\u60A8\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u5206\u4EAB\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u6216\u6587\u4EF6\u4E0A\u4F20\u8005"),3);return}t.options.node=n,e&&typeof e=="function"&&e(n)});break;case i.QINIU:fe({qiniuUrl:t.options.qiniuPath}).then(function(n){t.options.priviteBucketUrl=n.data,t.options.node=t.formatQiniuPath(n.data),e&&typeof e=="function"&&e(n)}).catch(function(n){console.log(n)});break;case i.WORKSHEET:t.options.node=O()({},t.options.node,{visibleType:t.options.shareRange}),t.options.shareRange===S.CLOSE&&t.options.canChangeSharable?(t.options.node.visibleType=S.ALL,t.updateShareType(S.ALL,function(){alert(_l("\u5F00\u542F\u5206\u4EAB"),4),t.updateWorkshhetShareUrl(1,e)})):t.updateWorkshhetShareUrl(1,e);break;case i.WORKSHEETROW:t.options.node=O()({},t.options.node,{canChangeSharable:t.options.canChangeSharable,visibleType:t.options.visibleType}),t.options.visibleType===S.CLOSE?(t.options.node.visibleType=S.ALL,t.updateShareType(S.ALL,function(){alert(_l("\u5F00\u542F\u5206\u4EAB"),4),t.updateWorkshhetShareUrl(2,e)})):t.updateWorkshhetShareUrl(2,e);break;default:break}},initSendToTarget:function(){var e=this,t;e.options.attachmentType===i.WORKSHEET?t=[{value:d.CHAT,text:_l("\u6D88\u606F")}]:e.options.attachmentType===i.WORKSHEETROW?t=[{value:d.CHAT,text:_l("\u6D88\u606F")}]:t=[{value:d.CHAT,text:_l("\u6D88\u606F")},{value:d.FEED,text:_l("\u52A8\u6001")},{value:d.TASK,text:_l("\u4EFB\u52A1")},{value:d.CALENDAR,text:_l("\u65E5\u7A0B")},{value:d.KC,text:_l("\u77E5\u8BC6")}],H.render(K.createElement(F.Z,{className:"sendToTargetDropdown w100",data:t,defaultValue:e.sendToTargetType,isAppendToBody:!0,menuStyle:{width:110},onChange:function(a){e.activeSendToOther(parseInt(a,10))}}),document.getElementById("sendToTargetBox"))},initSelectTargetList:function(){var e=this,t=10,n=86,a=4,l=e.$dialog.find(".selectTargetBtnList"),s=l.find(".listCon"),c=l.find(".prev"),h=l.find(".next");e.$dialog.find(".selectTargetCon").addClass("inited").removeClass("hide"),s.width(s.find(".targetBtn").length*n),p(),l.on("click",".prev, .next",function(){t+=n*a*($(this).hasClass("prev")?1:-1),p(),s.animate({left:t})}),l.on("click",".targetBtn",function(){var u=$(this).data("type");e.activeSendToOther(u)});function p(){l.find(".prev, .next").hide(),t<0&&l.find(".prev").show(),-1*t+n*a<=s.find(".targetBtn").length*n&&l.find(".next").show()}},initSelectPermission:function(){var e=this,t=e.$dialog.find(".changeShare"),n=e.$dialog.find(".closedTip"),a=e.$dialog.find("#linkContent"),l=e.options.rootInfo||e.options.node.rootInfo||{},s=_l("\u5141\u8BB8\u6240\u6709\u8054\u7CFB\u4EBA\u67E5\u770B"),c;t.removeClass("hide"),a.val(e.options.node.shareUrl),e.options.node.visibleType!==f.CLOSE?e.initCopyLinkBtn():n.removeClass("hide"),l.project?s=_l("%0 \u6210\u5458\u53EF\u9884\u89C8",l.project.companyDisplayName):l.owner&&(s=_l("%0 \u7684\u8054\u7CFB\u4EBA\u53EF\u9884\u89C8",l.owner.fullname)),e.options.attachmentType===i.KC?c=e.options.node.type===1?[{value:f.CLOSE,text:_l("\u5173\u95ED\u6587\u4EF6\u5939\u5206\u4EAB")},{value:f.PUBLIC,text:_l("\u5141\u8BB8\u4EFB\u4F55\u4EBA\u67E5\u770B")}]:[{value:f.CLOSE,text:_l("\u5173\u95ED\u6587\u4EF6\u5206\u4EAB")},{value:f.PROJECT,text:s},{value:f.PUBLIC,text:_l("\u5141\u8BB8\u4EFB\u4F55\u4EBA\u67E5\u770B")}]:(e.options.attachmentType===i.WORKSHEET||e.options.attachmentType===i.WORKSHEETROW)&&(c=[{value:1,text:_l("\u5173\u95ED\u5206\u4EAB")},{value:2,text:_l("\u5141\u8BB8\u4EFB\u4F55\u4EBA\u67E5\u770B")}]),H.render(K.createElement(F.Z,{className:"selectSharePermissionDropdown w100",data:c,defaultValue:e.options.node.visibleType,isAppendToBody:!0,menuStyle:{width:170},onChange:function(p){e.updateShareType(p,function(u){var y=e.$dialog.find(".selectTargetCon"),I=e.$dialog.find(".copyLinkCon"),E=e.$dialog.find(".sendToOther"),m=e.$dialog.find(".shareAttachmentFooter"),v=y.hasClass("inited"),Z=E.hasClass("inited");e.options.node.visibleType=u;function z(){Z?(E.removeClass("hide"),m.removeClass("hide")):v?y.removeClass("hide"):e.options.attachmentType===i.WORKSHEETROW?e.activeSendToOther(d.CHAT):e.initSelectTargetList(),I.hasClass("inited")?I.removeClass("hide"):e.initCopyLinkBtn(),n.addClass("hide")}e.checkClose(u)?(Z?(E.addClass("hide"),m.addClass("hide")):y.addClass("hide"),e.$dialog.find(".copyLinkCon").addClass("hide"),n.removeClass("hide")):e.options.attachmentType===i.WORKSHEET?(I.removeClass("inited"),e.updateWorkshhetShareUrl(1,z)):z()})}}),document.getElementById("selectSharePermissionBox")),e.options.node.canChangeSharable||e.$dialog.find(".selectSharePermission").addClass("noPermission").on("click",function(h){alert(_l("\u65E0\u6743\u4FEE\u6539\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),3)})},updateShareType:function(e,t){var n=this,a=void 0;switch(n.options.attachmentType){case i.KC:a=n.updateVisibleType.bind(n);break;case i.WORKSHEET:a=n.updateWorkSheetVisibleType.bind(n);break;case i.WORKSHEETROW:a=n.updateWorksheetRowShareRange.bind(n);break;default:a=function(){}}a(e,t)},initCopyLinkBtn:function(){var e=this;e.$dialog.find("#linkContent").val(e.options.node.shareUrl),e.$dialog.find(".copyLinkCon").removeClass("hide").addClass("inited"),e.$dialog.find("#copyLinkBtn").off().on("click",function(){j()(e.options.node.shareUrl),alert(_l("\u5DF2\u7ECF\u590D\u5236\u5230\u7C98\u8D34\u677F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528Ctrl+V \u8D34\u5230\u9700\u8981\u7684\u5730\u65B9"))})},initSelectSendTo:function(e,t){var n=this;window.selectSendTo=new M({el:"#selectSendTo",type:e},t)},activeSendToOther:function(e){var t=this,n=t.$dialog.find(".sendToOther"),a=t.$dialog.find(".sendToContent");t.sendToTargetType=e,t.options.node.allowDown=!0;var l;switch(t.$dialog.find("#shareDesc").is(":visible")&&(l=t.$dialog.find("#shareDesc").val().trim()),delete t.selectedChat,delete t.selectedTask,[d.FEED,d.CALENDAR].indexOf(e)<0&&t.initSendToTarget(),t.options.attachmentType!==i.KC&&t.dialogEle.$canDownloadSwitch.length&&(t.options.node.allowDown=t.dialogEle.$canDownloadSwitch.prop("checked")),t.dialogEle.$canDownloadSwitch.attr("disabled",!1),e){case d.CHAT:{t.dialogEle.$canDownloadSwitch.attr("disabled",!0),t.dialogEle.$canDownloadSwitch.prop("checked")===!1&&(alert(_l("\u5206\u4EAB\u5230\u6D88\u606F\u6587\u4EF6\u4E0D\u53EF\u8BBE\u4E3A\u4E0D\u5141\u8BB8\u4E0B\u8F7D\uFF0C\u5DF2\u66F4\u6539\u4E3A\u5141\u8BB8\u4E0B\u8F7D"),4),t.dialogEle.$canDownloadSwitch.prop("checked",!0)),t.showFooter(),n.addClass("inited").removeClass("hide"),a.empty().append($('<input type="hidden" id="selectSendTo">')),a.show(),t.$dialog.find(".selectTargetCon").addClass("hide"),t.initSelectSendTo(d.CHAT,function(h){t.selectedChat=h});break}case d.FEED:{a.empty();var s={callback:function(p){$(".shareAttachmentDialog")[0]&&$(".shareAttachmentDialog").parent().remove()}};t.options.attachmentType===i.COMMON?(t.newFileName&&(t.options.node.originalFileName=t.newFileName),s.defaultAttachmentData=[t.options.node]):t.options.attachmentType===i.KC?s.defaultKcAttachmentData=[t.options.node]:t.options.attachmentType===i.QINIU&&(t.options.node.originalFileName=t.options.name,t.options.node.fileSize=t.options.size,t.newFileName&&(t.options.node.originalFileName=t.newFileName),s.defaultAttachmentData=[t.options.node]),l&&(s.postMsg=l),(0,ae.Z)(s);break}case d.TASK:{t.showFooter(),n.addClass("inited").removeClass("hide"),a.empty().append($('<input type="hidden" id="selectSendTo">')),a.show(),t.$dialog.find(".selectTargetCon").addClass("hide"),t.initSelectSendTo(d.TASK,function(h){t.selectedTask=h}),console.log("TASK");break}case d.QR:{t.sendToMobile(e),console.log("QR");break}case d.CALENDAR:{a.empty();var c={callback:function(p){p&&$(".shareAttachmentDialog")[0]&&$(".shareAttachmentDialog").parent().remove()}};t.options.attachmentType===i.COMMON?(t.newFileName&&(t.options.node.originalFileName=t.newFileName),c.defaultAttachmentData=[t.options.node]):t.options.attachmentType===i.KC?c.defaultKcAttachmentData=[t.options.node]:t.options.attachmentType===i.QINIU&&(t.options.node.originalFileName=t.options.name,t.options.node.fileSize=t.options.size,t.newFileName&&(t.options.node.originalFileName=t.newFileName),c.defaultAttachmentData=[t.options.node]),l&&(c.Message=l),(0,ie.Z)(c);break}case d.KC:{if(t.options.attachmentType===i.KC&&!t.options.node.canDownload){alert(_l("\u60A8\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u4E0B\u8F7D\u6216\u4FDD\u5B58\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u6216\u6587\u4EF6\u4E0A\u4F20\u8005"),3);return}t.showFooter(),n.addClass("inited").removeClass("hide"),a.empty(),t.$dialog.find(".selectTargetCon").addClass("hide"),a.html('<span class="kcPath ThemeColor3">'+_l("\u8BF7\u9009\u62E9\u6587\u4EF6\u5939")+"</span>"),a.on("click",".kcPath",function(){t.selectKcPath(function(h,p){t.kcPath=h,a.html('<span class="kcPath ThemeColor3">'+p+"</span>")})}),a.find(".kcPath").trigger("click");break}default:break}},showFooter:function(){var e=this,t=e.$dialog.find(".shareAttachmentFooter");t.removeClass("hide")},selectKcPath:function(e){(0,ue.default)({dialogTitle:_l("\u9009\u62E9\u8DEF\u5F84"),isFolderNode:1,reRootName:!0}).then(function(t){var n=t.type===3?t.rootName||"":t.node.name;if(n+="/",t.type==3){var a=t.node.position,l=a.split("/"),s=!1;l.forEach(function(c,h){if(h>1)if(h>l.length-4){var p=c;n+=p+"/"}else s||(n+=".../",s=!0)})}n=n.split("/").map(function(c){return'<span class="pathStr ellipsis">'+c+"</span>"}).join("/"),e(t,n)}).catch(function(){})},sendToMobile:function(e){var t=this,n=t.options,a=n.attachmentType,l={},s=n.ext.replace(/^\./,"");switch(l.fullName=n.name+(s?"."+s:""),a){case i.COMMON:l.fileID=n.id;break;case i.KC:l.shareUrl=n.node.shareUrl+"#",n.node.canChangeEditable&&t.options.node.visibleType!==f.PUBLIC&&N.Z.updateNode({id:n.node.id,visibleType:f.PUBLIC}).then(function(c){alert(_l("\u5DF2\u5C06\u94FE\u63A5\u8BBE\u4E3A\u201C\u4EFB\u4F55\u4EBA\u53EF\u9884\u89C8\u201D\uFF0C\u53EF\u76F4\u63A5\u6253\u5F00"),4),t.options.node.visibleType=f.PUBLIC,t.$dialog.find("#selectSharePermission").data().select.setValue(f.PUBLIC,_l("\u5141\u8BB8\u4EFB\u4F55\u4EBA\u67E5\u770B")),t.callbacks.performUpdateItem&&t.callbacks.performUpdateItem(parseInt(f.PUBLIC,10))});break;case i.QINIU:l.qiniuPath=n.qiniuPath,l.name=n.name,l.ext=n.ext.replace(/^\./,""),l.size=n.size;break;case i.WORKSHEET:l.name=n.name,l.shareUrl=n.node.shareUrl;break;case i.WORKSHEETROW:l.name=n.name,l.shareUrl=n.node.shareUrl;break;default:break}t.sendToMobileDialog=ye({attachmentType:a,sendToType:e,file:l})},share:function(){var e=this,t=e.options.node,n=!0,a=e.options.attachmentType,l=e.$dialog.find("#shareDesc").val().trim(),s={},c;switch(e.options.attachmentType!==i.KC&&e.dialogEle.$canDownloadSwitch.length&&(n=e.dialogEle.$canDownloadSwitch.prop("checked"),t.allowDown=e.dialogEle.$canDownloadSwitch.prop("checked")),e.sendToTargetType){case d.CHAT:{if(!e.selectedChat){alert(_l("\u8BF7\u9009\u62E9\u8981\u53D1\u9001\u5230\u7684\u804A\u5929"),3);return}var h={PERSON:1,GROUP:2},p=(e.selectedChat||{}).type,u;if(a===i.COMMON){e.newFileName&&(t.originalFileName=e.newFileName);var y=t.filePath+t.fileName+t.fileExt;c=[{fileName:t.originalFileName+t.fileExt,serverName:t.serverName,key:y,fileSize:t.fileSize,fileID:t.fileID}],s={files:c,message:l,toAccountId:"",toGroupId:""},s[p===h.PERSON?"toAccountId":"toGroupId"]=(e.selectedChat||{}).value,u=C.Z.sendFileToChat(s)}else if(a===i.KC){var I=[{entityId:t.id,cardType:t.type===1?w.KCFOLDER:w.KCFILE,title:t.name+(t.ext?"."+t.ext:""),url:t.type===1?t.shareUrl:void 0}];s={cards:I,message:l,toAccountId:"",toGroupId:""},s[p===h.PERSON?"toAccountId":"toGroupId"]=(e.selectedChat||{}).value,u=C.Z.sendCardToChat(s)}else if(a===i.QINIU){var E=e.options.name;e.newFileName&&(E=e.newFileName),c=[{fileName:E+t.fileExt,serverName:t.serverName,key:t.key,fileSize:t.fileSize}],s={files:c,message:l,toAccountId:"",toGroupId:""},s[p===h.PERSON?"toAccountId":"toGroupId"]=(e.selectedChat||{}).value,u=C.Z.sendFileToChat(s)}else(a===i.WORKSHEET||a===i.WORKSHEETROW)&&(s={cards:a===i.WORKSHEET?[{entityId:e.options.id,extra:{appId:e.options.appId,viewId:e.options.viewId},cardType:w.WORKSHEET,title:e.options.name,url:t.shareUrl}]:[{entityId:e.options.id,cardType:w.WORKSHEETROW,title:e.options.name,extra:{rowId:e.options.rowId,viewId:e.options.viewId,appId:e.options.appId}}],message:l,toAccountId:"",toGroupId:""},s[p===h.PERSON?"toAccountId":"toGroupId"]=(e.selectedChat||{}).value,u=C.Z.sendCardToChat(s));u.then(function(v){alert(_l("\u53D1\u9001\u6210\u529F")),$(".shareAttachmentDialog")[0]&&$(".shareAttachmentDialog").parent().remove()}).catch(function(v){alert(_l("\u53D1\u9001\u5931\u8D25"),v)});break}case d.FEED:{e.activeSendToOther(d.FEED);break}case d.TASK:{e.selectedTask||alert(_l("\u8BF7\u9009\u62E9\u8981\u53D1\u9001\u5230\u7684\u4EFB\u52A1"),3),s={sourceId:e.selectedTask.taskID,appId:md.global.APPInfo.taskAppID,sourceType:1,message:l||(a===i.KC?"\u5206\u4EAB\u4E86\u77E5\u8BC6\u4E0B\u7684\u6587\u4EF6":"\u6DFB\u52A0\u4E86\u6587\u4EF6\uFF1A"),attachments:D()([])},a===i.COMMON?(e.newFileName&&(t.originalFileName=e.newFileName),s.attachments=D()([t])):a===i.KC?s.knowledgeAtts=D()([{refId:t.id,fileExt:"."+t.ext,fileSize:t.size,originalFileName:t.name,viewUrl:File.isPicture("."+t.ext)?t.viewUrl:null,type:t.type===1?1:void 0}]):a===i.QINIU&&(t.originalFileName=e.options.name,e.newFileName&&(t.originalFileName=e.newFileName),s.attachments=D()([t])),le.Z.addDiscussion(s).then(function(v){if(v.error){alert(_l("\u5206\u4EAB\u5931\u8D25"),2);return}alert(_l("\u5206\u4EAB\u6210\u529F")),$(".shareAttachmentDialog")[0]&&$(".shareAttachmentDialog").parent().remove()}).catch(function(v){alert(_l("\u5206\u4EAB\u5931\u8D25"),v)});break}case d.CALENDAR:{e.activeSendToOther(d.CALENDAR);break}case d.KC:{if(!e.kcPath){alert(_l("\u8BF7\u5148\u9009\u62E9\u6587\u4EF6\u5939"),3);return}var m={};m.des=l,m.allowDown=n,a===i.COMMON?(m.fileID=e.options.id,e.newFileName&&(m.originalFileName=e.newFileName)):a===i.KC?m.nodeId=e.options.id:a===i.QINIU&&(m.name=e.options.name+(e.options.ext[0]==="."?e.options.ext:"."+e.options.ext),m.filePath=e.options.qiniuPath,e.newFileName&&(m.name=e.newFileName)),(0,oe.default)(a,m).save(e.kcPath).then(function(v){$(".shareAttachmentDialog")[0]&&$(".shareAttachmentDialog").parent().remove()}).catch(function(v){alert(v||_l("\u4FDD\u5B58\u5931\u8D25"),3)});break}default:break}},formatQiniuPath:function(e){var t=this,n=t.parseUrl(e),a=n.pathname.slice(1),l=a.slice(a.lastIndexOf("/")+1);return{serverName:n.origin+"/",key:a,fileName:File.GetName(l),fileExt:"."+File.GetExt(l),fileSize:t.options.node.size,filePath:a.replace(l,"")}},parseUrl:function(e){var t=document.createElement("a");return t.href=e,{protocol:t.protocol,hostname:t.hostname,port:t.port,pathname:("/"+t.pathname).replace("//","/"),search:t.search,hash:t.hash,origin:t.origin}},previewFile:function(){var e=this;e.dialogEle.$fileIcon=e.$dialog.find(".fileIcon"),e.dialogEle.$fileSize=e.$dialog.find(".fileSize"),e.dialogEle.$thumbnailCon=e.$dialog.find(".thumbnailCon"),e.dialogEle.$thumbnail=e.$dialog.find(".thumbnail"),File.isPicture("."+e.file.ext)&&e.file.imgSrc?e.loadPicture():e.loadDocIcon()},loadDocIcon:function(){var e=this,t=e.options.isKcFolder?e.options.node&&e.options.node.isOpenShare?"fileIcon-folderShared":"fileIcon-folder":(0,W.kQ)("."+e.file.ext);e.options.attachmentType===i.WORKSHEET?t="worksheetIcon":e.options.attachmentType===i.WORKSHEETROW&&(t="worksheetRecordIcon"),e.dialogEle.$fileIcon.removeClass().addClass("fileIcon "+t),e.dialogEle.$fileSize.text((0,W.sS)(e.file.size).replace(/ /g,""))},loadPicture:function(){var e=this;e.dialogEle.$thumbnailCon.removeClass("hide");var t=new FileReader,n=document.createElement("img");n.addEventListener("error",function(){e.dialogEle.$thumbnail.hide(),e.loadDocIcon()},!1),n.src=e.file.imgSrc,e.dialogEle.$thumbnail.append(n).show()},getFullFileName:function(){var e=this;return e.dialogEle.$fileName.val()+(e.file.ext?"."+e.file.ext:"")},validate:function(e){var t=/[\/\\\:\*\?\"\<\>\|]/g,n=t.test(e);return n?(alert(_l("\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u4EE5\u4E0B\u5B57\u7B26\uFF1A")+'\\ / : * ? " < > |',3),!1):!0},updateVisibleType:function(e,t){var n=this;e=parseInt(e,10),N.Z.updateNode({id:n.options.id,visibleType:e}).then(function(a){n.options.isKcFolder&&(n.options.node.visibleType=e,n.options.node.isOpenShare=e===f.PUBLIC,n.loadDocIcon()),alert(_l("\u4FEE\u6539\u6210\u529F")),t&&t(parseInt(e,10)),n.callbacks.performUpdateItem&&n.callbacks.performUpdateItem(parseInt(e,10))}).catch(function(a){alert(_l("\u4FEE\u6539\u5931\u8D25"),3)})},updateWorkSheetVisibleType:function(e,t){var n=this;e=parseInt(e,10),R.Z.updateWorksheetShareRange({worksheetId:n.options.id,viewId:n.options.viewId,shareRange:e}).then(function(a){alert(_l("\u4FEE\u6539\u6210\u529F")),t(e),n.callbacks.updateView&&n.callbacks.updateView({shareRange:e})}).catch(function(a){alert(_l("\u4FEE\u6539\u5931\u8D25"),3)})},updateWorksheetRowShareRange:function(e,t){var n=this;e=parseInt(e,10),R.Z.updateWorksheetRowShareRange({worksheetId:n.options.id,rowId:n.options.rowId,shareRange:e}).then(function(a){alert(_l("\u4FEE\u6539\u6210\u529F")),t(e),n.callbacks.updateShareRangeOfRecord&&n.callbacks.updateShareRangeOfRecord(e)}).catch(function(a){alert(_l("\u4FEE\u6539\u5931\u8D25"),3)})},cutString:function(e,t,n){return e.length>t&&(e=e.substr(0,t)+(n||"...")),e},getExt:function(e){return e?e[0]==="."?e.slice(1):e:""}};function De(o,e){return new Q(o,e)}}}]);
