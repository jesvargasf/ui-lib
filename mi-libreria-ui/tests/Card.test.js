import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../src/components/Card';

describe('Card Component', () => {
  test('renders card with children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    const card = screen.getByText('Card content').closest('.card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card', 'card--elevation-md');
  });

  test('renders card with title', () => {
    render(<Card title="Test Title">Content</Card>);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('card__title');
  });

  test('applies correct elevation classes', () => {
    const { rerender } = render(<Card elevation="sm">Content</Card>);
    let card = screen.getByText('Content').closest('.card');
    expect(card).toHaveClass('card--elevation-sm');

    rerender(<Card elevation="md">Content</Card>);
    card = screen.getByText('Content').closest('.card');
    expect(card).toHaveClass('card--elevation-md');

    rerender(<Card elevation="lg">Content</Card>);
    card = screen.getByText('Content').closest('.card');
    expect(card).toHaveClass('card--elevation-lg');

    rerender(<Card elevation="none">Content</Card>);
    card = screen.getByText('Content').closest('.card');
    expect(card).toHaveClass('card--elevation-none');
  });

  test('does not render header when no title provided', () => {
    render(<Card>Content</Card>);
    const header = document.querySelector('.card__header');
    expect(header).not.toBeInTheDocument();
  });

  test('renders header when title is provided', () => {
    render(<Card title="Card Title">Content</Card>);
    const header = document.querySelector('.card__header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('card__header');
  });

  test('applies custom className', () => {
    render(<Card className="custom-card">Content</Card>);
    const card = screen.getByText('Content').closest('.card');
    expect(card).toHaveClass('custom-card');
  });

  test('passes through additional props', () => {
    render(<Card data-testid="custom-card">Content</Card>);
    const card = screen.getByTestId('custom-card');
    expect(card).toBeInTheDocument();
  });

  test('renders body content correctly', () => {
    render(
      <Card>
        <h2>Heading</h2>
        <p>Paragraph content</p>
        <span>Span content</span>
      </Card>
    );
    const body = document.querySelector('.card__body');
    expect(body).toBeInTheDocument();
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Paragraph content')).toBeInTheDocument();
    expect(screen.getByText('Span content')).toBeInTheDocument();
  });
});
