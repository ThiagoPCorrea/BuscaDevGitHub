class StatisticModel {
    constructor(emailProvider,username,loggedEmail) {
        this.emailProvider = emailProvider;
        this.username = username;
        this.loggedEmail = loggedEmail;
     }

     constructor(request) {
      this.emailProvider = request.EmailProvider;
        this.username = request.Username;
        this.loggedEmail = request.LoggedEmail;
   }


  }

module.exports = StatisticModel;