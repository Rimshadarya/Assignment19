// Chapter35 to 38
// Question1

// function currentdateandTime (){
//     var date = new Date();
//     document.write(date)
// }
// currentdateandTime();

// Question2
// function greet(){
// const firstName = prompt("Enter your first name");
// const lastName = prompt("Enter your  last name");
// const fullName = firstName + ' ' + lastName;
// const greeting = 'Hello, ' + fullName + '!';
// console.log(greeting);
// }
// greet();

// Question3

// function sum (){
//     var num1 = prompt("Enter any number");
//     var num2 = prompt("Enter one more number");
//     var add = num1 + num2;
//     console.log(add);
// }
// sum();

// Question4

/*function calc(firstVal, secondVal, operator) {
    if (operator === "+") {
      return firstVal + secondVal;
    } else if (operator === "-") {
      return firstVal - secondVal;
    } else if (operator === "*") {
      return firstVal * secondVal;
    } else if (operator === "/") {
      return firstVal / secondVal;
    } else if (operator === "%") {
      return firstVal % secondVal;
    } else {
      return "Invalid Operator";
    }
  }
  
  console.log(
    calc(
      +prompt("Enter first Value"),
      +prompt("Enter Second Value"),
      prompt("Enter operator")
    )
  );
*/

// Question5

// function square(number) {
//     return number * number;
// }

// const result = square(10);
// console.log("The square of 10 is:", result); 

// Question6

// function factorialIterative(n) {
//     if (n < 0) return undefined; 
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log("Factorial of 5 (iterative):", factorialIterative(5));

// Question7

// function displayCounting() {
//     const start = prompt("Enter number");
//     const end = prompt("enter Number2")
//     let counting = '';

//     if (start < end) {
//         for (let i = start; i <= end; i++) {
//             counting += i + (i < end ? ', ' : ''); 
//         }
//     } else {
//         counting = 'Start number should be less than End number.';
//     }
//     console.log(counting);
// }
// displayCounting();

// // Question8

// function calculateHypotenuse() {
//     const base = prompt("Enter base");
//     const perpendicular = prompt("Enter perpendicular");
//     function calculateSquare(value) {
//         return value * value;
//     }

//     const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     document.write(hypotenuse)}
// calculateHypotenuse();

// Question9

// function calculateAreaWithValues(width, height) {
//     const area = width * height;
//     document.write(area);
// }
// function calculateAreaWithVariables() {
//     const width = prompt("Enter width");
//     const height = prompt("Enter height");
//     const area = width * height;
//     document.write(area);
// }
// calculateAreaWithVariables();

// Question10

// function checkPalindrome() {
//     const str =prompt("Enter any word") 
//     const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase(); 
//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     const isPalindrome = cleanedStr === reversedStr;

//     document.write(isPalindrome)
//         ? `'${str}' is a palindrome.` 
//         : `'${str}' is not a palindrome.`;
// }
// checkPalindrome();

// Question11

// function capitalizeFirstLetter() {
//     const str = prompt("Enter any word");
//     const capitalizedStr = str
//         .split(' ') 
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//         .join(' '); 
//     document.write(capitalizedStr)}
// capitalizeFirstLetter();

// Question12

// function findLongestWord() {
//     const str =prompt("Enter any word");
//     const words = str.split(' '); 
//     let longestWord = '';

   
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     document.write(longestWord)}
// findLongestWord();

// Question13

// function countLetterOccurrences() {
//     const str = prompt("ENter any word");
//     const letter =prompt("ENter any letter");
//     const result = "";
//     if (letter.length !== 1) {
//         document.write(result)
//         return;
//     }

//     let count = 0;

//     for (const char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }

//     document.write(count)}
// countLetterOccurrences();

// Chapter 38 to 42

// Question1

// function power(a, b) {
//     return Math.pow(a, b); 
// }
// function calculatePower() {
//     const a = prompt("Write any value for base");
//     const b = prompt("Write any value for perpendicular");

//     // Validate inputs
//     if (isNaN(a) || isNaN(b)) {
//         document.write(a,b)
//         return;
//     }
//     const result = power(a, b);
//     document.write(result)
// };
// calculatePower();

// Question2

// function checkLeapYear() {
//     const year = prompt("Enter year")

//     if (isNaN(year) || year < 0) {
//         document.write(year)
//         return;
//     }
//     let isLeap = false;
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         isLeap = true;
//     }

//     document.write(isLeap)
//         ? `${year} is a leap year.` 
//         : `${year} is not a leap year.`;
// }
// checkLeapYear();

// Question3
// function calculateArea() {
//     const a = prompt("Value for side A");
//     const b = prompt("Value for side B");
//     const c = prompt("Value for side C");

//     if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//         document.write(a,b,c)
//         return;
//     }

