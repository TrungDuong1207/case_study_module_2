import { Words } from "./Words";
import * as readlineSync from "readline-sync";
import { Noun } from "../work-type/Noun";
import { Verb } from "../work-type/Verb";
import { Adjective } from "../work-type/Adjective";

export class WordManager {
  static words: Words[] = [];

  constructor() {}

  static readFile(file): void {
    let fs = require("fs");
    const data = fs.readFileSync(file, { encoding: "utf8", flag: "r" });
    WordManager.words = JSON.parse(data);
  }

  static saveFile(file): void {
    let fs = require("fs");
    const wordsJson = JSON.stringify(WordManager.words);
    fs.writeFileSync(file, wordsJson);
  }

  static showWords(): void {
    console.table(WordManager.words, ["name", "pronounce", "similarWords"]);
  }

  static addWord(): void {
    let name = readlineSync.question("Add Name: ");
    let pronounce = readlineSync.question("Add pronounce: ");
    let noun: Noun[] = [];
    let verb: Verb[] = [];
    let adjective: Adjective[] = [];

    function menuNoun() {
      console.log("1: Add description Noun");
      console.log("2: Exit");
    }

    function menuVerb() {
      console.log("1: Add description Verb");
      console.log("2: Exit");
    }

    function menuAdjective() {
      console.log("1: Add description Adjective");
      console.log("2: Exit");
    }

    let nextNoun = false;
    while (!nextNoun) {
      menuNoun();
      let number = readlineSync.question("Enter a number: ");
      switch (number) {
        case "1":
          let descriptionNoun = readlineSync.question("Add description Noun: ");
          let sampleSentencesNoun = readlineSync.question(
            "Add sample Sentences Noun: "
          );
          let noun1 = new Noun(descriptionNoun, sampleSentencesNoun);
          noun.push(noun1);
          break;
        case "2":
          nextNoun = true;
          break;
      }
    }

    let nextVerb = false;
    while (!nextVerb) {
      menuVerb();
      let number = readlineSync.question("Enter a number: ");
      switch (number) {
        case "1":
          let descriptionVerb = readlineSync.question("Add description Verb: ");
          let sampleSentencesVerb = readlineSync.question(
            "Add sample Sentences Verb: "
          );
          let verb1 = new Verb(descriptionVerb, sampleSentencesVerb);
          verb.push(verb1);
          break;
        case "2":
          nextVerb = true;
          break;
      }
    }

    let nextAdjective = false;
    while (!nextAdjective) {
      menuAdjective();
      let number = readlineSync.question("Enter a number: ");
      switch (number) {
        case "1":
          let descriptionAdjective = readlineSync.question(
            "Add description Adjective: "
          );
          let sampleSentencesAdjective = readlineSync.question(
            "Add sample Sentences Adjective: "
          );
          let adjective1 = new Adjective(
            descriptionAdjective,
            sampleSentencesAdjective
          );
          adjective.push(adjective1);
          break;
        case "2":
          nextAdjective = true;
          break;
      }
    }

    let similarWords = readlineSync.question("Add similar Words: ");

    let word = new Words(name, pronounce, noun, verb, adjective, similarWords);
    WordManager.words.push(word);
    let fileSave = "data/data.json";
    WordManager.saveFile(fileSave);
  }

  static deleteWord(): void {
    let checkWordNameDelete = false;
    while (!checkWordNameDelete) {
      let wordName = readlineSync.question(
        "Enter the word name need to delete: "
      );
      for (let i = 0; i < WordManager.words.length; i++) {
        if (wordName == WordManager.words[i].name) {
          WordManager.words.splice(i, 1);
          checkWordNameDelete = true;
          break;
        }
      }
    }
    let fileSave = "data/data.json";
    WordManager.saveFile(fileSave);
  }

  static search(): void {
    let wordSearch = readlineSync.question("Enter word need to search: ");
    let indexWordSearch = -1;
    let checkWordSearch = true;
    for (let i = 0; i < WordManager.words.length; i++) {
      if (wordSearch == WordManager.words[i].name) {
        indexWordSearch = i;
        checkWordSearch = false;
        break;
      }
    }
    if (checkWordSearch) {
      console.log("The search word has not been updated ");
    } else {
      console.log(
        `----------- ${WordManager.words[indexWordSearch].name} -------------`
      );
      console.log("pronounce: " + WordManager.words[indexWordSearch].pronounce);
      console.log("Noun:");
      for (let i = 0; i < WordManager.words[indexWordSearch].noun.length; i++) {
        console.log(WordManager.words[indexWordSearch].noun[i]);
      };

      console.log("Verb: ");
      for (let i = 0; i < WordManager.words[indexWordSearch].verb.length; i++) {
        console.log(WordManager.words[indexWordSearch].verb[i]);
      };

      console.log("Adjective: ");
      for (let i = 0; i < WordManager.words[indexWordSearch].adjective.length; i++) {
        console.log(WordManager.words[indexWordSearch].adjective[i]);
      };

      console.log(
        "similar: " + WordManager.words[indexWordSearch].similarWords
      );
      console.log("--------------------------------------");
    }
  }

