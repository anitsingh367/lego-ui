import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BodyBig } from './';

export default {
    title: 'Typography/BodyBig',
    component: BodyBig,
    argTypes: {
        fontWeight: { control: 'number' }
    }
} as Meta<typeof BodyBig>;

export const bodyBig: StoryObj<typeof BodyBig> = {
    render: (args) => <BodyBig {...args} />,
    args: {
        children: 'Body Big',
        textTransform: 'capitalize'
    }
};