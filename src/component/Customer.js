import React from 'react';
import { TransactionTable } from './TransactionTable';
import { RewardPoints } from './RewardPoints';
export const Customer = ({ customer }) => {

    // Function to calculate reward points based on the amount spent
    const calculateReward = (amount) => {
        if (amount > 100) {
            return (amount - 100) * 2 + 50;
        } else if (amount >= 50) {
            return amount - 50;
        }
        return 0;
    };

    //Function to calculate total reward point
    const calculateTotalPoints = (transaction) => {
        let total = 0;
        transaction.map((transactionVal) => {
            total += calculateReward(transactionVal.amountSpent);
        })
        return total;
    };

    // Map Sample data which respect to customer 
    return (
        <div className="card">
            <h3>Customer: {customer.name}</h3>
            <TransactionTable transactions={customer.transactions}
                calculateRewardPoints={calculateReward} />
            <RewardPoints transactions={customer.transactions} calculateTotalPoints={calculateTotalPoints} />
        </div>
    )
}
