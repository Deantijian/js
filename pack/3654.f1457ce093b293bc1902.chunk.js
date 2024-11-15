(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[3654],{79873:(Nn,ge,i)=>{"use strict";var _e=i(64836),Ce=i(18698);Object.defineProperty(ge,"__esModule",{value:!0}),ge.default=void 0;var ie=_e(i(10434)),Be=je(i(67294)),A=i(75531),be=_e(i(64543)),We=_e(i(94055));function Fe(H){if(typeof WeakMap!="function")return null;var e=new WeakMap,sn=new WeakMap;return(Fe=function(ze){return ze?sn:e})(H)}function je(H,e){if(!e&&H&&H.__esModule)return H;if(H===null||Ce(H)!=="object"&&typeof H!="function")return{default:H};var sn=Fe(e);if(sn&&sn.has(H))return sn.get(H);var Ye={},ze=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Ae in H)if(Ae!=="default"&&Object.prototype.hasOwnProperty.call(H,Ae)){var Re=ze?Object.getOwnPropertyDescriptor(H,Ae):null;Re&&(Re.get||Re.set)?Object.defineProperty(Ye,Ae,Re):Ye[Ae]=H[Ae]}return Ye.default=H,sn&&sn.set(H,Ye),Ye}var f=Be.forwardRef(function(H,e){var sn=H.visible,Ye=(0,Be.useRef)(null),ze=(0,Be.useRef)(null);function Ae(){be.default.cancel(ze.current),ze.current=null}function Re(){ze.current=(0,be.default)(function(){var fn;(fn=Ye.current)===null||fn===void 0||fn.forcePopupAlign(),ze.current=null})}return Be.useEffect(function(){return sn?Re():Ae(),Ae},[sn,H.title]),Be.createElement(We.default,(0,ie.default)({ref:(0,A.composeRef)(Ye,e)},H))}),Xe=f;ge.default=Xe},36155:(Nn,ge,i)=>{"use strict";var _e,Ce=i(64836),ie=i(18698);_e={value:!0},ge.Z=void 0;var Be=Ce(i(18698)),A=Ce(i(38416)),be=Ce(i(10434)),We=Ce(i(27424)),Fe=sn(i(67294)),je=Ce(i(49899)),f=Ce(i(93967)),Xe=Ce(i(79873)),H=i(31929);function e(Re){if(typeof WeakMap!="function")return null;var fn=new WeakMap,de=new WeakMap;return(e=function(oe){return oe?de:fn})(Re)}function sn(Re,fn){if(!fn&&Re&&Re.__esModule)return Re;if(Re===null||ie(Re)!=="object"&&typeof Re!="function")return{default:Re};var de=e(fn);if(de&&de.has(Re))return de.get(Re);var Ne={},oe=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in Re)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(Re,ae)){var O=oe?Object.getOwnPropertyDescriptor(Re,ae):null;O&&(O.get||O.set)?Object.defineProperty(Ne,ae,O):Ne[ae]=Re[ae]}return Ne.default=Re,de&&de.set(Re,Ne),Ne}var Ye=function(Re,fn){var de={};for(var Ne in Re)Object.prototype.hasOwnProperty.call(Re,Ne)&&fn.indexOf(Ne)<0&&(de[Ne]=Re[Ne]);if(Re!=null&&typeof Object.getOwnPropertySymbols=="function")for(var oe=0,Ne=Object.getOwnPropertySymbols(Re);oe<Ne.length;oe++)fn.indexOf(Ne[oe])<0&&Object.prototype.propertyIsEnumerable.call(Re,Ne[oe])&&(de[Ne[oe]]=Re[Ne[oe]]);return de},ze=Fe.forwardRef(function(Re,fn){var de=Fe.useContext(H.ConfigContext),Ne=de.getPrefixCls,oe=de.direction,ae=de.getPopupContainer,O=Fe.useState({}),V=(0,We.default)(O,2),Te=V[0],te=V[1],D=function(ve,Pe){te(function(Ue){return(0,be.default)((0,be.default)({},Ue),(0,A.default)({},ve,Pe))})},M=function(ve,Pe){return ve||(Pe?oe==="rtl"?"left":"right":"top")},k=Re.prefixCls,ee=Re.tooltipPrefixCls,E=Re.range,pe=Re.className,me=Ye(Re,["prefixCls","tooltipPrefixCls","range","className"]),ye=Ne("slider",k),T=Ne("tooltip",ee),R=(0,f.default)(pe,(0,A.default)({},"".concat(ye,"-rtl"),oe==="rtl"));oe==="rtl"&&!me.vertical&&(me.reverse=!me.reverse);var U=Fe.useMemo(function(){return E?(0,Be.default)(E)==="object"?[!0,E.draggableTrack]:[!0,!1]:[!1]},[E]),I=(0,We.default)(U,2),Q=I[0],re=I[1],we=function(ve,Pe){var Ue=Pe.index,cn=Pe.dragging,vn=Ne(),an=Re.tipFormatter,mn=Re.tooltipVisible,Ke=Re.tooltipPlacement,He=Re.getTooltipPopupContainer,Me=Re.vertical,ln=an?Te[Ue]||cn:!1,Ve=mn||mn===void 0&&ln,Oe=(0,be.default)((0,be.default)({},ve.props),{onMouseEnter:function(){return D(Ue,!0)},onMouseLeave:function(){return D(Ue,!1)}});return Fe.createElement(Xe.default,{prefixCls:T,title:an?an(Pe.value):"",visible:Ve,placement:M(Ke,Me),transitionName:"".concat(vn,"-zoom-down"),key:Ue,overlayClassName:"".concat(ye,"-tooltip"),getPopupContainer:He||ae},Fe.cloneElement(ve,Oe))};return Fe.createElement(je.default,(0,be.default)({},me,{step:me.step,range:Q,draggableTrack:re,className:R,ref:fn,prefixCls:ye,handleRender:we}))});ze.displayName="Slider",ze.defaultProps={tipFormatter:function(fn){return typeof fn=="number"?fn.toString():""}};var Ae=ze;ge.Z=Ae},95350:(Nn,ge,i)=>{"use strict";i(17847),i(10266),i(97373)},49899:(Nn,ge,i)=>{"use strict";i.r(ge),i.d(ge,{default:()=>U});var _e=i(4942),Ce=i(89062),ie=i(93324),Be=i(71002),A=i(67294),be=i(93967),We=i.n(be),Fe=i(96774),je=i.n(Fe),f=i(21770),Xe=i(87462),H=i(45987),e=i(1413),sn=i(15105),Ye=A.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});const ze=Ye;function Ae(I,Q,re){return(I-Q)/(re-Q)}function Re(I,Q,re,we){var le=Ae(Q,re,we),ve={};switch(I){case"rtl":ve.right="".concat(le*100,"%"),ve.transform="translateX(50%)";break;case"btt":ve.bottom="".concat(le*100,"%"),ve.transform="translateY(50%)";break;case"ttb":ve.top="".concat(le*100,"%"),ve.transform="translateY(-50%)";break;default:ve.left="".concat(le*100,"%"),ve.transform="translateX(-50%)";break}return ve}function fn(I,Q){return Array.isArray(I)?I[Q]:I}var de=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],Ne=A.forwardRef(function(I,Q){var re,we,le=I.prefixCls,ve=I.value,Pe=I.valueIndex,Ue=I.onStartMove,cn=I.style,vn=I.render,an=I.dragging,mn=I.onOffsetChange,Ke=(0,H.Z)(I,de),He=A.useContext(ze),Me=He.min,ln=He.max,Ve=He.direction,Oe=He.disabled,Ge=He.range,Sn=He.tabIndex,Pn=He.ariaLabelForHandle,Bn=He.ariaLabelledByForHandle,st=He.ariaValueTextFormatterForHandle,Wn="".concat(le,"-handle"),Hn=function(Ee){Oe||Ue(Ee,Pe)},Jn=function(Ee){if(!Oe){var qn=null;switch(Ee.which||Ee.keyCode){case sn.Z.LEFT:qn=Ve==="ltr"||Ve==="btt"?-1:1;break;case sn.Z.RIGHT:qn=Ve==="ltr"||Ve==="btt"?1:-1;break;case sn.Z.UP:qn=Ve!=="ttb"?1:-1;break;case sn.Z.DOWN:qn=Ve!=="ttb"?-1:1;break;case sn.Z.HOME:qn="min";break;case sn.Z.END:qn="max";break;case sn.Z.PAGE_UP:qn=2;break;case sn.Z.PAGE_DOWN:qn=-2;break}qn!==null&&(Ee.preventDefault(),mn(qn,Pe))}},En=Re(Ve,ve,Me,ln),ct=A.createElement("div",(0,Xe.Z)({ref:Q,className:We()(Wn,(re={},(0,_e.Z)(re,"".concat(Wn,"-").concat(Pe+1),Ge),(0,_e.Z)(re,"".concat(Wn,"-dragging"),an),re)),style:(0,e.Z)((0,e.Z)({},En),cn),onMouseDown:Hn,onTouchStart:Hn,onKeyDown:Jn,tabIndex:Oe?null:fn(Sn,Pe),role:"slider","aria-valuemin":Me,"aria-valuemax":ln,"aria-valuenow":ve,"aria-disabled":Oe,"aria-label":fn(Pn,Pe),"aria-labelledby":fn(Bn,Pe),"aria-valuetext":(we=fn(st,Pe))===null||we===void 0?void 0:we(ve)},Ke));return vn&&(ct=vn(ct,{index:Pe,prefixCls:le,value:ve,dragging:an})),ct});const oe=Ne;var ae=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],O=A.forwardRef(function(I,Q){var re=I.prefixCls,we=I.style,le=I.onStartMove,ve=I.onOffsetChange,Pe=I.values,Ue=I.handleRender,cn=I.draggingIndex,vn=(0,H.Z)(I,ae),an=A.useRef({});return A.useImperativeHandle(Q,function(){return{focus:function(Ke){var He;(He=an.current[Ke])===null||He===void 0||He.focus()}}}),A.createElement(A.Fragment,null,Pe.map(function(mn,Ke){return A.createElement(oe,(0,Xe.Z)({ref:function(Me){Me?an.current[Ke]=Me:delete an.current[Ke]},dragging:cn===Ke,prefixCls:re,style:fn(we,Ke),key:Ke,value:mn,valueIndex:Ke,onStartMove:le,onOffsetChange:ve,render:Ue},vn))}))});const V=O;function Te(I){var Q="touches"in I?I.touches[0]:I;return{pageX:Q.pageX,pageY:Q.pageY}}function te(I,Q,re,we,le,ve,Pe,Ue,cn){var vn=A.useState(null),an=(0,ie.Z)(vn,2),mn=an[0],Ke=an[1],He=A.useState(-1),Me=(0,ie.Z)(He,2),ln=Me[0],Ve=Me[1],Oe=A.useState(re),Ge=(0,ie.Z)(Oe,2),Sn=Ge[0],Pn=Ge[1],Bn=A.useState(re),st=(0,ie.Z)(Bn,2),Wn=st[0],Hn=st[1],Jn=A.useRef(null),En=A.useRef(null);A.useEffect(function(){ln===-1&&Pn(re)},[re,ln]),A.useEffect(function(){return function(){document.removeEventListener("mousemove",Jn.current),document.removeEventListener("mouseup",En.current),document.removeEventListener("touchmove",Jn.current),document.removeEventListener("touchend",En.current)}},[]);var ct=function(et,_n){Sn.some(function(Qn,It){return Qn!==et[It]})&&(_n!==void 0&&Ke(_n),Pn(et),Pe(et))},xe=function(et,_n){if(et===-1){var Qn=Wn[0],It=Wn[Wn.length-1],Kt=we-Qn,Jt=le-It,Ln=_n*(le-we);Ln=Math.max(Ln,Kt),Ln=Math.min(Ln,Jt);var yt=ve(Qn+Ln);Ln=yt-Qn;var Lt=Wn.map(function(qt){return qt+Ln});ct(Lt)}else{var dt=(le-we)*_n,Zt=(0,Ce.Z)(Sn);Zt[et]=Wn[et];var gt=cn(Zt,dt,et,"dist");ct(gt.values,gt.value)}},Ee=A.useRef(xe);Ee.current=xe;var qn=function(et,_n){et.stopPropagation();var Qn=re[_n];Ve(_n),Ke(Qn),Hn(re);var It=Te(et),Kt=It.pageX,Jt=It.pageY,Ln=function(dt){dt.preventDefault();var Zt=Te(dt),gt=Zt.pageX,qt=Zt.pageY,St=gt-Kt,ca=qt-Jt,Xn=I.current.getBoundingClientRect(),$t=Xn.width,vt=Xn.height,Ze;switch(Q){case"btt":Ze=-ca/vt;break;case"ttb":Ze=ca/vt;break;case"rtl":Ze=-St/$t;break;default:Ze=St/$t}Ee.current(_n,Ze)},yt=function Lt(dt){dt.preventDefault(),document.removeEventListener("mouseup",Lt),document.removeEventListener("mousemove",Ln),document.removeEventListener("touchend",Lt),document.removeEventListener("touchmove",Ln),Jn.current=null,En.current=null,Ve(-1),Ue()};document.addEventListener("mouseup",yt),document.addEventListener("mousemove",Ln),document.addEventListener("touchend",yt),document.addEventListener("touchmove",Ln),Jn.current=Ln,En.current=yt},pt=A.useMemo(function(){var Et=(0,Ce.Z)(re).sort(function(_n,Qn){return _n-Qn}),et=(0,Ce.Z)(Sn).sort(function(_n,Qn){return _n-Qn});return Et.every(function(_n,Qn){return _n===et[Qn]})?Sn:re},[re,Sn]);return[ln,mn,pt,qn]}function D(I){var Q=I.prefixCls,re=I.style,we=I.start,le=I.end,ve=I.index,Pe=I.onStartMove,Ue=A.useContext(ze),cn=Ue.direction,vn=Ue.min,an=Ue.max,mn=Ue.disabled,Ke=Ue.range,He="".concat(Q,"-track"),Me=Ae(we,vn,an),ln=Ae(le,vn,an),Ve=function(Sn){!mn&&Pe&&Pe(Sn,-1)},Oe={};switch(cn){case"rtl":Oe.right="".concat(Me*100,"%"),Oe.width="".concat(ln*100-Me*100,"%");break;case"btt":Oe.bottom="".concat(Me*100,"%"),Oe.height="".concat(ln*100-Me*100,"%");break;case"ttb":Oe.top="".concat(Me*100,"%"),Oe.height="".concat(ln*100-Me*100,"%");break;default:Oe.left="".concat(Me*100,"%"),Oe.width="".concat(ln*100-Me*100,"%")}return A.createElement("div",{className:We()(He,Ke&&"".concat(He,"-").concat(ve+1)),style:(0,e.Z)((0,e.Z)({},Oe),re),onMouseDown:Ve,onTouchStart:Ve})}function M(I){var Q=I.prefixCls,re=I.style,we=I.values,le=I.startPoint,ve=I.onStartMove,Pe=A.useContext(ze),Ue=Pe.included,cn=Pe.range,vn=Pe.min,an=A.useMemo(function(){if(!cn){if(we.length===0)return[];var mn=le!=null?le:vn,Ke=we[0];return[{start:Math.min(mn,Ke),end:Math.max(mn,Ke)}]}for(var He=[],Me=0;Me<we.length-1;Me+=1)He.push({start:we[Me],end:we[Me+1]});return He},[we,cn,le,vn]);return Ue?an.map(function(mn,Ke){var He=mn.start,Me=mn.end;return A.createElement(D,{index:Ke,prefixCls:Q,style:fn(re,Ke),start:He,end:Me,key:Ke,onStartMove:ve})}):null}function k(I){var Q=I.prefixCls,re=I.style,we=I.children,le=I.value,ve=I.onClick,Pe=A.useContext(ze),Ue=Pe.min,cn=Pe.max,vn=Pe.direction,an=Pe.includedStart,mn=Pe.includedEnd,Ke=Pe.included,He="".concat(Q,"-text"),Me=Re(vn,le,Ue,cn);return A.createElement("span",{className:We()(He,(0,_e.Z)({},"".concat(He,"-active"),Ke&&an<=le&&le<=mn)),style:(0,e.Z)((0,e.Z)({},Me),re),onMouseDown:function(Ve){Ve.stopPropagation()},onClick:function(){ve(le)}},we)}function ee(I){var Q=I.prefixCls,re=I.marks,we=I.onClick,le="".concat(Q,"-mark");return re.length?A.createElement("div",{className:le},re.map(function(ve){var Pe=ve.value,Ue=ve.style,cn=ve.label;return A.createElement(k,{key:Pe,prefixCls:le,style:Ue,value:Pe,onClick:we},cn)})):null}function E(I){var Q=I.prefixCls,re=I.value,we=I.style,le=I.activeStyle,ve=A.useContext(ze),Pe=ve.min,Ue=ve.max,cn=ve.direction,vn=ve.included,an=ve.includedStart,mn=ve.includedEnd,Ke="".concat(Q,"-dot"),He=vn&&an<=re&&re<=mn,Me=(0,e.Z)((0,e.Z)({},Re(cn,re,Pe,Ue)),typeof we=="function"?we(re):we);return He&&(Me=(0,e.Z)((0,e.Z)({},Me),typeof le=="function"?le(re):le)),A.createElement("span",{className:We()(Ke,(0,_e.Z)({},"".concat(Ke,"-active"),He)),style:Me})}function pe(I){var Q=I.prefixCls,re=I.marks,we=I.dots,le=I.style,ve=I.activeStyle,Pe=A.useContext(ze),Ue=Pe.min,cn=Pe.max,vn=Pe.step,an=A.useMemo(function(){var mn=new Set;if(re.forEach(function(He){mn.add(He.value)}),we&&vn!==null)for(var Ke=Ue;Ke<=cn;)mn.add(Ke),Ke+=vn;return Array.from(mn)},[Ue,cn,vn,we,re]);return A.createElement("div",{className:"".concat(Q,"-step")},an.map(function(mn){return A.createElement(E,{prefixCls:Q,key:mn,value:mn,style:le,activeStyle:ve})}))}function me(I,Q,re,we,le,ve){var Pe=A.useCallback(function(He){var Me=isFinite(He)?He:I;return Me=Math.min(Q,He),Me=Math.max(I,Me),Me},[I,Q]),Ue=A.useCallback(function(He){if(re!==null){var Me=I+Math.round((Pe(He)-I)/re)*re,ln=function(Sn){return(String(Sn).split(".")[1]||"").length},Ve=Math.max(ln(re),ln(Q),ln(I)),Oe=Number(Me.toFixed(Ve));return I<=Oe&&Oe<=Q?Oe:null}return null},[re,I,Q,Pe]),cn=A.useCallback(function(He){var Me=Pe(He),ln=we.map(function(Ge){return Ge.value});re!==null&&ln.push(Ue(He)),ln.push(I,Q);var Ve=ln[0],Oe=Q-I;return ln.forEach(function(Ge){var Sn=Math.abs(Me-Ge);Sn<=Oe&&(Ve=Ge,Oe=Sn)}),Ve},[I,Q,we,re,Pe,Ue]),vn=function He(Me,ln,Ve){var Oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof ln=="number"){var Ge,Sn=Me[Ve],Pn=Sn+ln,Bn=[];we.forEach(function(En){Bn.push(En.value)}),Bn.push(I,Q),Bn.push(Ue(Sn));var st=ln>0?1:-1;Oe==="unit"?Bn.push(Ue(Sn+st*re)):Bn.push(Ue(Pn)),Bn=Bn.filter(function(En){return En!==null}).filter(function(En){return ln<0?En<=Sn:En>=Sn}),Oe==="unit"&&(Bn=Bn.filter(function(En){return En!==Sn}));var Wn=Oe==="unit"?Sn:Pn;Ge=Bn[0];var Hn=Math.abs(Ge-Wn);if(Bn.forEach(function(En){var ct=Math.abs(En-Wn);ct<Hn&&(Ge=En,Hn=ct)}),Ge===void 0)return ln<0?I:Q;if(Oe==="dist")return Ge;if(Math.abs(ln)>1){var Jn=(0,Ce.Z)(Me);return Jn[Ve]=Ge,He(Jn,ln-st,Ve,Oe)}return Ge}else{if(ln==="min")return I;if(ln==="max")return Q}},an=function(Me,ln,Ve){var Oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",Ge=Me[Ve],Sn=vn(Me,ln,Ve,Oe);return{value:Sn,changed:Sn!==Ge}},mn=function(Me){return ve===null&&Me===0||typeof ve=="number"&&Me<ve},Ke=function(Me,ln,Ve){var Oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",Ge=Me.map(cn),Sn=Ge[Ve],Pn=vn(Ge,ln,Ve,Oe);if(Ge[Ve]=Pn,le===!1){var Bn=ve||0;Ve>0&&Ge[Ve-1]!==Sn&&(Ge[Ve]=Math.max(Ge[Ve],Ge[Ve-1]+Bn)),Ve<Ge.length-1&&Ge[Ve+1]!==Sn&&(Ge[Ve]=Math.min(Ge[Ve],Ge[Ve+1]-Bn))}else if(typeof ve=="number"||ve===null){for(var st=Ve+1;st<Ge.length;st+=1)for(var Wn=!0;mn(Ge[st]-Ge[st-1])&&Wn;){var Hn=an(Ge,1,st);Ge[st]=Hn.value,Wn=Hn.changed}for(var Jn=Ve;Jn>0;Jn-=1)for(var En=!0;mn(Ge[Jn]-Ge[Jn-1])&&En;){var ct=an(Ge,-1,Jn-1);Ge[Jn-1]=ct.value,En=ct.changed}for(var xe=Ge.length-1;xe>0;xe-=1)for(var Ee=!0;mn(Ge[xe]-Ge[xe-1])&&Ee;){var qn=an(Ge,-1,xe-1);Ge[xe-1]=qn.value,Ee=qn.changed}for(var pt=0;pt<Ge.length-1;pt+=1)for(var Et=!0;mn(Ge[pt+1]-Ge[pt])&&Et;){var et=an(Ge,1,pt+1);Ge[pt+1]=et.value,Et=et.changed}}return{value:Ge[Ve],values:Ge}};return[cn,Ke]}var ye=i(80334),T=A.forwardRef(function(I,Q){var re,we=I.prefixCls,le=we===void 0?"rc-slider":we,ve=I.className,Pe=I.style,Ue=I.disabled,cn=Ue===void 0?!1:Ue,vn=I.autoFocus,an=I.onFocus,mn=I.onBlur,Ke=I.min,He=Ke===void 0?0:Ke,Me=I.max,ln=Me===void 0?100:Me,Ve=I.step,Oe=Ve===void 0?1:Ve,Ge=I.value,Sn=I.defaultValue,Pn=I.range,Bn=I.count,st=I.onChange,Wn=I.onBeforeChange,Hn=I.onAfterChange,Jn=I.allowCross,En=Jn===void 0?!0:Jn,ct=I.pushable,xe=ct===void 0?!1:ct,Ee=I.draggableTrack,qn=I.reverse,pt=I.vertical,Et=I.included,et=Et===void 0?!0:Et,_n=I.startPoint,Qn=I.trackStyle,It=I.handleStyle,Kt=I.railStyle,Jt=I.dotStyle,Ln=I.activeDotStyle,yt=I.marks,Lt=I.dots,dt=I.handleRender,Zt=I.tabIndex,gt=Zt===void 0?0:Zt,qt=I.ariaLabelForHandle,St=I.ariaLabelledByForHandle,ca=I.ariaValueTextFormatterForHandle,Xn=A.useRef(),$t=A.useRef(),vt=A.useMemo(function(){return pt?qn?"ttb":"btt":qn?"rtl":"ltr"},[qn,pt]),Ze=A.useMemo(function(){return isFinite(He)?He:0},[He]),Ct=A.useMemo(function(){return isFinite(ln)?ln:100},[ln]),ft=A.useMemo(function(){return Oe!==null&&Oe<=0?1:Oe},[Oe]),qa=A.useMemo(function(){return xe===!0?ft:xe>=0?xe:!1},[xe,ft]),nt=A.useMemo(function(){var Un=Object.keys(yt||{});return Un.map(function(xn){var dn=yt[xn],Vn={value:Number(xn)};return dn&&(0,Be.Z)(dn)==="object"&&!A.isValidElement(dn)&&("label"in dn||"style"in dn)?(Vn.style=dn.style,Vn.label=dn.label):Vn.label=dn,Vn}).filter(function(xn){var dn=xn.label;return dn||typeof dn=="number"}).sort(function(xn,dn){return xn.value-dn.value})},[yt]),er=me(Ze,Ct,ft,nt,En,qa),Vt=(0,ie.Z)(er,2),kt=Vt[0],tt=Vt[1],_a=(0,f.Z)(Sn,{value:Ge}),ea=(0,ie.Z)(_a,2),jt=ea[0],Na=ea[1],mt=A.useMemo(function(){var Un=jt==null?[]:Array.isArray(jt)?jt:[jt],xn=(0,ie.Z)(Un,1),dn=xn[0],Vn=dn===void 0?Ze:dn,Yn=jt===null?[]:[Vn];if(Pn){if(Yn=(0,Ce.Z)(Un),Bn||jt===void 0){var Ut=Bn>=0?Bn+1:2;for(Yn=Yn.slice(0,Ut);Yn.length<Ut;){var wt;Yn.push((wt=Yn[Yn.length-1])!==null&&wt!==void 0?wt:Ze)}}Yn.sort(function(Dt,aa){return Dt-aa})}return Yn.forEach(function(Dt,aa){Yn[aa]=kt(Dt)}),Yn},[jt,Pn,Ze,Bn,kt]),da=A.useRef(mt);da.current=mt;var Ot=function(xn){return Pn?xn:xn[0]},ga=function(xn){var dn=(0,Ce.Z)(xn).sort(function(Vn,Yn){return Vn-Yn});st&&!je()(dn,da.current)&&st(Ot(dn)),Na(dn)},Pa=function(xn){if(!cn){var dn=0,Vn=Ct-Ze;mt.forEach(function(Ut,wt){var Dt=Math.abs(xn-Ut);Dt<=Vn&&(Vn=Dt,dn=wt)});var Yn=(0,Ce.Z)(mt);Yn[dn]=xn,Pn&&!mt.length&&Bn===void 0&&Yn.push(xn),Wn==null||Wn(Ot(Yn)),ga(Yn),Hn==null||Hn(Ot(Yn))}},na=function(xn){xn.preventDefault();var dn=$t.current.getBoundingClientRect(),Vn=dn.width,Yn=dn.height,Ut=dn.left,wt=dn.top,Dt=dn.bottom,aa=dn.right,Za=xn.clientX,Ra=xn.clientY,ra;switch(vt){case"btt":ra=(Dt-Ra)/Yn;break;case"ttb":ra=(Ra-wt)/Yn;break;case"rtl":ra=(aa-Za)/Vn;break;default:ra=(Za-Ut)/Vn}var At=Ze+ra*(Ct-Ze);Pa(kt(At))},zt=A.useState(null),Ta=(0,ie.Z)(zt,2),va=Ta[0],Rt=Ta[1],za=function(xn,dn){if(!cn){var Vn=tt(mt,xn,dn);Wn==null||Wn(Ot(mt)),ga(Vn.values),Hn==null||Hn(Ot(Vn.values)),Rt(Vn.value)}};A.useEffect(function(){if(va!==null){var Un=mt.indexOf(va);Un>=0&&Xn.current.focus(Un)}Rt(null)},[va]);var Aa=A.useMemo(function(){return Ee&&ft===null?!1:Ee},[Ee,ft]),ua=function(){Hn==null||Hn(Ot(da.current))},Ga=te($t,vt,mt,Ze,Ct,kt,ga,ua,tt),Ft=(0,ie.Z)(Ga,4),N=Ft[0],pa=Ft[1],ha=Ft[2],Nt=Ft[3],ba=function(xn,dn){Nt(xn,dn),Wn==null||Wn(Ot(da.current))},xa=N!==-1;A.useEffect(function(){if(!xa){var Un=mt.lastIndexOf(pa);Xn.current.focus(Un)}},[xa]);var Ht=A.useMemo(function(){return(0,Ce.Z)(ha).sort(function(Un,xn){return Un-xn})},[ha]),Ma=A.useMemo(function(){return Pn?[Ht[0],Ht[Ht.length-1]]:[Ze,Ht[0]]},[Ht,Pn,Ze]),Fa=(0,ie.Z)(Ma,2),Wa=Fa[0],ya=Fa[1];A.useImperativeHandle(Q,function(){return{focus:function(){Xn.current.focus(0)},blur:function(){var xn=document,dn=xn.activeElement;$t.current.contains(dn)&&(dn==null||dn.blur())}}}),A.useEffect(function(){vn&&Xn.current.focus(0)},[]);var ta=A.useMemo(function(){return{min:Ze,max:Ct,direction:vt,disabled:cn,step:ft,included:et,includedStart:Wa,includedEnd:ya,range:Pn,tabIndex:gt,ariaLabelForHandle:qt,ariaLabelledByForHandle:St,ariaValueTextFormatterForHandle:ca}},[Ze,Ct,vt,cn,ft,et,Wa,ya,Pn,gt,qt,St,ca]);return A.createElement(ze.Provider,{value:ta},A.createElement("div",{ref:$t,className:We()(le,ve,(re={},(0,_e.Z)(re,"".concat(le,"-disabled"),cn),(0,_e.Z)(re,"".concat(le,"-vertical"),pt),(0,_e.Z)(re,"".concat(le,"-horizontal"),!pt),(0,_e.Z)(re,"".concat(le,"-with-marks"),nt.length),re)),style:Pe,onMouseDown:na},A.createElement("div",{className:"".concat(le,"-rail"),style:Kt}),A.createElement(M,{prefixCls:le,style:Qn,values:Ht,startPoint:_n,onStartMove:Aa?ba:null}),A.createElement(pe,{prefixCls:le,marks:nt,dots:Lt,style:Jt,activeStyle:Ln}),A.createElement(V,{ref:Xn,prefixCls:le,style:It,values:ha,draggingIndex:N,onStartMove:ba,onOffsetChange:za,onFocus:an,onBlur:mn,handleRender:dt}),A.createElement(ee,{prefixCls:le,marks:nt,onClick:Pa})))});const U=T},72307:(Nn,ge,i)=>{Nn=i.nmd(Nn);var _e=200,Ce="__lodash_hash_undefined__",ie=1,Be=2,A=9007199254740991,be="[object Arguments]",We="[object Array]",Fe="[object AsyncFunction]",je="[object Boolean]",f="[object Date]",Xe="[object Error]",H="[object Function]",e="[object GeneratorFunction]",sn="[object Map]",Ye="[object Number]",ze="[object Null]",Ae="[object Object]",Re="[object Promise]",fn="[object Proxy]",de="[object RegExp]",Ne="[object Set]",oe="[object String]",ae="[object Symbol]",O="[object Undefined]",V="[object WeakMap]",Te="[object ArrayBuffer]",te="[object DataView]",D="[object Float32Array]",M="[object Float64Array]",k="[object Int8Array]",ee="[object Int16Array]",E="[object Int32Array]",pe="[object Uint8Array]",me="[object Uint8ClampedArray]",ye="[object Uint16Array]",T="[object Uint32Array]",R=/[\\^$.*+?()[\]{}|]/g,U=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,Q={};Q[D]=Q[M]=Q[k]=Q[ee]=Q[E]=Q[pe]=Q[me]=Q[ye]=Q[T]=!0,Q[be]=Q[We]=Q[Te]=Q[je]=Q[te]=Q[f]=Q[Xe]=Q[H]=Q[sn]=Q[Ye]=Q[Ae]=Q[de]=Q[Ne]=Q[oe]=Q[V]=!1;var re=typeof i.g=="object"&&i.g&&i.g.Object===Object&&i.g,we=typeof self=="object"&&self&&self.Object===Object&&self,le=re||we||Function("return this")(),ve=ge&&!ge.nodeType&&ge,Pe=ve&&!0&&Nn&&!Nn.nodeType&&Nn,Ue=Pe&&Pe.exports===ve,cn=Ue&&re.process,vn=function(){try{return cn&&cn.binding&&cn.binding("util")}catch(d){}}(),an=vn&&vn.isTypedArray;function mn(d,Z){for(var se=-1,De=d==null?0:d.length,zn=0,hn=[];++se<De;){var An=d[se];Z(An,se,d)&&(hn[zn++]=An)}return hn}function Ke(d,Z){for(var se=-1,De=Z.length,zn=d.length;++se<De;)d[zn+se]=Z[se];return d}function He(d,Z){for(var se=-1,De=d==null?0:d.length;++se<De;)if(Z(d[se],se,d))return!0;return!1}function Me(d,Z){for(var se=-1,De=Array(d);++se<d;)De[se]=Z(se);return De}function ln(d){return function(Z){return d(Z)}}function Ve(d,Z){return d.has(Z)}function Oe(d,Z){return d==null?void 0:d[Z]}function Ge(d){var Z=-1,se=Array(d.size);return d.forEach(function(De,zn){se[++Z]=[zn,De]}),se}function Sn(d,Z){return function(se){return d(Z(se))}}function Pn(d){var Z=-1,se=Array(d.size);return d.forEach(function(De){se[++Z]=De}),se}var Bn=Array.prototype,st=Function.prototype,Wn=Object.prototype,Hn=le["__core-js_shared__"],Jn=st.toString,En=Wn.hasOwnProperty,ct=function(){var d=/[^.]+$/.exec(Hn&&Hn.keys&&Hn.keys.IE_PROTO||"");return d?"Symbol(src)_1."+d:""}(),xe=Wn.toString,Ee=RegExp("^"+Jn.call(En).replace(R,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qn=Ue?le.Buffer:void 0,pt=le.Symbol,Et=le.Uint8Array,et=Wn.propertyIsEnumerable,_n=Bn.splice,Qn=pt?pt.toStringTag:void 0,It=Object.getOwnPropertySymbols,Kt=qn?qn.isBuffer:void 0,Jt=Sn(Object.keys,Object),Ln=Vn(le,"DataView"),yt=Vn(le,"Map"),Lt=Vn(le,"Promise"),dt=Vn(le,"Set"),Zt=Vn(le,"WeakMap"),gt=Vn(Object,"create"),qt=At(Ln),St=At(yt),ca=At(Lt),Xn=At(dt),$t=At(Zt),vt=pt?pt.prototype:void 0,Ze=vt?vt.valueOf:void 0;function Ct(d){var Z=-1,se=d==null?0:d.length;for(this.clear();++Z<se;){var De=d[Z];this.set(De[0],De[1])}}function ft(){this.__data__=gt?gt(null):{},this.size=0}function qa(d){var Z=this.has(d)&&delete this.__data__[d];return this.size-=Z?1:0,Z}function nt(d){var Z=this.__data__;if(gt){var se=Z[d];return se===Ce?void 0:se}return En.call(Z,d)?Z[d]:void 0}function er(d){var Z=this.__data__;return gt?Z[d]!==void 0:En.call(Z,d)}function Vt(d,Z){var se=this.__data__;return this.size+=this.has(d)?0:1,se[d]=gt&&Z===void 0?Ce:Z,this}Ct.prototype.clear=ft,Ct.prototype.delete=qa,Ct.prototype.get=nt,Ct.prototype.has=er,Ct.prototype.set=Vt;function kt(d){var Z=-1,se=d==null?0:d.length;for(this.clear();++Z<se;){var De=d[Z];this.set(De[0],De[1])}}function tt(){this.__data__=[],this.size=0}function _a(d){var Z=this.__data__,se=pa(Z,d);if(se<0)return!1;var De=Z.length-1;return se==De?Z.pop():_n.call(Z,se,1),--this.size,!0}function ea(d){var Z=this.__data__,se=pa(Z,d);return se<0?void 0:Z[se][1]}function jt(d){return pa(this.__data__,d)>-1}function Na(d,Z){var se=this.__data__,De=pa(se,d);return De<0?(++this.size,se.push([d,Z])):se[De][1]=Z,this}kt.prototype.clear=tt,kt.prototype.delete=_a,kt.prototype.get=ea,kt.prototype.has=jt,kt.prototype.set=Na;function mt(d){var Z=-1,se=d==null?0:d.length;for(this.clear();++Z<se;){var De=d[Z];this.set(De[0],De[1])}}function da(){this.size=0,this.__data__={hash:new Ct,map:new(yt||kt),string:new Ct}}function Ot(d){var Z=dn(this,d).delete(d);return this.size-=Z?1:0,Z}function ga(d){return dn(this,d).get(d)}function Pa(d){return dn(this,d).has(d)}function na(d,Z){var se=dn(this,d),De=se.size;return se.set(d,Z),this.size+=se.size==De?0:1,this}mt.prototype.clear=da,mt.prototype.delete=Ot,mt.prototype.get=ga,mt.prototype.has=Pa,mt.prototype.set=na;function zt(d){var Z=-1,se=d==null?0:d.length;for(this.__data__=new mt;++Z<se;)this.add(d[Z])}function Ta(d){return this.__data__.set(d,Ce),this}function va(d){return this.__data__.has(d)}zt.prototype.add=zt.prototype.push=Ta,zt.prototype.has=va;function Rt(d){var Z=this.__data__=new kt(d);this.size=Z.size}function za(){this.__data__=new kt,this.size=0}function Aa(d){var Z=this.__data__,se=Z.delete(d);return this.size=Z.size,se}function ua(d){return this.__data__.get(d)}function Ga(d){return this.__data__.has(d)}function Ft(d,Z){var se=this.__data__;if(se instanceof kt){var De=se.__data__;if(!yt||De.length<_e-1)return De.push([d,Z]),this.size=++se.size,this;se=this.__data__=new mt(De)}return se.set(d,Z),this.size=se.size,this}Rt.prototype.clear=za,Rt.prototype.delete=Aa,Rt.prototype.get=ua,Rt.prototype.has=Ga,Rt.prototype.set=Ft;function N(d,Z){var se=La(d),De=!se&&ur(d),zn=!se&&!De&&$a(d),hn=!se&&!De&&!zn&&rr(d),An=se||De||zn||hn,ht=An?Me(d.length,String):[],Gn=ht.length;for(var Dn in d)(Z||En.call(d,Dn))&&!(An&&(Dn=="length"||zn&&(Dn=="offset"||Dn=="parent")||hn&&(Dn=="buffer"||Dn=="byteLength"||Dn=="byteOffset")||Dt(Dn,Gn)))&&ht.push(Dn);return ht}function pa(d,Z){for(var se=d.length;se--;)if(nr(d[se][0],Z))return se;return-1}function ha(d,Z,se){var De=Z(d);return La(d)?De:Ke(De,se(d))}function Nt(d){return d==null?d===void 0?O:ze:Qn&&Qn in Object(d)?Yn(d):ra(d)}function ba(d){return fa(d)&&Nt(d)==be}function xa(d,Z,se,De,zn){return d===Z?!0:d==null||Z==null||!fa(d)&&!fa(Z)?d!==d&&Z!==Z:Ht(d,Z,se,De,xa,zn)}function Ht(d,Z,se,De,zn,hn){var An=La(d),ht=La(Z),Gn=An?We:wt(d),Dn=ht?We:wt(Z);Gn=Gn==be?Ae:Gn,Dn=Dn==be?Ae:Dn;var Kn=Gn==Ae,Tn=Dn==Ae,at=Gn==Dn;if(at&&$a(d)){if(!$a(Z))return!1;An=!0,Kn=!1}if(at&&!Kn)return hn||(hn=new Rt),An||rr(d)?ya(d,Z,se,De,zn,hn):ta(d,Z,Gn,se,De,zn,hn);if(!(se&ie)){var Pt=Kn&&En.call(d,"__wrapped__"),Wt=Tn&&En.call(Z,"__wrapped__");if(Pt||Wt){var Yt=Pt?d.value():d,Gt=Wt?Z.value():Z;return hn||(hn=new Rt),zn(Yt,Gt,se,De,hn)}}return at?(hn||(hn=new Rt),Un(d,Z,se,De,zn,hn)):!1}function Ma(d){if(!Va(d)||Za(d))return!1;var Z=tr(d)?Ee:U;return Z.test(At(d))}function Fa(d){return fa(d)&&ar(d.length)&&!!Q[Nt(d)]}function Wa(d){if(!Ra(d))return Jt(d);var Z=[];for(var se in Object(d))En.call(d,se)&&se!="constructor"&&Z.push(se);return Z}function ya(d,Z,se,De,zn,hn){var An=se&ie,ht=d.length,Gn=Z.length;if(ht!=Gn&&!(An&&Gn>ht))return!1;var Dn=hn.get(d);if(Dn&&hn.get(Z))return Dn==Z;var Kn=-1,Tn=!0,at=se&Be?new zt:void 0;for(hn.set(d,Z),hn.set(Z,d);++Kn<ht;){var Pt=d[Kn],Wt=Z[Kn];if(De)var Yt=An?De(Wt,Pt,Kn,Z,d,hn):De(Pt,Wt,Kn,d,Z,hn);if(Yt!==void 0){if(Yt)continue;Tn=!1;break}if(at){if(!He(Z,function(Gt,oa){if(!Ve(at,oa)&&(Pt===Gt||zn(Pt,Gt,se,De,hn)))return at.push(oa)})){Tn=!1;break}}else if(!(Pt===Wt||zn(Pt,Wt,se,De,hn))){Tn=!1;break}}return hn.delete(d),hn.delete(Z),Tn}function ta(d,Z,se,De,zn,hn,An){switch(se){case te:if(d.byteLength!=Z.byteLength||d.byteOffset!=Z.byteOffset)return!1;d=d.buffer,Z=Z.buffer;case Te:return!(d.byteLength!=Z.byteLength||!hn(new Et(d),new Et(Z)));case je:case f:case Ye:return nr(+d,+Z);case Xe:return d.name==Z.name&&d.message==Z.message;case de:case oe:return d==Z+"";case sn:var ht=Ge;case Ne:var Gn=De&ie;if(ht||(ht=Pn),d.size!=Z.size&&!Gn)return!1;var Dn=An.get(d);if(Dn)return Dn==Z;De|=Be,An.set(d,Z);var Kn=ya(ht(d),ht(Z),De,zn,hn,An);return An.delete(d),Kn;case ae:if(Ze)return Ze.call(d)==Ze.call(Z)}return!1}function Un(d,Z,se,De,zn,hn){var An=se&ie,ht=xn(d),Gn=ht.length,Dn=xn(Z),Kn=Dn.length;if(Gn!=Kn&&!An)return!1;for(var Tn=Gn;Tn--;){var at=ht[Tn];if(!(An?at in Z:En.call(Z,at)))return!1}var Pt=hn.get(d);if(Pt&&hn.get(Z))return Pt==Z;var Wt=!0;hn.set(d,Z),hn.set(Z,d);for(var Yt=An;++Tn<Gn;){at=ht[Tn];var Gt=d[at],oa=Z[at];if(De)var or=An?De(oa,Gt,at,Z,d,hn):De(Gt,oa,at,d,Z,hn);if(!(or===void 0?Gt===oa||zn(Gt,oa,se,De,hn):or)){Wt=!1;break}Yt||(Yt=at=="constructor")}if(Wt&&!Yt){var ja=d.constructor,Ca=Z.constructor;ja!=Ca&&"constructor"in d&&"constructor"in Z&&!(typeof ja=="function"&&ja instanceof ja&&typeof Ca=="function"&&Ca instanceof Ca)&&(Wt=!1)}return hn.delete(d),hn.delete(Z),Wt}function xn(d){return ha(d,mr,Ut)}function dn(d,Z){var se=d.__data__;return aa(Z)?se[typeof Z=="string"?"string":"hash"]:se.map}function Vn(d,Z){var se=Oe(d,Z);return Ma(se)?se:void 0}function Yn(d){var Z=En.call(d,Qn),se=d[Qn];try{d[Qn]=void 0;var De=!0}catch(hn){}var zn=xe.call(d);return De&&(Z?d[Qn]=se:delete d[Qn]),zn}var Ut=It?function(d){return d==null?[]:(d=Object(d),mn(It(d),function(Z){return et.call(d,Z)}))}:gr,wt=Nt;(Ln&&wt(new Ln(new ArrayBuffer(1)))!=te||yt&&wt(new yt)!=sn||Lt&&wt(Lt.resolve())!=Re||dt&&wt(new dt)!=Ne||Zt&&wt(new Zt)!=V)&&(wt=function(d){var Z=Nt(d),se=Z==Ae?d.constructor:void 0,De=se?At(se):"";if(De)switch(De){case qt:return te;case St:return sn;case ca:return Re;case Xn:return Ne;case $t:return V}return Z});function Dt(d,Z){return Z=Z==null?A:Z,!!Z&&(typeof d=="number"||I.test(d))&&d>-1&&d%1==0&&d<Z}function aa(d){var Z=typeof d;return Z=="string"||Z=="number"||Z=="symbol"||Z=="boolean"?d!=="__proto__":d===null}function Za(d){return!!ct&&ct in d}function Ra(d){var Z=d&&d.constructor,se=typeof Z=="function"&&Z.prototype||Wn;return d===se}function ra(d){return xe.call(d)}function At(d){if(d!=null){try{return Jn.call(d)}catch(Z){}try{return d+""}catch(Z){}}return""}function nr(d,Z){return d===Z||d!==d&&Z!==Z}var ur=ba(function(){return arguments}())?ba:function(d){return fa(d)&&En.call(d,"callee")&&!et.call(d,"callee")},La=Array.isArray;function pr(d){return d!=null&&ar(d.length)&&!tr(d)}var $a=Kt||vr;function fr(d,Z){return xa(d,Z)}function tr(d){if(!Va(d))return!1;var Z=Nt(d);return Z==H||Z==e||Z==Fe||Z==fn}function ar(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=A}function Va(d){var Z=typeof d;return d!=null&&(Z=="object"||Z=="function")}function fa(d){return d!=null&&typeof d=="object"}var rr=an?ln(an):Fa;function mr(d){return pr(d)?N(d):Wa(d)}function gr(){return[]}function vr(){return!1}Nn.exports=fr},10266:(Nn,ge,i)=>{"use strict";i.r(ge)},75966:(Nn,ge,i)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0}),ge.default=void 0;var _e=Fe(i(67294)),Ce=Fe(i(73935)),ie=Fe(i(45697)),Be=i(61193),A=i(1706),be=i(67493),We=Fe(i(93967));function Fe(oe){return oe&&oe.__esModule?oe:{default:oe}}function je(oe){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(O){return typeof O}:je=function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},je(oe)}function f(oe,ae){var O=Object.keys(oe);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(oe);ae&&(V=V.filter(function(Te){return Object.getOwnPropertyDescriptor(oe,Te).enumerable})),O.push.apply(O,V)}return O}function Xe(oe){for(var ae=1;ae<arguments.length;ae++){var O=arguments[ae]!=null?arguments[ae]:{};ae%2?f(O,!0).forEach(function(V){de(oe,V,O[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(oe,Object.getOwnPropertyDescriptors(O)):f(O).forEach(function(V){Object.defineProperty(oe,V,Object.getOwnPropertyDescriptor(O,V))})}return oe}function H(oe,ae){if(!(oe instanceof ae))throw new TypeError("Cannot call a class as a function")}function e(oe,ae){for(var O=0;O<ae.length;O++){var V=ae[O];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(oe,V.key,V)}}function sn(oe,ae,O){return ae&&e(oe.prototype,ae),O&&e(oe,O),oe}function Ye(oe,ae){return ae&&(je(ae)==="object"||typeof ae=="function")?ae:Ae(oe)}function ze(oe){return ze=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)},ze(oe)}function Ae(oe){if(oe===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return oe}function Re(oe,ae){if(typeof ae!="function"&&ae!==null)throw new TypeError("Super expression must either be null or a function");oe.prototype=Object.create(ae&&ae.prototype,{constructor:{value:oe,writable:!0,configurable:!0}}),ae&&fn(oe,ae)}function fn(oe,ae){return fn=Object.setPrototypeOf||function(V,Te){return V.__proto__=Te,V},fn(oe,ae)}function de(oe,ae,O){return ae in oe?Object.defineProperty(oe,ae,{value:O,enumerable:!0,configurable:!0,writable:!0}):oe[ae]=O,oe}var Ne=function(oe){Re(ae,oe);function ae(){var O,V;H(this,ae);for(var Te=arguments.length,te=new Array(Te),D=0;D<Te;D++)te[D]=arguments[D];return V=Ye(this,(O=ze(ae)).call.apply(O,[this].concat(te))),de(Ae(V),"state",{resizing:null,dragging:null,className:""}),de(Ae(V),"currentNode",void 0),de(Ae(V),"onDragStart",function(M,k){var ee=k.node;if(V.props.onDragStart){var E={top:0,left:0},pe=ee.offsetParent;if(pe){var me=pe.getBoundingClientRect(),ye=ee.getBoundingClientRect(),T=ye.left/V.props.transformScale,R=me.left/V.props.transformScale,U=ye.top/V.props.transformScale,I=me.top/V.props.transformScale;E.left=T-R+pe.scrollLeft,E.top=U-I+pe.scrollTop,V.setState({dragging:E});var Q=V.calcXY(E.top,E.left),re=Q.x,we=Q.y;return V.props.onDragStart&&V.props.onDragStart.call(Ae(V),V.props.i,re,we,{e:M,node:ee,newPosition:E})}}}),de(Ae(V),"onDrag",function(M,k){var ee=k.node,E=k.deltaX,pe=k.deltaY;if(V.props.onDrag){var me={top:0,left:0};if(!V.state.dragging)throw new Error("onDrag called before onDragStart.");me.left=V.state.dragging.left+E,me.top=V.state.dragging.top+pe,V.setState({dragging:me});var ye=V.calcXY(me.top,me.left),T=ye.x,R=ye.y;return V.props.onDrag&&V.props.onDrag.call(Ae(V),V.props.i,T,R,{e:M,node:ee,newPosition:me})}}),de(Ae(V),"onDragStop",function(M,k){var ee=k.node;if(V.props.onDragStop){var E={top:0,left:0};if(!V.state.dragging)throw new Error("onDragEnd called before onDragStart.");E.left=V.state.dragging.left,E.top=V.state.dragging.top,V.setState({dragging:null});var pe=V.calcXY(E.top,E.left),me=pe.x,ye=pe.y;return V.props.onDragStop&&V.props.onDragStop.call(Ae(V),V.props.i,me,ye,{e:M,node:ee,newPosition:E})}}),de(Ae(V),"onResizeStop",function(M,k){V.onResizeHandler(M,k,"onResizeStop")}),de(Ae(V),"onResizeStart",function(M,k){V.onResizeHandler(M,k,"onResizeStart")}),de(Ae(V),"onResize",function(M,k){V.onResizeHandler(M,k,"onResize")}),V}return sn(ae,[{key:"componentDidUpdate",value:function(V){this.props.droppingPosition&&V.droppingPosition&&this.moveDroppingItem(V)}},{key:"moveDroppingItem",value:function(V){var Te=this.props.droppingPosition,te=this.state.dragging;if(!(!Te||!V.droppingPosition)){this.currentNode||(this.currentNode=Ce.default.findDOMNode(this));var D=te&&Te.x!==V.droppingPosition.x||Te.y!==V.droppingPosition.y;if(!te)this.onDragStart(Te.e,{node:this.currentNode,deltaX:Te.x,deltaY:Te.y});else if(D){var M=Te.x-te.left,k=Te.y-te.top;this.onDrag(Te.e,{node:this.currentNode,deltaX:M,deltaY:k})}}}},{key:"calcColWidth",value:function(){var V=this.props,Te=V.margin,te=V.containerPadding,D=V.containerWidth,M=V.cols;return(D-Te[0]*(M-1)-te[0]*2)/M}},{key:"calcPosition",value:function(V,Te,te,D,M){var k=this.props,ee=k.margin,E=k.containerPadding,pe=k.rowHeight,me=this.calcColWidth(),ye={};return M&&M.resizing?(ye.width=Math.round(M.resizing.width),ye.height=Math.round(M.resizing.height)):(ye.width=te===1/0?te:Math.round(me*te+Math.max(0,te-1)*ee[0]),ye.height=D===1/0?D:Math.round(pe*D+Math.max(0,D-1)*ee[1])),M&&M.dragging?(ye.top=Math.round(M.dragging.top),ye.left=Math.round(M.dragging.left)):(ye.top=Math.round((pe+ee[1])*Te+E[1]),ye.left=Math.round((me+ee[0])*V+E[0])),ye}},{key:"calcXY",value:function(V,Te){var te=this.props,D=te.margin,M=te.cols,k=te.rowHeight,ee=te.w,E=te.h,pe=te.maxRows,me=this.calcColWidth(),ye=Math.round((Te-D[0])/(me+D[0])),T=Math.round((V-D[1])/(k+D[1]));return ye=Math.max(Math.min(ye,M-ee),0),T=Math.max(Math.min(T,pe-E),0),{x:ye,y:T}}},{key:"calcWH",value:function(V){var Te=V.height,te=V.width,D=this.props,M=D.margin,k=D.maxRows,ee=D.cols,E=D.rowHeight,pe=D.x,me=D.y,ye=this.calcColWidth(),T=Math.round((te+M[0])/(ye+M[0])),R=Math.round((Te+M[1])/(E+M[1]));return T=Math.max(Math.min(T,ee-pe),0),R=Math.max(Math.min(R,k-me),0),{w:T,h:R}}},{key:"createStyle",value:function(V){var Te=this.props,te=Te.usePercentages,D=Te.containerWidth,M=Te.useCSSTransforms,k;return M?k=(0,be.setTransform)(V):(k=(0,be.setTopLeft)(V),te&&(k.left=(0,be.perc)(V.left/D),k.width=(0,be.perc)(V.width/D))),k}},{key:"mixinDraggable",value:function(V){return _e.default.createElement(Be.DraggableCore,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,handle:this.props.handle,cancel:".react-resizable-handle"+(this.props.cancel?","+this.props.cancel:""),scale:this.props.transformScale},V)}},{key:"mixinResizable",value:function(V,Te){var te=this.props,D=te.cols,M=te.x,k=te.minW,ee=te.minH,E=te.maxW,pe=te.maxH,me=this.calcPosition(0,0,D-M,0).width,ye=this.calcPosition(0,0,k,ee),T=this.calcPosition(0,0,E,pe),R=[ye.width,ye.height],U=[Math.min(T.width,me),Math.min(T.height,1/0)];return _e.default.createElement(A.Resizable,{width:Te.width,height:Te.height,minConstraints:R,maxConstraints:U,onResizeStop:this.onResizeStop,onResizeStart:this.onResizeStart,onResize:this.onResize},V)}},{key:"onResizeHandler",value:function(V,Te,te){var D=Te.node,M=Te.size,k=this.props[te];if(k){var ee=this.props,E=ee.cols,pe=ee.x,me=ee.i,ye=ee.maxW,T=ee.minW,R=ee.maxH,U=ee.minH,I=this.calcWH(M),Q=I.w,re=I.h;Q=Math.min(Q,E-pe),Q=Math.max(Q,1),Q=Math.max(Math.min(Q,ye),T),re=Math.max(Math.min(re,R),U),this.setState({resizing:te==="onResizeStop"?null:M}),k.call(this,me,Q,re,{e:V,node:D,size:M})}}},{key:"render",value:function(){var V=this.props,Te=V.x,te=V.y,D=V.w,M=V.h,k=V.isDraggable,ee=V.isResizable,E=V.droppingPosition,pe=V.useCSSTransforms,me=this.calcPosition(Te,te,D,M,this.state),ye=_e.default.Children.only(this.props.children),T=_e.default.cloneElement(ye,{className:(0,We.default)("react-grid-item",ye.props.className,this.props.className,{static:this.props.static,resizing:!!this.state.resizing,"react-draggable":k,"react-draggable-dragging":!!this.state.dragging,dropping:!!E,cssTransforms:pe}),style:Xe({},this.props.style,{},ye.props.style,{},this.createStyle(me))});return ee&&(T=this.mixinResizable(T,me)),k&&(T=this.mixinDraggable(T)),T}}]),ae}(_e.default.Component);ge.default=Ne,de(Ne,"propTypes",{children:ie.default.element,cols:ie.default.number.isRequired,containerWidth:ie.default.number.isRequired,rowHeight:ie.default.number.isRequired,margin:ie.default.array.isRequired,maxRows:ie.default.number.isRequired,containerPadding:ie.default.array.isRequired,x:ie.default.number.isRequired,y:ie.default.number.isRequired,w:ie.default.number.isRequired,h:ie.default.number.isRequired,minW:function(ae,O){var V=ae[O];if(typeof V!="number")return new Error("minWidth not Number");if(V>ae.w||V>ae.maxW)return new Error("minWidth larger than item width/maxWidth")},maxW:function(ae,O){var V=ae[O];if(typeof V!="number")return new Error("maxWidth not Number");if(V<ae.w||V<ae.minW)return new Error("maxWidth smaller than item width/minWidth")},minH:function(ae,O){var V=ae[O];if(typeof V!="number")return new Error("minHeight not Number");if(V>ae.h||V>ae.maxH)return new Error("minHeight larger than item height/maxHeight")},maxH:function(ae,O){var V=ae[O];if(typeof V!="number")return new Error("maxHeight not Number");if(V<ae.h||V<ae.minH)return new Error("maxHeight smaller than item height/minHeight")},i:ie.default.string.isRequired,onDragStop:ie.default.func,onDragStart:ie.default.func,onDrag:ie.default.func,onResizeStop:ie.default.func,onResizeStart:ie.default.func,onResize:ie.default.func,isDraggable:ie.default.bool.isRequired,isResizable:ie.default.bool.isRequired,static:ie.default.bool,useCSSTransforms:ie.default.bool.isRequired,transformScale:ie.default.number,className:ie.default.string,handle:ie.default.string,cancel:ie.default.string,droppingPosition:ie.default.shape({e:ie.default.object.isRequired,x:ie.default.number.isRequired,y:ie.default.number.isRequired})}),de(Ne,"defaultProps",{className:"",cancel:"",handle:"",minH:1,minW:1,maxH:1/0,maxW:1/0,transformScale:1})},49580:(Nn,ge,i)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0}),ge.default=void 0;var _e=We(i(67294)),Ce=We(i(45697)),ie=We(i(72307)),Be=We(i(93967)),A=i(67493),be=We(i(75966));function We(D){return D&&D.__esModule?D:{default:D}}function Fe(D){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fe=function(k){return typeof k}:Fe=function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},Fe(D)}function je(D,M){var k=Object.keys(D);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(D);M&&(ee=ee.filter(function(E){return Object.getOwnPropertyDescriptor(D,E).enumerable})),k.push.apply(k,ee)}return k}function f(D){for(var M=1;M<arguments.length;M++){var k=arguments[M]!=null?arguments[M]:{};M%2?je(k,!0).forEach(function(ee){ae(D,ee,k[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(k)):je(k).forEach(function(ee){Object.defineProperty(D,ee,Object.getOwnPropertyDescriptor(k,ee))})}return D}function Xe(D){return sn(D)||e(D)||H()}function H(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(D){if(Symbol.iterator in Object(D)||Object.prototype.toString.call(D)==="[object Arguments]")return Array.from(D)}function sn(D){if(Array.isArray(D)){for(var M=0,k=new Array(D.length);M<D.length;M++)k[M]=D[M];return k}}function Ye(D,M){if(!(D instanceof M))throw new TypeError("Cannot call a class as a function")}function ze(D,M){for(var k=0;k<M.length;k++){var ee=M[k];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(D,ee.key,ee)}}function Ae(D,M,k){return M&&ze(D.prototype,M),k&&ze(D,k),D}function Re(D,M){return M&&(Fe(M)==="object"||typeof M=="function")?M:de(D)}function fn(D){return fn=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)},fn(D)}function de(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function Ne(D,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(M&&M.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),M&&oe(D,M)}function oe(D,M){return oe=Object.setPrototypeOf||function(ee,E){return ee.__proto__=E,ee},oe(D,M)}function ae(D,M,k){return M in D?Object.defineProperty(D,M,{value:k,enumerable:!0,configurable:!0,writable:!0}):D[M]=k,D}var O=function(M){var k=M||{},ee=k.verticalCompact,E=k.compactType;return ee===!1?null:E},V="react-grid-layout",Te=!1;try{Te=navigator.userAgent.toLowerCase().includes("firefox")}catch(D){}var te=function(D){Ne(M,D);function M(k,ee){var E;return Ye(this,M),E=Re(this,fn(M).call(this,k,ee)),ae(de(E),"state",{activeDrag:null,layout:(0,A.synchronizeLayoutWithChildren)(E.props.layout,E.props.children,E.props.cols,O(E.props)),mounted:!1,oldDragItem:null,oldLayout:null,oldResizeItem:null,droppingDOMNode:null,children:[]}),ae(de(E),"dragEnterCounter",0),ae(de(E),"onDragOver",function(pe){if(Te&&!pe.nativeEvent.target.className.includes(V))return!1;var me=E.props.droppingItem,ye=E.state.layout,T=pe.nativeEvent,R=T.layerX,U=T.layerY,I={x:R,y:U,e:pe};if(!E.state.droppingDOMNode)E.setState({droppingDOMNode:_e.default.createElement("div",{key:me.i}),droppingPosition:I,layout:[].concat(Xe(ye),[f({},me,{x:0,y:0,static:!1,isDraggable:!0})])});else if(E.state.droppingPosition){var Q=E.state.droppingPosition.x!=R||E.state.droppingPosition.y!=U;Q&&E.setState({droppingPosition:I})}pe.stopPropagation(),pe.preventDefault()}),ae(de(E),"removeDroppingPlaceholder",function(){var pe=E.props,me=pe.droppingItem,ye=pe.cols,T=E.state.layout,R=(0,A.compact)(T.filter(function(U){return U.i!==me.i}),O(E.props),ye);E.setState({layout:R,droppingDOMNode:null,activeDrag:null,droppingPosition:void 0})}),ae(de(E),"onDragLeave",function(){E.dragEnterCounter--,E.dragEnterCounter===0&&E.removeDroppingPlaceholder()}),ae(de(E),"onDragEnter",function(){E.dragEnterCounter++}),ae(de(E),"onDrop",function(){var pe=E.props.droppingItem,me=E.state.layout,ye=me.find(function(Q){return Q.i===pe.i})||{},T=ye.x,R=ye.y,U=ye.w,I=ye.h;E.dragEnterCounter=0,E.removeDroppingPlaceholder(),E.props.onDrop({x:T,y:R,w:U,h:I})}),(0,A.autoBindHandlers)(de(E),["onDragStart","onDrag","onDragStop","onResizeStart","onResize","onResizeStop"]),E}return Ae(M,[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.onLayoutMaybeChanged(this.state.layout,this.props.layout)}},{key:"componentDidUpdate",value:function(ee,E){if(!this.state.activeDrag){var pe=this.state.layout,me=E.layout;this.onLayoutMaybeChanged(pe,me)}}},{key:"containerHeight",value:function(){if(this.props.autoSize){var ee=(0,A.bottom)(this.state.layout),E=this.props.containerPadding?this.props.containerPadding[1]:this.props.margin[1];return ee*this.props.rowHeight+(ee-1)*this.props.margin[1]+E*2+"px"}}},{key:"onDragStart",value:function(ee,E,pe,me){var ye=me.e,T=me.node,R=this.state.layout,U=(0,A.getLayoutItem)(R,ee);if(U)return this.setState({oldDragItem:(0,A.cloneLayoutItem)(U),oldLayout:this.state.layout}),this.props.onDragStart(R,U,U,null,ye,T)}},{key:"onDrag",value:function(ee,E,pe,me){var ye=me.e,T=me.node,R=this.state.oldDragItem,U=this.state.layout,I=this.props.cols,Q=(0,A.getLayoutItem)(U,ee);if(Q){var re={w:Q.w,h:Q.h,x:Q.x,y:Q.y,placeholder:!0,i:ee},we=!0;U=(0,A.moveElement)(U,Q,E,pe,we,this.props.preventCollision,O(this.props),I),this.props.onDrag(U,R,Q,re,ye,T),this.setState({layout:(0,A.compact)(U,O(this.props),I),activeDrag:re})}}},{key:"onDragStop",value:function(ee,E,pe,me){var ye=me.e,T=me.node,R=this.state.oldDragItem,U=this.state.layout,I=this.props,Q=I.cols,re=I.preventCollision,we=(0,A.getLayoutItem)(U,ee);if(we){var le=!0;U=(0,A.moveElement)(U,we,E,pe,le,re,O(this.props),Q),this.state.activeDrag&&this.props.onDragStop(U,R,we,null,ye,T);var ve=(0,A.compact)(U,O(this.props),Q),Pe=this.state.oldLayout;this.setState({activeDrag:null,layout:ve,oldDragItem:null,oldLayout:null}),this.onLayoutMaybeChanged(ve,Pe)}}},{key:"onLayoutMaybeChanged",value:function(ee,E){E||(E=this.state.layout),(0,ie.default)(E,ee)||this.props.onLayoutChange(ee)}},{key:"onResizeStart",value:function(ee,E,pe,me){var ye=me.e,T=me.node,R=this.state.layout,U=(0,A.getLayoutItem)(R,ee);U&&(this.setState({oldResizeItem:(0,A.cloneLayoutItem)(U),oldLayout:this.state.layout}),this.props.onResizeStart(R,U,U,null,ye,T))}},{key:"onResize",value:function(ee,E,pe,me){var ye=me.e,T=me.node,R=this.state,U=R.layout,I=R.oldResizeItem,Q=this.props,re=Q.cols,we=Q.preventCollision,le=(0,A.getLayoutItem)(U,ee);if(le){var ve;if(we){var Pe=(0,A.getAllCollisions)(U,f({},le,{w:E,h:pe})).filter(function(an){return an.i!==le.i});if(ve=Pe.length>0,ve){var Ue=1/0,cn=1/0;Pe.forEach(function(an){an.x>le.x&&(Ue=Math.min(Ue,an.x)),an.y>le.y&&(cn=Math.min(cn,an.y))}),Number.isFinite(Ue)&&(le.w=Ue-le.x),Number.isFinite(cn)&&(le.h=cn-le.y)}}ve||(le.w=E,le.h=pe);var vn={w:le.w,h:le.h,x:le.x,y:le.y,static:!0,i:ee};this.props.onResize(U,I,le,vn,ye,T),this.setState({layout:(0,A.compact)(U,O(this.props),re),activeDrag:vn})}}},{key:"onResizeStop",value:function(ee,E,pe,me){var ye=me.e,T=me.node,R=this.state,U=R.layout,I=R.oldResizeItem,Q=this.props.cols,re=(0,A.getLayoutItem)(U,ee);this.props.onResizeStop(U,I,re,null,ye,T);var we=(0,A.compact)(U,O(this.props),Q),le=this.state.oldLayout;this.setState({activeDrag:null,layout:we,oldResizeItem:null,oldLayout:null}),this.onLayoutMaybeChanged(we,le)}},{key:"placeholder",value:function(){var ee=this.state.activeDrag;if(!ee)return null;var E=this.props,pe=E.width,me=E.cols,ye=E.margin,T=E.containerPadding,R=E.rowHeight,U=E.maxRows,I=E.useCSSTransforms,Q=E.transformScale;return _e.default.createElement(be.default,{w:ee.w,h:ee.h,x:ee.x,y:ee.y,i:ee.i,className:"react-grid-placeholder",containerWidth:pe,cols:me,margin:ye,containerPadding:T||ye,maxRows:U,rowHeight:R,isDraggable:!1,isResizable:!1,useCSSTransforms:I,transformScale:Q},_e.default.createElement("div",null))}},{key:"processGridItem",value:function(ee,E){if(!(!ee||!ee.key)){var pe=(0,A.getLayoutItem)(this.state.layout,String(ee.key));if(!pe)return null;var me=this.props,ye=me.width,T=me.cols,R=me.margin,U=me.containerPadding,I=me.rowHeight,Q=me.maxRows,re=me.isDraggable,we=me.isResizable,le=me.useCSSTransforms,ve=me.transformScale,Pe=me.draggableCancel,Ue=me.draggableHandle,cn=this.state,vn=cn.mounted,an=cn.droppingPosition,mn=!!(!pe.static&&re&&(pe.isDraggable||pe.isDraggable==null)),Ke=!!(!pe.static&&we&&(pe.isResizable||pe.isResizable==null));return _e.default.createElement(be.default,{containerWidth:ye,cols:T,margin:R,containerPadding:U||R,maxRows:Q,rowHeight:I,cancel:Pe,handle:Ue,onDragStop:this.onDragStop,onDragStart:this.onDragStart,onDrag:this.onDrag,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,isDraggable:mn,isResizable:Ke,useCSSTransforms:le&&vn,usePercentages:!vn,transformScale:ve,w:pe.w,h:pe.h,x:pe.x,y:pe.y,i:pe.i,minH:pe.minH,minW:pe.minW,maxH:pe.maxH,maxW:pe.maxW,static:pe.static,droppingPosition:E?an:void 0},ee)}}},{key:"render",value:function(){var ee=this,E=this.props,pe=E.className,me=E.style,ye=E.isDroppable,T=(0,Be.default)(V,pe),R=f({height:this.containerHeight()},me);return _e.default.createElement("div",{className:T,style:R,onDrop:ye?this.onDrop:A.noop,onDragLeave:ye?this.onDragLeave:A.noop,onDragEnter:ye?this.onDragEnter:A.noop,onDragOver:ye?this.onDragOver:A.noop},_e.default.Children.map(this.props.children,function(U){return ee.processGridItem(U)}),ye&&this.state.droppingDOMNode&&this.processGridItem(this.state.droppingDOMNode,!0),this.placeholder())}}],[{key:"getDerivedStateFromProps",value:function(ee,E){var pe;if(E.activeDrag)return null;if(!(0,ie.default)(ee.layout,E.propsLayout)||ee.compactType!==E.compactType?pe=ee.layout:(0,A.childrenEqual)(ee.children,E.children)||(pe=E.layout),pe){var me=(0,A.synchronizeLayoutWithChildren)(pe,ee.children,ee.cols,O(ee));return{layout:me,compactType:ee.compactType,children:ee.children,propsLayout:ee.layout}}return null}}]),M}(_e.default.Component);ge.default=te,ae(te,"displayName","ReactGridLayout"),ae(te,"propTypes",{className:Ce.default.string,style:Ce.default.object,width:Ce.default.number,autoSize:Ce.default.bool,cols:Ce.default.number,draggableCancel:Ce.default.string,draggableHandle:Ce.default.string,verticalCompact:function(M){M.verticalCompact},compactType:Ce.default.oneOf(["vertical","horizontal"]),layout:function(M){var k=M.layout;k!==void 0&&(0,A.validateLayout)(k,"layout")},margin:Ce.default.arrayOf(Ce.default.number),containerPadding:Ce.default.arrayOf(Ce.default.number),rowHeight:Ce.default.number,maxRows:Ce.default.number,isDraggable:Ce.default.bool,isResizable:Ce.default.bool,preventCollision:Ce.default.bool,useCSSTransforms:Ce.default.bool,transformScale:Ce.default.number,isDroppable:Ce.default.bool,onLayoutChange:Ce.default.func,onDragStart:Ce.default.func,onDrag:Ce.default.func,onDragStop:Ce.default.func,onResizeStart:Ce.default.func,onResize:Ce.default.func,onResizeStop:Ce.default.func,onDrop:Ce.default.func,droppingItem:Ce.default.shape({i:Ce.default.string.isRequired,w:Ce.default.number.isRequired,h:Ce.default.number.isRequired}),children:function(M,k){var ee=M[k],E={};_e.default.Children.forEach(ee,function(pe){if(E[pe.key])throw new Error('Duplicate child key "'+pe.key+'" found! This will cause problems in ReactGridLayout.');E[pe.key]=!0})}}),ae(te,"defaultProps",{autoSize:!0,cols:12,className:"",style:{},draggableHandle:"",draggableCancel:"",containerPadding:null,rowHeight:150,maxRows:1/0,layout:[],margin:[10,10],isDraggable:!0,isResizable:!0,isDroppable:!1,useCSSTransforms:!0,transformScale:1,verticalCompact:!0,compactType:"vertical",preventCollision:!1,droppingItem:{i:"__dropping-elem__",h:1,w:1},onLayoutChange:A.noop,onDragStart:A.noop,onDrag:A.noop,onDragStop:A.noop,onResizeStart:A.noop,onResize:A.noop,onResizeStop:A.noop,onDrop:A.noop})},65966:(Nn,ge,i)=>{"use strict";var _e;_e={value:!0},ge.default=void 0;var Ce=Fe(i(67294)),ie=Fe(i(45697)),Be=Fe(i(72307)),A=i(67493),be=i(5651),We=Fe(i(49580));function Fe(te){return te&&te.__esModule?te:{default:te}}function je(te){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(M){return typeof M}:je=function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},je(te)}function f(){return f=Object.assign||function(te){for(var D=1;D<arguments.length;D++){var M=arguments[D];for(var k in M)Object.prototype.hasOwnProperty.call(M,k)&&(te[k]=M[k])}return te},f.apply(this,arguments)}function Xe(te,D){if(te==null)return{};var M=H(te,D),k,ee;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(te);for(ee=0;ee<E.length;ee++)k=E[ee],!(D.indexOf(k)>=0)&&Object.prototype.propertyIsEnumerable.call(te,k)&&(M[k]=te[k])}return M}function H(te,D){if(te==null)return{};var M={},k=Object.keys(te),ee,E;for(E=0;E<k.length;E++)ee=k[E],!(D.indexOf(ee)>=0)&&(M[ee]=te[ee]);return M}function e(te,D){var M=Object.keys(te);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(te);D&&(k=k.filter(function(ee){return Object.getOwnPropertyDescriptor(te,ee).enumerable})),M.push.apply(M,k)}return M}function sn(te){for(var D=1;D<arguments.length;D++){var M=arguments[D]!=null?arguments[D]:{};D%2?e(M,!0).forEach(function(k){ae(te,k,M[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(te,Object.getOwnPropertyDescriptors(M)):e(M).forEach(function(k){Object.defineProperty(te,k,Object.getOwnPropertyDescriptor(M,k))})}return te}function Ye(te,D){if(!(te instanceof D))throw new TypeError("Cannot call a class as a function")}function ze(te,D){for(var M=0;M<D.length;M++){var k=D[M];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(te,k.key,k)}}function Ae(te,D,M){return D&&ze(te.prototype,D),M&&ze(te,M),te}function Re(te,D){return D&&(je(D)==="object"||typeof D=="function")?D:de(te)}function fn(te){return fn=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)},fn(te)}function de(te){if(te===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return te}function Ne(te,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");te.prototype=Object.create(D&&D.prototype,{constructor:{value:te,writable:!0,configurable:!0}}),D&&oe(te,D)}function oe(te,D){return oe=Object.setPrototypeOf||function(k,ee){return k.__proto__=ee,k},oe(te,D)}function ae(te,D,M){return D in te?Object.defineProperty(te,D,{value:M,enumerable:!0,configurable:!0,writable:!0}):te[D]=M,te}var O=function(D){return Object.prototype.toString.call(D)};function V(te,D){return Array.isArray(te)?te:te[D]}var Te=function(te){Ne(D,te);function D(){var M,k;Ye(this,D);for(var ee=arguments.length,E=new Array(ee),pe=0;pe<ee;pe++)E[pe]=arguments[pe];return k=Re(this,(M=fn(D)).call.apply(M,[this].concat(E))),ae(de(k),"state",k.generateInitialState()),ae(de(k),"onLayoutChange",function(me){k.props.onLayoutChange(me,sn({},k.props.layouts,ae({},k.state.breakpoint,me)))}),k}return Ae(D,[{key:"generateInitialState",value:function(){var k=this.props,ee=k.width,E=k.breakpoints,pe=k.layouts,me=k.cols,ye=(0,be.getBreakpointFromWidth)(E,ee),T=(0,be.getColsFromBreakpoint)(ye,me),R=this.props.verticalCompact===!1?null:this.props.compactType,U=(0,be.findOrGenerateResponsiveLayout)(pe,E,ye,ye,T,R);return{layout:U,breakpoint:ye,cols:T}}},{key:"componentDidUpdate",value:function(k){(this.props.width!=k.width||this.props.breakpoint!==k.breakpoint||!(0,Be.default)(this.props.breakpoints,k.breakpoints)||!(0,Be.default)(this.props.cols,k.cols))&&this.onWidthChange(this.props)}},{key:"onWidthChange",value:function(k){var ee=k.breakpoints,E=k.cols,pe=k.layouts,me=k.compactType,ye=k.breakpoint||(0,be.getBreakpointFromWidth)(k.breakpoints,k.width),T=this.state.breakpoint,R=(0,be.getColsFromBreakpoint)(ye,E);if(T!==ye||this.props.breakpoints!==ee||this.props.cols!==E){T in pe||(pe[T]=(0,A.cloneLayout)(this.state.layout));var U=(0,be.findOrGenerateResponsiveLayout)(pe,ee,ye,T,R,me);U=(0,A.synchronizeLayoutWithChildren)(U,k.children,R,me),pe[ye]=U,this.props.onLayoutChange(U,pe),this.props.onBreakpointChange(ye,R),this.setState({breakpoint:ye,layout:U,cols:R})}var I=V(k.margin,ye),Q=V(k.containerPadding,ye);this.props.onWidthChange(k.width,I,R,Q)}},{key:"render",value:function(){var k=this.props,ee=k.breakpoint,E=k.breakpoints,pe=k.cols,me=k.layouts,ye=k.margin,T=k.containerPadding,R=k.onBreakpointChange,U=k.onLayoutChange,I=k.onWidthChange,Q=Xe(k,["breakpoint","breakpoints","cols","layouts","margin","containerPadding","onBreakpointChange","onLayoutChange","onWidthChange"]);return Ce.default.createElement(We.default,f({},Q,{margin:V(ye,this.state.breakpoint),containerPadding:V(T,this.state.breakpoint),onLayoutChange:this.onLayoutChange,layout:this.state.layout,cols:this.state.cols}))}}],[{key:"getDerivedStateFromProps",value:function(k,ee){if(!(0,Be.default)(k.layouts,ee.layouts)){var E=ee.breakpoint,pe=ee.cols,me=(0,be.findOrGenerateResponsiveLayout)(k.layouts,k.breakpoints,E,E,pe,k.compactType);return{layout:me,layouts:k.layouts}}return null}}]),D}(Ce.default.Component);ge.default=Te,ae(Te,"propTypes",{breakpoint:ie.default.string,breakpoints:ie.default.object,cols:ie.default.object,margin:ie.default.oneOfType([ie.default.array,ie.default.object]),containerPadding:ie.default.oneOfType([ie.default.array,ie.default.object]),layouts:function(D,M){if(O(D[M])!=="[object Object]")throw new Error("Layout property must be an object. Received: "+O(D[M]));Object.keys(D[M]).forEach(function(k){if(!(k in D.breakpoints))throw new Error("Each key in layouts must align with a key in breakpoints.");(0,A.validateLayout)(D.layouts[k],"layouts."+k)})},width:ie.default.number.isRequired,onBreakpointChange:ie.default.func,onLayoutChange:ie.default.func,onWidthChange:ie.default.func}),ae(Te,"defaultProps",{breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},layouts:{},margin:[10,10],containerPadding:{lg:null,md:null,sm:null,xs:null,xxs:null},onBreakpointChange:A.noop,onLayoutChange:A.noop,onWidthChange:A.noop})},27135:(Nn,ge,i)=>{"use strict";var _e;_e={value:!0},ge.default=fn;var Ce=A(i(67294)),ie=A(i(45697)),Be=A(i(73935));function A(de){return de&&de.__esModule?de:{default:de}}function be(de){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?be=function(oe){return typeof oe}:be=function(oe){return oe&&typeof Symbol=="function"&&oe.constructor===Symbol&&oe!==Symbol.prototype?"symbol":typeof oe},be(de)}function We(){return We=Object.assign||function(de){for(var Ne=1;Ne<arguments.length;Ne++){var oe=arguments[Ne];for(var ae in oe)Object.prototype.hasOwnProperty.call(oe,ae)&&(de[ae]=oe[ae])}return de},We.apply(this,arguments)}function Fe(de,Ne){if(de==null)return{};var oe=je(de,Ne),ae,O;if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(de);for(O=0;O<V.length;O++)ae=V[O],!(Ne.indexOf(ae)>=0)&&Object.prototype.propertyIsEnumerable.call(de,ae)&&(oe[ae]=de[ae])}return oe}function je(de,Ne){if(de==null)return{};var oe={},ae=Object.keys(de),O,V;for(V=0;V<ae.length;V++)O=ae[V],!(Ne.indexOf(O)>=0)&&(oe[O]=de[O]);return oe}function f(de,Ne){if(!(de instanceof Ne))throw new TypeError("Cannot call a class as a function")}function Xe(de,Ne){for(var oe=0;oe<Ne.length;oe++){var ae=Ne[oe];ae.enumerable=ae.enumerable||!1,ae.configurable=!0,"value"in ae&&(ae.writable=!0),Object.defineProperty(de,ae.key,ae)}}function H(de,Ne,oe){return Ne&&Xe(de.prototype,Ne),oe&&Xe(de,oe),de}function e(de,Ne){return Ne&&(be(Ne)==="object"||typeof Ne=="function")?Ne:Ye(de)}function sn(de){return sn=Object.setPrototypeOf?Object.getPrototypeOf:function(oe){return oe.__proto__||Object.getPrototypeOf(oe)},sn(de)}function Ye(de){if(de===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return de}function ze(de,Ne){if(typeof Ne!="function"&&Ne!==null)throw new TypeError("Super expression must either be null or a function");de.prototype=Object.create(Ne&&Ne.prototype,{constructor:{value:de,writable:!0,configurable:!0}}),Ne&&Ae(de,Ne)}function Ae(de,Ne){return Ae=Object.setPrototypeOf||function(ae,O){return ae.__proto__=O,ae},Ae(de,Ne)}function Re(de,Ne,oe){return Ne in de?Object.defineProperty(de,Ne,{value:oe,enumerable:!0,configurable:!0,writable:!0}):de[Ne]=oe,de}function fn(de){var Ne,oe;return oe=Ne=function(ae){ze(O,ae);function O(){var V,Te;f(this,O);for(var te=arguments.length,D=new Array(te),M=0;M<te;M++)D[M]=arguments[M];return Te=e(this,(V=sn(O)).call.apply(V,[this].concat(D))),Re(Ye(Te),"state",{width:1280}),Re(Ye(Te),"mounted",!1),Re(Ye(Te),"onWindowResize",function(){if(Te.mounted){var k=Be.default.findDOMNode(Ye(Te));k instanceof HTMLElement&&Te.setState({width:k.offsetWidth})}}),Te}return H(O,[{key:"componentDidMount",value:function(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),this.onWindowResize()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var Te=this.props,te=Te.measureBeforeMount,D=Fe(Te,["measureBeforeMount"]);return te&&!this.mounted?Ce.default.createElement("div",{className:this.props.className,style:this.props.style}):Ce.default.createElement(de,We({},D,this.state))}}]),O}(Ce.default.Component),Re(Ne,"defaultProps",{measureBeforeMount:!1}),Re(Ne,"propTypes",{measureBeforeMount:ie.default.bool}),oe}},5651:(Nn,ge,i)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0}),ge.getBreakpointFromWidth=Ce,ge.getColsFromBreakpoint=ie,ge.findOrGenerateResponsiveLayout=Be,ge.sortBreakpoints=A;var _e=i(67493);function Ce(be,We){for(var Fe=A(be),je=Fe[0],f=1,Xe=Fe.length;f<Xe;f++){var H=Fe[f];We>be[H]&&(je=H)}return je}function ie(be,We){if(!We[be])throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint "+be+" is missing!");return We[be]}function Be(be,We,Fe,je,f,Xe){if(be[Fe])return(0,_e.cloneLayout)(be[Fe]);for(var H=be[je],e=A(We),sn=e.slice(e.indexOf(Fe)),Ye=0,ze=sn.length;Ye<ze;Ye++){var Ae=sn[Ye];if(be[Ae]){H=be[Ae];break}}return H=(0,_e.cloneLayout)(H||[]),(0,_e.compact)((0,_e.correctBounds)(H,{cols:f}),Xe,f)}function A(be){var We=Object.keys(be);return We.sort(function(Fe,je){return be[Fe]-be[je]})}},67493:(Nn,ge,i)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0}),ge.bottom=je,ge.cloneLayout=f,ge.cloneLayoutItem=Xe,ge.childrenEqual=H,ge.collides=e,ge.compact=sn,ge.compactItem=Ae,ge.correctBounds=Re,ge.getLayoutItem=fn,ge.getFirstCollision=de,ge.getAllCollisions=Ne,ge.getStatics=oe,ge.moveElement=ae,ge.moveElementAwayFromCollision=O,ge.perc=V,ge.setTransform=Te,ge.setTopLeft=te,ge.sortLayoutItems=D,ge.sortLayoutItemsByRowCol=M,ge.sortLayoutItemsByColRow=k,ge.synchronizeLayoutWithChildren=ee,ge.validateLayout=E,ge.autoBindHandlers=pe,ge.noop=void 0;var _e=ie(i(72307)),Ce=ie(i(67294));function ie(T){return T&&T.__esModule?T:{default:T}}function Be(T,R){var U=Object.keys(T);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(T);R&&(I=I.filter(function(Q){return Object.getOwnPropertyDescriptor(T,Q).enumerable})),U.push.apply(U,I)}return U}function A(T){for(var R=1;R<arguments.length;R++){var U=arguments[R]!=null?arguments[R]:{};R%2?Be(U,!0).forEach(function(I){be(T,I,U[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(U)):Be(U).forEach(function(I){Object.defineProperty(T,I,Object.getOwnPropertyDescriptor(U,I))})}return T}function be(T,R,U){return R in T?Object.defineProperty(T,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):T[R]=U,T}var We=!0,Fe=!1;function je(T){for(var R=0,U,I=0,Q=T.length;I<Q;I++)U=T[I].y+T[I].h,U>R&&(R=U);return R}function f(T){for(var R=Array(T.length),U=0,I=T.length;U<I;U++)R[U]=Xe(T[U]);return R}function Xe(T){return{w:T.w,h:T.h,x:T.x,y:T.y,i:T.i,minW:T.minW,maxW:T.maxW,minH:T.minH,maxH:T.maxH,moved:!!T.moved,static:!!T.static,isDraggable:T.isDraggable,isResizable:T.isResizable}}function H(T,R){return(0,_e.default)(Ce.default.Children.map(T,function(U){return U.key}),Ce.default.Children.map(R,function(U){return U.key}))}function e(T,R){return!(T.i===R.i||T.x+T.w<=R.x||T.x>=R.x+R.w||T.y+T.h<=R.y||T.y>=R.y+R.h)}function sn(T,R,U){for(var I=oe(T),Q=D(T,R),re=Array(T.length),we=0,le=Q.length;we<le;we++){var ve=Xe(Q[we]);ve.static||(ve=Ae(I,ve,R,U,Q),I.push(ve)),re[T.indexOf(Q[we])]=ve,ve.moved=!1}return re}var Ye={x:"w",y:"h"};function ze(T,R,U,I){var Q=Ye[I];R[I]+=1;for(var re=T.map(function(ve){return ve.i}).indexOf(R.i),we=re+1;we<T.length;we++){var le=T[we];if(!le.static){if(le.y>R.y+R.h)break;e(R,le)&&ze(T,le,U+R[Q],I)}}R[I]=U}function Ae(T,R,U,I,Q){var re=U==="vertical",we=U==="horizontal";if(re)for(R.y=Math.min(je(T),R.y);R.y>0&&!de(T,R);)R.y--;else if(we)for(R.y=Math.min(je(T),R.y);R.x>0&&!de(T,R);)R.x--;for(var le;le=de(T,R);)we?ze(Q,R,le.x+le.w,"x"):ze(Q,R,le.y+le.h,"y"),we&&R.x+R.w>I&&(R.x=I-R.w,R.y++);return R}function Re(T,R){for(var U=oe(T),I=0,Q=T.length;I<Q;I++){var re=T[I];if(re.x+re.w>R.cols&&(re.x=R.cols-re.w),re.x<0&&(re.x=0,re.w=R.cols),!re.static)U.push(re);else for(;de(U,re);)re.y++}return T}function fn(T,R){for(var U=0,I=T.length;U<I;U++)if(T[U].i===R)return T[U]}function de(T,R){for(var U=0,I=T.length;U<I;U++)if(e(T[U],R))return T[U]}function Ne(T,R){return T.filter(function(U){return e(U,R)})}function oe(T){return T.filter(function(R){return R.static})}function ae(T,R,U,I,Q,re,we,le){if(R.static||R.y===I&&R.x===U)return T;me("Moving element ".concat(R.i," to [").concat(String(U),",").concat(String(I),"] from [").concat(R.x,",").concat(R.y,"]"));var ve=R.x,Pe=R.y;typeof U=="number"&&(R.x=U),typeof I=="number"&&(R.y=I),R.moved=!0;var Ue=D(T,we),cn=we==="vertical"&&typeof I=="number"?Pe>=I:we==="horizontal"&&typeof U=="number"?ve>=U:!1;cn&&(Ue=Ue.reverse());var vn=Ne(Ue,R);if(re&&vn.length)return me("Collision prevented on ".concat(R.i,", reverting.")),R.x=ve,R.y=Pe,R.moved=!1,T;for(var an=0,mn=vn.length;an<mn;an++){var Ke=vn[an];me("Resolving collision between ".concat(R.i," at [").concat(R.x,",").concat(R.y,"] and ").concat(Ke.i," at [").concat(Ke.x,",").concat(Ke.y,"]")),!Ke.moved&&(Ke.static?T=O(T,Ke,R,Q,we,le):T=O(T,R,Ke,Q,we,le))}return T}function O(T,R,U,I,Q,re){var we=Q==="horizontal",le=Q!=="horizontal",ve=R.static;if(I){I=!1;var Pe={x:we?Math.max(R.x-U.w,0):U.x,y:le?Math.max(R.y-U.h,0):U.y,w:U.w,h:U.h,i:"-1"};if(!de(T,Pe))return me("Doing reverse collision on ".concat(U.i," up to [").concat(Pe.x,",").concat(Pe.y,"].")),ae(T,U,we?Pe.x:void 0,le?Pe.y:void 0,I,ve,Q,re)}return ae(T,U,we?U.x+1:void 0,le?U.y+1:void 0,I,ve,Q,re)}function V(T){return T*100+"%"}function Te(T){var R=T.top,U=T.left,I=T.width,Q=T.height,re="translate(".concat(U,"px,").concat(R,"px)");return{transform:re,WebkitTransform:re,MozTransform:re,msTransform:re,OTransform:re,width:"".concat(I,"px"),height:"".concat(Q,"px"),position:"absolute"}}function te(T){var R=T.top,U=T.left,I=T.width,Q=T.height;return{top:"".concat(R,"px"),left:"".concat(U,"px"),width:"".concat(I,"px"),height:"".concat(Q,"px"),position:"absolute"}}function D(T,R){return R==="horizontal"?k(T):M(T)}function M(T){return[].concat(T).sort(function(R,U){return R.y>U.y||R.y===U.y&&R.x>U.x?1:R.y===U.y&&R.x===U.x?0:-1})}function k(T){return[].concat(T).sort(function(R,U){return R.x>U.x||R.x===U.x&&R.y>U.y?1:-1})}function ee(T,R,U,I){T=T||[];var Q=[];return Ce.default.Children.forEach(R,function(re,we){var le=fn(T,String(re.key));if(le)Q[we]=Xe(le);else{!We&&re.props._grid&&console.warn("`_grid` properties on children have been deprecated as of React 15.2. Please use `data-grid` or add your properties directly to the `layout`.");var ve=re.props["data-grid"]||re.props._grid;ve?(We||E([ve],"ReactGridLayout.children"),Q[we]=Xe(A({},ve,{i:re.key}))):Q[we]=Xe({w:1,h:1,x:0,y:je(Q),i:String(re.key)})}}),Q=Re(Q,{cols:U}),Q=sn(Q,I,U),Q}function E(T){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Layout",U=["x","y","w","h"];if(!Array.isArray(T))throw new Error(R+" must be an array!");for(var I=0,Q=T.length;I<Q;I++){for(var re=T[I],we=0;we<U.length;we++)if(typeof re[U[we]]!="number")throw new Error("ReactGridLayout: "+R+"["+I+"]."+U[we]+" must be a number!");if(re.i&&typeof re.i!="string")throw new Error("ReactGridLayout: "+R+"["+I+"].i must be a string!");if(re.static!==void 0&&typeof re.static!="boolean")throw new Error("ReactGridLayout: "+R+"["+I+"].static must be a boolean!")}}function pe(T,R){R.forEach(function(U){return T[U]=T[U].bind(T)})}function me(){var T;Fe&&(T=console).log.apply(T,arguments)}var ye=function(){};ge.noop=ye},69968:(Nn,ge,i)=>{Nn.exports=i(49580).default,Nn.exports.utils=i(67493),Nn.exports.Responsive=i(65966).default,Nn.exports.Responsive.utils=i(5651),Nn.exports.WidthProvider=i(27135).default},12394:(Nn,ge,i)=>{"use strict";var _e;_e={value:!0};var Ce=i(97582),ie=Ce.__importDefault(i(52185)),Be=Ce.__importDefault(i(31741)),A=Be.default(ie.default,function(be){var We=be.filter,Fe=be.fn,je=be.deps,f=Ce.__rest(be,["filter","fn","deps"]);return[We,Fe,f,je]});ge.Z=A},31741:(Nn,ge)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});var i=function(Ce){return[Ce]};function _e(Ce,ie){return ie===void 0&&(ie=i),function(A){var be=Ce.apply(void 0,ie(A)),We=A.children,Fe=A.render,je=Fe===void 0?We:Fe;return je&&je(be)||null}}ge.default=_e},88387:(Nn,ge)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0}),ge.isNavigator=ge.isBrowser=ge.off=ge.on=ge.noop=void 0;var i=function(){};ge.noop=i;function _e(ie){for(var Be=[],A=1;A<arguments.length;A++)Be[A-1]=arguments[A];ie&&ie.addEventListener&&ie.addEventListener.apply(ie,Be)}ge.on=_e;function Ce(ie){for(var Be=[],A=1;A<arguments.length;A++)Be[A-1]=arguments[A];ie&&ie.removeEventListener&&ie.removeEventListener.apply(ie,Be)}ge.off=Ce,ge.isBrowser=typeof window<"u",ge.isNavigator=typeof navigator<"u"},73969:(Nn,ge,i)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});var _e=i(67294),Ce=i(88387),ie=Ce.isBrowser?window:null,Be=function(We){return!!We.addEventListener},A=function(We){return!!We.on},be=function(We,Fe,je,f){je===void 0&&(je=ie),_e.useEffect(function(){if(Fe&&je)return Be(je)?Ce.on(je,We,Fe,f):A(je)&&je.on(We,Fe,f),function(){Be(je)?Ce.off(je,We,Fe,f):A(je)&&je.off(We,Fe,f)}},[We,Fe,je,JSON.stringify(f)])};ge.default=be},52185:(Nn,ge,i)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});var _e=i(97582),Ce=i(67294),ie=_e.__importDefault(i(73969)),Be=i(88387),A=function(We){return typeof We=="function"?We:typeof We=="string"?function(Fe){return Fe.key===We}:We?function(){return!0}:function(){return!1}},be=function(We,Fe,je,f){Fe===void 0&&(Fe=Be.noop),je===void 0&&(je={}),f===void 0&&(f=[We]);var Xe=je.event,H=Xe===void 0?"keydown":Xe,e=je.target,sn=je.options,Ye=Ce.useMemo(function(){var ze=A(We),Ae=function(Re){if(ze(Re))return Fe(Re)};return Ae},f);ie.default(H,Ye,e,sn)};ge.default=be},10577:Nn=>{(function(){"use strict";var ge=typeof window<"u"&&typeof window.document<"u"?window.document:{},i=Nn.exports,_e=function(){for(var Be,A=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],be=0,We=A.length,Fe={};be<We;be++)if(Be=A[be],Be&&Be[1]in ge){for(be=0;be<Be.length;be++)Fe[A[0][be]]=Be[be];return Fe}return!1}(),Ce={change:_e.fullscreenchange,error:_e.fullscreenerror},ie={request:function(Be,A){return new Promise(function(be,We){var Fe=function(){this.off("change",Fe),be()}.bind(this);this.on("change",Fe),Be=Be||ge.documentElement;var je=Be[_e.requestFullscreen](A);je instanceof Promise&&je.then(Fe).catch(We)}.bind(this))},exit:function(){return new Promise(function(Be,A){if(!this.isFullscreen){Be();return}var be=function(){this.off("change",be),Be()}.bind(this);this.on("change",be);var We=ge[_e.exitFullscreen]();We instanceof Promise&&We.then(be).catch(A)}.bind(this))},toggle:function(Be,A){return this.isFullscreen?this.exit():this.request(Be,A)},onchange:function(Be){this.on("change",Be)},onerror:function(Be){this.on("error",Be)},on:function(Be,A){var be=Ce[Be];be&&ge.addEventListener(be,A,!1)},off:function(Be,A){var be=Ce[Be];be&&ge.removeEventListener(be,A,!1)},raw:_e};if(!_e){i?Nn.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(ie,{isFullscreen:{get:function(){return!!ge[_e.fullscreenElement]}},element:{enumerable:!0,get:function(){return ge[_e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!ge[_e.fullscreenEnabled]}}}),i?Nn.exports=ie:window.screenfull=ie})()},3654:(Nn,ge,i)=>{"use strict";i.r(ge),i.d(ge,{default:()=>Rd});var _e=i(93567),Ce=i(63239),ie=i.n(Ce),Be=i(85105),A=i.n(Be),be=i(99663),We=i(22600),Fe=i(49135),je=i(93196),f=i(88239),Xe=i(54208),H=i(12424),e=i(67294),sn=i(45697),Ye=i.n(sn),ze=i(96841),Ae=i(74127),Re=i(12855),fn=i(12394),de=i(46891),Ne=i(17563),oe=i(41191),ae=i(36021),O=i(33867),V=i(97553),Te=i(42602),te=i(31261),D=i(13711),M=i(26819),k=i(94176),ee=i(93967),E=i.n(ee),pe=i(69334),me=i.n(pe),ye,T,R=[{type:"blank",icon:"plus",createType:"worksheet",name:_l("\u4ECE\u7A7A\u767D\u521B\u5EFA")},{type:"importExcel",icon:"new_excel",createType:"importExcel",name:_l("\u4ECEExcel\u521B\u5EFA")}],U=(T=ye=function(n){(0,je.default)(r,n);function r(o){(0,be.default)(this,r);var t=(0,Fe.default)(this,(r.__proto__||A()(r)).call(this,o));return t.handleCreate=function(l,a){var s=t.props,p=s.appId,v=s.groupId,c=s.createAppItem;c((0,f.default)({appId:p,groupId:v,type:l,icon:l===0?"1_worksheet":"1_0_home"},a)),t.setState({createType:""})},t.state={createType:"",flag:!0},t}return(0,We.default)(r,[{key:"renderCreate",value:function(){var t=this,l=this.props,a=l.sheetList,s=l.appId,p=l.groupId,v=l.isCharge,c=this.state,h=c.createType,u=c.visible,b=c.dialogImportExcel,m=k.Z.getState().appPkg,g=m.appGroups,x=g===void 0?[]:g,F=m.projectId,C=a.length,y=!(x.length>1&&!C);return v?e.createElement("div",{className:"contentBox"},e.createElement("i",{className:E()("iconBox",{add:y})}),e.createElement("span",{className:"Block TxtCenter Font20 Black"},y?_l("\u521B\u5EFA\u5DE5\u4F5C\u8868\uFF0C\u5F00\u59CB\u6784\u5EFA\u4F60\u7684\u5E94\u7528"):_l("\u5F53\u524D\u5206\u7EC4\u6CA1\u6709\u5E94\u7528\u9879\uFF0C\u521B\u5EFA\u6216\u4ECE\u5176\u4ED6\u5206\u7EC4\u79FB\u52A8\u5E94\u7528\u9879")),y?e.createElement("div",{className:"flexRow createOperate"},e.createElement(V.ZP,{type:"primary",className:"mRight20 fw500",onClick:function(){t.setState({createType:"worksheet"})}},_l("\u4ECE\u7A7A\u767D\u521B\u5EFA")),e.createElement(V.ZP,{className:"excelCreateBtn bold",onClick:function(){t.setState({dialogImportExcel:!0})}},_l("\u4ECEExcel\u521B\u5EFA"))):e.createElement("div",{className:"flexRow createOperate"},e.createElement("div",{className:"createBtn createWorksheet Hand Relative flexRow"},e.createElement("span",{className:"flex w117  hover14",onClick:function(){t.setState({visible:!1,createType:"worksheet"})}},_l("\u521B\u5EFA\u5DE5\u4F5C\u8868")),e.createElement("div",{className:"line"}),e.createElement(te.Z,{popupVisible:u,onPopupVisibleChange:function(w){return t.setState({visible:w})},popupPlacement:"bottom",popupAlign:{points:["tl","bl"],offset:[-116,0]},action:["click"],popup:e.createElement("div",{className:"createlist"},R.map(function(S){return e.createElement("div",{className:"createWorksheetItem Hand",onClick:function(){S.createType==="importExcel"?t.setState({visible:!1,dialogImportExcel:!0}):t.setState({visible:!1,createType:"worksheet"})}},e.createElement(O.Z,{icon:S.icon,className:"mRight8"})," ",S.name)}))},e.createElement("span",{style:{width:42},className:"hover14"},e.createElement(O.Z,{icon:"arrow-down",className:"createMoreIcon",onClick:function(w){w.stopPropagation(),t.setState({visible:!0})}})))),e.createElement("div",{className:"createBtn createCustom Hand",onClick:function(){t.setState({createType:"customPage"})}},_l("\u521B\u5EFA\u81EA\u5B9A\u4E49\u9875\u9762"))),h?e.createElement(D.Z,{type:h,onCreate:this.handleCreate,onCancel:function(){return t.setState({createType:""})}}):null,b&&e.createElement(M.Z,{appId:s,projectId:F,refreshPage:function(){return t.props.getSheetList({appId:s,appSectionId:p})},groupId:p,onCancel:function(){return t.setState({dialogImportExcel:!1})},createType:"worksheet"})):e.createElement("div",{className:"contentBox"},e.createElement("i",{className:"iconBox"}),e.createElement("span",{className:"Block TxtCenter Font20 Black"},_l("\u5F53\u524D\u5206\u7EC4\u6CA1\u6709\u5E94\u7528\u9879")))}},{key:"renderAppSection",value:function(){return e.createElement("div",{className:"contentBox"},e.createElement("i",{className:"iconFailureAppSection"}),e.createElement("span",{className:"Block TxtCenter Gray_75 Font17 mTop30"},_l("\u627E\u4E0D\u5230\u5206\u7EC4")))}},{key:"renderUnauthorized",value:function(){return e.createElement("div",{className:"contentBox"},e.createElement("img",{className:"Width110",src:me()}),e.createElement("span",{className:"Block TxtCenter Gray_75 Font17 mTop30"},_l("\u5730\u5740\u65E0\u6CD5\u8BBF\u95EE")),e.createElement("span",{className:"Block TxtCenter Gray_75 Font17"},_l("\u88AB\u53D6\u6D88\u4E86\u67E5\u770B\u6743\u9650\u6216\u5DF2\u5220\u9664")))}},{key:"render",value:function(){var t=this.props.isValidAppSectionId;return e.createElement("div",{className:"worksheetEmpty noneData"},t?this.renderCreate():this.renderAppSection())}}]),r}(e.Component),ye.propTypes={dispatch:Ye().func},T);const I=(0,ze.$j)(function(n){return{isValidAppSectionId:n.sheetList.isValidAppSectionId,worksheetId:n.sheet.base.worksheetId,sheetList:n.sheetList.data,isCharge:n.sheet.isCharge}},function(n){return{addWorkSheet:(0,Ae.DE)(Te.addWorkSheet,n),getSheetList:(0,Ae.DE)(Te.getSheetList,n),createAppItem:(0,Ae.DE)(Te.createAppItem,n)}})(U),Q=I;var re=i(19997);const we=re.Z;var le=i(25273),ve=i(6100),Pe=i(26581),Ue=i(11105),cn=i(10509),vn=i(19646),an=i(4375),mn=i(5232),Ke=i(56002),He=i(91516),Me=i(70973),ln=i(87600),Ve=i(24607),Oe=i(15577),Ge=function(r){var o=r.appItem,t=r.appPkg,l=r.projectId,a=r.appId,s=r.groupId,p=r.isCharge,v=t.iconColor,c=o.workSheetId,h=o.iconUrl,u=o.status,b=o.parentStatus,m=o.configuration,g=m===void 0?{}:m,x=o.urlTemplate,F=g.openType=="2",C=function(){var B=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+a))||{},Y=(_.find(B.worksheets||[],function(K){return K.groupId===s&&K.worksheetId===c})||{}).viewId||"",z="/app/"+a+"/"+s+"/"+c+(Y?"/"+Y:"");return z},y=C(),S=function(){var B=(0,ln.Pz)(x),Y=[];B.map(function(z){z.staticValue?Y.push(z.staticValue):Y.push((0,Ve.fS)({projectId:l,appId:a,groupId:s,worksheetId:c},z.cid))}),window.open(Y.join(""))},w=function(){var B="visibility_off";return(u===3||b===3)&&(B="desktop_off"),(u===4||b===4)&&(B="mobile_off"),([2,3,4].includes(u)||[2,3,4].includes(b))&&e.createElement(Pe.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u4EC5\u7CFB\u7EDF\u89D2\u8272\u53EF\u89C1\uFF08\u5305\u542B\u7BA1\u7406\u5458\u3001\u5F00\u53D1\u8005\uFF09"))},e.createElement(O.Z,{className:"Font16 mRight10 visibilityIcon",icon:B,style:{color:"#ee6f09"}}))},L=e.createElement(e.Fragment,null,e.createElement("div",{className:"flex flexRow alignItemsCenter justifyContentCenter",style:{backgroundColor:(0,He.i)(v)}},e.createElement(ve.Z,{url:h,fill:v,size:44})),e.createElement("div",{className:"nameWrap flexRow alignItemsCenter justifyContentCenter"},e.createElement("span",{className:"Gray"},(0,Oe.T3)(a,c).name||o.workSheetName)));return e.createElement(mn.Z,{appItem:o,appPkg:t,isCharge:p},e.createElement("div",{className:E()("appItemWrap pointer","workSheetItem-"+c)},F?e.createElement("div",{className:"flexColumn h100",onClick:S},L):e.createElement(Ke.Z,{className:"flexColumn h100",to:y},L),((0,Me.le)(_.get(t,["permissionType"]))||(0,Me.g9)(_.get(t,["permissionType"])))&&e.createElement(an.Z,r,e.createElement("div",{className:"moreIcon"},e.createElement(O.Z,{icon:"more_horiz",className:"Font18 Gray_9e"}))),w()))};const Sn=Ge;var Pn=i(91088),Bn=function(r){var o=r.appId,t=r.groupId,l=r.isCharge,a=r.projectId,s=r.loading,p=r.appPkg,v=r.sheetListActions,c=(0,e.useState)(""),h=(0,H.Z)(c,2),u=h[0],b=h[1],m=(0,e.useState)(0),g=(0,H.Z)(m,2),x=g[0],F=g[1],C=l?function(fe){return!0}:function(fe){return!(fe.type===2&&_.isEmpty(fe.items))},y=l&&p.viewHideNavi?r.data:r.data.filter(function(fe){return[1,4].includes(fe.status)&&!fe.navigateHide}).filter(C),S=(0,e.useRef)(null),w=function(){v.getSheetList({appId:o,appSectionId:t})};(0,e.useEffect)(w,[t]);var L=function(J,P){b("");var j=J.target.value.slice(0,100)||_l("\u672A\u547D\u540D\u5206\u7EC4");Pn.Z.updateAppSection({appId:o,appSectionId:P,appSectionName:j}).then(function(G){v.updateSheetListAppItem(P,{workSheetName:j,edit:!1})}).catch(function(G){alert(_l("\u4FEE\u6539\u5206\u7EC4\u540D\u79F0\u5931\u8D25"),2)})},W=function(J){setTimeout(function(){S&&S.current&&S.current.select()},0)},B={appId:o,groupId:t,sheetList:y,sheetListActions:v,isCharge:l,appPkg:p,projectId:a},Y=function(J){var P=(0,f.default)({},J,{layerIndex:1,isAppItem:J.type!==2,parentId:t}),j=J.notMore?e.Fragment:mn.Z,G=u===P.workSheetId||J.edit,q=J.items||[],X=p.displayIcon.split("")[1]==="1",ue=function(){var he="visibility_off";return J.status===3&&(he="desktop_off"),J.status===4&&(he="mobile_off"),[2,3,4].includes(J.status)&&e.createElement(Pe.Z,{popupPlacement:"bottom",text:e.createElement("span",null,_l("\u4EC5\u7CFB\u7EDF\u89D2\u8272\u53EF\u89C1\uFF08\u5305\u542B\u7BA1\u7406\u5458\u3001\u5F00\u53D1\u8005\uFF09"))},e.createElement(O.Z,{className:"Font16 mLeft10 pointer visibilityIcon",icon:he,style:{color:"#ee6f09"}}))};return e.createElement("div",{key:J.workSheetId,className:"flexColumn mBottom40 groupWrap"},e.createElement(j,{appItem:P,appPkg:p,isCharge:l,onlyIconDrag:!J.notMore},e.createElement("div",{className:E()("flexRow alignItemsCenter mBottom20 groupHeader","workSheetItem-"+J.workSheetId,{editWrap:G})},l&&!J.notMore&&e.createElement(O.Z,{icon:"drag",className:"Gray_9e pointer Font16 dragIcon"}),G?e.createElement("input",{autoFocus:!0,ref:S,className:"resetNameInput",defaultValue:J.workSheetName,onBlur:function(he){L(he,J.workSheetId)},onFocus:W,onKeyDown:function(he){he.which===13&&L(he,J.workSheetId)}}):e.createElement(e.Fragment,null,X&&!J.notMore&&e.createElement(ve.Z,{size:20,url:J.iconUrl?J.iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/"+J.icon+".svg",fill:"#333",className:"mRight5"}),e.createElement("div",{className:"Font16 bold"},(0,Oe.T3)(o,J.workSheetId).name||J.workSheetName),ue(),l&&!J.notMore&&e.createElement(an.Z,(0,f.default)({isGroup:!0,appItem:P,onChangeEdit:b},r),e.createElement("div",{className:"moreIcon mLeft10"},e.createElement(O.Z,{icon:"more_horiz",className:"Font18 pointer Gray_9e"}))))),e.createElement("div",{className:"flexRow groupContent"},(l&&p.viewHideNavi?q:q.filter(function(ce){return[1,4].includes(ce.status)&&!ce.navigateHide})).map(function(ce,he){return e.createElement(Sn,(0,f.default)({key:ce.workSheetId,appItem:(0,f.default)({},ce,{layerIndex:J.layerIndex||2,isAppItem:ce.type!==2,parentId:J.workSheetId,parentStatus:J.status,index:he})},B))}))))},z=y.filter(function(fe){return fe.type===2}),K=y.filter(function(fe){return fe.type!==2}),ne=function(){return s?e.createElement(Xe.Z,null):_.isEmpty(y)?e.createElement(I,{appId:o,groupId:t}):e.createElement("div",{className:"WorkSheetPortal flexColumn w100 h100"},e.createElement("div",{className:"flex"},e.createElement(Ue.W,{key:"navigationList",context:window,backend:cn.PD},e.createElement(le.Z,null,z.map(function(J){return Y(J)}),!!K.length&&Y({workSheetId:t,workSheetName:!!z.length&&_l("\u5176\u4ED6"),items:K,layerIndex:1,notMore:!0})))),e.createElement("div",{className:"flexRow alignItemsCenter createAppItem"},e.createElement("div",{className:"groupWrap"},e.createElement(vn.Z,{isCharge:l,isUnfold:!0,projectId:a,appId:o,groupId:t,sheetListActions:v,getSheetList:w}))))};return e.createElement("div",{className:"flexColumn w100 h100"},ne())},st=function(r){return{sheetListActions:(0,Ae.DE)(Te,r),dispatch:r}},Wn=function(r){return{data:r.sheetList.data,loading:r.sheetList.loading}};const Hn=(0,ze.$j)(Wn,st)(Bn);var Jn=i(43711);const En=Jn.Z;var ct=i(15308),xe=i(86735),Ee=i(5017),qn=function(n,r){return typeof r=="boolean"?r:!n},pt=function(n){return(0,e.useReducer)(qn,n)};const Et=pt;var et=i(10577),_n=i.n(et),Qn=i(11042),It=i(76362),Kt=function(n,r,o){o===void 0&&(o={});var t=o.video,l=o.onClose,a=l===void 0?It.ZT:l,s=(0,e.useState)(r),p=s[0],v=s[1];return(0,Qn.Z)(function(){if(r&&n.current){var c=function(){t!=null&&t.current&&(0,It.S1)(t.current,"webkitendfullscreen",c),a()},h=function(){if(_n().isEnabled){var u=_n().isFullscreen;v(u),u||a()}};if(_n().isEnabled){try{_n().request(n.current),v(!0)}catch(u){a(u),v(!1)}_n().on("change",h)}else t&&t.current&&t.current.webkitEnterFullscreen?(t.current.webkitEnterFullscreen(),(0,It.on)(t.current,"webkitendfullscreen",c),v(!0)):(a(),v(!1));return function(){if(v(!1),_n().isEnabled)try{_n().off("change",h),_n().exit()}catch(u){}else t&&t.current&&t.current.webkitExitFullscreen&&((0,It.S1)(t.current,"webkitendfullscreen",c),t.current.webkitExitFullscreen())}}},[r,t,n]),p};const Jt=Kt;var Ln=i(42723),yt=i(41671),Lt=i(11378),dt=i(56697),Zt=i(31277),gt=i(31929),qt=i(67272),St=i(51024),ca=i(97373),Xn=i(94055),$t=i(52262),vt=i(65400),Ze=i(18484),Ct=i(66637),ft=i(88106),qa=i(10524),nt=i(31059),er=i(59768),Vt=i(82891),kt=i(7145),tt=i.n(kt),_a=i(57467),ea=i(44263),jt=(0,xe.Z)([`
  padding: 16px 0;
  .title {
    margin-top: 16px;
  }
  input {
    font-size: 13px;
    height: 32px;
    border-radius: 3px;
  }
  .valueWrap {
    flex: 1;
    margin: 0 6px;
    .icon-workflow_other {
      color: #9e9e9e !important;
    }
    input {
      border-radius: 3px 0 0 3px !important;
    }
  }
  .paraItem {
    margin-top: 12px;
    .selectField {
      flex-shrink: 0;
      width: 32px;
      line-height: 30px;
      border: 1px solid #d9d9d9;
      border-left: none;
      text-align: center;
      background: #fff;
      &.active,
      &:hover {
        i {
          color: #2196f3;
        }
      }
      i {
        vertical-align: sub;
        color: #757575;
      }
    }
  }
  .fieldWrap {
    line-height: 34px;
    flex: 1;
    padding-left: 12px;
    border: 1px solid #d9d9d9;
    background: #fff;
  }
  .add {
    margin-top: 16px;
    font-weight: bold;
    color: #2196f3;
    &:hover {
      color: #1b83d6;
    }
  }
  .deleteWrap {
    color: #9e9e9e;
    &:hover {
      color: #757575;
    }
  }
  .ant-checkbox-input {
    position: absolute;
  }
`],[`
  padding: 16px 0;
  .title {
    margin-top: 16px;
  }
  input {
    font-size: 13px;
    height: 32px;
    border-radius: 3px;
  }
  .valueWrap {
    flex: 1;
    margin: 0 6px;
    .icon-workflow_other {
      color: #9e9e9e !important;
    }
    input {
      border-radius: 3px 0 0 3px !important;
    }
  }
  .paraItem {
    margin-top: 12px;
    .selectField {
      flex-shrink: 0;
      width: 32px;
      line-height: 30px;
      border: 1px solid #d9d9d9;
      border-left: none;
      text-align: center;
      background: #fff;
      &.active,
      &:hover {
        i {
          color: #2196f3;
        }
      }
      i {
        vertical-align: sub;
        color: #757575;
      }
    }
  }
  .fieldWrap {
    line-height: 34px;
    flex: 1;
    padding-left: 12px;
    border: 1px solid #d9d9d9;
    background: #fff;
  }
  .add {
    margin-top: 16px;
    font-weight: bold;
    color: #2196f3;
    &:hover {
      color: #1b83d6;
    }
  }
  .deleteWrap {
    color: #9e9e9e;
    &:hover {
      color: #757575;
    }
  }
  .ant-checkbox-input {
    position: absolute;
  }
`]),Na={key:"",value:{type:"static",data:""}},mt=Ee.ZP.div(jt);function da(n){var r=n.deleteItem,o=n.item,t=n.updateItem,l=o.key,a=o.value,s=a.type,p=a.data,v=(0,e.useState)(!1),c=(0,H.Z)(v,2),h=c[0],u=c[1];return e.createElement("div",{className:"paraItem flexCenter"},e.createElement(St.default,{style:{width:"100px"},value:l,placeholder:_l("\u53C2\u6570\u540D"),onChange:function(m){t({key:m.target.value})}}),e.createElement("div",{className:"valueWrap flexCenter"},s==="static"?e.createElement(St.default,{value:p,placeholder:_l("\u503C"),onChange:function(m){t({value:{type:"static",data:m.target.value}})}}):e.createElement("div",{className:"fieldWrap"},"{{"+p+"}}"),e.createElement(Vt.default,{visible:h,trigger:"click",placement:"bottomRight",onVisibleChange:u,overlay:e.createElement(_a.Nv,{style:{width:"180px"}},ea.ju.map(function(b){var m=b.type,g=b.title,x=b.fields;return e.createElement(e.Fragment,{key:m},e.createElement("div",{className:"title"},g),x.map(function(F){var C=F.text,y=F.value;return e.createElement("div",{key:y,className:"item",onClick:function(){t({value:{type:m,data:y}}),u(!1)}},C)}))}))},e.createElement("div",{"data-tip":_l("\u4F7F\u7528\u52A8\u6001\u53C2\u6570"),className:E()("selectField pointer",{active:h})},e.createElement("i",{className:"icon-workflow_other Font18 "})))),e.createElement("div",{className:"deleteWrap pointer","data-tip":_l("\u5220\u9664"),onClick:r},e.createElement("i",{className:"icon-delete_12"})))}function Ot(n){var r=n.paras,o=n.setParas,t=n.config,l=t===void 0?{}:t,a=n.setConfig,s=a===void 0?function(){}:a,p=n.showActionBar,v=l.reload,c=v===void 0?!1:v,h=l.newTab,u=h===void 0?!1:h;return e.createElement(mt,null,e.createElement(nt.default,{checked:r.length>0,onChange:function(m){var g=m.target.checked;o(g?[Na]:[])}},_l("\u5BF9\u94FE\u63A5\u76EE\u6807\u4F20\u53C2")),r.length>0&&e.createElement("div",{className:"paraListWrap"},e.createElement("div",{className:"title Bold"},_l("\u67E5\u8BE2\u53C2\u6570")),e.createElement("div",{className:"paraList"},r.map(function(b,m){return e.createElement(da,{key:m,index:m,item:b,updateItem:function(x){return o(tt()(r,(0,ft.default)({},m,{$apply:function(C){return(0,f.default)({},C,x)}})))},deleteItem:function(){return o(tt()(r,{$splice:[[m,1]]}))}})})),e.createElement("div",{className:"add pointer",onClick:function(){return o(tt()(r,{$push:[Na]}))}},e.createElement("i",{className:"icon-add"}),_l("\u6DFB\u52A0"))),p&&e.createElement("div",{className:"pTop16 pBottom16"},e.createElement(nt.default,{checked:c&&u,onChange:function(m){var g=m.target.checked;s({reload:g,newTab:g})}},_l("\u663E\u793A\u64CD\u4F5C\u680F")),(c||u)&&e.createElement("div",{className:"pTop8 pLeft24"},e.createElement("div",{className:"mBottom8"},e.createElement(nt.default,{checked:c,onChange:function(m){var g=m.target.checked;s({newTab:u,reload:g})}},_l("\u5237\u65B0"))),e.createElement("div",null,e.createElement(nt.default,{checked:u,onChange:function(m){var g=m.target.checked;s({reload:c,newTab:g})}},_l("\u65B0\u9875\u9762\u6253\u5F00"))))))}var ga=(0,xe.Z)([`
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 24px;
  height: 54px;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  border-radius: 5px 5px 0 0;
  font-size: 17px;
  z-index: 1;
  .typeName {
    font-weight: bold;
  }
  .saveBtn {
    padding: 0 24px;
    margin-right: 50px;
    border-radius: 16px;
    line-height: 32px;
    min-height: 32px;
    padding: 0 16px;
    min-width: 64px;
    font-size: 13px;
  }
`],[`
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 24px;
  height: 54px;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  border-radius: 5px 5px 0 0;
  font-size: 17px;
  z-index: 1;
  .typeName {
    font-weight: bold;
  }
  .saveBtn {
    padding: 0 24px;
    margin-right: 50px;
    border-radius: 16px;
    line-height: 32px;
    min-height: 32px;
    padding: 0 16px;
    min-width: 64px;
    font-size: 13px;
  }
`]),Pa=(0,xe.Z)([`
  box-sizing: border-box;
  padding-top: 54px;
  height: 100%;
`],[`
  box-sizing: border-box;
  padding-top: 54px;
  height: 100%;
`]),na=(0,Ee.ZP)(Ze.Lb)(ga),zt=Ee.ZP.div(Pa),Ta=(0,xe.Z)([`
  padding-top: 54px;
  box-sizing: border-box;
  height: 100%;
  align-items: initial;
  .previewWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9e9e9e;
    font-size: 15px;
    flex: 1;
    background-color: #eaeaea;
    padding: 24px;
  }
  .configWrap {
    box-sizing: border-box;
    width: 360px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    overflow: auto;
  }
  .content {
    p {
      font-weight: bold;
      font-size: 16px;
      margin: 0 0 16px 0;
    }
  }
  .urlInput {
    margin-bottom: 12px;
    width: 100%;
  }
  .previewBtn {
    height: 36px;
    padding: 0 15px;
    color: #40a9ff;
    border: none;
    border-radius: 24px;
    &:hover {
      color: #1079cc;
    }
  }
`],[`
  padding-top: 54px;
  box-sizing: border-box;
  height: 100%;
  align-items: initial;
  .previewWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9e9e9e;
    font-size: 15px;
    flex: 1;
    background-color: #eaeaea;
    padding: 24px;
  }
  .configWrap {
    box-sizing: border-box;
    width: 360px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    overflow: auto;
  }
  .content {
    p {
      font-weight: bold;
      font-size: 16px;
      margin: 0 0 16px 0;
    }
  }
  .urlInput {
    margin-bottom: 12px;
    width: 100%;
  }
  .previewBtn {
    height: 36px;
    padding: 0 15px;
    color: #40a9ff;
    border: none;
    border-radius: 24px;
    &:hover {
      color: #1079cc;
    }
  }
`]),va=(0,Ee.ZP)(Ze.Lb)(Ta);function Rt(n){var r=n.onClose,o=n.onEdit,t=n.widget,l=t===void 0?{}:t,a=n.info,s=(0,e.useState)(l.value||""),p=(0,H.Z)(s,2),v=p[0],c=p[1],h=(0,e.useState)(!!l.value),u=(0,H.Z)(h,2),b=u[0],m=u[1],g=(0,e.useState)(l.param||[]),x=(0,H.Z)(g,2),F=x[0],C=x[1],y=(0,e.useState)(l.config||{}),S=(0,H.Z)(y,2),w=S[0],L=S[1],W=w.reload,B=W===void 0?!1:W,Y=w.newTab,z=Y===void 0?!1:Y,K=(0,Ze.do)(v,F,a),ne=function(){if(!v){alert(_l("url\u4E0D\u80FD\u4E3A\u7A7A"),3);return}o({value:v,param:F,config:w})};return e.createElement(dt.Z,{className:"editWidgetDialogWrap",visible:!0,transitionName:"",maskTransitionName:"",width:"100%",footer:null,centered:!0,onCancel:r},e.createElement(gt.default,{autoInsertSpaceInButton:!1},e.createElement(na,null,e.createElement("div",{className:"typeName"},_l("\u5D4C\u5165url")),e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(vt.default,{block:!0,className:"save",shape:"round",type:"primary",onClick:ne},_l("\u4FDD\u5B58")),e.createElement(Xn.default,{title:_l("\u5173\u95ED"),placement:"bottom"},e.createElement(O.Z,{icon:"close",className:"Font24 pointer mLeft16 Gray_9e",onClick:r})))),e.createElement(va,null,e.createElement("div",{className:"previewWrap"},b?e.createElement(Ct.Z,{reload:B,newTab:z,value:K,param:l.param}):_l("\u5D4C\u5165\u7F51\u9875\u3001\u89C6\u9891\u3001\u56FE\u7247\u94FE\u63A5, \u4F60\u4E5F\u53EF\u4EE5\u5D4C\u5165\u4E00\u4E2A\u89C6\u56FE\u3001\u8BB0\u5F55\u7684\u5206\u4EAB\u94FE\u63A5")),e.createElement("div",{className:"configWrap"},e.createElement("div",{className:"content"},e.createElement("p",null,_l("\u8F93\u5165url")),e.createElement(St.default.TextArea,{className:"urlInput",autoSize:{minRows:4,maxRows:30},placeholder:_l("\u8BF7\u8F93\u5165\u5B8C\u6574\u94FE\u63A5\uFF0C\u4EE5 http:// \u6216 https:// \u5F00\u5934"),value:v,onChange:function(J){var P=J.target.value;m(!1),c(P)}}),e.createElement(vt.default,{className:"previewBtn",onClick:function(){v&&m(!0)}},e.createElement("span",{className:"bold"},_l("\u9884\u89C8"))),e.createElement(Ot,{showActionBar:!0,paras:F,setParas:C,config:w,setConfig:L}),e.createElement("div",{className:"parasConfigWrap"}))))))}const za=(0,ze.$j)(function(n){var r=n.sheet,o=n.appPkg,t=n.customPage;return{info:(0,f.default)({},r.base,{projectId:o.projectId,itemId:t.pageId})}})(Rt);var Aa=i(99903),ua=i(93002),Ga=i(85380),Ft=i(96486),N=i.n(Ft);function pa(n){var r=n.ids,o=r===void 0?{}:r,t=n.projectId,l=n.dataSource,a=n.setDataSource,s=n.onClose,p=s===void 0?N().noop:s,v=n.onCreate,c=v===void 0?N().noop:v,h=o.appId,u=l.worksheetId,b=l.views;return e.createElement(Ga.Z,{sourceType:1,dialogVisible:!0,appId:h,projectId:t,viewId:"",worksheetInfo:l,onChange:function(g,x,F){g?(a({worksheetId:g,viewId:x,appType:F}),c()):alert(_l("\u8BF7\u9009\u62E9\u4E00\u4E2A\u5DE5\u4F5C\u8868\u6765\u521B\u5EFA\u56FE\u8868"),3)},onChangeDialogVisible:p})}const ha=pa;var Nt=i(72045);function ba(n){var r=n.widget,o=n.onEdit,t=n.onUpdate,l=n.onClose,a=n.ids,s=n.projectId,p=n.sheetList,v=n.apk,c=n.config,h=a.appId,u=(0,Ze.Te)(c||{},v.iconColor),b=(0,e.useState)(!!r.value),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=(0,ua.Z)({name:r.name||_l("\u672A\u547D\u540D"),id:r.value||""}),C=(0,H.Z)(F,2),y=C[0],S=C[1],w=(0,ua.Z)({worksheetId:"",worksheetName:"",viewId:"",views:[],appType:1}),L=(0,H.Z)(w,2),W=L[0],B=L[1],Y=W.worksheetId,z=W.worksheetName,K=W.viewId,ne=W.views,fe=W.appType,J=function(){x(!0)};return e.createElement(e.Fragment,null,!g&&!y.id&&e.createElement(ha,(0,f.default)({onCreate:J,dataSource:W,setDataSource:B},n)),g&&e.createElement(Aa.Z,{sourceType:1,appType:fe,worksheetName:z,appId:h,projectId:s,worksheetId:Y,viewId:K,report:y,themeColor:v.iconColor,customPageConfig:u,updateDialogVisible:function(j){var G=j.dialogVisible,q=j.isRequest,X=q===void 0?!1:q,ue=j.reportId,ce=j.reportName,he=j.reportType,Se=j.reportDesc,ke=j.worksheetId,$e=r.config,Qe=$e===void 0?{}:$e,nn=Qe.objectId?Qe:(0,f.default)({},Qe,{objectId:(0,Nt.Z)()});if(ue){o({value:ue,config:nn,worksheetId:ke,name:ce,reportType:he}),l();return}if(y.id&&ce!==r.name){o({name:ce,config:nn}),l();return}X&&t({needUpdate:!r.needUpdate}),G||l()}}))}var xa=i(24043),Ht=i.n(xa),Ma=(0,xe.Z)([`
  display: flex;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  .countWrap {
    box-sizing: border-box;
    line-height: 30px;
    width: 60px;
    padding: 0 10px;
    background: #fff;
    border-radius: 3px;
  }
  .operateWrap {
    position: absolute;
    top: 0;
    right: 0;
    .item {
      color: #9e9e9e;
      display: flex;
      width: 26px;
      height: 15px;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #2196f3;
      }
    }
    .add {
      padding-top: 1px;
    }
    .sub {
      padding-bottom: 3px;
    }
  }
  .disabled {
    color: #dddddd !important;
    &:hover {
    }
  }
`],[`
  display: flex;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  .countWrap {
    box-sizing: border-box;
    line-height: 30px;
    width: 60px;
    padding: 0 10px;
    background: #fff;
    border-radius: 3px;
  }
  .operateWrap {
    position: absolute;
    top: 0;
    right: 0;
    .item {
      color: #9e9e9e;
      display: flex;
      width: 26px;
      height: 15px;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #2196f3;
      }
    }
    .add {
      padding-top: 1px;
    }
    .sub {
      padding-bottom: 3px;
    }
  }
  .disabled {
    color: #dddddd !important;
    &:hover {
    }
  }
`]),Fa=(0,xe.Z)([`
  padding: 6px 0;
  flex-direction: column;
  width: 60px;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.29);
  li {
    box-sizing: border-box;
    padding: 0 12px;
    line-height: 32px;
    transition: all 0.25s;
    cursor: pointer;
    border: none;
    width: 100%;
    &.active,
    &:hover {
      background-color: #2196f3;
      color: #fff;
    }
  }
`],[`
  padding: 6px 0;
  flex-direction: column;
  width: 60px;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.29);
  li {
    box-sizing: border-box;
    padding: 0 12px;
    line-height: 32px;
    transition: all 0.25s;
    cursor: pointer;
    border: none;
    width: 100%;
    &.active,
    &:hover {
      background-color: #2196f3;
      color: #fff;
    }
  }
`]),Wa=Ee.ZP.div(Ma),ya=Ee.ZP.ul(Fa),ta={label:_l("\u5173\u95ED"),value:!1};function Un(n){var r=n.count,o=r===void 0?5:r,t=n.maxCount,l=t===void 0?10:t,a=n.minCount,s=a===void 0?0:a,p=n.onChange,v=n.needCloseSelect,c=v===void 0?!1:v,h=n.suffix,u=h===void 0?"":h,b=n.mode,m=b===void 0?"default":b,g=(0,e.useRef)(null),x=(0,e.useState)(!1),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=function(){return(c?[ta.value]:[]).concat(Ht()({length:l-s+1}).map(function(L,W){return W+s}))};return e.createElement(Wa,{ref:g},e.createElement(te.Z,{action:["click"],popupAlign:{points:["tl","bl"],offset:[0,2]},popupVisible:C,onPopupVisibleChange:function(L){return y(L)},getPopupContainer:function(){return g.current},popup:e.createElement(ya,{style:{width:N().get(g,"current.clientWidth")}},S().map(function(w){return e.createElement("li",{key:w,className:E()({active:w===o}),onClick:function(){p(w),y(!1)}},ta.value===w?ta.label:""+w+u)}))},e.createElement("div",{className:"countWrap"},ta.value===o?ta.label:""+o+u)),m==="default"?e.createElement("div",{className:"operateWrap"},e.createElement("div",{className:E()("add item",{disabled:o===l}),onClick:function(){return p(Math.min(l,o+1))}},e.createElement("i",{className:"icon-arrow-up-border"})),e.createElement("div",{className:E()("sub item",{disabled:o===s}),onClick:function(){return p(Math.max(s,o-1))}},e.createElement("i",{className:"icon-arrow-down-border"}))):e.createElement("div",{className:"operateWrap h100 flexColumn justifyContentCenter"},e.createElement("div",{className:"item",onClick:function(){return y(!0)}},e.createElement("i",{className:"icon-arrow-down-border"}))))}var xn=i(95742),dn=(0,xe.Z)([`
  display: flex;
  font-size: 14px;
  align-items: center;
  line-height: 32px;
  cursor: pointer;
`],[`
  display: flex;
  font-size: 14px;
  align-items: center;
  line-height: 32px;
  cursor: pointer;
`]),Vn=(0,xe.Z)([`
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); */
  background-color: #fff;
  padding: 6px 24px;
  min-height: 205px;
  max-height: 560px;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    min-width: 180px;
    line-height: 36px;

    cursor: row-resize;
    background-color: #fff;
    color: #333;
    .btnIcon {
      margin: 0 7px;
    }
    transition: padding 0.25s;
    &:hover {
      padding-left: 12px;
      background-color: #f5f5f5;
    }
  }
`],[`
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); */
  background-color: #fff;
  padding: 6px 24px;
  min-height: 205px;
  max-height: 560px;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    min-width: 180px;
    line-height: 36px;

    cursor: row-resize;
    background-color: #fff;
    color: #333;
    .btnIcon {
      margin: 0 7px;
    }
    transition: padding 0.25s;
    &:hover {
      padding-left: 12px;
      background-color: #f5f5f5;
    }
  }
`]),Yn=(0,xe.Z)([`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 26px;
    margin-right: 24px;
    align-self: flex-end;
  }
`],[`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 26px;
    margin-right: 24px;
    align-self: flex-end;
  }
`]),Ut=Ee.ZP.div(dn),wt=Ee.ZP.ul(Vn),Dt=Ee.ZP.div(Yn),aa=(0,xn.W8)(function(n){var r=n.item;return e.createElement("li",{className:"overflow_ellipsis"},e.createElement("i",{className:"icon-drag Gray_bd Font18"}),e.createElement("i",{style:{color:r.color},className:"btnIcon Font16 icon-"+(r.icon||"custom_actions")}),e.createElement("span",null,r.name))}),Za=(0,xn.JN)(function(n){var r=n.list;return e.createElement(wt,null,r.map(function(o,t){return e.createElement(aa,{item:o,index:t})}))});function Ra(n){var r=n.buttonList,o=n.onSortEnd,t=(0,e.useState)(!1),l=(0,H.Z)(t,2),a=l[0],s=l[1];return e.createElement(e.Fragment,null,e.createElement(Ut,{"data-tip":_l("\u6309\u94AE\u6392\u5E8F"),className:"mLeft10",onClick:function(){return s(!0)}},e.createElement(O.Z,{className:"Font24 Gray_9e ThemeHoverColor3",icon:"import_export"})),e.createElement(dt.Z,{title:_l("\u81EA\u5B9A\u4E49\u6309\u94AE\u6392\u5E8F"),maskStyle:{zIndex:1051},width:400,centered:!0,closable:!1,wrapClassName:"customPageBtnSortModalWrap",visible:a,onCancel:function(){return s(!1)},footer:null},e.createElement(Dt,null,e.createElement(Za,{helperClass:"customPageBtnSortHelper",list:r,onSortEnd:function(v){var c=v.newIndex,h=v.oldIndex;o((0,xn.Rp)(r,h,c))}}),e.createElement(V.ZP,{onClick:function(){return s(!1)}},_l("\u5B8C\u6210")))))}var ra=(0,xe.Z)([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .addBtn {
    width: 120px;
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    padding: 0 20px 0 16px;
    border-radius: 18px;
    background-color: #fff;
    font-weight: bold;
    color: #2196f3;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      color: #1079cc;
    }
  }
  .btnGroupSettingWrap {
    display: flex;
    align-items: center;
    .itemTitle {
      margin: 0 10px 0 24px;
      font-size: 13px;
    }
    .btnStyle,
    .btnWidth {
      display: flex;
      border-radius: 3px;
      padding: 3px;
      background-color: #e7e7e7;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 45px;
        height: 30px;
        line-height: 30px;
        color: #9e9e9e;
        font-size: 20px;
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &.active {
          color: #2196f3;
          border-radius: 3px;
          background-color: #fff;
        }
      }
    }
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .addBtn {
    width: 120px;
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    padding: 0 20px 0 16px;
    border-radius: 18px;
    background-color: #fff;
    font-weight: bold;
    color: #2196f3;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      color: #1079cc;
    }
  }
  .btnGroupSettingWrap {
    display: flex;
    align-items: center;
    .itemTitle {
      margin: 0 10px 0 24px;
      font-size: 13px;
    }
    .btnStyle,
    .btnWidth {
      display: flex;
      border-radius: 3px;
      padding: 3px;
      background-color: #e7e7e7;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 45px;
        height: 30px;
        line-height: 30px;
        color: #9e9e9e;
        font-size: 20px;
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &.active {
          color: #2196f3;
          border-radius: 3px;
          background-color: #fff;
        }
      }
    }
  }
`]),At=[{value:1,text:_l("\u6309\u94AE")},{value:2,text:_l("\u56FE\u5F62")}],nr=[{icon:"Rectangle",value:1,tip:_l("\u5B9E\u5FC3\u77E9\u5F62")},{icon:"capsule",value:2,tip:_l("\u5706\u89D2\u77E9\u5F62")},{icon:"Empty",value:3,tip:_l("\u865A\u7EBF")}],ur=[{icon:"rounded_square",value:1,tip:_l("\u5706\u89D2\u77E9\u5F62")},{icon:"circle",value:2,tip:_l("\u5B9E\u5FC3\u5706\u5F62")},{icon:"dotted_line",value:3,tip:_l("\u865A\u7EBF")}],La=[{icon:"Adaptive",value:2,tip:_l("\u81EA\u9002\u5E94\u6587\u5B57")},{icon:"padding",value:1,tip:_l("\u7B49\u5206")}],pr=[{icon:"up_down",value:1,tip:_l("\u4E0A\u4E0B")},{icon:"left_right",value:2,tip:_l("\u5DE6\u53F3")}],$a=Ee.ZP.div(ra);function fr(n){var r=n.style,o=r===void 0?2:r,t=n.width,l=n.setSetting,a=n.addBtn,s=n.count,p=n.config,v=p||{},c=v.btnType,h=c===void 0?1:c,u=v.direction,b=u===void 0?1:u;return e.createElement($a,null,e.createElement("div",{className:"btnGroupSettingWrap"},e.createElement("div",{className:"itemTitle overflow_ellipsis mLeft0"},_l("\u6837\u5F0F")),e.createElement("ul",{className:"btnStyle mRight20"},At.map(function(m){var g=m.value,x=m.text;return e.createElement("li",{className:E()({active:g===h}),key:g,onClick:function(){l({config:(0,f.default)({},p,{btnType:g})})}},e.createElement("div",{className:"Font14 bold"},x))})),e.createElement("ul",{className:"btnStyle"},(h===1?nr:ur).map(function(m){var g=m.icon,x=m.value,F=m.tip;return e.createElement("li",{className:E()({active:x===o}),key:x,"data-tip":F,onClick:function(){return l({style:x})}},e.createElement("i",{className:"icon-"+g}))})),h===1?e.createElement(e.Fragment,null,e.createElement("div",{className:"itemTitle overflow_ellipsis"},_l("\u5BBD\u5EA6")),e.createElement("ul",{className:"btnWidth"},La.map(function(m){var g=m.icon,x=m.value,F=m.tip;return e.createElement("li",{className:E()({active:x===t}),key:x,"data-tip":F,onClick:function(){return l({width:x})}},e.createElement("i",{className:"icon-"+g}))}))):e.createElement(e.Fragment,null,e.createElement("div",{className:"itemTitle overflow_ellipsis"},_l("\u65B9\u5411")),e.createElement("ul",{className:"btnWidth"},pr.map(function(m){var g=m.icon,x=m.value,F=m.tip;return e.createElement("li",{className:E()({active:x===b}),key:x,"data-tip":F,onClick:function(){l({config:(0,f.default)({},p,{direction:x}),mobileCount:x===1?4:2})}},e.createElement("i",{className:"icon-"+g}))}))),e.createElement("div",{className:"itemTitle overflow_ellipsis"},_l("\u6BCF\u884C")),e.createElement(Un,{maxCount:8,minCount:1,count:s,onChange:function(g){return l({count:g})}}),e.createElement("div",null,_l("\u4E2A")),e.createElement(Ra,(0,f.default)({},n,{onSortEnd:function(g){return l({buttonList:g})}}))),e.createElement(V.ZP,{icon:"add",className:"addBtn overflow_ellipsis",onClick:a},_l("\u6DFB\u52A0\u6309\u94AE")))}var tr=(0,xe.Z)([`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;

  .chunkListWrap {
    display: flex;
    &.center {
      justify-content: center;
      align-items: center;
    }
  }
`],[`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;

  .chunkListWrap {
    display: flex;
    &.center {
      justify-content: center;
      align-items: center;
    }
  }
`]),ar=(0,xe.Z)([`
  justify-content: center;
  padding: 10px 0;
  &.column {
    flex-direction: column;
    &.small {
      .iconWrap {
        width: 56px !important;
        height: 56px !important;
      }
    }
    .iconWrap {
      width: 72px;
      height: 72px;
      margin-bottom: 10px;
    }
    .nameWrap {
      font-size: 15px;
    }
  }
  &.row {
    display: inline-flex;
    flex-direction: row;
    &.small {
      .iconWrap {
        width: 38px !important;
        height: 38px !important;
        svg {
          transform: scale(0.85);
        }
      }
    }
    .iconWrap {
      width: 48px;
      height: 48px;
      margin-right: 10px;
    }
    .nameWrap {
      text-align: left;
      flex: 1;
      width: 90px;
    }
  }
  .name {
    display: -webkit-box;
    vertical-align: middle;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }
  .iconWrap {
    color: #fff;
    font-size: 28px;
    border-radius: `,`;
    justify-content: center;
    background-color: `,`;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0.2s;
    &:hover {
      background-color: `,`;
    }
    div {
      display: flex;
    }
  }
`],[`
  justify-content: center;
  padding: 10px 0;
  &.column {
    flex-direction: column;
    &.small {
      .iconWrap {
        width: 56px !important;
        height: 56px !important;
      }
    }
    .iconWrap {
      width: 72px;
      height: 72px;
      margin-bottom: 10px;
    }
    .nameWrap {
      font-size: 15px;
    }
  }
  &.row {
    display: inline-flex;
    flex-direction: row;
    &.small {
      .iconWrap {
        width: 38px !important;
        height: 38px !important;
        svg {
          transform: scale(0.85);
        }
      }
    }
    .iconWrap {
      width: 48px;
      height: 48px;
      margin-right: 10px;
    }
    .nameWrap {
      text-align: left;
      flex: 1;
      width: 90px;
    }
  }
  .name {
    display: -webkit-box;
    vertical-align: middle;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }
  .iconWrap {
    color: #fff;
    font-size: 28px;
    border-radius: `,`;
    justify-content: center;
    background-color: `,`;
    transition: color ease-in 0.2s, border-color ease-in 0.2s, background-color ease-in 0.2s;
    &:hover {
      background-color: `,`;
    }
    div {
      display: flex;
    }
  }
`]),Va=Ee.ZP.div(tr),fa=Ee.ZP.div(ar,function(n){return n.radius},function(n){return n.color},function(n){return(0,oe.default)(n.color).darken(20).toString()}),rr=(0,xe.Z)([`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 24px 20px;
  text-align: center;
  background-color: #fff;
  overflow: auto;
  border-radius: 3px;
  .explain {
    text-align: center;
    margin-bottom: 12px;
  }
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 24px 20px;
  text-align: center;
  background-color: #fff;
  overflow: auto;
  border-radius: 3px;
  .explain {
    text-align: center;
    margin-bottom: 12px;
  }
`]),mr=(0,xe.Z)([`
  margin: 4px 0;
  padding: 0 10px;
  cursor: pointer;
  box-sizing: border-box;
  &.noMargin {
    margin: 0;
  }
  &.isFullWidth {
    flex-grow: 1;
  }
  .Button {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
    }
    .injected-svg {
      margin-right: 5px;
    }
  }
  .btnBox {
    box-sizing: border-box;
    transition: border 0.25s;
    border: 1px solid transparent;
    padding: 4px;
    &.horizontal {
      display: flex;
      padding: 4px 20px;
    }
    &:hover {
      border: 1px dashed #ddd;
      border-radius: 3px;
    }
    &.active {
      border: 1px solid #2196f3;
      border-radius: 3px;
    }
    &.error {
      border: 1px solid red;
    }
  }

  button.ming {
    padding: 0 14px;
    background-color: `,`;
    &:hover {
      background-color: `,`;
    }
    .icon {
      font-size: 20px;
      margin-right: 6px;
    }
  }

  .adjustText {
    button {
      background-color: #f8f8f8;
      color: `,`;
      &:hover {
        background-color: #f8f8f8;
      }
    }
    .iconWrap {
      color: `,`;
      background-color: #f8f8f8;
    }
  }
`],[`
  margin: 4px 0;
  padding: 0 10px;
  cursor: pointer;
  box-sizing: border-box;
  &.noMargin {
    margin: 0;
  }
  &.isFullWidth {
    flex-grow: 1;
  }
  .Button {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
    }
    .injected-svg {
      margin-right: 5px;
    }
  }
  .btnBox {
    box-sizing: border-box;
    transition: border 0.25s;
    border: 1px solid transparent;
    padding: 4px;
    &.horizontal {
      display: flex;
      padding: 4px 20px;
    }
    &:hover {
      border: 1px dashed #ddd;
      border-radius: 3px;
    }
    &.active {
      border: 1px solid #2196f3;
      border-radius: 3px;
    }
    &.error {
      border: 1px solid red;
    }
  }

  button.ming {
    padding: 0 14px;
    background-color: `,`;
    &:hover {
      background-color: `,`;
    }
    .icon {
      font-size: 20px;
      margin-right: 6px;
    }
  }

  .adjustText {
    button {
      background-color: #f8f8f8;
      color: `,`;
      &:hover {
        background-color: #f8f8f8;
      }
    }
    .iconWrap {
      color: `,`;
      background-color: #f8f8f8;
    }
  }
`]),gr=(0,xe.Z)([`
  margin-top: 16px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  overflow: auto;
  .hint {
    margin: 24px 0;
    text-align: center;
    color: #aaa;
  }
`],[`
  margin-top: 16px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  overflow: auto;
  .hint {
    margin: 24px 0;
    text-align: center;
    color: #aaa;
  }
`]),vr=Ee.ZP.div(rr),d=Ee.ZP.div(mr,function(n){return n.color},function(n){return(0,oe.default)(n.color).darken(20).toString()},function(n){return n.color},function(n){return n.color}),Z=Ee.ZP.div(gr);function se(n){var r=n.buttonList,o=n.errorBtns,t=n.count,l=n.style,a=n.config,s=n.width,p=n.explain,v=n.activeIndex,c=n.onClick,h=(0,Ln.Z)(n,["buttonList","errorBtns","count","style","config","width","explain","activeIndex","onClick"]),u=a||{},b=u.btnType,m=u.direction,g=m===void 0?1:m,x=b===2?!0:s===1,F=function(){return x?{width:100/t+"%"}:{}},C=N().chunk(r,t);return e.createElement(Z,null,e.createElement("div",{className:"hint"},_l("\u9009\u62E9\u4E0B\u65B9\u9884\u89C8\u5361\u7247\u4E2D\u7684\u6309\u94AE\u8FDB\u884C\u8BBE\u7F6E")),e.createElement(vr,null,p&&e.createElement("div",{className:"explain"},p),e.createElement(Va,null,C.map(function(y,S){return e.createElement("div",{key:S,className:E()("chunkListWrap",{center:!x})},y.map(function(w,L){var W=w.color,B=w.name,Y=w.config,z=b===2?"custom_actions":null,K=N().get(Y,"icon")||z,ne=K?md.global.FileStoreConfig.pubHost+"/customIcon/"+K+".svg":N().get(Y,"iconUrl"),fe=S*t+L;return e.createElement(d,{key:L,style:(0,f.default)({},F()),color:W,onClick:function(){return c({index:fe})}},e.createElement("div",{className:E()("btnBox",{isFullWidth:x,active:v===fe,error:o.includes(L),adjustText:l===3,noMargin:b===2,horizontal:b===2&&g===2})},b===2?e.createElement(fa,{className:E()("valignWrapper",g===1?"column":"row"),color:W,radius:l===1?g===1?"16px":"12px":"50%"},ne&&e.createElement("div",{className:"iconWrap flexRow valignWrapper"},e.createElement(ve.Z,{url:ne,fill:l===3?W:"#fff",size:g===1?36:28})),e.createElement("div",{className:"nameWrap valignWrapper"},e.createElement("div",{className:"name"},B))):e.createElement(V.ZP,{fullWidth:x,radius:l===2,icon:ne?null:w.icon},ne&&e.createElement(ve.Z,{url:ne,fill:l===3?W:"#fff",size:20}),e.createElement("span",{className:"overflow_ellipsis"},B))))}))}))))}var De=i(39281),zn=i(74048),hn=i(25130),An=i(64713),ht=i(44336),Gn=i(74253),Dn=i(3540),Kn=i(43727),Tn=i(45231),at=i(67332),Pt=i(49365),Wt=i(35710),Yt=(0,xe.Z)([`
  .ant-btn,
  .ant-btn:hover,
  .ant-btn:focus {
    width: 80px;
    background: `,`;
    border-color: `,`;
  }
  .ant-btn:hover {
    .arrowWrap {
      opacity: 1;
    }
  }
  .ant-btn {
    text-shadow: none;
    box-shadow: none;
    height: 36px;
    border-radius: 0 3px 3px 0 !important;
  }
  .arrowWrap {
    opacity: 0;
    justify-content: center;
    position: absolute;
    right: 9px;
    top: 10px;
    background: #00000042;
    border-radius: 50%;
    font-size: 12px;
    padding: 2px;
    .icon {
      position: relative;
      top: 1px;
    }
  }
`],[`
  .ant-btn,
  .ant-btn:hover,
  .ant-btn:focus {
    width: 80px;
    background: `,`;
    border-color: `,`;
  }
  .ant-btn:hover {
    .arrowWrap {
      opacity: 1;
    }
  }
  .ant-btn {
    text-shadow: none;
    box-shadow: none;
    height: 36px;
    border-radius: 0 3px 3px 0 !important;
  }
  .arrowWrap {
    opacity: 0;
    justify-content: center;
    position: absolute;
    right: 9px;
    top: 10px;
    background: #00000042;
    border-radius: 50%;
    font-size: 12px;
    padding: 2px;
    .icon {
      position: relative;
      top: 1px;
    }
  }
`]),Gt=Ee.ZP.div(Yt,function(n){return n.color},function(n){return n.color});function oa(n){var r=n.pageId,o=n.projectId,t=n.btnSetting,l=n.btnConfig,a=n.setBtnSetting,s=t.name,p=t.color,v=t.config,c=l||{},h=c.btnType,u=h===void 0?1:h,b=u===2?{iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/custom_actions.svg"}:{},m=v||b,g=m.icon,x=m.iconUrl,F=(0,e.useState)(!1),C=(0,H.Z)(F,2),y=C[0],S=C[1],w=function(){S(!1)};return e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u6309\u94AE\u540D\u79F0")),e.createElement(St.default.Group,{compact:!0},e.createElement(St.default,{value:s,style:{width:"calc(100% - 80px)"},onChange:function(W){var B=W.target.value;a((0,f.default)({},t,{name:B}))}}),e.createElement(te.Z,{action:["click"],zIndex:1e3,popupAlign:{points:["tl","bl"],offset:[-570,5],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(Wt.Z,{hideInput:!0,iconColor:p,workSheetId:r,projectId:o,icon:g,className:"customPageBtnSelectIcon",onModify:function(W){var B=W.iconColor,Y=W.icon,z=W.iconUrl;B&&a((0,f.default)({},t,{color:B})),(Y||z)&&a((0,f.default)({},t,{config:(0,f.default)({},v,{icon:Y,iconUrl:z})}))},onClearIcon:u===1?function(){a((0,f.default)({},t,{icon:"",config:(0,f.default)({},v,{icon:"",iconUrl:""})}))}:void 0,onClickAway:w,onClose:w})},e.createElement(Gt,{color:p},e.createElement(vt.default,{type:"primary",onClick:function(){S(!0)}},e.createElement(ve.Z,{url:x,fill:"#fff",size:22}),e.createElement("div",{className:"arrowWrap valignWrapper"},e.createElement(O.Z,{icon:"arrow-down-border"})))))))}var or=i(21459),ja=i(29383),Ca=i(68976),Qt=i(86674),fo=(0,xe.Z)([`
  color: #2196f3;
  border-radius: 3px;
  padding: 8px 7px;
  width: 108px;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  justify-content: center;
  &:hover {
    background-color: #fafafa;
  }
`],[`
  color: #2196f3;
  border-radius: 3px;
  padding: 8px 7px;
  width: 108px;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  justify-content: center;
  &:hover {
    background-color: #fafafa;
  }
`]),mo=(0,xe.Z)([`
  width: 300px;
  box-shadow: 0 4px 20px #00000021, 0 2px 6px #0000001a;
  border-radius: 3px;
  .sortColumnWrap {
    margin-top: 2px !important;
    padding: 6px 0;
    border-radius: 3px;
  }
  .quickOperate {
    display: none;
  }
  .columnCheckList {
    max-height: 360px !important;
  }
`],[`
  width: 300px;
  box-shadow: 0 4px 20px #00000021, 0 2px 6px #0000001a;
  border-radius: 3px;
  .sortColumnWrap {
    margin-top: 2px !important;
    padding: 6px 0;
    border-radius: 3px;
  }
  .quickOperate {
    display: none;
  }
  .columnCheckList {
    max-height: 360px !important;
  }
`]),go=(0,xe.Z)([`
  width: 100%;
  .optionsCon {
    border-radius: 4px;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #ffffff;
    height: 36px;
    line-height: 36px;
    width: 100%;
    position: relative;
    .txt {
      display: block;
      width: 100%;
      line-height: 36px;
      height: 100%;
    }
  }
  .settingItemTitle {
    display: none;
  }
  & > div {
    margin-top: 0;
  }
  &.notOther {
    & > div {
      & > div {
        & > div:nth-child(1) {
          width: calc(100%) !important;
          border-radius: 4px !important;
        }
      }
    }
    .tagInputarea .tagInputareaIuput,
    .CityPicker-input-container input {
      border-radius: 4px !important;
    }
    .ant-input {
      width: calc(100%) !important;
      border-radius: 4px !important;
      &:hover {
        border-color: #ccc !important;
      }
    }
    .ant-input:focus,
    .ant-input-focused {
      border-color: #2196f3 !important;
      box-shadow: none !important;
    }
    .selectOtherFieldContainer {
      display: none;
      & > div {
        display: none;
      }
    }
  }
`],[`
  width: 100%;
  .optionsCon {
    border-radius: 4px;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #ffffff;
    height: 36px;
    line-height: 36px;
    width: 100%;
    position: relative;
    .txt {
      display: block;
      width: 100%;
      line-height: 36px;
      height: 100%;
    }
  }
  .settingItemTitle {
    display: none;
  }
  & > div {
    margin-top: 0;
  }
  &.notOther {
    & > div {
      & > div {
        & > div:nth-child(1) {
          width: calc(100%) !important;
          border-radius: 4px !important;
        }
      }
    }
    .tagInputarea .tagInputareaIuput,
    .CityPicker-input-container input {
      border-radius: 4px !important;
    }
    .ant-input {
      width: calc(100%) !important;
      border-radius: 4px !important;
      &:hover {
        border-color: #ccc !important;
      }
    }
    .ant-input:focus,
    .ant-input-focused {
      border-color: #2196f3 !important;
      box-shadow: none !important;
    }
    .selectOtherFieldContainer {
      display: none;
      & > div {
        display: none;
      }
    }
  }
`]),vo=Ee.ZP.div(fo),ho=Ee.ZP.div(mo),bo=Ee.ZP.div(go),xo=Ca.wX.concat(Ca.up);function yo(n){var r=n.projectId,o=n.appId,t=n.btnId,l=n.worksheetId,a=n.controls,s=n.config,p=n.onChangeConfig,v=s||{},c=v.temporaryWriteControls,h=c===void 0?[]:c,u=v.isEmptyWriteControls,b=(0,e.useState)(h.map(function(y){return y.controlId})),m=(0,H.Z)(b,2),g=m[0],x=m[1];(0,e.useEffect)(function(){t&&N().isEmpty(h)&&!u&&Tn.Z.getWorksheetBtnByID({appId:o,worksheetId:l,btnId:t}).then(function(y){var S=y.writeControls;F(S),x(S.map(function(w){return w.controlId}))})},[t]);var F=function(S){p((0,f.default)({},s,{temporaryWriteControls:S,isEmptyWriteControls:S.length?void 0:!0}))},C=function(S){var w=N().find(a,{controlId:S.controlId});if(N().isEmpty(w))return null;var L=(0,f.default)({},N().omit(w.advancedSetting,["dynamicsrc","defaultfunc"]),{defaulttype:""});return w.type===34&&S.defsource&&(L.defaulttype="0"),e.createElement("div",{className:"mBottom15",key:w.controlId},e.createElement("div",{className:"mBottom10 Font13"},w.controlName),e.createElement("div",{className:"valignWrapper"},e.createElement(bo,{className:E()({notOther:![26,15,16,17,18,46].includes(w.type)||w.type===34})},e.createElement(ja.Z,{item:S,data:(0,f.default)({},w,{advancedSetting:(0,f.default)({},L,{defsource:S.defsource})}),writeObject:1,allControls:a,globalSheetInfo:{projectId:r,appId:o,worksheetId:l},titleControl:(N().get(w,["relationControls"])||[]).find(function(W){return W.attribute===1}),onChange:function(B,Y){var z=B.advancedSetting,K=z===void 0?{}:z,ne=K.defsource;Y&&(ne=B);var fe=h.map(function(J){return J.controlId===w.controlId?(0,f.default)({},J,{defsource:ne}):J});F(fe)}})),e.createElement(O.Z,{className:"Font18 Gray_9e pointer mLeft5",icon:"delete_12",onClick:function(){var B=h.filter(function(Y){return Y.controlId!==w.controlId});F(B),x(B.map(function(Y){return Y.controlId}))}})))};return e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle valignWrapper mBottom10"},e.createElement("span",null,_l("\u9ED8\u8BA4\u503C")),e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\u521B\u5EFA\u8BB0\u5F55\u65F6\uFF0C\u5C06\u4F1A\u4F18\u5148\u751F\u6548\u6B64\u5904\u914D\u7F6E\u7684\u9ED8\u8BA4\u503C"))},e.createElement(O.Z,{className:"mLeft5 Gray_9e Font16 pointer",icon:"novice-circle"}))),h.map(function(y){return C(y)}),e.createElement(te.Z,{action:["click"],popupAlign:{points:["tl","bl"],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(ho,null,e.createElement(or.Z,{layout:2,noShowCount:!0,noempty:!1,dragable:!1,showControls:g,columns:a.filter(function(y){return Qt.c_.includes(y.controlId)||y.type===29&&N().get(y,["advancedSetting","showtype"])==="2"?!1:xo.includes(y.type)}),onChange:function(S){var w=S.newShowControls,L=w.filter(function(z){return!g.includes(z)})[0],W=g.filter(function(z){return!w.includes(z)})[0];if(x(w),L){var B=N().find(a,{controlId:L}),Y={controlId:B.controlId,type:2,defsource:void 0};F(h.concat(Y))}W&&F(h.filter(function(z){return z.controlId!==W}))}}))},e.createElement(vo,{className:"valignWrapper mTop10"},e.createElement(O.Z,{className:"Font16",icon:"add"}),e.createElement("span",null,_l("\u5B57\u6BB5\u9ED8\u8BA4\u503C")))))}const Co=yo;var ia=i(70801),wo=i(39612),Tr=i(57296),Eo=i(5420);function Io(n){var r=n.projectId,o=n.appId,t=n.worksheetId,l=n.filterId,a=n.controls,s=n.config,p=n.onChangeConfig,v=s.isFilter,c=s.filterConditions,h=c===void 0?[]:c,u=(0,e.useState)(!1),b=(0,H.Z)(u,2),m=b[0],g=b[1],x=(0,e.useState)([]),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=(0,Eo.cm)(a,h),w=function(W){p((0,f.default)({},s,W))};return(0,e.useEffect)(function(){l&&!h.length&&Tn.Z.getWorksheetFilterById({filterId:l}).then(function(L){var W=L.items,B=W===void 0?[]:W;y(B),w({filterConditions:B})})},[l]),e.createElement(e.Fragment,null,e.createElement(nt.default,{checked:v,onChange:function(W){h.length>0?w({isFilter:W.target.checked}):W.target.checked&&g(!0)}},_l("\u7B5B\u9009")),e.createElement(ia.Z,{visible:m,title:_l("\u7B5B\u9009"),okText:_l("\u786E\u5B9A"),cancelText:_l("\u53D6\u6D88"),onCancel:function(){g(!1)},onOk:function(){C.length?(w({filterConditions:C,isFilter:!0}),g(!1)):C.length?g(!1):alert(_l("\u8BF7\u9009\u62E9\u7B5B\u9009\u6761\u4EF6"),3)}},e.createElement(wo.Z,{canEdit:!0,feOnly:!0,supportGroup:!0,filterColumnClassName:"showBtnFilter",projectId:r,appId:o,columns:a,conditions:h,filterResigned:!1,onConditionsChange:function(W){y(W)}})),v&&e.createElement(Tr.Z,{filterItemTexts:S,loading:!1,editFn:function(){return g(!0)}}))}var So=i(86853),ko=i(56171),No=i(12692),Po=(0,xe.Z)([`
  align-items: flex-start;
  .tagInputareaIuput {
    border-radius: 3px 0 0 3px !important;
  }
  .CodeMirror-sizer {
    line-height: 26px !important;
  }
  .CodeMirror-lines {
    padding: 3px 0 !important;
  }
  .columnTagCon {
    padding: 0px 4px !important;
  }
  .selectField {
    height: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 3px 3px 0;
    display: flex;
    align-items: center;
    background: #fff;
  }
`],[`
  align-items: flex-start;
  .tagInputareaIuput {
    border-radius: 3px 0 0 3px !important;
  }
  .CodeMirror-sizer {
    line-height: 26px !important;
  }
  .CodeMirror-lines {
    padding: 3px 0 !important;
  }
  .columnTagCon {
    padding: 0px 4px !important;
  }
  .selectField {
    height: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 3px 3px 0;
    display: flex;
    align-items: center;
    background: #fff;
  }
`]),To=(0,xe.Z)([`
  font-size: 12px;
  line-height: 24px;
  padding: 0 12px;
  border-radius: 16px;
  background: #d8eeff;
  color: #174c76;
  border: 1px solid #bbd6ea;
  &.invalid {
    color: #f44336;
    background: rgba(244, 67, 54, 0.06);
    border-color: #f44336;
  }
`],[`
  font-size: 12px;
  line-height: 24px;
  padding: 0 12px;
  border-radius: 16px;
  background: #d8eeff;
  color: #174c76;
  border: 1px solid #bbd6ea;
  &.invalid {
    color: #f44336;
    background: rgba(244, 67, 54, 0.06);
    border-color: #f44336;
  }
`]),Fo=Ee.ZP.div(Po),Wo=Ee.ZP.div(To),hr=[{value:"codeResult",text:_l("\u626B\u7801\u7ED3\u679C")},{value:"triggerUser",text:_l("\u89E6\u53D1\u8005")},{value:"triggerDepartment",text:_l("\u89E6\u53D1\u8005\u6240\u5728\u7684\u90E8\u95E8")},{value:"triggerTime",text:_l("\u89E6\u53D1\u65F6\u95F4")}];function Zo(n){var r=n.item,o=n.inputData,t=n.action,l=n.onChange,a=o.value,s=a===void 0?[]:a,p=o.type,v=s.map(function(u){return u.cid?"$"+u.cid+"$":u.staticValue}).join(""),c=(0,e.useRef)(null),h=p===Qt.DN.USER_PICKER;return e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle Normal"},r.text,r.required&&e.createElement("i",{className:"Red"},"*")),e.createElement(Fo,{className:"flexRow w100"},e.createElement("div",{className:"flex"},e.createElement(No.Z,{defaultValue:v,getRef:function(b){c.current=b},renderTag:function(b,m){var g=N().find(hr,{value:b}),x=g.text;return e.createElement(Wo,{className:"flexRow valignWrapper"},x)},onChange:function(b,m,g){if(!b){var x=N().filter(m.split("$"),function(C){return!N().isEmpty(C)}),F=x.map(function(C){var y=N().find(hr,{value:C});return y?{cid:y.value,staticValue:""}:{cid:"",staticValue:C}});l(h?F.filter(function(C){return C.cid}):F)}}})),e.createElement(Vt.default,{trigger:"click",placement:"bottomRight",getPopupContainer:function(){return document.querySelector(".customPageButtonWrap .settingsBox")},overlay:e.createElement("div",{style:{width:"302px"}},e.createElement(So.Z,{style:{position:"inherit"}},hr.filter(function(u){return!(t===6&&u.value=="codeResult"||h&&u.value=="triggerTime")}).map(function(u){return e.createElement(ko.Z,{key:u.value,onClick:function(){c.current.insertColumnTag(u.value)}},u.text)})))},e.createElement("div",{"data-tip":_l("\u4F7F\u7528\u52A8\u6001\u53C2\u6570"),className:"selectField pointer tip-top-left"},e.createElement("i",{className:"icon-workflow_other Font22 "})))))}var Ro=i(2697),Fr=i(42638),Lo=i(81912);function Wr(n){var r=n.appId,o=n.projectId,t=n.btnSetting,l=n.setDataSource,a=n.setBtnSetting,s=t.processId,p=t.config,v=p===void 0?{}:p,c=(0,e.useState)([]),h=(0,H.Z)(c,2),u=h[0],b=h[1],m=(0,e.useState)([]),g=(0,H.Z)(m,2),x=g[0],F=g[1],C=(0,e.useState)(null),y=(0,H.Z)(C,2),S=y[0],w=y[1],L=(0,e.useState)(!1),W=(0,H.Z)(L,2),B=W[0],Y=W[1],z=function(){Lo.Z.list({relationId:r,processListType:10}).then(function(P){var j=P[0]||{},G=j.processList,q=G===void 0?[]:G,X=j.groupName;b(q.map(function(ue){return{text:ue.name,value:ue.id}}))})};(0,e.useEffect)(function(){F([]),w(null)},[t.id]),(0,e.useEffect)(function(){if(N().get(t,["config","text"])===2&&N().isEmpty(u)){z();return}if(N().get(t,["action"])===6&&N().isEmpty(u)){z();return}},[t.config,t.action]),(0,e.useEffect)(function(){if(t.processId){var J=t.config||{},P=J.inputs,j=P===void 0?[]:P;l({inputs:j}),Fr.Z.getProcessApiInfo({processId:t.processId}).then(function(G){G.relationId!==r&&Pn.Z.getApp({appId:G.relationId}).then(function(q){w({appName:q.name,processName:G.name})}),F(G.inputs.map(function(q){return{text:q.controlName,value:q.controlId,required:q.required}})),a((0,f.default)({},t,{config:(0,f.default)({},v,{inputs:G.inputs.map(function(q){var X=N().find(j,{controlId:q.controlId});return(0,f.default)({},q,{value:X?X.value:[]})})})}))})}},[t.id,t.processId]);var K=function(P){w(null),a((0,f.default)({},t,{processId:P,config:(0,f.default)({},v,{inputs:[]})}))},ne=[{text:_l("\u5176\u5B83\u5E94\u7528\u4E0B\u7684\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B"),value:"other",className:"Gray_75"}],fe=N().find(u,{value:s});return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u9009\u62E9\u4E1A\u52A1\u6D41\u7A0B")),e.createElement(Kn.Z,{border:!0,openSearch:!0,value:s,data:[u,ne],renderTitle:S?function(){return e.createElement(e.Fragment,null,e.createElement("span",null,S.processName),e.createElement("span",{className:"Gray_75 mLeft5"},"("+S.appName+")"))}:void 0,onChange:function(P){P==="other"?Y(!0):K(P)},style:{width:"100%",background:"#fff"},menuStyle:{width:"100%"},placeholder:_l("\u8BF7\u9009\u62E9\u4E1A\u52A1\u6D41\u7A0B"),noData:_l("\u6682\u65E0\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u8BF7\u5148\u5728\u5E94\u7528\u91CC\u521B\u5EFA")})),x.map(function(J){return e.createElement(Zo,{key:J.value,item:J,action:t.action,inputData:N().find(N().get(t,["config","inputs"])||[],{controlId:J.value})||[],onChange:function(j){var G=N().get(t,["config","inputs"])||[],q=G.map(function(X){return X.controlId===J.value?(0,f.default)({},X,{value:j}):X});a((0,f.default)({},t,{config:(0,f.default)({},v,{inputs:q})}))}})}),B&&e.createElement(Ro.Z,{appId:r,companyId:o,onOk:function(P){K(P.selectPBCId)},onCancel:function(){Y(!1)}}))}var jo=function(n){(0,je.default)(r,n);function r(){var o,t,l,a;(0,be.default)(this,r);for(var s=arguments.length,p=Array(s),v=0;v<s;v++)p[v]=arguments[v];return a=(t=(l=(0,Fe.default)(this,(o=r.__proto__||A()(r)).call.apply(o,[this].concat(p))),l),l.state={doubleConfirm:l.props.doubleConfirm||{confirmMsg:_l("\u4F60\u786E\u8BA4\u5BF9\u8BB0\u5F55\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"),cancelName:_l("\u53D6\u6D88"),sureName:_l("\u786E\u8BA4")},showDoubleConfirmDialog:l.props.showDoubleConfirmDialog},t),(0,Fe.default)(l,a)}return(0,We.default)(r,[{key:"render",value:function(){var t=this;return e.createElement(ia.Z,{title:_l("\u4E8C\u6B21\u786E\u8BA4"),okText:_l("\u4FDD\u5B58"),cancelText:_l("\u53D6\u6D88"),className:"doubleConfirmDialog",width:"560px",maxHeight:"800px",onCancel:function(){t.props.setValue((0,f.default)({},t.props,{showDoubleConfirmDialog:!1}))},onOk:function(){var a=t.state.doubleConfirm,s=a===void 0?{}:a,p=s.confirmMsg,v=p===void 0?"":p,c=s.sureName,h=c===void 0?"":c,u=s.cancelName,b=u===void 0?"":u;t.props.setValue({doubleConfirm:{confirmMsg:v.trim(),sureName:h.trim(),cancelName:b.trim()},showDoubleConfirmDialog:!1})},visible:this.props.showDoubleConfirmDialog},e.createElement("p",{className:"mTop10 mBottom10"},_l("\u63D0\u793A\u6587\u5B57")),e.createElement("textarea",{type:"textarea",ref:"txt",value:this.state.doubleConfirm.confirmMsg,onChange:function(a){t.setState({doubleConfirm:(0,f.default)({},t.state.doubleConfirm,{confirmMsg:a.target.value})})}}),e.createElement("p",{className:"mTop10 mBottom10"},_l("\u786E\u8BA4\u6309\u94AE\u6587\u5B57")),e.createElement("input",{value:this.state.doubleConfirm.sureName,onChange:function(a){t.setState({doubleConfirm:(0,f.default)({},t.state.doubleConfirm,{sureName:a.target.value})})}}),e.createElement("p",{className:"mTop10 mBottom10"},_l("\u53D6\u6D88\u6309\u94AE\u6587\u5B57")),e.createElement("input",{value:this.state.doubleConfirm.cancelName,onChange:function(a){t.setState({doubleConfirm:(0,f.default)({},t.state.doubleConfirm,{cancelName:a.target.value})})}}))}}]),r}(e.Component);const Oo=jo;var Do=(0,xe.Z)([`
  width: 100%;
  background: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 8px 16px 10px;
  box-sizing: border-box;
  color: #333;
  margin-top: 10px;
  display: flex;

  .txtFilter {
    flex: 1;
    font-size: 13px;
    color: #333;
    line-height: 20px;

    p {
      line-height: 22px;
      padding: 0;
      margin: 0;
      display: flex;

      .titleTxt {
        width: 100px;
        font-size: 13px;
        line-height: 22px;
        display: inline-block;
      }

      .txt {
        flex: 1;
        font-weight: 500;
        font-size: 13px;
      }
    }
  }

  .editFilter {
    width: 20px;

    &:hover {
      color: #2196f3 !important;
    }
  }

  .editWorkflow {
    width: auto;
    color: #2196f3;
  }
`],[`
  width: 100%;
  background: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 8px 16px 10px;
  box-sizing: border-box;
  color: #333;
  margin-top: 10px;
  display: flex;

  .txtFilter {
    flex: 1;
    font-size: 13px;
    color: #333;
    line-height: 20px;

    p {
      line-height: 22px;
      padding: 0;
      margin: 0;
      display: flex;

      .titleTxt {
        width: 100px;
        font-size: 13px;
        line-height: 22px;
        display: inline-block;
      }

      .txt {
        flex: 1;
        font-weight: 500;
        font-size: 13px;
      }
    }
  }

  .editFilter {
    width: 20px;

    &:hover {
      color: #2196f3 !important;
    }
  }

  .editWorkflow {
    width: auto;
    color: #2196f3;
  }
`]),Bo=Ee.ZP.div(Do);function _o(n){var r=n.config,o=n.btnSetting,t=n.setBtnSetting,l=N().isObject(r)?r:{},a=l.clickType,s=l.confirmMsg,p=l.sureName,v=l.cancelName,c=(0,e.useState)(!1),h=(0,H.Z)(c,2),u=h[0],b=h[1];return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u70B9\u51FB\u540E")),e.createElement(An.default.Group,{value:a,onChange:function(g){t((0,f.default)({},o,{config:(0,f.default)({},r,{clickType:g.target.value})}))}},e.createElement(An.default,{value:1},_l("\u7ACB\u5373\u6267\u884C")),e.createElement(An.default,{value:2},_l("\u9700\u8981\u4E8C\u6B21\u786E\u8BA4")))),a===2&&e.createElement("div",{className:"settingItem mTop12"},e.createElement(Bo,null,e.createElement("div",{className:"txtFilter"},e.createElement("p",null,e.createElement("span",{className:"titleTxt Gray"},_l("\u63D0\u793A\u6587\u5B57")),e.createElement("span",{className:"txt Gray breakAll"},s)),e.createElement("p",{className:"mTop5"},e.createElement("span",{className:"titleTxt Gray"},_l("\u786E\u8BA4\u6309\u94AE\u6587\u5B57")),e.createElement("span",{className:"txt Gray breakAll"},p)),e.createElement("p",{className:"mTop5"},e.createElement("span",{className:"titleTxt Gray"},_l("\u53D6\u6D88\u6309\u94AE\u6587\u5B57")),e.createElement("span",{className:"txt Gray breakAll"},v))),e.createElement(O.Z,{icon:"hr_edit",className:"Gray_9d Font18 editFilter Hand",onClick:function(){b(!0)}}))),u&&e.createElement(Oo,{doubleConfirm:{confirmMsg:s,sureName:p,cancelName:v},setValue:function(g){var x=g.doubleConfirm,F=x===void 0?{}:x,C=g.showDoubleConfirmDialog;t((0,f.default)({},o,{config:(0,f.default)({},r,{confirmMsg:F.confirmMsg,sureName:F.sureName,cancelName:F.cancelName})})),b(C)},showDoubleConfirmDialog:u}))}var wa=i(89499),zo=(0,xe.Z)([`
  display: flex;
  flex-direction: column;
  flex-basis: 360px;
  background-color: #f8f8f8;
  padding: 16px 0;
  .btnDisplayTab {
    display: flex;
    padding: 0 24px;
    li {
      flex: 1;
      padding-bottom: 16px;
      text-align: center;
      border-bottom: 3px solid #eee;
      transition: all 0.25s;
      cursor: pointer;
      &.active {
        color: #2196f3;
        border-bottom-color: #2196f3;
      }
    }
  }
  .selectActionBox {
    border-radius: 3px;
    padding: 5px 0;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    .ant-radio-group, .ant-space {
      width: 100%;
    }
    .ant-space {
      gap: 0 !important;
    }
    .ant-space-item {
      padding: 7px 10px;
      margin-bottom: 0 !important;
      &:hover {
        background-color: #fafafa;
      }
    }
  }
  .settingsBox {
    flex: 1;
    overflow-y: auto;
  }
  .delBtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 24px 2px;
    .iconWrap {
      color: #9d9d9d;
      cursor: pointer;
      display: flex;
      &:hover {
        color: #757575;
      }
    }
  }
  .settingItem {
    margin-top: 20px;
    padding: 0 24px;
    &:first-child {
      margin-top: 0;
    }
    .Dropdown--input {
      background-color: #fff;
    }
    .settingTitle {
      font-weight: bold;
      margin-bottom: 8px;
    }
    .typeSelect {
      font-size: 13px;
      border-radius: 3px;
      padding: 3px;
      background-color: #eff0f0;
      >div {
        height: 25px;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        color: #2196F3 !important;
        border-radius: 3px;
        padding: 3px 0;
        font-weight: bold;
        background-color: #fff;
      }
    }
    .colorsWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      li {
        position: relative;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        &:not(.isCurrentColor):hover {
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
        & > .icon {
          color: #fff;
        }
      }
    }
    .iconsWrap {
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      li {
        width: 36px;
        text-align: center;
        margin-right: 3px;
        border-radius: 3px;
        cursor: pointer;
        color: #9e9e9e;
        &.isCurrent {
          color: #fff;
        }
        & > .icon {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
    .ant-checkbox-input, .ant-radio-input {
      position: absolute;
    }
    .ant-input {
      font-size: 13px;
      box-shadow: none;
      padding: 7px 11px;
      border-radius: 3px 0 0 3px !important;
    }
  }
  .customPageBtnSelectIcon {
    .inputWrap {
      display: none;
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  flex-basis: 360px;
  background-color: #f8f8f8;
  padding: 16px 0;
  .btnDisplayTab {
    display: flex;
    padding: 0 24px;
    li {
      flex: 1;
      padding-bottom: 16px;
      text-align: center;
      border-bottom: 3px solid #eee;
      transition: all 0.25s;
      cursor: pointer;
      &.active {
        color: #2196f3;
        border-bottom-color: #2196f3;
      }
    }
  }
  .selectActionBox {
    border-radius: 3px;
    padding: 5px 0;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    .ant-radio-group, .ant-space {
      width: 100%;
    }
    .ant-space {
      gap: 0 !important;
    }
    .ant-space-item {
      padding: 7px 10px;
      margin-bottom: 0 !important;
      &:hover {
        background-color: #fafafa;
      }
    }
  }
  .settingsBox {
    flex: 1;
    overflow-y: auto;
  }
  .delBtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 24px 2px;
    .iconWrap {
      color: #9d9d9d;
      cursor: pointer;
      display: flex;
      &:hover {
        color: #757575;
      }
    }
  }
  .settingItem {
    margin-top: 20px;
    padding: 0 24px;
    &:first-child {
      margin-top: 0;
    }
    .Dropdown--input {
      background-color: #fff;
    }
    .settingTitle {
      font-weight: bold;
      margin-bottom: 8px;
    }
    .typeSelect {
      font-size: 13px;
      border-radius: 3px;
      padding: 3px;
      background-color: #eff0f0;
      >div {
        height: 25px;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        color: #2196F3 !important;
        border-radius: 3px;
        padding: 3px 0;
        font-weight: bold;
        background-color: #fff;
      }
    }
    .colorsWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      li {
        position: relative;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        &:not(.isCurrentColor):hover {
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
        & > .icon {
          color: #fff;
        }
      }
    }
    .iconsWrap {
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      li {
        width: 36px;
        text-align: center;
        margin-right: 3px;
        border-radius: 3px;
        cursor: pointer;
        color: #9e9e9e;
        &.isCurrent {
          color: #fff;
        }
        & > .icon {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
    .ant-checkbox-input, .ant-radio-input {
      position: absolute;
    }
    .ant-input {
      font-size: 13px;
      box-shadow: none;
      padding: 7px 11px;
      border-radius: 3px 0 0 3px !important;
    }
  }
  .customPageBtnSelectIcon {
    .inputWrap {
      display: none;
    }
  }
`]),Ao=Ee.ZP.div(zo),Go=[{text:_l("\u8BBE\u7F6E\u6309\u94AE"),type:"setting"},{text:_l("\u5361\u7247\u8BF4\u660E"),type:"explain"}],br=[{text:_l("\u521B\u5EFA\u8BB0\u5F55"),value:1,svgIcon:"plus"},{text:_l("\u6253\u5F00\u89C6\u56FE"),value:2,svgIcon:"1_worksheet"},{text:_l("\u6253\u5F00\u81EA\u5B9A\u4E49\u9875\u9762"),value:3,svgIcon:"hr_workbench"},{text:_l("\u6253\u5F00\u94FE\u63A5"),value:4,svgIcon:"16_5_globe_earth"},{text:_l("\u626B\u7801"),value:5,svgIcon:"qr_code_19"},{text:_l("\u8C03\u7528\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B"),value:6,svgIcon:"custom_actions"}],xr=[{value:1,text:_l("\u5F53\u524D\u9875\u9762")},{value:2,text:_l("\u65B0\u9875\u9762")}],Mo={qrCodeIsOpen:!0,barCodeIsOpen:!0,recordLink:1,otherLink:0,text:0,isFilter:!1},$o={clickType:1,confirmMsg:_l("\u4F60\u786E\u8BA4\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"),cancelName:_l("\u53D6\u6D88"),sureName:_l("\u786E\u8BA4")},Ha=null;function Vo(n){var r=n.activeIndex,o=n.appPkg,t=o===void 0?{}:o,l=n.ids,a=l===void 0?{}:l,s=n.btnSetting,p=n.btnConfig,v=n.explain,c=n.setBtnSetting,h=n.setSetting,u=n.onDel,b=n.onCopy,m=a.appId,g=a.pageId,x=(0,e.useState)("setting"),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=(0,e.useState)(s.param||[]),w=(0,H.Z)(S,2),L=w[0],W=w[1],B=(0,e.useState)(!0),Y=(0,H.Z)(B,2),z=Y[0],K=Y[1],ne=t.projectId||t.id,fe=(0,ua.Z)({worksheets:[],views:[],pages:[],controls:[],inputs:[]}),J=(0,H.Z)(fe,2),P=J[0],j=J[1],G={action:"",viewId:"",openMode:1,value:""},q=P.worksheets,X=P.views,ue=P.pages,ce=P.controls,he=s.name,Se=s.action,ke=s.viewId,$e=s.searchId,Qe=s.filterId,nn=s.openMode,kn=s.icon,In=s.color,Fn=s.btnId,yn=s.value,rt=s.param,Zn=s.config;(0,e.useEffect)(function(){W(s.param||[])},[s.param]),(0,e.useEffect)(function(){Pt.Z.getAppForManager({projectId:ne}).then(function(wn){if(Array.isArray(wn)){var rn=[],Cn=[];N().forEach(wn,function(tn){var Je=tn.workSheetInfo;N().forEach(Je,function(on){on.type===1&&Cn.push(on),rn.push(on)})}),j({worksheets:rn.map(function(tn){var Je=tn.workSheetId,on=tn.workSheetName;return{value:Je,text:on}}),pages:Cn.map(function(tn){var Je=tn.workSheetName,on=tn.workSheetId;return{text:Je,value:on}})})}})},[]),(0,e.useEffect)(function(){yn&&N().includes([1,2,5],Se)&&(Ha&&Ha.abort&&Ha.abort(),K(!0),Ha=Tn.Z.getWorksheetInfo({worksheetId:yn,getTemplate:!0,getViews:!0,appId:m}),Ha.then(function(wn){var rn=wn.views,Cn=rn===void 0?[]:rn,tn=wn.template,Je=(0,wa.zj)(m,tn.controls);j({views:Cn.map(function(on){var un=on.viewId,gn=on.name,bn=on.viewType;return{text:(0,Oe.T3)(m,un).name||gn,value:un,type:bn}}),controls:Je}),Se===1&&c((0,f.default)({},s,{config:(0,f.default)({},Zn,{controls:Je})})),K(!1)}))},[yn,Se,r]);var ot=function(){if(Se===1)return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u5DE5\u4F5C\u8868")),e.createElement(at.Z,{dialogClassName:"btnSettingSelectDialog",worksheetType:0,projectId:ne,appId:m,value:yn,onChange:function(Ie,qe){c((0,f.default)({},s,{btnId:null,value:qe,config:(0,f.default)({},Zn,{temporaryWriteControls:[]})}))}})),yn&&!N().isEmpty(ce)&&!z&&e.createElement(Co,{appId:m,btnId:Fn,worksheetId:yn,projectId:ne,controls:ce,config:Zn,onChangeConfig:function(Ie){c((0,f.default)({},s,{config:Ie}))}}));if(Se===2)return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u5DE5\u4F5C\u8868")),e.createElement(at.Z,{dialogClassName:"btnSettingSelectDialog",worksheetType:0,projectId:ne,appId:m,value:yn,onChange:function(Ie,qe){c((0,f.default)({},s,{value:qe}))}})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u89C6\u56FE")),e.createElement(Kn.Z,{disabled:!yn,value:ke||void 0,data:X,onChange:function(Ie){return c((0,f.default)({},s,{viewId:Ie}))},style:{width:"100%",background:"#fff"},menuStyle:{width:"100%"},placeholder:_l("\u9009\u62E9\u89C6\u56FE"),border:!0})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u6253\u5F00\u65B9\u5F0F")),e.createElement("div",{className:"typeSelect flexRow valignWrapper"},xr.map(function(Le){var Ie=Le.value,qe=Le.text;return e.createElement("div",{key:Ie,className:E()("flex centerAlign pointer Gray_75",{active:Ie===nn}),onClick:function(){return c((0,f.default)({},s,{openMode:Ie}))}},qe)}))));if(Se===3)return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u9875\u9762")),e.createElement(at.Z,{dialogClassName:"btnSettingSelectDialog",worksheetType:1,projectId:ne,appId:m,value:yn,onChange:function(Ie,qe){c((0,f.default)({},s,{value:qe}))}})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u6253\u5F00\u65B9\u5F0F")),e.createElement("div",{className:"typeSelect flexRow valignWrapper"},xr.map(function(Le){var Ie=Le.value,qe=Le.text;return e.createElement("div",{key:Ie,className:E()("flex centerAlign pointer Gray_75",{active:Ie===nn}),onClick:function(){return c((0,f.default)({},s,{openMode:Ie}))}},qe)}))));if(Se===4)return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u94FE\u63A5")),e.createElement(Dn.Z,{style:{width:"100%"},value:yn,onChange:function(Ie){return c((0,f.default)({},s,{value:Ie}))},placeholder:_l("\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740")}),yn&&e.createElement(Ot,{paras:L,setParas:function(Ie){W(Ie),c((0,f.default)({},s,{param:Ie}))}})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u6253\u5F00\u65B9\u5F0F")),e.createElement("div",{className:"typeSelect flexRow valignWrapper"},xr.concat([{value:3,text:_l("\u5F39\u7A97")}]).map(function(Le){var Ie=Le.value,qe=Le.text;return e.createElement("div",{key:Ie,className:E()("flex centerAlign pointer Gray_75",{active:Ie===nn}),onClick:function(){return c((0,f.default)({},s,{openMode:Ie}))}},qe)}))));if(Se===5){var rn=N().isObject(Zn)?Zn:{},Cn=rn.qrCodeIsOpen,tn=rn.barCodeIsOpen,Je=rn.recordLink,on=rn.otherLink,un=rn.text,gn=rn.placeholder,bn=rn.isFilter;return e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u5F15\u5BFC\u6587\u5B57")),e.createElement(Dn.Z,{className:"w100",value:gn,onChange:function(Ie){c((0,f.default)({},s,{config:(0,f.default)({},Zn,{placeholder:Ie})}))},placeholder:_l("\u8BF7\u8F93\u5165\u5F15\u5BFC\u6587\u5B57")})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u79FB\u52A8\u7AEF\u626B\u7801\u65B9\u5F0F")),e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex"},e.createElement(nt.default,{checked:Cn,onChange:function(Ie){var qe=Ie.target.checked;!qe&&!tn||c((0,f.default)({},s,{config:(0,f.default)({},Zn,{qrCodeIsOpen:qe})}))}},_l("\u626B\u63CF\u4E8C\u7EF4\u7801"))),e.createElement("div",{className:"flex"},e.createElement(nt.default,{checked:tn,onChange:function(Ie){var qe=Ie.target.checked;!qe&&!Cn||c((0,f.default)({},s,{config:(0,f.default)({},Zn,{barCodeIsOpen:qe})}))}},_l("\u626B\u63CF\u6761\u5F62\u7801"))))),e.createElement("div",{className:"settingItem"},e.createElement(Gn.Z,null)),e.createElement("div",{className:"settingItem"},_l("\u83B7\u5F97\u626B\u7801\u7ED3\u679C\u540E\u6267\u884C\u52A8\u4F5C")),Cn&&e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u8BB0\u5F55\u94FE\u63A5")),e.createElement(Kn.Z,{value:Je,data:[{text:_l("\u6253\u5F00\u8BB0\u5F55"),value:1},{text:_l("\u65E0"),value:0}],onChange:function(Ie){c((0,f.default)({},s,{config:(0,f.default)({},Zn,{recordLink:Ie})}))},menuStyle:{width:"100%"},style:{width:"100%",background:"#fff"},border:!0})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u5176\u4ED6\u94FE\u63A5")),e.createElement(Kn.Z,{value:on,data:[{text:_l("\u6253\u5F00\u94FE\u63A5"),value:1},{text:_l("\u65E0"),value:0}],onChange:function(Ie){c((0,f.default)({},s,{config:(0,f.default)({},Zn,{otherLink:Ie})}))},menuStyle:{width:"100%"},style:{width:"100%",background:"#fff"},border:!0}))),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u6587\u672C")),e.createElement(Kn.Z,{value:un,data:[{text:_l("\u641C\u7D22\u5E76\u6253\u5F00\u8BB0\u5F55"),value:1},{text:_l("\u8C03\u7528\u5C01\u88C5\u4E1A\u52A1\u6D41\u7A0B"),value:2},{text:_l("\u65E0"),value:0}],onChange:function(Ie){c((0,f.default)({},s,{config:(0,f.default)({},Zn,{inputs:[],text:Ie})}))},menuStyle:{width:"100%"},style:{width:"100%",background:"#fff"},border:!0})),un===1&&e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"Gray_75"},_l("\u6839\u636E\u626B\u7801\u7684\u6587\u672C\u7ED3\u679C\u641C\u7D22\u6570\u636E\uFF0C\u641C\u7D22\u5230\u4E00\u6761\u65F6\u76F4\u63A5\u6253\u5F00\u8BB0\u5F55\uFF0C\u641C\u7D22\u5230\u591A\u6761\u540E\u8FDB\u5165\u641C\u7D22\u7ED3\u679C\u5217\u8868\u3002"))),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle Normal"},_l("\u641C\u7D22\u5DE5\u4F5C\u8868")),e.createElement(at.Z,{dialogClassName:"btnSettingSelectDialog",worksheetType:0,projectId:ne,appId:m,value:yn,onChange:function(Ie,qe){c((0,f.default)({},s,{filterId:null,value:qe,config:(0,f.default)({},Zn,{isFilter:!1,filterConditions:[]})}))}})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle Normal"},_l("\u89C6\u56FE")),e.createElement(Kn.Z,{disabled:!yn,value:ke||void 0,data:X.map(function(Le){return(0,f.default)({},Le,{disabled:Le.type!==0})}),onChange:function(Ie){return c((0,f.default)({},s,{viewId:Ie}))},style:{width:"100%",background:"#fff"},menuStyle:{width:"100%"},placeholder:_l("\u9009\u62E9\u89C6\u56FE"),border:!0})),!N().isEmpty(ce)&&e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement(Io,{projectId:ne,appId:m,worksheetId:yn,filterId:Qe,controls:ce,config:Zn,onChangeConfig:function(Ie){c((0,f.default)({},s,{config:Ie}))}})),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle Normal"},_l("\u641C\u7D22\u5B57\u6BB5")),e.createElement(Kn.Z,{value:$e||void 0,data:ce.filter(function(Le){return![52].includes(Le.type)}).map(function(Le){return{text:Le.controlName,value:Le.controlId}}),onChange:function(Ie){c((0,f.default)({},s,{searchId:Ie}))},style:{width:"100%",background:"#fff"},menuStyle:{width:"100%"},placeholder:_l("\u9009\u62E9\u641C\u7D22\u5B57\u6BB5"),border:!0})))),un===2&&e.createElement(e.Fragment,null,e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"Gray_75"},_l("\u5C06\u626B\u7801\u7684\u6587\u672C\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165PBC\u6D41\u7A0B"))),e.createElement(Wr,{appId:m,projectId:ne,btnSetting:s,setBtnSetting:c,setDataSource:j})))}return Se===6?e.createElement(e.Fragment,null,e.createElement(_o,{config:Zn,btnSetting:s,setBtnSetting:c}),e.createElement(Wr,{appId:m,projectId:ne,btnSetting:s,setBtnSetting:c,setDataSource:j})):null},ut=function(rn){var Cn=(0,f.default)({},s,G,{action:rn});if(rn===5?Cn.config=(0,f.default)({},Cn.config,Mo,{inputs:[]}):rn===6?Cn.config=(0,f.default)({},Cn.config,$o,{inputs:[]}):Cn.config={icon:N().get(s,"config.icon"),iconUrl:N().get(s,"config.iconUrl")},N().get(Cn,["config","isNewBtn"])){var tn=N().find(br,{value:rn}),Je=tn.svgIcon,on=md.global.FileStoreConfig.pubHost+"/customIcon/"+Je+".svg";delete Cn.config.isNewBtn,Cn.config=(0,f.default)({},Cn.config,{icon:Je,iconUrl:on})}c(Cn)};return e.createElement(Ao,null,e.createElement("ul",{className:"btnDisplayTab"},Go.map(function(wn){var rn=wn.text,Cn=wn.type;return e.createElement("li",{key:Cn,className:E()({active:C===Cn}),onClick:function(){return y(Cn)}},rn)})),C==="setting"&&e.createElement("div",{className:"delBtn"},e.createElement("div",{className:"iconWrap mRight8","data-tip":_l("\u590D\u5236"),onClick:b},e.createElement("i",{className:"icon-copy_custom Font20"})),e.createElement("div",{className:"iconWrap","data-tip":_l("\u5220\u9664"),onClick:u},e.createElement("i",{className:"icon-delete_12 Font18"}))),e.createElement("div",{className:"settingsBox Relative"},C==="setting"?e.createElement(e.Fragment,null,e.createElement(oa,{pageId:g,projectId:ne,btnSetting:s,btnConfig:p,setBtnSetting:c}),e.createElement("div",{className:"settingItem"},e.createElement("div",{className:"settingTitle"},_l("\u64CD\u4F5C")),Se?e.createElement(Kn.Z,{value:Se,data:br,onChange:function(rn){ut(rn)},menuStyle:{width:"100%"},style:{width:"100%",background:"#fff"},placeholder:_l("\u9009\u62E9\u6267\u884C\u64CD\u4F5C"),border:!0}):e.createElement("div",{className:"selectActionBox"},e.createElement(An.default.Group,{onChange:function(rn){ut(rn.target.value)},value:Se},e.createElement(zn.default,{direction:"vertical"},br.map(function(wn){return e.createElement(An.default,{key:wn.value,value:wn.value},wn.text)}))))),Se&&ot()):e.createElement("div",{className:"settingItem mTop24"},e.createElement("div",{className:"settingTitle"},_l("\u6587\u672C")),e.createElement(Dn.Z,{style:{width:"100%"},value:v,onChange:function(rn){return h({explain:rn})}}))))}const Ho=(0,ze.$j)(function(n){return{appPkg:n.appPkg}})(Vo);var Uo=(0,xe.Z)([`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.white .sideContentWrap {
    background-color: #fff;
  }
  .sideContentWrap {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 720px;
    background-color: #f5f5f5;
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.3);
    header {
      .icon-close {
        color: #9e9e9e;
        &:hover {
          color: #2196f3;
        }
      }
    }
  }
  .sideContent {
    display: flex;
    flex-direction: column;
    height: calc(100% - 56px);
    overflow: auto;
    padding: 0 24px;
  }
  header {
    padding: 0 24px;
    line-height: 56px;
    background-color: #fff;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
    i {
      cursor: pointer;
      font-size: 16px;
    }
  }
`],[`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.white .sideContentWrap {
    background-color: #fff;
  }
  .sideContentWrap {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 720px;
    background-color: #f5f5f5;
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.3);
    header {
      .icon-close {
        color: #9e9e9e;
        &:hover {
          color: #2196f3;
        }
      }
    }
  }
  .sideContent {
    display: flex;
    flex-direction: column;
    height: calc(100% - 56px);
    overflow: auto;
    padding: 0 24px;
  }
  header {
    padding: 0 24px;
    line-height: 56px;
    background-color: #fff;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
    i {
      cursor: pointer;
      font-size: 16px;
    }
  }
`]),Yo=Ee.ZP.div(Uo);function Zr(n){var r=n.isMask,o=r===void 0?!0:r,t=n.className,l=n.children,a=n.headerText,s=n.onClick,p=n.onClose;return e.createElement(Yo,{className:t,onClick:s},o&&e.createElement("div",{className:"mask",onClick:p}),e.createElement("div",{className:"sideContentWrap"},e.createElement("header",null,e.createElement("div",{className:"flexRow alignItemsCenter"},a),e.createElement("i",{className:"icon-close Font22",onClick:p})),e.createElement("div",{className:"sideContent"},l)))}var jd=null,Od=null,Qo=function(){return[{style:1,width:2,explain:"",count:5,mobileCount:1,buttonList:[{name:_l("\u6DFB\u52A0\u65B0\u8BA2\u5355"),color:"#2196f3"}]},{style:1,width:2,explain:_l("\u5BA2\u6237"),count:5,mobileCount:1,buttonList:[{name:_l("\u6DFB\u52A0\u5BA2\u6237"),color:"#4caf50"},{name:_l("\u6DFB\u52A0\u62DC\u8BBF\u8BB0\u5F55"),color:"#4caf50"},{name:_l("\u6DFB\u52A0\u62A5\u8868"),color:"#2196f3"}]},{style:1,wdith:2,explain:_l("\u5E38\u7528\u5BFC\u822A"),count:4,mobileCount:4,buttonList:[{name:_l("\u6211\u7684\u5BA2\u6237"),color:"#f69926",config:{icon:"18_1_apartment_house",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/18_1_apartment_house.svg"}},{name:_l("\u6211\u7684\u7EBF\u7D22"),color:"#e62165",config:{icon:"10_5_star",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/10_5_star.svg"}},{name:_l("\u9500\u552E\u8BA2\u5355"),color:"#289af0",config:{icon:"1_2_order",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/1_2_order.svg"}},{name:_l("\u62A5\u8868"),color:"#4faf54",config:{icon:"2_3_statistics",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/2_3_statistics.svg"}}],config:{btnType:2,direction:1}},{style:2,wdith:2,explain:"",count:2,mobileCount:2,buttonList:[{name:_l("\u91C7\u8D2D\u5165\u5E93"),color:"#4caf50",config:{icon:"1_6_document",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/1_6_document.svg"}},{name:_l("\u9500\u552E\u51FA\u5E93"),color:"#2196f3",config:{icon:"1_0_home",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/1_0_home.svg"}},{name:_l("\u4EA7\u54C1\u5E93\u5B58"),color:"#f69926",config:{icon:"10_1_health_data",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/10_1_health_data.svg"}},{name:_l("\u8C03\u62E8\u8BB0\u5F55"),color:"#3e53b4",config:{icon:"1_5_create_new",iconUrl:md.global.FileStoreConfig.pubHost+"/customIcon/1_5_create_new.svg"}}],config:{btnType:2,direction:2}},{style:3,width:1,explain:_l("\u5FEB\u6377\u65B9\u5F0F"),count:2,mobileCount:1,buttonList:[{name:_l("\u6DFB\u52A0\u65B0\u8BA2\u5355"),color:"#2196f3"},{name:_l("\u6DFB\u52A0\u65B0\u5BA2\u6237"),color:"#2196f3"},{name:_l("\u67E5\u770B\u6211\u7684\u8BA2\u5355"),color:"#2196f3"},{name:_l("\u67E5\u770B\u6211\u7684\u7EDF\u8BA1"),color:"#2196f3"}]}]},Xo=(0,xe.Z)([`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #fff;
  .explain {
    text-align: center;
    margin-bottom: 12px;
  }
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #fff;
  .explain {
    text-align: center;
    margin-bottom: 12px;
  }
`]),Ko=(0,xe.Z)([`
  margin: 4px 0;
  padding: 0 8px;
  cursor: pointer;
  transition: border 0.25s;
  border: 1px solid transparent;
  box-sizing: border-box;
  &.noMargin {
    margin: 0;
  }
  &.isFullWidth {
    flex-grow: 1;
  }
  .Button {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
    }
    .injected-svg {
      margin-right: 5px;
    }
  }
  button.ming {
    padding: 0 14px;
    background-color: `,`;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    &:hover {
      background-color: `,`;
    }
    .icon {
      font-size: 20px;
      margin-right: 6px;
    }
  }
  &.edit {
    &:hover {
      border: 1px dashed #ddd;
    }
    &.active {
      border: 1px solid `,`;
    }
  }
  &.adjustText {
    button {
      background-color: #f8f8f8;
      color: `,`;
      box-shadow: none;
      &:hover {
        background-color: `,`;
      }
    }
    .iconWrap {
      color: `,`;
      background-color: #f8f8f8;
    }
  }
`],[`
  margin: 4px 0;
  padding: 0 8px;
  cursor: pointer;
  transition: border 0.25s;
  border: 1px solid transparent;
  box-sizing: border-box;
  &.noMargin {
    margin: 0;
  }
  &.isFullWidth {
    flex-grow: 1;
  }
  .Button {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
    }
    .injected-svg {
      margin-right: 5px;
    }
  }
  button.ming {
    padding: 0 14px;
    background-color: `,`;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    &:hover {
      background-color: `,`;
    }
    .icon {
      font-size: 20px;
      margin-right: 6px;
    }
  }
  &.edit {
    &:hover {
      border: 1px dashed #ddd;
    }
    &.active {
      border: 1px solid `,`;
    }
  }
  &.adjustText {
    button {
      background-color: #f8f8f8;
      color: `,`;
      box-shadow: none;
      &:hover {
        background-color: `,`;
      }
    }
    .iconWrap {
      color: `,`;
      background-color: #f8f8f8;
    }
  }
`]),Jo=Ee.ZP.div(Xo),qo=Ee.ZP.div(Ko,function(n){return n.color},function(n){return(0,oe.default)(n.color).darken(20).toString()},function(n){return(0,oe.default)(n.color).darken(20).toString()},function(n){return n.color},(0,oe.default)("#f8f8f8").darken(3).toString(),function(n){return n.color});function Rr(n){var r=n.buttonList,o=r===void 0?[]:r,t=n.layoutType,l=t===void 0?"web":t,a=n.displayMode,s=a===void 0?"edit":a,p=n.explain,v=n.activeIndex,c=n.count,h=n.mobileCount,u=h===void 0?1:h,b=n.width,m=n.style,g=n.config,x=n.onClick,F=g||{},C=F.btnType,y=F.direction,S=y===void 0?1:y,w=C===2?!0:b===1,L=l==="mobile",W=N().chunk(o,l==="web"?c:u),B=function(){return w||L?{width:100/(L?u:c)+"%"}:{}};return e.createElement(Jo,null,p&&e.createElement("div",{className:"explain"},p),e.createElement(Va,null,W.map(function(Y,z){return e.createElement("div",{className:E()("chunkListWrap",{center:L?!1:!w}),key:z},Y.map(function(K,ne){var fe=K.color,J=K.name,P=K.config,j=C===2?"custom_actions":null,G=N().get(P,"icon")||j,q=G?md.global.FileStoreConfig.pubHost+"/customIcon/"+G+".svg":N().get(P,"iconUrl");return e.createElement(qo,{key:ne,style:(0,f.default)({},B()),color:fe,className:E()(s,{active:v===z,adjustText:m===3,noMargin:C===2,flexRow:S===2}),onClick:function(){typeof x=="function"&&x((0,f.default)({},K,{index:z}))}},C===2?e.createElement(fa,{className:E()("valignWrapper",S===1?"column":"row",{small:L&&(S===1&&[3,4].includes(u)||S===2&&[2].includes(u))}),color:fe,radius:m===1?S===1?"16px":"12px":"50%"},q&&e.createElement("div",{className:"iconWrap flexRow valignWrapper"},e.createElement(ve.Z,{url:q,fill:m===3?fe:"#fff",size:S===2||L&&S===1&&[3,4].includes(u)?28:36})),e.createElement("div",{className:"nameWrap valignWrapper"},e.createElement("div",{className:"name"},J))):e.createElement(V.ZP,{fullWidth:w||L,radius:m===2,icon:q?null:K.icon},q&&e.createElement(ve.Z,{url:q,fill:m===3?fe:"#fff",size:20}),e.createElement("span",{className:"overflow_ellipsis"},J)))}))})))}var ei=(0,xe.Z)([`
  background-color: #eee;
  height: 100%;
  display: flex;

  .btnGroup {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding: 10px 24px;
    overflow: auto;
  }
`],[`
  background-color: #eee;
  height: 100%;
  display: flex;

  .btnGroup {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding: 10px 24px;
    overflow: auto;
  }
`]),ni=(0,xe.Z)([`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  }
  .btnWrap {
    margin: 8px 10px;
  }
`],[`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  }
  .btnWrap {
    margin: 8px 10px;
  }
`]),ti=Ee.ZP.div(ei),ai=Ee.ZP.div(ni);function ri(n){var r=n.projectId,o=n.widget,t=n.onEdit,l=n.onClose,a=o.button,s=(0,ua.Z)(a),p=(0,H.Z)(s,2),v=p[0],c=p[1],h=v.buttonList,u=v.explain,b=v.config,m=(0,e.useState)(0),g=(0,H.Z)(m,2),x=g[0],F=g[1],C=(0,e.useState)([]),y=(0,H.Z)(C,2),S=y[0],w=y[1],L=(0,e.useState)(N().isEmpty(a)),W=(0,H.Z)(L,2),B=W[0],Y=W[1],z=function(j){c(tt()(v,{buttonList:(0,ft.default)({},x,{$apply:function(q){return(0,f.default)({},q,j)}})}))},K=function(){var j=(0,Oe.LK)(r),G=h[h.length-1]||{},q=j.indexOf(G.color),X="#2196f3",ue=q===-1?X:j[q+1]||j[0],ce=v.config||{},he=ce.btnType,Se={name:_l("\u6211\u662F\u6309\u94AE"),color:ue,id:(0,Nt.Z)()};if(he===2){var ke="custom_actions",$e=md.global.FileStoreConfig.pubHost+"/customIcon/"+ke+".svg";Se.config={icon:ke,iconUrl:$e,isNewBtn:!0}}F(h.length),c(tt()(v,{buttonList:{$push:[Se]}}))},ne=function(){if(h.length<=1){alert(_l("\u4EC5\u5269\u4E00\u4E2A\u6309\u94AE\u4E86\uFF0C\u65E0\u6CD5\u5220\u9664"),3);return}c(tt()(v,{buttonList:{$splice:[[x,1]]}})),F(Math.max(x-1,0))},fe=function(){var j=N().cloneDeep(h[x]),G=N().get(j,"config")||{};j.id=(0,Nt.Z)(),j.btnId=null,j.filterId=null,G.isFilter&&(j.config=(0,f.default)({},G,{isFilter:void 0})),c(tt()(v,{buttonList:{$splice:[[x+1,0,j]]}}))},J=function(){var j=v.buttonList,G=[];j.forEach(function(q,X){var ue=q.config||{},ce=ue.inputs,he=N().find(ce,{required:!0});he&&N().isEmpty(he.value)&&G.push(X)}),G.length?(w(G),alert(_l("\u4E1A\u52A1\u6D41\u7A0B\u6709\u5FC5\u586B\u53C2\u6570\uFF0C\u8BF7\u5B8C\u5584"),3)):t({button:v})};return B?e.createElement(Zr,{headerText:_l("\u9009\u62E9\u6309\u94AE\u6837\u5F0F"),onClose:l},Qo().map(function(P,j){return e.createElement(ai,{key:j,className:"defaultItem",onClick:function(){P.buttonList.forEach(function(q){q.id=(0,Nt.Z)()}),c(P),Y(!1)}},e.createElement(Rr,(0,f.default)({displayMode:""},P)))})):e.createElement(dt.Z,{maskStyle:{zIndex:999},wrapClassName:"customPageButtonWrap",className:"editWidgetDialogWrap",visible:!0,transitionName:"",maskTransitionName:"",width:"100%",footer:null,centered:!0,onCancel:l,closeIcon:e.createElement(O.Z,{icon:"close Font24 ThemeHoverColor3"})},e.createElement(na,null,e.createElement("div",{className:"typeName"},_l("\u6309\u94AE")),e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(gt.default,{autoInsertSpaceInButton:!1},e.createElement(vt.default,{block:!0,className:"save",shape:"round",type:"primary",onClick:J},_l("\u4FDD\u5B58"))),e.createElement(Xn.default,{title:_l("\u5173\u95ED"),placement:"bottom"},e.createElement(O.Z,{icon:"close",className:"Font24 pointer mLeft16 Gray_9e",onClick:l})))),e.createElement(zt,null,e.createElement(ti,null,e.createElement("div",{className:"btnGroup"},e.createElement(fr,(0,f.default)({},n,v,{setSetting:c,addBtn:K})),e.createElement(se,(0,f.default)({},n,v,{errorBtns:S,activeIndex:x,onClick:function(j){var G=j.index;return F(G)}}))),e.createElement(Ho,(0,f.default)({},n,{explain:u,activeIndex:x,btnSetting:h[x],btnConfig:b,setBtnSetting:z,setSetting:c,onDel:ne,onCopy:fe})))))}var oi=i(76753),ii=i(47868),li=(0,xe.Z)([`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #eaeaea;
  padding: 24px;
  min-width: 0;

  .SingleViewWrap {
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #fff;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #eaeaea;
  padding: 24px;
  min-width: 0;

  .SingleViewWrap {
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #fff;
  }
`]),si=(0,xe.Z)([`
  width: 100%;
  height: 100%;
  justify-content: center;
`],[`
  width: 100%;
  height: 100%;
  justify-content: center;
`]),ci=(0,xe.Z)([`
  width: 100%;
  height: 100%;
  .SingleViewHeader {
    font-size: 17px;
    height: 50px;
    padding: 10px 16px;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    &.mobile {
      font-size: 14px;
      height: 44px;
      background-color: #F8F8F8;
    }
  }
  .SingleViewName +div {
    display: none;
  }
  .SingleViewBody {
    border: none !important;
  }
  &.hideAddRecord .addRecord,
  &.hideAddRecord .addBoardRecord,
  &.hideAddRecord .addRecordItemWrapper,
  &.hideSearchRecord .icon-search,
  &.hideSearchRecord .searchWrapper {
    display: none !important;
  }
  &.disableSingleView {
    .SingleViewHeader,
    .SingleViewBody .searchWrapper,
    .worksheetSheet .quickFilterWrap,
    .worksheetSheet .groupFilterWrap,
    .worksheetSheet .mdTableContent,
    .gunterView .gunterRecord,
    .gunterView .recordBlock,
    .gunterView .milepostRecordBlock,
    .structureViewWrap .nodeWrap,
    .structureViewWrap .hierarchyViewLeftBoundary,
    .worksheetBoardViewWrap .boardDataRecordItemWrap,
    .worksheetBoardViewWrap .addBoardRecord,
    .galleryViewContentWrap .galleryItem,
    .calendarCon .scheduleBtn,
    .calendarCon .worksheetFullCalendar,
    .SingleViewWrap .addRecord {
      pointer-events: none;
    }
  }
  .mobileBoxCalendar {
    .fc-header-toolbar .fc-toolbar-chunk:nth-child(2) > div .fc-button-primary:first-child {
      padding: 0 !important;
    }
  }
`],[`
  width: 100%;
  height: 100%;
  .SingleViewHeader {
    font-size: 17px;
    height: 50px;
    padding: 10px 16px;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    &.mobile {
      font-size: 14px;
      height: 44px;
      background-color: #F8F8F8;
    }
  }
  .SingleViewName +div {
    display: none;
  }
  .SingleViewBody {
    border: none !important;
  }
  &.hideAddRecord .addRecord,
  &.hideAddRecord .addBoardRecord,
  &.hideAddRecord .addRecordItemWrapper,
  &.hideSearchRecord .icon-search,
  &.hideSearchRecord .searchWrapper {
    display: none !important;
  }
  &.disableSingleView {
    .SingleViewHeader,
    .SingleViewBody .searchWrapper,
    .worksheetSheet .quickFilterWrap,
    .worksheetSheet .groupFilterWrap,
    .worksheetSheet .mdTableContent,
    .gunterView .gunterRecord,
    .gunterView .recordBlock,
    .gunterView .milepostRecordBlock,
    .structureViewWrap .nodeWrap,
    .structureViewWrap .hierarchyViewLeftBoundary,
    .worksheetBoardViewWrap .boardDataRecordItemWrap,
    .worksheetBoardViewWrap .addBoardRecord,
    .galleryViewContentWrap .galleryItem,
    .calendarCon .scheduleBtn,
    .calendarCon .worksheetFullCalendar,
    .SingleViewWrap .addRecord {
      pointer-events: none;
    }
  }
  .mobileBoxCalendar {
    .fc-header-toolbar .fc-toolbar-chunk:nth-child(2) > div .fc-button-primary:first-child {
      padding: 0 !important;
    }
  }
`]),di=Ee.ZP.div(li),Lr=Ee.ZP.div(si),ui=Ee.ZP.div(ci),jr=(0,Oe.Q9)(),pi=function(r,o){Pn.Z.getAppSimpleInfo({workSheetId:r}).then(function(t){var l=t.appId,a=t.appSectionId;window.isMingDaoApp?window.location.href="/mobile/recordList/"+l+"/"+a+"/"+r+"/"+o:jr?window.mobileNavigateTo("/mobile/recordList/"+l+"/"+a+"/"+r+"/"+o):(0,ae.T8)("/app/"+l+"/"+a+"/"+r+"/"+o)})};function yr(n){var r=n.appId,o=n.setting,t=n.className,l=n.layoutType,a=n.filtersGroup,s=a===void 0?[]:a,p=o.apkId,v=o.value,c=o.viewId,h=o.config,u=h===void 0?{}:h,b=(0,e.useRef)(),m=jr||l==="mobile";if(N().isEmpty(c))return e.createElement(Lr,{className:"SingleViewWrap valignWrapper emptyView"},e.createElement("div",{className:"Font15 Gray_9e"},_l("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u89C6\u56FE")));var g=m?ii.Z:oi.Z;return e.createElement(ui,{className:E()(t,{hideAddRecord:!u.isAddRecord,hideSearchRecord:!u.searchRecord})},e.createElement(g,{showHeader:!0,ref:b,appId:p||r,worksheetId:v,viewId:c,maxCount:u.maxCount,filtersGroup:s,headerLeft:e.createElement("div",{className:"SingleViewName flex ellipsis"},e.createElement("span",{className:E()("Font15 bold Gray",{pointer:u.openView}),onClick:function(){u.openView&&pi(v,c)}},u.name))}))}function fi(n){var r=n.loading,o=n.ids,t=o===void 0?{}:o,l=n.setting,a=t.appId;return e.createElement(di,null,r?e.createElement(Lr,{className:"SingleViewWrap valignWrapper emptyView"},e.createElement(Xe.Z,null)):e.createElement(yr,{className:"disableSingleView",appId:a,setting:l}))}var Ua=i(15742),mi=(0,xe.Z)([`
  box-sizing: border-box;
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  overflow: auto;

  .Dropdown--input {
    background-color: #fff;
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ming.Input::placeholder {
    color: #bdbdbd;
  }
`],[`
  box-sizing: border-box;
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  overflow: auto;

  .Dropdown--input {
    background-color: #fff;
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ming.Input::placeholder {
    color: #bdbdbd;
  }
`]),gi=Ee.ZP.div(mi);function vi(n){var r=n.appPkg,o=r===void 0?{}:r,t=n.ids,l=t===void 0?{}:t,a=n.setting,s=n.setSetting,p=n.setLoading,v=n.components,c=l.appId,h=l.pageId,u=o.projectId||o.id,b=a.value,m=a.viewId,g=a.config,x=g===void 0?{isAddRecord:!0,searchRecord:!0,openView:!0}:g,F=x.name,C=x.maxCount,y=x.isAddRecord,S=x.searchRecord,w=x.openView,L=(0,e.useState)({views:[]}),W=(0,H.Z)(L,2),B=W[0],Y=W[1],z=(0,e.useState)(m),K=(0,H.Z)(z,2),ne=K[0],fe=K[1],J=B.views,P=v.map(function(q){return q.viewId}).filter(function(q){return q!==ne}),j=function(X){s({config:(0,f.default)({},x,X)})};(0,e.useEffect)(function(){b&&Tn.Z.getWorksheetInfo({worksheetId:b,getTemplate:!0,getViews:!0,appId:c}).then(function(q){var X=q.views,ue=X===void 0?[]:X,ce=q.template;Y({views:ue.map(function(he){var Se=he.viewId,ke=he.name,$e=he.viewType;return{text:(0,Oe.T3)(c,Se).name||ke,value:Se,viewType:$e}})})})},[b]);var G=N().find(J,{value:m});return e.createElement(gi,null,e.createElement("div",{className:"Font18 bold"},_l("\u8BBE\u7F6E")),e.createElement("div",{className:"mTop20"},e.createElement("div",{className:"mBottom12 bold"},_l("\u7EC4\u4EF6\u540D\u79F0")),e.createElement(Dn.Z,{value:F,className:"w100 Font13",placeholder:_l("\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0"),onChange:function(X){j({name:X})}})),e.createElement("div",{className:"mTop24"},e.createElement("div",{className:"mBottom12 bold"},_l("\u89C6\u56FE\u6765\u6E90")),e.createElement("div",{className:"mBottom12"},e.createElement("div",{className:"mBottom12"},_l("\u5DE5\u4F5C\u8868")),e.createElement(at.Z,{dialogClassName:"btnSettingSelectDialog",worksheetType:0,projectId:u,appId:c,value:b,onChange:function(X,ue,ce){s({value:ue,viewId:void 0,config:(0,f.default)({},x,{_workSheetName:ce.workSheetName})})}})),e.createElement("div",{className:"mBottom12"},e.createElement("div",{className:"mBottom12"},_l("\u89C6\u56FE")),e.createElement(Kn.Z,{disabled:!b,value:m||void 0,data:J.map(function(q){return(0,f.default)({},q,{disabled:P.includes(q.value)})}),onChange:function(X){var ue=N().find(J,{value:X});p(!0),s({viewId:X,config:(0,f.default)({},x,{_viewName:ue.text,isPluginView:ue.viewType===21?!0:void 0})}),setTimeout(function(){return p(!1)})},style:{width:"100%",background:"#fff"},menuStyle:{width:"100%"},placeholder:_l("\u9009\u62E9\u89C6\u56FE"),border:!0}))),G&&[Ua.B.sheet,Ua.B.gallery].includes(String(G.viewType))&&e.createElement("div",{className:"mTop10"},e.createElement("div",{className:"mBottom12 bold"},_l("\u6570\u636E\u5C55\u793A\u6570\u91CF")),e.createElement(Dn.Z,{className:"w100 Font13",value:C,placeholder:_l("\u8F93\u5165\u6700\u5927\u5C55\u793A\uFF08\u4E3A\u7A7A\u8868\u793A\u4E0D\u9650\u5236\uFF09"),onChange:function(X){var ue=parseInt(X),ce=isNaN(ue)?"":ue;j({maxCount:ce>=100?100:ce})},onBlur:function(){p(!0),setTimeout(function(){return p(!1)})}})),e.createElement("div",{className:"mTop20"},e.createElement("div",{className:"mBottom12 bold"},_l("\u64CD\u4F5C")),e.createElement("div",{className:"mBottom12"},e.createElement(nt.default,{checked:y,onChange:function(X){j({isAddRecord:X.target.checked})}},_l("\u5141\u8BB8\u65B0\u5EFA\u8BB0\u5F55"))),e.createElement("div",{className:"mBottom12"},e.createElement(nt.default,{checked:S,onChange:function(X){j({searchRecord:X.target.checked})}},_l("\u641C\u7D22\u8BB0\u5F55"))),e.createElement("div",{className:"mBottom12"},e.createElement(nt.default,{checked:w,onChange:function(X){j({openView:X.target.checked})}},_l("\u6253\u5F00\u89C6\u56FE")))))}const hi=(0,ze.$j)(function(n){return{appPkg:n.appPkg,components:n.customPage.components.filter(function(r){return[Ze.GV.view,"view"].includes(r.type)})}})(vi);var bi=(0,xe.Z)([`
  background-color: #eee;
  height: 100%;
  display: flex;
`],[`
  background-color: #eee;
  height: 100%;
  display: flex;
`]),xi=Ee.ZP.div(bi);function yi(n){var r=n.widget,o=n.onEdit,t=n.onClose,l=(0,e.useState)(r),a=(0,H.Z)(l,2),s=a[0],p=a[1],v=(0,e.useState)(!1),c=(0,H.Z)(v,2),h=c[0],u=c[1],b=function(){var g=s.viewId,x=s.config,F=x===void 0?{}:x;if(N().isEmpty(g)){alert(_l("\u8BF7\u9009\u62E9\u89C6\u56FE"),3);return}if(N().isEmpty(F.name)){var C=F._workSheetName,y=F._viewName;F.name=F._workSheetName+" ("+F._viewName+")"}N().isEmpty(F.objectId)&&(F.objectId=(0,Nt.Z)()),delete F._workSheetName,delete F._viewName,o(s)};return e.createElement(dt.Z,{maskStyle:{zIndex:999},wrapClassName:"customPageViewWrap",className:"editWidgetDialogWrap",visible:!0,transitionName:"",maskTransitionName:"",width:"100%",footer:null,centered:!0,onCancel:t},e.createElement(na,null,e.createElement("div",{className:"typeName"},_l("\u89C6\u56FE")),e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(gt.default,{autoInsertSpaceInButton:!1},e.createElement(vt.default,{block:!0,className:"save",shape:"round",type:"primary",onClick:b},_l("\u4FDD\u5B58"))),e.createElement(Xn.default,{title:_l("\u5173\u95ED"),placement:"bottom"},e.createElement(O.Z,{icon:"close",className:"Font24 pointer mLeft16 Gray_9e",onClick:t})))),e.createElement(zt,null,e.createElement(xi,null,e.createElement(fi,(0,f.default)({},n,{loading:h,setting:s})),e.createElement(hi,(0,f.default)({},n,{setting:s,setSetting:function(g){p((0,f.default)({},s,g))},setLoading:u})))))}var Ci=i(83650);function wi(n){var r=n.widget,o=n.onEdit,t=n.onClose;return e.createElement(dt.Z,{className:"appIntroDialog editWidgetDialogWrap",wrapClassName:"appIntroDialogWrapCenter",maskClosable:!1,visible:!0,onCancel:t,width:800,transitionName:"",maskTransitionName:"",footer:null,centered:!0,maskStyle:{backgroundColor:"rgba(0, 0, 0, 0.7)"},bodyStyle:{minHeight:"680px",padding:0},closeIcon:e.createElement(O.Z,{icon:"close"})},e.createElement(Ci.Z,{className:"appIntroDescriptionEditor ",summary:r.value,isEditing:!0,permissionType:100,onSave:function(a){o({value:a})},onCancel:t,cacheKey:"customPageEditWidget",title:_l("\u5BCC\u6587\u672C")}))}var Dd=i(45142),Ya=i(40987),Ei=(0,xe.Z)([`
  display: flex;
  font-size: 14px;
  align-items: center;
  line-height: 32px;
  cursor: pointer;
`],[`
  display: flex;
  font-size: 14px;
  align-items: center;
  line-height: 32px;
  cursor: pointer;
`]),Ii=(0,xe.Z)([`
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); */
  background-color: #fff;
  padding: 6px 24px;
  min-height: 205px;
  max-height: 560px;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    min-width: 180px;
    line-height: 36px;

    cursor: row-resize;
    background-color: #fff;
    color: #333;
    .btnIcon {
      margin: 0 7px;
    }
    transition: padding 0.25s;
    &:hover {
      padding-left: 12px;
      background-color: #f5f5f5;
    }
  }
`],[`
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); */
  background-color: #fff;
  padding: 6px 24px;
  min-height: 205px;
  max-height: 560px;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    min-width: 180px;
    line-height: 36px;

    cursor: row-resize;
    background-color: #fff;
    color: #333;
    .btnIcon {
      margin: 0 7px;
    }
    transition: padding 0.25s;
    &:hover {
      padding-left: 12px;
      background-color: #f5f5f5;
    }
  }
`]),Si=(0,xe.Z)([`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 26px;
    margin-right: 24px;
    align-self: flex-end;
  }
`],[`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 26px;
    margin-right: 24px;
    align-self: flex-end;
  }
`]),ki=Ee.ZP.div(Ei),Ni=Ee.ZP.ul(Ii),Pi=Ee.ZP.div(Si),Ti=(0,xn.W8)(function(n){var r=n.item;return e.createElement("li",{className:"overflow_ellipsis"},e.createElement("i",{className:"icon-drag Gray_bd Font18"}),e.createElement("span",{className:"mLeft10"},r.name||_l("\u672A\u547D\u540D")))}),Fi=(0,xn.JN)(function(n){var r=n.list;return e.createElement(Ni,null,r.map(function(o,t){return e.createElement(Ti,{item:o,index:t,key:t})}))});function Wi(n){var r=n.filters,o=n.onSortEnd,t=(0,e.useState)(!1),l=(0,H.Z)(t,2),a=l[0],s=l[1];return e.createElement(e.Fragment,null,e.createElement(ki,{onClick:function(){return s(!0)}},e.createElement("div",{className:"valignWrapper Gray_75 pointer mLeft10"},e.createElement(O.Z,{className:"Font22 Gray_9e ThemeHoverColor3",icon:"import_export"}),e.createElement("span",{className:"Font13"},_l("\u6392\u5E8F")))),e.createElement(dt.Z,{title:_l("\u7B5B\u9009\u6392\u5E8F"),maskStyle:{zIndex:1051},width:400,centered:!0,closable:!1,wrapClassName:"customPageBtnSortModalWrap",visible:a,onCancel:function(){return s(!1)},footer:null},e.createElement(Pi,null,e.createElement(Fi,{helperClass:"customPageBtnSortHelper",list:r,onSortEnd:function(v){var c=v.newIndex,h=v.oldIndex;o((0,xn.Rp)(r,h,c))}}),e.createElement(V.ZP,{onClick:function(){return s(!1)}},_l("\u5B8C\u6210")))))}var Zi=i(15678);function Cr(n){var r=n.projectId,o=n.appId,t=n.mode,l=n.filters,a=n.controls,s=n.enableBtn,p=n.activeFilterId,v=n.updateQuickFilter,c=v===void 0?function(){}:v,h=n.resetQuickFilter,u=h===void 0?function(){}:h,b=n.onFilterClick,m=b===void 0?function(){}:b;return e.createElement(Zi.Z,{projectId:r,appId:o,mode:t,from:"filterComp",noExpand:!0,view:{advancedSetting:{enablebtn:s?"1":"0"}},activeFilterId:p,filters:l.map(function(g){return(0,f.default)({},g,{id:g.id||g.filterId})}),controls:a,updateQuickFilter:function(x){return c(x)},resetQuickFilter:function(){return u()},onFilterClick:m})}Cr.propTypes={projectId:Ye().string,appId:Ye().string,mode:Ye().string,enableBtn:Ye().bool,activeFilterId:Ye().string,filters:Ye().arrayOf(Ye().shape({})),controls:Ye().arrayOf(Ye().shape({})),updateQuickFilter:Ye().func,resetQuickFilter:Ye().func,onFilterClick:Ye().func};var Ri=i(22177),Oa=i(93582),Li=(0,xe.Z)([`
  display: flex;
  flex: 1;
  background-color: #eaeaea;
  padding: 11px 24px;
  min-width: 0;

  .addFilterItem {
    height: 36px;
    padding: 0 15px;
    color: #40a9ff;
    border: none;
    border-radius: 24px;
    &:hover {
      color: #1079cc;
    }
  }

  .header {
    justify-content: space-between;
  }
  .body {
    border-radius: 4px;
    box-shadow: 0px 1px 4px #00000029;
    padding: 10px;
    overflow: auto;
    background-color: #fff;

    .container {
      display: block;
      overflow: auto;
    }
    .gridItem {
      float: left;
      width: 200px;
      height: 100px;
      padding: 5px;
      display: flex;
      align-items: center;
      .innerGridItem {
        width: 100%;
        height: 100%;
        background: #fff;
        border: 1px solid #efefef;
      }
      .active {
        border-color: #2196F3;
      }
    }
  }

  .quickFilterWrap {
    padding-top: 0;
    >div {
      padding: 0;
    }
    .disable {
      .content>div {
        background-color: #f5f5f5;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0 0 0 16px;
      height: auto;
    }
  }
`],[`
  display: flex;
  flex: 1;
  background-color: #eaeaea;
  padding: 11px 24px;
  min-width: 0;

  .addFilterItem {
    height: 36px;
    padding: 0 15px;
    color: #40a9ff;
    border: none;
    border-radius: 24px;
    &:hover {
      color: #1079cc;
    }
  }

  .header {
    justify-content: space-between;
  }
  .body {
    border-radius: 4px;
    box-shadow: 0px 1px 4px #00000029;
    padding: 10px;
    overflow: auto;
    background-color: #fff;

    .container {
      display: block;
      overflow: auto;
    }
    .gridItem {
      float: left;
      width: 200px;
      height: 100px;
      padding: 5px;
      display: flex;
      align-items: center;
      .innerGridItem {
        width: 100%;
        height: 100%;
        background: #fff;
        border: 1px solid #efefef;
      }
      .active {
        border-color: #2196F3;
      }
    }
  }

  .quickFilterWrap {
    padding-top: 0;
    >div {
      padding: 0;
    }
    .disable {
      .content>div {
        background-color: #f5f5f5;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0 0 0 16px;
      height: auto;
    }
  }
`]),ji=Ee.ZP.div(Li);function Oi(n){var r=n.loading,o=n.activeId,t=n.setActiveId,l=n.filters,a=n.setFilters,s=n.filter,p=n.setFilter,v=s.advancedSetting,c=v===void 0?{}:v,h=n.ids,u=h===void 0?{}:h,b=n.setting,m=u.appId,g=function(){var F=(0,Nt.Z)(),C=N().find(l,{filterId:o}),y=(0,f.default)({},Br,{filterId:F,global:C.global});C.global&&(y.objectControls=C.objectControls.map(function(S){return(0,f.default)({},S,{controlId:"",control:void 0})})),t(F),a(l.concat(y))};return e.createElement(ji,{className:"flexColumn"},e.createElement("div",{className:"flexRow valignWrapper header"},e.createElement("div",{className:"flex valignWrapper"},e.createElement("label",{className:"flexRow valignWrapper mRight20"},e.createElement(Ya.Z,{size:"small",checked:s.enableBtn,onChange:function(F){p((0,f.default)({},s,{enableBtn:F}))}}),e.createElement("div",{className:"mLeft5 pointer"},_l("\u542F\u7528\u7B5B\u9009\u6309\u94AE"))),e.createElement("label",{className:"flexRow valignWrapper mRight5"},e.createElement(Ya.Z,{size:"small",checked:c.clicksearch=="1",onChange:function(F){p((0,f.default)({},s,{advancedSetting:(0,f.default)({},c,{clicksearch:F?"1":"0"})}))}}),e.createElement("div",{className:"mLeft5 pointer"},_l("\u5728\u6267\u884C\u7B5B\u9009\u67E5\u8BE2\u540E\u663E\u793A\u6570\u636E"))),e.createElement(Xn.default,{title:_l("\u52FE\u9009\u540E\uFF0C\u8FDB\u5165\u9875\u9762\u521D\u59CB\u4E0D\u663E\u793A\u6570\u636E\uFF0C\u67E5\u8BE2\u540E\u663E\u793A\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u6570\u636E\u3002"),placement:"bottom"},e.createElement(O.Z,{className:"Font17 pointer Gray_9e",icon:"workflow_help"})),e.createElement(Wi,{filters:l,onSortEnd:function(F){a(F)}})),e.createElement(vt.default,{className:"addFilterItem",onClick:g},e.createElement(O.Z,{icon:"add"}),e.createElement("span",{className:"bold"},_l("\u6DFB\u52A0\u7B5B\u9009\u5668")))),e.createElement(Gn.Z,{className:"mTop15 mBottom15"}),e.createElement("div",{className:"TxtCenter Font13 Gray_9e mBottom20"},_l("\u9009\u62E9\u4E0B\u65B9\u9884\u89C8\u5361\u7247\u4E2D\u7684\u7B5B\u9009\u5668\u8FDB\u884C\u8BBE\u7F6E")),e.createElement("div",{className:"body"},e.createElement("div",{className:"container"},e.createElement(Ri.Z,null,r?e.createElement(Xe.Z,null):e.createElement(Cr,{mode:"config",enableBtn:s.enableBtn,filters:(0,Oa.U)(l),activeFilterId:o,onFilterClick:function(F,C){t(F)}})))))}var Di=i(7452),Bi=(0,xe.Z)([`
  .tag {
    display: inline-flex;
    padding: 0 10px;
    height: 32px;
    max-width: 100%;
    border: 1px solid #EAEAEA;
    border-radius: 15px;
    background-color: #FFFFFF;
    margin: 0 10px 10px 0;
    &.add {
      color: #2196F3;
      transition: all 0.3s;
      &:hover {
        color: #1079cc;
      }
    }
    &.warning {
      border-color: #E5A39E;
      background-color: #FFE5E3;
    }
  }
  .icon-close:hover {
    color: #757575 !important;
  }
`],[`
  .tag {
    display: inline-flex;
    padding: 0 10px;
    height: 32px;
    max-width: 100%;
    border: 1px solid #EAEAEA;
    border-radius: 15px;
    background-color: #FFFFFF;
    margin: 0 10px 10px 0;
    &.add {
      color: #2196F3;
      transition: all 0.3s;
      &:hover {
        color: #1079cc;
      }
    }
    &.warning {
      border-color: #E5A39E;
      background-color: #FFE5E3;
    }
  }
  .icon-close:hover {
    color: #757575 !important;
  }
`]),_i=(0,xe.Z)([`
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px 0 #00000014, 0 9px 28px 8px #0000000d;
  .ant-space {
    gap: 0 !important;
    max-height: 420px;
    overflow-y: auto;
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ant-input {
    font-size: 13px;
    padding: 7px 11px;
    border-radius: 0 !important;
    border: none !important;
    &:focus, &.ant-input-focused {
      box-shadow: none;
    }
  }
  width: 312px;
  border-radius: 3px;
  padding: 5px 0;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  .ant-radio-group, .ant-space {
    width: 100%;
  }
  .ant-space-item {
    padding: 7px 16px;
    margin-bottom: 0 !important;
    &:hover {
      background-color: #fafafa;
    }
  }
`],[`
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px 0 #00000014, 0 9px 28px 8px #0000000d;
  .ant-space {
    gap: 0 !important;
    max-height: 420px;
    overflow-y: auto;
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ant-input {
    font-size: 13px;
    padding: 7px 11px;
    border-radius: 0 !important;
    border: none !important;
    &:focus, &.ant-input-focused {
      box-shadow: none;
    }
  }
  width: 312px;
  border-radius: 3px;
  padding: 5px 0;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  .ant-radio-group, .ant-space {
    width: 100%;
  }
  .ant-space-item {
    padding: 7px 16px;
    margin-bottom: 0 !important;
    &:hover {
      background-color: #fafafa;
    }
  }
`]),zi=Ee.ZP.div(Bi),Ai=Ee.ZP.div(_i),Gi=function(r,o){return r.filter(function(t){return[Ze.GV.analysis,Ze.GV.view,"analysis","view"].includes(t.type)}).map(function(t){var l=N().get(t,"config.objectId"),a={objectId:l};if(Ze.GV.analysis===t.type){if(a.type=1,a.name=t.name,t.value){var s=N().find(o,{id:t.value})||{};a.worksheetId=s.appId}if(t.sourceValue){var p=N().find(o,{id:t.sourceValue});a.worksheetId=p.appId}}return t.type==="analysis"&&(a.type=1,a.name=t.name,a.worksheetId=t.worksheetId),[Ze.GV.view,"view"].includes(t.type)&&!N().get(t,"config.isPluginView")&&(a.type=2,a.name=t.config.name,a.worksheetId=t.value),a}).filter(function(t){return t.worksheetId})};function Mi(n){var r=n.pageId,o=n.components,t=n.filter,l=n.setFilter,a=n.changeGlobal,s=n.changeAllFilterObjectControls,p=t.objectControls,v=p===void 0?[]:p,c=(0,e.useState)(!1),h=(0,H.Z)(c,2),u=h[0],b=h[1],m=(0,e.useState)([]),g=(0,H.Z)(m,2),x=g[0],F=g[1],C=(0,e.useState)(!0),y=(0,H.Z)(C,2),S=y[0],w=y[1],L=(0,e.useState)(""),W=(0,H.Z)(L,2),B=W[0],Y=W[1];(0,e.useEffect)(function(){w(!0),Di.Z.listByPageId({appId:r}).then(function(P){F(Gi(o,P))}).finally(function(){return w(!1)})},[]);var z=function(j){var G=x.filter(function(he){return he.objectId==j})[0],q=G.name,X=(0,Ln.Z)(G,["name"]),ue=N().find(v,{worksheetId:X.worksheetId}),ce=v.concat((0,f.default)({},X,{controlId:ue?ue.controlId:""}));ne(ce)},K=function(j){var G=v.filter(function(q){return q.objectId!==j});ne(G)},ne=function(j){t.global?s(j):l({objectControls:j})},fe=function(){return e.createElement(Ai,null,e.createElement("div",{className:"valignWrapper pLeft10 pRight10"},e.createElement(O.Z,{className:"Gray_9e Font20",icon:"search"}),e.createElement(St.default,{autoFocus:!0,value:B,placeholder:_l("\u641C\u7D22"),onChange:function(G){Y(G.target.value)}})),e.createElement(Gn.Z,{className:"mTop5 mBottom5"}),e.createElement(zn.default,{direction:"vertical"},e.createElement(nt.default,{checked:x.length===v.length,onChange:function(G){var q=G.target.checked;if(q){var X=x.map(function(ue){var ce=ue.name,he=(0,Ln.Z)(ue,["name"]);return(0,f.default)({},he,{controlId:N().get(v[0],"controlId"),control:N().get(v[0],"control")})});ne(X)}else ne([])}},e.createElement("span",{className:"Font13"},_l("\u5168\u9009"))),x.filter(function(j){return(j.name||"").toLocaleLowerCase().includes(B.toLocaleLowerCase())}).map(function(j){return e.createElement(nt.default,{key:j.objectId,checked:!!N().find(v,{objectId:j.objectId}),onChange:function(q){var X=q.target.checked;X?z(j.objectId):K(j.objectId)}},e.createElement("span",{className:"Font13"},j.name))})))},J=function(j){var G=N().find(x,{objectId:j.objectId}),q=j.worksheetId==N().get(G,"worksheetId"),X=N().get(G,"name");return e.createElement("div",{key:j.objectId,className:E()("tag valignWrapper",{warning:!q||!G})},e.createElement(O.Z,{className:"Gray_75 Font17",icon:j.type===1?"worksheet_column_chart":"view_eye"}),G?e.createElement(e.Fragment,null,e.createElement("span",{className:"Font13 mLeft5 mRight5 ellipsis",title:X},X),!q&&e.createElement(Xn.default,{title:_l("\u6B64\u5BF9\u8C61\u7684\u6570\u636E\u6E90\u5DE5\u4F5C\u8868\u5DF2\u66F4\u6539\uFF0C\u65E0\u6CD5\u7B5B\u9009\u3002\u8BF7\u5220\u9664\u540E\u91CD\u65B0\u6DFB\u52A0"),placement:"bottom"},e.createElement(O.Z,{className:"Red Font17 pointer mRight2",icon:"knowledge-message"}))):e.createElement("span",{className:"Font13 Red mLeft5 mRight5"},_l("\u8BE5\u7B5B\u9009\u5BF9\u8C61\u5DF2\u5220\u9664")),e.createElement(O.Z,{className:"Gray_9e Font16 pointer",icon:"close",onClick:function(){K(j.objectId)}}))};return S?e.createElement(Xe.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"valignWrapper mBottom8"},e.createElement("div",{className:"flex Font13 bold"},_l("\u7B5B\u9009\u5BF9\u8C61")),e.createElement("div",{className:"valignWrapper"},e.createElement(Xn.default,{title:_l("\u52FE\u9009\u65F6\uFF0C\u7EC4\u4EF6\u5185\u7684\u7B5B\u9009\u5668\u4F7F\u7528\u76F8\u540C\u7684\u7B5B\u9009\u5BF9\u8C61\uFF1B\u53D6\u6D88\u52FE\u9009\u540E\uFF0C\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u7B5B\u9009\u5668\u8BBE\u7F6E\u5355\u72EC\u7684\u7B5B\u9009\u5BF9\u8C61\u3002")},e.createElement(nt.default,{checked:t.global,onChange:a},e.createElement("span",{className:"Font13"},_l("\u4F5C\u4E3A\u5168\u5C40\u914D\u7F6E")))))),e.createElement("div",{className:"Gray_9e Font13 mBottom12 Font13"},_l("\u9009\u62E9\u7EDF\u8BA1\u56FE\u8868\u6216\u89C6\u56FE\u7EC4\u4EF6")),e.createElement(zi,null,v.map(function(P){return J(P)}),e.createElement("div",{className:"tag add valignWrapper pointer",onClick:function(){b(!0)}},e.createElement(O.Z,{className:"Font17",icon:"add"}),e.createElement("span",{className:"bold"},_l("\u7EC4\u4EF6")))),e.createElement(Vt.default,{visible:u,destroyPopupOnHide:!0,onVisibleChange:function(j){b(j)},getPopupContainer:function(){return document.querySelector(".customPageFilterWrap .setting")},trigger:["click"],overlay:fe()},e.createElement("div",{className:"Relative",style:{top:"-15px"}})))}var Bd=i(34279),it=i(64749),$i=i(52945),Vi=i.n($i),Hi=i(46593),Mt=i.n(Hi),wr=i(26358),Ea=i(62232),Mn=i(46630),ir=i(44253),Ui=(0,xe.Z)([`
  border-radius: 3px;
  padding: 3px;
  background-color: #eff0f0;
  > div {
    justify-content: center;
    box-sizing: border-box;
    padding: 4px 10px;
    color: #757575;
    font-size: 13px;
    cursor: pointer;
    &.active {
      color: #2196f3;
      font-weight: bold;
      border-radius: 3px;
      background-color: #fff;
    }
  }
`],[`
  border-radius: 3px;
  padding: 3px;
  background-color: #eff0f0;
  > div {
    justify-content: center;
    box-sizing: border-box;
    padding: 4px 10px;
    color: #757575;
    font-size: 13px;
    cursor: pointer;
    &.active {
      color: #2196f3;
      font-weight: bold;
      border-radius: 3px;
      background-color: #fff;
    }
  }
`]),Yi=(0,xe.Z)([`
  height: auto;
  overflow-y: auto;
  .ant-checkbox-input {
    position: absolute;
  }
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`],[`
  height: auto;
  overflow-y: auto;
  .ant-checkbox-input {
    position: absolute;
  }
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`]),Qi=(0,xe.Z)([`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 5px 11px;
  transition: all 0.3s;
  &:hover,
  &.active {
    border-color: #40a9ff;
  }
  &:hover {
    .moreTime {
      display: none;
    }
    .clearTimeRange {
      display: block;
    }
  }
  .clearTimeRange {
    display: none;
  }
`],[`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 5px 11px;
  transition: all 0.3s;
  &:hover,
  &.active {
    border-color: #40a9ff;
  }
  &:hover {
    .moreTime {
      display: none;
    }
    .clearTimeRange {
      display: block;
    }
  }
  .clearTimeRange {
    display: none;
  }
`]),Or=Ee.ZP.div(Ui),Xi=Ee.ZP.div(Yi),Ki=Ee.ZP.div(Qi);function Ji(n){var r=n.filter,o=n.setFilter,t=n.firstControlData,l=r.advancedSetting,a=l===void 0?{}:l,s=n.dataType,p=(0,e.useState)(!1),v=(0,H.Z)(p,2),c=v[0],h=v[1],u=function(){var S=a.daterange||"[1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,21,22,23,31,32,33]";try{S=JSON.parse(S)}catch(w){S=[]}return S},b=u(),m=function(S){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};o((0,f.default)({},w,{advancedSetting:(0,f.default)({},a,S)}))},g=function(S){var w=r.filterType,L=r[S.key],W=S.types;return["dateRangeType"].includes(S.key)&&(W=N().get(t,"advancedSetting.showtype")==="5"?W.filter(function(B){return B.value===5}):N().get(t,"advancedSetting.showtype")==="4"?W.filter(function(B){return B.value!==3}):W),e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font13 mBottom8 Font13"},S.txt),e.createElement(Or,{className:"valignWrapper mBottom12"},W.map(function(B,Y){return e.createElement("div",{key:B.value,className:E()("valignWrapper flex",{active:B.value==(L||S.default)}),onClick:function(){var K=(0,ft.default)({},S.key,B.value);S.key==="filterType"&&(K.dateRangeType=B.value!==ir.W5.DATEENUM?void 0:(0,Mn.zT)(t)),S.key==="dateRangeType"&&m((0,ft.default)({},Mn.qI.key,ie()(b.filter(function(ne){return B.value==5?Mn.A8.includes(ne):B.value==4?Mn.NG.includes(ne):!0})))),o(K)}},B.text)})))},x=function(S){return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font13 mBottom8 Font13"},S.txt),e.createElement(Or,{className:"valignWrapper mBottom12"},S.types.map(function(w,L){return e.createElement("div",{key:w.value,className:E()("valignWrapper flex",{active:w.value==(a[S.key]||S.default)}),onClick:function(){var B=(0,ft.default)({},S.key,w.value);if(S.key==="allowitem"&&w.value===1){var Y=r.values,z=Y===void 0?[]:Y;m(B,{values:z.length?[z[0]]:z})}else m(B)}},w.text,w.txt&&e.createElement(Xn.default,{title:w.txt},e.createElement(O.Z,{className:"mLeft5",icon:"knowledge-message"})))})))},F=function y(S){var w=b.length>=Mn.qI.default.length;return e.createElement("div",{className:"flexColumn"},S.map(function(L,W){return N().isArray(L)?e.createElement(e.Fragment,{key:W},y(L),!!L.length&&e.createElement(Gn.Z,{className:"mTop5 mBottom5"})):e.createElement(e.Fragment,{key:W},e.createElement(nt.default,{className:"mLeft10 mTop5 mBottom5",checked:w||b.includes(L.value),onClick:function(){var Y=b;L.value==="all"?Y=w?[]:Mn.qI.default:Y.includes(L.value)?Y=Y.filter(function(z){return z!==L.value}):Y=Y.concat(L.value),m((0,ft.default)({},Mn.qI.key,ie()(Y)))}},L.text))}))},C=function(){var S=(N().get(r,"dateRangeType")||"").toString(),w=(N().get(t,"advancedSetting.showtype")||"").toString(),L=Mn.qI.types,W=b.length>=Mn.qI.default.length;return(N().includes(["4","5"],w)||N().includes(["4","5"],S))&&(L=L.map(function(B){return B.filter(function(Y){return N().includes([S,w].includes("5")?Mn.A8:Mn.NG,Y.value)})}).filter(function(B){return B.length}),W=[S,w].includes("5")?b.length>=Mn.A8.length:b.length>=Mn.NG.length),e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font13 mBottom8 Font13"},Mn.qI.txt),e.createElement(Vt.default,{trigger:["click"],visible:c,onVisibleChange:function(Y){h(Y)},getPopupContainer:function(){return document.querySelector(".customPageFilterWrap .setting")},overlay:e.createElement(Xi,{className:"WhiteBG card pTop10"},F(L))},e.createElement(Ki,{className:E()("w100 valignWrapper WhiteBG pointer mBottom10",{active:c})},e.createElement("div",{className:E()("flex",{Gray_bd:b.length<=0})},W?_l("\u5168\u9009"):b.length<=0?_l("\u8BF7\u9009\u62E9"):_l("\u9009\u4E86 %0 \u4E2A",b.length)),e.createElement(O.Z,{icon:"expand_more moreTime",className:"Gray_9e Font20"}),e.createElement(O.Z,{icon:"cancel1",className:"Font14 Gray_9e clearTimeRange",onClick:function(Y){Y.stopPropagation(),m({daterange:"[]"})}}))))};return e.createElement(e.Fragment,null,e.createElement("div",{className:"valignWrapper mBottom10"},e.createElement("div",{className:"flex Font13 bold"},_l("\u7B5B\u9009\u8BBE\u7F6E"))),[Mn.C0,Mn.O$,Mn.xW,Mn.Eu,Mn.zz].map(function(y){if(y.keys.includes(s))return g(y)}),Mn.mC.keys.includes(s)&&[ir.W5.DATEENUM].includes(r.filterType)&&g(Mn.mC),[Mn.dZ,Mn.Mg,Mn.t8].map(function(y){if(y.keys.includes(s))return x(y)}),Mn.qI.keys.includes(s)&&C())}var Er=i(77637);function qi(n){var r=n.appPkg,o=n.filter,t=n.setFilter,l=n.firstControlData,a=o.filterType,s=o.dateRangeType,p=o.advancedSetting,v=p===void 0?{}:p,c=r.projectId,h=r.id,u=v.direction,b=N().pick(o,"dateRange","dateRangeType","filterType","value","values","minValue","maxValue");return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font13 mBottom10 Font13"},_l("\u9ED8\u8BA4\u503C")),e.createElement("div",{className:E()({WhiteBG:u!=1})},e.createElement(Er.ZP,(0,f.default)({projectId:c,appId:h,advancedSetting:(0,f.default)({},v,{navfilters:v.showNavfilters?v.showNavfilters:v.navfilters}),control:l,filterType:a,dateRangeType:s},b,{onChange:function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},F=x.forceUpdate,C=(0,f.default)({},b,g);t((0,f.default)({},N().pick(C,"dateRange","value","values","minValue","maxValue","filterType")))}}))))}const el=(0,ze.$j)(function(n){return{appPkg:n.appPkg}})(qi);var nl=i(68111),Ia=i(27850),Dr=i(77632),tl=[{text:_l("\u5168\u90E8"),value:"1"},{text:_l("\u663E\u793A\u6307\u5B9A\u9879"),value:"2"},{text:_l("\u663E\u793A\u6EE1\u8DB3\u7B5B\u9009\u6761\u4EF6\u7684\u9879"),value:"3"}],al=function(r){return tl.filter(function(o){var t=r.type===30?r.sourceControlType:r.type;return[9,10,11,26].includes(t)?o.value!=="3":!0})};function rl(n){var r=n.filterId,o=n.dataType,t=n.sheet,l=n.allControls,a=n.control,s=n.advancedSetting,p=n.onChangeAdvancedSetting,v=s.navshow,c=v===void 0?"1":v,h=s.navfilters,u=(0,e.useState)(!1),b=(0,H.Z)(u,2),m=b[0],g=b[1],x=(0,e.useState)([]),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=(0,e.useState)([]),w=(0,H.Z)(S,2),L=w[0],W=w[1],B=s.showNavfilters?JSON.parse(s.showNavfilters):h?JSON.parse(h):[],Y=l.filter(function(z){return z&&z.controlId!==a.controlId});return(0,e.useEffect)(function(){a.type===29&&a.dataSource&&Tn.Z.getWorksheetInfo({worksheetId:a.dataSource,getTemplate:!0,relationWorksheetId:t.worksheetId}).then(function(z){W(_.get(z,["template","controls"]))})},[a.controlId]),e.createElement("div",{className:"mBottom15"},e.createElement("div",{className:"valignWrapper mBottom8"},e.createElement("div",{className:"flex Font13 bold"},_l("\u663E\u793A\u9879"))),e.createElement(it.default,{className:"customPageSelect mBottom8 w100",value:c,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u7B5B\u9009\u5B57\u6BB5"),getPopupContainer:function(){return document.querySelector(".customPageFilterWrap .setting")},onSelect:function(K){p({navshow:K,navfilters:ie()([]),showNavfilters:ie()([])}),K==="3"&&g(!0)}},al(a).map(function(z){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:z.value,value:z.value},e.createElement("div",{className:"valignWrapper h100 w100"},e.createElement("span",{className:"mLeft5 Font13 ellipsis"},z.text)))})),c==="2"&&e.createElement("div",{className:"WhiteBG"},e.createElement(Er.ZP,(0,f.default)({},t,{controlId:a.controlId,active:!1,from:a.type===26&&_.get(a,"advancedSetting.usertype")==="2"?"":"NavShow",control:(0,f.default)({},a,{advancedSetting:_.includes([9,10,11])?(0,f.default)({},a.advancedSetting,{allowadd:"0"}):a.advancedSetting}),advancedSetting:{direction:"2",allowitem:"2"},values:(0,Ia.W)(o,B),onChange:function(K){if(a.type===29){var ne=ie()(K.values.map(function(G){return G.rowid})),fe=K.values.map(function(G){var q=(0,Ve.Nx)(a,G);return ie()({id:G.rowid,name:q})});p({navfilters:ne,showNavfilters:ie()(fe)})}else if(a.type===26){var J=ie()(K.values.map(function(G){return G.accountId})),P=K.values.map(function(G){return ie()({id:G.accountId,name:G.fullname,avatar:G.avatar})});p({navfilters:J,showNavfilters:ie()(P)})}else{var j=ie()(K.values);p({navfilters:j,showNavfilters:j})}}}))),c==="3"&&e.createElement(e.Fragment,null,m&&e.createElement(nl.Z,{data:a,overlayClosable:!1,relationControls:L,title:"\u7B5B\u9009",filters:B,allControls:_.get(t,"template.controls")||[],globalSheetInfo:t,globalSheetControls:Y,onChange:function(K){var ne=K.filters;p({navfilters:ie()(ne.map(Dr.gC)),showNavfilters:ie()(ne)}),g(!1)},fromCondition:"fastFilter",onClose:function(){g(!1)}}),B.length>0&&e.createElement(Tr.Z,{className:"WhiteBG",fromCondition:"fastFilter",data:a,filters:B,controls:L,allControls:_.get(t,"template.controls")||[],globalSheetControls:Y,loading:!1,editFn:function(){return g(!0)}})))}const ol=rl;function il(n){var r=n.filter,o=n.setFilter,t=(0,e.useState)([]),l=(0,H.Z)(t,2),a=l[0],s=l[1],p=(0,e.useState)(!0),v=(0,H.Z)(p,2),c=v[0],h=v[1],u=(0,e.useState)(!0),b=(0,H.Z)(u,2),m=b[0],g=b[1],x=(0,e.useState)(""),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=r.filterId,w=r.objectControls,L=w===void 0?[]:w,W=r.dataType,B=r.advancedSetting,Y=N().uniqBy(L,"worksheetId");(0,e.useEffect)(function(){var fe=Y.filter(function(J){return!N().find(a,{worksheetId:J.worksheetId})}).map(function(J){return Tn.Z.getWorksheetInfo({worksheetId:J.worksheetId,getTemplate:!0})});fe.length&&(g(!0),Mt().all(fe).then(function(J){h(!1),g(!1),J=J.map(function(P){var j=N().get(P,"template.controls");return N().set(P,"template.controls",(0,wa.zj)(P.appId,j).map(wr.BM)),P.name=(0,Oe.T3)(P.appId,P.worksheetId).name||P.name,P}),s(a.concat(J))}))},[L]);var z=N().find(a,{worksheetId:N().get(Y[0],"worksheetId")}),K=N().find(N().get(z,"template.controls"),{controlId:N().get(Y[0],"controlId")})||{},ne=function(J,P){var j=Y[P-1]||{},G=N().find(a,{worksheetId:J.worksheetId}),q=N().get(G,"template.controls")||[],X=N().find(q,{controlId:J.controlId}),ue=N().find(a,{worksheetId:N().get(j,"worksheetId")}),ce=N().find(N().get(ue,"template.controls"),{controlId:N().get(j,"controlId")})||{},he=[Qt.DN.FLAT_MENU,Qt.DN.MULTI_SELECT,Qt.DN.DROP_DOWN].includes(ce.type),Se=[Qt.DN.RELATE_SHEET].includes(ce.type),ke=function(){return he?e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u6570\u636E\uFF0C\u9009\u9879\u9700\u8981\u7528\u540C\u4E00\u4E2A\u9009\u9879\u96C6\u7684\u5B57\u6BB5")):Se?e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u6570\u636E\uFF0C\u5173\u8054\u8BB0\u5F55\u9700\u8981\u4F7F\u7528\u540C\u5173\u8054\u8868\u7684\u5B57\u6BB5")):e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u6570\u636E"))};return e.createElement("div",{key:J.worksheetId,className:P===Y.length-1?"mBottom16":"mBottom20"},e.createElement("div",{className:"mBottom12 flexRow"},m?e.createElement(Xe.Z,{className:"mLeft0",size:"small"}):G?e.createElement("span",{className:"Gray bold"},_l("\u5DE5\u4F5C\u8868\uFF1A%0",N().get(G,"name"))):e.createElement("span",{className:"Red"},_l("\u5DE5\u4F5C\u8868\u5DF2\u5220\u9664"))),e.createElement(it.default,{showSearch:!0,className:E()("customPageSelect w100",{Red:J.controlId&&!X}),value:J.controlId?X?J.controlId:_l("\u5B57\u6BB5\u5DF2\u5220\u9664"):void 0,disabled:P&&!j.controlId,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u7B5B\u9009\u5B57\u6BB5"),notFoundContent:ke(),getPopupContainer:function(){return document.querySelector(".customPageFilterWrap .setting")},onSearch:function(Qe){return y(Qe)},filterOption:function(Qe,nn){var kn=nn.value,In=N().find(q,{controlId:kn})||{},Fn=In.controlName;return Qe&&Fn?Fn.toLowerCase().includes(Qe.toLowerCase()):!0},onChange:function(Qe){var nn=r.objectControls,kn=nn===void 0?[]:nn,In=kn.map(function(rn){var Cn=(0,f.default)({},rn);return rn.worksheetId===J.worksheetId?Cn.controlId=Qe||"":P||(Cn.controlId=""),Cn}),Fn={objectControls:In};if(!P){var yn=N().find(a,{worksheetId:N().get(Y[0],"worksheetId")}),rt=N().find(N().get(yn,"template.controls"),{controlId:Qe})||{},Zn=rt.type,ot=(0,Mn.Nz)(rt),ut=ot.controlId,wn=(0,Ln.Z)(ot,["controlId"]);Fn.control=rt,Fn.filterType=0,Fn.values=[],Fn.value="",Fn.minValue="",Fn.maxValue="",Vi()(Fn,wn)}y(""),o(Fn)}},(0,Ea.UX)(q).filter(function($e){return Mn.Dv.includes($e.type)||$e.type===Qt.DN.SHEET_FIELD&&Mn.Dv.includes(($e.sourceControl||{}).type)}).filter(function($e){return P?[9,11].includes($e.type)===[9,11].includes(ce.type)?!0:$e.type===ce.type:!0}).filter(function($e){return he||Se?$e.controlId==="rowid"?!0:$e.dataSource&&ce.dataSource?$e.dataSource===ce.dataSource:!1:!0}).map(function($e){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:$e.controlId,value:$e.controlId},e.createElement("div",{className:"valignWrapper h100 w100"},e.createElement(O.Z,{className:"Gray_9e Font16",icon:(0,Ea.hB)($e.type)}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},$e.controlName)))})))};return c?e.createElement(Xe.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"valignWrapper mBottom8"},e.createElement("div",{className:"flex Font13 bold"},_l("\u7B5B\u9009\u5B57\u6BB5"))),e.createElement("div",{className:"Gray_75 Font13 mBottom14 Font13"},Y.length<=1?_l("\u9009\u62E9\u7B5B\u9009\u5BF9\u8C61\u7684\u6570\u636E\u6E90\u8868\u4E2D\u7684\u5B57\u6BB5\u8FDB\u884C\u7B5B\u9009"):_l("\u9009\u62E9\u4E86\u6765\u6E90\u4E8E\u591A\u4E2A\u5DE5\u4F5C\u8868\u6570\u636E\u7684\u7EC4\u4EF6\uFF0C\u8BF7\u9009\u62E9\u540C\u7C7B\u578B\u5B57\u6BB5\u4EE5\u8FDB\u884C\u5408\u5E76\u7B5B\u9009")),e.createElement("div",null,Y.map(function(fe,J){return ne(fe,J)}),[29,11,10,9,26].includes(W)&&e.createElement(ol,{dataType:W,sheet:z,allControls:n.allControls,control:K,filterId:S,advancedSetting:B,onChangeAdvancedSetting:function(J){var P=J.navshow,j=r.values;if([9,10,11].includes(W)){var G=JSON.parse(J.navfilters);j=r.values.filter(function(q){return G.includes(q)})}o({values:P==="2"?[]:j,advancedSetting:(0,f.default)({},B,J)})}})),e.createElement(Gn.Z,{className:"mTop0 mBottom15"}),!!W&&e.createElement(e.Fragment,null,e.createElement(Ji,{firstControlData:K,dataType:W,filter:r,setFilter:o}),e.createElement(el,{firstControlData:N().cloneDeep(K),dataType:W,filter:r,setFilter:o})))}var ll=(0,xe.Z)([`
  box-sizing: border-box;
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  overflow: auto;
  position: relative;

  .ant-checkbox-input {
    position: absolute;
  }
  .ant-input {
    font-size: 13px;
    padding: 5px 11px;
    border-radius: 3px !important;
    &:focus, &.ant-input-focused {
      box-shadow: none;
    }
  }
  .icon-delete2:hover {
    color: #2196F3;
  }
`],[`
  box-sizing: border-box;
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  overflow: auto;
  position: relative;

  .ant-checkbox-input {
    position: absolute;
  }
  .ant-input {
    font-size: 13px;
    padding: 5px 11px;
    border-radius: 3px !important;
    &:focus, &.ant-input-focused {
      box-shadow: none;
    }
  }
  .icon-delete2:hover {
    color: #2196F3;
  }
`]),sl=Ee.ZP.div(ll);function cl(n){var r=n.filter,o=r===void 0?{}:r,t=n.setFilter,l=n.filters,a=l===void 0?[]:l,s=n.setFilters,p=n.setActiveId,v=n.appId,c=n.appPkg,h=c===void 0?{}:c,u=n.pageId,b=n.components,m=a.map(function(C){var y=C.control,S=C.objectControls;return y||N().get(S[0],"control")}),g=function(y){var S=y.target.checked,w=o.filterId,L=o.objectControls,W=a.map(function(B){var Y=(0,f.default)({},B,{global:S});return S&&(Y.objectControls=w===B.filterId?L:L.map(function(z){var K=N().find(Y.objectControls,{worksheetId:z.worksheetId});return K||(0,f.default)({},z,{controlId:""})})),Y});S?ia.Z.confirm({title:null,description:e.createElement("span",{className:"Gray Font17",style:{lineHeight:"26px"}},_l("\u5C06\u5F53\u524D\u6240\u9009\u7684\u7B5B\u9009\u5BF9\u8C61\u7528\u4E8E\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u5176\u4ED6\u7B5B\u9009\u5668\u7684\u5BF9\u8C61\u5C06\u4F1A\u88AB\u91CD\u7F6E\u3002")),onOk:function(){s(W)}}):s(W)},x=function(y){var S=o.filterId,w=a.map(function(L){var W=(0,f.default)({},L,{objectControls:S===L.filterId?y:y.map(function(B){var Y=N().find(L.objectControls,{worksheetId:B.worksheetId});return(0,f.default)({},B,{controlId:Y&&Y.controlId?Y.controlId:"",control:Y&&Y.control?Y.control:void 0})})});return W.objectControls.length||(W.dataType=0),W});s(w)},F=function(){var y=o.filterId;if(a.length===1){alert(_l("\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A\u7B5B\u9009\u5668"),3);return}var S=a.filter(function(w){return w.filterId!==y});s(S),p(S[0].filterId)};return e.createElement(sl,{className:"setting"},e.createElement("div",{className:"flexRow valignWrapper Gray_9e"},e.createElement("div",{className:"flex Font13"},_l("\u8BBE\u7F6E\u7B5B\u9009\u5668")),e.createElement("div",{"data-tip":_l("\u5220\u9664")},e.createElement(O.Z,{icon:"delete2",className:"Font20 pointer",onClick:F}))),e.createElement(Gn.Z,{className:"mTop15 mBottom15"}),e.createElement("div",{className:"Font13 bold mBottom10"},_l("\u7B5B\u9009\u5668\u540D\u79F0")),e.createElement(St.default,{className:"w100 Font13",placeholder:_l("\u672A\u547D\u540D"),value:o.name,onChange:function(y){t({name:y.target.value})}}),e.createElement(Gn.Z,{className:"mTop16 mBottom14"}),e.createElement(Mi,{pageId:u,components:b,filter:o,setFilter:function(y){y.objectControls.length||(y.dataType=0),t(y)},changeGlobal:g,changeAllFilterObjectControls:x}),!!N().get(o,"objectControls.length")&&e.createElement(e.Fragment,null,e.createElement(Gn.Z,{className:"mTop5 mBottom14"}),e.createElement(il,{filter:o,setFilter:t,allControls:m})))}const dl=(0,ze.$j)(function(n){return{appPkg:n.appPkg}})(cl);var ul=(0,xe.Z)([`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  }
  .btnWrap {
    margin: 8px 10px;
  }
`],[`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  }
  .btnWrap {
    margin: 8px 10px;
  }
`]),pl=(0,xe.Z)([`
  background-color: #eee;
  height: 100%;
  display: flex;
`],[`
  background-color: #eee;
  height: 100%;
  display: flex;
`]),_d=Ee.ZP.div(ul),fl=Ee.ZP.div(pl),Br={filterId:(0,Nt.Z)(),name:"",global:!0,dataType:0,filterType:0,objectControls:[],advancedSetting:{}},ml={filtersGroupId:"",name:"",enableBtn:!1,filters:[Br]};function gl(n){var r=n.ids,o=n.widget,t=n.onEdit,l=n.onClose,a=o.id,s=o.value,p=o.filter,v=(0,e.useState)(ml),c=(0,H.Z)(v,2),h=c[0],u=c[1],b=(0,e.useState)(N().get(h,"filters[0].filterId")),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=(0,e.useState)(!0),C=(0,H.Z)(F,2),y=C[0],S=C[1],w=h.filters,L=function(z){u((0,f.default)({},h,{filters:z}))},W=function(z){var K=w.map(function(ne){return ne.filterId===g?(0,f.default)({},ne,z):ne});u((0,f.default)({},h,{filters:K}))},B=function(){var z=h.filters;if(N().isEmpty(z[0].objectControls)){alert(_l("\u8BF7\u914D\u7F6E\u7B5B\u9009\u5BF9\u8C61"),3);return}t({filter:h})};return(0,e.useEffect)(function(){if(p){u(p),x(N().get(p,"filters[0].filterId")),S(!1);return}s?Tn.Z.getFiltersGroupByIds({appId:r.appId,filtersGroupIds:[s]}).then(function(Y){var z=Y[0];u((0,f.default)({},z,{filters:z.filters.map(function(K){return(0,f.default)({},K,{values:(0,Ia.W)(K.dataType,K.values)})})})),x(N().get(z,"filters[0].filterId")),S(!1)}):S(!1)},[s]),e.createElement(dt.Z,{maskStyle:{zIndex:999},wrapClassName:"customPageFilterWrap",className:"editWidgetDialogWrap",visible:!0,transitionName:"",maskTransitionName:"",width:"100%",footer:null,centered:!0,onCancel:l},e.createElement(na,null,e.createElement("div",{className:"typeName"},_l("\u7B5B\u9009\u5668")),e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(gt.default,{autoInsertSpaceInButton:!1},e.createElement(vt.default,{block:!0,className:"save",shape:"round",type:"primary",onClick:B},_l("\u4FDD\u5B58"))),e.createElement(Xn.default,{title:_l("\u5173\u95ED"),placement:"bottom"},e.createElement(O.Z,{icon:"close",className:"Font24 pointer mLeft16 Gray_9e",onClick:l})))),e.createElement(zt,null,e.createElement(fl,null,e.createElement(Oi,{loading:y,filter:h,setFilter:u,filters:w,setFilters:L,activeId:g,setActiveId:x}),e.createElement(dl,(0,f.default)({filter:N().find(w,{filterId:g})||{},setFilter:W,filters:w,setFilters:L,setActiveId:x},n)))))}var vl=i(98658),hl=i(68625),bl=i(94942),Bt=i.n(bl),Da=i(36803),zd=i(29073),xl=i(60713),yl=i(95283),Cl=i(70518),_r=i(82011),zr=i(85879),Ar=i(58916),wl=i(66344);function El(n){for(var r=n.replace(/\n/," ").split(" "),o=[],t=0;t<r.length;t++){var l=r[t];wl.Z.isURL(l)&&o.push(l)}return o}var Il=(0,xe.Z)([`
  &.slick-slider .slick-dots li {
    width: 10px;
    height: 10px;
    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      background-color: transparent;
      opacity: 1;
      &:hover {
        opacity: 1;
        background-color: #fff;
      }
    }
    &.slick-active {
      width: 10px;
      button {
        background-color: #fff !important;
      }
    }
  }
  .slick-dots {
    margin: 0 !important;
  }
  .slick-dots li button {
    box-shadow: 0 2px 6px 0px rgb(0 0 0 / 15%);
  }
  .image {
    width: 100%;
    height: 100%;
    &.fill {
      background-size: cover;
    }
    &.full {
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
  }
  &:hover {
    .mask {
      display: block;
    }
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    display: none;
    pointer-events: none;
  }
  .explain {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 80%);
    .content {
      overflow: auto;
      padding: 0 30px;
      margin: 80px 0 35px;
      max-height: calc(100% - 30px);
    }
    .title,
    .subTitle {
      cursor: initial;
      max-width: 720px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
  .hideMore {
    cursor: pointer !important;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  &.slick-slider:hover {
    .slick-prev,
    .slick-next {
      display: flex !important;
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-next {
    width: 24px;
    height: 48px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-top: -24px;
    background-color: rgb(51 51 51 / 40%);
    display: none !important;
    &:hover {
      background-color: rgb(51 51 51 / 60%);
      .icon {
        opacity: 0.7;
      }
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-prev:hover {
    left: 0;
    z-index: 2;
    color: white;
    border-radius: 0px 6px 6px 0px;
  }

  &.slick-slider .slick-next,
  &.slick-slider .slick-next:hover {
    right: 0;
    z-index: 2;
    color: white;
    border-radius: 6px 0px 0px 6px;
  }
`],[`
  &.slick-slider .slick-dots li {
    width: 10px;
    height: 10px;
    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      background-color: transparent;
      opacity: 1;
      &:hover {
        opacity: 1;
        background-color: #fff;
      }
    }
    &.slick-active {
      width: 10px;
      button {
        background-color: #fff !important;
      }
    }
  }
  .slick-dots {
    margin: 0 !important;
  }
  .slick-dots li button {
    box-shadow: 0 2px 6px 0px rgb(0 0 0 / 15%);
  }
  .image {
    width: 100%;
    height: 100%;
    &.fill {
      background-size: cover;
    }
    &.full {
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
  }
  &:hover {
    .mask {
      display: block;
    }
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    display: none;
    pointer-events: none;
  }
  .explain {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 80%);
    .content {
      overflow: auto;
      padding: 0 30px;
      margin: 80px 0 35px;
      max-height: calc(100% - 30px);
    }
    .title,
    .subTitle {
      cursor: initial;
      max-width: 720px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
  .hideMore {
    cursor: pointer !important;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  &.slick-slider:hover {
    .slick-prev,
    .slick-next {
      display: flex !important;
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-next {
    width: 24px;
    height: 48px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-top: -24px;
    background-color: rgb(51 51 51 / 40%);
    display: none !important;
    &:hover {
      background-color: rgb(51 51 51 / 60%);
      .icon {
        opacity: 0.7;
      }
    }
  }

  &.slick-slider .slick-prev,
  &.slick-slider .slick-prev:hover {
    left: 0;
    z-index: 2;
    color: white;
    border-radius: 0px 6px 6px 0px;
  }

  &.slick-slider .slick-next,
  &.slick-slider .slick-next:hover {
    right: 0;
    z-index: 2;
    color: white;
    border-radius: 6px 0px 0px 6px;
  }
`]),Sl=(0,Ee.ZP)(xl.Z)(Il),kl={"7%":1,"15%":0,"25%":3,"30%":2};function Nl(n){var r=n.title,o=n.subTitle,t=n.onClick,l=(0,e.useState)(!1),a=(0,H.Z)(l,2),s=a[0],p=a[1];return e.createElement("div",{className:"explain White",onClick:function(c){var h=c.target;(h.classList.contains("explain")||h.classList.contains("content"))&&t()}},e.createElement("div",{className:"content"},e.createElement("div",{className:"Font20 mBottom5 ellipsis title bold"},r),e.createElement("div",{className:E()("Font14 pointer subTitle",{hideMore:!s}),onClick:function(){return p(!s)}},o)))}function Gr(n){var r=function(){var tn=(0,Da.Z)(Bt().mark(function Je(on){var un,gn,bn,Le,Ie,qe,jn,pn;return Bt().wrap(function(Rn){for(;;)switch(Rn.prev=Rn.next){case 0:if(un=on.rowid,gn=t.action,bn=t.openMode,!s){Rn.next=4;break}return Rn.abrupt("return");case 4:if(!(gn===1&&!N().get(window,"shareState.shareId"))){Rn.next=16;break}return Rn.next=7,Pn.Z.getAppSimpleInfo({workSheetId:he});case 7:if(Le=Rn.sent,Ie=Le.appId,(0,Oe.Ye)("worksheetRecord",he,{rowId:un}),!window.isMingDaoApp){Rn.next=13;break}return location.href="/app/"+Ie+"/"+he+"/"+Se+"/row/"+un,Rn.abrupt("return");case 13:bn===1&&K({appId:Ie,rowId:un}),bn===2&&(location.href="/app/"+Ie+"/"+he+"/"+Se+"/row/"+un),bn===3&&window.open("/app/"+Ie+"/"+he+"/"+Se+"/row/"+un);case 16:gn===2&&(qe=on[kn],jn=El(qe)[0],jn&&bn===1&&window.open(jn),jn&&bn===2&&(location.href=jn)),gn===3&&(In.type===14&&(0,yl.Z)({index:J,attachments:m,callFrom:"player",showThumbnail:!0,hideFunctions:["editFileName","saveToKnowlege","share"]}),In.type===47&&(pn=ue.current.querySelector(".slick-list .slick-active img"),(0,Cl.x)(pn.src,{disableDownload:!0,ext:"png",name:"code.png",theme:"light"})));case 18:case"end":return Rn.stop()}},Je,this)}));return function(on){return tn.apply(this,arguments)}}(),o=n.componentConfig,t=o===void 0?{}:o,l=n.config,a=l===void 0?{}:l,s=n.editable,p=(0,e.useState)(!0),v=(0,H.Z)(p,2),c=v[0],h=v[1],u=(0,e.useState)([]),b=(0,H.Z)(u,2),m=b[0],g=b[1],x=(0,e.useState)([]),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=(0,e.useState)([]),w=(0,H.Z)(S,2),L=w[0],W=w[1],B=(0,e.useState)({}),Y=(0,H.Z)(B,2),z=Y[0],K=Y[1],ne=(0,e.useState)(0),fe=(0,H.Z)(ne,2),J=fe[0],P=fe[1],j=(0,e.useState)(0),G=(0,H.Z)(j,2),q=G[0],X=G[1],ue=(0,e.useRef)(),ce=(0,Oe.Q9)(),he=t.worksheetId,Se=t.viewId,ke=t.image,$e=t.count,Qe=t.title,nn=t.subTitle,kn=t.url,In=N().find(L,{controlId:ke})||{};(0,e.useEffect)(function(){he&&Se&&ke?Pn.Z.getAttachementImages({workSheetId:he,viewId:Se,attachementControlId:ke,imageLimitCount:$e,filedIds:[Qe,nn,kn].filter(function(tn){return tn}),displayMode:a.displayMode}).then(function(tn){var Je=tn.appId,on=tn.code,un=tn.imageData,gn=un===void 0?[]:un,bn=tn.rowData,Le=bn===void 0?[]:bn,Ie=tn.controls,qe=Ie===void 0?[]:Ie,jn=N().find(qe,{controlId:ke})||{};jn.type===14&&g(gn.map(function(pn){return(0,f.default)({},JSON.parse(pn.image),{rowId:pn.rowId})})),jn.type===47&&g(gn.map(function(pn){return{image:(0,Ve.hC)({data:[(0,f.default)({},jn,{value:pn.image})],control:{enumDefault:jn.enumDefault,enumDefault2:jn.enumDefault2,dataSource:ke},codeInfo:{recordId:pn.rowId,appId:Je,worksheetId:he,viewId:Se}}),rowId:pn.rowId}}).filter(function(pn){return pn.image})),y(Le.map(function(pn){return JSON.parse(pn)})),W(qe),X(on),h(!1)}):(g([]),y([]),h(!1))},[he,Se,ke,Qe,nn,kn,a.displayMode]);var Fn=N().get(ue.current,"clientWidth"),yn=N().get(ue.current,"clientHeight"),rt={position:"relative",height:yn,backgroundColor:In.type===14?a.fillColor:"#fff"},Zn=function(){if(q===0)return e.createElement("div",{className:"flexColumn valignWrapper w100 h100",style:{justifyContent:"center"}},e.createElement(O.Z,{icon:"picture",className:"Font64 Gray_c mBottom10"}),e.createElement("div",{className:"Gray_9e Font13"},_l("\u6682\u65E0\u8F6E\u64AD\u56FE\u7247")));if(q===1)return e.createElement("div",{className:"flexColumn valignWrapper w100 h100",style:{justifyContent:"center"}},e.createElement(O.Z,{icon:"workflow_failure",className:"Font64 Gray_c mBottom10"}),e.createElement("div",{className:"Gray_9e Font20 mBottom2"},_l("\u65E0\u6CD5\u5F62\u6210\u8F6E\u64AD\u56FE")),e.createElement("div",{className:"Gray_9e Font16"},_l("\u6784\u6210\u8981\u7D20\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664")))},ot=function(){return e.createElement("div",{className:"flexRow valignWrapper w100 h100"},e.createElement(Xe.Z,null))},ut=function(Je,on){return e.createElement("div",{onClick:function(){return r(Je)},className:E()("image pointer",{fill:a.fill===1,full:a.fill===2}),style:{backgroundImage:"url("+on.viewUrl+"&|imageView2/0/q/100)"}})},wn=function(Je,on){var un=In.advancedSetting;un=un===void 0?{}:un;var gn=un.width,bn=un.faultrate,Le=In.enumDefault,Ie=parseFloat(gn);return e.createElement("div",{onClick:function(){return r(Je)},className:"image pointer flexRow alignItemsCenter justifyContentCenter"},Le===1?e.createElement(hl.Z,{value:on.image,renderer:"img",renderWidth:Fn}):e.createElement(vl.Z,{gap:6,content:on.image,width:yn,height:yn,correctLevel:kl[bn]}))},rn=function(Je){var on=N().find(C,{rowid:Je.rowId})||{},un=N().find(L,{controlId:Qe})||{},gn=N().find(L,{controlId:nn})||{};return e.createElement("div",{key:Je.fileID},e.createElement("div",{style:rt},In.type===14&&ut(on,Je),In.type===47&&wn(on,Je),e.createElement("div",{className:"mask"}),(on[Qe]||on[nn])&&e.createElement(Nl,{title:(0,zr.G)({value:on[Qe],advancedSetting:un.advancedSetting}),subTitle:(0,zr.G)({value:on[nn],advancedSetting:gn.advancedSetting}),onClick:function(){return r(on)}})))},Cn=function(){return e.createElement(e.Fragment,null,e.createElement(Sl,{autoplay:z.rowId?!1:a.autoplaySpeed!==!1,arrows:!0,prevArrow:e.createElement("div",null,e.createElement(O.Z,{className:"Font30",icon:"navigate_before"})),nextArrow:e.createElement("div",null,e.createElement(O.Z,{className:"Font30",icon:"navigate_next"})),effect:a.effect,autoplaySpeed:a.autoplaySpeed*1e3,afterChange:function(on){P(on)}},m.map(function(Je){return rn(Je)})),z.rowId&&(ce?e.createElement(Ar.aY,{className:"full",visible:!!z.rowId,appId:z.appId,worksheetId:he,viewId:Se,rowId:z.rowId,onClose:function(){K({})}}):e.createElement(_r.Z,{from:3,visible:!!z.rowId,appId:z.appId,worksheetId:he,viewId:Se,recordId:z.rowId,hideRecordInfo:function(){K({})}})))};return e.createElement("div",{className:"w100 h100",ref:ue},c?ot():m.length?Cn():Zn())}var Pl=(0,xe.Z)([`
  display: flex;
  flex: 1;
  padding: 10px 24px;
  min-width: 0;

  .body {
    border-radius: 4px;
    box-shadow: 0px 1px 4px #00000029;
    overflow: auto;
    background-color: #fff;
  }
`],[`
  display: flex;
  flex: 1;
  padding: 10px 24px;
  min-width: 0;

  .body {
    border-radius: 4px;
    box-shadow: 0px 1px 4px #00000029;
    overflow: auto;
    background-color: #fff;
  }
`]),Tl=Ee.ZP.div(Pl),Fl=[{value:"scrollx",text:_l("\u6EDA\u52A8")},{value:"fade",text:_l("\u6DE1\u5165\u6DE1\u51FA")}];function Wl(n){var r=n.componentConfig,o=n.config,t=n.setConfig;return e.createElement(Tl,{className:"flexColumn"},e.createElement("div",{className:"flexRow valignWrapper header"},e.createElement("div",{className:"Font13 overflow_ellipsis mRight10"},_l("\u6837\u5F0F")),e.createElement("div",{className:"btnStyle mRight20"},Fl.map(function(l){var a=l.value,s=l.text;return e.createElement("div",{className:E()("item",{active:a===o.effect}),key:a,onClick:function(){t({effect:a})}},e.createElement("div",{className:"ellipsis Font14"},s))})),e.createElement("div",{className:"Font13 overflow_ellipsis mRight10"},_l("\u95F4\u9694")),e.createElement(Un,{maxCount:8,minCount:1,count:o.autoplaySpeed,needCloseSelect:!0,suffix:_l("\u79D2"),mode:"select",onChange:function(a){t({autoplaySpeed:a})}})),e.createElement(Gn.Z,{className:"mTop16 mBottom24"}),e.createElement("div",{className:"body flex mBottom72"},e.createElement(Gr,{componentConfig:r,config:o})))}var Mr=i(14338),Zl=(0,xe.Z)([`
  box-sizing: border-box;
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  overflow: auto;
  position: relative;

  .Dropdown--input {
    background-color: #fff;
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ming.Input::placeholder {
    color: #bdbdbd;
  }
  .customPageSelect {
    .ant-select-selector {
      height: 36px !important;
    }
    .ant-select-clear {
      width: 20px;
      height: 20px;
      margin-top: -10px;
    }
  }
  .fillSelect {
    flex: 2;
  }
  .selectCountWrapper {
    width: 100px;
    > div {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .countWrap {
      width: 100%;
      line-height: 32px;
    }
    .add {
      padding-top: 7px;
    }
    .sub {
      padding-bottom: 0px;
    }
  }
`],[`
  box-sizing: border-box;
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  overflow: auto;
  position: relative;

  .Dropdown--input {
    background-color: #fff;
  }
  .ant-checkbox-input {
    position: absolute;
  }
  .ming.Input::placeholder {
    color: #bdbdbd;
  }
  .customPageSelect {
    .ant-select-selector {
      height: 36px !important;
    }
    .ant-select-clear {
      width: 20px;
      height: 20px;
      margin-top: -10px;
    }
  }
  .fillSelect {
    flex: 2;
  }
  .selectCountWrapper {
    width: 100px;
    > div {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .countWrap {
      width: 100%;
      line-height: 32px;
    }
    .add {
      padding-top: 7px;
    }
    .sub {
      padding-bottom: 0px;
    }
  }
`]),Rl=(0,xe.Z)([`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: `,`;
`],[`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: `,`;
`]),$r=Ee.ZP.div(Zl),Ll=Ee.ZP.div(Rl,function(n){return n.color}),jl=[{name:_l("\u586B\u6EE1"),value:1},{name:_l("\u5B8C\u6574\u663E\u793A"),value:2}],Ol=[{name:_l("\u767D\u8272"),value:"#FFFFFF"},{name:_l("\u7070\u8272"),value:"#F5F5F5"},{name:_l("\u9ED1\u8272"),value:"#454545"}],Dl=[{name:_l("\u6253\u5F00\u8BB0\u5F55"),value:1},{name:_l("\u6253\u5F00\u94FE\u63A5"),value:2},{name:_l("\u9884\u89C8\u56FE\u7247"),value:3}],Bl=[{name:_l("\u5F39\u7A97"),value:1},{name:_l("\u5F53\u524D\u9875\u9762"),value:2},{name:_l("\u65B0\u9875\u9762"),value:3}];function zl(n){var r=n.appPkg,o=r===void 0?{}:r,t=n.ids,l=t===void 0?{}:t,a=n.componentConfig,s=n.setComponentConfig,p=n.config,v=n.setConfig,c=l.appId,h=o.projectId||o.id,u=a.worksheetId,b=a.viewId,m=a.image,g=a.count,x=a.title,F=a.subTitle,C=a.action,y=a.url,S=a.openMode,w=(0,e.useState)({views:[],controls:[]}),L=(0,H.Z)(w,2),W=L[0],B=L[1],Y=W.views,z=W.controls,K=(0,e.useState)(!0),ne=(0,H.Z)(K,2),fe=ne[0],J=ne[1];return(0,e.useEffect)(function(){u?Tn.Z.getWorksheetInfo({worksheetId:u,getTemplate:!0,getViews:!0,appId:c}).then(function(P){var j=P.resultCode,G=P.views,q=G===void 0?[]:G,X=P.template;if(j===1){var ue=(0,wa.zj)(c,X.controls);B({views:q.map(function(ce){return(0,f.default)({},ce,{name:(0,Oe.T3)(c,ce.viewId).name||ce.name})}),controls:ue})}J(!1)}):J(!1)},[u]),fe&&!Y.length?e.createElement($r,{className:"setting"},e.createElement(Xe.Z,null)):e.createElement($r,{className:"setting"},e.createElement("div",{className:"Font14 bold mBottom15"},_l("\u6570\u636E\u6E90")),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom12"},_l("\u5DE5\u4F5C\u8868")),e.createElement(at.Z,{dialogClassName:"btnSettingSelectDialog",worksheetType:0,projectId:h,appId:c,value:u,onChange:function(j,G){G!==u&&s({worksheetId:G,viewId:void 0,image:void 0,title:void 0,subTitle:void 0,url:void 0})}})),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom12"},_l("\u89C6\u56FE")),e.createElement(it.default,{showSearch:!0,className:E()("customPageSelect w100",{Red:b&&!N().find(Y,{viewId:b})}),value:b?N().find(Y,{viewId:b})?b:_l("\u89C6\u56FE\u5DF2\u5220\u9664"):void 0,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u89C6\u56FE"),notFoundContent:e.createElement("div",{className:"valignWrapper"},_l("\u8BF7\u5148\u9009\u62E9\u5DE5\u4F5C\u8868")),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},filterOption:function(j,G){var q=G.value,X=N().find(Y,{viewId:q})||{},ue=X.name;return j&&ue?ue.toLowerCase().includes(j.toLowerCase()):!0},onChange:function(j){s({viewId:j})}},Y.map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.viewId,value:P.viewId},e.createElement("div",{className:"valignWrapper h100"},e.createElement("span",{className:"Font13 ellipsis"},P.name)))}))),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom12"},_l("\u56FE\u7247")),e.createElement(it.default,{className:E()("customPageSelect w100",{Red:m&&!N().find(z,{controlId:m})}),value:m?N().find(z,{controlId:m})?m:_l("\u5B57\u6BB5\u5DF2\u5220\u9664"):void 0,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u5B57\u6BB5"),notFoundContent:e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u5B57\u6BB5")),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){s({image:j})}},z.filter(function(P){return[14,47].includes(P.type)}).map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.controlId,value:P.controlId},e.createElement("div",{className:"valignWrapper h100"},e.createElement(O.Z,{className:"Gray_9e Font16",icon:(0,Ea.hB)(P.type)}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},P.controlName)))}))),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom12"},_l("\u5C55\u793A\u56FE\u7247")),e.createElement("div",{className:"mBottom8"},e.createElement(Mr.Z,{text:_l("\u5168\u90E8"),checked:!p.displayMode||p.displayMode===0,onClick:function(){v({displayMode:0})}})),e.createElement("div",null,e.createElement(Mr.Z,{text:_l("\u6BCF\u6761\u8BB0\u5F55\u7B2C\u4E00\u5F20"),checked:p.displayMode===1,onClick:function(){v({displayMode:1})}}))),e.createElement("div",null,e.createElement("div",{className:"mBottom10"},_l("\u6700\u591A\u663E\u793A\u56FE\u7247\u6570\u91CF")),e.createElement("div",{className:"selectCountWrapper"},e.createElement(Un,{maxCount:20,minCount:1,count:g,onChange:function(j){s({count:j})}}))),e.createElement(Gn.Z,{className:"mTop15 mBottom15"}),e.createElement("div",{className:"Font14 bold mBottom15"},_l("\u8F6E\u64AD\u56FE\u8BBE\u7F6E")),N().get(N().find(z,{controlId:m}),"type")===14&&e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"flexRow"},e.createElement("div",{className:"flex"},e.createElement("div",{className:"mBottom8"},_l("\u586B\u5145\u65B9\u5F0F")),e.createElement(it.default,{className:"customPageSelect w100 fillSelect",value:p.fill,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){v({fill:j})}},jl.map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.value,value:P.value},e.createElement("div",{className:"valignWrapper h100"},e.createElement("span",{className:"Font13 ellipsis"},P.name)))}))),p.fill===2&&e.createElement("div",{className:"flex mLeft10"},e.createElement("div",{className:"mBottom8"},_l("\u80CC\u666F\u8272")),e.createElement(it.default,{className:"customPageSelect w100",value:p.fillColor,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){v({fillColor:j})}},Ol.map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.value,value:P.value},e.createElement("div",{className:"valignWrapper h100"},e.createElement(Ll,{color:P.value}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},P.name)))}))))),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom8"},_l("\u6807\u9898")),e.createElement(it.default,{className:E()("customPageSelect w100",{Red:x&&!N().find(z,{controlId:x})}),value:x?N().find(z,{controlId:x})?x:_l("\u5B57\u6BB5\u5DF2\u5220\u9664"):void 0,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),allowClear:!0,clearIcon:e.createElement(O.Z,{icon:"cancel1",className:"Gray_bd Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u6587\u672C\u5B57\u6BB5"),notFoundContent:e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u6587\u672C\u5B57\u6BB5")),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){s({title:j})}},z.filter(function(P){return P.type===2}).map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.controlId,value:P.controlId},e.createElement("div",{className:"valignWrapper h100"},e.createElement(O.Z,{className:"Gray_9e Font16",icon:(0,Ea.hB)(P.type)}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},P.controlName)))}))),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom8"},_l("\u6458\u8981")),e.createElement(it.default,{className:E()("customPageSelect w100",{Red:F&&!N().find(z,{controlId:F})}),value:F?N().find(z,{controlId:F})?F:_l("\u5B57\u6BB5\u5DF2\u5220\u9664"):void 0,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u6587\u672C\u5B57\u6BB5"),allowClear:!0,clearIcon:e.createElement(O.Z,{icon:"cancel1",className:"Gray_bd Font20"}),notFoundContent:e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u6587\u672C\u5B57\u6BB5")),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){s({subTitle:j})}},z.filter(function(P){return P.type===2}).map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.controlId,value:P.controlId},e.createElement("div",{className:"valignWrapper h100"},e.createElement(O.Z,{className:"Gray_9e Font16",icon:(0,Ea.hB)(P.type)}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},P.controlName)))}))),e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom8"},_l("\u70B9\u51FB\u56FE\u7247\u65F6")),e.createElement(it.default,{className:"customPageSelect w100",value:C,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){var G={action:j};j===2&&(G.openMode=1),s(G)}},Dl.map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.value,value:P.value},e.createElement("div",{className:"valignWrapper h100"},e.createElement("span",{className:"Font13 ellipsis"},P.name)))}))),C===2&&e.createElement(it.default,{className:"customPageSelect w100 mBottom16",value:y,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),placeholder:_l("\u8BF7\u9009\u62E9\u6587\u672C\u5B57\u6BB5"),notFoundContent:e.createElement("div",{className:"valignWrapper"},_l("\u6682\u65E0\u6587\u672C\u5B57\u6BB5")),getPopupContainer:function(){return document.querySelector(".customPageCarouselWrap .setting")},onChange:function(j){s({url:j})}},z.filter(function(P){return P.type===2}).map(function(P){return e.createElement(it.default.Option,{className:"selectOptionWrapper",key:P.controlId,value:P.controlId},e.createElement("div",{className:"valignWrapper h100"},e.createElement(O.Z,{className:"Gray_9e Font16",icon:(0,Ea.hB)(P.type)}),e.createElement("span",{className:"mLeft5 Font13 ellipsis"},P.controlName)))})),C!==3&&e.createElement("div",{className:"mBottom16"},e.createElement("div",{className:"mBottom8"},_l("\u6253\u5F00\u65B9\u5F0F")),e.createElement("div",{className:"btnStyle"},Bl.filter(function(P){return C===2?[1,2].includes(P.value):!0}).map(function(P){var j=P.value,G=P.name;return e.createElement("div",{className:E()("item flex",{active:j===S}),key:j,onClick:function(){s({openMode:j})}},e.createElement("div",{className:"Font14"},G))}))))}const Al=(0,ze.$j)(function(n){return{appPkg:n.appPkg}})(zl);var Gl=(0,xe.Z)([`
  background-color: #eee;
  height: 100%;
  display: flex;

  .btnStyle {
    display: flex;
    border-radius: 3px;
    padding: 3px;
    background-color: #e6e6e6;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      color: #9e9e9e;
      font-size: 20px;
      cursor: pointer;
      &:last-child {
        border: none;
      }
      &.active {
        color: #2196f3;
        font-weight: bold;
        border-radius: 3px;
        background-color: #fff;
      }
    }
  }
`],[`
  background-color: #eee;
  height: 100%;
  display: flex;

  .btnStyle {
    display: flex;
    border-radius: 3px;
    padding: 3px;
    background-color: #e6e6e6;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      color: #9e9e9e;
      font-size: 20px;
      cursor: pointer;
      &:last-child {
        border: none;
      }
      &.active {
        color: #2196f3;
        font-weight: bold;
        border-radius: 3px;
        background-color: #fff;
      }
    }
  }
`]),Ml=Ee.ZP.div(Gl),$l={count:20,action:1,openMode:1},Vl={effect:"scrollx",autoplaySpeed:3,fill:1,fillColor:"#454545",displayMode:0};function Hl(n){var r=n.ids,o=n.widget,t=n.onEdit,l=n.onClose,a=(0,e.useState)(o.componentConfig||$l),s=(0,H.Z)(a,2),p=s[0],v=s[1],c=(0,e.useState)(o.config||Vl),h=(0,H.Z)(c,2),u=h[0],b=h[1],m=function(){t({config:u,componentConfig:p})};return e.createElement(dt.Z,{maskStyle:{zIndex:999},wrapClassName:"customPageCarouselWrap",className:"editWidgetDialogWrap",visible:!0,transitionName:"",maskTransitionName:"",width:"100%",footer:null,centered:!0,onCancel:l},e.createElement(na,null,e.createElement("div",{className:"typeName"},_l("\u8F6E\u64AD\u56FE")),e.createElement("div",{className:"flexRow valignWrapper"},e.createElement(gt.default,{autoInsertSpaceInButton:!1},e.createElement(vt.default,{block:!0,className:"save",shape:"round",type:"primary",onClick:m},_l("\u4FDD\u5B58"))),e.createElement(Xn.default,{title:_l("\u5173\u95ED"),placement:"bottom"},e.createElement(O.Z,{icon:"close",className:"Font24 pointer mLeft16 Gray_9e",onClick:l})))),e.createElement(zt,null,e.createElement(Ml,null,e.createElement(Wl,(0,f.default)({},n,{config:u,componentConfig:p,setConfig:function(x){b((0,f.default)({},u,x))}})),e.createElement(Al,(0,f.default)({},n,{componentConfig:p,setComponentConfig:function(x){v((0,f.default)({},p,x))},config:u,setConfig:function(x){b((0,f.default)({},u,x))}})))))}var Ul=i(47426),Vr=i(88271),Yl=(0,xe.Z)([`
  height: 520px;
  .header {
    .create:hover * {
      color: #2196f3 !important;
    }
  }
  .ming.Radio {
    margin-right: 32px !important;
    .Radio-box {
      margin-right: 8px !important;
    }
  }
  .aiItem {
    border: 1px solid #ccc;
    padding: 14px 12px;
    border-radius: 4px;
    .iconWrap {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    &.disable {
      cursor: inherit;
      background-color: #f5f5f5;
    }
    &:hover {
      border-color: #2196f3;
    }
  }
  .emptyState {
    padding: 20px 0;
    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f5f5f5;
    }
    .create {
      color: #2196f3;
      border: 1px solid #2196f3;
      padding: 5px 20px;
      border-radius: 24px;
    }
  }
`],[`
  height: 520px;
  .header {
    .create:hover * {
      color: #2196f3 !important;
    }
  }
  .ming.Radio {
    margin-right: 32px !important;
    .Radio-box {
      margin-right: 8px !important;
    }
  }
  .aiItem {
    border: 1px solid #ccc;
    padding: 14px 12px;
    border-radius: 4px;
    .iconWrap {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    &.disable {
      cursor: inherit;
      background-color: #f5f5f5;
    }
    &:hover {
      border-color: #2196f3;
    }
  }
  .emptyState {
    padding: 20px 0;
    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f5f5f5;
    }
    .create {
      color: #2196f3;
      border: 1px solid #2196f3;
      padding: 5px 20px;
      border-radius: 24px;
    }
  }
`]),Ql=Ee.ZP.div(Yl),Xl=function(){var r=_.isEmpty((0,Oe.vo)(localStorage.getItem("currentProjectId")))?_.get(md,"global.Account.projects.0"):(0,Oe.vo)(localStorage.getItem("currentProjectId"));return r||{}},Kl=function(r){return e.createElement("div",{className:"w100 h100 flexColumn alignItemsCenter justifyContentCenter emptyState"},e.createElement("div",{className:"circle flexRow alignItemsCenter justifyContentCenter"},e.createElement(O.Z,{className:"Gray_9e Font56",icon:"contact_support"})),e.createElement("div",{className:"mTop10 mBottom20 Gray_75"},_l("AI\u95EE\u7B54\u52A9\u624B\u53EF\u4EE5\u5E2E\u52A9\u4F01\u4E1A\u77E5\u8BC6\u7EC4\u5B66\u4E60")),r.isProjectAdmin&&e.createElement("div",{className:"create pointer",onClick:function(){return window.open("/plugin/assistant")}},_l("\u63D2\u4EF6\u4E2D\u5FC3\u521B\u5EFA")))};function Jl(n){var r=n.projectId,o=n.ids,t=n.widget,l=n.components,a=n.onEdit,s=n.updateWidget,p=n.onClose,v=(0,e.useState)("embed"),c=(0,H.Z)(v,2),h=c[0],u=c[1],b=(0,e.useState)(!0),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=(0,e.useState)([]),C=(0,H.Z)(F,2),y=C[0],S=C[1],w=l.filter(function(K){return[8,"ai"].includes(K.type)}),L=w.map(function(K){return K.value}),W=w.filter(function(K){return K.config.showType==="suspension"}),B=Xl(),Y=B.isProjectAdmin,z=function(ne){L.includes(ne)||(h==="embed"?a({value:ne,config:{showType:h}}):W.length?(s({widget:W[0],value:ne}),p()):a({value:ne,config:{showType:h}}))};return(0,e.useEffect)(function(){Vr.Z.getList({projectId:r,status:2}).then(function(K){S(K),x(!1)})},[]),e.createElement(ia.Z,{visible:!0,overlayClosable:!1,width:640,footer:null,title:_l("AI\u52A9\u624B\u8BBE\u7F6E"),onCancel:p},e.createElement(Ql,null,g?e.createElement(Xe.Z,null):e.createElement(e.Fragment,null,!!y.length&&e.createElement("div",{className:"flexRow alignItemsCenter Font14 mBottom20 header"},e.createElement("div",{className:"flexRow alignItemsCenter flex"},e.createElement("span",{className:"Gray_75 mRight16"},_l("\u663E\u793A\u65B9\u5F0F")),e.createElement(Ul.ZP,{size:"middle",data:[{text:_l("\u5D4C\u5165\u9875\u9762"),value:"embed"},{text:_l("\u60AC\u6D6E\u6846"),value:"suspension",disabled:!!W.length}],checkedValue:h,onChange:function(ne){return u(ne)}})),Y&&e.createElement("div",{className:"flexRow alignItemsCenter pointer create"},e.createElement("span",{className:"Gray_75",onClick:function(){return window.open("/plugin/assistant")}},_l("\u63D2\u4EF6\u4E2D\u5FC3\u521B\u5EFA")),e.createElement(O.Z,{className:"Gray_9e mLeft5 Font18",icon:"launch"}))),y.map(function(K){return e.createElement("div",{key:K.id,className:E()("aiItem pointer flexRow alignItemsCenter mBottom12",{disable:L.includes(K.id)}),onClick:function(){return z(K.id)}},e.createElement("div",{className:"iconWrap flexRow alignItemsCenter justifyContentCenter",style:{background:L.includes(K.id)?"#bdbdbd":K.iconColor||"#2196f3"}},e.createElement(ve.Z,{url:K.iconUrl,fill:"#fff"})),e.createElement("div",{className:"flexColumn mLeft10 Font14 flex overflowHidden"},e.createElement("div",{className:"mBottom2"},K.name),e.createElement("div",{className:"Gray_9e ellipsis",title:K.description},K.description)))}),!y.length&&e.createElement(Kl,{isProjectAdmin:Y}))))}var ql={embedUrl:za,analysis:ba,button:ri,view:yi,richText:wi,filter:gl,carousel:Hl,ai:Jl};function es(n){var r=n.components,o=n.widget,t=n.onClose,l=n.mode,a=n.addWidget,s=n.updateWidget,p=(0,Ze.V3)(o.type),v=ql[p],c=function(b){if(l==="add"){if(p==="analysis"&&!(0,Ze.nw)(r))return;a((0,f.default)({type:p},b))}else s((0,f.default)({widget:o,needUpdate:!o.needUpdate},b));t()},h=function(b){s((0,f.default)({widget:o},b))};return e.createElement(v,(0,f.default)({},n,{onEdit:c,onUpdate:h,updateWidget:s}))}const Hr=(0,de.Z)((0,ze.$j)(function(n){var r=n.appPkg,o=n.customPage;return{projectId:r.projectId,components:o.components,config:o.config}})(es));var ns=(0,xe.Z)([`
  box-sizing: border-box;
  width: 240px;
  background-color: #fff;
  padding: 10px;
  .header {
    padding-left: 12px;
    line-height: 36px;
    span {
      color: #757575;
    }
    .iconWrap {
      margin-left: 6px;
    }
  }
  .widgetList {
    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 4px;
      line-height: 44px;
      cursor: pointer;
      span {
        margin-left: 12px;
        font-size: 14px;
      }
      .add {
        visibility: hidden;
      }
      &:hover {
        background-color: #f5f5f5;
        .add {
          visibility: visible;
        }
      }
    }
  }
`],[`
  box-sizing: border-box;
  width: 240px;
  background-color: #fff;
  padding: 10px;
  .header {
    padding-left: 12px;
    line-height: 36px;
    span {
      color: #757575;
    }
    .iconWrap {
      margin-left: 6px;
    }
  }
  .widgetList {
    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 4px;
      line-height: 44px;
      cursor: pointer;
      span {
        margin-left: 12px;
        font-size: 14px;
      }
      .add {
        visibility: hidden;
      }
      &:hover {
        background-color: #f5f5f5;
        .add {
          visibility: visible;
        }
      }
    }
  }
`]),ts=Ee.ZP.div(ns);function as(n){var r=n.components,o=n.addWidget,t=o===void 0?N().noop:o,l=(0,Ln.Z)(n,["components","addWidget"]),a=(0,e.useState)({}),s=(0,H.Z)(a,2),p=s[0],v=s[1];return e.createElement(ts,null,e.createElement("div",{className:"header"},e.createElement("span",{className:"Bold"},_l("\u6DFB\u52A0\u7EC4\u4EF6"))),e.createElement("ul",{className:"widgetList"},N().keys(yt.D).filter(function(c){return c==="ai"?!md.global.Config.IsLocal:!0}).map(function(c){var h=yt.D[c],u=h.icon,b=h.name;return e.createElement("li",{key:c,onClick:function(){v({type:c})}},e.createElement("i",{className:"Font18 icon-"+u+" Gray_75"}),e.createElement("span",null,b),e.createElement("span",{className:"flex"}),e.createElement("i",{className:"add icon-add Font18 Gray_75"}))})),!N().isEmpty(p)&&e.createElement(Hr,(0,f.default)({mode:"add",onClose:function(){return v({})},widget:p,addWidget:t},l)))}const rs=as;var os=i(69968),is=i.n(os),ls=i(81299),_t=i(82134),Ur=i(56493),ss=i(46959),cs=function(r){var o=r.widget,t=r.filterComponents,l=r.loadFilterComponentCount,a=N().get(o,"config.objectId"),s=N().get(o,"config.columnWidthConfig"),p=(0,e.useState)(!1),v=(0,H.Z)(p,2),c=v[0],h=v[1],u=(0,e.useState)(null),b=(0,H.Z)(u,2),m=b[0],g=b[1],x=(0,Oa.X)(a,r.filtersGroup),F=m?(0,Ze.Uf)({sheetId:m,reportId:o.value,objectId:a},r.linkageFiltersGroup):{},C=F.linkageFiltersGroup,y=C===void 0?[]:C,S=F.initiateChartIds,w=S===void 0?[]:S;if((0,e.useEffect)(function(){var W=document.querySelector("#componentsWrap");if(!W||W.classList.contains("adjustScreen")){h(!0);return}var B=W.querySelector(".widgetContent .analysis-"+o.id),Y=function(){if(!c){var K=W.getBoundingClientRect(),ne=B.getBoundingClientRect(),fe=ne.top<=K.bottom;fe&&h(fe)}};return W.addEventListener("scroll",Y,!1),Y(),s&&sessionStorage.setItem("pivotTableColumnWidthConfig-"+o.value,s),function(){W.removeEventListener("scroll",Y,!1)}},[]),!N().get(window,"shareState.shareId")&&t.length&&l<t.length)return e.createElement("div",{className:"w100 h100 flexRow alignItemsCenter justifyContentCenter"},e.createElement(Xe.Z,null));var L=!!t.map(function(W){var B=W.filters,Y=W.advancedSetting,z=Y===void 0?{}:Y,K=N().find(B,{objectId:a});return K&&z.clicksearch==="1"}).filter(function(W){return W}).length;return L&&!x.length?e.createElement("div",{className:"w100 h100 flexRow alignItemsCenter justifyContentCenter"},e.createElement("span",{className:"Font15 bold Gray_9e"},_l("\u6267\u884C\u67E5\u8BE2\u540E\u663E\u793A\u7ED3\u679C"))):c?e.createElement(ss.default,(0,f.default)({},r,{linkageMatch:r.linkageFiltersGroup[o.id],filtersGroup:x.length?x:void 0,linkageFiltersGroup:y.length?y:void 0,initiateChartInfo:w.map(function(W){return r.linkageFiltersGroup[W]}),onUpdateLinkageFiltersGroup:function(B){B.objectId=a,B.widgetId=o.id,r.updateLinkageFiltersGroup({value:o.id,filters:B})},onLoad:function(B){return g(B.appId)}})):e.createElement("div",{className:"w100 h100 flexRow alignItemsCenter justifyContentCenter"},e.createElement(Xe.Z,null))};const ds=(0,ze.$j)(function(n){return{filtersGroup:n.customPage.filtersGroup,linkageFiltersGroup:n.customPage.linkageFiltersGroup,filterComponents:n.customPage.filterComponents,loadFilterComponentCount:n.customPage.loadFilterComponentCount}},function(n){return(0,Ae.DE)({updateLinkageFiltersGroup:_t.updateLinkageFiltersGroup},n)})(cs);var us=[],ps=function(r){var o=r.setting,t=r.filterComponents,l=r.loadFilterComponentCount,a=N().get(o,"config.objectId"),s=(0,Oa.X)(a,r.filtersGroup),p=(0,e.useState)(!1),v=(0,H.Z)(p,2),c=v[0],h=v[1];if((0,e.useEffect)(function(){var b=document.querySelector("#componentsWrap");if(!b||b.classList.contains("adjustScreen")){h(!0);return}var m=b.querySelector(".widgetContent .view-"+o.id),g=function(){if(!c){var F=b.getBoundingClientRect(),C=m.getBoundingClientRect(),y=C.top<=F.bottom;y&&h(y)}};return b.addEventListener("scroll",g,!1),g(),function(){b.removeEventListener("scroll",g,!1)}},[]),!N().get(window,"shareState.shareId")&&t.length&&l<t.length)return e.createElement("div",{className:"w100 h100 flexRow alignItemsCenter justifyContentCenter"},e.createElement(Xe.Z,null));var u=!!t.map(function(b){var m=b.filters,g=b.advancedSetting,x=g===void 0?{}:g,F=N().find(m,{objectId:a});return F&&x.clicksearch==="1"}).filter(function(b){return b}).length;return u&&!s.length?e.createElement("div",{className:"w100 h100 flexRow alignItemsCenter justifyContentCenter"},e.createElement("span",{className:"Font15 bold Gray_9e"},_l("\u6267\u884C\u67E5\u8BE2\u540E\u663E\u793A\u7ED3\u679C"))):c?e.createElement(yr,(0,f.default)({},r,{filtersGroup:s.length?s:us})):e.createElement("div",{className:"w100 h100 flexRow alignItemsCenter justifyContentCenter"},e.createElement(Xe.Z,null))};const fs=(0,ze.$j)(function(n){return{filtersGroup:n.customPage.filtersGroup,filterComponents:n.customPage.filterComponents,loadFilterComponentCount:n.customPage.loadFilterComponentCount}})(ps);var Ad=i(20148),ms=i(60385),Yr=i.n(ms),Gd=i(39216),gs=i(48272),Xt=i.n(gs),vs=i(12246),hs=i(96933),bs=i(98389),xs=i(20640),Qr=i.n(xs),ys=i(91877),Cs=i(3735),ws=i(3767),Es=i(88555),Is=i(1952),Ss=i(94550);function ks(){var n=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=r.appId,t=r.worksheetId,l=r.viewId,a=r.filterId,s=r.keyWords,p=r.isGetWorksheet,v=r.onError,c=v===void 0?function(){}:v,h=(0,Ln.Z)(r,["appId","worksheetId","viewId","filterId","keyWords","isGetWorksheet","onError"]),u=(0,e.useRef)({}),b=(0,e.useState)(!0),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=(0,e.useState)([]),C=(0,H.Z)(F,2),y=C[0],S=C[1],w=(0,e.useState)([]),L=(0,H.Z)(w,2),W=L[0],B=L[1],Y=(0,e.useState)(h.filterControls),z=(0,H.Z)(Y,2),K=z[0],ne=z[1],fe=(0,e.useCallback)((0,Da.Z)(Bt().mark(function J(){var P,j,G;return Bt().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(x(!0),P=[],!a){X.next=12;break}if(!u.current[a]){X.next=7;break}P=u.current[a],X.next=12;break;case 7:return X.next=9,Tn.Z.getWorksheetFilterById({filterId:a});case 9:j=X.sent,u.current[a]=(0,wr.Gt)(j.items||[]),P=u.current[a];case 12:return X.next=14,Tn.Z.getFilterRows({appId:o,worksheetId:t,viewId:l,keyWords:s,filterControls:P.concat(K),isGetWorksheet:p});case 14:if(G=X.sent,G.resultCode===1){X.next=19;break}return x(!1),c(G),X.abrupt("return");case 19:p&&B(G.template.controls),S(G.data),x(!1);case 22:case"end":return X.stop()}},J,n)})),[o,l,t,s,a,h.filterControls]);return(0,e.useEffect)(function(){fe()},[s,K]),{loading:g,records:y,controls:W,setFilterControls:ne}}var Xr=i(1502),Ns=(0,xe.Z)([`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 70px;
  padding: 0 26px;
`],[`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 70px;
  padding: 0 26px;
`]),Ps=(0,xe.Z)([`
  max-height: 500px;
  padding: 0 16px;
  overflow-y: auto;
`],[`
  max-height: 500px;
  padding: 0 16px;
  overflow-y: auto;
`]),Ts=Ee.ZP.div(Ns),Fs=Ee.ZP.div(Ps);function Ws(n,r){return n&&r?[{spliceType:1,isGroup:!0,groupFilters:[{controlId:n,dataType:2,spliceType:1,filterType:2,dynamicSource:[],values:[r]}]}]:[]}function Zs(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.appId,o=n.worksheetId,t=n.viewId,l=n.filterId,a=n.searchId,s=n.keyWords,p=n.onClose,v=p===void 0?function(){}:p,c=(0,e.useState)(!1),h=(0,H.Z)(c,2),u=h[0],b=h[1],m=ks({appId:r,worksheetId:o,viewId:t,isGetWorksheet:!0,filterId:l,keyWords:a?void 0:s,filterControls:Ws(a,s),onError:function(){b(!0)}}),g=m.loading,x=m.records,F=m.controls;return(0,e.useEffect)(function(){x.length===1&&((0,Xr.L)({appId:r,worksheetId:o,recordId:x[0].rowid,viewId:t}),v())},[x]),e.createElement(Es.Z,{visible:!0,verticalAlign:"bottom",width:window.innerWidth-20>960?960:window.innerWidth-20,closeSize:50,onCancel:function(){v()},bodyStyle:{padding:"0 0 26px",position:"relative"}},e.createElement(Ts,null,_l("\u626B\u7801\u7ED3\u679C")),e.createElement(Fs,null,g&&e.createElement("div",{className:"pAll35"},e.createElement(Xe.Z,null)),!g&&!x.length&&e.createElement("div",{className:"pAll35 TxtCenter"},e.createElement("div",{className:"Gray_9e Font12"},u?_l("\u5DF2\u5220\u9664\u6216\u65E0\u6743\u9650"):_l("\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u8BB0\u5F55"))),!g&&!!x.length&&x.map(function(C,y){return e.createElement(Ss.Z,{key:y,data:C,appId:r,controls:F,showControls:(0,Ea.Ve)(F).filter(function(S){return!(0,Ft.includes)([Qt.DN.BAR_CODE],S.type)&&(0,Ve.kM)(S).visible}).slice(0,5).map(function(S){return S.controlId}),disabled:!0,onClick:function(){return(0,Xr.L)({appId:r,worksheetId:o,recordId:C.rowid,viewId:t})}})})))}function Rs(n){(0,Is.Z)(Zs,n)}var Ls=i(30381),Kr=i.n(Ls),js=(0,xe.Z)([`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 0 auto;
`],[`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 0 auto;
`]),Os=Ee.ZP.div(js),Ds=function(r,o){return new(Mt())(function(t,l){Cs.Z.getDepartmentsByAccountId({projectId:r,accountIds:[o]}).then(function(a){var s=a.maps,p=N().find(s,{accountId:o})||{},v=p.departments;t(v||[])})})};function Bs(n){var r=function(){var he=(0,Da.Z)(Bt().mark(function Se(ke,$e){var Qe,nn,kn,In,Fn,yn,rt,Zn,ot,ut,wn,rn;return Bt().wrap(function(tn){for(;;)switch(tn.prev=tn.next){case 0:if(Qe=ke.id,nn=ke.processId,kn=ke.name,In=ke.config,Fn=In.inputs,yn=Fn===void 0?[]:Fn,rt=md.global.Account.accountId,Zn=c.appId||N().get(c,"apk.appId"),ot=(0,Oe.A_)(),ut=ot.pushUniqueId,wn=[],rn=N().find(yn,{value:[{cid:"triggerDepartment"}]}),!rn){tn.next=11;break}return tn.next=10,Ds(ue,rt);case 10:wn=tn.sent;case 11:Fr.Z.startProcessByPBC({pushUniqueId:window.isMingDaoApp&&ut||md.global.Config.pushUniqueId,appId:Zn,triggerId:Qe,title:kn,processId:nn,controls:yn.filter(function(Je){return Je.value.length}).map(function(Je){var on=Je.value.map(function(un){return un.cid==="triggerUser"?Je.type===Qt.DN.USER_PICKER?ie()([rt]):md.global.Account.fullname:un.cid==="triggerDepartment"?Je.type===Qt.DN.DEPARTMENT?ie()(wn.map(function(gn){return gn.id})):ie()(wn.map(function(gn){return gn.name})):un.cid==="triggerTime"?Kr()().format("YYYY-MM-DD HH:mm:ss"):un.cid==="codeResult"?$e:un.staticValue});return(0,f.default)({},Je,{value:on.join("")})})}).then(function(Je){});case 12:case"end":return tn.stop()}},Se,this)}));return function(ke,$e){return he.apply(this,arguments)}}(),o=function(){var he=(0,Da.Z)(Bt().mark(function Se(ke){var $e,Qe,nn,kn,In,Fn,yn,rt,Zn,ot,ut,wn,rn,Cn,tn,Je,on,un,gn,bn,Le,Ie,qe,jn,pn,Tt,Rn,bt,xt,ka,Ja;return Bt().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:if(!s){en.next=2;break}return en.abrupt("return");case 2:if($e=ke.param,Qe=ke.action,nn=ke.value,kn=ke.viewId,In=ke.openMode,Fn=In===void 0?1:In,yn=ke.name,!(q&&Qe!==4)){en.next=6;break}return alert(_l("\u65E0\u6743\u64CD\u4F5C"),3),en.abrupt("return");case 6:if(!(Qe===1&&nn)){en.next=33;break}return rt=ke.btnId,B&&Xt().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),en.next=11,Pn.Z.getAppSimpleInfo({workSheetId:nn});case 11:return Zn=en.sent,ot=Zn.appId,en.next=15,Tn.Z.getSwitchPermit({appId:ot,worksheetId:nn});case 15:if(ut=en.sent,B&&Xt().hide(),wn={visible:!0,value:nn,viewId:kn,appId:ot,name:yn,sheetSwitchPermit:ut},!window.isMingDaoApp){en.next=22;break}return rn="/mobile/addRecord/"+ot+"/"+nn+"/"+kn,window.location.href=rt?rn+"?btnId="+rt:rn,en.abrupt("return");case 22:if(!rt){en.next=32;break}return B&&Xt().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),en.next=26,Tn.Z.getWorksheetBtnByID({appId:ot,worksheetId:nn,btnId:rt});case 26:Cn=en.sent,tn=Cn.writeControls,B&&Xt().hide(),m((0,f.default)({},wn,{writeControls:tn})),en.next=33;break;case 32:m(wn);case 33:if(!(N().includes([2,3],Qe)&&nn)){en.next=45;break}return B&&Xt().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),en.next=37,Pn.Z.getAppSimpleInfo({workSheetId:nn});case 37:Je=en.sent,on=Je.appId,un=Je.appSectionId,B&&Xt().hide(),gn=function(){var $n="/app";B&&($n=kn?"/mobile/recordList":"/mobile/customPage");var lt=""+(window.subPath||"")+$n+"/"+on+"/"+un+"/"+nn;return kn&&(lt+="/"+kn),lt},bn=gn(),window.isMingDaoApp?window.location.href=bn:Fn===2?window.open(bn):(0,ae.T8)(bn),kn||(0,Oe.Ye)("customPage",nn);case 45:if(!(Qe===4&&nn)){en.next=54;break}if(Le=(0,Ze.do)(nn,$e,c),Fn!==1){en.next=50;break}return location.href=Le,en.abrupt("return");case 50:if(Fn!==2){en.next=53;break}return window.open(Le),en.abrupt("return");case 53:window.open(Le,"_blank","width=800px,height=600px,left=200px,top=200px");case 54:if(Qe===5&&(window.isMingDaoApp?(0,Oe.Sk)({type:"scan"}).then(function(On){var $n=On.value;$n&&t($n,ke)}):B?(fe(ke),Y.current.handleScanCode()):(Ie=ke.config||{},qe=Ie.placeholder,jn=function(){var $n=N().get(Y,"current.state.value");$n?(t($n,ke),pn()):alert(_l("\u8BF7\u8F93\u5165\u5185\u5BB9"),3)},pn=ia.Z.confirm({width:480,title:e.createElement("span",{className:"bold"},yn),description:e.createElement(Dn.Z,{autoFocus:!0,defaultValue:"",className:"w100 confirmInput",placeholder:qe,ref:Y,onKeyDown:function($n){$n.keyCode===13&&jn()}}),footer:e.createElement("div",{className:"Dialog-footer-btns"},e.createElement(bs.Z,{onClose:N().noop,action:function(){jn()},type:"primary"},_l("\u786E\u5B9A")))}))),Qe!==6){en.next=65;break}if(Tt=ke.processId,Rn=ke.config,bt=Rn.clickType,xt=Rn.confirmMsg,ka=Rn.sureName,Ja=Rn.cancelName,!(bt===1&&Tt)){en.next=61;break}return r(ke),en.abrupt("return");case 61:if(!(bt===2&&Tt)){en.next=64;break}return B?Yr().alert(xt,"",[{text:Ja,onPress:function(){},style:"default"},{text:ka,onPress:function(){return r(ke)}}]):ia.Z.confirm({title:e.createElement("div",{className:"mTop10"},xt),onOk:function(){r(ke)},okText:ka,cancelText:Ja}),en.abrupt("return");case 64:return en.abrupt("return");case 65:case"end":return en.stop()}},Se,this)}));return function(ke){return he.apply(this,arguments)}}(),t=function(){var he=(0,Da.Z)(Bt().mark(function Se(ke,$e){var Qe,nn,kn,In,Fn,yn,rt,Zn,ot,ut,wn,rn,Cn,tn,Je,on,un,gn,bn,Le,Ie,qe;return Bt().wrap(function(pn){for(;;)switch(pn.prev=pn.next){case 0:if(Qe=$e||ne,nn=Qe.config,kn=nn===void 0?{}:nn,In=Qe.value,Fn=Qe.viewId,!Ct.L.test(ke)){pn.next=24;break}if(!kn.recordLink){pn.next=21;break}if(yn=function(){var Rn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Rn.rowId?window.isMingDaoApp?window.location.href="/mobile/record/"+Rn.appId+"/"+Rn.worksheetId+"/"+Rn.viewId+"/"+Rn.rowId:G(Rn):window.open(ke)},!(ke.includes("worksheetshare")||ke.includes("public/record"))){pn.next=16;break}return rt=(ke.match(/\/worksheetshare\/(.*)/)||ke.match(/\/public\/record\/(.*)/))[1],Xt().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),pn.next=10,Tn.Z.getShareInfoByShareId({shareId:rt});case 10:Zn=pn.sent,ot=Zn.data,Xt().hide(),yn(ot),pn.next=20;break;case 16:ut=ke.split("?")[0],wn=ut.match(/app\/(.*)\/(.*)\/(.*)\/row\/(.*)/)||[],rn=(0,H.Z)(wn,5),Cn=rn[0],tn=rn[1],Je=rn[2],on=rn[3],un=rn[4],tn&&Je&&on&&un?yn({appId:tn,worksheetId:Je,viewId:on,rowId:un}):yn();case 20:return pn.abrupt("return");case 21:if(!kn.otherLink){pn.next=24;break}return window.isMingDaoApp?window.location.href=ke:window.open(ke),pn.abrupt("return");case 24:if(kn.text===0&&(B?Yr().alert(e.createElement("div",{className:"WordBreak"},ke),"",[{text:_l("\u590D\u5236"),onPress:function(){Qr()(ke),alert(_l("\u590D\u5236\u6210\u529F"),1)}}]):ia.Z.confirm({title:e.createElement("div",{className:"mTop10"},ke),onOk:function(){Qr()(ke),alert(_l("\u590D\u5236\u6210\u529F"),1)},okText:_l("\u590D\u5236")})),!(kn.text===1&&In&&Fn)){pn.next=36;break}return gn=kn.isFilter,B&&Xt().loading(_l("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E")),pn.next=30,Pn.Z.getAppSimpleInfo({workSheetId:In});case 30:bn=pn.sent,Le=bn.appId,B&&Xt().hide(),Ie=gn&&Qe.filterId?Qe.filterId:"",qe=Qe.searchId?Qe.searchId:"",B?window.mobileNavigateTo("/mobile/searchRecord/"+Le+"/"+In+"/"+Fn+"?keyWords="+encodeURIComponent(ke)+"&filterId="+Ie+"&searchId="+qe):Rs({appId:Le,worksheetId:In,viewId:Fn,filterId:Ie,searchId:qe,keyWords:ke});case 36:kn.text===2&&r(Qe,ke);case 37:case"end":return pn.stop()}},Se,this)}));return function(ke,$e){return he.apply(this,arguments)}}(),l=n.button,a=l===void 0?{}:l,s=n.editable,p=n.layoutType,v=n.addRecord,c=n.info,h=(0,e.useState)({visible:!1,value:"",viewId:"",appId:"",name:"",writeControls:[],sheetSwitchPermit:[]}),u=(0,H.Z)(h,2),b=u[0],m=u[1],g=b.visible,x=b.value,F=b.viewId,C=b.appId,y=b.name,S=b.writeControls,w=S===void 0?[]:S,L=b.sheetSwitchPermit,W=L===void 0?[]:L,B=(0,Oe.Q9)(),Y=(0,e.useRef)(),z=(0,e.useState)(),K=(0,H.Z)(z,2),ne=K[0],fe=K[1],J=(0,e.useState)({}),P=(0,H.Z)(J,2),j=P[0],G=P[1],q=location.href.includes("public/page"),X=N().find(a.buttonList,{action:5}),ue=c.projectId||N().get(c,"apk.projectId");(0,e.useEffect)(function(){B&&(0,ws.Z)()});var ce=B?hs.Z:vs.default;return e.createElement(Os,null,e.createElement(Rr,(0,f.default)({displayMode:"display",layoutType:p,onClick:o},a)),X&&B&&e.createElement(ys.Z,{ref:Y,projectId:ue,onScanQRCodeResult:t}),g&&e.createElement(ce,{visible:!0,showFillNext:!0,needCache:!0,onAdd:function(Se){alert(_l("\u6DFB\u52A0\u6210\u529F")),v(Se)},title:B?y:null,appId:C,worksheetId:x,viewId:F,writeControls:w,sheetSwitchPermit:W,showDraftsEntry:!!B,openRecord:B?function(he,Se){G({appId:C,worksheetId:x,viewId:Se,rowId:he})}:void 0,hideNewRecord:function(){return m({visible:!1})}}),B?e.createElement(Ar.aY,{className:"full",visible:!!j.rowId,appId:j.appId,worksheetId:j.worksheetId,viewId:j.viewId,rowId:j.rowId,onClose:function(){G({})}}):!!j.rowId&&e.createElement(_r.Z,{visible:!0,projectId:ue,recordId:j.rowId,worksheetId:j.worksheetId,appId:j.appId,viewId:j.viewId,hideRecordInfo:function(){G({})}}))}const _s=(0,ze.$j)(function(n){var r=n.sheet,o=n.appPkg,t=n.customPage;return{info:(0,f.default)({},r.base,{projectId:o.projectId,itemId:t.pageId,apk:t.apk})}})(Bs);var zs=i(82690),As=(0,xe.Z)([`
  &.disableFiltersGroup {
    pointer-events: none;
  }
  .quickFilterWrap {
    padding-top: 0;
    >div {
      padding: 0;
    }
    .disable {
      cursor: not-allowed;
      .content {
        pointer-events: none;
      }
      .content>div {
        background-color: #f5f5f5;
      }
    }
  }
`],[`
  &.disableFiltersGroup {
    pointer-events: none;
  }
  .quickFilterWrap {
    padding-top: 0;
    >div {
      padding: 0;
    }
    .disable {
      cursor: not-allowed;
      .content {
        pointer-events: none;
      }
      .content>div {
        background-color: #f5f5f5;
      }
    }
  }
`]),Gs=Ee.ZP.div(As);function Ms(n){var r=n.appId,o=n.projectId,t=n.widget,l=n.className,a=n.updateFiltersGroup,s=n.updatePageInfo,p=t.value,v=(0,e.useState)(!0),c=(0,H.Z)(v,2),h=c[0],u=c[1],b=(0,e.useState)({}),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=g,C=F.filters,y=C===void 0?[]:C,S=l.includes("disableFiltersGroup");return(0,e.useEffect)(function(){if(p)Tn.Z.getFiltersGroupByIds({appId:r,filtersGroupIds:[p]}).then(function(W){u(!1);var B=W[0],Y=(0,f.default)({},B,{filters:B.filters.map(function(J){var P=(0,Ia.W)(J.dataType,J.values);return(0,f.default)({},J,{values:P,defaultValues:P})})});x(t.filter?t.filter:Y);var z=k.Z.getState().customPage,K=z.components,ne=z.filterComponents,fe=z.loadFilterComponentCount;s({filterComponents:ne.map(function(J){if(J.value===p){var P=_.find(K,{value:p})||{},j=P.filter||B,G=j.advancedSetting,q=j.filters;return{value:p,advancedSetting:G,filters:_.flatten(q.map(function(X){return X.objectControls}))}}else return J}),loadFilterComponentCount:fe+1})}).catch(function(W){var B=k.Z.getState().customPage,Y=B.loadFilterComponentCount;s({loadFilterComponentCount:Y+1})});else{var w=k.Z.getState().customPage,L=w.loadFilterComponentCount;s({loadFilterComponentCount:L+1}),u(!1)}return function(){a({value:p,filters:[]})}},[p]),(0,e.useEffect)(function(){t.filter&&x(t.filter)},[t.filter]),e.createElement(Gs,{className:l},h?e.createElement(Xe.Z,null):e.createElement(Cr,{mode:S?"config":"",projectId:o,appId:r,enableBtn:F.enableBtn,filters:(0,Oa.U)(y),updateQuickFilter:function(L){a({value:p,filters:L})},resetQuickFilter:function(){var L=g.filters.map(function(W){return(0,f.default)({},W,{values:W.defaultValues})});a({value:p,filters:L.map(function(W){return(0,f.default)({},W,{values:(0,Ia.M)(W.dataType,W.values)})}).filter(Er.Gu).map(zs.W)}),x((0,f.default)({},g,{filters:L}))}}))}const $s=(0,de.Z)((0,ze.$j)(function(n){return{filterComponents:n.customPage.filterComponents,loadFilterComponentCount:n.customPage.loadFilterComponentCount}},function(n){return(0,Ae.DE)({updateFiltersGroup:_t.updateFiltersGroup,updatePageInfo:_t.updatePageInfo},n)})(Ms));var Md=i(66814),Vs=i(91880),lr=i.n(Vs),$d=i(48388),Hs=i(29914),Ir=i.n(Hs),Vd=i(48659),Us=i(1825),Ys=i(88902),Qs=i.n(Ys),Sa=i(34498),Xs=(0,xe.Z)([`
  .header {
    padding: 0 15px 10px;
    justify-content: flex-end;
  }
  .close {
    font-weight: bold;
    padding: 5px;
    border-radius: 50%;
    background-color: #e6e6e6;
  }
  .body {
    padding: 0 15px;
    overflow: auto;
    .controlWrapper {
      margin-bottom: 20px;
    }
    .selected {
      color: #2196f3;
      max-width: 100px;
      padding-left: 10px;
      font-weight: 500;
    }
  }
  .footer {
    border-top: 1px solid #eaeaea;
    .flex {
      padding: 10px;
    }
    .query {
      color: #fff;
      background-color: #2196f3;
    }
  }
`],[`
  .header {
    padding: 0 15px 10px;
    justify-content: flex-end;
  }
  .close {
    font-weight: bold;
    padding: 5px;
    border-radius: 50%;
    background-color: #e6e6e6;
  }
  .body {
    padding: 0 15px;
    overflow: auto;
    .controlWrapper {
      margin-bottom: 20px;
    }
    .selected {
      color: #2196f3;
      max-width: 100px;
      padding-left: 10px;
      font-weight: 500;
    }
  }
  .footer {
    border-top: 1px solid #eaeaea;
    .flex {
      padding: 10px;
    }
    .query {
      color: #fff;
      background-color: #2196f3;
    }
  }
`]),Ks=Ee.ZP.div(Xs);function Js(n){var r=n.enableBtn,o=n.filters,t=n.controls,l=n.updateQuickFilter,a=n.onCloseDrawer,s=(0,e.useRef)({}),p=(0,e.useState)({}),v=(0,H.Z)(p,2),c=v[0],h=v[1],u=(0,e.useRef)(N().debounce(l,500)),b=(0,e.useMemo)(function(){return o.map(function(C){var y=N().cloneDeep((0,Sa.hk)(C.control));return(0,f.default)({},C,{control:y,dataType:y?y.type:C.dataType,filterType:y&&y.encryId?2:C.filterType})}).filter(function(C){return C.control&&!(window.shareState.shareId&&N().includes([26,27,48],C.control.type))})},[ie()(o)]),m=function(y){var S=y||c,w=b.map(function(W,B){return(0,f.default)({},W,{filterType:W.filterType||(W.dataType===29?24:2),spliceType:W.spliceType||1},S[B])}).filter(Sa.Gu).map(Sa.We);if(w.length){var L=w.map(function(W){return c[0]==="isEmpty"&&(W.filterType=7),W.filterType===ir.W5.DATE_BETWEEN&&W.dateRange!==18&&(W.filterType=ir.W5.DATEENUM),(0,f.default)({},W)});N().includes(Sa.P4,s.current.activeType)?u.current((0,Sa.pT)(L)):l((0,Sa.pT)(L))}else l([])},g=function(){m(),a()},x=function(){h({}),l([]),a()},F=Qs()(c).map(function(C){return{controlId:"fastFilter_"+N().get(o[C],"control.controlId"),filterValue:(0,f.default)({},c[C],{values:(0,Ia.M)(N().get(o[C],"control.type"),N().get(c[C],"values"))})}}).concat(o.filter(function(C){return C.dataType===2}).map(function(C){return{controlId:"fastFilter_"+C.controlId,filterValue:{values:C.values}}}));return(0,e.useEffect)(function(){m()},[b]),e.createElement(Ks,{className:"flexColumn h100 overflowHidden"},e.createElement("div",{className:"header flexRow valignWrapper"},e.createElement(O.Z,{className:"Gray_9e close",icon:"close",onClick:a})),e.createElement("div",{className:"flex body"},o.map(function(C,y){return e.createElement(Sa.ZP,(0,f.default)({key:C.controlId},C,c[y],{filtersData:F,projectId:n.projectId,appId:n.appId,onChange:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s.current.activeType=C.control.type;var L=(0,f.default)({},c,(0,ft.default)({},y,(0,f.default)({},c[y],w)));h(L),!r&&!N().isEmpty(L)&&m(L)},onRemove:function(){delete c[y];var w=(0,f.default)({},c);h(w),r||m(w)}}))})),r&&e.createElement("div",{className:"footer flexRow valignWrapper"},e.createElement("div",{className:"flex Font16 centerAlign",onClick:x},_l("\u91CD\u7F6E")),e.createElement("div",{className:"flex Font16 centerAlign query",onClick:g},_l("\u67E5\u8BE2"))))}const qs=Js;var ec=i(82986),nc=(0,xe.Z)([`
  &.disableFiltersGroup {
    pointer-events: none;
  }
`],[`
  &.disableFiltersGroup {
    pointer-events: none;
  }
`]),tc=(0,xe.Z)([`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  padding: 0 7px 0 10px;
  height: 100%;
  &.big {
    width: 100%;
  }
  &.highlight {
    color: #2196f3;
    .icon {
      color: #2196f3 !important;
    }
  }
`],[`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  padding: 0 7px 0 10px;
  height: 100%;
  &.big {
    width: 100%;
  }
  &.highlight {
    color: #2196f3;
    .icon {
      color: #2196f3 !important;
    }
  }
`]),ac=(0,xe.Z)([`
  z-index: 100 !important;
  .ant-drawer-body {
    padding: 10px 0 0 0;
  }
`],[`
  z-index: 100 !important;
  .ant-drawer-body {
    padding: 10px 0 0 0;
  }
`]),rc=Ee.ZP.div(nc),oc=Ee.ZP.div(tc),ic=(0,Ee.ZP)(Us.Z)(ac);function lc(n){var r=n.ids,o=r===void 0?{}:r,t=n.apk,l=t===void 0?{}:t,a=n.widget,s=n.className,p=s===void 0?"":s,v=a.value,c=(0,e.useState)(!0),h=(0,H.Z)(c,2),u=h[0],b=h[1],m=(0,e.useState)({}),g=(0,H.Z)(m,2),x=g[0],F=g[1],C=(0,e.useState)(!1),y=(0,H.Z)(C,2),S=y[0],w=y[1],L=(0,e.useState)([]),W=(0,H.Z)(L,2),B=W[0],Y=W[1],z=p.includes("disableFiltersGroup"),K=(0,Oa.U)(x.filters||[]).filter(function(ne){return!ne.className.includes("disable")});return(0,e.useEffect)(function(){return function(){n.updateLoadFilterComponentCount(0)}},[]),(0,e.useEffect)(function(){if(v)Tn.Z.getFiltersGroupByIds({appId:o.appId,filtersGroupIds:[v]}).then(function(fe){b(!1);var J=fe[0],P=(0,f.default)({},J,{filters:J.filters.map(function(ue){return(0,f.default)({},ue,{values:(0,Ia.W)(ue.dataType,ue.values)})})});F(a.filter?a.filter:P);var j=k.Z.getState().mobile,G=j.filterComponents,q=j.loadFilterComponentCount;if(n.updateFilterComponents(G.map(function(ue){if(ue.value===v){var ce=J.advancedSetting,he=J.filters;return{value:v,advancedSetting:ce,filters:N().flatten(he.map(function(Se){return Se.objectControls}))}}else return ue})),z){var X=k.Z.getState().customPage.loadFilterComponentCount;k.Z.dispatch((0,_t.updatePageInfo)({loadFilterComponentCount:X+1}))}else n.updateLoadFilterComponentCount(q+1)});else{var ne=k.Z.getState().customPage.loadFilterComponentCount;k.Z.dispatch((0,_t.updatePageInfo)({loadFilterComponentCount:ne+1})),b(!1)}},[v]),(0,e.useEffect)(function(){z?k.Z.dispatch((0,_t.updateFiltersGroup)({value:v,filters:B})):n.updateFiltersGroup(v,B)},[B]),u?e.createElement(lr(),{justify:"center",align:"center",className:"h100"},e.createElement(Ir(),{size:"large"})):e.createElement(rc,{className:E()("flexRow valignWrapper w100",p),style:{height:40}},e.createElement(oc,{className:E()("flexRow valignWrapper big",{highlight:B.length}),onClick:function(){w(!0)}},e.createElement(O.Z,{className:"Font20 Gray_9e",icon:"filter"}),e.createElement("div",{className:"flexRow valignWrapper w100"},e.createElement("span",{className:"Font15 flex mLeft5"},_l("\u7B5B\u9009")),!!B.length&&e.createElement("span",{className:"mLeft5 mRight6"},_l("\u5DF2\u7B5B%0\u9879",B.length)),e.createElement(O.Z,{className:"Font18 Gray_9e",icon:"arrow-right-border"}))),e.createElement(ic,{forceRender:!0,placement:"right",visible:S,closable:!1,width:"90%",onClose:function(){w(!1)}},e.createElement(qs,{appId:o.appId,projectId:l.projectId,enableBtn:x.enableBtn,filters:K.filter(function(ne){return ne.control&&!(window.shareState.shareId&&N().includes([26,27,48],ne.control.type))}),updateQuickFilter:function(fe){Y(fe)},onCloseDrawer:function(){w(!1)}})))}const sc=(0,ze.$j)(function(n){return{filtersGroup:n.mobile.filtersGroup}},function(n){return(0,Ae.DE)(N().pick(ec,["updateFiltersGroup","updateFilterComponents","updateLoadFilterComponentCount"]),n)})(lc);var cc=[];function dc(n){var r=n.setting,o=n.filterComponents,t=n.loadFilterComponentCount,l=N().get(r,"config.objectId"),a=(0,Oa.X)(l,n.filtersGroup),s=(0,e.useState)(!1),p=(0,H.Z)(s,2),v=p[0],c=p[1];if((0,e.useEffect)(function(){var u=document.querySelector("#componentsWrap");if(!u){c(!0);return}var b=u.querySelector(".widgetContent .view-"+r.id),m=function(){if(!v){var x=u.getBoundingClientRect(),F=b.getBoundingClientRect(),C=F.top<=x.bottom;C&&c(C)}};return u.addEventListener("scroll",m,!1),m(),function(){u.removeEventListener("scroll",m,!1)}},[]),!N().get(window,"shareState.shareId")&&o.length&&t<o.length)return e.createElement(lr(),{justify:"center",align:"center",className:"h100 w100"},e.createElement(Ir(),{size:"large"}));var h=!!o.map(function(u){var b=u.filters,m=u.advancedSetting,g=N().find(b,{objectId:l});return g&&m.clicksearch==="1"}).filter(function(u){return u}).length;return h&&!a.length?e.createElement(lr(),{justify:"center",align:"center",className:"h100 w100"},e.createElement("span",{className:"Font15 bold Gray_9e"},_l("\u6267\u884C\u67E5\u8BE2\u540E\u663E\u793A\u7ED3\u679C"))):v?e.createElement(yr,(0,f.default)({},n,{filtersGroup:a.length?a:cc})):e.createElement(lr(),{justify:"center",align:"center",className:"h100 w100"},e.createElement(Ir(),{size:"large"}))}const uc=(0,ze.$j)(function(n){return{filtersGroup:n.mobile.filtersGroup,filterComponents:n.mobile.filterComponents,loadFilterComponentCount:n.mobile.loadFilterComponentCount}})(dc);var Hd=i(60954),ma=i(12386),pc=i(30752),fc=i(12052),mc=function(r){var o=r.widget,t=r.editable,l=t===void 0?!1:t,a=r.delWidget,s=o.config,p=s===void 0?{}:s,v=p.showType==="suspension",c=(0,e.useState)(null),h=(0,H.Z)(c,2),u=h[0],b=h[1];if((0,e.useEffect)(function(){v&&o.value&&Vr.Z.getSimpleInfo({assistantId:o.value}).then(function(C){b(C)})},[]),v){var m=u||{},g=m.iconUrl,x=m.iconColor;if(u||_.isEmpty(o.value)){var F=o.value?e.createElement("div",{className:"suspensionAi flexRow alignItemsCenter justifyContentCenter pointer",style:{backgroundColor:x||"#2196f3"},onClick:function(){l||(0,fc.Z)({assistantId:u.id,name:u.name})}},e.createElement(ve.Z,{size:32,url:g,fill:"#fff"}),e.createElement("div",{className:"shade"})):e.createElement("div",{className:"suspensionAi flexRow alignItemsCenter justifyContentCenter pointer",style:{backgroundColor:"#2196f3"},onClick:function(){alert(_l("\u52A9\u624B\u5DF2\u5173\u95ED\u6216\u5220\u9664"),3)}},e.createElement(O.Z,{icon:"workflow_failure",className:"White Font40 mBottom5"}));return l?e.createElement(Vt.default,{trigger:["click"],placement:"leftTop",overlay:e.createElement(ma.default,{className:"pTop10 pBottom10 boderRadAll_4",style:{width:160}},e.createElement(ma.default.Item,{key:"delete",onClick:function(){return a(o)}},e.createElement("div",{className:"flexRow valignWrapper pTop3 pBottom3"},e.createElement(O.Z,{icon:"delete2",className:"mRight5 Font16 Gray_9e"}),_l("\u5220\u9664"))))},F):F}else return null}else return o.value?e.createElement(pc.Z,{assistantId:o.value,fullContent:!0}):e.createElement("div",{className:"flexColumn valignWrapper w100 h100",style:{justifyContent:"center"}},e.createElement(O.Z,{icon:"workflow_failure",className:"Font64 Gray_c mBottom10"}),e.createElement("div",{className:"Gray_9e Font20 mBottom2"},_l("\u52A9\u624B\u5DF2\u5173\u95ED\u6216\u5220\u9664")))};const Sr=mc;var la=i(90570),gc=(0,xe.Z)([`
  flex: 1;
  box-sizing: border-box;
  padding: 15px 16px;
  background-color: #fff;
  height: 100%;
  &.button {
    display: flex;
  }
  &.embedUrl, &.view {
    padding: 0 !important;
  }
  &.analysis .header {
    height: 20px;
    margin-bottom: 12px;
  }
  img {
    max-width: 100%;
  }
  .mdEditorContent {
    overflow: initial !important;
  }
`],[`
  flex: 1;
  box-sizing: border-box;
  padding: 15px 16px;
  background-color: #fff;
  height: 100%;
  &.button {
    display: flex;
  }
  &.embedUrl, &.view {
    padding: 0 !important;
  }
  &.analysis .header {
    height: 20px;
    margin-bottom: 12px;
  }
  img {
    max-width: 100%;
  }
  .mdEditorContent {
    overflow: initial !important;
  }
`]),vc=Ee.ZP.div(gc),hc=(0,e.forwardRef)(function(n,r){var o=n.layoutType,t=n.isFullscreen,l=n.editable,a=n.ids,s=n.projectId,p=n.widget,v=n.editingWidget,c=n.isCharge,h=(0,Ln.Z)(n,["layoutType","isFullscreen","editable","ids","projectId","widget","editingWidget","isCharge"]),u=p.type,b=p.param,m=b===void 0?[]:b,g=p.value,x=p.needUpdate,F=p.button,C=p.name,y=p.config,S=y===void 0?{}:y,w=a.worksheetId,L=(0,Ze.V3)(u),W=(0,e.useRef)(null),B=function(){if(L==="embedUrl"){var ne=S.newTab,fe=ne===void 0?!1:ne,J=S.reload,P=J===void 0?!1:J;return e.createElement(Ct.Z,{reload:P,newTab:fe,value:g,param:m})}if(L==="richText")return e.createElement(Ur.Z,{data:g||"",className:"mdEditorContent",disabled:!0,backGroundColor:"#fff"});if(L==="button")return e.createElement(_s,(0,f.default)({editable:l,button:F,ids:a,layoutType:o},h));if(L==="analysis")return e.createElement(ds,{widget:p,$cardRef:r,needEnlarge:!(t||l||o==="mobile"),needRefresh:!l,pageEditable:l,isCharge:c,className:E()({disableChart:l&&p.reportType===la.f0.NumberChart}),customPageConfig:h.config||{},themeColor:h.themeColor,isLock:h.isLock,permissionType:h.permissionType,appId:a.appId,pageId:w,report:{id:g,name:C},sourceType:1,needUpdate:x,worksheetId:a.worksheetId,projectId:s,layoutType:o,mobileCount:_.get(p,"config.mobileCount"),mobileFontSize:_.get(p,"config.mobileFontSize")});if(L==="view")return(0,Oe.Q9)()?e.createElement(uc,{appId:a.appId,setting:p}):v.viewId!==p.viewId&&e.createElement(fs,{layoutType:o,className:E()({disableSingleView:l}),appId:a.appId,setting:p});if(L==="ai")return e.createElement(Sr,{widget:p})};if(L==="filter")return o==="mobile"?e.createElement(sc,{ids:a,widget:p,className:E()({disableFiltersGroup:l})}):e.createElement($s,{className:E()({disableFiltersGroup:l}),appId:a.appId,projectId:s,widget:p});if(L==="carousel"){var Y=p.config,z=p.componentConfig;return e.createElement(Gr,{editable:l,config:Y,componentConfig:z})}return e.createElement(vc,{className:E()(L,L+"-"+p.id),ref:W},B())});const bc=hc;var Ud=i(55055),kr=i(62443),Yd=i(95350),xc=i(36155),yc=i(79790),Cc=(0,xe.Z)([`
  position: fixed;
  z-index: 1;
  top: `,`;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 6px 0;
  background-color: #fff;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  li {
    line-height: 20px;
    padding: 0 8px;
    cursor: pointer;
    color: #757575;
    &:hover {
      color: #2196f3;
    }
    &.del:hover {
      color: #f44336;
    }
    &.highlight {
      color: #2196f3;
      &.del {
        color: #f44336;
      }
    }
    &.switchButton {
      .next {
        display: none;
        position: relative;
        top: -1px;
      }
      &:hover {
        .current {
          display: none;
        }
        .next {
          display: block;
        }
      }
    }
    &:first-child {
      border-right: 1px solid #bdbdbd;
    }
  }
  .changeFontSizePopover {
    width: 250px;
    .ant-input {
      width: 60px;
      border-radius: 4px !important;
      box-shadow: none !important;
    }
  }
`],[`
  position: fixed;
  z-index: 1;
  top: `,`;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 6px 0;
  background-color: #fff;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  li {
    line-height: 20px;
    padding: 0 8px;
    cursor: pointer;
    color: #757575;
    &:hover {
      color: #2196f3;
    }
    &.del:hover {
      color: #f44336;
    }
    &.highlight {
      color: #2196f3;
      &.del {
        color: #f44336;
      }
    }
    &.switchButton {
      .next {
        display: none;
        position: relative;
        top: -1px;
      }
      &:hover {
        .current {
          display: none;
        }
        .next {
          display: block;
        }
      }
    }
    &:first-child {
      border-right: 1px solid #bdbdbd;
    }
  }
  .changeFontSizePopover {
    width: 250px;
    .ant-input {
      width: 60px;
      border-radius: 4px !important;
      box-shadow: none !important;
    }
  }
`]),wc=(0,xe.Z)([`
  box-sizing: border-box;
  width: 240px;
  background-color: #fff;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  p {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
  }
  .delComponent {
    margin-top: 20px;
    text-align: right;
    color: #f44336;
    cursor: pointer;
  }
  .btnGroup {
    text-align: right;
    margin-top: 16px;
    cursor: pointer;
    span {
      color: #9e9e9e;
    }
    .cancel {
    }
    .del {
      margin-left: 12px;
      background-color: #f44336;
      color: #fff;
      padding: 6px 12px;
      border-radius: 3px;
      text-align: center;
      line-height: 36px;
      &:hover {
        background-color: #ba160a;
      }
    }
  }
`],[`
  box-sizing: border-box;
  width: 240px;
  background-color: #fff;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  p {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
  }
  .delComponent {
    margin-top: 20px;
    text-align: right;
    color: #f44336;
    cursor: pointer;
  }
  .btnGroup {
    text-align: right;
    margin-top: 16px;
    cursor: pointer;
    span {
      color: #9e9e9e;
    }
    .cancel {
    }
    .del {
      margin-left: 12px;
      background-color: #f44336;
      color: #fff;
      padding: 6px 12px;
      border-radius: 3px;
      text-align: center;
      line-height: 36px;
      &:hover {
        background-color: #ba160a;
      }
    }
  }
`]),sr=[{type:"setting",icon:"settings",tip:_l("\u8BBE\u7F6E")},{type:"insertTitle",icon:"task_custom_text-box",tip:_l("\u63D2\u5165\u6807\u9898\u884C")},{type:"copy",icon:"copy_custom",tip:_l("\u590D\u5236")},{type:"move",icon:"swap_horiz",tip:_l("\u79FB\u52A8")},{type:"del",icon:"custom_-page_delete",tip:_l("\u5220\u9664")}],Jr=[{type:"insertTitle",icon:"task_custom_text-box",tip:_l("\u63D2\u5165\u6807\u9898\u884C")},{type:"hideMobile",icon:"visibility_off",tip:_l("\u9690\u85CF\u7EC4\u4EF6")}],qr=[{type:"insertTitle",icon:"task_custom_text-box",tip:_l("\u63D2\u5165\u6807\u9898\u884C")},{type:"switchButtonDisplay",icon:"looks_one",tip:_l("\u4E00\u884C\u4E00\u4E2A")},{type:"changeFontSize",icon:"text_bold2"},{type:"hideMobile",icon:"visibility_off",tip:_l("\u9690\u85CF\u7EC4\u4EF6")}],Ec={web:sr,mobile:Jr},Ic=Ee.ZP.ul(Cc,function(n){return n.titleVisible?"40px":"0"}),Sc=Ee.ZP.div(wc),kc=function(r){var o=r.widgetType,t=r.layoutType,l=r.reportType;return t==="mobile"?["button"].includes(o)||o==="analysis"&&[la.f0.NumberChart,la.f0.ProgressChart].includes(l)?la.f0.NumberChart===l?qr:qr.filter(function(a){return a.type!=="changeFontSize"}):Jr:["view","filter"].includes(o)?sr.filter(function(a){return!["move","copy"].includes(a.type)}):o==="ai"?sr.filter(function(a){return!["move","copy","setting"].includes(a.type)}):o!=="analysis"?sr.filter(function(a){return a.type!=="move"}):Ec[t]};function Nc(n){var r=n.appId,o=n.pageId,t=n.widget,l=n.layoutType,a=n.handleToolClick,s=n.titleVisible,p=n.updatePageInfo,v=t.reportType,c=t.config,h=c===void 0?{}:c,u=Et(!1),b=(0,H.Z)(u,2),m=b[0],g=b[1],x=(0,e.useState)(!1),F=(0,H.Z)(x,2),C=F[0],y=F[1],S=(0,e.useState)(h.mobileFontSize||15),w=(0,H.Z)(S,2),L=w[0],W=w[1],B=(0,Ze.V3)(t.type),Y=(0,e.useRef)(null),z=function(G){return!!(m&&G==="del"||G==="insertTitle"&&s)},K=function(G){return(B==="button"||B==="analysis"&&[la.f0.NumberChart,la.f0.ProgressChart].includes(v))&&G==="switchButtonDisplay"},ne=kc({widgetType:B,layoutType:l,reportType:v}),fe=function(G,q){if(G==="insertTitle"&&s)return _l("\u53D6\u6D88\u6807\u9898\u884C");if(K(G)){var X=B==="button"?N().get(t,["button","mobileCount"]):N().get(t,["config","mobileCount"]),ue=N().get(t,["button","config"])||{},ce=ue.direction;if(ce===1||B==="analysis"){if(X===1)return _l("\u4E00\u884C\u4E24\u4E2A");if(X===2)return _l("\u4E00\u884C\u4E09\u4E2A");if(X===3)return _l("\u4E00\u884C\u56DB\u4E2A");if(X===4)return _l("\u4E00\u884C\u4E00\u4E2A")}else{if(X===1)return _l("\u4E00\u884C\u4E24\u4E2A");if(X===2)return _l("\u4E00\u884C\u4E00\u4E2A")}}return q},J=function(G,q,X){if(K(G)){var ue=B==="button"?N().get(t,["button","mobileCount"]):N().get(t,["config","mobileCount"]);if(X){var ce=N().get(t,["button","config"])||{},he=ce.direction;if(he===1||B==="analysis"){if(ue===1)return"looks_two";if(ue===2)return"looks_three";if(ue===3)return"looks_four";if(ue===4)return"looks_one"}else{if(ue===1)return"looks_two";if(ue===2)return"looks_one"}}else{if(ue===1)return"looks_one";if(ue===2)return"looks_two";if(ue===3)return"looks_three";if(ue===4)return"looks_four"}}return q},P=function(G){var q=G.icon,X=G.type,ue=G.tip;return X==="del"?e.createElement(te.Z,{key:X,popupVisible:m,action:["click"],onPopupVisibleChange:function(he){return g(he)},getPopupContainer:function(){return document.body},popupAlign:{points:["tc","bc"],offset:[-40,10],overflow:{adjustX:!0,adjustY:!0}},popup:e.createElement(Sc,{className:"disableDrag"},e.createElement("p",null,_l("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7EC4\u4EF6")),e.createElement("div",{className:"btnGroup"},e.createElement("span",{className:"cancel",onClick:function(){return g(!1)}},_l("\u53D6\u6D88")),e.createElement("span",{className:"del",onClick:function(){return a("del")}},_l("\u5220\u9664"))))},e.createElement(Xn.default,{title:ue,placement:"bottom"},e.createElement("li",{className:E()(X,{highlight:z(X)}),key:X,onClick:function(he){g(!0)}},e.createElement("i",{className:"icon-"+q+" Font18"})))):X==="changeFontSize"?e.createElement(kr.Z,{placement:"bottom",arrowPointAtCenter:!0,content:e.createElement("div",{className:"changeFontSizePopover flexRow"},e.createElement(xc.Z,{className:"flex",value:L,min:12,max:28,onChange:function(he){W(he),a(X,he)}}),e.createElement(St.default,{className:"mLeft10",value:L,onChange:function(he){var Se=Number((0,Oe.pu)(he.target.value,!1)||0);W(Se)},onBlur:function(){var he=L;he<=12&&(he=12),he>=28&&(he=28),W(he),a(X,he)}})),getPopupContainer:function(){return Y.current||document.body}},e.createElement("li",{className:E()(X,{highlight:z(X)}),key:X,onClick:function(he){g(!0)}},e.createElement("i",{className:"icon-"+q+" Font18"}))):e.createElement(Xn.default,{title:fe(X,ue),placement:"bottom"},e.createElement("li",{className:E()(X,{highlight:z(X),switchButton:K(X)}),key:X,onClick:function(he){X==="move"?y(!0):a(X)}},e.createElement("i",{className:"icon-"+J(X,q)+" Font18 current"}),K(X)&&e.createElement("i",{className:"icon-"+J(X,q,!0)+" Font18 next"})))};return e.createElement(Ic,{ref:Y,titleVisible:s,className:"widgetContentTools disableDrag"},ne.map(function(j){return P(j)}),C&&e.createElement(yc.Z,{dialogClasses:"disableDrag",appId:r,pageId:o,reportId:t.value,onSucceed:function(G){p({version:G}),a("move")},onCancel:function(){y(!1)}}))}var Pc=i(73935);function Tc(n){return function(r){(0,je.default)(o,r);function o(){var t,l,a,s;(0,be.default)(this,o);for(var p=arguments.length,v=Array(p),c=0;c<p;c++)v[c]=arguments[c];return s=(l=(a=(0,Fe.default)(this,(t=o.__proto__||A()(o)).call.apply(t,[this].concat(v))),a),a.state={width:1280},a.mounted=!1,a.onWindowResize=function(h){if(a.mounted){var u=Pc.findDOMNode(a);u instanceof HTMLElement&&a.setState({width:typeof h=="number"?u.offsetWidth+h:u.offsetWidth})}},l),(0,Fe.default)(a,s)}return(0,We.default)(o,[{key:"componentDidMount",value:function(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),window.customPageWindowResize=this.onWindowResize,this.onWindowResize()}},{key:"componentWillReceiveProps",value:function(l){var a=this;if(l.chatVisible!==this.props.chatVisible){var s=l.chatVisible?-164:164;this.onWindowResize(s)}if(l.sheetListVisible!==this.props.sheetListVisible){var p=l.sheetListVisible?-176:176,v=document.querySelector(".countryLayerChart");v?setTimeout(function(){return a.onWindowResize(p)},0):this.onWindowResize(p)}this.props.isFullscreen!==l.isFullscreen&&!l.isFullscreen&&setTimeout(function(){a.onWindowResize()},100)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,delete window.customPageWindowResize,window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){return this.mounted?e.createElement(n,(0,f.default)({},this.props,this.state)):e.createElement("div",{className:this.props.className,style:this.props.style})}}]),o}(e.Component)}var Fc=(0,xe.Z)([`
  &:hover {
    z-index: 1;
  }
  .widgetContent {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 6px;
    overflow: auto;
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    &.numberChartCardHover {
      cursor: pointer;
      transition: box-shadow 0.2s;
      &:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
      }
    }
    &.richText {
      .editorNull {
        border: none;
      }
    }
    &.analysis, &.embedUrl {
      // overflow: visible;
    }
    &.filter {
      justify-content: center;
      padding: 0 10px;
    }
    &.filter.mobile {
      background-color: transparent;
      box-shadow: none;
      padding: 0;
      +span.react-resizable-handle {
        display: none;
      }
    }
    &:hover {
      // box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.20);
    }
    &.haveTitle {
      height: calc(100% - 40px);
    }
    .widgetContentTools {
      visibility: hidden;
    }
    &:hover {
      .widgetContentTools {
        visibility: visible;
      }
    }
    .g2-tooltip {
      position: fixed !important;
      z-index: 10 !important;
    }
  }
  .iframeNoneEvent iframe {
    pointer-events: none;
  }
  .componentTitle {
    width: 100%;
    height: 32px;
    line-height: 32px;
    margin-bottom: 8px;
    font-size: 16px;
    input {
      border: none;
      height: 32px;
      line-height: 32px;
      background: transparent;
      min-width: 60px;
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      transition: width border-bottom 0.2s;
      padding-right: 16px;
      font-size: 16px;
      &::placeholder {
        color: #bdbdbd;
      }
      &:focus {
        border-bottom: 2px solid #2196f3;
      }
    }
  }
  .titleSign {
    width: 5px;
    height: 24px;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .componentsWrap {
    padding: 0 0 4px 0;
    height: 100%;
  }
  .react-resizable-handle {
    z-index: 1;
  }
`],[`
  &:hover {
    z-index: 1;
  }
  .widgetContent {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 6px;
    overflow: auto;
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    &.numberChartCardHover {
      cursor: pointer;
      transition: box-shadow 0.2s;
      &:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
      }
    }
    &.richText {
      .editorNull {
        border: none;
      }
    }
    &.analysis, &.embedUrl {
      // overflow: visible;
    }
    &.filter {
      justify-content: center;
      padding: 0 10px;
    }
    &.filter.mobile {
      background-color: transparent;
      box-shadow: none;
      padding: 0;
      +span.react-resizable-handle {
        display: none;
      }
    }
    &:hover {
      // box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.20);
    }
    &.haveTitle {
      height: calc(100% - 40px);
    }
    .widgetContentTools {
      visibility: hidden;
    }
    &:hover {
      .widgetContentTools {
        visibility: visible;
      }
    }
    .g2-tooltip {
      position: fixed !important;
      z-index: 10 !important;
    }
  }
  .iframeNoneEvent iframe {
    pointer-events: none;
  }
  .componentTitle {
    width: 100%;
    height: 32px;
    line-height: 32px;
    margin-bottom: 8px;
    font-size: 16px;
    input {
      border: none;
      height: 32px;
      line-height: 32px;
      background: transparent;
      min-width: 60px;
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      transition: width border-bottom 0.2s;
      padding-right: 16px;
      font-size: 16px;
      &::placeholder {
        color: #bdbdbd;
      }
      &:focus {
        border-bottom: 2px solid #2196f3;
      }
    }
  }
  .titleSign {
    width: 5px;
    height: 24px;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .componentsWrap {
    padding: 0 0 4px 0;
    height: 100%;
  }
  .react-resizable-handle {
    z-index: 1;
  }
`]),Wc=Tc(is()),Zc=Ee.ZP.div(Fc),Rc={web:{rowHeight:ea.O$,margin:[10,10],cols:12},mobile:{rowHeight:ea.O$,margin:[10,10],cols:2}};function Lc(n){var r=n.layoutType,o=r===void 0?"web":r,t=n.ids,l=t===void 0?{}:t,a=n.editable,s=a===void 0?!0:a,p=n.chatVisible,v=p===void 0?!1:p,c=n.sheetListVisible,h=c===void 0?!1:c,u=n.components,b=u===void 0?[]:u,m=n.copyWidget,g=m===void 0?_.noop:m,x=n.delWidget,F=x===void 0?_.noop:x,C=n.updateWidgetVisible,y=C===void 0?_.noop:C,S=n.updateWidget,w=S===void 0?_.noop:S,L=n.updateLayout,W=L===void 0?_.noop:L,B=n.insertTitle,Y=B===void 0?_.noop:B,z=n.addRecord,K=z===void 0?_.noop:z,ne=n.updatePageInfo,fe=ne===void 0?_.noop:ne,J=n.editingWidget,P=J===void 0?{}:J,j=n.config,G=j===void 0?{}:j,q=n.setWidget,X=q===void 0?_.noop:q,ue=n.isFullscreen,ce=ue===void 0?!1:ue,he=n.adjustScreen,Se=n.apk,ke=n.isCharge,$e=n.appPkg,Qe=(0,e.useState)(!1),nn=(0,H.Z)(Qe,2),kn=nn[0],In=nn[1],Fn=(0,e.useState)(!1),yn=(0,H.Z)(Fn,2),rt=yn[0],Zn=yn[1],ot=(0,e.useState)(window.innerHeight),ut=(0,H.Z)(ot,2),wn=ut[0],rn=ut[1],Cn=(0,e.useRef)(null),tn=[];(0,e.useLayoutEffect)(function(){var gn=function(){var Le=window.innerHeight;Math.abs(Le-wn)>=ea.O$&&rn(Le)};window.addEventListener("resize",(0,Ft.throttle)(gn))},[]);var Je=function(bn,Le){var Ie=Le.widget,qe=Le.index,jn=Le.result;switch(bn){case"setting":X(Ie);break;case"move":case"del":F(Ie);break;case"insertTitle":Y({widget:Ie,visible:!Ie[o].titleVisible,layoutType:o}),Zn(!Ie[o].titleVisible);break;case"copy":if((0,Ze.V3)(Ie.type)==="analysis"){if(!(0,Ze.nw)(b)||(In(!0),kn))return;ls.Z.copyReport({reportId:Ie.value,sourceType:1}).then(function(bt){return g((0,f.default)({},_.omit(Ie,["id","uuid"]),{value:bt.reportId,layoutType:o,sourceValue:Ie.value,config:{objectId:(0,Nt.Z)()}}))}).finally(function(){return In(!1)})}else g((0,f.default)({},_.omit(Ie,["id","uuid"]),{layoutType:o}));alert(_l("\u590D\u5236\u6210\u529F"));break;case"hideMobile":y({widget:Ie,layoutType:o});break;case"switchButtonDisplay":if(Ie.type===1)w({widget:Ie,config:tt()(Ie.config,{mobileCount:{$apply:function(){var xt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return xt===4?1:xt+1}}})});else{var pn=_.get(Ie,"button.config")||{},Tt=pn.btnType,Rn=pn.direction;w({widget:Ie,button:tt()(Ie.button,{mobileCount:{$apply:function(xt){return Tt===2&&Rn===1?xt===4?1:xt+1:xt===1?2:1}}})})}break;case"changeFontSize":w({widget:Ie,config:tt()(Ie.config,{mobileFontSize:{$apply:function(xt){return jn}}})});break;default:break}},on=function(bn){return bn.map(function(){var Le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Ie=arguments[1],qe=Le.id,jn=Le[o]||{},pn=jn.layout,Tt=jn.titleVisible;return pn?(0,f.default)({},pn,{i:""+(qe||Ie)}):(0,f.default)({},(0,Ze.uy)({components:bn,index:Ie,layoutType:o,titleVisible:Tt}),{i:""+(qe||Ie)})})},un=function(){var bn=Rc[o],Le=document.getElementById("componentsWrap");if(o!=="web"||!he||!Le)return bn;var Ie=(0,Ft.max)(b.map(function(qe){return(0,Ft.get)(qe,["web","layout"])}).map(function(qe){return qe.h+qe.y}));return(0,f.default)({},bn,{rowHeight:((ce?window.screen.height:Le.offsetHeight)-(ce?10:64))/Ie-10})};return e.createElement(e.Fragment,null,e.createElement(Wc,(0,f.default)({className:"layout",chatVisible:v,sheetListVisible:h,cols:12,rowHeight:40,margin:[16,16],isDraggable:s,isResizable:s,isFullscreen:ce,draggableCancel:".disableDrag,.chartWrapper .drag",onResizeStop:function(bn){var Le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Ie=_.findIndex(bn,{i:Le.i}),qe=_.get(tn[Ie],["getData"]);qe&&typeof qe=="function"&&qe()},layout:on(b),onLayoutChange:function(bn){return W({layouts:bn,layoutType:o,components:b,adjustScreen:he})}},un()),b.map(function(gn,bn){var Le=gn.id,Ie=gn.type,qe=gn[o]||{},jn=qe.title,pn=qe.titleVisible,Tt=(0,Ze.V3)(Ie);return e.createElement(Zc,{key:""+(Le||bn),className:"resizableWrap"},pn&&e.createElement("div",{className:"componentTitle flexRow alignItemsCenter disableDrag bold",title:jn},s||rt?e.createElement("input",{ref:Cn,value:jn,placeholder:_l("\u6807\u9898"),onBlur:function(){return Zn(!1)},onChange:function(bt){return w({widget:gn,title:bt.target.value,layoutType:o})}}):e.createElement(e.Fragment,null,jn&&e.createElement("div",{className:"titleSign",style:{backgroundColor:$e.iconColor||Se.iconColor}}),e.createElement("span",{className:"flex overflow_ellipsis"},jn))),e.createElement("div",{className:E()("widgetContent",Tt,o,{haveTitle:pn,iframeNoneEvent:Tt==="embedUrl"&&s})},e.createElement(bc,{widget:gn,editingWidget:P,ids:l,isCharge:ke&&!($e.isLock||$e.permissionType===Ua.lt.RUNNER_ROLE),config:G,themeColor:$e.iconColor||Se.iconColor,isLock:$e.isLock,permissionType:$e.permissionType,projectId:$e.projectId||Se.projectId,ref:function(bt){tn[bn]=bt},editable:s,layoutType:o,isFullscreen:ce,addRecord:K}),s&&e.createElement(Nc,{appId:l.appId,pageId:l.worksheetId,widget:gn,layoutType:o,titleVisible:pn,handleToolClick:function(bt,xt){return Je(bt,{widget:gn,index:bn,result:xt})},updatePageInfo:fe})))})))}const eo=(0,de.Z)((0,ze.$j)(function(n){return{chatVisible:n.chat.visible,sheetListVisible:n.sheetList.isUnfold,isCharge:n.sheet.isCharge||n.appPkg.permissionType===2,appPkg:n.appPkg}},function(n){return(0,Ae.DE)(_t,n)})(Lc));var jc=(0,xe.Z)([`
  box-sizing: border-box;
  justify-content: center;
  padding: 0 8px;
  padding-top: 4px;
  background-color: #f5f5f5;
  height: 100%;
  flex: 1;
  overflow: auto;
  &.darkTheme .componentTitle {
    color: rgba(255, 255, 255, 1) !important;
  }
  &.componentsEmpty {
    display: flex;
    align-items: center;
  }
  .empty {
    .iconWrap {
      box-sizing: border-box;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin: 0 auto;
      background-color: #e6e6e6;
      text-align: center;
      padding-top: 35px;
      i {
        font-size: 60px;
        color: #bdbdbd;
      }
    }
    p {
      text-align: center;
      font-size: 15px;
      color: #757575;
    }
  }

  .componentsWrap {
    padding: 0 0 4px 0;
    height: 100%;
  }
`],[`
  box-sizing: border-box;
  justify-content: center;
  padding: 0 8px;
  padding-top: 4px;
  background-color: #f5f5f5;
  height: 100%;
  flex: 1;
  overflow: auto;
  &.darkTheme .componentTitle {
    color: rgba(255, 255, 255, 1) !important;
  }
  &.componentsEmpty {
    display: flex;
    align-items: center;
  }
  .empty {
    .iconWrap {
      box-sizing: border-box;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin: 0 auto;
      background-color: #e6e6e6;
      text-align: center;
      padding-top: 35px;
      i {
        font-size: 60px;
        color: #bdbdbd;
      }
    }
    p {
      text-align: center;
      font-size: 15px;
      color: #757575;
    }
  }

  .componentsWrap {
    padding: 0 0 4px 0;
    height: 100%;
  }
`]),Oc=Ee.ZP.div(jc);function Dc(n){var r=n.editable,o=r===void 0?!0:r,t=n.updateWidget,l=t===void 0?N().noop:t,a=n.className,s=a===void 0?"":a,p=n.emptyPlaceholder,v=n.config,c=n.appPkg,h=n.delWidget,u=(0,Ln.Z)(n,["editable","updateWidget","className","emptyPlaceholder","config","appPkg","delWidget"]),b=(0,e.useState)({}),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=(0,e.useRef)(null),C=u.adjustScreen,y=u.apk.iconColor,S=(0,Ze.Te)(v||{},c.iconColor||u.apk.iconColor),w=(0,Ze.k0)(n.components||[]),L=(0,Ze.gq)(n.components||[]);return e.createElement(e.Fragment,null,o&&e.createElement(rs,n),e.createElement(Oc,{ref:F,className:E()(s,{componentsEmpty:w<=0,darkTheme:S.pageBgColor&&!(0,Ze.eO)(S.pageBgColor),adjustScreen:C}),id:"componentsWrap",style:{backgroundColor:c.pcNaviStyle===1&&S.darkenPageBgColor||S.pageBgColor}},w.length>0?e.createElement("div",{className:"componentsWrap"},e.createElement(eo,(0,f.default)({},n,{components:w,editingWidget:g,setWidget:x,config:S}))):p||e.createElement("div",{className:"empty"},e.createElement("div",{className:"addWidgetPic"}),e.createElement("p",null,_l("\u4ECE\u5DE6\u4FA7\u6DFB\u52A0\u7EC4\u4EF6\uFF0C\u5F00\u59CB\u521B\u5EFA\u9875\u9762"))),L&&e.createElement(Sr,{editable:o,widget:L,delWidget:h}),!N().isEmpty(g)&&e.createElement(Hr,(0,f.default)({mode:"update",widget:g,onClose:function(){return x({})},updateWidget:l},u))))}const no=(0,ze.$j)(function(n){return{components:n.customPage.components,apk:n.customPage.apk}})((0,e.memo)(Dc));var Qa=i(84731),Bc=i(45371),_c=i(11022),zc=(0,xe.Z)([`
  width: 360px;
  padding: 14px 20px;
  padding-bottom: 16px;
  line-height: 20px;
  h3 {
    margin: 0;
  }
  .hint {
    margin: 12px 0;
    font-size: 12px;
    color: #757575;
  }
`],[`
  width: 360px;
  padding: 14px 20px;
  padding-bottom: 16px;
  line-height: 20px;
  h3 {
    margin: 0;
  }
  .hint {
    margin: 12px 0;
    font-size: 12px;
    color: #757575;
  }
`]),to=ma.default.SubMenu,ao=ma.default.Divider,Ac=Ee.ZP.div(zc),Gc=[{type:"editCanvas",text:_l("\u7F16\u8F91\u753B\u5E03%07005"),icon:"settings"},{type:"editPage",text:_l("\u7F16\u8F91\u5916\u90E8\u94FE\u63A5"),icon:"settings"},{type:"divider"},{type:"editName",text:_l("\u4FEE\u6539\u540D\u79F0\u548C\u56FE\u6807%07004"),icon:"edit"},{type:"editIntro",text:_l("\u7F16\u8F91\u9875\u9762\u8BF4\u660E%07003"),icon:"info"},{type:"displaySetting",text:_l("\u663E\u793A\u8BBE\u7F6E%07002"),icon:"desktop"},{type:"divider"},{type:"delete",text:_l("\u5220\u9664\u9875\u9762%07000"),icon:"delete2",className:"delete"}];function Mc(n){var r=(0,e.useState)(!1),o=(0,H.Z)(r,2),t=o[0],l=o[1],a=n.currentSheet,s=n.projectId,p=n.appGroups,v=n.ids,c=n.onClick,h=n.moveSheet,u=n.adjustScreen,b=(0,e.useState)({selectedApp:"",selectedGroup:""}),m=(0,H.Z)(b,2),g=m[0],x=m[1],F=(0,e.useState)({appList:[],groupList:[]}),C=(0,H.Z)(F,2),y=C[0],S=C[1],w=g.selectedApp,L=g.selectedGroup,W=y.appList,B=y.groupList,Y=v.appId,z=v.groupId,K=function(q){var X=[],ue=q.filter(function(ce){return ce.projectId===s})[0];return ue&&ue.projectApps&&ue.projectApps.length&&ue.projectApps.forEach(function(ce){var he=(0,Me.le)(ce.permissionType);he&&Y!==ce.id&&X.push({text:ce.name,value:ce.id})}),X};(0,e.useEffect)(function(){Pn.Z.getAllHomeApp().then(function(G){var q=G.validProject;S((0,f.default)({},y,{appList:K(q)}))})},[]),(0,e.useEffect)(function(){w&&Pn.Z.getApp({appId:w,getSection:!0}).then(function(G){var q=G.sections;S((0,f.default)({},y,{groupList:q.map(function(X){return{value:X.appSectionId,text:X.name||_l("\u672A\u547D\u540D\u5206\u7EC4")}})}))})},[w]);var ne=function(){l(!1)},fe=function(){l(!1),h({sourceAppId:Y,sourceAppSectionId:z,resultAppId:w,ResultAppSectionId:L,workSheetsInfo:[a]})},J=function(q){l(!1),h({sourceAppId:Y,sourceAppSectionId:z,resultAppId:Y,ResultAppSectionId:q,workSheetsInfo:[a]})},P=function(){return e.createElement("div",null,e.createElement(V.ZP,{type:"link",onClick:ne},_l("\u53D6\u6D88")),e.createElement(V.ZP,{type:"primary",onClick:fe,disabled:!L,className:E()({"Button--disabled":!L})},_l("\u786E\u8BA4")))},j=function(){return e.createElement(ia.Z,{visible:!0,className:"movePage",anim:!1,title:_l("\u79FB\u52A8\u81EA\u5B9A\u4E49\u9875\u9762\u5230\u5176\u4ED6\u5E94\u7528"),width:560,onCancel:ne,footer:P()},e.createElement("div",{className:"Gray_75"},_l("\u81EA\u5B9A\u4E49\u9875\u9762\u4E0B\u7684\u6240\u6709\u914D\u7F6E\u4F1A\u79FB\u52A8\u5230\u76EE\u6807\u5E94\u7528\u4E2D")),e.createElement("div",{className:"flexRow valignWrapper mTop25"},e.createElement("span",{className:"Gray_75 mRight10 TxtRight name"},_l("\u5E94\u7528")),e.createElement(Kn.Z,{isAppendToBody:!0,placeholder:_l("\u8BF7\u9009\u62E9\u4F60\u4F5C\u4E3A\u7BA1\u7406\u5458\u6216\u5F00\u53D1\u8005\u7684\u5E94\u7528"),menuClass:"sheetMoveApp",className:E()("flex",{empty:!w}),border:!0,value:w,data:W,onChange:function(X){x((0,f.default)({},g,{selectedApp:X}))}})),e.createElement("div",{className:"flexRow valignWrapper mTop15"},e.createElement("span",{className:"Gray_75 mRight10 TxtRight name"},_l("\u5206\u7EC4")),e.createElement(Kn.Z,{disabled:!w,isAppendToBody:!0,className:E()("flex",{empty:!L}),border:!0,value:L,data:B,onChange:function(X){x((0,f.default)({},g,{selectedGroup:X}))}})))};return t?j():e.createElement(ma.default,{className:"customPageOperateMenu",activeKey:null,selectable:!1},Gc.filter(function(G){return _.get(n,["appPkg","isLock"])||_.get(n,["appPkg","permissionType"])===Ua.lt.RUNNER_ROLE?["editName","editIntro"].includes(G.type):!0}).filter(function(G){return G.type==="editCanvas"||G.type==="displaySetting"?!a.urlTemplate:G.type==="editPage"?!!a.urlTemplate:!0}).map(function(G,q){var X=G.type,ue=G.text,ce=G.icon,he=(0,Ln.Z)(G,["type","text","icon"]);return X==="divider"?e.createElement(ao,{key:q}):X==="move"?e.createElement(to,{key:q,popupClassName:"customPageSubMenu",title:e.createElement(e.Fragment,null,e.createElement("i",{className:"icon-"+ce+" "}),e.createElement("span",null,ue))},p.map(function(Se){return e.createElement(ma.default.Item,{className:"pointer",key:Se.appSectionId,disabled:Se.appSectionId===v.groupId,onClick:function(){return J(Se.appSectionId)}},e.createElement("span",null,Se.name||_l("\u672A\u547D\u540D\u5206\u7EC4")))}),e.createElement(ao,null),e.createElement(ma.default.Item,{className:"otherApp pointer",onClick:function(){return l(!0)}},e.createElement("span",null,_l("\u5176\u4ED6\u5E94\u7528")))):X==="displaySetting"?e.createElement(to,{key:q,popupClassName:"customPageSubMenu",title:e.createElement(e.Fragment,null,e.createElement("i",{className:"icon-"+ce+" "}),e.createElement("span",null,ue))},e.createElement(Ac,{onClick:function(ke){return ke.stopPropagation()}},e.createElement("h3",null,_l("\u5F3A\u5236\u9002\u5E94\u5C4F\u5E55%07001")),e.createElement("div",{className:"hint"},_l("\u5F3A\u5236\u9875\u9762\u9002\u5E94\u4E00\u5C4F\u663E\u793A\uFF0C\u9002\u5408\u9700\u8981\u5728\u6240\u6709\u5C3A\u5BF8\u5C4F\u5E55\u4E0B\u59CB\u7EC8\u94FA\u6EE1\u7684\u60C5\u51B5\u3002\uFF08 \u5982\u679C\u539F\u59CB\u9875\u9762\u8FC7\u957F\uFF0C\u7EC4\u4EF6\u4F1A\u88AB\u538B\u7F29\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u663E\u793A \uFF09")),e.createElement(Ya.Z,{checked:u,onChange:function(){c("adjustScreen",{adjustScreen:!u})}}))):e.createElement(ma.default.Item,(0,f.default)({key:X,onClick:function(){return c(X)}},he),e.createElement("i",{className:"icon-"+ce}),e.createElement("span",null,ue))}))}const $c=(0,ze.$j)(function(n){var r=n.appPkg;return{projectId:r.projectId,appGroups:r.appGroups}},function(n){return(0,Ae.DE)({moveSheet:Te.moveSheet},n)})(Mc);var Vc=i(839),Hc=i(91555),Uc=i(93162),cr=i(53328),Yc=i(8295),Qc=i(92138),Xc=i(75064),Kc=(0,xe.Z)([`
  &.sideAbsolute {
    position: absolute;
    header {
      padding: 0 24px 0 24px;
    }
    .mask {
      background-color: transparent !important;
    }
    .sideContentWrap {
      position: absolute;
    }
    .sideContent {
      margin-top: 20px;
      padding-bottom: 30px;
    }
  }
  .sideContentWrap {
    width: 560px;
  }
  header {
    box-shadow: none;
  }
`],[`
  &.sideAbsolute {
    position: absolute;
    header {
      padding: 0 24px 0 24px;
    }
    .mask {
      background-color: transparent !important;
    }
    .sideContentWrap {
      position: absolute;
    }
    .sideContent {
      margin-top: 20px;
      padding-bottom: 30px;
    }
  }
  .sideContentWrap {
    width: 560px;
  }
  header {
    box-shadow: none;
  }
`]),Jc=(0,xe.Z)([`
  .colorWrap, .addColor, .defaultColor {
    cursor: pointer;
    margin-right: 10px;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .colorWrap.active {
    position: relative;
    border-color: #fff;
    &::after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      width: 32px;
      height: 32px;
      border: 1px solid #E0E0E0;
      border-radius: 4px;
    }
  }
  .defaultColor {
    position: relative;
    &.active {
      border-color: #2196F3;
      &::after {
        background-color: #2196F3;
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background-color: #E0E0E0;
      transform: rotateZ(-45deg);
    }
  }
  .colorSpacingLine {
    width: 1px;
    height: 22px;
    margin: 0 10px;
    background-color: #d2d1d1;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #E6E6E6;
  }
  .selectChartColor {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    .colorBlock {
      width: 24px;
      height: 24px;
      margin-right: 7px;
    }
    .colorName {
      width: 200px;
    }
  }
  .label {
    width: 60px;
    margin-right: 30px;
    font-weight: 600;
  }
  .typeSelect {
    font-size: 13px;
    border-radius: 3px;
    width: max-content;
    padding: 3px;
    background-color: #eff0f0;
    >div {
      height: 25px;
      line-height: 25px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      color: #2196F3 !important;
      border-radius: 3px;
      font-weight: bold;
      background-color: #fff;
    }
  }
  .pageSelect {
    &.ant-select:not(.ant-select-disabled):hover .ant-select-selector, &.ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      border-color: #2196F3 !important;
    }
    .ant-select-selector {
      border-radius: 4px !important;
      box-shadow: none !important;
    }
    .ant-select-selector, .ant-select-selection-item {
      height: 32px;
      line-height: 30px;
    }
    .ant-select-arrow {
      width: auto;
      height: auto;
      top: 40%;
    }
    &.ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
      opacity: 1;
      font-size: 13px;
    }
    &.ant-select-single.ant-select-open .ant-select-selection-item {
      color: inherit;
    }
  }
`],[`
  .colorWrap, .addColor, .defaultColor {
    cursor: pointer;
    margin-right: 10px;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .colorWrap.active {
    position: relative;
    border-color: #fff;
    &::after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      width: 32px;
      height: 32px;
      border: 1px solid #E0E0E0;
      border-radius: 4px;
    }
  }
  .defaultColor {
    position: relative;
    &.active {
      border-color: #2196F3;
      &::after {
        background-color: #2196F3;
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background-color: #E0E0E0;
      transform: rotateZ(-45deg);
    }
  }
  .colorSpacingLine {
    width: 1px;
    height: 22px;
    margin: 0 10px;
    background-color: #d2d1d1;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #E6E6E6;
  }
  .selectChartColor {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    .colorBlock {
      width: 24px;
      height: 24px;
      margin-right: 7px;
    }
    .colorName {
      width: 200px;
    }
  }
  .label {
    width: 60px;
    margin-right: 30px;
    font-weight: 600;
  }
  .typeSelect {
    font-size: 13px;
    border-radius: 3px;
    width: max-content;
    padding: 3px;
    background-color: #eff0f0;
    >div {
      height: 25px;
      line-height: 25px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      color: #2196F3 !important;
      border-radius: 3px;
      font-weight: bold;
      background-color: #fff;
    }
  }
  .pageSelect {
    &.ant-select:not(.ant-select-disabled):hover .ant-select-selector, &.ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      border-color: #2196F3 !important;
    }
    .ant-select-selector {
      border-radius: 4px !important;
      box-shadow: none !important;
    }
    .ant-select-selector, .ant-select-selection-item {
      height: 32px;
      line-height: 30px;
    }
    .ant-select-arrow {
      width: auto;
      height: auto;
      top: 40%;
    }
    &.ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
      opacity: 1;
      font-size: 13px;
    }
    &.ant-select-single.ant-select-open .ant-select-selection-item {
      color: inherit;
    }
  }
`]),qc=(0,Ee.ZP)(Zr)(Kc),ed=Ee.ZP.div(Jc),nd=[{value:0,name:_l("\u5173\u95ED")},{value:30,name:_l("30\u79D2")},{value:60,name:_l("1\u5206\u949F")},{value:60*2,name:_l("2\u5206\u949F")},{value:60*3,name:_l("3\u5206\u949F")},{value:60*4,name:_l("4\u5206\u949F")},{value:60*5,name:_l("5\u5206\u949F")}],Nr={pageBgColor:"#f5f6f7",chartColor:"",chartColorIndex:1,numberChartColor:"",numberChartColorIndex:1,pivoTableColor:"",refresh:0,headerVisible:!0,shareVisible:!0,downloadVisible:!0,fullScreenVisible:!0,customColors:[]};const ro=function(n){var r=n.adjustScreen,o=n.apk,t=n.className,l=n.onClose,a=n.updatePageInfo,s=n.updateModified,p=s===void 0?_.noop:s,v=(0,e.useState)(!1),c=(0,H.Z)(v,2),h=c[0],u=c[1],b=k.Z.getState(),m=b.appPkg,g=m.iconColor,x=m.currentPcNaviStyle,F=(0,Qc.generate)(g)[0],C=n.config||Nr,y=function(z){p(!0);var K={config:(0,f.default)({},C,z)};z.autoLinkage===!1&&(K.linkageFiltersGroup={}),a(K)},S=[{color:g,title:_l("\u4E3B\u9898\u6DF1\u8272"),value:"iconColor"},{color:F,title:_l("\u4E3B\u9898\u6D45\u8272"),value:"lightColor"}],w=function(){var z=[{color:"#ffffff",value:"#ffffff",title:_l("\u767D\u8272")},{color:"#f5f6f7",value:"#f5f6f7",title:_l("\u7070\u8272")},{color:"#1b2025",value:"#1b2025",title:_l("\u9ED1\u8272")}],K=S.concat(z),ne=C.customColors,fe=ne===void 0?[]:ne,J=C.chartColorIndex,P=J===void 0?1:J,j=function(q){if(_.find(S,{value:q})&&!C.chartColor){var X=(0,la.og)(o.projectId),ue=X.filter(function(ce){return(ce.themeColors||[]).includes(g)});y({pageBgColor:q,chartColor:{colorGroupId:"adaptThemeColor",colorGroupIndex:void 0,colorType:1},chartColorIndex:P+1})}else y({pageBgColor:q})};return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font14 bold mBottom10"},_l("\u9875\u9762\u80CC\u666F")),e.createElement("div",{className:"flexRow alignItemsCenter pageBgColors"},K.map(function(G){return G.title?e.createElement(Xn.default,{key:G.value||G.color,title:G.title,color:"#000",placement:"bottom"},e.createElement("div",{className:E()("colorWrap",{active:G.value===C.pageBgColor}),style:{backgroundColor:G.color},onClick:function(){return j(G.value)}})):e.createElement("div",{key:G,className:E()("colorWrap",{active:G===C.pageBgColor}),style:{backgroundColor:G},onClick:function(){return j(G)}})})))},L=function(){var z=C.chartColor,K=[{color:"#1b2025",value:"#1b2025",title:_l("\u9ED1\u8272")}],ne=[S[0]].concat(K),fe=function(X){var ue=C.numberChartColorIndex,ce=ue===void 0?1:ue;y({numberChartColor:X,numberChartColorIndex:ce+1})},J=function(){var X=z||{},ue=X.colorType,ce=X.colorGroupId,he=X.customColors,Se=(0,la.og)(o.projectId),ke={name:_l("\u672A\u914D\u7F6E"),showColors:[]};if(!C.chartColor)return ke;if(ue===2)return{name:_l("\u81EA\u5B9A\u4E49\u989C\u8272"),showColors:he};if(ce==="adaptThemeColor"){var $e=Se.filter(function(nn){return(nn.themeColors||[]).includes(g)});return $e.length?{name:_l("\u9002\u5E94\u4E3B\u9898"),showColors:$e[0].colors}:{name:Se[0].name,showColors:Se[0].colors}}else{var Qe=_.find(Se,{id:ce})||Se[0];return{name:Qe.name,showColors:Qe.colors}}return ke},P=J(),j=P.name,G=P.showColors;return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font14 bold mBottom10"},_l("\u5168\u5C40\u989C\u8272")),e.createElement("div",{className:"Gray_9e Font13"},_l("\u4E3A\u6240\u6709\u56FE\u8868\u8BBE\u7F6E\u7EDF\u4E00\u989C\u8272\uFF0C\u5168\u5C40\u989C\u8272\u5C06\u8986\u76D6\u56FE\u8868\u672C\u8272\u7684\u989C\u8272\u914D\u7F6E\u3002")),e.createElement("div",{className:"Gray_75 Font13 bold mTop20 mBottom10"},_l("\u56FE\u8868\u914D\u8272")),e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"selectChartColor flexRow alignItemsCenter pointer flex",onClick:function(){return u(!0)}},e.createElement("div",{className:"flexRow alignItemsCenter flex"},G.map(function(q,X){return e.createElement("div",{key:X,style:{background:q},className:"colorBlock"})}),e.createElement("div",{className:"colorName ellipsis"},j)),e.createElement(O.Z,{icon:"arrow-down-border",className:"Gray_9e Font18"}))),e.createElement("div",{className:"Gray_75 Font13 bold mTop20 mBottom10"},_l("\u6570\u503C\u989C\u8272")),e.createElement("div",{className:"flexRow alignItemsCenter"},ne.map(function(q,X){return q.title?e.createElement(Xn.default,{key:X,title:q.title,color:"#000",placement:"bottom"},e.createElement("div",{className:E()("colorWrap",{active:q.value===C.numberChartColor}),style:{backgroundColor:q.color},onClick:function(){return fe(q.value)}})):e.createElement("div",{key:X,className:E()("colorWrap",{active:q.value===C.numberChartColor}),style:{backgroundColor:q},onClick:function(){return fe(q)}})})),e.createElement(Xc.Z,{visible:h,projectId:o.projectId,currentReport:{style:z},onChange:function(X){var ue=C.chartColorIndex,ce=ue===void 0?1:ue;y({chartColor:X.style,chartColorIndex:ce+1}),u(!1)},onCancel:function(){return u(!1)}}))},W=function(){var z=[{color:"#f5f6f7",value:"#f5f6f7",title:_l("\u7070\u8272")},{color:"#1b2025",value:"#1b2025",title:_l("\u9ED1\u8272")}],K=S.concat(z),ne=function(J){var P=C.pivoTableColorIndex,j=P===void 0?1:P;y({pivoTableColor:J,pivoTableColorIndex:j+1})};return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray_75 Font13 bold mTop20 mBottom10"},_l("\u900F\u89C6\u8868\u989C\u8272")),e.createElement("div",{className:"flexRow alignItemsCenter"},K.map(function(fe,J){return fe.title?e.createElement(Xn.default,{key:J,title:fe.title,color:"#000",placement:"bottom"},e.createElement("div",{className:E()("colorWrap",{active:fe.value===C.pivoTableColor}),style:{backgroundColor:fe.color},onClick:function(){return ne(fe.value)}})):e.createElement("div",{key:J,className:E()("colorWrap",{active:fe===C.pivoTableColor}),style:{backgroundColor:fe},onClick:function(){return ne(fe)}})})))},B=function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"Gray Font14 bold mTop20 mBottom10"},_l("\u901A\u7528")),e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u9875\u9762\u5E03\u5C40")),e.createElement("div",{className:"flex"},e.createElement("div",{className:"typeSelect flexRow valignWrapper"},e.createElement("div",{className:E()("centerAlign pointer Gray_75",{active:!r}),onClick:function(){return a({adjustScreen:!1})}},_l("\u6EDA\u52A8")),e.createElement("div",{className:E()("centerAlign pointer Gray_75",{active:r}),onClick:function(){return a({adjustScreen:!0})}},_l("\u9002\u5E94\u5C4F\u5E55\u9AD8\u5EA6"))))),e.createElement("div",{className:"flexRow alignItemsCenter mTop15"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u81EA\u52A8\u5237\u65B0")),e.createElement("div",{className:"flex"},e.createElement(it.default,{className:"pageSelect w100",value:C.refresh,suffixIcon:e.createElement(O.Z,{icon:"expand_more",className:"Gray_9e Font20"}),onChange:function(K){y({refresh:K})}},nd.map(function(z){return e.createElement(it.default.Option,{className:"selectOptionWrapper",value:z.value},z.name)})))),x!==2&&e.createElement("div",{className:"flexRow mTop15"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u6807\u9898\u533A")),e.createElement("div",{className:"flex"},e.createElement("div",{className:"mBottom15"},e.createElement("label",{className:"flexRow alignItemsCenter pointer"},e.createElement(Ya.Z,{className:"mRight5",size:"small",checked:C.headerVisible,onChange:function(K){y({headerVisible:K})}}),_l("\u663E\u793A\u6807\u9898\u680F"))),C.headerVisible&&e.createElement("div",{className:"flexRow alignItemsCenter"},e.createElement("div",{className:"mRight15"},_l("\u64CD\u4F5C")),e.createElement(nt.default,{className:"flexRow alignItemsCenter",checked:C.shareVisible,onChange:function(K){y({shareVisible:K.target.checked})}},_l("\u5206\u4EAB")),e.createElement(nt.default,{className:"flexRow alignItemsCenter",checked:C.downloadVisible,onChange:function(K){y({downloadVisible:K.target.checked})}},_l("\u4E0B\u8F7D")),e.createElement(nt.default,{className:"flexRow alignItemsCenter",checked:C.fullScreenVisible,onChange:function(K){y({fullScreenVisible:K.target.checked})}},_l("\u5168\u5C4F"))))),e.createElement("div",{className:"flexRow mTop15 mBottom20"},e.createElement("div",{className:"Gray_75 Font13 label"},_l("\u8054\u52A8\u7B5B\u9009")),e.createElement("div",{className:"flex"},e.createElement("label",{className:"flexRow alignItemsCenter pointer"},e.createElement(Ya.Z,{className:"mRight5",size:"small",checked:C.autoLinkage,onChange:function(K){y({autoLinkage:K})}}),_l("\u540C\u6570\u636E\u6E90\u7EC4\u4EF6\u81EA\u52A8\u5173\u8054")))))};return e.createElement(qc,{isMask:!0,className:E()("white",t),headerText:e.createElement(e.Fragment,null,e.createElement("span",{className:"Font17"},_l("\u9875\u9762\u914D\u7F6E"))),onClose:l},e.createElement(ed,null,w(),e.createElement("div",{className:"line mTop20 mBottom20"}),L(),W(),e.createElement("div",{className:"line mTop20 mBottom20"}),B()))};var td=i(729);function ad(n){var r=this,o=n.currentSheet,t=n.updateEditPageVisible,l=n.updatePageInfo,a=n.deleteLinkageFiltersGroup,s=n.ids,p=s===void 0?{}:s,v=n.updateSheetListIsUnfold,c=n.copyCustomPage,h=n.toggle,u=n.resetPage,b=n.pageName,m=n.apk,g=n.appPkg,x=n.linkageFiltersGroup,F=(0,Ln.Z)(n,["currentSheet","updateEditPageVisible","updatePageInfo","deleteLinkageFiltersGroup","ids","updateSheetListIsUnfold","copyCustomPage","toggle","resetPage","pageName","apk","appPkg","linkageFiltersGroup"]),C=n.isCharge||(0,Me.g9)(_.get(g,["permissionType"])),y=p.groupId,S=m.appName,w=(0,Ze.Te)(n.config||{},g.iconColor||m.iconColor),L=g.projectId||m.projectId,W=g.id||m.appId,B=o.icon,Y=o.workSheetName,z=o.urlTemplate,K=o.configuration,ne=p.worksheetId,fe=(0,e.useState)({popupVisible:!1,editNameVisible:!1,editIntroVisible:!1}),J=(0,H.Z)(fe,2),P=J[0],j=J[1],G=z?K.desc:n.desc,q=P.popupVisible,X=P.editNameVisible,ue=P.editIntroVisible,ce=b!==Y?Y||b:b||Y,he=(0,Oe.T3)(W,ne).name||ce,Se=(0,Oe.T3)(W,W).name||S,ke=(0,e.useState)(!1),$e=(0,H.Z)(ke,2),Qe=$e[0],nn=$e[1],kn=(0,e.useState)(!1),In=(0,H.Z)(kn,2),Fn=In[0],yn=In[1],rt=(0,e.useState)(!1),Zn=(0,H.Z)(rt,2),ot=Zn[0],ut=Zn[1],wn=(0,e.useState)(!1),rn=(0,H.Z)(wn,2),Cn=rn[0],tn=rn[1],Je=(0,e.useState)(window.inFull||!1),on=(0,H.Z)(Je,2),un=on[0],gn=on[1],bn=(0,e.useState)(!1),Le=(0,H.Z)(bn,2),Ie=Le[0],qe=Le[1];(0,e.useEffect)(function(){return window.editCustomPage=function(){Rn(z?"editPage":"editCanvas")},function(){l({linkageFiltersGroup:{}}),delete window.editCustomPage}},[ne]);var jn=function(){var On=(S?S+"_":"")+ce+"_"+Kr()().format("_YYYYMMDDHHmmSS")+".png";yn(!0),window.customPageWindowResize&&window.customPageWindowResize(),(0,Ze.eS)().then(Ze.Rb.bind(r,w.pageBgColor)).then(function($n){yn(!1),(0,Uc.saveAs)($n,On)})},pn=function(On){Qa.Z.updatePage((0,f.default)({appId:ne},On)).then(function($n){$n?l(On):alert(_l("\u4FEE\u6539\u5931\u8D25"),2)})},Tt=function(On){var $n=k.Z.getState().appPkg.currentPcNaviStyle,lt={configuration:(0,f.default)({},K,{desc:On})};Pt.Z.editWorkSheetInfoForApp((0,f.default)({appId:W,appSectionId:y,workSheetId:ne,type:1},lt)).then(function(sa){if([1,3].includes($n)){var Ba=(0,cr.xy)(y);Ba.dispatch((0,Te.updateSheetListAppItem)(ne,lt))}else F.updateSheetListAppItem(ne,lt)})},Rn=function(On,$n){var lt;switch(On){case"editCanvas":j(tt()(P,{popupVisible:{$set:!1}})),l({components:[],pageId:ne,pageName:ce}),t(!0);break;case"editPage":j(tt()(P,{popupVisible:{$set:!1}})),tn(!0);break;case"editName":case"editIntro":ut(!0),j(tt()(P,(lt={},(0,ft.default)(lt,On+"Visible",{$set:!0}),(0,ft.default)(lt,"popupVisible",{$set:!1}),lt)));break;case"adjustScreen":pn($n);break;case"copy":c({appId:W,appSectionId:y,id:ne,name:_l("%0-\u590D\u5236",ce),iconColor:o.iconColor,iconUrl:o.iconUrl}),j(tt()(P,{popupVisible:{$set:!1}}));break;case"move":j(tt()(P,{popupVisible:{$set:!1}}));break;case"delete":(0,Bc.Z)({style:{width:"560px"},title:e.createElement("span",{className:"Bold"},_l("\u5220\u9664\u81EA\u5B9A\u4E49\u9875\u9762 \u201C%0\u201D",ce)),description:e.createElement("div",null,e.createElement("span",{style:{color:"#333",fontWeight:"bold"}},_l("\u6CE8\u610F\uFF1A\u81EA\u5B9A\u4E49\u9875\u9762\u4E0B\u6240\u6709\u914D\u7F6E\u548C\u6570\u636E\u5C06\u88AB\u5220\u9664\u3002")),_l("\u8BF7\u52A1\u5FC5\u786E\u8BA4\u6240\u6709\u5E94\u7528\u6210\u5458\u90FD\u4E0D\u518D\u9700\u8981\u6B64\u81EA\u5B9A\u4E49\u9875\u9762\u540E\uFF0C\u518D\u6267\u884C\u6B64\u64CD\u4F5C\u3002")),data:[{text:_l("\u6211\u786E\u8BA4\u5220\u9664\u81EA\u5B9A\u4E49\u9875\u9762\u548C\u6240\u6709\u6570\u636E"),value:1}],onOk:function(){var Ba=g.currentPcNaviStyle,dr={type:1,appId:W,projectId:L,groupId:y,worksheetId:ne,parentGroupId:o.parentGroupId};if([1,3].includes(Ba)){var Ld=(0,cr.xy)(y);Ld.dispatch((0,Te.deleteSheet)(dr))}else n.deleteSheet(dr)}}),j(tt()(P,{popupVisible:{$set:!1}}));break;default:j(tt()(P,{popupVisible:{$set:!1}}));break}},bt=function(On,$n){j(tt()(P,(0,ft.default)({},$n,{$set:On})))},xt=location.href.includes("public/page"),ka=location.href.includes("embed/page"),Ja=location.href.includes("#embed"),po=function(){var On=function(){var sa=[];for(var Ba in x){var dr=x[Ba];sa.push((0,f.default)({key:Ba},dr))}return sa},$n=On();return e.createElement("div",{className:"customPageAutoLinkagePopover"},e.createElement("div",{className:"valignWrapper",style:{padding:"0 4px 0 9px"}},e.createElement("div",{className:"Font17 bold Gray flex"},_l("\u8054\u52A8\u7B5B\u9009")),e.createElement(O.Z,{className:"Font24 Gray_9e pointer",icon:"close",onClick:function(){return document.querySelector(".autoLinkageTrigger").click()}})),$n.length?e.createElement(e.Fragment,null,e.createElement("div",{className:"linkageFilterWrap"},$n.map(function(lt){return e.createElement("div",{className:"linkageFilter mTop10",key:lt.reportId},e.createElement("div",{className:"flexRow alignItemsCenter mBottom2"},e.createElement(O.Z,{className:"Font16 mRight5 ThemeColor",icon:_.find(td.og,{type:lt.reportType}).icon}),e.createElement("div",{className:"flex ellipsis bold"},lt.reportName),e.createElement(O.Z,{className:"Font17 Gray_9e pointer",icon:"delete2",onClick:function(){return a({value:lt.key})}})),e.createElement("div",{className:"flexColumn mLeft20"},lt.filters.map(function(sa){return e.createElement("div",{key:sa.controlId,dangerouslySetInnerHTML:{__html:_l("%0\u662F%1",'<span class="bold mRight2">'+sa.controlName+"</span>",'<span class="bold mLeft2">'+(sa.controlValue||"--")+"</span>")}})})))})),e.createElement("div",{className:"mTop10 TxtRight"},e.createElement("span",{className:"pointer ThemeColor closeText",onClick:function(){l({linkageFiltersGroup:{}}),document.querySelector(".autoLinkageTrigger").click()}},_l("\u6E05\u7A7A\u5E76\u5173\u95ED")))):e.createElement("div",{className:"flexColumn alignItemsCenter justifyContentCenter mTop20 mBottom20"},e.createElement(O.Z,{className:"Font64 Gray_df",icon:"linkage_filter"}),e.createElement("div",{className:"Gray_9e mTop5 Font14"},_l("\u672A\u53D1\u8D77\u8054\u52A8\u7B5B\u9009"))))};return e.createElement(e.Fragment,null,e.createElement("header",{className:E()({embedPageHeader:Ja||ka,hide:g.currentPcNaviStyle===2?!1:!(z?K.hideHeaderBar==="0":w.headerVisible),darkTheme:w.pageBgColor&&!(0,Ze.eO)(w.pageBgColor)}),style:{backgroundColor:g.pcNaviStyle===1&&w.darkenPageBgColor||w.pageBgColor}},e.createElement("div",{className:"nameWrap flex"},!xt&&!ka&&(g.currentPcNaviStyle===2?e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u9000\u51FA")," (",window.isMacOs?"\u2318 + E":"Shift + E",")"),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap hideSide",onClick:function(){window.disabledSideButton=!0,(0,ae.T8)("/app/"+W+"/"+y)}},e.createElement(O.Z,{icon:"close_fullscreen",className:"hoverGray fullRotate Font20"}))):e.createElement(Pe.Z,{text:e.createElement("span",null,un?_l("\u9000\u51FA"):_l("\u5C55\u5F00")," (",window.isMacOs?"\u2318 + E":"Shift + E",")"),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap hideSide",onClick:function(){un?(window.disabledSideButton=!0,window.inFull=!1,gn(!1),document.querySelector("#wrapper").classList.remove("fullWrapper"),window.customPageWindowResize&&window.customPageWindowResize()):(window.inFull=!0,gn(!0),document.querySelector("#wrapper").classList.add("fullWrapper"),window.customPageWindowResize&&window.customPageWindowResize())}},e.createElement(O.Z,{icon:un?"close_fullscreen":"open_in_full",className:E()("hoverGray fullRotate",un?"Font20":"Font17")})))),xt?e.createElement("div",{className:"valignWrapper mLeft10 w100"},e.createElement("div",{className:"svgWrap valignWrapper",style:{backgroundColor:m.iconColor}},e.createElement(ve.Z,{url:m.iconUrl,fill:"#fff",size:22})),(Se||he)&&e.createElement("span",{className:"pageName Font17 ellipsis"},Se,"-",he)):e.createElement("span",{className:"pageName Font17"},he),G&&!xt&&e.createElement(kr.Z,{arrowPointAtCenter:!0,title:null,placement:"bottomLeft",overlayClassName:"sheetDescPopoverOverlay",content:e.createElement("div",{className:"popoverContent"},e.createElement(Ur.Z,{data:(0,Oe.T3)(W,ne).description||G||"",disabled:!0}))},e.createElement("div",{className:"iconWrap valignWrapper mRight5"},e.createElement(O.Z,{icon:"knowledge-message Font18",className:"Hand customPageDesc",onClick:function(){ut(!1),bt(!0,"editIntroVisible")}}))),C&&e.createElement(te.Z,{onPopupVisibleChange:function(On){return bt(On,"popupVisible")},popupVisible:q,action:["click"],popupAlign:{points:["tl","bl"]},popup:e.createElement($c,(0,f.default)({},(0,Ft.pick)(n,["adjustScreen","ids","currentSheet","appPkg"]),{onClick:Rn}))},e.createElement("div",{className:"iconWrap valignWrapper"},e.createElement(O.Z,{className:"Font18 moreOperateIcon",icon:"more_horiz"})))),!z&&e.createElement(e.Fragment,null,w.autoLinkage&&e.createElement(kr.Z,{visible:void 0,trigger:"click",placement:"bottom",overlayClassName:"customPageAutoLinkagePopoverWrap",content:po()},e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u8054\u52A8\u7B5B\u9009")),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap valignWrapper mLeft20 autoLinkageTrigger"},e.createElement(O.Z,{className:"Font22 pointer",icon:"linkage_filter"})))),e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u5237\u65B0")),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap valignWrapper mLeft20",onClick:u},e.createElement(O.Z,{className:"Font20 pointer",icon:"task-later"}))),C&&!(g.isLock||g.permissionType===Ua.lt.RUNNER_ROLE)&&e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u9875\u9762\u914D\u7F6E")),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap valignWrapper mLeft20",onClick:function(){qe(!0)}},e.createElement(O.Z,{className:"Font20 pointer",icon:"tune"}))),!xt&&!ka&&m.appId&&!md.global.Account.isPortal&&w.shareVisible&&e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u5206\u4EAB")),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap valignWrapper mLeft20",onClick:function(){nn(!0)}},e.createElement(O.Z,{className:"Font20 pointer",icon:"share"}))),w.downloadVisible&&(Fn?e.createElement("div",{className:"iconWrap valignWrapper mLeft20"},e.createElement(Xe.Z,{size:"small"})):e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u4FDD\u5B58\u56FE\u7247")),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap valignWrapper mLeft20",onClick:jn},e.createElement(O.Z,{className:"Font20 pointer",icon:"file_download"}))))),!xt&&w.fullScreenVisible&&e.createElement(Pe.Z,{text:e.createElement("span",null,_l("\u5168\u5C4F\u5C55\u793A")),popupPlacement:"bottom"},e.createElement("div",{className:"iconWrap valignWrapper mLeft20",onClick:function(){return h(!0)}},e.createElement(O.Z,{icon:"full_screen",className:"Font20 pointer"})))),e.createElement(Vc.Z,{title:_l("\u81EA\u5B9A\u4E49\u9875\u9762\u8BF4\u660E"),isCharge:C,visible:ue,desc:ot?G||"":(0,Oe.T3)(W,ne).description||G||"",isEditing:ot,setDescIsEditing:ut,onClose:function(){bt(!1,"editIntroVisible")},onSave:function(On){z?Tt(On):pn({desc:On})}}),X&&e.createElement(_c.Z,(0,f.default)({},F,p,{isActive:!0,appItem:o,projectId:L,name:ce,icon:B,workSheetId:ne,onCancel:function(){bt(!1,"editNameVisible")}})),Qe&&e.createElement(Hc.Z,{title:_l("\u5206\u4EAB\u9875\u9762: %0",ce),from:"customPage",isCharge:C,params:{appId:W,sourceId:ne,worksheetId:ne,title:ce},getCopyContent:function(On,$n){return On==="private"?$n:$n+" "+m.appName+"-"+o.workSheetName},onClose:function(){return nn(!1)}}),Cn&&e.createElement(Yc.j,{appId:W,groupId:F.groupId,appItem:o,updateSheetListAppItem:F.updateSheetListAppItem,onCancel:function(){return tn(!1)}}),Ie&&e.createElement(ro,(0,f.default)({},n,{className:"sideAbsolute",onClose:function(){qe(!1);var On=n.id,$n=n.adjustScreen,lt=n.config;Qa.Z.updatePage({appId:On,adjustScreen:$n,config:lt})}})))}var rd=i(8177),od=i.n(rd),id=i(44894),ld=(0,xe.Z)([`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 0 24px;
  z-index: 9;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  .iconWrap {
    padding-right: 24px;
    cursor: pointer;
    .back {
      color: #757575;
      &:hover {
        color: #333;
      }
    }
  }
  .pageName {
    display: flex;
    align-items: center;
    font-size: 17px;
    .name {
      box-sizing: border-box;
      max-width: 240px;
      margin-top: 1px;
      padding: 0 10px;
      border-bottom: 1px dashed #9e9e9e;
      cursor: pointer;
    }
    input {
      border: none;
      font-size: 17px;
      border-bottom: 2px solid #2196f3;
    }
  }
  .displayType {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    li {
      height: 100%;
      line-height: 50px;
      padding: 0 20px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.25s;
      font-size: 22px;
      color: #9e9e9e;
      &.highlight,
      &:hover {
        color: #2196f3;
      }
      &:hover {
        border-color: #2196f3;
      }
    }
  }
  .pageSetting {
    &:hover *{
      color: #2196f3 !important;
    }
  }
  .close {
    background-color: #f5f5f5;
    color: #9e9e9e;
    margin-right: 10px;
    &:hover {
      background-color: #eaeaea;
      color: #9e9e9e;
    }
  }
  .complete {
    width: 80px;
    cursor: pointer;
  }
`],[`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 0 24px;
  z-index: 9;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  .iconWrap {
    padding-right: 24px;
    cursor: pointer;
    .back {
      color: #757575;
      &:hover {
        color: #333;
      }
    }
  }
  .pageName {
    display: flex;
    align-items: center;
    font-size: 17px;
    .name {
      box-sizing: border-box;
      max-width: 240px;
      margin-top: 1px;
      padding: 0 10px;
      border-bottom: 1px dashed #9e9e9e;
      cursor: pointer;
    }
    input {
      border: none;
      font-size: 17px;
      border-bottom: 2px solid #2196f3;
    }
  }
  .displayType {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    li {
      height: 100%;
      line-height: 50px;
      padding: 0 20px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.25s;
      font-size: 22px;
      color: #9e9e9e;
      &.highlight,
      &:hover {
        color: #2196f3;
      }
      &:hover {
        border-color: #2196f3;
      }
    }
  }
  .pageSetting {
    &:hover *{
      color: #2196f3 !important;
    }
  }
  .close {
    background-color: #f5f5f5;
    color: #9e9e9e;
    margin-right: 10px;
    &:hover {
      background-color: #eaeaea;
      color: #9e9e9e;
    }
  }
  .complete {
    width: 80px;
    cursor: pointer;
  }
`]),sd=[{type:"web",icon:"desktop",text:_l("\u684C\u9762\u914D\u7F6E")},{type:"mobile",icon:"mobile_phone",text:_l("\u79FB\u52A8\u914D\u7F6E")}],cd=(0,Ee.ZP)(Ze.Lb)(ld);const dd=function(n){var r=n.appId,o=n.groupId,t=n.pageId,l=n.pageName,a=n.displayType,s=n.currentSheet,p=n.apk,v=p===void 0?{}:p,c=n.saveLoading,h=c===void 0?!1:c,u=n.cancelModified,b=u===void 0?N().noop:u,m=n.modified,g=n.updatePageInfo,x=g===void 0?N().noop:g,F=n.onBack,C=F===void 0?N().noop:F,y=n.onSave,S=y===void 0?N().noop:y,w=n.switchType,L=w===void 0?N().noop:w,W=(0,e.useState)(!1),B=(0,H.Z)(W,2),Y=B[0],z=B[1],K=(0,e.useState)(l),ne=(0,H.Z)(K,2),fe=ne[0],J=ne[1],P=(0,e.useState)(!1),j=(0,H.Z)(P,2),G=j[0],q=j[1],X=(0,e.useRef)(l),ue=X.current,ce=function(){S();var ke=fe.trim();ue!==ke&&Pt.Z.editWorkSheetInfoForApp({appId:r,appSectionId:s.parentGroupId||o,workSheetId:t,workSheetName:ke}).then(function($e){if($e){x({pageName:ke});var Qe=k.Z.getState().appPkg.currentPcNaviStyle;if([1,3].includes(Qe)){var nn=(0,cr.xy)(o);nn.dispatch((0,Te.updateSheetListAppItem)(t,{workSheetName:ke}))}else n.updateSheetListAppItem(t,{workSheetName:ke})}})},he=function(){if(!m){C();return}ia.Z.confirm({onlyClose:!0,className:"customButtonConfirm",title:_l("\u60A8\u662F\u5426\u8981\u4FDD\u5B58\u672C\u6B21\u66F4\u6539"),description:_l("\u5F53\u524D\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539\uFF0C\u60A8\u5728\u79BB\u5F00\u9875\u9762\u524D\u662F\u5426\u8981\u4FDD\u5B58\u8FD9\u4E9B\u66F4\u6539"),okText:_l("\u662F\uFF0C\u4FDD\u5B58\u4FEE\u6539"),cancelText:_l("\u5426\uFF0C\u653E\u5F03\u4FDD\u5B58"),onOk:ce,onCancel:b})};return e.createElement(cd,null,v.appId&&e.createElement("div",{className:"iconWrap",onClick:he},e.createElement("i",{className:"back icon-backspace Font24"})),e.createElement("div",{className:"pageName"},e.createElement("span",{className:"Bold mRight10"},_l("\u7F16\u8F91\u81EA\u5B9A\u4E49\u9875\u9762:  ")),Y?e.createElement("input",{autoFocus:!0,value:fe,onChange:function(ke){var $e=ke.target.value;J($e),x({modified:!0})},onBlur:function(){fe||J(ue),z(!1)}}):e.createElement("div",{className:"name overflow_ellipsis",onClick:function(){return z(!0)}},fe)),e.createElement("ul",{className:"displayType"},sd.map(function(Se){var ke=Se.type,$e=Se.icon,Qe=Se.text;return e.createElement("li",{"data-tip":Qe,className:E()({highlight:ke===a}),key:ke,onClick:function(){return L(ke)}},e.createElement("i",{className:"icon-"+$e}))})),e.createElement("div",{className:"flex"}),e.createElement("div",{className:"flexRow alignItemsCenter pointer mRight20 pageSetting",onClick:function(){return q(!0)}},e.createElement(O.Z,{className:"Font20 Gray_9e",icon:"tune"}),e.createElement("div",{className:"mLeft5 Font13"},_l("\u9875\u9762\u914D\u7F6E"))),v.appId&&e.createElement(V.ZP,{type:"link",className:"close",onClick:he},_l("\u5173\u95ED")),e.createElement(V.ZP,{onClick:ce,loading:h},_l("\u4FDD\u5B58")),G&&e.createElement(ro,(0,f.default)({},n,{onClose:function(){return q(!1)}})))};var ud=(0,xe.Z)([`
  box-sizing: border-box;
  width: 240px;
  background-color: #fff;
  padding: 16px;
  .emptyHint {
    margin-top: 14px;
    padding: 12px 14px;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    color: #9e9e9e;
    font-size: 12px;
    text-align: center;
    p {
      margin: 16px 0 0 0;
    }
    i {
      font-size: 32px;
    }
  }
  ul {
    li {
      display: flex;
      align-items: center;
      line-height: 36px;
      height: 36px;
      padding: 0 10px;
      background-color: #f5f5f5;
      transition: background-color 0.25s;
      border-radius: 3px;
      margin-top: 8px;
      cursor: pointer;
      i {
        font-size: 20px;
      }
      .name {
        flex: 1;
        padding-left: 12px;
      }
      .add {
        visibility: hidden;
      }
      &:hover {
        background-color: #f0f0f0;
        .add {
          visibility: visible;
        }
      }
    }
  }
`],[`
  box-sizing: border-box;
  width: 240px;
  background-color: #fff;
  padding: 16px;
  .emptyHint {
    margin-top: 14px;
    padding: 12px 14px;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    color: #9e9e9e;
    font-size: 12px;
    text-align: center;
    p {
      margin: 16px 0 0 0;
    }
    i {
      font-size: 32px;
    }
  }
  ul {
    li {
      display: flex;
      align-items: center;
      line-height: 36px;
      height: 36px;
      padding: 0 10px;
      background-color: #f5f5f5;
      transition: background-color 0.25s;
      border-radius: 3px;
      margin-top: 8px;
      cursor: pointer;
      i {
        font-size: 20px;
      }
      .name {
        flex: 1;
        padding-left: 12px;
      }
      .add {
        visibility: hidden;
      }
      &:hover {
        background-color: #f0f0f0;
        .add {
          visibility: visible;
        }
      }
    }
  }
`]),pd=(0,xe.Z)([`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;

  .mobileWrap {
    box-sizing: border-box;
    width: 380px;
    height: 100%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  }
  .mobileBox {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
  }
  .mobileContent {
    height: calc(100% - 10px);
    margin-top: 5px;
    overflow: auto;
  }
`],[`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;

  .mobileWrap {
    box-sizing: border-box;
    width: 380px;
    height: 100%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  }
  .mobileBox {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
  }
  .mobileContent {
    height: calc(100% - 10px);
    margin-top: 5px;
    overflow: auto;
  }
`]),fd=Ee.ZP.div(ud),gd=Ee.ZP.div(pd),vd=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=[],t=[];return r.forEach(function(l){var a=l.mobile,s=a===void 0?{}:a;s.visible?t.push(l):o.push(l)}),{hidedComponents:o,visibleComponents:t}};function hd(n){var r=n.components,o=n.updateWidgetVisible,t=vd((0,Ze.k0)(r)),l=t.hidedComponents,a=t.visibleComponents,s=(0,Ze.gq)(r);return e.createElement(e.Fragment,null,e.createElement(fd,null,e.createElement("div",{className:"title Bold Gray_75"},_l("\u9690\u85CF\u7EC4\u4EF6")),l.length>0?e.createElement("ul",null,l.map(function(p,v){return!p.mobile.visible&&e.createElement("li",{onClick:function(){return o({widget:p,layoutType:"mobile"})}},e.createElement("i",{className:"icon-"+(0,Ze.hB)(p.type)+" Gray_75"}),e.createElement("div",{className:"name overflow_ellipsis"},(0,Ze.lT)(p)),e.createElement("i",{className:"icon-add add"}))})):e.createElement("div",{className:"emptyHint"},e.createElement("i",{className:"icon-visibility_off Gray_9e"}),e.createElement("p",null,_l("\u70B9\u51FB\u53F3\u4FA7\u9884\u89C8\u533A\u7EC4\u4EF6\u4E0A\u7684\u9690\u85CF\u6309\u94AE\uFF0C\u9690\u85CF\u7684\u7EC4\u4EF6\u5728\u79FB\u52A8\u7AEF\u4E0D\u663E\u793A")))),e.createElement(gd,null,e.createElement("div",{className:"mobileWrap"},e.createElement("div",{className:"mobileBox Relative"},e.createElement("div",{className:"mobileContent"},e.createElement(eo,(0,f.default)({},n,{layoutType:"mobile",components:a}))),s&&e.createElement(Sr,{editable:!0,widget:s,delWidget:n.delWidget})))))}var oo,io,Qd,Xd,Xa,Pr,lo,bd=(0,xe.Z)([`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  .customPageContentWrap {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding-top: 50px;
  }
  .react-grid-item > .react-resizable-handle::after {
    width: 8px;
    height: 8px;
  }
`],[`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  .customPageContentWrap {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding-top: 50px;
  }
  .react-grid-item > .react-resizable-handle::after {
    width: 8px;
    height: 8px;
  }
`]);function xd(n,r,o,t,l){var a={};return Object.keys(t).forEach(function(s){a[s]=t[s]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=o.slice().reverse().reduce(function(s,p){return p(n,r,s)||s},a),l&&a.initializer!==void 0&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),a.initializer===void 0&&(Object.defineProperty(n,r,a),a=null),a}var yd={web:no,mobile:hd},Cd=Ee.ZP.div(bd),wd=function(r){var o=r.customPage,t=r.sheet,l=r.appPkg;return(0,f.default)({},o,t.base,{appPkg:l})},Ed=function(r){return(0,Ae.DE)((0,f.default)({},_t,{updateSheetListAppItem:Te.updateSheetListAppItem}),r)},Id=(oo=(0,ze.$j)(wd,Ed),oo(io=(Xa=(lo=Pr=function(n){(0,je.default)(r,n);function r(){var o,t,l,a;(0,be.default)(this,r);for(var s=arguments.length,p=Array(s),v=0;v<s;v++)p[v]=arguments[v];return a=(t=(l=(0,Fe.default)(this,(o=r.__proto__||A()(r)).call.apply(o,[this].concat(p))),l),l.state={displayType:"web"},l.getPageData=function(){var c=l.props,h=c.ids,u=c.updatePageInfo,b=c.updateLoading,m=h.worksheetId;b(!0),Qa.Z.getPage({appId:m}).then(function(g){var x=g.components,F=g.apk,C=g.version,y=g.adjustScreen,S=g.config;x=(0,Ze.vM)(x),u({components:x,pageId:m,version:C,adjustScreen:y,config:S||Nr,apk:F||{},visible:!0,filterComponents:x.filter(function(w){return w.value&&w.type===Ze.GV.filter})}),l.$originComponents=x,l.$originAdjustScreen=y,l.$originConfig=S}).finally(function(){return b(!1)})},l.handleBack=function(){var c=l.props,h=c.updateModified,u=c.updateEditPageVisible;u(!1),h(!1)},l.getCreateRecordBtns=function(c){var h=c.filter(function(u){return u.type===Ze.GV.button});return N().flatten(h.map(function(u){var b=u.button.buttonList.filter(function(m){return m.action===1&&(!N().isEmpty(N().get(m,["config","temporaryWriteControls"]))||N().get(m,["config","isEmptyWriteControls"]))});return b}))},l.getFilterBtns=function(c){var h=c.filter(function(u){return u.type===Ze.GV.button});return N().flatten(h.map(function(u){var b=u.button.buttonList.filter(function(m){return m.action===5&&!N().isEmpty(N().get(m,["config","filterConditions"]))});return b}))},l.getAlreadyDeleteBtn=function(c){var h=function(x){var F=x.filter(function(y){return y.type===Ze.GV.button}),C=F.map(function(y){var S=y.button.buttonList.filter(function(w){return w.action===1&&w.btnId});return S});return N().flatten(C)},u=h(l.$originComponents),b=h(c),m=u.filter(function(g){return!N().find(b,{btnId:g.btnId})});return m},l.removeWorksheetBtn=function(){var c=l.props,h=c.ids,u=c.components,b=l.getAlreadyDeleteBtn(u),m=b.map(function(g){return Tn.Z.optionWorksheetBtn({appId:h.appId,optionType:9,btnId:g.btnId,worksheetId:g.value,viewId:""})});Mt().all(m).then(function(g){})},l.getAlreadyDeleteFilterBtn=function(c){var h=function(x){var F=x.filter(function(y){return y.type===Ze.GV.button}),C=F.map(function(y){var S=y.button.buttonList.filter(function(w){return w.action===5&&w.filterId});return S});return N().flatten(C)},u=h(l.$originComponents),b=h(c),m=u.filter(function(g){return!N().find(b,{filterId:g.filterId})});return m},l.removeFilterId=function(){var c=l.props,h=c.ids,u=c.components,b=l.getAlreadyDeleteFilterBtn(u),m=b.map(function(g){return Tn.Z.deleteWorksheetFilter({appId:h.appId,filterId:g.filterId})});Mt().all(m).then(function(g){})},l.fillBtnData=function(c){return new(Mt())(function(h,u){var b=l.getCreateRecordBtns(c);if(b.length){var m=b.map(function(g){var x=g.config,F=x.temporaryWriteControls,C=x.controls,y=F.map(function(S){var w=N().find(C,function(L){return L.controlId===S.controlId})||{};return(0,f.default)({},S,{defsource:N().get((0,Dr.Hi)([(0,f.default)({},w,{advancedSetting:{defsource:S.defsource}})])[0],["advancedSetting","defsource"])})});return Tn.Z.saveWorksheetBtn({showType:9,btnId:g.btnId||void 0,worksheetId:g.value,writeControls:y})});Mt().all(m).then(function(g){var x=b.map(function(C,y){return{id:C.id,btnId:g[y]}}),F=c.map(function(C){if(C.type===Ze.GV.button){var y=C.button.buttonList;return(0,f.default)({},C,{button:(0,f.default)({},C.button,{buttonList:y.map(function(S){var w=S.id,L=S.config,W=N().find(x,{id:w});if(W){var B=W.btnId;return(0,f.default)({},S,{config:(0,f.default)({},L,{temporaryWriteControls:void 0,controls:void 0,isEmptyWriteControls:void 0}),btnId:B})}else return(0,f.default)({},S,{config:(0,f.default)({},L,{temporaryWriteControls:void 0,controls:void 0,isEmptyWriteControls:void 0})})})})})}else return C});h(F)})}else h(c)})},l.fillFilterData=function(c){var h=l.props.ids;return new(Mt())(function(u,b){var m=l.getFilterBtns(c);if(m.length){var g=m.map(function(x){var F=x.value,C=x.filterId,y=x.config,S=y.filterConditions;return Tn.Z.saveWorksheetFilter({appId:h.appId,filterId:C||void 0,worksheetId:F,module:2,items:S.map(wr.QZ),name:"",type:""})});Mt().all(g).then(function(x){var F=m.map(function(y,S){return{id:y.id,filterId:x[S].filterId}}),C=c.map(function(y){if(y.type===Ze.GV.button){var S=y.button.buttonList;return(0,f.default)({},y,{button:(0,f.default)({},y.button,{buttonList:S.map(function(w){var L=w.id,W=w.config,B=N().find(F,{id:L});if(B){var Y=B.filterId;return(0,f.default)({},w,{config:(0,f.default)({},W,{filterConditions:void 0}),filterId:Y})}else return w})})})}else return y});u(C)})}else u(c)})},l.fillFilterComponent=function(c){return new(Mt())(function(h,u){var b=l.props.ids,m=c.filter(function(x){return x.type===Ze.GV.filter}).filter(function(x){return x.filter});if(m.length){var g=m.map(function(x){var F=x.filter,C=F===void 0?{}:F,y=C.filters,S=y===void 0?[]:y;return Tn.Z.saveFiltersGroup((0,f.default)({},C,{appId:b.appId,pageId:b.worksheetId,filters:S.map(function(w){var L=(0,Ze.Wh)(w);return(0,f.default)({},w,{advancedSetting:(0,f.default)({},w.advancedSetting,{navfilters:L,showNavfilters:void 0}),values:(0,Ia.M)(w.dataType,w.values),control:void 0})})}))});Mt().all(g).then(function(x){var F=m.map(function(y,S){return{id:y.id||y.uuid,filtersGroupId:x[S].filtersGroupId}}),C=c.map(function(y){return y.type===Ze.GV.filter&&!y.value?(0,f.default)({},y,{filter:void 0,value:N().find(F,{id:y.id||y.uuid}).filtersGroupId}):y});h(C)})}else h(c)})},l.removeFiltersGroup=function(){var c=l.props,h=c.ids,u=c.components,b=l.$originComponents.filter(function(y){return y.type===Ze.GV.filter&&y.value}),m=function(S){return S.filter(function(w){return w.type===Ze.GV.filter&&w.value})},g=m(l.$originComponents),x=m(u),F=g.filter(function(y){return!N().find(x,{value:y.value})}),C=F.map(function(y){return Tn.Z.deleteFiltersGroupByIds({appId:h.appId,filtersGroupIds:[y.value]})});Mt().all(C).then(function(y){})},l.dealComponents=function(c){return c.map(function(h){return tt()(h,{web:{title:{$apply:function(b){return b.trim()}}},mobile:{title:{$apply:function(b){return b.trim()}}},type:{$apply:function(b){return typeof b=="number"?b:Ze.GV[b]}}})})},l.dealComponentTemporaryData=function(c){return c.map(function(h){var u=N().omit(h,"uuid");if(u.type===Ze.GV.button){var b=u.button.buttonList;return(0,f.default)({},u,{button:(0,f.default)({},u.button,{buttonList:b.map(function(g){var x=g.config;return(0,f.default)({},g,{config:(0,f.default)({},x,{temporaryWriteControls:void 0,controls:void 0,isEmptyWriteControls:void 0})})})})})}if(u.type===Ze.GV.analysis&&u.reportType===la.f0.PivotTable){var m=sessionStorage.getItem("pivotTableColumnWidthConfig-"+u.value)||void 0;return(0,f.default)({},u,{config:(0,f.default)({},u.config,{columnWidthConfig:m})})}return u})},l.cancelModified=function(){var c=l.props.updatePageInfo;c({components:l.$originComponents,adjustScreen:l.$originAdjustScreen,config:l.$originConfig}),l.handleBack()},l.switchType=function(c){var h=l.props,u=h.updateComponents,b=h.components;l.setState({displayType:c}),l.props.updatePageInfo({loadFilterComponentCount:0});var m=(0,Ze.CP)(b);m&&u(m)},t),(0,Fe.default)(l,a)}return(0,We.default)(r,[{key:"componentDidMount",value:function(){this.props.updatePageInfo({loadFilterComponentCount:0}),this.getPageData()}},{key:"componentWillUnmount",value:function(){this.props.updatePageInfo({loadFilterComponentCount:0})}},{key:"handleSave",value:function(){var o=(0,Da.Z)(Bt().mark(function l(){var a=this,s,p,v,c,h,u,b,m,g,x;return Bt().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return s=this.props,p=s.version,v=s.ids,c=s.adjustScreen,h=s.config,u=s.components,b=s.updatePageInfo,m=s.updateSaveLoading,g=v.worksheetId,m(!0),x=this.dealComponents(u),C.next=6,this.fillBtnData(x);case 6:return x=C.sent,C.next=9,this.fillFilterData(x);case 9:return x=C.sent,C.next=12,this.fillFilterComponent(x);case 12:x=C.sent,x=this.dealComponentTemporaryData(x),Qa.Z.savePage({appId:g,version:p,components:x,adjustScreen:c,config:h}).then(function(y){var S=y.appId,w=y.version,L=y.components,W=y.apk;N().isNumber(w)?(a.removeWorksheetBtn(),a.removeFilterId(),a.removeFiltersGroup(),a.$originComponents=L,a.$originAdjustScreen=c,a.$originConfig=h,b({components:L,pageId:S,version:w,modified:!1,filterComponents:L.filter(function(B){return B.value&&B.type===Ze.GV.filter}),apk:W}),alert(_l("\u4FDD\u5B58\u6210\u529F"),1)):alert(_l("\u4FDD\u5B58\u5931\u8D25"),2)}).catch(function(){alert(_l("\u4FDD\u5B58\u5931\u8D25"),2)}).finally(function(){return m(!1)});case 15:case"end":return C.stop()}},l,this)}));function t(){return o.apply(this,arguments)}return t}()},{key:"render",value:function(){var t=this.props,l=t.loading,a=t.name,s=(0,Ln.Z)(t,["loading","name"]),p=this.state.displayType,v=yd[p];return e.createElement(Cd,{className:"customPageWrap"},e.createElement(dd,(0,f.default)({},s,{pageName:a,displayType:p,cancelModified:this.cancelModified,switchType:this.switchType,onBack:this.handleBack,onSave:this.handleSave})),e.createElement("div",{className:"customPageContentWrap"},l?e.createElement(Xe.Z,{style:{marginTop:"60px"}}):e.createElement(v,s)))}}]),r}(e.Component),Pr.propTypes={},Pr.defaultProps={},lo),xd(Xa.prototype,"handleSave",[id.Nj],od()(Xa.prototype,"handleSave"),Xa.prototype),Xa))||io),Sd=i(49611),kd=i.n(Sd),Nd=(0,xe.Z)([`
  flex: 1;
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 24px 0 10px;
    border-radius: 3px 3px 0 0;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
    z-index: 2;
    .customPageDesc {
      padding: 0 4px;
    }
    .nameWrap {
      display: flex;
      align-items: center;
      cursor: pointer;
      min-width: 0;
      .pageName {
        margin: 0 6px;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .hideSide {
      vertical-align: top;
    }
    .iconWrap {
      color: #757575a1;
      &:hover {
        color: #2196f3;
      }
    }
    .svgWrap {
      width: 26px;
      height: 26px;
      border-radius: 4px;
      justify-content: center;
      line-height: initial;
    }
    .fullRotate {
      transform: rotate(90deg);
      display: inline-block;
    }
    .hoverGray {
      width: 24px;
      height: 24px;
      display: inline-block;
      text-align: center;
      line-height: 24px;
      border-radius: 3px;
    }
    .hoverGray:hover {
      // background: #f5f5f5;
    }
  }
  .content {
    min-height: 0;
    width: 100%;
    flex: 1;
  }
  .customPageContent {
    padding: 0 8px 0px 8px;
    &.isFullscreen {
      padding-top: 0;
    }
  }
  .selectIconWrap {
    top: 40px;
    left: 10px;
  }
  .darkTheme {
    .pageName,
    .moreOperateIcon,
    .iconWrap .icon,
    .componentTitle,
    .createSource a,
    .customPageDesc {
      color: rgba(255, 255, 255, 1) !important;
    }
    .createSource {
      color: rgba(255, 255, 255, 0.8) !important;
    }
  }
`],[`
  flex: 1;
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 24px 0 10px;
    border-radius: 3px 3px 0 0;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
    z-index: 2;
    .customPageDesc {
      padding: 0 4px;
    }
    .nameWrap {
      display: flex;
      align-items: center;
      cursor: pointer;
      min-width: 0;
      .pageName {
        margin: 0 6px;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .hideSide {
      vertical-align: top;
    }
    .iconWrap {
      color: #757575a1;
      &:hover {
        color: #2196f3;
      }
    }
    .svgWrap {
      width: 26px;
      height: 26px;
      border-radius: 4px;
      justify-content: center;
      line-height: initial;
    }
    .fullRotate {
      transform: rotate(90deg);
      display: inline-block;
    }
    .hoverGray {
      width: 24px;
      height: 24px;
      display: inline-block;
      text-align: center;
      line-height: 24px;
      border-radius: 3px;
    }
    .hoverGray:hover {
      // background: #f5f5f5;
    }
  }
  .content {
    min-height: 0;
    width: 100%;
    flex: 1;
  }
  .customPageContent {
    padding: 0 8px 0px 8px;
    &.isFullscreen {
      padding-top: 0;
    }
  }
  .selectIconWrap {
    top: 40px;
    left: 10px;
  }
  .darkTheme {
    .pageName,
    .moreOperateIcon,
    .iconWrap .icon,
    .componentTitle,
    .createSource a,
    .customPageDesc {
      color: rgba(255, 255, 255, 1) !important;
    }
    .createSource {
      color: rgba(255, 255, 255, 0.8) !important;
    }
  }
`]),Pd=Ee.ZP.div(Nd);function Td(n){var r=n.appPkg,o=n.loading,t=n.visible,l=n.activeSheetId,a=n.adjustScreen,s=n.config,p=n.updatePageInfo,v=n.updateLoading,c=n.apk,h=n.id,u=n.groupId,b=n.className,m=n.ids,g=m===void 0?{}:m,x=h,F=(0,Oe.T3)(r.id,r.id).name||n.appName||c.appName||"",C=(0,e.useRef)(document.body),y=Et(!1),S=(0,H.Z)(y,2),w=S[0],L=S[1],W=function(){document.body.classList.add("customPageFullscreen"),L(!0)},B=function(){document.body.classList.remove("customPageFullscreen"),L(!1)},Y=Jt(C,w,{onClose:B}),z=(0,Oe.Q9)(),K=[1,3].includes(r.currentPcNaviStyle)?(0,cr.MR)(u):n.sheetList,ne=(0,wa.D4)(h,K)||n.currentSheet||{},fe=(0,Oe.T3)(r.id,x).name||n.pageName||ne.workSheetName||"",J=ne.urlTemplate,P=ne.configuration;(0,e.useEffect)(function(){h&&Y&&B()},[h]),(0,e.useEffect)(function(){J?(p({config:{fullScreenVisible:!0}}),v(!1)):(v(!0),x&&j())},[]);var j=function(){Qa.Z.getPage({appId:x}).then(function(ue){var ce=ue.components,he=ue.desc,Se=ue.apk,ke=ue.adjustScreen,$e=ue.name,Qe=ue.config,nn=ue.version,kn=z?ce.filter(function(In){return In.mobile.visible}):ce;p({components:kn,desc:he,adjustScreen:ke,pageId:x,apk:Se||{},config:Qe||Nr,pageName:$e,filterComponents:kn.filter(function(In){return In.value&&In.type===Ze.GV.filter}),version:nn})}).finally(function(){return v(!1)})},G=function(){p({loadFilterComponentCount:0}),v(!0),j()},q=function(){if(J){var ue=(0,ln.Pz)(J),ce=[];return ue.map(function(he){if(he.staticValue)ce.push(he.staticValue);else{var Se=(0,Ve.fS)({projectId:r.projectId,appId:g.appId,groupId:g.groupId,worksheetId:g.worksheetId},he.cid);ce.push(encodeURIComponent(Se))}}),e.createElement("div",{className:"customPageContent h100 pAll0"},e.createElement("iframe",{className:"w100 h100",style:{border:"none"},src:ce.join("")}))}return t?null:o?e.createElement(Xe.Z,{style:{marginTop:"60px"}}):e.createElement(no,{layoutType:z?"mobile":"web",adjustScreen:a,config:s,appPkg:r,className:E()("customPageContent",{isFullscreen:Y}),from:"display",ids:g,isFullscreen:Y,editable:!1,emptyPlaceholder:e.createElement("div",{className:"empty"},e.createElement("div",{className:"iconWrap"},e.createElement("i",{className:"icon-custom_widgets"})),e.createElement("p",{className:"mTop16"},_l("\u6CA1\u6709\u5185\u5BB9")))})};return e.createElement(e.Fragment,null,e.createElement(Pd,{className:E()("CustomPageContentWrap flexColumn",b)},(F||fe)&&e.createElement(kd(),{title:fe+" - "+F}),!o&&e.createElement(ad,(0,f.default)({},n,{currentSheet:ne,toggle:W,resetPage:G})),e.createElement("div",{className:"content"},q())),t&&!J&&e.createElement(Id,{name:fe,ids:g,currentSheet:ne}))}const Fd=(0,ze.$j)(function(n){var r=n.appPkg,o=n.customPage,t=n.sheet,l=t.isCharge,a=t.base,s=n.sheetList,p=s.data,v=s.appSectionDetail;return(0,f.default)({},(0,Ft.pick)(o,["loading","visible","desc","adjustScreen","apk","pageName","flag","config","version","linkageFiltersGroup"]),{isCharge:l,appName:r.name,sheetList:p,appPkg:r,activeSheetId:a.workSheetId,groupId:a.groupId})},function(n){return(0,Ae.DE)({updatePageInfo:_t.updatePageInfo,updateLoading:_t.updateLoading,copyCustomPage:Te.copyCustomPage,deleteSheet:Te.deleteSheet,updateSheetList:Te.updateSheetList,updateSheetListAppItem:Te.updateSheetListAppItem,updateEditPageVisible:_t.updateEditPageVisible,deleteLinkageFiltersGroup:_t.deleteLinkageFiltersGroup},n)})(Td);var Wd=i(18807),so,co,Ka=null,uo=function(r){var o=r.appId,t=r.id,l=r.type,a=r.params,s=r.sheetListLoading,p=r.isCharge,v=r.sheetList,c=r.appPkg,h=c.appGroups,u=h===void 0?[]:h,b=c.currentPcNaviStyle,m=(0,e.useRef)({}),g=(0,e.useState)({}),x=(0,H.Z)(g,2),F=x[0],C=x[1],y=(0,e.useState)(!0),S=(0,H.Z)(y,2),w=S[0],L=S[1];if((0,e.useEffect)(function(){L(!0),N().isUndefined(l)?t&&(Ka&&Ka.abort&&Ka.abort(),Ka=Pn.Z.getPageInfo({appId:o,id:t,sectionId:a.groupId}),Ka.then(function(z){var K=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+o))||{};if(![1,4].includes(z.resultCode)||K.lastWorksheetId===t&&z.resultCode===4){(0,wa.oS)(o,a.groupId),Pn.Z.getAppFirstInfo({appId:o,appSectionId:a.groupId}).then(function(ne){(0,ae.T8)("/app/"+o+"/"+ne.appSectionId+"/"+(ne.workSheetId||""))});return}C(z),L(!1)})):setTimeout(function(){C({wsType:l,resultCode:1}),L(!1)},0)},[t,a.groupId]),(0,e.useEffect)(function(){if(!t&&a.groupId){var z=(0,wa.h2)(v,p);z&&(0,ae.T8)("/app/"+o+"/"+a.groupId+"/"+z)}},[v]),(0,e.useEffect)(function(){!t&&!s&&(C({wsType:l,resultCode:-2e4}),L(!1))},[t,s]),t?w:s)return e.createElement(Xe.Z,{size:"big",className:"mTop32"});if(F.resultCode!==1){if(F.resultCode===-2e4)return e.createElement(Q,{appId:o,groupId:a.groupId});var W=u.map(function(z){var K=z.appSectionId,ne=z.workSheetInfo,fe=ne===void 0?[]:ne,J=z.childSections,P=J===void 0?[]:J,j=P.map(function(G){var q=G.parentId;return G.workSheetInfo.map(function(X){return(0,f.default)({},X,{appSectionId:q})})});return fe.map(function(G){return(0,f.default)({},G,{appSectionId:K})}).concat(N().flatten(j))}),B=N().find(N().flatten(W),{workSheetId:t});return e.createElement(Wd.default,{type:"sheet",resultCode:B&&B.appSectionId!==a.groupId?-2e4:F.resultCode||-1e4})}if(F.wsType){var Y=b===2&&F.urlTemplate?{urlTemplate:F.urlTemplate,configuration:F.configuration,workSheetName:F.name}:void 0;return t?e.createElement(Fd,{currentSheet:Y,ids:(0,f.default)({},a,{appId:o}),id:t}):null}else return e.createElement(En,{flag:Ne.parse((location.search||"").slice(1)).flag,setLoadRequest:function(K){return m.current.loadRequest=K},abortPrevWorksheetInfoRequest:function(){N().isFunction(N().get(m,"current.loadRequest.abort"))&&m.current.loadRequest.abort()}})},Zd=(co=so=function(n){(0,je.default)(r,n);function r(o){return(0,be.default)(this,r),(0,Fe.default)(this,(r.__proto__||A()(r)).call(this,o))}return(0,We.default)(r,[{key:"componentDidMount",value:function(){var t=this.props,l=t.appPkg,a=t.match,s=t.updateBase;$(document.body).addClass("fixedScreen"),window.isPublicApp&&$(document.body).addClass("isPublicApp");var p=this.getValidedWorksheetId(this.props),v=a.params,c=v.appId,h=v.groupId,u=v.viewId;md.global.Account.isPortal&&(c=md.global.Account.appId),s({appId:c,viewId:u,groupId:h,worksheetId:p,chartId:new URL(location.href).searchParams.get("chartId")}),this.setCache(this.props.match.params),document.body.style.overscrollBehaviorX="none"}},{key:"componentWillReceiveProps",value:function(t){var l=t.updateBase,a=t.worksheetId,s=t.updateWorksheetLoading,p=t.updateSheetListLoading;if(!/\/app\/[\w-]+$/.test(location.pathname)){var v=this.getValidedWorksheetId(t),c=t.match.params,h=c.appId,u=c.groupId,b=c.viewId;(h!==this.props.match.params.appId||u!==this.props.match.params.groupId||t.match.params.worksheetId!==this.props.match.params.worksheetId)&&s(!0),(h!==this.props.match.params.appId||b!==this.props.match.params.viewId||u!==this.props.match.params.groupId||v!==a)&&(md.global.Account.isPortal&&(h=md.global.Account.appId),l({appId:h,viewId:b,groupId:u,worksheetId:v})),this.setCache(t.match.params),(N().get(this.props,"appPkg.iconColor")!==N().get(t,"appPkg.iconColor")||!this.appThemeColorStyle&&N().get(t,"appPkg.iconColor"))&&this.changeAppThemeColor(N().get(t,"appPkg.iconColor"))}}},{key:"shouldComponentUpdate",value:function(t){return t.sheetListLoading!==this.props.sheetListLoading||!/\/app\/[\w-]+$/.test(location.pathname)}},{key:"componentWillUnmount",value:function(){var t=this.props.updateWorksheetLoading;this.props.updateSheetListLoading(!0),$(document.body).removeClass("fixedScreen"),document.body.style.overscrollBehaviorX=null,this.removeAppThemeColor(),t(!0)}},{key:"changeAppThemeColor",value:function(t){if(t){this.removeAppThemeColor();var l=document.createElement("style");l.innerHTML=":root { --app-primary-color: "+t+"; --app-primary-hover-color: "+(0,oe.default)(t).darken(5).toString()+"; }",document.head.appendChild(l),this.appThemeColorStyle=l}else!t&&this.appThemeColorStyle&&this.removeAppThemeColor()}},{key:"removeAppThemeColor",value:function(){this.appThemeColorStyle&&document.head.removeChild(this.appThemeColorStyle)}},{key:"setCache",value:function(t){var l=this,a=t.appId,s=t.groupId,p=t.worksheetId,v=t.viewId;md.global.Account.isPortal&&(a=md.global.Account.appId);var c=JSON.parse(localStorage.getItem("mdAppCache_"+md.global.Account.accountId+"_"+a));if(!p){this.props.match.params.worksheetId&&c&&(c.worksheets=c.worksheets||[],N().remove(c.worksheets,function(h){return h.groupId===s&&h.worksheetId===l.props.match.params.worksheetId}),c.lastWorksheetId="",c.lastViewId="",safeLocalStorageSetItem("mdAppCache_"+md.global.Account.accountId+"_"+a,ie()(c)));return}c?(c.worksheets=c.worksheets||[],N().remove(c.worksheets,function(h){return h.groupId===s&&h.worksheetId===p}),c.worksheets.push({groupId:s,worksheetId:p,viewId:v})):c={worksheets:[{groupId:s,worksheetId:p,viewId:v}]},c.lastGroupId=s,c.lastWorksheetId=p,c.lastViewId=v,safeLocalStorageSetItem("mdAppCache_"+md.global.Account.accountId+"_"+a,ie()(c))}},{key:"getValidedWorksheetId",value:function(t){var l=t||this.props,a=l.match,s=void 0;return a.params.worksheetId&&(s=a.params.worksheetId),s}},{key:"render",value:function(){var t=this.props,l=t.visible,a=t.sheetList,s=a===void 0?[]:a,p=t.pageId,v=t.match,c=t.appPkg,h=t.isCharge,u=t.sheetListLoading,b=c.projectId,m=c.currentPcNaviStyle,g=v.params,x=g.appId,F=g.groupId,C=g.worksheetId;md.global.Account.isPortal&&(x=md.global.Account.appId);var y=(0,wa.D4)(C,s)||{};return e.createElement(_e.Z,{projectId:b},e.createElement(fn.Z,{filter:function(w){return N().includes(["e","E"],w.key)},fn:function(w){if(!document.querySelector(".mdModalWrap")&&(window.isMacOs?w.metaKey:w.shiftKey)&&w.keyCode===69){var L=document.querySelector(".icon.fullRotate");L&&L.click()}}}),e.createElement("div",{className:"worksheet flexRow"},m===0&&e.createElement(we,{appId:x,projectId:b,groupId:F,worksheetId:C,appPkg:c,isCharge:h}),m===2?C?e.createElement(uo,{appId:x,id:C,type:y.type,params:v.params,sheetListLoading:u,isCharge:h,sheetList:s,appPkg:c}):e.createElement(Hn,{appId:x,projectId:b,groupId:F,appPkg:c,isCharge:h}):e.createElement(uo,{appId:x,id:C,type:y.type,params:v.params,sheetListLoading:u,isCharge:h,sheetList:s,appPkg:c})))}}]),r}(e.Component),so.propTypes={sheetList:Ye().arrayOf(Ye().shape({})),sheetListLoading:Ye().bool},co);const Rd=(0,Re.Z)((0,ze.$j)(function(n){return{sheetListLoading:n.sheetList.loading,sheetList:[1,3].includes(n.appPkg.currentPcNaviStyle)?n.sheetList.appSectionDetail:n.sheetList.data,worksheetId:n.sheet.base.worksheetId,isCharge:n.sheet.isCharge,appPkg:n.appPkg}},function(n){return(0,Ae.DE)({updateBase:ct.updateBase,updateWorksheetLoading:ct.updateWorksheetLoading,updateSheetListLoading:Te.updateSheetListLoading},n)})((0,de.Z)(Zd)))}}]);
