const { Sequelize } = require("sequelize")
const sequelize = require("../config/appConfig")

const Note = sequelize.define('Note', {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        text: { type: Sequelize.STRING(1000), allowNull:false },
    },
    {
    createdAt: 'dateCreated',
    updatedAt: 'lastModified',
    }
)

module.exports = Note;