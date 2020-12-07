import { Component, Host, h, Prop } from '@stencil/core';
import * as S from './nvtui-icon.style';

@Component({
  tag: 'nvtui-icon',
  shadow: false,
})
export class NvtuiIcon {
  @Prop() icon: string;

  render() {
    switch (this.icon) {
      case 'plus': return <Host><nvtui-icon-plus class={S.Icon} /></Host>;
      case 'trash': return <Host><nvtui-icon-trash class={S.Icon} /></Host>;
      default: return <Host />;
    }
  }
}
