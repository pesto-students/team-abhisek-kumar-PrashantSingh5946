// Create an object called game
const game = {
  lives: 3, // Initially 3 lives
  coins: 0, // Initially 0 coins

  // Getter for points calculation
  get points() {
    return this.coins * 10; // Coins multiplied by 10
  },

  // PlayerDies() method to subtract lives
  playerDies() {
    if (this.lives > 0) {
      this.lives--; // Subtract 1 life
      console.log(`lives = ${this.lives}`);
    }
  },

  // newGame() method to reset game state
  newGame() {
    this.lives = 3; // Reset lives to 3
    this.coins = 0; // Reset coins to 0
    console.log(`lives = ${this.lives} coins = ${this.coins}`);
  },
};

// Initial game state
console.log(
  `lives = ${game.lives} coins = ${game.coins} points = ${game.points}`
);

// Simulate player losing a life
game.playerDies();

// Display updated player stats
console.log(
  `lives = ${game.lives} coins = ${game.coins} points = ${game.points}`
);

// Simulate player earning 2 coins
game.coins += 5;

// Display updated player stats
console.log(
  `lives = ${game.lives} coins = ${game.coins} points = ${game.points}`
);

// Start a new game
game.newGame();
