// STUDY

//1.1. var và const trong javascript là hàm dùng để khai báo 
// Với var ta có thể khai báo nhiều kiểu biến khác nhau 
// Với const là hàm dùng để khai báo một hằng số 

//1.2.  
// Khai báo var được sử dụng trên phạm vi toàn cục (biến toàn cục) hoặc trong function scope trong khi let được sử dụng trong phạm vi block scope
// var có thể cập nhật và khai báo lại nhưng let thì có thể cập nhật nhưng chỉ được khai báo một lần duy nhất trong khối mã

//1.3.
// Biến let có thể cập nhật và không thể khai báo lại trong khi biến const không thể cập nhật và không thể khai báo lại

//1.4.
// Biến var sử dụng để khai báo đa dạng các kiểu biến và sử dụng trên phạm vi toàn cục
// Biến let sử dụng tương tự như var nhưng được khai báo sẽ có block scope, sẽ dễ debug trong quá trình sử dụng thực tế
// Biến const sử dụng khi ta muốn khai báo một hằng số, không thể thay đổi 

//2.1. Boolean là kiểu dữ liệu logic, chỉ có hai giá trị là true hoặc false

//2.2. Các kiểu dữ liệu sinh ra kiểu dữ liệu boolean :
// - Biến boolean 
// - Phép so sánh 
// - Kết hợp các giá trị boolean với nhau
// - Dùng các kiểu dữ liệu khác : có thể là số hoặc string

//3.a.

for( let x = 0; x < 7; x++){
console.log(x);
}

3.b.

let n = prompt('Enter a number?');
for( let x = 0; x < n; x++){
    console.log(x);
}

//3.c.

let n = prompt('Enter n');
for( x = 3; x < n; x++){
    console.log(x);
}

//3.d.

let n = prompt('Enter n');
let c = prompt('Enter c');
for( c; c < n; c++){
    console.log(c);
}

//3.e.

let n = prompt('Enter n');
let c = prompt('Enter c');
for(c; c < n; c += 3){
    console.log(c);
}

//3.f.

let n = prompt('Enter n');
let c = prompt('Enter c');
let s = prompt('Enter s');
for(c; c < n; c += s){
    console.log(c);
}

//4.

let n = prompt('Enter a number');
let ketqua = 1;
for(let i = 1; i <= n; i++){
    ketqua *= i;
}
alert("The factorial of" + n + "is" + ketqua);

//5.

let x = prompt('How old are you?');
if( x < 14 ){
    alert("You are not old enough to view this content");
} else {
    alert("Enjoy!");
}

//SERIOUS EXERCISES 

//6.

 let x = prompt('Enter a number');
if( x > 0 && x < 4.5 ){
    alert("Lower half of 9")
} else if ( x > 4.5 && x < 9) {
    alert("Higher half of 9")
}

//7.

let n = prompt('Nhap vao so n');
let x = prompt('Nhap vao so x');
let s = Math.floor(n/2);

if(x > s){
    alert(x + "is in higher half of" + n);
} else {
    alert( x + "is in lower half of" + n);
}

//8.

let x = prompt('Nhap vao mot so');
if(x % 2 == 0){
    alert(x + "is an even number");
} else {
    alert(x + "is an odd number");
}

//9.a.

let x = 6;
let y = 3;
for(let i = 1; i <= y ; i++){
    console.log('L');
}
for(let z = 4; z <= x ; z++){
    console.log('H')};
}

//9.b.

let n = prompt('Enter the total number');
let x = Math.ceil(n/2);
for(let y = 1; y <= x; y++){
    console.log('L');
}
for(; x < n; x++){
    console.log('H';)
}

//9.c.

for(let x = 1; x < 4; x++){
    console.log(0);
    console.log(1);
}

//9.d.

let n = prompt('Enter the total number');
for(let x = 1; x <= n; x++ ){
    if(x % 2 == 1){
        console.log(0);
    } else {
        console.log(1);
    }
}


//10.

let x = prompt('Your weight is kg?');
let y = prompt('Your height is cm?');
let z = y * 0.01;
let BMI = x / ( z * z );
alert("Your BMI is" + BMI);

if(BMI < 16){
    alert("Severely underweight");
} else if(BMI >= 16 && BMI < 18){
    alert("Underweight");
} else if(BMI >= 18 && BMI < 25){
    alert("Normal");
} else if(BMI >= 25 && BMI < 30){
    alert("Overweight");
} else if(BMI >= 30){
    alert("Obese");
}

