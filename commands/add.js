fs = require('fs')
var list = require( './list' )

addTodo = (task, callback) => {

  let emptyArray = []
  fs.writeFile( 'tasks.json', emptyArray, (err) => {
    if (err) console.log(err)
  } )

  getTodos( (error, todos) => {
    if (error) callback(error)
    const newTodo = {id: todos.length || 0, description: task}
    todos.push(newTodo)
    const jsontodos = JSON.stringify(todos)
    fs.writeFile( 'tasks.json', jsontodos, (err) => {
      if (err) console.log(err)
    } )
    console.log('created task ' + todos[todos.length - 1].id);
  })

}

module.exports = { addTodo }
