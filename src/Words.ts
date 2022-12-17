import {Noun} from "../work-type/Noun";
import {Verb} from "../work-type/Verb";
import {Adjective} from "../work-type/Adjective";

export class Words {
    name: string;
    pronounce: string;
    noun: Noun[];
    verb: Verb[];
    adjective: Adjective[];
    similarWords: string;

    constructor(name: string, pronounce: string, noun: Noun[], verb: Verb[], adjective: Adjective[], similarWords: string) {
        this.name = name;
        this.pronounce = pronounce;
        this.noun = noun;
        this.verb = verb;
        this.adjective = adjective;
        this.similarWords = similarWords;
    }

    getName(): string {
        return this.name;
    }

    getPronounce(): string {
        return this.pronounce;
    }

    getNoun(): Noun[] {
        return this.noun;
    }

    getVerb(): Verb[] {
        return this.verb;
    }

    getAdjective(): Adjective[] {
        return this.adjective;
    }

    getSimilarWords(): string {
        return this.similarWords;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPronounce(pronounce: string): void {
        this.pronounce = pronounce;
    }

    setSimilarWords(similarWords: string): void {
        this.similarWords = similarWords;
    }



}

