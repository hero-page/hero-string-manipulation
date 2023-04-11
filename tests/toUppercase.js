/* eslint-disable */ 


        const {toUppercase} = require("../functions/toUppercase"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the toUppercase function with multiple test cases.
 */
function testToUppercase() {
    const name_of_function = "toUppercase";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const result = toUppercase("hello world");
        if (result === "HELLO WORLD") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Unicode character test
    try {
        const result = toUppercase("héllo wòrld");
        if (result === "HÉLLO WÒRLD") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Empty string test
    try {
        const result = toUppercase("");
        if (result === "") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // No alteration of the original string test
    try {
        const inputString = "hello world";
        const result = toUppercase(inputString);
        if (inputString === "hello world") {
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
    testToUppercase
};