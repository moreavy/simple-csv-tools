class Column {
    constructor({ header, data }) {
        this.header = header;
        this.data = data;
    }

    includes(element) {
        return this.data.includes(element);
    }

    sortedData() {
        var to = this.data.map((value, index, array) => {
            return {
                content: value,
                srNo: index + 1,
                header: this.header,
            }
        });
        return to;
    }

    srNo(element) {
        if (this.includes(element)) return this.sortedData()[this.data.indexOf(element)].srNo;
        return 0;
    }

    getElementBySrNo(srNo) {
        if (srNo > this.sortedData().length) return null;
        if (srNo === 0) return null;
        for (var i = 1; i < this.sortedData().length; i++) {
            if (srNo === i) return this.sortedData()[i].content;
        }
    }
}

module.exports = Column;
