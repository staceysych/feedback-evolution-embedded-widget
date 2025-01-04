import { Meta, StoryFn } from "@storybook/react";

import ProgressCardsSlider from "./ProgressCardsSlider";

const ProgressCardsSliderBasic: StoryFn<typeof ProgressCardsSlider> = () => {
  return <ProgressCardsSlider projectId="" />;
};

export default {
  component: ProgressCardsSlider,
  title: "ProgressCardsSliderStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ProgressCardsSlider>;

export const ProgressCardsSliderStory = ProgressCardsSliderBasic.bind({});
ProgressCardsSliderStory.storyName = "ProgressCardsSliderStory";
