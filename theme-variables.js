/**
 * Rica Bouso Theme — Theme Variables
 * Outputs CSS custom properties from Publii config values.
 */

var defined_variables = function (params) {
  var accent = params.accentColor || '#c45d3e';
  var bg = params.bgColor || '#f5f1ec';
  var text = params.textColor || '#2a2420';

  return `
    :root {
      --color-accent: ${accent};
      --color-accent-light: ${accent}1a;
      --color-accent-hover: ${accent}33;
      --color-bg: ${bg};
      --color-text: ${text};
      --color-text-muted: ${text}99;
      --color-border: ${text}1a;
      --color-surface: ${bg};
      --color-scrim: rgba(30, 25, 20, 0.55);
      --font-body: 'Source Sans 3', 'Segoe UI', sans-serif;
      --font-heading: 'Fraunces', Georgia, serif;
      --font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    }

    [data-theme="dark"] {
      --color-bg: hsl(30, 8%, 10%);
      --color-text: hsl(35, 15%, 90%);
      --color-text-muted: hsl(35, 10%, 65%);
      --color-border: hsl(30, 10%, 25%);
      --color-surface: hsl(28, 8%, 13%);
      --color-scrim: rgba(10, 8, 5, 0.65);
    }
  `;
};

module.exports = defined_variables;
