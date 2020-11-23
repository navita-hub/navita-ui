import { Component, Host, h } from '@stencil/core';
import * as S from './nvtui-wrapper.style';

@Component({
  shadow: true,
  styleUrl: '../../scss/global.scss',
  tag: 'nvtui-wrapper',
})
export class NvtUiWrapper {
  render() {
    return (
      <Host class={S.Wrapper}>
        <slot />
      </Host>
    );
  }
}
