import { newSpecPage } from '@stencil/core/testing';
import { AdtButton } from '../adt-button';

describe('adt-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdtButton],
      html: `<adt-button></adt-button>`,
    });
    expect(page.root).toEqualHtml(`
      <adt-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </adt-button>
    `);
  });
});
