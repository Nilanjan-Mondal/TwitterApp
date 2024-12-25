import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import tweetRouter from './Routes/V1/v1tweet.js'; //goto line
import apiRoutes from './Routes/apiRoutes.js';
// create a new express app/server object

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use(morgan("combined")); // this is a middleware which i want to use commonly.... This prints more info on the request in the terminal


// app.use('/tweets', tweetRouter); // when somebody hits localhost:PORT/tweets then it will be redirected to tweets.js where it will execute the .get functions as per the succesing url after /tweeets.


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', apiRoutes); // if the req starts with /api, use the apiRputer (it will get redirected to the apiRoutes.js file and execute the necessary functions accordingly)

