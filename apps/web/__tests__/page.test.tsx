import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to the Nobilabs Dapp Base!')).toBeInTheDocument();
  });

  it('displays the placeholder content', () => {
    render(<Home />);
    expect(screen.getByText('This is a placeholder page.')).toBeInTheDocument();
    expect(screen.getByText('Feel free to customize it as needed.')).toBeInTheDocument();
  });

  it('contains a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Welcome to the Nobilabs Dapp Base!');
  });
});
