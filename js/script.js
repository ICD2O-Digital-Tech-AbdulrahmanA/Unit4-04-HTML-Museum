"use strict";
/**
 * This function checks if the temperature is hot or cold.
 */
function calculate () {
    // turn user input into variables
    let age = parseInt(document.getElementById('age').value);
    let day = select.options[day.selectedIndex].value;
    let discountDay = day == "Tuesday" || "Wednesday";
    let studentAge = (age >= 12 && age <= 21);
    let display = ""
    if (age === "" || age < 0 || age !== Math.floor(age)) {
        display = "Invalid input. Please enter a valid whole number for age.";
    }
        if (age <= 5 || age >= 95) {
            display = ("You can go in for free!");
        } else if (studentAge || discountDay) {
            display = ("You can get a discounted ticket");
        } else {
            display = ("Sorry, please enter a valid age.");
        }


        // process
        document.getElementById('museumAge').innerHTML = display
    }