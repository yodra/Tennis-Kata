const TennisGame3 = require('../TennisGame3');

describe('TennisGame3', () => {
  test('should execute the game score OK', () => {
    const game = new TennisGame3('player1', 'player2');
    expect(game.getScore()).toBe('Love-All');
  });
});
