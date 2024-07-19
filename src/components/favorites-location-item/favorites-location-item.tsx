import React from 'react';
import { OfferData } from '../../types';
import { FavoritesCard } from '../../components';

type Props = {
  offers: OfferData[];
}

export function FavoritesPlaces({ offers }: Props): React.JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer: OfferData): React.JSX.Element => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
        />))}
    </div>
  );
}
