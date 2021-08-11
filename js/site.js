//Get the entered value
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnOBJ = checkForPalindrome(userString)

    displayMessage(returnOBJ);
}


//Test for palindrome
function checkForPalindrome(userString){
    //set to lower case
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]+/gi;
    userString = userString.replace(regex, '');

    //Reverse string
    let reverseString = [];
    let returnOBJ = {};

    for (let i = userString.length - 1;i >=0; i-- ){
        reverseString += userString[i];
    }

    if (reverseString == userString){
        returnOBJ.msg = "Well Done!!  You entered a palindrome!";
    } else {
        returnOBJ.msg = "Sorry!! You did not enter a palindrome!";
    }

    returnOBJ.reversed = reverseString;

    return returnOBJ;
}


//display result message
function displayMessage(returnOBJ){
    document.getElementById("alertHeader").innerHTML = returnOBJ.msg;
    document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnOBJ.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}