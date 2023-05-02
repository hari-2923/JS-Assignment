function maxmin (arr) {
    arr1 = arr.sort((a,b) => {
        return a - b;
    })
    console.log("Lowest number: ",arr1[0]);
    console.log("Greatest number: ",arr1[arr.length-1]);
}

let a = [1,3,5,6,5,6,78,5]
maxmin(a);