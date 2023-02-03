const Enemy = require('./Enemy');
// const player = require('play-sound')((opts = {}));

class Hero {
  constructor() {
    this.skin = '🐝';
    this.position = 0;
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }

  attack() {
    this.boomerang.fly();
  }

  die() {
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
