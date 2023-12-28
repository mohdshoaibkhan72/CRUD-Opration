const { Router } = require("express");
const { getToDos, saveToDo } = require("../controler/ToDoController");
const router = Router();

router.get("/get", getToDos);

router.get("/save", saveToDo);
module.exports = router;
