// 1.
// 1-D, 2-A, 3-C, 4-B

2. 

function exercise4() {
    console.log('Heehaw');
};
setTimeout(exercise4, 4000);
setInterval(exercise4, 4000);

//3. 

// a) A variable declared by let won't exist after the function finish running
// b) A variable declared by var still exist after the function finish running

4

let x = document.getElementsByTagName('li');
for(let i=0 ; i < x.length ; i++){
  console.log(x[i]);
}

5.

let d = document.getElementsByClassName("singer");
console.log(d)
console.log(d[1])
for (let i = 0; i < d.length; i++) {
    i = d;
    console.log(d)
}

6.

let d = document.getElementById('xoa');
d.addEventListener('click', () => {
    d.remove();
})

7.

let b = document.getElementById('button 1');
b.addEventListener('click', (e) => {
    console.log(e.target);
});
let c = document.getElementById('button 2');
c.addEventListener('click', (f) => {
    console.log(f.target);
});
let d = document.addEventListener('keydown', (g) => {
    console.log(g.key);
});

8.

function information(name,dream) {
    alert('tên của bạn là ' + name);
    alert(dream+' là 1 điều ước hay');
}
information(ten,dieuuoc); 

9-10.

function hi(name, wish) {
    alert(`${name} ${wish}`);
}
let userName = prompt('Enter your name:');
let userWish = prompt('What do you wanna get?');
if (userWish == "") {
    alert(`${userName} nothing`);
} else {
    hi(userName, userWish);
};

11.

const btn = document.getElementById("upper_btn");
console.log(btn);
function myFunction() {
    var fun=document.getElementById("upper_btn").placeholder = "Upper it!!!! just clicked";
    console.log(fun)
   }
const input = document.getElementById("name_input");
console.log(input);    
function myFunction() {
    var fun=document.getElementById("upper_btn").placeholder = "Upper it!!!! just clicked";
    var names=document.getElementById("name_input").placeholder="user\'s names:"+document.getElementById("name_input").value
    var vietHoa=document.getElementById("name_input").placeholder="user names uppercase:"+document.getElementById("name_input").value.toUpperCase();
    var vietHoa2=document.getElementById("name_input").value.toUpperCase();
    var update=document.getElementById("result_div");
    update.textContent=vietHoa2
    console.log(fun);
    console.log(names);
    console.log(vietHoa);
}

12.

let belongings=["Backpack", "MiBand watch" ,"Ring"];
console.log(belongings);


const kt=document.getElementById('item');


console.log(kt);


for (let i = 0; i < belongings.length; i++) {
    kt.insertAdjacentHTML('beforeend', `
    <li>${belongings[i]}</li>
    `)
}
console.log(kt);


const items=document.getElementById('bt12');
console.log(items);
const add= document.getElementById('bt122');
console.log(add);

