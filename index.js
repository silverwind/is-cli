"use strict";

module.exports = module => {
  if (module === undefined) throw new Error(`The 'module' argument is required`);
  return require && require.main === module;
};
