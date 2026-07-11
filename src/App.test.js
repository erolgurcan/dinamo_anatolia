import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Dinamo Anatolia landing page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /dinamo anatolia/i });
  expect(heading).toBeInTheDocument();
});

test('renders the story chapters and join section', () => {
  render(<App />);
  expect(screen.getByText(/from anatolia to the pacific/i)).toBeInTheDocument();
  expect(screen.getByText(/a shield that means plenty/i)).toBeInTheDocument();
  expect(screen.getByText(/come kick it with us/i)).toBeInTheDocument();
});

test('features the Türkiye and Canada roots section', () => {
  render(<App />);
  expect(screen.getByText(/two flags, one heart/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: 'Türkiye' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: 'Canada' })).toBeInTheDocument();
});

test('has a mobile menu toggle', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
});

test('board members are no longer on the page', () => {
  render(<App />);
  expect(screen.queryByText(/board of members/i)).not.toBeInTheDocument();
});

test('links to the club social media', () => {
  render(<App />);
  const instagramLinks = screen.getAllByRole('link', { name: /instagram/i });
  expect(instagramLinks.length).toBeGreaterThan(0);
  expect(instagramLinks[0]).toHaveAttribute(
    'href',
    expect.stringContaining('instagram.com/dinamoanatolia_fc')
  );
});
