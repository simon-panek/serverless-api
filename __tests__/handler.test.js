//'use strict';

// const create = require('../create/index.js');
// const read = require('../read/index.js');
// const update = require('../update/index.js');
// const deleteFunction = require('../delete/index.js');
// var AWS = require('aws-sdk-mock');

// AWS.mock('DynamoDB', 'putItem', function(params, callback){
//   callback(null, "successfully put item in database");
// });

// AWS.mock('SNS', 'publish', 'test-message');

// awsMock("S3", "getObject", Buffer.from(require("fs").readFileSync("testFile.csv")));


// describe ('Lambda Functions', () => {
//   it('1. The create function will store a person in the DB.', async ()=> {
//     const event = {body: {'name': 'test', 'number': 5, 'favoriteFood': 'cheese'}};
//     expect(await create(event)).toBe(200);
//   })
// })


// AWS.restore('SNS', 'publish');
// AWS.restore('DynamoDB');
// AWS.restore('S3');
