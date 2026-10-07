console.log("java screipt function lesson")
console.log("============")
console.log("hello redha")
console.log("============")

// 2 parts of working with function
// 1- declare the function
// 2- call the function
function greetgedha() {
    console.log("============")
    console.log("hi redha")
    console.log("============")

}
// call the function 
greetgedha()
greetgedha()


function greetStudents(studentName , course){
    console.log("==========")
    console.log("hello "  + studentName + "and i am in " + course)
    console.log("==========")

}
greetStudents("jaafar" , "itce101")
greetStudents ("ahmed" , "itce222")

// Exercise 1:
// 1. write a function addTwoNumbers
// 2. should take in 2 parameters (num1, num2)
// 3. console.log(num1 + num2)
// 4. call the function with two numbers addTwoNumbers(4,6)
function addTwoNumbers(num1 , num2){
    const result = num1 + num2
console.log(result)
return result
}
const value = addTwoNumbers (4 , 8)
console.log(value)
console.log(value * 10)


/*
Exercise 2: greetUser()

Define a function called greetUser. It should take a name and a
time of day (morning, afternoon, evening) and return a personalized
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:

console.log(greetUser('sam','morning'))
*/

console.log(greetUser('sam','morning'))/*
Exercise 2: greetUser()

Define a function called greetUser. It should take a name and a
time of day (morning, afternoon, evening) and return a personalized
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:

console.log(greetUser('sam','morning'))
*/

function greetUser ( name , time) {
    return 'good' + time + ' ' + name
}

function isAdult(age){
    if (age >=18)
        return 'is adult'
    else  {
        return 'minor'

    }
}
console.log( "exercise 2 : " + isAdult(21))

const mult = (num1 , num2) => 
   num1 * num2

// advantage of arrow you dont need a brackets 
// if we have one parameter we can remove ()
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel (string) {
    if (string === 'a' || string === 'e' || string === 'i' || string === 'u' || string ===  'o') {
return true 
    }
else {
    return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));
// a, e, i, o, or u

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name , domain){
     return name + '@' + domain
 
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


function greetUser ( name , time) {
    return 'good' + time + ' ' + name
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree (num1 , num2 , num3 ) {
    
    if (num1 > num2 && num1 > num3)
        return num1
    else if (num2 > num3  && num2 > num1){
        return num2
    }
    else {
        return num3
    }



}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


function calculateTip(bill , trip)  {
    const ammount = bill * trip 
    return ammount / 100
}
console.log('Exercise 7 Result:', calculateTip(50, 20));
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function  convertTemperature(temp , string) {
    if (string ==='C') {
       return (temp * 9/5) + 32; 
    }
    else{
        return (temp - 32) * 5/9;
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/


function basicCalculator(num1, num2, operation) {
    if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'));
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'add'));

    