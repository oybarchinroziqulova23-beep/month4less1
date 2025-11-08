import { Player } from './entities/player.mjs';
import { Enemy } from './entities/enemy.mjs';
import { Item } from './entities/item.mjs';
import { attack } from './systems/combat.mjs';
import { addItem } from './systems/inventory.mjs';
import { addScore, getScore } from './systems/score.mjs';
import { randomInt } from './utils/random.mjs';

const player = new Player("Odil");
const enemy = new Enemy("Dragon");
const potion = new Item("Magic Potion", 20);

addItem(player, potion);
attack(player, enemy, randomInt(10, 30));

if (enemy.health <= 0) addScore(50);

console.log(`Final Score: ${getScore()}`);
