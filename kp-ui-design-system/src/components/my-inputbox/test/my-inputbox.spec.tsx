import { newSpecPage } from '@stencil/core/testing';
import { MyInputbox } from '../my-inputbox';

describe('my-inputbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyInputbox],
      html: `<my-inputbox></my-inputbox>`,
    });
    expect(page.root).toEqualHtml(`
      <my-inputbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-inputbox>
    `);
  });
});
