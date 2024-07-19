import { theme } from "@/styles/theme";

const getFinishedProperties = () => ({
  content: "FT",
  color: theme.colors.green,
  progress: 100,
});

const getInProgressHTProperties = () => ({
  content: "HT",
  color: theme.colors.green,
  progress: 50,
});

const getInProgressMinuteProperties = (minute: number) => {
  const progress = minute >= 90 ? 100 : ((minute - 1) / 90) * 100;
  return {
    content: `${minute}'`,
    color: theme.colors.light,
    progress,
  };
};

const getDefaultProperties = () => ({
  content: "",
  color: theme.colors.light,
  progress: 0,
});

export const getTimerProperties = (status: string, liveStatus: string) => {
  const minute = parseInt(liveStatus, 10);

  switch (status) {
    case "finished":
      return getFinishedProperties();
    case "inprogress":
      if (liveStatus === "HT") {
        return getInProgressHTProperties();
      }
      return getInProgressMinuteProperties(minute);
    default:
      return getDefaultProperties();
  }
};
