import { STATUS_INFO } from "@/constants";
import { StatusType } from "@/types";
import styled from "styled-components";

export const MatchCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding-top: ${(props) => props.theme.spacing.lg};
    padding-bottom: ${(props) => props.theme.spacing.lg};
  }
`;

export const MatchDetails = styled.div`
  display: grid;
  gap: 8px;
`;

export const MatchHeader = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.typography.fontSize.large};
  color: ${(props) => props.theme.colors.light};
`;

export const MatchMeta = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.breakpoints.xs};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Competition = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  color: ${(props) => props.theme.colors.darkSecondary};
`;

export const MatchStatus = styled.div<{
  backgroundColor: string;
}>`
  margin: 0 ${(props) => props.theme.spacing.sm};
  padding: 2px 6px;
  border-radius: 12px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: bold;
  text-transform: capitalize;
  min-width: 60px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 8px;
  }
`;