//     const S = (a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     document.write(S,area)
// }
// calculateArea();

// // Question4
// function calculateAverage(marks) {
//     const total = marks.reduce((acc, mark) => acc + mark, 0);
//     return total / marks.length;
// }
// function calculatePercentage(marks) {
//     const total = marks.reduce((acc, mark) => acc + mark, 0);
//     return (total / (marks.length * 100)) * 100;
// }
// function mainFunction() {
//     const marks1 =prompt("Enter first number");
//     const marks2 =prompt("Enter second number");
//     const marks3 =prompt("Enter third number");
//     document.write(marks1,marks2,marks3)
// }
// if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || 
// marks1 < 0 || marks1 > 100 || 
// marks2 < 0 || marks2 > 100 || 
// marks3 < 0 || marks3 > 100) {
// // document.write(marks1,marks2,marks3)return;
// }
// const average = calculateAverage(marks);
// const percentage = calculatePercentage(marks);
// document.write(average,percentage);

// mainFunction();

// Question5

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; 
// }
// var str = prompt("Enter any number");
// var char = prompt("Enter second number");
// function findIndex() {
//     document.write(str)
//     document.write(char)
//     // Validate input
//     if (char.length !== 1) {
//         document.write(str,char)
//         return;
//     }

//     const index = customIndexOf(str, char);
//     document.write(index)
// }
// findIndex();

// Question6

// function removeVowels(sentence) {
//   const vowels = /[aeiouAEIOU]/g;
//   return sentence.replace(vowels, '');
// }

// const sentence = prompt("Write any sentence?");
// const result = removeVowels(sentence);
// console.log(result); 

// Question7

// function countVowelPairs(text) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < text.length - 1; i++) {
//       const pair = text[i] + text[i + 1];

//       switch (pair) {
//           case "aa":
//           case "ae":
//           case "ai":
//           case "ao":
//           case "au":
//           case "ea":
//           case "ee":
//           case "ei":
//           case "eo":
//           case "eu":
//           case "ia":
//           case "ie":
//           case "ii":
//           case "io":
//           case "iu":
//           case "oa":
//           case "oe":
//           case "oi":
//           case "oo":
//           case "ou":
//           case "ua":
//           case "ue":
//           case "ui":
//           case "uu":
//               count++;
//               break;
//       }
//   }

//   return count;
// }

// const sentence = "Please read this application and give me gratuity";
// const result = countVowelPairs(sentence);
// console.log(result); // Output: 3

// Question8

// function convertDistance(distanceKm) {
//   const distanceInMeters = distanceKm * 1000;
//   const distanceInFeet = distanceKm * 3280.84;
//   const distanceInInches = distanceKm * 39370.1;
//   const distanceInCentimeters = distanceKm * 100000;

//   printDistances(distanceInMeters, distanceInFeet, distanceInInches, distanceInCentimeters);
// }

// function printDistances(meters, feet, inches, centimeters) {
//   console.log(`Distance in meters: ${meters.toFixed(2)} m`);
//   console.log(`Distance in feet: ${feet.toFixed(2)} ft`);
//   console.log(`Distance in inches: ${inches.toFixed(2)} in`);
//   console.log(`Distance in centimeters: ${centimeters.toFixed(2)} cm`);
// }

// // Example usage
// const distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
// convertDistance(distanceKm);

// Question9

// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 40;
//   const overtimeRate = 12.00;
//   let overtimePay = 0;

//   if (hoursWorked > regularHours) {
//       const overtimeHours = hoursWorked - regularHours;
//       overtimePay = overtimeHours * overtimeRate;
//   }

//   return overtimePay;
// }

// const hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);

// Question10

// function currencyNotes(){
//   var first = amount*100;
//   var notes100 = Math.floor(first/100);
//   var remainingAfter100 = first % 100;
//   const notes50 = Math.floor(remainingAfter100 / 50);
//   const remainingAfter50 = remainingAfter100 % 50;
//   const notes10 = Math.floor(remainingAfter50 / 10);
//   console.log(`Total amount: Rs. ${first}`);
//   console.log(`Number of 100 notes: ${notes100}`);
//   console.log(`Number of 50 notes: ${notes50}`);
//   console.log(`Number of 10 notes: ${notes10}`);
// }
// const amount = parseInt(prompt("Enter the amount to withdraw in hundreds:"));
// currencyNotes(amount);

// Chapter 43 to 48

// function deleteRow(button) {
 
//   const row = button.parentNode.parentNode;

//   row.parentNode.removeChild(row);
// }

// Chapter31-34(Date&Time)

// Question1

// var date = new Date();

// console.log(date);

// Quetsion2

// var str = new Date().toString();

// console.log(str);

// Question3

// Question4

// let d = new Date(); 
// let dayIndex = d.getDay();
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// alert(dayNames[dayIndex]);