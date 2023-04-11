/* eslint-disable */ 


        const {toLowercase} = require("../functions/toLowercase"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test the function toLowercase
 */
function testToLowercase() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "toLowercase";

    // Test case 1: Check basic lowercasing
    try {
        const input1 = "HELLO WORLD";
        const output1 = toLowercase(input1);
        if (output1 === "hello world") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2: Check empty string
    try {
        const input2 = "";
        const output2 = toLowercase(input2);
        if (output2 === "") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 3: Check Unicode characters
    try {
        const input3 = "HELLO 世界";
        const output3 = toLowercase(input3);
        if (output3 === "hello 世界") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 4: Check original string remains unaltered
    try {
        const input4 = "TOLOWERcAse";
        const output4 = toLowercase(input4);
        if (input4 === "TOLOWERcAse") {
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
    testToLowercase
};