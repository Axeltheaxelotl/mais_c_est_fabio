const axios = require('axios');
const config = require('../config');

exports.getUser = async (req, res) => {
  const login = req.params.login;
  try {
    const response = await axios.get(`https://api.intra.42.fr/v2/users/${login}`, {
      headers: { Authorization: `Bearer ${req.headers.authorization}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};

exports.getUserCursus = async (req, res) => {
  const login = req.params.login;
  try {
    const response = await axios.get(`https://api.intra.42.fr/v2/users/${login}/cursus_users`, {
      headers: { Authorization: `Bearer ${req.headers.authorization}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user cursus data' });
  }
};

exports.getCampusUsers = async (req, res) => {
  const campusId = req.params.campus_id;
  try {
    const response = await axios.get(`https://api.intra.42.fr/v2/campus/${campusId}/users`, {
      headers: { Authorization: `Bearer ${req.headers.authorization}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campus users data' });
  }
};
