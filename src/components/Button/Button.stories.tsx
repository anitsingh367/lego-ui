import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "select" },
    },
    color: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "error",
        "success",
        "warning",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "small", "medium", "large"],
      control: { type: "select" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "contained",
    children: "Basic",
    color: "primary",
    size: "small",
  },
};
