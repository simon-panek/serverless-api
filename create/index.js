'use strict';
const uuid = require('uuid').v4;
const peopleModel = require('./people.schema.js');


exports.handler = async (event) => {
  // TODO implement

  const { name, number, favoriteFood } = JSON.parse(event.body);
  
  const id = uuid();

  try {
    const record = new peopleModel({ id, name, number, favoriteFood });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
};

module.exports = exports.handler;
