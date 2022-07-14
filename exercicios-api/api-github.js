import express from 'express';
import axios from 'axios';

const app = express();

app.listen('3000');

app.use(express.json());

app.route('/').get((req, res) => {
  axios.get('https://api.github.com/users/math-silva')
    .then((result) => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch((err) => console.log(err));
});
