// Import express
import express from 'express';

//import the allRoutes function from our restRoute.js file
import allRoutes from './src/route/restRoute.js';

const app = express();

// Setup the port for ther server
const port = 4000;

//call the allRoute function and send app which initializes express
allRoutes(app);

// When a get request is made to / or the default page 
// display a message.
app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

//print a message to the cli
app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});