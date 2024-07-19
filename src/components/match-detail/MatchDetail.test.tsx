import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { STATUS_INFO } from "@/constants";
import { theme } from "@/styles/theme";
import { MatchDetail } from "./MatchDetail";
import { formatToMatchDate } from "@/utils/date";
import { StatusType } from "@/types";
import { mockMatch } from "@/mock";

jest.mock("../../utils/date");
jest.mock("../timer/Timer", () => () => <div data-testid="timer">Timer</div>);

describe("MatchDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the match details with finished status", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MatchDetail match={mockMatch} />
      </ThemeProvider>
    );

    expect(getByText(mockMatch.country)).toBeInTheDocument();
    expect(getByText(mockMatch.competition)).toBeInTheDocument();
    expect(
      getByText(STATUS_INFO[mockMatch.status.type].text)
    ).toBeInTheDocument();
    expect(getByText("0 - 0")).toBeInTheDocument();
    expect(getByText(mockMatch.homeTeam.name)).toBeInTheDocument();
    expect(getByText(mockMatch.awayTeam.name)).toBeInTheDocument();
    expect(getByTestId("timer")).toBeInTheDocument();
  });

  it("should render the match details with notstarted status", () => {
    (formatToMatchDate as jest.Mock).mockReturnValue("Aug 6th, 14:00");

    const mockNotStartedMatch = {
      ...mockMatch,
      status: {
        type: StatusType.notstarted,
        code: 1,
      },
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MatchDetail match={mockNotStartedMatch} />
      </ThemeProvider>
    );

    expect(getByText("Aug 6th, 14:00")).toBeInTheDocument();
  });

  it("should render the match details with inprogress status", () => {
    const mockInProgressMatch = {
      ...mockMatch,
      status: {
        type: StatusType.inprogress,
        code: 1,
      },
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MatchDetail match={mockInProgressMatch} />
      </ThemeProvider>
    );

    expect(
      getByText(STATUS_INFO[StatusType.inprogress].text)
    ).toBeInTheDocument();
  });
});
