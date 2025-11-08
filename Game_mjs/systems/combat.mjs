export function attack(player, enemy, damage) {
  enemy.health -= damage;
  console.log(`${player.name} attacks ${enemy.type} for ${damage} damage!`);
}
