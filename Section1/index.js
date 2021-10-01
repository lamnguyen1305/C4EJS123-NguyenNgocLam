// STUDY

//1.1 Three difference examples of invalid variable names : Three, 3three, three!?

//1.2 Check a variable data types uses: typeof

//2. 1-b, 2-a, 3-e, 4-c

// Serious exercises 

//3.a 

let message =   'Coding is great';
console.log(message);

//3.b

let studentCount = '0';
console.log(studenCount);

//4.a

let message =   'Coding is great';
message = 'Coding might not be easy, but still great';
console.log(message);

//4.b

let studentCount = '0';
studentCount = '16';
console.log(studenCount);

//4.c

let message =   'Coding is great';
message = 'Coding might not be easy, but still great';
console.log(message.toLowerCase());

//4.d

let studentCount = '0';
studentCount = '16';
studentCount += 1;
console.log(studenCount);

//5.

alert(`You look beautiful today`);

//6.

let x = prompt('Hi there, your name please');
alert(`Hi ${x}`);

//7.

let firstname = prompt('Enter your first name');
let lastname = prompt('Enther your lastname');
alert(`Hi ${lastname} ${firstname}`);

//8.

let x = prompt('Enter side length of the square');
x *= x;
alert(`The square area is ${x}`);

//9.

let x = prompt('Enter side length of the circle');
x = Math.PI * x * x;
alert(`The circle area is ${x}`);

//10.

let x = prompt('Enter the temperature in Celcius');
let y = [(x * 1.8) + 32];
alert(`${x} (C) = ${y} (F)`);