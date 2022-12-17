"use strict";
exports.__esModule = true;
exports.Words = void 0;
var Words = /** @class */ (function () {
    function Words(name, pronounce, noun, verb, adjective, similarWords) {
        this.name = name;
        this.pronounce = pronounce;
        this.noun = noun;
        this.verb = verb;
        this.adjective = adjective;
        this.similarWords = similarWords;
    }
    Words.prototype.getName = function () {
        return this.name;
    };
    Words.prototype.getPronounce = function () {
        return this.pronounce;
    };
    Words.prototype.getNoun = function () {
        return this.noun;
    };
    Words.prototype.getVerb = function () {
        return this.verb;
    };
    Words.prototype.getAdjective = function () {
        return this.adjective;
    };
    Words.prototype.getSimilarWords = function () {
        return this.similarWords;
    };
    Words.prototype.setName = function (name) {
        this.name = name;
    };
    Words.prototype.setPronounce = function (pronounce) {
        this.pronounce = pronounce;
    };
    Words.prototype.setSimilarWords = function (similarWords) {
        this.similarWords = similarWords;
    };
    return Words;
}());
exports.Words = Words;
