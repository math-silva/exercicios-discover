const https = require('https');

const API = 'https://jsonplaceholder.typicode.com/users?_limit=3';

https.get(API, (res) => {
  console.log(res.statusCode);
});
console.log('conectando API');
