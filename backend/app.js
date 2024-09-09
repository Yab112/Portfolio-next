// app.js
import express from 'express';
import morgan from 'morgan';
import contactRoute from "./routes/contactRoutes.js"
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors());

app.use("/",contactRoute)

export default app;
