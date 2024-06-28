import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { H1 } from './';

export default {
    title: 'Typography/H1',
    component: H1
} as Meta<typeof H1>;

export const h1: StoryObj<typeof H1> = {
    render: (args) => <H1 {...args} />,
    args: {
        children: 'h1 headline',
        textTransform: 'capitalize'
    }
};