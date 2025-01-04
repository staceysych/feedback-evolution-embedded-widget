import { Meta, StoryFn } from "@storybook/react";

import ReviewCardsSlider from "./ReviewCardsSlider";

const ReviewCardsSliderBasic: StoryFn<typeof ReviewCardsSlider> = () => {
  return <ReviewCardsSlider projectId="" />;
};

export default {
  component: ReviewCardsSlider,
  title: "ReviewCardsSliderStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ReviewCardsSlider>;

export const ReviewCardsSliderStory = ReviewCardsSliderBasic.bind({});
ReviewCardsSliderStory.storyName = "ReviewCardsSliderStory";
