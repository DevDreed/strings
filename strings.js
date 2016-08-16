let results = document.getElementById("results");
let testBtn = document.getElementById("testbtn");
let testInput = document.getElementById("testinput");

function reversal(inputStr) {
    return inputStr.split("").reverse().join("");
}

function alphabits(inputStr) {
    return inputStr.split("").sort().join("");
}

function palindrome(inputStr) {
    return (inputStr === reversal(inputStr)) ? "Your string is a palidrome!" : "";
}

var testString = "radar";

function outputValues() {
    testString = testInput.value;
    results.innerHTML = "";
    results.innerHTML += "<div>" + reversal(testString) + "</div>"
    results.innerHTML += "<div>" + alphabits(testString) + "</div>"
    results.innerHTML += "<div>" + palindrome(testString) + "</div>"
}
