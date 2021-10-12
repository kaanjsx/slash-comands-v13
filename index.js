const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_BANS',
    'GUILD_EMOJIS_AND_STICKERS',
    'GUILD_INTEGRATIONS',
    'GUILD_WEBHOOKS',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    'GUILD_PRESENCES',
    'GUILD_MESSAGES',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MESSAGE_TYPING',
    'DIRECT_MESSAGES',
    'DIRECT_MESSAGE_REACTIONS',
    'DIRECT_MESSAGE_TYPING'
  ]
});
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
client.commands = new Discord.Collection();
const command = [];
const token = "BOT TOKEN";

client.on('ready', async () => {
  console.log(`\nLogged in : ${client.user.tag}\n`)
  client.user.setActivity(`Melih And Kaan!`, { type: "PLAYING" });
});

fs.readdirSync('./komutlar/').forEach(file => {
  const dosya = require(`./komutlar/${file}`);
  const option = {
    name: dosya.name,
    description: dosya.description,
    options: dosya.options
  };
  command.push(option);
  client.commands.set(dosya.name, dosya);
});

const rest = new REST({ version: "9" }).setToken(token);
const ClientID = "BOT_ID";
const GuildID = "GUILD_ID";
(async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(ClientID, GuildID), { body: command });
  } catch (e) {
    throw new Error('Komutlar yüklenemedi, sebep:'+e.message);
  }
})();

client.on('interactionCreate', async (interaction) => {
  try {
    const cmd = client.commands.get(interaction.commandName);
    cmd.execute(client, interaction);
  } catch (e) {
    throw new Error('Komut kullanılamadı, sebep:'+e.message);
  }
});

client.login(token);
