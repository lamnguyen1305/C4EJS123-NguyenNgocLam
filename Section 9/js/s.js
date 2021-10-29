// 1
let promise=new Promise(function(resolve, reject){
    setTimeout(()=>resolve("Promise is da best"),5000);
    })
    async function promiseTest() 
    {
        alert ('loading');
         let result = await promise;
         alert (result);
    }
     
    promiseTest();
     promise.then(
        result => alert(result),
        error => alert(error));

// 2 

async function fetchThis() {
    let fetchPromise = await fetch ('https://reqres.in/api/users');   
     console.log('loading');
     console.log(fetchPromise);
     
};

fetchThis();

// 4

const randomNum = () =>{
    return Math.floor(Math.random()*(20-10+1)+10);
}
const x = randomNum();
if (x < 10) {
    console.log('Failed, x is smaller than 10');
} else if (x > 20) {
    console.log('Failed, x is bigger than 20');
} else {
    console.log('Passed!');
}


// 5 

function randomInte(min, max) {
         return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let x = randomInte(4,16)
console.log(x) ;
if (x < 4) {
         console.log('Failed: the number is smaller than 4');
    } else if (x > 16) {
    console.log('Failed: the number is bigger than 16');
    } else {
    console.log('Passed, bravo');
}

// 6 

function points(x1,y1,x2,y2){
    return (Math.sqrt(Math.pow(x1 - x2, 2)+(Math.pow(y1 - y2, 2))))
}
let d = points(3, 10, 0, 6);
if (d !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo');
}

// 7 

async function fetchApi() {
    let fetchData = await fetch('http://quotes.rest/qod.json');
    return await fetchData.json();
}
fetchApi().then (
    data => {
        document.getElementById('quote_content').innerHTML = data['contents']['quotes'][0]['quote'];
        document.getElementById('quote_author').innerHTML = data['contents']['quotes'][0]['author'];
    },
)

// 8 em chịu thôi :(((())))
// 9 em chịu thôi :(((())))