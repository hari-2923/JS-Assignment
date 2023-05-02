function sumEvenOrOddNumbers(n) {
    let sum = 0;
    let isEven = true
    let num2
    if(n%2 == 0){
        isEven = true;
        num2 = "Even"
    }
    else{
        isEven = false;
        num2 = "Odd"
    }
    for (let i = 1; i < n; i++) {
      if (isEven && i % 2 === 0) {
        sum += i;
      } else if (!isEven && i % 2 !== 0) {
        sum += i;
      }
    }
    
    console.log("Entered number",n,"is",num2);
    console.log("Sum is:",sum);
}

sumEvenOrOddNumbers(31)