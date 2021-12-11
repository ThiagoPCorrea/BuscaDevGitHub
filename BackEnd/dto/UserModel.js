class UserModel {
    constructor(email,name,password) {
        this.email = email;
        this.name = name;
        this.password = password;
     }

     constructor(request) {
      this.email = request.Email;
      this.name = request.Name;
      this.password = request.Password;
   }
  }

module.exports = UserModel;