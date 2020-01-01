module.exports = message => {
  const member = message.mentions.members.first();

  if (!member) {
    return message.channel.send({embed: {
  color: 3447003,
  description: "Who are you trying to kick? You must mention a member!"
}});
  }

  if (!member.kickable) {
    return message.channel.send({embed: {
  color: 3447003,
  description: "I cant kick this user! Sorry."
}});
  }

  return member
    .kick()
    .then(() => message.channel.send({embed: {
  color: 3447003,
  description: "${member.user.tag} was kicked."
}}))
    .catch(error => message.channel.send({embed: {
  color: 3447003,
  description: "Sorry, an error occured."
}}));
};
