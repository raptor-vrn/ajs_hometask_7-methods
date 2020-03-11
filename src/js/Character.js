export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 50;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += ((this.attack / 100) * 20);
      this.defence += ((this.defence / 100) * 20);
      this.health = 100;
    } else {
      throw new Error('cannot raise level');
    }
  }
}

const Snow = new Character('snow', 'Bowerman');
Snow.levelUp();
console.log(Snow);
