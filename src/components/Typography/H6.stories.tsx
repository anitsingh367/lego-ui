import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H6 } from './';

export default {
    title: 'Typography/H6',
    component: H6
} as Meta<typeof H6>;

export const h6: StoryObj<typeof H6> = {
    render: (args) => <H6 {...args} />,
    args: {
        children: 'h6 heading',
        textTransform: 'capitalize'
    }
};