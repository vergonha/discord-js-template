const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("Pong! 🏓")
            .setColor(0x1d1d1d)
            .setDescription("Ping-Pong!")
        await interaction.reply({embeds: [embed]});
    },
};