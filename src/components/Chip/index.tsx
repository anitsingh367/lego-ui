import {
  default as MUIChip,
  ChipProps as MUIChipProps,
} from "@mui/material/Chip";
import { forwardRef } from "react";

export interface ChipProps extends Omit<MUIChipProps, "classes"> {
  label: string;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ label, ...rest }, ref) => {
    return <MUIChip ref={ref} label={label} {...rest} />;
  }
);

Chip.defaultProps = {
  variant: "outlined",
};
