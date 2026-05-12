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
            .setImage('https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=6a035832&is=6a0206b2&hm=5d110913583a6c848344e10d747c115bf398e8e2af0ec0b91a64b943e11f6436&=&format=webp&quality=lossless&width=2618&height=132')
            .setFooter({ text: "Texas State Roleplay | Ban Appeal System" });

        const logChannel = interaction.guild.channels.cache.get('1503596513123631114');
        if (logChannel) {
            const logMessage = await logChannel.send({ embeds: [appealEmbed] });
            await logMessage.startThread({
                name: 'discussion',
                autoArchiveDuration: 1440,
            }).catch(() => {});
        }

        await interaction.reply({
            content: "Your ban appeal has been successfully submitted and will be reviewed by Management shortly.",
            ephemeral: true
        });
    }
};
