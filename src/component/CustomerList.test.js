import { render, screen, waitFor } from '@testing-library/react';
import { CustomerList } from './CustomerList';  // Adjust import based on your file structure
import sampleData from '../data/sampleData';  // Adjust import based on your file structure

// Mocking the sample data
jest.mock('../data/sampleData', () => [
    {
        id: 1, name: 'Ronaldo',
        transactions: [{ month: 'January', amountSpent: 120 }, { month: 'February', amountSpent: 80 }, { month: 'March', amountSpent: 200 }]
    },
    {
        id: 2, name: 'Messi',
        transactions: [{ month: 'January', amountSpent: 95 }, { month: 'February', amountSpent: 50 }, { month: 'March', amountSpent: 150 }]
    },
]);

describe('CustomerList', () => {
    // Mock setTimeout to immediately call the callback
    jest.useFakeTimers();

    test('should show loading message initially', () => {
        // Render the CustomerList component
        render(<CustomerList />);

        // Check if the loading message is displayed initially
        expect(screen.getByText(/Loading data.../i)).toBeInTheDocument();
    });

    test('should render customer data after timeout', async () => {
        // Render the CustomerList component
        render(<CustomerList />);

        // Fast-forward the timers to simulate the setTimeout
        jest.advanceTimersByTime(1000);

        // Wait for the component to finish rendering and ensure customer data is displayed
        await waitFor(() => {
            // After the timeout, check if the customers are rendered
            expect(screen.getByText(/Ronaldo/)).toBeInTheDocument();
            expect(screen.getByText(/Messi/)).toBeInTheDocument();
        });

        // Check if the correct transaction amount is displayed
        expect(screen.getByText('$120')).toBeInTheDocument();
        expect(screen.getByText('$80')).toBeInTheDocument();
    });
});
