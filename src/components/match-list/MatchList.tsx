import { useRouter } from "next/router";
import MatchCard from "../match-card/MatchCard";
import { MatchListItem, MatchesContainer, NoMatchesMessage } from "./styles";
import { MatchDTO } from "@/types";

interface MatchListProps {
  matches: MatchDTO[];
  emptyListText?: string;
}

export const MatchList = ({
  matches = [],
  emptyListText = "No matches available.",
}: MatchListProps) => {
  const router = useRouter();

  if (matches.length === 0) {
    return <NoMatchesMessage>{emptyListText}</NoMatchesMessage>;
  }

  const handleClick = (id: string) => {
    router.push(`/match/${id}`);
  };

  return (
    <MatchesContainer>
      {matches.map((match: MatchDTO) => (
        <MatchListItem key={match.id}>
          <MatchCard match={match} onClick={handleClick} />
        </MatchListItem>
      ))}
    </MatchesContainer>
  );
};
