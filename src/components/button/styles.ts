import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant: "primary" | "secondary" | "danger";
}

const variantStyles = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};

    &:hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.dark};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondaryHover};
    }
  `,
  danger: css`
    background-color: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.light};

    &:hover {
      background-color: ${(props) => props.theme.colors.dangerHover};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  align-self: center;
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  transition: background-color 0.3s ease;

  ${(props) => variantStyles[props.variant]}

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none; 
`;
