import "dotenv/config";
import express from 'express';
import cors from 'cors';
import portfolioRouter from './route/portflio.route'

const app = express(); 

//middlewares
app.use(cors());
app.use(express.json());
app.use(portfolioRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})

export default app;