function arrayUnion(arr1, arr2) {
    let union = [...arr1];
    for (let i = 0; i < arr2.length; i++) {
      if (!union.includes(arr2[i])) { 
        union.push(arr2[i]); 
      }
    }
    return union;
}
  
  
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let union = arrayUnion(arr1, arr2);
console.log("Union of Arrays:-",union) 