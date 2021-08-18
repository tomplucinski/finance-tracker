const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

describe('Integration tests for income endpoint', () => {

    it('GET /api/income returns 200', async (done) => {
        const response = await request.get('/api/income')
        expect(response.status).toBe(200);
        done();
    });
});