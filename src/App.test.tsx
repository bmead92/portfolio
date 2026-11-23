import { render, screen } from '@testing-library/react';
import App from './App';

// Note: getByRole is avoided because the jsdom/nwsapi version bundled with react-scripts 5
// throws on its generated selectors.
test('renders name, experience and the new projects', () => {
    const { container } = render(<App />);
    expect(container.querySelector('h1')).toHaveTextContent('Bryce Meadors');
    expect(screen.getByText('MilVet Law Firm PLLC')).toBeInTheDocument();
    expect(screen.getByText('MTG Collector')).toBeInTheDocument();
    expect(screen.getByText('Living Dex')).toBeInTheDocument();
    expect(screen.queryByText(/Trepanier/i)).not.toBeInTheDocument();
});
