module.exports = {
  name: 'avatar',
  description: 'Avatarını atar!', 
  commandOptions: [
    {
      name: "user",
      required: true,
      description: "Bir kullanıcı etiketle",
      type: 6
    }
  ],
  global: true,
  async execute(client, interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    return interaction.reply(user.displayAvatarURL({ dynamic: true }));
  },
};