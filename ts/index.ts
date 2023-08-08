#!/usr/bin/env npx ts-node
const greeting = require("setty-ts").greeting;
console.log(
  "This will run if you set TS_NODE_SKIP_IGNORE=true in the environment"
);
console.log(greeting("TS_NODE_SKIP_IGNORE"));
export {}