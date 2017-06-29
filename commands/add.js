fs = require('fs')
var list = require( './list' )

addTodo = (task, callback) => {

  getTodos( (error, todos) => {
    if (error) callback(error)
    const newTodo = {id: todos.length || 0, description: task}
    todos.push(newTodo)
    const jsontodos = JSON.stringify(todos)
    fs.writeFile( 'tasks.json', jsontodos, (err) => {
      if (err) console.log(err)
    } )
  })
}

module.exports = { addTodo }
