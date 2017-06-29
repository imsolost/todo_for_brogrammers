var add = require('./commands/add')
var complete = require('./commands/complete')
var list = require('./commands/list')

let inputs = {
  function: process.argv[2],
  data: process.argv[3]
}

if (!fs.existsSync('./tasks.json') ) {
  fs.open('./tasks.json', 'w', ( error, data ) => {
    fs.writeFile('./tasks.json', '[]', ( error, data ) => {
      if (error) console.log(error)
    })
  })
}

if ( inputs.function === 'add' ) {
  addTodo( inputs.data )
}
if ( inputs.function === 'list' ) {
  getTodos( ( error, todos ) => {
    console.log("ID Description\n-- -----------");
    for (var i = 0; i < todos.length; i++) {
      console.log( todos[i].id + "  " + todos[i].description )
    }
  } )
}
if ( inputs.function === 'done' ) {
  completeTodo( inputs.data )
}
