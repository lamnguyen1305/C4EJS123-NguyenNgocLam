//STUDY

1. For and object

const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};

for (let x in product) {
    console.log(x);
}

1.1. property
1.2.

const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
}

for (let i in product){
    console.log(`${i}: ${product[i]}`);
}

2. Destructuring object 

const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
}

let subject, assignTo, dueDate;
({subject, assignTo, dueDate} = task);
console.log(subject);
console.log(assignTo);
console.log(dueDate);

3.

let jobSearch = {
    //https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js
}
console.log(jobSearch);

3.1. outermost layer is array
3.2. Hits is Array
3.3. Find the job's tiltle, locations, salary, benefits, skills and requirements

//REVIEW

4.

let prop = {
    'debug' : "The process of figuring out why your program has a certain error and how to fix it",
    'done' : "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    'defect' : "The formal word for ‘error’",
    'pm' : "The short version  of Project Manager, the person in charge of the final result of a project",
    'ui/ux' : "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
 };

 4.1. vs 2.

while(true){
    let word = prompt('Hi there, this is dev dictionary');
    if(prop.hasOwnProperty(word)){
        alert(prop[word]);
    } else {
        let update = prompt(`We could not find your word : ${word}, leave your explanation`);
        prop[word] = update;
        alert('Done');
    }   
}

5.

let products = [
    {
        Name: 'Xiaomi portable charger 20000mah', 
        Brand: 'Xiaomi',
        Price: 428, 
        Color: 'white',
        Category: 'charger'
    }, 
    {
        Name: 'VSmart Active 1', 
        Brand: 'VSmart',
        Price: 5487, 
        Color: 'black',
        Category: 'phone'
    }, 
    {
        Name: 'IPhone X', 
        Brand: 'Apple',
        Price: 21490, 
        Color: 'gray',
        Category: 'phone'
    }, 
    {
        Name: 'Samsung Galaxy A9', 
        Brand: 'Samsung',
        Price: 8490, 
        Color: 'blue',
        Category: 'phone'
    }, 
];

5.1. 

for(i = 0; i < products.length; i++){
    console.log(`Name: ${products[i].Name}`);
    console.log(`Price: ${products[i].Price}`);
}

5.2. 

for(let j = 0; j < products.length; j++){
    console.log(`#${j+1}. Name : ${products[j].Name}`);
    console.log(`   Price : ${products[j].Price}`);
}
let position = prompt('Enter product position');
let x = products.length + 1;
while(position > x || position != Number){
    alert('There is no product at this position');
    position = prompt('Please re-entered position');
}
if(position <= x){
    let z = position - 1;
    console.log(`Name: ${product[z].Name}`);
    console.log(`Price: ${products[z].Price}`);
    console.log(`Brand: ${products[z].Brand}`);
    console.log(`Color: ${products[z].Color}`);
    console.log(`Category: ${products[z].Category}`);
}

5.3. 

