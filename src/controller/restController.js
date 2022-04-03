//import mongoose
import mongoose from 'mongoose';

//import the student schema from restMode.js file
import { StudentSchema } from '../model/restModel.js';

//pass student object to create a new student in the database
//using the model from our schema
const Student = mongoose.model('Student', StudentSchema);

//export a function called addStudent
export const addStudent = (req, res) => {

    //create new student with the data coming from the request body
    let newStudent = new Student(req.body);

    newStudent.save((err, student) => {

        //send error message if a required field is missing
        if (err) {
            res.send(err);
        }

        //else pass the student information as a json object
        res.json(student)
    });

}

//export a function called getStudents
export const getStudents = (req, res) => {

    //find students in the databse
    Student.find({}, (err, student) => {

        //send error message if not found
        if (err) {
            res.send(err);
        }

        //else pass the students
        res.json(student);
    });

}


//export a function called getStudentByID
export const getStudentByID = (req, res) => {

    //find a specific student by ID
    Student.findById(req.params.studentID, (err, student) => {

        //send error message if not found
        if (err) {
            res.send(err);
        }

        //else pass the student
        res.json(student);
    });

}


//export a function called updateStudentByID
export const updateStudentByID = (req, res) => {

    //find a specific student by ID and update
    Student.findOneAndUpdate({ _id: req.params.studentID },

        req.body,

        //tell mongoDB to return the new updated object
        { new: true },

        (err, student) => {

            //send error message if student can not be updated
            if (err) {
                res.send(err);
            }

            //else pass the student
            res.json(student);
        });

}


//export a function called deleteStudentByID
export const deleteStudentByID = (req, res) => {

    //find a specific student by ID and remove it
    Student.remove({ _id: req.params.studentID },

        (err, student) => {

            //send error message if student can't be deleted
            if (err) {
                res.send(err);
            }

            //if student was deleted, pass a message
            res.json({ message: "The student was deleted." });
        });

}