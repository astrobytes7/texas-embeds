const { EmbedBuilder } = require("discord.js");

module.exports = {
    customID: 'rules-menu',
    execute: async (interaction, client) => {
        const selection = interaction.values[0];

        let title = '';
        let description = '';

        if (selection === 'discord_regs') {
            title = "Texas State Roleplay | Discord Regulations";
            description = "> Below are the rules all members of the community are needing to follow. Failure to follow these rules will result in punishments on the action. Let's as a community maintain a safe and fun environment. We thank you for joining our community and following our rules.\n\n" +
                "**1. Respect**\nPlease remain respectful to everyone within the server. Directing any form of disrespect towards staff or a member of this server is not tolerated and you will be punished accordingly.\n\n" +
                "**2. Nicknames**\nYou must have an appropriate nickname within the server or you may face moderation. It is so we can identify everyone with they're Roblox username if they join the ingame server.\n\n" +
                "**3. Profanity**\nPosting any forms of disturbing or inappropriate content that is not safe for work is not tolerated here. Minor slurs are acceptable; do not offend anyone based on religion, race, or any other traits.\n\n" +
                "**4. Spamming**\nNo spamming or flooding channels with text, links, or images. Repeated messages are useless and are considered spamming. This will result in a mute or kick.\n\n" +
                "**5. Alternative Accounts**\nYou are not allowed to have an alternative account within our server. The only exception is if your account gets deactivated or if you can't sign in to your main account. Escaping a punishment with another account is not acceptable.\n\n" +
                "**6. Mentions**\nYou are not allowed to ping Management+ unless you have a valid reason to do so. If you are replying to a message sent by Management+, that is fine for the most part, but turn the @ off. Open a ticket to request Management and above.\n\n" +
                "**7. Drama**\nCausing arguments or drama is not tolerated here. If you instigate or engage in arguments or drama it can and will lead to moderation based on the gravity of the situation.\n\n" +
                "**8. Voice Channel Abuse**\nScreaming into or making annoying sounds loudly within voice channels is not allowed. If you do this you will be server muted. If you decide to continue, you will be punished accordingly.\n\n" +
                "**9. Advertising**\nYou are not allowed to advertise within our server, meaning no invite links to other servers. The only form of advertising allowed is official affiliations. DM advertising is also strictly prohibited.\n\n" +
                "**10. Terms of Service**\nWe are a Roblox-based server that is using the Discord platform. Therefore, you are required to abide by the Discord Community Guidelines along with our rules above. Failing to do so may result in a permanent ban.";
        } else if (selection === 'ingame_regs') {
            title = "Texas State Roleplay | In-Game Regulations";
            description = "> Below are the rules all members of the community are needing to follow. Failure to follow these rules will result in punishments on the action. Let's as a community maintain a safe and fun environment. We thank you for joining our community and following our rules.\n\n" +
                "**1. Respect**\nPlease remain respectful to everyone within the server. Directing any form of disrespect towards staff or a member of this server is not tolerated and you will be punished accordingly.\n\n" +
                "**2. Random Deathmatch / Fail Roleplay**\nThere is a no-tolerance for going around and killing players for no reason. You must have a valid reason to kill a player. Failure to do so; will result in a punishment. Roleplay properly, do not interrupt roleplays and not roleplay.\n\n" +
                "**3. Vehicle Deathmatch / GTA Driving**\nDrive realistic and roleplay all crashes. Do not ram into poles, building, etc for no reason and cause a disturbance to the server. Driving away from a police officer minor erratically is acceptable. Do not GTA Drive.\n\n" +
                "**4. Safe Zones**\nAll spawn areas are safe zones. No shootings, arrests, or major actions there or punishments will occur.\n\n" +
                "**5. New Life Rule**\nIf you die or are arrested, you forget everything from that life. Do not go and chase others for revenge for killing you. Start a new life.\n\n" +
                "**6. Tool Abuse**\nDo not spam placeable objects or block public roads for no reason. Doing road-work is acceptable but make it realistic.\n\n" +
                "**7. Police Encounters**\nYou must have a valid roleplay reason to flee from police. Running because your scared or wanting to cop bait is not permitted. Do not bait cops into action.\n\n" +
                "**8. Avatars**\nAll avatars must be realistic. Roleplaying as an animal is not permitted.\n\n" +
                "**9. Large Roleplays**\nMajor scenes (hostage situations, bank robbery, and jewelry store.) require moderator approval.\n\n" +
                "**10. Impersonation**\nPretending to be staff or whitelisted department members will result in harsh punishments.\n\n" +
                "**11. Terms of Service**\nWe are a community based on Roblox. Follow all of Roblox's Terms Of Service so we can maintain a rule-following environment. Failure to follow will result in a permanent ban from the game server.";
        }

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setImage('https://media.discordapp.net/attachments/1500319658467655771/1500537768277839926/image.png?ex=6a035832&is=6a0206b2&hm=5d110913583a6c848344e10d747c115bf398e8e2af0ec0b91a64b943e11f6436&=&format=webp&quality=lossless&width=2618&height=132')
            .setDescription(description)
            .setColor('#292929')
            .setFooter({ text: "Staff enforce rules at their discretion. Complaints go to Management tickets." });

        return interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};
