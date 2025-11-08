export class Player {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.inventory = [];
  }
}
