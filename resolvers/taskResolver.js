const Task = require('../models/taskModel')

module.exports={
    tasks:async()=>{
        return await Task.find();
    },
    task:async({id})=>{
        return await Task.findById(id);
    }
}