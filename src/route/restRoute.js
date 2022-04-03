//import required functions from restController
import {
    addStudent,
    getStudents,
    getStudentByID,
    updateStudentByID,
    deleteStudentByID
} from '../controller/restController.js';

//Specific routes for different endpoints 
// such as get, post, delete and put
const allRoutes = (app) => {

    // we use student to get a list of all students or post a new student
    app.route('/student')

    // call the getStudents function
    .get(
        getStudents
    )

    //call the addStudent function
    .post(
        addStudent
    );

    // we pass studentID to get, delete and update a specific student
    app.route('/student/:studentID')

    .get(
        getStudentByID
    )

    .delete(
        deleteStudentByID
    )

    .put(
        updateStudentByID
    );
}

//export the allRoutes function so index.js can use it
export default allRoutes;