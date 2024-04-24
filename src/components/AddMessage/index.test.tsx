import { render, fireEvent, waitFor } from '@testing-library/react';
import { AddMessage } from './index';
import 'firebase/compat/firestore';

jest.mock('firebase/compat/app', () => ({
  initializeApp: jest.fn(),
}));

const mockAdd = jest.fn();
const mockFirestore = jest.fn(() => ({
  collection: jest.fn(() => ({
    add: mockAdd,
  })),
}));

jest.mock('firebase/compat/firestore', () => ({
  firestore: mockFirestore,
}));

describe('AddMessage component', () => {
  it('adds message to firestore when input is not empty', async () => {
    const { getByPlaceholderText, getByText } = render(<AddMessage />);
    const input = getByPlaceholderText('Insira sua mensagem*');
    const button = getByText('Enviar');

    fireEvent.change(input, { target: { value: 'Test message' } });

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockAdd).toHaveBeenCalledTimes(1);
    });

    expect(mockAdd).toHaveBeenCalledWith({
      message: 'Test message',
    });
  });

  it('does not add message to firestore when input is empty', async () => {
    const { getByText } = render(<AddMessage />);
    const button = getByText('Enviar');

    fireEvent.click(button);

    expect(mockAdd).not.toHaveBeenCalled();
  });
});
