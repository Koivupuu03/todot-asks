const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index'); // Import your Express app
const { expect } = chai;
chai.use(chaiHttp);

describe('Todo API', () => {
    // Test for GET /tasks
    it('should return an array of tasks', (done) => {
        chai.request(app)
            .get('/tasks')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                if (res.body.length > 0) {
                    expect(res.body[0]).to.include.keys('id', 'description');
                }
                done();
            });
    });

    // Test for POST /tasks
    it('should create a new task', (done) => {
        chai.request(app)
            .post('/tasks')
            .send({ description: 'Test task' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.include.keys('id', 'description');
                done();
            });
    });

    // Test for DELETE /tasks/:id
    it('should delete a task by ID', (done) => {
        chai.request(app)
            .post('/tasks')
            .send({ description: 'Task to delete' })
            .end((err, res) => {
                const taskId = res.body.id;
                chai.request(app)
                    .delete(`/tasks/${taskId}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body.message).to.equal('Task deleted');
                        done();
                    });
            });
    });
});

"scripts": {
  "test": "mocha '**/*.test.js'"
}

