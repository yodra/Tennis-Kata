# Tennis Kata
This kata has three different versions to refactor. Each one of these has their own design :shit: 

This three versions are on the `/src` directory on the files:

- TennisGame1
- TennisGame2
- TennisGame3

## Objectives

The objective is refactor the function `getScore`, this functions is in charge of returns the final match score.

## Tennis rules

https://en.wikipedia.org/wiki/Tennis#Scoring

The score is calculated on the following way:

| Player 1 | Player 2 | Score |
| --------- | --------- | --------- |
| 0 | 0 | Love-All |
| 15 | 15 | Fifteen-All |
| 30 | 30 | Thirty-All |
| 40 | 40 | Deuce |
| 45 | 45 | Deuce |
| 15 | 0 | Fifteen-Love |
| 0 | 15 | Love-Fifteen |
| 30 | 0 | Thirty-Love |
| 0 | 30 | Love-Thirty |
| 40 | 0 | Forty-Love |
| 0 | 40 | Love-Forty |
| 45 | 0 | Win for player1 |
| 0 | 45 | Win for player2 |
| 30 | 15 | Thirty-Fifteen |
| 15 | 30 | Fifteen-Thirty |
| 40 | 15 | Forty-Fifteen |
| 15 | 40 | Fifteen-Forty |
| 45 | 15 | Win for player1 |
| 15 | 45 | Win for player2 |
| 40 | 30 | Forty-Thirty |
| 30 | 40 | Thirty-Forty |
| 45 | 30 | Win for player1 |
| 30 | 45 | Win for player2 |
| 45 | 40 | Advantage player1 |
| 40 | 45 | Advantage player2 |
| 45* | 45 | Advantage player1 |
| 45 | 45* | Advantage player2 |
| 45** | ? | Win for player1 |
| ? | 45** | Win for player2 |

## :warning: 

Don't break anything!

Inspired in https://kata-log.rocks/tennis-kata
