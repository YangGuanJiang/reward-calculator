import {mockData} from './mockData.js';

export const getTransactionsByCustomId = () => {
    return new Promise((resolve, reject) => {
        resolve(mockData)
    })
}
