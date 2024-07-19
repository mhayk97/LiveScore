import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Button", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders the button with children", () => {
    renderWithTheme(<Button>Click Me</Button>);

    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    const handleClick = jest.fn();

    renderWithTheme(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByRole("button", { name: /click me/i }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies additional props to the button", () => {
    renderWithTheme(<Button data-testid="custom-button">Click Me</Button>);

    expect(screen.getByTestId("custom-button")).toBeInTheDocument();
  });
});
