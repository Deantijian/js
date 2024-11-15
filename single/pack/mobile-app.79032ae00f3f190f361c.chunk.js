(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[5282,6739],{40055:()=>{"use strict"},28283:()=>{"use strict"},56770:ue=>{ue.exports=`{{ var isGroup = it.isGroup; }}
<div class="groupInfoWrapper flexColumn">
    {{? !isGroup && it.isAdmin }}
    <div class="discussionTip">
        <a class="convertLink">{{= _l('\u8F6C\u6362\u4E3A\u957F\u671F\u7FA4\u7EC4>') }}</a>
        <p class="LineHeight20 mTop5 convertDesc">{{= _l('\u8F6C\u6362\u4E3A\u7FA4\u7EC4\u540E\uFF0C\u60A8\u53EF\u83B7\u5F97\uFF1A\u6307\u5B9A\u66F4\u591A\u7BA1\u7406\u5458\uFF0C\u7FA4\u7EC4\u5BA1\u6279\uFF0C\u9080\u8BF7\u5916\u90E8\u7528\u6237\u7B49\u529F\u80FD\u3002') }}<br/>{{= _l('\u540C\u4E8B\u7FA4\u7EC4\u8FDB\u5165\u5230\u901A\u8BAF\u5F55\u4E2D\u65B9\u4FBF\u7BA1\u7406\u5E76\u80FD\u652F\u6301\u5230\u66F4\u591A\u5E94\u7528\u3002')}}</p>
    </div>
    {{?}}

    <ul class="groupInfoList Gray_6">
        {{? isGroup && it.project }}
        <li>
            <div class="infoTitle">{{= _l('\u7FA4\u7EC4\u5F52\u5C5E')}}</div>
            <div class="infoContent breakAll">
                {{! it.project.companyName }}
            </div>
        </li>
        {{?}}
        <li>
            {{? isGroup }}
            <div class="infoTitle">{{= _l('\u7FA4\u7EC4\u540D\u79F0') }}</div>
            {{??}}
            <div class="infoTitle">{{= _l('\u804A\u5929\u540D\u79F0') }}</div>
            {{?}}
            <div class="infoContent">
                <input type="text" class="groupName groupTextBox boderRadAll_3"
                       placeholder="{{=_l('\u8BF7\u8F93\u5165\u7FA4\u7EC4\u540D\u79F0')}}" value="{{! it.name }}" {{=it.isAdmin ? '' : 'readonly'
                }} data-content="{{!it.name}}" />
            </div>
        </li>
        {{? isGroup}}
        <li>
            <div class="infoTitle">{{= _l('\u521B\u5EFA\u65F6\u95F4') }}</div>
            <div class="infoContent">
                <div class="createTime" title="{{= it.createTime }}">{{= it.createTime }}</div>
            </div>
        </li>
        {{?}}
        <li>
            {{? isGroup }}
            <div class="infoTitle">{{= _l('\u7FA4\u4E3B/\u7BA1\u7406\u5458') }}</div>
            {{??}}
            <div class="infoTitle">{{= _l('\u804A\u5929\u6210\u5458') }}</div>
            {{?}}
            <div class="infoContent">
                <ul class="userList clearfix">
                    {{? !it.isGroup }}
                    <li class="Left mRight5">
                        <a data-tip="{{= _l('\u6DFB\u52A0\u6210\u5458') }}"><i class="addChatMember icon-task-add-member-circle"/></a>
                    </li>
                    {{?}}
                    {{~ it.adminUsers:admin }}
                    <li class="userAvatar circle">
                        {{? admin.accountId }}
                        <a href="{{= '/user_' + admin.accountId }}" target="_blank">
                            <img class="userHead circle" src="{{=admin.avatar}}" data-accountid="{{=admin.accountId}}"/>
                        </a>
                        {{??}}
                        <img class="userHead circle" src="{{=admin.avatar}}" data-accountid="{{=admin.accountId}}"/>
                        {{?}}
                    </li>
                    {{~}}
                    {{? !it.isGroup }}
                    {{~ it.groupUsers:user }}
                    <li class="userAvatar circle">
                        <a href="{{= '/user_' + user.accountId }}" target="_blank">
                            <img class="userHead circle" src="{{=user.avatar}}" data-accountid="{{=user.accountId}}"/>
                        </a>
                    </li>
                    {{~}}
                    {{?}}
                </ul>
            </div>
        </li>
        {{? isGroup }}
        <li>
            <div class="infoTitle">{{= _l('\u7FA4\u4E8C\u7EF4\u7801') }}</div>
            <div class="infoContent Relative">
                <span class="icon-zendeskHelp-qrcode qrcode"></span>
            </div>
        </li>
        <li>
            <div class="infoTitle">{{= _l('\u7FA4\u516C\u544A') }}</div>
            <div class="infoContent">
                {{? it.isAdmin }}
                <textarea class="textAreaAbout boderRadAll_3 Gray_6 groupTextBox TextArea LineHeight20"
                          placeholder="{{= _l('\u8BF7\u8F93\u5165\u7FA4\u516C\u544A') }}"
                          data-content="{{= it.about }}">{{= it.about || '' }}</textarea>
                {{??}}
                <div class="groupAboutStatic LineHeight20 mTop5">
                    {{! it.about === '' ?  (_l('\u6682\u65E0\u7FA4\u516C\u544A')) : it.about }}
                </div>
                {{?}}
            </div>
        </li>
        {{?}}

        {{? !isGroup}}
        <li class="clearfix discussionChatNotice">
            <div class="infoTitle">{{= _l('\u6D88\u606F\u514D\u6253\u6270') }}<span class="tip tip-bottom-right mLeft5" data-tip="{{= _l('\u5F00\u542F\u540E\uFF0C\u4EC5\u63A5\u6536\u5230@\u6211\u53CA@\u5168\u4F53\u7FA4\u6210\u5458\u7684\u6D88\u606F\u63D0\u9192') }}"><i class="icon-knowledge-message Font15 Gray_c"></i></span></div>
            <div class="infoContent">
                <input class="tgl tgl-light" type="checkbox" id="chatGroupNotice" {{= !it.isPushNotice ? 'checked' : ''
                }}/>
                <label class="tgl-btn mTop5 Right" for="chatGroupNotice"></label>
            </div>
        </li>
        {{?}}
    </ul>
    <!-- bottom operation -->
    {{? !isGroup }}
    <div class="groupOperation pLeft20 pRight20 pTop10">
        <button class="exitGroup pLeft40 pRight40" data-type="exit">
            <span class="icon-groupExit"></span>{{= _l('\u9000\u51FA\u804A\u5929') }}
        </button>
        {{? it.isAdmin }}
        <a class="deleteGroup ThemeColor3 tip-top" data-tip="{{= _l('\u804A\u5929\u89E3\u6563\u540E\uFF0C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u804A\u5929\u3002\u4E0D\u53EF\u6062\u590D') }}" data-type="delete">
            <span class="icon-task-new-delete"></span>{{= _l('\u89E3\u6563\u804A\u5929') }}
        </a>
        {{?}}
    </div>
    {{?}}
</div>
`},20033:ue=>{ue.exports=`{{ var openText = _l('\u5F00\u542F'); }}
{{ var closeText = _l('\u5173\u95ED'); }}
<div class="settingsWrapper flexColumn">
    <div class="clearfix singleSetting mTop15">
        <div class="Left">
            {{= _l('\u65B0\u6210\u5458\u52A0\u5165\u9700\u8981\u7BA1\u7406\u5458\u9A8C\u8BC1') }}
            <span class="tip-bottom" data-tip="{{= _l('\u4EC5\u5BF9\u4E3B\u52A8\u7533\u8BF7\u52A0\u5165\u548C\u901A\u8FC7\u94FE\u63A5\u9080\u8BF7\u7684\u7528\u6237\u751F\u6548')}}">
                <span class="icon-knowledge-message Font16 Gray_c"></span>
            </span>
        </div>
        <div class="Right">
            {{? it.isAdmin }}
                <input class='tgl tgl-light' id='gs1' {{= it.isApproval ? 'checked' : '' }} type='checkbox' data-type="approval"/><label class='tgl-btn joinApproval' for='gs1'></label>
            {{??}}
                <span>{{= it.isApproval ? openText : closeText }}</span>
            {{?}}
        </div>
    </div>
    {{? it.project }}
    <div class="clearfix singleSetting">
        <div class="Left">{{= _l('\u5728\u7EC4\u7EC7\u901A\u8BAF\u5F55\u4E0B\u663E\u793A\u5F53\u524D\u7FA4\u7EC4') }}</div>
        <div class="Right">
        {{? it.isAdmin }}
            <input class='tgl tgl-light' id='gs2' {{= !it.isHidden ? 'checked' : '' }} type='checkbox' data-type="addInList"/><label class='tgl-btn inGroupList' for='gs2'></label>
        {{??}}
            <span>{{= !it.isHidden ? openText : closeText }}</span>
        {{?}}
        </div>
    </div>
    {{?}}
    <div class="clearfix singleSetting">
        <div class="Left">{{= _l('\u4EC5\u5141\u8BB8\u7FA4\u4E3B\u53CA\u7BA1\u7406\u5458\u9080\u8BF7\u65B0\u6210\u5458') }}</div>
        <div class="Right">
            {{? (it.isAdmin) }}
            <input class='tgl tgl-light' id='gs5' type='checkbox' data-type="inviteAuth" {{= it.isForbidInvite ? 'checked' : '' }} />
            <label class='tgl-btn setOnlyAdmin' for='gs5'></label>
            {{??}}
            <span>{{= it.isForbidInvite ? openText : closeText }}</span>
            {{?}}
        </div>
    </div>
    <!--<div class="clearfix singleSetting">
        <div class="Left">{{= _l('\u7FA4\u5185\u7981\u8A00') }}<span class="tip tip-bottom-right" data-tip="{{= _l('\u5F00\u542F\u540E\uFF0C\u53EA\u5141\u8BB8\u7FA4\u4E3B\u548C\u7BA1\u7406\u5458\u53D1\u9001\u6D88\u606F') }}"><i class="icon-knowledge-message Font15"></i></span></div>
        <div class="Right">
            {{? (it.isAdmin) }}
            <input class='tgl tgl-light' id='gs6' type='checkbox' data-type="chatAuth" {{=it.isForbidSpeak ? 'checked' : '' }} />
            <label class='tgl-btn' for='gs6'></label>
            {{??}}
            <span>{{= it.isForbidSpeak ? openText : closeText }}</span>
            {{?}}
        </div>
    </div>-->
    {{? it.project }}
    <div class="clearfix singleSetting">
        <div class="Left">{{= _l('\u8BBE\u4E3A\u5B98\u65B9\u7FA4\u7EC4') }}</div>
        <div class="associateDepartment Left mLeft10">
        {{ var hidden = it.isVerified ? '' : 'Hidden'; }}
        {{ var authClass = it.isAdmin ? ' Hand' : ''; }}
        {{? it.isVerified }}
            <span class="ThemeColor3 officialDepSelect {{= authClass }} ">{{= _l('\u5173\u8054\u90E8\u95E8\uFF1A') }} {{! it.mapDepartmentName || ''}}</span>
        {{?? it.isAdmin }}
            <span class="ThemeColor3 officialDepSelect {{= authClass }} {{= hidden }}">{{= _l('\u8BF7\u8BBE\u7F6E\u5173\u8054\u90E8\u95E8') }}</span>
        {{??}}
            <span class="ThemeColor3 {{= hidden }}">{{=_l('\u672A\u5173\u8054\u90E8\u95E8')}}</span>
        {{?}}
        </div>
        <div class="Right">
        {{? (it.isAdmin && it.project.isProjectAdmin) }}
            <input class='tgl tgl-light' {{= it.isVerified ? 'checked' : '' }} id='gs3' type='checkbox' data-type="associate"/><label class='tgl-btn setOfficial' for='gs3'></label>
        {{??}}
            <span>{{= it.isVerified ? openText : closeText }}</span>
        {{?}}
        </div>
    </div>
    {{?}}
    <div class="clearfix singleSetting groupChatNotice">
        <div class="Left">{{= _l('\u6D88\u606F\u514D\u6253\u6270') }}<span class="tip tip-bottom-right" data-tip="{{= _l('\u5F00\u542F\u540E\uFF0C\u4EC5\u63A5\u6536\u5230@\u6211\u53CA@\u5168\u4F53\u7FA4\u6210\u5458\u7684\u6D88\u606F\u63D0\u9192') }}"><i class="icon-knowledge-message Font15"></i></span></div>
        <div class="Right">
            <input class='tgl tgl-light' id='gs4' {{= !it.isPushNotice ? 'checked' : '' }} type='checkbox' data-type="silence"/><label class='tgl-btn setNotice' for='gs4'></label>
        </div>
    </div>
    <div class="groupOperation">
        <button class="exitGroup flex mLeft25" data-type="exit"><span class="icon-groupExit"></span>&nbsp;{{= _l('\u9000\u51FA\u7FA4\u7EC4') }}</button>
        {{? it.isAdmin }}
        <a class="closeGroup flex tip-top" data-tip="{{= _l('\u5173\u95ED\u7FA4\u7EC4\u540E\uFF0C\u7FA4\u7EC4\u5C06\u4E0D\u80FD\u88AB\u8BBF\u95EE\u60A8\u53EF\u4EE5\u5728\u901A\u8BAF\u5F55\u7FA4\u7EC4\u5217\u8868\u4E2D\u627E\u5230\u5E76\u91CD\u65B0\u5F00\u542F\u8FD9\u4E2A\u7FA4\u7EC4') }}" data-type="close"><span class="icon-delete" ></span>&nbsp;{{= _l('\u5173\u95ED\u7FA4\u7EC4') }}</a>
        <a class="deleteGroup flex tip-top" data-tip="{{= _l('\u7FA4\u7EC4\u89E3\u6563\u540E\uFF0C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u7FA4\u7EC4\u3002\u4E0D\u53EF\u6062\u590D')}}" data-type="delete"><span class="icon-task-new-delete"></span>&nbsp;{{= _l('\u89E3\u6563\u7FA4\u7EC4') }}</a>
        {{?}}
    </div>
</div>
`},64563:ue=>{ue.exports=`{{? !it.buildUser }}
<div class="groupUserWrapper">
    <div class="groupSettingSearch">
        <div class="searchWrapper">
            <span class="icon-search pLeft5 searchIcon Font20"></span>
            <input type="text" placeholder="{{= _l('\u641C\u7D22\u7FA4\u6210\u5458')}}" class="searchInput" />
            <span class="icon-closeelement-bg-circle searchCloseIcon Font14 Hand Hidden ThemeHoverColor3"></span>
        </div>
    </div>
    <ul class="groupUserList{{= it.isAdmin ? ' auth' : ''}}">
        {{# def.buildUserList:it.users }}
    </ul>
    <ul class="operation Hidden">
        <li class="groupMemberOp ThemeBGColor3 admin" data-op="0">{{= _l('\u7BA1\u7406\u5458') }}</li>
        <li class="groupMemberOp ThemeBGColor3 member" data-op="1">{{= _l('\u6210\u5458') }}</li>
        <li class="groupMemberOp ThemeBGColor3 remove" data-op="2">{{= _l('\u79FB\u51FA\u7FA4\u7EC4') }}</li>
        <li class="groupMemberOp ThemeBGColor3 apply" data-op="3">{{= _l('\u5141\u8BB8') }}</li>
        <li class="groupMemberOp ThemeBGColor3 apply" data-op="4">{{= _l('\u62D2\u7EDD') }}</li>
        <li class="groupMemberOp ThemeBGColor3 active" data-op="5">{{= _l('\u91CD\u65B0\u9080\u8BF7') }}</li>
        <li class="groupMemberOp ThemeBGColor3 active" data-op="6">{{= _l('\u53D6\u6D88\u9080\u8BF7') }}</li>
    </ul>
</div>
{{? !it.isForbidInvite || it.isAdmin }}
<div class="addGroupMembers flexRow">
    <span class="addGroupMember Hand Gray_9e ThemeHoverColor3 flexCenter">
        <span class="icon-invite Font16 mRight8"></span><span>{{= _l('\u4ECE\u901A\u8BAF\u5F55\u6DFB\u52A0') }}</span>
    </span>
    <span class="mLeft24 addGroupFriends Hand Gray_9e ThemeHoverColor3 flexCenter">
        <span class="icon-airplane Font16 mRight8"></span>
        <span>{{= _l('\u66F4\u591A\u9080\u8BF7') }}</span>
    </span>
</div>
{{?}} {{??}} {{# def.buildUserList:it.users }} {{?}} {{##def.buildUserList:users: {{? users && users.length }} {{~
users:user }}
<li class="singleUser flexRow" data-accountid="{{= user.accountId }}">
    {{? user.accountId }}
    <a href="/user_{{= user.accountId }}" target="_blank" class="userAvatar">
        <img class="circle" src="{{= user.avatar }}" data-accountid="{{= user.accountId }}" />
    </a>
    {{??}}
    <a href="javascript:void(0);" class="userAvatar cursorDefault">
        <img class="circle" src="{{= user.avatar }}" data-accountid="{{= user.accountId }}" />
    </a>
    {{?}}
    <div class="groupUserName overflow_ellipsis" title="{{! user.fullname }}">{{! user.fullname }}</div>
    {{? user.isProjectUser }}
    <div class="groupUserDepartment overflow_ellipsis Gray_6" title="{{! user.department || '' }}">
        {{! user.department || '' }}
    </div>
    <div class="groupUserJob overflow_ellipsis Gray_9" title="{{! user.job || '' }}">{{! user.job || '' }}</div>
    {{??}}
    <div class="groupUserCompany overflow_ellipsis Gray_6" title="{{! user.companyName || '' }}">
        {{! user.companyName || '' }}
    </div>
    <div class="groupUserJob overflow_ellipsis verGray_9" title="{{! user.job || '' }}">{{! user.job || '' }}</div>
    {{?}} {{? !it.isAdmin || (user.accountId === md.global.Account.accountId) }}
    <div class="groupMemberOperation">
        {{? user.status === 1}} {{? user.isCreateUser && user.groupUserRole === 1 }}
        <div class="settingMemberRole"><span class="roleName">{{= _l('\u7FA4\u4E3B') }}</span></div>
        {{?? user.groupUserRole === 1 }}
        <div class="settingMemberRole"><span class="roleName">{{= _l('\u7BA1\u7406\u5458') }}</span></div>
        {{??}}
        <div class="settingMemberRole"><span class="roleName">{{= _l('\u6210\u5458') }}</span></div>
        {{?}} {{?? user.status === 0 }}
        <div class="settingMemberRole"><span class="roleName">{{= _l('\u5F85\u5BA1\u6838\u7528\u6237') }}</span></div>
        {{?? user.status === 2 }}
        <div class="settingMemberRole"><span class="roleName">{{= _l('\u5F85\u6FC0\u6D3B\u7528\u6237') }}</span></div>
        {{?}}
    </div>
    {{??}}
    <div class="groupMemberOperation auth">
        {{? user.status === 1 }} {{? user.isCreateUser && user.groupUserRole === 1 }}
        <div class="settingMemberRole cursorDefault" data-type="creator">
            <span class="roleName">{{= _l('\u7FA4\u4E3B') }}</span>
        </div>
        {{?? user.groupUserRole === 1 }}
        <div class="settingMemberRole" data-type="admin">
            <span class="roleName">{{= _l('\u7BA1\u7406\u5458') }}</span><span class="icon-arrow-down-border font8"></span>
        </div>
        {{??}}
        <div class="settingMemberRole" data-type="member">
            <span class="roleName">{{= _l('\u6210\u5458') }}</span><span class="icon-arrow-down-border font8"></span>
        </div>
        {{?}} {{?? user.status === 0 }}
        <div class="settingMemberRole" data-type="apply">
            <span class="roleName">{{= _l('\u7B49\u5F85\u5BA1\u6279\u52A0\u5165\u7FA4\u7EC4') }}</span
            ><span class="icon-arrow-down-border font8"></span>
        </div>
        {{??}}
        <div class="settingMemberRole" data-type="active">
            <span class="roleName">{{= _l('\u7B49\u5F85\u6FC0\u6D3B\u52A0\u5165\u7FA4\u7EC4') }}</span
            ><span class="icon-arrow-down-border font8"></span>
        </div>
        {{?}}
    </div>
    {{?}}
</li>
{{~}} {{??}}
<li class="TxtCenter">
    <div class="mTop45">
        <img src="/staticfiles/images/no_search_result.png" style="width: 60px" />
    </div>
    <div class="Font16 mTop20">{{= _l('\u65E0\u5339\u914D\u7ED3\u679C')}}</div>
</li>
{{?}} #}}
`},98939:ue=>{ue.exports=`{{  var group = it.data,
        avatar = group.avatar,
        gid = group.groupId,
        name = group.name,
        isVerified = group.isVerified,
        isAdmin = group.isAdmin,
        isGroup = group.isPost;
 }}
<div class="groupSetting">
    <!-- Header -->
    <div class="groupTop TxtCenter">
        <div class="groupTopContent ThemeBGColor3 {{= isGroup ? 'pTop25' : 'pTop45 pBottom50' }}">
        {{? isGroup }}
            <div class="groupHeader">
                {{? isAdmin }}
                <div class="groupHead Hand" titlename="{{= _l('\u4FEE\u6539\u5934\u50CF') }}"><img class="Hand groupAvatar adminAvatar circle" src="{{=avatar}}"/></div>
                {{??}}
                <img src="{{=avatar}}" class="groupAvatar circle"/>
                {{?}}
                <div class="groupNameTotal Font16 mTop10">
                    <span class="groupName" title="{{=name}}">{{!name}}</span>
                    <span class="groupIcon icon-official-group Font16 {{= isVerified ? '' : 'Hidden'}}"></span>
                </div>
            </div>
            <ul class="groupTabList">
                <li class="groupInfoTab commItem">{{= _l('\u7FA4\u4FE1\u606F') }}</li>
                <li class="groupMemberTab commItem">{{= _l('\u7FA4\u6210\u5458') }}</li>
                <li class="groupSettingTab commItem">{{= _l('\u7FA4\u8BBE\u7F6E') }}</li>
            </ul>
        {{??}}
            <img src="{{=avatar}}" class="groupAvatar"/>
            <div class="groupNameTotal Font16 mTop10">
                <span class="groupName" title="{{!name}}">{{!name}}</span>
            </div>
        {{?}}
        </div>
    </div>
    <!-- tabCotent -->
    <div class="groupSettingContent">
        <div class="groupInfo Hidden" data-type="info"></div>
        <div class="groupMember Hidden" data-type="member"></div>
        <div class="groupSettings Hidden" data-type="settings"></div>
    </div>
</div>
`},93153:ue=>{ue.exports=`<audio id='sessionNewMsgAudio' controls style="display: none;">
    <source src="/staticfiles/images/session_new_message.mp3" type="audio/wav"/>
    <source src="/staticfiles/images/session_new_message.mp3" type="audio/mp3"/>
    <!--if yet is fuck ie-->
    <object id='sessionNewMsgAudioForIe' type="audio/mpeg" width="200" height="40">
        <param name="src" value="/staticfiles/images/session_new_message.mp3"/>
    </object>
</audio>
`},10837:ue=>{ue.exports=`<audio id='systemNewMsgAudio' controls style="display: none;">
    <source src="/staticfiles/images/system_new_message.mp3" type="audio/wav"/>
    <source src="/staticfiles/images/system_new_message.mp3" type="audio/mp3"/>
    <!--if yet is fuck ie-->
    <object id='systemNewMsgAudioForIe' type="audio/mpeg" width="200" height="40">
        <param name="src" value="/staticfiles/images/system_new_message.mp3"/>
    </object>
</audio>
`},41436:(ue,Ze,u)=>{"use strict";u.d(Ze,{Z:()=>ht});var nt=[{key:"en",value:"English",languageTeam:"English",language:"en_US",path:"/staticfiles/lang/en/mdTranslation.js",code:1},{key:"zh-Hans",value:"\u7B80\u4F53\u4E2D\u6587",languageTeam:"Chinese Simplified",language:"zh_CN",path:"/staticfiles/lang/zh-Hans/mdTranslation.js",code:0},{key:"zh-Hant",value:"\u7E41\u9AD4\u4E2D\u6587",languageTeam:"Chinese Traditional",language:"zh_TW",path:"/staticfiles/lang/zh-Hant/mdTranslation.js",code:3},{key:"ja",value:"\u65E5\u672C\u8A9E",languageTeam:"Japanese",language:"ja",path:"/staticfiles/lang/ja/mdTranslation.js",code:2}];const ht=nt},16400:(ue,Ze,u)=>{"use strict";u.r(Ze),u.d(Ze,{default:()=>vs});var nt=u(93567),ht=u(48388),Kt=u(29914),kt=u.n(Kt),zt=u(38509),at=u(88454),kn=u(66814),St=u(91880),me=u.n(St),rt=u(9818),_t=u(70340),ze=u.n(_t),D=u(88239),Tt=u(63239),ot=u.n(Tt),L=u(33867),we=u(6100),Nt=u(22382),Dt=u(28661),wt=u.n(Dt),X=u(20148),At=u(60385),xe=u.n(At),Pe=u(85105),b=u.n(Pe),F=u(99663),R=u(22600),P=u(49135),A=u(93196),qn=u(77040),Sn=u(94301),_n=u.n(Sn),t=u(67294),Mt=u(50533),Lt=u(93967),T=u.n(Lt),Tn=u(52945),Rt=u.n(Tn),re=u(12424),Nn=u(46593),it=u.n(Nn),vt=u(91088),Pt=u(49365),Yt=u(58064),N=u(15577),ne=u(96486),I=u.n(ne),Dn=function(r,a){return function(e,n){e({type:"MOBILE_FETCH_START"}),it().all([vt.Z.getApp({appId:r,getSection:!0,getLang:!0,isMobile:!0}).then(),vt.Z.checkApp({appId:r},{silent:!0}).then(),window.isPublicApp?void 0:Yt.Z.getTodoListFilter({type:-1}).then()]).then(function(o){var i=(0,re.Z)(o,3),s=i[0],l=i[1],c=i[2],p=I().find(c,{app:{id:r}}),m=localStorage.getItem("appExpandGroupInfo-"+s.id)&&JSON.parse(localStorage.getItem("appExpandGroupInfo-"+s.id))||{};(s.appNaviDisplayType!==m.appNaviDisplayType||s.appNaviStyle!==m.appNaviStyle)&&localStorage.removeItem("appExpandGroupInfo-"+s.id);var f=s.langInfo,v=function(){e({type:"UPDATE_APP_DETAIL",data:{appName:(0,N.T3)(r,r).name||s.name,detail:s,appSection:s.sections,status:l,processCount:p?p.count:0}}),e({type:"MOBILE_FETCH_SUCCESS"})};f&&f.appLangId&&f.version!==window["langVersion-"+r]?Pt.Z.getAppLangDetail({appId:r,appLangId:f.appLangId}).then(function(h){window["langData-"+r]=h.items,window["langVersion-"+r]=f.version,v()}):v(),a&&a(s),e({type:"DEBUG_ROLE_LIST",data:(s.debugRole||{}).selectedRoles||[]})},function(){e({type:"UPDATE_APP_DETAIL",data:{appName:"",detail:[],appSection:[],status:null}}),e({type:"MOBILE_FETCH_SUCCESS"})})}},ea=function(r){var a=r.appId,e=r.projectId;return function(n,o){n({type:"MOBILE_ACTION_ING"}),appManagementApi.addAppApply({appId:a,remark:""}).then(function(i){n({type:"MOBILE_ACTION_END"}),i&&_Modal.alert(_l("\u7533\u8BF7\u5DF2\u63D0\u4EA4"),"",[{text:_l("\u786E\u5B9A"),onPress:function(){}}])})}},Ye=function(r,a,e){return function(n,o){var i=o(),s=i.mobile,l=s.appDetail;vt.Z.markApp({appId:r,isMark:e,projectId:a}).then(function(c){c.data&&(n({type:"UPDATE_APP_DETAIL",data:(0,D.default)({},l,{detail:Rt()(l.detail,{isMarked:e})})}),alert(e?_l("\u6536\u85CF\u6210\u529F"):_l("\u5DF2\u53D6\u6D88\u6536\u85CF")))})}},Qe=function(r,a){return function(e,n){var o=I().get(n(),"mobile.appDetail"),i=o.detail,s=I().pick(i,["projectId","iconColor","navColor","icon","description","name"]);vt.Z.editAppInfo((0,D.default)({},s,{appId:i.id,viewHideNavi:r})).then(function(l){l.data?(alert(_l("\u8BBE\u7F6E\u6210\u529F")),a()):alert(_l("\u8BBE\u7F6E\u5931\u8D25"),2)})}},ge=u(15742),B=u(75915),U=u(41815),fe=u.n(U),oe=u(49611),be=u.n(oe),ke=u(28968),Qt=u(53566),st=u(3482),Jt=u(50043),Ft=u(79221),V=u(86735),K=u(71893),wn=(0,V.Z)([`
  display: flex;
  height: 100%;
  .unusualSkeletonWrap {
    width: 240px;
    height: 100%;
    background-color: #fff;
  }
  .unusualContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 15px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    .imgWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 110px;
      line-height: 110px;
      border-radius: 50%;
      text-align: center;
      background-color: #f5f5f5;
    }
  }
`],[`
  display: flex;
  height: 100%;
  .unusualSkeletonWrap {
    width: 240px;
    height: 100%;
    background-color: #fff;
  }
  .unusualContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 15px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    .imgWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 110px;
      line-height: 110px;
      border-radius: 50%;
      text-align: center;
      background-color: #f5f5f5;
    }
  }
`]),An=(0,V.Z)([`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`],[`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`]),Mn=(0,V.Z)([`
  display: flex;
  width: 130px;
  height: 130px;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 50%;
`],[`
  display: flex;
  width: 130px;
  height: 130px;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 50%;
`]),Ln=K.ZP.div(wn),gt=K.ZP.div(An),Xt=K.ZP.div(Mn),Ae={4:{text:_l("\u5E94\u7528\u6B63\u5728\u5347\u7EA7\u4E2D..."),color:"#4caf50"},10:{text:_l("\u5E94\u7528\u6B63\u5728\u5347\u7EA7\u4E2D..."),color:"#4caf50"},11:{text:_l("\u5E94\u7528\u6B63\u5728\u8FD8\u539F\u4E2D..."),color:"#4caf50"}};function Rn(d){var r=d.appPkg,a=d.showLeftSkeleton,e=a===void 0?!0:a,n=d.isMobile,o=r.currentPcNaviStyle,i=r.appStatus;return n?t.createElement(gt,null,t.createElement(Xt,null,t.createElement("i",{className:"icon-unarchive Gray_9e Font48"})),t.createElement("div",{className:"Gray_bd Font17 mTop20"},Ae[i].text)):t.createElement(Ln,null,e&&o!==1&&t.createElement("div",{className:"unusualSkeletonWrap"},t.createElement(Ft.Z,{active:!1})),t.createElement("div",{className:"unusualContent"},t.createElement("div",{className:"imgWrap mBottom14"},t.createElement("i",{className:"icon-unarchive Font56",style:{color:Ae[i].color}})),t.createElement("div",{className:"Font17 bold"},Ae[i].text)))}var qt=u(62521),ye=u(69288),ta=u(87506),lt=u.n(ta),H=u(15405),Je=u(33126),en=u(24538),tn=(0,V.Z)([`
  display: flex;
  width: 100%;
  .customFieldsContainer {
    width: 100%;
    padding-top: 26px;
    flex: 1;
  }
  .customFormErrorMessage {
  }
`],[`
  display: flex;
  width: 100%;
  .customFieldsContainer {
    width: 100%;
    padding-top: 26px;
    flex: 1;
  }
  .customFormErrorMessage {
  }
`]),Pn=K.ZP.div(tn);function Gt(d){var r=d.setShow,a=d.show,e=d.onChange,n=d.title,o=d.currentId,i=d.classNames,s=d.exAccountId,l=(0,t.useRef)(null),c=(0,t.useState)(d.currentData||[]),p=(0,re.Z)(c,2),m=p[0],f=p[1],v=(0,t.useState)([]),h=(0,re.Z)(v,2),g=h[0],E=h[1];return t.createElement(ye.Z,{title:n||_l("\u4FEE\u6539\u7528\u6237\u4FE1\u606F"),okText:_l("\u4FDD\u5B58"),cancelText:_l("\u53D6\u6D88"),className:T()("userInfoDialog",i),headerClass:"userInfoDialogTitle",bodyClass:"userInfoDialogCon",width:800,onCancel:function(){r(!1)},onOk:function(){var S=l.current.getSubmitData(),G=S.data,O=S.hasError;O||(d.onOk(G,g),r(!1))},visible:a,updateTrigger:"fasle"},t.createElement(Pn,null,t.createElement(en.Z,{disableRules:!0,ref:l,data:m.map(function(k){return(0,D.default)({},k,{size:12})}).filter(function(k){return!["avatar","roleid","status"].includes(k.alias)}),onChange:function(S,G){E(G)}})))}var he=u(35989),nn=u(24607),an=u(23098),Ot=u(70714),Fn=u(85315),je=u(98153),rn=u(83298),on=20,sn=null,na=[_l("\u989C\u8272"),_l("\u80CC\u666F\u56FE")],aa=null,ra=function(r){var a=r.value,e=r.advancedSetting,n=e===void 0?{}:e,o=n.showtype,i=getSwitchItemNames(r),s=a+""=="1";if(o==="1"){var l=s?_.get(i[0],"value"):_.get(i[1],"value");return React.createElement("div",{className:"flexCenter"},React.createElement(_Switch,{checked:s,size:"small"}),l&&React.createElement("span",{className:"mLeft6"},l))}return o==="2"?React.createElement("div",{className:"ming RadioGroup"},i.map(function(c,p){return React.createElement(_Radio,{text:c.value,value:c.key,key:p,checked:""+a===c.key,size:"middle"})})):React.createElement(_Checkbox,{className:"TxtCenter InlineBlock Hand",text:"",checked:s})},Gn=function(r){return[1,2,23].includes(r.type)?(0,rn.Z)((0,D.default)({},r)):t.createElement(je.Z,{cell:(0,D.default)({},r),from:4,mode:"portal"})},ln=function(r){var a;return(a=r.filter(function(e){return portalBaseControl.includes(e.controlId)})).concat.apply(a,_toConsumableArray(r.filter(function(e){return!portalBaseControl.includes(e.controlId)}))).filter(function(e){return!["portal_avatar"].includes(e.controlId)}).map(function(e,n){if(portalBaseControl.includes(e.controlId)&&!["portal_status","portal_role"].includes(e.controlId))return _extends({},e,{row:n,disabled:!0,fieldPermission:""});if(["portal_status","portal_role"].includes(e.controlId)){var o=_extends({},e,{row:n,fieldPermission:""});return e.controlId==="portal_status"?_extends({},o,{options:safeParseArray(e.value).includes("5")?e.options:e.options.filter(function(i){return i.key!=="5"}),disabled:safeParseArray(e.value).includes("5")}):o}else return _extends({},e,{row:n,fieldPermission:""})})},cn=u(12423),On=u(28283),ct=u(59911),ce=u(42185),Ut=u(14260),Un=u.n(Ut),Bn=u(60300),dn=u.n(Bn),Ie=u(86559),Se="https://help.mingdao.com/faq/sms-emali-service-failure",pn={register:-1,friend:0,group:1,task:2,kc:3,project:4,calendar:5,tFolder:6},oa={message:0,voice:1},Is={oldAccount:"old",newAccount:"new",createProject:"create"},ys={login:1,createProject:2,userCardInfo:3},de={accountIsNoExist:-1,failed:0,success:1,fieldRequired:2,failInvalidVerifyCode:3,userInvalid:4,userInfoNotFound:5,userAccountExists:6,inviteLinkExpirate:7,sendMobileMessageFrequent:8,failPasswordValidate:9,projectUserExists:10,freeProjectForbid:11,emailNotNull:12,userFromError:14,accountFrequentLoginError:15,noEfficacyVerifyCode:16,mobileNotNull:17,firstLoginResetPassword:18,passwordOverdue:19,samePassword:20,isLock:21,balanceIsInsufficient:22,accoutRegisterClosed:23},Es=[_l("20\u4EBA\u4EE5\u4E0B"),_l("21-99\u4EBA"),_l("100-499\u4EBA"),_l("500-999\u4EBA"),_l("1000-9999\u4EBA"),_l("10000\u4EBA\u4EE5\u4E0A")],bs=[_l("\u603B\u7ECF\u529E"),_l("\u6280\u672F/IT/\u7814\u53D1"),_l("\u4EA7\u54C1/\u8BBE\u8BA1"),_l("\u9500\u552E/\u5E02\u573A/\u8FD0\u8425"),_l("\u4EBA\u4E8B/\u8D22\u52A1/\u884C\u653F"),_l("\u8D44\u6E90/\u4ED3\u50A8/\u91C7\u8D2D"),_l("\u5176\u4ED6")],Cs=[_l("\u603B\u88C1/\u603B\u7ECF\u7406/CEO"),_l("\u526F\u603B\u88C1/\u526F\u603B\u7ECF\u7406/VP"),_l("\u603B\u76D1/\u4E3B\u7BA1/\u7ECF\u7406"),_l("\u5458\u5DE5/\u4E13\u5458/\u6267\u884C"),_l("\u5176\u4ED6")],xs=[{text:_l("\u6211\u662F\u7528\u6237"),value:0},{text:t.createElement("div",{className:"itemText",style:{height:"auto","overflow-x":"auto","text-overflow":"initial"},dangerouslySetInnerHTML:{__html:_l("\u6211\u662F\u7528\u6237\uFF0C\u5E76\u5BF9HAP %0\u4F19\u4F34\u653F\u7B56%1 \u611F\u5174\u8DA3",`<a class='Bold pLeft5 pRight5 Hand' target="_blank" href="https://www.mingdao.com/partners" >`,"</a>")}}),value:1}],er=(0,V.Z)([`
  .iti {
    width: 100%;
    height: 36px;
    .telInput {
      width: 100%;
      padding-left: 52px !important;
    }
  }
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .hidInput {
    .iti,
    .telInput {
      display: none;
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`],[`
  .iti {
    width: 100%;
    height: 36px;
    .telInput {
      width: 100%;
      padding-left: 52px !important;
    }
  }
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .hidInput {
    .iti,
    .telInput {
      display: none;
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`]),tr=K.ZP.div(er),It=null,nr=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.itiFn=function(){e.mobile&&(e.iti&&e.iti.destroy(),e.iti=Un()(e.mobile,{i18n:{searchPlaceholder:_l("\u641C\u7D22")},customPlaceholder:function(){return emailOrTel},autoPlaceholder:"off",loadUtils:"",initialCountry:_.get(md,"global.Config.DefaultConfig.initialCountry")||"cn",preferredCountries:_.get(md,"global.Config.DefaultConfig.preferredCountries")||["cn"],utilsScript:dn(),separateDialCode:!1}),$(e.mobile).on("onBlur",function(n){return e.onChangeAccount(n)}))},e.isValidEmail=function(n){var o=/^[\u4e00-\u9fa5\w-]+(\.[\u4e00-\u9fa5\w-]+)*@[\u4e00-\u9fa5\w-]+(\.[\u4e00-\u9fa5\w-]+)*\.[\u4e00-\u9fa5\w-]+$/i;return o.test(n)},e.isValid=function(){var n=e.props,o=n.account,i=n.newAccount;if(o)return!0;var s=!0;return e.props.inputType==="phone"?(e.iti.getNumber().replace(/\s*/g,"")?e.iti.isValidNumber()||(s=!1,alert(_l("\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"),2)):(s=!1,alert(_l("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),2)),s):(i.replace(/\s*/g,"")?e.isValidEmail(i)||(s=!1,alert(_l("\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"),2)):(s=!1,alert(_l("\u8BF7\u8F93\u5165\u90AE\u7BB1"),2)),s)},e.handleSendVerifyCode=function(){if(e.isValid()){var n=function(i){if(i.ret!==0){e.setState({verifyCodeLoading:!1});return}else e.setState({verifyCodeLoading:!0});var s={appId:e.props.appId,ticket:i.ticket,randStr:i.randstr,captchaType:md.global.getCaptchaType(),codeType:e.props.type,account:e.props.type===3?e.props.inputType==="phone"?e.iti.getNumber().replace(/\s*/g,""):e.props.newAccount:e.props.account},l=function(p){if(p.actionResult===1)e.countDown();else{e.setState({verifyCodeLoading:!1}),p.actionResult==de.sendMobileMessageFrequent?alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):p.actionResult==de.userInfoNotFound?alert(_l("\u8D26\u53F7\u4E0D\u6B63\u786E"),3):p.actionResult==de.failInvalidVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):p.actionResult==de.balanceIsInsufficient?alert(_l("\u5F53\u524D\u4F01\u4E1A\u8D26\u6237\u4F59\u989D\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u53D1\u9001\u77ED\u4FE1/\u90AE\u4EF6"),2):p.actionResult==de.userAccountExists?alert(_l("\u53D1\u9001\u5931\u8D25\uFF0C\u65B0\u624B\u673A\u53F7\u4E0E\u73B0\u6709\u624B\u673A\u53F7\u4E00\u81F4"),2):alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25"),3);return}};he.Z.sendAccountVerifyCode(s).then(function(c){l(c)})};md.global.getCaptchaType()===1?new Ie.Z(n):new TencentCaptcha(md.global.Config.CaptchaAppId.toString(),n).show()}},e.countDown=function(){var n=30;$(e.code).focus(),It=setInterval(function(){n<=0?(e.setState({verifyCodeText:"",verifyCodeLoading:!1}),clearInterval(It),It=null):(e.setState({verifyCodeText:_l("%0\u79D2\u540E\u91CD\u53D1",n)}),n--)},1e3)},e.onChangeAccount=function(n){var o=e.props,i=o.setNewAccount,s=o.setIsValidNumber,l=o.inputType,c=o.setCountry,p=l==="phone";(p?n.target.value.replace(/[^\d]/g,""):n.target.value.trim()).length<n.target.value.length?(i(p?n.target.value.replace(/[^\d]/g,""):n.target.value.trim()),p&&e.iti.setNumber(""+n.target.value.replace(/[^\d]/g,""))):i(p?e.iti.getNumber():n.target.value.trim()),c(p?"+"+e.iti.getSelectedCountryData().dialCode:""),s(p?e.iti.isValidNumber():e.isValidEmail(n.target.value.trim()))},e.iti=null,e.state={loading:!1,verifyCodeText:"",verifyCodeLoading:!1,focusDiv:""},e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.props.inputType==="phone"&&this.itiFn()}},{key:"componentWillReceiveProps",value:function(e){var n=this;e.type!==this.props.type&&(It&&clearInterval(It),It=null,this.setState({verifyCodeLoading:!1,verifyCodeText:""}),e.type===3&&setTimeout(function(){n.mobile.focus()},500))}},{key:"componentWillUnmount",value:function(){this.iti&&this.iti.destroy()}},{key:"render",value:function(){var e=this,n=this.props,o=n.account,i=n.setCode,s=n.setNewAccount,l=n.setIsValidNumber,c=n.inputType,p=this.state,m=p.verifyCodeLoading,f=p.verifyCodeText;return t.createElement(tr,null,t.createElement("div",{className:T()("mesDiv",{hidInput:!!o,isMobile:(0,N.Q9)()})},t.createElement("span",{className:"title"},o?this.isValidEmail(o)?_l("\u90AE\u7BB1"):_l("\u624B\u673A\u53F7"):c==="phone"?_l("\u65B0\u624B\u673A\u53F7"):_l("\u65B0\u90AE\u7BB1")),t.createElement("span",{className:T()("telBox",{hid:!o})},o),t.createElement("input",{type:"text",className:T()("telInput"),ref:function(h){return e.mobile=h},onBlur:this.onChangeAccount})),t.createElement("div",{className:T()("mesDiv",{isMobile:(0,N.Q9)(),mTop16:!(0,N.Q9)(),mTop6:(0,N.Q9)()})},t.createElement("span",{className:"title"},_l("\u9A8C\u8BC1\u7801")),t.createElement("div",{className:"code"},t.createElement("input",{type:"text",maxLength:"4",className:"loginInput txtLoginCode",value:this.props.code,ref:function(h){return e.code=h},onChange:function(h){i(h.target.value.replace(/[^\d]/g,""))}}),t.createElement("input",{disabled:m,type:"button",className:T()("btn btnSendVerifyCode mLeft16",{btnDisabled:m,btnEnabled:!m}),id:"btnSendVerifyCode",value:f||(m?_l("\u53D1\u9001\u4E2D..."):_l("\u83B7\u53D6\u9A8C\u8BC1\u7801")),onClick:function(h){e.handleSendVerifyCode(oa.message)}}))))}}]),r}(t.Component);const ia=nr;var ar=(0,V.Z)([""],[""]),rr=K.ZP.div(ar);function or(d){var r=d.setShow,a=d.show,e=d.classNames,n=d.appId,o=d.onOk,i=d.type,s=d.baseInfo,l=d.isBind,c=(0,t.useState)(!1),p=(0,re.Z)(c,2),m=p[0],f=p[1],v=(0,t.useState)(""),h=(0,re.Z)(v,2),g=h[0],E=h[1],k=(0,t.useState)(""),S=(0,re.Z)(k,2),G=S[0],O=S[1],J=(0,t.useState)(!1),ee=(0,re.Z)(J,2),se=ee[0],j=ee[1],Ce=(0,t.useState)(""),Ne=(0,re.Z)(Ce,2),Be=Ne[0],tt=Ne[1],De=function(){G?he.Z.checkExAccountVerifyCode({handleType:2,appId:n,verifyCode:G,account:d.account}).then(function(z){if(z.actionResult===1)f(!0),O("");else{z.actionResult==de.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):z.actionResult==de.accountFrequentLoginError?alert(_l("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3);return}}):alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)},Re=function(){if(!g)return alert(i==="phone"?_l("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"):_l("\u8BF7\u8F93\u5165\u90AE\u7BB1"),3);if(!se)return alert(i==="phone"?_l("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"):_l("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1"),3);if(G){var z=null;l?z=he.Z.bindExAccount({appId:n,verifyCode:G,account:Be+g}):z=he.Z.editExAccount({appId:n,verifyCode:G,account:Be+g}),z.then(function(Ee){if(Ee.actionResult===1)o(g);else{Ee.actionResult==de.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):Ee.actionResult==de.failInvalidVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):alert(_l("\u7ED1\u5B9A\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3);return}})}else return alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)};return t.createElement(ye.Z,{title:t.createElement("span",{className:"Bold"},d.isBind?i==="phone"?_l("\u7ED1\u5B9A\u624B\u673A\u53F7"):_l("\u7ED1\u5B9A\u90AE\u7BB1"):i==="phone"?_l("\u4FEE\u6539\u624B\u673A\u53F7"):_l("\u4FEE\u6539\u90AE\u7BB1")),className:T()("userInfoDialog",e),headerClass:"userInfoDialogTitle",bodyClass:"telDialogCon",width:560,footer:t.createElement("div",{className:"footer"},t.createElement(ce.ZP,{type:m?"primary":"link",onClick:function(){O(""),m?(f(!1),O("")):r(!1)}},m?_l("\u4E0A\u4E00\u6B65"):_l("\u53D6\u6D88")),t.createElement(ce.ZP,{type:"primary",onClick:function(){m?Re():De()}},m?_l("\u7ED1\u5B9A"):_l("\u4E0B\u4E00\u6B65"))),onCancel:function(){r(!1)},visible:a},t.createElement(rr,null,t.createElement(ia,{isBind:l,inputType:i,code:G,newAccount:g,setCode:function(z){return O(z)},setNewAccount:function(z){return E(z)},account:m?"":d.account,appId:n,type:m?3:2,setIsValidNumber:j,setCountry:tt})))}var ir=(0,V.Z)([""],[""]),sr=K.ZP.div(ir);function lr(d){var r=d.setShow,a=d.show,e=d.appId,n=d.classNames,o=d.account,i=d.type,s=(0,t.useState)(""),l=(0,re.Z)(s,2),c=l[0],p=l[1],m=function(){c?he.Z.checkExAccountVerifyCode({handleType:1,appId:e,verifyCode:c,account:o}).then(function(v){if(v.actionResult===1)ye.Z.confirm({title:t.createElement("span",{className:"Font17 Bold"},_l("\u60A8\u662F\u5426\u786E\u8BA4\u6CE8\u9500\u8D26\u53F7\uFF1F")),description:_l("\u8D26\u53F7\u4E00\u65E6\u6CE8\u9500\u5C06\u65E0\u6CD5\u767B\u5F55\u5E73\u53F0\uFF0C\u4E14\u4F1A\u89E3\u9664\u4E0E\u7B2C\u4E09\u65B9\u8D26\u53F7\u7684\u7ED1\u5B9A\u5173\u7CFB\u3001\u8EAB\u4EFD\u3001\u8D26\u53F7\u4FE1\u606F\u7B49\u5C06\u88AB\u6E05\u7A7A\u4E14\u65E0\u6CD5\u627E\u56DE"),okText:_l("\u6CE8\u9500"),buttonType:"danger",className:T()("userInfoDialog",n),onOk:function(){he.Z.editExAccountCancel({appId:e}).then(function(g){if(g.actionResult===1){window.currentLeave=!0,(0,Ot.Gs)(),window.localStorage.removeItem("PortalLoginInfo-"+e),window.localStorage.removeItem("LoginCheckList");var E=""+location.origin+(window.subPath||"")+"/app/"+e;location.href=d.url||E}else g.actionResult==de.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):g.actionResult==de.accountFrequentLoginError?alert(_l("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):alert(_l("\u6CE8\u9500\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3)})}});else{v.actionResult==de.noEfficacyVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001"),3):v.actionResult==de.accountFrequentLoginError?alert(_l("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3);return}}):alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)};return t.createElement(ye.Z,{title:_l("\u6CE8\u9500\u8D26\u6237"),okText:_l("\u4E0B\u4E00\u6B65"),cancelText:_l("\u53D6\u6D88"),className:T()("userInfoDialog",n),headerClass:"userInfoDialogTitle",bodyClass:"delDialogCon",width:560,onCancel:function(){r(!1)},onOk:function(){c?m():alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"),3)},visible:a},t.createElement(sr,null,t.createElement(ia,{inputType:i,setCode:function(v){return p(v)},code:c,account:d.account,type:1,appId:e})))}var cr=u(93002),Me=u(15029),dr=u(66344),pr=(0,V.Z)([`
  margin-top: 20px;
  margin-bottom: -2px;
  margin-left: -2px;
  margin-right: -2px;
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telPwd,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      width: 100%;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`],[`
  margin-top: 20px;
  margin-bottom: -2px;
  margin-left: -2px;
  margin-right: -2px;
  .isMobile {
    display: block !important;
    .title {
      width: 100%;
      display: block;
    }
    .telBox,
    .telInput {
      flex: initial;
      width: 100%;
      display: block;
    }
    .txtLoginCode {
    }
  }
  .mesDiv {
    display: flex;
    width: 100%;
    .title {
      width: 100px;
      min-width: 100px;
      font-weight: 600;
      line-height: 36px;
    }
    .txtLoginCode,
    .telBox,
    .telPwd,
    .telInput {
      flex: 1;
      height: 36px;
      background: #fff;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 3px;
      padding: 0 12px;
      line-height: 36px;
      width: 100%;
      &.telBox {
        background: #f8f8f8;
      }
      &.hid {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
      }
    }
    .code {
      flex: 1;
      display: flex;
    }
    .btnSendVerifyCode {
      width: 130px;
      height: 36px;
      background: #2196f3;
      opacity: 1;
      border-radius: 3px;
      border: 0;
      color: #fff;
      &.btnEnabled {
        background-color: #2196f3;
        cursor: pointer;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }

      &.btnEnabled:hover {
        background-color: #1565c0;
        -webkit-transition: background-color 0.5s;
        transition: background-color 0.5s;
      }
      &.btnDisabled {
        background-color: #ccc;
        cursor: default;
      }
    }
  }
`]),ur=(0,V.Z)([""],[""]),mr=K.ZP.div(pr),fr=K.ZP.div(ur),Hn=null;function hr(d){var r=d.setShow,a=d.show,e=d.classNames,n=d.appId,o=d.account,i=d.onOk,s=(0,t.useState)(""),l=(0,re.Z)(s,2),c=l[0],p=l[1],m=(0,cr.Z)({verifyCodeText:"",verifyCodeLoading:!1,sending:!1,psd:""}),f=(0,re.Z)(m,2),v=f[0],h=v.verifyCodeText,g=v.verifyCodeLoading,E=v.sending,k=v.psd,S=f[1],G=window,O=G.md,J=O===void 0?{}:O,ee=J.global,se=ee===void 0?{}:ee,j=se.SysSettings,Ce=j===void 0?{}:j,Ne=Ce.passwordRegex,Be=Ce.passwordRegexTip,tt=(0,t.useRef)(),De=function(te){return dr.Z.isPasswordValid(te,Ne)},Re=function(te){var Vt=te.accountResult;switch(Vt){case 1:alert(_l("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F\uFF01"),"1",3e3,function(){i()}),S({sending:!1}),r(!1);break;case-1:alert(_l("\u8BE5\u7528\u6237\u4E0D\u5B58\u5728\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u5BC6\u7801"),3),S({sending:!1});break;case-3:alert(Be||_l("\u8BF7\u8F93\u51658-20\u4F4D\uFF0C\u9700\u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57"),3),S({sending:!1});break;case-5:alert(_l("\u524D\u540E\u5BC6\u7801\u4E00\u81F4!"),3),S({sending:!1});break;case 20:alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF!"),3),S({sending:!1});break;case 21:case 22:le();break;case 24:var He=te.state?Math.ceil(te.state/60):20;alert(_l("\u5BC6\u7801\u4FEE\u6539\u6B21\u6570\u8FC7\u591A\u88AB\u9501\u5B9A\uFF0C\u8BF7 %0 \u5206\u949F\u540E\u518D\u8BD5\uFF0C\u6216 \u91CD\u7F6E\u5BC6\u7801",He),3),S({sending:!1});break;case 23:alert(_l("\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001!"),3),S({sending:!1});break;default:alert(_l("\u4FEE\u6539\u5BC6\u7801\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5!"),3),S({sending:!1});break}},C=function(){var te=30;$(tt).focus(),Hn=setInterval(function(){te<=0?(S({verifyCodeText:"",verifyCodeLoading:!1}),clearInterval(Hn),Hn=null):(S({verifyCodeText:_l("%0\u79D2\u540E\u91CD\u53D1",te)}),te--)},1e3)},z=function(){var te=function(He){if(He.ret!==0){S({verifyCodeLoading:!1});return}else S({verifyCodeLoading:!0});var xn={appId:d.appId,ticket:He.ticket,randStr:He.randstr,captchaType:J.global.getCaptchaType(),account:d.account,codeType:4},gs=function(xt){if(xt.actionResult===1)C();else{S({verifyCodeLoading:!1}),xt.actionResult==de.sendMobileMessageFrequent?alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),3):xt.actionResult==de.userInfoNotFound?alert(_l("\u8D26\u53F7\u4E0D\u6B63\u786E"),3):xt.actionResult==de.failInvalidVerifyCode?alert(_l("\u9A8C\u8BC1\u7801\u9519\u8BEF"),3):xt.actionResult==de.balanceIsInsufficient?alert(_l("\u5F53\u524D\u4F01\u4E1A\u8D26\u53F7\u4F59\u989D\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u53D1\u9001\u77ED\u4FE1"),2):xt.actionResult==de.userAccountExists?alert(_l("\u53D1\u9001\u5931\u8D25\uFF0C\u65B0\u624B\u673A\u53F7\u4E0E\u73B0\u6709\u624B\u673A\u53F7\u4E00\u81F4"),2):alert(_l("\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25"),3);return}};he.Z.sendAccountVerifyCode(xn).then(function(qa){gs(qa)})};J.global.getCaptchaType()===1?new Ie.Z(te):new TencentCaptcha(J.global.Config.CaptchaAppId.toString(),te).show()},Ee=function(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!c)return alert(_l("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"),3);if(!k)return alert(_l("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF01"),3);if(!De(k))return alert(Be||_l("\u8BF7\u8F93\u51658-20\u4F4D\uFF0C\u9700\u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57"),3);if(!E){var Vt=te.ticket,He=te.randstr;he.Z.findPwd({account:(0,N.HI)(o),password:(0,N.HI)(k),appId:n,verifyCode:c,captchaType:J.global.getCaptchaType(),ticket:Vt,randStr:He}).then(function(xn){(0,Me.gx)((0,D.default)({},xn,{appId:n})),Re(xn)})}},le=function(){var te=function(){var He=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};He.ret===0&&doFindPwd(Rt()({},He,{captchaType:J.global.getCaptchaType()}))};J.global.getCaptchaType()===1?new Ie.Z(te):new TencentCaptcha(J.global.Config.CaptchaAppId.toString(),te).show()};return t.createElement(ye.Z,{title:t.createElement("span",{className:"Bold"},_l("\u8BBE\u7F6E\u5BC6\u7801")),className:T()("userInfoDialog",e),headerClass:"userInfoDialogTitle",bodyClass:"telDialogCon",width:560,footer:t.createElement("div",{className:"footer"},t.createElement(ce.ZP,{type:"link",onClick:function(){r(!1)}},_l("\u53D6\u6D88")),t.createElement(ce.ZP,{type:"primary",onClick:function(){Ee()}},_l("\u786E\u5B9A"))),onCancel:function(){r(!1)},visible:a},t.createElement(fr,null,t.createElement(mr,null,t.createElement("div",{className:T()("mesDiv",{isMobile:(0,N.Q9)()})},t.createElement("span",{className:"title"},_l("\u8D26\u53F7")),t.createElement("span",{className:T()("telBox")},d.account)),t.createElement("div",{className:T()("mesDiv ",{isMobile:(0,N.Q9)(),mTop16:!(0,N.Q9)(),mTop6:(0,N.Q9)()})},t.createElement("span",{className:"title"},_l("\u9A8C\u8BC1\u7801")),t.createElement("div",{className:"code"},t.createElement("input",{type:"text",maxLength:"4",className:"loginInput txtLoginCode",value:c,ref:tt,onChange:function(te){p(te.target.value.replace(/[^\d]/g,""))}}),t.createElement("input",{disabled:g,type:"button",className:T()("btn btnSendVerifyCode mLeft16",{btnDisabled:g,btnEnabled:!g}),id:"btnSendVerifyCode",value:h||(g?_l("\u53D1\u9001\u4E2D..."):_l("\u83B7\u53D6\u9A8C\u8BC1\u7801")),onClick:function(te){z(oa.message)}}))),t.createElement("div",{className:T()("mesDiv",{isMobile:(0,N.Q9)(),mTop16:!(0,N.Q9)(),mTop6:(0,N.Q9)()})},t.createElement("span",{className:"title"},_l("\u65B0\u5BC6\u7801")),t.createElement("input",{type:"password",className:T()("telPwd"),value:k,onChange:function(te){S({psd:te.target.value.trim()})}})))))}var Y=u(25265),Xe=u(14440),We=u(73935),vr=function(d){(0,A.default)(r,d);function r(a){return(0,F.default)(this,r),(0,P.default)(this,(r.__proto__||b()(r)).call(this,a))}return(0,R.default)(r,[{key:"render",value:function(){return t.createElement("div",{className:"logoutMask"},t.createElement("div",{className:"logoutModal z-depth-2 card"},t.createElement("div",null,_l("\u767B\u5F55\u72B6\u6001\u5DF2\u8FC7\u671F")),t.createElement("div",{className:"logoutBtns"},t.createElement(ce.ZP,{type:"link",onClick:function(){Ir()}},_l("\u5DF2\u767B\u5F55")),t.createElement(ce.ZP,{type:"primary",onClick:function(){location.href=(window.subPath||"")+"/login?ReturnUrl="+encodeURIComponent(location.href)}},_l("\u91CD\u65B0\u767B\u5F55")))))}}]),r}(t.Component),gr=function(){var r=document.createElement("DIV");r.className="logoutWrapper",document.body.appendChild(r),(0,We.render)(t.createElement(vr,null),document.querySelector(".logoutWrapper"))},Ir=function(){var r=document.querySelector(".logoutWrapper");(0,We.unmountComponentAtNode)(r),$(r).remove()};const yr=gr;var Er=u(30429),br=u(93153),Cr=u.n(br),xr=u(10837),kr=u.n(xr),Sr=function(){$(Cr()).appendTo("html > body"),$(kr()).appendTo("html > body"),Dr.call(this),Tr.call(this),_r.call(this),Nr.call(this),wr.call(this),IM.socket.on("logout message",function(r){var a=r.sessionId;((0,Ot.qz)()||"")===a&&($(".mdAlertDialog").remove(),setTimeout(function(){window.currentLeave||yr()},200))})},_r=function(){var r=this;IM.socket.on("new group",function(a){r.props.dispatch(Y.Ij(a))}),IM.socket.on("new group message",function(a){r.props.dispatch(Y.DL(a))}),IM.socket.on("group shake",function(a){r.props.dispatch(Y.gz(a))}),IM.socket.on("group member added",function(a){var e=a.id,n=a.users;r.props.dispatch(Y.ED(e,n.length))}),IM.socket.on("group member removed",function(a){var e=a.id;r.props.dispatch(Y.ED(e,-1))}),IM.socket.on("removed from group",function(a){r.props.dispatch(Y.ii(a))}),IM.socket.on("can add member",function(a){var e=a.gid,n=a.can;r.props.dispatch(Y.Gv(e,!n))}),IM.socket.on("group admin added",function(a){var e=a.gid,n=a.addAid,o=md.global.Account.accountId;o===n&&r.props.dispatch(Y.aq(e,!0))}),IM.socket.on("group admin removed",function(a){var e=a.gid,n=a.removedAid,o=md.global.Account.accountId;o===n&&r.props.dispatch(Y.aq(e,!1))}),IM.socket.on("new withdraw groupmessage",function(a){r.props.dispatch(Y.hA(a))}),IM.socket.on("set group notice",function(a){var e=a.isPush,n=a.gid;r.props.dispatch(Y.Ip(n,e)),alert(e?_l("\u5DF2\u5173\u95ED\u6D88\u606F\u514D\u6253\u6270"):_l("\u5DF2\u5F00\u542F\u6D88\u606F\u514D\u6253\u6270"))})},Tr=function(){var r=this;IM.socket.on("new message",function(a){r.props.dispatch(Y.jS(a))}),IM.socket.on("shake shake",function(a){r.props.dispatch(Y.f8(a))}),IM.socket.on("new withdraw usermessage",function(a){var e=md.global.Account.accountId===a.from?a.to:a.from;r.props.dispatch(Y.O1(e,a)),r.props.dispatch(Y.UE({id:e,addMsg:a.msg.con}))})},Nr=function(){var r=this;IM.socket.on("new notify",function(a){r.props.dispatch(Y.Xu(a))})},Dr=function(){var r=this,a="chat",e=5e3,n=0,o=!0,i=1,s=function f(){Xe.Z.close(a),Xe.Z.success({key:a,title:_l("\u7F51\u7EDC\u5DF2\u8FDE\u63A5"),duration:2}),IM.socket.off("reconnect",f),IM.socket.off("reconnect_failed",l)},l=function f(){Xe.Z.close(a),Xe.Z.error({key:a,title:_l("\u7F51\u7EDC\u8FDE\u63A5\u5DF2\u65AD\u5F00"),duration:null,description:t.createElement("div",{className:"Gray_9e"},_l("\u91CD\u8FDE\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5237\u65B0\u9875\u9762")),btnList:[{text:_l("\u5237\u65B0"),onClick:function(){location.reload()}}]}),IM.socket.off("reconnect",s),IM.socket.off("reconnect_failed",f)},c=function(){Xe.Z.error({key:a,title:_l("\u7F51\u7EDC\u8FDE\u63A5\u5DF2\u65AD\u5F00"),loading:!0,className:"closable",duration:null,description:t.createElement("div",{className:"ThemeColor TxtRight"},_l("\u6B63\u5728\u91CD\u65B0\u8FDE\u63A5"))}),IM.socket.on("reconnect",s),IM.socket.on("reconnect_failed",l)},p=function(){Xe.Z.close("connectedError"),c()},m=null;IM.socket.on("error",function(f){f&&f.code==="parser error"||o&&(o=!1,p())}),IM.socket.on("disconnect",function(){n=Date.now(),m=setTimeout(function(){o&&(o=!1,p()),(0,Er.Fh)("",[])},e)}),IM.socket.on("reconnecting",function(){i>1||i++,window.localStorage.getItem("websocket")=="polling"&&(IM.socket.io.opts.transports=["polling"])}),IM.socket.on("reconnect",function(){Date.now()-n<e&&clearTimeout(m),i>1&&(o=!0,setTimeout(function(){Xe.Z.close(a),Xe.Z.close("connectedError")},3e3),r.props.dispatch(Y.bi()))})},wr=function(){var r=this;IM.socket.on("session removed",function(a){r.props.dispatch(Y.Yo(a))}),IM.socket.on("clear unread",function(a){r.props.dispatch(Y.AS(a))}),IM.socket.on("clear notification",function(a){r.props.dispatch(Y.hS(a))}),IM.socket.on("operate",function(a){r.props.dispatch(Y.es(a))}),IM.socket.on("new sticky on top",function(a){r.props.dispatch(Y.y1(a))}),IM.socket.on("clear all unread",function(a){r.props.dispatch(Y.mv())}),IM.socket.on("new silence message",function(a){var e=a.isSilent;r.props.dispatch(Y.QI(a)),alert(e?_l("\u5DF2\u5F00\u542F\u6D88\u606F\u514D\u6253\u6270"):_l("\u5DF2\u5173\u95ED\u6D88\u606F\u514D\u6253\u6270"))})},sa=u(69277),Ar=u(45697),M=u.n(Ar),x=u(88106),_e,Fe,Ge,yt,Et,dt,qe,pt,Oe,Ue,Mr={UNREAD:1,ALL:2},w={All:"0",SystemMessage:"1",PostAll:"2",PostMentionedUser:"3",PostMentionedGroup:"4",PostReply:"5",TaskAll:"6",TaskMentioned:"7",TaskReply:"8",TaskMessage:"9",CalendarMessage:"10",FolderMention:"11",FolderComment:"12",FolderSystem:"13",KCMessage:"14",CalendarMentioned:"15",CalendarReply:"16",CalendarComment:"30",CalendarAll:"17",KCMentioned:"18",KCReply:"19",KCAll:"20",HrAll:"21",ApprovalMessage:"22",ApprovalMentioned:"23",ApprovalReply:"24",ApprovalAll:"25",AttendanceMessage:"26",AttendanceMentioned:"27",AttendanceReply:"28",AttendanceAll:"29",DossierMessage:"31",DossierMentioned:"32",DossierReply:"33",DossierAll:"34",WorkSheetMessage:"35",WorkSheetMentioned:"36",WorkSheetReply:"37",WorkSheetComment:"38",WorkSheetRowMessage:"39",WorkSheetRowMentioned:"40",WorkSheetRowReply:"41",WorkSheetRowComment:"42",WorkSheetAll:"43",WorkFlowAll:"44"},y=(_e={All:-1,SystemMessage:1,UserMessage:2,CalendarMessage:3,TaskMessage:4,PostMentionedUser:5,PostMentionedGroup:6,PostCommentMentionedUser:7,PostCommentMentionedGroup:8,PostReply:9,TaskComment:10,TaskMentioned:11,TaskReply:12,KCMessage:13,FolderMessage:14,FolderMentioned:15,FolderReply:16,FolderComment:17,ApprovalMessage:18,ApprovalMentioned:19,ApprovalReply:20,ApprovalComment:21,AttendanceMessage:22,AttendanceMentioned:23,AttendanceReply:24,AttendanceComment:25,CalendarMentioned:26,CalendarReply:27,CalendarComment:28,KCMentioned:29,KCReply:30,KCComment:31,DossierMessage:32,DossierMentioned:33,DossierReply:34},(0,x.default)(_e,"DossierMentioned",35),(0,x.default)(_e,"WorkSheetMessage",36),(0,x.default)(_e,"WorkSheetMentioned",37),(0,x.default)(_e,"WorkSheetReply",38),(0,x.default)(_e,"WorkSheetComment",39),(0,x.default)(_e,"WorkSheetRowMessage",40),(0,x.default)(_e,"WorkSheetRowMentioned",41),(0,x.default)(_e,"WorkSheetRowReply",42),(0,x.default)(_e,"WorkSheetRowComment",43),(0,x.default)(_e,"WorkFlowMessage",44),_e),Z={POST:"post",CALENDAR:"calendar",SYSTEM:"system",TASK:"task",KC:"knowledge",HR:"hr",WORKSHEET:"worksheet",WORKFLOW:"workflow"},Lr=(Fe={},(0,x.default)(Fe,Z.POST,_l("\u52A8\u6001")),(0,x.default)(Fe,Z.CALENDAR,_l("\u65E5\u7A0B")),(0,x.default)(Fe,Z.SYSTEM,_l("\u7CFB\u7EDF")),(0,x.default)(Fe,Z.TASK,_l("\u4EFB\u52A1")),(0,x.default)(Fe,Z.KC,_l("\u77E5\u8BC6")),(0,x.default)(Fe,Z.HR,_l("\u4EBA\u4E8B")),(0,x.default)(Fe,Z.WORKSHEET,_l("\u5DE5\u4F5C\u8868")),(0,x.default)(Fe,Z.WORKFLOW,_l("\u5DE5\u4F5C\u6D41")),Fe),Rr=(Ge={},(0,x.default)(Ge,Z.POST,_l("\u52A8\u6001\u6D88\u606F")),(0,x.default)(Ge,Z.CALENDAR,_l("\u65E5\u7A0B\u6D88\u606F")),(0,x.default)(Ge,Z.SYSTEM,_l("\u7CFB\u7EDF\u6D88\u606F")),(0,x.default)(Ge,Z.TASK,_l("\u4EFB\u52A1\u6D88\u606F")),(0,x.default)(Ge,Z.KC,_l("\u77E5\u8BC6\u6D88\u606F")),(0,x.default)(Ge,Z.HR,_l("\u4EBA\u4E8B\u6D88\u606F")),(0,x.default)(Ge,Z.WORKSHEET,_l("\u5E94\u7528\u6D88\u606F")),(0,x.default)(Ge,Z.WORKFLOW,_l("\u5DE5\u4F5C\u6D41\u6D88\u606F")),Ge),Pr=(Oe={},(0,x.default)(Oe,Z.POST,(yt={},(0,x.default)(yt,w.PostAll,_l("\u5168\u90E8\u6D88\u606F")),(0,x.default)(yt,w.PostReply,_l("\u56DE\u590D\u6211\u7684")),(0,x.default)(yt,w.PostMentionedUser,_l("\u63D0\u5230\u6211\u7684")),(0,x.default)(yt,w.PostMentionedGroup,_l("\u63D0\u5230\u6211\u7684\u7FA4\u7EC4")),yt)),(0,x.default)(Oe,Z.TASK,(Et={},(0,x.default)(Et,w.TaskAll,_l("\u5168\u90E8\u6D88\u606F")),(0,x.default)(Et,w.TaskReply,_l("\u56DE\u590D\u6211\u7684")),(0,x.default)(Et,w.TaskMentioned,_l("\u63D0\u5230\u6211\u7684")),(0,x.default)(Et,w.TaskMessage,_l("\u7CFB\u7EDF\u6D88\u606F")),Et)),(0,x.default)(Oe,Z.CALENDAR,(dt={},(0,x.default)(dt,w.CalendarAll,_l("\u5168\u90E8\u6D88\u606F")),(0,x.default)(dt,w.CalendarMentioned,_l("\u63D0\u5230\u6211\u7684")),(0,x.default)(dt,w.CalendarReply,_l("\u56DE\u590D\u6211\u7684")),(0,x.default)(dt,w.CalendarMessage,_l("\u7CFB\u7EDF\u6D88\u606F")),(0,x.default)(dt,w.CalendarComment,_l("\u666E\u901A\u8BA8\u8BBA")),dt)),(0,x.default)(Oe,Z.HR,(qe={},(0,x.default)(qe,w.HrAll,_l("\u5168\u90E8\u6D88\u606F")),(0,x.default)(qe,w.ApprovalMessage,_l("\u5BA1\u6279\u7CFB\u7EDF\u6D88\u606F")),(0,x.default)(qe,w.ApprovalReply,_l("\u5BA1\u6279\u56DE\u590D\u6211\u7684")),(0,x.default)(qe,w.ApprovalMentioned,_l("\u5BA1\u6279\u63D0\u5230\u6211\u7684")),(0,x.default)(qe,w.AttendanceMessage,_l("\u8003\u52E4\u7CFB\u7EDF\u6D88\u606F")),(0,x.default)(qe,w.DossierMessage,_l("\u4EBA\u4E8B\u7CFB\u7EDF\u6D88\u606F")),qe)),(0,x.default)(Oe,Z.SYSTEM,(0,x.default)({},w.SystemMessage,_l("\u5168\u90E8\u6D88\u606F"))),(0,x.default)(Oe,Z.KC,(0,x.default)({},w.KCAll,_l("\u5168\u90E8\u6D88\u606F"))),(0,x.default)(Oe,Z.WORKSHEET,(pt={},(0,x.default)(pt,w.WorkSheetAll,_l("\u5168\u90E8\u6D88\u606F")),(0,x.default)(pt,w.WorkSheetMentioned,_l("\u63D0\u5230\u6211\u7684")),(0,x.default)(pt,w.WorkSheetReply,_l("\u56DE\u590D\u6211\u7684")),(0,x.default)(pt,w.WorkSheetMessage,_l("\u7CFB\u7EDF\u6D88\u606F")),(0,x.default)(pt,w.WorkSheetComment,_l("\u666E\u901A\u8BA8\u8BBA")),pt)),(0,x.default)(Oe,Z.WORKFLOW,(0,x.default)({},w.WorkFlowAll,_l("\u5168\u90E8\u6D88\u606F"))),Oe),Zn=(Ue={},(0,x.default)(Ue,Z.POST,[w.PostAll,w.PostReply,w.PostMentionedUser,w.PostMentionedGroup]),(0,x.default)(Ue,Z.TASK,[w.TaskAll,w.TaskReply,w.TaskMentioned,w.TaskMessage]),(0,x.default)(Ue,Z.CALENDAR,[w.CalendarAll,w.CalendarMentioned,w.CalendarReply,w.CalendarMessage,w.CalendarComment]),(0,x.default)(Ue,Z.HR,[w.HrAll,w.ApprovalMessage,w.ApprovalReply,w.ApprovalMentioned,w.AttendanceMessage,w.DossierMessage]),(0,x.default)(Ue,Z.SYSTEM,[w.SystemMessage]),(0,x.default)(Ue,Z.KC,[w.KCAll]),(0,x.default)(Ue,Z.WORKSHEET,[w.WorkSheetAll,w.WorkSheetMentioned,w.WorkSheetReply,w.WorkSheetMessage]),(0,x.default)(Ue,Z.WORKFLOW,[w.WorkFlowAll]),Ue),ks={SCORE:"493cfed8-de7b-413d-b14c-bf7c235925d5"},Ss=u(59768),Fr=u(82891),un=u(31546),la=u(29314),_s=u(6538),Gr=u(14321),Or=u(61987),Ts=u(83839),Ur=u(43792),Br=u(30381),ie=u.n(Br),Hr=Gr.default.RangePicker,ca=8,jn=[{name:_l("\u4ECA\u5929"),value:1,format:function(){return[ie()().format("YYYY-MM-DD"),ie()().add(1,"days").format("YYYY-MM-DD")]}},{name:_l("\u6628\u5929"),value:2,format:function(){return[ie()().add(-1,"days").format("YYYY-MM-DD"),ie()().format("YYYY-MM-DD")]}},{name:_l("\u524D\u5929"),value:3,format:function(){return[ie()().add(-2,"days").format("YYYY-MM-DD"),ie()().add(-1,"days").format("YYYY-MM-DD")]}},{name:_l("\u672C\u5468"),value:4,format:function(){return[ie()().startOf("week").format("YYYY-MM-DD"),ie()().endOf("week").add(1,"days").format("YYYY-MM-DD")]}},{name:_l("\u4E0A\u5468"),value:5,format:function(){return[ie()().startOf("week").subtract("week",1).format("YYYY-MM-DD"),ie()().endOf("week").subtract("week",1).add(1,"days").format("YYYY-MM-DD")]}},{name:_l("\u672C\u6708"),value:6,format:function(){return[ie()().startOf("month").format("YYYY-MM-DD"),ie()().endOf("month").endOf("month").add(1,"days").format("YYYY-MM-DD")]}},{name:_l("\u4E0A\u6708"),value:7,format:function(){return[ie()().startOf("month").subtract("month",1).format("YYYY-MM-DD"),ie()().endOf("month").subtract("month",1).endOf("month").add(1,"days").format("YYYY-MM-DD")]}},{name:_l("\u81EA\u5B9A\u4E49\u65E5\u671F"),value:ca}],Zr=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.handleSave=function(){var n=e.state,o=n.userValue,i=n.timeLevel,s=n.time,l=s||[null,null],c=(0,re.Z)(l,2),p=c[0],m=c[1];e.props.onChange({user:o,startTime:p,endTime:m,timeName:i?I().find(jn,{value:i}).name:null})},e.handlePickUser=function(n){var o=e,i=[md.global.Account.accountId],s="",l={accountId:md.global.Account.accountId,fullname:_l("\u6211\u81EA\u5DF1"),avatar:md.global.Account.avatar};(0,Or.ZP)(n.target,{showMoreInvite:!1,isTask:!1,selectRangeOptions:!1,filterAccountIds:i,minHeight:400,container:$(".InboxFilterWrapper"),offset:{top:16,left:0},zIndex:10001,SelectUserSettings:{unique:!0,projectId:s,filterAccountIds:i,callback:o.handleChangeUser},selectCb:o.handleChangeUser})},e.handleEmptyUser=function(){var n=e.state.time;n?e.setState({userValue:null},e.handleSave):e.props.onChange(null)},e.handleChangeUser=function(n){e.setState({userValue:n[0]},e.handleSave)},e.handleChangeTime=function(n){var o=e.state.timeLevel,i=I().find(jn,{value:o}),s=i.format,l=s?s():n;l&&e.setState({time:l},e.handleSave)},e.state={userValue:null,timeLevel:null,time:null},e}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){I().isEmpty(e.filter)&&this.setState({userValue:null,timeLevel:null,time:null})}},{key:"render",value:function(){var e=this,n=this.props.inboxType,o=this.state,i=o.userValue,s=o.timeLevel;return t.createElement("div",{className:"InboxFilterWrapper"},!["workflow"].includes(n)&&t.createElement("div",{className:"flexRow valignWrapper mBottom20 userItemWrapper"},t.createElement("div",{className:"Gray_75 Font14 mRight15 userLabel"},_l("\u56DE\u590D\u3001\u63D0\u5230\u6211\u7684\u4EBA")),i?t.createElement("div",{className:"userWrapper flexRow valignWrapper"},t.createElement("img",{src:i.avatar}),t.createElement("div",{className:"name flexRow valignWrapper"},t.createElement("span",{className:"Font13"},i.fullname),t.createElement(L.Z,{onClick:this.handleEmptyUser,className:"Gray_9e Font13 pointer",icon:"close"}))):t.createElement(L.Z,{onClick:this.handlePickUser,className:"flexRow valignWrapper pointer",icon:"plus"})),t.createElement("div",{className:"flexRow"},t.createElement("div",{className:"Gray_75 Font14 mRight15 timeLabel"},_l("\u65F6\u95F4")),t.createElement("div",{className:"flexColumn flex"},t.createElement("div",{className:"flexRow valignWrapper flex dateScope"},jn.map(function(l,c){return t.createElement("div",{key:c,className:T()("item pointer",{active:l.value===s}),onClick:function(){l.value===s?e.setState({timeLevel:null,time:null},function(){e.state.userValue?e.handleSave():e.props.onChange(null)}):e.setState({timeLevel:l.value},e.handleChangeTime)}},l.name)})),s===ca&&t.createElement(Hr,{allowClear:!1,suffixIcon:null,locale:Ur.Z,format:"YYYY-MM-DD",onChange:function(c){var p=(0,re.Z)(c,2),m=p[0],f=p[1];e.handleChangeTime([m.format("YYYY-MM-DD"),ie()(f.format("YYYY-MM-DD")).add(1,"days").format("YYYY-MM-DD")])}}))))}}]),r}(t.Component),jr=u(72992),da,pa,Wr=(pa=da=function(d){(0,A.default)(r,d);function r(){var a,e,n,o;(0,F.default)(this,r);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(e=(n=(0,P.default)(this,(a=r.__proto__||b()(r)).call.apply(a,[this].concat(s))),n),n.state={settingVisible:!1},n.handleClick=function(c){var p=n.props,m=p.inboxFavorite,f=p.changeFaviorite;m!==c&&f(c)},n.renderMenu=function(){var c=n.props.currentSession,p=c.top_info,m=c.type,f=c.isPush,v=c.isSilent,h=p?p.isTop:!1,g="isPush"in c||"isSilent"in c,E=m===2?f:!v;return t.createElement("div",{className:"ChatPanel-addToolbar-menu"},t.createElement("div",{className:"menuItem ThemeBGColor3",onClick:n.handleStick.bind(n)},t.createElement("i",{className:"icon-set_top"}),t.createElement("div",{className:"menuItem-text"},h?_l("\u53D6\u6D88\u7F6E\u9876"):_l("\u7F6E\u9876"))),g&&t.createElement("div",{className:"menuItem ThemeBGColor3",onClick:n.handleUpdatePushNotice.bind(n)},t.createElement(L.Z,{icon:E?"notifications_off":"notifications",className:"Font16"}),t.createElement("div",{className:"menuItem-text"},E?_l("\u6D88\u606F\u514D\u6253\u6270"):_l("\u5141\u8BB8\u63D0\u9192"))))},e),(0,P.default)(n,o)}return(0,R.default)(r,[{key:"renderOverlay",value:function(){var e=this.props,n=e.filter,o=e.inboxType;return t.createElement(Zr,{inboxType:o,filter:n,onChange:this.props.changeInboxFilter})}},{key:"renderDropDown",value:function(){var e=this,n=this.props,o=n.type,i=n.dropdownData,s=n.inboxType,l=n.changeType,c=I().map(i,function(p){var m=Pr[s];return{text:m[p],value:p}});return c.length<=1?t.createElement("span",null,c[0].text):t.createElement(un.Z,{value:o,data:c,onChange:function(m){e.handleClick(!1),l(m)}})}},{key:"handleTriggerChange",value:function(e){this.setState({settingVisible:e})}},{key:"handleStick",value:function(){var e=this,n=this.props.currentSession,o=n.type,i=n.value,s=n.top_info,l=s?s.isTop:!1;this.props.dispatch(Y.Lg({type:o,value:i,isTop:!l})),setTimeout(function(){e.handleTriggerChange(!1)},500)}},{key:"handleUpdatePushNotice",value:function(){var e=this.props.currentSession,n=e.type,o=e.isPush,i=e.value,s=e.isSilent;this.props.dispatch(Y._x({type:n,AccountID:md.global.Account.accountId,isSilent:!s})),this.handleTriggerChange(!1)}},{key:"renderSetting",value:function(){var e=this.state.settingVisible;return t.createElement(la.Z,{popupVisible:e,onPopupVisibleChange:this.handleTriggerChange.bind(this),popupClassName:"ChatPanel-Trigger",action:["click"],popupPlacement:"bottom",popup:this.renderMenu(),builtinPlacements:jr.Z.builtinPlacements,popupAlign:{offset:[80,10]}},t.createElement("i",{className:T()("icon-settings mLeft10 Hand iconSetting",{ThemeColor:e})}))}},{key:"render",value:function(){var e=this,n=this.props,o=n.inboxFavorite,i=n.title,s=n.filter,l=n.currentSession,c=s||{},p=c.user,m=c.timeName,f=function(E){return T()("inboxItem Hand",{"ThemeColor3 ThemeBorderColor3":E,"ThemeHoverBorderColor3 ThemeHoverColor3":!E})},v=p?p.fullname:"",h=l.isSilent;return t.createElement("div",{className:"inboxHeader"},t.createElement("div",{className:"inboxType Absolute"},h&&t.createElement("i",{className:"icon-notifications_off Gray_9e mRight10"}),i,this.renderSetting()),t.createElement("span",{className:f(!o),onClick:function(){e.handleClick(!1)}},this.renderDropDown()),t.createElement("span",{className:f(o),onClick:function(){e.handleClick(!0)}},_l("\u661F\u6807")),!md.global.Account.isPortal&&t.createElement(Fr.default,{overlay:this.renderOverlay(),trigger:["click"],placement:"bottomRight",overlayClassName:"inboxFilterDropdown"},t.createElement("div",{className:T()("filterWrapper flexRow valignWrapper",{transparent:I().isEmpty(s)})},s?t.createElement(t.Fragment,null,t.createElement(L.Z,{className:"Font20",icon:"filter"}),t.createElement("span",null,v,v&&m?", ":"",m),t.createElement(L.Z,{icon:"close",className:"Font15 mBottom2",onClick:function(E){E.stopPropagation(),e.props.changeInboxFilter(null)}})):t.createElement(L.Z,{className:"Font20 Gray_9e pointer",icon:"filter"}))))}}]),r}(t.Component),da.propTypes={title:M().string,type:M().oneOf(I().values(w)),inboxFavorite:M().bool,changeType:M().func,changeFaviorite:M().func},pa);const $r=(0,Mt.$j)(function(d){var r=d.chat.currentSession;return{currentSession:r}})(Wr);var Ns=u(44336),Vr=u(74253),Le=u(25273);const ua={setInboxFavorite:function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Inbox","SetInboxFavorite",r,a)},getInboxMessage:function(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mdyAPI("Inbox","GetInboxMessage",r,a)}};var ve=u(54208),mn=u(32422),Kr=function(r){var a=r.accountId,e=r.fullname,n=r.avatar,o=r.inboxType,i=r.appId,s="";switch(o){case y.SystemMessage:s="system";break;case y.CalendarMessage:s="calendar";break;case y.TaskMessage:case y.FolderMessage:s="task";break;case y.KCMessage:s="knowledge";break;case y.ApprovalMessage:s="approval";break;case y.AttendanceMessage:s="check";break;case y.DossierMessage:s="dossier";break;case y.WorkSheetMessage:s="worksheet";break;case y.WorkFlowMessage:s="workflow";break;default:break}return{accountId:a,fullname:e,avatar:n,applicationType:s,appId:i}},ma=null,Wn=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.state=(0,D.default)({},Kr(a)),e}return(0,R.default)(r,[{key:"render",value:function(){var e=this,n=this.state,o=n.accountId,i=n.fullname,s=n.avatar,l=n.applicationType,c=n.appId;if(l)return t.createElement("span",{className:T()("ThemeColor2 msgIcon",{calendar:l==="calendar "}),"data-date":ma||(ma=new Date().getDate()),dangerouslySetInnerHTML:{__html:(0,N.$m)(l,"small")}});var p={};return md.global.Account.isPortal||(o||"").indexOf("a#")>-1||(p={href:"/user_"+o}),t.createElement(mn.Z,{sourceId:o,appId:c},t.createElement("a",(0,D.default)({},p,{target:"_blank",className:"inboxAvatar",ref:function(f){e.card=f}}),t.createElement("img",{src:s,title:i})))}}]),r}(t.Component),fa=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.state={isFavorite:a.isFavorite},e.clickHandler=e.clickHandler.bind(e),e}return(0,R.default)(r,[{key:"clickHandler",value:function(e){var n=this,o=this.props.inboxId;return function(){ua.setInboxFavorite({inboxId:o,inboxFavorite:e}).then(function(i){i?n.setState({isFavorite:e},function(){alert(_l("\u64CD\u4F5C\u6210\u529F"))}):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})}}},{key:"render",value:function(){var e=this.state.isFavorite;return md.global.Account.isPortal&&(0,N.Q9)()?null:t.createElement("div",{className:"Right"},e==="1"?t.createElement(L.Z,{icon:"task-star",className:"Font18 Hand",hint:_l("\u53D6\u6D88\u52A0\u661F"),onClick:this.clickHandler("0"),style:{color:"#fbc02d"}}):t.createElement(L.Z,{icon:"star-hollow",className:"Font18 LightGray Hand ThemeHoverColor3",hint:_l("\u52A0\u661F"),onClick:this.clickHandler("1")}))}}]),r}(t.Component),Q=u(54416),Bt=function(r){var a=r.CreateUser||{},e=a.accountId,n=a.fullname,o=a.avatar,i=r.discussion,s="",l=!1,c=parseInt(r.inboxType,10);switch(c){case y.UserMessage:s="<span class='Gray_9'>"+_l("\u5BF9\u4F60\u8BF4")+"</span>";break;case y.SystemMessage:case y.CalendarMessage:case y.TaskMessage:case y.FolderMessage:case y.KCMessage:case y.ApprovalMessage:case y.WorkSheetMessage:s="";break;case y.AttendanceMessage:s="<span class='Gray_9'>"+_l("\u8003\u52E4\u6D88\u606F")+"</span>";break;case y.DossierMessage:s="<span class='Gray_9'>"+_l("\u4EBA\u4E8B\u6D88\u606F")+"</span>";break;case y.PostMentionedUser:s=_l("\u63D0\u5230\u4E86\u4F60");break;case y.PostMentionedGroup:s=_l("\u63D0\u5230\u4E86\u4F60\u6240\u5728\u7684\u7FA4\u7EC4");break;case y.PostCommentMentionedUser:s=_l("\u5728\u56DE\u590D\u4E2D\u63D0\u5230\u4E86\u4F60");break;case y.PostCommentMentionedGroup:s=_l("\u5728\u56DE\u590D\u4E2D\u63D0\u5230\u4E86\u4F60\u6240\u5728\u7684\u7FA4\u7EC4");break;case y.PostReply:s=_l("\u56DE\u590D\u4E86\u4F60");break;case y.TaskComment:s=_l("\u53D1\u8868\u4E86\u4EFB\u52A1\u8BA8\u8BBA");break;case y.TaskMentioned:s=_l("\u5728\u4EFB\u52A1\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60");break;case y.TaskReply:s=_l("\u5728\u4EFB\u52A1\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60");break;case y.FolderMentioned:s=_l("\u5728\u9879\u76EE\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60");break;case y.FolderReply:s=_l("\u5728\u9879\u76EE\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60");break;case y.CalendarComment:s=_l("\u53D1\u8868\u4E86\u65E5\u7A0B\u8BA8\u8BBA");break;case y.CalendarMentioned:s=_l("\u5728\u65E5\u7A0B\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60");break;case y.CalendarReply:s=_l("\u5728\u65E5\u7A0B\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60");break;case y.ApprovalMentioned:s=_l("\u5728\u5BA1\u6279\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60");break;case y.ApprovalReply:s=_l("\u5728\u5BA1\u6279\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60");break;case y.ApprovalComment:s=_l("\u53D1\u8868\u4E86\u5BA1\u6279\u8BA8\u8BBA");break;case y.CheckMentioned:s=_l("\u5728\u8003\u52E4\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60");break;case y.CheckReply:s=_l("\u5728\u8003\u52E4\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60");break;case y.CheckComment:s=_l("\u53D1\u8868\u4E86\u8003\u52E4\u8BA8\u8BBA");break;case y.WorkSheetReply:s=_l("\u5728%0\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60",i.entityName);break;case y.WorkSheetMentioned:s=_l("\u5728%0\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60",i.entityName);break;case y.WorkSheetComment:s=_l("\u53D1\u8868\u4E86%0\u8BA8\u8BBA",i.entityName);break;case y.WorkSheetRowReply:s=_l("\u5728%0\u8BA8\u8BBA\u4E2D\u56DE\u590D\u4E86\u4F60",i.entityName);break;case y.WorkSheetRowMentioned:s=_l("\u5728%0\u8BA8\u8BBA\u4E2D\u63D0\u5230\u4E86\u4F60",i.entityName);break;case y.WorkSheetRowComment:s=_l("\u53D1\u8868\u4E86%0\u8BA8\u8BBA",i.entityName);break;case y.WorkFlowMessage:s="";break;default:break}return{isFavorite:r.isFavorite,typeName:s,accountId:e,fullname:n,avatar:o,inboxType:c,inboxId:r.inboxId}},$n=function(r,a){var e={},n,o,i,s;if(a===Q.F.POST)n=r.user,i=r.replyID,o=null,i&&r.replyUser?o={accountId:r.replyUser.accountId,fullname:r.replyUser.userName}:i&&!r.replyUser&&(o={accountId:r.replyAccountId,fullname:r.replyUserName}),s=r.allowOperate==="1"||md.global.Account.accountId===n.accountId,e={createAccount:{accountId:n.accountId,avatar:n.userMiddleHead,fullname:n.userName,status:r.Secretary?2:1},attachment:r.attachments||[],canDelete:s,isDeleteAttachment:s&&r.askDeleteAttachment==="1",isReply:i,replyAccount:o,sourceId:r.postID,discussionId:r.commentID,replyId:r.replyID?r.replyID:null,message:r.message,accountsInMessage:r.rUserList,groupsInMessage:r.rGroupList,createTime:r.createTime};else{var l=r,c=l.attachments;n=l.createAccount,i=!!l.replyId,s=n.accountId===md.global.Account.accountId,e={canDelete:s,isDeleteAttachment:s&&c.length,sourceId:r.sourceId,name:r.name,message:l.message,attachment:c,createAccount:n,replyId:l.replyId,discussionId:l.discussionId,createTime:l.createTime,isReply:i,replyAccount:i?l.replyAccount:null,accountsInMessage:l.accountsInMessage}}return(0,D.default)({},e,{sourceType:a})},ha=function(r){var a=r.split("|"),e=(0,re.Z)(a,2),n=e[0],o=e[1];return{sourceId:n,childId:o}},$e=function(r,a,e){var n="",o=ha(a),i=o.sourceId,s=o.childId;switch(r){case Q.F.POST:n="/feeddetail?itemID="+i;break;case Q.F.TASK:n="/apps/task/task_"+i;break;case Q.F.FOLDER:n="/apps/task/folder_"+i+"#detail";break;case Q.F.CALENDAR:n="/apps/calendar/detail_"+(s?i+"_"+ie()(s).format("YYYYMMDDHHmmss"):i);break;case Q.F.WORKSHEET:n="/worksheet/"+i;break;case Q.F.WORKSHEETROW:if(e&&e.indexOf("undefined")<0&&e.indexOf("null")<0){var l=e.split("|"),c=(0,re.Z)(l,2),p=c[0],m=c[1];!p||!m?n=" /worksheet/"+i+"/row/"+s+"?share":n=(0,N.Q9)()?"/mobile/record/"+p+"/"+i+"/"+m+"/"+s+"?share":(0,Me.A6)("/app/"+p+"/"+i+"/"+m+"/row/"+s+"?share")}else n=" /worksheet/"+i+"/row/"+s+"?share";break;default:break}return""+(window.subPath||"")+n},zr=u(15759),Ds=u(99452),q=u(65406),fn=u(24035),Yr=u(38197),Ht=u.n(Yr),Qr=u(98939),Jr=u.n(Qr),Xr=u(68924),bt=u.n(Xr),qr=u(72130),eo=u.n(qr),to=u(56770),no=u.n(to),ao=u(64563),ro=u.n(ao),oo=u(20033),io=u.n(oo),Ct=u(67707),so=u(60510),va=u(75809),ws=u(16461),hn=u(32613),vn={MissParams:-2,NotLogin:-1,Failed:0,Success:1,OnlyGroupAdmin:2,ApprovalUserNotExist:3},W={MDGroup:_l("\u4E2A\u4EBA\u7FA4\u7EC4"),stateTip:_l("\u8BE5\u7FA4\u7EC4\u5DF2\u5173\u95ED\u6216\u5220\u9664"),closeTip:_l("\u7FA4\u7EC4\u5DF2\u7ECF\u5173\u95ED"),remove:_l("\u79FB\u51FA\u804A\u5929"),confirmExitTitle:_l("\u662F\u5426\u786E\u8BA4\u9000\u51FA\uFF1F"),confirmExitTextGroup:_l("\u9000\u51FA\u804A\u5929\u540E\uFF0C\u60A8\u5C06\u4E0D\u80FD\u8FDB\u5165\u8FD9\u4E2A\u804A\u5929"),confirmExitTextPostGroup:_l("\u9000\u51FA\u7FA4\u7EC4\u540E\uFF0C\u60A8\u5C06\u4E0D\u80FD\u8FDB\u5165\u8FD9\u4E2A\u7FA4\u7EC4"),confirmDelTitle:_l("\u662F\u5426\u786E\u8BA4\u89E3\u6563\uFF1F"),confirmDelText:_l("\u804A\u5929\u89E3\u6563\u540E\uFF0C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u804A\u5929\u3002\u4E0D\u53EF\u6062\u590D"),confirmDelGroupText:_l("\u7FA4\u7EC4\u89E3\u6563\u540E\uFF0C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u7FA4\u7EC4\u3002\u4E0D\u53EF\u6062\u590D"),confirmCloseTitle:_l("\u662F\u5426\u786E\u8BA4\u5173\u95ED\u7FA4\u7EC4\uFF1F"),confirmCloseText1:_l("\u5173\u95ED\u7FA4\u7EC4\u540E\uFF0C\u7FA4\u7EC4\u5C06\u4E0D\u80FD\u88AB\u8BBF\u95EE"),confirmCloseText2:_l("\u60A8\u53EF\u4EE5\u5728\u901A\u8BAF\u5F55\u7FA4\u7EC4\u5217\u8868\u4E2D\u627E\u5230\u5E76\u91CD\u65B0\u5F00\u542F\u8FD9\u4E2A\u7FA4\u7EC4"),convertDialogTitle:_l("\u8F6C\u6362\u4E3A\u957F\u671F\u7FA4\u7EC4"),convertProject:_l("\u6240\u5728\u7EC4\u7EC7"),convertTip:_l("\u70B9\u9009\u8F6C\u6362\u540E\uFF0C\u8BE5\u957F\u671F\u7FA4\u7EC4\u5C06\u6C38\u4E45\u96B6\u5C5E\u4E8E\u6B64\u7EC4\u7EC7\uFF0C\u4E0D\u53EF\u66F4\u6539"),authTip:_l("\u7EC4\u7EC7\u7BA1\u7406\u5458\u624D\u6709\u6743\u9650\u8BBE\u7F6E\u5173\u8054\u90E8\u95E8"),uploadingTip:_l("\u4E0A\u4F20\u4E2D"),customAvatar:"+ "+_l("\u4F7F\u7528\u81EA\u5B9A\u4E49\u5934\u50CF"),nameTooLongTip:_l("\u60A8\u8F93\u5165\u7684\u7FA4\u7EC4\u540D\u5B57\u8FC7\u957F\uFF0C\u4E0D\u80FD\u8D85\u8FC764\u4E2A\u5B57\u7B26"),nameNullTip:_l("\u7FA4\u7EC4\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A"),selectDepartment:_l("\u8BF7\u8BBE\u7F6E\u5173\u8054\u90E8\u95E8"),roleAdmin:_l("\u7BA1\u7406\u5458"),roleMember:_l("\u6210\u5458"),onlyAdminTip:_l("\u60A8\u662F\u8BE5\u7FA4\u7EC4\u7684\u552F\u4E00\u7BA1\u7406\u5458\uFF0C\u8BF7\u6307\u5B9A\u4E00\u540D\u7BA1\u7406\u5458\u518D\u9000\u51FA\u7FA4\u7EC4"),removeUserFromGroupTip:_l("\u4ECE\u7FA4\u7EC4\u4E2D\u79FB\u9664\u6210\u529F"),removeUserFromChatTip:_l("\u4ECE\u804A\u5929\u4E2D\u79FB\u9664\u6210\u529F"),inviteSuccess:_l("\u91CD\u65B0\u9080\u8BF7\u6210\u529F"),inviteFailed:_l("\u91CD\u65B0\u9080\u8BF7\u5931\u8D25")},gn=function(r,a){this.init(a)};gn.DEFAULT={groupId:"",viewType:0,groupAction:{DELETE:"DELETE",ADD:"ADD",RENAME:"RENAME",UPDATE_DESC:"UPDATE_DESC",ADD_MEMBER:"ADD_MEMBER",ADD_MEMBERS:"ADD_MEMBERS",REMOVE_MEMBER:"REMOVE_MEMBER",ADD_ADMIN:"ADD_ADMIN",REMOVE_ADMIN:"REMOVE_ADMIN",EXIT_GROUP:"EXIT_GROUP",CLOSE_GROUP:"CLOSE_GROUP",UPDATE_POST:"UPDATE_POST",UPDATE_AVATAR:"UPDATE_AVATAR",TROUBLE_FREE:"TROUBLE_FREE",APPROVE:"APPROVE",ADD_IN_COMPANY:"ADD_IN_COMPANY",VERIFY:"VERIFY",FORBID_INVITE:"FORBID_INVITE",FORBID_SPEAK:"FORBID_SPEAK"},success:function(r,a){},settingsCallback:null,resetOffset:!0,keywords:"",isLoadingUser:!1,isAppend:!1,pageIndex:1,pageSize:10,isMoreUsers:!0,isRefresh:{info:!0,member:!0},isPost:!1,deptMapData:{depID:"",depName:"",projectId:""}},$.extend(gn.prototype,{getOptions:function(r){var a=$.extend(!0,{},gn.DEFAULT,r);return a.groupID=a.groupID||a.groupId,a},opSuccess:function(r,a,e){var n=this,o=n.options,i=e===void 0?_l("\u64CD\u4F5C\u6210\u529F"):e;i!==null&&alert(i,1),r&&$.isFunction(o.success)&&o.success(o.groupAction[r],a)},opFailed:function(r,a){alert(r||_l("\u64CD\u4F5C\u5931\u8D25"),a||2)},init:function(r){this.options=this.getOptions(r);var a=this,e=a.options;if(e.groupID)a.showDialog();else throw new Error("groupId required")},cacheData:function(r){var a=this,e=a.options;e.isRefresh.info=!1,r.name=bt()(r.name),e.isPost=r.isPost,e.isApproval=r.isApproval,e.isAdmin=r.isAdmin,e.isForbidInvite=r.isForbidInvite,e.projectId=r.project&&r.project.projectId||"",e.isProjectAdmin=r.project&&r.project.isProjectAdmin,e.data=r,e.data.createTime=ie()(r.createTime).format(_l("YYYY\u5E74MM\u6708DD\u65E5")),r.isVerified&&(e.deptMapData.depID=r.mapDepartmentId,e.deptMapData.depName=r.mapDepartmentName)},openConfirm:function(){var r=this,a=this.options;a.dialogId="dialogBoxSettingGroup_"+a.groupID,(0,Ct.Z)({dialogClasses:a.dialogId+" dialogBoxSettingGroup",noFooter:!0,width:446,children:t.createElement("div",{dangerouslySetInnerHTML:{__html:Ht().template(Jr())(a)}})})},showDialog:function(){var r=this,a=this.options;a.dialogId="dialogBoxSettingGroup_"+a.groupID,a.resetOffset=!0,q.Z.getGroupInfo({groupId:a.groupID}).then(function(e){e&&e.status===1?(r.cacheData(e),r.openConfirm(),r.getContent(),r.initEvent(),r.options.isPost?r.initGroupTab():(r.$groupInfo.removeClass("Hidden").html(LoadDiv()).siblings().addClass("Hidden"),r.renderGroupInfo(r.$groupInfo))):($(".dialogBoxSettingGroup")&&$(".dialogBoxSettingGroup").parent().remove(),alert(W.stateTip,3))})},getContent:function(){var r=this,a=this.options;r.$container=$("."+a.dialogId),r.$avatar=r.$container.find(".groupAvatar"),r.$name=r.$container.find(".groupNameTotal .groupName"),r.$groupIcon=r.$container.find(".groupNameTotal .groupIcon"),r.$tabList=r.$container.find(".groupTabList"),r.$content=r.$container.find(".groupSettingContent"),r.$groupInfo=r.$content.find(".groupInfo"),r.$groupMember=r.$content.find(".groupMember"),r.$groupSettings=r.$content.find(".groupSettings")},initEvent:function(){var r=this;r.bindGroupInfoEvent(),r.bindCommEvent(),r.quickInviteEvent(),r.inviteFriends(),r.options.isPost&&(r.bindHeadEvent(),r.bindGroupMemberEvent(),r.bindGroupSettingEvent())},bindHeadEvent:function(){var r=this,a=this.options,e;a.isAdmin&&(r.bindPoshytip(),e=r.$container.find(".groupHead"),e.on("click",function(n){$(".groupSettingAvatarSelect").show(),n.stopPropagation()}))},bindGroupInfoEvent:function(){var r=this,a=r.options,e=r.$groupInfo;a.isPost&&e.on({mouseover:function(){var o=$(this);if(e.find(".groupQRCodeImg").length){e.find(".groupQRCodeImg").show();return}fn.Z.getQRCodeInviteLink({sourceId:a.groupID,fromType:1,linkFromType:4,width:100,height:100}).then(function(i){a.qrCodeUrl=i.linkUrl,o.append('<img class="TxtBottom groupQRCodeImg" src="'+a.qrCodeUrl+'"/>')})},mouseleave:function(){e.find(".groupQRCodeImg").hide()}},".qrcode"),a.isAdmin&&(e.on("blur",".groupTextBox",function(){var n=$(this),o=n.val();n.data("content")!=n.val()&&(n.is(".groupName")?r.updateGroupName(o).then(function(){r.opSuccess(a.groupAction.RENAME,{groupId:a.groupID,groupName:o}),a.data.name=(0,N.u1)(o),a.isRefresh.info=!0,n.val(o).data("content",o),r.$name.text(o).attr("title",o)}).catch(function(i){n.val(n.data("content")),r.opFailed(i)}):r.updateGroupDesc(o).then(function(){n.val(o).data("content",o),a.isRefresh.info=!0,r.opSuccess(a.groupAction.UPDATE_DESC,{groupId:a.groupID,groupAbout:o})}).catch(function(){n.val(n.data("content")),r.opFailed()}))}),e.on("keydown",".groupTextBox",function(n){var o=n.keyCode;o===13&&$(this).blur()}))},bindGroupMemberEvent:function(){var r=this,a=r.options,e=r.$groupMember;a.isAdmin&&(e.on("click",".settingMemberRole",function(n){var o=$(this);r.buildGroupMemberOpList(o),n.stopPropagation()}),e.on("click",".groupMemberOp",function(n){n.stopPropagation();var o=$(this).parent().data("accountid"),i=$(this).data("op"),s={0:"admin",1:"member",2:"remove",3:"apply",4:"refuse",5:"reactive",6:"deactive"};r.updateGroupMember(o,s[i]),r.$opList.addClass("Hidden")}),$(document).off("click.groupSettingUserOp").on("click.groupSettingUserOp",function(n){var o=$(n.target);o.closest(".groupMember .operation").length<=0&&r.$opList&&r.$opList.addClass("Hidden")}))},bindGroupSettingEvent:function(){var r=this,a=r.options,e=r.$groupSettings;e.on("click",".singleSetting label",function(){var n=$(this).prev(),o=n.data("type");switch(o){case"silence":r.updateGroupNotice(n);break;case"approval":r.updateGroupApprove(n);break;case"addInList":r.updateGroupList(n);break;case"associate":r.updateGroupAssociate(n);break;case"chatAuth":r.updateGroupChatAuth(n);break;case"inviteAuth":r.updateGroupInviteAuth(n);break;default:break}}),a.isAdmin&&e.on("click",".officialDepSelect",function(){var n=a.deptMapData;if(!a.isProjectAdmin)return alert(W.authTip,3),!1;a.projectId&&(0,so.Z)({projectId:a.projectId,unique:!0,selectFn:function(i){i.departmentName&&r.updateGroupDepartment(i.departmentId,i.departmentName)}})})},renderUserCard:function(){var r=this,a=r.options;r.$container.find("img[data-accountid]").each(function(e,n){var o=$(n);if(!o.data("bind")){var i=o.parent()[0],s=o.attr("data-accountid"),l=o.attr("src");We.render(t.createElement(zr.Z,{className:"userHead",user:{userHead:l,accountId:s},operation:!a.isPost&&s!==md.global.Account.accountId&&a.isAdmin?t.createElement("div",{className:"removeUser TxtCenter Hand","data-accountid":s,onClick:function(){r.removeUser(s,"remove"),$dialog.remove()}},W.remove):null,size:32}),i),o.data("bind",!0)}})},bindCommEvent:function(){var r=this,a=r.options;r.renderUserCard(),r.$container.on("click",".exitGroup,.deleteGroup,.closeGroup",function(){var e=$(this),n=e.data("type"),o=(0,N.u1)(a.data.name),i=a.data.groupId;switch(n){case"exit":r.exitGroup(i,o);break;case"delete":r.deleteGroup(i,o);break;case"close":r.closeGroup(i,o);default:break}}),a.isPost||(r.$groupInfo.on("click",".convertLink",function(){r.updateGroupToPost()}),r.$groupInfo.on("click",".discussionChatNotice label",function(){var e=$(this).prev();r.updateGroupNotice(e)}))},bindUserSearchEvent:function(){var r=this,a=this.options,e=this.$groupMember,n=e.find(".searchWrapper"),o=e.find(".searchInput"),i=e.find(".searchCloseIcon");i.on("click",function(){a.keywords="",a.pageIndex=1,a.isMoreUsers=!0,o.val(""),i.toggleClass("Hidden",a.keywords===""),r.fetchGroupMember()}),o.on("focus blur",function(s){var l=s.type;n.toggleClass("ThemeBorderColor3",l==="focus")}),o.focus().on("keyup",function(s){a.keywords!==this.value&&(a.keywords=$.trim(this.value),i.toggleClass("Hidden",a.keywords==="")),s.which===13&&(a.pageIndex=1,a.isMoreUsers=!0,r.fetchGroupMember())}),e.find(".groupUserList").on("scroll",function(s){s.stopPropagation();var l=this.scrollHeight,c=this.scrollTop,p=this.clientHeight;l<=p+c+30&&a.isMoreUsers&&!a.isLoadingUser&&(a.pageIndex++,r.fetchGroupMember())})},toggleGroupTab:function(r){var a=this,e=function(){var o={};return o[o.info=0]="info",o[o.member=1]="member",o[o.settings=2]="settings",o}(),n=typeof r=="number"?r:e[r];a.$tabList.find(".commItem").eq(n).addClass("activation").siblings().removeClass("activation"),a.$content.children().eq(n).removeClass("Hidden").siblings().addClass("Hidden"),n==0?a.loadGroupInfo():n==1?a.loadGroupMember():a.loadGroupSettings()},initGroupTab:function(){var r=this,a=r.options;r.$tabList.on("click",".commItem",function(){r.toggleGroupTab($(this).index())}),r.toggleGroupTab(a.viewType)},quickInviteEvent:function(){var r=this,a=r.options;r.$container.on("click",".addChatMember,.addGroupMember,.addGroupMemberTitle",function(){(0,va.Z)({sourceId:a.groupID,fromType:1,SelectUserSettings:{callback:function(n){r.addMembers(n)}}})})},inviteFriends:function(){var r=this,a=r.options,e=r.options.data;r.$container.on("click",".addGroupFriends",function(){(0,hn.ZP)({projectId:a.groupID,fromType:1,fromText:e.name})})},bindPoshytip:function(){var r=this,a=r.$container.find(".groupHeader");q.Z.getGroupAvatarSelectList().then(function(e){a.append(`<div class="z-depth-1-half groupSettingAvatarSelect">
          `+Ht().template(eo())(e)+`
          <i class="icon-close Font20 pointer Gray_9e ThemeHoverColor3" />
        </div>`),r.bindGroupHeadPlugin()})},bindGroupHeadPlugin:function(){var r=this,a=$(".groupSettingAvatarSelect .settingPictureLayer"),e=a.find(".uploadGroupAvatar"),n=a.find(".hiddenUploadGroupAvatar");$(".groupSettingAvatarSelect").on("click",".icon-close",function(){$(".groupSettingAvatarSelect").hide()}),a.on("click",".singleHead",function(){var o=$(this),i=o.data("name");i&&r.updateGroupHead(i)}),n.on("click",function(o){o.stopPropagation()}),n.uploadAttachment({filterExtensions:"gif,png,jpg,jpeg,bmp",pluploadID:"#uploadGroupAvatar",multiSelection:!1,maxTotalSize:4,folder:"GroupAvatar",fileNamePrefix:"GroupAvatarImage_",onlyFolder:!0,onlyOne:!0,styleType:"0",tokenType:2,checkProjectLimitFileSizeUrl:"",filesAdded:function(){e.html("<i class='uploadTip'>"+W.uploadingTip+"</i>")},createPicProgressBar:"",callback:function(i){if(e.html(W.customAvatar),i.length>0){var s=i[0],l=s.serverName+s.filePath+s.fileName+s.fileExt,c=s.fileName+s.fileExt;r.updateGroupHead(c)}}})},buildGroupMemberOpList:function(r){var a=this,e,n=r.data("type");if(a.$opList=a.$groupMember.find(".operation"),e=a.$opList.children().removeClass("Hidden"),a.$opList.addClass("Hidden"),n=="apply")e.not(".apply").addClass("Hidden");else if(n=="admin")e.not(".member,.remove").addClass("Hidden");else if(n=="member")e.not(".admin,.remove").addClass("Hidden");else if(n=="active")e.not(".active").addClass("Hidden");else return!1;var o=r.position();a.$opList.css({left:o.left-110+r.width(),top:o.top+40}).removeClass("Hidden").data("accountid",r.closest(".singleUser").data("accountid"))},loadGroupInfo:function(){var r=this,a=r.options,e=r.$groupInfo;e.removeClass("Hidden").html(LoadDiv()).siblings().addClass("Hidden"),a.isRefresh.info||!a.isPost?q.Z.getGroupInfo({groupId:a.groupID}).then(function(n){r.cacheData(n),r.renderGroupInfo(e)}):r.renderGroupInfo(e)},renderGroupInfo:function(r){var a=this,e=this.options.data;a.$container.find(".groupNameTotal .groupIcon").toggleClass("Hidden",!e.isVerified),a.$container.find(".groupNameTotal .groupName").text(e.name).attr("title",e.name),e.isGroup=this.options.isPost;var n=Ht().template(no())(e);r.html(n),a.renderUserCard()},loadGroupMember:function(){var r=this,a=r.options,e=r.$groupMember;e.removeClass("Hidden").html(LoadDiv()).siblings().addClass("Hidden"),a.isRefresh.member?(a.isLoadingUser=!1,a.isRefresh.member=!1,a.keywords="",a.pageIndex=1,a.isAppend=!1,a.isMoreUsers=!0,r.fetchGroupMember(!0)):r.renderGroupMember(e)},fetchGroupMember:function(r){var a=this,e=this.options;e.isLoadingUser||!e.isMoreUsers||(e.isLoadingUser=!0,!r&&e.pageIndex===1&&a.$groupMember.find(".groupUserList").html(LoadDiv()),q.Z.getGroupUsers({groupId:e.groupID,keywords:e.keywords,pageIndex:e.pageIndex,pageSize:e.pageSize}).then(function(n){n.groupUsers&&n.groupUsers.length<e.pageSize&&(e.isMoreUsers=!1),e.pageIndex===1?(e.users=n.groupUsers,r?a.renderGroupMember(a.$groupMember):a.renderGroupMember(a.$groupMember.find(".groupUserList"),!0)):(e.users=e.users.concat(n.groupUsers),a.renderGroupMember(a.$groupMember.find(".groupUserList"),!0))}).finally(function(){e.isLoadingUser=!1}))},renderGroupMember:function(r,a){var e=this,n=this.options,o=$.extend({},n,{buildUser:a});r.html(Ht().template(ro())(o)),a||this.bindUserSearchEvent(),e.renderUserCard()},loadGroupSettings:function(){var r=this,a=r.options,e=r.$groupSettings;e.removeClass("Hidden").html(LoadDiv()).siblings().addClass("Hidden"),a.isRefresh.info?q.Z.getGroupInfo({groupId:a.groupID}).then(function(n){r.cacheData(n),r.renderGroupSettings(e)}):r.renderGroupSettings(e)},renderGroupSettings:function(r){var a=this,e=this.options,n=Ht().template(io())(e.data);r.html(n),a.renderUserCard()},updateGroupHead:function(r){var a=this,e=a.options;q.Z.updateGroupAvatar({groupId:e.groupID,avatar:r}).then(function(n){n?(a.opSuccess(e.groupAction.UPDATE_AVATAR,{groupID:e.groupID,groupAvatar:n.avatar}),a.$avatar.attr("src",n.avatar),$(".groupSettingAvatarSelect").hide()):a.opFailed()})},updateGroupName:function(r){var a=this,e=a.options;return new(it())(function(n,o){$.trim(r)?r.length>64&&o(W.nameTooLongTip):o(W.nameNullTip),q.Z.updateGroupName({groupId:e.groupID,groupName:r}).then(function(i){i?n():o()})})},updateGroupDesc:function(r){var a=this,e=a.options;return new(it())(function(n,o){q.Z.updateGroupAbout({groupId:e.groupID,groupAbout:r}).then(function(i){i?n():o()})})},updateGroupToPost:function(){var r=this,a=this.options,e="",n={},o=$.map(md.global.Account.projects,function(l){return n[l.projectId]=l.licenseType,{value:l.projectId,text:l.companyName}});o.push({value:"",text:W.MDGroup}),e=o[0].id;var i={okDisable:!1};(0,Ct.Z)({dialogClasses:"convertToPost",closable:!1,width:500,title:W.convertDialogTitle,children:t.createElement("div",null,t.createElement("p",{className:"mTop15 Gray_6 flexRow alignItemsCenter"},W.convertProject,t.createElement("span",{className:"InlineBlock flex mLeft15",id:"selectProject"})),t.createElement("p",{className:"mTop15 Gray_6"},"'",W.convertTip)),onOk:function(){i.okDisable||q.Z.updateGroupToPost({groupId:a.groupID,projectId:e}).then(function(c){c?($(".dialogBoxSettingGroup")&&$(".dialogBoxSettingGroup").parent().remove(),r.opSuccess(a.groupAction.UPDATE_POST,{groupId:a.groupID})):r.opFailed()}).catch(function(){r.opFailed()})}});var s=$(".convertToPost");We.render(t.createElement(un.Z,{className:"w100",menuClass:"w100",border:!0,data:o,onChange:function(c){e=c,(0,N.pF)(e).then(function(){i.okDisable=!1,$(".convertToPost .ming.Button").eq(1).attr("disabled",!1).removeClass("Button--disabled")}).catch(function(){i.okDisable=!0,$(".convertToPost .ming.Button").eq(1).attr("disabled",!0).addClass("Button--disabled")})}}),s.find("#selectProject")[0])},updateGroupNotice:function(r){var a=this,e=a.options,n=r.prop("checked");q.Z.updateGroupPushNotice({groupId:e.groupID,isPushNotice:n}).then(function(o){o?(a.opSuccess(e.groupAction.TROUBLE_FREE,{groupId:e.groupID,isPushNotice:n}),e.isRefresh.info=!0):(r.prop("checked",!n),a.opFailed())})},updateGroupApprove:function(r){var a=this,e=a.options,n=r.prop("checked");q.Z.updateGroupApproval({groupId:e.groupID,isApproval:!n}).then(function(o){o?(a.opSuccess(e.groupAction.APPROVE,{groupId:e.groupID,isApproval:!n}),e.isRefresh.info=!0):(r.prop("checked",n),a.opFailed())})},updateGroupList:function(r){var a=this,e=a.options,n=r.prop("checked");q.Z.updateGroupHidden({groupId:e.groupID,isHidden:n}).then(function(o){o?(e.isRefresh.info=!0,a.opSuccess(e.groupAction.ADD_IN_COMPANY,{groupId:e.groupID,isHidden:!n})):(r.prop("checked",n),a.opFailed())})},updateGroupAssociate:function(r){var a=this,e=a.options,n=r.prop("checked");a.$groupSettings.find(".officialDepSelect").toggleClass("Hidden",n),n&&a.updateGroupDepartment()},updateGroupInviteAuth:function(r){var a=this,e=a.options,n=r.prop("checked");q.Z.updateGroupForbidInvite({groupId:e.groupID,isForbidInvite:!n}).then(function(o){o?(a.opSuccess(e.groupAction.FORBID_INVITE,{groupId:e.groupID,isForbidInvite:!n}),e.isRefresh.info=!0,e.isForbidInvite=!n):(r.prop("checked",n),a.opFailed())})},updateGroupChatAuth:function(r){var a=this,e=a.options,n=r.prop("checked");q.Z.updateGroupForbidSpeak({groupId:e.groupID,isForbidSpeak:!n}).then(function(o){o?(a.opSuccess(e.groupAction.FORBID_SPEAK,{groupId:e.groupID,isForbidSpeak:!n}),e.isRefresh.info=!0):(r.prop("checked",n),a.opFailed())})},updateGroupDepartment:function(r,a){var e=this,n=e.options,o=r===void 0;q.Z.updateGroupVerified({groupId:n.groupID,isVerified:!o,mapDepartmentId:r}).then(function(i){if(i){var s=o?W.selectDepartment:_l("\u5173\u8054\u90E8\u95E8\uFF1A")+a;e.opSuccess(n.groupAction.VERIFY,{groupId:n.groupID,deptID:r,deptName:a}),n.isRefresh.info=!0,e.$groupIcon.toggleClass("Hidden",o),e.$groupSettings.find(".officialDepSelect").html(s).attr("title",s)}else e.opFailed()})},updateGroupMember:function(r,a){var e=this;switch(a){case"apply":e.passUser(r);break;case"admin":e.setAdmin(r);break;case"member":e.setMember(r);break;case"refuse":e.removeUser(r,"refuse");break;case"remove":e.removeUser(r,"remove");break;case"reactive":e.reInviteMembers([r]);break;case"deactive":e.removeUser(r,"deactive");break;default:break}},updateUserCallback:function(r,a){var e=this,n=this.options,o=e.$groupMember.find(".singleUser").filter("[data-accountid="+r+"]"),i=o.find(".groupMemberOperation");n.isRefresh.info=!0,n.isRefresh.member=!0,a==="pass"?i.find(".settingMemberRole").data("type","member").find(".roleName").text(W.roleMember):a==="admin"?i.find(".settingMemberRole").data("type","admin").find(".roleName").text(W.roleAdmin):a==="member"?i.find(".settingMemberRole").data("type","member").find(".roleName").text(W.roleMember):o.slideUp(function(){o.remove()})},passUser:function(r){var a=this,e=a.options,n=$.grep(e.users,function(i){return i.accountId===r}),o=$.isArray(r)?r:[r];q.Z.passJoinGroup({groupId:e.groupID,accountIds:o}).then(function(i){i?(a.opSuccess(e.groupAction.ADD_MEMBER,{groupId:e.groupID,accounts:n}),a.updateUserCallback(o,"pass")):a.opFailed()})},setAdmin:function(r){var a=this,e=a.options;q.Z.addAdmin({groupId:e.groupID,accountIds:[r]}).then(function(n){n?(a.opSuccess(e.groupAction.ADD_ADMIN,{groupId:e.groupID,accountId:r}),a.updateUserCallback(r,"admin")):a.opFailed()})},setMember:function(r){var a=this,e=a.options;q.Z.removeAdmin({groupId:e.groupID,accountId:r}).then(function(n){n==vn.Success?(a.opSuccess(e.groupAction.REMOVE_ADMIN,{groupId:e.groupID,accountId:r}),a.updateUserCallback(r,"member")):n==vn.OnlyGroupAdmin?a.opFailed(W.onlyAdminTip,3):a.opFailed()})},addMembers:function(r){var a=this,e=a.options,n=$.map(r,function(o){return o.accountId});fn.Z.inviteUser({sourceId:e.groupID,accountIds:n,fromType:1}).then(function(o){var i=(0,N.sH)(o);i.accountInfos.length&&(a.opSuccess(e.groupAction.ADD_MEMBERS,{groupId:e.groupID,accounts:i.accountInfos},null),e.isRefresh.member=!0,e.isPost?a.toggleGroupTab("member"):a.loadGroupInfo())})},reInviteMembers:function(r){var a=this,e=a.options;fn.Z.inviteUser({sourceId:e.groupID,accountIds:r,fromType:1}).then(function(n){n.sendMessageResult?alert(W.inviteSuccess,1):alert(W.inviteFailed,2)})},removeUser:function(r,a){var e=this,n=e.options,o=a==="remove"?"removeUser":a==="refuse"?"refuseUser":"cancelInviteUser",i=n.isPost?W.removeUserFromGroupTip:W.removeUserFromChatTip;q.Z[o]({groupId:n.groupID,accountId:r}).then(function(s){s?(e.opSuccess(n.groupAction.REMOVE_MEMBER,{groupId:n.groupID,accountId:r},i),n.isPost?e.updateUserCallback(r,"removeUser"):e.loadGroupInfo()):e.opFailed()})},deleteGroup:function(r){var a=this,e=a.options,n=$.isArray(r)?r:[r];(0,Ct.Z)({title:W.confirmDelTitle,description:e.isPost?W.confirmDelGroupText:W.confirmDelText,onOk:function(){q.Z.removeGroup({groupIds:n}).then(function(i){i?($(".dialogBoxSettingGroup")&&$(".dialogBoxSettingGroup").parent().remove(),a.opSuccess(e.groupAction.DELETE,{groupId:r})):a.opFailed()})}})},closeGroup:function(r,a){var e=this,n=e.options,o=$.isArray(r)?r:[r];(0,Ct.Z)({title:W.confirmCloseTitle,description:t.createElement("div",null,W.confirmCloseText1,t.createElement("br",null),W.confirmCloseText2),onOk:function(){q.Z.closeGroup({groupIds:o}).then(function(s){s?($(".dialogBoxSettingGroup")&&$(".dialogBoxSettingGroup").parent().remove(),e.opSuccess(n.groupAction.CLOSE_GROUP,{groupId:r},a+W.closeTip)):e.opFailed()})}})},exitGroup:function(r,a){var e=this,n=e.options;(0,Ct.Z)({title:W.confirmExitTitle,description:n.isPost?W.confirmExitTextPostGroup:W.confirmExitTextGroup,onOk:function(){q.Z.exitGroup({groupId:r}).then(function(i){if(i==vn.Success){var s=n.isPost?_l("%0\u7FA4\u7EC4\u5DF2\u7ECF\u9000\u51FA",a):_l("%0\u804A\u5929\u5DF2\u7ECF\u9000\u51FA",a);$(".dialogBoxSettingGroup")&&$(".dialogBoxSettingGroup").parent().remove(),e.opSuccess(n.groupAction.EXIT_GROUP,{groupId:r},s)}else i==vn.OnlyGroupAdmin?e.opFailed(W.onlyAdminTip,3):e.opFailed()})}})}});function ga(d){return new gn(null,d)}var lo=u(68761),Ia,ya,co=(ya=Ia=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.state={isOpen:a.isOpen},e.toggleList=e.toggleList.bind(e),e}return(0,R.default)(r,[{key:"toggleList",value:function(){this.setState(function(e){return{isOpen:!e.isOpen}})}},{key:"render",value:function(){var e=this.props,n=e.name,o=e.children,i=this.state.isOpen,s=T()("list-arrow","Gray_9e","TxtMiddle",{"icon-arrow-right-tip":!i,"icon-arrow-down":i});return t.createElement("div",null,t.createElement("div",{className:"list-header Gray_75 Font12",onClick:this.toggleList},t.createElement("i",{className:s}),t.createElement("span",{className:"TxtMiddle"},n)),i?t.createElement("div",{className:"list-content"},o):null)}}]),r}(t.Component),Ia.propTypes={name:M().string.isRequired,isOpen:M().bool.isRequired,children:M().node},ya);function Ea(d){var r=d.name,a=d.isActive,e=d.clickHandler,n=d.icon,o=d.tip,i=T()("list-item",{"list-item-active":a}),s=n?{overflow:"visible"}:{};return t.createElement(t.Fragment,null,t.createElement("div",{className:i,onClick:e,style:s},r,n?t.createElement("span",{className:"tip-bottom mLeft5 LineHeight16 item-tip","data-tip":o},t.createElement(L.Z,{icon:n,className:"Font16"})):null))}Ea.propTypes={name:M().string.isRequired,isActive:M().bool.isRequired,clickHandler:M().func.isRequired,icon:M().string,tip:M().string};const po=Ea;var ba,Ca,uo=(Ca=ba=function(d){(0,A.default)(r,d);function r(){return(0,F.default)(this,r),(0,P.default)(this,(r.__proto__||b()(r)).apply(this,arguments))}return(0,R.default)(r,[{key:"getOpenState",value:function(e,n,o){return!!I().find(e,function(i){return n?i.projectId===n&&i.type===o:i.type===o})}},{key:"renderItem",value:function(e,n){var o=this.props,i=o.type,s=o.projectId,l=o.updateHighlightTab,c=!!e.projectId,p=c?i===e.type&&s===e.projectId:i===e.type,m=(0,D.default)({},e,{key:n,isActive:p,clickHandler:function(){l(e.type,e.projectId)}});return t.createElement(po,m)}},{key:"renderTabs",value:function(e,n){var o=this,i=this.props,s=i.type,l=i.projectId;if(e.dividor)return t.createElement("div",{className:"dividor",key:n});if(e.list){var c={key:n,name:e.name,isOpen:this.getOpenState(e.list,l,s)};return t.createElement(co,c,I().map(e.list,function(p,m){return o.renderItem(p,m)}))}else return this.renderItem(e,n)}},{key:"render",value:function(){var e=this,n=this.props.list;return t.createElement("div",{className:"contacts-sidebar"},t.createElement("div",{className:"Font20 pLeft24 mTop20 mBottom12"},_l("\u901A\u8BAF\u5F55")),t.createElement("div",{className:"pLeft24 pRight24 mBottom12 Relative"},t.createElement(ce.ZP,{type:"primary",style:{width:"100%"},className:"invite-btn",onClick:function(){(0,hn.ZP)({selectProject:!0})}},t.createElement(L.Z,{icon:"plus",className:"mRight5 TxtMiddle"}),t.createElement("span",{className:"TxtMiddle"},_l("\u6DFB\u52A0\u8054\u7CFB\u4EBA")))),t.createElement("div",{className:"contacts-tabs"},t.createElement(Le.Z,null,I().map(n,function(o,i){return e.renderTabs(o,i)}))))}}]),r}(t.Component),ba.propTypes={type:M().string.isRequired,projectId:M().string,list:M().arrayOf(M().object),updateHighlightTab:M().func.isRequired},Ca),Ve=u(82527),xa=u(22731),ut=u(3735),pe={NEW_FRIENDS:"NEW_FRIENDS",ALL_CONTACTS:"ALL_CONTACTS",CONTACTS:"CONTACTS",ALL_GROUPS:"ALL_GROUPS",FRIENDS:"FRIENDS",OTHERS:"OTHERS",PROJECT_CONTACTS:"PROJECT_CONTACTS",PROJECT_GROUPS:"PROJECT_GROUPS",INBOX:"INBOX"},mo=function(){var r=md.global.Account.projects;return I().map(r,function(a){var e=a.projectId,n=a.companyName;return{name:n,list:[{name:_l("\u90E8\u95E8"),type:pe.PROJECT_CONTACTS,projectId:e},{name:_l("\u7FA4\u7EC4"),type:pe.PROJECT_GROUPS,projectId:e}]}})},fo=[{name:_l("\u65B0\u7684\u597D\u53CB"),type:pe.NEW_FRIENDS},{name:_l("\u5E94\u7528\u6D88\u606F"),type:pe.INBOX},{dividor:!0},{name:_l("\u6240\u6709\u8054\u7CFB\u4EBA"),type:pe.ALL_CONTACTS},{name:_l("\u6211\u7684\u7FA4\u7EC4"),type:pe.ALL_GROUPS},{name:_l("\u597D\u53CB"),type:pe.FRIENDS}],et={ALL:-1,CREATED:0,JOINED:1},mt={ALL:-1,CLOSED:0,OPEN:1,DELTED:2},Zt={ALL:0,FRIENDS:1,PROJECT:2,OTHERS:3},In=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.projectId,e=a===void 0?"":a,n=r.range,o=n===void 0?Zt.ALL:n,i=r.pageIndex,s=i===void 0?1:i,l=r.pageSize,c=l===void 0?100:l,p=r.firstCode,m=p===void 0?"":p,f=r.isFilterOther,v=f===void 0?!1:f,h=r.keywords,g=h===void 0?"":h;return Ve.Z.getAllAddressbook({projectId:e,keywords:g,range:o,pageIndex:s,pageSize:c,isFilterOther:v})},ho=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.projectId,e=a===void 0?"":a,n=r.keywords,o=n===void 0?"":n,i=r.pageIndex,s=i===void 0?1:i,l=r.pageSize,c=l===void 0?20:l,p=r.searchGroupType,m=p===void 0?et.ALL:p,f=r.groupStatus,v=f===void 0?mt.ALL:f;return q.Z.getGroups({keywords:o,searchGroupType:m,status:v,pageIndex:s,pageSize:c,sortFiled:4,sortType:1,projectId:e})};const Ke={fetchAllContacts:function(r){var a=r.pageIndex,e=r.pageSize,n=r.keywords,o=r.isFilterOther,i={pageIndex:a,pageSize:e,keywords:n,isFilterOther:o};return i.range=Zt.ALL,In(i)},fetchFriends:function(r){var a=r.keywords,e=r.pageIndex,n=r.pageSize,o={pageIndex:e,pageSize:n,keywords:a};return o.range=Zt.FRIENDS,In(o)},fetchOthers:function(r){var a=r.keywords,e=r.pageIndex,n=r.pageSize,o={pageIndex:e,pageSize:n,keywords:a};return o.range=Zt.OTHERS,In(o)},fetchProjectContacts:function(r){var a=r.keywords,e=r.pageIndex,n=r.pageSize,o=r.projectId,i={pageIndex:e,pageSize:n,keywords:a,projectId:o};return i.range=Zt.PROJECT,In(i)},fetchDepartments:function(r){var a=r.projectId,e=r.pageIndex,n=r.pageSize,o={projectId:a,pageIndex:e,pageSize:n};return ut.Z.getProjectDepartmentByPage(o)},fetchDepartmentUsers:function(r){var a=r.projectId,e=r.departmentId,n={projectId:a,departmentId:e};return ut.Z.getDepartmentUsers(n)},fetchNewFriends:function(r){var a=r.pageIndex,e=r.pageSize,n=e===void 0?10:e,o={pageIndex:a,pageSize:n};return Ve.Z.getNewFriends(o)},fetchRecommends:function(r){var a=r.pageIndex,e=r.pageSize,n=e===void 0?5:e,o={pageIndex:a,pageSize:n};return Ve.Z.getMobileAddressRecommend(o)},fetchAllGroups:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=r.pageIndex,e=r.pageSize,n=r.keywords,o=n===void 0?"":n,i=r.projectId,s=i===void 0?"":i,l=r.searchGroupType,c=l===void 0?et.JOINED:l,p=r.groupStatus,m=p===void 0?mt.ALL:p,f={projectId:s,pageIndex:a,pageSize:e,searchGroupType:c,groupStatus:m,keywords:o,sortFiled:4,sortType:1};return ho(f)},fetchUserDetail:function(r){return new(it())(function(a,e){xa.Z.getAccountDetail({accountId:r}).then(function(n){n?a(n):e()})})},searchAddressbookAndDepartment:function(r){var a=r.projectId,e=r.keywords,n=r.range,o=r.pageIndex,i=r.pageSize,s=r.isFilterOther;return Ve.Z.searchAddressbookAndDepartment({projectId:a,keywords:e,range:n,pageIndex:o,pageSize:i,isFilterOther:s})}};var vo=function(r){return Ve.Z.editAgreeFriend({accountId:r})},go=function(r){return Ve.Z.editRefuseFriend({accountId:r})},As=function(r){return AddressListController.editIgnoreFriend({accountId:r})},Io=function(r){return Ve.Z.addIgnoreMobileAddress({recomendId:r})},yo=function(r){return Ve.Z.removeFriend({accountId:r})},Eo=function(r){return q.Z.openGroup({groupIds:[r]}).then(function(a){if(a)return a;alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})},bo=function(r){return q.Z.closeGroup({groupIds:[r]}).then(function(a){if(a)return a;alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})},Co=function(r){return q.Z.applyJoinGroup({groupId:r}).then(function(a){a.isApply?alert(_l("\u8BE5\u7FA4\u7EC4\u9700\u8981\u7BA1\u7406\u5458\u5BA1\u6279\u624D\u80FD\u52A0\u5165\uFF0C\u5DF2\u5411\u7BA1\u7406\u5458\u53D1\u51FA\u63D0\u9192"),3):a.isMember?alert(_l("\u52A0\u5165\u6210\u529F")):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),3)})},xo=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.state={isLoading:!1,pageIndex:1,hasMore:!0,listData:null},a.fetch=a.fetch.bind(a),a}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){e.isLoaded!==this.props.isLoaded&&e.isLoaded===!1&&this.setState({isLoading:!1,pageIndex:1,hasMore:!0,listData:null},this.fetch)}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.hasMore;o||!i||(this.setState({isLoading:!0}),Ke.fetchNewFriends({pageIndex:this.state.pageIndex,pageSize:10}).then(function(s){var l=s.allCount,c=s.list,p=e.state,m=p.listData,f=p.pageIndex;l!==0&&e.setState({hasMore:c&&c.length>=10,pageIndex:f+1,listData:(m||[]).concat(c)}),e.setState({isLoading:!1}),e.props.update(l!==0)}))}},{key:"updateListData",value:function(e,n){var o=this.state.listData;this.setState({listData:I().map(o,function(i){return i.createAccount.accountId===e?(0,D.default)({},i,{added:n}):i})})}},{key:"add",value:function(e){var n=this;return vo(e).then(function(o){o?n.updateListData(e,!0):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})}},{key:"refuse",value:function(e){var n=this;return go(e).then(function(o){o?n.updateListData(e,!1):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})}},{key:"render",value:function(){var e=this,n=this.state,o=n.listData,i=n.isLoading,s=n.pageIndex,l=n.hasMore;return!i&&(o===null||!o.length)||i&&s===1?null:t.createElement(t.Fragment,null,t.createElement("div",{className:"list-header mBottom10"},_l("\u5F85\u9A8C\u8BC1\u7684\u597D\u53CB\u7533\u8BF7")),t.createElement("table",{className:"list-content Font12"},t.createElement("thead",{className:"LineHeight30 Gray_6 TxtLeft"},t.createElement("tr",null,t.createElement("th",null,_l("\u8054\u7CFB\u4EBA")),t.createElement("th",null,_l("\u5907\u6CE8")),t.createElement("th",null,_l("\u7EC4\u7EC7")),t.createElement("th",{width:"30%",className:"TxtCenter"},_l("\u64CD\u4F5C")))),t.createElement("tbody",{className:"Gray_6"},o.length&&o.map(function(c){return t.createElement("tr",{key:c.createAccount.accountId},t.createElement("td",{className:"pRight24 userItem"},t.createElement("a",{href:"/user_"+c.createAccount.accountId,className:"Hand NoUnderline TxtMiddle",target:"_blank"},t.createElement("img",{className:"circle avatar",src:c.createAccount.avatar})),t.createElement("a",{href:"/user_"+c.createAccount.accountId,className:"Bold Hand overflow_ellipsis Gray mLeft8",title:c.createAccount.fullname},c.createAccount.fullname||"")),t.createElement("td",{className:"pRight24"},t.createElement("div",{className:"overflow_ellipsis TxtMiddle"},c.message||_l("\u65E0\u5907\u6CE8\u4FE1\u606F"))),t.createElement("td",null,t.createElement("div",{className:"overflow_ellipsis TxtMiddle wMax100"},c.createAccount.companyName||"")),c.added===void 0?t.createElement("td",{className:"TxtCenter"},t.createElement(ce.ZP,{type:"primary",size:"small",action:function(){return e.add(c.createAccount.accountId)}},_l("\u540C\u610F")),t.createElement(ce.ZP,{type:"link",size:"small",action:function(){return e.refuse(c.createAccount.accountId)}},_l("\u62D2\u7EDD"))):t.createElement("td",{className:"TxtCenter"},t.createElement("span",{className:"Gray_6"},c.added?_l("\u5DF2\u6DFB\u52A0"):_l("\u5DF2\u62D2\u7EDD"))))}))),l&&t.createElement("a",{className:"mTop10",href:"javascript: void 0;",onClick:this.fetch},_l("\u67E5\u770B\u66F4\u591A")),i?t.createElement(ve.Z,null):null)}}]),r}(t.Component),ko=u(1952),So=u(62745),ka=u(3540);function _o(d){var r=d.accountId,a=d.callback,e=(0,t.useState)(null),n=(0,re.Z)(e,2),o=n[0],i=n[1],s=(0,t.useRef)();(0,t.useEffect)(function(){xa.Z.getAccountBaseInfo({accountId:md.global.Account.accountId}).then(function(p){p&&i((0,D.default)({},p,{showExtraInput:!p.companyName||!p.profession}))})},[]);var l=function(){var m={accountId:r,message:o.message};o.showExtraInput&&(m.company=o.companyName,m.profession=o.profession),Ve.Z.addFriend(m).then(function(f){f.status===1?(typeof a=="function"&&a(),alert(_l("\u53D1\u9001\u6210\u529F"))):f.status===2?alert(_l("\u5BF9\u65B9\u5DF2\u662F\u60A8\u7684\u597D\u53CB"),3):f.joinFriendType===2?alert(_l("\u5BF9\u65B9\u6682\u4E0D\u5141\u8BB8\u4ED6\u4EBA\u52A0\u5176\u4E3A\u597D\u53CB"),3):alert(_l("\u53D1\u9001\u5931\u8D25"),2),c()}).catch(function(){alert(_l("\u53D1\u9001\u5931\u8D25"),2),c()})},c=function(){$(".addFriendConfirm").parent().remove()};return o?t.createElement(ye.Z,{visible:!0,dialogClasses:"addFriendConfirm",title:_l("\u6DFB\u52A0\u4E3A\u597D\u53CB"),okDisabled:!o.companyName||!o.profession,onOk:l,onCancel:c},t.createElement("div",{className:"recBox clearfix",ref:s},o.showExtraInput?t.createElement("div",{className:"tip"},_l("\u60A8\u9700\u8981\u5B8C\u5584\u7EC4\u7EC7/\u804C\u4F4D\u4FE1\u606F\uFF0C\u7B49\u5F85\u597D\u53CB\u786E\u8BA4")):t.createElement("div",{className:"tip"},_l("\u53D1\u9001\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u7B49\u5F85\u597D\u53CB\u786E\u8BA4")),o.showExtraInput&&t.createElement(t.Fragment,null,t.createElement("div",null,t.createElement(ka.Z,{className:"inputControl ThemeBorderColor3 w100",placeholder:_l("\u7EC4\u7EC7\uFF08\u5FC5\u586B\uFF09"),value:o.companyName,"data-type":"company",onChange:function(m){i((0,D.default)({},o,{companyName:I().trim(m)}))}})),t.createElement("div",null,t.createElement(ka.Z,{className:"inputControl ThemeBorderColor3 w100",placeholder:_l("\u804C\u4F4D\uFF08\u5FC5\u586B\uFF09"),value:o.profession,"data-type":"profession",onChange:function(m){i((0,D.default)({},o,{profession:I().trim(m)}))}}))),t.createElement("div",null,t.createElement(So.Z,{className:"inputControl applyMsg ThemeBorderColor3",defaultValue:o.message||_l("\u6211\u662F%0",md.global.Account.fullname),onChange:function(m){i((0,D.default)({},o,{message:m}))}})))):null}const Vn=function(d){(0,ko.Z)(_o,(0,D.default)({},d,{onClose:function(){}}))};var To=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.state={isLoading:!1,pageIndex:1,hasMore:!0,listData:null},a.fetch=a.fetch.bind(a),a}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){e.isLoaded!==this.props.isLoaded&&e.isLoaded===!1&&this.setState({isLoading:!1,pageIndex:1,hasMore:!0,listData:null},this.fetch)}},{key:"updateListData",value:function(e,n){var o=this.state.listData;this.setState({listData:I().map(o,function(i){return i.accountId===e?(0,D.default)({},i,{added:n}):i})})}},{key:"add",value:function(e){Vn({accountId:e})}},{key:"ignore",value:function(e){var n=this;return Io(e).then(function(o){o?n.updateListData(e,!1):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.hasMore;o||!i||(this.setState({isLoading:!0}),Ke.fetchRecommends({pageIndex:this.state.pageIndex,pageSize:10}).then(function(s){var l=s.allCount,c=s.list,p=e.state,m=p.listData,f=p.pageIndex;l!==0&&e.setState({hasMore:c&&c.length>=10,pageIndex:f+1,listData:(m||[]).concat(c)}),e.setState({isLoading:!1}),e.props.update(l!==0)}))}},{key:"render",value:function(){var e=this,n=this.state,o=n.listData,i=n.isLoading,s=n.pageIndex,l=n.hasMore;return!i&&(o===null||!o.length)||i&&s===1?null:t.createElement(t.Fragment,null,t.createElement("div",{className:"list-header mBottom10 Font15"},_l("\u63A8\u8350\u597D\u53CB")),t.createElement("table",{className:"list-content Font12"},t.createElement("thead",{className:"LineHeight30 Gray_6 TxtLeft"},t.createElement("tr",null,t.createElement("th",null,_l("\u8054\u7CFB\u4EBA")),t.createElement("th",null,_l("\u624B\u673A\u8054\u7CFB\u4EBA")),t.createElement("th",{width:"186px"},_l("\u7EC4\u7EC7")),t.createElement("th",{width:"30%",className:"TxtCenter"},_l("\u64CD\u4F5C")))),t.createElement("tbody",{className:"Gray_6"},o.length&&o.map(function(c){return t.createElement("tr",{key:c.accountId},t.createElement("td",{className:"userItem pRight24"},t.createElement("a",{href:"/user_"+c.accountId,className:"Hand NoUnderline",target:"_blank"},t.createElement("img",{className:"circle avatar",src:c.avatar})),t.createElement("a",{href:"/user_"+c.accountId,className:"Bold Hand overflow_ellipsis Gray mLeft8",title:c.fullname},c.fullname||"")),t.createElement("td",{className:"pRight24"},t.createElement("div",{className:"overflow_ellipsis TxtMiddle"},c.mobileName)),t.createElement("td",null,t.createElement("div",{className:"overflow_ellipsis TxtMiddle wMax100"},c.companyName||"")),c.added===void 0?t.createElement("td",{className:"TxtCenter"},t.createElement(ce.ZP,{type:"primary",size:"small",onClick:function(){return e.add(c.accountId)}},_l("\u6DFB\u52A0")),t.createElement(ce.ZP,{type:"link",size:"small",action:function(){return e.ignore(c.accountId)}},_l("\u5FFD\u7565"))):t.createElement("td",{className:"TxtCenter"},t.createElement("span",{className:"Gray_6"},c.added?_l("\u5DF2\u6DFB\u52A0"):_l("\u5FFD\u7565"))))}))),l&&t.createElement("a",{className:"mTop10",href:"javascript: void 0;",onClick:this.fetch},_l("\u67E5\u770B\u66F4\u591A")),i?t.createElement(ve.Z,null):null)}}]),r}(t.Component);function jt(d){var r=d.isSearch,a=d.type;if(r)return t.createElement("div",{className:"list-null"},t.createElement("div",{className:"list-null-icon search"}),t.createElement("div",{className:"mTop15"},_l("\u65E0\u5339\u914D\u7ED3\u679C")));if(a==="groups")return t.createElement("div",{className:"list-null"},t.createElement("div",null,_l("\u6682\u65E0\u7FA4\u7EC4")));if(a==="contacts")return t.createElement("div",{className:"list-null"},t.createElement("div",null,_l("\u6682\u65E0\u6210\u5458")));if(a==="newfriends")return t.createElement("div",{className:"list-null"},t.createElement("div",{className:"list-null-icon newfriends"}),t.createElement("div",{className:"mTop20 Font17 Gray_9e"},_l("\u6682\u65E0\u65B0\u7684\u597D\u53CB")))}var No=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.state={loadedRecommends:!1,haveRecommends:!0,loadedApplys:!1,haveApplys:!0,firstLoading:!0},a.updateRecommendsFlag=a.updateRecommendsFlag.bind(a),a.updateApplysFlag=a.updateApplysFlag.bind(a),a}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(){this.setState({loadedRecommends:!1,haveRecommends:!0,loadedApplys:!1,haveApplys:!0,firstLoading:!0})}},{key:"updateRecommendsFlag",value:function(e){this.setState({loadedRecommends:!0,haveRecommends:e,firstLoading:!1})}},{key:"updateApplysFlag",value:function(e){this.setState({loadedApplys:!0,haveApplys:e,firstLoading:!1})}},{key:"renderContent",value:function(){var e=this.state,n=e.firstLoading,o=e.loadedApplys,i=e.loadedRecommends,s=e.haveRecommends,l=e.haveApplys;return o&&i&&!l&&!s?t.createElement(jt,{type:"newfriends"}):t.createElement(Le.Z,null,t.createElement("div",{className:"pAll20"},t.createElement(xo,{isLoaded:o,update:this.updateApplysFlag}),t.createElement(To,{isLoaded:i,update:this.updateRecommendsFlag}),n?t.createElement(ve.Z,{className:"mTop20"}):null))}},{key:"render",value:function(){return t.createElement("div",{className:"contacts-new-friends"},this.renderContent())}}]),r}(t.Component),Do=u(60967),wo=u(23002),Wt=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.state={value:a.keywords||""},e.addHandler=e.addHandler.bind(e),e.search=I().debounce(a.search,500),e.searchHandler=e.searchHandler.bind(e),e}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){e.keywords!==this.props.keywords&&this.setState({value:e.keywords})}},{key:"componentWillUnmount",value:function(){this.search&&this.search.cancel&&this.search.cancel()}},{key:"searchHandler",value:function(e){var n=e.target.value;this.setState({value:n}),this.search(n)}},{key:"addHandler",value:function(){var e=this.props,n=e.type,o=e.projectId;switch(n){case"contacts":(0,hn.ZP)({selectProject:!0});break;case"friends":(0,hn.ZP)({projectId:o,fromType:0});break;case"projectContacts":(0,va.Z)({SelectUserSettings:{filterAccountIds:[md.global.Account.accountId],filterProjectId:o,callback:function(s){fn.Z.inviteUser({sourceId:o,accountIds:s.map(function(l){return l.accountId}),fromType:4}).then(function(l){(0,N.sH)(l)})}}});break;case"groups":wo.Z.createInit({projectId:o});break;default:break}}},{key:"render",value:function(){var e=this.props.type,n=e==="groups",o=e==="friends",i=n?_l("\u521B\u5EFA\u7FA4\u7EC4"):o?_l("\u9080\u8BF7\u597D\u53CB"):_l("\u9080\u8BF7\u540C\u4E8B");return t.createElement("div",{className:"contacts-search"},t.createElement("div",{className:"contacts-search-wrapper"},t.createElement(L.Z,{icon:"search",className:"Font18 Gray_a mTop1"}),t.createElement("input",{type:"text",className:"contacts-search-input",placeholder:_l("\u641C\u7D22"),onChange:this.searchHandler,value:this.state.value})),t.createElement("span",{"data-tip":i},t.createElement(L.Z,{icon:n?"group_add":"invite",className:T()("contacts-search-addbtn pLeft12 pRight20 Gray_9e Hand ThemeHoverColor3",n?"Font22":"Font18 mLeft5"),onClick:this.addHandler})))}}]),r}(t.Component);function Ao(d){var r=d.avatar,a=d.fullname,e=d.accountId,n=d.isSelected,o=d.isFriend,i=d.isContact,s=d.itemClickHandler,l=d.searchDepartmentUsers,c=d.departments,p=c===void 0?[]:c,m=T()("list-item Hand Font13",{ThemeBGColor6:n}),f=!I().isEmpty(p)&&p[p.length-1]||"";return t.createElement("div",{className:m,onClick:function(){s({accountId:e,isFriend:o,isContact:i})}},t.createElement("img",{src:r,placeholder:"/staticfiles/images/blank.gif",className:"list-item-avatar"}),t.createElement("span",{className:"list-item-name",title:a},a),l&&t.createElement("span",{className:"list-item-department"},f))}var yn=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.debouncedScroll=I().throttle(a.scrollEvent.bind(a),20,{leading:!0}),a}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.props.fetch()}},{key:"componentWillUnmount",value:function(){this.debouncedScroll.cancel()}},{key:"scrollEvent",value:function(e,n){var o=n.direction,i=n.maximum,s=n.position;o==="down"&&i-s<20&&this.props.fetch()}},{key:"renderList",value:function(e){var n=this;return t.createElement(t.Fragment,null,I().map(e,function(o){return t.createElement(Ao,(0,D.default)({},o,{key:o.accountId,itemClickHandler:n.props.itemClickHandler,isSelected:o.accountId===n.props.selectedAccountId,searchDepartmentUsers:n.props.searchDepartmentUsers}))}))}},{key:"renderSingleList",value:function(e){var n=e.title,o=e.list;return t.createElement("div",{className:"list-wrapper",key:n},t.createElement("div",{className:"list-packet list-packet-name Gray_75 Font12"},n),t.createElement("div",null,this.renderList(o)))}},{key:"renderListContent",value:function(){var e=this,n=this.props,o=n.isLoading,i=n.list,s=n.isSearch;if(s)return!o&&i&&i.length===0?t.createElement(jt,{isSearch:s,type:"contacts"}):t.createElement(t.Fragment,null,this.renderList(i),o?t.createElement(ve.Z,{className:"mTop10"}):null);var l=I().keys(i);return!l.length&&o?t.createElement(ve.Z,{className:"mTop10"}):t.createElement(t.Fragment,null,I().map(l.sort(function(c,p){return c.localeCompare(p)}),function(c){var p={list:i[c],title:c};return e.renderSingleList(p)}),o?t.createElement(ve.Z,null):null,!o&&l&&l.length===0?t.createElement(jt,{isSearch:s,type:"contacts"}):null)}},{key:"render",value:function(){var e=this.props.searchDepartmentUsers;return t.createElement(Le.Z,{updateEvent:e?function(){}:this.debouncedScroll},this.renderListContent())}}]),r}(t.Component),Sa=u(70264),Kn=u(16469),Mo=function(d){(0,A.default)(r,d);function r(){return(0,F.default)(this,r),(0,P.default)(this,(r.__proto__||b()(r)).apply(this,arguments))}return(0,R.default)(r,[{key:"render",value:function(){var e=this;return t.createElement("div",{className:"contacts-add-friend"},t.createElement(L.Z,{icon:"task-folder-message",className:"contacts-add-friend-icon"}),t.createElement("div",{className:"Font16 mBottom25"},_l("\u5BF9\u65B9\u4E0D\u662F\u60A8\u7684\u8054\u7CFB\u4EBA\uFF0C\u65E0\u6CD5\u67E5\u770B")),t.createElement(ce.ZP,{type:"primary",size:"medium",onClick:function(){Vn({accountId:e.props.accountId})}},_l("\u52A0\u4E3A\u597D\u53CB")))}}]),r}(t.Component),Te={},$t={data:null,isLoading:!1,isShowMenu:!1,isShowDetail:!1,hasProjects:!1,activeProjectId:"",dropDownValue:"",fullDepartmentInfo:{}},En=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.getDepartmentFullName=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=e.state.fullDepartmentInfo,i=o===void 0?{}:o,s=n.map(function(l){return l.departmentId}).filter(function(l){return!i[l]});I().isEmpty(s)||ut.Z.getDepartmentFullNameByIds({projectId:e.state.activeProjectId,departmentIds:s}).then(function(l){l.forEach(function(c){i[c.id]=c.name}),e.setState({fullDepartmentInfo:i})})},e.state=$t,e.addFriendConfirm=e.addFriendConfirm.bind(e),e.deleteFriendConfirm=e.deleteFriendConfirm.bind(e),e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){var e=this.props.accountId;e&&this.fetchUserDetail(e)}},{key:"componentWillReceiveProps",value:function(e){e.accountId&&e.accountId!==this.props.accountId?this.fetchUserDetail(e.accountId):e.accountId===null&&this.setState($t)}},{key:"fetchUserDetail",value:function(e){var n=this;this.setState({isLoading:!0}),Ke.fetchUserDetail(e).then(function(o){if(o){o.userCards=(I().get(o,"userCards")||[]).filter(function(l){return l.companyName});var i=o.userCards,s=i.length;n.setState((0,D.default)({},$t,{data:o,hasProjects:s,activeProjectId:s?i[0].projectId:""}))}else n.setState((0,D.default)({},$t,{data:o}))}).catch(function(){n.setState((0,D.default)({},$t,{data:void 0}))})}},{key:"addFriendConfirm",value:function(){var e=this.props.accountId;Vn({accountId:e})}},{key:"deleteFriendConfirm",value:function(){var e=this,n=this.props.accountId;ye.Z.confirm({title:_l("\u786E\u8BA4\u5220\u9664\u5F53\u524D\u597D\u53CB\uFF1F"),description:_l("\u5220\u9664\u540E\u60A8\u5C06\u4E0D\u663E\u793A\u5728\u5BF9\u65B9\u7684\u597D\u53CB\u5217\u8868\u91CC"),onOk:function(){yo(n).then(function(){alert(_l("\u5220\u9664\u6210\u529F"),1),e.setState({data:(0,D.default)({},e.state.data,{isFriend:!1})})})}})}},{key:"renderFriendTag",value:function(){var e=this,n=this.state.data,o=n.isFriend,i=n.accountId;return i===md.global.Account.accountId?null:o?t.createElement("span",{className:"Right Gray_75 Hand Relative ThemeHoverColor3",onClick:function(){e.setState({isShowMenu:!0})}},t.createElement("i",{className:"Font14 icon-check_circle TxtMiddle"}),t.createElement("span",{className:"mLeft5 TxtMiddle Font12"},_l("\u6211\u7684\u597D\u53CB")),t.createElement("i",{className:"Font14 mLeft5 icon-moreop TxtMiddle"}),this.state.isShowMenu?t.createElement(qt.Z,{onClickAway:function(){e.setState({isShowMenu:!1})},con:".contacts-detail-wrapper"},t.createElement(Kn.Z,{icon:t.createElement(L.Z,{icon:"hr_delete",className:"TxtMiddle"}),onClick:this.deleteFriendConfirm},t.createElement("span",{className:"TxtMiddle"},_l("\u5220\u9664\u597D\u53CB")))):null):t.createElement("span",{className:"Right Gray_75 Hand ThemeHoverColor3",onClick:this.addFriendConfirm},t.createElement("i",{className:"Font14 icon-custom_add_circle TxtMiddle"}),t.createElement("span",{className:"mLeft5 TxtMiddle Font12"},_l("\u6DFB\u52A0\u597D\u53CB")))}},{key:"renderHeader",value:function(){var e=this,n=this.state.data,o=n.avatar,i=n.fullname,s=n.companyName,l=n.profession,c=n.accountId,p=n.isContact;return t.createElement(t.Fragment,null,t.createElement("div",{className:"detail-header"},t.createElement("img",{src:o,className:"detail-header-avatar"}),t.createElement("div",{className:"detail-header-info"},t.createElement("div",{className:"Font18 clearfix"},t.createElement("div",{className:"ellipsis Left",style:{maxWidth:"200px"}},i),this.renderFriendTag()),t.createElement("div",{className:"overflowHidden user-info"},t.createElement("div",{className:"Font12 Gray_75 ellipsis"},s),t.createElement("div",{className:"Font12 Gray_75 ellipsis"},l)))),t.createElement("div",{className:"detail-btns mTop24"},t.createElement("a",{href:"javascript:void 0;",className:"detail-btn ThemeBGColor3 ThemeHoverBGColor2 NoUnderline",onClick:function(){p?Te.callback({accountId:c}):e.addFriendConfirm()}},t.createElement(L.Z,{icon:"chat",className:"mRight5 Font18"}),_l("\u53D1\u6D88\u606F")),t.createElement("a",{href:"/user_"+c,className:"detail-btn Gray_75 mLeft10 NoUnderline",target:"_blank"},t.createElement(L.Z,{icon:"dynamic-empty",className:"mRight10 Font17"}),_l("TA\u7684\u52A8\u6001"))))}},{key:"renderDetailCard",value:function(){var e=this.state,n=e.data,o=n.birthdate,i=n.gender,s=n.imqq,l=n.snsLinkedin,c=n.snsQQ,p=n.snsSina,m=n.weiXin,f=e.isShowDetail,v=t.createElement("span",{className:"Gray_bd"},_l("\u672A\u586B\u5199"));return f?t.createElement("div",{className:"Font13 detail-card border-top border-bottom"},t.createElement("div",{className:"detail-info-row half"},t.createElement("span",{className:"Gray_75"},_l("\u751F\u65E5"),"\uFF1A"),ie()(o).format("YYYY-MM-DD")||v),t.createElement("div",{className:"detail-info-row half"},t.createElement("span",{className:"Gray_75"},_l("\u6027\u522B"),"\uFF1A"),i===1?_l("\u7537"):_l("\u5973")),t.createElement("div",{className:"detail-info-row half"},t.createElement("span",{className:"Gray_75"},"QQ\uFF1A"),s||v),t.createElement("div",{className:"detail-info-row half"},t.createElement("span",{className:"Gray_75"},_l("\u5FAE\u4FE1"),"\uFF1A"),m||v),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},"LinkeIn\uFF1A"),l||v),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u65B0\u6D6A\u5FAE\u535A"),"\uFF1A"),p||v),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u817E\u8BAF\u5FAE\u535A"),"\uFF1A"),c||v)):null}},{key:"renderProjectCards",value:function(){var e=this.state.hasProjects;if(!e)return null;var n=this.state.data.userCards;return t.createElement(t.Fragment,null,t.createElement("div",{className:"Font15 mTop25 mBottom5"},_l("\u540D\u7247")),t.createElement("div",{className:"detail-tabs"},this.renderProjectsTab()),this.renderProjectCard())}},{key:"renderProjectsTab",value:function(){var e=this,n=this.state.data.userCards,o=n.slice(0),i=this.state,s=i.activeProjectId,l=i.dropDownValue,c=function(g){return t.createElement(t.Fragment,null,I().map(g,function(E){var k=s===E.projectId;return t.createElement("div",{key:E.projectId,className:T()("detail-tab detail-tab-border",{"ThemeColor3 ThemeBorderColor3":k,"Gray_75 Hand":!k}),onClick:function(){e.setState({activeProjectId:E.projectId})}},E.companyName)}))};if(o.length<=3)return c(o);var p=o.slice(0,2),m=o.slice(2),f=I().map(m,function(h){var g=h.projectId;return g}),v={value:l||f[0],data:I().map(m,function(h){var g=h.projectId,E=h.companyName;return{text:E,value:g,type:"default"}}),menuStyle:{left:"auto",right:"0px"},onChange:function(g){e.setState({activeProjectId:g,dropDownValue:g})}};return t.createElement(t.Fragment,null,c(p),t.createElement(un.Z,(0,D.default)({className:T()("detail-tab",{"ThemeColor3 ThemeBorderColor3":f.indexOf(s)!==-1,Gray_75:f.indexOf(s)===-1})},v)))}},{key:"renderProjectCard",value:function(){var e=this,n=t.createElement("span",{className:"Gray_bd"},_l("\u672A\u586B\u5199")),o=this.state,i=o.data.userCards,s=o.activeProjectId,l=o.fullDepartmentInfo,c=l===void 0?{}:l,p=I().find(i,function(S){return S.projectId===s}),m=p.companyName,f=p.department,v=p.job,h=p.jobNumber,g=p.workSite,E=p.contactPhone,k=p.departmentInfos;return t.createElement("div",{className:"pTop5 Font13 mTop"},t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u7EC4\u7EC7"),"\uFF1A"),m||n),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u90E8\u95E8"),"\uFF1A"),f?t.createElement(Sa.Z,{tooltipClass:"departmentFullNametip",popupPlacement:"bottom",text:t.createElement("div",null,k.map(function(S,G){var O=(e.state.fullDepartmentInfo[S.departmentId]||"").split("/");return t.createElement("div",{className:T()({mBottom8:G<k.length-1})},O.map(function(J,ee){return t.createElement("span",null,J,O.length-1>ee&&t.createElement("span",{className:"mLeft8 mRight8"},"/"))}))})),mouseEnterDelay:.5},t.createElement("span",{onMouseEnter:function(){return e.getDepartmentFullName(k)}},f)):t.createElement("span",null,n)),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u804C\u4F4D"),"\uFF1A"),v||n),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u5DE5\u53F7"),"\uFF1A"),h||n),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u5DE5\u4F5C\u5730\u70B9"),"\uFF1A"),g||n),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u5DE5\u4F5C\u7535\u8BDD"),"\uFF1A"),E||n))}},{key:"renderDetail",value:function(){var e=this,n=this.state,o=n.data,i=o.mobilePhone,s=o.email,l=o.isPrivateEmail,c=o.isPrivateMobile,p=n.isShowDetail,m=t.createElement("span",{className:"Gray_bd"},_l("\u672A\u586B\u5199"));return t.createElement(t.Fragment,null,t.createElement("div",{className:"Font13 mTop24"},t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u7535\u8BDD"),"\uFF1A"),c?_l("\u4FDD\u5BC6"):i||m),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u90AE\u7BB1"),"\uFF1A"),l?_l("\u4FDD\u5BC6"):s||m)),this.renderDetailCard(),t.createElement("div",{className:"mTop10 Font13 Gray_9e Hand ThemeHoverColor3",onClick:function(){e.setState({isShowDetail:!p})}},t.createElement("span",null,p?"\u6536\u8D77\u8BE6\u60C5":"\u5C55\u5F00\u8BE6\u60C5"),p?t.createElement(L.Z,{icon:"arrow-up",className:"mLeft5"}):t.createElement(L.Z,{icon:"arrow-down",className:"mLeft5"})))}},{key:"render",value:function(){var e=this.state,n=e.isLoading,o=e.data,i=this.props,s=i.accountId,l=i.projectId,c=i.hideBackBtn;return n?t.createElement("div",{className:"pTop20"},t.createElement(ve.Z,null)):o===null?null:!n&&o===void 0?t.createElement(Mo,{accountId:s}):t.createElement(Le.Z,null,t.createElement("div",{className:"contacts-detail-wrapper"},l&&!c&&t.createElement("div",{className:"back Hand mBottom24",onClick:this.props.back},t.createElement(L.Z,{icon:"arrow-left-border"})," ",_l("\u8FD4\u56DE")),this.renderHeader(),this.renderDetail(),this.renderProjectCards()))}}]),r}(t.Component),Lo=function(r,a){var e=r||{};return I().each(a,function(n){var o=n.firstCode,i=/[A-Z]/.test(o.toUpperCase())?o.toUpperCase():"#";e[i]||(e[i]=[]),e[i].push(n)}),e},_a={listData:null,isLoading:!1,hasMore:!0,selectedAccountId:null,pageIndex:1,keywords:"",isFilterOther:!0},Ro=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.state=_a,a.promise=null,a.changeFilter=a.changeFilter.bind(a),a.search=a.search.bind(a),a.fetch=a.fetch.bind(a),a.fetchContacts=a.fetchContacts.bind(a),a.itemClickHandler=a.itemClickHandler.bind(a),a}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(){this.setState(_a,this.fetch)}},{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"fetchContacts",value:function(){var e=this,n=this.state,o=n.pageIndex,i=n.keywords,s=n.isFilterOther;return this.promise=Ke.fetchAllContacts({pageIndex:o,isFilterOther:s,keywords:i}),this.promise.then(function(l){var c=e.state.listData;return i?e.setState({listData:(c||[]).concat(l.list)}):e.setState({pageIndex:o+1,listData:Lo(c,l.list)}),l.list&&l.list.length})}},{key:"changeFilter",value:function(){var e=this.state.isFilterOther;this.setState({isFilterOther:!e,pageIndex:1,hasMore:!0,listData:null},this.fetch)}},{key:"search",value:function(e){this.abortRequest(),this.setState({isLoading:!1,pageIndex:1,keywords:e,hasMore:!0,listData:null},this.fetch)}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.pageIndex,s=n.hasMore;o||!s||(this.setState({isLoading:!0}),this.fetchContacts().then(function(l){e.setState({isLoading:!1,pageIndex:i+1,hasMore:l})}))}},{key:"itemClickHandler",value:function(e){var n=e.accountId;this.setState({selectedAccountId:n})}},{key:"renderFilter",value:function(){var e=this.state.isFilterOther;return t.createElement("div",{className:"pBottom2 pTop10 pLeft15 Gray_75"},t.createElement(Do.Z,{checked:e,text:_l("\u4E0D\u663E\u793A\u5176\u4ED6\u534F\u4F5C\u5173\u7CFB"),onClick:this.changeFilter}))}},{key:"render",value:function(){var e=this.state,n=e.listData,o=e.keywords,i=e.selectedAccountId,s=e.isLoading,l=o!=="";return t.createElement(t.Fragment,null,t.createElement("div",{className:"contacts-list"},t.createElement(Wt,{search:this.search,keywords:o,type:"contacts"}),t.createElement("div",{className:"contacts-list-content"},t.createElement(yn,{isSearch:l,selectedAccountId:i,list:n,isLoading:s,fetch:this.fetch,itemClickHandler:this.itemClickHandler}))),t.createElement("div",{className:"contacts-detail"},t.createElement(En,{accountId:i})))}}]),r}(t.Component);function Ta(d){var r=d.avatar,a=d.name,e=d.isOpen,n=d.groupId,o=d.groupMemberCount,i=d.isSelected,s=d.itemClickHandler,l=T()("list-item Font13 Hand",{"Gray_bd disabled":!e,ThemeBGColor6:i}),c=e?null:{opacity:.5};return t.createElement("div",{className:l,onClick:function(){s(n)}},t.createElement("img",{src:r,placeholder:"/staticfiles/images/blank.gif",className:"list-item-avatar",style:c}),t.createElement("span",{className:"list-item-name",title:a},a),e?null:t.createElement("span",{className:"pLeft5 group-tip"},_l("(\u5DF2\u5173\u95ED)")),t.createElement("span",{className:"Gray_bd pLeft5"},o))}var Po=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.debouncedScroll=I().throttle(a.scrollEvent.bind(a),20,{leading:!0}),a}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.props.fetch()}},{key:"componentWillUnmount",value:function(){this.debouncedScroll.cancel()}},{key:"scrollEvent",value:function(e,n){var o=n.direction,i=n.maximum,s=n.position;o==="down"&&i-s<20&&this.props.fetch()}},{key:"renderSingleList",value:function(e){var n=this,o=e.title,i=e.list;return t.createElement("div",{className:"list-wrapper",key:o},t.createElement("div",{className:"list-packet list-packet-name Gray_75 Font12"},o),t.createElement("div",null,I().map(i,function(s){return t.createElement(Ta,(0,D.default)({},s,{key:s.groupId,itemClickHandler:n.props.itemClickHandler,isSelected:s.groupId===n.props.selectedGroupId}))})))}},{key:"renderListContent",value:function(){var e=this,n=this.props,o=n.isLoading,i=n.list,s=n.isSearch;if(s)return!o&&i&&i.length===0?t.createElement(jt,{isSearch:s,type:"groups"}):t.createElement(t.Fragment,null,I().map(i,function(c){return t.createElement(Ta,(0,D.default)({},c,{key:c.groupId,itemClickHandler:e.props.itemClickHandler,isSelected:c.groupId===e.props.selectedGroupId}))}),o?t.createElement(ve.Z,null):null);var l=I().keys(i);return!l.length&&o?t.createElement(ve.Z,{className:"mTop10"}):t.createElement(t.Fragment,null,I().map(l.sort(function(c,p){return c.localeCompare(p)}),function(c){var p={list:i[c],title:c};return e.renderSingleList(p)}),o?t.createElement(ve.Z,null):null,!o&&l&&l.length===0?t.createElement(jt,{isSearch:s,type:"groups"}):null)}},{key:"render",value:function(){return t.createElement(Le.Z,{updateEvent:this.debouncedScroll},this.renderListContent())}}]),r}(t.Component),Fo=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.openSettingDialog=e.openSettingDialog.bind(e),e}return(0,R.default)(r,[{key:"openSettingDialog",value:function(){var e=this.props.group.groupId;ga({groupId:e})}},{key:"renderHeader",value:function(){var e=this.props.group,n=e.avatar,o=e.name,i=e.groupId,s=e.isOpen;return t.createElement(t.Fragment,null,s===!1?t.createElement("div",{className:"detail-header"},t.createElement("img",{src:n,className:"detail-header-avatar disabled"}),t.createElement("div",{className:"detail-header-info Gray_bd"},t.createElement("div",{className:"Font18 clearfix"},o))):t.createElement("div",{className:"detail-header"},t.createElement("img",{src:n,className:"detail-header-avatar"}),t.createElement("div",{className:"detail-header-info"},t.createElement("div",{className:"Font18 clearfix"},o,t.createElement("i",{className:"Font16 Gray_9e icon-settings TxtMiddle mLeft10 Hand ThemeHoverColor3",onClick:this.openSettingDialog})))),s===!1?null:t.createElement("div",{className:"detail-btns mTop24"},t.createElement("a",{href:"javascript:void 0;",className:"detail-btn ThemeBGColor3 ThemeHoverBGColor2 NoUnderline",onClick:function(){Te.callback({groupId:i})}},t.createElement(L.Z,{icon:"chat",className:"mRight5 Font18"}),_l("\u53D1\u6D88\u606F")),t.createElement("a",{href:"/feed?groupId="+i,target:"_blank",className:"detail-btn Gray_75 mLeft10 NoUnderline"},t.createElement(L.Z,{icon:"dynamic-empty",className:"mRight10 Font17"}),_l("\u7FA4\u7EC4\u52A8\u6001"))))}},{key:"openGroup",value:function(){var e=this.props,n=e.group.groupId,o=e.updateGroupModel;Eo(n).then(function(i){i?o(n,!0):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})}},{key:"closeGroup",value:function(){var e=this.props,n=e.group.groupId,o=e.updateGroupModel;bo(n).then(function(i){i?o(n,!1):alert(_l("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"),2)})}},{key:"renderDetail",value:function(){var e=this,n=this.props.group,o=n.groupMemberCount,i=n.createTime,s=n.isAdmin,l=n.isOpen,c=n.createAccount;return t.createElement("div",{className:"Font13 mTop24"},t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u521B\u5EFA\u4EBA"),"\uFF1A"),c.fullname),t.createElement("div",{className:"detail-info-row clearfix"},t.createElement("span",{className:"Gray_75"},_l("\u7FA4\u7EC4\u72B6\u6001"),"\uFF1A"),l===!1?_l("\u5173\u95ED"):_l("\u5F00\u542F"),l===!1?t.createElement("span",{className:"ThemeHoverColor3 Right Hand",onClick:function(){e.openGroup()}},_l("\u5F00\u542F")):null),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u7FA4\u7EC4\u6210\u5458"),"\uFF1A"),o),t.createElement("div",{className:"detail-info-row"},t.createElement("span",{className:"Gray_75"},_l("\u521B\u5EFA\u65F6\u95F4"),"\uFF1A"),i))}},{key:"render",value:function(){return this.props.group?t.createElement(Le.Z,null,t.createElement("div",{className:"contacts-detail-wrapper"},this.renderHeader(),this.renderDetail())):null}}]),r}(t.Component),Go=function(d){(0,A.default)(r,d);function r(){return(0,F.default)(this,r),(0,P.default)(this,(r.__proto__||b()(r)).apply(this,arguments))}return(0,R.default)(r,[{key:"render",value:function(){var e=this.props.groupId;return t.createElement("div",{className:"contacts-add-friend"},t.createElement(L.Z,{icon:"task-folder-message",className:"contacts-add-friend-icon"}),t.createElement("div",{className:"Font16 mBottom25"},_l("\u6B64\u7FA4\u7EC4\u9700\u52A0\u5165\u540E\u624D\u53EF\u8BBF\u95EE")),t.createElement(ce.ZP,{type:"primary",size:"medium",action:function(){return Co(e)}},_l("\u7533\u8BF7\u52A0\u5165\u6B64\u7FA4\u7EC4")))}}]),r}(t.Component);function Na(d){var r=d.changeGroupFilter,a=d.changeGroupStatus,e=d.searchGroupType,n=d.groupStatus,o=d.isProject,i=o?[{text:_l("\u6211\u52A0\u5165\u7684\u7FA4\u7EC4"),value:et.JOINED},{text:_l("\u6211\u521B\u5EFA\u7684\u7FA4\u7EC4"),value:et.CREATED},{text:_l("\u6240\u6709\u7FA4\u7EC4"),value:et.ALL}]:[{text:_l("\u6240\u6709\u7FA4\u7EC4"),value:et.JOINED},{text:_l("\u6211\u521B\u5EFA\u7684\u7FA4\u7EC4"),value:et.CREATED}],s=t.createElement(Kn.Z,{onClick:a},_l("\u663E\u793A\u5DF2\u5173\u95ED\u7684\u7FA4\u7EC4"));return t.createElement("div",{className:"pLeft10 Gray_75"},t.createElement(un.Z,{data:i,onChange:r,value:e,className:"ThemeHoverColor3"},t.createElement("div",{className:"ming Dividor"}),t.cloneElement(s,n===mt.ALL?{icon:t.createElement(L.Z,{icon:"hr_ok"}),iconAtEnd:!0,className:"ThemeColor3"}:{className:"Gray_9"})))}Na.propTypes={changeGroupFilter:M().func.isRequired,changeGroupStatus:M().func.isRequired,searchGroupType:M().number,groupStatus:M().number};const Oo=Na;var zn,Da,Uo=function(r,a){var e=r||{};return I().each(a,function(n){var o=n.firstCode,i=/[A-Z]/.test(o.toUpperCase())?o.toUpperCase():"#";e[i]||(e[i]=[]),e[i].push(n)}),e},wa={listData:null,selectedGroupId:null,isLoading:!1,hasMore:!0,pageIndex:1,keywords:"",searchGroupType:et.JOINED,groupStatus:mt.OPEN},Bo=(Da=zn=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.state=wa,e.promise=null,e.search=e.search.bind(e),e.changeFilter=e.changeFilter.bind(e),e.changeStatus=e.changeStatus.bind(e),e.fetch=e.fetch.bind(e),e.fetchGroups=e.fetchGroups.bind(e),e.itemClickHandler=e.itemClickHandler.bind(e),e.updateGroupModel=e.updateGroupModel.bind(e),e}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){this.setState(wa,this.fetch.bind(this))}},{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"fetchGroups",value:function(){var e=this,n=this.state,o=n.pageIndex,i=n.keywords,s=n.searchGroupType,l=n.groupStatus,c=this.props.projectId,p={pageIndex:o,keywords:i,projectId:c,searchGroupType:s};return this.promise=Ke.fetchAllGroups(i?(0,D.default)({},p):(0,D.default)({},p,{groupStatus:l})),this.promise.then(function(m){var f=e.state.listData;return i?e.setState({listData:(f||[]).concat(m.list)}):e.setState({listData:Uo(f,m.list)}),m.list&&m.list.length})}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.hasMore,s=n.pageIndex;o||!i||(this.setState({isLoading:!0}),this.fetchGroups().then(function(l){e.setState({pageIndex:s+1,isLoading:!1,hasMore:l})}))}},{key:"updateGroupModel",value:function(e,n){var o=this.state.listData,i=I().keys(o),s={};I().forEach(i,function(l){var c=o[l];s[l]=I().map(c,function(p){return p.groupId===e?(0,D.default)({},p,{isOpen:n}):p})}),this.setState({listData:s})}},{key:"getGroupModel",value:function(e){var n=this.state,o=n.listData,i=n.keywords,s=null;if(i)s=I().find(o,function(c){return c.groupId===e});else{var l=I().keys(o);I().forEach(l,function(c){var p=o[c];if(s=I().find(p,function(m){return m.groupId===e}),s)return!1})}return s}},{key:"itemClickHandler",value:function(e){this.setState({selectedGroupId:e})}},{key:"renderFilter",value:function(){return t.createElement(Oo,{isProject:!!this.props.projectId,changeGroupFilter:this.changeFilter,changeGroupStatus:this.changeStatus,searchGroupType:this.state.searchGroupType,groupStatus:this.state.groupStatus})}},{key:"search",value:function(e){this.abortRequest(),this.setState({isLoading:!1,keywords:e,pageIndex:1,hasMore:!0,listData:null,selectedGroupId:null},this.fetch)}},{key:"changeFilter",value:function(e){this.setState({pageIndex:1,hasMore:!0,listData:null,searchGroupType:e},this.fetch)}},{key:"changeStatus",value:function(){this.setState(function(e){var n=e.groupStatus;return n===mt.ALL?{pageIndex:1,hasMore:!0,listData:null,groupStatus:mt.OPEN}:{pageIndex:1,hasMore:!0,listData:null,groupStatus:mt.ALL}},this.fetch)}},{key:"renderDetail",value:function(){var e=this.state.selectedGroupId,n=this.getGroupModel(e);return e&&n&&!n.isMember?t.createElement(Go,{groupId:e}):t.createElement(Fo,{group:n,updateGroupModel:this.updateGroupModel})}},{key:"render",value:function(){var e=this,n=this.state,o=n.listData,i=n.isLoading,s=n.selectedGroupId,l=n.keywords;return t.createElement(t.Fragment,null,t.createElement("div",{className:"contacts-list"},t.createElement(Wt,{search:this.search,keywords:l,type:"groups",projectId:this.props.projectId}),l?null:this.renderFilter(),t.createElement("div",{className:"contacts-list-content",ref:function(p){e.listContent=p}},t.createElement(Po,{isSearch:!!l,selectedGroupId:s,list:o,isLoading:i,fetch:this.fetch,itemClickHandler:this.itemClickHandler}))),t.createElement("div",{className:"contacts-detail"},this.renderDetail()))}}]),r}(t.Component),zn.propTypes={projectId:M().string},zn.defaultProps={projectId:""},Da),Ho=function(r,a){var e=r||{};return I().each(a,function(n){var o=n.firstCode,i=/[A-Z]/.test(o.toUpperCase())?o.toUpperCase():"#";e[i]||(e[i]=[]),e[i].push(n)}),e},Aa={listData:null,isLoading:!1,hasMore:!0,selectedAccountId:null,pageIndex:1,keywords:""},Zo=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.state=Aa,a.promise=null,a.search=a.search.bind(a),a.fetch=a.fetch.bind(a),a.fetchContacts=a.fetchContacts.bind(a),a.itemClickHandler=a.itemClickHandler.bind(a),a}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(){this.setState(Aa,this.fetch)}},{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"search",value:function(e){this.abortRequest(),this.setState({isLoading:!1,pageIndex:1,keywords:e,hasMore:!0,listData:null},this.fetch)}},{key:"fetchContacts",value:function(){var e=this,n=this.state,o=n.pageIndex,i=n.keywords;return this.promise=Ke.fetchFriends({pageIndex:o,keywords:i}),this.promise.then(function(s){var l=e.state.listData;return i?e.setState({listData:(l||[]).concat(s.list)}):e.setState({pageIndex:o+1,listData:Ho(l,s.list)}),s.list&&s.list.length})}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.pageIndex,s=n.hasMore;o||!s||(this.setState({isLoading:!0}),this.fetchContacts().then(function(l){e.setState({isLoading:!1,pageIndex:i+1,hasMore:l})}))}},{key:"itemClickHandler",value:function(e){var n=e.accountId;this.setState({selectedAccountId:n})}},{key:"render",value:function(){var e=this.state,n=e.listData,o=e.selectedAccountId,i=e.isLoading,s=e.keywords,l=s!=="";return t.createElement(t.Fragment,null,t.createElement("div",{className:"contacts-list"},t.createElement(Wt,{keywords:s,search:this.search,type:"friends"}),t.createElement("div",{className:"contacts-list-content"},t.createElement(yn,{isSearch:l,selectedAccountId:o,list:n,isLoading:i,fetch:this.fetch,itemClickHandler:this.itemClickHandler}))),t.createElement("div",{className:"contacts-detail"},t.createElement(En,{accountId:o})))}}]),r}(t.Component),jo=function(r,a){var e=r||{};return I().each(a,function(n){var o=n.firstCode,i=/[A-Z]/.test(o.toUpperCase())?o.toUpperCase():"#";e[i]||(e[i]=[]),e[i].push(n)}),e},Ma={listData:null,isLoading:!1,hasMore:!0,selectedAccountId:null,isFriend:!1,isContact:!0,pageIndex:1,keywords:""},Wo=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.state=Ma,a.promise=null,a.search=a.search.bind(a),a.fetch=a.fetch.bind(a),a.fetchContacts=a.fetchContacts.bind(a),a.itemClickHandler=a.itemClickHandler.bind(a),a}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(){this.setState(Ma,this.fetch)}},{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"search",value:function(e){this.promise.abort(),this.setState({isLoading:!1,pageIndex:1,keywords:e,hasMore:!0,listData:null},this.fetch)}},{key:"fetchContacts",value:function(){var e=this,n=this.state,o=n.pageIndex,i=n.keywords;return this.promise=Ke.fetchOthers({pageIndex:o,keywords:i}),this.promise.then(function(s){var l=e.state.listData;return i?e.setState({listData:(l||[]).concat(s.list)}):e.setState({pageIndex:o+1,listData:jo(l,s.list)}),s.list&&s.list.length})}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.pageIndex,s=n.hasMore;o||!s||(this.setState({isLoading:!0}),this.fetchContacts().then(function(l){e.setState({isLoading:!1,pageIndex:i+1,hasMore:l})}))}},{key:"itemClickHandler",value:function(e){var n=e.accountId,o=e.isFriend,i=e.isContact;this.setState({selectedAccountId:n,isFriend:o,isContact:i})}},{key:"render",value:function(){var e=this.state,n=e.listData,o=e.selectedAccountId,i=e.isLoading,s=e.keywords,l=s!=="";return t.createElement(t.Fragment,null,t.createElement("div",{className:"contacts-list"},t.createElement(Wt,{keywords:s,search:this.search,type:"contacts"}),t.createElement("div",{className:"contacts-list-content"},t.createElement(yn,{isSearch:l,selectedAccountId:o,list:n,isLoading:i,fetch:this.fetch,itemClickHandler:this.itemClickHandler}))),t.createElement("div",{className:"contacts-detail"},t.createElement(En,{accountId:o})))}}]),r}(t.Component),$o=(0,V.Z)([`
  border-right: 1px solid #f3f3f3;
  overflow: auto;
  .subs {
    margin-left: 10px;
  }
`],[`
  border-right: 1px solid #f3f3f3;
  overflow: auto;
  .subs {
    margin-left: 10px;
  }
`]),Vo=(0,V.Z)([`
  width: 100%;
  padding: 4px;
  &:hover {
    background-color: #f5f5f5;
  }
  &.active {
    background-color: #d6ecfe;
    .icon,
    div {
      color: #2196f3 !important;
    }
  }
  .iconArrow {
    display: flex;
    padding: 7px 0px 5px 2px;
    border-radius: 4px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`],[`
  width: 100%;
  padding: 4px;
  &:hover {
    background-color: #f5f5f5;
  }
  &.active {
    background-color: #d6ecfe;
    .icon,
    div {
      color: #2196f3 !important;
    }
  }
  .iconArrow {
    display: flex;
    padding: 7px 0px 5px 2px;
    border-radius: 4px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`]),Ko=K.ZP.div($o),zo=K.ZP.div(Vo),Yo=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));e.updateTreeData=function(o,i,s){return o.map(function(l){return l.departmentId===i?(0,D.default)({},l,{subs:s}):l.subs?(0,D.default)({},l,{subs:e.updateTreeData(l.subs,i,s)}):l})},e.expandNext=function(o){var i=e.props.projectId,s=e.state.department;e.setState({departmentLoading:!0}),ut.Z.pagedDepartmentTrees({projectId:i,pageIndex:1,pageSize:100,parentId:o}).then(function(l){var c=l.map(function(p){return(0,D.default)({},p,{subs:[]})});e.setState({department:e.updateTreeData(s,o,c),departmentLoading:!1})})},e.onScrollEnd=function(){};var n=I().find(md.global.Account.projects,{projectId:a.projectId});return e.state={selects:[n.projectId],department:a.departmentsList,departmentLoading:!1},e}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){I().isEqual(this.props.departmentsList,e.departmentsList)||this.setState({department:e.departmentsList,selects:[e.projectId]}),I().isEqual(this.props.departmentLoading,e.departmentLoading)||this.setState({departmentLoading:e.departmentLoading})}},{key:"renderListContent",value:function(){var e=this.props,n=e.department,o=n===void 0?[]:n,i=e.isLoading;return!o.length&&i?t.createElement(ve.Z,{className:"mTop10"}):t.createElement(t.Fragment,null,this.renderDepartmentTree())}},{key:"renderDepartment",value:function(e){var n=this,o=this.props.groupId,i=o===void 0?"":o,s=this.state.selects,l=s.includes(e.departmentId);return t.createElement(t.Fragment,{key:e.departmentId},t.createElement(zo,{className:T()("flexRow valignWrapper pointer",{active:i===e.departmentId}),onClick:function(){n.props.selectCurrentDepartment(e.departmentId,e.departmentName)}},t.createElement(L.Z,{icon:l?"arrow-down":"arrow-right-tip",className:T()("Gray_75 iconArrow",{Visibility:!e.haveSubDepartment}),onClick:function(p){p.stopPropagation(),n.expandNext(e.departmentId);var m=n.state.selects;m.includes(e.departmentId)?n.setState({selects:m.filter(function(f){return f!==e.departmentId})}):n.setState({selects:m.concat(e.departmentId)})}}),t.createElement(L.Z,{className:"Gray_9e Font16 mLeft2 mRight5",icon:"folder"}),t.createElement("div",{className:"ellipsis Font13"},e.departmentName)),l&&t.createElement("div",{className:"subs"},e.subs.map(function(c){return n.renderDepartment(c)})))}},{key:"renderDepartmentTree",value:function(){var e=this,n=this.props.projectId,o=this.state,i=o.department,s=i===void 0?[]:i,l=o.departmentLoading,c=I().find(md.global.Account.projects,{projectId:n});return t.createElement(Ko,{className:"flex"},t.createElement(Le.Z,{className:"flex asdsad",onScrollEnd:function(){!l&&e.props.isMore&&e.props.loadNextPage()}},this.renderDepartment({departmentId:c.projectId,departmentName:c.companyName,subs:s.length?s:[],haveSubDepartment:!!s.length}),l&&t.createElement(ve.Z,null)))}},{key:"render",value:function(){return t.createElement(Le.Z,{onScrollEnd:this.onScrollEnd},this.renderListContent())}}]),r}(t.Component),Qo=(0,V.Z)([`
  display: flex;
  flex-direction: column;
  justify-content: center;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: center;
`]),Jo=(0,V.Z)([`
  height: 100%;
  display: flex;
  flex-direction: column;
  .justifyCenter {
    justify-content: center;
  }
  .GSelect-User {
    padding-left: 15px !important;
  }
  .projectInfo {
    font-size: 13px;
    margin: 16px 30px 24px 24px;
  }
  .userListContainer {
    position: relative;
  }
`],[`
  height: 100%;
  display: flex;
  flex-direction: column;
  .justifyCenter {
    justify-content: center;
  }
  .GSelect-User {
    padding-left: 15px !important;
  }
  .projectInfo {
    font-size: 13px;
    margin: 16px 30px 24px 24px;
  }
  .userListContainer {
    position: relative;
  }
`]),Xo=(0,V.Z)([`
  display: flex;
  padding: 6px 0 6px 24px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  .avatar {
    margin-right: 10px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .fullname,
  .jobs {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .fullname {
    color: #333333;
  }
  .jobs {
    color: #757575;
  }
  .rightArrow {
    width: 32px;
    height: 32px;
    .icon {
      display: none;
    }
  }
  &:hover {
    .rightArrow {
      .icon {
        display: inline-block;
      }
    }
  }
`],[`
  display: flex;
  padding: 6px 0 6px 24px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  .avatar {
    margin-right: 10px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .fullname,
  .jobs {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .fullname {
    color: #333333;
  }
  .jobs {
    color: #757575;
  }
  .rightArrow {
    width: 32px;
    height: 32px;
    .icon {
      display: none;
    }
  }
  &:hover {
    .rightArrow {
      .icon {
        display: inline-block;
      }
    }
  }
`]),qo=K.ZP.div(Qo),ei=K.ZP.div(Jo),ti=K.ZP.div(Xo),ni=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.handleScrollEnd=function(){var n=e.props,o=n.groupId,i=n.isMoreUsers,s=n.projectId,l=I().find(md.global.Account.projects,{projectId:s});i&&(l.projectId===o?e.props.handleLoadAll():e.props.handleSelectGroup())},e.state={showDetail:!!a.selectedAccountId,selectedAccountId:a.selectedAccountId},e}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){I().isEqual(this.props.groupId,e.groupId)||this.setState({showDetail:!1}),e.selectedAccountId&&!I().isEqual(this.props.selectedAccountId,e.selectedAccountId)&&this.setState({selectedAccountId:e.selectedAccountId,showDetail:!0})}},{key:"render",value:function(){var e=this,n=this.props,o=n.usersLoading,i=n.groupList,s=i===void 0?[]:i,l=n.allCount,c=n.groupName,p=this.state,m=p.showDetail,f=p.selectedAccountId;return t.createElement(t.Fragment,null,o&&t.createElement(qo,{className:"flexColumn h100 "},t.createElement(ve.Z,null)),!m&&!o&&t.createElement(ei,{className:"flex"},c&&t.createElement("div",{className:"projectInfo"},""+c+(l?"("+l+")":"")),s.length>0&&t.createElement("div",{className:"userListContainer flex"},t.createElement(Le.Z,{className:"flex",onScrollEnd:this.handleScrollEnd},s.length?t.createElement(t.Fragment,null,s.map(function(v,h){var g=(v.jobInfos||[]).map(function(E){return E.jobName}).join(";");return t.createElement(ti,{key:v.accountId+"-"+h,onClick:function(){e.setState({selectedAccountId:v.accountId,showDetail:!0})}},t.createElement("div",{className:"avatar"},t.createElement("img",{src:v.avatar,alt:""})),t.createElement("div",{className:"fullname flex",title:v.fullname},v.fullname),t.createElement("div",{className:"jobs flex",title:g},g),t.createElement("div",{className:"rightArrow pRight16"},t.createElement(L.Z,{icon:"arrow-right-border"})))})):t.createElement("div",{className:"Gray_75 TxtCenter justifyCenter flexRow valignWrapper h100"},_l("\u6682\u65E0\u6210\u5458"))))),m&&t.createElement(En,{accountId:f,projectId:this.props.projectId,hideBackBtn:this.props.hideBackBtn,back:function(){e.setState({showDetail:!1})}}))}}]),r}(t.Component),ai=(0,V.Z)([`
  width: 100%;
  height: 100%;
  .searchUsers {
    padding-top: 24px;
    height: 50%;
    .userTxt {
      font-size: 14px;
      color: #757575;
      margin-bottom: 8px;
      padding-left: 24px;
    }
    .searchResult {
      width: 100%;
      flex: 1;
    }
  }
  .searchDepartment {
    height: 50%;
    padding-top: 10px;
    .departmentTxt {
      font-size: 14px;
      color: #757575;
      padding-left: 24px;
    }
    .searchResult {
      width: 100%;
      flex: 1;
      .departmentItem {
        color: #333;
        font-size: 13px;
        padding-left: 24px;
        line-height: 32px;
        .icon {
          line-height: 32px;
          color: #bdbdbd;
        }
        .departmentName {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .departmentItem:hover {
        background-color: #f5f5f5;
      }
    }
  }
`],[`
  width: 100%;
  height: 100%;
  .searchUsers {
    padding-top: 24px;
    height: 50%;
    .userTxt {
      font-size: 14px;
      color: #757575;
      margin-bottom: 8px;
      padding-left: 24px;
    }
    .searchResult {
      width: 100%;
      flex: 1;
    }
  }
  .searchDepartment {
    height: 50%;
    padding-top: 10px;
    .departmentTxt {
      font-size: 14px;
      color: #757575;
      padding-left: 24px;
    }
    .searchResult {
      width: 100%;
      flex: 1;
      .departmentItem {
        color: #333;
        font-size: 13px;
        padding-left: 24px;
        line-height: 32px;
        .icon {
          line-height: 32px;
          color: #bdbdbd;
        }
        .departmentName {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .departmentItem:hover {
        background-color: #f5f5f5;
      }
    }
  }
`]),ri=K.ZP.div(ai),oi=function(r){var a={},e=(r||[]).concat({departmentName:_l("\u672A\u5206\u914D\u90E8\u95E8\u7684\u8054\u7CFB\u4EBA"),departmentId:""});return I().forEach(e,function(n){var o=n.departmentId,i=n.departmentName;a[o]={departmentName:i,departmentId:o,isOpen:!1,isLoading:!1,list:[]}}),a},ii=function(d){(0,A.default)(r,d);function r(){(0,F.default)(this,r);var a=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return a.loadNextPage=function(){a.setState({pageIndex:a.state.pageIndex+1},function(){a.fetchDepartments()})},a.handleSelectGroup=function(e){var n=a.state.usersPageIndex,o=a.props.projectId;a.setState({isMoreUsers:!1}),ut.Z.getDepartmentUsers({filterAccountIds:[],departmentId:e||a.state.groupId,projectId:o,pageIndex:n,pageSize:20}).then(function(i){var s=n>1?a.state.groupList.concat(i.list):i.list;a.setState({isMoreUsers:s.length!==i.allCount,usersLoading:!1,usersPageIndex:n+1,groupList:s,allCount:i.allCount})})},a.handleLoadAll=function(){var e=a.state.usersPageIndex,n=a.props.projectId;a.setState({isMoreUsers:!1}),ut.Z.getNotInDepartmentUsers({projectId:n,pageIndex:e,pageSize:20}).then(function(o){var i=o.listUser,s=e>1?a.state.groupList.concat(i.list):i.list;a.setState({isMoreUsers:s.length!==i.allCount,usersLoading:!1,usersPageIndex:e+1,groupList:s,allCount:i.allCount})})},a.selectCurrentDepartment=function(e,n){a.setState({groupId:e,groupList:[],usersPageIndex:1,groupName:n,usersLoading:!0},function(){a.props.projectId===e?a.handleLoadAll(e):a.handleSelectGroup(e)})},a.state={listData:[],departments:null,selectedAccountId:null,isLoading:!1,keywords:"",hasMore:!0,pageIndex:1,pageSize:20,groupList:[],usersPageIndex:1,usersLoading:!0},a.promise=null,a.fetch=a.fetch.bind(a),a.search=a.search.bind(a),a.fetchDepartmentUser=a.fetchDepartmentUser.bind(a),a.updateDeptModel=a.updateDeptModel.bind(a),a.itemClickHandler=a.itemClickHandler.bind(a),a.fetchDepartments=a.fetchDepartments.bind(a),a}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.fetchDepartments()}},{key:"componentWillReceiveProps",value:function(e){this.setState({},this.fetchDepartments),I().isEqual(this.props.projectId,e.projectId)||this.setState({pageIndex:1,groupId:"",groupList:[],keywords:""})}},{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.promise&&this.promise.abort&&this.promise.abort()}},{key:"search",value:function(e){this.abortRequest(),this.setState({isLoading:!1,pageIndex:1,keywords:e,hasMore:!0,listData:[],hideBackBtn:!!e},this.fetch)}},{key:"fetch",value:function(){var e=this,n=this.state,o=n.isLoading,i=n.pageIndex,s=n.hasMore,l=n.keywords;!l||o||!s||(this.setState({isLoading:!0}),this.fetchContacts().then(function(c){e.setState({isLoading:!1,pageIndex:1,usersLoading:!1})}))}},{key:"fetchContacts",value:function(){var e=this,n=this.state,o=n.pageIndex,i=n.keywords,s=this.props.projectId;return this.promise=Ke.searchAddressbookAndDepartment({pageIndex:o,keywords:i,projectId:s,pageSize:100,range:0,isFilterOther:!1}),this.promise.then(function(l){var c=e.state.listData;return e.setState({listData:(c||[]).concat(l.userResult)}),l.userResult&&l.userResult.length})}},{key:"fetchDepartments",value:function(){var e=this,n=this.props.projectId,o=this.state,i=o.pageIndex,s=o.pageSize;return this.setState({isMore:!1}),this.promise=ut.Z.pagedDepartmentTrees({dataRange:2,filterAccountIds:[md.global.Account.accountId],filterFriend:!1,keywords:"",parentId:"",prefixAccountIds:[],firstLetter:"",projectId:n,pageIndex:i,pageSize:s}),this.promise.then(function(l){var c=e.state,p=c.pageIndex,m=c.departmentsList,f=m===void 0?[]:m,v=(l||[]).map(function(g){return(0,D.default)({},g,{subs:[]})}),h=p>1?f.concat(v):v;e.setState({departments:oi(h),isMore:I().isArray(l)&&l.length===s,departmentsList:h})})}},{key:"fetchDepartmentUser",value:function(e){var n=this,o=this.props.projectId;return this.updateDeptModel(e,{isLoading:!0,isOpen:!0}),Ke.fetchDepartmentUsers({projectId:o,departmentId:e}).then(function(i){var s=i.list;return s||[]}).then(function(i){var s=n.state.departments[e];n.updateDeptModel(e,{list:i,isLoading:!1})})}},{key:"updateDeptModel",value:function(e,n){var o=this.state.departments[e];this.setState({departments:(0,D.default)({},this.state.departments,(0,x.default)({},e,I().extend({},o,n)))})}},{key:"itemClickHandler",value:function(e){var n=e.accountId,o=e.isFriend;this.setState({selectedAccountId:n,isFriend:o,hideBackBtn:!0})}},{key:"renderList",value:function(){var e=this.state,n=e.departments,o=e.listData,i=e.selectedAccountId,s=e.isLoading,l=e.keywords,c=e.isMore,p=e.departmentsList,m=e.departmentResult,f=m===void 0?[]:m,v=!!l;return v?t.createElement(ri,null,t.createElement(yn,{isSearch:v,selectedAccountId:i,list:o,isLoading:s,fetch:function(){},itemClickHandler:this.itemClickHandler,searchDepartmentUsers:!0})):t.createElement(Yo,{selectedAccountId:i,list:n,isLoading:s,loadNextPage:this.loadNextPage,departmentLoading:this.state.departmentLoading,isMore:c,departmentsList:p,projectId:this.props.projectId,groupId:this.state.groupId,selectCurrentDepartment:this.selectCurrentDepartment})}},{key:"render",value:function(){var e,n=this.state,o=n.selectedAccountId,i=n.keywords,s=n.usersLoading,l=n.groupList,c=l===void 0?[]:l,p=n.groupId;return t.createElement(t.Fragment,null,t.createElement("div",{className:"contacts-list"},t.createElement(Wt,{keywords:i,type:"projectContacts",search:this.search,projectId:this.props.projectId}),t.createElement("div",{className:"contacts-list-content"},this.renderList())),t.createElement("div",{className:"contacts-detail"},(p||o)&&t.createElement(ni,(e={usersLoading:s,groupList:c,groupId:p,projectId:this.props.projectId,isMoreUsers:this.state.isMoreUsers,handleSelectGroup:this.handleSelectGroup,handleLoadAll:this.handleLoadAll,allCount:this.state.allCount||0},(0,x.default)(e,"groupId",this.state.groupId),(0,x.default)(e,"selectedAccountId",o),(0,x.default)(e,"groupName",this.state.groupName),(0,x.default)(e,"hideBackBtn",this.state.hideBackBtn),e))))}}]),r}(t.Component);function si(d){var r=md.global.SysSettings.forbidSuites;return t.createElement("div",{className:"contacts-apps"},t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"worksheet"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("worksheet","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u5E94\u7528"))),t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"workflow"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("workflow","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u5DE5\u4F5C\u6D41"))),!r.includes("1")&&t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"post"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("post","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u52A8\u6001"))),!r.includes("2")&&t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"task"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("task","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u4EFB\u52A1"))),!r.includes("3")&&t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"calendar"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("calendar","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u65E5\u7A0B"))),!r.includes("4")&&t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"knowledge"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("knowledge","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u77E5\u8BC6"))),!r.includes("5")&&t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"hr"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("hr","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u4EBA\u4E8B"))),t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"system"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("system","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u7CFB\u7EDF"))),t.createElement("div",{className:"contacts-apps-item",onClick:function(){Te.callback({type:"file-transfer"})}},t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.$m)("uploadhelper","large")},className:"contacts-apps-icon"}),t.createElement("span",{className:"Font16"},_l("\u6587\u4EF6\u4F20\u8F93\u52A9\u624B"))))}var li=ye.Z.DialogBase,ci=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.state={type:a.type,projectId:null,list:fo.concat(mo())},e.updateHighlightTab=e.updateHighlightTab.bind(e),e}return(0,R.default)(r,[{key:"shouldComponentUpdate",value:function(e,n){return!(0,lo.Z)(n,this.state)}},{key:"renderContent",value:function(){var e=this.state,n=e.type,o=e.projectId;switch(n){case pe.NEW_FRIENDS:return t.createElement(No,null);case pe.ALL_GROUPS:case pe.PROJECT_GROUPS:return t.createElement(Bo,{projectId:o});case pe.ALL_CONTACTS:return t.createElement(Ro,null);case pe.FRIENDS:return t.createElement(Zo,null);case pe.OTHERS:return t.createElement(Wo,null);case pe.PROJECT_CONTACTS:case pe.CONTACTS:return t.createElement(ii,{projectId:o});case pe.INBOX:return t.createElement(si,null);default:break}}},{key:"updateHighlightTab",value:function(e,n){this.setState({type:e,projectId:n})}},{key:"render",value:function(){var e=this.state,n=e.type,o=e.projectId,i=e.list;return t.createElement("div",{className:"contacts-dialog"},t.createElement(uo,(0,D.default)({type:n,projectId:o,list:i},{updateHighlightTab:this.updateHighlightTab})),this.renderContent())}}]),r}(t.Component);function di(d){var r={width:900,visible:d.showAddressBook,anim:!1,type:"scroll",className:"overflowHidden Relative",onClose:d.closeDialog};Te.callback=d.closeDialog;var a=d.showNewFriends;return d.showAddressBook?t.createElement(li,r,t.createElement(L.Z,{icon:"delete",className:"contacts-dialog-close Gray_6 Hand",onClick:function(){d.closeDialog()}}),t.createElement(ci,{type:d.showNewFriends?pe.NEW_FRIENDS:pe.ALL_CONTACTS})):null}var pi=u(55857),ui=u(56163),mi=u.n(ui),fi=u(36021),hi=u(86109),La,Ra,vi=(Ra=La=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.getBatchErrorLog=function(){var n=e.props.fileKey;$.ajax(md.global.Config.WorksheetDownUrl+"/ExportExcel/GetImportLogs",{data:{randomKey:n},beforeSend:function(i){i.setRequestHeader("X-Requested-With","XMLHttpRequest")},success:function(i){var s=(i.data||[]).filter(function(l){return l.errorCount});e.setState({complete:!0,data:i.data.map(function(l){return(0,D.default)({},l,{sheetName:l.worksheetName,sheetId:l.worksheetId})}),currentSheetInfo:s?(0,D.default)({},s[0],{sheetName:s[0].worksheetName,sheetId:s[0].worksheetId}):{},selectedImportSheetIds:s.map(function(l){return l.worksheetId})})}})},e.renderTitle=function(){var n=e.props.isBatch,o=e.state.currentSheetInfo,i=o===void 0?{}:o,s=I().isEmpty(i)?e.state.data[0]:I().find(e.state.data,function(se){return se.worksheetId===i.worksheetId})||{},l=n?s:e.state.data,c=l.addCount,p=l.errorCount,m=l.repeatCount,f=l.skipCount,v=l.updateCount,h=l.repeated,g=function(j){return j.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g,"$1,")},E=c,k=p,S=m,G=f,O=v,J=[h!==3?_l("\u65B0\u589E%0\u884C",g(E)):"",O||h===3?_l("\u66F4\u65B0%0\u884C",g(O)):"",k?_l("\u5176\u4E2D%0\u884C\u9519\u8BEF",g(k)):""].filter(function(se){return se}).join(", "),ee=G&&S&&G-S?"\uFF1B"+_l("\u8DF3\u8FC7%0\u884C\uFF08%1\u884C\u91CD\u590D\uFF0C%2\u884C\u9519\u8BEF\uFF09",g(G),g(S),g(G-S)):G&&S?"\uFF1B"+_l("\u8DF3\u8FC7%0\u884C\u91CD\u590D",g(G)):G?"\uFF1B"+_l("\u8DF3\u8FC7%0\u884C\u9519\u8BEF",g(G)):"";return J+ee},e.renderBatch=function(){var n=e.state,o=n.data,i=n.currentSheetInfo,s=n.selectedImportSheetIds,l=s===void 0?[]:s,c=I().find(o,function(p){return p.worksheetId===i.worksheetId})||{};return t.createElement("div",{className:"flexColumn h100"},t.createElement(hi.Z,{excelDetailData:o,currentSheetInfo:i,selectedImportSheetIds:l,updateCurrentSheetInfo:function(m){e.setState({currentSheetInfo:m})},updateSelectedImportSheetIds:function(m){e.setState({selectedImportSheetIds:m})},disabled:!0}),e.renderErroContent(c.excelLogs))},e.renderErroContent=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=e.props,i=o.fileKey,s=o.isBatch,l=e.state.currentSheetInfo;return t.createElement(t.Fragment,null,t.createElement("div",{className:T()("flexRow",{pTop15:s})},t.createElement("div",null,e.renderTitle()),t.createElement("div",{className:"successText","data-tip":_l("\u9519\u8BEF\u5355\u5143\u683C\u5206\u4E24\u79CD\uFF0C\u975E\u7559\u767D\u548C\u7559\u767D\u7C7B\u9519\u8BEF\uFF0C\u7559\u767D\u7C7B\u9519\u8BEF\u5728\u9519\u8BEF\u62A5\u544A\u4E2D\u7EA2\u5B57\u63D0\u793A")},t.createElement(L.Z,{icon:"novice-circle",className:"Font14 pointer Gray_9e mLeft5"})),t.createElement("div",{className:"flex"}),t.createElement("a",{className:"ThemeColor3 ThemeHoverColor2 pointer",href:md.global.Config.WorksheetDownUrl+"/ExportExcel/LoadErrorLog?randomKey="+i+(s?"&worksheetId="+l.sheetId:""),target:"_blank"},_l("\u4E0B\u8F7D\u9519\u8BEF\u62A5\u544A"))),t.createElement(Le.Z,{className:"importErrorBox flex mTop15"},n.map(function(c,p){return t.createElement("div",{key:p,className:"mBottom10 pLeft12 pRight12"},t.createElement("span",{className:T()("mRight5",c.logLvl!==1?"Red":"Gray_9e")},"(",_l("\u7B2C%0\u884C",c.rowNumber),")"),t.createElement("span",{className:T()("Bold mRight8",c.logLvl!==1?"Red":"Gray")},c.columnName),t.createElement("span",{className:c.logLvl!==1&&"Red"},c.describe))})))},e.state={complete:!1,data:{},currentSheetInfo:{},visible:!0},e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.props.isBatch?this.getBatchErrorLog():this.getSuccess()}},{key:"getSuccess",value:function(){var e=this,n=this.props.fileKey;$.ajax(md.global.Config.WorksheetDownUrl+"/ExportExcel/GetSuccessCount",{data:{randomKey:n},beforeSend:function(i){i.setRequestHeader("X-Requested-With","XMLHttpRequest")},success:function(i){e.setState({complete:!0,data:i.data})}})}},{key:"render",value:function(){var e=this,n=this.props.isBatch,o=this.state,i=o.complete,s=o.data,l=o.visible;return i?n?t.createElement(ye.Z,{className:"importErrorDialog",visible:l,width:"640",title:_l("\u9519\u8BEF\u62A5\u544A"),footer:null,onCancel:function(){e.setState({visible:!1})}},this.renderBatch()):t.createElement(ye.Z.confirm,{className:"importErrorDialog",visible:!0,width:"640",title:_l("\u9519\u8BEF\u62A5\u544A"),noFooter:!0,anim:!1},t.createElement("div",{className:"flexColumn h100"},this.renderErroContent(s.excelLogs))):null}}]),r}(t.Component),La.propTypes={fileKey:M().string,isBatch:M().bool},Ra);const Pa=function(d){var r=d.fileKey,a=d.isBatch;We.render(t.createElement(vi,{fileKey:r,isBatch:a}),document.createElement("div"))};var gi=u(96213),Ii=u(45231),yi=u(42638),Ei=u(2489),bi=(0,V.Z)([`
  width: 4px;
  height: 4px;
  background: rgb(198, 198, 198);
  margin-left: 6px;
  margin-right: 6px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-top: -2px;
`],[`
  width: 4px;
  height: 4px;
  background: rgb(198, 198, 198);
  margin-left: 6px;
  margin-right: 6px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-top: -2px;
`]),Ci=K.ZP.span(bi),xi=function(d){(0,A.default)(r,d);function r(){var a,e,n,o;(0,F.default)(this,r);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(e=(n=(0,P.default)(this,(a=r.__proto__||b()(r)).call.apply(a,[this].concat(s))),n),n.state={showAddressBook:!1,processInfo:null},n.getWorkflowDetail=function(){var c=n.props.processId,p=c===void 0?null:c;!p||n.state.processInfo||yi.Z.getProcessById({id:p}).then(function(m){n.setState({processInfo:{name:m.name,deleted:m.deleted,id:m.id}})}).catch(function(m){n.setState({processInfo:{name:"",deleted:!0,id:""}})})},e),(0,P.default)(n,o)}return(0,R.default)(r,[{key:"componentDidMount",value:function(){var e=this;this.msg&&$(this.msg).on("click","a",function(n){var o=$(this),i=($(n.target).attr("href")||"").toLocaleLowerCase();if($(n.target).attr("t")==="taskCmd"){var s=o.attr("opvalue"),l=o.attr("taskid"),c=o.attr("opuser"),p=s==="1"?"agreeApplyJoinTask":"refuseJoinTask";gi.Z[p]({taskID:l,accountID:c}).then(function(O){O.status?alert(_l("\u64CD\u4F5C\u6210\u529F")):O.error?alert(O.error.msg,3):alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)});return}if(i.indexOf("addresslist")>-1){n.preventDefault(),n.stopPropagation();var m=(0,N.A_)(i.slice(i.indexOf("?"))),f=m.type,v=m.gid;f==="group"&&v?ga({groupId:v,viewType:1}):e.setState({showAddressBook:!0});return}if(i.indexOf("workflowinstance")>-1){n.preventDefault(),n.stopPropagation();var h=i.slice(i.indexOf("workflowinstance")+17).split("/"),g=document.createElement("div");Ii.Z.getWorkItem({instanceId:h[0],workId:h[1]}).then(function(O){(0,N.Ye)("worksheetRecord",O.worksheetId,{rowId:O.rowId})}),We.render(t.createElement(pi.Z,{id:h[0],workId:h[1],onClose:function(){We.unmountComponentAtNode(g)}}),g);return}if(i.indexOf("excelerrorpage")>-1){n.preventDefault(),n.stopPropagation();var E=i.slice(i.indexOf("excelerrorpage")+15).split("/");new Pa({fileKey:E[0]});return}if(i.indexOf("excelbatcherrorpage")>-1){n.preventDefault(),n.stopPropagation();var k=i.slice(i.indexOf("excelbatcherrorpage")+15).split("/");new Pa({fileKey:k[1],isBatch:!0});return}if(i.indexOf("map/admin")>-1||i.indexOf("map/packages")>-1){n.preventDefault(),window.open(i);return}var S=(location.pathname.match(/\/app\/([\w-]{36})/)||"")[0];if(S&&/\/app\/[\w-]{36}$/.test(i)&&S===(i.match(/\/app\/([\w-]{36})/)||"")[0]&&(n.preventDefault(),n.stopPropagation(),(0,fi.T8)(new URL(i.startsWith("http")?i:location.origin+i).pathname+"?from=system")),/\/app\/([\w-]{36})$/.test(i)){n.preventDefault();var G=(i.match(/[\w-]{36}/)||"")[0];(0,N.Ye)("app",G);return}})}},{key:"render",value:function(){var e=this,n=this.props,o=n.Message,i=o===void 0?{}:o,s=n.createTime,l=n.inboxType,c=n.app,p=c===void 0?null:c,m=n.processId,f=m===void 0?null:m,v=this.state,h=v.showAddressBook,g=v.processInfo,E=Bt(this.props),k=E.typeName,S=E.isFavorite,G=E.inboxId,O=Ei.Z.parse,J={isFavorite:S,inboxId:G};delete bt().whiteList.video;var ee=i.content||"",se={whiteList:Rt()({},bt().whiteList,{a:["target","href","title","optype","opvalue","taskid","opuser","t"]})};md.global.Account.isPortal&&(ee=ee.replace(/<a data-accountid=[^>]*/gi,"<a").replace(/<a href=\"\/app\/[^>]*/gi,"<a")),ee.indexOf("/admin/expansionservice")===-1&&(ee=ee.replace(/\/portaluser.*?>/g,'/role/external/pending" >'));var j=[y.WorkSheetMessage,y.WorkFlowMessage].includes(l)&&p;return t.createElement("div",{className:"messageItem"},t.createElement("div",{className:"Left"},j&&p.status===1?t.createElement("span",{className:"msgIcon",style:{background:p.color,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(we.Z,{url:p.iconUrl,fill:"#fff",size:20})):t.createElement(Wn,this.props)),t.createElement("div",{className:"itemMain"},t.createElement(fa,J),t.createElement("div",{className:"pRight25"},t.createElement("div",{className:"textMsg"},t.createElement("span",{dangerouslySetInnerHTML:{__html:k}}),k&&t.createElement("span",{className:"mRight5 Gray_9"},":"),t.createElement("span",{dangerouslySetInnerHTML:{__html:O(bt()(mi()(bt()(ee.replace(/[\r\n]/g,"<br />").replace(/，<a href=.*personal\?type=enterprise.*<\/a>/gi,""),se)),se))},ref:function(Ne){e.msg=Ne}})),t.createElement("div",{className:"Gray_9 mTop10"},createTimeSpan((0,N.LX)(s)),j&&t.createElement(t.Fragment,null,t.createElement(Ci,null),p.status===2?t.createElement("span",null,p.name||_l("\u5E94\u7528\u5DF2\u5220\u9664")):t.createElement("span",{className:"bottomAppNameWrap"},t.createElement("a",{className:"Gray_9 Hover_21 inboxAppName",target:"_blank",href:"/app/"+p.id,onMouseEnter:this.getWorkflowDetail},p.name),f&&t.createElement(t.Fragment,null,t.createElement("span",{className:"mLeft15 fromProcessId"},_l("\u6765\u81EA\u6D41\u7A0B"),"\uFF1A",g?g.deleted?_l("\u5DF2\u5220\u9664"):t.createElement("a",{target:"_blank",className:"Gray_9 Hover_21",href:"/workflowedit/"+g.id},g.name):null))))))),t.createElement(di,{showNewFriends:!0,showAddressBook:h,closeDialog:function(){return e.setState({showAddressBook:!1})}}))}}]),r}(t.PureComponent),Fa=u(59962),bn=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.state=(0,D.default)({},a),e}return(0,R.default)(r,[{key:"render",value:function(){var e=this,n=this.props,o=n.accountId,i=n.fullname,s={};return md.global.Account.isPortal||(o||"").indexOf("a#")>-1||(s={href:"/user_"+o,target:"_blank"}),t.createElement(mn.Z,{sourceId:o},t.createElement("a",{ref:function(c){e.card=c}},i))}}]),r}(t.Component),Ga=u(537),Yn=u(17429),Oa,Ua,Ba=(Ua=Oa=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.state={binded:!1,replayMsg:null,loading:!1},e}return(0,R.default)(r,[{key:"componentWillUnmount",value:function(){this.abortRequest()}},{key:"abortRequest",value:function(){this.ajax&&this.ajax.abort&&this.ajax.abort()}},{key:"fetchReplyMsg",value:function(){var e=this;if(this.state.replayMsg||this.state.loading)return!1;var n=this.props,o=n.sourceType,i=n.sourceId,s=n.replyId,l=function(p){e.setState({replayMsg:p,loading:!1})};this.setState({loading:!0}),o===Q.F.POST?(this.ajax=Yn.Z.getReplyMessage({commentID:s,postID:i}),this.ajax.then(function(c){var p=c.Message;l(p||_l("\u5185\u5BB9\u5DF2\u5220\u9664"))})):(this.ajax=Ga.Z.getDiscussionMsg({discussionId:s,sourceType:o}),this.ajax.then(function(c){c.code?l(c.data):l(_l("\u5185\u5BB9\u5DF2\u5220\u9664"))}))}},{key:"render",value:function(){return t.createElement(Sa.Z,{text:this.state.replayMsg?t.createElement("span",null,this.state.replayMsg):t.createElement(ve.Z,null),themeColor:"white"},t.createElement("i",{className:"mLeft2 mRight2 ThemeColor4 icon-replyto Hand ThemeColor4",onMouseOver:this.fetchReplyMsg.bind(this)}))}}]),r}(t.Component),Oa.propTypes={sourceType:M().oneOf(I().values(Q.F)),sourceId:M().string,replyId:M().string},Ua),Ha=u(14761),Za,ja,ki=function(r){var a=r.replyId,e=r.isDeleteAttachment,n=a?_l("\u56DE\u590D"):_l("\u8BC4\u8BBA"),o=e?_l("%0\u5E26\u6709\u7684\u9644\u4EF6\u4F1A\u88AB\u5220\u9664\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64%0\u5417\uFF1F",n):_l("\u786E\u8BA4\u8981\u5220\u9664\u6B64%0\u5417\uFF1F",n);(0,Ct.Z)({title:o,onOk:function(){Si(r)}})},Si=function(r){var a=r.sourceType,e=r.sourceId,n=r.discussionId,o=r.isDeleteAttachment;if(a===Q.F.POST)Yn.Z.removePostComment({deleteAttachment:1,postID:e,commentID:n}).then(function(c){var p=c.success;p?(alert(_l("\u5220\u9664\u6210\u529F")),r.removeCallback(r.discussionId)):alert(_l("\u5220\u9664\u5931\u8D25"),2)});else{var i=r.discussionId,s=r.isDeleteAttachment,l={discussionId:i,sourceType:a};Ga.Z.removeDiscussion(l).then(function(c){c.code===1?(alert(_l("\u5220\u9664\u6210\u529F")),r.removeCallback(r.discussionId)):it().reject()}).catch(function(){alert(_l("\u64CD\u4F5C\u5931\u8D25"),2)})}},Wa=function(r){var a,e=r.params,n=e.sourceType,o=e.discussionId,i=e.extendsId,s=e.name,l=e.projectId,c=e.createAccount,p=e.appId,m={placeholder:_l("\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9"),textareaMinHeight:22,autoFocus:!0,shrinkAfterSubmit:!0},f=(0,N.Qu)(s),v=ha(r.params.sourceId),h=v.sourceId,g=v.childId,E=(a={},(0,x.default)(a,Q.F.TASK,{selectGroupOptions:{projectId:l},sourceId:h,sourceType:n,appId:md.global.APPInfo.taskAppID,replyId:o,remark:h+"|"+f+"|"+_l("\u4EFB\u52A1")}),(0,x.default)(a,Q.F.FOLDER,{selectGroupOptions:{projectId:l},sourceId:h,sourceType:n,appId:md.global.APPInfo.taskFolderAppID,replyId:o,remark:h+"|"+f+"|"+_l("\u9879\u76EE")}),(0,x.default)(a,Q.F.WORKSHEET,{selectGroupOptions:{projectId:l},sourceId:h,extendsId:i,sourceType:n,appId:md.global.APPInfo.worksheetAppID,replyId:o,remark:h+"|"+f+"|"+_l("\u5DE5\u4F5C\u8868"),mentionsOptions:{isAtAll:!1}}),(0,x.default)(a,Q.F.WORKSHEETROW,{selectGroupOptions:{projectId:l},sourceId:r.params.sourceId,extendsId:i,sourceType:n,appId:md.global.APPInfo.worksheetRowAppID,replyId:o,remark:(g?h+"_"+g:h)+"|"+f+"|"+_l("\u5DE5\u4F5C\u8868\u8BB0\u5F55")}),(0,x.default)(a,Q.F.CALENDAR,{sourceId:r.params.sourceId,sourceType:n,appId:md.global.APPInfo.calendarAppID,replyId:o,remark:(g?h+"_"+ie()(g).format("YYYYMMDDHHmmss"):h)+"|"+f+"|"+_l("\u65E5\u7A0B")}),(0,x.default)(a,Q.F.POST,{sourceId:h,sourceType:n,replyId:o,accountId:(c||{}).accountId,sendPost:!1}),a);return $.extend(!0,m,E[n])},_i=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this));return e.state={showCommenter:!1},e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){var e=this.props.replyId;$(".inboxBox .commentItem-"+e).find("[data-accountid],[data-groupid]").each(function(n,o){if(!$(o).attr("bindUserCard")){$(o).attr("bindUserCard",!0);var i=$(o).attr("data-accountid"),s=$(o).attr("data-groupid");We.render(t.createElement(mn.Z,{sourceId:i||s,type:s?2:1},t.createElement("span",null,o.innerHTML)),o)}})}},{key:"renderMessage",value:function(){var e=this.props,n=e.message,o=e.accountsInMessage,i=e.groupsInMessage,s=e.categories,l=e.sourceType;return t.createElement("span",{dangerouslySetInnerHTML:{__html:(0,N.U4)({message:n.replace(/\n/g," <br>"),rUserList:o,rGroupList:i,categories:s,sourceType:l})}})}},{key:"renderTopic",value:function(){var e=this.props,n=e.sourceType,o=e.createAccount,i=e.replyAccount,s=e.sourceId,l=e.replyId;return l?t.createElement("div",{className:"mBottom10 mTop3 LineHeight25"},t.createElement("span",{className:"mRight10 commentContentItem InlineBlock WordBreak"},t.createElement(bn,o),t.createElement("span",{className:"mLeft5 Green mRight5"},_l("\u56DE\u590D")),t.createElement(bn,i),l?t.createElement(Ba,{sourceId:s,replyId:l,sourceType:n}):null,t.createElement("span",null,": ")),this.renderMessage()):t.createElement("div",{className:"mBottom10 mTop3 LineHeight25"},t.createElement("span",{className:"mRight10 commentContentItem InlineBlock WordBreak"},t.createElement(bn,o),t.createElement("span",{className:"mLeft2"},": ")),this.renderMessage())}},{key:"renderAttachment",value:function(){var e=this.props,n=e.attachment,o=e.projectId,i=e.appId;return t.createElement("div",{className:"mTop5"},t.createElement(Fa.Z,{isUpload:!1,attachmentData:n,projectId:o,appId:i}))}},{key:"renderBottomBar",value:function(){var e=this,n=this.props,o=n.canDelete,i=n.sourceId,s=n.sourceType,l=this.state.showCommenter,c=(0,N.LX)(this.props.createTime),p=function(){switch(s){case Q.F.POST:return t.createElement("a",{href:$e(s,i),className:"Gray_a NoUnderline",title:_l("\u70B9\u51FB\u67E5\u770B\u52A8\u6001\u8BE6\u60C5")},createTimeSpan(c));case Q.F.TASK:return t.createElement("a",{href:$e(s,i),className:"Gray_a NoUnderline",title:_l("\u70B9\u51FB\u67E5\u770B\u4EFB\u52A1\u8BE6\u60C5")},createTimeSpan(c));case Q.F.FOLDER:return t.createElement("a",{href:$e(s,i),className:"Gray_a NoUnderline",title:_l("\u70B9\u51FB\u67E5\u770B\u9879\u76EE\u8BE6\u60C5")},createTimeSpan(c));case Q.F.CALENDAR:return t.createElement("a",{href:$e(s,i),className:"Gray_a NoUnderline",title:_l("\u70B9\u51FB\u67E5\u770B\u65E5\u7A0B\u8BE6\u60C5")},createTimeSpan(c))}};return t.createElement("div",{className:"clearfix"},p(),t.createElement("div",{className:"Right"},o?t.createElement("a",{className:"Hidden removeCommentButton",onClick:function(){var f=e.props,v=f.discussionId,h=f.isDeleteAttachment,g=f.sourceType,E=f.replyId,k=f.removeCallback,S={sourceId:i,replyId:E,discussionId:v,isDeleteAttachment:h,sourceType:g,removeCallback:k};ki(S)}},_l("\u5220\u9664")):null,t.createElement("a",{className:"mLeft15",onClick:function(){e.setState({showCommenter:!l})}},_l("\u56DE\u590D"))))}},{key:"render",value:function(){var e=this,n=this.props,o=n.createAccount,i=n.addCallback,s=n.replyId,l=this.state.showCommenter;return t.createElement("div",{className:"commentItem pTop12 commentItem-"+s},t.createElement("div",{className:"commentAvatar Left"},t.createElement(Wn,o)),t.createElement("div",{className:"commentContent"},this.renderTopic(),this.renderAttachment(),this.renderBottomBar(),l?t.createElement("div",{className:"mTop5 mBottom5"},t.cloneElement(this.props.children,{autoFoucs:!0,onSubmit:function(p){i(p)},onSubmitCallback:function(){e.setState({showCommenter:!1})}})):null))}}]),r}(t.Component),Ti=(ja=Za=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a)),n=e.props.params.sourceType,o=a.commentsProps.comments;return e.state={loadAllComments:!1,commenterIsFocus:!1,comments:I().map(o||[],function(i){return $n(i,n)}),showComments:o&&o.length>0},e}return(0,R.default)(r,[{key:"addCommentCallback",value:function(e){var n=this.props.params.sourceType,o=this.state.comments.slice(0);this.setState({comments:[$n(e,n)].concat(o)})}},{key:"removeCommentCallback",value:function(e){this.setState({comments:I().filter(this.state.comments,function(n){var o=n.discussionId;return o!==e})})}},{key:"clickLoadMore",value:function(){var e=this,n=this.props.params,o=n.sourceId,i=n.type;Yn.Z.getMorePostComments({postID:o}).then(function(s){s==="error"?alert(_l("\u64CD\u4F5C\u5931\u8D25"),2):e.setState({loadAllComments:!0,comments:I().map(s,function(l){return $n(l,i)})})})}},{key:"renderCommenter",value:function(){var e=(0,D.default)({},Wa({params:this.props.params}),{projectId:this.props.params.projectId,fromAppId:this.props.params.appId,autoFocus:this.state.commenterIsFocus,onSubmit:this.addCommentCallback.bind(this)});return t.createElement(Ha.Z,e)}},{key:"renderComments",value:function(){var e=this,n=this.state.showComments;return n?t.createElement("div",{className:"pTop5"},this.renderCommenter(),function(){return I().map(e.state.comments,function(o){var i=(0,D.default)({},o,{addCallback:e.addCommentCallback.bind(e),removeCallback:e.removeCommentCallback.bind(e)}),s=(0,D.default)({},Wa({params:(0,D.default)({},e.props.params,{discussionId:i.discussionId,createAccount:i.createAccount})}),{onSubmit:function(){}});return t.createElement(_i,(0,D.default)({key:i.discussionId},i),t.createElement(Ha.Z,s))})}()):null}},{key:"renderViewMore",value:function(){var e=this,n=this.props.commentsProps.commentsCount,o=this.state.comments,i=o&&n&&o.length<n,s=this.state.loadAllComments;if(i&&!s)return t.createElement("div",{className:"TxtCenter"},t.createElement("a",{href:"javascript:void(0);",onClick:function(){e.clickLoadMore()}},_l("\u5C55\u5F00\u5176\u4F59 %0 \u6761\u56DE\u590D",n-o.length),t.createElement("i",{className:"icon-arrow-down-border"})))}},{key:"render",value:function(){var e=this,n=this.state.showComments;return t.createElement("div",{className:"Font12"},t.createElement("div",null,!md.global.Account.isPortal&&t.createElement("a",{href:"javascript:void 0;",onClick:function(){e.setState({showComments:!n,commenterIsFocus:!0})}},_l("\u56DE\u590D"))),this.renderComments(),this.renderViewMore())}}]),r}(t.Component),Za.propTypes={commentsProps:M().shape({comments:M().array,commentsCount:M().number}),params:M().shape({sourceId:M().string.isRequired,sourceType:M().oneOf(I().values(Q.F)),discussionId:M().string,replyId:M().string,name:M().string})},ja),Qn,$a,Jn=($a=Qn=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a)),n=a.message,o=(0,N.Zq)(n,600,12),i=n.replace(o,"");return i.length?e.state={showBtn:!0,expanded:!1,partMsg:o}:e.state={showBtn:!1,expanded:!0},e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){var e=this.props.inboxId;$(".inboxBox .messageItem-"+e).find("[data-accountid],[data-groupid]").each(function(n,o){if(!$(o).attr("bindUserCard")){$(o).attr("bindUserCard",!0);var i=$(o).attr("data-accountid"),s=$(o).attr("data-groupid");We.render(t.createElement(mn.Z,{sourceId:i||s,type:s?2:1},t.createElement("span",null,o.innerHTML)),o)}})}},{key:"renderAvatar",value:function(){var e=this.props,n=e.fullname,o=e.accountId,i=e.avatar,s=e.inboxType,l=e.appId;return t.createElement("div",{className:"Left"},t.createElement(Wn,{fullname:n,accountId:o,avatar:i,inboxType:s,appId:l}))}},{key:"renderStar",value:function(){var e=this.props,n=e.isFavorite,o=e.inboxId;return t.createElement(fa,{isFavorite:n,inboxId:o})}},{key:"renderMsgHeader",value:function(){var e=this.props,n=e.typeName,o=e.fullname,i=e.accountId,s=e.sourceId,l=e.sourceType,c=e.replyId;return t.createElement("div",null,t.createElement(bn,{fullname:o,accountId:i}),t.createElement("span",{className:"mLeft5"},n),c?t.createElement(Ba,{sourceId:s,replyId:c,sourceType:l}):null,t.createElement("span",null,":"),this.renderStar())}},{key:"renderMessage",value:function(){var e=this,n=this.props.message,o=this.state,i=o.showBtn,s=o.expanded,l=o.partMsg;return i?s?t.createElement("span",{className:"LineHeight25 WordBreak"},t.createElement("span",{dangerouslySetInnerHTML:{__html:n}}),t.createElement("a",{href:"javascript:void(0);",onClick:function(){e.setState({expanded:!1})}},_l("\u6536\u8D77"))):t.createElement("span",{className:"LineHeight25 WordBreak"},t.createElement("span",{dangerouslySetInnerHTML:{__html:l}}),t.createElement("a",{href:"javascript:void(0);",onClick:function(){e.setState({expanded:!0})}},_l("\u66F4\u591A..."))):n?t.createElement("span",{className:"LineHeight25 WordBreak",dangerouslySetInnerHTML:{__html:n}}):t.createElement("span",{className:"LineHeight25 Gray_c"},_l("\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u5220\u9664"))}},{key:"renderAttachments",value:function(){var e=this.props.attachments;return e&&e.length?t.createElement("div",{className:"mTop5"},t.createElement(Fa.Z,{isUpload:!1,attachmentData:e})):null}},{key:"renderSourceFrom",value:function(){var e=this.props,n=e.fromLink,o=e.fromMessage,i=e.fromTitle,s=e.sourceId;if(!i)return null;var l=$("<span>").html(bt()(o)).text();return t.createElement("div",{className:"mTop5 comeFrom"},s?t.createElement("a",{className:"fromLink",target:"_blank",href:n,"data-title":i,onClick:function(){var p=s.split("|")[0],m=s.split("|")[1];(0,N.Ye)("worksheetRecord",p,{rowId:m})}},t.createElement("span",{className:"sourceName Font12",title:l},l)):t.createElement("span",{className:"fromLink cursorDefault","data-title":i},t.createElement("span",{className:"sourceName Font12",title:l},l)))}},{key:"renderCreateTime",value:function(){var e=this.props,n=e.fromLink,o=e.createTime,i=e.sourceId;return t.createElement("div",{className:"mTop10 pBottom10"},i?t.createElement("a",{href:n,target:"_blank",className:"Gray_a NoUnderline"},createTimeSpan((0,N.LX)(o))):t.createElement("span",{className:"Gray_a"},createTimeSpan((0,N.LX)(o))))}},{key:"renderCommentArea",value:function(){var e=this.props,n=e.isDeleted,o=e.canReply,i=e.fromLink,s=this.props,l=s.sourceId,c=s.sourceType,p=s.discussionId,m=s.extendsId,f=s.name,v=s.projectId,h=s.accountId,g=s.fullname,E=s.avatar,k=s.appId;if(n)return null;if(o){var S=this.props,G=S.comments,O=S.commentsCount,J={commentsProps:{comments:G,commentsCount:O},params:{sourceId:l,sourceType:c,discussionId:p,extendsId:m,name:f,appId:k,projectId:v||"",createAccount:{avatar:E,fullname:g,accountId:h}}};return t.createElement(Ti,J)}else switch(c){case Q.F.TASK:return t.createElement("div",null,t.createElement("a",{href:i,target:"_blank"},_l("\u70B9\u51FB\u8FD9\u91CC")),t.createElement("span",{className:"Gray_9 mLeft5"},_l("\u7533\u8BF7\u4EFB\u52A1\u67E5\u770B\u548C\u56DE\u590D\u6743\u9650")));case Q.F.FOLDER:return t.createElement("div",null,t.createElement("a",{href:i,target:"_blank"},_l("\u70B9\u51FB\u8FD9\u91CC")),t.createElement("span",{className:"Gray_9 mLeft5"},_l("\u7533\u8BF7\u9879\u76EE\u67E5\u770B\u548C\u56DE\u590D\u6743\u9650")));default:return t.createElement("div",{className:"Gray_9"},_l("\u6CA1\u6709\u56DE\u590D\u6743\u9650"))}}},{key:"render",value:function(){return t.createElement("div",{className:"messageItem messageItem-"+this.props.inboxId},this.renderAvatar(),t.createElement("div",{className:"itemMain"},t.createElement("div",{className:"msgMainContent"},this.renderMsgHeader(),t.createElement("div",{className:"mTop5"},this.renderMessage()),this.renderAttachments(),this.props.children?this.props.children:null,this.renderSourceFrom(),this.renderCreateTime(),this.renderCommentArea())))}}]),r}(t.Component),Qn.propTypes={isFavorite:M().oneOf(["0","1"]),typeName:M().string,fullname:M().string,accountId:M().string,message:M().string,sourceId:M().string,replyId:M().string,attachments:M().array,isDeleted:M().bool,canReply:M().bool,comments:M().array,commentsCount:M().number},Qn.defaultProps={isDeleted:!1,canReply:!0},$a),Ni=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.state=(0,D.default)({},e.mergeTopicState(),e.mergeFromSourceState(),Bt(a)),e}return(0,R.default)(r,[{key:"mergeTopicState",value:function(){var e=this.props,n=(0,re.Z)(e.Post.comments,1),o=n[0],i=e.createTime,s=o.message,l=o.rUserList,c=o.rGroupList,p=o.categories,m=o.attachments,f=o.postID,v=o.commentID,h=o.replyID,g=o.replyAccountId;return{message:(0,N.U4)({message:s||"",rUserList:l,rGroupList:c,categories:p}),attachments:m,createTime:i,sourceId:f,discussionId:v,replyId:h,replyAccountId:g}}},{key:"mergeFromSourceState",value:function(){var e=this.props,n=e.Post,o=n.postID,i=n.message,s=n.rUserList,l=n.rGroupList,c=n.categories,p=(0,N.U4)({message:i||"",rUserList:s,rGroupList:l,categories:c});return{fromMessage:p,fromTitle:_l("\u6765\u81EA\u52A8\u6001"),fromLink:"/feeddetail?itemID="+o}}},{key:"render",value:function(){return t.createElement(Jn,this.state)}}]),r}(t.Component),Di=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return a.inboxType===y.PostCommentMentionedUser||a.inboxType===y.PostCommentMentionedGroup?e.state=(0,D.default)({},e.mergeTopicState(!1),e.mergeFromSourceState(!1),Bt(a)):(a.inboxType===y.PostMentionedGroup||a.inboxType===y.PostMentionedUser)&&(e.state=(0,D.default)({},e.mergeTopicState(!0),e.mergeFromSourceState(!0),Bt(a))),e}return(0,R.default)(r,[{key:"mergeTopicState",value:function(e){var n=this.props,o=n.createTime,i=null,s=void 0,l=void 0;if(e)i=n.Post,s=i.comments,l=parseInt(i.commentCount,10);else{var c=(0,re.Z)(n.Post.comments,1),p=c[0];i=p}var m=i,f=m.message,v=m.rUserList,h=m.rGroupList,g=m.categories,E=m.attachments,k=m.postID,S=m.commentID,G=m.replyID,O=m.replyAccountId;return e?{message:(0,N.U4)({message:f||"",rUserList:v,rGroupList:h,categories:g}),attachments:E,createTime:o,sourceId:k,comments:s,commentsCount:l}:{message:(0,N.U4)({message:f||"",rUserList:v,rGroupList:h,categories:g}),attachments:E,createTime:o,sourceId:k,discussionId:S,replyId:G,replyAccountId:O}}},{key:"mergeFromSourceState",value:function(e){var n=this.props,o=n.Post,i=o.postID,s=o.message,l=o.rUserList,c=o.rGroupList,p=o.categories;if(e)return{fromLink:"/feeddetail?itemID="+i};var m=(0,N.U4)({message:s||"",rUserList:l,rGroupList:c,categories:p});return{fromMessage:m,fromTitle:_l("\u6765\u81EA\u52A8\u6001"),fromLink:"/feeddetail?itemID="+i}}},{key:"renderAccessory",value:function(){if(this.props.inboxType!==y.PostCommentMentionedUser&&this.props.inboxType!==y.PostCommentMentionedGroup)return null;var e=this.props,n=e.Post;switch(n.postType){case 0:var o=n.MedalPost,i=o.MedalName,s=o.MedalPath,l=o.MedalDescription,c=o.SendRemark;return t.createElement("div",{className:"mTop20 mBottom20 clearfix"},t.createElement("div",{className:"Left"},t.createElement("img",{className:"lazy",src:s})),t.createElement("div",null,t.createElement("p",{className:"ThemeColor3 mTop20",style:{"font-size":"12px","line-height":"20px"}},i),t.createElement("p",{className:{color:"#777","font-size":"12px","line-height":"20px"}},l)));case 1:var p=n.linkTitle,m=n.linkUrl,f=n.linkThumb,v=n.linkDesc;return t.createElement("div",null,t.createElement("a",{target:"_blank",href:m,class:"WordBreak"},p),f?t.createElement("img",{className:"lazy",src:f}):null,v?t.createElement("div",{className:"mTop5 Gray"},v.toLowerCase()):null);case 4:case 7:var h=postType==4?"icon-qa":"icon-votenobg",g=this.mergeFromSourceState(),E=g.fromLink;return t.createElement("div",{className:"messageDetailContainer"},t.createElement("div",{className:"Left logoContainer"},t.createElement("i",{className:"Font24 Gray_9"+h})),t.createElement("div",{className:"textContainer"},message.substring(0,25)+(message.length>25?"...":"")),t.createElement("div",{class:"viewDetail"},t.createElement("a",{target:"_blank",href:E,class:"detailBtn boderRadAll_3"},_l("\u67E5\u770B\u8BE6\u60C5"))));default:break}}},{key:"render",value:function(){return t.createElement(Jn,this.state,this.renderAccessory())}}]),r}(t.Component);function wi(d){var r=d.discussion;r=r===void 0?{}:r;var a=r.name,e=r.entityName,n=r.sourceId,o=r.extendsId,i=r.sourceType;switch(i){case Q.F.CALENDAR:return{fromMessage:a,fromTitle:_l("\u6765\u81EA\u65E5\u7A0B"),fromLink:$e(i,n)};case Q.F.TASK:return{fromMessage:a,fromTitle:_l("\u6765\u81EA\u4EFB\u52A1"),fromLink:$e(i,n)};case Q.F.FOLDER:return{fromMessage:a,fromTitle:_l("\u6765\u81EA\u9879\u76EE"),fromLink:$e(i,n)};case Q.F.WORKSHEET:return{fromMessage:a,fromTitle:_l("\u6765\u81EA%0",e),fromLink:$e(i,n)};case Q.F.WORKSHEETROW:return{fromMessage:a,fromTitle:_l("\u6765\u81EA%0",e),fromLink:$e(i,n,o),appId:o?o.split("|")[0]:void 0};default:return{fromMessage:_l("\u6570\u636E\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664"),fromTitle:_l("\u6765\u81EA"),fromLink:""}}}function Ai(d){var r=d.discussion,a=r===void 0?{isDeleted:!0,canReply:!1}:r,e=d.createTime,n=a.message,o=a.sourceType,i=a.accountsInMessage;return(0,D.default)({},a,{message:(0,N.U4)({message:n||"",rUserList:i,sourceType:o}),sourceType:o,createTime:e})}function Mi(d){var r=(0,D.default)({},Ai(d),wi(d),Bt(d));return t.createElement(Jn,r)}var Li=xi,Ri=Ni,Pi=Di,Fi=Mi;function Gi(d){var r=d.inboxItem,a=parseInt(r.inboxType,10),e=I().extend({},r,{inboxType:a});switch(e.inboxType){case y.SystemMessage:case y.TaskMessage:case y.FolderMessage:case y.CalendarMessage:case y.KCMessage:case y.ApprovalMessage:case y.AttendanceMessage:case y.DossierMessage:case y.WorkSheetMessage:case y.WorkFlowMessage:return t.createElement(Li,e);case y.PostReply:return t.createElement(Ri,e);case y.PostMentionedUser:case y.PostMentionedGroup:case y.PostCommentMentionedUser:case y.PostCommentMentionedGroup:return t.createElement(Pi,e);case y.TaskComment:case y.TaskReply:case y.TaskMentioned:case y.FolderComment:case y.FolderReply:case y.FolderMentioned:case y.CalendarComment:case y.CalendarReply:case y.CalendarMentioned:case y.WorkSheetComment:case y.WorkSheetMentioned:case y.WorkSheetReply:case y.WorkSheetRowReply:case y.WorkSheetRowMentioned:case y.WorkSheetRowComment:return t.createElement(Fi,e);default:return null}}var Va,Ka,Oi=(Ka=Va=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.state={failed:!1,pageIndex:1,list:[],isLoading:!1,hasMoreData:!0},e}return(0,R.default)(r,[{key:"componentWillMount",value:function(){this.fetchInboxList()}},{key:"componentWillReceiveProps",value:function(e){var n=this;this.setState({pageIndex:1,isLoading:!0,list:[],hasMoreData:!0},function(){n.fetchInboxList()})}},{key:"fetchInboxList",value:function(){var e=this,n=this.state,o=n.pageIndex,i=n.list,s=this.props,l=s.clearUnread,c=s.inboxFavorite,p=s.type,m=s.filter,f=m||{},v=f.user,h=f.startTime,g=f.endTime;this.setState({failed:!1,isLoading:!0}),this.ajaxRequest=ua.getInboxMessage({pageIndex:o,pageSize:10,inboxFavorite:c?1:0,type:p,clearUnread:l,loadType:Mr.ALL,creatorId:v?v.accountId:null,startTime:h,endTime:g}),this.ajaxRequest.then(function(E){var k=E.inboxList;o===1?e.setState({hasMoreData:k.length>0,list:k,isLoading:!1}):e.setState({hasMoreData:k.length>0,list:i.concat(k),isLoading:!1})}).catch(function(E,k){k!=="abort"&&(alert(_l("\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u8BD5"),2),e.setState({failed:!0,isLoading:!1}))})}},{key:"scrollEvent",value:function(e,n){var o=this,i=this.state,s=i.hasMoreData,l=i.pageIndex,c=i.isLoading,p=n.direction,m=n.position,f=n.maximum;if(!s||c)return!1;p==="down"&&f-m<50&&this.setState({pageIndex:l+1},function(){o.fetchInboxList()})}},{key:"renderList",value:function(){var e=this.props.count,n=this.state,o=n.list,i=n.pageIndex,s=n.isLoading,l=n.failed;if(o.length)return this.state.list.map(function(c,p){return t.createElement(t.Fragment,{key:c.inboxId},t.createElement(Gi,{inboxItem:c}),p===e-1&&t.createElement(Vr.Z,{className:"inboxDivider Font13",plain:!0},_l("\u4EE5\u4E0A\u4E3A\u65B0\u6D88\u606F")))});if(i===1&&!s&&!l)return this.renderNullDiv()}},{key:"renderLoading",value:function(){var e=this.state,n=e.pageIndex,o=e.isLoading,i=e.failed;return i&&!o?t.createElement("div",{className:"mTop10 TxtCenter"},t.createElement(ce.ZP,{type:"link",onClick:this.fetchInboxList.bind(this)},_l("\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D"))):o?n===1?t.createElement(ve.Z,{className:"mTop20"}):t.createElement(ve.Z,{className:"mTop10 mBottom10"}):null}},{key:"renderNullDiv",value:function(){var e=this.props,n=e.inboxType,o=e.inboxFavorite;return o?t.createElement("div",{className:"nullTip starMsg"},t.createElement("div",{className:"Font18"},_l("\u5728\u8FD9\u91CC\u67E5\u770B\u661F\u6807\u4FE1\u606F")),t.createElement("div",{className:"Font14 Gray_9"},_l("\u70B9\u51FB\u4FE1\u606F\u5217\u8868\u53F3\u4E0A\u89D2\u7684\u661F\u53F7\uFF0C\u4E3A\u91CD\u8981\u7684\u4FE1\u606F\u6253\u4E0A\u661F\u6807"))):t.createElement("div",{className:"nullTip commMsg"},t.createElement("div",{className:"Font18"},_l("\u8FD8\u6CA1\u6709\u6D88\u606F")),t.createElement("div",{className:"Font14 Gray_9"},_l("\u5728\u8FD9\u67E5\u770B\u6240\u6709\u548C%0\u76F8\u5173\u7684\u6D88\u606F",Lr[n])))}},{key:"render",value:function(){return t.createElement(Le.Z,{className:"flex",disableParentScroll:!0,scrollContentClassName:"inboxBox",updateEvent:this.scrollEvent.bind(this)},this.renderList(),this.renderLoading())}}]),r}(t.Component),Va.propTypes={inboxFavorite:M().bool,type:M().oneOf(I().values(w))},Ka),Cn,za,Ya=function(r){if(r&&Zn[r])return I()(Zn[r]).head();throw new Error("type in options not recognized!")},Ui=(za=Cn=function(d){(0,A.default)(r,d);function r(){var a,e,n,o;(0,F.default)(this,r);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(e=(n=(0,P.default)(this,(a=r.__proto__||b()(r)).call.apply(a,[this].concat(s))),n),n.state={type:Ya(n.props.inboxType),inboxFavorite:!1,filter:null},n.changeType=function(c){n.setState({type:c})},n.changeFaviorite=function(c){n.setState({inboxFavorite:c})},n.changeInboxFilter=function(c){n.setState({filter:c})},e),(0,P.default)(n,o)}return(0,R.default)(r,[{key:"componentWillReceiveProps",value:function(e){e.inboxType!==this.props.inboxType&&this.setState({filter:null,type:Ya(e.inboxType)})}},{key:"renderHeader",value:function(){var e=this.props.inboxType,n=this.state,o=n.type,i=n.inboxFavorite,s=n.filter,l={type:o,inboxFavorite:i,inboxType:e,filter:s,title:Z.WORKSHEET===e&&md.global.Account.isPortal?_l("\u6D88\u606F"):Rr[e],dropdownData:Zn[e],changeType:this.changeType,changeFaviorite:this.changeFaviorite,changeInboxFilter:this.changeInboxFilter};return t.createElement($r,l)}},{key:"renderList",value:function(){var e=this.state,n=e.type,o=e.inboxFavorite,i=e.filter,s=this.props,l=s.clearUnread,c=s.inboxType,p=s.count;return t.createElement(Oi,{type:n,inboxFavorite:o,clearUnread:l,inboxType:c,count:p,filter:i})}},{key:"render",value:function(){return t.createElement("div",{className:"flexColumn h100"},md.global.Account.isPortal&&(0,N.Q9)()?null:this.renderHeader(),this.renderList())}}]),r}(t.Component),Cn.INBOXTYPES=Z,Cn.propTypes={inboxType:M().oneOf(I().values(Z)).isRequired,clearUnread:M().bool,callback:M().func},Cn.defaultProps={clearUnread:!1,callback:$.noop()},za),Qa,Ja,Bi=(0,V.Z)([`
  .back {
    height: 50px;
    line-height: 50px;
  }
  .ChatPanel-inbox-portalCon.isM {
    height: calc(100% - 50px);
  }
`],[`
  .back {
    height: 50px;
    line-height: 50px;
  }
  .ChatPanel-inbox-portalCon.isM {
    height: calc(100% - 50px);
  }
`]),Hi=K.ZP.div(Bi),Zi=(0,Je.Z)(H.Z),ji=(Qa=(0,Mt.$j)(function(d){var r=d.chat,a=r.currentSession,e=r.currentSessionList,n=r.visible;return{currentSession:a,currentSessionList:e,visible:n}}),Qa(Ja=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.handleClosePanel=function(){var n=e.props.currentSession;n.value&&(e.props.dispatch(Y.ZE({})),sa.r8.recordAction({id:""}),sa.r8.clearAllUnread())},e.handleClickAway=function(n){e.handleClosePanel(),n.stopPropagation&&n.stopPropagation()},e.state={loading:!1,isError:!1},e}return(0,R.default)(r,[{key:"render",value:function(){var e=this,n=this.props.currentSession,o=[".dialogScroll",".ant-modal",".mdModal",".ChatPanel-Trigger",".attachmentsPreview",".Tooltip",".mui-dialog-container",".mdAlertDialog",".confirm",".PositionContainer-wrapper",".groupSettingAvatarSelect",".ui-timepicker-list",".selectUserBox",".warpDatePicker",".dropdownTrigger",".rc-trigger-popup",".workflowStepListWrap",".ant-select-dropdown",".ant-cascader-menus",".InboxFilterWrapper",".ant-picker-dropdown"];return t.createElement(Zi,{component:"div",onClickAwayExceptions:o,onClickAway:this.handleClickAway.bind(this),className:T()("ChatPanel-wrapper ChatPanel-position tipBoxShadow portalChatPanel",{"ChatPanel-close":I().isEmpty(n),"ChatPanel-small":window.innerHeight<700,"ChatPanel-big":window.innerHeight>2e3,isMobile:(0,N.Q9)()})},n.iconType?t.createElement(Hi,{className:T()("ChatPanel ChatPanel-inbox",{flexColumn:md.global.Account.isPortal&&(0,N.Q9)()})},md.global.Account.isPortal&&(0,N.Q9)()?t.createElement(t.Fragment,null,t.createElement("span",{className:"Font17 Hand InlineBlock back pLeft16",onClick:function(s){e.handleClickAway(s)}},t.createElement(L.Z,{icon:"backspace mRight8 Gray_9e"}),_l("\u6D88\u606F"))):t.createElement("i",{onClick:function(s){e.handleClickAway(s)},className:"ChatPanel-inbox-close icon-close ThemeColor3"}),t.createElement("div",{className:T()("ChatPanel-inbox-portalCon",{isM:(0,N.Q9)()})},t.createElement(Ui,{inboxType:n.iconType,count:n.count}))):"")}}]),r}(t.Component))||Ja),Wi=u(48645),$i=(0,V.Z)([`
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  margin-right: 15px;
  .unread {
    position: absolute;
    border-radius: 8px;
    text-align: center;
    line-height: 12px;
    background-color: #fff;
    z-index: 1;
    left: 22px;
    top: 50%;
    padding: 1px 5px;
    transform: translate(0px, -100%);
    font-size: 12px;
    &.isMobile {
      background-color: red;
    }
  }
  .isMobile {
    color: #9e9e9e;
  }
`],[`
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  margin-right: 15px;
  .unread {
    position: absolute;
    border-radius: 8px;
    text-align: center;
    line-height: 12px;
    background-color: #fff;
    z-index: 1;
    left: 22px;
    top: 50%;
    padding: 1px 5px;
    transform: translate(0px, -100%);
    font-size: 12px;
    &.isMobile {
      background-color: red;
    }
  }
  .isMobile {
    color: #9e9e9e;
  }
`]),Vi=K.ZP.div($i),Ki=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.getChatCount=function(){Wi.$n({pageIndex:1,pageSize:100}).then(function(n){var o=(n.find(function(i){return i&&i.value==="worksheet"})||{}).count;o>0&&e.setState({count:o})})},e.state={count:0},e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){Sr.call(this),this.getChatCount()}},{key:"componentWillReceiveProps",value:function(e){var n=e.sessionList,o=n===void 0?[]:n,i=(o.find(function(l){return l.value==="worksheet"})||{}).count,s=((this.props.sessionList||[]).find(function(l){return l.value==="worksheet"})||{}).count;i>0&&s!==i&&this.setState({count:i})}},{key:"render",value:function(){var e=this,n=(0,N.FL)(),o=n.rp,i=this.props,s=i.isMobile,l=i.color,c=i.sessionList,p=c===void 0?[]:c,m=i.visible,f=this.state.count,v=f===void 0?0:f;return t.createElement(t.Fragment,null,t.createElement(Vi,{onClick:function(){e.setState({count:0},function(){e.props.dispatch(Y.ZE({id:"worksheet",value:"worksheet",iconType:"worksheet"}))})}},v>0&&t.createElement("div",{className:T()("unread Hand",{isMobile:s}),style:{color:s?"#fff":l}},v>99?"99+":v),t.createElement("i",{className:T()("icon icon-hr_message_reminder Font20 Hand",{Gray_9e:s}),onClick:function(){}})),t.createElement("div",{id:"chatPanel"},o&&t.createElement(ji,null)))}}]),r}(t.Component);const zi=(0,Mt.$j)(function(d){var r=d.chat,a=r.currentSession,e=r.visible,n=r.sessionList;return{currentSession:a,visible:e,sessionList:n}})(Ki);var Yi=(0,V.Z)([`
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  .headerCenter {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .appNameHeaderBoxPortal {
    top: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    position: relative;
    &.isMobile {
      height: 70px;
      background: #fff;
      .avatarM {
        line-height: 70px;
      }
    }
    .appName {
      height: 100%;
      width: 100%;
      max-width: 188px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.isFixed {
        width: auto;
      }
      &.appNameM {
        max-width: 280px;
        font-weight: bold;
        font-size: 24px !important;
        padding-left: 16px;
        line-height: 70px;
      }
    }
    .appItemsOuterWrap {
      &.Hidden {
        display: none;
      }
      display: flex;
      height: 100%;
      align-items: center;
      flex: 1 1 0%;
      position: relative;
      overflow: hidden;
      .appItemsInnerWrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        .appItemsWrap {
          display: flex;
          position: absolute;
          left: 0;
          width: 100%;
          height: 50px;
          li {
            display: flex;
            height: 100%;
            align-items: center;
            position: relative;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            flex-shrink: 0;
            font-weight: bold;
            padding: 0 20px;
            &.active {
              background-color: rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
  }
  .appFixed {
    border-radius: 13px;
    color: #fff;
    height: 22px;
    line-height: 22px;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: bold;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 5px;
    background: #fd7558;
  }
`],[`
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  .headerCenter {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .appNameHeaderBoxPortal {
    top: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    position: relative;
    &.isMobile {
      height: 70px;
      background: #fff;
      .avatarM {
        line-height: 70px;
      }
    }
    .appName {
      height: 100%;
      width: 100%;
      max-width: 188px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.isFixed {
        width: auto;
      }
      &.appNameM {
        max-width: 280px;
        font-weight: bold;
        font-size: 24px !important;
        padding-left: 16px;
        line-height: 70px;
      }
    }
    .appItemsOuterWrap {
      &.Hidden {
        display: none;
      }
      display: flex;
      height: 100%;
      align-items: center;
      flex: 1 1 0%;
      position: relative;
      overflow: hidden;
      .appItemsInnerWrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        .appItemsWrap {
          display: flex;
          position: absolute;
          left: 0;
          width: 100%;
          height: 50px;
          li {
            display: flex;
            height: 100%;
            align-items: center;
            position: relative;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            flex-shrink: 0;
            font-weight: bold;
            padding: 0 20px;
            &.active {
              background-color: rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
  }
  .appFixed {
    border-radius: 13px;
    color: #fff;
    height: 22px;
    line-height: 22px;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: bold;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 5px;
    background: #fd7558;
  }
`]),Qi=(0,V.Z)([`
  position: absolute;
  right: 0;
  height: calc(100% - 50px);
  top: 51px;
  width: 480px;
  max-width: 80%;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 24%);
  z-index: 1000;
  &.leftNaviStyle {
    height: 100%;
    top: 0;
    position: fixed;
  }
  .infoConBox {
    height: calc(100% - 70px);
    overflow: auto;
    padding: 24px;
  }
  .infoBox {
    overflow: auto;
    .cellOptions {
      max-width: 100%;
      .cellOption {
        max-width: 100%;
      }
    }
  }
  &.isMobile {
    top: 0;
    height: 100%;
    min-width: 100% !important;
    .back {
      height: 70px;
      line-height: 70px;
    }
    .infoConBox {
      height: calc(100% - 140px);
      padding: 6px 24px 24px;
    }
  }
  .closeBtnN {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  img.userAvatar {
  }
  .userName {
    line-height: 56px;
    word-wrap: break-word;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
  .title {
    width: 60px;
    padding-right: 5px;
  }
  .rInfo {
    width: calc(100% - 56px);
    &.isOption {
      .editableCellCon {
        padding-left: 0px !important;
      }
    }
  }
  .logoutBox {
    display: flex;
  }
  .opt {
    height: 36px;
    width: 36px;
    margin: 16px 16px 16px 10px;
    background: #f5f5f5;
    border-radius: 3px;
    .icon {
      margin: 0 auto;
      color: #9d9d9d;
      line-height: 36px;
    }
    &:hover {
      .icon {
        color: #2196f3;
      }
    }
  }
  .logout {
    flex: 1;
    height: 36px;
    background: rgba(33, 150, 243, 0.1);
    color: #2196f3;
    border-radius: 3px;
    line-height: 36px;
    text-align: center;
    margin: 16px 0px 16px 16px;
    .icon:before {
      vertical-align: middle;
    }
    &:hover {
      background: #ebf6fe;
    }
  }
  .userImage {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .hoverAvatar {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
      line-height: 60px;
      color: #ffffff;
      z-index: 2;
    }
    &:hover {
      .hoverAvatar {
        display: block;
      }
    }
  }
  .languagueSetting {
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
    .languagueItem {
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid #e0e0e0;
      background: #fff;
      color: #bdbdbd;
      &:last-child {
        border-right: none;
      }
      &.active {
        background: #2196f3;
        color: #fff;
      }
    }
  }
`],[`
  position: absolute;
  right: 0;
  height: calc(100% - 50px);
  top: 51px;
  width: 480px;
  max-width: 80%;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 24%);
  z-index: 1000;
  &.leftNaviStyle {
    height: 100%;
    top: 0;
    position: fixed;
  }
  .infoConBox {
    height: calc(100% - 70px);
    overflow: auto;
    padding: 24px;
  }
  .infoBox {
    overflow: auto;
    .cellOptions {
      max-width: 100%;
      .cellOption {
        max-width: 100%;
      }
    }
  }
  &.isMobile {
    top: 0;
    height: 100%;
    min-width: 100% !important;
    .back {
      height: 70px;
      line-height: 70px;
    }
    .infoConBox {
      height: calc(100% - 140px);
      padding: 6px 24px 24px;
    }
  }
  .closeBtnN {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  img.userAvatar {
  }
  .userName {
    line-height: 56px;
    word-wrap: break-word;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
  .title {
    width: 60px;
    padding-right: 5px;
  }
  .rInfo {
    width: calc(100% - 56px);
    &.isOption {
      .editableCellCon {
        padding-left: 0px !important;
      }
    }
  }
  .logoutBox {
    display: flex;
  }
  .opt {
    height: 36px;
    width: 36px;
    margin: 16px 16px 16px 10px;
    background: #f5f5f5;
    border-radius: 3px;
    .icon {
      margin: 0 auto;
      color: #9d9d9d;
      line-height: 36px;
    }
    &:hover {
      .icon {
        color: #2196f3;
      }
    }
  }
  .logout {
    flex: 1;
    height: 36px;
    background: rgba(33, 150, 243, 0.1);
    color: #2196f3;
    border-radius: 3px;
    line-height: 36px;
    text-align: center;
    margin: 16px 0px 16px 16px;
    .icon:before {
      vertical-align: middle;
    }
    &:hover {
      background: #ebf6fe;
    }
  }
  .userImage {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .hoverAvatar {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
      line-height: 60px;
      color: #ffffff;
      z-index: 2;
    }
    &:hover {
      .hoverAvatar {
        display: block;
      }
    }
  }
  .languagueSetting {
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
    .languagueItem {
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid #e0e0e0;
      background: #fff;
      color: #bdbdbd;
      &:last-child {
        border-right: none;
      }
      &.active {
        background: #2196f3;
        color: #fff;
      }
    }
  }
`]),Ji=(0,V.Z)([`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.appMoreActionWrap {
    .header {
      line-height: 24px;
      margin-bottom: 20px;
      text-align: left;
      padding: 20px 15px 0;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .actionContent {
      padding-left: 20px;
      color: #000;
      line-height: 50px;
      text-align: left;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .RedMenuItem {
      color: #f44336 !important;
    }
  }
`],[`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.appMoreActionWrap {
    .header {
      line-height: 24px;
      margin-bottom: 20px;
      text-align: left;
      padding: 20px 15px 0;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .actionContent {
      padding-left: 20px;
      color: #000;
      line-height: 50px;
      text-align: left;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .RedMenuItem {
      color: #f44336 !important;
    }
  }
`]),Xi=(0,V.Z)([`
  &.RedMenuItem {
    .Item-content {
      color: #f44336 !important;
      .Icon {
        color: #f44336 !important;
      }
      &:not(.disabled):hover {
        background-color: #f44336 !important;
      }
    }
  }
`],[`
  &.RedMenuItem {
    .Item-content {
      color: #f44336 !important;
      .Icon {
        color: #f44336 !important;
      }
      &:not(.disabled):hover {
        background-color: #f44336 !important;
      }
    }
  }
`]),qi=K.ZP.div(Yi),es=K.ZP.div(Qi),ts=(0,K.ZP)(xe())(Ji),ns=(0,K.ZP)(Kn.Z)(Xi),as=u(41436),rs=u(71346),os=(0,Je.Z)(H.Z),is=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));return e.getInfo=function(){var n=e.props.appId||(0,Me.rh)(e.props.match.params);n&&(he.Z.getLoginUrl({appId:n}).then(function(o){e.setState({url:o})}),e.getPortalDetail(n),he.Z.getPortalSetByAppId({appId:n}).then(function(o){e.setState({baseInfo:o})}))},e.getPortalDetail=function(n){he.Z.getDetail({exAccountId:md.global.Account.accountId,appId:n}).then(function(o){var i=o.receiveControls.find(function(s){return s.controlId==="portal_avatar"})||{};e.setState({currentData:o.receiveControls,avatar:i.value||md.global.Account.avatar,hasPassword:o.hasPassword},function(){md.global.Account.avatar=i.value||md.global.Account.avatar})})},e.logout=function(){window.currentLeave=!0,an.Z.loginOut().then(function(n){if(n){(0,Ot.Gs)();var o=e.props.appId||(0,Me.rh)(e.props.match.params);window.localStorage.removeItem("PortalLoginInfo-"+o),window.localStorage.removeItem("LoginCheckList"),location.href=(window.subPath||"")+"/login?ReturnUrl="+encodeURIComponent(e.state.url)}})},e.handleUploadImg=function(){var n=e.state,o=n.currentData,i=n.avatar,s=i===void 0?"":i;ye.Z.confirm({dialogClasses:"uploadAvatorDialogId",width:(0,N.Q9)()?"335px":"460px",title:_l("\u4E0A\u4F20\u5934\u50CF"),noFooter:!0,children:t.createElement(cn.Z,{editAvatar:function(c){he.Z.saveUserDetail({appId:e.props.appId||(0,Me.rh)(e.props.match.params),exAccountId:md.global.Account.accountId,newCell:o.filter(function(p){return["avatar"].includes(p.alias)}).map(function(p){return(0,D.default)({},p,{value:c.fileName})})}).then(function(p){e.setState({avatar:p.data.portal_avatar},function(){md.global.Account.avatar=p.data.portal_avatar,$(".uploadAvatorDialogId").parent().remove()})})},avatar:s.split("imageView2")[0],closeDialog:function(){$(".uploadAvatorDialogId").parent().remove()}})})},e.state={appId:"",data:null,icon:"",name:"",iconColor:"",showUserInfo:!1,showUserInfoDialog:!1,currentData:[],avatar:md.global.Account.avatar,appSectionId:"",isAppItemOverflow:!1,disabledPointer:"left",showTelDialog:!1,showDelDialog:!1,allowExAccountDiscuss:!1,exAccountDiscussEnum:0,approved:!1,url:"",baseInfo:{},type:"",showChangePwd:!1,hasPassword:!1,showMenu:!1,showModel:!1},e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"getUserInfo",value:function(){return ct.Z.getAccountListInfo({})}},{key:"render",value:function(){var e=this,n=this.state,o=n.name,i=n.iconColor,s=i===void 0?"#2196f3":i,l=n.showUserInfo,c=n.showUserInfoDialog,p=n.currentData,m=n.data,f=n.showTelDialog,v=n.showDelDialog,h=n.baseInfo,g=n.type,E=n.showChangePwd,k=n.showMenu,S=n.showModel,G=this.props,O=G.isMobile,J=G.match,ee=J===void 0?{}:J,se=G.appStatus,j=G.noAvatar,Ce=G.currentPcNaviStyle,Ne=p.filter(function(C){return!["name","mobilephone","avatar","firstLoginTime","roleid","status","openid","portal_email"].includes(C.alias)}),Be=ee.params,tt=Be===void 0?{}:Be,De=this.props.iconColor||s,Re=(p.find(function(C){return[g!=="email"?"portal_mobile":"portal_email"].includes(C.controlId)})||{}).value||(p.find(function(C){return["portal_mobile"].includes(C.controlId)})||{}).value||(p.find(function(C){return["portal_email"].includes(C.controlId)})||{}).value;return t.createElement(qi,null,t.createElement("div",{className:T()("appNameHeaderBoxPortal appNameHeaderBox flexRow noBorder",{isMobile:O})},t.createElement(t.Fragment,null,t.createElement("div",{className:"headerCenter"},t.createElement("div",{className:T()("appName Font16 Hand",{appNameM:O}),style:{color:O?"#333":"#fff"}},this.props.name||o)),t.createElement(zi,{color:De,isMobile:O}),!j&&t.createElement("div",{className:T()("InlineBlock mRight16 Hand",{avatarM:O}),ref:function(z){e.avatar=z},onClick:function(){return e.setState({showUserInfo:!0})}},t.createElement("img",{src:(this.state.avatar||"").split("imageView2")[0],style:{width:O?32:30,height:O?32:30,borderRadius:"50%"}})))),l&&t.createElement("div",{className:"cover"}),l&&t.createElement(os,{className:"",onClickAway:function(){return e.setState({showUserInfo:!1})},onClickAwayExceptions:[".uploadAvatorDialogId,.mui-dialog-container,.rc-trigger-popup,#uploadAvatorDialogId_mask,.am-modal-mask,.am-modal-wrap"]},t.createElement(lt(),{component:"div",transitionName:"userInfoSide",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},t.createElement(es,{className:T()({isMobile:O,leftNaviStyle:[1,3].includes(Ce)})},O&&t.createElement(t.Fragment,null,t.createElement("span",{className:"Font17 Hand InlineBlock back pLeft16",onClick:function(){e.setState({showUserInfo:!1})}},t.createElement(L.Z,{icon:"backspace mRight8 Gray_9e"}),_l("\u6211\u7684\u8D26\u6237"))),t.createElement("div",{className:"infoConBox"},t.createElement("div",{className:"account flexRow"},t.createElement("div",{className:"userImage",onClick:this.handleUploadImg},t.createElement("img",{className:"avatarImg",src:(this.state.avatar||"").split("imageView2")[0],style:{width:56,height:56,borderRadius:"50%"}}),t.createElement("div",{className:"hoverAvatar"},t.createElement("span",{className:"Font20 icon-upload_pictures"}))),t.createElement("span",{className:"userName flex mLeft20 Font17"},(p.find(function(C){return C.alias==="name"})||{}).value)),t.createElement("div",{className:T()("email flexRow mTop32")},t.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u624B\u673A\u53F7")),t.createElement("span",{className:"telNumber flex"},(p.find(function(C){return C.alias==="mobilephone"})||{}).value,t.createElement("span",{className:T()("edit ThemeColor3 Hand InlineBlock",{mLeft10:(p.find(function(C){return C.alias==="mobilephone"})||{}).value}),onClick:function(){e.setState({showTelDialog:!0,type:"phone"})}},(p.find(function(C){return C.alias==="mobilephone"})||{}).value?_l("\u4FEE\u6539"):_l("\u7ED1\u5B9A")))),t.createElement("div",{className:T()("tel flexRow mTop24")},t.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u90AE\u7BB1")),t.createElement("span",{className:"telNumber flex"},(p.find(function(C){return C.controlId==="portal_email"})||{}).value,t.createElement("span",{className:T()("edit ThemeColor3 Hand InlineBlock",{mLeft10:(p.find(function(C){return C.controlId==="portal_email"})||{}).value}),onClick:function(){e.setState({showTelDialog:!0,type:"email"})}},(p.find(function(C){return C.controlId==="portal_email"})||{}).value?_l("\u4FEE\u6539"):_l("\u7ED1\u5B9A")))),t.createElement("div",{className:T()("tel flexRow mTop24")},t.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u5BC6\u7801")),t.createElement("span",{className:T()("telNumber flex",{Gray_bd:!this.state.hasPassword})},this.state.hasPassword?_l("\u5DF2\u8BBE\u7F6E"):_l("\u672A\u8BBE\u7F6E"),t.createElement("span",{className:"edit ThemeColor3 Hand mLeft10 InlineBlock",onClick:function(){e.setState({showChangePwd:!0})}},_l("\u4FEE\u6539")))),t.createElement("div",{className:T()("tel flexRow alignItemsCenter mTop24")},t.createElement("span",{className:"title InlineBlock Gray_9e"},_l("\u8BED\u8A00\u8BBE\u7F6E")),t.createElement("div",{className:"languagueSetting flexRow flex"},as.Z.map(function(C){return t.createElement("div",{className:T()("languagueItem flex Hand",{active:(getCookie("i18n_langtag")||md.global.Config.DefaultLang)===C.key}),onClick:function(){rs.Z.editAccountSetting({settingType:"6",settingValue:getCurrentLangCode(C.key).toString()}).then(function(Ee){Ee?(setCookie("i18n_langtag",C.key),window.location.reload()):alert(_l("\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),2)})}},C.value)}))),t.createElement("h6",{className:T()("Font16",{mTop32:!O,mTop24:O})},_l("\u6211\u7684\u4FE1\u606F")),t.createElement("div",{className:"infoBox"},Ne.filter(function(C){return C.fieldPermission[2]!=="1"}).sort(function(C,z){return C.row-z.row}).map(function(C){return t.createElement("div",{className:"tel flexRow mTop10"},t.createElement("span",{className:"title InlineBlock Gray_9e WordBreak"},C.controlName),t.createElement("span",{className:T()("flex mLeft24 rInfo",{isOption:[9,10,11].includes(C.type)})},Gn((0,D.default)({},C))))}),t.createElement("span",{className:"edit ThemeColor3 Hand mTop12 InlineBlock",onClick:function(){e.setState({showUserInfoDialog:!0})}},_l("\u4FEE\u6539")))),t.createElement("div",{className:"logoutBox"},t.createElement("div",{className:"logout Hand Font14 Bold",onClick:function(){e.logout()}},t.createElement(L.Z,{icon:"exit_to_app",className:"mRight5 Font18"}),_l("\u9000\u51FA\u767B\u5F55")),(0,N.Q9)()?t.createElement("div",{className:"opt Hand TxtCenter",onClick:function(){e.setState({showModel:!0})}},t.createElement(L.Z,{icon:"more_horiz",className:"Font18"})):t.createElement(la.Z,{action:["click"],popupVisible:k,onPopupVisibleChange:function(z){e.setState({showMenu:z})},popup:t.createElement(qt.Z,null,t.createElement(ns,{className:"RedMenuItem",onClick:function(){e.setState({showDelDialog:!0,showMenu:!1})}},t.createElement("span",null,_l("\u6CE8\u9500\u6B64\u8D26\u6237")))),popupClassName:T()("dropdownTrigger"),popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}}},t.createElement("div",{className:"opt Hand TxtCenter",onClick:function(){e.setState({showMenu:!0})}},t.createElement(L.Z,{icon:"more_horiz",className:"Font18"}))))))),S&&t.createElement(ts,{popup:!0,animationType:"slide-up",visible:S,className:"appMoreActionWrap",onClose:function(){e.setState({showModel:!1})}},t.createElement("div",{className:"flexRow header"},t.createElement("div",{className:"Font13 Gray_9e flex"},_l("\u66F4\u591A")),t.createElement("div",{className:"closeIcon",onClick:function(){e.setState({showModel:!1})}},t.createElement(L.Z,{icon:"close",className:"Font17 Gray_9e bold"}))),t.createElement("div",{className:"actionContent"},t.createElement("div",{className:"RedMenuItem",onClick:function(){e.setState({showModel:!1,showDelDialog:!0})}},t.createElement("span",null,_l("\u6CE8\u9500\u6B64\u8D26\u6237"))))),c&&t.createElement(Gt,{appId:this.props.appId||(0,Me.rh)(this.props.match.params),classNames:(0,N.Q9)()?"forMobilePortal":"",show:c,currentData:p.filter(function(C){return!["avatar","firstLoginTime","roleid","status"].includes(C.alias)&&C.fieldPermission[2]!=="1"}).map(function(C){return["portal_mobile","portal_email"].includes(C.controlId)?(0,D.default)({},C,{disabled:!0}):C}),exAccountId:md.global.Account.accountId,setShow:function(){return e.setState({showUserInfoDialog:!1})},onOk:function(z,Ee){he.Z.saveUserDetail({appId:e.props.appId||(0,Me.rh)(e.props.match.params),exAccountId:md.global.Account.accountId,newCell:z.filter(function(le){return Ee.includes(le.controlId)}).map(nn.jz)}).then(function(le){e.setState({showUserInfoDialog:!1,currentData:z}),Ee.includes("portal_name")&&location.reload()})}}),f&&t.createElement(or,{type:g,baseInfo:h,isBind:!(p.find(function(C){return C.controlId==="portal_email"})||{}).value&&g==="email"||!(p.find(function(C){return C.controlId==="portal_mobile"})||{}).value&&g==="phone",appId:this.props.appId||(0,Me.rh)(this.props.match.params),classNames:(0,N.Q9)()?"forMobilePortal":"",show:f,account:Re,exAccountId:md.global.Account.accountId,setShow:function(){return e.setState({showTelDialog:!1,type:""})},onOk:function(){!(p.find(function(z){return z.controlId==="portal_email"})||{}).value&&g==="email"||!(p.find(function(z){return z.controlId==="portal_mobile"})||{}).value&&g==="phone"?e.setState({showTelDialog:!1,type:""},function(){e.getPortalDetail(e.props.appId||(0,Me.rh)(e.props.match.params))}):e.logout()}}),E&&t.createElement(hr,{type:g,baseInfo:h,appId:this.props.appId||(0,Me.rh)(this.props.match.params),classNames:(0,N.Q9)()?"forMobilePortal":"",show:E,account:Re,exAccountId:md.global.Account.accountId,setShow:function(){return e.setState({showChangePwd:!1})},onOk:function(){e.logout()}}),v&&t.createElement(lr,{url:this.state.url,type:(p.find(function(C){return["portal_mobile"].includes(C.controlId)})||{}).value?"phone":"email",appId:this.props.appId||(0,Me.rh)(this.props.match.params),classNames:(0,N.Q9)()?"forMobilePortal":"",show:v,account:Re,exAccountId:md.global.Account.accountId,setShow:function(){return e.setState({showDelDialog:!1})},onOk:function(){e.logout()}}))}}]),r}(t.Component),ss=(0,V.Z)([`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #585858;
`],[`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #585858;
`]),ls=K.ZP.div(ss);function Xa(d){var r=d.appId,a=d.debugRoles,e=a===void 0?[]:a,n=function(){Pt.Z.setDebugRoles({appId:r,roleIds:[]}).then(function(i){i&&location.reload()})};return I().isEmpty(e)?null:t.createElement(ls,null,t.createElement("div",{className:"flex ellipsis"},_l("\u89D2\u8272\u8C03\u8BD5\uFF1A"),e.map(function(o,i){return t.createElement(t.Fragment,null,o.name,i<e.length-1?"\u3001":"")})),t.createElement("i",{className:"icon-exit Hand Font16 mLeft5",onClick:n}))}var cs=u(3538),ft=u(70973),ds=u(87600),ps=(0,V.Z)([`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.appMoreActionWrap {
    .header {
      line-height: 24px;
      margin-bottom: 20px;
      text-align: left;
      padding: 20px 15px 0;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .actionContent {
      padding-left: 20px;
      color: #000;
      line-height: 50px;
      text-align: left;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .active {
      color: #ffd800 !important;
    }
    .lightColor {
      color: #ffa700 !important;
    }
  }
`],[`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.appMoreActionWrap {
    .header {
      line-height: 24px;
      margin-bottom: 20px;
      text-align: left;
      padding: 20px 15px 0;
      .closeIcon {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 50%;
        background-color: #e6e6e6;
        .icon {
          line-height: 24px;
        }
      }
    }
    .actionContent {
      padding-left: 20px;
      color: #000;
      line-height: 50px;
      text-align: left;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .active {
      color: #ffd800 !important;
    }
    .lightColor {
      color: #ffa700 !important;
    }
  }
`]),us=(0,K.ZP)(xe())(ps);function ms(d){var r=d.visible,a=d.viewHideNavi,e=d.detail,n=e===void 0?{}:e,o=d.onClose,i=o===void 0?function(){}:o,s=d.dealMarked,l=s===void 0?function(){}:s,c=d.navigateTo,p=c===void 0?function(){}:c,m=d.dealViewHideNavi,f=m===void 0?function(){}:m,v=(0,t.useState)(!0),h=(0,re.Z)(v,2),g=h[0],E=h[1];return(0,t.useEffect)(function(){!(0,ft.g9)(n.permissionType)&&!(0,ft.le)(n.permissionType,n.isLock)&&Pt.Z.getAppRoleSetting({appId:n.id}).then(function(k){var S=k.appSettingsEnum;E(S===1)})},[]),t.createElement(us,{popup:!0,animationType:"slide-up",visible:r,className:"appMoreActionWrap",onClose:function(){return i}},t.createElement("div",{className:"flexRow header"},t.createElement("div",{className:"Font13 Gray_9e flex"},_l("\u5E94\u7528\u64CD\u4F5C")),t.createElement("div",{className:"closeIcon",onClick:i},t.createElement(L.Z,{icon:"close",className:"Font17 Gray_9e bold"}))),t.createElement("div",{className:"actionContent"},!window.isPublicApp&&t.createElement("div",{onClick:function(){return l(!n.isMarked)}},t.createElement(L.Z,{icon:"star_3",className:T()("Gray_9e mRight24 Font20 TxtMiddle",{active:n.isMarked})}),t.createElement("span",null,n.isMarked?_l("\u53D6\u6D88\u6536\u85CF"):_l("\u6536\u85CF\u5E94\u7528"))),g&&t.createElement("div",{onClick:function(){window.mobileNavigateTo("/mobile/members/"+n.id),i()}},t.createElement(L.Z,{icon:"group",className:"Gray_9e mRight24 Font20 TxtMiddle"}),t.createElement("span",null,_l("\u4EBA\u5458\u7BA1\u7406"))),((0,ft.le)(n.permissionType,n.isLock)||(0,ft.g9)(n.permissionType))&&t.createElement("div",{onClick:function(){f(!a),i()}},t.createElement(L.Z,{icon:a?"public-folder-hidden":"visibility",className:"Gray_9e mRight24 Font20 TxtMiddle"}),t.createElement("span",null,a?_l("\u4E0D\u663E\u793A\u9690\u85CF\u7684\u5E94\u7528\u9879"):_l("\u663E\u793A\u9690\u85CF\u7684\u5E94\u7528\u9879")))))}var fs=_n().Item,Xn=null,hs=function(d){(0,A.default)(r,d);function r(a){(0,F.default)(this,r);var e=(0,P.default)(this,(r.__proto__||b()(r)).call(this,a));e.detectionUrl=function(l){var c=l.permissionType,p=l.isLock,m=l.appNaviStyle,f=l.sections,v=e.props.match.params;if(m===2&&!v.worksheetId&&!sessionStorage.getItem("detectionUrl")){var h=(0,ft.le)(c,p),g=f[0].appSectionId,E=e.getWorksheetList(f),k=h?E[0]:E.filter(function(G){return[1,3].includes(G.status)&&!G.navigateHide})[0],S=k.workSheetId;window.mobileNavigateTo("/mobile/app/"+v.appId+"/"+g+"/"+S)}},e.handleOpenSheet=function(l,c){(0,N.Ye)(c.type==0?"worksheet":"customPage",c.workSheetId);var p=e.props.match.params;if(localStorage.removeItem("currentNavWorksheetId"),c.type===0){var m=localStorage.getItem("mobileViewSheet-"+c.workSheetId),f=m||"";e.navigateTo("/mobile/recordList/"+p.appId+"/"+l.appSectionId+"/"+c.workSheetId+(f?"/"+f:""))}if(c.type===1){var v=c.urlTemplate,h=c.configuration,g=h===void 0?{}:h;if(v&&g.openType=="2"){var E=e.props.appDetail.detail,k=(0,ds.Pz)(v),S=[];k.map(function(G){G.staticValue?S.push(G.staticValue):S.push((0,nn.fS)({projectId:E.projectId,appId:p.appId,groupId:p.appSectionId,worksheetId:p.workSheetId},G.cid))}),window.open(S.join(""))}else e.navigateTo("/mobile/customPage/"+p.appId+"/"+l.appSectionId+"/"+c.workSheetId)}},e.handleSwitchSheet=function(l,c){var p=e.props.match.params,m=l.appSectionId;e.navigateTo("/mobile/app/"+p.appId+"/"+m+"/"+l.workSheetId),safeLocalStorageSetItem("currentNavWorksheetId",l.workSheetId)},e.renderModal=function(){return t.createElement(xe(),{visible:!e.props.isQuitSuccess,transparent:!0,maskClosable:!1,title:_l("\u65E0\u6CD5\u9000\u51FA\u901A\u8FC7\u90E8\u95E8\u52A0\u5165\u7684\u5E94\u7528"),footer:[{text:_l("\u786E\u8BA4"),onPress:function(){e.props.dispatch({type:"MOBILE_QUIT_FAILED_CLOSE"})}}]},t.createElement("div",{style:{overflow:"scroll"}},_l("\u60A8\u6240\u5728\u7684\u90E8\u95E8\u88AB\u52A0\u5165\u4E86\u6B64\u5E94\u7528\uFF0C\u53EA\u80FD\u7531\u5E94\u7528\u7BA1\u7406\u5458\u8FDB\u884C\u64CD\u4F5C")))},e.renderGuide=function(){var l=e.props.match.params;return t.createElement("div",{className:"guideWrapper"},t.createElement("div",{className:"guide"}),t.createElement("img",{className:"guideImg Absolute",src:fe()}),t.createElement("div",{className:"text Absolute Font18 White bold"},_l("\u65B0\u5E94\u7528\u4EC5\u60A8\u81EA\u5DF1\u53EF\u89C1\uFF0C\u8BF7\u5728\u201C\u4EBA\u5458\u8BBE\u7F6E\u201D\u5C06\u89D2\u8272\u5206\u914D\u7ED9\u534F\u4F5C\u8005\uFF0C\u518D\u5F00\u59CB\u4F7F\u7528\u3002")),t.createElement("div",{className:"ok Absolute Font18 White bold",onClick:function(){e.navigateTo("/mobile/app/"+l.appId)}},_l("\u77E5\u6653\u4E86")))},e.getWorksheetList=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=I().flatten(l.map(function(p){var m=[];return p.workSheetInfo.forEach(function(f){if(f.appSectionId=p.appSectionId,f.type===2){var v=(I().find(p.childSections,function(h){return h.appSectionId===f.workSheetId})||{}).workSheetInfo;(v||[]).forEach(function(h){m.push(h)})}m.push(f)}),m}));return c};var n=a.match,o=a.history,i=o.location.hash,s=i.includes("hideTabBar")||!!sessionStorage.getItem("hideTabBar");return e.state={isHideTabBar:s,selectedTab:n.params.worksheetId||"more",expandGroupKeys:[],viewHideNavi:!1,level2ExpandKeys:[]},s&&sessionStorage.setItem("hideTabBar",!0),e}return(0,R.default)(r,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.props.dispatch(Dn(e.appId,this.detectionUrl)),$("html").addClass("appListMobile");var n=I().get(this.props,"appDetail.detail")||{},o=n.viewHideNavi;this.setState({viewHideNavi:o})}},{key:"componentWillReceiveProps",value:function(e){var n=e.match.params.worksheetId,o=I().get(e,"appDetail.detail.appNaviStyle");if(n!==this.props.match.params.worksheetId&&(this.setState({selectedTab:n||"more"}),o===2&&n&&safeLocalStorageSetItem("currentNavWorksheetId",n)),!I().isEqual(this.props.appDetail,e.appDetail)){var i=I().get(e,"appDetail")||{},s=i.appSection,l=s===void 0?[]:s,c=i.detail,p=c===void 0?{}:c,m=I().get(e,"appDetail.detail")||{},f=m.viewHideNavi,v=localStorage.getItem("appExpandGroupInfo-"+p.id)&&JSON.parse(localStorage.getItem("appExpandGroupInfo-"+p.id))||{},h=v.expandGroupKeys?v.expandGroupKeys:p.appNaviDisplayType===1?[]:p.appNaviDisplayType===2?[l[0].appSectionId]:l.map(function(g){return g.appSectionId});this.setState({expandGroupKeys:h,viewHideNavi:f,level2ExpandKeys:v.level2ExpandKeys||[]})}}},{key:"componentWillUnmount",value:function(){$("html").removeClass("appListMobile"),sessionStorage.removeItem("detectionUrl"),Xn?Xn.close():Xn=null,wt().close(),this.setState({appMoreActionVisible:!1})}},{key:"navigateTo",value:function(e){e=(window.subPath||"")+e,window.isPublicApp&&!new URL("http://z.z"+e).hash&&(e=e+"#publicapp"+window.publicAppAuthorization),this.props.history.push(e)}},{key:"renderList",value:function(e,n){var o=this,i=this.state.viewHideNavi,s=this.props.appDetail,l=s.detail,c=e.childSections,p=c===void 0?[]:c,m=e.workSheetInfo,f=m===void 0?[]:m,v=(0,ft.le)(l.permissionType,l.isLock);return f.filter(function(h){return i?!0:![2,4].includes(h.status)}).filter(function(h){return v?!0:[1,3].includes(h.status)&&!h.navigateHide}).map(function(h){if(h.type!==2)return t.createElement(fs,{className:T()({pLeft40:n==="level2"}),multipleLine:!0,key:h.workSheetId,thumb:t.createElement(we.Z,{url:h.iconUrl,fill:l.iconColor,size:22}),extra:h.status===2?t.createElement(L.Z,{icon:"public-folder-hidden"}):null,onClick:function(S){I().includes(S.target.classList,"icon-public-folder-hidden")||o.handleOpenSheet(e,h)}},t.createElement("span",{className:"Font15 Gray LineHeight40"},(0,N.T3)(l.id,h.workSheetId).name||h.workSheetName));var g=I().assign(h,I().find(p,function(k){return k.appSectionId===h.workSheetId})||{}),E=localStorage.getItem("appExpandGroupInfo-"+l.id)&&JSON.parse(localStorage.getItem("appExpandGroupInfo-"+l.id))||{};return t.createElement(ze(),{activeKey:o.state.level2ExpandKeys,onChange:function(S){safeLocalStorageSetItem("appExpandGroupInfo-"+l.id,ot()((0,D.default)({},E,{level2ExpandKeys:S,appNaviDisplayType:l.appNaviDisplayType,appNaviStyle:l.appNaviStyle}))),o.setState({level2ExpandKeys:S})}},t.createElement(ze().Panel,{header:o.renderHeader(g,"level2"),key:g.appSectionId},o.renderList(g,"level2")))})}},{key:"renderSudoku",value:function(e){var n=this,o=this.state.viewHideNavi,i=this.props.appDetail,s=i.detail,l=e.childSections,c=l===void 0?[]:l,p=e.workSheetInfo,m=p===void 0?[]:p,f=m.filter(function(E){return E.type!==2})||[],v=(0,ft.le)(s.permissionType,s.isLock),h=m.filter(function(E){return E.type===2}).map(function(E){return(0,D.default)({},I().assign(E,I().find(c,function(k){return k.appSectionId===E.workSheetId})||{}))});h.push({workSheetId:"other",name:I().isEmpty(h)?"":_l("\u5176\u4ED6"),type:2,workSheetInfo:f});var g=$(window).width();return h.filter(function(E){return o?!0:![2,4].includes(E.status)}).map(function(E){if(!(E.workSheetId==="other"&&I().isEmpty(E.workSheetInfo)))return t.createElement(t.Fragment,{key:E.workSheetId},n.renderHeader(E,"level2"),t.createElement(me(),{className:"sudokuWrapper",wrap:"wrap"},E.workSheetInfo.filter(function(k){return o?!0:![2,4].includes(k.status)}).filter(function(k){return v?!0:[1,3].includes(k.status)&&!k.navigateHide}).map(function(k){return t.createElement("div",{key:k.workSheetId,className:T()("sudokuItemWrapper",{sudokuWrapper16:s.gridDisplayMode===1&&g<=600,sudokuItemWrapperAutoWidth:g>600})},t.createElement("div",{className:"sudokuItem flexColumn valignWrapper",onClick:function(){n.handleOpenSheet(e,k)}},k.status===2&&t.createElement(L.Z,{icon:"public-folder-hidden"}),t.createElement(we.Z,{addClassName:s.gridDisplayMode===1&&g<=600?"mTop16":"mTop20",url:k.iconUrl,fill:s.iconColor,size:s.gridDisplayMode===1&&g<=600?26:30}),t.createElement("div",{className:"name"},(0,N.T3)(s.id,k.workSheetId).name||k.workSheetName)))})))})}},{key:"renderHeader",value:function(e,n){var o=this.props.appDetail,i=o.detail,s=i.id,l=i.appNaviStyle,c=this.state.expandGroupKeys,p=c===void 0?[]:c,m=(0,N.T3)(s,e.appSectionId).name||e.name;return n=="level1"?t.createElement("div",{className:"accordionHeaderWrap appSectionHeader"},t.createElement("div",{className:"Bold flex ellipsis"},m),I().includes(p,e.appSectionId)?t.createElement(L.Z,{icon:"minus",className:"appSectionIcon"}):t.createElement(L.Z,{icon:"plus",className:"appSectionIcon"})):l===1?t.createElement("div",{className:T()("Gray_75 Font14 pLeft15 ellipsis mTop8",{mBottom12:m})},m):t.createElement("div",{className:"accordionHeaderWrap"},t.createElement("div",{className:"flexRow mLeft5"},t.createElement(we.Z,{url:e.iconUrl,fill:e.iconColor,size:22,className:"mRight12"}),t.createElement("div",{className:"flex ellipsis Font15 Bold"},m)),t.createElement(L.Z,{icon:"expand_more",className:"Gray_75"}))}},{key:"renderAppHeader",value:function(){var e=this,n=this.state.isHideTabBar,o=this.props,i=o.appDetail,s=o.match,l=i.appName,c=i.detail,p=i.processCount,m=s.params,f=c.fixed,v=c.permissionType,h=c.webMobileDisplay,g=v>=ge.lt.ADMIN_ROLE;return md.global.Account.isPortal?t.createElement(is,{appId:m.appId,isMobile:!0,name:l,iconUrl:c.iconUrl,iconColor:c.iconColor}):c.appNaviStyle===2&&!(f&&!g||h)?t.createElement("div",{className:"flexRow valignWrapper appNaviStyle2Header"},t.createElement("div",{className:T()("flex flexRow valignWrapper Gray_75 process Relative",{hide:window.isPublicApp}),onClick:function(){e.navigateTo("/mobile/processMatters?appId="+m.appId)}},t.createElement(L.Z,{className:"Font17",icon:"knowledge_file"}),t.createElement("div",{className:"mLeft5 Font14"},_l("\u6D41\u7A0B\u5F85\u529E")),!!p&&t.createElement("div",{className:"flexRow valignWrapper processCount"},p>99?"99+":p)),t.createElement("div",{className:T()("flex flexRow valignWrapper Gray_75 "),onClick:function(){return e.setState({appMoreActionVisible:!0})}},t.createElement(L.Z,{className:"Font17",icon:"more_horiz"}),t.createElement("div",{className:"mLeft5 Font14"},_l("\u66F4\u591A\u64CD\u4F5C")))):t.createElement("div",{className:"appName flexColumn pLeft15 pRight20"},t.createElement("div",{className:"content flex White flexRow valignWrapper"},t.createElement("div",{className:"Font24 flex WordBreak overflow_ellipsis appNameTxt"},t.createElement("span",{className:"Gray"},l)),!h&&t.createElement(t.Fragment,null,t.createElement("div",{className:T()("Relative flexRow valignWrapper",{hide:window.isPublicApp})},t.createElement(L.Z,{icon:"knowledge_file",className:"Font26 Gray_bd",onClick:function(){e.navigateTo("/mobile/processMatters?appId="+m.appId)}}),!!p&&t.createElement("div",{className:"flexRow valignWrapper processCount"},p>99?"99+":p)),t.createElement(L.Z,{icon:"more_horiz",className:"mLeft16 Font26 Gray_9e",onClick:function(){return e.setState({appMoreActionVisible:!0})}}))))}},{key:"renderSection",value:function(e,n){var o=this.props.appDetail,i=o.detail.appNaviStyle;return t.createElement(ze().Panel,{header:this.renderHeader(e,n),key:e.appSectionId},[0,2].includes(i)&&this.renderList(e,n),i===1&&t.createElement("div",{className:"sudokuSectionWrap"},this.renderSudoku(e,n)))}},{key:"renderContent",value:function(){var e=this,n=this.props,o=n.appDetail,i=n.match,s=n.debugRoles,l=s===void 0?[]:s,c=o.appName,p=o.detail,m=o.appSection,f=o.status,v=p.fixed,h=p.webMobileDisplay,g=p.fixAccount,E=p.fixRemark,k=p.permissionType,S=p.appNaviDisplayType,G=p.appStatus,O=p.debugRole,J=O===void 0?{}:O,ee=I().includes([4,11],G),se=k>=ge.lt.ADMIN_ROLE;m=se?m:m.map(function(le){return(0,D.default)({},le,{workSheetInfo:le.workSheetInfo.filter(function(ae){return[1,3].includes(ae.status)&&!ae.navigateHide})})}).filter(function(le){return le.workSheetInfo&&le.workSheetInfo.length>0});var j=this.state,Ce=j.isHideTabBar,Ne=j.appMoreActionVisible,Be=j.viewHideNavi,tt=j.expandGroupKeys,De=i.params,Re=localStorage.getItem("appExpandGroupInfo-"+p.id)&&JSON.parse(localStorage.getItem("appExpandGroupInfo-"+p.id))||{},C=S===2?{activeKey:tt}:{defaultActiveKey:Re.expandGroupKeys?Re.expandGroupKeys:S===1&&(m.length>1||m[0].name)?[]:m.map(function(le){return le.appSectionId})},z=m.length===1&&!m[0].name,Ee=J.canDebug&&!I().isEmpty(l);return!p||p.length<=0?t.createElement(ke.D,{appStatus:2,appId:De.appId}):f===4?t.createElement(ke.D,{appStatus:4,appId:De.appId}):t.createElement(t.Fragment,null,c&&t.createElement(be(),{title:c}),De.isNewApp&&this.renderGuide(),t.createElement("div",{className:"flexColumn h100",style:v&&k!==ge.lt.ADMIN_ROLE||h?{background:"#fff"}:{}},this.renderAppHeader(),ee||v&&!se||h?ee?t.createElement(Rn,{appPkg:p,isMobile:!0}):t.createElement(Jt.Z,{fixAccount:g,fixRemark:E,isNoPublish:h}):t.createElement("div",{className:T()("appSectionCon flex",{pBottom40:Ee})},f===5||m.length<=1&&(m.length<=0||m[0].workSheetInfo.length<=0)?t.createElement(ke.D,{appStatus:5,appId:De.appId}):m.length<=1&&(m.length<=0||m[0].workSheetInfo.length<=0)&&[ge.lt.POSSESS_ROLE,ge.lt.ADMIN_ROLE].includes(p.permissionType)?t.createElement(ke.D,{appStatus:1,appId:De.appId}):t.createElement(t.Fragment,null,t.createElement(ze(),(0,D.default)({className:T()({emptyAppSection:z}),onChange:function(ae){S===2&&(ae=ae.filter(function(te){return!I().includes(tt,te)})),safeLocalStorageSetItem("appExpandGroupInfo-"+p.id,ot()({expandGroupKeys:ae,appNaviDisplayType:p.appNaviDisplayType,appNaviStyle:p.appNaviStyle,level2ExpandKeys:Re.level2ExpandKeys||[]})),e.setState({expandGroupKeys:ae})}},C),m.map(function(le){return e.renderSection(le,"level1")}))))),(!Ce&&!window.isPublicApp&&!md.global.Account.isPortal&&!v||v&&se)&&t.createElement(B.Z,{style:{bottom:p.appNaviStyle===2?(Ee?110:70)+"px":(Ee?60:20)+"px"},icon:"home",onClick:function(){e.navigateTo("/mobile/dashboard")}}),!this.props.isQuitSuccess&&this.renderModal(),Ne&&t.createElement(ms,{visible:Ne,detail:p,viewHideNavi:Be,onClose:function(){return e.setState({appMoreActionVisible:!1})},dealMarked:function(ae){e.props.dispatch(Ye(De.appId,p.projectId,ae)),e.setState({appMoreActionVisible:!1})},dealViewHideNavi:function(ae){e.props.dispatch(Qe(ae,function(){e.setState({viewHideNavi:ae})}))}}),t.createElement(Xa,{appId:p.id,debugRoles:l}))}},{key:"renderRecordList",value:function(e){if(!e)return t.createElement(cs.Z,{type:"sheet"});var n=e.type,o=this.props.appDetail,i=o.detail,s=i===void 0?{}:i,l=o.appSection,c=s.id,p=s.appNaviStyle;if(n===0)return t.createElement(Qt.default,{now:Date.now()});if(n===1)return t.createElement("div",{className:"h100"},t.createElement(st.default,{pageTitle:(0,N.T3)(c,e.workSheetId).name||e.workSheetName,now:Date.now(),appNaviStyle:p,appSection:l,match:this.props.match}))}},{key:"renderBody",value:function(){var e=this,n=this.props.debugRoles,o=n===void 0?[]:n,i=this.props.appDetail,s=i.appSection,l=s===void 0?{}:s,c=i.detail,p=c.fixed,m=c.permissionType,f=c.webMobileDisplay,v=c.debugRole,h=v===void 0?{}:v,g=m>=ge.lt.ADMIN_ROLE,E=this.props.batchOptVisible;if([0,1].includes(c.appNaviStyle)||p&&!g||f)return this.renderContent();var k=this.state,S=k.selectedTab,G=k.isHideTabBar,O=k.appMoreActionVisible,J=this.getWorksheetList(l).filter(function(j){return j.type!==2}).filter(function(j){return g?!0:[1,3].includes(j.status)&&!j.navigateHide}).slice(0,4),ee=I().find(J,{workSheetId:S}),se=c.permissionType<ge.lt.ADMIN_ROLE&&J.length===1&&!!ee;return t.createElement("div",{className:T()("flexColumn h100",{"bottomNavWrap pBottom40":h.canDebug&&!I().isEmpty(o)})},t.createElement("div",{className:T()("flex overflowHidden flexColumn",{recordListWrapper:!se})},S!=="more"&&md.global.Account.isPortal&&this.renderAppHeader(),S==="more"?this.renderContent():this.renderRecordList(ee)),J.length>0&&!E&&t.createElement(at.ZP,{unselectedTintColor:"#949494",tintColor:c.iconColor,barTintColor:"white",hidden:se,noRenderContent:!0},J.map(function(j,Ce){return t.createElement(at.ZP.Item,{title:(0,N.T3)(c.id,j.workSheetId).name||j.workSheetName,key:j.workSheetId,icon:t.createElement(we.Z,{url:j.iconUrl,fill:"#757575",size:20}),selectedIcon:t.createElement(we.Z,{url:j.iconUrl,fill:c.iconColor,size:20}),selected:S===j.workSheetId,onPress:function(){(0,N.Ye)(j.type==0?"worksheet":"customPage",j.workSheetId),e.handleSwitchSheet(j,ee)}})}),t.createElement(at.ZP.Item,{title:_l("\u66F4\u591A"),key:"more",icon:t.createElement(L.Z,{className:"Font20",icon:"menu"}),selectedIcon:t.createElement(L.Z,{className:"Font20",icon:"menu"}),selected:S==="more",onPress:function(){var Ce=e.props.match.params;e.navigateTo("/mobile/app/"+Ce.appId),sessionStorage.setItem("detectionUrl",1)}})),t.createElement(Xa,{appId:c.id,debugRoles:o}))}},{key:"render",value:function(){var e=this.props,n=e.isAppLoading,o=e.appDetail;if(n)return t.createElement(me(),{justify:"center",align:"center",className:"h100"},t.createElement(kt(),{size:"large"}));var i=o.detail;return t.createElement(nt.Z,{projectId:i.projectId},this.renderBody())}}]),r}(t.Component);const vs=(0,Mt.$j)(function(d){var r=d.mobile,a=r.appDetail,e=r.isAppLoading,n=r.isQuitSuccess,o=r.batchOptVisible,i=r.debugRoles;return{appDetail:a,isAppLoading:e,isQuitSuccess:n,batchOptVisible:o,debugRoles:i}})(hs)},53566:(ue,Ze,u)=>{"use strict";u.r(Ze),u.d(Ze,{default:()=>ea});var nt=u(93567),ht=u(66814),Kt=u.n(ht),kt=u(91880),zt=u.n(kt),at=u(48388),kn=u.n(at),St=u(29914),me=u.n(St),rt=u(88239),_t=u(51097),ze=u.n(_t),D=u(64540),Tt=u(88106),ot=u(85105),L=u.n(ot),we=u(99663),Nt=u(22600),Dt=u(49135),wt=u(93196),X=u(67294),At=u(49611),xe=u.n(At),Pe=u(21),b=u(22010),F=u(50533),R=u(83848),P=u(15308),A=u(75915),qn=u(28968),Sn=u(3538),_n=u(25019),t=u(70039),Mt=u(40055),Lt=u(31742),T=u(76345),Tn=u(15577),Rt=u(93967),re=u.n(Rt),Nn=u(50043),it=u(68705),vt=u(97243),Pt=u.n(vt),Yt=u(55848),N=u(96486),ne=u.n(N),I,Dn=(0,Pe.Z)(I=(0,qn.Z)(I=function(Ye){(0,wt.default)(Qe,Ye);function Qe(ge){(0,we.default)(this,Qe);var B=(0,Dt.default)(this,(Qe.__proto__||L()(Qe)).call(this,ge));return B.sheetViewOpenRecord=function(U,fe){B.setState({previewRecordId:U,tempViewIdForRecordInfo:fe})},B.setCache=function(U){var fe=U.worksheetId,oe=U.viewId;safeLocalStorageSetItem("mobileViewSheet-"+fe,oe)},B.handleChangeView=function(U){var fe=B.props,oe=fe.match,be=fe.now,ke=oe.params;B.props.updateBase({viewId:U.viewId}),be?ne().includes([0,6],U.viewType)&&B.props.resetSheetView():window.mobileNavigateTo("/mobile/recordList/"+ke.appId+"/"+ke.groupId+"/"+ke.worksheetId+"/"+U.viewId,!0)},B.state={previewRecordId:void 0,tempViewIdForRecordInfo:void 0},B}return(0,Nt.default)(Qe,[{key:"componentDidMount",value:function(){var B=this.props.match||{},U=B.params;this.props.changeMobileGroupFilters([]),this.getApp(this.props),ne().get(this.props,["filters","visible"])&&this.props.updateFilters({visible:!1})}},{key:"getApp",value:function(B){var U=B.match.params;B.updateBase({appId:U.appId,groupId:U.groupId,worksheetId:U.worksheetId,viewId:U.viewId}),B.loadWorksheet()}},{key:"componentWillReceiveProps",value:function(B){var U=B.match.params,fe=this.props.match.params,oe=(ne().find(B.worksheetInfo.views,function(be){return be.viewId===U.viewId})||{}).viewType;U.viewId!==fe.viewId&&(this.props.updateBase({viewId:U.viewId}),ne().includes([0,6],oe)&&this.props.resetSheetView()),U.worksheetId!==fe.worksheetId&&(this.props.emptySheetRows(),this.props.emptySheetControls(),this.getApp(B))}},{key:"componentWillUnmount",value:function(){this.props.emptySheetControls()}},{key:"renderContent",value:function(){var B=this,U=this.props,fe=U.base,oe=U.worksheetInfo,be=U.sheetSwitchPermit,ke=U.workSheetLoading,Qt=U.match,st=U.currentSheetRows,Jt=U.filters,Ft=U.worksheetControls,V=U.calendarview,K=U.batchOptVisible,wn=U.appColor,An=U.history,Mn=U.appDetail,Ln=U.debugRoles,gt=fe.viewId,Xt=Mn.detail,Ae=Xt.appNaviStyle,Rn=Xt.debugRole,qt=oe.name,ye=oe.advancedSetting,ta=ye===void 0?{}:ye,lt=oe.views.filter(function(Ie){return ne().get(Ie,"advancedSetting.showhide")!=="hide"&&ne().get(Ie,"advancedSetting.showhide")!=="spc&happ"}),H=ne().find(lt,{viewId:gt})||!gt&&lt[0]||{},Je=Qt.params,en=gt?ne().findIndex(lt,{viewId:gt}):0,tn=V.calendarData,Pn=tn===void 0?{}:tn,Gt=(0,Tn.aq)(H),he=Gt.begindate,nn=he===void 0?"":he,an=Gt.enddate,Ot=an===void 0?"":an,Fn=Gt.calendarcids,je=Fn===void 0?"[]":Fn,rn=Pn.calendarInfo,on=rn===void 0?[]:rn,sn=H.viewControl,na=H.viewControls;try{je=JSON.parse(je)}catch(Ie){je=[]}je.length<=0&&(je=[{begin:nn,end:Ot}]);var aa=je[0].begin&&on.length>0&&(!on[0].startData||!on[0].startData.controlId),ra=ne().includes([1,2,4,5,7],H.viewType)?sn==="create"||sn&&ne().find(Ft,function(Ie){return Ie.controlId===sn})||!ne().isEmpty(na)||!(!je[0].begin||aa):!0,Gn=An.location.hash,ln=Gn.includes("hideTabBar")||!!sessionStorage.getItem("hideTabBar"),cn=(0,Lt.v)(T.RX.delete,be,H.viewId),On=(0,Lt.v)(T.RX.execute,be,H.viewId);if(ne().isEmpty(lt))return X.createElement("div",{className:"flexColumn h100 justifyContentCenter alignItemsCenter Font16 Gray_9e"},X.createElement("img",{style:{width:70},src:Pt()}),_l("\u89C6\u56FE\u5DF2\u9690\u85CF"));var ct=(Rn||{}).canDebug&&!ne().isEmpty(Ln),ce=ct?"60px":"20px",Ut=ct?"110px":"70px",Un=ct?"118px":"78px",Bn=ct?"170px":"130px",dn=H.viewType===6&&H.childType===1?(0,Tt.default)({paddingBottom:"calc(constant(safe-area-inset-bottom) - 20px)"},"paddingBottom","calc(env(safe-area-inset-bottom) - 20px)"):{};return X.createElement(X.Fragment,null,X.createElement("div",{className:re()("flexColumn h100",{portalWrapHeight:md.global.Account.isPortal&&Ae===2})},X.createElement(xe(),{title:qt}),!K&&X.createElement("div",{className:re()("viewTabs z-depth-1",{isPortal:md.global.Account.isPortal})},X.createElement(D.default,{tabBarInactiveTextColor:"#757575",tabs:lt,page:en===-1?999:en,onTabClick:function(Se){B.setCache({viewId:Se.viewId,worksheetId:Je.worksheetId}),B.handleChangeView(Se),B.props.changeMobileGroupFilters([]),safeLocalStorageSetItem("mobileViewSheet-"+Se.viewId,Se.viewType)},renderTab:function(Se){return X.createElement("span",{className:"tabName ellipsis bold"},Se.name)}})),X.createElement(_n.Z,{view:H,key:oe.worksheetId,routerParams:Je,appNaviStyle:Ae,hasDebugRoles:ct}),!K&&!(Ae===2&&location.href.includes("mobile/app")&&md.global.Account.isPortal)&&X.createElement(A.Z,{icon:Ae===2&&location.href.includes("mobile/app")?"home":"back",style:!ln&&Ae===2&&location.href.includes("mobile/app")?(0,rt.default)({bottom:H.childType===1&&H.viewType===6?140:ne().includes([1,3,4,6,21,8],H.viewType)||!ne().isEmpty(H.navGroup)&&H.navGroup.length?Ut:Bn},dn):(0,rt.default)({bottom:H.childType===1&&H.viewType===6?100:[1,3,4,6,21,8].includes(H.viewType)||!ne().isEmpty(H.navGroup)&&H.navGroup.length&&ne().includes([0],H.viewType)||!(cn||On)?ce:Un},dn),onClick:function(){if(!ln&&location.href.includes("mobile/app")){var Se=localStorage.getItem("currentGroupInfo")&&JSON.parse(localStorage.getItem("currentGroupInfo"));ne().isEmpty(Se)?window.mobileNavigateTo("/mobile/dashboard"):window.mobileNavigateTo("/mobile/groupAppList/"+Se.id+"/"+Se.groupType),localStorage.removeItem("currentNavWorksheetId")}else window.mobileNavigateTo("/mobile/app/"+Je.appId)}}),(cn||On)&&H.viewType===0&&!K&&ne().isEmpty(H.navGroup)&&X.createElement(Yt.R,{style:{bottom:Ae===2&&location.href.includes("mobile/app")?Ut:ce},onClick:function(){return B.props.changeBatchOptVisible(!0)}}),(0,Lt.v)(T.RX.createButtonSwitch,be)&&oe.allowAdd&&ra&&!K&&(H.viewType===6&&H.childType!==1||H.viewType!==6)?X.createElement(Yt.T,{entityName:oe.entityName,backgroundColor:wn,warpStyle:{bottom:!ln&&Ae===2?Ut:ce},btnClassName:re()({Right:[2,5,7].includes(H.viewType)&&st.length||[2].includes(H.viewType),mRight16:[2,5,7].includes(H.viewType)&&st.length||[2].includes(H.viewType)}),onClick:function(){(0,it.openAddRecord)({className:"full",worksheetInfo:oe,appId:Je.appId,worksheetId:oe.worksheetId,viewId:H.viewId,addType:2,entityName:oe.entityName,openRecord:B.sheetViewOpenRecord,onAdd:function(pn){ne().isEmpty(pn)||(H.viewType?B.props.addNewRecord(pn,H):B.props.unshiftSheetRow(pn))},showDraftsEntry:!0,sheetSwitchPermit:be})}}):null),X.createElement(t.RecordInfoModal,{className:"full",visible:!!this.state.previewRecordId,appId:Je.appId,worksheetId:oe.worksheetId,viewId:this.state.tempViewIdForRecordInfo,rowId:this.state.previewRecordId,onClose:function(){B.setState({previewRecordId:void 0,tempViewIdForRecordInfo:void 0})}}))}},{key:"render",value:function(){var B=this.props,U=B.base,fe=B.worksheetInfo,oe=B.workSheetLoading,be=B.appDetail,ke=be===void 0?{}:be,Qt=U.viewId,st=ke.detail,Jt=st===void 0?{}:st,Ft=ke.appName,V=Jt.webMobileDisplay;return V?X.createElement("div",{style:{background:"#fff",height:"100%"}},X.createElement("div",{className:"flex WordBreak overflow_ellipsis pLeft20 pRight20 Height80"},X.createElement("span",{className:"Gray Font24 LineHeight80 InlineBlock Bold"},Ft)),X.createElement(Nn.Z,{isNoPublish:V})):oe?X.createElement(zt(),{justify:"center",align:"center",className:"h100"},X.createElement(me(),{size:"large"})):fe.resultCode!==1?X.createElement(Sn.Z,{type:"sheet"}):X.createElement(nt.Z,{projectId:fe.projectId},this.renderContent())}}]),Qe}(X.Component))||I)||I;const ea=(0,F.$j)(function(Ye){return(0,rt.default)({},ne().pick(Ye.mobile,"base","worksheetInfo","sheetSwitchPermit","currentSheetRows","workSheetLoading","filters","worksheetControls","appColor","batchOptVisible","isCharge","appDetail","debugRoles"),{calendarview:Ye.sheet.calendarview})},function(Ye){return(0,b.DE)((0,rt.default)({},ne().pick(R,["updateBase","loadWorksheet","unshiftSheetRow","resetSheetView","emptySheetControls","emptySheetRows","updateFilters","changeMobileGroupFilters","changeBatchOptVisible"]),{addNewRecord:P.addNewRecord}),Ye)})(Dn)},12423:(ue,Ze,u)=>{"use strict";u.d(Ze,{Z:()=>X});var nt=u(42185),ht=u(85105),Kt=u.n(ht),kt=u(99663),zt=u(22600),at=u(49135),kn=u(93196),St=u(86735),me=u(67294),rt=u(96761),_t=u.n(rt),ze=u(19575),D=u.n(ze),Tt=u(59911),ot=u(15577),L=u(71893),we,Nt,Dt=(0,St.Z)([`
  position: fixed;
  bottom: 0;
  height: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px 20px;
  display: flex;
  width: 100%;
  background: #fff;
  left: 0;
  .cancle,
  .save {
    flex: 1;
    height: 36px;
    background: #ffffff;
    border-radius: 22px;
    opacity: 1;
    border: 1px solid #dddddd;
    color: #757575;
    border: 1px solid #dddddd;
    line-height: 36px;
    &.save {
      background: #2196f3;
      color: #fff;
      border: 1px solid #2196f3;
    }
  }
`],[`
  position: fixed;
  bottom: 0;
  height: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px 20px;
  display: flex;
  width: 100%;
  background: #fff;
  left: 0;
  .cancle,
  .save {
    flex: 1;
    height: 36px;
    background: #ffffff;
    border-radius: 22px;
    opacity: 1;
    border: 1px solid #dddddd;
    color: #757575;
    border: 1px solid #dddddd;
    line-height: 36px;
    &.save {
      background: #2196f3;
      color: #fff;
      border: 1px solid #2196f3;
    }
  }
`]),wt=L.ZP.div(Dt),X=(Nt=we=function(At){(0,kn.default)(xe,At);function xe(Pe){(0,kt.default)(this,xe);var b=(0,at.default)(this,(xe.__proto__||Kt()(xe)).call(this,Pe));return b.onSave=function(){var F=b.state.preview;if(!F){b.props.closeDialog();return}(0,ot.LP)([{bucket:4,ext:".png"}],b.props.defaultType?0:1).then(function(R){if(R.error)alert(R.error);else{var P=md.global.FileStoreConfig.uploadHost+"/putb64/-1/key/"+ze.Base64.encode(R[0].key),A=new XMLHttpRequest;A.onreadystatechange=function(){A.readyState==4&&JSON.parse(A.responseText).key&&(b.props.editAvatar?(b.props.editAvatar(R[0]),b.props.closeDialog()):Tt.Z.editAccountAvatar({fileName:JSON.parse(A.responseText).key.replace("UserAvatar/","")}).then(function(){b.props.updateAvator(),b.props.closeDialog()}))},A.open("POST",P,!0),A.setRequestHeader("Content-Type","application/octet-stream"),A.setRequestHeader("Authorization","UpToken "+R[0].uptoken),A.send(F.replace("data:image/png;base64,",""))}})},b.state={avatar:b.props.avatar,preview:null,src:""},b.onCrop=b.onCrop.bind(b),b.onClose=b.onClose.bind(b),b.onBeforeFileLoad=b.onBeforeFileLoad.bind(b),b}return(0,zt.default)(xe,[{key:"guid",value:function(){function b(){return((1+Math.random())*65536|0).toString(16).substring(1)}return b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b()}},{key:"onClose",value:function(){this.setState({preview:null})}},{key:"onCrop",value:function(b){this.setState({preview:b})}},{key:"onBeforeFileLoad",value:function(b){b.target.files[0].size>1024*1024*10&&(alert(_l("\u56FE\u7247\u8FC7\u5927"),2),b.target.value="")}},{key:"render",value:function(){var b=this,F=this.state,R=F.avatar,P=F.preview;return R?me.createElement("div",{className:"mTop25"},me.createElement("div",{className:"flexRow",style:{minHeight:200}},me.createElement(_t(),{label:_l("\u4E0A\u4F20\u56FE\u7247"),labelStyle:{display:"block",cursor:"pointer",fontWeight:700,fontSize:"16px"},width:200,height:200,imageWidth:200,onCrop:this.onCrop,onClose:this.onClose,onBeforeFileLoad:this.onBeforeFileLoad,src:this.state.src}),me.createElement("div",{className:"reviewBox"},me.createElement("span",{className:"Block Gray_9e mBottom16"},_l("\u9884\u89C8")),me.createElement("img",{src:P||R,style:{width:80,height:80,borderRadius:"50%"}}))),(0,ot.Q9)()?me.createElement(wt,{className:"actionBox"},me.createElement("div",{className:"cancle Font14 Bold mRight5 TxtCenter",onClick:function(){b.props.closeDialog()}},_l("\u53D6\u6D88")),me.createElement("div",{className:"save Hand Font14 Bold mLeft5 TxtCenter",onClick:function(){b.onSave()}},_l("\u786E\u8BA4"))):me.createElement("div",{className:"flexEnd"},me.createElement(nt.ZP,{type:"button",className:"ming Button Button--primary mTop20 saveBtn",onClick:this.onSave},_l("\u5B8C\u6210")))):null}}]),xe}(me.Component),we.isUploading=!1,Nt)},41815:ue=>{ue.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAADqBAMAAAAWpRm4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAAKdFJOUwA08I8Yba3JT92hk6VZAAAEmElEQVR42u2bwWsTURDGd5vdTeIpehFyqlhQcpKCUHKKQbDJKahUzCm30pyKiOKeAtpD96TQUsmpSW1r3l/pvt1ks5t94CHzk67kXUovX15mvpn5ZubFsjYHOSUQu9nCoF3Vw7Dr6piCdhpqQmGXlbqisIdKzTBPhqfGYAca+xnlyfB8pzwZngnlSQURJfIkRJQgxiaIYjfm2ABROnNotU15EiFKaQENECVIsKeYJ8MzojwZnoEwtp/C3qY8GZ7fstj9NPaNrCfT0MJEaWewZYniZ7EliWIfZbFlifLizQeOKJa1fzBmiBKde8nFCTGozk4OdWKRF5xBxBD765F4Rgm196Ke2fL3HipOffvyqTs5oROpjsRByJckw1uujyICMqk9WEPiKXVNYVcV16R1lbqksAOqH4lr/YDCJtNJA+st0ZCvgCFf1LDcYsNyGwzLYwq7SY034Erc4CqxDTSWRa+WZUDSp8T3Lwq7DoblpqIZu+4ihk5Rq86G3v+a3lKV4eX9Vi57y9B7fze85ae9lewtQu938yHJ41pG+Ehk79NkAnP7Nk1BAeHzMD0I7KUouL7wcTMDtVlNkoLxcHT6OTtHr0isR6Jrz/ZalnMSzxt/ygmI/tIQ9u5yK7IlICDszI7lNJkF1gVaYr0xe7T897UG/xjr44GASaYpPjjDuYkaAlmwkbl2yA89Jn2qabJ2IS7lZtuvonG3RKbayren2ioTCZoE+Yykv8q0KVAsTVmjL7T8M7VLFaGlpZEOgciy1TFiRCnmWgD71ty0ru9K872jRDAQwJ6ahzLrD9gc8xC6JGFva2zkWldkhWauuEORFVrfZFhHZoXWNQl4T2aFZlRmXZkVmmsKnjDJXAiUecfgNB3yJxJjRz/vzHaIK6K++3mD+9q/Epud8JLTVs4kAx1UIwFnrkTPgzB/tWQ6KX+FbfoZxERoNlhfKV+d+Iv0JbBLWdGmrz2T6lz186zpKFNydqzFxlXCKFfp/iTShzLYkWQ4j7/De7WwkAx2rHV0+2dHeTuWtYHMDHneTD35Ev/9sfhACWwdLWr1TZIUtjNM9YCjhC8yEw57+e5hJD49cefPTc5bqVQgNT1xDsbq4vm3v4jQOzeZMQVUIVdpVXBm3wVn9uQWmlx3jbl1lwM+PHG5l9noi/I6OFdvghQccxSsgDTxwCy4Ba5fwiJ/SWE3uBWJy/2mQZv7BjT3pIDmLoHmboPm9jlzu4ozdxtMVEMumej8egyapMax5BoMHKpU1jmT6O6eMkkZDJxmNPTByD0Byd3jyH1TQHIHxSR3FSQ3/BvRHa4Xpho/Z8w1UB5YzPq5SbjYsRU31ugorjfzuf7JA8nd59KUrbg01QbT1Jj15BknHShPVsCYrHMxqbMrJR3KoHQYctnVBUVgnROBWvFQnqyCddLn5LwHerLJKR5XcYon4IqCXj1TRaHNFQWdAalUUlUrTxNl44aqZR5Yy5pcBtzEzf8SNx0ubhwwbspc3ETX7nHXpuLG56RrQa/tKU6nDbkstbm2sZRB19ZTV6omlBT6W2psQx76Eru2ZR1y0JZj3e3zB3C8XFrWkxhMAAAAAElFTkSuQmCC"}}]);
