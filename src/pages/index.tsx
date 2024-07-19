import { MatchList, Option, Select } from "@/components";
import { Filters } from "./styles";
import { useListFilter } from "@/hooks";
import { fetchMatches } from "@/api";
import { MatchDTO } from "@/types";

interface HomeProps {
  matches: MatchDTO[];
}

const Home = ({ matches }: HomeProps) => {
  const { setActiveFilter, activeFilter, filteredMatches, filters } =
    useListFilter(matches);

  return (
    <div>
      <Filters>
        <Select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
        >
          {filters.map((filter) => (
            <Option key={filter.value} value={filter.value}>
              {filter.label} ({filter.count})
            </Option>
          ))}
        </Select>
      </Filters>
      <MatchList matches={filteredMatches} />
    </div>
  );
};

export async function getServerSideProps() {
  // Simulate fetching data from an API using mockFetcher
  const matches = await fetchMatches();

  return {
    props: {
      matches,
    },
  };
}

export default Home;
