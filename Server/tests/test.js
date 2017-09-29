
import { describe, it } from 'mocha';
import chai, ( expect ) from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
  
  describe('Tests for more-recipes API endpoints', () => {
    describe("Handles all valid endpoints", () => {
      describe('/GET: /api/v1/recipes', () => {
        it('it should GET all recipes', (done) => {
          chai.request(app).get('/api/v1/recipes').end((error))
        })
        it('should return status code 404 when user visit an unregistered route', (done) => {
          chai.request(server)
            .get('/api')
            .end((err, res) => {
              expect(res.statusCode).to.equal(404);
              expect(res.body).to.deep.equal({
                message: 'That route does not exist',
              });
              done();
            });
        });
      });
