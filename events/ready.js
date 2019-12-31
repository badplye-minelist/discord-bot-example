module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'Scouting Since 1910', type: 0 } });
};
