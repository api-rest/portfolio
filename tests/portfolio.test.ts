import jest from 'jest';
import request from 'supertest';
import app from '../src/app';

import {PortfolioModel} from '../src/model/portfolio.model';
const Portfolio = new PortfolioModel();

describe('Get whole portfolio', ()=>{
    test('Get /portfolio should respond with a 200 status code', async ()=>{
        const response = await request(app).get('/portfolio').send()
        expect(response.statusCode).toBe(200)
    })
    test('Get /portfolio should respond with a json object of class PortfolioModel', async ()=>{
        const response = await request(app).get('/portfolio').send()
        // const responseJson = JSON.stringify(response)
        // const responseString = JSON.parse(responseJson)
        // expect(response.body).toMatchJSON(Portfolio)
    })
})