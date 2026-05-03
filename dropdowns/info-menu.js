const { EmbedBuilder } = require('discord.js');

module.exports = {
    customID: 'info-menu',
    execute: async (interaction, client) => {
        const selection = interaction.values[0];

        if (selection === 'important_links') {
            const embed = new EmbedBuilder()
                .setTitle('🔗 Important Links')
                .setColor('#2b2d31')
                .setDescription('- [Website](https://noteshan.xyz)\n- [Support Server](https://discord.gg/example)\n- [Documentation](https://docs.example.com)');

            return interaction.reply({
                embeds: [embed],
                ephemeral: true
            });
        }

        if (selection === 'about_us') {
            const embed = new EmbedBuilder()
                .setTitle('ℹ️ About Us')
                .setColor('#2b2d31')
                .setDescription('We are a community dedicated to creating high-quality experiences on Roblox and Discord. Feel free to reach out to **not.eshan** for any inquiries!');

            return interaction.reply({
                embeds: [embed],
                ephemeral: true
            });
        }
    }
};
