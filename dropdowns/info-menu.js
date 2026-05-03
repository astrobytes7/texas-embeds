module.exports = {
    customID: 'info-menu',
    execute: async (interaction, client) => {
        const selection = interaction.values[0];

        if (selection === 'important_links') {
            return interaction.reply({
                content: '### 🔗 Important Links\n- [Website](https://noteshan.xyz)\n- [Support Server](https://discord.gg/example)\n- [Documentation](https://docs.example.com)',
                ephemeral: true
            });
        }

        if (selection === 'about_us') {
            return interaction.reply({
                content: '### ℹ️ About Us\nWe are a community dedicated to creating high-quality experiences on Roblox and Discord. Feel free to reach out to **not.eshan** for any inquiries!',
                ephemeral: true
            });
        }
    }
};
