const keypress = require('keypress');
const Boomerang = require('./game-models/Boomerang');

module.exports = function runInteractiveConsole(hero, boomerang) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name === 'd') {
        hero.position += 1;
      }
      if (key.name === 'a') {
        hero.position -= 1;
      }
      if (key.name === 'q') {
        boomerang.position += 1;
      }
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
};
