import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDb from "./config/mongoDb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./config/cloudinary.js";

//Initialize express
const app = express();

//Connect to Database
connectDb();
await connectCloudinary();

//Middlewares
app.use(cors())
app.use(clerkMiddleware());


//Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', express.json(), educatorRouter);

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})