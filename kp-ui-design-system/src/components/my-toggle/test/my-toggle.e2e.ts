import { newE2EPage } from '@stencil/core/testing';

describe('my-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-toggle></my-toggle>');

    const element = await page.find('my-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
