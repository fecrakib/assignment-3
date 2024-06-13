const jwt = require('jsonwebtoken');
const config = require('./src/app/config/index').default; // Example path to your config file

const userData = {
  id: '60d9c4e4f3b4b544b8b8d1c5',
  role: 'admin'
};

const token = jwt.sign(userData, config.jwt.secret, { expiresIn: config.jwt.expiresIn });

console.log('Generated JWT Token:', token);
