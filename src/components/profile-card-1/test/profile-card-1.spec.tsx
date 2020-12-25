import { newSpecPage } from '@stencil/core/testing';
import { ProfileCard1 } from '../profile-card-1';

describe('profile-card-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProfileCard1],
      html: `<profile-card-1></profile-card-1>`,
    });
    expect(page.root).toEqualHtml(`
      <profile-card-1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </profile-card-1>
    `);
  });
});
