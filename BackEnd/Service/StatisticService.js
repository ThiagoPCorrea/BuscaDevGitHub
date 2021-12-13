const UserService = require("./UserService");
const connect = require("../dto/dbConfig");

class StatisticService {
  constructor() { }

  async CreateStatistic(Statistic) {
    const userService = new UserService();
    let dbUser = await userService.GetUser(Statistic.loggedEmail);
    if (dbUser[0].length > 0) {
      let dbStatistic = await this.GetStatistic(Statistic, dbUser[0][0].Id)
      if (dbStatistic[0].length === 0) {
        let conn = await connect();
        const sql = 'INSERT INTO Statistic(EmailProvider,Username,UserId) VALUES (?,?,?);';
        const values = [Statistic.emailProvider, Statistic.username, dbUser[0][0].Id];
        await conn.query(sql, values);
        return true;
      }
    }
    return false;
  }

  async GetStatistic(statistic, userId) {
    let conn = await connect();
    const sql = 'SELECT * FROM Statistic WHERE UserName = ? AND UserId = ?;';
    const values = [statistic.username, userId];
    return await conn.query(sql, values);
  }

  async GetStatisticData(UserEmail) {
    if (UserEmail) {
      const userService = new UserService();
      let dbUser = await userService.GetUser(UserEmail);
      if (dbUser[0].length > 0) {
        let conn = await connect();
        const sql = 'SELECT EmailProvider as argument,Count(EmailProvider) as value FROM Statistic WHERE UserId = ? GROUP BY EmailProvider;';
        const values = [dbUser[0][0].Id];
        let statistic = await conn.query(sql, values);
        return statistic[0];
      }
    }
    return null;
  }
}

module.exports = StatisticService;