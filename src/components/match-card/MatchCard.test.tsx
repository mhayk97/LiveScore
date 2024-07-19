import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MatchCard from "./MatchCard";
import { mockMatch } from "@/mock";

const mockTheme = {
  typography: {
    fontSize: {
      large: "1.5rem",
    },
  },
  spacing: {
    lg: "16px",
  },
  colors: {
    muted: "#666",
  },
  breakpoints: {
    md: "768px",
  },
};

describe("MatchCard", () => {
  const renderWithTheme = (ui: React.ReactElement) => {
    return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
  };

  it("renders match details correctly", () => {
    renderWithTheme(<MatchCard match={mockMatch} />);
    expect(screen.getByText(mockMatch.name)).toBeInTheDocument();
    expect(screen.getByText(mockMatch.competition)).toBeInTheDocument();
    expect(screen.getByText("Live")).toBeInTheDocument();
  });
  it("calls the provided onClick handler when the card is clicked", () => {
    const handleClick = jest.fn();
    renderWithTheme(<MatchCard match={mockMatch} onClick={handleClick} />);
    const cardElement = screen.getByText(mockMatch.name);
    fireEvent.click(cardElement);
    expect(handleClick).toHaveBeenCalledWith(mockMatch.id);
  });

  it("calls the provided onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    renderWithTheme(<MatchCard match={mockMatch} onClick={handleClick} />);
    const button = screen.getByText("View Details");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(mockMatch.id);
  });
});
