"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_parser_1 = require("../src/basic-parser");
const path = __importStar(require("path"));
const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const BLANK_CSV_PATH = path.join(__dirname, "../data/blank_lines.csv");
const COMMAS_CSV_PATH = path.join(__dirname, "../data/commas.csv");
const EMPTY_CSV_PATH = path.join(__dirname, "../data/empty.csv");
const MISSING_CSV_PATH = path.join(__dirname, "../data/missing.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const HEADER_CSV_PATH = path.join(__dirname, "../data/header.csv");
test("parseCSV yields arrays", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(PEOPLE_CSV_PATH);
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "age"]);
    expect(results[1]).toEqual(["Alice", "23"]);
    expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
    expect(results[3]).toEqual(["Charlie", "25"]);
    expect(results[4]).toEqual(["Nim", "22"]);
}));
test("parseCSV yields only arrays", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(PEOPLE_CSV_PATH);
    for (const row of results) {
        expect(Array.isArray(row)).toBe(true);
    }
}));
test("parseCSV handles multiple quotes", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(QUOTES_CSV_PATH);
    expect(results).toEqual([
        ["name", "quote"],
        ["Alice", 'I like "Bigfoot"']
    ]);
}));
test("parseCSV handles blank lines", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(BLANK_CSV_PATH);
    expect(results).toEqual([
        ["name", "age"],
        ["Alice", "23"],
        ["Bob", "30"]
    ]);
}));
test("parseCSV and missing fields", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(MISSING_CSV_PATH);
    expect(results).toEqual([
        ["name", "age"],
        ["Alice", "23"],
        ["John"]
    ]);
}));
test("parseCSV with multiple commas", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(COMMAS_CSV_PATH);
    expect(results).toEqual([
        ["name", "desc"],
        ["P, Sree", "testing, commas"]
    ]);
}));
test("parseCSV with empty file", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(EMPTY_CSV_PATH);
    expect(results).toEqual([]);
}));
test("parseCSV with only header", () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, basic_parser_1.parseCSV)(HEADER_CSV_PATH);
    expect(results).toEqual([["name", "age"]]);
}));
