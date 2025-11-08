export function addItem(player, item) {
  player.inventory.push(item);
  console.log(`${player.name} picked up ${item.name}`);
}
