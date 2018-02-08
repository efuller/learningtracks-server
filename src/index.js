import express from 'express';
import path from 'path';

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(2370, () => console.log("Running on localhost:2370"));