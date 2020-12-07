import { newSpecPage } from '@stencil/core/testing';
import { NvtuiIcon } from '../nvtui-icon';

describe('nvtui-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NvtuiIcon],
      html: `<nvtui-icon></nvtui-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <nvtui-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nvtui-icon>
    `);
  });
});
