fs = require('fs')
var list = require( './list' )

addTodo = ( task, callback ) => {

  getTodos( ( error, todos ) => {
    if ( error ) callback( error )
    const newTodo = {id: todos.length || 0, description: task}
    todos.push( newTodo )
    const jsontodos = JSON.stringify(todos)
    fs.writeFile( 'tasks.json', jsontodos, ( error ) => {
      if ( error ) console.log( error )
    } )
    console.log('created task ' + todos[todos.length - 1].id);
  })

}

module.exports = { addTodo }
