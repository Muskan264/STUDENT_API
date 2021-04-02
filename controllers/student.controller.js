const Student = require('../models/student.model')

exports.check = (req, res) => {
    res.send("Welcome !")

}

exports.addStudent = (req, res) => {

    let student = new Student({
        name: req.body.name,
        regId: req.body.regId,
        course: req.body.course,
        gender: req.body.gender
    })

    student.save((err) => {
        if (err) return next(err);
        res.send("Student Added");
    });
}

exports.UpdateStudentDetails = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
        if (err)
            return next(err);
        res.send("INFORMATION OF STUDENTS ARE UPDATED!")
    })


}
exports.RemoveStudentDetails = (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            return next(err);
        }
        res.send("STUDENT  INFORMMATION HAS BEEN REMOVED !")
    })
}

exports.findAll = (req,res)=>{
    Student.find((err, students)=>{
        if(err) return next(err);
        res.send(students);
    });
}