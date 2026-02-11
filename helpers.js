/**
 * Rica Bouso Theme — Custom Handlebars Helpers
 * Publii CMS theme helper registration
 */

var defined_helpers = {

  /**
   * Estimates reading time based on word count (200 WPM).
   * Usage: {{readingTime @post.text}}
   */
  readingTime: function (content) {
    if (!content || typeof content !== 'string') {
      return '1 min read';
    }
    var words = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
    var minutes = Math.max(1, Math.round(words / 200));
    return minutes + ' min read';
  },

  /**
   * Returns the current year.
   * Usage: {{currentYear}}
   */
  currentYear: function () {
    return new Date().getFullYear().toString();
  },

  /**
   * Block helper: renders block if a === b.
   * Usage: {{#ifEquals status "published"}}...{{/ifEquals}}
   */
  ifEquals: function (a, b, options) {
    if (a === b) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  /**
   * Truncates text to a given character length with ellipsis.
   * Usage: {{truncate excerpt 120}}
   */
  truncate: function (text, length) {
    if (!text || typeof text !== 'string') {
      return '';
    }
    length = parseInt(length, 10) || 120;
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length).replace(/\s+\S*$/, '') + '\u2026';
  },

  /**
   * Formats a date string.
   * Usage: {{formatDate date "MMMM D, YYYY"}} or {{formatDate date "MMM YYYY"}}
   */
  formatDate: function (date, format) {
    if (!date) {
      return '';
    }
    var d = new Date(date);
    if (isNaN(d.getTime())) {
      return '';
    }

    var months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var monthsShort = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();

    if (typeof format !== 'string') {
      format = 'MMMM D, YYYY';
    }

    if (format === 'MMM YYYY') {
      return monthsShort[month] + ' ' + year;
    }

    return months[month] + ' ' + day + ', ' + year;
  }
};

module.exports = defined_helpers;
