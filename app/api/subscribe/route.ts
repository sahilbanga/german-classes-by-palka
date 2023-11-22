// // pages/api/subscribe/route.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { google } from 'googleapis';
//
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       // Handle POST request logic here
//       const { email } = req.body;
//
//       // Load your credentials file
//       const credentials = require('./client_secret_928303476837-e8rbefdh337cn4hc0c96tncgrevj6bn6.apps.googleusercontent.com.json');
//
//       // Set up the Google Sheets API
//       const sheets = google.sheets('v4');
//       const auth = new google.auth.GoogleAuth({
//         credentials,
//         scopes: 'https://www.googleapis.com/auth/spreadsheets',
//       });
//
//       const sheetsResponse = await sheets.spreadsheets.values.append({
//         auth: await auth.getClient(),
//         spreadsheetId: '1mz_UjjgKMunf-ayIqGw-SLmzUTaBX_s-r76OMhJ1rLk',
//         range: 'German-Classes-by-Palka-Subscriber-List', // Update with your sheet name
//         valueInputOption: 'USER_ENTERED',
//         resource: {
//           values: [[email]],
//         },
//       });
//
//       console.log('Subscriber added:', email);
//       return res.status(200).json({ message: 'Subscriber added successfully.' });
//     } catch (error) {
//       console.error('Error adding subscriber:', error.message);
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
//
//   // Handle other HTTP methods
//   res.status(405).json({ message: 'Method Not Allowed 123' });
// }


// pages/api/subscribe.js
import { google } from 'googleapis';
import serviceAccountKey from '../../../components/german-classes-by-palka-5f98e21debc6.json';
import { NextApiRequest, NextApiResponse } from 'next';

const jwtClient = new google.auth.JWT({
  email: serviceAccountKey.client_email,
  key: serviceAccountKey.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log('API route reached');
  console.log('Initial res:', res);
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email } = req.body;

  try {
    await jwtClient.authorize();

    const sheets = google.sheets({
      version: 'v4',
      auth: jwtClient,
    });

    const spreadsheetId = '1mz_UjjgKMunf-ayIqGw-SLmzUTaBX_s-r76OMhJ1rLk';
    const range = 'Sheet1';

    const values = [[email]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: { values },
    });
    console.log('res123', res)

    res.status(200).json({ success: true });
  } catch (error) {
    console.log('res321', res)
    console.error('Error:', error);
    console.error('Error in Google Sheets API request:', error);
    console.log('res:', res);
    return res.status(500).json({ success: false, error: 'Error in Google Sheets API request' });
  }
}

