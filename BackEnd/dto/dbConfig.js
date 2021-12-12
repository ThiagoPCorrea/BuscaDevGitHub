async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        global.connection.connect();
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: "mysql",
        port: "3306",
        user: "root",
        password: "123"
    });

    await connection.connect((err) => {
        if (err) {
            console.log('Erro connecting to database...', err)
            throw err;
        }
        console.log('Connection established!')
    });

    await connection.query('CREATE DATABASE IF NOT EXISTS BuscaDevGitHub;');

    await connection.query('Use BuscaDevGitHub;');

    await connection.query(`
    CREATE TABLE IF NOT EXISTS User (
        Id int NOT NULL AUTO_INCREMENT,
        Name VARCHAR(255), 
        Email VARCHAR(255),
        Password VARCHAR(255),
        UNIQUE KEY (Id)
    );`);

    await connection.query(`CREATE TABLE IF NOT EXISTS Statistic (
        Id int NOT NULL AUTO_INCREMENT,
        EmailProvider VARCHAR(255), 
        Username VARCHAR(255),
        UserId int,
        FOREIGN KEY (UserId) REFERENCES User(Id),
        UNIQUE KEY (Id)
    );`);
    global.connection = connection;

    return connection;
}

module.exports = connect;