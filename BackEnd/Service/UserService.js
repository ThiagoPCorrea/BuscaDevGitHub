const connect = require("../dto/dbConfig");

class UserService {
  constructor() { }

  async GetUser(email) {
    let conn = connect();
    const sql = 'SELECT * FROM User WHERE Email = ?;';
    const values = [email];
    return await conn.query(sql, values);
  }

  async CreateUser(user) {
    let dbUser = this.GetUser(user.email);
    let conn = connect();
    let sql = "";
    let values = []

    if (dbUser != null) {
      sql = "UPDATE User SET Name = ?,Password = ?, WHERE Email = ?";
      values = [user.name, user.password, user.email];
    } else {
      sql = 'INSERT INTO User(Name,Email,Password) VALUES (?,?,?);';
      values = [user.name, user.email, user.password];
    }

    await conn.query(sql, values, function(err, result){
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