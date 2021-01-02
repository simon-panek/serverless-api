'use strict';

const request = require('superagent');

// const create = require('../create/index.js');
// const read = require('../read/index.js');
// const update = require('../update/index.js');
// const deleteFunction = require('../delete/index.js');
// const DynamoCreate = require('../create/people.schema.js');
// const DynamoUpdate = require('../update/people.schema.js');
// const DynamoDelete = require('../delete/people.schema.js');
// const DynamoRead = require('../read/people.schema.js');
// var AWS = require('aws-sdk-mock');


// AWS.mock('DynamoDB', 'putItem', function(params, callback){
//   callback(null, "successfully put item in database");
// });

// AWS.mock('SNS', 'publish', 'test-message');

// awsMock("S3", "getObject", Buffer.from(require("fs").readFileSync("testFile.csv")));


// it("should mock getItem from DynamoDB", async () => { //set up test
//   // Overwriting DynamoDB.getItem()
//   AWSMock.setSDKInstance(AWS); // 
//   AWSMock.mock('DynamoDB', 'getItem', (GetItemInput, Function) => {
//     console.log('DynamoDB', 'getItem', 'mock called');
//     callback(null, {pk: "foo", sk: "bar"});
//   })

//   let GetItemInput = { TableName: '', Key: {} };
//   const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
//   expect(await dynamodb.getItem(input).promise()).toStrictEqual( { pk: 'foo', sk: 'bar' });

//   AWSMock.restore('DynamoDB');
// });

// it("should mock reading from DocumentClient", async () => {
//   // Overwriting DynamoDB.DocumentClient.get()
//   AWSMock.setSDKInstance(AWS);
//   AWSMock.mock('DynamoDB.DocumentClient', 'get', (GetItemInput, Function) => {
//     console.log('DynamoDB.DocumentClient', 'get', 'mock called');
//     callback(null, {pk: "foo", sk: "bar"});
//   })

//   let GetItemInput = { TableName: '', Key: {} };
//   const client = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
//   expect(await client.get(input).promise()).toStrictEqual( { pk: 'foo', sk: 'bar' });

//   AWSMock.restore('DynamoDB.DocumentClient');
// });


// describe ('Lambda Functions', () => {
//   it('1. The create function will store a person in the DB.', async ()=> {
//     const event = {body: {'name': 'test', 'number': 5, 'favoriteFood': 'cheese'}};
//     expect(await create(event)).toBe(200);
//   })
// })


// AWS.restore('SNS', 'publish');
// AWS.restore('DynamoDB');
// AWS.restore('S3');

/////////////Testing code below provided by "Complete Coding: https://www.youtube.com/watch?v=k-rOgqiGe34"///////////////////////

// describe ('Dynamo is an object', () => {
//   expect (typeof DynamoCreate).toBe('object');
// })

// describe('dynamo can save', () => {
//   expect(typeof DynamoCreate.save).toBe('function');
// })

// const validTableName = 'people';
// const data = { name: 'Tester', number: 4, favoriteFood: 'peanut butter'};

// describe ('dynamo save works', async () => {
//   expect.assertions(1);
//   try {
//     const res = await DynamoCreate.save(data, validTableName);
//     expect (res).toBe(data);
//   } catch (error) {
//     console.log('error in dynamo write test', error);
//   }
// })

// describe ('dynamo read works', async () => {
//   expect.assertions(1);
//   try {
//     const res = await DynamoRead.(data, validTableName);
//     expect (res).toBe(data);
//   } catch (error) {
//     console.log('error in dynamo write test', error);
//   }
// })


/////////////Testing code above provided by "Complete Coding: https://www.youtube.com/watch?v=k-rOgqiGe34"///////////////////////

//////////////Example From Sara Strasner (Thanks!) below ////////////////
// 'use strict';
let url = 'https://jndzuimsqh.execute-api.us-west-2.amazonaws.com/people/';
// const request = require('superagent');
describe('Tests Read Lambda', () => {
  it('GET', async () => {
    const response = await request.get(url);
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  })
})
//////////////////////////////////////////////////////////////////////////


let url2 = 'https://5c7osee1x2.execute-api.us-west-2.amazonaws.com/people';

describe('Tests Create Lambda', () => {
  it('POST', async () => {
    const response = await request.post(url2).send({ name: 'Jane', number: 488, favoriteFood: 'yogurt' });
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  })
})

let id1 = '03ec7834-3a0e-45d8-ba36-05ff6ec0c058';
let url3 = `https://40xvnzy0ql.execute-api.us-west-2.amazonaws.com/people/${id1}`;

describe('Tests Update Lambda', () => {
  it('PUT', async () => {
    const response = await request.put(url3).send({ name: 'UpdateTest', number: 111, favoriteFood: 'UpdatedFood'});;
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  })
})

let id2 = '03ec7834-3a0e-45d8-ba36-05ff6ec0c058';
let url4 = `https://ocsgdl6wvh.execute-api.us-west-2.amazonaws.com/people/${id2}`;

describe('Tests Delete Lambda', () => {
  it('DELETE', async () => {
    const response = await request.delete(url4);
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  })
})