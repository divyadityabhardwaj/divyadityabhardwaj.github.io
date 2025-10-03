// Script to get Spotify Refresh Token
// 
// Instructions:
// 1. Go to https://developer.spotify.com/dashboard
// 2. Create a new app and get your Client ID and Client Secret
// 3. Add http://localhost:3000/callback to Redirect URIs in app settings
// 4. Replace the values below with your actual credentials
// 5. Get authorization code by visiting the URL printed below
// 6. After authorizing, copy the 'code' parameter from the redirect URL
// 7. Paste it in AUTHORIZATION_CODE below and run this script again

const CLIENT_ID = 'your_client_id_here';
const CLIENT_SECRET = 'your_client_secret_here';
const AUTHORIZATION_CODE = 'paste_authorization_code_here';

// Choose ONE of these redirect URIs (must match exactly in Spotify app settings):
const REDIRECT_URI = 'http://localhost:3000/api/spotify/callback';

// If you don't have the authorization code yet, use this URL:
if (AUTHORIZATION_CODE === 'paste_authorization_code_here') {
  console.log('\n📝 Step 1: Get Authorization Code');
  console.log('Visit this URL in your browser:\n');
  console.log(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-currently-playing user-read-playback-state\n`);
  console.log('After authorizing, copy the "code" parameter from the redirect URL');
  console.log('Paste it in the AUTHORIZATION_CODE variable in this script and run again.\n');
  process.exit(0);
}

// Exchange authorization code for refresh token
console.log('🔄 Exchanging authorization code for refresh token...\n');

fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code: AUTHORIZATION_CODE,
    redirect_uri: REDIRECT_URI
  })
})
.then(res => res.json())
.then(data => {
  if (data.error) {
    console.error('❌ Error:', data.error);
    console.error('Description:', data.error_description);
    process.exit(1);
  }
  
  console.log('✅ Success! Add these to your .env file:\n');
  console.log('NEXT_SPOTIFY_CLIENT_ID=' + CLIENT_ID);
  console.log('NEXT_SPOTIFY_CLIENT_SECRET=' + CLIENT_SECRET);
  console.log('NEXT_SPOTIFY_REFRESH_TOKEN=' + data.refresh_token);
  console.log('\n📝 Note: Keep these values secret and never commit them to Git!\n');
})
.catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
