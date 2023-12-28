const { Router } = require("express");
const { getToDos, saveToDO } = require("../controler/Todocontroler");
const router = Router();

router.get("/get", getToDos);

router.get("/save", saveToDO);
module.exports = router;
