'use strict';
const uuid = require('uuid').v4;
const peopleModel = require('./people.schema.js');

// if(process.env.JEST_WORKER_ID){
//  let options = {
//     endpoint: 'http://localhost:8000',
//     region: 'local-env',
//     sslEnabled: false
//   }
// }

// const documentClient = new AWS.DynamoDB.DocumentClient(options);

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
