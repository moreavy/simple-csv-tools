const fs = require("fs");
const { EOL } = require("os");

class Spreadsheet {
    debugger;
    constructor(path, stringsOnly = false) {
        if (typeof(path) !== "string") throw "The spreadsheet's file path should always be a string.";
        this.path = path;
        this.strsonly = stringsOnly;
    }

    toStr() {
        return fs.readFileSync(this.path, "utf-8");
    }

    toArr() {
        const data = this.toStr()
        const lines = data.split(/\n/g);
        var to = [];
        lines.map((val, idx, arr) => {
            if (val.trim().length === 0) return;
            var line = val.split(",");
            var fields = [];
            if (this.strsonly === false) {
                line.map((v, i, a) => {
                    if (v.match(/^-?\d+$/)) {
                        fields[i] = parseInt(v);
                    } else if (v.match(/^\d+\.\d+$/)) {
                        fields[i] = parseFloat(v);
                    } else {
                        fields[i] = v;
                    }
                });
                to[idx] = fields;
            } else {
                to[idx] = line;
            }
        });
        return to;
    }

    writeJSON(path) {
        fs.writeFileSync(path, `${JSON.stringify(this.toArr())}${EOL}`, "utf-8");
    }

    parse(arr) {
        var to = "";
        if (!Array.isArray(arr)) throw "The item to be parsed into the spreadsheet should always be an array.";
        var itemarrcheck = arr.map((v, i, a) => Array.isArray(v));
        if (itemarrcheck.includes(false)) throw "All items of the array to be parsed into the spreadsheet should always be an array.";
        arr.map((value, index, array) => {
            const itemstrcheck = value.map((v, i, a) => ((typeof(v) === "string") || (typeof(v) === "number")));
            if (itemstrcheck.includes(false)) throw "All items of the array to be parsed into the spreadsheet should always be a string or a number.";
            var prefix = "\n";
            if (index === 0) {
                prefix = "";
            }
            var _to = "";
            value.map((v, i, a) => {
                var _prefix = ",";
                if (i === 0) {
                    _prefix = "";
                }
                _to = `${_to}${_prefix}${v}`;
            });
            to = `${to}${prefix}${_to}`;
        });
        fs.writeFileSync(this.path, `${to}${EOL}`, "utf-8");
    }
}

module.exports = Spreadsheet;
