import { newSpecPage } from '@stencil/core/testing';
import { NvtuiButton } from '../nvtui-button';

describe('nvtui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NvtuiButton],
      html: `<nvtui-button></nvtui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <nvtui-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nvtui-button>
    `);
  });
});
