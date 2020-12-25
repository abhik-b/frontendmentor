import { newSpecPage } from '@stencil/core/testing';
import { GlassDiv } from '../glass-div';

describe('glass-div', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlassDiv],
      html: `<glass-div></glass-div>`,
    });
    expect(page.root).toEqualHtml(`
      <glass-div>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </glass-div>
    `);
  });
});
