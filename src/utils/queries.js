const createNoteTable_query = 
    `create table if not exists Notes(
        id int not null primary key  auto_increment,
        content varchar(2000) not null,
        created_date date not null,
        last_modified_date date not null
    )`
const getNotes_query = "select * from notes";
const deleteOne = "select * from notes";
const deleteAll = "select * from notes";
const update = "select * from notes";
const create = "select * from notes";

module.exports = {createNoteTable_query, getNotes_query}

