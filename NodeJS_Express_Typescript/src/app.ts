import express from 'express';
import {router} from './router/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// setting response headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.use('/feed', router);

app.listen(3000);