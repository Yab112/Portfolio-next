// app.js
import express from 'express';
import morgan from 'morgan';
import contactRoute from "./routes/contactRoutes.js"
import cors from 'cors';
const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors(
    {
      origin: "https://hotel-backend-xi.vercel.app",
      methods: ["POST", "GET", "DELETE", "PUT"],
      credentials: true
    }
  ));

app.use("/",contactRoute)

export default app;
