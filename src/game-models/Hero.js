/* eslint-disable class-methods-use-this */
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

  die(countOfEnemies) {
    console.log('Ты проиграл! 😵');
    console.log(`Убито врагов: ${countOfEnemies}`);
    process.exit();
  }
}

module.exports = Hero;
