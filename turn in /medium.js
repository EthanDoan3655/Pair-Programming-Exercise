//medium 1 yoana solved
/*
Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
is a vowel
Example 1:
Input: vowelChecker(‘b’)
Output: ‘This is not a vowel’
Example 2:
Input: vowelChecker(‘a’)
Output: ‘This is a vowel’

rip this didn't work: function vowelChecker(x) {
    let vowels = ["a", "e", "i", "o", "u"];
    if (x === vowels) {
        console.log("This is a vowel")
    } else
        console.log("This is not a vowel")
}

console.log(vowelChecker(["a"]));
*/

function vowelChecker(x) {
    var letter = x.toLowerCase();
    //charAt(0);
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        console.log("Yes, this is a vowel");
    }
    else {
        console.log("No, this is not a vowel");
    }
}
console.log(vowelChecker("e"));


//medium 2 yoana solved
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

//medium 3 Both Yoana and Ethan solved
/*Write a function that takes in two numbers and determines the largest positive integer that divides the two
numbers without a remainder.
Example 1:
Input: gdc_two_numbers(336,360)
Output: 24
Example 2:
Input: gdc_two_numbers(78,126)
Output: 6
Medium
*/

function gcd(a, b) {
    if (a == 0)
        return b;
    if (b == 0)
        return a;

    if (a == b)
        return a;

    if (a > b)
        return gcd(a - b, b);
    return gcd(a, b - a);
}
let a = 336, b = 360;
console.log("GDC " + a + " and " + b + " is " + gcd(a, b));

//medium 4
const car ={
    make: "BMW",
    model: "325i",
    color: "Red",
    year: 1994,
    mileage: 1000,
   driveToWork: function(x) {
       newMileage = this.mileage + x;
       return(`original mileage: ${this.mileage} | Current mileage ${newMileage}`)
   },
   driveAroundTheWorld: function (x) {
       newMileage = this.mileage + x;
       return(`original mileage: ${this.mileage} | Current mileage ${newMileage}`)
   },
   runErrands: function(x) {
       newMileage = this.mileage + x;
       return(`original mileage: ${this.mileage} | Current mileage ${newMileage}`)
   }
   };
   
   console.log(car.driveToWork(33));
   console.log(car.driveAroundTheWorld(24000));
   console.log(car.runErrands(30));
