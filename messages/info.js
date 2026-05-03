const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'info',
    execute: async (message, args, client) => {
        // Create the "v2 container" using an Embed
        const embed = new EmbedBuilder()
            .setColor('#2b2d31') // Sleek dark color
            .setImage('https://i.imgur.com/uR1D8Y4.png') // Placeholder for your gallery image
            .setDescription('Welcome to the **Information Center**! Use the components below to navigate through our resources and learn more about us.');

        // Main Button Row
        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Roblox Group')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://www.roblox.com/groups/0/Your-Group-Here')
                    .setEmoji('1261058032763240551') 
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
            embeds: [embed],
            components: [buttonRow, menuRow]
        });
    }
};
