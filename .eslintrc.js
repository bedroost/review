/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

// module.exports = {
//   extends: './node_modules/eslint-config-hackreactor/index.js'
// };

module.exports = {
  extend: 'hackreactor', "airbnb",
  rules: {
    // Rules here will override the 'hackreactor' configuration: http://eslint.org/docs/rules/
  }
};

/*
* Now, you can run ESLint from the command line:
* eslint [options] [file|dir|glob]
*
* For example:
* eslint someFile.js someOtherFile.js
* eslint client/**
* If you don't see any output, your files have passed all the linting rules. In addition to the command line interface, ESLint can be integrated into
* various build systems like Gulp, Grunt, or a pre-commit hook.
*/