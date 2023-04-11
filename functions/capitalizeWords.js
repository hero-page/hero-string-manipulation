/* eslint-disable */ 

/**
 * Capitalize the first letter of each word in the input string.
 *
 * @param {string} input - The input string to capitalize.
 * @return {string} The input string with the first letter of each word capitalized.
 *
 * @example
 * capitalizeWords('  hello   world  '); // Returns '  Hello   World  '
 */
function capitalizeWords(input) {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

module.exports = {
    capitalizeWords
};