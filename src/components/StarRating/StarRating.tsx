import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

interface StarRatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
  setRating?: (rating: number) => void;
  rating: number;
  showRating?: boolean;
  size?: number;
}

const StarRating = ({
  totalStars = 5,
  onRatingChange,
  setRating,
  rating,
  showRating = true,
  size = 32,
}: StarRatingProps) => {
  const handleRating = (newRating: number) => {
    setRating && setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="fr-flex fr-items-center fr-justify-between fr-w-full">
      <div className="fr-flex fr-items-center fr-gap-1">
        {Array.from({ length: totalStars }, (_, index) => (
          <button
            key={index}
            className="fr-cursor-pointer"
            onClick={() => handleRating(index + 1)}
          >
            {index < rating ? (
              <SolidStarIcon
                className="fr-text-yellow-500"
                style={{ width: `${size}px`, height: `${size}px` }}
              />
            ) : (
              <OutlineStarIcon
                className="fr-text-gray-300"
                style={{ width: `${size}px`, height: `${size}px` }}
              />
            )}
          </button>
        ))}
      </div>
      {showRating && (
        <p className="fr-text-sm fr-text-gray-500">
          {rating}/{totalStars}
        </p>
      )}
    </div>
  );
};

export default StarRating;
