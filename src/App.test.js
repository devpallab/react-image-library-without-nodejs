import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './stores';

const store = configureStore();

test('renders header hot link', () => {
  render(<Provider store={store}>
    <App />
</Provider>);
  const linkElement = screen.getByText(/hot/i);
  expect(linkElement).toBeInTheDocument();
});
