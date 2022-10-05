var gameend = require("../client/gameend");
const jsChessEngine = require("js-chess-engine");
const imgPrefix = "https://chessboardimage.com/";

module.exports = (client, message, args) => {
  let imgSuffix,
    regex = /[a-h][1-8]/,
    validMove = false;

  if (client.gameHistory === undefined) {
    client.gameHistory = new jsChessEngine.Game();
    client.isAiGame = true;
    client.botLevel = args[1] - 1;
    client.botIsWhite = Math.floor(Math.random() * 2) == 0;

    if (client.botIsWhite) {
      client.gameHistory.aiMove(client.botLevel);
      imgSuffix = client.gameHistory.exportFEN().split(" ");
      imgSuffix[0] = imgSuffix[0] + "-flip";
      message.channel.send(imgPrefix + imgSuffix[0] + ".png");
      message.channel.send(
        "Game has started, please type your first move. For example: $move d7 d5"
      );
    } else {
      message.channel.send(
        "https://chessboardimage.com/rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR.png"
      );
      message.channel.send(
        "Game has started, please type the first move. For example: $move d2 d4"
      );
    }
  } else {
    if (args[0] && args[1]) {
      if (
        regex.test(args[0]) &&
        regex.test(args[1]) &&
        args[0].length === 2 &&
        args[1].length === 2
      ) {
        validMove = true;
      }
    }

    if (validMove) {
      try {
        client.gameHistory.move(args[0], args[1]);
        if (client.gameHistory !== undefined) {
          try {
            client.gameHistory.aiMove(client.botLevel);
          } catch (e) {
            typeof gameend(client, message);
          }
          imgSuffix = client.gameHistory.exportFEN().split(" ");

          if (client.botIsWhite) {
            imgSuffix[0] = imgSuffix[0] + "-flip";
          }
          message.channel.send(imgPrefix + imgSuffix[0] + ".png");
        }
      } catch (e) {
        console.log(e);
        if (client.gameHistory !== undefined) {
          message.channel.send("That move is illegal.");
        }
      }
    } else {
      message.channel.send(
        "You have used the command incorrectly. For example: $move d2 d4"
      );
    }
  }
};
