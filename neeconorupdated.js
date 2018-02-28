const Discord = require("discord.js");
const client = new Discord.Client();
const config = require ("./config.json");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;	
	
  if (command === 'help') {
    message.channel.send("Список команд: help, playmusic, pausemusic, resumemusic, stopmusic, wotstats, lvl");
  } else

  if (command === 'test') {
    message.channel.send("Active");
  }
});

client.on("message", (typingStart) => {
	message.channel.send("Я все вижу.");
});
client.login(config.token);
