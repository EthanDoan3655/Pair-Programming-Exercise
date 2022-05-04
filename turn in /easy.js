//easy 1:

function splitOddAndEven(numbers) {
    let odd = [];
    let even =[];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            //this means the number is even if it is divisable by 2
            even.push(numbers[i]);
        }else {
            //this is for if it is not divisable by 2 so it is even
            odd.push(numbers[i]);
        }
    }
    const returnObject = {
        odd,
        even,
    
    };
    return returnObject;    
}

console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]))

//easy 2: YOANA solved
let numberArray = [10,18,19,29,33, 35, 47, 66, 83]


/*Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
second string by returning a boolean.
Example:
Input: String 1: So dark the con of man
String 2: Madonna of the Rocks
Output: True
Input: String 1: Things are good
String 2: Dogs eat ants
Output: False
*/
function Compare(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}

console.log(Compare("SoDarkTheConOfMan", "MadonnaOfTheRocks"))
console.log(Compare("Things are good", "Dogs eat ants"))
//couldn't figure out how to make the spaces not count as characters
//hello
