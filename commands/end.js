module.exports = {
  name: "end",
  execute(client, message) {
    if (client.gameHistory !== undefined) {
      client.gameHistory = undefined;
      message.channel.send("Game has ended.");
    } else {
      message.channel.send("No active game.");
    }
  },
};
