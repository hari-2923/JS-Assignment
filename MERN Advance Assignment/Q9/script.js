function genPrimes(limit) {
    
    let primes = [];

    for (let i = 2; i <= limit; i++) {
      let isPrime = true;

      for (let j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        primes.push(i);
      }
    }
    console.log(primes)
    return primes;
  }

  genPrimes(50)