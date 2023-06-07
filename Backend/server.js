const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const mysql = require('mysql');
const blogRouter = require('./Routes/route')
const usersRouter = require('./Routes/userRoute')
// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '213088',
    database: 'database_project'
});

// Connect to the MySQL database
connection.connect((err) => {
    if ( err ) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});
app.use((req, res, next) => {
    req.connection = connection;
    next();
});
app.use('/', blogRouter)
app.use('/', usersRouter)


app.listen(3001, () => {
    console.log(
        'Express app is working on port 3001'
    )
})



