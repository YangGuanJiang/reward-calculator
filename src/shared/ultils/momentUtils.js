import moment from 'moment';

const calculateReward = (amount) => {
    let amt = amount >> 0
    if(amt <= 50) {
        return 0;
    }else if(amt <= 100) {
        return amt - 50;
    }else {
        return 2 * (amt - 100) + 50;
    }
}

const refactorTransactionsWithReward = (transactionList) => {
    let categorizedTransactions = {}
    transactionList.forEach((transaction) => {
        if(!categorizedTransactions[transaction.customId])  categorizedTransactions[transaction.customId] = {};
        if(!categorizedTransactions[transaction.customId][moment(transaction.transactionDate).format('MM-YYYY')])
            categorizedTransactions[transaction.customId][moment(transaction.transactionDate).format('MM-YYYY')] = [];
        categorizedTransactions[transaction.customId][moment(transaction.transactionDate).format('MM-YYYY')]
            .push({...transaction,
                transactionReward: calculateReward(transaction.transactionAmount)
            })
    })
    return categorizedTransactions;
}

export {refactorTransactionsWithReward}
