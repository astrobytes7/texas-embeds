const { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'info',
    execute: async (message, args, client) => {
        // Main Button Row
        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Roblox Group')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://www.roblox.com/groups/0/Your-Group-Here') // You can customize this link
                    .setEmoji('1261058032763240551') // You can replace with a Roblox emoji ID or a standard emoji
            );

        // Select Menu Row
        const menuRow = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('info-menu')
                    .setPlaceholder('Select more information...')
                    .addOptions([
                        {
                            label: 'Important Links',
                            description: 'Essential resources and links.',
                            value: 'important_links',
                            emoji: '🔗'
                        },
                        {
                            label: 'About Us',
                            description: 'Learn more about our mission.',
                            value: 'about_us',
                            emoji: 'ℹ️'
                        },
                    ])
            );

        await message.reply({
            content: 'Welcome to the **Information Center**! Use the button below to visit our group, or use the dropdown to learn more.',
            components: [buttonRow, menuRow]
        });
    }
};
