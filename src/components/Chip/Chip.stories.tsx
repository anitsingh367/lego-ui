import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Avatar } from "@mui/material";

import { Chip } from "./index";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    onClick: { action: "onClick" },
    onDelete: { action: "onDelete" },
  },
} as Meta<typeof Chip>;

export const Basic: StoryObj<typeof Chip> = (args) => <Chip {...args} />;

Basic.args = {
  variant: "outlined",
  label: "Basic",
};

export const AvatarChip: StoryObj<typeof Chip> = (args) => (
  <Chip
    {...args}
    onClick={() => alert("I was clicked !!")}
    onDelete={() => alert("I was deleted :(")}
  />
);

AvatarChip.args = {
  label: "Avatar",
  avatar: <Avatar>A</Avatar>,
};
