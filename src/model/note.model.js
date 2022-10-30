//create schema for note using sequelize

const { Sequelize } = require("sequelize")
const sequelize = require("../config/appConfig")

const Note = sequelize.define('Note', {
  
    // id is an object with 
    // properties like type, keys, 
    // validation of column.
    id:{
  
        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,
  
        // To increment user_id automatically.
        autoIncrement:true,
  
        // id can not be null.
        allowNull:false,
  
        // For uniquely identify note.
        primaryKey:true
    },
  
    // text columns
    text: { type: Sequelize.STRING(1000), allowNull:false },
  
    //  dateCreated: {
    //     type : Sequelize.DATE,
    //     allowNull:false,
    //  },
    //  lastModified: 
    //  {  
    //     type : Sequelize.DATE,
    //     allowNull:false,
    //  },
},
{
     // If don't want createdAt
  createdAt: 'dateCreated',

  // If don't want updatedAt
  updatedAt: 'lastModified',
}
)
  

module.exports = Note



// const { createNoteTable_query, getNotes_query } = require("../utils/queries")

// const createNotesTable = async () => {
//     const query =   createNoteTable_query;   
//     db.query(query, function(err, results, fields) {
//     if (err) {
//         console.log(err.message);
//     }
//     });

//   }
// const getNotesMethod = async () => {
//     const query =   getNotes_query;   
//     db.query(query, function(err, results, fields) {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log(results);
//     });

//   }
// module.exports = {createNotesTable,getNotesMethod}