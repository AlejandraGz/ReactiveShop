import{a as $,b as V,c as Re,d as K}from"./chunk-JTGGCYTE.js";import{a as Fe}from"./chunk-QM6NXMCJ.js";import{$ as T,$a as W,A as o,Aa as Me,Ba as we,Ca as L,Da as R,E as ee,Ea as Ce,F as pe,Fa as F,Ga as M,H as b,Ha as B,Ia as d,K as A,M as ue,Oa as P,P as _,Pa as j,Q as S,R as fe,Ra as Ae,S as he,T as ge,W as f,Wa as k,Xa as z,Y as be,Z as N,_ as l,_a as Te,aa as I,bb as Ie,ca as _e,cb as ke,db as De,e as de,fa as x,fb as Se,ga as ve,gb as Ne,ia as ye,jb as Oe,kb as H,lb as Le,ma as E,na as c,o as le,oa as a,pa as m,q as me,ta as O,w as u,x as C,xa as xe,y,ya as Ee,za as te}from"./chunk-XEVCLS7G.js";var Be=[{path:"",redirectTo:"categorias",pathMatch:"full"},{path:"categorias",loadComponent:()=>import("./chunk-6CYBQIA4.js").then(t=>t.ListaCategorias)},{path:"categoria/:nombre/productos",loadComponent:()=>import("./chunk-ENNNDZD4.js").then(t=>t.ListaProductos)},{path:"productos",loadComponent:()=>import("./chunk-ENNNDZD4.js").then(t=>t.ListaProductos)},{path:"producto/:nombre",loadComponent:()=>import("./chunk-HQIKN22I.js").then(t=>t.DetalleProducto)},{path:"carrito",loadComponent:()=>import("./chunk-HU4AGAFS.js").then(t=>t.PaginaCarrito)},{path:"checkout",loadComponent:()=>import("./chunk-SU7JCV5U.js").then(t=>t.CheckoutPage)},{path:"**",redirectTo:"categorias"}];var w=class t{loadingSubject=new de(!1);loading$=this.loadingSubject.asObservable();show(){this.loadingSubject.next(!0)}hide(){this.loadingSubject.next(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})};var Pe=(t,i)=>{let e=o(w);return e.show(),i(t).pipe(le(200),me(()=>e.hide()))};var je={providers:[Le(Be),Se(Ne([Pe]))]};var U=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-footer"]],decls:40,vars:0,consts:[[1,"footer"],["routerLink","/productos",1,"logo"],[1,"contactanos"],[1,"mas-info"],["mat-icon-button","","routerLink","/nosotros",1,"icono-btn"],["mat-icon-button","","routerLink","/sedes",1,"icono-btn"],["mat-icon-button","","routerLink","/productos",1,"icono-btn"]],template:function(e,n){e&1&&(c(0,"section",0)(1,"div")(2,"span",1),d(3," Milotuercas "),a()(),c(4,"div",2)(5,"h2"),d(6,"Cont\xE1ctanos"),a(),c(7,"span")(8,"mat-icon"),d(9,"south_america"),a(),d(10," Atenci\xF3n a nivel nacional "),a(),c(11,"span")(12,"mat-icon"),d(13,"call"),a(),d(14," (+57) 313 793 03 02 "),a(),c(15,"span")(16,"mat-icon"),d(17,"mail"),a(),d(18," info@milotuercas.com "),a(),c(19,"span")(20,"mat-icon"),d(21,"schedule"),a(),d(22," Lunes a Viernes 08:00 am a 05:30 pm "),m(23,"br"),d(24," S\xE1bados 08:00 am a 02:00 pm "),a()(),c(25,"div",3)(26,"h2"),d(27,"M\xE1s informaci\xF3n"),a(),c(28,"button",4)(29,"mat-icon"),d(30,"diversity_3"),a(),d(31," Sobre nosotros "),a(),c(32,"button",5)(33,"mat-icon"),d(34,"domain"),a(),d(35," Nuestras sedes "),a(),c(36,"button",6)(37,"mat-icon"),d(38,"shopping_cart"),a(),d(39," Compra en linea "),a()()())},dependencies:[K,H],styles:[".footer[_ngcontent-%COMP%]{width:100vw;padding:0 40px;background-color:var(--color-primary);height:400px;display:flex;align-items:center;gap:40px;justify-content:space-around;box-shadow:inset 0 4px 6px #6464641a,inset 0 2px 6px -1px #77777738}.logo[_ngcontent-%COMP%]{font-size:50px;font-weight:700}.contactanos[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}span[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:16px}.icono-btn[_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;display:flex;align-items:center;gap:10px;color:var(--color-text);transition:transform .2s ease,color .2s ease,opacity .2s ease}.icono-btn[_ngcontent-%COMP%]:hover{opacity:.85}","[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};var ne;try{ne=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ne=!1}var h=(()=>{class t{_platformId=o(fe);isBrowser=this._platformId?ke(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ne)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nt=["*",[["mat-toolbar-row"]]],rt=["*","mat-toolbar-row"],it=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),ze=(()=>{class t{_elementRef=o(_);_platform=o(h);_document=o(b);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,s){if(n&1&&Me(s,it,5),n&2){let g;L(g=R())&&(r._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(B(r.color?"mat-"+r.color:""),M("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:rt,decls:2,vars:0,template:function(n,r){n&1&&(Ee(nt),te(0),te(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var We=new Set,v,re=(()=>{class t{_platform=o(h);_nonce=o(ge,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):at}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ot(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ot(t,i){if(!We.has(t))try{v||(v=document.createElement("style"),i&&v.setAttribute("nonce",i),v.setAttribute("type","text/css"),document.head.appendChild(v)),v.sheet&&(v.sheet.insertRule(`@media ${t} {body{ }}`,0),We.add(t))}catch(e){console.error(e)}}function at(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ie=(()=>{class t{_platform=o(h);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return dt(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=ct(bt(e));if(n&&(He(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),s=He(e);return e.hasAttribute("contenteditable")?s!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ht(e)?!1:r==="audio"?e.hasAttribute("controls")?s!==-1:!1:r==="video"?s===-1?!1:s!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return gt(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ct(t){try{return t.frameElement}catch{return null}}function dt(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function lt(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function mt(t){return ut(t)&&t.type=="hidden"}function pt(t){return ft(t)&&t.hasAttribute("href")}function ut(t){return t.nodeName.toLowerCase()=="input"}function ft(t){return t.nodeName.toLowerCase()=="a"}function $e(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function He(t){if(!$e(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function ht(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function gt(t){return mt(t)?!1:lt(t)||pt(t)||t.hasAttribute("contenteditable")||$e(t)}function bt(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var oe={},D=class t{_appId=o(S);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),oe.hasOwnProperty(i)||(oe[i]=0),`${i}${e?t._infix+"-":""}${oe[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ke=" ";function _t(t,i,e){let n=q(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(Ke)))}function vt(t,i,e){let n=q(t,i);e=e.trim();let r=n.filter(s=>s!==e);r.length?t.setAttribute(i,r.join(Ke)):t.removeAttribute(i)}function q(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Ue="cdk-describedby-message",G="cdk-describedby-host",se=0,Ze=(()=>{class t{_platform=o(h);_document=o(b);_messageRegistry=new Map;_messagesContainer=null;_id=`${se++}`;constructor(){o($).load(V),this._id=o(S)+"-"+se++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let s=ae(n,r);typeof n!="string"?(Ve(n,this._id),this._messageRegistry.set(s,{messageElement:n,referenceCount:0})):this._messageRegistry.has(s)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,s)||this._addMessageReference(e,s)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let s=ae(n,r);if(this._isElementDescribedByMessage(e,s)&&this._removeMessageReference(e,s),typeof n=="string"){let g=this._messageRegistry.get(s);g&&g.referenceCount===0&&this._deleteMessageElement(s)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${G}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(G);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");Ve(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(ae(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let s=0;s<n.length;s++)n[s].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=q(e,"aria-describedby").filter(r=>r.indexOf(Ue)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);_t(e,"aria-describedby",r.messageElement.id),e.setAttribute(G,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,vt(e,"aria-describedby",r.messageElement.id),e.removeAttribute(G)}_isElementDescribedByMessage(e,n){let r=q(e,"aria-describedby"),s=this._messageRegistry.get(n),g=s&&s.messageElement.id;return!!g&&r.indexOf(g)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),s=e.getAttribute("aria-label");return r?!s||s.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ae(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function Ve(t,i){t.id||(t.id=`${Ue}-${i}-${se++}`)}var yt=new y("MATERIAL_ANIMATIONS"),Ge=null;function ce(){return o(yt,{optional:!0})?.animationsDisabled||o(he,{optional:!0})==="NoopAnimations"?"di-disabled":(Ge??=o(re).matchMedia("(prefers-reduced-motion)").matches,Ge?"reduced-motion":"enabled")}function qe(){return ce()!=="enabled"}var Qe="mat-badge-content",xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ye=(()=>{class t{_ngZone=o(A);_elementRef=o(_);_ariaDescriber=o(Ze);_renderer=o(be);_animationsDisabled=qe();_idGenerator=o(D);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=o(ie);_document=o(b);constructor(){let e=o($);e.load(xt),e.load(V)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),n="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(Qe),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(n)})}):e.classList.add(n),e}_updateRenderedContent(e){let n=`${e??""}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),e&&n.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Qe}`);for(let n of Array.from(e))n!==this._badgeElement&&n.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(n,r){n&2&&M("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",k],disabled:[2,"matBadgeDisabled","disabled",k],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",k]}})}return t})();var Q=class t{constructor(i){this.carritoService=i;this.cantidadProductos$=i.cantidadProductos$}cantidadProductos$;static \u0275fac=function(e){return new(e||t)(N(Fe))};static \u0275cmp=l({type:t,selectors:[["app-navbar"]],decls:21,vars:3,consts:[["color","primary",1,"navbar"],["routerLink","/categorias",1,"logo"],[1,"spacer"],[1,"botones"],["mat-icon-button","","routerLink","/carrito",1,"boton"],["mat-icon-button","","routerLink","/productos",1,"boton"],["mat-icon-button","","routerLink","/contacto",1,"boton"],[1,"icono-btns"],["mat-icon-button","","routerLink","/carrito",1,"icono-btn","carrito-btn",3,"matBadge"],["mat-icon-button","","routerLink","/iniciar-sesion",1,"icono-btn"]],template:function(e,n){e&1&&(c(0,"mat-toolbar",0)(1,"span",1)(2,"mat-icon"),d(3,"construction"),a(),d(4," Milotuercas "),a(),m(5,"span",2),c(6,"div",3)(7,"button",4),d(8,"Sobre Nosotros"),a(),c(9,"button",5),d(10,"Productos"),a(),c(11,"button",6),d(12,"Cont\xE1ctanos"),a(),c(13,"div",7)(14,"button",8),P(15,"async"),c(16,"mat-icon"),d(17,"shopping_cart"),a()(),c(18,"button",9)(19,"mat-icon"),d(20,"account_circle"),a()()()()()),e&2&&(f(14),E("matBadge",j(15,1,n.cantidadProductos$)))},dependencies:[ze,K,Ye,H,W],styles:[".navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;display:flex;justify-content:space-between;align-items:center;height:var(--navbar-height);width:100vw;padding:0 40px;background-color:var(--color-primary);box-shadow:inset 4px 0 6px #0000001a,inset 2px 0 4px -1px #77777738;z-index:1000}.logo[_ngcontent-%COMP%]{font-size:28px;font-weight:bolder;color:var(--color-text);cursor:pointer}.botones[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-end}.icono-btn[_ngcontent-%COMP%]{background:transparent;border:none;cursor:pointer;transition:transform .2s ease}.icono-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.carrito-btn[_ngcontent-%COMP%]{margin-right:4px}.boton[_ngcontent-%COMP%]{padding-left:20px;background-color:transparent;color:var(--color-text);font-size:18px;font-weight:700;border:none;cursor:pointer;transition:transform .2s ease}.boton[_ngcontent-%COMP%]:hover{transform:scale(1.01)}.spacer[_ngcontent-%COMP%]{flex:1}","[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};var Et=["determinateSpinner"];function Mt(t,i){if(t&1&&(ee(),c(0,"svg",11),m(1,"circle",12),a()),t&2){let e=xe();x("viewBox",e._viewBox()),f(),F("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),x("r",e._circleRadius())}}var wt=new y("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Xe})}),Xe=100,Ct=10,Je=(()=>{class t{_elementRef=o(_);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=o(wt),n=ce(),r=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Xe;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Ct)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,r){if(n&1&&we(Et,5),n&2){let s;L(s=R())&&(r._determinateCircle=s.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,r){n&2&&(x("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),B("mat-"+r.color),F("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),M("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",z],diameter:[2,"diameter","diameter",z],strokeWidth:[2,"strokeWidth","strokeWidth",z]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,r){if(n&1&&(_e(0,Mt,2,8,"ng-template",null,0,Ae),c(2,"div",2,1),ee(),c(4,"svg",3),m(5,"circle",4),a()(),pe(),c(6,"div",5)(7,"div",6)(8,"div",7),O(9,8),a(),c(10,"div",9),O(11,8),a(),c(12,"div",10),O(13,8),a()()()),n&2){let s=Ce(1);f(4),x("viewBox",r._viewBox()),f(),F("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),x("r",r._circleRadius()),f(4),E("ngTemplateOutlet",s),f(2),E("ngTemplateOutlet",s),f(2),E("ngTemplateOutlet",s)}},dependencies:[Te],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return t})();var et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=T({type:t});static \u0275inj=C({imports:[Re]})}return t})();function Tt(t,i){t&1&&(c(0,"div",0),m(1,"mat-spinner"),a())}var Y=class t{constructor(i){this.loadingService=i;this.loading$=this.loadingService.loading$}loading$;static \u0275fac=function(e){return new(e||t)(N(w))};static \u0275cmp=l({type:t,selectors:[["app-loading"]],decls:2,vars:3,consts:[[1,"loader"]],template:function(e,n){e&1&&(ve(0,Tt,2,0,"div",0),P(1,"async")),e&2&&ye(j(1,1,n.loading$)?0:-1)},dependencies:[Ie,et,Je,W],styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:#ffffffb3;z-index:1000}.loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{width:60px!important;height:60px!important}"]})};var X=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-main-layout"]],decls:5,vars:0,consts:[[1,"main-container"]],template:function(e,n){e&1&&(m(0,"app-navbar"),c(1,"main",0),m(2,"app-loading")(3,"router-outlet"),a(),m(4,"app-footer"))},dependencies:[Oe,U,Q,Y],styles:[".main-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background-color:var(--color-background)}"]})};var J=class t{title=ue("ReactiveShop");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&m(0,"app-main-layout")},dependencies:[X],styles:["[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};De(J,je).catch(t=>console.error(t));
