module.exports = {
  name: 'bot-bilgi',
  description: 'Bot bilgisini atar!', 
  commandOptions: null,
  global: true,
  async execute(client, interaction) {
    const user = interaction.user;
    const msg = `
      <a:ghostdc:887348036802576405> **${client.user.username}** istatistik menüsü!

      <:botdevv:857632364376227870> Developers: **melih#1337 - kaan#1337**
      <:mod:869620478011129886> Sunucu Sayısı: **${client.guilds.cache.size}**
      <:mod:869620478011129886> Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
      <:mod:869620478011129886> Sunucu Sayısı: **${client.channels.cache.size}**
    `;
    const embed = new (require('discord.js')).MessageEmbed()
    .setTitle(`<a:ghostdc:887348036802576405> **${client.user.username}** istatistik menüsü!`)
    .setDescription(`<:botdevv:857632364376227870> Developers: **melih#1337 - kaan#1337**\n<:mod:869620478011129886> Sunucu Sayısı: **${client.guilds.cache.size}**\n<:mod:869620478011129886> Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**\n<:mod:869620478011129886> Sunucu Sayısı: **${client.channels.cache.size}**`)
    .setColor('#5555dd');
    return interaction.reply({ embeds: [embed] }); // `:ghost: __**Bot İnfo**__ \n\n :star: Developer: **kaan#1337 - melih#1337** \n :star2: Komut Sayısı: **${client.commands.size}** \n :star2: Botun Pingi: **${client.ws.ping}** \n :star2: Toplam Sunucu: **${client.guilds.cache.size}** \n :star2: Toplam Kanal: **${client.channels.cache.size}** `
  },
};