import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BodyMedium } from './';

export default {
    title: 'Typography/BodyMedium',
    component: BodyMedium,
    argTypes: {
        fontWeight: { control: 'number' }
    }
} as Meta<typeof BodyMedium>;

export const bodyMedium: StoryObj<typeof BodyMedium> = {
    render: (args) => <BodyMedium {...args} />,
    args: {
        children: 'Body Medium',
        textTransform: 'capitalize'
    }
};