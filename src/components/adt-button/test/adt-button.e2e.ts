import { newE2EPage } from '@stencil/core/testing';

describe('adt-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<adt-button></adt-button>');

    const element = await page.find('adt-button');
    expect(element).toHaveClass('hydrated');
  });
});
