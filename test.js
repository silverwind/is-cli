"use strict";

test("positive", () => {
  expect(require(".")(module)).toEqual(true);
});

test("negative", () => {
  const module = require("./fixtures/indirect.js");
  expect(require(".")(module)).toEqual(false);
});
