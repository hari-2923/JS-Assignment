let secondLrg = () => {

    let arr = [1,0,-1,-2,-49]

    let secondLargest = 0;
    let Largest = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Largest){
            secondLargest = Largest;
            Largest = arr[i];
        }
        else if(arr[i] > secondLargest ){
            secondLargest = arr[i];
        }
    }
    console.log("Second Largest Number: ",secondLargest)

}

secondLrg();