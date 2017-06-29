fs = require('fs')
var list = require( './list' )

completeTodo = (id, callback) => {

  getTodos( (error, todos) => {
    if (error) callback(error)

    todos[id].status = "complete"

    console.log("Completed the task " + "'" + todos[id].description + "'");
  })



}

module.exports = { completeTodo }
