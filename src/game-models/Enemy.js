class Enemy {
  constructor(
    skins = [
      '🦫',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ]
  ) {
    this.skin = skins[Math.floor(Math.random() * skins.length)];
    this.position = 29;
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
