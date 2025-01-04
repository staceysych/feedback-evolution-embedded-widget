import { Meta, StoryFn } from "@storybook/react";
import { Progress } from "../../types/common";

import ProgressCard from "./ProgressCard";

const mockProps = {
  data: {
    body: "It would be great to have options in the widget to choose how to display ratings. Options like stars, emojis, or thumbs up and down could allow users to select the style that best fits their brand and audience.",
    votes: 0,
    _id: "1",
    progress: Progress.Building,
  },
};

const ProgressCardBasic: StoryFn<typeof ProgressCard> = () => {
  return <ProgressCard {...mockProps} projectId="" />;
};

export default {
  component: ProgressCard,
  title: "ProgressCardStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ProgressCard>;

export const ProgressCardStory = ProgressCardBasic.bind({});
ProgressCardStory.storyName = "ProgressCardStory";
