import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.darkHeavy};
  text-align: left;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.md} 0;
    text-align: center;
  }
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.typography.fontSize.xLarge};
  cursor: pointer;
  display: inline-block;
  &:hover {
    color: ${(props) => props.theme.colors.muted};
  }
`;
