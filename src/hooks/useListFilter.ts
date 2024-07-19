import { MatchDTO, StatusType } from "@/types";
import { useMemo, useState } from "react";

export const useListFilter = (matches: MatchDTO[]) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = useMemo(
    () => [
      { label: "All", value: "all", count: matches.length },
      {
        label: "Result",
        value: StatusType.finished,
        count: matches.filter(
          (m: MatchDTO) => m.status.type === StatusType.finished
        ).length,
      },
      {
        label: "Live",
        value: StatusType.inprogress,
        count: matches.filter(
          (m: MatchDTO) => m.status.type === StatusType.inprogress
        ).length,
      },
      {
        label: "Upcoming",
        value: StatusType.notstarted,
        count: matches.filter(
          (m: MatchDTO) => m.status.type === StatusType.notstarted
        ).length,
      },
      {
        label: "Canceled",
        value: StatusType.canceled,
        count: matches.filter(
          (m: MatchDTO) => m.status.type === StatusType.canceled
        ).length,
      },
    ],
    [matches]
  );

  const filteredMatches = useMemo(
    () =>
      matches.filter(
        (match: MatchDTO) =>
          activeFilter === "all" || match.status.type === activeFilter
      ),
    [matches, activeFilter]
  );

  return {
    filteredMatches,
    filters,
    setActiveFilter,
    activeFilter,
  };
};
