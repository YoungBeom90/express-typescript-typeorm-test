import express from 'express';
import 'reflect-metadata';
import {AppDataSource} from "./data-source";
import route from "./route";

AppDataSource.initialize()
    .then(async () => {
        console.log("Connection initialized with database...");
    })
    .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(route);


app.get('/', (req, res) => {
    return res.send('Hello express');
});

app.listen(3000, () => {
    console.log('hello port')
});
