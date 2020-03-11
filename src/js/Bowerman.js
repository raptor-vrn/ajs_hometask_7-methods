import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const Snow = new Bowerman('snow', 'Bowerman');
Snow.levelUp();
console.log(Snow);
