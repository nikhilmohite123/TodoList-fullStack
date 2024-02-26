const express = require('express');
const cors=require('cors');
const app = express();
const mongoose = require('mongoose')
const z = require('zod')
app.use(express.json());
const { todo } = require('./db')
const { createTodo, updateTodo } = require('./types')

app.use(cors())
app.post('/todo', async (req, res) => {
    console.log(req.body)
    const validTodo = createTodo.safeParse(req.body);

    if (!validTodo.success) {
        res.status(411).json({
            "msg": "invalid input",
            success:false
        })
        return;
    }
    // save in db
    await todo.create({
        title: req.body.title,
       
        completed: false
    })
    res.json({
        msg: "todo created",
        success:true
    })

})
app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos: todos
    })
})

app.put('/completed', async (req, res) => {
    const validTodo = updateTodo.safeParse(req.body);

    if (!validTodo.success) {
        res.status(411).json({
            "msg": "invalid input",
            success:false
        })
        return;
    }
    await todo.updateOne({ _id: req.body.id }, { completed: true });
    res.json({
        msg:"todo markted as completed",
        success:true
    })
})
app.delete('/remove', async (req, res) => {
    const validTodo = updateTodo.safeParse(req.body);

    if (!validTodo.success) {
        res.status(411).json({
            "msg": "invalid input",
            success:false
        })
        return;
    }
    await todo.findOneAndDelete({ _id: req.body.id });
    res.json({
        msg:"deletd",
        success:true
    })
})





app.listen(3000);
