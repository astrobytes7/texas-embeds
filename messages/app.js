const { EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "app",
    description: "Displays Texas State Roleplay Applications via Embed",
    async execute(message, args, client) {
        // Check for Administrator Permissions
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply("❌ You do not have permission to use this command.");
        }

        const banner = new EmbedBuilder()
            .setImage("https://media.discordapp.net/attachments/1500319658467655771/1500534587384664245/a_app.png?ex=6a03553c&is=6a0203bc&hm=34c8005276c859f2a3d14882fe3c131ebd6c5505a3faf3dc36dc39750729a45b&=&format=webp&quality=lossless&width=1210&height=427")
            .setColor('#292929');

        const appEmbed = new EmbedBuilder()
            .setTitle("<:txrp:1493060300281352243> Staff Applications")
            .setDescription("> Interested in joining the **Texas State Roleplay** staff team? We are always looking for dedicated and mature individuals to help maintain our community. Click the button below to apply for **In-Game Moderator**.")
            .setImage('https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=6a035832&is=6a0206b2&hm=5d110913583a6c848344e10d747c115bf398e8e2af0ec0b91a64b943e11f6436&=&format=webp&quality=lossless&width=2618&height=132')
            .setColor('#292929')
            .setFooter({
                text: "Texas State Roleplay Recruitment",
                iconURL: message.guild.iconURL()
            });

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('In-Game Moderator')
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://melonly.xyz/dashboard/7427810980022718464/applications/7453852681967243264"),
                new ButtonBuilder()
                    .setCustomId('ban-appeal')
                    .setLabel('Ban Appeal')
                    .setStyle(ButtonStyle.Primary)
            );

        await message.channel.send({
            embeds: [banner, appEmbed],
            components: [row]
        });
    },
};
