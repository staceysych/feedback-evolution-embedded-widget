import { Meta, StoryFn } from "@storybook/react";

import FeedbackWidget from "./FeedbackWidget";

const FeedbackWidgetBasic: StoryFn<typeof FeedbackWidget> = () => {
  return (
      <FeedbackWidget
      triggerComponent={<button>Click me</button>}
      projectId={"507f1f77bcf86cd799439011"} />

  );
};

export default {
  component: FeedbackWidget,
  title: "FeedbackWidgetStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof FeedbackWidget>;

export const FeedbackWidgetStory = FeedbackWidgetBasic.bind({});
FeedbackWidgetStory.storyName = "FeedbackWidgetStory";
