import { Meta, StoryFn } from "@storybook/react";
import { Progress } from "../../types/common";

import ProgressTracker from "./ProgressTracker";

const ProgressTrackerBasic: StoryFn<typeof ProgressTracker> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <ProgressTracker progress={Progress.Discovery} />
      <ProgressTracker progress={Progress.Building} />
      <ProgressTracker progress={Progress.Done} />
    </div>
  );
};

export default {
  component: ProgressTracker,
  title: "ProgressTrackerStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ProgressTracker>;

export const ProgressTrackerStory = ProgressTrackerBasic.bind({});
ProgressTrackerStory.storyName = "ProgressTrackerStory";
