const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Hello, world!')
        .addStringOption(option => 
            option.setName("name")
                .setDescription("Type your name!")
                .setRequired(true)
        ),
    async execute(interaction) {
        const name = interaction.options.getString('name');
        const embed = new EmbedBuilder()
            .setTitle(`Hello, ${name}!`)
            .setColor(0x1d1d1d)
        await interaction.reply({embeds: [embed]});
    },
};