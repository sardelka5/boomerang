// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');
const runInteractiveConsole = require('./keyboard');

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.boomerang = new Boomerang(); // created by me
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin; // created by me
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      console.log('Минус одна жизнь -💔');
      this.hero.die();
    }
  }

  async play() {
    runInteractiveConsole(this.hero, this.boomerang, this.enemy);
    let count = 0;
    const int = await setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      if (this.boomerang.position === this.enemy.position) {
        this.enemy.die();
        this.countOfEnemies += 1;
        this.enemy = new Enemy();
        this.boomerang.position = '?';
        this.boomerang = new Boomerang();
        runInteractiveConsole(this.hero, this.boomerang, this.enemy);
      }
      this.enemy.moveLeft();
      count += 1;
      if (count === 100) {
        clearInterval(int);
        console.log('Время вышло!');
        process.exit();
      }
    }, 500);
  }
}

module.exports = Game;
