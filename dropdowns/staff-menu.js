const { EmbedBuilder } = require("discord.js");

module.exports = {
    customID: 'staff-menu',
    execute: async (interaction, client) => {
        const selection = interaction.values[0];

        let title = '';
        let description = '';

        if (selection === 'staff_links') {
            title = "Staff | Important Links";
            description = "> Access the essential resources below for your staff duties.\n\n" +
                "**Melony:** [Join Here](https://melon.ly/join/playcal)\n" +
                "**Staff Group:** [View Group](https://www.roblox.com/share/g/1062050647)";
        } else if (selection === 'staff_guide') {
            title = "Staff | Official Guide";
            description = "> Follow these procedures to ensure high-quality moderation.\n\n" +
                "**1. Professionalism**\nAlways remain professional when dealing with community members. Your behavior reflects on the entire staff team.\n\n" +
                "**2. Evidence**\nAlways record evidence (screenshots or video) before taking moderation actions for infractions.\n\n" +
                "**3. Escalation**\nIf you are unsure about a situation, escalate it to a Senior Staff member or Management via the staff channels.\n\n" +
                "**4. Activity**\nMaintain your required weekly activity. If you cannot meet your quota, please submit an LOA request.";
        }

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setImage('https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=6a035832&is=6a0206b2&hm=5d110913583a6c848344e10d747c115bf398e8e2af0ec0b91a64b943e11f6436&=&format=webp&quality=lossless&width=2618&height=132')
            .setDescription(description)
            .setColor('#292929')
            .setFooter({ text: "Texas State Roleplay | Staff Management" });

        return interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};
