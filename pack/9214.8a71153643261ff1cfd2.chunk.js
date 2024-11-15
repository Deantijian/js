(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[9214],{42041:D=>{D.exports=`<div class="barchTaskMain">
    <div class="header">
        <div class="taskDetailStatusBtn ThemeColor3 ThemeBorderColor3">
            <i class="Font16 icon-ok mRight5" />
            {{= _l('\u6807\u8BB0\u5B8C\u6210') }}
        </div>
        <ul class="Right relative">
            <li data-tip="{{= _l('\u6279\u91CF\u5173\u95ED\u6D88\u606F\u63D0\u9192') }}" class="batchIcon iconTaskNoNews ThemeColor3"> <i class="icon-chat-bell-nopush"></i></li>
            <li data-tip="{{= it.isLocked ? _l('\u6279\u91CF\u9501\u5B9A\u4EFB\u52A1') : _l('\u6279\u91CF\u89E3\u9501\u4EFB\u52A1') }}" class="batchIcon iconTaskNewLocked ThemeColor3"> <i class="{{=it.isLocked ? 'icon-task-new-locked' : 'icon-task-new-no-locked'}}"></i></li>
            <li data-tip="{{= _l('\u66F4\u591A')}}" class="batchIcon batchMore ThemeColor3"><i class="icon-arrow-down-border"></i></li>
            <ul class="batchOperator boderRadAll_3 boxShadow5 Hidden">
                <li id="batchDelTask"><i class="icon-task-new-delete"></i>{{= _l('\u6279\u91CF\u5220\u9664\u4EFB\u52A1') }}</li>
                <li class="iconTaskLabel"><i class="icon-task-label"></i>{{= _l('\u8BBE\u7F6E\u6807\u7B7E') }}</li>
            </ul>
        </ul>
    </div>
    <div class="detailTime flexRow" id="batchTaskNoStart">
        <div class="mRight10 detailTimeIcon">
            <i class="icon-watch_later" />
        </div>
        <div class="detailTimeLabel Font17">{{=_l('\u672A\u5F00\u59CB')}}</div>
        <div class="detailTimeLabelText">
            <div class="detailTimeNowStart ThemeColor3 ThemeBorderColor3 pointer ThemeHoverColor2 ThemeHoverBorderColor2" data-tip="{{=_l('\u6279\u91CF\u542F\u52A8\u6240\u6709\u672A\u5F00\u59CB\u7684\u4EFB\u52A1')}}">
                {{=_l('\u73B0\u5728\u5F00\u59CB')}}
            </div>
        </div>
        <div class="flex" />
    </div>
    <div class="detailTime flexRow Hidden" id="batchTaskComplete">
        <div class="mRight10 detailTimeIcon">
            <i class="icon-check_circle" />
        </div>
        <div class="detailTimeLabel Font17">{{=_l('\u5DF2\u5B8C\u6210')}}</div>
        <div class="detailTimeLabelText"></div>
        <div class="flex" />
    </div>
    <div class="barchTaskContent">
        {{? it.isShowChargeFolder}}
        <div class="batchFolder">
            <span class="batchFolderIcon" data-tip="{{= _l('\u6279\u91CF\u5173\u8054\u9879\u76EE')}}"><i class="icon-project-new"></i></span>
            <div class="batchFolderContent Hidden show">
                <span class="batchFolderText">{{= _l('\u6279\u91CF\u5173\u8054\u9879\u76EE')}}</span>
                <span class="folderNameEdit tip-bottom-left" data-tip="{{= _l('\u6279\u91CF\u5173\u8054\u9879\u76EE')}}"><i class="icon-edit"></i></span>
            </div>
            <div class="autoBatchFolder Hidden">
                <input type="text" id="batchTaskFolder" class="boderRadAll_3" />
            </div>
        </div>
        {{?}}
        <div class="markStatus">
            <span data-tip="{{=_l('\u6279\u91CF\u66F4\u6539\u4E3B\u8D1F\u8D23\u4EBA')}}">
                <img class="batchCharge circle" src="{{=md.global.FileStoreConfig.pictureHost}}UserAvatar/default.gif?imageView2/1/w/48/h/48/q/90" />
            </span>
            <span class="batchTaskCount">{{= _l('\u5DF2\u9009\u62E9%0\u6761\u4EFB\u52A1','<span id="backTaskCount">?</span>')}}</span>
            <span id="batchFavorite" class="icon-star-hollow pointer"></span>
        </div>
        <div class="categorys">
            <i class="icon-task-label"></i>
            <div class="categoryList">
                <input type="text" id="txtCategory" class="selectized" value="" tabindex="-1" style="display: none;">
            </div>
        </div>
        <div class="batchMember mTop5">
            <span data-tip="{{=_l('\u6279\u91CF\u6DFB\u52A0\u4EFB\u52A1\u53C2\u4E0E\u8005')}}"><i class="icon-group"></i></span>
            <div class="members">
                <span class="ThemeColor3" id="batchAddTask" data-tip="{{=_l('\u6DFB\u52A0\u4EFB\u52A1\u53C2\u4E0E\u8005')}}"><i class="icon-task-add-member-circle"></i></span>
            </div>
        </div>
    </div>
</div>
`},9214:(D,w,k)=>{"use strict";k.r(w),k.d(w,{default:()=>aa});var M=k(20845),H=k(88902),z=k.n(H),b=k(70801),U=k(54208),x=k(12424),j=k(86735),G=k(75809),O=k(61987),na=k(26740),V=k(38197),R=k.n(V),o=k(51443),Y=k(42041),K=k.n(Y),W=k(15577),p=k(96213),g=k(94176),v=k(52106),S=k(29583),F=k(10441),J=k(96486),P=k.n(J),Q=k(30381),I=k.n(Q),r=k(67294),A=k(73935),X=k(5017),q=(0,j.Z)([`
  width: 438px;
  background: #fff;
  max-height: 400px;
  padding: 6px 0;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 6px 0;
  z-index: 9999;
  position: absolute;
  li {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    padding-left: 15px;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    img {
      height: 26px;
      margin-top: 7px;
      vertical-align: top;
      width: 26px;
    }
    .folderName {
      display: inline-block;
      line-height: 40px;
      margin-left: 5px;
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      white-space: nowrap;
    }
    .folderDetail {
      position: absolute;
      right: 5px;
      top: 0;
      span {
        color: #999;
        font-size: 14px;
        line-height: 40px;
      }
    }
    .icon-folder-public {
      font-size: 18px;
      margin-right: 5px;
      color: #999;
      line-height: 40px;
    }
  }
`],[`
  width: 438px;
  background: #fff;
  max-height: 400px;
  padding: 6px 0;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 6px 0;
  z-index: 9999;
  position: absolute;
  li {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    padding-left: 15px;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    img {
      height: 26px;
      margin-top: 7px;
      vertical-align: top;
      width: 26px;
    }
    .folderName {
      display: inline-block;
      line-height: 40px;
      margin-left: 5px;
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      white-space: nowrap;
    }
    .folderDetail {
      position: absolute;
      right: 5px;
      top: 0;
      span {
        color: #999;
        font-size: 14px;
        line-height: 40px;
      }
    }
    .icon-folder-public {
      font-size: 18px;
      margin-right: 5px;
      color: #999;
      line-height: 40px;
    }
  }
`]),_=X.ZP.ul(q);function L(a){var n=g.Z.getState().task.taskConfig.projectId,t=(0,r.useState)(!1),i=(0,x.Z)(t,2),e=i[0],l=i[1],d=(0,r.useState)(!1),c=(0,x.Z)(d,2),T=c[0],f=c[1],h=(0,r.useState)([]),m=(0,x.Z)(h,2),C=m[0],B=m[1],Z=(0,r.useState)(!1),E=(0,x.Z)(Z,2),ta=E[0],ea=E[1],y=function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";f(!0),ea(!0),p.Z.getFolderListForUpdateFolderID({projectId:n,pageIndex:1,pageSize:20,keywords:N.trim()}).then(function(la){f(!1),B(la.data||[])})},sa=P().debounce(y,500);return r.createElement(r.Fragment,null,r.createElement("input",{type:"text",id:"batchTaskFolder",class:"boderRadAll_3",onChange:function(N){sa(N.target.value)},onFocus:function(){!ta&&y("")}}),r.createElement(_,{style:{display:e?"block":"hidden"},id:"SearchFolderCon"},T?r.createElement(U.Z,{size:"middle"}):C.length===0?r.createElement("li",{className:"emptyItem"},_l("\u6CA1\u6709\u641C\u7D22\u5230\u76F8\u5173\u7ED3\u679C")):r.createElement(r.Fragment,null,C.map(function(u){return r.createElement("li",{"data-folderid":u.folderID,onClick:function(){u.folderID&&($("#batchTask .batchFolderContent").addClass("show").siblings().removeClass("show"),$("#batchTask .batchFolderText").text(u.folderName),s.loadBatchData(2),s.taskAuth("updateFolder",_l("\u6279\u91CF\u4FEE\u6539\u4EFB\u52A1\u9879\u76EE"),u.folderID)),l(!1)}},r.createElement("img",{src:u.charge.avatar,class:"chargeUser circle","data-id":u.charge.accountID}),r.createElement("span",{className:"folderName"},(0,W.u1)(u.folderName)),r.createElement("div",{class:"folderDetail"},r.createElement("span",{className:u.visibility===0?"icon-folder-private":"icon-folder-public"}),r.createElement("span",{class:"folderMemberCount"},u.taskNum)))}))))}var s={};s.Settings={TaskIds:[],authTask:[]},s.initEvent=function(){var a=$("#batchTask");a.on("click",".iconTaskLabel",function(n){$("#batchTask .categorys").show(),$("#txtCategory-selectized").focus(),a.find(".batchOperator").addClass("Hidden"),n.stopPropagation()}),a.on("click",".iconTaskNoNews",function(){s.loadBatchData(),s.updateUserNotice()}),a.on("click",".iconTaskNewLocked ",function(){s.loadBatchData(1);var n=$("#batchTask .batchIcon.iconTaskNewLocked"),t=n.find(".icon-task-new-locked").length>0,i=t?_l("\u6279\u91CF\u9501\u5B9A\u4EFB\u52A1"):_l("\u6279\u91CF\u89E3\u9501\u4EFB\u52A1");s.taskAuth("updateTaskLocked",i,t)}),a.on("click",".batchMore",function(n){a.find(".batchOperator").toggleClass("Hidden")}),a.on("click","#batchDelTask",function(){s.loadBatchData(1),b.Z.confirm({dialogClasses:"deleteTaskBox",title:_l("\u5F7B\u5E95\u5220\u9664\u4EFB\u52A1"),closable:!1,children:r.createElement("div",{className:"Font14 mBottom20"},_l("\u6CE8\u610F\uFF1A\u6B64\u64CD\u4F5C\u5C06\u5F7B\u5E95\u5220\u9664\u4EFB\u52A1\u6570\u636E\uFF0C\u65E0\u6CD5\u6062\u590D\u3002"),r.createElement("span",{className:"deleteFolderColor"},_l("\u8BF7\u786E\u8BA4\u60A8\u548C\u4EFB\u52A1\u7684\u5176\u4ED6\u53C2\u4E0E\u8005\u90FD\u4E0D\u518D\u9700\u8981\u4EFB\u52A1\u4E2D\u7684\u6570\u636E\u518D\u884C\u5220\u9664"))),okText:_l("\u5220\u9664"),onOk:function(){var t=r.createElement("div",{className:"checkBox overDateBatch"},r.createElement("span",{className:"btnCk",onClick:function(e){$(e.target).toggleClass("selected")}},_l("\u540C\u65F6\u5220\u9664\u4EFB\u52A1\u4E0B\u7684\u5B50\u4EFB\u52A1")));s.taskAuth("DelTask",_l("\u6279\u91CF\u5220\u9664\u4EFB\u52A1"),null,t)}})}),a.on("click",".batchFolderContent .folderNameEdit, .batchFolderContent .batchFolderText",function(){$(".batchFolder .batchFolderContent").removeClass("show"),$("#batchTask .autoBatchFolder").addClass("show"),$("#batchTaskFolder").focus(),A.render(r.createElement(L,null),document.querySelector(".barchTaskMain .autoBatchFolder"))}),a.on("click",".detailTimeNowStart",function(){s.loadBatchData(2),s.taskAuth("updateTasksActualStartTime",_l("\u5C06\u5F00\u59CB\u6240\u6709\u9009\u4E2D\u7684\u672A\u542F\u52A8\u7684\u4EFB\u52A1\uFF1F"))}),a.on("click",".taskDetailStatusBtn",function(){s.loadBatchData(2);var n=!$(this).hasClass("active"),t=n?_l("\u6807\u8BB0\u5B8C\u6210"):_l("\u6807\u8BB0\u672A\u5B8C\u6210");s.taskAuth("updateTaskStatus",t,n)}),a.on("click",".batchCharge",function(){var n=$(this),t=0,i=$(".selectTask:first").attr("data-projectid");$.map($(".selectTask"),function(e,l){$(e).attr("data-projectid")===i&&t++}),i=t===$(".selectTask").length?i:"",(0,G.Z)({sourceId:g.Z.getState().task.taskConfig.folderId,fromType:2,showMoreInvite:!1,SelectUserSettings:{projectId:(0,v.Ie)(i)?i:"",unique:!0,callback:function(l){s.loadBatchData(2),s.taskAuth("updateCharge",_l("\u6279\u91CF\u66F4\u6539\u4E3B\u8D1F\u8D23\u4EBA"),l[0])}}})}),a.on("click","#batchAddTask",function(){var n=$(this),t=function(c){s.loadBatchData(),s.addMembers(c)},i=0,e=[],l=$(".selectTask:first").attr("data-projectid");$.map($(".selectTask"),function(d,c){$(d).attr("data-projectid")===l&&i++}),l=i===$(".selectTask").length?l:"",$(".barchTaskContent .members .singleuser").each(function(){e.push($(this).attr("data-accountid"))}),(0,O.ZP)(n[0],{sourceId:g.Z.getState().task.taskConfig.folderId,fromType:2,offset:{top:25,left:0},zIndex:10001,showMoreInvite:!1,filterAccountIds:e,SelectUserSettings:{filterAccountIds:e,projectId:(0,v.Ie)(l)?l:"",callback:t},selectCb:t})}),a.on("click","#batchFavorite",function(){var n=!$(this).hasClass("icon-task-star");s.loadBatchData(),s.updateTaskFavorite(n)}),$(document).on("click",function(n){var t=$(n.target);t.closest(".batchMore").length<=0&&a.find(".batchOperator").addClass("Hidden"),t.closest(".autoBatchFolder").length<=0&&!t.is(".folderNameEdit,.icon-edit,.batchFolderText")&&($(".batchFolder .batchFolderContent").addClass("show"),$("#batchTask .autoBatchFolder").removeClass("show"))})},s.loadTask=function(){$("#backTaskCount").text($("#taskList .selectTask").length);var a=$("#taskList .selectTask .markTask").length==$("#taskList .selectTask .markTask.completeHook").length;$("#batchTask .taskDetailStatusBtn").toggleClass("active",a),a&&($("#batchTaskNoStart").addClass("Hidden"),$("#batchTaskComplete").removeClass("Hidden"))},s.loadBatchData=function(a){var n=g.Z.getState().task.taskConfig,t=n.folderId,i=n.viewType,e=$("#taskList .selectTask"),l=void 0,d=void 0,c=void 0;s.Settings.authTask.length=0,s.Settings.TaskIds.length=0;var T=a===o.ZP.auth.Charger||a===o.ZP.auth.Member;t?i===o.ZP.folderViewType.treeView?$.each(e,function(f,h){l=$(h),c=l.parent(),s.Settings.TaskIds.push(c.data("taskid")),d=c.data("auth"),(a===o.ZP.auth.Charger&&d!==o.ZP.auth.Charger||d!==o.ZP.auth.Member&&d!==o.ZP.auth.Charger&&a===o.ZP.auth.Member)&&s.Settings.authTask.push({TaskID:c.data("taskid"),status:l.find(".treeMark .markTask").hasClass("completeHook"),TaskName:l.find(".taskListNameBox .spanName").attr("title"),avatar:l.find(".chargeTd img").attr("src")})}):$.each(e,function(f,h){l=$(h),s.Settings.TaskIds.push(l.data("taskid")),d=l.data("auth"),(a===o.ZP.auth.Charger&&d!==o.ZP.auth.Charger||d!==o.ZP.auth.Member&&d!==o.ZP.auth.Charger&&a===o.ZP.auth.Member)&&s.Settings.authTask.push({TaskID:l.data("taskid"),status:l.find(".markTask ").hasClass("completeHook"),TaskName:l.find(".listStageTaskName").attr("title"),avatar:l.find(".chargeHeaderAvatar").attr("src")})}):$.each(e,function(f,h){if(l=$(h),s.Settings.TaskIds.push(l.data("taskid")),d=l.data("auth"),T&&(a===o.ZP.auth.Charger&&d!==o.ZP.auth.Charger||d!==o.ZP.auth.Member&&d!==o.ZP.auth.Charger&&a===o.ZP.auth.Member)){var m=l.find(".chargeTd img").attr("src")||md.global.Account.avatar;s.Settings.authTask.push({TaskID:l.data("taskid"),status:l.find(".markComplete .markTask").hasClass("markComplete"),TaskName:l.find(".taskListName .spanName").attr("title"),avatar:m})}})},s.bindDialog=function(){var a=g.Z.getState().task.taskConfig.projectId;$("#batchTask").addClass("slideLeft").html(LoadDiv());var n=0;$.map($(".selectTask"),function(e,l){$(e).find(".lockToOtherTask").length&&n++});var t=n<$(".selectTask").length;$("#batchTask").off().html(R().template(K())({isShowChargeFolder:!!a,isLocked:t}));var i=document.querySelector(".barchTaskMain .autoBatchFolder");i&&A.render(r.createElement(L,null),i),o.ZP.selectize=$("#txtCategory").selectize({valueField:"id",plugins:["remove_button"],delimiter:",",persist:!1,placeholder:_l("+ \u6DFB\u52A0\u6807\u7B7E"),create:function(l){return{id:"createNewTagsID",text:l}},options:[],items:[],preload:"focus",render:{option:function(l,d){return'<div class="option"><span class="tagsIcon" style="background:'+l.color+'"></span>'+d(l.text)+"</div>"},item:function(l,d){return'<div class="item selectizeiItem"><span class="tagsIcon" style="background:'+(l.color||"transparent")+";width:"+(l.color?"10px":"0px")+'"></span><span class="tagName">'+d(l.text)+"</span></div>"},option_create:function(l,d){return'<div class="create">'+_l("\u521B\u5EFA\u6807\u7B7E")+"<strong>"+d(l.input)+"</strong></div>"}},load:function(l,d){p.Z.getTagsByTaskID({taskID:"",keywords:l}).then(function(c){var T=o.ZP.selectize[0].selectize||{},f=$("#txtCategory").val().split(",");$.map(z()(T.options),function(m){f.indexOf(T.options[m].id)<0&&T.removeOption(m)});var h=[];$.map(c.data,function(m){h.push({text:m.tagName,id:m.tagID,color:m.color})}),d(h)})},onItemAdd:function(l,d){F.Z.addTaskTag2({taskIds:s.getAllTaskIds(),tagName:d.find(".tagName").text(),tagID:l==="createNewTagsID"?"":l}).then(function(c){if(c){if(l==="createNewTagsID"){var T=$("#txtCategory");o.ZP.selectize[0].selectize.updateOption("createNewTagsID",{id:c.id,text:c.value,color:c.extra}),T.attr("value",T.val().replace("createNewTagsID",c.id))}}else o.ZP.selectize[0].selectize.removeOption(l||"createNewTagsID")})},onDelete:function(l){var d=o.ZP.selectize[0].selectize;$("#txtCategory-selectized").blur(),F.Z.removeTasksTag({sourceIds:s.getAllTaskIds(),tagId:l[0]}).then(function(c){c.state===0&&d.addOption([d.options[l[0]]])})}}),s.loadTask(),s.initEvent()},s.getAllTaskIds=function(){var a=[];return $.map($(".selectTask"),function(n,t){a.push($(n).data("taskid"))}),a},s.updateUserNotice=function(){var a=$("#batchTask .batchIcon.iconTaskNoNews"),n=a.hasClass("close");p.Z.batchUpdateTaskMemberNotice({taskIDstr:s.Settings.TaskIds.join(","),notice:n}).then(function(t){t.status?(alert(n?_l("\u5DF2\u5F00\u542F\u4EFB\u52A1\u63D0\u9192"):_l("\u5DF2\u5173\u95ED\u4EFB\u52A1\u63D0\u9192")),n?(a.removeClass("close"),a.attr("data-tip",_l("\u6279\u91CF\u5173\u95ED\u6D88\u606F\u63D0\u9192")).data("bindDate",!1)):(a.addClass("close"),a.attr("data-tip",_l("\u6279\u91CF\u6253\u5F00\u6D88\u606F\u63D0\u9192")).data("bindDate",!1))):(0,v.N3)(t.error)})},s.updateTaskLocked=function(a,n){p.Z.batchUpdateTaskLocked({taskIDstr:s.Settings.TaskIds.join(","),locked:a}).then(function(t){if(t.status){var i=$("#batchTask .batchIcon.iconTaskNewLocked");a?(i.find("i").removeClass("icon-task-new-locked").addClass("icon-task-new-no-locked"),i.attr("data-tip",_l("\u6279\u91CF\u89E3\u9501\u4EFB\u52A1")).data("bindDate",!1)):(i.find("i").addClass("icon-task-new-locked").removeClass("icon-task-new-no-locked"),i.attr("data-tip",_l("\u6279\u91CF\u9501\u5B9A\u4EFB\u52A1")).data("bindDate",!1));var e=t.data.noAuth;e&&e.length>0?s.builAuthTask(t,{lock:a},"lockTask",_l("\u542B\u6709\u65E0\u6CD5\u4FEE\u6539\u7684\u4EFB\u52A1")):a?(i.find("i").removeClass("icon-task-new-locked").addClass("icon-task-new-no-locked"),i.attr("data-tip",_l("\u6279\u91CF\u9501\u5B9A\u4EFB\u52A1")).data("bindDate",!1),$("#taskList .selectTask .markTask").addClass("lockToOtherTask")):(i.find("i").addClass("icon-task-new-locked").removeClass("icon-task-new-no-locked"),i.attr("data-tip",_l("\u6279\u91CF\u9501\u5B9A\u4EFB\u52A1")).data("bindDate",!1),$("#taskList .selectTask .markTask").removeClass("lockToOtherTask"))}else(0,v.N3)(t.error)})},s.DelTask=function(a){var n=$(".overDateBatch .btnCk").hasClass("selected");p.Z.batchDeleteTask({taskIDstr:s.Settings.TaskIds.join(","),isSubTask:n}).then(function(t){if(t.status){var i=t.DeleteTaskID;i&&$.each(i,function(l,d){(0,S.po)([d])});var e=t.data.noAuth;e&&e.length?s.builAuthTask(t,{},"DelTask",_l("\u542B\u6709\u65E0\u6CD5\u4FEE\u6539\u7684\u4EFB\u52A1")):t.fail&&t.fail.length?alert(_l("\u5220\u9664\u5931\u8D25"),3):t.data.success.length&&($.each(t.data.success,function(l,d){(0,S.po)([d])}),alert(_l("\u5220\u9664\u6210\u529F"))),$("#taskList .selectTask").length<=0&&($("#taskList .selectTask").removeClass("selectTask ThemeBGColor6"),$("#batchTask").removeClass("slideLeft"),$("#tasks").removeClass("slideDetail"))}else(0,v.N3)(t.error)})},s.updateTasksActualStartTime=function(a){p.Z.updateTasksActualStartTime({taskIds:s.Settings.TaskIds,actualStartTime:I()().format("YYYY-MM-DD HH:00")}).then(function(n){if(n.status){var t=n.data.noAuth;t&&t.length?s.builAuthTask(n,{},"UpdateActualStartTime",_l("\u5C06\u5F00\u59CB\u6240\u6709\u9009\u4E2D\u7684\u672A\u542F\u52A8\u7684\u4EFB\u52A1\uFF1F")):($("#batchTaskNoStart .detailTimeLabel").html(_l("\u8FDB\u884C\u4E2D")),$("#batchTaskNoStart .detailTimeLabelText").html(_l("\u5B9E\u9645\u5F00\u59CB\u4E8E%0",I()().format("MMMDo HH:00"))),$("#batchTaskNoStart .icon-watch_later").removeClass().addClass("icon-go_out"),alert(_l("\u64CD\u4F5C\u6210\u529F")));var i=[];s.Settings.TaskIds.forEach(function(e){P().includes(t,e)||i.push({taskId:e})}),i.forEach(function(e){$("#taskList").find("tr[data-taskid='"+e.taskId+"'], li[data-taskid='"+e.taskId+"']").find(".deteLine").data("actdate",I()().format("YYYY-MM-DD HH:00"))}),(0,S.uV)(i)}else(0,v.N3)(n.error)})},s.updateFolder=function(a,n){p.Z.batchUpdateTaskFolderID({taskIDstr:s.Settings.TaskIds.join(","),folderID:a}).then(function(t){t.status?alert(_l("\u64CD\u4F5C\u6210\u529F")):(0,v.N3)(t.error)})},s.updateTaskStatus=function(a,n){(0,v.W$)(a,function(){var t=function(e){p.Z.batchUpdateTaskStatus({taskIDstr:s.Settings.TaskIds.join(","),status:a?1:0,isSubTask:e}).then(function(l){if(l.status){var d=l.data.noAuth;d&&d.length?s.builAuthTask(l,{status:a},"markTask",_l("\u542B\u6709\u65E0\u6CD5\u4FEE\u6539\u7684\u4EFB\u52A1")):a==1?($("#taskList .selectTask .markTask").addClass("completeHook").attr("data-tip",_l("\u6807\u8BB0\u672A\u5B8C\u6210")),$("#taskList .selectTask .spanName").addClass("completeTask"),$("#batchTask .taskDetailStatusBtn").addClass("active"),$("#batchTaskNoStart").addClass("Hidden"),$("#batchTaskComplete").removeClass("Hidden"),$("#batchTaskComplete .detailTimeLabelText").html(_l("\u5B9E\u9645\u7ED3\u675F\u4E8E%0",I()().format("MMMDo HH:mm"))),alert(_l("\u5DF2\u6807\u8BB0\u5B8C\u6210"))):($("#taskList .selectTask .markTask").removeClass("completeHook").attr("data-tip",_l("\u6807\u8BB0\u5B8C\u6210")),$("#taskList .selectTask .spanName").removeClass("completeTask"),$("#batchTask .taskDetailStatusBtn").removeClass("active"),$("#batchTaskNoStart").removeClass("Hidden"),$("#batchTaskComplete").addClass("Hidden"),alert(_l("\u5DF2\u6807\u8BB0\u672A\u5B8C\u6210")))}else(0,v.N3)(l.error)})};b.Z.confirm({closable:!1,dialogClasses:"updateTaskStatusDialog",title:a?_l("\u5C06\u9009\u4E2D\u7684\u4EFB\u52A1\u6807\u4E3A\u5DF2\u5B8C\u62101"):_l("\u5C06\u9009\u4E2D\u7684\u4EFB\u52A1\u6807\u4E3A\u672A\u5B8C\u62101"),okText:_l("\u786E\u5B9A"),children:r.createElement(M.Z,{className:"Gray_9",defaultChecked:!1,text:a?_l("\u540C\u65F6\u5C06\u5B50\u4EFB\u52A1\u6807\u4E3A\u5DF2\u5B8C\u6210"):_l("\u540C\u65F6\u5C06\u5B50\u4EFB\u52A1\u6807\u4E3A\u672A\u5B8C\u6210")}),onOk:function(){var e=$(".updateTaskStatusDialog .Checkbox").is(".checked");t(e)}})})},s.updateCharge=function(a){p.Z.batchUpdateTaskCharge({taskIDstr:s.Settings.TaskIds.join(","),charge:a.accountId}).then(function(n){if(n.status){var t=n.data.noAuth;if(t&&t.length)s.builAuthTask(n,a,"charge",_l("\u542B\u6709\u65E0\u6CD5\u4FEE\u6539\u7684\u4EFB\u52A1"));else{var i=$("#taskList .selectTask");i.length>0&&(i.find(".chargeImg").attr("src",a.avatar).data("accountid",a.accountId),$("#batchTask .batchCharge").attr("src",a.avatar.replace(/\d{2}\//g,"48/"))),alert(_l("\u64CD\u4F5C\u6210\u529F"))}}else(0,v.N3)(n.error)})},s.addMembers=function(a,n){var t=[],i={};$.isFunction(n)?$.each(a,function(e,l){i[l.account]=l.fullname}):$.each(a,function(e,l){t.push(l.accountId)}),p.Z.batchAddTaskMember({taskIDstr:s.Settings.TaskIds.join(","),memberstr:t.join(","),specialAccounts:i}).then(function(e){if($.isFunction(n)&&n({status:e.status}),e.status){if(e.data){var l="";$.map(e.data.successMember||[],function(d){l+='<span class="singleuser circle" data-accountid="'+d.accountID+'"><img class="circle" src="'+d.avatar+'" /> </span>'}),$("#batchAddTask").before(l),e.data.limitedCount?alert(_l("\u6709%0\u4F4D\u5916\u90E8\u7528\u6237\u9080\u8BF7\u5931\u8D25\u3002\u5916\u90E8\u7528\u6237\u77ED\u4FE1\u9080\u8BF7\u7528\u91CF\u8FBE\u5230\u4E0A\u9650\u3002",e.data.limitedCount),3):e.data.successMember&&e.data.successMember.length?alert(_l("\u6DFB\u52A0\u6210\u529F")):alert(_l("\u7528\u6237\u5DF2\u5B58\u5728\uFF0C\u8BF7\u52FF\u91CD\u590D\u6DFB\u52A0"),3)}}else(0,v.N3)(e.error)})},s.updateTaskFavorite=function(a){p.Z.batchUpdateTaskMemberStar({taskIDstr:s.Settings.TaskIds.join(","),star:a}).then(function(n){if(n.status){alert(_l("\u4FEE\u6539\u6210\u529F")),$("#batchFavorite").toggleClass("icon-task-star icon-star-hollow");var t=$("#taskList .selectTask .taskStar.icon-task-star").length,i=$(".aboutMeStar .allCountTask"),e=parseInt(i.text()||0,10);a?($("#taskList .selectTask .taskStar").addClass("icon-task-star").removeClass("icon-star-hollow"),e=e+s.Settings.TaskIds.length-t):($("#taskList .selectTask .taskStar").removeClass("icon-task-star").addClass("icon-star-hollow"),e=e-t),i.text(e<=0?"":e)}else(0,v.N3)(n.error)})},s.deleteTasksMember=function(a){p.Z.batchDeleteTaskMember({taskIDstr:s.Settings.TaskIds.join(","),accountID:a}).then(function(n){n.status?(alert(_l("\u5220\u9664\u6210\u529F")),$("#batchTask .members span[data-accountID='"+a+"']").remove()):(0,v.N3)(n.error)})},s.taskAuth=function(a,n,t,i){var e=s.Settings.authTask.length;e>0?b.Z.confirm({title:n,dialogClasses:"afterUpdate",okText:_l("\u8DF3\u8FC7\uFF0C\u7EE7\u7EED\u4FEE\u6539"),cancelText:_l("\u53D6\u6D88"),footer:r.createElement("div",null,r.createElement("div",{className:"footer"},r.createElement("a",{className:"noText ThemeHoverColor3",onClick:function(){$(".afterUpdate").parent().remove()}},_l("\u53D6\u6D88")),r.createElement("a",{className:"yesText boderRadAll_3 ThemeBGColor3",onClick:function(){s[a](t,!0),$(".afterUpdate").parent().remove()}},_l("\u8DF3\u8FC7\uFF0C\u7EE7\u7EED\u4FEE\u6539"))),r.createElement("div",{className:"TxtLeft"},i)),children:r.createElement(r.Fragment,null,r.createElement("div",{className:"tipTitle"},_l("\u6709%0\u6761\u4EFB\u52A1\u88AB\u9501\u5B9A\u4E14\u4F60\u4E0D\u5177\u6709\u8D1F\u8D23\u4EBA\u6743\u9650\uFF0C\u65E0\u6CD5\u88AB\u4FEE\u6539",e)),r.createElement("div",{className:"authTaskBox"},s.Settings.authTask.map(function(l){return r.createElement("div",{className:"authTask"},r.createElement("span",{className:"markTask lockTask"}),r.createElement("img",{className:"circle batchAvatar",src:l.avatar}),r.createElement("span",{className:"batchName overflow_ellipsis"},l.TaskName))})))}):s[a](t)},s.builAuthTask=function(a,n,t,i){var e=g.Z.getState().task.taskConfig,l=e.folderId,d=e.viewType,c=a.data.noAuth;if(c&&c.length){var T=$("#taskList .selectTask"),f=void 0,h=void 0,m=[],C=void 0;$.each(T,function(B,Z){f=$(Z),l?d===o.ZP.folderViewType.treeView?(h=f.parent().data("taskid"),$.inArray(h,c)>-1?m.push({TaskID:h,TaskName:f.find(".taskListNameBox .spanName").attr("title"),avatar:f.find(".chargeTd img").attr("src")}):s.afterUpdatePart(f,t,n)):(h=f.data("taskid"),$.inArray(h,c)>-1?m.push({TaskID:f.data("taskid"),TaskName:f.find(".listStageTaskName").attr("title"),avatar:f.find(".chargeHeaderAvatar").attr("src")}):s.afterUpdatePart(f,t,n)):(h=f.data("taskid"),$.inArray(h,c)>-1?(C=f.find(".chargeTd img").attr("src")||md.global.Account.avatar,m.push({TaskID:f.data("taskid"),TaskName:f.find(".taskListName .spanName").attr("title"),avatar:C})):s.afterUpdatePart(f,t,n))}),m.length&&s.showAuthTask(m,i,t)}},s.afterUpdatePart=function(a,n,t){var i=void 0;n==="markTask"?t.status==1?a.find(".markTask").addClass("completeHook").attr("data-tip",_l("\u6807\u8BB0\u672A\u5B8C\u6210")):a.find(".markTask").removeClass("completeHook").attr("data-tip",_l("\u6807\u8BB0\u5B8C\u6210")):n==="lockTask"?t.lock?a.find(".markTask").addClass("lockToOtherTask"):a.find(".markTask").removeClass("lockToOtherTask"):n==="DelTask"?(i=s.getTaskIdByItem(a),(0,S.po)([i])):n==="charge"&&a.find(".chargeImg").attr("src",t.avatar).data("accountid",t.accountId)},s.getTaskIdByItem=function(a){var n=void 0;return g.Z.getState().task.taskConfig.folderId?n=a.parent().data("taskid"):n=a.data("taskid"),n},s.showAuthTask=function(a,n,t){var i=a.length;i&&b.Z.confirm({title:n,dialogClasses:"afterUpdateMsg",children:r.createElement(r.Fragment,null,t==="UpdateActualStartTime"?r.createElement("div",{className:"tipTitle"},_l("\u6709%0\u6761\u4EFB\u52A1\u672A\u8BBE\u7F6E\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4\uFF0C\u65E0\u6CD5\u5F00\u59CB\u4EFB\u52A1",i)):r.createElement("div",{className:"tipTitle"},_l("\u6709%0\u6761\u4EFB\u52A1\u88AB\u9501\u5B9A\u4E14\u4F60\u4E0D\u5177\u6709\u8D1F\u8D23\u4EBA\u6743\u9650\uFF0C\u65E0\u6CD5\u88AB\u4FEE\u6539",i)),r.createElement("div",{className:"authTaskBox"},a.map(function(e){return r.createElement("div",{className:"authTask"},t!=="UpdateActualStartTime"&&r.createElement("span",{className:"markTask lockTask"}),r.createElement("img",{className:"circle batchAvatar",src:e.avatar}),r.createElement("span",{className:"batchName overflow_ellipsis"},e.TaskName))}))),okText:_l("\u6211\u77E5\u9053\u4E86")})},s.shiftCtrlKey=function(a,n){var t=g.Z.getState().task.taskConfig,i=t.folderId,e=t.viewType;$("body").addClass("userSelect"),i?e===o.ZP.folderViewType.treeView?s.shiftCtrlKeyTree(a,n):s.shiftCtrlKeyStage(a,n):s.shiftCtrlKeyList(a,n),$("#tasks").addClass("slideDetail"),$("#batchTask").hasClass("slideLeft")?s.loadTask():s.bindDialog()},s.shiftCtrlKeyList=function(a,n){if(n=="ctrl")o.ZP.$prevNode=a,a.toggleClass("selectTask ThemeBGColor6"),$("#taskList .selectTask").length<=0&&a.toggleClass("selectTask ThemeBGColor6");else if(o.ZP.$prevNode||(o.ZP.$prevNode=$("#taskList table:first tr:first")),n=="shift"&&$("#taskList table tr").removeClass("selectTask ThemeBGColor6"),a.addClass("selectTask ThemeBGColor6"),o.ZP.$prevNode.addClass("selectTask ThemeBGColor6"),o.ZP.$prevNode.is(a))o.ZP.$prevNode=a;else if($(".listStageTaskContent").length<2)a.offset().top>o.ZP.$prevNode.offset().top?a.prevUntil(o.ZP.$prevNode).addClass("selectTask ThemeBGColor6"):a.nextUntil(o.ZP.$prevNode).addClass("selectTask ThemeBGColor6"),o.ZP.$prevNode=a;else{var t=a.offset().top,i=o.ZP.$prevNode.offset().top,e=o.ZP.$prevNode,l=o.ZP.$prevNode;if(o.ZP.$prevNode=a,t<i){var d=a;a=l,l=d,t=a.offset().top,i=l.offset().top,e=l}for(var c=void 0;i<=t;)e.addClass("selectTask ThemeBGColor6"),c=e.next(),c.length<=0&&i<=t?e=e.closest(".listStageTaskContent").next().next().find("tr:first"):e=c,e.length>0?i=e.offset().top:i+=900}},s.shiftCtrlKeyTree=function(a,n){if(n==="ctrl")o.ZP.$prevNode=a,a.toggleClass("selectTask ThemeBGColor6");else{var t=$(".singleFolderTask  .singleTreeTask");if(o.ZP.$prevNode||(o.ZP.$prevNode=$(".singleFolderTask li:first .singleTreeTask:first")),n==="shift"&&$(".singleFolderTask  .singleTreeTask").removeClass("selectTask ThemeBGColor6"),o.ZP.$prevNode.is(a))a.parent().find(".singleTreeTask").addClass("selectTask ThemeBGColor6");else{var i=a.offset().top,e=o.ZP.$prevNode.offset().top,l=o.ZP.$prevNode;if(o.ZP.$prevNode=a,i<e){var d=a;a=l,l=d,i=a.offset().top,e=l.offset().top}for(var c=$(".singleTreeTask"),T=c.length,f=void 0,h=0;h<T;h++)f=c.eq(h),f.offset().top>=e&&f.addClass("selectTask ThemeBGColor6"),f.offset().top>=i&&(h=1e5)}}},s.shiftCtrlKeyStage=function(a,n){if(n==="ctrl")o.ZP.$prevNode=a,a.toggleClass("selectTask ThemeBGColor6");else{var t=o.ZP.$prevNode;o.ZP.$prevNode||(t=o.ZP.$prevNode=a.closest(".listStageContent").find("li:first")),o.ZP.$prevNode.closest(".listStageContent").is(a.closest(".listStageContent"))||(t=a.closest(".listStageContent").find("li:first")),o.ZP.$prevNode=a,n==="shift"&&$("#taskList .selectTask").removeClass("selectTask ThemeBGColor6");var i=a.offset().top,e=t.offset().top;if(i<e){var l=a;a=t,t=l,i=a.offset().top,e=t.offset().top}for(var d=void 0;e<=i;)t.addClass("selectTask ThemeBGColor6"),t=t.next(),t.length<=0?e=1e6:e=t.offset().top}};const aa=s}}]);
