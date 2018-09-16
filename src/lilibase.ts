import * as express from 'express';

const app = express();

app.listen(5000, () => console.log('run server in port 5000'));

app.get("/", (req, res) => {
    res.send("hello world")
});