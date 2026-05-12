const { EmbedBuilder } = require("discord.js");

const questions = [
    "1. What is your roblox username?",
    "2. What is your timezone?",
    "3. How old are you?",
    "4. Do you have any past experience? List the ranks and the server names.",
    "5. Why should we pick you over other applicants? 2+ Sentences",
    "6. What does RDM stand for? Please provide an example. 2+ Sentences",
    "7. What does VDM stand for? Please provide an example. 2+ Sentences",
    "8. What does NLR stand for? Please provide an example. 2+ Sentences",
    "9. What would you do if you saw a staff member abusing commands? 2+ sentences",
    "10. What would you do if you saw a high rank abusing commands? 2+ Sentences",
    "11. What does FRP stand for? Please provide an example. 2+ sentences",
    "12. Do you promise to be active. Yes/No",
    "13. Do you have any questions for us?"
];

async function handleApplicationStep(message, client) {
    const userId = message.author.id;
    const appState = client.applications.get(userId);

    if (!appState) return;

    // Store the answer
    appState.answers.push({
        question: questions[appState.step],
        answer: message.content
    });

    appState.step++;

    if (appState.step < questions.length) {
        // Send next question
        await message.author.send(questions[appState.step]).catch(() => {
            client.applications.delete(userId);
        });
    } else {
        // Application complete
        client.applications.delete(userId);
        await message.author.send("Thank you for submitting an application, please be patient for a staff member to read your application.").catch(() => {});

        // Send to log channel
        try {
            const guild = client.guilds.cache.get(client.config.GUILD_ID);
            const logChannel = guild.channels.cache.get('1503597623150645298');
            
            if (logChannel) {
                const embed = new EmbedBuilder()
                    .setTitle("New Moderator Application")
                    .setColor('#292929')
                    .setDescription(`**Applicant:** ${message.author.tag} (${message.author.id})`)
                    .setImage('https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=6a035832&is=6a0206b2&hm=5d110913583a6c848344e10d747c115bf398e8e2af0ec0b91a64b943e11f6436&=&format=webp&quality=lossless&width=2618&height=132')
                    .setFooter({ text: "Texas State Roleplay | Recruitment" })
                    .setTimestamp();

                appState.answers.forEach(ans => {
                    // Truncate if too long for field
                    const val = ans.answer.length > 1024 ? ans.answer.substring(0, 1021) + "..." : ans.answer;
                    embed.addFields({ name: ans.question, value: val });
                });

                const logMsg = await logChannel.send({ embeds: [embed] });
                await logMsg.startThread({
                    name: 'discussion',
                    autoArchiveDuration: 1440,
                }).catch(() => {});
            }
        } catch (error) {
            console.error("Failed to log application:", error);
        }
    }
}

module.exports = { handleApplicationStep, questions };
