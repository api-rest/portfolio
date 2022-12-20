import request from 'supertest';
import app from '../src/app';
import { portfolio } from '../src/model/portfolio.model';

const projectToTest = {
    "name": "Proyecto-testing",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "url": "http://www.hooli.xyz/",
    "highlights": [],
    "keywords": [],
    "roles": [],
    "startDate": "",
    "endDate": "",
    "displayName": "Proyecto Testing",
    "website": "http://www.hooli.xyz/",
    "summary": "Making files smaller",
    "languages": ["Go", "C++"],
    "libraries": [],
    "githubUrl": "https://github.com/portfolio-api-demo/middle-out-compression",
    "repositoryUrl": "https://github.com/portfolio-api-demo/middle-out-compression",
    "images": [
      {
        "micro": {
          "url": "https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-micro",
          "size": 1228,
          "width": 32,
          "height": 22
        },
        "thumbnail": {
          "url": "https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-thumbnail",
          "size": 4326,
          "width": 224,
          "height": 155
        },
        "mobile": {
          "url": "https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-mobile",
          "size": 7821,
          "width": 400,
          "height": 277
        },
        "desktop": {
          "url": "https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-desktop",
          "size": 7836,
          "width": 400,
          "height": 277
        }}]}

// describe('Get whole portfolio', ()=>{
//     test('Get /portfolio should respond with a 200 status code', async ()=>{
//         const response = await request(app).get('/portfolio').send()
//         expect(response.statusCode).toBe(200)
//     })
//     test('Get /portfolio should respond with a json object', async ()=>{
//         const response = await request(app).get('/portfolio').send()
//         //  expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
//          expect(response.type).toBe('application/json')
//     })
//     test('Get /portfolio does not return an empty json', async ()=>{
//         const response = await request(app).get('/portfolio').send()
//         // expect(response.body).not.toBeNull()
//         expect(response.noContent).toEqual(false)
        
//     })
//     test('Get /portfolio should have a name into basics', async ()=>{
//         const response = await request(app).get('/portfolio').send()
//         expect(response.body.portfolio.basics.name).toBeDefined()
//     })
// })

// describe('Get all projects', ()=>{
//     test('Get /portfolio/project should respond with a 200 status code', async ()=>{
//         const response = await request(app).get('/portfolio/project').send()
//         expect(response.statusCode).toBe(200)
//     })
//     test('Get /portfolio/project should respond with a json object', async ()=>{
//         const response = await request(app).get('/portfolio/project').send()
//          expect(response.type).toBe('application/json')
//     })
//     test('Get /portfolio/project does not return an empty json', async ()=>{
//         const response = await request(app).get('/portfolio/project').send()
//         expect(response.noContent).toEqual(false)
        
//     })
//     test('Get /portfolio/project should have a name', async ()=>{
//         const response = await request(app).get('/portfolio/project').send()
//         expect(response.body.projects).toBeInstanceOf(Array)
//     })
// })

// describe('Get 1 projects in position [id]', ()=>{
//     test('Get /portfolio/project/0 should respond with a 200 status code', async ()=>{
//         const response = await request(app).get('/portfolio/project/0').send()
//         expect(response.statusCode).toBe(200)
//     })
//     test('Get /portfolio/project/0 should respond with a json object', async ()=>{
//         const response = await request(app).get('/portfolio/project/0').send()
//          expect(response.type).toBe('application/json')
//     })
//     test('Get /portfolio/project/0 does not return an empty json', async ()=>{
//         const response = await request(app).get('/portfolio/project/0').send()
//         expect(response.noContent).toEqual(false)
        
//     })
//     test('Get /portfolio/project/0 should have a name', async ()=>{
//         const response = await request(app).get('/portfolio/project/0').send()
//         expect(response.body.project.name).toBeDefined()
//     })
// })


// describe('Post one project', ()=>{
//     test('Post /portfolio/project should respond with a 201 status code', async ()=>{
//         const response = await request(app).post('/portfolio/project').send(projectToTest)
//         expect(response.statusCode).toBe(201)
//     })
//     test('Post /portfolio/project does not return an empty json', async ()=>{
//         const response = await request(app).post('/portfolio/project').send(projectToTest)
//         expect(response.noContent).toEqual(false)
//     })})

    
// describe('Update a project', ()=>{
//     test('Put /portfolio/project/1 should respond with a 200 status code', async ()=>{
//         const response = await request(app).put('/portfolio/project/1').send(projectToTest)
//         expect(response.statusCode).toBe(200)
//     })
//     test('Put /portfolio/project/1 does not return an empty json', async ()=>{
//         const response = await request(app).put('/portfolio/project/1').send(projectToTest)
//         expect(response.noContent).toEqual(false)
//     })

describe('Delete a project', ()=>{
    test('Delete /portfolio/project/0 should respond with a 200 status code', async ()=>{
        const response = await request(app).delete('/portfolio/project/0').send()
        expect(response.statusCode).toBe(200)
    })
    test('Delete /portfolio/project/0 should eliminate 1 project from the project Array', async ()=>{
        const numberOfProjects = portfolio.projects.length
        const response = await request(app).delete('/portfolio/project/0').send()
        expect(portfolio.projects.length).toEqual(numberOfProjects - 1)
    })


})
// })