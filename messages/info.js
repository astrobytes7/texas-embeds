const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "info",
    description: "Displays Texas State Roleplay Information via Embed",
    async execute(message, args, client) {
        // Check for Administrator Permissions
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply("❌ You do not have permission to use this command.");
        }
        const banner = new EmbedBuilder()
            .setImage("https://media.discordapp.net/attachments/1500319658467655771/1500534630569218249/a_dash.png?ex=69ff60c6&is=69fe0f46&hm=c64bf0a22ec3d032dfcc2678566e7263ff2d1d1e3c37eb3607e7ddcd37ee4186&=&format=webp&quality=lossless&width=2376&height=836")
            .setColor('#292929')


        const infoEmbed = new EmbedBuilder()
            .setImage("https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=69ff63b2&is=69fe1232&hm=6077a7f0826f5dda207a6e07c8a48de3d930311d2a219c97ecf71819f62d952b&=&format=webp&quality=lossless&width=2618&height=132")
            .setColor('#292929')
            .setDescription(
                "Welcome to **<:jax1onn_Property__1pngremovebgpr:1493060300281352243> Texas State Roleplay** an upcoming ER:LC roleplay server based in Texas, United States of America. Founded on <t:1774307940:D> by <@1085713042651750493>, our server goal has been trying to make the best texas roleplay server posssible. Whenther your trying to relax, or jump into the roleplay we have something for you."
            )
            .addFields(
                {
                    name: "Important Channels:",
                    value: "<#1490026302965813248>\n<#1485738000574054542>\n<#1485738000574054544>\n<#1485738000574054543>",
                    inline: true
                },
                {
                    name: "Important Links:",
                    value: "[Main Group](https://www.roblox.com/share/g/729215527)\n[Application Center](https://discord.com/channels/1485737998611120161/1486501432281665736)",
                    inline: true
                }
            )
            // This acts as the small thin divider image at the bottom of your screenshot
            .setFooter({
                text: "2026 Texas State Roleplay. All rights reserved.",
                iconURL: message.guild.iconURL()
            });

        // Optional: Adding the thin decorative banner at the very bottom as a second embed 
        // or just keeping it in one for simplicity.

        await message.channel.send({ embeds: [banner, infoEmbed] });
    },
};