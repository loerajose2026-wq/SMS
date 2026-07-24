# Twilio SMS Fetch

This application fetches SMS messages from a specific Twilio phone number.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your Twilio credentials:
     - `TWILIO_ACCOUNT_SID` - Your Twilio Account SID
     - `TWILIO_AUTH_TOKEN` - Your Twilio Auth Token
     - `TWILIO_NUMBER` - Your Twilio phone number

3. **Run the script:**
   ```bash
   npm start
   ```

## Security

⚠️ **IMPORTANT:** Never commit `.env` file containing real credentials!
- The `.gitignore` file prevents accidental commits
- Always use `.env.example` as a template
- Keep your credentials private

## Features

✅ Fetch last 10 messages from a specific number
✅ Display message timestamps and content
✅ Error handling for failed requests
✅ Secure credential management with dotenv