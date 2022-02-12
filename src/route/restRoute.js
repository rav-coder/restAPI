//Specific routes for different endpoints 
// such as get, post, delete and put
const allRoutes = (app) => {

    // we use student to get a list of all students or post a new student
    app.route('/student')

    // get a request and issue a response for get
    .get((req, res) =>

        // the response is the message that is sent back
        res.send('Sucessful GET request.')
    )

    .post((req, res) =>
        res.send('Sucessful POST request.')
    );

    // we pass studentID to delete and update a specific student
    app.route('/student/:studentID')
        .delete((req, res) =>
            res.send('Sucessful DELETE request.')
        )
        .put((req, res) =>
            res.send('Sucessful PUT request.')
        );
}

//export the allRoutes function so index.js can use it
export default allRoutes;