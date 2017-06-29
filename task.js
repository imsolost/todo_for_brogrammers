var add = require('./commands/add')
var complete = require('./commands/complete')
var list = require('./commands/list')

let inputs = {
  function: process.argv[2],
  data: process.argv[3]
}


if ( inputs.function === 'add' ) {
  addTodo( inputs.data )
}
if ( inputs.function === 'list' ) {
  getTodos( ( error, todos ) => {
    // console.log( ( "ID Description\n-- ----------\n"  + todos.filter( (todo) => {
    //   for (var key in todo) {
    //     if (todo.status !== 'complete') {
    //       return JSON.parse(todo)
    //     }
    //   }
    // }) ) )
    console.log(todos);
  } )
}
if ( inputs.function === 'done' ) {
  completeTodo( inputs.data )
}
