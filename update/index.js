'use strict';
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  // TODO implement

  const { name, number, favoriteFood } = JSON.parse(event.body);
  
  const id = event.pathParameters.id

  try {

    const data = await peopleModel.update({id, name, number, favoriteFood});

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

module.exports = handler;
