//Hack 1: JavaScript - Go Outside Function
function goOutside(temperature, isRaining) {
    // Convert temperature from string to number
    let temp = parseFloat(temperature);

    // Condition to go outside: if below 100 and raining or above 32 and not raining
    if (temp < 100 && isRaining) {
        return true;
    } else if (temp > 32 && !isRaining) {
        return true;
    } else {
        return false;
    }
}

// Example:
console.log(goOutside("75", true));  // true
console.log(goOutside("20", false)); // false





//Hack 2: JavaScript - De Morgan’s Law Simplification
// Expression 1: !(isRaining && isCold)
let stayInside1 = !(isRaining && isCold);
// Apply De Morgan's Law: !isRaining || !isCold
let simplifiedStayInside1 = !isRaining || !isCold;

// Expression 2: !(isRaining || isCold)
let stayInside2 = !(isRaining || isCold);
// Apply De Morgan's Law: !isRaining && !isCold
let simplifiedStayInside2 = !isRaining && !isCold;

// Showing that both simplified expressions are the same
console.log(simplifiedStayInside1 === simplifiedStayInside2); // false (opposite conditions)
