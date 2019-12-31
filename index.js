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

    if (message.content === '!ping') {

       message.reply('pong');

       }

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

client.on('message', message => {

    if (message.content === '!bp') {
      number = 3;
      var random = Math.floor (Math.random() * (number - 1 +1)) + 1;
      swith (random) {
        case 1: message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Baden Powell",
    fields: [{
        name: "Did you know?",
        value: "Fact #1"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Scouting since 1910!"
    }
  }
}); break;
        case 2: message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Baden Powell",
    fields: [{
        name: "Did you know?",
        value: "Fact #1"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Scouting since 1910!"
    }
  }
}); break;
        case 3: message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Baden Powell",
    fields: [{
        name: "Did you know?",
        value: "Fact #1"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Scouting since 1910!"
    }
  }
}); break;
      }
    }

});

client.login(process.env.BOT_TOKEN);
