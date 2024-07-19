import { format } from "date-fns";

export const formatToMatchDate = (timestamp: number): string => {
  const matchDate = new Date(timestamp * 1000);
  return format(matchDate, "MMM do, HH:mm");
};
