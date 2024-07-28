import Express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from '@/db';

dotenv.config();
const port = process.env.PORT;

const app = Express();

app.use(cors());

app.get('/', (req, res) =>  {
    res.json({
        status: true,
        message: "Welcome to my server!"
    })
})

app.listen(port, () => {
    connectDb();
    console.log("Server has started on Port", port);
})