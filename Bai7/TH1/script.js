//1
var str1 = 'My name is:'; 
var name = 'Dylan';

var str2 = `${str1} ${name}`

// --> 'My name is: Dylan'

//2
var information = { firstName: 'Dylan', lastName: 'Israel'};

var { firstName, lastName } = information;
console.log(firstName); // 'Dylan'
console.log(lastName); // 'Israel'

//3
var [ firstName ] = ['Dylan', 'Israel'];
console.log(firstName) // 'Dylan'

//4
var firstName = 'Dylan';  
var information = { firstName };

var firstName = 'Dylan';  
var information = { firstName: firstName };

//5
var str = 'hello';

for (var char of str) {  console.log(char);}// "h"// "e"// "l"// "l"// "o"

//6
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, ...arr2];

// arr3 = [1, 2, 3, 4, 5, 6];

function findLength(...args) {  console.log(args.length);}

findLength();  // 0
findLength(1); // 1
findLength(2, 3, 4); // 3

//7
var str = 'Hello World';

console.log(str.includes('hello')); // true

//8
class Car {
  constructor(wheels, doors) {
     this.wheels = wheels;
     this.doors = doors;
  }
  describeMe() {
    console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
  }}


const car1 = new Car(4, 2);  
car1.describeMe(); // Doors: 2 and Wheels: 4

//9
function takeLongTimeAsync() {
  return new Promise(resolve => {
      setTimeout(() => resolve("long_time_value"), 1000);
  });
}

async function test() {
  const v = await takeLongTimeAsync();
  console.log(v);
}

test();