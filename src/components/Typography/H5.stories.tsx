import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H5 } from './';

export default {
    title: 'Typography/H5',
    component: H5
} as Meta<typeof H5>;

export const h5: StoryObj<typeof H5> = {
    render: (args) => <H5 {...args} />,
    args: {
        children: 'h5 headline',
        textTransform: 'capitalize'
    }
};