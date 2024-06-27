import { default as MUIBox, BoxProps } from '@mui/material/Box';
import { forwardRef } from 'react';

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    return <MUIBox ref={ref} {...props} />;
});
