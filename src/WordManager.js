"use strict";
exports.__esModule = true;
exports.WordManager = void 0;
var Words_1 = require("./Words");
var readlineSync = require("readline-sync");
var Noun_1 = require("../work-type/Noun");
var Verb_1 = require("../work-type/Verb");
var Adjective_1 = require("../work-type/Adjective");
var WordManager = /** @class */ (function () {
    function WordManager() {
    }
    WordManager.readFile = function (file) {
        var fs = require("fs");
        var data = fs.readFileSync(file, { encoding: "utf8", flag: "r" });
        WordManager.words = JSON.parse(data);
    };
    WordManager.saveFile = function (file) {
        var fs = require("fs");
        var wordsJson = JSON.stringify(WordManager.words);
        fs.writeFileSync(file, wordsJson);
    };
    WordManager.showWords = function () {
        console.table(WordManager.words, ["name", "pronounce", "similarWords"]);
    };
    WordManager.addWord = function () {
        var name = readlineSync.question("Add Name: ");
        var pronounce = readlineSync.question("Add pronounce: ");
        var noun = [];
        var verb = [];
        var adjective = [];
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
        var nextNoun = false;
        while (!nextNoun) {
            menuNoun();
            var number = readlineSync.question("Enter a number: ");
            switch (number) {
                case "1":
                    var descriptionNoun = readlineSync.question("Add description Noun: ");
                    var sampleSentencesNoun = readlineSync.question("Add sample Sentences Noun: ");
                    var noun1 = new Noun_1.Noun(descriptionNoun, sampleSentencesNoun);
                    noun.push(noun1);
                    break;
                case "2":
                    nextNoun = true;
                    break;
            }
        }
        var nextVerb = false;
        while (!nextVerb) {
            menuVerb();
            var number = readlineSync.question("Enter a number: ");
            switch (number) {
                case "1":
                    var descriptionVerb = readlineSync.question("Add description Verb: ");
                    var sampleSentencesVerb = readlineSync.question("Add sample Sentences Verb: ");
                    var verb1 = new Verb_1.Verb(descriptionVerb, sampleSentencesVerb);
                    verb.push(verb1);
                    break;
                case "2":
                    nextVerb = true;
                    break;
            }
        }
        var nextAdjective = false;
        while (!nextAdjective) {
            menuAdjective();
            var number = readlineSync.question("Enter a number: ");
            switch (number) {
                case "1":
                    var descriptionAdjective = readlineSync.question("Add description Adjective: ");
                    var sampleSentencesAdjective = readlineSync.question("Add sample Sentences Adjective: ");
                    var adjective1 = new Adjective_1.Adjective(descriptionAdjective, sampleSentencesAdjective);
                    adjective.push(adjective1);
                    break;
                case "2":
                    nextAdjective = true;
                    break;
            }
        }
        var similarWords = readlineSync.question("Add similar Words: ");
        var word = new Words_1.Words(name, pronounce, noun, verb, adjective, similarWords);
        WordManager.words.push(word);
        var fileSave = "data/data.json";
        WordManager.saveFile(fileSave);
    };
    WordManager.deleteWord = function () {
        var checkWordNameDelete = false;
        while (!checkWordNameDelete) {
            var wordName = readlineSync.question("Enter the word name need to delete: ");
            for (var i = 0; i < WordManager.words.length; i++) {
                if (wordName == WordManager.words[i].name) {
                    WordManager.words.splice(i, 1);
                    checkWordNameDelete = true;
                    break;
                }
            }
        }
        var fileSave = "data/data.json";
        WordManager.saveFile(fileSave);
    };
    WordManager.search = function () {
        var wordSearch = readlineSync.question("Enter word need to search: ");
        var indexWordSearch = -1;
        var checkWordSearch = true;
        for (var i = 0; i < WordManager.words.length; i++) {
            if (wordSearch == WordManager.words[i].name) {
                indexWordSearch = i;
                checkWordSearch = false;
                break;
            }
        }
        if (checkWordSearch) {
            console.log("The search word has not been updated ");
        }
        else {
            console.log("----------- ".concat(WordManager.words[indexWordSearch].name, " -------------"));
            console.log("pronounce: " + WordManager.words[indexWordSearch].pronounce);
            console.log("Noun:");
            for (var i = 0; i < WordManager.words[indexWordSearch].noun.length; i++) {
                console.log(WordManager.words[indexWordSearch].noun[i]);
            }
            ;
            console.log("Verb: ");
            for (var i = 0; i < WordManager.words[indexWordSearch].verb.length; i++) {
                console.log(WordManager.words[indexWordSearch].verb[i]);
            }
            ;
            console.log("Adjective: ");
            for (var i = 0; i < WordManager.words[indexWordSearch].adjective.length; i++) {
                console.log(WordManager.words[indexWordSearch].adjective[i]);
            }
            ;
            console.log("similar: " + WordManager.words[indexWordSearch].similarWords);
            console.log("--------------------------------------");
        }
    };
    WordManager.editWord = function () {
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
        var checkNameEdit = false;
        while (!checkNameEdit) {
            var name_1 = readlineSync.question("Enter the Name Word need to edit: ");
            for (var i = 0; i < WordManager.words.length; i++) {
                if (name_1 == WordManager.words[i].name) {
                    var quitEdit = false;
                    while (!quitEdit) {
                        editMenu();
                        var numberEdit = readlineSync.question("Enter a number: ");
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
        function editName(i) {
            console.log(WordManager.words[i].name);
            var nameEdit = readlineSync.question("Enter the new Name: ");
            WordManager.words[i].name = nameEdit;
        }
        function editPronounce(i) {
            console.log(WordManager.words[i].pronounce);
            var pronounceEdit = readlineSync.question("Enter the new pronounce: ");
            WordManager.words[i].pronounce = pronounceEdit;
        }
        function editNoun(i) {
            console.log(WordManager.words[i].getNoun());
            var nextNoun = false;
            while (!nextNoun) {
                menuEditNoun();
                var number = readlineSync.question("Enter a number: ");
                switch (number) {
                    case "1":
                        var descriptionNoun = readlineSync.question("Enter description Noun need to edit: ");
                        for (var j = 0; j < WordManager.words[i].noun.length; j++) {
                            if (descriptionNoun ==
                                WordManager.words[i].getNoun()[j].descriptionNoun) {
                                var editDescriptionNoun = readlineSync.question("edit description noun: ");
                                var editSampleSentencesNoun = readlineSync.question("edit sample sentences noun: ");
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
        function editVerb(i) {
            console.log(WordManager.words[i].getVerb());
            var nextVerb = false;
            while (!nextVerb) {
                menuEditVerb();
                var number = readlineSync.question("Enter a number: ");
                switch (number) {
                    case "1":
                        var descriptionVerb = readlineSync.question("Enter description Verb need to edit: ");
                        for (var j = 0; j < WordManager.words[i].verb.length; j++) {
                            if (descriptionVerb == WordManager.words[i].verb[j].descriptionVerb) {
                                var editDescriptionVerb = readlineSync.question("edit description verb: ");
                                var editSampleSentencesVerb = readlineSync.question("edit sample sentences verb: ");
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
        function editAdjective(i) {
            console.log(WordManager.words[i].getAdjective());
            var nextAdjective = false;
            while (!nextAdjective) {
                menuEditAdjective();
                var number = readlineSync.question("Enter a number: ");
                switch (number) {
                    case "1":
                        var descriptionAdjective = readlineSync.question("Enter description Adjective need to edit: ");
                        for (var j = 0; j < WordManager.words[i].adjective.length; j++) {
                            if (descriptionAdjective ==
                                WordManager.words[i].adjective[j].descriptionAdjective) {
                                var editDescriptionAdjective = readlineSync.question("edit description adjective: ");
                                var editSampleSentencesAdjective = readlineSync.question("edit sample sentences adjective: ");
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
        function editSimilarWords(i) {
            console.log(WordManager.words[i].similarWords);
            var similarWordsEdit = readlineSync.question("Enter the new similar Words: ");
            WordManager.words[i].similarWords = similarWordsEdit;
        }
        var fileSave = "data/data.json";
        WordManager.saveFile(fileSave);
    };
    WordManager.sortWord = function () {
        function compare(word1, word2) {
            var nameWord1 = word1.name.toUpperCase();
            var nameWord2 = word2.name.toUpperCase();
            var comparison = 0;
            if (nameWord1 > nameWord2) {
                comparison = 1;
            }
            else if (nameWord1 < nameWord2) {
                comparison = -1;
            }
            return comparison;
        }
        WordManager.words.sort(compare);
        var fileSave = "data/data.json";
        WordManager.saveFile(fileSave);
    };
    WordManager.words = [];
    return WordManager;
}());
exports.WordManager = WordManager;
