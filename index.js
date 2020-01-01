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

    if (message.content === 'a!ping') {

       message.reply('pong');

       }

});

client.on('message', message => {

    if (message.content === 'a!bp') {

      message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Baden Powell",
    description: "Robert Baden-Powell is the individual who started the scouting movement.",
    fields: [{
        name: "Personal Life",
        value: "Baden-Powell was born as Robert Stephenson Smyth Powell at 6 Stanhope Street (now 11 Stanhope Terrace), Paddington in London, on 22 February 1857. He was called Stephe (pronounced Stevie) by his family. He was named after his godfather, Robert Stephenson, the railway and civil engineer, and his third name was his mother's maiden name."
      },
      {
        name: "Scouting",
        value: "In 1920, the 1st World Scout Jamboree took place in Olympia in West Kensington, and Baden-Powell was acclaimed Chief Scout of the World. Baden-Powell was created a Baronet in 1921 and Baron Baden-Powell, of Gilwell, in the County of Essex, on 17 September 1929, Gilwell Park being the International Scout Leader training centre. At the 5th World Scout Jamboree in 1937, Baden-Powell gave his farewell to Scouting, and retired from public Scouting life."
      },
      {
        name: "Sources",
        value: "[Wikipedia](https://en.wikipedia.org/wiki/Robert_Baden-Powell,_1st_Baron_Baden-Powell), [OA-BSA](https://history.oa-bsa.org/node/3018)"
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

client.on('message', message => {

    if (message.content === 'a!help') {

       message.channel.send({embed: {
    color: 0xFF8C8C,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help Menu",
    description: "The current bot prefix is **a!**\n--------------------",
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
