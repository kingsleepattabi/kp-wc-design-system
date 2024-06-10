import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'kp-ui-design-system',
  outputTargets: [
    // angularOutputTarget({
    //   componentCorePackage: 'kp-ui-design-system',
    //   directivesProxyFile: 'dist/angular/proxies.js', // Output Angular proxies in the library
    // }),
    // reactOutputTarget({
    //   componentCorePackage: 'kp-ui-design-system',
    //   proxiesFile: 'dist/react/proxies.js', // Output React proxies in the library
    // }),
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
    {
        type: 'dist',
       
      }
  ],
  testing: {
    browserHeadless: "new",
  },
};
