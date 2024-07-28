import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from '@/db';
import { authRouter } from '@/routes/authRoute';
import { taskRouter } from '@/routes/taskRoute';
import session from 'express-session'
import MongoStore from 'connect-mongo';

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'my_secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      ttl: 14 * 24 * 60 * 60,
      autoRemove: 'native'
    }),
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      httpOnly: true
    }
}))

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