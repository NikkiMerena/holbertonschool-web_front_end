function countPrimeNumbers() {
    // Start measuring the execution time
    const start = performance.now();
  
    // Initialize the count of prime numbers
    let count = 0;
  
    // Helper function to check if a number is prime
    function isPrime(num) {
      // If the number is less than or equal to 1, it is not prime
      if (num <= 1) return false;
  
      // If the number is 2, it is prime
      if (num === 2) return true;
  
      // If the number is divisible by 2, it is not prime
      if (num % 2 === 0) return false;
  
      // Calculate the square root of the number
      const sqrtNum = Math.sqrt(num);
  
      // Check if the number is divisible by any odd number between 3 and the square root of the number
      for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) {
          return false; // The number is divisible, hence not prime
        }
      }
  
      return true; // The number is not divisible, hence prime
    }
  
    // Count the prime numbers from 2 to 100
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++; // Increment the count for each prime number found
      }
    }
  
    // End measuring the execution time
    const end = performance.now();
  
    // Calculate the execution time in milliseconds
    const executionTime = end - start;
  
    // Log the execution time to the console
    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
  
    // Return the count of prime numbers
    return count;
  }
  
  // Call the countPrimeNumbers function
  countPrimeNumbers();
  