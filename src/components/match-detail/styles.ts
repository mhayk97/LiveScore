import { STATUS_INFO } from "@/constants";
import { StatusType } from "@/types";
import styled from "styled-components";

export const DetailWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.light};
  letter-spacing: 1px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.theme.spacing.lg};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

export const MatchInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const CountryName = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  color: ${(props) => props.theme.colors.darkSecondary};
  text-transform: uppercase;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.typography.fontSize.small};
  }
`;

export const CompetitionName = styled.h1`
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-weight: 200;
  color: ${(props) => props.theme.colors.light};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.typography.fontSize.large};
  }
`;

export const MatchState = styled.span<{ status: StatusType }>`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  color: ${(props) => STATUS_INFO[props.status].color};
  text-transform: uppercase;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.typography.fontSize.small};
  }
`;

export const MatchScore = styled.div`
  text-align: center;
  margin: ${(props) => props.theme.spacing.xl} 0;
  font-size: ${(props) => props.theme.typography.fontSize.xxxLarge};
  font-weight: 300;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.typography.fontSize.xxLarge};
    margin: ${(props) => props.theme.spacing.lg} 0;
  }
`;

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.light};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-weight: 300;
    flex-basis: 33%;
    text-align: center;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      font-size: ${(props) => props.theme.typography.fontSize.large};
      flex-basis: auto;
      margin-top: ${(props) => props.theme.spacing.sm};
    }
  }
`;
