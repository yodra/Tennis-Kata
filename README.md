# Kata Refactor

## Tennis Kata
Hay tres versiones de esta kata para refactorizar, cada una con sus propias 💩 en el diseño.

Para ello cada pareja debe elegir uno de los 3 juegos y comenzar a trabajar! 💪
- TennisGame1
- TennisGame2
- TennisGame3

### Objetivo
El objetivo es refactorizar la funcion `getScore`, que es la responsable de devolver el resultado del juego.

### Reglas tennis
https://es.wikipedia.org/wiki/Tenis#Puntuaci%C3%B3n

Las puntuaciones se calculan de la siguiente manera:

| Jugador 1 | Jugador 2 | Resultado |
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

:::warning
Recuerda: No rompas!!
:::

