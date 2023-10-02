const express = require('express')
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController')
const router = express.Router() ;



router.get('/', getTodos ) ; // localhost:5000/api/todo/
router.post('/', createTodo ) ; // localhost:5000/api/todo/
router.patch('/:id', updateTodo ) ; // localhost:5000/api/todo/2
router.delete('/:id', deleteTodo )   // localhost:5000/api/todo/4 


module.exports  = router ;