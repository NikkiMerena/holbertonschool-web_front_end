function countPrimeNumbers() {
    let primes = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        primes++; // Increment the count for each prime number found
      }
    }
    return primes; // Return the total count of prime numbers
  }
  
  function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false; // The number is divisible, hence not prime
      }
    }
    return num > 1; // The number is not divisible, hence prime
  }
  
  const t0 = performance.now(); // Start measuring the execution time
  
  setTimeout(function () {
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers(); // Call the countPrimeNumbers function 100 times
    }
    const t1 = performance.now(); // End measuring the execution time
    console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`); // Log the execution time to the console
  }, 0);
  