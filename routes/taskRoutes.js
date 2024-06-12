const express = require('express');
const { createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/tasks',createTask);
router.put('/tasks/:id',updateTask);
router.delete('/tasks/:id',deleteTask);

module.exports = router;