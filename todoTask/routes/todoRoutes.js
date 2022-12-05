 import express from "express"
import { createTodo, getAllTodo,updateTodo,deleteTodo } from "../controller/index.js";


 const router = express.Router();
//create routes
router.post("/",createTodo)

//get routes
router.get("/",getAllTodo)

//modify routes
router.put("/:id",updateTodo)

//delete todo
router.delete("/:id",deleteTodo)

 export default router