/*
    Promise

    A promessa de que algo irá acontecer
    Poderá dar certo ou errado,
    mas irá acontecer.
*/

const aceitar = Math.random() > 0.5;

console.log('pedir uber');

const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (aceitar) { return resolve('carro chegou'); }

    return reject('pedido negado!');
  }, 2000);
});

console.log('aguardando');

promessa
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))
  .finally(() => console.log('finalizada'));
