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
      // this.hero.notDie();
      // this.enemy = new Enemy();
      // if (end === 3) {
      //   this.hero.die();
      // }
    }
  }

  play() {
    runInteractiveConsole(this.hero, this.boomerang);
    let count = 0;
    const int = setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      // this.boomerang.moveRight();
      if (this.boomerang.position === this.enemy.position) {
        // this.boomerang.position = 1;
        // this.boomerang = new Boomerang(); // created by me
        this.enemy.die();
        this.enemy = new Enemy();
        this.boomerang.moveLeft();
      }
      this.enemy.moveLeft();
      count += 1;
      if (count === 50) {
        clearInterval(int);
      }
    }, 1000);
  }
}

module.exports = Game;
