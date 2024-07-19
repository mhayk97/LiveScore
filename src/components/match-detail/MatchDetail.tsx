import React from "react";

import {
  DetailWrapper,
  MatchInfo,
  CountryName,
  CompetitionName,
  MatchState,
  MatchScore,
  TeamsContainer,
} from "./styles";
import Timer from "../timer/Timer";
import { STATUS_INFO, getStatusInfo } from "@/constants";
import { formatToMatchDate } from "@/utils/date";
import { MatchDTO, StatusType } from "@/types";
import { timeStamp } from "console";

interface ItemDetailProps {
  match: MatchDTO;
}

const formatMatchScore = (homeScore: number, awayScore: number): string => {
  return `${homeScore || 0} - ${awayScore || 0}`;
};

const getStateText = (status: StatusType, timestamp: number) => {
  if (status === StatusType.notstarted) {
    return formatToMatchDate(timestamp);
  }
  return STATUS_INFO[status].text;
};

export const MatchDetail: React.FC<ItemDetailProps> = ({ match }) => {
  const {
    country,
    competition,
    status,
    timestamp,
    homeScore,
    awayScore,
    homeTeam,
    liveStatus,
    awayTeam,
  } = match;
  const score = formatMatchScore(homeScore.current, awayScore.current);
  const stateText = getStateText(status.type, timestamp);
  return (
    <DetailWrapper>
      <MatchInfo>
        <CountryName>{country}</CountryName>
        <CompetitionName>{competition}</CompetitionName>
        <MatchState status={status?.type}>{stateText}</MatchState>
      </MatchInfo>
      <MatchScore>{score}</MatchScore>
      <TeamsContainer>
        <h2>{homeTeam.name}</h2>
        <Timer status={status?.type} liveStatus={liveStatus} />
        <h2>{awayTeam.name}</h2>
      </TeamsContainer>
    </DetailWrapper>
  );
};
