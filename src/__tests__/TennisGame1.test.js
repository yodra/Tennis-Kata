const TennisGame1 = require('../TennisGame1');

describe('TennisGame1', () => {
  test('should execute the game score OK', () => {
    const game = new TennisGame1('player1', 'player2');
    expect(game.getScore()).toBe('Love-All');
  });

  test('should execute the game score OK', () => {
    const game = new TennisGame1('player1', 'player2');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player1');
    expect(game.getScore()).toBe('Forty-Love');
  });
});