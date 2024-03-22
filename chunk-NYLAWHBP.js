import{$ as U,A as O,Aa as q,Ba as K,C as d,Ca as y,D as m,Ea as X,Fa as H,Ga as p,H as n,Ha as Z,I as b,Ia as tt,Ja as et,K as A,Ka as nt,L as r,La as it,M as a,Ma as ot,N as l,Na as rt,O as g,Oa as at,P as T,Q as C,Qa as lt,R as B,Ra as ct,S as N,Sa as st,T as V,Ta as pt,U as R,V as h,W as S,X as P,Y as k,Z as D,_ as z,aa as j,ba as u,ca as _,da as w,e as F,ha as L,ia as Y,ja as G,sa as Q,t as E,ta as W,ua as x,w as M,wa as $,z as I,za as J}from"./chunk-LAR3XCHX.js";var Ct=["dialog"],ht=()=>({count:2}),ft=(o,e)=>({x:o,y:e});function _t(o,e){if(o&1&&g(0,"dnd-input-number",25),o&2){let gt=B();r("formControl",gt.platinumFormControl)}}var mt=(()=>{let e=class e{constructor(c,i){this.formBuilder=c,this.currencyService=i,this.inspirationsAvailable=1,this.inspirationsTotal=3,this.currencyValue=0,this.currencyFactor=10,this.ASSET_IMAGE=at,this.destroy$=new F,this.insp1FormControl=new p(!0),this.insp2FormControl=new p(!1),this.insp3FormControl=new p(!1),this.inspirationForm=this.formBuilder.group({insp1:this.insp1FormControl,insp2:this.insp2FormControl,insp3:this.insp3FormControl}),this.platinumFormControl=new p(null),this.goldFormControl=new p(null),this.silverFormControl=new p(null),this.copperFormControl=new p(null),this.currencyForm=this.formBuilder.group({platinum:this.platinumFormControl,gold:this.goldFormControl,silver:this.silverFormControl,copper:this.copperFormControl})}ngOnInit(){this.listenToValueChanges(),this.loadValuesFromStorage()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}showResetConfirmDialog(){this.currencyValue!==0&&this.dialog?.nativeElement.showModal()}closeResetConfirmDialog(){this.dialog?.nativeElement.close()}updateCurrency(c){if(c==="0")this.currencyValue=0,this.closeResetConfirmDialog();else{let i=c==="-"?-1:1;this.currencyValue+=i*(this.copperFormControl.value??0),this.currencyValue+=i*(this.silverFormControl.value??0)*this.currencyFactor,this.currencyValue+=i*(this.goldFormControl.value??0)*Math.pow(this.currencyFactor,2),this.currencyValue+=i*(this.platinumFormControl.value??0)*Math.pow(this.currencyFactor,3)}localStorage.setItem(y.Currency,String(this.currencyValue)),this.currencyForm.reset()}listenToValueChanges(){this.inspirationForm.valueChanges.pipe(E(this.destroy$)).subscribe(()=>{localStorage.setItem(y.Inspiration,JSON.stringify(this.inspirationForm.value)),this.updateAvailableInspirations()})}loadValuesFromStorage(){this.currencyValue=Number.parseInt(localStorage.getItem(y.Currency)??"0",10);let c=localStorage.getItem(y.Inspiration);c&&this.inspirationForm.patchValue(JSON.parse(c))}updateAvailableInspirations(){this.inspirationsAvailable=(this.insp1FormControl.value?1:0)+(this.insp2FormControl.value?1:0)+(this.insp3FormControl.value?1:0)}};e.\u0275fac=function(i){return new(i||e)(b(it),b(q))},e.\u0275cmp=I({type:e,selectors:[["dnd-base"]],viewQuery:function(i,t){if(i&1&&N(Ct,5),i&2){let s;V(s=R())&&(t.dialog=s.first)}},decls:40,vars:40,consts:[["dialog",""],[1,"inspiration-container"],[1,"pill-group",3,"formGroup"],[3,"formControl"],[1,"inspiration-subheader","color-subtitle"],["role","separator","aria-label","Divider",1,"divider"],[1,"currency-container"],[3,"currencyValue","currencyFactor"],[1,"currency-container-form",3,"formGroup"],["currencyDot","platinum","label","BASE.CURRENCY.PLATINUM",3,"formControl",4,"ngIf"],["currencyDot","gold","label","BASE.CURRENCY.GOLD",3,"formControl"],["currencyDot","silver","label","BASE.CURRENCY.SILVER",3,"formControl"],["currencyDot","copper","label","BASE.CURRENCY.COPPER",3,"formControl"],[1,"currency-container-actions"],["text","BASE.ACTIONS.ADD",3,"click","disabled"],["text","BASE.ACTIONS.SUBTRACT",3,"click","disabled"],["text","BASE.ACTIONS.RESET",1,"pt",3,"click","disabled","alternateStyle"],[1,"currency-container-use-platinum"],["label","BASE.CURRENCY.USE_PLATINUM",3,"ngModelChange","ngModel"],[1,"dialog"],[1,"dialog-title","my-0"],[1,"dialog-content"],[1,"dialog-actions"],["text","BASE.ACTIONS.CANCEL",3,"click"],["text","BASE.ACTIONS.RESET",3,"click","alternateStyle"],["currencyDot","platinum","label","BASE.CURRENCY.PLATINUM",3,"formControl"]],template:function(i,t){if(i&1){let s=T();a(0,"div",1)(1,"h3"),h(2),u(3,"translate"),l(),a(4,"form",2),g(5,"dnd-input-inspiration",3)(6,"dnd-input-inspiration",3)(7,"dnd-input-inspiration",3),l(),a(8,"div",4),h(9),u(10,"translate"),l()(),g(11,"div",5),a(12,"div",6)(13,"h3"),h(14),u(15,"translate"),l(),g(16,"dnd-currency-display",7),a(17,"form",8),A(18,_t,1,1,"dnd-input-number",9),u(19,"async"),g(20,"dnd-input-number",10)(21,"dnd-input-number",11)(22,"dnd-input-number",12),l(),a(23,"div",13)(24,"dnd-button",14),C("click",function(){return d(s),m(t.updateCurrency("+"))}),l(),a(25,"dnd-button",15),C("click",function(){return d(s),m(t.updateCurrency("-"))}),l(),a(26,"dnd-button",16),C("click",function(){return d(s),m(t.showResetConfirmDialog())}),l()(),a(27,"div",17)(28,"dnd-input-checkbox",18),z("ngModelChange",function(v){return d(s),D(t.currencyService.usesPlatinum,v)||(t.currencyService.usesPlatinum=v),m(v)}),l()()(),a(29,"dialog",19,0)(31,"h4",20),h(32),u(33,"translate"),l(),a(34,"p",21),h(35),u(36,"translate"),l(),a(37,"div",22)(38,"dnd-button",23),C("click",function(){return d(s),m(t.closeResetConfirmDialog())}),l(),a(39,"dnd-button",24),C("click",function(){return d(s),m(t.updateCurrency("0"))}),l()()()}i&2&&(n(2),S(w(3,22,"BASE.INSPIRATIONS.TITLE",U(36,ht))),n(2),r("formGroup",t.inspirationForm),n(),r("formControl",t.insp1FormControl),n(),r("formControl",t.insp2FormControl),n(),r("formControl",t.insp3FormControl),n(2),P(" ",w(10,25,"BASE.INSPIRATIONS.X_OF_Y_ACTIVE",j(37,ft,t.inspirationsAvailable,t.inspirationsTotal))," "),n(5),S(_(15,28,"BASE.CURRENCY.TITLE")),n(2),r("currencyValue",t.currencyValue)("currencyFactor",t.currencyFactor),n(),r("formGroup",t.currencyForm),n(),r("ngIf",_(19,30,t.currencyService.usesPlatinum$)),n(2),r("formControl",t.goldFormControl),n(),r("formControl",t.silverFormControl),n(),r("formControl",t.copperFormControl),n(2),r("disabled",!t.currencyForm.valid),n(),r("disabled",!t.currencyForm.valid),n(),r("disabled",!t.currencyForm.valid)("alternateStyle",!0),n(2),k("ngModel",t.currencyService.usesPlatinum),n(4),P(" ",_(33,32,"BASE.ACTIONS.RESET")," "),n(3),P(" ",_(36,34,"BASE.CURRENCY.RESET")," "),n(4),r("alternateStyle",!0))},dependencies:[L,J,K,lt,ct,st,tt,X,H,Z,et,nt,Y,Q],styles:["@keyframes _ngcontent-%COMP%_shine-keyframes{to{background-position-x:-500%}}h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-weight:700;text-transform:capitalize;text-wrap:balance;margin-block-start:0}h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{font-size:40px;line-height:60px;margin-top:0}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:32px;line-height:48px}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:24px;line-height:32px}h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%]{font-size:20px;line-height:30px}h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%]{font-size:18px;line-height:26px}h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-size:16px;line-height:24px}.font-weight-black[_ngcontent-%COMP%], .weight-black[_ngcontent-%COMP%]{font-weight:900}.font-weight-bold[_ngcontent-%COMP%], .weight-bold[_ngcontent-%COMP%]{font-weight:700}.font-weight-medium[_ngcontent-%COMP%], .weight-medium[_ngcontent-%COMP%]{font-weight:500}.font-weight-regular[_ngcontent-%COMP%], .weight-regular[_ngcontent-%COMP%]{font-weight:400}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}p[_ngcontent-%COMP%]{font-size:14px;line-height:24px}p.uppercase[_ngcontent-%COMP%]{font-size:16px;line-height:24px}a[_ngcontent-%COMP%]{text-decoration:underline;color:var(--title)}.description[_ngcontent-%COMP%], .description.uppercase[_ngcontent-%COMP%]{font-size:14px;line-height:24px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .input[_ngcontent-%COMP%], .input.uppercase[_ngcontent-%COMP%]{font-size:14px;line-height:22px;font-weight:500}.subtitle[_ngcontent-%COMP%], .subtitle.uppercase[_ngcontent-%COMP%]{font-size:18px;line-height:28px}.caption[_ngcontent-%COMP%], .caption.uppercase[_ngcontent-%COMP%]{font-size:12px;line-height:18px}.tiny[_ngcontent-%COMP%], .tiny.uppercase[_ngcontent-%COMP%]{font-size:10px;line-height:16px}[_nghost-%COMP%]{display:flex}@media only screen and (min-width: 769px){[_nghost-%COMP%]{flex-direction:row;justify-content:flex-start;align-items:stretch;gap:var(--large-spacing)}}@media only screen and (max-width: 768px){[_nghost-%COMP%]{flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:var(--large-spacing)}}[_nghost-%COMP%]   .inspiration-subheader[_ngcontent-%COMP%]{margin-top:var(--medium-spacing)}[_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{width:1px;background:var(--vertical-gradient);margin-inline:var(--small-spacing)}@media only screen and (max-width: 768px){[_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .inspiration-container[_ngcontent-%COMP%]{width:min(2 * var(--pill-width) + var(--medium-spacing) + 2px,100%)}[_nghost-%COMP%]   .inspiration-container[_ngcontent-%COMP%]   .pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;align-items:flex-start;gap:var(--medium-spacing);width:100%;border-radius:var(--pill-border-radius);background-color:var(--btn-bg-color);border-color:var(--btn-border-color);border-width:1px;border-style:solid}[_nghost-%COMP%]   .currency-container-form[_ngcontent-%COMP%], [_nghost-%COMP%]   .currency-container-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--small-spacing);padding-top:var(--large-spacing)}[_nghost-%COMP%]   .currency-container-use-platinum[_ngcontent-%COMP%]{padding-block-start:var(--medium-spacing)}[_nghost-%COMP%]   .currency-container-actions[_ngcontent-%COMP%]{padding-top:calc(var(--large-spacing) + var(--small-spacing))}[_nghost-%COMP%]   .currency-container-actions[_ngcontent-%COMP%]   .pt[_ngcontent-%COMP%]{padding-top:var(--small-spacing)}[_nghost-%COMP%]   .dialog[_ngcontent-%COMP%]{background-color:var(--bg-neutral2);border-radius:var(--pill-border-radius);border-width:1px;border-color:var(--placeholder)}[_nghost-%COMP%]   .dialog-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{color:var(--title)}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{white-space:pre-line;font-size:14px;line-height:24px}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--medium-spacing)}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]   dnd-button[_ngcontent-%COMP%]{width:33%}[_nghost-%COMP%]   [_ngcontent-%COMP%]::backdrop{background-color:var(--bg-neutral2);opacity:.75}"]});let o=e;return o})();var yt=[{path:"",component:mt},{path:"**",redirectTo:""}],ut=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=M({imports:[x.forChild(yt),x]});let o=e;return o})();var Qt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=M({imports:[$,G,ut,pt,ot,rt,W.forChild()]});let o=e;return o})();export{Qt as BaseModule};
