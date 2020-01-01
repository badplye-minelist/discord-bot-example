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
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('a!ban')) {
    if(message.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.channel.send({embed: {
  color: 3447003,
  description: "User has been kicked"
}})})
            .catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.channel.send({embed: {
  color: 3447003,
  description: "I was unable to ban that user"
}});
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send({embed: {
  color: 3447003,
  description: "That user isn\'t in this guild"
}});
      }
    } else {
    // Otherwise, if no user was mentioned
      message.channel.send({embed: {
  color: 3447003,
  description: "Who are you trying to ban? You must mention a member!"
}});
    }
  } else {
  message.channel.send({embed: {
  color: 3447003,
  description: "You do not have permission to execute this command!"
}});
  }
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
