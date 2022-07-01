import axios from 'axios';

Promise.all([
  axios.get('https://api.github.com/users/math-silva'),
  axios.get('https://api.github.com/users/math-silva/repos'),
])
  .then((responses) => {
    console.log(`Login: ${responses[0].data.login}\n\nRepositories:`);
    responses[1].data.forEach((repo) => console.log(repo.name));
  })
  .catch((err) => console.log(err));
