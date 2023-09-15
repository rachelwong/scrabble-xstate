# Scrabble

This game is a lot like Scrabble or Words With Friends. Letters are dealt to players, who then construct one or more words out of their letters. Each valid word receives a score, based on the length of the word and the letters in that word.

The rules of the game are as follows:

## Dealing

A player is dealt a hand of n letters chosen at random (assume n = 7 for now).

The player arranges the hand into as many words as they want out of the letters, using each letter at most once.

Some letters may remain unused (these won't be scored).

### Scoring

The score for the hand is the sum of the scores for each valid word formed.

The score for a word is the sum of the points for letters in the word, multiplied by the length of the word, plus 50 points if all n letters are used on the first word created. There is a text file words.txt which lists all valid words.

Letters are scored as in Scrabble: A is worth 1, B is worth 3, C is worth 3, D is worth 2, E is worth 1, and so on. We have provided a JSON file letter-values.json which maps each lowercase letter to its Scrabble letter value.

For example, `queen` would be worth 70 points ((10 + 1 + 1 + 1 + 1) for the five letters, then multiply by the number of letters to get (10 + 1 + 1 + 1 + 1) x 5 = 70). Be sure to check that the hand actually has 1 "q", 1 "u", 2 "e", and 1 "n" before scoring the word!

As another example, if n = 7 and you make the word `waybill` on the first try, it would be worth 155 points (the base score for `waybill` is (4 + 1 + 4 + 3 + 1 + 1 + 1) * 7 = 105, plus an additional 50 point bonus for using all n letters).

### User Stories

#### Must Have

* As a player
  * I need to be able to start a new game.
  * I need to be able to see my hand when a new game starts.
  * I need to be able to submit words constructed from my hand.
  * I need to know if my word is invalid.
  * I need to be able to know the total number of points I have earned when the game ends.
  * at the end of a game, I need to be able to know what the optimal outcome of the game* was.

#### Should Have

* As a player
  * I would like to be able to play the game on a website.
  * I need to be able to see my hand throughout the game.
  * I need to be able to see how many points I earn when I submit a word.
  * I need to be able to see how many points I have earned throughout the game.

#### Could Have

* As a player
  * I would like to be able to see my history of all played games.
  * I need to be able to replay a game with the same initial hand as a new game if I desire.
  * The optimal outcome of a game is a way to arrange and play the letters in a hand which results in the highest possible points of the game in total. For example, given a new game with an initial hand of `a r e t i i n`, a player plays `tin` and `air` sequentially, earning 18 points in total at the end, but the optimal solution is playing "inertia", which the player could instead earn 99 points in total, and there is no other ways to get higher points in total.
