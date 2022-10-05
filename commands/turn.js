module.exports = {
  name: "turn",
  execute(client, message) {
    if (client.gameHistory !== undefined) {
      let turn = client.gameHistory.board.configuration.turn;
      turn = turn.charAt(0).toUpperCase() + turn.slice(1);
      message.channel.send(turn + "s turn");
    } else {
      message.channel.send("There is no active game. Try typing $start");
    }
  },
};
