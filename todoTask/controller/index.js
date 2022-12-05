import todoModel from "../models/TodoModel.js";


//create todoList
export const createTodo = async (req, res) => {
  try {
    const newTodo = todoModel(req.body);
    const data = await newTodo.save();
    res.status(201).json({ message: "data added successfully", data });
  } catch (error) {
    res.status(404).json({ message: "data added failed", error });
  }
};


//get allTodo
export const getAllTodo = async (req, res) => {
  try {
    const allTodo = await todoModel.find();
    res.status(200).json({ message: "data fetched successfully", allTodo });
  } catch (error) {
    res.status(404).json({ message: "data fetched failed", error });
  }
};


//update Todo
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const data = await todoModel.findById(id);
    if (data) {
      const updatedData = await todoModel.findByIdAndUpdate(id, newData, {
        new: true,
      });
      res
        .status(200)
        .json({ message: "data updated successfully", updatedData });
    } else {
      res.status(404).json({ message: "todo list not found" });
    }
  } catch (error) {
    res.status(404).json({ message: "todo list updated failed", error });
  }
};


//deleting todo
export const deleteTodo = async (req, res) => {
try {
  const id = req.params.id
  const data = await todoModel.findByIdAndDelete(id);
  res
  .status(200)
  .json({ message: "data deleted successfully",data});
  
} catch (error) {
  res.status(404).json({ message: "todo list delete failed", error });
}


}