import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from ".";

const meta: Meta<typeof CircularProgress> = {
  title: "CircularProgress",
  component: CircularProgress,
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "error",
        "success",
        "warning",
        "info",
        "inherit",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "select" },
    },
  },
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
