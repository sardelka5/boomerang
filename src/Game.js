/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable comma-dangle */
const player = require('play-sound')({});
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');
const runInteractiveConsole = require('./keyboard');

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero();
    this.enemy = new Enemy();
    this.boomerang = new Boomerang();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check(countOfEnemies) {
    if (this.hero.position === this.enemy.position) {
      this.audioGame.kill();
      this.musicPlayDied();
      this.hero.die(countOfEnemies);
    }
  }

  musicPlayGame() {
    this.audioGame = player.play(
      `${__dirname}/sounds/game.mp3`,
      function (err) {
        if (err && !err.killed) throw err;
      }
    );
  }

  musicPlayDied() {
    player.play(`${__dirname}/sounds/died.mp3`, function (err) {
      if (err) throw err;
    });
  }

  async play() {
    runInteractiveConsole(this.hero, this.boomerang);
    let count = 0;
    let countOfEnemies = 0;
    this.musicPlayGame();
    const int = await setInterval(() => {
      this.check(countOfEnemies);
      this.regenerateTrack();
      this.view.render(this.track);
      if (
        this.boomerang.position === this.enemy.position ||
        this.boomerang.position === this.enemy.position - 1 ||
        this.boomerang.position - 1 === this.enemy.position
      ) {
        countOfEnemies += 1;
        console.log(`Убито врагов: ${countOfEnemies}`);
        this.enemy.die();
        this.enemy = new Enemy();
        this.boomerang.position = '?';
        this.boomerang = new Boomerang();
        runInteractiveConsole(this.hero, this.boomerang);
      }
      this.enemy.moveLeft();
      count += 1;
      if (count === 200) {
        clearInterval(int);
        this.musicPlayDied();
        console.log('Время вышло!');
        console.log(`Убито врагов: ${countOfEnemies}`);
        process.exit();
      }
    }, 200);
    return countOfEnemies;
  }
}

module.exports = Game;
