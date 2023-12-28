const ToDoModel = require("../models/ToDomodels");

module.exports.getToDos = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
module.exports.saveToDO = (req, res) => {
  const { toDo } = req.body;
  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully ");
      res.status(201).send(data);
    })
    .catch((err) => console.log(err));
};
