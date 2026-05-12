const { EmbedBuilder } = require("discord.js");

module.exports = {
    customID: 'apply-mod',
    execute: async (interaction, client) => {
        const embed = new EmbedBuilder()
            .setTitle("In-Game Moderator Application")
            .setDescription("> To apply for In-Game Moderator, please ensure you meet all requirements and then fill out the application form below.\n\n**Application Link:** [Apply Here](https://melon.ly/join/playcal)\n\n*Note: Your application will be reviewed by Management within 24-48 hours.*")
            .setColor('#292929')
            .setImage('https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=6a035832&is=6a0206b2&hm=5d110913583a6c848344e10d747c115bf398e8e2af0ec0b91a64b943e11f6436&=&format=webp&quality=lossless&width=2618&height=132')
            .setFooter({ text: "Texas State Roleplay | Recruitment" });

        return interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};
