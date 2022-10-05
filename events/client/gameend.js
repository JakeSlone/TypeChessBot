const imgPrefix = "https://chessboardimage.com/";

module.exports = (client, message) => {
  let imgSuffix;

  if (client.gameHistory.board.configuration.isFinished === true) {
    if (client.gameHistory.board.configuration.turn === "black") {
      if (client.isAiGame) {
        imgSuffix = client.gameHistory.exportFEN().split(" ");
        message.channel.send(imgPrefix + imgSuffix[0] + ".png");
      }
      message.channel.send("Checkmate. White wins.");
    } else if (client.gameHistory.board.configuration.turn === "white") {
      if (client.isAiGame) {
        imgSuffix = client.gameHistory.exportFEN().split(" ");
        imgSuffix[0] = imgSuffix[0] + "-flip";
        message.channel.send(imgPrefix + imgSuffix[0] + ".png");
      }
      message.channel.send("Checkmate. Black wins.");
    } else {
      if (client.isAiGame) {
        imgSuffix = client.gameHistory.exportFEN().split(" ");
        message.channel.send(imgPrefix + imgSuffix[0] + ".png");
      }
      message.channel.send("Game ends in a draw.");
    }
    client.gameHistory = undefined;
  }
};
