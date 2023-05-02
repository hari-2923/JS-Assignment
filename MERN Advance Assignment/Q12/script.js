function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
    str1 = str.split('').reverse().join('')
    if(str === str1){
        console.log(str,"is Palindrome");
    }
    else{
        console.log(str,"is not Palindrome");
    }
}

let string = "SelfStack"
isPalindrome(string)