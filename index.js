const { Events, ActivityType, Client, PermissionsBitField } = require('discord.js');
const mongoose = require('mongoose');
const fs = require('node:fs');
const path = require('node:path');


const client = new Client({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildMessages",
        "GuildPresences",
        "DirectMessages",
        "MessageContent"
    ]
});

client.config = require('./config.js');
client.cooldowns = new Map();
client.cache = new Map();
client.messages = new Map();
client.applications = new Map();

require('./utils/ComponentLoader.js')(client);
require('./utils/EventLoader.js')(client);
require('./utils/RegisterCommands.js')(client);

(async function () {
    if (!client.config.mongoURL) {
        console.warn('Skipping database connection');
        return;
    }
    await mongoose.connect(client.config.mongoURL);
    console.log('I have connected to the database succesfully');
})();

client.login(client.config.TOKEN);

client.on(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('/help | noteshan.xyz', { type: ActivityType.Customs });
});


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // Handle DM Application Flow
    if (!message.guild && client.applications.has(message.author.id)) {
        const { handleApplicationStep } = require('./utils/ApplicationHandler.js');
        return handleApplicationStep(message, client);
    }

    const prefix = client.config.prefix;
    if (!prefix || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Suspension check
    if (commandName !== 'suspend') {
        try {
            const suspendedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'suspended.json'), 'utf8'));
            if (suspendedData.suspended) {
                return message.reply("<:click:1500622035301433455> The bot is currently **suspended**, please contact **not.eshan** to renew your bot.");
            }
        } catch (e) {}
    }

    const command = client.messages.get(commandName);

    if (!command) return;

    try {
        await command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply(`There was an error running this command:\n\`\`\`${error.message || error}\`\`\``);
    }
});

async function InteractionHandler(interaction, type) {
    // Suspension check for interactions
    try {
        const suspendedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'suspended.json'), 'utf8'));
        if (suspendedData.suspended) {
            const content = "<:click:1500622035301433455> The bot is currently **suspended**, please contact **not.eshan** to renew your bot.";
            if (interaction.replied || interaction.deferred) {
                return await interaction.editReply({ content, ephemeral: true }).catch(() => {});
            }
            return await interaction.reply({ content, ephemeral: true }).catch(() => {});
        }
    } catch (e) {}

    const component = client[type].get(interaction.customId ?? interaction.commandName);

    if (!component) return;
    try {
        await component.execute(interaction, client);
    } catch (error) {
        console.error(error);
        await interaction.deferReply({ ephemeral: true }).catch(() => { });
        await interaction.editReply({
            content: `There was an error while executing this command!\n\`\`\`${error}\`\`\``,
            embeds: [],
            components: [],
            files: []
        }).catch(() => { });
    }
}

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) return InteractionHandler(interaction, 'commands');
    if (interaction.isButton()) return InteractionHandler(interaction, 'buttons');
    if (interaction.isStringSelectMenu()) return InteractionHandler(interaction, 'dropdowns');
    if (interaction.isModalSubmit()) return InteractionHandler(interaction, 'modals');
});
