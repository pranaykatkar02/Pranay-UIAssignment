import React from 'react';

// Reward point to be displayed for 1 customer
export const RewardPoints = ({ transactions, calculateTotalPoints }) => {
    return (
        <div className="points">
            <h4>Total Reward Points: {calculateTotalPoints(transactions)}</h4>
        </div>
    );
};
