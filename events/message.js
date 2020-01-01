const kick = require("../commands/kick");

module.exports = (client, message) => {
  if (message.content.startsWith("a!kick")) && (member.roles.some(role => role.name === 'Mod')) {
    return kick(message);
  }
};
