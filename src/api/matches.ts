import { mockFetcher, mockMatches } from "@/mock";
import { MatchDTO } from "@/types";

export const fetchMatches = async (): Promise<MatchDTO[]> => {
  let matches: MatchDTO[] = [];
  try {
    matches = await mockFetcher<MatchDTO[]>(mockMatches as MatchDTO[]);
  } catch (error) {
    console.error("Error fetching matches:", error);
    matches = [];
  }
  return matches;
};

export const fetchMatchById = async (id: string): Promise<MatchDTO | null> => {
  let match: MatchDTO | null = null;
  try {
    const matches = await mockFetcher<MatchDTO[]>(mockMatches as MatchDTO[]);
    match = matches.find((m) => m.id === id) || null;
  } catch (error) {
    match = null;
    console.error("Error fetching matches:", error);
  }
  return match;
};
