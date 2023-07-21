const server = require('./app');
const PORT = 3001;
const { conn } = require('./DB_connection');



server.listen(PORT, ()=>{
    conn.sync({force: false});
    console.log(`Listening on port: ${PORT}` + ", and DB SYNC");
});