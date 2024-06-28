import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H2 } from './';

export default {
    title: 'Typography/H2',
    component: H2
} as Meta<typeof H2>;

export const h2: StoryObj<typeof H2> = {
    render: (args) => <H2 {...args} />,
    args: {
        children: 'h2 headline',
        textTransform: 'capitalize'
    }
};