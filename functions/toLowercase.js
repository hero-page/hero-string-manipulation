/* eslint-disable */ 

/**
 * Convert the input string to lowercase accommodating various character sets (ASCII, Unicode) and empty strings.
 *
 * @param {string} inputString - The input string to convert to lowercase.
 * @return {string} The converted lowercase string or an empty string if the input was empty.
 *
 * @example
 * // returns 'hello world'
 * toLowercase('HELLO WORLD');
 * // returns ''
 * toLowercase('');
 */
function toLowercase(inputString) {
    return inputString.toLowerCase();
}

module.exports = {
    toLowercase
};