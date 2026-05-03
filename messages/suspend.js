const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    name: 'suspend',
    execute: async (message, args, client) => {
        // Only allow not.eshan (user ID or tag check if you want, but for now it's open as requested)
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
