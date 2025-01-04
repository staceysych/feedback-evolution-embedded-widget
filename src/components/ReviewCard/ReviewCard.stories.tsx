import { Meta, StoryFn } from "@storybook/react";

import ReviewCard from "./ReviewCard";

const mockProps = {
  data: {
    body: "We love the option to showcase selected feedback directly on our website, alongside new feature updates. It’s a great way to show our users that we value their input and are actively improving based on their suggestions.",
    rating: 5,
    createdAt: Date.now(),
    _id: "1",
  },
};

const ReviewCardBasic: StoryFn<typeof ReviewCard> = () => {
  return <ReviewCard {...mockProps} />;
};

export default {
  component: ReviewCard,
  title: "ReviewCardStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ReviewCard>;

export const ReviewCardStory = ReviewCardBasic.bind({});
ReviewCardStory.storyName = "ReviewCardStory";
