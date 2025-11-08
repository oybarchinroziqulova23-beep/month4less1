let score = 0;

export function addScore(points) {
  score += points;
  console.log(`+${points} points! Total: ${score}`);
}

export function getScore() {
  return score;
}
