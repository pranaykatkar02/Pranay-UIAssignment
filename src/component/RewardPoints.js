import React from 'react';

export const RewardPoints = ({ transactions, calculateTotalPoints }) => {
    return (
        <div className="reward-points">
            <h4>Total Reward Points: {calculateTotalPoints(transactions)}</h4>
        </div>
    );
};
