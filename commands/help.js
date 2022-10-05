const Discord = require("discord.js");

module.exports = {
  name: "help",
  execute(client, message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("TypeChessBot Commands")
      .setURL("https://typechess.com")
      .setAuthor(
        "TypeChess.com",
        "https://cdn.discordapp.com/app-icons/846290334631067650/7e34066b23da4873a7d9697abba9c766.png?size=256",
        "https://typechess.com"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/app-icons/846290334631067650/7e34066b23da4873a7d9697abba9c766.png?size=256"
      )
      .addFields(
        {
          name: "***Overview***",
          value:
            "A chess bot that is controlled through a discord channel. You can either play against someone else in the channel, or play against an AI. All commands are controlled with the prefix ***$***.",
        },
        {
          name: "***Coordinates***",
          value:
            "If you arent already familiar with a chessboards algebraic notation, you should check out this link: https://en.wikipedia.org/wiki/Algebraic_notation_(chess).",
        },
        {
          name: "***$start***",
          value:
            "This will start a game that can be played by anyone in the discord channel. You can also use the shorthand ***$s*** for this command.",
        },
        {
          name: "***$start ai [1-5]***",
          value:
            "This will start a game with the AI, the levels are from 1-5 with the higher being more difficult. Black and white are chosen randomly. You can also use the shorthand ***$s*** for this command. Ex: ***$start ai 5***",
        },
        {
          name: "***$move [from] [to]***",
          value:
            "You can use this command to move the pieces. Just replace the [from] with the pieces current notation and the [to] with the notation of where you want said piece to be. You can also use the shorthand ***$m*** for this command. Ex. ***$move d2 d4***",
        },
        {
          name: "***$end***",
          value: "Use this if you'd like to end the current game.",
        },
        {
          name: "***$resign***",
          value:
            "If you would like to resign from your active game then type this.",
        },
        {
          name: "***$turn***",
          value:
            "If you arent sure whose turn it is, type this to be reminded.",
        },
        {
          name: "***$history***",
          value: "To see all the past moves from your current game type this.",
        }
      )
      .setTimestamp();

    message.channel.send(embed);
  },
};
