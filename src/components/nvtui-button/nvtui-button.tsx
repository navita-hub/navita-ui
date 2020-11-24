import { cx } from '@emotion/css';
import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
import * as S from './nvtui-button.style';

@Component({
  tag: 'nvtui-button',
  shadow: false,
})
export class NvtuiButton {
  @Prop() size: string = 'default';
  @Prop() uppercase: boolean;

  @Event({bubbles: false}) clicked!: EventEmitter<void>;

  render() {
    return (
      <Host>
        <button
          class={cx(S.Button, `--size-${this.size}`, { '--uppercase': this.uppercase })}
          type="button"
          onClick={() => this.clicked.emit()}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
