import { render, screen } from '@testing-library/react';
import { TransactionTable } from './TransactionTable';  // Adjust import based on your file structure

describe('TransactionTable', () => {
    const transactions = [
        { month: 'January', amountSpent: 120 },
        { month: 'February', amountSpent: 80 },
        { month: 'March', amountSpent: 60 },
    ];

    // Function to calculate reward points
    const calculateRewardPoints = (amount) => {
        let points = 0;
        if (amount > 100) {
            points += (amount - 100) * 2;
            points += 50;
        } else if (amount >= 50) {
            points += (amount - 50);
        }
        return points;
    };

    test('should render a table with transaction details', () => {
        render(<TransactionTable transactions={transactions} calculateRewardPoints={calculateRewardPoints} />);

        expect(screen.getByText('Month')).toBeInTheDocument();
        expect(screen.getByText('Transaction Amount')).toBeInTheDocument();
        expect(screen.getByText('Points Earned')).toBeInTheDocument();

        transactions.forEach((transaction) => {
            expect(screen.getByText(transaction.month)).toBeInTheDocument();
            expect(screen.getByText(`$${transaction.amountSpent}`)).toBeInTheDocument();
        });
    });

    test('should calculate the reward points correctly', () => {
        render(<TransactionTable transactions={transactions} calculateRewardPoints={calculateRewardPoints} />);

        transactions.forEach((transaction) => {
            const points = calculateRewardPoints(transaction.amountSpent);
            expect(screen.getByText(`${points}`)).toBeInTheDocument();
        });
    });
});
