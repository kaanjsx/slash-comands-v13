module.exports = {
  name: 'ping',
  description: 'Bot pingini atar!', 
  commandOptions: null,
  global: true,
  async execute(client, interaction) {
    const user = interaction.user;
    return interaction.reply(`Pong! **${client.ws.ping}** `);
  },
};