import express from 'express';
import cors from 'cors';

const app = express(); 

//middlewares
app.use(cors())
app.use(express.json())


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})