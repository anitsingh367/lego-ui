import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H3 } from './';

export default {
    title: 'Typography/H3',
    component: H3
} as Meta<typeof H3>;

export const h3: StoryObj<typeof H3> = {
    render: (args) => <H3 {...args} />,
    args: {
        children: 'h3 headline',
        textTransform: 'capitalize'
    }
};