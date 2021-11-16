# `simple-csv-tools`
[![Test](https://github.com/moreavy/simple-csv-tools/actions/workflows/test.yml/badge.svg)](https://github.com/moreavy/simple-csv-tools/actions/workflows/test.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

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
3. `writeJSON(...paths: string[])`: Converts CSV to JSON and writes files to the paths given in the parameters.
4. `parse(arr: array)`: Ovverides the spreadsheets to the given data in JSON form from the `arr` parameter.
5. `sortColumns(fisrtlineisheaders: boolean, headers: array)`: Sorts data in the spreadhseet
by it's columns and returns the sorted data. The `fisrtlineisheaders` and `sortNumericalRows` is set to `true` by default.
You need to give the `headers` parameter only if `fisrtlineisheaders` is set to `false`. This method will return the array
of all the columns in the spreadsheet in the `Column` format.

## Methods Of `Column`s
1. `sortedData()`: Returns the data of the column sorted using serial numbers (from up to down).
2. `srNo(element: string/number)`: Returns the serial number of the element in the column. Will return `0` if the element
is not found.
3. `getElementBySrNo(srNo: number)`: Returns the element given of the perticular serial number in the `srNo` parameter.
4. `includes(element:string/number)`: Returns `true` or `false` whether the column contains the perticular value in the `element` parameter.
