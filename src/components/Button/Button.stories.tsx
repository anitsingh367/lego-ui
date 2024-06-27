import { Meta, StoryObj } from "@storybook/react/*";

import { Button } from ".";


const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
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

export const PrimaryWithLoader: Story = {
  args: {
    variant: "contained",
    children: "Basic",
    color: "primary",
    size: "small",
    isLoading: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    children: "Basic",
    color: "secondary",
    size: "small",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "contained",
    children: "Basic",
    color: "tertiary",
    size: "small",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    variant: "outlined",
    children: "Basic",
    color: "primary",
    size: "small",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    variant: "outlined",
    children: "Basic",
    color: "secondary",
    size: "small",
  },
};

export const TertiaryOutlined: Story = {
  args: {
    variant: "outlined",
    children: "Basic",
    color: "tertiary",
    size: "small",
  },
};

export const TertiaryText: Story = {
  args: {
    variant: "text",
    children: "Basic",
    color: "tertiary",
    size: "small",
  },
};

