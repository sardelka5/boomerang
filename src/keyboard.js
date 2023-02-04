/* eslint-disable no-param-reassign */
const keypress = require('keypress');

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
        boomerang.position = hero.position + 1;
        setInterval(() => boomerang.fly(hero), 15);
      }
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
};
