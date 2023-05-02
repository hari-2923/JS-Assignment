
function evenSum(n){
    let sum = 0;
    for(var i = 2; i < n; i+=2){
        sum += i;
    }
    return sum;
}

let sum1 = evenSum(20);
console.log("Sum: " + sum1);