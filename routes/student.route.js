const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/student.controller')

//http://localhost:3000/students/check
router.get('/check', student_controller.check);

//http://localhost:3000/students/find
router.get('/find', student_controller.findAll);

//http://localhost:3000/students/addStudent
router.post('/add', student_controller.addStudent);

//http://localhost:3000/students/UpdateStudentDetails
router.put('/:id/update', student_controller.UpdateStudentDetails);

//http://localhost:3000/students/RemoveStudentDetails
router.delete('/:id/delete', student_controller.RemoveStudentDetails);

module.exports = router;


