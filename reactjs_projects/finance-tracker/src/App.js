import { useState } from "react";
import "./App.css";

export default function App() {
    const [transactions, setTransactions] = useState([]);
    function handleTransaction(transaction) {
        setTransactions((transactions) => [...transactions, transaction]);
    }

    return (
        <div>
            <Header />
            <AllTransactions transactions={transactions} />
            <TransactionForm onTransaction={handleTransaction} />
            <Footer transactions={transactions} />
        </div>
    );
}

function Header() {
    return <h2 className="header">Finance Tracker</h2>;
}

function AllTransactions({ transactions }) {
    return (
        <div className="dashboard">
            <h3>All Transactions</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <Transaction transaction={transaction} key={index} />
                ))}
            </ul>
        </div>
    );
}

function Transaction({ transaction }) {
    return <li>{transaction}</li>;
}

function TransactionForm({ onTransaction }) {
    const [amount, setAmount] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(amount);
        onTransaction(amount);
        setAmount("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Amount</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button type="submit">Add</button>
        </form>
    );
}

function Footer({ transactions }) {
    const sum = transactions.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return (
        <footer>
            <p>Total transaction Amount: {sum} </p>
        </footer>
    );
}
