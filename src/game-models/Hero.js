const Enemy = require('./Enemy');
const player = require('play-sound')(opts = {})

// Наш герой.


class Hero {
  constructor(boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 0;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  notDie() {
    const newSkin = " "
    this.skin = newSkin;
    this.skin = "🤠";
    console.log("ТЫ ЕЩЕ НЕ УМЕР! -💔");
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
        // player.play('../sounds/twirl.wav', function(err){
    //   if (err) throw err;
    // })
    // sound.play();
    process.exit();
  }
}

module.exports = Hero;
