import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-inputbox',
  styleUrl: 'my-inputbox.css',
  shadow: true,
})
export class MyInputbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
