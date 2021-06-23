import React from 'react';

export default function CardMark(isPremium) {
  if(isPremium === false) {
    return null;
  }

  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}
