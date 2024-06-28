import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from ".";

const meta: Meta<typeof CircularProgress> = {
  title: "CircularProgress",
  component: CircularProgress,
};
export default meta;

export const Basic: StoryObj<typeof CircularProgress> = {
  render: (args) => <CircularProgress {...args} />,
  args: {
    color: "primary",
    size: "sm",
    thickness: 3.6,
  },
};
