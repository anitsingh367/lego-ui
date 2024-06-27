import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './';

export default {
    title: 'Tooltip',
    component: Tooltip
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = (props) => {
    return <Tooltip {...props} />;
};
Basic.args = {
    title: 'Tooltip',
    children: <Button>Hover Over Me</Button>,
    placement: 'right'
};
