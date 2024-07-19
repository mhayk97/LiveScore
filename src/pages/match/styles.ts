import styled from "styled-components";

export const NoFoundText = styled.p`
  text-align: center;
  ${({ theme }) => `
  font-size: ${theme.typography.fontSize.large};
  margin: ${theme.spacing.lg} 0;
  color: ${theme.colors.muted || "#666"};
`}
`;
