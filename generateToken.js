const jwt = require('jsonwebtoken');
const path = require('path');


const config = require(path.resolve(__dirname, './src/app/config/index')).default;
console.log(config)

const userData = {
  id: '60d9c4e4f3b4b544b8b8d1c5',  // Replace with an actual user ID from your database
  role: 'admin'
};

const token = jwt.sign(userData, config.jwt.secret, { expiresIn: '1h' });

console.log('Generated JWT Token:', token);
