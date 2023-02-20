import { newSpecPage } from '@stencil/core/testing';
import { AdtMenu } from '../adt-menu';

describe('adt-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdtMenu],
      html: `<adt-menu></adt-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <adt-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </adt-menu>
    `);
  });
});
