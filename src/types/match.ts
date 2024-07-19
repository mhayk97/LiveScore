export enum StatusType {
  canceled = "canceled",
  notstarted = "notstarted",
  inprogress = "inprogress",
  finished = "finished",
}

export interface MatchDTO {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  date: string;
  time: string;
  status: {
    code: number;
    type: StatusType;
  };
  round: {
    round: number;
  };
  homeTeam: {
    id: number;
    name: string;
    slug: string;
    gender: string;
    subTeams: never[];
  };
  awayTeam: {
    id: number;
    name: string;
    slug: string;
    gender: string;
    subTeams: never[];
  };
  homeScore: {
    current: number;
    period1: number;
    normaltime: number;
  };
  awayScore: {
    current: number;
    period1: number;
    normaltime: number;
  };
  liveStatus: string;
}
