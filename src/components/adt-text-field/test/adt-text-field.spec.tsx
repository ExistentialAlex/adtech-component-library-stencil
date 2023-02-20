import { newSpecPage } from '@stencil/core/testing';
import { AdtTextField } from '../adt-text-field';

describe('adt-text-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdtTextField],
      html: `<adt-text-field></adt-text-field>`,
    });
    expect(page.root).toEqualHtml(`
      <adt-text-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </adt-text-field>
    `);
  });
});
