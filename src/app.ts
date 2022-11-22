import express from 'express';
import 'reflect-metadata';
import {AppDataSource} from "./data-source";
import route from "./route";

// database init
AppDataSource.initialize()
    .then(async () => {
        console.log("Connection initialized with database...");
    })
    .catch((error) => console.log(error));

const app = express();
app.set('port', 3000);
app.listen(app.get('port'));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//router
app.use(route);

app.get('/', (req, res) => {
    return res.send('Welcome to my express service main page!');
});
