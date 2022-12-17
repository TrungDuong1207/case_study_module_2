"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var User_1 = require("./User");
var readlineSync = require("readline-sync");
var UserManager = /** @class */ (function () {
    function UserManager() {
    }
    UserManager.addUser = function () {
        var PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        var EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var account = readlineSync.question("enter the email register: ");
        while (!EMAIL_REGEX.test(account)) {
            console.log("registration email is not correct");
            account = readlineSync.question("enter the email register: ");
        }
        var passWord = readlineSync.question("enter the password register: ");
        while (!PASSWORD_REGEX.test(passWord)) {
            console.log("password at least eight characters, at least one uppercase, one lowercase, and one number:");
            passWord = readlineSync.question("enter the password register: ");
        }
        var user = new User_1.User(account, passWord);
        UserManager.users.push(user);
        console.log("register complete");
    };
    UserManager.readFileUser = function (file) {
        var fs = require("fs");
        var dataUser = fs.readFileSync(file, { encoding: "utf8" });
        UserManager.users = JSON.parse(dataUser);
    };
    UserManager.users = [];
    return UserManager;
}());
exports.UserManager = UserManager;
