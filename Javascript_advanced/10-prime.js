function countPrimeNumbers() {
    let count = 0;
  
    function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
  
      const sqrtNum = Math.sqrt(num);
      for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    return count;
  }
  
  function measureExecutionTime() {
    const start = performance.now();
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  
    const end = performance.now();
    const executionTime = end - start;
    console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
  }
  
  measureExecutionTime();
  