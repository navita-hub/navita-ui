import { newE2EPage } from '@stencil/core/testing';

describe('nvtui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nvtui-button></nvtui-button>');

    const element = await page.find('nvtui-button');
    expect(element).toHaveClass('hydrated');
  });
});
