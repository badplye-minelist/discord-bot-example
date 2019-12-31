require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.on('message', message => {

    if (message.content === '!help') {

       message.channel.send({embed: {
    color: 0xFF8C8C,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help Menu",
    description: "The current bot prefix is **!**\n--------------------",
    fields: [{
        name: "Help",
        value: "Shows a list of commands."
      },
      {
        name: "Additional Features",
        value: "There are countless features we are working to add!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Scouting since 1910!"
    }
  }
});

       }

});

client.login(process.env.BOT_TOKEN);
