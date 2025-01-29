import React from 'react';

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
                    <tr key={transaction.month}>
                        <td>{transaction.month}</td>
                        <td>${transaction.amountSpent}</td>
                        <td>{calculateRewardPoints(transaction.amountSpent)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
