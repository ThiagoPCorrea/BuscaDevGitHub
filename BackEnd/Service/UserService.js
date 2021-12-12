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

    return await conn.query(sql, values, function(err, result){
      return !err
    });
  }

  async Login(user) {
    let dbUser = this.GetUser(user.email);

    if (dbUser != null)
      return dbUser.Password == user.Password;

    return false;
  }
}

module.exports = UserService;