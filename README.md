# `simple-csv-tools`
`simple-csv-tools` is a simple API to work on CSV spreadsheets.
## Usage
When you import `simple-scv-tools`, you'll be reported with a class. The class provides the API for working on your spreadsheet.
```js
const Spreadsheet = require("simple-csv-tools");
var sheet = new Spreadsheet(path: string, stringsOnly: boolean);
```
The `path` parameter is for the the spreadsheet's (`.csv` file format) file path. `simple-csv-tools` supports numbers. The `stringsOnly` parameter (`false` by default)
is a boolean to ask whether the data should be returned only in the string format. If `stringsOnly` is set to `true`, numerical values will be returned in the string
format.

## Methods
1. `toStr()`: Returns the string of the spreadsheet in the CSV format.
2. `toArr()`: Returns an array containing the same data in the spreadsheet (JSON format)
3. `writeJSON(path: string)`: Converts CSV to JSON and writes a file to the given path (the parameter).
4. `parse(arr: array)`: Ovverides the spreadsheets to the given data in JSON form from the `arr` parameter.