  static editWord(): void {
    function editMenu() {
      console.log("---choose property you want to edit---");
      console.log("1: Edit Name");
      console.log("2: Edit Pronounce");
      console.log("3: Edit Noun");
      console.log("4: Edit Verb");
      console.log("5: Edit Adjective");
      console.log("6: Edit Similar Words");
      console.log("0: Exit");
    }

    function menuEditNoun() {
      console.log("1: Edit description Noun");
      console.log("2: Exit");
    }

    function menuEditVerb() {
      console.log("1:Edit description Verb");
      console.log("2: Exit");
    }

    function menuEditAdjective() {
      console.log("1: Edit description Adjective");
      console.log("2: Exit");
    }

    let checkNameEdit = false;
    while (!checkNameEdit) {
      let name = readlineSync.question("Enter the Name Word need to edit: ");
      for (let i = 0; i < WordManager.words.length; i++) {
        if (name == WordManager.words[i].name) {
          let quitEdit = false;
          while (!quitEdit) {
            editMenu();
            let numberEdit = readlineSync.question("Enter a number: ");
            switch (numberEdit) {
              case "1":
                editName(i);
                break;
              case "2":
                editPronounce(i);
                break;
              case "3":
                editNoun(i);
                break;
              case "4":
                editVerb(i);
                break;
              case "5":
                editAdjective(i);
                break;
              case "6":
                editSimilarWords(i);
                break;
              case "0":
                quitEdit = true;
                break;
            }
          }
          checkNameEdit = true;
          break;
        }
      }
    }

    function editName(i): void {
      console.log(WordManager.words[i].name);
      let nameEdit = readlineSync.question("Enter the new Name: ");
      WordManager.words[i].name = nameEdit;
    }

    function editPronounce(i): void {
      console.log(WordManager.words[i].pronounce);
      let pronounceEdit = readlineSync.question("Enter the new pronounce: ");
      WordManager.words[i].pronounce = pronounceEdit;
    }

    function editNoun(i): void {
      console.log(WordManager.words[i].getNoun());
      let nextNoun = false;
      while (!nextNoun) {
        menuEditNoun();
        let number = readlineSync.question("Enter a number: ");
        switch (number) {
          case "1":
            let descriptionNoun = readlineSync.question(
              "Enter description Noun need to edit: "
            );
            for (let j = 0; j < WordManager.words[i].noun.length; j++) {
              if (
                descriptionNoun ==
                WordManager.words[i].getNoun()[j].descriptionNoun
              ) {
                let editDescriptionNoun = readlineSync.question(
                  "edit description noun: "
                );
                let editSampleSentencesNoun = readlineSync.question(
                  "edit sample sentences noun: "
                );
                WordManager.words[i].noun[j].descriptionNoun =
                  editDescriptionNoun;
                WordManager.words[i].noun[j].sampleSentencesNoun =
                  editSampleSentencesNoun;
                break;
              }
            }
            break;
          case "2":
            nextNoun = true;
            break;
        }
      }
    }

    function editVerb(i): void {
      console.log(WordManager.words[i].getVerb());
      let nextVerb = false;
      while (!nextVerb) {
        menuEditVerb();
        let number = readlineSync.question("Enter a number: ");
        switch (number) {
          case "1":
            let descriptionVerb = readlineSync.question(
              "Enter description Verb need to edit: "
            );
            for (let j = 0; j < WordManager.words[i].verb.length; j++) {
              if (
                descriptionVerb == WordManager.words[i].verb[j].descriptionVerb
              ) {
                let editDescriptionVerb = readlineSync.question(
                  "edit description verb: "
                );
                let editSampleSentencesVerb = readlineSync.question(
                  "edit sample sentences verb: "
                );
                WordManager.words[i].verb[j].descriptionVerb =
                  editDescriptionVerb;
                WordManager.words[i].verb[j].sampleSentencesVerb =
                  editSampleSentencesVerb;
                break;
              }
            }
            break;
          case "2":
            nextVerb = true;
            break;
        }
      }
    }

    function editAdjective(i): void {
      console.log(WordManager.words[i].getAdjective());
      let nextAdjective = false;
      while (!nextAdjective) {
        menuEditAdjective();
        let number = readlineSync.question("Enter a number: ");
        switch (number) {
          case "1":
            let descriptionAdjective = readlineSync.question(
              "Enter description Adjective need to edit: "
            );
            for (let j = 0; j < WordManager.words[i].adjective.length; j++) {
              if (
                descriptionAdjective ==
                WordManager.words[i].adjective[j].descriptionAdjective
              ) {
                let editDescriptionAdjective = readlineSync.question(
                  "edit description adjective: "
                );
                let editSampleSentencesAdjective = readlineSync.question(
                  "edit sample sentences adjective: "
                );
                WordManager.words[i].adjective[j].descriptionAdjective =
                  editDescriptionAdjective;
                WordManager.words[i].adjective[j].sampleSentencesAdjective =
                  editSampleSentencesAdjective;
                break;
              }
            }
            break;
          case "2":
            nextAdjective = true;
            break;
        }
      }
    }

    function editSimilarWords(i): void {
      console.log(WordManager.words[i].similarWords);
      let similarWordsEdit = readlineSync.question(
        "Enter the new similar Words: "
      );
      WordManager.words[i].similarWords = similarWordsEdit;
    }

    let fileSave = "data/data.json";

    WordManager.saveFile(fileSave);
  }

  static sortWord(): void {
    function compare(word1, word2) {
      const nameWord1 = word1.name.toUpperCase();
      const nameWord2 = word2.name.toUpperCase();
      let comparison = 0;
      if (nameWord1 > nameWord2) {
        comparison = 1;
      } else if (nameWord1 < nameWord2) {
        comparison = -1;
      }
      return comparison;
    }

    WordManager.words.sort(compare);

    let fileSave = "data/data.json";

    WordManager.saveFile(fileSave);
  }
}
