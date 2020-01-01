const kick = require("../commands/kick");

module.exports = (client, message) => {
  if (message.content.startsWith("a!kick")) {
    if(message.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
      return kick(message);
    }
  } else { 
    message.channel.send({embed: {
    color: 0xFF8C8C,
    fields: [{
        name: "No Permission",
        value: "You need to be a Moderator to execute this command"
      }
    ],
  }
                         }
});
  }
};
