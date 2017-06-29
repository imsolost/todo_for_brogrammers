fs = require('fs')

getTodos = ( callback ) => {
  fs.readFile('./tasks.json', ( error, data ) => {
    if ( error ) return callback( error )
    const todos = JSON.parse( data )
    callback( null, todos )
  })
}

module.exports = { getTodos }
