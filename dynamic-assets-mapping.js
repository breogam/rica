/**
 * Rica Bouso Theme — Dynamic Assets Mapping
 * Maps font files from assets/dynamic/fonts/ based on config.json font selections.
 */

var defined_mapping = {
  /* Google Fonts are loaded via <link> in the head partial.
     If custom .woff2 files are provided, map them here. */
  fonts: {
    'Fraunces': {
      400: 'assets/dynamic/fonts/fraunces/fraunces-400.woff2',
      '400i': 'assets/dynamic/fonts/fraunces/fraunces-400i.woff2',
      600: 'assets/dynamic/fonts/fraunces/fraunces-600.woff2',
      700: 'assets/dynamic/fonts/fraunces/fraunces-700.woff2'
    },
    'Source Sans 3': {
      400: 'assets/dynamic/fonts/source-sans-3/source-sans-3-400.woff2',
      '400i': 'assets/dynamic/fonts/source-sans-3/source-sans-3-400i.woff2',
      500: 'assets/dynamic/fonts/source-sans-3/source-sans-3-500.woff2',
      600: 'assets/dynamic/fonts/source-sans-3/source-sans-3-600.woff2',
      700: 'assets/dynamic/fonts/source-sans-3/source-sans-3-700.woff2'
    }
  }
};

module.exports = defined_mapping;
