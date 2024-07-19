import React, { memo } from 'react';
import { Review } from '../../types';
import { ReviewsItem } from '../../components';

type Props = {
  reviews: Review[];
}

const MAX_REVIEWS_COUNT = 10;

function ReviewsListComponent({ reviews }: Props): React.JSX.Element {
  const selectedReviews = reviews.slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {selectedReviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export const ReviewsList = memo(ReviewsListComponent);
