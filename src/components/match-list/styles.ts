import styled from "styled-components";

export const NoMatchesMessage = styled.p`
  text-align: center;
  ${({ theme }) => `
    font-size: ${theme.typography.fontSize.large};
    margin: ${theme.spacing.lg} 0;
    color: ${theme.colors.muted || "#666"};
  `}
`;

export const MatchesContainer = styled.ul`
  ${({ theme }) => `
    margin: ${theme.spacing.lg} auto;
    font-size: ${theme.typography.fontSize.medium};
    
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.typography.fontSize.small};
    }
  `}
`;

export const MatchListItem = styled.li`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing.md};
  `}
`;
