async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
      });

    connection.query(`CREATE DATABASE IF NOT EXISTS BuscaDevGitHub;`);

    connection.query(`
    CREATE TABLE IF NOT EXISTS User (
        Id int NOT NULL AUTO_INCREMENT,
        Name VARCHAR(255), 
        Email VARCHAR(255),
        Password VARCHAR(255),
        PRIMARY KEY (Id)
    );`);
    
    connection.query(`CREATE TABLE IF NOT EXISTS Statistic (
        Id int NOT NULL AUTO_INCREMENT,
        EmailProvider VARCHAR(255), 
        Username VARCHAR(255),
        UserId int,
        FOREIGN KEY (UserId) REFERENCES User(Id)
    );`);
    global.connection = connection;
    
    return connection;
}

module.exports = connect;