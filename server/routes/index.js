require('dotenv').config()
const routes = require('express').Router();
const repositories = require('./repositories');

routes.use('/repositories', repositories);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
