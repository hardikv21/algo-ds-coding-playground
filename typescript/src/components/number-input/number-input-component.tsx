import { ForwardedRef, forwardRef } from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";

import {
  StyledInputRoot,
  StyledInputElement,
  StyledButton,
} from "./styled-components";

export const NumberInputComponent = forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: "▴",
        },
        decrementButton: {
          children: "▾",
        },
      }}
      {...props}
      ref={ref}
    />
  );
});
