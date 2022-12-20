import jest from 'jest';
import request from 'supertest';
import app from '../src/app';


describe('Get whole portfolio', ()=>{
    test('Get /portfolio should respond with a 200 status code', async ()=>{
        const response = await request(app).get('/portfolio').send()
        expect(response.statusCode).toBe(200)
    })
    test('Get /portfolio should respond with a json object', async ()=>{
        const response = await request(app).get('/portfolio').send()
        //  expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
         expect(response.type).toBe('application/json')
    })
    test('Get /portfolio does not return an empty json', async ()=>{
        const response = await request(app).get('/portfolio').send()
        // expect(response.body).not.toBeNull()
        expect(response.noContent).toEqual(false)
        
    })
    test('Get /portfolio should have a name into basics', async ()=>{
        const response = await request(app).get('/portfolio').send()
        expect(response.body.portfolio.basics.name).toBeDefined()
    })
})


describe('Post one project', ()=>{

    //     test('Post /portfolio/project should have a property named name', async ()=>{
    //     const response = await request(app).get('/portfolio').send()
    //      .expect('Content-Type', /json/)
    //      response.body.should.have.property("name", "new_org")

    // })
})