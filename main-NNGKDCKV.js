import{a as z,b as Tt,c as X,d as At}from"./chunk-YPSYJ6KF.js";import{a as He}from"./chunk-VRMBXJZV.js";import{$ as y,Aa as xt,B as b,C as D,Ca as B,D as v,Da as C,Ea as Y,F as r,Fa as N,Ga as De,H as F,Ha as Oe,I as L,Ia as wt,J as Ht,Ja as Et,K as we,Ka as Re,L as ot,La as Mt,M as w,Ma as k,Na as q,Oa as m,P as h,Pa as Ne,R as Ee,U as _,Ua as U,V as ht,Va as H,W as Me,X as Ce,Xa as Se,Y as ke,a as S,ab as A,ba as gt,bb as Q,ca as vt,d as ue,da as it,e as nt,ea as l,eb as Fe,f as pt,fa as O,fb as Ct,ga as R,h as pe,ha as _t,hb as Le,ia as Te,ib as Pe,j as at,jb as Be,k as be,l as fe,la as P,lb as ze,ma as W,mb as je,o as he,oa as Z,p as ge,pb as Ve,q as ve,qb as kt,r as _e,rb as Ue,s as ye,sa as G,ta as c,u as bt,ua as s,v as xe,va as x,wa as Ae,x as ft,xa as Ie,ya as K,za as yt}from"./chunk-SZTKHPPS.js";var $e=[{path:"",redirectTo:"categorias",pathMatch:"full"},{path:"categorias",loadComponent:()=>import("./chunk-M4RADHWU.js").then(n=>n.ListaCategorias)},{path:"categoria/:nombre/productos",loadComponent:()=>import("./chunk-FJ6M7D5T.js").then(n=>n.ListaProductos)},{path:"productos",loadComponent:()=>import("./chunk-FJ6M7D5T.js").then(n=>n.ListaProductos)},{path:"producto/:nombre",loadComponent:()=>import("./chunk-3QW27YXA.js").then(n=>n.DetalleProducto)},{path:"carrito",loadComponent:()=>import("./chunk-BPOMC4VY.js").then(n=>n.PaginaCarrito)},{path:"checkout",loadComponent:()=>import("./chunk-CA6BC3WB.js").then(n=>n.CheckoutPage)},{path:"**",redirectTo:"categorias"}];var J=class n{loadingSubject=new pt(!1);loading$=this.loadingSubject.asObservable();show(){this.loadingSubject.next(!0)}hide(){this.loadingSubject.next(!1)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})};var We=(n,o)=>{let t=r(J);return t.show(),o(n).pipe(ve(200),ye(()=>t.hide()))};var Ze={providers:[Ue($e),ze(je([We]))]};var It=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["app-footer"]],decls:40,vars:0,consts:[[1,"footer"],["routerLink","/productos",1,"logo"],[1,"contactanos"],[1,"mas-info"],["mat-icon-button","","routerLink","/nosotros",1,"icono-btn"],["mat-icon-button","","routerLink","/sedes",1,"icono-btn"],["mat-icon-button","","routerLink","/productos",1,"icono-btn"]],template:function(t,e){t&1&&(c(0,"section",0)(1,"div")(2,"span",1),m(3," Milotuercas "),s()(),c(4,"div",2)(5,"h2"),m(6,"Cont\xE1ctanos"),s(),c(7,"span")(8,"mat-icon"),m(9,"south_america"),s(),m(10," Atenci\xF3n a nivel nacional "),s(),c(11,"span")(12,"mat-icon"),m(13,"call"),s(),m(14," (+57) 313 793 03 02 "),s(),c(15,"span")(16,"mat-icon"),m(17,"mail"),s(),m(18," info@milotuercas.com "),s(),c(19,"span")(20,"mat-icon"),m(21,"schedule"),s(),m(22," Lunes a Viernes 08:00 am a 05:30 pm "),x(23,"br"),m(24," S\xE1bados 08:00 am a 02:00 pm "),s()(),c(25,"div",3)(26,"h2"),m(27,"M\xE1s informaci\xF3n"),s(),c(28,"button",4)(29,"mat-icon"),m(30,"diversity_3"),s(),m(31," Sobre nosotros "),s(),c(32,"button",5)(33,"mat-icon"),m(34,"domain"),s(),m(35," Nuestras sedes "),s(),c(36,"button",6)(37,"mat-icon"),m(38,"shopping_cart"),s(),m(39," Compra en linea "),s()()())},dependencies:[At,kt],styles:[".footer[_ngcontent-%COMP%]{width:100%;min-height:320px;padding:40px;background-color:var(--color-primary);display:flex;align-items:center;justify-content:space-around;gap:40px;box-shadow:inset 0 4px 6px #6464641a,inset 0 2px 6px -1px #77777738;color:var(--color-text)}.logo[_ngcontent-%COMP%]{font-size:50px;font-weight:700;cursor:pointer;white-space:nowrap}.contactanos[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.contactanos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px;font-size:24px}.contactanos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:16px;line-height:1.5}.icono-btn[_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:flex-start;gap:10px;padding:8px 0;color:var(--color-text);font-size:16px;transition:transform .2s ease,opacity .2s ease}.icono-btn[_ngcontent-%COMP%]:hover{transform:translate(5px);opacity:.85}@media(max-width:768px){.footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center;padding:30px 20px;gap:30px}.logo[_ngcontent-%COMP%]{font-size:36px}.contactanos[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]{align-items:center;width:100%}.icono-btn[_ngcontent-%COMP%]{justify-content:center;width:100%}}@media(max-width:480px){.logo[_ngcontent-%COMP%]{font-size:30px}.contactanos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.contactanos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .icono-btn[_ngcontent-%COMP%]{font-size:14px}}","[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};var $t;try{$t=typeof Intl<"u"&&Intl.v8BreakIterator}catch{$t=!1}var f=(()=>{class n{_platformId=r(Me);isBrowser=this._platformId?Pe(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||$t)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Wt;function Ge(){if(Wt==null){let n=typeof document<"u"?document.head:null;Wt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Wt}function Zt(n){if(Ge()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function T(n){return n.composedPath?n.composedPath()[0]:n.target}var rt;function Ke(){if(rt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>rt=!0}))}finally{rt=rt||!1}return rt}function tt(n){return Ke()?n:!!n.capture}var Rn=["*",[["mat-toolbar-row"]]],Nn=["*","mat-toolbar-row"],Sn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Ye=(()=>{class n{_elementRef=r(_);_platform=r(f);_document=r(w);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,a,i){if(e&1&&De(i,Sn,5),e&2){let d;wt(d=Et())&&(a._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,a){e&2&&(q(a.color?"mat-"+a.color:""),k("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Nn,decls:2,vars:0,template:function(e,a){e&1&&(Y(Rn),N(0),N(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function st(n){return n.buttons===0||n.detail===0}function ct(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}function j(n){return n instanceof _?n.nativeElement:n}var qe=new v("cdk-input-modality-detector-options"),Qe={ignoreKeys:[18,17,224,91,16]},Xe=650,Gt={passive:!0,capture:!0},Je=(()=>{class n{_platform=r(f);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new pt(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=T(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Xe||(this._modality.next(st(t)?"keyboard":"mouse"),this._mostRecentTarget=T(t))};_onTouchstart=t=>{if(ct(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=T(t)};constructor(){let t=r(h),e=r(w),a=r(qe,{optional:!0});if(this._options=S(S({},Qe),a),this.modalityDetected=this._modality.pipe(bt(1)),this.modalityChanged=this.modalityDetected.pipe(_e()),this._platform.isBrowser){let i=r(gt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,Gt),i.listen(e,"mousedown",this._onMousedown,Gt),i.listen(e,"touchstart",this._onTouchstart,Gt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dt=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(dt||{}),tn=new v("cdk-focus-monitor-default-options"),Ot=tt({passive:!0,capture:!0}),Kt=(()=>{class n{_ngZone=r(h);_platform=r(f);_inputModalityDetector=r(Je);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(w);_stopInputModalityDetector=new nt;constructor(){let t=r(tn,{optional:!0});this._detectionMode=t?.detectionMode||dt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=T(t);for(let a=e;a;a=a.parentElement)t.type==="focus"?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=j(t);if(!this._platform.isBrowser||a.nodeType!==1)return pe();let i=Zt(a)||this._document,d=this._elementInfo.get(a);if(d)return e&&(d.checkChildren=!0),d.subject;let p={checkChildren:e,subject:new nt,rootNode:i};return this._elementInfo.set(a,p),this._registerGlobalListeners(p),p.subject}stopMonitoring(t){let e=j(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let i=j(t),d=this._document.activeElement;i===d?this._getClosestElementsInfo(i).forEach(([p,M])=>this._originChanged(p,e,M)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===dt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===dt.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Xe:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),i=T(t);!a||!a.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ot),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ot)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ft(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ot),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ot),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,i)=>{(i===t||a.checkChildren&&i.contains(t))&&e.push([i,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let d=0;d<i.length;d++)if(i[d].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Yt(n){return Array.isArray(n)?n:[n]}var en=new Set,$,Rt=(()=>{class n{_platform=r(f);_nonce=r(ke,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ln}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Fn(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fn(n,o){if(!en.has(n))try{$||($=document.createElement("style"),o&&$.setAttribute("nonce",o),$.setAttribute("type","text/css"),document.head.appendChild($)),$.sheet&&($.sheet.insertRule(`@media ${n} {body{ }}`,0),en.add(n))}catch(t){console.error(t)}}function Ln(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var qt=(()=>{class n{_mediaMatcher=r(Rt);_zone=r(h);_queries=new Map;_destroySubject=new nt;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return nn(Yt(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let a=nn(Yt(t)).map(d=>this._registerQuery(d).observable),i=be(a);return i=fe(i.pipe(ge(1)),i.pipe(bt(1),he(0))),i.pipe(at(d=>{let p={matches:!1,breakpoints:{}};return d.forEach(({matches:M,query:I})=>{p.matches=p.matches||M,p.breakpoints[I]=M}),p}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new ue(d=>{let p=M=>this._zone.run(()=>d.next(M));return e.addListener(p),()=>{e.removeListener(p)}}).pipe(xe(e),at(({matches:d})=>({query:t,matches:d})),ft(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nn(n){return n.map(o=>o.split(",")).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}var Qt=(()=>{class n{_platform=r(f);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return Bn(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Pn(Zn(t));if(e&&(an(e)===-1||!this.isVisible(e)))return!1;let a=t.nodeName.toLowerCase(),i=an(t);return t.hasAttribute("contenteditable")?i!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!$n(t)?!1:a==="audio"?t.hasAttribute("controls")?i!==-1:!1:a==="video"?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Wn(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Pn(n){try{return n.frameElement}catch{return null}}function Bn(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function zn(n){let o=n.nodeName.toLowerCase();return o==="input"||o==="select"||o==="button"||o==="textarea"}function jn(n){return Un(n)&&n.type=="hidden"}function Vn(n){return Hn(n)&&n.hasAttribute("href")}function Un(n){return n.nodeName.toLowerCase()=="input"}function Hn(n){return n.nodeName.toLowerCase()=="a"}function on(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let o=n.getAttribute("tabindex");return!!(o&&!isNaN(parseInt(o,10)))}function an(n){if(!on(n))return null;let o=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}function $n(n){let o=n.nodeName.toLowerCase(),t=o==="input"&&n.type;return t==="text"||t==="password"||o==="select"||o==="textarea"}function Wn(n){return jn(n)?!1:zn(n)||Vn(n)||n.hasAttribute("contenteditable")||on(n)}function Zn(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Xt={},mt=class n{_appId=r(ht);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){return this._appId!=="ng"&&(o+=this._appId),Xt.hasOwnProperty(o)||(Xt[o]=0),`${o}${t?n._infix+"-":""}${Xt[o]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})};var sn=" ";function Gn(n,o,t){let e=St(n,o);t=t.trim(),!e.some(a=>a.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(sn)))}function Kn(n,o,t){let e=St(n,o);t=t.trim();let a=e.filter(i=>i!==t);a.length?n.setAttribute(o,a.join(sn)):n.removeAttribute(o)}function St(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var cn="cdk-describedby-message",Nt="cdk-describedby-host",te=0,dn=(()=>{class n{_platform=r(f);_document=r(w);_messageRegistry=new Map;_messagesContainer=null;_id=`${te++}`;constructor(){r(z).load(Tt),this._id=r(ht)+"-"+te++}describe(t,e,a){if(!this._canBeDescribed(t,e))return;let i=Jt(e,a);typeof e!="string"?(rn(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,a),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,e,a){if(!e||!this._isElementNode(t))return;let i=Jt(e,a);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e=="string"){let d=this._messageRegistry.get(i);d&&d.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Nt}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(Nt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let a=this._document.createElement("div");rn(a,this._id),a.textContent=t,e&&a.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Jt(t,e),{messageElement:a,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(t),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(t){let e=St(t,"aria-describedby").filter(a=>a.indexOf(cn)!=0);t.setAttribute("aria-describedby",e.join(" "))}_addMessageReference(t,e){let a=this._messageRegistry.get(e);Gn(t,"aria-describedby",a.messageElement.id),t.setAttribute(Nt,this._id),a.referenceCount++}_removeMessageReference(t,e){let a=this._messageRegistry.get(e);a.referenceCount--,Kn(t,"aria-describedby",a.messageElement.id),t.removeAttribute(Nt)}_isElementDescribedByMessage(t,e){let a=St(t,"aria-describedby"),i=this._messageRegistry.get(e),d=i&&i.messageElement.id;return!!d&&a.indexOf(d)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e=="object")return!0;let a=e==null?"":`${e}`.trim(),i=t.getAttribute("aria-label");return a?!i||i.trim()!==a:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Jt(n,o){return typeof n=="string"?`${o||""}/${n}`:n}function rn(n,o){n.id||(n.id=`${cn}-${o}-${te++}`)}var mn={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var qn=new v("MATERIAL_ANIMATIONS"),ln=null;function ee(){return r(qn,{optional:!0})?.animationsDisabled||r(Ce,{optional:!0})==="NoopAnimations"?"di-disabled":(ln??=r(Rt).matchMedia("(prefers-reduced-motion)").matches,ln?"reduced-motion":"enabled")}function et(){return ee()!=="enabled"}var E=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(E||{}),ne=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=E.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},un=tt({passive:!0,capture:!0}),ae=class{_events=new Map;addHandler(o,t,e,a){let i=this._events.get(t);if(i){let d=i.get(e);d?d.add(a):i.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,un)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let i=a.get(t);i&&(i.delete(e),i.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,un)))}_delegateEventHandler=o=>{let t=T(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(i=>i.handleEvent(o))})}},lt={enterDuration:225,exitDuration:150},Qn=800,pn=tt({passive:!0,capture:!0}),bn=["mousedown","touchstart"],fn=["mouseup","mouseleave","touchend","touchcancel"],Xn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ft=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ae;constructor(o,t,e,a,i){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=j(e)),i&&i.get(z).load(Xn)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=S(S({},lt),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let d=e.radius||Jn(o,t,a),p=o-a.left,M=t-a.top,I=i.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${p-d}px`,g.style.top=`${M-d}px`,g.style.height=`${d*2}px`,g.style.width=`${d*2}px`,e.color!=null&&(g.style.backgroundColor=e.color),g.style.transitionDuration=`${I}ms`,this._containerElement.appendChild(g);let ce=window.getComputedStyle(g),Dn=ce.transitionProperty,de=ce.transitionDuration,Vt=Dn==="none"||de==="0s"||de==="0s, 0s"||a.width===0&&a.height===0,V=new ne(this,g,e,Vt);g.style.transform="scale3d(1, 1, 1)",V.state=E.FADING_IN,e.persistent||(this._mostRecentTransientRipple=V);let ut=null;return!Vt&&(I||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let me=()=>{ut&&(ut.fallbackTimer=null),clearTimeout(le),this._finishRippleTransition(V)},Ut=()=>this._destroyRipple(V),le=setTimeout(Ut,I+100);g.addEventListener("transitionend",me),g.addEventListener("transitioncancel",Ut),ut={onTransitionEnd:me,onTransitionCancel:Ut,fallbackTimer:le}}),this._activeRipples.set(V,ut),(Vt||!I)&&this._finishRippleTransition(V),V}fadeOutRipple(o){if(o.state===E.FADING_OUT||o.state===E.HIDDEN)return;let t=o.element,e=S(S({},lt),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",o.state=E.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=j(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,bn.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{fn.forEach(t=>{this._triggerElement.addEventListener(t,this,pn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===E.FADING_IN?this._startFadeOutTransition(o):o.state===E.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=E.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=E.HIDDEN,t!==null&&(o.element.removeEventListener("transitionend",t.onTransitionEnd),o.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=st(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Qn;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!ct(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===E.VISIBLE||o.config.terminateOnPointerUp&&o.state===E.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(bn.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(fn.forEach(t=>o.removeEventListener(t,this,pn)),this._pointerUpEventsRegistered=!1))}};function Jn(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var hn=new v("mat-ripple-global-options");var ta={capture:!0},ea=["focus","mousedown","mouseenter","touchstart"],oe="mat-ripple-loader-uninitialized",ie="mat-ripple-loader-class-name",gn="mat-ripple-loader-centered",Lt="mat-ripple-loader-disabled",vn=(()=>{class n{_document=r(w);_animationsDisabled=et();_globalRippleOptions=r(hn,{optional:!0});_platform=r(f);_ngZone=r(h);_injector=r(ot);_eventCleanups;_hosts=new Map;constructor(){let t=r(gt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ea.map(e=>t.listen(this._document,e,this._onInteraction,ta)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(oe,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(ie))&&t.setAttribute(ie,e.className||""),e.centered&&t.setAttribute(gn,""),e.disabled&&t.setAttribute(Lt,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(Lt,""):t.removeAttribute(Lt)}_onInteraction=t=>{let e=T(t);if(e instanceof HTMLElement){let a=e.closest(`[${oe}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(ie)),t.append(e);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??lt.enterDuration,d=this._animationsDisabled?0:a?.animation?.exitDuration??lt.exitDuration,p={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(Lt),rippleConfig:{centered:t.hasAttribute(gn),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:d}}},M=new Ft(p,this._ngZone,e,this._platform,this._injector),I=!p.rippleDisabled;I&&M.setupTriggerEvents(t),this._hosts.set(t,{target:p,renderer:M,hasSetUpEvents:I}),t.removeAttribute(oe)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _n=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var na=["mat-icon-button",""],aa=["*"],oa=new v("MAT_BUTTON_CONFIG");function yn(n){return n==null?void 0:Q(n)}var re=(()=>{class n{_elementRef=r(_);_ngZone=r(h);_animationsDisabled=et();_config=r(oa,{optional:!0});_focusMonitor=r(Kt);_cleanupClick;_renderer=r(vt);_rippleLoader=r(vn);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){r(z).load(_n);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,a){e&2&&(P("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),q(a.color?"mat-"+a.color:""),k("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",A],disabled:[2,"disabled","disabled",A],ariaDisabled:[2,"aria-disabled","ariaDisabled",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A],tabIndex:[2,"tabIndex","tabIndex",yn],_tabindex:[2,"tabindex","_tabindex",yn]}})}return n})(),se=(()=>{class n extends re{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[_t],attrs:na,ngContentSelectors:aa,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(Y(),K(0,"span",0),N(1),K(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var xn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[X]})}return n})();var ia=["matButton",""],ra=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],sa=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var wn=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),En=(()=>{class n extends re{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=ca(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?wn.get(this._appearance):null,i=wn.get(t);a&&e.remove(...a),e.add(...i),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_t],attrs:ia,ngContentSelectors:sa,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(Y(ra),K(0,"span",0),N(1),Ae(2,"span",1),N(3,1),Ie(),N(4,2),K(5,"span",2)(6,"span",3)),e&2&&k("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function ca(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Mn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[xn,X]})}return n})();var Cn="mat-badge-content",ma=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return n})(),kn=(()=>{class n{_ngZone=r(h);_elementRef=r(_);_ariaDescriber=r(dn);_renderer=r(vt);_animationsDisabled=et();_idGenerator=r(mt);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=r(Qt);_document=r(w);constructor(){let t=r(z);t.load(ma),t.load(Tt)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Cn),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Cn}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,a){e&2&&k("mat-badge-overlap",a.overlap)("mat-badge-above",a.isAbove())("mat-badge-below",!a.isAbove())("mat-badge-before",!a.isAfter())("mat-badge-after",a.isAfter())("mat-badge-small",a.size==="small")("mat-badge-medium",a.size==="medium")("mat-badge-large",a.size==="large")("mat-badge-hidden",a.hidden||!a.content)("mat-badge-disabled",a.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",A],disabled:[2,"matBadgeDisabled","disabled",A],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",A]}})}return n})();function la(n,o){if(n&1){let t=xt();c(0,"button",9),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),c(1,"mat-icon"),m(2),s()()}if(n&2){let t=C();y(2),Ne(t.menuAbierto?"close":"menu")}}function ua(n,o){if(n&1){let t=xt();c(0,"div",4)(1,"button",10),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),m(2,"Sobre Nosotros"),s(),c(3,"button",11),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),m(4,"Productos"),s(),c(5,"button",12),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),m(6,"Cont\xE1ctanos"),s()()}}function pa(n,o){if(n&1){let t=xt();c(0,"div",8)(1,"button",10),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),m(2,"Sobre Nosotros"),s(),c(3,"button",11),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),m(4,"Productos"),s(),c(5,"button",12),B("click",function(){F(t);let a=C();return L(a.toggleMenu())}),m(6,"Cont\xE1ctanos"),s()()}}var Pt=class n{constructor(o,t){this.carritoService=o;this.breakpointObserver=t;this.cantidadProductos$=o.cantidadProductos$,this.isHandSet$=this.breakpointObserver.observe(mn.Handset).pipe(at(e=>e.matches))}cantidadProductos$;isHandSet$;menuAbierto=!1;toggleMenu(){this.menuAbierto=!this.menuAbierto}static \u0275fac=function(t){return new(t||n)(it(He),it(qt))};static \u0275cmp=l({type:n,selectors:[["app-navbar"]],decls:21,vars:12,consts:[["color","primary",1,"navbar"],[1,"left-section"],["mat-icon-button","",1,"menu-btn"],["routerLink","/categorias",1,"logo"],[1,"nav-links"],[1,"icono-btns"],["mat-icon-button","","routerLink","/carrito",1,"icono-btn","carrito-btn",3,"matBadge"],["mat-icon-button","","routerLink","/iniciar-sesion",1,"icono-btn"],[1,"mobile-menu"],["mat-icon-button","",1,"menu-btn",3,"click"],["mat-button","","routerLink","/carrito",3,"click"],["mat-button","","routerLink","/productos",3,"click"],["mat-button","","routerLink","/contacto",3,"click"]],template:function(t,e){t&1&&(c(0,"mat-toolbar",0)(1,"div",1),W(2,la,3,1,"button",2),U(3,"async"),c(4,"span",3)(5,"mat-icon"),m(6,"construction"),s(),c(7,"span"),m(8,"Milotuercas"),s()()(),W(9,ua,7,0,"div",4),U(10,"async"),c(11,"div",5)(12,"button",6),U(13,"async"),c(14,"mat-icon"),m(15,"shopping_cart"),s()(),c(16,"button",7)(17,"mat-icon"),m(18,"account_circle"),s()()()(),W(19,pa,7,0,"div",8),U(20,"async")),t&2&&(y(2),Z(H(3,4,e.isHandSet$)?2:-1),y(7),Z(H(10,6,e.isHandSet$)?-1:9),y(3),G("matBadge",H(13,8,e.cantidadProductos$)),y(7),Z(e.menuAbierto&&H(20,10,e.isHandSet$)?19:-1))},dependencies:[Ye,At,Mn,En,se,kn,kt,Ct],styles:["[_nghost-%COMP%]{display:block;width:100%}.navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:space-between;height:var(--navbar-height);padding:0 24px;background-color:var(--color-primary);box-shadow:inset 4px 0 6px #0000001a,inset 2px 0 4px #7773;z-index:1000}.left-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:28px;font-weight:700;color:var(--color-text);cursor:pointer;white-space:nowrap}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:auto;margin-right:16px}.boton[_ngcontent-%COMP%]{color:var(--color-text);font-size:18px;font-weight:700;transition:transform .2s}.boton[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.icono-btns[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0}.icono-btn[_ngcontent-%COMP%]{transition:transform .2s}.icono-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.carrito-btn[_ngcontent-%COMP%]{margin-right:4px}.mobile-menu[_ngcontent-%COMP%]{position:fixed;top:var(--navbar-height);left:0;display:flex;flex-direction:column;width:100%;background:var(--color-primary);box-shadow:0 4px 8px #0003;z-index:999;animation:_ngcontent-%COMP%_slideDown .25s ease}.mobile-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{justify-content:flex-start;width:100%;padding:12px;font-size:16px;color:var(--color-text)}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:599px){.navbar[_ngcontent-%COMP%]{padding:0 16px}.left-section[_ngcontent-%COMP%]{gap:8px}.logo[_ngcontent-%COMP%]{font-size:22px}}","[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};var ba=["determinateSpinner"];function fa(n,o){if(n&1&&(Ht(),c(0,"svg",11),x(1,"circle",12),s()),n&2){let t=C();P("viewBox",t._viewBox()),y(),Mt("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),P("r",t._circleRadius())}}var ha=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Tn})}),Tn=100,ga=10,An=(()=>{class n{_elementRef=r(_);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=r(ha),e=ee(),a=this._elementRef.nativeElement;this._noopAnimations=e==="di-disabled"&&!!t&&!t._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&e==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=Tn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-ga)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(e,a){if(e&1&&Oe(ba,5),e&2){let i;wt(i=Et())&&(a._determinateCircle=i.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(e,a){e&2&&(P("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),q("mat-"+a.color),Mt("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),k("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Q],diameter:[2,"diameter","diameter",Q],strokeWidth:[2,"strokeWidth","strokeWidth",Q]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(e,a){if(e&1&&(Te(0,fa,2,8,"ng-template",null,0,Se),c(2,"div",2,1),Ht(),c(4,"svg",3),x(5,"circle",4),s()(),we(),c(6,"div",5)(7,"div",6)(8,"div",7),yt(9,8),s(),c(10,"div",9),yt(11,8),s(),c(12,"div",10),yt(13,8),s()()()),e&2){let i=Re(1);y(4),P("viewBox",a._viewBox()),y(),Mt("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),P("r",a._circleRadius()),y(4),G("ngTemplateOutlet",i),y(2),G("ngTemplateOutlet",i),y(2),G("ngTemplateOutlet",i)}},dependencies:[Fe],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var In=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[X]})}return n})();function _a(n,o){n&1&&(c(0,"div",0),x(1,"mat-spinner"),s())}var Bt=class n{constructor(o){this.loadingService=o;this.loading$=this.loadingService.loading$}loading$;static \u0275fac=function(t){return new(t||n)(it(J))};static \u0275cmp=l({type:n,selectors:[["app-loading"]],decls:2,vars:3,consts:[[1,"loader"]],template:function(t,e){t&1&&(W(0,_a,2,0,"div",0),U(1,"async")),t&2&&Z(H(1,1,e.loading$)?0:-1)},dependencies:[Le,In,An,Ct],styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:#ffffffb3;z-index:1000}.loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{width:60px!important;height:60px!important}"]})};var zt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["app-main-layout"]],decls:5,vars:0,consts:[[1,"main-container"]],template:function(t,e){t&1&&(x(0,"app-navbar"),c(1,"main",0),x(2,"app-loading")(3,"router-outlet"),s(),x(4,"app-footer"))},dependencies:[Ve,It,Pt,Bt],styles:[".main-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background-color:var(--color-background)}"]})};var jt=class n{title=Ee("ReactiveShop");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){t&1&&x(0,"app-main-layout")},dependencies:[zt],styles:["[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};Be(jt,Ze).catch(n=>console.error(n));
