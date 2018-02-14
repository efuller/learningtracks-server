import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

dotenv.config();
const app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (err) => {
    console.error(`Mongo Error: ${err.message}`)
});

app.use("/static", express.static(path.join(__dirname, "static")));

routes(app);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(2370, () => console.log("Running on localhost:2370"));