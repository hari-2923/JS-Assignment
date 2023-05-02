function sumMultiples(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    console.log("Sum of Multiples of 3 & 5 in given number is:",sum);
}
  
sumMultiples(50)