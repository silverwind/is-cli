"use strict";

module.exports = module => {
  if (!module) throw new Error(`The 'module' argument is required`);
  return require && require.main === module;
};
