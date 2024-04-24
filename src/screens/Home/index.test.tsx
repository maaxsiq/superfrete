import { render, screen } from '@testing-library/react';
import { Home } from './index';

describe('Home component', () => {
  it('renders AddMessage and ListMessage components', () => {
    render(<Home />);

    const addMessageComponent = screen.getByTestId('add-message-component');
    expect(addMessageComponent).toBeInTheDocument();

    const listMessageComponent = screen.getByTestId('list-message-component');
    expect(listMessageComponent).toBeInTheDocument();
  });
});