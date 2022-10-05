module.exports = {
  name: "resign",
  execute(client, message) {
    if (client.gameHistory !== undefined) {
      let turn = client.gameHistory.board.configuration.turn;
      turn = turn.charAt(0).toUpperCase() + turn.slice(1);
      message.channel.send(turn + " resigns.");
      client.gameHistory = undefined;
    } else {
      message.channel.send("There is no active game. Try typing $start");
    }
  },
};
