const axios = require('axios');
const config = require('../config');

exports.login = (req, res) => {
  const redirectUri = `https://api.intra.42.fr/oauth/authorize?client_id=${config.clientId}&redirect_uri=${config.redirectUri}&response_type=code`;
  res.redirect(redirectUri);
};

exports.callback = async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post('https://api.intra.42.fr/oauth/token', {
      grant_type: 'authorization_code',
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: code,
      redirect_uri: config.redirectUri
    });
    const accessToken = response.data.access_token;
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: 'Failed to exchange code for token' });
  }
};
