import { OfferData } from '../../types';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { ratingToPercent } from '../../utils/common';
import { PremiumLabel, PlaceCardBookmarkButton } from '../../components';
import React from 'react';
import cn from 'classnames';

type OnMouseEnterProp = {
  onMouseEnter?(offer: OfferData): void;
}

type Props = {
  offer: OfferData;
  className: string;
} & OnMouseEnterProp

function CitiesCardComponent({ offer, className, onMouseEnter }: Props): React.JSX.Element {
  return (
    <article
      className={cn(`${className}__card`, 'place-card')}
      onMouseEnter={onMouseEnter && (() => onMouseEnter(offer))}
    >
      {offer.isPremium && <PremiumLabel />}
      <div className={cn(`${className}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <PlaceCardBookmarkButton offerId={offer.id} status={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingToPercent(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}

export const CitiesCard = React.memo(CitiesCardComponent);
