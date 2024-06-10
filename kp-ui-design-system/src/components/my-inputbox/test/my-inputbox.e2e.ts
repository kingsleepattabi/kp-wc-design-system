import { newE2EPage } from '@stencil/core/testing';

describe('my-inputbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-inputbox></my-inputbox>');

    const element = await page.find('my-inputbox');
    expect(element).toHaveClass('hydrated');
  });
});
