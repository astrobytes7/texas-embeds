const { EmbedBuilder } = require("discord.js");

module.exports = {
    customID: 'ban-appeal-modal',
    execute: async (interaction, client) => {
        const robloxUser = interaction.fields.getTextInputValue('roblox-username');
        const reason = interaction.fields.getTextInputValue('ban-reason');
        const secondChance = interaction.fields.getTextInputValue('second-chance');
        const prevention = interaction.fields.getTextInputValue('prevention');

        const appealEmbed = new EmbedBuilder()
            .setTitle("Ban Appeal Submitted")
            .setDescription(`**User:** ${interaction.user.tag} (${interaction.user.id})\n**Roblox Username:** ${robloxUser}`)
            .addFields(
                { name: "Reason for Ban", value: reason },
                { name: "Why do you deserve a second chance?", value: secondChance },
                { name: "What will you do to not do it again?", value: prevention }
            )
            .setColor('#292929')
            .setTimestamp()
            .setFooter({ text: "Texas State Roleplay | Ban Appeal System" });

        // You can add a channel ID here to log the appeal
        // const logChannel = interaction.guild.channels.cache.get('YOUR_CHANNEL_ID');
        // if (logChannel) logChannel.send({ embeds: [appealEmbed] });

        await interaction.reply({
            content: "✅ Your ban appeal has been successfully submitted and will be reviewed by Management shortly.",
            ephemeral: true
        });
    }
};
