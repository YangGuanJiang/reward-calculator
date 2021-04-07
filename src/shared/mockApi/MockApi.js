import mockData from './mockData.json';

export const getTransactionsByCustomId = () => {
    return new Promise((resolve, reject) => {
        resolve(mockData)
    })
}
