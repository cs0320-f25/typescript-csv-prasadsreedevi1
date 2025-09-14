import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const BLANK_CSV_PATH = path.join(__dirname, "../data/blank_lines.csv");
const COMMAS_CSV_PATH = path.join(__dirname, "../data/commas.csv");
const EMPTY_CSV_PATH = path.join(__dirname, "../data/empty.csv");
const MISSING_CSV_PATH = path.join(__dirname, "../data/missing.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const HEADER_CSV_PATH = path.join(__dirname, "../data/header.csv");


const basicSchema = z.tuple([
  z.string(), 
  z.string(), 
]);
test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, basicSchema)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, basicSchema)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV handles multiple quotes", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH, basicSchema);
  expect(results).toEqual([
    ["name", "quote"],
    ["Alice", 'I like "Bigfoot"']
  ]);
});

test("parseCSV handles blank lines", async () => {
  const results = await parseCSV(BLANK_CSV_PATH, basicSchema);
  expect(results).toEqual([
    ["name", "age"],
    ["Alice", "23"],
    ["Bob", "30"]
  ]);
});

test("parseCSV and missing fields", async () => {
  const results = await parseCSV(MISSING_CSV_PATH, basicSchema);
  expect(results).toEqual([
    ["name", "age"],
    ["Alice", "23"],
    ["John"]
  ]);
});

test("parseCSV with multiple commas", async () => {
  const results = await parseCSV(COMMAS_CSV_PATH, basicSchema);
  expect(results).toEqual([
    ["name", "desc"],
    ["P, Sree", "testing, commas"]
  ]);
});

test("parseCSV with empty file", async () => {
  const results = await parseCSV(EMPTY_CSV_PATH, basicSchema);
  expect(results).toEqual([]);
});

test("parseCSV with only header", async () => {
  const results = await parseCSV(HEADER_CSV_PATH, basicSchema);
  expect(results).toEqual([["name", "age"]]);
});