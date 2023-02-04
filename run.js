/* eslint-disable no-console */
const Game = require('./src/Game');
const { User } = require('./db/models');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 40,
});

// Запуск игры.
console.clear();
const nameOfUser = process.argv[2];

async function main(name) {
  game.play();
  await User.create({ name: `${name}` });
}
main(nameOfUser);
