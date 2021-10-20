class TennisGame1 {
  constructor(player1Name = 'player1', player2Name = 'player2') {
    this.players = [
      { name: player1Name, score: 0 },
      { name: player2Name, score: 0 }
    ];
  }

  wonPoint(playerName) {
    if (playerName === this.players[0].name) {
      this.players[0].score += 1;
    } else {
      this.players[1].score += 1;
    }
  }

  getScore = function () {
    if (this.players[0].score === this.players[1].score) {
      return this.drawResult();
    } else if (this.players[0].score >= 4 || this.players[1].score >= 4) {
      return this.lateGameResult();
    } else {
      return this.normalResult();
    }
  }

  drawResult = function () {
    switch (this.players[0].score) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }

  lateGameResult = function () {
    const minusResult = this.players[0].score - this.players[1].score;
    if (minusResult === 1) return 'Advantage player1';
    else if (minusResult === -1) return 'Advantage player2';
    else if (minusResult >= 2) return 'Win for player1';
    return 'Win for player2';
  }

  normalResult = function () {
    const score = this.getResultName(this.players[0].score) +
      '-' +
      this.getResultName(this.players[1].score);
    return score;
  }

  getResultName = function (tempScore) {
    switch (tempScore) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      case 3:
        return 'Forty';
    }
  }
}

module.exports = TennisGame1;
