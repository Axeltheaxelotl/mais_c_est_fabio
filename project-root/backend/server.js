const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const config = require('./config');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
