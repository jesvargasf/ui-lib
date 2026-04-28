import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  title, 
  elevation = 'md', 
  className = '',
  ...props 
}) => {
  const cardClasses = `
    card
    card--elevation-${elevation}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClasses} {...props}>
      {title && (
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
        </div>
      )}
      <div className="card__body">
        {children}
      </div>
    </div>
  );
};

export default Card;
