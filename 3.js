/**
 * Created by Michael on 2016-04-06.
 */
function palindrome(myString){

    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    var checkPalindrome = removeChar.split('').reverse().join('');

    if(removeChar === checkPalindrome){

        console.log(myString + " is a palindrome.");
    }else{

        console.log(myString + " is not a palindrome.");
    }
}
palindrome('"Oh who was it I saw, oh who?"');
palindrome('"Madam"');

