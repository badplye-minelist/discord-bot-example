const kick = require("../commands/kick");

module.exports = (client, message) => {
  if (message.content.startsWith("a!kick")) {
    if(message.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
      return kick(message);
    }
  }
};
