"use strict";

const isCli = require(".");

test("positive", () => {
  expect(isCli(module)).toEqual(true);
});

test("negative", () => {
  const module = require("./fixtures/indirect.js");
  expect(isCli(module)).toEqual(false);
});

test("throw", () => {
  expect(() => {
    isCli();
  }).toThrow();
});
