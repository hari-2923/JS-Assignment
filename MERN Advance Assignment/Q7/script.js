function removeDuplicates(arr) {
    let arr2 = arr.filter((a, index) => arr.indexOf(a) === index);
    console.log(arr2)
  }
  

let num1 = [1,5,7,3,6,3,5,7,4,5,6,3,10]
removeDuplicates(num1);