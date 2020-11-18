import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import { format } from '../../utils/utils';
import * as S from './my-component.style';

@Component({
  tag: 'my-component',
  shadow: false,
})
export class MyComponent {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  @Prop() modifier: string = '';

  @Event({bubbles: false}) clicked!: EventEmitter<void>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Host
        class={S.Text}
        onClick={() => this.clicked.emit()}>
        Hello, World! I'm {this.getText()}
      </Host>
    );
  }
}
