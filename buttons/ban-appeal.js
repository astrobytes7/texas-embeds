const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    customID: 'ban-appeal',
    execute: async (interaction, client) => {
        const modal = new ModalBuilder()
            .setCustomId('ban-appeal-modal')
            .setTitle('Texas State Roleplay | Ban Appeal');

        const robloxUser = new TextInputBuilder()
            .setCustomId('roblox-username')
            .setLabel("Roblox Username")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Enter your Roblox username')
            .setRequired(true);

        const reason = new TextInputBuilder()
            .setCustomId('ban-reason')
            .setLabel("Reason for Ban")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Why were you banned?')
            .setRequired(true);

        const secondChance = new TextInputBuilder()
            .setCustomId('second-chance')
            .setLabel("Why do you deserve a second chance?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Explain why you should be unbanned')
            .setRequired(true);

        const prevention = new TextInputBuilder()
            .setCustomId('prevention')
            .setLabel("What will you do to not do it again?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('How will you improve your behavior?')
            .setRequired(true);

        modal.addComponents(
            new ActionRowBuilder().addComponents(robloxUser),
            new ActionRowBuilder().addComponents(reason),
            new ActionRowBuilder().addComponents(secondChance),
            new ActionRowBuilder().addComponents(prevention)
        );

        await interaction.showModal(modal);
    }
};
