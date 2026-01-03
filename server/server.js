import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDb from "./config/mongoDb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

//Initialize express
const app = express();

//Connect to Database
connectDb();

//Middlewares
app.use(cors())


//Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})