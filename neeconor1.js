
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!N";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;	
	
  if (message.content.startsWith(prefix + "Test")) {
    message.channel.send("Active");
  } else

  if (message.content.startsWith(prefix + "Тест")) {
    message.channel.send("Active");
  }
});

client.login("NDE1NTg2MDU0MDAzODg0MDMz.DXMf4Q.Acea5QE-72NpNbIVaNV0cvqVSGY");
