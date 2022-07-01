import axios from 'axios';

axios
  .get('https://api.github.com/users/math-silva')
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => repos.data.forEach((repo) => console.log(repo.name)))
  .catch((err) => console.log(err));
