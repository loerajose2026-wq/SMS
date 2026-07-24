require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Initialize Twilio using Master Account SID and Master Auth Token
const client = new twilio(accountSid, authToken);

async function fetchSmsFromNumber() {
    try {
        console.log('Fetching messages from +19562854745...');
        
        const messages = await client.messages.list({
            from: '+19562854745',
            limit: 10
        });

        if (messages.length === 0) {
            console.log('No messages found from this sender.');
            return;
        }

        console.log(`\nFound ${messages.length} message(s):\n`);
        messages.forEach(msg => {
            console.log(`[${msg.dateCreated.toLocaleString()}]`);
            console.log(`Body: ${msg.body}`);
            console.log('-----------------------------------');
        });

    } catch (error) {
        console.error('Error fetching messages:', error.message);
    }
}

fetchSmsFromNumber();