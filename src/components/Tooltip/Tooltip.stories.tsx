import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './';

export default {
    title: 'Tooltip',
    component: Tooltip
} as Meta<typeof Tooltip>;

export const Basic: StoryObj<typeof Tooltip> = {
    render: (args) => <Tooltip {...args} />,
    args: {
        title: 'Tooltip',
        children: <Button>Hover Over Me</Button>,
        placement: 'right'
    }
};