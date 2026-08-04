import{a as Ee,b as Se,c as Pe,d as De,e as ze,f as Oe,g as Be,h as Te}from"./chunk-QPH4QZK5.js";import{a as ye,c as Ce}from"./chunk-KUFLU6GQ.js";import{a as Ae}from"./chunk-ETIQBKC2.js";import{b as ve,c as F,d as xe}from"./chunk-CCF6UNJ4.js";import{a as Me,b as we,c as ke,d as $}from"./chunk-FQAAOUZX.js";import{e as ue,f as V,h as fe,j as be,l as he,m as _e}from"./chunk-VVUPKFOR.js";import{$b as j,A as ee,Ab as N,Bb as de,Cb as R,Db as k,Eb as L,Fb as a,Ga as m,Gb as pe,Ma as ae,Mb as _,N as te,Na as S,Nb as v,O as P,Pb as ge,Q as ne,Ra as l,S as c,Sa as z,Ta as O,Wa as se,X as u,Y as f,Z,_ as ie,_b as I,aa as D,ab as y,bb as C,db as M,ea as oe,g as J,ha as re,hb as w,ib as r,jb as o,kb as d,ma as x,ob as B,pb as T,tb as b,ub as p,vb as ce,wb as Y,xb as le,y as X,yb as me,zb as A}from"./chunk-L46DVGER.js";var Ne=[{path:"",redirectTo:"categorias",pathMatch:"full"},{path:"categorias",loadComponent:()=>import("./chunk-DKZE2FIQ.js").then(t=>t.ListaCategorias)},{path:"categoria/:nombre/productos",loadComponent:()=>import("./chunk-4YL7W3NF.js").then(t=>t.ListaProductos)},{path:"productos",loadComponent:()=>import("./chunk-4YL7W3NF.js").then(t=>t.ListaProductos)},{path:"producto/:nombre",loadComponent:()=>import("./chunk-3H3AM7IS.js").then(t=>t.DetalleProducto)},{path:"carrito",loadComponent:()=>import("./chunk-F2DIWXI2.js").then(t=>t.PaginaCarrito)},{path:"checkout",loadComponent:()=>import("./chunk-ZJ3FY4WZ.js").then(t=>t.CheckoutPage)},{path:"nosotros",loadComponent:()=>import("./chunk-2XSEHZX3.js").then(t=>t.Nosotros)},{path:"contactanos",loadComponent:()=>import("./chunk-FMKE7ZXS.js").then(t=>t.Contacto)},{path:"sedes",loadComponent:()=>import("./chunk-7ZAGL7L3.js").then(t=>t.Sedes)},{path:"**",redirectTo:"categorias"}];var E=class t{loadingSubject=new J(!1);loading$=this.loadingSubject.asObservable();show(){this.loadingSubject.next(!0)}hide(){this.loadingSubject.next(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})};var Re=(t,s)=>{let e=c(E);return e.show(),s(t).pipe(X(200),ee(()=>e.hide()))};var Le={providers:[xe(Ne),he(_e([Re]))]};var H=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-footer"]],decls:40,vars:0,consts:[[1,"footer"],["routerLink","/categorias",1,"logo"],[1,"contactanos"],[1,"mas-info"],["mat-icon-button","","routerLink","/nosotros",1,"icono-btn"],["mat-icon-button","","routerLink","/sedes",1,"icono-btn"],["mat-icon-button","","routerLink","/categorias",1,"icono-btn"]],template:function(e,n){e&1&&(r(0,"section",0)(1,"div")(2,"span",1),a(3," Milotuercas "),o()(),r(4,"div",2)(5,"h2"),a(6,"Cont\xE1ctanos"),o(),r(7,"span")(8,"mat-icon"),a(9,"south_america"),o(),a(10," Atenci\xF3n a nivel nacional "),o(),r(11,"span")(12,"mat-icon"),a(13,"call"),o(),a(14," (+57) 313 793 03 02 "),o(),r(15,"span")(16,"mat-icon"),a(17,"mail"),o(),a(18," info@milotuercas.com "),o(),r(19,"span")(20,"mat-icon"),a(21,"schedule"),o(),a(22," Lunes a Viernes 08:00 am a 05:30 pm "),d(23,"br"),a(24," S\xE1bados 08:00 am a 02:00 pm "),o()(),r(25,"div",3)(26,"h2"),a(27,"M\xE1s informaci\xF3n"),o(),r(28,"button",4)(29,"mat-icon"),a(30,"diversity_3"),o(),a(31," Sobre nosotros "),o(),r(32,"button",5)(33,"mat-icon"),a(34,"domain"),o(),a(35," Nuestras sedes "),o(),r(36,"button",6)(37,"mat-icon"),a(38,"shopping_cart"),o(),a(39," Compra en linea "),o()()())},dependencies:[$,F],styles:[".footer[_ngcontent-%COMP%]{width:100%;min-height:320px;padding:40px;background-color:var(--color-primary);display:flex;align-items:center;justify-content:space-around;gap:40px;box-shadow:inset 0 4px 6px #6464641a,inset 0 2px 6px -1px #77777738;color:var(--color-text)}.logo[_ngcontent-%COMP%]{font-size:50px;font-weight:700;cursor:pointer;white-space:nowrap}.contactanos[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.contactanos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px;font-size:24px}.contactanos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:16px;line-height:1.5}.icono-btn[_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:flex-start;gap:10px;padding:8px 0;color:var(--color-text);font-size:16px;transition:transform .2s ease,opacity .2s ease}.icono-btn[_ngcontent-%COMP%]:hover{transform:translate(5px);opacity:.85}@media(max-width:768px){.footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center;padding:30px 20px;gap:30px}.logo[_ngcontent-%COMP%]{font-size:36px}.contactanos[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]{align-items:center;width:100%}.icono-btn[_ngcontent-%COMP%]{justify-content:center;width:100%}}@media(max-width:480px){.logo[_ngcontent-%COMP%]{font-size:30px}.contactanos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mas-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.contactanos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .icono-btn[_ngcontent-%COMP%]{font-size:14px}}","[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};var Qe=["*",[["mat-toolbar-row"]]],Ge=["*","mat-toolbar-row"],qe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Ie=(()=>{class t{_elementRef=c(x);_platform=c(ye);_document=c(D);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,i,g){if(n&1&&le(g,qe,5),n&2){let K;A(K=N())&&(i._toolbarRows=K)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,i){n&2&&(L(i.color?"mat-"+i.color:""),k("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ge,decls:2,vars:0,template:function(n,i){n&1&&(ce(Qe),Y(0),Y(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var je="mat-badge-content",Ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ve=(()=>{class t{_ngZone=c(oe);_elementRef=c(x);_ariaDescriber=c(Pe);_renderer=c(ae);_animationsDisabled=ze();_idGenerator=c(Se);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=c(Ee);_document=c(D);constructor(){let e=c(Me);e.load(Ue),e.load(we)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),n="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(je),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(n)})}):e.classList.add(n),e}_updateRenderedContent(e){let n=`${e??""}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),e&&n.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${je}`);for(let n of Array.from(e))n!==this._badgeElement&&n.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(n,i){n&2&&k("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",I],disabled:[2,"matBadgeDisabled","disabled",I],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",I]}})}return t})();function Ze(t,s){if(t&1){let e=T();r(0,"button",9),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),r(1,"mat-icon"),a(2),o()()}if(t&2){let e=p();m(2),pe(e.menuAbierto?"close":"menu")}}function Ye(t,s){if(t&1){let e=T();r(0,"div",4)(1,"button",10),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),a(2,"Sobre Nosotros"),o(),r(3,"button",11),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),a(4,"Productos"),o(),r(5,"button",12),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),a(6,"Cont\xE1ctanos"),o()()}}function Ke(t,s){if(t&1){let e=T();r(0,"div",8)(1,"button",10),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),a(2,"Sobre Nosotros"),o(),r(3,"button",11),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),a(4,"Productos"),o(),r(5,"button",12),b("click",function(){u(e);let i=p();return f(i.toggleMenu())}),a(6,"Cont\xE1ctanos"),o()()}}var Q=class t{constructor(s,e){this.carritoService=s;this.responsive=e;this.cantidadProductos$=s.cantidadProductos$}cantidadProductos$;isHandSet$;menuAbierto=!1;toggleMenu(){this.menuAbierto=!this.menuAbierto}static \u0275fac=function(e){return new(e||t)(S(Ae),S(Ce))};static \u0275cmp=l({type:t,selectors:[["app-navbar"]],decls:21,vars:12,consts:[["color","primary",1,"navbar"],[1,"left-section"],["mat-icon-button","",1,"menu-btn"],["routerLink","/categorias",1,"logo"],[1,"nav-links"],[1,"icono-btns"],["mat-icon-button","","routerLink","/carrito",1,"icono-btn","carrito-btn",3,"matBadge"],["mat-icon-button","","routerLink","/iniciar-sesion",1,"icono-btn"],[1,"mobile-menu"],["mat-icon-button","",1,"menu-btn",3,"click"],["mat-button","","routerLink","/nosotros",3,"click"],["mat-button","","routerLink","/productos",3,"click"],["mat-button","","routerLink","/contactanos",3,"click"]],template:function(e,n){e&1&&(r(0,"mat-toolbar",0)(1,"div",1),C(2,Ze,3,1,"button",2),_(3,"async"),r(4,"span",3)(5,"mat-icon"),a(6,"construction"),o(),r(7,"span"),a(8,"Milotuercas"),o()()(),C(9,Ye,7,0,"div",4),_(10,"async"),r(11,"div",5)(12,"button",6),_(13,"async"),r(14,"mat-icon"),a(15,"shopping_cart"),o()(),r(16,"button",7)(17,"mat-icon"),a(18,"account_circle"),o()()()(),C(19,Ke,7,0,"div",8),_(20,"async")),e&2&&(m(2),M(v(3,4,n.responsive.isHandset$)?2:-1),m(7),M(v(10,6,n.responsive.isHandset$)?-1:9),m(3),w("matBadge",v(13,8,n.cantidadProductos$)),m(7),M(n.menuAbierto&&v(20,10,n.responsive.isHandset$)?19:-1))},dependencies:[Ie,$,Te,Be,Oe,Ve,F,V],styles:["[_nghost-%COMP%]{display:block;width:100%}.navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:space-between;height:var(--navbar-height);padding:0 24px;background-color:var(--color-primary);box-shadow:inset 4px 0 6px #0000001a,inset 2px 0 4px #7773;z-index:1000}.left-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:28px;font-weight:700;color:var(--color-text);cursor:pointer;white-space:nowrap}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:auto;margin-right:16px}.boton[_ngcontent-%COMP%]{color:var(--color-text);font-size:18px;font-weight:700;transition:transform .2s}.boton[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.icono-btns[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0}.icono-btn[_ngcontent-%COMP%]{transition:transform .2s}.icono-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.carrito-btn[_ngcontent-%COMP%]{margin-right:4px}.mobile-menu[_ngcontent-%COMP%]{position:fixed;top:var(--navbar-height);left:0;display:flex;flex-direction:column;width:100%;background:var(--color-primary);box-shadow:0 4px 8px #0003;z-index:999;animation:_ngcontent-%COMP%_slideDown .25s ease}.mobile-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{justify-content:flex-start;width:100%;padding:12px;font-size:16px;color:var(--color-text)}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:599px){.navbar[_ngcontent-%COMP%]{padding:0 16px}.left-section[_ngcontent-%COMP%]{gap:8px}.logo[_ngcontent-%COMP%]{font-size:22px}}","[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};var Je=["determinateSpinner"];function Xe(t,s){if(t&1&&(Z(),r(0,"svg",11),d(1,"circle",12),o()),t&2){let e=p();y("viewBox",e._viewBox()),m(),R("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),y("r",e._circleRadius())}}var et=new ne("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Fe})}),Fe=100,tt=10,$e=(()=>{class t{_elementRef=c(x);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(et),n=De(),i=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Fe;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-tt)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,i){if(n&1&&me(Je,5),n&2){let g;A(g=N())&&(i._determinateCircle=g.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,i){n&2&&(y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),L("mat-"+i.color),R("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),k("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",j],diameter:[2,"diameter","diameter",j],strokeWidth:[2,"strokeWidth","strokeWidth",j]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,i){if(n&1&&(se(0,Xe,2,8,"ng-template",null,0,ge),r(2,"div",2,1),Z(),r(4,"svg",3),d(5,"circle",4),o()(),ie(),r(6,"div",5)(7,"div",6)(8,"div",7),B(9,8),o(),r(10,"div",9),B(11,8),o(),r(12,"div",10),B(13,8),o()()()),n&2){let g=de(1);m(4),y("viewBox",i._viewBox()),m(),R("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),y("r",i._circleRadius()),m(4),w("ngTemplateOutlet",g),m(2),w("ngTemplateOutlet",g),m(2),w("ngTemplateOutlet",g)}},dependencies:[ue],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return t})();var He=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=P({imports:[ke]})}return t})();function it(t,s){t&1&&(r(0,"div",0),d(1,"mat-spinner"),o())}var G=class t{constructor(s){this.loadingService=s;this.loading$=this.loadingService.loading$}loading$;static \u0275fac=function(e){return new(e||t)(S(E))};static \u0275cmp=l({type:t,selectors:[["app-loading"]],decls:2,vars:3,consts:[[1,"loader"]],template:function(e,n){e&1&&(C(0,it,2,0,"div",0),_(1,"async")),e&2&&M(v(1,1,n.loading$)?0:-1)},dependencies:[fe,He,$e,V],styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:#ffffffb3;z-index:1000}.loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{width:60px!important;height:60px!important}"]})};var q=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-main-layout"]],decls:5,vars:0,consts:[[1,"main-container"]],template:function(e,n){e&1&&(d(0,"app-navbar"),r(1,"main",0),d(2,"app-loading")(3,"router-outlet"),o(),d(4,"app-footer"))},dependencies:[ve,H,Q,G],styles:[".main-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background-color:var(--color-background)}"]})};var U=class t{title=re("ReactiveShop");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&d(0,"app-main-layout")},dependencies:[q],styles:["[_ngcontent-%COMP%]:root{--color-primary: #ffe800;--color-secondary: #212121;--color-background: #f5f5f5;--color-card-background: #fdfdfd;--color-border: #a5a5a52f;--color-accent: #1e88e5;--shadow: 0 2px 3px -1px #21212157;--shadow-sidebar: -1px 0 4px -2px #21212157;--color-success: #2e7d32;--color-error: #d32f2f;--color-text: #212121;--color-text-light: #757575;--navbar-height: 100px}"]})};be(U,Le).catch(t=>console.error(t));
