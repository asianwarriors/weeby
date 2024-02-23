import { StarFilledIcon, StarIcon } from "./icons";

function ratingColor(rating: number): string {
  if (rating < 70) {
    return "red";
  }
  if (rating < 80) {
    return "orange";
  }
  return "green";
}

// @Incomplete: color styling doesn't work properly, if we use this in multiple places, we will likely want this to be easier to style
export function RatingText({ rating, size }: RatingProps) {
  const formattedRating = rating / 10;
  return (
    <span className="text-sm">
      <span className={`text-${ratingColor(rating)}-500`}>
        {formattedRating}
      </span>
      /10
    </span>
  );
}

// @Incomplete: implement a PartialStar for better display
// @Incomplete: if we use this in multiple places, we will likely want this to be easier to style
export function RatingStars({ rating, size }: RatingProps) {
  const formattedRating = rating / 20;
  const roundedRating = Math.round(formattedRating);
  const stars = [];
  for (let i = 0; i < roundedRating; i++) {
    stars.push(
      <StarFilledIcon key={Math.random() + i} className={"size-" + size} />,
    );
  }
  for (let i = stars.length; i < 5; i += 1) {
    stars.push(<StarIcon key={Math.random()} className={"size-" + size} />);
  }
  return <div className="flex gap-x-1">{stars}</div>;
}

interface RatingProps {
  rating: number;
  size: number;
}

export function RatingDisplay({ rating, size }: RatingProps) {
  return (
    <div>
      <RatingText rating={rating} size={size} />
      <RatingStars rating={rating} size={size} />
    </div>
  );
}
