import{r,c as o,h as a,H as t}from"./p-5de233a5.js";import{c as i,a as c}from"./p-32b13dfd.js";const s=i`
  align-items: center;
  border: 0;
  border-radius: 10px;
  color: rgb(var(--button-color));
  display: flex;
  font-family: var(--font-family-roboto);
  font-size: var(--button-font-size);
  font-weight: 300;
  justify-content: center;
  outline: 0;
  transition:
    0.2s background-color linear,
    0.2s box-shadow linear,
    0.2s color linear;

  /* Styles */
  &.--primary {
    background-color: rgb(var(--primary-color-500));

    &:focus {
      background-color: rgb(var(--primary-color-500));
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-700));
    }

    &:active:not(:hover) {
      background-color: rgb(var(--primary-color-700));
    }

    &:hover {
      background-color: rgb(var(--primary-color-300));
    }

    &:disabled {
      background-color: rgb(var(--disabled-color));
    }
  }

  &.--secondary {
    background-color: transparent;
    box-shadow: inset 0 0 0 3px rgb(var(--primary-color-500));
    color: rgb(var(--primary-color-500));

    &:focus {
      background-color: rgba(var(--primary-color-500), 0.15);
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-700));
      color: rgb(var(--primary-color-700));
    }

    &:active {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-700));
      color: rgb(var(--primary-color-700));
    }

    &:hover {
      background-color: rgba(var(--primary-color-500), 0.5);
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-500));
      color: rgb(var(--primary-color-500));
    }

    &:disabled {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--disabled-color));
      color: rgb(var(--disabled-color));
    }
  }

  &.--tertiary {
    background-color: transparent;
    box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-500));
    color: rgb(var(--tertiary-color-500));

    &:focus {
      background-color: rgba(var(--tertiary-color-500), 0.15);
      box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-700));
      color: rgb(var(--tertiary-color-700));
    }

    &:active {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-700));
      color: rgb(var(--tertiary-color-700));
    }

    &:hover {
      box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-300));
      color: rgb(var(--tertiary-color-300));
    }

    &:disabled {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--disabled-color));
      color: rgb(var(--disabled-color));
    }
  }

  /* Adds a margin between text and icon */
  > .text:not(:empty) ~ .icon {
    margin-left: 8px;
  }

  /* States */
  &:disabled {
    cursor: not-allowed;
  }

  /* Sizes */
  &.--big {
    height: 48px;
    padding: 0 16px;
  }

  &.--normal {
    height: 40px;
    padding: 0 12px;
  }

  &.--small {
    height: 32px;
    padding: 0 8px;
  }

  /* Text transformations */
  &.--uppercase {
    text-transform: uppercase;
  }
`,l=i`
  height: 16px;
  width: 16px;
`,e=class{constructor(a){r(this,a),this.clicked=o(this,"clicked",3)}render(){return a(t,null,a("button",{disabled:this.disabled,class:c(s,{"--big":this.big},{"--normal":this.normal},{"--small":this.small},{"--uppercase":this.uppercase},{"--primary":this.primary},{"--secondary":this.secondary},{"--tertiary":this.tertiary}),type:"button",onClick:()=>this.clicked.emit()},a("span",{class:"text"},a("slot",null)),this.icon?a("nvtui-icon",{icon:this.icon,class:c(l,"icon")}):void 0))}};export{e as nvtui_button}