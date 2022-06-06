# Project: Pong

## Background

The year is 1972. You are Allan Alcorn, a 24 year old who just started working at Atari.
Atari is a young company. In fact, it was just founded. You are the first developer.

Your first assignment is to create Pong - a game that will become one of the earliest arcade games
in the world, and the world's first _commercially successful_ video game.

In the next 10 years, Atari - the small company you're working at, will come to lead the
growing video game industry.

![](https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif)

## What is Pong

Pong is a simple game:

There is one moving spot, two paddles, and digits for score keeping.

Some more game mechanics:
* Each paddle is divided into eight segments to change the ball's angle of return. For example, the center segments return the ball at a 90° angle in relation to the paddle, while the outer segments return the ball at smaller angles.
* The ball accelerates after every hit. Missing the ball resets the speed.
* The paddles cannot reach the top of the screen

You can view the game in action:
* [Original Atari Pong (1972)](https://www.youtube.com/watch?v=fiShX2pTz9A)
* [Another video](https://www.youtube.com/watch?v=kJ8NphYi1rU)

## Instructions

Implement the game in TypeScript. The game is 100% client-side.
No server-side (node, express) is needed.

Write the most beautiful code you can. Use the linter, tsconfig checks, style guide.
Make it shine.

Write unit tests for your game logic.

### Code Review

Do this only after you're done, and not before the weekend is over (Saturday evening).

Copy your project over to the shared repo:

https://github.com/cyber4s-4/cyber4s-4-pong

Place it inside a folder with your GitHub username.

Take care not to nuke the shared repo by accident.

Ask your friends to do code reviews for you.

Do code review for others.

If you continue to develop the game, do so in the shared repo.

## Bonus 1 - Vintage look

Goal: Create a vintage look for the game using ASCII.

There used to be a time when graphical user interfaces were made using ASCII box characters such
as these: ═ ║ ╒ ╓ ╔ ╕ ╖ ╗

This is called "Box drawing" and is [detailed here](https://en.wikipedia.org/wiki/Box-drawing_character#Box_Drawing).

Make a UI using ASCII characters. You can also incorporate [ASCII art](https://en.wikipedia.org/wiki/ASCII_art) (see [some examples](https://www.asciiart.eu)).


## Bonus 2 - AI

Goal: Create an AI for the game.

The AI plays against a human, or against another AI. The gameplay can be presented on screen.

Create 3 AI levels: Easy, Medium, Hard

### Bonus 2.1

Support 2 or more simultanious balls. Each ball is worth 1 game point.

----------------------------------------
Do not forget - remember to write beautiful code with tests.