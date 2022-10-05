var game = require("../events/client/game");
var gameai = require("../events/client/gameai");

module.exports = {
  name: "move",
  execute(client, message, args, Discord) {
    if (client.gameHistory === undefined) {
      message.channel.send("There is no active game. Try typing $start");
    } else {
      if (client.isAiGame) {
        typeof gameai(client, message, args);
      } else {
        typeof game(client, message, args);
      }
    }
  },
};
