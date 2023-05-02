function sumOfPrimes(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        sum += i;
      }
    }
    console.log("Sum =",sum);
}
  
sumOfPrimes(100)