import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'glass-div',
  styleUrl: 'glass-div.css',
  shadow: true,
})
export class GlassDiv {
  render() {
    return (
      <div class="glassmorphed">
        <slot></slot>
      </div>
    );
  }
}
