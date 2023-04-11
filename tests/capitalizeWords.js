/* eslint-disable */ 


        const {capitalizeWords} = require("../functions/capitalizeWords"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for capitalizeWords.
 */
function testCapitalizeWords() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "capitalizeWords";

    try {
        const input = '  hello   world  ';
        const expectedOutput = '  Hello   World  ';
        if (capitalizeWords(input) === expectedOutput) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = 'The quick brown   fox jumps  ';
        const expectedOutput = 'The Quick Brown   Fox Jumps  ';
        if (capitalizeWords(input) === expectedOutput) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const input = '';
        const expectedOutput = '';
        if (capitalizeWords(input) === expectedOutput) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testCapitalizeWords
};