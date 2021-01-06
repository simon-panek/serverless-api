# LAB - Class 18

## Project: AWS, Dynamo, and Lambda

- The project uses four AWS API Gateways matched to four Lambda functions to insert, retrieve, update, and delete records from a dynamo database.

### Author: Simon

### Links and Resources

- [GitHub Actions](https://github.com/simon-panek/serverless-api/actions/new) 

### Setup

#### How to initialize/run your application (where applicable)

- Routes
  - POST: `https://5c7osee1x2.execute-api.us-west-2.amazonaws.com/people`
    - Required input: `{ "name": "person's name", "number": 4, "favoriteFood": "favorite food" }`
    - Output: `{"id":"2f04cdca-f597-4e93-9469-8b4e5f566593","name":"stu","number":3,"favoriteFood":"stew"}`
  - GET: `https://jndzuimsqh.execute-api.us-west-2.amazonaws.com/people/{id}`
    - Required input to return all items from the DB: None
      - Output: An array of objects containing all of the records currently in the the DB
    - Required input to return a single record: A valid ID must be passed as a parameter
      - Output: `{"id":"2f04cdca-f597-4e93-9469-8b4e5f566593","name":"stu","number":3,"favoriteFood":"stew"}`
  - PUT: `https://40xvnzy0ql.execute-api.us-west-2.amazonaws.com/people/{id}`
    - Required input: A valid ID must be passed as a parameter and the body must contain `{ "name": "updated name", "number": 9, "favoriteFood": " updated favorite food" }`
    - Output: `{"id":"2f04cdca-f597-4e93-9469-8b4e5f566593","name":"updated name,"number":9,"favoriteFood":"updated favorite food"}`
  - DELETE: `https://ocsgdl6wvh.execute-api.us-west-2.amazonaws.com/people/{id}`
    - Required input to return a single record: A valid ID must be passed as a parameter
    - Output: `{}`

#### Tests

- `npm test`
- Tests confirm the functionality of each route

#### UML

![UML Diagram](401-lab-18-uml.png)
