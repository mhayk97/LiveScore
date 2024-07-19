import React from "react";
import { StyledSelect, StyledOption, SelectContainer } from "./styles";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  children,
  value,
  onChange,
  ...props
}) => (
  <SelectContainer>
    <StyledSelect value={value} onChange={onChange} {...props}>
      {children}
    </StyledSelect>
  </SelectContainer>
);

export const Option: React.FC<OptionProps> = ({ children, ...props }) => (
  <StyledOption {...props}>{children}</StyledOption>
);
