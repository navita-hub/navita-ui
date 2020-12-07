import { cx } from '@emotion/css';
import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
import * as S from './nvtui-button.style';

@Component({ tag: 'nvtui-button' })
export class NvtuiButton {
  // Size props
  @Prop() big: boolean;
  @Prop() normal: boolean;
  @Prop() small: boolean;

  // Type props
  @Prop() primary: boolean;
  @Prop() secondary: boolean;
  @Prop() tertiary: boolean;

  // State props
  @Prop() disabled: boolean;

  // Text transformation props
  @Prop() uppercase: boolean;

  // Icons
  @Prop() icon: string;

  @Event({bubbles: false}) clicked!: EventEmitter<void>;

  render() {
    return (
      <Host>
        <button
          disabled={this.disabled}
          class={cx(S.Button,
            { '--big': this.big },
            { '--normal': this.normal },
            { '--small': this.small },
            { '--uppercase': this.uppercase },
            { '--primary': this.primary },
            { '--secondary': this.secondary },
            { '--tertiary': this.tertiary },
          )}
          type="button"
          onClick={() => this.clicked.emit()}
        >
          <span class="text">
            <slot />
          </span>
          {this.icon
            ? (
              <nvtui-icon
                icon={this.icon}
                class={cx(S.Icon, 'icon')}
              />
            )
            : undefined}
        </button>
      </Host>
    );
  }
}
