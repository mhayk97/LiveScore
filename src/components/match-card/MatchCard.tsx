import React from "react";
import {
  MatchCardContainer,
  MatchDetails,
  MatchHeader,
  MatchMeta,
  Competition,
  MatchStatus,
} from "./styles";
import { Button } from "../button";
import { getStatusInfo } from "@/constants";
import { MatchDTO } from "@/types";

interface MatchCardProps {
  match: MatchDTO;
  onClick?: (id: string) => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onClick = () => {} }) => {
  const { name, competition, status, id } = match;
  const statusName = status.type;
  const statusInfo = getStatusInfo(statusName);
  const handleClick = () => {
    onClick(id);
  };

  return (
    <MatchCardContainer onClick={handleClick}>
      <MatchDetails>
        <MatchHeader>{name}</MatchHeader>
        <MatchMeta>
          <Competition>{competition}</Competition>
          <MatchStatus backgroundColor={statusInfo.bgColor}>
            {statusInfo.text}
          </MatchStatus>
        </MatchMeta>
      </MatchDetails>
      <Button onClick={handleClick}>View Details</Button>
    </MatchCardContainer>
  );
};

export default MatchCard;
