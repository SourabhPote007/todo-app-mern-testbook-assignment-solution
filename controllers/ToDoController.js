const ToDoMOdel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
    const ToDo = await ToDoMOdel.find()
    res.send(ToDo)
}
module.exports.saveToDo = async(req, res) => {
    const { text } = req.body
    
    ToDoMOdel.create({ text })
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}
module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoMOdel.findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully..."))
    .catch((err) => console.log(err))
}
module.exports.deleteToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoMOdel.findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}