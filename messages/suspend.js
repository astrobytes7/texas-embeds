const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    name: 'suspend',
    execute: async (message, args, client) => {
        // Only allow the authorized user to run this command
        if (message.author.id !== '1396979947284729856') {
            return message.reply("<:click:1500622035301433455> You do not have permission to use this command.");
        }

        const filePath = path.join(__dirname, '../suspended.json');

        try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            data.suspended = !data.suspended;
            fs.writeFileSync(filePath, JSON.stringify(data, null, 4));

            const status = data.suspended ? 'suspended' : 'unsuspended';
            message.reply(`The bot has been **${status}**.`);
        } catch (error) {
            console.error(error);
            message.reply('There was an error updating the suspension status.');
        }
    }
};
