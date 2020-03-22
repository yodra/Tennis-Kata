const TennisGame2 = require('../TennisGame2');

describe('TennisGame2', () => {
  test('should execute the game score OK', () => {
    const game = new TennisGame2('player1', 'player2');
    expect(game.getScore()).toBe('Love-All');
  });
});
