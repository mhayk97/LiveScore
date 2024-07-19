import { StatusType } from "@/types";
import { theme } from "@/styles/theme";

export const STATUS_INFO = {
  [StatusType.canceled]: {
    text: "Canceled",
    color: theme.colors.danger,
    bgColor: theme.colors.danger,
  },
  [StatusType.notstarted]: {
    text: "Pre-Match",
    color: theme.colors.darkSecondary,
    bgColor: theme.colors.blue,
  },
  [StatusType.inprogress]: {
    text: "Live",
    color: theme.colors.info,
    bgColor: theme.colors.success,
  },
  [StatusType.finished]: {
    text: "Ended",
    color: theme.colors.success,
    bgColor: theme.colors.muted,
  },
  default: {
    text: "",
    color: theme.colors.darkSecondary,
    bgColor: theme.colors.blue,
  },
};

export const getStatusInfo = (status: StatusType) => {
  return STATUS_INFO[status] || STATUS_INFO.default;
};
