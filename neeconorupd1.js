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
  
  if (command === "asl") {
	  let [age, sex, location] = args; 
	  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. u mom gay`);
  }
	  });
client.login(config.token);
