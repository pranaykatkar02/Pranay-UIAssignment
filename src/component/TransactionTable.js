import React from 'react';

//Transaction table display head and body where it display  month , amount and reward point
export const TransactionTable = ({ transactions, calculateRewardPoints }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Transaction Amount</th>
                    <th>Points Earned</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.month}</td>
                        <td>${transaction.amountSpent}</td>
                        <td>{calculateRewardPoints(transaction.amountSpent)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
