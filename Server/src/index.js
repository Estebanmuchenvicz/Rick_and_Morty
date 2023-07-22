const server = require('./app');
const { conn } = require('./DB_connection');
require('dotenv').config();
const PORT = process.env.PORT || 3001



server.listen(PORT, ()=>{
    conn.sync({force: false});
    console.log(`Listening on port: ${PORT}` + ", and DB SYNC");
});