const { EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "rules",
    description: "Displays Texas State Roleplay Regulations via Embed",
    async execute(message, args, client) {
        // Check for Administrator Permissions
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply("❌ You do not have permission to use this command.");
        }

        const banner = new EmbedBuilder()
            .setImage("https://media.discordapp.net/attachments/1500319658467655771/1500534630569218249/a_dash.png?ex=69ff60c6&is=69fe0f46&hm=c64bf0a22ec3d032dfcc2678566e7263ff2d1d1e3c37eb3607e7ddcd37ee4186&=&format=webp&quality=lossless&width=2376&height=836")
            .setColor('#292929');

        const rulesEmbed = new EmbedBuilder()
            .setImage("https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=69ff63b2&is=69fe1232&hm=6077a7f0826f5dda207a6e07c8a48de3d930311d2a219c97ecf71819f62d952b&=&format=webp&quality=lossless&width=2618&height=132")
            .setColor('#292929')
            .setDescription(
                "Welcome to **<:jax1onn_Property__1pngremovebgpr:1493060300281352243> Texas State Roleplay** Regulations. To ensure a safe and enjoyable environment for everyone, we have established a set of guidelines. Please use the dropdown below to view our In-Game and Discord regulations."
            )
            .setFooter({
                text: "2026 Texas State Roleplay. All rights reserved.",
                iconURL: message.guild.iconURL()
            });

        const dropdown = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('rules-menu')
                    .setPlaceholder('Learn more...')
                    .addOptions([
                        {
                            label: 'In-Game Regulations',
                            description: 'View our in-game roleplay rules',
                            value: 'ingame_regs',
                        },
                        {
                            label: 'Discord Regulations',
                            description: 'View our community discord rules',
                            value: 'discord_regs',
                        },
                    ])
            );

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('aop-button')
                    .setLabel('Area of Play')
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(true)
            );

        await message.channel.send({
            embeds: [banner, rulesEmbed],
            components: [dropdown, button]
        });
    },
};
