import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Like from '../like';

describe('Like componente', () => {
  it('muestra el valor "Likes: 0" por defecto', () => {
    render(<Like />);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
  });

  it('incrementa el número de likes cuando se hace clic en el botón Like', () => {
    render(<Like />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();
  });

  it('decrementa el número de likes cuando se hace clic en el botón Dislike', () => {
    render(<Like />);
    const dislikeButton = screen.getByText('Dislike');
    fireEvent.click(dislikeButton);
    expect(screen.getByText('Likes: -1')).toBeInTheDocument();
  });
});