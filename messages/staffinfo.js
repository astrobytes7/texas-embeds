const { EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "staffinfo",
    description: "Displays Staff Information via Embed",
    async execute(message, args, client) {
        // Check for Administrator Permissions
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply("❌ You do not have permission to use this command.");
        }

        const banner = new EmbedBuilder()
            .setImage("https://media.discordapp.net/attachments/1500319658467655771/1500535201854525440/a_staff_dash.png?ex=6a0355ce&is=6a02044e&hm=7e77b339eabb5030815deb807338a601d346092b5c12ad7e34dc89a9e80d870a&=&format=webp&quality=lossless&width=2376&height=836")
            .setColor('#292929');

        const infoEmbed = new EmbedBuilder()
            .setTitle("<:txrp:1493060300281352243> Staff Information")
            .setDescription("> Welcome to the **<:txrp:1493060300281352243> Texas State Roleplay** staff team. In this channel you will be able to view all of the information you need to be a sucesful staff member in our server. We ask that you read everything carefully, as making mistakes can result in a infraction.")
            .setColor('#292929')
            .setFooter({
                text: "Texas State Roleplay Staff Management",
                iconURL: message.guild.iconURL()
            });

        const dropdown = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('staff-menu')
                    .setPlaceholder('Learn more...')
                    .addOptions([
                        {
                            label: 'Important Links',
                            description: 'View essential staff resources and links',
                            value: 'staff_links',
                        },
                        {
                            label: 'Staff Guide',
                            description: 'View the official staff conduct and procedures guide',
                            value: 'staff_guide',
                        },
                    ])
            );

        await message.channel.send({ 
            embeds: [banner, infoEmbed], 
            components: [dropdown] 
        });
    },
};
