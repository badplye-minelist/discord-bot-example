const kick = require("../commands/kick");

module.exports = (client, message) => {
  if (message.content.startsWith("a!kick")) {
    if(message.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
      return kick(message);
    } else {
      message.channel.send({embed: {
  color: 3447003,
  description: "You do not have permission to execute this command!"
}});
    }
  }
};
