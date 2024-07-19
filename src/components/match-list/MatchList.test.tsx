import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { MatchList } from "./MatchList";
import { mockMatches } from "@/mock";
import { theme } from "@/styles/theme";
import { MatchDTO } from "@/types";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});

describe("MatchList", () => {
  const renderWithTheme = (ui: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it("renders MatchCard components when matches list is not empty", () => {
    renderWithTheme(<MatchList matches={mockMatches as MatchDTO[]} />);
    mockMatches.forEach((match) => {
      expect(screen.getByText(match.name)).toBeInTheDocument();
    });
  });

  it("renders with default emptyListText if none is provided", () => {
    renderWithTheme(<MatchList matches={[]} />);
    const message = screen.getByText(/No matches available./i);
    expect(message).toBeInTheDocument();
  });

  it("renders with provided emptyListText if specified", () => {
    const customText = "No upcoming matches.";
    renderWithTheme(<MatchList matches={[]} emptyListText={customText} />);
    const message = screen.getByText(customText);
    expect(message).toBeInTheDocument();
  });

  it("calls router.push when a MatchCard is clicked", () => {
    renderWithTheme(<MatchList matches={mockMatches as MatchDTO[]} />);
    const matchCard = screen.getByText(mockMatches[0].name);
    fireEvent.click(matchCard);
    expect(mockPush).toHaveBeenCalledWith(`/match/${mockMatches[0].id}`);
  });
});
