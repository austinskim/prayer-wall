import * as request from 'supertest';
import { expect } from 'chai';
import app from '../server/server';

describe('GET /healthcheck', () => {
  it('should return 200 OK', () => {
    return request(app)
      .get('/healthcheck')
      .expect(200)
      .then(res => {
        expect(res.body).have.property('message');
      });
  });
});
