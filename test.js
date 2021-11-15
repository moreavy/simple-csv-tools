const Spreadsheet = require(".");
const { join } = require("path");
var sheet = new Spreadsheet(join(__dirname, "test.csv"), true);
console.log(sheet.toStr());
console.log(sheet.toArr());
console.log(sheet.sortColumns());
sheet.writeJSON(join(__dirname, "test.json"));
sheet.parse([
    ["Username", "Password"],
    ["something", "someone"],
    ["someone", "something"],
]);
console.log(sheet.toStr());
console.log(sheet.toArr());
sheet.writeJSON(join(__dirname, "_test.json"), join(__dirname, "__test.json"));
console.log("No error caught in running the code. Warning: This test just catches errors, doesn't check glitches.");
