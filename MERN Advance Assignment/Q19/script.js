function sumOfDigits(n) {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
}

console.log("Sum of the digits of given number",sumOfDigits(12345));