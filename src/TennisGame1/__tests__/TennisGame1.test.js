const TennisGame1 = require('../TennisGame1');

function addPointsToPlayer(number, name, game) {
  for (let i = 1; i <= number; i++) {
    game.wonPoint(name);
  }
}

describe('TennisGame1', () => {
  it('returns a Love-All result after scoring no points', () => {
    const game = new TennisGame1('player1', 'player2');
    expect(game.getScore()).toBe('Love-All');
  });

  it('returns a Forty-Love result after player1 scoring 3 points', () => {
    const game = new TennisGame1('player1', 'player2');

    addPointsToPlayer(3, 'player1', game);

    expect(game.getScore()).toBe('Forty-Love');
  });

  it('returns a Deuce result when players are 40-40', () => {
    const game = new TennisGame1('player1', 'player2');

    addPointsToPlayer(3, 'player1', game);
    addPointsToPlayer(3, 'player2', game);

    expect(game.getScore()).toBe('Deuce');
  });
});

describe('All cases', () => {
  it('ANDAMIO', () => {

    const allGameCasesINPUT =
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],

        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],

        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],

        [5, 4],
        [4, 5],
        [6, 4],
        [4, 6]
      ];

    const allGameCasesRESULT = [];

    allGameCasesINPUT.forEach(input => {
      const game = new TennisGame1('player1', 'player2');

      // Player 1
      addPointsToPlayer(input[0], game.player1Name, game);
      // Player 2
      addPointsToPlayer(input[1], game.player2Name, game);

      allGameCasesRESULT.push(game.getScore());

    });
    expect(allGameCasesRESULT).toMatchSnapshot();
  });
});
