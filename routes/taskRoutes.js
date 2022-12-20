const express = require("express")
const router = express.Router()
const {getTasks, createTask,getTask, deleteTask, updateTask} = require("../controller/taskController");


router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getTask).patch(updateTask).delete(deleteTask)


module.exports= router;