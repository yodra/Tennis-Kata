const TennisGame3 = require('../TennisGame3');

function addPointPlayer(number, name, game) {
  while (number >= 1) {
    game.wonPoint(name);
    number--;
  }
}


describe('TennisGame3', () => {
  test('should execute the game score OK', () => {
    const game = new TennisGame3('player1', 'player2');
    expect(game.getScore()).toBe('Love-All');
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
      const game = new TennisGame3('player1', 'player2');

      // Player 1
      addPointPlayer(input[0], game.p1N, game);
      // Player 2
      addPointPlayer(input[1], game.p2N, game);

      allGameCasesRESULT.push(game.getScore());

    });
    expect(allGameCasesRESULT).toMatchSnapshot();
  });
});
