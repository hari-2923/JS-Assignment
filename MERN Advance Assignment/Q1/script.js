function biggest(){
    let inputValue = document.getElementById("input1").value;
    let arr1 = inputValue.split(",").map(Number);
    let max = Math.max(...arr1);
    document.getElementById("result").innerHTML = `Biggest Element is: ${max}`
}
