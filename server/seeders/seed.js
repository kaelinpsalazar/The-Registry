const db = require('../config/connection');

const { Gifter } = require ('../models');
const { Recipients } = require ('../models');

const gifterSeeds = require('./gifterSeeds.json');
const recipientSeeds = require('./recipientSeeds');