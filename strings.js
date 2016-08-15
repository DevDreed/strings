let results = document.getElementById("results");

function reversal(inputStr) {
    return inputStr.split("").reverse().join("");
}

function alphabits(inputStr) {
    return inputStr.split("").sort().join("");
}

function palindrome(inputStr) {
    return (inputStr === reversal(inputStr)) ? "Your string is a palidrome" : "";
}

var testString = "radar";

function outputValues() {
    results.innerHTML = "";
    results.innerHTML += "<div>" + reversal(testString) + "</div>"
    results.innerHTML += "<div>" + alphabits(testString) + "</div>"
    results.innerHTML += "<div>" + palindrome(testString) + "</div>"
}

let testBtn = document.getElementById("testbtn");
let testInput = document.getElementById("testInput");

testBtn.addEventListener("click", function() {
    testString = testInput.value;
    outputValues();
}, false);

testInput.addEventListener("keydown", function() {
    if (window.event.keyCode == '13') {
        testString = testInput.value;
        outputValues();
    }
}, false);
