import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'profile-card-1',
  styleUrl: 'profile-card-1.css',
  shadow: true,
})
export class ProfileCard1 {
  @Prop() name: string;
  render() {
    return (
      <div class="cardu">
        <h1>Hi {this.name}, 👋</h1>
        <div class="message">
          <slot></slot>
        </div>
      </div>
    );
  }
}
