
import {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('/GET: /api', () => {
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