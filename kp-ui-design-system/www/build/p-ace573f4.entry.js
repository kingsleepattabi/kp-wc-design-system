import{r as e,c as i,h as t}from"./p-f6f239dc.js";var s={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){var e="";for(var i=0;i<arguments.length;i++){var t=arguments[i];if(t){e=n(e,s(t))}}return e}function s(e){if(typeof e==="string"||typeof e==="number"){return e}if(typeof e!=="object"){return""}if(Array.isArray(e)){return t.apply(null,e)}if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){return e.toString()}var s="";for(var h in e){if(i.call(e,h)&&e[h]){s=n(s,h)}}return s}function n(e,i){if(!i){return e}if(e){return e+" "+i}return e+i}if(e.exports){t.default=t;e.exports=t}else{window.classNames=t}})()})(s);const n=s.exports;const h='.checkbox-container{display:flex;align-items:center;cursor:pointer}.checkbox-disabled{cursor:not-allowed;opacity:0.5}input[type="checkbox"]{margin-right:8px}';const d=h;const a=class{constructor(t){e(this,t);this.onChange=i(this,"onChange",7);this.handleToggle=()=>{if(!this.disabled){this.isChecked=!this.isChecked;this.checked=this.isChecked;this.onChange.emit({checked:this.isChecked,value:this.value})}};this.className=undefined;this.id=undefined;this.dataTestId=undefined;this.label=undefined;this.name=undefined;this.value=undefined;this.checked=undefined;this.disabled=undefined;this.isChecked=undefined}componentWillLoad(){this.isChecked=this.checked}render(){const e=n(this.className,"checkbox-container",{"checkbox-checked":this.isChecked,"checkbox-disabled":this.disabled});return t("div",{key:"61828f3d8394c973670273ade03d457d035a6d4a",id:this.id,class:e,"data-testid":this.dataTestId,role:"checkbox","aria-checked":this.isChecked?"true":"false","aria-disabled":this.disabled?"true":"false",onClick:this.handleToggle},t("input",{key:"855764ad3acba124072d8a4a6a8d3f43d0cbf146",type:"checkbox",name:this.name,value:this.value,checked:this.isChecked,disabled:this.disabled,onChange:this.handleToggle}),t("label",{key:"1a6a2cb4453b42e6a49409f05d087bc56b12db6f"},this.label))}};a.style=d;const c='.toggle-container{display:flex;align-items:center;cursor:pointer}.toggle-disabled{cursor:not-allowed;opacity:0.5}input[type="checkbox"]{margin-right:8px}';const r=c;const o=class{constructor(t){e(this,t);this.onChange=i(this,"onChange",7);this.handleToggle=()=>{if(!this.disabled){this.isChecked=!this.isChecked;this.checked=this.isChecked;this.onChange.emit({checked:this.isChecked,value:this.value})}};this.className=undefined;this.id=undefined;this.dataTestId=undefined;this.label=undefined;this.name=undefined;this.value=undefined;this.checked=undefined;this.disabled=undefined;this.isChecked=undefined}componentWillLoad(){this.isChecked=this.checked}render(){const e=n(this.className,"toggle-container",{"toggle-checked":this.isChecked,"toggle-disabled":this.disabled});return t("div",{key:"58cfc6434370c01e5632bc709ea4f6b694c1a26e",id:this.id,class:e,"data-testid":this.dataTestId,role:"switch","aria-checked":this.isChecked?"true":"false","aria-disabled":this.disabled?"true":"false",onClick:this.handleToggle},t("input",{key:"11deeb27e43a720eeb6070149aa729aa1da26874",type:"radio",name:this.name,value:this.value,checked:this.isChecked,disabled:this.disabled,onChange:this.handleToggle}),t("label",{key:"2a4b81cfd3866e3b078da59697a1e385a6e25d95"},this.label))}};o.style=r;export{a as my_checkbox,o as my_toggle};
//# sourceMappingURL=p-ace573f4.entry.js.map