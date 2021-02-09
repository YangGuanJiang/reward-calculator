import moment from "moment";

const createData = (customId, sum1, sum2, sum3, record) => (
    {
        customId,
        sum1,
        sum2,
        sum3,
        total: sum1 + sum2 + sum3,
        record
    }
);

const countReward = (arr = []) => {
    return arr.reduce((s, a) => s + a.transactionReward,0);
}

const countRecord = (arr1 = [], arr2 = [], arr3 = []) => {
    return [...arr1, ...arr2, ...arr3];
}

export const createRow = (transactions) => {
    let [tableHead, rows] = [[],[]];

    if(Object.keys(transactions).length) {
        tableHead = Object.entries(Object.entries(transactions)[0][1])
            .map(key => key[0])
            .sort((keyA, keyB) => {
                if(moment(keyA,"MM-YYYY").isAfter(moment(keyB,"MM-YYYY"))) return -1;
                else if(moment(keyA,"MM-YYYY").isBefore(moment(keyB,"MM-YYYY"))) return 1;
                else return 0;
            })
    }

    rows = Object.entries(transactions).map((entry) => {
        return createData(entry[0], countReward(entry[1][tableHead[0]]),
            countReward(entry[1][tableHead[1]]), countReward(entry[1][tableHead[2]]),
            countRecord(entry[1][tableHead[0]], entry[1][tableHead[1]], entry[1][tableHead[2]])
        )
    })

    return [tableHead, rows];
}
