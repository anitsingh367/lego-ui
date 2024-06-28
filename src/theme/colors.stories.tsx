import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { useTheme } from '@mui/material/styles';

import { Box, BodyMedium } from '../components';

const COLOR_OPTIONS = ['primary', 'secondary', 'tertiary', 'neutral', 'info', 'warning', 'success', 'error'];

const Colors = () => {
    const { palette } = useTheme();
    return (
        <>
            {COLOR_OPTIONS.map((colorKey, index) => (
                <React.Fragment key={index}>
                    <Box width={'100%'} bgcolor={palette[colorKey].light} display="flex" p={4}>
                        <BodyMedium color={palette[colorKey].contrastText} mr={2}>{`${colorKey}.light`}</BodyMedium>
                        <BodyMedium color={palette[colorKey].contrastText}>{palette[colorKey].light}</BodyMedium>
                    </Box>
                    <Box width={'100%'} bgcolor={palette[colorKey].main} display="flex" p={4}>
                        <BodyMedium color={palette[colorKey].contrastText} mr={2}>{`${colorKey}.main`}</BodyMedium>
                        <BodyMedium color={palette[colorKey].contrastText}>{palette[colorKey].main}</BodyMedium>
                    </Box>
                    <Box width={'100%'} bgcolor={palette[colorKey].dark} display="flex" p={4}>
                        <BodyMedium color={palette[colorKey].contrastText} mr={2}>{`${colorKey}.dark`}</BodyMedium>
                        <BodyMedium color={palette[colorKey].contrastText}>{palette[colorKey].dark}</BodyMedium>
                    </Box>
                </React.Fragment>
            ))}
        </>
    );
};

export default {
    title: 'Colors',
    component: Colors,
} as Meta<typeof Colors>;

export const AllColors: StoryObj<typeof Colors> = {
    render: () => <Colors />,
};