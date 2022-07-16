import express from 'express';
import cors from 'cors';

const app = express();

app.listen(5500, () => console.log('Rodando na porta 5500'));

app.use(cors());

app.use(express.json());

let users = [{
  id: 1,
  name: 'Jakeliny Gracielly',
  avatar: 'https://avatars.githubusercontent.com/u/17316392?v=4',
  city: 'São Paulo',
}];

app.route('/api').get((req, res) => res.json({
  users,
}));

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id;

  const currentUser = users.find((user) => Number(user.id) === Number(userId));

  if (!currentUser) {
    return res.json('User not found!');
  }

  return res.json(currentUser);
});

app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id;
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city,
  });
  res.json('Saved user');
});

app.route('/api/:id').put((req, res) => {
  const userId = req.params.id;

  const currentUser = users.find((user) => Number(user.id) === Number(userId));

  if (!currentUser) {
    return res.json('User not found!');
  }

  const updatedUser = {
    ...currentUser,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city,
  };

  users = users.map((user) => {
    if (Number(user.id) === Number(userId)) {
      return updatedUser;
    }
    return user;
  });

  return res.json('Updated user');
});

app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id;

  users = users.filter((user) => Number(user.id) !== Number(userId));

  res.json('Deleted User');
});
