import { newSpecPage } from '@stencil/core/testing';
import { NvtUiWrapper } from '../nvtui-wrapper';

describe('nvtui-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NvtUiWrapper],
      html: `<nvtui-wrapper></nvtui-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <nvtui-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nvtui-wrapper>
    `);
  });
});
