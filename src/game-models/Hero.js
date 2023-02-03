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

  // notDie() {
  //   const newSkin = ' ';
  //   this.skin = newSkin;
  //   this.skin = '🐝';
  //   console.log('ТЫ ЕЩЕ НЕ УМЕР! -💔');
  // }

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
