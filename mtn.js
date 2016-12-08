// TALLEST MOUNTAIN
// console.log('#1 Tallest Mountain');
//
// let height = [3, 13, 88, 11];
// let tallest = 0;
//
// for (let i = 0; i < height.length; i++) {
//   // console.log(i);
//
//   if (tallest < height[i]) {
//     tallest = height[i];
//     console.log(tallest);
//   }
// }

// // HANGMAN LITE
// console.log('#2 Hangman Lite');
//
// let word = "Maple";
// let letter = "m";
//
// for (let i = 0; i < word.length; i ++) {
//  if (word[i] === letter) {
//    console.log("Yea the letter " + letter + " exists one time in my word");
//  } else {
//    console.log("Try again loser");
//  }
// }

// 1) Look through each letter
// 2) If the letter exists, how many times does it exist.
// 3)Increase the counter by one.



// CHEROKEE HARE
console.log("#3 Cherokee Hare");

let startingPop = 200;
let birthRate = (.1 * 100);
let numberOfWeeks = 5;

for (let startingPop = 0; startingPop < numberOfWeeks; startingPop++) {
  startingPop = birthRate + startingPop;
  population = startingPop * numberOfWeeks;
  console.log(startingPop);
  console.log("There will be " + population + " Cherokee Hares in " + numberOfWeeks + " number of weeks.");
}


//CHANGE MACHINE
console.log("Change Machine");
let amount = 47;
let bills = [1, 5, 10, 20];
// let twenties = bills[i] * 20%;
//
for (var i = 0; i < bills.length; i++) {
  bills[i]

  if ((bills[i]%20) === 0) {
    console.log("20s can go in here");
  } else if ((bills[i]%10 === 0)){
    console.log("Tens can go in here");
  } else if ((bills[i]%5 === 0)){
    console.log("Fives work too");
  } else if ((bills[i]%1 === 0)){
    console.log("Ones work too");
  }
}


// Try using a .map operation
// Fifth operator called Modulus.
// 12%5 = 2


// FINDING PALINDROMES
//
// console.log("Palindromes");
//     let word = "level";
//     let minus = (word.length - 1);
//
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] === word[minus]) {
//         console.log( word[i] + " and " + word[minus] + " are the two letters that mirror each each other");
//         console.log("This is Palindromic!");
//       } else {
//         console.log("Not a Palindrome");
//       }
//         minus = minus - 1;
//     }
//
//
//
//     // CLASS EXAMPLE:
//
//     let word = "amma";
//     let end = word.length - 1;
//     let palindrome = true; //whether the word is a palindrome
//
//     for (var i = 0; i < array.length; i++) {
//       word[i]
//     }
