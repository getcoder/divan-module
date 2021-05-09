const myModule = require("./main");
console.log("ac8пшп");

const modules = new myModule();

modules.define("A", 3, 0);
modules.define("B", 5, 2000);
modules.define("C", 9, 1000);

modules.require(["A", "B"], (A, B) => console.log("result", A + B));
modules.require(["A", "B", "C"], (A, B, C) =>
  console.log("result-2", A + B - C)
);

console.log("4---", 44);
