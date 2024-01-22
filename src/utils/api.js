import { generateTokenUrl, getContentUrl } from '../utils/constant';

async function fetchData() {
  try {
    const generateTokenData = {
      email: "gurukiranb92@gmail.com"
    };

    const generateTokenResponse = await fetch(generateTokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(generateTokenData)
    }).then(response => response.json());

    // token needed for the next request
    const token = generateTokenResponse.token;

    // get content request
    const contentResponse = await fetch(getContentUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }).then(response => response.json());

    return contentResponse;
  } catch (error) {
    console.log("Error:", error);
  }
}

module.exports = { fetchData };
