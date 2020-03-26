const TennisGame1 = require('../TennisGame1');

function addPointPlayer(number, name, game) {
  while (number >= 1) {
    game.wonPoint(name);
    number--;
  }
}

describe('TennisGame1', () => {
  test('should execute the game score OK', () => {
    const game = new TennisGame1('player1', 'player2');
    expect(game.getScore()).toBe('Love-All');
  });

  test('should after 3 point of player1 have a result of Forty-Love', () => {
    const game = new TennisGame1('player1', 'player2');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player1');
    expect(game.getScore()).toBe('Forty-Love');
  });

});

describe('All cases', () => {
  test('ANDAMIO', () => {

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
      addPointPlayer(input[0], game.player1Name, game);
      // Player 2
      addPointPlayer(input[1], game.player2Name, game);

      allGameCasesRESULT.push(game.getScore());

    });
    expect(allGameCasesRESULT).toMatchSnapshot();
  });
});
