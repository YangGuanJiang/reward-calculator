import React, {useState, useEffect} from "react";

import Header from "./component/header/header.component";
import Home from "./component/home/home.component";

import {refactorTransactionsWithReward} from './shared/ultils/momentUtils';
import {getTransactionsByCustomId} from "./shared/mockApi/MockApi";

import './App.css';

function App() {
    const [transactions, setTransactions] = useState({});

    useEffect(() => {
        getTransactionsByCustomId()
            .then(res => {
                setTransactions(refactorTransactionsWithReward(res.objects));
            });
    }, [])

    return (
    <div className="App">
        <header className='App-header'>
            <Header />
        </header>
        <main className='App-main'>
            <Home transactions={transactions} />
        </main>
    </div>
    );
}

export default App;
