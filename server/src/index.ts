import Express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT;

const app = Express();

app.use(cors());

app.get('/', (req, res) =>  {
    res.json({message: "Welcome to my Server"})
})

app.listen(port, () => {
    console.log("Server has started on Port", port);
})