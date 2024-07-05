import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputAdornment } from ".";

const meta: Meta<typeof InputAdornment> = {
  title: "InputAdornment",
  component: InputAdornment,
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
  },
};
export default meta;

export const Basic: StoryObj<typeof InputAdornment> = {
  render: (args) => <InputAdornment {...args} />,
  args: {
    color: "primary",
  },
};
