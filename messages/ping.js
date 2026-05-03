module.exports = {
    name: 'ping',
    execute: async (message, args, client) => {
        message.reply(`The bot's ping is **${client.ws.ping}ms**.`);
    }
};
