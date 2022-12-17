import { User } from "./src/User";
import { UserManager } from "./src/UserManager";
import { Noun } from "./work-type/Noun";
import { WordManager } from "./src/WordManager";
import * as readlineSync from "readline-sync";
import { Verb } from "./work-type/Verb";
import { Adjective } from "./work-type/Adjective";
import { Words } from "./src/Words";

let fileWord = "data/data.json";
let fileUser = "data/data-user.json"

WordManager.readFile(fileWord);
UserManager.readFileUser(fileUser);

function menuBegin(): void {
  console.log("---Translate.com---");
  console.log("1: Search Word");
  console.log("2: Register");
  console.log("3: Log in");
  console.log("0: Quit");
}

function menuAdmin(): void {
  console.log("--- Program For Admin ---");
  console.log("1: Search Word ");
  console.log("2: Show Word ");
  console.log("3: Add Word ");
  console.log("4: Delete Word ");
  console.log("5: Edit Word ");
  console.log("6: Sort Word ");
  console.log("0: log out ");
}

let isQuit = false;

while (!isQuit) {
  menuBegin();
  let number = readlineSync.question("Enter a number: ");
  switch (number) {
    case "1":
      WordManager.search();
      break;
    case "2":
      UserManager.addUser();
      break;
    case "3":
      logInAccount();
      break;
    case "0":
      isQuit = true;
      break;
  }
}

function admin(): void {
  let isExit = false;
  while (!isExit) {
    menuAdmin();
    let number = readlineSync.question("Enter a number: ");
    switch (number) {
      case "1":
        WordManager.search();
        break;
      case "2":
        WordManager.showWords();
        break;
      case "3":
        WordManager.addWord();
        break;
      case "4":
        WordManager.deleteWord();
        break;
      case "5":
        WordManager.editWord();
        break;
      case "6":
        WordManager.sortWord();
        break;
      case "0":
        isExit = true;
        break;
    }
  }
}

function logInAccount() {
  let account = readlineSync.question("Enter your account: ");
  let password = readlineSync.question("Enter your pass word: ");
  let checkAccount = false;
  for (let user of UserManager.users) {
    if (user.account == account && user.passWord == password) {
      checkAccount = true;
      break;
    }
  }

  if (checkAccount == true) {
    admin();
  } else {
    console.log("user is not exist");
  }
}
