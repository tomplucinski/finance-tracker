const app = require('../../index');
const supertest = require('supertest');
const request = supertest(app);

describe('Integration tests for income endpoint', () => {

    it('POST /api/income returns 200 after adding it to the DB', async (done) => {
        const response = await request.get('/api/income')
        expect(response.status).toBe(200);
        done();
    });
});