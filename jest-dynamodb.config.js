module.exports = {
  tables: [
  {
    'TableName': 'people',
    'keySchema': [
      {
      'id': String,
      'name': String,
      'number': Number,
      'favoriteFood': String
      }
    ]
  }
  ]
}