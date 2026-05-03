const {
    ContainerBuilder,
    TextDisplayBuilder,
    MessageFlags
} = require("discord.js");

module.exports = {
    customID: 'info-menu',
    execute: async (interaction, client) => {
        const selection = interaction.values[0];

        let title = '';
        let description = '';

        if (selection === 'important_links') {
            title = "### 🔗 Important Links";
            description = "- [Website](https://noteshan.xyz)\n- [Support Server](https://discord.gg/example)\n- [Documentation](https://docs.example.com)";
        } else if (selection === 'about_us') {
            title = "### ℹ️ About Us";
            description = "We are a community dedicated to creating high-quality experiences on Roblox and Discord. Feel free to reach out to **not.eshan** for any inquiries!";
        }

        const components = [
            new ContainerBuilder()
                .addTextDisplayComponents(new TextDisplayBuilder().setContent(title))
                .addTextDisplayComponents(new TextDisplayBuilder().setContent(description))
        ];

        return interaction.reply({
            flags: MessageFlags.IsComponentsV2,
            components,
            ephemeral: true
        });
    }
};
