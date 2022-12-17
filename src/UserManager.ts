import { User } from "./User";
import * as readlineSync from "readline-sync";
export class UserManager {
  static users: User[] = [];
  constructor() {}

  static addUser() {
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const EMAIL_REGEX =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let account = readlineSync.question("enter the email register: ");
    while (!EMAIL_REGEX.test(account)) {
      console.log("registration email is not correct");
      account = readlineSync.question("enter the email register: ");
    }

    let passWord = readlineSync.question("enter the password register: ");
    while (!PASSWORD_REGEX.test(passWord)) {
      console.log(
        "password at least eight characters, at least one uppercase, one lowercase, and one number:"
      );

      passWord = readlineSync.question("enter the password register: ");
    }

    let user = new User(account, passWord);
    UserManager.users.push(user);
    console.log("register complete");
  }

  static readFileUser(file){
    let fs = require ("fs");
    let dataUser = fs.readFileSync(file, {encoding:"utf8"});
    UserManager.users = JSON.parse(dataUser);
  }
}
