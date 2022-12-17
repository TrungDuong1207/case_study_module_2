"use strict";
exports.__esModule = true;
var UserManager_1 = require("./src/UserManager");
var WordManager_1 = require("./src/WordManager");
var readlineSync = require("readline-sync");
var fileWord = "data/data.json";
var fileUser = "data/data-user.json";
WordManager_1.WordManager.readFile(fileWord);
UserManager_1.UserManager.readFileUser(fileUser);
function menuBegin() {
    console.log("---Translate.com---");
    console.log("1: Search Word");
    console.log("2: Register");
    console.log("3: Log in");
    console.log("0: Quit");
}
function menuAdmin() {
    console.log("--- Program For Admin ---");
    console.log("1: Search Word ");
    console.log("2: Show Word ");
    console.log("3: Add Word ");
    console.log("4: Delete Word ");
    console.log("5: Edit Word ");
    console.log("6: Sort Word ");
    console.log("0: log out ");
}
var isQuit = false;
while (!isQuit) {
    menuBegin();
    var number = readlineSync.question("Enter a number: ");
    switch (number) {
        case "1":
            WordManager_1.WordManager.search();
            break;
        case "2":
            UserManager_1.UserManager.addUser();
            break;
        case "3":
            logInAccount();
            break;
        case "0":
            isQuit = true;
            break;
    }
}
function admin() {
    var isExit = false;
    while (!isExit) {
        menuAdmin();
        var number = readlineSync.question("Enter a number: ");
        switch (number) {
            case "1":
                WordManager_1.WordManager.search();
                break;
            case "2":
                WordManager_1.WordManager.showWords();
                break;
            case "3":
                WordManager_1.WordManager.addWord();
                break;
            case "4":
                WordManager_1.WordManager.deleteWord();
                break;
            case "5":
                WordManager_1.WordManager.editWord();
                break;
            case "6":
                WordManager_1.WordManager.sortWord();
                break;
            case "0":
                isExit = true;
                break;
        }
    }
}
function logInAccount() {
    var account = readlineSync.question("Enter your account: ");
    var password = readlineSync.question("Enter your pass word: ");
    var checkAccount = false;
    for (var _i = 0, _a = UserManager_1.UserManager.users; _i < _a.length; _i++) {
        var user = _a[_i];
        if (user.account == account && user.passWord == password) {
            checkAccount = true;
            break;
        }
    }
    if (checkAccount == true) {
        admin();
    }
    else {
        console.log("user is not exist");
    }
}
