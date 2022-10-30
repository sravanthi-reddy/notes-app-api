const config = require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mysql = require('mysql');

const healthRouter = require("./routes/healthRouter")
const notesRouter = require("./routes/notesRouter")
const noteRouter = require("./routes/noteRouter");
const { createDbConnection, getDbInstance } = require('./config/appConfig');
const sequelize = require('./config/appConfig');

if (config.error) {
  throw config.error
}

const port = process.env.PORT // || 3001
global.port = port

const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*
  TODO-1: Settup Database connection
*/
/*
  TODO-2: Upon database connection success, create the relavent table(s) if it does not exist.
*/



// Create all the table defined using  
// sequelize in Database 
    
// Sync all models that are not 
// already in the database 
sequelize.sync();

app.get('/', (req, res) => {
  res.send('CSBC1010 Assignment 3 - My Notes')
})

app.use("/health", healthRouter)
app.use("/notes", notesRouter)
app.use("/note", noteRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
