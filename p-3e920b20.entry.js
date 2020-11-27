import{r,c as o,h as t,H as s}from"./p-feb2b016.js";import{c as a,a as e}from"./p-32b13dfd.js";const i=a`
  background-color: rgb(var(--primary-color));
  border: 0;
  color: rgb(var(--button-color));
  font-weight: 700;
  outline: 0;

  &:focus {
    box-shadow: 0 0 0 3px rgba(var(--primary-color), 0.5);
  }

  &:hover {
    background-color: rgb(var(--primary-color-hover));
  }

  &.--size-big {
    height: 48px;
    padding: 0 24px;
  }

  &.--size-default {
    height: 40px;
    padding: 0 16px;
  }

  &.--size-small {
    height: 32px;
    padding: 0 16px;
  }

  &.--uppercase {
    text-transform: uppercase;
  }
`,p=class{constructor(t){r(this,t),this.clicked=o(this,"clicked",3),this.size="default"}render(){return t(s,null,t("button",{class:e(i,"--size-"+this.size,{"--uppercase":this.uppercase}),type:"button",onClick:()=>this.clicked.emit()},t("slot",null)))}};export{p as nvtui_button}