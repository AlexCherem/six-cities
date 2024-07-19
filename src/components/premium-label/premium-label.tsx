type Props = {
  isOfferMark?: boolean;
}

export function PremiumLabel({isOfferMark}: Props): React.JSX.Element {
  return (
    <div className={isOfferMark ? 'offer__mark' : 'place-card__mark'}>
      <span>Premium</span>
    </div>
  );
}
