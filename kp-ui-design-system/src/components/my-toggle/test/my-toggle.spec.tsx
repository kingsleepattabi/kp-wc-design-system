import { newSpecPage } from '@stencil/core/testing';
import { MyToggle } from '../my-toggle';

describe('my-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyToggle],
      html: `<my-toggle></my-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <my-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-toggle>
    `);
  });
});
