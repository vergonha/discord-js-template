const { Client, Events, GatewayIntentBits } = require('discord.js');
const { register, unregister } = require('./deploy');
require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);
	await command.execute(interaction);
});


client.once(Events.ClientReady, async callback => {
    await register(client, 'local');
	console.log(`everyday i imagine a future where i can be with you... 🌸`);
});

client.login(process.env.BOT_TOKEN);
