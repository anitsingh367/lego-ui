import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BodyXS } from './';

export default {
    title: 'Typography/BodyXS',
    component: BodyXS,
    argTypes: {
        fontWeight: { control: 'number' }
    }
} as Meta<typeof BodyXS>;

export const bodyXS: StoryObj<typeof BodyXS> = {
    render: (args) => <BodyXS {...args} />,
    args: {
        children: 'Body Extra Small',
        textTransform: 'capitalize'
    }
};