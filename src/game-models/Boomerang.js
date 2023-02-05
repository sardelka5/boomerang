class Boomerang {
  constructor() {
    this.skin = '💥';
    this.position = -1;
  }

  fly(hero) {
    if (this.position < hero.position + 5) {
      this.moveRight();
    } else {
      this.moveLeft();
      this.moveLeft();
      this.moveLeft();
      this.moveLeft();
    }
    if (this.position === hero.position) {
      this.position = '?';
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
