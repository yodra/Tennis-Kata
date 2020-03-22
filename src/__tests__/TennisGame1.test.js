const TennisGame1 = require('../TennisGame1');

describe('TennisGame1', () => {
  test('should execute the game score OK', () => {
    console.log("aa!", TennisGame1);

    const game = new TennisGame1('player1', 'player2');
    const score = game.getScore();
    console.log(score);

    expect(score).toBe('Love-All');
  });
});
