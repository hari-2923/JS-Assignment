function ascend_sort() {
    let inputValue = document.getElementById("input1").value
    let inputNumber = inputValue.split(",").map(Number)
    let sortNumber = inputNumber.sort(function(a,b){
        return a - b;
    })
    let result = sortNumber.join(",")
    document.getElementById("output").innerHTML = "Sorted in Acending Order: "+result
}