import { newE2EPage } from '@stencil/core/testing';

describe('adt-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<adt-text-field></adt-text-field>');

    const element = await page.find('adt-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
