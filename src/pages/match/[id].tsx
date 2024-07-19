import { fetchMatchById } from "@/api";
import { MatchDetail } from "@/components";
import { MatchDTO } from "@/types";
import { NoFoundText } from "./styles";

interface MatchProps {
  match: MatchDTO;
}

const MatchPage = ({ match }: MatchProps) => {
  if (!match) return <NoFoundText>Match Not Found</NoFoundText>;

  return <MatchDetail match={match} />;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const match = await fetchMatchById(id);

  return {
    props: {
      match,
    },
  };
}

export default MatchPage;
