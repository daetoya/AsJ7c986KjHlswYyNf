const Discord = require("discord.js");
const client = new Discord.Client();
const config = require ("./config.json");


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;	
	
  if (command === 'help') {
    message.channel.send("Список команд: help, playmusic, pausemusic, resumemusic, stopmusic, wotstats, lvl");
  } else

  if (command === 'test') {
    message.channel.send("Active");
  }
  
  if (command === "stats") {
	  let avatar = user.avatarURL;
	  let id = user.id;
	  let tag = user.tag;
	  let [avatar, id, tag] = args; 
	  message.reply(`Hello ${message.author.username}, Your avatar is ${avatar}, your id is ${id} and tag is ${tag}`);
  }
	  });
client.login(config.token);
