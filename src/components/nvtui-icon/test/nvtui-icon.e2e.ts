import { newE2EPage } from '@stencil/core/testing';

describe('nvtui-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nvtui-icon></nvtui-icon>');

    const element = await page.find('nvtui-icon');
    expect(element).toHaveClass('hydrated');
  });
});
