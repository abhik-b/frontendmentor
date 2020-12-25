import { newE2EPage } from '@stencil/core/testing';

describe('glass-div', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<glass-div></glass-div>');

    const element = await page.find('glass-div');
    expect(element).toHaveClass('hydrated');
  });
});
