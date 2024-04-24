import { render, screen, waitFor } from '@testing-library/react';
import { ListMessage } from './index';
import 'firebase/compat/firestore';

jest.mock('firebase/compat/app', () => ({
  initializeApp: jest.fn(),
}));

const firestoreMock = jest.fn(() => ({
  collection: jest.fn(() => ({
    onSnapshot: jest.fn((callback) => callback({
      docs: [{
        id: '1',
        data: () => ({
          message: 'Test message',
          timestamp: {
            toDate: () => new Date(),
          },
        }),
      }],
    })),
  })),
}));

jest.mock('firebase/compat/firestore', () => ({
  firestore: firestoreMock,
}));

describe('ListMessage component', () => {
  it('renders list of messages', async () => {
    render(<ListMessage />);
    await waitFor(() => {
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });
  });

  it('renders "Sem data" when timestamp is not provided', async () => {
    firestoreMock.mockImplementation(() => ({
      collection: jest.fn(() => ({
        onSnapshot: jest.fn((callback) => callback({
          docs: [{
            id: '1',
            data: () => ({
              message: 'Test message',
            }),
          }],
        })),
      })),
    }));
    render(<ListMessage />);
    await waitFor(() => {
      expect(screen.getByText('Sem data')).toBeInTheDocument();
    });
  });
});
