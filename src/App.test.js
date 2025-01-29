import { render, screen } from '@testing-library/react';
import App from './App';  // Import your App component


describe('App Component', () => {
  test('renders Reward Points Tracker header', () => {
    render(<App />);

    // Check if the header text "Reward Points Tracker" is in the document
    expect(screen.getByText('Reward Points Tracker')).toBeInTheDocument();
  });

  test('renders the CustomerList component', () => {
    render(<App />);

    // Check if the CustomerList (mocked version) is rendered correctly
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });
});
