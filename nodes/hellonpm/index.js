// const { createHmac } = await import('node:crypto');

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
//                .update('I love MERN')
//                .digest('hex');
// console.log(hash);

const crypto = require('node:crypto');
const hmac = crypto.createHmac('sha256', Date.now().toString());
const data = hmac.update('I Love MERN').digest('binary');
console.log(data);


function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x = document.getElementById("demo");
    x.innerHTML = Array.isArray(fruits);
  }

const num = [10,20]
num.some();