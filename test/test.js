var request = require('supertest');
var app = require('../app.js');

describe('GET /', function () {
  it('/ responds with 200', function(done) {
    request(app).get('/').expect(200, done);
  });
});

describe('POST /send/to/toto', function () {
  it('/send/to/toto responds with 200', function (done) {
    request(app).post('/send/to/toto').send({ "name": "Nombre", "content":"Contenido" }).expect(200, done);
  });
});

describe('POST /send/to/toto', function () {
  it('/send/to/toto responds with 400 if nothing sent', function (done) {
    request(app).post('/send/to/toto').send().expect(400, done);
  });
});
