function isArmstrong(num) {
    let sum = 0;
    let str = num.toString();
    let power = str.length;
    
    for(let i = 0; i < str.length; i++) {
      let digit = parseInt(str[i]);
      sum += Math.pow(digit, power);
    }
    if(sum === num){
        console.log(num,"is an Armstrong Number")
    }
    else{
        console.log(num,"is not an Armstrong Number")
    }
}

isArmstrong(120)