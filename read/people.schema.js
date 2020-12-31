'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'number': Number,
  'favoriteFood': String

});

module.exports = dynamoose.model('people', peopleSchema);