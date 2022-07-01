import axios from 'axios';

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/math-silva');
    const repos = await axios.get(user.data.repos_url);
    repos.data.forEach((repo) => console.log(repo.full_name));
  } catch (err) {
    console.log(err);
  } finally {
    console.log('\nFinalized!');
  }
}

fetchRepos();
