import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 180px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 250px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    width: 0.5em;
    height: 0.3em;
    background-color: ${(props) => props.theme.colors.light};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select`
  padding: ${(props) => props.theme.spacing.sm};
  border: none;
  background-color: ${(props) => props.theme.colors.darkHeavy};
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  border-radius: 5px;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkHover};
  }

  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.darkHeavy};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.typography.fontSize.large};
    padding: ${(props) => props.theme.spacing.md};
  }
`;

export const StyledOption = styled.option`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
`;
