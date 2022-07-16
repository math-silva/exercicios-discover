/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const url = 'http://localhost:5500/api';

function getUsers() {
  axios.get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((err) => console.error(err));
}

function addNewUser(newUser) {
  axios.post(url, newUser)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then((response) => {
      const { data } = response;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userID.textContent = data.iD;
      userAvatar.src = data.avatar;
    })
    .catch((err) => console.error(err));
}

function updateUser(id, updatedUser) {
  axios.put(`${url}/${id}`, updatedUser)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

// n estou conseguindo fazer funcionar...
getUsers();
getUser(2);

const newUser = {
  name: 'Matheus Silva',
  avatar: 'https://avatars.githubusercontent.com/u/51101359?v=4',
  city: 'Atibaia',
};

const updatedUser = {
  name: 'Marcelo Calvis',
  avatar: 'https://picsum.photos/200/300',
  city: 'Recife',
};

updateUser(3, updatedUser);
// addNewUser(newUser);
getUser(3);

deleteUser(6);
