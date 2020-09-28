
//# Para criar o banco de dados instala-se  o sqlite-async no cmd
// npm install sqlite-async

//## cria o banco de dados e usa-se o .then para que o banco de dados
//tenha tempo para executá-lo. sem o .then a informação vem antes do 
//banco de dados ser executado. 
//o ___dirname ira criar essa pasta dentro do projeto: '/database.sqlite'
const Database = require('sqlite-async')

function execute(db) {
   //criar as tabelas do banco de dados db.exec(` isso é uma crase)
   return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER

        );

   `) 
}
// para visualizar se deu certo as tabelas instalo um plugin sqlLite.
//abro o database.sqlite com o direito do mouse em cima do arquivo.

//# Para criar o banco de dados instala-se  o sqlite-async no cmd
// npm install sqlite-async

//## cria o banco de dados e usa-se o .then para que o banco de dados
//tenha tempo para executá-lo. sem o .then a informação vem antes do 
//banco de dados ser executado. 
//o ___dirname ira criar essa pasta dentro do projeto: '/database.sqlite'

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)