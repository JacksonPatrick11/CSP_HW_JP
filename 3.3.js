//Hack 1: Mathematical Operations in JavaScript

// Function to add two parameters
function add(a, b) {
    // Adding a and b
    return a + b;
}

// Function to subtract two parameters
function subtract(a, b) {
    // Subtracting b from a
    return a - b;
}

// Function to divide two parameters
function divide(a, b) {
    // Dividing a by b, assuming b is not zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Division by zero is undefined!";
    }
}

// Function to find the modulus of two parameters
function modulus(a, b) {
    // Finding the remainder when a is divided by b
    return a % b;
}

// Function to raise a to the power of b
function power(a, b) {
    // Raising a to the power of b
    return Math.pow(a, b);
}

// Example usage:
console.log(add(10, 5));          // Output: 15
console.log(subtract(10, 5));     // Output: 5
console.log(divide(10, 5));       // Output: 2
console.log(modulus(10, 3));      // Output: 1
console.log(power(2, 3));         // Output: 8



//Hack 2: Function for f(x) = 5x + 2
// Function to calculate the point on the graph of f(x) = 5x + 2
function findPoint(x) {
    // Applying the equation y = 5x + 2 to find the y value for the given x
    let y = 5 * x + 2;
    return y;
}

// Example usage:
console.log(findPoint(3));   // Output: 17 (since f(3) = 5 * 3 + 2 = 17)
console.log(findPoint(4.5)); // Output: 24.5 (since f(4.5) = 5 * 4.5 + 2 = 24.5)



///Hack 1:
//There are five separate functions, each performing a different mathematical operation: add, subtract, divide, modulus, and power. Each function takes in two parameters (assumed to be numbers) and performs the operation.
//For division, I’ve added a check to prevent division by zero, returning a message if the second parameter is zero.
//Hack 2:
//The function findPoint(x) computes the y value of the linear function f(x) = 5x + 2 for any given x (which can be an integer or a decimal).
//The function returns the computed y value based on the input x.







