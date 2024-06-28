import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BodySmall } from './';

export default {
    title: 'Typography/BodySmall',
    component: BodySmall,
    argTypes: {
        fontWeight: { control: 'number' }
    }
} as Meta<typeof BodySmall>;

export const bodySmall: StoryObj<typeof BodySmall> = {
    render: (args) => <BodySmall {...args} />,
    args: {
        children: 'Body Small',
        textTransform: 'capitalize'
    }
};