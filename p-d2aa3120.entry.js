import{r as s,c as t,h as r,H as o}from"./p-7925f649.js";import{c as i}from"./p-32b13dfd.js";const e=i`
  color: var(--teste);
  display: flex;
`,c=class{constructor(r){s(this,r),this.clicked=t(this,"clicked",3),this.modifier=""}getText(){return(this.first||"")+((s=this.middle)?" "+s:"")+((t=this.last)?" "+t:"");var s,t}render(){return r(o,{class:e,onClick:()=>this.clicked.emit()},"Hello, World! I'm ",this.getText())}};export{c as my_component}