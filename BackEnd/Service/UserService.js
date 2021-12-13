const connect = require("../dto/dbConfig");

class UserService {
  constructor() { }

  async GetUser(email) {
    let conn = await connect();
    const sql = 'SELECT * FROM User WHERE Email = ?;';
    const values = [email];
    return await conn.query(sql, values);
  }

  async CreateUser(user) {
    let dbUser = await this.GetUser(user.email);
    let conn = await connect();
    let sql = "";
    let values = []

    if (dbUser[0].length !== 0) {
      sql = "UPDATE User SET Name = ?,Password = ? WHERE Email = ?";
      values = [user.name, user.password, user.email];
    } else {
      sql = 'INSERT INTO User(Name,Email,Password) VALUES (?,?,?);';
      values = [user.name, user.email, user.password];
    }

    await conn.query(sql, values, function(err, result){
      return false;
    });
    return true;
  }

  async Login(user) {
    let dbUser = await this.GetUser(user.email);

    if (dbUser[0].length > 0)
      return dbUser[0][0].Password === user.password;

    return false;
  }
}

module.exports = UserService;