var gameend = require("../client/gameend");
const jsChessEngine = require("js-chess-engine");
const imgPrefix = "https://chessboardimage.com/";

module.exports = (client, message, args) => {
  let imgSuffix,
    regex = /[a-h][1-8]/,
    validMove = false;

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

  if (client.gameHistory !== undefined) {
    if (validMove) {
      try {
        client.gameHistory.move(args[0], args[1]);
        imgSuffix = client.gameHistory.exportFEN().split(" ");

        if (client.gameHistory.board.configuration.turn === "black") {
          imgSuffix[0] = imgSuffix[0] + "-flip";
        }
        message.channel.send(imgPrefix + imgSuffix[0] + ".png");
        typeof gameend(client, message);
      } catch (e) {
        console.log(e);
        message.channel.send("That move is illegal.");
      }
    } else {
      message.channel.send(
        "You have used the command incorrectly. For example: $move d2 d4"
      );
    }
  } else {
    client.gameHistory = new jsChessEngine.Game();
    client.isAiGame = false;
    message.channel.send(
      "https://chessboardimage.com/rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR.png"
    );
    message.channel.send(
      "Game has started, please type the first move. For example: $move d2 d4"
    );
    console.log(client.gameHistory);
  }
};
