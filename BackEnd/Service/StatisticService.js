const UserService = require("./UserService");
const connect = require("../dto/dbConfig");

class StatisticService {
    constructor() { }

    async CreateStatistic(Statistic){
      const service = new UserService();
      let dbUser = service.GetUser(Statistic.loggedEmail);
      if(this.GetStatistic(Statistic,dbUser.Id) == null){
        let conn = await connect();
        sql = 'INSERT INTO Statistic(EmailProvider,Username,UserId) VALUES (?,?,?);';
        values = [Statistic, user.Email, user.Password];
        await conn.query(sql, values);
        return true;
      }
      return false;
    }

    async GetStatistic(statistic,userId){
      let conn = await connect();
      const sql = 'SELECT * FROM Statistic WHERE UserName = ? AND UserId = ?;';
      const values = [statistic.username,userId];
      return await conn.query(sql, values);
    }

    async GetStatisticData(UserEmail){
      let conn = await connect();
      const sql = 'SELECT EmailProvider as argument,Count(EmailProvider) as value FROM Statistic WHERE EmailProvider = ? GROUP BY EmailProvider;';
      const values = [UserEmail];
      return await conn.query(sql, values);
    }
  }

module.exports = StatisticService;