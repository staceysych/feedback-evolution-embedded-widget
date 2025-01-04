import { useEffect, useState } from "react";
import { REVIEWS_API } from "../../utils/defaults";

import { StarIcon } from "@heroicons/react/24/solid";

import FeedbackWidget from "../FeedbackWidget";

interface TotalReviewsRatingProps {
  projectId: string;
}

const TotalReviewRatings = ({ projectId }: TotalReviewsRatingProps) => {
  const [reviews, setReviews] = useState([]);

  const [ratingCounts, setRatingCounts] = useState<number[]>([]);
  const [ratingPercentage, setRatingPercentage] = useState<number[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(`${REVIEWS_API}/${projectId}`);
      const resJson = await res.json();
      setReviews(resJson.data);
    };

    fetchReviews();
  }, []);

  const totalReviews = reviews.length;

  const countReviews = () => {
    const counts = [0, 0, 0, 0, 0];
    reviews.forEach(({ rating }) => {
      const roundedRating = Math.ceil(rating);
      if (roundedRating >= 1 && roundedRating <= 5) {
        counts[roundedRating - 1]++;
      }
    });

    setRatingCounts(counts);
    const getPercentage = (count: number) => (count / totalReviews) * 100;
    setRatingPercentage(counts.map((count) => getPercentage(count)));
  };

  const averageRating = (
    reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
  ).toFixed(1);

  useEffect(() => {
    countReviews();
  }, [reviews]);

  const writeReviewButton = (
    <button className="!fr-btn !fr-text-white !fr-bg-brandLightBlue hover:!fr-bg-brandDarkBlue fr-mt-4 !fr-min-h-[40px] !fr-h-[40px]">
      Write a review
    </button>
  );

  return (
    <div className="fr">
      <div className="!fr-card fr-shadow-[0_4px_10px_rgba(0,0,0,0.1)] fr-min-w-[300px] fr-min-h-[312px]">
        <div className="!fr-card-body !fr-p-6 fr-items-center">
          {!!reviews.length ? (
            <>
              <div className="fr-flex fr-items-center fr-gap-2 fr-justify-center">
                <h2 className="fr-text-3xl fr-font-bold fr-text-brandDarkBlue">
                  {averageRating}
                </h2>
                <StarIcon className="fr-size-8 fr-text-yellow-500" />
              </div>
              <p className="fr-text-brandDarkBlue fr-text-sm fr-opacity-50">
                out of {totalReviews} reviews
              </p>
              <div className="fr-w-full fr-flex fr-flex-col fr-gap-3">
                {ratingCounts.map((count, index) => {
                  const rating = index + 1;
                  const percentage =
                    totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                  return (
                    <div
                      key={rating}
                      className="fr-grid fr-grid-cols-[36px_1fr_36px] fr-items-center fr-gap-2"
                    >
                      <span className="fr-text-xs fr-text-right fr-text-brandDarkBlue">
                        {rating} Star
                      </span>

                      <div className="fr-flex fr-w-full fr-bg-gray-200 fr-rounded-md fr-h-4">
                        <div
                          className="fr-bg-brandDarkBlue fr-h-4 fr-rounded-md"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>

                      <span className="fr-text-xs fr-text-brandDarkBlue fr-font-bold">
                        {Math.round(percentage)}%
                      </span>
                    </div>
                  );
                })}
              </div>
              <FeedbackWidget
                projectId={projectId}
                triggerComponent={writeReviewButton}
              />
            </>
          ) : (
            <span className="!fr-loading !fr-loading-dots !fr-loading-lg !fr-bg-brandDarkBlue fr-inline-block fr-m-auto"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalReviewRatings;
