import { newE2EPage } from '@stencil/core/testing';

describe('adt-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<adt-menu></adt-menu>');

    const element = await page.find('adt-menu');
    expect(element).toHaveClass('hydrated');
  });
});
