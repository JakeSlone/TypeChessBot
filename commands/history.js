module.exports = {
  name: "history",
  execute(client, message) {
    let historyArray = [];
    if (client.gameHistory !== undefined) {
      client.gameHistory.board.history.forEach(function (arrayItem) {
        historyArray.push(` ${arrayItem.from} ${arrayItem.to}`);
      });
      message.channel.send(historyArray.join());
    } else {
      message.channel.send("There is no current game.");
    }
  },
};
