function reverse(){
    let inputValue = document.getElementById("input1").value;
    let arr = inputValue.split("").reverse().join("")
    document.getElementById("result").innerHTML = `Reveresed array ${arr}`
}