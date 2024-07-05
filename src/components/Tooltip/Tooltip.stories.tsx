import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Tooltip } from "./";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: { type: "select" },
    },
  },
} as Meta<typeof Tooltip>;

export const Basic: StoryObj<typeof Tooltip> = {
  render: (args) => <Tooltip {...args} />,
  args: {
    title: "Tooltip",
    children: <Button>Hover Over Me</Button>,
    placement: "right",
  },
};
