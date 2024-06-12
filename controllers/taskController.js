const Task = require('../models/taskModel');

exports.createTask = async(req,res)=>{
const {title , description }= req.body;
const newTask= new Task({title,description});
await newTask.save();
res.status(201).json(newTask);
}

exports.updateTask = async(req,res)=>{
    const {id}=req.params;
    const{title,description}=req.body;
    const task = await Task.findByIdAndUpdate(id,{title,description},{new:true})
    res.status(200).json(task);
}
exports.deleteTask=async(req,res)=>{
    const {id}=req.params;
    const task = await Task.findByIdAndDelete(id)
    res.status(200).json(task);
}