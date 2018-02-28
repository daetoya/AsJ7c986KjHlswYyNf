const Discord = require("discord.js");
const client = new Discord.Client();
const config = require ("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;	
	
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("Список команд: help, playmusic, pausemusic, resumemusic, stopmusic, wotstats, lvl");
  } else

  if (message.content.startsWith(config.prefix + "Тест")) {
    message.channel.send("Active");
  }
});

client.on("message", (roleCreate) => {
	message.channel.send("A new role was created!");
});
client.login(config.token);
