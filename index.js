import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
    origin:true
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})