import { newE2EPage } from '@stencil/core/testing';

describe('nvtui-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nvtui-wrapper></nvtui-wrapper>');

    const element = await page.find('nvtui-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
