import { newE2EPage } from '@stencil/core/testing';

describe('profile-card-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<profile-card-1></profile-card-1>');

    const element = await page.find('profile-card-1');
    expect(element).toHaveClass('hydrated');
  });
});
