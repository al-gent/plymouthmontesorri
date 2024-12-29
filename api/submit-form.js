import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Load service account credentials
      const keyFilePath = path.join(process.cwd(), 'service-account.json');
      const credentials = JSON.parse(await fs.readFile(keyFilePath, 'utf8'));

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
      const timestamp = new Date().toISOString();

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
