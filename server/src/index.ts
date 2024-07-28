import Express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from '@/db';
import { authRouter } from '@/routes/authRoute';
import { taskRouter } from '@/routes/taskRoute';

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

app.use('/api/auth', authRouter);
app.use('/api/task', taskRouter);

app.listen(port, () => {
    connectDb();
    console.log("Server has started on Port", port);
})