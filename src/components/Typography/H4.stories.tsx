import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H4 } from './';

export default {
    title: 'Typography/H4',
    component: H4
} as Meta<typeof H4>;

export const h4: StoryObj<typeof H4> = {
    render: (args) => <H4 {...args} />,
    args: {
        children: 'h4 headline',
        textTransform: 'capitalize'
    }
};