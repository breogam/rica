/**
 * Rica Bouso Theme — Visual Override
 * Outputs CSS override rules appended to style.css based on config options.
 */

var defined_overrides = function (params) {
  var css = '';

  if (params.accentColor) {
    css += `
      :root {
        --color-accent: ${params.accentColor};
        --color-accent-light: ${params.accentColor}1a;
        --color-accent-hover: ${params.accentColor}33;
      }
    `;
  }

  if (params.bgColor) {
    css += `
      :root {
        --color-bg: ${params.bgColor};
        --color-surface: ${params.bgColor};
      }
    `;
  }

  if (params.textColor) {
    css += `
      :root {
        --color-text: ${params.textColor};
        --color-text-muted: ${params.textColor}99;
        --color-border: ${params.textColor}1a;
      }
    `;
  }

  if (!params.enableGrain) {
    css += `
      .grain-overlay::before,
      .hero__grain { display: none; }
    `;
  }

  if (!params.enableScrollAnimations) {
    css += `
      [data-reveal] {
        opacity: 1 !important;
        transform: none !important;
      }
    `;
  }

  if (!params.newsletterUrl) {
    css += `
      .newsletter-section { display: none; }
    `;
  }

  return css;
};

module.exports = defined_overrides;
