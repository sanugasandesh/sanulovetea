// Helper function to calculate the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Helper function to check if a number is a prime number
  function isPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  // Helper function to convert a string to uppercase
  function toUpperCase(string) {
    return string.toUpperCase();
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Factorial of 5:", factorial(5)); // Output: 120
    console.log("Is 7 a prime number?", isPrime(7));   // Output: true
    console.log("Is 8 a prime number?", isPrime(8));   // Output: false
  
    console.log("Uppercase of 'hello':", toUpperCase('hello')); // Output: 'HELLO'
  }
  
  // Call the main function
  main();  