import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../src/components/Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    // Reset body overflow
    document.body.style.overflow = 'unset';
  });

  test('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  test('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when backdrop is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" closeOnBackdrop={true}>
        <p>Modal content</p>
      </Modal>
    );
    
    const backdrop = screen.getByText('Test Modal').closest('.modal__backdrop');
    fireEvent.click(backdrop);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when backdrop is clicked if closeOnBackdrop is false', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" closeOnBackdrop={false}>
        <p>Modal content</p>
      </Modal>
    );
    
    const backdrop = screen.getByText('Test Modal').closest('.modal__backdrop');
    fireEvent.click(backdrop);
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test('calls onClose when Escape key is pressed', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" className="custom-modal">
        <p>Modal content</p>
      </Modal>
    );
    
    const modal = screen.getByText('Test Modal').closest('.modal');
    expect(modal).toHaveClass('custom-modal');
  });

  test('passes through additional props', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" data-testid="custom-modal">
        <p>Modal content</p>
      </Modal>
    );
    
    const modal = screen.getByTestId('custom-modal');
    expect(modal).toBeInTheDocument();
  });

  test('sets body overflow to hidden when open', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('resets body overflow when unmounted', () => {
    const { unmount } = render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(document.body.style.overflow).toBe('hidden');
    
    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });

  test('renders header and body with correct classes', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    const header = document.querySelector('.modal__header');
    const body = document.querySelector('.modal__body');
    const title = document.querySelector('.modal__title');
    const close = document.querySelector('.modal__close');
    
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(close).toBeInTheDocument();
    expect(title).toHaveTextContent('Test Modal');
    expect(body).toHaveTextContent('Modal content');
  });
});
