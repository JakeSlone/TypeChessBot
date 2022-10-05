var game = require("../events/client/game");
var gameai = require("../events/client/gameai");

module.exports = {
  name: "s",
  execute(client, message, args, Discord) {
    let validLevel = false;
    if (client.gameHistory === undefined) {
      if (args[0] && !isNaN(args[1])) {
        if (parseInt(args[1]) >= 1 && parseInt(args[1]) <= 5) {
          validLevel = true;
        }
      }
      if (args[0] === "ai" && validLevel) {
        typeof gameai(client, message, args);
      } else if (!args[0]) {
        typeof game(client, message, args);
      }
    } else {
      message.channel.send(
        "A game is currently active, either type the next move or type $end"
      );
    }
  },
};
