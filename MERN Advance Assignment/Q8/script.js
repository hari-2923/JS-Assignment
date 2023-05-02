sumArray = (arr) => {
    let sum = arr.reduce((a,b) => {
        return a + b;
    })
    console.log("Sum of all elements:", sum)
}

let arr1 = [1,3,4,5,6,78,9]
sumArray(arr1)