const kick = require("../commands/kick");

module.exports = (client, message) => {
  if (message.content.startsWith("a!kick")) {
    return kick(message);
  }
};
