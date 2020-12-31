const body = JSON.parse(event.body);
// GET/mugs/{id}
// POST/mugs
// PUT/mugs/{id}
// DELETE/mugs/{id}

const id = event.pathParameters.id; //aws parameter