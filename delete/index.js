'use strict';
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameters.id

  try {
    await peopleModel.delete(id);
    let data = {};
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e.message)
    }
  }
};
