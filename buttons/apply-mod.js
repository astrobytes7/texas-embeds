module.exports = {
    customID: 'apply-mod',
    execute: async (interaction, client) => {
        try {
            const { questions } = require('../utils/ApplicationHandler.js');
            
            // Start the application state
            client.applications.set(interaction.user.id, {
                step: 0,
                answers: []
            });

            await interaction.user.send(`**Texas State Roleplay Moderator Application**\nPlease answer the following questions one by one.\n\n${questions[0]}`);
            
            await interaction.reply({
                content: "✅ I have sent you a DM to start your application!",
                ephemeral: true
            });
        } catch (error) {
            client.applications.delete(interaction.user.id);
            await interaction.reply({
                content: "❌ I couldn't send you a DM. Please make sure your DMs are open!",
                ephemeral: true
            });
        }
    }
};
