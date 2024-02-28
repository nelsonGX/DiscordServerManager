const { Client, GatewayIntentBits , Channel } = require('discord.js');
const { exec } = require('child_process');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
], });

exec('node commandBuilder.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing commandBuilder.js: ${error}`);
        return;
    }
    console.log(`commandBuilder.js executed successfully`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(process.env.TOKEN);