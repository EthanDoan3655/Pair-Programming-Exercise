//medium 1 yoana solved

function vowelChecker(x){
    let firstCharacter = x.toLowerCase();
     if (firstCharacter === "a" || firstCharacter === "e" || firstCharacter === "i" || firstCharacter === "o" || firstCharacter === "u") {
        console.log("is a vowel!");
     }
     else {
      console.log("NOT a vowel");
     }
    }

console.log(vowelChecker("z"))
//medium 2 yoana solved
function Compare(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}
console.log(Compare("SoDarkTheConOfMan", "MadonnaOfTheRocks"))
console.log(Compare("Things are good", "Dogs eat ants"))
//medium 3 
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(336, 360));
  console.log(gcd_two_numbers(78, 126));


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