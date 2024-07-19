import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./Header";
import { theme } from "@/styles/theme";

describe("Header", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders the logo with text 'Live Score'", () => {
    renderWithTheme(<Header />);
    const logoElement = screen.getByText(/Live Score/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("calls the provided onClick handler when the logo is clicked", () => {
    const handleClick = jest.fn();
    renderWithTheme(<Header onClick={handleClick} />);
    const logoElement = screen.getByText(/Live Score/i);
    fireEvent.click(logoElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
