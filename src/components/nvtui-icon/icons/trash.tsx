import { Component, Host, h } from '@stencil/core';
import * as S from '../nvtui-icon.style';

@Component({
  tag: 'nvtui-icon-trash',
  shadow: false,
})
export class NvtuiIconTrash {
  render() {
    return (
      <Host>
        <svg class={S.Icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
      </Host>
    );
  }
}
