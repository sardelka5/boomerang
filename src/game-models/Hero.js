const Enemy = require('./Enemy');
const player = require('play-sound')(opts = {})

// Наш герой.


class Hero {
  constructor(position) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'
    this.position = position;
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
    const newSkin = "💀";
    this.skin = newSkin;
    // player.play('../sounds/twirl.wav', function(err){
    //   if (err) throw err;
    // })
    // sound.play();
    console.log("YOU ARE DEAD!💀");
    // audio.kill();
    // process.exit();
  }
}

module.exports = Hero;
