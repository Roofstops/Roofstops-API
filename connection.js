var environment= process.env.NODE_ENV||'ddevelopment';
var config=require('./knexfile');

module.exports = require('knex')(config);
