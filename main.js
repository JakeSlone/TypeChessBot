require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
client.once("ready", () => {
  client.user.setActivity("$help", { type: "LISTENING" });
});
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.moveHistory = new Discord.Collection();
client.isAiGame = new Discord.Collection();
client.botLevel = new Discord.Collection();
client.botIsWhite = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);
