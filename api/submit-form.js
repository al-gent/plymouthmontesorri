import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  console.log('Handler invoked'); // Log to confirm function is triggered
  if (req.method === 'POST') {
    try {
      // Load service account credentials
      const credentials = {
        type: 'service_account',
        project_id: process.env.SERVICE_ACCOUNT_PROJECT_ID,
        private_key_id: process.env.SERVICE_ACCOUNT_PRIVATE_KEY_ID,
        private_key: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
        client_id: process.env.SERVICE_ACCOUNT_CLIENT_ID,
        auth_uri: process.env.SERVICE_ACCOUNT_AUTH_URI,
        token_uri: process.env.SERVICE_ACCOUNT_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.SERVICE_ACCOUNT_AUTH_PROVIDER_CERT_URL,
        client_x509_cert_url: process.env.SERVICE_ACCOUNT_CLIENT_CERT_URL,
        universe_domain: "googleapis.com"

      };
      console.log(credentials)
      // Authenticate with Google Sheets API
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      
      const sheets = google.sheets({ version: 'v4', auth });

      // Your Google Sheet ID
      const spreadsheetId = '1IQ4QNRamtJR04Z4t0ThIimv-QkaYKX0w3eh5pQFAJyA';

      // Get form data
      const { name, email, comments } = req.body;
      const now = new Date();

      // Convert to US Central Time
      const options = {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: 'long', // Full month name
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // 12-hour format
      };
      
      const timestamp = new Intl.DateTimeFormat('en-US', options).format(now);
    
      
      // Append data to the sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1', // Adjust if your sheet has a different name
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, email, comments, timestamp]],
        },
      });

      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error writing to Google Sheets:', error);
      res.status(500).json({ error: 'Failed to submit form' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
