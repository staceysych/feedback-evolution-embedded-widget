import { Meta, StoryFn } from "@storybook/react";

import TotalReviewRatings from "./TotalReviewsRating";

const TotalReviewRatingsBasic: StoryFn<typeof TotalReviewRatings> = () => {
  return <TotalReviewRatings projectId="507f1f77bcf86cd799439011" />;
};

export default {
  component: TotalReviewRatings,
  title: "TotalReviewRatingsStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof TotalReviewRatings>;

export const TotalReviewRatingsStory = TotalReviewRatingsBasic.bind({});
TotalReviewRatingsStory.storyName = "TotalReviewRatingsStory";
