const z = require('zod');

const createTodo = z.object({
    title: z.string(),
   
    completed: z.boolean()
});

const updateTodo = z.object({
    id: z.string()
});

module.exports = {
    createTodo,
    updateTodo
};
