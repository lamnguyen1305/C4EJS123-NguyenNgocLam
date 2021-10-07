// **STUDY

// 1. Variable swap

// C1 : Destructuring assignment 

// let a = 1;
// let b = 2;
// [a , b] = [b , a];
// console.log(a ,b);

// C2 : Temporary variable 

// let a = 1; 
// let b = 2;
// let temp;

// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// 2. Split string into Array

// Example :
// let string = "Hello handsome guy";
// let array = string.split(' ');
// console.log(array); 

// 3. Spread operator

// Spread operator (...) được sử dụng thay cho vòng lặp loops
// const array = [3, 4, 5, 6];
// console.log(...array);

// **REVIEW

// 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users

// let items = ['Jeans', 'T-shirt', 'Socks'];
// let command = ['C', 'R', 'U', 'D'];

// while(true){
//     let input = prompt('Hi there, welcom to shop admin panel, what do you want (C, R, U, D)?');
//     if(input == command[0]){
//         newItem = prompt('Enter the name of the new item');
//         items.push(newItem);
//         alert('Done');
//     } else if(input == command[1]){
//         console.log('The current items are :');
//         for(i = 0; i < items.length; i++){
//             console.log(`${i + 1}. ${items[i]}`);
//         }
//     } else if(input == command[2]){
//         position = prompt('Enter the position you want to update');
//         newName = prompt('Enter the new name');
//         items[position] = newName;
//         alert('Done');
//     } else if(input == command[3]){
//         positionD = prompt('Enter the position you want to delete');
//         items.splice(positionD, 1);
//         alert('Done');
//     }else {
//         alert('This command is not supported');
//         break
//     }
// }

// **SERIOUS EXERCISES

// 5. Write a script to ask users enter a sequence of numbers

// let x = prompt('Enter a squence of Number, separated by commas(,)');

// let list = x.split(',');

// let tong = 0;

// for(let i = 0; i < list.length; i++){
//     tong = tong + Number(list[i]);
// }
// alert(`The sum of them is ${tong}`);

// 6. Write a script asking users to enter a sequence of numbers 
// The numbers are separated by commas, find the smallest number and log it out to users

// let x = prompt('Enter a squence of Number, separated by commas(,)');

// let list = x.split(',');

// alert(`The smallest number is ${Math.min(...list)}`);

// 7. 

// const arr = [25,12,47,29,78];
// let x = Number(prompt('Enter a Number'));
// for (let i =0; i< x.length; i++)
// {
//     if(x == arr[i]){
//         alert( x + ' is FOUND in my array at index 3');
//     }
//     else{
//         alert( x + ' is NOT found in may array');
//     }
// }  

// 8.1. 

// let x = prompt('Log all of your flock sizes').split(',').map(Number);
// console.log('Hello, my name is Phuong Nam and here is my sheep sizes');
// console.log(x);

// 8.2.

// let xmax = Math.max[...x];
// console.log(`Now my biggest sheep has size ${xmax} , lets shave it`);

// 8.3.

// x[x.indexOf(xmax)]=8;
// console.log('After shearing, here is my flock');
// console.log(...x);

// 8.4 và 8.5.

// for(i = 0, i < 5, i++){
//     console.log('MONTH ' + i);
//     console.log('One month has, passed, my sheeps have grown, here are theỉ sizes');
//     for(j = 0; j < x.length; j++){
//         x[j] += 50;
//     }
//     console.log(...x);
//     console.log (`Now my biggest sheep has size ${Math.max(...x)} let's shave it`);

//     x[x.indexOf(Math.max(...x))]=8;
//     console.log('After shearing, here is my flock');
//     console.log(...x);
// }

// 8.6. 

// let sum = 0;
// for(let z = 0; z < x.length; z++){
//     sum += x[z];
// }
// console.log(`My flock has size in total: ${sum}`);
// console.log(`I would get ${sum} * 2$ = ${sum*2}`);
