import { Component, Host, h } from '@stencil/core';
import * as S from '../nvtui-icon.style';

@Component({
  tag: 'nvtui-icon-plus',
  shadow: false,
})
export class NvtuiIconPlus {
  render() {
    return (
      <Host>
        <svg class={S.Icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
      </Host>
    );
  }
}
